import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "surat",
  __ssrInlineRender: true,
  props: ["UserData"],
  setup(__props) {
    const props = __props;
    const getFileSrc = () => {
      if (props.UserData.surat) {
        return `/storage/${props.UserData.surat}`;
      } else {
        return "/bootstrap/images/default2.png";
      }
    };
    const isPdfFile = computed(() => {
      return props.UserData.surat ? props.UserData.surat.toLowerCase().endsWith(".pdf") : false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "file-container" }, _attrs))} data-v-b6021bcb>`);
      if (isPdfFile.value) {
        _push(`<div class="pdf-container" data-v-b6021bcb><iframe${ssrRenderAttr("src", getFileSrc())} class="full-screen" data-v-b6021bcb></iframe></div>`);
      } else {
        _push(`<div class="image-container" data-v-b6021bcb><img${ssrRenderAttr("src", getFileSrc())} alt="..." class="img-fluid rounded full-screen" data-v-b6021bcb></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftar/surat.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const surat = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-b6021bcb"]]);
export {
  surat as default
};
