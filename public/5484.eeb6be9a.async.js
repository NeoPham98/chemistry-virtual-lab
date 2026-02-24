(function() {
    var k = (v, m, c) => new Promise((e, f) => {
        var h = b => {
                try {
                    y(c.next(b))
                } catch (g) {
                    f(g)
                }
            },
            u = b => {
                try {
                    y(c.throw(b))
                } catch (g) {
                    f(g)
                }
            },
            y = b => b.done ? e(b.value) : Promise.resolve(b.value).then(h, u);
        y((c = c.apply(v, m)).next())
    });
    (self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
        [5484], {
            38769: function(v, m, c) {
                "use strict";
                c.d(m, {
                    D: function() {
                        return e
                    }
                });
                class e {
                    static domQuerySelector(h, u) {
                        return h.shadowRoot ? h.shadowRoot.querySelector(u) : h.querySelector(u)
                    }
                    static querySelectorAll(h, u) {
                        return h.shadowRoot ? h.shadowRoot.querySelectorAll(u) : h.querySelectorAll(u)
                    }
                    static pointIndom(h, u) {
                        let y = !1;
                        for (let b = 0; b < u.length; b++) {
                            const g = u[b];
                            if (!!g && h.x > g.left && h.x < g.right && h.y > g.top && h.y < g.bottom) {
                                y = !0;
                                break
                            }
                        }
                        return y
                    }
                }
            },
            35484: function(v, m, c) {
                "use strict";
                c.r(m), c.d(m, {
                    hybrid_grid: function() {
                        return y
                    },
                    hybrid_teach: function() {
                        return g
                    },
                    hybrid_test: function() {
                        return w
                    },
                    hybrid_vsepr: function() {
                        return A
                    },
                    nb_chem_input: function() {
                        return C
                    }
                });
                var e = c(33659),
                    f = c(47145),
                    h = c(38769);
                const u = 'ul{margin:0;padding:0;list-style:none}.hybrid-grid{height:210px;width:184px;box-sizing:border-box;font-family:"MiSans";font-weight:600;font-size:80px;display:flex;align-items:center;justify-content:center;position:relative}.hybrid-grid.hybrid-font-60{font-size:60px}.hybrid-grid-title{position:absolute;font-family:"PingFang SC";font-weight:500;font-size:20px;line-height:28px;left:50%;top:-40px;transform:translateX(-50%);white-space:nowrap}.hybrid-grid.hybrid-blue{background:rgba(58, 171, 255, 0.2);border:1px dashed #3AABFF;border-radius:4px;color:rgba(58, 171, 255, 0.6)}.hybrid-grid.hybrid-blue li{background:rgba(255, 255, 255, 0.12) !important}.hybrid-grid.hybrid-blue li:hover,.hybrid-grid.hybrid-blue li.active{background:rgba(58, 171, 255, 0.8) !important}.hybrid-grid.hybrid-test-grid.hybrid-grid-changed-default,.hybrid-grid.hybrid-test-grid.hybrid-grid-error,.hybrid-grid.hybrid-test-grid.hybrid-grid-changed{font-size:60px}.hybrid-grid.hybrid-test-type.hybrid-grid-changed-default,.hybrid-grid.hybrid-test-type.hybrid-grid-error,.hybrid-grid.hybrid-test-type.hybrid-grid-changed{font-size:40px}.hybrid-grid.hybrid-test-type-small.hybrid-grid-changed-default,.hybrid-grid.hybrid-test-type-small.hybrid-grid-error,.hybrid-grid.hybrid-test-type-small.hybrid-grid-changed{font-size:34px;text-align:center}.hybrid-grid.hybrid-test-type .hybrid-list li{font-size:14px;text-align:center}.hybrid-grid.hybrid-yellow{background:rgba(255, 186, 84, 0.1);border:1px dashed #FFBA54;color:rgba(255, 186, 84, 0.6)}.hybrid-grid.hybrid-yellow .hybrid-grid-default{cursor:default}.hybrid-grid.hybrid-green{background:rgba(28, 255, 173, 0.1);border:1px dashed #1CFFAD;color:rgba(28, 255, 173, 0.6)}.hybrid-grid.hybrid-grid-error{background:rgba(235, 87, 87, 0.1);border:1px dashed #EB5757;color:#EB5757}.hybrid-grid.hybrid-grid-changed{border-style:solid}.hybrid-grid.hybrid-grid-changed-default .hybrid-grid-default{color:#fff}.hybrid-grid .hybrid-list{position:absolute;width:100%;display:flex;flex-wrap:wrap;top:0;left:0;font-family:"PingFang SC";font-weight:500;font-size:22px;color:#FFFFFF;opacity:0;z-index:-1;transition:opacity 0.3s ease-in-out}.hybrid-grid .hybrid-list.hybrid-list-show{opacity:1;z-index:10}.hybrid-grid .hybrid-list li{cursor:pointer;border-radius:4px;margin:12px 0 0 12px;width:74px;display:flex;justify-content:center;align-items:center}.hybrid-grid .hybrid-blue-center li{height:38px;background:rgba(255, 255, 255, 0.12)}.hybrid-grid .hybrid-blue-terminal{padding-top:4px}.hybrid-grid .hybrid-blue-terminal li{margin:8px 0 0 12px;height:30px}.hybrid-grid .hybrid-blue-charge{padding-top:4px}.hybrid-grid .hybrid-blue-charge li{margin:8px 0 0 12px;height:56px}.hybrid-grid .hybrid-green-type li,.hybrid-grid .hybrid-blur-six li{margin:10px 0 0 12px;height:56px;background:rgba(255, 255, 255, 0.12)}.hybrid-grid .hybrid-green-type li:hover,.hybrid-grid .hybrid-green-type li.active,.hybrid-grid .hybrid-blur-six li:hover,.hybrid-grid .hybrid-blur-six li.active{background:rgba(28, 255, 173, 0.8)}.hybrid-grid .hybrid-blur-six li{font-size:16px}.hybrid-grid .hybrid-blue-four li{height:88px;margin:11px 0 0 12px;font-family:"PingFang SC";font-weight:600}.hybrid-grid .hybrid-grid-default{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.hybrid-grid .hybrid-grid-default.pointer{cursor:pointer}.hybrid-grid .hybrid-grid-default.hybrid-grid-default-none{display:none}';
                let y = class {
                    constructor(t) {
                        (0, e.r)(this, t), this.gridData = {
                            customClass: "",
                            listClass: "",
                            size: 0,
                            min: 0,
                            currentNumber: void 0,
                            title: "",
                            key: "",
                            visible: !1,
                            isError: !1,
                            correct: !1
                        }, this.currentAtom = null, this.changed = (i, r, o) => {
                            console.log(i)
                        }, this.listClass = this.gridData.listClass, this.size = this.gridData.size, this.min = this.gridData.min || 0, this.list = this.gridData.list || []
                    }
                    gridDataHandle(t) {
                        this.list = t.list || []
                    }
                    listChange(t, i, r) {
                        this.gridData.disable || (this.gridData.correct === void 0 ? (this.gridData.currentNumber === void 0 || this.gridData.isError) && this.gridData.size !== void 0 && this.changed(t, i, r) : this.gridData.correct || this.changed(t, i, r))
                    }
                    getGridClassName() {
                        let t = `hybrid-grid ${this.gridData.customClass}`;
                        return this.gridData.isError ? t += " hybrid-grid-error" : this.gridData.currentNumber !== void 0 && (this.gridData.correct === void 0 ? this.testModel === void 0 && (t += " hybrid-grid-changed") : this.gridData.correct ? t += " hybrid-grid-changed" : t += " hybrid-grid-changed-default"), t
                    }
                    render() {
                        return (0, e.h)("div", {
                            class: this.getGridClassName()
                        }, (0, e.h)("div", {
                            class: "hybrid-grid-title"
                        }, this.gridData.title), this.size === void 0 ? (0, e.h)("div", null) : (0, e.h)("div", null, this.size && this.size > 0 ? (0, e.h)("ul", {
                            class: `hybrid-list ${this.listClass} ${this.gridData.visible?"hybrid-list-show":""}`
                        }, Array.from(Array(this.size), (t, i) => {
                            const r = this.list.length > 0 ? this.list[i + this.min] : i + this.min;
                            return (0, e.h)("li", {
                                onClick: () => {
                                    this.changed("currentNumber", r, this.gridData)
                                }
                            }, r)
                        })) : (0, e.h)("div", null)), (0, e.h)("div", {
                            class: `hybrid-grid-default ${this.currentAtom?"pointer":""} ${this.gridData.visible?"hybrid-grid-default-none":""}`,
                            onClick: () => {
                                this.listChange("visible", !0, this.gridData)
                            }
                        }, this.gridData.currentNumber === void 0 ? "?" : this.gridData.currentNumber))
                    }
                    static get watchers() {
                        return {
                            gridData: ["gridDataHandle"]
                        }
                    }
                };
                y.style = u;
                const b = 'ul{margin:0;padding:0;list-style:none}.add-icon{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -295px;width:32px;height:32px}.atom-bag{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -424px;width:56px;height:56px}.atom-icon{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -32px;width:18px;height:15px}.atom-pedestal{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -196px;width:77px;height:24px}.cloud-bag{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -369px;width:57px;height:50px}.cloud-icon-hov{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -74px;width:18px;height:17px}.cloud-icon{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -52px;width:18px;height:17px}.electron-icon{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -225px;width:28px;height:28px}.icon_daan_shouqi{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -16px;width:17px;height:11px}.icon_daan_zhankai{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px 0px;width:17px;height:11px}.tanchuang_kunao{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -562px;width:86px;height:72px}.tanchuang_right_big{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -258px;width:32px;height:32px}.tanchuang_right_small{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -170px;width:21px;height:21px}.tanchuang_top1{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -1159px;width:307px;height:255px}.tanchuang_top2{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -639px;width:307px;height:255px}.tanchuang_top3{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -899px;width:307px;height:255px}.tanchuang_wrong_big{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -332px;width:32px;height:32px}.tanchuang_wrong_small{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -144px;width:21px;height:21px}.tanchuang_xiaolian{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -485px;width:86px;height:72px}.teach-role,.hybrid-right-teach .hybrid-teach-bottom .hybrid-teach-role{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -96px;width:25px;height:18px}.test-checked{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -119px;width:17px;height:20px}.hybrid-right-teach{display:flex;align-items:center;font-family:"PingFang SC";font-weight:500;font-size:24px;line-height:34px;color:#FFFFFF}.hybrid-right-teach .hybrid-teach-line{margin-left:38px;height:1px;background:#fff;width:646px;position:relative}.hybrid-right-teach .hybrid-teach-top{width:648px;display:flex;align-items:center;font-weight:600;font-size:38px;color:#FFFFFF;position:absolute;left:50%;bottom:20px;transform:translateX(-50%)}.hybrid-right-teach .hybrid-teach-top .mar-lr12{margin:0 12px}.hybrid-right-teach .hybrid-teach-bottom{position:absolute;top:11px;left:50%;width:100%;transform:translateX(-50%)}.hybrid-right-teach .hybrid-teach-bottom .hybrid-teach-number{font-family:"PingFang SC";font-weight:600;font-size:32px;line-height:44px;text-align:center;color:#FFFFFF}.hybrid-right-teach .hybrid-teach-bottom .hybrid-teach-content{padding-top:64px;display:flex;align-items:center;position:relative}.hybrid-right-teach .hybrid-teach-bottom .hybrid-teach-role{margin:0 12px}.hybrid-right-teach .hybrid-teach-bottom .hybrid-teach-equal{position:absolute;top:50%;transform:translateY(-50%);left:-52px}';
                let g = class {
                    constructor(t) {
                        (0, e.r)(this, t), this.change = (i, r) => {
                            console.log(i, r)
                        }, this.defaultData = {
                            electronCenter: {
                                customClass: "hybrid-blue",
                                listClass: "hybrid-blue-center",
                                size: 8,
                                min: 1,
                                currentNumber: void 0,
                                title: "\u4E2D\u5FC3\u539F\u5B50\u7684\u4EF7\u7535\u5B50\u6570",
                                key: "electronCenter",
                                visible: !1,
                                isError: !1
                            },
                            electronTerminal: {
                                customClass: "hybrid-blue",
                                listClass: "hybrid-blue-terminal",
                                size: 10,
                                min: -2,
                                currentNumber: void 0,
                                title: "\u7AEF\u57FA\u539F\u5B50\u63D0\u4F9B\u7684\u7535\u5B50\u6570",
                                key: "electronTerminal",
                                visible: !1,
                                isError: !1
                            },
                            charge: {
                                customClass: "hybrid-blue",
                                listClass: "hybrid-blue-charge",
                                size: 6,
                                min: -3,
                                currentNumber: void 0,
                                title: "\u5FAE\u7C92\u6240\u5E26\u7535\u8377\u6570",
                                key: "charge",
                                visible: !1,
                                isError: !1
                            },
                            calculate: {
                                customClass: "hybrid-yellow",
                                currentNumber: void 0,
                                key: "calculate",
                                visible: !1,
                                isError: !1
                            },
                            hybridType: {
                                customClass: "hybrid-green",
                                listClass: "hybrid-green-type",
                                size: 6,
                                min: 0,
                                currentNumber: void 0,
                                list: ["sp", "sp\xB2", "sp\xB3", "sp\xB3d", "sp\xB3d\xB2", "sp\xB3d\xB3"],
                                title: "\u6742\u5316\u7C7B\u578B",
                                key: "hybridType",
                                visible: !1,
                                isError: !1,
                                disable: !0
                            }
                        }, this.teachTopData = Object.assign({}, this.defaultData)
                    }
                    currentAtomHandle(t, i) {
                        t && (this.correct = {
                            electronCenter: t.info.centerAtom.eleNum,
                            electronTerminal: t.info.endGroupAtom.eleNum * t.info.endGroupAtom.count,
                            charge: t.info.valence,
                            hybridType: t.info.hybridization
                        }, !i && t ? this.teachTopData = Object.assign(Object.assign({}, this.defaultData), {
                            electronCenter: Object.assign(Object.assign({}, this.defaultData.electronCenter), {
                                visible: !0
                            })
                        }) : i && t.en !== i.en && (this.teachTopData = Object.assign({}, this.defaultData)))
                    }
                    changeData(t, i, r) {
                        const {
                            currentAtom: o
                        } = this;
                        if (o) {
                            const {
                                key: s
                            } = r, d = {}, a = Object.assign({}, this.teachTopData);
                            let {
                                isError: p
                            } = a[s];
                            if (t === "currentNumber") {
                                const {
                                    info: l
                                } = o, {
                                    centerAtom: _,
                                    endGroupAtom: x
                                } = l, {
                                    formula: F,
                                    eleNum: I
                                } = _, {
                                    eleNum: D,
                                    count: z,
                                    formula: M
                                } = x;
                                if (p = this.correct[s] !== i, d.isError = p, p) {
                                    const j = {
                                            2: "1\u6761s+2\u6761p=sp\u6742\u5316",
                                            3: "1\u6761s+2\u6761p=sp\xB2\u6742\u5316",
                                            4: "1\u6761s+3\u6761p=sp\xB3\u6742\u5316",
                                            5: "1\u6761s+3\u6761p+1\u6761d=sp\xB3d\u6742\u5316",
                                            6: "1\u6761s+3\u6761p+2\u6761d=sp\xB3d\xB2\u6742\u5316",
                                            7: "1\u6761s+3\u6761p+3\u6761d=sp\xB3d\xB3\u6742\u5316"
                                        },
                                        O = {
                                            electronCenter: (0, e.h)("div", {
                                                class: "teach-center-x"
                                            }, F, "\u7684\u4EF7\u7535\u5B50\u6570\u4E3A", I, "\uFF0C\u8BF7\u4FEE\u6539"),
                                            electronTerminal: (0, e.h)("div", {
                                                class: "teach-center-x"
                                            }, M, "\u63D0\u4F9B\u7684\u7535\u5B50\u6570", D, " X ", z, " = ", D * z, "\uFF0C\u8BF7\u4FEE\u6539"),
                                            charge: (0, e.h)("div", {
                                                class: "teach-center-x"
                                            }, "\u7535\u8377\u6570\u9009\u62E9\u9519\u8BEF\uFF0C\u8BF7\u4FEE\u6539"),
                                            hybridType: (0, e.h)("div", {
                                                class: "teach-center-x"
                                            }, "\u6742\u5316\u8F68\u9053\u7C7B\u578B\u9009\u62E9\u9519\u8BEF\uFF0C", this.currentAtom.info.trackCount, "\u6761\u8F68\u9053\u662F", (0, e.h)("br", null), j[this.currentAtom.info.trackCount], "\uFF0C\u8BF7\u4FEE\u6539")
                                        };
                                    this.change("confirmInfo", {
                                        visible: !0,
                                        title: "\u63D0\u793A",
                                        showClose: !0,
                                        content: O[s],
                                        showFoot: !0,
                                        key: "errorNotice",
                                        cancelTxt: "",
                                        confirmTxt: "\u6211\u77E5\u9053\u4E86"
                                    })
                                } else s === "hybridType" && a.calculate.currentNumber !== void 0 && this.change("confirmInfo", {
                                    visible: !0,
                                    title: "\u63D0\u793A",
                                    showClose: !0,
                                    content: "\u6742\u5316\u7C7B\u578B\u5224\u65AD\u6B63\u786E\uFF01",
                                    showFoot: !0,
                                    key: "buildHybridSuccess",
                                    cancelTxt: "",
                                    confirmTxt: "\u6211\u77E5\u9053\u4E86"
                                })
                            }
                            if (t === "visible" && i && Object.keys(this.correct).forEach(l => {
                                    a[l].visible = !1
                                }), s === "hybridType" && (d.customClass = i.length > 3 ? "hybrid-green hybrid-font-60" : "hybrid-green"), a[s] = Object.assign(Object.assign(Object.assign({}, a[s]), {
                                    visible: !1,
                                    [t]: i
                                }), d), !p && Object.keys(this.correct).every(x => x === "hybridType" || a[x].currentNumber === this.correct[x] && !a[x].isError) && a.calculate.currentNumber === void 0) {
                                const x = parseInt((a.electronCenter.currentNumber || 0).toString(), 10) + parseInt((a.electronTerminal.currentNumber || 0).toString(), 10) - parseInt((a.charge.currentNumber || 0).toString(), 10);
                                (x / 2).toString().indexOf(".") > -1 && this.change("confirmInfo", {
                                    visible: !0,
                                    title: "\u63D0\u793A",
                                    showClose: !0,
                                    content: (0, e.h)("div", {
                                        class: "teach-center-x"
                                    }, this.currentAtom.en, "\u7684\u4EF7\u5C42\u7535\u5B50\u603B\u6570\u4E3A", x, "\uFF0C\u89C6\u4F5C", this.currentAtom.info.trackCount, "\u6761", (0, e.h)("br", null), "\u8F68\u9053\uFF0C\u5DF2\u81EA\u52A8\u66F4\u6B63"),
                                    showFoot: !0,
                                    key: "errorNotice",
                                    cancelTxt: "",
                                    confirmTxt: "\u6211\u77E5\u9053\u4E86"
                                }), a.calculate = Object.assign(Object.assign({}, a.calculate), {
                                    currentNumber: this.currentAtom.info.trackCount
                                }), a.hybridType = Object.assign(Object.assign({}, a.hybridType), {
                                    disable: !1
                                })
                            }
                            this.teachTopData = Object.assign({}, a)
                        }
                    }
                    resetData() {
                        return k(this, null, function*() {
                            this.teachTopData = Object.assign({}, this.defaultData)
                        })
                    }
                    render() {
                        return (0, e.h)("div", {
                            class: "hybrid-right-teach"
                        }, (0, e.h)("div", null, "\u6742\u5316\u8F68\u9053\u6570 ="), (0, e.h)("div", {
                            class: "hybrid-teach-line"
                        }, (0, e.h)("div", {
                            class: "hybrid-teach-top"
                        }, (0, e.h)("hybrid-grid", {
                            gridData: this.teachTopData.electronCenter,
                            currentAtom: this.currentAtom,
                            changed: this.changeData.bind(this)
                        }), (0, e.h)("div", {
                            class: "mar-lr12"
                        }, "+"), (0, e.h)("hybrid-grid", {
                            gridData: this.teachTopData.electronTerminal,
                            currentAtom: this.currentAtom,
                            changed: this.changeData.bind(this)
                        }), (0, e.h)("div", {
                            class: "mar-lr12"
                        }, "-"), (0, e.h)("hybrid-grid", {
                            gridData: this.teachTopData.charge,
                            currentAtom: this.currentAtom,
                            changed: this.changeData.bind(this)
                        })), (0, e.h)("div", {
                            class: "hybrid-teach-bottom"
                        }, (0, e.h)("div", {
                            class: "hybrid-teach-number"
                        }, "2"), (0, e.h)("div", {
                            class: "hybrid-teach-content"
                        }, (0, e.h)("hybrid-grid", {
                            gridData: this.teachTopData.calculate,
                            changed: this.changeData.bind(this)
                        }), (0, e.h)("div", {
                            class: "hybrid-teach-role"
                        }), (0, e.h)("hybrid-grid", {
                            gridData: this.teachTopData.hybridType,
                            changed: this.changeData.bind(this),
                            currentAtom: this.currentAtom
                        }), (0, e.h)("div", {
                            class: "hybrid-teach-equal"
                        }, "=")))))
                    }
                    static get watchers() {
                        return {
                            currentAtom: ["currentAtomHandle"]
                        }
                    }
                };
                g.style = b;
                const B = 'ul{margin:0;padding:0;list-style:none}.hybrid-test{color:#fff}.hybrid-test .hybrid-test-atom{display:flex;justify-content:center;padding-bottom:94px}.hybrid-test .hybrid-test-atom .hybrid-test-atomWrap{display:flex;justify-content:center;align-items:center;background:rgba(14, 15, 23, 0.4);border:1px solid #5F6493;border-radius:4px;width:200px;height:100px;font-family:"PingFang SC";font-weight:600;font-size:48px}.hybrid-test .hybrid-test-atom .hybrid-test-atomWrap .current{position:relative}.hybrid-test .hybrid-test-atom .hybrid-test-atomWrap .current:before{content:"";position:absolute;width:6px;height:6px;background:#3aabff;bottom:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);border-radius:50%}.hybrid-test .hybrid-test-ques{display:flex;justify-content:center}.hybrid-test .hybrid-test-ques .hybrid-test-mlr48{margin:0 48px}.hybrid-test .hybrid-test-btnWrap{display:flex;justify-content:center;padding-top:28px}.hybrid-test .hybrid-test-btnWrap .hybrid-test-btn,.hybrid-test .hybrid-test-btnWrap .hybrid-test-btn-last{width:184px;height:40px;background:rgba(58, 171, 255, 0.08);border:1px solid #3AABFF;border-radius:4px;font-family:"PingFang SC";font-size:16px;display:flex;align-items:center;justify-content:center;color:#FFFFFF;margin-right:24px}.hybrid-test .hybrid-test-btnWrap .hybrid-test-btn-last{background:rgba(58, 171, 255, 0.2);margin:0}.hybrid-test .hybrid-test-btnWrap .hybrid-test-btn-disable{opacity:0.2;cursor:default !important;background:rgba(58, 171, 255, 0.2) !important}.hybrid-test .hybrid-test-btnWrap .hybrid-test-btn-hover{background:#3AABFF}';
                let w = class {
                    constructor(t) {
                        (0, e.r)(this, t), this.currentQusIndex = 0, this.testModel = 0, this.answerHandle = (i, r) => {
                            console.log(i)
                        }, this.change = (i, r) => {
                            console.log(i, r)
                        }, this.allAnswer = {}, this.canSubmit = !1, this.sortStructures = ["\u76F4\u7EBF\u5F62", "\u6B63\u4E09\u89D2\u5F62", "V\u5F62", "\u6B63\u56DB\u9762\u4F53", "\u4E09\u89D2\u9525", "\u4E09\u89D2\u53CC\u9525", "\u53D8\u5F62\u56DB\u9762\u4F53(\u8DF7\u8DF7\u677F\u5F62)", "T\u5F62", "\u6B63\u516B\u9762\u4F53", "\u56DB\u65B9\u9525", "\u6B63\u65B9\u5F62", "\u4E94\u89D2\u53CC\u9525", "\u53D8\u5F62\u516B\u9762\u4F53"], this.longStructures = ["\u76F4\u7EBF\u5F62", "\u6B63\u4E09\u89D2\u5F62", "\u5E73\u9762\u4E09\u89D2\u5F62", "V\u5F62", "\u6B63\u56DB\u9762\u4F53", "\u56DB\u9762\u4F53", "\u4E09\u89D2\u9525", "\u4E09\u89D2\u53CC\u9525", "\u53D8\u5F62\u56DB\u9762\u4F53(\u8DF7\u8DF7\u677F\u5F62)", "T\u5F62", "\u6B63\u516B\u9762\u4F53", "\u56DB\u65B9\u9525", "\u56DB\u68F1\u9525", "\u6B63\u65B9\u5F62", "\u56DB\u8FB9\u5F62", "\u4E94\u89D2\u53CC\u9525", "\u53D8\u5F62\u516B\u9762\u4F53"], this.excludeStructures = [
                            ["\u6B63\u4E09\u89D2\u5F62", "\u6B63\u56DB\u9762\u4F53", "\u56DB\u65B9\u9525", "\u6B63\u65B9\u5F62"],
                            ["\u5E73\u9762\u4E09\u89D2\u5F62", "\u56DB\u9762\u4F53", "\u56DB\u68F1\u9525", "\u56DB\u8FB9\u5F62"]
                        ], this.currentAnswer = {}, this.defaultData = {
                            hybrid: {
                                visible: !1,
                                customClass: "hybrid-blue hybrid-test-grid",
                                listClass: "hybrid-green-type",
                                size: 6,
                                min: 0,
                                list: ["sp", "sp\xB2", "sp\xB3", "sp\xB3d", "sp\xB3d\xB2", "sp\xB3d\xB3"],
                                currentNumber: void 0,
                                title: "\u539F\u5B50\u6742\u5316\u8F68\u9053",
                                key: "hybrid",
                                isError: !1,
                                correct: !1
                            },
                            pairElectron: {
                                visible: !1,
                                customClass: "hybrid-blue",
                                listClass: "hybrid-blue-four",
                                size: 4,
                                min: 0,
                                currentNumber: void 0,
                                title: "\u5B64\u5BF9\u7535\u5B50\u6570",
                                key: "pairElectron",
                                isError: !1,
                                correct: !1
                            },
                            structure: {
                                visible: !1,
                                customClass: "hybrid-blue  hybrid-test-type",
                                listClass: "hybrid-blur-six",
                                size: 6,
                                min: 0,
                                list: ["\u6B63\u56DB\u9762\u4F53", "\u6B63\u4E09\u89D2\u5F62", "\u4E09\u89D2\u4E24\u9525", "V\u578B", "\u6B63\u65B9\u5F62", "\u76F4\u7EBF\u578B"],
                                currentNumber: void 0,
                                title: "\u5206\u5B50\u7A7A\u95F4\u7ED3\u6784",
                                key: "structure",
                                isError: !1,
                                correct: !1
                            }
                        }, this.testQuestionData = Object.assign({}, this.defaultData)
                    }
                    getStructuresChanges(t) {
                        const {
                            molecularStructure: i
                        } = t.info, o = (this.testModel === 2 ? this.longStructures : this.sortStructures).filter(d => {
                            const a = this.excludeStructures[0].indexOf(i),
                                p = a > -1 ? this.excludeStructures[1][a] : "";
                            return d !== i && p !== d
                        }), s = new Array(6).fill("empty");
                        return s[Math.floor(Math.random() * 6)] = i, s.forEach((d, a) => {
                            s[a] = d === "empty" ? o.splice(Math.floor(Math.random() * o.length), 1)[0] : d
                        }), s
                    }
                    resetData() {
                        return k(this, null, function*() {
                            this.testQuestionData = Object.assign({}, this.defaultData)
                        })
                    }
                    restSubmit() {
                        return k(this, null, function*() {
                            this.canSubmit = !1
                        })
                    }
                    changeData(t, i, r) {
                        const o = Object.assign({}, this.testQuestionData);
                        t === "visible" && i && Object.keys(this.correct).forEach(s => {
                            o[s].visible = !1
                        }), t === "currentNumber" && o[r.key].isError && (o[r.key].isError = !1), o[r.key] = Object.assign(Object.assign({}, o[r.key]), {
                            visible: !1,
                            [t]: i
                        }), r.key === "structure" && (o[r.key].customClass = i.length > 4 ? "hybrid-blue  hybrid-test-type hybrid-test-type-small" : "hybrid-blue  hybrid-test-type"), this.testQuestionData = Object.assign({}, o), this.canSubmit = Object.keys(this.correct).every(s => this.testQuestionData[s].currentNumber !== void 0)
                    }
                    setAnswer(t) {
                        const i = Object.keys(this.correct),
                            r = this.testQuestionData,
                            o = ["hybridization", "lonePairElectrons", "molecularStructure"];
                        let s = 0;
                        i.forEach((a, p) => {
                            const l = this.correct[a] === this.testQuestionData[a].currentNumber;
                            t && (r[a].correct = l, r[a].isError = !l), l && (s += 1), this.currentAnswer[this.currentQusIndex] = this.currentAnswer[this.currentQusIndex] || {}, this.currentAnswer[this.currentQusIndex][o[p]] = r[a].currentNumber
                        }), this.testQuestionData = Object.assign({}, r);
                        const d = s === i.length;
                        return this.currentAnswer[this.currentQusIndex].isCorrect = d, this.change("allAnswer", Object.assign({}, this.currentAnswer)), d
                    }
                    testSubmit() {
                        this.canSubmit && (this.setAnswer(!0) ? this.answerHandle("success") : this.answerHandle("fail"))
                    }
                    currentAtomHandle(t) {
                        var i, r;
                        if (t && t.info) {
                            const o = this.getStructuresChanges(t),
                                {
                                    allAnswer: s,
                                    currentQusIndex: d
                                } = this;
                            let a, p, l;
                            s[d] && (a = s[d].hybridization, p = s[d].lonePairElectrons, l = s[d].molecularStructure), console.log(t), this.testQuestionData = {
                                hybrid: Object.assign(Object.assign({}, this.testQuestionData.hybrid), {
                                    title: `${((r=(i=t.info)===null||i===void 0?void 0:i.centerAtom)===null||r===void 0?void 0:r.formula)||"\u4E2D\u5FC3"}\u539F\u5B50\u6742\u5316\u8F68\u9053`,
                                    currentNumber: a,
                                    isError: !1,
                                    correct: !1,
                                    visible: !1
                                }),
                                pairElectron: Object.assign(Object.assign({}, this.testQuestionData.pairElectron), {
                                    currentNumber: p,
                                    isError: !1,
                                    correct: !1,
                                    visible: !1
                                }),
                                structure: Object.assign(Object.assign({}, this.testQuestionData.structure), {
                                    list: [...o],
                                    currentNumber: l,
                                    isError: !1,
                                    visible: !1,
                                    correct: !1
                                })
                            }, this.correct = {
                                hybrid: this.currentAtom.info.hybridization,
                                pairElectron: this.currentAtom.info.lonePairElectrons,
                                structure: this.currentAtom.info.molecularStructure
                            }
                        } else this.currentAnswer = {}
                    }
                    nextQuestion() {
                        this.setAnswer(), this.resetData(), this.change("currentQusIndex", this.currentQusIndex += 1)
                    }
                    prevQuestion() {
                        this.change("currentQusIndex", this.currentQusIndex -= 1);
                        const t = this.allAnswer[this.currentQusIndex],
                            {
                                hybridization: i,
                                lonePairElectrons: r,
                                molecularStructure: o
                            } = t;
                        this.testQuestionData = {
                            hybrid: Object.assign(Object.assign({}, this.defaultData.hybrid), {
                                currentNumber: i
                            }),
                            pairElectron: Object.assign(Object.assign({}, this.defaultData.pairElectron), {
                                currentNumber: r
                            }),
                            structure: Object.assign(Object.assign({}, this.defaultData.structure), {
                                currentNumber: o
                            })
                        }
                    }
                    verifyTest(t) {
                        t && (this.setAnswer(), this.answerHandle("finish"))
                    }
                    render() {
                        var t, i;
                        return (0, e.h)("div", {
                            class: "hybrid-test"
                        }, this.currentAtom ? (0, e.h)("div", null, (0, e.h)("div", {
                            class: "hybrid-test-atom"
                        }, this.currentAtom && ((i = (t = this.currentAtom) === null || t === void 0 ? void 0 : t.info) === null || i === void 0 ? void 0 : i.centerAtom) ? (0, e.h)("div", {
                            class: "hybrid-test-atomWrap"
                        }, this.currentAtom.info.children.map(r => (0, e.h)("div", null, (0, e.h)("span", {
                            class: this.currentAtom && r.atom === this.currentAtom.info.centerAtom.formula ? "current" : ""
                        }, r.atomStr), (0, e.h)("span", null, r.countStr))), (0, e.h)("span", null, this.currentAtom.info.valenceStr)) : (0, e.h)("div", null)), (0, e.h)("div", {
                            class: "hybrid-test-ques"
                        }, (0, e.h)("hybrid-grid", {
                            gridData: this.testQuestionData.hybrid,
                            changed: this.changeData.bind(this)
                        }), (0, e.h)("div", {
                            class: "hybrid-test-mlr48"
                        }, (0, e.h)("hybrid-grid", {
                            gridData: this.testQuestionData.pairElectron,
                            changed: this.changeData.bind(this)
                        })), (0, e.h)("hybrid-grid", {
                            gridData: this.testQuestionData.structure,
                            changed: this.changeData.bind(this)
                        })), (0, e.h)("div", {
                            class: "hybrid-test-btnWrap"
                        }, this.testModel === 0 ? (0, e.h)("hover-btn", {
                            default: `${this.canSubmit?"hybrid-test-btn-last":"hybrid-test-btn-last hybrid-test-btn-disable"}`,
                            hover: "hybrid-test-btn-hover",
                            onClick: this.testSubmit.bind(this)
                        }, "\u63D0\u4EA4\u9A8C\u8BC1") : (0, e.h)("div", null, this.testModel === 1 ? (0, e.h)("div", {
                            class: "hybrid-test-btnWrap"
                        }, this.currentQusIndex > 0 ? (0, e.h)("hover-btn", {
                            default: "hybrid-test-btn",
                            hover: "hybrid-test-btn-hover",
                            onClick: this.prevQuestion.bind(this)
                        }, "\u4E0A\u4E00\u9898") : null, this.currentQusIndex < 5 ? (0, e.h)("hover-btn", {
                            default: "hybrid-test-btn-last",
                            hover: "hybrid-test-btn-hover",
                            onClick: this.nextQuestion.bind(this)
                        }, "\u4E0B\u4E00\u9898") : null, this.currentQusIndex >= 5 ? (0, e.h)("hover-btn", {
                            default: "hybrid-test-btn-last",
                            hover: "hybrid-test-btn-hover",
                            onClick: this.verifyTest.bind(this, !0)
                        }, "\u63D0\u4EA4\u9A8C\u8BC1") : null) : (0, e.h)("hover-btn", {
                            default: `${this.canSubmit?"hybrid-test-btn-last":"hybrid-test-btn-last hybrid-test-btn-disable"}`,
                            hover: "hybrid-test-btn-hover",
                            onClick: this.verifyTest.bind(this, this.canSubmit)
                        }, "\u63D0\u4EA4\u9A8C\u8BC1")))) : (0, e.h)("div", null))
                    }
                    static get watchers() {
                        return {
                            currentAtom: ["currentAtomHandle"]
                        }
                    }
                };
                w.style = B;
                const N = 'ul{margin:0;padding:0;list-style:none}.add-icon{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -295px;width:32px;height:32px}.atom-bag,.hybrid-vsepr-top .hybrid-atom-abs{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -424px;width:56px;height:56px}.atom-icon{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -32px;width:18px;height:15px}.atom-pedestal,.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -196px;width:77px;height:24px}.cloud-bag,.hybrid-vsepr-top .hybrid-structure .hybrid-cloud .hybrid-cloud-abs:before{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -369px;width:57px;height:50px}.cloud-icon-hov,.hybrid-vsepr-top .hybrid-structure .hybrid-cloud.hybrid-cloud-hover{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -74px;width:18px;height:17px}.cloud-icon,.hybrid-vsepr-top .hybrid-structure .hybrid-cloud{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -52px;width:18px;height:17px}.electron-icon,.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-icon,.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-icon1,.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-icon2{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -225px;width:28px;height:28px}.icon_daan_shouqi{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -16px;width:17px;height:11px}.icon_daan_zhankai{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px 0px;width:17px;height:11px}.tanchuang_kunao{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -562px;width:86px;height:72px}.tanchuang_right_big{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -258px;width:32px;height:32px}.tanchuang_right_small{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -170px;width:21px;height:21px}.tanchuang_top1{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -1159px;width:307px;height:255px}.tanchuang_top2{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -639px;width:307px;height:255px}.tanchuang_top3{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -899px;width:307px;height:255px}.tanchuang_wrong_big{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -332px;width:32px;height:32px}.tanchuang_wrong_small{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -144px;width:21px;height:21px}.tanchuang_xiaolian{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -485px;width:86px;height:72px}.teach-role{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -96px;width:25px;height:18px}.test-checked{background-image:url(assets/principle/princ_hybrid-orbital_sprite.png);background-repeat:no-repeat;background-size:307px 1414px;background-position:0px -119px;width:17px;height:20px}.hybrid-vsepr-top{width:560px;background:linear-gradient(179.14deg, #242736 0.74%, rgba(36, 39, 54, 0.15) 99.27%);border-radius:4px;font-family:"PingFang SC";font-size:16px;line-height:28px;color:#F2F2F2;position:relative;padding-bottom:22px}.hybrid-vsepr-top .hybrid-atom-abs{position:absolute;display:flex;align-items:center;justify-content:center;font-family:"Helvetica";font-weight:700;font-size:32px;color:#F2F2F2;right:8px;top:8px}.hybrid-vsepr-top .hybrid-title{text-align:center;padding:8px 0 12px}.hybrid-vsepr-top .hybrid-canvas{width:100%;height:100%}.hybrid-vsepr-top .hybrid-canvas canvas{width:100%;height:100%;background-color:none;outline:0}.hybrid-vsepr-top .hybrid-structure{position:relative;font-size:14px;line-height:28px;height:28px;text-align:center;color:#3AABFF;padding:6px 0 8px;margin:0 32px;border-bottom:1px solid rgba(255, 255, 255, 0.1)}.hybrid-vsepr-top .hybrid-structure .hybrid-cloud{position:absolute;right:0;top:11px}.hybrid-vsepr-top .hybrid-structure .hybrid-cloud .hybrid-cloud-abs{position:absolute;width:120px;left:76px;top:-36px;height:44px;background:linear-gradient(90deg, rgba(58, 171, 255, 0.2) 0.94%, rgba(58, 171, 255, 0) 100%);padding-left:12px;border-left:2px #3AABFF solid;line-height:44px;font-weight:500;color:#fff;text-align:left}.hybrid-vsepr-top .hybrid-structure .hybrid-cloud .hybrid-cloud-abs:before{content:"";position:absolute;left:-58px;top:0}.hybrid-vsepr-top .hybrid-atom-wrap{display:flex;justify-content:center;align-items:flex-end}.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con{display:flex;align-items:flex-end}.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li{position:relative}.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-icon,.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-icon1,.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-icon2{position:absolute;left:50%;transform:translateX(-50%);bottom:24px}.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-icon1{left:14px;transform:translateX(0)}.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-icon2{left:34px;transform:translateX(0)}.hybrid-vsepr-top .hybrid-atom-wrap .hybrid-atom-con li .hybrid-atom-name{position:absolute;top:15px;left:50%;transform:translateX(-50%);font-family:"Helvetica";font-weight:700;font-size:16px;line-height:18px;color:#BDBDBD}.hybrid-vsepr-top .hybrid-vsepr-btn{width:172px;height:52px;background:rgba(58, 171, 255, 0.08);border:1px solid #3AABFF;border-radius:4px;font-weight:500;font-family:"PingFang SC";font-size:16px;display:flex;align-items:center;justify-content:center;color:#3AABFF;margin-right:24px;margin-left:6px;cursor:default}.hybrid-vsepr-top .hybrid-vsepr-btn.pointer{cursor:pointer}.hybrid-vsepr-top .hybrid-vsepr-btn-hover{background:#3AABFF;color:#fff}.hybrid-vsepr-top .hybrid-vsepr-btn-viable{cursor:default !important;border-color:rgba(255, 255, 255, 0.1);color:#3E414D;background:none}.hybrid-vsper-bottom{display:flex;align-items:center;font-family:"PingFang SC";justify-content:center;font-weight:600;font-size:28px;color:#FFFFFF;padding-top:54px}.hybrid-vsper-bottom .mlr-18{margin:0 18px}.hybrid-vsper-bottom .hybrid-box-mar{margin:0 80px 0 68px}.hybrid-vsper-bottom .hybrid-box{background:rgba(187, 107, 217, 0.1);border:1px solid #BB6BD9;border-radius:4px;width:80px;height:80px;display:flex;align-items:center;justify-content:center;font-family:"MiSans";font-weight:600;font-size:48px;position:relative;color:#BB6BD9}.hybrid-vsper-bottom .hybrid-box div:nth-child(1){font-family:"PingFang SC";font-weight:500;font-size:16px;position:absolute;left:50%;transform:translateX(-50%);top:-34px;width:100%;text-align:center}.hybrid-vsper-bottom .hybrid-vsper-orbital{background:rgba(28, 255, 173, 0.1);border-color:#1CFFAD;color:rgba(28, 255, 173, 0.6)}.hybrid-vsper-bottom .hybrid-vsper-key{background:rgba(58, 171, 255, 0.1);border-color:#3AABFF;color:#3AABFF}';
                let A = class {
                    constructor(t) {
                        (0, e.r)(this, t), this.mode = 0, this.bondingNumber = 0, this.endGroups = [], this.addedGroups = [], this.endAdd = !1, this.showCloud = !0, this.molecularMain = null, this.curModel = 0, this.changeEleNums = 0, this.change = (i, r) => {
                            console.log(i, r)
                        }, this.model = [{
                            id: 0,
                            mode: "sp"
                        }, {
                            id: 1,
                            mode: "sp\xB2"
                        }, {
                            id: 2,
                            mode: "sp\xB3"
                        }, {
                            id: 3,
                            mode: "sp\xB3d"
                        }, {
                            id: 4,
                            mode: "sp\xB3d\xB2"
                        }, {
                            id: 5,
                            mode: "sp\xB3d\xB3"
                        }]
                    }
                    getTrackArr(t) {
                        const i = [];
                        for (let r = 1; r <= t; r++) r <= 4 ? i[r - 1] = [1] : i[r - 4 - 1].push(1);
                        return i
                    }
                    currentAtomHandle(t, i) {
                        if (t) {
                            this.bondingNumber = 0, this.addedGroups = [];
                            const {
                                endGroupAtom: r
                            } = t.info, {
                                count: o
                            } = r, s = this.getTrackArr(o);
                            this.endGroups = [...s], i && t.en !== i.en && (this.endAdd = !1), this.initScene()
                        }
                    }
                    addBondingNumber() {
                        if (this.currentAtom && this.currentAtom.info.endGroupAtom.count > this.bondingNumber) {
                            this.bondingNumber += 1, this.molecularMain && this.changeEleNums >= this.bondingNumber && this.molecularMain.changeModel(this.currentAtom.info.trackCount - this.bondingNumber);
                            let t = [];
                            if (this.currentAtom.info.trackCount <= 4) t = new Array(this.bondingNumber).fill([1]);
                            else {
                                let i = 0;
                                this.endGroups.some((r, o) => r.some((s, d) => (i <= this.bondingNumber && (i += 1, t[o] = t[o] || [], t[o][d] = 1), i === this.bondingNumber)))
                            }
                            this.addedGroups = [...t], this.bondingNumber === this.currentAtom.info.endGroupAtom.count && (this.endAdd = !0, this.change("confirmInfo", {
                                key: "buildEnd",
                                visible: !0,
                                title: "\u63D0\u793A",
                                showClose: !0,
                                content: "\u5FAE\u7C92\u6784\u5EFA\u5B8C\u6210",
                                showFoot: !0,
                                cancelTxt: "",
                                confirmTxt: "\u6211\u77E5\u9053\u4E86"
                            }))
                        }
                    }
                    cloudClick() {
                        this.showCloud = !1, this.change("confirmInfo", {
                            key: "gotoCloud",
                            visible: !0,
                            title: "\u63D0\u793A",
                            showClose: !0,
                            content: "\u5373\u5C06\u8DF3\u8F6C\u5230\u5206\u5B50\u7684\u7ED3\u6784\u6A21\u578B\uFF0C\u73B0\u6709\u754C\u9762\u4F1A\u5173\u95ED\uFF01",
                            showFoot: !0,
                            confirmHandle: () => {
                                this.gotoCloud && this.gotoCloud(`organic__${this.currentAtom.info.formulaStr}`)
                            }
                        })
                    }
                    componentDidLoad() {
                        this.initScene()
                    }
                    judeCurModel() {
                        const t = this.currentAtom.info.hybridization;
                        for (let i = 0; i < this.model.length; i++) {
                            let r = this.model[i];
                            r.mode === t && (this.curModel = r.id)
                        }
                    }
                    setModelInfo() {
                        this.changeEleNums = this.currentAtom.info.endGroupAtom.count, this.judeCurModel(), this.molecularMain.changeMode(this.mode), this.molecularMain.changeDiffModel(this.curModel), this.molecularMain.changeModel(this.currentAtom.info.trackCount - this.bondingNumber)
                    }
                    initScene() {
                        return k(this, null, function*() {
                            if (this.currentAtom === void 0) return;
                            if (this.molecularMain) {
                                this.setModelInfo();
                                return
                            }
                            const t = (0, f.g)(this.el.shadowRoot, "#hybridCanvas");
                            t.style.touchAction = "none";
                            const i = yield Promise.all([c.e(6166), c.e(8807)]).then(c.bind(c, 16166)).then(function(s) {
                                return s.m
                            });
                            this.molecularMain = new i.MolecularMain({
                                canvas: t,
                                forbiddenResize: !0,
                                doresize: !1,
                                mouseleaveDisable: !0,
                                cameraRadius: 25
                            }), this.molecularMain.scene.clearColor.set(36 / 255, 39 / 255, 54 / 255, 1);
                            const r = "",
                                o = "OrganicSp";
                            this.molecularMain.setData({
                                type: o,
                                name: r
                            }), this.setModelInfo()
                        })
                    }
                    render() {
                        return (0, e.h)("div", {
                            class: "hybrid-vsepr"
                        }, (0, e.h)("div", {
                            class: "hybrid-vsepr-top"
                        }, (0, e.h)("div", {
                            class: "hybrid-title"
                        }, "\u4E2D\u5FC3\u539F\u5B50"), (0, e.h)("div", {
                            class: "hybrid-atom-abs"
                        }, this.currentAtom ? this.currentAtom.info.centerAtom.formula : ""), (0, e.h)("div", {
                            class: "hybrid-canvas"
                        }, (0, e.h)("canvas", {
                            id: "hybridCanvas"
                        })), (0, e.h)("div", {
                            class: "hybrid-structure"
                        }, (0, e.h)("div", null, this.currentAtom && this.currentAtom.info.endGroupAtom.count === this.bondingNumber ? `\u3010\u5206\u5B50\u7ED3\u6784\uFF1A${this.currentAtom.info.molecularStructure}\u3011` : ""), this.currentAtom && this.currentAtom.info.trackCount === this.bondingNumber && this.currentAtom.info.model ? (0, e.h)("hover-btn", {
                            default: "hybrid-cloud",
                            hover: "hybrid-cloud-hover",
                            onClick: this.cloudClick.bind(this)
                        }, (0, e.h)("div", {
                            class: "hybrid-cloud-abs",
                            style: {
                                display: this.showCloud ? "block" : "none"
                            }
                        }, "\u5206\u5B50\u7ED3\u6784\u6A21\u578B")) : (0, e.h)("div", null)), (0, e.h)("div", {
                            class: "hybrid-title"
                        }, "\u7AEF\u57FA\u539F\u5B50"), (0, e.h)("div", {
                            class: "hybrid-atom-wrap"
                        }, this.currentAtom ? (0, e.h)("ul", {
                            class: "hybrid-atom-con"
                        }, this.endGroups.map((t, i) => {
                            const r = this.addedGroups[i] ? this.addedGroups[i].length : 0,
                                s = t.length - r,
                                d = s === 0,
                                a = s === 1;
                            return (0, e.h)("li", null, d ? (0, e.h)("div", null) : a ? (0, e.h)("div", {
                                class: "hybrid-icon"
                            }) : (0, e.h)("div", null, t.map((p, l) => (0, e.h)("div", {
                                class: `hybrid-icon${l+1}`
                            }))), (0, e.h)("div", {
                                class: "hybrid-atom-name"
                            }, this.currentAtom ? this.currentAtom.info.endGroupAtom.formula : ""))
                        })) : (0, e.h)("div", null), (0, e.h)("hover-btn", {
                            default: `hybrid-vsepr-btn ${this.endAdd?"hybrid-vsepr-btn-viable":""} ${this.currentAtom?"pointer":""}`,
                            hover: this.currentAtom ? "hybrid-vsepr-btn-hover" : "",
                            onClick: this.addBondingNumber.bind(this)
                        }, "\u70B9\u51FB\u7AEF\u57FA\u539F\u5B50\u6210\u952E"))), (0, e.h)("div", {
                            class: "hybrid-vsper-bottom"
                        }, (0, e.h)("div", {
                            class: "hybrid-box "
                        }, (0, e.h)("div", null, "\u5B64\u5BF9\u7535\u5B50"), (0, e.h)("div", null, this.currentAtom ? this.currentAtom.info.trackCount - this.bondingNumber : 0)), (0, e.h)("div", {
                            class: "mlr-18"
                        }, "="), (0, e.h)("div", {
                            class: "hybrid-box hybrid-vsper-orbital"
                        }, (0, e.h)("div", null, "\u6742\u5316\u8F68\u9053\u6570"), (0, e.h)("div", null, this.currentAtom ? this.currentAtom.info.trackCount : 0)), (0, e.h)("div", {
                            class: "hybrid-box-mar"
                        }, "-"), (0, e.h)("div", {
                            class: "hybrid-box hybrid-vsper-key"
                        }, (0, e.h)("div", null, "\u6210\u952E\u6570"), (0, e.h)("div", null, this.bondingNumber))))
                    }
                    get el() {
                        return (0, e.g)(this)
                    }
                    static get watchers() {
                        return {
                            currentAtom: ["currentAtomHandle"]
                        }
                    }
                };
                A.style = N;
                const S = ".close_def,.chemInput .inputBox .clear{background-image:url(assets/imgs/nbk/nbk_nb-chem-input_sprite.png);background-size:34px 169px;background-repeat:no-repeat;background-position:0px 0px;width:14px;height:14px}.close_hov,.chemInput .inputBox .clear:hover{background-image:url(assets/imgs/nbk/nbk_nb-chem-input_sprite.png);background-size:34px 169px;background-repeat:no-repeat;background-position:0px -19px;width:14px;height:14px}.close_pre,.chemInput .inputBox .clear:active{background-image:url(assets/imgs/nbk/nbk_nb-chem-input_sprite.png);background-size:34px 169px;background-repeat:no-repeat;background-position:0px -38px;width:14px;height:14px}.keyboard_def,.chemInput .inputBox .keyboard.active:active,.chemInput .inputBox .keyboard{background-image:url(assets/imgs/nbk/nbk_nb-chem-input_sprite.png);background-size:34px 169px;background-repeat:no-repeat;background-position:0px -57px;width:34px;height:34px}.keyboard_hov,.chemInput .inputBox .keyboard.active:hover,.chemInput .inputBox .keyboard:hover{background-image:url(assets/imgs/nbk/nbk_nb-chem-input_sprite.png);background-size:34px 169px;background-repeat:no-repeat;background-position:0px -96px;width:34px;height:34px}.keyboard_pre,.chemInput .inputBox .keyboard.active,.chemInput .inputBox .keyboard:active{background-image:url(assets/imgs/nbk/nbk_nb-chem-input_sprite.png);background-size:34px 169px;background-repeat:no-repeat;background-position:0px -135px;width:34px;height:34px}.chemInput .inputBox{height:60px;background:#232628;border-radius:5px;border:1px solid #25282e;color:#CCCCCC;display:flex;margin-bottom:8px;align-items:center}.chemInput .inputBox input{width:100%;font-size:20px;padding:0 12px;line-height:60px;color:#CCCCCC;border:none;outline:none;background:transparent}.chemInput .inputBox .icon{padding:0 8px;cursor:pointer}",
                    E = "\u2080\u2081\u2082\u2083\u2084\u2085\u2086\u2087\u2088\u2089",
                    n = {
                        ELE: "ELE",
                        NUM: "NUM",
                        CHAR: "CHAR",
                        DEL: "DEL"
                    };
                let C = class {
                    constructor(t) {
                        (0, e.r)(this, t), this.chemInput = (0, e.c)(this, "chemInput", 7), this.changeShowKeyboardState = (0, e.c)(this, "changeShowKeyboardState", 7), this.selectionIndex = 0, this.isComposition = !1, this.isBlur = !1, this.cusFocus = !1, this.placeHolderStr = "\u8BF7\u8F93\u5165\u65B9\u7A0B\u5F0F", this.keyList = [{
                            value: "H",
                            type: n.ELE
                        }, {
                            value: "1",
                            type: n.NUM
                        }, {
                            value: "2",
                            type: n.NUM
                        }, {
                            value: "3",
                            type: n.NUM
                        }, {
                            value: "4",
                            type: n.NUM
                        }, {
                            value: "5",
                            type: n.NUM
                        }, {
                            value: "6",
                            type: n.NUM
                        }, {
                            value: "7",
                            type: n.NUM
                        }, {
                            value: "8",
                            type: n.NUM
                        }, {
                            value: "9",
                            type: n.NUM
                        }, {
                            value: "0",
                            type: n.NUM
                        }, {
                            value: "Li",
                            type: n.ELE
                        }, {
                            value: "Be",
                            type: n.ELE
                        }, {
                            value: "B",
                            type: n.ELE
                        }, {
                            value: "C",
                            type: n.ELE
                        }, {
                            value: "N",
                            type: n.ELE
                        }, {
                            value: "O",
                            type: n.ELE
                        }, {
                            value: "F",
                            type: n.ELE
                        }, {
                            value: "OH",
                            type: n.ELE
                        }, {
                            value: "",
                            type: n.DEL
                        }, {
                            value: "Na",
                            type: n.ELE
                        }, {
                            value: "Mg",
                            type: n.ELE
                        }, {
                            value: "Al",
                            type: n.ELE
                        }, {
                            value: "Si",
                            type: n.ELE
                        }, {
                            value: "P",
                            type: n.ELE
                        }, {
                            value: "S",
                            type: n.ELE
                        }, {
                            value: "Cl",
                            type: n.ELE
                        }, {
                            value: "NO\u2083",
                            type: n.ELE
                        }, {
                            value: "+",
                            type: n.CHAR
                        }, {
                            value: "(",
                            type: n.CHAR
                        }, {
                            value: ")",
                            type: n.CHAR
                        }, {
                            value: "K",
                            type: n.ELE
                        }, {
                            value: "Ca",
                            type: n.ELE
                        }, {
                            value: "Cr",
                            type: n.ELE
                        }, {
                            value: "Mn",
                            type: n.ELE
                        }, {
                            value: "Fe",
                            type: n.ELE
                        }, {
                            value: "Cu",
                            type: n.ELE
                        }, {
                            value: "Br",
                            type: n.ELE
                        }, {
                            value: "CO\u2083",
                            type: n.ELE
                        }, {
                            value: "\u2550",
                            type: n.CHAR
                        }, {
                            value: "\u21CC",
                            type: n.CHAR
                        }, {
                            value: "\u2192",
                            type: n.CHAR
                        }, {
                            value: "NH\u2084",
                            type: n.ELE
                        }, {
                            value: "Ba",
                            type: n.ELE
                        }, {
                            value: "C\u2086H\u2086",
                            type: n.ELE
                        }, {
                            value: "Pb",
                            type: n.ELE
                        }, {
                            value: "Ag",
                            type: n.ELE
                        }, {
                            value: "Zn",
                            type: n.ELE
                        }, {
                            value: "I",
                            type: n.ELE
                        }, {
                            value: "SO\u2084",
                            type: n.ELE
                        }, {
                            value: "\uFE66",
                            type: n.CHAR
                        }, {
                            value: "\u2261",
                            type: n.CHAR
                        }, {
                            value: "\xB7",
                            type: n.CHAR
                        }], this.showKeyboard = !1, this.ShowInput = !1, this.activeBlur = !1, this.autofocusEnabled = !0
                    }
                    initInput(t) {
                        t || this.clear()
                    }
                    nbChemKeyboardTapHander(t) {
                        let i = this.inputDom;
                        if (document.activeElement.tagName === "NB-CHEM-INPUT" && (this.cusFocus = !0, this.isBlur = !1), document.activeElement.tagName === "BODY" && (this.isBlur = !0), !i) return;
                        let {
                            selectionStart: r,
                            selectionEnd: o,
                            value: s
                        } = i;
                        this.isBlur && (r = o = this.selectionIndex);
                        let {
                            value: d,
                            type: a
                        } = t.detail, p = o - r;
                        a === "DEL" && (p || (r -= 1, p += 1), d = "");
                        let l = s.split("");
                        l.splice(r, p, d), s = l.join(""), this.activeBlur && document.activeElement.blur && document.activeElement.blur(), r += d.length, this.selectionIndex = r, this.updateInputValue(s)
                    }
                    inputChange() {
                        let t = this.inputDom;
                        console.log(this.isComposition), !(!t || this.isComposition) && (this.selectionIndex = t.selectionStart, this.updateInputValue(t.value))
                    }
                    updateInputValue(t) {
                        if (t) {
                            t = t.replace(/=/g, "\u2550"), t = t.replace(/\s*/g, "");
                            for (let i = 0, r = t.length; i < r; i++) {
                                let o = t[i],
                                    s = t[i - 1];
                                if (/[0-9]/.test(o) && s)(/([A-Z]|[a-z]|\))/.test(s) || E.includes(s)) && (t = t.substr(0, i) + E[o] + t.substr(i + 1));
                                else if (/[₀|₁|₂|₃|₄|₅|₆|₇|₈|₉]/.test(o)) {
                                    if (!s || /[0-9]|\+|═|⇌|→|·|=/.test(s)) {
                                        let d = E.indexOf(o);
                                        t = t.substr(0, i) + d + t.substr(i + 1)
                                    }
                                } else if (/[a-z]/.test(o) && (!s || /[0-9]|[₀|₁|₂|₃|₄|₅|₆|₇|₈|₉]|\+|═|⇌|→|·|=|\(/.test(s))) {
                                    let d = o.toUpperCase();
                                    t = t.substr(0, i) + d + t.substr(i + 1)
                                }
                            }
                        }
                        this.inputValue = t, this.chemInput.emit({
                            value: t,
                            expressionValue: this.getExpressionValue(t)
                        })
                    }
                    getExpressionValue(t) {
                        return t = t.replace(/═/g, "=="), t = t.replace(/⇌/g, "<>"), t = t.replace(/→/g, "->"), t = t.replace(/﹦/g, "||"), t = t.replace(/≡/g, "|||"), ["\u2080", "\u2081", "\u2082", "\u2083", "\u2084", "\u2085", "\u2086", "\u2087", "\u2088", "\u2089"].forEach((r, o) => {
                            let s = new RegExp(r, "g");
                            t = t.replace(s, o)
                        }), t
                    }
                    clear() {
                        this.updateInputValue("")
                    }
                    componentDidLoad() {
                        this.inputDom = h.D.domQuerySelector(this.ele, ".input"), this.autofocusEnabled && this.inputDom.setAttribute("autofocus", "autofocus"), this.clear(), this.inputDom.addEventListener("compositionstart", t => {
                            this.isComposition = !0
                        }), this.inputDom.addEventListener("compositionend", t => {
                            this.isComposition = !1, this.inputChange()
                        })
                    }
                    componentDidUpdate() {
                        let t = this.inputDom;
                        t && (t.value = this.inputValue, t.selectionStart !== this.selectionIndex && (t.selectionStart = t.selectionEnd = this.selectionIndex))
                    }
                    changeShowKeyboard() {
                        this.showKeyboard = !this.showKeyboard, this.changeShowKeyboardState.emit({
                            state: this.showKeyboard
                        })
                    }
                    render() {
                        return (0, e.h)("div", {
                            class: "chemInput"
                        }, (0, e.h)("div", {
                            class: "inputBox",
                            style: {
                                width: `${Math.ceil(this.keyList.length/5)*40+16}px`
                            }
                        }, (0, e.h)("input", {
                            class: "input",
                            placeholder: this.placeHolderStr,
                            onInput: t => {
                                this.inputChange()
                            },
                            onFocus: () => {
                                this.cusFocus = !0, this.isBlur = !1
                            }
                        }), (0, e.h)("div", {
                            style: {
                                display: this.inputValue && this.inputValue.length ? "block" : "none"
                            },
                            class: "icon clear",
                            onClick: () => {
                                this.clear()
                            }
                        }), (0, e.h)("div", {
                            class: "icon keyboard " + (this.showKeyboard ? "active" : ""),
                            onClick: () => {
                                this.changeShowKeyboard()
                            }
                        })), (0, e.h)("nb-chem-keyboard", {
                            keyList: this.keyList,
                            style: {
                                display: this.showKeyboard ? "block" : "none"
                            }
                        }))
                    }
                    get ele() {
                        return (0, e.g)(this)
                    }
                    static get watchers() {
                        return {
                            ShowInput: ["initInput"]
                        }
                    }
                };
                C.style = S
            },
            47145: function(v, m, c) {
                "use strict";
                c.d(m, {
                    a: function() {
                        return f
                    },
                    g: function() {
                        return e
                    }
                });
                const e = (h, u) => h.querySelector(u),
                    f = (h, u) => h.querySelectorAll(u)
            }
        }
    ]);
})()