import Ye, { useState as R, useRef as de, useEffect as ce } from "react";
import { ShieldCheck as fe, ShieldAlert as jr, Mail as wr, Phone as kr, Loader2 as Se, AlertTriangle as Ge, X as J, Trash2 as Sr, Download as je, CheckCircle2 as Rr, RefreshCw as Cr, Menu as Fr, User as zr, LogOut as He, Users as Ir, ChevronDown as Er, Settings as _r, Search as Wr, SlidersHorizontal as Tr, Filter as Pr } from "lucide-react";
import { createPortal as we } from "react-dom";
import { NavLink as Ve } from "react-router-dom";
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
var Me;
function Or() {
  if (Me) return Q;
  Me = 1;
  var t = Ye, o = Symbol.for("react.element"), a = Symbol.for("react.fragment"), l = Object.prototype.hasOwnProperty, f = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(p, m, d) {
    var h, k = {}, z = null, I = null;
    d !== void 0 && (z = "" + d), m.key !== void 0 && (z = "" + m.key), m.ref !== void 0 && (I = m.ref);
    for (h in m) l.call(m, h) && !i.hasOwnProperty(h) && (k[h] = m[h]);
    if (p && p.defaultProps) for (h in m = p.defaultProps, m) k[h] === void 0 && (k[h] = m[h]);
    return { $$typeof: o, type: p, key: z, ref: I, props: k, _owner: f.current };
  }
  return Q.Fragment = a, Q.jsx = c, Q.jsxs = c, Q;
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
var Le;
function Dr() {
  return Le || (Le = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Ye, o = Symbol.for("react.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), f = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), p = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), k = Symbol.for("react.memo"), z = Symbol.for("react.lazy"), I = Symbol.for("react.offscreen"), P = Symbol.iterator, N = "@@iterator";
    function q(r) {
      if (r === null || typeof r != "object")
        return null;
      var n = P && r[P] || r[N];
      return typeof n == "function" ? n : null;
    }
    var _ = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function S(r) {
      {
        for (var n = arguments.length, s = new Array(n > 1 ? n - 1 : 0), u = 1; u < n; u++)
          s[u - 1] = arguments[u];
        A("error", r, s);
      }
    }
    function A(r, n, s) {
      {
        var u = _.ReactDebugCurrentFrame, y = u.getStackAddendum();
        y !== "" && (n += "%s", s = s.concat([y]));
        var v = s.map(function(x) {
          return String(x);
        });
        v.unshift("Warning: " + n), Function.prototype.apply.call(console[r], console, v);
      }
    }
    var L = !1, re = !1, ne = !1, K = !1, X = !1, W;
    W = Symbol.for("react.module.reference");
    function U(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === l || r === i || X || r === f || r === d || r === h || K || r === I || L || re || ne || typeof r == "object" && r !== null && (r.$$typeof === z || r.$$typeof === k || r.$$typeof === c || r.$$typeof === p || r.$$typeof === m || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === W || r.getModuleId !== void 0));
    }
    function ue(r, n, s) {
      var u = r.displayName;
      if (u)
        return u;
      var y = n.displayName || n.name || "";
      return y !== "" ? s + "(" + y + ")" : s;
    }
    function $(r) {
      return r.displayName || "Context";
    }
    function D(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case l:
          return "Fragment";
        case a:
          return "Portal";
        case i:
          return "Profiler";
        case f:
          return "StrictMode";
        case d:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case p:
            var n = r;
            return $(n) + ".Consumer";
          case c:
            var s = r;
            return $(s._context) + ".Provider";
          case m:
            return ue(r, r.render, "ForwardRef");
          case k:
            var u = r.displayName || null;
            return u !== null ? u : D(r.type) || "Memo";
          case z: {
            var y = r, v = y._payload, x = y._init;
            try {
              return D(x(v));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, C = 0, Y, te, oe, V, g, B, Re;
    function Ce() {
    }
    Ce.__reactDisabledLog = !0;
    function Je() {
      {
        if (C === 0) {
          Y = console.log, te = console.info, oe = console.warn, V = console.error, g = console.group, B = console.groupCollapsed, Re = console.groupEnd;
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
        C++;
      }
    }
    function qe() {
      {
        if (C--, C === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, r, {
              value: Y
            }),
            info: O({}, r, {
              value: te
            }),
            warn: O({}, r, {
              value: oe
            }),
            error: O({}, r, {
              value: V
            }),
            group: O({}, r, {
              value: g
            }),
            groupCollapsed: O({}, r, {
              value: B
            }),
            groupEnd: O({}, r, {
              value: Re
            })
          });
        }
        C < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = _.ReactCurrentDispatcher, me;
    function ie(r, n, s) {
      {
        if (me === void 0)
          try {
            throw Error();
          } catch (y) {
            var u = y.stack.trim().match(/\n( *(at )?)/);
            me = u && u[1] || "";
          }
        return `
` + me + r;
      }
    }
    var ge = !1, se;
    {
      var Ke = typeof WeakMap == "function" ? WeakMap : Map;
      se = new Ke();
    }
    function Fe(r, n) {
      if (!r || ge)
        return "";
      {
        var s = se.get(r);
        if (s !== void 0)
          return s;
      }
      var u;
      ge = !0;
      var y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var v;
      v = pe.current, pe.current = null, Je();
      try {
        if (n) {
          var x = function() {
            throw Error();
          };
          if (Object.defineProperty(x.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(x, []);
            } catch (E) {
              u = E;
            }
            Reflect.construct(r, [], x);
          } else {
            try {
              x.call();
            } catch (E) {
              u = E;
            }
            r.call(x.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            u = E;
          }
          r();
        }
      } catch (E) {
        if (E && u && typeof E.stack == "string") {
          for (var b = E.stack.split(`
`), F = u.stack.split(`
`), j = b.length - 1, w = F.length - 1; j >= 1 && w >= 0 && b[j] !== F[w]; )
            w--;
          for (; j >= 1 && w >= 0; j--, w--)
            if (b[j] !== F[w]) {
              if (j !== 1 || w !== 1)
                do
                  if (j--, w--, w < 0 || b[j] !== F[w]) {
                    var T = `
` + b[j].replace(" at new ", " at ");
                    return r.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", r.displayName)), typeof r == "function" && se.set(r, T), T;
                  }
                while (j >= 1 && w >= 0);
              break;
            }
        }
      } finally {
        ge = !1, pe.current = v, qe(), Error.prepareStackTrace = y;
      }
      var H = r ? r.displayName || r.name : "", M = H ? ie(H) : "";
      return typeof r == "function" && se.set(r, M), M;
    }
    function Xe(r, n, s) {
      return Fe(r, !1);
    }
    function Ze(r) {
      var n = r.prototype;
      return !!(n && n.isReactComponent);
    }
    function le(r, n, s) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return Fe(r, Ze(r));
      if (typeof r == "string")
        return ie(r);
      switch (r) {
        case d:
          return ie("Suspense");
        case h:
          return ie("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case m:
            return Xe(r.render);
          case k:
            return le(r.type, n, s);
          case z: {
            var u = r, y = u._payload, v = u._init;
            try {
              return le(v(y), n, s);
            } catch {
            }
          }
        }
      return "";
    }
    var Z = Object.prototype.hasOwnProperty, ze = {}, Ie = _.ReactDebugCurrentFrame;
    function ae(r) {
      if (r) {
        var n = r._owner, s = le(r.type, r._source, n ? n.type : null);
        Ie.setExtraStackFrame(s);
      } else
        Ie.setExtraStackFrame(null);
    }
    function Qe(r, n, s, u, y) {
      {
        var v = Function.call.bind(Z);
        for (var x in r)
          if (v(r, x)) {
            var b = void 0;
            try {
              if (typeof r[x] != "function") {
                var F = Error((u || "React class") + ": " + s + " type `" + x + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[x] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw F.name = "Invariant Violation", F;
              }
              b = r[x](n, x, u, s, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              b = j;
            }
            b && !(b instanceof Error) && (ae(y), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", s, x, typeof b), ae(null)), b instanceof Error && !(b.message in ze) && (ze[b.message] = !0, ae(y), S("Failed %s type: %s", s, b.message), ae(null));
          }
      }
    }
    var er = Array.isArray;
    function be(r) {
      return er(r);
    }
    function rr(r) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, s = n && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return s;
      }
    }
    function nr(r) {
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
      if (nr(r))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", rr(r)), Ee(r);
    }
    var We = _.ReactCurrentOwner, tr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Pe;
    function or(r) {
      if (Z.call(r, "ref")) {
        var n = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function ir(r) {
      if (Z.call(r, "key")) {
        var n = Object.getOwnPropertyDescriptor(r, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function sr(r, n) {
      typeof r.ref == "string" && We.current;
    }
    function lr(r, n) {
      {
        var s = function() {
          Te || (Te = !0, S("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: s,
          configurable: !0
        });
      }
    }
    function ar(r, n) {
      {
        var s = function() {
          Pe || (Pe = !0, S("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        s.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: s,
          configurable: !0
        });
      }
    }
    var dr = function(r, n, s, u, y, v, x) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: o,
        // Built-in properties that belong on the element
        type: r,
        key: n,
        ref: s,
        props: x,
        // Record the component responsible for creating this element.
        _owner: v
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: y
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function cr(r, n, s, u, y) {
      {
        var v, x = {}, b = null, F = null;
        s !== void 0 && (_e(s), b = "" + s), ir(n) && (_e(n.key), b = "" + n.key), or(n) && (F = n.ref, sr(n, y));
        for (v in n)
          Z.call(n, v) && !tr.hasOwnProperty(v) && (x[v] = n[v]);
        if (r && r.defaultProps) {
          var j = r.defaultProps;
          for (v in j)
            x[v] === void 0 && (x[v] = j[v]);
        }
        if (b || F) {
          var w = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          b && lr(x, w), F && ar(x, w);
        }
        return dr(r, b, F, y, u, We.current, x);
      }
    }
    var xe = _.ReactCurrentOwner, Oe = _.ReactDebugCurrentFrame;
    function G(r) {
      if (r) {
        var n = r._owner, s = le(r.type, r._source, n ? n.type : null);
        Oe.setExtraStackFrame(s);
      } else
        Oe.setExtraStackFrame(null);
    }
    var he;
    he = !1;
    function ye(r) {
      return typeof r == "object" && r !== null && r.$$typeof === o;
    }
    function De() {
      {
        if (xe.current) {
          var r = D(xe.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function fr(r) {
      return "";
    }
    var Ae = {};
    function ur(r) {
      {
        var n = De();
        if (!n) {
          var s = typeof r == "string" ? r : r.displayName || r.name;
          s && (n = `

Check the top-level render call using <` + s + ">.");
        }
        return n;
      }
    }
    function Ue(r, n) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var s = ur(n);
        if (Ae[s])
          return;
        Ae[s] = !0;
        var u = "";
        r && r._owner && r._owner !== xe.current && (u = " It was passed a child from " + D(r._owner.type) + "."), G(r), S('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', s, u), G(null);
      }
    }
    function Be(r, n) {
      {
        if (typeof r != "object")
          return;
        if (be(r))
          for (var s = 0; s < r.length; s++) {
            var u = r[s];
            ye(u) && Ue(u, n);
          }
        else if (ye(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var y = q(r);
          if (typeof y == "function" && y !== r.entries)
            for (var v = y.call(r), x; !(x = v.next()).done; )
              ye(x.value) && Ue(x.value, n);
        }
      }
    }
    function pr(r) {
      {
        var n = r.type;
        if (n == null || typeof n == "string")
          return;
        var s;
        if (typeof n == "function")
          s = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === m || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === k))
          s = n.propTypes;
        else
          return;
        if (s) {
          var u = D(n);
          Qe(s, r.props, "prop", u, r);
        } else if (n.PropTypes !== void 0 && !he) {
          he = !0;
          var y = D(n);
          S("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", y || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && S("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mr(r) {
      {
        for (var n = Object.keys(r.props), s = 0; s < n.length; s++) {
          var u = n[s];
          if (u !== "children" && u !== "key") {
            G(r), S("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), G(null);
            break;
          }
        }
        r.ref !== null && (G(r), S("Invalid attribute `ref` supplied to `React.Fragment`."), G(null));
      }
    }
    var Ne = {};
    function $e(r, n, s, u, y, v) {
      {
        var x = U(r);
        if (!x) {
          var b = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var F = fr();
          F ? b += F : b += De();
          var j;
          r === null ? j = "null" : be(r) ? j = "array" : r !== void 0 && r.$$typeof === o ? (j = "<" + (D(r.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : j = typeof r, S("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, b);
        }
        var w = cr(r, n, s, y, v);
        if (w == null)
          return w;
        if (x) {
          var T = n.children;
          if (T !== void 0)
            if (u)
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
          var M = D(r), E = Object.keys(n).filter(function(vr) {
            return vr !== "key";
          }), ve = E.length > 0 ? "{key: someKey, " + E.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ne[M + ve]) {
            var yr = E.length > 0 ? "{" + E.join(": ..., ") + ": ...}" : "{}";
            S(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ve, M, yr, M), Ne[M + ve] = !0;
          }
        }
        return r === l ? mr(w) : pr(w), w;
      }
    }
    function gr(r, n, s) {
      return $e(r, n, s, !0);
    }
    function br(r, n, s) {
      return $e(r, n, s, !1);
    }
    var xr = br, hr = gr;
    ee.Fragment = l, ee.jsx = xr, ee.jsxs = hr;
  }()), ee;
}
process.env.NODE_ENV === "production" ? ke.exports = Or() : ke.exports = Dr();
var e = ke.exports;
const Mr = ({ status: t, customLabel: o }) => {
  const a = (t || "").toLowerCase().replace(/[\s_-]+/g, "");
  let l = {
    color: "#0f172a",
    bg: "#f1f5f9",
    border: "#cbd5e1",
    label: o || t || "Unknown"
  };
  return ["pending", "unregistered"].includes(a) ? l = {
    color: "#991b1b",
    bg: "#fef2f2",
    border: "#fca5a5",
    label: o || (a === "pending" ? "Pending" : "Unregistered")
  } : ["completed", "registered"].includes(a) ? l = {
    color: "#065f46",
    bg: "#d1fae5",
    border: "#a7f3d0",
    label: o || (a === "completed" ? "Completed" : "Registered")
  } : ["inconsultation", "consultation"].includes(a) && (l = {
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
        color: l.color,
        backgroundColor: l.bg,
        border: `1px solid ${l.border}`,
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
              backgroundColor: l.color
            }
          }
        ),
        l.label
      ]
    }
  );
}, Lr = ({ severity: t }) => {
  const o = (t || "").toLowerCase();
  let a = {
    color: "#065f46",
    bg: "#d1fae5",
    border: "#a7f3d0",
    label: "Minor"
  };
  return o === "moderate" ? a = {
    color: "#014d6b",
    bg: "#e5f3f7",
    border: "#bae6fd",
    label: "Moderate"
  } : (o === "major" || o === "critical") && (a = {
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
        color: a.color,
        backgroundColor: a.bg,
        border: `1px solid ${a.border}`
      },
      children: a.label
    }
  );
}, Yr = ({ permissions: t = [], isSuperAdmin: o = !1 }) => o ? /* @__PURE__ */ e.jsxs("div", { style: { display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.75rem", background: "#d1fae5", border: "1px solid #a7f3d0", borderRadius: "20px", color: "#065f46", fontSize: "0.78rem", fontWeight: 700 }, children: [
  /* @__PURE__ */ e.jsx(fe, { size: 16 }),
  /* @__PURE__ */ e.jsx("span", { children: "Super Admin (Full Access)" })
] }) : /* @__PURE__ */ e.jsxs("div", { style: { display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.35rem 0.75rem", background: "#f1f5f9", border: "1px solid #cbd5e1", borderRadius: "20px", color: "#475569", fontSize: "0.78rem", fontWeight: 600 }, children: [
  /* @__PURE__ */ e.jsx(jr, { size: 16, color: "#64748b" }),
  /* @__PURE__ */ e.jsxs("span", { children: [
    t.length,
    " Custom Permissions Active"
  ] })
] }), Gr = ({ title: t, value: o, icon: a, trend: l, trendLabel: f, accentColor: i = "#02658b" }) => /* @__PURE__ */ e.jsxs(
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
        a && /* @__PURE__ */ e.jsx(
          "div",
          {
            style: {
              padding: "0.5rem",
              borderRadius: "0.5rem",
              backgroundColor: `${i}15`,
              color: i,
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            },
            children: /* @__PURE__ */ e.jsx(a, { size: 20 })
          }
        )
      ] }),
      /* @__PURE__ */ e.jsx("div", { style: { fontSize: "1.75rem", fontWeight: 800, color: "#0f172a", lineHeight: 1.1 }, children: o }),
      l && /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "0.75rem", fontWeight: 600, display: "flex", alignItems: "center", gap: "0.25rem" }, children: [
        /* @__PURE__ */ e.jsx("span", { style: { color: l.startsWith("+") ? "#10b981" : "#ef4444" }, children: l }),
        f && /* @__PURE__ */ e.jsx("span", { style: { color: "#64748b" }, children: f })
      ] })
    ]
  }
), Hr = ({ label: t, count: o, badgeColor: a = "#02658b" }) => /* @__PURE__ */ e.jsxs(
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
            background: a,
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
), Jr = ({ name: t, email: o, phone: a, role: l, status: f, avatarUrl: i, actions: c }) => /* @__PURE__ */ e.jsxs(
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
        i ? /* @__PURE__ */ e.jsx(
          "img",
          {
            src: i,
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
          l && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.75rem", color: "#02658b", fontWeight: 600 }, children: l })
        ] })
      ] }),
      /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.5rem", fontSize: "0.82rem", color: "#475569" }, children: [
        o && /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.4rem" }, children: [
          /* @__PURE__ */ e.jsx(wr, { size: 14, color: "#64748b" }),
          /* @__PURE__ */ e.jsx("span", { children: o })
        ] }),
        a && /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.4rem" }, children: [
          /* @__PURE__ */ e.jsx(kr, { size: 14, color: "#64748b" }),
          /* @__PURE__ */ e.jsx("span", { children: a })
        ] })
      ] }),
      c && /* @__PURE__ */ e.jsx("div", { style: { marginTop: "1rem", paddingTop: "0.75rem", borderTop: "1px solid #f1f5f9", display: "flex", gap: "0.5rem" }, children: c })
    ]
  }
), qr = ({ message: t = "Loading...", fullPage: o = !1, size: a = 28 }) => {
  const l = /* @__PURE__ */ e.jsxs(
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
        /* @__PURE__ */ e.jsx(Se, { size: a, color: "#02658b", className: "orion-spin" }),
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
      children: l
    }
  ) : l;
}, Ar = ({
  isOpen: t,
  title: o = "Confirm Action",
  subtitle: a = "Permanent Action",
  message: l,
  confirmText: f = "Confirm",
  cancelText: i = "Cancel",
  confirmVariant: c = "danger",
  loading: p = !1,
  error: m = null,
  onConfirm: d,
  onCancel: h
}) => {
  if (!t) return null;
  const k = c === "danger", z = k ? "#9f1239" : "#02658b", I = k ? "#ffe4e6" : "#e5f3f7", P = k ? "#9f1239" : "#02658b";
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
      onClick: h,
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
                      background: I,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: z,
                      flexShrink: 0
                    },
                    children: /* @__PURE__ */ e.jsx(Ge, { size: 22 })
                  }
                ),
                /* @__PURE__ */ e.jsxs("div", { children: [
                  /* @__PURE__ */ e.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: o }),
                  a && /* @__PURE__ */ e.jsx("p", { style: { margin: "0.15rem 0 0 0", fontSize: "0.8rem", color: "#64748b" }, children: a })
                ] })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: h,
                  disabled: p,
                  style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" },
                  children: /* @__PURE__ */ e.jsx(J, { size: 18 })
                }
              )
            ] }),
            m && /* @__PURE__ */ e.jsx("div", { style: { background: "#ffe4e6", border: "1px solid #fecdd3", color: "#9f1239", padding: "0.65rem", borderRadius: "0.375rem", fontSize: "0.82rem" }, children: m }),
            /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.9rem", color: "#334155", lineHeight: 1.5 }, children: l }),
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "flex-end", gap: "0.65rem", marginTop: "0.5rem" }, children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: h,
                  disabled: p,
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
                  children: i
                }
              ),
              /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: d,
                  disabled: p,
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
                    k && /* @__PURE__ */ e.jsx(Sr, { size: 16 }),
                    /* @__PURE__ */ e.jsx("span", { children: p ? "Processing..." : f })
                  ]
                }
              )
            ] })
          ]
        }
      )
    }
  ), document.body);
}, Kr = Ar, Ur = ({
  position: t = "inline",
  onUpdateStatusChange: o,
  checkUpdateApi: a = typeof window < "u" ? window.checkUpdateApi : null,
  startDownloadApi: l = typeof window < "u" ? window.startDownloadApi : null,
  fetchDownloadProgressApi: f = typeof window < "u" ? window.fetchDownloadProgressApi : null
}) => {
  const [i, c] = R("0.5.0"), [p, m] = R("0.5.0"), [d, h] = R(!1), [k, z] = R(""), [I, P] = R(""), [N, q] = R(""), [_, S] = R(!1), [A, L] = R(!1), [re, ne] = R(""), [K, X] = R(0), [W, U] = R("idle"), [ue, $] = R(""), [D, O] = R(!1), C = de(null), Y = async () => {
    S(!0);
    try {
      if (typeof a == "function") {
        const g = await a();
        if (g && g.success) {
          g.currentVersion && c(g.currentVersion), g.latestVersion && m(g.latestVersion);
          const B = !!g.updateAvailable;
          h(B), o && o(B), g.releaseNotes && z(g.releaseNotes), g.releaseUrl && P(g.releaseUrl), g.downloadUrl && q(g.downloadUrl);
        }
      }
    } catch (g) {
      console.warn("Update check warning:", g);
    } finally {
      S(!1);
    }
  };
  ce(() => {
    Y();
    const g = 60 * 60 * 1e3, B = setInterval(() => {
      Y();
    }, g);
    return () => {
      clearInterval(B), C.current && clearInterval(C.current);
    };
  }, []);
  const te = () => {
    C.current && clearInterval(C.current), C.current = setInterval(async () => {
      try {
        if (typeof f == "function") {
          const g = await f();
          g && g.success && (g.progress !== void 0 && X(g.progress), g.status === "downloading" ? U("downloading") : g.status === "done" ? (U("done"), X(100), ne("Download complete! Installing update & restarting app..."), clearInterval(C.current), C.current = null, setTimeout(() => {
            try {
              window.close();
            } catch {
            }
          }, 1800)) : g.status === "error" && (U("error"), $(g.error || "Failed to download update file."), L(!1), clearInterval(C.current), C.current = null));
        }
      } catch (g) {
        console.error("Progress polling error:", g);
      }
    }, 500);
  }, oe = async () => {
    L(!0), U("downloading"), X(0), $(""), ne("Starting update download...");
    try {
      if (typeof l == "function") {
        const g = await l();
        g && g.success ? te() : ((N || I) && window.open(N || I, "_blank"), U("error"), $((g == null ? void 0 : g.error) || "Could not initiate in-app update."), L(!1));
      }
    } catch {
      (N || I) && window.open(N || I, "_blank"), U("error"), $("In-app download failed. Opening browser download page..."), L(!1);
    }
  }, V = D ? /* @__PURE__ */ e.jsx(
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
                d ? /* @__PURE__ */ e.jsx(je, { size: 22, color: "#02658b" }) : /* @__PURE__ */ e.jsx(Rr, { size: 22, color: "#10b981" }),
                /* @__PURE__ */ e.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: d ? "Software Update Available" : "System Up to Date" })
              ] }),
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => O(!1),
                  style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" },
                  children: /* @__PURE__ */ e.jsx(J, { size: 20 })
                }
              )
            ] }),
            /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "1.25rem" }, children: [
              d ? /* @__PURE__ */ e.jsxs("div", { children: [
                /* @__PURE__ */ e.jsxs("div", { style: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.75rem", marginBottom: "1rem" }, children: [
                  /* @__PURE__ */ e.jsxs("div", { style: { background: "#f8fafc", border: "1.5px solid #cbd5e1", borderRadius: "8px", padding: "0.85rem", textAlign: "center" }, children: [
                    /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#64748b", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Current Version" }),
                    /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "1.15rem", fontWeight: 700, color: "#0f172a" }, children: [
                      "v",
                      i
                    ] })
                  ] }),
                  /* @__PURE__ */ e.jsxs("div", { style: { background: "#e5f3f7", border: "1.5px solid #02658b", borderRadius: "8px", padding: "0.85rem", textAlign: "center" }, children: [
                    /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", fontWeight: 600, color: "#02658b", textTransform: "uppercase", marginBottom: "0.25rem" }, children: "Update Version" }),
                    /* @__PURE__ */ e.jsxs("div", { style: { fontSize: "1.15rem", fontWeight: 700, color: "#02658b" }, children: [
                      "v",
                      p
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
                  /* @__PURE__ */ e.jsx(Ge, { size: 18, style: { flexShrink: 0 } }),
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
                      i
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
                  onClick: Y,
                  disabled: _ || A,
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
                    cursor: _ || A ? "not-allowed" : "pointer",
                    opacity: _ || A ? 0.6 : 1
                  },
                  children: [
                    /* @__PURE__ */ e.jsx(Cr, { size: 14, className: _ ? "spin" : "" }),
                    /* @__PURE__ */ e.jsx("span", { children: _ ? "Checking..." : "Check Again" })
                  ]
                }
              ),
              d && /* @__PURE__ */ e.jsxs(
                "button",
                {
                  type: "button",
                  onClick: oe,
                  disabled: A,
                  style: {
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    padding: "0.5rem 1.1rem",
                    borderRadius: "6px",
                    background: A ? "#64748b" : "#02658b",
                    border: "none",
                    color: "#ffffff",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    cursor: A ? "not-allowed" : "pointer"
                  },
                  children: [
                    A ? /* @__PURE__ */ e.jsx(Se, { size: 16, className: "spin" }) : /* @__PURE__ */ e.jsx(je, { size: 16 }),
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
        onClick: () => O(!0),
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
            i
          ] }),
          d && /* @__PURE__ */ e.jsx(
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
        onClick: () => O(!0),
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
              i
            ] })
          ] }),
          d ? /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.35rem" }, children: [
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
}, Xr = ({ onToggleMobileMenu: t, user: o, onLogout: a }) => {
  var z;
  const [l, f] = R(!1), [i, c] = R(!1), [p, m] = R(!1), d = de(null), h = () => {
    c(!0), setTimeout(() => {
      f(!1), c(!1);
    }, 240);
  }, k = () => {
    l ? h() : (f(!0), c(!1));
  };
  return ce(() => {
    const I = (P) => {
      P.target && P.target.closest && P.target.closest(".version-update-modal-portal") || d.current && !d.current.contains(P.target) && l && !i && h();
    };
    return document.addEventListener("mousedown", I), () => document.removeEventListener("mousedown", I);
  }, [l, i]), /* @__PURE__ */ e.jsx(
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
              children: /* @__PURE__ */ e.jsx(Fr, { size: 20 })
            }
          ),
          /* @__PURE__ */ e.jsx("h2", { style: { fontSize: "1rem", fontWeight: 600, color: "#0f172a", margin: 0 }, children: "Admin Portal" })
        ] }),
        /* @__PURE__ */ e.jsx("div", { style: { display: "flex", alignItems: "center", gap: "0.85rem" }, children: o && /* @__PURE__ */ e.jsxs("div", { className: "profile-dropdown-wrapper", ref: d, style: { position: "relative" }, children: [
          /* @__PURE__ */ e.jsx(
            "button",
            {
              type: "button",
              onClick: k,
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
                    /* @__PURE__ */ e.jsx(zr, { size: 18 }),
                    p && /* @__PURE__ */ e.jsx(
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
          l && /* @__PURE__ */ e.jsxs(
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
                  /* @__PURE__ */ e.jsx("div", { style: { fontSize: "0.75rem", color: "#64748b" }, children: ((z = o.roles) == null ? void 0 : z.join(", ")) || "User" })
                ] }),
                /* @__PURE__ */ e.jsx("div", { children: /* @__PURE__ */ e.jsx(Ur, { position: "inline", onUpdateStatusChange: m }) }),
                /* @__PURE__ */ e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => {
                      h(), a && a();
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
                      /* @__PURE__ */ e.jsx(He, { size: 16 }),
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
}, Zr = ({ isMobileOpen: t, closeMobile: o, user: a, isSuperAdmin: l }) => {
  const f = {
    brandName: "Academia Platform",
    primaryColor: "#02658b",
    sidebarBg: "#ffffff"
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
          background: f.sidebarBg,
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
                    background: f.primaryColor,
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
              /* @__PURE__ */ e.jsx("span", { style: { fontSize: "1.15rem", fontWeight: 800, color: "#0f172a" }, children: f.brandName })
            ] }),
            t && /* @__PURE__ */ e.jsx("button", { onClick: o, style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" }, children: /* @__PURE__ */ e.jsx(J, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e.jsxs("nav", { style: { display: "flex", flexDirection: "column", gap: "0.4rem" }, children: [
            /* @__PURE__ */ e.jsxs(
              Ve,
              {
                to: "/admin/users",
                onClick: o,
                className: ({ isActive: i }) => `nav-item ${i ? "active" : ""}`,
                style: ({ isActive: i }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "8px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  color: i ? "#02658b" : "#475569",
                  backgroundColor: i ? "#e5f3f7" : "transparent",
                  borderLeft: i ? "3.5px solid #02658b" : "3.5px solid transparent"
                }),
                children: [
                  /* @__PURE__ */ e.jsx(Ir, { size: 18 }),
                  /* @__PURE__ */ e.jsx("span", { children: "User & Role Manager" })
                ]
              }
            ),
            /* @__PURE__ */ e.jsxs(
              Ve,
              {
                to: "/admin/governance",
                onClick: o,
                className: ({ isActive: i }) => `nav-item ${i ? "active" : ""}`,
                style: ({ isActive: i }) => ({
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.65rem 0.85rem",
                  borderRadius: "8px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  color: i ? "#02658b" : "#475569",
                  backgroundColor: i ? "#e5f3f7" : "transparent",
                  borderLeft: i ? "3.5px solid #02658b" : "3.5px solid transparent"
                }),
                children: [
                  /* @__PURE__ */ e.jsx(fe, { size: 18 }),
                  /* @__PURE__ */ e.jsx("span", { children: "Admin Governance" })
                ]
              }
            )
          ] })
        ] })
      }
    )
  ] });
}, Qr = ({ username: t, role: o, email: a, onLogout: l, onSettingsClick: f }) => {
  const [i, c] = R(!1), p = de(null);
  return ce(() => {
    const m = (d) => {
      p.current && !p.current.contains(d.target) && c(!1);
    };
    return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
  }, []), /* @__PURE__ */ e.jsxs("div", { ref: p, style: { position: "relative", display: "inline-block" }, children: [
    /* @__PURE__ */ e.jsxs(
      "button",
      {
        type: "button",
        onClick: () => c(!i),
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
          /* @__PURE__ */ e.jsx(Er, { size: 14, color: "#64748b" })
        ]
      }
    ),
    i && /* @__PURE__ */ e.jsxs(
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
          a && /* @__PURE__ */ e.jsxs("div", { style: { padding: "0.5rem 0.85rem", borderBottom: "1px solid #f1f5f9", fontSize: "0.75rem", color: "#64748b" }, children: [
            "Signed in as ",
            /* @__PURE__ */ e.jsx("strong", { style: { color: "#0f172a" }, children: a })
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
                /* @__PURE__ */ e.jsx(_r, { size: 14 }),
                /* @__PURE__ */ e.jsx("span", { children: "Settings" })
              ]
            }
          ),
          /* @__PURE__ */ e.jsxs(
            "button",
            {
              type: "button",
              onClick: () => {
                c(!1), l && l();
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
                /* @__PURE__ */ e.jsx(He, { size: 14 }),
                /* @__PURE__ */ e.jsx("span", { children: "Sign Out" })
              ]
            }
          )
        ]
      }
    )
  ] });
}, en = ({
  isOpen: t,
  currentVersion: o,
  latestVersion: a,
  onClose: l,
  onUpdateClick: f,
  downloading: i,
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
            /* @__PURE__ */ e.jsx("button", { type: "button", onClick: l, style: { background: "none", border: "none", cursor: "pointer", color: "#64748b" }, children: /* @__PURE__ */ e.jsx(J, { size: 20 }) })
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
                a
              ] })
            ] })
          ] }),
          i && /* @__PURE__ */ e.jsxs("div", { style: { marginBottom: "1rem" }, children: [
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
            /* @__PURE__ */ e.jsx("button", { type: "button", onClick: l, style: { padding: "0.45rem 0.85rem", borderRadius: "6px", background: "#ffffff", border: "1.5px solid #cbd5e1", cursor: "pointer" }, children: "Cancel" }),
            /* @__PURE__ */ e.jsx("button", { type: "button", onClick: f, disabled: i, style: { padding: "0.45rem 1rem", borderRadius: "6px", background: "#02658b", color: "#ffffff", border: "none", fontWeight: 600, cursor: "pointer" }, children: i ? "Downloading..." : "Update Now" })
          ] })
        ]
      }
    )
  }
) : null, rn = ({ progress: t = 0, statusText: o }) => /* @__PURE__ */ e.jsxs("div", { style: { background: "#f8fafc", border: "1px solid #cbd5e1", padding: "0.85rem", borderRadius: "8px" }, children: [
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
] }), nn = ({ columns: t, data: o, loading: a, emptyMessage: l = "No matching records found." }) => /* @__PURE__ */ e.jsx(
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
      /* @__PURE__ */ e.jsx("thead", { children: /* @__PURE__ */ e.jsx("tr", { style: { background: "#e5f3f7", borderBottom: "1.5px solid #cbd5e1", color: "#0f172a", fontWeight: 700 }, children: t.map((f, i) => /* @__PURE__ */ e.jsx(
        "th",
        {
          style: {
            padding: "1.05rem 1rem",
            width: f.width,
            textAlign: f.align || "left",
            borderRight: i === t.length - 1 ? "none" : "1px solid #cbd5e1"
          },
          children: f.header
        },
        i
      )) }) }),
      /* @__PURE__ */ e.jsx("tbody", { children: a ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: t.length, style: { padding: "3rem", textAlign: "center", color: "#64748b" }, children: "Loading table data..." }) }) : !o || o.length === 0 ? /* @__PURE__ */ e.jsx("tr", { children: /* @__PURE__ */ e.jsx("td", { colSpan: t.length, style: { padding: "3rem", textAlign: "center", color: "#64748b" }, children: l }) }) : o.map((f, i) => /* @__PURE__ */ e.jsx(
        "tr",
        {
          style: {
            borderBottom: i === o.length - 1 ? "none" : "1px solid #e2e8f0",
            background: "#FFFFFF",
            transition: "background 0.15s"
          },
          children: t.map((c, p) => /* @__PURE__ */ e.jsx(
            "td",
            {
              style: {
                padding: "1.05rem 1rem",
                color: "#0f172a",
                textAlign: c.align || "left",
                borderRight: p === t.length - 1 ? "none" : "1px solid #e2e8f0"
              },
              children: c.render ? c.render(f, i) : f[c.accessor]
            },
            p
          ))
        },
        i
      )) })
    ] }) })
  }
), tn = ({
  currentPage: t = 1,
  pageSize: o = 10,
  totalItems: a = 0,
  onPageChange: l,
  onPageSizeChange: f,
  pageSizeOptions: i = [10, 20, 30, 50]
}) => {
  const c = Math.max(1, Math.ceil(a / o)), p = (d) => {
    f && f(d);
  }, m = (d) => {
    l && d >= 1 && d <= c && l(d);
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
                onChange: (d) => p(Number(d.target.value)),
                style: {
                  background: "#FFFFFF",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "0.375rem",
                  padding: "0.2rem 0.45rem",
                  fontSize: "0.82rem",
                  color: "#0f172a",
                  cursor: "pointer"
                },
                children: i.map((d) => /* @__PURE__ */ e.jsxs("option", { value: d, children: [
                  d,
                  " ▾"
                ] }, d))
              }
            )
          ] }),
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", alignItems: "center", gap: "0.35rem" }, children: [
            /* @__PURE__ */ e.jsx("span", { children: "Page #" }),
            /* @__PURE__ */ e.jsx(
              "select",
              {
                value: t,
                onChange: (d) => m(Number(d.target.value)),
                style: {
                  background: "#FFFFFF",
                  border: "1.5px solid #cbd5e1",
                  borderRadius: "0.375rem",
                  padding: "0.2rem 0.45rem",
                  fontSize: "0.82rem",
                  color: "#0f172a",
                  cursor: "pointer"
                },
                children: Array.from({ length: c }, (d, h) => h + 1).map((d) => /* @__PURE__ */ e.jsxs("option", { value: d, children: [
                  d < 10 ? `0${d}` : d,
                  " ▾"
                ] }, d))
              }
            )
          ] })
        ] })
      ]
    }
  );
}, on = ({
  children: t,
  variant: o = "primary",
  // 'primary' | 'secondary' | 'danger' | 'outline'
  size: a = "md",
  // 'sm' | 'md' | 'lg'
  loading: l = !1,
  disabled: f = !1,
  icon: i,
  onClick: c,
  type: p = "button",
  fullWidth: m = !1,
  style: d = {}
}) => {
  const h = {
    primary: { bg: "#02658b", color: "#ffffff", border: "none" },
    secondary: { bg: "#f1f5f9", color: "#0f172a", border: "1px solid #cbd5e1" },
    danger: { bg: "#ef4444", color: "#ffffff", border: "none" },
    outline: { bg: "#ffffff", color: "#02658b", border: "1.5px solid #02658b" }
  }[o] || { bg: "#02658b", color: "#ffffff", border: "none" }, k = {
    sm: "0.3rem 0.6rem",
    md: "0.45rem 0.95rem",
    lg: "0.65rem 1.3rem"
  }[a] || "0.45rem 0.95rem";
  return /* @__PURE__ */ e.jsxs(
    "button",
    {
      type: p,
      onClick: c,
      disabled: f || l,
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
        fontSize: a === "sm" ? "0.78rem" : a === "lg" ? "1rem" : "0.85rem",
        fontWeight: 600,
        cursor: f || l ? "not-allowed" : "pointer",
        opacity: f || l ? 0.6 : 1,
        width: m ? "100%" : "auto",
        transition: "all 0.15s ease",
        ...d
      },
      children: [
        l ? /* @__PURE__ */ e.jsx(Se, { size: 16, className: "orion-spin" }) : i ? /* @__PURE__ */ e.jsx(i, { size: 16 }) : null,
        /* @__PURE__ */ e.jsx("span", { children: t })
      ]
    }
  );
}, sn = ({
  value: t,
  onChange: o,
  placeholder: a = "Search by Name, Role, Email...",
  roleFilter: l = "All",
  onRoleFilterChange: f,
  rolesList: i = ["All", "Super Admin", "Admin", "Teacher", "Student", "Parent"]
}) => {
  const [c, p] = R(!1), m = de(null);
  return ce(() => {
    const d = (h) => {
      m.current && !m.current.contains(h.target) && p(!1);
    };
    return document.addEventListener("mousedown", d), () => document.removeEventListener("mousedown", d);
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
          /* @__PURE__ */ e.jsx(Wr, { size: 18, color: "#64748b" }),
          /* @__PURE__ */ e.jsx(
            "input",
            {
              type: "text",
              value: t,
              onChange: (d) => o(d.target.value),
              placeholder: a,
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
          onClick: () => p(!c),
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.4rem",
            width: "42px",
            height: "42px",
            borderRadius: "9px",
            border: `1.5px solid ${l !== "All" ? "#02658b" : "#cbd5e1"}`,
            background: l !== "All" ? "#e5f3f7" : "#FFFFFF",
            color: l !== "All" ? "#02658b" : "#334155",
            cursor: "pointer"
          },
          title: "Filter by Role",
          children: /* @__PURE__ */ e.jsx(Tr, { size: 18 })
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
            i.map((d) => /* @__PURE__ */ e.jsx(
              "button",
              {
                type: "button",
                onClick: () => {
                  f(d), p(!1);
                },
                style: {
                  textAlign: "left",
                  padding: "0.35rem 0.6rem",
                  fontSize: "0.85rem",
                  background: l === d ? "#000000" : "transparent",
                  color: l === d ? "#FFFFFF" : "#0f172a",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontWeight: l === d ? 600 : 400
                },
                children: d
              },
              d
            ))
          ]
        }
      )
    ] })
  ] });
}, ln = ({ activeCount: t = 0, onClick: o, label: a = "Filter" }) => /* @__PURE__ */ e.jsxs(
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
      /* @__PURE__ */ e.jsx(Pr, { size: 15, color: t > 0 ? "#02658b" : "#64748b" }),
      /* @__PURE__ */ e.jsx("span", { children: a }),
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
), an = ({
  value: t = "",
  onChange: o,
  maxLength: a = 11,
  placeholder: l = "03001234567",
  disabled: f = !1,
  error: i = "",
  label: c = "Phone Number"
}) => {
  const p = (m) => {
    const h = m.target.value.replace(/\D/g, "").slice(0, a);
    o(h);
  };
  return /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.35rem", width: "100%" }, children: [
    c && /* @__PURE__ */ e.jsx("label", { style: { fontSize: "0.82rem", fontWeight: 600, color: "#334155" }, children: c }),
    /* @__PURE__ */ e.jsxs("div", { style: { position: "relative", display: "flex", alignItems: "center" }, children: [
      /* @__PURE__ */ e.jsx(
        "input",
        {
          type: "tel",
          value: t,
          onChange: p,
          maxLength: a,
          placeholder: l,
          disabled: f,
          style: {
            width: "100%",
            padding: "0.45rem 3rem 0.45rem 0.75rem",
            borderRadius: "6px",
            border: `1.5px solid ${i ? "#ef4444" : "#cbd5e1"}`,
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
            color: t.length >= a ? "#02658b" : "#94a3b8"
          },
          children: [
            t.length,
            "/",
            a
          ]
        }
      )
    ] }),
    i && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.75rem", color: "#ef4444" }, children: i })
  ] });
}, dn = ({
  label: t,
  value: o,
  onChange: a,
  options: l = [],
  // [{ label: 'Option 1', value: '1' }]
  disabled: f = !1,
  error: i = "",
  placeholder: c = "Select option..."
}) => /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", flexDirection: "column", gap: "0.35rem", width: "100%" }, children: [
  t && /* @__PURE__ */ e.jsx("label", { style: { fontSize: "0.82rem", fontWeight: 600, color: "#334155" }, children: t }),
  /* @__PURE__ */ e.jsxs(
    "select",
    {
      value: o,
      onChange: (p) => a(p.target.value),
      disabled: f,
      style: {
        width: "100%",
        padding: "0.48rem 0.75rem",
        borderRadius: "6px",
        border: `1.5px solid ${i ? "#ef4444" : "#cbd5e1"}`,
        fontSize: "0.85rem",
        color: "#0f172a",
        backgroundColor: "#ffffff",
        outline: "none"
      },
      children: [
        c && /* @__PURE__ */ e.jsx("option", { value: "", children: c }),
        l.map((p, m) => /* @__PURE__ */ e.jsx("option", { value: typeof p == "object" ? p.value : p, children: typeof p == "object" ? p.label : p }, m))
      ]
    }
  ),
  i && /* @__PURE__ */ e.jsx("span", { style: { fontSize: "0.75rem", color: "#ef4444" }, children: i })
] }), cn = ({
  isOpen: t,
  title: o = "User Form",
  onClose: a,
  onSubmit: l,
  children: f,
  submitText: i = "Save Changes",
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
        onClick: (p) => p.stopPropagation(),
        children: [
          /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem", borderBottom: "1px solid #e2e8f0", paddingBottom: "0.75rem" }, children: [
            /* @__PURE__ */ e.jsx("h3", { style: { margin: 0, fontSize: "1.1rem", fontWeight: 700, color: "#0f172a" }, children: o }),
            /* @__PURE__ */ e.jsx("button", { type: "button", onClick: a, style: { background: "none", border: "none", color: "#64748b", cursor: "pointer" }, children: /* @__PURE__ */ e.jsx(J, { size: 20 }) })
          ] }),
          /* @__PURE__ */ e.jsxs("form", { onSubmit: l, children: [
            /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "1.5rem" }, children: f }),
            /* @__PURE__ */ e.jsxs("div", { style: { display: "flex", gap: "0.75rem", justifyContent: "flex-end" }, children: [
              /* @__PURE__ */ e.jsx(
                "button",
                {
                  type: "button",
                  onClick: a,
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
                  children: c ? "Saving..." : i
                }
              )
            ] })
          ] })
        ]
      }
    )
  }
) : null, fn = ({ title: t = "Sign In", subtitle: o = "Welcome back! Please enter your credentials.", logo: a, onSubmit: l, children: f, loading: i }) => /* @__PURE__ */ e.jsxs(
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
        a && /* @__PURE__ */ e.jsx("div", { style: { marginBottom: "0.75rem" }, children: a }),
        /* @__PURE__ */ e.jsx("h2", { style: { margin: 0, fontSize: "1.4rem", fontWeight: 800, color: "#0f172a" }, children: t }),
        o && /* @__PURE__ */ e.jsx("p", { style: { margin: "0.35rem 0 0 0", fontSize: "0.85rem", color: "#64748b" }, children: o })
      ] }),
      /* @__PURE__ */ e.jsxs("form", { onSubmit: l, children: [
        /* @__PURE__ */ e.jsx("div", { style: { display: "flex", flexDirection: "column", gap: "1.1rem", marginBottom: "1.5rem" }, children: f }),
        /* @__PURE__ */ e.jsx(
          "button",
          {
            type: "submit",
            disabled: i,
            style: {
              width: "100%",
              padding: "0.65rem",
              borderRadius: "6px",
              background: "#02658b",
              color: "#ffffff",
              border: "none",
              fontSize: "0.9rem",
              fontWeight: 700,
              cursor: i ? "not-allowed" : "pointer",
              opacity: i ? 0.6 : 1
            },
            children: i ? "Authenticating..." : "Sign In"
          }
        )
      ] })
    ]
  }
);
export {
  Kr as AlertDialog,
  on as Button,
  Ar as ConfirmModal,
  Hr as CounterCard,
  qr as CustomLoader,
  nn as DataGrid,
  ln as FilterButton,
  dn as FormSelect,
  Yr as GlobalPermissionsBadge,
  fn as LoginForm,
  Xr as Navbar,
  tn as Pagination,
  an as PhoneInput,
  Qr as ProfileDropdown,
  sn as SearchBar,
  Lr as SeverityPill,
  Zr as Sidebar,
  Gr as StatCard,
  Mr as StatusPill,
  en as UpdateDialog,
  rn as UpdateProgressBar,
  Jr as UserDetailsCard,
  cn as UserDialogModal,
  Ur as VersionBadge
};
