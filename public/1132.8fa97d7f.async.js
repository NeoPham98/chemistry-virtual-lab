(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [1132], {
        19035: function(x) {
            x.exports = {
                panel_box: "panel_box___wxVYI"
            }
        },
        61132: function(x, h, o) {
            "use strict";
            o.r(h), o.d(h, {
                default: function() {
                    return Z
                }
            });
            var m = o(67294),
                M = o(80125),
                E = o(11849),
                C = o(98765),
                u = o(85893),
                y = e => {
                    var n = e.eqData,
                        l = e.defStyle,
                        r = (0, m.useRef)(),
                        d = () => {
                            if (l) {
                                var t = r.current;
                                Object.assign(t.style, l)
                            }
                        },
                        s = () => {
                            e.createChemEqu && e.createChemEqu(n)
                        },
                        c = t => {
                            e.createChemEqu && e.createChemEqu((0, E.Z)((0, E.Z)({}, n), t.detail))
                        },
                        v = t => {
                            e.showMicroAni && e.showMicroAni(t.detail)
                        },
                        a = (0, m.useCallback)(() => {
                            var t = r.current,
                                i = 0;
                            if (t) {
                                var L = t.parentNode;
                                if (Object.values(L.children).forEach(z => {
                                        var O = z.style.zIndex || 0;
                                        i = Math.max(O, i)
                                    }), t.style.zIndex !== i) {
                                    var q = i + 1;
                                    t.style.zIndex = q, e.updateMaxZindex(q)
                                }
                            }
                        }, [r]);
                    return (0, u.jsx)(C.tl, {
                        ref: r,
                        expression: n.expression,
                        aboutList: n.aboutList,
                        microAniKey: n.microAniKey,
                        onConverExp: s,
                        onTapAbloutExp: c,
                        onShowMicroAni: v,
                        onTouchstart: () => {
                            a()
                        },
                        onMousedown: () => {
                            a()
                        },
                        onClose: () => {
                            e.onClose(n)
                        },
                        onEquCreatComplete: d
                    })
                },
                p = y,
                P = o(19035),
                A = o.n(P),
                b = 200,
                j = 200,
                f = 30,
                I = e => {
                    var n = e.equationPanelModel,
                        l = e.dispatch,
                        r = n.eqList,
                        d = a => {
                            l({
                                type: "equationPanelModel/deleteOneEquation",
                                payload: {
                                    delItem: a
                                }
                            })
                        },
                        s = a => {
                            l({
                                type: "chemicalModel/createFromEquation",
                                payload: a
                            })
                        },
                        c = a => {
                            l({
                                type: "chemicalModel/showMicroAni",
                                payload: {
                                    microAniKey: a
                                }
                            })
                        },
                        v = a => {
                            l({
                                type: "equationPanelModel/updateMaxZindex",
                                payload: a
                            })
                        };
                    return (0, u.jsx)("div", {
                        className: A().panel_box,
                        children: r.map((a, t) => {
                            var i = {
                                left: "".concat(b + f * t, "px"),
                                top: "".concat(j + f * t, "px"),
                                position: "absolute",
                                pointerEvents: "auto",
                                zIndex: a.zIndex
                            };
                            return (0, u.jsx)(p, {
                                defStyle: i,
                                eqData: a,
                                createChemEqu: s,
                                onClose: d,
                                updateMaxZindex: v,
                                showMicroAni: c
                            }, a.rcKey)
                        })
                    })
                },
                S = e => {
                    var n = e.equationPanelModel;
                    return {
                        equationPanelModel: n
                    }
                },
                Z = (0, M.$j)(S)(I)
        }
    }
]);