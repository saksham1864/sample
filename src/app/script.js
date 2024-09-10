(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
  new MutationObserver((l) => {
    for (const o of l)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && r(i);
  }).observe(document, {
    childList: !0,
    subtree: !0,
  });
  function n(l) {
    const o = {};
    return (
      l.integrity && (o.integrity = l.integrity),
      l.referrerPolicy && (o.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : l.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function r(l) {
    if (l.ep) return;
    l.ep = !0;
    const o = n(l);
    fetch(l.href, o);
  }
})();
function dc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Gu = {
    exports: {},
  },
  rl = {},
  Ku = {
    exports: {},
  },
  j = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Kn = Symbol.for("react.element"),
  pc = Symbol.for("react.portal"),
  mc = Symbol.for("react.fragment"),
  hc = Symbol.for("react.strict_mode"),
  vc = Symbol.for("react.profiler"),
  yc = Symbol.for("react.provider"),
  gc = Symbol.for("react.context"),
  wc = Symbol.for("react.forward_ref"),
  xc = Symbol.for("react.suspense"),
  Sc = Symbol.for("react.memo"),
  kc = Symbol.for("react.lazy"),
  Ii = Symbol.iterator;
function Ec(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ii && e[Ii]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var Xu = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ju = Object.assign,
  qu = {};
function on(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qu),
    (this.updater = n || Xu);
}
on.prototype.isReactComponent = {};
on.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
on.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bu() {}
bu.prototype = on.prototype;
function $o(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = qu),
    (this.updater = n || Xu);
}
var Bo = ($o.prototype = new bu());
Bo.constructor = $o;
Ju(Bo, on.prototype);
Bo.isPureReactComponent = !0;
var Hi = Array.isArray,
  es = Object.prototype.hasOwnProperty,
  Vo = {
    current: null,
  },
  ts = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function ns(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (i = t.ref),
    t.key !== void 0 && (o = "" + t.key),
    t))
      es.call(t, r) && !ts.hasOwnProperty(r) && (l[r] = t[r]);
  var u = arguments.length - 2;
  if (u === 1) l.children = n;
  else if (1 < u) {
    for (var s = Array(u), c = 0; c < u; c++) s[c] = arguments[c + 2];
    l.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((u = e.defaultProps), u)) l[r] === void 0 && (l[r] = u[r]);
  return {
    $$typeof: Kn,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Vo.current,
  };
}
function Cc(e, t) {
  return {
    $$typeof: Kn,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Qo(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Kn;
}
function _c(e) {
  var t = {
    "=": "=0",
    ":": "=2",
  };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Ui = /\/+/g;
function El(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? _c("" + e.key)
    : t.toString(36);
}
function wr(e, t, n, r, l) {
  var o = typeof e;
  (o === "undefined" || o === "boolean") && (e = null);
  var i = !1;
  if (e === null) i = !0;
  else
    switch (o) {
      case "string":
      case "number":
        i = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Kn:
          case pc:
            i = !0;
        }
    }
  if (i)
    return (
      (i = e),
      (l = l(i)),
      (e = r === "" ? "." + El(i, 0) : r),
      Hi(l)
        ? ((n = ""),
          e != null && (n = e.replace(Ui, "$&/") + "/"),
          wr(l, t, n, "", function (c) {
            return c;
          }))
        : l != null &&
          (Qo(l) &&
            (l = Cc(
              l,
              n +
                (!l.key || (i && i.key === l.key)
                  ? ""
                  : ("" + l.key).replace(Ui, "$&/") + "/") +
                e
            )),
          t.push(l)),
      1
    );
  if (((i = 0), (r = r === "" ? "." : r + ":"), Hi(e)))
    for (var u = 0; u < e.length; u++) {
      o = e[u];
      var s = r + El(o, u);
      i += wr(o, t, n, s, l);
    }
  else if (((s = Ec(e)), typeof s == "function"))
    for (e = s.call(e), u = 0; !(o = e.next()).done; )
      (o = o.value), (s = r + El(o, u++)), (i += wr(o, t, n, s, l));
  else if (o === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return i;
}
function nr(e, t, n) {
  if (e == null) return e;
  var r = [],
    l = 0;
  return (
    wr(e, r, "", "", function (o) {
      return t.call(n, o, l++);
    }),
    r
  );
}
function Nc(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var se = {
    current: null,
  },
  xr = {
    transition: null,
  },
  Pc = {
    ReactCurrentDispatcher: se,
    ReactCurrentBatchConfig: xr,
    ReactCurrentOwner: Vo,
  };
function rs() {
  throw Error("act(...) is not supported in production builds of React.");
}
j.Children = {
  map: nr,
  forEach: function (e, t, n) {
    nr(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      nr(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      nr(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Qo(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
j.Component = on;
j.Fragment = mc;
j.Profiler = vc;
j.PureComponent = $o;
j.StrictMode = hc;
j.Suspense = xc;
j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pc;
j.act = rs;
j.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ju({}, e.props),
    l = e.key,
    o = e.ref,
    i = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (i = Vo.current)),
      t.key !== void 0 && (l = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var u = e.type.defaultProps;
    for (s in t)
      es.call(t, s) &&
        !ts.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && u !== void 0 ? u[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    u = Array(s);
    for (var c = 0; c < s; c++) u[c] = arguments[c + 2];
    r.children = u;
  }
  return {
    $$typeof: Kn,
    type: e.type,
    key: l,
    ref: o,
    props: r,
    _owner: i,
  };
};
j.createContext = function (e) {
  return (
    (e = {
      $$typeof: gc,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = {
      $$typeof: yc,
      _context: e,
    }),
    (e.Consumer = e)
  );
};
j.createElement = ns;
j.createFactory = function (e) {
  var t = ns.bind(null, e);
  return (t.type = e), t;
};
j.createRef = function () {
  return {
    current: null,
  };
};
j.forwardRef = function (e) {
  return {
    $$typeof: wc,
    render: e,
  };
};
j.isValidElement = Qo;
j.lazy = function (e) {
  return {
    $$typeof: kc,
    _payload: {
      _status: -1,
      _result: e,
    },
    _init: Nc,
  };
};
j.memo = function (e, t) {
  return {
    $$typeof: Sc,
    type: e,
    compare: t === void 0 ? null : t,
  };
};
j.startTransition = function (e) {
  var t = xr.transition;
  xr.transition = {};
  try {
    e();
  } finally {
    xr.transition = t;
  }
};
j.unstable_act = rs;
j.useCallback = function (e, t) {
  return se.current.useCallback(e, t);
};
j.useContext = function (e) {
  return se.current.useContext(e);
};
j.useDebugValue = function () {};
j.useDeferredValue = function (e) {
  return se.current.useDeferredValue(e);
};
j.useEffect = function (e, t) {
  return se.current.useEffect(e, t);
};
j.useId = function () {
  return se.current.useId();
};
j.useImperativeHandle = function (e, t, n) {
  return se.current.useImperativeHandle(e, t, n);
};
j.useInsertionEffect = function (e, t) {
  return se.current.useInsertionEffect(e, t);
};
j.useLayoutEffect = function (e, t) {
  return se.current.useLayoutEffect(e, t);
};
j.useMemo = function (e, t) {
  return se.current.useMemo(e, t);
};
j.useReducer = function (e, t, n) {
  return se.current.useReducer(e, t, n);
};
j.useRef = function (e) {
  return se.current.useRef(e);
};
j.useState = function (e) {
  return se.current.useState(e);
};
j.useSyncExternalStore = function (e, t, n) {
  return se.current.useSyncExternalStore(e, t, n);
};
j.useTransition = function () {
  return se.current.useTransition();
};
j.version = "18.3.1";
Ku.exports = j;
var re = Ku.exports;
const Et = dc(re);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zc = re,
  Mc = Symbol.for("react.element"),
  jc = Symbol.for("react.fragment"),
  Lc = Object.prototype.hasOwnProperty,
  Tc = zc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Rc = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0,
  };
function ls(e, t, n) {
  var r,
    l = {},
    o = null,
    i = null;
  n !== void 0 && (o = "" + n),
    t.key !== void 0 && (o = "" + t.key),
    t.ref !== void 0 && (i = t.ref);
  for (r in t) Lc.call(t, r) && !Rc.hasOwnProperty(r) && (l[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) l[r] === void 0 && (l[r] = t[r]);
  return {
    $$typeof: Mc,
    type: e,
    key: o,
    ref: i,
    props: l,
    _owner: Tc.current,
  };
}
rl.Fragment = jc;
rl.jsx = ls;
rl.jsxs = ls;
Gu.exports = rl;
var k = Gu.exports,
  os = {
    exports: {},
  },
  we = {},
  is = {
    exports: {},
  },
  us = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function (e) {
  function t(C, z) {
    var M = C.length;
    C.push(z);
    e: for (; 0 < M; ) {
      var V = (M - 1) >>> 1,
        K = C[V];
      if (0 < l(K, z)) (C[V] = z), (C[M] = K), (M = V);
      else break e;
    }
  }
  function n(C) {
    return C.length === 0 ? null : C[0];
  }
  function r(C) {
    if (C.length === 0) return null;
    var z = C[0],
      M = C.pop();
    if (M !== z) {
      C[0] = M;
      e: for (var V = 0, K = C.length, er = K >>> 1; V < er; ) {
        var vt = 2 * (V + 1) - 1,
          kl = C[vt],
          yt = vt + 1,
          tr = C[yt];
        if (0 > l(kl, M))
          yt < K && 0 > l(tr, kl)
            ? ((C[V] = tr), (C[yt] = M), (V = yt))
            : ((C[V] = kl), (C[vt] = M), (V = vt));
        else if (yt < K && 0 > l(tr, M)) (C[V] = tr), (C[yt] = M), (V = yt);
        else break e;
      }
    }
    return z;
  }
  function l(C, z) {
    var M = C.sortIndex - z.sortIndex;
    return M !== 0 ? M : C.id - z.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    e.unstable_now = function () {
      return o.now();
    };
  } else {
    var i = Date,
      u = i.now();
    e.unstable_now = function () {
      return i.now() - u;
    };
  }
  var s = [],
    c = [],
    h = 1,
    m = null,
    p = 3,
    g = !1,
    w = !1,
    x = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    f = typeof clearTimeout == "function" ? clearTimeout : null,
    a = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function d(C) {
    for (var z = n(c); z !== null; ) {
      if (z.callback === null) r(c);
      else if (z.startTime <= C)
        r(c), (z.sortIndex = z.expirationTime), t(s, z);
      else break;
      z = n(c);
    }
  }
  function v(C) {
    if (((x = !1), d(C), !w))
      if (n(s) !== null) (w = !0), xl(E);
      else {
        var z = n(c);
        z !== null && Sl(v, z.startTime - C);
      }
  }
  function E(C, z) {
    (w = !1), x && ((x = !1), f(P), (P = -1)), (g = !0);
    var M = p;
    try {
      for (
        d(z), m = n(s);
        m !== null && (!(m.expirationTime > z) || (C && !Pe()));

      ) {
        var V = m.callback;
        if (typeof V == "function") {
          (m.callback = null), (p = m.priorityLevel);
          var K = V(m.expirationTime <= z);
          (z = e.unstable_now()),
            typeof K == "function" ? (m.callback = K) : m === n(s) && r(s),
            d(z);
        } else r(s);
        m = n(s);
      }
      if (m !== null) var er = !0;
      else {
        var vt = n(c);
        vt !== null && Sl(v, vt.startTime - z), (er = !1);
      }
      return er;
    } finally {
      (m = null), (p = M), (g = !1);
    }
  }
  var _ = !1,
    N = null,
    P = -1,
    B = 5,
    L = -1;
  function Pe() {
    return !(e.unstable_now() - L < B);
  }
  function an() {
    if (N !== null) {
      var C = e.unstable_now();
      L = C;
      var z = !0;
      try {
        z = N(!0, C);
      } finally {
        z ? cn() : ((_ = !1), (N = null));
      }
    } else _ = !1;
  }
  var cn;
  if (typeof a == "function")
    cn = function () {
      a(an);
    };
  else if (typeof MessageChannel < "u") {
    var Fi = new MessageChannel(),
      fc = Fi.port2;
    (Fi.port1.onmessage = an),
      (cn = function () {
        fc.postMessage(null);
      });
  } else
    cn = function () {
      I(an, 0);
    };
  function xl(C) {
    (N = C), _ || ((_ = !0), cn());
  }
  function Sl(C, z) {
    P = I(function () {
      C(e.unstable_now());
    }, z);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (C) {
      C.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      w || g || ((w = !0), xl(E));
    }),
    (e.unstable_forceFrameRate = function (C) {
      0 > C || 125 < C
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (B = 0 < C ? Math.floor(1e3 / C) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return p;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (C) {
      switch (p) {
        case 1:
        case 2:
        case 3:
          var z = 3;
          break;
        default:
          z = p;
      }
      var M = p;
      p = z;
      try {
        return C();
      } finally {
        p = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (C, z) {
      switch (C) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          C = 3;
      }
      var M = p;
      p = C;
      try {
        return z();
      } finally {
        p = M;
      }
    }),
    (e.unstable_scheduleCallback = function (C, z, M) {
      var V = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? V + M : V))
          : (M = V),
        C)
      ) {
        case 1:
          var K = -1;
          break;
        case 2:
          K = 250;
          break;
        case 5:
          K = 1073741823;
          break;
        case 4:
          K = 1e4;
          break;
        default:
          K = 5e3;
      }
      return (
        (K = M + K),
        (C = {
          id: h++,
          callback: z,
          priorityLevel: C,
          startTime: M,
          expirationTime: K,
          sortIndex: -1,
        }),
        M > V
          ? ((C.sortIndex = M),
            t(c, C),
            n(s) === null &&
              C === n(c) &&
              (x ? (f(P), (P = -1)) : (x = !0), Sl(v, M - V)))
          : ((C.sortIndex = K), t(s, C), w || g || ((w = !0), xl(E))),
        C
      );
    }),
    (e.unstable_shouldYield = Pe),
    (e.unstable_wrapCallback = function (C) {
      var z = p;
      return function () {
        var M = p;
        p = z;
        try {
          return C.apply(this, arguments);
        } finally {
          p = M;
        }
      };
    });
})(us);
is.exports = us;
var Dc = is.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oc = re,
  ge = Dc;
function y(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var ss = new Set(),
  Tn = {};
function Lt(e, t) {
  qt(e, t), qt(e + "Capture", t);
}
function qt(e, t) {
  for (Tn[e] = t, e = 0; e < t.length; e++) ss.add(t[e]);
}
var Qe = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Kl = Object.prototype.hasOwnProperty,
  Fc =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Ai = {},
  Wi = {};
function Ic(e) {
  return Kl.call(Wi, e)
    ? !0
    : Kl.call(Ai, e)
    ? !1
    : Fc.test(e)
    ? (Wi[e] = !0)
    : ((Ai[e] = !0), !1);
}
function Hc(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function Uc(e, t, n, r) {
  if (t === null || typeof t > "u" || Hc(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function ae(e, t, n, r, l, o, i) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = l),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = i);
}
var ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ae(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  ee[t] = new ae(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  ee[e] = new ae(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  ee[e] = new ae(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    ee[e] = new ae(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  ee[e] = new ae(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  ee[e] = new ae(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  ee[e] = new ae(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  ee[e] = new ae(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Zo = /[\-:]([a-z])/g;
function Yo(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zo, Yo);
    ee[t] = new ae(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Zo, Yo);
    ee[t] = new ae(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Zo, Yo);
  ee[t] = new ae(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
ee.xlinkHref = new ae(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  ee[e] = new ae(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Go(e, t, n, r) {
  var l = ee.hasOwnProperty(t) ? ee[t] : null;
  (l !== null
    ? l.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (Uc(t, n, l, r) && (n = null),
    r || l === null
      ? Ic(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : l.mustUseProperty
      ? (e[l.propertyName] = n === null ? (l.type === 3 ? !1 : "") : n)
      : ((t = l.attributeName),
        (r = l.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((l = l.type),
            (n = l === 3 || (l === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Ke = Oc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  rr = Symbol.for("react.element"),
  Dt = Symbol.for("react.portal"),
  Ot = Symbol.for("react.fragment"),
  Ko = Symbol.for("react.strict_mode"),
  Xl = Symbol.for("react.profiler"),
  as = Symbol.for("react.provider"),
  cs = Symbol.for("react.context"),
  Xo = Symbol.for("react.forward_ref"),
  Jl = Symbol.for("react.suspense"),
  ql = Symbol.for("react.suspense_list"),
  Jo = Symbol.for("react.memo"),
  Je = Symbol.for("react.lazy"),
  fs = Symbol.for("react.offscreen"),
  $i = Symbol.iterator;
function fn(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = ($i && e[$i]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var W = Object.assign,
  Cl;
function wn(e) {
  if (Cl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cl = (t && t[1]) || "";
    }
  return (
    `
` +
    Cl +
    e
  );
}
var _l = !1;
function Nl(e, t) {
  if (!e || _l) return "";
  _l = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var l = c.stack.split(`
`),
          o = r.stack.split(`
`),
          i = l.length - 1,
          u = o.length - 1;
        1 <= i && 0 <= u && l[i] !== o[u];

      )
        u--;
      for (; 1 <= i && 0 <= u; i--, u--)
        if (l[i] !== o[u]) {
          if (i !== 1 || u !== 1)
            do
              if ((i--, u--, 0 > u || l[i] !== o[u])) {
                var s =
                  `
` + l[i].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= i && 0 <= u);
          break;
        }
    }
  } finally {
    (_l = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? wn(e) : "";
}
function Ac(e) {
  switch (e.tag) {
    case 5:
      return wn(e.type);
    case 16:
      return wn("Lazy");
    case 13:
      return wn("Suspense");
    case 19:
      return wn("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Nl(e.type, !1)), e;
    case 11:
      return (e = Nl(e.type.render, !1)), e;
    case 1:
      return (e = Nl(e.type, !0)), e;
    default:
      return "";
  }
}
function bl(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Ot:
      return "Fragment";
    case Dt:
      return "Portal";
    case Xl:
      return "Profiler";
    case Ko:
      return "StrictMode";
    case Jl:
      return "Suspense";
    case ql:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case cs:
        return (e.displayName || "Context") + ".Consumer";
      case as:
        return (e._context.displayName || "Context") + ".Provider";
      case Xo:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Jo:
        return (
          (t = e.displayName || null), t !== null ? t : bl(e.type) || "Memo"
        );
      case Je:
        (t = e._payload), (e = e._init);
        try {
          return bl(e(t));
        } catch {}
    }
  return null;
}
function Wc(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return bl(t);
    case 8:
      return t === Ko ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function ft(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function ds(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function $c(e) {
  var t = ds(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var l = n.get,
      o = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return l.call(this);
        },
        set: function (i) {
          (r = "" + i), o.call(this, i);
        },
      }),
      Object.defineProperty(e, t, {
        enumerable: n.enumerable,
      }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (i) {
          r = "" + i;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function lr(e) {
  e._valueTracker || (e._valueTracker = $c(e));
}
function ps(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = ds(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Lr(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function eo(e, t) {
  var n = t.checked;
  return W({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Bi(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = ft(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function ms(e, t) {
  (t = t.checked), t != null && Go(e, "checked", t, !1);
}
function to(e, t) {
  ms(e, t);
  var n = ft(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? no(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && no(e, t.type, ft(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function Vi(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function no(e, t, n) {
  (t !== "number" || Lr(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var xn = Array.isArray;
function Zt(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
    for (n = 0; n < e.length; n++)
      (l = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== l && (e[n].selected = l),
        l && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + ft(n), t = null, l = 0; l < e.length; l++) {
      if (e[l].value === n) {
        (e[l].selected = !0), r && (e[l].defaultSelected = !0);
        return;
      }
      t !== null || e[l].disabled || (t = e[l]);
    }
    t !== null && (t.selected = !0);
  }
}
function ro(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(y(91));
  return W({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Qi(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(y(92));
      if (xn(n)) {
        if (1 < n.length) throw Error(y(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = {
    initialValue: ft(n),
  };
}
function hs(e, t) {
  var n = ft(t.value),
    r = ft(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Zi(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function vs(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lo(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? vs(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var or,
  ys = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, l) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, l);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        or = or || document.createElement("div"),
          or.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = or.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function Rn(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var En = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Bc = ["Webkit", "ms", "Moz", "O"];
Object.keys(En).forEach(function (e) {
  Bc.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (En[t] = En[e]);
  });
});
function gs(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (En.hasOwnProperty(e) && En[e])
    ? ("" + t).trim()
    : t + "px";
}
function ws(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        l = gs(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : (e[n] = l);
    }
}
var Vc = W(
  {
    menuitem: !0,
  },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function oo(e, t) {
  if (t) {
    if (Vc[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(y(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(y(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(y(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(y(62));
  }
}
function io(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var uo = null;
function qo(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var so = null,
  Yt = null,
  Gt = null;
function Yi(e) {
  if ((e = qn(e))) {
    if (typeof so != "function") throw Error(y(280));
    var t = e.stateNode;
    t && ((t = sl(t)), so(e.stateNode, e.type, t));
  }
}
function xs(e) {
  Yt ? (Gt ? Gt.push(e) : (Gt = [e])) : (Yt = e);
}
function Ss() {
  if (Yt) {
    var e = Yt,
      t = Gt;
    if (((Gt = Yt = null), Yi(e), t)) for (e = 0; e < t.length; e++) Yi(t[e]);
  }
}
function ks(e, t) {
  return e(t);
}
function Es() {}
var Pl = !1;
function Cs(e, t, n) {
  if (Pl) return e(t, n);
  Pl = !0;
  try {
    return ks(e, t, n);
  } finally {
    (Pl = !1), (Yt !== null || Gt !== null) && (Es(), Ss());
  }
}
function Dn(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = sl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(y(231, t, typeof n));
  return n;
}
var ao = !1;
if (Qe)
  try {
    var dn = {};
    Object.defineProperty(dn, "passive", {
      get: function () {
        ao = !0;
      },
    }),
      window.addEventListener("test", dn, dn),
      window.removeEventListener("test", dn, dn);
  } catch {
    ao = !1;
  }
function Qc(e, t, n, r, l, o, i, u, s) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (h) {
    this.onError(h);
  }
}
var Cn = !1,
  Tr = null,
  Rr = !1,
  co = null,
  Zc = {
    onError: function (e) {
      (Cn = !0), (Tr = e);
    },
  };
function Yc(e, t, n, r, l, o, i, u, s) {
  (Cn = !1), (Tr = null), Qc.apply(Zc, arguments);
}
function Gc(e, t, n, r, l, o, i, u, s) {
  if ((Yc.apply(this, arguments), Cn)) {
    if (Cn) {
      var c = Tr;
      (Cn = !1), (Tr = null);
    } else throw Error(y(198));
    Rr || ((Rr = !0), (co = c));
  }
}
function Tt(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function _s(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function Gi(e) {
  if (Tt(e) !== e) throw Error(y(188));
}
function Kc(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = Tt(e)), t === null)) throw Error(y(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var l = n.return;
    if (l === null) break;
    var o = l.alternate;
    if (o === null) {
      if (((r = l.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (l.child === o.child) {
      for (o = l.child; o; ) {
        if (o === n) return Gi(l), e;
        if (o === r) return Gi(l), t;
        o = o.sibling;
      }
      throw Error(y(188));
    }
    if (n.return !== r.return) (n = l), (r = o);
    else {
      for (var i = !1, u = l.child; u; ) {
        if (u === n) {
          (i = !0), (n = l), (r = o);
          break;
        }
        if (u === r) {
          (i = !0), (r = l), (n = o);
          break;
        }
        u = u.sibling;
      }
      if (!i) {
        for (u = o.child; u; ) {
          if (u === n) {
            (i = !0), (n = o), (r = l);
            break;
          }
          if (u === r) {
            (i = !0), (r = o), (n = l);
            break;
          }
          u = u.sibling;
        }
        if (!i) throw Error(y(189));
      }
    }
    if (n.alternate !== r) throw Error(y(190));
  }
  if (n.tag !== 3) throw Error(y(188));
  return n.stateNode.current === n ? e : t;
}
function Ns(e) {
  return (e = Kc(e)), e !== null ? Ps(e) : null;
}
function Ps(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Ps(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var zs = ge.unstable_scheduleCallback,
  Ki = ge.unstable_cancelCallback,
  Xc = ge.unstable_shouldYield,
  Jc = ge.unstable_requestPaint,
  Q = ge.unstable_now,
  qc = ge.unstable_getCurrentPriorityLevel,
  bo = ge.unstable_ImmediatePriority,
  Ms = ge.unstable_UserBlockingPriority,
  Dr = ge.unstable_NormalPriority,
  bc = ge.unstable_LowPriority,
  js = ge.unstable_IdlePriority,
  ll = null,
  He = null;
function ef(e) {
  if (He && typeof He.onCommitFiberRoot == "function")
    try {
      He.onCommitFiberRoot(ll, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Te = Math.clz32 ? Math.clz32 : rf,
  tf = Math.log,
  nf = Math.LN2;
function rf(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((tf(e) / nf) | 0)) | 0;
}
var ir = 64,
  ur = 4194304;
function Sn(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function Or(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    l = e.suspendedLanes,
    o = e.pingedLanes,
    i = n & 268435455;
  if (i !== 0) {
    var u = i & ~l;
    u !== 0 ? (r = Sn(u)) : ((o &= i), o !== 0 && (r = Sn(o)));
  } else (i = n & ~l), i !== 0 ? (r = Sn(i)) : o !== 0 && (r = Sn(o));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & l) &&
    ((l = r & -r), (o = t & -t), l >= o || (l === 16 && (o & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Te(t)), (l = 1 << n), (r |= e[n]), (t &= ~l);
  return r;
}
function lf(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function of(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      l = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var i = 31 - Te(o),
      u = 1 << i,
      s = l[i];
    s === -1
      ? (!(u & n) || u & r) && (l[i] = lf(u, t))
      : s <= t && (e.expiredLanes |= u),
      (o &= ~u);
  }
}
function fo(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function Ls() {
  var e = ir;
  return (ir <<= 1), !(ir & 4194240) && (ir = 64), e;
}
function zl(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Xn(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Te(t)),
    (e[t] = n);
}
function uf(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var l = 31 - Te(n),
      o = 1 << l;
    (t[l] = 0), (r[l] = -1), (e[l] = -1), (n &= ~o);
  }
}
function ei(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Te(n),
      l = 1 << r;
    (l & t) | (e[r] & t) && (e[r] |= t), (n &= ~l);
  }
}
var R = 0;
function Ts(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Rs,
  ti,
  Ds,
  Os,
  Fs,
  po = !1,
  sr = [],
  rt = null,
  lt = null,
  ot = null,
  On = new Map(),
  Fn = new Map(),
  be = [],
  sf =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function Xi(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      rt = null;
      break;
    case "dragenter":
    case "dragleave":
      lt = null;
      break;
    case "mouseover":
    case "mouseout":
      ot = null;
      break;
    case "pointerover":
    case "pointerout":
      On.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Fn.delete(t.pointerId);
  }
}
function pn(e, t, n, r, l, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [l],
      }),
      t !== null && ((t = qn(t)), t !== null && ti(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      l !== null && t.indexOf(l) === -1 && t.push(l),
      e);
}
function af(e, t, n, r, l) {
  switch (t) {
    case "focusin":
      return (rt = pn(rt, e, t, n, r, l)), !0;
    case "dragenter":
      return (lt = pn(lt, e, t, n, r, l)), !0;
    case "mouseover":
      return (ot = pn(ot, e, t, n, r, l)), !0;
    case "pointerover":
      var o = l.pointerId;
      return On.set(o, pn(On.get(o) || null, e, t, n, r, l)), !0;
    case "gotpointercapture":
      return (
        (o = l.pointerId), Fn.set(o, pn(Fn.get(o) || null, e, t, n, r, l)), !0
      );
  }
  return !1;
}
function Is(e) {
  var t = xt(e.target);
  if (t !== null) {
    var n = Tt(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = _s(n)), t !== null)) {
          (e.blockedOn = t),
            Fs(e.priority, function () {
              Ds(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Sr(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = mo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (uo = r), n.target.dispatchEvent(r), (uo = null);
    } else return (t = qn(n)), t !== null && ti(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function Ji(e, t, n) {
  Sr(e) && n.delete(t);
}
function cf() {
  (po = !1),
    rt !== null && Sr(rt) && (rt = null),
    lt !== null && Sr(lt) && (lt = null),
    ot !== null && Sr(ot) && (ot = null),
    On.forEach(Ji),
    Fn.forEach(Ji);
}
function mn(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    po ||
      ((po = !0),
      ge.unstable_scheduleCallback(ge.unstable_NormalPriority, cf)));
}
function In(e) {
  function t(l) {
    return mn(l, e);
  }
  if (0 < sr.length) {
    mn(sr[0], e);
    for (var n = 1; n < sr.length; n++) {
      var r = sr[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    rt !== null && mn(rt, e),
      lt !== null && mn(lt, e),
      ot !== null && mn(ot, e),
      On.forEach(t),
      Fn.forEach(t),
      n = 0;
    n < be.length;
    n++
  )
    (r = be[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < be.length && ((n = be[0]), n.blockedOn === null); )
    Is(n), n.blockedOn === null && be.shift();
}
var Kt = Ke.ReactCurrentBatchConfig,
  Fr = !0;
function ff(e, t, n, r) {
  var l = R,
    o = Kt.transition;
  Kt.transition = null;
  try {
    (R = 1), ni(e, t, n, r);
  } finally {
    (R = l), (Kt.transition = o);
  }
}
function df(e, t, n, r) {
  var l = R,
    o = Kt.transition;
  Kt.transition = null;
  try {
    (R = 4), ni(e, t, n, r);
  } finally {
    (R = l), (Kt.transition = o);
  }
}
function ni(e, t, n, r) {
  if (Fr) {
    var l = mo(e, t, n, r);
    if (l === null) Hl(e, t, r, Ir, n), Xi(e, r);
    else if (af(l, e, t, n, r)) r.stopPropagation();
    else if ((Xi(e, r), t & 4 && -1 < sf.indexOf(e))) {
      for (; l !== null; ) {
        var o = qn(l);
        if (
          (o !== null && Rs(o),
          (o = mo(e, t, n, r)),
          o === null && Hl(e, t, r, Ir, n),
          o === l)
        )
          break;
        l = o;
      }
      l !== null && r.stopPropagation();
    } else Hl(e, t, r, null, n);
  }
}
var Ir = null;
function mo(e, t, n, r) {
  if (((Ir = null), (e = qo(r)), (e = xt(e)), e !== null))
    if (((t = Tt(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = _s(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (Ir = e), null;
}
function Hs(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (qc()) {
        case bo:
          return 1;
        case Ms:
          return 4;
        case Dr:
        case bc:
          return 16;
        case js:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var tt = null,
  ri = null,
  kr = null;
function Us() {
  if (kr) return kr;
  var e,
    t = ri,
    n = t.length,
    r,
    l = "value" in tt ? tt.value : tt.textContent,
    o = l.length;
  for (e = 0; e < n && t[e] === l[e]; e++);
  var i = n - e;
  for (r = 1; r <= i && t[n - r] === l[o - r]; r++);
  return (kr = l.slice(e, 1 < r ? 1 - r : void 0));
}
function Er(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function ar() {
  return !0;
}
function qi() {
  return !1;
}
function xe(e) {
  function t(n, r, l, o, i) {
    (this._reactName = n),
      (this._targetInst = l),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = i),
      (this.currentTarget = null);
    for (var u in e)
      e.hasOwnProperty(u) && ((n = e[u]), (this[u] = n ? n(o) : o[u]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? ar
        : qi),
      (this.isPropagationStopped = qi),
      this
    );
  }
  return (
    W(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = ar));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = ar));
      },
      persist: function () {},
      isPersistent: ar,
    }),
    t
  );
}
var un = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  li = xe(un),
  Jn = W({}, un, {
    view: 0,
    detail: 0,
  }),
  pf = xe(Jn),
  Ml,
  jl,
  hn,
  ol = W({}, Jn, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: oi,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== hn &&
            (hn && e.type === "mousemove"
              ? ((Ml = e.screenX - hn.screenX), (jl = e.screenY - hn.screenY))
              : (jl = Ml = 0),
            (hn = e)),
          Ml);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : jl;
    },
  }),
  bi = xe(ol),
  mf = W({}, ol, {
    dataTransfer: 0,
  }),
  hf = xe(mf),
  vf = W({}, Jn, {
    relatedTarget: 0,
  }),
  Ll = xe(vf),
  yf = W({}, un, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  gf = xe(yf),
  wf = W({}, un, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  xf = xe(wf),
  Sf = W({}, un, {
    data: 0,
  }),
  eu = xe(Sf),
  kf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  Ef = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Cf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function _f(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Cf[e]) ? !!t[e] : !1;
}
function oi() {
  return _f;
}
var Nf = W({}, Jn, {
    key: function (e) {
      if (e.key) {
        var t = kf[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Er(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? Ef[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: oi,
    charCode: function (e) {
      return e.type === "keypress" ? Er(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Er(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  Pf = xe(Nf),
  zf = W({}, ol, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  tu = xe(zf),
  Mf = W({}, Jn, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: oi,
  }),
  jf = xe(Mf),
  Lf = W({}, un, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0,
  }),
  Tf = xe(Lf),
  Rf = W({}, ol, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Df = xe(Rf),
  Of = [9, 13, 27, 32],
  ii = Qe && "CompositionEvent" in window,
  _n = null;
Qe && "documentMode" in document && (_n = document.documentMode);
var Ff = Qe && "TextEvent" in window && !_n,
  As = Qe && (!ii || (_n && 8 < _n && 11 >= _n)),
  nu = " ",
  ru = !1;
function Ws(e, t) {
  switch (e) {
    case "keyup":
      return Of.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function $s(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Ft = !1;
function If(e, t) {
  switch (e) {
    case "compositionend":
      return $s(t);
    case "keypress":
      return t.which !== 32 ? null : ((ru = !0), nu);
    case "textInput":
      return (e = t.data), e === nu && ru ? null : e;
    default:
      return null;
  }
}
function Hf(e, t) {
  if (Ft)
    return e === "compositionend" || (!ii && Ws(e, t))
      ? ((e = Us()), (kr = ri = tt = null), (Ft = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return As && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var Uf = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function lu(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!Uf[e.type] : t === "textarea";
}
function Bs(e, t, n, r) {
  xs(r),
    (t = Hr(t, "onChange")),
    0 < t.length &&
      ((n = new li("onChange", "change", null, n, r)),
      e.push({
        event: n,
        listeners: t,
      }));
}
var Nn = null,
  Hn = null;
function Af(e) {
  ea(e, 0);
}
function il(e) {
  var t = Ut(e);
  if (ps(t)) return e;
}
function Wf(e, t) {
  if (e === "change") return t;
}
var Vs = !1;
if (Qe) {
  var Tl;
  if (Qe) {
    var Rl = "oninput" in document;
    if (!Rl) {
      var ou = document.createElement("div");
      ou.setAttribute("oninput", "return;"),
        (Rl = typeof ou.oninput == "function");
    }
    Tl = Rl;
  } else Tl = !1;
  Vs = Tl && (!document.documentMode || 9 < document.documentMode);
}
function iu() {
  Nn && (Nn.detachEvent("onpropertychange", Qs), (Hn = Nn = null));
}
function Qs(e) {
  if (e.propertyName === "value" && il(Hn)) {
    var t = [];
    Bs(t, Hn, e, qo(e)), Cs(Af, t);
  }
}
function $f(e, t, n) {
  e === "focusin"
    ? (iu(), (Nn = t), (Hn = n), Nn.attachEvent("onpropertychange", Qs))
    : e === "focusout" && iu();
}
function Bf(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return il(Hn);
}
function Vf(e, t) {
  if (e === "click") return il(t);
}
function Qf(e, t) {
  if (e === "input" || e === "change") return il(t);
}
function Zf(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var De = typeof Object.is == "function" ? Object.is : Zf;
function Un(e, t) {
  if (De(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var l = n[r];
    if (!Kl.call(t, l) || !De(e[l], t[l])) return !1;
  }
  return !0;
}
function uu(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function su(e, t) {
  var n = uu(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return {
          node: n,
          offset: t - e,
        };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = uu(n);
  }
}
function Zs(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? Zs(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Ys() {
  for (var e = window, t = Lr(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Lr(e.document);
  }
  return t;
}
function ui(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function Yf(e) {
  var t = Ys(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Zs(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && ui(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var l = n.textContent.length,
          o = Math.min(r.start, l);
        (r = r.end === void 0 ? o : Math.min(r.end, l)),
          !e.extend && o > r && ((l = r), (r = o), (o = l)),
          (l = su(n, o));
        var i = su(n, r);
        l &&
          i &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== l.node ||
            e.anchorOffset !== l.offset ||
            e.focusNode !== i.node ||
            e.focusOffset !== i.offset) &&
          ((t = t.createRange()),
          t.setStart(l.node, l.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(i.node, i.offset))
            : (t.setEnd(i.node, i.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({
          element: e,
          left: e.scrollLeft,
          top: e.scrollTop,
        });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Gf = Qe && "documentMode" in document && 11 >= document.documentMode,
  It = null,
  ho = null,
  Pn = null,
  vo = !1;
function au(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  vo ||
    It == null ||
    It !== Lr(r) ||
    ((r = It),
    "selectionStart" in r && ui(r)
      ? (r = {
          start: r.selectionStart,
          end: r.selectionEnd,
        })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Pn && Un(Pn, r)) ||
      ((Pn = r),
      (r = Hr(ho, "onSelect")),
      0 < r.length &&
        ((t = new li("onSelect", "select", null, t, n)),
        e.push({
          event: t,
          listeners: r,
        }),
        (t.target = It))));
}
function cr(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ht = {
    animationend: cr("Animation", "AnimationEnd"),
    animationiteration: cr("Animation", "AnimationIteration"),
    animationstart: cr("Animation", "AnimationStart"),
    transitionend: cr("Transition", "TransitionEnd"),
  },
  Dl = {},
  Gs = {};
Qe &&
  ((Gs = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ht.animationend.animation,
    delete Ht.animationiteration.animation,
    delete Ht.animationstart.animation),
  "TransitionEvent" in window || delete Ht.transitionend.transition);
function ul(e) {
  if (Dl[e]) return Dl[e];
  if (!Ht[e]) return e;
  var t = Ht[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Gs) return (Dl[e] = t[n]);
  return e;
}
var Ks = ul("animationend"),
  Xs = ul("animationiteration"),
  Js = ul("animationstart"),
  qs = ul("transitionend"),
  bs = new Map(),
  cu =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function pt(e, t) {
  bs.set(e, t), Lt(t, [e]);
}
for (var Ol = 0; Ol < cu.length; Ol++) {
  var Fl = cu[Ol],
    Kf = Fl.toLowerCase(),
    Xf = Fl[0].toUpperCase() + Fl.slice(1);
  pt(Kf, "on" + Xf);
}
pt(Ks, "onAnimationEnd");
pt(Xs, "onAnimationIteration");
pt(Js, "onAnimationStart");
pt("dblclick", "onDoubleClick");
pt("focusin", "onFocus");
pt("focusout", "onBlur");
pt(qs, "onTransitionEnd");
qt("onMouseEnter", ["mouseout", "mouseover"]);
qt("onMouseLeave", ["mouseout", "mouseover"]);
qt("onPointerEnter", ["pointerout", "pointerover"]);
qt("onPointerLeave", ["pointerout", "pointerover"]);
Lt(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
Lt(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
Lt("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Lt(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
Lt(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var kn =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  Jf = new Set("cancel close invalid load scroll toggle".split(" ").concat(kn));
function fu(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), Gc(r, t, void 0, e), (e.currentTarget = null);
}
function ea(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      l = r.event;
    r = r.listeners;
    e: {
      var o = void 0;
      if (t)
        for (var i = r.length - 1; 0 <= i; i--) {
          var u = r[i],
            s = u.instance,
            c = u.currentTarget;
          if (((u = u.listener), s !== o && l.isPropagationStopped())) break e;
          fu(l, u, c), (o = s);
        }
      else
        for (i = 0; i < r.length; i++) {
          if (
            ((u = r[i]),
            (s = u.instance),
            (c = u.currentTarget),
            (u = u.listener),
            s !== o && l.isPropagationStopped())
          )
            break e;
          fu(l, u, c), (o = s);
        }
    }
  }
  if (Rr) throw ((e = co), (Rr = !1), (co = null), e);
}
function O(e, t) {
  var n = t[So];
  n === void 0 && (n = t[So] = new Set());
  var r = e + "__bubble";
  n.has(r) || (ta(t, e, 2, !1), n.add(r));
}
function Il(e, t, n) {
  var r = 0;
  t && (r |= 4), ta(n, e, r, t);
}
var fr = "_reactListening" + Math.random().toString(36).slice(2);
function An(e) {
  if (!e[fr]) {
    (e[fr] = !0),
      ss.forEach(function (n) {
        n !== "selectionchange" && (Jf.has(n) || Il(n, !1, e), Il(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[fr] || ((t[fr] = !0), Il("selectionchange", !1, t));
  }
}
function ta(e, t, n, r) {
  switch (Hs(t)) {
    case 1:
      var l = ff;
      break;
    case 4:
      l = df;
      break;
    default:
      l = ni;
  }
  (n = l.bind(null, t, n, e)),
    (l = void 0),
    !ao ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (l = !0),
    r
      ? l !== void 0
        ? e.addEventListener(t, n, {
            capture: !0,
            passive: l,
          })
        : e.addEventListener(t, n, !0)
      : l !== void 0
      ? e.addEventListener(t, n, {
          passive: l,
        })
      : e.addEventListener(t, n, !1);
}
function Hl(e, t, n, r, l) {
  var o = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var i = r.tag;
      if (i === 3 || i === 4) {
        var u = r.stateNode.containerInfo;
        if (u === l || (u.nodeType === 8 && u.parentNode === l)) break;
        if (i === 4)
          for (i = r.return; i !== null; ) {
            var s = i.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = i.stateNode.containerInfo),
              s === l || (s.nodeType === 8 && s.parentNode === l))
            )
              return;
            i = i.return;
          }
        for (; u !== null; ) {
          if (((i = xt(u)), i === null)) return;
          if (((s = i.tag), s === 5 || s === 6)) {
            r = o = i;
            continue e;
          }
          u = u.parentNode;
        }
      }
      r = r.return;
    }
  Cs(function () {
    var c = o,
      h = qo(n),
      m = [];
    e: {
      var p = bs.get(e);
      if (p !== void 0) {
        var g = li,
          w = e;
        switch (e) {
          case "keypress":
            if (Er(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = Pf;
            break;
          case "focusin":
            (w = "focus"), (g = Ll);
            break;
          case "focusout":
            (w = "blur"), (g = Ll);
            break;
          case "beforeblur":
          case "afterblur":
            g = Ll;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = bi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = hf;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = jf;
            break;
          case Ks:
          case Xs:
          case Js:
            g = gf;
            break;
          case qs:
            g = Tf;
            break;
          case "scroll":
            g = pf;
            break;
          case "wheel":
            g = Df;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = xf;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = tu;
        }
        var x = (t & 4) !== 0,
          I = !x && e === "scroll",
          f = x ? (p !== null ? p + "Capture" : null) : p;
        x = [];
        for (var a = c, d; a !== null; ) {
          d = a;
          var v = d.stateNode;
          if (
            (d.tag === 5 &&
              v !== null &&
              ((d = v),
              f !== null && ((v = Dn(a, f)), v != null && x.push(Wn(a, v, d)))),
            I)
          )
            break;
          a = a.return;
        }
        0 < x.length &&
          ((p = new g(p, w, null, n, h)),
          m.push({
            event: p,
            listeners: x,
          }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((p = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          p &&
            n !== uo &&
            (w = n.relatedTarget || n.fromElement) &&
            (xt(w) || w[Ze]))
        )
          break e;
        if (
          (g || p) &&
          ((p =
            h.window === h
              ? h
              : (p = h.ownerDocument)
              ? p.defaultView || p.parentWindow
              : window),
          g
            ? ((w = n.relatedTarget || n.toElement),
              (g = c),
              (w = w ? xt(w) : null),
              w !== null &&
                ((I = Tt(w)), w !== I || (w.tag !== 5 && w.tag !== 6)) &&
                (w = null))
            : ((g = null), (w = c)),
          g !== w)
        ) {
          if (
            ((x = bi),
            (v = "onMouseLeave"),
            (f = "onMouseEnter"),
            (a = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((x = tu),
              (v = "onPointerLeave"),
              (f = "onPointerEnter"),
              (a = "pointer")),
            (I = g == null ? p : Ut(g)),
            (d = w == null ? p : Ut(w)),
            (p = new x(v, a + "leave", g, n, h)),
            (p.target = I),
            (p.relatedTarget = d),
            (v = null),
            xt(h) === c &&
              ((x = new x(f, a + "enter", w, n, h)),
              (x.target = d),
              (x.relatedTarget = I),
              (v = x)),
            (I = v),
            g && w)
          )
            t: {
              for (x = g, f = w, a = 0, d = x; d; d = Rt(d)) a++;
              for (d = 0, v = f; v; v = Rt(v)) d++;
              for (; 0 < a - d; ) (x = Rt(x)), a--;
              for (; 0 < d - a; ) (f = Rt(f)), d--;
              for (; a--; ) {
                if (x === f || (f !== null && x === f.alternate)) break t;
                (x = Rt(x)), (f = Rt(f));
              }
              x = null;
            }
          else x = null;
          g !== null && du(m, p, g, x, !1),
            w !== null && I !== null && du(m, I, w, x, !0);
        }
      }
      e: {
        if (
          ((p = c ? Ut(c) : window),
          (g = p.nodeName && p.nodeName.toLowerCase()),
          g === "select" || (g === "input" && p.type === "file"))
        )
          var E = Wf;
        else if (lu(p))
          if (Vs) E = Qf;
          else {
            E = Bf;
            var _ = $f;
          }
        else
          (g = p.nodeName) &&
            g.toLowerCase() === "input" &&
            (p.type === "checkbox" || p.type === "radio") &&
            (E = Vf);
        if (E && (E = E(e, c))) {
          Bs(m, E, n, h);
          break e;
        }
        _ && _(e, p, c),
          e === "focusout" &&
            (_ = p._wrapperState) &&
            _.controlled &&
            p.type === "number" &&
            no(p, "number", p.value);
      }
      switch (((_ = c ? Ut(c) : window), e)) {
        case "focusin":
          (lu(_) || _.contentEditable === "true") &&
            ((It = _), (ho = c), (Pn = null));
          break;
        case "focusout":
          Pn = ho = It = null;
          break;
        case "mousedown":
          vo = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (vo = !1), au(m, n, h);
          break;
        case "selectionchange":
          if (Gf) break;
        case "keydown":
        case "keyup":
          au(m, n, h);
      }
      var N;
      if (ii)
        e: {
          switch (e) {
            case "compositionstart":
              var P = "onCompositionStart";
              break e;
            case "compositionend":
              P = "onCompositionEnd";
              break e;
            case "compositionupdate":
              P = "onCompositionUpdate";
              break e;
          }
          P = void 0;
        }
      else
        Ft
          ? Ws(e, n) && (P = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (P = "onCompositionStart");
      P &&
        (As &&
          n.locale !== "ko" &&
          (Ft || P !== "onCompositionStart"
            ? P === "onCompositionEnd" && Ft && (N = Us())
            : ((tt = h),
              (ri = "value" in tt ? tt.value : tt.textContent),
              (Ft = !0))),
        (_ = Hr(c, P)),
        0 < _.length &&
          ((P = new eu(P, e, null, n, h)),
          m.push({
            event: P,
            listeners: _,
          }),
          N ? (P.data = N) : ((N = $s(n)), N !== null && (P.data = N)))),
        (N = Ff ? If(e, n) : Hf(e, n)) &&
          ((c = Hr(c, "onBeforeInput")),
          0 < c.length &&
            ((h = new eu("onBeforeInput", "beforeinput", null, n, h)),
            m.push({
              event: h,
              listeners: c,
            }),
            (h.data = N)));
    }
    ea(m, t);
  });
}
function Wn(e, t, n) {
  return {
    instance: e,
    listener: t,
    currentTarget: n,
  };
}
function Hr(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var l = e,
      o = l.stateNode;
    l.tag === 5 &&
      o !== null &&
      ((l = o),
      (o = Dn(e, n)),
      o != null && r.unshift(Wn(e, o, l)),
      (o = Dn(e, t)),
      o != null && r.push(Wn(e, o, l))),
      (e = e.return);
  }
  return r;
}
function Rt(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function du(e, t, n, r, l) {
  for (var o = t._reactName, i = []; n !== null && n !== r; ) {
    var u = n,
      s = u.alternate,
      c = u.stateNode;
    if (s !== null && s === r) break;
    u.tag === 5 &&
      c !== null &&
      ((u = c),
      l
        ? ((s = Dn(n, o)), s != null && i.unshift(Wn(n, s, u)))
        : l || ((s = Dn(n, o)), s != null && i.push(Wn(n, s, u)))),
      (n = n.return);
  }
  i.length !== 0 &&
    e.push({
      event: t,
      listeners: i,
    });
}
var qf = /\r\n?/g,
  bf = /\u0000|\uFFFD/g;
function pu(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      qf,
      `
`
    )
    .replace(bf, "");
}
function dr(e, t, n) {
  if (((t = pu(t)), pu(e) !== t && n)) throw Error(y(425));
}
function Ur() {}
var yo = null,
  go = null;
function wo(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var xo = typeof setTimeout == "function" ? setTimeout : void 0,
  ed = typeof clearTimeout == "function" ? clearTimeout : void 0,
  mu = typeof Promise == "function" ? Promise : void 0,
  td =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof mu < "u"
      ? function (e) {
          return mu.resolve(null).then(e).catch(nd);
        }
      : xo;
function nd(e) {
  setTimeout(function () {
    throw e;
  });
}
function Ul(e, t) {
  var n = t,
    r = 0;
  do {
    var l = n.nextSibling;
    if ((e.removeChild(n), l && l.nodeType === 8))
      if (((n = l.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(l), In(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = l;
  } while (n);
  In(t);
}
function it(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function hu(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var sn = Math.random().toString(36).slice(2),
  Ie = "__reactFiber$" + sn,
  $n = "__reactProps$" + sn,
  Ze = "__reactContainer$" + sn,
  So = "__reactEvents$" + sn,
  rd = "__reactListeners$" + sn,
  ld = "__reactHandles$" + sn;
function xt(e) {
  var t = e[Ie];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ze] || n[Ie])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = hu(e); e !== null; ) {
          if ((n = e[Ie])) return n;
          e = hu(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function qn(e) {
  return (
    (e = e[Ie] || e[Ze]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Ut(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(y(33));
}
function sl(e) {
  return e[$n] || null;
}
var ko = [],
  At = -1;
function mt(e) {
  return {
    current: e,
  };
}
function F(e) {
  0 > At || ((e.current = ko[At]), (ko[At] = null), At--);
}
function D(e, t) {
  At++, (ko[At] = e.current), (e.current = t);
}
var dt = {},
  oe = mt(dt),
  de = mt(!1),
  Nt = dt;
function bt(e, t) {
  var n = e.type.contextTypes;
  if (!n) return dt;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var l = {},
    o;
  for (o in n) l[o] = t[o];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = l)),
    l
  );
}
function pe(e) {
  return (e = e.childContextTypes), e != null;
}
function Ar() {
  F(de), F(oe);
}
function vu(e, t, n) {
  if (oe.current !== dt) throw Error(y(168));
  D(oe, t), D(de, n);
}
function na(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var l in r) if (!(l in t)) throw Error(y(108, Wc(e) || "Unknown", l));
  return W({}, n, r);
}
function Wr(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || dt),
    (Nt = oe.current),
    D(oe, e),
    D(de, de.current),
    !0
  );
}
function yu(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(y(169));
  n
    ? ((e = na(e, t, Nt)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      F(de),
      F(oe),
      D(oe, e))
    : F(de),
    D(de, n);
}
var We = null,
  al = !1,
  Al = !1;
function ra(e) {
  We === null ? (We = [e]) : We.push(e);
}
function od(e) {
  (al = !0), ra(e);
}
function ht() {
  if (!Al && We !== null) {
    Al = !0;
    var e = 0,
      t = R;
    try {
      var n = We;
      for (R = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (We = null), (al = !1);
    } catch (l) {
      throw (We !== null && (We = We.slice(e + 1)), zs(bo, ht), l);
    } finally {
      (R = t), (Al = !1);
    }
  }
  return null;
}
var Wt = [],
  $t = 0,
  $r = null,
  Br = 0,
  Se = [],
  ke = 0,
  Pt = null,
  $e = 1,
  Be = "";
function gt(e, t) {
  (Wt[$t++] = Br), (Wt[$t++] = $r), ($r = e), (Br = t);
}
function la(e, t, n) {
  (Se[ke++] = $e), (Se[ke++] = Be), (Se[ke++] = Pt), (Pt = e);
  var r = $e;
  e = Be;
  var l = 32 - Te(r) - 1;
  (r &= ~(1 << l)), (n += 1);
  var o = 32 - Te(t) + l;
  if (30 < o) {
    var i = l - (l % 5);
    (o = (r & ((1 << i) - 1)).toString(32)),
      (r >>= i),
      (l -= i),
      ($e = (1 << (32 - Te(t) + l)) | (n << l) | r),
      (Be = o + e);
  } else ($e = (1 << o) | (n << l) | r), (Be = e);
}
function si(e) {
  e.return !== null && (gt(e, 1), la(e, 1, 0));
}
function ai(e) {
  for (; e === $r; )
    ($r = Wt[--$t]), (Wt[$t] = null), (Br = Wt[--$t]), (Wt[$t] = null);
  for (; e === Pt; )
    (Pt = Se[--ke]),
      (Se[ke] = null),
      (Be = Se[--ke]),
      (Se[ke] = null),
      ($e = Se[--ke]),
      (Se[ke] = null);
}
var ye = null,
  ve = null,
  H = !1,
  Le = null;
function oa(e, t) {
  var n = Ee(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function gu(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (ye = e), (ve = it(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (ye = e), (ve = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n =
              Pt !== null
                ? {
                    id: $e,
                    overflow: Be,
                  }
                : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = Ee(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (ye = e),
            (ve = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Eo(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Co(e) {
  if (H) {
    var t = ve;
    if (t) {
      var n = t;
      if (!gu(e, t)) {
        if (Eo(e)) throw Error(y(418));
        t = it(n.nextSibling);
        var r = ye;
        t && gu(e, t)
          ? oa(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (H = !1), (ye = e));
      }
    } else {
      if (Eo(e)) throw Error(y(418));
      (e.flags = (e.flags & -4097) | 2), (H = !1), (ye = e);
    }
  }
}
function wu(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  ye = e;
}
function pr(e) {
  if (e !== ye) return !1;
  if (!H) return wu(e), (H = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !wo(e.type, e.memoizedProps))),
    t && (t = ve))
  ) {
    if (Eo(e)) throw (ia(), Error(y(418)));
    for (; t; ) oa(e, t), (t = it(t.nextSibling));
  }
  if ((wu(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(y(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              ve = it(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      ve = null;
    }
  } else ve = ye ? it(e.stateNode.nextSibling) : null;
  return !0;
}
function ia() {
  for (var e = ve; e; ) e = it(e.nextSibling);
}
function en() {
  (ve = ye = null), (H = !1);
}
function ci(e) {
  Le === null ? (Le = [e]) : Le.push(e);
}
var id = Ke.ReactCurrentBatchConfig;
function vn(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(y(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(y(147, e));
      var l = r,
        o = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (i) {
            var u = l.refs;
            i === null ? delete u[o] : (u[o] = i);
          }),
          (t._stringRef = o),
          t);
    }
    if (typeof e != "string") throw Error(y(284));
    if (!n._owner) throw Error(y(290, e));
  }
  return e;
}
function mr(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      y(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function xu(e) {
  var t = e._init;
  return t(e._payload);
}
function ua(e) {
  function t(f, a) {
    if (e) {
      var d = f.deletions;
      d === null ? ((f.deletions = [a]), (f.flags |= 16)) : d.push(a);
    }
  }
  function n(f, a) {
    if (!e) return null;
    for (; a !== null; ) t(f, a), (a = a.sibling);
    return null;
  }
  function r(f, a) {
    for (f = new Map(); a !== null; )
      a.key !== null ? f.set(a.key, a) : f.set(a.index, a), (a = a.sibling);
    return f;
  }
  function l(f, a) {
    return (f = ct(f, a)), (f.index = 0), (f.sibling = null), f;
  }
  function o(f, a, d) {
    return (
      (f.index = d),
      e
        ? ((d = f.alternate),
          d !== null
            ? ((d = d.index), d < a ? ((f.flags |= 2), a) : d)
            : ((f.flags |= 2), a))
        : ((f.flags |= 1048576), a)
    );
  }
  function i(f) {
    return e && f.alternate === null && (f.flags |= 2), f;
  }
  function u(f, a, d, v) {
    return a === null || a.tag !== 6
      ? ((a = Yl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function s(f, a, d, v) {
    var E = d.type;
    return E === Ot
      ? h(f, a, d.props.children, v, d.key)
      : a !== null &&
        (a.elementType === E ||
          (typeof E == "object" &&
            E !== null &&
            E.$$typeof === Je &&
            xu(E) === a.type))
      ? ((v = l(a, d.props)), (v.ref = vn(f, a, d)), (v.return = f), v)
      : ((v = jr(d.type, d.key, d.props, null, f.mode, v)),
        (v.ref = vn(f, a, d)),
        (v.return = f),
        v);
  }
  function c(f, a, d, v) {
    return a === null ||
      a.tag !== 4 ||
      a.stateNode.containerInfo !== d.containerInfo ||
      a.stateNode.implementation !== d.implementation
      ? ((a = Gl(d, f.mode, v)), (a.return = f), a)
      : ((a = l(a, d.children || [])), (a.return = f), a);
  }
  function h(f, a, d, v, E) {
    return a === null || a.tag !== 7
      ? ((a = _t(d, f.mode, v, E)), (a.return = f), a)
      : ((a = l(a, d)), (a.return = f), a);
  }
  function m(f, a, d) {
    if ((typeof a == "string" && a !== "") || typeof a == "number")
      return (a = Yl("" + a, f.mode, d)), (a.return = f), a;
    if (typeof a == "object" && a !== null) {
      switch (a.$$typeof) {
        case rr:
          return (
            (d = jr(a.type, a.key, a.props, null, f.mode, d)),
            (d.ref = vn(f, null, a)),
            (d.return = f),
            d
          );
        case Dt:
          return (a = Gl(a, f.mode, d)), (a.return = f), a;
        case Je:
          var v = a._init;
          return m(f, v(a._payload), d);
      }
      if (xn(a) || fn(a))
        return (a = _t(a, f.mode, d, null)), (a.return = f), a;
      mr(f, a);
    }
    return null;
  }
  function p(f, a, d, v) {
    var E = a !== null ? a.key : null;
    if ((typeof d == "string" && d !== "") || typeof d == "number")
      return E !== null ? null : u(f, a, "" + d, v);
    if (typeof d == "object" && d !== null) {
      switch (d.$$typeof) {
        case rr:
          return d.key === E ? s(f, a, d, v) : null;
        case Dt:
          return d.key === E ? c(f, a, d, v) : null;
        case Je:
          return (E = d._init), p(f, a, E(d._payload), v);
      }
      if (xn(d) || fn(d)) return E !== null ? null : h(f, a, d, v, null);
      mr(f, d);
    }
    return null;
  }
  function g(f, a, d, v, E) {
    if ((typeof v == "string" && v !== "") || typeof v == "number")
      return (f = f.get(d) || null), u(a, f, "" + v, E);
    if (typeof v == "object" && v !== null) {
      switch (v.$$typeof) {
        case rr:
          return (f = f.get(v.key === null ? d : v.key) || null), s(a, f, v, E);
        case Dt:
          return (f = f.get(v.key === null ? d : v.key) || null), c(a, f, v, E);
        case Je:
          var _ = v._init;
          return g(f, a, d, _(v._payload), E);
      }
      if (xn(v) || fn(v)) return (f = f.get(d) || null), h(a, f, v, E, null);
      mr(a, v);
    }
    return null;
  }
  function w(f, a, d, v) {
    for (
      var E = null, _ = null, N = a, P = (a = 0), B = null;
      N !== null && P < d.length;
      P++
    ) {
      N.index > P ? ((B = N), (N = null)) : (B = N.sibling);
      var L = p(f, N, d[P], v);
      if (L === null) {
        N === null && (N = B);
        break;
      }
      e && N && L.alternate === null && t(f, N),
        (a = o(L, a, P)),
        _ === null ? (E = L) : (_.sibling = L),
        (_ = L),
        (N = B);
    }
    if (P === d.length) return n(f, N), H && gt(f, P), E;
    if (N === null) {
      for (; P < d.length; P++)
        (N = m(f, d[P], v)),
          N !== null &&
            ((a = o(N, a, P)), _ === null ? (E = N) : (_.sibling = N), (_ = N));
      return H && gt(f, P), E;
    }
    for (N = r(f, N); P < d.length; P++)
      (B = g(N, f, P, d[P], v)),
        B !== null &&
          (e && B.alternate !== null && N.delete(B.key === null ? P : B.key),
          (a = o(B, a, P)),
          _ === null ? (E = B) : (_.sibling = B),
          (_ = B));
    return (
      e &&
        N.forEach(function (Pe) {
          return t(f, Pe);
        }),
      H && gt(f, P),
      E
    );
  }
  function x(f, a, d, v) {
    var E = fn(d);
    if (typeof E != "function") throw Error(y(150));
    if (((d = E.call(d)), d == null)) throw Error(y(151));
    for (
      var _ = (E = null), N = a, P = (a = 0), B = null, L = d.next();
      N !== null && !L.done;
      P++, L = d.next()
    ) {
      N.index > P ? ((B = N), (N = null)) : (B = N.sibling);
      var Pe = p(f, N, L.value, v);
      if (Pe === null) {
        N === null && (N = B);
        break;
      }
      e && N && Pe.alternate === null && t(f, N),
        (a = o(Pe, a, P)),
        _ === null ? (E = Pe) : (_.sibling = Pe),
        (_ = Pe),
        (N = B);
    }
    if (L.done) return n(f, N), H && gt(f, P), E;
    if (N === null) {
      for (; !L.done; P++, L = d.next())
        (L = m(f, L.value, v)),
          L !== null &&
            ((a = o(L, a, P)), _ === null ? (E = L) : (_.sibling = L), (_ = L));
      return H && gt(f, P), E;
    }
    for (N = r(f, N); !L.done; P++, L = d.next())
      (L = g(N, f, P, L.value, v)),
        L !== null &&
          (e && L.alternate !== null && N.delete(L.key === null ? P : L.key),
          (a = o(L, a, P)),
          _ === null ? (E = L) : (_.sibling = L),
          (_ = L));
    return (
      e &&
        N.forEach(function (an) {
          return t(f, an);
        }),
      H && gt(f, P),
      E
    );
  }
  function I(f, a, d, v) {
    if (
      (typeof d == "object" &&
        d !== null &&
        d.type === Ot &&
        d.key === null &&
        (d = d.props.children),
      typeof d == "object" && d !== null)
    ) {
      switch (d.$$typeof) {
        case rr:
          e: {
            for (var E = d.key, _ = a; _ !== null; ) {
              if (_.key === E) {
                if (((E = d.type), E === Ot)) {
                  if (_.tag === 7) {
                    n(f, _.sibling),
                      (a = l(_, d.props.children)),
                      (a.return = f),
                      (f = a);
                    break e;
                  }
                } else if (
                  _.elementType === E ||
                  (typeof E == "object" &&
                    E !== null &&
                    E.$$typeof === Je &&
                    xu(E) === _.type)
                ) {
                  n(f, _.sibling),
                    (a = l(_, d.props)),
                    (a.ref = vn(f, _, d)),
                    (a.return = f),
                    (f = a);
                  break e;
                }
                n(f, _);
                break;
              } else t(f, _);
              _ = _.sibling;
            }
            d.type === Ot
              ? ((a = _t(d.props.children, f.mode, v, d.key)),
                (a.return = f),
                (f = a))
              : ((v = jr(d.type, d.key, d.props, null, f.mode, v)),
                (v.ref = vn(f, a, d)),
                (v.return = f),
                (f = v));
          }
          return i(f);
        case Dt:
          e: {
            for (_ = d.key; a !== null; ) {
              if (a.key === _)
                if (
                  a.tag === 4 &&
                  a.stateNode.containerInfo === d.containerInfo &&
                  a.stateNode.implementation === d.implementation
                ) {
                  n(f, a.sibling),
                    (a = l(a, d.children || [])),
                    (a.return = f),
                    (f = a);
                  break e;
                } else {
                  n(f, a);
                  break;
                }
              else t(f, a);
              a = a.sibling;
            }
            (a = Gl(d, f.mode, v)), (a.return = f), (f = a);
          }
          return i(f);
        case Je:
          return (_ = d._init), I(f, a, _(d._payload), v);
      }
      if (xn(d)) return w(f, a, d, v);
      if (fn(d)) return x(f, a, d, v);
      mr(f, d);
    }
    return (typeof d == "string" && d !== "") || typeof d == "number"
      ? ((d = "" + d),
        a !== null && a.tag === 6
          ? (n(f, a.sibling), (a = l(a, d)), (a.return = f), (f = a))
          : (n(f, a), (a = Yl(d, f.mode, v)), (a.return = f), (f = a)),
        i(f))
      : n(f, a);
  }
  return I;
}
var tn = ua(!0),
  sa = ua(!1),
  Vr = mt(null),
  Qr = null,
  Bt = null,
  fi = null;
function di() {
  fi = Bt = Qr = null;
}
function pi(e) {
  var t = Vr.current;
  F(Vr), (e._currentValue = t);
}
function _o(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Xt(e, t) {
  (Qr = e),
    (fi = Bt = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (fe = !0), (e.firstContext = null));
}
function _e(e) {
  var t = e._currentValue;
  if (fi !== e)
    if (
      ((e = {
        context: e,
        memoizedValue: t,
        next: null,
      }),
      Bt === null)
    ) {
      if (Qr === null) throw Error(y(308));
      (Bt = e),
        (Qr.dependencies = {
          lanes: 0,
          firstContext: e,
        });
    } else Bt = Bt.next = e;
  return t;
}
var St = null;
function mi(e) {
  St === null ? (St = [e]) : St.push(e);
}
function aa(e, t, n, r) {
  var l = t.interleaved;
  return (
    l === null ? ((n.next = n), mi(t)) : ((n.next = l.next), (l.next = n)),
    (t.interleaved = n),
    Ye(e, r)
  );
}
function Ye(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var qe = !1;
function hi(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: {
      pending: null,
      interleaved: null,
      lanes: 0,
    },
    effects: null,
  };
}
function ca(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ve(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function ut(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), T & 2)) {
    var l = r.pending;
    return (
      l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (r.pending = t),
      Ye(e, n)
    );
  }
  return (
    (l = r.interleaved),
    l === null ? ((t.next = t), mi(r)) : ((t.next = l.next), (l.next = t)),
    (r.interleaved = t),
    Ye(e, n)
  );
}
function Cr(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ei(e, n);
  }
}
function Su(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var l = null,
      o = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var i = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        o === null ? (l = o = i) : (o = o.next = i), (n = n.next);
      } while (n !== null);
      o === null ? (l = o = t) : (o = o.next = t);
    } else l = o = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: l,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Zr(e, t, n, r) {
  var l = e.updateQueue;
  qe = !1;
  var o = l.firstBaseUpdate,
    i = l.lastBaseUpdate,
    u = l.shared.pending;
  if (u !== null) {
    l.shared.pending = null;
    var s = u,
      c = s.next;
    (s.next = null), i === null ? (o = c) : (i.next = c), (i = s);
    var h = e.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (u = h.lastBaseUpdate),
      u !== i &&
        (u === null ? (h.firstBaseUpdate = c) : (u.next = c),
        (h.lastBaseUpdate = s)));
  }
  if (o !== null) {
    var m = l.baseState;
    (i = 0), (h = c = s = null), (u = o);
    do {
      var p = u.lane,
        g = u.eventTime;
      if ((r & p) === p) {
        h !== null &&
          (h = h.next =
            {
              eventTime: g,
              lane: 0,
              tag: u.tag,
              payload: u.payload,
              callback: u.callback,
              next: null,
            });
        e: {
          var w = e,
            x = u;
          switch (((p = t), (g = n), x.tag)) {
            case 1:
              if (((w = x.payload), typeof w == "function")) {
                m = w.call(g, m, p);
                break e;
              }
              m = w;
              break e;
            case 3:
              w.flags = (w.flags & -65537) | 128;
            case 0:
              if (
                ((w = x.payload),
                (p = typeof w == "function" ? w.call(g, m, p) : w),
                p == null)
              )
                break e;
              m = W({}, m, p);
              break e;
            case 2:
              qe = !0;
          }
        }
        u.callback !== null &&
          u.lane !== 0 &&
          ((e.flags |= 64),
          (p = l.effects),
          p === null ? (l.effects = [u]) : p.push(u));
      } else
        (g = {
          eventTime: g,
          lane: p,
          tag: u.tag,
          payload: u.payload,
          callback: u.callback,
          next: null,
        }),
          h === null ? ((c = h = g), (s = m)) : (h = h.next = g),
          (i |= p);
      if (((u = u.next), u === null)) {
        if (((u = l.shared.pending), u === null)) break;
        (p = u),
          (u = p.next),
          (p.next = null),
          (l.lastBaseUpdate = p),
          (l.shared.pending = null);
      }
    } while (!0);
    if (
      (h === null && (s = m),
      (l.baseState = s),
      (l.firstBaseUpdate = c),
      (l.lastBaseUpdate = h),
      (t = l.shared.interleaved),
      t !== null)
    ) {
      l = t;
      do (i |= l.lane), (l = l.next);
      while (l !== t);
    } else o === null && (l.shared.lanes = 0);
    (Mt |= i), (e.lanes = i), (e.memoizedState = m);
  }
}
function ku(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        l = r.callback;
      if (l !== null) {
        if (((r.callback = null), (r = n), typeof l != "function"))
          throw Error(y(191, l));
        l.call(r);
      }
    }
}
var bn = {},
  Ue = mt(bn),
  Bn = mt(bn),
  Vn = mt(bn);
function kt(e) {
  if (e === bn) throw Error(y(174));
  return e;
}
function vi(e, t) {
  switch ((D(Vn, t), D(Bn, e), D(Ue, bn), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : lo(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = lo(t, e));
  }
  F(Ue), D(Ue, t);
}
function nn() {
  F(Ue), F(Bn), F(Vn);
}
function fa(e) {
  kt(Vn.current);
  var t = kt(Ue.current),
    n = lo(t, e.type);
  t !== n && (D(Bn, e), D(Ue, n));
}
function yi(e) {
  Bn.current === e && (F(Ue), F(Bn));
}
var U = mt(0);
function Yr(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Wl = [];
function gi() {
  for (var e = 0; e < Wl.length; e++)
    Wl[e]._workInProgressVersionPrimary = null;
  Wl.length = 0;
}
var _r = Ke.ReactCurrentDispatcher,
  $l = Ke.ReactCurrentBatchConfig,
  zt = 0,
  A = null,
  Y = null,
  X = null,
  Gr = !1,
  zn = !1,
  Qn = 0,
  ud = 0;
function te() {
  throw Error(y(321));
}
function wi(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!De(e[n], t[n])) return !1;
  return !0;
}
function xi(e, t, n, r, l, o) {
  if (
    ((zt = o),
    (A = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (_r.current = e === null || e.memoizedState === null ? fd : dd),
    (e = n(r, l)),
    zn)
  ) {
    o = 0;
    do {
      if (((zn = !1), (Qn = 0), 25 <= o)) throw Error(y(301));
      (o += 1),
        (X = Y = null),
        (t.updateQueue = null),
        (_r.current = pd),
        (e = n(r, l));
    } while (zn);
  }
  if (
    ((_r.current = Kr),
    (t = Y !== null && Y.next !== null),
    (zt = 0),
    (X = Y = A = null),
    (Gr = !1),
    t)
  )
    throw Error(y(300));
  return e;
}
function Si() {
  var e = Qn !== 0;
  return (Qn = 0), e;
}
function Fe() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return X === null ? (A.memoizedState = X = e) : (X = X.next = e), X;
}
function Ne() {
  if (Y === null) {
    var e = A.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = Y.next;
  var t = X === null ? A.memoizedState : X.next;
  if (t !== null) (X = t), (Y = e);
  else {
    if (e === null) throw Error(y(310));
    (Y = e),
      (e = {
        memoizedState: Y.memoizedState,
        baseState: Y.baseState,
        baseQueue: Y.baseQueue,
        queue: Y.queue,
        next: null,
      }),
      X === null ? (A.memoizedState = X = e) : (X = X.next = e);
  }
  return X;
}
function Zn(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Bl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = Y,
    l = r.baseQueue,
    o = n.pending;
  if (o !== null) {
    if (l !== null) {
      var i = l.next;
      (l.next = o.next), (o.next = i);
    }
    (r.baseQueue = l = o), (n.pending = null);
  }
  if (l !== null) {
    (o = l.next), (r = r.baseState);
    var u = (i = null),
      s = null,
      c = o;
    do {
      var h = c.lane;
      if ((zt & h) === h)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var m = {
          lane: h,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        s === null ? ((u = s = m), (i = r)) : (s = s.next = m),
          (A.lanes |= h),
          (Mt |= h);
      }
      c = c.next;
    } while (c !== null && c !== o);
    s === null ? (i = r) : (s.next = u),
      De(r, t.memoizedState) || (fe = !0),
      (t.memoizedState = r),
      (t.baseState = i),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    l = e;
    do (o = l.lane), (A.lanes |= o), (Mt |= o), (l = l.next);
    while (l !== e);
  } else l === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vl(e) {
  var t = Ne(),
    n = t.queue;
  if (n === null) throw Error(y(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    l = n.pending,
    o = t.memoizedState;
  if (l !== null) {
    n.pending = null;
    var i = (l = l.next);
    do (o = e(o, i.action)), (i = i.next);
    while (i !== l);
    De(o, t.memoizedState) || (fe = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o);
  }
  return [o, r];
}
function da() {}
function pa(e, t) {
  var n = A,
    r = Ne(),
    l = t(),
    o = !De(r.memoizedState, l);
  if (
    (o && ((r.memoizedState = l), (fe = !0)),
    (r = r.queue),
    ki(va.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (X !== null && X.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Yn(9, ha.bind(null, n, r, l, t), void 0, null),
      J === null)
    )
      throw Error(y(349));
    zt & 30 || ma(n, t, l);
  }
  return l;
}
function ma(e, t, n) {
  (e.flags |= 16384),
    (e = {
      getSnapshot: t,
      value: n,
    }),
    (t = A.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (A.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function ha(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ya(t) && ga(e);
}
function va(e, t, n) {
  return n(function () {
    ya(t) && ga(e);
  });
}
function ya(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !De(e, n);
  } catch {
    return !0;
  }
}
function ga(e) {
  var t = Ye(e, 1);
  t !== null && Re(t, e, 1, -1);
}
function Eu(e) {
  var t = Fe();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = cd.bind(null, A, e)),
    [t.memoizedState, e]
  );
}
function Yn(e, t, n, r) {
  return (
    (e = {
      tag: e,
      create: t,
      destroy: n,
      deps: r,
      next: null,
    }),
    (t = A.updateQueue),
    t === null
      ? ((t = {
          lastEffect: null,
          stores: null,
        }),
        (A.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function wa() {
  return Ne().memoizedState;
}
function Nr(e, t, n, r) {
  var l = Fe();
  (A.flags |= e),
    (l.memoizedState = Yn(1 | t, n, void 0, r === void 0 ? null : r));
}
function cl(e, t, n, r) {
  var l = Ne();
  r = r === void 0 ? null : r;
  var o = void 0;
  if (Y !== null) {
    var i = Y.memoizedState;
    if (((o = i.destroy), r !== null && wi(r, i.deps))) {
      l.memoizedState = Yn(t, n, o, r);
      return;
    }
  }
  (A.flags |= e), (l.memoizedState = Yn(1 | t, n, o, r));
}
function Cu(e, t) {
  return Nr(8390656, 8, e, t);
}
function ki(e, t) {
  return cl(2048, 8, e, t);
}
function xa(e, t) {
  return cl(4, 2, e, t);
}
function Sa(e, t) {
  return cl(4, 4, e, t);
}
function ka(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Ea(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), cl(4, 4, ka.bind(null, t, e), n)
  );
}
function Ei() {}
function Ca(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wi(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function _a(e, t) {
  var n = Ne();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && wi(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Na(e, t, n) {
  return zt & 21
    ? (De(n, t) || ((n = Ls()), (A.lanes |= n), (Mt |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (fe = !0)), (e.memoizedState = n));
}
function sd(e, t) {
  var n = R;
  (R = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = $l.transition;
  $l.transition = {};
  try {
    e(!1), t();
  } finally {
    (R = n), ($l.transition = r);
  }
}
function Pa() {
  return Ne().memoizedState;
}
function ad(e, t, n) {
  var r = at(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    za(e))
  )
    Ma(t, n);
  else if (((n = aa(e, t, n, r)), n !== null)) {
    var l = ue();
    Re(n, e, r, l), ja(n, t, r);
  }
}
function cd(e, t, n) {
  var r = at(e),
    l = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
  if (za(e)) Ma(t, l);
  else {
    var o = e.alternate;
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var i = t.lastRenderedState,
          u = o(i, n);
        if (((l.hasEagerState = !0), (l.eagerState = u), De(u, i))) {
          var s = t.interleaved;
          s === null
            ? ((l.next = l), mi(t))
            : ((l.next = s.next), (s.next = l)),
            (t.interleaved = l);
          return;
        }
      } catch {
      } finally {
      }
    (n = aa(e, t, l, r)),
      n !== null && ((l = ue()), Re(n, e, r, l), ja(n, t, r));
  }
}
function za(e) {
  var t = e.alternate;
  return e === A || (t !== null && t === A);
}
function Ma(e, t) {
  zn = Gr = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function ja(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), ei(e, n);
  }
}
var Kr = {
    readContext: _e,
    useCallback: te,
    useContext: te,
    useEffect: te,
    useImperativeHandle: te,
    useInsertionEffect: te,
    useLayoutEffect: te,
    useMemo: te,
    useReducer: te,
    useRef: te,
    useState: te,
    useDebugValue: te,
    useDeferredValue: te,
    useTransition: te,
    useMutableSource: te,
    useSyncExternalStore: te,
    useId: te,
    unstable_isNewReconciler: !1,
  },
  fd = {
    readContext: _e,
    useCallback: function (e, t) {
      return (Fe().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: _e,
    useEffect: Cu,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Nr(4194308, 4, ka.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Nr(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Nr(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Fe();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Fe();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = ad.bind(null, A, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Fe();
      return (
        (e = {
          current: e,
        }),
        (t.memoizedState = e)
      );
    },
    useState: Eu,
    useDebugValue: Ei,
    useDeferredValue: function (e) {
      return (Fe().memoizedState = e);
    },
    useTransition: function () {
      var e = Eu(!1),
        t = e[0];
      return (e = sd.bind(null, e[1])), (Fe().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = A,
        l = Fe();
      if (H) {
        if (n === void 0) throw Error(y(407));
        n = n();
      } else {
        if (((n = t()), J === null)) throw Error(y(349));
        zt & 30 || ma(r, t, n);
      }
      l.memoizedState = n;
      var o = {
        value: n,
        getSnapshot: t,
      };
      return (
        (l.queue = o),
        Cu(va.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Yn(9, ha.bind(null, r, o, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Fe(),
        t = J.identifierPrefix;
      if (H) {
        var n = Be,
          r = $e;
        (n = (r & ~(1 << (32 - Te(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = Qn++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = ud++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  dd = {
    readContext: _e,
    useCallback: Ca,
    useContext: _e,
    useEffect: ki,
    useImperativeHandle: Ea,
    useInsertionEffect: xa,
    useLayoutEffect: Sa,
    useMemo: _a,
    useReducer: Bl,
    useRef: wa,
    useState: function () {
      return Bl(Zn);
    },
    useDebugValue: Ei,
    useDeferredValue: function (e) {
      var t = Ne();
      return Na(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Bl(Zn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: Pa,
    unstable_isNewReconciler: !1,
  },
  pd = {
    readContext: _e,
    useCallback: Ca,
    useContext: _e,
    useEffect: ki,
    useImperativeHandle: Ea,
    useInsertionEffect: xa,
    useLayoutEffect: Sa,
    useMemo: _a,
    useReducer: Vl,
    useRef: wa,
    useState: function () {
      return Vl(Zn);
    },
    useDebugValue: Ei,
    useDeferredValue: function (e) {
      var t = Ne();
      return Y === null ? (t.memoizedState = e) : Na(t, Y.memoizedState, e);
    },
    useTransition: function () {
      var e = Vl(Zn)[0],
        t = Ne().memoizedState;
      return [e, t];
    },
    useMutableSource: da,
    useSyncExternalStore: pa,
    useId: Pa,
    unstable_isNewReconciler: !1,
  };
function Me(e, t) {
  if (e && e.defaultProps) {
    (t = W({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function No(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : W({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var fl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? Tt(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = Ve(r, l);
    (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = ue(),
      l = at(e),
      o = Ve(r, l);
    (o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = ut(e, o, l)),
      t !== null && (Re(t, e, l, r), Cr(t, e, l));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = ue(),
      r = at(e),
      l = Ve(n, r);
    (l.tag = 2),
      t != null && (l.callback = t),
      (t = ut(e, l, r)),
      t !== null && (Re(t, e, r, n), Cr(t, e, r));
  },
};
function _u(e, t, n, r, l, o, i) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, o, i)
      : t.prototype && t.prototype.isPureReactComponent
      ? !Un(n, r) || !Un(l, o)
      : !0
  );
}
function La(e, t, n) {
  var r = !1,
    l = dt,
    o = t.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = _e(o))
      : ((l = pe(t) ? Nt : oe.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? bt(e, l) : dt)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = fl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = l),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  );
}
function Nu(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && fl.enqueueReplaceState(t, t.state, null);
}
function Po(e, t, n, r) {
  var l = e.stateNode;
  (l.props = n), (l.state = e.memoizedState), (l.refs = {}), hi(e);
  var o = t.contextType;
  typeof o == "object" && o !== null
    ? (l.context = _e(o))
    : ((o = pe(t) ? Nt : oe.current), (l.context = bt(e, o))),
    (l.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == "function" && (No(e, t, o, n), (l.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof l.getSnapshotBeforeUpdate == "function" ||
      (typeof l.UNSAFE_componentWillMount != "function" &&
        typeof l.componentWillMount != "function") ||
      ((t = l.state),
      typeof l.componentWillMount == "function" && l.componentWillMount(),
      typeof l.UNSAFE_componentWillMount == "function" &&
        l.UNSAFE_componentWillMount(),
      t !== l.state && fl.enqueueReplaceState(l, l.state, null),
      Zr(e, n, l, r),
      (l.state = e.memoizedState)),
    typeof l.componentDidMount == "function" && (e.flags |= 4194308);
}
function rn(e, t) {
  try {
    var n = "",
      r = t;
    do (n += Ac(r)), (r = r.return);
    while (r);
    var l = n;
  } catch (o) {
    l =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return {
    value: e,
    source: t,
    stack: l,
    digest: null,
  };
}
function Ql(e, t, n) {
  return {
    value: e,
    source: null,
    stack: n ?? null,
    digest: t ?? null,
  };
}
function zo(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var md = typeof WeakMap == "function" ? WeakMap : Map;
function Ta(e, t, n) {
  (n = Ve(-1, n)),
    (n.tag = 3),
    (n.payload = {
      element: null,
    });
  var r = t.value;
  return (
    (n.callback = function () {
      Jr || ((Jr = !0), (Ho = r)), zo(e, t);
    }),
    n
  );
}
function Ra(e, t, n) {
  (n = Ve(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var l = t.value;
    (n.payload = function () {
      return r(l);
    }),
      (n.callback = function () {
        zo(e, t);
      });
  }
  var o = e.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (n.callback = function () {
        zo(e, t),
          typeof r != "function" &&
            (st === null ? (st = new Set([this])) : st.add(this));
        var i = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: i !== null ? i : "",
        });
      }),
    n
  );
}
function Pu(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new md();
    var l = new Set();
    r.set(t, l);
  } else (l = r.get(t)), l === void 0 && ((l = new Set()), r.set(t, l));
  l.has(n) || (l.add(n), (e = zd.bind(null, e, t, n)), t.then(e, e));
}
function zu(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Mu(e, t, n, r, l) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = l), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ve(-1, 1)), (t.tag = 2), ut(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var hd = Ke.ReactCurrentOwner,
  fe = !1;
function ie(e, t, n, r) {
  t.child = e === null ? sa(t, null, n, r) : tn(t, e.child, n, r);
}
function ju(e, t, n, r, l) {
  n = n.render;
  var o = t.ref;
  return (
    Xt(t, l),
    (r = xi(e, t, n, r, o, l)),
    (n = Si()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (H && n && si(t), (t.flags |= 1), ie(e, t, r, l), t.child)
  );
}
function Lu(e, t, n, r, l) {
  if (e === null) {
    var o = n.type;
    return typeof o == "function" &&
      !Li(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), Da(e, t, o, r, l))
      : ((e = jr(n.type, null, r, t, t.mode, l)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((o = e.child), !(e.lanes & l))) {
    var i = o.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : Un), n(i, r) && e.ref === t.ref)
    )
      return Ge(e, t, l);
  }
  return (
    (t.flags |= 1),
    (e = ct(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function Da(e, t, n, r, l) {
  if (e !== null) {
    var o = e.memoizedProps;
    if (Un(o, r) && e.ref === t.ref)
      if (((fe = !1), (t.pendingProps = r = o), (e.lanes & l) !== 0))
        e.flags & 131072 && (fe = !0);
      else return (t.lanes = e.lanes), Ge(e, t, l);
  }
  return Mo(e, t, n, r, l);
}
function Oa(e, t, n) {
  var r = t.pendingProps,
    l = r.children,
    o = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        D(Qt, he),
        (he |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          D(Qt, he),
          (he |= e),
          null
        );
      (t.memoizedState = {
        baseLanes: 0,
        cachePool: null,
        transitions: null,
      }),
        (r = o !== null ? o.baseLanes : n),
        D(Qt, he),
        (he |= r);
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      D(Qt, he),
      (he |= r);
  return ie(e, t, l, n), t.child;
}
function Fa(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Mo(e, t, n, r, l) {
  var o = pe(n) ? Nt : oe.current;
  return (
    (o = bt(t, o)),
    Xt(t, l),
    (n = xi(e, t, n, r, o, l)),
    (r = Si()),
    e !== null && !fe
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~l),
        Ge(e, t, l))
      : (H && r && si(t), (t.flags |= 1), ie(e, t, n, l), t.child)
  );
}
function Tu(e, t, n, r, l) {
  if (pe(n)) {
    var o = !0;
    Wr(t);
  } else o = !1;
  if ((Xt(t, l), t.stateNode === null))
    Pr(e, t), La(t, n, r), Po(t, n, r, l), (r = !0);
  else if (e === null) {
    var i = t.stateNode,
      u = t.memoizedProps;
    i.props = u;
    var s = i.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = _e(c))
      : ((c = pe(n) ? Nt : oe.current), (c = bt(t, c)));
    var h = n.getDerivedStateFromProps,
      m =
        typeof h == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function";
    m ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== r || s !== c) && Nu(t, i, r, c)),
      (qe = !1);
    var p = t.memoizedState;
    (i.state = p),
      Zr(t, r, i, l),
      (s = t.memoizedState),
      u !== r || p !== s || de.current || qe
        ? (typeof h == "function" && (No(t, n, h, r), (s = t.memoizedState)),
          (u = qe || _u(t, n, u, r, p, s, c))
            ? (m ||
                (typeof i.UNSAFE_componentWillMount != "function" &&
                  typeof i.componentWillMount != "function") ||
                (typeof i.componentWillMount == "function" &&
                  i.componentWillMount(),
                typeof i.UNSAFE_componentWillMount == "function" &&
                  i.UNSAFE_componentWillMount()),
              typeof i.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (i.props = r),
          (i.state = s),
          (i.context = c),
          (r = u))
        : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (i = t.stateNode),
      ca(e, t),
      (u = t.memoizedProps),
      (c = t.type === t.elementType ? u : Me(t.type, u)),
      (i.props = c),
      (m = t.pendingProps),
      (p = i.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = _e(s))
        : ((s = pe(n) ? Nt : oe.current), (s = bt(t, s)));
    var g = n.getDerivedStateFromProps;
    (h =
      typeof g == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function") ||
      (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
        typeof i.componentWillReceiveProps != "function") ||
      ((u !== m || p !== s) && Nu(t, i, r, s)),
      (qe = !1),
      (p = t.memoizedState),
      (i.state = p),
      Zr(t, r, i, l);
    var w = t.memoizedState;
    u !== m || p !== w || de.current || qe
      ? (typeof g == "function" && (No(t, n, g, r), (w = t.memoizedState)),
        (c = qe || _u(t, n, c, r, p, w, s) || !1)
          ? (h ||
              (typeof i.UNSAFE_componentWillUpdate != "function" &&
                typeof i.componentWillUpdate != "function") ||
              (typeof i.componentWillUpdate == "function" &&
                i.componentWillUpdate(r, w, s),
              typeof i.UNSAFE_componentWillUpdate == "function" &&
                i.UNSAFE_componentWillUpdate(r, w, s)),
            typeof i.componentDidUpdate == "function" && (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof i.componentDidUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            typeof i.getSnapshotBeforeUpdate != "function" ||
              (u === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = w)),
        (i.props = r),
        (i.state = w),
        (i.context = s),
        (r = c))
      : (typeof i.componentDidUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 4),
        typeof i.getSnapshotBeforeUpdate != "function" ||
          (u === e.memoizedProps && p === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return jo(e, t, n, r, o, l);
}
function jo(e, t, n, r, l, o) {
  Fa(e, t);
  var i = (t.flags & 128) !== 0;
  if (!r && !i) return l && yu(t, n, !1), Ge(e, t, o);
  (r = t.stateNode), (hd.current = t);
  var u =
    i && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && i
      ? ((t.child = tn(t, e.child, null, o)), (t.child = tn(t, null, u, o)))
      : ie(e, t, u, o),
    (t.memoizedState = r.state),
    l && yu(t, n, !0),
    t.child
  );
}
function Ia(e) {
  var t = e.stateNode;
  t.pendingContext
    ? vu(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && vu(e, t.context, !1),
    vi(e, t.containerInfo);
}
function Ru(e, t, n, r, l) {
  return en(), ci(l), (t.flags |= 256), ie(e, t, n, r), t.child;
}
var Lo = {
  dehydrated: null,
  treeContext: null,
  retryLane: 0,
};
function To(e) {
  return {
    baseLanes: e,
    cachePool: null,
    transitions: null,
  };
}
function Ha(e, t, n) {
  var r = t.pendingProps,
    l = U.current,
    o = !1,
    i = (t.flags & 128) !== 0,
    u;
  if (
    ((u = i) ||
      (u = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0),
    u
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (l |= 1),
    D(U, l & 1),
    e === null)
  )
    return (
      Co(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((i = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (i = {
                mode: "hidden",
                children: i,
              }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = i))
                : (o = ml(i, r, 0, null)),
              (e = _t(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = To(n)),
              (t.memoizedState = Lo),
              e)
            : Ci(t, i))
    );
  if (((l = e.memoizedState), l !== null && ((u = l.dehydrated), u !== null)))
    return vd(e, t, i, r, u, l, n);
  if (o) {
    (o = r.fallback), (i = t.mode), (l = e.child), (u = l.sibling);
    var s = {
      mode: "hidden",
      children: r.children,
    };
    return (
      !(i & 1) && t.child !== l
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = ct(l, s)), (r.subtreeFlags = l.subtreeFlags & 14680064)),
      u !== null ? (o = ct(u, o)) : ((o = _t(o, i, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (i = e.child.memoizedState),
      (i =
        i === null
          ? To(n)
          : {
              baseLanes: i.baseLanes | n,
              cachePool: null,
              transitions: i.transitions,
            }),
      (o.memoizedState = i),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = Lo),
      r
    );
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = ct(o, {
      mode: "visible",
      children: r.children,
    })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Ci(e, t) {
  return (
    (t = ml(
      {
        mode: "visible",
        children: t,
      },
      e.mode,
      0,
      null
    )),
    (t.return = e),
    (e.child = t)
  );
}
function hr(e, t, n, r) {
  return (
    r !== null && ci(r),
    tn(t, e.child, null, n),
    (e = Ci(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function vd(e, t, n, r, l, o, i) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ql(Error(y(422)))), hr(e, t, i, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((o = r.fallback),
        (l = t.mode),
        (r = ml(
          {
            mode: "visible",
            children: r.children,
          },
          l,
          0,
          null
        )),
        (o = _t(o, l, i, null)),
        (o.flags |= 2),
        (r.return = t),
        (o.return = t),
        (r.sibling = o),
        (t.child = r),
        t.mode & 1 && tn(t, e.child, null, i),
        (t.child.memoizedState = To(i)),
        (t.memoizedState = Lo),
        o);
  if (!(t.mode & 1)) return hr(e, t, i, null);
  if (l.data === "$!") {
    if (((r = l.nextSibling && l.nextSibling.dataset), r)) var u = r.dgst;
    return (r = u), (o = Error(y(419))), (r = Ql(o, r, void 0)), hr(e, t, i, r);
  }
  if (((u = (i & e.childLanes) !== 0), fe || u)) {
    if (((r = J), r !== null)) {
      switch (i & -i) {
        case 4:
          l = 2;
          break;
        case 16:
          l = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          l = 32;
          break;
        case 536870912:
          l = 268435456;
          break;
        default:
          l = 0;
      }
      (l = l & (r.suspendedLanes | i) ? 0 : l),
        l !== 0 &&
          l !== o.retryLane &&
          ((o.retryLane = l), Ye(e, l), Re(r, e, l, -1));
    }
    return ji(), (r = Ql(Error(y(421)))), hr(e, t, i, r);
  }
  return l.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = Md.bind(null, e)),
      (l._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (ve = it(l.nextSibling)),
      (ye = t),
      (H = !0),
      (Le = null),
      e !== null &&
        ((Se[ke++] = $e),
        (Se[ke++] = Be),
        (Se[ke++] = Pt),
        ($e = e.id),
        (Be = e.overflow),
        (Pt = t)),
      (t = Ci(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Du(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), _o(e.return, t, n);
}
function Zl(e, t, n, r, l) {
  var o = e.memoizedState;
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = l));
}
function Ua(e, t, n) {
  var r = t.pendingProps,
    l = r.revealOrder,
    o = r.tail;
  if ((ie(e, t, r.children, n), (r = U.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Du(e, n, t);
        else if (e.tag === 19) Du(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((D(U, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (l) {
      case "forwards":
        for (n = t.child, l = null; n !== null; )
          (e = n.alternate),
            e !== null && Yr(e) === null && (l = n),
            (n = n.sibling);
        (n = l),
          n === null
            ? ((l = t.child), (t.child = null))
            : ((l = n.sibling), (n.sibling = null)),
          Zl(t, !1, l, n, o);
        break;
      case "backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (((e = l.alternate), e !== null && Yr(e) === null)) {
            t.child = l;
            break;
          }
          (e = l.sibling), (l.sibling = n), (n = l), (l = e);
        }
        Zl(t, !0, n, null, o);
        break;
      case "together":
        Zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Pr(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Ge(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Mt |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(y(153));
  if (t.child !== null) {
    for (
      e = t.child, n = ct(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = ct(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function yd(e, t, n) {
  switch (t.tag) {
    case 3:
      Ia(t), en();
      break;
    case 5:
      fa(t);
      break;
    case 1:
      pe(t.type) && Wr(t);
      break;
    case 4:
      vi(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        l = t.memoizedProps.value;
      D(Vr, r._currentValue), (r._currentValue = l);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (D(U, U.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ha(e, t, n)
          : (D(U, U.current & 1),
            (e = Ge(e, t, n)),
            e !== null ? e.sibling : null);
      D(U, U.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Ua(e, t, n);
        t.flags |= 128;
      }
      if (
        ((l = t.memoizedState),
        l !== null &&
          ((l.rendering = null), (l.tail = null), (l.lastEffect = null)),
        D(U, U.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), Oa(e, t, n);
  }
  return Ge(e, t, n);
}
var Aa, Ro, Wa, $a;
Aa = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Ro = function () {};
Wa = function (e, t, n, r) {
  var l = e.memoizedProps;
  if (l !== r) {
    (e = t.stateNode), kt(Ue.current);
    var o = null;
    switch (n) {
      case "input":
        (l = eo(e, l)), (r = eo(e, r)), (o = []);
        break;
      case "select":
        (l = W({}, l, {
          value: void 0,
        })),
          (r = W({}, r, {
            value: void 0,
          })),
          (o = []);
        break;
      case "textarea":
        (l = ro(e, l)), (r = ro(e, r)), (o = []);
        break;
      default:
        typeof l.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = Ur);
    }
    oo(n, r);
    var i;
    n = null;
    for (c in l)
      if (!r.hasOwnProperty(c) && l.hasOwnProperty(c) && l[c] != null)
        if (c === "style") {
          var u = l[c];
          for (i in u) u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (Tn.hasOwnProperty(c)
              ? o || (o = [])
              : (o = o || []).push(c, null));
    for (c in r) {
      var s = r[c];
      if (
        ((u = l != null ? l[c] : void 0),
        r.hasOwnProperty(c) && s !== u && (s != null || u != null))
      )
        if (c === "style")
          if (u) {
            for (i in u)
              !u.hasOwnProperty(i) ||
                (s && s.hasOwnProperty(i)) ||
                (n || (n = {}), (n[i] = ""));
            for (i in s)
              s.hasOwnProperty(i) &&
                u[i] !== s[i] &&
                (n || (n = {}), (n[i] = s[i]));
          } else n || (o || (o = []), o.push(c, n)), (n = s);
        else
          c === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (u = u ? u.__html : void 0),
              s != null && u !== s && (o = o || []).push(c, s))
            : c === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (o = o || []).push(c, "" + s)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (Tn.hasOwnProperty(c)
                ? (s != null && c === "onScroll" && O("scroll", e),
                  o || u === s || (o = []))
                : (o = o || []).push(c, s));
    }
    n && (o = o || []).push("style", n);
    var c = o;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
$a = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function yn(e, t) {
  if (!H)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function ne(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags & 14680064),
        (r |= l.flags & 14680064),
        (l.return = e),
        (l = l.sibling);
  else
    for (l = e.child; l !== null; )
      (n |= l.lanes | l.childLanes),
        (r |= l.subtreeFlags),
        (r |= l.flags),
        (l.return = e),
        (l = l.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function gd(e, t, n) {
  var r = t.pendingProps;
  switch ((ai(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return ne(t), null;
    case 1:
      return pe(t.type) && Ar(), ne(t), null;
    case 3:
      return (
        (r = t.stateNode),
        nn(),
        F(de),
        F(oe),
        gi(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (pr(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Le !== null && (Wo(Le), (Le = null)))),
        Ro(e, t),
        ne(t),
        null
      );
    case 5:
      yi(t);
      var l = kt(Vn.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Wa(e, t, n, r, l),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(y(166));
          return ne(t), null;
        }
        if (((e = kt(Ue.current)), pr(t))) {
          (r = t.stateNode), (n = t.type);
          var o = t.memoizedProps;
          switch (((r[Ie] = t), (r[$n] = o), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              O("cancel", r), O("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              O("load", r);
              break;
            case "video":
            case "audio":
              for (l = 0; l < kn.length; l++) O(kn[l], r);
              break;
            case "source":
              O("error", r);
              break;
            case "img":
            case "image":
            case "link":
              O("error", r), O("load", r);
              break;
            case "details":
              O("toggle", r);
              break;
            case "input":
              Bi(r, o), O("invalid", r);
              break;
            case "select":
              (r._wrapperState = {
                wasMultiple: !!o.multiple,
              }),
                O("invalid", r);
              break;
            case "textarea":
              Qi(r, o), O("invalid", r);
          }
          oo(n, o), (l = null);
          for (var i in o)
            if (o.hasOwnProperty(i)) {
              var u = o[i];
              i === "children"
                ? typeof u == "string"
                  ? r.textContent !== u &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", u]))
                  : typeof u == "number" &&
                    r.textContent !== "" + u &&
                    (o.suppressHydrationWarning !== !0 &&
                      dr(r.textContent, u, e),
                    (l = ["children", "" + u]))
                : Tn.hasOwnProperty(i) &&
                  u != null &&
                  i === "onScroll" &&
                  O("scroll", r);
            }
          switch (n) {
            case "input":
              lr(r), Vi(r, o, !0);
              break;
            case "textarea":
              lr(r), Zi(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (r.onclick = Ur);
          }
          (r = l), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (i = l.nodeType === 9 ? l : l.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = vs(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = i.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = i.createElement(n, {
                    is: r.is,
                  }))
                : ((e = i.createElement(n)),
                  n === "select" &&
                    ((i = e),
                    r.multiple
                      ? (i.multiple = !0)
                      : r.size && (i.size = r.size)))
              : (e = i.createElementNS(e, n)),
            (e[Ie] = t),
            (e[$n] = r),
            Aa(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((i = io(n, r)), n)) {
              case "dialog":
                O("cancel", e), O("close", e), (l = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                O("load", e), (l = r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < kn.length; l++) O(kn[l], e);
                l = r;
                break;
              case "source":
                O("error", e), (l = r);
                break;
              case "img":
              case "image":
              case "link":
                O("error", e), O("load", e), (l = r);
                break;
              case "details":
                O("toggle", e), (l = r);
                break;
              case "input":
                Bi(e, r), (l = eo(e, r)), O("invalid", e);
                break;
              case "option":
                l = r;
                break;
              case "select":
                (e._wrapperState = {
                  wasMultiple: !!r.multiple,
                }),
                  (l = W({}, r, {
                    value: void 0,
                  })),
                  O("invalid", e);
                break;
              case "textarea":
                Qi(e, r), (l = ro(e, r)), O("invalid", e);
                break;
              default:
                l = r;
            }
            oo(n, l), (u = l);
            for (o in u)
              if (u.hasOwnProperty(o)) {
                var s = u[o];
                o === "style"
                  ? ws(e, s)
                  : o === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && ys(e, s))
                  : o === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && Rn(e, s)
                    : typeof s == "number" && Rn(e, "" + s)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (Tn.hasOwnProperty(o)
                      ? s != null && o === "onScroll" && O("scroll", e)
                      : s != null && Go(e, o, s, i));
              }
            switch (n) {
              case "input":
                lr(e), Vi(e, r, !1);
                break;
              case "textarea":
                lr(e), Zi(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + ft(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Zt(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Zt(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof l.onClick == "function" && (e.onclick = Ur);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return ne(t), null;
    case 6:
      if (e && t.stateNode != null) $a(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(y(166));
        if (((n = kt(Vn.current)), kt(Ue.current), pr(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Ie] = t),
            (o = r.nodeValue !== n) && ((e = ye), e !== null))
          )
            switch (e.tag) {
              case 3:
                dr(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  dr(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          o && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Ie] = t),
            (t.stateNode = r);
      }
      return ne(t), null;
    case 13:
      if (
        (F(U),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (H && ve !== null && t.mode & 1 && !(t.flags & 128))
          ia(), en(), (t.flags |= 98560), (o = !1);
        else if (((o = pr(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(y(318));
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(y(317));
            o[Ie] = t;
          } else
            en(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          ne(t), (o = !1);
        } else Le !== null && (Wo(Le), (Le = null)), (o = !0);
        if (!o) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || U.current & 1 ? G === 0 && (G = 3) : ji())),
          t.updateQueue !== null && (t.flags |= 4),
          ne(t),
          null);
    case 4:
      return (
        nn(), Ro(e, t), e === null && An(t.stateNode.containerInfo), ne(t), null
      );
    case 10:
      return pi(t.type._context), ne(t), null;
    case 17:
      return pe(t.type) && Ar(), ne(t), null;
    case 19:
      if ((F(U), (o = t.memoizedState), o === null)) return ne(t), null;
      if (((r = (t.flags & 128) !== 0), (i = o.rendering), i === null))
        if (r) yn(o, !1);
        else {
          if (G !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((i = Yr(e)), i !== null)) {
                for (
                  t.flags |= 128,
                    yn(o, !1),
                    r = i.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (i = o.alternate),
                    i === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = i.childLanes),
                        (o.lanes = i.lanes),
                        (o.child = i.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = i.memoizedProps),
                        (o.memoizedState = i.memoizedState),
                        (o.updateQueue = i.updateQueue),
                        (o.type = i.type),
                        (e = i.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return D(U, (U.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          o.tail !== null &&
            Q() > ln &&
            ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Yr(i)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              yn(o, !0),
              o.tail === null && o.tailMode === "hidden" && !i.alternate && !H)
            )
              return ne(t), null;
          } else
            2 * Q() - o.renderingStartTime > ln &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), yn(o, !1), (t.lanes = 4194304));
        o.isBackwards
          ? ((i.sibling = t.child), (t.child = i))
          : ((n = o.last),
            n !== null ? (n.sibling = i) : (t.child = i),
            (o.last = i));
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = Q()),
          (t.sibling = null),
          (n = U.current),
          D(U, r ? (n & 1) | 2 : n & 1),
          t)
        : (ne(t), null);
    case 22:
    case 23:
      return (
        Mi(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? he & 1073741824 && (ne(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : ne(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(y(156, t.tag));
}
function wd(e, t) {
  switch ((ai(t), t.tag)) {
    case 1:
      return (
        pe(t.type) && Ar(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        nn(),
        F(de),
        F(oe),
        gi(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return yi(t), null;
    case 13:
      if ((F(U), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
        if (t.alternate === null) throw Error(y(340));
        en();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return F(U), null;
    case 4:
      return nn(), null;
    case 10:
      return pi(t.type._context), null;
    case 22:
    case 23:
      return Mi(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var vr = !1,
  le = !1,
  xd = typeof WeakSet == "function" ? WeakSet : Set,
  S = null;
function Vt(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        $(e, t, r);
      }
    else n.current = null;
}
function Do(e, t, n) {
  try {
    n();
  } catch (r) {
    $(e, t, r);
  }
}
var Ou = !1;
function Sd(e, t) {
  if (((yo = Fr), (e = Ys()), ui(e))) {
    if ("selectionStart" in e)
      var n = {
        start: e.selectionStart,
        end: e.selectionEnd,
      };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var l = r.anchorOffset,
            o = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, o.nodeType;
          } catch {
            n = null;
            break e;
          }
          var i = 0,
            u = -1,
            s = -1,
            c = 0,
            h = 0,
            m = e,
            p = null;
          t: for (;;) {
            for (
              var g;
              m !== n || (l !== 0 && m.nodeType !== 3) || (u = i + l),
                m !== o || (r !== 0 && m.nodeType !== 3) || (s = i + r),
                m.nodeType === 3 && (i += m.nodeValue.length),
                (g = m.firstChild) !== null;

            )
              (p = m), (m = g);
            for (;;) {
              if (m === e) break t;
              if (
                (p === n && ++c === l && (u = i),
                p === o && ++h === r && (s = i),
                (g = m.nextSibling) !== null)
              )
                break;
              (m = p), (p = m.parentNode);
            }
            m = g;
          }
          n =
            u === -1 || s === -1
              ? null
              : {
                  start: u,
                  end: s,
                };
        } else n = null;
      }
    n = n || {
      start: 0,
      end: 0,
    };
  } else n = null;
  for (
    go = {
      focusedElem: e,
      selectionRange: n,
    },
      Fr = !1,
      S = t;
    S !== null;

  )
    if (((t = S), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (S = e);
    else
      for (; S !== null; ) {
        t = S;
        try {
          var w = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (w !== null) {
                  var x = w.memoizedProps,
                    I = w.memoizedState,
                    f = t.stateNode,
                    a = f.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? x : Me(t.type, x),
                      I
                    );
                  f.__reactInternalSnapshotBeforeUpdate = a;
                }
                break;
              case 3:
                var d = t.stateNode.containerInfo;
                d.nodeType === 1
                  ? (d.textContent = "")
                  : d.nodeType === 9 &&
                    d.documentElement &&
                    d.removeChild(d.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(y(163));
            }
        } catch (v) {
          $(t, t.return, v);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (S = e);
          break;
        }
        S = t.return;
      }
  return (w = Ou), (Ou = !1), w;
}
function Mn(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var l = (r = r.next);
    do {
      if ((l.tag & e) === e) {
        var o = l.destroy;
        (l.destroy = void 0), o !== void 0 && Do(t, n, o);
      }
      l = l.next;
    } while (l !== r);
  }
}
function dl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Oo(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Ba(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Ba(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Ie], delete t[$n], delete t[So], delete t[rd], delete t[ld])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function Va(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Fu(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || Va(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function Fo(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = Ur));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Fo(e, t, n), e = e.sibling; e !== null; ) Fo(e, t, n), (e = e.sibling);
}
function Io(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Io(e, t, n), e = e.sibling; e !== null; ) Io(e, t, n), (e = e.sibling);
}
var q = null,
  je = !1;
function Xe(e, t, n) {
  for (n = n.child; n !== null; ) Qa(e, t, n), (n = n.sibling);
}
function Qa(e, t, n) {
  if (He && typeof He.onCommitFiberUnmount == "function")
    try {
      He.onCommitFiberUnmount(ll, n);
    } catch {}
  switch (n.tag) {
    case 5:
      le || Vt(n, t);
    case 6:
      var r = q,
        l = je;
      (q = null),
        Xe(e, t, n),
        (q = r),
        (je = l),
        q !== null &&
          (je
            ? ((e = q),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : q.removeChild(n.stateNode));
      break;
    case 18:
      q !== null &&
        (je
          ? ((e = q),
            (n = n.stateNode),
            e.nodeType === 8
              ? Ul(e.parentNode, n)
              : e.nodeType === 1 && Ul(e, n),
            In(e))
          : Ul(q, n.stateNode));
      break;
    case 4:
      (r = q),
        (l = je),
        (q = n.stateNode.containerInfo),
        (je = !0),
        Xe(e, t, n),
        (q = r),
        (je = l);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !le &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        l = r = r.next;
        do {
          var o = l,
            i = o.destroy;
          (o = o.tag),
            i !== void 0 && (o & 2 || o & 4) && Do(n, t, i),
            (l = l.next);
        } while (l !== r);
      }
      Xe(e, t, n);
      break;
    case 1:
      if (
        !le &&
        (Vt(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (u) {
          $(n, t, u);
        }
      Xe(e, t, n);
      break;
    case 21:
      Xe(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((le = (r = le) || n.memoizedState !== null), Xe(e, t, n), (le = r))
        : Xe(e, t, n);
      break;
    default:
      Xe(e, t, n);
  }
}
function Iu(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new xd()),
      t.forEach(function (r) {
        var l = jd.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(l, l));
      });
  }
}
function ze(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var l = n[r];
      try {
        var o = e,
          i = t,
          u = i;
        e: for (; u !== null; ) {
          switch (u.tag) {
            case 5:
              (q = u.stateNode), (je = !1);
              break e;
            case 3:
              (q = u.stateNode.containerInfo), (je = !0);
              break e;
            case 4:
              (q = u.stateNode.containerInfo), (je = !0);
              break e;
          }
          u = u.return;
        }
        if (q === null) throw Error(y(160));
        Qa(o, i, l), (q = null), (je = !1);
        var s = l.alternate;
        s !== null && (s.return = null), (l.return = null);
      } catch (c) {
        $(l, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) Za(t, e), (t = t.sibling);
}
function Za(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ze(t, e), Oe(e), r & 4)) {
        try {
          Mn(3, e, e.return), dl(3, e);
        } catch (x) {
          $(e, e.return, x);
        }
        try {
          Mn(5, e, e.return);
        } catch (x) {
          $(e, e.return, x);
        }
      }
      break;
    case 1:
      ze(t, e), Oe(e), r & 512 && n !== null && Vt(n, n.return);
      break;
    case 5:
      if (
        (ze(t, e),
        Oe(e),
        r & 512 && n !== null && Vt(n, n.return),
        e.flags & 32)
      ) {
        var l = e.stateNode;
        try {
          Rn(l, "");
        } catch (x) {
          $(e, e.return, x);
        }
      }
      if (r & 4 && ((l = e.stateNode), l != null)) {
        var o = e.memoizedProps,
          i = n !== null ? n.memoizedProps : o,
          u = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            u === "input" && o.type === "radio" && o.name != null && ms(l, o),
              io(u, i);
            var c = io(u, o);
            for (i = 0; i < s.length; i += 2) {
              var h = s[i],
                m = s[i + 1];
              h === "style"
                ? ws(l, m)
                : h === "dangerouslySetInnerHTML"
                ? ys(l, m)
                : h === "children"
                ? Rn(l, m)
                : Go(l, h, m, c);
            }
            switch (u) {
              case "input":
                to(l, o);
                break;
              case "textarea":
                hs(l, o);
                break;
              case "select":
                var p = l._wrapperState.wasMultiple;
                l._wrapperState.wasMultiple = !!o.multiple;
                var g = o.value;
                g != null
                  ? Zt(l, !!o.multiple, g, !1)
                  : p !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Zt(l, !!o.multiple, o.defaultValue, !0)
                      : Zt(l, !!o.multiple, o.multiple ? [] : "", !1));
            }
            l[$n] = o;
          } catch (x) {
            $(e, e.return, x);
          }
      }
      break;
    case 6:
      if ((ze(t, e), Oe(e), r & 4)) {
        if (e.stateNode === null) throw Error(y(162));
        (l = e.stateNode), (o = e.memoizedProps);
        try {
          l.nodeValue = o;
        } catch (x) {
          $(e, e.return, x);
        }
      }
      break;
    case 3:
      if (
        (ze(t, e), Oe(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          In(t.containerInfo);
        } catch (x) {
          $(e, e.return, x);
        }
      break;
    case 4:
      ze(t, e), Oe(e);
      break;
    case 13:
      ze(t, e),
        Oe(e),
        (l = e.child),
        l.flags & 8192 &&
          ((o = l.memoizedState !== null),
          (l.stateNode.isHidden = o),
          !o ||
            (l.alternate !== null && l.alternate.memoizedState !== null) ||
            (Pi = Q())),
        r & 4 && Iu(e);
      break;
    case 22:
      if (
        ((h = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((le = (c = le) || h), ze(t, e), (le = c)) : ze(t, e),
        Oe(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !h && e.mode & 1)
        )
          for (S = e, h = e.child; h !== null; ) {
            for (m = S = h; S !== null; ) {
              switch (((p = S), (g = p.child), p.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Mn(4, p, p.return);
                  break;
                case 1:
                  Vt(p, p.return);
                  var w = p.stateNode;
                  if (typeof w.componentWillUnmount == "function") {
                    (r = p), (n = p.return);
                    try {
                      (t = r),
                        (w.props = t.memoizedProps),
                        (w.state = t.memoizedState),
                        w.componentWillUnmount();
                    } catch (x) {
                      $(r, n, x);
                    }
                  }
                  break;
                case 5:
                  Vt(p, p.return);
                  break;
                case 22:
                  if (p.memoizedState !== null) {
                    Uu(m);
                    continue;
                  }
              }
              g !== null ? ((g.return = p), (S = g)) : Uu(m);
            }
            h = h.sibling;
          }
        e: for (h = null, m = e; ; ) {
          if (m.tag === 5) {
            if (h === null) {
              h = m;
              try {
                (l = m.stateNode),
                  c
                    ? ((o = l.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((u = m.stateNode),
                      (s = m.memoizedProps.style),
                      (i =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (u.style.display = gs("display", i)));
              } catch (x) {
                $(e, e.return, x);
              }
            }
          } else if (m.tag === 6) {
            if (h === null)
              try {
                m.stateNode.nodeValue = c ? "" : m.memoizedProps;
              } catch (x) {
                $(e, e.return, x);
              }
          } else if (
            ((m.tag !== 22 && m.tag !== 23) ||
              m.memoizedState === null ||
              m === e) &&
            m.child !== null
          ) {
            (m.child.return = m), (m = m.child);
            continue;
          }
          if (m === e) break e;
          for (; m.sibling === null; ) {
            if (m.return === null || m.return === e) break e;
            h === m && (h = null), (m = m.return);
          }
          h === m && (h = null), (m.sibling.return = m.return), (m = m.sibling);
        }
      }
      break;
    case 19:
      ze(t, e), Oe(e), r & 4 && Iu(e);
      break;
    case 21:
      break;
    default:
      ze(t, e), Oe(e);
  }
}
function Oe(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (Va(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(y(160));
      }
      switch (r.tag) {
        case 5:
          var l = r.stateNode;
          r.flags & 32 && (Rn(l, ""), (r.flags &= -33));
          var o = Fu(e);
          Io(e, o, l);
          break;
        case 3:
        case 4:
          var i = r.stateNode.containerInfo,
            u = Fu(e);
          Fo(e, u, i);
          break;
        default:
          throw Error(y(161));
      }
    } catch (s) {
      $(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function kd(e, t, n) {
  (S = e), Ya(e);
}
function Ya(e, t, n) {
  for (var r = (e.mode & 1) !== 0; S !== null; ) {
    var l = S,
      o = l.child;
    if (l.tag === 22 && r) {
      var i = l.memoizedState !== null || vr;
      if (!i) {
        var u = l.alternate,
          s = (u !== null && u.memoizedState !== null) || le;
        u = vr;
        var c = le;
        if (((vr = i), (le = s) && !c))
          for (S = l; S !== null; )
            (i = S),
              (s = i.child),
              i.tag === 22 && i.memoizedState !== null
                ? Au(l)
                : s !== null
                ? ((s.return = i), (S = s))
                : Au(l);
        for (; o !== null; ) (S = o), Ya(o), (o = o.sibling);
        (S = l), (vr = u), (le = c);
      }
      Hu(e);
    } else
      l.subtreeFlags & 8772 && o !== null ? ((o.return = l), (S = o)) : Hu(e);
  }
}
function Hu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              le || dl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !le)
                if (n === null) r.componentDidMount();
                else {
                  var l =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Me(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    l,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = t.updateQueue;
              o !== null && ku(t, o, r);
              break;
            case 3:
              var i = t.updateQueue;
              if (i !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                ku(t, i, n);
              }
              break;
            case 5:
              var u = t.stateNode;
              if (n === null && t.flags & 4) {
                n = u;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var c = t.alternate;
                if (c !== null) {
                  var h = c.memoizedState;
                  if (h !== null) {
                    var m = h.dehydrated;
                    m !== null && In(m);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(y(163));
          }
        le || (t.flags & 512 && Oo(t));
      } catch (p) {
        $(t, t.return, p);
      }
    }
    if (t === e) {
      S = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Uu(e) {
  for (; S !== null; ) {
    var t = S;
    if (t === e) {
      S = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (S = n);
      break;
    }
    S = t.return;
  }
}
function Au(e) {
  for (; S !== null; ) {
    var t = S;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            dl(4, t);
          } catch (s) {
            $(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var l = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              $(t, l, s);
            }
          }
          var o = t.return;
          try {
            Oo(t);
          } catch (s) {
            $(t, o, s);
          }
          break;
        case 5:
          var i = t.return;
          try {
            Oo(t);
          } catch (s) {
            $(t, i, s);
          }
      }
    } catch (s) {
      $(t, t.return, s);
    }
    if (t === e) {
      S = null;
      break;
    }
    var u = t.sibling;
    if (u !== null) {
      (u.return = t.return), (S = u);
      break;
    }
    S = t.return;
  }
}
var Ed = Math.ceil,
  Xr = Ke.ReactCurrentDispatcher,
  _i = Ke.ReactCurrentOwner,
  Ce = Ke.ReactCurrentBatchConfig,
  T = 0,
  J = null,
  Z = null,
  b = 0,
  he = 0,
  Qt = mt(0),
  G = 0,
  Gn = null,
  Mt = 0,
  pl = 0,
  Ni = 0,
  jn = null,
  ce = null,
  Pi = 0,
  ln = 1 / 0,
  Ae = null,
  Jr = !1,
  Ho = null,
  st = null,
  yr = !1,
  nt = null,
  qr = 0,
  Ln = 0,
  Uo = null,
  zr = -1,
  Mr = 0;
function ue() {
  return T & 6 ? Q() : zr !== -1 ? zr : (zr = Q());
}
function at(e) {
  return e.mode & 1
    ? T & 2 && b !== 0
      ? b & -b
      : id.transition !== null
      ? (Mr === 0 && (Mr = Ls()), Mr)
      : ((e = R),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Hs(e.type))),
        e)
    : 1;
}
function Re(e, t, n, r) {
  if (50 < Ln) throw ((Ln = 0), (Uo = null), Error(y(185)));
  Xn(e, n, r),
    (!(T & 2) || e !== J) &&
      (e === J && (!(T & 2) && (pl |= n), G === 4 && et(e, b)),
      me(e, r),
      n === 1 && T === 0 && !(t.mode & 1) && ((ln = Q() + 500), al && ht()));
}
function me(e, t) {
  var n = e.callbackNode;
  of(e, t);
  var r = Or(e, e === J ? b : 0);
  if (r === 0)
    n !== null && Ki(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && Ki(n), t === 1))
      e.tag === 0 ? od(Wu.bind(null, e)) : ra(Wu.bind(null, e)),
        td(function () {
          !(T & 6) && ht();
        }),
        (n = null);
    else {
      switch (Ts(r)) {
        case 1:
          n = bo;
          break;
        case 4:
          n = Ms;
          break;
        case 16:
          n = Dr;
          break;
        case 536870912:
          n = js;
          break;
        default:
          n = Dr;
      }
      n = tc(n, Ga.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function Ga(e, t) {
  if (((zr = -1), (Mr = 0), T & 6)) throw Error(y(327));
  var n = e.callbackNode;
  if (Jt() && e.callbackNode !== n) return null;
  var r = Or(e, e === J ? b : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = br(e, r);
  else {
    t = r;
    var l = T;
    T |= 2;
    var o = Xa();
    (J !== e || b !== t) && ((Ae = null), (ln = Q() + 500), Ct(e, t));
    do
      try {
        Nd();
        break;
      } catch (u) {
        Ka(e, u);
      }
    while (!0);
    di(),
      (Xr.current = o),
      (T = l),
      Z !== null ? (t = 0) : ((J = null), (b = 0), (t = G));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((l = fo(e)), l !== 0 && ((r = l), (t = Ao(e, l)))), t === 1)
    )
      throw ((n = Gn), Ct(e, 0), et(e, r), me(e, Q()), n);
    if (t === 6) et(e, r);
    else {
      if (
        ((l = e.current.alternate),
        !(r & 30) &&
          !Cd(l) &&
          ((t = br(e, r)),
          t === 2 && ((o = fo(e)), o !== 0 && ((r = o), (t = Ao(e, o)))),
          t === 1))
      )
        throw ((n = Gn), Ct(e, 0), et(e, r), me(e, Q()), n);
      switch (((e.finishedWork = l), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(y(345));
        case 2:
          wt(e, ce, Ae);
          break;
        case 3:
          if (
            (et(e, r), (r & 130023424) === r && ((t = Pi + 500 - Q()), 10 < t))
          ) {
            if (Or(e, 0) !== 0) break;
            if (((l = e.suspendedLanes), (l & r) !== r)) {
              ue(), (e.pingedLanes |= e.suspendedLanes & l);
              break;
            }
            e.timeoutHandle = xo(wt.bind(null, e, ce, Ae), t);
            break;
          }
          wt(e, ce, Ae);
          break;
        case 4:
          if ((et(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, l = -1; 0 < r; ) {
            var i = 31 - Te(r);
            (o = 1 << i), (i = t[i]), i > l && (l = i), (r &= ~o);
          }
          if (
            ((r = l),
            (r = Q() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * Ed(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = xo(wt.bind(null, e, ce, Ae), r);
            break;
          }
          wt(e, ce, Ae);
          break;
        case 5:
          wt(e, ce, Ae);
          break;
        default:
          throw Error(y(329));
      }
    }
  }
  return me(e, Q()), e.callbackNode === n ? Ga.bind(null, e) : null;
}
function Ao(e, t) {
  var n = jn;
  return (
    e.current.memoizedState.isDehydrated && (Ct(e, t).flags |= 256),
    (e = br(e, t)),
    e !== 2 && ((t = ce), (ce = n), t !== null && Wo(t)),
    e
  );
}
function Wo(e) {
  ce === null ? (ce = e) : ce.push.apply(ce, e);
}
function Cd(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var l = n[r],
            o = l.getSnapshot;
          l = l.value;
          try {
            if (!De(o(), l)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function et(e, t) {
  for (
    t &= ~Ni,
      t &= ~pl,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Te(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Wu(e) {
  if (T & 6) throw Error(y(327));
  Jt();
  var t = Or(e, 0);
  if (!(t & 1)) return me(e, Q()), null;
  var n = br(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = fo(e);
    r !== 0 && ((t = r), (n = Ao(e, r)));
  }
  if (n === 1) throw ((n = Gn), Ct(e, 0), et(e, t), me(e, Q()), n);
  if (n === 6) throw Error(y(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    wt(e, ce, Ae),
    me(e, Q()),
    null
  );
}
function zi(e, t) {
  var n = T;
  T |= 1;
  try {
    return e(t);
  } finally {
    (T = n), T === 0 && ((ln = Q() + 500), al && ht());
  }
}
function jt(e) {
  nt !== null && nt.tag === 0 && !(T & 6) && Jt();
  var t = T;
  T |= 1;
  var n = Ce.transition,
    r = R;
  try {
    if (((Ce.transition = null), (R = 1), e)) return e();
  } finally {
    (R = r), (Ce.transition = n), (T = t), !(T & 6) && ht();
  }
}
function Mi() {
  (he = Qt.current), F(Qt);
}
function Ct(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), ed(n)), Z !== null))
    for (n = Z.return; n !== null; ) {
      var r = n;
      switch ((ai(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && Ar();
          break;
        case 3:
          nn(), F(de), F(oe), gi();
          break;
        case 5:
          yi(r);
          break;
        case 4:
          nn();
          break;
        case 13:
          F(U);
          break;
        case 19:
          F(U);
          break;
        case 10:
          pi(r.type._context);
          break;
        case 22:
        case 23:
          Mi();
      }
      n = n.return;
    }
  if (
    ((J = e),
    (Z = e = ct(e.current, null)),
    (b = he = t),
    (G = 0),
    (Gn = null),
    (Ni = pl = Mt = 0),
    (ce = jn = null),
    St !== null)
  ) {
    for (t = 0; t < St.length; t++)
      if (((n = St[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var l = r.next,
          o = n.pending;
        if (o !== null) {
          var i = o.next;
          (o.next = l), (r.next = i);
        }
        n.pending = r;
      }
    St = null;
  }
  return e;
}
function Ka(e, t) {
  do {
    var n = Z;
    try {
      if ((di(), (_r.current = Kr), Gr)) {
        for (var r = A.memoizedState; r !== null; ) {
          var l = r.queue;
          l !== null && (l.pending = null), (r = r.next);
        }
        Gr = !1;
      }
      if (
        ((zt = 0),
        (X = Y = A = null),
        (zn = !1),
        (Qn = 0),
        (_i.current = null),
        n === null || n.return === null)
      ) {
        (G = 1), (Gn = t), (Z = null);
        break;
      }
      e: {
        var o = e,
          i = n.return,
          u = n,
          s = t;
        if (
          ((t = b),
          (u.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var c = s,
            h = u,
            m = h.tag;
          if (!(h.mode & 1) && (m === 0 || m === 11 || m === 15)) {
            var p = h.alternate;
            p
              ? ((h.updateQueue = p.updateQueue),
                (h.memoizedState = p.memoizedState),
                (h.lanes = p.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var g = zu(i);
          if (g !== null) {
            (g.flags &= -257),
              Mu(g, i, u, o, t),
              g.mode & 1 && Pu(o, c, t),
              (t = g),
              (s = c);
            var w = t.updateQueue;
            if (w === null) {
              var x = new Set();
              x.add(s), (t.updateQueue = x);
            } else w.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Pu(o, c, t), ji();
              break e;
            }
            s = Error(y(426));
          }
        } else if (H && u.mode & 1) {
          var I = zu(i);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              Mu(I, i, u, o, t),
              ci(rn(s, u));
            break e;
          }
        }
        (o = s = rn(s, u)),
          G !== 4 && (G = 2),
          jn === null ? (jn = [o]) : jn.push(o),
          (o = i);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (t &= -t), (o.lanes |= t);
              var f = Ta(o, s, t);
              Su(o, f);
              break e;
            case 1:
              u = s;
              var a = o.type,
                d = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof a.getDerivedStateFromError == "function" ||
                  (d !== null &&
                    typeof d.componentDidCatch == "function" &&
                    (st === null || !st.has(d))))
              ) {
                (o.flags |= 65536), (t &= -t), (o.lanes |= t);
                var v = Ra(o, u, t);
                Su(o, v);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      qa(n);
    } catch (E) {
      (t = E), Z === n && n !== null && (Z = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function Xa() {
  var e = Xr.current;
  return (Xr.current = Kr), e === null ? Kr : e;
}
function ji() {
  (G === 0 || G === 3 || G === 2) && (G = 4),
    J === null || (!(Mt & 268435455) && !(pl & 268435455)) || et(J, b);
}
function br(e, t) {
  var n = T;
  T |= 2;
  var r = Xa();
  (J !== e || b !== t) && ((Ae = null), Ct(e, t));
  do
    try {
      _d();
      break;
    } catch (l) {
      Ka(e, l);
    }
  while (!0);
  if ((di(), (T = n), (Xr.current = r), Z !== null)) throw Error(y(261));
  return (J = null), (b = 0), G;
}
function _d() {
  for (; Z !== null; ) Ja(Z);
}
function Nd() {
  for (; Z !== null && !Xc(); ) Ja(Z);
}
function Ja(e) {
  var t = ec(e.alternate, e, he);
  (e.memoizedProps = e.pendingProps),
    t === null ? qa(e) : (Z = t),
    (_i.current = null);
}
function qa(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = wd(n, t)), n !== null)) {
        (n.flags &= 32767), (Z = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (G = 6), (Z = null);
        return;
      }
    } else if (((n = gd(n, t, he)), n !== null)) {
      Z = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      Z = t;
      return;
    }
    Z = t = e;
  } while (t !== null);
  G === 0 && (G = 5);
}
function wt(e, t, n) {
  var r = R,
    l = Ce.transition;
  try {
    (Ce.transition = null), (R = 1), Pd(e, t, n, r);
  } finally {
    (Ce.transition = l), (R = r);
  }
  return null;
}
function Pd(e, t, n, r) {
  do Jt();
  while (nt !== null);
  if (T & 6) throw Error(y(327));
  n = e.finishedWork;
  var l = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(y(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var o = n.lanes | n.childLanes;
  if (
    (uf(e, o),
    e === J && ((Z = J = null), (b = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      yr ||
      ((yr = !0),
      tc(Dr, function () {
        return Jt(), null;
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    (o = Ce.transition), (Ce.transition = null);
    var i = R;
    R = 1;
    var u = T;
    (T |= 4),
      (_i.current = null),
      Sd(e, n),
      Za(n, e),
      Yf(go),
      (Fr = !!yo),
      (go = yo = null),
      (e.current = n),
      kd(n),
      Jc(),
      (T = u),
      (R = i),
      (Ce.transition = o);
  } else e.current = n;
  if (
    (yr && ((yr = !1), (nt = e), (qr = l)),
    (o = e.pendingLanes),
    o === 0 && (st = null),
    ef(n.stateNode),
    me(e, Q()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (l = t[n]),
        r(l.value, {
          componentStack: l.stack,
          digest: l.digest,
        });
  if (Jr) throw ((Jr = !1), (e = Ho), (Ho = null), e);
  return (
    qr & 1 && e.tag !== 0 && Jt(),
    (o = e.pendingLanes),
    o & 1 ? (e === Uo ? Ln++ : ((Ln = 0), (Uo = e))) : (Ln = 0),
    ht(),
    null
  );
}
function Jt() {
  if (nt !== null) {
    var e = Ts(qr),
      t = Ce.transition,
      n = R;
    try {
      if (((Ce.transition = null), (R = 16 > e ? 16 : e), nt === null))
        var r = !1;
      else {
        if (((e = nt), (nt = null), (qr = 0), T & 6)) throw Error(y(331));
        var l = T;
        for (T |= 4, S = e.current; S !== null; ) {
          var o = S,
            i = o.child;
          if (S.flags & 16) {
            var u = o.deletions;
            if (u !== null) {
              for (var s = 0; s < u.length; s++) {
                var c = u[s];
                for (S = c; S !== null; ) {
                  var h = S;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Mn(8, h, o);
                  }
                  var m = h.child;
                  if (m !== null) (m.return = h), (S = m);
                  else
                    for (; S !== null; ) {
                      h = S;
                      var p = h.sibling,
                        g = h.return;
                      if ((Ba(h), h === c)) {
                        S = null;
                        break;
                      }
                      if (p !== null) {
                        (p.return = g), (S = p);
                        break;
                      }
                      S = g;
                    }
                }
              }
              var w = o.alternate;
              if (w !== null) {
                var x = w.child;
                if (x !== null) {
                  w.child = null;
                  do {
                    var I = x.sibling;
                    (x.sibling = null), (x = I);
                  } while (x !== null);
                }
              }
              S = o;
            }
          }
          if (o.subtreeFlags & 2064 && i !== null) (i.return = o), (S = i);
          else
            e: for (; S !== null; ) {
              if (((o = S), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Mn(9, o, o.return);
                }
              var f = o.sibling;
              if (f !== null) {
                (f.return = o.return), (S = f);
                break e;
              }
              S = o.return;
            }
        }
        var a = e.current;
        for (S = a; S !== null; ) {
          i = S;
          var d = i.child;
          if (i.subtreeFlags & 2064 && d !== null) (d.return = i), (S = d);
          else
            e: for (i = a; S !== null; ) {
              if (((u = S), u.flags & 2048))
                try {
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      dl(9, u);
                  }
                } catch (E) {
                  $(u, u.return, E);
                }
              if (u === i) {
                S = null;
                break e;
              }
              var v = u.sibling;
              if (v !== null) {
                (v.return = u.return), (S = v);
                break e;
              }
              S = u.return;
            }
        }
        if (
          ((T = l), ht(), He && typeof He.onPostCommitFiberRoot == "function")
        )
          try {
            He.onPostCommitFiberRoot(ll, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (R = n), (Ce.transition = t);
    }
  }
  return !1;
}
function $u(e, t, n) {
  (t = rn(n, t)),
    (t = Ta(e, t, 1)),
    (e = ut(e, t, 1)),
    (t = ue()),
    e !== null && (Xn(e, 1, t), me(e, t));
}
function $(e, t, n) {
  if (e.tag === 3) $u(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        $u(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (st === null || !st.has(r)))
        ) {
          (e = rn(n, e)),
            (e = Ra(t, e, 1)),
            (t = ut(t, e, 1)),
            (e = ue()),
            t !== null && (Xn(t, 1, e), me(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function zd(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = ue()),
    (e.pingedLanes |= e.suspendedLanes & n),
    J === e &&
      (b & n) === n &&
      (G === 4 || (G === 3 && (b & 130023424) === b && 500 > Q() - Pi)
        ? Ct(e, 0)
        : (Ni |= n)),
    me(e, t);
}
function ba(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = ur), (ur <<= 1), !(ur & 130023424) && (ur = 4194304))
      : (t = 1));
  var n = ue();
  (e = Ye(e, t)), e !== null && (Xn(e, t, n), me(e, n));
}
function Md(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), ba(e, n);
}
function jd(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        l = e.memoizedState;
      l !== null && (n = l.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(y(314));
  }
  r !== null && r.delete(t), ba(e, n);
}
var ec;
ec = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || de.current) fe = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (fe = !1), yd(e, t, n);
      fe = !!(e.flags & 131072);
    }
  else (fe = !1), H && t.flags & 1048576 && la(t, Br, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Pr(e, t), (e = t.pendingProps);
      var l = bt(t, oe.current);
      Xt(t, n), (l = xi(null, t, r, e, l, n));
      var o = Si();
      return (
        (t.flags |= 1),
        typeof l == "object" &&
        l !== null &&
        typeof l.render == "function" &&
        l.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            pe(r) ? ((o = !0), Wr(t)) : (o = !1),
            (t.memoizedState =
              l.state !== null && l.state !== void 0 ? l.state : null),
            hi(t),
            (l.updater = fl),
            (t.stateNode = l),
            (l._reactInternals = t),
            Po(t, r, e, n),
            (t = jo(null, t, r, !0, o, n)))
          : ((t.tag = 0), H && o && si(t), ie(null, t, l, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Pr(e, t),
          (e = t.pendingProps),
          (l = r._init),
          (r = l(r._payload)),
          (t.type = r),
          (l = t.tag = Td(r)),
          (e = Me(r, e)),
          l)
        ) {
          case 0:
            t = Mo(null, t, r, e, n);
            break e;
          case 1:
            t = Tu(null, t, r, e, n);
            break e;
          case 11:
            t = ju(null, t, r, e, n);
            break e;
          case 14:
            t = Lu(null, t, r, Me(r.type, e), n);
            break e;
        }
        throw Error(y(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Mo(e, t, r, l, n)
      );
    case 1:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Tu(e, t, r, l, n)
      );
    case 3:
      e: {
        if ((Ia(t), e === null)) throw Error(y(387));
        (r = t.pendingProps),
          (o = t.memoizedState),
          (l = o.element),
          ca(e, t),
          Zr(t, r, null, n);
        var i = t.memoizedState;
        if (((r = i.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: i.cache,
              pendingSuspenseBoundaries: i.pendingSuspenseBoundaries,
              transitions: i.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            (l = rn(Error(y(423)), t)), (t = Ru(e, t, r, n, l));
            break e;
          } else if (r !== l) {
            (l = rn(Error(y(424)), t)), (t = Ru(e, t, r, n, l));
            break e;
          } else
            for (
              ve = it(t.stateNode.containerInfo.firstChild),
                ye = t,
                H = !0,
                Le = null,
                n = sa(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((en(), r === l)) {
            t = Ge(e, t, n);
            break e;
          }
          ie(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        fa(t),
        e === null && Co(t),
        (r = t.type),
        (l = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (i = l.children),
        wo(r, l) ? (i = null) : o !== null && wo(r, o) && (t.flags |= 32),
        Fa(e, t),
        ie(e, t, i, n),
        t.child
      );
    case 6:
      return e === null && Co(t), null;
    case 13:
      return Ha(e, t, n);
    case 4:
      return (
        vi(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = tn(t, null, r, n)) : ie(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        ju(e, t, r, l, n)
      );
    case 7:
      return ie(e, t, t.pendingProps, n), t.child;
    case 8:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return ie(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (l = t.pendingProps),
          (o = t.memoizedProps),
          (i = l.value),
          D(Vr, r._currentValue),
          (r._currentValue = i),
          o !== null)
        )
          if (De(o.value, i)) {
            if (o.children === l.children && !de.current) {
              t = Ge(e, t, n);
              break e;
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var u = o.dependencies;
              if (u !== null) {
                i = o.child;
                for (var s = u.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (o.tag === 1) {
                      (s = Ve(-1, n & -n)), (s.tag = 2);
                      var c = o.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var h = c.pending;
                        h === null
                          ? (s.next = s)
                          : ((s.next = h.next), (h.next = s)),
                          (c.pending = s);
                      }
                    }
                    (o.lanes |= n),
                      (s = o.alternate),
                      s !== null && (s.lanes |= n),
                      _o(o.return, n, t),
                      (u.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (o.tag === 10) i = o.type === t.type ? null : o.child;
              else if (o.tag === 18) {
                if (((i = o.return), i === null)) throw Error(y(341));
                (i.lanes |= n),
                  (u = i.alternate),
                  u !== null && (u.lanes |= n),
                  _o(i, n, t),
                  (i = o.sibling);
              } else i = o.child;
              if (i !== null) i.return = o;
              else
                for (i = o; i !== null; ) {
                  if (i === t) {
                    i = null;
                    break;
                  }
                  if (((o = i.sibling), o !== null)) {
                    (o.return = i.return), (i = o);
                    break;
                  }
                  i = i.return;
                }
              o = i;
            }
        ie(e, t, l.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (l = t.type),
        (r = t.pendingProps.children),
        Xt(t, n),
        (l = _e(l)),
        (r = r(l)),
        (t.flags |= 1),
        ie(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (l = Me(r, t.pendingProps)),
        (l = Me(r.type, l)),
        Lu(e, t, r, l, n)
      );
    case 15:
      return Da(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (l = t.pendingProps),
        (l = t.elementType === r ? l : Me(r, l)),
        Pr(e, t),
        (t.tag = 1),
        pe(r) ? ((e = !0), Wr(t)) : (e = !1),
        Xt(t, n),
        La(t, r, l),
        Po(t, r, l, n),
        jo(null, t, r, !0, e, n)
      );
    case 19:
      return Ua(e, t, n);
    case 22:
      return Oa(e, t, n);
  }
  throw Error(y(156, t.tag));
};
function tc(e, t) {
  return zs(e, t);
}
function Ld(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function Ee(e, t, n, r) {
  return new Ld(e, t, n, r);
}
function Li(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Td(e) {
  if (typeof e == "function") return Li(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Xo)) return 11;
    if (e === Jo) return 14;
  }
  return 2;
}
function ct(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = Ee(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null
        ? null
        : {
            lanes: t.lanes,
            firstContext: t.firstContext,
          }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function jr(e, t, n, r, l, o) {
  var i = 2;
  if (((r = e), typeof e == "function")) Li(e) && (i = 1);
  else if (typeof e == "string") i = 5;
  else
    e: switch (e) {
      case Ot:
        return _t(n.children, l, o, t);
      case Ko:
        (i = 8), (l |= 8);
        break;
      case Xl:
        return (
          (e = Ee(12, n, t, l | 2)), (e.elementType = Xl), (e.lanes = o), e
        );
      case Jl:
        return (e = Ee(13, n, t, l)), (e.elementType = Jl), (e.lanes = o), e;
      case ql:
        return (e = Ee(19, n, t, l)), (e.elementType = ql), (e.lanes = o), e;
      case fs:
        return ml(n, l, o, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case as:
              i = 10;
              break e;
            case cs:
              i = 9;
              break e;
            case Xo:
              i = 11;
              break e;
            case Jo:
              i = 14;
              break e;
            case Je:
              (i = 16), (r = null);
              break e;
          }
        throw Error(y(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = Ee(i, n, t, l)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  );
}
function _t(e, t, n, r) {
  return (e = Ee(7, e, r, t)), (e.lanes = n), e;
}
function ml(e, t, n, r) {
  return (
    (e = Ee(22, e, r, t)),
    (e.elementType = fs),
    (e.lanes = n),
    (e.stateNode = {
      isHidden: !1,
    }),
    e
  );
}
function Yl(e, t, n) {
  return (e = Ee(6, e, null, t)), (e.lanes = n), e;
}
function Gl(e, t, n) {
  return (
    (t = Ee(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function Rd(e, t, n, r, l) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = zl(0)),
    (this.expirationTimes = zl(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = zl(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = l),
    (this.mutableSourceEagerHydrationData = null);
}
function Ti(e, t, n, r, l, o, i, u, s) {
  return (
    (e = new Rd(e, t, n, u, s)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = Ee(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    hi(o),
    e
  );
}
function Dd(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Dt,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function nc(e) {
  if (!e) return dt;
  e = e._reactInternals;
  e: {
    if (Tt(e) !== e || e.tag !== 1) throw Error(y(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (pe(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(y(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (pe(n)) return na(e, n, t);
  }
  return t;
}
function rc(e, t, n, r, l, o, i, u, s) {
  return (
    (e = Ti(n, r, !0, e, l, o, i, u, s)),
    (e.context = nc(null)),
    (n = e.current),
    (r = ue()),
    (l = at(n)),
    (o = Ve(r, l)),
    (o.callback = t ?? null),
    ut(n, o, l),
    (e.current.lanes = l),
    Xn(e, l, r),
    me(e, r),
    e
  );
}
function hl(e, t, n, r) {
  var l = t.current,
    o = ue(),
    i = at(l);
  return (
    (n = nc(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ve(o, i)),
    (t.payload = {
      element: e,
    }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = ut(l, t, i)),
    e !== null && (Re(e, l, i, o), Cr(e, l, i)),
    i
  );
}
function el(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Bu(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Ri(e, t) {
  Bu(e, t), (e = e.alternate) && Bu(e, t);
}
function Od() {
  return null;
}
var lc =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Di(e) {
  this._internalRoot = e;
}
vl.prototype.render = Di.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(y(409));
  hl(e, t, null, null);
};
vl.prototype.unmount = Di.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    jt(function () {
      hl(null, e, null, null);
    }),
      (t[Ze] = null);
  }
};
function vl(e) {
  this._internalRoot = e;
}
vl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Os();
    e = {
      blockedOn: null,
      target: e,
      priority: t,
    };
    for (var n = 0; n < be.length && t !== 0 && t < be[n].priority; n++);
    be.splice(n, 0, e), n === 0 && Is(e);
  }
};
function Oi(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function yl(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function Vu() {}
function Fd(e, t, n, r, l) {
  if (l) {
    if (typeof r == "function") {
      var o = r;
      r = function () {
        var c = el(i);
        o.call(c);
      };
    }
    var i = rc(t, r, e, 0, null, !1, !1, "", Vu);
    return (
      (e._reactRootContainer = i),
      (e[Ze] = i.current),
      An(e.nodeType === 8 ? e.parentNode : e),
      jt(),
      i
    );
  }
  for (; (l = e.lastChild); ) e.removeChild(l);
  if (typeof r == "function") {
    var u = r;
    r = function () {
      var c = el(s);
      u.call(c);
    };
  }
  var s = Ti(e, 0, !1, null, null, !1, !1, "", Vu);
  return (
    (e._reactRootContainer = s),
    (e[Ze] = s.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    jt(function () {
      hl(t, s, n, r);
    }),
    s
  );
}
function gl(e, t, n, r, l) {
  var o = n._reactRootContainer;
  if (o) {
    var i = o;
    if (typeof l == "function") {
      var u = l;
      l = function () {
        var s = el(i);
        u.call(s);
      };
    }
    hl(t, i, e, l);
  } else i = Fd(n, t, e, l, r);
  return el(i);
}
Rs = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Sn(t.pendingLanes);
        n !== 0 &&
          (ei(t, n | 1), me(t, Q()), !(T & 6) && ((ln = Q() + 500), ht()));
      }
      break;
    case 13:
      jt(function () {
        var r = Ye(e, 1);
        if (r !== null) {
          var l = ue();
          Re(r, e, 1, l);
        }
      }),
        Ri(e, 1);
  }
};
ti = function (e) {
  if (e.tag === 13) {
    var t = Ye(e, 134217728);
    if (t !== null) {
      var n = ue();
      Re(t, e, 134217728, n);
    }
    Ri(e, 134217728);
  }
};
Ds = function (e) {
  if (e.tag === 13) {
    var t = at(e),
      n = Ye(e, t);
    if (n !== null) {
      var r = ue();
      Re(n, e, t, r);
    }
    Ri(e, t);
  }
};
Os = function () {
  return R;
};
Fs = function (e, t) {
  var n = R;
  try {
    return (R = e), t();
  } finally {
    R = n;
  }
};
so = function (e, t, n) {
  switch (t) {
    case "input":
      if ((to(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var l = sl(r);
            if (!l) throw Error(y(90));
            ps(r), to(r, l);
          }
        }
      }
      break;
    case "textarea":
      hs(e, n);
      break;
    case "select":
      (t = n.value), t != null && Zt(e, !!n.multiple, t, !1);
  }
};
ks = zi;
Es = jt;
var Id = {
    usingClientEntryPoint: !1,
    Events: [qn, Ut, sl, xs, Ss, zi],
  },
  gn = {
    findFiberByHostInstance: xt,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  Hd = {
    bundleType: gn.bundleType,
    version: gn.version,
    rendererPackageName: gn.rendererPackageName,
    rendererConfig: gn.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ke.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Ns(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: gn.findFiberByHostInstance || Od,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var gr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!gr.isDisabled && gr.supportsFiber)
    try {
      (ll = gr.inject(Hd)), (He = gr);
    } catch {}
}
we.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Id;
we.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Oi(t)) throw Error(y(200));
  return Dd(e, t, null, n);
};
we.createRoot = function (e, t) {
  if (!Oi(e)) throw Error(y(299));
  var n = !1,
    r = "",
    l = lc;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (l = t.onRecoverableError)),
    (t = Ti(e, 1, !1, null, null, n, !1, r, l)),
    (e[Ze] = t.current),
    An(e.nodeType === 8 ? e.parentNode : e),
    new Di(t)
  );
};
we.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(y(188))
      : ((e = Object.keys(e).join(",")), Error(y(268, e)));
  return (e = Ns(t)), (e = e === null ? null : e.stateNode), e;
};
we.flushSync = function (e) {
  return jt(e);
};
we.hydrate = function (e, t, n) {
  if (!yl(t)) throw Error(y(200));
  return gl(null, e, t, !0, n);
};
we.hydrateRoot = function (e, t, n) {
  if (!Oi(e)) throw Error(y(405));
  var r = (n != null && n.hydratedSources) || null,
    l = !1,
    o = "",
    i = lc;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (l = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (i = n.onRecoverableError)),
    (t = rc(t, null, e, 1, n ?? null, l, !1, o, i)),
    (e[Ze] = t.current),
    An(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (l = n._getVersion),
        (l = l(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, l])
          : t.mutableSourceEagerHydrationData.push(n, l);
  return new vl(t);
};
we.render = function (e, t, n) {
  if (!yl(t)) throw Error(y(200));
  return gl(null, e, t, !1, n);
};
we.unmountComponentAtNode = function (e) {
  if (!yl(e)) throw Error(y(40));
  return e._reactRootContainer
    ? (jt(function () {
        gl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Ze] = null);
        });
      }),
      !0)
    : !1;
};
we.unstable_batchedUpdates = zi;
we.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!yl(n)) throw Error(y(200));
  if (e == null || e._reactInternals === void 0) throw Error(y(38));
  return gl(e, t, n, !1, r);
};
we.version = "18.3.1-next-f1338f8080-20240426";
function oc() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(oc);
    } catch (e) {
      console.error(e);
    }
}
oc(), (os.exports = we);
var Ud = os.exports,
  ic,
  Qu = Ud;
(ic = Qu.createRoot), Qu.hydrateRoot;
var uc = {
    color: void 0,
    size: void 0,
    className: void 0,
    style: void 0,
    attr: void 0,
  },
  Zu = Et.createContext && Et.createContext(uc),
  Ad = ["attr", "size", "title"];
function Wd(e, t) {
  if (e == null) return {};
  var n = $d(e, t),
    r,
    l;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    for (l = 0; l < o.length; l++)
      (r = o[l]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function $d(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if (Object.prototype.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function tl() {
  return (
    (tl = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    tl.apply(this, arguments)
  );
}
function Yu(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (l) {
        return Object.getOwnPropertyDescriptor(e, l).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function nl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Yu(Object(n), !0).forEach(function (r) {
          Bd(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Yu(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function Bd(e, t, n) {
  return (
    (t = Vd(t)),
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Vd(e) {
  var t = Qd(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function Qd(e, t) {
  if (typeof e != "object" || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function sc(e) {
  return (
    e &&
    e.map((t, n) =>
      Et.createElement(
        t.tag,
        nl(
          {
            key: n,
          },
          t.attr
        ),
        sc(t.child)
      )
    )
  );
}
function wl(e) {
  return (t) =>
    Et.createElement(
      Zd,
      tl(
        {
          attr: nl({}, e.attr),
        },
        t
      ),
      sc(e.child)
    );
}
function Zd(e) {
  var t = (n) => {
    var { attr: r, size: l, title: o } = e,
      i = Wd(e, Ad),
      u = l || n.size || "1em",
      s;
    return (
      n.className && (s = n.className),
      e.className && (s = (s ? s + " " : "") + e.className),
      Et.createElement(
        "svg",
        tl(
          {
            stroke: "currentColor",
            fill: "currentColor",
            strokeWidth: "0",
          },
          n.attr,
          r,
          i,
          {
            className: s,
            style: nl(
              nl(
                {
                  color: e.color || n.color,
                },
                n.style
              ),
              e.style
            ),
            height: u,
            width: u,
            xmlns: "http://www.w3.org/2000/svg",
          }
        ),
        o && Et.createElement("title", null, o),
        e.children
      )
    );
  };
  return Zu !== void 0
    ? Et.createElement(Zu.Consumer, null, (n) => t(n))
    : t(uc);
}
function Yd(e) {
  return wl({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function Gd(e) {
  return wl({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z",
        },
        child: [],
      },
    ],
  })(e);
}
function Kd(e) {
  return wl({
    tag: "svg",
    attr: {
      viewBox: "0 0 448 512",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z",
        },
        child: [],
      },
    ],
  })(e);
}
function ac(e) {
  return wl({
    tag: "svg",
    attr: {
      viewBox: "0 0 512 512",
    },
    child: [
      {
        tag: "path",
        attr: {
          d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z",
        },
        child: [],
      },
    ],
  })(e);
}
const cc = () =>
    k.jsx("div", {
      className: "relative flex flex-col gap-1 p-2 h-full",
      children: [...Array(3)].map((e, t) =>
        k.jsx(
          "div",
          {
            className: "flex gap-1",
            children: [...Array(2)].map((n, r) =>
              k.jsx(
                "div",
                {
                  className: "w-2 h-2 bg-neutral-600 rounded-sm",
                },
                r
              )
            ),
          },
          t
        )
      ),
    }),
  Xd = [
    "https://images.unsplash.com/photo-1712238318704-b4fd7e5db652?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1599751229070-854ae5c90869?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1722482445570-d1ce1b10e7bb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1567497207066-03e0a0570fb8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1708797249628-b2059687b1b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1614181081801-f241632a4d49?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1713203403441-4a3137c6f39b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1465374142464-8984179505b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bmF0dXJlJTIwZHluYW1pY3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1724169913511-24a5c21b151a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8bmF0dXJlJTIwZHluYW1pY3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1723134081522-0de16b0a5387?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1699745953504-db98697c2331?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjZ8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1699745954535-5770e1665732?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
    "https://images.unsplash.com/photo-1646569278931-b4a839f89b8c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fG5hdHVyZSUyMGR5bmFtaWN8ZW58MHx8MHx8fDA%3D",
  ],
  Jd = ({ show: e, uploadMessage: t, handleToggle: n }) =>
    k.jsx("div", {
      className: `fixed inset-0 ${!e && "hidden"}`,
      children: k.jsx("div", {
        className:
          "absolute inset-0 flex items-center justify-center bg-black bg-opacity-50",
        children: k.jsxs("div", {
          className: "bg-neutral-900 text-white p-5 rounded-lg w-96",
          children: [
            k.jsx("h1", {
              className: "text-2xl font-bold text-center",
              children: "Image Upload",
            }),
            k.jsx("p", {
              className: "text-center text-lg mt-3",
              children: t,
            }),
            k.jsx("button", {
              className: "bg-blue-500 text-white w-full py-2 mt-5 rounded-lg",
              onClick: n,
              children: "Close",
            }),
          ],
        }),
      }),
    }),
  qd = () => {
    const [e, t] = re.useState(!1),
      [n, r] = re.useState({
        data: Xd,
      }),
      [l, o] = re.useState(null),
      i = re.useRef(null),
      u = re.useRef(null),
      s = () => {
        t(!e), console.log("alert");
      },
      c = (m) => {
        var g;
        const p = (g = m.target.files) == null ? void 0 : g[0];
        if (p) {
          const w = new FileReader();
          (w.onloadend = () => {
            r((x) => ({
              data: [...x.data, w.result],
            }));
          }),
            w.readAsDataURL(p),
            o("Image Uploaded Successfully"),
            t(!0);
        } else o("Image Upload Failed"), t(!0);
      },
      h = (m) => {
        if (u.current) {
          const p = m === "left" ? -160 : 160;
          u.current.scrollBy({
            left: p,
            behavior: "smooth",
          });
        }
      };
    return k.jsxs("div", {
      className:
        "relative flex items-center bg-neutral-700 py-6 rounded-3xl shadow-md shadow-black gap-2 px-3 pr-16 w-full select-none",
      children: [
        k.jsx(cc, {}),
        k.jsxs("div", {
          className: "flex flex-col justify-center items-center gap-2 w-full",
          children: [
            k.jsxs("div", {
              className: "flex items-end justify-between rounded-3xl w-full",
              children: [
                k.jsx("div", {
                  className:
                    "text-neutral-300 bg-neutral-900 py-4 px-12 text-center rounded-3xl text-lg cursor-pointer font-bold",
                  children: "Gallery",
                }),
                k.jsxs("div", {
                  className: "flex justify-end items-end gap-3",
                  children: [
                    k.jsxs("button", {
                      className:
                        "flex items-center gap-3 text-neutral-300 shadow-inner shadow-neutral-300 rounded-full font-bold",
                      onClick: () => {
                        var m;
                        return (m = i.current) == null ? void 0 : m.click();
                      },
                      children: [
                        k.jsx("input", {
                          className: "hidden",
                          type: "file",
                          name: "add-image",
                          id: "add-image",
                          onChange: c,
                        }),
                        k.jsxs("label", {
                          className:
                            "flex items-center gap-3 text-neutral-300 shadow-xl shadow-black py-3 px-5 rounded-full cursor-pointer",
                          htmlFor: "add-image",
                          children: [k.jsx(Kd, {}), " Add Image"],
                        }),
                      ],
                    }),
                    k.jsx("div", {
                      className:
                        "rounded-full transition-all duration-200 ease-in-out bg-neutral-900 text-neutral-500 p-2 text-xl hover:text-white hover:bg-gradient-to-br hover:from-neutral-300 hover:to-neutral-950 cursor-pointer",
                      onClick: () => h("left"),
                      children: k.jsx(Yd, {}),
                    }),
                    k.jsx("div", {
                      className:
                        "rounded-full transition-all duration-200 ease-in-out bg-neutral-900 text-neutral-500 p-2 text-xl hover:text-white hover:bg-gradient-to-br hover:from-neutral-300 hover:to-neutral-950 cursor-pointer",
                      onClick: () => h("right"),
                      children: k.jsx(Gd, {}),
                    }),
                  ],
                }),
              ],
            }),
            k.jsx("div", {
              className:
                "flex items-center gap-6 p-6 overflow-x-scroll gallery select-none",
              ref: u,
              children: n.data.map((m, p) =>
                k.jsx(
                  "img",
                  {
                    src: m,
                    alt: `image-${p + 1}`,
                    className:
                      "rounded-3xl grayscale hover:grayscale-0 hover:saturate-200  h-32 object-cover shadow-md transition-transform aspect-square duration-300 hover:-rotate-2 hover:scale-110 hover:shadow-lg hover:shadow-black",
                  },
                  p
                )
              ),
            }),
          ],
        }),
        k.jsx(ac, {
          className: "absolute top-5 left-3 text-3xl text-neutral-500",
        }),
        k.jsx(Jd, {
          show: e,
          uploadMessage: l ?? "",
          handleToggle: s,
        }),
      ],
    });
  },
  bd = () =>
    k.jsxs("div", {
      className: "flex flex-col items-center justify-content gap-2",
      children: [
        k.jsx("p", {
          children:
            "Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.",
        }),
        k.jsx("p", {
          children:
            "I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
        }),
      ],
    }),
  ep = () =>
    k.jsxs("div", {
      className: "flex flex-col items-center justify-content gap-2",
      children: [
        k.jsx("p", {
          children:
            "I have 5 years of experience in sales and have been working at Salesforce for the past 3 years. I've been able to close 50 deals in the past 6 months, and I'm looking forward to closing more deals in the future.",
        }),
        k.jsx("p", {
          children:
            "I have a Bachelor's degree in Computer Science from the University of California, Berkeley. I've also...",
        }),
      ],
    }),
  tp = () =>
    k.jsxs("div", {
      className:
        "flex flex-col items-center justify-content gap-2 h-48 overflow-y-scroll pr-2 rec-widget",
      children: [
        k.jsx("p", {
          children:
            "I would recommend the following products to you based on your previous purchases:",
        }),
        k.jsxs("div", {
          className: "flex flex-col items-start justify-start",
          children: [
            k.jsx("p", {
              className: "font-bold",
              children: "1. Salesforce CRM",
            }),
            k.jsx("p", {
              children:
                "Salesforce CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.",
            }),
            k.jsx("p", {
              className: "font-bold",
              children: "2. HubSpot CRM",
            }),
            k.jsx("p", {
              children:
                "HubSpot CRM is a free customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.",
            }),
            k.jsx("p", {
              className: "font-bold",
              children: "3. Zoho CRM",
            }),
            k.jsx("p", {
              children:
                "Zoho CRM is a customer relationship management software that helps businesses manage their sales, marketing, and customer service activities.",
            }),
          ],
        }),
      ],
    }),
  np = () => {
    const [e, t] = re.useState(0),
      [n, r] = re.useState({}),
      [l, o] = re.useState(null),
      [i, u] = re.useState({}),
      s = re.useRef(null),
      c = ["About Me", "Experience", "Recommended"],
      h = (g) => {
        t(g);
      },
      m = (g) => {
        o(g);
      },
      p = () => {
        o(null);
      };
    return (
      re.useEffect(() => {
        var w;
        const g =
          e !== null
            ? (w = s.current) == null
              ? void 0
              : w.children[e]
            : null;
        g &&
          r({
            width: g.offsetWidth + "px",
            left: g.offsetLeft + "px",
            opacity: 1,
          });
      }, [e]),
      re.useEffect(() => {
        var g;
        if (l !== null) {
          const w =
            l !== null
              ? (g = s.current) == null
                ? void 0
                : g.children[l]
              : null;
          u(
            w
              ? {
                  width: w.offsetWidth + "px",
                  left: w.offsetLeft + "px",
                  opacity: 1,
                }
              : {
                  width: 0,
                  opacity: 0,
                  right: 0,
                }
          );
        } else
          u({
            width: 0,
            opacity: 0,
            left: 0,
          });
      }, [l]),
      k.jsxs("div", {
        className:
          "relative flex items-center bg-neutral-700 py-4 rounded-3xl w-full shadow-md shadow-black gap-2 px-3",
        children: [
          k.jsx(cc, {}),
          k.jsxs("div", {
            className: "flex flex-col justify-center items-center gap-2",
            children: [
              k.jsx("div", {
                className:
                  "flex item-center justify-center rounded-3xl bg-neutral-900 p-2 w-full relative",
                children: k.jsxs("div", {
                  ref: s,
                  className: "flex justify-center relative gap-3 w-full",
                  onMouseLeave: p,
                  children: [
                    c.map((g, w) =>
                      k.jsx(
                        "button",
                        {
                          onClick: () => h(w),
                          className: `relative transition-colors duration-300 z-10 p-3 rounded-3xl text-lg w-1/3 text-center cursor-pointer font-bold ${
                            e === w
                              ? "bg-neutral-800 shadow-2xl shadow-black text-neutral-200"
                              : "text-neutral-400"
                          }`,
                          onMouseEnter: () => m(w),
                          children: g,
                        },
                        w
                      )
                    ),
                    k.jsx("span", {
                      className:
                        "absolute top-0 h-full bg-neutral-800 shadow-2xl rounded-3xl shadow-black text-neutral-200 z-0 transition-all duration-500 ease-in-out",
                      style: n,
                    }),
                    k.jsx("span", {
                      className:
                        "absolute top-0 h-full bg-[#1c1c1c] rounded-3xl z-0 transition-all duration-500 ease-in-out",
                      style: i,
                    }),
                  ],
                }),
              }),
              k.jsxs("div", {
                className: "p-2 text-lg text-neutral-400",
                children: [
                  e === 0 && k.jsx(bd, {}),
                  e === 1 && k.jsx(ep, {}),
                  e === 2 && k.jsx(tp, {}),
                ],
              }),
            ],
          }),
          k.jsx("div", {
            className: "relative flex flex-col gap-1 p-2 h-full",
            children: k.jsx("div", {
              className:
                "w-2 h-16 rounded-lg bg-neutral-600 shadow-lg shadow-black bg-gradient-to-b from-neutral-400 to-neutral-600",
            }),
          }),
          k.jsx(ac, {
            className: "absolute top-5 left-3 text-3xl text-neutral-500",
          }),
        ],
      })
    );
  },
  rp = () =>
    k.jsxs("div", {
      className:
        "fixed lg:right-10 lg:w-[45%] w-full md:px-5 max-md:px-5 min-h-screen min-w-screen max-h-screen-2xl flex flex-col items-center justify-center gap-5 overflow-hidden",
      children: [
        k.jsx(np, {}),
        k.jsx("div", {
          className: "w-3/4 bg-neutral-700 h-1 shadow-xl shadow-black",
        }),
        k.jsx(qd, {}),
        k.jsx("div", {
          className: "w-3/4 bg-neutral-700 h-1 shadow-xl shadow-black",
        }),
      ],
    });
function lp() {
  return k.jsx("div", {
    className: "",
    children: k.jsx(rp, {}),
  });
}
ic(document.getElementById("root")).render(
  k.jsx(re.StrictMode, {
    children: k.jsx(lp, {}),
  })
);
