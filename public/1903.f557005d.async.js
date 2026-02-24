(function() {
    var M = (C, E, n) => new Promise((c, m) => {
        var t = a => {
                try {
                    l(n.next(a))
                } catch (s) {
                    m(s)
                }
            },
            r = a => {
                try {
                    l(n.throw(a))
                } catch (s) {
                    m(s)
                }
            },
            l = a => a.done ? c(a.value) : Promise.resolve(a.value).then(t, r);
        l((n = n.apply(C, E)).next())
    });
    (self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
        [1903], {
            21127: function(C, E, n) {
                "use strict";
                n.d(E, {
                    L: function() {
                        return c
                    }
                });
                class c {
                    static setOnloadTime() {
                        this.onloadTime || (this.onloadTime = new Date().getTime())
                    }
                    static appiumData() {
                        return M(this, null, function*() {
                            if (this.posted) return;
                            this.posted = !0;
                            const t = _.get(window, "nbWebChannel");
                            if (t) {
                                const l = yield this.getSObjStr();
                                t.postMessage(l);
                                return
                            }
                            const r = _.get(window, "webkit.messageHandlers.jsToOcWithPrams");
                            if (r) {
                                const l = yield this.getSObjStr(!0);
                                r.postMessage({
                                    params: l
                                })
                            }
                        })
                    }
                    static getSObjStr(t = !1) {
                        return M(this, null, function*() {
                            const {
                                domainLookupStart: r
                            } = window.performance.timing, l = this.onloadTime, a = new Date().getTime(), s = {
                                emptyTime: l - r,
                                emTocomTime: a - l,
                                totalTime: a - r
                            }, e = NBLog.getMobileInfo();
                            let h = yield this.calcuFPS();
                            if (s.fps = h, s.browser = e.browser, t) {
                                let p = navigator.userAgent.split(" ");
                                for (let o = 0; o < p.length; o++) p[o].includes("AppleWebKit") && (s.browser = p[o].replace("/", " "))
                            }
                            return console.log(`~~~~~ nbWebChannel:${h}`, s), JSON.stringify(s)
                        })
                    }
                    static calcuFPS() {
                        let t = 0,
                            r = 0;
                        return new Promise(l => {
                            let a = new Date().getTime(),
                                s = function() {
                                    let h = new Date().getTime(),
                                        d = 1e3 / (h - a);
                                    t > 60 ? l(Math.round(r / t)) : (d < 80 && (t++, r += d, a = h), requestAnimationFrame(s))
                                };
                            requestAnimationFrame(s)
                        })
                    }
                }
                c.onloadTime = 0, c.posted = !1
            },
            11903: function(C, E, n) {
                "use strict";
                n.r(E), n.d(E, {
                    chem_canvas: function() {
                        return s
                    }
                });
                var c = n(33659),
                    m = n(51811),
                    t = n(70145),
                    r = n(21127),
                    l = n(68807);
                const a = ':host{display:block}#crackMask{position:absolute;left:-1000px;top:500px;z-index:10;width:2px;height:2px;padding:150px;overflow:hidden;display:none;pointer-events:none}#crackMask #crack{background-image:url("assets/img/carck.png");width:1861px;height:1327px;left:-930px;top:-663px;transform:scale(0.5);position:relative}';
                let s = class {
                    constructor(e) {
                        (0, c.r)(this, e), this.initComplete = (0, c.c)(this, "initComplete", 7), this.canvasConfig = {}, this.flag = 0, this.isBooming = !1, this.creaMaskStyle = {
                            display: "none",
                            transform: "",
                            padding: "150px",
                            left: "-1000px",
                            top: "500px"
                        }, this.cavDivStyle = {
                            transform: "",
                            opacity: 1,
                            position: "fixed",
                            left: 0,
                            right: 0,
                            top: 0,
                            bottom: 0
                        }, this.freshCount = 0, this.hadDestroy = !1, this.listenerFuncAry = []
                    }
                    componentDidLoad() {
                        r.L.setOnloadTime(), this.initComplete.emit(), setTimeout(() => {
                            this.autoInit && this.initChem()
                        }, 10)
                    }
                    initChem(e = null) {
                        return M(this, null, function*() {
                            return e && (this.canvas = e), this.createCanvasApp(), this.labData && this.setDataToModule(this.labData), this.initListener(), {
                                dispatch: t.a,
                                canvasMain: this.chemicalMain
                            }
                        })
                    }
                    createCanvasApp() {
                        this.element.querySelector("#chem-canvas-div").appendChild(this.canvas), window.PIXI.settings.RESOLUTION = window.__nb_resolution || .8, window.PIXI.settings.FILTER_RESOLUTION = window.__nb_resolution || .8;
                        let e;
                        window.chemicalMain ? e = window.chemicalMain : (e = new ChemicalMain(this.canvas, this.canvasConfig), window.chemicalMain = e), this.chemicalMain = m.C.chemicalMain = e, m.C.NBCommand = NBCommand, m.C.moduleType = 0, this.chemicalMain.execute(NBCommand.SET_STAGE_RENDER_ENABLED, !0), this.chemicalMain.execute(NBCommand.CHANGE_BACKGROUND, {
                            color: this.chemicalMain.getBackgroundColor()
                        })
                    }
                    initListener() {
                        const e = i => {
                            const g = i.detail;
                            this.chemicalMain.execute(NBCommand.ZOOM_IN_OUT, {
                                zoomValue: g.value
                            }), t.a.emit(t.E.CHANGE_PANEL_STATUS), t.a.emit(t.E.SHOW_EQ_LIST, [])
                        };
                        this.listenerFuncAry.push({
                            type: t.E.ZOOM_IN_OUT,
                            func: e,
                            isChemicalMain: !1
                        });
                        const h = () => {
                            m.C.showAllEqu(this.chemicalMain)
                        };
                        this.listenerFuncAry.push({
                            type: t.E.SHOW_ALL_EQ,
                            func: h,
                            isChemicalMain: !1
                        });
                        const d = () => {
                            this.showLab(this.strLatestContent)
                        };
                        this.listenerFuncAry.push({
                            type: t.E.RESET_LAB,
                            func: d,
                            isChemicalMain: !1
                        });
                        const p = i => {
                            m.C.delEq(i.detail, this.chemicalMain)
                        };
                        this.listenerFuncAry.push({
                            type: t.E.DEL_EQ,
                            func: p,
                            isChemicalMain: !1
                        });
                        const o = i => {
                            m.C.setStageEnable(i.detail)
                        };
                        this.listenerFuncAry.push({
                            type: t.E.SET_STAGE_RENDER_ENABLED,
                            func: o,
                            isChemicalMain: !1
                        });
                        const y = i => {
                            m.C.setMuteType(i.detail)
                        };
                        this.listenerFuncAry.push({
                            type: t.E.SET_MUTE_TYPE,
                            func: y,
                            isChemicalMain: !1
                        });
                        const T = i => {
                            t.a.emit(t.E.LOADED_RESTORE_DATA, i);
                            const g = {
                                zoom: this.chemicalMain.viewStack.scale.x || 1
                            };
                            t.a.emit(t.E.CHANGE_ZOOM, g)
                        };
                        this.listenerFuncAry.push({
                            type: NBEvent.communicate.angular.LOADED_RESTORE_DATA,
                            func: T,
                            isChemicalMain: !0
                        });
                        const f = i => {
                            t.a.emit(t.E.CHANGE_PANEL_STATUS, i)
                        };
                        this.listenerFuncAry.push({
                            type: NBEvent.communicate.angular.CHANGE_PANEL_STATUS,
                            func: f,
                            isChemicalMain: !0
                        }), this.listenerFuncAry.push({
                            type: NBEvent.communicate.angular.RIGHT_MOUSE_DOWN,
                            func: f,
                            isChemicalMain: !0
                        });
                        const u = i => {
                            this.chemicalMain && this.chemicalMain.viewStack && TweenMax.isTweening(this.chemicalMain.viewStack) && (TweenMax.killTweensOf(this.chemicalMain.viewStack), TweenMax.killTweensOf(this.chemicalMain.viewStack.scale)), t.a.emit(t.E.CHANGE_PANEL_STATUS), t.a.emit(t.E.CHANGE_ZOOM, i), t.a.emit(t.E.SHOW_EQ_LIST, [])
                        };
                        this.listenerFuncAry.push({
                            type: NBEvent.change.ZOOM,
                            func: u,
                            isChemicalMain: !0
                        }), this.listenerFuncAry.push({
                            type: NBEvent.communicate.angular.EQ_DRAG_MOVE,
                            func: f,
                            isChemicalMain: !0
                        });
                        const S = i => {
                            t.a.emit(t.E.SHOW_EQ_ATTRIBUTE, {
                                eq: i,
                                main: this.chemicalMain,
                                cmd: NBCommand
                            })
                        };
                        this.listenerFuncAry.push({
                            type: NBEvent.communicate.angular.SHOW_EQ_ATTRIBUTE,
                            func: S,
                            isChemicalMain: !0
                        });
                        const A = i => {
                            t.a.emit(t.E.SHOW_EQ_LIST, i)
                        };
                        this.listenerFuncAry.push({
                            type: NBEvent.communicate.angular.SHOW_EQ_LIST,
                            func: A,
                            isChemicalMain: !0
                        });
                        const w = i => {
                            this.showBoom(i)
                        };
                        this.listenerFuncAry.push({
                            type: NBEvent.communicate.angular.HAPPEN_BOOM,
                            func: w,
                            isChemicalMain: !0
                        }), this.listenerFuncAry.forEach(i => {
                            i.isChemicalMain ? this.chemicalMain.on(i.type, i.func) : t.a.on(i.type, i.func)
                        })
                    }
                    removeListener() {
                        this.listenerFuncAry.forEach(e => {
                            e.isChemicalMain ? this.chemicalMain.off(e.type, e.func) : t.a.off(e.type, e.func)
                        })
                    }
                    showBoom(e) {
                        if (this.isBooming) return;
                        this.isBooming = !0, this.creaMaskStyle.display = "block";
                        let h = e.x,
                            d = e.y,
                            p = e.width,
                            o = (1.5 + Math.random() * .5) * this.chemicalMain.viewStack.scale.x * p / 500;
                        o < .25 && (o = .25), o > 3 && (o = 3);
                        let y = (Math.random() - .5) * 180,
                            T = `scale(${o}) rotate(${y}deg)`,
                            f = .3,
                            u = {
                                p: 150,
                                rotate: o * 2,
                                scale: o
                            },
                            S = TweenMax.to(u, f, {
                                p: 1e3,
                                onStart: () => {},
                                onUpdate: () => {
                                    this.creaMaskStyle.padding = u.p + "px", this.creaMaskStyle.left = h - u.p + "px", this.creaMaskStyle.top = d - u.p + "px";
                                    let w = S.progress();
                                    this.cavDivStyle.opacity = 1 - w * .1, this.freshCount++
                                },
                                onComplete: () => {
                                    this.isBooming = !1, this.freshCount--
                                }
                            }),
                            A = -u.rotate;
                        TweenMax.to(u, f / 6, {
                            rotate: A,
                            ease: Power0.easeNone,
                            repeat: 4,
                            yoyo: !0,
                            onStart: () => {},
                            onUpdate: () => {
                                T = `rotate(${u.rotate}deg)`, this.cavDivStyle.transform = T
                            },
                            onComplete: () => {
                                this.cavDivStyle.transform = ""
                            }
                        }), $(window).off(".boom_reset").on("mousedown.boom_reset", this.resetBoom.bind(this)).on("touchstart.boom_reset", this.resetBoom.bind(this))
                    }
                    resetBoom() {
                        this.isBooming === !1 && ($(window).off(".boom_reset"), this.isBooming = !1, this.creaMaskStyle.display = "none", this.cavDivStyle.opacity = 1, this.freshCount--, this.boomEnd && this.boomEnd())
                    }
                    disconnectedCallback() {
                        this.hadDestroy || (this.hadDestroy = !0, this.removeListener(), this.chemicalMain && (this.chemicalMain.execute(NBCommand.document.CREATE_NEW_DOCUMENT, {}), window.chemicalMain.renderer && window.chemicalMain.render(), this.chemicalMain.execute(NBCommand.SET_STAGE_RENDER_ENABLED, !1), this.chemicalMain = null))
                    }
                    showLab(e) {
                        e.eqName || e.id ? this.chemicalMain.execute(NBCommand.SHOW_EXPERIMENT_BY_ID, {
                            id: e.eqName || e.id
                        }) : e !== "" ? this.chemicalMain.execute(NBCommand.RESTORE_DATA, e) : (console.error("unexpected"), t.a.emit(t.E.LOADED_RESTORE_DATA)), this.strLatestContent = e
                    }
                    setDataToModule(e) {
                        if (e = e || "", e && (e.moduleData || e.includes && e.includes("moduleData"))) return;
                        let h;
                        if (typeof e == "string") try {
                            e = JSON.parse(e)
                        } catch (d) {
                            console.log("\u4F20\u8FDB\u6765\u7684\u5B57\u7B26\u4E32\u65E0\u6CD5\u89E3\u6790");
                            return
                        }
                        h = !!e.id, h && (e = e), this.chemicalMain.creationComplete ? this.showLab(e) : this.chemicalMain.on("loaded", () => {
                            this.showLab(e)
                        })
                    }
                    getCurData() {
                        return M(this, null, function*() {
                            return new Promise(e => {
                                this.chemicalMain.creationComplete ? e(this.chemicalMain.execute(NBCommand.GET_DATA)) : this.chemicalMain.on("loaded", () => {
                                    e(this.chemicalMain.execute(NBCommand.GET_DATA))
                                })
                            })
                        })
                    }
                    render() {
                        return (0, c.h)("div", null, (0, c.h)("div", {
                            id: "chem-canvas-div",
                            style: this.cavDivStyle
                        }), (0, c.h)("div", {
                            id: "crackMask",
                            style: {
                                display: this.creaMaskStyle.display,
                                transform: this.creaMaskStyle.transform,
                                padding: this.creaMaskStyle.padding,
                                left: this.creaMaskStyle.left,
                                top: this.creaMaskStyle.top
                            }
                        }, (0, c.h)("div", {
                            id: "crack"
                        })))
                    }
                    get element() {
                        return (0, c.g)(this)
                    }
                };
                s.style = a
            }
        }
    ]);
})()