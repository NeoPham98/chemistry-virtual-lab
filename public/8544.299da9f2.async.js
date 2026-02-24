(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [8544], {
        52267: function(b) {
            b.exports = {
                headerRight: "headerRight___378Cu",
                float: "float___JpRuT",
                circuit: "circuit___2dEM9",
                dis: "dis___2T1E8",
                table: "table___20m8L",
                setting: "setting___1LCGN",
                show: "show___Qzz8S",
                preview: "preview___2fY5V",
                equation: "equation___1VoyA",
                share: "share___MctZ1",
                icon: "icon___1nNK_",
                bottom_icon_pen_default: "bottom_icon_pen_default___2YY37",
                bottom_icon_pen_hover: "bottom_icon_pen_hover___2QtxF",
                bottom_icon_pen_pressed: "bottom_icon_pen_pressed___3TgvF",
                "header-back-hover": "header-back-hover___1oyvT",
                "header-back": "header-back___2NZRf",
                "header-clone-hover": "header-clone-hover___3W_1m",
                "header-clone": "header-clone___32O1A",
                "header-edit-default": "header-edit-default___h_n0g",
                "header-edit-hover": "header-edit-hover___6apN0",
                "header-oshare-default": "header-oshare-default___1-4Xe",
                "header-oshare-hover": "header-oshare-hover___3F0Vb",
                "header-preview-default": "header-preview-default___2qhv8",
                "header-preview-hover": "header-preview-hover___37waV",
                "header-pub-default": "header-pub-default___28dU8",
                "header-pub-hover": "header-pub-hover___17j8K",
                icon_help_default: "icon_help_default___2x12u",
                icon_help_hover: "icon_help_hover___1PIbe",
                icon_help_pressed: "icon_help_pressed___1RqUB",
                icon_jianjie_def: "icon_jianjie_def___1KZK2",
                icon_jianjie_hov: "icon_jianjie_hov___33G0H",
                icon_jianjie_pre: "icon_jianjie_pre___2a1Nh",
                icon_shipin_def: "icon_shipin_def___23zBO",
                icon_shipin_hov: "icon_shipin_hov___3hSZ8",
                icon_shipin_pre: "icon_shipin_pre___1iuNe",
                menu_icon_gengduo_def: "menu_icon_gengduo_def___3GRrA",
                menu_icon_gengduo_hov: "menu_icon_gengduo_hov___23xy_",
                menu_icon_stopluzhi_def: "menu_icon_stopluzhi_def___2_zC5",
                menu_icon_stopluzhi_hov: "menu_icon_stopluzhi_hov___2Nuhs",
                shiyanxianshi: "shiyanxianshi___3PE-T",
                tongyongxianshi: "tongyongxianshi___2SqSF",
                toolbar_icon_back_default: "toolbar_icon_back_default___qid3S",
                toolbar_icon_back_hover: "toolbar_icon_back_hover___1Wj_U",
                toolbar_icon_del_default: "toolbar_icon_del_default___3Pk8X",
                toolbar_icon_del_hover: "toolbar_icon_del_hover___36p72",
                toolbar_icon_fangchengshi_default: "toolbar_icon_fangchengshi_default___1nYo8",
                toolbar_icon_fangchengshi_hover: "toolbar_icon_fangchengshi_hover___JQqKj",
                toolbar_icon_jietu_default: "toolbar_icon_jietu_default___3O629",
                toolbar_icon_jietu_hover: "toolbar_icon_jietu_hover___6RQZn",
                toolbar_icon_reset_default: "toolbar_icon_reset_default___2n2qf",
                toolbar_icon_reset_hover: "toolbar_icon_reset_hover___1q7-M",
                toolbar_icon_save_default: "toolbar_icon_save_default___3lnNR",
                toolbar_icon_save_hover: "toolbar_icon_save_hover___2AXJc",
                toolbar_icon_setting_default: "toolbar_icon_setting_default___1hOSr",
                toolbar_icon_setting_hover: "toolbar_icon_setting_hover___3EAls",
                toolbar_icon_yanshi_default: "toolbar_icon_yanshi_default___2Hx7e",
                toolbar_icon_yanshi_hover: "toolbar_icon_yanshi_hover___3wu8J",
                toolbar_icon_zuzhuang_default: "toolbar_icon_zuzhuang_default___2RU_B",
                toolbar_icon_zuzhuang_hover: "toolbar_icon_zuzhuang_hover___1JgbR",
                HeaderRightWrap: "HeaderRightWrap___1ysnp",
                chemSettingBox: "chemSettingBox___2BoVc",
                equationHover: "equationHover___SxeTs",
                equationActive: "equationActive___2VBal",
                previewHover: "previewHover___3M-sW",
                previewActive: "previewActive___2It-2",
                record: "record___sFEfE",
                role: "role___ylnIN",
                roleTop: "roleTop___2EI2V",
                roleBottom: "roleBottom___3DX59",
                settingHover: "settingHover___2PZNQ",
                settingActive: "settingActive___36KFK",
                shareHover: "shareHover___1mrE6",
                shareActive: "shareActive___Hiiu8",
                settingPopover: "settingPopover___2wJpo"
            }
        },
        28544: function(b, p, a) {
            "use strict";
            a.r(p);
            var q = a(20136),
                x = a(55241),
                m = a(2824),
                h = a(67294),
                H = a(52267),
                o = a.n(H),
                E = a(80125),
                s = a(11729),
                P = a(30911),
                R = a(30929),
                _ = a(85893),
                N = n => {
                    var l = n.chemHSingModel,
                        i = n.dispatch,
                        I = n.gradeId,
                        v = n.labId,
                        D = l.headerHandle,
                        u = l.commonSetting,
                        C = l.realSetting,
                        T = D.right,
                        B = (0, E.YB)(),
                        j = (0, h.useRef)(),
                        L = (0, h.useState)({}),
                        y = (0, m.Z)(L, 2),
                        U = y[0],
                        K = y[1],
                        z = (0, h.useState)({}),
                        M = (0, m.Z)(z, 2),
                        r = M[0],
                        O = M[1];
                    (0, h.useEffect)(() => {
                        K(C), O(u)
                    }, [u, C]);
                    var g = T.filter(e => e.grade === I - 1 || e.grade === 3);
                    g = g.filter(e => e.labIds.indexOf(v) !== -1);
                    var W = e => {
                            e.action ? i({
                                type: e.action,
                                payload: {
                                    dispatch: i
                                }
                            }) : console.log("action \u4E0D\u5B58\u5728\uFF0C\u8BF7\u5728vertuallab.phy.json\u4E2D\u6DFB\u52A0\u884C\u4E3A")
                        },
                        Z = e => {
                            i({
                                type: "chemHSingModel/settingChange",
                                payload: {
                                    data: e
                                }
                            })
                        },
                        w = (e, t) => {
                            if (t.command === "MENU_LOCATION") {
                                j.current.close(), n.menuPosChange && (n.menuPosChange(!t.checked), localStorage.setItem("nb_chemical_data", JSON.stringify({
                                    MENU_LOCATION: t.checked
                                })));
                                var c = function(d) {
                                    r[d] && r[d].list.some((S, A) => (S.command === "MENU_LOCATION" && (r[d].list[A].checked = Number(!r[d].list[A].checked)), S.command === "MENU_LOCATION"))
                                };
                                for (var f in r) c(f);
                                O(r)
                            }
                            i({
                                type: "chemHSingModel/settingChange",
                                payload: {
                                    data: t
                                }
                            })
                        },
                        V = e => {
                            i({
                                type: "chemHSingModel/settingChange",
                                payload: {
                                    data: {
                                        command: "backgroundColorImg",
                                        data: {
                                            colors: {
                                                arr: [e],
                                                direction: -1
                                            },
                                            textureSelected: 0
                                        }
                                    }
                                }
                            })
                        },
                        F = e => {
                            e && i({
                                type: "chemHSingModel/moduleSetting",
                                payload: {
                                    labId: v
                                }
                            })
                        },
                        J = () => {
                            i({
                                type: "equationModel/showEquation"
                            })
                        };
                    return (0, _.jsx)("div", {
                        className: o().headerRight,
                        children: (0, _.jsx)("div", {
                            className: o().HeaderRightWrap,
                            children: g.map(e => {
                                var t = null,
                                    c = B.formatMessage({
                                        id: e.lan_key,
                                        defaultMessage: e.name
                                    });
                                return e.key === "setting" ? t = (0, _.jsx)(x.Z, {
                                    placement: "bottomRight",
                                    ref: j,
                                    content: (0, _.jsx)(P.default, {
                                        labId: v,
                                        settings: r,
                                        realCheckData: U,
                                        settingChanged: f => {
                                            w(u, f)
                                        },
                                        tableChanged: Z,
                                        colorChanged: V
                                    }),
                                    onVisibleChange: F,
                                    trigger: "click",
                                    arrowPointAtCenter: !0,
                                    zIndex: 660,
                                    overlayClassName: o().settingPopover,
                                    children: (0, _.jsx)(s.Z, {
                                        hover: o()["".concat(e.key, "Hover")],
                                        active: "".concat(o()[e.key], "Active"),
                                        children: (0, _.jsxs)("div", {
                                            className: o()[e.key],
                                            children: [(0, _.jsx)("div", {
                                                className: o().icon
                                            }), (0, _.jsx)("div", {
                                                children: c
                                            })]
                                        })
                                    }, e.key)
                                }) : e.key === "equation" ? R.Z.isLoadZH && (t = (0, _.jsx)(_.Fragment, {
                                    children: (0, _.jsx)(s.Z, {
                                        hover: o()["".concat(e.key, "Hover")],
                                        active: "".concat(o()[e.key], "Active"),
                                        children: (0, _.jsxs)("div", {
                                            className: o()[e.key],
                                            onClick: J,
                                            children: [(0, _.jsx)("div", {
                                                className: o().icon
                                            }), (0, _.jsx)("div", {
                                                children: c
                                            })]
                                        }, e.key)
                                    })
                                })) : t = (0, _.jsx)(s.Z, {
                                    hover: o()["".concat(e.key, "Hover")],
                                    active: "".concat(o()[e.key], "Active"),
                                    children: (0, _.jsxs)("div", {
                                        className: o()[e.key],
                                        onClick: () => W(e),
                                        children: [(0, _.jsx)("div", {
                                            className: o().icon
                                        }), (0, _.jsx)("div", {
                                            children: c
                                        })]
                                    })
                                }), (0, _.jsx)("div", {
                                    children: t
                                }, e.key)
                            })
                        })
                    })
                },
                k = n => {
                    var l = n.chemHSingModel;
                    return {
                        chemHSingModel: l
                    }
                };
            p.default = (0, E.$j)(k)(N)
        }
    }
]);