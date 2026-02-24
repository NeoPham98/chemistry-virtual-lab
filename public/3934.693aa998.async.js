(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [3934], {
        66954: function(m) {
            m.exports = {
                bottom_icon_pen_default: "bottom_icon_pen_default___1ULiM",
                bottom_icon_pen_hover: "bottom_icon_pen_hover___365xN",
                bottom_icon_pen_pressed: "bottom_icon_pen_pressed___3jDHC",
                "header-back-hover": "header-back-hover___s-TIf",
                "header-back": "header-back___1VKHs",
                "header-clone-hover": "header-clone-hover___2ynPG",
                "header-clone": "header-clone___2ckKK",
                "header-edit-default": "header-edit-default___XOO1s",
                "header-edit-hover": "header-edit-hover___XXAFi",
                "header-oshare-default": "header-oshare-default___1J2kC",
                "header-oshare-hover": "header-oshare-hover___1OGG2",
                "header-preview-default": "header-preview-default___1vENQ",
                "header-preview-hover": "header-preview-hover___32HoO",
                "header-pub-default": "header-pub-default___6j6CR",
                "header-pub-hover": "header-pub-hover___IdFWq",
                icon_help_default: "icon_help_default___XyABN",
                icon_help_hover: "icon_help_hover___302zQ",
                icon_help_pressed: "icon_help_pressed___2qTKy",
                icon_jianjie_def: "icon_jianjie_def___1waLP",
                icon_jianjie_hov: "icon_jianjie_hov___NZ8Sf",
                icon_jianjie_pre: "icon_jianjie_pre___d8yT9",
                icon_shipin_def: "icon_shipin_def___3d22J",
                icon_shipin_hov: "icon_shipin_hov___PIMBb",
                icon_shipin_pre: "icon_shipin_pre___1MDHm",
                menu_icon_gengduo_def: "menu_icon_gengduo_def___1NQaM",
                menu_icon_gengduo_hov: "menu_icon_gengduo_hov___3iVXi",
                menu_icon_stopluzhi_def: "menu_icon_stopluzhi_def___mv57Q",
                menu_icon_stopluzhi_hov: "menu_icon_stopluzhi_hov___2Eg2A",
                shiyanxianshi: "shiyanxianshi___3_ELD",
                tongyongxianshi: "tongyongxianshi___1HyEy",
                toolbar_icon_back_default: "toolbar_icon_back_default___3Zqt1",
                toolbar_icon_back_hover: "toolbar_icon_back_hover___3s_kY",
                toolbar_icon_del_default: "toolbar_icon_del_default___28MaN",
                toolbar_icon_del_hover: "toolbar_icon_del_hover___7q6lj",
                toolbar_icon_fangchengshi_default: "toolbar_icon_fangchengshi_default___3zv30",
                toolbar_icon_fangchengshi_hover: "toolbar_icon_fangchengshi_hover___2ECrc",
                toolbar_icon_jietu_default: "toolbar_icon_jietu_default___2zLmv",
                toolbar_icon_jietu_hover: "toolbar_icon_jietu_hover___23Nit",
                toolbar_icon_reset_default: "toolbar_icon_reset_default___1isv8",
                toolbar_icon_reset_hover: "toolbar_icon_reset_hover___17Zyr",
                toolbar_icon_save_default: "toolbar_icon_save_default___iOksf",
                toolbar_icon_save_hover: "toolbar_icon_save_hover___291sC",
                toolbar_icon_setting_default: "toolbar_icon_setting_default___2LcZ4",
                toolbar_icon_setting_hover: "toolbar_icon_setting_hover___FCmgm",
                toolbar_icon_yanshi_default: "toolbar_icon_yanshi_default___AjnhL",
                toolbar_icon_yanshi_hover: "toolbar_icon_yanshi_hover___Tgf6I",
                toolbar_icon_zuzhuang_default: "toolbar_icon_zuzhuang_default___3Oapm",
                toolbar_icon_zuzhuang_hover: "toolbar_icon_zuzhuang_hover___3u4Lu",
                rightCom: "rightCom___D8-Xz",
                baseBtn: "baseBtn___3LHoD",
                btnLabel: "btnLabel____gv_Y",
                btnActive: "btnActive___y333z",
                buttonGroup: "buttonGroup___ryMWk",
                info: "info___2J8WK",
                nbVideo: "nbVideo___1c9U-",
                nbIntro: "nbIntro___19cSc"
            }
        },
        83934: function(m, j, i) {
            "use strict";
            i.r(j);
            var t = i(30929),
                d = i(39768),
                S = i(67294),
                M = i(80125),
                B = i(66954),
                e = i.n(B),
                _ = i(85893),
                w = {
                    default: e().icon_guidance_hov,
                    hover: e().icon_guidance_hov,
                    active: e().icon_guidance_def
                },
                z = {
                    default: e().icon_guidance_def,
                    hover: e().icon_guidance_hov,
                    active: e().icon_guidance_def
                },
                y = {
                    default: e().icon_shipin_def,
                    hover: e().icon_shipin_hov,
                    active: e().icon_shipin_def
                },
                G = {
                    default: e().icon_shipin_hov,
                    hover: e().icon_shipin_hov,
                    active: e().icon_shipin_hov
                },
                R = {
                    default: e().icon_jianjie_def,
                    hover: e().icon_jianjie_hov,
                    active: e().icon_jianjie_def
                },
                Z = {
                    default: e().icon_jianjie_hov,
                    hover: e().icon_jianjie_hov,
                    active: e().icon_jianjie_hov
                },
                K = {
                    default: e().icon_prompt_default,
                    hover: e().icon_prompt_hover,
                    active: e().icon_prompt_hover
                },
                V = o => {
                    var c, l, s, n = o.dispatch,
                        f = o.courseId,
                        h = o.rightTopCModel,
                        a = o.sdkModel,
                        C = o.inResource,
                        $ = C === void 0 ? !1 : C,
                        k = o.isAnalysis,
                        v = k === void 0 ? !1 : k,
                        E = o.phyEffect,
                        U = E === void 0 ? !0 : E,
                        b = o.labGuidanceModel,
                        p = o.videoInfoModel,
                        I = o.guidanceClicked,
                        H = I === void 0 ? !1 : I,
                        x = o.guidanceShow,
                        X = x === void 0 ? !1 : x,
                        r = (0, M.YB)(),
                        u = "",
                        F = b != null ? b : {},
                        L = F.show,
                        Q = h.infoMess,
                        A = h.isGlow,
                        J = h.effect,
                        D = h.video,
                        N = p.showVideo,
                        O = p.openStepVideo,
                        P = p.showIntro;
                    if (t.Z.isPhysics ? u = "physicsModel" : u = "chemicalModel", t.Z.isSDK) {
                        var g;
                        D = a == null || (g = a.resModelData) === null || g === void 0 ? void 0 : g.video
                    }
                    var Y = () => {
                            n({
                                type: "videoInfoModel/showVideo",
                                payload: f
                            })
                        },
                        q = () => {
                            n({
                                type: "videoInfoModel/showFixedVideo",
                                payload: f
                            })
                        },
                        ee = () => {
                            n({
                                type: "videoInfoModel/showIntro",
                                payload: {
                                    courseId: f,
                                    inResource: $,
                                    subNamespace: u
                                }
                            })
                        },
                        _e = () => {
                            n({
                                type: "rightTopCModel/effectBtnClick",
                                payload: {
                                    subNamespace: u
                                }
                            })
                        },
                        T = () => {
                            n({
                                type: "labGuidanceModel/openGuidance"
                            })
                        };
                    (0, S.useEffect)(() => {
                        H && T()
                    }, []);
                    var oe = (c = a == null || (l = a.css) === null || l === void 0 || (s = l.info) === null || s === void 0 ? void 0 : s.hasEquipmentDrawer) !== null && c !== void 0 ? c : {};
                    return (0, _.jsx)("div", {
                        className: e().rightCom,
                        children: (0, _.jsxs)("div", {
                            children: [t.Z.isLoadZH && (0, _.jsxs)("div", {
                                className: e().buttonGroup,
                                children: [X ? (0, _.jsxs)("div", {
                                    className: e().baseBtn,
                                    onClick: T,
                                    children: [(0, _.jsx)(d.Z, {
                                        statuss: L ? w : z
                                    }), (0, _.jsx)("div", {
                                        className: "".concat(e().btnLabel, " ").concat(L ? e().btnActive : ""),
                                        children: r.formatMessage({
                                            id: "experiment_steps"
                                        })
                                    })]
                                }) : null, v ? (0, _.jsxs)("div", {
                                    className: e().baseBtn,
                                    onClick: q,
                                    children: [(0, _.jsx)(d.Z, {
                                        statuss: y
                                    }), (0, _.jsx)("div", {
                                        className: e().btnLabel,
                                        children: r.formatMessage({
                                            id: "do_and_see"
                                        })
                                    })]
                                }) : null, !v && D ? (0, _.jsxs)("div", {
                                    className: e().baseBtn,
                                    onClick: Y,
                                    children: [(0, _.jsx)(d.Z, {
                                        statuss: N && !O ? G : y
                                    }), (0, _.jsx)("div", {
                                        className: "".concat(e().btnLabel, " ").concat(N && !O ? e().btnActive : ""),
                                        children: r.formatMessage({
                                            id: "do_and_see"
                                        })
                                    })]
                                }) : null, v ? null : (0, _.jsxs)("div", {
                                    className: e().baseBtn,
                                    onClick: ee,
                                    children: [(0, _.jsx)(d.Z, {
                                        statuss: P ? Z : R
                                    }), (0, _.jsx)("div", {
                                        className: "".concat(e().btnLabel, " ").concat(P ? e().btnActive : ""),
                                        children: r.formatMessage({
                                            id: "experimental_report"
                                        })
                                    })]
                                }), t.Z.isPhysics && !v && J && U ? (0, _.jsxs)("div", {
                                    className: e().baseBtn,
                                    onClick: _e,
                                    children: [(0, _.jsx)(d.Z, {
                                        statuss: K,
                                        isAcitve: A
                                    }), (0, _.jsx)("div", {
                                        className: "".concat(e().btnLabel, " ").concat(A ? e().btnActive : ""),
                                        children: r.formatMessage({
                                            id: "interactive_hotspots"
                                        })
                                    })]
                                }) : null]
                            }), t.Z.isSDK && !a.infoVisible ? "" : (0, _.jsx)("pre", {
                                className: e().info,
                                style: oe,
                                dangerouslySetInnerHTML: {
                                    __html: Q
                                }
                            })]
                        })
                    })
                },
                W = o => {
                    var c = o.rightTopCModel,
                        l = o.labGuidanceModel,
                        s = o.videoInfoModel,
                        n = o.sdkModel;
                    return {
                        rightTopCModel: c,
                        labGuidanceModel: l,
                        videoInfoModel: s,
                        sdkModel: n
                    }
                };
            j.default = (0, M.$j)(W)(V)
        }
    }
]);