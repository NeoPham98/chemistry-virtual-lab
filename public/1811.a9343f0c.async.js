(function() {
    var L = (g, T, m) => new Promise((_, o) => {
        var p = n => {
                try {
                    c(m.next(n))
                } catch (u) {
                    o(u)
                }
            },
            e = n => {
                try {
                    c(m.throw(n))
                } catch (u) {
                    o(u)
                }
            },
            c = n => n.done ? _(n.value) : Promise.resolve(n.value).then(p, e);
        c((m = m.apply(g, T)).next())
    });
    (self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
        [1811, 8807], {
            51811: function(g, T, m) {
                "use strict";
                m.d(T, {
                    C: function() {
                        return o
                    }
                });
                var _ = m(70145);
                class o {
                    static setSoundEnable(e) {
                        window.createjs.Sound.setMute(!e), window.localStorage.setItem("soundMuteType", e ? "0" : "1"), this.chemicalMain.execute(o.NBCommand.interactive.SET_MUTE_TYPE, {
                            muteType: !e
                        })
                    }
                    static setScientificType(e) {
                        this.chemicalMain && (this.chemicalMain.setScientificNotation && this.chemicalMain.setScientificNotation(e), this.chemicalMain.execute(o.NBCommand.SET_NUMBER_TYPE, e))
                    }
                    static setBackground(e, c = 0) {
                        if (this.moduleType !== -1)
                            if (this.moduleType === 2) this.chemicalMain.setBackColor(e);
                            else {
                                const n = parseInt(e.substring(1), 16);
                                this.chemicalMain.execute(o.NBCommand.CHANGE_BACKGROUND, {
                                    color: n,
                                    index: c
                                })
                            }
                    }
                    static setArrowType(e) {
                        this.chemicalMain && (this.chemicalMain.setArrawFunc && this.chemicalMain.setArrawFunc(!!e), this.chemicalMain.execute(o.NBCommand.SET_ARROW_TYPE, e))
                    }
                    static getSoundEnable() {
                        return !window.createjs.Sound.getMute()
                    }
                    static getScientificType() {
                        let e;
                        return this.chemicalMain.getScientificNotation ? e = this.chemicalMain.getScientificNotation() : e = !!this.chemicalMain.execute(o.NBCommand.GET_NUMBER_TYPE, null), e
                    }
                    static getArrowType() {
                        let e;
                        return this.chemicalMain.getArrawFunc ? e = this.chemicalMain.getArrawFunc() : e = this.chemicalMain.execute(o.NBCommand.GET_ARROW_TYPE, null), e
                    }
                    static delEq(e, c) {
                        e.type === "eq" && (e = {
                            eq: [e.eq]
                        }), c.execute(o.NBCommand.DELETE_EQUIPMENT, e)
                    }
                    static showAllEqu(e) {
                        const c = [];
                        if (e.viewStack.eqChildren.length < 1) {
                            e.viewStack.scale.x = e.viewStack.scale.y = 1, e.viewStack.x = e.viewStack.y = 0;
                            return
                        }
                        e.viewStack.eqChildren.forEach(r => {
                            const l = r.localBounds || {
                                    x: 0,
                                    y: 0,
                                    width: r.width,
                                    height: r.height
                                },
                                a = e.viewStack.eqLayer.toLocal(r.toGlobal({
                                    x: l.x,
                                    y: l.y
                                })),
                                h = {
                                    x: a.x,
                                    y: a.y,
                                    width: l.width,
                                    height: l.height
                                };
                            c.push(h)
                        });
                        let n = e.viewStack.maxPosObj;
                        c.forEach(r => {
                            if (!e.viewStack.maxPosObj) {
                                e.viewStack.maxPosObj = {
                                    left: r.x,
                                    right: r.x + r.width,
                                    top: r.y,
                                    bottom: r.y + r.height
                                }, n = e.viewStack.maxPosObj;
                                return
                            }
                            const {
                                left: l,
                                right: a,
                                top: h,
                                bottom: d
                            } = n;
                            l > r.x && (n.left = r.x), a < r.x + r.width && (n.right = r.x + r.width), h > r.y && (n.top = r.y), d < r.y + r.height && (n.bottom = r.y + r.height)
                        });
                        let u = n.right - n.left,
                            f = n.bottom - n.top,
                            E = e.W,
                            v = e.H,
                            S = E / (u * 1.05),
                            t = v / (f * 1.05),
                            i = S < t ? S : t;
                        i = i < .25 ? .25 : i, i = i > 1 ? 1 : i, E = E / i, v = v / i, e.viewStack.scale.x = e.viewStack.scale.y = i, e.viewStack.x = ((E - u) / 2 - n.left) * i, e.viewStack.y = ((v - f) / 2 - n.top) * i;
                        let s = {
                            targetPos: {
                                x: ((E - u) / 2 - n.left) * i,
                                y: ((v - f) / 2 - n.top) * i
                            },
                            targetScale: {
                                x: i,
                                y: i
                            }
                        };
                        e.viewStack.setTagetPosAndScale(s), e.viewStack.maxPosObj = null
                    }
                    static getCurScale() {
                        const e = this.chemicalMain;
                        return e ? e.viewStack ? e.viewStack.scale.x : e.execute(o.NBCommand.GET_SCALE, null) || 1 : 1
                    }
                    static takeScreenShoot(e) {
                        if (this.chemicalMain) {
                            if (this.moduleType === 2) return this.chem3dTakeScreenShoot();
                            let c, n;
                            return this.NBCommand.SDK_SCREEN_SHOT ? (c = this.NBCommand.SDK_SCREEN_SHOT, n = e) : (c = this.NBCommand.SCREEN_SHOT, n = {
                                width: e && e.outWidth || 460,
                                height: e && e.outHeight || 260,
                                quality: e && e.quality || .8,
                                downLoad: !1
                            }), this.moduleType === 1 ? Promise.resolve(this.chemicalMain.execute(c, n)) : this.chemicalMain.execute(c, n)
                        }
                    }
                    static chem3dTakeScreenShoot() {
                        return L(this, null, function*() {
                            return new Promise(e => {
                                this.chemicalMain.takeScreenShot(c => {
                                    e(c)
                                })
                            })
                        })
                    }
                    static choicedEq(e) {
                        !e || (e.emitTap ? e.emitTap() : (this.chemicalMain.execute(this.NBCommand.SELECT_EQ, {
                            eq: e
                        }), _.a.emit(_.E.SHOW_EQ_ATTRIBUTE, {
                            eq: e,
                            main: this.chemicalMain,
                            cmd: this.NBCommand
                        })))
                    }
                    static setViewType(e) {
                        this.moduleType === 2 && this.chemicalMain.changeCameraMode(e)
                    }
                    static setCoordinate(e) {
                        this.moduleType === 2 && (this.chemicalMain.source.coorVisible.checked = e)
                    }
                    static setMessageInfo(e) {
                        this.moduleType === 2 && (this.chemicalMain.source.jtInfo.active = e, _.a.emit("info_active_change", e), this.chemicalMain.emit("selectAtom"))
                    }
                    static setGround(e) {
                        this.moduleType === 2 && (this.chemicalMain.source.gridVisible.checked = e)
                    }
                    static setStageEnable(e) {
                        (this.moduleType === 0 || this.moduleType === 1) && this.chemicalMain.execute(this.NBCommand.SET_STAGE_RENDER_ENABLED, e), this.moduleType === 2 && (e ? this.chemicalMain.run() : this.chemicalMain.stop())
                    }
                    static setMuteType(e) {
                        this.moduleType === 0 && window.createjs.Sound.setMute(e), this.moduleType === 1 && this.chemicalMain.execute(this.NBCommand.interactive.SET_MUTE_TYPE, {
                            muteType: e
                        })
                    }
                    static toggleEquationType(e) {
                        this.moduleType === 1 && this.chemicalMain.execute(this.NBCommand.TOGGLE_EQUATIONS, {
                            show: !e
                        })
                    }
                    static toggleEleAniType(e) {
                        this.moduleType === 1 && this.chemicalMain.execute(this.NBCommand.TOGGLE_ELEANI, {
                            show: !e
                        })
                    }
                    static setElectronic(e) {
                        this.moduleType === 1 && this.chemicalMain.execute(this.NBCommand.SET_ELECTRONS, {
                            show: e
                        })
                    }
                    static getRoamAble() {
                        return this.moduleType === 0 ? this.chemicalMain.getScaleAndDragAble() : this.moduleType === 1 ? this.chemicalMain.execute(this.NBCommand.GET_ROAM_ABLE, null) : !0
                    }
                    static setRoamAble(e) {
                        this.moduleType === 0 && this.chemicalMain.setScaleAndDragAble(e), this.moduleType === 1 && this.chemicalMain.execute(this.NBCommand.SET_ROAM_ABLE, {
                            roamAble: e
                        })
                    }
                    static getCoordVisible() {
                        var e, c, n;
                        let u = !1;
                        return this.moduleType === 2 && (u = !!((n = (c = (e = this.chemicalMain) === null || e === void 0 ? void 0 : e.source) === null || c === void 0 ? void 0 : c.coorVisible) === null || n === void 0 ? void 0 : n.checked)), u
                    }
                    static getGroundVisible() {
                        var e, c, n;
                        let u = !1;
                        return this.moduleType === 2 && (u = !!((n = (c = (e = this.chemicalMain) === null || e === void 0 ? void 0 : e.source) === null || c === void 0 ? void 0 : c.gridVisible) === null || n === void 0 ? void 0 : n.checked)), u
                    }
                }
                o.moduleType = -1
            },
            70145: function(g, T, m) {
                "use strict";
                m.d(T, {
                    E: function() {
                        return S
                    },
                    a: function() {
                        return v
                    }
                });
                var _ = m(68807);

                function o() {
                    this._events = this._events || {}, this._maxListeners = this._maxListeners || void 0
                }
                var p = o;
                o.EventEmitter = o, o.prototype._events = void 0, o.prototype._maxListeners = void 0, o.defaultMaxListeners = 10, o.prototype.setMaxListeners = function(t) {
                    if (!c(t) || t < 0 || isNaN(t)) throw TypeError("n must be a positive number");
                    return this._maxListeners = t, this
                }, o.prototype.emit = function(t) {
                    var i, s, r, l, a, h;
                    if (this._events || (this._events = {}), t === "error" && (!this._events.error || n(this._events.error) && !this._events.error.length)) {
                        if (i = arguments[1], i instanceof Error) throw i;
                        var d = new Error('Uncaught, unspecified "error" event. (' + i + ")");
                        throw d.context = i, d
                    }
                    if (s = this._events[t], u(s)) return !1;
                    if (e(s)) switch (arguments.length) {
                        case 1:
                            s.call(this);
                            break;
                        case 2:
                            s.call(this, arguments[1]);
                            break;
                        case 3:
                            s.call(this, arguments[1], arguments[2]);
                            break;
                        default:
                            l = Array.prototype.slice.call(arguments, 1), s.apply(this, l)
                    } else if (n(s))
                        for (l = Array.prototype.slice.call(arguments, 1), h = s.slice(), r = h.length, a = 0; a < r; a++) h[a].apply(this, l);
                    return !0
                }, o.prototype.addListener = function(t, i) {
                    var s;
                    if (!e(i)) throw TypeError("listener must be a function");
                    return this._events || (this._events = {}), this._events.newListener && this.emit("newListener", t, e(i.listener) ? i.listener : i), this._events[t] ? n(this._events[t]) ? this._events[t].push(i) : this._events[t] = [this._events[t], i] : this._events[t] = i, n(this._events[t]) && !this._events[t].warned && (u(this._maxListeners) ? s = o.defaultMaxListeners : s = this._maxListeners, s && s > 0 && this._events[t].length > s && (this._events[t].warned = !0, console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length), typeof console.trace == "function" && console.trace())), this
                }, o.prototype.on = o.prototype.addListener, o.prototype.once = function(t, i) {
                    if (!e(i)) throw TypeError("listener must be a function");
                    var s = !1;

                    function r() {
                        this.removeListener(t, r), s || (s = !0, i.apply(this, arguments))
                    }
                    return r.listener = i, this.on(t, r), this
                }, o.prototype.removeListener = function(t, i) {
                    var s, r, l, a;
                    if (!e(i)) throw TypeError("listener must be a function");
                    if (!this._events || !this._events[t]) return this;
                    if (s = this._events[t], l = s.length, r = -1, s === i || e(s.listener) && s.listener === i) delete this._events[t], this._events.removeListener && this.emit("removeListener", t, i);
                    else if (n(s)) {
                        for (a = l; a-- > 0;)
                            if (s[a] === i || s[a].listener && s[a].listener === i) {
                                r = a;
                                break
                            }
                        if (r < 0) return this;
                        s.length === 1 ? (s.length = 0, delete this._events[t]) : s.splice(r, 1), this._events.removeListener && this.emit("removeListener", t, i)
                    }
                    return this
                }, o.prototype.removeAllListeners = function(t) {
                    var i, s;
                    if (!this._events) return this;
                    if (!this._events.removeListener) return arguments.length === 0 ? this._events = {} : this._events[t] && delete this._events[t], this;
                    if (arguments.length === 0) {
                        for (i in this._events) i !== "removeListener" && this.removeAllListeners(i);
                        return this.removeAllListeners("removeListener"), this._events = {}, this
                    }
                    if (s = this._events[t], e(s)) this.removeListener(t, s);
                    else if (s)
                        for (; s.length;) this.removeListener(t, s[s.length - 1]);
                    return delete this._events[t], this
                }, o.prototype.listeners = function(t) {
                    var i;
                    return !this._events || !this._events[t] ? i = [] : e(this._events[t]) ? i = [this._events[t]] : i = this._events[t].slice(), i
                }, o.prototype.listenerCount = function(t) {
                    if (this._events) {
                        var i = this._events[t];
                        if (e(i)) return 1;
                        if (i) return i.length
                    }
                    return 0
                }, o.listenerCount = function(t, i) {
                    return t.listenerCount(i)
                };

                function e(t) {
                    return typeof t == "function"
                }

                function c(t) {
                    return typeof t == "number"
                }

                function n(t) {
                    return typeof t == "object" && t !== null
                }

                function u(t) {
                    return t === void 0
                }
                var f = (0, _.c)(function(t, i) {
                    var s = function() {
                            function a() {
                                this.eventEmitter = new p.EventEmitter
                            }
                            return a.prototype.event = function(h) {
                                return new r(this, this.eventEmitter, h)
                            }, a.prototype.removeAllListeners = function() {
                                this.eventEmitter.removeAllListeners()
                            }, a.prototype.setMaxListeners = function(h) {
                                this.eventEmitter.setMaxListeners(h)
                            }, a
                        }(),
                        r = function() {
                            function a(h, d, A) {
                                this.tsEventEmitter = h, this.eventEmitter = d, this.name = A
                            }
                            return a.prototype.on = function(h) {
                                return this.eventEmitter.on(this.name, h), this.tsEventEmitter
                            }, a.prototype.addListener = function(h) {
                                return this.eventEmitter.addListener(this.name, h), this.tsEventEmitter
                            }, a.prototype.off = function(h) {
                                return this.removeListener(h)
                            }, a.prototype.removeListener = function(h) {
                                return this.eventEmitter.removeListener(this.name, h), this.tsEventEmitter
                            }, a.prototype.removeAllListeners = function() {
                                return this.eventEmitter.removeAllListeners(this.name), this.tsEventEmitter
                            }, a.prototype.listeners = function() {
                                return this.eventEmitter.listeners(this.name)
                            }, a.prototype.once = function(h) {
                                return this.eventEmitter.once(this.name, h), this.tsEventEmitter
                            }, a.prototype.emit = function() {
                                for (var h = [], d = 0; d < arguments.length; d++) h[d - 0] = arguments[d];
                                return h.unshift(this.name), this.eventEmitter.emit.apply(this.eventEmitter, h)
                            }, a
                        }(),
                        l;
                    (function(a) {
                        function h() {
                            return new s
                        }
                        a.create = h
                    })(l || (l = {})), i.__esModule = !0, i.default = l
                });
                const E = (0, _.g)(f);
                class v {
                    static on(i, s) {
                        this.MyEventEmitter.event(i).on(s)
                    }
                    static emit(i, s) {
                        this.MyEventEmitter.event(i).emit({
                            detail: s
                        })
                    }
                    static off(i, s) {
                        this.MyEventEmitter.event(i).off(s)
                    }
                    static once(i, s) {
                        this.MyEventEmitter.event(i).once(s)
                    }
                }
                v.MyEventEmitter = E.create();
                var S;
                (function(t) {
                    t.TEST = "TEST", t.ZOOM_IN_OUT = "ZOOM_IN_OUT", t.SHOW_ALL_EQ = "SHOW_ALL_EQ", t.RESET_LAB = "RESET_LAB", t.VIP_LIMIT_CHG = "VIP_LIMIT_CHG", t.HIDE_LOAD = "HIDE_LOAD", t.LOADED_RESTORE_DATA = "LOADED_RESTORE_DATA", t.SHOW_INTRO = "SHOW_INTRO", t.SHOW_VIDEO = "SHOW_VIDEO", t.CHANGE_PANEL_STATUS = "CHANGE_PANEL_STATUS", t.SHOW_EQ_ATTRIBUTE = "SHOW_EQ_ATTRIBUTE", t.DEL_EQ = "DEL_EQ", t.TOGGLE_FULLSCREEN = "TOGGLE_FULLSCREEN", t.SAVE_DATA = "SAVE_DATA", t.GET_CHILDREN_JSON = "GET_CHILDREN_JSON", t.SET_STAGE_RENDER_ENABLED = "SET_STAGE_RENDER_ENABLED", t.POST_MESSAGE = "POST_MESSAGE", t.CHANGE_ZOOM = "CHANGE_ZOOM", t.SHOW_EQ_LIST = "SHOW_EQ_LIST", t.SET_MUTE_TYPE = "SET_MUTE_TYPE", t.TOGGLE_COORD = "TOGGLE_COORD"
                })(S || (S = {}))
            },
            68807: function(g, T, m) {
                "use strict";
                m.d(T, {
                    a: function() {
                        return _
                    },
                    b: function() {
                        return e
                    },
                    c: function() {
                        return p
                    },
                    g: function() {
                        return o
                    }
                });
                var _ = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof m.g != "undefined" ? m.g : typeof self != "undefined" ? self : {};

                function o(n) {
                    return n && n.__esModule && Object.prototype.hasOwnProperty.call(n, "default") ? n.default : n
                }

                function p(n, u, f) {
                    return f = {
                        path: u,
                        exports: {},
                        require: function(E, v) {
                            return c()
                        }
                    }, n(f, f.exports), f.exports
                }

                function e(n) {
                    if (n.__esModule) return n;
                    var u = Object.defineProperty({}, "__esModule", {
                        value: !0
                    });
                    return Object.keys(n).forEach(function(f) {
                        var E = Object.getOwnPropertyDescriptor(n, f);
                        Object.defineProperty(u, f, E.get ? E : {
                            enumerable: !0,
                            get: function() {
                                return n[f]
                            }
                        })
                    }), u
                }

                function c() {
                    throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")
                }
            }
        }
    ]);
})()