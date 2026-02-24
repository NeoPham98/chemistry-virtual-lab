(function() {
    var p = (f, m, r) => new Promise((s, c) => {
        var l = a => {
                try {
                    u(r.next(a))
                } catch (g) {
                    c(g)
                }
            },
            b = a => {
                try {
                    u(r.throw(a))
                } catch (g) {
                    c(g)
                }
            },
            u = a => a.done ? s(a.value) : Promise.resolve(a.value).then(l, b);
        u((r = r.apply(f, m)).next())
    });
    (self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
        [8180], {
            28180: function(f, m, r) {
                "use strict";
                r.r(m), r.d(m, {
                    nb_panel: function() {
                        return a
                    },
                    nb_touch_cell: function() {
                        return x
                    }
                });
                var s = r(33659);
                class c {
                    static domQuerySelector(e, i) {
                        return e.shadowRoot ? e.shadowRoot.querySelector(i) : e.querySelector(i)
                    }
                    static querySelectorAll(e, i) {
                        return e.shadowRoot ? e.shadowRoot.querySelectorAll(i) : e.querySelectorAll(i)
                    }
                    static pointIndom(e, i) {
                        let n = !1;
                        for (let o = 0; o < i.length; o++) {
                            const h = i[o];
                            if (!!h && e.x > h.left && e.x < h.right && e.y > h.top && e.y < h.bottom) {
                                n = !0;
                                break
                            }
                        }
                        return n
                    }
                }
                class l {
                    constructor() {
                        this.supportsPassiveOption = !1, this.touchDevice = !1, this.touchDevice = "ontouchstart" in window, this.checksPassiveOption()
                    }
                    static getInstance() {
                        return l._instance || (l._instance = new l), l._instance
                    }
                    checksPassiveOption() {
                        try {
                            let e = Object.defineProperty({}, "passive", {
                                get: () => {
                                    this.supportsPassiveOption = !0
                                }
                            });
                            window.addEventListener("test", null, e), this.supportsPassiveOption && window.removeEventListener("test", null)
                        } catch (e) {}
                    }
                }

                function b(t, e, i, n) {
                    return Math.sqrt(Math.pow(t - i, 2) + Math.pow(e - n, 2))
                }
                const u = ".close_hov{background-image:url(assets/imgs/nbk/nbk_nb-panel_sprite.png);background-size:540px 246px;background-repeat:no-repeat;background-position:0px -19px;width:30px;height:24px}.close_pre{background-image:url(assets/imgs/nbk/nbk_nb-panel_sprite.png);background-size:540px 246px;background-repeat:no-repeat;background-position:0px -48px;width:30px;height:24px}.colse_def,nb-panel .editor-panel .panel-close-btn{background-image:url(assets/imgs/nbk/nbk_nb-panel_sprite.png);background-size:540px 246px;background-repeat:no-repeat;background-position:0px -77px;width:30px;height:24px}.guangtop,nb-panel .editor-panel .panel-guang .panel-guang-line{background-image:url(assets/imgs/nbk/nbk_nb-panel_sprite.png);background-size:540px 246px;background-repeat:no-repeat;background-position:0px -211px;width:540px;height:35px}.meau_def,nb-panel .editor-panel .panel-guang .panel-guang-btn{background-image:url(assets/imgs/nbk/nbk_nb-panel_sprite.png);background-size:540px 246px;background-repeat:no-repeat;background-position:0px -106px;width:50px;height:30px}.meau_hov,nb-panel .editor-panel .panel-guang .panel-guang-btn:hover{background-image:url(assets/imgs/nbk/nbk_nb-panel_sprite.png);background-size:540px 246px;background-repeat:no-repeat;background-position:0px -141px;width:50px;height:30px}.meau_pre,nb-panel .editor-panel .panel-guang .panel-guang-btn:active{background-image:url(assets/imgs/nbk/nbk_nb-panel_sprite.png);background-size:540px 246px;background-repeat:no-repeat;background-position:0px -176px;width:50px;height:30px}.scale,nb-panel .editor-panel .editor-dragBtn .editor-dragBtn-img{background-image:url(assets/imgs/nbk/nbk_nb-panel_sprite.png);background-size:540px 246px;background-repeat:no-repeat;background-position:0px 0px;width:14px;height:14px}nb-panel .body-shell{pointer-events:none}nb-panel .panel-div{height:100%}nb-panel .moveAnimate{transition:left 0.5s, top 0.5s}nb-panel .editor-title{cursor:move;height:40px;display:block}nb-panel .editor-panel{position:relative;display:block;background:linear-gradient(180deg, #3f444c 0%, #3a3f46 48%, #343940 100%);border-radius:8px;box-shadow:0px 2px 16px 0px rgba(0, 0, 0, 0.09);z-index:3999}nb-panel .editor-panel .editor-alpha{position:absolute;width:100%;margin-top:40px;height:90%;opacity:0;background-color:#EC6941}nb-panel .editor-panel .editor-dragBtn{position:absolute;width:25px;height:25px;right:0;bottom:0}nb-panel .editor-panel .editor-dragBtn .editor-dragBtn-img{position:absolute;right:4px;bottom:4px}nb-panel .editor-panel .panel-guang{position:fixed}nb-panel .editor-panel .panel-close-btn{position:absolute;right:10px;top:8.5px}nb-panel .editor-panel .drag-bar{width:100%;height:40px;pointer-events:none;background:#ec694100;position:absolute;display:inline-block}";
                let a = class {
                    constructor(t) {
                        (0, s.r)(this, t), this.sizeChange = (0, s.c)(this, "sizeChange", 7), this.moveChange = (0, s.c)(this, "moveChange", 7), this.moveEnd = (0, s.c)(this, "moveEnd", 7), this.closed = (0, s.c)(this, "closed", 7), this.isFull = !1, this.hold = !1, this.enableEdge = !1, this.x = 0, this.y = 0, this.width = 400, this.height = 300, this.minWidth = 200, this.minHeight = 200, this.maxWidth = void 0, this.maxHeight = void 0, this.canResize = !0, this.closeVisible = !0, this.overFlowHidden = !1, this.panelZIndex = 666, this.isWHFull = !1, this.geometric = !1, this.wrapperFilter = e => e, this.supportsPassiveOption = !1, this.scaling = !1, this.offsetParentInfo = {
                            offSetParentX: 0,
                            offSetParentY: 0
                        }, this.removeEvent = !0, this.startXy = {
                            x: this.x,
                            y: this.y
                        }, this.downP = null, this.downDragP = null, this.guangObj = {
                            direct: "",
                            isIntersect: !1,
                            line: {
                                width: 540,
                                height: 35
                            },
                            btn: {
                                width: 50,
                                height: 30
                            }
                        }, this.editorPanelStyle = {
                            tempObj: {}
                        }, this.moveOptions = {
                            bWidth: 0,
                            bHeight: 0
                        }, this.scaleWinMove = e => {
                            if (!this.downP) return;
                            if (!e.clientX && e.touches) {
                                const d = e.touches[0];
                                e.clientX = d.clientX, e.clientY = d.clientY
                            }
                            let i = e.clientX - this.downP.x,
                                n = e.clientY - this.downP.y;
                            if (this.geometric) {
                                const d = this.width / this.height;
                                i / n > d ? n = i / d : i = n * d
                            }
                            let o = this.width + i;
                            o < this.minWidth && (o = this.minWidth), this.width !== o && (this.downP.x += o - this.width, this.width = o);
                            let h = this.height + n;
                            h < this.minHeight && (h = this.minHeight), this.height !== h && (this.downP.y += h - this.height, this.height = h), this.maxWidth && (this.width = Math.min(this.maxWidth, this.width)), this.maxHeight && (this.height = Math.min(this.maxHeight, this.height)), this.scaling = !0, this.sizeChange.emit({
                                target: this,
                                width: this.width,
                                height: this.height
                            })
                        }, this.scaleWinEnd = () => {
                            this.downP = null, this.scaling = !1, document.removeEventListener("touchend", this.scaleWinEnd), document.removeEventListener("touchmove", this.scaleWinMove), document.removeEventListener("mouseup", this.scaleWinEnd), document.removeEventListener("mousemove", this.scaleWinMove)
                        }, this.moveDrag = e => {
                            if (!this.downDragP) return;
                            if (!e.clientX && e.touches) {
                                const w = e.touches[0];
                                e.clientX = w.clientX, e.clientY = w.clientY
                            }
                            const i = e.clientX - this.downDragP.x,
                                n = e.clientY - this.downDragP.y;
                            if (!this.getPanelDom()) return;
                            let h = i + this.startXy.x,
                                d = n + this.startXy.y;
                            const v = b(this.oriDownDragP.x, this.oriDownDragP.y, e.clientX, e.clientY),
                                {
                                    targetX: y,
                                    targetY: k
                                } = this.inScreenView(this.offsetParentInfo.offSetParentX, this.offsetParentInfo.offSetParentY, h, d);
                            this.x = y, this.y = k, v > 20 && this.moveChange.emit({
                                target: this
                            })
                        }, this.endDrag = e => {
                            if (!this.downDragP) return;
                            this.downDragP = null, this.removeEvent = !0;
                            const i = c.domQuerySelector(this.ele, ".editor-player-box");
                            i && (i.style.pointerEvents = ""), document.removeEventListener("touchend", this.endDrag), document.removeEventListener("touchmove", this.moveDrag), document.removeEventListener("mouseup", this.endDrag), document.removeEventListener("mousemove", this.moveDrag), this.moveEnd.emit(e)
                        }
                    }
                    moveToXY(t, e) {
                        return p(this, null, function*() {
                            this.x = t, this.y = e
                        })
                    }
                    setRect(t) {
                        return p(this, null, function*() {
                            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
                        })
                    }
                    getRect() {
                        return p(this, null, function*() {
                            return {
                                x: this.x,
                                y: this.y,
                                width: this.width,
                                height: this.height
                            }
                        })
                    }
                    gotoFull(t = !0) {
                        return p(this, null, function*() {
                            this.isFull = t, setTimeout(() => {
                                let {
                                    offsetWidth: e,
                                    offsetHeight: i
                                } = this.getPanelDom();
                                this.sizeChange.emit({
                                    target: this,
                                    width: e,
                                    height: i,
                                    fullScreenChange: !0
                                })
                            }, 20)
                        })
                    }
                    componentWillLoad() {
                        const t = l.getInstance();
                        this.supportsPassiveOption = t.supportsPassiveOption
                    }
                    componentDidLoad() {}
                    getPanelDom() {
                        return c.domQuerySelector(this.ele, ".editor-panel")
                    }
                    scaleWinBegin(t) {
                        this.hold || (this.downP = {
                            x: 0,
                            y: 0
                        }, this.downP.x = t.clientX, this.downP.y = t.clientY, this.supportsPassiveOption ? (document.addEventListener("touchend", this.scaleWinEnd, {
                            passive: !1
                        }), document.addEventListener("touchmove", this.scaleWinMove, {
                            passive: !1
                        })) : (document.addEventListener("touchend", this.scaleWinEnd), document.addEventListener("touchmove", this.scaleWinMove)), document.addEventListener("mouseup", this.scaleWinEnd), document.addEventListener("mousemove", this.scaleWinMove))
                    }
                    startDrag(t) {
                        return p(this, null, function*() {
                            if (this.hold || this.isFull) return;
                            this.offsetParent(), this.downDragP = {
                                x: t.clientX,
                                y: t.clientY
                            }, this.oriDownDragP = {
                                x: t.clientX,
                                y: t.clientY
                            }, this.startXy = {
                                x: this.x,
                                y: this.y
                            }, this.moveOptions.bWidth = document.body.clientWidth, this.moveOptions.bHeight = document.body.clientHeight;
                            const e = c.domQuerySelector(this.ele, ".editor-player-box");
                            this.removeEvent === !1 && (document.removeEventListener("touchend", this.endDrag), document.removeEventListener("touchmove", this.moveDrag), document.removeEventListener("mouseup", this.endDrag), document.removeEventListener("mousemove", this.moveDrag)), this.removeEvent = !1, e && (e.style.pointerEvents = "none"), this.supportsPassiveOption ? (document.addEventListener("touchend", this.endDrag, {
                                passive: !1
                            }), document.addEventListener("touchmove", this.moveDrag, {
                                passive: !1
                            })) : (document.addEventListener("touchend", this.endDrag), document.addEventListener("touchmove", this.moveDrag)), document.addEventListener("mouseup", this.endDrag), document.addEventListener("mousemove", this.moveDrag)
                        })
                    }
                    offsetParent() {
                        let t = 0,
                            e = 0,
                            i = this.ele.offsetParent;
                        for (; i;) t += i.offsetLeft || 0, e += i.offsetTop || 0, i = i.offsetParent || i.host && i.host.offsetParent;
                        this.offsetParentInfo = {
                            offSetParentX: t,
                            offSetParentY: e
                        }
                    }
                    inScreenView(t, e, i, n) {
                        const o = 50;
                        return i + this.width + t < 0 + o && (i = o - this.width - t), i + t > window.innerWidth - o && (i = window.innerWidth - o - t), n + e < 0 && (n = 0 - e), n + e > window.innerHeight - o && (n = window.innerHeight - o - e), {
                            targetX: i,
                            targetY: n
                        }
                    }
                    panelCloseHandle() {
                        this.closed.emit({
                            target: this
                        })
                    }
                    render() {
                        const t = {
                            left: `${this.x}px`,
                            top: `${this.y}px`,
                            width: `${this.width}px`,
                            height: `${this.height}px`,
                            position: "absolute",
                            zIndex: this.panelZIndex
                        };
                        (this.isWHFull === !0 || this.isWHFull === "true") && (t.width = "100%", t.height = "100%");
                        let e = {
                            left: 0,
                            top: 0,
                            width: "100%",
                            height: "100%",
                            position: "fixed",
                            zIndex: 9999999
                        };
                        this.overFlowHidden && (t.overflow = "hidden", e.overflow = "hidden");
                        const i = this.wrapperFilter ? this.wrapperFilter(t) : t;
                        return (0, s.h)("div", {
                            class: "editor-panel",
                            style: this.isFull ? e : i
                        }, (0, s.h)("div", {
                            class: this.scaling ? "body-shell panel-div" : "panel-div"
                        }, (0, s.h)("slot", {
                            name: "panel-body"
                        }, (0, s.h)("div", null))), (0, s.h)("div", {
                            class: "panel-close-btn",
                            onClick: () => this.panelCloseHandle(),
                            style: {
                                display: this.closeVisible ? "block" : "none"
                            }
                        }), (0, s.h)("nb-touch-cell", {
                            class: "editor-dragBtn",
                            style: {
                                display: this.canResize && !this.isFull ? "block" : "none"
                            },
                            onNbMouseDown: n => this.scaleWinBegin(n.detail)
                        }, (0, s.h)("div", {
                            class: "editor-dragBtn-img",
                            style: {
                                display: this.hold ? "none" : ""
                            }
                        })))
                    }
                    static get assetsDirs() {
                        return ["../assets"]
                    }
                    get ele() {
                        return (0, s.g)(this)
                    }
                };
                a.style = u;
                const g = "";
                let x = class {
                    constructor(t) {
                        (0, s.r)(this, t), this.nbMouseDown = (0, s.c)(this, "nbMouseDown", 7), this.istouch = !1
                    }
                    touchStartHanlder(t) {
                        const e = t.touches[0];
                        t.clientX = e.clientX, t.clientY = e.clientY, this.nbMouseDown.emit(t), this.istouch = !0
                    }
                    mouseDownHanlder(t) {
                        if (this.istouch) {
                            this.istouch = !1;
                            return
                        }
                        this.nbMouseDown.emit(t)
                    }
                    componentWillLoad() {}
                    get element() {
                        return (0, s.g)(this)
                    }
                };
                x.style = g
            }
        }
    ]);
})()