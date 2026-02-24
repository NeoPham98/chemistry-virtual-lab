(function(f) {
    if (typeof exports == "object" && typeof module != "undefined") module.exports = f();
    else if (typeof define == "function" && define.amd) define([], f);
    else {
        var _;
        _ = typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : this, _.pixiParticles = f()
    }
})(function() {
    return function() {
        function f(_, c, d) {
            function u(e, h) {
                if (!c[e]) {
                    if (!_[e]) {
                        var s = typeof require == "function" && require;
                        if (!h && s) return s(e, !0);
                        if (l) return l(e, !0);
                        var i = new Error("Cannot find module '" + e + "'");
                        throw i.code = "MODULE_NOT_FOUND", i
                    }
                    var t = c[e] = {
                        exports: {}
                    };
                    _[e][0].call(t.exports, function(a) {
                        var n = _[e][1][a];
                        return u(n || a)
                    }, t, t.exports, f, _, c, d)
                }
                return c[e].exports
            }
            for (var l = typeof require == "function" && require, r = 0; r < d.length; r++) u(d[r]);
            return u
        }
        return f
    }()({
        1: [function(f, _, c) {
            "use strict";
            var d = this && this.__extends || function() {
                var e = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(h, s) {
                    h.__proto__ = s
                } || function(h, s) {
                    for (var i in s) s.hasOwnProperty(i) && (h[i] = s[i])
                };
                return function(h, s) {
                    function i() {
                        this.constructor = h
                    }
                    e(h, s), h.prototype = s === null ? Object.create(s) : (i.prototype = s.prototype, new i)
                }
            }();
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var u = f("./Particle"),
                l = PIXI.Texture,
                r = function(e) {
                    function h(s) {
                        var i = e.call(this, s) || this;
                        return i.textures = null, i.duration = 0, i.framerate = 0, i.elapsed = 0, i.loop = !1, i
                    }
                    return d(h, e), h.prototype.init = function() {
                        this.Particle_init(), this.elapsed = 0, this.framerate < 0 && (this.duration = this.maxLife, this.framerate = this.textures.length / this.duration)
                    }, h.prototype.applyArt = function(s) {
                        this.textures = s.textures, this.framerate = s.framerate, this.duration = s.duration, this.loop = s.loop
                    }, h.prototype.update = function(s) {
                        var i = this.Particle_update(s);
                        if (i >= 0) {
                            this.elapsed += s, this.elapsed > this.duration && (this.loop ? this.elapsed = this.elapsed % this.duration : this.elapsed = this.duration - 1e-6);
                            var t = this.elapsed * this.framerate + 1e-7 | 0;
                            this.texture = this.textures[t] || PIXI.Texture.EMPTY
                        }
                        return i
                    }, h.prototype.destroy = function() {
                        this.Particle_destroy(), this.textures = null
                    }, h.parseArt = function(s) {
                        for (var i, t, a, n, o, m = [], y = 0; y < s.length; ++y) {
                            i = s[y], m[y] = t = {}, t.textures = o = [], a = i.textures;
                            for (var x = 0; x < a.length; ++x)
                                if (n = a[x], typeof n == "string") o.push(l.fromImage(n));
                                else if (n instanceof l) o.push(n);
                            else {
                                var P = n.count || 1;
                                for (n = typeof n.texture == "string" ? l.fromImage(n.texture) : n.texture; P > 0; --P) o.push(n)
                            }
                            i.framerate == "matchLife" ? (t.framerate = -1, t.duration = 0, t.loop = !1) : (t.loop = !!i.loop, t.framerate = i.framerate > 0 ? i.framerate : 60, t.duration = o.length / t.framerate)
                        }
                        return m
                    }, h
                }(u.default);
            c.default = r
        }, {
            "./Particle": 3
        }],
        2: [function(f, _, c) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var d = f("./ParticleUtils"),
                u = f("./Particle"),
                l = f("./PropertyNode"),
                r = PIXI.ticker.shared,
                e = new PIXI.Point,
                h = function() {
                    function s(i, t, a) {
                        this._particleConstructor = u.default, this.particleImages = null, this.startAlpha = null, this.startSpeed = null, this.minimumSpeedMultiplier = 1, this.acceleration = null, this.maxSpeed = NaN, this.startScale = null, this.minimumScaleMultiplier = 1, this.startColor = null, this.minLifetime = 0, this.maxLifetime = 0, this.minStartRotation = 0, this.maxStartRotation = 0, this.noRotation = !1, this.minRotationSpeed = 0, this.maxRotationSpeed = 0, this.particleBlendMode = 0, this.customEase = null, this.extraData = null, this._frequency = 1, this.spawnChance = 1, this.maxParticles = 1e3, this.emitterLifetime = -1, this.spawnPos = null, this.spawnType = null, this._spawnFunc = null, this.spawnRect = null, this.spawnCircle = null, this.particlesPerWave = 1, this.particleSpacing = 0, this.angleStart = 0, this.rotation = 0, this.ownerPos = null, this._prevEmitterPos = null, this._prevPosIsValid = !1, this._posChanged = !1, this._parent = null, this.addAtBack = !1, this.particleCount = 0, this._emit = !1, this._spawnTimer = 0, this._emitterLife = -1, this._activeParticlesFirst = null, this._activeParticlesLast = null, this._poolFirst = null, this._origConfig = null, this._origArt = null, this._autoUpdate = !1, this._destroyWhenComplete = !1, this._completeCallback = null, this.parent = i, t && a && this.init(t, a), this.recycle = this.recycle, this.update = this.update, this.rotate = this.rotate, this.updateSpawnPos = this.updateSpawnPos, this.updateOwnerPos = this.updateOwnerPos
                    }
                    return Object.defineProperty(s.prototype, "frequency", {
                        get: function() {
                            return this._frequency
                        },
                        set: function(i) {
                            typeof i == "number" && i > 0 ? this._frequency = i : this._frequency = 1
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(s.prototype, "particleConstructor", {
                        get: function() {
                            return this._particleConstructor
                        },
                        set: function(i) {
                            if (i != this._particleConstructor) {
                                this._particleConstructor = i, this.cleanup();
                                for (var t = this._poolFirst; t; t = t.next) t.destroy();
                                this._poolFirst = null, this._origConfig && this._origArt && this.init(this._origArt, this._origConfig)
                            }
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(s.prototype, "parent", {
                        get: function() {
                            return this._parent
                        },
                        set: function(i) {
                            this.cleanup(), this._parent = i
                        },
                        enumerable: !0,
                        configurable: !0
                    }), s.prototype.init = function(i, t) {
                        if (i && t) {
                            this.cleanup(), this._origConfig = t, this._origArt = i, i = Array.isArray(i) ? i.slice() : [i];
                            var a = this._particleConstructor;
                            this.particleImages = a.parseArt ? a.parseArt(i) : i, t.alpha ? this.startAlpha = l.default.createList(t.alpha) : this.startAlpha = new l.default(1, 0), t.speed ? (this.startSpeed = l.default.createList(t.speed), this.minimumSpeedMultiplier = t.speed.minimumSpeedMultiplier || 1) : (this.minimumSpeedMultiplier = 1, this.startSpeed = new l.default(0, 0));
                            var n = t.acceleration;
                            n && (n.x || n.y) ? (this.startSpeed.next = null, this.acceleration = new PIXI.Point(n.x, n.y), this.maxSpeed = t.maxSpeed || NaN) : this.acceleration = new PIXI.Point, t.scale ? (this.startScale = l.default.createList(t.scale), this.minimumScaleMultiplier = t.scale.minimumScaleMultiplier || 1) : (this.startScale = new l.default(1, 0), this.minimumScaleMultiplier = 1), t.color ? this.startColor = l.default.createList(t.color) : this.startColor = new l.default({
                                r: 255,
                                g: 255,
                                b: 255
                            }, 0), t.startRotation ? (this.minStartRotation = t.startRotation.min, this.maxStartRotation = t.startRotation.max) : this.minStartRotation = this.maxStartRotation = 0, t.noRotation && (this.minStartRotation || this.maxStartRotation) ? this.noRotation = !!t.noRotation : this.noRotation = !1, t.rotationSpeed ? (this.minRotationSpeed = t.rotationSpeed.min, this.maxRotationSpeed = t.rotationSpeed.max) : this.minRotationSpeed = this.maxRotationSpeed = 0, this.minLifetime = t.lifetime.min, this.maxLifetime = t.lifetime.max, this.particleBlendMode = d.default.getBlendMode(t.blendMode), t.ease ? this.customEase = typeof t.ease == "function" ? t.ease : d.default.generateEase(t.ease) : this.customEase = null, a.parseData ? this.extraData = a.parseData(t.extraData) : this.extraData = t.extraData || null, this.spawnRect = this.spawnCircle = null, this.particlesPerWave = 1, t.particlesPerWave && t.particlesPerWave > 1 && (this.particlesPerWave = t.particlesPerWave), this.particleSpacing = 0, this.angleStart = 0;
                            var o;
                            switch (t.spawnType) {
                                case "rect":
                                    this.spawnType = "rect", this._spawnFunc = this._spawnRect;
                                    var m = t.spawnRect;
                                    this.spawnRect = new PIXI.Rectangle(m.x, m.y, m.w, m.h);
                                    break;
                                case "circle":
                                    this.spawnType = "circle", this._spawnFunc = this._spawnCircle, o = t.spawnCircle, this.spawnCircle = new PIXI.Circle(o.x, o.y, o.r);
                                    break;
                                case "ring":
                                    this.spawnType = "ring", this._spawnFunc = this._spawnRing, o = t.spawnCircle, this.spawnCircle = new PIXI.Circle(o.x, o.y, o.r), this.spawnCircle.minRadius = o.minR;
                                    break;
                                case "burst":
                                    this.spawnType = "burst", this._spawnFunc = this._spawnBurst, this.particleSpacing = t.particleSpacing, this.angleStart = t.angleStart ? t.angleStart : 0;
                                    break;
                                case "point":
                                    this.spawnType = "point", this._spawnFunc = this._spawnPoint;
                                    break;
                                default:
                                    this.spawnType = "point", this._spawnFunc = this._spawnPoint
                            }
                            this.frequency = t.frequency, this.spawnChance = typeof t.spawnChance == "number" && t.spawnChance > 0 ? t.spawnChance : 1, this.emitterLifetime = t.emitterLifetime || -1, this.maxParticles = t.maxParticles > 0 ? t.maxParticles : 1e3, this.addAtBack = !!t.addAtBack, this.rotation = 0, this.ownerPos = new PIXI.Point, this.spawnPos = new PIXI.Point(t.pos.x, t.pos.y), this._prevEmitterPos = this.spawnPos.clone(), this._prevPosIsValid = !1, this._spawnTimer = 0, this.emit = t.emit === void 0 || !!t.emit, this.autoUpdate = t.autoUpdate !== void 0 && !!t.autoUpdate
                        }
                    }, s.prototype.recycle = function(i) {
                        i.next && (i.next.prev = i.prev), i.prev && (i.prev.next = i.next), i == this._activeParticlesLast && (this._activeParticlesLast = i.prev), i == this._activeParticlesFirst && (this._activeParticlesFirst = i.next), i.prev = null, i.next = this._poolFirst, this._poolFirst = i, i.parent && i.parent.removeChild(i), --this.particleCount
                    }, s.prototype.rotate = function(i) {
                        if (this.rotation != i) {
                            var t = i - this.rotation;
                            this.rotation = i, d.default.rotatePoint(t, this.spawnPos), this._posChanged = !0
                        }
                    }, s.prototype.updateSpawnPos = function(i, t) {
                        this._posChanged = !0, this.spawnPos.x = i, this.spawnPos.y = t
                    }, s.prototype.updateOwnerPos = function(i, t) {
                        this._posChanged = !0, this.ownerPos.x = i, this.ownerPos.y = t
                    }, s.prototype.resetPositionTracking = function() {
                        this._prevPosIsValid = !1
                    }, Object.defineProperty(s.prototype, "emit", {
                        get: function() {
                            return this._emit
                        },
                        set: function(i) {
                            this._emit = !!i, this._emitterLife = this.emitterLifetime
                        },
                        enumerable: !0,
                        configurable: !0
                    }), Object.defineProperty(s.prototype, "autoUpdate", {
                        get: function() {
                            return this._autoUpdate
                        },
                        set: function(i) {
                            this._autoUpdate && !i ? r.remove(this.update, this) : !this._autoUpdate && i && r.add(this.update, this), this._autoUpdate = !!i
                        },
                        enumerable: !0,
                        configurable: !0
                    }), s.prototype.playOnceAndDestroy = function(i) {
                        this.autoUpdate = !0, this.emit = !0, this._destroyWhenComplete = !0, this._completeCallback = i
                    }, s.prototype.playOnce = function(i) {
                        this.emit = !0, this._completeCallback = i
                    }, s.prototype.update = function(i) {
                        if (this._autoUpdate && (i = i / PIXI.settings.TARGET_FPMS / 1e3), this._parent) {
                            var t, a, n;
                            for (a = this._activeParticlesFirst; a; a = n) n = a.next, a.update(i);
                            var o, m;
                            this._prevPosIsValid && (o = this._prevEmitterPos.x, m = this._prevEmitterPos.y);
                            var y = this.ownerPos.x + this.spawnPos.x,
                                x = this.ownerPos.y + this.spawnPos.y;
                            if (this._emit)
                                for (this._spawnTimer -= i; this._spawnTimer <= 0;) {
                                    if (this._emitterLife > 0 && (this._emitterLife -= this._frequency, this._emitterLife <= 0)) {
                                        this._spawnTimer = 0, this._emitterLife = 0, this.emit = !1;
                                        break
                                    }
                                    if (this.particleCount >= this.maxParticles) this._spawnTimer += this._frequency;
                                    else {
                                        var P = void 0;
                                        if (P = this.minLifetime == this.maxLifetime ? this.minLifetime : Math.random() * (this.maxLifetime - this.minLifetime) + this.minLifetime, -this._spawnTimer < P) {
                                            var w = void 0,
                                                S = void 0;
                                            if (this._prevPosIsValid && this._posChanged) {
                                                var g = 1 + this._spawnTimer / i;
                                                w = (y - o) * g + o, S = (x - m) * g + m
                                            } else w = y, S = x;
                                            t = 0;
                                            for (var R = Math.min(this.particlesPerWave, this.maxParticles - this.particleCount); t < R; ++t)
                                                if (!(this.spawnChance < 1 && Math.random() >= this.spawnChance)) {
                                                    var p = void 0;
                                                    if (this._poolFirst ? (p = this._poolFirst, this._poolFirst = this._poolFirst.next, p.next = null) : p = new this.particleConstructor(this), this.particleImages.length > 1 ? p.applyArt(this.particleImages[Math.floor(Math.random() * this.particleImages.length)]) : p.applyArt(this.particleImages[0]), p.alphaList.reset(this.startAlpha), this.minimumSpeedMultiplier != 1 && (p.speedMultiplier = Math.random() * (1 - this.minimumSpeedMultiplier) + this.minimumSpeedMultiplier), p.speedList.reset(this.startSpeed), p.acceleration.x = this.acceleration.x, p.acceleration.y = this.acceleration.y, p.maxSpeed = this.maxSpeed, this.minimumScaleMultiplier != 1 && (p.scaleMultiplier = Math.random() * (1 - this.minimumScaleMultiplier) + this.minimumScaleMultiplier), p.scaleList.reset(this.startScale), p.colorList.reset(this.startColor), this.minRotationSpeed == this.maxRotationSpeed ? p.rotationSpeed = this.minRotationSpeed : p.rotationSpeed = Math.random() * (this.maxRotationSpeed - this.minRotationSpeed) + this.minRotationSpeed, p.noRotation = this.noRotation, p.maxLife = P, p.blendMode = this.particleBlendMode, p.ease = this.customEase, p.extraData = this.extraData, this._spawnFunc(p, w, S, t), p.init(), p.update(-this._spawnTimer), p.parent) {
                                                        var v = this._parent.children;
                                                        if (v[0] == p) v.shift();
                                                        else if (v[v.length - 1] == p) v.pop();
                                                        else {
                                                            var b = v.indexOf(p);
                                                            v.splice(b, 1)
                                                        }
                                                        this.addAtBack ? v.unshift(p) : v.push(p)
                                                    } else this.addAtBack ? this._parent.addChildAt(p, 0) : this._parent.addChild(p);
                                                    this._activeParticlesLast ? (this._activeParticlesLast.next = p, p.prev = this._activeParticlesLast, this._activeParticlesLast = p) : this._activeParticlesLast = this._activeParticlesFirst = p, ++this.particleCount
                                                }
                                        }
                                        this._spawnTimer += this._frequency
                                    }
                                }
                            this._posChanged && (this._prevEmitterPos.x = y, this._prevEmitterPos.y = x, this._prevPosIsValid = !0, this._posChanged = !1), this._emit || this._activeParticlesFirst || (this._completeCallback && this._completeCallback(), this._destroyWhenComplete && this.destroy())
                        }
                    }, s.prototype._spawnPoint = function(i, t, a) {
                        this.minStartRotation == this.maxStartRotation ? i.rotation = this.minStartRotation + this.rotation : i.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation, i.position.x = t, i.position.y = a
                    }, s.prototype._spawnRect = function(i, t, a) {
                        this.minStartRotation == this.maxStartRotation ? i.rotation = this.minStartRotation + this.rotation : i.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation, e.x = Math.random() * this.spawnRect.width + this.spawnRect.x, e.y = Math.random() * this.spawnRect.height + this.spawnRect.y, this.rotation !== 0 && d.default.rotatePoint(this.rotation, e), i.position.x = t + e.x, i.position.y = a + e.y
                    }, s.prototype._spawnCircle = function(i, t, a) {
                        this.minStartRotation == this.maxStartRotation ? i.rotation = this.minStartRotation + this.rotation : i.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation, e.x = Math.random() * this.spawnCircle.radius, e.y = 0, d.default.rotatePoint(360 * Math.random(), e), e.x += this.spawnCircle.x, e.y += this.spawnCircle.y, this.rotation !== 0 && d.default.rotatePoint(this.rotation, e), i.position.x = t + e.x, i.position.y = a + e.y
                    }, s.prototype._spawnRing = function(i, t, a) {
                        var n = this.spawnCircle;
                        this.minStartRotation == this.maxStartRotation ? i.rotation = this.minStartRotation + this.rotation : i.rotation = Math.random() * (this.maxStartRotation - this.minStartRotation) + this.minStartRotation + this.rotation, n.minRadius == n.radius ? e.x = Math.random() * (n.radius - n.minRadius) + n.minRadius : e.x = n.radius, e.y = 0;
                        var o = 360 * Math.random();
                        i.rotation += o, d.default.rotatePoint(o, e), e.x += this.spawnCircle.x, e.y += this.spawnCircle.y, this.rotation !== 0 && d.default.rotatePoint(this.rotation, e), i.position.x = t + e.x, i.position.y = a + e.y
                    }, s.prototype._spawnBurst = function(i, t, a, n) {
                        this.particleSpacing === 0 ? i.rotation = 360 * Math.random() : i.rotation = this.angleStart + this.particleSpacing * n + this.rotation, i.position.x = t, i.position.y = a
                    }, s.prototype.cleanup = function() {
                        var i, t;
                        for (i = this._activeParticlesFirst; i; i = t) t = i.next, this.recycle(i), i.parent && i.parent.removeChild(i);
                        this._activeParticlesFirst = this._activeParticlesLast = null, this.particleCount = 0
                    }, s.prototype.destroy = function() {
                        this.autoUpdate = !1, this.cleanup();
                        for (var i, t = this._poolFirst; t; t = i) i = t.next, t.destroy();
                        this._poolFirst = this._parent = this.particleImages = this.spawnPos = this.ownerPos = this.startColor = this.startScale = this.startAlpha = this.startSpeed = this.customEase = this._completeCallback = null
                    }, s
                }();
            c.default = h
        }, {
            "./Particle": 3,
            "./ParticleUtils": 4,
            "./PropertyNode": 7
        }],
        3: [function(f, _, c) {
            "use strict";
            var d = this && this.__extends || function() {
                var h = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(s, i) {
                    s.__proto__ = i
                } || function(s, i) {
                    for (var t in i) i.hasOwnProperty(t) && (s[t] = i[t])
                };
                return function(s, i) {
                    function t() {
                        this.constructor = s
                    }
                    h(s, i), s.prototype = i === null ? Object.create(i) : (t.prototype = i.prototype, new t)
                }
            }();
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var u = f("./ParticleUtils"),
                l = f("./PropertyList"),
                r = PIXI.Sprite,
                e = function(h) {
                    function s(i) {
                        var t = h.call(this) || this;
                        return t.emitter = i, t.anchor.x = t.anchor.y = .5, t.velocity = new PIXI.Point, t.maxLife = 0, t.age = 0, t.ease = null, t.extraData = null, t.alphaList = new l.default, t.speedList = new l.default, t.speedMultiplier = 1, t.acceleration = new PIXI.Point, t.maxSpeed = NaN, t.scaleList = new l.default, t.scaleMultiplier = 1, t.colorList = new l.default(!0), t._doAlpha = !1, t._doScale = !1, t._doSpeed = !1, t._doAcceleration = !1, t._doColor = !1, t._doNormalMovement = !1, t._oneOverLife = 0, t.next = null, t.prev = null, t.init = t.init, t.Particle_init = s.prototype.init, t.update = t.update, t.Particle_update = s.prototype.update, t.Sprite_destroy = h.prototype.destroy, t.Particle_destroy = s.prototype.destroy, t.applyArt = t.applyArt, t.kill = t.kill, t
                    }
                    return d(s, h), s.prototype.init = function() {
                        this.age = 0, this.velocity.x = this.speedList.current.value * this.speedMultiplier, this.velocity.y = 0, u.default.rotatePoint(this.rotation, this.velocity), this.noRotation ? this.rotation = 0 : this.rotation *= u.default.DEG_TO_RADS, this.rotationSpeed *= u.default.DEG_TO_RADS, this.alpha = this.alphaList.current.value, this.scale.x = this.scale.y = this.scaleList.current.value, this._doAlpha = !!this.alphaList.current.next, this._doSpeed = !!this.speedList.current.next, this._doScale = !!this.scaleList.current.next, this._doColor = !!this.colorList.current.next, this._doAcceleration = this.acceleration.x !== 0 || this.acceleration.y !== 0, this._doNormalMovement = this._doSpeed || this.speedList.current.value !== 0 || this._doAcceleration, this._oneOverLife = 1 / this.maxLife;
                        var i = this.colorList.current.value;
                        this.tint = u.default.combineRGBComponents(i.r, i.g, i.b), this.visible = !0
                    }, s.prototype.applyArt = function(i) {
                        this.texture = i || PIXI.Texture.EMPTY
                    }, s.prototype.update = function(i) {
                        if (this.age += i, this.age >= this.maxLife) return this.kill(), -1;
                        var t = this.age * this._oneOverLife;
                        if (this.ease && (t = this.ease.length == 4 ? this.ease(t, 0, 1, 1) : this.ease(t)), this._doAlpha && (this.alpha = this.alphaList.interpolate(t)), this._doScale) {
                            var a = this.scaleList.interpolate(t) * this.scaleMultiplier;
                            this.scale.x = this.scale.y = a
                        }
                        if (this._doNormalMovement) {
                            if (this._doSpeed) {
                                var n = this.speedList.interpolate(t) * this.speedMultiplier;
                                u.default.normalize(this.velocity), u.default.scaleBy(this.velocity, n)
                            } else if (this._doAcceleration && (this.velocity.x += this.acceleration.x * i, this.velocity.y += this.acceleration.y * i, this.maxSpeed)) {
                                var o = u.default.length(this.velocity);
                                o > this.maxSpeed && u.default.scaleBy(this.velocity, this.maxSpeed / o)
                            }
                            this.position.x += this.velocity.x * i, this.position.y += this.velocity.y * i
                        }
                        return this._doColor && (this.tint = this.colorList.interpolate(t)), this.rotationSpeed !== 0 ? this.rotation += this.rotationSpeed * i : this.acceleration && !this.noRotation && (this.rotation = Math.atan2(this.velocity.y, this.velocity.x)), t
                    }, s.prototype.kill = function() {
                        this.emitter.recycle(this)
                    }, s.prototype.destroy = function() {
                        this.parent && this.parent.removeChild(this), this.Sprite_destroy(), this.emitter = this.velocity = this.colorList = this.scaleList = this.alphaList = this.speedList = this.ease = this.next = this.prev = null
                    }, s.parseArt = function(i) {
                        var t;
                        for (t = i.length; t >= 0; --t) typeof i[t] == "string" && (i[t] = PIXI.Texture.fromImage(i[t]));
                        if (u.default.verbose) {
                            for (t = i.length - 1; t > 0; --t)
                                if (i[t].baseTexture != i[t - 1].baseTexture) {
                                    window.console && console.warn("PixiParticles: using particle textures from different images may hinder performance in WebGL");
                                    break
                                }
                        }
                        return i
                    }, s.parseData = function(i) {
                        return i
                    }, s
                }(r);
            c.default = e
        }, {
            "./ParticleUtils": 4,
            "./PropertyList": 6
        }],
        4: [function(f, _, c) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var d = PIXI.BLEND_MODES,
                u = f("./PropertyNode"),
                l = {
                    verbose: !1,
                    DEG_TO_RADS: Math.PI / 180,
                    rotatePoint: function(r, e) {
                        if (r) {
                            r *= l.DEG_TO_RADS;
                            var h = Math.sin(r),
                                s = Math.cos(r),
                                i = e.x * s - e.y * h,
                                t = e.x * h + e.y * s;
                            e.x = i, e.y = t
                        }
                    },
                    combineRGBComponents: function(r, e, h) {
                        return r << 16 | e << 8 | h
                    },
                    normalize: function(r) {
                        var e = 1 / l.length(r);
                        r.x *= e, r.y *= e
                    },
                    scaleBy: function(r, e) {
                        r.x *= e, r.y *= e
                    },
                    length: function(r) {
                        return Math.sqrt(r.x * r.x + r.y * r.y)
                    },
                    hexToRGB: function(r, e) {
                        e || (e = {}), r.charAt(0) == "#" ? r = r.substr(1) : r.indexOf("0x") === 0 && (r = r.substr(2));
                        var h;
                        return r.length == 8 && (h = r.substr(0, 2), r = r.substr(2)), e.r = parseInt(r.substr(0, 2), 16), e.g = parseInt(r.substr(2, 2), 16), e.b = parseInt(r.substr(4, 2), 16), h && (e.a = parseInt(h, 16)), e
                    },
                    generateEase: function(r) {
                        var e = r.length,
                            h = 1 / e;
                        return function(s) {
                            var i, t, a = e * s | 0;
                            return i = (s - a * h) * e, t = r[a] || r[e - 1], t.s + i * (2 * (1 - i) * (t.cp - t.s) + i * (t.e - t.s))
                        }
                    },
                    getBlendMode: function(r) {
                        if (!r) return d.NORMAL;
                        for (r = r.toUpperCase(); r.indexOf(" ") >= 0;) r = r.replace(" ", "_");
                        return d[r] || d.NORMAL
                    },
                    createSteppedGradient: function(r, e) {
                        e === void 0 && (e = 10), (typeof e != "number" || e <= 0) && (e = 10);
                        var h = new u.default(r[0].value, r[0].time);
                        h.isStepped = !0;
                        for (var s = h, i = r[0], t = 1, a = r[t], n = 1; n < e; ++n) {
                            for (var o = n / e; o > a.time;) i = a, a = r[++t];
                            o = (o - i.time) / (a.time - i.time);
                            var m = l.hexToRGB(i.value),
                                y = l.hexToRGB(a.value),
                                x = {};
                            x.r = (y.r - m.r) * o + m.r, x.g = (y.g - m.g) * o + m.g, x.b = (y.b - m.b) * o + m.b, s.next = new u.default(x, n / e), s = s.next
                        }
                        return h
                    }
                };
            c.default = l
        }, {
            "./PropertyNode": 7
        }],
        5: [function(f, _, c) {
            "use strict";
            var d = this && this.__extends || function() {
                var t = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(a, n) {
                    a.__proto__ = n
                } || function(a, n) {
                    for (var o in n) n.hasOwnProperty(o) && (a[o] = n[o])
                };
                return function(a, n) {
                    function o() {
                        this.constructor = a
                    }
                    t(a, n), a.prototype = n === null ? Object.create(n) : (o.prototype = n.prototype, new o)
                }
            }();
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var u = f("./ParticleUtils"),
                l = f("./Particle"),
                r = new PIXI.Point,
                e = ["pow", "sqrt", "abs", "floor", "round", "ceil", "E", "PI", "sin", "cos", "tan", "asin", "acos", "atan", "atan2", "log"],
                h = new RegExp(["[01234567890\\.\\*\\-\\+\\/\\(\\)x ,]"].concat(e).join("|"), "g"),
                s = function(t) {
                    for (var a = t.match(h), n = a.length - 1; n >= 0; --n) e.indexOf(a[n]) >= 0 && (a[n] = "Math." + a[n]);
                    return t = a.join(""), new Function("x", "return " + t + ";")
                },
                i = function(t) {
                    function a(n) {
                        var o = t.call(this, n) || this;
                        return o.path = null, o.initialRotation = 0, o.initialPosition = new PIXI.Point, o.movement = 0, o
                    }
                    return d(a, t), a.prototype.init = function() {
                        this.initialRotation = this.rotation, this.Particle_init(), this.path = this.extraData.path, this._doNormalMovement = !this.path, this.movement = 0, this.initialPosition.x = this.position.x, this.initialPosition.y = this.position.y
                    }, a.prototype.update = function(n) {
                        var o = this.Particle_update(n);
                        if (o >= 0 && this.path) {
                            var m = this.speedList.interpolate(o) * this.speedMultiplier;
                            this.movement += m * n, r.x = this.movement, r.y = this.path(this.movement), u.default.rotatePoint(this.initialRotation, r), this.position.x = this.initialPosition.x + r.x, this.position.y = this.initialPosition.y + r.y
                        }
                        return o
                    }, a.prototype.destroy = function() {
                        this.Particle_destroy(), this.path = this.initialPosition = null
                    }, a.parseArt = function(n) {
                        return l.default.parseArt(n)
                    }, a.parseData = function(n) {
                        var o = {};
                        if (n && n.path) try {
                            o.path = s(n.path)
                        } catch (m) {
                            u.default.verbose && console.error("PathParticle: error in parsing path expression"), o.path = null
                        } else u.default.verbose && console.error("PathParticle requires a path string in extraData!"), o.path = null;
                        return o
                    }, a
                }(l.default);
            c.default = i
        }, {
            "./Particle": 3,
            "./ParticleUtils": 4
        }],
        6: [function(f, _, c) {
            "use strict";

            function d(t) {
                return this.ease && (t = this.ease(t)), (this.next.value - this.current.value) * t + this.current.value
            }

            function u(t) {
                this.ease && (t = this.ease(t));
                var a = this.current.value,
                    n = this.next.value,
                    o = (n.r - a.r) * t + a.r,
                    m = (n.g - a.g) * t + a.g,
                    y = (n.b - a.b) * t + a.b;
                return s.default.combineRGBComponents(o, m, y)
            }

            function l(t) {
                for (this.ease && (t = this.ease(t)); t > this.next.time;) this.current = this.next, this.next = this.next.next;
                return t = (t - this.current.time) / (this.next.time - this.current.time), (this.next.value - this.current.value) * t + this.current.value
            }

            function r(t) {
                for (this.ease && (t = this.ease(t)); t > this.next.time;) this.current = this.next, this.next = this.next.next;
                t = (t - this.current.time) / (this.next.time - this.current.time);
                var a = this.current.value,
                    n = this.next.value,
                    o = (n.r - a.r) * t + a.r,
                    m = (n.g - a.g) * t + a.g,
                    y = (n.b - a.b) * t + a.b;
                return s.default.combineRGBComponents(o, m, y)
            }

            function e(t) {
                for (this.ease && (t = this.ease(t)); this.next && t > this.next.time;) this.current = this.next, this.next = this.next.next;
                return this.current.value
            }

            function h(t) {
                for (this.ease && (t = this.ease(t)); this.next && t > this.next.time;) this.current = this.next, this.next = this.next.next;
                var a = this.current.value;
                return s.default.combineRGBComponents(a.r, a.g, a.b)
            }
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var s = f("./ParticleUtils"),
                i = function() {
                    function t(a) {
                        a === void 0 && (a = !1), this.current = null, this.next = null, this.isColor = !!a, this.interpolate = null, this.ease = null
                    }
                    return t.prototype.reset = function(a) {
                        this.current = a, this.next = a.next;
                        var n = this.next && this.next.time >= 1;
                        n ? this.interpolate = this.isColor ? u : d : a.isStepped ? this.interpolate = this.isColor ? h : e : this.interpolate = this.isColor ? r : l, this.ease = this.current.ease
                    }, t
                }();
            c.default = i
        }, {
            "./ParticleUtils": 4
        }],
        7: [function(f, _, c) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var d = f("./ParticleUtils"),
                u = function() {
                    function l(r, e, h) {
                        this.value = typeof r == "string" ? d.default.hexToRGB(r) : r, this.time = e, this.next = null, this.isStepped = !1, h ? this.ease = typeof h == "function" ? h : d.default.generateEase(h) : this.ease = null
                    }
                    return l.createList = function(r) {
                        if (Array.isArray(r.list)) {
                            var e = r.list,
                                h = void 0,
                                s = void 0;
                            if (s = h = new l(e[0].value, e[0].time, r.ease), e.length > 2 || e.length === 2 && e[1].value !== e[0].value)
                                for (var i = 1; i < e.length; ++i) h.next = new l(e[i].value, e[i].time), h = h.next;
                            return s.isStepped = !!r.isStepped, s
                        }
                        var t = new l(r.start, 0);
                        return r.end !== r.start && (t.next = new l(r.end, 1)), t
                    }, l
                }();
            c.default = u
        }, {
            "./ParticleUtils": 4
        }],
        8: [function(f, _, c) {
            "use strict";
            Object.defineProperty(c, "__esModule", {
                value: !0
            });
            var d = f("./ParticleUtils.js");
            c.ParticleUtils = d.default;
            var u = f("./Particle.js");
            c.Particle = u.default;
            var l = f("./Emitter.js");
            c.Emitter = l.default;
            var r = f("./PathParticle.js");
            c.PathParticle = r.default;
            var e = f("./AnimatedParticle.js");
            c.AnimatedParticle = e.default
        }, {
            "./AnimatedParticle.js": 1,
            "./Emitter.js": 2,
            "./Particle.js": 3,
            "./ParticleUtils.js": 4,
            "./PathParticle.js": 5
        }],
        9: [function(f, _, c) {
            "use strict";
            if (Object.defineProperty(c, "__esModule", {
                    value: !0
                }), typeof PIXI == "undefined") throw "pixi-particles requires pixi.js to be loaded first";
            PIXI.particles || (PIXI.particles = {});
            var d = f("./particles");
            for (var u in d) PIXI.particles[u] = d[u]
        }, {
            "./particles": 8
        }]
    }, {}, [9])(9)
});