(function(oe) {
    if (typeof exports == "object" && typeof module != "undefined") module.exports = oe();
    else if (typeof define == "function" && define.amd) define([], oe);
    else {
        var w;
        w = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this, w.PIXI = oe()
    }
})(function() {
    var oe;
    return function() {
        function w(j, v, b) {
            function O(f, c) {
                if (!v[f]) {
                    if (!j[f]) {
                        var s = typeof require == "function" && require;
                        if (!c && s) return s(f, !0);
                        if (g) return g(f, !0);
                        var i = new Error("Cannot find module '" + f + "'");
                        throw i.code = "MODULE_NOT_FOUND", i
                    }
                    var n = v[f] = {
                        exports: {}
                    };
                    j[f][0].call(n.exports, function(e) {
                        var t = j[f][1][e];
                        return O(t || e)
                    }, n, n.exports, w, j, v, b)
                }
                return v[f].exports
            }
            for (var g = typeof require == "function" && require, u = 0; u < b.length; u++) O(b[u]);
            return O
        }
        return w
    }()({
        1: [function(w, j, v) {
            "use strict";

            function b(u) {
                var f = 32;
                return u &= -u, u && f--, 65535 & u && (f -= 16), 16711935 & u && (f -= 8), 252645135 & u && (f -= 4), 858993459 & u && (f -= 2), 1431655765 & u && (f -= 1), f
            }
            var O = 32;
            v.INT_BITS = O, v.INT_MAX = 2147483647, v.INT_MIN = -1 << O - 1, v.sign = function(u) {
                return (u > 0) - (u < 0)
            }, v.abs = function(u) {
                var f = u >> O - 1;
                return (u ^ f) - f
            }, v.min = function(u, f) {
                return f ^ (u ^ f) & -(u < f)
            }, v.max = function(u, f) {
                return u ^ (u ^ f) & -(u < f)
            }, v.isPow2 = function(u) {
                return !(u & u - 1 || !u)
            }, v.log2 = function(u) {
                var f, c;
                return f = (u > 65535) << 4, u >>>= f, c = (u > 255) << 3, u >>>= c, f |= c, c = (u > 15) << 2, u >>>= c, f |= c, c = (u > 3) << 1, u >>>= c, f |= c, f | u >> 1
            }, v.log10 = function(u) {
                return u >= 1e9 ? 9 : u >= 1e8 ? 8 : u >= 1e7 ? 7 : u >= 1e6 ? 6 : u >= 1e5 ? 5 : u >= 1e4 ? 4 : u >= 1e3 ? 3 : u >= 100 ? 2 : u >= 10 ? 1 : 0
            }, v.popCount = function(u) {
                return u -= u >>> 1 & 1431655765, u = (858993459 & u) + (u >>> 2 & 858993459), 16843009 * (u + (u >>> 4) & 252645135) >>> 24
            }, v.countTrailingZeros = b, v.nextPow2 = function(u) {
                return u += u === 0, --u, u |= u >>> 1, u |= u >>> 2, u |= u >>> 4, u |= u >>> 8, u |= u >>> 16, u + 1
            }, v.prevPow2 = function(u) {
                return u |= u >>> 1, u |= u >>> 2, u |= u >>> 4, u |= u >>> 8, u |= u >>> 16, u - (u >>> 1)
            }, v.parity = function(u) {
                return u ^= u >>> 16, u ^= u >>> 8, u ^= u >>> 4, u &= 15, 27030 >>> u & 1
            };
            var g = new Array(256);
            (function(u) {
                for (var f = 0; f < 256; ++f) {
                    var c = f,
                        s = f,
                        i = 7;
                    for (c >>>= 1; c; c >>>= 1) s <<= 1, s |= 1 & c, --i;
                    u[f] = s << i & 255
                }
            })(g), v.reverse = function(u) {
                return g[255 & u] << 24 | g[u >>> 8 & 255] << 16 | g[u >>> 16 & 255] << 8 | g[u >>> 24 & 255]
            }, v.interleave2 = function(u, f) {
                return u &= 65535, u = 16711935 & (u | u << 8), u = 252645135 & (u | u << 4), u = 858993459 & (u | u << 2), u = 1431655765 & (u | u << 1), f &= 65535, f = 16711935 & (f | f << 8), f = 252645135 & (f | f << 4), f = 858993459 & (f | f << 2), f = 1431655765 & (f | f << 1), u | f << 1
            }, v.deinterleave2 = function(u, f) {
                return u = u >>> f & 1431655765, u = 858993459 & (u | u >>> 1), u = 252645135 & (u | u >>> 2), u = 16711935 & (u | u >>> 4), u = 65535 & (u | u >>> 16), u << 16 >> 16
            }, v.interleave3 = function(u, f, c) {
                return u &= 1023, u = 4278190335 & (u | u << 16), u = 251719695 & (u | u << 8), u = 3272356035 & (u | u << 4), u = 1227133513 & (u | u << 2), f &= 1023, f = 4278190335 & (f | f << 16), f = 251719695 & (f | f << 8), f = 3272356035 & (f | f << 4), f = 1227133513 & (f | f << 2), u |= f << 1, c &= 1023, c = 4278190335 & (c | c << 16), c = 251719695 & (c | c << 8), c = 3272356035 & (c | c << 4), c = 1227133513 & (c | c << 2), u | c << 2
            }, v.deinterleave3 = function(u, f) {
                return u = u >>> f & 1227133513, u = 3272356035 & (u | u >>> 2), u = 251719695 & (u | u >>> 4), u = 4278190335 & (u | u >>> 8), u = 1023 & (u | u >>> 16), u << 22 >> 22
            }, v.nextCombination = function(u) {
                var f = u | u - 1;
                return f + 1 | (~f & -~f) - 1 >>> b(u) + 1
            }
        }, {}],
        2: [function(w, j, v) {
            "use strict";

            function b(P, D, C) {
                C = C || 2;
                var R = D && D.length,
                    F = R ? D[0] * C : P.length,
                    B = O(P, 0, F, C, !0),
                    L = [];
                if (!B) return L;
                var k, U, H, X, W, V, G;
                if (R && (B = n(P, D, B, C)), P.length > 80 * C) {
                    k = H = P[0], U = X = P[1];
                    for (var Y = C; Y < F; Y += C) W = P[Y], V = P[Y + 1], W < k && (k = W), V < U && (U = V), W > H && (H = W), V > X && (X = V);
                    G = Math.max(H - k, X - U), G = G !== 0 ? 1 / G : 0
                }
                return u(B, L, C, k, U, G), L
            }

            function O(P, D, C, R, F) {
                var B, L;
                if (F === N(P, D, C, R) > 0)
                    for (B = D; B < C; B += R) L = M(B, P[B], P[B + 1], L);
                else
                    for (B = C - R; B >= D; B -= R) L = M(B, P[B], P[B + 1], L);
                return L && x(L, L.next) && (A(L), L = L.next), L
            }

            function g(P, D) {
                if (!P) return P;
                D || (D = P);
                var C, R = P;
                do
                    if (C = !1, R.steiner || !x(R, R.next) && y(R.prev, R, R.next) !== 0) R = R.next;
                    else {
                        if (A(R), R = D = R.prev, R === R.next) break;
                        C = !0
                    }
                while (C || R !== D);
                return D
            }

            function u(P, D, C, R, F, B, L) {
                if (P) {
                    !L && B && o(P, R, F, B);
                    for (var k, U, H = P; P.prev !== P.next;)
                        if (k = P.prev, U = P.next, B ? c(P, R, F, B) : f(P)) D.push(k.i / C), D.push(P.i / C), D.push(U.i / C), A(P), P = U.next, H = U.next;
                        else if (P = U, P === H) {
                        L ? L === 1 ? (P = s(P, D, C), u(P, D, C, R, F, B, 2)) : L === 2 && i(P, D, C, R, F, B) : u(g(P), D, C, R, F, B, 1);
                        break
                    }
                }
            }

            function f(P) {
                var D = P.prev,
                    C = P,
                    R = P.next;
                if (y(D, C, R) >= 0) return !1;
                for (var F = P.next.next; F !== P.prev;) {
                    if (l(D.x, D.y, C.x, C.y, R.x, R.y, F.x, F.y) && y(F.prev, F, F.next) >= 0) return !1;
                    F = F.next
                }
                return !0
            }

            function c(P, D, C, R) {
                var F = P.prev,
                    B = P,
                    L = P.next;
                if (y(F, B, L) >= 0) return !1;
                for (var k = F.x < B.x ? F.x < L.x ? F.x : L.x : B.x < L.x ? B.x : L.x, U = F.y < B.y ? F.y < L.y ? F.y : L.y : B.y < L.y ? B.y : L.y, H = F.x > B.x ? F.x > L.x ? F.x : L.x : B.x > L.x ? B.x : L.x, X = F.y > B.y ? F.y > L.y ? F.y : L.y : B.y > L.y ? B.y : L.y, W = h(k, U, D, C, R), V = h(H, X, D, C, R), G = P.prevZ, Y = P.nextZ; G && G.z >= W && Y && Y.z <= V;) {
                    if (G !== P.prev && G !== P.next && l(F.x, F.y, B.x, B.y, L.x, L.y, G.x, G.y) && y(G.prev, G, G.next) >= 0 || (G = G.prevZ, Y !== P.prev && Y !== P.next && l(F.x, F.y, B.x, B.y, L.x, L.y, Y.x, Y.y) && y(Y.prev, Y, Y.next) >= 0)) return !1;
                    Y = Y.nextZ
                }
                for (; G && G.z >= W;) {
                    if (G !== P.prev && G !== P.next && l(F.x, F.y, B.x, B.y, L.x, L.y, G.x, G.y) && y(G.prev, G, G.next) >= 0) return !1;
                    G = G.prevZ
                }
                for (; Y && Y.z <= V;) {
                    if (Y !== P.prev && Y !== P.next && l(F.x, F.y, B.x, B.y, L.x, L.y, Y.x, Y.y) && y(Y.prev, Y, Y.next) >= 0) return !1;
                    Y = Y.nextZ
                }
                return !0
            }

            function s(P, D, C) {
                var R = P;
                do {
                    var F = R.prev,
                        B = R.next.next;
                    !x(F, B) && T(F, R, R.next, B) && E(F, B) && E(B, F) && (D.push(F.i / C), D.push(R.i / C), D.push(B.i / C), A(R), A(R.next), R = P = B), R = R.next
                } while (R !== P);
                return R
            }

            function i(P, D, C, R, F, B) {
                var L = P;
                do {
                    for (var k = L.next.next; k !== L.prev;) {
                        if (L.i !== k.i && p(L, k)) {
                            var U = m(L, k);
                            return L = g(L, L.next), U = g(U, U.next), u(L, D, C, R, F, B), void u(U, D, C, R, F, B)
                        }
                        k = k.next
                    }
                    L = L.next
                } while (L !== P)
            }

            function n(P, D, C, R) {
                var F, B, L, k, U, H = [];
                for (F = 0, B = D.length; F < B; F++) L = D[F] * R, k = F < B - 1 ? D[F + 1] * R : P.length, U = O(P, L, k, R, !1), U === U.next && (U.steiner = !0), H.push(d(U));
                for (H.sort(e), F = 0; F < H.length; F++) t(H[F], C), C = g(C, C.next);
                return C
            }

            function e(P, D) {
                return P.x - D.x
            }

            function t(P, D) {
                if (D = r(P, D)) {
                    var C = m(D, P);
                    g(C, C.next)
                }
            }

            function r(P, D) {
                var C, R = D,
                    F = P.x,
                    B = P.y,
                    L = -(1 / 0);
                do {
                    if (B <= R.y && B >= R.next.y && R.next.y !== R.y) {
                        var k = R.x + (B - R.y) * (R.next.x - R.x) / (R.next.y - R.y);
                        if (k <= F && k > L) {
                            if (L = k, k === F) {
                                if (B === R.y) return R;
                                if (B === R.next.y) return R.next
                            }
                            C = R.x < R.next.x ? R : R.next
                        }
                    }
                    R = R.next
                } while (R !== D);
                if (!C) return null;
                if (F === L) return C.prev;
                var U, H = C,
                    X = C.x,
                    W = C.y,
                    V = 1 / 0;
                for (R = C.next; R !== H;) F >= R.x && R.x >= X && F !== R.x && l(B < W ? F : L, B, X, W, B < W ? L : F, B, R.x, R.y) && (U = Math.abs(B - R.y) / (F - R.x), (U < V || U === V && R.x > C.x) && E(R, P) && (C = R, V = U)), R = R.next;
                return C
            }

            function o(P, D, C, R) {
                var F = P;
                do F.z === null && (F.z = h(F.x, F.y, D, C, R)), F.prevZ = F.prev, F.nextZ = F.next, F = F.next; while (F !== P);
                F.prevZ.nextZ = null, F.prevZ = null, a(F)
            }

            function a(P) {
                var D, C, R, F, B, L, k, U, H = 1;
                do {
                    for (C = P, P = null, B = null, L = 0; C;) {
                        for (L++, R = C, k = 0, D = 0; D < H && (k++, R = R.nextZ, R); D++);
                        for (U = H; k > 0 || U > 0 && R;) k !== 0 && (U === 0 || !R || C.z <= R.z) ? (F = C, C = C.nextZ, k--) : (F = R, R = R.nextZ, U--), B ? B.nextZ = F : P = F, F.prevZ = B, B = F;
                        C = R
                    }
                    B.nextZ = null, H *= 2
                } while (L > 1);
                return P
            }

            function h(P, D, C, R, F) {
                return P = 32767 * (P - C) * F, D = 32767 * (D - R) * F, P = 16711935 & (P | P << 8), P = 252645135 & (P | P << 4), P = 858993459 & (P | P << 2), P = 1431655765 & (P | P << 1), D = 16711935 & (D | D << 8), D = 252645135 & (D | D << 4), D = 858993459 & (D | D << 2), D = 1431655765 & (D | D << 1), P | D << 1
            }

            function d(P) {
                var D = P,
                    C = P;
                do D.x < C.x && (C = D), D = D.next; while (D !== P);
                return C
            }

            function l(P, D, C, R, F, B, L, k) {
                return (F - L) * (D - k) - (P - L) * (B - k) >= 0 && (P - L) * (R - k) - (C - L) * (D - k) >= 0 && (C - L) * (B - k) - (F - L) * (R - k) >= 0
            }

            function p(P, D) {
                return P.next.i !== D.i && P.prev.i !== D.i && !S(P, D) && E(P, D) && E(D, P) && _(P, D)
            }

            function y(P, D, C) {
                return (D.y - P.y) * (C.x - D.x) - (D.x - P.x) * (C.y - D.y)
            }

            function x(P, D) {
                return P.x === D.x && P.y === D.y
            }

            function T(P, D, C, R) {
                return !!(x(P, D) && x(C, R) || x(P, R) && x(C, D)) || y(P, D, C) > 0 != y(P, D, R) > 0 && y(C, R, P) > 0 != y(C, R, D) > 0
            }

            function S(P, D) {
                var C = P;
                do {
                    if (C.i !== P.i && C.next.i !== P.i && C.i !== D.i && C.next.i !== D.i && T(C, C.next, P, D)) return !0;
                    C = C.next
                } while (C !== P);
                return !1
            }

            function E(P, D) {
                return y(P.prev, P, P.next) < 0 ? y(P, D, P.next) >= 0 && y(P, P.prev, D) >= 0 : y(P, D, P.prev) < 0 || y(P, P.next, D) < 0
            }

            function _(P, D) {
                var C = P,
                    R = !1,
                    F = (P.x + D.x) / 2,
                    B = (P.y + D.y) / 2;
                do C.y > B != C.next.y > B && C.next.y !== C.y && F < (C.next.x - C.x) * (B - C.y) / (C.next.y - C.y) + C.x && (R = !R), C = C.next; while (C !== P);
                return R
            }

            function m(P, D) {
                var C = new I(P.i, P.x, P.y),
                    R = new I(D.i, D.x, D.y),
                    F = P.next,
                    B = D.prev;
                return P.next = D, D.prev = P, C.next = F, F.prev = C, R.next = C, C.prev = R, B.next = R, R.prev = B, R
            }

            function M(P, D, C, R) {
                var F = new I(P, D, C);
                return R ? (F.next = R.next, F.prev = R, R.next.prev = F, R.next = F) : (F.prev = F, F.next = F), F
            }

            function A(P) {
                P.next.prev = P.prev, P.prev.next = P.next, P.prevZ && (P.prevZ.nextZ = P.nextZ), P.nextZ && (P.nextZ.prevZ = P.prevZ)
            }

            function I(P, D, C) {
                this.i = P, this.x = D, this.y = C, this.prev = null, this.next = null, this.z = null, this.prevZ = null, this.nextZ = null, this.steiner = !1
            }

            function N(P, D, C, R) {
                for (var F = 0, B = D, L = C - R; B < C; B += R) F += (P[L] - P[B]) * (P[B + 1] + P[L + 1]), L = B;
                return F
            }
            j.exports = b, j.exports.default = b, b.deviation = function(P, D, C, R) {
                var F = D && D.length,
                    B = F ? D[0] * C : P.length,
                    L = Math.abs(N(P, 0, B, C));
                if (F)
                    for (var k = 0, U = D.length; k < U; k++) {
                        var H = D[k] * C,
                            X = k < U - 1 ? D[k + 1] * C : P.length;
                        L -= Math.abs(N(P, H, X, C))
                    }
                var W = 0;
                for (k = 0; k < R.length; k += 3) {
                    var V = R[k] * C,
                        G = R[k + 1] * C,
                        Y = R[k + 2] * C;
                    W += Math.abs((P[V] - P[Y]) * (P[G + 1] - P[V + 1]) - (P[V] - P[G]) * (P[Y + 1] - P[V + 1]))
                }
                return L === 0 && W === 0 ? 0 : Math.abs((W - L) / L)
            }, b.flatten = function(P) {
                for (var D = P[0][0].length, C = {
                        vertices: [],
                        holes: [],
                        dimensions: D
                    }, R = 0, F = 0; F < P.length; F++) {
                    for (var B = 0; B < P[F].length; B++)
                        for (var L = 0; L < D; L++) C.vertices.push(P[F][B][L]);
                    F > 0 && (R += P[F - 1].length, C.holes.push(R))
                }
                return C
            }
        }, {}],
        3: [function(w, j, v) {
            "use strict";

            function b() {}

            function O(c, s, i) {
                this.fn = c, this.context = s, this.once = i || !1
            }

            function g() {
                this._events = new b, this._eventsCount = 0
            }
            var u = Object.prototype.hasOwnProperty,
                f = "~";
            Object.create && (b.prototype = Object.create(null), new b().__proto__ || (f = !1)), g.prototype.eventNames = function() {
                var c, s, i = [];
                if (this._eventsCount === 0) return i;
                for (s in c = this._events) u.call(c, s) && i.push(f ? s.slice(1) : s);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(c)) : i
            }, g.prototype.listeners = function(c, s) {
                var i = f ? f + c : c,
                    n = this._events[i];
                if (s) return !!n;
                if (!n) return [];
                if (n.fn) return [n.fn];
                for (var e = 0, t = n.length, r = new Array(t); e < t; e++) r[e] = n[e].fn;
                return r
            }, g.prototype.emit = function(c, s, i, n, e, t) {
                var r = f ? f + c : c;
                if (!this._events[r]) return !1;
                var o, a, h = this._events[r],
                    d = arguments.length;
                if (h.fn) {
                    switch (h.once && this.removeListener(c, h.fn, void 0, !0), d) {
                        case 1:
                            return h.fn.call(h.context), !0;
                        case 2:
                            return h.fn.call(h.context, s), !0;
                        case 3:
                            return h.fn.call(h.context, s, i), !0;
                        case 4:
                            return h.fn.call(h.context, s, i, n), !0;
                        case 5:
                            return h.fn.call(h.context, s, i, n, e), !0;
                        case 6:
                            return h.fn.call(h.context, s, i, n, e, t), !0
                    }
                    for (a = 1, o = new Array(d - 1); a < d; a++) o[a - 1] = arguments[a];
                    h.fn.apply(h.context, o)
                } else {
                    var l, p = h.length;
                    for (a = 0; a < p; a++) switch (h[a].once && this.removeListener(c, h[a].fn, void 0, !0), d) {
                        case 1:
                            h[a].fn.call(h[a].context);
                            break;
                        case 2:
                            h[a].fn.call(h[a].context, s);
                            break;
                        case 3:
                            h[a].fn.call(h[a].context, s, i);
                            break;
                        case 4:
                            h[a].fn.call(h[a].context, s, i, n);
                            break;
                        default:
                            if (!o)
                                for (l = 1, o = new Array(d - 1); l < d; l++) o[l - 1] = arguments[l];
                            h[a].fn.apply(h[a].context, o)
                    }
                }
                return !0
            }, g.prototype.on = function(c, s, i) {
                var n = new O(s, i || this),
                    e = f ? f + c : c;
                return this._events[e] ? this._events[e].fn ? this._events[e] = [this._events[e], n] : this._events[e].push(n) : (this._events[e] = n, this._eventsCount++), this
            }, g.prototype.once = function(c, s, i) {
                var n = new O(s, i || this, !0),
                    e = f ? f + c : c;
                return this._events[e] ? this._events[e].fn ? this._events[e] = [this._events[e], n] : this._events[e].push(n) : (this._events[e] = n, this._eventsCount++), this
            }, g.prototype.removeListener = function(c, s, i, n) {
                var e = f ? f + c : c;
                if (!this._events[e]) return this;
                if (!s) return --this._eventsCount == 0 ? this._events = new b : delete this._events[e], this;
                var t = this._events[e];
                if (t.fn) t.fn !== s || n && !t.once || i && t.context !== i || (--this._eventsCount == 0 ? this._events = new b : delete this._events[e]);
                else {
                    for (var r = 0, o = [], a = t.length; r < a; r++)(t[r].fn !== s || n && !t[r].once || i && t[r].context !== i) && o.push(t[r]);
                    o.length ? this._events[e] = o.length === 1 ? o[0] : o : --this._eventsCount == 0 ? this._events = new b : delete this._events[e]
                }
                return this
            }, g.prototype.removeAllListeners = function(c) {
                var s;
                return c ? (s = f ? f + c : c, this._events[s] && (--this._eventsCount == 0 ? this._events = new b : delete this._events[s])) : (this._events = new b, this._eventsCount = 0), this
            }, g.prototype.off = g.prototype.removeListener, g.prototype.addListener = g.prototype.on, g.prototype.setMaxListeners = function() {
                return this
            }, g.prefixed = f, g.EventEmitter = g, typeof j != "undefined" && (j.exports = g)
        }, {}],
        4: [function(w, j, v) {
            (function(b) {
                var O = /iPhone/i,
                    g = /iPod/i,
                    u = /iPad/i,
                    f = /(?=.*\bAndroid\b)(?=.*\bMobile\b)/i,
                    c = /Android/i,
                    s = /(?=.*\bAndroid\b)(?=.*\bSD4930UR\b)/i,
                    i = /(?=.*\bAndroid\b)(?=.*\b(?:KFOT|KFTT|KFJWI|KFJWA|KFSOWI|KFTHWI|KFTHWA|KFAPWI|KFAPWA|KFARWI|KFASWI|KFSAWI|KFSAWA)\b)/i,
                    n = /Windows Phone/i,
                    e = /(?=.*\bWindows\b)(?=.*\bARM\b)/i,
                    t = /BlackBerry/i,
                    r = /BB10/i,
                    o = /Opera Mini/i,
                    a = /(CriOS|Chrome)(?=.*\bMobile\b)/i,
                    h = /(?=.*\bFirefox\b)(?=.*\bMobile\b)/i,
                    d = new RegExp("(?:Nexus 7|BNTV250|Kindle Fire|Silk|GT-P1000)", "i"),
                    l = function(x, T) {
                        return x.test(T)
                    },
                    p = function(x) {
                        var T = x || navigator.userAgent,
                            S = T.split("[FBAN");
                        if (typeof S[1] != "undefined" && (T = S[0]), S = T.split("Twitter"), typeof S[1] != "undefined" && (T = S[0]), this.apple = {
                                phone: l(O, T),
                                ipod: l(g, T),
                                tablet: !l(O, T) && l(u, T),
                                device: l(O, T) || l(g, T) || l(u, T)
                            }, this.amazon = {
                                phone: l(s, T),
                                tablet: !l(s, T) && l(i, T),
                                device: l(s, T) || l(i, T)
                            }, this.android = {
                                phone: l(s, T) || l(f, T),
                                tablet: !l(s, T) && !l(f, T) && (l(i, T) || l(c, T)),
                                device: l(s, T) || l(i, T) || l(f, T) || l(c, T)
                            }, this.windows = {
                                phone: l(n, T),
                                tablet: l(e, T),
                                device: l(n, T) || l(e, T)
                            }, this.other = {
                                blackberry: l(t, T),
                                blackberry10: l(r, T),
                                opera: l(o, T),
                                firefox: l(h, T),
                                chrome: l(a, T),
                                device: l(t, T) || l(r, T) || l(o, T) || l(h, T) || l(a, T)
                            }, this.seven_inch = l(d, T), this.any = this.apple.device || this.android.device || this.windows.device || this.other.device || this.seven_inch, this.phone = this.apple.phone || this.android.phone || this.windows.phone, this.tablet = this.apple.tablet || this.android.tablet || this.windows.tablet, typeof window == "undefined") return this
                    },
                    y = function() {
                        var x = new p;
                        return x.Class = p, x
                    };
                typeof j != "undefined" && j.exports && typeof window == "undefined" ? j.exports = p : typeof j != "undefined" && j.exports && typeof window != "undefined" ? j.exports = y() : typeof oe == "function" && oe.amd ? oe("isMobile", [], b.isMobile = y()) : b.isMobile = y()
            })(this)
        }, {}],
        5: [function(w, j, v) {
            "use strict";

            function b(c, s) {
                if (!(c instanceof s)) throw new TypeError("Cannot call a class as a function")
            }

            function O(c, s) {
                return c._head ? (c._tail._next = s, s._prev = c._tail, c._tail = s) : (c._head = s, c._tail = s), s._owner = c, s
            }
            Object.defineProperty(v, "__esModule", {
                value: !0
            });
            var g = function() {
                    function c(s, i) {
                        for (var n = 0; n < i.length; n++) {
                            var e = i[n];
                            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e)
                        }
                    }
                    return function(s, i, n) {
                        return i && c(s.prototype, i), n && c(s, n), s
                    }
                }(),
                u = function() {
                    function c(s, i, n) {
                        i === void 0 && (i = !1), b(this, c), this._fn = s, this._once = i, this._thisArg = n, this._next = this._prev = this._owner = null
                    }
                    return g(c, [{
                        key: "detach",
                        value: function() {
                            return this._owner !== null && (this._owner.detach(this), !0)
                        }
                    }]), c
                }(),
                f = function() {
                    function c() {
                        b(this, c), this._head = this._tail = void 0
                    }
                    return g(c, [{
                        key: "handlers",
                        value: function() {
                            var s = !(arguments.length <= 0 || arguments[0] === void 0) && arguments[0],
                                i = this._head;
                            if (s) return !!i;
                            for (var n = []; i;) n.push(i), i = i._next;
                            return n
                        }
                    }, {
                        key: "has",
                        value: function(s) {
                            if (!(s instanceof u)) throw new Error("MiniSignal#has(): First arg must be a MiniSignalBinding object.");
                            return s._owner === this
                        }
                    }, {
                        key: "dispatch",
                        value: function() {
                            var s = this._head;
                            if (!s) return !1;
                            for (; s;) s._once && this.detach(s), s._fn.apply(s._thisArg, arguments), s = s._next;
                            return !0
                        }
                    }, {
                        key: "add",
                        value: function(s) {
                            var i = arguments.length <= 1 || arguments[1] === void 0 ? null : arguments[1];
                            if (typeof s != "function") throw new Error("MiniSignal#add(): First arg must be a Function.");
                            return O(this, new u(s, !1, i))
                        }
                    }, {
                        key: "once",
                        value: function(s) {
                            var i = arguments.length <= 1 || arguments[1] === void 0 ? null : arguments[1];
                            if (typeof s != "function") throw new Error("MiniSignal#once(): First arg must be a Function.");
                            return O(this, new u(s, !0, i))
                        }
                    }, {
                        key: "detach",
                        value: function(s) {
                            if (!(s instanceof u)) throw new Error("MiniSignal#detach(): First arg must be a MiniSignalBinding object.");
                            return s._owner !== this ? this : (s._prev && (s._prev._next = s._next), s._next && (s._next._prev = s._prev), s === this._head ? (this._head = s._next, s._next === null && (this._tail = null)) : s === this._tail && (this._tail = s._prev, this._tail._next = null), s._owner = null, this)
                        }
                    }, {
                        key: "detachAll",
                        value: function() {
                            var s = this._head;
                            if (!s) return this;
                            for (this._head = this._tail = null; s;) s._owner = null, s = s._next;
                            return this
                        }
                    }]), c
                }();
            f.MiniSignalBinding = u, v.default = f, j.exports = v.default
        }, {}],
        6: [function(w, j, v) {
            "use strict";

            function b(c) {
                if (c == null) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(c)
            }

            function O() {
                try {
                    if (!Object.assign) return !1;
                    var c = new String("abc");
                    if (c[5] = "de", Object.getOwnPropertyNames(c)[0] === "5") return !1;
                    for (var s = {}, i = 0; i < 10; i++) s["_" + String.fromCharCode(i)] = i;
                    var n = Object.getOwnPropertyNames(s).map(function(t) {
                        return s[t]
                    });
                    if (n.join("") !== "0123456789") return !1;
                    var e = {};
                    return "abcdefghijklmnopqrst".split("").forEach(function(t) {
                        e[t] = t
                    }), Object.keys(Object.assign({}, e)).join("") === "abcdefghijklmnopqrst"
                } catch (t) {
                    return !1
                }
            }
            var g = Object.getOwnPropertySymbols,
                u = Object.prototype.hasOwnProperty,
                f = Object.prototype.propertyIsEnumerable;
            j.exports = O() ? Object.assign : function(c, s) {
                for (var i, n, e = b(c), t = 1; t < arguments.length; t++) {
                    i = Object(arguments[t]);
                    for (var r in i) u.call(i, r) && (e[r] = i[r]);
                    if (g) {
                        n = g(i);
                        for (var o = 0; o < n.length; o++) f.call(i, n[o]) && (e[n[o]] = i[n[o]])
                    }
                }
                return e
            }
        }, {}],
        7: [function(w, j, v) {
            "use strict";
            j.exports = function(b, O) {
                O = O || {};
                for (var g = {
                        key: ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"],
                        q: {
                            name: "queryKey",
                            parser: /(?:^|&)([^&=]*)=?([^&]*)/g
                        },
                        parser: {
                            strict: /^(?:([^:\/?#]+):)?(?:\/\/((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?))?((((?:[^?#\/]*\/)*)([^?#]*))(?:\?([^#]*))?(?:#(.*))?)/,
                            loose: /^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/
                        }
                    }, u = g.parser[O.strictMode ? "strict" : "loose"].exec(b), f = {}, c = 14; c--;) f[g.key[c]] = u[c] || "";
                return f[g.q.name] = {}, f[g.key[12]].replace(g.q.parser, function(s, i, n) {
                    i && (f[g.q.name][i] = n)
                }), f
            }
        }, {}],
        8: [function(w, j, v) {
            (function(b) {
                function O(s, i) {
                    for (var n = 0, e = s.length - 1; e >= 0; e--) {
                        var t = s[e];
                        t === "." ? s.splice(e, 1) : t === ".." ? (s.splice(e, 1), n++) : n && (s.splice(e, 1), n--)
                    }
                    if (i)
                        for (; n--; n) s.unshift("..");
                    return s
                }

                function g(s, i) {
                    if (s.filter) return s.filter(i);
                    for (var n = [], e = 0; e < s.length; e++) i(s[e], e, s) && n.push(s[e]);
                    return n
                }
                var u = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/,
                    f = function(s) {
                        return u.exec(s).slice(1)
                    };
                v.resolve = function() {
                    for (var s = "", i = !1, n = arguments.length - 1; n >= -1 && !i; n--) {
                        var e = n >= 0 ? arguments[n] : b.cwd();
                        if (typeof e != "string") throw new TypeError("Arguments to path.resolve must be strings");
                        e && (s = e + "/" + s, i = e.charAt(0) === "/")
                    }
                    return s = O(g(s.split("/"), function(t) {
                        return !!t
                    }), !i).join("/"), (i ? "/" : "") + s || "."
                }, v.normalize = function(s) {
                    var i = v.isAbsolute(s),
                        n = c(s, -1) === "/";
                    return s = O(g(s.split("/"), function(e) {
                        return !!e
                    }), !i).join("/"), s || i || (s = "."), s && n && (s += "/"), (i ? "/" : "") + s
                }, v.isAbsolute = function(s) {
                    return s.charAt(0) === "/"
                }, v.join = function() {
                    var s = Array.prototype.slice.call(arguments, 0);
                    return v.normalize(g(s, function(i, n) {
                        if (typeof i != "string") throw new TypeError("Arguments to path.join must be strings");
                        return i
                    }).join("/"))
                }, v.relative = function(s, i) {
                    function n(d) {
                        for (var l = 0; l < d.length && d[l] === ""; l++);
                        for (var p = d.length - 1; p >= 0 && d[p] === ""; p--);
                        return l > p ? [] : d.slice(l, p - l + 1)
                    }
                    s = v.resolve(s).substr(1), i = v.resolve(i).substr(1);
                    for (var e = n(s.split("/")), t = n(i.split("/")), r = Math.min(e.length, t.length), o = r, a = 0; a < r; a++)
                        if (e[a] !== t[a]) {
                            o = a;
                            break
                        }
                    for (var h = [], a = o; a < e.length; a++) h.push("..");
                    return h = h.concat(t.slice(o)), h.join("/")
                }, v.sep = "/", v.delimiter = ":", v.dirname = function(s) {
                    var i = f(s),
                        n = i[0],
                        e = i[1];
                    return n || e ? (e && (e = e.substr(0, e.length - 1)), n + e) : "."
                }, v.basename = function(s, i) {
                    var n = f(s)[2];
                    return i && n.substr(-1 * i.length) === i && (n = n.substr(0, n.length - i.length)), n
                }, v.extname = function(s) {
                    return f(s)[3]
                };
                var c = "ab".substr(-1) === "b" ? function(s, i, n) {
                    return s.substr(i, n)
                } : function(s, i, n) {
                    return i < 0 && (i = s.length + i), s.substr(i, n)
                }
            }).call(this, w("_process"))
        }, {
            _process: 26
        }],
        9: [function(w, j, v) {
            var b = new ArrayBuffer(0),
                O = function(g, u, f, c) {
                    this.gl = g, this.buffer = g.createBuffer(), this.type = u || g.ARRAY_BUFFER, this.drawType = c || g.STATIC_DRAW, this.data = b, f && this.upload(f), this._updateID = 0
                };
            O.prototype.upload = function(g, u, f) {
                f || this.bind();
                var c = this.gl;
                g = g || this.data, u = u || 0, this.data.byteLength >= g.byteLength ? c.bufferSubData(this.type, u, g) : c.bufferData(this.type, g, this.drawType), this.data = g
            }, O.prototype.bind = function() {
                var g = this.gl;
                g.bindBuffer(this.type, this.buffer)
            }, O.createVertexBuffer = function(g, u, f) {
                return new O(g, g.ARRAY_BUFFER, u, f)
            }, O.createIndexBuffer = function(g, u, f) {
                return new O(g, g.ELEMENT_ARRAY_BUFFER, u, f)
            }, O.create = function(g, u, f, c) {
                return new O(g, u, f, c)
            }, O.prototype.destroy = function() {
                this.gl.deleteBuffer(this.buffer)
            }, j.exports = O
        }, {}],
        10: [function(w, j, v) {
            var b = w("./GLTexture"),
                O = function(g, u, f) {
                    this.gl = g, this.framebuffer = g.createFramebuffer(), this.stencil = null, this.texture = null, this.width = u || 100, this.height = f || 100
                };
            O.prototype.enableTexture = function(g) {
                var u = this.gl;
                this.texture = g || new b(u), this.texture.bind(), this.bind(), u.framebufferTexture2D(u.FRAMEBUFFER, u.COLOR_ATTACHMENT0, u.TEXTURE_2D, this.texture.texture, 0)
            }, O.prototype.enableStencil = function() {
                if (!this.stencil) {
                    var g = this.gl;
                    this.stencil = g.createRenderbuffer(), g.bindRenderbuffer(g.RENDERBUFFER, this.stencil), g.framebufferRenderbuffer(g.FRAMEBUFFER, g.DEPTH_STENCIL_ATTACHMENT, g.RENDERBUFFER, this.stencil), g.renderbufferStorage(g.RENDERBUFFER, g.DEPTH_STENCIL, this.width, this.height)
                }
            }, O.prototype.clear = function(g, u, f, c) {
                this.bind();
                var s = this.gl;
                s.clearColor(g, u, f, c), s.clear(s.COLOR_BUFFER_BIT | s.DEPTH_BUFFER_BIT)
            }, O.prototype.bind = function() {
                var g = this.gl;
                g.bindFramebuffer(g.FRAMEBUFFER, this.framebuffer)
            }, O.prototype.unbind = function() {
                var g = this.gl;
                g.bindFramebuffer(g.FRAMEBUFFER, null)
            }, O.prototype.resize = function(g, u) {
                var f = this.gl;
                this.width = g, this.height = u, this.texture && this.texture.uploadData(null, g, u), this.stencil && (f.bindRenderbuffer(f.RENDERBUFFER, this.stencil), f.renderbufferStorage(f.RENDERBUFFER, f.DEPTH_STENCIL, g, u))
            }, O.prototype.destroy = function() {
                var g = this.gl;
                this.texture && this.texture.destroy(), g.deleteFramebuffer(this.framebuffer), this.gl = null, this.stencil = null, this.texture = null
            }, O.createRGBA = function(g, u, f, c) {
                var s = b.fromData(g, null, u, f);
                s.enableNearestScaling(), s.enableWrapClamp();
                var i = new O(g, u, f);
                return i.enableTexture(s), i.unbind(), i
            }, O.createFloat32 = function(g, u, f, c) {
                var s = new b.fromData(g, c, u, f);
                s.enableNearestScaling(), s.enableWrapClamp();
                var i = new O(g, u, f);
                return i.enableTexture(s), i.unbind(), i
            }, j.exports = O
        }, {
            "./GLTexture": 12
        }],
        11: [function(w, j, v) {
            var b = w("./shader/compileProgram"),
                O = w("./shader/extractAttributes"),
                g = w("./shader/extractUniforms"),
                u = w("./shader/setPrecision"),
                f = w("./shader/generateUniformAccessObject"),
                c = function(s, i, n, e, t) {
                    this.gl = s, e && (i = u(i, e), n = u(n, e)), this.program = b(s, i, n, t), this.attributes = O(s, this.program), this.uniformData = g(s, this.program), this.uniforms = f(s, this.uniformData)
                };
            c.prototype.bind = function() {
                return this.gl.useProgram(this.program), this
            }, c.prototype.destroy = function() {
                this.attributes = null, this.uniformData = null, this.uniforms = null;
                var s = this.gl;
                s.deleteProgram(this.program)
            }, j.exports = c
        }, {
            "./shader/compileProgram": 17,
            "./shader/extractAttributes": 19,
            "./shader/extractUniforms": 20,
            "./shader/generateUniformAccessObject": 21,
            "./shader/setPrecision": 25
        }],
        12: [function(w, j, v) {
            var b = function(g, u, f, c, s) {
                this.gl = g, this.texture = g.createTexture(), this.mipmap = !1, this.premultiplyAlpha = !1, this.width = u || -1, this.height = f || -1, this.format = c || g.RGBA, this.type = s || g.UNSIGNED_BYTE
            };
            b.prototype.upload = function(g) {
                this.bind();
                var u = this.gl;
                u.pixelStorei(u.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha);
                var f = g.videoWidth || g.width,
                    c = g.videoHeight || g.height;
                c !== this.height || f !== this.width ? u.texImage2D(u.TEXTURE_2D, 0, this.format, this.format, this.type, g) : u.texSubImage2D(u.TEXTURE_2D, 0, 0, 0, this.format, this.type, g), this.width = f, this.height = c
            };
            var O = !1;
            b.prototype.uploadData = function(g, u, f) {
                this.bind();
                var c = this.gl;
                if (g instanceof Float32Array) {
                    if (!O) {
                        var s = c.getExtension("OES_texture_float");
                        if (!s) throw new Error("floating point textures not available");
                        O = !0
                    }
                    this.type = c.FLOAT
                } else this.type = this.type || c.UNSIGNED_BYTE;
                c.pixelStorei(c.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplyAlpha), u !== this.width || f !== this.height ? c.texImage2D(c.TEXTURE_2D, 0, this.format, u, f, 0, this.format, this.type, g || null) : c.texSubImage2D(c.TEXTURE_2D, 0, 0, 0, u, f, this.format, this.type, g || null), this.width = u, this.height = f
            }, b.prototype.bind = function(g) {
                var u = this.gl;
                g !== void 0 && u.activeTexture(u.TEXTURE0 + g), u.bindTexture(u.TEXTURE_2D, this.texture)
            }, b.prototype.unbind = function() {
                var g = this.gl;
                g.bindTexture(g.TEXTURE_2D, null)
            }, b.prototype.minFilter = function(g) {
                var u = this.gl;
                this.bind(), this.mipmap ? u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, g ? u.LINEAR_MIPMAP_LINEAR : u.NEAREST_MIPMAP_NEAREST) : u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MIN_FILTER, g ? u.LINEAR : u.NEAREST)
            }, b.prototype.magFilter = function(g) {
                var u = this.gl;
                this.bind(), u.texParameteri(u.TEXTURE_2D, u.TEXTURE_MAG_FILTER, g ? u.LINEAR : u.NEAREST)
            }, b.prototype.enableMipmap = function() {
                var g = this.gl;
                this.bind(), this.mipmap = !0, g.generateMipmap(g.TEXTURE_2D)
            }, b.prototype.enableLinearScaling = function() {
                this.minFilter(!0), this.magFilter(!0)
            }, b.prototype.enableNearestScaling = function() {
                this.minFilter(!1), this.magFilter(!1)
            }, b.prototype.enableWrapClamp = function() {
                var g = this.gl;
                this.bind(), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.CLAMP_TO_EDGE), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.CLAMP_TO_EDGE)
            }, b.prototype.enableWrapRepeat = function() {
                var g = this.gl;
                this.bind(), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.REPEAT), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.REPEAT)
            }, b.prototype.enableWrapMirrorRepeat = function() {
                var g = this.gl;
                this.bind(), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_S, g.MIRRORED_REPEAT), g.texParameteri(g.TEXTURE_2D, g.TEXTURE_WRAP_T, g.MIRRORED_REPEAT)
            }, b.prototype.destroy = function() {
                var g = this.gl;
                g.deleteTexture(this.texture)
            }, b.fromSource = function(g, u, f) {
                var c = new b(g);
                return c.premultiplyAlpha = f || !1, c.upload(u), c
            }, b.fromData = function(g, u, f, c) {
                var s = new b(g);
                return s.uploadData(u, f, c), s
            }, j.exports = b
        }, {}],
        13: [function(w, j, v) {
            function b(g, u) {
                if (this.nativeVaoExtension = null, b.FORCE_NATIVE || (this.nativeVaoExtension = g.getExtension("OES_vertex_array_object") || g.getExtension("MOZ_OES_vertex_array_object") || g.getExtension("WEBKIT_OES_vertex_array_object")), this.nativeState = u, this.nativeVaoExtension) {
                    this.nativeVao = this.nativeVaoExtension.createVertexArrayOES();
                    var f = g.getParameter(g.MAX_VERTEX_ATTRIBS);
                    this.nativeState = {
                        tempAttribState: new Array(f),
                        attribState: new Array(f)
                    }
                }
                this.gl = g, this.attributes = [], this.indexBuffer = null, this.dirty = !1
            }
            var O = w("./setVertexAttribArrays");
            b.prototype.constructor = b, j.exports = b, b.FORCE_NATIVE = !1, b.prototype.bind = function() {
                if (this.nativeVao) {
                    if (this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.dirty) return this.dirty = !1, this.activate(), this;
                    this.indexBuffer && this.indexBuffer.bind()
                } else this.activate();
                return this
            }, b.prototype.unbind = function() {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(null), this
            }, b.prototype.activate = function() {
                for (var g = this.gl, u = null, f = 0; f < this.attributes.length; f++) {
                    var c = this.attributes[f];
                    u !== c.buffer && (c.buffer.bind(), u = c.buffer), g.vertexAttribPointer(c.attribute.location, c.attribute.size, c.type || g.FLOAT, c.normalized || !1, c.stride || 0, c.start || 0)
                }
                return O(g, this.attributes, this.nativeState), this.indexBuffer && this.indexBuffer.bind(), this
            }, b.prototype.addAttribute = function(g, u, f, c, s, i) {
                return this.attributes.push({
                    buffer: g,
                    attribute: u,
                    location: u.location,
                    type: f || this.gl.FLOAT,
                    normalized: c || !1,
                    stride: s || 0,
                    start: i || 0
                }), this.dirty = !0, this
            }, b.prototype.addIndex = function(g) {
                return this.indexBuffer = g, this.dirty = !0, this
            }, b.prototype.clear = function() {
                return this.nativeVao && this.nativeVaoExtension.bindVertexArrayOES(this.nativeVao), this.attributes.length = 0, this.indexBuffer = null, this
            }, b.prototype.draw = function(g, u, f) {
                var c = this.gl;
                return this.indexBuffer ? c.drawElements(g, u || this.indexBuffer.data.length, c.UNSIGNED_SHORT, 2 * (f || 0)) : c.drawArrays(g, f, u || this.getSize()), this
            }, b.prototype.destroy = function() {
                this.gl = null, this.indexBuffer = null, this.attributes = null, this.nativeState = null, this.nativeVao && this.nativeVaoExtension.deleteVertexArrayOES(this.nativeVao), this.nativeVaoExtension = null, this.nativeVao = null
            }, b.prototype.getSize = function() {
                var g = this.attributes[0];
                return g.buffer.data.length / (g.stride / 4 || g.attribute.size)
            }
        }, {
            "./setVertexAttribArrays": 16
        }],
        14: [function(w, j, v) {
            var b = function(O, g) {
                var u = O.getContext("webgl", g) || O.getContext("experimental-webgl", g);
                if (!u) throw new Error("This browser does not support webGL. Try using the canvas renderer");
                return u
            };
            j.exports = b
        }, {}],
        15: [function(w, j, v) {
            var b = {
                createContext: w("./createContext"),
                setVertexAttribArrays: w("./setVertexAttribArrays"),
                GLBuffer: w("./GLBuffer"),
                GLFramebuffer: w("./GLFramebuffer"),
                GLShader: w("./GLShader"),
                GLTexture: w("./GLTexture"),
                VertexArrayObject: w("./VertexArrayObject"),
                shader: w("./shader")
            };
            typeof j != "undefined" && j.exports && (j.exports = b), typeof window != "undefined" && (window.PIXI = window.PIXI || {}, window.PIXI.glCore = b)
        }, {
            "./GLBuffer": 9,
            "./GLFramebuffer": 10,
            "./GLShader": 11,
            "./GLTexture": 12,
            "./VertexArrayObject": 13,
            "./createContext": 14,
            "./setVertexAttribArrays": 16,
            "./shader": 22
        }],
        16: [function(w, j, v) {
            var b = function(O, g, u) {
                var f;
                if (u) {
                    var c = u.tempAttribState,
                        s = u.attribState;
                    for (f = 0; f < c.length; f++) c[f] = !1;
                    for (f = 0; f < g.length; f++) c[g[f].attribute.location] = !0;
                    for (f = 0; f < s.length; f++) s[f] !== c[f] && (s[f] = c[f], u.attribState[f] ? O.enableVertexAttribArray(f) : O.disableVertexAttribArray(f))
                } else
                    for (f = 0; f < g.length; f++) {
                        var i = g[f];
                        O.enableVertexAttribArray(i.attribute.location)
                    }
            };
            j.exports = b
        }, {}],
        17: [function(w, j, v) {
            var b = function(g, u, f, c) {
                    var s = O(g, g.VERTEX_SHADER, u),
                        i = O(g, g.FRAGMENT_SHADER, f),
                        n = g.createProgram();
                    if (g.attachShader(n, s), g.attachShader(n, i), c)
                        for (var e in c) g.bindAttribLocation(n, c[e], e);
                    return g.linkProgram(n), g.getProgramParameter(n, g.LINK_STATUS) || (console.error("Pixi.js Error: Could not initialize shader."), console.error("gl.VALIDATE_STATUS", g.getProgramParameter(n, g.VALIDATE_STATUS)), console.error("gl.getError()", g.getError()), g.getProgramInfoLog(n) !== "" && console.warn("Pixi.js Warning: gl.getProgramInfoLog()", g.getProgramInfoLog(n)), g.deleteProgram(n), n = null), g.deleteShader(s), g.deleteShader(i), n
                },
                O = function(g, u, f) {
                    var c = g.createShader(u);
                    return g.shaderSource(c, f), g.compileShader(c), g.getShaderParameter(c, g.COMPILE_STATUS) ? c : (console.log(g.getShaderInfoLog(c)), null)
                };
            j.exports = b
        }, {}],
        18: [function(w, j, v) {
            var b = function(g, u) {
                    switch (g) {
                        case "float":
                            return 0;
                        case "vec2":
                            return new Float32Array(2 * u);
                        case "vec3":
                            return new Float32Array(3 * u);
                        case "vec4":
                            return new Float32Array(4 * u);
                        case "int":
                        case "sampler2D":
                            return 0;
                        case "ivec2":
                            return new Int32Array(2 * u);
                        case "ivec3":
                            return new Int32Array(3 * u);
                        case "ivec4":
                            return new Int32Array(4 * u);
                        case "bool":
                            return !1;
                        case "bvec2":
                            return O(2 * u);
                        case "bvec3":
                            return O(3 * u);
                        case "bvec4":
                            return O(4 * u);
                        case "mat2":
                            return new Float32Array([1, 0, 0, 1]);
                        case "mat3":
                            return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
                        case "mat4":
                            return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
                    }
                },
                O = function(g) {
                    for (var u = new Array(g), f = 0; f < u.length; f++) u[f] = !1;
                    return u
                };
            j.exports = b
        }, {}],
        19: [function(w, j, v) {
            var b = w("./mapType"),
                O = w("./mapSize"),
                g = function(f, c) {
                    for (var s = {}, i = f.getProgramParameter(c, f.ACTIVE_ATTRIBUTES), n = 0; n < i; n++) {
                        var e = f.getActiveAttrib(c, n),
                            t = b(f, e.type);
                        s[e.name] = {
                            type: t,
                            size: O(t),
                            location: f.getAttribLocation(c, e.name),
                            pointer: u
                        }
                    }
                    return s
                },
                u = function(f, c, s, i) {
                    gl.vertexAttribPointer(this.location, this.size, f || gl.FLOAT, c || !1, s || 0, i || 0)
                };
            j.exports = g
        }, {
            "./mapSize": 23,
            "./mapType": 24
        }],
        20: [function(w, j, v) {
            var b = w("./mapType"),
                O = w("./defaultValue"),
                g = function(u, f) {
                    for (var c = {}, s = u.getProgramParameter(f, u.ACTIVE_UNIFORMS), i = 0; i < s; i++) {
                        var n = u.getActiveUniform(f, i),
                            e = n.name.replace(/\[.*?\]/, ""),
                            t = b(u, n.type);
                        c[e] = {
                            type: t,
                            size: n.size,
                            location: u.getUniformLocation(f, e),
                            value: O(t, n.size)
                        }
                    }
                    return c
                };
            j.exports = g
        }, {
            "./defaultValue": 18,
            "./mapType": 24
        }],
        21: [function(w, j, v) {
            function b(s, i) {
                return function(n) {
                    this.data[s].value = n;
                    var e = this.data[s].location;
                    i.size === 1 ? f[i.type](this.gl, e, n) : c[i.type](this.gl, e, n)
                }
            }

            function O(s, i) {
                for (var n = i, e = 0; e < s.length - 1; e++) {
                    var t = n[s[e]] || {
                        data: {}
                    };
                    n[s[e]] = t, n = t
                }
                return n
            }
            var g = function(s, i) {
                    var n = {
                        data: {}
                    };
                    n.gl = s;
                    for (var e = Object.keys(i), t = 0; t < e.length; t++) {
                        var r = e[t],
                            o = r.split("."),
                            a = o[o.length - 1],
                            h = O(o, n),
                            d = i[r];
                        h.data[a] = d, h.gl = s, Object.defineProperty(h, a, {
                            get: u(a),
                            set: b(a, d)
                        })
                    }
                    return n
                },
                u = function(s) {
                    return function() {
                        return this.data[s].value
                    }
                },
                f = {
                    float: function(s, i, n) {
                        s.uniform1f(i, n)
                    },
                    vec2: function(s, i, n) {
                        s.uniform2f(i, n[0], n[1])
                    },
                    vec3: function(s, i, n) {
                        s.uniform3f(i, n[0], n[1], n[2])
                    },
                    vec4: function(s, i, n) {
                        s.uniform4f(i, n[0], n[1], n[2], n[3])
                    },
                    int: function(s, i, n) {
                        s.uniform1i(i, n)
                    },
                    ivec2: function(s, i, n) {
                        s.uniform2i(i, n[0], n[1])
                    },
                    ivec3: function(s, i, n) {
                        s.uniform3i(i, n[0], n[1], n[2])
                    },
                    ivec4: function(s, i, n) {
                        s.uniform4i(i, n[0], n[1], n[2], n[3])
                    },
                    bool: function(s, i, n) {
                        s.uniform1i(i, n)
                    },
                    bvec2: function(s, i, n) {
                        s.uniform2i(i, n[0], n[1])
                    },
                    bvec3: function(s, i, n) {
                        s.uniform3i(i, n[0], n[1], n[2])
                    },
                    bvec4: function(s, i, n) {
                        s.uniform4i(i, n[0], n[1], n[2], n[3])
                    },
                    mat2: function(s, i, n) {
                        s.uniformMatrix2fv(i, !1, n)
                    },
                    mat3: function(s, i, n) {
                        s.uniformMatrix3fv(i, !1, n)
                    },
                    mat4: function(s, i, n) {
                        s.uniformMatrix4fv(i, !1, n)
                    },
                    sampler2D: function(s, i, n) {
                        s.uniform1i(i, n)
                    }
                },
                c = {
                    float: function(s, i, n) {
                        s.uniform1fv(i, n)
                    },
                    vec2: function(s, i, n) {
                        s.uniform2fv(i, n)
                    },
                    vec3: function(s, i, n) {
                        s.uniform3fv(i, n)
                    },
                    vec4: function(s, i, n) {
                        s.uniform4fv(i, n)
                    },
                    int: function(s, i, n) {
                        s.uniform1iv(i, n)
                    },
                    ivec2: function(s, i, n) {
                        s.uniform2iv(i, n)
                    },
                    ivec3: function(s, i, n) {
                        s.uniform3iv(i, n)
                    },
                    ivec4: function(s, i, n) {
                        s.uniform4iv(i, n)
                    },
                    bool: function(s, i, n) {
                        s.uniform1iv(i, n)
                    },
                    bvec2: function(s, i, n) {
                        s.uniform2iv(i, n)
                    },
                    bvec3: function(s, i, n) {
                        s.uniform3iv(i, n)
                    },
                    bvec4: function(s, i, n) {
                        s.uniform4iv(i, n)
                    },
                    sampler2D: function(s, i, n) {
                        s.uniform1iv(i, n)
                    }
                };
            j.exports = g
        }, {}],
        22: [function(w, j, v) {
            j.exports = {
                compileProgram: w("./compileProgram"),
                defaultValue: w("./defaultValue"),
                extractAttributes: w("./extractAttributes"),
                extractUniforms: w("./extractUniforms"),
                generateUniformAccessObject: w("./generateUniformAccessObject"),
                setPrecision: w("./setPrecision"),
                mapSize: w("./mapSize"),
                mapType: w("./mapType")
            }
        }, {
            "./compileProgram": 17,
            "./defaultValue": 18,
            "./extractAttributes": 19,
            "./extractUniforms": 20,
            "./generateUniformAccessObject": 21,
            "./mapSize": 23,
            "./mapType": 24,
            "./setPrecision": 25
        }],
        23: [function(w, j, v) {
            var b = function(g) {
                    return O[g]
                },
                O = {
                    float: 1,
                    vec2: 2,
                    vec3: 3,
                    vec4: 4,
                    int: 1,
                    ivec2: 2,
                    ivec3: 3,
                    ivec4: 4,
                    bool: 1,
                    bvec2: 2,
                    bvec3: 3,
                    bvec4: 4,
                    mat2: 4,
                    mat3: 9,
                    mat4: 16,
                    sampler2D: 1
                };
            j.exports = b
        }, {}],
        24: [function(w, j, v) {
            var b = function(u, f) {
                    if (!O) {
                        var c = Object.keys(g);
                        O = {};
                        for (var s = 0; s < c.length; ++s) {
                            var i = c[s];
                            O[u[i]] = g[i]
                        }
                    }
                    return O[f]
                },
                O = null,
                g = {
                    FLOAT: "float",
                    FLOAT_VEC2: "vec2",
                    FLOAT_VEC3: "vec3",
                    FLOAT_VEC4: "vec4",
                    INT: "int",
                    INT_VEC2: "ivec2",
                    INT_VEC3: "ivec3",
                    INT_VEC4: "ivec4",
                    BOOL: "bool",
                    BOOL_VEC2: "bvec2",
                    BOOL_VEC3: "bvec3",
                    BOOL_VEC4: "bvec4",
                    FLOAT_MAT2: "mat2",
                    FLOAT_MAT3: "mat3",
                    FLOAT_MAT4: "mat4",
                    SAMPLER_2D: "sampler2D"
                };
            j.exports = b
        }, {}],
        25: [function(w, j, v) {
            var b = function(O, g) {
                return O.substring(0, 9) !== "precision" ? "precision " + g + ` float;
` + O : O
            };
            j.exports = b
        }, {}],
        26: [function(w, j, v) {
            function b() {
                throw new Error("setTimeout has not been defined")
            }

            function O() {
                throw new Error("clearTimeout has not been defined")
            }

            function g(d) {
                if (n === setTimeout) return setTimeout(d, 0);
                if ((n === b || !n) && setTimeout) return n = setTimeout, setTimeout(d, 0);
                try {
                    return n(d, 0)
                } catch (l) {
                    try {
                        return n.call(null, d, 0)
                    } catch (p) {
                        return n.call(this, d, 0)
                    }
                }
            }

            function u(d) {
                if (e === clearTimeout) return clearTimeout(d);
                if ((e === O || !e) && clearTimeout) return e = clearTimeout, clearTimeout(d);
                try {
                    return e(d)
                } catch (l) {
                    try {
                        return e.call(null, d)
                    } catch (p) {
                        return e.call(this, d)
                    }
                }
            }

            function f() {
                a && r && (a = !1, r.length ? o = r.concat(o) : h = -1, o.length && c())
            }

            function c() {
                if (!a) {
                    var d = g(f);
                    a = !0;
                    for (var l = o.length; l;) {
                        for (r = o, o = []; ++h < l;) r && r[h].run();
                        h = -1, l = o.length
                    }
                    r = null, a = !1, u(d)
                }
            }

            function s(d, l) {
                this.fun = d, this.array = l
            }

            function i() {}
            var n, e, t = j.exports = {};
            (function() {
                try {
                    n = typeof setTimeout == "function" ? setTimeout : b
                } catch (d) {
                    n = b
                }
                try {
                    e = typeof clearTimeout == "function" ? clearTimeout : O
                } catch (d) {
                    e = O
                }
            })();
            var r, o = [],
                a = !1,
                h = -1;
            t.nextTick = function(d) {
                var l = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var p = 1; p < arguments.length; p++) l[p - 1] = arguments[p];
                o.push(new s(d, l)), o.length !== 1 || a || g(c)
            }, s.prototype.run = function() {
                this.fun.apply(null, this.array)
            }, t.title = "browser", t.browser = !0, t.env = {}, t.argv = [], t.version = "", t.versions = {}, t.on = i, t.addListener = i, t.once = i, t.off = i, t.removeListener = i, t.removeAllListeners = i, t.emit = i, t.prependListener = i, t.prependOnceListener = i, t.listeners = function(d) {
                return []
            }, t.binding = function(d) {
                throw new Error("process.binding is not supported")
            }, t.cwd = function() {
                return "/"
            }, t.chdir = function(d) {
                throw new Error("process.chdir is not supported")
            }, t.umask = function() {
                return 0
            }
        }, {}],
        27: [function(w, j, v) {
            (function(b) {
                (function(O) {
                    function g(L) {
                        throw new RangeError(C[L])
                    }

                    function u(L, k) {
                        for (var U = L.length, H = []; U--;) H[U] = k(L[U]);
                        return H
                    }

                    function f(L, k) {
                        var U = L.split("@"),
                            H = "";
                        U.length > 1 && (H = U[0] + "@", L = U[1]), L = L.replace(D, ".");
                        var X = L.split("."),
                            W = u(X, k).join(".");
                        return H + W
                    }

                    function c(L) {
                        for (var k, U, H = [], X = 0, W = L.length; X < W;) k = L.charCodeAt(X++), k >= 55296 && k <= 56319 && X < W ? (U = L.charCodeAt(X++), (64512 & U) == 56320 ? H.push(((1023 & k) << 10) + (1023 & U) + 65536) : (H.push(k), X--)) : H.push(k);
                        return H
                    }

                    function s(L) {
                        return u(L, function(k) {
                            var U = "";
                            return k > 65535 && (k -= 65536, U += B(k >>> 10 & 1023 | 55296), k = 56320 | 1023 & k), U += B(k)
                        }).join("")
                    }

                    function i(L) {
                        return L - 48 < 10 ? L - 22 : L - 65 < 26 ? L - 65 : L - 97 < 26 ? L - 97 : T
                    }

                    function n(L, k) {
                        return L + 22 + 75 * (L < 26) - ((k != 0) << 5)
                    }

                    function e(L, k, U) {
                        var H = 0;
                        for (L = U ? F(L / m) : L >> 1, L += F(L / k); L > R * E >> 1; H += T) L = F(L / R);
                        return F(H + (R + 1) * L / (L + _))
                    }

                    function t(L) {
                        var k, U, H, X, W, V, G, Y, z, K, q = [],
                            $ = L.length,
                            J = 0,
                            Q = A,
                            ee = M;
                        for (U = L.lastIndexOf(I), U < 0 && (U = 0), H = 0; H < U; ++H) L.charCodeAt(H) >= 128 && g("not-basic"), q.push(L.charCodeAt(H));
                        for (X = U > 0 ? U + 1 : 0; X < $;) {
                            for (W = J, V = 1, G = T; X >= $ && g("invalid-input"), Y = i(L.charCodeAt(X++)), (Y >= T || Y > F((x - J) / V)) && g("overflow"), J += Y * V, z = G <= ee ? S : G >= ee + E ? E : G - ee, !(Y < z); G += T) K = T - z, V > F(x / K) && g("overflow"), V *= K;
                            k = q.length + 1, ee = e(J - W, k, W == 0), F(J / k) > x - Q && g("overflow"), Q += F(J / k), J %= k, q.splice(J++, 0, Q)
                        }
                        return s(q)
                    }

                    function r(L) {
                        var k, U, H, X, W, V, G, Y, z, K, q, $, J, Q, ee, Z = [];
                        for (L = c(L), $ = L.length, k = A, U = 0, W = M, V = 0; V < $; ++V) q = L[V], q < 128 && Z.push(B(q));
                        for (H = X = Z.length, X && Z.push(I); H < $;) {
                            for (G = x, V = 0; V < $; ++V) q = L[V], q >= k && q < G && (G = q);
                            for (J = H + 1, G - k > F((x - U) / J) && g("overflow"), U += (G - k) * J, k = G, V = 0; V < $; ++V)
                                if (q = L[V], q < k && ++U > x && g("overflow"), q == k) {
                                    for (Y = U, z = T; K = z <= W ? S : z >= W + E ? E : z - W, !(Y < K); z += T) ee = Y - K, Q = T - K, Z.push(B(n(K + ee % Q, 0))), Y = F(ee / Q);
                                    Z.push(B(n(Y, 0))), W = e(U, J, H == X), U = 0, ++H
                                }++U, ++k
                        }
                        return Z.join("")
                    }

                    function o(L) {
                        return f(L, function(k) {
                            return N.test(k) ? t(k.slice(4).toLowerCase()) : k
                        })
                    }

                    function a(L) {
                        return f(L, function(k) {
                            return P.test(k) ? "xn--" + r(k) : k
                        })
                    }
                    var h = typeof v == "object" && v && !v.nodeType && v,
                        d = typeof j == "object" && j && !j.nodeType && j,
                        l = typeof b == "object" && b;
                    l.global !== l && l.window !== l && l.self !== l || (O = l);
                    var p, y, x = 2147483647,
                        T = 36,
                        S = 1,
                        E = 26,
                        _ = 38,
                        m = 700,
                        M = 72,
                        A = 128,
                        I = "-",
                        N = /^xn--/,
                        P = /[^\x20-\x7E]/,
                        D = /[\x2E\u3002\uFF0E\uFF61]/g,
                        C = {
                            overflow: "Overflow: input needs wider integers to process",
                            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                            "invalid-input": "Invalid input"
                        },
                        R = T - S,
                        F = Math.floor,
                        B = String.fromCharCode;
                    if (p = {
                            version: "1.4.1",
                            ucs2: {
                                decode: c,
                                encode: s
                            },
                            decode: t,
                            encode: r,
                            toASCII: a,
                            toUnicode: o
                        }, typeof oe == "function" && typeof oe.amd == "object" && oe.amd) oe("punycode", function() {
                        return p
                    });
                    else if (h && d)
                        if (j.exports == h) d.exports = p;
                        else
                            for (y in p) p.hasOwnProperty(y) && (h[y] = p[y]);
                    else O.punycode = p
                })(this)
            }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
        }, {}],
        28: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                return Object.prototype.hasOwnProperty.call(g, u)
            }
            j.exports = function(g, u, f, c) {
                u = u || "&", f = f || "=";
                var s = {};
                if (typeof g != "string" || g.length === 0) return s;
                var i = /\+/g;
                g = g.split(u);
                var n = 1e3;
                c && typeof c.maxKeys == "number" && (n = c.maxKeys);
                var e = g.length;
                n > 0 && e > n && (e = n);
                for (var t = 0; t < e; ++t) {
                    var r, o, a, h, d = g[t].replace(i, "%20"),
                        l = d.indexOf(f);
                    l >= 0 ? (r = d.substr(0, l), o = d.substr(l + 1)) : (r = d, o = ""), a = decodeURIComponent(r), h = decodeURIComponent(o), b(s, a) ? O(s[a]) ? s[a].push(h) : s[a] = [s[a], h] : s[a] = h
                }
                return s
            };
            var O = Array.isArray || function(g) {
                return Object.prototype.toString.call(g) === "[object Array]"
            }
        }, {}],
        29: [function(w, j, v) {
            "use strict";

            function b(f, c) {
                if (f.map) return f.map(c);
                for (var s = [], i = 0; i < f.length; i++) s.push(c(f[i], i));
                return s
            }
            var O = function(f) {
                switch (typeof f) {
                    case "string":
                        return f;
                    case "boolean":
                        return f ? "true" : "false";
                    case "number":
                        return isFinite(f) ? f : "";
                    default:
                        return ""
                }
            };
            j.exports = function(f, c, s, i) {
                return c = c || "&", s = s || "=", f === null && (f = void 0), typeof f == "object" ? b(u(f), function(n) {
                    var e = encodeURIComponent(O(n)) + s;
                    return g(f[n]) ? b(f[n], function(t) {
                        return e + encodeURIComponent(O(t))
                    }).join(c) : e + encodeURIComponent(O(f[n]))
                }).join(c) : i ? encodeURIComponent(O(i)) + s + encodeURIComponent(O(f)) : ""
            };
            var g = Array.isArray || function(f) {
                    return Object.prototype.toString.call(f) === "[object Array]"
                },
                u = Object.keys || function(f) {
                    var c = [];
                    for (var s in f) Object.prototype.hasOwnProperty.call(f, s) && c.push(s);
                    return c
                }
        }, {}],
        30: [function(w, j, v) {
            "use strict";
            v.decode = v.parse = w("./decode"), v.encode = v.stringify = w("./encode")
        }, {
            "./decode": 28,
            "./encode": 29
        }],
        31: [function(w, j, v) {
            "use strict";
            j.exports = function(b, O, g) {
                var u, f = b.length;
                if (!(O >= f || g === 0)) {
                    g = O + g > f ? f - O : g;
                    var c = f - g;
                    for (u = O; u < c; ++u) b[u] = b[u + g];
                    b.length = c
                }
            }
        }, {}],
        32: [function(w, j, v) {
            "use strict";

            function b(l) {
                if (l && l.__esModule) return l;
                var p = {};
                if (l != null)
                    for (var y in l) Object.prototype.hasOwnProperty.call(l, y) && (p[y] = l[y]);
                return p.default = l, p
            }

            function O(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }

            function g(l, p) {
                if (!(l instanceof p)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var u = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(l) {
                    return typeof l
                } : function(l) {
                    return l && typeof Symbol == "function" && l.constructor === Symbol && l !== Symbol.prototype ? "symbol" : typeof l
                },
                f = function() {
                    function l(p, y) {
                        for (var x = 0; x < y.length; x++) {
                            var T = y[x];
                            T.enumerable = T.enumerable || !1, T.configurable = !0, "value" in T && (T.writable = !0), Object.defineProperty(p, T.key, T)
                        }
                    }
                    return function(p, y, x) {
                        return y && l(p.prototype, y), x && l(p, x), p
                    }
                }(),
                c = w("mini-signals"),
                s = O(c),
                i = w("parse-uri"),
                n = O(i),
                e = w("./async"),
                t = b(e),
                r = w("./Resource"),
                o = O(r),
                a = 100,
                h = /(#[\w-]+)?$/,
                d = function() {
                    function l() {
                        var p = this,
                            y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "",
                            x = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 10;
                        g(this, l), this.baseUrl = y, this.progress = 0, this.loading = !1, this.defaultQueryString = "", this._beforeMiddleware = [], this._afterMiddleware = [], this._resourcesParsing = [], this._boundLoadResource = function(T, S) {
                            return p._loadResource(T, S)
                        }, this._queue = t.queue(this._boundLoadResource, x), this._queue.pause(), this.resources = {}, this.onProgress = new s.default, this.onError = new s.default, this.onLoad = new s.default, this.onStart = new s.default, this.onComplete = new s.default
                    }
                    return l.prototype.add = function(p, y, x, T) {
                        if (Array.isArray(p)) {
                            for (var S = 0; S < p.length; ++S) this.add(p[S]);
                            return this
                        }
                        if ((typeof p == "undefined" ? "undefined" : u(p)) === "object" && (T = y || p.callback || p.onComplete, x = p, y = p.url, p = p.name || p.key || p.url), typeof y != "string" && (T = x, x = y, y = p), typeof y != "string") throw new Error("No url passed to add resource to loader.");
                        if (typeof x == "function" && (T = x, x = null), this.loading && (!x || !x.parentResource)) throw new Error("Cannot add resources while the loader is running.");
                        if (this.resources[p]) throw new Error('Resource named "' + p + '" already exists.');
                        if (y = this._prepareUrl(y), this.resources[p] = new o.default(p, y, x), typeof T == "function" && this.resources[p].onAfterMiddleware.once(T), this.loading) {
                            for (var E = x.parentResource, _ = [], m = 0; m < E.children.length; ++m) E.children[m].isComplete || _.push(E.children[m]);
                            var M = E.progressChunk * (_.length + 1),
                                A = M / (_.length + 2);
                            E.children.push(this.resources[p]), E.progressChunk = A;
                            for (var I = 0; I < _.length; ++I) _[I].progressChunk = A;
                            this.resources[p].progressChunk = A
                        }
                        return this._queue.push(this.resources[p]), this
                    }, l.prototype.pre = function(p) {
                        return this._beforeMiddleware.push(p), this
                    }, l.prototype.use = function(p) {
                        return this._afterMiddleware.push(p), this
                    }, l.prototype.reset = function() {
                        this.progress = 0, this.loading = !1, this._queue.kill(), this._queue.pause();
                        for (var p in this.resources) {
                            var y = this.resources[p];
                            y._onLoadBinding && y._onLoadBinding.detach(), y.isLoading && y.abort()
                        }
                        return this.resources = {}, this
                    }, l.prototype.load = function(p) {
                        if (typeof p == "function" && this.onComplete.once(p), this.loading) return this;
                        if (this._queue.idle()) this._onStart(), this._onComplete();
                        else {
                            for (var y = this._queue._tasks.length, x = 100 / y, T = 0; T < this._queue._tasks.length; ++T) this._queue._tasks[T].data.progressChunk = x;
                            this._onStart(), this._queue.resume()
                        }
                        return this
                    }, l.prototype._prepareUrl = function(p) {
                        var y = (0, n.default)(p, {
                                strictMode: !0
                            }),
                            x = void 0;
                        if (x = y.protocol || !y.path || p.indexOf("//") === 0 ? p : this.baseUrl.length && this.baseUrl.lastIndexOf("/") !== this.baseUrl.length - 1 && p.charAt(0) !== "/" ? this.baseUrl + "/" + p : this.baseUrl + p, this.defaultQueryString) {
                            var T = h.exec(x)[0];
                            x = x.substr(0, x.length - T.length), x += x.indexOf("?") !== -1 ? "&" + this.defaultQueryString : "?" + this.defaultQueryString, x += T
                        }
                        return x
                    }, l.prototype._loadResource = function(p, y) {
                        var x = this;
                        p._dequeue = y, t.eachSeries(this._beforeMiddleware, function(T, S) {
                            T.call(x, p, function() {
                                S(p.isComplete ? {} : null)
                            })
                        }, function() {
                            p.isComplete ? x._onLoad(p) : (p._onLoadBinding = p.onComplete.once(x._onLoad, x), p.load())
                        }, !0)
                    }, l.prototype._onStart = function() {
                        this.progress = 0, this.loading = !0, this.onStart.dispatch(this)
                    }, l.prototype._onComplete = function() {
                        this.progress = a, this.loading = !1, this.onComplete.dispatch(this, this.resources)
                    }, l.prototype._onLoad = function(p) {
                        var y = this;
                        p._onLoadBinding = null, this._resourcesParsing.push(p), p._dequeue(), t.eachSeries(this._afterMiddleware, function(x, T) {
                            x.call(y, p, T)
                        }, function() {
                            p.onAfterMiddleware.dispatch(p), y.progress += p.progressChunk, y.onProgress.dispatch(y, p), p.error ? y.onError.dispatch(p.error, y, p) : y.onLoad.dispatch(y, p), y._resourcesParsing.splice(y._resourcesParsing.indexOf(p), 1), y._queue.idle() && y._resourcesParsing.length === 0 && y._onComplete()
                        }, !0)
                    }, f(l, [{
                        key: "concurrency",
                        get: function() {
                            return this._queue.concurrency
                        },
                        set: function(p) {
                            this._queue.concurrency = p
                        }
                    }]), l
                }();
            v.default = d
        }, {
            "./Resource": 33,
            "./async": 34,
            "mini-signals": 5,
            "parse-uri": 7
        }],
        33: [function(w, j, v) {
            "use strict";

            function b(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function O(y, x) {
                if (!(y instanceof x)) throw new TypeError("Cannot call a class as a function")
            }

            function g() {}

            function u(y, x, T) {
                x && x.indexOf(".") === 0 && (x = x.substring(1)), x && (y[x] = T)
            }

            function f(y) {
                return y.toString().replace("object ", "")
            }
            v.__esModule = !0;
            var c = function() {
                    function y(x, T) {
                        for (var S = 0; S < T.length; S++) {
                            var E = T[S];
                            E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(x, E.key, E)
                        }
                    }
                    return function(x, T, S) {
                        return T && y(x.prototype, T), S && y(x, S), x
                    }
                }(),
                s = w("parse-uri"),
                i = b(s),
                n = w("mini-signals"),
                e = b(n),
                t = !(!window.XDomainRequest || "withCredentials" in new XMLHttpRequest),
                r = null,
                o = 0,
                a = 200,
                h = 204,
                d = 1223,
                l = 2,
                p = function() {
                    function y(x, T, S) {
                        if (O(this, y), typeof x != "string" || typeof T != "string") throw new Error("Both name and url are required for constructing a resource.");
                        S = S || {}, this._flags = 0, this._setFlag(y.STATUS_FLAGS.DATA_URL, T.indexOf("data:") === 0), this.name = x, this.url = T, this.extension = this._getExtension(), this.data = null, this.crossOrigin = S.crossOrigin === !0 ? "anonymous" : S.crossOrigin, this.loadType = S.loadType || this._determineLoadType(), this.xhrType = S.xhrType, this.metadata = S.metadata || {}, this.error = null, this.xhr = null, this.children = [], this.type = y.TYPE.UNKNOWN, this.progressChunk = 0, this._dequeue = g, this._onLoadBinding = null, this._boundComplete = this.complete.bind(this), this._boundOnError = this._onError.bind(this), this._boundOnProgress = this._onProgress.bind(this), this._boundXhrOnError = this._xhrOnError.bind(this), this._boundXhrOnAbort = this._xhrOnAbort.bind(this), this._boundXhrOnLoad = this._xhrOnLoad.bind(this), this._boundXdrOnTimeout = this._xdrOnTimeout.bind(this), this.onStart = new e.default, this.onProgress = new e.default, this.onComplete = new e.default, this.onAfterMiddleware = new e.default
                    }
                    return y.setExtensionLoadType = function(x, T) {
                        u(y._loadTypeMap, x, T)
                    }, y.setExtensionXhrType = function(x, T) {
                        u(y._xhrTypeMap, x, T)
                    }, y.prototype.complete = function() {
                        if (this.data && this.data.removeEventListener && (this.data.removeEventListener("error", this._boundOnError, !1), this.data.removeEventListener("load", this._boundComplete, !1), this.data.removeEventListener("progress", this._boundOnProgress, !1), this.data.removeEventListener("canplaythrough", this._boundComplete, !1)), this.xhr && (this.xhr.removeEventListener ? (this.xhr.removeEventListener("error", this._boundXhrOnError, !1), this.xhr.removeEventListener("abort", this._boundXhrOnAbort, !1), this.xhr.removeEventListener("progress", this._boundOnProgress, !1), this.xhr.removeEventListener("load", this._boundXhrOnLoad, !1)) : (this.xhr.onerror = null, this.xhr.ontimeout = null, this.xhr.onprogress = null, this.xhr.onload = null)), this.isComplete) throw new Error("Complete called again for an already completed resource.");
                        this._setFlag(y.STATUS_FLAGS.COMPLETE, !0), this._setFlag(y.STATUS_FLAGS.LOADING, !1), this.onComplete.dispatch(this)
                    }, y.prototype.abort = function(x) {
                        if (!this.error) {
                            if (this.error = new Error(x), this.xhr) this.xhr.abort();
                            else if (this.xdr) this.xdr.abort();
                            else if (this.data)
                                if (this.data.src) this.data.src = y.EMPTY_GIF;
                                else
                                    for (; this.data.firstChild;) this.data.removeChild(this.data.firstChild);
                            this.complete()
                        }
                    }, y.prototype.load = function(x) {
                        var T = this;
                        if (!this.isLoading) {
                            if (this.isComplete) return void(x && setTimeout(function() {
                                return x(T)
                            }, 1));
                            switch (x && this.onComplete.once(x), this._setFlag(y.STATUS_FLAGS.LOADING, !0), this.onStart.dispatch(this), this.crossOrigin !== !1 && typeof this.crossOrigin == "string" || (this.crossOrigin = this._determineCrossOrigin(this.url)), this.loadType) {
                                case y.LOAD_TYPE.IMAGE:
                                    this.type = y.TYPE.IMAGE, this._loadElement("image");
                                    break;
                                case y.LOAD_TYPE.AUDIO:
                                    this.type = y.TYPE.AUDIO, this._loadSourceElement("audio");
                                    break;
                                case y.LOAD_TYPE.VIDEO:
                                    this.type = y.TYPE.VIDEO, this._loadSourceElement("video");
                                    break;
                                case y.LOAD_TYPE.XHR:
                                default:
                                    t && this.crossOrigin ? this._loadXdr() : this._loadXhr()
                            }
                        }
                    }, y.prototype._hasFlag = function(x) {
                        return !!(this._flags & x)
                    }, y.prototype._setFlag = function(x, T) {
                        this._flags = T ? this._flags | x : this._flags & ~x
                    }, y.prototype._loadElement = function(x) {
                        if (this.metadata.loadElement ? this.data = this.metadata.loadElement : x === "image" && typeof window.Image != "undefined" ? this.data = new Image : this.data = document.createElement(x), this.crossOrigin && (this.data.crossOrigin = this.crossOrigin), PIXI.settings.IMAGE_SCALE && PIXI.settings.IMAGE_SCALE.length) {
                            var T = this.url,
                                S = T.replace("\\", "/").lastIndexOf("/");
                            this.url = T.substring(0, S + 1) + PIXI.settings.IMAGE_SCALE + T.substring(S + 1)
                        }
                        this.metadata.skipSource || (this.data.src = this.url), this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1)
                    }, y.prototype._loadSourceElement = function(x) {
                        if (this.metadata.loadElement ? this.data = this.metadata.loadElement : x === "audio" && typeof window.Audio != "undefined" ? this.data = new Audio : this.data = document.createElement(x), this.data === null) return void this.abort("Unsupported element: " + x);
                        if (!this.metadata.skipSource)
                            if (navigator.isCocoonJS) this.data.src = Array.isArray(this.url) ? this.url[0] : this.url;
                            else if (Array.isArray(this.url))
                            for (var T = this.metadata.mimeType, S = 0; S < this.url.length; ++S) this.data.appendChild(this._createSource(x, this.url[S], Array.isArray(T) ? T[S] : T));
                        else {
                            var E = this.metadata.mimeType;
                            this.data.appendChild(this._createSource(x, this.url, Array.isArray(E) ? E[0] : E))
                        }
                        this.data.addEventListener("error", this._boundOnError, !1), this.data.addEventListener("load", this._boundComplete, !1), this.data.addEventListener("progress", this._boundOnProgress, !1), this.data.addEventListener("canplaythrough", this._boundComplete, !1), this.data.load()
                    }, y.prototype._loadXhr = function() {
                        typeof this.xhrType != "string" && (this.xhrType = this._determineXhrType());
                        var x = this.xhr = new XMLHttpRequest;
                        x.open("GET", this.url, !0), this.xhrType === y.XHR_RESPONSE_TYPE.JSON || this.xhrType === y.XHR_RESPONSE_TYPE.DOCUMENT ? x.responseType = y.XHR_RESPONSE_TYPE.TEXT : x.responseType = this.xhrType, x.addEventListener("error", this._boundXhrOnError, !1), x.addEventListener("abort", this._boundXhrOnAbort, !1), x.addEventListener("progress", this._boundOnProgress, !1), x.addEventListener("load", this._boundXhrOnLoad, !1), x.send()
                    }, y.prototype._loadXdr = function() {
                        typeof this.xhrType != "string" && (this.xhrType = this._determineXhrType());
                        var x = this.xhr = new XDomainRequest;
                        x.timeout = 5e3, x.onerror = this._boundXhrOnError, x.ontimeout = this._boundXdrOnTimeout, x.onprogress = this._boundOnProgress, x.onload = this._boundXhrOnLoad, x.open("GET", this.url, !0), setTimeout(function() {
                            return x.send()
                        }, 1)
                    }, y.prototype._createSource = function(x, T, S) {
                        S || (S = x + "/" + this._getExtension(T));
                        var E = document.createElement("source");
                        return E.src = T, E.type = S, E
                    }, y.prototype._onError = function(x) {
                        this.abort("Failed to load element using: " + x.target.nodeName)
                    }, y.prototype._onProgress = function(x) {
                        x && x.lengthComputable && this.onProgress.dispatch(this, x.loaded / x.total)
                    }, y.prototype._xhrOnError = function() {
                        var x = this.xhr;
                        this.abort(f(x) + " Request failed. Status: " + x.status + ', text: "' + x.statusText + '"')
                    }, y.prototype._xhrOnAbort = function() {
                        this.abort(f(this.xhr) + " Request was aborted by the user.")
                    }, y.prototype._xdrOnTimeout = function() {
                        this.abort(f(this.xhr) + " Request timed out.")
                    }, y.prototype._xhrOnLoad = function() {
                        var x = this.xhr,
                            T = "",
                            S = typeof x.status == "undefined" ? a : x.status;
                        x.responseType !== "" && x.responseType !== "text" && typeof x.responseType != "undefined" || (T = x.responseText), S === o && (T.length > 0 || x.responseType === y.XHR_RESPONSE_TYPE.BUFFER) ? S = a : S === d && (S = h);
                        var E = S / 100 | 0;
                        if (E !== l) return void this.abort("[" + x.status + "] " + x.statusText + ": " + x.responseURL);
                        if (this.xhrType === y.XHR_RESPONSE_TYPE.TEXT) this.data = T, this.type = y.TYPE.TEXT;
                        else if (this.xhrType === y.XHR_RESPONSE_TYPE.JSON) try {
                            this.data = JSON.parse(T), this.type = y.TYPE.JSON
                        } catch (M) {
                            return void this.abort("Error trying to parse loaded json: " + M)
                        } else if (this.xhrType === y.XHR_RESPONSE_TYPE.DOCUMENT) try {
                            if (window.DOMParser) {
                                var _ = new DOMParser;
                                this.data = _.parseFromString(T, "text/xml")
                            } else {
                                var m = document.createElement("div");
                                m.innerHTML = T, this.data = m
                            }
                            this.type = y.TYPE.XML
                        } catch (M) {
                            return void this.abort("Error trying to parse loaded xml: " + M)
                        } else this.data = x.response || T;
                        this.complete()
                    }, y.prototype._determineCrossOrigin = function(x, T) {
                        if (x.indexOf("data:") === 0) return "";
                        T = T || window.location, r || (r = document.createElement("a")), r.href = x, x = (0, i.default)(r.href, {
                            strictMode: !0
                        });
                        var S = !x.port && T.port === "" || x.port === T.port,
                            E = x.protocol ? x.protocol + ":" : "";
                        return x.host === T.hostname && S && E === T.protocol ? "" : "anonymous"
                    }, y.prototype._determineXhrType = function() {
                        return y._xhrTypeMap[this.extension] || y.XHR_RESPONSE_TYPE.TEXT
                    }, y.prototype._determineLoadType = function() {
                        return y._loadTypeMap[this.extension] || y.LOAD_TYPE.XHR
                    }, y.prototype._getExtension = function() {
                        var x = this.url,
                            T = "";
                        if (this.isDataUrl) {
                            var S = x.indexOf("/");
                            T = x.substring(S + 1, x.indexOf(";", S))
                        } else {
                            var E = x.indexOf("?"),
                                _ = x.indexOf("#"),
                                m = Math.min(E > -1 ? E : x.length, _ > -1 ? _ : x.length);
                            x = x.substring(0, m), T = x.substring(x.lastIndexOf(".") + 1)
                        }
                        return T.toLowerCase()
                    }, y.prototype._getMimeFromXhrType = function(x) {
                        switch (x) {
                            case y.XHR_RESPONSE_TYPE.BUFFER:
                                return "application/octet-binary";
                            case y.XHR_RESPONSE_TYPE.BLOB:
                                return "application/blob";
                            case y.XHR_RESPONSE_TYPE.DOCUMENT:
                                return "application/xml";
                            case y.XHR_RESPONSE_TYPE.JSON:
                                return "application/json";
                            case y.XHR_RESPONSE_TYPE.DEFAULT:
                            case y.XHR_RESPONSE_TYPE.TEXT:
                            default:
                                return "text/plain"
                        }
                    }, c(y, [{
                        key: "isDataUrl",
                        get: function() {
                            return this._hasFlag(y.STATUS_FLAGS.DATA_URL)
                        }
                    }, {
                        key: "isComplete",
                        get: function() {
                            return this._hasFlag(y.STATUS_FLAGS.COMPLETE)
                        }
                    }, {
                        key: "isLoading",
                        get: function() {
                            return this._hasFlag(y.STATUS_FLAGS.LOADING)
                        }
                    }]), y
                }();
            v.default = p, p.STATUS_FLAGS = {
                NONE: 0,
                DATA_URL: 1,
                COMPLETE: 2,
                LOADING: 4
            }, p.TYPE = {
                UNKNOWN: 0,
                JSON: 1,
                XML: 2,
                IMAGE: 3,
                AUDIO: 4,
                VIDEO: 5,
                TEXT: 6
            }, p.LOAD_TYPE = {
                XHR: 1,
                IMAGE: 2,
                AUDIO: 3,
                VIDEO: 4
            }, p.XHR_RESPONSE_TYPE = {
                DEFAULT: "text",
                BUFFER: "arraybuffer",
                BLOB: "blob",
                DOCUMENT: "document",
                JSON: "json",
                TEXT: "text"
            }, p._loadTypeMap = {
                gif: p.LOAD_TYPE.IMAGE,
                png: p.LOAD_TYPE.IMAGE,
                bmp: p.LOAD_TYPE.IMAGE,
                jpg: p.LOAD_TYPE.IMAGE,
                jpeg: p.LOAD_TYPE.IMAGE,
                tif: p.LOAD_TYPE.IMAGE,
                tiff: p.LOAD_TYPE.IMAGE,
                webp: p.LOAD_TYPE.IMAGE,
                tga: p.LOAD_TYPE.IMAGE,
                svg: p.LOAD_TYPE.IMAGE,
                "svg+xml": p.LOAD_TYPE.IMAGE,
                mp3: p.LOAD_TYPE.AUDIO,
                ogg: p.LOAD_TYPE.AUDIO,
                wav: p.LOAD_TYPE.AUDIO,
                mp4: p.LOAD_TYPE.VIDEO,
                webm: p.LOAD_TYPE.VIDEO
            }, p._xhrTypeMap = {
                xhtml: p.XHR_RESPONSE_TYPE.DOCUMENT,
                html: p.XHR_RESPONSE_TYPE.DOCUMENT,
                htm: p.XHR_RESPONSE_TYPE.DOCUMENT,
                xml: p.XHR_RESPONSE_TYPE.DOCUMENT,
                tmx: p.XHR_RESPONSE_TYPE.DOCUMENT,
                svg: p.XHR_RESPONSE_TYPE.DOCUMENT,
                tsx: p.XHR_RESPONSE_TYPE.DOCUMENT,
                gif: p.XHR_RESPONSE_TYPE.BLOB,
                png: p.XHR_RESPONSE_TYPE.BLOB,
                bmp: p.XHR_RESPONSE_TYPE.BLOB,
                jpg: p.XHR_RESPONSE_TYPE.BLOB,
                jpeg: p.XHR_RESPONSE_TYPE.BLOB,
                tif: p.XHR_RESPONSE_TYPE.BLOB,
                tiff: p.XHR_RESPONSE_TYPE.BLOB,
                webp: p.XHR_RESPONSE_TYPE.BLOB,
                tga: p.XHR_RESPONSE_TYPE.BLOB,
                json: p.XHR_RESPONSE_TYPE.JSON,
                text: p.XHR_RESPONSE_TYPE.TEXT,
                txt: p.XHR_RESPONSE_TYPE.TEXT,
                ttf: p.XHR_RESPONSE_TYPE.BUFFER,
                otf: p.XHR_RESPONSE_TYPE.BUFFER
            }, p.EMPTY_GIF = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw=="
        }, {
            "mini-signals": 5,
            "parse-uri": 7
        }],
        34: [function(w, j, v) {
            "use strict";

            function b() {}

            function O(f, c, s, i) {
                var n = 0,
                    e = f.length;
                (function t(r) {
                    return r || n === e ? void(s && s(r)) : void(i ? setTimeout(function() {
                        c(f[n++], t)
                    }, 1) : c(f[n++], t))
                })()
            }

            function g(f) {
                return function() {
                    if (f === null) throw new Error("Callback was already called.");
                    var c = f;
                    f = null, c.apply(this, arguments)
                }
            }

            function u(f, c) {
                function s(t, r, o) {
                    if (o != null && typeof o != "function") throw new Error("task callback must be a function");
                    if (e.started = !0, t == null && e.idle()) return void setTimeout(function() {
                        return e.drain()
                    }, 1);
                    var a = {
                        data: t,
                        callback: typeof o == "function" ? o : b
                    };
                    r ? e._tasks.unshift(a) : e._tasks.push(a), setTimeout(function() {
                        return e.process()
                    }, 1)
                }

                function i(t) {
                    return function() {
                        n -= 1, t.callback.apply(t, arguments), arguments[0] != null && e.error(arguments[0], t.data), n <= e.concurrency - e.buffer && e.unsaturated(), e.idle() && e.drain(), e.process()
                    }
                }
                if (c == null) c = 1;
                else if (c === 0) throw new Error("Concurrency must not be zero");
                var n = 0,
                    e = {
                        _tasks: [],
                        concurrency: c,
                        saturated: b,
                        unsaturated: b,
                        buffer: c / 4,
                        empty: b,
                        drain: b,
                        error: b,
                        started: !1,
                        paused: !1,
                        push: function(t, r) {
                            s(t, !1, r)
                        },
                        kill: function() {
                            n = 0, e.drain = b, e.started = !1, e._tasks = []
                        },
                        unshift: function(t, r) {
                            s(t, !0, r)
                        },
                        process: function() {
                            for (; !e.paused && n < e.concurrency && e._tasks.length;) {
                                var t = e._tasks.shift();
                                e._tasks.length === 0 && e.empty(), n += 1, n === e.concurrency && e.saturated(), f(t.data, g(i(t)))
                            }
                        },
                        length: function() {
                            return e._tasks.length
                        },
                        running: function() {
                            return n
                        },
                        idle: function() {
                            return e._tasks.length + n === 0
                        },
                        pause: function() {
                            e.paused !== !0 && (e.paused = !0)
                        },
                        resume: function() {
                            if (e.paused !== !1) {
                                e.paused = !1;
                                for (var t = 1; t <= e.concurrency; t++) e.process()
                            }
                        }
                    };
                return e
            }
            v.__esModule = !0, v.eachSeries = O, v.queue = u
        }, {}],
        35: [function(w, j, v) {
            "use strict";

            function b(g) {
                for (var u = "", f = 0; f < g.length;) {
                    for (var c = [0, 0, 0], s = [0, 0, 0, 0], i = 0; i < c.length; ++i) f < g.length ? c[i] = 255 & g.charCodeAt(f++) : c[i] = 0;
                    s[0] = c[0] >> 2, s[1] = (3 & c[0]) << 4 | c[1] >> 4, s[2] = (15 & c[1]) << 2 | c[2] >> 6, s[3] = 63 & c[2];
                    var n = f - (g.length - 1);
                    switch (n) {
                        case 2:
                            s[3] = 64, s[2] = 64;
                            break;
                        case 1:
                            s[3] = 64
                    }
                    for (var e = 0; e < s.length; ++e) u += O.charAt(s[e])
                }
                return u
            }
            v.__esModule = !0, v.encodeBinary = b;
            var O = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="
        }, {}],
        36: [function(w, j, v) {
            "use strict";
            var b = w("./Loader").default,
                O = w("./Resource").default,
                g = w("./async"),
                u = w("./b64");
            b.Resource = O, b.async = g, b.base64 = u, j.exports = b, j.exports.default = b
        }, {
            "./Loader": 32,
            "./Resource": 33,
            "./async": 34,
            "./b64": 35
        }],
        37: [function(w, j, v) {
            "use strict";

            function b(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function O() {
                return function(n, e) {
                    if (!n.data) return void e();
                    if (n.xhr && n.xhrType === f.default.XHR_RESPONSE_TYPE.BLOB)
                        if (window.Blob && typeof n.data != "string") {
                            if (n.data.type.indexOf("image") === 0) {
                                var t = function() {
                                    var o = i.createObjectURL(n.data);
                                    return n.blob = n.data, n.data = new Image, n.data.src = o, n.type = f.default.TYPE.IMAGE, n.data.onload = function() {
                                        i.revokeObjectURL(o), n.data.onload = null, e()
                                    }, {
                                        v: void 0
                                    }
                                }();
                                if ((typeof t == "undefined" ? "undefined" : g(t)) === "object") return t.v
                            }
                        } else {
                            var r = n.xhr.getResponseHeader("content-type");
                            if (r && r.indexOf("image") === 0) return n.data = new Image, n.data.src = "data:" + r + ";base64," + s.default.encodeBinary(n.xhr.responseText), n.type = f.default.TYPE.IMAGE, void(n.data.onload = function() {
                                n.data.onload = null, e()
                            })
                        }
                    e()
                }
            }
            v.__esModule = !0;
            var g = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(n) {
                return typeof n
            } : function(n) {
                return n && typeof Symbol == "function" && n.constructor === Symbol && n !== Symbol.prototype ? "symbol" : typeof n
            };
            v.blobMiddlewareFactory = O;
            var u = w("../../Resource"),
                f = b(u),
                c = w("../../b64"),
                s = b(c),
                i = window.URL || window.webkitURL
        }, {
            "../../Resource": 33,
            "../../b64": 35
        }],
        38: [function(w, j, v) {
            "use strict";

            function b() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            function O(E, _, m) {
                if (E && s.isObject(E) && E instanceof b) return E;
                var M = new b;
                return M.parse(E, _, m), M
            }

            function g(E) {
                return s.isString(E) && (E = O(E)), E instanceof b ? E.format() : b.prototype.format.call(E)
            }

            function u(E, _) {
                return O(E, !1, !0).resolve(_)
            }

            function f(E, _) {
                return E ? O(E, !1, !0).resolveObject(_) : _
            }
            var c = w("punycode"),
                s = w("./util");
            v.parse = O, v.resolve = u, v.resolveObject = f, v.format = g, v.Url = b;
            var i = /^([a-z0-9.+-]+:)/i,
                n = /:[0-9]*$/,
                e = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
                t = ["<", ">", '"', "`", " ", "\r", `
`, "	"],
                r = ["{", "}", "|", "\\", "^", "`"].concat(t),
                o = ["'"].concat(r),
                a = ["%", "/", "?", ";", "#"].concat(o),
                h = ["/", "?", "#"],
                d = 255,
                l = /^[+a-z0-9A-Z_-]{0,63}$/,
                p = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
                y = {
                    javascript: !0,
                    "javascript:": !0
                },
                x = {
                    javascript: !0,
                    "javascript:": !0
                },
                T = {
                    http: !0,
                    https: !0,
                    ftp: !0,
                    gopher: !0,
                    file: !0,
                    "http:": !0,
                    "https:": !0,
                    "ftp:": !0,
                    "gopher:": !0,
                    "file:": !0
                },
                S = w("querystring");
            b.prototype.parse = function(E, _, m) {
                if (!s.isString(E)) throw new TypeError("Parameter 'url' must be a string, not " + typeof E);
                var M = E.indexOf("?"),
                    A = M !== -1 && M < E.indexOf("#") ? "?" : "#",
                    I = E.split(A),
                    N = /\\/g;
                I[0] = I[0].replace(N, "/"), E = I.join(A);
                var P = E;
                if (P = P.trim(), !m && E.split("#").length === 1) {
                    var D = e.exec(P);
                    if (D) return this.path = P, this.href = P, this.pathname = D[1], D[2] ? (this.search = D[2], _ ? this.query = S.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : _ && (this.search = "", this.query = {}), this
                }
                var C = i.exec(P);
                if (C) {
                    C = C[0];
                    var R = C.toLowerCase();
                    this.protocol = R, P = P.substr(C.length)
                }
                if (m || C || P.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                    var F = P.substr(0, 2) === "//";
                    !F || C && x[C] || (P = P.substr(2), this.slashes = !0)
                }
                if (!x[C] && (F || C && !T[C])) {
                    for (var B = -1, L = 0; L < h.length; L++) {
                        var k = P.indexOf(h[L]);
                        k !== -1 && (B === -1 || k < B) && (B = k)
                    }
                    var U, H;
                    H = B === -1 ? P.lastIndexOf("@") : P.lastIndexOf("@", B), H !== -1 && (U = P.slice(0, H), P = P.slice(H + 1), this.auth = decodeURIComponent(U)), B = -1;
                    for (var L = 0; L < a.length; L++) {
                        var k = P.indexOf(a[L]);
                        k !== -1 && (B === -1 || k < B) && (B = k)
                    }
                    B === -1 && (B = P.length), this.host = P.slice(0, B), P = P.slice(B), this.parseHost(), this.hostname = this.hostname || "";
                    var X = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
                    if (!X)
                        for (var W = this.hostname.split(/\./), L = 0, V = W.length; L < V; L++) {
                            var G = W[L];
                            if (G && !G.match(l)) {
                                for (var Y = "", z = 0, K = G.length; z < K; z++) Y += G.charCodeAt(z) > 127 ? "x" : G[z];
                                if (!Y.match(l)) {
                                    var q = W.slice(0, L),
                                        $ = W.slice(L + 1),
                                        J = G.match(p);
                                    J && (q.push(J[1]), $.unshift(J[2])), $.length && (P = "/" + $.join(".") + P), this.hostname = q.join(".");
                                    break
                                }
                            }
                        }
                    this.hostname.length > d ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), X || (this.hostname = c.toASCII(this.hostname));
                    var Q = this.port ? ":" + this.port : "",
                        ee = this.hostname || "";
                    this.host = ee + Q, this.href += this.host, X && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), P[0] !== "/" && (P = "/" + P))
                }
                if (!y[R])
                    for (var L = 0, V = o.length; L < V; L++) {
                        var Z = o[L];
                        if (P.indexOf(Z) !== -1) {
                            var te = encodeURIComponent(Z);
                            te === Z && (te = escape(Z)), P = P.split(Z).join(te)
                        }
                    }
                var re = P.indexOf("#");
                re !== -1 && (this.hash = P.substr(re), P = P.slice(0, re));
                var ie = P.indexOf("?");
                if (ie !== -1 ? (this.search = P.substr(ie), this.query = P.substr(ie + 1), _ && (this.query = S.parse(this.query)), P = P.slice(0, ie)) : _ && (this.search = "", this.query = {}), P && (this.pathname = P), T[R] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                    var Q = this.pathname || "",
                        ae = this.search || "";
                    this.path = Q + ae
                }
                return this.href = this.format(), this
            }, b.prototype.format = function() {
                var E = this.auth || "";
                E && (E = encodeURIComponent(E), E = E.replace(/%3A/i, ":"), E += "@");
                var _ = this.protocol || "",
                    m = this.pathname || "",
                    M = this.hash || "",
                    A = !1,
                    I = "";
                this.host ? A = E + this.host : this.hostname && (A = E + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (A += ":" + this.port)), this.query && s.isObject(this.query) && Object.keys(this.query).length && (I = S.stringify(this.query));
                var N = this.search || I && "?" + I || "";
                return _ && _.substr(-1) !== ":" && (_ += ":"), this.slashes || (!_ || T[_]) && A !== !1 ? (A = "//" + (A || ""), m && m.charAt(0) !== "/" && (m = "/" + m)) : A || (A = ""), M && M.charAt(0) !== "#" && (M = "#" + M), N && N.charAt(0) !== "?" && (N = "?" + N), m = m.replace(/[?#]/g, function(P) {
                    return encodeURIComponent(P)
                }), N = N.replace("#", "%23"), _ + A + m + N + M
            }, b.prototype.resolve = function(E) {
                return this.resolveObject(O(E, !1, !0)).format()
            }, b.prototype.resolveObject = function(E) {
                if (s.isString(E)) {
                    var _ = new b;
                    _.parse(E, !1, !0), E = _
                }
                for (var m = new b, M = Object.keys(this), A = 0; A < M.length; A++) {
                    var I = M[A];
                    m[I] = this[I]
                }
                if (m.hash = E.hash, E.href === "") return m.href = m.format(), m;
                if (E.slashes && !E.protocol) {
                    for (var N = Object.keys(E), P = 0; P < N.length; P++) {
                        var D = N[P];
                        D !== "protocol" && (m[D] = E[D])
                    }
                    return T[m.protocol] && m.hostname && !m.pathname && (m.path = m.pathname = "/"), m.href = m.format(), m
                }
                if (E.protocol && E.protocol !== m.protocol) {
                    if (!T[E.protocol]) {
                        for (var C = Object.keys(E), R = 0; R < C.length; R++) {
                            var F = C[R];
                            m[F] = E[F]
                        }
                        return m.href = m.format(), m
                    }
                    if (m.protocol = E.protocol, E.host || x[E.protocol]) m.pathname = E.pathname;
                    else {
                        for (var V = (E.pathname || "").split("/"); V.length && !(E.host = V.shift()););
                        E.host || (E.host = ""), E.hostname || (E.hostname = ""), V[0] !== "" && V.unshift(""), V.length < 2 && V.unshift(""), m.pathname = V.join("/")
                    }
                    if (m.search = E.search, m.query = E.query, m.host = E.host || "", m.auth = E.auth, m.hostname = E.hostname || E.host, m.port = E.port, m.pathname || m.search) {
                        var B = m.pathname || "",
                            L = m.search || "";
                        m.path = B + L
                    }
                    return m.slashes = m.slashes || E.slashes, m.href = m.format(), m
                }
                var k = m.pathname && m.pathname.charAt(0) === "/",
                    U = E.host || E.pathname && E.pathname.charAt(0) === "/",
                    H = U || k || m.host && E.pathname,
                    X = H,
                    W = m.pathname && m.pathname.split("/") || [],
                    V = E.pathname && E.pathname.split("/") || [],
                    G = m.protocol && !T[m.protocol];
                if (G && (m.hostname = "", m.port = null, m.host && (W[0] === "" ? W[0] = m.host : W.unshift(m.host)), m.host = "", E.protocol && (E.hostname = null, E.port = null, E.host && (V[0] === "" ? V[0] = E.host : V.unshift(E.host)), E.host = null), H = H && (V[0] === "" || W[0] === "")), U) m.host = E.host || E.host === "" ? E.host : m.host, m.hostname = E.hostname || E.hostname === "" ? E.hostname : m.hostname, m.search = E.search, m.query = E.query, W = V;
                else if (V.length) W || (W = []), W.pop(), W = W.concat(V), m.search = E.search, m.query = E.query;
                else if (!s.isNullOrUndefined(E.search)) {
                    if (G) {
                        m.hostname = m.host = W.shift();
                        var Y = !!(m.host && m.host.indexOf("@") > 0) && m.host.split("@");
                        Y && (m.auth = Y.shift(), m.host = m.hostname = Y.shift())
                    }
                    return m.search = E.search, m.query = E.query, s.isNull(m.pathname) && s.isNull(m.search) || (m.path = (m.pathname ? m.pathname : "") + (m.search ? m.search : "")), m.href = m.format(), m
                }
                if (!W.length) return m.pathname = null, m.search ? m.path = "/" + m.search : m.path = null, m.href = m.format(), m;
                for (var z = W.slice(-1)[0], K = (m.host || E.host || W.length > 1) && (z === "." || z === "..") || z === "", q = 0, $ = W.length; $ >= 0; $--) z = W[$], z === "." ? W.splice($, 1) : z === ".." ? (W.splice($, 1), q++) : q && (W.splice($, 1), q--);
                if (!H && !X)
                    for (; q--; q) W.unshift("..");
                !H || W[0] === "" || W[0] && W[0].charAt(0) === "/" || W.unshift(""), K && W.join("/").substr(-1) !== "/" && W.push("");
                var J = W[0] === "" || W[0] && W[0].charAt(0) === "/";
                if (G) {
                    m.hostname = m.host = J ? "" : W.length ? W.shift() : "";
                    var Y = !!(m.host && m.host.indexOf("@") > 0) && m.host.split("@");
                    Y && (m.auth = Y.shift(), m.host = m.hostname = Y.shift())
                }
                return H = H || m.host && W.length, H && !J && W.unshift(""), W.length ? m.pathname = W.join("/") : (m.pathname = null, m.path = null), s.isNull(m.pathname) && s.isNull(m.search) || (m.path = (m.pathname ? m.pathname : "") + (m.search ? m.search : "")), m.auth = E.auth || m.auth, m.slashes = m.slashes || E.slashes, m.href = m.format(), m
            }, b.prototype.parseHost = function() {
                var E = this.host,
                    _ = n.exec(E);
                _ && (_ = _[0], _ !== ":" && (this.port = _.substr(1)), E = E.substr(0, E.length - _.length)), E && (this.hostname = E)
            }
        }, {
            "./util": 39,
            punycode: 27,
            querystring: 30
        }],
        39: [function(w, j, v) {
            "use strict";
            j.exports = {
                isString: function(b) {
                    return typeof b == "string"
                },
                isObject: function(b) {
                    return typeof b == "object" && b !== null
                },
                isNull: function(b) {
                    return b === null
                },
                isNullOrUndefined: function(b) {
                    return b == null
                }
            }
        }, {}],
        40: [function(w, j, v) {
            "use strict";

            function b(x) {
                return x && x.__esModule ? x : {
                    default: x
                }
            }

            function O(x) {
                if (x && x.__esModule) return x;
                var T = {};
                if (x != null)
                    for (var S in x) Object.prototype.hasOwnProperty.call(x, S) && (T[S] = x[S]);
                return T.default = x, T
            }

            function g(x, T) {
                if (!(x instanceof T)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var u = w("../core"),
                f = O(u),
                c = w("ismobilejs"),
                s = b(c),
                i = w("./accessibleTarget"),
                n = b(i);
            f.utils.mixins.delayMixin(f.DisplayObject.prototype, n.default);
            var e = 9,
                t = 100,
                r = 0,
                o = 0,
                a = 2,
                h = 1,
                d = -1e3,
                l = -1e3,
                p = 2,
                y = function() {
                    function x(T) {
                        g(this, x), !s.default.tablet && !s.default.phone || navigator.isCocoonJS || this.createTouchHook();
                        var S = document.createElement("div");
                        S.style.width = t + "px", S.style.height = t + "px", S.style.position = "absolute", S.style.top = r + "px", S.style.left = o + "px", S.style.zIndex = a, this.div = S, this.pool = [], this.renderId = 0, this.debug = !1, this.renderer = T, this.children = [], this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), this.isActive = !1, this.isMobileAccessabillity = !1, window.addEventListener("keydown", this._onKeyDown, !1)
                    }
                    return x.prototype.createTouchHook = function() {
                        var T = this,
                            S = document.createElement("button");
                        S.style.width = h + "px", S.style.height = h + "px", S.style.position = "absolute", S.style.top = d + "px", S.style.left = l + "px", S.style.zIndex = p, S.style.backgroundColor = "#FF0000", S.title = "HOOK DIV", S.addEventListener("focus", function() {
                            T.isMobileAccessabillity = !0, T.activate(), document.body.removeChild(S)
                        }), document.body.appendChild(S)
                    }, x.prototype.activate = function() {
                        this.isActive || (this.isActive = !0, window.document.addEventListener("mousemove", this._onMouseMove, !0), window.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), this.renderer.view.parentNode && this.renderer.view.parentNode.appendChild(this.div))
                    }, x.prototype.deactivate = function() {
                        this.isActive && !this.isMobileAccessabillity && (this.isActive = !1, window.document.removeEventListener("mousemove", this._onMouseMove), window.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), this.div.parentNode && this.div.parentNode.removeChild(this.div))
                    }, x.prototype.updateAccessibleObjects = function(T) {
                        if (T.visible) {
                            T.accessible && T.interactive && (T._accessibleActive || this.addChild(T), T.renderId = this.renderId);
                            for (var S = T.children, E = S.length - 1; E >= 0; E--) this.updateAccessibleObjects(S[E])
                        }
                    }, x.prototype.update = function() {
                        if (this.renderer.renderingToScreen) {
                            this.updateAccessibleObjects(this.renderer._lastObjectRendered);
                            var T = this.renderer.view.getBoundingClientRect(),
                                S = T.width / this.renderer.width,
                                E = T.height / this.renderer.height,
                                _ = this.div;
                            _.style.left = T.left + "px", _.style.top = T.top + "px", _.style.width = this.renderer.width + "px", _.style.height = this.renderer.height + "px";
                            for (var m = 0; m < this.children.length; m++) {
                                var M = this.children[m];
                                if (M.renderId !== this.renderId) M._accessibleActive = !1, f.utils.removeItems(this.children, m, 1), this.div.removeChild(M._accessibleDiv), this.pool.push(M._accessibleDiv), M._accessibleDiv = null, m--, this.children.length === 0 && this.deactivate();
                                else {
                                    _ = M._accessibleDiv;
                                    var A = M.hitArea,
                                        I = M.worldTransform;
                                    M.hitArea ? (_.style.left = (I.tx + A.x * I.a) * S + "px", _.style.top = (I.ty + A.y * I.d) * E + "px", _.style.width = A.width * I.a * S + "px", _.style.height = A.height * I.d * E + "px") : (A = M.getBounds(), this.capHitArea(A), _.style.left = A.x * S + "px", _.style.top = A.y * E + "px", _.style.width = A.width * S + "px", _.style.height = A.height * E + "px")
                                }
                            }
                            this.renderId++
                        }
                    }, x.prototype.capHitArea = function(T) {
                        T.x < 0 && (T.width += T.x, T.x = 0), T.y < 0 && (T.height += T.y, T.y = 0), T.x + T.width > this.renderer.width && (T.width = this.renderer.width - T.x), T.y + T.height > this.renderer.height && (T.height = this.renderer.height - T.y)
                    }, x.prototype.addChild = function(T) {
                        var S = this.pool.pop();
                        S || (S = document.createElement("button"), S.style.width = t + "px", S.style.height = t + "px", S.style.backgroundColor = this.debug ? "rgba(255,0,0,0.5)" : "transparent", S.style.position = "absolute", S.style.zIndex = a, S.style.borderStyle = "none", S.addEventListener("click", this._onClick.bind(this)), S.addEventListener("focus", this._onFocus.bind(this)), S.addEventListener("focusout", this._onFocusOut.bind(this))), T.accessibleTitle ? S.title = T.accessibleTitle : T.accessibleTitle || T.accessibleHint || (S.title = "displayObject " + this.tabIndex), T.accessibleHint && S.setAttribute("aria-label", T.accessibleHint), T._accessibleActive = !0, T._accessibleDiv = S, S.displayObject = T, this.children.push(T), this.div.appendChild(T._accessibleDiv), T._accessibleDiv.tabIndex = T.tabIndex
                    }, x.prototype._onClick = function(T) {
                        var S = this.renderer.plugins.interaction;
                        S.dispatchEvent(T.target.displayObject, "click", S.eventData)
                    }, x.prototype._onFocus = function(T) {
                        var S = this.renderer.plugins.interaction;
                        S.dispatchEvent(T.target.displayObject, "mouseover", S.eventData)
                    }, x.prototype._onFocusOut = function(T) {
                        var S = this.renderer.plugins.interaction;
                        S.dispatchEvent(T.target.displayObject, "mouseout", S.eventData)
                    }, x.prototype._onKeyDown = function(T) {
                        T.keyCode === e && this.activate()
                    }, x.prototype._onMouseMove = function() {
                        this.deactivate()
                    }, x.prototype.destroy = function() {
                        this.div = null;
                        for (var T = 0; T < this.children.length; T++) this.children[T].div = null;
                        window.document.removeEventListener("mousemove", this._onMouseMove), window.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
                    }, x
                }();
            v.default = y, f.WebGLRenderer.registerPlugin("accessibility", y), f.CanvasRenderer.registerPlugin("accessibility", y)
        }, {
            "../core": 65,
            "./accessibleTarget": 41,
            ismobilejs: 4
        }],
        41: [function(w, j, v) {
            "use strict";
            v.__esModule = !0, v.default = {
                accessible: !1,
                accessibleTitle: null,
                accessibleHint: null,
                tabIndex: 0,
                _accessibleActive: !1,
                _accessibleDiv: !1
            }
        }, {}],
        42: [function(w, j, v) {
            "use strict";

            function b(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            v.__esModule = !0;
            var O = w("./accessibleTarget");
            Object.defineProperty(v, "accessibleTarget", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./AccessibilityManager");
            Object.defineProperty(v, "AccessibilityManager", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            })
        }, {
            "./AccessibilityManager": 40,
            "./accessibleTarget": 41
        }],
        43: [function(w, j, v) {
            "use strict";

            function b(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function O(r, o) {
                if (!(r instanceof o)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = function() {
                    function r(o, a) {
                        for (var h = 0; h < a.length; h++) {
                            var d = a[h];
                            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(o, d.key, d)
                        }
                    }
                    return function(o, a, h) {
                        return a && r(o.prototype, a), h && r(o, h), o
                    }
                }(),
                u = w("./autoDetectRenderer"),
                f = w("./display/Container"),
                c = b(f),
                s = w("./ticker"),
                i = w("./settings"),
                n = b(i),
                e = w("./const"),
                t = function() {
                    function r(o, a, h, d, l) {
                        O(this, r), typeof o == "number" && (o = Object.assign({
                            width: o,
                            height: a || n.default.RENDER_OPTIONS.height,
                            forceCanvas: !!d,
                            sharedTicker: !!l
                        }, h)), this._options = o = Object.assign({
                            autoStart: !0,
                            sharedTicker: !1,
                            forceCanvas: !1,
                            sharedLoader: !1
                        }, o), this.renderer = (0, u.autoDetectRenderer)(o), this.stage = new c.default, this._ticker = null, this.ticker = o.sharedTicker ? s.shared : new s.Ticker, o.autoStart && this.start()
                    }
                    return r.prototype.render = function() {
                        this.renderer.render(this.stage)
                    }, r.prototype.stop = function() {
                        this._ticker.stop()
                    }, r.prototype.start = function() {
                        this._ticker.start()
                    }, r.prototype.destroy = function(o) {
                        if (this._ticker) {
                            var a = this._ticker;
                            this.ticker = null, a.destroy()
                        }
                        this.stage.destroy(), this.stage = null, this.renderer.destroy(o), this.renderer = null, this._options = null
                    }, g(r, [{
                        key: "ticker",
                        set: function(o) {
                            this._ticker && this._ticker.remove(this.render, this), this._ticker = o, o && o.add(this.render, this, e.UPDATE_PRIORITY.LOW)
                        },
                        get: function() {
                            return this._ticker
                        }
                    }, {
                        key: "view",
                        get: function() {
                            return this.renderer.view
                        }
                    }, {
                        key: "screen",
                        get: function() {
                            return this.renderer.screen
                        }
                    }]), r
                }();
            v.default = t
        }, {
            "./autoDetectRenderer": 45,
            "./const": 46,
            "./display/Container": 48,
            "./settings": 101,
            "./ticker": 121
        }],
        44: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }

            function f(e, t) {
                if (e instanceof Array) {
                    if (e[0].substring(0, 9) !== "precision") {
                        var r = e.slice(0);
                        return r.unshift("precision " + t + " float;"), r
                    }
                } else if (e.trim().substring(0, 9) !== "precision") return "precision " + t + ` float;
` + e;
                return e
            }
            v.__esModule = !0;
            var c = w("pixi-gl-core"),
                s = w("./settings"),
                i = b(s),
                n = function(e) {
                    function t(r, o, a, h, d) {
                        return O(this, t), g(this, e.call(this, r, f(o, d || i.default.PRECISION_VERTEX), f(a, d || i.default.PRECISION_FRAGMENT), void 0, h))
                    }
                    return u(t, e), t
                }(c.GLShader);
            v.default = n
        }, {
            "./settings": 101,
            "pixi-gl-core": 15
        }],
        45: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function g(e, t, r, o) {
                var a = e && e.forceCanvas;
                return o !== void 0 && (a = o), !a && f.isWebGLSupported() ? new n.default(e, t, r) : new s.default(e, t, r)
            }
            v.__esModule = !0, v.autoDetectRenderer = g;
            var u = w("./utils"),
                f = O(u),
                c = w("./renderers/canvas/CanvasRenderer"),
                s = b(c),
                i = w("./renderers/webgl/WebGLRenderer"),
                n = b(i)
        }, {
            "./renderers/canvas/CanvasRenderer": 77,
            "./renderers/webgl/WebGLRenderer": 84,
            "./utils": 125
        }],
        46: [function(w, j, v) {
            "use strict";
            v.__esModule = !0, v.VERSION = "4.7.3", v.PI_2 = 2 * Math.PI, v.RAD_TO_DEG = 180 / Math.PI, v.DEG_TO_RAD = Math.PI / 180, v.RENDERER_TYPE = {
                UNKNOWN: 0,
                WEBGL: 1,
                CANVAS: 2
            }, v.BLEND_MODES = {
                NORMAL: 0,
                ADD: 1,
                MULTIPLY: 2,
                SCREEN: 3,
                OVERLAY: 4,
                DARKEN: 5,
                LIGHTEN: 6,
                COLOR_DODGE: 7,
                COLOR_BURN: 8,
                HARD_LIGHT: 9,
                SOFT_LIGHT: 10,
                DIFFERENCE: 11,
                EXCLUSION: 12,
                HUE: 13,
                SATURATION: 14,
                COLOR: 15,
                LUMINOSITY: 16,
                NORMAL_NPM: 17,
                ADD_NPM: 18,
                SCREEN_NPM: 19
            }, v.DRAW_MODES = {
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6
            }, v.SCALE_MODES = {
                LINEAR: 0,
                NEAREST: 1
            }, v.WRAP_MODES = {
                CLAMP: 0,
                REPEAT: 1,
                MIRRORED_REPEAT: 2
            }, v.GC_MODES = {
                AUTO: 0,
                MANUAL: 1
            }, v.URL_FILE_EXTENSION = /\.(\w{3,4})(?:$|\?|#)/i, v.DATA_URI = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;(charset=[\w-]+|base64))?,(.*)/i, v.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i, v.SHAPES = {
                POLY: 0,
                RECT: 1,
                CIRC: 2,
                ELIP: 3,
                RREC: 4
            }, v.PRECISION = {
                LOW: "lowp",
                MEDIUM: "mediump",
                HIGH: "highp"
            }, v.TRANSFORM_MODE = {
                STATIC: 0,
                DYNAMIC: 1
            }, v.TEXT_GRADIENT = {
                LINEAR_VERTICAL: 0,
                LINEAR_HORIZONTAL: 1
            }, v.UPDATE_PRIORITY = {
                INTERACTION: 50,
                HIGH: 25,
                NORMAL: 0,
                LOW: -25,
                UTILITY: -50
            }
        }, {}],
        47: [function(w, j, v) {
            "use strict";

            function b(u, f) {
                if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = w("../math"),
                g = function() {
                    function u() {
                        b(this, u), this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0), this.rect = null
                    }
                    return u.prototype.isEmpty = function() {
                        return this.minX > this.maxX || this.minY > this.maxY
                    }, u.prototype.clear = function() {
                        this.updateID++, this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -(1 / 0), this.maxY = -(1 / 0)
                    }, u.prototype.getRectangle = function(f) {
                        return this.minX > this.maxX || this.minY > this.maxY ? O.Rectangle.EMPTY : (f = f || new O.Rectangle(0, 0, 1, 1), f.x = this.minX, f.y = this.minY, f.width = this.maxX - this.minX, f.height = this.maxY - this.minY, f)
                    }, u.prototype.addPoint = function(f) {
                        this.minX = Math.min(this.minX, f.x), this.maxX = Math.max(this.maxX, f.x), this.minY = Math.min(this.minY, f.y), this.maxY = Math.max(this.maxY, f.y)
                    }, u.prototype.addQuad = function(f) {
                        var c = this.minX,
                            s = this.minY,
                            i = this.maxX,
                            n = this.maxY,
                            e = f[0],
                            t = f[1];
                        c = e < c ? e : c, s = t < s ? t : s, i = e > i ? e : i, n = t > n ? t : n, e = f[2], t = f[3], c = e < c ? e : c, s = t < s ? t : s, i = e > i ? e : i, n = t > n ? t : n, e = f[4], t = f[5], c = e < c ? e : c, s = t < s ? t : s, i = e > i ? e : i, n = t > n ? t : n, e = f[6], t = f[7], c = e < c ? e : c, s = t < s ? t : s, i = e > i ? e : i, n = t > n ? t : n, this.minX = c, this.minY = s, this.maxX = i, this.maxY = n
                    }, u.prototype.addFrame = function(f, c, s, i, n) {
                        var e = f.worldTransform,
                            t = e.a,
                            r = e.b,
                            o = e.c,
                            a = e.d,
                            h = e.tx,
                            d = e.ty,
                            l = this.minX,
                            p = this.minY,
                            y = this.maxX,
                            x = this.maxY,
                            T = t * c + o * s + h,
                            S = r * c + a * s + d;
                        l = T < l ? T : l, p = S < p ? S : p, y = T > y ? T : y, x = S > x ? S : x, T = t * i + o * s + h, S = r * i + a * s + d, l = T < l ? T : l, p = S < p ? S : p, y = T > y ? T : y, x = S > x ? S : x, T = t * c + o * n + h, S = r * c + a * n + d, l = T < l ? T : l, p = S < p ? S : p, y = T > y ? T : y, x = S > x ? S : x, T = t * i + o * n + h, S = r * i + a * n + d, l = T < l ? T : l, p = S < p ? S : p, y = T > y ? T : y, x = S > x ? S : x, this.minX = l, this.minY = p, this.maxX = y, this.maxY = x
                    }, u.prototype.addVertices = function(f, c, s, i) {
                        for (var n = f.worldTransform, e = n.a, t = n.b, r = n.c, o = n.d, a = n.tx, h = n.ty, d = this.minX, l = this.minY, p = this.maxX, y = this.maxY, x = s; x < i; x += 2) {
                            var T = c[x],
                                S = c[x + 1],
                                E = e * T + r * S + a,
                                _ = o * S + t * T + h;
                            d = E < d ? E : d, l = _ < l ? _ : l, p = E > p ? E : p, y = _ > y ? _ : y
                        }
                        this.minX = d, this.minY = l, this.maxX = p, this.maxY = y
                    }, u.prototype.addBounds = function(f) {
                        var c = this.minX,
                            s = this.minY,
                            i = this.maxX,
                            n = this.maxY;
                        this.minX = f.minX < c ? f.minX : c, this.minY = f.minY < s ? f.minY : s, this.maxX = f.maxX > i ? f.maxX : i, this.maxY = f.maxY > n ? f.maxY : n
                    }, u.prototype.addBoundsMask = function(f, c) {
                        var s = f.minX > c.minX ? f.minX : c.minX,
                            i = f.minY > c.minY ? f.minY : c.minY,
                            n = f.maxX < c.maxX ? f.maxX : c.maxX,
                            e = f.maxY < c.maxY ? f.maxY : c.maxY;
                        if (s <= n && i <= e) {
                            var t = this.minX,
                                r = this.minY,
                                o = this.maxX,
                                a = this.maxY;
                            this.minX = s < t ? s : t, this.minY = i < r ? i : r, this.maxX = n > o ? n : o, this.maxY = e > a ? e : a
                        }
                    }, u.prototype.addBoundsArea = function(f, c) {
                        var s = f.minX > c.x ? f.minX : c.x,
                            i = f.minY > c.y ? f.minY : c.y,
                            n = f.maxX < c.x + c.width ? f.maxX : c.x + c.width,
                            e = f.maxY < c.y + c.height ? f.maxY : c.y + c.height;
                        if (s <= n && i <= e) {
                            var t = this.minX,
                                r = this.minY,
                                o = this.maxX,
                                a = this.maxY;
                            this.minX = s < t ? s : t, this.minY = i < r ? i : r, this.maxX = n > o ? n : o, this.maxY = e > a ? e : a
                        }
                    }, u
                }();
            v.default = g
        }, {
            "../math": 70
        }],
        48: [function(w, j, v) {
            "use strict";

            function b(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function O(r, o) {
                if (!(r instanceof o)) throw new TypeError("Cannot call a class as a function")
            }

            function g(r, o) {
                if (!r) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !o || typeof o != "object" && typeof o != "function" ? r : o
            }

            function u(r, o) {
                if (typeof o != "function" && o !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof o);
                r.prototype = Object.create(o && o.prototype, {
                    constructor: {
                        value: r,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), o && (Object.setPrototypeOf ? Object.setPrototypeOf(r, o) : r.__proto__ = o)
            }

            function f(r) {
                r instanceof t ? (r.emit("addedToStage"), r.children.map(function(o) {
                    f(o)
                })) : r.emit("addedToStage")
            }

            function c(r) {
                r instanceof t ? (r.emit("removedFromStage"), r.children.map(function(o) {
                    c(o)
                })) : (r.emit("removedFromStage"), r.root = void 0)
            }
            v.__esModule = !0;
            var s = function() {
                    function r(o, a) {
                        for (var h = 0; h < a.length; h++) {
                            var d = a[h];
                            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(o, d.key, d)
                        }
                    }
                    return function(o, a, h) {
                        return a && r(o.prototype, a), h && r(o, h), o
                    }
                }(),
                i = w("../utils"),
                n = w("./DisplayObject"),
                e = b(n),
                t = function(r) {
                    function o() {
                        O(this, o);
                        var a = g(this, r.call(this));
                        return a.children = [], a
                    }
                    return u(o, r), o.prototype.onChildrenChange = function() {}, o.prototype.addChild = function(a) {
                        var h = arguments.length;
                        if (h > 1)
                            for (var d = 0; d < h; d++) this.addChild(arguments[d]);
                        else a.parent && a.parent.removeChild(a), a.parent = this, a.transform._parentID = -1, this.children.push(a), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.root instanceof o.RootClass ? f(a) : this.root = void 0, a.emit("added", this);
                        return a
                    }, o.prototype.addChildAt = function(a, h) {
                        if (h < 0 || h > this.children.length) throw new Error(a + "addChildAt: The index " + h + " supplied is out of bounds " + this.children.length);
                        return a.parent && a.parent.removeChild(a), a.parent = this, a.transform._parentID = -1, this.children.splice(h, 0, a), this._boundsID++, this.onChildrenChange(h), this.root instanceof o.RootClass ? f(a) : this.root = void 0, a.emit("added", this), a
                    }, o.prototype.swapChildren = function(a, h) {
                        if (a !== h) {
                            var d = this.getChildIndex(a),
                                l = this.getChildIndex(h);
                            this.children[d] = h, this.children[l] = a, this.onChildrenChange(d < l ? d : l)
                        }
                    }, o.prototype.getChildIndex = function(a) {
                        var h = this.children.indexOf(a);
                        if (h === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
                        return h
                    }, o.prototype.setChildIndex = function(a, h) {
                        if (h < 0 || h >= this.children.length) throw new Error("The index " + h + " supplied is out of bounds " + this.children.length);
                        var d = this.getChildIndex(a);
                        (0, i.removeItems)(this.children, d, 1), this.children.splice(h, 0, a), this.onChildrenChange(h)
                    }, o.prototype.getChildAt = function(a) {
                        if (a < 0 || a >= this.children.length) throw new Error("getChildAt: Index (" + a + ") does not exist.");
                        return this.children[a]
                    }, o.prototype.removeChild = function(a) {
                        var h = arguments.length;
                        if (h > 1)
                            for (var d = 0; d < h; d++) this.removeChild(arguments[d]);
                        else {
                            var l = this.children.indexOf(a);
                            if (l === -1) return null;
                            a.parent = null, a.transform._parentID = -1, (0, i.removeItems)(this.children, l, 1), this._boundsID++, this.onChildrenChange(l), c(a), a.emit("removed", this)
                        }
                        return a
                    }, o.prototype.removeChildAt = function(a) {
                        var h = this.getChildAt(a);
                        return h.parent = null, h.transform._parentID = -1, (0, i.removeItems)(this.children, a, 1), this._boundsID++, this.onChildrenChange(a), c(h), h.emit("removed", this), h
                    }, o.prototype.addChildWithSamePos = function(a) {
                        var h = this.toLocal({
                            x: 0,
                            y: 0
                        }, a);
                        a.x = h.x, a.y = h.y, this.addChild(a)
                    }, o.prototype.addChildAtWithSamePos = function(a, h) {
                        var d = this.toLocal({
                            x: 0,
                            y: 0
                        }, a);
                        a.x = d.x, a.y = d.y, this.addChildAt(a, h)
                    }, o.prototype.removeChildren = function() {
                        var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            h = arguments[1],
                            d = a,
                            l = typeof h == "number" ? h : this.children.length,
                            p = l - d,
                            y = void 0;
                        if (p > 0 && p <= l) {
                            y = this.children.splice(d, p);
                            for (var x = 0; x < y.length; ++x) y[x].parent = null, y[x].transform && (y[x].transform._parentID = -1);
                            this._boundsID++, this.onChildrenChange(a);
                            for (var T = 0; T < y.length; ++T) c(y[T]), y[T].emit("removed", this);
                            return y
                        }
                        if (p === 0 && this.children.length === 0) return [];
                        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
                    }, o.prototype.updateTransform = function() {
                        if (this.visible && this.parent) {
                            this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
                            for (var a = 0, h = this.children.length; a < h; ++a) {
                                var d = this.children[a];
                                d.visible && d.updateTransform()
                            }
                        }
                    }, o.prototype.calculateBounds = function() {
                        this._bounds.clear(), this._calculateBounds();
                        for (var a = 0; a < this.children.length; a++) {
                            var h = this.children[a];
                            h.visible && h.renderable && h.allowGetBounds && (h.calculateBounds(), h._mask ? (h._mask.calculateBounds(), this._bounds.addBoundsMask(h._bounds, h._mask._bounds)) : h.filterArea ? this._bounds.addBoundsArea(h._bounds, h.filterArea) : this._bounds.addBounds(h._bounds))
                        }
                        this._lastBoundsID = this._boundsID
                    }, o.prototype.clone = function() {
                        if (this._nbData_ !== void 0) {
                            var a = this.name,
                                h = this.root.createChildFromData(this.parent, this._nbData_, this._textureMapName_);
                            return a && (this.parent[a] = this), h
                        }
                        return console.warn("\u65E0\u6CD5\u514B\u9686"), null
                    }, o.prototype._calculateBounds = function() {}, o.prototype.renderWebGL = function(a) {
                        if (this.visible && !(this.worldAlpha <= 0) && this.renderable)
                            if (this._mask || this._filters) this.renderAdvancedWebGL(a);
                            else {
                                this._renderWebGL(a);
                                for (var h = 0, d = this.children.length; h < d; ++h) this.children[h].renderWebGL(a)
                            }
                    }, o.prototype.renderAdvancedWebGL = function(a) {
                        a.flush();
                        var h = this._filters,
                            d = this._mask;
                        if (h) {
                            this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
                            for (var l = 0; l < h.length; l++) h[l].enabled && this._enabledFilters.push(h[l]);
                            this._enabledFilters.length && a.filterManager.pushFilter(this, this._enabledFilters)
                        }
                        d && a.maskManager.pushMask(this, this._mask), this._renderWebGL(a);
                        for (var p = 0, y = this.children.length; p < y; p++) this.children[p].renderWebGL(a);
                        a.flush(), d && a.maskManager.popMask(this, this._mask), h && this._enabledFilters && this._enabledFilters.length && a.filterManager.popFilter()
                    }, o.prototype._renderWebGL = function(a) {}, o.prototype._renderCanvas = function(a) {}, o.prototype.renderCanvas = function(a) {
                        if (this.visible && !(this.worldAlpha <= 0) && this.renderable) {
                            this._mask && a.maskManager.pushMask(this._mask), this._renderCanvas(a);
                            for (var h = 0, d = this.children.length; h < d; ++h) this.children[h].renderCanvas(a);
                            this._mask && a.maskManager.popMask(a)
                        }
                    }, o.prototype.destroy = function(a) {
                        r.prototype.destroy.call(this);
                        var h = typeof a == "boolean" ? a : a && a.children,
                            d = this.removeChildren(0, this.children.length);
                        if (h)
                            for (var l = 0; l < d.length; ++l) d[l].destroy(a)
                    }, s(o, [{
                        key: "width",
                        get: function() {
                            return this.scale.x * this.getLocalBounds().width
                        },
                        set: function(a) {
                            var h = this.getLocalBounds().width;
                            h !== 0 ? this.scale.x = a / h : this.scale.x = 1, this._width = a
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.scale.y * this.getLocalBounds().height
                        },
                        set: function(a) {
                            var h = this.getLocalBounds().height;
                            h !== 0 ? this.scale.y = a / h : this.scale.y = 1, this._height = a
                        }
                    }]), o
                }(e.default);
            v.default = t, t.RootClass = t, t.prototype.containerGetBounds = t.prototype.getBounds, t.prototype.containerUpdateTransform = t.prototype.updateTransform
        }, {
            "../utils": 125,
            "./DisplayObject": 49
        }],
        49: [function(w, j, v) {
            "use strict";

            function b(T) {
                return T && T.__esModule ? T : {
                    default: T
                }
            }

            function O(T, S) {
                if (!(T instanceof S)) throw new TypeError("Cannot call a class as a function")
            }

            function g(T, S) {
                if (!T) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !S || typeof S != "object" && typeof S != "function" ? T : S
            }

            function u(T, S) {
                if (typeof S != "function" && S !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof S);
                T.prototype = Object.create(S && S.prototype, {
                    constructor: {
                        value: T,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(T, S) : T.__proto__ = S)
            }

            function f(T, S, E) {
                this.fn = T, this.context = S, this.once = E || !1, this.bubble = !1, this.capture = !1
            }
            v.__esModule = !0;
            var c = function() {
                    function T(S, E) {
                        for (var _ = 0; _ < E.length; _++) {
                            var m = E[_];
                            m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(S, m.key, m)
                        }
                    }
                    return function(S, E, _) {
                        return E && T(S.prototype, E), _ && T(S, _), S
                    }
                }(),
                s = w("eventemitter3"),
                i = b(s),
                n = w("../const"),
                e = w("../settings"),
                t = b(e),
                r = w("./TransformStatic"),
                o = b(r),
                a = w("./Transform"),
                h = b(a),
                d = w("./Bounds"),
                l = b(d),
                p = w("../math"),
                y = "",
                x = function(T) {
                    function S() {
                        O(this, S);
                        var _ = g(this, T.call(this)),
                            m = t.default.TRANSFORM_MODE === n.TRANSFORM_MODE.STATIC ? o.default : h.default;
                        return _.tempDisplayObjectParent = null, _.transform = new m, _.alpha = 1, _.visible = !0, _.renderable = !0, _.parent = null, _.worldAlpha = 1, _.filterArea = null, _._filters = null, _._enabledFilters = null, _._bounds = new l.default, _._boundsID = 0, _._lastBoundsID = -1, _._boundsRect = null, _._localBoundsRect = null, _._mask = null, _._destroyed = !1, _.allowGetBounds = !0, _
                    }
                    u(S, T), S.prototype.updateTransform = function() {
                        this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha, this._bounds.updateID++
                    }, S.prototype._recursivePostUpdateTransform = function() {
                        this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
                    }, S.prototype.getBounds = function(_, m) {
                        return this.allowGetBounds === !1 ? p.Rectangle.EMPTY : (_ || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._boundsID !== this._lastBoundsID && this.calculateBounds(), m || (this._boundsRect || (this._boundsRect = new p.Rectangle), m = this._boundsRect), this._bounds.getRectangle(m))
                    }, S.prototype.getLocalBounds = function(_) {
                        var m = this.transform,
                            M = this.parent;
                        this.parent = null, this.transform = this._tempDisplayObjectParent.transform, _ || (this._localBoundsRect || (this._localBoundsRect = new p.Rectangle), _ = this._localBoundsRect);
                        var A = this.getBounds(!1, _);
                        return this.parent = M, this.transform = m, A
                    }, S.prototype.toGlobal = function(_, m) {
                        var M = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
                        return M || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(_, m)
                    }, S.prototype.toLocal = function(_, m, M, A) {
                        return m && (_ = m.toGlobal(_, M, A)), A || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(_, M)
                    }, S.prototype.renderWebGL = function(_) {}, S.prototype.renderCanvas = function(_) {}, S.prototype.setParent = function(_) {
                        if (!_ || !_.addChild) throw new Error("setParent: Argument must be a Container");
                        return _.addChild(this), _
                    }, S.prototype.setTransform = function() {
                        var _ = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            M = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
                            A = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1,
                            I = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
                            N = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0,
                            P = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : 0,
                            D = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : 0,
                            C = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : 0;
                        return this.position.x = _, this.position.y = m, this.scale.x = M || 1, this.scale.y = A || 1, this.rotation = I, this.skew.x = N, this.skew.y = P, this.pivot.x = D, this.pivot.y = C, this
                    }, S.prototype.destroy = function() {
                        this.removeAllListeners(), this.parent && this.parent.removeChild(this), this.transform = null, this.parent = null, this._bounds = null, this._currentBounds = null, this._mask = null, this.filterArea = null, this.interactive = !1, this.interactiveChildren = !1, this._destroyed = !0
                    }, S.prototype.addEventListener = function() {
                        this.interactive = !0, this.on.apply(this, arguments)
                    }, S.prototype.dispatchEvent = function() {
                        this.emit.apply(this, arguments)
                    }, S.prototype.hitTest = function(_) {
                        function m(U, H, X, W) {
                            var V = (H.y - U.y) * (W.x - X.x) - (U.x - H.x) * (X.y - W.y);
                            if (V == 0) return !1;
                            var G = ((H.x - U.x) * (W.x - X.x) * (X.y - U.y) + (H.y - U.y) * (W.x - X.x) * U.x - (W.y - X.y) * (H.x - U.x) * X.x) / V,
                                Y = -((H.y - U.y) * (W.y - X.y) * (X.x - U.x) + (H.x - U.x) * (W.y - X.y) * U.y - (W.x - X.x) * (H.y - U.y) * X.y) / V,
                                z = 1e-6;
                            return (G - U.x) * (G - H.x) <= z && (Y - U.y) * (Y - H.y) <= z && (G - X.x) * (G - W.x) <= z && (Y - X.y) * (Y - W.y) <= z && {
                                x: G,
                                y: Y
                            }
                        }

                        function M() {
                            for (var U = [P, D, R, C], H = [F, B, k, L], X = 0; X < U.length; X++)
                                for (var W = U[X], V = U[(X + 1) % U.length], G = 0; G < H.length; G++) {
                                    var Y = H[G],
                                        z = H[(G + 1) % H.length];
                                    if (m(W, V, Y, z)) return m(W, V, Y, z), !0
                                }
                            for (var X = 0; X < U.length; X++)
                                if (A(H, U[X])) return !0;
                            for (var X = 0; X < H.length; X++)
                                if (A(U, H[X])) return !0;
                            return !1
                        }

                        function A(U, H) {
                            for (var X = H.x, W = H.y, V = !1, G = 0, Y = U.length - 1; G < U.length; Y = G++) {
                                var z = U[G].x,
                                    K = U[G].y,
                                    q = U[Y].x,
                                    $ = U[Y].y,
                                    J = K > W != $ > W && X < (q - z) * (W - K) / ($ - K) + z;
                                J && (V = !V)
                            }
                            return V
                        }
                        var I = this.getLocalBounds().clone(),
                            N = _.getLocalBounds().clone();
                        this.updateTransform(), _.updateTransform();
                        var P = (this.getBounds(), _.getBounds(), this.toGlobal({
                                x: I.x,
                                y: I.y
                            })),
                            D = this.toGlobal({
                                x: I.x + I.width,
                                y: I.y
                            }),
                            C = this.toGlobal({
                                x: I.x,
                                y: I.y + I.height
                            }),
                            R = this.toGlobal({
                                x: I.x + I.width,
                                y: I.y + I.height
                            }),
                            F = _.toGlobal({
                                x: N.x,
                                y: N.y
                            }),
                            B = _.toGlobal({
                                x: N.x + N.width,
                                y: N.y
                            }),
                            L = _.toGlobal({
                                x: N.x,
                                y: N.y + N.height
                            }),
                            k = _.toGlobal({
                                x: N.x + N.width,
                                y: N.y + N.height
                            });
                        return M()
                    }, S.prototype.hitTestPoint = function(_) {
                        var m = this.getBounds();
                        return m.contains(_.x, _.y)
                    }, S.prototype.function = function(_, m, M, A, I, N) {
                        var P = _;
                        if (m && m.capture === void 0 && (m.capture = !1), !this._events || !this._events[P]) return !1;
                        var D, C, R = this._events[P],
                            F = arguments.length;
                        if (typeof R.fn == "function")
                            if (R.once && this.removeListener(_, R.fn, void 0, !0), m !== void 0) {
                                for (C = 1, D = []; C < F; C++) D[C - 1] = arguments[C];
                                R.capture !== m.capture && m.capture !== void 0 || R.fn.apply(R.context, D)
                            } else R.fn.call(R.context);
                        else {
                            var B, L = R.length;
                            for (C = 0; C < L && (R[C].once && this.removeListener(_, R[C].fn, void 0, !0), !m || m.stopImmediate !== !0); C++)
                                if (m !== void 0) {
                                    for (B = 1, D = []; B < F; B++) D[B - 1] = arguments[B];
                                    R[C].capture !== m.capture && m.capture !== void 0 || R[C].fn.apply(R[C].context, D)
                                } else R[C].fn.apply(R[C].context)
                        }
                        return !0
                    }, S.prototype.removeEventListener = function() {
                        this.removeListener.apply(this, arguments)
                    }, S.prototype.removeListener = function(_, m, M, A) {
                        var I = _;
                        if (!this._events || !this._events[I]) return this;
                        var N = this._events[I],
                            P = [];
                        if (m) {
                            if (N.fn)(N.fn !== m || A && !N.once || !N.capture === M) && P.push(N);
                            else
                                for (var D = 0, C = N.length; D < C; D++)(N[D].fn !== m || A && !N[D].once || !N[D].capture === M) && P.push(N[D]);
                            return P.length ? this._events[I] = P.length === 1 ? P[0] : P : delete this._events[I], this
                        }
                    }, S.prototype.once = function(_, m, M) {
                        var A = new f(m, M || this, !0),
                            I = _;
                        return this._events || (this._events = Object.create(null)), this._events[I] ? this._events[I].fn ? this._events[I] = [this._events[I], A] : this._events[I].push(A) : this._events[I] = A, this
                    }, S.prototype.on = function(_, m, M, A) {
                        var I = new f(m, this),
                            N = _;
                        if (M === void 0 && (M = !1), I.capture = M, I.priority = A || 0, this._events || (this._events = Object.create(null)), this._events[N]) {
                            var P = this._events[N];
                            if (P.fn) P.fn !== I.fn && (P = [P, I], this._events[N] = P);
                            else {
                                for (var D = 0; D < P.length; D++) {
                                    var C = P[D];
                                    if (C.fn === m) break
                                }
                                D === P.length && P.push(I)
                            }
                            P instanceof Array && P.sort(function(R, F) {
                                return F.priority - R.priority
                            })
                        } else this._events[N] = I;
                        return this
                    }, S.prototype.emit = function(_, m, M, A, I, N) {
                        var P = y ? y + _ : _;
                        if (!m || m.capture !== void 0 || (typeof m == "undefined" ? "undefined" : E(m)) !== "object" && typeof m != "function" || (m.capture = !1), !this._events || !this._events[P]) return !1;
                        var D, C, R = this._events[P],
                            F = arguments.length;
                        if (typeof R.fn == "function")
                            if (R.once && this.removeListener(_, R.fn, void 0, !0), m !== void 0) {
                                for (C = 1, D = []; C < F; C++) D[C - 1] = arguments[C];
                                R.capture !== m.capture && m.capture !== void 0 || R.fn.apply(R.context, D)
                            } else R.fn.call(R.context);
                        else {
                            var B, L = R.length;
                            for (C = 0; C < L && (R[C].once && this.removeListener(_, R[C].fn, void 0, !0), !m || m.stopImmediate !== !0); C++)
                                if (m !== void 0) {
                                    for (B = 1, D = []; B < F; B++) D[B - 1] = arguments[B];
                                    R[C].capture !== m.capture && m.capture !== void 0 || R[C].fn.apply(R[C].context, D)
                                } else R[C].fn.apply(R[C].context)
                        }
                        return !0
                    };
                    var E = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(_) {
                        return typeof _
                    } : function(_) {
                        return _ && typeof Symbol == "function" && _.constructor === Symbol && _ !== Symbol.prototype ? "symbol" : typeof _
                    };
                    return c(S, [{
                        key: "_tempDisplayObjectParent",
                        get: function() {
                            return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new S), this.tempDisplayObjectParent
                        }
                    }, {
                        key: "root",
                        get: function() {
                            if (this._root_ === void 0)
                                for (var _ = this;;) {
                                    if (_.parent === null) {
                                        this._root_ = _;
                                        break
                                    }
                                    _ = _.parent
                                }
                            return this._root_
                        },
                        set: function(_) {
                            this._root_ = _
                        }
                    }, {
                        key: "currentEquipment",
                        get: function() {
                            if (this._currentEq_ === void 0) {
                                if (window.chemical === void 0) return;
                                for (var _ = this; _;) {
                                    if (_ instanceof chemical.core.BaseEquipment) return this._currentEq_ = _, _;
                                    _ = _.parent
                                }
                            }
                            return this._currentEq_
                        },
                        set: function(_) {
                            this._currentEq_ = _
                        }
                    }, {
                        key: "x",
                        get: function() {
                            return this.position.x
                        },
                        set: function(_) {
                            this.transform.position.x = _
                        }
                    }, {
                        key: "y",
                        get: function() {
                            return this.position.y
                        },
                        set: function(_) {
                            this.transform.position.y = _
                        }
                    }, {
                        key: "worldTransform",
                        get: function() {
                            return this.transform.worldTransform
                        }
                    }, {
                        key: "localTransform",
                        get: function() {
                            return this.transform.localTransform
                        }
                    }, {
                        key: "position",
                        get: function() {
                            return this.transform.position
                        },
                        set: function(_) {
                            this.transform.position.copy(_)
                        }
                    }, {
                        key: "scale",
                        get: function() {
                            return this.transform.scale
                        },
                        set: function(_) {
                            this.transform.scale.copy(_)
                        }
                    }, {
                        key: "pivot",
                        get: function() {
                            return this.transform.pivot
                        },
                        set: function(_) {
                            this.transform.pivot.copy(_)
                        }
                    }, {
                        key: "skew",
                        get: function() {
                            return this.transform.skew
                        },
                        set: function(_) {
                            this.transform.skew.copy(_)
                        }
                    }, {
                        key: "rotation",
                        get: function() {
                            return this.transform.rotation
                        },
                        set: function(_) {
                            this.transform.rotation = _
                        }
                    }, {
                        key: "worldVisible",
                        get: function() {
                            var _ = this;
                            do {
                                if (!_.visible) return !1;
                                _ = _.parent
                            } while (_);
                            return !0
                        }
                    }, {
                        key: "mask",
                        get: function() {
                            return this._mask
                        },
                        set: function(_) {
                            this._mask && (this._mask.renderable = !0, this._mask.isMask = !1), this._mask = _, this._mask && (this._mask.renderable = !1, this._mask.isMask = !0)
                        }
                    }, {
                        key: "filters",
                        get: function() {
                            return this._filters && this._filters.slice()
                        },
                        set: function(_) {
                            this._filters = _ && _.slice()
                        }
                    }]), S
                }(i.default);
            v.default = x, x.prototype.has = i.default.prototype.hasEventListener = function(T) {
                var S = y ? y + T : T;
                return !(!this._events || !this._events[S])
            }, x.prototype.displayObjectUpdateTransform = x.prototype.updateTransform
        }, {
            "../const": 46,
            "../math": 70,
            "../settings": 101,
            "./Bounds": 47,
            "./Transform": 50,
            "./TransformStatic": 52,
            eventemitter3: 3
        }],
        50: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            v.__esModule = !0;
            var f = function() {
                    function e(t, r) {
                        for (var o = 0; o < r.length; o++) {
                            var a = r[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                c = w("../math"),
                s = w("./TransformBase"),
                i = b(s),
                n = function(e) {
                    function t() {
                        O(this, t);
                        var r = g(this, e.call(this));
                        return r.position = new c.Point(0, 0), r.scale = new c.Point(1, 1), r.skew = new c.ObservablePoint(r.updateSkew, r, 0, 0), r.pivot = new c.Point(0, 0), r._rotation = 0, r._cx = 1, r._sx = 0, r._cy = 0, r._sy = 1, r
                    }
                    return u(t, e), t.prototype.updateSkew = function() {
                        this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x)
                    }, t.prototype.updateLocalTransform = function() {
                        var r = this.localTransform;
                        r.a = this._cx * this.scale.x, r.b = this._sx * this.scale.x, r.c = this._cy * this.scale.y, r.d = this._sy * this.scale.y, r.tx = this.position.x - (this.pivot.x * r.a + this.pivot.y * r.c), r.ty = this.position.y - (this.pivot.x * r.b + this.pivot.y * r.d)
                    }, t.prototype.updateTransform = function(r) {
                        var o = this.localTransform;
                        o.a = this._cx * this.scale.x, o.b = this._sx * this.scale.x, o.c = this._cy * this.scale.y, o.d = this._sy * this.scale.y, o.tx = this.position.x - (this.pivot.x * o.a + this.pivot.y * o.c), o.ty = this.position.y - (this.pivot.x * o.b + this.pivot.y * o.d);
                        var a = r.worldTransform,
                            h = this.worldTransform;
                        h.a = o.a * a.a + o.b * a.c, h.b = o.a * a.b + o.b * a.d, h.c = o.c * a.a + o.d * a.c, h.d = o.c * a.b + o.d * a.d, h.tx = o.tx * a.a + o.ty * a.c + a.tx, h.ty = o.tx * a.b + o.ty * a.d + a.ty, this._worldID++
                    }, t.prototype.setFromMatrix = function(r) {
                        r.decompose(this)
                    }, f(t, [{
                        key: "rotation",
                        get: function() {
                            return this._rotation
                        },
                        set: function(r) {
                            this._rotation = r, this.updateSkew()
                        }
                    }]), t
                }(i.default);
            v.default = n
        }, {
            "../math": 70,
            "./TransformBase": 51
        }],
        51: [function(w, j, v) {
            "use strict";

            function b(u, f) {
                if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = w("../math"),
                g = function() {
                    function u() {
                        b(this, u), this.worldTransform = new O.Matrix, this.localTransform = new O.Matrix, this._worldID = 0, this._parentID = 0
                    }
                    return u.prototype.updateLocalTransform = function() {}, u.prototype.updateTransform = function(f) {
                        var c = f.worldTransform,
                            s = this.worldTransform,
                            i = this.localTransform;
                        s.a = i.a * c.a + i.b * c.c, s.b = i.a * c.b + i.b * c.d, s.c = i.c * c.a + i.d * c.c, s.d = i.c * c.b + i.d * c.d, s.tx = i.tx * c.a + i.ty * c.c + c.tx, s.ty = i.tx * c.b + i.ty * c.d + c.ty, this._worldID++
                    }, u
                }();
            v.default = g, g.prototype.updateWorldTransform = g.prototype.updateTransform, g.IDENTITY = new g
        }, {
            "../math": 70
        }],
        52: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            v.__esModule = !0;
            var f = function() {
                    function e(t, r) {
                        for (var o = 0; o < r.length; o++) {
                            var a = r[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                c = w("../math"),
                s = w("./TransformBase"),
                i = b(s),
                n = function(e) {
                    function t() {
                        O(this, t);
                        var r = g(this, e.call(this));
                        return r.position = new c.ObservablePoint(r.onChange, r, 0, 0), r.scale = new c.ObservablePoint(r.onChange, r, 1, 1), r.pivot = new c.ObservablePoint(r.onChange, r, 0, 0), r.skew = new c.ObservablePoint(r.updateSkew, r, 0, 0), r._rotation = 0, r._cx = 1, r._sx = 0, r._cy = 0, r._sy = 1, r._localID = 0, r._currentLocalID = 0, r
                    }
                    return u(t, e), t.prototype.onChange = function() {
                        this._localID++
                    }, t.prototype.updateSkew = function() {
                        this._cx = Math.cos(this._rotation + this.skew._y), this._sx = Math.sin(this._rotation + this.skew._y), this._cy = -Math.sin(this._rotation - this.skew._x), this._sy = Math.cos(this._rotation - this.skew._x), this._localID++
                    }, t.prototype.updateLocalTransform = function() {
                        var r = this.localTransform;
                        this._localID !== this._currentLocalID && (r.a = this._cx * this.scale._x, r.b = this._sx * this.scale._x, r.c = this._cy * this.scale._y, r.d = this._sy * this.scale._y, r.tx = this.position._x - (this.pivot._x * r.a + this.pivot._y * r.c), r.ty = this.position._y - (this.pivot._x * r.b + this.pivot._y * r.d), this._currentLocalID = this._localID, this._parentID = -1)
                    }, t.prototype.updateTransform = function(r) {
                        var o = this.localTransform;
                        if (this._localID !== this._currentLocalID && (o.a = this._cx * this.scale._x, o.b = this._sx * this.scale._x, o.c = this._cy * this.scale._y, o.d = this._sy * this.scale._y, o.tx = this.position._x - (this.pivot._x * o.a + this.pivot._y * o.c), o.ty = this.position._y - (this.pivot._x * o.b + this.pivot._y * o.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== r._worldID) {
                            var a = r.worldTransform,
                                h = this.worldTransform;
                            h.a = o.a * a.a + o.b * a.c, h.b = o.a * a.b + o.b * a.d, h.c = o.c * a.a + o.d * a.c, h.d = o.c * a.b + o.d * a.d, h.tx = o.tx * a.a + o.ty * a.c + a.tx, h.ty = o.tx * a.b + o.ty * a.d + a.ty, this._parentID = r._worldID, this._worldID++
                        }
                    }, t.prototype.setFromMatrix = function(r) {
                        r.decompose(this), this._localID++
                    }, f(t, [{
                        key: "rotation",
                        get: function() {
                            return this._rotation
                        },
                        set: function(r) {
                            this._rotation = r, this.updateSkew()
                        }
                    }]), t
                }(i.default);
            v.default = n
        }, {
            "../math": 70,
            "./TransformBase": 51
        }],
        53: [function(w, j, v) {
            "use strict";

            function b(P) {
                return P && P.__esModule ? P : {
                    default: P
                }
            }

            function O(P, D) {
                if (!(P instanceof D)) throw new TypeError("Cannot call a class as a function")
            }

            function g(P, D) {
                if (!P) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !D || typeof D != "object" && typeof D != "function" ? P : D
            }

            function u(P, D) {
                if (typeof D != "function" && D !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof D);
                P.prototype = Object.create(D && D.prototype, {
                    constructor: {
                        value: P,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), D && (Object.setPrototypeOf ? Object.setPrototypeOf(P, D) : P.__proto__ = D)
            }
            v.__esModule = !0;
            var f = w("../display/Container"),
                c = b(f),
                s = w("../textures/RenderTexture"),
                i = b(s),
                n = w("../textures/Texture"),
                e = b(n),
                t = w("./GraphicsData"),
                r = b(t),
                o = w("../sprites/Sprite"),
                a = b(o),
                h = w("../math"),
                d = w("../utils"),
                l = w("../const"),
                p = w("../display/Bounds"),
                y = b(p),
                x = w("./utils/bezierCurveTo"),
                T = b(x),
                S = w("../renderers/canvas/CanvasRenderer"),
                E = b(S),
                _ = void 0,
                m = new h.Matrix,
                M = new h.Point,
                A = new Float32Array(4),
                I = new Float32Array(4),
                N = function(P) {
                    function D() {
                        var C = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                        O(this, D);
                        var R = g(this, P.call(this));
                        return R.fillAlpha = 1, R.lineWidth = 0, R.nativeLines = C, R.lineColor = 0, R.graphicsData = [], R.tint = 16777215, R._prevTint = 16777215, R.blendMode = l.BLEND_MODES.NORMAL, R.currentPath = null, R._webGL = {}, R.isMask = !1, R.boundsPadding = 0, R._localBounds = new y.default, R.dirty = 0, R.fastRectDirty = -1, R.clearDirty = 0, R.boundsDirty = -1, R.cachedSpriteDirty = !1, R._spriteRect = null, R._fastRect = !1, R
                    }
                    return u(D, P), D.prototype.clone = function() {
                        var R = new D;
                        R.renderable = this.renderable, R.fillAlpha = this.fillAlpha, R.lineWidth = this.lineWidth, R.lineColor = this.lineColor, R.tint = this.tint, R.blendMode = this.blendMode, R.isMask = this.isMask, R.boundsPadding = this.boundsPadding, R.dirty = 0, R.cachedSpriteDirty = this.cachedSpriteDirty;
                        for (var F = 0; F < this.graphicsData.length; ++F) R.graphicsData.push(this.graphicsData[F].clone());
                        return R.currentPath = R.graphicsData[R.graphicsData.length - 1], R.updateLocalBounds(), R
                    }, D.prototype.lineStyle = function() {
                        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1;
                        if (this.lineWidth = C, this.lineColor = R, this.lineAlpha = F, this.currentPath)
                            if (this.currentPath.shape.points.length) {
                                var B = new h.Polygon(this.currentPath.shape.points.slice(-2));
                                B.closed = !1, this.drawShape(B)
                            } else this.currentPath.lineWidth = this.lineWidth, this.currentPath.lineColor = this.lineColor, this.currentPath.lineAlpha = this.lineAlpha;
                        return this
                    }, D.prototype.moveTo = function(C, R) {
                        var F = new h.Polygon([C, R]);
                        return F.closed = !1, this.drawShape(F), this
                    }, D.prototype.lineTo = function(C, R) {
                        return this.currentPath.shape.points.push(C, R), this.dirty++, this
                    }, D.prototype.quadraticCurveTo = function(C, R, F, B) {
                        this.currentPath ? this.currentPath.shape.points.length === 0 && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                        var L = 20,
                            k = this.currentPath.shape.points,
                            U = 0,
                            H = 0;
                        k.length === 0 && this.moveTo(0, 0);
                        for (var X = k[k.length - 2], W = k[k.length - 1], V = 1; V <= L; ++V) {
                            var G = V / L;
                            U = X + (C - X) * G, H = W + (R - W) * G, k.push(U + (C + (F - C) * G - U) * G, H + (R + (B - R) * G - H) * G)
                        }
                        return this.dirty++, this
                    }, D.prototype.bezierCurveTo = function(C, R, F, B, L, k) {
                        this.currentPath ? this.currentPath.shape.points.length === 0 && (this.currentPath.shape.points = [0, 0]) : this.moveTo(0, 0);
                        var U = this.currentPath.shape.points,
                            H = U[U.length - 2],
                            X = U[U.length - 1];
                        return U.length -= 2, (0, T.default)(H, X, C, R, F, B, L, k, U), this.dirty++, this
                    }, D.prototype.arcTo = function(C, R, F, B, L) {
                        this.currentPath ? this.currentPath.shape.points.length === 0 && this.currentPath.shape.points.push(C, R) : this.moveTo(C, R);
                        var k = this.currentPath.shape.points,
                            U = k[k.length - 2],
                            H = k[k.length - 1],
                            X = H - R,
                            W = U - C,
                            V = B - R,
                            G = F - C,
                            Y = Math.abs(X * G - W * V);
                        if (Y < 1e-8 || L === 0) k[k.length - 2] === C && k[k.length - 1] === R || k.push(C, R);
                        else {
                            var z = X * X + W * W,
                                K = V * V + G * G,
                                q = X * V + W * G,
                                $ = L * Math.sqrt(z) / Y,
                                J = L * Math.sqrt(K) / Y,
                                Q = $ * q / z,
                                ee = J * q / K,
                                Z = $ * G + J * W,
                                te = $ * V + J * X,
                                re = W * (J + Q),
                                ie = X * (J + Q),
                                ae = G * ($ + ee),
                                ne = V * ($ + ee),
                                ue = Math.atan2(ie - te, re - Z),
                                de = Math.atan2(ne - te, ae - Z);
                            this.arc(Z + C, te + R, L, ue, de, W * V > G * X)
                        }
                        return this.dirty++, this
                    }, D.prototype.arc = function(C, R, F, B, L) {
                        var k = arguments.length > 5 && arguments[5] !== void 0 && arguments[5];
                        if (B === L) return this;
                        !k && L <= B ? L += l.PI_2 : k && B <= L && (B += l.PI_2);
                        var U = L - B,
                            H = 40 * Math.ceil(Math.abs(U) / l.PI_2);
                        if (U === 0) return this;
                        var X = C + Math.cos(B) * F,
                            W = R + Math.sin(B) * F,
                            V = this.currentPath ? this.currentPath.shape.points : null;
                        V ? V[V.length - 2] === X && V[V.length - 1] === W || V.push(X, W) : (this.moveTo(X, W), V = this.currentPath.shape.points);
                        for (var G = U / (2 * H), Y = 2 * G, z = Math.cos(G), K = Math.sin(G), q = H - 1, $ = q % 1 / q, J = 0; J <= q; ++J) {
                            var Q = J + $ * J,
                                ee = G + B + Y * Q,
                                Z = Math.cos(ee),
                                te = -Math.sin(ee);
                            V.push((z * Z + K * te) * F + C, (z * -te + K * Z) * F + R)
                        }
                        return this.dirty++, this
                    }, D.prototype.beginFill = function() {
                        var C = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
                        return this.filling = !0, this.fillColor = C, this.fillAlpha = R, this.currentPath && this.currentPath.shape.points.length <= 2 && (this.currentPath.fill = this.filling, this.currentPath.fillColor = this.fillColor, this.currentPath.fillAlpha = this.fillAlpha), this
                    }, D.prototype.endFill = function() {
                        return this.filling = !1, this.fillColor = null, this.fillAlpha = 1, this
                    }, D.prototype.drawRect = function(C, R, F, B) {
                        return this.drawShape(new h.Rectangle(C, R, F, B)), this
                    }, D.prototype.drawRoundedRect = function(C, R, F, B, L) {
                        return this.drawShape(new h.RoundedRectangle(C, R, F, B, L)), this
                    }, D.prototype.drawCircle = function(C, R, F) {
                        return this.drawShape(new h.Circle(C, R, F)), this
                    }, D.prototype.drawEllipse = function(C, R, F, B) {
                        return this.drawShape(new h.Ellipse(C, R, F, B)), this
                    }, D.prototype.drawPolygon = function(C) {
                        var R = C,
                            F = !0;
                        if (R instanceof h.Polygon && (F = R.closed, R = R.points), !Array.isArray(R)) {
                            R = new Array(arguments.length);
                            for (var B = 0; B < R.length; ++B) R[B] = arguments[B]
                        }
                        var L = new h.Polygon(R);
                        return L.closed = F, this.drawShape(L), this
                    }, D.prototype.drawStar = function(C, R, F, B, L) {
                        var k = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                        L = L || B / 2;
                        for (var U = -1 * Math.PI / 2 + k, H = 2 * F, X = l.PI_2 / H, W = [], V = 0; V < H; V++) {
                            var G = V % 2 ? L : B,
                                Y = V * X + U;
                            W.push(C + G * Math.cos(Y), R + G * Math.sin(Y))
                        }
                        return this.drawPolygon(W)
                    }, D.prototype.clear = function() {
                        return (this.lineWidth || this.filling || this.graphicsData.length > 0) && (this.lineWidth = 0, this.filling = !1, this.boundsDirty = -1, this.dirty++, this.clearDirty++, this.graphicsData.length = 0), this.currentPath = null, this._spriteRect = null, this
                    }, D.prototype.isFastRect = function() {
                        return this.graphicsData.length === 1 && this.graphicsData[0].shape.type === l.SHAPES.RECT && !this.graphicsData[0].lineWidth
                    }, D.prototype._renderWebGL = function(C) {
                        this.dirty !== this.fastRectDirty && (this.fastRectDirty = this.dirty, this._fastRect = this.isFastRect()), this._fastRect ? this._renderSpriteRect(C) : (C.setObjectRenderer(C.plugins.graphics), C.plugins.graphics.render(this))
                    }, D.prototype._renderSpriteRect = function(C) {
                        var R = this.graphicsData[0].shape;
                        this._spriteRect || (this._spriteRect = new a.default(new e.default(e.default.WHITE)));
                        var F = this._spriteRect;
                        if (this.tint === 16777215) F.tint = this.graphicsData[0].fillColor;
                        else {
                            var B = A,
                                L = I;
                            (0, d.hex2rgb)(this.graphicsData[0].fillColor, B), (0, d.hex2rgb)(this.tint, L), B[0] *= L[0], B[1] *= L[1], B[2] *= L[2], F.tint = (0, d.rgb2hex)(B)
                        }
                        F.alpha = this.graphicsData[0].fillAlpha, F.worldAlpha = this.worldAlpha * F.alpha, F.blendMode = this.blendMode, F._texture._frame.width = R.width, F._texture._frame.height = R.height, F.transform.worldTransform = this.transform.worldTransform, F.anchor.set(-R.x / R.width, -R.y / R.height), F._onAnchorUpdate(), F._renderWebGL(C)
                    }, D.prototype._renderCanvas = function(C) {
                        this.isMask !== !0 && C.plugins.graphics.render(this)
                    }, D.prototype._calculateBounds = function() {
                        this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.updateLocalBounds(), this.cachedSpriteDirty = !0);
                        var C = this._localBounds;
                        this._bounds.addFrame(this.transform, C.minX, C.minY, C.maxX, C.maxY)
                    }, D.prototype.containsPoint = function(C) {
                        this.worldTransform.applyInverse(C, M);
                        for (var R = this.graphicsData, F = 0; F < R.length; ++F) {
                            var B = R[F];
                            if (B.fill && B.shape && B.shape.contains(M.x, M.y)) {
                                if (B.holes)
                                    for (var L = 0; L < B.holes.length; L++) {
                                        var k = B.holes[L];
                                        if (k.contains(M.x, M.y)) return !1
                                    }
                                return !0
                            }
                        }
                        return !1
                    }, D.prototype.updateLocalBounds = function() {
                        var C = 1 / 0,
                            R = -(1 / 0),
                            F = 1 / 0,
                            B = -(1 / 0);
                        if (this.graphicsData.length)
                            for (var L = 0, k = 0, U = 0, H = 0, X = 0, W = 0; W < this.graphicsData.length; W++) {
                                var V = this.graphicsData[W],
                                    G = V.type,
                                    Y = V.lineWidth;
                                if (L = V.shape, G === l.SHAPES.RECT || G === l.SHAPES.RREC) k = L.x - Y / 2, U = L.y - Y / 2, H = L.width + Y, X = L.height + Y, C = k < C ? k : C, R = k + H > R ? k + H : R, F = U < F ? U : F, B = U + X > B ? U + X : B;
                                else if (G === l.SHAPES.CIRC) k = L.x, U = L.y, H = L.radius + Y / 2, X = L.radius + Y / 2, C = k - H < C ? k - H : C, R = k + H > R ? k + H : R, F = U - X < F ? U - X : F, B = U + X > B ? U + X : B;
                                else if (G === l.SHAPES.ELIP) k = L.x, U = L.y, H = L.width + Y / 2, X = L.height + Y / 2, C = k - H < C ? k - H : C, R = k + H > R ? k + H : R, F = U - X < F ? U - X : F, B = U + X > B ? U + X : B;
                                else
                                    for (var z = L.points, K = 0, q = 0, $ = 0, J = 0, Q = 0, ee = 0, Z = 0, te = 0, re = 0; re + 2 < z.length; re += 2) k = z[re], U = z[re + 1], K = z[re + 2], q = z[re + 3], $ = Math.abs(K - k), J = Math.abs(q - U), X = Y, H = Math.sqrt($ * $ + J * J), H < 1e-9 || (Q = (X / H * J + $) / 2, ee = (X / H * $ + J) / 2, Z = (K + k) / 2, te = (q + U) / 2, C = Z - Q < C ? Z - Q : C, R = Z + Q > R ? Z + Q : R, F = te - ee < F ? te - ee : F, B = te + ee > B ? te + ee : B)
                            } else C = 0, R = 0, F = 0, B = 0;
                        var ie = this.boundsPadding;
                        this._localBounds.minX = C - ie, this._localBounds.maxX = R + ie, this._localBounds.minY = F - ie, this._localBounds.maxY = B + ie
                    }, D.prototype.drawShape = function(C) {
                        this.currentPath && this.currentPath.shape.points.length <= 2 && this.graphicsData.pop(), this.currentPath = null;
                        var R = new r.default(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.filling, this.nativeLines, C);
                        return this.graphicsData.push(R), R.type === l.SHAPES.POLY && (R.shape.closed = R.shape.closed || this.filling, this.currentPath = R), this.dirty++, R
                    }, D.prototype.generateCanvasTexture = function(C) {
                        var R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1,
                            F = this.getLocalBounds(),
                            B = i.default.create(F.width, F.height, C, R);
                        _ || (_ = new E.default), this.transform.updateLocalTransform(), this.transform.localTransform.copy(m), m.invert(), m.tx -= F.x, m.ty -= F.y, _.render(this, B, !0, m);
                        var L = e.default.fromCanvas(B.baseTexture._canvasRenderTarget.canvas, C, "graphics");
                        return L.baseTexture.resolution = R, L.baseTexture.update(), L
                    }, D.prototype.closePath = function() {
                        var C = this.currentPath;
                        return C && C.shape && C.shape.close(), this
                    }, D.prototype.addHole = function() {
                        var C = this.graphicsData.pop();
                        return this.currentPath = this.graphicsData[this.graphicsData.length - 1], this.currentPath.addHole(C.shape), this.currentPath = null, this
                    }, D.prototype.destroy = function(C) {
                        P.prototype.destroy.call(this, C);
                        for (var R = 0; R < this.graphicsData.length; ++R) this.graphicsData[R].destroy();
                        for (var F in this._webgl)
                            for (var B = 0; B < this._webgl[F].data.length; ++B) this._webgl[F].data[B].destroy();
                        this._spriteRect && this._spriteRect.destroy(), this.graphicsData = null, this.currentPath = null, this._webgl = null, this._localBounds = null
                    }, D
                }(c.default);
            v.default = N, N._SPRITE_TEXTURE = null
        }, {
            "../const": 46,
            "../display/Bounds": 47,
            "../display/Container": 48,
            "../math": 70,
            "../renderers/canvas/CanvasRenderer": 77,
            "../sprites/Sprite": 102,
            "../textures/RenderTexture": 113,
            "../textures/Texture": 115,
            "../utils": 125,
            "./GraphicsData": 54,
            "./utils/bezierCurveTo": 56
        }],
        54: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                if (!(g instanceof u)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function g(u, f, c, s, i, n, e, t) {
                    b(this, g), this.lineWidth = u, this.nativeLines = e, this.lineColor = f, this.lineAlpha = c, this._lineTint = f, this.fillColor = s, this.fillAlpha = i, this._fillTint = s, this.fill = n, this.holes = [], this.shape = t, this.type = t.type
                }
                return g.prototype.clone = function() {
                    return new g(this.lineWidth, this.lineColor, this.lineAlpha, this.fillColor, this.fillAlpha, this.fill, this.nativeLines, this.shape)
                }, g.prototype.addHole = function(u) {
                    this.holes.push(u)
                }, g.prototype.destroy = function() {
                    this.shape = null, this.holes = null
                }, g
            }();
            v.default = O
        }, {}],
        55: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("../../renderers/canvas/CanvasRenderer"),
                u = b(g),
                f = w("../../const"),
                c = function() {
                    function s(i) {
                        O(this, s), this.renderer = i
                    }
                    return s.prototype.render = function(i) {
                        var n = this.renderer,
                            e = n.context,
                            t = i.worldAlpha,
                            r = i.transform.worldTransform,
                            o = n.resolution;
                        this._prevTint !== this.tint && (this.dirty = !0), e.setTransform(r.a * o, r.b * o, r.c * o, r.d * o, r.tx * o, r.ty * o), i.dirty && (this.updateGraphicsTint(i), i.dirty = !1), n.setBlendMode(i.blendMode);
                        for (var a = 0; a < i.graphicsData.length; a++) {
                            var h = i.graphicsData[a],
                                d = h.shape,
                                l = h._fillTint,
                                p = h._lineTint;
                            if (e.lineWidth = h.lineWidth, h.type === f.SHAPES.POLY) {
                                e.beginPath(), this.renderPolygon(d.points, d.closed, e);
                                for (var y = 0; y < h.holes.length; y++) this.renderPolygon(h.holes[y].points, !0, e);
                                h.fill && (e.globalAlpha = h.fillAlpha * t, e.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.fill()), h.lineWidth && (e.globalAlpha = h.lineAlpha * t, e.strokeStyle = "#" + ("00000" + (0 | p).toString(16)).substr(-6), e.stroke())
                            } else if (h.type === f.SHAPES.RECT)(h.fillColor || h.fillColor === 0) && (e.globalAlpha = h.fillAlpha * t, e.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.fillRect(d.x, d.y, d.width, d.height)), h.lineWidth && (e.globalAlpha = h.lineAlpha * t, e.strokeStyle = "#" + ("00000" + (0 | p).toString(16)).substr(-6), e.strokeRect(d.x, d.y, d.width, d.height));
                            else if (h.type === f.SHAPES.CIRC) e.beginPath(), e.arc(d.x, d.y, d.radius, 0, 2 * Math.PI), e.closePath(), h.fill && (e.globalAlpha = h.fillAlpha * t, e.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.fill()), h.lineWidth && (e.globalAlpha = h.lineAlpha * t, e.strokeStyle = "#" + ("00000" + (0 | p).toString(16)).substr(-6), e.stroke());
                            else if (h.type === f.SHAPES.ELIP) {
                                var x = 2 * d.width,
                                    T = 2 * d.height,
                                    S = d.x - x / 2,
                                    E = d.y - T / 2;
                                e.beginPath();
                                var _ = .5522848,
                                    m = x / 2 * _,
                                    M = T / 2 * _,
                                    A = S + x,
                                    I = E + T,
                                    N = S + x / 2,
                                    P = E + T / 2;
                                e.moveTo(S, P), e.bezierCurveTo(S, P - M, N - m, E, N, E), e.bezierCurveTo(N + m, E, A, P - M, A, P), e.bezierCurveTo(A, P + M, N + m, I, N, I), e.bezierCurveTo(N - m, I, S, P + M, S, P), e.closePath(), h.fill && (e.globalAlpha = h.fillAlpha * t, e.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.fill()), h.lineWidth && (e.globalAlpha = h.lineAlpha * t, e.strokeStyle = "#" + ("00000" + (0 | p).toString(16)).substr(-6), e.stroke())
                            } else if (h.type === f.SHAPES.RREC) {
                                var D = d.x,
                                    C = d.y,
                                    R = d.width,
                                    F = d.height,
                                    B = d.radius,
                                    L = Math.min(R, F) / 2 | 0;
                                B = B > L ? L : B, e.beginPath(), e.moveTo(D, C + B), e.lineTo(D, C + F - B), e.quadraticCurveTo(D, C + F, D + B, C + F), e.lineTo(D + R - B, C + F), e.quadraticCurveTo(D + R, C + F, D + R, C + F - B), e.lineTo(D + R, C + B), e.quadraticCurveTo(D + R, C, D + R - B, C), e.lineTo(D + B, C), e.quadraticCurveTo(D, C, D, C + B), e.closePath(), (h.fillColor || h.fillColor === 0) && (e.globalAlpha = h.fillAlpha * t, e.fillStyle = "#" + ("00000" + (0 | l).toString(16)).substr(-6), e.fill()), h.lineWidth && (e.globalAlpha = h.lineAlpha * t, e.strokeStyle = "#" + ("00000" + (0 | p).toString(16)).substr(-6), e.stroke())
                            }
                        }
                    }, s.prototype.updateGraphicsTint = function(i) {
                        i._prevTint = i.tint;
                        for (var n = (i.tint >> 16 & 255) / 255, e = (i.tint >> 8 & 255) / 255, t = (255 & i.tint) / 255, r = 0; r < i.graphicsData.length; ++r) {
                            var o = i.graphicsData[r],
                                a = 0 | o.fillColor,
                                h = 0 | o.lineColor;
                            o._fillTint = ((a >> 16 & 255) / 255 * n * 255 << 16) + ((a >> 8 & 255) / 255 * e * 255 << 8) + (255 & a) / 255 * t * 255, o._lineTint = ((h >> 16 & 255) / 255 * n * 255 << 16) + ((h >> 8 & 255) / 255 * e * 255 << 8) + (255 & h) / 255 * t * 255
                        }
                    }, s.prototype.renderPolygon = function(i, n, e) {
                        e.moveTo(i[0], i[1]);
                        for (var t = 1; t < i.length / 2; ++t) e.lineTo(i[2 * t], i[2 * t + 1]);
                        n && e.closePath()
                    }, s.prototype.destroy = function() {
                        this.renderer = null
                    }, s
                }();
            v.default = c, u.default.registerPlugin("graphics", c)
        }, {
            "../../const": 46,
            "../../renderers/canvas/CanvasRenderer": 77
        }],
        56: [function(w, j, v) {
            "use strict";

            function b(O, g, u, f, c, s, i, n) {
                var e = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : [],
                    t = 20,
                    r = 0,
                    o = 0,
                    a = 0,
                    h = 0,
                    d = 0;
                e.push(O, g);
                for (var l = 1, p = 0; l <= t; ++l) p = l / t, r = 1 - p, o = r * r, a = o * r, h = p * p, d = h * p, e.push(a * O + 3 * o * p * u + 3 * r * h * c + d * i, a * g + 3 * o * p * f + 3 * r * h * s + d * n);
                return e
            }
            v.__esModule = !0, v.default = b
        }, {}],
        57: [function(w, j, v) {
            "use strict";

            function b(_) {
                return _ && _.__esModule ? _ : {
                    default: _
                }
            }

            function O(_, m) {
                if (!(_ instanceof m)) throw new TypeError("Cannot call a class as a function")
            }

            function g(_, m) {
                if (!_) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !m || typeof m != "object" && typeof m != "function" ? _ : m
            }

            function u(_, m) {
                if (typeof m != "function" && m !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof m);
                _.prototype = Object.create(m && m.prototype, {
                    constructor: {
                        value: _,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), m && (Object.setPrototypeOf ? Object.setPrototypeOf(_, m) : _.__proto__ = m)
            }
            v.__esModule = !0;
            var f = w("../../utils"),
                c = w("../../const"),
                s = w("../../renderers/webgl/utils/ObjectRenderer"),
                i = b(s),
                n = w("../../renderers/webgl/WebGLRenderer"),
                e = b(n),
                t = w("./WebGLGraphicsData"),
                r = b(t),
                o = w("./shaders/PrimitiveShader"),
                a = b(o),
                h = w("./utils/buildPoly"),
                d = b(h),
                l = w("./utils/buildRectangle"),
                p = b(l),
                y = w("./utils/buildRoundedRectangle"),
                x = b(y),
                T = w("./utils/buildCircle"),
                S = b(T),
                E = function(_) {
                    function m(M) {
                        O(this, m);
                        var A = g(this, _.call(this, M));
                        return A.graphicsDataPool = [], A.primitiveShader = null, A.gl = M.gl, A.CONTEXT_UID = 0, A
                    }
                    return u(m, _), m.prototype.onContextChange = function() {
                        this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.primitiveShader = new a.default(this.gl)
                    }, m.prototype.destroy = function() {
                        i.default.prototype.destroy.call(this);
                        for (var M = 0; M < this.graphicsDataPool.length; ++M) this.graphicsDataPool[M].destroy();
                        this.graphicsDataPool = null
                    }, m.prototype.render = function(M) {
                        var A = this.renderer,
                            I = A.gl,
                            N = void 0,
                            P = M._webGL[this.CONTEXT_UID];
                        P && M.dirty === P.dirty || (this.updateGraphics(M), P = M._webGL[this.CONTEXT_UID]);
                        var D = this.primitiveShader;
                        A.bindShader(D), A.state.setBlendMode(M.blendMode);
                        for (var C = 0, R = P.data.length; C < R; C++) {
                            N = P.data[C];
                            var F = N.shader;
                            A.bindShader(F), F.uniforms.translationMatrix = M.transform.worldTransform.toArray(!0), F.uniforms.tint = (0, f.hex2rgb)(M.tint), F.uniforms.alpha = M.worldAlpha, A.bindVao(N.vao), N.nativeLines ? I.drawArrays(I.LINES, 0, N.points.length / 6) : N.vao.draw(I.TRIANGLE_STRIP, N.indices.length)
                        }
                    }, m.prototype.updateGraphics = function(M) {
                        var A = this.renderer.gl,
                            I = M._webGL[this.CONTEXT_UID];
                        if (I || (I = M._webGL[this.CONTEXT_UID] = {
                                lastIndex: 0,
                                data: [],
                                gl: A,
                                clearDirty: -1,
                                dirty: -1
                            }), I.dirty = M.dirty, M.clearDirty !== I.clearDirty) {
                            I.clearDirty = M.clearDirty;
                            for (var N = 0; N < I.data.length; N++) this.graphicsDataPool.push(I.data[N]);
                            I.data.length = 0, I.lastIndex = 0
                        }
                        for (var P = void 0, D = void 0, C = I.lastIndex; C < M.graphicsData.length; C++) {
                            var R = M.graphicsData[C];
                            P = this.getWebGLData(I, 0), R.nativeLines && R.lineWidth && (D = this.getWebGLData(I, 0, !0), I.lastIndex++), R.type === c.SHAPES.POLY && (0, d.default)(R, P, D), R.type === c.SHAPES.RECT ? (0, p.default)(R, P, D) : R.type === c.SHAPES.CIRC || R.type === c.SHAPES.ELIP ? (0, S.default)(R, P, D) : R.type === c.SHAPES.RREC && (0, x.default)(R, P, D), I.lastIndex++
                        }
                        this.renderer.bindVao(null);
                        for (var F = 0; F < I.data.length; F++) P = I.data[F], P.dirty && P.upload()
                    }, m.prototype.getWebGLData = function(M, A, I) {
                        var N = M.data[M.data.length - 1];
                        return (!N || N.nativeLines !== I || N.points.length > 32e4) && (N = this.graphicsDataPool.pop() || new r.default(this.renderer.gl, this.primitiveShader, this.renderer.state.attribsState), N.nativeLines = I, N.reset(A), M.data.push(N)), N.dirty = !0, N
                    }, m
                }(i.default);
            v.default = E, e.default.registerPlugin("graphics", E)
        }, {
            "../../const": 46,
            "../../renderers/webgl/WebGLRenderer": 84,
            "../../renderers/webgl/utils/ObjectRenderer": 94,
            "../../utils": 125,
            "./WebGLGraphicsData": 58,
            "./shaders/PrimitiveShader": 59,
            "./utils/buildCircle": 60,
            "./utils/buildPoly": 62,
            "./utils/buildRectangle": 63,
            "./utils/buildRoundedRectangle": 64
        }],
        58: [function(w, j, v) {
            "use strict";

            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }

            function O(c, s) {
                if (!(c instanceof s)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("pixi-gl-core"),
                u = b(g),
                f = function() {
                    function c(s, i, n) {
                        O(this, c), this.gl = s, this.color = [0, 0, 0], this.points = [], this.indices = [], this.buffer = u.default.GLBuffer.createVertexBuffer(s), this.indexBuffer = u.default.GLBuffer.createIndexBuffer(s), this.dirty = !0, this.nativeLines = !1, this.glPoints = null, this.glIndices = null, this.shader = i, this.vao = new u.default.VertexArrayObject(s, n).addIndex(this.indexBuffer).addAttribute(this.buffer, i.attributes.aVertexPosition, s.FLOAT, !1, 24, 0).addAttribute(this.buffer, i.attributes.aColor, s.FLOAT, !1, 24, 8)
                    }
                    return c.prototype.reset = function() {
                        this.points.length = 0, this.indices.length = 0
                    }, c.prototype.upload = function() {
                        this.glPoints = new Float32Array(this.points), this.buffer.upload(this.glPoints), this.glIndices = new Uint16Array(this.indices), this.indexBuffer.upload(this.glIndices), this.dirty = !1
                    }, c.prototype.destroy = function() {
                        this.color = null, this.points = null, this.indices = null, this.vao.destroy(), this.buffer.destroy(), this.indexBuffer.destroy(), this.gl = null, this.buffer = null, this.indexBuffer = null, this.glPoints = null, this.glIndices = null
                    }, c
                }();
            v.default = f
        }, {
            "pixi-gl-core": 15
        }],
        59: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(i, n) {
                if (!i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || typeof n != "object" && typeof n != "function" ? i : n
            }

            function u(i, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                i.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(i, n) : i.__proto__ = n)
            }
            v.__esModule = !0;
            var f = w("../../../Shader"),
                c = b(f),
                s = function(i) {
                    function n(e) {
                        return O(this, n), g(this, i.call(this, e, ["attribute vec2 aVertexPosition;", "attribute vec4 aColor;", "uniform mat3 translationMatrix;", "uniform mat3 projectionMatrix;", "uniform float alpha;", "uniform vec3 tint;", "varying vec4 vColor;", "void main(void){", "   gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vColor = aColor * vec4(tint * alpha, alpha);", "}"].join(`
`), ["varying vec4 vColor;", "void main(void){", "   gl_FragColor = vColor;", "}"].join(`
`)))
                    }
                    return u(n, i), n
                }(c.default);
            v.default = s
        }, {
            "../../../Shader": 44
        }],
        60: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i, n) {
                var e = s.shape,
                    t = e.x,
                    r = e.y,
                    o = void 0,
                    a = void 0;
                if (s.type === f.SHAPES.CIRC ? (o = e.radius, a = e.radius) : (o = e.width, a = e.height), o !== 0 && a !== 0) {
                    var h = Math.floor(30 * Math.sqrt(e.radius)) || Math.floor(15 * Math.sqrt(e.width + e.height)),
                        d = 2 * Math.PI / h;
                    if (s.fill) {
                        var l = (0, c.hex2rgb)(s.fillColor),
                            p = s.fillAlpha,
                            y = l[0] * p,
                            x = l[1] * p,
                            T = l[2] * p,
                            S = i.points,
                            E = i.indices,
                            _ = S.length / 6;
                        E.push(_);
                        for (var m = 0; m < h + 1; m++) S.push(t, r, y, x, T, p), S.push(t + Math.sin(d * m) * o, r + Math.cos(d * m) * a, y, x, T, p), E.push(_++, _++);
                        E.push(_ - 1)
                    }
                    if (s.lineWidth) {
                        var M = s.points;
                        s.points = [];
                        for (var A = 0; A < h + 1; A++) s.points.push(t + Math.sin(d * A) * o, r + Math.cos(d * A) * a);
                        (0, u.default)(s, i, n), s.points = M
                    }
                }
            }
            v.__esModule = !0, v.default = O;
            var g = w("./buildLine"),
                u = b(g),
                f = w("../../../const"),
                c = w("../../../utils")
        }, {
            "../../../const": 46,
            "../../../utils": 125,
            "./buildLine": 61
        }],
        61: [function(w, j, v) {
            "use strict";

            function b(f, c) {
                var s = f.points;
                if (s.length !== 0) {
                    var i = new g.Point(s[0], s[1]),
                        n = new g.Point(s[s.length - 2], s[s.length - 1]);
                    if (i.x === n.x && i.y === n.y) {
                        s = s.slice(), s.pop(), s.pop(), n = new g.Point(s[s.length - 2], s[s.length - 1]);
                        var e = n.x + .5 * (i.x - n.x),
                            t = n.y + .5 * (i.y - n.y);
                        s.unshift(e, t), s.push(e, t)
                    }
                    var r = c.points,
                        o = c.indices,
                        a = s.length / 2,
                        h = s.length,
                        d = r.length / 6,
                        l = f.lineWidth / 2,
                        p = (0, u.hex2rgb)(f.lineColor),
                        y = f.lineAlpha,
                        x = p[0] * y,
                        T = p[1] * y,
                        S = p[2] * y,
                        E = s[0],
                        _ = s[1],
                        m = s[2],
                        M = s[3],
                        A = 0,
                        I = 0,
                        N = -(_ - M),
                        P = E - m,
                        D = 0,
                        C = 0,
                        R = 0,
                        F = 0,
                        B = Math.sqrt(N * N + P * P);
                    N /= B, P /= B, N *= l, P *= l, r.push(E - N, _ - P, x, T, S, y), r.push(E + N, _ + P, x, T, S, y);
                    for (var L = 1; L < a - 1; ++L) {
                        E = s[2 * (L - 1)], _ = s[2 * (L - 1) + 1], m = s[2 * L], M = s[2 * L + 1], A = s[2 * (L + 1)], I = s[2 * (L + 1) + 1], N = -(_ - M), P = E - m, B = Math.sqrt(N * N + P * P), N /= B, P /= B, N *= l, P *= l, D = -(M - I), C = m - A, B = Math.sqrt(D * D + C * C), D /= B, C /= B, D *= l, C *= l;
                        var k = -P + _ - (-P + M),
                            U = -N + m - (-N + E),
                            H = (-N + E) * (-P + M) - (-N + m) * (-P + _),
                            X = -C + I - (-C + M),
                            W = -D + m - (-D + A),
                            V = (-D + A) * (-C + M) - (-D + m) * (-C + I),
                            G = k * W - X * U;
                        if (Math.abs(G) < .1) G += 10.1, r.push(m - N, M - P, x, T, S, y), r.push(m + N, M + P, x, T, S, y);
                        else {
                            var Y = (U * V - W * H) / G,
                                z = (X * H - k * V) / G,
                                K = (Y - m) * (Y - m) + (z - M) * (z - M);
                            K > 196 * l * l ? (R = N - D, F = P - C, B = Math.sqrt(R * R + F * F), R /= B, F /= B, R *= l, F *= l, r.push(m - R, M - F), r.push(x, T, S, y), r.push(m + R, M + F), r.push(x, T, S, y), r.push(m - R, M - F), r.push(x, T, S, y), h++) : (r.push(Y, z), r.push(x, T, S, y), r.push(m - (Y - m), M - (z - M)), r.push(x, T, S, y))
                        }
                    }
                    E = s[2 * (a - 2)], _ = s[2 * (a - 2) + 1], m = s[2 * (a - 1)], M = s[2 * (a - 1) + 1], N = -(_ - M), P = E - m, B = Math.sqrt(N * N + P * P), N /= B, P /= B, N *= l, P *= l, r.push(m - N, M - P), r.push(x, T, S, y), r.push(m + N, M + P), r.push(x, T, S, y), o.push(d);
                    for (var q = 0; q < h; ++q) o.push(d++);
                    o.push(d - 1)
                }
            }

            function O(f, c) {
                var s = 0,
                    i = f.points;
                if (i.length !== 0) {
                    var n = c.points,
                        e = i.length / 2,
                        t = (0, u.hex2rgb)(f.lineColor),
                        r = f.lineAlpha,
                        o = t[0] * r,
                        a = t[1] * r,
                        h = t[2] * r;
                    for (s = 1; s < e; s++) {
                        var d = i[2 * (s - 1)],
                            l = i[2 * (s - 1) + 1],
                            p = i[2 * s],
                            y = i[2 * s + 1];
                        n.push(d, l), n.push(o, a, h, r), n.push(p, y), n.push(o, a, h, r)
                    }
                }
            }
            v.__esModule = !0, v.default = function(f, c, s) {
                f.nativeLines ? O(f, s) : b(f, c)
            };
            var g = w("../../../math"),
                u = w("../../../utils")
        }, {
            "../../../math": 70,
            "../../../utils": 125
        }],
        62: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n, e) {
                i.points = i.shape.points.slice();
                var t = i.points;
                if (i.fill && t.length >= 6) {
                    for (var r = [], o = i.holes, a = 0; a < o.length; a++) {
                        var h = o[a];
                        r.push(t.length / 2), t = t.concat(h.points)
                    }
                    var d = n.points,
                        l = n.indices,
                        p = t.length / 2,
                        y = (0, f.hex2rgb)(i.fillColor),
                        x = i.fillAlpha,
                        T = y[0] * x,
                        S = y[1] * x,
                        E = y[2] * x,
                        _ = (0, s.default)(t, r, 2);
                    if (!_) return;
                    for (var m = d.length / 6, M = 0; M < _.length; M += 3) l.push(_[M] + m), l.push(_[M] + m), l.push(_[M + 1] + m), l.push(_[M + 2] + m), l.push(_[M + 2] + m);
                    for (var A = 0; A < p; A++) d.push(t[2 * A], t[2 * A + 1], T, S, E, x)
                }
                i.lineWidth > 0 && (0, u.default)(i, n, e)
            }
            v.__esModule = !0, v.default = O;
            var g = w("./buildLine"),
                u = b(g),
                f = w("../../../utils"),
                c = w("earcut"),
                s = b(c)
        }, {
            "../../../utils": 125,
            "./buildLine": 61,
            earcut: 2
        }],
        63: [function(w, j, v) {
            "use strict";

            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }

            function O(c, s, i) {
                var n = c.shape,
                    e = n.x,
                    t = n.y,
                    r = n.width,
                    o = n.height;
                if (c.fill) {
                    var a = (0, f.hex2rgb)(c.fillColor),
                        h = c.fillAlpha,
                        d = a[0] * h,
                        l = a[1] * h,
                        p = a[2] * h,
                        y = s.points,
                        x = s.indices,
                        T = y.length / 6;
                    y.push(e, t), y.push(d, l, p, h), y.push(e + r, t), y.push(d, l, p, h), y.push(e, t + o), y.push(d, l, p, h), y.push(e + r, t + o), y.push(d, l, p, h), x.push(T, T, T + 1, T + 2, T + 3, T + 3)
                }
                if (c.lineWidth) {
                    var S = c.points;
                    c.points = [e, t, e + r, t, e + r, t + o, e, t + o, e, t], (0, u.default)(c, s, i), c.points = S
                }
            }
            v.__esModule = !0, v.default = O;
            var g = w("./buildLine"),
                u = b(g),
                f = w("../../../utils")
        }, {
            "../../../utils": 125,
            "./buildLine": 61
        }],
        64: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t, r) {
                var o = e.shape,
                    a = o.x,
                    h = o.y,
                    d = o.width,
                    l = o.height,
                    p = o.radius,
                    y = [];
                if (y.push(a, h + p), u(a, h + l - p, a, h + l, a + p, h + l, y), u(a + d - p, h + l, a + d, h + l, a + d, h + l - p, y), u(a + d, h + p, a + d, h, a + d - p, h, y), u(a + p, h, a, h, a, h + p + 1e-10, y), e.fill) {
                    for (var x = (0, n.hex2rgb)(e.fillColor), T = e.fillAlpha, S = x[0] * T, E = x[1] * T, _ = x[2] * T, m = t.points, M = t.indices, A = m.length / 6, I = (0, c.default)(y, null, 2), N = 0, P = I.length; N < P; N += 3) M.push(I[N] + A), M.push(I[N] + A), M.push(I[N + 1] + A), M.push(I[N + 2] + A), M.push(I[N + 2] + A);
                    for (var D = 0, C = y.length; D < C; D++) m.push(y[D], y[++D], S, E, _, T)
                }
                if (e.lineWidth) {
                    var R = e.points;
                    e.points = y, (0, i.default)(e, t, r), e.points = R
                }
            }

            function g(e, t, r) {
                var o = t - e;
                return e + o * r
            }

            function u(e, t, r, o, a, h) {
                for (var d = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : [], l = 20, p = d, y = 0, x = 0, T = 0, S = 0, E = 0, _ = 0, m = 0, M = 0; m <= l; ++m) M = m / l, y = g(e, r, M), x = g(t, o, M), T = g(r, a, M), S = g(o, h, M), E = g(y, T, M), _ = g(x, S, M), p.push(E, _);
                return p
            }
            v.__esModule = !0, v.default = O;
            var f = w("earcut"),
                c = b(f),
                s = w("./buildLine"),
                i = b(s),
                n = w("../../../utils")
        }, {
            "../../../utils": 125,
            "./buildLine": 61,
            earcut: 2
        }],
        65: [function(w, j, v) {
            "use strict";

            function b(Z) {
                if (Z && Z.__esModule) return Z;
                var te = {};
                if (Z != null)
                    for (var re in Z) Object.prototype.hasOwnProperty.call(Z, re) && (te[re] = Z[re]);
                return te.default = Z, te
            }

            function O(Z) {
                return Z && Z.__esModule ? Z : {
                    default: Z
                }
            }
            v.__esModule = !0, v.EventEmitter = v.autoDetectRenderer = v.Application = v.Filter = v.SpriteMaskFilter = v.Quad = v.RenderTarget = v.ObjectRenderer = v.WebGLManager = v.Shader = v.CanvasRenderTarget = v.TextureUvs = v.VideoBaseTexture = v.BaseRenderTexture = v.RenderTexture = v.BaseTexture = v.TextureMatrix = v.Texture = v.Spritesheet = v.CanvasGraphicsRenderer = v.GraphicsRenderer = v.GraphicsData = v.Graphics = v.TextMetrics = v.TextStyle = v.Text = v.SpriteRenderer = v.CanvasTinter = v.CanvasSpriteRenderer = v.Sprite = v.TransformBase = v.TransformStatic = v.Transform = v.Container = v.DisplayObject = v.Bounds = v.glCore = v.WebGLRenderer = v.CanvasRenderer = v.ticker = v.utils = v.settings = void 0;
            var g = w("./const");
            Object.keys(g).forEach(function(Z) {
                Z !== "default" && Z !== "__esModule" && Object.defineProperty(v, Z, {
                    enumerable: !0,
                    get: function() {
                        return g[Z]
                    }
                })
            });
            var u = w("./math");
            Object.keys(u).forEach(function(Z) {
                Z !== "default" && Z !== "__esModule" && Object.defineProperty(v, Z, {
                    enumerable: !0,
                    get: function() {
                        return u[Z]
                    }
                })
            });
            var f = w("pixi-gl-core");
            Object.defineProperty(v, "glCore", {
                enumerable: !0,
                get: function() {
                    return O(f).default
                }
            });
            var c = w("./display/Bounds");
            Object.defineProperty(v, "Bounds", {
                enumerable: !0,
                get: function() {
                    return O(c).default
                }
            });
            var s = w("./display/DisplayObject");
            Object.defineProperty(v, "DisplayObject", {
                enumerable: !0,
                get: function() {
                    return O(s).default
                }
            });
            var i = w("./display/Container");
            Object.defineProperty(v, "Container", {
                enumerable: !0,
                get: function() {
                    return O(i).default
                }
            });
            var n = w("./display/Transform");
            Object.defineProperty(v, "Transform", {
                enumerable: !0,
                get: function() {
                    return O(n).default
                }
            });
            var e = w("./display/TransformStatic");
            Object.defineProperty(v, "TransformStatic", {
                enumerable: !0,
                get: function() {
                    return O(e).default
                }
            });
            var t = w("./display/TransformBase");
            Object.defineProperty(v, "TransformBase", {
                enumerable: !0,
                get: function() {
                    return O(t).default
                }
            });
            var r = w("./sprites/Sprite");
            Object.defineProperty(v, "Sprite", {
                enumerable: !0,
                get: function() {
                    return O(r).default
                }
            });
            var o = w("./sprites/canvas/CanvasSpriteRenderer");
            Object.defineProperty(v, "CanvasSpriteRenderer", {
                enumerable: !0,
                get: function() {
                    return O(o).default
                }
            });
            var a = w("./sprites/canvas/CanvasTinter");
            Object.defineProperty(v, "CanvasTinter", {
                enumerable: !0,
                get: function() {
                    return O(a).default
                }
            });
            var h = w("./sprites/webgl/SpriteRenderer");
            Object.defineProperty(v, "SpriteRenderer", {
                enumerable: !0,
                get: function() {
                    return O(h).default
                }
            });
            var d = w("./text/Text");
            Object.defineProperty(v, "Text", {
                enumerable: !0,
                get: function() {
                    return O(d).default
                }
            });
            var l = w("./text/TextStyle");
            Object.defineProperty(v, "TextStyle", {
                enumerable: !0,
                get: function() {
                    return O(l).default
                }
            });
            var p = w("./text/TextMetrics");
            Object.defineProperty(v, "TextMetrics", {
                enumerable: !0,
                get: function() {
                    return O(p).default
                }
            });
            var y = w("./graphics/Graphics");
            Object.defineProperty(v, "Graphics", {
                enumerable: !0,
                get: function() {
                    return O(y).default
                }
            });
            var x = w("./graphics/GraphicsData");
            Object.defineProperty(v, "GraphicsData", {
                enumerable: !0,
                get: function() {
                    return O(x).default
                }
            });
            var T = w("./graphics/webgl/GraphicsRenderer");
            Object.defineProperty(v, "GraphicsRenderer", {
                enumerable: !0,
                get: function() {
                    return O(T).default
                }
            });
            var S = w("./graphics/canvas/CanvasGraphicsRenderer");
            Object.defineProperty(v, "CanvasGraphicsRenderer", {
                enumerable: !0,
                get: function() {
                    return O(S).default
                }
            });
            var E = w("./textures/Spritesheet");
            Object.defineProperty(v, "Spritesheet", {
                enumerable: !0,
                get: function() {
                    return O(E).default
                }
            });
            var _ = w("./textures/Texture");
            Object.defineProperty(v, "Texture", {
                enumerable: !0,
                get: function() {
                    return O(_).default
                }
            });
            var m = w("./textures/TextureMatrix");
            Object.defineProperty(v, "TextureMatrix", {
                enumerable: !0,
                get: function() {
                    return O(m).default
                }
            });
            var M = w("./textures/BaseTexture");
            Object.defineProperty(v, "BaseTexture", {
                enumerable: !0,
                get: function() {
                    return O(M).default
                }
            });
            var A = w("./textures/RenderTexture");
            Object.defineProperty(v, "RenderTexture", {
                enumerable: !0,
                get: function() {
                    return O(A).default
                }
            });
            var I = w("./textures/BaseRenderTexture");
            Object.defineProperty(v, "BaseRenderTexture", {
                enumerable: !0,
                get: function() {
                    return O(I).default
                }
            });
            var N = w("./textures/VideoBaseTexture");
            Object.defineProperty(v, "VideoBaseTexture", {
                enumerable: !0,
                get: function() {
                    return O(N).default
                }
            });
            var P = w("./textures/TextureUvs");
            Object.defineProperty(v, "TextureUvs", {
                enumerable: !0,
                get: function() {
                    return O(P).default
                }
            });
            var D = w("./renderers/canvas/utils/CanvasRenderTarget");
            Object.defineProperty(v, "CanvasRenderTarget", {
                enumerable: !0,
                get: function() {
                    return O(D).default
                }
            });
            var C = w("./Shader");
            Object.defineProperty(v, "Shader", {
                enumerable: !0,
                get: function() {
                    return O(C).default
                }
            });
            var R = w("./renderers/webgl/managers/WebGLManager");
            Object.defineProperty(v, "WebGLManager", {
                enumerable: !0,
                get: function() {
                    return O(R).default
                }
            });
            var F = w("./renderers/webgl/utils/ObjectRenderer");
            Object.defineProperty(v, "ObjectRenderer", {
                enumerable: !0,
                get: function() {
                    return O(F).default
                }
            });
            var B = w("./renderers/webgl/utils/RenderTarget");
            Object.defineProperty(v, "RenderTarget", {
                enumerable: !0,
                get: function() {
                    return O(B).default
                }
            });
            var L = w("./renderers/webgl/utils/Quad");
            Object.defineProperty(v, "Quad", {
                enumerable: !0,
                get: function() {
                    return O(L).default
                }
            });
            var k = w("./renderers/webgl/filters/spriteMask/SpriteMaskFilter");
            Object.defineProperty(v, "SpriteMaskFilter", {
                enumerable: !0,
                get: function() {
                    return O(k).default
                }
            });
            var U = w("./renderers/webgl/filters/Filter");
            Object.defineProperty(v, "Filter", {
                enumerable: !0,
                get: function() {
                    return O(U).default
                }
            });
            var H = w("./Application");
            Object.defineProperty(v, "Application", {
                enumerable: !0,
                get: function() {
                    return O(H).default
                }
            });
            var X = w("./autoDetectRenderer");
            Object.defineProperty(v, "autoDetectRenderer", {
                enumerable: !0,
                get: function() {
                    return X.autoDetectRenderer
                }
            });
            var W = w("eventemitter3");
            Object.defineProperty(v, "EventEmitter", {
                enumerable: !0,
                get: function() {
                    return O(W).default
                }
            });
            var V = w("./utils"),
                G = b(V),
                Y = w("./ticker"),
                z = b(Y),
                K = w("./settings"),
                q = O(K),
                $ = w("./renderers/canvas/CanvasRenderer"),
                J = O($),
                Q = w("./renderers/webgl/WebGLRenderer"),
                ee = O(Q);
            v.settings = q.default, v.utils = G, v.ticker = z, v.CanvasRenderer = J.default, v.WebGLRenderer = ee.default
        }, {
            "./Application": 43,
            "./Shader": 44,
            "./autoDetectRenderer": 45,
            "./const": 46,
            "./display/Bounds": 47,
            "./display/Container": 48,
            "./display/DisplayObject": 49,
            "./display/Transform": 50,
            "./display/TransformBase": 51,
            "./display/TransformStatic": 52,
            "./graphics/Graphics": 53,
            "./graphics/GraphicsData": 54,
            "./graphics/canvas/CanvasGraphicsRenderer": 55,
            "./graphics/webgl/GraphicsRenderer": 57,
            "./math": 70,
            "./renderers/canvas/CanvasRenderer": 77,
            "./renderers/canvas/utils/CanvasRenderTarget": 79,
            "./renderers/webgl/WebGLRenderer": 84,
            "./renderers/webgl/filters/Filter": 86,
            "./renderers/webgl/filters/spriteMask/SpriteMaskFilter": 89,
            "./renderers/webgl/managers/WebGLManager": 93,
            "./renderers/webgl/utils/ObjectRenderer": 94,
            "./renderers/webgl/utils/Quad": 95,
            "./renderers/webgl/utils/RenderTarget": 96,
            "./settings": 101,
            "./sprites/Sprite": 102,
            "./sprites/canvas/CanvasSpriteRenderer": 103,
            "./sprites/canvas/CanvasTinter": 104,
            "./sprites/webgl/SpriteRenderer": 106,
            "./text/Text": 108,
            "./text/TextMetrics": 109,
            "./text/TextStyle": 110,
            "./textures/BaseRenderTexture": 111,
            "./textures/BaseTexture": 112,
            "./textures/RenderTexture": 113,
            "./textures/Spritesheet": 114,
            "./textures/Texture": 115,
            "./textures/TextureMatrix": 116,
            "./textures/TextureUvs": 117,
            "./textures/VideoBaseTexture": 118,
            "./ticker": 121,
            "./utils": 125,
            eventemitter3: 3,
            "pixi-gl-core": 15
        }],
        66: [function(w, j, v) {
            "use strict";

            function b(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function O(o) {
                return o < 0 ? -1 : o > 0 ? 1 : 0
            }

            function g() {
                for (var o = 0; o < 16; o++) {
                    var a = [];
                    t.push(a);
                    for (var h = 0; h < 16; h++)
                        for (var d = O(c[o] * c[h] + i[o] * s[h]), l = O(s[o] * c[h] + n[o] * s[h]), p = O(c[o] * i[h] + i[o] * n[h]), y = O(s[o] * i[h] + n[o] * n[h]), x = 0; x < 16; x++)
                            if (c[x] === d && s[x] === l && i[x] === p && n[x] === y) {
                                a.push(x);
                                break
                            }
                }
                for (var T = 0; T < 16; T++) {
                    var S = new f.default;
                    S.set(c[T], s[T], i[T], n[T], 0, 0), e.push(S)
                }
            }
            v.__esModule = !0;
            var u = w("./Matrix"),
                f = b(u),
                c = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
                s = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
                i = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
                n = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
                e = [],
                t = [];
            g();
            var r = {
                E: 0,
                SE: 1,
                S: 2,
                SW: 3,
                W: 4,
                NW: 5,
                N: 6,
                NE: 7,
                MIRROR_VERTICAL: 8,
                MIRROR_HORIZONTAL: 12,
                uX: function(o) {
                    return c[o]
                },
                uY: function(o) {
                    return s[o]
                },
                vX: function(o) {
                    return i[o]
                },
                vY: function(o) {
                    return n[o]
                },
                inv: function(o) {
                    return 8 & o ? 15 & o : 7 & -o
                },
                add: function(o, a) {
                    return t[o][a]
                },
                sub: function(o, a) {
                    return t[o][r.inv(a)]
                },
                rotate180: function(o) {
                    return 4 ^ o
                },
                isVertical: function(o) {
                    return (3 & o) == 2
                },
                byDirection: function(o, a) {
                    return 2 * Math.abs(o) <= Math.abs(a) ? a >= 0 ? r.S : r.N : 2 * Math.abs(a) <= Math.abs(o) ? o > 0 ? r.E : r.W : a > 0 ? o > 0 ? r.SE : r.SW : o > 0 ? r.NE : r.NW
                },
                matrixAppendRotationInv: function(o, a) {
                    var h = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
                        d = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                        l = e[r.inv(a)];
                    l.tx = h, l.ty = d, o.append(l)
                }
            };
            v.default = r
        }, {
            "./Matrix": 67
        }],
        67: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = function() {
                    function i(n, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                        }
                    }
                    return function(n, e, t) {
                        return e && i(n.prototype, e), t && i(n, t), n
                    }
                }(),
                u = w("./Point"),
                f = b(u),
                c = w("../const"),
                s = function() {
                    function i() {
                        var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1,
                            e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            t = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
                            r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1,
                            o = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 0,
                            a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
                        O(this, i), this.a = n, this.b = e, this.c = t, this.d = r, this.tx = o, this.ty = a, this.array = null
                    }
                    return i.prototype.fromArray = function(n) {
                        this.a = n[0], this.b = n[1], this.c = n[3], this.d = n[4], this.tx = n[2], this.ty = n[5]
                    }, i.prototype.set = function(n, e, t, r, o, a) {
                        return this.a = n, this.b = e, this.c = t, this.d = r, this.tx = o, this.ty = a, this
                    }, i.prototype.toArray = function(n, e) {
                        this.array || (this.array = new Float32Array(9));
                        var t = e || this.array;
                        return n ? (t[0] = this.a, t[1] = this.b, t[2] = 0, t[3] = this.c, t[4] = this.d, t[5] = 0, t[6] = this.tx, t[7] = this.ty, t[8] = 1) : (t[0] = this.a, t[1] = this.c, t[2] = this.tx, t[3] = this.b, t[4] = this.d, t[5] = this.ty, t[6] = 0, t[7] = 0, t[8] = 1), t
                    }, i.prototype.apply = function(n, e) {
                        e = e || new f.default;
                        var t = n.x,
                            r = n.y;
                        return e.x = this.a * t + this.c * r + this.tx, e.y = this.b * t + this.d * r + this.ty, e
                    }, i.prototype.applyInverse = function(n, e) {
                        e = e || new f.default;
                        var t = 1 / (this.a * this.d + this.c * -this.b),
                            r = n.x,
                            o = n.y;
                        return e.x = this.d * t * r + -this.c * t * o + (this.ty * this.c - this.tx * this.d) * t, e.y = this.a * t * o + -this.b * t * r + (-this.ty * this.a + this.tx * this.b) * t, e
                    }, i.prototype.translate = function(n, e) {
                        return this.tx += n, this.ty += e, this
                    }, i.prototype.scale = function(n, e) {
                        return this.a *= n, this.d *= e, this.c *= n, this.b *= e, this.tx *= n, this.ty *= e, this
                    }, i.prototype.rotate = function(n) {
                        var e = Math.cos(n),
                            t = Math.sin(n),
                            r = this.a,
                            o = this.c,
                            a = this.tx;
                        return this.a = r * e - this.b * t, this.b = r * t + this.b * e, this.c = o * e - this.d * t, this.d = o * t + this.d * e, this.tx = a * e - this.ty * t, this.ty = a * t + this.ty * e, this
                    }, i.prototype.append = function(n) {
                        var e = this.a,
                            t = this.b,
                            r = this.c,
                            o = this.d;
                        return this.a = n.a * e + n.b * r, this.b = n.a * t + n.b * o, this.c = n.c * e + n.d * r, this.d = n.c * t + n.d * o, this.tx = n.tx * e + n.ty * r + this.tx, this.ty = n.tx * t + n.ty * o + this.ty, this
                    }, i.prototype.setTransform = function(n, e, t, r, o, a, h, d, l) {
                        return this.a = Math.cos(h + l) * o, this.b = Math.sin(h + l) * o, this.c = -Math.sin(h - d) * a, this.d = Math.cos(h - d) * a, this.tx = n - (t * this.a + r * this.c), this.ty = e - (t * this.b + r * this.d), this
                    }, i.prototype.prepend = function(n) {
                        var e = this.tx;
                        if (n.a !== 1 || n.b !== 0 || n.c !== 0 || n.d !== 1) {
                            var t = this.a,
                                r = this.c;
                            this.a = t * n.a + this.b * n.c, this.b = t * n.b + this.b * n.d, this.c = r * n.a + this.d * n.c, this.d = r * n.b + this.d * n.d
                        }
                        return this.tx = e * n.a + this.ty * n.c + n.tx, this.ty = e * n.b + this.ty * n.d + n.ty, this
                    }, i.prototype.decompose = function(n) {
                        var e = this.a,
                            t = this.b,
                            r = this.c,
                            o = this.d,
                            a = -Math.atan2(-r, o),
                            h = Math.atan2(t, e),
                            d = Math.abs(a + h);
                        return d < 1e-5 || Math.abs(c.PI_2 - d) < 1e-5 ? (n.rotation = h, e < 0 && o >= 0 && (n.rotation += n.rotation <= 0 ? Math.PI : -Math.PI), n.skew.x = n.skew.y = 0) : (n.rotation = 0, n.skew.x = a, n.skew.y = h), n.scale.x = Math.sqrt(e * e + t * t), n.scale.y = Math.sqrt(r * r + o * o), n.position.x = this.tx, n.position.y = this.ty, n
                    }, i.prototype.invert = function() {
                        var n = this.a,
                            e = this.b,
                            t = this.c,
                            r = this.d,
                            o = this.tx,
                            a = n * r - e * t;
                        return this.a = r / a, this.b = -e / a, this.c = -t / a, this.d = n / a, this.tx = (t * this.ty - r * o) / a, this.ty = -(n * this.ty - e * o) / a, this
                    }, i.prototype.identity = function() {
                        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
                    }, i.prototype.clone = function() {
                        var n = new i;
                        return n.a = this.a, n.b = this.b, n.c = this.c, n.d = this.d, n.tx = this.tx, n.ty = this.ty, n
                    }, i.prototype.copy = function(n) {
                        return n.a = this.a, n.b = this.b, n.c = this.c, n.d = this.d, n.tx = this.tx, n.ty = this.ty, n
                    }, g(i, null, [{
                        key: "IDENTITY",
                        get: function() {
                            return new i
                        }
                    }, {
                        key: "TEMP_MATRIX",
                        get: function() {
                            return new i
                        }
                    }]), i
                }();
            v.default = s
        }, {
            "../const": 46,
            "./Point": 69
        }],
        68: [function(w, j, v) {
            "use strict";

            function b(u, f) {
                if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                    function u(f, c) {
                        for (var s = 0; s < c.length; s++) {
                            var i = c[s];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(f, i.key, i)
                        }
                    }
                    return function(f, c, s) {
                        return c && u(f.prototype, c), s && u(f, s), f
                    }
                }(),
                g = function() {
                    function u(f, c) {
                        var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
                            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
                        b(this, u), this._x = s, this._y = i, this.cb = f, this.scope = c
                    }
                    return u.prototype.set = function(f, c) {
                        var s = f || 0,
                            i = c || (c !== 0 ? s : 0);
                        this._x === s && this._y === i || (this._x = s, this._y = i, this.cb.call(this.scope))
                    }, u.prototype.copy = function(f) {
                        this._x === f.x && this._y === f.y || (this._x = f.x, this._y = f.y, this.cb.call(this.scope))
                    }, O(u, [{
                        key: "x",
                        get: function() {
                            return this._x
                        },
                        set: function(f) {
                            this._x !== f && (this._x = f, this.cb.call(this.scope))
                        }
                    }, {
                        key: "y",
                        get: function() {
                            return this._y
                        },
                        set: function(f) {
                            this._y !== f && (this._y = f, this.cb.call(this.scope))
                        }
                    }]), u
                }();
            v.default = g
        }, {}],
        69: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                if (!(g instanceof u)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function g() {
                    var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                        f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
                    b(this, g), this.x = u, this.y = f
                }
                return g.prototype.clone = function() {
                    return new g(this.x, this.y)
                }, g.prototype.copy = function(u) {
                    this.set(u.x, u.y)
                }, g.prototype.equals = function(u) {
                    return u.x === this.x && u.y === this.y
                }, g.prototype.set = function(u, f) {
                    this.x = u || 0, this.y = f || (f !== 0 ? this.x : 0)
                }, g.prototype.distance = function(u, f) {
                    var c = u.x - f.x,
                        s = u.y - f.y;
                    return Math.sqrt(c * c + s * s)
                }, g.interpolate = function(u, f, c) {
                    var s = f.x - u.x,
                        i = f.y - u.y;
                    return new g(u.x + s * c, u.y + i * c)
                }, g.distance = function(u, f) {
                    var c = u.x - f.x,
                        s = u.y - f.y;
                    return Math.sqrt(c * c + s * s)
                }, g
            }();
            v.default = O
        }, {}],
        70: [function(w, j, v) {
            "use strict";

            function b(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            v.__esModule = !0;
            var O = w("./Point");
            Object.defineProperty(v, "Point", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./ObservablePoint");
            Object.defineProperty(v, "ObservablePoint", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            });
            var u = w("./Matrix");
            Object.defineProperty(v, "Matrix", {
                enumerable: !0,
                get: function() {
                    return b(u).default
                }
            });
            var f = w("./GroupD8");
            Object.defineProperty(v, "GroupD8", {
                enumerable: !0,
                get: function() {
                    return b(f).default
                }
            });
            var c = w("./shapes/Circle");
            Object.defineProperty(v, "Circle", {
                enumerable: !0,
                get: function() {
                    return b(c).default
                }
            });
            var s = w("./shapes/Ellipse");
            Object.defineProperty(v, "Ellipse", {
                enumerable: !0,
                get: function() {
                    return b(s).default
                }
            });
            var i = w("./shapes/Polygon");
            Object.defineProperty(v, "Polygon", {
                enumerable: !0,
                get: function() {
                    return b(i).default
                }
            });
            var n = w("./shapes/Rectangle");
            Object.defineProperty(v, "Rectangle", {
                enumerable: !0,
                get: function() {
                    return b(n).default
                }
            });
            var e = w("./shapes/RoundedRectangle");
            Object.defineProperty(v, "RoundedRectangle", {
                enumerable: !0,
                get: function() {
                    return b(e).default
                }
            })
        }, {
            "./GroupD8": 66,
            "./Matrix": 67,
            "./ObservablePoint": 68,
            "./Point": 69,
            "./shapes/Circle": 71,
            "./shapes/Ellipse": 72,
            "./shapes/Polygon": 73,
            "./shapes/Rectangle": 74,
            "./shapes/RoundedRectangle": 75
        }],
        71: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("./Rectangle"),
                u = b(g),
                f = w("../../const"),
                c = function() {
                    function s() {
                        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
                        O(this, s), this.x = i, this.y = n, this.radius = e, this.type = f.SHAPES.CIRC
                    }
                    return s.prototype.clone = function() {
                        return new s(this.x, this.y, this.radius)
                    }, s.prototype.contains = function(i, n) {
                        if (this.radius <= 0) return !1;
                        var e = this.radius * this.radius,
                            t = this.x - i,
                            r = this.y - n;
                        return t *= t, r *= r, t + r <= e
                    }, s.prototype.getBounds = function() {
                        return new u.default(this.x - this.radius, this.y - this.radius, 2 * this.radius, 2 * this.radius)
                    }, s
                }();
            v.default = c
        }, {
            "../../const": 46,
            "./Rectangle": 74
        }],
        72: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("./Rectangle"),
                u = b(g),
                f = w("../../const"),
                c = function() {
                    function s() {
                        var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            e = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
                            t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
                        O(this, s), this.x = i, this.y = n, this.width = e, this.height = t, this.type = f.SHAPES.ELIP
                    }
                    return s.prototype.clone = function() {
                        return new s(this.x, this.y, this.width, this.height)
                    }, s.prototype.contains = function(i, n) {
                        if (this.width <= 0 || this.height <= 0) return !1;
                        var e = (i - this.x) / this.width,
                            t = (n - this.y) / this.height;
                        return e *= e, t *= t, e + t <= 1
                    }, s.prototype.getBounds = function() {
                        return new u.default(this.x - this.width, this.y - this.height, this.width, this.height)
                    }, s
                }();
            v.default = c
        }, {
            "../../const": 46,
            "./Rectangle": 74
        }],
        73: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("../Point"),
                u = b(g),
                f = w("../../const"),
                c = function() {
                    function s() {
                        for (var i = arguments.length, n = Array(i), e = 0; e < i; e++) n[e] = arguments[e];
                        if (O(this, s), Array.isArray(n[0]) && (n = n[0]), n[0] instanceof u.default) {
                            for (var t = [], r = 0, o = n.length; r < o; r++) t.push(n[r].x, n[r].y);
                            n = t
                        }
                        this.closed = !0, this.points = n, this.type = f.SHAPES.POLY
                    }
                    return s.prototype.clone = function() {
                        return new s(this.points.slice())
                    }, s.prototype.close = function() {
                        var i = this.points;
                        i[0] === i[i.length - 2] && i[1] === i[i.length - 1] || i.push(i[0], i[1])
                    }, s.prototype.contains = function(i, n) {
                        for (var e = !1, t = this.points.length / 2, r = 0, o = t - 1; r < t; o = r++) {
                            var a = this.points[2 * r],
                                h = this.points[2 * r + 1],
                                d = this.points[2 * o],
                                l = this.points[2 * o + 1],
                                p = h > n != l > n && i < (d - a) * ((n - h) / (l - h)) + a;
                            p && (e = !e)
                        }
                        return e
                    }, s
                }();
            v.default = c
        }, {
            "../../const": 46,
            "../Point": 69
        }],
        74: [function(w, j, v) {
            "use strict";

            function b(f, c) {
                if (!(f instanceof c)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                    function f(c, s) {
                        for (var i = 0; i < s.length; i++) {
                            var n = s[i];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(c, n.key, n)
                        }
                    }
                    return function(c, s, i) {
                        return s && f(c.prototype, s), i && f(c, i), c
                    }
                }(),
                g = w("../../const"),
                u = function() {
                    function f() {
                        var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
                            n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0;
                        b(this, f), this.x = Number(c), this.y = Number(s), this.width = Number(i), this.height = Number(n), this.type = g.SHAPES.RECT
                    }
                    return f.prototype.clone = function() {
                        return new f(this.x, this.y, this.width, this.height)
                    }, f.prototype.copy = function(c) {
                        return this.x = c.x, this.y = c.y, this.width = c.width, this.height = c.height, this
                    }, f.prototype.contains = function(c, s) {
                        return !(this.width <= 0 || this.height <= 0) && c >= this.x && c < this.x + this.width && s >= this.y && s < this.y + this.height
                    }, f.prototype.pad = function(c, s) {
                        c = c || 0, s = s || (s !== 0 ? c : 0), this.x -= c, this.y -= s, this.width += 2 * c, this.height += 2 * s
                    }, f.prototype.fit = function(c) {
                        this.x < c.x && (this.width += this.x, this.width < 0 && (this.width = 0), this.x = c.x), this.y < c.y && (this.height += this.y, this.height < 0 && (this.height = 0), this.y = c.y), this.x + this.width > c.x + c.width && (this.width = c.width - this.x, this.width < 0 && (this.width = 0)), this.y + this.height > c.y + c.height && (this.height = c.height - this.y, this.height < 0 && (this.height = 0))
                    }, f.prototype.enlarge = function(c) {
                        var s = Math.min(this.x, c.x),
                            i = Math.max(this.x + this.width, c.x + c.width),
                            n = Math.min(this.y, c.y),
                            e = Math.max(this.y + this.height, c.y + c.height);
                        this.x = s, this.width = i - s, this.y = n, this.height = e - n
                    }, f.prototype.union = function(c) {
                        var s = Math.min(this.x, c.x),
                            i = Math.min(this.y, c.y),
                            n = Math.max(this.x + this.width, c.x + c.width),
                            e = Math.max(this.y + this.height, c.y + c.height),
                            t = n - s,
                            r = e - i;
                        return this.x = s, this.y = i, this.width = t, this.height = r, this
                    }, f.prototype.intersection = function(c) {
                        var s = Math.max(this.x, c.x),
                            i = Math.max(this.y, c.y),
                            n = Math.min(this.x + this.width, c.x + c.width),
                            e = Math.min(this.y + this.height, c.y + c.height),
                            t = n - s,
                            r = e - i;
                        return this.x = s, this.y = i, this.width = t, this.height = r, this
                    }, f.prototype.intersect = function(c) {
                        var s = Math.max(this.x, c.x),
                            i = Math.max(this.y, c.y),
                            n = Math.min(this.x + this.width, c.x + c.width),
                            e = Math.min(this.y + this.height, c.y + c.height),
                            t = n - s,
                            r = e - i;
                        return t >= 0 && r >= 0
                    }, O(f, [{
                        key: "left",
                        get: function() {
                            return this.x
                        }
                    }, {
                        key: "right",
                        get: function() {
                            return this.x + this.width
                        }
                    }, {
                        key: "top",
                        get: function() {
                            return this.y
                        }
                    }, {
                        key: "bottom",
                        get: function() {
                            return this.y + this.height
                        }
                    }], [{
                        key: "EMPTY",
                        get: function() {
                            return new f(0, 0, 0, 0)
                        }
                    }]), f
                }();
            v.default = u
        }, {
            "../../const": 46
        }],
        75: [function(w, j, v) {
            "use strict";

            function b(u, f) {
                if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = w("../../const"),
                g = function() {
                    function u() {
                        var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                            s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
                            i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
                            n = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : 20;
                        b(this, u), this.x = f, this.y = c, this.width = s, this.height = i, this.radius = n, this.type = O.SHAPES.RREC
                    }
                    return u.prototype.clone = function() {
                        return new u(this.x, this.y, this.width, this.height, this.radius)
                    }, u.prototype.contains = function(f, c) {
                        if (this.width <= 0 || this.height <= 0) return !1;
                        if (f >= this.x && f <= this.x + this.width && c >= this.y && c <= this.y + this.height) {
                            if (c >= this.y + this.radius && c <= this.y + this.height - this.radius || f >= this.x + this.radius && f <= this.x + this.width - this.radius) return !0;
                            var s = f - (this.x + this.radius),
                                i = c - (this.y + this.radius),
                                n = this.radius * this.radius;
                            if (s * s + i * i <= n || (s = f - (this.x + this.width - this.radius), s * s + i * i <= n) || (i = c - (this.y + this.height - this.radius), s * s + i * i <= n) || (s = f - (this.x + this.radius), s * s + i * i <= n)) return !0
                        }
                        return !1
                    }, u
                }();
            v.default = g
        }, {
            "../../const": 46
        }],
        76: [function(w, j, v) {
            "use strict";

            function b(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function O(y, x) {
                if (!(y instanceof x)) throw new TypeError("Cannot call a class as a function")
            }

            function g(y, x) {
                if (!y) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !x || typeof x != "object" && typeof x != "function" ? y : x
            }

            function u(y, x) {
                if (typeof x != "function" && x !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof x);
                y.prototype = Object.create(x && x.prototype, {
                    constructor: {
                        value: y,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(y, x) : y.__proto__ = x)
            }
            v.__esModule = !0;
            var f = function() {
                    function y(x, T) {
                        for (var S = 0; S < T.length; S++) {
                            var E = T[S];
                            E.enumerable = E.enumerable || !1, E.configurable = !0, "value" in E && (E.writable = !0), Object.defineProperty(x, E.key, E)
                        }
                    }
                    return function(x, T, S) {
                        return T && y(x.prototype, T), S && y(x, S), x
                    }
                }(),
                c = w("../utils"),
                s = w("../math"),
                i = w("../const"),
                n = w("../settings"),
                e = b(n),
                t = w("../display/Container"),
                r = b(t),
                o = w("../textures/RenderTexture"),
                a = b(o),
                h = w("eventemitter3"),
                d = b(h),
                l = new s.Matrix,
                p = function(y) {
                    function x(T, S, E, _) {
                        O(this, x);
                        var m = g(this, y.call(this));
                        return (0, c.sayHello)(T), typeof S == "number" && (S = Object.assign({
                            width: S,
                            height: E || e.default.RENDER_OPTIONS.height
                        }, _)), S = Object.assign({}, e.default.RENDER_OPTIONS, S), m.options = S, m.type = i.RENDERER_TYPE.UNKNOWN, m.screen = new s.Rectangle(0, 0, S.width, S.height), m.view = S.view || document.createElement("canvas"), m.resolution = S.resolution || e.default.RESOLUTION, m.transparent = S.transparent, m.autoResize = S.autoResize || !1, m.blendModes = null, m.preserveDrawingBuffer = S.preserveDrawingBuffer, m.clearBeforeRender = S.clearBeforeRender, m.roundPixels = S.roundPixels, m._backgroundColor = 0, m._backgroundColorRgba = [0, 0, 0, 0], m._backgroundColorString = "#000000", m.backgroundColor = S.backgroundColor || m._backgroundColor, m._tempDisplayObjectParent = new r.default, m._lastObjectRendered = m._tempDisplayObjectParent, m
                    }
                    return u(x, y), x.prototype.resize = function(T, S) {
                        this.screen.width = T, this.screen.height = S, this.view.width = T * this.resolution, this.view.height = S * this.resolution, this.autoResize && (this.view.style.width = T + "px", this.view.style.height = S + "px")
                    }, x.prototype.generateTexture = function(T, S, E, _) {
                        _ = _ || T.getLocalBounds();
                        var m = a.default.create(0 | _.width, 0 | _.height, S, E);
                        return l.tx = -_.x, l.ty = -_.y, this.render(T, m, !1, l, !0), m
                    }, x.prototype.destroy = function(T) {
                        T && this.view.parentNode && this.view.parentNode.removeChild(this.view), this.type = i.RENDERER_TYPE.UNKNOWN, this.view = null, this.screen = null, this.resolution = 0, this.transparent = !1, this.autoResize = !1, this.blendModes = null, this.options = null, this.preserveDrawingBuffer = !1, this.clearBeforeRender = !1, this.roundPixels = !1, this._backgroundColor = 0, this._backgroundColorRgba = null, this._backgroundColorString = null, this._tempDisplayObjectParent = null, this._lastObjectRendered = null
                    }, f(x, [{
                        key: "width",
                        get: function() {
                            return this.view.width
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.view.height
                        }
                    }, {
                        key: "backgroundColor",
                        get: function() {
                            return this._backgroundColor
                        },
                        set: function(T) {
                            this._backgroundColor = T, this._backgroundColorString = (0, c.hex2string)(T), (0, c.hex2rgb)(T, this._backgroundColorRgba)
                        }
                    }]), x
                }(d.default);
            v.default = p
        }, {
            "../const": 46,
            "../display/Container": 48,
            "../math": 70,
            "../settings": 101,
            "../textures/RenderTexture": 113,
            "../utils": 125,
            eventemitter3: 3
        }],
        77: [function(w, j, v) {
            "use strict";

            function b(p) {
                return p && p.__esModule ? p : {
                    default: p
                }
            }

            function O(p, y) {
                if (!(p instanceof y)) throw new TypeError("Cannot call a class as a function")
            }

            function g(p, y) {
                if (!p) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !y || typeof y != "object" && typeof y != "function" ? p : y
            }

            function u(p, y) {
                if (typeof y != "function" && y !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof y);
                p.prototype = Object.create(y && y.prototype, {
                    constructor: {
                        value: p,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), y && (Object.setPrototypeOf ? Object.setPrototypeOf(p, y) : p.__proto__ = y)
            }
            v.__esModule = !0;
            var f = w("../SystemRenderer"),
                c = b(f),
                s = w("./utils/CanvasMaskManager"),
                i = b(s),
                n = w("./utils/CanvasRenderTarget"),
                e = b(n),
                t = w("./utils/mapCanvasBlendModesToPixi"),
                r = b(t),
                o = w("../../utils"),
                a = w("../../const"),
                h = w("../../settings"),
                d = b(h),
                l = function(p) {
                    function y(x, T, S) {
                        O(this, y);
                        var E = g(this, p.call(this, "Canvas", x, T, S));
                        return E.type = a.RENDERER_TYPE.CANVAS, E.rootContext = E.view.getContext("2d", {
                            alpha: E.transparent
                        }), E.context = E.rootContext, E.refresh = !0, E.maskManager = new i.default(E), E.smoothProperty = "imageSmoothingEnabled", E.rootContext.imageSmoothingEnabled || (E.rootContext.webkitImageSmoothingEnabled ? E.smoothProperty = "webkitImageSmoothingEnabled" : E.rootContext.mozImageSmoothingEnabled ? E.smoothProperty = "mozImageSmoothingEnabled" : E.rootContext.oImageSmoothingEnabled ? E.smoothProperty = "oImageSmoothingEnabled" : E.rootContext.msImageSmoothingEnabled && (E.smoothProperty = "msImageSmoothingEnabled")), E.initPlugins(), E.blendModes = (0, r.default)(), E._activeBlendMode = null, E.renderingToScreen = !1, E.resize(E.options.width, E.options.height), E
                    }
                    return u(y, p), y.prototype.render = function(x, T, S, E, _) {
                        if (this.view) {
                            this.renderingToScreen = !T, this.emit("prerender");
                            var m = this.resolution;
                            T ? (T = T.baseTexture || T, T._canvasRenderTarget || (T._canvasRenderTarget = new e.default(T.width, T.height, T.resolution), T.source = T._canvasRenderTarget.canvas, T.valid = !0), this.context = T._canvasRenderTarget.context, this.resolution = T._canvasRenderTarget.resolution) : this.context = this.rootContext;
                            var M = this.context;
                            if (T || (this._lastObjectRendered = x), !_) {
                                var A = x.parent,
                                    I = this._tempDisplayObjectParent.transform.worldTransform;
                                E ? (E.copy(I), this._tempDisplayObjectParent.transform._worldID = -1) : I.identity(), x.parent = this._tempDisplayObjectParent, x.updateTransform(), x.parent = A
                            }
                            M.save(), M.setTransform(1, 0, 0, 1, 0, 0), M.globalAlpha = 1, this._activeBlendMode = a.BLEND_MODES.NORMAL, M.globalCompositeOperation = this.blendModes[a.BLEND_MODES.NORMAL], navigator.isCocoonJS && this.view.screencanvas && (M.fillStyle = "black", M.clear()), (S !== void 0 ? S : this.clearBeforeRender) && this.renderingToScreen && (this.transparent ? M.clearRect(0, 0, this.width, this.height) : (M.fillStyle = this._backgroundColorString, M.fillRect(0, 0, this.width, this.height)));
                            var N = this.context;
                            this.context = M, x.renderCanvas(this), this.context = N, M.restore(), this.resolution = m, this.emit("postrender")
                        }
                    }, y.prototype.clear = function(x) {
                        var T = this.context;
                        x = x || this._backgroundColorString, !this.transparent && x ? (T.fillStyle = x, T.fillRect(0, 0, this.width, this.height)) : T.clearRect(0, 0, this.width, this.height)
                    }, y.prototype.setBlendMode = function(x) {
                        this._activeBlendMode !== x && (this._activeBlendMode = x, this.context.globalCompositeOperation = this.blendModes[x])
                    }, y.prototype.destroy = function(x) {
                        this.destroyPlugins(), p.prototype.destroy.call(this, x), this.context = null, this.refresh = !0, this.maskManager.destroy(), this.maskManager = null, this.smoothProperty = null
                    }, y.prototype.resize = function(x, T) {
                        p.prototype.resize.call(this, x, T), this.smoothProperty && (this.rootContext[this.smoothProperty] = d.default.SCALE_MODE === a.SCALE_MODES.LINEAR)
                    }, y.prototype.invalidateBlendMode = function() {
                        this._activeBlendMode = this.blendModes.indexOf(this.context.globalCompositeOperation)
                    }, y
                }(c.default);
            v.default = l, o.pluginTarget.mixin(l)
        }, {
            "../../const": 46,
            "../../settings": 101,
            "../../utils": 125,
            "../SystemRenderer": 76,
            "./utils/CanvasMaskManager": 78,
            "./utils/CanvasRenderTarget": 79,
            "./utils/mapCanvasBlendModesToPixi": 81
        }],
        78: [function(w, j, v) {
            "use strict";

            function b(u, f) {
                if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = w("../../../const"),
                g = function() {
                    function u(f) {
                        b(this, u), this.renderer = f
                    }
                    return u.prototype.pushMask = function(f) {
                        var c = this.renderer;
                        c.context.save();
                        var s = f.alpha,
                            i = f.transform.worldTransform,
                            n = c.resolution;
                        c.context.setTransform(i.a * n, i.b * n, i.c * n, i.d * n, i.tx * n, i.ty * n), f._texture || (this.renderGraphicsShape(f), c.context.clip()), f.worldAlpha = s
                    }, u.prototype.renderGraphicsShape = function(f) {
                        var c = this.renderer.context,
                            s = f.graphicsData.length;
                        if (s !== 0) {
                            c.beginPath();
                            for (var i = 0; i < s; i++) {
                                var n = f.graphicsData[i],
                                    e = n.shape;
                                if (n.type === O.SHAPES.POLY) {
                                    var t = e.points;
                                    c.moveTo(t[0], t[1]);
                                    for (var r = 1; r < t.length / 2; r++) c.lineTo(t[2 * r], t[2 * r + 1]);
                                    t[0] === t[t.length - 2] && t[1] === t[t.length - 1] && c.closePath()
                                } else if (n.type === O.SHAPES.RECT) c.rect(e.x, e.y, e.width, e.height), c.closePath();
                                else if (n.type === O.SHAPES.CIRC) c.arc(e.x, e.y, e.radius, 0, 2 * Math.PI), c.closePath();
                                else if (n.type === O.SHAPES.ELIP) {
                                    var o = 2 * e.width,
                                        a = 2 * e.height,
                                        h = e.x - o / 2,
                                        d = e.y - a / 2,
                                        l = .5522848,
                                        p = o / 2 * l,
                                        y = a / 2 * l,
                                        x = h + o,
                                        T = d + a,
                                        S = h + o / 2,
                                        E = d + a / 2;
                                    c.moveTo(h, E), c.bezierCurveTo(h, E - y, S - p, d, S, d), c.bezierCurveTo(S + p, d, x, E - y, x, E), c.bezierCurveTo(x, E + y, S + p, T, S, T), c.bezierCurveTo(S - p, T, h, E + y, h, E), c.closePath()
                                } else if (n.type === O.SHAPES.RREC) {
                                    var _ = e.x,
                                        m = e.y,
                                        M = e.width,
                                        A = e.height,
                                        I = e.radius,
                                        N = Math.min(M, A) / 2 | 0;
                                    I = I > N ? N : I, c.moveTo(_, m + I), c.lineTo(_, m + A - I), c.quadraticCurveTo(_, m + A, _ + I, m + A), c.lineTo(_ + M - I, m + A), c.quadraticCurveTo(_ + M, m + A, _ + M, m + A - I), c.lineTo(_ + M, m + I), c.quadraticCurveTo(_ + M, m, _ + M - I, m), c.lineTo(_ + I, m), c.quadraticCurveTo(_, m, _, m + I), c.closePath()
                                }
                            }
                        }
                    }, u.prototype.popMask = function(f) {
                        f.context.restore(), f.invalidateBlendMode()
                    }, u.prototype.destroy = function() {}, u
                }();
            v.default = g
        }, {
            "../../../const": 46
        }],
        79: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = function() {
                    function s(i, n) {
                        for (var e = 0; e < n.length; e++) {
                            var t = n[e];
                            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(i, t.key, t)
                        }
                    }
                    return function(i, n, e) {
                        return n && s(i.prototype, n), e && s(i, e), i
                    }
                }(),
                u = w("../../../settings"),
                f = b(u),
                c = function() {
                    function s(i, n, e) {
                        O(this, s), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), this.resolution = e || f.default.RESOLUTION, this.resize(i, n)
                    }
                    return s.prototype.clear = function() {
                        this.context.setTransform(1, 0, 0, 1, 0, 0), this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
                    }, s.prototype.resize = function(i, n) {
                        this.canvas.width = i * this.resolution, this.canvas.height = n * this.resolution
                    }, s.prototype.destroy = function() {
                        this.context = null, this.canvas = null
                    }, g(s, [{
                        key: "width",
                        get: function() {
                            return this.canvas.width
                        },
                        set: function(i) {
                            this.canvas.width = i
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.canvas.height
                        },
                        set: function(i) {
                            this.canvas.height = i
                        }
                    }]), s
                }();
            v.default = c
        }, {
            "../../../settings": 101
        }],
        80: [function(w, j, v) {
            "use strict";

            function b(g) {
                var u = document.createElement("canvas");
                u.width = 6, u.height = 1;
                var f = u.getContext("2d");
                return f.fillStyle = g, f.fillRect(0, 0, 6, 1), u
            }

            function O() {
                if (typeof document == "undefined") return !1;
                var g = b("#ff00ff"),
                    u = b("#ffff00"),
                    f = document.createElement("canvas");
                f.width = 6, f.height = 1;
                var c = f.getContext("2d");
                c.globalCompositeOperation = "multiply", c.drawImage(g, 0, 0), c.drawImage(u, 2, 0);
                var s = c.getImageData(2, 0, 1, 1);
                if (!s) return !1;
                var i = s.data;
                return i[0] === 255 && i[1] === 0 && i[2] === 0
            }
            v.__esModule = !0, v.default = O
        }, {}],
        81: [function(w, j, v) {
            "use strict";

            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }

            function O() {
                var c = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
                return (0, f.default)() ? (c[g.BLEND_MODES.NORMAL] = "source-over", c[g.BLEND_MODES.ADD] = "lighter", c[g.BLEND_MODES.MULTIPLY] = "multiply", c[g.BLEND_MODES.SCREEN] = "screen", c[g.BLEND_MODES.OVERLAY] = "overlay", c[g.BLEND_MODES.DARKEN] = "darken", c[g.BLEND_MODES.LIGHTEN] = "lighten", c[g.BLEND_MODES.COLOR_DODGE] = "color-dodge", c[g.BLEND_MODES.COLOR_BURN] = "color-burn", c[g.BLEND_MODES.HARD_LIGHT] = "hard-light", c[g.BLEND_MODES.SOFT_LIGHT] = "soft-light", c[g.BLEND_MODES.DIFFERENCE] = "difference", c[g.BLEND_MODES.EXCLUSION] = "exclusion", c[g.BLEND_MODES.HUE] = "hue", c[g.BLEND_MODES.SATURATION] = "saturate", c[g.BLEND_MODES.COLOR] = "color", c[g.BLEND_MODES.LUMINOSITY] = "luminosity") : (c[g.BLEND_MODES.NORMAL] = "source-over", c[g.BLEND_MODES.ADD] = "lighter", c[g.BLEND_MODES.MULTIPLY] = "source-over", c[g.BLEND_MODES.SCREEN] = "source-over", c[g.BLEND_MODES.OVERLAY] = "source-over", c[g.BLEND_MODES.DARKEN] = "source-over", c[g.BLEND_MODES.LIGHTEN] = "source-over", c[g.BLEND_MODES.COLOR_DODGE] = "source-over", c[g.BLEND_MODES.COLOR_BURN] = "source-over", c[g.BLEND_MODES.HARD_LIGHT] = "source-over", c[g.BLEND_MODES.SOFT_LIGHT] = "source-over", c[g.BLEND_MODES.DIFFERENCE] = "source-over", c[g.BLEND_MODES.EXCLUSION] = "source-over", c[g.BLEND_MODES.HUE] = "source-over", c[g.BLEND_MODES.SATURATION] = "source-over", c[g.BLEND_MODES.COLOR] = "source-over", c[g.BLEND_MODES.LUMINOSITY] = "source-over"), c[g.BLEND_MODES.NORMAL_NPM] = c[g.BLEND_MODES.NORMAL], c[g.BLEND_MODES.ADD_NPM] = c[g.BLEND_MODES.ADD], c[g.BLEND_MODES.SCREEN_NPM] = c[g.BLEND_MODES.SCREEN], c
            }
            v.__esModule = !0, v.default = O;
            var g = w("../../../const"),
                u = w("./canUseNewCanvasBlendModes"),
                f = b(u)
        }, {
            "../../../const": 46,
            "./canUseNewCanvasBlendModes": 80
        }],
        82: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("../../const"),
                u = w("../../settings"),
                f = b(u),
                c = function() {
                    function s(i) {
                        O(this, s), this.renderer = i, this.count = 0, this.checkCount = 0, this.maxIdle = f.default.GC_MAX_IDLE, this.checkCountMax = f.default.GC_MAX_CHECK_COUNT, this.mode = f.default.GC_MODE
                    }
                    return s.prototype.update = function() {
                        this.count++, this.mode !== g.GC_MODES.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run()))
                    }, s.prototype.run = function() {
                        for (var i = this.renderer.textureManager, n = i._managedTextures, e = !1, t = 0; t < n.length; t++) {
                            var r = n[t];
                            !r._glRenderTargets && this.count - r.touched > this.maxIdle && (i.destroyTexture(r, !0), n[t] = null, e = !0)
                        }
                        if (e) {
                            for (var o = 0, a = 0; a < n.length; a++) n[a] !== null && (n[o++] = n[a]);
                            n.length = o
                        }
                    }, s.prototype.unload = function(i) {
                        var n = this.renderer.textureManager;
                        i._texture && i._texture._glRenderTargets && n.destroyTexture(i._texture, !0);
                        for (var e = i.children.length - 1; e >= 0; e--) this.unload(i.children[e])
                    }, s
                }();
            v.default = c
        }, {
            "../../const": 46,
            "../../settings": 101
        }],
        83: [function(w, j, v) {
            "use strict";

            function b(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function O(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("pixi-gl-core"),
                u = w("../../const"),
                f = w("./utils/RenderTarget"),
                c = b(f),
                s = w("../../utils"),
                i = function() {
                    function n(e) {
                        O(this, n), this.renderer = e, this.gl = e.gl, this._managedTextures = []
                    }
                    return n.prototype.bindTexture = function() {}, n.prototype.getTexture = function() {}, n.prototype.updateTexture = function(e, t) {
                        var r = this.gl,
                            o = !!e._glRenderTargets;
                        if (!e.hasLoaded) return null;
                        var a = this.renderer.boundTextures;
                        if (t === void 0) {
                            t = 0;
                            for (var h = 0; h < a.length; ++h)
                                if (a[h] === e) {
                                    t = h;
                                    break
                                }
                        }
                        a[t] = e, r.activeTexture(r.TEXTURE0 + t);
                        var d = e._glTextures[this.renderer.CONTEXT_UID];
                        if (d) o ? e._glRenderTargets[this.renderer.CONTEXT_UID].resize(e.width, e.height) : d.upload(e.source);
                        else {
                            if (o) {
                                var l = new c.default(this.gl, e.width, e.height, e.scaleMode, e.resolution);
                                l.resize(e.width, e.height), e._glRenderTargets[this.renderer.CONTEXT_UID] = l, d = l.texture
                            } else d = new g.GLTexture(this.gl, null, null, null, null), d.bind(t), d.premultiplyAlpha = !0, d.upload(e.source);
                            e._glTextures[this.renderer.CONTEXT_UID] = d, e.on("update", this.updateTexture, this), e.on("dispose", this.destroyTexture, this), this._managedTextures.push(e), e.isPowerOfTwo ? (e.mipmap && d.enableMipmap(), e.wrapMode === u.WRAP_MODES.CLAMP ? d.enableWrapClamp() : e.wrapMode === u.WRAP_MODES.REPEAT ? d.enableWrapRepeat() : d.enableWrapMirrorRepeat()) : d.enableWrapClamp(), e.scaleMode === u.SCALE_MODES.NEAREST ? d.enableNearestScaling() : d.enableLinearScaling()
                        }
                        return d
                    }, n.prototype.destroyTexture = function(e, t) {
                        if (e = e.baseTexture || e, e.hasLoaded) {
                            var r = this.renderer.CONTEXT_UID,
                                o = e._glTextures,
                                a = e._glRenderTargets;
                            if (o[r] && (this.renderer.unbindTexture(e), o[r].destroy(), e.off("update", this.updateTexture, this), e.off("dispose", this.destroyTexture, this), delete o[r], !t)) {
                                var h = this._managedTextures.indexOf(e);
                                h !== -1 && (0, s.removeItems)(this._managedTextures, h, 1)
                            }
                            a && a[r] && (a[r].destroy(), delete a[r])
                        }
                    }, n.prototype.removeAll = function() {
                        for (var e = 0; e < this._managedTextures.length; ++e) {
                            var t = this._managedTextures[e];
                            t._glTextures[this.renderer.CONTEXT_UID] && delete t._glTextures[this.renderer.CONTEXT_UID]
                        }
                    }, n.prototype.destroy = function() {
                        for (var e = 0; e < this._managedTextures.length; ++e) {
                            var t = this._managedTextures[e];
                            this.destroyTexture(t, !0), t.off("update", this.updateTexture, this), t.off("dispose", this.destroyTexture, this)
                        }
                        this._managedTextures = null
                    }, n
                }();
            v.default = i
        }, {
            "../../const": 46,
            "../../utils": 125,
            "./utils/RenderTarget": 96,
            "pixi-gl-core": 15
        }],
        84: [function(w, j, v) {
            "use strict";

            function b(B) {
                return B && B.__esModule ? B : {
                    default: B
                }
            }

            function O(B, L) {
                if (!(B instanceof L)) throw new TypeError("Cannot call a class as a function")
            }

            function g(B, L) {
                if (!B) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !L || typeof L != "object" && typeof L != "function" ? B : L
            }

            function u(B, L) {
                if (typeof L != "function" && L !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof L);
                B.prototype = Object.create(L && L.prototype, {
                    constructor: {
                        value: B,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), L && (Object.setPrototypeOf ? Object.setPrototypeOf(B, L) : B.__proto__ = L)
            }
            v.__esModule = !0;
            var f = w("../SystemRenderer"),
                c = b(f),
                s = w("./managers/MaskManager"),
                i = b(s),
                n = w("./managers/StencilManager"),
                e = b(n),
                t = w("./managers/FilterManager"),
                r = b(t),
                o = w("./utils/RenderTarget"),
                a = b(o),
                h = w("./utils/ObjectRenderer"),
                d = b(h),
                l = w("./TextureManager"),
                p = b(l),
                y = w("../../textures/BaseTexture"),
                x = b(y),
                T = w("./TextureGarbageCollector"),
                S = b(T),
                E = w("./WebGLState"),
                _ = b(E),
                m = w("./utils/mapWebGLDrawModesToPixi"),
                M = b(m),
                A = w("./utils/validateContext"),
                I = b(A),
                N = w("../../utils"),
                P = w("pixi-gl-core"),
                D = b(P),
                C = w("../../const"),
                R = 0,
                F = function(B) {
                    function L(k, U, H) {
                        O(this, L);
                        var X = g(this, B.call(this, "WebGL", k, U, H));
                        return X.legacy = X.options.legacy, X.legacy && (D.default.VertexArrayObject.FORCE_NATIVE = !0), X.type = C.RENDERER_TYPE.WEBGL, X.handleContextLost = X.handleContextLost.bind(X), X.handleContextRestored = X.handleContextRestored.bind(X), X.view.addEventListener("webglcontextlost", X.handleContextLost, !1), X.view.addEventListener("webglcontextrestored", X.handleContextRestored, !1), X._contextOptions = {
                            alpha: X.transparent,
                            antialias: X.options.antialias,
                            premultipliedAlpha: X.transparent && X.transparent !== "notMultiplied",
                            stencil: !0,
                            preserveDrawingBuffer: X.options.preserveDrawingBuffer,
                            powerPreference: X.options.powerPreference
                        }, X._backgroundColorRgba[3] = X.transparent ? 0 : 1, X.maskManager = new i.default(X), X.stencilManager = new e.default(X), X.emptyRenderer = new d.default(X), X.currentRenderer = X.emptyRenderer, X.textureManager = null, X.filterManager = null, X.initPlugins(), X.options.context && (0, I.default)(X.options.context), X.gl = X.options.context || D.default.createContext(X.view, X._contextOptions), X.CONTEXT_UID = R++, X.state = new _.default(X.gl), X.renderingToScreen = !0, X.boundTextures = null, X._activeShader = null, X._activeVao = null, X._activeRenderTarget = null, X._initContext(), X.drawModes = (0, M.default)(X.gl), X._nextTextureLocation = 0, X.setBlendMode(0), X
                    }
                    return u(L, B), L.prototype._initContext = function() {
                        var k = this.gl;
                        k.isContextLost() && k.getExtension("WEBGL_lose_context") && k.getExtension("WEBGL_lose_context").restoreContext();
                        var U = k.getParameter(k.MAX_TEXTURE_IMAGE_UNITS);
                        this._activeShader = null, this._activeVao = null, this.boundTextures = new Array(U), this.emptyTextures = new Array(U), this.textureManager = new p.default(this), this.filterManager = new r.default(this), this.textureGC = new S.default(this), this.state.resetToDefault(), this.rootRenderTarget = new a.default(k, this.width, this.height, null, this.resolution, !0), this.rootRenderTarget.clearColor = this._backgroundColorRgba, this.bindRenderTarget(this.rootRenderTarget);
                        var H = new D.default.GLTexture.fromData(k, null, 1, 1),
                            X = {
                                _glTextures: {}
                            };
                        X._glTextures[this.CONTEXT_UID] = {};
                        for (var W = 0; W < U; W++) {
                            var V = new x.default;
                            V._glTextures[this.CONTEXT_UID] = H, this.boundTextures[W] = X, this.emptyTextures[W] = V, this.bindTexture(null, W)
                        }
                        this.emit("context", k), this.resize(this.screen.width, this.screen.height)
                    }, L.prototype.render = function(k, U, H, X, W) {
                        if (this.renderingToScreen = !U, this.emit("prerender"), this.gl && !this.gl.isContextLost()) {
                            if (this._nextTextureLocation = 0, U || (this._lastObjectRendered = k), !W) {
                                var V = k.parent;
                                k.parent = this._tempDisplayObjectParent, k.updateTransform(), k.parent = V
                            }
                            this.bindRenderTexture(U, X), this.currentRenderer.start(), (H !== void 0 ? H : this.clearBeforeRender) && this._activeRenderTarget.clear(), k.renderWebGL(this), this.currentRenderer.flush(), this.textureGC.update(), this.emit("postrender")
                        }
                    }, L.prototype.setObjectRenderer = function(k) {
                        this.currentRenderer !== k && (this.currentRenderer.stop(), this.currentRenderer = k, this.currentRenderer.start())
                    }, L.prototype.flush = function() {
                        this.setObjectRenderer(this.emptyRenderer)
                    }, L.prototype.resize = function(k, U) {
                        c.default.prototype.resize.call(this, k, U), this.rootRenderTarget.resize(k, U), this._activeRenderTarget === this.rootRenderTarget && (this.rootRenderTarget.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = this.rootRenderTarget.projectionMatrix.toArray(!0)))
                    }, L.prototype.setBlendMode = function(k) {
                        this.state.setBlendMode(k)
                    }, L.prototype.clear = function(k) {
                        this._activeRenderTarget.clear(k)
                    }, L.prototype.setTransform = function(k) {
                        this._activeRenderTarget.transform = k
                    }, L.prototype.clearRenderTexture = function(k, U) {
                        var H = k.baseTexture,
                            X = H._glRenderTargets[this.CONTEXT_UID];
                        return X && X.clear(U), this
                    }, L.prototype.bindRenderTexture = function(k, U) {
                        var H = void 0;
                        if (k) {
                            var X = k.baseTexture;
                            X._glRenderTargets[this.CONTEXT_UID] || this.textureManager.updateTexture(X, 0), this.unbindTexture(X), H = X._glRenderTargets[this.CONTEXT_UID], H.setFrame(k.frame)
                        } else H = this.rootRenderTarget;
                        return H.transform = U, this.bindRenderTarget(H), this
                    }, L.prototype.bindRenderTarget = function(k) {
                        return k !== this._activeRenderTarget && (this._activeRenderTarget = k, k.activate(), this._activeShader && (this._activeShader.uniforms.projectionMatrix = k.projectionMatrix.toArray(!0)), this.stencilManager.setMaskStack(k.stencilMaskStack)), this
                    }, L.prototype.bindShader = function(k, U) {
                        return this._activeShader !== k && (this._activeShader = k, k.bind(), U !== !1 && (k.uniforms.projectionMatrix = this._activeRenderTarget.projectionMatrix.toArray(!0))), this
                    }, L.prototype.bindTexture = function(k, U, H) {
                        if (k = k || this.emptyTextures[U], k = k.baseTexture || k, k.touched = this.textureGC.count, H) U = U || 0;
                        else {
                            for (var X = 0; X < this.boundTextures.length; X++)
                                if (this.boundTextures[X] === k) return X;
                            U === void 0 && (this._nextTextureLocation++, this._nextTextureLocation %= this.boundTextures.length, U = this.boundTextures.length - this._nextTextureLocation - 1)
                        }
                        var W = this.gl,
                            V = k._glTextures[this.CONTEXT_UID];
                        return V ? (this.boundTextures[U] = k, W.activeTexture(W.TEXTURE0 + U), W.bindTexture(W.TEXTURE_2D, V.texture)) : this.textureManager.updateTexture(k, U), U
                    }, L.prototype.unbindTexture = function(k) {
                        var U = this.gl;
                        k = k.baseTexture || k;
                        for (var H = 0; H < this.boundTextures.length; H++) this.boundTextures[H] === k && (this.boundTextures[H] = this.emptyTextures[H], U.activeTexture(U.TEXTURE0 + H), U.bindTexture(U.TEXTURE_2D, this.emptyTextures[H]._glTextures[this.CONTEXT_UID].texture));
                        return this
                    }, L.prototype.createVao = function() {
                        return new D.default.VertexArrayObject(this.gl, this.state.attribState)
                    }, L.prototype.bindVao = function(k) {
                        return this._activeVao === k ? this : (k ? k.bind() : this._activeVao && this._activeVao.unbind(), this._activeVao = k, this)
                    }, L.prototype.reset = function() {
                        this.setObjectRenderer(this.emptyRenderer), this.bindVao(null), this._activeShader = null, this._activeRenderTarget = this.rootRenderTarget;
                        for (var k = 0; k < this.boundTextures.length; k++) this.boundTextures[k] = this.emptyTextures[k];
                        return this.rootRenderTarget.activate(), this.state.resetToDefault(), this
                    }, L.prototype.handleContextLost = function(k) {
                        k.preventDefault()
                    }, L.prototype.handleContextRestored = function() {
                        this.textureManager.removeAll(), this.filterManager.destroy(!0), this._initContext()
                    }, L.prototype.destroy = function(k) {
                        this.destroyPlugins(), this.view.removeEventListener("webglcontextlost", this.handleContextLost), this.view.removeEventListener("webglcontextrestored", this.handleContextRestored), this.textureManager.destroy(), B.prototype.destroy.call(this, k), this.uid = 0, this.maskManager.destroy(), this.stencilManager.destroy(), this.filterManager.destroy(), this.maskManager = null, this.filterManager = null, this.textureManager = null, this.currentRenderer = null, this.handleContextLost = null, this.handleContextRestored = null, this._contextOptions = null, this.gl.useProgram(null), this.gl.getExtension("WEBGL_lose_context") && this.gl.getExtension("WEBGL_lose_context").loseContext(), this.gl = null
                    }, L
                }(c.default);
            v.default = F, N.pluginTarget.mixin(F)
        }, {
            "../../const": 46,
            "../../textures/BaseTexture": 112,
            "../../utils": 125,
            "../SystemRenderer": 76,
            "./TextureGarbageCollector": 82,
            "./TextureManager": 83,
            "./WebGLState": 85,
            "./managers/FilterManager": 90,
            "./managers/MaskManager": 91,
            "./managers/StencilManager": 92,
            "./utils/ObjectRenderer": 94,
            "./utils/RenderTarget": 96,
            "./utils/mapWebGLDrawModesToPixi": 99,
            "./utils/validateContext": 100,
            "pixi-gl-core": 15
        }],
        85: [function(w, j, v) {
            "use strict";

            function b(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function O(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("./utils/mapWebGLBlendModesToPixi"),
                u = b(g),
                f = 0,
                c = 1,
                s = 2,
                i = 3,
                n = 4,
                e = function() {
                    function t(r) {
                        O(this, t), this.activeState = new Uint8Array(16), this.defaultState = new Uint8Array(16), this.defaultState[0] = 1, this.stackIndex = 0, this.stack = [], this.gl = r, this.maxAttribs = r.getParameter(r.MAX_VERTEX_ATTRIBS), this.attribState = {
                            tempAttribState: new Array(this.maxAttribs),
                            attribState: new Array(this.maxAttribs)
                        }, this.blendModes = (0, u.default)(r), this.nativeVaoExtension = r.getExtension("OES_vertex_array_object") || r.getExtension("MOZ_OES_vertex_array_object") || r.getExtension("WEBKIT_OES_vertex_array_object")
                    }
                    return t.prototype.push = function() {
                        var r = this.stack[this.stackIndex];
                        r || (r = this.stack[this.stackIndex] = new Uint8Array(16)), ++this.stackIndex;
                        for (var o = 0; o < this.activeState.length; o++) r[o] = this.activeState[o]
                    }, t.prototype.pop = function() {
                        var r = this.stack[--this.stackIndex];
                        this.setState(r)
                    }, t.prototype.setState = function(r) {
                        this.setBlend(r[f]), this.setDepthTest(r[c]), this.setFrontFace(r[s]), this.setCullFace(r[i]), this.setBlendMode(r[n])
                    }, t.prototype.setBlend = function(r) {
                        r = r ? 1 : 0, this.activeState[f] !== r && (this.activeState[f] = r, this.gl[r ? "enable" : "disable"](this.gl.BLEND))
                    }, t.prototype.setBlendMode = function(r) {
                        if (r !== this.activeState[n]) {
                            this.activeState[n] = r;
                            var o = this.blendModes[r];
                            o.length === 2 ? this.gl.blendFunc(o[0], o[1]) : this.gl.blendFuncSeparate(o[0], o[1], o[2], o[3])
                        }
                    }, t.prototype.setDepthTest = function(r) {
                        r = r ? 1 : 0, this.activeState[c] !== r && (this.activeState[c] = r, this.gl[r ? "enable" : "disable"](this.gl.DEPTH_TEST))
                    }, t.prototype.setCullFace = function(r) {
                        r = r ? 1 : 0, this.activeState[i] !== r && (this.activeState[i] = r, this.gl[r ? "enable" : "disable"](this.gl.CULL_FACE))
                    }, t.prototype.setFrontFace = function(r) {
                        r = r ? 1 : 0, this.activeState[s] !== r && (this.activeState[s] = r, this.gl.frontFace(this.gl[r ? "CW" : "CCW"]))
                    }, t.prototype.resetAttributes = function() {
                        for (var r = 0; r < this.attribState.tempAttribState.length; r++) this.attribState.tempAttribState[r] = 0;
                        for (var o = 0; o < this.attribState.attribState.length; o++) this.attribState.attribState[o] = 0;
                        for (var a = 1; a < this.maxAttribs; a++) this.gl.disableVertexAttribArray(a)
                    }, t.prototype.resetToDefault = function() {
                        this.nativeVaoExtension && this.nativeVaoExtension.bindVertexArrayOES(null), this.resetAttributes();
                        for (var r = 0; r < this.activeState.length; ++r) this.activeState[r] = 32;
                        this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.setState(this.defaultState)
                    }, t
                }();
            v.default = e
        }, {
            "./utils/mapWebGLBlendModesToPixi": 98
        }],
        86: [function(w, j, v) {
            "use strict";

            function b(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }

            function O(r, o) {
                if (!(r instanceof o)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = function() {
                    function r(o, a) {
                        for (var h = 0; h < a.length; h++) {
                            var d = a[h];
                            d.enumerable = d.enumerable || !1, d.configurable = !0, "value" in d && (d.writable = !0), Object.defineProperty(o, d.key, d)
                        }
                    }
                    return function(o, a, h) {
                        return a && r(o.prototype, a), h && r(o, h), o
                    }
                }(),
                u = w("./extractUniformsFromSrc"),
                f = b(u),
                c = w("../../../utils"),
                s = w("../../../const"),
                i = w("../../../settings"),
                n = b(i),
                e = {},
                t = function() {
                    function r(o, a, h) {
                        O(this, r), this.vertexSrc = o || r.defaultVertexSrc, this.fragmentSrc = a || r.defaultFragmentSrc, this._blendMode = s.BLEND_MODES.NORMAL, this.uniformData = h || (0, f.default)(this.vertexSrc, this.fragmentSrc, "projectionMatrix|uSampler"), this.uniforms = {};
                        for (var d in this.uniformData) this.uniforms[d] = this.uniformData[d].value, this.uniformData[d].type && (this.uniformData[d].type = this.uniformData[d].type.toLowerCase());
                        this.glShaders = {}, e[this.vertexSrc + this.fragmentSrc] || (e[this.vertexSrc + this.fragmentSrc] = (0, c.uid)()), this.glShaderKey = e[this.vertexSrc + this.fragmentSrc], this.padding = 4, this.resolution = n.default.FILTER_RESOLUTION, this.enabled = !0, this.autoFit = !0
                    }
                    return r.prototype.apply = function(o, a, h, d, l) {
                        o.applyFilter(this, a, h, d)
                    }, g(r, [{
                        key: "blendMode",
                        get: function() {
                            return this._blendMode
                        },
                        set: function(o) {
                            this._blendMode = o
                        }
                    }], [{
                        key: "defaultVertexSrc",
                        get: function() {
                            return ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform mat3 projectionMatrix;", "uniform mat3 filterMatrix;", "varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "void main(void){", "   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);", "   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;", "   vTextureCoord = aTextureCoord ;", "}"].join(`
`)
                        }
                    }, {
                        key: "defaultFragmentSrc",
                        get: function() {
                            return ["varying vec2 vTextureCoord;", "varying vec2 vFilterCoord;", "uniform sampler2D uSampler;", "uniform sampler2D filterSampler;", "void main(void){", "   vec4 masky = texture2D(filterSampler, vFilterCoord);", "   vec4 sample = texture2D(uSampler, vTextureCoord);", "   vec4 color;", "   if(mod(vFilterCoord.x, 1.0) > 0.5)", "   {", "     color = vec4(1.0, 0.0, 0.0, 1.0);", "   }", "   else", "   {", "     color = vec4(0.0, 1.0, 0.0, 1.0);", "   }", "   gl_FragColor = mix(sample, masky, 0.5);", "   gl_FragColor *= sample.a;", "}"].join(`
`)
                        }
                    }]), r
                }();
            v.default = t
        }, {
            "../../../const": 46,
            "../../../settings": 101,
            "../../../utils": 125,
            "./extractUniformsFromSrc": 87
        }],
        87: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i, n) {
                var e = g(s, n),
                    t = g(i, n);
                return Object.assign(e, t)
            }

            function g(s) {
                for (var i = new RegExp("^(projectionMatrix|uSampler|filterArea|filterClamp)$"), n = {}, e = void 0, t = s.replace(/\s+/g, " ").split(/\s*;\s*/), r = 0; r < t.length; r++) {
                    var o = t[r].trim();
                    if (o.indexOf("uniform") > -1) {
                        var a = o.split(" "),
                            h = a[1],
                            d = a[2],
                            l = 1;
                        d.indexOf("[") > -1 && (e = d.split(/\[|]/), d = e[0], l *= Number(e[1])), d.match(i) || (n[d] = {
                            value: c(h, l),
                            name: d,
                            type: h
                        })
                    }
                }
                return n
            }
            v.__esModule = !0, v.default = O;
            var u = w("pixi-gl-core"),
                f = b(u),
                c = f.default.shader.defaultValue
        }, {
            "pixi-gl-core": 15
        }],
        88: [function(w, j, v) {
            "use strict";

            function b(f, c, s) {
                var i = f.identity();
                return i.translate(c.x / s.width, c.y / s.height), i.scale(s.width, s.height), i
            }

            function O(f, c, s) {
                var i = f.identity();
                i.translate(c.x / s.width, c.y / s.height);
                var n = s.width / c.width,
                    e = s.height / c.height;
                return i.scale(n, e), i
            }

            function g(f, c, s, i) {
                var n = i._texture.orig,
                    e = f.set(s.width, 0, 0, s.height, c.x, c.y),
                    t = i.worldTransform.copy(u.Matrix.TEMP_MATRIX);
                return t.invert(), e.prepend(t), e.scale(1 / n.width, 1 / n.height), e.translate(i.anchor.x, i.anchor.y), e
            }
            v.__esModule = !0, v.calculateScreenSpaceMatrix = b, v.calculateNormalizedScreenSpaceMatrix = O, v.calculateSpriteMatrix = g;
            var u = w("../../../math")
        }, {
            "../../../math": 70
        }],
        89: [function(w, j, v) {
            "use strict";

            function b(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function O(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function g(t, r) {
                if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !r || typeof r != "object" && typeof r != "function" ? t : r
            }

            function u(t, r) {
                if (typeof r != "function" && r !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof r);
                t.prototype = Object.create(r && r.prototype, {
                    constructor: {
                        value: t,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), r && (Object.setPrototypeOf ? Object.setPrototypeOf(t, r) : t.__proto__ = r)
            }
            v.__esModule = !0;
            var f = w("../Filter"),
                c = b(f),
                s = w("../../../../math"),
                i = (w("path"), w("../../../../textures/TextureMatrix")),
                n = b(i),
                e = function(t) {
                    function r(o) {
                        O(this, r);
                        var a = new s.Matrix,
                            h = g(this, t.call(this, `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 otherMatrix;

varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
}
`, `varying vec2 vMaskCoord;
varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform sampler2D mask;
uniform float alpha;
uniform vec4 maskClamp;

void main(void)
{
    float clip = step(3.5,
        step(maskClamp.x, vMaskCoord.x) +
        step(maskClamp.y, vMaskCoord.y) +
        step(vMaskCoord.x, maskClamp.z) +
        step(vMaskCoord.y, maskClamp.w));

    vec4 original = texture2D(uSampler, vTextureCoord);
    vec4 masky = texture2D(mask, vMaskCoord);

    original *= (masky.r * masky.a * alpha * clip);

    gl_FragColor = original;
}
`));
                        return o.renderable = !1, h.maskSprite = o, h.maskMatrix = a, h
                    }
                    return u(r, t), r.prototype.apply = function(o, a, h) {
                        var d = this.maskSprite,
                            l = this.maskSprite.texture;
                        l.valid && (l.transform || (l.transform = new n.default(l, 0)), l.transform.update(), this.uniforms.mask = l, this.uniforms.otherMatrix = o.calculateSpriteMatrix(this.maskMatrix, d).prepend(l.transform.mapCoord), this.uniforms.alpha = d.worldAlpha, this.uniforms.maskClamp = l.transform.uClampFrame, o.applyFilter(this, a, h))
                    }, r
                }(c.default);
            v.default = e
        }, {
            "../../../../math": 70,
            "../../../../textures/TextureMatrix": 116,
            "../Filter": 86,
            path: 8
        }],
        90: [function(w, j, v) {
            "use strict";

            function b(S) {
                if (S && S.__esModule) return S;
                var E = {};
                if (S != null)
                    for (var _ in S) Object.prototype.hasOwnProperty.call(S, _) && (E[_] = S[_]);
                return E.default = S, E
            }

            function O(S) {
                return S && S.__esModule ? S : {
                    default: S
                }
            }

            function g(S, E) {
                if (!S) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !E || typeof E != "object" && typeof E != "function" ? S : E
            }

            function u(S, E) {
                if (typeof E != "function" && E !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof E);
                S.prototype = Object.create(E && E.prototype, {
                    constructor: {
                        value: S,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(S, E) : S.__proto__ = E)
            }

            function f(S, E) {
                if (!(S instanceof E)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var c = w("./WebGLManager"),
                s = O(c),
                i = w("../utils/RenderTarget"),
                n = O(i),
                e = w("../utils/Quad"),
                t = O(e),
                r = w("../../../math"),
                o = w("../../../Shader"),
                a = O(o),
                h = w("../filters/filterTransforms"),
                d = b(h),
                l = w("bit-twiddle"),
                p = O(l),
                y = function S() {
                    f(this, S), this.renderTarget = null, this.sourceFrame = new r.Rectangle, this.destinationFrame = new r.Rectangle, this.filters = [], this.target = null, this.resolution = 1
                },
                x = "screen",
                T = function(S) {
                    function E(_) {
                        f(this, E);
                        var m = g(this, S.call(this, _));
                        return m.gl = m.renderer.gl, m.quad = new t.default(m.gl, _.state.attribState), m.shaderCache = {}, m.pool = {}, m.filterData = null, m.managedFilters = [], m.renderer.on("prerender", m.onPrerender, m), m._screenWidth = _.view.width, m._screenHeight = _.view.height, m
                    }
                    return u(E, S), E.prototype.pushFilter = function(_, m) {
                        var M = this.renderer,
                            A = this.filterData;
                        if (!A) {
                            A = this.renderer._activeRenderTarget.filterStack;
                            var I = new y;
                            I.sourceFrame = I.destinationFrame = this.renderer._activeRenderTarget.size, I.renderTarget = M._activeRenderTarget, this.renderer._activeRenderTarget.filterData = A = {
                                index: 0,
                                stack: [I]
                            }, this.filterData = A
                        }
                        var N = A.stack[++A.index],
                            P = A.stack[0].destinationFrame;
                        N || (N = A.stack[A.index] = new y);
                        var D = _.filterArea && _.filterArea.x === 0 && _.filterArea.y === 0 && _.filterArea.width === M.screen.width && _.filterArea.height === M.screen.height,
                            C = m[0].resolution,
                            R = 0 | m[0].padding,
                            F = D ? M.screen : _.filterArea || _.getBounds(!0),
                            B = N.sourceFrame,
                            L = N.destinationFrame;
                        B.x = (F.x * C | 0) / C, B.y = (F.y * C | 0) / C, B.width = (F.width * C | 0) / C, B.height = (F.height * C | 0) / C, D || (A.stack[0].renderTarget.transform || m[0].autoFit && B.fit(P), B.pad(R)), L.width = B.width, L.height = B.height;
                        var k = this.getPotRenderTarget(M.gl, B.width, B.height, C);
                        N.target = _, N.filters = m, N.resolution = C, N.renderTarget = k, k.setFrame(L, B), M.bindRenderTarget(k), k.clear()
                    }, E.prototype.popFilter = function() {
                        var _ = this.filterData,
                            m = _.stack[_.index - 1],
                            M = _.stack[_.index];
                        this.quad.map(M.renderTarget.size, M.sourceFrame).upload();
                        var A = M.filters;
                        if (A.length === 1) A[0].apply(this, M.renderTarget, m.renderTarget, !1, M), this.freePotRenderTarget(M.renderTarget);
                        else {
                            var I = M.renderTarget,
                                N = this.getPotRenderTarget(this.renderer.gl, M.sourceFrame.width, M.sourceFrame.height, M.resolution);
                            N.setFrame(M.destinationFrame, M.sourceFrame), N.clear();
                            var P = 0;
                            for (P = 0; P < A.length - 1; ++P) {
                                A[P].apply(this, I, N, !0, M);
                                var D = I;
                                I = N, N = D
                            }
                            A[P].apply(this, I, m.renderTarget, !1, M), this.freePotRenderTarget(I), this.freePotRenderTarget(N)
                        }
                        _.index--, _.index === 0 && (this.filterData = null)
                    }, E.prototype.applyFilter = function(_, m, M, A) {
                        var I = this.renderer,
                            N = I.gl,
                            P = _.glShaders[I.CONTEXT_UID];
                        P || (_.glShaderKey ? (P = this.shaderCache[_.glShaderKey], P || (P = new a.default(this.gl, _.vertexSrc, _.fragmentSrc), _.glShaders[I.CONTEXT_UID] = this.shaderCache[_.glShaderKey] = P, this.managedFilters.push(_))) : (P = _.glShaders[I.CONTEXT_UID] = new a.default(this.gl, _.vertexSrc, _.fragmentSrc), this.managedFilters.push(_)), I.bindVao(null), this.quad.initVao(P)), I.bindVao(this.quad.vao), I.bindRenderTarget(M), A && (N.disable(N.SCISSOR_TEST), I.clear(), N.enable(N.SCISSOR_TEST)), M === I.maskManager.scissorRenderTarget && I.maskManager.pushScissorMask(null, I.maskManager.scissorData), I.bindShader(P);
                        var D = this.renderer.emptyTextures[0];
                        this.renderer.boundTextures[0] = D, this.syncUniforms(P, _), I.state.setBlendMode(_.blendMode), N.activeTexture(N.TEXTURE0), N.bindTexture(N.TEXTURE_2D, m.texture.texture), this.quad.vao.draw(this.renderer.gl.TRIANGLES, 6, 0), N.bindTexture(N.TEXTURE_2D, D._glTextures[this.renderer.CONTEXT_UID].texture)
                    }, E.prototype.syncUniforms = function(_, m) {
                        var M = m.uniformData,
                            A = m.uniforms,
                            I = 1,
                            N = void 0;
                        if (_.uniforms.filterArea) {
                            N = this.filterData.stack[this.filterData.index];
                            var P = _.uniforms.filterArea;
                            P[0] = N.renderTarget.size.width, P[1] = N.renderTarget.size.height, P[2] = N.sourceFrame.x, P[3] = N.sourceFrame.y, _.uniforms.filterArea = P
                        }
                        if (_.uniforms.filterClamp) {
                            N = N || this.filterData.stack[this.filterData.index];
                            var D = _.uniforms.filterClamp;
                            D[0] = 0, D[1] = 0, D[2] = (N.sourceFrame.width - 1) / N.renderTarget.size.width, D[3] = (N.sourceFrame.height - 1) / N.renderTarget.size.height, _.uniforms.filterClamp = D
                        }
                        for (var C in M) {
                            var R = M[C].type;
                            if (R === "sampler2d" && A[C] !== 0) {
                                if (A[C].baseTexture) _.uniforms[C] = this.renderer.bindTexture(A[C].baseTexture, I);
                                else {
                                    _.uniforms[C] = I;
                                    var F = this.renderer.gl;
                                    this.renderer.boundTextures[I] = this.renderer.emptyTextures[I], F.activeTexture(F.TEXTURE0 + I), A[C].texture.bind()
                                }
                                I++
                            } else if (R === "mat3") A[C].a !== void 0 ? _.uniforms[C] = A[C].toArray(!0) : _.uniforms[C] = A[C];
                            else if (R === "vec2")
                                if (A[C].x !== void 0) {
                                    var B = _.uniforms[C] || new Float32Array(2);
                                    B[0] = A[C].x, B[1] = A[C].y, _.uniforms[C] = B
                                } else _.uniforms[C] = A[C];
                            else R === "float" ? _.uniforms.data[C].value !== M[C] && (_.uniforms[C] = A[C]) : _.uniforms[C] = A[C]
                        }
                    }, E.prototype.getRenderTarget = function(_, m) {
                        var M = this.filterData.stack[this.filterData.index],
                            A = this.getPotRenderTarget(this.renderer.gl, M.sourceFrame.width, M.sourceFrame.height, m || M.resolution);
                        return A.setFrame(M.destinationFrame, M.sourceFrame), A
                    }, E.prototype.returnRenderTarget = function(_) {
                        this.freePotRenderTarget(_)
                    }, E.prototype.calculateScreenSpaceMatrix = function(_) {
                        var m = this.filterData.stack[this.filterData.index];
                        return d.calculateScreenSpaceMatrix(_, m.sourceFrame, m.renderTarget.size)
                    }, E.prototype.calculateNormalizedScreenSpaceMatrix = function(_) {
                        var m = this.filterData.stack[this.filterData.index];
                        return d.calculateNormalizedScreenSpaceMatrix(_, m.sourceFrame, m.renderTarget.size, m.destinationFrame)
                    }, E.prototype.calculateSpriteMatrix = function(_, m) {
                        var M = this.filterData.stack[this.filterData.index];
                        return d.calculateSpriteMatrix(_, M.sourceFrame, M.renderTarget.size, m)
                    }, E.prototype.destroy = function() {
                        var _ = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
                            m = this.renderer,
                            M = this.managedFilters;
                        m.off("prerender", this.onPrerender, this);
                        for (var A = 0; A < M.length; A++) _ || M[A].glShaders[m.CONTEXT_UID].destroy(), delete M[A].glShaders[m.CONTEXT_UID];
                        this.shaderCache = {}, _ ? this.pool = {} : this.emptyPool()
                    }, E.prototype.getPotRenderTarget = function(_, m, M, A) {
                        var I = x;
                        m *= A, M *= A, m === this._screenWidth && M === this._screenHeight || (m = p.default.nextPow2(m), M = p.default.nextPow2(M), I = (65535 & m) << 16 | 65535 & M), this.pool[I] || (this.pool[I] = []);
                        var N = this.pool[I].pop();
                        if (!N) {
                            var P = this.renderer.boundTextures[0];
                            _.activeTexture(_.TEXTURE0), N = new n.default(_, m, M, null, 1), _.bindTexture(_.TEXTURE_2D, P._glTextures[this.renderer.CONTEXT_UID].texture)
                        }
                        return N.resolution = A, N.defaultFrame.width = N.size.width = m / A, N.defaultFrame.height = N.size.height = M / A, N
                    }, E.prototype.emptyPool = function() {
                        for (var _ in this.pool) {
                            var m = this.pool[_];
                            if (m)
                                for (var M = 0; M < m.length; M++) m[M].destroy(!0)
                        }
                        this.pool = {}
                    }, E.prototype.freePotRenderTarget = function(_) {
                        var m = _.size.width * _.resolution,
                            M = _.size.height * _.resolution,
                            A = x;
                        m === this._screenWidth && M === this._screenHeight || (A = (65535 & m) << 16 | 65535 & M), this.pool[A].push(_)
                    }, E.prototype.onPrerender = function() {
                        if (this._screenWidth !== this.renderer.view.width || this._screenHeight !== this.renderer.view.height) {
                            this._screenWidth = this.renderer.view.width, this._screenHeight = this.renderer.view.height;
                            var _ = this.pool[x];
                            if (_)
                                for (var m = 0; m < _.length; m++) _[m].destroy(!0);
                            this.pool[x] = []
                        }
                    }, E
                }(s.default);
            v.default = T
        }, {
            "../../../Shader": 44,
            "../../../math": 70,
            "../filters/filterTransforms": 88,
            "../utils/Quad": 95,
            "../utils/RenderTarget": 96,
            "./WebGLManager": 93,
            "bit-twiddle": 1
        }],
        91: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            v.__esModule = !0;
            var f = w("./WebGLManager"),
                c = b(f),
                s = w("../filters/spriteMask/SpriteMaskFilter"),
                i = b(s),
                n = function(e) {
                    function t(r) {
                        O(this, t);
                        var o = g(this, e.call(this, r));
                        return o.scissor = !1, o.scissorData = null, o.scissorRenderTarget = null, o.enableScissor = !0, o.alphaMaskPool = [], o.alphaMaskIndex = 0, o
                    }
                    return u(t, e), t.prototype.pushMask = function(r, o) {
                        if (o.texture) this.pushSpriteMask(r, o);
                        else if (this.enableScissor && !this.scissor && this.renderer._activeRenderTarget.root && !this.renderer.stencilManager.stencilMaskStack.length && o.isFastRect()) {
                            var a = o.worldTransform,
                                h = Math.atan2(a.b, a.a);
                            h = Math.round(h * (180 / Math.PI)), h % 90 ? this.pushStencilMask(o) : this.pushScissorMask(r, o)
                        } else this.pushStencilMask(o)
                    }, t.prototype.popMask = function(r, o) {
                        o.texture ? this.popSpriteMask(r, o) : this.enableScissor && !this.renderer.stencilManager.stencilMaskStack.length ? this.popScissorMask(r, o) : this.popStencilMask(r, o)
                    }, t.prototype.pushSpriteMask = function(r, o) {
                        var a = this.alphaMaskPool[this.alphaMaskIndex];
                        a || (a = this.alphaMaskPool[this.alphaMaskIndex] = [new i.default(o)]), a[0].resolution = this.renderer.resolution, a[0].maskSprite = o, r.filterArea = o.getBounds(!0), this.renderer.filterManager.pushFilter(r, a), this.alphaMaskIndex++
                    }, t.prototype.popSpriteMask = function() {
                        this.renderer.filterManager.popFilter(), this.alphaMaskIndex--
                    }, t.prototype.pushStencilMask = function(r) {
                        this.renderer.currentRenderer.stop(), this.renderer.stencilManager.pushStencil(r)
                    }, t.prototype.popStencilMask = function() {
                        this.renderer.currentRenderer.stop(), this.renderer.stencilManager.popStencil()
                    }, t.prototype.pushScissorMask = function(r, o) {
                        o.renderable = !0;
                        var a = this.renderer._activeRenderTarget,
                            h = o.getBounds();
                        h.fit(a.size), o.renderable = !1, this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST);
                        var d = this.renderer.resolution;
                        this.renderer.gl.scissor(h.x * d, (a.root ? a.size.height - h.y - h.height : h.y) * d, h.width * d, h.height * d), this.scissorRenderTarget = a, this.scissorData = o, this.scissor = !0
                    }, t.prototype.popScissorMask = function() {
                        this.scissorRenderTarget = null, this.scissorData = null, this.scissor = !1;
                        var r = this.renderer.gl;
                        r.disable(r.SCISSOR_TEST)
                    }, t
                }(c.default);
            v.default = n
        }, {
            "../filters/spriteMask/SpriteMaskFilter": 89,
            "./WebGLManager": 93
        }],
        92: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(i, n) {
                if (!i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || typeof n != "object" && typeof n != "function" ? i : n
            }

            function u(i, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                i.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(i, n) : i.__proto__ = n)
            }
            v.__esModule = !0;
            var f = w("./WebGLManager"),
                c = b(f),
                s = function(i) {
                    function n(e) {
                        O(this, n);
                        var t = g(this, i.call(this, e));
                        return t.stencilMaskStack = null, t
                    }
                    return u(n, i), n.prototype.setMaskStack = function(e) {
                        this.stencilMaskStack = e;
                        var t = this.renderer.gl;
                        e.length === 0 ? t.disable(t.STENCIL_TEST) : t.enable(t.STENCIL_TEST)
                    }, n.prototype.pushStencil = function(e) {
                        this.renderer.setObjectRenderer(this.renderer.plugins.graphics), this.renderer._activeRenderTarget.attachStencilBuffer();
                        var t = this.renderer.gl,
                            r = this.stencilMaskStack.length;
                        r === 0 && t.enable(t.STENCIL_TEST), this.stencilMaskStack.push(e), t.colorMask(!1, !1, !1, !1), t.stencilFunc(t.EQUAL, r, this._getBitwiseMask()), t.stencilOp(t.KEEP, t.KEEP, t.INCR), this.renderer.plugins.graphics.render(e), this._useCurrent()
                    }, n.prototype.popStencil = function() {
                        this.renderer.setObjectRenderer(this.renderer.plugins.graphics);
                        var e = this.renderer.gl,
                            t = this.stencilMaskStack.pop();
                        this.stencilMaskStack.length === 0 ? (e.disable(e.STENCIL_TEST), e.clear(e.STENCIL_BUFFER_BIT), e.clearStencil(0)) : (e.colorMask(!1, !1, !1, !1), e.stencilOp(e.KEEP, e.KEEP, e.DECR), this.renderer.plugins.graphics.render(t), this._useCurrent())
                    }, n.prototype._useCurrent = function() {
                        var e = this.renderer.gl;
                        e.colorMask(!0, !0, !0, !0), e.stencilFunc(e.EQUAL, this.stencilMaskStack.length, this._getBitwiseMask()), e.stencilOp(e.KEEP, e.KEEP, e.KEEP)
                    }, n.prototype._getBitwiseMask = function() {
                        return (1 << this.stencilMaskStack.length) - 1
                    }, n.prototype.destroy = function() {
                        c.default.prototype.destroy.call(this), this.stencilMaskStack.stencilStack = null
                    }, n
                }(c.default);
            v.default = s
        }, {
            "./WebGLManager": 93
        }],
        93: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                if (!(g instanceof u)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function g(u) {
                    b(this, g), this.renderer = u, this.renderer.on("context", this.onContextChange, this)
                }
                return g.prototype.onContextChange = function() {}, g.prototype.destroy = function() {
                    this.renderer.off("context", this.onContextChange, this), this.renderer = null
                }, g
            }();
            v.default = O
        }, {}],
        94: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(i, n) {
                if (!i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || typeof n != "object" && typeof n != "function" ? i : n
            }

            function u(i, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                i.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(i, n) : i.__proto__ = n)
            }
            v.__esModule = !0;
            var f = w("../managers/WebGLManager"),
                c = b(f),
                s = function(i) {
                    function n() {
                        return O(this, n), g(this, i.apply(this, arguments))
                    }
                    return u(n, i), n.prototype.start = function() {}, n.prototype.stop = function() {
                        this.flush()
                    }, n.prototype.flush = function() {}, n.prototype.render = function(e) {}, n
                }(c.default);
            v.default = s
        }, {
            "../managers/WebGLManager": 93
        }],
        95: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("pixi-gl-core"),
                u = b(g),
                f = w("../../../utils/createIndicesForQuads"),
                c = b(f),
                s = function() {
                    function i(n, e) {
                        O(this, i), this.gl = n, this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.interleaved = new Float32Array(16);
                        for (var t = 0; t < 4; t++) this.interleaved[4 * t] = this.vertices[2 * t], this.interleaved[4 * t + 1] = this.vertices[2 * t + 1], this.interleaved[4 * t + 2] = this.uvs[2 * t], this.interleaved[4 * t + 3] = this.uvs[2 * t + 1];
                        this.indices = (0, c.default)(1), this.vertexBuffer = u.default.GLBuffer.createVertexBuffer(n, this.interleaved, n.STATIC_DRAW), this.indexBuffer = u.default.GLBuffer.createIndexBuffer(n, this.indices, n.STATIC_DRAW), this.vao = new u.default.VertexArrayObject(n, e)
                    }
                    return i.prototype.initVao = function(n) {
                        this.vao.clear().addIndex(this.indexBuffer).addAttribute(this.vertexBuffer, n.attributes.aVertexPosition, this.gl.FLOAT, !1, 16, 0).addAttribute(this.vertexBuffer, n.attributes.aTextureCoord, this.gl.FLOAT, !1, 16, 8)
                    }, i.prototype.map = function(n, e) {
                        var t = 0,
                            r = 0;
                        return this.uvs[0] = t, this.uvs[1] = r, this.uvs[2] = t + e.width / n.width, this.uvs[3] = r, this.uvs[4] = t + e.width / n.width, this.uvs[5] = r + e.height / n.height, this.uvs[6] = t, this.uvs[7] = r + e.height / n.height, t = e.x, r = e.y, this.vertices[0] = t, this.vertices[1] = r, this.vertices[2] = t + e.width, this.vertices[3] = r, this.vertices[4] = t + e.width, this.vertices[5] = r + e.height, this.vertices[6] = t, this.vertices[7] = r + e.height, this
                    }, i.prototype.upload = function() {
                        for (var n = 0; n < 4; n++) this.interleaved[4 * n] = this.vertices[2 * n], this.interleaved[4 * n + 1] = this.vertices[2 * n + 1], this.interleaved[4 * n + 2] = this.uvs[2 * n], this.interleaved[4 * n + 3] = this.uvs[2 * n + 1];
                        return this.vertexBuffer.upload(this.interleaved), this
                    }, i.prototype.destroy = function() {
                        var n = this.gl;
                        n.deleteBuffer(this.vertexBuffer), n.deleteBuffer(this.indexBuffer)
                    }, i
                }();
            v.default = s
        }, {
            "../../../utils/createIndicesForQuads": 123,
            "pixi-gl-core": 15
        }],
        96: [function(w, j, v) {
            "use strict";

            function b(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function O(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("../../../math"),
                u = w("../../../const"),
                f = w("../../../settings"),
                c = b(f),
                s = w("pixi-gl-core"),
                i = function() {
                    function n(e, t, r, o, a, h) {
                        O(this, n), this.gl = e, this.frameBuffer = null, this.texture = null, this.clearColor = [0, 0, 0, 0], this.size = new g.Rectangle(0, 0, 1, 1), this.resolution = a || c.default.RESOLUTION, this.projectionMatrix = new g.Matrix, this.transform = null, this.frame = null, this.defaultFrame = new g.Rectangle, this.destinationFrame = null, this.sourceFrame = null, this.stencilBuffer = null, this.stencilMaskStack = [], this.filterData = null, this.scaleMode = o !== void 0 ? o : c.default.SCALE_MODE, this.root = h, this.root ? (this.frameBuffer = new s.GLFramebuffer(e, 100, 100), this.frameBuffer.framebuffer = null) : (this.frameBuffer = s.GLFramebuffer.createRGBA(e, 100, 100), this.scaleMode === u.SCALE_MODES.NEAREST ? this.frameBuffer.texture.enableNearestScaling() : this.frameBuffer.texture.enableLinearScaling(), this.texture = this.frameBuffer.texture), this.setFrame(), this.resize(t, r)
                    }
                    return n.prototype.clear = function(e) {
                        var t = e || this.clearColor;
                        this.frameBuffer.clear(t[0], t[1], t[2], t[3])
                    }, n.prototype.attachStencilBuffer = function() {
                        this.root || this.frameBuffer.enableStencil()
                    }, n.prototype.setFrame = function(e, t) {
                        this.destinationFrame = e || this.destinationFrame || this.defaultFrame, this.sourceFrame = t || this.sourceFrame || this.destinationFrame
                    }, n.prototype.activate = function() {
                        var e = this.gl;
                        this.frameBuffer.bind(), this.calculateProjection(this.destinationFrame, this.sourceFrame), this.transform && this.projectionMatrix.append(this.transform), this.destinationFrame !== this.sourceFrame ? (e.enable(e.SCISSOR_TEST), e.scissor(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)) : e.disable(e.SCISSOR_TEST), e.viewport(0 | this.destinationFrame.x, 0 | this.destinationFrame.y, this.destinationFrame.width * this.resolution | 0, this.destinationFrame.height * this.resolution | 0)
                    }, n.prototype.calculateProjection = function(e, t) {
                        var r = this.projectionMatrix;
                        t = t || e, r.identity(), this.root ? (r.a = 1 / e.width * 2, r.d = -1 / e.height * 2, r.tx = -1 - t.x * r.a, r.ty = 1 - t.y * r.d) : (r.a = 1 / e.width * 2, r.d = 1 / e.height * 2, r.tx = -1 - t.x * r.a, r.ty = -1 - t.y * r.d)
                    }, n.prototype.resize = function(e, t) {
                        if (e = 0 | e, t = 0 | t, this.size.width !== e || this.size.height !== t) {
                            this.size.width = e, this.size.height = t, this.defaultFrame.width = e, this.defaultFrame.height = t, this.frameBuffer.resize(e * this.resolution, t * this.resolution);
                            var r = this.frame || this.size;
                            this.calculateProjection(r)
                        }
                    }, n.prototype.destroy = function() {
                        this.frameBuffer.destroy(), this.frameBuffer = null, this.texture = null
                    }, n
                }();
            v.default = i
        }, {
            "../../../const": 46,
            "../../../math": 70,
            "../../../settings": 101,
            "pixi-gl-core": 15
        }],
        97: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                var n = !i;
                if (s === 0) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
                if (n) {
                    var e = document.createElement("canvas");
                    e.width = 1, e.height = 1, i = f.default.createContext(e)
                }
                for (var t = i.createShader(i.FRAGMENT_SHADER);;) {
                    var r = c.replace(/%forloop%/gi, g(s));
                    if (i.shaderSource(t, r), i.compileShader(t), i.getShaderParameter(t, i.COMPILE_STATUS)) break;
                    s = s / 2 | 0
                }
                return n && i.getExtension("WEBGL_lose_context") && i.getExtension("WEBGL_lose_context").loseContext(), s
            }

            function g(s) {
                for (var i = "", n = 0; n < s; ++n) n > 0 && (i += `
else `), n < s - 1 && (i += "if(test == " + n + ".0){}");
                return i
            }
            v.__esModule = !0, v.default = O;
            var u = w("pixi-gl-core"),
                f = b(u),
                c = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
`)
        }, {
            "pixi-gl-core": 15
        }],
        98: [function(w, j, v) {
            "use strict";

            function b(g) {
                var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
                return u[O.BLEND_MODES.NORMAL] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.ADD] = [g.ONE, g.ONE], u[O.BLEND_MODES.MULTIPLY] = [g.DST_COLOR, g.ONE_MINUS_SRC_ALPHA, g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.SCREEN] = [g.ONE, g.ONE_MINUS_SRC_COLOR, g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.OVERLAY] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.DARKEN] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.LIGHTEN] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.COLOR_DODGE] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.COLOR_BURN] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.HARD_LIGHT] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.SOFT_LIGHT] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.DIFFERENCE] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.EXCLUSION] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.HUE] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.SATURATION] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.COLOR] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.LUMINOSITY] = [g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.NORMAL_NPM] = [g.SRC_ALPHA, g.ONE_MINUS_SRC_ALPHA, g.ONE, g.ONE_MINUS_SRC_ALPHA], u[O.BLEND_MODES.ADD_NPM] = [g.SRC_ALPHA, g.ONE, g.ONE, g.ONE], u[O.BLEND_MODES.SCREEN_NPM] = [g.SRC_ALPHA, g.ONE_MINUS_SRC_COLOR, g.ONE, g.ONE_MINUS_SRC_ALPHA], u
            }
            v.__esModule = !0, v.default = b;
            var O = w("../../../const")
        }, {
            "../../../const": 46
        }],
        99: [function(w, j, v) {
            "use strict";

            function b(g) {
                var u = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                return u[O.DRAW_MODES.POINTS] = g.POINTS, u[O.DRAW_MODES.LINES] = g.LINES, u[O.DRAW_MODES.LINE_LOOP] = g.LINE_LOOP, u[O.DRAW_MODES.LINE_STRIP] = g.LINE_STRIP, u[O.DRAW_MODES.TRIANGLES] = g.TRIANGLES, u[O.DRAW_MODES.TRIANGLE_STRIP] = g.TRIANGLE_STRIP, u[O.DRAW_MODES.TRIANGLE_FAN] = g.TRIANGLE_FAN, u
            }
            v.__esModule = !0, v.default = b;
            var O = w("../../../const")
        }, {
            "../../../const": 46
        }],
        100: [function(w, j, v) {
            "use strict";

            function b(O) {
                var g = O.getContextAttributes();
                g.stencil || console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly")
            }
            v.__esModule = !0, v.default = b
        }, {}],
        101: [function(w, j, v) {
            "use strict";

            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            v.__esModule = !0;
            var O = w("./utils/maxRecommendedTextures"),
                g = b(O),
                u = w("./utils/canUploadSameBuffer"),
                f = b(u);
            v.default = {
                TARGET_FPMS: .06,
                MIPMAP_TEXTURES: !0,
                RESOLUTION: 1,
                FILTER_RESOLUTION: 1,
                SPRITE_MAX_TEXTURES: (0, g.default)(32),
                SPRITE_BATCH_SIZE: 4096,
                RETINA_PREFIX: /@([0-9\.]+)x/,
                RENDER_OPTIONS: {
                    view: null,
                    antialias: !1,
                    forceFXAA: !1,
                    autoResize: !1,
                    transparent: !1,
                    backgroundColor: 0,
                    clearBeforeRender: !0,
                    preserveDrawingBuffer: !1,
                    roundPixels: !1,
                    width: 800,
                    height: 600,
                    legacy: !1
                },
                TRANSFORM_MODE: 0,
                GC_MODE: 0,
                GC_MAX_IDLE: 3600,
                GC_MAX_CHECK_COUNT: 600,
                WRAP_MODE: 0,
                SCALE_MODE: 0,
                PRECISION_VERTEX: "highp",
                PRECISION_FRAGMENT: "mediump",
                CAN_UPLOAD_SAME_BUFFER: (0, f.default)(),
                MESH_CANVAS_PADDING: 0
            }
        }, {
            "./utils/canUploadSameBuffer": 122,
            "./utils/maxRecommendedTextures": 127
        }],
        102: [function(w, j, v) {
            "use strict";

            function b(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }

            function O(h, d) {
                if (!(h instanceof d)) throw new TypeError("Cannot call a class as a function")
            }

            function g(h, d) {
                if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || typeof d != "object" && typeof d != "function" ? h : d
            }

            function u(h, d) {
                if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                h.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: h,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), d && (Object.setPrototypeOf ? Object.setPrototypeOf(h, d) : h.__proto__ = d)
            }
            v.__esModule = !0;
            var f = function() {
                    function h(d, l) {
                        for (var p = 0; p < l.length; p++) {
                            var y = l[p];
                            y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(d, y.key, y)
                        }
                    }
                    return function(d, l, p) {
                        return l && h(d.prototype, l), p && h(d, p), d
                    }
                }(),
                c = w("../math"),
                s = w("../utils"),
                i = w("../const"),
                n = w("../textures/Texture"),
                e = b(n),
                t = w("../display/Container"),
                r = b(t),
                o = new c.Point,
                a = function(h) {
                    function d(l) {
                        O(this, d);
                        var p = g(this, h.call(this));
                        return p._anchor = new c.ObservablePoint(p._onAnchorUpdate, p), p._texture = null, p._width = 0, p._height = 0, p._tint = null, p._tintRGB = null, p.tint = 16777215, p.blendMode = i.BLEND_MODES.NORMAL, p.shader = null, p.cachedTint = 16777215, p.texture = l || e.default.EMPTY, p.vertexData = new Float32Array(8), p.vertexTrimmedData = null, p._transformID = -1, p._textureID = -1, p._transformTrimmedID = -1, p._textureTrimmedID = -1, p.pluginName = "sprite", p
                    }
                    return u(d, h), d.prototype._onTextureUpdate = function() {
                        this._textureID = -1, this._textureTrimmedID = -1, this.cachedTint = 16777215, this._width && (this.scale.x = (0, s.sign)(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = (0, s.sign)(this.scale.y) * this._height / this._texture.orig.height)
                    }, d.prototype._onAnchorUpdate = function() {
                        this._transformID = -1, this._transformTrimmedID = -1
                    }, d.prototype.calculateVertices = function() {
                        if (this._transformID !== this.transform._worldID || this._textureID !== this._texture._updateID) {
                            this._transformID = this.transform._worldID, this._textureID = this._texture._updateID;
                            var l = this._texture,
                                p = this.transform.worldTransform,
                                y = p.a,
                                x = p.b,
                                T = p.c,
                                S = p.d,
                                E = p.tx,
                                _ = p.ty,
                                m = this.vertexData,
                                M = l.trim,
                                A = l.orig,
                                I = this._anchor,
                                N = 0,
                                P = 0,
                                D = 0,
                                C = 0;
                            M ? (P = M.x - I._x * A.width, N = P + M.width, C = M.y - I._y * A.height, D = C + M.height) : (P = -I._x * A.width, N = P + A.width, C = -I._y * A.height, D = C + A.height), m[0] = y * P + T * C + E, m[1] = S * C + x * P + _, m[2] = y * N + T * C + E, m[3] = S * C + x * N + _, m[4] = y * N + T * D + E, m[5] = S * D + x * N + _, m[6] = y * P + T * D + E, m[7] = S * D + x * P + _
                        }
                    }, d.prototype.calculateTrimmedVertices = function() {
                        if (this.vertexTrimmedData) {
                            if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return
                        } else this.vertexTrimmedData = new Float32Array(8);
                        this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
                        var l = this._texture,
                            p = this.vertexTrimmedData,
                            y = l.orig,
                            x = this._anchor,
                            T = this.transform.worldTransform,
                            S = T.a,
                            E = T.b,
                            _ = T.c,
                            m = T.d,
                            M = T.tx,
                            A = T.ty,
                            I = -x._x * y.width,
                            N = I + y.width,
                            P = -x._y * y.height,
                            D = P + y.height;
                        p[0] = S * I + _ * P + M, p[1] = m * P + E * I + A, p[2] = S * N + _ * P + M, p[3] = m * P + E * N + A, p[4] = S * N + _ * D + M, p[5] = m * D + E * N + A, p[6] = S * I + _ * D + M, p[7] = m * D + E * I + A
                    }, d.prototype._renderWebGL = function(l) {
                        this.calculateVertices(), l.setObjectRenderer(l.plugins[this.pluginName]), l.plugins[this.pluginName].render(this)
                    }, d.prototype._renderCanvas = function(l) {
                        l.plugins[this.pluginName].render(this)
                    }, d.prototype._calculateBounds = function() {
                        var l = this._texture.trim,
                            p = this._texture.orig;
                        !l || l.width === p.width && l.height === p.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
                    }, d.prototype.getLocalBounds = function(l) {
                        return this.children.length === 0 ? (this._bounds.minX = this._texture.orig.width * -this._anchor._x, this._bounds.minY = this._texture.orig.height * -this._anchor._y, this._bounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._bounds.maxY = this._texture.orig.height * (1 - this._anchor._y), l || (this._localBoundsRect || (this._localBoundsRect = new c.Rectangle), l = this._localBoundsRect), this._bounds.getRectangle(l)) : h.prototype.getLocalBounds.call(this, l)
                    }, d.prototype.containsPoint = function(l) {
                        this.worldTransform.applyInverse(l, o);
                        var p = this._texture.orig.width,
                            y = this._texture.orig.height,
                            x = -p * this.anchor.x,
                            T = 0;
                        return o.x >= x && o.x < x + p && (T = -y * this.anchor.y, o.y >= T && o.y < T + y)
                    }, d.prototype.destroy = function(l) {
                        h.prototype.destroy.call(this, l), this._anchor = null;
                        var p = typeof l == "boolean" ? l : l && l.texture;
                        if (p) {
                            var y = typeof l == "boolean" ? l : l && l.baseTexture;
                            this._texture.destroy(!!y)
                        }
                        this._texture = null, this.shader = null
                    }, d.from = function(l) {
                        return new d(e.default.from(l))
                    }, d.fromFrame = function(l) {
                        var p = s.TextureCache[l];
                        if (!p) throw new Error('The frameId "' + l + '" does not exist in the texture cache');
                        return new d(p)
                    }, d.fromImage = function(l, p, y) {
                        return new d(e.default.fromImage(l, p, y))
                    }, f(d, [{
                        key: "width",
                        get: function() {
                            return Math.abs(this.scale.x) * this._texture.orig.width
                        },
                        set: function(l) {
                            var p = (0, s.sign)(this.scale.x) || 1;
                            this.scale.x = p * l / this._texture.orig.width, this._width = l
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return Math.abs(this.scale.y) * this._texture.orig.height
                        },
                        set: function(l) {
                            var p = (0, s.sign)(this.scale.y) || 1;
                            this.scale.y = p * l / this._texture.orig.height, this._height = l
                        }
                    }, {
                        key: "anchor",
                        get: function() {
                            return this._anchor
                        },
                        set: function(l) {
                            this._anchor.copy(l)
                        }
                    }, {
                        key: "tint",
                        get: function() {
                            return this._tint
                        },
                        set: function(l) {
                            this._tint = l, this._tintRGB = (l >> 16) + (65280 & l) + ((255 & l) << 16)
                        }
                    }, {
                        key: "texture",
                        get: function() {
                            return this._texture
                        },
                        set: function(l) {
                            this._texture !== l && (this._texture = l, this.cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, l && (l.baseTexture.hasLoaded ? this._onTextureUpdate() : l.once("update", this._onTextureUpdate, this)))
                        }
                    }]), d
                }(r.default);
            v.default = a
        }, {
            "../const": 46,
            "../display/Container": 48,
            "../math": 70,
            "../textures/Texture": 115,
            "../utils": 125
        }],
        103: [function(w, j, v) {
            "use strict";

            function b(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function O(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("../../renderers/canvas/CanvasRenderer"),
                u = b(g),
                f = w("../../const"),
                c = w("../../math"),
                s = w("./CanvasTinter"),
                i = b(s),
                n = new c.Matrix,
                e = function() {
                    function t(r) {
                        O(this, t), this.renderer = r
                    }
                    return t.prototype.render = function(r) {
                        var o = r._texture,
                            a = this.renderer,
                            h = o._frame.width,
                            d = o._frame.height,
                            l = r.transform.worldTransform,
                            p = 0,
                            y = 0;
                        if (!(o.orig.width <= 0 || o.orig.height <= 0) && o.baseTexture.source && (a.setBlendMode(r.blendMode), o.valid)) {
                            a.context.globalAlpha = r.worldAlpha;
                            var x = o.baseTexture.scaleMode === f.SCALE_MODES.LINEAR;
                            a.smoothProperty && a.context[a.smoothProperty] !== x && (a.context[a.smoothProperty] = x), o.trim ? (p = o.trim.width / 2 + o.trim.x - r.anchor.x * o.orig.width, y = o.trim.height / 2 + o.trim.y - r.anchor.y * o.orig.height) : (p = (.5 - r.anchor.x) * o.orig.width, y = (.5 - r.anchor.y) * o.orig.height), o.rotate && (l.copy(n), l = n, c.GroupD8.matrixAppendRotationInv(l, o.rotate, p, y), p = 0, y = 0), p -= h / 2, y -= d / 2, a.roundPixels ? (a.context.setTransform(l.a, l.b, l.c, l.d, l.tx * a.resolution | 0, l.ty * a.resolution | 0), p = 0 | p, y = 0 | y) : a.context.setTransform(l.a, l.b, l.c, l.d, l.tx * a.resolution, l.ty * a.resolution);
                            var T = o.baseTexture.resolution;
                            r.tint !== 16777215 ? (r.cachedTint === r.tint && r.tintedTexture.tintId === r._texture._updateID || (r.cachedTint = r.tint, r.tintedTexture = i.default.getTintedTexture(r, r.tint)), a.context.drawImage(r.tintedTexture, 0, 0, h * T, d * T, p * a.resolution, y * a.resolution, h * a.resolution, d * a.resolution)) : a.context.drawImage(o.baseTexture.source, o._frame.x * T, o._frame.y * T, h * T, d * T, p * a.resolution, y * a.resolution, h * a.resolution, d * a.resolution)
                        }
                    }, t.prototype.destroy = function() {
                        this.renderer = null
                    }, t
                }();
            v.default = e, u.default.registerPlugin("sprite", e)
        }, {
            "../../const": 46,
            "../../math": 70,
            "../../renderers/canvas/CanvasRenderer": 77,
            "./CanvasTinter": 104
        }],
        104: [function(w, j, v) {
            "use strict";

            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            v.__esModule = !0;
            var O = w("../../utils"),
                g = w("../../renderers/canvas/utils/canUseNewCanvasBlendModes"),
                u = b(g),
                f = {
                    getTintedTexture: function(c, s) {
                        var i = c._texture;
                        s = f.roundColor(s);
                        var n = "#" + ("00000" + (0 | s).toString(16)).substr(-6);
                        i.tintCache = i.tintCache || {};
                        var e = i.tintCache[n],
                            t = void 0;
                        if (e) {
                            if (e.tintId === i._updateID) return i.tintCache[n];
                            t = i.tintCache[n]
                        } else t = f.canvas || document.createElement("canvas");
                        if (f.tintMethod(i, s, t), t.tintId = i._updateID, f.convertTintToImage) {
                            var r = new Image;
                            r.src = t.toDataURL(), i.tintCache[n] = r
                        } else i.tintCache[n] = t, f.canvas = null;
                        return t
                    },
                    tintWithMultiply: function(c, s, i) {
                        var n = i.getContext("2d"),
                            e = c._frame.clone(),
                            t = c.baseTexture.resolution;
                        e.x *= t, e.y *= t, e.width *= t, e.height *= t, i.width = Math.ceil(e.width), i.height = Math.ceil(e.height), n.save(), n.fillStyle = "#" + ("00000" + (0 | s).toString(16)).substr(-6), n.fillRect(0, 0, e.width, e.height), n.globalCompositeOperation = "multiply", n.drawImage(c.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), n.globalCompositeOperation = "destination-atop", n.drawImage(c.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), n.restore()
                    },
                    tintWithOverlay: function(c, s, i) {
                        var n = i.getContext("2d"),
                            e = c._frame.clone(),
                            t = c.baseTexture.resolution;
                        e.x *= t, e.y *= t, e.width *= t, e.height *= t, i.width = Math.ceil(e.width), i.height = Math.ceil(e.height), n.save(), n.globalCompositeOperation = "copy", n.fillStyle = "#" + ("00000" + (0 | s).toString(16)).substr(-6), n.fillRect(0, 0, e.width, e.height), n.globalCompositeOperation = "destination-atop", n.drawImage(c.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), n.restore()
                    },
                    tintWithPerPixel: function(c, s, i) {
                        var n = i.getContext("2d"),
                            e = c._frame.clone(),
                            t = c.baseTexture.resolution;
                        e.x *= t, e.y *= t, e.width *= t, e.height *= t, i.width = Math.ceil(e.width), i.height = Math.ceil(e.height), n.save(), n.globalCompositeOperation = "copy", n.drawImage(c.baseTexture.source, e.x, e.y, e.width, e.height, 0, 0, e.width, e.height), n.restore();
                        for (var r = (0, O.hex2rgb)(s), o = r[0], a = r[1], h = r[2], d = n.getImageData(0, 0, e.width, e.height), l = d.data, p = 0; p < l.length; p += 4) l[p + 0] *= o, l[p + 1] *= a, l[p + 2] *= h;
                        n.putImageData(d, 0, 0)
                    },
                    roundColor: function(c) {
                        var s = f.cacheStepsPerColorChannel,
                            i = (0, O.hex2rgb)(c);
                        return i[0] = Math.min(255, i[0] / s * s), i[1] = Math.min(255, i[1] / s * s), i[2] = Math.min(255, i[2] / s * s), (0, O.rgb2hex)(i)
                    },
                    cacheStepsPerColorChannel: 8,
                    convertTintToImage: !1,
                    canUseMultiply: (0, u.default)(),
                    tintMethod: 0
                };
            f.tintMethod = f.canUseMultiply ? f.tintWithMultiply : f.tintWithPerPixel, v.default = f
        }, {
            "../../renderers/canvas/utils/canUseNewCanvasBlendModes": 80,
            "../../utils": 125
        }],
        105: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                if (!(g instanceof u)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function g(u) {
                    b(this, g), this.vertices = new ArrayBuffer(u), this.float32View = new Float32Array(this.vertices), this.uint32View = new Uint32Array(this.vertices)
                }
                return g.prototype.destroy = function() {
                    this.vertices = null, this.positions = null, this.uvs = null, this.colors = null
                }, g
            }();
            v.default = O
        }, {}],
        106: [function(w, j, v) {
            "use strict";

            function b(A) {
                return A && A.__esModule ? A : {
                    default: A
                }
            }

            function O(A, I) {
                if (!(A instanceof I)) throw new TypeError("Cannot call a class as a function")
            }

            function g(A, I) {
                if (!A) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !I || typeof I != "object" && typeof I != "function" ? A : I
            }

            function u(A, I) {
                if (typeof I != "function" && I !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof I);
                A.prototype = Object.create(I && I.prototype, {
                    constructor: {
                        value: A,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), I && (Object.setPrototypeOf ? Object.setPrototypeOf(A, I) : A.__proto__ = I)
            }
            v.__esModule = !0;
            var f = w("../../renderers/webgl/utils/ObjectRenderer"),
                c = b(f),
                s = w("../../renderers/webgl/WebGLRenderer"),
                i = b(s),
                n = w("../../utils/createIndicesForQuads"),
                e = b(n),
                t = w("./generateMultiTextureShader"),
                r = b(t),
                o = w("../../renderers/webgl/utils/checkMaxIfStatmentsInShader"),
                a = b(o),
                h = w("./BatchBuffer"),
                d = b(h),
                l = w("../../settings"),
                p = b(l),
                y = w("../../utils"),
                x = w("pixi-gl-core"),
                T = b(x),
                S = w("bit-twiddle"),
                E = b(S),
                _ = 0,
                m = 0,
                M = function(A) {
                    function I(N) {
                        O(this, I);
                        var P = g(this, A.call(this, N));
                        P.vertSize = 5, P.vertByteSize = 4 * P.vertSize, P.size = p.default.SPRITE_BATCH_SIZE, P.buffers = [];
                        for (var D = 1; D <= E.default.nextPow2(P.size); D *= 2) P.buffers.push(new d.default(4 * D * P.vertByteSize));
                        P.indices = (0, e.default)(P.size), P.shader = null, P.currentIndex = 0, P.groups = [];
                        for (var C = 0; C < P.size; C++) P.groups[C] = {
                            textures: [],
                            textureCount: 0,
                            ids: [],
                            size: 0,
                            start: 0,
                            blend: 0
                        };
                        return P.sprites = [], P.vertexBuffers = [], P.vaos = [], P.vaoMax = 2, P.vertexCount = 0, P.renderer.on("prerender", P.onPrerender, P), P
                    }
                    return u(I, A), I.prototype.onContextChange = function() {
                        var N = this.renderer.gl;
                        this.renderer.legacy ? this.MAX_TEXTURES = 1 : (this.MAX_TEXTURES = Math.min(N.getParameter(N.MAX_TEXTURE_IMAGE_UNITS), p.default.SPRITE_MAX_TEXTURES), this.MAX_TEXTURES = (0, a.default)(this.MAX_TEXTURES, N)), this.shader = (0, r.default)(N, this.MAX_TEXTURES), this.indexBuffer = T.default.GLBuffer.createIndexBuffer(N, this.indices, N.STATIC_DRAW), this.renderer.bindVao(null);
                        for (var P = this.shader.attributes, D = 0; D < this.vaoMax; D++) {
                            var C = this.vertexBuffers[D] = T.default.GLBuffer.createVertexBuffer(N, null, N.STREAM_DRAW),
                                R = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(C, P.aVertexPosition, N.FLOAT, !1, this.vertByteSize, 0).addAttribute(C, P.aTextureCoord, N.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(C, P.aColor, N.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                            P.aTextureId && R.addAttribute(C, P.aTextureId, N.FLOAT, !1, this.vertByteSize, 16), this.vaos[D] = R
                        }
                        this.vao = this.vaos[0], this.currentBlendMode = 99999, this.boundTextures = new Array(this.MAX_TEXTURES)
                    }, I.prototype.onPrerender = function() {
                        this.vertexCount = 0
                    }, I.prototype.render = function(N) {
                        this.currentIndex >= this.size && this.flush(), N._texture._uvs && (this.sprites[this.currentIndex++] = N)
                    }, I.prototype.flush = function() {
                        if (this.currentIndex !== 0) {
                            var N = this.renderer.gl,
                                P = this.MAX_TEXTURES,
                                D = E.default.nextPow2(this.currentIndex),
                                C = E.default.log2(D),
                                R = this.buffers[C],
                                F = this.sprites,
                                B = this.groups,
                                L = R.float32View,
                                k = R.uint32View,
                                U = this.boundTextures,
                                H = this.renderer.boundTextures,
                                X = this.renderer.textureGC.count,
                                W = 0,
                                V = void 0,
                                G = void 0,
                                Y = 1,
                                z = 0,
                                K = B[0],
                                q = void 0,
                                $ = void 0,
                                J = y.premultiplyBlendMode[F[0]._texture.baseTexture.premultipliedAlpha ? 1 : 0][F[0].blendMode];
                            K.textureCount = 0, K.start = 0, K.blend = J, _++;
                            var Q = void 0;
                            for (Q = 0; Q < P; ++Q) {
                                var ee = H[Q];
                                ee._enabled !== _ ? (U[Q] = ee, ee._virtalBoundId = Q, ee._enabled = _) : U[Q] = this.renderer.emptyTextures[Q]
                            }
                            for (_++, Q = 0; Q < this.currentIndex; ++Q) {
                                var Z = F[Q];
                                V = Z._texture.baseTexture;
                                var te = y.premultiplyBlendMode[Number(V.premultipliedAlpha)][Z.blendMode];
                                if (J !== te && (J = te, G = null, z = P, _++), G !== V && (G = V, V._enabled !== _)) {
                                    if (z === P && (_++, K.size = Q - K.start, z = 0, K = B[Y++], K.blend = J, K.textureCount = 0, K.start = Q), V.touched = X, V._virtalBoundId === -1)
                                        for (var re = 0; re < P; ++re) {
                                            var ie = (re + m) % P,
                                                ae = U[ie];
                                            if (ae._enabled !== _) {
                                                m++, ae._virtalBoundId = -1, V._virtalBoundId = ie, U[ie] = V;
                                                break
                                            }
                                        }
                                    V._enabled = _, K.textureCount++, K.ids[z] = V._virtalBoundId, K.textures[z++] = V
                                }
                                if (q = Z.vertexData, $ = Z._texture._uvs.uvsUint32, this.renderer.roundPixels) {
                                    var ne = this.renderer.resolution;
                                    L[W] = (q[0] * ne | 0) / ne, L[W + 1] = (q[1] * ne | 0) / ne, L[W + 5] = (q[2] * ne | 0) / ne, L[W + 6] = (q[3] * ne | 0) / ne, L[W + 10] = (q[4] * ne | 0) / ne, L[W + 11] = (q[5] * ne | 0) / ne, L[W + 15] = (q[6] * ne | 0) / ne, L[W + 16] = (q[7] * ne | 0) / ne
                                } else L[W] = q[0], L[W + 1] = q[1], L[W + 5] = q[2], L[W + 6] = q[3], L[W + 10] = q[4], L[W + 11] = q[5], L[W + 15] = q[6], L[W + 16] = q[7];
                                k[W + 2] = $[0], k[W + 7] = $[1], k[W + 12] = $[2], k[W + 17] = $[3];
                                var ue = Math.min(Z.worldAlpha, 1),
                                    de = ue < 1 && V.premultipliedAlpha ? (0, y.premultiplyTint)(Z._tintRGB, ue) : Z._tintRGB + (255 * ue << 24);
                                k[W + 3] = k[W + 8] = k[W + 13] = k[W + 18] = de, L[W + 4] = L[W + 9] = L[W + 14] = L[W + 19] = V._virtalBoundId, W += 20
                            }
                            if (K.size = Q - K.start, p.default.CAN_UPLOAD_SAME_BUFFER) this.vertexBuffers[this.vertexCount].upload(R.vertices, 0, !0);
                            else {
                                if (this.vaoMax <= this.vertexCount) {
                                    this.vaoMax++;
                                    var he = this.shader.attributes,
                                        ce = this.vertexBuffers[this.vertexCount] = T.default.GLBuffer.createVertexBuffer(N, null, N.STREAM_DRAW),
                                        fe = this.renderer.createVao().addIndex(this.indexBuffer).addAttribute(ce, he.aVertexPosition, N.FLOAT, !1, this.vertByteSize, 0).addAttribute(ce, he.aTextureCoord, N.UNSIGNED_SHORT, !0, this.vertByteSize, 8).addAttribute(ce, he.aColor, N.UNSIGNED_BYTE, !0, this.vertByteSize, 12);
                                    he.aTextureId && fe.addAttribute(ce, he.aTextureId, N.FLOAT, !1, this.vertByteSize, 16), this.vaos[this.vertexCount] = fe
                                }
                                this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].upload(R.vertices, 0, !1), this.vertexCount++
                            }
                            for (Q = 0; Q < P; ++Q) H[Q]._virtalBoundId = -1;
                            for (Q = 0; Q < Y; ++Q) {
                                for (var se = B[Q], pe = se.textureCount, le = 0; le < pe; le++) G = se.textures[le], H[se.ids[le]] !== G && this.renderer.bindTexture(G, se.ids[le], !0), G._virtalBoundId = -1;
                                this.renderer.state.setBlendMode(se.blend), N.drawElements(N.TRIANGLES, 6 * se.size, N.UNSIGNED_SHORT, 6 * se.start * 2)
                            }
                            this.currentIndex = 0
                        }
                    }, I.prototype.start = function() {
                        this.renderer.bindShader(this.shader), p.default.CAN_UPLOAD_SAME_BUFFER && (this.renderer.bindVao(this.vaos[this.vertexCount]), this.vertexBuffers[this.vertexCount].bind())
                    }, I.prototype.stop = function() {
                        this.flush()
                    }, I.prototype.destroy = function() {
                        for (var N = 0; N < this.vaoMax; N++) this.vertexBuffers[N] && this.vertexBuffers[N].destroy(), this.vaos[N] && this.vaos[N].destroy();
                        this.indexBuffer && this.indexBuffer.destroy(), this.renderer.off("prerender", this.onPrerender, this), A.prototype.destroy.call(this), this.shader && (this.shader.destroy(), this.shader = null), this.vertexBuffers = null, this.vaos = null, this.indexBuffer = null, this.indices = null, this.sprites = null;
                        for (var P = 0; P < this.buffers.length; ++P) this.buffers[P].destroy()
                    }, I
                }(c.default);
            v.default = M, i.default.registerPlugin("sprite", M)
        }, {
            "../../renderers/webgl/WebGLRenderer": 84,
            "../../renderers/webgl/utils/ObjectRenderer": 94,
            "../../renderers/webgl/utils/checkMaxIfStatmentsInShader": 97,
            "../../settings": 101,
            "../../utils": 125,
            "../../utils/createIndicesForQuads": 123,
            "./BatchBuffer": 105,
            "./generateMultiTextureShader": 107,
            "bit-twiddle": 1,
            "pixi-gl-core": 15
        }],
        107: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                var n = `precision highp float;
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute vec4 aColor;
attribute float aTextureId;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;
varying vec4 vColor;
varying float vTextureId;

void main(void){
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = aTextureCoord;
    vTextureId = aTextureId;
    vColor = aColor;
}
`,
                    e = c;
                e = e.replace(/%count%/gi, i), e = e.replace(/%forloop%/gi, g(i));
                for (var t = new f.default(s, n, e), r = [], o = 0; o < i; o++) r[o] = o;
                return t.bind(), t.uniforms.uSamplers = r, t
            }

            function g(s) {
                var i = "";
                i += `
`, i += `
`;
                for (var n = 0; n < s; n++) n > 0 && (i += `
else `), n < s - 1 && (i += "if(textureId == " + n + ".0)"), i += `
{`, i += `
	color = texture2D(uSamplers[` + n + "], vTextureCoord);", i += `
}`;
                return i += `
`, i += `
`
            }
            v.__esModule = !0, v.default = O;
            var u = w("../../Shader"),
                f = b(u),
                c = (w("path"), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "varying float vTextureId;", "uniform sampler2D uSamplers[%count%];", "void main(void){", "vec4 color;", "float textureId = floor(vTextureId+0.5);", "%forloop%", "gl_FragColor = color * vColor;", "}"].join(`
`))
        }, {
            "../../Shader": 44,
            path: 8
        }],
        108: [function(w, j, v) {
            "use strict";

            function b(E) {
                return E && E.__esModule ? E : {
                    default: E
                }
            }

            function O(E, _) {
                if (!(E instanceof _)) throw new TypeError("Cannot call a class as a function")
            }

            function g(E, _) {
                if (!E) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !_ || typeof _ != "object" && typeof _ != "function" ? E : _
            }

            function u(E, _) {
                if (typeof _ != "function" && _ !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof _);
                E.prototype = Object.create(_ && _.prototype, {
                    constructor: {
                        value: E,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), _ && (Object.setPrototypeOf ? Object.setPrototypeOf(E, _) : E.__proto__ = _)
            }
            v.__esModule = !0;
            var f = function() {
                    function E(_, m) {
                        for (var M = 0; M < m.length; M++) {
                            var A = m[M];
                            A.enumerable = A.enumerable || !1, A.configurable = !0, "value" in A && (A.writable = !0), Object.defineProperty(_, A.key, A)
                        }
                    }
                    return function(_, m, M) {
                        return m && E(_.prototype, m), M && E(_, M), _
                    }
                }(),
                c = w("../sprites/Sprite"),
                s = b(c),
                i = w("../textures/Texture"),
                n = b(i),
                e = w("../math"),
                t = w("../utils"),
                r = w("../const"),
                o = w("../settings"),
                a = b(o),
                h = w("./TextStyle"),
                d = b(h),
                l = w("./TextMetrics"),
                p = b(l),
                y = w("../utils/trimCanvas"),
                x = b(y),
                T = {
                    texture: !0,
                    children: !1,
                    baseTexture: !0
                },
                S = function(E) {
                    function _(m, M, A) {
                        O(this, _), A = A || document.createElement("canvas"), A.width = 3, A.height = 3;
                        var I = n.default.fromCanvas(A, a.default.SCALE_MODE, "text");
                        I.orig = new e.Rectangle, I.trim = new e.Rectangle;
                        var N = g(this, E.call(this, I));
                        return n.default.addToCache(N._texture, N._texture.baseTexture.textureCacheIds[0]), N.canvas = A, N.context = N.canvas.getContext("2d"), N.resolution = a.default.RESOLUTION, N._text = null, N._style = null, N._styleListener = null, N._font = "", N.text = m, N.style = M, N.localStyleID = -1, N
                    }
                    return u(_, E), _.prototype.updateText = function(m) {
                        var M = this._style;
                        if (this.localStyleID !== M.styleID && (this.dirty = !0, this.localStyleID = M.styleID), this.dirty || !m) {
                            this._font = this._style.toFontString();
                            var A = this.context,
                                I = p.default.measureText(this._text, this._style, this._style.wordWrap, this.canvas),
                                N = I.width,
                                P = I.height,
                                D = I.lines,
                                C = I.lineHeight,
                                R = I.lineWidths,
                                F = I.maxLineWidth,
                                B = I.fontProperties;
                            this.canvas.width = Math.ceil((Math.max(1, N) + 2 * M.padding) * this.resolution), this.canvas.height = Math.ceil((Math.max(1, P) + 2 * M.padding) * this.resolution), A.scale(this.resolution, this.resolution), A.clearRect(0, 0, this.canvas.width, this.canvas.height), A.font = this._font, A.strokeStyle = M.stroke, A.lineWidth = M.strokeThickness, A.textBaseline = M.textBaseline, A.lineJoin = M.lineJoin, A.miterLimit = M.miterLimit;
                            var L = void 0,
                                k = void 0;
                            if (M.dropShadow) {
                                A.fillStyle = M.dropShadowColor, A.globalAlpha = M.dropShadowAlpha, A.shadowBlur = M.dropShadowBlur, M.dropShadowBlur > 0 && (A.shadowColor = M.dropShadowColor);
                                for (var U = Math.cos(M.dropShadowAngle) * M.dropShadowDistance, H = Math.sin(M.dropShadowAngle) * M.dropShadowDistance, X = 0; X < D.length; X++) L = M.strokeThickness / 2, k = M.strokeThickness / 2 + X * C + B.ascent, M.align === "right" ? L += F - R[X] : M.align === "center" && (L += (F - R[X]) / 2), M.fill && (this.drawLetterSpacing(D[X], L + U + M.padding, k + H + M.padding), M.stroke && M.strokeThickness && (A.strokeStyle = M.dropShadowColor, this.drawLetterSpacing(D[X], L + U + M.padding, k + H + M.padding, !0), A.strokeStyle = M.stroke))
                            }
                            A.shadowBlur = 0, A.globalAlpha = 1, A.fillStyle = this._generateFillStyle(M, D);
                            for (var W = 0; W < D.length; W++) L = M.strokeThickness / 2, k = M.strokeThickness / 2 + W * C + B.ascent, M.align === "right" ? L += F - R[W] : M.align === "center" && (L += (F - R[W]) / 2), M.stroke && M.strokeThickness && this.drawLetterSpacing(D[W], L + M.padding, k + M.padding, !0), M.fill && this.drawLetterSpacing(D[W], L + M.padding, k + M.padding);
                            this.updateTexture()
                        }
                    }, _.prototype.drawLetterSpacing = function(m, M, A) {
                        var I = arguments.length > 3 && arguments[3] !== void 0 && arguments[3],
                            N = this._style,
                            P = N.letterSpacing;
                        if (P === 0) return void(I ? this.context.strokeText(m, M, A) : this.context.fillText(m, M, A));
                        for (var D = String.prototype.split.call(m, ""), C = M, R = 0, F = ""; R < m.length;) F = D[R++], I ? this.context.strokeText(F, C, A) : this.context.fillText(F, C, A), C += this.context.measureText(F).width + P
                    }, _.prototype.updateTexture = function() {
                        var m = this.canvas;
                        if (this._style.trim) {
                            var M = (0, x.default)(m);
                            m.width = M.width, m.height = M.height, this.context.putImageData(M.data, 0, 0)
                        }
                        var A = this._texture,
                            I = this._style,
                            N = I.trim ? 0 : I.padding,
                            P = A.baseTexture;
                        P.hasLoaded = !0, P.resolution = this.resolution, P.realWidth = m.width, P.realHeight = m.height, P.width = m.width / this.resolution, P.height = m.height / this.resolution, A.trim.width = A._frame.width = m.width / this.resolution, A.trim.height = A._frame.height = m.height / this.resolution, A.trim.x = -N, A.trim.y = -N, A.orig.width = A._frame.width - 2 * N, A.orig.height = A._frame.height - 2 * N, this._onTextureUpdate(), P.emit("update", P), this.dirty = !1
                    }, _.prototype.renderWebGL = function(m) {
                        this.resolution !== m.resolution && (this.resolution = m.resolution, this.dirty = !0), this.updateText(!0), E.prototype.renderWebGL.call(this, m)
                    }, _.prototype._renderCanvas = function(m) {
                        this.resolution !== m.resolution && (this.resolution = m.resolution, this.dirty = !0), this.updateText(!0), E.prototype._renderCanvas.call(this, m)
                    }, _.prototype.getLocalBounds = function(m) {
                        return this.updateText(!0), E.prototype.getLocalBounds.call(this, m)
                    }, _.prototype._calculateBounds = function() {
                        this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
                    }, _.prototype._onStyleChange = function() {
                        this.dirty = !0
                    }, _.prototype._generateFillStyle = function(m, M) {
                        if (!Array.isArray(m.fill)) return m.fill;
                        if (navigator.isCocoonJS) return m.fill[0];
                        var A = void 0,
                            I = void 0,
                            N = void 0,
                            P = void 0,
                            D = this.canvas.width / this.resolution,
                            C = this.canvas.height / this.resolution,
                            R = m.fill.slice(),
                            F = m.fillGradientStops.slice();
                        if (!F.length)
                            for (var B = R.length + 1, L = 1; L < B; ++L) F.push(L / B);
                        if (R.unshift(m.fill[0]), F.unshift(0), R.push(m.fill[m.fill.length - 1]), F.push(1), m.fillGradientType === r.TEXT_GRADIENT.LINEAR_VERTICAL) {
                            A = this.context.createLinearGradient(D / 2, 0, D / 2, C), I = (R.length + 1) * M.length, N = 0;
                            for (var k = 0; k < M.length; k++) {
                                N += 1;
                                for (var U = 0; U < R.length; U++) P = typeof F[U] == "number" ? F[U] / M.length + k / M.length : N / I, A.addColorStop(P, R[U]), N++
                            }
                        } else {
                            A = this.context.createLinearGradient(0, C / 2, D, C / 2), I = R.length + 1, N = 1;
                            for (var H = 0; H < R.length; H++) P = typeof F[H] == "number" ? F[H] : N / I, A.addColorStop(P, R[H]), N++
                        }
                        return A
                    }, _.prototype.destroy = function(m) {
                        typeof m == "boolean" && (m = {
                            children: m
                        }), m = Object.assign({}, T, m), E.prototype.destroy.call(this, m), this.context = null, this.canvas = null, this._style = null
                    }, f(_, [{
                        key: "width",
                        get: function() {
                            return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
                        },
                        set: function(m) {
                            this.updateText(!0);
                            var M = (0, t.sign)(this.scale.x) || 1;
                            this.scale.x = M * m / this._texture.orig.width, this._width = m
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
                        },
                        set: function(m) {
                            this.updateText(!0);
                            var M = (0, t.sign)(this.scale.y) || 1;
                            this.scale.y = M * m / this._texture.orig.height, this._height = m
                        }
                    }, {
                        key: "style",
                        get: function() {
                            return this._style
                        },
                        set: function(m) {
                            m = m || {}, m instanceof d.default ? this._style = m : this._style = new d.default(m), this.localStyleID = -1, this.dirty = !0
                        }
                    }, {
                        key: "text",
                        get: function() {
                            return this._text
                        },
                        set: function(m) {
                            m = String(m === "" || m === null || m === void 0 ? " " : m), this._text !== m && (this._text = m, this.dirty = !0)
                        }
                    }]), _
                }(s.default);
            v.default = S
        }, {
            "../const": 46,
            "../math": 70,
            "../settings": 101,
            "../sprites/Sprite": 102,
            "../textures/Texture": 115,
            "../utils": 125,
            "../utils/trimCanvas": 130,
            "./TextMetrics": 109,
            "./TextStyle": 110
        }],
        109: [function(w, j, v) {
            "use strict";

            function b(u, f) {
                if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function u(f, c, s, i, n, e, t, r, o) {
                    b(this, u), this.text = f, this.style = c, this.width = s, this.height = i, this.lines = n, this.lineWidths = e, this.lineHeight = t, this.maxLineWidth = r, this.fontProperties = o
                }
                return u.measureText = function(f, c, s) {
                    var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : u._canvas;
                    s = s || c.wordWrap;
                    var n = c.toFontString(),
                        e = u.measureFont(n),
                        t = i.getContext("2d");
                    t.font = n;
                    for (var r = s ? u.wordWrap(f, c, i) : f, o = r.split(/(?:\r\n|\r|\n)/), a = new Array(o.length), h = 0, d = 0; d < o.length; d++) {
                        var l = t.measureText(o[d]).width + (o[d].length - 1) * c.letterSpacing;
                        a[d] = l, h = Math.max(h, l)
                    }
                    var p = h + c.strokeThickness;
                    c.dropShadow && (p += c.dropShadowDistance);
                    var y = c.lineHeight || e.fontSize + c.strokeThickness,
                        x = Math.max(y, e.fontSize + c.strokeThickness) + (o.length - 1) * (y + c.leading);
                    return c.dropShadow && (x += c.dropShadowDistance), new u(f, c, p, x, o, a, y + c.leading, h, e)
                }, u.wordWrap = function(f, c) {
                    for (var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u._canvas, i = s.getContext("2d"), n = "", e = 0, t = "", r = {}, o = c.letterSpacing, a = c.wordWrapWidth + c.letterSpacing, h = u.getFromCache(" ", o, r, i), d = f.split(" "), l = 0; l < d.length; l++) {
                        var p = d[l],
                            y = u.getFromCache(p, o, r, i);
                        if (y > a)
                            if (c.breakWords)
                                for (var x = n.length > 0 ? " " + p : p, T = x.split(""), S = 0; S < T.length; S++) {
                                    var E = T[S],
                                        _ = u.getFromCache(E, o, r, i);
                                    _ + e > a && (t += u.addLine(n), n = "", e = 0), n += E, e += _
                                } else n.length > 0 && (t += u.addLine(n), n = "", e = 0), t += u.addLine(p), n = "", e = 0;
                            else y + e > a && (t += u.addLine(n), n = "", e = 0), n += n.length > 0 ? " " + p : p, e += y + h
                    }
                    return t += u.addLine(n, !1)
                }, u.addLine = function(f) {
                    var c = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
                    return f = c ? f + `
` : f
                }, u.getFromCache = function(f, c, s, i) {
                    var n = s[f];
                    if (n === void 0) {
                        var e = f.length * c;
                        n = i.measureText(f).width + e, s[f] = n
                    }
                    return n
                }, u.measureFont = function(f) {
                    if (u._fonts[f]) return u._fonts[f];
                    var c = {},
                        s = u._canvas,
                        i = u._context;
                    i.font = f;
                    var n = Math.ceil(i.measureText("|M\xC9q").width),
                        e = Math.ceil(i.measureText("M").width),
                        t = 2 * e;
                    e = 1.4 * e | 0, s.width = n, s.height = t, i.fillStyle = "#f00", i.fillRect(0, 0, n, t), i.font = f, i.textBaseline = "alphabetic", i.fillStyle = "#000", i.fillText("|M\xC9q", 0, e);
                    var r = i.getImageData(0, 0, n, t).data,
                        o = r.length,
                        a = 4 * n,
                        h = 0,
                        d = 0,
                        l = !1;
                    for (h = 0; h < e; ++h) {
                        for (var p = 0; p < a; p += 4)
                            if (r[d + p] !== 255) {
                                l = !0;
                                break
                            }
                        if (l) break;
                        d += a
                    }
                    for (c.ascent = e - h, d = o - a, l = !1, h = t; h > e; --h) {
                        for (var y = 0; y < a; y += 4)
                            if (r[d + y] !== 255) {
                                l = !0;
                                break
                            }
                        if (l) break;
                        d -= a
                    }
                    return c.descent = h - e, c.fontSize = c.ascent + c.descent, u._fonts[f] = c, c
                }, u
            }();
            v.default = O;
            var g = document.createElement("canvas");
            g.width = g.height = 10, O._canvas = g, O._context = g.getContext("2d"), O._fonts = {}
        }, {}],
        110: [function(w, j, v) {
            "use strict";

            function b(t, r) {
                if (!(t instanceof r)) throw new TypeError("Cannot call a class as a function")
            }

            function O(t) {
                return typeof t == "number" ? (0, i.hex2string)(t) : (typeof t == "string" && t.indexOf("0x") === 0 && (t = t.replace("0x", "#")), t)
            }

            function g(t) {
                if (Array.isArray(t)) {
                    for (var r = 0; r < t.length; ++r) t[r] = O(t[r]);
                    return t
                }
                return O(t)
            }

            function u(t, r) {
                if (!Array.isArray(t) || !Array.isArray(r) || t.length !== r.length) return !1;
                for (var o = 0; o < t.length; ++o)
                    if (t[o] !== r[o]) return !1;
                return !0
            }

            function f(t, r, o) {
                for (var a in o) Array.isArray(r[a]) ? t[a] = r[a].slice() : t[a] = r[a]
            }
            v.__esModule = !0;
            var c = function() {
                    function t(r, o) {
                        for (var a = 0; a < o.length; a++) {
                            var h = o[a];
                            h.enumerable = h.enumerable || !1, h.configurable = !0, "value" in h && (h.writable = !0), Object.defineProperty(r, h.key, h)
                        }
                    }
                    return function(r, o, a) {
                        return o && t(r.prototype, o), a && t(r, a), r
                    }
                }(),
                s = w("../const"),
                i = w("../utils"),
                n = {
                    align: "left",
                    breakWords: !1,
                    dropShadow: !1,
                    dropShadowAlpha: 1,
                    dropShadowAngle: Math.PI / 6,
                    dropShadowBlur: 0,
                    dropShadowColor: "black",
                    dropShadowDistance: 5,
                    fill: "black",
                    fillGradientType: s.TEXT_GRADIENT.LINEAR_VERTICAL,
                    fillGradientStops: [],
                    fontFamily: "Arial",
                    fontSize: 26,
                    fontStyle: "normal",
                    fontVariant: "normal",
                    fontWeight: "normal",
                    letterSpacing: 0,
                    lineHeight: 0,
                    lineJoin: "miter",
                    miterLimit: 10,
                    padding: 0,
                    stroke: "black",
                    strokeThickness: 0,
                    textBaseline: "alphabetic",
                    trim: !1,
                    wordWrap: !1,
                    wordWrapWidth: 100,
                    leading: 0
                },
                e = function() {
                    function t(r) {
                        b(this, t), this.styleID = 0, this.reset(), f(this, r, r)
                    }
                    return t.prototype.clone = function() {
                        var r = {};
                        return f(r, this, n), new t(r)
                    }, t.prototype.reset = function() {
                        f(this, n, n)
                    }, t.prototype.toFontString = function() {
                        var r = typeof this.fontSize == "number" ? this.fontSize + "px" : this.fontSize,
                            o = this.fontFamily;
                        Array.isArray(this.fontFamily) || (o = this.fontFamily.split(","));
                        for (var a = o.length - 1; a >= 0; a--) {
                            var h = o[a].trim();
                            /([\"\'])[^\'\"]+\1/.test(h) || (h = '"' + h + '"'), o[a] = h
                        }
                        return this.fontStyle + " " + this.fontVariant + " " + this.fontWeight + " " + r + " " + o.join(",")
                    }, c(t, [{
                        key: "align",
                        get: function() {
                            return this._align
                        },
                        set: function(r) {
                            this._align !== r && (this._align = r, this.styleID++)
                        }
                    }, {
                        key: "breakWords",
                        get: function() {
                            return this._breakWords
                        },
                        set: function(r) {
                            this._breakWords !== r && (this._breakWords = r, this.styleID++)
                        }
                    }, {
                        key: "dropShadow",
                        get: function() {
                            return this._dropShadow
                        },
                        set: function(r) {
                            this._dropShadow !== r && (this._dropShadow = r, this.styleID++)
                        }
                    }, {
                        key: "dropShadowAlpha",
                        get: function() {
                            return this._dropShadowAlpha
                        },
                        set: function(r) {
                            this._dropShadowAlpha !== r && (this._dropShadowAlpha = r, this.styleID++)
                        }
                    }, {
                        key: "dropShadowAngle",
                        get: function() {
                            return this._dropShadowAngle
                        },
                        set: function(r) {
                            this._dropShadowAngle !== r && (this._dropShadowAngle = r, this.styleID++)
                        }
                    }, {
                        key: "dropShadowBlur",
                        get: function() {
                            return this._dropShadowBlur
                        },
                        set: function(r) {
                            this._dropShadowBlur !== r && (this._dropShadowBlur = r, this.styleID++)
                        }
                    }, {
                        key: "dropShadowColor",
                        get: function() {
                            return this._dropShadowColor
                        },
                        set: function(r) {
                            var o = g(r);
                            this._dropShadowColor !== o && (this._dropShadowColor = o, this.styleID++)
                        }
                    }, {
                        key: "dropShadowDistance",
                        get: function() {
                            return this._dropShadowDistance
                        },
                        set: function(r) {
                            this._dropShadowDistance !== r && (this._dropShadowDistance = r, this.styleID++)
                        }
                    }, {
                        key: "fill",
                        get: function() {
                            return this._fill
                        },
                        set: function(r) {
                            var o = g(r);
                            this._fill !== o && (this._fill = o, this.styleID++)
                        }
                    }, {
                        key: "fillGradientType",
                        get: function() {
                            return this._fillGradientType
                        },
                        set: function(r) {
                            this._fillGradientType !== r && (this._fillGradientType = r, this.styleID++)
                        }
                    }, {
                        key: "fillGradientStops",
                        get: function() {
                            return this._fillGradientStops
                        },
                        set: function(r) {
                            u(this._fillGradientStops, r) || (this._fillGradientStops = r, this.styleID++)
                        }
                    }, {
                        key: "fontFamily",
                        get: function() {
                            return this._fontFamily
                        },
                        set: function(r) {
                            this.fontFamily !== r && (this._fontFamily = r, this.styleID++)
                        }
                    }, {
                        key: "fontSize",
                        get: function() {
                            return this._fontSize
                        },
                        set: function(r) {
                            this._fontSize !== r && (this._fontSize = r, this.styleID++)
                        }
                    }, {
                        key: "fontStyle",
                        get: function() {
                            return this._fontStyle
                        },
                        set: function(r) {
                            this._fontStyle !== r && (this._fontStyle = r, this.styleID++)
                        }
                    }, {
                        key: "fontVariant",
                        get: function() {
                            return this._fontVariant
                        },
                        set: function(r) {
                            this._fontVariant !== r && (this._fontVariant = r, this.styleID++)
                        }
                    }, {
                        key: "fontWeight",
                        get: function() {
                            return this._fontWeight
                        },
                        set: function(r) {
                            this._fontWeight !== r && (this._fontWeight = r, this.styleID++)
                        }
                    }, {
                        key: "letterSpacing",
                        get: function() {
                            return this._letterSpacing
                        },
                        set: function(r) {
                            this._letterSpacing !== r && (this._letterSpacing = r, this.styleID++)
                        }
                    }, {
                        key: "lineHeight",
                        get: function() {
                            return this._lineHeight
                        },
                        set: function(r) {
                            this._lineHeight !== r && (this._lineHeight = r, this.styleID++)
                        }
                    }, {
                        key: "leading",
                        get: function() {
                            return this._leading
                        },
                        set: function(r) {
                            this._leading !== r && (this._leading = r, this.styleID++)
                        }
                    }, {
                        key: "lineJoin",
                        get: function() {
                            return this._lineJoin
                        },
                        set: function(r) {
                            this._lineJoin !== r && (this._lineJoin = r, this.styleID++)
                        }
                    }, {
                        key: "miterLimit",
                        get: function() {
                            return this._miterLimit
                        },
                        set: function(r) {
                            this._miterLimit !== r && (this._miterLimit = r, this.styleID++)
                        }
                    }, {
                        key: "padding",
                        get: function() {
                            return this._padding
                        },
                        set: function(r) {
                            this._padding !== r && (this._padding = r, this.styleID++)
                        }
                    }, {
                        key: "stroke",
                        get: function() {
                            return this._stroke
                        },
                        set: function(r) {
                            var o = g(r);
                            this._stroke !== o && (this._stroke = o, this.styleID++)
                        }
                    }, {
                        key: "strokeThickness",
                        get: function() {
                            return this._strokeThickness
                        },
                        set: function(r) {
                            this._strokeThickness !== r && (this._strokeThickness = r, this.styleID++)
                        }
                    }, {
                        key: "textBaseline",
                        get: function() {
                            return this._textBaseline
                        },
                        set: function(r) {
                            this._textBaseline !== r && (this._textBaseline = r, this.styleID++)
                        }
                    }, {
                        key: "trim",
                        get: function() {
                            return this._trim
                        },
                        set: function(r) {
                            this._trim !== r && (this._trim = r, this.styleID++)
                        }
                    }, {
                        key: "wordWrap",
                        get: function() {
                            return this._wordWrap
                        },
                        set: function(r) {
                            this._wordWrap !== r && (this._wordWrap = r, this.styleID++)
                        }
                    }, {
                        key: "wordWrapWidth",
                        get: function() {
                            return this._wordWrapWidth
                        },
                        set: function(r) {
                            this._wordWrapWidth !== r && (this._wordWrapWidth = r, this.styleID++)
                        }
                    }]), t
                }();
            v.default = e
        }, {
            "../const": 46,
            "../utils": 125
        }],
        111: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            v.__esModule = !0;
            var f = w("./BaseTexture"),
                c = b(f),
                s = w("../settings"),
                i = b(s),
                n = function(e) {
                    function t() {
                        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 100,
                            o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100,
                            a = arguments[2],
                            h = arguments[3];
                        O(this, t);
                        var d = g(this, e.call(this, null, a));
                        return d.resolution = h || i.default.RESOLUTION, d.width = Math.ceil(r), d.height = Math.ceil(o), d.realWidth = d.width * d.resolution, d.realHeight = d.height * d.resolution, d.scaleMode = a !== void 0 ? a : i.default.SCALE_MODE, d.hasLoaded = !0, d._glRenderTargets = {}, d._canvasRenderTarget = null, d.valid = !1, d
                    }
                    return u(t, e), t.prototype.resize = function(r, o) {
                        r = Math.ceil(r), o = Math.ceil(o), r === this.width && o === this.height || (this.valid = r > 0 && o > 0, this.width = r, this.height = o, this.realWidth = this.width * this.resolution, this.realHeight = this.height * this.resolution, this.valid && this.emit("update", this))
                    }, t.prototype.destroy = function() {
                        e.prototype.destroy.call(this, !0), this.renderer = null
                    }, t
                }(c.default);
            v.default = n
        }, {
            "../settings": 101,
            "./BaseTexture": 112
        }],
        112: [function(w, j, v) {
            "use strict";

            function b(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }

            function O(h, d) {
                if (!(h instanceof d)) throw new TypeError("Cannot call a class as a function")
            }

            function g(h, d) {
                if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || typeof d != "object" && typeof d != "function" ? h : d
            }

            function u(h, d) {
                if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                h.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: h,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), d && (Object.setPrototypeOf ? Object.setPrototypeOf(h, d) : h.__proto__ = d)
            }
            v.__esModule = !0;
            var f = w("../utils"),
                c = w("../settings"),
                s = b(c),
                i = w("eventemitter3"),
                n = b(i),
                e = w("../utils/determineCrossOrigin"),
                t = b(e),
                r = w("bit-twiddle"),
                o = b(r),
                a = function(h) {
                    function d(l, p, y) {
                        O(this, d);
                        var x = g(this, h.call(this));
                        return x.uid = (0, f.uid)(), x.touched = 0, x.resolution = y || s.default.RESOLUTION, x.width = 100, x.height = 100, x.realWidth = 100, x.realHeight = 100, x.scaleMode = p !== void 0 ? p : s.default.SCALE_MODE, x.hasLoaded = !1, x.isLoading = !1, x.source = null, x.origSource = null, x.imageType = null, x.sourceScale = 1, x.premultipliedAlpha = !0, x.imageUrl = null, x.isPowerOfTwo = !1, x.mipmap = s.default.MIPMAP_TEXTURES, x.wrapMode = s.default.WRAP_MODE, x._glTextures = {}, x._enabled = 0, x._virtalBoundId = -1, x._destroyed = !1, x.textureCacheIds = [], l && x.loadSource(l), x
                    }
                    return u(d, h), d.prototype.update = function() {
                        this.imageType !== "svg" && (this.realWidth = this.source.naturalWidth || this.source.videoWidth || this.source.width, this.realHeight = this.source.naturalHeight || this.source.videoHeight || this.source.height, this._updateDimensions()), this.emit("update", this)
                    }, d.prototype._updateDimensions = function() {
                        this.width = this.realWidth / this.resolution, this.height = this.realHeight / this.resolution, this.isPowerOfTwo = o.default.isPow2(this.realWidth) && o.default.isPow2(this.realHeight)
                    }, d.prototype.loadSource = function(l) {
                        var p = this.isLoading;
                        this.hasLoaded = !1, this.isLoading = !1, p && this.source && (this.source.onload = null, this.source.onerror = null);
                        var y = !this.source;
                        if (this.source = l, (l.src && l.complete || l.getContext) && l.width && l.height) this._updateImageType(), this.imageType === "svg" ? this._loadSvgSource() : this._sourceLoaded(), y && this.emit("loaded", this);
                        else if (!l.getContext) {
                            this.isLoading = !0;
                            var x = this;
                            if (l.onload = function() {
                                    if (x._updateImageType(), l.onload = null, l.onerror = null, x.isLoading) return x.isLoading = !1, x._sourceLoaded(), x.imageType === "svg" ? void x._loadSvgSource() : void x.emit("loaded", x)
                                }, l.onerror = function() {
                                    l.onload = null, l.onerror = null, x.isLoading && (x.isLoading = !1, x.emit("error", x))
                                }, l.complete && l.src) {
                                if (l.onload = null, l.onerror = null, x.imageType === "svg") return void x._loadSvgSource();
                                this.isLoading = !1, l.width && l.height ? (this._sourceLoaded(), p && this.emit("loaded", this)) : p && this.emit("error", this)
                            }
                        }
                    }, d.prototype._updateImageType = function() {
                        if (this.imageUrl) {
                            var l = (0, f.decomposeDataUri)(this.imageUrl),
                                p = void 0;
                            if (l && l.mediaType === "image") {
                                var y = l.subType.split("+")[0];
                                if (p = (0, f.getUrlFileExtension)("." + y), !p) throw new Error("Invalid image type in data URI.")
                            } else p = (0, f.getUrlFileExtension)(this.imageUrl), p || (p = "png");
                            this.imageType = p
                        }
                    }, d.prototype._loadSvgSource = function() {
                        if (this.imageType === "svg") {
                            var l = (0, f.decomposeDataUri)(this.imageUrl);
                            l ? this._loadSvgSourceUsingDataUri(l) : this._loadSvgSourceUsingXhr()
                        }
                    }, d.prototype._loadSvgSourceUsingDataUri = function(l) {
                        var p = void 0;
                        if (l.encoding === "base64") {
                            if (!atob) throw new Error("Your browser doesn't support base64 conversions.");
                            p = atob(l.data)
                        } else p = l.data;
                        this._loadSvgSourceUsingString(p)
                    }, d.prototype._loadSvgSourceUsingXhr = function() {
                        var l = this,
                            p = new XMLHttpRequest;
                        p.onload = function() {
                            if (p.readyState !== p.DONE || p.status !== 200) throw new Error("Failed to load SVG using XHR.");
                            l._loadSvgSourceUsingString(p.response)
                        }, p.onerror = function() {
                            return l.emit("error", l)
                        }, p.open("GET", this.imageUrl, !0), p.send()
                    }, d.prototype._loadSvgSourceUsingString = function(l) {
                        var p = (0, f.getSvgSize)(l),
                            y = p.width,
                            x = p.height;
                        if (!y || !x) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
                        this.realWidth = Math.round(y * this.sourceScale), this.realHeight = Math.round(x * this.sourceScale), this._updateDimensions();
                        var T = document.createElement("canvas");
                        T.width = this.realWidth, T.height = this.realHeight, T._pixiId = "canvas_" + (0, f.uid)(), T.getContext("2d").drawImage(this.source, 0, 0, y, x, 0, 0, this.realWidth, this.realHeight), this.origSource = this.source, this.source = T, d.addToCache(this, T._pixiId), this.isLoading = !1, this._sourceLoaded(), this.emit("loaded", this)
                    }, d.prototype._sourceLoaded = function() {
                        this.hasLoaded = !0, this.update()
                    }, d.prototype.destroy = function() {
                        this.imageUrl && (delete f.TextureCache[this.imageUrl], this.imageUrl = null, navigator.isCocoonJS || (this.source.src = "")), this.source = null, this.dispose(), d.removeFromCache(this), this.textureCacheIds = null, this._destroyed = !0
                    }, d.prototype.dispose = function() {
                        this.emit("dispose", this)
                    }, d.prototype.updateSourceImage = function(l) {
                        this.source.src = l, this.loadSource(this.source)
                    }, d.fromImage = function(l, p, y, x) {
                        var T = f.BaseTextureCache[l];
                        if (!T) {
                            var S = new Image;
                            p === void 0 && l.indexOf("data:") !== 0 ? S.crossOrigin = (0, t.default)(l) : p && (S.crossOrigin = typeof p == "string" ? p : "anonymous"), T = new d(S, y), T.imageUrl = l, x && (T.sourceScale = x), T.resolution = (0, f.getResolutionOfUrl)(l), S.src = l, d.addToCache(T, l)
                        }
                        return T
                    }, d.fromCanvas = function(l, p) {
                        var y = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "canvas";
                        l._pixiId || (l._pixiId = y + "_" + (0, f.uid)());
                        var x = f.BaseTextureCache[l._pixiId];
                        return x || (x = new d(l, p), d.addToCache(x, l._pixiId)), x
                    }, d.from = function(l, p, y) {
                        if (typeof l == "string") return d.fromImage(l, void 0, p, y);
                        if (l instanceof HTMLImageElement) {
                            var x = l.src,
                                T = f.BaseTextureCache[x];
                            return T || (T = new d(l, p), T.imageUrl = x, y && (T.sourceScale = y), T.resolution = (0, f.getResolutionOfUrl)(x), d.addToCache(T, x)), T
                        }
                        return l instanceof HTMLCanvasElement ? d.fromCanvas(l, p) : l
                    }, d.addToCache = function(l, p) {
                        p && (l.textureCacheIds.indexOf(p) === -1 && l.textureCacheIds.push(p), f.BaseTextureCache[p] && console.warn("BaseTexture added to the cache with an id [" + p + "] that already had an entry"), f.BaseTextureCache[p] = l)
                    }, d.removeFromCache = function(l) {
                        if (typeof l == "string") {
                            var p = f.BaseTextureCache[l];
                            if (p) {
                                var y = p.textureCacheIds.indexOf(l);
                                return y > -1 && p.textureCacheIds.splice(y, 1), delete f.BaseTextureCache[l], p
                            }
                        } else if (l && l.textureCacheIds) {
                            for (var x = 0; x < l.textureCacheIds.length; ++x) delete f.BaseTextureCache[l.textureCacheIds[x]];
                            return l.textureCacheIds.length = 0, l
                        }
                        return null
                    }, d
                }(n.default);
            v.default = a
        }, {
            "../settings": 101,
            "../utils": 125,
            "../utils/determineCrossOrigin": 124,
            "bit-twiddle": 1,
            eventemitter3: 3
        }],
        113: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            v.__esModule = !0;
            var f = w("./BaseRenderTexture"),
                c = b(f),
                s = w("./Texture"),
                i = b(s),
                n = function(e) {
                    function t(r, o) {
                        O(this, t);
                        var a = null;
                        if (!(r instanceof c.default)) {
                            var h = arguments[1],
                                d = arguments[2],
                                l = arguments[3],
                                p = arguments[4];
                            console.warn("Please use RenderTexture.create(" + h + ", " + d + ") instead of the ctor directly."), a = arguments[0], o = null, r = new c.default(h, d, l, p)
                        }
                        var y = g(this, e.call(this, r, o));
                        return y.legacyRenderer = a, y.valid = !0, y._updateUvs(), y
                    }
                    return u(t, e), t.prototype.resize = function(r, o, a) {
                        r = Math.ceil(r), o = Math.ceil(o), this.valid = r > 0 && o > 0, this._frame.width = this.orig.width = r, this._frame.height = this.orig.height = o, a || this.baseTexture.resize(r, o), this._updateUvs()
                    }, t.create = function(r, o, a, h) {
                        return new t(new c.default(r, o, a, h))
                    }, t
                }(i.default);
            v.default = n
        }, {
            "./BaseRenderTexture": 111,
            "./Texture": 115
        }],
        114: [function(w, j, v) {
            "use strict";

            function b(c, s) {
                if (!(c instanceof s)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                    function c(s, i) {
                        for (var n = 0; n < i.length; n++) {
                            var e = i[n];
                            e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(s, e.key, e)
                        }
                    }
                    return function(s, i, n) {
                        return i && c(s.prototype, i), n && c(s, n), s
                    }
                }(),
                g = w("../"),
                u = w("../utils"),
                f = function() {
                    function c(s, i) {
                        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
                        b(this, c), this.baseTexture = s, this.textures = {}, this.data = i, this.resolution = this._updateResolution(n || this.baseTexture.imageUrl), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
                    }
                    return O(c, null, [{
                        key: "BATCH_SIZE",
                        get: function() {
                            return 1e3
                        }
                    }]), c.prototype._updateResolution = function(s) {
                        var i = this.data.meta.scale,
                            n = (0, u.getResolutionOfUrl)(s, null);
                        return n === null && (n = i !== void 0 ? parseFloat(i) : 1), n !== 1 && (this.baseTexture.resolution = n, this.baseTexture.update()), n
                    }, c.prototype.parse = function(s) {
                        this._batchIndex = 0, this._callback = s, this._frameKeys.length <= c.BATCH_SIZE ? (this._processFrames(0), this._parseComplete()) : this._nextBatch()
                    }, c.prototype._processFrames = function(s) {
                        for (var i = s, n = c.BATCH_SIZE, e = this.baseTexture.sourceScale; i - s < n && i < this._frameKeys.length;) {
                            var t = this._frameKeys[i],
                                r = this._frames[t],
                                o = r.frame;
                            if (o) {
                                var a = null,
                                    h = null,
                                    d = r.trimmed !== !1 && r.sourceSize ? r.sourceSize : r.frame,
                                    l = new g.Rectangle(0, 0, Math.floor(d.w * e) / this.resolution, Math.floor(d.h * e) / this.resolution);
                                a = r.rotated ? new g.Rectangle(Math.floor(o.x * e) / this.resolution, Math.floor(o.y * e) / this.resolution, Math.floor(o.h * e) / this.resolution, Math.floor(o.w * e) / this.resolution) : new g.Rectangle(Math.floor(o.x * e) / this.resolution, Math.floor(o.y * e) / this.resolution, Math.floor(o.w * e) / this.resolution, Math.floor(o.h * e) / this.resolution), r.trimmed !== !1 && r.spriteSourceSize && (h = new g.Rectangle(Math.floor(r.spriteSourceSize.x * e) / this.resolution, Math.floor(r.spriteSourceSize.y * e) / this.resolution, Math.floor(o.w * e) / this.resolution, Math.floor(o.h * e) / this.resolution)), this.textures[t] = new g.Texture(this.baseTexture, a, l, h, r.rotated ? 2 : 0), g.Texture.addToCache(this.textures[t], t)
                            }
                            i++
                        }
                    }, c.prototype._parseComplete = function() {
                        var s = this._callback;
                        this._callback = null, this._batchIndex = 0, s.call(this, this.textures)
                    }, c.prototype._nextBatch = function() {
                        var s = this;
                        this._processFrames(this._batchIndex * c.BATCH_SIZE), this._batchIndex++, setTimeout(function() {
                            s._batchIndex * c.BATCH_SIZE < s._frameKeys.length ? s._nextBatch() : s._parseComplete()
                        }, 0)
                    }, c.prototype.destroy = function() {
                        var s = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                        for (var i in this.textures) this.textures[i].destroy();
                        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, s && this.baseTexture.destroy(), this.baseTexture = null
                    }, c
                }();
            v.default = f
        }, {
            "../": 65,
            "../utils": 125
        }],
        115: [function(w, j, v) {
            "use strict";

            function b(T) {
                return T && T.__esModule ? T : {
                    default: T
                }
            }

            function O(T, S) {
                if (!(T instanceof S)) throw new TypeError("Cannot call a class as a function")
            }

            function g(T, S) {
                if (!T) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !S || typeof S != "object" && typeof S != "function" ? T : S
            }

            function u(T, S) {
                if (typeof S != "function" && S !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof S);
                T.prototype = Object.create(S && S.prototype, {
                    constructor: {
                        value: T,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), S && (Object.setPrototypeOf ? Object.setPrototypeOf(T, S) : T.__proto__ = S)
            }

            function f() {
                var T = document.createElement("canvas");
                T.width = 10, T.height = 10;
                var S = T.getContext("2d");
                return S.fillStyle = "white", S.fillRect(0, 0, 10, 10), new x(new n.default(T))
            }

            function c(T) {
                T.destroy = function() {}, T.on = function() {}, T.once = function() {}, T.emit = function() {}
            }
            v.__esModule = !0;
            var s = function() {
                    function T(S, E) {
                        for (var _ = 0; _ < E.length; _++) {
                            var m = E[_];
                            m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(S, m.key, m)
                        }
                    }
                    return function(S, E, _) {
                        return E && T(S.prototype, E), _ && T(S, _), S
                    }
                }(),
                i = w("./BaseTexture"),
                n = b(i),
                e = w("./VideoBaseTexture"),
                t = b(e),
                r = w("./TextureUvs"),
                o = b(r),
                a = w("eventemitter3"),
                h = b(a),
                d = w("../math"),
                l = w("../utils"),
                p = w("../settings"),
                y = b(p),
                x = function(T) {
                    function S(E, _, m, M, A) {
                        O(this, S);
                        var I = g(this, T.call(this));
                        if (I.noFrame = !1, _ || (I.noFrame = !0, _ = new d.Rectangle(0, 0, 1, 1)), E instanceof S && (E = E.baseTexture), I.baseTexture = E, I._frame = _, I.trim = M, I.valid = !1, I.requiresUpdate = !1, I._uvs = null, I.orig = m || _, I._rotate = Number(A || 0), A === !0) I._rotate = 2;
                        else if (I._rotate % 2 != 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
                        return E.hasLoaded ? (I.noFrame && (_ = new d.Rectangle(0, 0, E.width, E.height), E.on("update", I.onBaseTextureUpdated, I)), I.frame = _) : E.once("loaded", I.onBaseTextureLoaded, I), I._updateID = 0, I.transform = null, I.textureCacheIds = [], I
                    }
                    return u(S, T), S.prototype.update = function() {
                        this.baseTexture.update()
                    }, S.prototype.onBaseTextureLoaded = function(E) {
                        this._updateID++, this.noFrame ? this.frame = new d.Rectangle(0, 0, E.width, E.height) : this.frame = this._frame, this.baseTexture.on("update", this.onBaseTextureUpdated, this), this.emit("update", this)
                    }, S.prototype.onBaseTextureUpdated = function(E) {
                        this._updateID++, this._frame.width = E.width, this._frame.height = E.height, this.emit("update", this)
                    }, S.prototype.destroy = function(E) {
                        this.baseTexture && (E && (l.TextureCache[this.baseTexture.imageUrl] && S.removeFromCache(this.baseTexture.imageUrl), this.baseTexture.destroy()), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture.off("loaded", this.onBaseTextureLoaded, this), this.baseTexture = null), this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, S.removeFromCache(this), this.textureCacheIds = null
                    }, S.prototype.clone = function() {
                        return new S(this.baseTexture, this.frame, this.orig, this.trim, this.rotate)
                    }, S.prototype._updateUvs = function() {
                        this._uvs || (this._uvs = new o.default), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
                    }, S.fromImage = function(E, _, m, M) {
                        var A = l.TextureCache[E];
                        return A || (A = new S(n.default.fromImage(E, _, m, M)), S.addToCache(A, E)), A
                    }, S.fromFrame = function(E) {
                        var _ = l.TextureCache[E];
                        if (!_) throw new Error('The frameId "' + E + '" does not exist in the texture cache');
                        return _
                    }, S.fromCanvas = function(E, _) {
                        var m = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "canvas";
                        return new S(n.default.fromCanvas(E, _, m))
                    }, S.fromVideo = function(E, _) {
                        return typeof E == "string" ? S.fromVideoUrl(E, _) : new S(t.default.fromVideo(E, _))
                    }, S.fromVideoUrl = function(E, _) {
                        return new S(t.default.fromUrl(E, _))
                    }, S.from = function(E) {
                        if (typeof E == "string") {
                            var _ = l.TextureCache[E];
                            if (!_) {
                                var m = E.match(/\.(mp4|webm|ogg|h264|avi|mov)$/) !== null;
                                return m ? S.fromVideoUrl(E) : S.fromImage(E)
                            }
                            return _
                        }
                        return E instanceof HTMLImageElement ? new S(n.default.from(E)) : E instanceof HTMLCanvasElement ? S.fromCanvas(E, y.default.SCALE_MODE, "HTMLCanvasElement") : E instanceof HTMLVideoElement ? S.fromVideo(E) : E instanceof n.default ? new S(E) : E
                    }, S.fromLoader = function(E, _, m) {
                        var M = new n.default(E, void 0, (0, l.getResolutionOfUrl)(_)),
                            A = new S(M);
                        return M.imageUrl = _, m || (m = _), n.default.addToCache(A.baseTexture, m), S.addToCache(A, m), m !== _ && (n.default.addToCache(A.baseTexture, _), S.addToCache(A, _)), A
                    }, S.addToCache = function(E, _) {
                        _ && (E.textureCacheIds.indexOf(_) === -1 && E.textureCacheIds.push(_), l.TextureCache[_] && console.warn("Texture added to the cache with an id [" + _ + "] that already had an entry"), l.TextureCache[_] = E)
                    }, S.removeFromCache = function(E) {
                        if (typeof E == "string") {
                            var _ = l.TextureCache[E];
                            if (_) {
                                var m = _.textureCacheIds.indexOf(E);
                                return m > -1 && _.textureCacheIds.splice(m, 1), delete l.TextureCache[E], _
                            }
                        } else if (E && E.textureCacheIds) {
                            for (var M = 0; M < E.textureCacheIds.length; ++M) l.TextureCache[E.textureCacheIds[M]] === E && delete l.TextureCache[E.textureCacheIds[M]];
                            return E.textureCacheIds.length = 0, E
                        }
                        return null
                    }, s(S, [{
                        key: "frame",
                        get: function() {
                            return this._frame
                        },
                        set: function(E) {
                            this._frame = E, this.noFrame = !1;
                            var _ = E.x,
                                m = E.y,
                                M = E.width,
                                A = E.height,
                                I = _ + M > this.baseTexture.width,
                                N = m + A > this.baseTexture.height;
                            if (I || N) {
                                var P = I && N ? "and" : "or",
                                    D = "X: " + _ + " + " + M + " = " + (_ + M) + " > " + this.baseTexture.width,
                                    C = "Y: " + m + " + " + A + " = " + (m + A) + " > " + this.baseTexture.height;
                                throw new Error("Texture Error: frame does not fit inside the base Texture dimensions: " + (D + " " + P + " " + C))
                            }
                            this.valid = M && A && this.baseTexture.hasLoaded, this.trim || this.rotate || (this.orig = E), this.valid && this._updateUvs()
                        }
                    }, {
                        key: "rotate",
                        get: function() {
                            return this._rotate
                        },
                        set: function(E) {
                            this._rotate = E, this.valid && this._updateUvs()
                        }
                    }, {
                        key: "width",
                        get: function() {
                            return this.orig.width
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this.orig.height
                        }
                    }]), S
                }(h.default);
            v.default = x, x.EMPTY = new x(new n.default), c(x.EMPTY), c(x.EMPTY.baseTexture), x.WHITE = f(), c(x.WHITE), c(x.WHITE.baseTexture)
        }, {
            "../math": 70,
            "../settings": 101,
            "../utils": 125,
            "./BaseTexture": 112,
            "./TextureUvs": 117,
            "./VideoBaseTexture": 118,
            eventemitter3: 3
        }],
        116: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = function() {
                    function i(n, e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(n, r.key, r)
                        }
                    }
                    return function(n, e, t) {
                        return e && i(n.prototype, e), t && i(n, t), n
                    }
                }(),
                u = w("../math/Matrix"),
                f = b(u),
                c = new f.default,
                s = function() {
                    function i(n, e) {
                        O(this, i), this._texture = n, this.mapCoord = new f.default, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._lastTextureID = -1, this.clampOffset = 0, this.clampMargin = typeof e == "undefined" ? .5 : e
                    }
                    return i.prototype.multiplyUvs = function(n, e) {
                        e === void 0 && (e = n);
                        for (var t = this.mapCoord, r = 0; r < n.length; r += 2) {
                            var o = n[r],
                                a = n[r + 1];
                            e[r] = o * t.a + a * t.c + t.tx, e[r + 1] = o * t.b + a * t.d + t.ty
                        }
                        return e
                    }, i.prototype.update = function(n) {
                        var e = this._texture;
                        if (!e || !e.valid || !n && this._lastTextureID === e._updateID) return !1;
                        this._lastTextureID = e._updateID;
                        var t = e._uvs;
                        this.mapCoord.set(t.x1 - t.x0, t.y1 - t.y0, t.x3 - t.x0, t.y3 - t.y0, t.x0, t.y0);
                        var r = e.orig,
                            o = e.trim;
                        o && (c.set(r.width / o.width, 0, 0, r.height / o.height, -o.x / o.width, -o.y / o.height), this.mapCoord.append(c));
                        var a = e.baseTexture,
                            h = this.uClampFrame,
                            d = this.clampMargin / a.resolution,
                            l = this.clampOffset;
                        return h[0] = (e._frame.x + d + l) / a.width, h[1] = (e._frame.y + d + l) / a.height, h[2] = (e._frame.x + e._frame.width - d + l) / a.width, h[3] = (e._frame.y + e._frame.height - d + l) / a.height, this.uClampOffset[0] = l / a.realWidth, this.uClampOffset[1] = l / a.realHeight, !0
                    }, g(i, [{
                        key: "texture",
                        get: function() {
                            return this._texture
                        },
                        set: function(n) {
                            this._texture = n, this._lastTextureID = -1
                        }
                    }]), i
                }();
            v.default = s
        }, {
            "../math/Matrix": 67
        }],
        117: [function(w, j, v) {
            "use strict";

            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }

            function O(c, s) {
                if (!(c instanceof s)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("../math/GroupD8"),
                u = b(g),
                f = function() {
                    function c() {
                        O(this, c), this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsUint32 = new Uint32Array(4)
                    }
                    return c.prototype.set = function(s, i, n) {
                        var e = i.width,
                            t = i.height;
                        if (n) {
                            var r = s.width / 2 / e,
                                o = s.height / 2 / t,
                                a = s.x / e + r,
                                h = s.y / t + o;
                            n = u.default.add(n, u.default.NW), this.x0 = a + r * u.default.uX(n), this.y0 = h + o * u.default.uY(n), n = u.default.add(n, 2), this.x1 = a + r * u.default.uX(n), this.y1 = h + o * u.default.uY(n), n = u.default.add(n, 2), this.x2 = a + r * u.default.uX(n), this.y2 = h + o * u.default.uY(n), n = u.default.add(n, 2), this.x3 = a + r * u.default.uX(n), this.y3 = h + o * u.default.uY(n)
                        } else this.x0 = s.x / e, this.y0 = s.y / t, this.x1 = (s.x + s.width) / e, this.y1 = s.y / t, this.x2 = (s.x + s.width) / e, this.y2 = (s.y + s.height) / t, this.x3 = s.x / e, this.y3 = (s.y + s.height) / t;
                        this.uvsUint32[0] = (65535 * this.y0 & 65535) << 16 | 65535 * this.x0 & 65535, this.uvsUint32[1] = (65535 * this.y1 & 65535) << 16 | 65535 * this.x1 & 65535, this.uvsUint32[2] = (65535 * this.y2 & 65535) << 16 | 65535 * this.x2 & 65535, this.uvsUint32[3] = (65535 * this.y3 & 65535) << 16 | 65535 * this.x3 & 65535
                    }, c
                }();
            v.default = f
        }, {
            "../math/GroupD8": 66
        }],
        118: [function(w, j, v) {
            "use strict";

            function b(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }

            function O(h, d) {
                if (!(h instanceof d)) throw new TypeError("Cannot call a class as a function")
            }

            function g(h, d) {
                if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || typeof d != "object" && typeof d != "function" ? h : d
            }

            function u(h, d) {
                if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                h.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: h,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), d && (Object.setPrototypeOf ? Object.setPrototypeOf(h, d) : h.__proto__ = d)
            }

            function f(h, d) {
                d || (d = "video/" + h.substr(h.lastIndexOf(".") + 1));
                var l = document.createElement("source");
                return l.src = h, l.type = d, l
            }
            v.__esModule = !0;
            var c = function() {
                    function h(d, l) {
                        for (var p = 0; p < l.length; p++) {
                            var y = l[p];
                            y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(d, y.key, y)
                        }
                    }
                    return function(d, l, p) {
                        return l && h(d.prototype, l), p && h(d, p), d
                    }
                }(),
                s = w("./BaseTexture"),
                i = b(s),
                n = w("../utils"),
                e = w("../ticker"),
                t = w("../const"),
                r = w("../utils/determineCrossOrigin"),
                o = b(r),
                a = function(h) {
                    function d(l, p) {
                        if (O(this, d), !l) throw new Error("No video source element specified.");
                        (l.readyState === l.HAVE_ENOUGH_DATA || l.readyState === l.HAVE_FUTURE_DATA) && l.width && l.height && (l.complete = !0);
                        var y = g(this, h.call(this, l, p));
                        return y.width = l.videoWidth, y.height = l.videoHeight, y._autoUpdate = !0, y._isAutoUpdating = !1, y.autoPlay = !0, y.update = y.update.bind(y), y._onCanPlay = y._onCanPlay.bind(y), l.addEventListener("play", y._onPlayStart.bind(y)), l.addEventListener("pause", y._onPlayStop.bind(y)), y.hasLoaded = !1, y.__loaded = !1, y._isSourceReady() ? y._onCanPlay() : (l.addEventListener("canplay", y._onCanPlay), l.addEventListener("canplaythrough", y._onCanPlay)), y
                    }
                    return u(d, h), d.prototype._isSourcePlaying = function() {
                        var l = this.source;
                        return l.currentTime > 0 && l.paused === !1 && l.ended === !1 && l.readyState > 2
                    }, d.prototype._isSourceReady = function() {
                        return this.source.readyState === 3 || this.source.readyState === 4
                    }, d.prototype._onPlayStart = function() {
                        this.hasLoaded || this._onCanPlay(), !this._isAutoUpdating && this.autoUpdate && (e.shared.add(this.update, this, t.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0)
                    }, d.prototype._onPlayStop = function() {
                        this._isAutoUpdating && (e.shared.remove(this.update, this), this._isAutoUpdating = !1)
                    }, d.prototype._onCanPlay = function() {
                        this.hasLoaded = !0, this.source && (this.source.removeEventListener("canplay", this._onCanPlay), this.source.removeEventListener("canplaythrough", this._onCanPlay), this.width = this.source.videoWidth, this.height = this.source.videoHeight, this.__loaded || (this.__loaded = !0, this.emit("loaded", this)), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && this.source.play())
                    }, d.prototype.destroy = function() {
                        this._isAutoUpdating && e.shared.remove(this.update, this), this.source && this.source._pixiId && (i.default.removeFromCache(this.source._pixiId), delete this.source._pixiId, this.source.pause(), this.source.src = "", this.source.load()), h.prototype.destroy.call(this)
                    }, d.fromVideo = function(l, p) {
                        l._pixiId || (l._pixiId = "video_" + (0, n.uid)());
                        var y = n.BaseTextureCache[l._pixiId];
                        return y || (y = new d(l, p), i.default.addToCache(y, l._pixiId)), y
                    }, d.fromUrl = function(l, p, y) {
                        var x = document.createElement("video");
                        x.setAttribute("webkit-playsinline", ""), x.setAttribute("playsinline", "");
                        var T = Array.isArray(l) ? l[0].src || l[0] : l.src || l;
                        if (y === void 0 && T.indexOf("data:") !== 0 ? x.crossOrigin = (0, o.default)(T) : y && (x.crossOrigin = typeof y == "string" ? y : "anonymous"), Array.isArray(l))
                            for (var S = 0; S < l.length; ++S) x.appendChild(f(l[S].src || l[S], l[S].mime));
                        else x.appendChild(f(T, l.mime));
                        return x.load(), d.fromVideo(x, p)
                    }, c(d, [{
                        key: "autoUpdate",
                        get: function() {
                            return this._autoUpdate
                        },
                        set: function(l) {
                            l !== this._autoUpdate && (this._autoUpdate = l, !this._autoUpdate && this._isAutoUpdating ? (e.shared.remove(this.update, this), this._isAutoUpdating = !1) : this._autoUpdate && !this._isAutoUpdating && (e.shared.add(this.update, this, t.UPDATE_PRIORITY.HIGH), this._isAutoUpdating = !0))
                        }
                    }]), d
                }(i.default);
            v.default = a, a.fromUrls = a.fromUrl
        }, {
            "../const": 46,
            "../ticker": 121,
            "../utils": 125,
            "../utils/determineCrossOrigin": 124,
            "./BaseTexture": 112
        }],
        119: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = function() {
                    function e(t, r) {
                        for (var o = 0; o < r.length; o++) {
                            var a = r[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                u = w("../settings"),
                f = b(u),
                c = w("../const"),
                s = w("./TickerListener"),
                i = b(s),
                n = function() {
                    function e() {
                        var t = this;
                        O(this, e), this._head = new i.default(null, null, 1 / 0), this._requestId = null, this._maxElapsedMS = 100, this.autoStart = !1, this.deltaTime = 1, this.elapsedMS = 1 / f.default.TARGET_FPMS, this.lastTime = -1, this.speed = 1, this.started = !1, this._tick = function(r) {
                            t._requestId = null, t.started && (t.update(r), t.started && t._requestId === null && t._head.next && (t._requestId = requestAnimationFrame(t._tick)))
                        }
                    }
                    return e.prototype._requestIfNeeded = function() {
                        this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._requestId = requestAnimationFrame(this._tick))
                    }, e.prototype._cancelIfNeeded = function() {
                        this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null)
                    }, e.prototype._startIfPossible = function() {
                        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
                    }, e.prototype.add = function(t, r) {
                        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : c.UPDATE_PRIORITY.NORMAL;
                        if (!this.has(t)) return this._addListener(new i.default(t, r, o))
                    }, e.prototype.has = function(t) {
                        console.warn("TODO: 4.7.3 ticker\u65B9\u6CD5\u5DF2\u7ECF\u91CD\u6784\uFF0C\u9700\u8981\u91CD\u65B0\u5B9E\u73B0has\u65B9\u6CD5\uFF01")
                    }, e.prototype.addOnce = function(t, r) {
                        var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : c.UPDATE_PRIORITY.NORMAL;
                        return this._addListener(new i.default(t, r, o, !0))
                    }, e.prototype._addListener = function(t) {
                        var r = this._head.next,
                            o = this._head;
                        if (r) {
                            for (; r;) {
                                if (t.priority > r.priority) {
                                    t.connect(o);
                                    break
                                }
                                o = r, r = r.next
                            }
                            t.previous || t.connect(o)
                        } else t.connect(o);
                        return this._startIfPossible(), this
                    }, e.prototype.remove = function(t, r) {
                        for (var o = this._head.next; o;) o = o.match(t, r) ? o.destroy() : o.next;
                        return this._head.next || this._cancelIfNeeded(), this
                    }, e.prototype.start = function() {
                        this.started || (this.started = !0, this._requestIfNeeded())
                    }, e.prototype.stop = function() {
                        this.started && (this.started = !1, this._cancelIfNeeded())
                    }, e.prototype.destroy = function() {
                        this.stop();
                        for (var t = this._head.next; t;) t = t.destroy(!0);
                        this._head.destroy(), this._head = null
                    }, e.prototype.update = function() {
                        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : performance.now(),
                            r = void 0;
                        if (t > this.lastTime) {
                            r = this.elapsedMS = t - this.lastTime, r > this._maxElapsedMS && (r = this._maxElapsedMS), this.deltaTime = r * f.default.TARGET_FPMS * this.speed;
                            for (var o = this._head, a = o.next; a;) a = a.emit(this.deltaTime);
                            o.next || this._cancelIfNeeded()
                        } else this.deltaTime = this.elapsedMS = 0;
                        this.lastTime = t
                    }, g(e, [{
                        key: "FPS",
                        get: function() {
                            return 1e3 / this.elapsedMS
                        }
                    }, {
                        key: "minFPS",
                        get: function() {
                            return 1e3 / this._maxElapsedMS
                        },
                        set: function(t) {
                            var r = Math.min(Math.max(0, t) / 1e3, f.default.TARGET_FPMS);
                            this._maxElapsedMS = 1 / r
                        }
                    }]), e
                }();
            v.default = n
        }, {
            "../const": 46,
            "../settings": 101,
            "./TickerListener": 120
        }],
        120: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                if (!(g instanceof u)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function g(u) {
                    var f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null,
                        c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0,
                        s = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
                    b(this, g), this.fn = u, this.context = f, this.priority = c, this.once = s, this.next = null, this.previous = null, this._destroyed = !1
                }
                return g.prototype.match = function(u, f) {
                    return f = f || null, this.fn === u && this.context === f
                }, g.prototype.emit = function(u) {
                    this.fn && (this.context ? this.fn.call(this.context, u) : this.fn(u));
                    var f = this.next;
                    return this.once && this.destroy(!0), this._destroyed && (this.next = null), f
                }, g.prototype.connect = function(u) {
                    this.previous = u, u.next && (u.next.previous = this), this.next = u.next, u.next = this
                }, g.prototype.destroy = function() {
                    var u = arguments.length > 0 && arguments[0] !== void 0 && arguments[0];
                    this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
                    var f = this.previous;
                    return this.next = u ? null : f, this.previous = null, f
                }, g
            }();
            v.default = O
        }, {}],
        121: [function(w, j, v) {
            "use strict";

            function b(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            v.__esModule = !0, v.Ticker = v.shared = void 0;
            var O = w("./Ticker"),
                g = b(O),
                u = new g.default;
            u.autoStart = !0, u.destroy = function() {}, v.shared = u, v.Ticker = g.default
        }, {
            "./Ticker": 119
        }],
        122: [function(w, j, v) {
            "use strict";

            function b() {
                var O = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);
                return !O
            }
            v.__esModule = !0, v.default = b
        }, {}],
        123: [function(w, j, v) {
            "use strict";

            function b(O) {
                for (var g = 6 * O, u = new Uint16Array(g), f = 0, c = 0; f < g; f += 6, c += 4) u[f + 0] = c + 0, u[f + 1] = c + 1, u[f + 2] = c + 2, u[f + 3] = c + 0, u[f + 4] = c + 2, u[f + 5] = c + 3;
                return u
            }
            v.__esModule = !0, v.default = b
        }, {}],
        124: [function(w, j, v) {
            "use strict";

            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }

            function O(c) {
                var s = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : window.location;
                if (c.indexOf("data:") === 0) return "";
                s = s || window.location, f || (f = document.createElement("a")), f.href = c, c = u.default.parse(f.href);
                var i = !c.port && s.port === "" || c.port === s.port;
                return c.hostname === s.hostname && i && c.protocol === s.protocol ? "" : "anonymous"
            }
            v.__esModule = !0, v.default = O;
            var g = w("url"),
                u = b(g),
                f = void 0
        }, {
            url: 38
        }],
        125: [function(w, j, v) {
            "use strict";

            function b(G) {
                if (G && G.__esModule) return G;
                var Y = {};
                if (G != null)
                    for (var z in G) Object.prototype.hasOwnProperty.call(G, z) && (Y[z] = G[z]);
                return Y.default = G, Y
            }

            function O(G) {
                return G && G.__esModule ? G : {
                    default: G
                }
            }

            function g() {
                return ++U
            }

            function u(G, Y) {
                return Y = Y || [], Y[0] = (G >> 16 & 255) / 255, Y[1] = (G >> 8 & 255) / 255, Y[2] = (255 & G) / 255, Y
            }

            function f(G) {
                return G = G.toString(16), G = "000000".substr(0, 6 - G.length) + G, "#" + G
            }

            function c(G) {
                return (255 * G[0] << 16) + (255 * G[1] << 8) + (255 * G[2] | 0)
            }

            function s(G, Y) {
                var z = E.default.RETINA_PREFIX.exec(G);
                return z ? parseFloat(z[1]) : Y !== void 0 ? Y : 1
            }

            function i(G) {
                var Y = T.DATA_URI.exec(G);
                if (Y) return {
                    mediaType: Y[1] ? Y[1].toLowerCase() : void 0,
                    subType: Y[2] ? Y[2].toLowerCase() : void 0,
                    encoding: Y[3] ? Y[3].toLowerCase() : void 0,
                    data: Y[4]
                }
            }

            function n(G) {
                var Y = T.URL_FILE_EXTENSION.exec(G);
                if (Y) return Y[1].toLowerCase()
            }

            function e(G) {
                var Y = T.SVG_SIZE.exec(G),
                    z = {};
                return Y && (z[Y[1]] = Math.round(parseFloat(Y[3])), z[Y[5]] = Math.round(parseFloat(Y[7]))), z
            }

            function t() {
                H = !0
            }

            function r(G) {
                if (!H) {
                    if (navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                        var Y = [`
 %c %c %c PixiJS ` + T.VERSION + " - \u2730 " + G + ` \u2730  %c  %c  http://www.pixijs.com/  %c %c \u2665%c\u2665%c\u2665 

`, "background: #ff66a5; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff66a5; background: #030307; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "background: #ffc3dc; padding:5px 0;", "background: #ff66a5; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;", "color: #ff2424; background: #fff; padding:5px 0;"];
                        window.console.log.apply(console, Y)
                    } else window.console && window.console.log("PixiJS " + T.VERSION + " - " + G + " - http://www.pixijs.com/");
                    H = !0
                }
            }

            function o() {
                var G = {
                    stencil: !0,
                    failIfMajorPerformanceCaveat: !0
                };
                try {
                    if (!window.WebGLRenderingContext) return !1;
                    var Y = document.createElement("canvas"),
                        z = Y.getContext("webgl", G) || Y.getContext("experimental-webgl", G),
                        K = !(!z || !z.getContextAttributes().stencil);
                    if (z) {
                        var q = z.getExtension("WEBGL_lose_context");
                        q && q.loseContext()
                    }
                    return z = null, K
                } catch ($) {
                    return !1
                }
            }

            function a(G) {
                return G === 0 ? 0 : G < 0 ? -1 : 1
            }

            function h() {
                var G = void 0;
                for (G in X) X[G].destroy();
                for (G in W) W[G].destroy()
            }

            function d() {
                var G = void 0;
                for (G in X) delete X[G];
                for (G in W) delete W[G]
            }

            function l(G, Y) {
                return V[Y ? 1 : 0][G]
            }

            function p(G, Y) {
                if (Y === 1) return (255 * Y << 24) + G;
                if (Y === 0) return 0;
                var z = G >> 16 & 255,
                    K = G >> 8 & 255,
                    q = 255 & G;
                return z = z * Y + .5 | 0, K = K * Y + .5 | 0, q = q * Y + .5 | 0, (255 * Y << 24) + (z << 16) + (K << 8) + q
            }

            function y(G, Y, z, K) {
                return z = z || new Float32Array(4), K || K === void 0 ? (z[0] = G[0] * Y, z[1] = G[1] * Y, z[2] = G[2] * Y) : (z[0] = G[0], z[1] = G[1], z[2] = G[2]), z[3] = Y, z
            }

            function x(G, Y, z, K) {
                return z = z || new Float32Array(4), z[0] = (G >> 16 & 255) / 255, z[1] = (G >> 8 & 255) / 255, z[2] = (255 & G) / 255, (K || K === void 0) && (z[0] *= Y, z[1] *= Y, z[2] *= Y), z[3] = Y, z
            }
            v.__esModule = !0, v.premultiplyBlendMode = v.BaseTextureCache = v.TextureCache = v.earcut = v.mixins = v.pluginTarget = v.EventEmitter = v.removeItems = v.isMobile = void 0, v.uid = g, v.hex2rgb = u, v.hex2string = f, v.rgb2hex = c, v.getResolutionOfUrl = s, v.decomposeDataUri = i, v.getUrlFileExtension = n, v.getSvgSize = e, v.skipHello = t, v.sayHello = r, v.isWebGLSupported = o, v.sign = a, v.destroyTextureCache = h, v.clearTextureCache = d, v.correctBlendMode = l, v.premultiplyTint = p, v.premultiplyRgba = y, v.premultiplyTintToRgba = x;
            var T = w("../const"),
                S = w("../settings"),
                E = O(S),
                _ = w("eventemitter3"),
                m = O(_),
                M = w("./pluginTarget"),
                A = O(M),
                I = w("./mixin"),
                N = b(I),
                P = w("ismobilejs"),
                D = b(P),
                C = w("remove-array-items"),
                R = O(C),
                F = w("./mapPremultipliedBlendModes"),
                B = O(F),
                L = w("earcut"),
                k = O(L),
                U = 0,
                H = !1;
            v.isMobile = D, v.removeItems = R.default, v.EventEmitter = m.default, v.pluginTarget = A.default, v.mixins = N, v.earcut = k.default;
            var X = v.TextureCache = Object.create(null),
                W = v.BaseTextureCache = Object.create(null),
                V = v.premultiplyBlendMode = (0, B.default)()
        }, {
            "../const": 46,
            "../settings": 101,
            "./mapPremultipliedBlendModes": 126,
            "./mixin": 128,
            "./pluginTarget": 129,
            earcut: 2,
            eventemitter3: 3,
            ismobilejs: 4,
            "remove-array-items": 31
        }],
        126: [function(w, j, v) {
            "use strict";

            function b() {
                for (var g = [], u = [], f = 0; f < 32; f++) g[f] = f, u[f] = f;
                g[O.BLEND_MODES.NORMAL_NPM] = O.BLEND_MODES.NORMAL, g[O.BLEND_MODES.ADD_NPM] = O.BLEND_MODES.ADD, g[O.BLEND_MODES.SCREEN_NPM] = O.BLEND_MODES.SCREEN, u[O.BLEND_MODES.NORMAL] = O.BLEND_MODES.NORMAL_NPM, u[O.BLEND_MODES.ADD] = O.BLEND_MODES.ADD_NPM, u[O.BLEND_MODES.SCREEN] = O.BLEND_MODES.SCREEN_NPM;
                var c = [];
                return c.push(u), c.push(g), c
            }
            v.__esModule = !0, v.default = b;
            var O = w("../const")
        }, {
            "../const": 46
        }],
        127: [function(w, j, v) {
            "use strict";

            function b(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }

            function O(f) {
                return u.default.tablet || u.default.phone ? 4 : f
            }
            v.__esModule = !0, v.default = O;
            var g = w("ismobilejs"),
                u = b(g)
        }, {
            ismobilejs: 4
        }],
        128: [function(w, j, v) {
            "use strict";

            function b(f, c) {
                if (f && c)
                    for (var s = Object.keys(c), i = 0; i < s.length; ++i) {
                        var n = s[i];
                        Object.defineProperty(f, n, Object.getOwnPropertyDescriptor(c, n))
                    }
            }

            function O(f, c) {
                u.push(f, c)
            }

            function g() {
                for (var f = 0; f < u.length; f += 2) b(u[f], u[f + 1]);
                u.length = 0
            }
            v.__esModule = !0, v.mixin = b, v.delayMixin = O, v.performMixins = g;
            var u = []
        }, {}],
        129: [function(w, j, v) {
            "use strict";

            function b(O) {
                O.__plugins = {}, O.registerPlugin = function(g, u) {
                    O.__plugins[g] = u
                }, O.prototype.initPlugins = function() {
                    this.plugins = this.plugins || {};
                    for (var g in O.__plugins) this.plugins[g] = new O.__plugins[g](this)
                }, O.prototype.destroyPlugins = function() {
                    for (var g in this.plugins) this.plugins[g].destroy(), this.plugins[g] = null;
                    this.plugins = null
                }
            }
            v.__esModule = !0, v.default = {
                mixin: function(O) {
                    b(O)
                }
            }
        }, {}],
        130: [function(w, j, v) {
            "use strict";

            function b(O) {
                var g = O.width,
                    u = O.height,
                    f = O.getContext("2d"),
                    c = f.getImageData(0, 0, g, u),
                    s = c.data,
                    i = s.length,
                    n = {
                        top: null,
                        left: null,
                        right: null,
                        bottom: null
                    },
                    e = void 0,
                    t = void 0,
                    r = void 0;
                for (e = 0; e < i; e += 4) s[e + 3] !== 0 && (t = e / 4 % g, r = ~~(e / 4 / g), n.top === null && (n.top = r), (n.left === null || t < n.left) && (n.left = t), (n.right === null || n.right < t) && (n.right = t + 1), (n.bottom === null || n.bottom < r) && (n.bottom = r));
                g = n.right - n.left, u = n.bottom - n.top + 1;
                var o = f.getImageData(n.left, n.top, g, u);
                return {
                    height: u,
                    width: g,
                    data: o
                }
            }
            v.__esModule = !0, v.default = b
        }, {}],
        131: [function(w, j, v) {
            "use strict";

            function b(u) {
                if (!g[u]) {
                    var f = new Error().stack;
                    typeof f == "undefined" ? console.warn("Deprecation Warning: ", u) : (f = f.split(`
`).splice(3).join(`
`), console.groupCollapsed ? (console.groupCollapsed("%cDeprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", u), console.warn(f), console.groupEnd()) : (console.warn("Deprecation Warning: ", u), console.warn(f))), g[u] = !0
                }
            }

            function O(u) {
                var f = u.mesh,
                    c = u.particles,
                    s = u.extras,
                    i = u.filters,
                    n = u.prepare,
                    e = u.loaders,
                    t = u.interaction;
                Object.defineProperties(u, {
                    SpriteBatch: {
                        get: function() {
                            throw new ReferenceError("SpriteBatch does not exist any more, please use the new ParticleContainer instead.")
                        }
                    },
                    AssetLoader: {
                        get: function() {
                            throw new ReferenceError("The loader system was overhauled in PixiJS v3, please see the new PIXI.loaders.Loader class.")
                        }
                    },
                    Stage: {
                        get: function() {
                            return b("You do not need to use a PIXI Stage any more, you can simply render any container."), u.Container
                        }
                    },
                    DisplayObjectContainer: {
                        get: function() {
                            return b("DisplayObjectContainer has been shortened to Container, please use Container from now on."), u.Container
                        }
                    },
                    Strip: {
                        get: function() {
                            return b("The Strip class has been renamed to Mesh and moved to mesh.Mesh, please use mesh.Mesh from now on."), f.Mesh
                        }
                    },
                    Rope: {
                        get: function() {
                            return b("The Rope class has been moved to mesh.Rope, please use mesh.Rope from now on."), f.Rope
                        }
                    },
                    ParticleContainer: {
                        get: function() {
                            return b("The ParticleContainer class has been moved to particles.ParticleContainer, please use particles.ParticleContainer from now on."), c.ParticleContainer
                        }
                    },
                    MovieClip: {
                        get: function() {
                            return b("The MovieClip class has been moved to extras.AnimatedSprite, please use extras.AnimatedSprite."), s.AnimatedSprite
                        }
                    },
                    TilingSprite: {
                        get: function() {
                            return b("The TilingSprite class has been moved to extras.TilingSprite, please use extras.TilingSprite from now on."), s.TilingSprite
                        }
                    },
                    BitmapText: {
                        get: function() {
                            return b("The BitmapText class has been moved to extras.BitmapText, please use extras.BitmapText from now on."), s.BitmapText
                        }
                    },
                    blendModes: {
                        get: function() {
                            return b("The blendModes has been moved to BLEND_MODES, please use BLEND_MODES from now on."), u.BLEND_MODES
                        }
                    },
                    scaleModes: {
                        get: function() {
                            return b("The scaleModes has been moved to SCALE_MODES, please use SCALE_MODES from now on."), u.SCALE_MODES
                        }
                    },
                    BaseTextureCache: {
                        get: function() {
                            return b("The BaseTextureCache class has been moved to utils.BaseTextureCache, please use utils.BaseTextureCache from now on."), u.utils.BaseTextureCache
                        }
                    },
                    TextureCache: {
                        get: function() {
                            return b("The TextureCache class has been moved to utils.TextureCache, please use utils.TextureCache from now on."), u.utils.TextureCache
                        }
                    },
                    math: {
                        get: function() {
                            return b("The math namespace is deprecated, please access members already accessible on PIXI."), u
                        }
                    },
                    AbstractFilter: {
                        get: function() {
                            return b("AstractFilter has been renamed to Filter, please use PIXI.Filter"), u.Filter
                        }
                    },
                    TransformManual: {
                        get: function() {
                            return b("TransformManual has been renamed to TransformBase, please update your pixi-spine"), u.TransformBase
                        }
                    },
                    TARGET_FPMS: {
                        get: function() {
                            return b("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), u.settings.TARGET_FPMS
                        },
                        set: function(p) {
                            b("PIXI.TARGET_FPMS has been deprecated, please use PIXI.settings.TARGET_FPMS"), u.settings.TARGET_FPMS = p
                        }
                    },
                    FILTER_RESOLUTION: {
                        get: function() {
                            return b("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), u.settings.FILTER_RESOLUTION
                        },
                        set: function(p) {
                            b("PIXI.FILTER_RESOLUTION has been deprecated, please use PIXI.settings.FILTER_RESOLUTION"), u.settings.FILTER_RESOLUTION = p
                        }
                    },
                    RESOLUTION: {
                        get: function() {
                            return b("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), u.settings.RESOLUTION
                        },
                        set: function(p) {
                            b("PIXI.RESOLUTION has been deprecated, please use PIXI.settings.RESOLUTION"), u.settings.RESOLUTION = p
                        }
                    },
                    MIPMAP_TEXTURES: {
                        get: function() {
                            return b("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), u.settings.MIPMAP_TEXTURES
                        },
                        set: function(p) {
                            b("PIXI.MIPMAP_TEXTURES has been deprecated, please use PIXI.settings.MIPMAP_TEXTURES"), u.settings.MIPMAP_TEXTURES = p
                        }
                    },
                    SPRITE_BATCH_SIZE: {
                        get: function() {
                            return b("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), u.settings.SPRITE_BATCH_SIZE
                        },
                        set: function(p) {
                            b("PIXI.SPRITE_BATCH_SIZE has been deprecated, please use PIXI.settings.SPRITE_BATCH_SIZE"), u.settings.SPRITE_BATCH_SIZE = p
                        }
                    },
                    SPRITE_MAX_TEXTURES: {
                        get: function() {
                            return b("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), u.settings.SPRITE_MAX_TEXTURES
                        },
                        set: function(p) {
                            b("PIXI.SPRITE_MAX_TEXTURES has been deprecated, please use PIXI.settings.SPRITE_MAX_TEXTURES"), u.settings.SPRITE_MAX_TEXTURES = p
                        }
                    },
                    RETINA_PREFIX: {
                        get: function() {
                            return b("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), u.settings.RETINA_PREFIX
                        },
                        set: function(p) {
                            b("PIXI.RETINA_PREFIX has been deprecated, please use PIXI.settings.RETINA_PREFIX"), u.settings.RETINA_PREFIX = p
                        }
                    },
                    DEFAULT_RENDER_OPTIONS: {
                        get: function() {
                            return b("PIXI.DEFAULT_RENDER_OPTIONS has been deprecated, please use PIXI.settings.DEFAULT_RENDER_OPTIONS"), u.settings.RENDER_OPTIONS
                        }
                    }
                });
                for (var r = [{
                        parent: "TRANSFORM_MODE",
                        target: "TRANSFORM_MODE"
                    }, {
                        parent: "GC_MODES",
                        target: "GC_MODE"
                    }, {
                        parent: "WRAP_MODES",
                        target: "WRAP_MODE"
                    }, {
                        parent: "SCALE_MODES",
                        target: "SCALE_MODE"
                    }, {
                        parent: "PRECISION",
                        target: "PRECISION_FRAGMENT"
                    }], o = function(p) {
                        var y = r[p];
                        Object.defineProperty(u[y.parent], "DEFAULT", {
                            get: function() {
                                return b("PIXI." + y.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + y.target), u.settings[y.target]
                            },
                            set: function(x) {
                                b("PIXI." + y.parent + ".DEFAULT has been deprecated, please use PIXI.settings." + y.target), u.settings[y.target] = x
                            }
                        })
                    }, a = 0; a < r.length; a++) o(a);
                Object.defineProperties(u.settings, {
                    PRECISION: {
                        get: function() {
                            return b("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), u.settings.PRECISION_FRAGMENT
                        },
                        set: function(p) {
                            b("PIXI.settings.PRECISION has been deprecated, please use PIXI.settings.PRECISION_FRAGMENT"), u.settings.PRECISION_FRAGMENT = p
                        }
                    }
                }), s.AnimatedSprite && Object.defineProperties(s, {
                    MovieClip: {
                        get: function() {
                            return b("The MovieClip class has been renamed to AnimatedSprite, please use AnimatedSprite from now on."), s.AnimatedSprite
                        }
                    }
                }), s && Object.defineProperties(s, {
                    TextureTransform: {
                        get: function() {
                            return b("The TextureTransform class has been renamed to TextureMatrix, please use PIXI.TextureMatrix from now on."), u.TextureMatrix
                        }
                    }
                }), u.DisplayObject.prototype.generateTexture = function(p, y, x) {
                    return b("generateTexture has moved to the renderer, please use renderer.generateTexture(displayObject)"), p.generateTexture(this, y, x)
                }, u.Graphics.prototype.generateTexture = function(p, y) {
                    return b("graphics generate texture has moved to the renderer. Or to render a graphics to a texture using canvas please use generateCanvasTexture"), this.generateCanvasTexture(p, y)
                }, u.GroupD8.isSwapWidthHeight = function(p) {
                    return b("GroupD8.isSwapWidthHeight was renamed to GroupD8.isVertical"), u.GroupD8.isVertical(p)
                }, u.RenderTexture.prototype.render = function(p, y, x, T) {
                    this.legacyRenderer.render(p, this, x, y, !T), b("RenderTexture.render is now deprecated, please use renderer.render(displayObject, renderTexture)")
                }, u.RenderTexture.prototype.getImage = function(p) {
                    return b("RenderTexture.getImage is now deprecated, please use renderer.extract.image(target)"), this.legacyRenderer.extract.image(p)
                }, u.RenderTexture.prototype.getBase64 = function(p) {
                    return b("RenderTexture.getBase64 is now deprecated, please use renderer.extract.base64(target)"), this.legacyRenderer.extract.base64(p)
                }, u.RenderTexture.prototype.getCanvas = function(p) {
                    return b("RenderTexture.getCanvas is now deprecated, please use renderer.extract.canvas(target)"), this.legacyRenderer.extract.canvas(p)
                }, u.RenderTexture.prototype.getPixels = function(p) {
                    return b("RenderTexture.getPixels is now deprecated, please use renderer.extract.pixels(target)"), this.legacyRenderer.pixels(p)
                }, u.Sprite.prototype.setTexture = function(p) {
                    this.texture = p, b("setTexture is now deprecated, please use the texture property, e.g : sprite.texture = texture;")
                }, s.BitmapText && (s.BitmapText.prototype.setText = function(p) {
                    this.text = p, b("setText is now deprecated, please use the text property, e.g : myBitmapText.text = 'my text';")
                }), u.Text.prototype.setText = function(p) {
                    this.text = p, b("setText is now deprecated, please use the text property, e.g : myText.text = 'my text';")
                }, u.Text.calculateFontProperties = function(p) {
                    return b("Text.calculateFontProperties is now deprecated, please use the TextMetrics.measureFont"), u.TextMetrics.measureFont(p)
                }, Object.defineProperties(u.Text, {
                    fontPropertiesCache: {
                        get: function() {
                            return b("Text.fontPropertiesCache is deprecated"), u.TextMetrics._fonts
                        }
                    },
                    fontPropertiesCanvas: {
                        get: function() {
                            return b("Text.fontPropertiesCanvas is deprecated"), u.TextMetrics._canvas
                        }
                    },
                    fontPropertiesContext: {
                        get: function() {
                            return b("Text.fontPropertiesContext is deprecated"), u.TextMetrics._context
                        }
                    }
                }), u.Text.prototype.setStyle = function(p) {
                    this.style = p, b("setStyle is now deprecated, please use the style property, e.g : myText.style = style;")
                }, u.Text.prototype.determineFontProperties = function(p) {
                    return b("determineFontProperties is now deprecated, please use TextMetrics.measureFont method"), u.TextMetrics.measureFont(p)
                }, u.Text.getFontStyle = function(p) {
                    return b("getFontStyle is now deprecated, please use TextStyle.toFontString() instead"), p = p || {}, p instanceof u.TextStyle || (p = new u.TextStyle(p)), p.toFontString()
                }, Object.defineProperties(u.TextStyle.prototype, {
                    font: {
                        get: function() {
                            b("text style property 'font' is now deprecated, please use the 'fontFamily', 'fontSize', 'fontStyle', 'fontVariant' and 'fontWeight' properties from now on");
                            var p = typeof this._fontSize == "number" ? this._fontSize + "px" : this._fontSize;
                            return this._fontStyle + " " + this._fontVariant + " " + this._fontWeight + " " + p + " " + this._fontFamily
                        },
                        set: function(p) {
                            b("text style property 'font' is now deprecated, please use the 'fontFamily','fontSize',fontStyle','fontVariant' and 'fontWeight' properties from now on"), p.indexOf("italic") > 1 ? this._fontStyle = "italic" : p.indexOf("oblique") > -1 ? this._fontStyle = "oblique" : this._fontStyle = "normal", p.indexOf("small-caps") > -1 ? this._fontVariant = "small-caps" : this._fontVariant = "normal";
                            var y = p.split(" "),
                                x = -1;
                            this._fontSize = 26;
                            for (var T = 0; T < y.length; ++T)
                                if (y[T].match(/(px|pt|em|%)/)) {
                                    x = T, this._fontSize = y[T];
                                    break
                                }
                            this._fontWeight = "normal";
                            for (var S = 0; S < x; ++S)
                                if (y[S].match(/(bold|bolder|lighter|100|200|300|400|500|600|700|800|900)/)) {
                                    this._fontWeight = y[S];
                                    break
                                }
                            if (x > -1 && x < y.length - 1) {
                                this._fontFamily = "";
                                for (var E = x + 1; E < y.length; ++E) this._fontFamily += y[E] + " ";
                                this._fontFamily = this._fontFamily.slice(0, -1)
                            } else this._fontFamily = "Arial";
                            this.styleID++
                        }
                    }
                }), u.Texture.prototype.setFrame = function(p) {
                    this.frame = p, b("setFrame is now deprecated, please use the frame property, e.g: myTexture.frame = frame;")
                }, u.Texture.addTextureToCache = function(p, y) {
                    u.Texture.addToCache(p, y), b("Texture.addTextureToCache is deprecated, please use Texture.addToCache from now on.")
                }, u.Texture.removeTextureFromCache = function(p) {
                    return b("Texture.removeTextureFromCache is deprecated, please use Texture.removeFromCache from now on. Be aware that Texture.removeFromCache does not automatically its BaseTexture from the BaseTextureCache. For that, use BaseTexture.removeFromCache"), u.BaseTexture.removeFromCache(p), u.Texture.removeFromCache(p)
                }, Object.defineProperties(i, {
                    AbstractFilter: {
                        get: function() {
                            return b("AstractFilter has been renamed to Filter, please use PIXI.Filter"), u.AbstractFilter
                        }
                    },
                    SpriteMaskFilter: {
                        get: function() {
                            return b("filters.SpriteMaskFilter is an undocumented alias, please use SpriteMaskFilter from now on."), u.SpriteMaskFilter
                        }
                    },
                    VoidFilter: {
                        get: function() {
                            return b("VoidFilter has been renamed to AlphaFilter, please use PIXI.filters.AlphaFilter"), i.AlphaFilter
                        }
                    }
                }), u.utils.uuid = function() {
                    return b("utils.uuid() is deprecated, please use utils.uid() from now on."), u.utils.uid()
                }, u.utils.canUseNewCanvasBlendModes = function() {
                    return b("utils.canUseNewCanvasBlendModes() is deprecated, please use CanvasTinter.canUseMultiply from now on"), u.CanvasTinter.canUseMultiply
                };
                var h = !0;
                if (Object.defineProperty(u.utils, "_saidHello", {
                        set: function(p) {
                            p && (b("PIXI.utils._saidHello is deprecated, please use PIXI.utils.skipHello()"), this.skipHello()), h = p
                        },
                        get: function() {
                            return h
                        }
                    }), n.BasePrepare && (n.BasePrepare.prototype.register = function(p, y) {
                        return b("renderer.plugins.prepare.register is now deprecated, please use renderer.plugins.prepare.registerFindHook & renderer.plugins.prepare.registerUploadHook"), p && this.registerFindHook(p), y && this.registerUploadHook(y), this
                    }), n.canvas && Object.defineProperty(n.canvas, "UPLOADS_PER_FRAME", {
                        set: function() {
                            b("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
                        },
                        get: function() {
                            return b("PIXI.CanvasPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
                        }
                    }), n.webgl && Object.defineProperty(n.webgl, "UPLOADS_PER_FRAME", {
                        set: function() {
                            b("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please set renderer.plugins.prepare.limiter.maxItemsPerFrame on your renderer")
                        },
                        get: function() {
                            return b("PIXI.WebGLPrepare.UPLOADS_PER_FRAME has been removed. Please use renderer.plugins.prepare.limiter"), NaN
                        }
                    }), e.Loader) {
                    var d = e.Resource,
                        l = e.Loader;
                    Object.defineProperties(d.prototype, {
                        isJson: {
                            get: function() {
                                return b("The isJson property is deprecated, please use `resource.type === Resource.TYPE.JSON`."), this.type === d.TYPE.JSON
                            }
                        },
                        isXml: {
                            get: function() {
                                return b("The isXml property is deprecated, please use `resource.type === Resource.TYPE.XML`."), this.type === d.TYPE.XML
                            }
                        },
                        isImage: {
                            get: function() {
                                return b("The isImage property is deprecated, please use `resource.type === Resource.TYPE.IMAGE`."), this.type === d.TYPE.IMAGE
                            }
                        },
                        isAudio: {
                            get: function() {
                                return b("The isAudio property is deprecated, please use `resource.type === Resource.TYPE.AUDIO`."), this.type === d.TYPE.AUDIO
                            }
                        },
                        isVideo: {
                            get: function() {
                                return b("The isVideo property is deprecated, please use `resource.type === Resource.TYPE.VIDEO`."), this.type === d.TYPE.VIDEO
                            }
                        }
                    }), Object.defineProperties(l.prototype, {
                        before: {
                            get: function() {
                                return b("The before() method is deprecated, please use pre()."), this.pre
                            }
                        },
                        after: {
                            get: function() {
                                return b("The after() method is deprecated, please use use()."), this.use
                            }
                        }
                    })
                }
                t.interactiveTarget && Object.defineProperty(t.interactiveTarget, "defaultCursor", {
                    set: function(p) {
                        b("Property defaultCursor has been replaced with 'cursor'. "), this.cursor = p
                    },
                    get: function() {
                        return b("Property defaultCursor has been replaced with 'cursor'. "), this.cursor
                    }
                }), t.InteractionManager && (Object.defineProperty(t.InteractionManager, "defaultCursorStyle", {
                    set: function(p) {
                        b("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default = p
                    },
                    get: function() {
                        return b("Property defaultCursorStyle has been replaced with 'cursorStyles.default'. "), this.cursorStyles.default
                    }
                }), Object.defineProperty(t.InteractionManager, "currentCursorStyle", {
                    set: function(p) {
                        b("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode = p
                    },
                    get: function() {
                        return b("Property currentCursorStyle has been removed.See the currentCursorMode property, which works differently."), this.currentCursorMode
                    }
                }))
            }
            v.__esModule = !0, v.default = O;
            var g = {}
        }, {}],
        132: [function(w, j, v) {
            "use strict";

            function b(s) {
                if (s && s.__esModule) return s;
                var i = {};
                if (s != null)
                    for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (i[n] = s[n]);
                return i.default = s, i
            }

            function O(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("../../core"),
                u = b(g),
                f = new u.Rectangle,
                c = function() {
                    function s(i) {
                        O(this, s), this.renderer = i, i.extract = this
                    }
                    return s.prototype.image = function(n) {
                        var e = new Image;
                        return e.src = this.base64(n), e
                    }, s.prototype.base64 = function(i) {
                        return this.canvas(i).toDataURL()
                    }, s.prototype.canvas = function(i) {
                        var n = this.renderer,
                            e = void 0,
                            t = void 0,
                            r = void 0,
                            o = void 0;
                        i && (o = i instanceof u.RenderTexture ? i : n.generateTexture(i)), o ? (e = o.baseTexture._canvasRenderTarget.context, t = o.baseTexture._canvasRenderTarget.resolution, r = o.frame) : (e = n.rootContext, r = f, r.width = this.renderer.width, r.height = this.renderer.height);
                        var a = r.width * t,
                            h = r.height * t,
                            d = new u.CanvasRenderTarget(a, h),
                            l = e.getImageData(r.x * t, r.y * t, a, h);
                        return d.context.putImageData(l, 0, 0), d.canvas
                    }, s.prototype.pixels = function(i) {
                        var n = this.renderer,
                            e = void 0,
                            t = void 0,
                            r = void 0,
                            o = void 0;
                        return i && (o = i instanceof u.RenderTexture ? i : n.generateTexture(i)), o ? (e = o.baseTexture._canvasRenderTarget.context, t = o.baseTexture._canvasRenderTarget.resolution, r = o.frame) : (e = n.rootContext, r = f, r.width = n.width, r.height = n.height), e.getImageData(0, 0, r.width * t, r.height * t).data
                    }, s.prototype.destroy = function() {
                        this.renderer.extract = null, this.renderer = null
                    }, s
                }();
            v.default = c, u.CanvasRenderer.registerPlugin("extract", c)
        }, {
            "../../core": 65
        }],
        133: [function(w, j, v) {
            "use strict";

            function b(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            v.__esModule = !0;
            var O = w("./webgl/WebGLExtract");
            Object.defineProperty(v, "webgl", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./canvas/CanvasExtract");
            Object.defineProperty(v, "canvas", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            })
        }, {
            "./canvas/CanvasExtract": 132,
            "./webgl/WebGLExtract": 134
        }],
        134: [function(w, j, v) {
            "use strict";

            function b(i) {
                if (i && i.__esModule) return i;
                var n = {};
                if (i != null)
                    for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e]);
                return n.default = i, n
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("../../core"),
                u = b(g),
                f = new u.Rectangle,
                c = 4,
                s = function() {
                    function i(n) {
                        O(this, i), this.renderer = n, n.extract = this
                    }
                    return i.prototype.image = function(e) {
                        var t = new Image;
                        return t.src = this.base64(e), t
                    }, i.prototype.base64 = function(n) {
                        return this.canvas(n).toDataURL()
                    }, i.prototype.canvas = function(n) {
                        var e = this.renderer,
                            t = void 0,
                            r = void 0,
                            o = void 0,
                            a = !1,
                            h = void 0,
                            d = !1;
                        n && (n instanceof u.RenderTexture ? h = n : (h = this.renderer.generateTexture(n), d = !0)), h ? (t = h.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], r = t.resolution, o = h.frame, a = !1) : (t = this.renderer.rootRenderTarget, r = t.resolution, a = !0, o = f, o.width = t.size.width, o.height = t.size.height);
                        var l = o.width * r,
                            p = o.height * r,
                            y = new u.CanvasRenderTarget(l, p);
                        if (t) {
                            e.bindRenderTarget(t);
                            var x = new Uint8Array(c * l * p),
                                T = e.gl;
                            T.readPixels(o.x * r, o.y * r, l, p, T.RGBA, T.UNSIGNED_BYTE, x);
                            var S = y.context.getImageData(0, 0, l, p);
                            S.data.set(x), y.context.putImageData(S, 0, 0), a && (y.context.scale(1, -1), y.context.drawImage(y.canvas, 0, -p))
                        }
                        return d && h.destroy(!0), y.canvas
                    }, i.prototype.pixels = function(n) {
                        var e = this.renderer,
                            t = void 0,
                            r = void 0,
                            o = void 0,
                            a = void 0,
                            h = !1;
                        n && (n instanceof u.RenderTexture ? a = n : (a = this.renderer.generateTexture(n), h = !0)), a ? (t = a.baseTexture._glRenderTargets[this.renderer.CONTEXT_UID], r = t.resolution, o = a.frame) : (t = this.renderer.rootRenderTarget, r = t.resolution, o = f, o.width = t.size.width, o.height = t.size.height);
                        var d = o.width * r,
                            l = o.height * r,
                            p = new Uint8Array(c * d * l);
                        if (t) {
                            e.bindRenderTarget(t);
                            var y = e.gl;
                            y.readPixels(o.x * r, o.y * r, d, l, y.RGBA, y.UNSIGNED_BYTE, p)
                        }
                        return h && a.destroy(!0), p
                    }, i.prototype.destroy = function() {
                        this.renderer.extract = null, this.renderer = null
                    }, i
                }();
            v.default = s, u.WebGLRenderer.registerPlugin("extract", s)
        }, {
            "../../core": 65
        }],
        135: [function(w, j, v) {
            "use strict";

            function b(n) {
                if (n && n.__esModule) return n;
                var e = {};
                if (n != null)
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                return e.default = n, e
            }

            function O(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function g(n, e) {
                if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || typeof e != "object" && typeof e != "function" ? n : e
            }

            function u(n, e) {
                if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
            }
            v.__esModule = !0;
            var f = function() {
                    function n(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(e, t, r) {
                        return t && n(e.prototype, t), r && n(e, r), e
                    }
                }(),
                c = w("../core"),
                s = b(c),
                i = function(n) {
                    function e(t, r) {
                        O(this, e);
                        var o = g(this, n.call(this, t[0] instanceof s.Texture ? t[0] : t[0].texture));
                        return o._textures = null, o._durations = null, o.textures = t, o._autoUpdate = r !== !1, o.animationSpeed = 1, o.loop = !0, o.onComplete = null, o.onFrameChange = null, o.onLoop = null, o._currentTime = 0, o.playing = !1, o
                    }
                    return u(e, n), e.prototype.stop = function() {
                        this.playing && (this.playing = !1, this._autoUpdate && s.ticker.shared.remove(this.update, this))
                    }, e.prototype.play = function() {
                        this.playing || (this.playing = !0, this._autoUpdate && s.ticker.shared.add(this.update, this, s.UPDATE_PRIORITY.HIGH))
                    }, e.prototype.gotoAndStop = function(t) {
                        this.stop();
                        var r = this.currentFrame;
                        this._currentTime = t, r !== this.currentFrame && this.updateTexture()
                    }, e.prototype.gotoAndPlay = function(t) {
                        var r = this.currentFrame;
                        this._currentTime = t, r !== this.currentFrame && this.updateTexture(), this.play()
                    }, e.prototype.update = function(t) {
                        var r = this.animationSpeed * t,
                            o = this.currentFrame;
                        if (this._durations !== null) {
                            var a = this._currentTime % 1 * this._durations[this.currentFrame];
                            for (a += r / 60 * 1e3; a < 0;) this._currentTime--, a += this._durations[this.currentFrame];
                            var h = Math.sign(this.animationSpeed * t);
                            for (this._currentTime = Math.floor(this._currentTime); a >= this._durations[this.currentFrame];) a -= this._durations[this.currentFrame] * h, this._currentTime += h;
                            this._currentTime += a / this._durations[this.currentFrame]
                        } else this._currentTime += r;
                        this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : o !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < o ? this.onLoop() : this.animationSpeed < 0 && this.currentFrame > o && this.onLoop()), this.updateTexture())
                    }, e.prototype.updateTexture = function() {
                        this._texture = this._textures[this.currentFrame], this._textureID = -1, this.cachedTint = 16777215, this.onFrameChange && this.onFrameChange(this.currentFrame)
                    }, e.prototype.destroy = function(t) {
                        this.stop(), n.prototype.destroy.call(this, t)
                    }, e.fromFrames = function(t) {
                        for (var r = [], o = 0; o < t.length; ++o) r.push(s.Texture.fromFrame(t[o]));
                        return new e(r)
                    }, e.fromImages = function(t) {
                        for (var r = [], o = 0; o < t.length; ++o) r.push(s.Texture.fromImage(t[o]));
                        return new e(r)
                    }, f(e, [{
                        key: "totalFrames",
                        get: function() {
                            return this._textures.length
                        }
                    }, {
                        key: "textures",
                        get: function() {
                            return this._textures
                        },
                        set: function(t) {
                            if (t[0] instanceof s.Texture) this._textures = t, this._durations = null;
                            else {
                                this._textures = [], this._durations = [];
                                for (var r = 0; r < t.length; r++) this._textures.push(t[r].texture), this._durations.push(t[r].time)
                            }
                            this.gotoAndStop(0), this.updateTexture()
                        }
                    }, {
                        key: "currentFrame",
                        get: function() {
                            var t = Math.floor(this._currentTime) % this._textures.length;
                            return t < 0 && (t += this._textures.length), t
                        }
                    }]), e
                }(s.Sprite);
            v.default = i
        }, {
            "../core": 65
        }],
        136: [function(w, j, v) {
            "use strict";

            function b(h) {
                return h && h.__esModule ? h : {
                    default: h
                }
            }

            function O(h) {
                if (h && h.__esModule) return h;
                var d = {};
                if (h != null)
                    for (var l in h) Object.prototype.hasOwnProperty.call(h, l) && (d[l] = h[l]);
                return d.default = h, d
            }

            function g(h, d) {
                if (!(h instanceof d)) throw new TypeError("Cannot call a class as a function")
            }

            function u(h, d) {
                if (!h) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !d || typeof d != "object" && typeof d != "function" ? h : d
            }

            function f(h, d) {
                if (typeof d != "function" && d !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof d);
                h.prototype = Object.create(d && d.prototype, {
                    constructor: {
                        value: h,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), d && (Object.setPrototypeOf ? Object.setPrototypeOf(h, d) : h.__proto__ = d)
            }
            v.__esModule = !0;
            var c = function() {
                    function h(d, l) {
                        for (var p = 0; p < l.length; p++) {
                            var y = l[p];
                            y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(d, y.key, y)
                        }
                    }
                    return function(d, l, p) {
                        return l && h(d.prototype, l), p && h(d, p), d
                    }
                }(),
                s = w("../core"),
                i = O(s),
                n = w("../core/math/ObservablePoint"),
                e = b(n),
                t = w("../core/utils"),
                r = w("../core/settings"),
                o = b(r),
                a = function(h) {
                    function d(l) {
                        var p = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
                        g(this, d);
                        var y = u(this, h.call(this));
                        return y._textWidth = 0, y._textHeight = 0, y._glyphs = [], y._font = {
                            tint: p.tint !== void 0 ? p.tint : 16777215,
                            align: p.align || "left",
                            name: null,
                            size: 0
                        }, y.font = p.font, y._text = l, y._maxWidth = 0, y._maxLineHeight = 0, y._anchor = new e.default(function() {
                            y.dirty = !0
                        }, y, 0, 0), y.dirty = !1, y.updateText(), y
                    }
                    return f(d, h), d.prototype.updateText = function() {
                        for (var l = d.fonts[this._font.name], p = this._font.size / l.size, y = new i.Point, x = [], T = [], S = null, E = 0, _ = 0, m = 0, M = -1, A = 0, I = 0, N = 0, P = 0; P < this.text.length; P++) {
                            var D = this.text.charCodeAt(P);
                            if (/(\s)/.test(this.text.charAt(P)) && (M = P, A = E), /(?:\r\n|\r|\n)/.test(this.text.charAt(P))) T.push(E), _ = Math.max(_, E), m++, y.x = 0, y.y += l.lineHeight, S = null;
                            else if (M !== -1 && this._maxWidth > 0 && y.x * p > this._maxWidth) i.utils.removeItems(x, M - I, P - M), P = M, M = -1, ++I, T.push(A), _ = Math.max(_, A), m++, y.x = 0, y.y += l.lineHeight, S = null;
                            else {
                                var C = l.chars[D];
                                C && (S && C.kerning[S] && (y.x += C.kerning[S]), x.push({
                                    texture: C.texture,
                                    line: m,
                                    charCode: D,
                                    position: new i.Point(y.x + C.xOffset, y.y + C.yOffset)
                                }), E = y.x + (C.texture.width + C.xOffset), y.x += C.xAdvance, N = Math.max(N, C.yOffset + C.texture.height), S = D)
                            }
                        }
                        T.push(E), _ = Math.max(_, E);
                        for (var R = [], F = 0; F <= m; F++) {
                            var B = 0;
                            this._font.align === "right" ? B = _ - T[F] : this._font.align === "center" && (B = (_ - T[F]) / 2), R.push(B)
                        }
                        for (var L = x.length, k = this.tint, U = 0; U < L; U++) {
                            var H = this._glyphs[U];
                            H ? H.texture = x[U].texture : (H = new i.Sprite(x[U].texture), this._glyphs.push(H)), H.position.x = (x[U].position.x + R[x[U].line]) * p, H.position.y = x[U].position.y * p, H.scale.x = H.scale.y = p, H.tint = k, H.parent || this.addChild(H)
                        }
                        for (var X = L; X < this._glyphs.length; ++X) this.removeChild(this._glyphs[X]);
                        if (this._textWidth = _ * p, this._textHeight = (y.y + l.lineHeight) * p, this.anchor.x !== 0 || this.anchor.y !== 0)
                            for (var W = 0; W < L; W++) this._glyphs[W].x -= this._textWidth * this.anchor.x, this._glyphs[W].y -= this._textHeight * this.anchor.y;
                        this._maxLineHeight = N * p
                    }, d.prototype.updateTransform = function() {
                        this.validate(), this.containerUpdateTransform()
                    }, d.prototype.getLocalBounds = function() {
                        return this.validate(), h.prototype.getLocalBounds.call(this)
                    }, d.prototype.validate = function() {
                        this.dirty && (this.updateText(), this.dirty = !1)
                    }, d.registerFont = function(l, p) {
                        var y = {},
                            x = l.getElementsByTagName("info")[0],
                            T = l.getElementsByTagName("common")[0],
                            S = l.getElementsByTagName("page")[0].getAttribute("file"),
                            E = (0, t.getResolutionOfUrl)(S, o.default.RESOLUTION);
                        y.font = x.getAttribute("face"), y.size = parseInt(x.getAttribute("size"), 10), y.lineHeight = parseInt(T.getAttribute("lineHeight"), 10) / E, y.chars = {};
                        for (var _ = l.getElementsByTagName("char"), m = 0; m < _.length; m++) {
                            var M = _[m],
                                A = parseInt(M.getAttribute("id"), 10),
                                I = new i.Rectangle(parseInt(M.getAttribute("x"), 10) / E + p.frame.x / E, parseInt(M.getAttribute("y"), 10) / E + p.frame.y / E, parseInt(M.getAttribute("width"), 10) / E, parseInt(M.getAttribute("height"), 10) / E);
                            y.chars[A] = {
                                xOffset: parseInt(M.getAttribute("xoffset"), 10) / E,
                                yOffset: parseInt(M.getAttribute("yoffset"), 10) / E,
                                xAdvance: parseInt(M.getAttribute("xadvance"), 10) / E,
                                kerning: {},
                                texture: new i.Texture(p.baseTexture, I)
                            }
                        }
                        for (var N = l.getElementsByTagName("kerning"), P = 0; P < N.length; P++) {
                            var D = N[P],
                                C = parseInt(D.getAttribute("first"), 10) / E,
                                R = parseInt(D.getAttribute("second"), 10) / E,
                                F = parseInt(D.getAttribute("amount"), 10) / E;
                            y.chars[R] && (y.chars[R].kerning[C] = F)
                        }
                        return d.fonts[y.font] = y, y
                    }, c(d, [{
                        key: "tint",
                        get: function() {
                            return this._font.tint
                        },
                        set: function(l) {
                            this._font.tint = typeof l == "number" && l >= 0 ? l : 16777215, this.dirty = !0
                        }
                    }, {
                        key: "align",
                        get: function() {
                            return this._font.align
                        },
                        set: function(l) {
                            this._font.align = l || "left", this.dirty = !0
                        }
                    }, {
                        key: "anchor",
                        get: function() {
                            return this._anchor
                        },
                        set: function(l) {
                            typeof l == "number" ? this._anchor.set(l) : this._anchor.copy(l)
                        }
                    }, {
                        key: "font",
                        get: function() {
                            return this._font
                        },
                        set: function(l) {
                            l && (typeof l == "string" ? (l = l.split(" "), this._font.name = l.length === 1 ? l[0] : l.slice(1).join(" "), this._font.size = l.length >= 2 ? parseInt(l[0], 10) : d.fonts[this._font.name].size) : (this._font.name = l.name, this._font.size = typeof l.size == "number" ? l.size : parseInt(l.size, 10)), this.dirty = !0)
                        }
                    }, {
                        key: "text",
                        get: function() {
                            return this._text
                        },
                        set: function(l) {
                            l = l.toString() || " ", this._text !== l && (this._text = l, this.dirty = !0)
                        }
                    }, {
                        key: "maxWidth",
                        get: function() {
                            return this._maxWidth
                        },
                        set: function(l) {
                            this._maxWidth !== l && (this._maxWidth = l, this.dirty = !0)
                        }
                    }, {
                        key: "maxLineHeight",
                        get: function() {
                            return this.validate(), this._maxLineHeight
                        }
                    }, {
                        key: "textWidth",
                        get: function() {
                            return this.validate(), this._textWidth
                        }
                    }, {
                        key: "textHeight",
                        get: function() {
                            return this.validate(), this._textHeight
                        }
                    }]), d
                }(i.Container);
            v.default = a, a.fonts = {}
        }, {
            "../core": 65,
            "../core/math/ObservablePoint": 68,
            "../core/settings": 101,
            "../core/utils": 125
        }],
        137: [function(w, j, v) {
            "use strict";

            function b(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function O(o) {
                if (o && o.__esModule) return o;
                var a = {};
                if (o != null)
                    for (var h in o) Object.prototype.hasOwnProperty.call(o, h) && (a[h] = o[h]);
                return a.default = o, a
            }

            function g(o, a) {
                if (!(o instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function u(o, a) {
                if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !a || typeof a != "object" && typeof a != "function" ? o : a
            }

            function f(o, a) {
                if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
                o.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(o, a) : o.__proto__ = a)
            }
            v.__esModule = !0;
            var c = function() {
                    function o(a, h) {
                        for (var d = 0; d < h.length; d++) {
                            var l = h[d];
                            l.enumerable = l.enumerable || !1, l.configurable = !0, "value" in l && (l.writable = !0), Object.defineProperty(a, l.key, l)
                        }
                    }
                    return function(a, h, d) {
                        return h && o(a.prototype, h), d && o(a, d), a
                    }
                }(),
                s = w("../core"),
                i = O(s),
                n = w("../core/sprites/canvas/CanvasTinter"),
                e = b(n),
                t = new i.Point,
                r = function(o) {
                    function a(h) {
                        var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 100,
                            l = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 100;
                        g(this, a);
                        var p = u(this, o.call(this, h));
                        return p.tileTransform = new i.TransformStatic, p._width = d, p._height = l, p._canvasPattern = null, p.uvTransform = h.transform || new i.TextureMatrix(h), p.pluginName = "tilingSprite", p.uvRespectAnchor = !1, p
                    }
                    return f(a, o), a.prototype._onTextureUpdate = function() {
                        this.uvTransform && (this.uvTransform.texture = this._texture), this.cachedTint = 16777215
                    }, a.prototype._renderWebGL = function(h) {
                        var d = this._texture;
                        d && d.valid && (this.tileTransform.updateLocalTransform(), this.uvTransform.update(), h.setObjectRenderer(h.plugins[this.pluginName]), h.plugins[this.pluginName].render(this))
                    }, a.prototype._renderCanvas = function(h) {
                        var d = this._texture;
                        if (d.baseTexture.hasLoaded) {
                            var l = h.context,
                                p = this.worldTransform,
                                y = h.resolution,
                                x = d.baseTexture,
                                T = x.resolution,
                                S = this.tilePosition.x / this.tileScale.x % d._frame.width * T,
                                E = this.tilePosition.y / this.tileScale.y % d._frame.height * T;
                            if (this._textureID !== this._texture._updateID || this.cachedTint !== this.tint) {
                                this._textureID = this._texture._updateID;
                                var _ = new i.CanvasRenderTarget(d._frame.width, d._frame.height, T);
                                this.tint !== 16777215 ? (this.tintedTexture = e.default.getTintedTexture(this, this.tint), _.context.drawImage(this.tintedTexture, 0, 0)) : _.context.drawImage(x.source, -d._frame.x * T, -d._frame.y * T), this.cachedTint = this.tint, this._canvasPattern = _.context.createPattern(_.canvas, "repeat")
                            }
                            l.globalAlpha = this.worldAlpha, l.setTransform(p.a * y, p.b * y, p.c * y, p.d * y, p.tx * y, p.ty * y), h.setBlendMode(this.blendMode), l.fillStyle = this._canvasPattern, l.scale(this.tileScale.x / T, this.tileScale.y / T);
                            var m = this.anchor.x * -this._width,
                                M = this.anchor.y * -this._height;
                            this.uvRespectAnchor ? (l.translate(S, E), l.fillRect(-S + m, -E + M, this._width / this.tileScale.x * T, this._height / this.tileScale.y * T)) : (l.translate(S + m, E + M), l.fillRect(-S, -E, this._width / this.tileScale.x * T, this._height / this.tileScale.y * T))
                        }
                    }, a.prototype._calculateBounds = function() {
                        var h = this._width * -this._anchor._x,
                            d = this._height * -this._anchor._y,
                            l = this._width * (1 - this._anchor._x),
                            p = this._height * (1 - this._anchor._y);
                        this._bounds.addFrame(this.transform, h, d, l, p)
                    }, a.prototype.getLocalBounds = function(h) {
                        return this.children.length === 0 ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._x), h || (this._localBoundsRect || (this._localBoundsRect = new i.Rectangle), h = this._localBoundsRect), this._bounds.getRectangle(h)) : o.prototype.getLocalBounds.call(this, h)
                    }, a.prototype.containsPoint = function(h) {
                        this.worldTransform.applyInverse(h, t);
                        var d = this._width,
                            l = this._height,
                            p = -d * this.anchor._x;
                        if (t.x >= p && t.x < p + d) {
                            var y = -l * this.anchor._y;
                            if (t.y >= y && t.y < y + l) return !0
                        }
                        return !1
                    }, a.prototype.destroy = function(h) {
                        o.prototype.destroy.call(this, h), this.tileTransform = null, this.uvTransform = null
                    }, a.from = function(h, d, l) {
                        return new a(i.Texture.from(h), d, l)
                    }, a.fromFrame = function(h, d, l) {
                        var p = i.utils.TextureCache[h];
                        if (!p) throw new Error('The frameId "' + h + '" does not exist in the texture cache ' + this);
                        return new a(p, d, l)
                    }, a.fromImage = function(h, d, l, p, y) {
                        return new a(i.Texture.fromImage(h, p, y), d, l)
                    }, c(a, [{
                        key: "clampMargin",
                        get: function() {
                            return this.uvTransform.clampMargin
                        },
                        set: function(h) {
                            this.uvTransform.clampMargin = h, this.uvTransform.update(!0)
                        }
                    }, {
                        key: "tileScale",
                        get: function() {
                            return this.tileTransform.scale
                        },
                        set: function(h) {
                            this.tileTransform.scale.copy(h)
                        }
                    }, {
                        key: "tilePosition",
                        get: function() {
                            return this.tileTransform.position
                        },
                        set: function(h) {
                            this.tileTransform.position.copy(h)
                        }
                    }, {
                        key: "width",
                        get: function() {
                            return this._width
                        },
                        set: function(h) {
                            this._width = h
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this._height
                        },
                        set: function(h) {
                            this._height = h
                        }
                    }]), a
                }(i.Sprite);
            v.default = r
        }, {
            "../core": 65,
            "../core/sprites/canvas/CanvasTinter": 104
        }],
        138: [function(w, j, v) {
            "use strict";

            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function O(a) {
                if (a && a.__esModule) return a;
                var h = {};
                if (a != null)
                    for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (h[d] = a[d]);
                return h.default = a, h
            }

            function g(a, h) {
                if (!(a instanceof h)) throw new TypeError("Cannot call a class as a function")
            }
            var u = w("../core"),
                f = O(u),
                c = w("../core/textures/Texture"),
                s = b(c),
                i = w("../core/textures/BaseTexture"),
                n = b(i),
                e = w("../core/utils"),
                t = f.DisplayObject,
                r = new f.Matrix;
            t.prototype._cacheAsBitmap = !1, t.prototype._cacheData = !1;
            var o = function a() {
                g(this, a), this.textureCacheId = null, this.originalRenderWebGL = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalHitTest = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.sprite = null
            };
            Object.defineProperties(t.prototype, {
                cacheAsBitmap: {
                    get: function() {
                        return this._cacheAsBitmap
                    },
                    set: function(a) {
                        if (this._cacheAsBitmap !== a) {
                            this._cacheAsBitmap = a;
                            var h = void 0;
                            a ? (this._cacheData || (this._cacheData = new o), h = this._cacheData, h.originalRenderWebGL = this.renderWebGL, h.originalRenderCanvas = this.renderCanvas, h.originalUpdateTransform = this.updateTransform, h.originalCalculateBounds = this._calculateBounds, h.originalGetLocalBounds = this.getLocalBounds, h.originalDestroy = this.destroy, h.originalContainsPoint = this.containsPoint, h.originalMask = this._mask, h.originalFilterArea = this.filterArea, this.renderWebGL = this._renderCachedWebGL, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (h = this._cacheData, h.sprite && this._destroyCachedDisplayObject(), this.renderWebGL = h.originalRenderWebGL, this.renderCanvas = h.originalRenderCanvas, this._calculateBounds = h.originalCalculateBounds, this.getLocalBounds = h.originalGetLocalBounds, this.destroy = h.originalDestroy, this.updateTransform = h.originalUpdateTransform, this.containsPoint = h.originalContainsPoint, this._mask = h.originalMask, this.filterArea = h.originalFilterArea)
                        }
                    }
                }
            }), t.prototype._renderCachedWebGL = function(a) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(a), this._cacheData.sprite._transformID = -1, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderWebGL(a))
            }, t.prototype._initCachedDisplayObject = function(a) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var h = this.alpha;
                    this.alpha = 1, a.currentRenderer.flush();
                    var d = this.getLocalBounds().clone();
                    if (this._filters) {
                        var l = this._filters[0].padding;
                        d.pad(l)
                    }
                    var p = a._activeRenderTarget,
                        y = a.filterManager.filterStack,
                        x = f.RenderTexture.create(0 | d.width, 0 | d.height),
                        T = "cacheAsBitmap_" + (0, e.uid)();
                    this._cacheData.textureCacheId = T, n.default.addToCache(x.baseTexture, T), s.default.addToCache(x, T);
                    var S = r;
                    S.tx = -d.x, S.ty = -d.y, this.transform.worldTransform.identity(), this.renderWebGL = this._cacheData.originalRenderWebGL, a.render(this, x, !0, S, !0), a.bindRenderTarget(p), a.filterManager.filterStack = y, this.renderWebGL = this._renderCachedWebGL, this.updateTransform = this.displayObjectUpdateTransform, this._mask = null, this.filterArea = null;
                    var E = new f.Sprite(x);
                    E.transform.worldTransform = this.transform.worldTransform, E.anchor.x = -(d.x / d.width), E.anchor.y = -(d.y / d.height), E.alpha = h, E._bounds = this._bounds, this._calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._cacheData.sprite = E, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = a._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = E.containsPoint.bind(E)
                }
            }, t.prototype._renderCachedCanvas = function(a) {
                !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(a), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite.renderCanvas(a))
            }, t.prototype._initCachedDisplayObjectCanvas = function(a) {
                if (!this._cacheData || !this._cacheData.sprite) {
                    var h = this.getLocalBounds(),
                        d = this.alpha;
                    this.alpha = 1;
                    var l = a.context,
                        p = f.RenderTexture.create(0 | h.width, 0 | h.height),
                        y = "cacheAsBitmap_" + (0, e.uid)();
                    this._cacheData.textureCacheId = y, n.default.addToCache(p.baseTexture, y), s.default.addToCache(p, y);
                    var x = r;
                    this.transform.localTransform.copy(x), x.invert(), x.tx -= h.x, x.ty -= h.y, this.renderCanvas = this._cacheData.originalRenderCanvas, a.render(this, p, !0, x, !1), a.context = l, this.renderCanvas = this._renderCachedCanvas, this._calculateBounds = this._calculateCachedBounds, this._mask = null, this.filterArea = null;
                    var T = new f.Sprite(p);
                    T.transform.worldTransform = this.transform.worldTransform, T.anchor.x = -(h.x / h.width), T.anchor.y = -(h.y / h.height), T._bounds = this._bounds, T.alpha = d, this.parent ? this.updateTransform() : (this.parent = a._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.updateTransform = this.displayObjectUpdateTransform, this._cacheData.sprite = T, this.containsPoint = T.containsPoint.bind(T)
                }
            }, t.prototype._calculateCachedBounds = function() {
                this._cacheData.sprite._calculateBounds()
            }, t.prototype._getCachedLocalBounds = function() {
                return this._cacheData.sprite.getLocalBounds()
            }, t.prototype._destroyCachedDisplayObject = function() {
                this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, n.default.removeFromCache(this._cacheData.textureCacheId), s.default.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
            }, t.prototype._cacheAsBitmapDestroy = function(a) {
                this.cacheAsBitmap = !1, this.destroy(a)
            }
        }, {
            "../core": 65,
            "../core/textures/BaseTexture": 112,
            "../core/textures/Texture": 115,
            "../core/utils": 125
        }],
        139: [function(w, j, v) {
            "use strict";

            function b(u) {
                if (u && u.__esModule) return u;
                var f = {};
                if (u != null)
                    for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (f[c] = u[c]);
                return f.default = u, f
            }
            var O = w("../core"),
                g = b(O);
            g.DisplayObject.prototype.name = null, g.Container.prototype.getChildByName = function(u) {
                for (var f = 0; f < this.children.length; f++)
                    if (this.children[f].name === u) return this.children[f];
                return null
            }
        }, {
            "../core": 65
        }],
        140: [function(w, j, v) {
            "use strict";

            function b(u) {
                if (u && u.__esModule) return u;
                var f = {};
                if (u != null)
                    for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (f[c] = u[c]);
                return f.default = u, f
            }
            var O = w("../core"),
                g = b(O);
            g.DisplayObject.prototype.getGlobalPosition = function() {
                var u = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : new g.Point,
                    f = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
                return this.parent ? this.parent.toGlobal(this.position, u, f) : (u.x = this.position.x, u.y = this.position.y), u
            }
        }, {
            "../core": 65
        }],
        141: [function(w, j, v) {
            "use strict";

            function b(c) {
                return c && c.__esModule ? c : {
                    default: c
                }
            }
            v.__esModule = !0, v.BitmapText = v.TilingSpriteRenderer = v.TilingSprite = v.AnimatedSprite = void 0;
            var O = w("./AnimatedSprite");
            Object.defineProperty(v, "AnimatedSprite", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./TilingSprite");
            Object.defineProperty(v, "TilingSprite", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            });
            var u = w("./webgl/TilingSpriteRenderer");
            Object.defineProperty(v, "TilingSpriteRenderer", {
                enumerable: !0,
                get: function() {
                    return b(u).default
                }
            });
            var f = w("./BitmapText");
            Object.defineProperty(v, "BitmapText", {
                enumerable: !0,
                get: function() {
                    return b(f).default
                }
            }), w("./cacheAsBitmap"), w("./getChildByName"), w("./getGlobalPosition")
        }, {
            "./AnimatedSprite": 135,
            "./BitmapText": 136,
            "./TilingSprite": 137,
            "./cacheAsBitmap": 138,
            "./getChildByName": 139,
            "./getGlobalPosition": 140,
            "./webgl/TilingSpriteRenderer": 142
        }],
        142: [function(w, j, v) {
            "use strict";

            function b(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            v.__esModule = !0;
            var f = w("../../core"),
                c = b(f),
                s = w("../../core/const"),
                i = (w("path"), new c.Matrix),
                n = function(e) {
                    function t(r) {
                        O(this, t);
                        var o = g(this, e.call(this, r));
                        return o.shader = null, o.simpleShader = null, o.quad = null, o
                    }
                    return u(t, e), t.prototype.onContextChange = function() {
                        var r = this.renderer.gl;
                        this.shader = new c.Shader(r, `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;

void main(void)
{
    vec2 coord = mod(vTextureCoord - uClampOffset, vec2(1.0, 1.0)) + uClampOffset;
    coord = (uMapCoord * vec3(coord, 1.0)).xy;
    coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

    vec4 sample = texture2D(uSampler, coord);
    gl_FragColor = sample * uColor;
}
`), this.simpleShader = new c.Shader(r, `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform vec4 uColor;

void main(void)
{
    vec4 sample = texture2D(uSampler, vTextureCoord);
    gl_FragColor = sample * uColor;
}
`), this.renderer.bindVao(null), this.quad = new c.Quad(r, this.renderer.state.attribState), this.quad.initVao(this.shader)
                    }, t.prototype.render = function(r) {
                        var o = this.renderer,
                            a = this.quad;
                        o.bindVao(a.vao);
                        var h = a.vertices;
                        h[0] = h[6] = r._width * -r.anchor.x, h[1] = h[3] = r._height * -r.anchor.y, h[2] = h[4] = r._width * (1 - r.anchor.x), h[5] = h[7] = r._height * (1 - r.anchor.y), r.uvRespectAnchor && (h = a.uvs, h[0] = h[6] = -r.anchor.x, h[1] = h[3] = -r.anchor.y, h[2] = h[4] = 1 - r.anchor.x, h[5] = h[7] = 1 - r.anchor.y), a.upload();
                        var d = r._texture,
                            l = d.baseTexture,
                            p = r.tileTransform.localTransform,
                            y = r.uvTransform,
                            x = l.isPowerOfTwo && d.frame.width === l.width && d.frame.height === l.height;
                        x && (l._glTextures[o.CONTEXT_UID] ? x = l.wrapMode !== s.WRAP_MODES.CLAMP : l.wrapMode === s.WRAP_MODES.CLAMP && (l.wrapMode = s.WRAP_MODES.REPEAT));
                        var T = x ? this.simpleShader : this.shader;
                        o.bindShader(T);
                        var S = d.width,
                            E = d.height,
                            _ = r._width,
                            m = r._height;
                        i.set(p.a * S / _, p.b * S / m, p.c * E / _, p.d * E / m, p.tx / _, p.ty / m), i.invert(), x ? i.prepend(y.mapCoord) : (T.uniforms.uMapCoord = y.mapCoord.toArray(!0), T.uniforms.uClampFrame = y.uClampFrame, T.uniforms.uClampOffset = y.uClampOffset), T.uniforms.uTransform = i.toArray(!0), T.uniforms.uColor = c.utils.premultiplyTintToRgba(r.tint, r.worldAlpha, T.uniforms.uColor, l.premultipliedAlpha), T.uniforms.translationMatrix = r.transform.worldTransform.toArray(!0), T.uniforms.uSampler = o.bindTexture(d), o.setBlendMode(c.utils.correctBlendMode(r.blendMode, l.premultipliedAlpha)), a.vao.draw(this.renderer.gl.TRIANGLES, 6, 0)
                    }, t
                }(c.ObjectRenderer);
            v.default = n, c.WebGLRenderer.registerPlugin("tilingSprite", n)
        }, {
            "../../core": 65,
            "../../core/const": 46,
            path: 8
        }],
        143: [function(w, j, v) {
            "use strict";

            function b(n) {
                if (n && n.__esModule) return n;
                var e = {};
                if (n != null)
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                return e.default = n, e
            }

            function O(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function g(n, e) {
                if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || typeof e != "object" && typeof e != "function" ? n : e
            }

            function u(n, e) {
                if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
            }
            v.__esModule = !0;
            var f = function() {
                    function n(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(e, t, r) {
                        return t && n(e.prototype, t), r && n(e, r), e
                    }
                }(),
                c = w("../../core"),
                s = b(c),
                i = (w("path"), function(n) {
                    function e() {
                        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1;
                        O(this, e);
                        var r = g(this, n.call(this, `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`, `varying vec2 vTextureCoord;

uniform sampler2D uSampler;
uniform float uAlpha;

void main(void)
{
   gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
}
`));
                        return r.alpha = t, r.glShaderKey = "alpha", r
                    }
                    return u(e, n), f(e, [{
                        key: "alpha",
                        get: function() {
                            return this.uniforms.uAlpha
                        },
                        set: function(t) {
                            this.uniforms.uAlpha = t
                        }
                    }]), e
                }(s.Filter));
            v.default = i
        }, {
            "../../core": 65,
            path: 8
        }],
        144: [function(w, j, v) {
            "use strict";

            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function O(a) {
                if (a && a.__esModule) return a;
                var h = {};
                if (a != null)
                    for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (h[d] = a[d]);
                return h.default = a, h
            }

            function g(a, h) {
                if (!(a instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function u(a, h) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !h || typeof h != "object" && typeof h != "function" ? a : h
            }

            function f(a, h) {
                if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
                a.prototype = Object.create(h && h.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(a, h) : a.__proto__ = h)
            }
            v.__esModule = !0;
            var c = function() {
                    function a(h, d) {
                        for (var l = 0; l < d.length; l++) {
                            var p = d[l];
                            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(h, p.key, p)
                        }
                    }
                    return function(h, d, l) {
                        return d && a(h.prototype, d), l && a(h, l), h
                    }
                }(),
                s = w("../../core"),
                i = O(s),
                n = w("./BlurXFilter"),
                e = b(n),
                t = w("./BlurYFilter"),
                r = b(t),
                o = function(a) {
                    function h(d, l, p, y) {
                        g(this, h);
                        var x = u(this, a.call(this));
                        return x.blurXFilter = new e.default(d, l, p, y), x.blurYFilter = new r.default(d, l, p, y), x.padding = 0, x.resolution = p || i.settings.RESOLUTION, x.quality = l || 4, x.blur = d || 8, x
                    }
                    return f(h, a), h.prototype.apply = function(d, l, p) {
                        var y = d.getRenderTarget(!0);
                        this.blurXFilter.apply(d, l, y, !0), this.blurYFilter.apply(d, y, p, !1), d.returnRenderTarget(y)
                    }, c(h, [{
                        key: "blur",
                        get: function() {
                            return this.blurXFilter.blur
                        },
                        set: function(d) {
                            this.blurXFilter.blur = this.blurYFilter.blur = d, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                        }
                    }, {
                        key: "quality",
                        get: function() {
                            return this.blurXFilter.quality
                        },
                        set: function(d) {
                            this.blurXFilter.quality = this.blurYFilter.quality = d
                        }
                    }, {
                        key: "blurX",
                        get: function() {
                            return this.blurXFilter.blur
                        },
                        set: function(d) {
                            this.blurXFilter.blur = d, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                        }
                    }, {
                        key: "blurY",
                        get: function() {
                            return this.blurYFilter.blur
                        },
                        set: function(d) {
                            this.blurYFilter.blur = d, this.padding = 2 * Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength))
                        }
                    }, {
                        key: "blendMode",
                        get: function() {
                            return this.blurYFilter._blendMode
                        },
                        set: function(d) {
                            this.blurYFilter._blendMode = d
                        }
                    }]), h
                }(i.Filter);
            v.default = o
        }, {
            "../../core": 65,
            "./BlurXFilter": 145,
            "./BlurYFilter": 146
        }],
        145: [function(w, j, v) {
            "use strict";

            function b(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }

            function O(d) {
                if (d && d.__esModule) return d;
                var l = {};
                if (d != null)
                    for (var p in d) Object.prototype.hasOwnProperty.call(d, p) && (l[p] = d[p]);
                return l.default = d, l
            }

            function g(d, l) {
                if (!(d instanceof l)) throw new TypeError("Cannot call a class as a function")
            }

            function u(d, l) {
                if (!d) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !l || typeof l != "object" && typeof l != "function" ? d : l
            }

            function f(d, l) {
                if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
                d.prototype = Object.create(l && l.prototype, {
                    constructor: {
                        value: d,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(d, l) : d.__proto__ = l)
            }
            v.__esModule = !0;
            var c = function() {
                    function d(l, p) {
                        for (var y = 0; y < p.length; y++) {
                            var x = p[y];
                            x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(l, x.key, x)
                        }
                    }
                    return function(l, p, y) {
                        return p && d(l.prototype, p), y && d(l, y), l
                    }
                }(),
                s = w("../../core"),
                i = O(s),
                n = w("./generateBlurVertSource"),
                e = b(n),
                t = w("./generateBlurFragSource"),
                r = b(t),
                o = w("./getMaxBlurKernelSize"),
                a = b(o),
                h = function(d) {
                    function l(p, y, x, T) {
                        g(this, l), T = T || 5;
                        var S = (0, e.default)(T, !0),
                            E = (0, r.default)(T),
                            _ = u(this, d.call(this, S, E));
                        return _.resolution = x || i.settings.RESOLUTION, _._quality = 0, _.quality = y || 4, _.strength = p || 8, _.firstRun = !0, _
                    }
                    return f(l, d), l.prototype.apply = function(p, y, x, T) {
                        if (this.firstRun) {
                            var S = p.renderer.gl,
                                E = (0, a.default)(S);
                            this.vertexSrc = (0, e.default)(E, !0), this.fragmentSrc = (0, r.default)(E), this.firstRun = !1
                        }
                        if (this.uniforms.strength = 1 / x.size.width * (x.size.width / y.size.width), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1) p.applyFilter(this, y, x, T);
                        else {
                            for (var _ = p.getRenderTarget(!0), m = y, M = _, A = 0; A < this.passes - 1; A++) {
                                p.applyFilter(this, m, M, !0);
                                var I = M;
                                M = m, m = I
                            }
                            p.applyFilter(this, m, x, T), p.returnRenderTarget(_)
                        }
                    }, c(l, [{
                        key: "blur",
                        get: function() {
                            return this.strength
                        },
                        set: function(p) {
                            this.padding = 2 * Math.abs(p), this.strength = p
                        }
                    }, {
                        key: "quality",
                        get: function() {
                            return this._quality
                        },
                        set: function(p) {
                            this._quality = p, this.passes = p
                        }
                    }]), l
                }(i.Filter);
            v.default = h
        }, {
            "../../core": 65,
            "./generateBlurFragSource": 147,
            "./generateBlurVertSource": 148,
            "./getMaxBlurKernelSize": 149
        }],
        146: [function(w, j, v) {
            "use strict";

            function b(d) {
                return d && d.__esModule ? d : {
                    default: d
                }
            }

            function O(d) {
                if (d && d.__esModule) return d;
                var l = {};
                if (d != null)
                    for (var p in d) Object.prototype.hasOwnProperty.call(d, p) && (l[p] = d[p]);
                return l.default = d, l
            }

            function g(d, l) {
                if (!(d instanceof l)) throw new TypeError("Cannot call a class as a function")
            }

            function u(d, l) {
                if (!d) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !l || typeof l != "object" && typeof l != "function" ? d : l
            }

            function f(d, l) {
                if (typeof l != "function" && l !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof l);
                d.prototype = Object.create(l && l.prototype, {
                    constructor: {
                        value: d,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), l && (Object.setPrototypeOf ? Object.setPrototypeOf(d, l) : d.__proto__ = l)
            }
            v.__esModule = !0;
            var c = function() {
                    function d(l, p) {
                        for (var y = 0; y < p.length; y++) {
                            var x = p[y];
                            x.enumerable = x.enumerable || !1, x.configurable = !0, "value" in x && (x.writable = !0), Object.defineProperty(l, x.key, x)
                        }
                    }
                    return function(l, p, y) {
                        return p && d(l.prototype, p), y && d(l, y), l
                    }
                }(),
                s = w("../../core"),
                i = O(s),
                n = w("./generateBlurVertSource"),
                e = b(n),
                t = w("./generateBlurFragSource"),
                r = b(t),
                o = w("./getMaxBlurKernelSize"),
                a = b(o),
                h = function(d) {
                    function l(p, y, x, T) {
                        g(this, l), T = T || 5;
                        var S = (0, e.default)(T, !1),
                            E = (0, r.default)(T),
                            _ = u(this, d.call(this, S, E));
                        return _.resolution = x || i.settings.RESOLUTION, _._quality = 0, _.quality = y || 4, _.strength = p || 8, _.firstRun = !0, _
                    }
                    return f(l, d), l.prototype.apply = function(p, y, x, T) {
                        if (this.firstRun) {
                            var S = p.renderer.gl,
                                E = (0, a.default)(S);
                            this.vertexSrc = (0, e.default)(E, !1), this.fragmentSrc = (0, r.default)(E), this.firstRun = !1
                        }
                        if (this.uniforms.strength = 1 / x.size.height * (x.size.height / y.size.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1) p.applyFilter(this, y, x, T);
                        else {
                            for (var _ = p.getRenderTarget(!0), m = y, M = _, A = 0; A < this.passes - 1; A++) {
                                p.applyFilter(this, m, M, !0);
                                var I = M;
                                M = m, m = I
                            }
                            p.applyFilter(this, m, x, T), p.returnRenderTarget(_)
                        }
                    }, c(l, [{
                        key: "blur",
                        get: function() {
                            return this.strength
                        },
                        set: function(p) {
                            this.padding = 2 * Math.abs(p), this.strength = p
                        }
                    }, {
                        key: "quality",
                        get: function() {
                            return this._quality
                        },
                        set: function(p) {
                            this._quality = p, this.passes = p
                        }
                    }]), l
                }(i.Filter);
            v.default = h
        }, {
            "../../core": 65,
            "./generateBlurFragSource": 147,
            "./generateBlurVertSource": 148,
            "./getMaxBlurKernelSize": 149
        }],
        147: [function(w, j, v) {
            "use strict";

            function b(u) {
                for (var f = O[u], c = f.length, s = g, i = "", n = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;", e = void 0, t = 0; t < u; t++) {
                    var r = n.replace("%index%", t);
                    e = t, t >= c && (e = u - t - 1), r = r.replace("%value%", f[e]), i += r, i += `
`
                }
                return s = s.replace("%blur%", i), s = s.replace("%size%", u)
            }
            v.__esModule = !0, v.default = b;
            var O = {
                    5: [.153388, .221461, .250301],
                    7: [.071303, .131514, .189879, .214607],
                    9: [.028532, .067234, .124009, .179044, .20236],
                    11: [.0093, .028002, .065984, .121703, .175713, .198596],
                    13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
                    15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
                },
                g = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join(`
`)
        }, {}],
        148: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                var f = Math.ceil(g / 2),
                    c = O,
                    s = "",
                    i = void 0;
                i = u ? "vBlurTexCoords[%index%] = aTextureCoord + vec2(%sampleIndex% * strength, 0.0);" : "vBlurTexCoords[%index%] = aTextureCoord + vec2(0.0, %sampleIndex% * strength);";
                for (var n = 0; n < g; n++) {
                    var e = i.replace("%index%", n);
                    e = e.replace("%sampleIndex%", n - (f - 1) + ".0"), s += e, s += `
`
                }
                return c = c.replace("%blur%", s), c = c.replace("%size%", g)
            }
            v.__esModule = !0, v.default = b;
            var O = ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "uniform float strength;", "uniform mat3 projectionMatrix;", "varying vec2 vBlurTexCoords[%size%];", "void main(void)", "{", "gl_Position = vec4((projectionMatrix * vec3((aVertexPosition), 1.0)).xy, 0.0, 1.0);", "%blur%", "}"].join(`
`)
        }, {}],
        149: [function(w, j, v) {
            "use strict";

            function b(O) {
                for (var g = O.getParameter(O.MAX_VARYING_VECTORS), u = 15; u > g;) u -= 2;
                return u
            }
            v.__esModule = !0, v.default = b
        }, {}],
        150: [function(w, j, v) {
            "use strict";

            function b(n) {
                if (n && n.__esModule) return n;
                var e = {};
                if (n != null)
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                return e.default = n, e
            }

            function O(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function g(n, e) {
                if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || typeof e != "object" && typeof e != "function" ? n : e
            }

            function u(n, e) {
                if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
            }
            v.__esModule = !0;
            var f = function() {
                    function n(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(e, t, r) {
                        return t && n(e.prototype, t), r && n(e, r), e
                    }
                }(),
                c = w("../../core"),
                s = b(c),
                i = (w("path"), function(n) {
                    function e() {
                        O(this, e);
                        var t = g(this, n.call(this, `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`, `varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform float m[20];
uniform float uAlpha;

void main(void)
{
    vec4 c = texture2D(uSampler, vTextureCoord);

    if (uAlpha == 0.0) {
        gl_FragColor = c;
        return;
    }

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (c.a > 0.0) {
      c.rgb /= c.a;
    }

    vec4 result;

    result.r = (m[0] * c.r);
        result.r += (m[1] * c.g);
        result.r += (m[2] * c.b);
        result.r += (m[3] * c.a);
        result.r += m[4];

    result.g = (m[5] * c.r);
        result.g += (m[6] * c.g);
        result.g += (m[7] * c.b);
        result.g += (m[8] * c.a);
        result.g += m[9];

    result.b = (m[10] * c.r);
       result.b += (m[11] * c.g);
       result.b += (m[12] * c.b);
       result.b += (m[13] * c.a);
       result.b += m[14];

    result.a = (m[15] * c.r);
       result.a += (m[16] * c.g);
       result.a += (m[17] * c.b);
       result.a += (m[18] * c.a);
       result.a += m[19];

    vec3 rgb = mix(c.rgb, result.rgb, uAlpha);

    // Premultiply alpha again.
    rgb *= result.a;

    gl_FragColor = vec4(rgb, result.a);
}
`));
                        return t.uniforms.m = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0], t.alpha = 1, t
                    }
                    return u(e, n), e.prototype._loadMatrix = function(t) {
                        var r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
                            o = t;
                        r && (this._multiply(o, this.uniforms.m, t), o = this._colorMatrix(o)), this.uniforms.m = o
                    }, e.prototype._multiply = function(t, r, o) {
                        return t[0] = r[0] * o[0] + r[1] * o[5] + r[2] * o[10] + r[3] * o[15], t[1] = r[0] * o[1] + r[1] * o[6] + r[2] * o[11] + r[3] * o[16], t[2] = r[0] * o[2] + r[1] * o[7] + r[2] * o[12] + r[3] * o[17], t[3] = r[0] * o[3] + r[1] * o[8] + r[2] * o[13] + r[3] * o[18], t[4] = r[0] * o[4] + r[1] * o[9] + r[2] * o[14] + r[3] * o[19] + r[4], t[5] = r[5] * o[0] + r[6] * o[5] + r[7] * o[10] + r[8] * o[15], t[6] = r[5] * o[1] + r[6] * o[6] + r[7] * o[11] + r[8] * o[16], t[7] = r[5] * o[2] + r[6] * o[7] + r[7] * o[12] + r[8] * o[17], t[8] = r[5] * o[3] + r[6] * o[8] + r[7] * o[13] + r[8] * o[18], t[9] = r[5] * o[4] + r[6] * o[9] + r[7] * o[14] + r[8] * o[19] + r[9], t[10] = r[10] * o[0] + r[11] * o[5] + r[12] * o[10] + r[13] * o[15], t[11] = r[10] * o[1] + r[11] * o[6] + r[12] * o[11] + r[13] * o[16], t[12] = r[10] * o[2] + r[11] * o[7] + r[12] * o[12] + r[13] * o[17], t[13] = r[10] * o[3] + r[11] * o[8] + r[12] * o[13] + r[13] * o[18], t[14] = r[10] * o[4] + r[11] * o[9] + r[12] * o[14] + r[13] * o[19] + r[14], t[15] = r[15] * o[0] + r[16] * o[5] + r[17] * o[10] + r[18] * o[15], t[16] = r[15] * o[1] + r[16] * o[6] + r[17] * o[11] + r[18] * o[16], t[17] = r[15] * o[2] + r[16] * o[7] + r[17] * o[12] + r[18] * o[17], t[18] = r[15] * o[3] + r[16] * o[8] + r[17] * o[13] + r[18] * o[18], t[19] = r[15] * o[4] + r[16] * o[9] + r[17] * o[14] + r[18] * o[19] + r[19], t
                    }, e.prototype._colorMatrix = function(t) {
                        var r = new Float32Array(t);
                        return r[4] /= 255, r[9] /= 255, r[14] /= 255, r[19] /= 255, r
                    }, e.prototype.brightness = function(t, r) {
                        var o = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(o, r)
                    }, e.prototype.greyscale = function(t, r) {
                        var o = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(o, r)
                    }, e.prototype.blackAndWhite = function(t) {
                        var r = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.hue = function(t, r) {
                        t = (t || 0) / 180 * Math.PI;
                        var o = Math.cos(t),
                            a = Math.sin(t),
                            h = Math.sqrt,
                            d = 1 / 3,
                            l = h(d),
                            p = o + (1 - o) * d,
                            y = d * (1 - o) - l * a,
                            x = d * (1 - o) + l * a,
                            T = d * (1 - o) + l * a,
                            S = o + d * (1 - o),
                            E = d * (1 - o) - l * a,
                            _ = d * (1 - o) - l * a,
                            m = d * (1 - o) + l * a,
                            M = o + d * (1 - o),
                            A = [p, y, x, 0, 0, T, S, E, 0, 0, _, m, M, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(A, r)
                    }, e.prototype.contrast = function(t, r) {
                        var o = (t || 0) + 1,
                            a = -.5 * (o - 1),
                            h = [o, 0, 0, 0, a, 0, o, 0, 0, a, 0, 0, o, 0, a, 0, 0, 0, 1, 0];
                        this._loadMatrix(h, r)
                    }, e.prototype.saturate = function() {
                        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
                            r = arguments[1],
                            o = 2 * t / 3 + 1,
                            a = (o - 1) * -.5,
                            h = [o, a, a, 0, 0, a, o, a, 0, 0, a, a, o, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(h, r)
                    }, e.prototype.desaturate = function() {
                        this.saturate(-1)
                    }, e.prototype.negative = function(t) {
                        var r = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.sepia = function(t) {
                        var r = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.technicolor = function(t) {
                        var r = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.polaroid = function(t) {
                        var r = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.toBGR = function(t) {
                        var r = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.kodachrome = function(t) {
                        var r = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.browni = function(t) {
                        var r = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.vintage = function(t) {
                        var r = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.colorTone = function(t, r, o, a, h) {
                        t = t || .2, r = r || .15, o = o || 16770432, a = a || 3375104;
                        var d = (o >> 16 & 255) / 255,
                            l = (o >> 8 & 255) / 255,
                            p = (255 & o) / 255,
                            y = (a >> 16 & 255) / 255,
                            x = (a >> 8 & 255) / 255,
                            T = (255 & a) / 255,
                            S = [.3, .59, .11, 0, 0, d, l, p, t, 0, y, x, T, r, 0, d - y, l - x, p - T, 0, 0];
                        this._loadMatrix(S, h)
                    }, e.prototype.night = function(t, r) {
                        t = t || .1;
                        var o = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, 2 * t, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(o, r)
                    }, e.prototype.predator = function(t, r) {
                        var o = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
                        this._loadMatrix(o, r)
                    }, e.prototype.lsd = function(t) {
                        var r = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(r, t)
                    }, e.prototype.reset = function() {
                        var t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
                        this._loadMatrix(t, !1)
                    }, f(e, [{
                        key: "matrix",
                        get: function() {
                            return this.uniforms.m
                        },
                        set: function(t) {
                            this.uniforms.m = t
                        }
                    }, {
                        key: "alpha",
                        get: function() {
                            return this.uniforms.uAlpha
                        },
                        set: function(t) {
                            this.uniforms.uAlpha = t
                        }
                    }]), e
                }(s.Filter));
            v.default = i, i.prototype.grayscale = i.prototype.greyscale
        }, {
            "../../core": 65,
            path: 8
        }],
        151: [function(w, j, v) {
            "use strict";

            function b(n) {
                if (n && n.__esModule) return n;
                var e = {};
                if (n != null)
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                return e.default = n, e
            }

            function O(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function g(n, e) {
                if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || typeof e != "object" && typeof e != "function" ? n : e
            }

            function u(n, e) {
                if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
            }
            v.__esModule = !0;
            var f = function() {
                    function n(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(e, t, r) {
                        return t && n(e.prototype, t), r && n(e, r), e
                    }
                }(),
                c = w("../../core"),
                s = b(c),
                i = (w("path"), function(n) {
                    function e(t, r) {
                        O(this, e);
                        var o = new s.Matrix;
                        t.renderable = !1;
                        var a = g(this, n.call(this, `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 filterMatrix;

varying vec2 vTextureCoord;
varying vec2 vFilterCoord;

void main(void)
{
   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
   vFilterCoord = ( filterMatrix * vec3( aTextureCoord, 1.0)  ).xy;
   vTextureCoord = aTextureCoord;
}`, `varying vec2 vFilterCoord;
varying vec2 vTextureCoord;

uniform vec2 scale;

uniform sampler2D uSampler;
uniform sampler2D mapSampler;

uniform vec4 filterArea;
uniform vec4 filterClamp;

void main(void)
{
  vec4 map =  texture2D(mapSampler, vFilterCoord);

  map -= 0.5;
  map.xy *= scale / filterArea.xy;

  gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), filterClamp.xy, filterClamp.zw));
}
`));
                        return a.maskSprite = t, a.maskMatrix = o, a.uniforms.mapSampler = t._texture, a.uniforms.filterMatrix = o, a.uniforms.scale = {
                            x: 1,
                            y: 1
                        }, r != null || (r = 20), a.scale = new s.Point(r, r), a
                    }
                    return u(e, n), e.prototype.apply = function(t, r, o) {
                        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y, t.applyFilter(this, r, o)
                    }, f(e, [{
                        key: "map",
                        get: function() {
                            return this.uniforms.mapSampler
                        },
                        set: function(t) {
                            this.uniforms.mapSampler = t
                        }
                    }]), e
                }(s.Filter));
            v.default = i
        }, {
            "../../core": 65,
            path: 8
        }],
        152: [function(w, j, v) {
            "use strict";

            function b(i) {
                if (i && i.__esModule) return i;
                var n = {};
                if (i != null)
                    for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e]);
                return n.default = i, n
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(i, n) {
                if (!i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || typeof n != "object" && typeof n != "function" ? i : n
            }

            function u(i, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                i.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(i, n) : i.__proto__ = n)
            }
            v.__esModule = !0;
            var f = w("../../core"),
                c = b(f),
                s = (w("path"), function(i) {
                    function n() {
                        return O(this, n), g(this, i.call(this, `
attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

uniform vec4 filterArea;

varying vec2 vTextureCoord;

vec2 mapCoord( vec2 coord )
{
    coord *= filterArea.xy;
    coord += filterArea.zw;

    return coord;
}

vec2 unmapCoord( vec2 coord )
{
    coord -= filterArea.zw;
    coord /= filterArea.xy;

    return coord;
}

void texcoords(vec2 fragCoord, vec2 resolution,
               out vec2 v_rgbNW, out vec2 v_rgbNE,
               out vec2 v_rgbSW, out vec2 v_rgbSE,
               out vec2 v_rgbM) {
    vec2 inverseVP = 1.0 / resolution.xy;
    v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
    v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
    v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
    v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
    v_rgbM = vec2(fragCoord * inverseVP);
}

void main(void) {

   gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

   vTextureCoord = aTextureCoord;

   vec2 fragCoord = vTextureCoord * filterArea.xy;

   texcoords(fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
}`, `varying vec2 v_rgbNW;
varying vec2 v_rgbNE;
varying vec2 v_rgbSW;
varying vec2 v_rgbSE;
varying vec2 v_rgbM;

varying vec2 vTextureCoord;
uniform sampler2D uSampler;
uniform vec4 filterArea;

/**
 Basic FXAA implementation based on the code on geeks3d.com with the
 modification that the texture2DLod stuff was removed since it's
 unsupported by WebGL.
 
 --
 
 From:
 https://github.com/mitsuhiko/webgl-meincraft
 
 Copyright (c) 2011 by Armin Ronacher.
 
 Some rights reserved.
 
 Redistribution and use in source and binary forms, with or without
 modification, are permitted provided that the following conditions are
 met:
 
 * Redistributions of source code must retain the above copyright
 notice, this list of conditions and the following disclaimer.
 
 * Redistributions in binary form must reproduce the above
 copyright notice, this list of conditions and the following
 disclaimer in the documentation and/or other materials provided
 with the distribution.
 
 * The names of the contributors may not be used to endorse or
 promote products derived from this software without specific
 prior written permission.
 
 THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
 "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
 LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
 A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
 OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
 SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
 LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
 DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
 THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */

#ifndef FXAA_REDUCE_MIN
#define FXAA_REDUCE_MIN   (1.0/ 128.0)
#endif
#ifndef FXAA_REDUCE_MUL
#define FXAA_REDUCE_MUL   (1.0 / 8.0)
#endif
#ifndef FXAA_SPAN_MAX
#define FXAA_SPAN_MAX     8.0
#endif

//optimized version for mobile, where dependent
//texture reads can be a bottleneck
vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 resolution,
          vec2 v_rgbNW, vec2 v_rgbNE,
          vec2 v_rgbSW, vec2 v_rgbSE,
          vec2 v_rgbM) {
    vec4 color;
    mediump vec2 inverseVP = vec2(1.0 / resolution.x, 1.0 / resolution.y);
    vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
    vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
    vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
    vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
    vec4 texColor = texture2D(tex, v_rgbM);
    vec3 rgbM  = texColor.xyz;
    vec3 luma = vec3(0.299, 0.587, 0.114);
    float lumaNW = dot(rgbNW, luma);
    float lumaNE = dot(rgbNE, luma);
    float lumaSW = dot(rgbSW, luma);
    float lumaSE = dot(rgbSE, luma);
    float lumaM  = dot(rgbM,  luma);
    float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
    float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));
    
    mediump vec2 dir;
    dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
    dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));
    
    float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                          (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);
    
    float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
    dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
              max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                  dir * rcpDirMin)) * inverseVP;
    
    vec3 rgbA = 0.5 * (
                       texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                       texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
    vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                     texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                     texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);
    
    float lumaB = dot(rgbB, luma);
    if ((lumaB < lumaMin) || (lumaB > lumaMax))
        color = vec4(rgbA, texColor.a);
    else
        color = vec4(rgbB, texColor.a);
    return color;
}

void main() {

      vec2 fragCoord = vTextureCoord * filterArea.xy;

      vec4 color;

    color = fxaa(uSampler, fragCoord, filterArea.xy, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);

      gl_FragColor = color;
}
`))
                    }
                    return u(n, i), n
                }(c.Filter));
            v.default = s
        }, {
            "../../core": 65,
            path: 8
        }],
        153: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            v.__esModule = !0;
            var O = w("./fxaa/FXAAFilter");
            Object.defineProperty(v, "FXAAFilter", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./noise/NoiseFilter");
            Object.defineProperty(v, "NoiseFilter", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            });
            var u = w("./displacement/DisplacementFilter");
            Object.defineProperty(v, "DisplacementFilter", {
                enumerable: !0,
                get: function() {
                    return b(u).default
                }
            });
            var f = w("./blur/BlurFilter");
            Object.defineProperty(v, "BlurFilter", {
                enumerable: !0,
                get: function() {
                    return b(f).default
                }
            });
            var c = w("./blur/BlurXFilter");
            Object.defineProperty(v, "BlurXFilter", {
                enumerable: !0,
                get: function() {
                    return b(c).default
                }
            });
            var s = w("./blur/BlurYFilter");
            Object.defineProperty(v, "BlurYFilter", {
                enumerable: !0,
                get: function() {
                    return b(s).default
                }
            });
            var i = w("./colormatrix/ColorMatrixFilter");
            Object.defineProperty(v, "ColorMatrixFilter", {
                enumerable: !0,
                get: function() {
                    return b(i).default
                }
            });
            var n = w("./alpha/AlphaFilter");
            Object.defineProperty(v, "AlphaFilter", {
                enumerable: !0,
                get: function() {
                    return b(n).default
                }
            })
        }, {
            "./alpha/AlphaFilter": 143,
            "./blur/BlurFilter": 144,
            "./blur/BlurXFilter": 145,
            "./blur/BlurYFilter": 146,
            "./colormatrix/ColorMatrixFilter": 150,
            "./displacement/DisplacementFilter": 151,
            "./fxaa/FXAAFilter": 152,
            "./noise/NoiseFilter": 154
        }],
        154: [function(w, j, v) {
            "use strict";

            function b(n) {
                if (n && n.__esModule) return n;
                var e = {};
                if (n != null)
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                return e.default = n, e
            }

            function O(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }

            function g(n, e) {
                if (!n) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !e || typeof e != "object" && typeof e != "function" ? n : e
            }

            function u(n, e) {
                if (typeof e != "function" && e !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
                n.prototype = Object.create(e && e.prototype, {
                    constructor: {
                        value: n,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(n, e) : n.__proto__ = e)
            }
            v.__esModule = !0;
            var f = function() {
                    function n(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(e, t, r) {
                        return t && n(e.prototype, t), r && n(e, r), e
                    }
                }(),
                c = w("../../core"),
                s = b(c),
                i = (w("path"), function(n) {
                    function e() {
                        var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : .5,
                            r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Math.random();
                        O(this, e);
                        var o = g(this, n.call(this, `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
    vTextureCoord = aTextureCoord;
}`, `precision highp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uSampler;

float rand(vec2 co)
{
    return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
    vec4 color = texture2D(uSampler, vTextureCoord);
    float randomValue = rand(gl_FragCoord.xy * uSeed);
    float diff = (randomValue - 0.5) * uNoise;

    // Un-premultiply alpha before applying the color matrix. See issue #3539.
    if (color.a > 0.0) {
        color.rgb /= color.a;
    }

    color.r += diff;
    color.g += diff;
    color.b += diff;

    // Premultiply alpha again.
    color.rgb *= color.a;

    gl_FragColor = color;
}
`));
                        return o.noise = t, o.seed = r, o
                    }
                    return u(e, n), f(e, [{
                        key: "noise",
                        get: function() {
                            return this.uniforms.uNoise
                        },
                        set: function(t) {
                            this.uniforms.uNoise = t
                        }
                    }, {
                        key: "seed",
                        get: function() {
                            return this.uniforms.uSeed
                        },
                        set: function(t) {
                            this.uniforms.uSeed = t
                        }
                    }]), e
                }(s.Filter));
            v.default = i
        }, {
            "../../core": 65,
            path: 8
        }],
        155: [function(w, j, v) {
            "use strict";

            function b(s) {
                if (s && s.__esModule) return s;
                var i = {};
                if (s != null)
                    for (var n in s) Object.prototype.hasOwnProperty.call(s, n) && (i[n] = s[n]);
                return i.default = s, i
            }

            function O(s, i) {
                if (!(s instanceof i)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = function() {
                    function s(i, n) {
                        for (var e = 0; e < n.length; e++) {
                            var t = n[e];
                            t.enumerable = t.enumerable || !1, t.configurable = !0, "value" in t && (t.writable = !0), Object.defineProperty(i, t.key, t)
                        }
                    }
                    return function(i, n, e) {
                        return n && s(i.prototype, n), e && s(i, e), i
                    }
                }(),
                u = w("../core"),
                f = b(u),
                c = function() {
                    function s() {
                        O(this, s), this.global = new f.Point, this.target = null, this.originalEvent = null, this.identifier = null, this.isPrimary = !1, this.button = 0, this.buttons = 0, this.width = 0, this.height = 0, this.tiltX = 0, this.tiltY = 0, this.pointerType = null, this.pressure = 0, this.rotationAngle = 0, this.twist = 0, this.tangentialPressure = 0
                    }
                    return s.prototype.getLocalPosition = function(i, n, e) {
                        return i.worldTransform.applyInverse(e || this.global, n)
                    }, s.prototype.copyEvent = function(i) {
                        i.isPrimary && (this.isPrimary = !0), this.button = i.button, this.buttons = Number.isInteger(i.buttons) ? i.buttons : i.which, this.width = i.width, this.height = i.height, this.tiltX = i.tiltX, this.tiltY = i.tiltY, this.pointerType = i.pointerType, this.pressure = i.pressure, this.rotationAngle = i.rotationAngle, this.twist = i.twist || 0, this.tangentialPressure = i.tangentialPressure || 0
                    }, s.prototype.reset = function() {
                        this.isPrimary = !1
                    }, g(s, [{
                        key: "pointerId",
                        get: function() {
                            return this.identifier
                        }
                    }]), s
                }();
            v.default = c
        }, {
            "../core": 65
        }],
        156: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                if (!(g instanceof u)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function g() {
                    b(this, g), this.stopped = !1, this.target = null, this.currentTarget = null, this.type = null, this.data = null
                }
                return g.prototype.stopPropagation = function() {
                    this.stopped = !0
                }, g.prototype.stopImmediatePropagation = function() {
                    this.stopImmediate = !0, this.stopped = !0
                }, g.prototype.reset = function() {
                    this.stopped = !1, this.stopImmediate = !1, this.currentTarget = null, this.target = null, this.captureComplete = !1
                }, g
            }();
            v.default = O
        }, {}],
        157: [function(w, j, v) {
            "use strict";

            function b(S) {
                return S && S.__esModule ? S : {
                    default: S
                }
            }

            function O(S) {
                if (S && S.__esModule) return S;
                var E = {};
                if (S != null)
                    for (var _ in S) Object.prototype.hasOwnProperty.call(S, _) && (E[_] = S[_]);
                return E.default = S, E
            }

            function g(S, E) {
                if (!(S instanceof E)) throw new TypeError("Cannot call a class as a function")
            }

            function u(S, E) {
                if (!S) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !E || typeof E != "object" && typeof E != "function" ? S : E
            }

            function f(S, E) {
                if (typeof E != "function" && E !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof E);
                S.prototype = Object.create(E && E.prototype, {
                    constructor: {
                        value: S,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), E && (Object.setPrototypeOf ? Object.setPrototypeOf(S, E) : S.__proto__ = E)
            }
            v.__esModule = !0;
            var c = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(S) {
                    return typeof S
                } : function(S) {
                    return S && typeof Symbol == "function" && S.constructor === Symbol && S !== Symbol.prototype ? "symbol" : typeof S
                },
                s = w("../core"),
                i = O(s),
                n = w("./InteractionData"),
                e = b(n),
                t = w("./InteractionEvent"),
                r = b(t),
                o = w("./InteractionTrackingData"),
                a = b(o),
                h = w("eventemitter3"),
                d = b(h),
                l = w("./interactiveTarget"),
                p = b(l);
            i.utils.mixins.delayMixin(i.DisplayObject.prototype, p.default);
            var y = 1,
                x = {
                    target: null,
                    data: {
                        global: null
                    }
                },
                T = function(S) {
                    function E(_, m) {
                        g(this, E);
                        var M = u(this, S.call(this));
                        return m = m || {}, Object.prototype.hasOwnProperty.call(m, "autoPreventDefault") || (m.autoPreventDefault = _.options.autoPreventDefault), M.renderer = _, M.autoPreventDefault = m.autoPreventDefault === void 0 || m.autoPreventDefault, M.interactionFrequency = m.interactionFrequency || 10, M.mouse = new e.default, M.mouse.identifier = y, M.mouse.global.set(-999999), M.activeInteractionData = {}, M.activeInteractionData[y] = M.mouse, M.interactionDataPool = [], M.eventData = new r.default, M.interactionDOMElement = null, M.moveWhenInside = !1, M.eventsAdded = !1, M.mouseOverRenderer = !1, M.supportsTouchEvents = "ontouchstart" in window, M.supportsPointerEvents = !!window.PointerEvent, M.onPointerUp = M.onPointerUp.bind(M), M.processPointerUp = M.processPointerUp.bind(M), M.onPointerCancel = M.onPointerCancel.bind(M), M.processPointerCancel = M.processPointerCancel.bind(M), M.onPointerDown = M.onPointerDown.bind(M), M.processPointerDown = M.processPointerDown.bind(M), M.onPointerMove = M.onPointerMove.bind(M), M.processPointerMove = M.processPointerMove.bind(M), M.onPointerOut = M.onPointerOut.bind(M), M.processPointerOverOut = M.processPointerOverOut.bind(M), M.onPointerOver = M.onPointerOver.bind(M), M.cursorStyles = {
                            default: "inherit",
                            pointer: "pointer"
                        }, M.currentCursorMode = null, M.cursor = null, M._tempPoint = new i.Point, M.resolution = 1, M.setTargetElement(M.renderer.view, M.renderer.resolution), M
                    }
                    return f(E, S), E.prototype.hitTest = function(_, m) {
                        return x.target = null, x.data.global = _, m || (m = this.renderer._lastObjectRendered), this.processInteractive(x, m, null, !0), x.target
                    }, E.prototype.setTargetElement = function(_) {
                        var m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
                        this.removeEvents(), this.interactionDOMElement = _, this.resolution = m, this.addEvents()
                    }, E.prototype.addEvents = function() {
                        this.interactionDOMElement && (i.ticker.shared.add(this.update, this, i.UPDATE_PRIORITY.INTERACTION), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "none", this.interactionDOMElement.style["-ms-touch-action"] = "none") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = "none"), this.supportsPointerEvents ? (window.document.addEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("pointerover", this.onPointerOver, !0), window.addEventListener("pointercancel", this.onPointerCancel, !0), window.addEventListener("pointerup", this.onPointerUp, !0)) : (window.document.addEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.addEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.addEventListener("mouseover", this.onPointerOver, !0), window.addEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.addEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.addEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.addEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.addEventListener("touchmove", this.onPointerMove, !0)), this.eventsAdded = !0)
                    }, E.prototype.removeEvents = function() {
                        this.interactionDOMElement && (i.ticker.shared.remove(this.update, this), window.navigator.msPointerEnabled ? (this.interactionDOMElement.style["-ms-content-zooming"] = "", this.interactionDOMElement.style["-ms-touch-action"] = "") : this.supportsPointerEvents && (this.interactionDOMElement.style["touch-action"] = ""), this.supportsPointerEvents ? (window.document.removeEventListener("pointermove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("pointerleave", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("pointerover", this.onPointerOver, !0), window.removeEventListener("pointercancel", this.onPointerCancel, !0), window.removeEventListener("pointerup", this.onPointerUp, !0)) : (window.document.removeEventListener("mousemove", this.onPointerMove, !0), this.interactionDOMElement.removeEventListener("mousedown", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("mouseout", this.onPointerOut, !0), this.interactionDOMElement.removeEventListener("mouseover", this.onPointerOver, !0), window.removeEventListener("mouseup", this.onPointerUp, !0)), this.supportsTouchEvents && (this.interactionDOMElement.removeEventListener("touchstart", this.onPointerDown, !0), this.interactionDOMElement.removeEventListener("touchcancel", this.onPointerCancel, !0), this.interactionDOMElement.removeEventListener("touchend", this.onPointerUp, !0), this.interactionDOMElement.removeEventListener("touchmove", this.onPointerMove, !0)), this.interactionDOMElement = null, this.eventsAdded = !1)
                    }, E.prototype.update = function(_) {
                        if (this._deltaTime += _, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.interactionDOMElement)) {
                            if (this.didMove) return void(this.didMove = !1);
                            this.cursor = null;
                            for (var m in this.activeInteractionData)
                                if (this.activeInteractionData.hasOwnProperty(m)) {
                                    var M = this.activeInteractionData[m];
                                    if (M.originalEvent && M.pointerType !== "touch") {
                                        var A = this.configureInteractionEventForDOMEvent(this.eventData, M.originalEvent, M);
                                        this.processInteractive(A, this.renderer._lastObjectRendered, this.processPointerOverOut, !0)
                                    }
                                }
                            this.setCursorMode(this.cursor)
                        }
                    }, E.prototype.setCursorMode = function(_) {
                        if (_ = _ || "default", this.currentCursorMode !== _) {
                            this.currentCursorMode = _;
                            var m = this.cursorStyles[_];
                            if (m) switch (typeof m == "undefined" ? "undefined" : c(m)) {
                                case "string":
                                    this.interactionDOMElement.style.cursor = m;
                                    break;
                                case "function":
                                    m(_);
                                    break;
                                case "object":
                                    Object.assign(this.interactionDOMElement.style, m)
                            } else typeof _ != "string" || Object.prototype.hasOwnProperty.call(this.cursorStyles, _) || (this.interactionDOMElement.style.cursor = _)
                        }
                    }, E.prototype.dispatchEvent = function(_, m, M) {
                        M.stopped || (M.currentTarget = _, M.type = m, _.emit(m, M), _[m] && _[m](M))
                    }, E.prototype.mapPositionToPoint = function(_, m, M) {
                        var A = void 0;
                        A = this.interactionDOMElement.parentElement ? this.interactionDOMElement.getBoundingClientRect() : {
                            x: 0,
                            y: 0,
                            width: 0,
                            height: 0
                        };
                        var I = navigator.isCocoonJS ? this.resolution : 1 / this.resolution;
                        _.x = (m - A.left) * (this.interactionDOMElement.width / A.width) * I, _.y = (M - A.top) * (this.interactionDOMElement.height / A.height) * I
                    }, E.prototype.processInteractive = function(_, m, M, A, I, N) {
                        if (!m || !m.visible) return !1;
                        var P = _.data.global;
                        I = m.interactive || I;
                        var D = !1,
                            C = I,
                            R = !0;
                        if (m.hitArea ? (A && (m.worldTransform.applyInverse(P, this._tempPoint), m.hitArea.contains(this._tempPoint.x, this._tempPoint.y) ? D = !0 : (A = !1, R = !1)), C = !1) : m._mask && A && (m._mask.containsPoint(P) || (A = !1, R = !1)), R && m.interactiveChildren && m.children)
                            for (var F = m.children, B = F.length - 1; B >= 0; B--) {
                                var L = F[B],
                                    k = this.processInteractive(_, L, M, A, C, N);
                                if (k) {
                                    if (!L.parent) continue;
                                    C = !1, k && (_.target && (A = !1), D = !0)
                                }
                            }
                        return I && (A && !_.target && !m.hitArea && m.containsPoint && m.containsPoint(P) && (D = !0), m.interactive && (D && !_.target && (_.target = m), M && M(_, m, !!D))), D
                    }, E.prototype.onPointerDown = function(_) {
                        if (!(this.supportsTouchEvents && _.pointerType === "touch" || this.supportsTouchEvents && _.pointerType === "pen")) {
                            var m = this.normalizeToPointerData(_);
                            this.autoPreventDefault && m[0].isNormalized && _.preventDefault();
                            for (var M = m.length, A = 0; A < M; A++) {
                                var I = m[A],
                                    N = this.getInteractionDataForPointerId(I),
                                    P = this.configureInteractionEventForDOMEvent(this.eventData, I, N);
                                P.data.originalEvent = _;
                                var D = I.button === 2;
                                D || this.processInteractive(P, this.renderer._lastObjectRendered, this.processPointerDown, !0), this.emit("pointerdown", P), I.pointerType === "touch" ? this.emit("touchstart", P) : I.pointerType !== "mouse" && I.pointerType !== "pen" || this.emit(D ? "rightdown" : "mousedown", this.eventData)
                            }
                        }
                    }, E.prototype.processPointerDown = function(_, m, M) {
                        var A = _.data,
                            I = _.data.identifier;
                        if (M) {
                            if (m.trackedPointers[I] || (m.trackedPointers[I] = new a.default(I)), this.captureEvent("pointerdown", m), this.dispatchEvent(m, "pointerdown", _), A.pointerType === "touch") this.dispatchEvent(m, "touchstart", _);
                            else if (A.pointerType === "mouse" || A.pointerType === "pen") {
                                var N = A.button === 2;
                                N ? m.trackedPointers[I].rightDown = !0 : m.trackedPointers[I].leftDown = !0, this.dispatchEvent(m, N ? "rightdown" : "mousedown", _)
                            }
                        }
                    }, E.prototype.onPointerComplete = function(_, m, M) {
                        for (var A = this.normalizeToPointerData(_), I = A.length, N = _.target !== this.interactionDOMElement ? "outside" : "", P = 0; P < I; P++) {
                            var D = A[P],
                                C = this.getInteractionDataForPointerId(D),
                                R = this.configureInteractionEventForDOMEvent(this.eventData, D, C);
                            if (R.data.originalEvent = _, this.processInteractive(R, this.renderer._lastObjectRendered, M, m || !N), this.emit(m ? "pointercancel" : "pointerup" + N, R), D.pointerType === "mouse" || D.pointerType === "pen") {
                                var F = D.button === 2;
                                this.emit(F ? "rightup" + N : "mouseup" + N, R)
                            } else D.pointerType === "touch" && (this.emit(m ? "touchcancel" : "touchend" + N, R), this.releaseInteractionDataForPointerId(D.pointerId, C))
                        }
                    }, E.prototype.onPointerCancel = function(_) {
                        this.supportsTouchEvents && _.pointerType === "touch" || this.onPointerComplete(_, !0, this.processPointerCancel)
                    }, E.prototype.processPointerCancel = function(_, m) {
                        var M = _.data,
                            A = _.data.identifier;
                        m.trackedPointers[A] !== void 0 && (delete m.trackedPointers[A], this.dispatchEvent(m, "pointercancel", _), M.pointerType === "touch" && this.dispatchEvent(m, "touchcancel", _))
                    }, E.prototype.onPointerUp = function(_) {
                        this.supportsTouchEvents && _.pointerType === "touch" || this.supportsTouchEvents && _.pointerType === "pen" || this.onPointerComplete(_, !1, this.processPointerUp)
                    }, E.prototype.processPointerUp = function(_, m, M) {
                        var A = _.data,
                            I = _.data.identifier,
                            N = m.trackedPointers[I],
                            P = A.pointerType === "touch",
                            D = A.pointerType === "mouse" || A.pointerType === "pen";
                        if (D) {
                            var C = A.button === 2,
                                R = a.default.FLAGS,
                                F = C ? R.RIGHT_DOWN : R.LEFT_DOWN,
                                B = N !== void 0 && N.flags & F;
                            M ? (this.dispatchEvent(m, C ? "rightup" : "mouseup", _), B && this.dispatchEvent(m, C ? "rightclick" : "click", _)) : B && this.dispatchEvent(m, C ? "rightupoutside" : "mouseupoutside", _), N && (C ? N.rightDown = !1 : N.leftDown = !1)
                        }
                        M ? (this.captureEvent("pointerup", m), this.dispatchEvent(m, "pointerup", _), P && this.dispatchEvent(m, "touchend", _), N && (this.dispatchEvent(m, "pointertap", _), P && (this.dispatchEvent(m, "tap", _), N.over = !1))) : N && (this.captureEvent("pointerupoutside", m), this.dispatchEvent(m, "pointerupoutside", _), P && this.dispatchEvent(m, "touchendoutside", _)), N && N.none && delete m.trackedPointers[I]
                    }, E.prototype.onPointerMove = function(_) {
                        if (!this.supportsTouchEvents || _.pointerType !== "touch") {
                            var m = this.normalizeToPointerData(_);
                            m[0].pointerType !== "mouse" && m[0].pointerType !== "pen" || (this.didMove = !0, this.cursor = null);
                            for (var M = m.length, A = 0; A < M; A++) {
                                var I = m[A],
                                    N = this.getInteractionDataForPointerId(I),
                                    P = this.configureInteractionEventForDOMEvent(this.eventData, I, N);
                                P.data.originalEvent = _;
                                var D = I.pointerType !== "touch" || this.moveWhenInside;
                                this.processInteractive(P, this.renderer._lastObjectRendered, this.processPointerMove, D), this.emit("pointermove", P), I.pointerType === "touch" && this.emit("touchmove", P), I.pointerType !== "mouse" && I.pointerType !== "pen" || this.emit("mousemove", P)
                            }
                            m[0].pointerType === "mouse" && this.setCursorMode(this.cursor)
                        }
                    }, E.prototype.processPointerMove = function(_, m, M) {
                        var A = _.data,
                            I = A.pointerType === "touch",
                            N = A.pointerType === "mouse" || A.pointerType === "pen";
                        N && this.processPointerOverOut(_, m, M), this.moveWhenInside && !M || (this.captureEvent("pointermove", m), this.dispatchEvent(m, "pointermove", _), I && this.dispatchEvent(m, "touchmove", _), N && this.dispatchEvent(m, "mousemove", _))
                    }, E.prototype.onPointerOut = function(_) {
                        if (!this.supportsTouchEvents || _.pointerType !== "touch") {
                            var m = this.normalizeToPointerData(_),
                                M = m[0];
                            M.pointerType === "mouse" && (this.mouseOverRenderer = !1, this.setCursorMode(null));
                            var A = this.getInteractionDataForPointerId(M),
                                I = this.configureInteractionEventForDOMEvent(this.eventData, M, A);
                            I.data.originalEvent = M, this.processInteractive(I, this.renderer._lastObjectRendered, this.processPointerOverOut, !1), this.emit("pointerout", I), M.pointerType === "mouse" || M.pointerType === "pen" ? this.emit("mouseout", I) : this.releaseInteractionDataForPointerId(A.identifier)
                        }
                    }, E.prototype.processPointerOverOut = function(_, m, M) {
                        var A = _.data,
                            I = _.data.identifier,
                            N = A.pointerType === "mouse" || A.pointerType === "pen",
                            P = m.trackedPointers[I];
                        M && !P && (P = m.trackedPointers[I] = new a.default(I)), P !== void 0 && (M && this.mouseOverRenderer ? (P.over || (P.over = !0, this.dispatchEvent(m, "pointerover", _), N && this.dispatchEvent(m, "mouseover", _)), N && this.cursor === null && (this.cursor = m.cursor)) : P.over && (P.over = !1, this.dispatchEvent(m, "pointerout", this.eventData), N && this.dispatchEvent(m, "mouseout", _), P.none && delete m.trackedPointers[I]))
                    }, E.prototype.onPointerOver = function(_) {
                        var m = this.normalizeToPointerData(_),
                            M = m[0],
                            A = this.getInteractionDataForPointerId(M),
                            I = this.configureInteractionEventForDOMEvent(this.eventData, M, A);
                        I.data.originalEvent = M, M.pointerType === "mouse" && (this.mouseOverRenderer = !0), this.emit("pointerover", I), M.pointerType !== "mouse" && M.pointerType !== "pen" || this.emit("mouseover", I)
                    }, E.prototype.getInteractionDataForPointerId = function(_) {
                        var m = _.pointerId,
                            M = void 0;
                        return m === y && _.pointerType === "mouse" ? M = this.mouse : this.activeInteractionData[m] ? M = this.activeInteractionData[m] : (M = this.interactionDataPool.pop() || new e.default, M.identifier = m, this.activeInteractionData[m] = M), M.copyEvent(_), M
                    }, E.prototype.releaseInteractionDataForPointerId = function(_) {
                        var m = this.activeInteractionData[_];
                        m && (delete this.activeInteractionData[_], m.reset(), this.interactionDataPool.push(m))
                    }, E.prototype.configureInteractionEventForDOMEvent = function(_, m, M) {
                        return _.data = M, this.mapPositionToPoint(M.global, m.clientX, m.clientY), navigator.isCocoonJS && m.pointerType === "touch" && (M.global.x = M.global.x / this.resolution, M.global.y = M.global.y / this.resolution), m.pointerType === "touch" && (m.globalX = M.global.x, m.globalY = M.global.y), M.originalEvent = m, _.reset(), _
                    }, E.prototype.normalizeToPointerData = function(_) {
                        var m = [];
                        if (this.supportsTouchEvents && _ instanceof TouchEvent)
                            for (var M = 0, A = _.changedTouches.length; M < A; M++) {
                                var I = _.changedTouches[M];
                                typeof I.button == "undefined" && (I.button = _.touches.length ? 1 : 0), typeof I.buttons == "undefined" && (I.buttons = _.touches.length ? 1 : 0), typeof I.isPrimary == "undefined" && (I.isPrimary = _.touches.length === 1 && _.type === "touchstart"), typeof I.width == "undefined" && (I.width = I.radiusX || 1), typeof I.height == "undefined" && (I.height = I.radiusY || 1), typeof I.tiltX == "undefined" && (I.tiltX = 0), typeof I.tiltY == "undefined" && (I.tiltY = 0), typeof I.pointerType == "undefined" && (I.pointerType = "touch"), typeof I.pointerId == "undefined" && (I.pointerId = I.identifier || 0), typeof I.pressure == "undefined" && (I.pressure = I.force || .5), I.twist = 0, I.tangentialPressure = 0, typeof I.layerX == "undefined" && (I.layerX = I.offsetX = I.clientX), typeof I.layerY == "undefined" && (I.layerY = I.offsetY = I.clientY), I.isNormalized = !0, m.push(I)
                            } else !(_ instanceof MouseEvent) || this.supportsPointerEvents && _ instanceof window.PointerEvent || (typeof _.isPrimary == "undefined" && (_.isPrimary = !0), typeof _.width == "undefined" && (_.width = 1), typeof _.height == "undefined" && (_.height = 1), typeof _.tiltX == "undefined" && (_.tiltX = 0), typeof _.tiltY == "undefined" && (_.tiltY = 0), typeof _.pointerType == "undefined" && (_.pointerType = "mouse"), typeof _.pointerId == "undefined" && (_.pointerId = y), typeof _.pressure == "undefined" && (_.pressure = .5), _.twist = 0, _.tangentialPressure = 0, _.isNormalized = !0), m.push(_);
                        return m
                    }, E.prototype.captureEvent = function(_, m) {
                        if (this.eventData && this.eventData.captureComplete === !1) {
                            for (var M = [m], A = m.parent; A;) M.push(A), A = A.parent;
                            this.eventData.capture = !0;
                            for (var I = M.length - 1; I >= 0; I--) {
                                var A = M[I];
                                if (this.eventData.stopImmediate) break;
                                this.dispatchEvent(A, _, this.eventData)
                            }
                            this.eventData.captureComplete = !0, this.eventData.capture = !1
                        }
                    }, E.prototype.destroy = function() {
                        this.removeEvents(), this.removeAllListeners(), this.renderer = null, this.mouse = null, this.eventData = null, this.interactionDOMElement = null, this.onPointerDown = null, this.processPointerDown = null, this.onPointerUp = null, this.processPointerUp = null, this.onPointerCancel = null, this.processPointerCancel = null, this.onPointerMove = null, this.processPointerMove = null, this.onPointerOut = null, this.processPointerOverOut = null, this.onPointerOver = null, this._tempPoint = null
                    }, E
                }(d.default);
            v.default = T, i.WebGLRenderer.registerPlugin("interaction", T), i.CanvasRenderer.registerPlugin("interaction", T)
        }, {
            "../core": 65,
            "./InteractionData": 155,
            "./InteractionEvent": 156,
            "./InteractionTrackingData": 158,
            "./interactiveTarget": 160,
            eventemitter3: 3
        }],
        158: [function(w, j, v) {
            "use strict";

            function b(u, f) {
                if (!(u instanceof f)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                    function u(f, c) {
                        for (var s = 0; s < c.length; s++) {
                            var i = c[s];
                            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(f, i.key, i)
                        }
                    }
                    return function(f, c, s) {
                        return c && u(f.prototype, c), s && u(f, s), f
                    }
                }(),
                g = function() {
                    function u(f) {
                        b(this, u), this._pointerId = f, this._flags = u.FLAGS.NONE
                    }
                    return u.prototype._doSet = function(f, c) {
                        c ? this._flags = this._flags | f : this._flags = this._flags & ~f
                    }, O(u, [{
                        key: "pointerId",
                        get: function() {
                            return this._pointerId
                        }
                    }, {
                        key: "flags",
                        get: function() {
                            return this._flags
                        },
                        set: function(f) {
                            this._flags = f
                        }
                    }, {
                        key: "none",
                        get: function() {
                            return this._flags === this.constructor.FLAGS.NONE
                        }
                    }, {
                        key: "over",
                        get: function() {
                            return (this._flags & this.constructor.FLAGS.OVER) != 0
                        },
                        set: function(f) {
                            this._doSet(this.constructor.FLAGS.OVER, f)
                        }
                    }, {
                        key: "rightDown",
                        get: function() {
                            return (this._flags & this.constructor.FLAGS.RIGHT_DOWN) != 0
                        },
                        set: function(f) {
                            this._doSet(this.constructor.FLAGS.RIGHT_DOWN, f)
                        }
                    }, {
                        key: "leftDown",
                        get: function() {
                            return (this._flags & this.constructor.FLAGS.LEFT_DOWN) != 0
                        },
                        set: function(f) {
                            this._doSet(this.constructor.FLAGS.LEFT_DOWN, f)
                        }
                    }]), u
                }();
            v.default = g, g.FLAGS = Object.freeze({
                NONE: 0,
                OVER: 1,
                LEFT_DOWN: 2,
                RIGHT_DOWN: 4
            })
        }, {}],
        159: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }
            v.__esModule = !0;
            var O = w("./InteractionData");
            Object.defineProperty(v, "InteractionData", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./InteractionManager");
            Object.defineProperty(v, "InteractionManager", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            });
            var u = w("./interactiveTarget");
            Object.defineProperty(v, "interactiveTarget", {
                enumerable: !0,
                get: function() {
                    return b(u).default
                }
            });
            var f = w("./InteractionTrackingData");
            Object.defineProperty(v, "InteractionTrackingData", {
                enumerable: !0,
                get: function() {
                    return b(f).default
                }
            });
            var c = w("./InteractionEvent");
            Object.defineProperty(v, "InteractionEvent", {
                enumerable: !0,
                get: function() {
                    return b(c).default
                }
            })
        }, {
            "./InteractionData": 155,
            "./InteractionEvent": 156,
            "./InteractionManager": 157,
            "./InteractionTrackingData": 158,
            "./interactiveTarget": 160
        }],
        160: [function(w, j, v) {
            "use strict";
            v.__esModule = !0, v.default = {
                interactive: !1,
                interactiveChildren: !0,
                hitArea: null,
                get buttonMode() {
                    return this.cursor === "pointer"
                },
                set buttonMode(b) {
                    b ? this.cursor = "pointer" : this.cursor === "pointer" && (this.cursor = null)
                },
                cursor: null,
                get trackedPointers() {
                    return this._trackedPointers === void 0 && (this._trackedPointers = {}), this._trackedPointers
                },
                _trackedPointers: void 0
            }
        }, {}],
        161: [function(w, j, v) {
            "use strict";

            function b(i) {
                if (i && i.__esModule) return i;
                var n = {};
                if (i != null)
                    for (var e in i) Object.prototype.hasOwnProperty.call(i, e) && (n[e] = i[e]);
                return n.default = i, n
            }

            function O(i, n) {
                i.bitmapFont = s.BitmapText.registerFont(i.data, n)
            }
            v.__esModule = !0, v.parse = O, v.default = function() {
                return function(i, n) {
                    if (!i.data || i.type !== c.Resource.TYPE.XML || i.data.getElementsByTagName("page").length === 0 || i.data.getElementsByTagName("info").length === 0 || i.data.getElementsByTagName("info")[0].getAttribute("face") === null) return void n();
                    var e = i.isDataUrl ? "" : u.dirname(i.url);
                    i.isDataUrl && (e === "." && (e = ""), this.baseUrl && e && this.baseUrl.charAt(this.baseUrl.length - 1) === "/" && (e += "/")), e = e.replace(this.baseUrl, ""), e && e.charAt(e.length - 1) !== "/" && (e += "/");
                    var t = e + i.data.getElementsByTagName("page")[0].getAttribute("file");
                    if (f.utils.TextureCache[t]) O(i, f.utils.TextureCache[t]), n();
                    else {
                        var r = {
                            crossOrigin: i.crossOrigin,
                            loadType: c.Resource.LOAD_TYPE.IMAGE,
                            metadata: i.metadata.imageMetadata,
                            parentResource: i
                        };
                        this.add(i.name + "_image", t, r, function(o) {
                            O(i, o.texture), n()
                        })
                    }
                }
            };
            var g = w("path"),
                u = b(g),
                f = w("../core"),
                c = w("resource-loader"),
                s = w("../extras")
        }, {
            "../core": 65,
            "../extras": 141,
            path: 8,
            "resource-loader": 36
        }],
        162: [function(w, j, v) {
            "use strict";

            function b(r) {
                return r && r.__esModule ? r : {
                    default: r
                }
            }
            v.__esModule = !0, v.shared = v.Resource = v.textureParser = v.getResourcePath = v.spritesheetParser = v.parseBitmapFontData = v.bitmapFontParser = v.Loader = void 0;
            var O = w("./bitmapFontParser");
            Object.defineProperty(v, "bitmapFontParser", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            }), Object.defineProperty(v, "parseBitmapFontData", {
                enumerable: !0,
                get: function() {
                    return O.parse
                }
            });
            var g = w("./spritesheetParser");
            Object.defineProperty(v, "spritesheetParser", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            }), Object.defineProperty(v, "getResourcePath", {
                enumerable: !0,
                get: function() {
                    return g.getResourcePath
                }
            });
            var u = w("./textureParser");
            Object.defineProperty(v, "textureParser", {
                enumerable: !0,
                get: function() {
                    return b(u).default
                }
            });
            var f = w("resource-loader");
            Object.defineProperty(v, "Resource", {
                enumerable: !0,
                get: function() {
                    return f.Resource
                }
            });
            var c = w("../core/Application"),
                s = b(c),
                i = w("./loader"),
                n = b(i);
            v.Loader = n.default;
            var e = new n.default;
            e.destroy = function() {}, v.shared = e;
            var t = s.default.prototype;
            t._loader = null, Object.defineProperty(t, "loader", {
                get: function() {
                    if (!this._loader) {
                        var r = this._options.sharedLoader;
                        this._loader = r ? e : new n.default
                    }
                    return this._loader
                }
            }), t._parentDestroy = t.destroy, t.destroy = function(r) {
                this._loader && (this._loader.destroy(), this._loader = null), this._parentDestroy(r)
            }
        }, {
            "../core/Application": 43,
            "./bitmapFontParser": 161,
            "./loader": 163,
            "./spritesheetParser": 164,
            "./textureParser": 165,
            "resource-loader": 36
        }],
        163: [function(w, j, v) {
            "use strict";

            function b(y) {
                return y && y.__esModule ? y : {
                    default: y
                }
            }

            function O(y, x) {
                if (!(y instanceof x)) throw new TypeError("Cannot call a class as a function")
            }

            function g(y, x) {
                if (!y) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !x || typeof x != "object" && typeof x != "function" ? y : x
            }

            function u(y, x) {
                if (typeof x != "function" && x !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof x);
                y.prototype = Object.create(x && x.prototype, {
                    constructor: {
                        value: y,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), x && (Object.setPrototypeOf ? Object.setPrototypeOf(y, x) : y.__proto__ = x)
            }
            v.__esModule = !0;
            var f = w("resource-loader"),
                c = b(f),
                s = w("resource-loader/lib/middlewares/parsing/blob"),
                i = w("eventemitter3"),
                n = b(i),
                e = w("./textureParser"),
                t = b(e),
                r = w("./spritesheetParser"),
                o = b(r),
                a = w("./bitmapFontParser"),
                h = b(a),
                d = function(y) {
                    function x(T, S) {
                        O(this, x);
                        var E = g(this, y.call(this, T, S));
                        n.default.call(E);
                        for (var _ = 0; _ < x._pixiMiddleware.length; ++_) E.use(x._pixiMiddleware[_]());
                        return E.onStart.add(function(m) {
                            return E.emit("start", m)
                        }), E.onProgress.add(function(m, M) {
                            return E.emit("progress", m, M)
                        }), E.onError.add(function(m, M, A) {
                            return E.emit("error", m, M, A)
                        }), E.onLoad.add(function(m, M) {
                            return E.emit("load", m, M)
                        }), E.onComplete.add(function(m, M) {
                            return E.emit("complete", m, M)
                        }), E
                    }
                    return u(x, y), x.addPixiMiddleware = function(T) {
                        x._pixiMiddleware.push(T)
                    }, x.prototype.destroy = function() {
                        this.removeAllListeners(), this.reset()
                    }, x
                }(c.default);
            v.default = d;
            for (var l in n.default.prototype) d.prototype[l] = n.default.prototype[l];
            d._pixiMiddleware = [s.blobMiddlewareFactory, t.default, o.default, h.default];
            var p = c.default.Resource;
            p.setExtensionXhrType("fnt", p.XHR_RESPONSE_TYPE.DOCUMENT)
        }, {
            "./bitmapFontParser": 161,
            "./spritesheetParser": 164,
            "./textureParser": 165,
            eventemitter3: 3,
            "resource-loader": 36,
            "resource-loader/lib/middlewares/parsing/blob": 37
        }],
        164: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }

            function O(s, i) {
                return s.isDataUrl ? s.data.meta.image : f.default.resolve(s.url.replace(i, ""), s.data.meta.image)
            }
            v.__esModule = !0, v.default = function() {
                return function(s, i) {
                    var n = s.name + "_image";
                    if (!s.data || s.type !== g.Resource.TYPE.JSON || !s.data.frames || this.resources[n]) return void i();
                    var e = {
                            crossOrigin: s.crossOrigin,
                            metadata: s.metadata.imageMetadata,
                            parentResource: s
                        },
                        t = O(s, this.baseUrl);
                    this.add(n, t, e, function(r) {
                        if (r.error) return void i(r.error);
                        var o = new c.Spritesheet(r.texture.baseTexture, s.data, s.url);
                        o.parse(function() {
                            s.spritesheet = o, s.textures = o.textures, i()
                        })
                    })
                }
            }, v.getResourcePath = O;
            var g = w("resource-loader"),
                u = w("url"),
                f = b(u),
                c = w("../core")
        }, {
            "../core": 65,
            "resource-loader": 36,
            url: 38
        }],
        165: [function(w, j, v) {
            "use strict";

            function b(f) {
                return f && f.__esModule ? f : {
                    default: f
                }
            }
            v.__esModule = !0, v.default = function() {
                return function(f, c) {
                    f.data && f.type === O.Resource.TYPE.IMAGE && (f.texture = u.default.fromLoader(f.data, f.url, f.name)), c()
                }
            };
            var O = w("resource-loader"),
                g = w("../core/textures/Texture"),
                u = b(g)
        }, {
            "../core/textures/Texture": 115,
            "resource-loader": 36
        }],
        166: [function(w, j, v) {
            "use strict";

            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function O(a) {
                if (a && a.__esModule) return a;
                var h = {};
                if (a != null)
                    for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (h[d] = a[d]);
                return h.default = a, h
            }

            function g(a, h) {
                if (!(a instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function u(a, h) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !h || typeof h != "object" && typeof h != "function" ? a : h
            }

            function f(a, h) {
                if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
                a.prototype = Object.create(h && h.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(a, h) : a.__proto__ = h)
            }
            v.__esModule = !0;
            var c = function() {
                    function a(h, d) {
                        for (var l = 0; l < d.length; l++) {
                            var p = d[l];
                            p.enumerable = p.enumerable || !1, p.configurable = !0, "value" in p && (p.writable = !0), Object.defineProperty(h, p.key, p)
                        }
                    }
                    return function(h, d, l) {
                        return d && a(h.prototype, d), l && a(h, l), h
                    }
                }(),
                s = w("../core"),
                i = O(s),
                n = w("../core/textures/Texture"),
                e = b(n),
                t = new i.Point,
                r = new i.Polygon,
                o = function(a) {
                    function h(d, l, p, y, x) {
                        g(this, h);
                        var T = u(this, a.call(this));
                        return T._texture = d || e.default.EMPTY, T.uvs = p || new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), T.vertices = l || new Float32Array([0, 0, 100, 0, 100, 100, 0, 100]), T.indices = y || new Uint16Array([0, 1, 3, 2]), T.dirty = 0, T.indexDirty = 0, T.blendMode = i.BLEND_MODES.NORMAL, T.canvasPadding = i.settings.MESH_CANVAS_PADDING, T.drawMode = x || h.DRAW_MODES.TRIANGLE_MESH, T.shader = null, T.tintRgb = new Float32Array([1, 1, 1]), T._glDatas = {}, T._uvTransform = new i.TextureMatrix(T._texture), T.uploadUvTransform = !1, T.pluginName = "mesh", T
                    }
                    return f(h, a), h.prototype._renderWebGL = function(d) {
                        this.refresh(), d.setObjectRenderer(d.plugins[this.pluginName]), d.plugins[this.pluginName].render(this)
                    }, h.prototype._renderCanvas = function(d) {
                        this.refresh(), d.plugins[this.pluginName].render(this)
                    }, h.prototype._onTextureUpdate = function() {
                        this._uvTransform.texture = this._texture, this.refresh()
                    }, h.prototype.multiplyUvs = function() {
                        this.uploadUvTransform || this._uvTransform.multiplyUvs(this.uvs)
                    }, h.prototype.refresh = function(d) {
                        this._uvTransform.update(d) && this._refresh()
                    }, h.prototype._refresh = function() {}, h.prototype._calculateBounds = function() {
                        this._bounds.addVertices(this.transform, this.vertices, 0, this.vertices.length)
                    }, h.prototype.containsPoint = function(d) {
                        if (!this.getBounds().contains(d.x, d.y)) return !1;
                        this.worldTransform.applyInverse(d, t);
                        for (var l = this.vertices, p = r.points, y = this.indices, x = this.indices.length, T = this.drawMode === h.DRAW_MODES.TRIANGLES ? 3 : 1, S = 0; S + 2 < x; S += T) {
                            var E = 2 * y[S],
                                _ = 2 * y[S + 1],
                                m = 2 * y[S + 2];
                            if (p[0] = l[E], p[1] = l[E + 1], p[2] = l[_], p[3] = l[_ + 1], p[4] = l[m], p[5] = l[m + 1], r.contains(t.x, t.y)) return !0
                        }
                        return !1
                    }, c(h, [{
                        key: "texture",
                        get: function() {
                            return this._texture
                        },
                        set: function(d) {
                            this._texture !== d && (this._texture = d, d && (d.baseTexture.hasLoaded ? this._onTextureUpdate() : d.once("update", this._onTextureUpdate, this)))
                        }
                    }, {
                        key: "tint",
                        get: function() {
                            return i.utils.rgb2hex(this.tintRgb)
                        },
                        set: function(d) {
                            this.tintRgb = i.utils.hex2rgb(d, this.tintRgb)
                        }
                    }]), h
                }(i.Container);
            v.default = o, o.DRAW_MODES = {
                TRIANGLE_MESH: 0,
                TRIANGLES: 1
            }
        }, {
            "../core": 65,
            "../core/textures/Texture": 115
        }],
        167: [function(w, j, v) {
            "use strict";

            function b(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            v.__esModule = !0;
            var f = function() {
                    function e(t, r) {
                        for (var o = 0; o < r.length; o++) {
                            var a = r[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                c = w("./Plane"),
                s = b(c),
                i = 10,
                n = function(e) {
                    function t(r, o, a, h, d) {
                        O(this, t);
                        var l = g(this, e.call(this, r, 4, 4));
                        return l._origWidth = r.orig.width, l._origHeight = r.orig.height, l._width = l._origWidth, l._height = l._origHeight, l.leftWidth = typeof o != "undefined" ? o : i, l.rightWidth = typeof h != "undefined" ? h : i, l.topHeight = typeof a != "undefined" ? a : i, l.bottomHeight = typeof d != "undefined" ? d : i, l.refresh(!0), l
                    }
                    return u(t, e), t.prototype.updateHorizontalVertices = function() {
                        var r = this.vertices;
                        r[9] = r[11] = r[13] = r[15] = this._topHeight, r[17] = r[19] = r[21] = r[23] = this._height - this._bottomHeight, r[25] = r[27] = r[29] = r[31] = this._height
                    }, t.prototype.updateVerticalVertices = function() {
                        var r = this.vertices;
                        r[2] = r[10] = r[18] = r[26] = this._leftWidth, r[4] = r[12] = r[20] = r[28] = this._width - this._rightWidth, r[6] = r[14] = r[22] = r[30] = this._width
                    }, t.prototype._renderCanvas = function(r) {
                        var o = r.context;
                        o.globalAlpha = this.worldAlpha, r.setBlendMode(this.blendMode);
                        var a = this.worldTransform,
                            h = r.resolution;
                        r.roundPixels ? o.setTransform(a.a * h, a.b * h, a.c * h, a.d * h, a.tx * h | 0, a.ty * h | 0) : o.setTransform(a.a * h, a.b * h, a.c * h, a.d * h, a.tx * h, a.ty * h);
                        var d = this._texture.baseTexture,
                            l = d.source,
                            p = d.width * d.resolution,
                            y = d.height * d.resolution;
                        this.drawSegment(o, l, p, y, 0, 1, 10, 11), this.drawSegment(o, l, p, y, 2, 3, 12, 13), this.drawSegment(o, l, p, y, 4, 5, 14, 15), this.drawSegment(o, l, p, y, 8, 9, 18, 19), this.drawSegment(o, l, p, y, 10, 11, 20, 21), this.drawSegment(o, l, p, y, 12, 13, 22, 23), this.drawSegment(o, l, p, y, 16, 17, 26, 27), this.drawSegment(o, l, p, y, 18, 19, 28, 29), this.drawSegment(o, l, p, y, 20, 21, 30, 31)
                    }, t.prototype.drawSegment = function(r, o, a, h, d, l, p, y) {
                        var x = this.uvs,
                            T = this.vertices,
                            S = (x[p] - x[d]) * a,
                            E = (x[y] - x[l]) * h,
                            _ = T[p] - T[d],
                            m = T[y] - T[l];
                        S < 1 && (S = 1), E < 1 && (E = 1), _ < 1 && (_ = 1), m < 1 && (m = 1), r.drawImage(o, x[d] * a, x[l] * h, S, E, T[d], T[l], _, m)
                    }, t.prototype._refresh = function() {
                        e.prototype._refresh.call(this);
                        var r = this.uvs,
                            o = this._texture;
                        this._origWidth = o.orig.width, this._origHeight = o.orig.height;
                        var a = 1 / this._origWidth,
                            h = 1 / this._origHeight;
                        r[0] = r[8] = r[16] = r[24] = 0, r[1] = r[3] = r[5] = r[7] = 0, r[6] = r[14] = r[22] = r[30] = 1, r[25] = r[27] = r[29] = r[31] = 1, r[2] = r[10] = r[18] = r[26] = a * this._leftWidth, r[4] = r[12] = r[20] = r[28] = 1 - a * this._rightWidth, r[9] = r[11] = r[13] = r[15] = h * this._topHeight, r[17] = r[19] = r[21] = r[23] = 1 - h * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.dirty++, this.multiplyUvs()
                    }, f(t, [{
                        key: "width",
                        get: function() {
                            return this._width
                        },
                        set: function(r) {
                            this._width = r, this._refresh()
                        }
                    }, {
                        key: "height",
                        get: function() {
                            return this._height
                        },
                        set: function(r) {
                            this._height = r, this._refresh()
                        }
                    }, {
                        key: "leftWidth",
                        get: function() {
                            return this._leftWidth
                        },
                        set: function(r) {
                            this._leftWidth = r, this._refresh()
                        }
                    }, {
                        key: "rightWidth",
                        get: function() {
                            return this._rightWidth
                        },
                        set: function(r) {
                            this._rightWidth = r, this._refresh()
                        }
                    }, {
                        key: "topHeight",
                        get: function() {
                            return this._topHeight
                        },
                        set: function(r) {
                            this._topHeight = r, this._refresh()
                        }
                    }, {
                        key: "bottomHeight",
                        get: function() {
                            return this._bottomHeight
                        },
                        set: function(r) {
                            this._bottomHeight = r, this._refresh()
                        }
                    }]), t
                }(s.default);
            v.default = n
        }, {
            "./Plane": 168
        }],
        168: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(i, n) {
                if (!i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || typeof n != "object" && typeof n != "function" ? i : n
            }

            function u(i, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                i.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(i, n) : i.__proto__ = n)
            }
            v.__esModule = !0;
            var f = w("./Mesh"),
                c = b(f),
                s = function(i) {
                    function n(e, t, r) {
                        O(this, n);
                        var o = g(this, i.call(this, e));
                        return o._ready = !0, o.verticesX = t || 10, o.verticesY = r || 10, o.drawMode = c.default.DRAW_MODES.TRIANGLES, o.refresh(), o
                    }
                    return u(n, i), n.prototype._refresh = function() {
                        for (var e = this._texture, t = this.verticesX * this.verticesY, r = [], o = [], a = [], h = [], d = this.verticesX - 1, l = this.verticesY - 1, p = e.width / d, y = e.height / l, x = 0; x < t; x++) {
                            var T = x % this.verticesX,
                                S = x / this.verticesX | 0;
                            r.push(T * p, S * y), a.push(T / d, S / l)
                        }
                        for (var E = d * l, _ = 0; _ < E; _++) {
                            var m = _ % d,
                                M = _ / d | 0,
                                A = M * this.verticesX + m,
                                I = M * this.verticesX + m + 1,
                                N = (M + 1) * this.verticesX + m,
                                P = (M + 1) * this.verticesX + m + 1;
                            h.push(A, I, N), h.push(I, P, N)
                        }
                        this.vertices = new Float32Array(r), this.uvs = new Float32Array(a), this.colors = new Float32Array(o), this.indices = new Uint16Array(h), this.dirty++, this.indexDirty++, this.multiplyUvs()
                    }, n.prototype._onTextureUpdate = function() {
                        c.default.prototype._onTextureUpdate.call(this), this._ready && this.refresh()
                    }, n
                }(c.default);
            v.default = s
        }, {
            "./Mesh": 166
        }],
        169: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(i, n) {
                if (!i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || typeof n != "object" && typeof n != "function" ? i : n
            }

            function u(i, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                i.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(i, n) : i.__proto__ = n)
            }
            v.__esModule = !0;
            var f = w("./Mesh"),
                c = b(f),
                s = function(i) {
                    function n(e, t) {
                        O(this, n);
                        var r = g(this, i.call(this, e));
                        return r.points = t, r.vertices = new Float32Array(4 * t.length), r.uvs = new Float32Array(4 * t.length), r.colors = new Float32Array(2 * t.length), r.indices = new Uint16Array(2 * t.length), r.autoUpdate = !0, r.refresh(), r
                    }
                    return u(n, i), n.prototype._refresh = function() {
                        var e = this.points;
                        if (!(e.length < 1) && this._texture._uvs) {
                            this.vertices.length / 4 !== e.length && (this.vertices = new Float32Array(4 * e.length), this.uvs = new Float32Array(4 * e.length), this.colors = new Float32Array(2 * e.length), this.indices = new Uint16Array(2 * e.length));
                            var t = this.uvs,
                                r = this.indices,
                                o = this.colors;
                            t[0] = 0, t[1] = 0, t[2] = 0, t[3] = 1, o[0] = 1, o[1] = 1, r[0] = 0, r[1] = 1;
                            for (var a = e.length, h = 1; h < a; h++) {
                                var d = 4 * h,
                                    l = h / (a - 1);
                                t[d] = l, t[d + 1] = 0, t[d + 2] = l, t[d + 3] = 1, d = 2 * h, o[d] = 1, o[d + 1] = 1, d = 2 * h, r[d] = d, r[d + 1] = d + 1
                            }
                            this.dirty++, this.indexDirty++, this.multiplyUvs(), this.refreshVertices()
                        }
                    }, n.prototype.refreshVertices = function() {
                        var e = this.points;
                        if (!(e.length < 1))
                            for (var t = e[0], r = void 0, o = 0, a = 0, h = this.vertices, d = e.length, l = 0; l < d; l++) {
                                var p = e[l],
                                    y = 4 * l;
                                r = l < e.length - 1 ? e[l + 1] : p, a = -(r.x - t.x), o = r.y - t.y;
                                var x = 10 * (1 - l / (d - 1));
                                x > 1 && (x = 1);
                                var T = Math.sqrt(o * o + a * a),
                                    S = this._texture.height / 2;
                                o /= T, a /= T, o *= S, a *= S, h[y] = p.x + o, h[y + 1] = p.y + a, h[y + 2] = p.x - o, h[y + 3] = p.y - a, t = p
                            }
                    }, n.prototype.updateTransform = function() {
                        this.autoUpdate && this.refreshVertices(), this.containerUpdateTransform()
                    }, n
                }(c.default);
            v.default = s
        }, {
            "./Mesh": 166
        }],
        170: [function(w, j, v) {
            "use strict";

            function b(n) {
                return n && n.__esModule ? n : {
                    default: n
                }
            }

            function O(n) {
                if (n && n.__esModule) return n;
                var e = {};
                if (n != null)
                    for (var t in n) Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                return e.default = n, e
            }

            function g(n, e) {
                if (!(n instanceof e)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var u = w("../../core"),
                f = O(u),
                c = w("../Mesh"),
                s = b(c),
                i = function() {
                    function n(e) {
                        g(this, n), this.renderer = e
                    }
                    return n.prototype.render = function(e) {
                        var t = this.renderer,
                            r = t.context,
                            o = e.worldTransform,
                            a = t.resolution;
                        t.roundPixels ? r.setTransform(o.a * a, o.b * a, o.c * a, o.d * a, o.tx * a | 0, o.ty * a | 0) : r.setTransform(o.a * a, o.b * a, o.c * a, o.d * a, o.tx * a, o.ty * a), t.context.globalAlpha = e.worldAlpha, t.setBlendMode(e.blendMode), e.drawMode === s.default.DRAW_MODES.TRIANGLE_MESH ? this._renderTriangleMesh(e) : this._renderTriangles(e)
                    }, n.prototype._renderTriangleMesh = function(e) {
                        for (var t = e.vertices.length / 2, r = 0; r < t - 2; r++) {
                            var o = 2 * r;
                            this._renderDrawTriangle(e, o, o + 2, o + 4)
                        }
                    }, n.prototype._renderTriangles = function(e) {
                        for (var t = e.indices, r = t.length, o = 0; o < r; o += 3) {
                            var a = 2 * t[o],
                                h = 2 * t[o + 1],
                                d = 2 * t[o + 2];
                            this._renderDrawTriangle(e, a, h, d)
                        }
                    }, n.prototype._renderDrawTriangle = function(e, t, r, o) {
                        var a = this.renderer.context,
                            h = e.uvs,
                            d = e.vertices,
                            l = e._texture;
                        if (l.valid) {
                            var p = l.baseTexture,
                                y = p.source,
                                x = p.width,
                                T = p.height,
                                S = void 0,
                                E = void 0,
                                _ = void 0,
                                m = void 0,
                                M = void 0,
                                A = void 0;
                            if (e.uploadUvTransform) {
                                var I = e._uvTransform.mapCoord;
                                S = (h[t] * I.a + h[t + 1] * I.c + I.tx) * p.width, E = (h[r] * I.a + h[r + 1] * I.c + I.tx) * p.width, _ = (h[o] * I.a + h[o + 1] * I.c + I.tx) * p.width, m = (h[t] * I.b + h[t + 1] * I.d + I.ty) * p.height, M = (h[r] * I.b + h[r + 1] * I.d + I.ty) * p.height, A = (h[o] * I.b + h[o + 1] * I.d + I.ty) * p.height
                            } else S = h[t] * p.width, E = h[r] * p.width, _ = h[o] * p.width, m = h[t + 1] * p.height, M = h[r + 1] * p.height, A = h[o + 1] * p.height;
                            var N = d[t],
                                P = d[r],
                                D = d[o],
                                C = d[t + 1],
                                R = d[r + 1],
                                F = d[o + 1],
                                B = e.canvasPadding / this.renderer.resolution;
                            if (B > 0) {
                                var L = B / Math.abs(e.worldTransform.a),
                                    k = B / Math.abs(e.worldTransform.d),
                                    U = (N + P + D) / 3,
                                    H = (C + R + F) / 3,
                                    X = N - U,
                                    W = C - H,
                                    V = Math.sqrt(X * X + W * W);
                                N = U + X / V * (V + L), C = H + W / V * (V + k), X = P - U, W = R - H, V = Math.sqrt(X * X + W * W), P = U + X / V * (V + L), R = H + W / V * (V + k), X = D - U, W = F - H, V = Math.sqrt(X * X + W * W), D = U + X / V * (V + L), F = H + W / V * (V + k)
                            }
                            a.save(), a.beginPath(), a.moveTo(N, C), a.lineTo(P, R), a.lineTo(D, F), a.closePath(), a.clip();
                            var G = S * M + m * _ + E * A - M * _ - m * E - S * A,
                                Y = N * M + m * D + P * A - M * D - m * P - N * A,
                                z = S * P + N * _ + E * D - P * _ - N * E - S * D,
                                K = S * M * D + m * P * _ + N * E * A - N * M * _ - m * E * D - S * P * A,
                                q = C * M + m * F + R * A - M * F - m * R - C * A,
                                $ = S * R + C * _ + E * F - R * _ - C * E - S * F,
                                J = S * M * F + m * R * _ + C * E * A - C * M * _ - m * E * F - S * R * A;
                            a.transform(Y / G, q / G, z / G, $ / G, K / G, J / G), a.drawImage(y, 0, 0, x * p.resolution, T * p.resolution, 0, 0, x, T), a.restore(), this.renderer.invalidateBlendMode()
                        }
                    }, n.prototype.renderMeshFlat = function(e) {
                        var t = this.renderer.context,
                            r = e.vertices,
                            o = r.length / 2;
                        t.beginPath();
                        for (var a = 1; a < o - 2; ++a) {
                            var h = 2 * a,
                                d = r[h],
                                l = r[h + 1],
                                p = r[h + 2],
                                y = r[h + 3],
                                x = r[h + 4],
                                T = r[h + 5];
                            t.moveTo(d, l), t.lineTo(p, y), t.lineTo(x, T)
                        }
                        t.fillStyle = "#FF0000", t.fill(), t.closePath()
                    }, n.prototype.destroy = function() {
                        this.renderer = null
                    }, n
                }();
            v.default = i, f.CanvasRenderer.registerPlugin("mesh", i)
        }, {
            "../../core": 65,
            "../Mesh": 166
        }],
        171: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }
            v.__esModule = !0;
            var O = w("./Mesh");
            Object.defineProperty(v, "Mesh", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./webgl/MeshRenderer");
            Object.defineProperty(v, "MeshRenderer", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            });
            var u = w("./canvas/CanvasMeshRenderer");
            Object.defineProperty(v, "CanvasMeshRenderer", {
                enumerable: !0,
                get: function() {
                    return b(u).default
                }
            });
            var f = w("./Plane");
            Object.defineProperty(v, "Plane", {
                enumerable: !0,
                get: function() {
                    return b(f).default
                }
            });
            var c = w("./NineSlicePlane");
            Object.defineProperty(v, "NineSlicePlane", {
                enumerable: !0,
                get: function() {
                    return b(c).default
                }
            });
            var s = w("./Rope");
            Object.defineProperty(v, "Rope", {
                enumerable: !0,
                get: function() {
                    return b(s).default
                }
            })
        }, {
            "./Mesh": 166,
            "./NineSlicePlane": 167,
            "./Plane": 168,
            "./Rope": 169,
            "./canvas/CanvasMeshRenderer": 170,
            "./webgl/MeshRenderer": 172
        }],
        172: [function(w, j, v) {
            "use strict";

            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function O(a) {
                if (a && a.__esModule) return a;
                var h = {};
                if (a != null)
                    for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (h[d] = a[d]);
                return h.default = a, h
            }

            function g(a, h) {
                if (!(a instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function u(a, h) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !h || typeof h != "object" && typeof h != "function" ? a : h
            }

            function f(a, h) {
                if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
                a.prototype = Object.create(h && h.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(a, h) : a.__proto__ = h)
            }
            v.__esModule = !0;
            var c = w("../../core"),
                s = O(c),
                i = w("pixi-gl-core"),
                n = b(i),
                e = w("../Mesh"),
                t = b(e),
                r = (w("path"), s.Matrix.IDENTITY),
                o = function(a) {
                    function h(d) {
                        g(this, h);
                        var l = u(this, a.call(this, d));
                        return l.shader = null, l
                    }
                    return f(h, a), h.prototype.onContextChange = function() {
                        var d = this.renderer.gl;
                        this.shader = new s.Shader(d, `attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 projectionMatrix;
uniform mat3 translationMatrix;
uniform mat3 uTransform;

varying vec2 vTextureCoord;

void main(void)
{
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);

    vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
}
`, `varying vec2 vTextureCoord;
uniform vec4 uColor;

uniform sampler2D uSampler;

void main(void)
{
    gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
}
`)
                    }, h.prototype.render = function(d) {
                        var l = this.renderer,
                            p = l.gl,
                            y = d._texture;
                        if (y.valid) {
                            var x = d._glDatas[l.CONTEXT_UID];
                            x || (l.bindVao(null), x = {
                                shader: this.shader,
                                vertexBuffer: n.default.GLBuffer.createVertexBuffer(p, d.vertices, p.STREAM_DRAW),
                                uvBuffer: n.default.GLBuffer.createVertexBuffer(p, d.uvs, p.STREAM_DRAW),
                                indexBuffer: n.default.GLBuffer.createIndexBuffer(p, d.indices, p.STATIC_DRAW),
                                vao: null,
                                dirty: d.dirty,
                                indexDirty: d.indexDirty
                            }, x.vao = new n.default.VertexArrayObject(p).addIndex(x.indexBuffer).addAttribute(x.vertexBuffer, x.shader.attributes.aVertexPosition, p.FLOAT, !1, 8, 0).addAttribute(x.uvBuffer, x.shader.attributes.aTextureCoord, p.FLOAT, !1, 8, 0), d._glDatas[l.CONTEXT_UID] = x), l.bindVao(x.vao), d.dirty !== x.dirty && (x.dirty = d.dirty, x.uvBuffer.upload(d.uvs)), d.indexDirty !== x.indexDirty && (x.indexDirty = d.indexDirty, x.indexBuffer.upload(d.indices)), x.vertexBuffer.upload(d.vertices), l.bindShader(x.shader), x.shader.uniforms.uSampler = l.bindTexture(y), l.state.setBlendMode(s.utils.correctBlendMode(d.blendMode, y.baseTexture.premultipliedAlpha)), x.shader.uniforms.uTransform && (d.uploadUvTransform ? x.shader.uniforms.uTransform = d._uvTransform.mapCoord.toArray(!0) : x.shader.uniforms.uTransform = r.toArray(!0)), x.shader.uniforms.translationMatrix = d.worldTransform.toArray(!0), x.shader.uniforms.uColor = s.utils.premultiplyRgba(d.tintRgb, d.worldAlpha, x.shader.uniforms.uColor, y.baseTexture.premultipliedAlpha);
                            var T = d.drawMode === t.default.DRAW_MODES.TRIANGLE_MESH ? p.TRIANGLE_STRIP : p.TRIANGLES;
                            x.vao.draw(T, d.indices.length, 0)
                        }
                    }, h
                }(s.ObjectRenderer);
            v.default = o, s.WebGLRenderer.registerPlugin("mesh", o)
        }, {
            "../../core": 65,
            "../Mesh": 166,
            path: 8,
            "pixi-gl-core": 15
        }],
        173: [function(w, j, v) {
            "use strict";

            function b(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (e != null)
                    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function O(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function g(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || typeof t != "object" && typeof t != "function" ? e : t
            }

            function u(e, t) {
                if (typeof t != "function" && t !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
            }
            v.__esModule = !0;
            var f = function() {
                    function e(t, r) {
                        for (var o = 0; o < r.length; o++) {
                            var a = r[o];
                            a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(t, a.key, a)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }(),
                c = w("../core"),
                s = b(c),
                i = w("../core/utils"),
                n = function(e) {
                    function t() {
                        var r = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 1500,
                            o = arguments[1],
                            a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 16384,
                            h = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
                        O(this, t);
                        var d = g(this, e.call(this)),
                            l = 16384;
                        return a > l && (a = l), a > r && (a = r), d._properties = [!1, !0, !1, !1, !1], d._maxSize = r, d._batchSize = a, d._glBuffers = {}, d._bufferUpdateIDs = [], d._updateID = 0, d.interactiveChildren = !1, d.blendMode = s.BLEND_MODES.NORMAL, d.autoResize = h, d.roundPixels = !0, d.baseTexture = null, d.setProperties(o), d._tint = 0, d.tintRgb = new Float32Array(4), d.tint = 16777215, d
                    }
                    return u(t, e), t.prototype.setProperties = function(r) {
                        r && (this._properties[0] = "vertices" in r || "scale" in r ? !!r.vertices || !!r.scale : this._properties[0], this._properties[1] = "position" in r ? !!r.position : this._properties[1], this._properties[2] = "rotation" in r ? !!r.rotation : this._properties[2], this._properties[3] = "uvs" in r ? !!r.uvs : this._properties[3], this._properties[4] = "tint" in r || "alpha" in r ? !!r.tint || !!r.alpha : this._properties[4])
                    }, t.prototype.updateTransform = function() {
                        this.displayObjectUpdateTransform()
                    }, t.prototype.renderWebGL = function(r) {
                        var o = this;
                        this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable && (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.hasLoaded || this.baseTexture.once("update", function() {
                            return o.onChildrenChange(0)
                        })), r.setObjectRenderer(r.plugins.particle), r.plugins.particle.render(this))
                    }, t.prototype.onChildrenChange = function(r) {
                        for (var o = Math.floor(r / this._batchSize); this._bufferUpdateIDs.length < o;) this._bufferUpdateIDs.push(0);
                        this._bufferUpdateIDs[o] = ++this._updateID
                    }, t.prototype.renderCanvas = function(r) {
                        if (this.visible && !(this.worldAlpha <= 0) && this.children.length && this.renderable) {
                            var o = r.context,
                                a = this.worldTransform,
                                h = !0,
                                d = 0,
                                l = 0,
                                p = 0,
                                y = 0;
                            r.setBlendMode(this.blendMode), o.globalAlpha = this.worldAlpha, this.displayObjectUpdateTransform();
                            for (var x = 0; x < this.children.length; ++x) {
                                var T = this.children[x];
                                if (T.visible) {
                                    var S = T._texture.frame;
                                    if (o.globalAlpha = this.worldAlpha * T.alpha, T.rotation % (2 * Math.PI) == 0) h && (o.setTransform(a.a, a.b, a.c, a.d, a.tx * r.resolution, a.ty * r.resolution), h = !1), d = T.anchor.x * (-S.width * T.scale.x) + T.position.x + .5, l = T.anchor.y * (-S.height * T.scale.y) + T.position.y + .5, p = S.width * T.scale.x, y = S.height * T.scale.y;
                                    else {
                                        h || (h = !0), T.displayObjectUpdateTransform();
                                        var E = T.worldTransform;
                                        r.roundPixels ? o.setTransform(E.a, E.b, E.c, E.d, E.tx * r.resolution | 0, E.ty * r.resolution | 0) : o.setTransform(E.a, E.b, E.c, E.d, E.tx * r.resolution, E.ty * r.resolution), d = T.anchor.x * -S.width + .5, l = T.anchor.y * -S.height + .5, p = S.width, y = S.height
                                    }
                                    var _ = T._texture.baseTexture.resolution;
                                    o.drawImage(T._texture.baseTexture.source, S.x * _, S.y * _, S.width * _, S.height * _, d * r.resolution, l * r.resolution, p * r.resolution, y * r.resolution)
                                }
                            }
                        }
                    }, t.prototype.destroy = function(r) {
                        if (e.prototype.destroy.call(this, r), this._buffers)
                            for (var o = 0; o < this._buffers.length; ++o) this._buffers[o].destroy();
                        this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
                    }, f(t, [{
                        key: "tint",
                        get: function() {
                            return this._tint
                        },
                        set: function(r) {
                            this._tint = r, (0, i.hex2rgb)(r, this.tintRgb)
                        }
                    }]), t
                }(s.Container);
            v.default = n
        }, {
            "../core": 65,
            "../core/utils": 125
        }],
        174: [function(w, j, v) {
            "use strict";

            function b(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            v.__esModule = !0;
            var O = w("./ParticleContainer");
            Object.defineProperty(v, "ParticleContainer", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./webgl/ParticleRenderer");
            Object.defineProperty(v, "ParticleRenderer", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            })
        }, {
            "./ParticleContainer": 173,
            "./webgl/ParticleRenderer": 176
        }],
        175: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var g = w("pixi-gl-core"),
                u = b(g),
                f = w("../../core/utils/createIndicesForQuads"),
                c = b(f),
                s = function() {
                    function i(n, e, t, r) {
                        O(this, i), this.gl = n, this.size = r, this.dynamicProperties = [], this.staticProperties = [];
                        for (var o = 0; o < e.length; ++o) {
                            var a = e[o];
                            a = {
                                attribute: a.attribute,
                                size: a.size,
                                uploadFunction: a.uploadFunction,
                                unsignedByte: a.unsignedByte,
                                offset: a.offset
                            }, t[o] ? this.dynamicProperties.push(a) : this.staticProperties.push(a)
                        }
                        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
                    }
                    return i.prototype.initBuffers = function() {
                        var n = this.gl,
                            e = 0;
                        this.indices = (0, c.default)(this.size), this.indexBuffer = u.default.GLBuffer.createIndexBuffer(n, this.indices, n.STATIC_DRAW), this.dynamicStride = 0;
                        for (var t = 0; t < this.dynamicProperties.length; ++t) {
                            var r = this.dynamicProperties[t];
                            r.offset = e, e += r.size, this.dynamicStride += r.size
                        }
                        var o = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
                        this.dynamicData = new Float32Array(o), this.dynamicDataUint32 = new Uint32Array(o), this.dynamicBuffer = u.default.GLBuffer.createVertexBuffer(n, o, n.STREAM_DRAW);
                        var a = 0;
                        this.staticStride = 0;
                        for (var h = 0; h < this.staticProperties.length; ++h) {
                            var d = this.staticProperties[h];
                            d.offset = a, a += d.size, this.staticStride += d.size
                        }
                        var l = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
                        this.staticData = new Float32Array(l), this.staticDataUint32 = new Uint32Array(l), this.staticBuffer = u.default.GLBuffer.createVertexBuffer(n, l, n.STATIC_DRAW), this.vao = new u.default.VertexArrayObject(n).addIndex(this.indexBuffer);
                        for (var p = 0; p < this.dynamicProperties.length; ++p) {
                            var y = this.dynamicProperties[p];
                            y.unsignedByte ? this.vao.addAttribute(this.dynamicBuffer, y.attribute, n.UNSIGNED_BYTE, !0, 4 * this.dynamicStride, 4 * y.offset) : this.vao.addAttribute(this.dynamicBuffer, y.attribute, n.FLOAT, !1, 4 * this.dynamicStride, 4 * y.offset)
                        }
                        for (var x = 0; x < this.staticProperties.length; ++x) {
                            var T = this.staticProperties[x];
                            T.unsignedByte ? this.vao.addAttribute(this.staticBuffer, T.attribute, n.UNSIGNED_BYTE, !0, 4 * this.staticStride, 4 * T.offset) : this.vao.addAttribute(this.staticBuffer, T.attribute, n.FLOAT, !1, 4 * this.staticStride, 4 * T.offset)
                        }
                    }, i.prototype.uploadDynamic = function(n, e, t) {
                        for (var r = 0; r < this.dynamicProperties.length; r++) {
                            var o = this.dynamicProperties[r];
                            o.uploadFunction(n, e, t, o.unsignedByte ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, o.offset)
                        }
                        this.dynamicBuffer.upload()
                    }, i.prototype.uploadStatic = function(n, e, t) {
                        for (var r = 0; r < this.staticProperties.length; r++) {
                            var o = this.staticProperties[r];
                            o.uploadFunction(n, e, t, o.unsignedByte ? this.staticDataUint32 : this.staticData, this.staticStride, o.offset)
                        }
                        this.staticBuffer.upload()
                    }, i.prototype.destroy = function() {
                        this.dynamicProperties = null, this.dynamicBuffer.destroy(), this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer.destroy(), this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null
                    }, i
                }();
            v.default = s
        }, {
            "../../core/utils/createIndicesForQuads": 123,
            "pixi-gl-core": 15
        }],
        176: [function(w, j, v) {
            "use strict";

            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function O(a) {
                if (a && a.__esModule) return a;
                var h = {};
                if (a != null)
                    for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (h[d] = a[d]);
                return h.default = a, h
            }

            function g(a, h) {
                if (!(a instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function u(a, h) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !h || typeof h != "object" && typeof h != "function" ? a : h
            }

            function f(a, h) {
                if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
                a.prototype = Object.create(h && h.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(a, h) : a.__proto__ = h)
            }
            v.__esModule = !0;
            var c = w("../../core"),
                s = O(c),
                i = w("./ParticleShader"),
                n = b(i),
                e = w("./ParticleBuffer"),
                t = b(e),
                r = w("../../core/utils"),
                o = function(a) {
                    function h(d) {
                        g(this, h);
                        var l = u(this, a.call(this, d));
                        return l.shader = null, l.indexBuffer = null, l.properties = null, l.tempMatrix = new s.Matrix, l.CONTEXT_UID = 0, l
                    }
                    return f(h, a), h.prototype.onContextChange = function() {
                        var d = this.renderer.gl;
                        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.shader = new n.default(d), this.properties = [{
                            attribute: this.shader.attributes.aVertexPosition,
                            size: 2,
                            uploadFunction: this.uploadVertices,
                            offset: 0
                        }, {
                            attribute: this.shader.attributes.aPositionCoord,
                            size: 2,
                            uploadFunction: this.uploadPosition,
                            offset: 0
                        }, {
                            attribute: this.shader.attributes.aRotation,
                            size: 1,
                            uploadFunction: this.uploadRotation,
                            offset: 0
                        }, {
                            attribute: this.shader.attributes.aTextureCoord,
                            size: 2,
                            uploadFunction: this.uploadUvs,
                            offset: 0
                        }, {
                            attribute: this.shader.attributes.aColor,
                            size: 1,
                            unsignedByte: !0,
                            uploadFunction: this.uploadTint,
                            offset: 0
                        }]
                    }, h.prototype.start = function() {
                        this.renderer.bindShader(this.shader)
                    }, h.prototype.render = function(d) {
                        var l = d.children,
                            p = d._maxSize,
                            y = d._batchSize,
                            x = this.renderer,
                            T = l.length;
                        if (T !== 0) {
                            T > p && (T = p);
                            var S = d._glBuffers[x.CONTEXT_UID];
                            S || (S = d._glBuffers[x.CONTEXT_UID] = this.generateBuffers(d));
                            var E = l[0]._texture.baseTexture;
                            this.renderer.setBlendMode(s.utils.correctBlendMode(d.blendMode, E.premultipliedAlpha));
                            var _ = x.gl,
                                m = d.worldTransform.copy(this.tempMatrix);
                            m.prepend(x._activeRenderTarget.projectionMatrix), this.shader.uniforms.projectionMatrix = m.toArray(!0), this.shader.uniforms.uColor = s.utils.premultiplyRgba(d.tintRgb, d.worldAlpha, this.shader.uniforms.uColor, E.premultipliedAlpha), this.shader.uniforms.uSampler = x.bindTexture(E);
                            for (var M = !1, A = 0, I = 0; A < T; A += y, I += 1) {
                                var N = T - A;
                                if (N > y && (N = y), I >= S.length) {
                                    if (!d.autoResize) break;
                                    S.push(this._generateOneMoreBuffer(d))
                                }
                                var P = S[I];
                                P.uploadDynamic(l, A, N);
                                var D = d._bufferUpdateIDs[A] || 0;
                                M = M || P._updateID < D, M && (P._updateID = d._updateID, P.uploadStatic(l, A, N)), x.bindVao(P.vao), P.vao.draw(_.TRIANGLES, 6 * N)
                            }
                        }
                    }, h.prototype.generateBuffers = function(d) {
                        for (var l = this.renderer.gl, p = [], y = d._maxSize, x = d._batchSize, T = d._properties, S = 0; S < y; S += x) p.push(new t.default(l, this.properties, T, x));
                        return p
                    }, h.prototype._generateOneMoreBuffer = function(d) {
                        var l = this.renderer.gl,
                            p = d._batchSize,
                            y = d._properties;
                        return new t.default(l, this.properties, y, p)
                    }, h.prototype.uploadVertices = function(d, l, p, y, x, T) {
                        for (var S = 0, E = 0, _ = 0, m = 0, M = 0; M < p; ++M) {
                            var A = d[l + M],
                                I = A._texture,
                                N = A.scale.x,
                                P = A.scale.y,
                                D = I.trim,
                                C = I.orig;
                            D ? (E = D.x - A.anchor.x * C.width, S = E + D.width, m = D.y - A.anchor.y * C.height, _ = m + D.height) : (S = C.width * (1 - A.anchor.x), E = C.width * -A.anchor.x, _ = C.height * (1 - A.anchor.y), m = C.height * -A.anchor.y), y[T] = E * N, y[T + 1] = m * P, y[T + x] = S * N, y[T + x + 1] = m * P, y[T + 2 * x] = S * N, y[T + 2 * x + 1] = _ * P, y[T + 3 * x] = E * N, y[T + 3 * x + 1] = _ * P, T += 4 * x
                        }
                    }, h.prototype.uploadPosition = function(d, l, p, y, x, T) {
                        for (var S = 0; S < p; S++) {
                            var E = d[l + S].position;
                            y[T] = E.x, y[T + 1] = E.y, y[T + x] = E.x, y[T + x + 1] = E.y, y[T + 2 * x] = E.x, y[T + 2 * x + 1] = E.y, y[T + 3 * x] = E.x, y[T + 3 * x + 1] = E.y, T += 4 * x
                        }
                    }, h.prototype.uploadRotation = function(d, l, p, y, x, T) {
                        for (var S = 0; S < p; S++) {
                            var E = d[l + S].rotation;
                            y[T] = E, y[T + x] = E, y[T + 2 * x] = E, y[T + 3 * x] = E, T += 4 * x
                        }
                    }, h.prototype.uploadUvs = function(d, l, p, y, x, T) {
                        for (var S = 0; S < p; ++S) {
                            var E = d[l + S]._texture._uvs;
                            E ? (y[T] = E.x0, y[T + 1] = E.y0, y[T + x] = E.x1, y[T + x + 1] = E.y1, y[T + 2 * x] = E.x2, y[T + 2 * x + 1] = E.y2, y[T + 3 * x] = E.x3, y[T + 3 * x + 1] = E.y3, T += 4 * x) : (y[T] = 0, y[T + 1] = 0, y[T + x] = 0, y[T + x + 1] = 0, y[T + 2 * x] = 0, y[T + 2 * x + 1] = 0, y[T + 3 * x] = 0, y[T + 3 * x + 1] = 0, T += 4 * x)
                        }
                    }, h.prototype.uploadTint = function(d, l, p, y, x, T) {
                        for (var S = 0; S < p; ++S) {
                            var E = d[l + S],
                                _ = E._texture.baseTexture.premultipliedAlpha,
                                m = E.alpha,
                                M = m < 1 && _ ? (0, r.premultiplyTint)(E._tintRGB, m) : E._tintRGB + (255 * m << 24);
                            y[T] = M, y[T + x] = M, y[T + 2 * x] = M, y[T + 3 * x] = M, T += 4 * x
                        }
                    }, h.prototype.destroy = function() {
                        this.renderer.gl && this.renderer.gl.deleteBuffer(this.indexBuffer), a.prototype.destroy.call(this), this.shader.destroy(), this.indices = null, this.tempMatrix = null
                    }, h
                }(s.ObjectRenderer);
            v.default = o, s.WebGLRenderer.registerPlugin("particle", o)
        }, {
            "../../core": 65,
            "../../core/utils": 125,
            "./ParticleBuffer": 175,
            "./ParticleShader": 177
        }],
        177: [function(w, j, v) {
            "use strict";

            function b(i) {
                return i && i.__esModule ? i : {
                    default: i
                }
            }

            function O(i, n) {
                if (!(i instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function g(i, n) {
                if (!i) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !n || typeof n != "object" && typeof n != "function" ? i : n
            }

            function u(i, n) {
                if (typeof n != "function" && n !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof n);
                i.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: i,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (Object.setPrototypeOf ? Object.setPrototypeOf(i, n) : i.__proto__ = n)
            }
            v.__esModule = !0;
            var f = w("../../core/Shader"),
                c = b(f),
                s = function(i) {
                    function n(e) {
                        return O(this, n), g(this, i.call(this, e, ["attribute vec2 aVertexPosition;", "attribute vec2 aTextureCoord;", "attribute vec4 aColor;", "attribute vec2 aPositionCoord;", "attribute float aRotation;", "uniform mat3 projectionMatrix;", "uniform vec4 uColor;", "varying vec2 vTextureCoord;", "varying vec4 vColor;", "void main(void){", "   float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);", "   float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);", "   vec2 v = vec2(x, y);", "   v = v + aPositionCoord;", "   gl_Position = vec4((projectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);", "   vTextureCoord = aTextureCoord;", "   vColor = aColor * uColor;", "}"].join(`
`), ["varying vec2 vTextureCoord;", "varying vec4 vColor;", "uniform sampler2D uSampler;", "void main(void){", "  vec4 color = texture2D(uSampler, vTextureCoord) * vColor;", "  gl_FragColor = color;", "}"].join(`
`)))
                    }
                    return u(n, i), n
                }(c.default);
            v.default = s
        }, {
            "../../core/Shader": 44
        }],
        178: [function(w, j, v) {
            "use strict";
            Math.sign || (Math.sign = function(b) {
                return b = Number(b), b === 0 || isNaN(b) ? b : b > 0 ? 1 : -1
            })
        }, {}],
        179: [function(w, j, v) {
            "use strict";
            Number.isInteger || (Number.isInteger = function(b) {
                return typeof b == "number" && isFinite(b) && Math.floor(b) === b
            })
        }, {}],
        180: [function(w, j, v) {
            "use strict";

            function b(u) {
                return u && u.__esModule ? u : {
                    default: u
                }
            }
            var O = w("object-assign"),
                g = b(O);
            Object.assign || (Object.assign = g.default)
        }, {
            "object-assign": 6
        }],
        181: [function(w, j, v) {
            "use strict";
            w("./Object.assign"), w("./requestAnimationFrame"), w("./Math.sign"), w("./Number.isInteger"), window.ArrayBuffer || (window.ArrayBuffer = Array), window.Float32Array || (window.Float32Array = Array), window.Uint32Array || (window.Uint32Array = Array), window.Uint16Array || (window.Uint16Array = Array)
        }, {
            "./Math.sign": 178,
            "./Number.isInteger": 179,
            "./Object.assign": 180,
            "./requestAnimationFrame": 182
        }],
        182: [function(w, j, v) {
            (function(b) {
                "use strict";
                var O = 16;
                if (Date.now && Date.prototype.getTime || (Date.now = function() {
                        return new Date().getTime()
                    }), !b.performance || !b.performance.now) {
                    var g = Date.now();
                    b.performance || (b.performance = {}), b.performance.now = function() {
                        return Date.now() - g
                    }
                }
                for (var u = Date.now(), f = ["ms", "moz", "webkit", "o"], c = 0; c < f.length && !b.requestAnimationFrame; ++c) {
                    var s = f[c];
                    b.requestAnimationFrame = b[s + "RequestAnimationFrame"], b.cancelAnimationFrame = b[s + "CancelAnimationFrame"] || b[s + "CancelRequestAnimationFrame"]
                }
                b.requestAnimationFrame || (b.requestAnimationFrame = function(i) {
                    if (typeof i != "function") throw new TypeError(i + "is not a function");
                    var n = Date.now(),
                        e = O + u - n;
                    return e < 0 && (e = 0), u = n, setTimeout(function() {
                        u = Date.now(), i(performance.now())
                    }, e)
                }), b.cancelAnimationFrame || (b.cancelAnimationFrame = function(i) {
                    return clearTimeout(i)
                })
            }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
        }, {}],
        183: [function(w, j, v) {
            "use strict";

            function b(l) {
                return l && l.__esModule ? l : {
                    default: l
                }
            }

            function O(l) {
                if (l && l.__esModule) return l;
                var p = {};
                if (l != null)
                    for (var y in l) Object.prototype.hasOwnProperty.call(l, y) && (p[y] = l[y]);
                return p.default = l, p
            }

            function g(l, p) {
                if (!(l instanceof p)) throw new TypeError("Cannot call a class as a function")
            }

            function u(l, p) {
                var y = !1;
                if (l && l._textures && l._textures.length) {
                    for (var x = 0; x < l._textures.length; x++)
                        if (l._textures[x] instanceof r.Texture) {
                            var T = l._textures[x].baseTexture;
                            p.indexOf(T) === -1 && (p.push(T), y = !0)
                        }
                }
                return y
            }

            function f(l, p) {
                return l instanceof r.BaseTexture && (p.indexOf(l) === -1 && p.push(l), !0)
            }

            function c(l, p) {
                if (l._texture && l._texture instanceof r.Texture) {
                    var y = l._texture.baseTexture;
                    return p.indexOf(y) === -1 && p.push(y), !0
                }
                return !1
            }

            function s(l, p) {
                return p instanceof r.Text && (p.updateText(!0), !0)
            }

            function i(l, p) {
                if (p instanceof r.TextStyle) {
                    var y = p.toFontString();
                    return r.TextMetrics.measureFont(y), !0
                }
                return !1
            }

            function n(l, p) {
                if (l instanceof r.Text) {
                    p.indexOf(l.style) === -1 && p.push(l.style), p.indexOf(l) === -1 && p.push(l);
                    var y = l._texture.baseTexture;
                    return p.indexOf(y) === -1 && p.push(y), !0
                }
                return !1
            }

            function e(l, p) {
                return l instanceof r.TextStyle && (p.indexOf(l) === -1 && p.push(l), !0)
            }
            v.__esModule = !0;
            var t = w("../core"),
                r = O(t),
                o = w("./limiters/CountLimiter"),
                a = b(o),
                h = r.ticker.shared;
            r.settings.UPLOADS_PER_FRAME = 4;
            var d = function() {
                function l(p) {
                    var y = this;
                    g(this, l), this.limiter = new a.default(r.settings.UPLOADS_PER_FRAME), this.renderer = p, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = function() {
                        y.queue && y.prepareItems()
                    }, this.registerFindHook(n), this.registerFindHook(e), this.registerFindHook(u), this.registerFindHook(f), this.registerFindHook(c), this.registerUploadHook(s), this.registerUploadHook(i)
                }
                return l.prototype.upload = function(p, y) {
                    typeof p == "function" && (y = p, p = null), p && this.add(p), this.queue.length ? (y && this.completes.push(y), this.ticking || (this.ticking = !0, h.addOnce(this.tick, this, r.UPDATE_PRIORITY.UTILITY))) : y && y()
                }, l.prototype.tick = function() {
                    setTimeout(this.delayedTick, 0)
                }, l.prototype.prepareItems = function() {
                    for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
                        var p = this.queue[0],
                            y = !1;
                        if (p && !p._destroyed) {
                            for (var x = 0, T = this.uploadHooks.length; x < T; x++)
                                if (this.uploadHooks[x](this.uploadHookHelper, p)) {
                                    this.queue.shift(), y = !0;
                                    break
                                }
                        }
                        y || this.queue.shift()
                    }
                    if (this.queue.length) h.addOnce(this.tick, this, r.UPDATE_PRIORITY.UTILITY);
                    else {
                        this.ticking = !1;
                        var S = this.completes.slice(0);
                        this.completes.length = 0;
                        for (var E = 0, _ = S.length; E < _; E++) S[E]()
                    }
                }, l.prototype.registerFindHook = function(p) {
                    return p && this.addHooks.push(p), this
                }, l.prototype.registerUploadHook = function(p) {
                    return p && this.uploadHooks.push(p), this
                }, l.prototype.add = function(p) {
                    for (var y = 0, x = this.addHooks.length; y < x && !this.addHooks[y](p, this.queue); y++);
                    if (p instanceof r.Container)
                        for (var T = p.children.length - 1; T >= 0; T--) this.add(p.children[T]);
                    return this
                }, l.prototype.destroy = function() {
                    this.ticking && h.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
                }, l
            }();
            v.default = d
        }, {
            "../core": 65,
            "./limiters/CountLimiter": 186
        }],
        184: [function(w, j, v) {
            "use strict";

            function b(o) {
                return o && o.__esModule ? o : {
                    default: o
                }
            }

            function O(o) {
                if (o && o.__esModule) return o;
                var a = {};
                if (o != null)
                    for (var h in o) Object.prototype.hasOwnProperty.call(o, h) && (a[h] = o[h]);
                return a.default = o, a
            }

            function g(o, a) {
                if (!(o instanceof a)) throw new TypeError("Cannot call a class as a function")
            }

            function u(o, a) {
                if (!o) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !a || typeof a != "object" && typeof a != "function" ? o : a
            }

            function f(o, a) {
                if (typeof a != "function" && a !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof a);
                o.prototype = Object.create(a && a.prototype, {
                    constructor: {
                        value: o,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), a && (Object.setPrototypeOf ? Object.setPrototypeOf(o, a) : o.__proto__ = a)
            }

            function c(o, a) {
                if (a instanceof i.BaseTexture) {
                    var h = a.source,
                        d = h.width === 0 ? o.canvas.width : Math.min(o.canvas.width, h.width),
                        l = h.height === 0 ? o.canvas.height : Math.min(o.canvas.height, h.height);
                    return o.ctx.drawImage(h, 0, 0, d, l, 0, 0, o.canvas.width, o.canvas.height), !0
                }
                return !1
            }
            v.__esModule = !0;
            var s = w("../../core"),
                i = O(s),
                n = w("../BasePrepare"),
                e = b(n),
                t = 16,
                r = function(o) {
                    function a(h) {
                        g(this, a);
                        var d = u(this, o.call(this, h));
                        return d.uploadHookHelper = d, d.canvas = document.createElement("canvas"), d.canvas.width = t, d.canvas.height = t, d.ctx = d.canvas.getContext("2d"), d.registerUploadHook(c), d
                    }
                    return f(a, o), a.prototype.destroy = function() {
                        o.prototype.destroy.call(this), this.ctx = null, this.canvas = null
                    }, a
                }(e.default);
            v.default = r, i.CanvasRenderer.registerPlugin("prepare", r)
        }, {
            "../../core": 65,
            "../BasePrepare": 183
        }],
        185: [function(w, j, v) {
            "use strict";

            function b(s) {
                return s && s.__esModule ? s : {
                    default: s
                }
            }
            v.__esModule = !0;
            var O = w("./webgl/WebGLPrepare");
            Object.defineProperty(v, "webgl", {
                enumerable: !0,
                get: function() {
                    return b(O).default
                }
            });
            var g = w("./canvas/CanvasPrepare");
            Object.defineProperty(v, "canvas", {
                enumerable: !0,
                get: function() {
                    return b(g).default
                }
            });
            var u = w("./BasePrepare");
            Object.defineProperty(v, "BasePrepare", {
                enumerable: !0,
                get: function() {
                    return b(u).default
                }
            });
            var f = w("./limiters/CountLimiter");
            Object.defineProperty(v, "CountLimiter", {
                enumerable: !0,
                get: function() {
                    return b(f).default
                }
            });
            var c = w("./limiters/TimeLimiter");
            Object.defineProperty(v, "TimeLimiter", {
                enumerable: !0,
                get: function() {
                    return b(c).default
                }
            })
        }, {
            "./BasePrepare": 183,
            "./canvas/CanvasPrepare": 184,
            "./limiters/CountLimiter": 186,
            "./limiters/TimeLimiter": 187,
            "./webgl/WebGLPrepare": 188
        }],
        186: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                if (!(g instanceof u)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function g(u) {
                    b(this, g), this.maxItemsPerFrame = u, this.itemsLeft = 0
                }
                return g.prototype.beginFrame = function() {
                    this.itemsLeft = this.maxItemsPerFrame
                }, g.prototype.allowedToUpload = function() {
                    return this.itemsLeft-- > 0
                }, g
            }();
            v.default = O
        }, {}],
        187: [function(w, j, v) {
            "use strict";

            function b(g, u) {
                if (!(g instanceof u)) throw new TypeError("Cannot call a class as a function")
            }
            v.__esModule = !0;
            var O = function() {
                function g(u) {
                    b(this, g), this.maxMilliseconds = u, this.frameStart = 0
                }
                return g.prototype.beginFrame = function() {
                    this.frameStart = Date.now()
                }, g.prototype.allowedToUpload = function() {
                    return Date.now() - this.frameStart < this.maxMilliseconds
                }, g
            }();
            v.default = O
        }, {}],
        188: [function(w, j, v) {
            "use strict";

            function b(a) {
                return a && a.__esModule ? a : {
                    default: a
                }
            }

            function O(a) {
                if (a && a.__esModule) return a;
                var h = {};
                if (a != null)
                    for (var d in a) Object.prototype.hasOwnProperty.call(a, d) && (h[d] = a[d]);
                return h.default = a, h
            }

            function g(a, h) {
                if (!(a instanceof h)) throw new TypeError("Cannot call a class as a function")
            }

            function u(a, h) {
                if (!a) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !h || typeof h != "object" && typeof h != "function" ? a : h
            }

            function f(a, h) {
                if (typeof h != "function" && h !== null) throw new TypeError("Super expression must either be null or a function, not " + typeof h);
                a.prototype = Object.create(h && h.prototype, {
                    constructor: {
                        value: a,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }), h && (Object.setPrototypeOf ? Object.setPrototypeOf(a, h) : a.__proto__ = h)
            }

            function c(a, h) {
                return h instanceof e.BaseTexture && (h._glTextures[a.CONTEXT_UID] || a.textureManager.updateTexture(h), !0)
            }

            function s(a, h) {
                return h instanceof e.Graphics && ((h.dirty || h.clearDirty || !h._webGL[a.plugins.graphics.CONTEXT_UID]) && a.plugins.graphics.updateGraphics(h), !0)
            }

            function i(a, h) {
                return a instanceof e.Graphics && (h.push(a), !0)
            }
            v.__esModule = !0;
            var n = w("../../core"),
                e = O(n),
                t = w("../BasePrepare"),
                r = b(t),
                o = function(a) {
                    function h(d) {
                        g(this, h);
                        var l = u(this, a.call(this, d));
                        return l.uploadHookHelper = l.renderer, l.registerFindHook(i), l.registerUploadHook(c), l.registerUploadHook(s), l
                    }
                    return f(h, a), h
                }(r.default);
            v.default = o, e.WebGLRenderer.registerPlugin("prepare", o)
        }, {
            "../../core": 65,
            "../BasePrepare": 183
        }],
        189: [function(w, j, v) {
            (function(b) {
                "use strict";

                function O(A) {
                    if (A && A.__esModule) return A;
                    var I = {};
                    if (A != null)
                        for (var N in A) Object.prototype.hasOwnProperty.call(A, N) && (I[N] = A[N]);
                    return I.default = A, I
                }

                function g(A) {
                    return A && A.__esModule ? A : {
                        default: A
                    }
                }
                v.__esModule = !0, v.loader = v.prepare = v.particles = v.mesh = v.loaders = v.interaction = v.filters = v.extras = v.extract = v.accessibility = void 0;
                var u = w("./polyfill");
                Object.keys(u).forEach(function(A) {
                    A !== "default" && A !== "__esModule" && Object.defineProperty(v, A, {
                        enumerable: !0,
                        get: function() {
                            return u[A]
                        }
                    })
                });
                var f = w("./core");
                Object.keys(f).forEach(function(A) {
                    A !== "default" && A !== "__esModule" && Object.defineProperty(v, A, {
                        enumerable: !0,
                        get: function() {
                            return f[A]
                        }
                    })
                });
                var c = w("./deprecation"),
                    s = g(c),
                    i = w("./accessibility"),
                    n = O(i),
                    e = w("./extract"),
                    t = O(e),
                    r = w("./extras"),
                    o = O(r),
                    a = w("./filters"),
                    h = O(a),
                    d = w("./interaction"),
                    l = O(d),
                    p = w("./loaders"),
                    y = O(p),
                    x = w("./mesh"),
                    T = O(x),
                    S = w("./particles"),
                    E = O(S),
                    _ = w("./prepare"),
                    m = O(_);
                f.utils.mixins.performMixins();
                var M = y.shared || null;
                v.accessibility = n, v.extract = t, v.extras = o, v.filters = h, v.interaction = l, v.loaders = y, v.mesh = T, v.particles = E, v.prepare = m, v.loader = M, typeof s.default == "function" && (0, s.default)(v), b.PIXI = v
            }).call(this, typeof global != "undefined" ? global : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {})
        }, {
            "./accessibility": 42,
            "./core": 65,
            "./deprecation": 131,
            "./extract": 133,
            "./extras": 141,
            "./filters": 153,
            "./interaction": 159,
            "./loaders": 162,
            "./mesh": 171,
            "./particles": 174,
            "./polyfill": 181,
            "./prepare": 185
        }]
    }, {}, [189])(189)
});