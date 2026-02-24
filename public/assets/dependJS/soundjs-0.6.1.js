this.createjs = this.createjs || {},
    function() {
        var a = createjs.SoundJS = createjs.SoundJS || {};
        a.version = "0.6.2", a.buildDate = "Thu, 26 Nov 2015 20:44:31 GMT"
    }(), this.createjs = this.createjs || {}, createjs.extend = function(a, i) {
        "use strict";

        function e() {
            this.constructor = a
        }
        return e.prototype = i.prototype, a.prototype = new e
    }, this.createjs = this.createjs || {}, createjs.promote = function(a, i) {
        "use strict";
        var e = a.prototype,
            n = Object.getPrototypeOf && Object.getPrototypeOf(e) || e.__proto__;
        if (n) {
            e[(i += "_") + "constructor"] = n.constructor;
            for (var t in n) e.hasOwnProperty(t) && typeof n[t] == "function" && (e[i + t] = n[t])
        }
        return a
    }, this.createjs = this.createjs || {}, createjs.indexOf = function(a, i) {
        "use strict";
        for (var e = 0, n = a.length; n > e; e++)
            if (i === a[e]) return e;
        return -1
    }, this.createjs = this.createjs || {},
    function() {
        "use strict";
        createjs.proxy = function(a, i) {
            var e = Array.prototype.slice.call(arguments, 2);
            return function() {
                return a.apply(i, Array.prototype.slice.call(arguments, 0).concat(e))
            }
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "BrowserDetect cannot be instantiated"
        }
        var i = a.agent = window.navigator.userAgent;
        a.isWindowPhone = i.indexOf("IEMobile") > -1 || i.indexOf("Windows Phone") > -1, a.isFirefox = i.indexOf("Firefox") > -1, a.isOpera = window.opera != null, a.isChrome = i.indexOf("Chrome") > -1, a.isIOS = (i.indexOf("iPod") > -1 || i.indexOf("iPhone") > -1 || i.indexOf("iPad") > -1) && !a.isWindowPhone, a.isAndroid = i.indexOf("Android") > -1 && !a.isWindowPhone, a.isBlackberry = i.indexOf("Blackberry") > -1, createjs.BrowserDetect = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this._listeners = null, this._captureListeners = null
        }
        var i = a.prototype;
        a.initialize = function(e) {
            e.addEventListener = i.addEventListener, e.on = i.on, e.removeEventListener = e.off = i.removeEventListener, e.removeAllEventListeners = i.removeAllEventListeners, e.hasEventListener = i.hasEventListener, e.dispatchEvent = i.dispatchEvent, e._dispatchEvent = i._dispatchEvent, e.willTrigger = i.willTrigger
        }, i.addEventListener = function(e, n, t) {
            var r;
            r = t ? this._captureListeners = this._captureListeners || {} : this._listeners = this._listeners || {};
            var o = r[e];
            return o && this.removeEventListener(e, n, t), o = r[e], o ? o.push(n) : r[e] = [n], n
        }, i.on = function(e, n, t, r, o, u) {
            return n.handleEvent && (t = t || n, n = n.handleEvent), t = t || this, this.addEventListener(e, function(c) {
                n.call(t, c, o), r && c.remove()
            }, u)
        }, i.removeEventListener = function(e, n, t) {
            var r = t ? this._captureListeners : this._listeners;
            if (r) {
                var o = r[e];
                if (o) {
                    for (var u = 0, c = o.length; c > u; u++)
                        if (o[u] == n) {
                            c == 1 ? delete r[e] : o.splice(u, 1);
                            break
                        }
                }
            }
        }, i.off = i.removeEventListener, i.removeAllEventListeners = function(e) {
            e ? (this._listeners && delete this._listeners[e], this._captureListeners && delete this._captureListeners[e]) : this._listeners = this._captureListeners = null
        }, i.dispatchEvent = function(e, n, t) {
            if (typeof e == "string") {
                var r = this._listeners;
                if (!(n || r && r[e])) return !0;
                e = new createjs.Event(e, n, t)
            } else e.target && e.clone && (e = e.clone());
            try {
                e.target = this
            } catch (h) {}
            if (e.bubbles && this.parent) {
                for (var o = this, u = [o]; o.parent;) u.push(o = o.parent);
                var c, l = u.length;
                for (c = l - 1; c >= 0 && !e.propagationStopped; c--) u[c]._dispatchEvent(e, 1 + (c == 0));
                for (c = 1; l > c && !e.propagationStopped; c++) u[c]._dispatchEvent(e, 3)
            } else this._dispatchEvent(e, 2);
            return !e.defaultPrevented
        }, i.hasEventListener = function(e) {
            var n = this._listeners,
                t = this._captureListeners;
            return !!(n && n[e] || t && t[e])
        }, i.willTrigger = function(e) {
            for (var n = this; n;) {
                if (n.hasEventListener(e)) return !0;
                n = n.parent
            }
            return !1
        }, i.toString = function() {
            return "[EventDispatcher]"
        }, i._dispatchEvent = function(e, n) {
            var t, r = n == 1 ? this._captureListeners : this._listeners;
            if (e && r) {
                var o = r[e.type];
                if (!o || !(t = o.length)) return;
                try {
                    e.currentTarget = this
                } catch (l) {}
                try {
                    e.eventPhase = n
                } catch (l) {}
                e.removed = !1, o = o.slice();
                for (var u = 0; t > u && !e.immediatePropagationStopped; u++) {
                    var c = o[u];
                    c.handleEvent ? c.handleEvent(e) : c(e), e.removed && (this.off(e.type, c, n == 1), e.removed = !1)
                }
            }
        }, createjs.EventDispatcher = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e, n, t) {
            this.type = e, this.target = null, this.currentTarget = null, this.eventPhase = 0, this.bubbles = !!n, this.cancelable = !!t, this.timeStamp = new Date().getTime(), this.defaultPrevented = !1, this.propagationStopped = !1, this.immediatePropagationStopped = !1, this.removed = !1
        }
        var i = a.prototype;
        i.preventDefault = function() {
            this.defaultPrevented = this.cancelable && !0
        }, i.stopPropagation = function() {
            this.propagationStopped = !0
        }, i.stopImmediatePropagation = function() {
            this.immediatePropagationStopped = this.propagationStopped = !0
        }, i.remove = function() {
            this.removed = !0
        }, i.clone = function() {
            return new a(this.type, this.bubbles, this.cancelable)
        }, i.set = function(e) {
            for (var n in e) this[n] = e[n];
            return this
        }, i.toString = function() {
            return "[Event (type=" + this.type + ")]"
        }, createjs.Event = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e, n, t) {
            this.Event_constructor("error"), this.title = e, this.message = n, this.data = t
        }
        var i = createjs.extend(a, createjs.Event);
        i.clone = function() {
            return new createjs.ErrorEvent(this.title, this.message, this.data)
        }, createjs.ErrorEvent = createjs.promote(a, "Event")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e, n) {
            this.Event_constructor("progress"), this.loaded = e, this.total = n == null ? 1 : n, this.progress = n == 0 ? 0 : this.loaded / this.total
        }
        var i = createjs.extend(a, createjs.Event);
        i.clone = function() {
            return new createjs.ProgressEvent(this.loaded, this.total)
        }, createjs.ProgressEvent = createjs.promote(a, "Event")
    }(window), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.src = null, this.type = null, this.id = null, this.maintainOrder = !1, this.callback = null, this.data = null, this.method = createjs.LoadItem.GET, this.values = null, this.headers = null, this.withCredentials = !1, this.mimeType = null, this.crossOrigin = null, this.loadTimeout = e.LOAD_TIMEOUT_DEFAULT
        }
        var i = a.prototype = {},
            e = a;
        e.LOAD_TIMEOUT_DEFAULT = 8e3, e.create = function(n) {
            if (typeof n == "string") {
                var t = new a;
                return t.src = n, t
            }
            if (n instanceof e) return n;
            if (n instanceof Object && n.src) return n.loadTimeout == null && (n.loadTimeout = e.LOAD_TIMEOUT_DEFAULT), n;
            throw new Error("Type not recognized.")
        }, i.set = function(n) {
            for (var t in n) this[t] = n[t];
            return this
        }, createjs.LoadItem = e
    }(),
    function() {
        var a = {};
        a.ABSOLUTE_PATT = /^(?:\w+:)?\/{2}/i, a.RELATIVE_PATT = /^[.\/]*?\//i, a.EXTENSION_PATT = /\/?[^\/]+\.(\w{1,5})$/i, a.parseURI = function(i) {
            var e = {
                absolute: !1,
                relative: !1
            };
            if (i == null) return e;
            var n = i.indexOf("?");
            n > -1 && (i = i.substr(0, n));
            var t;
            return a.ABSOLUTE_PATT.test(i) ? e.absolute = !0 : a.RELATIVE_PATT.test(i) && (e.relative = !0), (t = i.match(a.EXTENSION_PATT)) && (e.extension = t[1].toLowerCase()), e
        }, a.formatQueryString = function(i, e) {
            if (i == null) throw new Error("You must specify data.");
            var n = [];
            for (var t in i) n.push(t + "=" + escape(i[t]));
            return e && (n = n.concat(e)), n.join("&")
        }, a.buildPath = function(i, e) {
            if (e == null) return i;
            var n = [],
                t = i.indexOf("?");
            if (t != -1) {
                var r = i.slice(t + 1);
                n = n.concat(r.split("&"))
            }
            return t != -1 ? i.slice(0, t) + "?" + this.formatQueryString(e, n) : i + "?" + this.formatQueryString(e, n)
        }, a.isCrossDomain = function(i) {
            var e = document.createElement("a");
            e.href = i.src;
            var n = document.createElement("a");
            n.href = location.href;
            var t = e.hostname != "" && (e.port != n.port || e.protocol != n.protocol || e.hostname != n.hostname);
            return t
        }, a.isLocal = function(i) {
            var e = document.createElement("a");
            return e.href = i.src, e.hostname == "" && e.protocol == "file:"
        }, a.isBinary = function(i) {
            switch (i) {
                case createjs.AbstractLoader.IMAGE:
                case createjs.AbstractLoader.BINARY:
                    return !0;
                default:
                    return !1
            }
        }, a.isImageTag = function(i) {
            return i instanceof HTMLImageElement
        }, a.isAudioTag = function(i) {
            return !!window.HTMLAudioElement && i instanceof HTMLAudioElement
        }, a.isVideoTag = function(i) {
            return !!window.HTMLVideoElement && i instanceof HTMLVideoElement
        }, a.isText = function(i) {
            switch (i) {
                case createjs.AbstractLoader.TEXT:
                case createjs.AbstractLoader.JSON:
                case createjs.AbstractLoader.MANIFEST:
                case createjs.AbstractLoader.XML:
                case createjs.AbstractLoader.CSS:
                case createjs.AbstractLoader.SVG:
                case createjs.AbstractLoader.JAVASCRIPT:
                case createjs.AbstractLoader.SPRITESHEET:
                    return !0;
                default:
                    return !1
            }
        }, a.getTypeByExtension = function(i) {
            if (i == null) return createjs.AbstractLoader.TEXT;
            switch (i.toLowerCase()) {
                case "jpeg":
                case "jpg":
                case "gif":
                case "png":
                case "webp":
                case "bmp":
                    return createjs.AbstractLoader.IMAGE;
                case "ogg":
                case "mp3":
                case "webm":
                    return createjs.AbstractLoader.SOUND;
                case "mp4":
                case "webm":
                case "ts":
                    return createjs.AbstractLoader.VIDEO;
                case "json":
                    return createjs.AbstractLoader.JSON;
                case "xml":
                    return createjs.AbstractLoader.XML;
                case "css":
                    return createjs.AbstractLoader.CSS;
                case "js":
                    return createjs.AbstractLoader.JAVASCRIPT;
                case "svg":
                    return createjs.AbstractLoader.SVG;
                default:
                    return createjs.AbstractLoader.TEXT
            }
        }, createjs.RequestUtils = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(n, t, r) {
            this.EventDispatcher_constructor(), this.loaded = !1, this.canceled = !1, this.progress = 0, this.type = r, this.resultFormatter = null, this._item = n ? createjs.LoadItem.create(n) : null, this._preferXHR = t, this._result = null, this._rawResult = null, this._loadedItems = null, this._tagSrcAttribute = null, this._tag = null
        }
        var i = createjs.extend(a, createjs.EventDispatcher),
            e = a;
        e.POST = "POST", e.GET = "GET", e.BINARY = "binary", e.CSS = "css", e.IMAGE = "image", e.JAVASCRIPT = "javascript", e.JSON = "json", e.JSONP = "jsonp", e.MANIFEST = "manifest", e.SOUND = "sound", e.VIDEO = "video", e.SPRITESHEET = "spritesheet", e.SVG = "svg", e.TEXT = "text", e.XML = "xml", i.getItem = function() {
            return this._item
        }, i.getResult = function(n) {
            return n ? this._rawResult : this._result
        }, i.getTag = function() {
            return this._tag
        }, i.setTag = function(n) {
            this._tag = n
        }, i.load = function() {
            this._createRequest(), this._request.on("complete", this, this), this._request.on("progress", this, this), this._request.on("loadStart", this, this), this._request.on("abort", this, this), this._request.on("timeout", this, this), this._request.on("error", this, this);
            var n = new createjs.Event("initialize");
            n.loader = this._request, this.dispatchEvent(n), this._request.load()
        }, i.cancel = function() {
            this.canceled = !0, this.destroy()
        }, i.destroy = function() {
            this._request && (this._request.removeAllEventListeners(), this._request.destroy()), this._request = null, this._item = null, this._rawResult = null, this._result = null, this._loadItems = null, this.removeAllEventListeners()
        }, i.getLoadedItems = function() {
            return this._loadedItems
        }, i._createRequest = function() {
            this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.TagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, i._createTag = function() {
            return null
        }, i._sendLoadStart = function() {
            this._isCanceled() || this.dispatchEvent("loadstart")
        }, i._sendProgress = function(n) {
            if (!this._isCanceled()) {
                var t = null;
                typeof n == "number" ? (this.progress = n, t = new createjs.ProgressEvent(this.progress)) : (t = n, this.progress = n.loaded / n.total, t.progress = this.progress, (isNaN(this.progress) || 1 / 0 == this.progress) && (this.progress = 0)), this.hasEventListener("progress") && this.dispatchEvent(t)
            }
        }, i._sendComplete = function() {
            if (!this._isCanceled()) {
                this.loaded = !0;
                var n = new createjs.Event("complete");
                n.rawResult = this._rawResult, this._result != null && (n.result = this._result), this.dispatchEvent(n)
            }
        }, i._sendError = function(n) {
            !this._isCanceled() && this.hasEventListener("error") && (n == null && (n = new createjs.ErrorEvent("PRELOAD_ERROR_EMPTY")), this.dispatchEvent(n))
        }, i._isCanceled = function() {
            return !(window.createjs != null && !this.canceled)
        }, i.resultFormatter = null, i.handleEvent = function(n) {
            switch (n.type) {
                case "complete":
                    this._rawResult = n.target._response;
                    var t = this.resultFormatter && this.resultFormatter(this);
                    t instanceof Function ? t.call(this, createjs.proxy(this._resultFormatSuccess, this), createjs.proxy(this._resultFormatFailed, this)) : (this._result = t || this._rawResult, this._sendComplete());
                    break;
                case "progress":
                    this._sendProgress(n);
                    break;
                case "error":
                    this._sendError(n);
                    break;
                case "loadstart":
                    this._sendLoadStart();
                    break;
                case "abort":
                case "timeout":
                    this._isCanceled() || this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_" + n.type.toUpperCase() + "_ERROR"))
            }
        }, i._resultFormatSuccess = function(n) {
            this._result = n, this._sendComplete()
        }, i._resultFormatFailed = function(n) {
            this._sendError(n)
        }, i.buildPath = function(n, t) {
            return createjs.RequestUtils.buildPath(n, t)
        }, i.toString = function() {
            return "[PreloadJS AbstractLoader]"
        }, createjs.AbstractLoader = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e, n, t) {
            this.AbstractLoader_constructor(e, n, t), this.resultFormatter = this._formatResult, this._tagSrcAttribute = "src", this.on("initialize", this._updateXHR, this)
        }
        var i = createjs.extend(a, createjs.AbstractLoader);
        i.load = function() {
            this._tag || (this._tag = this._createTag(this._item.src)), this._tag.preload = "auto", this._tag.load(), this.AbstractLoader_load()
        }, i._createTag = function() {}, i._createRequest = function() {
            this._request = this._preferXHR ? new createjs.XHRRequest(this._item) : new createjs.MediaTagRequest(this._item, this._tag || this._createTag(), this._tagSrcAttribute)
        }, i._updateXHR = function(e) {
            e.loader.setResponseType && e.loader.setResponseType("blob")
        }, i._formatResult = function(e) {
            if (this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.onstalled = null, this._preferXHR) {
                var n = window.URL || window.webkitURL,
                    t = e.getResult(!0);
                e.getTag().src = n.createObjectURL(t)
            }
            return e.getTag()
        }, createjs.AbstractMediaLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(e) {
                this._item = e
            },
            i = createjs.extend(a, createjs.EventDispatcher);
        i.load = function() {}, i.destroy = function() {}, i.cancel = function() {}, createjs.AbstractRequest = createjs.promote(a, "EventDispatcher")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e, n, t) {
            this.AbstractRequest_constructor(e), this._tag = n, this._tagSrcAttribute = t, this._loadedHandler = createjs.proxy(this._handleTagComplete, this), this._addedToDOM = !1, this._startTagVisibility = null
        }
        var i = createjs.extend(a, createjs.AbstractRequest);
        i.load = function() {
            this._tag.onload = createjs.proxy(this._handleTagComplete, this), this._tag.onreadystatechange = createjs.proxy(this._handleReadyStateChange, this), this._tag.onerror = createjs.proxy(this._handleError, this);
            var e = new createjs.Event("initialize");
            e.loader = this._tag, this.dispatchEvent(e), this._hideTag(), this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout), this._tag[this._tagSrcAttribute] = this._item.src, this._tag.parentNode == null && (window.document.body.appendChild(this._tag), this._addedToDOM = !0)
        }, i.destroy = function() {
            this._clean(), this._tag = null, this.AbstractRequest_destroy()
        }, i._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var e = this._tag;
            (e.readyState == "loaded" || e.readyState == "complete") && this._handleTagComplete()
        }, i._handleError = function() {
            this._clean(), this.dispatchEvent("error")
        }, i._handleTagComplete = function() {
            this._rawResult = this._tag, this._result = this.resultFormatter && this.resultFormatter(this) || this._rawResult, this._clean(), this._showTag(), this.dispatchEvent("complete")
        }, i._handleTimeout = function() {
            this._clean(), this.dispatchEvent(new createjs.Event("timeout"))
        }, i._clean = function() {
            this._tag.onload = null, this._tag.onreadystatechange = null, this._tag.onerror = null, this._addedToDOM && this._tag.parentNode != null && this._tag.parentNode.removeChild(this._tag), clearTimeout(this._loadTimeout)
        }, i._hideTag = function() {
            this._startTagVisibility = this._tag.style.visibility, this._tag.style.visibility = "hidden"
        }, i._showTag = function() {
            this._tag.style.visibility = this._startTagVisibility
        }, i._handleStalled = function() {}, createjs.TagRequest = createjs.promote(a, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e, n, t) {
            this.AbstractRequest_constructor(e), this._tag = n, this._tagSrcAttribute = t, this._loadedHandler = createjs.proxy(this._handleTagComplete, this)
        }
        var i = createjs.extend(a, createjs.TagRequest);
        i.load = function() {
            var e = createjs.proxy(this._handleStalled, this);
            this._stalledCallback = e;
            var n = createjs.proxy(this._handleProgress, this);
            this._handleProgress = n, this._tag.addEventListener("stalled", e), this._tag.addEventListener("progress", n), this._tag.addEventListener && this._tag.addEventListener("canplaythrough", this._loadedHandler, !1), this.TagRequest_load()
        }, i._handleReadyStateChange = function() {
            clearTimeout(this._loadTimeout);
            var e = this._tag;
            (e.readyState == "loaded" || e.readyState == "complete") && this._handleTagComplete()
        }, i._handleStalled = function() {}, i._handleProgress = function(e) {
            if (e && !(e.loaded > 0 && e.total == 0)) {
                var n = new createjs.ProgressEvent(e.loaded, e.total);
                this.dispatchEvent(n)
            }
        }, i._clean = function() {
            this._tag.removeEventListener && this._tag.removeEventListener("canplaythrough", this._loadedHandler), this._tag.removeEventListener("stalled", this._stalledCallback), this._tag.removeEventListener("progress", this._progressCallback), this.TagRequest__clean()
        }, createjs.MediaTagRequest = createjs.promote(a, "TagRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e) {
            this.AbstractRequest_constructor(e), this._request = null, this._loadTimeout = null, this._xhrLevel = 1, this._response = null, this._rawResponse = null, this._canceled = !1, this._handleLoadStartProxy = createjs.proxy(this._handleLoadStart, this), this._handleProgressProxy = createjs.proxy(this._handleProgress, this), this._handleAbortProxy = createjs.proxy(this._handleAbort, this), this._handleErrorProxy = createjs.proxy(this._handleError, this), this._handleTimeoutProxy = createjs.proxy(this._handleTimeout, this), this._handleLoadProxy = createjs.proxy(this._handleLoad, this), this._handleReadyStateChangeProxy = createjs.proxy(this._handleReadyStateChange, this), this._createXHR(e)
        }
        var i = createjs.extend(a, createjs.AbstractRequest);
        a.ACTIVEX_VERSIONS = ["Msxml2.XMLHTTP.6.0", "Msxml2.XMLHTTP.5.0", "Msxml2.XMLHTTP.4.0", "MSXML2.XMLHTTP.3.0", "MSXML2.XMLHTTP", "Microsoft.XMLHTTP"], i.getResult = function(e) {
            return e && this._rawResponse ? this._rawResponse : this._response
        }, i.cancel = function() {
            this.canceled = !0, this._clean(), this._request.abort()
        }, i.load = function() {
            if (this._request == null) return void this._handleError();
            this._request.addEventListener != null ? (this._request.addEventListener("loadstart", this._handleLoadStartProxy, !1), this._request.addEventListener("progress", this._handleProgressProxy, !1), this._request.addEventListener("abort", this._handleAbortProxy, !1), this._request.addEventListener("error", this._handleErrorProxy, !1), this._request.addEventListener("timeout", this._handleTimeoutProxy, !1), this._request.addEventListener("load", this._handleLoadProxy, !1), this._request.addEventListener("readystatechange", this._handleReadyStateChangeProxy, !1)) : (this._request.onloadstart = this._handleLoadStartProxy, this._request.onprogress = this._handleProgressProxy, this._request.onabort = this._handleAbortProxy, this._request.onerror = this._handleErrorProxy, this._request.ontimeout = this._handleTimeoutProxy, this._request.onload = this._handleLoadProxy, this._request.onreadystatechange = this._handleReadyStateChangeProxy), this._xhrLevel == 1 && (this._loadTimeout = setTimeout(createjs.proxy(this._handleTimeout, this), this._item.loadTimeout));
            try {
                this._item.values && this._item.method != createjs.AbstractLoader.GET ? this._item.method == createjs.AbstractLoader.POST && this._request.send(createjs.RequestUtils.formatQueryString(this._item.values)) : this._request.send()
            } catch (e) {
                this.dispatchEvent(new createjs.ErrorEvent("XHR_SEND", null, e))
            }
        }, i.setResponseType = function(e) {
            e === "blob" && (e = window.URL ? "blob" : "arraybuffer", this._responseType = e), this._request.responseType = e
        }, i.getAllResponseHeaders = function() {
            return this._request.getAllResponseHeaders instanceof Function ? this._request.getAllResponseHeaders() : null
        }, i.getResponseHeader = function(e) {
            return this._request.getResponseHeader instanceof Function ? this._request.getResponseHeader(e) : null
        }, i._handleProgress = function(e) {
            if (e && !(e.loaded > 0 && e.total == 0)) {
                var n = new createjs.ProgressEvent(e.loaded, e.total);
                this.dispatchEvent(n)
            }
        }, i._handleLoadStart = function() {
            clearTimeout(this._loadTimeout), this.dispatchEvent("loadstart")
        }, i._handleAbort = function(e) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("XHR_ABORTED", null, e))
        }, i._handleError = function(e) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent(e.message))
        }, i._handleReadyStateChange = function() {
            this._request.readyState == 4 && this._handleLoad()
        }, i._handleLoad = function() {
            if (!this.loaded) {
                this.loaded = !0;
                var e = this._checkError();
                if (e) return void this._handleError(e);
                if (this._response = this._getResponse(), this._responseType === "arraybuffer") try {
                    this._response = new Blob([this._response])
                } catch (t) {
                    if (window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder || window.MSBlobBuilder, t.name === "TypeError" && window.BlobBuilder) {
                        var n = new BlobBuilder;
                        n.append(this._response), this._response = n.getBlob()
                    }
                }
                this._clean(), this.dispatchEvent(new createjs.Event("complete"))
            }
        }, i._handleTimeout = function(e) {
            this._clean(), this.dispatchEvent(new createjs.ErrorEvent("PRELOAD_TIMEOUT", null, e))
        }, i._checkError = function() {
            var e = parseInt(this._request.status);
            switch (e) {
                case 404:
                case 0:
                    return new Error(e)
            }
            return null
        }, i._getResponse = function() {
            if (this._response != null) return this._response;
            if (this._request.response != null) return this._request.response;
            try {
                if (this._request.responseText != null) return this._request.responseText
            } catch (e) {}
            try {
                if (this._request.responseXML != null) return this._request.responseXML
            } catch (e) {}
            return null
        }, i._createXHR = function(e) {
            var n = createjs.RequestUtils.isCrossDomain(e),
                t = {},
                r = null;
            if (window.XMLHttpRequest) r = new XMLHttpRequest, n && r.withCredentials === void 0 && window.XDomainRequest && (r = new XDomainRequest);
            else {
                for (var o = 0, u = s.ACTIVEX_VERSIONS.length; u > o; o++) {
                    var c = s.ACTIVEX_VERSIONS[o];
                    try {
                        r = new ActiveXObject(c);
                        break
                    } catch (p) {}
                }
                if (r == null) return !1
            }
            e.mimeType == null && createjs.RequestUtils.isText(e.type) && (e.mimeType = "text/plain; charset=utf-8"), e.mimeType && r.overrideMimeType && r.overrideMimeType(e.mimeType), this._xhrLevel = typeof r.responseType == "string" ? 2 : 1;
            var l = null;
            if (l = e.method == createjs.AbstractLoader.GET ? createjs.RequestUtils.buildPath(e.src, e.values) : e.src, r.open(e.method || createjs.AbstractLoader.GET, l, !0), n && r instanceof XMLHttpRequest && this._xhrLevel == 1 && (t.Origin = location.origin), e.values && e.method == createjs.AbstractLoader.POST && (t["Content-Type"] = "application/x-www-form-urlencoded"), n || t["X-Requested-With"] || (t["X-Requested-With"] = "XMLHttpRequest"), e.headers)
                for (var h in e.headers) t[h] = e.headers[h];
            for (h in t) r.setRequestHeader(h, t[h]);
            return r instanceof XMLHttpRequest && e.withCredentials !== void 0 && (r.withCredentials = e.withCredentials), this._request = r, !0
        }, i._clean = function() {
            clearTimeout(this._loadTimeout), this._request.removeEventListener != null ? (this._request.removeEventListener("loadstart", this._handleLoadStartProxy), this._request.removeEventListener("progress", this._handleProgressProxy), this._request.removeEventListener("abort", this._handleAbortProxy), this._request.removeEventListener("error", this._handleErrorProxy), this._request.removeEventListener("timeout", this._handleTimeoutProxy), this._request.removeEventListener("load", this._handleLoadProxy), this._request.removeEventListener("readystatechange", this._handleReadyStateChangeProxy)) : (this._request.onloadstart = null, this._request.onprogress = null, this._request.onabort = null, this._request.onerror = null, this._request.ontimeout = null, this._request.onload = null, this._request.onreadystatechange = null)
        }, i.toString = function() {
            return "[PreloadJS XHRRequest]"
        }, createjs.XHRRequest = createjs.promote(a, "AbstractRequest")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(n, t) {
            this.AbstractMediaLoader_constructor(n, t, createjs.AbstractLoader.SOUND), createjs.RequestUtils.isAudioTag(n) ? this._tag = n : createjs.RequestUtils.isAudioTag(n.src) ? this._tag = n : createjs.RequestUtils.isAudioTag(n.tag) && (this._tag = createjs.RequestUtils.isAudioTag(n) ? n : n.src), this._tag != null && (this._preferXHR = !1)
        }
        var i = createjs.extend(a, createjs.AbstractMediaLoader),
            e = a;
        e.canLoadItem = function(n) {
            return n.type == createjs.AbstractLoader.SOUND
        }, i._createTag = function(n) {
            var t = document.createElement("audio");
            return t.autoplay = !1, t.preload = "none", t.src = n, t
        }, createjs.SoundLoader = createjs.promote(a, "AbstractMediaLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
                this.interrupt = null, this.delay = null, this.offset = null, this.loop = null, this.volume = null, this.pan = null, this.startTime = null, this.duration = null
            },
            i = a.prototype = {},
            e = a;
        e.create = function(n) {
            if (n instanceof e || n instanceof Object) {
                var t = new createjs.PlayPropsConfig;
                return t.set(n), t
            }
            throw new Error("Type not recognized.")
        }, i.set = function(n) {
            for (var t in n) this[t] = n[t];
            return this
        }, i.toString = function() {
            return "[PlayPropsConfig]"
        }, createjs.PlayPropsConfig = e
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "Sound cannot be instantiated"
        }

        function i(t, r) {
            this.init(t, r)
        }
        var e = a;
        e.INTERRUPT_ANY = "any", e.INTERRUPT_EARLY = "early", e.INTERRUPT_LATE = "late", e.INTERRUPT_NONE = "none", e.PLAY_INITED = "playInited", e.PLAY_SUCCEEDED = "playSucceeded", e.PLAY_INTERRUPTED = "playInterrupted", e.PLAY_FINISHED = "playFinished", e.PLAY_FAILED = "playFailed", e.SUPPORTED_EXTENSIONS = ["mp3", "ogg", "opus", "mpeg", "wav", "m4a", "mp4", "aiff", "wma", "mid"], e.EXTENSION_MAP = {
            m4a: "mp4"
        }, e.FILE_PATTERN = /^(?:(\w+:)\/{2}(\w+(?:\.\w+)*\/?))?([\/.]*?(?:[^?]+)?\/)?((?:[^\/?]+)\.(\w+))(?:\?(\S+)?)?$/, e.defaultInterruptBehavior = e.INTERRUPT_NONE, e.alternateExtensions = [], e.activePlugin = null, e._masterVolume = 1, Object.defineProperty(e, "volume", {
            get: function() {
                return this._masterVolume
            },
            set: function(t) {
                if (Number(t) == null) return !1;
                if (t = Math.max(0, Math.min(1, t)), e._masterVolume = t, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t))
                    for (var r = this._instances, o = 0, u = r.length; u > o; o++) r[o].setMasterVolume(t)
            }
        }), e._masterMute = !1, Object.defineProperty(e, "muted", {
            get: function() {
                return this._masterMute
            },
            set: function(t) {
                if (t == null) return !1;
                if (this._masterMute = t, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t))
                    for (var r = this._instances, o = 0, u = r.length; u > o; o++) r[o].setMasterMute(t);
                return !0
            }
        }), Object.defineProperty(e, "capabilities", {
            get: function() {
                return e.activePlugin == null ? null : e.activePlugin._capabilities
            },
            set: function() {
                return !1
            }
        }), e._pluginsRegistered = !1, e._lastID = 0, e._instances = [], e._idHash = {}, e._preloadHash = {}, e._defaultPlayPropsHash = {}, e.addEventListener = null, e.removeEventListener = null, e.removeAllEventListeners = null, e.dispatchEvent = null, e.hasEventListener = null, e._listeners = null, createjs.EventDispatcher.initialize(e), e.getPreloadHandlers = function() {
            return {
                callback: createjs.proxy(e.initLoad, e),
                types: ["sound"],
                extensions: e.SUPPORTED_EXTENSIONS
            }
        }, e._handleLoadComplete = function(t) {
            var r = t.target.getItem().src;
            if (e._preloadHash[r])
                for (var o = 0, u = e._preloadHash[r].length; u > o; o++) {
                    var c = e._preloadHash[r][o];
                    if (e._preloadHash[r][o] = !0, e.hasEventListener("fileload")) {
                        var t = new createjs.Event("fileload");
                        t.src = c.src, t.id = c.id, t.data = c.data, t.sprite = c.sprite, e.dispatchEvent(t)
                    }
                }
        }, e._handleLoadError = function(t) {
            var r = t.target.getItem().src;
            if (e._preloadHash[r])
                for (var o = 0, u = e._preloadHash[r].length; u > o; o++) {
                    var c = e._preloadHash[r][o];
                    if (e._preloadHash[r][o] = !1, e.hasEventListener("fileerror")) {
                        var t = new createjs.Event("fileerror");
                        t.src = c.src, t.id = c.id, t.data = c.data, t.sprite = c.sprite, e.dispatchEvent(t)
                    }
                }
        }, e._registerPlugin = function(t) {
            return !!t.isSupported() && (e.activePlugin = new t, !0)
        }, e.registerPlugins = function(t) {
            e._pluginsRegistered = !0;
            for (var r = 0, o = t.length; o > r; r++)
                if (e._registerPlugin(t[r])) return !0;
            return !1
        }, e.initializeDefaultPlugins = function() {
            return e.activePlugin != null || !e._pluginsRegistered && !!e.registerPlugins([createjs.WebAudioPlugin, createjs.HTMLAudioPlugin])
        }, e.isReady = function() {
            return e.activePlugin != null
        }, e.getCapabilities = function() {
            return e.activePlugin == null ? null : e.activePlugin._capabilities
        }, e.getCapability = function(t) {
            return e.activePlugin == null ? null : e.activePlugin._capabilities[t]
        }, e.initLoad = function(t) {
            return e._registerSound(t)
        }, e._registerSound = function(t) {
            if (!e.initializeDefaultPlugins()) return !1;
            var r;
            if (t.src instanceof Object ? (r = e._parseSrc(t.src), r.src = t.path + r.src) : r = e._parsePath(t.src), r == null) return !1;
            t.src = r.src, t.type = "sound";
            var o = t.data,
                u = null;
            if (o != null && (isNaN(o.channels) ? isNaN(o) || (u = parseInt(o)) : u = parseInt(o.channels), o.audioSprite))
                for (var c, l = o.audioSprite.length; l--;) c = o.audioSprite[l], e._idHash[c.id] = {
                    src: t.src,
                    startTime: parseInt(c.startTime),
                    duration: parseInt(c.duration)
                }, c.defaultPlayProps && (e._defaultPlayPropsHash[c.id] = createjs.PlayPropsConfig.create(c.defaultPlayProps));
            t.id != null && (e._idHash[t.id] = {
                src: t.src
            });
            var h = e.activePlugin.register(t);
            return i.create(t.src, u), o != null && isNaN(o) ? t.data.channels = u || i.maxPerChannel() : t.data = u || i.maxPerChannel(), h.type && (t.type = h.type), t.defaultPlayProps && (e._defaultPlayPropsHash[t.src] = createjs.PlayPropsConfig.create(t.defaultPlayProps)), h
        }, e.registerSound = function(t, r, o, u, c) {
            var l = {
                src: t,
                id: r,
                data: o,
                defaultPlayProps: c
            };
            t instanceof Object && t.src && (u = r, l = t), l = createjs.LoadItem.create(l), l.path = u, u == null || l.src instanceof Object || (l.src = u + t);
            var h = e._registerSound(l);
            if (!h) return !1;
            if (e._preloadHash[l.src] || (e._preloadHash[l.src] = []), e._preloadHash[l.src].push(l), e._preloadHash[l.src].length == 1) h.on("complete", createjs.proxy(this._handleLoadComplete, this)), h.on("error", createjs.proxy(this._handleLoadError, this)), e.activePlugin.preload(h);
            else if (e._preloadHash[l.src][0] == 1) return !0;
            return l
        }, e.registerSounds = function(t, r) {
            var o = [];
            t.path && (r ? r += t.path : r = t.path, t = t.manifest);
            for (var u = 0, c = t.length; c > u; u++) o[u] = createjs.Sound.registerSound(t[u].src, t[u].id, t[u].data, r, t[u].defaultPlayProps);
            return o
        }, e.removeSound = function(t, r) {
            if (e.activePlugin == null) return !1;
            t instanceof Object && t.src && (t = t.src);
            var o;
            if (t instanceof Object ? o = e._parseSrc(t) : (t = e._getSrcById(t).src, o = e._parsePath(t)), o == null) return !1;
            t = o.src, r != null && (t = r + t);
            for (var u in e._idHash) e._idHash[u].src == t && delete e._idHash[u];
            return i.removeSrc(t), delete e._preloadHash[t], e.activePlugin.removeSound(t), !0
        }, e.removeSounds = function(t, r) {
            var o = [];
            t.path && (r ? r += t.path : r = t.path, t = t.manifest);
            for (var u = 0, c = t.length; c > u; u++) o[u] = createjs.Sound.removeSound(t[u].src, r);
            return o
        }, e.removeAllSounds = function() {
            e._idHash = {}, e._preloadHash = {}, i.removeAll(), e.activePlugin && e.activePlugin.removeAllSounds()
        }, e.loadComplete = function(t) {
            if (!e.isReady()) return !1;
            var r = e._parsePath(t);
            return t = r ? e._getSrcById(r.src).src : e._getSrcById(t).src, e._preloadHash[t] != null && e._preloadHash[t][0] == 1
        }, e._parsePath = function(t) {
            typeof t != "string" && (t = t.toString());
            var r = t.match(e.FILE_PATTERN);
            if (r == null) return !1;
            for (var o = r[4], u = r[5], c = e.capabilities, l = 0; !c[u];)
                if (u = e.alternateExtensions[l++], l > e.alternateExtensions.length) return null;
            t = t.replace("." + r[5], "." + u);
            var h = {
                name: o,
                src: t,
                extension: u
            };
            return h
        }, e._parseSrc = function(t) {
            var r = {
                    name: void 0,
                    src: void 0,
                    extension: void 0
                },
                o = e.capabilities;
            for (var u in t)
                if (t.hasOwnProperty(u) && o[u]) {
                    r.src = t[u], r.extension = u;
                    break
                }
            if (!r.src) return !1;
            var c = r.src.lastIndexOf("/");
            return r.name = c != -1 ? r.src.slice(c + 1) : r.src, r
        }, e.play = function(t, r, o, u, c, l, h, p, f) {
            var d;
            d = createjs.PlayPropsConfig.create(r instanceof Object || r instanceof createjs.PlayPropsConfig ? r : {
                interrupt: r,
                delay: o,
                offset: u,
                loop: c,
                volume: l,
                pan: h,
                startTime: p,
                duration: f
            });
            var _ = e.createInstance(t, d.startTime, d.duration),
                g = e._playInstance(_, d);
            return g || _._playFailed(), _
        }, e.createInstance = function(t, r, o) {
            if (!e.initializeDefaultPlugins()) return new createjs.DefaultSoundInstance(t, r, o);
            var u = e._defaultPlayPropsHash[t];
            t = e._getSrcById(t);
            var c = e._parsePath(t.src),
                l = null;
            return c != null && c.src != null ? (i.create(c.src), r == null && (r = t.startTime), l = e.activePlugin.create(c.src, r, o || t.duration), u = u || e._defaultPlayPropsHash[c.src], u && l.applyPlayProps(u)) : l = new createjs.DefaultSoundInstance(t, r, o), l.uniqueId = e._lastID++, l
        }, e.stop = function() {
            for (var t = this._instances, r = t.length; r--;) t[r].stop()
        }, e.setVolume = function(t) {
            if (Number(t) == null) return !1;
            if (t = Math.max(0, Math.min(1, t)), e._masterVolume = t, !this.activePlugin || !this.activePlugin.setVolume || !this.activePlugin.setVolume(t))
                for (var r = this._instances, o = 0, u = r.length; u > o; o++) r[o].setMasterVolume(t)
        }, e.getVolume = function() {
            return this._masterVolume
        }, e.setMute = function(t) {
            if (t == null) return !1;
            if (this._masterMute = t, !this.activePlugin || !this.activePlugin.setMute || !this.activePlugin.setMute(t))
                for (var r = this._instances, o = 0, u = r.length; u > o; o++) r[o].setMasterMute(t);
            return !0
        }, e.getMute = function() {
            return this._masterMute
        }, e.setDefaultPlayProps = function(t, r) {
            t = e._getSrcById(t), e._defaultPlayPropsHash[e._parsePath(t.src).src] = createjs.PlayPropsConfig.create(r)
        }, e.getDefaultPlayProps = function(t) {
            return t = e._getSrcById(t), e._defaultPlayPropsHash[e._parsePath(t.src).src]
        }, e._playInstance = function(t, r) {
            var o = e._defaultPlayPropsHash[t.src] || {};
            if (r.interrupt == null && (r.interrupt = o.interrupt || e.defaultInterruptBehavior), r.delay == null && (r.delay = o.delay || 0), r.offset == null && (r.offset = t.getPosition()), r.loop == null && (r.loop = t.loop), r.volume == null && (r.volume = t.volume), r.pan == null && (r.pan = t.pan), r.delay == 0) {
                var u = e._beginPlaying(t, r);
                if (!u) return !1
            } else {
                var c = setTimeout(function() {
                    e._beginPlaying(t, r)
                }, r.delay);
                t.delayTimeoutId = c
            }
            return this._instances.push(t), !0
        }, e._beginPlaying = function(t, r) {
            if (!i.add(t, r.interrupt)) return !1;
            var o = t._beginPlaying(r);
            if (!o) {
                var u = createjs.indexOf(this._instances, t);
                return u > -1 && this._instances.splice(u, 1), !1
            }
            return !0
        }, e._getSrcById = function(t) {
            return e._idHash[t] || {
                src: t
            }
        }, e._playFinished = function(t) {
            i.remove(t);
            var r = createjs.indexOf(this._instances, t);
            r > -1 && this._instances.splice(r, 1)
        }, createjs.Sound = a, i.channels = {}, i.create = function(t, r) {
            var o = i.get(t);
            return o == null && (i.channels[t] = new i(t, r), !0)
        }, i.removeSrc = function(t) {
            var r = i.get(t);
            return r != null && (r._removeAll(), delete i.channels[t], !0)
        }, i.removeAll = function() {
            for (var t in i.channels) i.channels[t]._removeAll();
            i.channels = {}
        }, i.add = function(t, r) {
            var o = i.get(t.src);
            return o != null && o._add(t, r)
        }, i.remove = function(t) {
            var r = i.get(t.src);
            return r != null && (r._remove(t), !0)
        }, i.maxPerChannel = function() {
            return n.maxDefault
        }, i.get = function(t) {
            return i.channels[t]
        };
        var n = i.prototype;
        n.constructor = i, n.src = null, n.max = null, n.maxDefault = 100, n.length = 0, n.init = function(t, r) {
            this.src = t, this.max = r || this.maxDefault, this.max == -1 && (this.max = this.maxDefault), this._instances = []
        }, n._get = function(t) {
            return this._instances[t]
        }, n._add = function(t, r) {
            return !!this._getSlot(r, t) && (this._instances.push(t), this.length++, !0)
        }, n._remove = function(t) {
            var r = createjs.indexOf(this._instances, t);
            return r != -1 && (this._instances.splice(r, 1), this.length--, !0)
        }, n._removeAll = function() {
            for (var t = this.length - 1; t >= 0; t--) this._instances[t].stop()
        }, n._getSlot = function(t) {
            var r, o;
            if (t != a.INTERRUPT_NONE && (o = this._get(0), o == null)) return !0;
            for (var u = 0, c = this.max; c > u; u++) {
                if (r = this._get(u), r == null) return !0;
                if (r.playState == a.PLAY_FINISHED || r.playState == a.PLAY_INTERRUPTED || r.playState == a.PLAY_FAILED) {
                    o = r;
                    break
                }
                t != a.INTERRUPT_NONE && (t == a.INTERRUPT_EARLY && r.getPosition() < o.getPosition() || t == a.INTERRUPT_LATE && r.getPosition() > o.getPosition()) && (o = r)
            }
            return o != null && (o._interrupt(), this._remove(o), !0)
        }, n.toString = function() {
            return "[Sound SoundChannel]"
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function(e, n, t, r) {
                this.EventDispatcher_constructor(), this.src = e, this.uniqueId = -1, this.playState = null, this.delayTimeoutId = null, this._volume = 1, Object.defineProperty(this, "volume", {
                    get: this.getVolume,
                    set: this.setVolume
                }), this._pan = 0, Object.defineProperty(this, "pan", {
                    get: this.getPan,
                    set: this.setPan
                }), this._startTime = Math.max(0, n || 0), Object.defineProperty(this, "startTime", {
                    get: this.getStartTime,
                    set: this.setStartTime
                }), this._duration = Math.max(0, t || 0), Object.defineProperty(this, "duration", {
                    get: this.getDuration,
                    set: this.setDuration
                }), this._playbackResource = null, Object.defineProperty(this, "playbackResource", {
                    get: this.getPlaybackResource,
                    set: this.setPlaybackResource
                }), r !== !1 && r !== !0 && this.setPlaybackResource(r), this._position = 0, Object.defineProperty(this, "position", {
                    get: this.getPosition,
                    set: this.setPosition
                }), this._loop = 0, Object.defineProperty(this, "loop", {
                    get: this.getLoop,
                    set: this.setLoop
                }), this._muted = !1, Object.defineProperty(this, "muted", {
                    get: this.getMuted,
                    set: this.setMuted
                }), this._paused = !1, Object.defineProperty(this, "paused", {
                    get: this.getPaused,
                    set: this.setPaused
                })
            },
            i = createjs.extend(a, createjs.EventDispatcher);
        i.play = function(e, n, t, r, o, u) {
            var c;
            return c = createjs.PlayPropsConfig.create(e instanceof Object || e instanceof createjs.PlayPropsConfig ? e : {
                interrupt: e,
                delay: n,
                offset: t,
                loop: r,
                volume: o,
                pan: u
            }), this.playState == createjs.Sound.PLAY_SUCCEEDED ? (this.applyPlayProps(c), void(this._paused && this.setPaused(!1))) : (this._cleanUp(), createjs.Sound._playInstance(this, c), this)
        }, i.stop = function() {
            return this._position = 0, this._paused = !1, this._handleStop(), this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, this
        }, i.destroy = function() {
            this._cleanUp(), this.src = null, this.playbackResource = null, this.removeAllEventListeners()
        }, i.applyPlayProps = function(e) {
            return e.offset != null && this.setPosition(e.offset), e.loop != null && this.setLoop(e.loop), e.volume != null && this.setVolume(e.volume), e.pan != null && this.setPan(e.pan), e.startTime != null && (this.setStartTime(e.startTime), this.setDuration(e.duration)), this
        }, i.toString = function() {
            return "[AbstractSoundInstance]"
        }, i.getPaused = function() {
            return this._paused
        }, i.setPaused = function(e) {
            return e !== !0 && e !== !1 || this._paused == e || e == 1 && this.playState != createjs.Sound.PLAY_SUCCEEDED ? void 0 : (this._paused = e, e ? this._pause() : this._resume(), clearTimeout(this.delayTimeoutId), this)
        }, i.setVolume = function(e) {
            return e == this._volume ? this : (this._volume = Math.max(0, Math.min(1, e)), this._muted || this._updateVolume(), this)
        }, i.getVolume = function() {
            return this._volume
        }, i.setMuted = function(e) {
            return e === !0 || e === !1 ? (this._muted = e, this._updateVolume(), this) : void 0
        }, i.getMuted = function() {
            return this._muted
        }, i.setPan = function(e) {
            return e == this._pan ? this : (this._pan = Math.max(-1, Math.min(1, e)), this._updatePan(), this)
        }, i.getPan = function() {
            return this._pan
        }, i.getPosition = function() {
            return this._paused || this.playState != createjs.Sound.PLAY_SUCCEEDED || (this._position = this._calculateCurrentPosition()), this._position
        }, i.setPosition = function(e) {
            return this._position = Math.max(0, e), this.playState == createjs.Sound.PLAY_SUCCEEDED && this._updatePosition(), this
        }, i.getStartTime = function() {
            return this._startTime
        }, i.setStartTime = function(e) {
            return e == this._startTime ? this : (this._startTime = Math.max(0, e || 0), this._updateStartTime(), this)
        }, i.getDuration = function() {
            return this._duration
        }, i.setDuration = function(e) {
            return e == this._duration ? this : (this._duration = Math.max(0, e || 0), this._updateDuration(), this)
        }, i.setPlaybackResource = function(e) {
            return this._playbackResource = e, this._duration == 0 && this._setDurationFromSource(), this
        }, i.getPlaybackResource = function() {
            return this._playbackResource
        }, i.getLoop = function() {
            return this._loop
        }, i.setLoop = function(e) {
            this._playbackResource != null && (this._loop != 0 && e == 0 ? this._removeLooping(e) : this._loop == 0 && e != 0 && this._addLooping(e)), this._loop = e
        }, i._sendEvent = function(e) {
            var n = new createjs.Event(e);
            this.dispatchEvent(n)
        }, i._cleanUp = function() {
            clearTimeout(this.delayTimeoutId), this._handleCleanUp(), this._paused = !1, createjs.Sound._playFinished(this)
        }, i._interrupt = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_INTERRUPTED, this._sendEvent("interrupted")
        }, i._beginPlaying = function(e) {
            return this.setPosition(e.offset), this.setLoop(e.loop), this.setVolume(e.volume), this.setPan(e.pan), e.startTime != null && (this.setStartTime(e.startTime), this.setDuration(e.duration)), this._playbackResource != null && this._position < this._duration ? (this._paused = !1, this._handleSoundReady(), this.playState = createjs.Sound.PLAY_SUCCEEDED, this._sendEvent("succeeded"), !0) : (this._playFailed(), !1)
        }, i._playFailed = function() {
            this._cleanUp(), this.playState = createjs.Sound.PLAY_FAILED, this._sendEvent("failed")
        }, i._handleSoundComplete = function() {
            return this._position = 0, this._loop != 0 ? (this._loop--, this._handleLoop(), void this._sendEvent("loop")) : (this._cleanUp(), this.playState = createjs.Sound.PLAY_FINISHED, void this._sendEvent("complete"))
        }, i._handleSoundReady = function() {}, i._updateVolume = function() {}, i._updatePan = function() {}, i._updateStartTime = function() {}, i._updateDuration = function() {}, i._setDurationFromSource = function() {}, i._calculateCurrentPosition = function() {}, i._updatePosition = function() {}, i._removeLooping = function() {}, i._addLooping = function() {}, i._pause = function() {}, i._resume = function() {}, i._handleStop = function() {}, i._handleCleanUp = function() {}, i._handleLoop = function() {}, createjs.AbstractSoundInstance = createjs.promote(a, "EventDispatcher"), createjs.DefaultSoundInstance = createjs.AbstractSoundInstance
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";
        var a = function() {
                this._capabilities = null, this._loaders = {}, this._audioSources = {}, this._soundInstances = {}, this._volume = 1, this._loaderClass, this._soundInstanceClass
            },
            i = a.prototype;
        a._capabilities = null, a.isSupported = function() {
            return !0
        }, i.register = function(e) {
            var n = this._loaders[e.src];
            return n && !n.canceled ? this._loaders[e.src] : (this._audioSources[e.src] = !0, this._soundInstances[e.src] = [], n = new this._loaderClass(e), n.on("complete", this._handlePreloadComplete, this), this._loaders[e.src] = n, n)
        }, i.preload = function(e) {
            e.on("error", this._handlePreloadError, this), e.load()
        }, i.isPreloadStarted = function(e) {
            return this._audioSources[e] != null
        }, i.isPreloadComplete = function(e) {
            return !(this._audioSources[e] == null || this._audioSources[e] == 1)
        }, i.removeSound = function(e) {
            if (this._soundInstances[e]) {
                for (var n = this._soundInstances[e].length; n--;) {
                    var t = this._soundInstances[e][n];
                    t.destroy()
                }
                delete this._soundInstances[e], delete this._audioSources[e], this._loaders[e] && this._loaders[e].destroy(), delete this._loaders[e]
            }
        }, i.removeAllSounds = function() {
            for (var e in this._audioSources) this.removeSound(e)
        }, i.create = function(e, n, t) {
            this.isPreloadStarted(e) || this.preload(this.register(e));
            var r = new this._soundInstanceClass(e, n, t, this._audioSources[e]);
            return this._soundInstances[e].push(r), r
        }, i.setVolume = function(e) {
            return this._volume = e, this._updateVolume(), !0
        }, i.getVolume = function() {
            return this._volume
        }, i.setMute = function() {
            return this._updateVolume(), !0
        }, i.toString = function() {
            return "[AbstractPlugin]"
        }, i._handlePreloadComplete = function(e) {
            var n = e.target.getItem().src;
            this._audioSources[n] = e.result;
            for (var t = 0, r = this._soundInstances[n].length; r > t; t++) {
                var o = this._soundInstances[n][t];
                o.setPlaybackResource(this._audioSources[n])
            }
        }, i._handlePreloadError = function() {}, i._updateVolume = function() {}, createjs.AbstractPlugin = a
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e) {
            this.AbstractLoader_constructor(e, !0, createjs.AbstractLoader.SOUND)
        }
        var i = createjs.extend(a, createjs.AbstractLoader);
        a.context = null, i.toString = function() {
            return "[WebAudioLoader]"
        }, i._createRequest = function() {
            this._request = new createjs.XHRRequest(this._item, !1), this._request.setResponseType("arraybuffer")
        }, i._sendComplete = function() {
            a.context.decodeAudioData(this._rawResult, createjs.proxy(this._handleAudioDecoded, this), createjs.proxy(this._sendError, this))
        }, i._handleAudioDecoded = function(e) {
            this._result = e, this.AbstractLoader__sendComplete()
        }, createjs.WebAudioLoader = createjs.promote(a, "AbstractLoader")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(n, t, r, o) {
            this.AbstractSoundInstance_constructor(n, t, r, o), this.gainNode = e.context.createGain(), this.panNode = e.context.createPanner(), this.panNode.panningModel = e._panningModel, this.panNode.connect(this.gainNode), this._updatePan(), this.sourceNode = null, this._soundCompleteTimeout = null, this._sourceNodeNext = null, this._playbackStartTime = 0, this._endedHandler = createjs.proxy(this._handleSoundComplete, this)
        }
        var i = createjs.extend(a, createjs.AbstractSoundInstance),
            e = a;
        e.context = null, e._scratchBuffer = null, e.destinationNode = null, e._panningModel = "equalpower", i.destroy = function() {
            this.AbstractSoundInstance_destroy(), this.panNode.disconnect(0), this.panNode = null, this.gainNode.disconnect(0), this.gainNode = null
        }, i.toString = function() {
            return "[WebAudioSoundInstance]"
        }, i._updatePan = function() {
            this.panNode.setPosition(this._pan, 0, -.5)
        }, i._removeLooping = function() {
            this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)
        }, i._addLooping = function() {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, i._setDurationFromSource = function() {
            this._duration = 1e3 * this.playbackResource.duration
        }, i._handleCleanUp = function() {
            this.sourceNode && this.playState == createjs.Sound.PLAY_SUCCEEDED && (this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext)), this.gainNode.numberOfOutputs != 0 && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout), this._playbackStartTime = 0
        }, i._cleanUpAudioNode = function(n) {
            if (n) {
                n.stop(0), n.disconnect(0);
                try {
                    n.buffer = e._scratchBuffer
                } catch (t) {}
                n = null
            }
            return n
        }, i._handleSoundReady = function() {
            this.gainNode.connect(e.destinationNode);
            var n = .001 * this._duration,
                t = .001 * this._position;
            t > n && (t = n), this.sourceNode = this._createAndPlayAudioNode(e.context.currentTime - n, t), this._playbackStartTime = this.sourceNode.startTime - t, this._soundCompleteTimeout = setTimeout(this._endedHandler, 1e3 * (n - t)), this._loop != 0 && (this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0))
        }, i._createAndPlayAudioNode = function(n, t) {
            var r = e.context.createBufferSource();
            r.buffer = this.playbackResource, r.connect(this.panNode);
            var o = .001 * this._duration;
            return r.startTime = n + o, r.start(r.startTime, t + .001 * this._startTime, o - t), r
        }, i._pause = function() {
            this._position = 1e3 * (e.context.currentTime - this._playbackStartTime), this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), this.gainNode.numberOfOutputs != 0 && this.gainNode.disconnect(0), clearTimeout(this._soundCompleteTimeout)
        }, i._resume = function() {
            this._handleSoundReady()
        }, i._updateVolume = function() {
            var n = this._muted ? 0 : this._volume;
            n != this.gainNode.gain.value && (this.gainNode.gain.value = n)
        }, i._calculateCurrentPosition = function() {
            return 1e3 * (e.context.currentTime - this._playbackStartTime)
        }, i._updatePosition = function() {
            this.sourceNode = this._cleanUpAudioNode(this.sourceNode), this._sourceNodeNext = this._cleanUpAudioNode(this._sourceNodeNext), clearTimeout(this._soundCompleteTimeout), this._paused || this._handleSoundReady()
        }, i._handleLoop = function() {
            this._cleanUpAudioNode(this.sourceNode), this.sourceNode = this._sourceNodeNext, this._playbackStartTime = this.sourceNode.startTime, this._sourceNodeNext = this._createAndPlayAudioNode(this._playbackStartTime, 0), this._soundCompleteTimeout = setTimeout(this._endedHandler, this._duration)
        }, i._updateDuration = function() {
            this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._pause(), this._resume())
        }, createjs.WebAudioSoundInstance = createjs.promote(a, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.AbstractPlugin_constructor(), this._panningModel = e._panningModel, this.context = e.context, this.dynamicsCompressorNode = this.context.createDynamicsCompressor(), this.dynamicsCompressorNode.connect(this.context.destination), this.gainNode = this.context.createGain(), this.gainNode.connect(this.dynamicsCompressorNode), createjs.WebAudioSoundInstance.destinationNode = this.gainNode, this._capabilities = e._capabilities, this._loaderClass = createjs.WebAudioLoader, this._soundInstanceClass = createjs.WebAudioSoundInstance, this._addPropsToClasses()
        }
        var i = createjs.extend(a, createjs.AbstractPlugin),
            e = a;
        e._capabilities = null, e._panningModel = "equalpower", e.context = null, e._scratchBuffer = null, e._unlocked = !1, e.isSupported = function() {
            var n = createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry;
            return !(location.protocol == "file:" && !n && !this._isFileXHRSupported()) && (e._generateCapabilities(), e.context != null)
        }, e.playEmptySound = function() {
            if (e.context != null) {
                var n = e.context.createBufferSource();
                n.buffer = e._scratchBuffer, n.connect(e.context.destination), n.start(0, 0, 0)
            }
        }, e._isFileXHRSupported = function() {
            var n = !0,
                t = new XMLHttpRequest;
            try {
                t.open("GET", "WebAudioPluginTest.fail", !1)
            } catch (r) {
                return n = !1
            }
            t.onerror = function() {
                n = !1
            }, t.onload = function() {
                n = this.status == 404 || this.status == 200 || this.status == 0 && this.response != ""
            };
            try {
                t.send()
            } catch (r) {
                n = !1
            }
            return n
        }, e._generateCapabilities = function() {
            if (e._capabilities == null) {
                var n = document.createElement("audio");
                if (n.canPlayType == null) return null;
                if (e.context == null)
                    if (window.AudioContext) e.context = new AudioContext;
                    else {
                        if (!window.webkitAudioContext) return null;
                        e.context = new webkitAudioContext
                    }
                e._scratchBuffer == null && (e._scratchBuffer = e.context.createBuffer(1, 1, 22050)), e._compatibilitySetUp(), "ontouchstart" in window && e.context.state != "running" && (e._unlock(), document.addEventListener("mousedown", e._unlock, !0), document.addEventListener("touchend", e._unlock, !0)), e._capabilities = {
                    panning: !0,
                    volume: !0,
                    tracks: -1
                };
                for (var t = createjs.Sound.SUPPORTED_EXTENSIONS, r = createjs.Sound.EXTENSION_MAP, o = 0, u = t.length; u > o; o++) {
                    var c = t[o],
                        l = r[c] || c;
                    e._capabilities[c] = n.canPlayType("audio/" + c) != "no" && n.canPlayType("audio/" + c) != "" || n.canPlayType("audio/" + l) != "no" && n.canPlayType("audio/" + l) != ""
                }
                e.context.destination.numberOfChannels < 2 && (e._capabilities.panning = !1)
            }
        }, e._compatibilitySetUp = function() {
            if (e._panningModel = "equalpower", !e.context.createGain) {
                e.context.createGain = e.context.createGainNode;
                var n = e.context.createBufferSource();
                n.__proto__.start = n.__proto__.noteGrainOn, n.__proto__.stop = n.__proto__.noteOff, e._panningModel = 0
            }
        }, e._unlock = function() {
            e._unlocked || (e.playEmptySound(), e.context.state == "running" && (document.removeEventListener("mousedown", e._unlock, !0), document.removeEventListener("touchend", e._unlock, !0), e._unlocked = !0))
        }, i.toString = function() {
            return "[WebAudioPlugin]"
        }, i._addPropsToClasses = function() {
            var n = this._soundInstanceClass;
            n.context = this.context, n._scratchBuffer = e._scratchBuffer, n.destinationNode = this.gainNode, n._panningModel = this._panningModel, this._loaderClass.context = this.context
        }, i._updateVolume = function() {
            var n = createjs.Sound._masterMute ? 0 : this._volume;
            n != this.gainNode.gain.value && (this.gainNode.gain.value = n)
        }, createjs.WebAudioPlugin = createjs.promote(a, "AbstractPlugin")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            throw "HTMLAudioTagPool cannot be instantiated"
        }

        function i() {
            this._tags = []
        }
        var e = a;
        e._tags = {}, e._tagPool = new i, e._tagUsed = {}, e.get = function(t) {
            var r = e._tags[t];
            return r == null ? (r = e._tags[t] = e._tagPool.get(), r.src = t) : e._tagUsed[t] ? (r = e._tagPool.get(), r.src = t) : e._tagUsed[t] = !0, r
        }, e.set = function(t, r) {
            r == e._tags[t] ? e._tagUsed[t] = !1 : e._tagPool.set(r)
        }, e.remove = function(t) {
            var r = e._tags[t];
            return r != null && (e._tagPool.set(r), delete e._tags[t], delete e._tagUsed[t], !0)
        }, e.getDuration = function(t) {
            var r = e._tags[t];
            return r != null && r.duration ? 1e3 * r.duration : 0
        }, createjs.HTMLAudioTagPool = a;
        var n = i.prototype;
        n.constructor = i, n.get = function() {
            var t;
            return t = this._tags.length == 0 ? this._createTag() : this._tags.pop(), t.parentNode == null && document.body.appendChild(t), t
        }, n.set = function(t) {
            var r = createjs.indexOf(this._tags, t);
            r == -1 && (this._tags.src = null, this._tags.push(t))
        }, n.toString = function() {
            return "[TagPool]"
        }, n._createTag = function() {
            var t = document.createElement("audio");
            return t.autoplay = !1, t.preload = "none", t
        }
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a(e, n, t, r) {
            this.AbstractSoundInstance_constructor(e, n, t, r), this._audioSpriteStopTime = null, this._delayTimeoutId = null, this._endedHandler = createjs.proxy(this._handleSoundComplete, this), this._readyHandler = createjs.proxy(this._handleTagReady, this), this._stalledHandler = createjs.proxy(this._playFailed, this), this._audioSpriteEndHandler = createjs.proxy(this._handleAudioSpriteLoop, this), this._loopHandler = createjs.proxy(this._handleSoundComplete, this), t ? this._audioSpriteStopTime = .001 * (n + t) : this._duration = createjs.HTMLAudioTagPool.getDuration(this.src)
        }
        var i = createjs.extend(a, createjs.AbstractSoundInstance);
        i.setMasterVolume = function() {
            this._updateVolume()
        }, i.setMasterMute = function() {
            this._updateVolume()
        }, i.toString = function() {
            return "[HTMLAudioSoundInstance]"
        }, i._removeLooping = function() {
            this._playbackResource != null && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, i._addLooping = function() {
            this._playbackResource == null || this._audioSpriteStopTime || (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)
        }, i._handleCleanUp = function() {
            var e = this._playbackResource;
            if (e != null) {
                e.pause(), e.loop = !1, e.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), e.removeEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1);
                try {
                    e.currentTime = this._startTime
                } catch (n) {}
                createjs.HTMLAudioTagPool.set(this.src, e), this._playbackResource = null
            }
        }, i._beginPlaying = function(e) {
            return this._playbackResource = createjs.HTMLAudioTagPool.get(this.src), this.AbstractSoundInstance__beginPlaying(e)
        }, i._handleSoundReady = function() {
            if (this._playbackResource.readyState !== 4) {
                var e = this._playbackResource;
                return e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), e.addEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), e.preload = "auto", void e.load()
            }
            this._updateVolume(), this._playbackResource.currentTime = .001 * (this._startTime + this._position), this._audioSpriteStopTime ? this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1) : (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._loop != 0 && (this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.loop = !0)), this._playbackResource.play()
        }, i._handleTagReady = function() {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_READY, this._readyHandler, !1), this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_STALLED, this._stalledHandler, !1), this._handleSoundReady()
        }, i._pause = function() {
            this._playbackResource.pause()
        }, i._resume = function() {
            this._playbackResource.play()
        }, i._updateVolume = function() {
            if (this._playbackResource != null) {
                var e = this._muted || createjs.Sound._masterMute ? 0 : this._volume * createjs.Sound._masterVolume;
                e != this._playbackResource.volume && (this._playbackResource.volume = e)
            }
        }, i._calculateCurrentPosition = function() {
            return 1e3 * this._playbackResource.currentTime - this._startTime
        }, i._updatePosition = function() {
            this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1);
            try {
                this._playbackResource.currentTime = .001 * (this._position + this._startTime)
            } catch (e) {
                this._handleSetPositionSeek(null)
            }
        }, i._handleSetPositionSeek = function() {
            this._playbackResource != null && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._handleSetPositionSeek, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, i._handleAudioSpriteLoop = function() {
            this._playbackResource.currentTime <= this._audioSpriteStopTime || (this._playbackResource.pause(), this._loop == 0 ? this._handleSoundComplete(null) : (this._position = 0, this._loop--, this._playbackResource.currentTime = .001 * this._startTime, this._paused || this._playbackResource.play(), this._sendEvent("loop")))
        }, i._handleLoop = function() {
            this._loop == 0 && (this._playbackResource.loop = !1, this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_SEEKED, this._loopHandler, !1))
        }, i._updateStartTime = function() {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, i._updateDuration = function() {
            this._audioSpriteStopTime = .001 * (this._startTime + this._duration), this.playState == createjs.Sound.PLAY_SUCCEEDED && (this._playbackResource.removeEventListener(createjs.HTMLAudioPlugin._AUDIO_ENDED, this._endedHandler, !1), this._playbackResource.addEventListener(createjs.HTMLAudioPlugin._TIME_UPDATE, this._audioSpriteEndHandler, !1))
        }, i._setDurationFromSource = function() {
            this._duration = createjs.HTMLAudioTagPool.getDuration(this.src), this._playbackResource = null
        }, createjs.HTMLAudioSoundInstance = createjs.promote(a, "AbstractSoundInstance")
    }(), this.createjs = this.createjs || {},
    function() {
        "use strict";

        function a() {
            this.AbstractPlugin_constructor(), this.defaultNumChannels = 2, this._capabilities = e._capabilities, this._loaderClass = createjs.SoundLoader, this._soundInstanceClass = createjs.HTMLAudioSoundInstance
        }
        var i = createjs.extend(a, createjs.AbstractPlugin),
            e = a;
        e.MAX_INSTANCES = 30, e._AUDIO_READY = "canplaythrough", e._AUDIO_ENDED = "ended", e._AUDIO_SEEKED = "seeked", e._AUDIO_STALLED = "stalled", e._TIME_UPDATE = "timeupdate", e._capabilities = null, e.isSupported = function() {
            return e._generateCapabilities(), e._capabilities != null
        }, e._generateCapabilities = function() {
            if (e._capabilities == null) {
                var n = document.createElement("audio");
                if (n.canPlayType == null) return null;
                e._capabilities = {
                    panning: !1,
                    volume: !0,
                    tracks: -1
                };
                for (var t = createjs.Sound.SUPPORTED_EXTENSIONS, r = createjs.Sound.EXTENSION_MAP, o = 0, u = t.length; u > o; o++) {
                    var c = t[o],
                        l = r[c] || c;
                    e._capabilities[c] = n.canPlayType("audio/" + c) != "no" && n.canPlayType("audio/" + c) != "" || n.canPlayType("audio/" + l) != "no" && n.canPlayType("audio/" + l) != ""
                }
            }
        }, i.register = function(n) {
            var t = createjs.HTMLAudioTagPool.get(n.src),
                r = this.AbstractPlugin_register(n);
            return r.setTag(t), r
        }, i.removeSound = function(n) {
            this.AbstractPlugin_removeSound(n), createjs.HTMLAudioTagPool.remove(n)
        }, i.create = function(n, t, r) {
            var o = this.AbstractPlugin_create(n, t, r);
            return o.setPlaybackResource(null), o
        }, i.toString = function() {
            return "[HTMLAudioPlugin]"
        }, i.setVolume = i.getVolume = i.setMute = null, createjs.HTMLAudioPlugin = createjs.promote(a, "AbstractPlugin")
    }();