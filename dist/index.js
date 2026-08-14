import Ye, { useState as R, useRef as de, useEffect as ce } from "react";
import { ShieldCheck as fe, ShieldAlert as vr, Mail as jr, Phone as wr, Loader2 as Se, AlertTriangle as Le, X as J, Trash2 as kr, Download as je, CheckCircle2 as Sr, RefreshCw as Rr, Menu as Cr, User as Fr, LogOut as Ge, Users as zr, ChevronDown as Ir, Settings as Er, Search as _r, SlidersHorizontal as Wr, Filter as Tr } from "lucide-react";
import { createPortal as we } from "react-dom";
var ke = { exports: {} }, Q = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ve;
function Pr() {
  if (Ve) return Q;
  Ve = 1;
  var t = Ye, o = Symbol.for("react.element"), l = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, d = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(u, m, a) {
    var b, j = {}, C = null, F = null;
    a !== void 0 && (C = "" + a), m.key !== void 0 && (C = "" + m.key), m.ref !== void 0 && (F = m.ref);
    for (b in m) s.call(m, b) && !d.hasOwnProperty(b) && (j[b] = m[b]);
    if (u && u.defaultProps) for (b in m = u.defaultProps, m) j[b] === void 0 && (j[b] = m[b]);
    return { $$typeof: o, type: u, key: C, ref: F, props: j, _owner: f.current };
  }
  return Q.Fragment = l, Q.jsx = c, Q.jsxs = c, Q;
}
var ee = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Ar() {
  return Me || (Me = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ye, o = Symbol.for("react.element"), l = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), d = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), u = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), a = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), j = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), F = Symbol.for("react.offscreen"), P = Symbol.iterator, N = "@@iterator";
    function q(r) {
      if (r === null || typeof r != "object")
        return null;
      var n = P && r[P] || r[N];
      return typeof n == "function" ? n : null;
    }
    var _ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(r) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), p = 1; p < n; p++)
          i[p - 1] = arguments[p];
        D("error", r, i);
      }
    }
    function D(r, n, i) {
      {
        var p = _.ReactDebugCurrentFrame, y = p.getStackAddendum();
        y !== "" && (n += "%s", i = i.concat([y]));
        var v = i.map(function(h) {
          return String(h);
        });
        v.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, v);
      }
    }
    var Y = !1, re = !1, ne = !1, K = !1, X = !1, W;
    W = Symbol.for("react.module.reference");
    function U(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === s || r === d || X || r === f || r === a || r === b || K || r === F || Y || re || ne || typeof r == "object" && r !== null && (r.$$typeof === C || r.$$typeof === j || r.$$typeof === c || r.$$typeof === u || r.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === W || r.getModuleId !== void 0));
    }
    function ue(r, n, i) {
      var p = r.displayName;
      if (p)
        return p;
      var y = n.displayName || n.name || "";
      return y !== "" ? i + "(" + y + ")" : i;
    }
    function $(r) {
      return r.displayName || "Context";
    }
    function O(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case s:
          return "Fragment";
        case l:
          return "Portal";
        case d:
          return "Profiler";
        case f:
          return "StrictMode";
        case a:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case u:
            var n = r;
            return $(n) + ".Consumer";
          case c:
            var i = r;
            return $(i._context) + ".Provider";
          case m:
            return ue(r, r.render, "ForwardRef");
          case j:
            var p = r.displayName || null;
            return p !== null ? p : O(r.type) || "Memo";
          case C: {
            var y = r, v = y._payload, h = y._init;
            try {
              return O(h(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, z = 0, L, te, oe, V, g, B, Re;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function He() {
      {
        if (z === 0) {
          L = console.log, te = console.info, oe = console.warn, V = console.error, g = console.group, B = console.groupCollapsed, Re = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: Ce,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        z++;
      }
    }
    function Je() {
      {
        if (z--, z === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, r, {
              value: L
            }),
            info: A({}, r, {
              value: te
            }),
            warn: A({}, r, {
              value: oe
            }),
            error: A({}, r, {
              value: V
            }),
            group: A({}, r, {
              value: g
            }),
            groupCollapsed: A({}, r, {
              value: B
            }),
            groupEnd: A({}, r, {
              value: Re
            })
          });
        }
        z < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = _.ReactCurrentDispatcher, me;
    function ie(r, n, i) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (y) {
            var p = y.stack.trim().match(/\n( *(at )?)/);
            me = p && p[1] || "";
          }
        return `
` + me + r;
      }
    }
    var ge = !1, se;
    {
      var qe = typeof WeakMap == "function" ? WeakMap : Map;
      se = new qe();
    }
    function Fe(r, n) {
      if (!r || ge)
        return "";
      {
        var i = se.get(r);
        if (i !== void 0)
          return i;
      }
      var p;
      ge = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = pe.current, pe.current = null, He();
      try {
        if (n) {
          var h = function() {
            throw Error();
          };
          if (Object.defineProperty(h.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(h, []);
            } catch (E) {
              p = E;
            }
            Reflect.construct(r, [], h);
          } else {
            try {
              h.call();
            } catch (E) {
              p = E;
            }
            r.call(h.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            p = E;
          }
          r();
        }
      } catch (E) {
        if (E && p && typeof E.stack == "string") {
          for (var x = E.stack.split(`
`), I = p.stack.split(`
`), w = x.length - 1, k = I.length - 1; w >= 1 && k >= 0 && x[w] !== I[k]; )
            k--;
          for (; w >= 1 && k >= 0; w--, k--)
            if (x[w] !== I[k]) {
              if (w !== 1 || k !== 1)
                do
                  if (w--, k--, k < 0 || x[w] !== I[k]) {
                    var T = `
` + x[w].replace(" at new ", " at ");
                    return r.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", r.displayName)), typeof r == "function" && se.set(r, T), T;
                  }
                while (w >= 1 && k >= 0);
              break;
            }
        }
      } finally {
        ge = !1, pe.current = v, Je(), Error.prepareStackTrace = y;
      }
      var H = r ? r.displayName || r.name : "", M = H ? ie(H) : "";
      return typeof r == "function" && se.set(r, M), M;
    }
    function Ke(r, n, i) {
      return Fe(r, !1);
    }
    function Xe(r) {
      var n = r.prototype;
      return !!(n && n.isReactComponent);
    }
    function le(r, n, i) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Fe(r, Xe(r));
      if (typeof r == "string")
        return ie(r);
      switch (r) {
        case a:
          return ie("Suspense");
        case b:
          return ie("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            return Ke(r.render);
          case j:
            return le(r.type, n, i);
          case C: {
            var p = r, y = p._payload, v = p._init;
            try {
              return le(v(y), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, ze = {}, Ie = _.ReactDebugCurrentFrame;
    function ae(r) {
      if (r) {
        var n = r._owner, i = le(r.type, r._source, n ? n.type : null);
        Ie.setExtraStackFrame(i);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Ze(r, n, i, p, y) {
      {
        var v = Function.call.bind(Z);
        for (var h in r)
          if (v(r, h)) {
            var x = void 0;
            try {
              if (typeof r[h] != "function") {
                var I = Error((p || "React class") + ": " + i + " type `" + h + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[h] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              x = r[h](n, h, p, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (w) {
              x = w;
            }
            x && !(x instanceof Error) && (ae(y), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", i, h, typeof x), ae(null)), x instanceof Error && !(x.message in ze) && (ze[x.message] = !0, ae(y), S("Failed %s type: %s", i, x.message), ae(null));
          }
      }
    }
    var Qe = Array.isArray;
    function be(r) {
      return Qe(r);
    }
    function er(r) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return i;
      }
    }
    function rr(r) {
      try {
        return Ee(r), !1;
      } catch {
        return !0;
      }
    }
    function Ee(r) {
      return "" + r;
    }
    function _e(r) {
      if (rr(r))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", er(r)), Ee(r);
    }
    var We = _.ReactCurrentOwner, nr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Pe;
    function tr(r) {
      if (Z.call(r, "ref")) {
        var n = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function or(r) {
      if (Z.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function ir(r, n) {
      typeof r.ref == "string" && We.current;
    }
    function sr(r, n) {
      {
        var i = function() {
          Te || (Te = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function lr(r, n) {
      {
        var i = function() {
          Pe || (Pe = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var ar = function(r, n, i, p, y, v, h) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: r,
        key: n,
        ref: i,
        props: h,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function dr(r, n, i, p, y) {
      {
        var v, h = {}, x = null, I = null;
        i !== void 0 && (_e(i), x = "" + i), or(n) && (_e(n.key), x = "" + n.key), tr(n) && (I = n.ref, ir(n, y));
        for (v in n)
          Z.call(n, v) && !nr.hasOwnProperty(v) && (h[v] = n[v]);
        if (r && r.defaultProps) {
          var w = r.defaultProps;
          for (v in w)
            h[v] === void 0 && (h[v] = w[v]);
        }
        if (x || I) {
          var k = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          x && sr(h, k), I && lr(h, k);
        }
        return ar(r, x, I, y, p, We.current, h);
      }
    }
    var xe = _.ReactCurrentOwner, Ae = _.ReactDebugCurrentFrame;
    function G(r) {
      if (r) {
        var n = r._owner, i = le(r.type, r._source, n ? n.type : null);
        Ae.setExtraStackFrame(i);
      } else
        Ae.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function ye(r) {
      return typeof r == "object" && r !== null && r.$$typeof === o;
    }
    function Oe() {
      {
        if (xe.current) {
          var r = O(xe.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function cr(r) {
      return "";
    }
    var De = {};
    function fr(r) {
      {
        var n = Oe();
        if (!n) {
          var i = typeof r == "string" ? r : r.displayName || r.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function Ue(r, n) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var i = fr(n);
        if (De[i])
          return;
        De[i] = !0;
        var p = "";
        r && r._owner && r._owner !== xe.current && (p = " It was passed a child from " + O(r._owner.type) + "."), G(r), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, p), G(null);
      }
    }
    function Be(r, n) {
      {
        if (typeof r != "object")
          return;
        if (be(r))
          for (var i = 0; i < r.length; i++) {
            var p = r[i];
            ye(p) && Ue(p, n);
          }
        else if (ye(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var y = q(r);
          if (typeof y == "function" && y !== r.entries)
            for (var v = y.call(r), h; !(h = v.next()).done; )
              ye(h.value) && Ue(h.value, n);
        }
      }
    }
    function ur(r) {
      {
        var n = r.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === j))
          i = n.propTypes;
        else
          return;
        if (i) {
          var p = O(n);
          Ze(i, r.props, "prop", p, r);
        } else if (n.PropTypes !== void 0 && !he) {
          he = !0;
          var y = O(n);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function pr(r) {
      {
        for (var n = Object.keys(r.props), i = 0; i < n.length; i++) {
          var p = n[i];
          if (p !== "children" && p !== "key") {
            G(r), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), G(null);
            break;
          }
        }
        r.ref !== null && (G(r), S("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    var Ne = {};
    function $e(r, n, i, p, y, v) {
      {
        var h = U(r);
        if (!h) {
          var x = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = cr();
          I ? x += I : x += Oe();
          var w;
          r === null ? w = "null" : be(r) ? w = "array" : r !== void 0 && r.$$typeof === o ? (w = "<" + (O(r.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : w = typeof r, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", w, x);
        }
        var k = dr(r, n, i, y, v);
        if (k == null)
          return k;
        if (h) {
          var T = n.children;
          if (T !== void 0)
            if (p)
              if (be(T)) {
                for (var H = 0; H < T.length; H++)
                  Be(T[H], r);
                Object.freeze && Object.freeze(T);
              } else
                S("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(T, r);
        }
        if (Z.call(n, "key")) {
          var M = O(r), E = Object.keys(n).filter(function(yr) {
            return yr !== "key";
          }), ve = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[M + ve]) {
            var hr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, M, hr, M), Ne[M + ve] = !0;
          }
        }
        return r === s ? pr(k) : ur(k), k;
      }
    }
    function mr(r, n, i) {
      return $e(r, n, i, !0);
    }
    function gr(r, n, i) {
      return $e(r, n, i, !1);
    }
    var br = gr, xr = mr;
    ee.Fragment = s, ee.jsx = br, ee.jsxs = xr;
  }()), ee;
}
process.env.NODE_ENV === "production" ? ke.exports = Pr() : ke.exports = Ar();
var e = ke.exports;
const $r = ({ status: t, customLabel: o }) => {
  const l = (t || "").toLowerCase().replace(/[\s_-]+/g, "");
  let s = {
    color: "#0f172a",
    bg: "#f1f5f9",
    border: "#cbd5e1",
    label: o || t || "Unknown"
  };
  return ["pending", "unregistered"].includes(l) ? s = {
    color: "#991b1b",
    bg: "#fef2f2",
    border: "#fca5a5",
    label: o || (l === "pending" ? "Pending" : "Unregistered")
  } : ["completed", "registered"].includes(l) ? s = {
    color: "#065f46",
    bg: "#d1fae5",
    border: "#a7f3d0",
    label: o || (l === "completed" ? "Completed" : "Registered")
  } : ["inconsultation", "consultation"].includes(l) && (s = {
    color: "#9a3412",
    bg: "#ffedd5",
    border: "#fed7aa",
    label: o || "In Consultation"
  }), /* @__PURE__ */ e.jsxs(
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
        color: s.color,
        backgroundColor: s.bg,
        border: `1px solid ${s.border}`,
        whiteSpace: "nowrap"
      },
      children: [
        /* @__PURE__ */ e.jsx(
          "span",
          {
            style: {
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              backgroundColor: s.color
            }
          }
        ),
        s.label
      ]
    }
  );
}, Vr = ({ severity: t }) => {
  const o = (t || "").toLowerCase();
  let l = {
    color: "#065f46",
    bg: "#d1fae5",
    border: "#a7f3d0",
    label: "Minor"
  };
  return o === "moderate" ? l = {
    color: "#014d6b",
    bg: "#e5f3f7",
    border: "#bae6fd",
    label: "Moderate"
  } : (o === "major" || o === "critical") && (l = {
    color: "#991b1b",
    bg: "#fef2f2",
    border: "#fca5a5",
    label: o === "critical" ? "Critical" : "Major"
  }), /* @__PURE__ */ e.jsx(
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
        color: l.color,
        backgroundColor: l.bg,
        border: `1px solid ${l.border}`
      },
      children: l.label
    }
  );
}, Mr = ({ permissions: t = [], isSuperAdmin: o = !1 }) => o ? /* @__PURE__ */ e.jsxs("div", { style: { display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.75rem", background: "#d1fae5", border: "1px solid #a7f3d0", borderRadius: "20px", color: "#065f46", fontSize: "0.78rem", fontWeight: 700 }, children: [
  /* @__PURE__ */ e.jsx(fe, { size: 16 }),
  /* @__PURE__ */ e.jsx("span", { children: "Super Admin (Full Access)" })
] }) : /* @__PURE__ */ e.jsxs("div", { style: { display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.75rem", background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "20px", color: "#475569", fontSize: "0.78rem", fontWeight: 600 }, children: [
  /* @__PURE__ */ e.jsx(vr, { size: 16, color: "#64748b" }),
  /* @__PURE__ */ e.jsxs("span", { children: [
    t.length,
    " Custom Permissions Active"
  ] })
] }), Yr = ({ title: t, value: o, icon: l, trend: s, trendLabel: f, accentColor: d = "#02658b" }) => /* @__PURE__ */ e.jsxs(
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
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.85rem", fontWeight: 600, color: "#64748b" }, children: t }),
        l && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              padding: "0.5rem",
              borderRadius: "0.5rem",
              backgroundColor: `${d}15`,
              color: d,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ e.jsx(l, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { style: { fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }, children: o }),
      s && /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "0.75rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }, children: [
        /* @__PURE__ */ e.jsx("span", { style: { color: s.startsWith("+") ? "#10b981" : "#ef4444" }, children: s }),
        f && /* @__PURE__ */ e.jsx("span", { style: { color: "#64748b" }, children: f })
      ] })
    ]
  }
), Lr = ({ label: t, count: o, badgeColor: l = "#02658b" }) => /* @__PURE__ */ e.jsxs(
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
      /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.85rem", fontWeight: 600, color: "#334155" }, children: t }),
      /* @__PURE__ */ e.jsx(
        "span",
        {
          style: {
            background: l,
            color: "#ffffff",
            fontWeight: 700,
            fontSize: "0.85rem",
            padding: "0.2rem 0.65rem",
            borderRadius: "9999px"
          },
          children: o
        }
      )
    ]
  }
), Gr = ({ name: t, email: o, phone: l, role: s, status: f, avatarUrl: d, actions: c }) => /* @__PURE__ */ e.jsxs(
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
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }, children: [
        d ? /* @__PURE__ */ e.jsx(
          "img",
          {
            src: d,
            alt: t,
            style: { width: "48px", height: "48px", borderRadius: "50%", objectFit: "cover" }
          }
        ) : /* @__PURE__ */ e.jsx(
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
            children: (t || "U").charAt(0).toUpperCase()
          }
        ),
        /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsx("h4", { style: { margin: 0, fontSize: "1rem", fontWeight: 700, color: "#0f172a" }, children: t }),
          s && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.75rem", color: "#02658b", fontWeight: 600 }, children: s })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.82rem", color: "#475569" }, children: [
        o && /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.4rem" }, children: [
          /* @__PURE__ */ e.jsx(jr, { size: 14, color: "#64748b" }),
          /* @__PURE__ */ e.jsx("span", { children: o })
        ] }),
        l && /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.4rem" }, children: [
          /* @__PURE__ */ e.jsx(wr, { size: 14, color: "#64748b" }),
          /* @__PURE__ */ e.jsx("span", { children: l })
        ] })
      ] }),
      c && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid #f1f5f9", display: "flex", gap: "0.5rem" }, children: c })
    ]
  }
), Hr = ({ message: t = "Loading...", fullPage: o = !1, size: l = 28 }) => {
  const s = /* @__PURE__ */ e.jsxs(
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
        /* @__PURE__ */ e.jsx(Se, { size: l, color: "#02658b", className: "orion-spin" }),
        t && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.88rem", fontWeight: 600, color: "#475569" }, children: t })
      ]
    }
  );
  return o ? /* @__PURE__ */ e.jsx(
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
      children: s
    }
  ) : s;
}, Or = ({
  isOpen: t,
  title: o = "Confirm Action",
  subtitle: l = "Permanent Action",
  message: s,
  confirmText: f = "Confirm",
  cancelText: d = "Cancel",
  confirmVariant: c = "danger",
  loading: u = !1,
  error: m = null,
  onConfirm: a,
  onCancel: b
}) => {
  if (!t) return null;
  const j = c === "danger", C = j ? "#9f1239" : "#02658b", F = j ? "#ffe4e6" : "#e5f3f7", P = j ? "#9f1239" : "#02658b";
  return we(/* @__PURE__ */ e.jsx(
    "div",
    {
      className: "confirm-modal-portal",
      style: {
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(15, 23, 42, 0.5)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1e4,
        padding: "1rem"
      },
      onClick: b,
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          style: {
            background: "#FFFFFF",
            borderRadius: "0.75rem",
            border: "1.5px solid #cbd5e1",
            width: "100%",
            maxWidth: "420px",
            padding: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.15)"
          },
          onClick: (q) => q.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "flex-start" }, children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
                /* @__PURE__ */ e.jsx(
                  "div",
                  {
                    style: {
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                      background: F,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: C,
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ e.jsx(Le, { size: 22 })
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: o }),
                  l && /* @__PURE__ */ e.jsx("p", { style: { margin: "0.15rem 0 0 0", fontSize: "0.8rem", color: "#64748b" }, children: l })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: b,
                  disabled: u,
                  style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" },
                  children: /* @__PURE__ */ e.jsx(J, { size: 18 })
                }
              )
            ] }),
            m && /* @__PURE__ */ e.jsx("div", { style: { background: "#ffe4e6", border: "1px solid #fecdd3", color: "#9f1239", padding: "0.65rem", borderRadius: "0.375rem", fontSize: "0.82rem" }, children: m }),
            /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.9rem", color: "#334155", lineHeight: 1.5 }, children: s }),
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", gap: "0.65rem", marginTop: "0.5rem" }, children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: b,
                  disabled: u,
                  style: {
                    background: "#f1f5f9",
                    border: "1.5px solid #cbd5e1",
                    color: "#475569",
                    padding: "0.5rem 1rem",
                    borderRadius: "0.375rem",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.85rem"
                  },
                  children: d
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: a,
                  disabled: u,
                  style: {
                    background: P,
                    border: "none",
                    color: "#FFFFFF",
                    padding: "0.5rem 1.15rem",
                    borderRadius: "0.375rem",
                    cursor: "pointer",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: "0.4rem"
                  },
                  children: [
                    j && /* @__PURE__ */ e.jsx(kr, { size: 16 }),
                    /* @__PURE__ */ e.jsx("span", { children: u ? "Processing..." : f })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  ), document.body);
}, Jr = Or, Dr = ({
  position: t = "inline",
  onUpdateStatusChange: o,
  checkUpdateApi: l = typeof window < "u" ? window.checkUpdateApi : null,
  startDownloadApi: s = typeof window < "u" ? window.startDownloadApi : null,
  fetchDownloadProgressApi: f = typeof window < "u" ? window.fetchDownloadProgressApi : null
}) => {
  const [d, c] = R("0.5.0"), [u, m] = R("0.5.0"), [a, b] = R(!1), [j, C] = R(""), [F, P] = R(""), [N, q] = R(""), [_, S] = R(!1), [D, Y] = R(!1), [re, ne] = R(""), [K, X] = R(0), [W, U] = R("idle"), [ue, $] = R(""), [O, A] = R(!1), z = de(null), L = async () => {
    S(!0);
    try {
      if (typeof l == "function") {
        const g = await l();
        if (g && g.success) {
          g.currentVersion && c(g.currentVersion), g.latestVersion && m(g.latestVersion);
          const B = !!g.updateAvailable;
          b(B), o && o(B), g.releaseNotes && C(g.releaseNotes), g.releaseUrl && P(g.releaseUrl), g.downloadUrl && q(g.downloadUrl);
        }
      }
    } catch (g) {
      console.warn("Update check warning:", g);
    } finally {
      S(!1);
    }
  };
  ce(() => {
    L();
    const g = 60 * 60 * 1e3, B = setInterval(() => {
      L();
    }, g);
    return () => {
      clearInterval(B), z.current && clearInterval(z.current);
    };
  }, []);
  const te = () => {
    z.current && clearInterval(z.current), z.current = setInterval(async () => {
      try {
        if (typeof f == "function") {
          const g = await f();
          g && g.success && (g.progress !== void 0 && X(g.progress), g.status === "downloading" ? U("downloading") : g.status === "done" ? (U("done"), X(100), ne("Download complete! Installing update & restarting app..."), clearInterval(z.current), z.current = null, setTimeout(() => {
            try {
              window.close();
            } catch {
            }
          }, 1800)) : g.status === "error" && (U("error"), $(g.error || "Failed to download update file."), Y(!1), clearInterval(z.current), z.current = null));
        }
      } catch (g) {
        console.error("Progress polling error:", g);
      }
    }, 500);
  }, oe = async () => {
    Y(!0), U("downloading"), X(0), $(""), ne("Starting update download...");
    try {
      if (typeof s == "function") {
        const g = await s();
        g && g.success ? te() : ((N || F) && window.open(N || F, "_blank"), U("error"), $((g == null ? void 0 : g.error) || "Could not initiate in-app update."), Y(!1));
      }
    } catch {
      (N || F) && window.open(N || F, "_blank"), U("error"), $("In-app download failed. Opening browser download page..."), Y(!1);
    }
  }, V = O ? /* @__PURE__ */ e.jsx(
    "div",
    {
      className: "version-update-modal-portal",
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
      children: /* @__PURE__ */ e.jsxs(
        "div",
        {
          style: {
            width: "100%",
            maxWidth: "450px",
            background: "#ffffff",
            border: "1.5px solid #cbd5e1",
            borderRadius: "0.75rem",
            padding: "1.5rem",
            boxShadow: "0 20px 25px -5px rgba(0,0,0,0.15)",
            color: "#0f172a"
          },
          onClick: (g) => g.stopPropagation(),
          children: [
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.75rem" }, children: [
              /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
                a ? /* @__PURE__ */ e.jsx(je, { size: 22, color: "#02658b" }) : /* @__PURE__ */ e.jsx(Sr, { size: 22, color: "#10b981" }),
                /* @__PURE__ */ e.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: a ? "Software Update Available" : "System Up to Date" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => A(!1),
                  style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" },
                  children: /* @__PURE__ */ e.jsx(J, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "1.25rem" }, children: [
              a ? /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }, children: [
                  /* @__PURE__ */ e.jsxs("div", { style: { background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: "8px", padding: "0.85rem", textAlign: "center" }, children: [
                    /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Current Version" }),
                    /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "1.15rem", fontWeight: 700, color: "#0f172a" }, children: [
                      "v",
                      d
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { background: "#e5f3f7", border: "1.5px solid #02658b", borderRadius: "8px", padding: "0.85rem", textAlign: "center" }, children: [
                    /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#02658b", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Update Version" }),
                    /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "1.15rem", fontWeight: 700, color: "#02658b" }, children: [
                      "v",
                      u
                    ] })
                  ] })
                ] }),
                (W === "downloading" || W === "done") && /* @__PURE__ */ e.jsxs("div", { style: { background: "#f8fafc", border: "1px solid #cbd5e1", padding: "0.85rem", borderRadius: "8px", marginBottom: "1rem" }, children: [
                  /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem", fontSize: "0.82rem", fontWeight: 600, color: "#0f172a" }, children: [
                    /* @__PURE__ */ e.jsx("span", { children: W === "done" ? "Update Downloaded!" : "Downloading Update..." }),
                    /* @__PURE__ */ e.jsxs("span", { children: [
                      K,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsx("div", { style: { width: "100%", height: "10px", background: "#e2e8f0", borderRadius: "5px", overflow: "hidden", marginBottom: "0.4rem" }, children: /* @__PURE__ */ e.jsx(
                    "div",
                    {
                      style: {
                        width: `${K}%`,
                        height: "100%",
                        background: W === "done" ? "#10b981" : "#02658b",
                        transition: "width 0.3s ease"
                      }
                    }
                  ) }),
                  /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b" }, children: W === "done" ? "Installing update in background & restarting app..." : "Please keep the application open during download." })
                ] }),
                W === "error" && /* @__PURE__ */ e.jsxs("div", { style: { background: "#fef2f2", border: "1px solid #fca5a5", color: "#991b1b", padding: "0.75rem", borderRadius: "8px", fontSize: "0.8rem", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
                  /* @__PURE__ */ e.jsx(Le, { size: 18, style: { flexShrink: 0 } }),
                  /* @__PURE__ */ e.jsxs("div", { children: [
                    /* @__PURE__ */ e.jsx("strong", { children: "Download Failed:" }),
                    " ",
                    ue
                  ] })
                ] }),
                /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#065f46", background: "#d1fae5", padding: "0.5rem 0.75rem", borderRadius: "6px", marginBottom: "0.5rem" }, children: [
                  /* @__PURE__ */ e.jsx(fe, { size: 16 }),
                  /* @__PURE__ */ e.jsx("span", { children: "Your database (academy.db) & user data remain safe during update." })
                ] })
              ] }) : /* @__PURE__ */ e.jsx("div", { style: { textAlign: "center", padding: "1rem 0" }, children: /* @__PURE__ */ e.jsxs("p", { style: { margin: 0, fontSize: "0.95rem", color: "#475569", lineHeight: 1.6 }, children: [
                "You are using the latest version: ",
                /* @__PURE__ */ e.jsx("br", {}),
                /* @__PURE__ */ e.jsxs(
                  "span",
                  {
                    style: {
                      display: "inline-block",
                      marginTop: "0.6rem",
                      padding: "0.4rem 0.9rem",
                      background: "#f8fafc",
                      color: "#02658b",
                      border: "1.5px solid #cbd5e1",
                      borderRadius: "8px",
                      fontWeight: 700,
                      fontSize: "1.05rem"
                    },
                    children: [
                      "v",
                      d
                    ]
                  }
                )
              ] }) }),
              re && W !== "downloading" && /* @__PURE__ */ e.jsx("div", { style: { background: "#d1fae5", border: "1px solid #a7f3d0", color: "#065f46", padding: "0.65rem", borderRadius: "8px", fontSize: "0.8rem", marginTop: "0.75rem" }, children: re })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "0.75rem", justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: L,
                  disabled: _ || D,
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 0.85rem",
                    borderRadius: "6px",
                    background: "#ffffff",
                    border: "1.5px solid #cbd5e1",
                    color: "#0f172a",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: _ || D ? "not-allowed" : "pointer",
                    opacity: _ || D ? 0.6 : 1
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(Rr, { size: 14, className: _ ? "spin" : "" }),
                    /* @__PURE__ */ e.jsx("span", { children: _ ? "Checking..." : "Check Again" })
                  ]
                }
              ),
              a && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: oe,
                  disabled: D,
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 1.1rem",
                    borderRadius: "6px",
                    background: D ? "#64748b" : "#02658b",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: D ? "not-allowed" : "pointer"
                  },
                  children: [
                    D ? /* @__PURE__ */ e.jsx(Se, { size: 16, className: "spin" }) : /* @__PURE__ */ e.jsx(je, { size: 16 }),
                    /* @__PURE__ */ e.jsx("span", { children: W === "downloading" ? `Downloading (${K}%)` : W === "done" ? "Restarting App..." : "Update Now" })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  ) : null;
  return t === "top-left" ? /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsx("div", { style: { position: "fixed", top: "1.25rem", left: "1.25rem", zIndex: 999 }, children: /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => A(!0),
        style: {
          position: "relative",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          padding: "0.45rem 0.9rem",
          background: "#ffffff",
          color: "#0f172a",
          border: "1.5px solid #cbd5e1",
          borderRadius: "24px",
          fontSize: "0.85rem",
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
          transition: "all 0.2s ease"
        },
        title: "Click to check for updates",
        children: [
          /* @__PURE__ */ e.jsxs("span", { style: { color: "#02658b", fontWeight: 700 }, children: [
            "v",
            d
          ] }),
          a && /* @__PURE__ */ e.jsx(
            "span",
            {
              style: {
                position: "absolute",
                top: "-3px",
                right: "-3px",
                width: "10px",
                height: "10px",
                backgroundColor: "#ef4444",
                borderRadius: "50%",
                boxShadow: "0 0 6px #ef4444"
              }
            }
          )
        ]
      }
    ) }),
    V && we(V, document.body)
  ] }) : /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => A(!0),
        style: {
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "0.5rem 0.75rem",
          background: "#f8fafc",
          color: "#0f172a",
          border: "1px solid #cbd5e1",
          borderRadius: "0.375rem",
          fontSize: "0.8rem",
          fontWeight: 600,
          cursor: "pointer",
          transition: "all 0.15s ease"
        },
        title: "Click to check for updates",
        children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.4rem" }, children: [
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.72rem", color: "#64748b", textTransform: "uppercase", fontWeight: 700 }, children: "Version" }),
            /* @__PURE__ */ e.jsxs("span", { style: { color: "#02658b", fontWeight: 700 }, children: [
              "v",
              d
            ] })
          ] }),
          a ? /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.35rem" }, children: [
            /* @__PURE__ */ e.jsx(
              "span",
              {
                style: {
                  width: "8px",
                  height: "8px",
                  backgroundColor: "#ef4444",
                  borderRadius: "50%",
                  display: "inline-block",
                  boxShadow: "0 0 6px #ef4444"
                }
              }
            ),
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.7rem", color: "#ef4444", fontWeight: 700 }, children: "Update!" })
          ] }) : /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.7rem", color: "#10b981", fontWeight: 600 }, children: "Up to date" })
        ]
      }
    ),
    V && we(V, document.body)
  ] });
}, qr = ({ onToggleMobileMenu: t, user: o, onLogout: l }) => {
  var C;
  const [s, f] = R(!1), [d, c] = R(!1), [u, m] = R(!1), a = de(null), b = () => {
    c(!0), setTimeout(() => {
      f(!1), c(!1);
    }, 240);
  }, j = () => {
    s ? b() : (f(!0), c(!1));
  };
  return ce(() => {
    const F = (P) => {
      P.target && P.target.closest && P.target.closest(".version-update-modal-portal") || a.current && !a.current.contains(P.target) && s && !d && b();
    };
    return document.addEventListener("mousedown", F), () => document.removeEventListener("mousedown", F);
  }, [s, d]), /* @__PURE__ */ e.jsx(
    "header",
    {
      style: {
        background: "#FFFFFF",
        border: "1px solid #cbd5e1",
        borderRadius: "0.75rem",
        padding: "0.5rem 1.15rem",
        position: "sticky",
        top: "0.25rem",
        zIndex: 90
      },
      children: /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center" }, children: [
        /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.85rem" }, children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              className: "mobile-menu-btn",
              onClick: t,
              title: "Toggle Menu",
              style: {
                background: "none",
                border: "1px solid #cbd5e1",
                color: "#334155",
                padding: "0.4rem",
                borderRadius: "0.375rem",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /* @__PURE__ */ e.jsx(Cr, { size: 20 })
            }
          ),
          /* @__PURE__ */ e.jsx("h2", { style: { fontSize: "1rem", fontWeight: 600, color: "#0f172a", margin: 0 }, children: "Admin Portal" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { style: { display: "flex", alignItems: "center", gap: "0.85rem" }, children: o && /* @__PURE__ */ e.jsxs("div", { className: "profile-dropdown-wrapper", ref: a, style: { position: "relative" }, children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: j,
              title: "User Profile Menu",
              style: {
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.2rem",
                display: "flex",
                alignItems: "center",
                gap: "0.3rem",
                position: "relative"
              },
              children: /* @__PURE__ */ e.jsxs(
                "div",
                {
                  style: {
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    background: "#0f172a",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    position: "relative"
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(Fr, { size: 18 }),
                    u && /* @__PURE__ */ e.jsx(
                      "span",
                      {
                        style: {
                          position: "absolute",
                          top: "-2px",
                          right: "-2px",
                          width: "10px",
                          height: "10px",
                          backgroundColor: "#ef4444",
                          borderRadius: "50%",
                          border: "2px solid #ffffff",
                          boxShadow: "0 0 6px #ef4444"
                        }
                      }
                    )
                  ]
                }
              )
            }
          ),
          s && /* @__PURE__ */ e.jsxs(
            "div",
            {
              style: {
                position: "absolute",
                right: 0,
                top: "2.5rem",
                background: "#ffffff",
                border: "1px solid #cbd5e1",
                borderRadius: "0.5rem",
                boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
                padding: "0.85rem",
                minWidth: "220px",
                zIndex: 100,
                display: "flex",
                flexDirection: "column",
                gap: "0.65rem"
              },
              children: [
                /* @__PURE__ */ e.jsxs("div", { style: { paddingBottom: "0.5rem", borderBottom: "1px solid #cbd5e1" }, children: [
                  /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.9rem", fontWeight: 700, color: "#0f172a" }, children: o.username || "User" }),
                  /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b" }, children: ((C = o.roles) == null ? void 0 : C.join(", ")) || "User" })
                ] }),
                /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(Dr, { position: "inline", onUpdateStatusChange: m }) }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      b(), l && l();
                    },
                    style: {
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      background: "#ffe4e6",
                      border: "none",
                      color: "#9f1239",
                      padding: "0.5rem",
                      borderRadius: "0.375rem",
                      fontWeight: 600,
                      fontSize: "0.85rem",
                      cursor: "pointer"
                    },
                    children: [
                      /* @__PURE__ */ e.jsx(Ge, { size: 16 }),
                      /* @__PURE__ */ e.jsx("span", { children: "Sign Out" })
                    ]
                  }
                )
              ]
            }
          )
        ] }) })
      ] })
    }
  );
}, Kr = ({ isMobileOpen: t, closeMobile: o, user: l, isSuperAdmin: s, activePath: f = "/admin/users", LinkComponent: d }) => {
  const c = {
    brandName: "Academia Platform",
    primaryColor: "#02658b",
    sidebarBg: "#ffffff"
  }, u = (m, a, b) => {
    const j = f === m, C = {
      display: "flex",
      alignItems: "center",
      gap: "0.75rem",
      padding: "0.65rem 0.85rem",
      borderRadius: "8px",
      fontSize: "0.88rem",
      fontWeight: 600,
      textDecoration: "none",
      color: j ? "#02658b" : "#475569",
      backgroundColor: j ? "#e5f3f7" : "transparent",
      borderLeft: j ? "3.5px solid #02658b" : "3.5px solid transparent"
    };
    return d ? /* @__PURE__ */ e.jsxs(d, { to: m, onClick: o, style: C, children: [
      a,
      /* @__PURE__ */ e.jsx("span", { children: b })
    ] }) : /* @__PURE__ */ e.jsxs("a", { href: m, onClick: (F) => {
      F.preventDefault(), o && o();
    }, style: C, children: [
      a,
      /* @__PURE__ */ e.jsx("span", { children: b })
    ] });
  };
  return /* @__PURE__ */ e.jsxs(e.Fragment, { children: [
    t && /* @__PURE__ */ e.jsx(
      "div",
      {
        className: "sidebar-overlay",
        onClick: o,
        style: {
          position: "fixed",
          inset: 0,
          backgroundColor: "rgba(15, 23, 42, 0.4)",
          zIndex: 99
        }
      }
    ),
    /* @__PURE__ */ e.jsx(
      "aside",
      {
        className: `app-sidebar ${t ? "mobile-open" : ""}`,
        style: {
          width: "260px",
          background: c.sidebarBg,
          borderRight: "1px solid #cbd5e1",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "1.25rem 1rem",
          height: "100vh",
          position: "sticky",
          top: 0,
          zIndex: 100
        },
        children: /* @__PURE__ */ e.jsxs("div", { children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", padding: "0 0.5rem" }, children: [
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
              /* @__PURE__ */ e.jsx(
                "div",
                {
                  style: {
                    width: "36px",
                    height: "36px",
                    borderRadius: "8px",
                    background: c.primaryColor,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#ffffff",
                    fontWeight: "bold",
                    fontSize: "1.1rem"
                  },
                  children: "A"
                }
              ),
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: "1.15rem", fontWeight: 800, color: "#0f172a" }, children: c.brandName })
            ] }),
            t && /* @__PURE__ */ e.jsx("button", { onClick: o, style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" }, children: /* @__PURE__ */ e.jsx(J, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e.jsxs("nav", { style: { display: "flex", flexDirection: "column", gap: "0.4rem" }, children: [
            u("/admin/users", /* @__PURE__ */ e.jsx(zr, { size: 18 }), "User & Role Manager"),
            u("/admin/governance", /* @__PURE__ */ e.jsx(fe, { size: 18 }), "Admin Governance")
          ] })
        ] })
      }
    )
  ] });
}, Xr = ({ username: t, role: o, email: l, onLogout: s, onSettingsClick: f }) => {
  const [d, c] = R(!1), u = de(null);
  return ce(() => {
    const m = (a) => {
      u.current && !u.current.contains(a.target) && c(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []), /* @__PURE__ */ e.jsxs("div", { ref: u, style: { position: "relative", display: "inline-block" }, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => c(!d),
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
          /* @__PURE__ */ e.jsx(
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
              children: (t || "U").charAt(0).toUpperCase()
            }
          ),
          /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "left", display: "flex", flexDirection: "column" }, children: [
            /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.82rem", fontWeight: 700, color: "#0f172a" }, children: t }),
            o && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.7rem", color: "#64748b" }, children: o })
          ] }),
          /* @__PURE__ */ e.jsx(Ir, { size: 14, color: "#64748b" })
        ]
      }
    ),
    d && /* @__PURE__ */ e.jsxs(
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
          l && /* @__PURE__ */ e.jsxs("div", { style: { padding: "0.5rem 0.85rem", borderBottom: "1px solid #f1f5f9", fontSize: "0.75rem", color: "#64748b" }, children: [
            "Signed in as ",
            /* @__PURE__ */ e.jsx("strong", { style: { color: "#0f172a" }, children: l })
          ] }),
          f && /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                c(!1), f();
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
                /* @__PURE__ */ e.jsx(Er, { size: 14 }),
                /* @__PURE__ */ e.jsx("span", { children: "Settings" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                c(!1), s && s();
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
                /* @__PURE__ */ e.jsx(Ge, { size: 14 }),
                /* @__PURE__ */ e.jsx("span", { children: "Sign Out" })
              ]
            }
          )
        ]
      }
    )
  ] });
}, Zr = ({
  isOpen: t,
  currentVersion: o,
  latestVersion: l,
  onClose: s,
  onUpdateClick: f,
  downloading: d,
  downloadProgress: c
}) => t ? /* @__PURE__ */ e.jsx(
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
    children: /* @__PURE__ */ e.jsxs(
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
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem" }, children: [
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem" }, children: [
              /* @__PURE__ */ e.jsx(je, { size: 22, color: "#02658b" }),
              /* @__PURE__ */ e.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: "Software Update" })
            ] }),
            /* @__PURE__ */ e.jsx("button", { type: "button", onClick: s, style: { background: "none", border: "none", cursor: "pointer", color: "#64748b" }, children: /* @__PURE__ */ e.jsx(J, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }, children: [
            /* @__PURE__ */ e.jsxs("div", { style: { background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: "8px", padding: "0.85rem", textAlign: "center" }, children: [
              /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Current Version" }),
              /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "1.15rem", fontWeight: 700, color: "#0f172a" }, children: [
                "v",
                o
              ] })
            ] }),
            /* @__PURE__ */ e.jsxs("div", { style: { background: "#e5f3f7", border: "1.5px solid #02658b", borderRadius: "8px", padding: "0.85rem", textAlign: "center" }, children: [
              /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#02658b", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Update Version" }),
              /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "1.15rem", fontWeight: 700, color: "#02658b" }, children: [
                "v",
                l
              ] })
            ] })
          ] }),
          d && /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "1rem" }, children: [
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontSize: "0.8rem", fontWeight: 600, marginBottom: "0.35rem" }, children: [
              /* @__PURE__ */ e.jsx("span", { children: "Downloading update..." }),
              /* @__PURE__ */ e.jsxs("span", { children: [
                c,
                "%"
              ] })
            ] }),
            /* @__PURE__ */ e.jsx("div", { style: { width: "100%", height: "8px", background: "#e2e8f0", borderRadius: "4px", overflow: "hidden" }, children: /* @__PURE__ */ e.jsx("div", { style: { width: `${c}%`, height: "100%", background: "#02658b", transition: "width 0.3s" } }) })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.78rem", color: "#065f46", background: "#d1fae5", padding: "0.5rem 0.75rem", borderRadius: "6px", marginBottom: "1.25rem" }, children: [
            /* @__PURE__ */ e.jsx(fe, { size: 16 }),
            /* @__PURE__ */ e.jsx("span", { children: "Your database & app data remain safe during update." })
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", gap: "0.5rem" }, children: [
            /* @__PURE__ */ e.jsx("button", { type: "button", onClick: s, style: { padding: "0.45rem 0.85rem", borderRadius: "6px", background: "#ffffff", border: "1.5px solid #cbd5e1", cursor: "pointer" }, children: "Cancel" }),
            /* @__PURE__ */ e.jsx("button", { type: "button", onClick: f, disabled: d, style: { padding: "0.45rem 1rem", borderRadius: "6px", background: "#02658b", color: "#ffffff", border: "none", fontWeight: 600, cursor: "pointer" }, children: d ? "Downloading..." : "Update Now" })
          ] })
        ]
      }
    )
  }
) : null, Qr = ({ progress: t = 0, statusText: o }) => /* @__PURE__ */ e.jsxs("div", { style: { background: "#f8fafc", border: "1px solid #cbd5e1", padding: "0.85rem", borderRadius: "8px" }, children: [
  /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem", fontSize: "0.82rem", fontWeight: 600, color: "#0f172a" }, children: [
    /* @__PURE__ */ e.jsx("span", { children: o || (t >= 100 ? "Download Complete!" : "Downloading Update...") }),
    /* @__PURE__ */ e.jsxs("span", { children: [
      t,
      "%"
    ] })
  ] }),
  /* @__PURE__ */ e.jsx("div", { style: { width: "100%", height: "10px", background: "#e2e8f0", borderRadius: "5px", overflow: "hidden" }, children: /* @__PURE__ */ e.jsx(
    "div",
    {
      style: {
        width: `${Math.min(100, Math.max(0, t))}%`,
        height: "100%",
        background: t >= 100 ? "#10b981" : "#02658b",
        transition: "width 0.3s ease"
      }
    }
  ) })
] }), en = ({ columns: t, data: o, loading: l, emptyMessage: s = "No matching records found." }) => /* @__PURE__ */ e.jsx(
  "div",
  {
    style: {
      background: "#FFFFFF",
      borderRadius: "8px",
      border: "1.5px solid #cbd5e1",
      overflow: "hidden",
      width: "100%"
    },
    children: /* @__PURE__ */ e.jsx("div", { style: { overflowX: "auto", width: "100%" }, children: /* @__PURE__ */ e.jsxs("table", { style: { width: "100%", borderCollapse: "collapse", textAlign: "left", fontSize: "0.88rem" }, children: [
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { style: { background: "#e5f3f7", borderBottom: "1.5px solid #cbd5e1", color: "#0f172a", fontWeight: 700 }, children: t.map((f, d) => /* @__PURE__ */ e.jsx(
        "th",
        {
          style: {
            padding: "1.05rem 1rem",
            width: f.width,
            textAlign: f.align || "left",
            borderRight: d === t.length - 1 ? "none" : "1px solid #cbd5e1"
          },
          children: f.header
        },
        d
      )) }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: l ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: t.length, style: { padding: "3rem", textAlign: "center", color: "#64748b" }, children: "Loading table data..." }) }) : !o || o.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: t.length, style: { padding: "3rem", textAlign: "center", color: "#64748b" }, children: s }) }) : o.map((f, d) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          style: {
            borderBottom: d === o.length - 1 ? "none" : "1px solid #e2e8f0",
            background: "#FFFFFF",
            transition: "background 0.15s"
          },
          children: t.map((c, u) => /* @__PURE__ */ e.jsx(
            "td",
            {
              style: {
                padding: "1.05rem 1rem",
                color: "#0f172a",
                textAlign: c.align || "left",
                borderRight: u === t.length - 1 ? "none" : "1px solid #e2e8f0"
              },
              children: c.render ? c.render(f, d) : f[c.accessor]
            },
            u
          ))
        },
        d
      )) })
    ] }) })
  }
), rn = ({
  currentPage: t = 1,
  pageSize: o = 10,
  totalItems: l = 0,
  onPageChange: s,
  onPageSizeChange: f,
  pageSizeOptions: d = [10, 20, 30, 50]
}) => {
  const c = Math.max(1, Math.ceil(l / o)), u = (a) => {
    f && f(a);
  }, m = (a) => {
    s && a >= 1 && a <= c && s(a);
  };
  return /* @__PURE__ */ e.jsxs(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "1rem",
        width: "fit-content",
        padding: "0.4rem 0.85rem",
        background: "#FFFFFF",
        borderRadius: "8px",
        border: "1.5px solid #cbd5e1",
        fontSize: "0.85rem",
        color: "#475569",
        flexShrink: 0
      },
      children: [
        /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.4rem" }, children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => m(t - 1),
              disabled: t === 1,
              style: {
                background: "#FFFFFF",
                border: "1.5px solid #cbd5e1",
                borderRadius: "0.375rem",
                padding: "0.25rem 0.65rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                color: t === 1 ? "#94a3b8" : "#0f172a",
                cursor: t === 1 ? "not-allowed" : "pointer"
              },
              children: "Previous"
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => m(1),
              style: {
                background: t === 1 ? "#f1f5f9" : "#FFFFFF",
                border: "1.5px solid #cbd5e1",
                borderRadius: "0.375rem",
                padding: "0.25rem 0.55rem",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#0f172a",
                cursor: "pointer"
              },
              children: "1"
            }
          ),
          c > 2 && /* @__PURE__ */ e.jsx("span", { style: { color: "#94a3b8" }, children: "..." }),
          c > 1 && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => m(c),
              style: {
                background: t === c ? "#f1f5f9" : "#FFFFFF",
                border: "1.5px solid #cbd5e1",
                borderRadius: "0.375rem",
                padding: "0.25rem 0.55rem",
                fontSize: "0.82rem",
                fontWeight: 700,
                color: "#0f172a",
                cursor: "pointer"
              },
              children: c
            }
          ),
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => m(t + 1),
              disabled: t === c,
              style: {
                background: "#02658b",
                color: "#FFFFFF",
                border: "none",
                borderRadius: "0.375rem",
                padding: "0.25rem 0.75rem",
                fontSize: "0.82rem",
                fontWeight: 600,
                cursor: t === c ? "not-allowed" : "pointer",
                opacity: t === c ? 0.5 : 1
              },
              children: "Next"
            }
          )
        ] }),
        /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.75rem" }, children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.35rem" }, children: [
            /* @__PURE__ */ e.jsx("span", { children: "Rows" }),
            /* @__PURE__ */ e.jsx(
              "select",
              {
                value: o,
                onChange: (a) => u(Number(a.target.value)),
                style: {
                  background: "#FFFFFF",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "0.375rem",
                  padding: "0.2rem 0.45rem",
                  fontSize: "0.82rem",
                  color: "#0f172a",
                  cursor: "pointer"
                },
                children: d.map((a) => /* @__PURE__ */ e.jsxs("option", { value: a, children: [
                  a,
                  " ▾"
                ] }, a))
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.35rem" }, children: [
            /* @__PURE__ */ e.jsx("span", { children: "Page #" }),
            /* @__PURE__ */ e.jsx(
              "select",
              {
                value: t,
                onChange: (a) => m(Number(a.target.value)),
                style: {
                  background: "#FFFFFF",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "0.375rem",
                  padding: "0.2rem 0.45rem",
                  fontSize: "0.82rem",
                  color: "#0f172a",
                  cursor: "pointer"
                },
                children: Array.from({ length: c }, (a, b) => b + 1).map((a) => /* @__PURE__ */ e.jsxs("option", { value: a, children: [
                  a < 10 ? `0${a}` : a,
                  " ▾"
                ] }, a))
              }
            )
          ] })
        ] })
      ]
    }
  );
}, nn = ({
  children: t,
  variant: o = "primary",
  // 'primary' | 'secondary' | 'danger' | 'outline'
  size: l = "md",
  // 'sm' | 'md' | 'lg'
  loading: s = !1,
  disabled: f = !1,
  icon: d,
  onClick: c,
  type: u = "button",
  fullWidth: m = !1,
  style: a = {}
}) => {
  const b = {
    primary: { bg: "#02658b", color: "#ffffff", border: "none" },
    secondary: { bg: "#f1f5f9", color: "#0f172a", border: "1px solid #cbd5e1" },
    danger: { bg: "#ef4444", color: "#ffffff", border: "none" },
    outline: { bg: "#ffffff", color: "#02658b", border: "1.5px solid #02658b" }
  }[o] || { bg: "#02658b", color: "#ffffff", border: "none" }, j = {
    sm: "0.3rem 0.6rem",
    md: "0.45rem 0.95rem",
    lg: "0.65rem 1.3rem"
  }[l] || "0.45rem 0.95rem";
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: u,
      onClick: c,
      disabled: f || s,
      style: {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.4rem",
        padding: j,
        borderRadius: "6px",
        background: b.bg,
        color: b.color,
        border: b.border,
        fontSize: l === "sm" ? "0.78rem" : l === "lg" ? "1rem" : "0.85rem",
        fontWeight: 600,
        cursor: f || s ? "not-allowed" : "pointer",
        opacity: f || s ? 0.6 : 1,
        width: m ? "100%" : "auto",
        transition: "all 0.15s ease",
        ...a
      },
      children: [
        s ? /* @__PURE__ */ e.jsx(Se, { size: 16, className: "orion-spin" }) : d ? /* @__PURE__ */ e.jsx(d, { size: 16 }) : null,
        /* @__PURE__ */ e.jsx("span", { children: t })
      ]
    }
  );
}, tn = ({
  value: t,
  onChange: o,
  placeholder: l = "Search by Name, Role, Email...",
  roleFilter: s = "All",
  onRoleFilterChange: f,
  rolesList: d = ["All", "Super Admin", "Admin", "Teacher", "Student", "Parent"]
}) => {
  const [c, u] = R(!1), m = de(null);
  return ce(() => {
    const a = (b) => {
      m.current && !m.current.contains(b.target) && u(!1);
    };
    return document.addEventListener("mousedown", a), () => document.removeEventListener("mousedown", a);
  }, []), /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.5rem", width: "100%", maxWidth: "420px" }, children: [
    /* @__PURE__ */ e.jsxs(
      "div",
      {
        style: {
          display: "flex",
          alignItems: "center",
          gap: "0.6rem",
          height: "42px",
          borderRadius: "9px",
          border: "1.5px solid #cbd5e1",
          background: "#FFFFFF",
          padding: "0 0.85rem",
          flex: 1
        },
        children: [
          /* @__PURE__ */ e.jsx(_r, { size: 18, color: "#64748b" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: t,
              onChange: (a) => o(a.target.value),
              placeholder: l,
              style: {
                border: "none",
                outline: "none",
                width: "100%",
                fontSize: "0.88rem",
                color: "#0f172a",
                background: "transparent"
              }
            }
          ),
          t && /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: () => o(""),
              style: { background: "none", border: "none", cursor: "pointer", color: "#94a3b8", padding: 0 },
              children: /* @__PURE__ */ e.jsx(J, { size: 16 })
            }
          )
        ]
      }
    ),
    f && /* @__PURE__ */ e.jsxs("div", { ref: m, style: { position: "relative" }, children: [
      /* @__PURE__ */ e.jsx(
        "button",
        {
          type: "button",
          onClick: () => u(!c),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
            width: "42px",
            height: "42px",
            borderRadius: "9px",
            border: `1.5px solid ${s !== "All" ? "#02658b" : "#cbd5e1"}`,
            background: s !== "All" ? "#e5f3f7" : "#FFFFFF",
            color: s !== "All" ? "#02658b" : "#334155",
            cursor: "pointer"
          },
          title: "Filter by Role",
          children: /* @__PURE__ */ e.jsx(Wr, { size: 18 })
        }
      ),
      c && /* @__PURE__ */ e.jsxs(
        "div",
        {
          style: {
            position: "absolute",
            top: "calc(100% + 0.4rem)",
            right: 0,
            background: "#FFFFFF",
            border: "1.5px solid #cbd5e1",
            borderRadius: "8px",
            padding: "0.5rem",
            minWidth: "160px",
            boxShadow: "0 10px 15px -3px rgba(0,0,0,0.1)",
            zIndex: 100,
            display: "flex",
            flexDirection: "column",
            gap: "0.2rem"
          },
          children: [
            /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.72rem", fontWeight: 700, color: "#64748b", textTransform: "uppercase", padding: "0.2rem 0.4rem" }, children: "Filter by Role" }),
            d.map((a) => /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  f(a), u(!1);
                },
                style: {
                  textAlign: "left",
                  padding: "0.35rem 0.6rem",
                  fontSize: "0.85rem",
                  background: s === a ? "#000000" : "transparent",
                  color: s === a ? "#FFFFFF" : "#0f172a",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: s === a ? 600 : 400
                },
                children: a
              },
              a
            ))
          ]
        }
      )
    ] })
  ] });
}, on = ({ activeCount: t = 0, onClick: o, label: l = "Filter" }) => /* @__PURE__ */ e.jsxs(
  "button",
  {
    type: "button",
    onClick: o,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "0.4rem",
      padding: "0.45rem 0.85rem",
      borderRadius: "6px",
      background: t > 0 ? "#e5f3f7" : "#ffffff",
      border: `1.5px solid ${t > 0 ? "#02658b" : "#cbd5e1"}`,
      color: t > 0 ? "#02658b" : "#0f172a",
      fontSize: "0.85rem",
      fontWeight: 600,
      cursor: "pointer"
    },
    children: [
      /* @__PURE__ */ e.jsx(Tr, { size: 15, color: t > 0 ? "#02658b" : "#64748b" }),
      /* @__PURE__ */ e.jsx("span", { children: l }),
      t > 0 && /* @__PURE__ */ e.jsx(
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
          children: t
        }
      )
    ]
  }
), sn = ({
  value: t = "",
  onChange: o,
  maxLength: l = 11,
  placeholder: s = "03001234567",
  disabled: f = !1,
  error: d = "",
  label: c = "Phone Number"
}) => {
  const u = (m) => {
    const b = m.target.value.replace(/\D/g, "").slice(0, l);
    o(b);
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.35rem", width: "100%" }, children: [
    c && /* @__PURE__ */ e.jsx("label", { style: { fontSize: "0.82rem", fontWeight: 600, color: "#334155" }, children: c }),
    /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "tel",
          value: t,
          onChange: u,
          maxLength: l,
          placeholder: s,
          disabled: f,
          style: {
            width: "100%",
            padding: "0.45rem 3rem 0.45rem 0.75rem",
            borderRadius: "6px",
            border: `1.5px solid ${d ? "#ef4444" : "#cbd5e1"}`,
            fontSize: "0.85rem",
            color: "#0f172a",
            outline: "none"
          }
        }
      ),
      /* @__PURE__ */ e.jsxs(
        "span",
        {
          style: {
            position: "absolute",
            right: "0.75rem",
            fontSize: "0.72rem",
            fontWeight: 600,
            color: t.length >= l ? "#02658b" : "#94a3b8"
          },
          children: [
            t.length,
            "/",
            l
          ]
        }
      )
    ] }),
    d && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.75rem", color: "#ef4444" }, children: d })
  ] });
}, ln = ({
  label: t,
  value: o,
  onChange: l,
  options: s = [],
  // [{ label: 'Option 1', value: '1' }]
  disabled: f = !1,
  error: d = "",
  placeholder: c = "Select option..."
}) => /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.35rem", width: "100%" }, children: [
  t && /* @__PURE__ */ e.jsx("label", { style: { fontSize: "0.82rem", fontWeight: 600, color: "#334155" }, children: t }),
  /* @__PURE__ */ e.jsxs(
    "select",
    {
      value: o,
      onChange: (u) => l(u.target.value),
      disabled: f,
      style: {
        width: "100%",
        padding: "0.48rem 0.75rem",
        borderRadius: "6px",
        border: `1.5px solid ${d ? "#ef4444" : "#cbd5e1"}`,
        fontSize: "0.85rem",
        color: "#0f172a",
        backgroundColor: "#ffffff",
        outline: "none"
      },
      children: [
        c && /* @__PURE__ */ e.jsx("option", { value: "", children: c }),
        s.map((u, m) => /* @__PURE__ */ e.jsx("option", { value: typeof u == "object" ? u.value : u, children: typeof u == "object" ? u.label : u }, m))
      ]
    }
  ),
  d && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.75rem", color: "#ef4444" }, children: d })
] }), an = ({
  isOpen: t,
  title: o = "User Form",
  onClose: l,
  onSubmit: s,
  children: f,
  submitText: d = "Save Changes",
  loading: c = !1
}) => t ? /* @__PURE__ */ e.jsx(
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
    children: /* @__PURE__ */ e.jsxs(
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
        onClick: (u) => u.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.75rem" }, children: [
            /* @__PURE__ */ e.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: o }),
            /* @__PURE__ */ e.jsx("button", { type: "button", onClick: l, style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" }, children: /* @__PURE__ */ e.jsx(J, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e.jsxs("form", { onSubmit: s, children: [
            /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }, children: f }),
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "0.75rem", justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: l,
                  disabled: c,
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
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "submit",
                  disabled: c,
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
                  children: c ? "Saving..." : d
                }
              )
            ] })
          ] })
        ]
      }
    )
  }
) : null, dn = ({ title: t = "Sign In", subtitle: o = "Welcome back! Please enter your credentials.", logo: l, onSubmit: s, children: f, loading: d }) => /* @__PURE__ */ e.jsxs(
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
      /* @__PURE__ */ e.jsxs("div", { style: { textAlign: "center", marginBottom: "1.5rem" }, children: [
        l && /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "0.75rem" }, children: l }),
        /* @__PURE__ */ e.jsx("h2", { style: { margin: 0, fontSize: "1.4rem", fontWeight: 800, color: "#0f172a" }, children: t }),
        o && /* @__PURE__ */ e.jsx("p", { style: { margin: "0.35rem 0 0 0", fontSize: "0.85rem", color: "#64748b" }, children: o })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: s, children: [
        /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "1.1rem", marginBottom: "1.5rem" }, children: f }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            disabled: d,
            style: {
              width: "100%",
              padding: "0.65rem",
              borderRadius: "6px",
              background: "#02658b",
              color: "#ffffff",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: d ? "not-allowed" : "pointer",
              opacity: d ? 0.6 : 1
            },
            children: d ? "Authenticating..." : "Sign In"
          }
        )
      ] })
    ]
  }
);
export {
  Jr as AlertDialog,
  nn as Button,
  Or as ConfirmModal,
  Lr as CounterCard,
  Hr as CustomLoader,
  en as DataGrid,
  on as FilterButton,
  ln as FormSelect,
  Mr as GlobalPermissionsBadge,
  dn as LoginForm,
  qr as Navbar,
  rn as Pagination,
  sn as PhoneInput,
  Xr as ProfileDropdown,
  tn as SearchBar,
  Vr as SeverityPill,
  Kr as Sidebar,
  Yr as StatCard,
  $r as StatusPill,
  Zr as UpdateDialog,
  Qr as UpdateProgressBar,
  Gr as UserDetailsCard,
  an as UserDialogModal,
  Dr as VersionBadge
};
