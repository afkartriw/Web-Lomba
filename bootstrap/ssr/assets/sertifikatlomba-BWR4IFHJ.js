import { computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "sertifikatlomba",
  __ssrInlineRender: true,
  props: ["UserData"],
  setup(__props) {
    const props = __props;
    const getFileSrc = () => {
      if (props.UserData.sertifikat) {
        return `/storage/${props.UserData.sertifikat}`;
      } else {
        return "/bootstrap/images/default2.png";
      }
    };
    const isPdfFile = computed(() => {
      return props.UserData.sertifikat ? props.UserData.sertifikat.toLowerCase().endsWith(".pdf") : false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "file-container" }, _attrs))} data-v-c34128f8>`);
      if (isPdfFile.value) {
        _push(`<div class="pdf-container" data-v-c34128f8><iframe${ssrRenderAttr("src", getFileSrc())} class="full-screen" data-v-c34128f8></iframe></div>`);
      } else {
        _push(`<div class="image-container" data-v-c34128f8><img${ssrRenderAttr("src", getFileSrc())} alt="..." class="img-fluid rounded full-screen" data-v-c34128f8></div>`);
      }
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftar/sertifikatlomba.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sertifikatlomba = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c34128f8"]]);
export {
  sertifikatlomba as default
};
