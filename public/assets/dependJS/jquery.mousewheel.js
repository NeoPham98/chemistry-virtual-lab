(function(n) {
    typeof define == "function" && define.amd ? define(["jquery"], n) : typeof exports == "object" ? module.exports = n : n(jQuery)
})(function(n) {
    function f(e) {
        var t = e || window.event,
            a = y.call(arguments, 1),
            l = 0,
            o = 0,
            i = 0,
            h = 0,
            p = 0,
            M = 0;
        if (e = n.event.fix(t), e.type = "mousewheel", "detail" in t && (i = t.detail * -1), "wheelDelta" in t && (i = t.wheelDelta), "wheelDeltaY" in t && (i = t.wheelDeltaY), "wheelDeltaX" in t && (o = t.wheelDeltaX * -1), "axis" in t && t.axis === t.HORIZONTAL_AXIS && (o = i * -1, i = 0), l = i === 0 ? o : i, "deltaY" in t && (i = t.deltaY * -1, l = i), "deltaX" in t && (o = t.deltaX, i === 0 && (l = o * -1)), i !== 0 || o !== 0) {
            if (t.deltaMode === 1) {
                var c = n.data(this, "mousewheel-line-height");
                l *= c, i *= c, o *= c
            } else if (t.deltaMode === 2) {
                var m = n.data(this, "mousewheel-page-height");
                l *= m, i *= m, o *= m
            }
            if (h = Math.max(Math.abs(i), Math.abs(o)), (!s || h < s) && (s = h, g(t, h) && (s /= 40)), g(t, h) && (l /= 40, o /= 40, i /= 40), l = Math[l >= 1 ? "floor" : "ceil"](l / s), o = Math[o >= 1 ? "floor" : "ceil"](o / s), i = Math[i >= 1 ? "floor" : "ceil"](i / s), u.settings.normalizeOffset && this.getBoundingClientRect) {
                var D = this.getBoundingClientRect();
                p = e.clientX - D.left, M = e.clientY - D.top
            }
            return e.deltaX = o, e.deltaY = i, e.deltaFactor = s, e.offsetX = p, e.offsetY = M, e.deltaMode = 0, a.unshift(e, l, o, i), d && clearTimeout(d), d = setTimeout(x, 200), (n.event.dispatch || n.event.handle).apply(this, a)
        }
    }

    function x() {
        s = null
    }

    function g(e, t) {
        return u.settings.adjustOldDeltas && e.type === "mousewheel" && t % 120 == 0
    }
    var d, s, w = ["wheel", "mousewheel", "DOMMouseScroll", "MozMousePixelScroll"],
        r = "onwheel" in document || document.documentMode >= 9 ? ["wheel"] : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
        y = Array.prototype.slice;
    if (n.event.fixHooks)
        for (var v = w.length; v;) n.event.fixHooks[w[--v]] = n.event.mouseHooks;
    var u = n.event.special.mousewheel = {
        version: "3.1.12",
        setup: function() {
            if (this.addEventListener)
                for (var e = r.length; e;) this.addEventListener(r[--e], f, !1);
            else this.onmousewheel = f;
            n.data(this, "mousewheel-line-height", u.getLineHeight(this)), n.data(this, "mousewheel-page-height", u.getPageHeight(this))
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = r.length; e;) this.removeEventListener(r[--e], f, !1);
            else this.onmousewheel = null;
            n.removeData(this, "mousewheel-line-height"), n.removeData(this, "mousewheel-page-height")
        },
        getLineHeight: function(e) {
            var t = n(e),
                a = t["offsetParent" in n.fn ? "offsetParent" : "parent"]();
            return a.length || (a = n("body")), parseInt(a.css("fontSize"), 10) || parseInt(t.css("fontSize"), 10) || 16
        },
        getPageHeight: function(e) {
            return n(e).height()
        },
        settings: {
            adjustOldDeltas: !0,
            normalizeOffset: !0
        }
    };
    n.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
});