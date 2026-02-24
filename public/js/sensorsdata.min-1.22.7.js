(function(A, Z) {
    typeof exports == "object" && typeof module == "object" ? module.exports = Z() : Z()
})(this, function() {
    function A(e) {
        if (!e) return !1;
        var t = Object.prototype.toString.call(e);
        return t == "[object Function]" || t == "[object AsyncFunction]"
    }

    function Z() {
        return Date.now && A(Date.now) ? Date.now() : new Date().getTime()
    }

    function d(e) {
        return e != null && Object.prototype.toString.call(e) == "[object Object]"
    }

    function te() {
        if (typeof Uint32Array == "function") {
            var e = "";
            if (typeof crypto != "undefined" ? e = crypto : typeof msCrypto != "undefined" && (e = msCrypto), d(e) && e.getRandomValues) {
                var t = new Uint32Array(1),
                    r = e.getRandomValues(t)[0],
                    i = Math.pow(2, 32);
                return r / i
            }
        }
        return xr(1e19) / 1e19
    }

    function q(e) {
        var t = null;
        try {
            t = JSON.parse(e)
        } catch (r) {}
        return t
    }

    function Xe(e, t) {
        this.lockGetPrefix = e || "lock-get-prefix", this.lockSetPrefix = t || "lock-set-prefix"
    }

    function gt(e) {
        return typeof e == "function" || !(!e || typeof e != "object") && gt(e.listener)
    }

    function ce() {
        this._events = {}
    }

    function Se(e) {
        var t = e;
        try {
            t = decodeURIComponent(e)
        } catch (r) {
            t = e
        }
        return t
    }

    function Ze(e) {
        e = e || "";
        for (var t = {}, r = e.substring(1), i = r.split("&"), a = 0; a < i.length; a++) {
            var s = i[a].indexOf("=");
            if (s !== -1) {
                var u = i[a].substring(0, s),
                    c = i[a].substring(s + 1);
                u = Se(u), c = Se(c), t[u] = c
            }
        }
        return t
    }

    function w(e) {
        return Object.prototype.toString.call(e) == "[object String]"
    }

    function ie(e) {
        return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function ht(e) {
        var t = function(r) {
            this._fields = {
                Username: 4,
                Password: 5,
                Port: 7,
                Protocol: 2,
                Host: 6,
                Path: 8,
                URL: 0,
                QueryString: 9,
                Fragment: 10
            }, this._values = {}, this._regex = /^((\w+):\/\/)?((\w+):?(\w+)?@)?([^\/\?:]+):?(\d+)?(\/?[^\?#]+)?\??([^#]+)?#?(\w*)/, typeof r != "undefined" && this._parse(r)
        };
        return t.prototype.setUrl = function(r) {
            this._parse(r)
        }, t.prototype._initValues = function() {
            for (var r in this._fields) this._values[r] = ""
        }, t.prototype.addQueryString = function(r) {
            if (typeof r != "object") return !1;
            var i = this._values.QueryString || "";
            for (var a in r) i = new RegExp(a + "[^&]+").test(i) ? i.replace(new RegExp(a + "[^&]+"), a + "=" + r[a]) : i.slice(-1) === "&" ? i + a + "=" + r[a] : i === "" ? a + "=" + r[a] : i + "&" + a + "=" + r[a];
            this._values.QueryString = i
        }, t.prototype.getUrl = function() {
            var r = "";
            return r += this._values.Origin, r += this._values.Port ? ":" + this._values.Port : "", r += this._values.Path, r += this._values.QueryString ? "?" + this._values.QueryString : "", r += this._values.Fragment ? "#" + this._values.Fragment : ""
        }, t.prototype._parse = function(r) {
            this._initValues();
            var i = this._regex.exec(r);
            i || z.log("URLParser::_parse -> Invalid URL");
            var a = r.split("#"),
                s = a[0],
                u = a.slice(1).join("#");
            i = this._regex.exec(s);
            for (var c in this._fields) typeof i[this._fields[c]] != "undefined" && (this._values[c] = i[this._fields[c]]);
            this._values.Hostname = this._values.Host.replace(/:\d+$/, ""), this._values.Origin = this._values.Protocol + "://" + this._values.Hostname, this._values.Fragment = u
        }, new t(e)
    }

    function ne(e) {
        var t = {},
            r = function() {
                var s;
                try {
                    return s = new URL("http://modernizr.com/"), s.href === "http://modernizr.com/"
                } catch (u) {
                    return !1
                }
            };
        if (typeof window.URL == "function" && r()) t = new URL(e), t.searchParams || (t.searchParams = function() {
            var s = Ze(t.search);
            return {
                get: function(u) {
                    return s[u]
                }
            }
        }());
        else {
            w(e) || (e = String(e)), e = ie(e);
            var i = /^https?:\/\/.+/;
            if (i.test(e) === !1) return void z.log("Invalid URL");
            var a = ht(e);
            t.hash = a._values.Fragment, t.host = a._values.Host ? a._values.Host + (a._values.Port ? ":" + a._values.Port : "") : "", t.href = a._values.URL, t.password = a._values.Password, t.pathname = a._values.Path, t.port = a._values.Port, t.search = a._values.QueryString ? "?" + a._values.QueryString : "", t.username = a._values.Username, t.hostname = a._values.Hostname, t.protocol = a._values.Protocol ? a._values.Protocol + ":" : "", t.origin = a._values.Origin ? a._values.Origin + (a._values.Port ? ":" + a._values.Port : "") : "", t.searchParams = function() {
                var s = Ze("?" + a._values.QueryString);
                return {
                    get: function(u) {
                        return s[u]
                    }
                }
            }()
        }
        return t
    }

    function le(e) {
        return !(!e || e.nodeType !== 1)
    }

    function zt(e) {
        return e === void 0
    }

    function T(e) {
        return Array.isArray && A(T) ? Array.isArray(e) : Object.prototype.toString.call(e) === "[object Array]"
    }

    function re(e) {
        return new Lr(e)
    }

    function ke(e, t, r, i) {
        function a(c) {
            return c && (c.preventDefault = a.preventDefault, c.stopPropagation = a.stopPropagation, c._getPath = a._getPath), c
        }

        function s(c, l, p, _) {
            var D = function(S) {
                if (S = S || a(window.event)) {
                    S.target = S.srcElement;
                    var h, I, E = !0;
                    return typeof p == "function" && (h = p(S)), I = l.call(c, S), _ !== "beforeunload" ? (h !== !1 && I !== !1 || (E = !1), E) : void 0
                }
            };
            return D
        }
        a._getPath = function() {
            var c = this;
            return this.path || this.composedPath && this.composedPath() || re(c.target).getParents()
        }, a.preventDefault = function() {
            this.returnValue = !1
        }, a.stopPropagation = function() {
            this.cancelBubble = !0
        };
        var u = function(c, l, p) {
            if (i === void 0 && l === "click" && (i = !0), c && c.addEventListener) c.addEventListener(l, function(S) {
                S._getPath = a._getPath, p.call(this, S)
            }, i);
            else {
                var _ = "on" + l,
                    D = c[_];
                c[_] = s(c, p, D, l)
            }
        };
        u.apply(null, arguments)
    }

    function Xt(e) {
        var t = "pushState" in window.history ? "popstate" : "hashchange";
        ke(window, t, e)
    }

    function Zt(e) {
        if (e) return typeof window.XMLHttpRequest != "undefined" && "withCredentials" in new XMLHttpRequest ? new XMLHttpRequest : typeof XDomainRequest != "undefined" ? new XDomainRequest : null;
        if (typeof window.XMLHttpRequest != "undefined") return new XMLHttpRequest;
        if (window.ActiveXObject) try {
            return new ActiveXObject("Msxml2.XMLHTTP")
        } catch (t) {
            try {
                return new ActiveXObject("Microsoft.XMLHTTP")
            } catch (r) {
                z.log(r)
            }
        }
    }

    function C(e, t, r) {
        if (e == null) return !1;
        if (Er && e.forEach === Er) e.forEach(t, r);
        else if (T(e))
            for (var i = 0, a = e.length; i < a; i++) i in e && t.call(r, e[i], i, e);
        else
            for (var s in e) fn.call(e, s) && t.call(r, e[s], s, e)
    }

    function $(e) {
        return C(Array.prototype.slice.call(arguments, 1), function(t) {
            for (var r in t) _n.call(t, r) && t[r] !== void 0 && (e[r] = t[r])
        }), e
    }

    function mt(e) {
        function t(c) {
            if (!c) return "";
            try {
                return JSON.parse(c)
            } catch (l) {
                return {}
            }
        }

        function r() {
            try {
                i && typeof i == "object" && i.abort && i.abort()
            } catch (c) {
                z.log(c)
            }
            a && (clearTimeout(a), a = null, e.error && e.error(), i.onreadystatechange = null, i.onload = null, i.onerror = null)
        }
        e.timeout = e.timeout || 2e4, e.credentials = typeof e.credentials == "undefined" || e.credentials;
        var i = Zt(e.cors);
        if (!i) return !1;
        e.type || (e.type = e.data ? "POST" : "GET"), e = $({
            success: function() {},
            error: function() {}
        }, e);
        var a, s = e.success,
            u = e.error;
        e.success = function(c) {
            s(c), a && (clearTimeout(a), a = null)
        }, e.error = function(c) {
            u(c), a && (clearTimeout(a), a = null)
        }, a = setTimeout(function() {
            r()
        }, e.timeout), typeof XDomainRequest != "undefined" && i instanceof XDomainRequest && (i.onload = function() {
            e.success && e.success(t(i.responseText)), i.onreadystatechange = null, i.onload = null, i.onerror = null
        }, i.onerror = function() {
            e.error && e.error(t(i.responseText), i.status), i.onreadystatechange = null, i.onerror = null, i.onload = null
        }), i.onreadystatechange = function() {
            try {
                i.readyState == 4 && (i.status >= 200 && i.status < 300 || i.status == 304 ? e.success(t(i.responseText)) : e.error(t(i.responseText), i.status), i.onreadystatechange = null, i.onload = null)
            } catch (c) {
                i.onreadystatechange = null, i.onload = null
            }
        }, i.open(e.type, e.url, !0);
        try {
            e.credentials && (i.withCredentials = !0), d(e.header) && C(e.header, function(c, l) {
                i.setRequestHeader && i.setRequestHeader(l, c)
            }), e.data && (e.cors || i.setRequestHeader && i.setRequestHeader("X-Requested-With", "XMLHttpRequest"), e.contentType === "application/json" ? i.setRequestHeader && i.setRequestHeader("Content-type", "application/json; charset=UTF-8") : i.setRequestHeader && i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"))
        } catch (c) {
            z.log(c)
        }
        i.send(e.data || null)
    }

    function Yt(e, t) {
        var r = [];
        return e == null ? r : Array.prototype.map && e.map === Array.prototype.map ? e.map(t) : (C(e, function(i, a, s) {
            r.push(t(i, a, s))
        }), r)
    }

    function He(e) {
        var t = [];
        try {
            t = Yt(atob(e).split(""), function(r) {
                return "%" + ("00" + r.charCodeAt(0).toString(16)).slice(-2)
            })
        } catch (r) {
            t = []
        }
        try {
            return decodeURIComponent(t.join(""))
        } catch (r) {
            return t.join("")
        }
    }

    function Be(e) {
        var t = "";
        try {
            t = btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function(r, i) {
                return String.fromCharCode("0x" + i)
            }))
        } catch (r) {
            t = e
        }
        return t
    }

    function ri(e, t) {
        t = t || window;
        var r = !1,
            i = !0,
            a = t.document,
            s = a.documentElement,
            u = a.addEventListener,
            c = u ? "addEventListener" : "attachEvent",
            l = u ? "removeEventListener" : "detachEvent",
            p = u ? "" : "on",
            _ = function(S) {
                S.type == "readystatechange" && a.readyState != "complete" || ((S.type == "load" ? t : a)[l](p + S.type, _, !1), !r && (r = !0) && e.call(t, S.type || S))
            },
            D = function() {
                try {
                    s.doScroll("left")
                } catch (S) {
                    return void setTimeout(D, 50)
                }
                _("poll")
            };
        if (a.readyState == "complete") e.call(t, "lazy");
        else {
            if (!u && s.doScroll) {
                try {
                    i = !t.frameElement
                } catch (S) {
                    z.log(S)
                }
                i && D()
            }
            a[c](p + "DOMContentLoaded", _, !1), a[c](p + "readystatechange", _, !1), t[c](p + "load", _, !1)
        }
    }

    function vt(e) {
        return C(Array.prototype.slice.call(arguments, 1), function(t) {
            for (var r in t) t[r] !== void 0 && e[r] === void 0 && (e[r] = t[r])
        }), e
    }

    function Oe(e) {
        var t = e;
        try {
            t = decodeURI(e)
        } catch (r) {
            t = e
        }
        return t
    }

    function yt(e) {
        var t = "t6KJCZa5pDdQ9khoEM3Tj70fbP2eLSyc4BrsYugARqFIw1mzlGNVXOHiWvxUn8",
            r = t.length - 1,
            i = {},
            a = 0;
        for (a = 0; a < t.length; a++) i[t.charAt(a)] = t.charAt(r - a);
        var s = "";
        for (a = 0; a < e.length; a++) s += e.charAt(a) in i ? i[e.charAt(a)] : e.charAt(a);
        return s
    }

    function Re(e) {
        return Object.prototype.toString.call(e) == "[object Date]"
    }

    function bt(e) {
        function t(r) {
            return r < 10 ? "0" + r : r
        }
        return e.getFullYear() + "-" + t(e.getMonth() + 1) + "-" + t(e.getDate()) + " " + t(e.getHours()) + ":" + t(e.getMinutes()) + ":" + t(e.getSeconds()) + "." + t(e.getMilliseconds())
    }

    function Gt(e) {
        return C(e, function(t, r) {
            Re(t) ? e[r] = bt(t) : d(t) && (e[r] = Gt(t))
        }), e
    }

    function ii(e) {
        return C(Array.prototype.slice.call(arguments, 1), function(t) {
            for (var r in t) t[r] !== void 0 && (d(t[r]) && d(e[r]) ? $(e[r], t[r]) : e[r] = t[r])
        }), e
    }

    function Qt(e, t, r) {
        var i = Object.prototype.hasOwnProperty;
        if (e.filter) return e.filter(t);
        for (var a = [], s = 0; s < e.length; s++)
            if (i.call(e, s)) {
                var u = e[s];
                t.call(r, u, s, e) && a.push(u)
            }
        return a
    }

    function er(e) {
        try {
            return JSON.stringify(e, null, "  ")
        } catch (t) {
            return JSON.stringify(e)
        }
    }

    function Ye(e, t) {
        function r(c) {
            return !!c && c
        }
        e = e || location.hostname, t = t || "domain_test";
        var i = r(e);
        if (!i) return "";
        var a = i.split(".");
        if (T(a) && a.length >= 2 && !/^(\d+\.)+\d+$/.test(i)) {
            for (var s = "." + a.splice(a.length - 1, 1); a.length > 0;)
                if (s = "." + a.splice(a.length - 1, 1) + s, document.cookie = t + "=true; path=/; domain=" + s, document.cookie.indexOf(t + "=true") !== -1) {
                    var u = new Date;
                    return u.setTime(u.getTime() - 1e3), document.cookie = t + "=true; expires=" + u.toGMTString() + "; path=/; SameSite=Lax; domain=" + s, s
                }
        }
        return ""
    }

    function Ge(e) {
        function t(s, u) {
            s = ie(s);
            var c;
            if (s === "body") return document.getElementsByTagName("body")[0];
            if (s.indexOf("#") === 0) s = s.slice(1), c = document.getElementById(s);
            else if (s.indexOf(":nth-of-type") > -1) {
                var l = s.split(":nth-of-type");
                if (!l[0] || !l[1]) return null;
                var p = l[0],
                    _ = l[1].match(/\(([0-9]+)\)/);
                if (!_ || !_[1]) return null;
                var D = Number(_[1]);
                if (!(le(u) && u.children && u.children.length > 0)) return null;
                for (var S = u.children, h = 0; h < S.length; h++)
                    if (le(S[h])) {
                        var I = S[h].tagName.toLowerCase();
                        if (I === p && (D--, D === 0)) {
                            c = S[h];
                            break
                        }
                    }
                if (D > 0) return null
            }
            return c || null
        }

        function r(s) {
            var u, c = i.shift();
            if (!c) return s;
            try {
                u = t(c, s)
            } catch (l) {
                z.log(l)
            }
            return u && le(u) ? r(u) : null
        }
        if (!w(e)) return null;
        var i = e.split(">"),
            a = null;
        return a = r(), a && le(a) ? a : null
    }

    function tr(e, t) {
        var r = "",
            i = "";
        return e.textContent ? r = ie(e.textContent) : e.innerText && (r = ie(e.innerText)), r && (r = r.replace(/[\r\n]/g, " ").replace(/[ ]+/g, " ").substring(0, 255)), i = r || "", t !== "input" && t !== "INPUT" || (i = e.value || ""), i
    }

    function de(e, t) {
        t && typeof t == "string" || (t = "hostname\u89E3\u6790\u5F02\u5E38");
        var r = null;
        try {
            r = ne(e).hostname
        } catch (i) {
            z.log("getHostname\u4F20\u5165\u7684url\u53C2\u6570\u4E0D\u5408\u6CD5\uFF01")
        }
        return r || t
    }

    function wt() {
        try {
            var e = navigator.appVersion.match(/OS (\d+)[._](\d+)[._]?(\d+)?/);
            return e && e[1] ? Number.parseInt(e[1], 10) : ""
        } catch (t) {
            return ""
        }
    }

    function Ue(e, t) {
        t = t.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]"), e = Se(e);
        var r = "[\\?&]" + t + "=([^&#]*)",
            i = new RegExp(r),
            a = i.exec(e);
        return a === null || a && typeof a[1] != "string" && a[1].length ? "" : Se(a[1])
    }

    function Ke(e) {
        var t = {},
            r = e.split("?"),
            i = r[1] || "";
        return i && (t = Ze("?" + i)), t
    }

    function rr() {
        return typeof window.matchMedia != "undefined" || typeof window.msMatchMedia != "undefined"
    }

    function ni() {
        var e = screen.msOrientation || screen.mozOrientation || (screen.orientation || {}).type,
            t = "\u672A\u53D6\u5230\u503C";
        if (e) t = e.indexOf("landscape") > -1 ? "landscape" : "portrait";
        else if (rr()) {
            var r = window.matchMedia || window.msMatchMedia;
            r("(orientation: landscape)").matches ? t = "landscape" : r("(orientation: portrait)").matches && (t = "portrait")
        }
        return t
    }

    function St() {
        var e, t = {},
            r = navigator.userAgent.toLowerCase();
        return (e = r.match(/opera.([\d.]+)/)) ? t.opera = Number(e[1].split(".")[0]) : (e = r.match(/msie ([\d.]+)/)) ? t.ie = Number(e[1].split(".")[0]) : (e = r.match(/edge.([\d.]+)/)) ? t.edge = Number(e[1].split(".")[0]) : (e = r.match(/firefox\/([\d.]+)/)) ? t.firefox = Number(e[1].split(".")[0]) : (e = r.match(/chrome\/([\d.]+)/)) ? t.chrome = Number(e[1].split(".")[0]) : (e = r.match(/version\/([\d.]+).*safari/)) ? t.safari = Number(e[1].match(/^\d*.\d*/)) : (e = r.match(/trident\/([\d.]+)/)) && (t.ie = 11), t
    }

    function Y(e) {
        return w(e) ? (e = ie(e), Oe(e)) : Oe(location.href)
    }

    function Pe(e) {
        return w(e) ? (e = ie(e), Oe(e)) : Oe(location.pathname)
    }

    function kt(e, t) {
        return e.hasAttribute ? e.hasAttribute(t) : e.attributes ? !(!e.attributes[t] || !e.attributes[t].specified) : void 0
    }

    function Pt(e, t) {
        if (typeof t == "string") return kt(e, t);
        if (T(t)) {
            for (var r = !1, i = 0; i < t.length; i++) {
                var a = kt(e, t[i]);
                if (a) {
                    r = !0;
                    break
                }
            }
            return r
        }
    }

    function ir(e) {
        if (typeof e != "string") return 0;
        var t = 0,
            r = null;
        if (e.length == 0) return t;
        for (var i = 0; i < e.length; i++) r = e.charCodeAt(i), t = (t << 5) - t + r, t &= t;
        return t
    }

    function Qe(e) {
        var t = 9007199254740992,
            r = -9007199254740992,
            i = 31,
            a = 0;
        if (e.length > 0)
            for (var s = e.split(""), u = 0; u < s.length; u++) {
                var c = s[u].charCodeAt(),
                    l = i * a + c;
                if (l > t)
                    for (a = r + a; l = i * a + c, l < r;) a = a / 2 + c;
                if (l < r)
                    for (a = t + a; l = i * a + c, l > t;) a = a / 2 + c;
                a = i * a + c
            }
        return a
    }

    function Q(e, t) {
        var r = e.indexOf;
        if (r) return r.call(e, t);
        for (var i = 0; i < e.length; i++)
            if (t === e[i]) return i;
        return -1
    }

    function ai(e, t) {
        return e.prototype = new t, e.prototype.constructor = e, e.superclass = t.prototype, e
    }

    function nr(e) {
        return !(!e || !gn.call(e, "callee"))
    }

    function ar(e) {
        return Object.prototype.toString.call(e) == "[object Boolean]"
    }

    function F(e) {
        if (d(e)) {
            for (var t in e)
                if (Object.prototype.hasOwnProperty.call(e, t)) return !1;
            return !0
        }
        return !1
    }

    function sr(e) {
        if (typeof e != "string") return !1;
        var t = /^https?:\/\/.+/;
        return t.test(e) !== !1 || (z.log("Invalid URL"), !1)
    }

    function or() {
        return !!navigator.userAgent.match(/iPhone|iPad|iPod/i)
    }

    function $e(e) {
        try {
            JSON.parse(e)
        } catch (t) {
            return !1
        }
        return !0
    }

    function se(e) {
        return Object.prototype.toString.call(e) == "[object Number]" && /[\d\.]+/.test(String(e))
    }

    function ur() {
        var e = !1;
        if (typeof navigator != "object" || typeof navigator.sendBeacon != "function") return e;
        var t = St(),
            r = navigator.userAgent.toLowerCase();
        if (/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent)) {
            var i = /os [\d._]*/gi,
                a = r.match(i),
                s = (a + "").replace(/[^0-9|_.]/gi, "").replace(/_/gi, "."),
                u = s.split(".");
            typeof t.safari == "undefined" && (t.safari = u[0]), u[0] && u[0] < 13 ? (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 12) && (e = !0) : (t.chrome > 41 || t.firefox > 30 || t.opera > 25 || t.safari > 11.3) && (e = !0)
        } else(t.chrome > 38 || t.edge > 13 || t.firefox > 30 || t.opera > 25 || t.safari > 11) && (e = !0);
        return e
    }

    function Dt() {
        return typeof window.XMLHttpRequest != "undefined" && ("withCredentials" in new XMLHttpRequest || typeof XDomainRequest != "undefined")
    }

    function cr(e) {
        if (!d(e) || !w(e.callbackName)) return z.log("JSONP \u8BF7\u6C42\u7F3A\u5C11 callbackName"), !1;
        e.success = A(e.success) ? e.success : function() {}, e.error = A(e.error) ? e.error : function() {}, e.data = e.data || "";
        var t = document.createElement("script"),
            r = document.getElementsByTagName("head")[0],
            i = null,
            a = !1;
        if (r.appendChild(t), se(e.timeout) && (i = setTimeout(function() {
                return !a && (e.error("timeout"), window[e.callbackName] = function() {
                    z.log("call jsonp error")
                }, i = null, r.removeChild(t), void(a = !0))
            }, e.timeout)), window[e.callbackName] = function() {
                clearTimeout(i), i = null, e.success.apply(null, arguments), window[e.callbackName] = function() {
                    z.log("call jsonp error")
                }, r.removeChild(t)
            }, e.url.indexOf("?") > -1 ? e.url += "&callbackName=" + e.callbackName : e.url += "?callbackName=" + e.callbackName, d(e.data)) {
            var s = [];
            C(e.data, function(u, c) {
                s.push(c + "=" + u)
            }), e.data = s.join("&"), e.url += "&" + e.data
        }
        t.onerror = function(u) {
            return !a && (window[e.callbackName] = function() {
                z.log("call jsonp error")
            }, clearTimeout(i), i = null, r.removeChild(t), e.error(u), void(a = !0))
        }, t.src = e.url
    }

    function lr(e) {
        var t = {
            visibleHandler: A(e.visible) ? e.visible : function() {},
            hiddenHandler: A(e.hidden) ? e.hidden : function() {},
            visibilityChange: null,
            hidden: null,
            isSupport: function() {
                return typeof document[this.hidden] != "undefined"
            },
            init: function() {
                typeof document.hidden != "undefined" ? (this.hidden = "hidden", this.visibilityChange = "visibilitychange") : typeof document.mozHidden != "undefined" ? (this.hidden = "mozHidden", this.visibilityChange = "mozvisibilitychange") : typeof document.msHidden != "undefined" ? (this.hidden = "msHidden", this.visibilityChange = "msvisibilitychange") : typeof document.webkitHidden != "undefined" && (this.hidden = "webkitHidden", this.visibilityChange = "webkitvisibilitychange"), this.listen()
            },
            listen: function() {
                if (this.isSupport()) {
                    var r = this;
                    ke(document, this.visibilityChange, function() {
                        document[r.hidden] ? r.hiddenHandler() : r.visibleHandler()
                    }, 1)
                } else ke(window, "focus", this.visibleHandler), ke(window, "blur", this.hiddenHandler)
            }
        };
        t.init()
    }

    function et(e) {
        e = $({
            success: function() {},
            error: function() {},
            appendCall: function(r) {
                document.getElementsByTagName("head")[0].appendChild(r)
            }
        }, e);
        var t = null;
        e.type === "css" && (t = document.createElement("link"), t.rel = "stylesheet", t.href = e.url), e.type === "js" && (t = document.createElement("script"), t.async = "async", t.setAttribute("charset", "UTF-8"), t.src = e.url, t.type = "text/javascript"), t.onload = t.onreadystatechange = function() {
            this.readyState && this.readyState !== "loaded" && this.readyState !== "complete" || (e.success(), t.onload = t.onreadystatechange = null)
        }, t.onerror = function() {
            e.error(), t.onerror = null
        }, e.appendCall(t)
    }

    function dr(e) {
        if (typeof e != "string") return "";
        for (var t = /^\s*javascript/i; t.test(e);) e = e.replace(t, "");
        return e
    }

    function pr(e, t) {
        e = String(e), t = typeof t == "number" ? t : 13;
        for (var r = 126, i = e.split(""), a = 0, s = i.length; a < s; a++) {
            var u = i[a].charCodeAt(0);
            u < r && (i[a] = String.fromCharCode((i[a].charCodeAt(0) + t) % r))
        }
        return i.join("")
    }

    function jt(e) {
        var t = 13,
            r = 126;
        return e = String(e), pr(e, r - t)
    }

    function Nt(e) {
        d(e) && C(e, function(t, r) {
            d(t) ? Nt(e[r]) : Re(t) && (e[r] = bt(t))
        })
    }

    function tt(e) {
        var t = document.createElement("style");
        t.type = "text/css";
        try {
            t.appendChild(document.createTextNode(e))
        } catch (a) {
            t.styleSheet.cssText = e
        }
        var r = document.getElementsByTagName("head")[0],
            i = document.getElementsByTagName("script")[0];
        r ? r.children.length ? r.insertBefore(t, r.children[0]) : r.appendChild(t) : i.parentNode.insertBefore(t, i)
    }

    function si(e) {
        if (typeof e != "string") return z.log("\u8F6C\u6362unicode\u9519\u8BEF", e), e;
        for (var t = "", r = 0; r < e.length; r++) t += "\\" + e.charCodeAt(r).toString(16);
        return t
    }

    function oi(e, t, r) {
        var i, a, s, u = null,
            c = 0;
        r || (r = {});
        var l = function() {
            c = r.leading === !1 ? 0 : Z(), u = null, s = e.apply(i, a), u || (i = a = null)
        };
        return function() {
            var p = Z();
            c || r.leading !== !1 || (c = p);
            var _ = t - (p - c);
            return i = this, a = arguments, _ <= 0 || _ > t ? (u && (clearTimeout(u), u = null), c = p, s = e.apply(i, a), u || (i = a = null)) : u || r.trailing === !1 || (u = setTimeout(l, _)), s
        }
    }

    function fr(e) {
        var t = [];
        return e == null || C(e, function(r) {
            t[t.length] = r
        }), t
    }

    function ui(e) {
        return e ? e.toArray ? e.toArray() : T(e) || nr(e) ? Array.prototype.slice.call(e) : fr(e) : []
    }

    function _r(e) {
        for (var t, r = [], i = {}, a = 0; a < e.length; a++) t = e[a], t in i || (i[t] = !0, r.push(t));
        return r
    }

    function B() {
        if ((ve.isSupport() && sessionStorage.getItem("sensorsdata_jssdk_debug") === "true" || O.show_log) && (!d(arguments[0]) || O.show_log !== !0 && O.show_log !== "string" && O.show_log !== !1 || (arguments[0] = er(arguments[0])), typeof console == "object" && console.log)) try {
            return console.log.apply(console, arguments)
        } catch (e) {
            console.log(arguments[0])
        }
    }

    function ci(e) {
        return e.indexOf(Tt) === 0 ? (e = e.substring(Tt.length), e = jt(e)) : e.indexOf(st) === 0 && (e = e.substring(st.length), e = yt(e)), e
    }

    function Me(e) {
        return !w(e) || e.indexOf(Tt) !== 0 && e.indexOf(st) !== 0 || (e = ci(e)), e
    }

    function Ve(e) {
        return st + yt(e)
    }

    function gr(e) {
        var t = e.properties,
            r = JSON.parse(JSON.stringify(e));
        d(t) && C(t, function(i, a) {
            if (A(i)) try {
                t[a] = i(r), A(t[a]) && (B("\u60A8\u7684\u5C5E\u6027- " + a + " \u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664"), delete t[a])
            } catch (s) {
                delete t[a], B("\u60A8\u7684\u5C5E\u6027- " + a + " \u629B\u51FA\u4E86\u5F02\u5E38\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664")
            }
        })
    }

    function hr(e) {
        if (typeof e == "object" && e.$option) {
            var t = e.$option;
            return delete e.$option, t
        }
        return {}
    }

    function mr(e) {
        var t = {};
        return C(e, function(r, i) {
            r != null && (t[i] = r)
        }), t
    }

    function Ct(e) {
        var t = O.current_domain;
        switch (typeof t) {
            case "function":
                var r = t();
                return r === "" || ie(r) === "" ? "url\u89E3\u6790\u5931\u8D25" : r.indexOf(".") !== -1 ? r : "url\u89E3\u6790\u5931\u8D25";
            case "string":
                return t === "" || ie(t) === "" ? "url\u89E3\u6790\u5931\u8D25" : t.indexOf(".") !== -1 ? t : "url\u89E3\u6790\u5931\u8D25";
            default:
                var i = Ye(null, It);
                return e === "" || i === "" ? "url\u89E3\u6790\u5931\u8D25" : i
        }
    }

    function vr(e) {
        if (!e.target) return !1;
        var t = e.target,
            r = t.tagName.toLowerCase(),
            i = {};
        return i.$element_type = r, i.$element_name = t.getAttribute("name"), i.$element_id = t.getAttribute("id"), i.$element_class_name = typeof t.className == "string" ? t.className : null, i.$element_target_url = t.getAttribute("href"), i.$element_content = it(t, r), i = mr(i), i.$url = Y(), i.$url_path = Pe(), i.$title = document.title, i
    }

    function Ae() {
        var e = document.referrer,
            t = "baidu.com";
        if (!e) return !1;
        try {
            var r = ne(e).hostname;
            return r && r.substring(r.length - t.length) === t
        } catch (i) {
            return !1
        }
    }

    function yr() {
        var e = Ke(document.referrer);
        return F(e) || !e.eqid ? je().replace(/-/g, "") : e.eqid
    }

    function br() {
        var e = Ke(document.referrer);
        if (F(e) || !e.eqid) {
            var t = Ke(location.href);
            return e.ck || t.utm_source ? "baidu_sem_keyword_id" : "baidu_other_keyword_id"
        }
        return "baidu_seo_keyword_id"
    }

    function We(e) {
        return e = e || document.referrer, e === "" || Ye(de(e), It) !== Ye(null, It)
    }

    function _e(e, t) {
        return e = e || document.referrer, typeof e != "string" ? "\u53D6\u503C\u5F02\u5E38_referrer\u5F02\u5E38_" + String(e) : (e = ie(e), e = Oe(e), e.indexOf("https://www.baidu.com/") !== 0 || t || (e = e.split("?")[0]), e = e.slice(0, O.max_referrer_string_length), typeof e == "string" ? e : "")
    }

    function wr(e) {
        var t = de(e);
        if (!t || t === "hostname\u89E3\u6790\u5F02\u5E38") return "";
        var r = {
            baidu: [/^.*\.baidu\.com$/],
            bing: [/^.*\.bing\.com$/],
            google: [/^www\.google\.com$/, /^www\.google\.com\.[a-z]{2}$/, /^www\.google\.[a-z]{2}$/],
            sm: [/^m\.sm\.cn$/],
            so: [/^.+\.so\.com$/],
            sogou: [/^.*\.sogou\.com$/],
            yahoo: [/^.*\.yahoo\.com$/]
        };
        for (var i in r)
            for (var a = r[i], s = 0, u = a.length; s < u; s++)
                if (a[s].test(t)) return i;
        return "\u672A\u77E5\u641C\u7D22\u5F15\u64CE"
    }

    function Te(e, t) {
        e = e || document.referrer;
        var r = O.source_type.keyword;
        if (document && typeof e == "string") {
            if (e.indexOf("http") === 0) {
                var i = wr(e),
                    a = Ke(e);
                if (F(a)) return O.preset_properties.search_keyword_baidu && Ae() ? void 0 : "\u672A\u53D6\u5230\u503C";
                var s = null;
                for (var u in r)
                    if (i === u && typeof a == "object") {
                        if (s = r[u], T(s))
                            for (u = 0; u < s.length; u++) {
                                var c = a[s[u]];
                                if (c) return t ? {
                                    active: c
                                } : c
                            } else if (a[s]) return t ? {
                                active: a[s]
                            } : a[s]
                    }
                return O.preset_properties.search_keyword_baidu && Ae() ? void 0 : "\u672A\u53D6\u5230\u503C"
            }
            return e === "" ? "\u672A\u53D6\u5230\u503C_\u76F4\u63A5\u6253\u5F00" : "\u672A\u53D6\u5230\u503C_\u975Ehttp\u7684url"
        }
        return "\u53D6\u503C\u5F02\u5E38_referrer\u5F02\u5E38_" + String(e)
    }

    function Sr(e) {
        var t = Ue(e, "gdt_vid"),
            r = Ue(e, "hash_key"),
            i = Ue(e, "callbacks"),
            a = {
                click_id: "",
                hash_key: "",
                callbacks: ""
            };
        return w(t) && t.length && (a.click_id = t.length == 16 || t.length == 18 ? t : "\u53C2\u6570\u89E3\u6790\u4E0D\u5408\u6CD5", w(r) && r.length && (a.hash_key = r), w(i) && i.length && (a.callbacks = i)), a
    }

    function rt() {
        function e(c, l) {
            for (var p = 0; p < c.length; p++)
                if (l.split("?")[0].indexOf(c[p]) !== -1) return !0
        }
        var t = "(" + O.source_type.utm.join("|") + ")\\=[^&]+",
            r = O.source_type.search,
            i = O.source_type.social,
            a = document.referrer || "",
            s = H.pageProp.url;
        if (s) {
            var u = s.match(new RegExp(t));
            return u && u[0] ? "\u4ED8\u8D39\u5E7F\u544A\u6D41\u91CF" : e(r, a) ? "\u81EA\u7136\u641C\u7D22\u6D41\u91CF" : e(i, a) ? "\u793E\u4EA4\u7F51\u7AD9\u6D41\u91CF" : a === "" ? "\u76F4\u63A5\u6D41\u91CF" : "\u5F15\u8350\u6D41\u91CF"
        }
        return "\u83B7\u53D6url\u5F02\u5E38"
    }

    function li(e) {
        var t = O.heatmap && typeof O.heatmap.collect_input == "function" && O.heatmap.collect_input(e);
        return (e.type === "button" || e.type === "submit" || t) && e.value || ""
    }

    function it(e, t) {
        return w(t) && t.toLowerCase() === "input" ? li(e) : tr(e, t)
    }

    function Ot(e) {
        return xt.protocol.ajax(e.url), mt(e)
    }

    function De(e, t, r) {
        var i = !(!d(O.heatmap) || !O.heatmap.useCapture);
        return d(O.heatmap) && typeof O.heatmap.useCapture == "undefined" && t === "click" && (i = !0), ke(e, t, r, i)
    }

    function kr(e, t) {
        var r = "";
        if (t = t || location.href, O.cross_subdomain === !1) {
            try {
                r = ne(t).hostname
            } catch (i) {
                B(i)
            }
            r = typeof r == "string" && r !== "" ? "sajssdk_2015_" + O.sdk_id + e + "_" + r.replace(/\./g, "_") : "sajssdk_2015_root_" + O.sdk_id + e
        } else r = "sajssdk_2015_cross_" + O.sdk_id + e;
        return r
    }

    function nt() {
        var e = "new_user";
        return ee.isSupport() ? ee.get("sensorsdata_is_new_user") !== null || ee.get(kr(e)) !== null : ut.get(ut.getNewUserFlagMemoryKey(e)) !== null
    }

    function xe(e, t) {
        for (var r in e)
            if (Object.prototype.hasOwnProperty.call(e, r) && !wn.check(r, e[r], t)) return !1;
        return !0
    }

    function di(e) {
        var t = !e.type || e.type.slice(0, 7) !== "profile",
            r = "\u53D6\u503C\u5F02\u5E38";
        d(e.properties) && (e.properties.$first_referrer && (e.properties.$first_referrer_host = de(e.properties.$first_referrer, r)), t && ("$referrer" in e.properties && (e.properties.$referrer_host = e.properties.$referrer === "" ? "" : de(e.properties.$referrer, r)), n.para.preset_properties.latest_referrer && n.para.preset_properties.latest_referrer_host && (e.properties.$latest_referrer_host = e.properties.$latest_referrer === "" ? "" : de(e.properties.$latest_referrer, r))))
    }

    function pi(e) {
        var t = !e.type || e.type.slice(0, 7) !== "profile",
            r = n.para.preset_properties && t;
        r && n.para.preset_properties.url && typeof e.properties.$url == "undefined" && (e.properties.$url = Y()), r && n.para.preset_properties.title && typeof e.properties.$title == "undefined" && (e.properties.$title = document.title)
    }

    function fi(e) {
        $(O, e || n.para || {}), n.para = O;
        var t = {};
        if (d(n.para.is_track_latest))
            for (var r in n.para.is_track_latest) t["latest_" + r] = n.para.is_track_latest[r];
        n.para.preset_properties = $({}, n.para_default.preset_properties, t, n.para.preset_properties || {});
        var i;
        for (i in n.para_default) n.para[i] === void 0 && (n.para[i] = n.para_default[i]);
        typeof n.para.server_url == "string" && (n.para.server_url = ie(n.para.server_url), n.para.server_url && (n.para.server_url.slice(0, 3) === "://" ? n.para.server_url = location.protocol.slice(0, -1) + n.para.server_url : n.para.server_url.slice(0, 2) === "//" ? n.para.server_url = location.protocol + n.para.server_url : n.para.server_url.slice(0, 4) !== "http" && (n.para.server_url = ""))), typeof n.para.web_url != "string" || n.para.web_url.slice(0, 3) !== "://" && n.para.web_url.slice(0, 2) !== "//" || (n.para.web_url.slice(0, 3) === "://" ? n.para.web_url = location.protocol.slice(0, -1) + n.para.web_url : n.para.web_url = location.protocol + n.para.web_url), n.para.send_type !== "image" && n.para.send_type !== "ajax" && n.para.send_type !== "beacon" && (n.para.send_type = "image"), n.debug.protocol.serverUrl(), n.bridge.initPara(), n.bridge.initState();
        var a = {
            datasend_timeout: 6e3,
            send_interval: 6e3
        };
        x.isSupport() && Dt() && typeof localStorage == "object" ? n.para.batch_send === !0 ? n.para.batch_send = $({}, a) : typeof n.para.batch_send == "object" && (n.para.batch_send = $({}, a, n.para.batch_send)) : n.para.batch_send = !1;
        var s = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"],
            u = ["www.baidu.", "m.baidu.", "m.sm.cn", "so.com", "sogou.com", "youdao.com", "google.", "yahoo.com/", "bing.com/", "ask.com/"],
            c = ["weibo.com", "renren.com", "kaixin001.com", "douban.com", "qzone.qq.com", "zhihu.com", "tieba.baidu.com", "weixin.qq.com"],
            l = {
                baidu: ["wd", "word", "kw", "keyword"],
                google: "q",
                bing: "q",
                yahoo: "p",
                sogou: ["query", "keyword"],
                so: "q",
                sm: "q"
            };
        typeof n.para.source_type == "object" && (n.para.source_type.utm = T(n.para.source_type.utm) ? n.para.source_type.utm.concat(s) : s, n.para.source_type.search = T(n.para.source_type.search) ? n.para.source_type.search.concat(u) : u, n.para.source_type.social = T(n.para.source_type.social) ? n.para.source_type.social.concat(c) : c, n.para.source_type.keyword = d(n.para.source_type.keyword) ? $(l, n.para.source_type.keyword) : l);
        var p = {
                div: !1
            },
            _ = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
        if (n.para.heatmap && !d(n.para.heatmap) && (n.para.heatmap = {}), d(n.para.heatmap)) {
            n.para.heatmap.clickmap = n.para.heatmap.clickmap || "default", n.para.heatmap.scroll_notice_map = n.para.heatmap.scroll_notice_map || "default", n.para.heatmap.scroll_delay_time = n.para.heatmap.scroll_delay_time || 4e3, n.para.heatmap.scroll_event_duration = n.para.heatmap.scroll_event_duration || 18e3, n.para.heatmap.renderRefreshTime = n.para.heatmap.renderRefreshTime || 1e3, n.para.heatmap.loadTimeout = n.para.heatmap.loadTimeout || 1e3, n.para.heatmap.get_vtrack_config !== !0 && (n.para.heatmap.get_vtrack_config = !1);
            var D = T(n.para.heatmap.track_attr) ? Qt(n.para.heatmap.track_attr, function(h) {
                return h && typeof h == "string"
            }) : [];
            if (D.push("data-sensors-click"), n.para.heatmap.track_attr = D, d(n.para.heatmap.collect_tags))
                if (n.para.heatmap.collect_tags.div === !0) n.para.heatmap.collect_tags.div = {
                    ignore_tags: _,
                    max_level: 1
                };
                else if (d(n.para.heatmap.collect_tags.div)) {
                if (n.para.heatmap.collect_tags.div.ignore_tags ? T(n.para.heatmap.collect_tags.div.ignore_tags) || (n.log("ignore_tags \u53C2\u6570\u5FC5\u987B\u662F\u6570\u7EC4\u683C\u5F0F"), n.para.heatmap.collect_tags.div.ignore_tags = _) : n.para.heatmap.collect_tags.div.ignore_tags = _, n.para.heatmap.collect_tags.div.max_level) {
                    var S = [1, 2, 3];
                    Q(S, n.para.heatmap.collect_tags.div.max_level) === -1 && (n.para.heatmap.collect_tags.div.max_level = 1)
                }
            } else n.para.heatmap.collect_tags.div = !1;
            else n.para.heatmap.collect_tags = p
        }
        if (T(n.para.server_url) && n.para.server_url.length)
            for (i = 0; i < n.para.server_url.length; i++) /sa\.gif[^\/]*$/.test(n.para.server_url[i]) || (n.para.server_url[i] = n.para.server_url[i].replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
        else /sa\.gif[^\/]*$/.test(n.para.server_url) || typeof n.para.server_url != "string" || (n.para.server_url = n.para.server_url.replace(/\/sa$/, "/sa.gif").replace(/(\/sa)(\?[^\/]+)$/, "/sa.gif$2"));
        typeof n.para.server_url == "string" && (n.para.debug_mode_url = n.para.debug_mode_url || n.para.server_url.replace("sa.gif", "debug")), n.para.noCache === !0 ? n.para.noCache = "?" + new Date().getTime() : n.para.noCache = "", n.para.callback_timeout > n.para.datasend_timeout && (n.para.datasend_timeout = n.para.callback_timeout), n.para.heatmap && n.para.heatmap.collect_tags && d(n.para.heatmap.collect_tags) && C(n.para.heatmap.collect_tags, function(h, I) {
            I !== "div" && h && n.heatmap.otherTags.push(I)
        }), n.para.heatmap && n.para.heatmap.clickmap === "default" && n.heatmap.initUnlimitedTags()
    }

    function Pr(e) {
        var t = {};
        for (var r in e) t[r] = e[r];
        n.store._state.identities = t, n.store.save()
    }

    function _i() {
        n._t = n._t || 1 * new Date, n.lib_version = Jr, n.is_first_visitor = !1, n.source_channel_standard = Lt
    }

    function gi() {
        if (ve.isSupport()) try {
            sessionStorage.setItem("sensorsdata_jssdk_debug", "true")
        } catch (e) {
            n.log("enableLocalLog error: " + e.message)
        }
    }

    function hi() {
        ve.isSupport() && sessionStorage.removeItem("sensorsdata_jssdk_debug")
    }

    function mi() {
        var e = Array.prototype.slice.call(arguments),
            t = e[0],
            r = e.slice(1);
        return typeof t == "string" && Jt[t] ? Jt[t].apply(Jt, r) : void(typeof t == "function" ? t.apply(n, r) : n.log("quick\u65B9\u6CD5\u4E2D\u6CA1\u6709\u8FD9\u4E2A\u529F\u80FD" + e[0]))
    }

    function vi(e, t) {
        return w(e) ? d(window.SensorsDataWebJSSDKPlugin) && d(window.SensorsDataWebJSSDKPlugin[e]) && A(window.SensorsDataWebJSSDKPlugin[e].init) ? (window.SensorsDataWebJSSDKPlugin[e].init(n, t), window.SensorsDataWebJSSDKPlugin[e]) : d(n.modules) && d(n.modules[e]) && A(n.modules[e].init) ? (n.modules[e].init(n, t), n.modules[e]) : void n.log(e + "\u6CA1\u6709\u83B7\u53D6\u5230,\u8BF7\u67E5\u9605\u6587\u6863\uFF0C\u8C03\u6574" + e + "\u7684\u5F15\u5165\u987A\u5E8F\uFF01") : (n.log("use\u63D2\u4EF6\u540D\u79F0\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\uFF01"), !1)
    }

    function yi(e, t, r) {
        L.check({
            event: e,
            properties: t
        }) && L.send({
            type: "track",
            event: e,
            properties: t
        }, r)
    }

    function bi(e, t) {
        return !!L.check({
            bindKey: e,
            bindValue: t
        }) && (n.store._state.identities[e] = t, n.store.save(), void L.send({
            type: "track_id_bind",
            event: "$BindID",
            properties: {}
        }))
    }

    function wi(e, t) {
        if (!L.check({
                unbindKey: e,
                bindValue: t
            })) return !1;
        if (d(n.store._state.identities) && n.store._state.identities.hasOwnProperty(e) && n.store._state.identities[e] === t) {
            var r = n.store.getUnionId().login_id;
            r && e + "+" + t === r && (n.store._state.distinct_id = n.store._state.first_id, n.store._state.first_id = "", n.store.set("history_login_id", {
                name: "",
                value: ""
            })), e !== "$identity_cookie_id" && (delete n.store._state.identities[e], n.store.save())
        }
        var i = {};
        i[e] = t, L.send({
            identities: i,
            type: "track_id_unbind",
            event: "$UnbindID",
            properties: {}
        })
    }

    function Si(e, t, r) {
        function i(a, s, u) {
            function c(p) {
                function _() {
                    D || (D = !0, location.href = l.href)
                }
                p.stopPropagation(), p.preventDefault();
                var D = !1;
                setTimeout(_, 1e3), n.track(s, u, _)
            }
            a = a || {};
            var l = null;
            return a.ele && (l = a.ele), a.event && (l = a.target ? a.target : a.event.target), u = u || {}, !(!l || typeof l != "object") && (!l.href || /^javascript/.test(l.href) || l.target || l.download || l.onclick ? (n.track(s, u), !1) : (a.event && c(a.event), void(a.ele && De(a.ele, "click", function(p) {
                c(p)
            }))))
        }
        typeof e == "object" && e.tagName ? i({
            ele: e
        }, t, r) : typeof e == "object" && e.target && e.event && i(e, t, r)
    }

    function ki(e, t, r) {
        return r = r || {}, !(!e || typeof e != "object") && !(!e.href || /^javascript/.test(e.href) || e.target) && void De(e, "click", function(i) {
            function a() {
                s || (s = !0, location.href = e.href)
            }
            i.preventDefault();
            var s = !1;
            setTimeout(a, 1e3), n.track(t, r, a)
        })
    }

    function Pi(e, t, r) {
        L.check({
            item_type: e,
            item_id: t,
            properties: r
        }) && L.sendItem({
            type: "item_set",
            item_type: e,
            item_id: t,
            properties: r || {}
        })
    }

    function Di(e, t) {
        L.check({
            item_type: e,
            item_id: t
        }) && L.sendItem({
            type: "item_delete",
            item_type: e,
            item_id: t
        })
    }

    function ji(e, t) {
        L.check({
            propertiesMust: e
        }) && L.send({
            type: "profile_set",
            properties: e
        }, t)
    }

    function Ni(e, t) {
        L.check({
            propertiesMust: e
        }) && L.send({
            type: "profile_set_once",
            properties: e
        }, t)
    }

    function Ci(e, t) {
        L.check({
            propertiesMust: e
        }) && (C(e, function(r, i) {
            w(r) ? e[i] = [r] : T(r) ? e[i] = r : (delete e[i], n.log("appendProfile\u5C5E\u6027\u7684\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u6216\u8005\u6570\u7EC4"))
        }), F(e) || L.send({
            type: "profile_append",
            properties: e
        }, t))
    }

    function Oi(e, t) {
        function r(a) {
            for (var s in a)
                if (Object.prototype.hasOwnProperty.call(a, s) && !/-*\d+/.test(String(a[s]))) return !1;
            return !0
        }
        var i = e;
        w(e) && (e = {}, e[i] = 1), L.check({
            propertiesMust: e
        }) && (r(e) ? L.send({
            type: "profile_increment",
            properties: e
        }, t) : n.log("profile_increment\u7684\u503C\u53EA\u80FD\u662F\u6570\u5B57"))
    }

    function $i(e) {
        L.send({
            type: "profile_delete"
        }, e), J.set("distinct_id", je()), J.set("first_id", "")
    }

    function Ai(e, t) {
        var r = e,
            i = {};
        w(e) && (e = [], e.push(r)), T(e) ? (C(e, function(a) {
            w(a) ? i[a] = !0 : n.log("profile_unset\u7ED9\u7684\u6570\u7EC4\u91CC\u9762\u7684\u503C\u5FC5\u987B\u65F6string,\u5DF2\u7ECF\u8FC7\u6EE4\u6389", a)
        }), L.send({
            type: "profile_unset",
            properties: i
        }, t)) : n.log("profile_unset\u7684\u53C2\u6570\u662F\u6570\u7EC4")
    }

    function Ti(e, t) {
        function r(s) {
            n.store._state.identities.$identity_anonymous_id = s, n.store.save()
        }
        typeof e == "number" && (e = String(e));
        var i = J.getFirstId();
        if (typeof e == "undefined") {
            var a = je();
            i ? J.set("first_id", a) : J.set("distinct_id", a), r(a)
        } else L.check({
            distinct_id: e
        }) && (t === !0 ? i ? J.set("first_id", e) : J.set("distinct_id", e) : i ? J.change("first_id", e) : J.change("distinct_id", e), r(e))
    }

    function Dr(e, t, r, i) {
        var a = J.getFirstId() || J.getDistinctId();
        J.set("distinct_id", e), L.send({
            original_id: a,
            distinct_id: n.store.getDistinctId(),
            type: "track_signup",
            event: t,
            properties: r
        }, i)
    }

    function xi(e, t, r, i) {
        typeof e == "number" && (e = String(e)), L.check({
            distinct_id: e,
            event: t,
            properties: r
        }) && Dr(e, t, r, i)
    }

    function Li(e) {
        L.check({
            properties: e
        }) ? $(H.currentProps, e) : n.log("register\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
    }

    function Ii(e) {
        J.clearAllProps(e)
    }

    function Ei(e) {
        var t;
        if (T(e) && e.length > 0)
            for (t = 0; t < e.length; t++) w(e[t]) && e[t] in H.currentProps && delete H.currentProps[e[t]];
        else if (e === !0)
            for (t in H.currentProps) delete H.currentProps[t]
    }

    function Ji(e) {
        L.check({
            properties: e
        }) ? J.setProps(e) : n.log("register\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
    }

    function Hi(e) {
        L.check({
            properties: e
        }) ? J.setPropsOnce(e) : n.log("registerOnce\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
    }

    function Bi(e) {
        L.check({
            properties: e
        }) ? J.setSessionProps(e) : n.log("registerSession\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
    }

    function Ri(e) {
        L.check({
            properties: e
        }) ? J.setSessionPropsOnce(e) : n.log("registerSessionOnce\u8F93\u5165\u7684\u53C2\u6570\u6709\u8BEF")
    }

    function jr(e) {
        var t = e.id,
            r = e.callback,
            i = e.name,
            a = J.getFirstId(),
            s = J.getOriginDistinctId();
        if (!L.check({
                distinct_id: t
            })) return n.log("login id is invalid"), !1;
        if (t === n.store.getOriginDistinctId() && !a) return n.log("login id is equal to distinct_id"), !1;
        if (d(n.store._state.identities) && n.store._state.identities.hasOwnProperty(i) && t === n.store._state.first_id) return !1;
        var u = n.store._state.history_login_id.name !== i || t !== n.store._state.history_login_id.value;
        if (u) {
            n.store._state.identities[i] = t, n.store.set("history_login_id", {
                name: i,
                value: t
            }), a || J.set("first_id", s), Dr(t, "$SignUp", {}, r);
            var c = {
                $identity_cookie_id: n.store._state.identities.$identity_cookie_id
            };
            c[i] = t, Pr(c)
        }
    }

    function Nr(e, t) {
        typeof e == "number" && (e = String(e)), jr({
            id: e,
            callback: t,
            name: ot.LOGIN
        }), A(t) && t()
    }

    function Ui(e, t) {
        return typeof t == "number" && (t = String(t)), typeof e == "number" && (e = String(e)), !!L.check({
            loginIdKey: e
        }) && (ot.LOGIN === e ? (Nr(t), !1) : void jr({
            id: t,
            callback: null,
            name: e
        }))
    }

    function Ki(e) {
        var t = J.getFirstId();
        if (t)
            if (J.set("first_id", ""), e === !0) {
                var r = je();
                J.set("distinct_id", r)
            } else J.set("distinct_id", t);
        Pr({
            $identity_cookie_id: n.store._state.identities.$identity_cookie_id
        }), n.store.set("history_login_id", {
            name: "",
            value: ""
        })
    }

    function Mi() {
        function e() {
            var i = H.campaignParams(),
                a = {};
            return C(i, function(s, u, c) {
                (" " + n.source_channel_standard + " ").indexOf(" " + u + " ") !== -1 ? a["$" + u] = c[u] : a[u] = c[u]
            }), a
        }
        var t = {
                $is_first_day: nt(),
                $is_first_time: Ie.is_page_first_visited,
                $referrer: H.pageProp.referrer || "",
                $referrer_host: H.pageProp.referrer ? de(H.pageProp.referrer) : "",
                $url: Y(),
                $url_path: Pe(),
                $title: document.title || "",
                _distinct_id: J.getDistinctId(),
                identities: JSON.parse(JSON.stringify(J._state.identities))
            },
            r = $({}, H.properties(), n.store.getProps(), e(), t);
        return n.para.preset_properties.latest_referrer && n.para.preset_properties.latest_referrer_host && (r.$latest_referrer_host = r.$latest_referrer === "" ? "" : de(r.$latest_referrer)), r
    }

    function Vi() {
        var e = "",
            t = " { cursor: pointer; -webkit-tap-highlight-color: rgba(0,0,0,0); }";
        n.heatmap && T(n.heatmap.otherTags) && C(n.heatmap.otherTags, function(r) {
            e += r + t
        }), or() && wt() && wt() < 13 && (n.para.heatmap && n.para.heatmap.collect_tags && n.para.heatmap.collect_tags.div && tt("div, [data-sensors-click]" + t), n.para.heatmap && n.para.heatmap.track_attr && tt("[" + n.para.heatmap.track_attr.join("], [") + "]" + t), e !== "" && tt(e))
    }

    function Wi(e, t) {
        var r = Ee.encodeTrackData(t);
        return e.indexOf("?") !== -1 ? e + "&" + r : e + "?" + r
    }

    function Cr(e) {
        return Ee.encodeTrackData(e)
    }

    function qi(e) {
        var t = ["image", "ajax", "beacon"],
            r = t[0];
        return r = e.config && Q(t, e.config.send_type) > -1 ? e.config.send_type : n.para.send_type, r === "beacon" && ur() === !1 && (r = "image"), r === "ajax" && Dt() === !1 && (r = "image"), r
    }

    function Fi(e) {
        var t = qi(e);
        switch (t) {
            case "image":
                return new lt(e);
            case "ajax":
                return new Rr(e);
            case "beacon":
                return new Ur(e);
            default:
                return new lt(e)
        }
    }

    function zi(e) {
        var t = Fi(e),
            r = t.start;
        return t.start = function() {
            var i = this;
            r.apply(this, arguments), setTimeout(function() {
                i.isEnd(!0)
            }, n.para.callback_timeout)
        }, t.end = function() {
            this.callback && this.callback();
            var i = this;
            setTimeout(function() {
                i.lastClear && i.lastClear()
            }, n.para.datasend_timeout - n.para.callback_timeout)
        }, t.isEnd = function() {
            this.received || (this.received = !0, this.end())
        }, t
    }

    function Or() {
        this.sendTimeStamp = 0, this.timer = null, this.serverUrl = "", this.hasTabStorage = !1
    }

    function Xi(e) {
        var t = location.href,
            r = window.history.pushState,
            i = window.history.replaceState;
        A(window.history.pushState) && (window.history.pushState = function() {
            r.apply(window.history, arguments), e(t), t = location.href
        }), A(window.history.replaceState) && (window.history.replaceState = function() {
            i.apply(window.history, arguments), e(t), t = location.href
        });
        var a;
        a = window.document.documentMode ? "hashchange" : r ? "popstate" : "hashchange", ke(window, a, function() {
            e(t), t = location.href
        })
    }

    function Le(e) {
        var t = null,
            r = new RegExp(e + "=([^&#]+)");
        try {
            var i = JSON.parse(window.name);
            C(i, function(s, u) {
                e === u && (t = decodeURIComponent(s))
            })
        } catch (s) {
            t = null
        }
        if (t === null) {
            var a = location.href.match(r);
            a && a[0] && a[1] && (t = Se(a[1]))
        }
        return t
    }

    function $r(e) {
        function t() {
            var s = [];
            r.touch_app_bridge || s.push(n.debug.defineMode("1")), d(n.para.app_js_bridge) || (s.push(n.debug.defineMode("2")), r.verify_success = !1), d(n.para.heatmap) && n.para.heatmap.clickmap == "default" || s.push(n.debug.defineMode("3")), r.verify_success === "fail" && s.push(n.debug.defineMode("4"));
            var u = {
                callType: "app_alert",
                data: s
            };
            SensorsData_App_Visual_Bridge && SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info ? SensorsData_App_Visual_Bridge.sensorsdata_visualized_alert_info(JSON.stringify(u)) : window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(u))
        }
        var r = n.bridge.bridge_info;
        if (d(window.SensorsData_App_Visual_Bridge) && window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode && (window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode === !0 || window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode()))
            if (d(n.para.heatmap) && n.para.heatmap.clickmap == "default")
                if (d(n.para.app_js_bridge) && r.verify_success === "success")
                    if (e) sa_jssdk_app_define_mode(n, e);
                    else {
                        var i = location.protocol,
                            a = ["http:", "https:"];
                        i = Q(a, i) > -1 ? i : "https:", et({
                            success: function() {
                                setTimeout(function() {
                                    typeof sa_jssdk_app_define_mode != "undefined" && sa_jssdk_app_define_mode(n, e)
                                }, 0)
                            },
                            error: function() {},
                            type: "js",
                            url: i + "//static.sensorsdata.cn/sdk/" + n.lib_version + "/vapph5define.min.js"
                        })
                    }
        else t();
        else t()
    }

    function Zi() {
        n.para.is_track_single_page && Bt.on("switch", function(e) {
            var t = function(i) {
                i = i || {}, e !== location.href && (H.pageProp.referrer = Y(e), n.quick("autoTrack", $({
                    $url: Y(),
                    $referrer: Y(e)
                }, i)))
            };
            if (typeof n.para.is_track_single_page == "boolean") t();
            else if (typeof n.para.is_track_single_page == "function") {
                var r = n.para.is_track_single_page();
                d(r) ? t(r) : r === !0 && t()
            }
        })
    }

    function Yi() {
        n._q && T(n._q) && n._q.length > 0 && C(n._q, function(e) {
            n[e[0]].apply(n, Array.prototype.slice.call(e[1]))
        }), d(n.para.heatmap) && (pe.initHeatmap(), pe.initScrollmap())
    }

    function Gi() {
        n.readyState.setState(3), new n.JSBridge({
            type: "visualized",
            app_call_js: function() {
                $r(typeof sa_jssdk_app_define_mode != "undefined")
            }
        }), $r(!1), n.bridge.app_js_bridge_v1(), H.initPage(), Zi(), !n.para.app_js_bridge && n.para.batch_send && x.isSupport() && n.batchSend.batchInterval(), n.store.init(), n.vtrackBase.init(), n.readyState.setState(4), Yi()
    }

    function Qi() {
        ze.isSeachHasKeyword() ? ze.hasKeywordHandle() : window.parent !== self && oe.isSearchHasKeyword() ? oe.verifyVtrackMode() : ze.isStorageHasKeyword() ? ze.storageHasKeywordHandle() : window.parent !== self && oe.isStorageHasKeyword() ? oe.verifyVtrackMode() : (Gi(), oe.notifyUser())
    }

    function en() {
        C($n, function(e) {
            var t = n[e];
            n[e] = function() {
                if (n.readyState.state < 3) return T(n._q) || (n._q = []), n._q.push([e, arguments]), !1; {
                    if (n.readyState.getState()) return t.apply(n, arguments);
                    try {
                        console.error("\u8BF7\u5148\u521D\u59CB\u5316\u795E\u7B56JS SDK")
                    } catch (r) {
                        n.log(r)
                    }
                }
            }
        })
    }

    function tn(e) {
        this.cancel = function() {
            e = !0
        }, this.getCanceled = function() {
            return e || !1
        }
    }

    function rn(e, t, r) {
        var i = null;
        try {
            i = JSON.parse(JSON.stringify(e))
        } catch (a) {
            B(a)
        }
        this.getOriginalData = function() {
            return i
        }, this.getPosition = function() {
            return t
        }, this.cancelationToken = new tn, this.sensors = r
    }

    function at(e) {
        if (!d(e)) throw "error: Stage constructor requires arguments.";
        this.processDef = e, this.registeredInterceptors = {}
    }

    function $t(e) {
        e && e.dataStage && xn.registerStageImplementation(e.dataStage)
    }

    function nn(e) {
        e.kit = Ee, e.saEvent = L, this.dataStage = ct
    }

    function an(e) {
        return d(e) && C(e, function(t, r) {
            if (T(t)) {
                var i = [];
                C(t, function(a) {
                    w(a) ? i.push(a) : B("\u60A8\u7684\u6570\u636E-", r, t, "\u7684\u6570\u7EC4\u91CC\u7684\u503C\u5FC5\u987B\u662F\u5B57\u7B26\u4E32,\u5DF2\u7ECF\u5C06\u5176\u5220\u9664")
                }), e[r] = i
            }
            w(t) || se(t) || Re(t) || ar(t) || T(t) || A(t) || r === "$option" || (B("\u60A8\u7684\u6570\u636E-", r, t, "-\u683C\u5F0F\u4E0D\u6EE1\u8DB3\u8981\u6C42\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664"), delete e[r])
        }), e
    }

    function sn(e, t) {
        return se(t) && e.length > t ? (B("\u5B57\u7B26\u4E32\u957F\u5EA6\u8D85\u8FC7\u9650\u5236\uFF0C\u5DF2\u7ECF\u505A\u622A\u53D6--" + e), e.slice(0, t)) : e
    }

    function on(e) {
        var t = ["distinct_id", "user_id", "id", "date", "datetime", "event", "events", "first_id", "original_id", "device_id", "properties", "second_id", "time", "users"];
        d(e) && C(t, function(r, i) {
            r in e && (i < 3 ? (delete e[r], B("\u60A8\u7684\u5C5E\u6027- " + r + "\u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u5C06\u5176\u5220\u9664")) : B("\u60A8\u7684\u5C5E\u6027- " + r + "\u662F\u4FDD\u7559\u5B57\u6BB5\uFF0C\u8BF7\u907F\u514D\u5176\u4F5C\u4E3A\u5C5E\u6027\u540D"))
        })
    }

    function Ar(e) {
        var t = ["$element_selector", "$element_path"],
            r = ["sensorsdata_app_visual_properties"];
        d(e) && C(e, function(i, a) {
            if (d(i)) Ar(e[a]);
            else if (w(i)) {
                if (Q(r, a) > -1) return;
                e[a] = sn(i, Q(t, a) > -1 ? 1024 : O.max_string_length)
            }
        })
    }

    function un(e) {
        typeof e.properties.$project != "undefined" && (e.project = e.properties.$project, delete e.properties.$project), typeof e.properties.$token != "undefined" && (e.token = e.properties.$token, delete e.properties.$token)
    }

    function cn(e) {
        if ("item_type" in e) {
            var t = e.item_type,
                r = function(s) {
                    return s || delete e.item_type, !0
                };
            xe({
                item_type: t
            }, r)
        }
        if ("item_id" in e) {
            var i = e.item_id,
                a = function(s, u, c) {
                    return s || c !== "string" || delete e.item_id, !0
                };
            xe({
                item_id: i
            }, a)
        }
    }

    function ln(e) {
        C(e, function(t, r) {
            var i = function(a, s, u) {
                return a || u === "keyLength" || delete e[r], !0
            };
            xe({
                propertyKey: r
            }, i)
        })
    }

    function dn(e) {
        var t = e.properties;
        d(t) ? (an(t), on(t), un(e), ln(t), Ar(t)) : "properties" in e && (e.properties = {}), Nt(e), cn(e)
    }

    function pn() {
        this.dataStage = Ln
    }

    function At(e) {
        e && (z.setup(B), n._ = $(yn, Pn), n.ee = Rt, n.sendState = Fe, n.events = new n._.EventEmitterSa, n.batchSend = Dn, n.bridge = jn, n.JSBridge = Ce, n.store = J, n.vtrackBase = R, n.unlimitedDiv = Mr, n.customProp = Vr, n.vtrackcollect = Nn, n.vapph5collect = On, n.heatmap = pe, n.detectMode = Qi, n.registerFeature = $t, $t(new nn(n)), $t(new pn(n)));
        var t = e ? kn : An;
        for (var r in t) n[r] = t[r]
    }
    var n = {};
    (function() {
        function e(c, l) {
            function p(v, b) {
                try {
                    v()
                } catch (f) {
                    b && b()
                }
            }

            function _(v) {
                if (_[v] != null) return _[v];
                var b;
                if (v == "bug-string-char-index") b = "a" [0] != "a";
                else if (v == "json") b = _("json-stringify") && _("date-serialization") && _("json-parse");
                else if (v == "date-serialization") {
                    if (b = _("json-stringify") && fe) {
                        var f = l.stringify;
                        p(function() {
                            b = f(new E(-864e13)) == '"-271821-04-20T00:00:00.000Z"' && f(new E(864e13)) == '"+275760-09-13T00:00:00.000Z"' && f(new E(-621987552e5)) == '"-000001-01-01T00:00:00.000Z"' && f(new E(-1)) == '"1969-12-31T23:59:59.999Z"'
                        })
                    }
                } else {
                    var k, g = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
                    if (v == "json-stringify") {
                        var f = l.stringify,
                            P = typeof f == "function";
                        P && ((k = function() {
                            return 1
                        }).toJSON = k, p(function() {
                            P = f(0) === "0" && f(new S) === "0" && f(new h) == '""' && f(ae) === ue && f(ue) === ue && f() === ue && f(k) === "1" && f([k]) == "[1]" && f([ue]) == "[null]" && f(null) == "null" && f([ue, ae, null]) == "[null,null,null]" && f({
                                a: [k, !0, !1, null, `\0\b
\f\r	`]
                            }) == g && f(null, k) === "1" && f([1, 2], null, 1) == `[
 1,
 2
]`
                        }, function() {
                            P = !1
                        })), b = P
                    }
                    if (v == "json-parse") {
                        var j, y = l.parse;
                        typeof y == "function" && p(function() {
                            y("0") !== 0 || y(!1) || (k = y(g), j = k.a.length == 5 && k.a[0] === 1, j && (p(function() {
                                j = !y('"	"')
                            }), j && p(function() {
                                j = y("01") !== 1
                            }), j && p(function() {
                                j = y("1.") !== 1
                            })))
                        }, function() {
                            j = !1
                        }), b = j
                    }
                }
                return _[v] = !!b
            }

            function D(v) {
                return Mt(this)
            }
            c || (c = r.Object()), l || (l = r.Object());
            var S = c.Number || r.Number,
                h = c.String || r.String,
                I = c.Object || r.Object,
                E = c.Date || r.Date,
                W = c.SyntaxError || r.SyntaxError,
                ye = c.TypeError || r.TypeError,
                En = c.Math || r.Math,
                dt = c.JSON || r.JSON;
            if (typeof dt == "object" && dt) return l.stringify = dt.stringify, l.parse = dt.parse, l.runInContext = e, l;
            var ue, zr = I.prototype,
                ae = zr.toString,
                pt = zr.hasOwnProperty,
                fe = new E(-3509827334573292);
            if (p(function() {
                    fe = fe.getUTCFullYear() == -109252 && fe.getUTCMonth() === 0 && fe.getUTCDate() === 1 && fe.getUTCHours() == 10 && fe.getUTCMinutes() == 37 && fe.getUTCSeconds() == 6 && fe.getUTCMilliseconds() == 708
                }), _["bug-string-char-index"] = _["date-serialization"] = _.json = _["json-stringify"] = _["json-parse"] = null, !_("json")) {
                var ft = "[object Function]",
                    Jn = "[object Date]",
                    Xr = "[object Number]",
                    Zr = "[object String]",
                    Ut = "[object Array]",
                    Hn = "[object Boolean]",
                    Kt = _("bug-string-char-index"),
                    Je = function(v, b) {
                        var f, k, g, P = 0;
                        (f = function() {
                            this.valueOf = 0
                        }).prototype.valueOf = 0, k = new f;
                        for (g in k) pt.call(k, g) && P++;
                        return f = k = null, P ? Je = function(j, y) {
                            var K, G, M = ae.call(j) == ft;
                            for (K in j) M && K == "prototype" || !pt.call(j, K) || (G = K === "constructor") || y(K);
                            (G || pt.call(j, K = "constructor")) && y(K)
                        } : (k = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], Je = function(j, y) {
                            var K, G, M = ae.call(j) == ft,
                                we = !M && typeof j.constructor != "function" && t[typeof j.hasOwnProperty] && j.hasOwnProperty || pt;
                            for (K in j) M && K == "prototype" || !we.call(j, K) || y(K);
                            for (G = k.length; K = k[--G];) we.call(j, K) && y(K)
                        }), Je(v, b)
                    };
                if (!_("json-stringify") && !_("date-serialization")) {
                    var Bn = {
                            92: "\\\\",
                            34: '\\"',
                            8: "\\b",
                            12: "\\f",
                            10: "\\n",
                            13: "\\r",
                            9: "\\t"
                        },
                        Rn = "000000",
                        ge = function(v, b) {
                            return (Rn + (b || 0)).slice(-v)
                        },
                        Mt = function(v) {
                            var b, f, k, g, P, j, y, K, G;
                            if (fe) b = function(U) {
                                f = U.getUTCFullYear(), k = U.getUTCMonth(), g = U.getUTCDate(), j = U.getUTCHours(), y = U.getUTCMinutes(), K = U.getUTCSeconds(), G = U.getUTCMilliseconds()
                            };
                            else {
                                var M = En.floor,
                                    we = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
                                    he = function(U, me) {
                                        return we[me] + 365 * (U - 1970) + M((U - 1969 + (me = +(me > 1))) / 4) - M((U - 1901 + me) / 100) + M((U - 1601 + me) / 400)
                                    };
                                b = function(U) {
                                    for (g = M(U / 864e5), f = M(g / 365.2425) + 1970 - 1; he(f + 1, 0) <= g; f++);
                                    for (k = M((g - he(f, 0)) / 30.42); he(f, k + 1) <= g; k++);
                                    g = 1 + g - he(f, k), P = (U % 864e5 + 864e5) % 864e5, j = M(P / 36e5) % 24, y = M(P / 6e4) % 60, K = M(P / 1e3) % 60, G = P % 1e3
                                }
                            }
                            return (Mt = function(U) {
                                return U > -1 / 0 && U < 1 / 0 ? (b(U), U = (f <= 0 || f >= 1e4 ? (f < 0 ? "-" : "+") + ge(6, f < 0 ? -f : f) : ge(4, f)) + "-" + ge(2, k + 1) + "-" + ge(2, g) + "T" + ge(2, j) + ":" + ge(2, y) + ":" + ge(2, K) + "." + ge(3, G) + "Z", f = k = g = j = y = K = G = null) : U = null, U
                            })(v)
                        };
                    if (_("json-stringify") && !_("date-serialization")) {
                        var Un = l.stringify;
                        l.stringify = function(v, b, f) {
                            var k = E.prototype.toJSON;
                            E.prototype.toJSON = D;
                            var g = Un(v, b, f);
                            return E.prototype.toJSON = k, g
                        }
                    } else {
                        var Kn = "\\u00",
                            Mn = function(v) {
                                var b = v.charCodeAt(0),
                                    f = Bn[b];
                                return f || Kn + ge(2, b.toString(16))
                            },
                            Vt = /[\x00-\x1f\x22\x5c]/g,
                            Yr = function(v) {
                                return Vt.lastIndex = 0, '"' + (Vt.test(v) ? v.replace(Vt, Mn) : v) + '"'
                            },
                            Wt = function(v, b, f, k, g, P, j) {
                                var y, K, G, M, we, he, U, me, Ft;
                                if (p(function() {
                                        y = b[v]
                                    }), typeof y == "object" && y && (y.getUTCFullYear && ae.call(y) == Jn && y.toJSON === E.prototype.toJSON ? y = Mt(y) : typeof y.toJSON == "function" && (y = y.toJSON(v))), f && (y = f.call(b, v, y)), y == ue) return y === ue ? y : "null";
                                switch (K = typeof y, K == "object" && (G = ae.call(y)), G || K) {
                                    case "boolean":
                                    case Hn:
                                        return "" + y;
                                    case "number":
                                    case Xr:
                                        return y > -1 / 0 && y < 1 / 0 ? "" + y : "null";
                                    case "string":
                                    case Zr:
                                        return Yr("" + y)
                                }
                                if (typeof y == "object") {
                                    for (U = j.length; U--;)
                                        if (j[U] === y) throw ye();
                                    if (j.push(y), M = [], me = P, P += g, G == Ut) {
                                        for (he = 0, U = y.length; he < U; he++) we = Wt(he, y, f, k, g, P, j), M.push(we === ue ? "null" : we);
                                        Ft = M.length ? g ? `[
` + P + M.join(`,
` + P) + `
` + me + "]" : "[" + M.join(",") + "]" : "[]"
                                    } else Je(k || y, function(ei) {
                                        var ti = Wt(ei, y, f, k, g, P, j);
                                        ti !== ue && M.push(Yr(ei) + ":" + (g ? " " : "") + ti)
                                    }), Ft = M.length ? g ? `{
` + P + M.join(`,
` + P) + `
` + me + "}" : "{" + M.join(",") + "}" : "{}";
                                    return j.pop(), Ft
                                }
                            };
                        l.stringify = function(v, b, f) {
                            var k, g, P, j;
                            if (t[typeof b] && b) {
                                if (j = ae.call(b), j == ft) g = b;
                                else if (j == Ut) {
                                    P = {};
                                    for (var y, K = 0, G = b.length; K < G;) y = b[K++], j = ae.call(y), j != "[object String]" && j != "[object Number]" || (P[y] = 1)
                                }
                            }
                            if (f)
                                if (j = ae.call(f), j == Xr) {
                                    if ((f -= f % 1) > 0)
                                        for (f > 10 && (f = 10), k = ""; k.length < f;) k += " "
                                } else j == Zr && (k = f.length <= 10 ? f : f.slice(0, 10));
                            return Wt("", (y = {}, y[""] = v, y), g, P, k, "", [])
                        }
                    }
                }
                if (!_("json-parse")) {
                    var N, _t, Vn = h.fromCharCode,
                        Wn = {
                            92: "\\",
                            34: '"',
                            47: "/",
                            98: "\b",
                            116: "	",
                            110: `
`,
                            102: "\f",
                            114: "\r"
                        },
                        X = function() {
                            throw N = _t = null, W()
                        },
                        be = function() {
                            for (var v, b, f, k, g, P = _t, j = P.length; N < j;) switch (g = P.charCodeAt(N)) {
                                case 9:
                                case 10:
                                case 13:
                                case 32:
                                    N++;
                                    break;
                                case 123:
                                case 125:
                                case 91:
                                case 93:
                                case 58:
                                case 44:
                                    return v = Kt ? P.charAt(N) : P[N], N++, v;
                                case 34:
                                    for (v = "@", N++; N < j;)
                                        if (g = P.charCodeAt(N), g < 32) X();
                                        else if (g == 92) switch (g = P.charCodeAt(++N)) {
                                        case 92:
                                        case 34:
                                        case 47:
                                        case 98:
                                        case 116:
                                        case 110:
                                        case 102:
                                        case 114:
                                            v += Wn[g], N++;
                                            break;
                                        case 117:
                                            for (b = ++N, f = N + 4; N < f; N++) g = P.charCodeAt(N), g >= 48 && g <= 57 || g >= 97 && g <= 102 || g >= 65 && g <= 70 || X();
                                            v += Vn("0x" + P.slice(b, N));
                                            break;
                                        default:
                                            X()
                                    } else {
                                        if (g == 34) break;
                                        for (g = P.charCodeAt(N), b = N; g >= 32 && g != 92 && g != 34;) g = P.charCodeAt(++N);
                                        v += P.slice(b, N)
                                    }
                                    if (P.charCodeAt(N) == 34) return N++, v;
                                    X();
                                default:
                                    if (b = N, g == 45 && (k = !0, g = P.charCodeAt(++N)), g >= 48 && g <= 57) {
                                        for (g == 48 && (g = P.charCodeAt(N + 1), g >= 48 && g <= 57) && X(), k = !1; N < j && (g = P.charCodeAt(N), g >= 48 && g <= 57); N++);
                                        if (P.charCodeAt(N) == 46) {
                                            for (f = ++N; f < j && (g = P.charCodeAt(f), !(g < 48 || g > 57)); f++);
                                            f == N && X(), N = f
                                        }
                                        if (g = P.charCodeAt(N), g == 101 || g == 69) {
                                            for (g = P.charCodeAt(++N), g != 43 && g != 45 || N++, f = N; f < j && (g = P.charCodeAt(f), !(g < 48 || g > 57)); f++);
                                            f == N && X(), N = f
                                        }
                                        return +P.slice(b, N)
                                    }
                                    k && X();
                                    var y = P.slice(N, N + 4);
                                    if (y == "true") return N += 4, !0;
                                    if (y == "fals" && P.charCodeAt(N + 4) == 101) return N += 5, !1;
                                    if (y == "null") return N += 4, null;
                                    X()
                            }
                            return "$"
                        },
                        qt = function(v) {
                            var b, f;
                            if (v == "$" && X(), typeof v == "string") {
                                if ((Kt ? v.charAt(0) : v[0]) == "@") return v.slice(1);
                                if (v == "[") {
                                    for (b = []; v = be(), v != "]";) f ? v == "," ? (v = be(), v == "]" && X()) : X() : f = !0, v == "," && X(), b.push(qt(v));
                                    return b
                                }
                                if (v == "{") {
                                    for (b = {}; v = be(), v != "}";) f ? v == "," ? (v = be(), v == "}" && X()) : X() : f = !0, v != "," && typeof v == "string" && (Kt ? v.charAt(0) : v[0]) == "@" && be() == ":" || X(), b[v.slice(1)] = qt(be());
                                    return b
                                }
                                X()
                            }
                            return v
                        },
                        Gr = function(v, b, f) {
                            var k = Qr(v, b, f);
                            k === ue ? delete v[b] : v[b] = k
                        },
                        Qr = function(v, b, f) {
                            var k, g = v[b];
                            if (typeof g == "object" && g)
                                if (ae.call(g) == Ut)
                                    for (k = g.length; k--;) Gr(ae, Je, g, k, f);
                                else Je(g, function(P) {
                                    Gr(g, P, f)
                                });
                            return f.call(v, b, g)
                        };
                    l.parse = function(v, b) {
                        var f, k;
                        return N = 0, _t = "" + v, f = qt(be()), be() != "$" && X(), N = _t = null, b && ae.call(b) == ft ? Qr((k = {}, k[""] = f, k), "", b) : f
                    }
                }
            }
            return l.runInContext = e, l
        }
        var t = {
                function: !0,
                object: !0
            },
            r = t[typeof window] && window || this,
            i = r.JSON,
            a = r.JSON3,
            s = !1,
            u = e(r, r.JSON3 = {
                noConflict: function() {
                    return s || (s = !0, r.JSON = i, r.JSON3 = a, i = a = null), u
                }
            });
        r.JSON = {
            parse: u.parse,
            stringify: u.stringify
        }
    }).call(window),
        function(e, t) {
            t(e)
        }(window, function(e) {
            if (e.atob) try {
                e.atob(" ")
            } catch (i) {
                e.atob = function(a) {
                    var s = function(u) {
                        return a(String(u).replace(/[\t\n\f\r ]+/g, ""))
                    };
                    return s.original = a, s
                }(e.atob)
            } else {
                var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    r = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;
                e.btoa = function(i) {
                    i = String(i);
                    for (var a, s, u, c, l = "", p = 0, _ = i.length % 3; p < i.length;) {
                        if ((s = i.charCodeAt(p++)) > 255 || (u = i.charCodeAt(p++)) > 255 || (c = i.charCodeAt(p++)) > 255) return "";
                        a = s << 16 | u << 8 | c, l += t.charAt(a >> 18 & 63) + t.charAt(a >> 12 & 63) + t.charAt(a >> 6 & 63) + t.charAt(63 & a)
                    }
                    return _ ? l.slice(0, _ - 3) + "===".substring(_) : l
                }, e.atob = function(i) {
                    if (i = String(i).replace(/[\t\n\f\r ]+/g, ""), !r.test(i)) return "";
                    i += "==".slice(2 - (3 & i.length));
                    for (var a, s, u, c = "", l = 0; l < i.length;) a = t.indexOf(i.charAt(l++)) << 18 | t.indexOf(i.charAt(l++)) << 12 | (s = t.indexOf(i.charAt(l++))) << 6 | (u = t.indexOf(i.charAt(l++))), c += s === 64 ? String.fromCharCode(a >> 16 & 255) : u === 64 ? String.fromCharCode(a >> 16 & 255, a >> 8 & 255) : String.fromCharCode(a >> 16 & 255, a >> 8 & 255, 255 & a);
                    return c
                }
            }
        }),
        function() {
            String.prototype.replaceAll || (String.prototype.replaceAll = function(e, t) {
                return Object.prototype.toString.call(e).toLowerCase() === "[object regexp]" ? this.replace(e, t) : this.replace(new RegExp(e, "g"), t)
            })
        }();
    var Tr, z = {
            setup: function(e) {
                Tr = e
            },
            log: function() {
                (Tr || console && console.log || function() {}).apply(null, arguments)
            }
        },
        x = {
            get: function(e) {
                return window.localStorage.getItem(e)
            },
            parse: function(e) {
                var t;
                try {
                    t = JSON.parse(x.get(e)) || null
                } catch (r) {
                    z.log(r)
                }
                return t
            },
            set: function(e, t) {
                try {
                    window.localStorage.setItem(e, t)
                } catch (r) {
                    z.log(r)
                }
            },
            remove: function(e) {
                window.localStorage.removeItem(e)
            },
            isSupport: function() {
                var e = !0;
                try {
                    var t = "__local_store_support__",
                        r = "testIsSupportStorage";
                    x.set(t, r), x.get(t) !== r && (e = !1), x.remove(t)
                } catch (i) {
                    e = !1
                }
                return e
            }
        },
        xr = function() {
            function e() {
                return r = (9301 * r + 49297) % 233280, r / 233280
            }
            var t = new Date,
                r = t.getTime();
            return function(i) {
                return Math.ceil(e() * i)
            }
        }();
    Xe.prototype.get = function(e, t, r, i) {
        if (!e) throw new Error("key is must");
        t = t || 1e4, r = r || 1e3, i = i || function() {};
        var a = this.lockGetPrefix + e,
            s = x.get(a),
            u = String(te());
        return s && (s = q(s) || {
            randomNum: 0,
            expireTime: 0
        }, s.expireTime > Z()) ? i(null) : (x.set(a, JSON.stringify({
            randomNum: u,
            expireTime: Z() + t
        })), void setTimeout(function() {
            s = q(x.get(a)) || {
                randomNum: 0,
                expireTime: 0
            }, s && s.randomNum === u ? (i(x.get(e)), x.remove(e), x.remove(a)) : i(null)
        }, r))
    }, Xe.prototype.set = function(e, t, r, i, a) {
        if (!e || !t) throw new Error("key and val is must");
        r = r || 1e4, i = i || 1e3, a = a || function() {};
        var s = this.lockSetPrefix + e,
            u = x.get(s),
            c = String(te());
        return u && (u = q(u) || {
            randomNum: 0,
            expireTime: 0
        }, u.expireTime > Z()) ? a({
            status: "fail",
            reason: "This key is locked"
        }) : (x.set(s, JSON.stringify({
            randomNum: c,
            expireTime: Z() + r
        })), void setTimeout(function() {
            u = q(x.get(s)) || {
                randomNum: 0,
                expireTime: 0
            }, u.randomNum === c ? x.set(e, t) && a({
                status: "success"
            }) : a({
                status: "fail",
                reason: "This key is locked"
            })
        }, i))
    }, ce.prototype.on = function(e, t) {
        if (!e || !t) return !1;
        if (!gt(t)) throw new Error("listener must be a function");
        this._events[e] = this._events[e] || [];
        var r = typeof t == "object";
        return this._events[e].push(r ? t : {
            listener: t,
            once: !1
        }), this
    }, ce.prototype.prepend = function(e, t) {
        if (!e || !t) return !1;
        if (!gt(t)) throw new Error("listener must be a function");
        this._events[e] = this._events[e] || [];
        var r = typeof t == "object";
        return this._events[e].unshift(r ? t : {
            listener: t,
            once: !1
        }), this
    }, ce.prototype.prependOnce = function(e, t) {
        return this.prepend(e, {
            listener: t,
            once: !0
        })
    }, ce.prototype.once = function(e, t) {
        return this.on(e, {
            listener: t,
            once: !0
        })
    }, ce.prototype.off = function(e, t) {
        var r = this._events[e];
        if (!r) return !1;
        if (typeof t == "number") r.splice(t, 1);
        else if (typeof t == "function")
            for (var i = 0, a = r.length; i < a; i++) r[i] && r[i].listener === t && r.splice(i, 1);
        return this
    }, ce.prototype.emit = function(e, t) {
        var r = this._events[e];
        if (!r) return !1;
        for (var i = 0; i < r.length; i++) {
            var a = r[i];
            a && (a.listener.call(this, t || {}), a.once && this.off(e, i))
        }
        return this
    }, ce.prototype.removeAllListeners = function(e) {
        e && this._events[e] ? this._events[e] = [] : this._events = {}
    }, ce.prototype.listeners = function(e) {
        return e && typeof e == "string" ? this._events[e] : this._events
    };
    var je = function() {
            var e = function() {
                    for (var i = 1 * new Date, a = 0; i == 1 * new Date;) a++;
                    return i.toString(16) + a.toString(16)
                },
                t = function() {
                    return te().toString(16).replace(".", "")
                },
                r = function() {
                    function i(p, _) {
                        var D, S = 0;
                        for (D = 0; D < _.length; D++) S |= c[D] << 8 * D;
                        return p ^ S
                    }
                    var a, s, u = navigator.userAgent,
                        c = [],
                        l = 0;
                    for (a = 0; a < u.length; a++) s = u.charCodeAt(a), c.unshift(255 & s), c.length >= 4 && (l = i(l, c), c = []);
                    return c.length > 0 && (l = i(l, c)), l.toString(16)
                };
            return function() {
                var i = String(screen.height * screen.width);
                i = i && /\d{5,}/.test(i) ? i.toString(16) : String(31242 * te()).replace(".", "").slice(0, 8);
                var a = e() + "-" + t() + "-" + r() + "-" + i + "-" + e();
                return a || (String(te()) + String(te()) + String(te())).slice(2, 15)
            }
        }(),
        Lr = function(e) {
            this.ele = e
        },
        Ir = function(e, t) {
            for (var r = []; e; e = e.nextSibling) e.nodeType === 1 && e !== t && r.push(e);
            return r
        };
    Lr.prototype = {
        addClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") === -1 && (this.ele.className = this.ele.className + (this.ele.className === "" ? "" : " ") + e), this
        },
        removeClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") !== -1 && (this.ele.className = t.replace(" " + e + " ", " ").slice(1, -1)), this
        },
        hasClass: function(e) {
            var t = " " + this.ele.className + " ";
            return t.indexOf(" " + e + " ") !== -1
        },
        attr: function(e, t) {
            return typeof e == "string" && zt(t) ? this.ele.getAttribute(e) : (typeof e == "string" && (t = String(t), this.ele.setAttribute(e, t)), this)
        },
        offset: function() {
            var e = this.ele.getBoundingClientRect();
            if (e.width || e.height) {
                var t = this.ele.ownerDocument,
                    r = t.documentElement;
                return {
                    top: e.top + window.pageYOffset - r.clientTop,
                    left: e.left + window.pageXOffset - r.clientLeft
                }
            }
            return {
                top: 0,
                left: 0
            }
        },
        getSize: function() {
            if (!window.getComputedStyle) return {
                width: this.ele.offsetWidth,
                height: this.ele.offsetHeight
            };
            try {
                var e = this.ele.getBoundingClientRect();
                return {
                    width: e.width,
                    height: e.height
                }
            } catch (t) {
                return {
                    width: 0,
                    height: 0
                }
            }
        },
        getStyle: function(e) {
            return this.ele.currentStyle ? this.ele.currentStyle[e] : this.ele.ownerDocument.defaultView.getComputedStyle(this.ele, null).getPropertyValue(e)
        },
        wrap: function(e) {
            var t = document.createElement(e);
            return this.ele.parentNode.insertBefore(t, this.ele), t.appendChild(this.ele), re(t)
        },
        getCssStyle: function(e) {
            var t = this.ele.style.getPropertyValue(e);
            if (t) return t;
            var r = null;
            if (typeof window.getMatchedCSSRules == "function" && (r = window.getMatchedCSSRules(this.ele)), !r || !T(r)) return null;
            for (var i = r.length - 1; i >= 0; i--) {
                var a = r[i];
                if (t = a.style.getPropertyValue(e)) return t
            }
        },
        sibling: function(e, t) {
            for (;
                (e = e[t]) && e.nodeType !== 1;);
            return e
        },
        next: function() {
            return this.sibling(this.ele, "nextSibling")
        },
        prev: function() {
            return this.sibling(this.ele, "previousSibling")
        },
        siblings: function() {
            return Ir((this.ele.parentNode || {}).firstChild, this.ele)
        },
        children: function() {
            return Ir(this.ele.firstChild)
        },
        parent: function() {
            var e = this.ele.parentNode;
            return e = e && e.nodeType !== 11 ? e : null, re(e)
        },
        previousElementSibling: function() {
            var e = this.ele;
            if ("previousElementSibling" in document.documentElement) return re(e.previousElementSibling);
            for (; e = e.previousSibling;)
                if (e.nodeType === 1) return re(e);
            return re(null)
        },
        getSameTypeSiblings: function() {
            for (var e = this.ele, t = e.parentNode, r = e.tagName.toLowerCase(), i = [], a = 0; a < t.children.length; a++) {
                var s = t.children[a];
                s.nodeType === 1 && s.tagName.toLowerCase() === r && i.push(t.children[a])
            }
            return i
        },
        getParents: function() {
            try {
                var e = this.ele;
                if (!le(e)) return [];
                var t = [e];
                if (e === null || e.parentElement === null) return [];
                for (; e.parentElement !== null;) e = e.parentElement, t.push(e);
                return t
            } catch (r) {
                return []
            }
        }
    };
    var Er = Array.prototype.forEach,
        fn = Object.prototype.hasOwnProperty,
        _n = Object.prototype.hasOwnProperty,
        qe = {
            get: function(e) {
                for (var t = e + "=", r = document.cookie.split(";"), i = 0; i < r.length; i++) {
                    for (var a = r[i]; a.charAt(0) == " ";) a = a.substring(1, a.length);
                    if (a.indexOf(t) == 0) return Se(a.substring(t.length, a.length))
                }
                return null
            },
            set: function(e, t, r, i, a, s, u) {
                function c(W) {
                    return !!W && W.replaceAll(/\r\n/g, "")
                }
                var l = u,
                    p = "",
                    _ = "",
                    D = "";
                if (r = r == null ? 73e3 : r, r !== 0) {
                    var S = new Date;
                    String(r).slice(-1) === "s" ? S.setTime(S.getTime() + 1e3 * Number(String(r).slice(0, -1))) : S.setTime(S.getTime() + 24 * r * 60 * 60 * 1e3), p = "; expires=" + S.toGMTString()
                }
                w(a) && a !== "" && (D = "; SameSite=" + a), s && (_ = "; secure");
                var h = "",
                    I = "",
                    E = "";
                e && (h = c(e)), t && (I = c(t)), l && (E = c(l)), h && I && (document.cookie = h + "=" + encodeURIComponent(I) + p + "; path=/" + E + D + _)
            },
            remove: function(e, t) {
                this.set(e, "1", -1, t)
            },
            isSupport: function(e, t) {
                function r() {
                    i.set(e, t);
                    var a = i.get(e);
                    return a === t && (i.remove(e), !0)
                }
                e = e || "cookie_support_test", t = t || "1";
                var i = this;
                return navigator.cookieEnabled && r()
            }
        },
        gn = Object.prototype.hasOwnProperty,
        ve = {
            isSupport: function() {
                var e = !0,
                    t = "__session_storage_support__",
                    r = "testIsSupportStorage";
                try {
                    sessionStorage && sessionStorage.setItem ? (sessionStorage.setItem(t, r), sessionStorage.removeItem(t, r), e = !0) : e = !1
                } catch (i) {
                    e = !1
                }
                return e
            }
        },
        hn = {
            "+": "-",
            "/": "_",
            "=": "."
        },
        mn = {
            "-": "+",
            _: "/",
            ".": "="
        },
        vn = {
            encode: function(e) {
                return e.replace(/[+\/=]/g, function(t) {
                    return hn[t]
                })
            },
            decode: function(e) {
                return e.replace(/[-_.]/g, function(t) {
                    return mn[t]
                })
            },
            trim: function(e) {
                return e.replace(/[.=]{1,2}$/, "")
            },
            isBase64: function(e) {
                return /^[A-Za-z0-9+\/]*[=]{0,2}$/.test(e)
            },
            isUrlSafeBase64: function(e) {
                return /^[A-Za-z0-9_-]*[.]{0,2}$/.test(e)
            }
        },
        yn = {
            __proto__: null,
            ConcurrentStorage: Xe,
            EventEmitter: ce,
            URL: ne,
            UUID: je,
            addEvent: ke,
            addHashEvent: Xt,
            ajax: mt,
            base64Decode: He,
            base64Encode: Be,
            bindReady: ri,
            cookie: qe,
            coverExtend: vt,
            decodeURI: Oe,
            decodeURIComponent: Se,
            dfmapping: yt,
            each: C,
            encodeDates: Gt,
            extend: $,
            extend2Lev: ii,
            filter: Qt,
            formatDate: bt,
            formatJsonString: er,
            getCookieTopLevelDomain: Ye,
            getDomBySelector: Ge,
            getElementContent: tr,
            getHostname: de,
            getIOSVersion: wt,
            getQueryParam: Ue,
            getQueryParamsFromUrl: Ke,
            getRandom: te,
            getRandomBasic: xr,
            getScreenOrientation: ni,
            getUA: St,
            getURL: Y,
            getURLPath: Pe,
            getURLSearchParams: Ze,
            hasAttribute: kt,
            hasAttributes: Pt,
            hashCode: ir,
            hashCode53: Qe,
            indexOf: Q,
            inherit: ai,
            isArguments: nr,
            isArray: T,
            isBoolean: ar,
            isDate: Re,
            isElement: le,
            isEmptyObject: F,
            isFunction: A,
            isHttpUrl: sr,
            isIOS: or,
            isJSONString: $e,
            isNumber: se,
            isObject: d,
            isString: w,
            isSupportBeaconSend: ur,
            isSupportCors: Dt,
            isUndefined: zt,
            jsonp: cr,
            listenPageState: lr,
            loadScript: et,
            localStorage: x,
            logger: z,
            map: Yt,
            mediaQueriesSupported: rr,
            now: Z,
            removeScriptProtocol: dr,
            rot13defs: jt,
            rot13obfs: pr,
            ry: re,
            safeJSONParse: q,
            searchObjDate: Nt,
            sessionStorage: ve,
            setCssStyle: tt,
            strToUnicode: si,
            throttle: oi,
            toArray: ui,
            trim: ie,
            unique: _r,
            urlParse: ht,
            urlSafeBase64: vn,
            values: fr,
            xhr: Zt
        },
        O = {},
        bn = {
            preset_properties: {
                search_keyword_baidu: !1,
                latest_utm: !0,
                latest_traffic_source_type: !0,
                latest_search_keyword: !0,
                latest_referrer: !0,
                latest_referrer_host: !1,
                latest_landing_page: !1,
                latest_wx_ad_click_id: void 0,
                url: !0,
                title: !0
            },
            encrypt_cookie: !1,
            enc_cookie: !1,
            img_use_crossorigin: !1,
            name: "sa",
            max_referrer_string_length: 200,
            max_string_length: 500,
            max_id_length: 255,
            max_key_length: 100,
            cross_subdomain: !0,
            show_log: !1,
            is_debug: !1,
            debug_mode: !1,
            debug_mode_upload: !1,
            source_channel: [],
            sdk_id: "",
            send_type: "image",
            vtrack_ignore: {},
            auto_init: !0,
            is_track_single_page: !1,
            is_single_page: !1,
            batch_send: !1,
            source_type: {},
            callback_timeout: 200,
            datasend_timeout: 8e3,
            is_track_device_id: !1,
            ignore_oom: !0,
            app_js_bridge: !1
        },
        Tt = "data:enc;",
        st = "dfm-enc-",
        xt = {
            distinct_id: function() {},
            jssdkDebug: function() {},
            _sendDebug: function(e) {},
            apph5: function(e) {
                var t = "app_h5\u6253\u901A\u5931\u8D25-",
                    r = {
                        1: t + "use_app_track\u4E3Afalse",
                        2: t + "Android\u6216\u8005iOS\uFF0C\u6CA1\u6709\u66B4\u9732\u76F8\u5E94\u65B9\u6CD5",
                        3.1: t + "Android\u6821\u9A8Cserver_url\u5931\u8D25",
                        3.2: t + "iOS\u6821\u9A8Cserver_url\u5931\u8D25",
                        4.1: t + "H5 \u6821\u9A8C iOS server_url \u5931\u8D25",
                        4.2: t + "H5 \u6821\u9A8C Android server_url \u5931\u8D25"
                    },
                    i = e.output,
                    a = e.step,
                    s = e.data || "";
                i !== "all" && i !== "console" || B(r[a]), (i === "all" || i === "code") && d(O.is_debug) && O.is_debug.apph5 && (s.type && s.type.slice(0, 7) === "profile" || (s.properties._jssdk_debug_info = "apph5-" + String(a)))
            },
            defineMode: function(e) {
                var t = {
                    1: {
                        title: "\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9",
                        message: "App SDK \u4E0E Web JS SDK \u6CA1\u6709\u8FDB\u884C\u6253\u901A\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u6280\u672F\u4EBA\u5458\u4FEE\u6B63 App SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002",
                        link_text: "\u914D\u7F6E\u6587\u6863",
                        link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                    },
                    2: {
                        title: "\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9",
                        message: "App SDK \u4E0E Web JS SDK \u6CA1\u6709\u8FDB\u884C\u6253\u901A\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u6280\u672F\u4EBA\u5458\u4FEE\u6B63 Web JS SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002",
                        link_text: "\u914D\u7F6E\u6587\u6863",
                        link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                    },
                    3: {
                        title: "\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9",
                        message: "Web JS SDK \u6CA1\u6709\u5F00\u542F\u5168\u57CB\u70B9\u914D\u7F6E\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u5DE5\u4F5C\u4EBA\u5458\u4FEE\u6B63 SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002",
                        link_text: "\u914D\u7F6E\u6587\u6863",
                        link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_web_all-1573964.html"
                    },
                    4: {
                        title: "\u5F53\u524D\u9875\u9762\u65E0\u6CD5\u8FDB\u884C\u53EF\u89C6\u5316\u5168\u57CB\u70B9",
                        message: "Web JS SDK \u914D\u7F6E\u7684\u6570\u636E\u6821\u9A8C\u5730\u5740\u4E0E App SDK \u914D\u7F6E\u7684\u6570\u636E\u6821\u9A8C\u5730\u5740\u4E0D\u4E00\u81F4\uFF0C\u8BF7\u8054\u7CFB\u8D35\u65B9\u5DE5\u4F5C\u4EBA\u5458\u4FEE\u6B63 SDK \u7684\u914D\u7F6E\uFF0C\u8BE6\u7EC6\u4FE1\u606F\u8BF7\u67E5\u770B\u6587\u6863\u3002",
                        link_text: "\u914D\u7F6E\u6587\u6863",
                        link_url: "https://manual.sensorsdata.cn/sa/latest/tech_sdk_client_link-1573913.html"
                    }
                };
                return !(!e || !t[e]) && t[e]
            },
            protocol: {
                protocolIsSame: function(e, t) {
                    try {
                        if (ne(e).protocol !== ne(t).protocol) return !1
                    } catch (r) {
                        return B("\u4E0D\u652F\u6301 _.URL \u65B9\u6CD5"), !1
                    }
                    return !0
                },
                serverUrl: function() {
                    w(O.server_url) && O.server_url !== "" && !this.protocolIsSame(O.server_url, location.href) && B(`SDK \u68C0\u6D4B\u5230\u60A8\u7684\u6570\u636E\u53D1\u9001\u5730\u5740\u548C\u5F53\u524D\u9875\u9762\u5730\u5740\u7684\u534F\u8BAE\u4E0D\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u60A8\u4FEE\u6539\u6210\u4E00\u81F4\u7684\u534F\u8BAE\u3002
\u56E0\u4E3A\uFF1A1\u3001https \u4E0B\u9762\u53D1\u9001 http \u7684\u56FE\u7247\u8BF7\u6C42\u4F1A\u5931\u8D25\u30022\u3001http \u9875\u9762\u4F7F\u7528 https + ajax \u65B9\u5F0F\u53D1\u6570\u636E\uFF0C\u5728 ie9 \u53CA\u4EE5\u4E0B\u4F1A\u4E22\u5931\u6570\u636E\u3002`)
                },
                ajax: function(e) {
                    return e !== O.server_url && void(w(e) && e !== "" && !this.protocolIsSame(e, location.href) && B("SDK \u68C0\u6D4B\u5230\u60A8\u7684\u6570\u636E\u53D1\u9001\u5730\u5740\u548C\u5F53\u524D\u9875\u9762\u5730\u5740\u7684\u534F\u8BAE\u4E0D\u4E00\u81F4\uFF0C\u5EFA\u8BAE\u60A8\u4FEE\u6539\u6210\u4E00\u81F4\u7684\u534F\u8BAE\u3002\u56E0\u4E3A http \u9875\u9762\u4F7F\u7528 https + ajax \u65B9\u5F0F\u53D1\u6570\u636E\uFF0C\u5728 ie9 \u53CA\u4EE5\u4E0B\u4F1A\u4E22\u5931\u6570\u636E\u3002"))
                }
            }
        },
        Lt = "utm_source utm_medium utm_campaign utm_content utm_term",
        Jr = "1.22.7",
        It = "sensorsdata_domain_test",
        ot = {
            EMAIL: "$identity_email",
            MOBILE: "$identity_mobile",
            LOGIN: "$identity_login_id"
        },
        Ne = {
            data: {},
            id: function() {
                return this.data.id ? this.data.id : (this.data.id = yr(), this.data.id)
            },
            type: function() {
                return this.data.type ? this.data.type : (this.data.type = br(), this.data.type)
            }
        },
        H = {
            initPage: function() {
                var e = _e(),
                    t = Y(),
                    r = Ct(t);
                r || xt.jssdkDebug("url_domain\u5F02\u5E38_" + t + "_" + r), this.pageProp = {
                    referrer: e,
                    referrer_host: e ? de(e) : "",
                    url: t,
                    url_host: de(t, "url_host\u53D6\u503C\u5F02\u5E38"),
                    url_domain: r
                }
            },
            pageProp: {},
            campaignParams: function() {
                var e = Lt.split(" "),
                    t = "",
                    r = {};
                return T(O.source_channel) && O.source_channel.length > 0 && (e = e.concat(O.source_channel), e = _r(e)), C(e, function(i) {
                    t = Ue(location.href, i), t.length && (r[i] = t)
                }), r
            },
            campaignParamsStandard: function(e, t) {
                e = e || "", t = t || "";
                var r = H.campaignParams(),
                    i = {},
                    a = {};
                return C(r, function(s, u, c) {
                    (" " + Lt + " ").indexOf(" " + u + " ") !== -1 ? i[e + u] = c[u] : a[t + u] = c[u]
                }), {
                    $utms: i,
                    otherUtms: a
                }
            },
            properties: function() {
                var e = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
                    t = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth || 0,
                    r = {
                        $timezone_offset: new Date().getTimezoneOffset(),
                        $screen_height: Number(screen.height) || 0,
                        $screen_width: Number(screen.width) || 0,
                        $viewport_height: e,
                        $viewport_width: t,
                        $lib: "js",
                        $lib_version: Jr
                    };
                return r
            },
            currentProps: {},
            register: function(e) {
                $(H.currentProps, e)
            }
        },
        ee = {
            get: function(e) {
                return qe.get(e)
            },
            set: function(e, t, r, i) {
                var a = "";
                if (i = typeof i == "undefined" ? O.cross_subdomain : i) {
                    var s = Ct(location.href);
                    s === "url\u89E3\u6790\u5931\u8D25" && (s = ""), a = s ? "; domain=" + s : ""
                }
                return qe.set(e, t, r, i, O.set_cookie_samesite, O.is_secure_cookie, a)
            },
            remove: function(e, t) {
                return t = typeof t == "undefined" ? O.cross_subdomain : t, qe.remove(e, t)
            },
            isSupport: function(e, t) {
                return e = e || "sajssdk_2015_cookie_access_test", t = t || "1", qe.isSupport(e, t)
            }
        };
    ee.getNewUser = nt;
    var ut = {
            data: {},
            get: function(e) {
                var t = this.data[e];
                return t === void 0 ? null : t._expirationTimestamp_ !== void 0 ? new Date().getTime() > t._expirationTimestamp_ ? null : t.value : t
            },
            set: function(e, t, r) {
                if (r) {
                    var i, a = new Date;
                    i = String(r).slice(-1) === "s" ? a.getTime() + 1e3 * Number(String(r).slice(0, -1)) : a.getTime() + 24 * r * 60 * 60 * 1e3, t = {
                        value: t,
                        _expirationTimestamp_: i
                    }
                }
                this.data[e] = t
            },
            getNewUserFlagMemoryKey: function(e) {
                return "sajssdk_2015_" + O.sdk_id + e
            }
        },
        Ie = {
            checkIsAddSign: function(e) {
                e.type === "track" && (nt() ? e.properties.$is_first_day = !0 : e.properties.$is_first_day = !1)
            },
            is_first_visit_time: !1,
            is_page_first_visited: !1,
            checkIsFirstTime: function(e) {
                e.type === "track" && e.event === "$pageview" && (this.is_first_visit_time ? (e.properties.$is_first_time = !0, this.is_first_visit_time = !1) : e.properties.$is_first_time = !1)
            },
            setDeviceId: function(e) {
                var t = null,
                    r = ee.get("sensorsdata2015jssdkcross" + n.para.sdk_id);
                r = Me(r);
                var i = {};
                r != null && $e(r) && (i = JSON.parse(r), i.$device_id && (t = i.$device_id)), t = t || e, n.para.cross_subdomain === !0 ? n.store.set("$device_id", t) : (i.$device_id = t, i = JSON.stringify(i), n.para.encrypt_cookie && (i = Ve(i)), ee.set("sensorsdata2015jssdkcross" + n.para.sdk_id, i, null, !0)), n.para.is_track_device_id && (H.currentProps.$device_id = t)
            },
            storeInitCheck: function() {
                if (n.is_first_visitor) {
                    var e = new Date,
                        t = {
                            h: 23 - e.getHours(),
                            m: 59 - e.getMinutes(),
                            s: 59 - e.getSeconds()
                        };
                    ee.isSupport() ? ee.set(kr("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s") : ut.set(ut.getNewUserFlagMemoryKey("new_user"), "1", 3600 * t.h + 60 * t.m + t.s + "s"), this.is_first_visit_time = !0, this.is_page_first_visited = !0
                } else nt() || (this.checkIsAddSign = function(r) {
                    r.type === "track" && (r.properties.$is_first_day = !1)
                }), this.checkIsFirstTime = function(r) {
                    r.type === "track" && r.event === "$pageview" && (r.properties.$is_first_time = !1)
                }
            },
            checkIsFirstLatest: function() {
                var e = H.pageProp.url_domain,
                    t = {};
                e === "" && (e = "url\u89E3\u6790\u5931\u8D25");
                var r = Te(document.referrer, !0);
                if (n.para.preset_properties.search_keyword_baidu ? We(document.referrer) && (!Ae() || d(r) && r.active ? n.store._state && n.store._state.props && (n.store._state.props.$search_keyword_id && delete n.store._state.props.$search_keyword_id, n.store._state.props.$search_keyword_id_type && delete n.store._state.props.$search_keyword_id_type, n.store._state.props.$search_keyword_id_hash && delete n.store._state.props.$search_keyword_id_hash) : (t.$search_keyword_id = Ne.id(), t.$search_keyword_id_type = Ne.type(), t.$search_keyword_id_hash = Qe(t.$search_keyword_id))) : n.store._state && n.store._state.props && (n.store._state.props.$search_keyword_id && delete n.store._state.props.$search_keyword_id, n.store._state.props.$search_keyword_id_type && delete n.store._state.props.$search_keyword_id_type, n.store._state.props.$search_keyword_id_hash && delete n.store._state.props.$search_keyword_id_hash), n.store.save(), C(n.para.preset_properties, function(u, c) {
                        if (c.indexOf("latest_") === -1) return !1;
                        if (c = c.slice(7), u) {
                            if (c === "wx_ad_click_id" && u === "not_collect") return !1;
                            if (c !== "utm" && e === "url\u89E3\u6790\u5931\u8D25") c === "wx_ad_click_id" ? (t._latest_wx_ad_click_id = "url\u7684domain\u89E3\u6790\u5931\u8D25", t._latest_wx_ad_hash_key = "url\u7684domain\u89E3\u6790\u5931\u8D25", t._latest_wx_ad_callbacks = "url\u7684domain\u89E3\u6790\u5931\u8D25") : t["$latest_" + c] = "url\u7684domain\u89E3\u6790\u5931\u8D25";
                            else if (We(document.referrer)) switch (c) {
                                case "traffic_source_type":
                                    t.$latest_traffic_source_type = rt();
                                    break;
                                case "referrer":
                                    t.$latest_referrer = H.pageProp.referrer;
                                    break;
                                case "search_keyword":
                                    Te() ? t.$latest_search_keyword = Te() : d(n.store._state) && d(n.store._state.props) && n.store._state.props.$latest_search_keyword && delete n.store._state.props.$latest_search_keyword;
                                    break;
                                case "landing_page":
                                    t.$latest_landing_page = Y();
                                    break;
                                case "wx_ad_click_id":
                                    var l = Sr(location.href);
                                    t._latest_wx_ad_click_id = l.click_id, t._latest_wx_ad_hash_key = l.hash_key, t._latest_wx_ad_callbacks = l.callbacks
                            }
                        } else if (c === "utm" && n.store._state && n.store._state.props)
                            for (var p in n.store._state.props)(p.indexOf("$latest_utm") === 0 || p.indexOf("_latest_") === 0 && p.indexOf("_latest_wx_ad_") < 0) && delete n.store._state.props[p];
                        else if (n.store._state && n.store._state.props && "$latest_" + c in n.store._state.props) delete n.store._state.props["$latest_" + c];
                        else if (c == "wx_ad_click_id" && n.store._state && n.store._state.props && u === !1) {
                            var _ = ["_latest_wx_ad_click_id", "_latest_wx_ad_hash_key", "_latest_wx_ad_callbacks"];
                            C(_, function(D) {
                                D in n.store._state.props && delete n.store._state.props[D]
                            })
                        }
                    }), n.register(t), n.para.preset_properties.latest_utm) {
                    var i = H.campaignParamsStandard("$latest_", "_latest_"),
                        a = i.$utms,
                        s = i.otherUtms;
                    F(a) || n.register(a), F(s) || n.register(s)
                }
            }
        },
        J = {
            requests: [],
            _sessionState: {},
            _state: {
                distinct_id: "",
                first_id: "",
                props: {},
                identities: {}
            },
            getProps: function() {
                return this._state.props || {}
            },
            getSessionProps: function() {
                return this._sessionState
            },
            getOriginDistinctId: function() {
                return this._state._distinct_id || this._state.distinct_id
            },
            getOriginUnionId: function(e) {
                var t = {};
                e = e || this._state;
                var r = e._first_id || e.first_id,
                    i = e._distinct_id || e.distinct_id;
                return r && i ? (t.login_id = i, t.anonymous_id = r) : t.anonymous_id = i, t
            },
            getDistinctId: function() {
                var e = this.getUnionId();
                return e.login_id || e.anonymous_id
            },
            getUnionId: function(e) {
                var t = this.getOriginUnionId(e);
                return t.login_id && this._state.history_login_id && this._state.history_login_id.name && this._state.history_login_id.name !== n.IDENTITY_KEY.LOGIN && (t.login_id = this._state.history_login_id.name + "+" + t.login_id), t
            },
            getFirstId: function() {
                return this._state._first_id || this._state.first_id
            },
            initSessionState: function() {
                var e = ee.get("sensorsdata2015session");
                e = Me(e);
                var t = null;
                e !== null && typeof(t = q(e)) == "object" && (this._sessionState = t || {})
            },
            setOnce: function(e, t) {
                e in this._state || this.set(e, t)
            },
            set: function(e, t) {
                this._state = this._state || {};
                var r = this._state.distinct_id;
                this._state[e] = t, e === "first_id" ? delete this._state._first_id : e === "distinct_id" && delete this._state._distinct_id, this.save(), e === "distinct_id" && r && n.events.tempAdd("changeDistinctId", t)
            },
            change: function(e, t) {
                this._state["_" + e] = t
            },
            setSessionProps: function(e) {
                var t = this._sessionState;
                $(t, e), this.sessionSave(t)
            },
            setSessionPropsOnce: function(e) {
                var t = this._sessionState;
                vt(t, e), this.sessionSave(t)
            },
            setProps: function(e, t) {
                var r = {};
                r = t ? e : $(this._state.props || {}, e);
                for (var i in r) typeof r[i] == "string" && (r[i] = r[i].slice(0, n.para.max_referrer_string_length));
                this.set("props", r)
            },
            setPropsOnce: function(e) {
                var t = this._state.props || {};
                vt(t, e), this.set("props", t)
            },
            clearAllProps: function(e) {
                this._sessionState = {};
                var t;
                if (T(e) && e.length > 0)
                    for (t = 0; t < e.length; t++) w(e[t]) && e[t].indexOf("latest_") === -1 && d(this._state.props) && e[t] in this._state.props && delete this._state.props[e[t]];
                else if (d(this._state.props))
                    for (t in this._state.props) t.indexOf("latest_") !== 1 && delete this._state.props[t];
                this.sessionSave({}), this.save()
            },
            sessionSave: function(e) {
                this._sessionState = e;
                var t = JSON.stringify(this._sessionState);
                n.para.encrypt_cookie && (t = Ve(t)), ee.set("sensorsdata2015session", t, 0)
            },
            save: function() {
                var e = JSON.parse(JSON.stringify(this._state));
                delete e._first_id, delete e._distinct_id, e.identities && (e.identities = Be(JSON.stringify(e.identities)));
                var t = JSON.stringify(e);
                n.para.encrypt_cookie && (t = Ve(t)), ee.set(this.getCookieName(), t, 73e3, n.para.cross_subdomain)
            },
            getCookieName: function() {
                var e = "";
                if (n.para.cross_subdomain === !1) {
                    try {
                        e = ne(location.href).hostname
                    } catch (t) {
                        n.log(t)
                    }
                    e = typeof e == "string" && e !== "" ? "sa_jssdk_2015_" + n.para.sdk_id + e.replace(/\./g, "_") : "sa_jssdk_2015_root" + n.para.sdk_id
                } else e = "sensorsdata2015jssdkcross" + n.para.sdk_id;
                return e
            },
            init: function() {
                function e(s) {
                    var u;
                    s.identities && (s.identities.indexOf(`
/`) === 0 ? s.identities = q(jt(s.identities)) : s.identities = q(He(s.identities)));
                    var c = J.getOriginUnionId(s);
                    s.identities && d(s.identities) && !F(s.identities) ? s.identities.$identity_anonymous_id && s.identities.$identity_anonymous_id !== c.anonymous_id && (s.identities.$identity_anonymous_id = c.anonymous_id) : (s.identities = {}, s.identities.$identity_anonymous_id = c.anonymous_id, s.identities.$identity_cookie_id = je()), s.history_login_id = s.history_login_id || {};
                    var l = s.history_login_id,
                        p = l.name;
                    if (c.login_id)
                        if (p && s.identities.hasOwnProperty(p)) {
                            if (s.identities[p] !== c.login_id) {
                                s.identities[p] = c.login_id;
                                for (u in s.identities) s.identities.hasOwnProperty(u) && u !== "$identity_cookie_id" && u !== p && delete s.identities[u];
                                s.history_login_id.value = c.login_id
                            }
                        } else {
                            var _ = p || n.IDENTITY_KEY.LOGIN;
                            s.identities[_] = c.login_id;
                            for (u in s.identities) s.identities.hasOwnProperty(u) && u !== "$identity_cookie_id" && u !== _ && delete s.identities[u];
                            s.history_login_id = {
                                name: _,
                                value: c.login_id
                            }
                        }
                    else {
                        if (s.identities.hasOwnProperty("$identity_login_id") || s.identities.hasOwnProperty(p))
                            for (u in s.identities) s.identities.hasOwnProperty(u) && u !== "$identity_cookie_id" && u !== "$identity_anonymous_id" && delete s.identities[u];
                        s.history_login_id = {
                            name: "",
                            value: ""
                        }
                    }
                    return s
                }

                function t(s) {
                    n.store.set("distinct_id", s), n.store.set("identities", {
                        $identity_cookie_id: s
                    }), n.store.set("history_login_id", {
                        name: "",
                        value: ""
                    })
                }
                this.initSessionState();
                var r, i, a = je();
                ee.isSupport() && (r = ee.get(this.getCookieName()), r = Me(r), i = q(r)), ee.isSupport() && r !== null && $e(r) && d(i) && (!d(i) || i.distinct_id) ? (n.store._state = $(e(i)), n.store.save()) : (n.is_first_visitor = !0, t(a)), Ie.setDeviceId(a), Ie.storeInitCheck(), Ie.checkIsFirstLatest()
            },
            saveObjectVal: function(e, t) {
                w(t) || (t = JSON.stringify(t)), n.para.encrypt_cookie == 1 && (t = Ve(t)), x.set(e, t)
            },
            readObjectVal: function(e) {
                var t = x.get(e);
                return t ? (t = Me(t), q(t)) : null
            }
        },
        V = {
            string: function(e) {
                B(e + " must be string")
            },
            emptyString: function(e) {
                B(e + "'s is empty")
            },
            regexTest: function(e) {
                B(e + " is invalid")
            },
            idLength: function(e) {
                B(e + " length is longer than " + O.max_id_length)
            },
            keyLength: function(e) {
                B(e + " length is longer than " + O.max_key_length)
            },
            stringLength: function(e) {
                B(e + " length is longer than " + O.max_string_length)
            },
            voidZero: function(e) {
                B(e + "'s is undefined")
            },
            reservedLoginId: function(e) {
                B(e + " is invalid")
            },
            reservedBind: function(e) {
                B(e + " is invalid")
            },
            reservedUnbind: function(e) {
                B(e + " is invalid")
            }
        },
        Hr = {
            regName: /^((?!^distinct_id$|^original_id$|^time$|^properties$|^id$|^first_id$|^second_id$|^users$|^events$|^event$|^user_id$|^date$|^datetime$|^user_tag.*|^user_group.*)[a-zA-Z_$][a-zA-Z\d_$]*)$/i,
            loginIDReservedNames: ["$identity_anonymous_id", "$identity_cookie_id"],
            bindReservedNames: ["$identity_login_id", "$identity_anonymous_id", "$identity_cookie_id"],
            unbindReservedNames: ["$identity_anonymous_id", ot.LOGIN],
            string: function(e) {
                return !!w(e)
            },
            emptyString: function(e) {
                return !(!w(e) || ie(e).length === 0)
            },
            regexTest: function(e) {
                return !(!w(e) || !this.regName.test(e))
            },
            idLength: function(e) {
                return !(!w(e) || e.length > O.max_id_length)
            },
            keyLength: function(e) {
                return !(!w(e) || e.length > O.max_key_length)
            },
            stringLength: function(e) {
                return !(!w(e) || e.length > O.max_string_length)
            },
            voidZero: function(e) {
                return e !== void 0
            },
            reservedLoginId: function(e) {
                return !(Q(this.loginIDReservedNames, e) > -1)
            },
            reservedUnbind: function(e) {
                return !(Q(this.unbindReservedNames, e) > -1)
            },
            reservedBind: function(e) {
                var t = J._state.history_login_id;
                return (!t || !t.name || t.name !== e) && !(Q(this.bindReservedNames, e) > -1)
            }
        },
        wn = {
            distinct_id: {
                rules: ["string", "emptyString", "idLength"],
                onComplete: function(e, t, r) {
                    return !e && (r === "emptyString" && (t = "Id"), A(V[r]) && V[r](t), r === "idLength") || e
                }
            },
            event: {
                rules: ["string", "emptyString", "keyLength", "regexTest"],
                onComplete: function(e, t, r) {
                    return e || (r === "emptyString" && (t = "eventName"), A(V[r]) && V[r](t)), !0
                }
            },
            propertyKey: {
                rules: ["string", "emptyString", "keyLength", "regexTest"],
                onComplete: function(e, t, r) {
                    return e || (r === "emptyString" && (t = "Property key"), A(V[r]) && V[r](t)), !0
                }
            },
            propertyValue: {
                rules: ["voidZero"],
                onComplete: function(e, t, r) {
                    return e || (t = "Property Value", A(V[r]) && V[r](t)), !0
                }
            },
            properties: function(e) {
                return d(e) ? C(e, function(t, r) {
                    xe({
                        propertyKey: r
                    });
                    var i = function(a, s, u) {
                        return a || (s = r + "'s Value", A(V[u]) && V[u](s)), !0
                    };
                    xe({
                        propertyValue: t
                    }, i)
                }) : Hr.voidZero(e) && B("properties\u53EF\u4EE5\u6CA1\u6709\uFF0C\u4F46\u6709\u7684\u8BDD\u5FC5\u987B\u662F\u5BF9\u8C61"), !0
            },
            propertiesMust: function(e) {
                return e !== void 0 && d(e) && !F(e) ? this.properties.call(this, e) : B("properties\u5FC5\u987B\u662F\u5BF9\u8C61"), !0
            },
            item_type: {
                rules: ["string", "emptyString", "keyLength", "regexTest"],
                onComplete: function(e, t, r) {
                    return e || (r === "emptyString" && (t = "item_type"), A(V[r]) && V[r](t)), !0
                }
            },
            item_id: {
                rules: ["string", "emptyString", "stringLength"],
                onComplete: function(e, t, r) {
                    return e || (r === "emptyString" && (t = "item_id"), A(V[r]) && V[r](t)), !0
                }
            },
            loginIdKey: {
                rules: ["string", "emptyString", "keyLength", "regexTest", "reservedLoginId"],
                onComplete: function(e, t, r) {
                    return !e && (r === "emptyString" && (t = "login_id_key"), A(V[r]) && V[r](t), r === "keyLength") || e
                }
            },
            bindKey: {
                rules: ["string", "emptyString", "keyLength", "regexTest", "reservedBind"],
                onComplete: function(e, t, r) {
                    return !e && (r === "emptyString" && (t = "Key"), A(V[r]) && V[r](t), r === "keyLength") || e
                }
            },
            unbindKey: {
                rules: ["string", "emptyString", "keyLength", "regexTest", "reservedUnbind"],
                onComplete: function(e, t, r) {
                    return !e && (r === "emptyString" && (t = "Key"), A(V[r]) && V[r](t), r === "keyLength") || e
                }
            },
            bindValue: {
                rules: ["string", "emptyString", "idLength"],
                onComplete: function(e, t, r) {
                    return !e && (r === "emptyString" && (t = "Value"), A(V[r]) && V[r](t), r === "idLength") || e
                }
            },
            check: function(e, t, r) {
                var i = this[e];
                if (A(i)) return i.call(this, t);
                if (!i) return !1;
                for (var a = 0; a < i.rules.length; a++) {
                    var s = i.rules[a],
                        u = Hr[s](t),
                        c = A(r) ? r(u, t, s) : i.onComplete(u, t, s);
                    if (!u) return c
                }
                return !0
            }
        },
        ct = {
            stage: null,
            init: function(e) {
                this.stage = e
            }
        },
        L = {};
    L.check = xe, L.sendItem = function(e) {
        var t = {
            lib: {
                $lib: "js",
                $lib_method: "code",
                $lib_version: String(n.lib_version)
            },
            time: 1 * new Date
        };
        $(t, e), ct.stage.process("formatData", t), n.sendState.getSendCall(t)
    }, L.send = function(e, t) {
        var r = n.kit.buildData(e);
        n.kit.sendData(r, t)
    }, L.debugPath = function(e) {
        var t = e,
            r = "";
        r = n.para.debug_mode_url.indexOf("?") !== -1 ? n.para.debug_mode_url + "&" + n.kit.encodeTrackData(e) : n.para.debug_mode_url + "?" + n.kit.encodeTrackData(e), Ot({
            url: r,
            type: "GET",
            cors: !0,
            header: {
                "Dry-Run": String(n.para.debug_mode_upload)
            },
            success: function(i) {
                F(i) === !0 ? alert("debug\u6570\u636E\u53D1\u9001\u6210\u529F" + t) : alert("debug\u5931\u8D25 \u9519\u8BEF\u539F\u56E0" + JSON.stringify(i))
            }
        })
    };
    var Et = {
            label: !1,
            li: !1,
            a: !0,
            button: !0
        },
        pe = {
            otherTags: [],
            initUnlimitedTags: function() {
                C(pe.otherTags, function(e) {
                    e in Et && (Et[e] = !0)
                })
            },
            isUnlimitedTag: function(e) {
                if (!e || e.nodeType !== 1) return !1;
                var t = e.nodeName.toLowerCase();
                return Et[t] || Pt(e, n.para.heatmap.track_attr)
            },
            getTargetElement: function(e, t) {
                var r = this,
                    i = e;
                if (typeof i != "object" || typeof i.tagName != "string") return null;
                var a = i.tagName.toLowerCase();
                if (a.toLowerCase() === "body" || a.toLowerCase() === "html" || !i || !i.parentNode || !i.parentNode.children) return null;
                var s = i.parentNode,
                    u = r.otherTags;
                if (a === "a" || a === "button" || a === "input" || a === "textarea" || Q(u, a) > -1) return i;
                if (a === "area" && s.tagName.toLowerCase() === "map" && re(s).prev().tagName && re(s).prev().tagName.toLowerCase() === "img") return re(s).prev();
                if (a === "div" && n.para.heatmap.collect_tags.div && r.isDivLevelValid(i)) {
                    var c = n.para.heatmap && n.para.heatmap.collect_tags && n.para.heatmap.collect_tags.div && n.para.heatmap.collect_tags.div.max_level || 1;
                    if (c > 1 || r.isCollectableDiv(i)) return i
                }
                if (r.isStyleTag(a) && n.para.heatmap.collect_tags.div) {
                    var l = r.getCollectableParent(i);
                    if (l && r.isDivLevelValid(l)) return l
                }
                var p = r.hasElement({
                    event: t && t.originalEvent || t,
                    element: e
                }, function(_) {
                    return r.isUnlimitedTag(_)
                });
                return p || null
            },
            getDivLevels: function(e, t) {
                var r = pe.getElementPath(e, !0, t),
                    i = r.split(" > "),
                    a = 0;
                return C(i, function(s) {
                    s === "div" && a++
                }), a
            },
            isDivLevelValid: function(e) {
                for (var t = n.para.heatmap && n.para.heatmap.collect_tags && n.para.heatmap.collect_tags.div && n.para.heatmap.collect_tags.div.max_level || 1, r = e.getElementsByTagName("div"), i = r.length - 1; i >= 0; i--)
                    if (pe.getDivLevels(r[i], e) > t) return !1;
                return !0
            },
            getElementPath: function(e, t, r) {
                for (var i = []; e.parentNode;) {
                    if (e.id && !t && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.id)) {
                        i.unshift(e.tagName.toLowerCase() + "#" + e.id);
                        break
                    }
                    if (r && e === r) {
                        i.unshift(e.tagName.toLowerCase());
                        break
                    }
                    if (e === document.body) {
                        i.unshift("body");
                        break
                    }
                    i.unshift(e.tagName.toLowerCase()), e = e.parentNode
                }
                return i.join(" > ")
            },
            getClosestLi: function(e) {
                var t = function(r, i) {
                    for (; r && r !== document && r.nodeType === 1; r = r.parentNode)
                        if (r.tagName.toLowerCase() === i) return r;
                    return null
                };
                return t(e, "li")
            },
            getElementPosition: function(e, t, r) {
                function i(D) {
                    var S = D.parentNode;
                    if (!S) return "";
                    var h = re(D).getSameTypeSiblings(),
                        I = h.length;
                    if (I === 1) return 0;
                    for (var E = 0, W = D; re(W).previousElementSibling().ele; W = re(W).previousElementSibling().ele, E++);
                    return E
                }
                var a = n.heatmap.getClosestLi(e);
                if (!a) return null;
                var s = e.tagName.toLowerCase(),
                    u = a.getElementsByTagName(s),
                    c = u.length,
                    l = [];
                if (c > 1) {
                    for (var p = 0; p < c; p++) {
                        var _ = n.heatmap.getElementPath(u[p], r);
                        _ === t && l.push(u[p])
                    }
                    if (l.length > 1) return Q(l, e)
                }
                return i(a)
            },
            setNotice: function(e) {
                n.is_heatmap_render_mode = !0, n.para.heatmap || (n.errorMsg = "\u60A8SDK\u6CA1\u6709\u914D\u7F6E\u5F00\u542F\u70B9\u51FB\u56FE\uFF0C\u53EF\u80FD\u6CA1\u6709\u6570\u636E\uFF01"), e && e.slice(0, 5) === "http:" && location.protocol === "https:" && (n.errorMsg = "\u60A8\u7684\u5F53\u524D\u9875\u9762\u662Fhttps\u7684\u5730\u5740\uFF0C\u795E\u7B56\u5206\u6790\u73AF\u5883\u4E5F\u5FC5\u987B\u662Fhttps\uFF01"), n.para.heatmap_url || (n.para.heatmap_url = location.protocol + "//static.sensorsdata.cn/sdk/" + n.lib_version + "/heatmap.min.js")
            },
            getDomIndex: function(e) {
                if (!e.parentNode) return -1;
                for (var t = 0, r = e.tagName, i = e.parentNode.children, a = 0; a < i.length; a++)
                    if (i[a].tagName === r) {
                        if (e === i[a]) return t;
                        t++
                    }
                return -1
            },
            selector: function(e, t) {
                var r = e.parentNode && e.parentNode.nodeType == 9 ? -1 : this.getDomIndex(e);
                return e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && (!n.para.heatmap || n.para.heatmap && n.para.heatmap.element_selector !== "not_use_id") && !t ? "#" + e.getAttribute("id") : e.tagName.toLowerCase() + (~r ? ":nth-of-type(" + (r + 1) + ")" : "")
            },
            getDomSelector: function(e, t, r) {
                if (!e || !e.parentNode || !e.parentNode.children) return !1;
                t = t && t.join ? t : [];
                var i = e.nodeName.toLowerCase();
                return e && i !== "body" && e.nodeType == 1 ? (t.unshift(this.selector(e, r)), e.getAttribute && e.getAttribute("id") && /^[A-Za-z][-A-Za-z0-9_:.]*$/.test(e.getAttribute("id")) && n.para.heatmap && n.para.heatmap.element_selector !== "not_use_id" && !r ? t.join(" > ") : this.getDomSelector(e.parentNode, t, r)) : (t.unshift("body"), t.join(" > "))
            },
            na: function() {
                var e = document.documentElement.scrollLeft || window.pageXOffset;
                return parseInt(isNaN(e) ? 0 : e, 10)
            },
            i: function() {
                var e = 0;
                try {
                    e = o.documentElement && o.documentElement.scrollTop || m.pageYOffset, e = isNaN(e) ? 0 : e
                } catch (t) {
                    e = 0
                }
                return parseInt(e, 10)
            },
            getBrowserWidth: function() {
                var e = window.innerWidth || document.body.clientWidth;
                return isNaN(e) ? 0 : parseInt(e, 10)
            },
            getBrowserHeight: function() {
                var e = window.innerHeight || document.body.clientHeight;
                return isNaN(e) ? 0 : parseInt(e, 10)
            },
            getScrollWidth: function() {
                var e = parseInt(document.body.scrollWidth, 10);
                return isNaN(e) ? 0 : e
            },
            getEleDetail: function(e) {
                var t = this.getDomSelector(e),
                    r = vr({
                        target: e
                    });
                r.$element_selector = t || "", r.$element_path = n.heatmap.getElementPath(e, n.para.heatmap && n.para.heatmap.element_selector === "not_use_id");
                var i = n.heatmap.getElementPosition(e, r.$element_path, n.para.heatmap && n.para.heatmap.element_selector === "not_use_id");
                return se(i) && (r.$element_position = i), r
            },
            getPointerEventProp: function(e, t) {
                function r() {
                    var u = document.body.scrollLeft || document.documentElement.scrollLeft || 0,
                        c = document.body.scrollTop || document.documentElement.scrollTop || 0;
                    return {
                        scrollLeft: u,
                        scrollTop: c
                    }
                }

                function i(u) {
                    if (document.documentElement.getBoundingClientRect) {
                        var c = u.getBoundingClientRect();
                        return {
                            targetEleX: c.left + r().scrollLeft || 0,
                            targetEleY: c.top + r().scrollTop || 0
                        }
                    }
                }

                function a(u) {
                    return Number(Number(u).toFixed(3))
                }

                function s(u) {
                    var c = u.pageX || u.clientX + r().scrollLeft || u.offsetX + i(t).targetEleX || 0,
                        l = u.pageY || u.clientY + r().scrollTop || u.offsetY + i(t).targetEleY || 0;
                    return {
                        $page_x: a(c),
                        $page_y: a(l)
                    }
                }
                return e ? s(e) : {}
            },
            start: function(e, t, r, i, a) {
                var s = d(i) ? i : {},
                    u = A(a) ? a : A(i) ? i : void 0;
                if (n.para.heatmap && n.para.heatmap.collect_element && !n.para.heatmap.collect_element(t)) return !1;
                var c = this.getEleDetail(t);
                if (n.para.heatmap && n.para.heatmap.custom_property) {
                    var l = n.para.heatmap.custom_property(t);
                    d(l) && (c = $(c, l))
                }
                c = $(c, this.getPointerEventProp(e, t), s), r === "a" && n.para.heatmap && n.para.heatmap.isTrackLink === !0 ? n.trackLink({
                    event: e,
                    target: t
                }, "$WebClick", c) : n.track("$WebClick", c, u)
            },
            hasElement: function(e, t) {
                var r;
                if (e.event) {
                    var i = e.event;
                    r = i.path || i._getPath && i._getPath()
                } else e.element && (r = re(e.element).getParents());
                if (r && T(r) && r.length > 0) {
                    for (var a = 0; a < r.length; a++)
                        if (typeof r[a] == "object" && r[a].nodeType === 1 && t(r[a])) return r[a]
                }
            },
            isStyleTag: function(e, t) {
                var r = ["a", "div", "input", "button", "textarea"],
                    i = ["mark", "/mark", "strong", "b", "em", "i", "u", "abbr", "ins", "del", "s", "sup"];
                return !(Q(r, e) > -1) && (!t || n.para.heatmap && n.para.heatmap.collect_tags && n.para.heatmap.collect_tags.div ? !!(d(n.para.heatmap) && d(n.para.heatmap.collect_tags) && d(n.para.heatmap.collect_tags.div) && T(n.para.heatmap.collect_tags.div.ignore_tags) && Q(n.para.heatmap.collect_tags.div.ignore_tags, e) > -1) : Q(i, e) > -1)
            },
            isCollectableDiv: function(e, t) {
                try {
                    if (e.children.length === 0) return !0;
                    for (var r = 0; r < e.children.length; r++)
                        if (e.children[r].nodeType === 1) {
                            var i = e.children[r].tagName.toLowerCase(),
                                a = n.para && n.para.heatmap && n.para.heatmap.collect_tags && n.para.heatmap.collect_tags.div && n.para.heatmap.collect_tags.div.max_level;
                            if (!(i === "div" && a > 1 || this.isStyleTag(i, t)) || !this.isCollectableDiv(e.children[r], t)) return !1
                        }
                    return !0
                } catch (s) {
                    n.log(s)
                }
                return !1
            },
            getCollectableParent: function(e, t) {
                try {
                    var r = e.parentNode,
                        i = r ? r.tagName.toLowerCase() : "";
                    if (i === "body") return !1;
                    var a = n.para && n.para.heatmap && n.para.heatmap.collect_tags && n.para.heatmap.collect_tags.div && n.para.heatmap.collect_tags.div.max_level;
                    if (i && i === "div" && (a > 1 || this.isCollectableDiv(r, t))) return r;
                    if (r && this.isStyleTag(i, t)) return this.getCollectableParent(r, t)
                } catch (s) {
                    n.log(s)
                }
                return !1
            },
            listenUrlChange: function(e) {
                e(), n.ee.spa.on("switch", function() {
                    e()
                })
            },
            initScrollmap: function() {
                if (!d(n.para.heatmap) || n.para.heatmap.scroll_notice_map !== "default") return !1;
                var e = !0;
                n.para.scrollmap && A(n.para.scrollmap.collect_url) && this.listenUrlChange(function() {
                    e = !!n.para.scrollmap.collect_url()
                });
                var t = function(i) {
                        var a = {};
                        return a.timeout = i.timeout || 1e3, a.func = i.func, a.hasInit = !1, a.inter = null, a.main = function(s, u) {
                            this.func(s, u), this.inter = null
                        }, a.go = function(s) {
                            var u = {};
                            this.inter || (u.$viewport_position = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0, u.$viewport_position = Math.round(u.$viewport_position) || 0, s ? a.main(u, !0) : this.inter = setTimeout(function() {
                                a.main(u)
                            }, this.timeout))
                        }, a
                    },
                    r = t({
                        timeout: 1e3,
                        func: function(i, a) {
                            var s = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop || 0,
                                u = new Date,
                                c = u - this.current_time;
                            (c > n.para.heatmap.scroll_delay_time && s - i.$viewport_position != 0 || a) && (i.$url = Y(), i.$title = document.title, i.$url_path = Pe(), i.event_duration = Math.min(n.para.heatmap.scroll_event_duration, parseInt(c) / 1e3), i.event_duration = i.event_duration < 0 ? 0 : i.event_duration, n.track("$WebStay", i)), this.current_time = u
                        }
                    });
                r.current_time = new Date, De(window, "scroll", function() {
                    return !!e && void r.go()
                }), De(window, "unload", function() {
                    return !!e && void r.go("notime")
                })
            },
            initHeatmap: function() {
                var e = this,
                    t = !0;
                return !(!d(n.para.heatmap) || n.para.heatmap.clickmap !== "default") && (A(n.para.heatmap.collect_url) && this.listenUrlChange(function() {
                    t = !!n.para.heatmap.collect_url()
                }), n.para.heatmap.collect_elements === "all" ? n.para.heatmap.collect_elements = "all" : n.para.heatmap.collect_elements = "interact", void(n.para.heatmap.collect_elements === "all" ? De(document, "click", function(r) {
                    if (!t) return !1;
                    var i = r || window.event;
                    if (!i) return !1;
                    var a = i.target || i.srcElement;
                    if (typeof a != "object" || typeof a.tagName != "string") return !1;
                    var s = a.tagName.toLowerCase();
                    if (s === "body" || s === "html" || !a || !a.parentNode || !a.parentNode.children) return !1;
                    var u = a.parentNode.tagName.toLowerCase();
                    u === "a" || u === "button" ? e.start(i, a.parentNode, u) : e.start(i, a, s)
                }) : De(document, "click", function(r) {
                    if (!t) return !1;
                    var i = r || window.event;
                    if (!i) return !1;
                    var a = i.target || i.srcElement,
                        s = n.heatmap.getTargetElement(a, r);
                    s ? e.start(i, s, s.tagName.toLowerCase()) : le(a) && a.tagName.toLowerCase() === "div" && d(n.para.heatmap) && n.para.heatmap.get_vtrack_config && n.unlimitedDiv.events.length > 0 && n.unlimitedDiv.isTargetEle(a) && e.start(i, a, a.tagName.toLowerCase(), {
                        $lib_method: "vtrack"
                    })
                })))
            }
        },
        Jt = {
            setOnlineState: function(e) {
                if (e === !0 && d(n.para.jsapp) && typeof n.para.jsapp.getData == "function") {
                    n.para.jsapp.isOnline = !0;
                    var t = n.para.jsapp.getData();
                    T(t) && t.length > 0 && C(t, function(r) {
                        $e(r) && n.sendState.realtimeSend(JSON.parse(r))
                    })
                } else n.para.jsapp.isOnline = !1
            },
            autoTrackIsUsed: !1,
            isReady: function(e) {
                e()
            },
            getUtm: function() {
                return H.campaignParams()
            },
            getStayTime: function() {
                return (new Date - n._t) / 1e3
            },
            setProfileLocal: function(e) {
                if (!x.isSupport()) return n.setProfile(e), !1;
                if (!d(e) || F(e)) return !1;
                var t = n.store.readObjectVal("sensorsdata_2015_jssdk_profile"),
                    r = !1;
                if (d(t) && !F(t)) {
                    for (var i in e) !(i in t && t[i] !== e[i]) && i in t || (t[i] = e[i], r = !0);
                    r && (n.store.saveObjectVal("sensorsdata_2015_jssdk_profile", t), n.setProfile(e))
                } else n.store.saveObjectVal("sensorsdata_2015_jssdk_profile", e), n.setProfile(e)
            },
            setInitReferrer: function() {
                var e = _e();
                n.setOnceProfile({
                    _init_referrer: e,
                    _init_referrer_host: H.pageProp.referrer_host
                })
            },
            setSessionReferrer: function() {
                var e = _e();
                n.store.setSessionPropsOnce({
                    _session_referrer: e,
                    _session_referrer_host: H.pageProp.referrer_host
                })
            },
            setDefaultAttr: function() {
                H.register({
                    _current_url: location.href,
                    _referrer: _e(),
                    _referring_host: H.pageProp.referrer_host
                })
            },
            trackHeatMap: function(e, t, r) {
                if (typeof e == "object" && e.tagName) {
                    var i = e.tagName.toLowerCase(),
                        a = e.parentNode.tagName.toLowerCase(),
                        s = n.para.heatmap && n.para.heatmap.track_attr ? n.para.heatmap.track_attr : ["data-sensors-click"];
                    i === "button" || i === "a" || a === "a" || a === "button" || i === "input" || i === "textarea" || Pt(e, s) || pe.start(null, e, i, t, r)
                }
            },
            trackAllHeatMap: function(e, t, r) {
                if (typeof e == "object" && e.tagName) {
                    var i = e.tagName.toLowerCase();
                    pe.start(null, e, i, t, r)
                }
            },
            autoTrackSinglePage: function(e, t) {
                function r() {
                    var c = H.campaignParams(),
                        l = {};
                    return C(c, function(p, _, D) {
                        (" " + n.source_channel_standard + " ").indexOf(" " + _ + " ") !== -1 ? l["$" + _] = D[_] : l[_] = D[_]
                    }), l
                }

                function i(c, l) {
                    n.track("$pageview", $({
                        $referrer: a,
                        $url: Y(),
                        $url_path: Pe(),
                        $title: document.title
                    }, c, r()), l), a = Y()
                }
                var a;
                a = this.autoTrackIsUsed ? H.pageProp.url : H.pageProp.referrer, e = d(e) ? e : {};
                var s = !e.not_set_profile;
                if (e.not_set_profile && delete e.not_set_profile, i(e, t), this.autoTrackSinglePage = i, n.is_first_visitor && s) {
                    var u = {};
                    n.para.preset_properties.search_keyword_baidu && We(document.referrer) && Ae() && (u.$search_keyword_id = Ne.id(), u.$search_keyword_id_type = Ne.type(), u.$search_keyword_id_hash = Qe(u.$search_keyword_id)), n.setOnceProfile($({
                        $first_visit_time: new Date,
                        $first_referrer: _e(),
                        $first_browser_language: w(navigator.language) ? navigator.language.toLowerCase() : "\u53D6\u503C\u5F02\u5E38",
                        $first_browser_charset: typeof document.charset == "string" ? document.charset.toUpperCase() : "\u53D6\u503C\u5F02\u5E38",
                        $first_traffic_source_type: rt(),
                        $first_search_keyword: Te()
                    }, r(), u)), n.is_first_visitor = !1
                }
            },
            autoTrackWithoutProfile: function(e, t) {
                e = d(e) ? e : {}, this.autoTrack($(e, {
                    not_set_profile: !0
                }), t)
            },
            autoTrack: function(e, t) {
                e = d(e) ? e : {};
                var r = H.campaignParams(),
                    i = {};
                C(r, function(c, l, p) {
                    (" " + n.source_channel_standard + " ").indexOf(" " + l + " ") !== -1 ? i["$" + l] = p[l] : i[l] = p[l]
                });
                var a = !e.not_set_profile;
                e.not_set_profile && delete e.not_set_profile;
                var s = location.href;
                if (n.para.is_single_page && Xt(function() {
                        var c = _e(s, !0);
                        n.track("$pageview", $({
                            $referrer: c,
                            $url: Y(),
                            $url_path: Pe(),
                            $title: document.title
                        }, i, e), t), s = Y()
                    }), n.track("$pageview", $({
                        $referrer: _e(null, !0),
                        $url: Y(),
                        $url_path: Pe(),
                        $title: document.title
                    }, i, e), t), n.is_first_visitor && a) {
                    var u = {};
                    n.para.preset_properties.search_keyword_baidu && We(document.referrer) && Ae() && (u.$search_keyword_id = Ne.id(), u.$search_keyword_id_type = Ne.type(), u.$search_keyword_id_hash = Qe(u.$search_keyword_id)), n.setOnceProfile($({
                        $first_visit_time: new Date,
                        $first_referrer: _e(null, !0),
                        $first_browser_language: w(navigator.language) ? navigator.language.toLowerCase() : "\u53D6\u503C\u5F02\u5E38",
                        $first_browser_charset: typeof document.charset == "string" ? document.charset.toUpperCase() : "\u53D6\u503C\u5F02\u5E38",
                        $first_traffic_source_type: rt(),
                        $first_search_keyword: Te()
                    }, i, u)), n.is_first_visitor = !1
                }
                this.autoTrackIsUsed = !0
            },
            getAnonymousID: function() {
                return F(n.store._state) ? "\u8BF7\u5148\u521D\u59CB\u5316SDK" : n.store._state._first_id || n.store._state.first_id || n.store._state._distinct_id || n.store._state.distinct_id
            },
            setPlugin: function(e) {
                return !!d(e) && void C(e, function(t, r) {
                    A(t) && (d(window.SensorsDataWebJSSDKPlugin) && window.SensorsDataWebJSSDKPlugin[r] ? t(window.SensorsDataWebJSSDKPlugin[r]) : n.log(r + "\u6CA1\u6709\u83B7\u53D6\u5230,\u8BF7\u67E5\u9605\u6587\u6863\uFF0C\u8C03\u6574" + r + "\u7684\u5F15\u5165\u987A\u5E8F\uFF01"))
                })
            },
            useModulePlugin: function() {
                n.use.apply(n, arguments)
            },
            useAppPlugin: function() {
                this.setPlugin.apply(this, arguments)
            }
        },
        Sn = {
            state: 0,
            historyState: [],
            stateType: {
                1: "1-init\u672A\u5F00\u59CB",
                2: "2-init\u5F00\u59CB",
                3: "3-store\u5B8C\u6210"
            },
            getState: function() {
                return this.historyState.join(`
`)
            },
            setState: function(e) {
                String(e) in this.stateType && (this.state = e), this.historyState.push(this.stateType[e])
            }
        },
        kn = {
            __proto__: null,
            addReferrerHost: di,
            addPropsHook: pi,
            initPara: fi,
            setInitVar: _i,
            enableLocalLog: gi,
            disableLocalLog: hi,
            quick: mi,
            use: vi,
            track: yi,
            bind: bi,
            unbind: wi,
            trackLink: Si,
            trackLinks: ki,
            setItem: Pi,
            deleteItem: Di,
            setProfile: ji,
            setOnceProfile: Ni,
            appendProfile: Ci,
            incrementProfile: Oi,
            deleteProfile: $i,
            unsetProfile: Ai,
            identify: Ti,
            trackSignup: xi,
            registerPage: Li,
            clearAllRegister: Ii,
            clearPageRegister: Ei,
            register: Ji,
            registerOnce: Hi,
            registerSession: Bi,
            registerSessionOnce: Ri,
            login: Nr,
            loginWithKey: Ui,
            logout: Ki,
            getPresetProperties: Mi,
            iOSWebClickPolyfill: Vi,
            readyState: Sn,
            para_default: bn,
            log: B,
            debug: xt,
            IDENTITY_KEY: ot
        },
        Br = function() {
            this._events = [], this.pendingEvents = []
        };
    Br.prototype = {
        emit: function(e) {
            var t = [].slice.call(arguments, 1);
            C(this._events, function(r) {
                r.type === e && r.callback.apply(r.context, t)
            }), this.pendingEvents.push({
                type: e,
                data: t
            }), this.pendingEvents.length > 20 && this.pendingEvents.shift()
        },
        on: function(e, t, r, i) {
            typeof t == "function" && (this._events.push({
                type: e,
                callback: t,
                context: r || this
            }), i = i !== !1, this.pendingEvents.length > 0 && i && C(this.pendingEvents, function(a) {
                a.type === e && t.apply(r, a.data)
            }))
        },
        tempAdd: function(e, t) {
            if (t && e) return this.emit(e, t)
        },
        isReady: function() {}
    };
    var Pn = {
            __proto__: null,
            parseSuperProperties: gr,
            searchConfigData: hr,
            strip_empty_properties: mr,
            getCurrentDomain: Ct,
            getEleInfo: vr,
            isBaiduTraffic: Ae,
            getReferrerEqid: yr,
            getReferrerEqidType: br,
            getBaiduKeyword: Ne,
            isReferralTraffic: We,
            getReferrer: _e,
            getKeywordFromReferrer: Te,
            getWxAdIdFromUrl: Sr,
            getReferSearchEngine: wr,
            getSourceFromReferrer: rt,
            info: H,
            ajax: Ot,
            getElementContent: it,
            cookie: ee,
            addEvent: De,
            EventEmitterSa: Br,
            encrypt: Ve,
            decryptIfNeeded: Me
        },
        Ee = {};
    Ee.buildData = function(e) {
        var t = {
            identities: {},
            distinct_id: n.store.getDistinctId(),
            lib: {
                $lib: "js",
                $lib_method: "code",
                $lib_version: String(n.lib_version)
            },
            properties: {}
        };
        return d(e) && d(e.identities) && !F(e.identities) ? $(t.identities, e.identities) : $(t.identities, J._state.identities), d(e) && d(e.properties) && !F(e.properties) && (e.properties.$lib_detail && (t.lib.$lib_detail = e.properties.$lib_detail, delete e.properties.$lib_detail), e.properties.$lib_method && (t.lib.$lib_method = e.properties.$lib_method, delete e.properties.$lib_method)), $(t, n.store.getUnionId(), e), ct.stage.process("addCustomProps", t), d(e.properties) && !F(e.properties) && $(t.properties, e.properties), e.type && e.type.slice(0, 7) === "profile" || (t.properties = $({}, H.properties(), J.getProps(), J.getSessionProps(), H.currentProps, t.properties), n.para.preset_properties.latest_referrer && !w(t.properties.$latest_referrer) && (t.properties.$latest_referrer = "\u53D6\u503C\u5F02\u5E38"), n.para.preset_properties.latest_search_keyword && !w(t.properties.$latest_search_keyword) && (n.para.preset_properties.search_keyword_baidu && w(t.properties.$search_keyword_id) && se(t.properties.$search_keyword_id_hash) && w(t.properties.$search_keyword_id_type) || (t.properties.$latest_search_keyword = "\u53D6\u503C\u5F02\u5E38")), n.para.preset_properties.latest_traffic_source_type && !w(t.properties.$latest_traffic_source_type) && (t.properties.$latest_traffic_source_type = "\u53D6\u503C\u5F02\u5E38"), n.para.preset_properties.latest_landing_page && !w(t.properties.$latest_landing_page) && (t.properties.$latest_landing_page = "\u53D6\u503C\u5F02\u5E38"), n.para.preset_properties.latest_wx_ad_click_id === "not_collect" ? (delete t.properties._latest_wx_ad_click_id, delete t.properties._latest_wx_ad_hash_key, delete t.properties._latest_wx_ad_callbacks) : n.para.preset_properties.latest_wx_ad_click_id && !w(t.properties._latest_wx_ad_click_id) && (t.properties._latest_wx_ad_click_id = "\u53D6\u503C\u5F02\u5E38", t.properties._latest_wx_ad_hash_key = "\u53D6\u503C\u5F02\u5E38", t.properties._latest_wx_ad_callbacks = "\u53D6\u503C\u5F02\u5E38"), w(t.properties._latest_wx_ad_click_id) && (t.properties.$url = Y())), t.properties.$time && Re(t.properties.$time) ? (t.time = 1 * t.properties.$time, delete t.properties.$time) : t.time = 1 * new Date, n.vtrackBase.addCustomProps(t), gr(t), Ie.checkIsAddSign(t), Ie.checkIsFirstTime(t), n.addReferrerHost(t), n.addPropsHook(t), ct.stage.process("formatData", t), t
    }, Ee.sendData = function(e, t) {
        var r = hr(e.properties);
        n.para.debug_mode === !0 ? (n.log(e), n.saEvent.debugPath(JSON.stringify(e), t)) : n.sendState.getSendCall(e, r, t)
    }, Ee.encodeTrackData = function(e) {
        var t = Be(e),
            r = "crc=" + ir(t);
        return "data=" + encodeURIComponent(t) + "&ext=" + encodeURIComponent(r)
    };
    var lt = function(e) {
        this.callback = e.callback, this.img = document.createElement("img"), this.img.width = 1, this.img.height = 1, n.para.img_use_crossorigin && (this.img.crossOrigin = "anonymous"), this.data = e.data, this.server_url = Wi(e.server_url, e.data)
    };
    lt.prototype.start = function() {
        var e = this;
        n.para.ignore_oom && (this.img.onload = function() {
            this.onload = null, this.onerror = null, this.onabort = null, e.isEnd()
        }, this.img.onerror = function() {
            this.onload = null, this.onerror = null, this.onabort = null, e.isEnd()
        }, this.img.onabort = function() {
            this.onload = null, this.onerror = null, this.onabort = null, e.isEnd()
        }), this.img.src = this.server_url
    }, lt.prototype.lastClear = function() {
        var e = St();
        e.ie !== void 0 ? this.img.src = "about:blank" : this.img.src = ""
    };
    var Rr = function(e) {
        this.callback = e.callback, this.server_url = e.server_url, this.data = Cr(e.data)
    };
    Rr.prototype.start = function() {
        var e = this;
        Ot({
            url: this.server_url,
            type: "POST",
            data: this.data,
            credentials: !1,
            timeout: n.para.datasend_timeout,
            cors: !0,
            success: function() {
                e.isEnd()
            },
            error: function() {
                e.isEnd()
            }
        })
    };
    var Ur = function(e) {
        this.callback = e.callback, this.server_url = e.server_url, this.data = Cr(e.data)
    };
    Ur.prototype.start = function() {
        var e = this;
        typeof navigator == "object" && typeof navigator.sendBeacon == "function" && navigator.sendBeacon(this.server_url, this.data), setTimeout(function() {
            e.isEnd()
        }, 40)
    };
    var Fe = {};
    Fe.getSendCall = function(e, t, r) {
        if (n.is_heatmap_render_mode) return !1;
        if (n.readyState.state < 3) return n.log("\u521D\u59CB\u5316\u6CA1\u6709\u5B8C\u6210"), !1;
        e._track_id = Number(String(te()).slice(2, 5) + String(te()).slice(2, 4) + String(new Date().getTime()).slice(-4)), e._flush_time = new Date().getTime();
        var i = e;
        e = JSON.stringify(e);
        var a = {
            data: i,
            config: t,
            callback: r
        };
        return n.events.tempAdd("send", i), !n.para.app_js_bridge && n.para.batch_send && x.isSupport() && localStorage.length < 100 ? (n.log(i), n.batchSend.add(a.data), !1) : (i.type === "item_set" || i.type === "item_delete" ? this.prepareServerUrl(a) : n.bridge.dataSend(a, this, r), void n.log(i))
    }, Fe.prepareServerUrl = function(e) {
        if (typeof e.config == "object" && e.config.server_url) this.sendCall(e, e.config.server_url, e.callback);
        else if (T(n.para.server_url) && n.para.server_url.length)
            for (var t = 0; t < n.para.server_url.length; t++) this.sendCall(e, n.para.server_url[t]);
        else typeof n.para.server_url == "string" && n.para.server_url !== "" ? this.sendCall(e, n.para.server_url, e.callback) : n.log("\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01")
    }, Fe.sendCall = function(e, t, r) {
        var i = {
            server_url: t,
            data: JSON.stringify(e.data),
            callback: r,
            config: e.config
        };
        d(n.para.jsapp) && !n.para.jsapp.isOnline && typeof n.para.jsapp.setData == "function" ? (delete i.callback, i = JSON.stringify(i), n.para.jsapp.setData(i)) : this.realtimeSend(i)
    }, Fe.realtimeSend = function(e) {
        var t = zi(e);
        t.start()
    };
    var Kr = "sawebjssdk-",
        Ht = "tab-sawebjssdk-";
    Or.prototype = {
        batchInterval: function() {
            this.serverUrl === "" && this.getServerUrl(), this.hasTabStorage || (this.generateTabStorage(), this.hasTabStorage = !0);
            var e = this;
            e.timer = setTimeout(function() {
                e.updateExpireTime(), e.recycle(), e.send(), clearTimeout(e.timer), e.batchInterval()
            }, n.para.batch_send.send_interval)
        },
        getServerUrl: function() {
            return w(n.para.server_url) && n.para.server_url !== "" || T(n.para.server_url) && n.para.server_url.length ? void(this.serverUrl = T(n.para.server_url) ? n.para.server_url[0] : n.para.server_url) : n.log("\u5F53\u524D server_url \u4E3A\u7A7A\u6216\u4E0D\u6B63\u786E\uFF0C\u53EA\u5728\u63A7\u5236\u53F0\u6253\u5370\u65E5\u5FD7\uFF0Cnetwork \u4E2D\u4E0D\u4F1A\u53D1\u6570\u636E\uFF0C\u8BF7\u914D\u7F6E\u6B63\u786E\u7684 server_url\uFF01")
        },
        send: function() {
            if (!(this.sendTimeStamp && Z() - this.sendTimeStamp < n.para.batch_send.datasend_timeout)) {
                var e = x.get(this.tabKey);
                if (e && (this.sendTimeStamp = Z(), e = q(e) || this.generateTabStorageVal(), e.data.length)) {
                    for (var t = [], r = 0; r < e.data.length; r++) t.push(n.store.readObjectVal(e.data[r]));
                    this.request(t, e.data)
                }
            }
        },
        updateExpireTime: function() {
            var e = x.get(this.tabKey);
            e && (e = q(e) || this.generateTabStorageVal(), e.expireTime = Z() + 2 * n.para.batch_send.send_interval, e.serverUrl = this.serverUrl, x.set(this.tabKey, JSON.stringify(e)))
        },
        request: function(e, t) {
            var r = this;
            mt({
                url: this.serverUrl,
                type: "POST",
                data: "data_list=" + encodeURIComponent(Be(JSON.stringify(e))),
                credentials: !1,
                timeout: n.para.batch_send.datasend_timeout,
                cors: !0,
                success: function() {
                    r.remove(t), r.sendTimeStamp = 0
                },
                error: function() {
                    r.sendTimeStamp = 0
                }
            })
        },
        remove: function(e) {
            var t = x.get(this.tabKey);
            if (t) {
                for (var r = (q(t) || this.generateTabStorageVal()).data, i = 0; i < e.length; i++) {
                    var a = Q(r, e[i]);
                    a > -1 && r.splice(a, 1), x.remove(e[i])
                }
                x.set(this.tabKey, JSON.stringify(this.generateTabStorageVal(r)))
            }
        },
        add: function(e) {
            var t = Kr + String(te()),
                r = x.get(this.tabKey);
            r === null ? (this.tabKey = Ht + String(te()), r = this.generateTabStorageVal()) : r = q(r) || this.generateTabStorageVal(), r.data.push(t), r.expireTime = Z() + 2 * n.para.batch_send.send_interval, x.set(this.tabKey, JSON.stringify(r)), n.store.saveObjectVal(t, e), e.type !== "track_signup" && e.event !== "$pageview" || this.sendImmediately()
        },
        generateTabStorage: function() {
            this.tabKey = Ht + String(te()), x.set(this.tabKey, JSON.stringify(this.generateTabStorageVal()))
        },
        generateTabStorageVal: function(e) {
            return e = e || [], {
                data: e,
                expireTime: Z() + 2 * n.para.batch_send.send_interval,
                serverUrl: this.serverUrl
            }
        },
        sendImmediately: function() {
            this.send()
        },
        recycle: function() {
            for (var e = {}, t = 1e4, r = "sajssdk-lock-get-", i = 0; i < localStorage.length; i++) {
                var a = localStorage.key(i),
                    s = this;
                if (a.indexOf(Ht) === 0) {
                    for (var u = q(x.get(a)) || this.generateTabStorageVal(), c = 0; c < u.data.length; c++) e[u.data[c]] = !0;
                    if (Z() > u.expireTime && this.serverUrl === u.serverUrl) {
                        var l = new Xe(r);
                        l.get(a, t, 1e3, function(S) {
                            if (S) {
                                x.get(s.tabKey) === null && s.generateTabStorage();
                                var h = q(S) || s.generateTabStorageVal();
                                x.set(s.tabKey, JSON.stringify(s.generateTabStorageVal((q(x.get(s.tabKey)) || this.generateTabStorageVal()).data.concat(h.data))))
                            }
                        })
                    }
                } else if (a.indexOf(r) === 0) {
                    var p = q(x.get(a)) || {
                        expireTime: 0
                    };
                    Z() - p.expireTime > t && x.remove(a)
                }
            }
            for (var _ = 0; _ < localStorage.length; _++) {
                var D = localStorage.key(_);
                D.indexOf(Kr) !== 0 || e[D] || x.remove(D)
            }
        }
    };
    var Dn = new Or,
        jn = {
            bridge_info: {
                touch_app_bridge: !1,
                verify_success: !1,
                platform: ""
            },
            is_verify_success: !1,
            initPara: function() {
                var e = {
                    is_send: !0,
                    white_list: [],
                    is_mui: !1
                };
                typeof n.para.app_js_bridge == "object" ? n.para.app_js_bridge = $({}, e, n.para.app_js_bridge) : n.para.use_app_track === !0 || n.para.app_js_bridge === !0 || n.para.use_app_track === "only" ? (n.para.use_app_track_is_send !== !1 && n.para.use_app_track !== "only" || (e.is_send = !1), n.para.app_js_bridge = $({}, e)) : n.para.use_app_track === "mui" && (e.is_mui = !0, n.para.app_js_bridge = $({}, e)), n.para.app_js_bridge.is_send === !1 && n.log("\u8BBE\u7F6E\u4E86 is_send:false,\u5982\u679C\u6253\u901A\u5931\u8D25\uFF0C\u6570\u636E\u5C06\u88AB\u4E22\u5F03\uFF01")
            },
            initState: function() {
                function e(r) {
                    function i(l) {
                        var p = {
                            hostname: "",
                            project: ""
                        };
                        try {
                            p.hostname = ne(l).hostname, p.project = ne(l).searchParams.get("project") || "default"
                        } catch (_) {
                            n.log(_)
                        }
                        return p
                    }
                    var a = i(r),
                        s = i(n.para.server_url);
                    if (a.hostname === s.hostname && a.project === s.project) return !0;
                    if (n.para.app_js_bridge.white_list.length > 0)
                        for (var u = 0; u < n.para.app_js_bridge.white_list.length; u++) {
                            var c = i(n.para.app_js_bridge.white_list[u]);
                            if (c.hostname === a.hostname && c.project === a.project) return !0
                        }
                    return !1
                }
                if (d(n.para.app_js_bridge) && !n.para.app_js_bridge.is_mui) {
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && d(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) e(window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) && (n.bridge.is_verify_success = !0);
                    else if (d(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) {
                        var t = window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url();
                        t && e(t) && (n.bridge.is_verify_success = !0)
                    }
                }
                this.bridge_info = this.initDefineBridgeInfo()
            },
            initDefineBridgeInfo: function() {
                var e = {
                    touch_app_bridge: !0,
                    verify_success: !1,
                    platform: ""
                };
                return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && d(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url ? (e.platform = "ios", n.bridge.is_verify_success ? e.verify_success = "success" : e.verify_success = "fail") : d(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track ? (e.platform = "android", n.bridge.is_verify_success ? e.verify_success = "success" : e.verify_success = "fail") : typeof SensorsData_APP_JS_Bridge == "object" && (SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify || SensorsData_APP_JS_Bridge.sensorsdata_track) ? (e.platform = "android", SensorsData_APP_JS_Bridge.sensorsdata_verify && SensorsData_APP_JS_Bridge.sensorsdata_visual_verify ? SensorsData_APP_JS_Bridge.sensorsdata_visual_verify(JSON.stringify({
                    server_url: n.para.server_url
                })) ? e.verify_success = "success" : e.verify_success = "fail" : e.verify_success = "success") : !/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream ? e.touch_app_bridge = !1 : (e.platform = "ios", n.bridge.iOS_UA_bridge() ? e.verify_success = "success" : e.verify_success = "fail"), e
            },
            iOS_UA_bridge: function() {
                if (/sensors-verify/.test(navigator.userAgent)) {
                    var e = navigator.userAgent.match(/sensors-verify\/([^\s]+)/);
                    if (e && e[0] && typeof e[1] == "string" && e[1].split("?").length === 2) {
                        e = e[1].split("?");
                        var t = null,
                            r = null;
                        try {
                            t = ne(n.para.server_url).hostname, r = ne(n.para.server_url).searchParams.get("project") || "default"
                        } catch (i) {
                            n.log(i)
                        }
                        return !(!t || t !== e[0] || !r || r !== e[1])
                    }
                    return !1
                }
                return !!/sa-sdk-ios/.test(navigator.userAgent)
            },
            dataSend: function(e, t, r) {
                function i(c) {
                    var l = JSON.stringify($({
                        server_url: n.para.server_url
                    }, c));
                    return l = l.replaceAll(/\r\n/g, ""), l = encodeURIComponent(l), "sensorsanalytics://trackEvent?event=" + l
                }
                var a = e.data;
                if (d(n.para.app_js_bridge) && !n.para.app_js_bridge.is_mui)
                    if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage && d(window.SensorsData_iOS_JS_Bridge) && window.SensorsData_iOS_JS_Bridge.sensorsdata_app_server_url) n.bridge.is_verify_success ? (window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify({
                        callType: "app_h5_track",
                        data: $({
                            server_url: n.para.server_url
                        }, a)
                    })), typeof r == "function" && r()) : n.para.app_js_bridge.is_send ? (n.debug.apph5({
                        data: a,
                        step: "4.1",
                        output: "all"
                    }), t.prepareServerUrl(e)) : typeof r == "function" && r();
                    else if (d(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_get_server_url && window.SensorsData_APP_New_H5_Bridge.sensorsdata_track) n.bridge.is_verify_success ? (SensorsData_APP_New_H5_Bridge.sensorsdata_track(JSON.stringify($({
                    server_url: n.para.server_url
                }, a))), typeof r == "function" && r()) : n.para.app_js_bridge.is_send ? (n.debug.apph5({
                    data: a,
                    step: "4.2",
                    output: "all"
                }), t.prepareServerUrl(e)) : typeof r == "function" && r();
                else if (typeof SensorsData_APP_JS_Bridge == "object" && (SensorsData_APP_JS_Bridge.sensorsdata_verify || SensorsData_APP_JS_Bridge.sensorsdata_track)) SensorsData_APP_JS_Bridge.sensorsdata_verify ? SensorsData_APP_JS_Bridge.sensorsdata_verify(JSON.stringify($({
                    server_url: n.para.server_url
                }, a))) ? typeof r == "function" && r() : n.para.app_js_bridge.is_send ? (n.debug.apph5({
                    data: a,
                    step: "3.1",
                    output: "all"
                }), t.prepareServerUrl(e)) : typeof r == "function" && r() : (SensorsData_APP_JS_Bridge.sensorsdata_track(JSON.stringify($({
                    server_url: n.para.server_url
                }, a))), typeof r == "function" && r());
                else if (!/sensors-verify/.test(navigator.userAgent) && !/sa-sdk-ios/.test(navigator.userAgent) || window.MSStream) d(n.para.app_js_bridge) && n.para.app_js_bridge.is_send === !0 ? (n.debug.apph5({
                    data: a,
                    step: "2",
                    output: "all"
                }), t.prepareServerUrl(e)) : typeof r == "function" && r();
                else {
                    var s = null;
                    if (n.bridge.iOS_UA_bridge()) {
                        s = document.createElement("iframe");
                        var u = i(a);
                        s.setAttribute("src", u), document.documentElement.appendChild(s), s.parentNode.removeChild(s), s = null, typeof r == "function" && r()
                    } else n.para.app_js_bridge.is_send ? (n.debug.apph5({
                        data: a,
                        step: "3.2",
                        output: "all"
                    }), t.prepareServerUrl(e)) : typeof r == "function" && r()
                } else d(n.para.app_js_bridge) && n.para.app_js_bridge.is_mui ? d(window.plus) && window.plus.SDAnalytics && window.plus.SDAnalytics.trackH5Event ? (window.plus.SDAnalytics.trackH5Event(e), typeof r == "function" && r()) : d(n.para.app_js_bridge) && n.para.app_js_bridge.is_send === !0 ? t.prepareServerUrl(e) : typeof r == "function" && r() : (n.debug.apph5({
                    data: a,
                    step: "1",
                    output: "code"
                }), t.prepareServerUrl(e))
            },
            app_js_bridge_v1: function() {
                function e(s) {
                    i = s, $e(i) && (i = JSON.parse(i)), a && (a(i), a = null, i = null)
                }

                function t() {
                    typeof window.SensorsData_APP_JS_Bridge == "object" && window.SensorsData_APP_JS_Bridge.sensorsdata_call_app && (i = SensorsData_APP_JS_Bridge.sensorsdata_call_app(), $e(i) && (i = JSON.parse(i)))
                }

                function r() {
                    if (/iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream) {
                        var s = document.createElement("iframe");
                        s.setAttribute("src", "sensorsanalytics://getAppInfo"), document.documentElement.appendChild(s), s.parentNode.removeChild(s), s = null
                    }
                }
                var i = null,
                    a = null;
                window.sensorsdata_app_js_bridge_call_js = function(s) {
                    e(s)
                }, n.getAppStatus = function(s) {
                    return r(), t(), s ? void(i === null ? a = s : (s(i), i = null)) : i
                }
            },
            supportAppCallJs: function() {
                window.sensorsdata_app_call_js = function(e, t) {
                    if (e in window.sensorsdata_app_call_js.modules) return window.sensorsdata_app_call_js.modules[e](t)
                }, window.sensorsdata_app_call_js.modules = {}
            }
        },
        Ce = function(e) {
            this.list = {}, this.type = e.type, this.app_call_js = A(e.app_call_js) ? e.app_call_js : function() {}, this.init()
        };
    Ce.prototype.init = function() {
        var e = this;
        window.sensorsdata_app_call_js.modules[this.type] || (window.sensorsdata_app_call_js.modules[this.type] = function(t) {
            return e.app_call_js(t)
        })
    }, Ce.prototype.jsCallApp = function(e) {
        var t = {
            callType: this.type,
            data: e
        };
        if (window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(t));
        else {
            if (!d(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) return n.log("\u6570\u636E\u53D1\u5F80App\u5931\u8D25\uFF0CApp\u6CA1\u6709\u66B4\u9732bridge"), !1;
            window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(t))
        }
    }, Ce.prototype.getAppData = function() {
        return d(window.SensorsData_APP_New_H5_Bridge) ? A(window.SensorsData_APP_New_H5_Bridge[this.type]) ? window.SensorsData_APP_New_H5_Bridge[this.type]() : window.SensorsData_APP_New_H5_Bridge[this.type] : d(window.SensorsData_APP_JS_Bridge) && A(window.SensorsData_APP_JS_Bridge[this.type]) ? window.SensorsData_APP_JS_Bridge[this.type]() : void 0
    }, Ce.prototype.hasAppBridge = function() {
        return window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage ? "ios" : d(window.SensorsData_APP_New_H5_Bridge) && window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app ? "android" : (n.log("App\u7AEFbridge\u672A\u66B4\u9732"), !1)
    }, Ce.prototype.requestToApp = function(e) {
        function t() {
            var u = new Date().getTime().toString(16),
                c = String(te()).replace(".", "").slice(1, 8);
            return u + "-" + c
        }
        var r = this,
            i = d(e.data) ? e.data : {};
        A(e.callback) || (e.callback = function() {}), d(e.timeout) && se(e.timeout.time) && (A(e.timeout.callback) || (e.timeout.callback = function() {}), e.timer = setTimeout(function() {
            e.timeout.callback(), delete r.list[a]
        }, e.timeout.time));
        var a = t();
        this.list[a] = e;
        var s = {
            callType: this.type,
            data: i
        };
        if (s.data.message_id = a, window.webkit && window.webkit.messageHandlers && window.webkit.messageHandlers.sensorsdataNativeTracker && window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage) window.webkit.messageHandlers.sensorsdataNativeTracker.postMessage(JSON.stringify(s));
        else {
            if (!d(window.SensorsData_APP_New_H5_Bridge) || !window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) return n.log("\u6570\u636E\u53D1\u5F80App\u5931\u8D25\uFF0CApp\u6CA1\u6709\u66B4\u9732bridge"), !1;
            window.SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(s))
        }
    }, Ce.prototype.double = function(e) {
        if (e.message_id) {
            var t = this.list[e.message_id];
            t && (t.timer && clearTimeout(t.timer), t.callback(e), delete this.list[e.message_id])
        }
    };
    var R = {};
    R.initUrl = function() {
        var e, t = {
            server_url: {
                project: "",
                host: ""
            },
            page_url: {
                host: "",
                pathname: ""
            }
        };
        if (!w(n.para.server_url)) return n.log("----vcollect---server_url\u5FC5\u987B\u4E3A\u5B57\u7B26\u4E32"), !1;
        try {
            e = ne(n.para.server_url), t.server_url.project = e.searchParams.get("project") || "default", t.server_url.host = e.host
        } catch (i) {
            return n.log("----vcollect---server_url\u89E3\u6790\u5F02\u5E38", i), !1
        }
        var r;
        try {
            r = ne(location.href), t.page_url.host = r.hostname, t.page_url.pathname = r.pathname
        } catch (i) {
            return n.log("----vcollect---\u9875\u9762\u5730\u5740\u89E3\u6790\u5F02\u5E38", i), !1
        }
        return t
    }, R.isDiv = function(e) {
        if (e.element_path) {
            var t = e.element_path.split(">"),
                r = ie(t.pop());
            if (r.slice(0, 3) !== "div") return !1
        }
        return !0
    }, R.configIsMatchNew = function(e, t) {
        if (w(e.$element_selector) && w(t.element_selector)) {
            if (t.element_field === "element_selector" && t.function === "equal") return e.$element_selector === t.element_selector;
            if (t.element_field === "element_selector" && t.function === "contain") return e.$element_selector.indexOf(t.element_selector) > -1
        }
        if (w(e.$element_path) && w(t.element_path)) {
            if (t.element_field === "element_path" && t.function === "equal") return e.$element_path === t.element_path;
            if (t.element_field === "element_path" && t.function === "contain") return e.$element_path.indexOf(t.element_path) > -1
        }
        return !1
    }, R.configIsMatch = function(e, t) {
        return (!t.limit_element_content || t.element_content === e.$element_content) && (!t.limit_element_position || t.element_position === String(e.$element_position)) && (t.element_field && t.function ? R.configIsMatchNew(e, t) : R.configIsMatchOldVersion(e, t))
    }, R.configIsMatchOldVersion = function(e, t) {
        if (!t.element_path) return !1;
        if (e.$element_position !== void 0) {
            if (t.element_path !== e.$element_path) return !1
        } else if (n.vtrackBase.isDiv({
                element_path: t.element_path
            })) {
            if (e.$element_path.indexOf(t.element_path) < 0) return !1
        } else if (t.element_path !== e.$element_path) return !1;
        return !0
    }, R.filterConfig = function(e, t, r) {
        var i = [];
        if (!r) {
            var a = R.initUrl();
            if (!a) return [];
            r = a.page_url
        }
        return e.event === "$WebClick" && C(t, function(s) {
            d(s) && (s.event_type === "webclick" || s.event_type === "appclick") && d(s.event) && s.event.url_host === r.host && s.event.url_path === r.pathname && R.configIsMatch(e.properties, s.event) && i.push(s)
        }), i
    }, R.getPropElInLi = function(e, t) {
        if (!(e && le(e) && w(t)) || e.tagName.toLowerCase() !== "li") return null;
        var r, i = n.heatmap.getDomSelector(e);
        if (i) {
            r = i + t;
            var a = Ge(r);
            return a || null
        }
        return n.log("----custom---\u83B7\u53D6\u540C\u7EA7\u5C5E\u6027\u5143\u7D20\u5931\u8D25\uFF0Cselector\u4FE1\u606F\u5F02\u5E38", i, t), null
    }, R.getProp = function(e, t) {
        if (!d(e)) return !1;
        if (!(w(e.name) && e.name.length > 0)) return n.log("----vcustom----\u5C5E\u6027\u540D\u4E0D\u5408\u6CD5,\u5C5E\u6027\u629B\u5F03", e.name), !1;
        var r, i, a = {};
        if (e.method === "content") {
            var s;
            if (w(e.element_selector) && e.element_selector.length > 0) s = Ge(e.element_selector);
            else {
                if (!t || !w(e.list_selector)) return n.log("----vcustom----\u5C5E\u6027\u914D\u7F6E\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03", e.name), !1;
                var u = Ge(t.properties.$element_selector);
                if (!u) return n.log("----vcustom----\u70B9\u51FB\u5143\u7D20\u83B7\u53D6\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03", e.name), !1;
                var c = n.heatmap.getClosestLi(u);
                s = R.getPropElInLi(c, e.list_selector)
            }
            if (!s || !le(s)) return n.log("----vcustom----\u5C5E\u6027\u5143\u7D20\u83B7\u53D6\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03", e.name), !1;
            if (s.tagName.toLowerCase() === "input") r = s.value || "";
            else if (s.tagName.toLowerCase() === "select") {
                var l = s.selectedIndex;
                se(l) && le(s[l]) && (r = it(s[l], "select"))
            } else r = it(s, s.tagName.toLowerCase());
            if (e.regular) {
                try {
                    i = new RegExp(e.regular).exec(r)
                } catch (p) {
                    return n.log("----vcustom----\u6B63\u5219\u5904\u7406\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03", e.name), !1
                }
                if (i === null) return n.log("----vcustom----\u5C5E\u6027\u89C4\u5219\u5904\u7406\uFF0C\u672A\u5339\u914D\u5230\u7ED3\u679C,\u5C5E\u6027\u629B\u5F03", e.name), !1;
                if (!T(i) || !w(i[0])) return n.log("----vcustom----\u6B63\u5219\u5904\u7406\u5F02\u5E38\uFF0C\u5C5E\u6027\u629B\u5F03", e.name, i), !1;
                r = i[0]
            }
            if (e.type === "STRING") a[e.name] = r;
            else if (e.type === "NUMBER") {
                if (r.length < 1) return n.log("----vcustom----\u672A\u83B7\u53D6\u5230\u6570\u5B57\u5185\u5BB9\uFF0C\u5C5E\u6027\u629B\u5F03", e.name, r), !1;
                if (isNaN(Number(r))) return n.log("----vcustom----\u6570\u5B57\u7C7B\u578B\u5C5E\u6027\u8F6C\u6362\u5931\u8D25\uFF0C\u5C5E\u6027\u629B\u5F03", e.name, r), !1;
                a[e.name] = Number(r)
            }
            return a
        }
        return n.log("----vcustom----\u5C5E\u6027\u4E0D\u652F\u6301\u6B64\u83B7\u53D6\u65B9\u5F0F", e.name, e.method), !1
    }, R.getAssignConfigs = function(e, t) {
        var r = R.initUrl();
        if (!r || !r.page_url) return [];
        if (!d(t)) return [];
        var i = [];
        return t.events = t.events || t.eventList, T(t.events) && t.events.length > 0 ? (C(t.events, function(a) {
            d(a) && d(a.event) && a.event.url_host === r.page_url.host && a.event.url_path === r.page_url.pathname && e(a) && i.push(a)
        }), i) : []
    }, R.addCustomProps = function(e) {
        if (n.bridge.bridge_info.verify_success === "success") {
            var t = n.vapph5collect.customProp.geth5Props(JSON.parse(JSON.stringify(e)));
            d(t) && !F(t) && (e.properties = $(e.properties, t))
        }
        var r = n.vtrackcollect.customProp.getVtrackProps(JSON.parse(JSON.stringify(e)));
        return d(r) && !F(r) && (e.properties = $(e.properties, r)), e
    }, R.init = function() {
        n.vtrackcollect.init(), n.bridge.bridge_info.verify_success === "success" && n.vapph5collect.init()
    };
    var Mr = {
            events: [],
            init: function(e) {
                this.filterWebClickEvents(e)
            },
            filterWebClickEvents: function(e) {
                this.events = n.vtrackcollect.getAssignConfigs(function(t) {
                    return !(!d(t) || t.event.unlimited_div !== !0 || t.event_type !== "webclick")
                }, e)
            },
            isTargetEle: function(e) {
                var t = n.heatmap.getEleDetail(e);
                if (!d(t) || !w(t.$element_path)) return !1;
                for (var r = 0; r < this.events.length; r++)
                    if (d(this.events[r]) && d(this.events[r].event) && n.vtrackcollect.configIsMatch(t, this.events[r].event)) return !0;
                return !1
            }
        },
        Vr = {
            events: [],
            configSwitch: !1,
            collectAble: function() {
                return this.configSwitch && d(n.para.heatmap) && n.para.heatmap.get_vtrack_config
            },
            updateEvents: function(e) {
                this.events = n.vtrackcollect.getAssignConfigs(function(t) {
                    return !!(d(t) && T(t.properties) && t.properties.length > 0)
                }, e), this.events.length ? this.configSwitch = !0 : this.configSwitch = !1
            },
            getVtrackProps: function(e) {
                var t = {};
                return this.collectAble() ? (e.event === "$WebClick" && (t = this.clickCustomPropMaker(e, this.events)), t) : {}
            },
            clickCustomPropMaker: function(e, t, r) {
                var i = this;
                r = r || this.filterConfig(e, t, n.vtrackcollect.url_info.page_url);
                var a = {};
                return r.length ? (C(r, function(s) {
                    T(s.properties) && s.properties.length > 0 && C(s.properties, function(u) {
                        var c = i.getProp(u, e);
                        d(c) && $(a, c)
                    })
                }), a) : {}
            },
            getProp: R.getProp,
            getPropElInLi: R.getPropElInLi,
            filterConfig: R.filterConfig
        },
        Nn = {
            unlimitedDiv: Mr,
            config: {},
            storageEnable: !0,
            storage_name: "webjssdkvtrackcollect",
            para: {
                session_time: 18e5,
                timeout: 5e3,
                update_interval: 18e5
            },
            url_info: {},
            timer: null,
            update_time: null,
            customProp: Vr,
            initUrl: function() {
                var e = R.initUrl();
                if (e) {
                    var t;
                    try {
                        t = new ht(n.para.server_url), t._values.Path = "/config/visualized/Web.conf", e.api_url = t.getUrl()
                    } catch (r) {
                        return n.log("----vtrackcollect---API\u5730\u5740\u89E3\u6790\u5F02\u5E38", r), !1
                    }
                    this.url_info = e
                }
                return e
            },
            init: function() {
                if (!d(n.para.heatmap) || !n.para.heatmap.get_vtrack_config) return !1;
                if (x.isSupport() || (this.storageEnable = !1), !this.initUrl()) return n.log("----vtrackcustom----\u521D\u59CB\u5316\u5931\u8D25\uFF0Curl\u4FE1\u606F\u89E3\u6790\u5931\u8D25"), !1;
                if (this.storageEnable) {
                    var e = n.store.readObjectVal(this.storage_name);
                    if (d(e) && d(e.data))
                        if (this.serverUrlIsSame(e.serverUrl)) {
                            this.config = e.data, this.update_time = e.updateTime, this.updateConfig(e.data);
                            var t = new Date().getTime(),
                                r = t - this.update_time;
                            if (se(r) && r > 0 && r < this.para.session_time) {
                                var i = this.para.update_interval - r;
                                this.setNextFetch(i)
                            } else this.getConfigFromServer()
                        } else this.getConfigFromServer();
                    else this.getConfigFromServer()
                } else this.getConfigFromServer();
                this.pageStateListenner()
            },
            serverUrlIsSame: function(e) {
                return !!d(e) && e.host === this.url_info.server_url.host && e.project === this.url_info.server_url.project
            },
            getConfigFromServer: function() {
                var e = this,
                    t = function(i, a) {
                        e.update_time = new Date().getTime();
                        var s = {};
                        i === 200 ? a && d(a) && a.os === "Web" && (s = a, e.updateConfig(s)) : i === 205 ? e.updateConfig(s) : i === 304 ? s = e.config : (n.log("----vtrackcustom----\u6570\u636E\u5F02\u5E38", i), e.updateConfig(s)), e.updateStorage(s), e.setNextFetch()
                    },
                    r = function(i) {
                        e.update_time = new Date().getTime(), n.log("----vtrackcustom----\u914D\u7F6E\u62C9\u53D6\u5931\u8D25", i), e.setNextFetch()
                    };
                this.sendRequest(t, r)
            },
            setNextFetch: function(e) {
                var t = this;
                this.timer && (clearTimeout(this.timer), this.timer = null), e = e || this.para.update_interval, this.timer = setTimeout(function() {
                    t.getConfigFromServer()
                }, e)
            },
            pageStateListenner: function() {
                var e = this;
                lr({
                    visible: function() {
                        var t = new Date().getTime(),
                            r = t - e.update_time;
                        if (se(r) && r > 0 && r < e.para.update_interval) {
                            var i = e.para.update_interval - r;
                            e.setNextFetch(i)
                        } else e.getConfigFromServer()
                    },
                    hidden: function() {
                        e.timer && (clearTimeout(e.timer), e.timer = null)
                    }
                })
            },
            updateConfig: function(e) {
                return !!d(e) && (this.config = e, this.customProp.updateEvents(e), void this.unlimitedDiv.init(e))
            },
            updateStorage: function(e) {
                if (!this.storageEnable || !d(e)) return !1;
                var t;
                if (this.url_info.server_url) t = this.url_info.server_url;
                else {
                    var r = n.vtrackcollect.initUrl();
                    if (!r) return !1;
                    t = r.server_url
                }
                var i = {
                    updateTime: new Date().getTime(),
                    data: e,
                    serverUrl: t
                };
                n.store.saveObjectVal(this.storage_name, i)
            },
            sendRequest: function(e, t) {
                var r = this,
                    i = {
                        app_id: this.url_info.page_url.host
                    };
                this.config.version && (i.v = this.config.version), cr({
                    url: r.url_info.api_url,
                    callbackName: "saJSSDKVtrackCollectConfig",
                    data: i,
                    timeout: r.para.timeout,
                    success: function(a, s) {
                        e(a, s)
                    },
                    error: function(a) {
                        t(a)
                    }
                })
            },
            getAssignConfigs: R.getAssignConfigs,
            configIsMatch: R.configIsMatch
        },
        Cn = {
            events: [],
            getAssignConfigs: R.getAssignConfigs,
            filterConfig: R.filterConfig,
            getProp: R.getProp,
            initUrl: R.initUrl,
            updateEvents: function(e) {
                T(e) && (this.events = e)
            },
            init: function() {
                this.initAppGetPropsBridge()
            },
            geth5Props: function(e) {
                var t = {},
                    r = [],
                    i = this;
                if (!this.events.length) return {};
                if (e.event === "$WebClick") {
                    var a = this.filterConfig(e, this.events);
                    if (!a.length) return {};
                    C(a, function(s) {
                        d(s) && (T(s.properties) && s.properties.length > 0 && C(s.properties, function(u) {
                            if (d(u))
                                if (u.h5 === !1) T(t.sensorsdata_app_visual_properties) || (t.sensorsdata_app_visual_properties = []), t.sensorsdata_app_visual_properties.push(u);
                                else {
                                    var c = i.getProp(u, e);
                                    d(c) && (t = $(t, c))
                                }
                        }), w(s.event_name) && r.push(s.event_name))
                    }), d(window.SensorsData_App_Visual_Bridge) && window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode && (window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode === !0 || window.SensorsData_App_Visual_Bridge.sensorsdata_visualized_mode()) && (t.sensorsdata_web_visual_eventName = r)
                }
                return t.sensorsdata_app_visual_properties && (t.sensorsdata_app_visual_properties = Be(JSON.stringify(t.sensorsdata_app_visual_properties))), t
            },
            initAppGetPropsBridge: function() {
                var e = this;
                return new n.JSBridge({
                    type: "getJSVisualProperties",
                    app_call_js: function(t) {
                        var r = {};
                        try {
                            t = JSON.parse(He(t))
                        } catch (c) {
                            n.log("getJSVisualProperties data parse error!")
                        }
                        if (d(t)) {
                            var i = t.sensorsdata_js_visual_properties,
                                a = e.initUrl();
                            a && (a = a.page_url, T(i) && i.length > 0 && C(i, function(c) {
                                if (d(c) && c.url_host === a.host && c.url_path === a.pathname && c.h5) {
                                    var l = e.getProp(c);
                                    d(l) && (r = $(r, l))
                                }
                            }))
                        }
                        var s = n.bridge.bridge_info.platform;
                        if (s === "android") {
                            var u = {
                                callType: "getJSVisualProperties",
                                data: r
                            };
                            d(t) && t.message_id && (u.message_id = t.message_id), d(window.SensorsData_APP_New_H5_Bridge) && A(SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app) ? SensorsData_APP_New_H5_Bridge.sensorsdata_js_call_app(JSON.stringify(u)) : d(window.SensorsData_APP_JS_Bridge) && A(SensorsData_APP_JS_Bridge.sensorsdata_js_call_app) && SensorsData_APP_JS_Bridge.sensorsdata_js_call_app(JSON.stringify(u))
                        }
                        return r
                    }
                })
            }
        },
        On = {
            events: [],
            customProp: Cn,
            getAssignConfigs: R.getAssignConfigs,
            initUrl: R.initUrl,
            init: function() {
                if (this.initUrl()) {
                    var e = this.getConfigFromApp();
                    e && this.updateConfigs(e), this.customProp.init(), this.initAppUpdateConfigBridge()
                }
            },
            initAppUpdateConfigBridge: function() {
                var e = this;
                return new n.JSBridge({
                    type: "updateH5VisualConfig",
                    app_call_js: function(t) {
                        if (t) {
                            try {
                                t = JSON.parse(He(t))
                            } catch (r) {
                                return void n.log("updateH5VisualConfig result parse error\uFF01")
                            }
                            e.updateConfigs(t)
                        }
                    }
                })
            },
            getConfigFromApp: function() {
                var e = new n.JSBridge({
                        type: "sensorsdata_get_app_visual_config"
                    }),
                    t = e.getAppData();
                if (t) try {
                    t = JSON.parse(He(t))
                } catch (r) {
                    t = null, n.log("getAppVisualConfig result parse error\uFF01")
                }
                return t
            },
            updateConfigs: function(e) {
                this.events = this.filterConfigs(e), this.customProp.updateEvents(this.events)
            },
            filterConfigs: function(e) {
                return this.getAssignConfigs(function(t) {
                    return !(!d(t) || t.h5 === !1)
                }, e)
            }
        },
        Bt = new ce,
        Rt = {};
    Rt.spa = Bt, Rt.initSystemEvent = function() {
        Xi(function(e) {
            Bt.emit("switch", e)
        })
    };
    var ze = {
            getOriginalUrl: function() {
                function e(c) {
                    var l = c.split("&"),
                        p = ["sa-request-id", "sa-request-type", "sa-request-url"],
                        _ = [];
                    return C(l, function(D) {
                        p.indexOf(D.split("=")[0]) < 0 && _.push(D)
                    }), _.join("&")
                }
                var t = location.protocol + "//" + location.host + location.pathname,
                    r = "",
                    i = "";
                if (location.search) {
                    var a = e(location.search.slice(1));
                    a && (r = "?" + a)
                }
                if (location.hash && (i = location.hash, location.hash.indexOf("?") > -1)) {
                    var s = location.hash.split("?"),
                        u = e(s[1]);
                    u && (i = s[0] + "?" + u)
                }
                return decodeURI(t + r + i)
            },
            isSeachHasKeyword: function() {
                return Le("sa-request-id") !== null && (typeof sessionStorage.getItem("sensors-visual-mode") == "string" && sessionStorage.removeItem("sensors-visual-mode"), !0)
            },
            hasKeywordHandle: function() {
                var e = Le("sa-request-id"),
                    t = Le("sa-request-type"),
                    r = Le("sa-request-url");
                pe.setNotice(r), ve.isSupport() && (r !== null && sessionStorage.setItem("sensors_heatmap_url", r), sessionStorage.setItem("sensors_heatmap_id", e), t !== null ? t === "1" || t === "2" || t === "3" ? sessionStorage.setItem("sensors_heatmap_type", t) : t = null : t = sessionStorage.getItem("sensors_heatmap_type") !== null ? sessionStorage.getItem("sensors_heatmap_type") : null), this.isReady(e, t, this.getOriginalUrl())
            },
            isReady: function(e, t, r) {
                n.para.heatmap_url ? et({
                    success: function() {
                        setTimeout(function() {
                            typeof sa_jssdk_heatmap_render != "undefined" && (sa_jssdk_heatmap_render(n, e, t, r), typeof console == "object" && typeof console.log == "function" && (n.heatmap_version && n.heatmap_version === n.lib_version || console.log("heatmap.js\u4E0Esensorsdata.js\u7248\u672C\u53F7\u4E0D\u4E00\u81F4\uFF0C\u53EF\u80FD\u5B58\u5728\u98CE\u9669!")))
                        }, 0)
                    },
                    error: function() {},
                    type: "js",
                    url: n.para.heatmap_url
                }) : n.log("\u6CA1\u6709\u6307\u5B9Aheatmap_url\u7684\u8DEF\u5F84")
            },
            isStorageHasKeyword: function() {
                return ve.isSupport() && typeof sessionStorage.getItem("sensors_heatmap_id") == "string"
            },
            storageHasKeywordHandle: function() {
                pe.setNotice(), ze.isReady(sessionStorage.getItem("sensors_heatmap_id"), sessionStorage.getItem("sensors_heatmap_type"), this.getOriginalUrl())
            }
        },
        oe = {
            isStorageHasKeyword: function() {
                return ve.isSupport() && typeof sessionStorage.getItem("sensors-visual-mode") == "string"
            },
            isSearchHasKeyword: function() {
                return (Le("sa-visual-mode") === !0 || Le("sa-visual-mode") === "true") && (typeof sessionStorage.getItem("sensors_heatmap_id") == "string" && sessionStorage.removeItem("sensors_heatmap_id"), !0)
            },
            loadVtrack: function() {
                et({
                    success: function() {},
                    error: function() {},
                    type: "js",
                    url: n.para.vtrack_url ? n.para.vtrack_url : location.protocol + "//static.sensorsdata.cn/sdk/" + n.lib_version + "/vtrack.min.js"
                })
            },
            messageListener: function(e) {
                function t(i) {
                    return sr(i) ? dr(i) : (n.log("\u53EF\u89C6\u5316\u6A21\u5F0F\u68C0\u6D4B URL \u5931\u8D25"), !1)
                }
                if (e.data.source !== "sa-fe") return !1;
                if (e.data.type === "v-track-mode") {
                    if (e.data.data && e.data.data.isVtrack)
                        if (ve.isSupport() && sessionStorage.setItem("sensors-visual-mode", "true"), e.data.data.userURL && location.href.match(/sa-visual-mode=true/)) {
                            var r = t(e.data.data.userURL);
                            r && (window.location.href = r)
                        } else oe.loadVtrack();
                    window.removeEventListener("message", oe.messageListener, !1)
                }
            },
            removeMessageHandle: function() {
                window.removeEventListener && window.removeEventListener("message", oe.messageListener, !1)
            },
            verifyVtrackMode: function() {
                window.addEventListener && window.addEventListener("message", oe.messageListener, !1), oe.postMessage()
            },
            postMessage: function() {
                window.parent && window.parent.postMessage && window.parent.postMessage({
                    source: "sa-web-sdk",
                    type: "v-is-vtrack",
                    data: {
                        sdkversion: "1.22.7"
                    }
                }, "*")
            },
            notifyUser: function() {
                var e = function(t) {
                    return t.data.source === "sa-fe" && void(t.data.type === "v-track-mode" && (t.data.data && t.data.data.isVtrack && alert("\u5F53\u524D\u7248\u672C\u4E0D\u652F\u6301\uFF0C\u8BF7\u5347\u7EA7\u90E8\u7F72\u795E\u7B56\u6570\u636E\u6CBB\u7406"), window.removeEventListener("message", e, !1)))
                };
                window.addEventListener && window.addEventListener("message", e, !1), oe.postMessage()
            }
        },
        $n = ["setItem", "deleteItem", "getAppStatus", "track", "quick", "register", "registerPage", "registerOnce", "trackSignup", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "clearAllRegister", "clearPageRegister"],
        An = {
            track: function(e, t, r) {},
            quick: function(e, t, r, i) {},
            register: function(e) {},
            registerPage: function(e) {},
            registerOnce: function(e) {},
            clearAllRegister: function(e) {},
            trackSignup: function(e, t, r, i) {},
            setProfile: function(e, t) {},
            setOnceProfile: function(e, t) {},
            appendProfile: function(e, t) {},
            incrementProfile: function(e, t) {},
            deleteProfile: function(e) {},
            unsetProfile: function(e, t) {},
            identify: function(e, t) {},
            login: function(e, t) {},
            logout: function(e) {},
            trackLink: function(e, t, r) {},
            deleteItem: function(e, t) {},
            setItem: function(e, t, r) {},
            getAppStatus: function(e) {},
            clearPageRegister: function(e) {}
        };
    at.prototype.process = function(e, t) {
        if (!(e && e in this.processDef)) return void B("process [" + e + "] is not supported");
        var r = this.registeredInterceptors[e];
        if (r && T(r) && r.length > 0)
            for (var i = {
                    current: 0,
                    total: r.length
                }, a = new rn(t, i, n), s = 0; s < r.length; s++) try {
                if (i.current = s + 1, t = r[s].call(null, t, a) || t, a.cancelationToken.getCanceled()) {
                    B("process [" + e + "] has been canceled.");
                    break
                }
            } catch (u) {
                B("interceptor error:" + u)
            }
        return this.processDef[e] && this.processDef[e] in this.processDef && (t = this.process(this.processDef[e], t)), t
    }, at.prototype.registerStageImplementation = function(e) {
        e && e.init && A(e.init) && (e.init(this), e.interceptor && this.registerInterceptor(e.interceptor))
    }, at.prototype.registerInterceptor = function(e) {
        if (e)
            for (var t in e) {
                var r = e[t];
                if (r && d(r) && A(r.entry)) {
                    se(r.priority) || (r.priority = 1e7), this.registeredInterceptors[t] || (this.registeredInterceptors[t] = []);
                    var i = this.registeredInterceptors[t],
                        a = r.priority,
                        s = r.entry;
                    switch (!0) {
                        case a <= 0:
                            i.unshift(s);
                            break;
                        case a >= i.length:
                            i.push(s);
                            break;
                        default:
                            i.splice(a, 0, s)
                    }
                }
            }
    };
    var Tn = {
            addCustomProps: null,
            formatData: null
        },
        xn = new at(Tn),
        Ln = {
            init: function() {},
            interceptor: {
                formatData: {
                    priority: 0,
                    entry: function(e) {
                        return dn(e), e
                    }
                }
            }
        },
        Wr = window.sensors_data_pre_config,
        qr = !!d(Wr) && Wr.is_compliance_enabled;
    n.init = function(e) {
        return !(n.readyState && n.readyState.state && n.readyState.state >= 2) && (qr && At(!0), n.ee.initSystemEvent(), n.setInitVar(), n.readyState.setState(2), n.initPara(e), n.bridge.supportAppCallJs(), n.detectMode(), void n.iOSWebClickPolyfill())
    }, qr ? At(!1) : (At(!0), en());
    var Fr = n;
    try {
        n.modules = {}, n.modules.Amp = function() {
                "use strict";
                var e = {
                    sd: null,
                    init: function(t) {
                        if (this.sd || (this.sd = t, !this.sd || !this.sd._)) return !1;
                        var r = this.sd._.cookie.get("sensors_amp_id"),
                            i = this.sd.store._state.distinct_id;
                        if (r && r.length > 0) {
                            var a = r.slice(0, 4) === "amp-";
                            if (r !== i) {
                                if (!a) return !1;
                                this.sd.store._state.first_id ? (this.sd.identify(r, !0), this.sd.saEvent.send({
                                    original_id: r,
                                    distinct_id: i,
                                    type: "track_signup",
                                    event: "$SignUp",
                                    properties: {}
                                }, null), this.setAmpId(i)) : this.sd.identify(r, !0)
                            }
                        } else this.setAmpId(i);
                        this.addListener()
                    },
                    addListener: function() {
                        var t = this;
                        this.sd.events.on("changeDistinctId", function(r) {
                            t.setAmpId(r)
                        }), this.sd.events.isReady()
                    },
                    setAmpId: function(t) {
                        this.sd._.cookie.set("sensors_amp_id", t)
                    }
                };
                return window.SensorsDataWebJSSDKPlugin && Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) === "[object Object]" ? window.SensorsDataWebJSSDKPlugin.Amp = window.SensorsDataWebJSSDKPlugin.Amp || e : window.SensorsDataWebJSSDKPlugin = {
                    Amp: e
                }, e
            }(), n.modules.Channel = function() {
                "use strict";
                var e, t, r, i = {
                    event_list: [],
                    latest_event_initial_time: null,
                    max_save_time: 2592e6,
                    init: function(a) {
                        return !t && !!(t = a) && (e = t._, r = t.store, !!e.localStorage.isSupport() && (t.para.max_string_length = 1024, this.eventList.init(), this.addLatestChannelUrl(), void this.addIsChannelCallbackEvent()))
                    },
                    addIsChannelCallbackEvent: function() {
                        t.registerPage({
                            $is_channel_callback_event: function(a) {
                                if (a.event && a.event !== "$WebClick" && a.event !== "$pageview" && a.event !== "$WebStay" && a.event !== "$SignUp") return !i.eventList.hasEvent(a.event) && (i.eventList.add(a.event), !0)
                            }
                        })
                    },
                    addLatestChannelUrl: function() {
                        var a = this.getUrlDomain(),
                            s = this.cookie.getChannel();
                        if (a === "url\u89E3\u6790\u5931\u8D25") this.registerAndSave({
                            _sa_channel_landing_url: "",
                            _sa_channel_landing_url_error: "url\u7684domain\u89E3\u6790\u5931\u8D25"
                        });
                        else if (e.isReferralTraffic(document.referrer)) {
                            var u = e.getQueryParam(location.href, "sat_cf");
                            e.isString(u) && u.length > 0 ? (this.registerAndSave({
                                _sa_channel_landing_url: location.href
                            }), i.channelLinkHandler()) : this.registerAndSave({
                                _sa_channel_landing_url: ""
                            })
                        } else s ? t.registerPage(s) : t.registerPage({
                            _sa_channel_landing_url: "",
                            _sa_channel_landing_url_error: "\u53D6\u503C\u5F02\u5E38"
                        })
                    },
                    registerAndSave: function(a) {
                        t.registerPage(a), this.cookie.saveChannel(a)
                    },
                    cookie: {
                        getChannel: function() {
                            var a = e.decryptIfNeeded(e.cookie.get("sensorsdata2015jssdkchannel"));
                            return a = e.safeJSONParse(a), !(!e.isObject(a) || !a.prop) && a.prop
                        },
                        saveChannel: function(a) {
                            var s = {
                                    prop: a
                                },
                                u = JSON.stringify(s);
                            t.para.encrypt_cookie && (u = e.encrypt(u)), e.cookie.set("sensorsdata2015jssdkchannel", u)
                        }
                    },
                    channelLinkHandler: function() {
                        this.eventList.reset(), t.track("$ChannelLinkReaching")
                    },
                    getUrlDomain: function() {
                        var a = e.info.pageProp.url_domain;
                        return a === "" && (a = "url\u89E3\u6790\u5931\u8D25"), a
                    },
                    eventList: {
                        init: function() {
                            var a = this.get(),
                                s = new Date().getTime();
                            if (a && e.isNumber(a.latest_event_initial_time) && e.isArray(a.eventList)) {
                                var u = s - a.latest_event_initial_time;
                                u > 0 && u < i.max_save_time ? (i.event_list = a.eventList, i.latest_event_initial_time = a.latest_event_initial_time) : this.reset()
                            } else this.reset()
                        },
                        get: function() {
                            var a = {};
                            try {
                                a = r.readObjectVal("sawebjssdkchannel")
                            } catch (s) {
                                t.log(s)
                            }
                            return a
                        },
                        add: function(a) {
                            i.event_list.push(a), this.save()
                        },
                        save: function() {
                            var a = {
                                latest_event_initial_time: i.latest_event_initial_time,
                                eventList: i.event_list
                            };
                            r.saveObjectVal("sawebjssdkchannel", a)
                        },
                        reset: function() {
                            i.event_list = [], i.latest_event_initial_time = new Date().getTime(), this.save()
                        },
                        hasEvent: function(a) {
                            var s = !1;
                            return e.each(i.event_list, function(u) {
                                u === a && (s = !0)
                            }), s
                        }
                    }
                };
                return window.SensorsDataWebJSSDKPlugin && Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) === "[object Object]" ? window.SensorsDataWebJSSDKPlugin.SensorsChannel = window.SensorsDataWebJSSDKPlugin.SensorsChannel || i : window.SensorsDataWebJSSDKPlugin = {
                    SensorsChannel: i
                }, i
            }(), n.modules.Deeplink = function() {
                "use strict";

                function e() {
                    return typeof t != "undefined" && document[t]
                }
                var t, r = (/micromessenger\/([\d.]+)/i.test(navigator.userAgent || ""), function() {
                    var h = {};
                    return typeof document.hidden != "undefined" ? (h.hidden = "hidden", h.visibilityChange = "visibilitychange") : typeof document.msHidden != "undefined" ? (h.hidden = "msHidden", h.visibilityChange = "msvisibilitychange") : typeof document.webkitHidden != "undefined" && (h.hidden = "webkitHidden", h.visibilityChange = "webkitvisibilitychange"), h
                });
                t = r().hidden;
                var i = {
                        android: /Android/i,
                        iOS: /iPhone|iPad|iPod/i
                    },
                    a = function() {
                        for (var h in i)
                            if (navigator.userAgent.match(i[h])) return h;
                        return ""
                    },
                    s = a(),
                    u = function() {
                        return i.hasOwnProperty(s)
                    },
                    c = function(h) {
                        return h != null && Object.prototype.toString.call(h) == "[object Object]"
                    },
                    l = function(h) {
                        var I = /\/sd\/(\w+)\/(\w+)$/;
                        return h.match(I)
                    },
                    p = function(h) {
                        var I = h._.URL(h.para.server_url);
                        return {
                            origin: I.origin,
                            project: I.searchParams.get("project") || "default"
                        }
                    },
                    _ = function(h, I, E) {
                        h.log("\u5C1D\u8BD5\u5524\u8D77 android app");
                        var W = I;
                        h.log("\u5524\u8D77APP\u7684\u5730\u5740\uFF1A" + W), window.location = W, h.timer = setTimeout(function() {
                            var ye = e();
                            return h.log("hide:" + t + ":" + document[t]), ye ? (h.log("The page is hidden, stop navigating to download page"), !1) : (h.log("App\u53EF\u80FD\u672A\u5B89\u88C5\uFF0C\u8DF3\u8F6C\u5230\u4E0B\u8F7D\u5730\u5740"), void(window.location = E))
                        }, h.timeout)
                    },
                    D = function(h, I, E) {
                        h.log("\u5C1D\u8BD5\u5524\u8D77 iOS app:" + I), window.location.href = I, h.timer = setTimeout(function() {
                            var W = e();
                            return W ? (h.log("The page is hidden, stop navigating to download page"), !1) : (h.log("App\u53EF\u80FD\u672A\u5B89\u88C5\uFF0C\u8DF3\u8F6C\u5230\u4E0B\u8F7D\u5730\u5740"), void(window.location.href = E))
                        }, h.timeout), h.log("new timer:" + h.timer)
                    },
                    S = {
                        key: null,
                        timer: null,
                        sd: null,
                        data: null,
                        timeout: 2500,
                        apiURL: "{origin}/sdk/deeplink/param?key={key}&system_type=JS&project={project}",
                        init: function() {
                            if (this.sd) return this.log("deeplink\u5DF2\u7ECF\u521D\u59CB\u5316"), !1;
                            if (c(sensorsDataAnalytic201505) && (this.sd = sensorsDataAnalytic201505), this.log("init()"), this.sd === null) return this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165"), !1;
                            var h = {};
                            if (arguments.length > 0 && (arguments.length === 1 && c(arguments[0]) ? h = arguments[0] : arguments.length >= 2 && c(arguments[1]) && (h = arguments[1])), !u()) return this.log("\u4E0D\u652F\u6301\u5F53\u524D\u7CFB\u7EDF\uFF0C\u76EE\u524D\u53EA\u652F\u6301Android\u548CiOS"), !1;
                            if (c(h) && this.sd._.isNumber(h.timeout) && h.timeout >= 2500 && (this.timeout = h.timeout), !this.sd.para.server_url) return this.log("\u795E\u7B56JS SDK\u914D\u7F6E\u9879server_url\u672A\u6B63\u786E\u914D\u7F6E"), !1;
                            var I = p(this.sd);
                            this.apiURL = this.apiURL.replace("{origin}", I.origin).replace("{project}", I.project);
                            var E = this.sd._.getQueryParam(window.location.href, "deeplink");
                            if (!E) return this.log("\u5F53\u524D\u9875\u9762\u7F3A\u5C11deeplink\u53C2\u6570"), !1;
                            E = window.decodeURIComponent(E);
                            var W = l(E);
                            return W ? (this.key = W[2], this.apiURL = this.apiURL.replace("{key}", window.encodeURIComponent(W[2])), this.sd._.ajax({
                                url: this.apiURL,
                                type: "GET",
                                cors: !0,
                                credentials: !1,
                                success: function(ye) {
                                    return ye.errorMsg ? (S.log("API\u62A5\u9519\uFF1A" + ye.errorMsg), !1) : (S.data = ye, S.log("API\u67E5\u8BE2\u6210\u529F\uFF0C\u6570\u636E\uFF1A" + JSON.stringify(ye, null, "  ")), void(this.data.app_key && (this.data.android_info && this.data.android_info.url_schemes && (this.data.android_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key), this.data.ios_info && this.data.ios_info.url_schemes && (this.data.ios_info.url_schemes += "://sensorsdata/sd/" + this.data.app_key + "/" + this.key))))
                                }.bind(this),
                                error: function() {
                                    S.log("API\u67E5\u8BE2\u51FA\u9519")
                                }
                            }), void this.addListeners()) : (this.log("\u5F53\u524D\u9875\u9762\u7684deeplink\u53C2\u6570\u65E0\u6548"), !1)
                        },
                        openDeepLink: function() {
                            if (this.log("openDeeplink()"), !this.data) return this.log("\u6CA1\u6709Deep link\u6570\u636E!"), !1;
                            if (s === "iOS") {
                                this.log("\u5F53\u524D\u7CFB\u7EDF\u662FiOS");
                                var h = this.sd && this.sd._ && this.sd._.getIOSVersion() >= 9 && this.data.ios_info.ios_wake_url ? this.data.ios_info.ios_wake_url : this.data.ios_info.url_schemes;
                                this.log("\u5524\u8D77APP\u7684\u5730\u5740\uFF1A" + h), D(this, h, this.data.ios_info.download_url)
                            } else this.log("\u5F53\u524D\u7CFB\u7EDF\u662F android"), _(this, this.data.android_info.url_schemes, this.data.android_info.download_url)
                        },
                        log: function(h) {
                            this.sd && this.sd.log(h)
                        },
                        addListeners: function() {
                            var h = r().visibilityChange;
                            h && document.addEventListener(h, function() {
                                clearTimeout(this.timer), this.log("visibilitychange, clear timeout:" + this.timer)
                            }.bind(this), !1), window.addEventListener("pagehide", function() {
                                this.log("page hide, clear timeout:" + this.timer), clearTimeout(this.timer)
                            }.bind(this), !1)
                        }
                    };
                return c(window.SensorsDataWebJSSDKPlugin) ? (window.SensorsDataWebJSSDKPlugin.Deeplink = window.SensorsDataWebJSSDKPlugin.Deeplink || S, window.SensorsDataWebJSSDKPlugin.deeplink = window.SensorsDataWebJSSDKPlugin.deeplink || S) : window.SensorsDataWebJSSDKPlugin = {
                    Deeplink: S,
                    deeplink: S
                }, S
            }(), n.modules.Pageleave = function() {
                "use strict";

                function e() {
                    this.sd = null, this.start_time = +new Date, this.page_show_status = !0, this.page_hidden_status = !1, this._ = {}, this.timer = null, this.current_page_url = document.referrer, this.url = location.href, this.option = {}, this.heartbeat_interval_time = 5e3, this.heartbeat_interval_timer = null, this.page_id = null, this.storage_name = "sawebjssdkpageleave"
                }
                var t = 5e3;
                e.prototype.init = function(i, a) {
                    if (i) {
                        this.sd = i, this._ = this.sd._;
                        var s = this;
                        if (a) {
                            this.option = a;
                            var u = a.heartbeat_interval_time;
                            u && (this._.isNumber(u) || this._.isNumber(1 * u)) && 1 * u > 0 && (this.heartbeat_interval_time = 1e3 * u)
                        }
                        this.page_id = Number(String(this._.getRandom()).slice(2, 5) + String(this._.getRandom()).slice(2, 4) + String(new Date().getTime()).slice(-4)), s.addEventListener(), document.hidden === !0 ? this.page_show_status = !1 : s.addHeartBeatInterval(), this.log("PageLeave\u521D\u59CB\u5316\u5B8C\u6BD5")
                    } else this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165")
                }, e.prototype.log = function(i) {
                    this.sd && this.sd.log(i)
                }, e.prototype.refreshPageEndTimer = function() {
                    var i = this;
                    this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(function() {
                        i.page_hidden_status = !1
                    }, t)
                }, e.prototype.hiddenStatusHandler = function() {
                    clearTimeout(this.timer), this.timer = null, this.page_hidden_status = !1
                }, e.prototype.pageStartHandler = function() {
                    this.start_time = +new Date, document.hidden ? this.page_show_status = !1 : this.page_show_status = !0, this.url = location.href
                }, e.prototype.pageEndHandler = function() {
                    if (this.page_hidden_status !== !0) {
                        var i = this.getPageLeaveProperties();
                        this.page_show_status === !1 && delete i.event_duration, this.page_show_status = !1, this.page_hidden_status = !0, this.isCollectUrl(this.url) && this.sd.track("$WebPageLeave", i), this.refreshPageEndTimer(), this.delHeartBeatData()
                    }
                }, e.prototype.addEventListener = function() {
                    this.addPageStartListener(), this.addPageSwitchListener(), this.addSinglePageListener(), this.addPageEndListener()
                }, e.prototype.addPageStartListener = function() {
                    var i = this;
                    "onpageshow" in window && this._.addEvent(window, "pageshow", function() {
                        i.pageStartHandler(), i.hiddenStatusHandler()
                    })
                }, e.prototype.isCollectUrl = function(i) {
                    return typeof this.option.isCollectUrl != "function" || typeof i != "string" || i === "" || this.option.isCollectUrl(i)
                }, e.prototype.addSinglePageListener = function() {
                    var i = this;
                    this.sd.ee && this.sd.ee.spa.prepend("switch", function(a) {
                        a !== location.href && (i.url = a, i.pageEndHandler(), i.stopHeartBeatInterval(), i.current_page_url = i.url, i.pageStartHandler(), i.hiddenStatusHandler(), i.startHeartBeatInterval())
                    })
                }, e.prototype.addPageEndListener = function() {
                    var i = this;
                    this._.each(["pagehide", "beforeunload", "unload"], function(a) {
                        "on" + a in window && i._.addEvent(window, a, function() {
                            i.pageEndHandler(), i.stopHeartBeatInterval()
                        })
                    })
                }, e.prototype.addPageSwitchListener = function() {
                    var i = this;
                    this._.listenPageState({
                        visible: function() {
                            i.pageStartHandler(), i.hiddenStatusHandler(), i.startHeartBeatInterval()
                        },
                        hidden: function() {
                            i.url = location.href, i.pageEndHandler(), i.stopHeartBeatInterval()
                        }
                    })
                }, e.prototype.addHeartBeatInterval = function() {
                    this._.localStorage.isSupport() && this.startHeartBeatInterval()
                }, e.prototype.startHeartBeatInterval = function() {
                    var i = this;
                    this.heartbeat_interval_timer && this.stopHeartBeatInterval();
                    var a = !0;
                    this.isCollectUrl(this.url) || (a = !1), this.heartbeat_interval_timer = setInterval(function() {
                        a && i.saveHeartBeatData()
                    }, this.heartbeat_interval_time), a && this.saveHeartBeatData("is_first_heartbeat"), this.reissueHeartBeatData()
                }, e.prototype.stopHeartBeatInterval = function() {
                    clearInterval(this.heartbeat_interval_timer), this.heartbeat_interval_timer = null
                }, e.prototype.saveHeartBeatData = function(i) {
                    var a = this.getPageLeaveProperties(),
                        s = new Date;
                    a.$time = s, i === "is_first_heartbeat" && (a.event_duration = 3.14);
                    var u = this.sd.kit.buildData({
                        type: "track",
                        event: "$WebPageLeave",
                        properties: a
                    });
                    try {
                        this.sd.bridge.bridge_info.verify_success === "success" && (u.properties.$time = 1 * s)
                    } catch (c) {
                        this.log(c.message)
                    }
                    u.heartbeat_interval_time = this.heartbeat_interval_time, this.sd.store.saveObjectVal(this.storage_name + "-" + this.page_id, u)
                }, e.prototype.delHeartBeatData = function(i) {
                    this._.localStorage.remove(i || this.storage_name + "-" + this.page_id)
                }, e.prototype.reissueHeartBeatData = function() {
                    for (var i = window.localStorage.length, a = i - 1; a >= 0; a--) {
                        var s = window.localStorage.key(a);
                        if (s && s !== this.storage_name + "-" + this.page_id && s.indexOf(this.storage_name + "-") === 0) {
                            var u = this.sd.store.readObjectVal(s);
                            this._.isObject(u) && 1 * new Date - u.time > u.heartbeat_interval_time + 5e3 && (delete u.heartbeat_interval_time, this.sd.kit.sendData(u), this.delHeartBeatData(s))
                        }
                    }
                }, e.prototype.getPageLeaveProperties = function() {
                    var i = (+new Date - this.start_time) / 1e3;
                    (isNaN(i) || i < 0) && (i = 0), i = Number(i.toFixed(3));
                    var a = this._.getReferrer(this.current_page_url),
                        s = document.documentElement && document.documentElement.scrollTop || window.pageYOffset || document.body && document.body.scrollTop || 0;
                    s = Math.round(s) || 0;
                    var u = {
                        $title: document.title,
                        $url: this._.getURL(this.url),
                        $url_path: this._.getURLPath(),
                        $referrer_host: a ? this._.getHostname(a) : "",
                        $referrer: a,
                        $viewport_position: s
                    };
                    return i !== 0 && (u.event_duration = i), u = this._.extend(u, this.option.custom_props)
                };
                var r = new e;
                return window.SensorsDataWebJSSDKPlugin && Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) === "[object Object]" ? window.SensorsDataWebJSSDKPlugin.PageLeave = window.SensorsDataWebJSSDKPlugin.PageLeave || r : window.SensorsDataWebJSSDKPlugin = {
                    PageLeave: r
                }, r
            }(), n.modules.Pageload = function() {
                "use strict";
                var e = {
                    init: function(t) {
                        function r(a, s) {
                            if (a.getEntries && typeof a.getEntries == "function") {
                                for (var u = a.getEntries(), c = null, l = 0; l < u.length; l++) "transferSize" in u[l] && (c += u[l].transferSize);
                                t._.isNumber(c) && c >= 0 && c < 10737418240 && (s.$page_resource_size = Number((c / 1024).toFixed(3)))
                            }
                        }

                        function i() {
                            var a = window.performance || window.webkitPerformance || window.msPerformance || window.mozPerformance,
                                s = 0,
                                u = {
                                    $url: t._.getURL(),
                                    $title: document.title,
                                    $url_path: t._.getURLPath(),
                                    $referrer: t._.getReferrer(null, !0)
                                };
                            if (a && a.timing) {
                                var c = a.timing;
                                c.fetchStart === 0 || c.domContentLoadedEventEnd === 0 ? t.log("performance \u6570\u636E\u83B7\u53D6\u5F02\u5E38") : s = c.domContentLoadedEventEnd - c.fetchStart, r(a, u)
                            } else t.log("\u6D4F\u89C8\u5668\u672A\u652F\u6301 performance API.");
                            s > 0 && (u.event_duration = Number((s / 1e3).toFixed(3))), t.track("$WebPageLoad", u), window.removeEventListener ? window.removeEventListener("load", i) : window.detachEvent && window.detachEvent("onload", i)
                        }
                        document.readyState == "complete" ? i() : window.addEventListener ? window.addEventListener("load", i) : window.attachEvent && window.attachEvent("onload", i)
                    }
                };
                return window.SensorsDataWebJSSDKPlugin && Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) === "[object Object]" ? window.SensorsDataWebJSSDKPlugin.PageLoad = window.SensorsDataWebJSSDKPlugin.PageLoad || e : window.SensorsDataWebJSSDKPlugin = {
                    PageLoad: e
                }, e
            }(), n.modules.RegisterProperties = function() {
                "use strict";

                function e(s, u) {
                    if (s.type !== "track") return s;
                    var c = u.sd,
                        l = c._,
                        p = c.saEvent.check,
                        _ = l.extend2Lev({
                            properties: {}
                        }, s),
                        D = u.currentProps,
                        S = _.properties,
                        h = _.event,
                        I = {};
                    return l.each(D, function(E) {
                        if (l.isObject(E)) E.events.indexOf(h) > -1 && p({
                            properties: E.properties
                        }) && (I = l.extend(I, E.properties));
                        else if (l.isFunction(E)) {
                            var W = E({
                                event: h,
                                properties: S,
                                data: _
                            });
                            l.isObject(W) && !l.isEmptyObject(W) && p({
                                properties: W
                            }) && (I = l.extend(I, W))
                        }
                    }), s.properties = l.extend(S, I), s
                }

                function t(s) {
                    var u = this;
                    this.sd = s.sd, this.currentProps = s.customRegister, this.interceptor = {
                        addCustomProps: {
                            priority: 0,
                            entry: function(c) {
                                return e(c, u), c
                            }
                        }
                    }
                }

                function r(s) {
                    this.dataStage = new t(s)
                }

                function i() {
                    this.sd = null, this.log = window.console && window.console.log || function() {}, this.customRegister = []
                }
                t.prototype.init = function() {}, i.prototype.init = function(s) {
                    s ? (this.sd = s, this._ = s._, this.log = s.log, s.registerFeature(new r(this))) : this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165")
                }, i.prototype.register = function(s) {
                    return this.sd ? void(this._.isObject(s) && this._.isArray(s.events) && s.events.length > 0 && this._.isObject(s.properties) && !this._.isEmptyObject(s.properties) ? this.customRegister.push(s) : this.log("RegisterProperties: register \u53C2\u6570\u9519\u8BEF")) : void this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165")
                }, i.prototype.hookRegister = function(s) {
                    return this.sd ? void(this._.isFunction(s) ? this.customRegister.push(s) : this.log("RegisterProperties: hookRegister \u53C2\u6570\u9519\u8BEF")) : void this.log("\u795E\u7B56JS SDK\u672A\u6210\u529F\u5F15\u5165")
                };
                var a = new i;
                return a.__constructor__ = i, window.SensorsDataWebJSSDKPlugin && Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) === "[object Object]" ? window.SensorsDataWebJSSDKPlugin.RegisterProperties = window.SensorsDataWebJSSDKPlugin.RegisterProperties || a : window.SensorsDataWebJSSDKPlugin = {
                    RegisterProperties: a
                }, a
            }(), n.modules.RegisterPropertyPageHeight = function() {
                "use strict";

                function e(s) {
                    try {
                        if (s.event !== "$pageview" && (!s.type || s.type.slice(0, 7) !== "profile")) {
                            var u = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight || 0,
                                c = document.documentElement.scrollHeight || 0,
                                l = {
                                    $page_height: Math.max(u, c) || 0
                                };
                            s.properties = t._.extend(s.properties || {}, l)
                        }
                    } catch (p) {
                        i("\u9875\u9762\u9AD8\u5EA6\u83B7\u53D6\u5F02\u5E38\u3002")
                    }
                    return r.call(t.kit, s)
                }
                var t, r, i = window.console && window.console.log || function() {},
                    a = {
                        init: function(s) {
                            return t = s, i = t && t.log || i, s && s.kit && s.kit.buildData ? (r = t.kit.buildData, t.kit.buildData = e, void i("RegisterPropertyPageHeight \u63D2\u4EF6\u521D\u59CB\u5316\u5B8C\u6210")) : void i("RegisterPropertyPageHeight \u63D2\u4EF6\u521D\u59CB\u5316\u5931\u8D25,\u5F53\u524D\u4E3Bsdk\u4E0D\u652F\u6301 RegisterPropertyPageHeight \u63D2\u4EF6\uFF0C\u8BF7\u5347\u7EA7\u4E3Bsdk")
                        }
                    };
                return window.SensorsDataWebJSSDKPlugin && Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) === "[object Object]" ? window.SensorsDataWebJSSDKPlugin.RegisterPropertyPageHeight = window.SensorsDataWebJSSDKPlugin.RegisterPropertyPageHeight || a : window.SensorsDataWebJSSDKPlugin = {
                    RegisterPropertyPageHeight: a
                }, a
            }(),
            function() {
                "use strict";
                var e = {};
                e.getPart = function(t) {
                    var r = !1,
                        i = this.option.length;
                    if (i) {
                        for (var a = 0; a < i; a++)
                            if (t.indexOf(this.option[a].part_url) > -1) return !0
                    }
                    return r
                }, e.getPartHash = function(t) {
                    var r = this.option.length,
                        i = !1;
                    if (r) {
                        for (var a = 0; a < r; a++)
                            if (t.indexOf(this.option[a].part_url) > -1) return this.option[a].after_hash
                    }
                    return !!i
                }, e.getCurrenId = function() {
                    var t = this.store.getDistinctId() || "",
                        r = this.store.getFirstId() || "";
                    this._.urlSafeBase64 && this._.urlSafeBase64.encode ? t = t ? this._.urlSafeBase64.trim(this._.urlSafeBase64.encode(this._.base64Encode(t))) : "" : this._.rot13obfs && (t = t ? this._.rot13obfs(t) : "");
                    var i = r ? "f" + t : "d" + t;
                    return encodeURIComponent(i)
                }, e.rewriteUrl = function(t, r) {
                    var i = /([^?#]+)(\?[^#]*)?(#.*)?/,
                        a = i.exec(t),
                        s = "";
                    if (a) {
                        var u, c = a[1] || "",
                            l = a[2] || "",
                            p = a[3] || "";
                        if (this.getPartHash(t)) {
                            u = p.indexOf("_sasdk");
                            var _ = p.indexOf("?");
                            s = _ > -1 ? u > -1 ? c + l + "#" + p.substring(1, u) + "_sasdk=" + this.getCurrenId() : c + l + "#" + p.substring(1) + "&_sasdk=" + this.getCurrenId() : c + l + "#" + p.substring(1) + "?_sasdk=" + this.getCurrenId()
                        } else {
                            u = l.indexOf("_sasdk");
                            var D = /^\?(\w)+/.test(l);
                            s = D ? u > -1 ? c + "?" + l.substring(1, u) + "_sasdk=" + this.getCurrenId() + p : c + "?" + l.substring(1) + "&_sasdk=" + this.getCurrenId() + p : c + "?" + l.substring(1) + "_sasdk=" + this.getCurrenId() + p
                        }
                        return r && (r.href = s), s
                    }
                }, e.getUrlId = function() {
                    var t = location.href.match(/_sasdk=([aufd][^\?\#\&\=]+)/);
                    if (this._.isArray(t) && t[1]) {
                        var r = decodeURIComponent(t[1]);
                        return !r || r.substring(0, 1) !== "f" && r.substring(0, 1) !== "d" || (this._.urlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64 && this._.urlSafeBase64.isUrlSafeBase64(r) ? r = r.substring(0, 1) + this._.base64Decode(this._.urlSafeBase64.decode(r.substring(1))) : this._.rot13defs && (r = r.substring(0, 1) + this._.rot13defs(r.substring(1)))), r
                    }
                    return ""
                }, e.setRefferId = function() {
                    var t = this.store.getDistinctId(),
                        r = this.getUrlId();
                    if (r === "") return !1;
                    var i = r.substring(0, 1) === "a" || r.substring(0, 1) === "d";
                    return r = r.substring(1), r !== t && (r && i && this.store.getFirstId() && (this.sd.identify(r, !0), this.sd.saEvent.send({
                        original_id: r,
                        distinct_id: t,
                        type: "track_signup",
                        event: "$SignUp",
                        properties: {}
                    }, null)), r && i && !this.store.getFirstId() && this.sd.identify(r, !0), void(!r || i || this.store.getFirstId() || this.sd.login(r)))
                }, e.addListen = function() {
                    var t = this,
                        r = function(i) {
                            var a, s, u = i.target,
                                c = u.tagName.toLowerCase(),
                                l = u.parentNode;
                            if (c === "a" && u.href || l && l.tagName && l.tagName.toLowerCase() === "a" && l.href) {
                                c === "a" && u.href ? (a = u.href, s = u) : (a = l.href, s = l);
                                var p = t._.URL(a),
                                    _ = p.protocol;
                                _ !== "http:" && _ !== "https:" || t.getPart(a) && t.rewriteUrl(a, s)
                            }
                        };
                    t._.addEvent(document, "mousedown", r), window.PointerEvent && "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints >= 0 && t._.addEvent(document, "pointerdown", r)
                }, e.init = function(t, r) {
                    function i(a) {
                        for (var s = a.length, u = [], c = 0; c < s; c++) /[A-Za-z0-9]+\./.test(a[c].part_url) && Object.prototype.toString.call(a[c].after_hash) == "[object Boolean]" ? u.push(a[c]) : t.log("linker \u914D\u7F6E\u7684\u7B2C " + (c + 1) + " \u9879\u683C\u5F0F\u4E0D\u6B63\u786E\uFF0C\u8BF7\u68C0\u67E5\u53C2\u6570\u683C\u5F0F\uFF01");
                        return u
                    }
                    return this.sd = t, this._ = t._, this.store = t.store, this.para = t.para, this._.isObject(r) && this._.isArray(r.linker) && r.linker.length > 0 ? (this.setRefferId(), this.addListen(), this.option = r.linker, void(this.option = i(this.option))) : void t.log("\u8BF7\u914D\u7F6E\u6253\u901A\u57DF\u540D\u53C2\u6570\uFF01")
                }, window.SensorsDataWebJSSDKPlugin && Object.prototype.toString.call(window.SensorsDataWebJSSDKPlugin) === "[object Object]" ? window.SensorsDataWebJSSDKPlugin.SiteLinker = window.SensorsDataWebJSSDKPlugin.SiteLinker || e : window.SensorsDataWebJSSDKPlugin = {
                    SiteLinker: e
                }
            }(), typeof window.sensorsDataAnalytic201505 == "string" ? (n.para = window[sensorsDataAnalytic201505].para, n._q = window[sensorsDataAnalytic201505]._q, window[sensorsDataAnalytic201505] = n, window.sensorsDataAnalytic201505 = n, n.init()) : typeof window.sensorsDataAnalytic201505 == "undefined" ? window.sensorsDataAnalytic201505 = n : Fr = window.sensorsDataAnalytic201505
    } catch (e) {
        if (typeof console == "object" && console.log) try {
            console.log(e)
        } catch (t) {
            n.log(t)
        }
    }
    var In = Fr;
    return In
});