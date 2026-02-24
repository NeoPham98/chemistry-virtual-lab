(function() {
    var l = (x, o, s) => new Promise((t, d) => {
        var p = r => {
                try {
                    g(s.next(r))
                } catch (e) {
                    d(e)
                }
            },
            u = r => {
                try {
                    g(s.throw(r))
                } catch (e) {
                    d(e)
                }
            },
            g = r => r.done ? t(r.value) : Promise.resolve(r.value).then(p, u);
        g((s = s.apply(x, o)).next())
    });
    (self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
        [4083], {
            14083: function(x, o, s) {
                "use strict";
                s.r(o), s.d(o, {
                    nb_bar_base: function() {
                        return u
                    },
                    nb_brush_setting: function() {
                        return r
                    }
                });
                var t = s(33659),
                    d = s(65318);
                const p = 'nb-bar-base .nb-bar-box{position:absolute;display:inline-flex;padding-right:12px;height:44px;background:#23272b;border-radius:8px}nb-bar-base .start-h{width:20px;height:100%;position:relative;cursor:move}nb-bar-base .start-h::after{content:"";display:block;background:white;opacity:0.2;position:absolute;right:2px;top:10px;width:5px;height:24px;border-radius:2px}nb-bar-base .btn-h{width:1px;height:28px;background:#4a4a4a;margin-left:14px;margin-top:10px;margin-right:2px}';
                let u = class {
                    constructor(e) {
                        (0, t.r)(this, e), this.itemClick = (0, t.c)(this, "itemClick", 7), this.defpos = {
                            x: 0,
                            y: 0
                        }, this.dx = this.defpos.x, this.dy = this.defpos.y, this.bgurl = "", this.btnList = [], this.activeIndex = 0, this.x = 0, this.y = 0, this.dargMove = n => {
                            if (!this.isDarging) return;
                            if (!n.clientX && n.touches) {
                                const b = n.touches[0];
                                n.clientX = b.clientX, n.clientY = b.clientY
                            }
                            let {
                                clientX: i,
                                clientY: a
                            } = n;
                            this.dx += i - this.lastX, this.dy += a - this.lastY, this.lastX = i, this.lastY = a
                        }, this.dargEnd = n => {
                            this.isDarging = !1, document.removeEventListener("touchend", this.dargEnd), document.removeEventListener("touchmove", this.dargMove), document.removeEventListener("mouseup", this.dargEnd), document.removeEventListener("mousemove", this.dargMove)
                        }
                    }
                    defposChange(e, n) {
                        e && n && n.x === this.dx && n.y === this.dx && (this.dx = e.x, this.dy = e.y)
                    }
                    getbgurl() {
                        return this.bgurl == "" ? null : {
                            backgroundImage: `url(${this.bgurl})`
                        }
                    }
                    componentWillLoad() {
                        const e = d.S.getInstance();
                        this.supportsPassiveOption = e.supportsPassiveOption
                    }
                    detectChanges() {
                        return l(this, null, function*() {
                            this.state = Math.random()
                        })
                    }
                    startDarg(e) {
                        this.isDarging = !0, this.lastX = e.clientX, this.lastY = e.clientY, this.supportsPassiveOption ? (document.addEventListener("touchend", this.dargEnd, {
                            passive: !1
                        }), document.addEventListener("touchmove", this.dargMove, {
                            passive: !1
                        })) : (document.addEventListener("touchend", this.dargEnd), document.addEventListener("touchmove", this.dargMove)), document.addEventListener("mouseup", this.dargEnd), document.addEventListener("mousemove", this.dargMove)
                    }
                    getListBtns() {
                        return this.btnList.map((e, n) => (0, t.h)("nb-touch-cell", {
                            class: e.cla + (e.index === this.activeIndex ? " active" : "") + (e.disabled || e.deny ? " div-alpha " : ""),
                            onNbMouseDown: e.cla === "start-h" ? i => {
                                this.startDarg(i.detail)
                            } : void 0,
                            style: Object.assign({
                                pointerEvents: e.disabled || this.isDarging ? "none" : "auto"
                            }, e.cla !== "btn-h" && e.cla !== "start-h" ? this.getbgurl() : {}),
                            onClick: i => this.itemClick.emit({
                                evt: i,
                                data: e
                            })
                        }, (() => {
                            if (e.hasOwnProperty("deny") && e.deny) {
                                const i = (0, t.h)("div", {
                                    class: "div-deny"
                                });
                                return e.domObjTemp = i, Object.defineProperty(e, "dom", {
                                    get: function() {
                                        return this.domObjTemp.$elm$
                                    }
                                }), i
                            }
                        })()))
                    }
                    render() {
                        return (0, t.h)("div", {
                            class: "nb-bar-box",
                            style: {
                                transform: `translate(${this.dx}px, ${this.dy}px)`
                            }
                        }, this.getListBtns(), (0, t.h)("slot", {
                            name: "bar-base-bind"
                        }))
                    }
                    get ele() {
                        return (0, t.g)(this)
                    }
                    static get watchers() {
                        return {
                            defpos: ["defposChange"]
                        }
                    }
                };
                u.style = p;
                const g = '.choose{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -18px;width:9px;height:9px}.ellipse{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -32px;width:9px;height:9px}.ketuodong{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -93px;width:4px;height:23px}.menu_icon_arrow_def{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -527px;width:24px;height:24px}.menu_icon_arrow_hov{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -556px;width:24px;height:24px}.menu_icon_arrow_pre{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -585px;width:24px;height:24px}.menu_icon_brush_def{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -614px;width:24px;height:24px}.menu_icon_brush_hov{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -121px;width:24px;height:24px}.menu_icon_brush_pre{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -150px;width:24px;height:24px}.menu_icon_cancel_def{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -179px;width:24px;height:24px}.menu_icon_cancel_hov{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -208px;width:24px;height:24px}.menu_icon_cancel_pre{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -237px;width:24px;height:24px}.menu_icon_delate_def{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -266px;width:24px;height:24px}.menu_icon_delate_hov{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -295px;width:24px;height:24px}.menu_icon_delate_pre{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -324px;width:24px;height:24px}.menu_icon_jinyong_def{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -353px;width:24px;height:24px}.menu_icon_jinyong_hov{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -382px;width:24px;height:24px}.menu_icon_jinyong_pre{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -411px;width:24px;height:24px}.menu_icon_reaser_def{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -440px;width:24px;height:24px}.menu_icon_reaser_hov{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -469px;width:24px;height:24px}.menu_icon_reaser_pre{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -498px;width:24px;height:24px}.ok,.setting .item .color::after{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px 0px;width:6px;height:4px}.path{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -9px;width:6px;height:4px}.pen{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -69px;width:19px;height:19px}.rubber{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -46px;width:18px;height:18px}.toolbar_icon_brush_def{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -643px;width:34px;height:34px}.toolbar_icon_brush_hov{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -682px;width:34px;height:34px}.toolbar_icon_brush_pre{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -721px;width:34px;height:34px}.chem .size.active{background-color:#2f8cea !important}.chem .size:hover{background-color:#2f8cea !important}.chem .color::after{background-color:#2f8cea !important}.setting{display:inline-flex;height:34px;background:rgba(22, 23, 24, 0.79);border-radius:8px;padding:0 5px}.setting .item{display:flex;width:30px;height:34px;align-items:center;justify-content:center}.setting .item .sizeBox{width:16px;height:16px;display:flex;align-items:center;justify-content:center;cursor:pointer}.setting .item .sizeBox .size{background:#cccccc;border-radius:50%}.setting .item .sizeBox .size.size1{width:6px;height:6px}.setting .item .sizeBox .size.size2{width:10px;height:10px}.setting .item .sizeBox .size.size3{width:14px;height:14px}.setting .item .sizeBox .size.active{background-color:#FF7E30}.setting .item .sizeBox .size:hover{background-color:#FF7E30}.setting .item :nth-child(n){cursor:pointer}.setting .item .color{width:16px;height:16px;border-radius:1px;position:relative}.setting .item .color::after{content:"";position:absolute;left:100%;top:100%;display:block;height:5px;width:5px;margin:-3px;visibility:hidden;background-color:#FF7E30;box-shadow:0 0 1px #ffffff;transform:scale(1.5);border-radius:50%}.setting .item .color:hover::after{visibility:visible}.setting .item .color.active::after{visibility:visible}.setting .segmentation{margin:9px 4px;width:1px;height:14px;background:rgba(255, 255, 255, 0.2)}.setting .pointed{position:absolute;top:100%;left:0;border:6px solid;border-color:rgba(22, 23, 24, 0.79) transparent transparent transparent}';
                let r = class {
                    constructor(e) {
                        (0, t.r)(this, e), this.settingChange = (0, t.c)(this, "settingChange", 7), this.settingList = [], this.pointLeft = 0, this.sizeIndex = 0, this.colorIndex = 0, this.skin = "phy", this.Index = 0
                    }
                    componentDidLoad() {}
                    changeState(e, {
                        type: n,
                        index: i,
                        value: a
                    }) {
                        switch (n) {
                            case "size":
                                {
                                    if (this.sizeIndex === i) return;this.settingChange.emit({
                                        flag: this.flag,
                                        type: n,
                                        index: i,
                                        value: a
                                    });
                                    break
                                }
                            case "color":
                                {
                                    if (this.colorIndex === i) return;this.settingChange.emit({
                                        flag: this.flag,
                                        type: n,
                                        index: i,
                                        value: a
                                    });
                                    break
                                }
                        }
                    }
                    creatSettingDom() {
                        let e = this.settingList.length;
                        return this.settingList.map((n, i) => {
                            let {
                                type: a,
                                item: b
                            } = n;
                            if (!!a) {
                                switch (a) {
                                    case "|":
                                        return (0, t.h)("span", {
                                            class: "segmentation"
                                        });
                                    case "size":
                                        return b.map((h, c) => (0, t.h)("span", {
                                            class: "item"
                                        }, (0, t.h)("span", {
                                            class: "sizeBox",
                                            onClick: k => {
                                                this.changeState(k, {
                                                    type: a,
                                                    index: c,
                                                    value: h
                                                })
                                            }
                                        }, (0, t.h)("span", {
                                            class: "size size" + h + " " + (c === this.sizeIndex ? "active" : "")
                                        }))));
                                    case "color":
                                        return b.map((h, c) => (0, t.h)("span", {
                                            class: "item"
                                        }, (0, t.h)("span", {
                                            class: "color " + (c === this.colorIndex ? "active" : ""),
                                            style: {
                                                backgroundColor: h
                                            },
                                            onClick: k => {
                                                this.changeState(k, {
                                                    type: a,
                                                    index: c,
                                                    value: h
                                                })
                                            }
                                        })))
                                }!(i < e)
                            }
                        })
                    }
                    render() {
                        return (0, t.h)("div", {
                            class: "setting " + this.skin
                        }, this.creatSettingDom(), (0, t.h)("div", {
                            class: "pointed",
                            style: {
                                left: this.pointLeft
                            }
                        }))
                    }
                    get el() {
                        return (0, t.g)(this)
                    }
                };
                r.style = g
            },
            65318: function(x, o, s) {
                "use strict";
                s.d(o, {
                    S: function() {
                        return t
                    }
                });
                class t {
                    constructor() {
                        this.supportsPassiveOption = !1, this.touchDevice = !1, this.touchDevice = "ontouchstart" in window, this.checksPassiveOption()
                    }
                    static getInstance() {
                        return t._instance || (t._instance = new t), t._instance
                    }
                    checksPassiveOption() {
                        try {
                            let p = Object.defineProperty({}, "passive", {
                                get: () => {
                                    this.supportsPassiveOption = !0
                                }
                            });
                            window.addEventListener("test", null, p), this.supportsPassiveOption && window.removeEventListener("test", null)
                        } catch (p) {}
                    }
                }
            }
        }
    ]);
})()