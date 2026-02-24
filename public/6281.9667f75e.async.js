(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [6281], {
        2523: function(q) {
            q.exports = {
                equipment_icon_aid_click: "equipment_icon_aid_click___1pH8e",
                equipment_icon_aid_default: "equipment_icon_aid_default___2n_yg",
                equipment_icon_aid_hover: "equipment_icon_aid_hover___1s0zZ",
                equipment_icon_electro_electrode_click: "equipment_icon_electro_electrode_click___1812B",
                equipment_icon_electro_electrode_default: "equipment_icon_electro_electrode_default___2W76d",
                equipment_icon_electro_eq_click: "equipment_icon_electro_eq_click___1KulU",
                equipment_icon_electro_eq_default: "equipment_icon_electro_eq_default___AHpf-",
                equipment_icon_electro_gas_click: "equipment_icon_electro_gas_click___1etTK",
                equipment_icon_electro_gas_default: "equipment_icon_electro_gas_default___9r9_c",
                equipment_icon_electro_liquid_click: "equipment_icon_electro_liquid_click___eTZOc",
                equipment_icon_electro_liquid_default: "equipment_icon_electro_liquid_default___1Iuw9",
                equipment_icon_gas_click: "equipment_icon_gas_click___1ds4J",
                equipment_icon_gas_default: "equipment_icon_gas_default___2OdR1",
                equipment_icon_gas_hover: "equipment_icon_gas_hover___3oEh_",
                equipment_icon_liquid_click: "equipment_icon_liquid_click___3aRB1",
                equipment_icon_liquid_default: "equipment_icon_liquid_default___8JP0W",
                equipment_icon_liquid_hover: "equipment_icon_liquid_hover___3Y-HU",
                equipment_icon_open_default: "equipment_icon_open_default___3mTRT",
                "equipment_icon_put-away_default": "equipment_icon_put-away_default___3dLyQ",
                equipment_icon_reactor_click: "equipment_icon_reactor_click___3qaI9",
                equipment_icon_reactor_default: "equipment_icon_reactor_default___26kyN",
                equipment_icon_reactor_hover: "equipment_icon_reactor_hover___1MMRo",
                equipment_icon_solid_click: "equipment_icon_solid_click___2PzY5",
                equipment_icon_solid_default: "equipment_icon_solid_default___2r5Kz",
                equipment_icon_solid_hover: "equipment_icon_solid_hover___tZWrK",
                icon_keyboard_def: "icon_keyboard_def___3Ge7m",
                icon_keyboard_hov: "icon_keyboard_hov___2IMSe",
                lock: "lock___225Zb",
                qicaiku_button_back_default: "qicaiku_button_back_default___1OwYk",
                qicaiku_button_back_pressed: "qicaiku_button_back_pressed___yhXfH",
                qicaiku_button_default: "qicaiku_button_default___1GQC0",
                qicaiku_button_hover: "qicaiku_button_hover___3glnu",
                qicaiku_button_pressed: "qicaiku_button_pressed___3u2Fy",
                search_icon_line_default: "search_icon_line_default___3n7jP",
                search_icon_search_Hover: "search_icon_search_Hover___o9tzJ",
                search_icon_search_default: "search_icon_search_default___2s9dC",
                tanchuang_close: "tanchuang_close___EIqBW",
                tabClass: "tabClass___UvpKc",
                hover: "hover___3U0d4",
                active: "active___K4m3G"
            }
        },
        36281: function(q, p, _) {
            "use strict";
            _.r(p);
            var h = _(2824),
                f = _(39768),
                s = _(67294),
                v = _(80125),
                k = _(2523),
                a = _.n(k),
                e = _(85893),
                b = i => {
                    var t = i.data,
                        r = i.isAcitve,
                        u = i.change,
                        d = (0, v.YB)(),
                        n = (0, s.useRef)(null),
                        o = "equipment_icon_".concat(t.className),
                        l = {
                            default: a()["".concat(o, "_default")],
                            hover: a()["".concat(o, "_click")]
                        },
                        m = {
                            default: "",
                            hover: a().hover,
                            active: a().active
                        };
                    return (0, e.jsx)("li", {
                        ref: n,
                        onPointerDown: () => u(t.className),
                        children: (0, e.jsxs)("dl", {
                            children: [(0, e.jsx)("dt", {
                                children: (0, e.jsx)(f.Z, {
                                    statuss: l,
                                    forStatuss: m,
                                    isAcitve: r,
                                    for: n.current
                                })
                            }), (0, e.jsx)("dd", {
                                children: d.formatMessage({
                                    id: t.className,
                                    defaultMessage: t.toolsName
                                })
                            })]
                        })
                    }, t.className)
                },
                E = i => {
                    var t = i.data,
                        r = i.change,
                        u = i.selectClass,
                        d = (0, s.useState)([]),
                        n = (0, h.Z)(d, 2),
                        o = n[0],
                        l = n[1];
                    (0, s.useEffect)(() => l(u), [u]);
                    var m = c => {
                        c !== o && (l(c), r(c))
                    };
                    return (0, e.jsx)("div", {
                        className: a().tabClass,
                        children: (0, e.jsx)("ul", {
                            children: t.map(c => (0, e.jsx)(b, {
                                data: c,
                                isAcitve: o === c.className,
                                change: m
                            }, c.className))
                        })
                    })
                };
            p.default = (0, v.$j)()(E)
        }
    }
]);