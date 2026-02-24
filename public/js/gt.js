(function(i, l) {
    "use strict";
    typeof module == "object" && typeof module.exports == "object" ? module.exports = i.document ? l(i, !0) : function(u) {
        if (!u.document) throw new Error("Geetest requires a window with a document");
        return l(u)
    } : l(i)
})(typeof window != "undefined" ? window : this, function(i, l) {
    "use strict";
    if (typeof i == "undefined") throw new Error("Geetest requires browser environment");
    var u = i.document,
        h = i.Math,
        x = u.getElementsByTagName("head")[0];

    function p(e) {
        this._obj = e
    }
    p.prototype = {
        _each: function(e) {
            var r = this._obj;
            for (var t in r) r.hasOwnProperty(t) && e(t, r[t]);
            return this
        }
    };

    function m(e) {
        var r = this;
        new p(e)._each(function(t, n) {
            r[t] = n
        })
    }
    m.prototype = {
        api_server: "api.geetest.com",
        protocol: "http://",
        type_path: "/gettype.php",
        fallback_config: {
            slide: {
                static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                type: "slide",
                slide: "/static/js/geetest.0.0.0.js"
            },
            fullpage: {
                static_servers: ["static.geetest.com", "dn-staticdown.qbox.me"],
                type: "fullpage",
                fullpage: "/static/js/fullpage.0.0.0.js"
            }
        },
        _get_fallback_config: function() {
            var e = this;
            return y(e.type) ? e.fallback_config[e.type] : e.new_captcha ? e.fallback_config.fullpage : e.fallback_config.slide
        },
        _extend: function(e) {
            var r = this;
            new p(e)._each(function(t, n) {
                r[t] = n
            })
        }
    };
    var k = function(e) {
            return typeof e == "number"
        },
        y = function(e) {
            return typeof e == "string"
        },
        G = function(e) {
            return typeof e == "boolean"
        },
        q = function(e) {
            return typeof e == "object" && e !== null
        },
        O = function(e) {
            return typeof e == "function"
        },
        f = {},
        c = {},
        S = function() {
            return parseInt(h.random() * 1e4) + new Date().valueOf()
        },
        w = function(e, r) {
            var t = u.createElement("script");
            t.charset = "UTF-8", t.async = !0, t.onerror = function() {
                r(!0)
            };
            var n = !1;
            t.onload = t.onreadystatechange = function() {
                !n && (!t.readyState || t.readyState === "loaded" || t.readyState === "complete") && (n = !0, setTimeout(function() {
                    r(!1)
                }, 0))
            }, t.src = e, x.appendChild(t)
        },
        R = function(e) {
            return e.replace(/^https?:\/\/|\/$/g, "")
        },
        U = function(e) {
            return e = e.replace(/\/+/g, "/"), e.indexOf("/") !== 0 && (e = "/" + e), e
        },
        z = function(e) {
            if (!e) return "";
            var r = "?";
            return new p(e)._each(function(t, n) {
                (y(n) || k(n) || G(n)) && (r = r + encodeURIComponent(t) + "=" + encodeURIComponent(n) + "&")
            }), r === "?" && (r = ""), r.replace(/&$/, "")
        },
        I = function(e, r, t, n) {
            r = R(r);
            var o = U(t) + z(n);
            return r && (o = e + r + o), o
        },
        g = function(e, r, t, n, o) {
            var a = function(s) {
                var _ = I(e, r[s], t, n);
                w(_, function(d) {
                    d ? s >= r.length - 1 ? o(!0) : a(s + 1) : o(!1)
                })
            };
            a(0)
        },
        L = function(e, r, t, n) {
            if (q(t.getLib)) {
                t._extend(t.getLib), n(t);
                return
            }
            if (t.offline) {
                n(t._get_fallback_config());
                return
            }
            var o = "geetest_" + S();
            i[o] = function(a) {
                a.status === "success" ? n(a.data) : a.status ? n(t._get_fallback_config()) : n(a), i[o] = void 0;
                try {
                    delete i[o]
                } catch (s) {}
            }, g(t.protocol, e, r, {
                gt: t.gt,
                callback: o
            }, function(a) {
                a && n(t._get_fallback_config())
            })
        },
        b = function(e, r) {
            var t = {
                networkError: "\u7F51\u7EDC\u9519\u8BEF"
            };
            if (typeof r.onError == "function") r.onError(t[e]);
            else throw new Error(t[e])
        },
        B = function() {
            return !!i.Geetest
        };
    B() && (c.slide = "loaded");
    var j = function(e, r) {
        var t = new m(e);
        e.https ? t.protocol = "https://" : e.protocol || (t.protocol = i.location.protocol + "//"), L([t.api_server || t.apiserver], t.type_path, t, function(n) {
            var o = n.type,
                a = function() {
                    t._extend(n), r(new i.Geetest(t))
                };
            f[o] = f[o] || [];
            var s = c[o] || "init";
            s === "init" ? (c[o] = "loading", f[o].push(a), g(t.protocol, n.static_servers || n.domains, n[o] || n.path, null, function(_) {
                if (_) c[o] = "fail", b("networkError", t);
                else {
                    c[o] = "loaded";
                    for (var d = f[o], v = 0, D = d.length; v < D; v = v + 1) {
                        var E = d[v];
                        O(E) && E()
                    }
                    f[o] = []
                }
            })) : s === "loaded" ? a() : s === "fail" ? b("networkError", t) : s === "loading" && f[o].push(a)
        })
    };
    return i.initGeetest = j, j
});