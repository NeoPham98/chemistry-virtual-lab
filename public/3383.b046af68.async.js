(function() {
    var p = (l, b, o) => new Promise((n, h) => {
        var s = i => {
                try {
                    c(o.next(i))
                } catch (a) {
                    h(a)
                }
            },
            r = i => {
                try {
                    c(o.throw(i))
                } catch (a) {
                    h(a)
                }
            },
            c = i => i.done ? n(i.value) : Promise.resolve(i.value).then(s, r);
        c((o = o.apply(l, b)).next())
    });
    (self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
        [3383], {
            38769: function(l, b, o) {
                "use strict";
                o.d(b, {
                    D: function() {
                        return n
                    }
                });
                class n {
                    static domQuerySelector(s, r) {
                        return s.shadowRoot ? s.shadowRoot.querySelector(r) : s.querySelector(r)
                    }
                    static querySelectorAll(s, r) {
                        return s.shadowRoot ? s.shadowRoot.querySelectorAll(r) : s.querySelectorAll(r)
                    }
                    static pointIndom(s, r) {
                        let c = !1;
                        for (let i = 0; i < r.length; i++) {
                            const a = r[i];
                            if (!!a && s.x > a.left && s.x < a.right && s.y > a.top && s.y < a.bottom) {
                                c = !0;
                                break
                            }
                        }
                        return c
                    }
                }
            },
            73383: function(l, b, o) {
                "use strict";
                o.r(b), o.d(b, {
                    nb_brush: function() {
                        return r
                    },
                    nb_brush_canvas: function() {
                        return i
                    },
                    nb_lock_pen: function() {
                        return k
                    }
                });
                var n = o(33659),
                    h = o(38769);
                const s = ".choose{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -18px;width:9px;height:9px}.ellipse{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -32px;width:9px;height:9px}.ketuodong{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -93px;width:4px;height:23px}.menu_icon_arrow_def,.bush-arrow{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -527px;width:24px;height:24px}.menu_icon_arrow_hov,.bush-arrow:hover{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -556px;width:24px;height:24px}.menu_icon_arrow_pre,.bush-arrow.active,.bush-arrow:active{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -585px;width:24px;height:24px}.menu_icon_brush_def,.bush-pen{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -614px;width:24px;height:24px}.menu_icon_brush_hov,.bush-pen:hover{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -121px;width:24px;height:24px}.menu_icon_brush_pre,.bush-pen.active,.bush-pen:active{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -150px;width:24px;height:24px}.menu_icon_cancel_def,.bush-cancel-m,.bush-cancel{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -179px;width:24px;height:24px}.menu_icon_cancel_hov,.bush-cancel:hover{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -208px;width:24px;height:24px}.menu_icon_cancel_pre,.bush-cancel-m:active,.bush-cancel:active{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -237px;width:24px;height:24px}.menu_icon_delate_def,.bush-delate-m,.bush-delate{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -266px;width:24px;height:24px}.menu_icon_delate_hov,.bush-delate:hover{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -295px;width:24px;height:24px}.menu_icon_delate_pre,.bush-delate-m:active,.bush-delate:active{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -324px;width:24px;height:24px}.menu_icon_jinyong_def,.bush-jinyong{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -353px;width:24px;height:24px}.menu_icon_jinyong_hov,.bush-jinyong:hover{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -382px;width:24px;height:24px}.menu_icon_jinyong_pre,.bush-jinyong.active,.bush-jinyong:active{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -411px;width:24px;height:24px}.menu_icon_reaser_def,.bush-reaser{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -440px;width:24px;height:24px}.menu_icon_reaser_hov,.bush-reaser:hover{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -469px;width:24px;height:24px}.menu_icon_reaser_pre,.bush-reaser.active,.bush-reaser:active{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -498px;width:24px;height:24px}.ok{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px 0px;width:6px;height:4px}.path{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -9px;width:6px;height:4px}.pen{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -69px;width:19px;height:19px}.rubber{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -46px;width:18px;height:18px}.toolbar_icon_brush_def{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -643px;width:34px;height:34px}.toolbar_icon_brush_hov{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -682px;width:34px;height:34px}.toolbar_icon_brush_pre{background-image:url(assets/imgs/nbk/nbk_nb-brush_sprite.png);background-size:34px 755px;background-repeat:no-repeat;background-position:0px -721px;width:34px;height:34px}.brush{position:relative}.flex-btn-base,.bush-jinyong,.bush-cancel-m,.bush-delate-m,.bush-cancel,.bush-delate,.bush-reaser,.bush-arrow,.bush-pen{margin-top:10px;margin-left:14px;cursor:pointer}.sunMnue{position:absolute;top:-42px;left:0}.sunMnue.reaserSetting{left:37px}";
                let r = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.brushSettingChange = (0, n.c)(this, "brushSettingChange", 7), this.brushToolChange = (0, n.c)(this, "brushToolChange", 7), this.suffix = "ontouchstart" in document.documentElement ? "-m" : "", this.btnList = [{
                            index: 0,
                            cla: "start-h"
                        }, {
                            index: 1,
                            cla: "bush-pen",
                            command: "pen"
                        }, {
                            index: 3,
                            cla: "bush-reaser",
                            command: "reaser"
                        }, {
                            index: 7,
                            cla: "bush-jinyong",
                            command: "jinyong"
                        }, {
                            index: 5,
                            cla: "btn-h"
                        }, {
                            index: 6,
                            cla: `bush-cancel${this.suffix}`,
                            command: "cancel"
                        }, {
                            index: 4,
                            cla: `bush-delate${this.suffix}`,
                            command: "delate"
                        }, {
                            index: 8,
                            cla: "start-h"
                        }], this.sizes = [1, 2, 3], this.colors = ["#2D8AE6", "#FF7E30", "#FFCF50", "#27CC2A", "#FFFFFF"], this.penSetting = [{
                            type: "size",
                            item: this.sizes
                        }, {
                            type: "|"
                        }, {
                            type: "color",
                            item: this.colors
                        }], this.reaserSetting = [{
                            type: "size",
                            item: this.sizes
                        }], this.skinUrl = {
                            chem: "assets/imgs/nbk/nbk_nb-brush-chem_sprite.png",
                            phy: "assets/imgs/nbk/nbk_nb-brush_sprite.png"
                        }, this.skin = "phy", this.defaultColor = 0, this.defpos = {
                            x: 0,
                            y: 0
                        }, this.skinurl = this.skinUrl[this.skin], this.activeIndex = 1, this.penSizeIndex = 0, this.penColorIndex = 0, this.arrowSizeIndex = 0, this.arrowColorIndex = 0, this.reaserSizeIndex = 0, this.submuneVisible = !0
                    }
                    getSetting() {
                        return p(this, null, function*() {
                            return {
                                penSize: this.sizes[this.penSizeIndex],
                                penColor: this.colors[this.penColorIndex],
                                arrowSize: this.sizes[this.arrowSizeIndex],
                                arrowColor: this.colors[this.arrowColorIndex],
                                reaserSize: this.sizes[this.reaserSizeIndex],
                                active: this.activeIndex
                            }
                        })
                    }
                    setSubmuneVisible(e) {
                        return p(this, null, function*() {
                            this.submuneVisible = e
                        })
                    }
                    resetAll(e = !0, t = null) {
                        return p(this, null, function*() {
                            this.activeIndex = 1, this.penSizeIndex = 0, this.penColorIndex = this.defaultColor, this.arrowSizeIndex = 0, this.arrowColorIndex = this.defaultColor, this.reaserSizeIndex = 0, t ? this.settingChangeHander({
                                detail: t.color
                            }) : this.settingChangeHander({
                                detail: {
                                    type: "color",
                                    index: 0,
                                    flag: 1
                                }
                            }), this.settingChangeHander({
                                detail: {
                                    type: "size",
                                    index: 0,
                                    flag: 1
                                }
                            }), e && this.brushToolChange.emit({
                                type: "pen"
                            })
                        })
                    }
                    settingChangeHander(e) {
                        let {
                            type: t,
                            index: u,
                            flag: g
                        } = e.detail;
                        const d = {
                                1: "pen",
                                2: "arrow",
                                3: "reaser"
                            },
                            x = {
                                color: "Color",
                                size: "Size"
                            };
                        u !== void 0 ? this[d[g] + x[t] + "Index"] = u : u = this[d[g] + x[t] + "Index"], this.brushSettingChange.emit({
                            tool: d[g],
                            attr: t,
                            value: this[t + "s"][u]
                        })
                    }
                    itemClick(e) {
                        return p(this, null, function*() {
                            let {
                                index: t,
                                command: u
                            } = e.detail.data;
                            this.activeIndex !== t && [1, 2, 3, 7].includes(t) && (this.activeIndex = t), this.brushToolChange.emit({
                                type: u
                            }), [1, 2, 3].includes(t) && (this.settingChangeHander({
                                detail: {
                                    type: "size",
                                    index: void 0,
                                    flag: t
                                }
                            }), t !== 3 && this.settingChangeHander({
                                detail: {
                                    type: "color",
                                    index: void 0,
                                    flag: t
                                }
                            }), this.submuneVisible = !0)
                        })
                    }
                    componentWillLoad() {
                        this.penColorIndex = this.defaultColor, this.arrowColorIndex = this.defaultColor
                    }
                    getSubMnueDom() {
                        if (!!this.submuneVisible) switch (this.activeIndex) {
                            case 1:
                                return (0, n.h)("nb-brush-setting", {
                                    skin: this.skin,
                                    flag: 1,
                                    sizeIndex: this.penSizeIndex,
                                    colorIndex: this.penColorIndex,
                                    class: "sunMnue",
                                    settingList: this.penSetting,
                                    pointLeft: "15%"
                                });
                            case 2:
                                return (0, n.h)("nb-brush-setting", {
                                    skin: this.skin,
                                    flag: 2,
                                    sizeIndex: this.arrowSizeIndex,
                                    colorIndex: this.arrowColorIndex,
                                    class: "sunMnue",
                                    settingList: this.penSetting,
                                    pointLeft: "26%"
                                });
                            case 3:
                                return (0, n.h)("nb-brush-setting", {
                                    skin: this.skin,
                                    flag: 3,
                                    sizeIndex: this.reaserSizeIndex,
                                    class: "sunMnue reaserSetting",
                                    settingList: this.reaserSetting,
                                    pointLeft: "44%"
                                })
                        }
                    }
                    render() {
                        return (0, n.h)("div", {
                            class: "brush"
                        }, (0, n.h)("nb-bar-base", {
                            defpos: this.defpos,
                            bgurl: this.skinurl,
                            btnList: this.btnList,
                            onItemClick: e => this.itemClick(e),
                            activeIndex: this.activeIndex
                        }, (0, n.h)("div", {
                            slot: "bar-base-bind"
                        }, this.getSubMnueDom())))
                    }
                };
                r.style = s;
                const c = ".drawDiv{position:fixed}.drawDiv canvas{position:fixed !important;z-index:10}.defPointEvent{pointer-events:none}";
                let i = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.canvasPointerDown = (0, n.c)(this, "canvasPointerDown", 7), this.cursor = "", this.drawStyle = {}, this.init = !1
                    }
                    getDom() {
                        return p(this, null, function*() {
                            const e = h.D.domQuerySelector(this.element, ".drawDiv");
                            return Promise.resolve(e)
                        })
                    }
                    render() {
                        return (0, n.h)("div", {
                            class: "drawDiv " + this.cursor + (this.init ? "" : " defPointEvent"),
                            style: this.drawStyle,
                            onPointerDown: () => {
                                this.canvasPointerDown.emit()
                            }
                        })
                    }
                    get element() {
                        return (0, n.g)(this)
                    }
                };
                i.style = c;
                const a = '.lock_close_def,.lc-content .lockbtn{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px 0px;width:34px;height:34px}.lock_close_hov{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px -39px;width:34px;height:34px}.lock_close_pre,.lc-content .lockbtn:active{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px -78px;width:34px;height:34px}.toolbar_icon_brush_def,.lc-content .penbtn{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px -117px;width:34px;height:34px}.toolbar_icon_brush_hov{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px -156px;width:34px;height:34px}.toolbar_icon_brush_pre,.lc-content .penbtn:active{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px -195px;width:34px;height:34px}.unlock_close_def,.lc-content .unlockbtn{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px -234px;width:34px;height:34px}.unlock_close_hov{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px -273px;width:34px;height:34px}.unlock_close_pre,.lc-content .unlockbtn:active{background-image:url(assets/imgs/nbk/nbk_nb-lock-pen_sprite.png);background-size:34px 346px;background-repeat:no-repeat;background-position:0px -312px;width:34px;height:34px}.lc-content{pointer-events:auto;display:flex}.lc-content .bgclass{background:#212529;border-radius:6px;padding:0 2px}.lc-content .btnClass{display:inline-block;text-align:center;cursor:pointer;width:38px;height:38px}.lc-content .btnClass:first-child{margin-right:16px}.lc-content .playBtn{margin-right:0 !important}.lc-content .basebtn{display:inline-block;vertical-align:middle;margin:2px}.lc-content .lockLabel{font-size:14px;color:#ccc;margin-top:-5px;user-select:none}.lc-content .penLabel{font-size:14px;color:#ccc;margin-top:-5px;user-select:none}.lc-content .activePenLabel{font-size:14px;color:#ff7e30;margin-top:-5px;user-select:none}.lc-content .hideLabel{display:none}.btnClassHover:hover .lockLabel{color:#ff7e30}.btnClassHover:hover .penLabel{color:#ff7e30}.btnClassHover:hover .unlockbtn{background-image:url("assets/imgs/nbk/nbk_nb-lock-pen_sprite.png") !important;background-size:34px 346px !important;background-repeat:no-repeat !important;background-position:0px -312px !important;width:34px !important;height:34px !important}.btnClassHover:hover .lockbtn{background-image:url("assets/imgs/nbk/nbk_nb-lock-pen_sprite.png") !important;background-size:34px 346px !important;background-repeat:no-repeat !important;background-position:0px -78px !important;width:34px !important;height:34px !important}.btnClassHover:hover .penbtn{background-image:url("assets/imgs/nbk/nbk_nb-lock-pen_sprite.png") !important;background-size:34px 346px !important;background-repeat:no-repeat !important;background-position:0px -195px !important;width:34px !important;height:34px !important}';
                let k = class {
                    constructor(e) {
                        (0, n.r)(this, e), this.penClick = (0, n.c)(this, "penClick", 7), this.lockClick = (0, n.c)(this, "lockClick", 7), this.lockBtnClickEvent = (0, n.c)(this, "lockBtnClickEvent", 7), this.isPlayer = !1, this.showLabel = !1, this.skin = "phy", this.contentStyle = {}, this.penActive = !1, this.lockSkin = "unlockbtn", this.skinUrl = {
                            chem: "assets/imgs/nbk/nbk_nb-lock-pen-chem_sprite.png",
                            phy: "assets/imgs/nbk/nbk_nb-lock-pen_sprite.png"
                        }, this.skinurl = this.skinUrl[this.skin], this.penSkin = "penbtn", this.lockstate = !1, this.tempOpen = !1, this.isAndroid = !1
                    }
                    getState() {
                        return p(this, null, function*() {
                            return {
                                lock: this.lockstate,
                                pen: this.penActive
                            }
                        })
                    }
                    reset() {
                        return p(this, null, function*() {
                            this.penActive = !1, this.lockSkin = "unlockbtn", this.penSkin = "penbtn", this.lockstate = !1, this.tempOpen = !1
                        })
                    }
                    componentWillLoad() {
                        navigator.userAgent.toLowerCase().indexOf("android") != -1 && (this.isAndroid = !0)
                    }
                    componentDidLoad() {
                        this.freshLocation()
                    }
                    freshLocation() {
                        return p(this, null, function*() {
                            if (this.isPlayer) return;
                            const e = h.D.domQuerySelector(document.body, ".scale-cla");
                            if (!e) return;
                            const t = e.getBoundingClientRect();
                            this.contentStyle = {
                                left: `${t.right+20}px`,
                                top: `${t.top}px`
                            }
                        })
                    }
                    disconnectedCallback() {}
                    winresizeChange() {
                        this.freshLocation()
                    }
                    lockBtnClick(e, t = null) {
                        return p(this, null, function*() {
                            if (e && typeof e == "object") e.tmpunlock && (this.tempOpen = !0, this.lockstate = !0);
                            else if (e != null) {
                                this.lockstate = e, this.tempOpen = !1, this.lockstate ? this.lockSkin = "lock_close_def" : this.lockSkin = "unlock_close_def", this.lockClick.emit(this.lockstate);
                                return
                            }
                            this.penActive && !this.tempOpen || (this.lockstate = !this.lockstate, this.lockstate ? this.lockSkin = "lockbtn" : this.lockSkin = "unlockbtn", this.lockClick.emit(this.lockstate), t && this.lockBtnClickEvent.emit())
                        })
                    }
                    penBtnClick() {
                        this.penActive = !this.penActive, this.penActive ? this.penSkin = "toolbar_icon_brush_pre" : this.penSkin = "penbtn", this.penClick.emit(this.penActive)
                    }
                    createLockBtn() {
                        const e = this.isAndroid ? "" : "btnClassHover";
                        return (0, n.h)("div", {
                            class: this.isPlayer ? `btnClass playBtn ${e}` : `btnClass bgclass ${e}`,
                            onClick: t => {
                                this.lockBtnClick(null, t)
                            }
                        }, (0, n.h)("div", {
                            class: this.lockSkin + " basebtn",
                            ref: t => {
                                t && t.style.setProperty("background-image", `url(${this.skinurl})`, "important")
                            }
                        }), (0, n.h)("div", {
                            class: this.showLabel ? "lockLabel" : "hideLabel"
                        }, "\u9501\u5B9A"))
                    }
                    createPenBtn() {
                        const e = this.isAndroid ? "" : "btnClassHover";
                        return (0, n.h)("div", {
                            class: this.isPlayer ? `btnClass playBtn ${e}` : `btnClass bgclass ${e}`,
                            onClick: () => {
                                this.penBtnClick()
                            }
                        }, (0, n.h)("div", {
                            class: this.penSkin + " basebtn",
                            ref: t => {
                                t && t.style.setProperty("background-image", `url(${this.skinurl})`, "important")
                            }
                        }), (0, n.h)("div", {
                            class: this.showLabel ? this.penActive ? "activePenLabel" : "penLabel" : "hideLabel"
                        }, "\u753B\u7B14"))
                    }
                    render() {
                        return this.isPlayer ? (0, n.h)("div", {
                            class: "lc-content",
                            style: this.contentStyle
                        }, this.createPenBtn(), (0, n.h)("slot", {
                            name: "item-center"
                        }), this.createLockBtn()) : (0, n.h)("div", {
                            class: "lc-content",
                            style: this.contentStyle
                        }, this.createLockBtn(), this.createPenBtn())
                    }
                    get element() {
                        return (0, n.g)(this)
                    }
                };
                k.style = a
            }
        }
    ]);
})()