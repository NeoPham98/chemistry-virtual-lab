(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [1220], {
        96414: function(k) {
            k.exports = {
                equipment_icon_aid_click: "equipment_icon_aid_click___2VoDf",
                equipment_icon_aid_default: "equipment_icon_aid_default___3giWe",
                equipment_icon_aid_hover: "equipment_icon_aid_hover___2MXoh",
                equipment_icon_electro_electrode_click: "equipment_icon_electro_electrode_click___2YWT1",
                equipment_icon_electro_electrode_default: "equipment_icon_electro_electrode_default___xy80F",
                equipment_icon_electro_eq_click: "equipment_icon_electro_eq_click___S6H_U",
                equipment_icon_electro_eq_default: "equipment_icon_electro_eq_default___2zxlv",
                equipment_icon_electro_gas_click: "equipment_icon_electro_gas_click___3_lz1",
                equipment_icon_electro_gas_default: "equipment_icon_electro_gas_default___gMcSh",
                equipment_icon_electro_liquid_click: "equipment_icon_electro_liquid_click___o8COI",
                equipment_icon_electro_liquid_default: "equipment_icon_electro_liquid_default___237Vh",
                equipment_icon_gas_click: "equipment_icon_gas_click___vVyoU",
                equipment_icon_gas_default: "equipment_icon_gas_default___2_Rue",
                equipment_icon_gas_hover: "equipment_icon_gas_hover___3US65",
                equipment_icon_liquid_click: "equipment_icon_liquid_click___3SR-4",
                equipment_icon_liquid_default: "equipment_icon_liquid_default___O7AMo",
                equipment_icon_liquid_hover: "equipment_icon_liquid_hover___1xjbD",
                equipment_icon_open_default: "equipment_icon_open_default___2CZP2",
                "equipment_icon_put-away_default": "equipment_icon_put-away_default___33K6k",
                equipment_icon_reactor_click: "equipment_icon_reactor_click___179ns",
                equipment_icon_reactor_default: "equipment_icon_reactor_default___1yu9i",
                equipment_icon_reactor_hover: "equipment_icon_reactor_hover___2wr57",
                equipment_icon_solid_click: "equipment_icon_solid_click___1d6WS",
                equipment_icon_solid_default: "equipment_icon_solid_default___3poYs",
                equipment_icon_solid_hover: "equipment_icon_solid_hover___28Orp",
                icon_keyboard_def: "icon_keyboard_def___2PJsX",
                icon_keyboard_hov: "icon_keyboard_hov___sf_vE",
                lock: "lock___1CT3b",
                qicaiku_button_back_default: "qicaiku_button_back_default___1LSI5",
                qicaiku_button_back_pressed: "qicaiku_button_back_pressed___tQYju",
                qicaiku_button_default: "qicaiku_button_default___5yhOt",
                qicaiku_button_hover: "qicaiku_button_hover___U1r5A",
                qicaiku_button_pressed: "qicaiku_button_pressed___3DFm-",
                search_icon_line_default: "search_icon_line_default___2kl0E",
                search_icon_search_Hover: "search_icon_search_Hover___5gqGz",
                search_icon_search_default: "search_icon_search_default___2yeeh",
                tanchuang_close: "tanchuang_close___3c-yI",
                chemSearch: "chemSearch___1dZEG",
                searchWrap: "searchWrap___izQPI",
                searchIcon: "searchIcon___3vBTb",
                searchInput: "searchInput___3rVGt",
                keyboardIconBtnWrap: "keyboardIconBtnWrap___KF7LI",
                keyboardIconBtn: "keyboardIconBtn___2wYS_",
                dropDown_1: "dropDown_1___2bjZR",
                dropDown_2: "dropDown_2___28oGv",
                dropDown: "dropDown___39o76",
                close: "close___qGA7Y",
                drop_down_body: "drop_down_body___ppXm_",
                Ion: "Ion___2tfvN",
                clearBtn: "clearBtn___3vi_Y",
                clearIcon: "clearIcon___3HW7x"
            }
        },
        81220: function(k, N, c) {
            "use strict";
            c.r(N), c.d(N, {
                default: function() {
                    return B
                }
            });
            var F = c(59250),
                j = c(13013),
                b = c(2824),
                y = c(30929),
                t = c(67294),
                i = c(80125),
                I = [{
                    listName: "".concat((0, i.lw)().formatMessage({
                        id: "metal",
                        defaultMessage: "\u91D1\u5C5E"
                    })),
                    listMap: ["Li", "Na", "Mg", "Al", "K", "Ca", "Cr", "Mn", "Fe", "Cu", "Zn", "Ag", "Pt"]
                }, {
                    listName: "".concat((0, i.lw)().formatMessage({
                        id: "non_metallic",
                        defaultMessage: "\u975E\u91D1\u5C5E"
                    })),
                    listMap: ["H", "He", "B", "C", "N", "O", "F", "Ne", "Si", "P", "S", "Cl", "Ar", "Br"]
                }, {
                    listName: "".concat((0, i.lw)().formatMessage({
                        id: "charged_ion_cluster",
                        defaultMessage: "\u5E26\u7535\u79BB\u5B50\u56E2"
                    })),
                    listMap: [{
                        btnName: "SO\u2084\xB2\u207B",
                        innerName: "SO4"
                    }, {
                        btnName: "NO\u2083\u207B",
                        innerName: "NO3"
                    }, {
                        btnName: "OH\u207B",
                        innerName: "OH"
                    }, {
                        btnName: "PO\u2084\xB3\u207B",
                        innerName: "PO4"
                    }, {
                        btnName: "CO\u2083\xB2\u207B",
                        innerName: "CO3"
                    }, {
                        btnName: "HCO\u2083\u207B",
                        innerName: "HCO3"
                    }, {
                        btnName: "NH\u2084\u207A",
                        innerName: "NH4"
                    }]
                }],
                D = I,
                w = c(96414),
                a = c.n(w),
                _ = c(85893),
                O = o => {
                    var r = o.change,
                        f = o.activeSearch,
                        H = o.sdkModel,
                        u = (0, i.YB)(),
                        d = (0, t.useRef)(null),
                        m = (0, t.useRef)(null),
                        q = (0, t.useRef)(null),
                        E = (0, t.useState)(""),
                        C = (0, b.Z)(E, 2),
                        p = C[0],
                        h = C[1],
                        R = (0, t.useState)(!1),
                        S = (0, b.Z)(R, 2),
                        g = S[0],
                        v = S[1],
                        W = (0, i.I0)(),
                        Z = e => {
                            var n = "",
                                l = "",
                                M = typeof e == "string";
                            return M ? (n = e, l = e) : (n = e.btnName, l = e.innerName), (0, _.jsx)("li", {
                                className: M ? "" : a().Ion,
                                onClick: K => {
                                    var s = p.replace(/\s*$/g, ""),
                                        V = new RegExp("^" + "".concat(u.formatMessage({
                                            id: "drugs",
                                            defaultMessage: "\u836F\u54C1"
                                        })) + "[:|\uFF1A]");
                                    V.test(s) ? s += " ".concat(n) : s = "".concat(u.formatMessage({
                                        id: "drugs",
                                        defaultMessage: "\u836F\u54C1"
                                    }), ": ").concat(n), h(s), r(s), K.stopPropagation()
                                },
                                children: n
                            }, l)
                        },
                        L = (e, n) => (0, _.jsxs)("div", {
                            children: [(0, _.jsx)("h4", {
                                children: e.listName
                            }), (0, _.jsx)("ul", {
                                children: e.listMap.map(l => Z(l))
                            })]
                        }, n),
                        P = () => (0, _.jsxs)("div", {
                            ref: q,
                            children: [(0, _.jsx)("div", {
                                className: a().close,
                                onClick: () => v(!1),
                                children: (0, _.jsx)("div", {
                                    className: a().tanchuang_close
                                })
                            }), (0, _.jsx)("div", {
                                className: a().drop_down_body,
                                children: D.map((e, n) => L(e, n))
                            })]
                        }),
                        x = e => {
                            if (d.current && m.current) {
                                if (!d.current || !m.current || !q.current) return;
                                !d.current.contains(e.target) && !m.current.contains(e.target) && !q.current.contains(e.target) && v(!1)
                            }
                        };
                    (0, t.useEffect)(() => (document.addEventListener("click", x), () => {
                        document.removeEventListener("click", x)
                    }), []), (0, t.useEffect)(() => {
                        f !== "ChemSearchEmpty" && f !== "ChemSearch" && (g && v(!1), p && h(""))
                    }, [f]);
                    var A = e => {
                            h(e.target.value), r(e.target.value)
                        },
                        Y = e => {
                            e.keyCode === 13 && e.target.blur()
                        },
                        G = e => {
                            var n = e.target.value.replace(/\s*/g, "");
                            n && W({
                                type: "nbLogModel/track",
                                payload: {
                                    EquipmentSearch: {
                                        keyword: n
                                    }
                                }
                            })
                        };
                    return (0, _.jsx)("div", {
                        className: a().chemSearch,
                        children: (0, _.jsxs)("div", {
                            className: a().searchWrap,
                            ref: m,
                            children: [(0, _.jsxs)("div", {
                                className: a().searchIcon,
                                children: [(0, _.jsx)("div", {
                                    className: a().search_icon_search_default
                                }), (0, _.jsx)("div", {
                                    className: a().search_icon_search_Hover
                                })]
                            }), (0, _.jsx)("input", {
                                className: a().searchInput,
                                type: "text",
                                placeholder: "".concat(u.formatMessage({
                                    id: "search",
                                    defaultMessage: "\u641C\u7D22"
                                })).concat(u.formatMessage({
                                    id: "equipment",
                                    defaultMessage: "\u5668\u6750"
                                })),
                                value: p,
                                onKeyDown: Y,
                                onBlur: G,
                                onChange: A
                            }), p && !y.Z.isSDK ? (0, _.jsx)("div", {
                                className: a().clearBtn,
                                onClick: () => {
                                    h(""), r("")
                                },
                                children: (0, _.jsx)("div", {
                                    className: a().clearIcon
                                })
                            }) : null, (0, _.jsx)("div", {
                                className: a().keyboardIconBtnWrap,
                                ref: d,
                                children: (0, _.jsx)(j.Z, {
                                    overlay: P,
                                    trigger: ["click"],
                                    overlayClassName: "".concat(a().dropDown, " ").concat(y.Z.isSDK && H.equipmentLineColumn ? a().dropDown_1 : a().dropDown_2),
                                    placement: "bottomRight",
                                    visible: g,
                                    children: (0, _.jsxs)("div", {
                                        className: a().keyboardIconBtn,
                                        onClick: () => {
                                            v(!g)
                                        },
                                        children: [(0, _.jsx)("div", {
                                            className: a().icon_keyboard_def
                                        }), (0, _.jsx)("div", {
                                            className: a().icon_keyboard_hov
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                },
                B = (0, i.$j)(o => {
                    var r = o.sdkModel;
                    return {
                        sdkModel: r
                    }
                })(O)
        }
    }
]);