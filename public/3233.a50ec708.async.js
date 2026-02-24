(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [3233], {
        99313: function(o) {
            o.exports = {
                equipment_icon_aid_click: "equipment_icon_aid_click___2FIGp",
                equipment_icon_aid_default: "equipment_icon_aid_default___2yhVs",
                equipment_icon_aid_hover: "equipment_icon_aid_hover___2l3qv",
                equipment_icon_electro_electrode_click: "equipment_icon_electro_electrode_click___1O8Y2",
                equipment_icon_electro_electrode_default: "equipment_icon_electro_electrode_default___1cVb-",
                equipment_icon_electro_eq_click: "equipment_icon_electro_eq_click___3mbdp",
                equipment_icon_electro_eq_default: "equipment_icon_electro_eq_default___2dBVD",
                equipment_icon_electro_gas_click: "equipment_icon_electro_gas_click___2neGl",
                equipment_icon_electro_gas_default: "equipment_icon_electro_gas_default___1UnfD",
                equipment_icon_electro_liquid_click: "equipment_icon_electro_liquid_click___27A_p",
                equipment_icon_electro_liquid_default: "equipment_icon_electro_liquid_default___BjNN7",
                equipment_icon_gas_click: "equipment_icon_gas_click___36kM4",
                equipment_icon_gas_default: "equipment_icon_gas_default___1LzlB",
                equipment_icon_gas_hover: "equipment_icon_gas_hover___1pnRY",
                equipment_icon_liquid_click: "equipment_icon_liquid_click___3haXe",
                equipment_icon_liquid_default: "equipment_icon_liquid_default___dBQZQ",
                equipment_icon_liquid_hover: "equipment_icon_liquid_hover___2ujuA",
                equipment_icon_open_default: "equipment_icon_open_default___1ao41",
                "equipment_icon_put-away_default": "equipment_icon_put-away_default___1EK73",
                equipment_icon_reactor_click: "equipment_icon_reactor_click___2gX1_",
                equipment_icon_reactor_default: "equipment_icon_reactor_default___FFUSd",
                equipment_icon_reactor_hover: "equipment_icon_reactor_hover___1Ti0j",
                equipment_icon_solid_click: "equipment_icon_solid_click___18BWd",
                equipment_icon_solid_default: "equipment_icon_solid_default___9Mqd3",
                equipment_icon_solid_hover: "equipment_icon_solid_hover___3IGzJ",
                icon_keyboard_def: "icon_keyboard_def___3s_AV",
                icon_keyboard_hov: "icon_keyboard_hov___2LIOj",
                lock: "lock___2FNbi",
                qicaiku_button_back_default: "qicaiku_button_back_default___391hA",
                qicaiku_button_back_pressed: "qicaiku_button_back_pressed___29RXO",
                qicaiku_button_default: "qicaiku_button_default___3gv9z",
                qicaiku_button_hover: "qicaiku_button_hover___1nQTN",
                qicaiku_button_pressed: "qicaiku_button_pressed___1_1mT",
                search_icon_line_default: "search_icon_line_default___Eoe0X",
                search_icon_search_Hover: "search_icon_search_Hover___11G0O",
                search_icon_search_default: "search_icon_search_default___1cBYc",
                tanchuang_close: "tanchuang_close___1rJju",
                toggleTar: "toggleTar___2w2k_"
            }
        },
        79830: function(o) {
            o.exports = {
                equipmentDrawer: "equipmentDrawer___1hxCX",
                rt: "rt___wvmzB",
                logo: "logo___1Wq89"
            }
        },
        93233: function(o, q, e) {
            "use strict";
            e.r(q), e.d(q, {
                EquipmentDrawer: function() {
                    return I
                }
            });
            var C = e(11849),
                D = e(2824),
                n = e(67294),
                j = e(79830),
                d = e.n(j),
                w = e(99313),
                i = e.n(w),
                y = e(39768),
                t = e(85893),
                T = _ => {
                    var a = _.visible,
                        c = _.onChange,
                        s = (0, n.useCallback)(() => ({
                            default: i().qicaiku_button_back_default,
                            hover: i().qicaiku_button_back_pressed,
                            active: i().qicaiku_button_back_pressed
                        }), []),
                        u = (0, n.useCallback)(() => ({
                            default: i().qicaiku_button_default,
                            hover: i().qicaiku_button_hover,
                            active: i().qicaiku_button_pressed
                        }), []);
                    return (0, t.jsx)("div", {
                        className: i().toggleTar,
                        onClick: c,
                        children: (0, t.jsx)(y.Z, {
                            statuss: a ? s() : u()
                        })
                    })
                },
                E = T,
                B = e(33666),
                S = e(30929),
                x = e(80125),
                L = (0, n.forwardRef)((_, a) => {
                    var c = _.headerIsTop,
                        s = _.container,
                        u = _.subject,
                        O = u === void 0 ? 2 : u,
                        l = _.backBtnToggle,
                        M = _.rtContainer,
                        p = _.headerContainer,
                        V = _.innerStyle,
                        v = _.equipmentLineColumn,
                        h = v === void 0 ? !1 : v,
                        z = _.sdkModel,
                        A = (0, n.useState)(!0),
                        f = (0, D.Z)(A, 2),
                        r = f[0],
                        k = f[1],
                        g = () => {
                            l && l(!0), k(!0)
                        },
                        m = () => {
                            l && l(!1), k(!1)
                        },
                        b = Z => {
                            var F = Z.hideDrawer;
                            F ? m() : g()
                        };
                    (0, n.useEffect)(() => (window.addEventListener("hideDrawerEvent", b), () => {
                        window.removeEventListener("hideDrawerEvent", b)
                    }), []), (0, n.useImperativeHandle)(a, () => ({
                        hide: () => m()
                    }));
                    var G = (0, C.Z)({
                            height: "calc(100% - 64px)",
                            top: c ? "auto" : "0",
                            bottom: c ? "0" : "auto",
                            zIndex: 100
                        }, V),
                        R = () => {
                            r ? m() : g()
                        },
                        X = () => S.Z.isSDK && z.logoVisible ? (0, t.jsx)("div", {
                            className: d().logo,
                            children: "THS"
                        }) : "";
                    return (0, t.jsxs)(B.L, {
                        title: !1,
                        closable: !1,
                        placement: "right",
                        mask: !1,
                        className: d().equipmentDrawer,
                        style: G,
                        visible: r,
                        width: O === 2 ? h ? 188 : 316 : h ? 138 : 268,
                        children: [(0, t.jsx)("div", {
                            className: d().rt,
                            children: M || null
                        }), (0, t.jsx)(E, {
                            visible: r,
                            onChange: R
                        }), p || null, (0, t.jsx)("div", {
                            id: "libraryPanel",
                            style: {
                                visibility: r ? "visible" : "hidden"
                            },
                            children: s || null
                        }), X()]
                    })
                }),
                N = _ => {
                    var a = _.sdkModel;
                    return {
                        sdkModel: a
                    }
                },
                I = (0, x.$j)(N, void 0, void 0, {
                    forwardRef: !0
                })(L)
        }
    }
]);