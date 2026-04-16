/**
 * NB Sync Bridge v12.1 — SMART HYBRID + STANDALONE (WebRTC + BroadcastChannel)
 * 
 * Modes:
 * 1. SDK Mode: Bridge inside iframe, SDK parent manages roles & relay via postMessage
 * 2. Standalone Mode: URL params ?syncRoom=X&syncRole=presenter|viewer
 *    → Auto-connects via BroadcastChannel (same-device) + PeerJS WebRTC (cross-device)
 */
(function () {
  'use strict';
  // Prevent double execution
  if (window.__nbSyncBridgeLoaded) return;
  window.__nbSyncBridgeLoaded = true;

  var BRIDGE_VERSION = '12.1.0';
  var MSG_PREFIX = 'NB_SYNC';
  var MAX_INIT_WAIT = 30000;

  // Execute commands to relay
  var RELAY_COMMANDS = {
    'e7c0a061a8159487760e13a1da8f3e4e': 'CREATE_EQUIPMENT',
    '459e9a120494e97d1f7f9925e349502e': 'DELETE_EQUIPMENT',
    'ac9d902f1b9249b7b3c34c1d51b8c9a3': 'ADD_EQUIPMENT'
  };
  var CMD_DELETE = '459e9a120494e97d1f7f9925e349502e';

  // DVA actions to relay
  var RELAY_DVA = ['schemModel/', 'formModel/', 'undoModel/', 'sensor', 'equipmentLibrary', 'experiment'];
  var SKIP_DVA = ['@@', 'dva/', 'loading/', 'routing/', 'redux-undo', 'EFFECT_'];

  var _isPresenter = false;
  var _isSyncing = false;
  var _ready = false;
  var _initStartTime = Date.now();
  var _userId = 'user_' + Math.random().toString(36).substr(2, 8);
  var _lastMoveTime = 0;
  var MOVE_THROTTLE = 8;
  var _origExecute = null;
  var _origDispatch = null;
  var _canvasEl = null;

  // Standalone mode vars
  var _urlParams = new URLSearchParams(window.location.search);
  var _syncRoom = _urlParams.get('syncRoom');
  var _syncRole = _urlParams.get('syncRole');
  var _standaloneMode = !!_syncRoom;
  var _bc = null;
  var _peer = null;
  var _peerConns = [];

  // ═══════════════════════════════════════════════════════
  // LOGGING
  // ═══════════════════════════════════════════════════════
  var _realLog = (function () {
    try {
      var f = document.createElement('iframe');
      f.style.display = 'none';
      (document.body || document.documentElement).appendChild(f);
      return f.contentWindow.console.log.bind(f.contentWindow.console);
    } catch (e) { return function () {}; }
  })();
  function log() {
    _realLog.apply(null, ['%c[NB-Sync]', 'color:#f97316;font-weight:bold;'].concat(
      [].slice.call(arguments)));
  }

  // ═══════════════════════════════════════════════════════
  // SEND TO PARENT (overridden in standalone mode)
  // ═══════════════════════════════════════════════════════
  var _sendToParentBase = function (action, payload) {
    if (window.parent === window) return;
    try {
      window.parent.postMessage({
        type: MSG_PREFIX, action: action, payload: payload || {},
        timestamp: Date.now(), userId: _userId, version: BRIDGE_VERSION
      }, '*');
    } catch (e) {}
  };
  // This gets overridden in standalone mode to also broadcast
  var sendToParent = _sendToParentBase;

  function safeClone(obj) {
    try { return JSON.parse(JSON.stringify(obj)); } catch (e) { return null; }
  }

  // ═══════════════════════════════════════════════════════
  // LAYER 1: CANVAS POINTER EVENTS
  // ═══════════════════════════════════════════════════════
  function startCanvasCapture() {
    _canvasEl = document.querySelector('canvas');
    if (!_canvasEl) { log('No canvas found!'); return false; }

    var dragging = false;
    var canvasRect = null;

    function refreshRect() { canvasRect = _canvasEl.getBoundingClientRect(); }
    function isInCanvas(e) {
      if (!canvasRect) refreshRect();
      return e.clientX >= canvasRect.left && e.clientX <= canvasRect.right &&
             e.clientY >= canvasRect.top && e.clientY <= canvasRect.bottom;
    }
    function sendPtr(evtType, e) {
      // Send as canvas-relative ratios (0..1) to handle different window sizes
      refreshRect();
      var rx = (e.clientX - canvasRect.left) / canvasRect.width;
      var ry = (e.clientY - canvasRect.top) / canvasRect.height;
      sendToParent('CANVAS_EVENT', {
        eventType: evtType, rx: rx, ry: ry,
        button: e.button, buttons: e.buttons,
        pointerId: e.pointerId || 1, pointerType: e.pointerType || 'mouse',
        pressure: e.pressure || 0
      });
    }

    document.addEventListener('pointerdown', function (e) {
      if (!_isPresenter || _isSyncing) return;
      refreshRect();
      if (isInCanvas(e)) { dragging = true; sendPtr('pointerdown', e); }
    }, { capture: true, passive: true });

    document.addEventListener('pointermove', function (e) {
      if (!_isPresenter || _isSyncing || !dragging) return;
      var now = Date.now();
      if (now - _lastMoveTime < MOVE_THROTTLE) return;
      _lastMoveTime = now;
      sendPtr('pointermove', e);
    }, { capture: true, passive: true });

    document.addEventListener('pointerup', function (e) {
      if (!_isPresenter || _isSyncing || !dragging) return;
      sendPtr('pointerup', e); dragging = false;
      // Double sync: fast + delayed (let PIXI finish animation)
      setTimeout(function () { sendPositionSync(); }, 200);
      setTimeout(function () { sendPositionSync(); }, 600);
    }, { capture: true, passive: true });

    document.addEventListener('pointercancel', function () { dragging = false; }, { capture: true, passive: true });

    // Click within canvas area only (send as ratio)
    document.addEventListener('click', function (e) {
      if (!_isPresenter || _isSyncing) return;
      refreshRect();
      if (isInCanvas(e)) {
        var rx = (e.clientX - canvasRect.left) / canvasRect.width;
        var ry = (e.clientY - canvasRect.top) / canvasRect.height;
        sendToParent('CANVAS_EVENT', { eventType: 'click', rx: rx, ry: ry, button: e.button });
      }
    }, { capture: true, passive: true });

    _canvasEl.addEventListener('wheel', function (e) {
      if (!_isPresenter || _isSyncing) return;
      sendToParent('CANVAS_EVENT', { eventType: 'wheel', x: e.clientX, y: e.clientY, deltaX: e.deltaX, deltaY: e.deltaY });
    }, { capture: false, passive: true });

    ['keydown', 'keyup'].forEach(function (evtType) {
      document.addEventListener(evtType, function (e) {
        if (!_isPresenter || _isSyncing) return;
        sendToParent('CANVAS_EVENT', {
          eventType: evtType, key: e.key, code: e.code,
          ctrlKey: e.ctrlKey, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey
        });
      }, { capture: true, passive: true });
    });

    log('✓ Layer 1: Document-level capture');
    return true;
  }

  function replayCanvasEvent(p) {
    if (!p || !p.eventType) return;
    var canvas = _canvasEl || document.querySelector('canvas');
    if (!canvas) return;
    try {
      var evtType = p.eventType;
      // Convert canvas-relative ratios back to clientX/Y
      var rect = canvas.getBoundingClientRect();
      var cx = p.rx != null ? (rect.left + p.rx * rect.width) : p.x;
      var cy = p.ry != null ? (rect.top + p.ry * rect.height) : p.y;

      if (evtType === 'keydown' || evtType === 'keyup') {
        var ke = new KeyboardEvent(evtType, {
          key: p.key, code: p.code, ctrlKey: p.ctrlKey, shiftKey: p.shiftKey,
          altKey: p.altKey, metaKey: p.metaKey, bubbles: true, cancelable: true
        });
        document.dispatchEvent(ke); canvas.dispatchEvent(ke);
        return;
      }
      if (evtType === 'wheel') {
        canvas.dispatchEvent(new WheelEvent('wheel', { clientX: cx, clientY: cy, deltaX: p.deltaX, deltaY: p.deltaY, bubbles: true, cancelable: true }));
        return;
      }
      if (evtType === 'click' || evtType === 'dblclick' || evtType === 'contextmenu') {
        canvas.dispatchEvent(new MouseEvent(evtType, { clientX: cx, clientY: cy, button: p.button || 0, bubbles: true, cancelable: true, view: window }));
        return;
      }
      canvas.dispatchEvent(new PointerEvent(evtType, {
        clientX: cx, clientY: cy, screenX: cx, screenY: cy,
        button: p.button, buttons: p.buttons, pointerId: p.pointerId || 1,
        pointerType: p.pointerType || 'mouse', pressure: p.pressure || (evtType === 'pointerup' ? 0 : 0.5),
        isPrimary: true, bubbles: true, cancelable: true, view: window
      }));
      var mouseMap = { 'pointerdown': 'mousedown', 'pointermove': 'mousemove', 'pointerup': 'mouseup', 'pointercancel': 'mouseup' };
      if (mouseMap[evtType]) {
        canvas.dispatchEvent(new MouseEvent(mouseMap[evtType], { clientX: cx, clientY: cy, button: p.button, buttons: p.buttons, bubbles: true, cancelable: true, view: window }));
      }
    } catch (e) {}
  }

  // ═══════════════════════════════════════════════════════
  // LAYER 2: EXECUTE COMMAND REPLAY
  // ═══════════════════════════════════════════════════════
  function findChildPath(parent, target) {
    if (!parent || !parent.children) return null;
    for (var i = 0; i < parent.children.length; i++) {
      if (parent.children[i] === target) return [i];
      var sub = findChildPath(parent.children[i], target);
      if (sub) return [i].concat(sub);
    }
    return null;
  }
  function getChildByPath(root, path) {
    if (!root || !path || !path.length) return null;
    var cur = root;
    for (var i = 0; i < path.length; i++) {
      if (!cur.children || !cur.children[path[i]]) return null;
      cur = cur.children[path[i]];
    }
    return cur;
  }

  function hookExecute() {
    var cm = window.chemicalMain;
    if (!cm || typeof cm.execute !== 'function') return false;
    _origExecute = cm.execute.bind(cm);

    cm.execute = function () {
      var args = [].slice.call(arguments);
      var cmd = args[0];

      // DELETE: capture path BEFORE deletion
      if (_isPresenter && !_isSyncing && cmd === CMD_DELETE && RELAY_COMMANDS[cmd]) {
        var deleteArg = args[1], target = null;
        if (deleteArg && deleteArg.eq) {
          var eq = deleteArg.eq;
          target = (Array.isArray(eq) || (eq.length != null && eq[0])) ? eq[0] : eq;
        }
        var path = target && cm.children ? findChildPath(cm, target) : null;
        var result;
        try { result = _origExecute.apply(cm, args); } catch(e) { throw e; }
        if (path) {
          sendToParent('EXECUTE_CMD', { cmdName: 'DELETE_EQUIPMENT', isDelete: true, identifier: { _path: path } });
          log('⚡ DELETE (path:', JSON.stringify(path), ')');
        }
        return result;
      }

      // All other commands
      var result;
      try { result = _origExecute.apply(cm, args); } catch (e) { throw e; }
      // Relay whitelisted commands (ADD/CREATE equipment) — keeps drag smooth
      if (_isPresenter && !_isSyncing && RELAY_COMMANDS[cmd] && cmd !== CMD_DELETE) {
        var cmdName = RELAY_COMMANDS[cmd];
        var cloned = safeClone(args);
        if (cloned) {
          sendToParent('EXECUTE_CMD', { cmdName: cmdName, args: cloned });
        }
        log('⚡', cmdName);
        setTimeout(function () { sendPositionSync(); }, 100);
      }
      // Relay one-shot interaction commands (non-whitelisted, fire ≤3x in 2s)
      if (_isPresenter && !_isSyncing && !RELAY_COMMANDS[cmd] && cmd !== CMD_DELETE) {
        if (!window.__cmdFreq) window.__cmdFreq = {};
        if (!window.__cmdSkip) window.__cmdSkip = {};
        var now = Date.now();
        if (!window.__cmdSkip[cmd]) {
          if (!window.__cmdFreq[cmd]) window.__cmdFreq[cmd] = [];
          window.__cmdFreq[cmd].push(now);
          window.__cmdFreq[cmd] = window.__cmdFreq[cmd].filter(function(t) { return now - t < 2000; });
          if (window.__cmdFreq[cmd].length > 3) {
            window.__cmdSkip[cmd] = true;
            log('⏭ Skip tick:', cmd.substr(0, 8) + '...');
          } else {
            // Smart serialize with PIXI path refs
            var smartArgs = [cmd];
            for (var i = 1; i < args.length; i++) {
              var a = args[i];
              if (a && typeof a === 'object' && typeof a.x === 'number' && a.parent) {
                var eqPath = findChildPath(cm, a);
                smartArgs.push(eqPath ? { __pixiRef: true, path: eqPath } : null);
              } else {
                try { smartArgs.push(JSON.parse(JSON.stringify(a))); } catch(e3) { smartArgs.push(null); }
              }
            }
            sendToParent('EXECUTE_CMD', { cmdName: cmd, args: smartArgs });
            log('⚡🔥', cmd.substr(0, 8) + '...');
          }
        }
      }
      return result;
    };
    log('✓ Layer 2: execute() hooked');
    return true;
  }

  function replayExecute(payload) {
    if (!payload) return;
    var cm = window.chemicalMain;
    if (!cm || !_origExecute) return;
    _isSyncing = true;
    try {
      if (payload.isDelete && payload.identifier) {
        var child = null;
        if (payload.identifier._path) child = getChildByPath(cm, payload.identifier._path);
        if (!child && payload.identifier._childIndex != null) child = cm.children[payload.identifier._childIndex];
        if (child) { _origExecute.call(cm, CMD_DELETE, { eq: [child] }); log('✓ Deleted on viewer'); }
        else log('⚠ DELETE: child not found');
      } else if (payload.args) {
        // Resolve __pixiRef paths back to local PIXI objects
        var resolvedArgs = [];
        var resolveFailed = false;
        for (var i = 0; i < payload.args.length; i++) {
          var a = payload.args[i];
          if (a && typeof a === 'object' && a.__pixiRef && a.path) {
            var obj = getChildByPath(cm, a.path);
            if (obj) {
              resolvedArgs.push(obj);
            } else {
              resolveFailed = true;
              break;
            }
          } else if (a && typeof a === 'object' && a !== null) {
            var resolved = {};
            var keys = Object.keys(a);
            var hasRef = false;
            for (var j = 0; j < keys.length; j++) {
              var val = a[keys[j]];
              if (val && typeof val === 'object' && val.__pixiRef && val.path) {
                var rObj = getChildByPath(cm, val.path);
                if (rObj) { resolved[keys[j]] = rObj; hasRef = true; }
                else { resolveFailed = true; break; }
              } else {
                resolved[keys[j]] = val;
              }
            }
            if (resolveFailed) break;
            resolvedArgs.push(hasRef ? resolved : a);
          } else {
            resolvedArgs.push(a);
          }
        }
        if (!resolveFailed) {
          _origExecute.apply(cm, resolvedArgs);
        }
      }
    } catch (e) { log('❌ Replay error:', e.message); }
    _isSyncing = false;
  }

  // ═══════════════════════════════════════════════════════
  // POSITION SYNC (absolute truth from PIXI scene)
  // ═══════════════════════════════════════════════════════
  var _sceneDebugDone = false;
  function sendPositionSync() {
    var cm = window.chemicalMain;
    if (!cm || !_isPresenter) return;
    var root = cm.children || (cm.stage && cm.stage.children) || [];

    // One-time scene tree dump
    if (!_sceneDebugDone && root.length > 0) {
      _sceneDebugDone = true;
      for (var d = 0; d < root.length; d++) {
        var rc = root[d];
        log('🌳 [' + d + ']: x=' + Math.round(rc.x) + ' y=' + Math.round(rc.y) + ' ch=' + (rc.children ? rc.children.length : 0));
      }
    }

    // Capture: root + direct children only (2 levels)
    var data = [];
    var debugStr = '';
    for (var i = 0; i < root.length; i++) {
      var n = root[i];
      if (!n || typeof n.x !== 'number') continue;
      var entry = { i: i, x: n.x, y: n.y, sx: n.scale ? n.scale.x : 1, sy: n.scale ? n.scale.y : 1 };
      var chLen = (n.children && n.children.length) || 0;
      debugStr += '[' + i + ':' + chLen + '] ';
      if (n.children && chLen > 0 && chLen < 30) {
        entry.c = [];
        for (var j = 0; j < n.children.length; j++) {
          var cn = n.children[j];
          if (cn && typeof cn.x === 'number') {
            entry.c.push({ i: j, x: cn.x, y: cn.y, sx: cn.scale ? cn.scale.x : 1, sy: cn.scale ? cn.scale.y : 1 });
          }
        }
      }
      data.push(entry);
    }
    log('📤 Sync:', debugStr);
    if (data.length > 0) {
      sendToParent('POSITION_SYNC', data);
    }
  }

  function applyPositionSync(data) {
    if (!Array.isArray(data)) return;
    var cm = window.chemicalMain;
    if (!cm) return;
    var root = cm.children || (cm.stage && cm.stage.children) || [];
    _isSyncing = true;
    for (var i = 0; i < data.length; i++) {
      var d = data[i];
      var node = root[d.i];
      if (!node || typeof node.x !== 'number') continue;
      // Level 0: root child
      if (Math.abs(node.x - d.x) > 0.5 || Math.abs(node.y - d.y) > 0.5) {
        log('📍 [' + d.i + ']: ' + Math.round(node.x) + ',' + Math.round(node.y) + ' → ' + Math.round(d.x) + ',' + Math.round(d.y));
      }
      node.x = d.x; node.y = d.y;
      if (node.scale && d.sx != null) { node.scale.x = d.sx; node.scale.y = d.sy; }
      // Level 1: direct children
      if (d.c && node.children) {
        for (var j = 0; j < d.c.length; j++) {
          var cd = d.c[j];
          var cn = node.children[cd.i];
          if (!cn || typeof cn.x !== 'number') continue;
          if (Math.abs(cn.x - cd.x) > 0.5 || Math.abs(cn.y - cd.y) > 0.5) {
            log('📍 [' + d.i + '.' + cd.i + ']: ' + Math.round(cn.x) + ',' + Math.round(cn.y) + ' → ' + Math.round(cd.x) + ',' + Math.round(cd.y));
          }
          cn.x = cd.x; cn.y = cd.y;
          if (cn.scale && cd.sx != null) { cn.scale.x = cd.sx; cn.scale.y = cd.sy; }
        }
      }
    }
    _isSyncing = false;
  }

  // ═══════════════════════════════════════════════════════
  // LAYER 3: DVA DISPATCH REPLAY
  // ═══════════════════════════════════════════════════════
  function hookDispatch() {
    var store = findDvaStore();
    if (!store || !store.dispatch) return false;
    _origDispatch = store.dispatch.bind(store);
    store.dispatch = function (action) {
      var result = _origDispatch(action);
      if (_isPresenter && !_isSyncing && action && action.type) {
        var type = action.type, skip = false;
        for (var i = 0; i < SKIP_DVA.length; i++) { if (type.indexOf(SKIP_DVA[i]) === 0) { skip = true; break; } }
        if (!skip) {
          var relay = false;
          for (var i = 0; i < RELAY_DVA.length; i++) { if (type.indexOf(RELAY_DVA[i]) >= 0) { relay = true; break; } }
          if (relay) {
            var cloned = safeClone({ type: action.type, payload: action.payload });
            if (cloned) { sendToParent('DISPATCH_ACTION', cloned); log('📦', type); }
          }
        }
      }
      return result;
    };
    log('✓ Layer 3: dispatch() hooked');
    return true;
  }
  function replayDispatch(actionData) {
    if (!actionData || !actionData.type) return;
    var store = findDvaStore();
    if (!store || !_origDispatch) return;
    _isSyncing = true;
    try { _origDispatch(actionData); log('✓ DVA:', actionData.type); } catch (e) {}
    _isSyncing = false;
  }
  function findDvaStore() {
    if (window.__store) return window.__store;
    try { if (typeof getDvaApp === 'function') { var app = getDvaApp(); if (app && app._store) return app._store; } } catch (e) {}
    var rootEl = document.getElementById('root');
    if (!rootEl) return null;
    var fk = Object.keys(rootEl).find(function (k) { return k.startsWith('__reactFiber') || k.startsWith('__reactInternalInstance'); });
    if (!fk) return null;
    var node = rootEl[fk], d = 0;
    while (node && d < 300) {
      d++;
      if (node.memoizedProps && node.memoizedProps.store && node.memoizedProps.store.dispatch) return node.memoizedProps.store;
      node = node.child || node.sibling || (node.return && node.return.sibling);
    }
    return null;
  }

  // ═══════════════════════════════════════════════════════
  // STANDALONE: SYNC TRANSPORT (WebRTC + BroadcastChannel)
  // ═══════════════════════════════════════════════════════

  // Dedup: only for EXECUTE_CMD/DISPATCH_ACTION (BC + WebRTC deliver same msg)
  var _processedMsgs = [];
  var MAX_DEDUP = 30;

  function handleSyncMessage(msg) {
    if (!msg || msg.type !== MSG_PREFIX) return;
    if (msg.userId === _userId) return;
    if (_isPresenter) return;

    switch (msg.action) {
      case 'CANVAS_EVENT':
        // NO dedup for canvas events (pointer events have same-ms timestamps)
        _isSyncing = true;
        try { replayCanvasEvent(msg.payload); } catch (e) {}
        _isSyncing = false;
        break;
      case 'EXECUTE_CMD':
      case 'DISPATCH_ACTION':
        // Dedup these (discrete events, BC + WebRTC both deliver)
        var msgKey = msg.timestamp + ':' + msg.action;
        if (_processedMsgs.indexOf(msgKey) >= 0) return;
        _processedMsgs.push(msgKey);
        if (_processedMsgs.length > MAX_DEDUP) _processedMsgs.shift();
        if (msg.action === 'EXECUTE_CMD') {
          log('📩', msg.payload && msg.payload.cmdName);
          replayExecute(msg.payload);
        } else {
          replayDispatch(msg.payload);
        }
        break;
      case 'POSITION_SYNC':
        log('📍 Received POSITION_SYNC, items:', msg.payload ? msg.payload.length : 0);
        applyPositionSync(msg.payload);
        break;
      case 'STATE_HISTORY':
        // Late-join: replay all past commands
        if (Array.isArray(msg.payload)) {
          log('📥 Replaying', msg.payload.length, 'history commands');
          for (var h = 0; h < msg.payload.length; h++) {
            var hMsg = msg.payload[h];
            if (hMsg.action === 'EXECUTE_CMD') {
              replayExecute(hMsg.payload);
            } else if (hMsg.action === 'DISPATCH_ACTION') {
              replayDispatch(hMsg.payload);
            }
          }
        }
        break;
    }
  }

  // Command history for late-joining viewers
  var _commandHistory = [];

  // Broadcast to BC + WebRTC
  function broadcastEvent(action, payload) {
    var msg = { type: MSG_PREFIX, action: action, payload: payload || {}, timestamp: Date.now(), userId: _userId };
    // Record non-canvas commands for late joiners (skip __pixiRef interactions)
    if (action === 'EXECUTE_CMD' || action === 'DISPATCH_ACTION') {
      var hasPixiRef = false;
      if (payload && payload.args) {
        for (var h = 0; h < payload.args.length; h++) {
          if (payload.args[h] && payload.args[h].__pixiRef) { hasPixiRef = true; break; }
        }
      }
      if (!hasPixiRef) _commandHistory.push(msg);
    }
    if (_bc) { try { _bc.postMessage(msg); } catch (e) {} }
    for (var i = 0; i < _peerConns.length; i++) {
      try { if (_peerConns[i].open) _peerConns[i].send(JSON.stringify(msg)); } catch (e) {}
    }
  }

  function setupDataConnection(conn) {
    _peerConns.push(conn);
    conn.on('open', function () {
      log('🔗 WebRTC peer connected:', conn.peer);
      // Send command history to late-joining viewer
      if (_isPresenter && _commandHistory.length > 0) {
        log('📤 Sending', _commandHistory.length, 'history commands to new viewer');
        try {
          conn.send(JSON.stringify({
            type: MSG_PREFIX, action: 'STATE_HISTORY',
            payload: _commandHistory, timestamp: Date.now(), userId: _userId
          }));
        } catch (e) { log('❌ History send error:', e.message); }
      }
      // Send fresh position sync burst after history
      if (_isPresenter) {
        [300, 800, 1500, 3000].forEach(function(delay) {
          setTimeout(function () { sendPositionSync(); }, delay);
        });
      }
    });
    conn.on('data', function (data) {
      try {
        handleSyncMessage(typeof data === 'string' ? JSON.parse(data) : data);
      } catch (e) {
        log('❌ Data error:', e.message);
      }
    });
    conn.on('close', function () {
      _peerConns = _peerConns.filter(function (c) { return c !== conn; });
      log('WebRTC disconnected');
    });
    conn.on('error', function (err) { log('❌ Conn error:', err); });
  }

  function initStandaloneSync() {
    if (!_syncRoom) return;

    // If syncRole explicit, use it. Otherwise auto-detect via PeerJS.
    if (_syncRole) {
      _isPresenter = _syncRole === 'presenter';
    }
    // Auto-detect happens in PeerJS section below

    log('🔗 Standalone — room:', _syncRoom, ', role:', _syncRole || 'auto-detect');

    // 1. BroadcastChannel (same-device)
    if (window.BroadcastChannel) {
      _bc = new BroadcastChannel('nb-sync-' + _syncRoom);
      _bc.onmessage = function (e) { handleSyncMessage(e.data); };
      log('✓ BroadcastChannel: nb-sync-' + _syncRoom);
    }

    // 2. WebRTC via PeerJS (cross-device + auto-detect role)
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/peerjs@1.5.4/dist/peerjs.min.js';
    script.onload = function () {
      log('✓ PeerJS loaded');
      var peerId = 'nbsync' + _syncRoom.replace(/[^a-zA-Z0-9]/g, '');

      if (_syncRole === 'viewer') {
        // Explicit viewer — connect to presenter directly
        becomeViewer(peerId);
      } else {
        // Try to become presenter (explicit or auto-detect)
        becomePresenter(peerId);
      }
    };
    script.onerror = function () {
      log('⚠ PeerJS CDN failed — using BroadcastChannel only');
      // Without PeerJS: if explicit role, set it; otherwise default to presenter
      if (!_syncRole) { _isPresenter = true; }
      if (_isPresenter) enablePresenterBroadcast();
    };
    document.head.appendChild(script);
  }

  function enablePresenterBroadcast() {
    _isPresenter = true;
    sendToParent = function (action, payload) {
      _sendToParentBase(action, payload);
      broadcastEvent(action, payload);
    };
    log('✓ Presenter mode — broadcasting enabled');
    // Periodic position sync every 1s
    setInterval(function () {
      if (_isPresenter) {
        sendPositionSync();
      }
    }, 1000);
  }

  // Block all user interactions on viewer (student)
  function lockViewerUI() {
    var overlay = document.createElement('div');
    overlay.id = 'nb-sync-viewer-lock';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;z-index:99999;cursor:not-allowed;background:transparent;';
    // Show "Viewing" badge
    var badge = document.createElement('div');
    badge.style.cssText = 'position:absolute;top:8px;right:8px;background:rgba(0,0,0,0.6);color:#fff;padding:4px 12px;border-radius:12px;font:12px sans-serif;pointer-events:none;';
    badge.textContent = '👁 Đang xem (Chế độ học sinh)';
    overlay.appendChild(badge);
    document.body.appendChild(overlay);
    log('🔒 Viewer UI locked');
  }

  function becomePresenter(peerId) {
    _peer = new Peer(peerId, { debug: 0 });
    _peer.on('open', function (id) {
      log('✓ I am PRESENTER (peer:', id, ')');
      enablePresenterBroadcast();
      // Re-run canvas capture now that we know we're presenter
      startCanvasCapture();
    });
    _peer.on('connection', function (conn) {
      log('👋 Viewer connected via WebRTC');
      setupDataConnection(conn);
    });
    _peer.on('error', function (err) {
      if (err.type === 'unavailable-id') {
        // Presenter ID taken → I'm a viewer
        log('🔄 Peer ID taken → I am VIEWER');
        _peer.destroy();
        becomeViewer(peerId);
      } else {
        log('⚠ PeerJS:', err.type);
      }
    });
  }

  function becomeViewer(peerId) {
    _isPresenter = false;
    log('✓ I am VIEWER — connecting to presenter:', peerId);
    lockViewerUI();
    _peer = new Peer(undefined, { debug: 0 });
    _peer.on('open', function () {
      connectToPresenter(peerId);
    });
    _peer.on('error', function (err) {
      if (err.type === 'peer-unavailable') {
        log('⚠ Presenter not found, retry in 3s...');
        setTimeout(function () { connectToPresenter(peerId); }, 3000);
      }
    });
  }

  function connectToPresenter(peerId) {
    if (!_peer || _peer.destroyed) return;
    var conn = _peer.connect(peerId, { reliable: true });
    setupDataConnection(conn);
    // Retry on failed connection
    setTimeout(function () {
      if (_peerConns.length === 0 && _peer && !_peer.destroyed) {
        log('⚠ No connection yet, retrying...');
        setupDataConnection(_peer.connect(peerId, { reliable: true }));
      }
    }, 5000);
  }

  // ═══════════════════════════════════════════════════════
  // MESSAGES (postMessage from SDK parent — backward compatible)
  // ═══════════════════════════════════════════════════════
  window.addEventListener('message', function (event) {
    var msg = event.data;
    if (!msg || msg.type !== MSG_PREFIX) return;
    switch (msg.action) {
      case 'SET_ROLE':
        _isPresenter = msg.payload.role === 'presenter';
        _userId = msg.payload.userId || _userId;
        log('Role:', _isPresenter ? 'PRESENTER' : 'VIEWER');
        if (_isPresenter) startCanvasCapture();
        break;
      case 'CANVAS_EVENT':
        if (!_isPresenter) { _isSyncing = true; replayCanvasEvent(msg.payload); _isSyncing = false; }
        break;
      case 'EXECUTE_CMD':
        if (!_isPresenter) replayExecute(msg.payload);
        break;
      case 'DISPATCH_ACTION':
        if (!_isPresenter) replayDispatch(msg.payload);
        break;
    }
  });

  // ═══════════════════════════════════════════════════════
  // INIT
  // ═══════════════════════════════════════════════════════
  function tryInit() {
    if (_ready) return;
    if (Date.now() - _initStartTime > MAX_INIT_WAIT) { _ready = true; return; }
    var cm = window.chemicalMain;
    if (!cm || !document.querySelector('canvas')) return;

    var hooks = { canvas: startCanvasCapture(), execute: hookExecute(), dispatch: hookDispatch() };

    if (_standaloneMode) {
      initStandaloneSync();
      if (_isPresenter && !hooks.canvas) hooks.canvas = startCanvasCapture();
    }

    _ready = true;
    var mode = _standaloneMode ? 'standalone:' + _syncRole : 'sdk';
    log('Bridge v' + BRIDGE_VERSION + ' READY!', JSON.stringify(hooks), '(' + mode + ')');
    sendToParent('BRIDGE_READY', {
      version: BRIDGE_VERSION, mode: mode, hooks: hooks,
      userId: _userId, syncRoom: _syncRoom, syncRole: _syncRole
    });
  }

  var t = setInterval(function () { if (_ready) { clearInterval(t); return; } tryInit(); }, 1500);
  window.addEventListener('load', function () { setTimeout(tryInit, 3000); });

  window.__nbSyncBridge = { version: BRIDGE_VERSION, standalone: _standaloneMode, room: _syncRoom };
  log('Bridge v' + BRIDGE_VERSION + ' loaded (' + (_standaloneMode ? 'Standalone: ' + _syncRoom : 'SDK') + ')');
})();
