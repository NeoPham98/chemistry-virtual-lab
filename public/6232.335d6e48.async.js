(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [6232], {
        72182: function(m) {
            m.exports = {
                back_def: "back_def___1m1ti",
                back_hov: "back_hov___3W6Cq",
                introduce_def: "introduce_def___1zWv8",
                introduce_hov: "introduce_hov___wUaPi",
                more_def: "more_def___2lKUH",
                more_hov: "more_hov___NUYEA",
                setting_def: "setting_def___3duTC",
                setting_hov: "setting_hov___3DZms",
                toolbar_icon_more_default: "toolbar_icon_more_default___1Fxe5",
                toolbar_icon_more_hover: "toolbar_icon_more_hover___3zJBX",
                turn_def: "turn_def___BUX7B",
                turn_hov: "turn_hov___1AElc",
                video_def: "video_def___1__4D",
                video_hov: "video_hov___1CpuB",
                popMenuIcon: "popMenuIcon___3qwrO",
                mSecondBox: "mSecondBox___2ilzy"
            }
        },
        66232: function(m, h, e) {
            "use strict";
            e.r(h), e.d(h, {
                default: function() {
                    return O
                }
            });
            var J = e(20136),
                E = e(55241),
                f = e(2824),
                d = e(67294),
                C = e(72182),
                u = e.n(C),
                j = e(11729),
                Z = e(80125),
                p = e(39428),
                B = e(3182),
                I = e(99222),
                M = (0, I.dynamic)({
                    loader: function() {
                        var a = (0, B.Z)((0, p.Z)().mark(function s() {
                            var i, o;
                            return (0, p.Z)().wrap(function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 2, Promise.all([e.e(4384), e.e(9599)]).then(e.bind(e, 18874));
                                    case 2:
                                        return i = t.sent, o = i.default, t.abrupt("return", o);
                                    case 5:
                                    case "end":
                                        return t.stop()
                                }
                            }, s)
                        }));

                        function l() {
                            return a.apply(this, arguments)
                        }
                        return l
                    }()
                }),
                z = e(30929),
                N = e(15936),
                n = e(85893),
                U = a => {
                    var l = a.chemicalPopMenuModel,
                        s = a.chemicalModel,
                        i = a.dispatch,
                        o = l.popMenuPos,
                        S = l.sensorsEqData,
                        t = l.showSetting,
                        T = s.isElec,
                        A = (0, d.useState)({
                            left: "0",
                            top: "0",
                            zIndex: -1
                        }),
                        g = (0, f.Z)(A, 2),
                        H = g[0],
                        $ = g[1],
                        G = (0, d.useState)(t),
                        x = (0, f.Z)(G, 2),
                        V = x[0],
                        P = x[1];
                    (0, d.useEffect)(() => {
                        if (o) {
                            var r = o.x,
                                X = o.y,
                                b = o.topOffset,
                                F = o.leftOffset,
                                y = o.zIndex,
                                v = X,
                                c = r;
                            y === -1 ? (c = -1e3, v = -1e3) : (b && (v -= 32), F && (c -= 32)), $({
                                left: "".concat(c, "px"),
                                top: "".concat(v, "px"),
                                zIndex: y
                            })
                        }
                        P(t)
                    }, [o, t]);
                    var W = r => {
                        P(r), r && i({
                            type: "nbLogModel/areaEquipmentSetClickSchem",
                            payload: {
                                sensorsEqData: S,
                                isPlayer: !z.Z.isEditor,
                                moduleId: T ? 27 : 9
                            }
                        })
                    };
                    return N.Z.isMobile() ? !o || (o == null ? void 0 : o.zIndex) === -1 ? "" : (0, n.jsx)("div", {
                        children: (0, n.jsx)("div", {
                            className: "".concat(u().mSecondBox),
                            children: (0, n.jsx)(M, {})
                        })
                    }) : (0, n.jsx)("div", {
                        className: u().popMenuIcon,
                        style: H,
                        children: (0, n.jsx)(E.Z, {
                            destroyTooltipOnHide: !0,
                            overlayClassName: "eqPopMenuBox",
                            placement: "right",
                            trigger: "click",
                            zIndex: 660,
                            visible: V,
                            onVisibleChange: W,
                            content: (0, n.jsx)(M, {}),
                            children: (0, n.jsx)(j.Z, {
                                children: (0, n.jsx)("div", {
                                    className: u().toolbar_icon_more_default
                                })
                            })
                        })
                    })
                },
                D = a => {
                    var l = a.chemicalPopMenuModel,
                        s = a.chemicalModel;
                    return {
                        chemicalPopMenuModel: l,
                        chemicalModel: s
                    }
                },
                O = (0, Z.$j)(D)(U)
        }
    }
]);