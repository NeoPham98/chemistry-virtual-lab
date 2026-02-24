(self.webpackChunkvirtuallab = self.webpackChunkvirtuallab || []).push([
    [3050], {
        57145: function(V) {
            V.exports = {
                compCon: "compCon___R-w39",
                videoBox: "videoBox___34G7Y",
                miniProgramVideo: "miniProgramVideo___1qWS1",
                videoCloseBtn: "videoCloseBtn___2UsfJ",
                videoBg: "videoBg___28A8j"
            }
        },
        83050: function(V, x, i) {
            "use strict";
            i.r(x);
            var f = i(39428),
                w = i(3182),
                D = i(2824),
                y = i(30929),
                I = i(98765),
                F = i(15936),
                N = i(51035),
                s = i(67294),
                k = i(80125),
                z = i(57145),
                M = i.n(z),
                d = i(85893),
                H = o => {
                    var _ = o.videoInfoModel,
                        C = o.firstVideo,
                        R = o.closeTrack,
                        v = o.dispatch,
                        b = o.labGuidanceModel,
                        h = o.sdkModel,
                        u = _.videoData,
                        S = _.introData,
                        g = _.showVideo,
                        O = _.showIntro,
                        J = _.openStepVideo,
                        X = b != null ? b : {},
                        B = X.show,
                        Q = (0, s.useState)([null, null, null, null]),
                        T = (0, D.Z)(Q, 2),
                        $ = T[0],
                        q = T[1],
                        ee = (0, s.useState)({
                            x: 0,
                            y: 0
                        }),
                        Z = (0, D.Z)(ee, 2),
                        W = Z[0],
                        A = Z[1],
                        te = (0, s.useState)(!0),
                        K = (0, D.Z)(te, 2),
                        ne = K[0],
                        ie = K[1],
                        oe = (0, s.useState)(null),
                        U = (0, D.Z)(oe, 2),
                        E = U[0],
                        ae = U[1],
                        G = (0, s.useRef)(!1),
                        p = () => {
                            if (!o.isDestroy) try {
                                var l = (0, N.R2)(1) || {
                                        x: 0,
                                        y: 0,
                                        width: document.body.clientWidth,
                                        height: document.body.clientHeight
                                    },
                                    e = l.x,
                                    a = l.y,
                                    r = l.width,
                                    t = l.height;
                                A({
                                    x: document.body.clientWidth - 412,
                                    y: 160
                                }), q([e, r - 600, a, t - 400])
                            } catch (c) {
                                console.log(c)
                            }
                        },
                        m = (0, s.useRef)(null),
                        j = (0, s.useRef)(null),
                        P = F.Z.isMobile(),
                        L = () => {
                            E == null || E.pause(), v({
                                type: "videoInfoModel/closeVideo"
                            })
                        },
                        le = function() {
                            var l = (0, w.Z)((0, f.Z)().mark(function e() {
                                var a, r, t;
                                return (0, f.Z)().wrap(function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (!P) {
                                                n.next = 3;
                                                break
                                            }
                                            return L(), n.abrupt("return");
                                        case 3:
                                            return n.next = 5, m.current.getVideoPlayer();
                                        case 5:
                                            a = n.sent, r = a.duration(), t = a.currentTime(), J ? v({
                                                type: "videoInfoModel/closeStepVideo",
                                                payload: {
                                                    duration: r,
                                                    currentTime: t
                                                }
                                            }) : R({
                                                duration: r,
                                                currentTime: t
                                            }), v({
                                                type: "videoInfoModel/closeVideo"
                                            });
                                        case 10:
                                        case "end":
                                            return n.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return l.apply(this, arguments)
                            }
                        }(),
                        re = () => {
                            v({
                                type: "videoInfoModel/showIntro"
                            })
                        },
                        se = () => {
                            v({
                                type: "videoInfoModel/updateState",
                                payload: {
                                    showIntro: !1,
                                    introData: null
                                }
                            })
                        };
                    (0, s.useEffect)(() => {
                        console.log("showLabGuidance", B), B ? A({
                            x: 0,
                            y: 0
                        }) : p()
                    }, [B]);
                    var de = function() {
                        var l = (0, w.Z)((0, f.Z)().mark(function e() {
                            var a, r, t;
                            return (0, f.Z)().wrap(function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (E) {
                                            n.next = 9;
                                            break
                                        }
                                        return n.next = 3, i.e(3452).then(i.t.bind(i, 93452, 23));
                                    case 3:
                                        a = n.sent, r = a.default, t = new r({
                                            el: m.current,
                                            url: u.src,
                                            lang: "zh-cn",
                                            playsinline: !0,
                                            autoplay: !0,
                                            ignores: ["fullscreen"]
                                        }), ae(t), n.next = 10;
                                        break;
                                    case 9:
                                        E.play();
                                    case 10:
                                    case "end":
                                        return n.stop()
                                }
                            }, e)
                        }));
                        return function() {
                            return l.apply(this, arguments)
                        }
                    }();
                    (0, s.useEffect)(() => {
                        m.current && u && g && (P && !h.videoFloatWinOnMobile ? de() : m.current.play())
                    }, [g]), (0, s.useEffect)(() => (window.addEventListener("resize", p), p(), () => {
                        window.removeEventListener("resize", p)
                    }), []), (0, s.useEffect)(() => {
                        u && C && ne && (C(), ie(!1))
                    }, [u]);
                    var ue = function() {
                            var l = (0, w.Z)((0, f.Z)().mark(function e() {
                                var a;
                                return (0, f.Z)().wrap(function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return a = j.current, p(), a.show(), t.next = 5, v({
                                                type: "videoInfoModel/updateState",
                                                payload: {
                                                    introDom: a
                                                }
                                            });
                                        case 5:
                                            return t.next = 7, v({
                                                type: "videoInfoModel/introDomSetData",
                                                payload: {
                                                    data: S
                                                }
                                            });
                                        case 7:
                                            return t.next = 9, v({
                                                type: "spinModel/show",
                                                payload: !1
                                            });
                                        case 9:
                                        case "end":
                                            return t.stop()
                                    }
                                }, e)
                            }));
                            return function() {
                                return l.apply(this, arguments)
                            }
                        }(),
                        ve = () => {
                            if (!u) return null;
                            if (P && !h.videoFloatWinOnMobile) return (0, d.jsxs)("div", {
                                className: M().videoBox,
                                style: {
                                    display: g ? "block" : "none"
                                },
                                children: [(0, d.jsx)("div", {
                                    ref: m,
                                    className: M().miniProgramVideo
                                }), (0, d.jsx)("div", {
                                    className: M().videoBg,
                                    onPointerDown: () => {
                                        L()
                                    }
                                }), (0, d.jsx)("div", {
                                    className: M().videoCloseBtn,
                                    onTouchStart: n => {
                                        n.stopPropagation(), L()
                                    },
                                    children: (0, d.jsx)("svg", {
                                        width: "11",
                                        height: "11",
                                        viewBox: "0 0 11 11",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: (0, d.jsx)("path", {
                                            fillRule: "evenodd",
                                            clipRule: "evenodd",
                                            d: "M4.79293 5.50004L1.00004 1.70714C0.804776 1.51188 0.804776 1.1953 1.00004 1.00004C1.1953 0.804776 1.51188 0.804775 1.70714 1.00004L5.50004 4.79293L9.29293 1.00004C9.48819 0.804776 9.80478 0.804776 10 1.00004C10.1953 1.1953 10.1953 1.51188 10 1.70714L6.20714 5.50004L10 9.29293C10.1953 9.48819 10.1953 9.80478 10 10C9.80478 10.1953 9.48819 10.1953 9.29293 10L5.50004 6.20714L1.70714 10C1.51188 10.1953 1.1953 10.1953 1.00004 10C0.804776 9.80478 0.804775 9.48819 1.00004 9.29293L4.79293 5.50004Z",
                                            fill: "white"
                                        })
                                    })
                                })]
                            });
                            var l = {};
                            if (y.Z.isSDK) {
                                var e, a, r, t, c;
                                l = (e = (a = o.sdkModel) === null || a === void 0 || (r = a.css) === null || r === void 0 || (t = r.video) === null || t === void 0 || (c = t.floatVideo) === null || c === void 0 ? void 0 : c.closeBtn) !== null && e !== void 0 ? e : {}
                            }
                            return (0, d.jsx)(I._k, {
                                style: {
                                    display: g ? "" : "none"
                                },
                                closeBtnStyle: l,
                                videotitle: u.title,
                                videosrc: u.src,
                                marks: u.marks,
                                width: o.isPlayer ? 730 : 412,
                                height: o.isPlayer ? 500 : 326,
                                autocenter: o.isPlayer,
                                defaultX: W.x,
                                defaultY: W.y,
                                autoplay: !0,
                                hidefullscreen: h.videoFullScreenBtnHidden,
                                onClose: le,
                                ref: m
                            }, u.src)
                        },
                        _e = () => {
                            if (!S) return null;
                            if (P && (!y.Z.isSDK || y.Z.isSDK && /(false|0)/.test(h.introEditorRichReadOnMobile))) {
                                var l = y.Z.isSDK && h.title || "";
                                return O ? (0, d.jsx)(I.Gv, {
                                    titlename: l,
                                    data: S,
                                    rect: {
                                        width: window.innerWidth,
                                        height: window.innerHeight
                                    },
                                    onClosed: se
                                }) : ""
                            }
                            if (!G.current && O) {
                                G.current = !0;
                                var e = j.current;
                                e != null && e.freshView && e.freshView()
                            }
                            return (0, d.jsx)(I.bi, {
                                ckpath: "assets/ckeditor",
                                autohide: !0,
                                dragRect: $,
                                mode: o.isPlayer || y.Z.isSDK && P && /(true|1)/.test(h.introEditorRichReadOnMobile) ? 2 : 1,
                                style: {
                                    display: O ? "" : "none"
                                },
                                onInited: ue,
                                onClosed: re,
                                ref: j
                            })
                        };
                    return (0, d.jsxs)("div", {
                        className: M().compCon,
                        children: [ve(), _e()]
                    })
                },
                Y = o => {
                    var _ = o.videoInfoModel,
                        C = o.labGuidanceModel,
                        R = o.sdkModel;
                    return {
                        videoInfoModel: _,
                        labGuidanceModel: C,
                        sdkModel: R
                    }
                };
            x.default = (0, k.$j)(Y)(H)
        }
    }
]);