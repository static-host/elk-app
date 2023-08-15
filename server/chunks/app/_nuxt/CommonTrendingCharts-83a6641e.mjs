import { defineComponent, computed, useSSRContext, ref, watch, mergeProps } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';

function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "CommonTrending",
  __ssrInlineRender: true,
  props: {
    history: {},
    maxDay: { default: 2 }
  },
  setup(__props) {
    const ongoingHot = computed(() => __props.history.slice(0, __props.maxDay));
    const people = computed(
      () => ongoingHot.value.reduce((total, item) => total + (Number(item.accounts) || 0), 0)
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<p${ssrRenderAttrs(_attrs)}>${ssrInterpolate(_ctx.$t("command.n-people-in-the-past-n-days", [people.value, _ctx.maxDay]))}</p>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/CommonTrending.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
var sparkline_commonjs2 = function(t) {
  var e = {};
  function r(n) {
    if (e[n])
      return e[n].exports;
    var o = e[n] = { i: n, l: false, exports: {} };
    return t[n].call(o.exports, o, o.exports, r), o.l = true, o.exports;
  }
  return r.m = t, r.c = e, r.d = function(t2, e2, n) {
    r.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: n });
  }, r.r = function(t2) {
    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
  }, r.t = function(t2, e2) {
    if (1 & e2 && (t2 = r(t2)), 8 & e2)
      return t2;
    if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule)
      return t2;
    var n = /* @__PURE__ */ Object.create(null);
    if (r.r(n), Object.defineProperty(n, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2)
      for (var o in t2)
        r.d(n, o, function(e3) {
          return t2[e3];
        }.bind(null, o));
    return n;
  }, r.n = function(t2) {
    var e2 = t2 && t2.__esModule ? function() {
      return t2.default;
    } : function() {
      return t2;
    };
    return r.d(e2, "a", e2), e2;
  }, r.o = function(t2, e2) {
    return Object.prototype.hasOwnProperty.call(t2, e2);
  }, r.p = "", r(r.s = 1);
}([function(t, e, r) {
  var n = r(2), o = r(3), i = r(4);
  t.exports = function(t2) {
    return n(t2) || o(t2) || i();
  };
}, function(t, e, r) {
  r.r(e), r.d(e, "sparkline", function() {
    return c;
  });
  var n = r(0), o = r.n(n);
  function i(t2, e2, r2, n2) {
    return parseFloat((e2 - n2 * e2 / t2 + r2).toFixed(2));
  }
  function a(t2) {
    return t2.value;
  }
  function u(t2, e2) {
    var r2 = document.createElementNS("http://www.w3.org/2000/svg", t2);
    for (var n2 in e2)
      r2.setAttribute(n2, e2[n2]);
    return r2;
  }
  function c(t2, e2, r2) {
    var n2;
    if (n2 = t2, o()(n2.querySelectorAll("*")).forEach(function(t3) {
      return n2.removeChild(t3);
    }), !(e2.length <= 1)) {
      r2 = r2 || {}, "number" == typeof e2[0] && (e2 = e2.map(function(t3) {
        return { value: t3 };
      }));
      var c2 = r2.onmousemove, l = r2.onmouseout, s = "interactive" in r2 ? r2.interactive : !!c2, f = r2.spotRadius || 2, p = 2 * f, d = r2.cursorWidth || 2, v = parseFloat(t2.attributes["stroke-width"].value), b = r2.fetch || a, h = e2.map(function(t3) {
        return b(t3);
      }), y = parseFloat(t2.attributes.width.value) - 2 * p, x = parseFloat(t2.attributes.height.value), m = x - 2 * v - p, g = Math.max.apply(Math, o()(h)), A = -1e3, w = h.length - 1, j = y / w, O = [], k = i(g, m, v + f, h[0]), S = "M".concat(p, " ").concat(k);
      h.forEach(function(t3, r3) {
        var n3 = r3 * j + p, o2 = i(g, m, v + f, t3);
        O.push(Object.assign({}, e2[r3], { index: r3, x: n3, y: o2 })), S += " L ".concat(n3, " ").concat(o2);
      });
      var M = u("path", { class: "sparkline--line", d: S, fill: "none" }), C = u("path", { class: "sparkline--fill", d: "".concat(S, " V ").concat(x, " L ").concat(p, " ").concat(x, " Z"), stroke: "none" });
      if (t2.appendChild(C), t2.appendChild(M), s) {
        var E = u("line", { class: "sparkline--cursor", x1: A, x2: A, y1: 0, y2: x, "stroke-width": d }), _ = u("circle", { class: "sparkline--spot", cx: A, cy: A, r: f });
        t2.appendChild(E), t2.appendChild(_);
        var F = u("rect", { width: t2.attributes.width.value, height: t2.attributes.height.value, style: "fill: transparent; stroke: transparent", class: "sparkline--interaction-layer" });
        t2.appendChild(F), F.addEventListener("mouseout", function(t3) {
          E.setAttribute("x1", A), E.setAttribute("x2", A), _.setAttribute("cx", A), l && l(t3);
        }), F.addEventListener("mousemove", function(t3) {
          var e3 = t3.offsetX, r3 = O.find(function(t4) {
            return t4.x >= e3;
          });
          r3 || (r3 = O[w]);
          var n3, o2 = O[O.indexOf(r3) - 1], i2 = (n3 = o2 ? o2.x + (r3.x - o2.x) / 2 <= e3 ? r3 : o2 : r3).x, a2 = n3.y;
          _.setAttribute("cx", i2), _.setAttribute("cy", a2), E.setAttribute("x1", i2), E.setAttribute("x2", i2), c2 && c2(t3, n3);
        });
      }
    }
  }
  e.default = c;
}, function(t, e) {
  t.exports = function(t2) {
    if (Array.isArray(t2)) {
      for (var e2 = 0, r = new Array(t2.length); e2 < t2.length; e2++)
        r[e2] = t2[e2];
      return r;
    }
  };
}, function(t, e) {
  t.exports = function(t2) {
    if (Symbol.iterator in Object(t2) || "[object Arguments]" === Object.prototype.toString.call(t2))
      return Array.from(t2);
  };
}, function(t, e) {
  t.exports = function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  };
}]);
const sparkline = /* @__PURE__ */ getDefaultExportFromCjs(sparkline_commonjs2);
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CommonTrendingCharts",
  __ssrInlineRender: true,
  props: {
    history: {},
    width: { default: 60 },
    height: { default: 40 }
  },
  setup(__props) {
    const historyNum = computed(() => {
      if (!__props.history)
        return [1, 1, 1, 1, 1, 1, 1];
      return [...__props.history].reverse().map((item) => Number(item.accounts) || 0);
    });
    const sparklineEl = ref();
    const sparklineFn = typeof sparkline !== "function" ? sparkline.default : sparkline;
    watch([historyNum, sparklineEl], ([historyNum2, sparklineEl2]) => {
      if (!sparklineEl2)
        return;
      sparklineFn(sparklineEl2, historyNum2);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<svg${ssrRenderAttrs(mergeProps({
        ref_key: "sparklineEl",
        ref: sparklineEl,
        class: "sparkline",
        width: _ctx.width,
        height: _ctx.height,
        "stroke-width": "3"
      }, _attrs))}></svg>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/common/CommonTrendingCharts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main$1 as _, _sfc_main as a };
