import { defineComponent, mergeModels, useModel, ref, watch, computed, unref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderTeleport, ssrRenderStyle, ssrRenderAttr, ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap';
import { aS as useDeactivated, i as useRoute, aV as useEventListener, Z as _export_sfc } from '../server.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  ...{
    inheritAttrs: false
  },
  __name: "ModalDialog",
  __ssrInlineRender: true,
  props: mergeModels({
    zIndex: { default: 100 },
    closeByMask: { type: Boolean, default: true },
    useVIf: { type: Boolean, default: true },
    keepAlive: { type: Boolean, default: false },
    dialogLabelledBy: {}
  }, {
    "modelValue": { type: Boolean, ...{ required: true } }
  }),
  emits: mergeModels(["close"], ["update:modelValue"]),
  setup(__props, { expose: __expose, emit }) {
    const props = __props;
    const visible = useModel(__props, "modelValue");
    const deactivated = useDeactivated();
    const route = useRoute();
    const elDialogMain = ref();
    const elDialogRoot = ref();
    useFocusTrap(elDialogRoot, {
      immediate: false,
      allowOutsideClick: true,
      clickOutsideDeactivates: true,
      escapeDeactivates: true,
      preventScroll: true,
      returnFocusOnDeactivate: true
    });
    __expose({
      elDialogRoot,
      elDialogMain
    });
    function close() {
      if (!visible.value)
        return;
      visible.value = false;
      emit("close");
    }
    const routePath = ref(route.path);
    watch(visible, (value) => {
      if (value)
        routePath.value = route.path;
    });
    const notInCurrentPage = computed(() => deactivated.value || routePath.value !== route.path);
    watch(notInCurrentPage, (value) => {
      if (props.keepAlive)
        return;
      if (value)
        close();
    });
    const isVIf = computed(() => {
      return props.useVIf ? visible.value : true;
    });
    const isVShow = computed(() => {
      return !props.useVIf ? visible.value : true;
    });
    function bindTypeToAny($attrs) {
      return $attrs;
    }
    useEventListener("keydown", (e) => {
      if (!visible.value)
        return;
      if (e.key === "Escape") {
        close();
        e.preventDefault();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderTeleport(_push, (_push2) => {
        if (unref(isVIf)) {
          _push2(`<div style="${ssrRenderStyle([
            unref(isVShow) ? null : { display: "none" },
            {
              "z-index": _ctx.zIndex
            }
          ])}" aria-modal="true"${ssrRenderAttr("aria-labelledby", _ctx.dialogLabelledBy)} fixed inset-0 of-y-auto scrollbar-hide overscroll-none data-v-dba89e06><div class="dialog-mask" absolute inset-0 z-0 bg-transparent opacity-100 backdrop-filter backdrop-blur-sm touch-none data-v-dba89e06></div><div class="dialog-mask" absolute inset-0 z-0 bg-black opacity-48 touch-none h="[calc(100%+0.5px)]" data-v-dba89e06></div><div class="p-safe-area" absolute inset-0 z-1 pointer-events-none opacity-100 flex data-v-dba89e06><div flex-1 flex items-center justify-center p-4 data-v-dba89e06><div${ssrRenderAttrs(mergeProps({
            ref_key: "elDialogMain",
            ref: elDialogMain,
            class: "dialog-main rounded shadow-lg pointer-events-auto isolate bg-base border-base border-1px border-solid w-full max-h-full of-y-auto overscroll-contain touch-pan-y touch-pan-x"
          }, bindTypeToAny(_ctx.$attrs)))} data-v-dba89e06>`);
          ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent);
          _push2(`</div></div></div></div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/modal/ModalDialog.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dba89e06"]]);

export { __nuxt_component_0 as _ };
