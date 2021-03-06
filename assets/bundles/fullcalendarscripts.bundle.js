!(function (a, b) {
  "object" == typeof exports && "undefined" != typeof module
    ? (module.exports = b())
    : "function" == typeof define && define.amd
    ? define(b)
    : (a.moment = b());
})(this, function () {
  "use strict";
  function a() {
    return Xa.apply(null, arguments);
  }
  function b(a) {
    return (
      a instanceof Array ||
      "[object Array]" === Object.prototype.toString.call(a)
    );
  }
  function c(a) {
    return null != a && "[object Object]" === Object.prototype.toString.call(a);
  }
  function d(a) {
    return void 0 === a;
  }
  function e(a) {
    return (
      "number" == typeof a ||
      "[object Number]" === Object.prototype.toString.call(a)
    );
  }
  function f(a) {
    return (
      a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
    );
  }
  function g(a, b) {
    var c,
      d = [];
    for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
    return d;
  }
  function h(a, b) {
    return Object.prototype.hasOwnProperty.call(a, b);
  }
  function i(a, b) {
    for (var c in b) h(b, c) && (a[c] = b[c]);
    return (
      h(b, "toString") && (a.toString = b.toString),
      h(b, "valueOf") && (a.valueOf = b.valueOf),
      a
    );
  }
  function j(a, b, c, d) {
    return pa(a, b, c, d, !0).utc();
  }
  function k(a) {
    return (
      null == a._pf &&
        (a._pf = {
          empty: !1,
          unusedTokens: [],
          unusedInput: [],
          overflow: -2,
          charsLeftOver: 0,
          nullInput: !1,
          invalidMonth: null,
          invalidFormat: !1,
          userInvalidated: !1,
          iso: !1,
          parsedDateParts: [],
          meridiem: null,
          rfc2822: !1,
          weekdayMismatch: !1,
        }),
      a._pf
    );
  }
  function l(a) {
    if (null == a._isValid) {
      var b = k(a),
        c = Ya.call(b.parsedDateParts, function (a) {
          return null != a;
        }),
        d =
          !isNaN(a._d.getTime()) &&
          b.overflow < 0 &&
          !b.empty &&
          !b.invalidMonth &&
          !b.invalidWeekday &&
          !b.weekdayMismatch &&
          !b.nullInput &&
          !b.invalidFormat &&
          !b.userInvalidated &&
          (!b.meridiem || (b.meridiem && c));
      if (
        (a._strict &&
          (d =
            d &&
            0 === b.charsLeftOver &&
            0 === b.unusedTokens.length &&
            void 0 === b.bigHour),
        null != Object.isFrozen && Object.isFrozen(a))
      )
        return d;
      a._isValid = d;
    }
    return a._isValid;
  }
  function m(a) {
    var b = j(NaN);
    return null != a ? i(k(b), a) : (k(b).userInvalidated = !0), b;
  }
  function n(a, b) {
    var c, e, f;
    if (
      (d(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject),
      d(b._i) || (a._i = b._i),
      d(b._f) || (a._f = b._f),
      d(b._l) || (a._l = b._l),
      d(b._strict) || (a._strict = b._strict),
      d(b._tzm) || (a._tzm = b._tzm),
      d(b._isUTC) || (a._isUTC = b._isUTC),
      d(b._offset) || (a._offset = b._offset),
      d(b._pf) || (a._pf = k(b)),
      d(b._locale) || (a._locale = b._locale),
      $a.length > 0)
    )
      for (c = 0; c < $a.length; c++) d((f = b[(e = $a[c])])) || (a[e] = f);
    return a;
  }
  function o(b) {
    n(this, b),
      (this._d = new Date(null != b._d ? b._d.getTime() : NaN)),
      this.isValid() || (this._d = new Date(NaN)),
      !1 === _a && ((_a = !0), a.updateOffset(this), (_a = !1));
  }
  function p(a) {
    return a instanceof o || (null != a && null != a._isAMomentObject);
  }
  function q(a) {
    return a < 0 ? Math.ceil(a) || 0 : Math.floor(a);
  }
  function r(a) {
    var b = +a,
      c = 0;
    return 0 !== b && isFinite(b) && (c = q(b)), c;
  }
  function s(a, b, c) {
    var d,
      e = Math.min(a.length, b.length),
      f = Math.abs(a.length - b.length),
      g = 0;
    for (d = 0; d < e; d++)
      ((c && a[d] !== b[d]) || (!c && r(a[d]) !== r(b[d]))) && g++;
    return g + f;
  }
  function t(b) {
    !1 === a.suppressDeprecationWarnings &&
      "undefined" != typeof console &&
      console.warn &&
      console.warn("Deprecation warning: " + b);
  }
  function u(b, c) {
    var d = !0;
    return i(function () {
      if ((null != a.deprecationHandler && a.deprecationHandler(null, b), d)) {
        for (var e, f = [], g = 0; g < arguments.length; g++) {
          if (((e = ""), "object" == typeof arguments[g])) {
            for (var h in ((e += "\n[" + g + "] "), arguments[0]))
              e += h + ": " + arguments[0][h] + ", ";
            e = e.slice(0, -2);
          } else e = arguments[g];
          f.push(e);
        }
        t(
          b +
            "\nArguments: " +
            Array.prototype.slice.call(f).join("") +
            "\n" +
            new Error().stack
        ),
          (d = !1);
      }
      return c.apply(this, arguments);
    }, c);
  }
  function v(b, c) {
    null != a.deprecationHandler && a.deprecationHandler(b, c),
      ab[b] || (t(c), (ab[b] = !0));
  }
  function w(a) {
    return (
      a instanceof Function ||
      "[object Function]" === Object.prototype.toString.call(a)
    );
  }
  function x(a, b) {
    var d,
      e = i({}, a);
    for (d in b)
      h(b, d) &&
        (c(a[d]) && c(b[d])
          ? ((e[d] = {}), i(e[d], a[d]), i(e[d], b[d]))
          : null != b[d]
          ? (e[d] = b[d])
          : delete e[d]);
    for (d in a) h(a, d) && !h(b, d) && c(a[d]) && (e[d] = i({}, e[d]));
    return e;
  }
  function y(a) {
    null != a && this.set(a);
  }
  function z(a, b) {
    var c = a.toLowerCase();
    bb[c] = bb[c + "s"] = bb[b] = a;
  }
  function A(a) {
    return "string" == typeof a ? bb[a] || bb[a.toLowerCase()] : void 0;
  }
  function B(a) {
    var b,
      c,
      d = {};
    for (c in a) h(a, c) && (b = A(c)) && (d[b] = a[c]);
    return d;
  }
  function C(a, b) {
    cb[a] = b;
  }
  function D(a, b, c) {
    var d = "" + Math.abs(a),
      e = b - d.length;
    return (
      (a >= 0 ? (c ? "+" : "") : "-") +
      Math.pow(10, Math.max(0, e)).toString().substr(1) +
      d
    );
  }
  function E(a, b, c, d) {
    var e = d;
    "string" == typeof d &&
      (e = function () {
        return this[d]();
      }),
      a && (gb[a] = e),
      b &&
        (gb[b[0]] = function () {
          return D(e.apply(this, arguments), b[1], b[2]);
        }),
      c &&
        (gb[c] = function () {
          return this.localeData().ordinal(e.apply(this, arguments), a);
        });
  }
  function F(a, b) {
    return a.isValid()
      ? ((b = G(b, a.localeData())),
        (fb[b] =
          fb[b] ||
          (function (a) {
            var b,
              c,
              d,
              e = a.match(db);
            for (b = 0, c = e.length; b < c; b++)
              gb[e[b]]
                ? (e[b] = gb[e[b]])
                : (e[b] = (d = e[b]).match(/\[[\s\S]/)
                    ? d.replace(/^\[|\]$/g, "")
                    : d.replace(/\\/g, ""));
            return function (b) {
              var d,
                f = "";
              for (d = 0; d < c; d++) f += w(e[d]) ? e[d].call(b, a) : e[d];
              return f;
            };
          })(b)),
        fb[b](a))
      : a.localeData().invalidDate();
  }
  function G(a, b) {
    function c(a) {
      return b.longDateFormat(a) || a;
    }
    var d = 5;
    for (eb.lastIndex = 0; d >= 0 && eb.test(a); )
      (a = a.replace(eb, c)), (eb.lastIndex = 0), (d -= 1);
    return a;
  }
  function H(a, b, c) {
    xb[a] = w(b)
      ? b
      : function (a, d) {
          return a && c ? c : b;
        };
  }
  function I(a, b) {
    return h(xb, a)
      ? xb[a](b._strict, b._locale)
      : new RegExp(
          J(
            a
              .replace("\\", "")
              .replace(
                /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                function (a, b, c, d, e) {
                  return b || c || d || e;
                }
              )
          )
        );
  }
  function J(a) {
    return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
  }
  function K(a, b) {
    var c,
      d = b;
    for (
      "string" == typeof a && (a = [a]),
        e(b) &&
          (d = function (a, c) {
            c[b] = r(a);
          }),
        c = 0;
      c < a.length;
      c++
    )
      yb[a[c]] = d;
  }
  function L(a, b) {
    K(a, function (a, c, d, e) {
      (d._w = d._w || {}), b(a, d._w, d, e);
    });
  }
  function M(a) {
    return N(a) ? 366 : 365;
  }
  function N(a) {
    return (a % 4 == 0 && a % 100 != 0) || a % 400 == 0;
  }
  function O(b, c) {
    return function (d) {
      return null != d
        ? (Q(this, b, d), a.updateOffset(this, c), this)
        : P(this, b);
    };
  }
  function P(a, b) {
    return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN;
  }
  function Q(a, b, c) {
    a.isValid() &&
      !isNaN(c) &&
      ("FullYear" === b && N(a.year()) && 1 === a.month() && 29 === a.date()
        ? a._d["set" + (a._isUTC ? "UTC" : "") + b](
            c,
            a.month(),
            R(c, a.month())
          )
        : a._d["set" + (a._isUTC ? "UTC" : "") + b](c));
  }
  function R(a, b) {
    if (isNaN(a) || isNaN(b)) return NaN;
    var c,
      d = ((b % (c = 12)) + c) % c;
    return (a += (b - d) / 12), 1 === d ? (N(a) ? 29 : 28) : 31 - ((d % 7) % 2);
  }
  function S(a, b) {
    var c;
    if (!a.isValid()) return a;
    if ("string" == typeof b)
      if (/^\d+$/.test(b)) b = r(b);
      else if (!e((b = a.localeData().monthsParse(b)))) return a;
    return (
      (c = Math.min(a.date(), R(a.year(), b))),
      a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c),
      a
    );
  }
  function T(b) {
    return null != b
      ? (S(this, b), a.updateOffset(this, !0), this)
      : P(this, "Month");
  }
  function U() {
    function a(a, b) {
      return b.length - a.length;
    }
    var b,
      c,
      d = [],
      e = [],
      f = [];
    for (b = 0; b < 12; b++)
      (c = j([2e3, b])),
        d.push(this.monthsShort(c, "")),
        e.push(this.months(c, "")),
        f.push(this.months(c, "")),
        f.push(this.monthsShort(c, ""));
    for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++)
      (d[b] = J(d[b])), (e[b] = J(e[b]));
    for (b = 0; b < 24; b++) f[b] = J(f[b]);
    (this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i")),
      (this._monthsShortRegex = this._monthsRegex),
      (this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i")),
      (this._monthsShortStrictRegex = new RegExp(
        "^(" + d.join("|") + ")",
        "i"
      ));
  }
  function V(a) {
    var b = new Date(Date.UTC.apply(null, arguments));
    return (
      a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a),
      b
    );
  }
  function W(a, b, c) {
    var d = 7 + b - c;
    return (-(7 + V(a, 0, d).getUTCDay() - b) % 7) + d - 1;
  }
  function X(a, b, c, d, e) {
    var f,
      g,
      h = 1 + 7 * (b - 1) + ((7 + c - d) % 7) + W(a, d, e);
    return (
      h <= 0
        ? (g = M((f = a - 1)) + h)
        : h > M(a)
        ? ((f = a + 1), (g = h - M(a)))
        : ((f = a), (g = h)),
      { year: f, dayOfYear: g }
    );
  }
  function Y(a, b, c) {
    var d,
      e,
      f = W(a.year(), b, c),
      g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
    return (
      g < 1
        ? (d = g + Z((e = a.year() - 1), b, c))
        : g > Z(a.year(), b, c)
        ? ((d = g - Z(a.year(), b, c)), (e = a.year() + 1))
        : ((e = a.year()), (d = g)),
      { week: d, year: e }
    );
  }
  function Z(a, b, c) {
    var d = W(a, b, c),
      e = W(a + 1, b, c);
    return (M(a) - d + e) / 7;
  }
  function $() {
    function a(a, b) {
      return b.length - a.length;
    }
    var b,
      c,
      d,
      e,
      f,
      g = [],
      h = [],
      i = [],
      k = [];
    for (b = 0; b < 7; b++)
      (c = j([2e3, 1]).day(b)),
        (d = this.weekdaysMin(c, "")),
        (e = this.weekdaysShort(c, "")),
        (f = this.weekdays(c, "")),
        g.push(d),
        h.push(e),
        i.push(f),
        k.push(d),
        k.push(e),
        k.push(f);
    for (g.sort(a), h.sort(a), i.sort(a), k.sort(a), b = 0; b < 7; b++)
      (h[b] = J(h[b])), (i[b] = J(i[b])), (k[b] = J(k[b]));
    (this._weekdaysRegex = new RegExp("^(" + k.join("|") + ")", "i")),
      (this._weekdaysShortRegex = this._weekdaysRegex),
      (this._weekdaysMinRegex = this._weekdaysRegex),
      (this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i")),
      (this._weekdaysShortStrictRegex = new RegExp(
        "^(" + h.join("|") + ")",
        "i"
      )),
      (this._weekdaysMinStrictRegex = new RegExp(
        "^(" + g.join("|") + ")",
        "i"
      ));
  }
  function _() {
    return this.hours() % 12 || 12;
  }
  function aa(a, b) {
    E(a, 0, 0, function () {
      return this.localeData().meridiem(this.hours(), this.minutes(), b);
    });
  }
  function ba(a, b) {
    return b._meridiemParse;
  }
  function ca(a) {
    return a ? a.toLowerCase().replace("_", "-") : a;
  }
  function da(a) {
    var b = null;
    if (!Yb[a] && "undefined" != typeof module && module && module.exports)
      try {
        (b = Vb._abbr), require("./locale/" + a), ea(b);
      } catch (a) {}
    return Yb[a];
  }
  function ea(a, b) {
    var c;
    return (
      a &&
        ((c = d(b) ? ga(a) : fa(a, b))
          ? (Vb = c)
          : "undefined" != typeof console &&
            console.warn &&
            console.warn(
              "Locale " + a + " not found. Did you forget to load it?"
            )),
      Vb._abbr
    );
  }
  function fa(a, b) {
    if (null !== b) {
      var c,
        d = Xb;
      if (((b.abbr = a), null != Yb[a]))
        v(
          "defineLocaleOverride",
          "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."
        ),
          (d = Yb[a]._config);
      else if (null != b.parentLocale)
        if (null != Yb[b.parentLocale]) d = Yb[b.parentLocale]._config;
        else {
          if (null == (c = da(b.parentLocale)))
            return (
              Zb[b.parentLocale] || (Zb[b.parentLocale] = []),
              Zb[b.parentLocale].push({ name: a, config: b }),
              null
            );
          d = c._config;
        }
      return (
        (Yb[a] = new y(x(d, b))),
        Zb[a] &&
          Zb[a].forEach(function (a) {
            fa(a.name, a.config);
          }),
        ea(a),
        Yb[a]
      );
    }
    return delete Yb[a], null;
  }
  function ga(a) {
    var c;
    if ((a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a))
      return Vb;
    if (!b(a)) {
      if ((c = da(a))) return c;
      a = [a];
    }
    return (function (a) {
      for (var b, c, d, e, f = 0; f < a.length; ) {
        for (
          b = (e = ca(a[f]).split("-")).length,
            c = (c = ca(a[f + 1])) ? c.split("-") : null;
          b > 0;

        ) {
          if ((d = da(e.slice(0, b).join("-")))) return d;
          if (c && c.length >= b && s(e, c, !0) >= b - 1) break;
          b--;
        }
        f++;
      }
      return Vb;
    })(a);
  }
  function ha(a) {
    var b,
      c = a._a;
    return (
      c &&
        -2 === k(a).overflow &&
        ((b =
          c[Ab] < 0 || c[Ab] > 11
            ? Ab
            : c[Bb] < 1 || c[Bb] > R(c[zb], c[Ab])
            ? Bb
            : c[Cb] < 0 ||
              c[Cb] > 24 ||
              (24 === c[Cb] && (0 !== c[Db] || 0 !== c[Eb] || 0 !== c[Fb]))
            ? Cb
            : c[Db] < 0 || c[Db] > 59
            ? Db
            : c[Eb] < 0 || c[Eb] > 59
            ? Eb
            : c[Fb] < 0 || c[Fb] > 999
            ? Fb
            : -1),
        k(a)._overflowDayOfYear && (b < zb || b > Bb) && (b = Bb),
        k(a)._overflowWeeks && -1 === b && (b = Gb),
        k(a)._overflowWeekday && -1 === b && (b = Hb),
        (k(a).overflow = b)),
      a
    );
  }
  function ia(a, b, c) {
    return null != a ? a : null != b ? b : c;
  }
  function ja(b) {
    var c,
      d,
      e,
      f,
      g,
      h = [];
    if (!b._d) {
      var i, j;
      for (
        i = b,
          j = new Date(a.now()),
          e = i._useUTC
            ? [j.getUTCFullYear(), j.getUTCMonth(), j.getUTCDate()]
            : [j.getFullYear(), j.getMonth(), j.getDate()],
          b._w &&
            null == b._a[Bb] &&
            null == b._a[Ab] &&
            (function (a) {
              var b, c, d, e, f, g, h, i;
              if (null != (b = a._w).GG || null != b.W || null != b.E)
                (f = 1),
                  (g = 4),
                  (c = ia(b.GG, a._a[zb], Y(qa(), 1, 4).year)),
                  (d = ia(b.W, 1)),
                  ((e = ia(b.E, 1)) < 1 || e > 7) && (i = !0);
              else {
                (f = a._locale._week.dow), (g = a._locale._week.doy);
                var j = Y(qa(), f, g);
                (c = ia(b.gg, a._a[zb], j.year)),
                  (d = ia(b.w, j.week)),
                  null != b.d
                    ? ((e = b.d) < 0 || e > 6) && (i = !0)
                    : null != b.e
                    ? ((e = b.e + f), (b.e < 0 || b.e > 6) && (i = !0))
                    : (e = f);
              }
              d < 1 || d > Z(c, f, g)
                ? (k(a)._overflowWeeks = !0)
                : null != i
                ? (k(a)._overflowWeekday = !0)
                : ((h = X(c, d, e, f, g)),
                  (a._a[zb] = h.year),
                  (a._dayOfYear = h.dayOfYear));
            })(b),
          null != b._dayOfYear &&
            ((g = ia(b._a[zb], e[zb])),
            (b._dayOfYear > M(g) || 0 === b._dayOfYear) &&
              (k(b)._overflowDayOfYear = !0),
            (d = V(g, 0, b._dayOfYear)),
            (b._a[Ab] = d.getUTCMonth()),
            (b._a[Bb] = d.getUTCDate())),
          c = 0;
        c < 3 && null == b._a[c];
        ++c
      )
        b._a[c] = h[c] = e[c];
      for (; c < 7; c++)
        b._a[c] = h[c] = null == b._a[c] ? (2 === c ? 1 : 0) : b._a[c];
      24 === b._a[Cb] &&
        0 === b._a[Db] &&
        0 === b._a[Eb] &&
        0 === b._a[Fb] &&
        ((b._nextDay = !0), (b._a[Cb] = 0)),
        (b._d = (
          b._useUTC
            ? V
            : function (a, b, c, d, e, f, g) {
                var h = new Date(a, b, c, d, e, f, g);
                return (
                  a < 100 &&
                    a >= 0 &&
                    isFinite(h.getFullYear()) &&
                    h.setFullYear(a),
                  h
                );
              }
        ).apply(null, h)),
        (f = b._useUTC ? b._d.getUTCDay() : b._d.getDay()),
        null != b._tzm && b._d.setUTCMinutes(b._d.getUTCMinutes() - b._tzm),
        b._nextDay && (b._a[Cb] = 24),
        b._w &&
          void 0 !== b._w.d &&
          b._w.d !== f &&
          (k(b).weekdayMismatch = !0);
    }
  }
  function ka(a) {
    var b,
      c,
      d,
      e,
      f,
      g,
      h = a._i,
      i = $b.exec(h) || _b.exec(h);
    if (i) {
      for (k(a).iso = !0, b = 0, c = bc.length; b < c; b++)
        if (bc[b][1].exec(i[1])) {
          (e = bc[b][0]), (d = !1 !== bc[b][2]);
          break;
        }
      if (null == e) return void (a._isValid = !1);
      if (i[3]) {
        for (b = 0, c = cc.length; b < c; b++)
          if (cc[b][1].exec(i[3])) {
            f = (i[2] || " ") + cc[b][0];
            break;
          }
        if (null == f) return void (a._isValid = !1);
      }
      if (!d && null != f) return void (a._isValid = !1);
      if (i[4]) {
        if (!ac.exec(i[4])) return void (a._isValid = !1);
        g = "Z";
      }
      (a._f = e + (f || "") + (g || "")), na(a);
    } else a._isValid = !1;
  }
  function la(a, b, c, d, e, f) {
    var g = [
      (function (a) {
        var b = parseInt(a, 10);
        return b <= 49 ? 2e3 + b : b <= 999 ? 1900 + b : b;
      })(a),
      Mb.indexOf(b),
      parseInt(c, 10),
      parseInt(d, 10),
      parseInt(e, 10),
    ];
    return f && g.push(parseInt(f, 10)), g;
  }
  function ma(a) {
    var b,
      c,
      d,
      e = ec.exec(
        a._i
          .replace(/\([^)]*\)|[\n\t]/g, " ")
          .replace(/(\s\s+)/g, " ")
          .trim()
      );
    if (e) {
      var f = la(e[4], e[3], e[2], e[5], e[6], e[7]);
      if (
        ((b = e[1]),
        (c = f),
        (d = a),
        b &&
          Qb.indexOf(b) !== new Date(c[0], c[1], c[2]).getDay() &&
          ((k(d).weekdayMismatch = !0), (d._isValid = !1), 1))
      )
        return;
      (a._a = f),
        (a._tzm = (function (a, b, c) {
          if (a) return fc[a];
          if (b) return 0;
          var d = parseInt(c, 10),
            e = d % 100;
          return ((d - e) / 100) * 60 + e;
        })(e[8], e[9], e[10])),
        (a._d = V.apply(null, a._a)),
        a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm),
        (k(a).rfc2822 = !0);
    } else a._isValid = !1;
  }
  function na(b) {
    if (b._f !== a.ISO_8601)
      if (b._f !== a.RFC_2822) {
        (b._a = []), (k(b).empty = !0);
        var c,
          d,
          e,
          f,
          g,
          i,
          j,
          l,
          m = "" + b._i,
          n = m.length,
          o = 0;
        for (e = G(b._f, b._locale).match(db) || [], c = 0; c < e.length; c++)
          (f = e[c]),
            (d = (m.match(I(f, b)) || [])[0]) &&
              ((g = m.substr(0, m.indexOf(d))).length > 0 &&
                k(b).unusedInput.push(g),
              (m = m.slice(m.indexOf(d) + d.length)),
              (o += d.length)),
            gb[f]
              ? (d ? (k(b).empty = !1) : k(b).unusedTokens.push(f),
                (i = f),
                (l = b),
                null != (j = d) && h(yb, i) && yb[i](j, l._a, l, i))
              : b._strict && !d && k(b).unusedTokens.push(f);
        (k(b).charsLeftOver = n - o),
          m.length > 0 && k(b).unusedInput.push(m),
          b._a[Cb] <= 12 &&
            !0 === k(b).bigHour &&
            b._a[Cb] > 0 &&
            (k(b).bigHour = void 0),
          (k(b).parsedDateParts = b._a.slice(0)),
          (k(b).meridiem = b._meridiem),
          (b._a[Cb] = (function (a, b, c) {
            var d;
            return null == c
              ? b
              : null != a.meridiemHour
              ? a.meridiemHour(b, c)
              : null != a.isPM
              ? ((d = a.isPM(c)) && b < 12 && (b += 12),
                d || 12 !== b || (b = 0),
                b)
              : b;
          })(b._locale, b._a[Cb], b._meridiem)),
          ja(b),
          ha(b);
      } else ma(b);
    else ka(b);
  }
  function oa(h) {
    var j,
      q,
      r,
      s,
      t = h._i,
      u = h._f;
    return (
      (h._locale = h._locale || ga(h._l)),
      null === t || (void 0 === u && "" === t)
        ? m({ nullInput: !0 })
        : ("string" == typeof t && (h._i = t = h._locale.preparse(t)),
          p(t)
            ? new o(ha(t))
            : (f(t)
                ? (h._d = t)
                : b(u)
                ? (function (a) {
                    var b, c, d, e, f;
                    if (0 === a._f.length)
                      return (
                        (k(a).invalidFormat = !0), void (a._d = new Date(NaN))
                      );
                    for (e = 0; e < a._f.length; e++)
                      (f = 0),
                        (b = n({}, a)),
                        null != a._useUTC && (b._useUTC = a._useUTC),
                        (b._f = a._f[e]),
                        na(b),
                        l(b) &&
                          ((f += k(b).charsLeftOver),
                          (f += 10 * k(b).unusedTokens.length),
                          (k(b).score = f),
                          (null == d || f < d) && ((d = f), (c = b)));
                    i(a, c || b);
                  })(h)
                : u
                ? na(h)
                : d((q = (j = h)._i))
                ? (j._d = new Date(a.now()))
                : f(q)
                ? (j._d = new Date(q.valueOf()))
                : "string" == typeof q
                ? ((r = j),
                  null === (s = dc.exec(r._i))
                    ? (ka(r),
                      !1 === r._isValid &&
                        (delete r._isValid,
                        ma(r),
                        !1 === r._isValid &&
                          (delete r._isValid, a.createFromInputFallback(r))))
                    : (r._d = new Date(+s[1])))
                : b(q)
                ? ((j._a = g(q.slice(0), function (a) {
                    return parseInt(a, 10);
                  })),
                  ja(j))
                : c(q)
                ? (function (a) {
                    if (!a._d) {
                      var b = B(a._i);
                      (a._a = g(
                        [
                          b.year,
                          b.month,
                          b.day || b.date,
                          b.hour,
                          b.minute,
                          b.second,
                          b.millisecond,
                        ],
                        function (a) {
                          return a && parseInt(a, 10);
                        }
                      )),
                        ja(a);
                    }
                  })(j)
                : e(q)
                ? (j._d = new Date(q))
                : a.createFromInputFallback(j),
              l(h) || (h._d = null),
              h))
    );
  }
  function pa(a, d, e, f, g) {
    var h,
      i = {};
    return (
      (!0 !== e && !1 !== e) || ((f = e), (e = void 0)),
      ((c(a) &&
        (function (a) {
          if (Object.getOwnPropertyNames)
            return 0 === Object.getOwnPropertyNames(a).length;
          var b;
          for (b in a) if (a.hasOwnProperty(b)) return !1;
          return !0;
        })(a)) ||
        (b(a) && 0 === a.length)) &&
        (a = void 0),
      (i._isAMomentObject = !0),
      (i._useUTC = i._isUTC = g),
      (i._l = e),
      (i._i = a),
      (i._f = d),
      (i._strict = f),
      (h = new o(ha(oa(i))))._nextDay && (h.add(1, "d"), (h._nextDay = void 0)),
      h
    );
  }
  function qa(a, b, c, d) {
    return pa(a, b, c, d, !1);
  }
  function ra(a, c) {
    var d, e;
    if ((1 === c.length && b(c[0]) && (c = c[0]), !c.length)) return qa();
    for (d = c[0], e = 1; e < c.length; ++e)
      (c[e].isValid() && !c[e][a](d)) || (d = c[e]);
    return d;
  }
  function sa(a) {
    var b = B(a),
      c = b.year || 0,
      d = b.quarter || 0,
      e = b.month || 0,
      f = b.week || 0,
      g = b.day || 0,
      h = b.hour || 0,
      i = b.minute || 0,
      j = b.second || 0,
      k = b.millisecond || 0;
    (this._isValid = (function (a) {
      for (var b in a)
        if (-1 === Ib.call(ic, b) || (null != a[b] && isNaN(a[b]))) return !1;
      for (var c = !1, d = 0; d < ic.length; ++d)
        if (a[ic[d]]) {
          if (c) return !1;
          parseFloat(a[ic[d]]) !== r(a[ic[d]]) && (c = !0);
        }
      return !0;
    })(b)),
      (this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60),
      (this._days = +g + 7 * f),
      (this._months = +e + 3 * d + 12 * c),
      (this._data = {}),
      (this._locale = ga()),
      this._bubble();
  }
  function ta(a) {
    return a instanceof sa;
  }
  function ua(a) {
    return a < 0 ? -1 * Math.round(-1 * a) : Math.round(a);
  }
  function va(a, b) {
    E(a, 0, 0, function () {
      var a = this.utcOffset(),
        c = "+";
      return (
        a < 0 && ((a = -a), (c = "-")),
        c + D(~~(a / 60), 2) + b + D(~~a % 60, 2)
      );
    });
  }
  function wa(a, b) {
    var c = (b || "").match(a);
    if (null === c) return null;
    var d = ((c[c.length - 1] || []) + "").match(jc) || ["-", 0, 0],
      e = 60 * d[1] + r(d[2]);
    return 0 === e ? 0 : "+" === d[0] ? e : -e;
  }
  function xa(b, c) {
    var d, e;
    return c._isUTC
      ? ((d = c.clone()),
        (e = (p(b) || f(b) ? b.valueOf() : qa(b).valueOf()) - d.valueOf()),
        d._d.setTime(d._d.valueOf() + e),
        a.updateOffset(d, !1),
        d)
      : qa(b).local();
  }
  function ya(a) {
    return 15 * -Math.round(a._d.getTimezoneOffset() / 15);
  }
  function za() {
    return !!this.isValid() && this._isUTC && 0 === this._offset;
  }
  function Aa(a, b) {
    var c,
      d,
      f,
      g = a,
      i = null;
    return (
      ta(a)
        ? (g = { ms: a._milliseconds, d: a._days, M: a._months })
        : e(a)
        ? ((g = {}), b ? (g[b] = a) : (g.milliseconds = a))
        : (i = kc.exec(a))
        ? ((c = "-" === i[1] ? -1 : 1),
          (g = {
            y: 0,
            d: r(i[Bb]) * c,
            h: r(i[Cb]) * c,
            m: r(i[Db]) * c,
            s: r(i[Eb]) * c,
            ms: r(ua(1e3 * i[Fb])) * c,
          }))
        : (i = lc.exec(a))
        ? ((c = "-" === i[1] ? -1 : (i[1], 1)),
          (g = {
            y: Ba(i[2], c),
            M: Ba(i[3], c),
            w: Ba(i[4], c),
            d: Ba(i[5], c),
            h: Ba(i[6], c),
            m: Ba(i[7], c),
            s: Ba(i[8], c),
          }))
        : null == g
        ? (g = {})
        : "object" == typeof g &&
          ("from" in g || "to" in g) &&
          ((f = (function (a, b) {
            var c;
            return a.isValid() && b.isValid()
              ? ((b = xa(b, a)),
                a.isBefore(b)
                  ? (c = Ca(a, b))
                  : (((c = Ca(b, a)).milliseconds = -c.milliseconds),
                    (c.months = -c.months)),
                c)
              : { milliseconds: 0, months: 0 };
          })(qa(g.from), qa(g.to))),
          ((g = {}).ms = f.milliseconds),
          (g.M = f.months)),
      (d = new sa(g)),
      ta(a) && h(a, "_locale") && (d._locale = a._locale),
      d
    );
  }
  function Ba(a, b) {
    var c = a && parseFloat(a.replace(",", "."));
    return (isNaN(c) ? 0 : c) * b;
  }
  function Ca(a, b) {
    var c = { milliseconds: 0, months: 0 };
    return (
      (c.months = b.month() - a.month() + 12 * (b.year() - a.year())),
      a.clone().add(c.months, "M").isAfter(b) && --c.months,
      (c.milliseconds = +b - +a.clone().add(c.months, "M")),
      c
    );
  }
  function Da(a, b) {
    return function (c, d) {
      var e;
      return (
        null === d ||
          isNaN(+d) ||
          (v(
            b,
            "moment()." +
              b +
              "(period, number) is deprecated. Please use moment()." +
              b +
              "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."
          ),
          (e = c),
          (c = d),
          (d = e)),
        Ea(this, Aa((c = "string" == typeof c ? +c : c), d), a),
        this
      );
    };
  }
  function Ea(b, c, d, e) {
    var f = c._milliseconds,
      g = ua(c._days),
      h = ua(c._months);
    b.isValid() &&
      ((e = null == e || e),
      h && S(b, P(b, "Month") + h * d),
      g && Q(b, "Date", P(b, "Date") + g * d),
      f && b._d.setTime(b._d.valueOf() + f * d),
      e && a.updateOffset(b, g || h));
  }
  function Fa(a, b) {
    var c = 12 * (b.year() - a.year()) + (b.month() - a.month()),
      d = a.clone().add(c, "months");
    return (
      -(
        c +
        (b - d < 0
          ? (b - d) / (d - a.clone().add(c - 1, "months"))
          : (b - d) / (a.clone().add(c + 1, "months") - d))
      ) || 0
    );
  }
  function Ga(a) {
    var b;
    return void 0 === a
      ? this._locale._abbr
      : (null != (b = ga(a)) && (this._locale = b), this);
  }
  function Ha() {
    return this._locale;
  }
  function Ia(a, b) {
    E(0, [a, a.length], 0, b);
  }
  function Ja(a, b, c, d, e) {
    var f;
    return null == a
      ? Y(this, d, e).year
      : (b > (f = Z(a, d, e)) && (b = f),
        function (a, b, c, d, e) {
          var f = X(a, b, c, d, e),
            g = V(f.year, 0, f.dayOfYear);
          return (
            this.year(g.getUTCFullYear()),
            this.month(g.getUTCMonth()),
            this.date(g.getUTCDate()),
            this
          );
        }.call(this, a, b, c, d, e));
  }
  function Ka(a, b) {
    b[Fb] = r(1e3 * ("0." + a));
  }
  function La(a) {
    return a;
  }
  function Ma(a, b, c, d) {
    var e = ga(),
      f = j().set(d, b);
    return e[c](f, a);
  }
  function Na(a, b, c) {
    if ((e(a) && ((b = a), (a = void 0)), (a = a || ""), null != b))
      return Ma(a, b, c, "month");
    var d,
      f = [];
    for (d = 0; d < 12; d++) f[d] = Ma(a, d, c, "month");
    return f;
  }
  function Oa(a, b, c, d) {
    "boolean" == typeof a
      ? (e(b) && ((c = b), (b = void 0)), (b = b || ""))
      : ((c = b = a), (a = !1), e(b) && ((c = b), (b = void 0)), (b = b || ""));
    var f,
      g = ga(),
      h = a ? g._week.dow : 0;
    if (null != c) return Ma(b, (c + h) % 7, d, "day");
    var i = [];
    for (f = 0; f < 7; f++) i[f] = Ma(b, (f + h) % 7, d, "day");
    return i;
  }
  function Pa(a, b, c, d) {
    var e = Aa(b, c);
    return (
      (a._milliseconds += d * e._milliseconds),
      (a._days += d * e._days),
      (a._months += d * e._months),
      a._bubble()
    );
  }
  function Qa(a) {
    return a < 0 ? Math.floor(a) : Math.ceil(a);
  }
  function Ra(a) {
    return (4800 * a) / 146097;
  }
  function Sa(a) {
    return (146097 * a) / 4800;
  }
  function Ta(a) {
    return function () {
      return this.as(a);
    };
  }
  function Ua(a) {
    return function () {
      return this.isValid() ? this._data[a] : NaN;
    };
  }
  function Va(a) {
    return (a > 0) - (a < 0) || +a;
  }
  function Wa() {
    if (!this.isValid()) return this.localeData().invalidDate();
    var a,
      b,
      c = Oc(this._milliseconds) / 1e3,
      d = Oc(this._days),
      e = Oc(this._months);
    (b = q((a = q(c / 60)) / 60)), (c %= 60), (a %= 60);
    var f = q(e / 12),
      g = (e %= 12),
      h = d,
      i = b,
      j = a,
      k = c ? c.toFixed(3).replace(/\.?0+$/, "") : "",
      l = this.asSeconds();
    if (!l) return "P0D";
    var m = l < 0 ? "-" : "",
      n = Va(this._months) !== Va(l) ? "-" : "",
      o = Va(this._days) !== Va(l) ? "-" : "",
      p = Va(this._milliseconds) !== Va(l) ? "-" : "";
    return (
      m +
      "P" +
      (f ? n + f + "Y" : "") +
      (g ? n + g + "M" : "") +
      (h ? o + h + "D" : "") +
      (i || j || k ? "T" : "") +
      (i ? p + i + "H" : "") +
      (j ? p + j + "M" : "") +
      (k ? p + k + "S" : "")
    );
  }
  var Xa, Ya;
  Ya = Array.prototype.some
    ? Array.prototype.some
    : function (a) {
        for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
          if (d in b && a.call(this, b[d], d, b)) return !0;
        return !1;
      };
  var Za,
    $a = (a.momentProperties = []),
    _a = !1,
    ab = {};
  (a.suppressDeprecationWarnings = !1),
    (a.deprecationHandler = null),
    (Za = Object.keys
      ? Object.keys
      : function (a) {
          var b,
            c = [];
          for (b in a) h(a, b) && c.push(b);
          return c;
        });
  var bb = {},
    cb = {},
    db =
      /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
    eb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
    fb = {},
    gb = {},
    hb = /\d/,
    ib = /\d\d/,
    jb = /\d{3}/,
    kb = /\d{4}/,
    lb = /[+-]?\d{6}/,
    mb = /\d\d?/,
    nb = /\d\d\d\d?/,
    ob = /\d\d\d\d\d\d?/,
    pb = /\d{1,3}/,
    qb = /\d{1,4}/,
    rb = /[+-]?\d{1,6}/,
    sb = /\d+/,
    tb = /[+-]?\d+/,
    ub = /Z|[+-]\d\d:?\d\d/gi,
    vb = /Z|[+-]\d\d(?::?\d\d)?/gi,
    wb =
      /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
    xb = {},
    yb = {},
    zb = 0,
    Ab = 1,
    Bb = 2,
    Cb = 3,
    Db = 4,
    Eb = 5,
    Fb = 6,
    Gb = 7,
    Hb = 8;
  E("Y", 0, 0, function () {
    var a = this.year();
    return a <= 9999 ? "" + a : "+" + a;
  }),
    E(0, ["YY", 2], 0, function () {
      return this.year() % 100;
    }),
    E(0, ["YYYY", 4], 0, "year"),
    E(0, ["YYYYY", 5], 0, "year"),
    E(0, ["YYYYYY", 6, !0], 0, "year"),
    z("year", "y"),
    C("year", 1),
    H("Y", tb),
    H("YY", mb, ib),
    H("YYYY", qb, kb),
    H("YYYYY", rb, lb),
    H("YYYYYY", rb, lb),
    K(["YYYYY", "YYYYYY"], zb),
    K("YYYY", function (b, c) {
      c[zb] = 2 === b.length ? a.parseTwoDigitYear(b) : r(b);
    }),
    K("YY", function (b, c) {
      c[zb] = a.parseTwoDigitYear(b);
    }),
    K("Y", function (a, b) {
      b[zb] = parseInt(a, 10);
    }),
    (a.parseTwoDigitYear = function (a) {
      return r(a) + (r(a) > 68 ? 1900 : 2e3);
    });
  var Ib,
    Jb = O("FullYear", !0);
  (Ib = Array.prototype.indexOf
    ? Array.prototype.indexOf
    : function (a) {
        var b;
        for (b = 0; b < this.length; ++b) if (this[b] === a) return b;
        return -1;
      }),
    E("M", ["MM", 2], "Mo", function () {
      return this.month() + 1;
    }),
    E("MMM", 0, 0, function (a) {
      return this.localeData().monthsShort(this, a);
    }),
    E("MMMM", 0, 0, function (a) {
      return this.localeData().months(this, a);
    }),
    z("month", "M"),
    C("month", 8),
    H("M", mb),
    H("MM", mb, ib),
    H("MMM", function (a, b) {
      return b.monthsShortRegex(a);
    }),
    H("MMMM", function (a, b) {
      return b.monthsRegex(a);
    }),
    K(["M", "MM"], function (a, b) {
      b[Ab] = r(a) - 1;
    }),
    K(["MMM", "MMMM"], function (a, b, c, d) {
      var e = c._locale.monthsParse(a, d, c._strict);
      null != e ? (b[Ab] = e) : (k(c).invalidMonth = a);
    });
  var Kb = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
    Lb =
      "January_February_March_April_May_June_July_August_September_October_November_December".split(
        "_"
      ),
    Mb = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
    Nb = wb,
    Ob = wb;
  E("w", ["ww", 2], "wo", "week"),
    E("W", ["WW", 2], "Wo", "isoWeek"),
    z("week", "w"),
    z("isoWeek", "W"),
    C("week", 5),
    C("isoWeek", 5),
    H("w", mb),
    H("ww", mb, ib),
    H("W", mb),
    H("WW", mb, ib),
    L(["w", "ww", "W", "WW"], function (a, b, c, d) {
      b[d.substr(0, 1)] = r(a);
    }),
    E("d", 0, "do", "day"),
    E("dd", 0, 0, function (a) {
      return this.localeData().weekdaysMin(this, a);
    }),
    E("ddd", 0, 0, function (a) {
      return this.localeData().weekdaysShort(this, a);
    }),
    E("dddd", 0, 0, function (a) {
      return this.localeData().weekdays(this, a);
    }),
    E("e", 0, 0, "weekday"),
    E("E", 0, 0, "isoWeekday"),
    z("day", "d"),
    z("weekday", "e"),
    z("isoWeekday", "E"),
    C("day", 11),
    C("weekday", 11),
    C("isoWeekday", 11),
    H("d", mb),
    H("e", mb),
    H("E", mb),
    H("dd", function (a, b) {
      return b.weekdaysMinRegex(a);
    }),
    H("ddd", function (a, b) {
      return b.weekdaysShortRegex(a);
    }),
    H("dddd", function (a, b) {
      return b.weekdaysRegex(a);
    }),
    L(["dd", "ddd", "dddd"], function (a, b, c, d) {
      var e = c._locale.weekdaysParse(a, d, c._strict);
      null != e ? (b.d = e) : (k(c).invalidWeekday = a);
    }),
    L(["d", "e", "E"], function (a, b, c, d) {
      b[d] = r(a);
    });
  var Pb = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split(
      "_"
    ),
    Qb = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
    Rb = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
    Sb = wb,
    Tb = wb,
    Ub = wb;
  E("H", ["HH", 2], 0, "hour"),
    E("h", ["hh", 2], 0, _),
    E("k", ["kk", 2], 0, function () {
      return this.hours() || 24;
    }),
    E("hmm", 0, 0, function () {
      return "" + _.apply(this) + D(this.minutes(), 2);
    }),
    E("hmmss", 0, 0, function () {
      return "" + _.apply(this) + D(this.minutes(), 2) + D(this.seconds(), 2);
    }),
    E("Hmm", 0, 0, function () {
      return "" + this.hours() + D(this.minutes(), 2);
    }),
    E("Hmmss", 0, 0, function () {
      return "" + this.hours() + D(this.minutes(), 2) + D(this.seconds(), 2);
    }),
    aa("a", !0),
    aa("A", !1),
    z("hour", "h"),
    C("hour", 13),
    H("a", ba),
    H("A", ba),
    H("H", mb),
    H("h", mb),
    H("k", mb),
    H("HH", mb, ib),
    H("hh", mb, ib),
    H("kk", mb, ib),
    H("hmm", nb),
    H("hmmss", ob),
    H("Hmm", nb),
    H("Hmmss", ob),
    K(["H", "HH"], Cb),
    K(["k", "kk"], function (a, b, c) {
      var d = r(a);
      b[Cb] = 24 === d ? 0 : d;
    }),
    K(["a", "A"], function (a, b, c) {
      (c._isPm = c._locale.isPM(a)), (c._meridiem = a);
    }),
    K(["h", "hh"], function (a, b, c) {
      (b[Cb] = r(a)), (k(c).bigHour = !0);
    }),
    K("hmm", function (a, b, c) {
      var d = a.length - 2;
      (b[Cb] = r(a.substr(0, d))),
        (b[Db] = r(a.substr(d))),
        (k(c).bigHour = !0);
    }),
    K("hmmss", function (a, b, c) {
      var d = a.length - 4,
        e = a.length - 2;
      (b[Cb] = r(a.substr(0, d))),
        (b[Db] = r(a.substr(d, 2))),
        (b[Eb] = r(a.substr(e))),
        (k(c).bigHour = !0);
    }),
    K("Hmm", function (a, b, c) {
      var d = a.length - 2;
      (b[Cb] = r(a.substr(0, d))), (b[Db] = r(a.substr(d)));
    }),
    K("Hmmss", function (a, b, c) {
      var d = a.length - 4,
        e = a.length - 2;
      (b[Cb] = r(a.substr(0, d))),
        (b[Db] = r(a.substr(d, 2))),
        (b[Eb] = r(a.substr(e)));
    });
  var Vb,
    Wb = O("Hours", !0),
    Xb = {
      calendar: {
        sameDay: "[Today at] LT",
        nextDay: "[Tomorrow at] LT",
        nextWeek: "dddd [at] LT",
        lastDay: "[Yesterday at] LT",
        lastWeek: "[Last] dddd [at] LT",
        sameElse: "L",
      },
      longDateFormat: {
        LTS: "h:mm:ss A",
        LT: "h:mm A",
        L: "MM/DD/YYYY",
        LL: "MMMM D, YYYY",
        LLL: "MMMM D, YYYY h:mm A",
        LLLL: "dddd, MMMM D, YYYY h:mm A",
      },
      invalidDate: "Invalid date",
      ordinal: "%d",
      dayOfMonthOrdinalParse: /\d{1,2}/,
      relativeTime: {
        future: "in %s",
        past: "%s ago",
        s: "a few seconds",
        ss: "%d seconds",
        m: "a minute",
        mm: "%d minutes",
        h: "an hour",
        hh: "%d hours",
        d: "a day",
        dd: "%d days",
        M: "a month",
        MM: "%d months",
        y: "a year",
        yy: "%d years",
      },
      months: Lb,
      monthsShort: Mb,
      week: { dow: 0, doy: 6 },
      weekdays: Pb,
      weekdaysMin: Rb,
      weekdaysShort: Qb,
      meridiemParse: /[ap]\.?m?\.?/i,
    },
    Yb = {},
    Zb = {},
    $b =
      /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    _b =
      /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
    ac = /Z|[+-]\d\d(?::?\d\d)?/,
    bc = [
      ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
      ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
      ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
      ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
      ["YYYY-DDD", /\d{4}-\d{3}/],
      ["YYYY-MM", /\d{4}-\d\d/, !1],
      ["YYYYYYMMDD", /[+-]\d{10}/],
      ["YYYYMMDD", /\d{8}/],
      ["GGGG[W]WWE", /\d{4}W\d{3}/],
      ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
      ["YYYYDDD", /\d{7}/],
    ],
    cc = [
      ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
      ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
      ["HH:mm:ss", /\d\d:\d\d:\d\d/],
      ["HH:mm", /\d\d:\d\d/],
      ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
      ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
      ["HHmmss", /\d\d\d\d\d\d/],
      ["HHmm", /\d\d\d\d/],
      ["HH", /\d\d/],
    ],
    dc = /^\/?Date\((\-?\d+)/i,
    ec =
      /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
    fc = {
      UT: 0,
      GMT: 0,
      EDT: -240,
      EST: -300,
      CDT: -300,
      CST: -360,
      MDT: -360,
      MST: -420,
      PDT: -420,
      PST: -480,
    };
  (a.createFromInputFallback = u(
    "value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",
    function (a) {
      a._d = new Date(a._i + (a._useUTC ? " UTC" : ""));
    }
  )),
    (a.ISO_8601 = function () {}),
    (a.RFC_2822 = function () {});
  var gc = u(
      "moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var a = qa.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a < this ? this : a) : m();
      }
    ),
    hc = u(
      "moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",
      function () {
        var a = qa.apply(null, arguments);
        return this.isValid() && a.isValid() ? (a > this ? this : a) : m();
      }
    ),
    ic = [
      "year",
      "quarter",
      "month",
      "week",
      "day",
      "hour",
      "minute",
      "second",
      "millisecond",
    ];
  va("Z", ":"),
    va("ZZ", ""),
    H("Z", vb),
    H("ZZ", vb),
    K(["Z", "ZZ"], function (a, b, c) {
      (c._useUTC = !0), (c._tzm = wa(vb, a));
    });
  var jc = /([\+\-]|\d\d)/gi;
  a.updateOffset = function () {};
  var kc = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
    lc =
      /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
  (Aa.fn = sa.prototype),
    (Aa.invalid = function () {
      return Aa(NaN);
    });
  var mc = Da(1, "add"),
    nc = Da(-1, "subtract");
  (a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ"),
    (a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]");
  var oc = u(
    "moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",
    function (a) {
      return void 0 === a ? this.localeData() : this.locale(a);
    }
  );
  E(0, ["gg", 2], 0, function () {
    return this.weekYear() % 100;
  }),
    E(0, ["GG", 2], 0, function () {
      return this.isoWeekYear() % 100;
    }),
    Ia("gggg", "weekYear"),
    Ia("ggggg", "weekYear"),
    Ia("GGGG", "isoWeekYear"),
    Ia("GGGGG", "isoWeekYear"),
    z("weekYear", "gg"),
    z("isoWeekYear", "GG"),
    C("weekYear", 1),
    C("isoWeekYear", 1),
    H("G", tb),
    H("g", tb),
    H("GG", mb, ib),
    H("gg", mb, ib),
    H("GGGG", qb, kb),
    H("gggg", qb, kb),
    H("GGGGG", rb, lb),
    H("ggggg", rb, lb),
    L(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
      b[d.substr(0, 2)] = r(a);
    }),
    L(["gg", "GG"], function (b, c, d, e) {
      c[e] = a.parseTwoDigitYear(b);
    }),
    E("Q", 0, "Qo", "quarter"),
    z("quarter", "Q"),
    C("quarter", 7),
    H("Q", hb),
    K("Q", function (a, b) {
      b[Ab] = 3 * (r(a) - 1);
    }),
    E("D", ["DD", 2], "Do", "date"),
    z("date", "D"),
    C("date", 9),
    H("D", mb),
    H("DD", mb, ib),
    H("Do", function (a, b) {
      return a
        ? b._dayOfMonthOrdinalParse || b._ordinalParse
        : b._dayOfMonthOrdinalParseLenient;
    }),
    K(["D", "DD"], Bb),
    K("Do", function (a, b) {
      b[Bb] = r(a.match(mb)[0]);
    });
  var pc = O("Date", !0);
  E("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
    z("dayOfYear", "DDD"),
    C("dayOfYear", 4),
    H("DDD", pb),
    H("DDDD", jb),
    K(["DDD", "DDDD"], function (a, b, c) {
      c._dayOfYear = r(a);
    }),
    E("m", ["mm", 2], 0, "minute"),
    z("minute", "m"),
    C("minute", 14),
    H("m", mb),
    H("mm", mb, ib),
    K(["m", "mm"], Db);
  var qc = O("Minutes", !1);
  E("s", ["ss", 2], 0, "second"),
    z("second", "s"),
    C("second", 15),
    H("s", mb),
    H("ss", mb, ib),
    K(["s", "ss"], Eb);
  var rc,
    sc = O("Seconds", !1);
  for (
    E("S", 0, 0, function () {
      return ~~(this.millisecond() / 100);
    }),
      E(0, ["SS", 2], 0, function () {
        return ~~(this.millisecond() / 10);
      }),
      E(0, ["SSS", 3], 0, "millisecond"),
      E(0, ["SSSS", 4], 0, function () {
        return 10 * this.millisecond();
      }),
      E(0, ["SSSSS", 5], 0, function () {
        return 100 * this.millisecond();
      }),
      E(0, ["SSSSSS", 6], 0, function () {
        return 1e3 * this.millisecond();
      }),
      E(0, ["SSSSSSS", 7], 0, function () {
        return 1e4 * this.millisecond();
      }),
      E(0, ["SSSSSSSS", 8], 0, function () {
        return 1e5 * this.millisecond();
      }),
      E(0, ["SSSSSSSSS", 9], 0, function () {
        return 1e6 * this.millisecond();
      }),
      z("millisecond", "ms"),
      C("millisecond", 16),
      H("S", pb, hb),
      H("SS", pb, ib),
      H("SSS", pb, jb),
      rc = "SSSS";
    rc.length <= 9;
    rc += "S"
  )
    H(rc, sb);
  for (rc = "S"; rc.length <= 9; rc += "S") K(rc, Ka);
  var tc = O("Milliseconds", !1);
  E("z", 0, 0, "zoneAbbr"), E("zz", 0, 0, "zoneName");
  var uc = o.prototype;
  (uc.add = mc),
    (uc.calendar = function (b, c) {
      var d = b || qa(),
        e = xa(d, this).startOf("day"),
        f = a.calendarFormat(this, e) || "sameElse",
        g = c && (w(c[f]) ? c[f].call(this, d) : c[f]);
      return this.format(g || this.localeData().calendar(f, this, qa(d)));
    }),
    (uc.clone = function () {
      return new o(this);
    }),
    (uc.diff = function (a, b, c) {
      var d, e, f;
      if (!this.isValid()) return NaN;
      if (!(d = xa(a, this)).isValid()) return NaN;
      switch (((e = 6e4 * (d.utcOffset() - this.utcOffset())), (b = A(b)))) {
        case "year":
          f = Fa(this, d) / 12;
          break;
        case "month":
          f = Fa(this, d);
          break;
        case "quarter":
          f = Fa(this, d) / 3;
          break;
        case "second":
          f = (this - d) / 1e3;
          break;
        case "minute":
          f = (this - d) / 6e4;
          break;
        case "hour":
          f = (this - d) / 36e5;
          break;
        case "day":
          f = (this - d - e) / 864e5;
          break;
        case "week":
          f = (this - d - e) / 6048e5;
          break;
        default:
          f = this - d;
      }
      return c ? f : q(f);
    }),
    (uc.endOf = function (a) {
      return void 0 === (a = A(a)) || "millisecond" === a
        ? this
        : ("date" === a && (a = "day"),
          this.startOf(a)
            .add(1, "isoWeek" === a ? "week" : a)
            .subtract(1, "ms"));
    }),
    (uc.format = function (b) {
      b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
      var c = F(this, b);
      return this.localeData().postformat(c);
    }),
    (uc.from = function (a, b) {
      return this.isValid() && ((p(a) && a.isValid()) || qa(a).isValid())
        ? Aa({ to: this, from: a }).locale(this.locale()).humanize(!b)
        : this.localeData().invalidDate();
    }),
    (uc.fromNow = function (a) {
      return this.from(qa(), a);
    }),
    (uc.to = function (a, b) {
      return this.isValid() && ((p(a) && a.isValid()) || qa(a).isValid())
        ? Aa({ from: this, to: a }).locale(this.locale()).humanize(!b)
        : this.localeData().invalidDate();
    }),
    (uc.toNow = function (a) {
      return this.to(qa(), a);
    }),
    (uc.get = function (a) {
      return w(this[(a = A(a))]) ? this[a]() : this;
    }),
    (uc.invalidAt = function () {
      return k(this).overflow;
    }),
    (uc.isAfter = function (a, b) {
      var c = p(a) ? a : qa(a);
      return (
        !(!this.isValid() || !c.isValid()) &&
        ("millisecond" === (b = A(d(b) ? "millisecond" : b))
          ? this.valueOf() > c.valueOf()
          : c.valueOf() < this.clone().startOf(b).valueOf())
      );
    }),
    (uc.isBefore = function (a, b) {
      var c = p(a) ? a : qa(a);
      return (
        !(!this.isValid() || !c.isValid()) &&
        ("millisecond" === (b = A(d(b) ? "millisecond" : b))
          ? this.valueOf() < c.valueOf()
          : this.clone().endOf(b).valueOf() < c.valueOf())
      );
    }),
    (uc.isBetween = function (a, b, c, d) {
      return (
        ("(" === (d = d || "()")[0]
          ? this.isAfter(a, c)
          : !this.isBefore(a, c)) &&
        (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
      );
    }),
    (uc.isSame = function (a, b) {
      var c,
        d = p(a) ? a : qa(a);
      return (
        !(!this.isValid() || !d.isValid()) &&
        ("millisecond" === (b = A(b || "millisecond"))
          ? this.valueOf() === d.valueOf()
          : ((c = d.valueOf()),
            this.clone().startOf(b).valueOf() <= c &&
              c <= this.clone().endOf(b).valueOf()))
      );
    }),
    (uc.isSameOrAfter = function (a, b) {
      return this.isSame(a, b) || this.isAfter(a, b);
    }),
    (uc.isSameOrBefore = function (a, b) {
      return this.isSame(a, b) || this.isBefore(a, b);
    }),
    (uc.isValid = function () {
      return l(this);
    }),
    (uc.lang = oc),
    (uc.locale = Ga),
    (uc.localeData = Ha),
    (uc.max = hc),
    (uc.min = gc),
    (uc.parsingFlags = function () {
      return i({}, k(this));
    }),
    (uc.set = function (a, b) {
      if ("object" == typeof a)
        for (
          var c = (function (a) {
              var b = [];
              for (var c in a) b.push({ unit: c, priority: cb[c] });
              return (
                b.sort(function (a, b) {
                  return a.priority - b.priority;
                }),
                b
              );
            })((a = B(a))),
            d = 0;
          d < c.length;
          d++
        )
          this[c[d].unit](a[c[d].unit]);
      else if (w(this[(a = A(a))])) return this[a](b);
      return this;
    }),
    (uc.startOf = function (a) {
      switch ((a = A(a))) {
        case "year":
          this.month(0);
        case "quarter":
        case "month":
          this.date(1);
        case "week":
        case "isoWeek":
        case "day":
        case "date":
          this.hours(0);
        case "hour":
          this.minutes(0);
        case "minute":
          this.seconds(0);
        case "second":
          this.milliseconds(0);
      }
      return (
        "week" === a && this.weekday(0),
        "isoWeek" === a && this.isoWeekday(1),
        "quarter" === a && this.month(3 * Math.floor(this.month() / 3)),
        this
      );
    }),
    (uc.subtract = nc),
    (uc.toArray = function () {
      var a = this;
      return [
        a.year(),
        a.month(),
        a.date(),
        a.hour(),
        a.minute(),
        a.second(),
        a.millisecond(),
      ];
    }),
    (uc.toObject = function () {
      var a = this;
      return {
        years: a.year(),
        months: a.month(),
        date: a.date(),
        hours: a.hours(),
        minutes: a.minutes(),
        seconds: a.seconds(),
        milliseconds: a.milliseconds(),
      };
    }),
    (uc.toDate = function () {
      return new Date(this.valueOf());
    }),
    (uc.toISOString = function (a) {
      if (!this.isValid()) return null;
      var b = !0 !== a,
        c = b ? this.clone().utc() : this;
      return c.year() < 0 || c.year() > 9999
        ? F(
            c,
            b
              ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]"
              : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"
          )
        : w(Date.prototype.toISOString)
        ? b
          ? this.toDate().toISOString()
          : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3)
              .toISOString()
              .replace("Z", F(c, "Z"))
        : F(
            c,
            b ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ"
          );
    }),
    (uc.inspect = function () {
      if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
      var a = "moment",
        b = "";
      this.isLocal() ||
        ((a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone"),
        (b = "Z"));
      var c = "[" + a + '("]',
        d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
        e = b + '[")]';
      return this.format(c + d + "-MM-DD[T]HH:mm:ss.SSS" + e);
    }),
    (uc.toJSON = function () {
      return this.isValid() ? this.toISOString() : null;
    }),
    (uc.toString = function () {
      return this.clone()
        .locale("en")
        .format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ");
    }),
    (uc.unix = function () {
      return Math.floor(this.valueOf() / 1e3);
    }),
    (uc.valueOf = function () {
      return this._d.valueOf() - 6e4 * (this._offset || 0);
    }),
    (uc.creationData = function () {
      return {
        input: this._i,
        format: this._f,
        locale: this._locale,
        isUTC: this._isUTC,
        strict: this._strict,
      };
    }),
    (uc.year = Jb),
    (uc.isLeapYear = function () {
      return N(this.year());
    }),
    (uc.weekYear = function (a) {
      return Ja.call(
        this,
        a,
        this.week(),
        this.weekday(),
        this.localeData()._week.dow,
        this.localeData()._week.doy
      );
    }),
    (uc.isoWeekYear = function (a) {
      return Ja.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4);
    }),
    (uc.quarter = uc.quarters =
      function (a) {
        return null == a
          ? Math.ceil((this.month() + 1) / 3)
          : this.month(3 * (a - 1) + (this.month() % 3));
      }),
    (uc.month = T),
    (uc.daysInMonth = function () {
      return R(this.year(), this.month());
    }),
    (uc.week = uc.weeks =
      function (a) {
        var b = this.localeData().week(this);
        return null == a ? b : this.add(7 * (a - b), "d");
      }),
    (uc.isoWeek = uc.isoWeeks =
      function (a) {
        var b = Y(this, 1, 4).week;
        return null == a ? b : this.add(7 * (a - b), "d");
      }),
    (uc.weeksInYear = function () {
      var a = this.localeData()._week;
      return Z(this.year(), a.dow, a.doy);
    }),
    (uc.isoWeeksInYear = function () {
      return Z(this.year(), 1, 4);
    }),
    (uc.date = pc),
    (uc.day = uc.days =
      function (a) {
        if (!this.isValid()) return null != a ? this : NaN;
        var b,
          c,
          d = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != a
          ? ((b = a),
            (c = this.localeData()),
            (a =
              "string" != typeof b
                ? b
                : isNaN(b)
                ? "number" == typeof (b = c.weekdaysParse(b))
                  ? b
                  : null
                : parseInt(b, 10)),
            this.add(a - d, "d"))
          : d;
      }),
    (uc.weekday = function (a) {
      if (!this.isValid()) return null != a ? this : NaN;
      var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
      return null == a ? b : this.add(a - b, "d");
    }),
    (uc.isoWeekday = function (a) {
      if (!this.isValid()) return null != a ? this : NaN;
      if (null != a) {
        var b =
          ((c = a),
          (d = this.localeData()),
          "string" == typeof c
            ? d.weekdaysParse(c) % 7 || 7
            : isNaN(c)
            ? null
            : c);
        return this.day(this.day() % 7 ? b : b - 7);
      }
      return this.day() || 7;
      var c, d;
    }),
    (uc.dayOfYear = function (a) {
      var b =
        Math.round(
          (this.clone().startOf("day") - this.clone().startOf("year")) / 864e5
        ) + 1;
      return null == a ? b : this.add(a - b, "d");
    }),
    (uc.hour = uc.hours = Wb),
    (uc.minute = uc.minutes = qc),
    (uc.second = uc.seconds = sc),
    (uc.millisecond = uc.milliseconds = tc),
    (uc.utcOffset = function (b, c, d) {
      var e,
        f = this._offset || 0;
      if (!this.isValid()) return null != b ? this : NaN;
      if (null != b) {
        if ("string" == typeof b) {
          if (null === (b = wa(vb, b))) return this;
        } else Math.abs(b) < 16 && !d && (b *= 60);
        return (
          !this._isUTC && c && (e = ya(this)),
          (this._offset = b),
          (this._isUTC = !0),
          null != e && this.add(e, "m"),
          f !== b &&
            (!c || this._changeInProgress
              ? Ea(this, Aa(b - f, "m"), 1, !1)
              : this._changeInProgress ||
                ((this._changeInProgress = !0),
                a.updateOffset(this, !0),
                (this._changeInProgress = null))),
          this
        );
      }
      return this._isUTC ? f : ya(this);
    }),
    (uc.utc = function (a) {
      return this.utcOffset(0, a);
    }),
    (uc.local = function (a) {
      return (
        this._isUTC &&
          (this.utcOffset(0, a),
          (this._isUTC = !1),
          a && this.subtract(ya(this), "m")),
        this
      );
    }),
    (uc.parseZone = function () {
      if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
      else if ("string" == typeof this._i) {
        var a = wa(ub, this._i);
        null != a ? this.utcOffset(a) : this.utcOffset(0, !0);
      }
      return this;
    }),
    (uc.hasAlignedHourOffset = function (a) {
      return (
        !!this.isValid() &&
        ((a = a ? qa(a).utcOffset() : 0), (this.utcOffset() - a) % 60 == 0)
      );
    }),
    (uc.isDST = function () {
      return (
        this.utcOffset() > this.clone().month(0).utcOffset() ||
        this.utcOffset() > this.clone().month(5).utcOffset()
      );
    }),
    (uc.isLocal = function () {
      return !!this.isValid() && !this._isUTC;
    }),
    (uc.isUtcOffset = function () {
      return !!this.isValid() && this._isUTC;
    }),
    (uc.isUtc = za),
    (uc.isUTC = za),
    (uc.zoneAbbr = function () {
      return this._isUTC ? "UTC" : "";
    }),
    (uc.zoneName = function () {
      return this._isUTC ? "Coordinated Universal Time" : "";
    }),
    (uc.dates = u("dates accessor is deprecated. Use date instead.", pc)),
    (uc.months = u("months accessor is deprecated. Use month instead", T)),
    (uc.years = u("years accessor is deprecated. Use year instead", Jb)),
    (uc.zone = u(
      "moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",
      function (a, b) {
        return null != a
          ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this)
          : -this.utcOffset();
      }
    )),
    (uc.isDSTShifted = u(
      "isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",
      function () {
        if (!d(this._isDSTShifted)) return this._isDSTShifted;
        var a = {};
        if ((n(a, this), (a = oa(a))._a)) {
          var b = a._isUTC ? j(a._a) : qa(a._a);
          this._isDSTShifted = this.isValid() && s(a._a, b.toArray()) > 0;
        } else this._isDSTShifted = !1;
        return this._isDSTShifted;
      }
    ));
  var vc = y.prototype;
  (vc.calendar = function (a, b, c) {
    var d = this._calendar[a] || this._calendar.sameElse;
    return w(d) ? d.call(b, c) : d;
  }),
    (vc.longDateFormat = function (a) {
      var b = this._longDateFormat[a],
        c = this._longDateFormat[a.toUpperCase()];
      return b || !c
        ? b
        : ((this._longDateFormat[a] = c.replace(
            /MMMM|MM|DD|dddd/g,
            function (a) {
              return a.slice(1);
            }
          )),
          this._longDateFormat[a]);
    }),
    (vc.invalidDate = function () {
      return this._invalidDate;
    }),
    (vc.ordinal = function (a) {
      return this._ordinal.replace("%d", a);
    }),
    (vc.preparse = La),
    (vc.postformat = La),
    (vc.relativeTime = function (a, b, c, d) {
      var e = this._relativeTime[c];
      return w(e) ? e(a, b, c, d) : e.replace(/%d/i, a);
    }),
    (vc.pastFuture = function (a, b) {
      var c = this._relativeTime[a > 0 ? "future" : "past"];
      return w(c) ? c(b) : c.replace(/%s/i, b);
    }),
    (vc.set = function (a) {
      var b, c;
      for (c in a) w((b = a[c])) ? (this[c] = b) : (this["_" + c] = b);
      (this._config = a),
        (this._dayOfMonthOrdinalParseLenient = new RegExp(
          (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
            "|" +
            /\d{1,2}/.source
        ));
    }),
    (vc.months = function (a, c) {
      return a
        ? b(this._months)
          ? this._months[a.month()]
          : this._months[
              (this._months.isFormat || Kb).test(c) ? "format" : "standalone"
            ][a.month()]
        : b(this._months)
        ? this._months
        : this._months.standalone;
    }),
    (vc.monthsShort = function (a, c) {
      return a
        ? b(this._monthsShort)
          ? this._monthsShort[a.month()]
          : this._monthsShort[Kb.test(c) ? "format" : "standalone"][a.month()]
        : b(this._monthsShort)
        ? this._monthsShort
        : this._monthsShort.standalone;
    }),
    (vc.monthsParse = function (a, b, c) {
      var d, e, f;
      if (this._monthsParseExact)
        return function (a, b, c) {
          var d,
            e,
            f,
            g = a.toLocaleLowerCase();
          if (!this._monthsParse)
            for (
              this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = [],
                d = 0;
              d < 12;
              ++d
            )
              (f = j([2e3, d])),
                (this._shortMonthsParse[d] = this.monthsShort(
                  f,
                  ""
                ).toLocaleLowerCase()),
                (this._longMonthsParse[d] = this.months(
                  f,
                  ""
                ).toLocaleLowerCase());
          return c
            ? "MMM" === b
              ? -1 !== (e = Ib.call(this._shortMonthsParse, g))
                ? e
                : null
              : -1 !== (e = Ib.call(this._longMonthsParse, g))
              ? e
              : null
            : "MMM" === b
            ? -1 !== (e = Ib.call(this._shortMonthsParse, g))
              ? e
              : -1 !== (e = Ib.call(this._longMonthsParse, g))
              ? e
              : null
            : -1 !== (e = Ib.call(this._longMonthsParse, g))
            ? e
            : -1 !== (e = Ib.call(this._shortMonthsParse, g))
            ? e
            : null;
        }.call(this, a, b, c);
      for (
        this._monthsParse ||
          ((this._monthsParse = []),
          (this._longMonthsParse = []),
          (this._shortMonthsParse = [])),
          d = 0;
        d < 12;
        d++
      ) {
        if (
          ((e = j([2e3, d])),
          c &&
            !this._longMonthsParse[d] &&
            ((this._longMonthsParse[d] = new RegExp(
              "^" + this.months(e, "").replace(".", "") + "$",
              "i"
            )),
            (this._shortMonthsParse[d] = new RegExp(
              "^" + this.monthsShort(e, "").replace(".", "") + "$",
              "i"
            ))),
          c ||
            this._monthsParse[d] ||
            ((f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, "")),
            (this._monthsParse[d] = new RegExp(f.replace(".", ""), "i"))),
          c && "MMMM" === b && this._longMonthsParse[d].test(a))
        )
          return d;
        if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
        if (!c && this._monthsParse[d].test(a)) return d;
      }
    }),
    (vc.monthsRegex = function (a) {
      return this._monthsParseExact
        ? (h(this, "_monthsRegex") || U.call(this),
          a ? this._monthsStrictRegex : this._monthsRegex)
        : (h(this, "_monthsRegex") || (this._monthsRegex = Ob),
          this._monthsStrictRegex && a
            ? this._monthsStrictRegex
            : this._monthsRegex);
    }),
    (vc.monthsShortRegex = function (a) {
      return this._monthsParseExact
        ? (h(this, "_monthsRegex") || U.call(this),
          a ? this._monthsShortStrictRegex : this._monthsShortRegex)
        : (h(this, "_monthsShortRegex") || (this._monthsShortRegex = Nb),
          this._monthsShortStrictRegex && a
            ? this._monthsShortStrictRegex
            : this._monthsShortRegex);
    }),
    (vc.week = function (a) {
      return Y(a, this._week.dow, this._week.doy).week;
    }),
    (vc.firstDayOfYear = function () {
      return this._week.doy;
    }),
    (vc.firstDayOfWeek = function () {
      return this._week.dow;
    }),
    (vc.weekdays = function (a, c) {
      return a
        ? b(this._weekdays)
          ? this._weekdays[a.day()]
          : this._weekdays[
              this._weekdays.isFormat.test(c) ? "format" : "standalone"
            ][a.day()]
        : b(this._weekdays)
        ? this._weekdays
        : this._weekdays.standalone;
    }),
    (vc.weekdaysMin = function (a) {
      return a ? this._weekdaysMin[a.day()] : this._weekdaysMin;
    }),
    (vc.weekdaysShort = function (a) {
      return a ? this._weekdaysShort[a.day()] : this._weekdaysShort;
    }),
    (vc.weekdaysParse = function (a, b, c) {
      var d, e, f;
      if (this._weekdaysParseExact)
        return function (a, b, c) {
          var d,
            e,
            f,
            g = a.toLocaleLowerCase();
          if (!this._weekdaysParse)
            for (
              this._weekdaysParse = [],
                this._shortWeekdaysParse = [],
                this._minWeekdaysParse = [],
                d = 0;
              d < 7;
              ++d
            )
              (f = j([2e3, 1]).day(d)),
                (this._minWeekdaysParse[d] = this.weekdaysMin(
                  f,
                  ""
                ).toLocaleLowerCase()),
                (this._shortWeekdaysParse[d] = this.weekdaysShort(
                  f,
                  ""
                ).toLocaleLowerCase()),
                (this._weekdaysParse[d] = this.weekdays(
                  f,
                  ""
                ).toLocaleLowerCase());
          return c
            ? "dddd" === b
              ? -1 !== (e = Ib.call(this._weekdaysParse, g))
                ? e
                : null
              : "ddd" === b
              ? -1 !== (e = Ib.call(this._shortWeekdaysParse, g))
                ? e
                : null
              : -1 !== (e = Ib.call(this._minWeekdaysParse, g))
              ? e
              : null
            : "dddd" === b
            ? -1 !== (e = Ib.call(this._weekdaysParse, g))
              ? e
              : -1 !== (e = Ib.call(this._shortWeekdaysParse, g))
              ? e
              : -1 !== (e = Ib.call(this._minWeekdaysParse, g))
              ? e
              : null
            : "ddd" === b
            ? -1 !== (e = Ib.call(this._shortWeekdaysParse, g))
              ? e
              : -1 !== (e = Ib.call(this._weekdaysParse, g))
              ? e
              : -1 !== (e = Ib.call(this._minWeekdaysParse, g))
              ? e
              : null
            : -1 !== (e = Ib.call(this._minWeekdaysParse, g))
            ? e
            : -1 !== (e = Ib.call(this._weekdaysParse, g))
            ? e
            : -1 !== (e = Ib.call(this._shortWeekdaysParse, g))
            ? e
            : null;
        }.call(this, a, b, c);
      for (
        this._weekdaysParse ||
          ((this._weekdaysParse = []),
          (this._minWeekdaysParse = []),
          (this._shortWeekdaysParse = []),
          (this._fullWeekdaysParse = [])),
          d = 0;
        d < 7;
        d++
      ) {
        if (
          ((e = j([2e3, 1]).day(d)),
          c &&
            !this._fullWeekdaysParse[d] &&
            ((this._fullWeekdaysParse[d] = new RegExp(
              "^" + this.weekdays(e, "").replace(".", ".?") + "$",
              "i"
            )),
            (this._shortWeekdaysParse[d] = new RegExp(
              "^" + this.weekdaysShort(e, "").replace(".", ".?") + "$",
              "i"
            )),
            (this._minWeekdaysParse[d] = new RegExp(
              "^" + this.weekdaysMin(e, "").replace(".", ".?") + "$",
              "i"
            ))),
          this._weekdaysParse[d] ||
            ((f =
              "^" +
              this.weekdays(e, "") +
              "|^" +
              this.weekdaysShort(e, "") +
              "|^" +
              this.weekdaysMin(e, "")),
            (this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i"))),
          c && "dddd" === b && this._fullWeekdaysParse[d].test(a))
        )
          return d;
        if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
        if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
        if (!c && this._weekdaysParse[d].test(a)) return d;
      }
    }),
    (vc.weekdaysRegex = function (a) {
      return this._weekdaysParseExact
        ? (h(this, "_weekdaysRegex") || $.call(this),
          a ? this._weekdaysStrictRegex : this._weekdaysRegex)
        : (h(this, "_weekdaysRegex") || (this._weekdaysRegex = Sb),
          this._weekdaysStrictRegex && a
            ? this._weekdaysStrictRegex
            : this._weekdaysRegex);
    }),
    (vc.weekdaysShortRegex = function (a) {
      return this._weekdaysParseExact
        ? (h(this, "_weekdaysRegex") || $.call(this),
          a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
        : (h(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Tb),
          this._weekdaysShortStrictRegex && a
            ? this._weekdaysShortStrictRegex
            : this._weekdaysShortRegex);
    }),
    (vc.weekdaysMinRegex = function (a) {
      return this._weekdaysParseExact
        ? (h(this, "_weekdaysRegex") || $.call(this),
          a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
        : (h(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ub),
          this._weekdaysMinStrictRegex && a
            ? this._weekdaysMinStrictRegex
            : this._weekdaysMinRegex);
    }),
    (vc.isPM = function (a) {
      return "p" === (a + "").toLowerCase().charAt(0);
    }),
    (vc.meridiem = function (a, b, c) {
      return a > 11 ? (c ? "pm" : "PM") : c ? "am" : "AM";
    }),
    ea("en", {
      dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
      ordinal: function (a) {
        var b = a % 10;
        return (
          a +
          (1 === r((a % 100) / 10)
            ? "th"
            : 1 === b
            ? "st"
            : 2 === b
            ? "nd"
            : 3 === b
            ? "rd"
            : "th")
        );
      },
    }),
    (a.lang = u("moment.lang is deprecated. Use moment.locale instead.", ea)),
    (a.langData = u(
      "moment.langData is deprecated. Use moment.localeData instead.",
      ga
    ));
  var wc = Math.abs,
    xc = Ta("ms"),
    yc = Ta("s"),
    zc = Ta("m"),
    Ac = Ta("h"),
    Bc = Ta("d"),
    Cc = Ta("w"),
    Dc = Ta("M"),
    Ec = Ta("y"),
    Fc = Ua("milliseconds"),
    Gc = Ua("seconds"),
    Hc = Ua("minutes"),
    Ic = Ua("hours"),
    Jc = Ua("days"),
    Kc = Ua("months"),
    Lc = Ua("years"),
    Mc = Math.round,
    Nc = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
    Oc = Math.abs,
    Pc = sa.prototype;
  return (
    (Pc.isValid = function () {
      return this._isValid;
    }),
    (Pc.abs = function () {
      var a = this._data;
      return (
        (this._milliseconds = wc(this._milliseconds)),
        (this._days = wc(this._days)),
        (this._months = wc(this._months)),
        (a.milliseconds = wc(a.milliseconds)),
        (a.seconds = wc(a.seconds)),
        (a.minutes = wc(a.minutes)),
        (a.hours = wc(a.hours)),
        (a.months = wc(a.months)),
        (a.years = wc(a.years)),
        this
      );
    }),
    (Pc.add = function (a, b) {
      return Pa(this, a, b, 1);
    }),
    (Pc.subtract = function (a, b) {
      return Pa(this, a, b, -1);
    }),
    (Pc.as = function (a) {
      if (!this.isValid()) return NaN;
      var b,
        c,
        d = this._milliseconds;
      if ("month" === (a = A(a)) || "year" === a)
        return (
          (b = this._days + d / 864e5),
          (c = this._months + Ra(b)),
          "month" === a ? c : c / 12
        );
      switch (((b = this._days + Math.round(Sa(this._months))), a)) {
        case "week":
          return b / 7 + d / 6048e5;
        case "day":
          return b + d / 864e5;
        case "hour":
          return 24 * b + d / 36e5;
        case "minute":
          return 1440 * b + d / 6e4;
        case "second":
          return 86400 * b + d / 1e3;
        case "millisecond":
          return Math.floor(864e5 * b) + d;
        default:
          throw new Error("Unknown unit " + a);
      }
    }),
    (Pc.asMilliseconds = xc),
    (Pc.asSeconds = yc),
    (Pc.asMinutes = zc),
    (Pc.asHours = Ac),
    (Pc.asDays = Bc),
    (Pc.asWeeks = Cc),
    (Pc.asMonths = Dc),
    (Pc.asYears = Ec),
    (Pc.valueOf = function () {
      return this.isValid()
        ? this._milliseconds +
            864e5 * this._days +
            (this._months % 12) * 2592e6 +
            31536e6 * r(this._months / 12)
        : NaN;
    }),
    (Pc._bubble = function () {
      var a,
        b,
        c,
        d,
        e,
        f = this._milliseconds,
        g = this._days,
        h = this._months,
        i = this._data;
      return (
        (f >= 0 && g >= 0 && h >= 0) ||
          (f <= 0 && g <= 0 && h <= 0) ||
          ((f += 864e5 * Qa(Sa(h) + g)), (g = 0), (h = 0)),
        (i.milliseconds = f % 1e3),
        (a = q(f / 1e3)),
        (i.seconds = a % 60),
        (b = q(a / 60)),
        (i.minutes = b % 60),
        (c = q(b / 60)),
        (i.hours = c % 24),
        (h += e = q(Ra((g += q(c / 24))))),
        (g -= Qa(Sa(e))),
        (d = q(h / 12)),
        (h %= 12),
        (i.days = g),
        (i.months = h),
        (i.years = d),
        this
      );
    }),
    (Pc.clone = function () {
      return Aa(this);
    }),
    (Pc.get = function (a) {
      return (a = A(a)), this.isValid() ? this[a + "s"]() : NaN;
    }),
    (Pc.milliseconds = Fc),
    (Pc.seconds = Gc),
    (Pc.minutes = Hc),
    (Pc.hours = Ic),
    (Pc.days = Jc),
    (Pc.weeks = function () {
      return q(this.days() / 7);
    }),
    (Pc.months = Kc),
    (Pc.years = Lc),
    (Pc.humanize = function (a) {
      if (!this.isValid()) return this.localeData().invalidDate();
      var b,
        c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m = this.localeData(),
        n =
          ((c = !a),
          (d = m),
          (e = Aa((b = this)).abs()),
          (f = Mc(e.as("s"))),
          (g = Mc(e.as("m"))),
          (h = Mc(e.as("h"))),
          (i = Mc(e.as("d"))),
          (j = Mc(e.as("M"))),
          (k = Mc(e.as("y"))),
          ((l = (f <= Nc.ss && ["s", f]) ||
            (f < Nc.s && ["ss", f]) ||
            (g <= 1 && ["m"]) ||
            (g < Nc.m && ["mm", g]) ||
            (h <= 1 && ["h"]) ||
            (h < Nc.h && ["hh", h]) ||
            (i <= 1 && ["d"]) ||
            (i < Nc.d && ["dd", i]) ||
            (j <= 1 && ["M"]) ||
            (j < Nc.M && ["MM", j]) ||
            (k <= 1 && ["y"]) || ["yy", k])[2] = c),
          (l[3] = +b > 0),
          (l[4] = d),
          function (a, b, c, d, e) {
            return e.relativeTime(b || 1, !!c, a, d);
          }.apply(null, l));
      return a && (n = m.pastFuture(+this, n)), m.postformat(n);
    }),
    (Pc.toISOString = Wa),
    (Pc.toString = Wa),
    (Pc.toJSON = Wa),
    (Pc.locale = Ga),
    (Pc.localeData = Ha),
    (Pc.toIsoString = u(
      "toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",
      Wa
    )),
    (Pc.lang = oc),
    E("X", 0, 0, "unix"),
    E("x", 0, 0, "valueOf"),
    H("x", tb),
    H("X", /[+-]?\d+(\.\d{1,3})?/),
    K("X", function (a, b, c) {
      c._d = new Date(1e3 * parseFloat(a, 10));
    }),
    K("x", function (a, b, c) {
      c._d = new Date(r(a));
    }),
    (a.version = "2.21.0"),
    (Xa = qa),
    (a.fn = uc),
    (a.min = function () {
      return ra("isBefore", [].slice.call(arguments, 0));
    }),
    (a.max = function () {
      return ra("isAfter", [].slice.call(arguments, 0));
    }),
    (a.now = function () {
      return Date.now ? Date.now() : +new Date();
    }),
    (a.utc = j),
    (a.unix = function (a) {
      return qa(1e3 * a);
    }),
    (a.months = function (a, b) {
      return Na(a, b, "months");
    }),
    (a.isDate = f),
    (a.locale = ea),
    (a.invalid = m),
    (a.duration = Aa),
    (a.isMoment = p),
    (a.weekdays = function (a, b, c) {
      return Oa(a, b, c, "weekdays");
    }),
    (a.parseZone = function () {
      return qa.apply(null, arguments).parseZone();
    }),
    (a.localeData = ga),
    (a.isDuration = ta),
    (a.monthsShort = function (a, b) {
      return Na(a, b, "monthsShort");
    }),
    (a.weekdaysMin = function (a, b, c) {
      return Oa(a, b, c, "weekdaysMin");
    }),
    (a.defineLocale = fa),
    (a.updateLocale = function (a, b) {
      if (null != b) {
        var c,
          d,
          e = Xb;
        null != (d = da(a)) && (e = d._config),
          ((c = new y((b = x(e, b)))).parentLocale = Yb[a]),
          (Yb[a] = c),
          ea(a);
      } else
        null != Yb[a] &&
          (null != Yb[a].parentLocale
            ? (Yb[a] = Yb[a].parentLocale)
            : null != Yb[a] && delete Yb[a]);
      return Yb[a];
    }),
    (a.locales = function () {
      return Za(Yb);
    }),
    (a.weekdaysShort = function (a, b, c) {
      return Oa(a, b, c, "weekdaysShort");
    }),
    (a.normalizeUnits = A),
    (a.relativeTimeRounding = function (a) {
      return void 0 === a ? Mc : "function" == typeof a && ((Mc = a), !0);
    }),
    (a.relativeTimeThreshold = function (a, b) {
      return (
        void 0 !== Nc[a] &&
        (void 0 === b ? Nc[a] : ((Nc[a] = b), "s" === a && (Nc.ss = b - 1), !0))
      );
    }),
    (a.calendarFormat = function (a, b) {
      var c = a.diff(b, "days", !0);
      return c < -6
        ? "sameElse"
        : c < -1
        ? "lastWeek"
        : c < 0
        ? "lastDay"
        : c < 1
        ? "sameDay"
        : c < 2
        ? "nextDay"
        : c < 7
        ? "nextWeek"
        : "sameElse";
    }),
    (a.prototype = uc),
    (a.HTML5_FMT = {
      DATETIME_LOCAL: "YYYY-MM-DDTHH:mm",
      DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss",
      DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS",
      DATE: "YYYY-MM-DD",
      TIME: "HH:mm",
      TIME_SECONDS: "HH:mm:ss",
      TIME_MS: "HH:mm:ss.SSS",
      WEEK: "YYYY-[W]WW",
      MONTH: "YYYY-MM",
    }),
    a
  );
});
