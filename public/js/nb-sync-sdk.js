/**
 * NB Sync SDK v2 — Parent-side SDK for syncing Virtual Lab
 * 
 * Supports two modes:
 * 1. LOCAL RELAY — two instances on the same page relay via shared registry
 * 2. PEERJS — cross-device sync via WebRTC (PeerJS loaded from local file)
 *
 * Usage:
 *   const lab = new NBLabSync({
 *     containerId: 'lab-container',
 *     labUrl: '/chemical/virtuallab.html?moduleId=9&ignoreBlock=true',
 *     role: 'presenter',
 *     roomId: 'class-001',
 *     userId: 'teacher-001',
 *     mode: 'local'   // 'local' or 'webrtc'
 *   });
 */
(function (root, factory) {
  if (typeof module !== 'undefined' && module.exports) module.exports = factory();
  else root.NBLabSync = factory();
})(typeof window !== 'undefined' ? window : this, function () {
  'use strict';

  var MSG_PREFIX = 'NB_SYNC';

  // ═══════════════════ SHARED LOCAL REGISTRY ═══════════════════
  // For same-page sync: presenter and viewer share this registry
  if (!window.__nbSyncRegistry) {
    window.__nbSyncRegistry = {
      rooms: {},  // roomId -> { presenter: instance, viewers: [instances] }
    };
  }
  var registry = window.__nbSyncRegistry;

  // ═══════════════════ EVENT EMITTER ═══════════════════
  function EventEmitter() { this._h = {}; }
  EventEmitter.prototype.on = function(e, fn) {
    (this._h[e] = this._h[e] || []).push(fn); return this;
  };
  EventEmitter.prototype.off = function(e, fn) {
    this._h[e] = (this._h[e] || []).filter(function(f) { return f !== fn; });
  };
  EventEmitter.prototype.emit = function(e) {
    var args = [].slice.call(arguments, 1);
    (this._h[e] || []).forEach(function(fn) { try { fn.apply(null, args); } catch(ex) {} });
  };

  // ═══════════════════ NBLabSync CLASS ═══════════════════
  function NBLabSync(config) {
    EventEmitter.call(this);
    this.config = Object.assign({
      containerId: null,
      containerEl: null,
      labUrl: '/chemical/virtuallab.html?moduleId=9&ignoreBlock=true',
      role: 'presenter',
      roomId: 'default-room',
      userId: 'user_' + Math.random().toString(36).substr(2, 8),
      mode: 'local',  // 'local' or 'webrtc'
      debug: true
    }, config);

    this._iframe = null;
    this._iframeReady = false;
    this._lastSnapshot = null;
    this._destroyed = false;
    this._peer = null;
    this._connections = {};
    this._peerReady = false;

    this._onMessage = this._handleIframeMessage.bind(this);
    window.addEventListener('message', this._onMessage);

    this._createIframe();
    
    if (this.config.mode === 'local') {
      this._registerLocal();
    } else if (this.config.mode === 'webrtc') {
      this._initPeer();
    }
  }

  NBLabSync.prototype = Object.create(EventEmitter.prototype);
  NBLabSync.prototype.constructor = NBLabSync;

  // ═══════════════════ IFRAME ═══════════════════
  NBLabSync.prototype._createIframe = function() {
    var container = this.config.containerEl || document.getElementById(this.config.containerId);
    if (!container) { this._log('Container not found!'); return; }

    this._iframe = document.createElement('iframe');
    this._iframe.src = this.config.labUrl;
    this._iframe.style.cssText = 'width:100%;height:100%;border:none;';
    this._iframe.setAttribute('allow', 'autoplay; fullscreen');
    // No sandbox — it blocks too many things
    container.innerHTML = '';
    container.appendChild(this._iframe);
    this._log('Iframe created');
  };

  NBLabSync.prototype._sendToIframe = function(action, payload) {
    if (!this._iframe || !this._iframe.contentWindow) return;
    this._iframe.contentWindow.postMessage({
      type: MSG_PREFIX, action: action, payload: payload || {}, timestamp: Date.now()
    }, '*');
  };

  // ═══════════════════ IFRAME MESSAGE HANDLER ═══════════════════
  NBLabSync.prototype._handleIframeMessage = function(event) {
    var msg = event.data;
    if (!msg || msg.type !== MSG_PREFIX) return;
    if (this._iframe && event.source !== this._iframe.contentWindow) return;

    switch (msg.action) {
      case 'BRIDGE_READY':
        this._iframeReady = true;
        this._log('Bridge ready (mode: ' + (msg.payload.mode || 'unknown') + ')');
        this._sendToIframe('SET_ROLE', { role: this.config.role, userId: this.config.userId });
        this.emit('ready', msg.payload);
        break;

      case 'INPUT_EVENT':
      case 'CANVAS_EVENT':
        if (this.config.role === 'presenter') {
          this._broadcast({ action: msg.action, payload: msg.payload });
        }
        break;

      case 'EXECUTE_CMD':
        // Layer 2: presenter execute command → relay to viewers
        if (this.config.role === 'presenter') {
          this._broadcast({ action: 'EXECUTE_CMD', payload: msg.payload });
          this.emit('command', msg.payload);
        }
        break;

      case 'DISPATCH_ACTION':
        // Layer 3: presenter DVA dispatch → relay to viewers
        if (this.config.role === 'presenter') {
          this._broadcast({ action: 'DISPATCH_ACTION', payload: msg.payload });
          this.emit('dispatch', msg.payload);
        }
        break;

      case 'STATE_SNAPSHOT':
        this._lastSnapshot = msg.payload;
        this._broadcast({ action: 'STATE_SNAPSHOT', payload: msg.payload });
        this.emit('snapshot', msg.payload);
        break;
    }
  };

  // ═══════════════════ LOCAL RELAY MODE ═══════════════════
  NBLabSync.prototype._registerLocal = function() {
    var room = registry.rooms[this.config.roomId];
    if (!room) room = registry.rooms[this.config.roomId] = { presenter: null, viewers: [] };

    if (this.config.role === 'presenter') {
      room.presenter = this;
      this._log('Registered as LOCAL presenter in room', this.config.roomId);
      // Notify existing viewers
      room.viewers.forEach(function(v) { v.emit('peerConnected', 'presenter'); });
    } else {
      room.viewers.push(this);
      this._log('Registered as LOCAL viewer in room', this.config.roomId);
      if (room.presenter) {
        this.emit('peerConnected', 'presenter');
        room.presenter.emit('peerConnected', this.config.userId);
      }
    }
  };

  NBLabSync.prototype._broadcast = function(data) {
    if (this.config.mode === 'local') {
      this._broadcastLocal(data);
    } else {
      this._broadcastToPeers(data);
    }
  };

  NBLabSync.prototype._broadcastLocal = function(data) {
    var room = registry.rooms[this.config.roomId];
    if (!room) return;

    var self = this;
    if (this.config.role === 'presenter') {
      // Presenter → all viewers
      room.viewers.forEach(function(viewer) {
        if (viewer !== self && !viewer._destroyed) {
          viewer._handleIncomingData(data);
        }
      });
    } else {
      // Viewer → presenter
      if (room.presenter && room.presenter !== self && !room.presenter._destroyed) {
        room.presenter._handleIncomingData(data);
      }
    }
  };

  NBLabSync.prototype._requestSnapshot = function() {
    if (this.config.mode === 'local') {
      var room = registry.rooms[this.config.roomId];
      if (room && room.presenter && room.presenter._lastSnapshot) {
        this._log('Got snapshot from local presenter');
        this._handleIncomingData({ 
          action: 'STATE_SNAPSHOT', 
          payload: room.presenter._lastSnapshot 
        });
      } else {
        this._log('No local presenter snapshot yet, requesting...');
        this._broadcast({ action: 'REQUEST_SNAPSHOT' });
      }
    } else {
      this._broadcastToPeers({ action: 'REQUEST_SNAPSHOT' });
    }
  };

  // ═══════════════════ INCOMING DATA (from peers or local relay) ═══════════════════
  NBLabSync.prototype._handleIncomingData = function(data) {
    if (!data || !data.action) return;
    switch (data.action) {
      case 'INPUT_EVENT':
      case 'CANVAS_EVENT':
        this._sendToIframe(data.action, data.payload);
        break;
      case 'EXECUTE_CMD':
        // Layer 2: forward execute command to viewer iframe
        this._sendToIframe('EXECUTE_CMD', data.payload);
        break;
      case 'DISPATCH_ACTION':
        // Layer 3: forward DVA action to viewer iframe
        this._sendToIframe('DISPATCH_ACTION', data.payload);
        break;
      case 'STATE_SNAPSHOT':
        this._lastSnapshot = data.payload;
        this._sendToIframe('APPLY_SNAPSHOT', data.payload);
        this.emit('snapshotReceived', data.payload);
        break;
      case 'REQUEST_SNAPSHOT':
        if (!this._lastSnapshot) {
          this._sendToIframe('REQUEST_SNAPSHOT');
        }
        break;
    }
  };

  // ═══════════════════ PEERJS MODE ═══════════════════
  NBLabSync.prototype._initPeer = function() {
    var self = this;
    if (typeof Peer === 'undefined') {
      // Load from local file instead of CDN
      var script = document.createElement('script');
      script.src = '/js/peerjs.min.js';
      script.onload = function() { self._log('PeerJS loaded'); self._createPeer(); };
      script.onerror = function() { 
        self._log('PeerJS local load failed, trying CDN...');
        var s2 = document.createElement('script');
        s2.src = 'https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';
        s2.onload = function() { self._createPeer(); };
        s2.onerror = function() { self._log('PeerJS failed to load!'); };
        document.head.appendChild(s2);
      };
      document.head.appendChild(script);
    } else {
      this._createPeer();
    }
  };

  NBLabSync.prototype._createPeer = function() {
    var self = this;
    var peerId = this.config.role === 'presenter'
      ? 'nb-' + this.config.roomId + '-presenter'
      : 'nb-' + this.config.roomId + '-v-' + this.config.userId;
    peerId = peerId.replace(/[^a-zA-Z0-9_-]/g, '_');

    this._log('Creating peer:', peerId);
    this._peer = new Peer(peerId, { debug: 0 });

    this._peer.on('open', function(id) {
      self._peerReady = true;
      self._log('Peer open:', id);
      self.emit('peerOpen', id);
      if (self.config.role === 'viewer') {
        var pid = ('nb-' + self.config.roomId + '-presenter').replace(/[^a-zA-Z0-9_-]/g, '_');
        self._connectToPeer(pid);
      }
    });
    this._peer.on('connection', function(conn) { self._setupConn(conn); });
    this._peer.on('error', function(err) {
      self._log('Peer error:', err.type);
      self.emit('error', err);
      if (err.type === 'peer-unavailable') {
        setTimeout(function() { if (!self._destroyed) {
          var pid = ('nb-' + self.config.roomId + '-presenter').replace(/[^a-zA-Z0-9_-]/g, '_');
          self._connectToPeer(pid);
        }}, 3000);
      }
    });
  };

  NBLabSync.prototype._connectToPeer = function(peerId) {
    if (this._connections[peerId] || !this._peer || !this._peerReady) return;
    this._setupConn(this._peer.connect(peerId, { reliable: true }));
  };

  NBLabSync.prototype._setupConn = function(conn) {
    var self = this, peerId = conn.peer;
    conn.on('open', function() {
      self._connections[peerId] = conn;
      self.emit('peerConnected', peerId);
      if (self.config.role === 'presenter' && self._lastSnapshot)
        conn.send({ action: 'STATE_SNAPSHOT', payload: self._lastSnapshot });
      if (self.config.role === 'viewer')
        conn.send({ action: 'REQUEST_SNAPSHOT' });
    });
    conn.on('data', function(data) { self._handleIncomingData(data); });
    conn.on('close', function() { delete self._connections[peerId]; self.emit('peerDisconnected', peerId); });
  };

  NBLabSync.prototype._broadcastToPeers = function(data) {
    var self = this;
    Object.keys(this._connections).forEach(function(pid) {
      var c = self._connections[pid];
      if (c && c.open) try { c.send(data); } catch(e) {}
    });
  };

  // ═══════════════════ PUBLIC API ═══════════════════
  NBLabSync.prototype.getConnectedPeers = function() {
    if (this.config.mode === 'local') {
      var room = registry.rooms[this.config.roomId];
      if (!room) return [];
      if (this.config.role === 'presenter') 
        return room.viewers.filter(function(v){return !v._destroyed;}).map(function(v){return v.config.userId;});
      return room.presenter && !room.presenter._destroyed ? ['presenter'] : [];
    }
    return Object.keys(this._connections);
  };
  NBLabSync.prototype.getPeerId = function() { return this._peer ? this._peer.id : this.config.userId; };
  NBLabSync.prototype.getRoomId = function() { return this.config.roomId; };
  NBLabSync.prototype.requestSnapshot = function() { this._sendToIframe('REQUEST_SNAPSHOT'); };
  NBLabSync.prototype.getIframe = function() { return this._iframe; };

  NBLabSync.prototype.destroy = function() {
    this._destroyed = true;
    window.removeEventListener('message', this._onMessage);
    // Clean local registry
    var room = registry.rooms[this.config.roomId];
    if (room) {
      if (this.config.role === 'presenter') room.presenter = null;
      else room.viewers = room.viewers.filter(function(v) { return v !== this; }.bind(this));
    }
    // Clean WebRTC
    var self = this;
    Object.keys(this._connections).forEach(function(p) { try{self._connections[p].close();}catch(e){} });
    if (this._peer) try { this._peer.destroy(); } catch(e) {}
    // Remove iframe
    if (this._iframe && this._iframe.parentNode) this._iframe.parentNode.removeChild(this._iframe);
    this._iframe = null;
    this.emit('destroyed');
    this._log('Destroyed');
  };

  NBLabSync.prototype._log = function() {
    if (!this.config.debug) return;
    console.log.apply(console, ['[NBLabSync:' + this.config.role + ']'].concat([].slice.call(arguments)));
  };

  return NBLabSync;
});
