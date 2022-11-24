/*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
"undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";

        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                    if (+o[i] < +n[i]) return 1;
                    if (+n[i] < +o[i]) return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.2", n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"), n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};

        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0, s.migrateWarnings.push(e), t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e), s.migrateTrace && t.trace && t.trace()))
        }

        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n), r
                },
                set: function(e) {
                    u(n), r = e
                }
            })
        }

        function o(e, t, r, n) {
            e[t] = function() {
                return u(n), r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0, s.migrateWarnings = [], void 0 === s.migrateTrace && (s.migrateTrace = !0), s.migrateReset = function() {
            r = {}, s.migrateWarnings.length = 0
        }, "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {},
            l = s.fn.init,
            p = s.find,
            f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
            y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g,
            m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function(e) {
                var t = Array.prototype.slice.call(arguments);
                return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"), t[0] = []), l.apply(this, t)
            }, s.fn.init.prototype = s.fn, s.find = function(t) {
                var r = Array.prototype.slice.call(arguments);
                if ("string" == typeof t && f.test(t)) try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(y, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t), u("Attribute selector with '#' must be quoted: " + r[0]), r[0] = t
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
                return p.apply(this, r)
            }, p) Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function() {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"), o(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "jQuery.parseJSON is deprecated; use JSON.parse"), o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"), o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"), t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"), t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"), e("3.1.1") && o(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(m, "")
        }, "jQuery.trim is deprecated; use String.prototype.trim"), e("3.2.0") && (o(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "jQuery.nodeName is deprecated"), o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")), e("3.3.0") && (o(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "jQuery.isNumeric() is deprecated"), s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }), o(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "jQuery.type is deprecated"), o(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "jQuery.isFunction() is deprecated"), o(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "jQuery.isWindow() is deprecated")), s.ajax && (a = s.ajax, c = /(=)\?(?=&|$)|\?\?/, s.ajax = function() {
            var e = a.apply(this, arguments);
            return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"), o(e, "error", e.fail, "jQXHR.error is deprecated and removed"), o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")), e
        }, e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
        }));
        var g = s.fn.removeAttr,
            h = s.fn.toggleClass,
            v = /\S+/g;

        function j(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function(e) {
            var r = this;
            return s.each(e.match(v), function(e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t), r.prop(t, !1))
            }), g.apply(this, arguments)
        };
        var Q, b = !(s.fn.toggleClass = function(t) {
                return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function() {
                    var e = this.getAttribute && this.getAttribute("class") || "";
                    e && s.data(this, "__className__", e), this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
                }))
            }),
            w = /^[a-z]/,
            x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return b = !0, e = r.apply(this, arguments), b = !1, e
            })
        }), s.swap = function(e, t, r, n) {
            var o, i, a = {};
            for (i in b || u("jQuery.swap() is undocumented and deprecated"), t) a[i] = e.style[i], e.style[i] = t[i];
            for (i in o = r.apply(e, n || []), t) e.style[i] = a[i];
            return o
        }, e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {}, {
            set: function() {
                return u("JQMIGRATE: jQuery.cssProps is deprecated"), Reflect.set.apply(this, arguments)
            }
        })), s.cssNumber || (s.cssNumber = {}), Q = s.fn.css, s.fn.css = function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }), this) : ("number" == typeof t && (r = j(e), n = r, w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')), Q.apply(this, arguments))
        };
        var A, k, S, M, N = s.data;
        s.data = function(e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in n = s.hasData(e) && N.call(this, e), o = {}, t) i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i), n[i] = t[i]) : o[i] = t[i];
                return N.call(this, e, o), t
            }
            return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t), 2 < arguments.length && (n[t] = r), n[t]) : N.apply(this, arguments)
        }, s.fx && (S = s.Tween.prototype.run, M = function(e) {
            return e
        }, s.Tween.prototype.run = function() {
            1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"), s.easing[this.easing] = M), S.apply(this, arguments)
        }, A = s.fx.interval || 13, k = "jQuery.fx.interval is deprecated", n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u(k), A
            },
            set: function(e) {
                u(k), A = e
            }
        }));
        var R = s.fn.load,
            H = s.event.add,
            C = s.event.fix;
        s.event.props = [], s.event.fixHooks = {}, t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"), s.event.fix = function(e) {
            var t, r = e.type,
                n = this.fixHooks[r],
                o = s.event.props;
            if (o.length) {
                u("jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length) s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0, u("jQuery.event.fixHooks are deprecated and removed: " + r), (o = n.props) && o.length))
                while (o.length) s.event.addProp(o.pop());
            return t = C.call(this, e), n && n.filter ? n.filter(t, e) : t
        }, s.event.add = function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"), H.apply(this, arguments)
        }, s.each(["load", "unload", "error"], function(e, t) {
            s.fn[t] = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"), e.splice(0, 0, t), arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e), this))
            }
        }), s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            s.fn[r] = function(e, t) {
                return u("jQuery.fn." + r + "() event shorthand is deprecated"), 0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }
        }), s(function() {
            s(n.document).triggerHandler("ready")
        }), s.event.special.ready = {
            setup: function() {
                this === n.document && u("'ready' event is deprecated")
            }
        }, s.fn.extend({
            bind: function(e, t, r) {
                return u("jQuery.fn.bind() is deprecated"), this.on(e, null, t, r)
            },
            unbind: function(e, t) {
                return u("jQuery.fn.unbind() is deprecated"), this.off(e, null, t)
            },
            delegate: function(e, t, r, n) {
                return u("jQuery.fn.delegate() is deprecated"), this.on(t, e, r, n)
            },
            undelegate: function(e, t, r) {
                return u("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            },
            hover: function(e, t) {
                return u("jQuery.fn.hover() is deprecated"), this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });

        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e, t.body && t.body.innerHTML
        }

        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
            q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.htmlPrefilter = function(e) {
                return P(e), e.replace(O, "<$1></$2>")
            }
        }, s.htmlPrefilter = function(e) {
            return P(e), q(e)
        };
        var D, _ = s.fn.offset;
        s.fn.offset = function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"), arguments.length ? this : void 0)
        }, s.ajax && (D = s.param, s.param = function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), t = r), D.call(this, e, t)
        });
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function() {
            return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"), J.apply(this, arguments)
        }, s.Deferred && (E = s.Deferred, F = [
            ["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"],
            ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"],
            ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]
        ], s.Deferred = function(e) {
            var i = E(),
                a = i.promise();
            return i.pipe = a.pipe = function() {
                var o = arguments;
                return u("deferred.pipe() is deprecated"), s.Deferred(function(n) {
                    s.each(F, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                    }), o = null
                }).promise()
            }, e && e.call(i, i), i
        }, s.Deferred.exceptionHook = E.exceptionHook), s
    });
! function() {
    "use strict";
    var e = {
            d: function(t, n) {
                for (var a in n) e.o(n, a) && !e.o(t, a) && Object.defineProperty(t, a, {
                    enumerable: !0,
                    get: n[a]
                })
            },
            o: function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            },
            r: function(e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        },
        t = {};
    e.r(t), e.d(t, {
        date: function() {
            return m
        },
        email: function() {
            return p
        },
        file: function() {
            return h
        },
        maxdate: function() {
            return x
        },
        maxfilesize: function() {
            return A
        },
        maxlength: function() {
            return v
        },
        maxnumber: function() {
            return b
        },
        mindate: function() {
            return y
        },
        minlength: function() {
            return w
        },
        minnumber: function() {
            return g
        },
        number: function() {
            return u
        },
        required: function() {
            return c
        },
        requiredfile: function() {
            return l
        },
        tel: function() {
            return f
        },
        url: function() {
            return d
        }
    });
    const n = e => Math.abs(parseInt(e, 10)),
        a = (e, t) => {
            const n = new Map([
                ["init", "init"],
                ["validation_failed", "invalid"],
                ["acceptance_missing", "unaccepted"],
                ["spam", "spam"],
                ["aborted", "aborted"],
                ["mail_sent", "sent"],
                ["mail_failed", "failed"],
                ["submitting", "submitting"],
                ["resetting", "resetting"],
                ["validating", "validating"],
                ["payment_required", "payment-required"]
            ]);
            n.has(t) && (t = n.get(t)), Array.from(n.values()).includes(t) || (t = `custom-${t=(t=t.replace(/[^0-9a-z]+/i," ").trim()).replace(/\s+/,"-")}`);
            const a = e.getAttribute("data-status");
            return e.wpcf7.status = t, e.setAttribute("data-status", t), e.classList.add(t), a && a !== t && e.classList.remove(a), t
        },
        o = (e, t, n) => {
            const a = new CustomEvent(`wpcf7${t}`, {
                bubbles: !0,
                detail: n
            });
            "string" == typeof e && (e = document.querySelector(e)), e.dispatchEvent(a)
        },
        i = e => {
            const {
                root: t,
                namespace: n = "contact-form-7/v1"
            } = wpcf7.api, a = s.reduceRight(((e, t) => n => t(n, e)), (e => {
                let a, o, {
                    url: i,
                    path: s,
                    endpoint: r,
                    headers: c,
                    body: l,
                    data: p,
                    ...d
                } = e;
                "string" == typeof r && (a = n.replace(/^\/|\/$/g, ""), o = r.replace(/^\//, ""), s = o ? a + "/" + o : a), "string" == typeof s && (-1 !== t.indexOf("?") && (s = s.replace("?", "&")), s = s.replace(/^\//, ""), i = t + s), c = {
                    Accept: "application/json, */*;q=0.1",
                    ...c
                }, delete c["X-WP-Nonce"], p && (l = JSON.stringify(p), c["Content-Type"] = "application/json");
                const f = {
                        code: "fetch_error",
                        message: "You are probably offline."
                    },
                    u = {
                        code: "invalid_json",
                        message: "The response is not a valid JSON response."
                    };
                return window.fetch(i || s || window.location.href, { ...d,
                    headers: c,
                    body: l
                }).then((e => Promise.resolve(e).then((e => {
                    if (e.status >= 200 && e.status < 300) return e;
                    throw e
                })).then((e => {
                    if (204 === e.status) return null;
                    if (e && e.json) return e.json().catch((() => {
                        throw u
                    }));
                    throw u
                }))), (() => {
                    throw f
                }))
            }));
            return a(e)
        },
        s = [];

    function r(e) {
        let {
            rule: t,
            field: n,
            error: a,
            ...o
        } = e;
        this.rule = t, this.field = n, this.error = a, this.properties = o
    }
    i.use = e => {
        s.unshift(e)
    };
    const c = function(e) {
            if (0 === e.getAll(this.field).length) throw new r(this)
        },
        l = function(e) {
            if (0 === e.getAll(this.field).length) throw new r(this)
        },
        p = function(e) {
            if (!e.getAll(this.field).every((e => {
                    if ((e = e.trim()).length < 6) return !1;
                    if (-1 === e.indexOf("@", 1)) return !1;
                    if (e.indexOf("@") !== e.lastIndexOf("@")) return !1;
                    const [t, n] = e.split("@", 2);
                    if (!/^[a-zA-Z0-9!#$%&\'*+\/=?^_`{|}~\.-]+$/.test(t)) return !1;
                    if (/\.{2,}/.test(n)) return !1;
                    if (/(?:^[ \t\n\r\0\x0B.]|[ \t\n\r\0\x0B.]$)/.test(n)) return !1;
                    const a = n.split(".");
                    if (a.length < 2) return !1;
                    for (const e of a) {
                        if (/(?:^[ \t\n\r\0\x0B-]|[ \t\n\r\0\x0B-]$)/.test(e)) return !1;
                        if (!/^[a-z0-9-]+$/i.test(e)) return !1
                    }
                    return !0
                }))) throw new r(this)
        },
        d = function(e) {
            const t = e.getAll(this.field);
            if (!t.every((e => {
                    if ("" === (e = e.trim())) return !1;
                    try {
                        return (e => -1 !== ["http", "https", "ftp", "ftps", "mailto", "news", "irc", "irc6", "ircs", "gopher", "nntp", "feed", "telnet", "mms", "rtsp", "sms", "svn", "tel", "fax", "xmpp", "webcal", "urn"].indexOf(e))(new URL(e).protocol.replace(/:$/, ""))
                    } catch {
                        return !1
                    }
                }))) throw new r(this)
        },
        f = function(e) {
            if (!e.getAll(this.field).every((e => (e = (e = e.trim()).replaceAll(/[()/.*#\s-]+/g, ""), /^[+]?[0-9]+$/.test(e))))) throw new r(this)
        },
        u = function(e) {
            if (!e.getAll(this.field).every((e => (e = e.trim(), !!/^[-]?[0-9]+(?:[eE][+-]?[0-9]+)?$/.test(e) || !!/^[-]?(?:[0-9]+)?[.][0-9]+(?:[eE][+-]?[0-9]+)?$/.test(e))))) throw new r(this)
        },
        m = function(e) {
            if (!e.getAll(this.field).every((e => /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(e.trim())))) throw new r(this)
        },
        h = function(e) {
            if (!e.getAll(this.field).every((e => {
                    var t;
                    return e instanceof File && (null === (t = this.accept) || void 0 === t ? void 0 : t.some((t => /^\.[a-z0-9]+$/i.test(t) ? e.name.toLowerCase().endsWith(t.toLowerCase()) : (e => {
                        const t = [],
                            n = e.match(/^(?<toplevel>[a-z]+)\/(?<sub>[*]|[a-z0-9.+-]+)$/i);
                        if (n) {
                            const e = n.groups.toplevel.toLowerCase(),
                                a = n.groups.sub.toLowerCase();
                            for (const [o, i] of (() => {
                                    const e = new Map;
                                    return e.set("jpg|jpeg|jpe", "image/jpeg"), e.set("gif", "image/gif"), e.set("png", "image/png"), e.set("bmp", "image/bmp"), e.set("tiff|tif", "image/tiff"), e.set("webp", "image/webp"), e.set("ico", "image/x-icon"), e.set("heic", "image/heic"), e.set("asf|asx", "video/x-ms-asf"), e.set("wmv", "video/x-ms-wmv"), e.set("wmx", "video/x-ms-wmx"), e.set("wm", "video/x-ms-wm"), e.set("avi", "video/avi"), e.set("divx", "video/divx"), e.set("flv", "video/x-flv"), e.set("mov|qt", "video/quicktime"), e.set("mpeg|mpg|mpe", "video/mpeg"), e.set("mp4|m4v", "video/mp4"), e.set("ogv", "video/ogg"), e.set("webm", "video/webm"), e.set("mkv", "video/x-matroska"), e.set("3gp|3gpp", "video/3gpp"), e.set("3g2|3gp2", "video/3gpp2"), e.set("txt|asc|c|cc|h|srt", "text/plain"), e.set("csv", "text/csv"), e.set("tsv", "text/tab-separated-values"), e.set("ics", "text/calendar"), e.set("rtx", "text/richtext"), e.set("css", "text/css"), e.set("htm|html", "text/html"), e.set("vtt", "text/vtt"), e.set("dfxp", "application/ttaf+xml"), e.set("mp3|m4a|m4b", "audio/mpeg"), e.set("aac", "audio/aac"), e.set("ra|ram", "audio/x-realaudio"), e.set("wav", "audio/wav"), e.set("ogg|oga", "audio/ogg"), e.set("flac", "audio/flac"), e.set("mid|midi", "audio/midi"), e.set("wma", "audio/x-ms-wma"), e.set("wax", "audio/x-ms-wax"), e.set("mka", "audio/x-matroska"), e.set("rtf", "application/rtf"), e.set("js", "application/javascript"), e.set("pdf", "application/pdf"), e.set("swf", "application/x-shockwave-flash"), e.set("class", "application/java"), e.set("tar", "application/x-tar"), e.set("zip", "application/zip"), e.set("gz|gzip", "application/x-gzip"), e.set("rar", "application/rar"), e.set("7z", "application/x-7z-compressed"), e.set("exe", "application/x-msdownload"), e.set("psd", "application/octet-stream"), e.set("xcf", "application/octet-stream"), e.set("doc", "application/msword"), e.set("pot|pps|ppt", "application/vnd.ms-powerpoint"), e.set("wri", "application/vnd.ms-write"), e.set("xla|xls|xlt|xlw", "application/vnd.ms-excel"), e.set("mdb", "application/vnd.ms-access"), e.set("mpp", "application/vnd.ms-project"), e.set("docx", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"), e.set("docm", "application/vnd.ms-word.document.macroEnabled.12"), e.set("dotx", "application/vnd.openxmlformats-officedocument.wordprocessingml.template"), e.set("dotm", "application/vnd.ms-word.template.macroEnabled.12"), e.set("xlsx", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"), e.set("xlsm", "application/vnd.ms-excel.sheet.macroEnabled.12"), e.set("xlsb", "application/vnd.ms-excel.sheet.binary.macroEnabled.12"), e.set("xltx", "application/vnd.openxmlformats-officedocument.spreadsheetml.template"), e.set("xltm", "application/vnd.ms-excel.template.macroEnabled.12"), e.set("xlam", "application/vnd.ms-excel.addin.macroEnabled.12"), e.set("pptx", "application/vnd.openxmlformats-officedocument.presentationml.presentation"), e.set("pptm", "application/vnd.ms-powerpoint.presentation.macroEnabled.12"), e.set("ppsx", "application/vnd.openxmlformats-officedocument.presentationml.slideshow"), e.set("ppsm", "application/vnd.ms-powerpoint.slideshow.macroEnabled.12"), e.set("potx", "application/vnd.openxmlformats-officedocument.presentationml.template"), e.set("potm", "application/vnd.ms-powerpoint.template.macroEnabled.12"), e.set("ppam", "application/vnd.ms-powerpoint.addin.macroEnabled.12"), e.set("sldx", "application/vnd.openxmlformats-officedocument.presentationml.slide"), e.set("sldm", "application/vnd.ms-powerpoint.slide.macroEnabled.12"), e.set("onetoc|onetoc2|onetmp|onepkg", "application/onenote"), e.set("oxps", "application/oxps"), e.set("xps", "application/vnd.ms-xpsdocument"), e.set("odt", "application/vnd.oasis.opendocument.text"), e.set("odp", "application/vnd.oasis.opendocument.presentation"), e.set("ods", "application/vnd.oasis.opendocument.spreadsheet"), e.set("odg", "application/vnd.oasis.opendocument.graphics"), e.set("odc", "application/vnd.oasis.opendocument.chart"), e.set("odb", "application/vnd.oasis.opendocument.database"), e.set("odf", "application/vnd.oasis.opendocument.formula"), e.set("wp|wpd", "application/wordperfect"), e.set("key", "application/vnd.apple.keynote"), e.set("numbers", "application/vnd.apple.numbers"), e.set("pages", "application/vnd.apple.pages"), e
                                })())("*" === a && i.startsWith(e + "/") || i === n[0]) && t.push(...o.split("|"))
                        }
                        return t
                    })(t).some((t => (t = "." + t.trim(), e.name.toLowerCase().endsWith(t.toLowerCase())))))))
                }))) throw new r(this)
        },
        w = function(e) {
            const t = e.getAll(this.field);
            let n = 0;
            if (t.forEach((e => {
                    "string" == typeof e && (n += e.length)
                })), n < parseInt(this.threshold)) throw new r(this)
        },
        v = function(e) {
            const t = e.getAll(this.field);
            let n = 0;
            if (t.forEach((e => {
                    "string" == typeof e && (n += e.length)
                })), parseInt(this.threshold) < n) throw new r(this)
        },
        g = function(e) {
            if (!e.getAll(this.field).every((e => !(parseFloat(e) < parseFloat(this.threshold))))) throw new r(this)
        },
        b = function(e) {
            if (!e.getAll(this.field).every((e => !(parseFloat(this.threshold) < parseFloat(e))))) throw new r(this)
        },
        y = function(e) {
            if (!e.getAll(this.field).every((e => (e = e.trim(), !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(e) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && e < this.threshold))))) throw new r(this)
        },
        x = function(e) {
            if (!e.getAll(this.field).every((e => (e = e.trim(), !(/^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(e) && /^[0-9]{4,}-[0-9]{2}-[0-9]{2}$/.test(this.threshold) && this.threshold < e))))) throw new r(this)
        },
        A = function(e) {
            const t = e.getAll(this.field);
            let n = 0;
            if (t.forEach((e => {
                    e instanceof File && (n += e.size)
                })), parseInt(this.threshold) < n) throw new r(this)
        };

    function E(e) {
        if (this.formData = {}, this.tree = {}, !(e instanceof FormData)) return this;
        this.formData = e;
        const t = () => {
            const e = new Map;
            return e.largestIndex = 0, e.set = function(t, n) {
                "" === t ? t = e.largestIndex++ : /^[0-9]+$/.test(t) && (t = parseInt(t), e.largestIndex <= t && (e.largestIndex = t + 1)), Map.prototype.set.call(e, t, n)
            }, e
        };
        this.tree = t();
        const n = /^(?<name>[a-z][-a-z0-9_:]*)(?<array>(?:\[(?:[a-z][-a-z0-9_:]*|[0-9]*)\])*)/i;
        for (const [e, a] of this.formData) {
            const o = e.match(n);
            if (o)
                if ("" === o.groups.array) this.tree.set(o.groups.name, a);
                else {
                    const e = [...o.groups.array.matchAll(/\[([a-z][-a-z0-9_:]*|[0-9]*)\]/gi)].map((e => {
                        let [t, n] = e;
                        return n
                    }));
                    e.unshift(o.groups.name);
                    const n = e.pop();
                    e.reduce(((e, n) => {
                        if (/^[0-9]+$/.test(n) && (n = parseInt(n)), e.get(n) instanceof Map) return e.get(n);
                        const a = t();
                        return e.set(n, a), a
                    }), this.tree).set(n, a)
                }
        }
    }

    function q(e) {
        var t, n, o, i;
        let s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const c = e;
        if (null === (t = s.target) || void 0 === t || !t.closest(".wpcf7-form-control-wrap[data-name]")) return;
        if (null !== (n = s.target) && void 0 !== n && n.closest(".novalidate")) return;
        const l = new FormData,
            p = [];
        for (const e of c.querySelectorAll(".wpcf7-form-control-wrap"))
            if (!e.closest(".novalidate") && (e.querySelectorAll(":where( input, textarea, select ):enabled").forEach((e => {
                    if (e.name) switch (e.type) {
                        case "button":
                        case "image":
                        case "reset":
                        case "submit":
                            break;
                        case "checkbox":
                        case "radio":
                            e.checked && l.append(e.name, e.value);
                            break;
                        case "select-multiple":
                            for (const t of e.selectedOptions) l.append(e.name, t.value);
                            break;
                        case "file":
                            for (const t of e.files) l.append(e.name, t);
                            break;
                        default:
                            l.append(e.name, e.value)
                    }
                })), e.dataset.name && (p.push(e.dataset.name), e.setAttribute("data-under-validation", "1"), e.dataset.name === s.target.name.replace(/\[.*\]$/, "")))) break;
        const d = null !== (o = q.validators) && void 0 !== o ? o : {},
            f = (null !== (i = e.wpcf7.schema.rules) && void 0 !== i ? i : []).filter((e => {
                let {
                    rule: t,
                    ...n
                } = e;
                return "function" == typeof d[t] && ("function" == typeof d[t].matches ? d[t].matches(n, s) : p.includes(n.field))
            }));
        if (!f.length) return;
        const u = e.getAttribute("data-status");
        Promise.resolve(a(e, "validating")).then((t => {
            const n = [],
                a = new E(l);
            for (const {
                    rule: t,
                    ...o
                } of f)
                if (!n.includes(o.field)) try {
                    _(e, o.field), d[t].call({
                        rule: t,
                        ...o
                    }, a)
                } catch (t) {
                    t instanceof r && (S(e, o.field, t.error), n.push(o.field))
                }
        })).finally((() => {
            a(e, u), e.querySelectorAll(".wpcf7-form-control-wrap[data-under-validation]").forEach((e => {
                e.removeAttribute("data-under-validation")
            }))
        }))
    }
    E.prototype.entries = function() {
        return this.tree.entries()
    }, E.prototype.get = function(e) {
        return this.tree.get(e)
    }, E.prototype.getAll = function(e) {
        if (!this.has(e)) return [];
        const t = e => {
            const n = [];
            if (e instanceof Map)
                for (const [a, o] of e) n.push(...t(o));
            else "" !== e && n.push(e);
            return n
        };
        return t(this.get(e))
    }, E.prototype.has = function(e) {
        return this.tree.has(e)
    }, E.prototype.keys = function() {
        return this.tree.keys()
    }, E.prototype.values = function() {
        return this.tree.values()
    }, q.validators = t;
    const S = (e, t, n) => {
            var a;
            const o = `${null===(a=e.wpcf7)||void 0===a?void 0:a.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, ""),
                i = e.querySelector(`.wpcf7-form-control-wrap[data-name="${t}"] .wpcf7-form-control`);
            (() => {
                const t = document.createElement("li");
                t.setAttribute("id", o), i && i.id ? t.insertAdjacentHTML("beforeend", `<a href="#${i.id}">${n}</a>`) : t.insertAdjacentText("beforeend", n), e.wpcf7.parent.querySelector(".screen-reader-response ul").appendChild(t)
            })(), e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((t => {
                if ("validating" === e.getAttribute("data-status") && !t.dataset.underValidation) return;
                const a = document.createElement("span");
                a.classList.add("wpcf7-not-valid-tip"), a.setAttribute("aria-hidden", "true"), a.insertAdjacentText("beforeend", n), t.appendChild(a), t.querySelectorAll("[aria-invalid]").forEach((e => {
                    e.setAttribute("aria-invalid", "true")
                })), t.querySelectorAll(".wpcf7-form-control").forEach((e => {
                    e.classList.add("wpcf7-not-valid"), e.setAttribute("aria-describedby", o), "function" == typeof e.setCustomValidity && e.setCustomValidity(n), e.closest(".use-floating-validation-tip") && (e.addEventListener("focus", (e => {
                        a.setAttribute("style", "display: none")
                    })), a.addEventListener("click", (e => {
                        a.setAttribute("style", "display: none")
                    })))
                }))
            }))
        },
        _ = (e, t) => {
            var n, a;
            const o = `${null===(n=e.wpcf7)||void 0===n?void 0:n.unitTag}-ve-${t}`.replaceAll(/[^0-9a-z_-]+/gi, "");
            null === (a = e.wpcf7.parent.querySelector(`.screen-reader-response ul li#${o}`)) || void 0 === a || a.remove(), e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${t}"]`).forEach((e => {
                var t;
                null === (t = e.querySelector(".wpcf7-not-valid-tip")) || void 0 === t || t.remove(), e.querySelectorAll("[aria-invalid]").forEach((e => {
                    e.setAttribute("aria-invalid", "false")
                })), e.querySelectorAll(".wpcf7-form-control").forEach((e => {
                    e.removeAttribute("aria-describedby"), e.classList.remove("wpcf7-not-valid"), "function" == typeof e.setCustomValidity && e.setCustomValidity("")
                }))
            }))
        };

    function $(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (wpcf7.blocked) return L(e), void a(e, "submitting");
        const n = new FormData(e);
        t.submitter && t.submitter.name && n.append(t.submitter.name, t.submitter.value);
        const s = {
            contactFormId: e.wpcf7.id,
            pluginVersion: e.wpcf7.pluginVersion,
            contactFormLocale: e.wpcf7.locale,
            unitTag: e.wpcf7.unitTag,
            containerPostId: e.wpcf7.containerPost,
            status: e.wpcf7.status,
            inputs: Array.from(n, (e => {
                const t = e[0],
                    n = e[1];
                return !t.match(/^_/) && {
                    name: t,
                    value: n
                }
            })).filter((e => !1 !== e)),
            formData: n
        };
        i({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback`,
            method: "POST",
            body: n,
            wpcf7: {
                endpoint: "feedback",
                form: e,
                detail: s
            }
        }).then((t => {
            const n = a(e, t.status);
            return s.status = t.status, s.apiResponse = t, ["invalid", "unaccepted", "spam", "aborted"].includes(n) ? o(e, n, s) : ["sent", "failed"].includes(n) && o(e, `mail${n}`, s), o(e, "submit", s), t
        })).then((t => {
            t.posted_data_hash && (e.querySelector('input[name="_wpcf7_posted_data_hash"]').value = t.posted_data_hash), "mail_sent" === t.status && (e.reset(), e.wpcf7.resetOnMailSent = !0), t.invalid_fields && t.invalid_fields.forEach((t => {
                S(e, t.field, t.message)
            })), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').insertAdjacentText("beforeend", t.message), e.querySelectorAll(".wpcf7-response-output").forEach((e => {
                e.innerText = t.message
            }))
        })).catch((e => console.error(e)))
    }
    i.use(((e, t) => {
        if (e.wpcf7 && "feedback" === e.wpcf7.endpoint) {
            const {
                form: t,
                detail: n
            } = e.wpcf7;
            L(t), o(t, "beforesubmit", n), a(t, "submitting")
        }
        return t(e)
    }));
    const L = e => {
        e.querySelectorAll(".wpcf7-form-control-wrap").forEach((t => {
            t.dataset.name && _(e, t.dataset.name)
        })), e.wpcf7.parent.querySelector('.screen-reader-response [role="status"]').innerText = "", e.querySelectorAll(".wpcf7-response-output").forEach((e => {
            e.innerText = ""
        }))
    };

    function k(e) {
        const t = new FormData(e),
            n = {
                contactFormId: e.wpcf7.id,
                pluginVersion: e.wpcf7.pluginVersion,
                contactFormLocale: e.wpcf7.locale,
                unitTag: e.wpcf7.unitTag,
                containerPostId: e.wpcf7.containerPost,
                status: e.wpcf7.status,
                inputs: Array.from(t, (e => {
                    const t = e[0],
                        n = e[1];
                    return !t.match(/^_/) && {
                        name: t,
                        value: n
                    }
                })).filter((e => !1 !== e)),
                formData: t
            };
        i({
            endpoint: `contact-forms/${e.wpcf7.id}/refill`,
            method: "GET",
            wpcf7: {
                endpoint: "refill",
                form: e,
                detail: n
            }
        }).then((t => {
            e.wpcf7.resetOnMailSent ? (delete e.wpcf7.resetOnMailSent, a(e, "mail_sent")) : a(e, "init"), n.apiResponse = t, o(e, "reset", n)
        })).catch((e => console.error(e)))
    }
    i.use(((e, t) => {
        if (e.wpcf7 && "refill" === e.wpcf7.endpoint) {
            const {
                form: t,
                detail: n
            } = e.wpcf7;
            L(t), a(t, "resetting")
        }
        return t(e)
    }));
    const z = (e, t) => {
            for (const n in t) {
                const a = t[n];
                e.querySelectorAll(`input[name="${n}"]`).forEach((e => {
                    e.value = ""
                })), e.querySelectorAll(`img.wpcf7-captcha-${n.replaceAll(":","")}`).forEach((e => {
                    e.setAttribute("src", a)
                }));
                const o = /([0-9]+)\.(png|gif|jpeg)$/.exec(a);
                o && e.querySelectorAll(`input[name="_wpcf7_captcha_challenge_${n}"]`).forEach((e => {
                    e.value = o[1]
                }))
            }
        },
        j = (e, t) => {
            for (const n in t) {
                const a = t[n][0],
                    o = t[n][1];
                e.querySelectorAll(`.wpcf7-form-control-wrap[data-name="${n}"]`).forEach((e => {
                    e.querySelector(`input[name="${n}"]`).value = "", e.querySelector(".wpcf7-quiz-label").textContent = a, e.querySelector(`input[name="_wpcf7_quiz_answer_${n}"]`).value = o
                }))
            }
        };

    function T(e) {
        const t = new FormData(e);
        e.wpcf7 = {
            id: n(t.get("_wpcf7")),
            status: e.getAttribute("data-status"),
            pluginVersion: t.get("_wpcf7_version"),
            locale: t.get("_wpcf7_locale"),
            unitTag: t.get("_wpcf7_unit_tag"),
            containerPost: n(t.get("_wpcf7_container_post")),
            parent: e.closest(".wpcf7"),
            schema: {}
        }, e.querySelectorAll(".has-spinner").forEach((e => {
            e.insertAdjacentHTML("afterend", '<span class="wpcf7-spinner"></span>')
        })), (e => {
            e.querySelectorAll(".wpcf7-exclusive-checkbox").forEach((t => {
                t.addEventListener("change", (t => {
                    const n = t.target.getAttribute("name");
                    e.querySelectorAll(`input[type="checkbox"][name="${n}"]`).forEach((e => {
                        e !== t.target && (e.checked = !1)
                    }))
                }))
            }))
        })(e), (e => {
            e.querySelectorAll(".has-free-text").forEach((t => {
                const n = t.querySelector("input.wpcf7-free-text"),
                    a = t.querySelector('input[type="checkbox"], input[type="radio"]');
                n.disabled = !a.checked, e.addEventListener("change", (e => {
                    n.disabled = !a.checked, e.target === a && a.checked && n.focus()
                }))
            }))
        })(e), (e => {
            e.querySelectorAll(".wpcf7-validates-as-url").forEach((e => {
                e.addEventListener("change", (t => {
                    let n = e.value.trim();
                    n && !n.match(/^[a-z][a-z0-9.+-]*:/i) && -1 !== n.indexOf(".") && (n = n.replace(/^\/+/, ""), n = "http://" + n), e.value = n
                }))
            }))
        })(e), (e => {
            if (!e.querySelector(".wpcf7-acceptance") || e.classList.contains("wpcf7-acceptance-as-validation")) return;
            const t = () => {
                let t = !0;
                e.querySelectorAll(".wpcf7-acceptance").forEach((e => {
                    if (!t || e.classList.contains("optional")) return;
                    const n = e.querySelector('input[type="checkbox"]');
                    (e.classList.contains("invert") && n.checked || !e.classList.contains("invert") && !n.checked) && (t = !1)
                })), e.querySelectorAll(".wpcf7-submit").forEach((e => {
                    e.disabled = !t
                }))
            };
            t(), e.addEventListener("change", (e => {
                t()
            })), e.addEventListener("wpcf7reset", (e => {
                t()
            }))
        })(e), (e => {
            const t = (e, t) => {
                    const a = n(e.getAttribute("data-starting-value")),
                        o = n(e.getAttribute("data-maximum-value")),
                        i = n(e.getAttribute("data-minimum-value")),
                        s = e.classList.contains("down") ? a - t.value.length : t.value.length;
                    e.setAttribute("data-current-value", s), e.innerText = s, o && o < t.value.length ? e.classList.add("too-long") : e.classList.remove("too-long"), i && t.value.length < i ? e.classList.add("too-short") : e.classList.remove("too-short")
                },
                a = n => {
                    n = {
                        init: !1,
                        ...n
                    }, e.querySelectorAll(".wpcf7-character-count").forEach((a => {
                        const o = a.getAttribute("data-target-name"),
                            i = e.querySelector(`[name="${o}"]`);
                        i && (i.value = i.defaultValue, t(a, i), n.init && i.addEventListener("keyup", (e => {
                            t(a, i)
                        })))
                    }))
                };
            a({
                init: !0
            }), e.addEventListener("wpcf7reset", (e => {
                a()
            }))
        })(e), window.addEventListener("load", (t => {
            wpcf7.cached && e.reset()
        })), e.addEventListener("reset", (t => {
            wpcf7.reset(e)
        })), e.addEventListener("submit", (t => {
            wpcf7.submit(e, {
                submitter: t.submitter
            }), t.preventDefault()
        })), e.addEventListener("wpcf7submit", (t => {
            t.detail.apiResponse.captcha && z(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && j(e, t.detail.apiResponse.quiz)
        })), e.addEventListener("wpcf7reset", (t => {
            t.detail.apiResponse.captcha && z(e, t.detail.apiResponse.captcha), t.detail.apiResponse.quiz && j(e, t.detail.apiResponse.quiz)
        })), i({
            endpoint: `contact-forms/${e.wpcf7.id}/feedback/schema`,
            method: "GET"
        }).then((t => {
            e.wpcf7.schema = t
        })), e.addEventListener("change", (t => {
            t.target.closest(".wpcf7-form-control") && wpcf7.validate(e, {
                target: t.target
            })
        }))
    }
    document.addEventListener("DOMContentLoaded", (e => {
        var t;
        if ("undefined" == typeof wpcf7) return void console.error("wpcf7 is not defined.");
        if (void 0 === wpcf7.api) return void console.error("wpcf7.api is not defined.");
        if ("function" != typeof window.fetch) return void console.error("Your browser does not support window.fetch().");
        if ("function" != typeof window.FormData) return void console.error("Your browser does not support window.FormData().");
        const n = document.querySelectorAll(".wpcf7 > form");
        "function" == typeof n.forEach ? (wpcf7 = {
            init: T,
            submit: $,
            reset: k,
            validate: q,
            ...null !== (t = wpcf7) && void 0 !== t ? t : {}
        }, n.forEach((e => wpcf7.init(e)))) : console.error("Your browser does not support NodeList.forEach().")
    }))
}();
jQuery(document).ready(function($) {
    $(document).on('click', '.dot-irecommendthis', function() {
        var link = $(this);
        if (link.hasClass('active')) return false;
        var id = $(this).attr('id'),
            suffix = link.find('.dot-irecommendthis-suffix').text();
        $.post(dot_irecommendthis.ajaxurl, {
            action: 'dot-irecommendthis',
            recommend_id: id,
            suffix: suffix
        }, function(data) {
            link.html(data).addClass('active').attr('title', 'You already recommended this');
        });
        return false;
    });
});

jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function(e, f, a, h, g) {
        return jQuery.easing[jQuery.easing.def](e, f, a, h, g)
    },
    easeInQuad: function(e, f, a, h, g) {
        return h * (f /= g) * f + a
    },
    easeOutQuad: function(e, f, a, h, g) {
        return -h * (f /= g) * (f - 2) + a
    },
    easeInOutQuad: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f + a
        }
        return -h / 2 * ((--f) * (f - 2) - 1) + a
    },
    easeInCubic: function(e, f, a, h, g) {
        return h * (f /= g) * f * f + a
    },
    easeOutCubic: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f + 1) + a
    },
    easeInOutCubic: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f + 2) + a
    },
    easeInQuart: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f + a
    },
    easeOutQuart: function(e, f, a, h, g) {
        return -h * ((f = f / g - 1) * f * f * f - 1) + a
    },
    easeInOutQuart: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f + a
        }
        return -h / 2 * ((f -= 2) * f * f * f - 2) + a
    },
    easeInQuint: function(e, f, a, h, g) {
        return h * (f /= g) * f * f * f * f + a
    },
    easeOutQuint: function(e, f, a, h, g) {
        return h * ((f = f / g - 1) * f * f * f * f + 1) + a
    },
    easeInOutQuint: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return h / 2 * f * f * f * f * f + a
        }
        return h / 2 * ((f -= 2) * f * f * f * f + 2) + a
    },
    easeInSine: function(e, f, a, h, g) {
        return -h * Math.cos(f / g * (Math.PI / 2)) + h + a
    },
    easeOutSine: function(e, f, a, h, g) {
        return h * Math.sin(f / g * (Math.PI / 2)) + a
    },
    easeInOutSine: function(e, f, a, h, g) {
        return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a
    },
    easeInExpo: function(e, f, a, h, g) {
        return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a
    },
    easeOutExpo: function(e, f, a, h, g) {
        return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a
    },
    easeInOutExpo: function(e, f, a, h, g) {
        if (f == 0) {
            return a
        }
        if (f == g) {
            return a + h
        }
        if ((f /= g / 2) < 1) {
            return h / 2 * Math.pow(2, 10 * (f - 1)) + a
        }
        return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a
    },
    easeInCirc: function(e, f, a, h, g) {
        return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a
    },
    easeOutCirc: function(e, f, a, h, g) {
        return h * Math.sqrt(1 - (f = f / g - 1) * f) + a
    },
    easeInOutCirc: function(e, f, a, h, g) {
        if ((f /= g / 2) < 1) {
            return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a
        }
        return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a
    },
    easeInElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
    },
    easeOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k) == 1) {
            return e + l
        }
        if (!j) {
            j = k * 0.3
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e
    },
    easeInOutElastic: function(f, h, e, l, k) {
        var i = 1.70158;
        var j = 0;
        var g = l;
        if (h == 0) {
            return e
        }
        if ((h /= k / 2) == 2) {
            return e + l
        }
        if (!j) {
            j = k * (0.3 * 1.5)
        }
        if (g < Math.abs(l)) {
            g = l;
            var i = j / 4
        } else {
            var i = j / (2 * Math.PI) * Math.asin(l / g)
        }
        if (h < 1) {
            return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e
        }
        return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e
    },
    easeInBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * (f /= h) * f * ((g + 1) * f - g) + a
    },
    easeOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a
    },
    easeInOutBack: function(e, f, a, i, h, g) {
        if (g == undefined) {
            g = 1.70158
        }
        if ((f /= h / 2) < 1) {
            return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a
        }
        return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a
    },
    easeInBounce: function(e, f, a, h, g) {
        return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a
    },
    easeOutBounce: function(e, f, a, h, g) {
        if ((f /= g) < (1 / 2.75)) {
            return h * (7.5625 * f * f) + a
        } else {
            if (f < (2 / 2.75)) {
                return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a
            } else {
                if (f < (2.5 / 2.75)) {
                    return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a
                } else {
                    return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a
                }
            }
        }
    },
    easeInOutBounce: function(e, f, a, h, g) {
        if (f < g / 2) {
            return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a
        }
        return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a
    }
});
/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright � 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;
! function i(n, s, a) {
    function r(e, t) {
        if (!s[e]) {
            if (!n[e]) {
                var o = "function" == typeof require && require;
                if (!t && o) return o(e, !0);
                if (l) return l(e, !0);
                throw (o = new Error("Cannot find module '" + e + "'")).code = "MODULE_NOT_FOUND", o
            }
            o = s[e] = {
                exports: {}
            }, n[e][0].call(o.exports, function(t) {
                return r(n[e][1][t] || t)
            }, o, o.exports, i, n, s, a)
        }
        return s[e].exports
    }
    for (var l = "function" == typeof require && require, t = 0; t < a.length; t++) r(a[t]);
    return r
}({
    1: [function(t, e, o) {
        "use strict";
        t("./simple-lightbox"), t = jQuery, window, document, t.fn.simpleLightbox = function(t) {
            return this.length ? new SimpleLightbox(this.get(), t) : null
        }
    }, {
        "./simple-lightbox": 2
    }],
    2: [function(t, e, o) {
        ! function(e) {
            ! function() {
                "use strict";

                function h(t) {
                    return (h = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                        return typeof t
                    } : function(t) {
                        return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                    })(t)
                }

                function m(t, e) {
                    var o = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (!o) {
                        if (Array.isArray(t) || (o = function(t, e) {
                                if (t) {
                                    if ("string" == typeof t) return r(t, e);
                                    var o = Object.prototype.toString.call(t).slice(8, -1);
                                    return "Map" === (o = "Object" === o && t.constructor ? t.constructor.name : o) || "Set" === o ? Array.from(t) : "Arguments" === o || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o) ? r(t, e) : void 0
                                }
                            }(t)) || e && t && "number" == typeof t.length) {
                            o && (t = o);
                            var i = 0,
                                e = function() {};
                            return {
                                s: e,
                                n: function() {
                                    return i >= t.length ? {
                                        done: !0
                                    } : {
                                        done: !1,
                                        value: t[i++]
                                    }
                                },
                                e: function(t) {
                                    throw t
                                },
                                f: e
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var n, s = !0,
                        a = !1;
                    return {
                        s: function() {
                            o = o.call(t)
                        },
                        n: function() {
                            var t = o.next();
                            return s = t.done, t
                        },
                        e: function(t) {
                            a = !0, n = t
                        },
                        f: function() {
                            try {
                                s || null == o.return || o.return()
                            } finally {
                                if (a) throw n
                            }
                        }
                    }
                }

                function r(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var o = 0, i = new Array(e); o < e; o++) i[o] = t[o];
                    return i
                }

                function i(t, e) {
                    for (var o = 0; o < e.length; o++) {
                        var i = e[o];
                        i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
                    }
                }

                function s(t, e, o) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: o,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = o, t
                }
                Object.defineProperty(o, "__esModule", {
                    value: !0
                }), o.default = void 0;
                var t = function() {
                    function n(t, e) {
                        var o, i = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, n), s(this, "defaultOptions", {
                            sourceAttr: "href",
                            overlay: !0,
                            overlayOpacity: .7,
                            spinner: !0,
                            nav: !0,
                            navText: ["&lsaquo;", "&rsaquo;"],
                            captions: !0,
                            captionDelay: 0,
                            captionSelector: "img",
                            captionType: "attr",
                            captionsData: "title",
                            captionPosition: "bottom",
                            captionClass: "",
                            close: !0,
                            closeText: "&times;",
                            swipeClose: !0,
                            showCounter: !0,
                            fileExt: "png|jpg|jpeg|gif|webp",
                            animationSlide: !0,
                            animationSpeed: 250,
                            preloading: !0,
                            enableKeyboard: !0,
                            loop: !0,
                            rel: !1,
                            docClose: !0,
                            swipeTolerance: 50,
                            className: "simple-lightbox",
                            widthRatio: .8,
                            heightRatio: .9,
                            scaleImageToRatio: !1,
                            disableRightClick: !1,
                            disableScroll: !0,
                            alertError: !0,
                            alertErrorMessage: "Image not found, next image will be loaded",
                            additionalHtml: !1,
                            history: !0,
                            throttleInterval: 0,
                            doubleTapZoom: 2,
                            maxZoom: 10,
                            htmlClass: "has-lightbox",
                            rtl: !1,
                            fixedClass: "sl-fixed",
                            fadeSpeed: 300,
                            uniqueImages: !0,
                            focus: !0,
                            scrollZoom: !0,
                            scrollZoomFactor: .5
                        }), s(this, "transitionPrefix", void 0), s(this, "isPassiveEventsSupported", void 0), s(this, "transitionCapable", !1), s(this, "isTouchDevice", "ontouchstart" in window), s(this, "isAppleDevice", /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)), s(this, "initialLocationHash", void 0), s(this, "pushStateSupport", "pushState" in history), s(this, "isOpen", !1), s(this, "isAnimating", !1), s(this, "isClosing", !1), s(this, "isFadeIn", !1), s(this, "urlChangedOnce", !1), s(this, "hashReseted", !1), s(this, "historyHasChanges", !1), s(this, "historyUpdateTimeout", null), s(this, "currentImage", void 0), s(this, "eventNamespace", "simplelightbox"), s(this, "domNodes", {}), s(this, "loadedImages", []), s(this, "initialImageIndex", 0), s(this, "currentImageIndex", 0), s(this, "initialSelector", null), s(this, "globalScrollbarWidth", 0), s(this, "controlCoordinates", {
                            swipeDiff: 0,
                            swipeYDiff: 0,
                            swipeStart: 0,
                            swipeEnd: 0,
                            swipeYStart: 0,
                            swipeYEnd: 0,
                            mousedown: !1,
                            imageLeft: 0,
                            zoomed: !1,
                            containerHeight: 0,
                            containerWidth: 0,
                            containerOffsetX: 0,
                            containerOffsetY: 0,
                            imgHeight: 0,
                            imgWidth: 0,
                            capture: !1,
                            initialOffsetX: 0,
                            initialOffsetY: 0,
                            initialPointerOffsetX: 0,
                            initialPointerOffsetY: 0,
                            initialPointerOffsetX2: 0,
                            initialPointerOffsetY2: 0,
                            initialScale: 1,
                            initialPinchDistance: 0,
                            pointerOffsetX: 0,
                            pointerOffsetY: 0,
                            pointerOffsetX2: 0,
                            pointerOffsetY2: 0,
                            targetOffsetX: 0,
                            targetOffsetY: 0,
                            targetScale: 0,
                            pinchOffsetX: 0,
                            pinchOffsetY: 0,
                            limitOffsetX: 0,
                            limitOffsetY: 0,
                            scaleDifference: 0,
                            targetPinchDistance: 0,
                            touchCount: 0,
                            doubleTapped: !1,
                            touchmoveCount: 0
                        }), this.options = Object.assign(this.defaultOptions, e), this.isPassiveEventsSupported = this.checkPassiveEventsSupport(), "string" == typeof t ? (this.initialSelector = t, this.elements = Array.from(document.querySelectorAll(t))) : this.elements = void 0 !== t.length && 0 < t.length ? Array.from(t) : [t], this.relatedElements = [], this.transitionPrefix = this.calculateTransitionPrefix(), this.transitionCapable = !1 !== this.transitionPrefix, this.initialLocationHash = this.hash, this.options.rel && (this.elements = this.getRelated(this.options.rel)), this.options.uniqueImages && (o = [], this.elements = Array.from(this.elements).filter(function(t) {
                            t = t.getAttribute(i.options.sourceAttr);
                            return -1 === o.indexOf(t) && (o.push(t), !0)
                        })), this.createDomNodes(), this.options.close && this.domNodes.wrapper.appendChild(this.domNodes.closeButton), this.options.nav && this.domNodes.wrapper.appendChild(this.domNodes.navigation), this.options.spinner && this.domNodes.wrapper.appendChild(this.domNodes.spinner), this.addEventListener(this.elements, "click." + this.eventNamespace, function(t) {
                            if (i.isValidLink(t.currentTarget)) {
                                if (t.preventDefault(), i.isAnimating) return !1;
                                i.initialImageIndex = i.elements.indexOf(t.currentTarget), i.openImage(t.currentTarget)
                            }
                        }), this.options.docClose && this.addEventListener(this.domNodes.wrapper, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], function(t) {
                            i.isOpen && t.target === t.currentTarget && i.close()
                        }), this.options.disableRightClick && this.addEventListener(document.body, "contextmenu." + this.eventNamespace, function(t) {
                            t.target.parentElement.classList.contains("sl-image") && t.preventDefault()
                        }), this.options.enableKeyboard && this.addEventListener(document.body, "keyup." + this.eventNamespace, this.throttle(function(t) {
                            return i.controlCoordinates.swipeDiff = 0, i.isAnimating && "Escape" === t.key ? (i.currentImage.setAttribute("src", ""), i.isAnimating = !1, i.close()) : void(i.isOpen && (t.preventDefault(), "Escape" === t.key && i.close(), !i.isAnimating && -1 < ["ArrowLeft", "ArrowRight"].indexOf(t.key) && i.loadImage("ArrowRight" === t.key ? 1 : -1)))
                        }, this.options.throttleInterval)), this.addEvents()
                    }
                    var t, e, o;
                    return t = n, (e = [{
                        key: "checkPassiveEventsSupport",
                        value: function() {
                            var t = !1;
                            try {
                                var e = Object.defineProperty({}, "passive", {
                                    get: function() {
                                        t = !0
                                    }
                                });
                                window.addEventListener("testPassive", null, e), window.removeEventListener("testPassive", null, e)
                            } catch (t) {}
                            return t
                        }
                    }, {
                        key: "createDomNodes",
                        value: function() {
                            this.domNodes.overlay = document.createElement("div"), this.domNodes.overlay.classList.add("sl-overlay"), this.domNodes.overlay.dataset.opacityTarget = this.options.overlayOpacity, this.domNodes.closeButton = document.createElement("button"), this.domNodes.closeButton.classList.add("sl-close"), this.domNodes.closeButton.innerHTML = this.options.closeText, this.domNodes.spinner = document.createElement("div"), this.domNodes.spinner.classList.add("sl-spinner"), this.domNodes.spinner.innerHTML = "<div></div>", this.domNodes.navigation = document.createElement("div"), this.domNodes.navigation.classList.add("sl-navigation"), this.domNodes.navigation.innerHTML = '<button class="sl-prev">'.concat(this.options.navText[0], '</button><button class="sl-next">').concat(this.options.navText[1], "</button>"), this.domNodes.counter = document.createElement("div"), this.domNodes.counter.classList.add("sl-counter"), this.domNodes.counter.innerHTML = '<span class="sl-current"></span>/<span class="sl-total"></span>', this.domNodes.caption = document.createElement("div"), this.domNodes.caption.classList.add("sl-caption", "pos-" + this.options.captionPosition), this.options.captionClass && this.domNodes.caption.classList.add(this.options.captionClass), this.domNodes.image = document.createElement("div"), this.domNodes.image.classList.add("sl-image"), this.domNodes.wrapper = document.createElement("div"), this.domNodes.wrapper.classList.add("sl-wrapper"), this.domNodes.wrapper.setAttribute("tabindex", -1), this.domNodes.wrapper.setAttribute("role", "dialog"), this.domNodes.wrapper.setAttribute("aria-hidden", !1), this.options.className && this.domNodes.wrapper.classList.add(this.options.className), this.options.rtl && this.domNodes.wrapper.classList.add("sl-dir-rtl")
                        }
                    }, {
                        key: "throttle",
                        value: function(t, e) {
                            var o;
                            return function() {
                                o || (t.apply(this, arguments), o = !0, setTimeout(function() {
                                    return o = !1
                                }, e))
                            }
                        }
                    }, {
                        key: "isValidLink",
                        value: function(t) {
                            return !this.options.fileExt || t.getAttribute(this.options.sourceAttr) && new RegExp("(" + this.options.fileExt + ")$", "i").test(t.getAttribute(this.options.sourceAttr))
                        }
                    }, {
                        key: "calculateTransitionPrefix",
                        value: function() {
                            var t = (document.body || document.documentElement).style;
                            return "transition" in t ? "" : "WebkitTransition" in t ? "-webkit-" : "MozTransition" in t ? "-moz-" : "OTransition" in t && "-o"
                        }
                    }, {
                        key: "toggleScrollbar",
                        value: function(t) {
                            var e, i = 0,
                                o = [].slice.call(document.querySelectorAll("." + this.options.fixedClass));
                            return "hide" === t ? ((t = window.innerWidth) || (t = (e = document.documentElement.getBoundingClientRect()).right - Math.abs(e.left)), (document.body.clientWidth < t || this.isAppleDevice) && (e = document.createElement("div"), t = parseInt(document.body.style.paddingRight || 0, 10), e.classList.add("sl-scrollbar-measure"), document.body.appendChild(e), i = e.offsetWidth - e.clientWidth, document.body.removeChild(e), document.body.dataset.originalPaddingRight = t, (0 < i || 0 == i && this.isAppleDevice) && (document.body.classList.add("hidden-scroll"), document.body.style.paddingRight = t + i + "px", o.forEach(function(t) {
                                var e = t.style.paddingRight,
                                    o = window.getComputedStyle(t)["padding-right"];
                                t.dataset.originalPaddingRight = e, t.style.paddingRight = "".concat(parseFloat(o) + i, "px")
                            })))) : (document.body.classList.remove("hidden-scroll"), document.body.style.paddingRight = document.body.dataset.originalPaddingRight, o.forEach(function(t) {
                                var e = t.dataset.originalPaddingRight;
                                void 0 !== e && (t.style.paddingRight = e)
                            })), i
                        }
                    }, {
                        key: "close",
                        value: function() {
                            var t = this;
                            if (!this.isOpen || this.isAnimating || this.isClosing) return !1;
                            this.isClosing = !0;
                            var e, o = this.relatedElements[this.currentImageIndex];
                            for (e in o.dispatchEvent(new Event("close.simplelightbox")), this.options.history && (this.historyHasChanges = !1, this.hashReseted || this.resetHash()), this.removeEventListener(document, "focusin." + this.eventNamespace), this.fadeOut(this.domNodes.overlay, this.options.fadeSpeed), this.fadeOut(document.querySelectorAll(".sl-image img,  .sl-close, .sl-navigation, .sl-image .sl-caption, .sl-counter"), this.options.fadeSpeed, function() {
                                    t.options.disableScroll && t.toggleScrollbar("show"), t.options.htmlClass && "" !== t.options.htmlClass && document.querySelector("html").classList.remove(t.options.htmlClass), document.body.removeChild(t.domNodes.wrapper), document.body.removeChild(t.domNodes.overlay), t.domNodes.additionalHtml = null, o.dispatchEvent(new Event("closed.simplelightbox")), t.isClosing = !1
                                }), this.currentImage = null, this.isOpen = !1, this.isAnimating = !1, this.controlCoordinates) this.controlCoordinates[e] = 0;
                            this.controlCoordinates.mousedown = !1, this.controlCoordinates.zoomed = !1, this.controlCoordinates.capture = !1, this.controlCoordinates.initialScale = this.minMax(1, 1, this.options.maxZoom), this.controlCoordinates.doubleTapped = !1
                        }
                    }, {
                        key: "hash",
                        get: function() {
                            return window.location.hash.substring(1)
                        }
                    }, {
                        key: "preload",
                        value: function() {
                            var e = this,
                                o = this.currentImageIndex,
                                t = this.relatedElements.length,
                                i = o + 1 < 0 ? t - 1 : t - 1 <= o + 1 ? 0 : o + 1,
                                n = o - 1 < 0 ? t - 1 : t - 1 <= o - 1 ? 0 : o - 1,
                                s = new Image,
                                t = new Image;
                            s.addEventListener("load", function(t) {
                                t = t.target.getAttribute("src"); - 1 === e.loadedImages.indexOf(t) && e.loadedImages.push(t), e.relatedElements[o].dispatchEvent(new Event("nextImageLoaded." + e.eventNamespace))
                            }), s.setAttribute("src", this.relatedElements[i].getAttribute(this.options.sourceAttr)), t.addEventListener("load", function(t) {
                                t = t.target.getAttribute("src"); - 1 === e.loadedImages.indexOf(t) && e.loadedImages.push(t), e.relatedElements[o].dispatchEvent(new Event("prevImageLoaded." + e.eventNamespace))
                            }), t.setAttribute("src", this.relatedElements[n].getAttribute(this.options.sourceAttr))
                        }
                    }, {
                        key: "loadImage",
                        value: function(t) {
                            var e = this,
                                o = t;
                            this.options.rtl && (t = -t), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event("change." + this.eventNamespace)), this.relatedElements[this.currentImageIndex].dispatchEvent(new Event((1 === t ? "next" : "prev") + "." + this.eventNamespace));
                            t = this.currentImageIndex + t;
                            if (this.isAnimating || (t < 0 || t >= this.relatedElements.length) && !1 === this.options.loop) return !1;
                            this.currentImageIndex = t < 0 ? this.relatedElements.length - 1 : t > this.relatedElements.length - 1 ? 0 : t, this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1, this.options.animationSlide && this.slide(this.options.animationSpeed / 1e3, -100 * o - this.controlCoordinates.swipeDiff + "px"), this.fadeOut(this.domNodes.image, this.options.fadeSpeed, function() {
                                e.isAnimating = !0, e.isClosing ? e.isAnimating = !1 : setTimeout(function() {
                                    var t = e.relatedElements[e.currentImageIndex];
                                    e.currentImage.setAttribute("src", t.getAttribute(e.options.sourceAttr)), -1 === e.loadedImages.indexOf(t.getAttribute(e.options.sourceAttr)) && e.show(e.domNodes.spinner), e.domNodes.image.contains(e.domNodes.caption) && e.domNodes.image.removeChild(e.domNodes.caption), e.adjustImage(o), e.options.preloading && e.preload()
                                }, 100)
                            })
                        }
                    }, {
                        key: "adjustImage",
                        value: function(s) {
                            var a = this;
                            if (!this.currentImage) return !1;
                            var t = new Image,
                                r = window.innerWidth * this.options.widthRatio,
                                l = window.innerHeight * this.options.heightRatio;
                            t.setAttribute("src", this.currentImage.getAttribute("src")), this.currentImage.dataset.scale = 1, this.currentImage.dataset.translateX = 0, this.currentImage.dataset.translateY = 0, this.zoomPanElement(0, 0, 1), t.addEventListener("error", function(t) {
                                a.relatedElements[a.currentImageIndex].dispatchEvent(new Event("error." + a.eventNamespace)), a.isAnimating = !1, a.isOpen = !0, a.domNodes.spinner.style.display = "none";
                                var e = 1 === s || -1 === s;
                                if (a.initialImageIndex === a.currentImageIndex && e) return a.close();
                                a.options.alertError && alert(a.options.alertErrorMessage), a.loadImage(e ? s : 1)
                            }), t.addEventListener("load", function(t) {
                                void 0 !== s && (a.relatedElements[a.currentImageIndex].dispatchEvent(new Event("changed." + a.eventNamespace)), a.relatedElements[a.currentImageIndex].dispatchEvent(new Event((1 === s ? "nextDone" : "prevDone") + "." + a.eventNamespace))), a.options.history && a.updateURL(), -1 === a.loadedImages.indexOf(a.currentImage.getAttribute("src")) && a.loadedImages.push(a.currentImage.getAttribute("src"));
                                var e, o, i = t.target.width,
                                    n = t.target.height;
                                (a.options.scaleImageToRatio || r < i || l < n) && (i /= t = r / l < i / n ? i / r : n / l, n /= t), a.domNodes.image.style.top = (window.innerHeight - n) / 2 + "px", a.domNodes.image.style.left = (window.innerWidth - i - a.globalScrollbarWidth) / 2 + "px", a.domNodes.image.style.width = i + "px", a.domNodes.image.style.height = n + "px", a.domNodes.spinner.style.display = "none", a.options.focus && a.forceFocus(), a.fadeIn(a.currentImage, a.options.fadeSpeed, function() {
                                    a.options.focus && a.domNodes.wrapper.focus()
                                }), a.isOpen = !0, "string" == typeof a.options.captionSelector ? e = "self" === a.options.captionSelector ? a.relatedElements[a.currentImageIndex] : a.relatedElements[a.currentImageIndex].querySelector(a.options.captionSelector) : "function" == typeof a.options.captionSelector && (e = a.options.captionSelector(a.relatedElements[a.currentImageIndex])), a.options.captions && e && (o = "data" === a.options.captionType ? e.dataset[a.options.captionsData] : "text" === a.options.captionType ? e.innerHTML : e.getAttribute(a.options.captionsData)), a.options.loop ? 1 === a.relatedElements.length ? a.hide(a.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : a.show(a.domNodes.navigation.querySelectorAll(".sl-prev, .sl-next")) : (0 === a.currentImageIndex && a.hide(a.domNodes.navigation.querySelector(".sl-prev")), a.currentImageIndex >= a.relatedElements.length - 1 && a.hide(a.domNodes.navigation.querySelector(".sl-next")), 0 < a.currentImageIndex && a.show(a.domNodes.navigation.querySelector(".sl-prev")), a.currentImageIndex < a.relatedElements.length - 1 && a.show(a.domNodes.navigation.querySelector(".sl-next"))), 1 === s || -1 === s ? (a.options.animationSlide && (a.slide(0, 100 * s + "px"), setTimeout(function() {
                                    a.slide(a.options.animationSpeed / 1e3, "0px")
                                }, 50)), a.fadeIn(a.domNodes.image, a.options.fadeSpeed, function() {
                                    a.isAnimating = !1, a.setCaption(o, i)
                                })) : (a.isAnimating = !1, a.setCaption(o, i)), a.options.additionalHtml && !a.domNodes.additionalHtml && (a.domNodes.additionalHtml = document.createElement("div"), a.domNodes.additionalHtml.classList.add("sl-additional-html"), a.domNodes.additionalHtml.innerHTML = a.options.additionalHtml, a.domNodes.image.appendChild(a.domNodes.additionalHtml))
                            })
                        }
                    }, {
                        key: "zoomPanElement",
                        value: function(t, e, o) {
                            this.currentImage.style[this.transitionPrefix + "transform"] = "translate(" + t + "," + e + ") scale(" + o + ")"
                        }
                    }, {
                        key: "minMax",
                        value: function(t, e, o) {
                            return t < e ? e : o < t ? o : t
                        }
                    }, {
                        key: "setZoomData",
                        value: function(t, e, o) {
                            this.currentImage.dataset.scale = t, this.currentImage.dataset.translateX = e, this.currentImage.dataset.translateY = o
                        }
                    }, {
                        key: "hashchangeHandler",
                        value: function() {
                            this.isOpen && this.hash === this.initialLocationHash && (this.hashReseted = !0, this.close())
                        }
                    }, {
                        key: "addEvents",
                        value: function() {
                            var o, i = this;
                            this.addEventListener(window, "resize." + this.eventNamespace, function(t) {
                                i.isOpen && i.adjustImage()
                            }), this.addEventListener(this.domNodes.closeButton, ["click." + this.eventNamespace, "touchstart." + this.eventNamespace], this.close.bind(this)), this.options.history && setTimeout(function() {
                                i.addEventListener(window, "hashchange." + i.eventNamespace, function(t) {
                                    i.isOpen && i.hashchangeHandler()
                                })
                            }, 40), this.addEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace, function(t) {
                                return !t.currentTarget.tagName.match(/button/i) || (t.preventDefault(), i.controlCoordinates.swipeDiff = 0, void i.loadImage(t.currentTarget.classList.contains("sl-next") ? 1 : -1))
                            }), this.options.scrollZoom && (o = 1, this.addEventListener(this.domNodes.image, ["mousewheel", "DOMMouseScroll"], function(t) {
                                if (i.controlCoordinates.mousedown || i.isAnimating || i.isClosing || !i.isOpen) return !0;
                                0 == i.controlCoordinates.containerHeight && (i.controlCoordinates.containerHeight = i.getDimensions(i.domNodes.image).height, i.controlCoordinates.containerWidth = i.getDimensions(i.domNodes.image).width, i.controlCoordinates.imgHeight = i.getDimensions(i.currentImage).height, i.controlCoordinates.imgWidth = i.getDimensions(i.currentImage).width, i.controlCoordinates.containerOffsetX = i.domNodes.image.offsetLeft, i.controlCoordinates.containerOffsetY = i.domNodes.image.offsetTop, i.controlCoordinates.initialOffsetX = parseFloat(i.currentImage.dataset.translateX), i.controlCoordinates.initialOffsetY = parseFloat(i.currentImage.dataset.translateY)), t.preventDefault();
                                var e = t.delta || t.wheelDelta;
                                void 0 === e && (e = t.detail), e = Math.max(-1, Math.min(1, e)), o += e * i.options.scrollZoomFactor * o, o = Math.max(1, Math.min(i.options.maxZoom, o)), i.controlCoordinates.targetScale = o;
                                e = document.documentElement.scrollTop || document.body.scrollTop;
                                i.controlCoordinates.pinchOffsetX = t.pageX, i.controlCoordinates.pinchOffsetY = t.pageY - e || 0, i.controlCoordinates.limitOffsetX = (i.controlCoordinates.imgWidth * i.controlCoordinates.targetScale - i.controlCoordinates.containerWidth) / 2, i.controlCoordinates.limitOffsetY = (i.controlCoordinates.imgHeight * i.controlCoordinates.targetScale - i.controlCoordinates.containerHeight) / 2, i.controlCoordinates.scaleDifference = i.controlCoordinates.targetScale - i.controlCoordinates.initialScale, i.controlCoordinates.targetOffsetX = i.controlCoordinates.imgWidth * i.controlCoordinates.targetScale <= i.controlCoordinates.containerWidth ? 0 : i.minMax(i.controlCoordinates.initialOffsetX - (i.controlCoordinates.pinchOffsetX - i.controlCoordinates.containerOffsetX - i.controlCoordinates.containerWidth / 2 - i.controlCoordinates.initialOffsetX) / (i.controlCoordinates.targetScale - i.controlCoordinates.scaleDifference) * i.controlCoordinates.scaleDifference, -1 * i.controlCoordinates.limitOffsetX, i.controlCoordinates.limitOffsetX), i.controlCoordinates.targetOffsetY = i.controlCoordinates.imgHeight * i.controlCoordinates.targetScale <= i.controlCoordinates.containerHeight ? 0 : i.minMax(i.controlCoordinates.initialOffsetY - (i.controlCoordinates.pinchOffsetY - i.controlCoordinates.containerOffsetY - i.controlCoordinates.containerHeight / 2 - i.controlCoordinates.initialOffsetY) / (i.controlCoordinates.targetScale - i.controlCoordinates.scaleDifference) * i.controlCoordinates.scaleDifference, -1 * i.controlCoordinates.limitOffsetY, i.controlCoordinates.limitOffsetY), i.zoomPanElement(i.controlCoordinates.targetOffsetX + "px", i.controlCoordinates.targetOffsetY + "px", i.controlCoordinates.targetScale), 1 < i.controlCoordinates.targetScale ? (i.controlCoordinates.zoomed = !0, (!i.domNodes.caption.style.opacity || 0 < i.domNodes.caption.style.opacity) && "none" !== i.domNodes.caption.style.display && i.fadeOut(i.domNodes.caption, i.options.fadeSpeed)) : (1 === i.controlCoordinates.initialScale && (i.controlCoordinates.zoomed = !1, "none" === i.domNodes.caption.style.display && i.fadeIn(i.domNodes.caption, i.options.fadeSpeed)), i.controlCoordinates.initialPinchDistance = null, i.controlCoordinates.capture = !1), i.controlCoordinates.initialPinchDistance = i.controlCoordinates.targetPinchDistance, i.controlCoordinates.initialScale = i.controlCoordinates.targetScale, i.controlCoordinates.initialOffsetX = i.controlCoordinates.targetOffsetX, i.controlCoordinates.initialOffsetY = i.controlCoordinates.targetOffsetY, i.setZoomData(i.controlCoordinates.targetScale, i.controlCoordinates.targetOffsetX, i.controlCoordinates.targetOffsetY), i.zoomPanElement(i.controlCoordinates.targetOffsetX + "px", i.controlCoordinates.targetOffsetY + "px", i.controlCoordinates.targetScale)
                            })), this.addEventListener(this.domNodes.image, ["touchstart." + this.eventNamespace, "mousedown." + this.eventNamespace], function(t) {
                                if ("A" === t.target.tagName && "touchstart" === t.type) return !0;
                                if ("mousedown" === t.type) t.preventDefault(), i.controlCoordinates.initialPointerOffsetX = t.clientX, i.controlCoordinates.initialPointerOffsetY = t.clientY, i.controlCoordinates.containerHeight = i.getDimensions(i.domNodes.image).height, i.controlCoordinates.containerWidth = i.getDimensions(i.domNodes.image).width, i.controlCoordinates.imgHeight = i.getDimensions(i.currentImage).height, i.controlCoordinates.imgWidth = i.getDimensions(i.currentImage).width, i.controlCoordinates.containerOffsetX = i.domNodes.image.offsetLeft, i.controlCoordinates.containerOffsetY = i.domNodes.image.offsetTop, i.controlCoordinates.initialOffsetX = parseFloat(i.currentImage.dataset.translateX), i.controlCoordinates.initialOffsetY = parseFloat(i.currentImage.dataset.translateY), i.controlCoordinates.capture = !0;
                                else {
                                    if (i.controlCoordinates.touchCount = t.touches.length, i.controlCoordinates.initialPointerOffsetX = t.touches[0].clientX, i.controlCoordinates.initialPointerOffsetY = t.touches[0].clientY, i.controlCoordinates.containerHeight = i.getDimensions(i.domNodes.image).height, i.controlCoordinates.containerWidth = i.getDimensions(i.domNodes.image).width, i.controlCoordinates.imgHeight = i.getDimensions(i.currentImage).height, i.controlCoordinates.imgWidth = i.getDimensions(i.currentImage).width, i.controlCoordinates.containerOffsetX = i.domNodes.image.offsetLeft, i.controlCoordinates.containerOffsetY = i.domNodes.image.offsetTop, 1 === i.controlCoordinates.touchCount) {
                                        if (i.controlCoordinates.doubleTapped) return i.currentImage.classList.add("sl-transition"), i.controlCoordinates.zoomed ? (i.controlCoordinates.initialScale = 1, i.setZoomData(i.controlCoordinates.initialScale, 0, 0), i.zoomPanElement("0px", "0px", i.controlCoordinates.initialScale), i.controlCoordinates.zoomed = !1) : (i.controlCoordinates.initialScale = i.options.doubleTapZoom, i.setZoomData(i.controlCoordinates.initialScale, 0, 0), i.zoomPanElement("0px", "0px", i.controlCoordinates.initialScale), (!i.domNodes.caption.style.opacity || 0 < i.domNodes.caption.style.opacity) && "none" !== i.domNodes.caption.style.display && i.fadeOut(i.domNodes.caption, i.options.fadeSpeed), i.controlCoordinates.zoomed = !0), setTimeout(function() {
                                            i.currentImage && i.currentImage.classList.remove("sl-transition")
                                        }, 200), !1;
                                        i.controlCoordinates.doubleTapped = !0, setTimeout(function() {
                                            i.controlCoordinates.doubleTapped = !1
                                        }, 300), i.controlCoordinates.initialOffsetX = parseFloat(i.currentImage.dataset.translateX), i.controlCoordinates.initialOffsetY = parseFloat(i.currentImage.dataset.translateY)
                                    } else 2 === i.controlCoordinates.touchCount && (i.controlCoordinates.initialPointerOffsetX2 = t.touches[1].clientX, i.controlCoordinates.initialPointerOffsetY2 = t.touches[1].clientY, i.controlCoordinates.initialOffsetX = parseFloat(i.currentImage.dataset.translateX), i.controlCoordinates.initialOffsetY = parseFloat(i.currentImage.dataset.translateY), i.controlCoordinates.pinchOffsetX = (i.controlCoordinates.initialPointerOffsetX + i.controlCoordinates.initialPointerOffsetX2) / 2, i.controlCoordinates.pinchOffsetY = (i.controlCoordinates.initialPointerOffsetY + i.controlCoordinates.initialPointerOffsetY2) / 2, i.controlCoordinates.initialPinchDistance = Math.sqrt((i.controlCoordinates.initialPointerOffsetX - i.controlCoordinates.initialPointerOffsetX2) * (i.controlCoordinates.initialPointerOffsetX - i.controlCoordinates.initialPointerOffsetX2) + (i.controlCoordinates.initialPointerOffsetY - i.controlCoordinates.initialPointerOffsetY2) * (i.controlCoordinates.initialPointerOffsetY - i.controlCoordinates.initialPointerOffsetY2)));
                                    i.controlCoordinates.capture = !0
                                }
                                return !!i.controlCoordinates.mousedown || (i.transitionCapable && (i.controlCoordinates.imageLeft = parseInt(i.domNodes.image.style.left, 10)), i.controlCoordinates.mousedown = !0, i.controlCoordinates.swipeDiff = 0, i.controlCoordinates.swipeYDiff = 0, i.controlCoordinates.swipeStart = t.pageX || t.touches[0].pageX, i.controlCoordinates.swipeYStart = t.pageY || t.touches[0].pageY, !1)
                            }), this.addEventListener(this.domNodes.image, ["touchmove." + this.eventNamespace, "mousemove." + this.eventNamespace, "MSPointerMove"], function(t) {
                                if (!i.controlCoordinates.mousedown) return !0;
                                if ("touchmove" === t.type) {
                                    if (!1 === i.controlCoordinates.capture) return !1;
                                    i.controlCoordinates.pointerOffsetX = t.touches[0].clientX, i.controlCoordinates.pointerOffsetY = t.touches[0].clientY, i.controlCoordinates.touchCount = t.touches.length, i.controlCoordinates.touchmoveCount++, 1 < i.controlCoordinates.touchCount ? (i.controlCoordinates.pointerOffsetX2 = t.touches[1].clientX, i.controlCoordinates.pointerOffsetY2 = t.touches[1].clientY, i.controlCoordinates.targetPinchDistance = Math.sqrt((i.controlCoordinates.pointerOffsetX - i.controlCoordinates.pointerOffsetX2) * (i.controlCoordinates.pointerOffsetX - i.controlCoordinates.pointerOffsetX2) + (i.controlCoordinates.pointerOffsetY - i.controlCoordinates.pointerOffsetY2) * (i.controlCoordinates.pointerOffsetY - i.controlCoordinates.pointerOffsetY2)), null === i.controlCoordinates.initialPinchDistance && (i.controlCoordinates.initialPinchDistance = i.controlCoordinates.targetPinchDistance), 1 <= Math.abs(i.controlCoordinates.initialPinchDistance - i.controlCoordinates.targetPinchDistance) && (i.controlCoordinates.targetScale = i.minMax(i.controlCoordinates.targetPinchDistance / i.controlCoordinates.initialPinchDistance * i.controlCoordinates.initialScale, 1, i.options.maxZoom), i.controlCoordinates.limitOffsetX = (i.controlCoordinates.imgWidth * i.controlCoordinates.targetScale - i.controlCoordinates.containerWidth) / 2, i.controlCoordinates.limitOffsetY = (i.controlCoordinates.imgHeight * i.controlCoordinates.targetScale - i.controlCoordinates.containerHeight) / 2, i.controlCoordinates.scaleDifference = i.controlCoordinates.targetScale - i.controlCoordinates.initialScale, i.controlCoordinates.targetOffsetX = i.controlCoordinates.imgWidth * i.controlCoordinates.targetScale <= i.controlCoordinates.containerWidth ? 0 : i.minMax(i.controlCoordinates.initialOffsetX - (i.controlCoordinates.pinchOffsetX - i.controlCoordinates.containerOffsetX - i.controlCoordinates.containerWidth / 2 - i.controlCoordinates.initialOffsetX) / (i.controlCoordinates.targetScale - i.controlCoordinates.scaleDifference) * i.controlCoordinates.scaleDifference, -1 * i.controlCoordinates.limitOffsetX, i.controlCoordinates.limitOffsetX), i.controlCoordinates.targetOffsetY = i.controlCoordinates.imgHeight * i.controlCoordinates.targetScale <= i.controlCoordinates.containerHeight ? 0 : i.minMax(i.controlCoordinates.initialOffsetY - (i.controlCoordinates.pinchOffsetY - i.controlCoordinates.containerOffsetY - i.controlCoordinates.containerHeight / 2 - i.controlCoordinates.initialOffsetY) / (i.controlCoordinates.targetScale - i.controlCoordinates.scaleDifference) * i.controlCoordinates.scaleDifference, -1 * i.controlCoordinates.limitOffsetY, i.controlCoordinates.limitOffsetY), i.zoomPanElement(i.controlCoordinates.targetOffsetX + "px", i.controlCoordinates.targetOffsetY + "px", i.controlCoordinates.targetScale), 1 < i.controlCoordinates.targetScale && (i.controlCoordinates.zoomed = !0, (!i.domNodes.caption.style.opacity || 0 < i.domNodes.caption.style.opacity) && "none" !== i.domNodes.caption.style.display && i.fadeOut(i.domNodes.caption, i.options.fadeSpeed)), i.controlCoordinates.initialPinchDistance = i.controlCoordinates.targetPinchDistance, i.controlCoordinates.initialScale = i.controlCoordinates.targetScale, i.controlCoordinates.initialOffsetX = i.controlCoordinates.targetOffsetX, i.controlCoordinates.initialOffsetY = i.controlCoordinates.targetOffsetY)) : (i.controlCoordinates.targetScale = i.controlCoordinates.initialScale, i.controlCoordinates.limitOffsetX = (i.controlCoordinates.imgWidth * i.controlCoordinates.targetScale - i.controlCoordinates.containerWidth) / 2, i.controlCoordinates.limitOffsetY = (i.controlCoordinates.imgHeight * i.controlCoordinates.targetScale - i.controlCoordinates.containerHeight) / 2, i.controlCoordinates.targetOffsetX = i.controlCoordinates.imgWidth * i.controlCoordinates.targetScale <= i.controlCoordinates.containerWidth ? 0 : i.minMax(i.controlCoordinates.pointerOffsetX - (i.controlCoordinates.initialPointerOffsetX - i.controlCoordinates.initialOffsetX), -1 * i.controlCoordinates.limitOffsetX, i.controlCoordinates.limitOffsetX), i.controlCoordinates.targetOffsetY = i.controlCoordinates.imgHeight * i.controlCoordinates.targetScale <= i.controlCoordinates.containerHeight ? 0 : i.minMax(i.controlCoordinates.pointerOffsetY - (i.controlCoordinates.initialPointerOffsetY - i.controlCoordinates.initialOffsetY), -1 * i.controlCoordinates.limitOffsetY, i.controlCoordinates.limitOffsetY), Math.abs(i.controlCoordinates.targetOffsetX) === Math.abs(i.controlCoordinates.limitOffsetX) && (i.controlCoordinates.initialOffsetX = i.controlCoordinates.targetOffsetX, i.controlCoordinates.initialPointerOffsetX = i.controlCoordinates.pointerOffsetX), Math.abs(i.controlCoordinates.targetOffsetY) === Math.abs(i.controlCoordinates.limitOffsetY) && (i.controlCoordinates.initialOffsetY = i.controlCoordinates.targetOffsetY, i.controlCoordinates.initialPointerOffsetY = i.controlCoordinates.pointerOffsetY), i.setZoomData(i.controlCoordinates.initialScale, i.controlCoordinates.targetOffsetX, i.controlCoordinates.targetOffsetY), i.zoomPanElement(i.controlCoordinates.targetOffsetX + "px", i.controlCoordinates.targetOffsetY + "px", i.controlCoordinates.targetScale))
                                }
                                if ("mousemove" === t.type && i.controlCoordinates.mousedown) {
                                    if ("touchmove" == t.type) return !0;
                                    if (t.preventDefault(), !1 === i.controlCoordinates.capture) return !1;
                                    i.controlCoordinates.pointerOffsetX = t.clientX, i.controlCoordinates.pointerOffsetY = t.clientY, i.controlCoordinates.targetScale = i.controlCoordinates.initialScale, i.controlCoordinates.limitOffsetX = (i.controlCoordinates.imgWidth * i.controlCoordinates.targetScale - i.controlCoordinates.containerWidth) / 2, i.controlCoordinates.limitOffsetY = (i.controlCoordinates.imgHeight * i.controlCoordinates.targetScale - i.controlCoordinates.containerHeight) / 2, i.controlCoordinates.targetOffsetX = i.controlCoordinates.imgWidth * i.controlCoordinates.targetScale <= i.controlCoordinates.containerWidth ? 0 : i.minMax(i.controlCoordinates.pointerOffsetX - (i.controlCoordinates.initialPointerOffsetX - i.controlCoordinates.initialOffsetX), -1 * i.controlCoordinates.limitOffsetX, i.controlCoordinates.limitOffsetX), i.controlCoordinates.targetOffsetY = i.controlCoordinates.imgHeight * i.controlCoordinates.targetScale <= i.controlCoordinates.containerHeight ? 0 : i.minMax(i.controlCoordinates.pointerOffsetY - (i.controlCoordinates.initialPointerOffsetY - i.controlCoordinates.initialOffsetY), -1 * i.controlCoordinates.limitOffsetY, i.controlCoordinates.limitOffsetY), Math.abs(i.controlCoordinates.targetOffsetX) === Math.abs(i.controlCoordinates.limitOffsetX) && (i.controlCoordinates.initialOffsetX = i.controlCoordinates.targetOffsetX, i.controlCoordinates.initialPointerOffsetX = i.controlCoordinates.pointerOffsetX), Math.abs(i.controlCoordinates.targetOffsetY) === Math.abs(i.controlCoordinates.limitOffsetY) && (i.controlCoordinates.initialOffsetY = i.controlCoordinates.targetOffsetY, i.controlCoordinates.initialPointerOffsetY = i.controlCoordinates.pointerOffsetY), i.setZoomData(i.controlCoordinates.initialScale, i.controlCoordinates.targetOffsetX, i.controlCoordinates.targetOffsetY), i.zoomPanElement(i.controlCoordinates.targetOffsetX + "px", i.controlCoordinates.targetOffsetY + "px", i.controlCoordinates.targetScale)
                                }
                                i.controlCoordinates.zoomed || (i.controlCoordinates.swipeEnd = t.pageX || t.touches[0].pageX, i.controlCoordinates.swipeYEnd = t.pageY || t.touches[0].pageY, i.controlCoordinates.swipeDiff = i.controlCoordinates.swipeStart - i.controlCoordinates.swipeEnd, i.controlCoordinates.swipeYDiff = i.controlCoordinates.swipeYStart - i.controlCoordinates.swipeYEnd, i.options.animationSlide && i.slide(0, -i.controlCoordinates.swipeDiff + "px"))
                            }), this.addEventListener(this.domNodes.image, ["touchend." + this.eventNamespace, "mouseup." + this.eventNamespace, "touchcancel." + this.eventNamespace, "mouseleave." + this.eventNamespace, "pointerup", "pointercancel", "MSPointerUp", "MSPointerCancel"], function(t) {
                                i.isTouchDevice && "touchend" === t.type && (i.controlCoordinates.touchCount = t.touches.length, 0 === i.controlCoordinates.touchCount ? (i.currentImage && i.setZoomData(i.controlCoordinates.initialScale, i.controlCoordinates.targetOffsetX, i.controlCoordinates.targetOffsetY), 1 === i.controlCoordinates.initialScale && (i.controlCoordinates.zoomed = !1, "none" === i.domNodes.caption.style.display && i.fadeIn(i.domNodes.caption, i.options.fadeSpeed)), i.controlCoordinates.initialPinchDistance = null, i.controlCoordinates.capture = !1) : 1 === i.controlCoordinates.touchCount ? (i.controlCoordinates.initialPointerOffsetX = t.touches[0].clientX, i.controlCoordinates.initialPointerOffsetY = t.touches[0].clientY) : 1 < i.controlCoordinates.touchCount && (i.controlCoordinates.initialPinchDistance = null)), i.controlCoordinates.mousedown && (t = !(i.controlCoordinates.mousedown = !1), i.options.loop || (0 === i.currentImageIndex && i.controlCoordinates.swipeDiff < 0 && (t = !1), i.currentImageIndex >= i.relatedElements.length - 1 && 0 < i.controlCoordinates.swipeDiff && (t = !1)), Math.abs(i.controlCoordinates.swipeDiff) > i.options.swipeTolerance && t ? i.loadImage(0 < i.controlCoordinates.swipeDiff ? 1 : -1) : i.options.animationSlide && i.slide(i.options.animationSpeed / 1e3, "0px"), i.options.swipeClose && 50 < Math.abs(i.controlCoordinates.swipeYDiff) && Math.abs(i.controlCoordinates.swipeDiff) < i.options.swipeTolerance && i.close())
                            }), this.addEventListener(this.domNodes.image, ["dblclick"], function(t) {
                                if (!i.isTouchDevice) return i.controlCoordinates.initialPointerOffsetX = t.clientX, i.controlCoordinates.initialPointerOffsetY = t.clientY, i.controlCoordinates.containerHeight = i.getDimensions(i.domNodes.image).height, i.controlCoordinates.containerWidth = i.getDimensions(i.domNodes.image).width, i.controlCoordinates.imgHeight = i.getDimensions(i.currentImage).height, i.controlCoordinates.imgWidth = i.getDimensions(i.currentImage).width, i.controlCoordinates.containerOffsetX = i.domNodes.image.offsetLeft, i.controlCoordinates.containerOffsetY = i.domNodes.image.offsetTop, i.currentImage.classList.add("sl-transition"), i.controlCoordinates.zoomed ? (i.controlCoordinates.initialScale = 1, i.setZoomData(i.controlCoordinates.initialScale, 0, 0), i.zoomPanElement("0px", "0px", i.controlCoordinates.initialScale), i.controlCoordinates.zoomed = !1, "none" === i.domNodes.caption.style.display && i.fadeIn(i.domNodes.caption, i.options.fadeSpeed)) : (i.controlCoordinates.initialScale = i.options.doubleTapZoom, i.setZoomData(i.controlCoordinates.initialScale, 0, 0), i.zoomPanElement("0px", "0px", i.controlCoordinates.initialScale), (!i.domNodes.caption.style.opacity || 0 < i.domNodes.caption.style.opacity) && "none" !== i.domNodes.caption.style.display && i.fadeOut(i.domNodes.caption, i.options.fadeSpeed), i.controlCoordinates.zoomed = !0), setTimeout(function() {
                                    i.currentImage && (i.currentImage.classList.remove("sl-transition"), i.currentImage.style[i.transitionPrefix + "transform-origin"] = null)
                                }, 200), !(i.controlCoordinates.capture = !0)
                            })
                        }
                    }, {
                        key: "getDimensions",
                        value: function(t) {
                            var e = window.getComputedStyle(t),
                                o = t.offsetHeight,
                                i = t.offsetWidth,
                                t = parseFloat(e.borderTopWidth);
                            return {
                                height: o - parseFloat(e.borderBottomWidth) - t - parseFloat(e.paddingTop) - parseFloat(e.paddingBottom),
                                width: i - parseFloat(e.borderLeftWidth) - parseFloat(e.borderRightWidth) - parseFloat(e.paddingLeft) - parseFloat(e.paddingRight)
                            }
                        }
                    }, {
                        key: "updateHash",
                        value: function() {
                            var t = "pid=" + (this.currentImageIndex + 1),
                                e = window.location.href.split("#")[0] + "#" + t;
                            this.hashReseted = !1, this.pushStateSupport ? window.history[this.historyHasChanges ? "replaceState" : "pushState"]("", document.title, e) : this.historyHasChanges ? window.location.replace(e) : window.location.hash = t, this.historyHasChanges || (this.urlChangedOnce = !0), this.historyHasChanges = !0
                        }
                    }, {
                        key: "resetHash",
                        value: function() {
                            this.hashReseted = !0, this.urlChangedOnce ? history.back() : this.pushStateSupport ? history.pushState("", document.title, window.location.pathname + window.location.search) : window.location.hash = "", clearTimeout(this.historyUpdateTimeout)
                        }
                    }, {
                        key: "updateURL",
                        value: function() {
                            clearTimeout(this.historyUpdateTimeout), this.historyHasChanges ? this.historyUpdateTimeout = setTimeout(this.updateHash.bind(this), 800) : this.updateHash()
                        }
                    }, {
                        key: "setCaption",
                        value: function(t, e) {
                            var o = this;
                            this.options.captions && t && "" !== t && void 0 !== t && (this.hide(this.domNodes.caption), this.domNodes.caption.style.width = e + "px", this.domNodes.caption.innerHTML = t, this.domNodes.image.appendChild(this.domNodes.caption), setTimeout(function() {
                                o.fadeIn(o.domNodes.caption, o.options.fadeSpeed)
                            }, this.options.captionDelay))
                        }
                    }, {
                        key: "slide",
                        value: function(t, e) {
                            if (!this.transitionCapable) return this.domNodes.image.style.left = e;
                            this.domNodes.image.style[this.transitionPrefix + "transform"] = "translateX(" + e + ")", this.domNodes.image.style[this.transitionPrefix + "transition"] = this.transitionPrefix + "transform " + t + "s linear"
                        }
                    }, {
                        key: "getRelated",
                        value: function(e) {
                            var t = e && !1 !== e && "nofollow" !== e ? Array.from(this.elements).filter(function(t) {
                                return t.getAttribute("rel") === e
                            }) : this.elements;
                            return t
                        }
                    }, {
                        key: "openImage",
                        value: function(t) {
                            var e = this;
                            t.dispatchEvent(new Event("show." + this.eventNamespace)), this.options.disableScroll && (this.globalScrollbarWidth = this.toggleScrollbar("hide")), this.options.htmlClass && "" !== this.options.htmlClass && document.querySelector("html").classList.add(this.options.htmlClass), document.body.appendChild(this.domNodes.wrapper), this.domNodes.wrapper.appendChild(this.domNodes.image), this.options.overlay && document.body.appendChild(this.domNodes.overlay), this.relatedElements = this.getRelated(t.rel), this.options.showCounter && (1 == this.relatedElements.length && this.domNodes.wrapper.contains(this.domNodes.counter) ? this.domNodes.wrapper.removeChild(this.domNodes.counter) : 1 < this.relatedElements.length && !this.domNodes.wrapper.contains(this.domNodes.counter) && this.domNodes.wrapper.appendChild(this.domNodes.counter)), this.isAnimating = !0, this.currentImageIndex = this.relatedElements.indexOf(t);
                            var o = t.getAttribute(this.options.sourceAttr);
                            this.currentImage = document.createElement("img"), this.currentImage.style.display = "none", this.currentImage.setAttribute("src", o), this.currentImage.dataset.scale = 1, this.currentImage.dataset.translateX = 0, this.currentImage.dataset.translateY = 0, -1 === this.loadedImages.indexOf(o) && this.loadedImages.push(o), this.domNodes.image.innerHTML = "", this.domNodes.image.setAttribute("style", ""), this.domNodes.image.appendChild(this.currentImage), this.fadeIn(this.domNodes.overlay, this.options.fadeSpeed), this.fadeIn([this.domNodes.counter, this.domNodes.navigation, this.domNodes.closeButton], this.options.fadeSpeed), this.show(this.domNodes.spinner), this.domNodes.counter.querySelector(".sl-current").innerHTML = this.currentImageIndex + 1, this.domNodes.counter.querySelector(".sl-total").innerHTML = this.relatedElements.length, this.adjustImage(), this.options.preloading && this.preload(), setTimeout(function() {
                                t.dispatchEvent(new Event("shown." + e.eventNamespace))
                            }, this.options.animationSpeed)
                        }
                    }, {
                        key: "forceFocus",
                        value: function() {
                            var e = this;
                            this.removeEventListener(document, "focusin." + this.eventNamespace), this.addEventListener(document, "focusin." + this.eventNamespace, function(t) {
                                document === t.target || e.domNodes.wrapper === t.target || e.domNodes.wrapper.contains(t.target) || e.domNodes.wrapper.focus()
                            })
                        }
                    }, {
                        key: "addEventListener",
                        value: function(t, e, o, i) {
                            t = this.wrap(t), e = this.wrap(e);
                            var n, s = m(t);
                            try {
                                for (s.s(); !(n = s.n()).done;) {
                                    var a = n.value;
                                    a.namespaces || (a.namespaces = {});
                                    var r, l = m(e);
                                    try {
                                        for (l.s(); !(r = l.n()).done;) {
                                            var d = r.value,
                                                c = i || !1;
                                            0 <= ["touchstart", "touchmove"].indexOf(d.split(".")[0]) && this.isPassiveEventsSupported && ("object" === h(c) ? c.passive = !0 : c = {
                                                passive: !0
                                            }), a.namespaces[d] = o, a.addEventListener(d.split(".")[0], o, c)
                                        }
                                    } catch (t) {
                                        l.e(t)
                                    } finally {
                                        l.f()
                                    }
                                }
                            } catch (t) {
                                s.e(t)
                            } finally {
                                s.f()
                            }
                        }
                    }, {
                        key: "removeEventListener",
                        value: function(t, e) {
                            t = this.wrap(t), e = this.wrap(e);
                            var o, i = m(t);
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var n, s = o.value,
                                        a = m(e);
                                    try {
                                        for (a.s(); !(n = a.n()).done;) {
                                            var r = n.value;
                                            s.namespaces && s.namespaces[r] && (s.removeEventListener(r.split(".")[0], s.namespaces[r]), delete s.namespaces[r])
                                        }
                                    } catch (t) {
                                        a.e(t)
                                    } finally {
                                        a.f()
                                    }
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                        }
                    }, {
                        key: "fadeOut",
                        value: function(r, t, l) {
                            var e, d = this,
                                o = m(r = this.wrap(r));
                            try {
                                for (o.s(); !(e = o.n()).done;) {
                                    var i = e.value;
                                    i.style.opacity = parseFloat(i) || window.getComputedStyle(i).getPropertyValue("opacity")
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            this.isFadeIn = !1;
                            var c = 16.66666 / (t || this.options.fadeSpeed);
                            (function t() {
                                var e = parseFloat(r[0].style.opacity);
                                if ((e -= c) < 0) {
                                    var o, i = m(r);
                                    try {
                                        for (i.s(); !(o = i.n()).done;) {
                                            var n = o.value;
                                            n.style.display = "none", n.style.opacity = 1
                                        }
                                    } catch (t) {
                                        i.e(t)
                                    } finally {
                                        i.f()
                                    }
                                    l && l.call(d, r)
                                } else {
                                    var s, a = m(r);
                                    try {
                                        for (a.s(); !(s = a.n()).done;) s.value.style.opacity = e
                                    } catch (t) {
                                        a.e(t)
                                    } finally {
                                        a.f()
                                    }
                                    requestAnimationFrame(t)
                                }
                            })()
                        }
                    }, {
                        key: "fadeIn",
                        value: function(a, t, r, e) {
                            var o, l = this,
                                i = m(a = this.wrap(a));
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var n = o.value;
                                    n.style.opacity = 0, n.style.display = e || "block"
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                            this.isFadeIn = !0;
                            var d = parseFloat(a[0].dataset.opacityTarget || 1),
                                c = 16.66666 * d / (t || this.options.fadeSpeed);
                            (function t() {
                                var e = parseFloat(a[0].style.opacity);
                                if ((e += c) > d) {
                                    var o, i = m(a);
                                    try {
                                        for (i.s(); !(o = i.n()).done;) o.value.style.opacity = d
                                    } catch (t) {
                                        i.e(t)
                                    } finally {
                                        i.f()
                                    }
                                    r && r.call(l, a)
                                } else {
                                    var n, s = m(a);
                                    try {
                                        for (s.s(); !(n = s.n()).done;) n.value.style.opacity = e
                                    } catch (t) {
                                        s.e(t)
                                    } finally {
                                        s.f()
                                    }
                                    l.isFadeIn && requestAnimationFrame(t)
                                }
                            })()
                        }
                    }, {
                        key: "hide",
                        value: function(t) {
                            var e, o = m(t = this.wrap(t));
                            try {
                                for (o.s(); !(e = o.n()).done;) {
                                    var i = e.value;
                                    "none" != i.style.display && (i.dataset.initialDisplay = i.style.display), i.style.display = "none"
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                        }
                    }, {
                        key: "show",
                        value: function(t, e) {
                            var o, i = m(t = this.wrap(t));
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var n = o.value;
                                    n.style.display = n.dataset.initialDisplay || e || "block"
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                        }
                    }, {
                        key: "wrap",
                        value: function(t) {
                            return "function" == typeof t[Symbol.iterator] && "string" != typeof t ? t : [t]
                        }
                    }, {
                        key: "on",
                        value: function(t, e) {
                            t = this.wrap(t);
                            var o, i = m(this.elements);
                            try {
                                for (i.s(); !(o = i.n()).done;) {
                                    var n = o.value;
                                    n.fullyNamespacedEvents || (n.fullyNamespacedEvents = {});
                                    var s, a = m(t);
                                    try {
                                        for (a.s(); !(s = a.n()).done;) {
                                            var r = s.value;
                                            n.fullyNamespacedEvents[r] = e, n.addEventListener(r, e)
                                        }
                                    } catch (t) {
                                        a.e(t)
                                    } finally {
                                        a.f()
                                    }
                                }
                            } catch (t) {
                                i.e(t)
                            } finally {
                                i.f()
                            }
                            return this
                        }
                    }, {
                        key: "off",
                        value: function(t) {
                            t = this.wrap(t);
                            var e, o = m(this.elements);
                            try {
                                for (o.s(); !(e = o.n()).done;) {
                                    var i, n = e.value,
                                        s = m(t);
                                    try {
                                        for (s.s(); !(i = s.n()).done;) {
                                            var a = i.value;
                                            void 0 !== n.fullyNamespacedEvents && a in n.fullyNamespacedEvents && n.removeEventListener(a, n.fullyNamespacedEvents[a])
                                        }
                                    } catch (t) {
                                        s.e(t)
                                    } finally {
                                        s.f()
                                    }
                                }
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            return this
                        }
                    }, {
                        key: "open",
                        value: function(t) {
                            t = t || this.elements[0], "undefined" != typeof jQuery && t instanceof jQuery && (t = t.get(0)), this.initialImageIndex = this.elements.indexOf(t), -1 < this.initialImageIndex && this.openImage(t)
                        }
                    }, {
                        key: "next",
                        value: function() {
                            this.loadImage(1)
                        }
                    }, {
                        key: "prev",
                        value: function() {
                            this.loadImage(-1)
                        }
                    }, {
                        key: "getLighboxData",
                        value: function() {
                            return {
                                currentImageIndex: this.currentImageIndex,
                                currentImage: this.currentImage,
                                globalScrollbarWidth: this.globalScrollbarWidth
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.off(["close." + this.eventNamespace, "closed." + this.eventNamespace, "nextImageLoaded." + this.eventNamespace, "prevImageLoaded." + this.eventNamespace, "change." + this.eventNamespace, "nextDone." + this.eventNamespace, "prevDone." + this.eventNamespace, "error." + this.eventNamespace, "changed." + this.eventNamespace, "next." + this.eventNamespace, "prev." + this.eventNamespace, "show." + this.eventNamespace, "shown." + this.eventNamespace]), this.removeEventListener(this.elements, "click." + this.eventNamespace), this.removeEventListener(document, "focusin." + this.eventNamespace), this.removeEventListener(document.body, "contextmenu." + this.eventNamespace), this.removeEventListener(document.body, "keyup." + this.eventNamespace), this.removeEventListener(this.domNodes.navigation.getElementsByTagName("button"), "click." + this.eventNamespace), this.removeEventListener(this.domNodes.closeButton, "click." + this.eventNamespace), this.removeEventListener(window, "resize." + this.eventNamespace), this.removeEventListener(window, "hashchange." + this.eventNamespace), this.close(), this.isOpen && (document.body.removeChild(this.domNodes.wrapper), document.body.removeChild(this.domNodes.overlay)), this.elements = null
                        }
                    }, {
                        key: "refresh",
                        value: function() {
                            if (!this.initialSelector) throw "refreshing only works when you initialize using a selector!";
                            var t = this.options,
                                e = this.initialSelector;
                            return this.destroy(), this.constructor(e, t), this
                        }
                    }]) && i(t.prototype, e), o && i(t, o), n
                }();
                o.default = t, e.SimpleLightbox = t
            }.call(this)
        }.call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}]
}, {}, [1]);
(function($) {
    "use strict";
    var didScroll;
    var lastScrollTop = 0;
    var delta = 100;
    var navbarHeight = $('.top-header').outerHeight();
    $(window).on('scroll', function() {
        didScroll = true;
    });
    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);
    $('.search-btn').on('click', function(e) {
        if ($(this).is('.inactive')) {
            $(this).toggleClass('inactive active');
            $('body').addClass('has-active-menu');
            $('.mask-nav-2').addClass('is-active');
        }
    });
    $('.exit-modal').on('click', function(e) {
        e.preventDefault();
        $('.search-btn').toggleClass('inactive active');
        $('body').removeClass('has-active-menu');
        $('.mask-nav-2').removeClass('is-active');
    });
    $(".menu-nav-2 li").on('mouseenter mouseleave', function(e) {
        if ($('ul', this).length) {
            var elm = $('.sub-menu', this);
            var off = elm.offset();
            var l = off.left;
            var w = elm.width();
            var docW = $(window).width();
            var isEntirelyVisible = (l + w <= docW);
            if (!isEntirelyVisible) {
                $(this).addClass('edge');
            } else {
                $(this).removeClass('edge');
            }
        }
    });
    if ($('.blocks-gallery-item a').length) {
        $('.blocks-gallery-item a').simpleLightbox({
            heightRatio: 1,
            widthRatio: 0.8
        });
    }
    if ($('.wp-block-image a').length) {
        $('.wp-block-image a').simpleLightbox({
            heightRatio: 1,
            widthRatio: 0.8
        });
    }
    $(".scrollup").hide();
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 400) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });
    $("a.scrolltop[href^='#']").on('click', function(e) {
        e.preventDefault();
        var hash = this.hash;
        $('html, body').stop().animate({
            scrollTop: 0
        }, 1000, 'easeOutExpo');
    });

    function hasScrolled() {
        var st = $(window).scrollTop();
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        if (st > lastScrollTop && st > navbarHeight) {
            $('.top-header').removeClass('nav-down').addClass('nav-up');
        } else {
            if (st + $(window).height() < $(document).height()) {
                $('.top-header').removeClass('nav-up').addClass('nav-down nav-bkg');
                if (st <= delta) {
                    $('.top-header').removeClass('nav-bkg');
                }
            }
        }
        lastScrollTop = st;
    }
})(jQuery);
(function($) {
    "use strict";
    $('.nav-button').on('click', function(e) {
        e.preventDefault();
        if ($(this).is('.inactive')) {
            $(this).toggleClass('inactive active');
            $('body').addClass('has-active-menu');
            $('.mask-nav-1, #header-1').addClass('is-active');
        } else if ($(this).is('.active')) {
            $(this).toggleClass('inactive active');
            $('body').removeClass('has-active-menu');
            $('.mask-nav-1, #header-1').removeClass('is-active');
        }
    });
    $('.menu-nav-1 > li.menu-item-has-children > a').on('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        if ($(this).parent().hasClass('menu-open'))
            $(this).parent().removeClass('menu-open');
        else {
            $('.menu-nav-1').find('.menu-item-has-children').removeClass('menu-open');
            $(this).parent().addClass('menu-open');
        }
    });
})(jQuery);
var sbi_js_exists = void 0 !== sbi_js_exists;
sbi_js_exists || (! function(i) {
    function e() {
        var i, e, t, s = s || {
            VER: "0.9.944"
        };
        s.bgs_Available = !1, s.bgs_CheckRunned = !1,
            function(i) {
                i.fn.extend({
                    sbi_imgLiquid: function(e) {
                        this.defaults = {
                                fill: !0,
                                verticalAlign: "center",
                                horizontalAlign: "center",
                                useBackgroundSize: !0,
                                useDataHtmlAttr: !0,
                                responsive: !0,
                                delay: 0,
                                fadeInTime: 0,
                                removeBoxBackground: !0,
                                hardPixels: !0,
                                responsiveCheckTime: 500,
                                timecheckvisibility: 500,
                                onStart: null,
                                onFinish: null,
                                onItemStart: null,
                                onItemFinish: null,
                                onItemError: null
                            },
                            function() {
                                if (!s.bgs_CheckRunned) {
                                    s.bgs_CheckRunned = !0;
                                    var e = i('<span style="background-size:cover" />');
                                    i("body").append(e),
                                        function() {
                                            var i = e[0];
                                            if (i && window.getComputedStyle) {
                                                var t = window.getComputedStyle(i, null);
                                                t && t.backgroundSize && (s.bgs_Available = "cover" === t.backgroundSize)
                                            }
                                        }(), e.remove()
                                }
                            }();
                        var t = this;
                        return this.options = e, this.settings = i.extend({}, this.defaults, this.options), this.settings.onStart && this.settings.onStart(), this.each(function(e) {
                            function n() {
                                (r.responsive || c.data("sbi_imgLiquid_oldProcessed")) && c.data("sbi_imgLiquid_settings") && (r = c.data("sbi_imgLiquid_settings"), l.actualSize = l.get(0).offsetWidth + l.get(0).offsetHeight / 1e4, l.sizeOld && l.actualSize !== l.sizeOld && o(), l.sizeOld = l.actualSize, setTimeout(n, r.responsiveCheckTime))
                            }

                            function a() {
                                c.data("sbi_imgLiquid_error", !0), l.addClass("sbi_imgLiquid_error"), r.onItemError && r.onItemError(e, l, c), d()
                            }

                            function o() {
                                var i, t, s, n, a, o, g, h, f = 0,
                                    u = 0,
                                    b = l.width(),
                                    _ = l.height();
                                void 0 === c.data("owidth") && c.data("owidth", c[0].width), void 0 === c.data("oheight") && c.data("oheight", c[0].height), r.fill === b / _ >= c.data("owidth") / c.data("oheight") ? (i = "100%", t = "auto", s = Math.floor(b), n = Math.floor(b * (c.data("oheight") / c.data("owidth")))) : (i = "auto", t = "100%", s = Math.floor(_ * (c.data("owidth") / c.data("oheight"))), n = Math.floor(_)), g = b - s, "left" === (a = r.horizontalAlign.toLowerCase()) && (u = 0), "center" === a && (u = .5 * g), "right" === a && (u = g), -1 !== a.indexOf("%") && ((a = parseInt(a.replace("%", ""), 10)) > 0 && (u = g * a * .01)), h = _ - n, "left" === (o = r.verticalAlign.toLowerCase()) && (f = 0), "center" === o && (f = .5 * h), "bottom" === o && (f = h), -1 !== o.indexOf("%") && ((o = parseInt(o.replace("%", ""), 10)) > 0 && (f = h * o * .01)), r.hardPixels && (i = s, t = n), c.css({
                                    width: i,
                                    height: t,
                                    "margin-left": Math.floor(u),
                                    "margin-top": Math.floor(f)
                                }), c.data("sbi_imgLiquid_oldProcessed") || (c.fadeTo(r.fadeInTime, 1), c.data("sbi_imgLiquid_oldProcessed", !0), r.removeBoxBackground && l.css("background-image", "none"), l.addClass("sbi_imgLiquid_nobgSize"), l.addClass("sbi_imgLiquid_ready")), r.onItemFinish && r.onItemFinish(e, l, c), d()
                            }

                            function d() {
                                e === t.length - 1 && t.settings.onFinish && t.settings.onFinish()
                            }
                            var r = t.settings,
                                l = i(this),
                                c = i("img:first", l);
                            return c.length ? (c.data("sbi_imgLiquid_settings") ? (l.removeClass("sbi_imgLiquid_error").removeClass("sbi_imgLiquid_ready"), r = i.extend({}, c.data("sbi_imgLiquid_settings"), t.options)) : r = i.extend({}, t.settings, function() {
                                var i = {};
                                if (t.settings.useDataHtmlAttr) {
                                    var e = l.attr("data-sbi_imgLiquid-fill"),
                                        n = l.attr("data-sbi_imgLiquid-horizontalAlign"),
                                        a = l.attr("data-sbi_imgLiquid-verticalAlign");
                                    ("true" === e || "false" === e) && (i.fill = Boolean("true" === e)), void 0 === n || "left" !== n && "center" !== n && "right" !== n && -1 === n.indexOf("%") || (i.horizontalAlign = n), void 0 === a || "top" !== a && "bottom" !== a && "center" !== a && -1 === a.indexOf("%") || (i.verticalAlign = a)
                                }
                                return s.isIE && t.settings.ieFadeInDisabled && (i.fadeInTime = 0), i
                            }()), c.data("sbi_imgLiquid_settings", r), r.onItemStart && r.onItemStart(e, l, c), void(s.bgs_Available && r.useBackgroundSize ? (-1 === l.css("background-image").indexOf(encodeURI(c.attr("src"))) && l.css({
                                "background-image": 'url("' + encodeURI(c.attr("src")) + '")'
                            }), l.css({
                                "background-size": r.fill ? "cover" : "contain",
                                "background-position": (r.horizontalAlign + " " + r.verticalAlign).toLowerCase(),
                                "background-repeat": "no-repeat"
                            }), i("a:first", l).css({
                                display: "block",
                                width: "100%",
                                height: "100%"
                            }), i("img", l).css({
                                display: "none"
                            }), r.onItemFinish && r.onItemFinish(e, l, c), l.addClass("sbi_imgLiquid_bgSize"), l.addClass("sbi_imgLiquid_ready"), d()) : function t() {
                                if (c.data("oldSrc") && c.data("oldSrc") !== c.attr("src")) {
                                    var s = c.clone().removeAttr("style");
                                    return s.data("sbi_imgLiquid_settings", c.data("sbi_imgLiquid_settings")), c.parent().prepend(s), c.remove(), (c = s)[0].width = 0, void setTimeout(t, 10)
                                }
                                return c.data("sbi_imgLiquid_oldProcessed") ? void o() : (c.data("sbi_imgLiquid_oldProcessed", !1), c.data("oldSrc", c.attr("src")), i("img:not(:first)", l).css("display", "none"), l.css({
                                    overflow: "hidden"
                                }), c.fadeTo(0, 0).removeAttr("width").removeAttr("height").css({
                                    visibility: "visible",
                                    "max-width": "none",
                                    "max-height": "none",
                                    width: "auto",
                                    height: "auto",
                                    display: "block"
                                }), c.on("error", a), c[0].onerror = a, function i() {
                                    c.data("sbi_imgLiquid_error") || c.data("sbi_imgLiquid_loaded") || c.data("sbi_imgLiquid_oldProcessed") || (l.is(":visible") && c[0].complete && c[0].width > 0 && c[0].height > 0 ? (c.data("sbi_imgLiquid_loaded", !0), setTimeout(o, e * r.delay)) : setTimeout(i, r.timecheckvisibility))
                                }(), void n())
                            }())) : void a()
                        })
                    }
                })
            }(jQuery), i = s.injectCss, e = document.getElementsByTagName("head")[0], (t = document.createElement("style")).type = "text/css", t.styleSheet ? t.styleSheet.cssText = i : t.appendChild(document.createTextNode(i)), e.appendChild(t)
    }

    function t() {
        this.feeds = {}, this.options = sb_instagram_js_options
    }

    function s(i, e, t) {
        this.el = i, this.index = e, this.settings = t, this.minImageWidth = 0, this.imageResolution = 150, this.resizedImages = {}, this.needsResizing = [], this.outOfPages = !1, this.page = 1, this.isInitialized = !1
    }

    function n(e, t) {
        i.ajax({
            url: sbiajaxurl,
            type: "post",
            data: e,
            success: t
        })
    }
    t.prototype = {
        createPage: function(e, t) {
            void 0 !== sb_instagram_js_options.ajax_url && void 0 === window.sbiajaxurl && (window.sbiajaxurl = sb_instagram_js_options.ajax_url), void 0 !== window.sbiajaxurl && -1 !== window.sbiajaxurl.indexOf(window.location.hostname) || (window.sbiajaxurl = location.protocol + "//" + window.location.hostname + "/wp-admin/admin-ajax.php"), i("#sbi-builder-app").length && void 0 === window.sbiresizedImages && i(".sbi_resized_image_data").length && void 0 !== i(".sbi_resized_image_data").attr("data-resized") && 0 === i(".sbi_resized_image_data").attr("data-resized").indexOf('{"') && (window.sbiresizedImages = JSON.parse(i(".sbi_resized_image_data").attr("data-resized")), i(".sbi_resized_image_data").remove()), i(".sbi_no_js_error_message").remove(), i(".sbi_no_js").removeClass("sbi_no_js"), e(t)
        },
        createFeeds: function(e) {
            e.whenFeedsCreated(i(".sbi").each(function(e) {
                i(this).attr("data-sbi-index", e + 1);
                var t = i(this),
                    a = void 0 !== t.attr("data-sbi-flags") ? t.attr("data-sbi-flags").split(",") : [],
                    o = void 0 !== t.attr("data-options") ? JSON.parse(t.attr("data-options")) : {};
                if (a.indexOf("testAjax") > -1) {
                    window.sbi.triggeredTest = !0;
                    n({
                        action: "sbi_on_ajax_test_trigger"
                    }, function(i) {
                        console.log("did test")
                    })
                }
                var d = {
                    cols: t.attr("data-cols"),
                    colsmobile: void 0 !== t.attr("data-colsmobile") && "same" !== t.attr("data-colsmobile") ? t.attr("data-colsmobile") : t.attr("data-cols"),
                    colstablet: void 0 !== t.attr("data-colstablet") && "same" !== t.attr("data-colstablet") ? t.attr("data-colstablet") : t.attr("data-cols"),
                    num: t.attr("data-num"),
                    imgRes: t.attr("data-res"),
                    feedID: t.attr("data-feedid"),
                    postID: "undefind" != typeof t.attr("data-postid") ? t.attr("data-postid") : "unknown",
                    shortCodeAtts: t.attr("data-shortcode-atts"),
                    resizingEnabled: -1 === a.indexOf("resizeDisable"),
                    imageLoadEnabled: -1 === a.indexOf("imageLoadDisable"),
                    debugEnabled: a.indexOf("debug") > -1,
                    favorLocal: a.indexOf("favorLocal") > -1,
                    ajaxPostLoad: a.indexOf("ajaxPostLoad") > -1,
                    gdpr: a.indexOf("gdpr") > -1,
                    overrideBlockCDN: a.indexOf("overrideBlockCDN") > -1,
                    consentGiven: !1,
                    locator: a.indexOf("locator") > -1,
                    autoMinRes: 1,
                    general: o
                };
                window.sbi.feeds[e] = function(i, e, t) {
                    return new s(i, e, t)
                }(this, e, d), window.sbi.feeds[e].setResizedImages(), window.sbi.feeds[e].init();
                var r = jQuery.Event("sbiafterfeedcreate");
                r.feed = window.sbi.feeds[e], jQuery(window).trigger(r)
            }))
        },
        afterFeedsCreated: function() {
            i(".sb_instagram_header").each(function() {
                var e = i(this);
                e.find(".sbi_header_link").on("mouseenter mouseleave", function(i) {
                    switch (i.type) {
                        case "mouseenter":
                            e.find(".sbi_header_img_hover").addClass("sbi_fade_in");
                            break;
                        case "mouseleave":
                            e.find(".sbi_header_img_hover").removeClass("sbi_fade_in")
                    }
                })
            })
        },
        encodeHTML: function(i) {
            return void 0 === i ? "" : i.replace(/(>)/g, "&gt;").replace(/(<)/g, "&lt;").replace(/(&lt;br\/&gt;)/g, "<br>").replace(/(&lt;br&gt;)/g, "<br>")
        },
        urlDetect: function(i) {
            return i.match(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g)
        }
    }, s.prototype = {
        init: function() {
            var e = this;
            e.settings.consentGiven = e.checkConsent(), i(this.el).find(".sbi_photo").parent("p").length && i(this.el).addClass("sbi_no_autop"), i(this.el).find("#sbi_mod_error").length && i(this.el).prepend(i(this.el).find("#sbi_mod_error")), this.settings.ajaxPostLoad ? this.getNewPostSet() : this.afterInitialImagesLoaded();
            var t, s = (t = 0, function(i, e) {
                clearTimeout(t), t = setTimeout(i, e)
            });
            jQuery(window).on("resize", function() {
                s(function() {
                    e.afterResize()
                }, 500)
            }), i(this.el).find(".sbi_item").each(function() {
                e.lazyLoadCheck(i(this))
            })
        },
        initLayout: function() {},
        afterInitialImagesLoaded: function() {
            this.initLayout(), this.loadMoreButtonInit(), this.hideExtraImagesForWidth(), this.beforeNewImagesRevealed(), this.revealNewImages(), this.afterNewImagesRevealed()
        },
        afterResize: function() {
            this.setImageHeight(), this.setImageResolution(), this.maybeRaiseImageResolution(), this.setImageSizeClass()
        },
        afterLoadMoreClicked: function(i) {
            i.find(".sbi_loader").removeClass("sbi_hidden"), i.find(".sbi_btn_text").addClass("sbi_hidden"), i.closest(".sbi").find(".sbi_num_diff_hide").addClass("sbi_transition").removeClass("sbi_num_diff_hide")
        },
        afterNewImagesLoaded: function() {
            var e = i(this.el),
                t = this;
            this.beforeNewImagesRevealed(), this.revealNewImages(), this.afterNewImagesRevealed(), setTimeout(function() {
                e.find(".sbi_loader").addClass("sbi_hidden"), e.find(".sbi_btn_text").removeClass("sbi_hidden"), t.maybeRaiseImageResolution()
            }, 500)
        },
        beforeNewImagesRevealed: function() {
            this.setImageHeight(), this.maybeRaiseImageResolution(!0), this.setImageSizeClass()
        },
        revealNewImages: function() {
            var e = i(this.el);
            e.find(".sbi-screenreader").each(function() {
                i(this).find("img").remove()
            }), "function" == typeof sbi_custom_js && setTimeout(function() {
                sbi_custom_js()
            }, 100), this.applyImageLiquid(), e.find(".sbi_item").each(function(i) {
                jQuery(this).find(".sbi_photo").on("mouseenter mouseleave", function(i) {
                    switch (i.type) {
                        case "mouseenter":
                            jQuery(this).fadeTo(200, .85);
                            break;
                        case "mouseleave":
                            jQuery(this).stop().fadeTo(500, 1)
                    }
                })
            }), setTimeout(function() {
                jQuery("#sbi_images .sbi_item.sbi_new").removeClass("sbi_new");
                var i = 10;
                e.find(".sbi_transition").each(function() {
                    var e = jQuery(this);
                    setTimeout(function() {
                        e.removeClass("sbi_transition")
                    }, i), i += 10
                })
            }, 500)
        },
        lazyLoadCheck: function(e) {
            if (e.find(".sbi_photo").length && !e.closest(".sbi").hasClass("sbi-no-ll-check")) {
                var t = this.getImageUrls(e),
                    s = void 0 !== t[640] ? t[640] : e.find(".sbi_photo").attr("data-full-res");
                if (!this.settings.consentGiven && s.indexOf("scontent") > -1) return;
                e.find(".sbi_photo img").each(function() {
                    s && void 0 !== i(this).attr("data-src") && i(this).attr("data-src", s), s && void 0 !== i(this).attr("data-orig-src") && i(this).attr("data-orig-src", s), i(this).on("load", function() {
                        !i(this).hasClass("sbi-replaced") && i(this).attr("src").indexOf("placeholder") > -1 && (i(this).addClass("sbi-replaced"), s && (i(this).attr("src", s), i(this).closest(".sbi_imgLiquid_bgSize").length && i(this).closest(".sbi_imgLiquid_bgSize").css("background-image", "url(" + s + ")")))
                    })
                })
            }
        },
        afterNewImagesRevealed: function() {
            this.listenForVisibilityChange(), this.sendNeedsResizingToServer(), this.settings.imageLoadEnabled || i(".sbi_no_resraise").removeClass("sbi_no_resraise");
            var e = i.Event("sbiafterimagesloaded");
            e.el = i(this.el), i(window).trigger(e)
        },
        setResizedImages: function() {
            i(this.el).find(".sbi_resized_image_data").length && void 0 !== i(this.el).find(".sbi_resized_image_data").attr("data-resized") && 0 === i(this.el).find(".sbi_resized_image_data").attr("data-resized").indexOf('{"') ? (this.resizedImages = JSON.parse(i(this.el).find(".sbi_resized_image_data").attr("data-resized")), i(this.el).find(".sbi_resized_image_data").remove()) : void 0 !== window.sbiresizedImages && (this.resizedImages = window.sbiresizedImages)
        },
        sendNeedsResizingToServer: function() {
            var e = this,
                t = i(this.el);
            if (e.needsResizing.length > 0 && e.settings.resizingEnabled) {
                var s = i(this.el).find(".sbi_item").length,
                    a = void 0 !== e.settings.general.cache_all && e.settings.general.cache_all,
                    o = "";
                if (void 0 !== t.attr("data-locatornonce") && (o = t.attr("data-locatornonce")), i("#sbi-builder-app").length) {
                    if (void 0 !== window.sbiresizeTriggered && window.sbiresizeTriggered) return;
                    window.sbiresizeTriggered = !0
                }
                n({
                    action: "sbi_resized_images_submit",
                    needs_resizing: e.needsResizing,
                    offset: s,
                    feed_id: e.settings.feedID,
                    atts: e.settings.shortCodeAtts,
                    location: e.locationGuess(),
                    post_id: e.settings.postID,
                    cache_all: a,
                    locator_nonce: o
                }, function(t) {
                    var s = t;
                    for (var n in "object" != typeof t && 0 === t.trim().indexOf("{") && (s = JSON.parse(t.trim())), e.settings.debugEnabled && console.log(s), s) s.hasOwnProperty(n) && (e.resizedImages[n] = s[n]);
                    e.maybeRaiseImageResolution(), setTimeout(function() {
                        e.afterResize()
                    }, 500), i("#sbi-builder-app").length && (window.sbiresizeTriggered = !1)
                })
            } else if (e.settings.locator) {
                o = "";
                void 0 !== t.attr("data-locatornonce") && (o = t.attr("data-locatornonce")), n({
                    action: "sbi_do_locator",
                    feed_id: e.settings.feedID,
                    atts: e.settings.shortCodeAtts,
                    location: e.locationGuess(),
                    post_id: e.settings.postID,
                    locator_nonce: o
                }, function(i) {})
            }
        },
        loadMoreButtonInit: function() {
            var e = i(this.el),
                t = this;
            e.find("#sbi_load .sbi_load_btn").off().on("click", function() {
                t.afterLoadMoreClicked(jQuery(this)), t.getNewPostSet()
            })
        },
        getNewPostSet: function() {
            var e = i(this.el),
                t = this;
            t.page++;
            var s = "";
            void 0 !== e.attr("data-locatornonce") && (s = e.attr("data-locatornonce"));
            n({
                action: "sbi_load_more_clicked",
                offset: e.find(".sbi_item").length,
                page: t.page,
                feed_id: t.settings.feedID,
                atts: t.settings.shortCodeAtts,
                location: t.locationGuess(),
                post_id: t.settings.postID,
                current_resolution: t.imageResolution,
                locator_nonce: s
            }, function(s) {
                var n = s;
                "object" != typeof s && 0 === s.trim().indexOf("{") && (n = JSON.parse(s.trim())), t.settings.debugEnabled && console.log(n), t.appendNewPosts(n.html), t.addResizedImages(n.resizedImages), t.settings.ajaxPostLoad ? (t.settings.ajaxPostLoad = !1, t.afterInitialImagesLoaded()) : t.afterNewImagesLoaded(), n.feedStatus.shouldPaginate ? t.outOfPages = !1 : (t.outOfPages = !0, e.find(".sbi_load_btn").hide()), i(".sbi_no_js").removeClass("sbi_no_js")
            })
        },
        appendNewPosts: function(e) {
            var t = i(this.el);
            t.find("#sbi_images .sbi_item").length ? t.find("#sbi_images .sbi_item").last().after(e) : t.find("#sbi_images").append(e)
        },
        addResizedImages: function(i) {
            for (var e in i) this.resizedImages[e] = i[e]
        },
        setImageHeight: function() {
            var e = i(this.el),
                t = e.find(".sbi_photo").eq(0).innerWidth(),
                s = this.getColumnCount(),
                n = e.find("#sbi_images").innerWidth() - e.find("#sbi_images").width(),
                a = n / 2;
            sbi_photo_width_manual = e.find("#sbi_images").width() / s - n, e.find(".sbi_photo").css("height", t), e.find(".sbi-owl-nav").length && setTimeout(function() {
                var i = 2;
                e.find(".sbi_owl2row-item").length && (i = 1);
                var t = e.find(".sbi_photo").eq(0).innerWidth() / i;
                t += parseInt(a) * (2 - i + 2), e.find(".sbi-owl-nav div").css("top", t)
            }, 100)
        },
        maybeRaiseSingleImageResolution: function(e, t, s) {
            var n = this,
                a = n.getImageUrls(e),
                o = e.find(".sbi_photo img").attr("src"),
                d = 150,
                r = e.find("img").get(0),
                l = o === window.sbi.options.placeholder ? 1 : r.naturalWidth / r.naturalHeight;
            s = void 0 !== s && s;
            if (!(e.hasClass("sbi_no_resraise") || e.hasClass("sbi_had_error") || e.find(".sbi_link_area").length && e.find(".sbi_link_area").hasClass("sbi_had_error")))
                if (a.length < 1) e.find(".sbi_link_area").length && e.find(".sbi_link_area").attr("href", window.sbi.options.placeholder.replace("placeholder.png", "thumb-placeholder.png"));
                else {
                    (e.find(".sbi_link_area").length && e.find(".sbi_link_area").attr("href") === window.sbi.options.placeholder.replace("placeholder.png", "thumb-placeholder.png") || !n.settings.consentGiven) && e.find(".sbi_link_area").attr("href", a[a.length - 1]), void 0 !== a[640] && e.find(".sbi_photo").attr("data-full-res", a[640]), i.each(a, function(i, e) {
                        e === o && (d = parseInt(i), s = !1)
                    });
                    var c = 640;
                    switch (n.settings.imgRes) {
                        case "thumb":
                            c = 150;
                            break;
                        case "medium":
                            c = 320;
                            break;
                        case "full":
                            c = 640;
                            break;
                        default:
                            var g = Math.max(n.settings.autoMinRes, e.find(".sbi_photo").innerWidth()),
                                h = n.getBestResolutionForAuto(g, l, e);
                            switch (h) {
                                case 320:
                                    c = 320;
                                    break;
                                case 150:
                                    c = 150
                            }
                    }
                    if (c > d || o === window.sbi.options.placeholder || s) {
                        if (n.settings.debugEnabled) {
                            var f = o === window.sbi.options.placeholder ? "was placeholder" : "too small";
                            console.log("rais res for " + o, f)
                        }
                        var u = a[c].split("?ig_cache_key")[0];
                        if (o !== u && (e.find(".sbi_photo img").attr("src", u), e.find(".sbi_photo").css("background-image", 'url("' + u + '")')), d = c, "auto" === n.settings.imgRes) {
                            var b = !1;
                            e.find(".sbi_photo img").on("load", function() {
                                var t = i(this),
                                    s = t.get(0).naturalWidth / t.get(0).naturalHeight;
                                if (1e3 !== t.get(0).naturalWidth && s > l && !b) {
                                    switch (n.settings.debugEnabled && console.log("rais res again for aspect ratio change " + o), b = !0, g = e.find(".sbi_photo").innerWidth(), h = n.getBestResolutionForAuto(g, s, e), c = 640, h) {
                                        case 320:
                                            c = 320;
                                            break;
                                        case 150:
                                            c = 150
                                    }
                                    c > d && (u = a[c].split("?ig_cache_key")[0], t.attr("src", u), t.closest(".sbi_photo").css("background-image", 'url("' + u + '")')), "masonry" !== n.layout && "highlight" !== n.layout || (i(n.el).find("#sbi_images").smashotope(n.isotopeArgs), setTimeout(function() {
                                        i(n.el).find("#sbi_images").smashotope(n.isotopeArgs)
                                    }, 500))
                                } else if (n.settings.debugEnabled) {
                                    var r = b ? "already checked" : "no aspect ratio change";
                                    console.log("not raising res for replacement  " + o, r)
                                }
                            })
                        }
                    }
                    e.find("img").on("error", function() {
                        if (i(this).hasClass("sbi_img_error")) console.log("unfixed error " + i(this).attr("src"));
                        else {
                            var e;
                            if (i(this).addClass("sbi_img_error"), !(i(this).attr("src").indexOf("media/?size=") > -1 || i(this).attr("src").indexOf("cdninstagram") > -1 || i(this).attr("src").indexOf("fbcdn") > -1) && n.settings.consentGiven) {
                                if ("undefined" !== i(this).closest(".sbi_photo").attr("data-img-src-set")) void 0 !== (e = JSON.parse(i(this).closest(".sbi_photo").attr("data-img-src-set").replace(/\\\//g, "/"))).d && (i(this).attr("src", e.d), i(this).closest(".sbi_photo").css("background-image", "url(" + e.d + ")"), i(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href", e[640]).addClass("sbi_had_error"))
                            } else n.settings.favorLocal = !0, void 0 !== (e = n.getImageUrls(i(this).closest(".sbi_item")))[640] && (i(this).attr("src", e[640]), i(this).closest(".sbi_photo").css("background-image", "url(" + e[640] + ")"), i(this).closest(".sbi_item").addClass("sbi_had_error").find(".sbi_link_area").attr("href", e[640]).addClass("sbi_had_error"));
                            setTimeout(function() {
                                n.afterResize()
                            }, 1500)
                        }
                    })
                }
        },
        maybeRaiseImageResolution: function(e) {
            var t = this,
                s = void 0 !== e && !0 === e ? ".sbi_item.sbi_new" : ".sbi_item",
                n = !t.isInitialized;
            i(t.el).find(s).each(function(e) {
                !i(this).hasClass("sbi_num_diff_hide") && i(this).find(".sbi_photo").length && void 0 !== i(this).find(".sbi_photo").attr("data-img-src-set") && t.maybeRaiseSingleImageResolution(i(this), e, n)
            }), t.isInitialized = !0
        },
        getBestResolutionForAuto: function(e, t, s) {
            (isNaN(t) || t < 1) && (t = 1);
            var n = e * t,
                a = 10 * Math.ceil(n / 10),
                o = [150, 320, 640];
            if (s.hasClass("sbi_highlighted") && (a *= 2), -1 === o.indexOf(parseInt(a))) {
                var d = !1;
                i.each(o, function(i, e) {
                    e > parseInt(a) && !d && (a = e, d = !0)
                })
            }
            return a
        },
        hideExtraImagesForWidth: function() {
            if ("carousel" !== this.layout) {
                var e = i(this.el),
                    t = void 0 !== e.attr("data-num") && "" !== e.attr("data-num") ? parseInt(e.attr("data-num")) : 1,
                    s = void 0 !== e.attr("data-nummobile") && "" !== e.attr("data-nummobile") ? parseInt(e.attr("data-nummobile")) : t;
                i(window).width() < 480 ? s < e.find(".sbi_item").length && e.find(".sbi_item").slice(s - e.find(".sbi_item").length).addClass("sbi_num_diff_hide") : t < e.find(".sbi_item").length && e.find(".sbi_item").slice(t - e.find(".sbi_item").length).addClass("sbi_num_diff_hide")
            }
        },
        setImageSizeClass: function() {
            var e = i(this.el);
            e.removeClass("sbi_small sbi_medium");
            var t = e.innerWidth(),
                s = parseInt(e.find("#sbi_images").outerWidth() - e.find("#sbi_images").width()) / 2,
                n = this.getColumnCount(),
                a = (t - s * (n + 2)) / n;
            a > 120 && a < 240 ? e.addClass("sbi_medium") : a <= 120 && e.addClass("sbi_small")
        },
        setMinImageWidth: function() {
            i(this.el).find(".sbi_item .sbi_photo").first().length ? this.minImageWidth = i(this.el).find(".sbi_item .sbi_photo").first().innerWidth() : this.minImageWidth = 150
        },
        setImageResolution: function() {
            if ("auto" === this.settings.imgRes) this.imageResolution = "auto";
            else switch (this.settings.imgRes) {
                case "thumb":
                    this.imageResolution = 150;
                    break;
                case "medium":
                    this.imageResolution = 320;
                    break;
                default:
                    this.imageResolution = 640
            }
        },
        getImageUrls: function(i) {
            var e = JSON.parse(i.find(".sbi_photo").attr("data-img-src-set").replace(/\\\//g, "/")),
                t = i.attr("id").replace("sbi_", "");
            if (this.settings.consentGiven || this.settings.overrideBlockCDN || (e = []), void 0 !== this.resizedImages[t] && "video" !== this.resizedImages[t] && "pending" !== this.resizedImages[t] && "error" !== this.resizedImages[t].id && "video" !== this.resizedImages[t].id && "pending" !== this.resizedImages[t].id) {
                if (void 0 !== this.resizedImages[t].sizes) {
                    var s = [];
                    void 0 !== this.resizedImages[t].sizes.full && (e[640] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "full.jpg", s.push(640)), void 0 !== this.resizedImages[t].sizes.low && (e[320] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "low.jpg", s.push(320)), void 0 !== this.resizedImages[t].sizes.thumb && (s.push(150), e[150] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "thumb.jpg"), this.settings.favorLocal && (-1 === s.indexOf(640) && s.indexOf(320) > -1 && (e[640] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "low.jpg"), -1 === s.indexOf(320) && (s.indexOf(640) > -1 ? e[320] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "full.jpg" : s.indexOf(150) > -1 && (e[320] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "thumb.jpg")), -1 === s.indexOf(150) && (s.indexOf(320) > -1 ? e[150] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "low.jpg" : s.indexOf(640) > -1 && (e[150] = sb_instagram_js_options.resized_url + this.resizedImages[t].id + "full.jpg")))
                }
            } else(void 0 === this.resizedImages[t] || void 0 !== this.resizedImages[t].id && "pending" !== this.resizedImages[t].id && "error" !== this.resizedImages[t].id) && this.addToNeedsResizing(t);
            return e
        },
        getAvatarUrl: function(i, e) {
            if ("" === i) return "";
            var t = this.settings.general.avatars;
            return "local" === (e = void 0 !== e ? e : "local") ? void 0 !== t["LCL" + i] && 1 === parseInt(t["LCL" + i]) ? sb_instagram_js_options.resized_url + i + ".jpg" : void 0 !== t[i] ? t[i] : "" : void 0 !== t[i] ? t[i] : void 0 !== t["LCL" + i] && 1 === parseInt(t["LCL" + i]) ? sb_instagram_js_options.resized_url + i + ".jpg" : ""
        },
        addToNeedsResizing: function(i) {
            -1 === this.needsResizing.indexOf(i) && this.needsResizing.push(i)
        },
        applyImageLiquid: function() {
            var t = i(this.el);
            e(), "function" == typeof t.find(".sbi_photo").sbi_imgLiquid && t.find(".sbi_photo").sbi_imgLiquid({
                fill: !0
            })
        },
        listenForVisibilityChange: function() {
            var e, t, s, n = this;
            e = jQuery, t = {
                callback: function() {},
                runOnLoad: !0,
                frequency: 100,
                sbiPreviousVisibility: null
            }, s = {
                sbiCheckVisibility: function(i, e) {
                    if (jQuery.contains(document, i[0])) {
                        var t = e.sbiPreviousVisibility,
                            n = i.is(":visible");
                        e.sbiPreviousVisibility = n, null == t ? e.runOnLoad && e.callback(i, n) : t !== n && e.callback(i, n), setTimeout(function() {
                            s.sbiCheckVisibility(i, e)
                        }, e.frequency)
                    }
                }
            }, e.fn.sbiVisibilityChanged = function(i) {
                var n = e.extend({}, t, i);
                return this.each(function() {
                    s.sbiCheckVisibility(e(this), n)
                })
            }, "function" == typeof i(this.el).filter(":hidden").sbiVisibilityChanged && i(this.el).filter(":hidden").sbiVisibilityChanged({
                callback: function(i, e) {
                    n.afterResize()
                },
                runOnLoad: !1
            })
        },
        getColumnCount: function() {
            var e = i(this.el),
                t = this.settings.cols,
                s = this.settings.colsmobile,
                n = this.settings.colstablet,
                a = t;
            return sbiWindowWidth = window.innerWidth, e.hasClass("sbi_mob_col_auto") ? (sbiWindowWidth < 640 && parseInt(t) > 2 && parseInt(t) < 7 && (a = 2), sbiWindowWidth < 640 && parseInt(t) > 6 && parseInt(t) < 11 && (a = 4), sbiWindowWidth <= 480 && parseInt(t) > 2 && (a = 1)) : sbiWindowWidth > 480 && sbiWindowWidth <= 800 ? a = n : sbiWindowWidth <= 480 && (a = s), parseInt(a)
        },
        checkConsent: function() {
            if (this.settings.consentGiven || !this.settings.gdpr) return !0;
            if ("undefined" != typeof CLI_Cookie) null !== CLI_Cookie.read(CLI_ACCEPT_COOKIE_NAME) && (null !== CLI_Cookie.read("cookielawinfo-checkbox-non-necessary") && (this.settings.consentGiven = "yes" === CLI_Cookie.read("cookielawinfo-checkbox-non-necessary")), null !== CLI_Cookie.read("cookielawinfo-checkbox-necessary") && (this.settings.consentGiven = "yes" === CLI_Cookie.read("cookielawinfo-checkbox-necessary")));
            else if (void 0 !== window.cnArgs) {
                var i = ("; " + document.cookie).split("; cookie_notice_accepted=");
                if (2 === i.length) {
                    var e = i.pop().split(";").shift();
                    this.settings.consentGiven = "true" === e
                }
            } else void 0 !== window.cookieconsent ? this.settings.consentGiven = "allow" === function(i) {
                for (var e = i + "=", t = window.document.cookie.split(";"), s = 0; s < t.length; s++) {
                    var n = t[s].trim();
                    if (0 == n.indexOf(e)) return n.substring(e.length, n.length)
                }
                return ""
            }("complianz_consent_status") : void 0 !== window.Cookiebot ? this.settings.consentGiven = Cookiebot.consented : void 0 !== window.BorlabsCookie && (this.settings.consentGiven = window.BorlabsCookie.checkCookieConsent("instagram"));
            var t = jQuery.Event("sbicheckconsent");
            return t.feed = this, jQuery(window).trigger(t), this.settings.consentGiven
        },
        afterConsentToggled: function() {
            if (this.checkConsent()) {
                var i = this;
                i.maybeRaiseImageResolution(), setTimeout(function() {
                    i.afterResize()
                }, 500)
            }
        },
        locationGuess: function() {
            var e = i(this.el),
                t = "content";
            return e.closest("footer").length ? t = "footer" : e.closest(".header").length || e.closest("header").length ? t = "header" : (e.closest(".sidebar").length || e.closest("aside").length) && (t = "sidebar"), t
        }
    }, window.sbi_init = function() {
        window.sbi = new t, window.sbi.createPage(window.sbi.createFeeds, {
            whenFeedsCreated: window.sbi.afterFeedsCreated
        })
    }
}(jQuery), jQuery(document).ready(function(i) {
    void 0 === window.sb_instagram_js_options && (window.sb_instagram_js_options = {
        font_method: "svg",
        resized_url: location.protocol + "//" + window.location.hostname + "/wp-content/uploads/sb-instagram-feed-images/",
        placeholder: location.protocol + "//" + window.location.hostname + "/wp-content/plugins/instagram-feed/img/placeholder.png"
    }), void 0 !== window.sb_instagram_js_options.resized_url && -1 === window.sb_instagram_js_options.resized_url.indexOf(location.protocol) && ("http:" === location.protocol ? window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace("https:", "http:") : window.sb_instagram_js_options.resized_url = window.sb_instagram_js_options.resized_url.replace("http:", "https:")), sbi_init(), i("#cookie-notice a").on("click", function() {
        setTimeout(function() {
            i.each(window.sbi.feeds, function(i) {
                window.sbi.feeds[i].afterConsentToggled()
            })
        }, 1e3)
    }), i("#cookie-law-info-bar a").on("click", function() {
        setTimeout(function() {
            i.each(window.sbi.feeds, function(i) {
                window.sbi.feeds[i].afterConsentToggled()
            })
        }, 1e3)
    }), i(".cli-user-preference-checkbox").on("click", function() {
        setTimeout(function() {
            i.each(window.sbi.feeds, function(i) {
                window.sbi.feeds[i].settings.consentGiven = !1, window.sbi.feeds[i].afterConsentToggled()
            })
        }, 1e3)
    }), i(window).on("CookiebotOnAccept", function(e) {
        i.each(window.sbi.feeds, function(i) {
            window.sbi.feeds[i].settings.consentGiven = !0, window.sbi.feeds[i].afterConsentToggled()
        })
    }), i(document).on("cmplzAcceptAll", function(e) {
        i.each(window.sbi.feeds, function(i) {
            window.sbi.feeds[i].settings.consentGiven = !0, window.sbi.feeds[i].afterConsentToggled()
        })
    }), i(document).on("cmplzRevoke", function(e) {
        i.each(window.sbi.feeds, function(i) {
            window.sbi.feeds[i].settings.consentGiven = !1, window.sbi.feeds[i].afterConsentToggled()
        })
    }), i(document).on("borlabs-cookie-consent-saved", function(e) {
        i.each(window.sbi.feeds, function(i) {
            window.sbi.feeds[i].settings.consentGiven = !1, window.sbi.feeds[i].afterConsentToggled()
        })
    })
}));