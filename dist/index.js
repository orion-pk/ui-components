import ze, { useState as br, useRef as gr, useEffect as mr } from "react";
import { Mail as xr, Phone as hr, Loader2 as Te, CheckCircle2 as yr, Info as Ce, AlertTriangle as ke, ChevronDown as vr, Settings as jr, LogOut as Rr, Download as Sr, X as Z, ShieldCheck as wr, ChevronLeft as Cr, ChevronRight as kr, Search as Er, Filter as _r } from "lucide-react";
var H = { exports: {} }, A = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ee;
function zr() {
  if (Ee) return A;
  Ee = 1;
  var n = ze, s = Symbol.for("react.element"), i = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(b, m, j) {
    var h, k = {}, _ = null, B = null;
    j !== void 0 && (_ = "" + j), m.key !== void 0 && (_ = "" + m.key), m.ref !== void 0 && (B = m.ref);
    for (h in m) a.call(m, h) && !l.hasOwnProperty(h) && (k[h] = m[h]);
    if (b && b.defaultProps) for (h in m = b.defaultProps, m) k[h] === void 0 && (k[h] = m[h]);
    return { $$typeof: s, type: b, key: _, ref: B, props: k, _owner: c.current };
  }
  return A.Fragment = i, A.jsx = f, A.jsxs = f, A;
}
var F = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _e;
function Tr() {
  return _e || (_e = 1, process.env.NODE_ENV !== "production" && function() {
    var n = ze, s = Symbol.for("react.element"), i = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), b = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), j = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), B = Symbol.for("react.offscreen"), Q = Symbol.iterator, Oe = "@@iterator";
    function We(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = Q && e[Q] || e[Oe];
      return typeof t == "function" ? t : null;
    }
    var O = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function R(e) {
      {
        for (var t = arguments.length, o = new Array(t > 1 ? t - 1 : 0), d = 1; d < t; d++)
          o[d - 1] = arguments[d];
        Ie("error", e, o);
      }
    }
    function Ie(e, t, o) {
      {
        var d = O.ReactDebugCurrentFrame, g = d.getStackAddendum();
        g !== "" && (t += "%s", o = o.concat([g]));
        var x = o.map(function(p) {
          return String(p);
        });
        x.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, x);
      }
    }
    var Pe = !1, De = !1, Ae = !1, Fe = !1, Be = !1, ee;
    ee = Symbol.for("react.module.reference");
    function $e(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === l || Be || e === c || e === j || e === h || Fe || e === B || Pe || De || Ae || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === k || e.$$typeof === f || e.$$typeof === b || e.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ue(e, t, o) {
      var d = e.displayName;
      if (d)
        return d;
      var g = t.displayName || t.name || "";
      return g !== "" ? o + "(" + g + ")" : o;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && R("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case i:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case j:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var t = e;
            return re(t) + ".Consumer";
          case f:
            var o = e;
            return re(o._context) + ".Provider";
          case m:
            return Ue(e, e.render, "ForwardRef");
          case k:
            var d = e.displayName || null;
            return d !== null ? d : E(e.type) || "Memo";
          case _: {
            var g = e, x = g._payload, p = g._init;
            try {
              return E(p(x));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var z = Object.assign, P = 0, te, ne, oe, ie, se, ae, le;
    function de() {
    }
    de.__reactDisabledLog = !0;
    function Ye() {
      {
        if (P === 0) {
          te = console.log, ne = console.info, oe = console.warn, ie = console.error, se = console.group, ae = console.groupCollapsed, le = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: de,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        P++;
      }
    }
    function Me() {
      {
        if (P--, P === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: z({}, e, {
              value: te
            }),
            info: z({}, e, {
              value: ne
            }),
            warn: z({}, e, {
              value: oe
            }),
            error: z({}, e, {
              value: ie
            }),
            group: z({}, e, {
              value: se
            }),
            groupCollapsed: z({}, e, {
              value: ae
            }),
            groupEnd: z({}, e, {
              value: le
            })
          });
        }
        P < 0 && R("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = O.ReactCurrentDispatcher, V;
    function $(e, t, o) {
      {
        if (V === void 0)
          try {
            throw Error();
          } catch (g) {
            var d = g.stack.trim().match(/\n( *(at )?)/);
            V = d && d[1] || "";
          }
        return `
` + V + e;
      }
    }
    var N = !1, U;
    {
      var Le = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Le();
    }
    function ce(e, t) {
      if (!e || N)
        return "";
      {
        var o = U.get(e);
        if (o !== void 0)
          return o;
      }
      var d;
      N = !0;
      var g = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var x;
      x = L.current, L.current = null, Ye();
      try {
        if (t) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (w) {
              d = w;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (w) {
              d = w;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (w) {
            d = w;
          }
          e();
        }
      } catch (w) {
        if (w && d && typeof w.stack == "string") {
          for (var u = w.stack.split(`
`), S = d.stack.split(`
`), y = u.length - 1, v = S.length - 1; y >= 1 && v >= 0 && u[y] !== S[v]; )
            v--;
          for (; y >= 1 && v >= 0; y--, v--)
            if (u[y] !== S[v]) {
              if (y !== 1 || v !== 1)
                do
                  if (y--, v--, v < 0 || u[y] !== S[v]) {
                    var C = `
` + u[y].replace(" at new ", " at ");
                    return e.displayName && C.includes("<anonymous>") && (C = C.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, C), C;
                  }
                while (y >= 1 && v >= 0);
              break;
            }
        }
      } finally {
        N = !1, L.current = x, Me(), Error.prepareStackTrace = g;
      }
      var I = e ? e.displayName || e.name : "", T = I ? $(I) : "";
      return typeof e == "function" && U.set(e, T), T;
    }
    function Ve(e, t, o) {
      return ce(e, !1);
    }
    function Ne(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function Y(e, t, o) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ce(e, Ne(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case j:
          return $("Suspense");
        case h:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            return Ve(e.render);
          case k:
            return Y(e.type, t, o);
          case _: {
            var d = e, g = d._payload, x = d._init;
            try {
              return Y(x(g), t, o);
            } catch {
            }
          }
        }
      return "";
    }
    var D = Object.prototype.hasOwnProperty, fe = {}, ue = O.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var t = e._owner, o = Y(e.type, e._source, t ? t.type : null);
        ue.setExtraStackFrame(o);
      } else
        ue.setExtraStackFrame(null);
    }
    function Je(e, t, o, d, g) {
      {
        var x = Function.call.bind(D);
        for (var p in e)
          if (x(e, p)) {
            var u = void 0;
            try {
              if (typeof e[p] != "function") {
                var S = Error((d || "React class") + ": " + o + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw S.name = "Invariant Violation", S;
              }
              u = e[p](t, p, d, o, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              u = y;
            }
            u && !(u instanceof Error) && (M(g), R("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", o, p, typeof u), M(null)), u instanceof Error && !(u.message in fe) && (fe[u.message] = !0, M(g), R("Failed %s type: %s", o, u.message), M(null));
          }
      }
    }
    var qe = Array.isArray;
    function J(e) {
      return qe(e);
    }
    function Ke(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, o = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o;
      }
    }
    function Ge(e) {
      try {
        return pe(e), !1;
      } catch {
        return !0;
      }
    }
    function pe(e) {
      return "" + e;
    }
    function be(e) {
      if (Ge(e))
        return R("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ke(e)), pe(e);
    }
    var ge = O.ReactCurrentOwner, Xe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, me, xe;
    function He(e) {
      if (D.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (D.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Qe(e, t) {
      typeof e.ref == "string" && ge.current;
    }
    function er(e, t) {
      {
        var o = function() {
          me || (me = !0, R("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: o,
          configurable: !0
        });
      }
    }
    function rr(e, t) {
      {
        var o = function() {
          xe || (xe = !0, R("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        o.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: o,
          configurable: !0
        });
      }
    }
    var tr = function(e, t, o, d, g, x, p) {
      var u = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: o,
        props: p,
        // Record the component responsible for creating this element.
        _owner: x
      };
      return u._store = {}, Object.defineProperty(u._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(u, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(u, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: g
      }), Object.freeze && (Object.freeze(u.props), Object.freeze(u)), u;
    };
    function nr(e, t, o, d, g) {
      {
        var x, p = {}, u = null, S = null;
        o !== void 0 && (be(o), u = "" + o), Ze(t) && (be(t.key), u = "" + t.key), He(t) && (S = t.ref, Qe(t, g));
        for (x in t)
          D.call(t, x) && !Xe.hasOwnProperty(x) && (p[x] = t[x]);
        if (e && e.defaultProps) {
          var y = e.defaultProps;
          for (x in y)
            p[x] === void 0 && (p[x] = y[x]);
        }
        if (u || S) {
          var v = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          u && er(p, v), S && rr(p, v);
        }
        return tr(e, u, S, g, d, ge.current, p);
      }
    }
    var q = O.ReactCurrentOwner, he = O.ReactDebugCurrentFrame;
    function W(e) {
      if (e) {
        var t = e._owner, o = Y(e.type, e._source, t ? t.type : null);
        he.setExtraStackFrame(o);
      } else
        he.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function G(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function ye() {
      {
        if (q.current) {
          var e = E(q.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function or(e) {
      return "";
    }
    var ve = {};
    function ir(e) {
      {
        var t = ye();
        if (!t) {
          var o = typeof e == "string" ? e : e.displayName || e.name;
          o && (t = `

Check the top-level render call using <` + o + ">.");
        }
        return t;
      }
    }
    function je(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var o = ir(t);
        if (ve[o])
          return;
        ve[o] = !0;
        var d = "";
        e && e._owner && e._owner !== q.current && (d = " It was passed a child from " + E(e._owner.type) + "."), W(e), R('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', o, d), W(null);
      }
    }
    function Re(e, t) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var o = 0; o < e.length; o++) {
            var d = e[o];
            G(d) && je(d, t);
          }
        else if (G(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var g = We(e);
          if (typeof g == "function" && g !== e.entries)
            for (var x = g.call(e), p; !(p = x.next()).done; )
              G(p.value) && je(p.value, t);
        }
      }
    }
    function sr(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var o;
        if (typeof t == "function")
          o = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === k))
          o = t.propTypes;
        else
          return;
        if (o) {
          var d = E(t);
          Je(o, e.props, "prop", d, e);
        } else if (t.PropTypes !== void 0 && !K) {
          K = !0;
          var g = E(t);
          R("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", g || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && R("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ar(e) {
      {
        for (var t = Object.keys(e.props), o = 0; o < t.length; o++) {
          var d = t[o];
          if (d !== "children" && d !== "key") {
            W(e), R("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), W(null);
            break;
          }
        }
        e.ref !== null && (W(e), R("Invalid attribute `ref` supplied to `React.Fragment`."), W(null));
      }
    }
    var Se = {};
    function we(e, t, o, d, g, x) {
      {
        var p = $e(e);
        if (!p) {
          var u = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (u += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var S = or();
          S ? u += S : u += ye();
          var y;
          e === null ? y = "null" : J(e) ? y = "array" : e !== void 0 && e.$$typeof === s ? (y = "<" + (E(e.type) || "Unknown") + " />", u = " Did you accidentally export a JSX literal instead of a component?") : y = typeof e, R("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", y, u);
        }
        var v = nr(e, t, o, g, x);
        if (v == null)
          return v;
        if (p) {
          var C = t.children;
          if (C !== void 0)
            if (d)
              if (J(C)) {
                for (var I = 0; I < C.length; I++)
                  Re(C[I], e);
                Object.freeze && Object.freeze(C);
              } else
                R("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Re(C, e);
        }
        if (D.call(t, "key")) {
          var T = E(e), w = Object.keys(t).filter(function(pr) {
            return pr !== "key";
          }), X = w.length > 0 ? "{key: someKey, " + w.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Se[T + X]) {
            var ur = w.length > 0 ? "{" + w.join(": ..., ") + ": ...}" : "{}";
            R(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, X, T, ur, T), Se[T + X] = !0;
          }
        }
        return e === a ? ar(v) : sr(v), v;
      }
    }
    function lr(e, t, o) {
      return we(e, t, o, !0);
    }
    function dr(e, t, o) {
      return we(e, t, o, !1);
    }
    var cr = dr, fr = lr;
    F.Fragment = a, F.jsx = cr, F.jsxs = fr;
  }()), F;
}
process.env.NODE_ENV === "production" ? H.exports = zr() : H.exports = Tr();
var r = H.exports;
const Ir = ({ status: n, customLabel: s }) => {
  const i = (n || "").toLowerCase().replace(/[\s_-]+/g, "");
  let a = {
    color: "#0f172a",
    bg: "#f1f5f9",
    border: "#cbd5e1",
    label: s || n || "Unknown"
  };
  return ["pending", "unregistered"].includes(i) ? a = {
    color: "#991b1b",
    bg: "#fef2f2",
    border: "#fca5a5",
    label: s || (i === "pending" ? "Pending" : "Unregistered")
  } : ["completed", "registered"].includes(i) ? a = {
    color: "#065f46",
    bg: "#d1fae5",
    border: "#a7f3d0",
    label: s || (i === "completed" ? "Completed" : "Registered")
  } : ["inconsultation", "consultation"].includes(i) && (a = {
    color: "#9a3412",
    bg: "#ffedd5",
    border: "#fed7aa",
    label: s || "In Consultation"
  }), /* @__PURE__ */ r.jsxs(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: "0.35rem",
        padding: "0.25rem 0.65rem",
        borderRadius: "9999px",
        fontSize: "0.75rem",
        fontWeight: 600,
        color: a.color,
        backgroundColor: a.bg,
        border: `1px solid ${a.border}`,
        whiteSpace: "nowrap"
      },
      children: [
        /* @__PURE__ */ r.jsx(
          "span",
          {
            style: {
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: a.color
            }
          }
        ),
        a.label
      ]
    }
  );
}, Pr = ({ severity: n }) => {
  const s = (n || "").toLowerCase();
  let i = {
    color: "#065f46",
    bg: "#d1fae5",
    border: "#a7f3d0",
    label: "Minor"
  };
  return s === "moderate" ? i = {
    color: "#014d6b",
    bg: "#e5f3f7",
    border: "#bae6fd",
    label: "Moderate"
  } : (s === "major" || s === "critical") && (i = {
    color: "#991b1b",
    bg: "#fef2f2",
    border: "#fca5a5",
    label: s === "critical" ? "Critical" : "Major"
  }), /* @__PURE__ */ r.jsx(
    "span",
    {
      style: {
        display: "inline-flex",
        alignItems: "center",
        padding: "0.2rem 0.6rem",
        borderRadius: "4px",
        fontSize: "0.72rem",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.04em",
        color: i.color,
        backgroundColor: i.bg,
        border: `1px solid ${i.border}`
      },
      children: i.label
    }
  );
}, Dr = ({ title: n, value: s, icon: i, trend: a, trendLabel: c, accentColor: l = "#02658b" }) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    style: {
      background: "#ffffff",
      border: "1.5px solid #cbd5e1",
      borderRadius: "0.75rem",
      padding: "1.25rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      gap: "0.75rem"
    },
    children: [
      /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.85rem", fontWeight: 600, color: "#64748b" }, children: n }),
        i && /* @__PURE__ */ r.jsx(
          "div",
          {
            style: {
              padding: "0.5rem",
              borderRadius: "0.5rem",
              backgroundColor: `${l}15`,
              color: l,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ r.jsx(i, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("div", { style: { fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }, children: s }),
      a && /* @__PURE__ */ r.jsxs("div", { style: { fontSize: "0.75rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }, children: [
        /* @__PURE__ */ r.jsx("span", { style: { color: a.startsWith("+") ? "#10b981" : "#ef4444" }, children: a }),
        c && /* @__PURE__ */ r.jsx("span", { style: { color: "#64748b" }, children: c })
      ] })
    ]
  }
), Ar = ({ label: n, count: s, badgeColor: i = "#02658b" }) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    style: {
      background: "#ffffff",
      border: "1px solid #cbd5e1",
      borderRadius: "0.5rem",
      padding: "0.85rem 1.1rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    children: [
      /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.85rem", fontWeight: 600, color: "#334155" }, children: n }),
      /* @__PURE__ */ r.jsx(
        "span",
        {
          style: {
            background: i,
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.85rem",
            padding: "0.2rem 0.65rem",
            borderRadius: "9999px"
          },
          children: s
        }
      )
    ]
  }
), Fr = ({ name: n, email: s, phone: i, role: a, status: c, avatarUrl: l, actions: f }) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    style: {
      background: "#ffffff",
      border: "1.5px solid #cbd5e1",
      borderRadius: "0.75rem",
      padding: "1.25rem",
      boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.05)"
    },
    children: [
      /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }, children: [
        l ? /* @__PURE__ */ r.jsx(
          "img",
          {
            src: l,
            alt: n,
            style: { width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover" }
          }
        ) : /* @__PURE__ */ r.jsx(
          "div",
          {
            style: {
              width: "48px",
              height: "48px",
              borderRadius: "50%",
              background: "#e5f3f7",
              color: "#02658b",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: "1.1rem"
            },
            children: (n || "U").charAt(0).toUpperCase()
          }
        ),
        /* @__PURE__ */ r.jsxs("div", { children: [
          /* @__PURE__ */ r.jsx("h4", { style: { margin: 0, fontSize: "1rem", fontWeight: 700, color: "#0f172a" }, children: n }),
          a && /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.75rem", color: "#02658b", fontWeight: 600 }, children: a })
        ] })
      ] }),
      /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.82rem", color: "#475569" }, children: [
        s && /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.4rem" }, children: [
          /* @__PURE__ */ r.jsx(xr, { size: 14, color: "#64748b" }),
          /* @__PURE__ */ r.jsx("span", { children: s })
        ] }),
        i && /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.4rem" }, children: [
          /* @__PURE__ */ r.jsx(hr, { size: 14, color: "#64748b" }),
          /* @__PURE__ */ r.jsx("span", { children: i })
        ] })
      ] }),
      f && /* @__PURE__ */ r.jsx("div", { style: { marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid #f1f5f9", display: "flex", gap: "0.5rem" }, children: f })
    ]
  }
), Br = ({ message: n = "Loading...", fullPage: s = !1, size: i = 28 }) => {
  const a = /* @__PURE__ */ r.jsxs(
    "div",
    {
      style: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.75rem",
        padding: "1.5rem"
      },
      children: [
        /* @__PURE__ */ r.jsx(Te, { size: i, color: "#02658b", className: "orion-spin" }),
        n && /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.88rem", fontWeight: 600, color: "#475569" }, children: n })
      ]
    }
  );
  return s ? /* @__PURE__ */ r.jsx(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        backdropFilter: "blur(3px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999
      },
      children: a
    }
  ) : a;
}, $r = ({
  isOpen: n,
  title: s,
  message: i,
  type: a = "warning",
  // 'warning' | 'danger' | 'info' | 'success'
  confirmText: c = "Confirm",
  cancelText: l = "Cancel",
  onConfirm: f,
  onCancel: b,
  loading: m = !1
}) => {
  if (!n) return null;
  const j = {
    warning: { icon: ke, color: "#f97316", btnBg: "#f97316" },
    danger: { icon: ke, color: "#ef4444", btnBg: "#ef4444" },
    info: { icon: Ce, color: "#02658b", btnBg: "#02658b" },
    success: { icon: yr, color: "#10b981", btnBg: "#10b981" }
  }[a] || { icon: Ce, color: "#02658b", btnBg: "#02658b" }, h = j.icon;
  return /* @__PURE__ */ r.jsx(
    "div",
    {
      style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15, 23, 42, 0.45)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1e4
      },
      children: /* @__PURE__ */ r.jsxs(
        "div",
        {
          style: {
            width: "100%",
            maxWidth: "400px",
            background: "#ffffff",
            border: "1.5px solid #cbd5e1",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
          },
          children: [
            /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "flex-start", gap: "0.75rem", marginBottom: "1rem" }, children: [
              /* @__PURE__ */ r.jsx("div", { style: { padding: "0.5rem", borderRadius: "50%", backgroundColor: `${j.color}15` }, children: /* @__PURE__ */ r.jsx(h, { size: 22, color: j.color }) }),
              /* @__PURE__ */ r.jsxs("div", { children: [
                /* @__PURE__ */ r.jsx("h3", { style: { margin: 0, fontSize: "1.05rem", fontWeight: 700, color: "#0f172a" }, children: s }),
                i && /* @__PURE__ */ r.jsx("p", { style: { margin: "0.35rem 0 0 0", fontSize: "0.85rem", color: "#64748b" }, children: i })
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: "0.75rem", justifyContent: "flex-end", marginTop: "1.25rem" }, children: [
              l && /* @__PURE__ */ r.jsx(
                "button",
                {
                  type: "button",
                  onClick: b,
                  disabled: m,
                  style: {
                    padding: "0.45rem 0.9rem",
                    borderRadius: "6px",
                    background: "#ffffff",
                    border: "1.5px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer"
                  },
                  children: l
                }
              ),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  type: "button",
                  onClick: f,
                  disabled: m,
                  style: {
                    padding: "0.45rem 1rem",
                    borderRadius: "6px",
                    background: j.btnBg,
                    border: "none",
                    color: "#ffffff",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer"
                  },
                  children: m ? "Processing..." : c
                }
              )
            ] })
          ]
        }
      )
    }
  );
}, Ur = ({ username: n, role: s, email: i, onLogout: a, onSettingsClick: c }) => {
  const [l, f] = br(!1), b = gr(null);
  return mr(() => {
    const m = (j) => {
      b.current && !b.current.contains(j.target) && f(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []), /* @__PURE__ */ r.jsxs("div", { ref: b, style: { position: "relative", display: "inline-block" }, children: [
    /* @__PURE__ */ r.jsxs(
      "button",
      {
        type: "button",
        onClick: () => f(!l),
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          padding: "0.4rem 0.75rem",
          background: "#ffffff",
          border: "1.5px solid #cbd5e1",
          borderRadius: "0.5rem",
          cursor: "pointer"
        },
        children: [
          /* @__PURE__ */ r.jsx(
            "div",
            {
              style: {
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                background: "#e5f3f7",
                color: "#02658b",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 700,
                fontSize: "0.85rem"
              },
              children: (n || "U").charAt(0).toUpperCase()
            }
          ),
          /* @__PURE__ */ r.jsxs("div", { style: { textAlign: "left", display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.82rem", fontWeight: 700, color: "#0f172a" }, children: n }),
            s && /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.7rem", color: "#64748b" }, children: s })
          ] }),
          /* @__PURE__ */ r.jsx(vr, { size: 14, color: "#64748b" })
        ]
      }
    ),
    l && /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: {
          position: "absolute",
          top: "calc(100% + 0.5rem)",
          right: 0,
          width: "200px",
          background: "#ffffff",
          border: "1.5px solid #cbd5e1",
          borderRadius: "0.5rem",
          boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
          zIndex: 1e3,
          padding: "0.5rem 0"
        },
        children: [
          i && /* @__PURE__ */ r.jsxs("div", { style: { padding: "0.5rem 0.85rem", borderBottom: "1px solid #f1f5f9", fontSize: "0.75rem", color: "#64748b" }, children: [
            "Signed in as ",
            /* @__PURE__ */ r.jsx("strong", { style: { color: "#0f172a" }, children: i })
          ] }),
          c && /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                f(!1), c();
              },
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "0.5rem 0.85rem",
                border: "none",
                background: "none",
                color: "#334155",
                fontSize: "0.82rem",
                cursor: "pointer",
                textAlign: "left"
              },
              children: [
                /* @__PURE__ */ r.jsx(jr, { size: 14 }),
                /* @__PURE__ */ r.jsx("span", { children: "Settings" })
              ]
            }
          ),
          /* @__PURE__ */ r.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                f(!1), a && a();
              },
              style: {
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                width: "100%",
                padding: "0.5rem 0.85rem",
                border: "none",
                background: "none",
                color: "#ef4444",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: "pointer",
                textAlign: "left"
              },
              children: [
                /* @__PURE__ */ r.jsx(Rr, { size: 14 }),
                /* @__PURE__ */ r.jsx("span", { children: "Sign Out" })
              ]
            }
          )
        ]
      }
    )
  ] });
}, Yr = ({ version: n, hasUpdate: s, onClick: i }) => /* @__PURE__ */ r.jsxs(
  "button",
  {
    type: "button",
    onClick: i,
    style: {
      position: "relative",
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.35rem 0.75rem",
      background: "#f8fafc",
      color: "#0f172a",
      border: "1.5px solid #cbd5e1",
      borderRadius: "20px",
      fontSize: "0.78rem",
      fontWeight: 700,
      cursor: i ? "pointer" : "default"
    },
    title: s ? "Update available!" : "System up to date",
    children: [
      /* @__PURE__ */ r.jsx("span", { style: { color: "#64748b", fontSize: "0.7rem", textTransform: "uppercase" }, children: "v" }),
      /* @__PURE__ */ r.jsx("span", { style: { color: "#02658b" }, children: n }),
      s && /* @__PURE__ */ r.jsx(
        "span",
        {
          style: {
            width: "8px",
            height: "8px",
            backgroundColor: "#ef4444",
            borderRadius: "50%",
            boxShadow: "0 0 6px #ef4444"
          }
        }
      )
    ]
  }
), Mr = ({
  isOpen: n,
  currentVersion: s,
  latestVersion: i,
  onClose: a,
  onUpdateClick: c,
  downloading: l,
  downloadProgress: f
}) => n ? /* @__PURE__ */ r.jsx(
  "div",
  {
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(15, 23, 42, 0.45)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e4
    },
    children: /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: {
          width: "100%",
          maxWidth: "420px",
          background: "#ffffff",
          border: "1.5px solid #cbd5e1",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
        },
        children: [
          /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }, children: [
            /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
              /* @__PURE__ */ r.jsx(Sr, { size: 22, color: "#02658b" }),
              /* @__PURE__ */ r.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: "Software Update" })
            ] }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: a, style: { background: "none", border: "none", cursor: "pointer", color: "#64748b" }, children: /* @__PURE__ */ r.jsx(Z, { size: 20 }) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }, children: [
            /* @__PURE__ */ r.jsxs("div", { style: { background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: "8px", padding: "0.85rem", textAlign: "center" }, children: [
              /* @__PURE__ */ r.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Current Version" }),
              /* @__PURE__ */ r.jsxs("div", { style: { fontSize: "1.15rem", fontWeight: 700, color: "#0f172a" }, children: [
                "v",
                s
              ] })
            ] }),
            /* @__PURE__ */ r.jsxs("div", { style: { background: "#e5f3f7", border: "1.5px solid #02658b", borderRadius: "8px", padding: "0.85rem", textAlign: "center" }, children: [
              /* @__PURE__ */ r.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#02658b", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Update Version" }),
              /* @__PURE__ */ r.jsxs("div", { style: { fontSize: "1.15rem", fontWeight: 700, color: "#02658b" }, children: [
                "v",
                i
              ] })
            ] })
          ] }),
          l && /* @__PURE__ */ r.jsxs("div", { style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.35rem" }, children: [
              /* @__PURE__ */ r.jsx("span", { children: "Downloading update..." }),
              /* @__PURE__ */ r.jsxs("span", { children: [
                f,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ r.jsx("div", { style: { width: "100%", height: "8px", background: "#e2e8f0", borderRadius: "4px", overflow: "hidden" }, children: /* @__PURE__ */ r.jsx("div", { style: { width: `${f}%`, height: "100%", background: "#02658b", transition: "width 0.3s" } }) })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#065f46", background: "#d1fae5", padding: "0.5rem 0.75rem", borderRadius: "6px", marginBottom: "1.25rem" }, children: [
            /* @__PURE__ */ r.jsx(wr, { size: 16 }),
            /* @__PURE__ */ r.jsx("span", { children: "Your database & app data remain safe during update." })
          ] }),
          /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", gap: "0.5rem" }, children: [
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: a, style: { padding: "0.45rem 0.85rem", borderRadius: "6px", background: "#ffffff", border: "1.5px solid #cbd5e1", cursor: "pointer" }, children: "Cancel" }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: c, disabled: l, style: { padding: "0.45rem 1rem", borderRadius: "6px", background: "#02658b", color: "#ffffff", border: "none", fontWeight: 600, cursor: "pointer" }, children: l ? "Downloading..." : "Update Now" })
          ] })
        ]
      }
    )
  }
) : null, Lr = ({ progress: n = 0, statusText: s }) => /* @__PURE__ */ r.jsxs("div", { style: { background: "#f8fafc", border: "1px solid #cbd5e1", padding: "0.85rem", borderRadius: "8px" }, children: [
  /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem", fontSize: "0.82rem", fontWeight: 600, color: "#0f172a" }, children: [
    /* @__PURE__ */ r.jsx("span", { children: s || (n >= 100 ? "Download Complete!" : "Downloading Update...") }),
    /* @__PURE__ */ r.jsxs("span", { children: [
      n,
      "%"
    ] })
  ] }),
  /* @__PURE__ */ r.jsx("div", { style: { width: "100%", height: "10px", background: "#e2e8f0", borderRadius: "5px", overflow: "hidden" }, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      style: {
        width: `${Math.min(100, Math.max(0, n))}%`,
        height: "100%",
        background: n >= 100 ? "#10b981" : "#02658b",
        transition: "width 0.3s ease"
      }
    }
  ) })
] }), Vr = ({ columns: n, data: s, loading: i, emptyMessage: a = "No records found." }) => /* @__PURE__ */ r.jsx("div", { style: { width: "100%", overflowX: "auto", border: "1.5px solid #cbd5e1", borderRadius: "0.5rem", background: "#ffffff" }, children: /* @__PURE__ */ r.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.85rem" }, children: [
  /* @__PURE__ */ r.jsx("thead", { children: /* @__PURE__ */ r.jsx("tr", { style: { background: "#f8fafc", borderBottom: "1.5px solid #cbd5e1" }, children: n.map((c, l) => /* @__PURE__ */ r.jsx("th", { style: { padding: "0.75rem 1rem", fontWeight: 700, color: "#334155", width: c.width }, children: c.header }, l)) }) }),
  /* @__PURE__ */ r.jsx("tbody", { children: i ? /* @__PURE__ */ r.jsx("tr", { children: /* @__PURE__ */ r.jsx("td", { colSpan: n.length, style: { padding: "2rem", textAlign: "center", color: "#64748b" }, children: "Loading table data..." }) }) : !s || s.length === 0 ? /* @__PURE__ */ r.jsx("tr", { children: /* @__PURE__ */ r.jsx("td", { colSpan: n.length, style: { padding: "2rem", textAlign: "center", color: "#64748b" }, children: a }) }) : s.map((c, l) => /* @__PURE__ */ r.jsx(
    "tr",
    {
      style: {
        borderBottom: l === s.length - 1 ? "none" : "1px solid #f1f5f9",
        transition: "background-color 0.15s"
      },
      children: n.map((f, b) => /* @__PURE__ */ r.jsx("td", { style: { padding: "0.75rem 1rem", color: "#0f172a" }, children: f.render ? f.render(c, l) : c[f.accessor] }, b))
    },
    l
  )) })
] }) }), Nr = ({ currentPage: n, totalPages: s, onPageChange: i, totalItems: a, itemsPerPage: c, onItemsPerPageChange: l }) => /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0.75rem 0", fontSize: "0.82rem", color: "#475569" }, children: [
  /* @__PURE__ */ r.jsx("div", { children: a !== void 0 && /* @__PURE__ */ r.jsxs("span", { children: [
    "Showing Page ",
    /* @__PURE__ */ r.jsx("strong", { style: { color: "#0f172a" }, children: n }),
    " of ",
    /* @__PURE__ */ r.jsx("strong", { style: { color: "#0f172a" }, children: s || 1 }),
    " (",
    a,
    " total items)"
  ] }) }),
  /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
    l && /* @__PURE__ */ r.jsxs(
      "select",
      {
        value: c,
        onChange: (f) => l(Number(f.target.value)),
        style: { padding: "0.3rem 0.5rem", borderRadius: "4px", border: "1px solid #cbd5e1", fontSize: "0.8rem" },
        children: [
          /* @__PURE__ */ r.jsx("option", { value: 10, children: "10 per page" }),
          /* @__PURE__ */ r.jsx("option", { value: 25, children: "25 per page" }),
          /* @__PURE__ */ r.jsx("option", { value: 50, children: "50 per page" })
        ]
      }
    ),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        disabled: n <= 1,
        onClick: () => i(n - 1),
        style: {
          padding: "0.35rem 0.6rem",
          borderRadius: "4px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          cursor: n <= 1 ? "not-allowed" : "pointer",
          opacity: n <= 1 ? 0.5 : 1,
          display: "flex",
          alignItems: "center"
        },
        children: /* @__PURE__ */ r.jsx(Cr, { size: 16 })
      }
    ),
    /* @__PURE__ */ r.jsx("span", { style: { fontWeight: 700, color: "#02658b" }, children: n }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        disabled: n >= s,
        onClick: () => i(n + 1),
        style: {
          padding: "0.35rem 0.6rem",
          borderRadius: "4px",
          background: "#ffffff",
          border: "1px solid #cbd5e1",
          cursor: n >= s ? "not-allowed" : "pointer",
          opacity: n >= s ? 0.5 : 1,
          display: "flex",
          alignItems: "center"
        },
        children: /* @__PURE__ */ r.jsx(kr, { size: 16 })
      }
    )
  ] })
] }), Jr = ({
  children: n,
  variant: s = "primary",
  // 'primary' | 'secondary' | 'danger' | 'outline'
  size: i = "md",
  // 'sm' | 'md' | 'lg'
  loading: a = !1,
  disabled: c = !1,
  icon: l,
  onClick: f,
  type: b = "button",
  fullWidth: m = !1,
  style: j = {}
}) => {
  const h = {
    primary: { bg: "#02658b", color: "#ffffff", border: "none" },
    secondary: { bg: "#f1f5f9", color: "#0f172a", border: "1px solid #cbd5e1" },
    danger: { bg: "#ef4444", color: "#ffffff", border: "none" },
    outline: { bg: "#ffffff", color: "#02658b", border: "1.5px solid #02658b" }
  }[s] || { bg: "#02658b", color: "#ffffff", border: "none" }, k = {
    sm: "0.3rem 0.6rem",
    md: "0.45rem 0.95rem",
    lg: "0.65rem 1.3rem"
  }[i] || "0.45rem 0.95rem";
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      type: b,
      onClick: f,
      disabled: c || a,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        padding: k,
        borderRadius: "6px",
        background: h.bg,
        color: h.color,
        border: h.border,
        fontSize: i === "sm" ? "0.78rem" : i === "lg" ? "1rem" : "0.85rem",
        fontWeight: 600,
        cursor: c || a ? "not-allowed" : "pointer",
        opacity: c || a ? 0.6 : 1,
        width: m ? "100%" : "auto",
        transition: "all 0.15s ease",
        ...j
      },
      children: [
        a ? /* @__PURE__ */ r.jsx(Te, { size: 16, className: "orion-spin" }) : l ? /* @__PURE__ */ r.jsx(l, { size: 16 }) : null,
        /* @__PURE__ */ r.jsx("span", { children: n })
      ]
    }
  );
}, qr = ({ value: n, onChange: s, placeholder: i = "Search...", onClear: a }) => /* @__PURE__ */ r.jsxs("div", { style: { position: "relative", display: "flex", alignItems: "center", width: "100%", maxWidth: "320px" }, children: [
  /* @__PURE__ */ r.jsx(Er, { size: 16, color: "#64748b", style: { position: "absolute", left: "0.75rem", pointerEvents: "none" } }),
  /* @__PURE__ */ r.jsx(
    "input",
    {
      type: "text",
      value: n,
      onChange: (c) => s(c.target.value),
      placeholder: i,
      style: {
        width: "100%",
        padding: "0.45rem 2rem 0.45rem 2.25rem",
        borderRadius: "6px",
        border: "1.5px solid #cbd5e1",
        fontSize: "0.85rem",
        color: "#0f172a",
        outline: "none"
      }
    }
  ),
  n && /* @__PURE__ */ r.jsx(
    "button",
    {
      type: "button",
      onClick: () => {
        s(""), a && a();
      },
      style: { position: "absolute", right: "0.6rem", background: "none", border: "none", cursor: "pointer", color: "#94a3b8" },
      children: /* @__PURE__ */ r.jsx(Z, { size: 14 })
    }
  )
] }), Kr = ({ activeCount: n = 0, onClick: s, label: i = "Filter" }) => /* @__PURE__ */ r.jsxs(
  "button",
  {
    type: "button",
    onClick: s,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.45rem 0.85rem",
      borderRadius: "6px",
      background: n > 0 ? "#e5f3f7" : "#ffffff",
      border: `1.5px solid ${n > 0 ? "#02658b" : "#cbd5e1"}`,
      color: n > 0 ? "#02658b" : "#0f172a",
      fontSize: "0.85rem",
      fontWeight: 600,
      cursor: "pointer"
    },
    children: [
      /* @__PURE__ */ r.jsx(_r, { size: 15, color: n > 0 ? "#02658b" : "#64748b" }),
      /* @__PURE__ */ r.jsx("span", { children: i }),
      n > 0 && /* @__PURE__ */ r.jsx(
        "span",
        {
          style: {
            background: "#02658b",
            color: "#ffffff",
            fontSize: "0.7rem",
            fontWeight: 700,
            borderRadius: "50%",
            width: "18px",
            height: "18px",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            marginLeft: "0.2rem"
          },
          children: n
        }
      )
    ]
  }
), Gr = ({
  value: n = "",
  onChange: s,
  maxLength: i = 11,
  placeholder: a = "03001234567",
  disabled: c = !1,
  error: l = "",
  label: f = "Phone Number"
}) => {
  const b = (m) => {
    const h = m.target.value.replace(/\D/g, "").slice(0, i);
    s(h);
  };
  return /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.35rem", width: "100%" }, children: [
    f && /* @__PURE__ */ r.jsx("label", { style: { fontSize: "0.82rem", fontWeight: 600, color: "#334155" }, children: f }),
    /* @__PURE__ */ r.jsxs("div", { style: { position: "relative", display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "tel",
          value: n,
          onChange: b,
          maxLength: i,
          placeholder: a,
          disabled: c,
          style: {
            width: "100%",
            padding: "0.45rem 3rem 0.45rem 0.75rem",
            borderRadius: "6px",
            border: `1.5px solid ${l ? "#ef4444" : "#cbd5e1"}`,
            fontSize: "0.85rem",
            color: "#0f172a",
            outline: "none"
          }
        }
      ),
      /* @__PURE__ */ r.jsxs(
        "span",
        {
          style: {
            position: "absolute",
            right: "0.75rem",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: n.length >= i ? "#02658b" : "#94a3b8"
          },
          children: [
            n.length,
            "/",
            i
          ]
        }
      )
    ] }),
    l && /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.75rem", color: "#ef4444" }, children: l })
  ] });
}, Xr = ({
  label: n,
  value: s,
  onChange: i,
  options: a = [],
  // [{ label: 'Option 1', value: '1' }]
  disabled: c = !1,
  error: l = "",
  placeholder: f = "Select option..."
}) => /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.35rem", width: "100%" }, children: [
  n && /* @__PURE__ */ r.jsx("label", { style: { fontSize: "0.82rem", fontWeight: 600, color: "#334155" }, children: n }),
  /* @__PURE__ */ r.jsxs(
    "select",
    {
      value: s,
      onChange: (b) => i(b.target.value),
      disabled: c,
      style: {
        width: "100%",
        padding: "0.48rem 0.75rem",
        borderRadius: "6px",
        border: `1.5px solid ${l ? "#ef4444" : "#cbd5e1"}`,
        fontSize: "0.85rem",
        color: "#0f172a",
        backgroundColor: "#ffffff",
        outline: "none"
      },
      children: [
        f && /* @__PURE__ */ r.jsx("option", { value: "", children: f }),
        a.map((b, m) => /* @__PURE__ */ r.jsx("option", { value: typeof b == "object" ? b.value : b, children: typeof b == "object" ? b.label : b }, m))
      ]
    }
  ),
  l && /* @__PURE__ */ r.jsx("span", { style: { fontSize: "0.75rem", color: "#ef4444" }, children: l })
] }), Hr = ({
  isOpen: n,
  title: s = "User Form",
  onClose: i,
  onSubmit: a,
  children: c,
  submitText: l = "Save Changes",
  loading: f = !1
}) => n ? /* @__PURE__ */ r.jsx(
  "div",
  {
    style: {
      position: "fixed",
      inset: 0,
      backgroundColor: "rgba(15, 23, 42, 0.45)",
      backdropFilter: "blur(4px)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      zIndex: 1e4
    },
    children: /* @__PURE__ */ r.jsxs(
      "div",
      {
        style: {
          width: "100%",
          maxWidth: "480px",
          background: "#ffffff",
          border: "1.5px solid #cbd5e1",
          borderRadius: "0.75rem",
          padding: "1.5rem",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.15)"
        },
        onClick: (b) => b.stopPropagation(),
        children: [
          /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.75rem" }, children: [
            /* @__PURE__ */ r.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: s }),
            /* @__PURE__ */ r.jsx("button", { type: "button", onClick: i, style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" }, children: /* @__PURE__ */ r.jsx(Z, { size: 20 }) })
          ] }),
          /* @__PURE__ */ r.jsxs("form", { onSubmit: a, children: [
            /* @__PURE__ */ r.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }, children: c }),
            /* @__PURE__ */ r.jsxs("div", { style: { display: "flex", gap: "0.75rem", justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  type: "button",
                  onClick: i,
                  disabled: f,
                  style: {
                    padding: "0.48rem 1rem",
                    borderRadius: "6px",
                    background: "#ffffff",
                    border: "1.5px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer"
                  },
                  children: "Cancel"
                }
              ),
              /* @__PURE__ */ r.jsx(
                "button",
                {
                  type: "submit",
                  disabled: f,
                  style: {
                    padding: "0.48rem 1.25rem",
                    borderRadius: "6px",
                    background: "#02658b",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: "pointer"
                  },
                  children: f ? "Saving..." : l
                }
              )
            ] })
          ] })
        ]
      }
    )
  }
) : null, Zr = ({ title: n = "Sign In", subtitle: s = "Welcome back! Please enter your credentials.", logo: i, onSubmit: a, children: c, loading: l }) => /* @__PURE__ */ r.jsxs(
  "div",
  {
    style: {
      width: "100%",
      maxWidth: "400px",
      margin: "0 auto",
      background: "#ffffff",
      border: "1.5px solid #cbd5e1",
      borderRadius: "0.85rem",
      padding: "2rem",
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.08)"
    },
    children: [
      /* @__PURE__ */ r.jsxs("div", { style: { textAlign: "center", marginBottom: "1.5rem" }, children: [
        i && /* @__PURE__ */ r.jsx("div", { style: { marginBottom: "0.75rem" }, children: i }),
        /* @__PURE__ */ r.jsx("h2", { style: { margin: 0, fontSize: "1.4rem", fontWeight: 800, color: "#0f172a" }, children: n }),
        s && /* @__PURE__ */ r.jsx("p", { style: { margin: "0.35rem 0 0 0", fontSize: "0.85rem", color: "#64748b" }, children: s })
      ] }),
      /* @__PURE__ */ r.jsxs("form", { onSubmit: a, children: [
        /* @__PURE__ */ r.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "1.1rem", marginBottom: "1.5rem" }, children: c }),
        /* @__PURE__ */ r.jsx(
          "button",
          {
            type: "submit",
            disabled: l,
            style: {
              width: "100%",
              padding: "0.65rem",
              borderRadius: "6px",
              background: "#02658b",
              color: "#ffffff",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: l ? "not-allowed" : "pointer",
              opacity: l ? 0.6 : 1
            },
            children: l ? "Authenticating..." : "Sign In"
          }
        )
      ] })
    ]
  }
);
export {
  $r as AlertDialog,
  Jr as Button,
  Ar as CounterCard,
  Br as CustomLoader,
  Vr as DataGrid,
  Kr as FilterButton,
  Xr as FormSelect,
  Zr as LoginForm,
  Nr as Pagination,
  Gr as PhoneInput,
  Ur as ProfileDropdown,
  qr as SearchBar,
  Pr as SeverityPill,
  Dr as StatCard,
  Ir as StatusPill,
  Mr as UpdateDialog,
  Lr as UpdateProgressBar,
  Fr as UserDetailsCard,
  Hr as UserDialogModal,
  Yr as VersionBadge
};
