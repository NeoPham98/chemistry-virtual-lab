(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [2375], {
        10927: function(n) {
            n.exports = {
                equipment_icon_aid_click: "equipment_icon_aid_click___WKQxZ",
                equipment_icon_aid_default: "equipment_icon_aid_default___MPs_B",
                equipment_icon_aid_hover: "equipment_icon_aid_hover___2g-Wr",
                equipment_icon_electro_electrode_click: "equipment_icon_electro_electrode_click___2h8hs",
                equipment_icon_electro_electrode_default: "equipment_icon_electro_electrode_default___5jKBT",
                equipment_icon_electro_eq_click: "equipment_icon_electro_eq_click___GwonY",
                equipment_icon_electro_eq_default: "equipment_icon_electro_eq_default___3WJ2p",
                equipment_icon_electro_gas_click: "equipment_icon_electro_gas_click___2QiJ0",
                equipment_icon_electro_gas_default: "equipment_icon_electro_gas_default___J7kJ4",
                equipment_icon_electro_liquid_click: "equipment_icon_electro_liquid_click___3MSYW",
                equipment_icon_electro_liquid_default: "equipment_icon_electro_liquid_default___3JT0d",
                equipment_icon_gas_click: "equipment_icon_gas_click___2jFXd",
                equipment_icon_gas_default: "equipment_icon_gas_default___1_qbw",
                equipment_icon_gas_hover: "equipment_icon_gas_hover___rC-6U",
                equipment_icon_liquid_click: "equipment_icon_liquid_click___N5HLa",
                equipment_icon_liquid_default: "equipment_icon_liquid_default___2urK-",
                equipment_icon_liquid_hover: "equipment_icon_liquid_hover___Y0CsQ",
                equipment_icon_open_default: "equipment_icon_open_default___3_a1a",
                "equipment_icon_put-away_default": "equipment_icon_put-away_default___1SHxy",
                equipment_icon_reactor_click: "equipment_icon_reactor_click___23J6K",
                equipment_icon_reactor_default: "equipment_icon_reactor_default___g5F3B",
                equipment_icon_reactor_hover: "equipment_icon_reactor_hover___1fUdv",
                equipment_icon_solid_click: "equipment_icon_solid_click___1GJ4c",
                equipment_icon_solid_default: "equipment_icon_solid_default___3NrBQ",
                equipment_icon_solid_hover: "equipment_icon_solid_hover___1BqmT",
                icon_keyboard_def: "icon_keyboard_def___23e0M",
                icon_keyboard_hov: "icon_keyboard_hov___1fniq",
                lock: "lock___2rDz_",
                qicaiku_button_back_default: "qicaiku_button_back_default___3OkDA",
                qicaiku_button_back_pressed: "qicaiku_button_back_pressed___3d46F",
                qicaiku_button_default: "qicaiku_button_default___3cCz4",
                qicaiku_button_hover: "qicaiku_button_hover___202IL",
                qicaiku_button_pressed: "qicaiku_button_pressed___urnvD",
                search_icon_line_default: "search_icon_line_default___Y0CHD",
                search_icon_search_Hover: "search_icon_search_Hover___3wL44",
                search_icon_search_default: "search_icon_search_default___BP3rG",
                tanchuang_close: "tanchuang_close___w72aj",
                item: "item___1thvy",
                lockWrap: "lockWrap___18q_Z",
                lockWrap_Second: "lockWrap_Second___Mvwyf",
                hover: "hover___3bZcR",
                img_wrap: "img_wrap___3cryq",
                img: "img___14Shq",
                h5: "h5___1kqNt",
                threeModel: "threeModel___x7jqF",
                eqAnimationLeft: "eqAnimationLeft___3ouY0",
                eqRotate: "eqRotate___3m7X0",
                eqAnimationRight: "eqAnimationRight___3Uqkn"
            }
        },
        84386: function(n) {
            n.exports = {
                wrap: "wrap___1DjSN",
                messTitle: "messTitle___1U67B",
                mess1: "mess1___3sJcf",
                mess2: "mess2___C6_Ys",
                compHide: "compHide___2b6B3"
            }
        },
        21750: function(n, i, _) {
            "use strict";
            var a = _(89032),
                r = _(15746),
                s = _(30929),
                D = _(11729),
                g = _(67294),
                q = _(10927),
                t = _.n(q),
                e = _(85893),
                o = c => {
                    var l = c.data,
                        d = c.dataIndex,
                        m = c.showLock,
                        v = c.disabled,
                        C = c.boomStart,
                        p = c.parentStyle,
                        u = c.equipmentLineColumn,
                        E = u === void 0 ? !1 : u,
                        M = l.bgImgUrl,
                        f = l.isLock,
                        x = l.isFreeEq,
                        k = l.iconPngData,
                        P = l.is3d,
                        W = P === void 0 ? !1 : P,
                        O = h => {
                            s.Z.isSDK || (h.target.manunalToggleLogin = !0)
                        },
                        B = ["Left", "Right"],
                        I = (0, e.jsxs)("svg", {
                            className: "threeModel",
                            width: "18",
                            height: "10",
                            viewBox: "0 0 18 10",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [(0, e.jsx)("path", {
                                d: "M0 1C0 0.447715 0.447715 0 1 0H14C16.2091 0 18 1.79086 18 4V9C18 9.55228 17.5523 10 17 10H4C1.79086 10 0 8.20914 0 6V1Z",
                                fill: "url(#paint0_linear_3534_35902)",
                                fillOpacity: "0.9"
                            }), (0, e.jsx)("path", {
                                d: "M6.17866 2.176C6.75466 2.176 7.22666 2.312 7.57866 2.592C7.92266 2.872 8.09866 3.256 8.09866 3.752C8.09866 4.376 7.77866 4.792 7.14666 5C7.48266 5.104 7.74666 5.256 7.92266 5.464C8.11466 5.68 8.21066 5.96 8.21066 6.296C8.21066 6.824 8.02666 7.256 7.65866 7.592C7.27466 7.936 6.77066 8.112 6.14666 8.112C5.55466 8.112 5.07466 7.96 4.71466 7.656C4.31466 7.32 4.09066 6.824 4.04266 6.184H4.99466C5.01066 6.552 5.12266 6.84 5.34666 7.04C5.54666 7.224 5.81066 7.32 6.13866 7.32C6.49866 7.32 6.78666 7.216 6.99466 7.016C7.17866 6.832 7.27466 6.608 7.27466 6.336C7.27466 6.008 7.17066 5.768 6.97866 5.616C6.78666 5.456 6.50666 5.384 6.13866 5.384H5.73866V4.68H6.13866C6.47466 4.68 6.73066 4.608 6.90666 4.464C7.07466 4.32 7.16266 4.104 7.16266 3.824C7.16266 3.544 7.08266 3.336 6.93066 3.192C6.76266 3.048 6.51466 2.976 6.18666 2.976C5.85066 2.976 5.59466 3.056 5.41066 3.224C5.21866 3.392 5.10666 3.648 5.07466 3.992H4.15466C4.20266 3.416 4.41066 2.968 4.79466 2.648C5.15466 2.328 5.61866 2.176 6.17866 2.176ZM9.07953 2.288H11.1675C12.0955 2.288 12.7915 2.544 13.2715 3.056C13.7275 3.536 13.9595 4.232 13.9595 5.144C13.9595 6.048 13.7275 6.744 13.2715 7.232C12.7915 7.744 12.0955 8 11.1675 8H9.07953V2.288ZM10.0155 3.088V7.2H10.9915C11.7035 7.2 12.2235 7.032 12.5515 6.704C12.8715 6.368 13.0315 5.848 13.0315 5.144C13.0315 4.424 12.8715 3.896 12.5515 3.576C12.2235 3.248 11.7035 3.088 10.9915 3.088H10.0155Z",
                                fill: "white"
                            }), (0, e.jsx)("defs", {
                                children: (0, e.jsxs)("linearGradient", {
                                    id: "paint0_linear_3534_35902",
                                    x1: "8.5",
                                    y1: "10",
                                    x2: "8.5",
                                    y2: "1.01331e-07",
                                    gradientUnits: "userSpaceOnUse",
                                    children: [(0, e.jsx)("stop", {
                                        stopColor: "#FF8A58"
                                    }), (0, e.jsx)("stop", {
                                        offset: "1",
                                        stopColor: "#FFE350"
                                    })]
                                })
                            })]
                        }),
                        L = !W || s.Z.isSDK || !s.Z.isLoadZH || window.__testConfig_hide3D;
                    return (0, e.jsx)(r.Z, {
                        "data-testid": "item_col",
                        span: E ? 24 : 12,
                        style: {
                            height: "116px",
                            marginBottom: "10px",
                            pointerEvents: v ? "none" : "auto"
                        },
                        onTouchStart: h => {
                            O(h)
                        },
                        onMouseDown: h => {
                            O(h)
                        },
                        children: (0, e.jsxs)(D.Z, {
                            "data-testid": "item_btn",
                            className: "".concat(t().item, " ").concat(p),
                            hover: t().hover,
                            "data-index": d,
                            children: [f === !1 || x || !m ? null : (0, e.jsx)("div", {
                                "data-testid": "lock-icon",
                                className: "".concat(t().lockWrap, " ").concat(L ? "" : t().lockWrap_Second),
                                children: (0, e.jsx)("div", {
                                    className: t().lock
                                })
                            }), L ? null : (0, e.jsx)("div", {
                                "data-testid": "lock-icon",
                                className: t().lockWrap,
                                children: (0, e.jsx)("span", {
                                    className: t().threeModel,
                                    children: I
                                })
                            }), (0, e.jsx)("div", {
                                className: t().img_wrap,
                                children: (0, e.jsx)("div", {
                                    "data-testid": "boom_start",
                                    className: "".concat(t().img, "  ").concat(C ? t()["eqAnimation".concat(B[Math.round(Math.random())])] : ""),
                                    style: {
                                        background: "url(".concat(M, ") no-repeat -").concat(k.x, "px -").concat(k.y, "px")
                                    }
                                })
                            }), (0, e.jsx)("h5", {
                                className: t().h5,
                                children: l.name
                            })]
                        })
                    })
                };
            i.Z = o
        },
        12375: function(n, i, _) {
            "use strict";
            _.r(i);
            var a = _(13062),
                r = _(71230),
                s = _(30929),
                D = _(67294),
                g = _(80125),
                q = _(21750),
                t = _(84386),
                e = _.n(t),
                o = _(85893),
                c = d => {
                    var m = d.equipmentLibraryModel,
                        v = d.showLock,
                        C = d.jumpClickModule,
                        p = m.otherList;
                    return s.Z.isSDK ? "" : (0, o.jsx)("div", {
                        "data-testid": "en_wrap",
                        className: "".concat(e().wrap, " ").concat(p.length === 0 ? e().compHide : ""),
                        children: p.map((u, E) => (0, o.jsxs)("div", {
                            children: [(0, o.jsxs)("div", {
                                className: e().messTitle,
                                children: [(0, o.jsx)("span", {
                                    className: e().mess1,
                                    children: u.message
                                }), (0, o.jsx)("span", {
                                    "data-testid": "test-mess2",
                                    className: e().mess2,
                                    onClick: () => {
                                        C(u, p.length > 1)
                                    },
                                    children: u.btnMessage
                                })]
                            }), (0, o.jsx)(r.Z, {
                                style: {
                                    opacity: .2,
                                    width: "260px"
                                },
                                children: u.list.map((M, f) => (0, o.jsx)(q.Z, {
                                    data: M,
                                    dataIndex: E,
                                    showLock: v,
                                    disabled: !0
                                }, "_".concat(f.toString())))
                            })]
                        }, "_".concat(E.toString())))
                    })
                },
                l = d => {
                    var m = d.equipmentLibraryModel;
                    return {
                        equipmentLibraryModel: m
                    }
                };
            i.default = (0, g.$j)(l)(c)
        },
        15746: function(n, i, _) {
            "use strict";
            var a = _(21584);
            i.Z = a.Z
        },
        89032: function(n, i, _) {
            "use strict";
            var a = _(55450),
                r = _.n(a),
                s = _(6999)
        },
        71230: function(n, i, _) {
            "use strict";
            var a = _(92820);
            i.Z = a.Z
        },
        13062: function(n, i, _) {
            "use strict";
            var a = _(55450),
                r = _.n(a),
                s = _(6999)
        }
    }
]);