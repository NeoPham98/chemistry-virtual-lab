(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [3236], {
        37777: function(y) {
            y.exports = {
                equipment_icon_aid_click: "equipment_icon_aid_click___1zDCL",
                equipment_icon_aid_default: "equipment_icon_aid_default___125MC",
                equipment_icon_aid_hover: "equipment_icon_aid_hover___3i6SE",
                equipment_icon_electro_electrode_click: "equipment_icon_electro_electrode_click___2feiN",
                equipment_icon_electro_electrode_default: "equipment_icon_electro_electrode_default___3pzel",
                equipment_icon_electro_eq_click: "equipment_icon_electro_eq_click___3Ba8b",
                equipment_icon_electro_eq_default: "equipment_icon_electro_eq_default___198rZ",
                equipment_icon_electro_gas_click: "equipment_icon_electro_gas_click___24AAx",
                equipment_icon_electro_gas_default: "equipment_icon_electro_gas_default___2w4Z2",
                equipment_icon_electro_liquid_click: "equipment_icon_electro_liquid_click___X1y2B",
                equipment_icon_electro_liquid_default: "equipment_icon_electro_liquid_default___2SAH6",
                equipment_icon_gas_click: "equipment_icon_gas_click___2cs67",
                equipment_icon_gas_default: "equipment_icon_gas_default___2aZdQ",
                equipment_icon_gas_hover: "equipment_icon_gas_hover___1mT8S",
                equipment_icon_liquid_click: "equipment_icon_liquid_click___2Fljv",
                equipment_icon_liquid_default: "equipment_icon_liquid_default___1ZdlZ",
                equipment_icon_liquid_hover: "equipment_icon_liquid_hover___1PCv8",
                equipment_icon_open_default: "equipment_icon_open_default___3cd4n",
                "equipment_icon_put-away_default": "equipment_icon_put-away_default___3aKqg",
                equipment_icon_reactor_click: "equipment_icon_reactor_click___1qdzP",
                equipment_icon_reactor_default: "equipment_icon_reactor_default___ZgmQ2",
                equipment_icon_reactor_hover: "equipment_icon_reactor_hover___1-glt",
                equipment_icon_solid_click: "equipment_icon_solid_click___2FdbK",
                equipment_icon_solid_default: "equipment_icon_solid_default___1hXbm",
                equipment_icon_solid_hover: "equipment_icon_solid_hover___3JEOx",
                icon_keyboard_def: "icon_keyboard_def___3UevZ",
                icon_keyboard_hov: "icon_keyboard_hov___uVD9O",
                lock: "lock___3DEFn",
                qicaiku_button_back_default: "qicaiku_button_back_default___2qbPZ",
                qicaiku_button_back_pressed: "qicaiku_button_back_pressed___33lY8",
                qicaiku_button_default: "qicaiku_button_default___3PAxD",
                qicaiku_button_hover: "qicaiku_button_hover___30efi",
                qicaiku_button_pressed: "qicaiku_button_pressed___3eIVC",
                search_icon_line_default: "search_icon_line_default___1eD7c",
                search_icon_search_Hover: "search_icon_search_Hover___2sPbn",
                search_icon_search_default: "search_icon_search_default___1iwJs",
                tanchuang_close: "tanchuang_close___30JD2",
                wordBar: "wordBar___3w2g4",
                wordLibBox: "wordLibBox___2dm2j",
                wordBorder: "wordBorder___1lxTq",
                wordLib: "wordLib___2d-l5",
                wordLibContent: "wordLibContent___1LD_o"
            }
        },
        13236: function(y, A, c) {
            "use strict";
            c.r(A);
            var p = c(2824),
                r = c(67294),
                ie = c(37777),
                m = c.n(ie),
                O = c(15559),
                ne = c(36215),
                T = c.n(ne),
                v = c(85893),
                a = 30,
                I = ["#", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
                ae = E => {
                    var b = E.ignoreWords,
                        k = E.height,
                        H = E.word,
                        q = E.change,
                        oe = (0, r.useState)(JSON.parse(JSON.stringify(I))),
                        j = (0, p.Z)(oe, 2),
                        t = j[0],
                        re = j[1],
                        le = (0, r.useState)([]),
                        Z = (0, p.Z)(le, 2),
                        M = Z[0],
                        ce = Z[1],
                        ue = (0, r.useState)(0),
                        R = (0, p.Z)(ue, 2),
                        w = R[0],
                        se = R[1],
                        de = (0, r.useState)("#"),
                        K = (0, p.Z)(de, 2),
                        u = K[0],
                        x = K[1],
                        ve = (0, r.useState)(0),
                        U = (0, p.Z)(ve, 2),
                        fe = U[0],
                        D = U[1],
                        L = (0, r.useRef)(null),
                        h = 0,
                        o = -1,
                        s = -1,
                        S = 20,
                        g = S,
                        N = 0,
                        P = 0,
                        F = 0,
                        J = .05,
                        me = 1,
                        f = 0,
                        he = e => {
                            var _ = Math.floor(M.length / 2),
                                n = J + (me - J) * ((_ - Math.abs(_ - e)) / _);
                            return "rgba(255,255,255,".concat(n, ")")
                        },
                        Y = e => {
                            var _ = (0, O._)(e).y - h,
                                n = Math.round(_ / a),
                                i = _ - n * a,
                                l = o - n;
                            return l < 0 && (l = t.length + l % t.length), l >= t.length && (l === t.length ? l = 0 : l %= t.length), {
                                dis: i,
                                num: l
                            }
                        },
                        C = e => {
                            var _ = Y(e),
                                n = _.dis,
                                i = _.num;
                            t[i] !== u && x(t[i]), D(n)
                        },
                        z = (e, _) => {
                            cancelAnimationFrame(P), o = e, s = o - _, g = 0, N = _ * a + h, X()
                        },
                        Q = e => {
                            var _ = new Date().getTime() - F,
                                n = Y(e),
                                i = n.dis,
                                l = n.num,
                                W = (0, O._)(e),
                                d = W.y,
                                xe = d - h;
                            if (f = 0, i !== 0) {
                                o = t.indexOf(u);
                                var _e = Math.ceil(xe / _ * t.length / 3);
                                if (_ < 500) {
                                    s = o - _e, h = i, z(o, _e);
                                    var te = t[s < 0 ? t.length + s % t.length : s % t.length];
                                    te ? q(te) : (x("#"), q("#"))
                                } else D(0), q(t[l])
                            }
                            document.removeEventListener("pointermove", C), document.removeEventListener("pointerup", Q)
                        },
                        pe = e => {
                            F = new Date().getTime(), h = (0, O._)(e).y, o = t.indexOf(u), document.addEventListener("pointermove", C), document.addEventListener("pointerup", Q)
                        },
                        V = e => {
                            var _ = Math.max(1, Math.floor((Math.floor(e / a) - 1) / 2)) + 1,
                                n = t.indexOf(u),
                                i = new Array(_ * 2 + 1).fill(1).map((l, W) => {
                                    var d = n - _ + W;
                                    return d < 0 && (d = t.length + d), d > t.length - 1 && (d -= t.length), t[d]
                                });
                            ce(i)
                        };
                    (0, r.useEffect)(() => {
                        if (b) {
                            var e = I.filter(_ => !b.find(n => _ === n));
                            re(e)
                        }
                    }, [b]), (0, r.useEffect)(() => {
                        se(k), V(k)
                    }, [k]), (0, r.useEffect)(() => {
                        w === k && V(w)
                    }, [u]), (0, r.useEffect)(() => {
                        x(H)
                    }, [H]);
                    var X = () => {
                            ++g;
                            var e = N * (g / S);
                            C({
                                pageY: e
                            }), g < S && (P = requestAnimationFrame(X))
                        },
                        qe = (e, _) => {
                            cancelAnimationFrame(P), D(0), o = t.indexOf(u), s = t.indexOf(e), h = 0, g = 0;
                            var n = Math.floor(M.length / 2),
                                i = 0;
                            _ > n && (i = o - s, i > 0 && (i -= t.length)), _ < n && (i = t.length + o - s, i > t.length && (i %= t.length)), z(o, i), q(e)
                        },
                        ge = (e, _) => (0, v.jsx)("p", {
                            onClick: () => qe(e, _),
                            style: {
                                color: he(_)
                            },
                            children: e
                        }, _),
                        G = function() {
                            o = t.indexOf(u);
                            var _ = Math.round(f / a),
                                n = f - _ * a,
                                i = o - _;
                            i < 0 && (i = t.length + i % t.length), i >= t.length && (i === t.length ? i = 0 : i %= t.length), x(t[i]), D(n), q(t[i])
                        },
                        $ = e => {
                            e.wheelDelta > 0 && (f += a), e.wheelDelta < 0 && (f -= a), G()
                        },
                        ee = e => {
                            e.detail < 0 && (f += a), e.detail > 0 && (f -= a), G()
                        };
                    (0, r.useEffect)(() => {
                        var e = L.current,
                            _ = window.navigator.userAgent.toLowerCase(),
                            n = T().throttle(ee, 20),
                            i = T().throttle($, 20);
                        return e && (_.indexOf("firefox") !== -1 ? e.addEventListener("DOMMouseScroll", n, {
                            passive: !1
                        }) : e.addEventListener("mousewheel", i, {
                            passive: !1
                        })), () => {
                            _.indexOf("firefox") !== -1 ? e.removeEventListener("DOMMouseScroll", n, {
                                passive: !1
                            }) : e.removeEventListener("mousewheel", i, {
                                passive: !1
                            })
                        }
                    }, [ee, $, L, u]);
                    var B = Math.floor(M.length / 2),
                        Ee = ((B - 1) * 2 + 1) * a,
                        ke = (B - 1) * a,
                        Me = B * a;
                    return (0, v.jsx)("div", {
                        ref: L,
                        className: m().wordBar,
                        style: {
                            height: "".concat(Math.max(w, a * 3 + 10), "px")
                        },
                        onPointerDown: pe,
                        children: (0, v.jsxs)("div", {
                            className: m().wordLibBox,
                            style: {
                                height: "".concat(Ee, "px")
                            },
                            children: [(0, v.jsx)("div", {
                                className: m().wordBorder,
                                style: {
                                    top: "".concat(ke, "px")
                                }
                            }), (0, v.jsx)("div", {
                                className: m().wordBorder,
                                style: {
                                    top: "".concat(Me, "px")
                                }
                            }), (0, v.jsx)("div", {
                                className: m().wordLib,
                                children: (0, v.jsx)("div", {
                                    className: m().wordLibContent,
                                    style: {
                                        top: "".concat(-a, "px"),
                                        transform: "translateY(".concat(fe, "px)")
                                    },
                                    children: M.map((e, _) => ge(e, _))
                                })
                            })]
                        })
                    })
                };
            A.default = ae
        }
    }
]);