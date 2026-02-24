(function() {
    var u = (g, d, l) => new Promise((s, o) => {
        var n = r => {
                try {
                    a(l.next(r))
                } catch (t) {
                    o(t)
                }
            },
            i = r => {
                try {
                    a(l.throw(r))
                } catch (t) {
                    o(t)
                }
            },
            a = r => r.done ? s(r.value) : Promise.resolve(r.value).then(n, i);
        a((l = l.apply(g, d)).next())
    });
    (self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
        [4230], {
            38769: function(g, d, l) {
                "use strict";
                l.d(d, {
                    D: function() {
                        return s
                    }
                });
                class s {
                    static domQuerySelector(n, i) {
                        return n.shadowRoot ? n.shadowRoot.querySelector(i) : n.querySelector(i)
                    }
                    static querySelectorAll(n, i) {
                        return n.shadowRoot ? n.shadowRoot.querySelectorAll(i) : n.querySelectorAll(i)
                    }
                    static pointIndom(n, i) {
                        let a = !1;
                        for (let r = 0; r < i.length; r++) {
                            const t = i[r];
                            if (!!t && n.x > t.left && n.x < t.right && n.y > t.top && n.y < t.bottom) {
                                a = !0;
                                break
                            }
                        }
                        return a
                    }
                }
            },
            44230: function(g, d, l) {
                "use strict";
                l.r(d), l.d(d, {
                    nb_brush_container: function() {
                        return r
                    }
                });
                var s = l(33659),
                    o = l(38769);
                const n = '.brush-content{pointer-events:none}.brush-content .cursor-pen{cursor:url("assets/imgs/cursor_pen.ico") 0 100, auto}.brush-content .cursor-reaser{cursor:url("assets/imgs/cursor_reaser.ico") 0 100, auto}.brush-content .tools{z-index:1000000;position:fixed;bottom:var(--brush-bottom, 70px);left:50%;margin-left:var(--brush-maleft, -145px);pointer-events:auto}';
                let i, a, r = class {
                    constructor(t) {
                        (0, s.r)(this, t), this.brushOpen = (0, s.c)(this, "brushOpen", 7), this.penClickEvent = (0, s.c)(this, "penClickEvent", 7), this.lockClickEvent = (0, s.c)(this, "lockClickEvent", 7), this.initComplete = (0, s.c)(this, "initComplete", 7), this.brushResize = (0, s.c)(this, "brushResize", 7), this.lockChange = (0, s.c)(this, "lockChange", 7), this.toolbarChange = (0, s.c)(this, "toolbarChange", 7), this.bottomDis = 0, this.isPlayer = !1, this.skin = "phy", this.defpos = {
                            x: 0,
                            y: 0
                        }, this.isActive = !1, this.isUsing = !0, this.cursor = "", this.board = null, this.sizes = [0, 3, 6, 9], this.type = "pen", this.drawStyle = {}, this.defDrawDom = null, this.outDrawDom = null, this.bingBtn = null, this.bingBtnLockClick = e => {
                            this.lockClick(e)
                        }, this.bingBtnPenClick = e => {
                            this.penClick(e)
                        }, this.changeDrawStyle()
                    }
                    componentDidLoad() {
                        this.initComplete.emit()
                    }
                    freshDom() {
                        return u(this, null, function*() {
                            this.state = Math.random();
                            const t = o.D.domQuerySelector(this.element, "nb-lock-pen");
                            t && t.freshLocation()
                        })
                    }
                    initBoard(t, e = null, h = null) {
                        return u(this, null, function*() {
                            const c = t.DrawingBoard;
                            i = c.EventType, a = c.BrushType, this.outDrawDom = h, this.outDrawDom && this.outDrawDom.addEventListener("canvasPointerDown", () => {
                                this.hideColorSetting()
                            }), h || (h = o.D.domQuerySelector(this.element, "nb-brush-canvas")), h.init = !0;
                            const b = yield h.getDom(), m = Object.assign(Object.assign(Object.assign({}, c.defaultOptions), {
                                defaultStrokeWidth: 3,
                                cursorColor: "#FFFFFF66",
                                maxChgLineTm: 500,
                                primaryColor: "#2D8AE6",
                                minGestureFinger: 5,
                                maxFingerDis: 864,
                                maxR: 100,
                                minR: 30,
                                maxGeatureDis: 25,
                                referDpi: 192
                            }), e);
                            return this.board = new c.Board(b, m), this.resize(), this.defaultPen(), this.board
                        })
                    }
                    defaultPen() {
                        this.type = "";
                        const t = {
                            detail: {
                                tool: "pen",
                                attr: "color",
                                value: "#FF7E30"
                            }
                        };
                        this.skin === "chem" && (t.detail.value = "#2d8ae6"), this.brushSettingChange(t)
                    }
                    resetDefault(t = !0) {
                        return u(this, null, function*() {
                            this.isActive = !1, this.isUsing = !0, t && this.board.trigger(i.CLEAR), this.changeDrawStyle(), this.resize(), o.D.domQuerySelector(this.element, "nb-brush").resetAll(!0, {
                                color: {
                                    type: "color",
                                    index: this.skin === "phy" ? 1 : 0,
                                    flag: 1
                                }
                            }).then(() => {
                                const h = this.bingBtn || o.D.domQuerySelector(this.element, "nb-lock-pen");
                                h.lockBtnClick({
                                    tmpunlock: !0
                                }), h.reset(), this.defaultPen()
                            }), this.brushOpen.emit(!1)
                        })
                    }
                    registerLockBtn(t) {
                        return u(this, null, function*() {
                            if (!t) return;
                            o.D.domQuerySelector(this.element, "nb-lock-pen").reset(), this.bingBtn = t, this.bingBtn.addEventListener("lockClick", this.bingBtnLockClick), this.bingBtn.addEventListener("penClick", this.bingBtnPenClick), this.state = Math.random()
                        })
                    }
                    unregisterLockBtn() {
                        return u(this, null, function*() {
                            this.bingBtn && (this.bingBtn.removeEventListener("lockClick", this.bingBtnLockClick), this.bingBtn.removeEventListener("penClick", this.bingBtnPenClick), this.bingBtn = null, this.state = Math.random())
                        })
                    }
                    resize() {
                        this.brushResize.emit()
                    }
                    disconnectedCallback() {
                        this.bingBtn && this.unregisterLockBtn(), this.board && (this.board.dispose(), this.board = null)
                    }
                    brushSettingChange(t) {
                        if (!this.board) return;
                        let e = t.detail,
                            {
                                attr: h,
                                value: c
                            } = e;
                        switch (h) {
                            case "color":
                                {
                                    this.board.trigger(i.BRUSH_COLOR, {
                                        color: c
                                    });
                                    break
                                }
                            case "size":
                                {
                                    let b = this.sizes[c];this.type === "reaser" && (b *= 10),
                                    this.board.trigger(i.LINE_SIZE, {
                                        size: b
                                    });
                                    break
                                }
                        }
                    }
                    brushToolChange(t) {
                        if (!this.board) return;
                        let {
                            type: e
                        } = t.detail;
                        this.toolbarChange.emit(e);
                        const h = ["reaser", "pen", "jinyong"];
                        if (this.type == e && h.indexOf(e) != -1) {
                            console.log("\u91CD\u590D\u4E86", e);
                            return
                        }
                        this.type = e == "" ? "pen" : e;
                        let c = {
                            pen: a.LINE,
                            arrow: a.ARROW,
                            reaser: a.ERASER
                        };
                        this.type == "pen" ? this.cursor = "cursor-pen" : this.type == "reaser" ? this.cursor = "cursor-reaser" : this.type == "jinyong" && (this.cursor = "");
                        let b = c[e];
                        b !== void 0 ? (this.board.trigger(i.BRUSH_TYPE, {
                            type: b
                        }), this.board.trigger(i.ENABLE, {
                            enable: !0
                        }), this.isUsing = !0, this.changeLockBtnState(), this.changeDrawStyle()) : e === "delate" ? this.board.trigger(i.CLEAR) : e === "cancel" ? this.board.trigger(i.UNDO) : e === "jinyong" && (this.board.trigger(i.ENABLE, {
                            enable: !1
                        }), this.isUsing = !1, this.changeLockBtnState(), this.changeDrawStyle(), this.brushOpen.emit(!1))
                    }
                    penClick(t) {
                        return u(this, null, function*() {
                            this.isActive = t.detail, this.changeDrawStyle(), this.isActive ? (this.changeLockBtnState(), this.resize(), this.brushOpen.emit(!0), this.defaultPen(), this.brushToolChange({
                                detail: {
                                    type: this.type
                                }
                            })) : (this.cursor = "", this.changeLockBtnState(!1), this.resetDefault(!1), this.brushOpen.emit(!1))
                        })
                    }
                    lockClick(t) {
                        return u(this, null, function*() {
                            const e = t.detail;
                            this.lockChange.emit(e)
                        })
                    }
                    changeLockBtnState(t) {
                        let e = this.bingBtn || o.D.domQuerySelector(this.element, "nb-lock-pen");
                        t != null ? e.lockBtnClick(t) : this.isUsing ? e.lockBtnClick(this.isUsing) : e.lockBtnClick({
                            tmpunlock: !0
                        })
                    }
                    changeDrawStyle() {
                        this.isUsing && this.isActive ? this.drawStyle = {
                            pointerEvents: "auto",
                            visibility: "visible"
                        } : !this.isUsing && this.isActive ? this.drawStyle = {
                            pointerEvents: "none",
                            visibility: "visible"
                        } : this.drawStyle = {
                            pointerEvents: "none",
                            visibility: "hidden"
                        }
                    }
                    hideColorSetting() {
                        o.D.domQuerySelector(this.element, "nb-brush").setSubmuneVisible(!1)
                    }
                    bottomDisChange() {
                        setTimeout(() => {
                            const t = o.D.domQuerySelector(this.element, "nb-lock-pen");
                            t && t.freshLocation()
                        }, 500)
                    }
                    render() {
                        const t = {
                            display: this.isActive ? "block" : "none"
                        };
                        return this.bottomDis !== 0 && (t.bottom = `${this.bottomDis+70}px`), this.outDrawDom && (this.outDrawDom.cursor = this.cursor, this.outDrawDom.drawStyle = this.drawStyle), (0, s.h)("div", {
                            class: "brush-content"
                        }, this.outDrawDom ? null : (0, s.h)("nb-brush-canvas", {
                            cursor: this.cursor,
                            drawStyle: this.drawStyle,
                            onCanvasPointerDown: () => {
                                this.hideColorSetting()
                            }
                        }), (0, s.h)("nb-lock-pen", {
                            style: {
                                display: this.bingBtn ? "none" : ""
                            },
                            skin: this.skin,
                            isPlayer: this.isPlayer,
                            onLockClick: e => {
                                this.lockClick(e), this.lockClickEvent.emit(e)
                            },
                            onPenClick: e => {
                                this.penClick(e), this.penClickEvent.emit(e)
                            }
                        }), (0, s.h)("nb-brush", {
                            defpos: this.defpos,
                            skin: this.skin,
                            defaultColor: this.skin === "phy" ? 1 : 0,
                            class: "tools",
                            style: t,
                            onBrushSettingChange: e => {
                                this.brushSettingChange(e)
                            },
                            onBrushToolChange: e => {
                                this.brushToolChange(e)
                            }
                        }))
                    }
                    get element() {
                        return (0, s.g)(this)
                    }
                    static get watchers() {
                        return {
                            bottomDis: ["bottomDisChange"]
                        }
                    }
                };
                r.style = n
            }
        }
    ]);
})()