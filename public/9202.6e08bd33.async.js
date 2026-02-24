(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [9202], {
        39202: function(p, y, r) {
            "use strict";
            r.r(y), r.d(y, {
                nb_chem_keyboard: function() {
                    return n
                }
            });
            var t = r(33659);
            const c = '.del_def,.chemKeyboard .keys .oneKey.del::after{background-image:url(assets/imgs/nbk/nbk_nb-chem-keyboard_sprite.png);background-size:24px 82px;background-repeat:no-repeat;background-position:0px 0px;width:24px;height:24px}.del_hov,.chemKeyboard .keys .oneKey.del:hover::after{background-image:url(assets/imgs/nbk/nbk_nb-chem-keyboard_sprite.png);background-size:24px 82px;background-repeat:no-repeat;background-position:0px -29px;width:24px;height:24px}.del_pre,.chemKeyboard .keys .oneKey.del:active::after{background-image:url(assets/imgs/nbk/nbk_nb-chem-keyboard_sprite.png);background-size:24px 82px;background-repeat:no-repeat;background-position:0px -58px;width:24px;height:24px}.chemKeyboard{width:440px;height:200px;background:#232628;border:1px solid #25282e;padding:8px;user-select:none}.chemKeyboard .keys{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:space-around}.chemKeyboard .keys .oneKey{color:#A6A6A6;font-size:12px;width:32px;height:32px;text-align:center;border-radius:6px;margin:4px;border:none;padding:0;display:flex;align-items:center;justify-content:center;cursor:pointer;outline:none}.chemKeyboard .keys .oneKey.char{font-size:18px;color:#FFFFFF;background:#2592ff}.chemKeyboard .keys .oneKey.char:hover{color:#4A4A4A;background:white}.chemKeyboard .keys .oneKey.char:active{background:#cccccc}.chemKeyboard .keys .oneKey.ele{color:#a6a6a6;background:rgba(0, 0, 0, 0.95)}.chemKeyboard .keys .oneKey.ele:hover{color:white;background:#2592ff}.chemKeyboard .keys .oneKey.ele:active{background:#1c6de5}.chemKeyboard .keys .oneKey.ele.empty{cursor:default}.chemKeyboard .keys .oneKey.ele.empty:hover{color:#a6a6a6;background:rgba(0, 0, 0, 0.95)}.chemKeyboard .keys .oneKey.ele.empty:active{background:rgba(0, 0, 0, 0.95)}.chemKeyboard .keys .oneKey.num{font-size:14px;color:#dfdfdf;background:#4a4a4a}.chemKeyboard .keys .oneKey.num:hover{color:#4a4a4a;background:white}.chemKeyboard .keys .oneKey.num:active{background:#cccccc}.chemKeyboard .keys .oneKey.del{width:112px;background:#d75454;position:relative}.chemKeyboard .keys .oneKey.del::after{content:"";position:absolute;left:42px;top:4px}.chemKeyboard .keys .oneKey.del:hover{background:white}.chemKeyboard .keys .oneKey.del:active{background:#cccccc}',
                e = {
                    ELE: "ELE",
                    NUM: "NUM",
                    CHAR: "CHAR",
                    DEL: "DEL"
                };
            let n = class {
                constructor(a) {
                    (0, t.r)(this, a), this.nbChemKeyboardTap = (0, t.c)(this, "nbChemKeyboardTap", 7), this.keyList = [{
                        value: "H",
                        type: e.ELE
                    }, {
                        value: "1",
                        type: e.NUM
                    }, {
                        value: "2",
                        type: e.NUM
                    }, {
                        value: "3",
                        type: e.NUM
                    }, {
                        value: "4",
                        type: e.NUM
                    }, {
                        value: "5",
                        type: e.NUM
                    }, {
                        value: "6",
                        type: e.NUM
                    }, {
                        value: "7",
                        type: e.NUM
                    }, {
                        value: "8",
                        type: e.NUM
                    }, {
                        value: "9",
                        type: e.NUM
                    }, {
                        value: "0",
                        type: e.NUM
                    }, {
                        value: "Li",
                        type: e.ELE
                    }, {
                        value: "Be",
                        type: e.ELE
                    }, {
                        value: "B",
                        type: e.ELE
                    }, {
                        value: "C",
                        type: e.ELE
                    }, {
                        value: "N",
                        type: e.ELE
                    }, {
                        value: "O",
                        type: e.ELE
                    }, {
                        value: "F",
                        type: e.ELE
                    }, {
                        value: "OH",
                        type: e.ELE
                    }, {
                        value: "",
                        type: e.DEL
                    }, {
                        value: "Na",
                        type: e.ELE
                    }, {
                        value: "Mg",
                        type: e.ELE
                    }, {
                        value: "Al",
                        type: e.ELE
                    }, {
                        value: "Si",
                        type: e.ELE
                    }, {
                        value: "P",
                        type: e.ELE
                    }, {
                        value: "S",
                        type: e.ELE
                    }, {
                        value: "Cl",
                        type: e.ELE
                    }, {
                        value: "NO\u2083",
                        type: e.ELE
                    }, {
                        value: "+",
                        type: e.CHAR
                    }, {
                        value: "(",
                        type: e.CHAR
                    }, {
                        value: ")",
                        type: e.CHAR
                    }, {
                        value: "K",
                        type: e.ELE
                    }, {
                        value: "Ca",
                        type: e.ELE
                    }, {
                        value: "Cr",
                        type: e.ELE
                    }, {
                        value: "Mn",
                        type: e.ELE
                    }, {
                        value: "Fe",
                        type: e.ELE
                    }, {
                        value: "Cu",
                        type: e.ELE
                    }, {
                        value: "Br",
                        type: e.ELE
                    }, {
                        value: "CO\u2083",
                        type: e.ELE
                    }, {
                        value: "\u2550",
                        type: e.CHAR
                    }, {
                        value: "\u21CC",
                        type: e.CHAR
                    }, {
                        value: "\u2192",
                        type: e.CHAR
                    }, {
                        value: "NH\u2084",
                        type: e.ELE
                    }, {
                        value: "Ba",
                        type: e.ELE
                    }, {
                        value: "C\u2086H\u2086",
                        type: e.ELE
                    }, {
                        value: "Pb",
                        type: e.ELE
                    }, {
                        value: "Ag",
                        type: e.ELE
                    }, {
                        value: "Zn",
                        type: e.ELE
                    }, {
                        value: "I",
                        type: e.ELE
                    }, {
                        value: "SO\u2084",
                        type: e.ELE
                    }, {
                        value: "\uFE66",
                        type: e.CHAR
                    }, {
                        value: "\u2261",
                        type: e.CHAR
                    }, {
                        value: "\xB7",
                        type: e.CHAR
                    }]
                }
                componentDidLoad() {}
                clickHander(a, o) {
                    a.preventDefault(), !(a.type === e.ELE && !a.value) && this.nbChemKeyboardTap.emit(o)
                }
                creatKeyDom() {
                    return this.keyList.map(a => {
                        let o = "";
                        switch (a.type) {
                            case e.CHAR:
                                {
                                    o = "char";
                                    break
                                }
                            case e.ELE:
                                {
                                    o = "ele";
                                    break
                                }
                            case e.NUM:
                                {
                                    o = "num";
                                    break
                                }
                            case e.DEL:
                                {
                                    o = "del";
                                    break
                                }
                        }
                        return (0, t.h)("button", {
                            class: `oneKey ${o} ${a.value?"":"empty"}`,
                            onMouseDown: l => {
                                this.clickHander(l, a)
                            }
                        }, (0, t.h)("span", null, a.value))
                    })
                }
                render() {
                    return (0, t.h)("div", {
                        class: "chemKeyboard",
                        style: {
                            width: `${Math.ceil(this.keyList.length/5)*40}px`
                        },
                        onMouseDown: a => {
                            a.preventDefault()
                        }
                    }, (0, t.h)("div", {
                        class: "keys"
                    }, this.creatKeyDom()))
                }
                get el() {
                    return (0, t.g)(this)
                }
            };
            n.style = c
        }
    }
]);