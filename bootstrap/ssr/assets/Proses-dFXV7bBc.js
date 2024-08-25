import { ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import { useSSRContext } from "vue";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _imports_0 = "/build/assets/error_img-CwRQExGk.png";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><section class="tf__error_page mt_195 xs_mt_100"><div class="container"><div class="row"><div class="col-xl-6 m-auto wow fadeInUp" data-wow-duration="1.5s"><div class="tf__error_text"><div class="img"><img${ssrRenderAttr("src", _imports_0)} alt="error" class="img-fluid w-100"></div><h4>Page not found</h4><p>SABAR YAKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK</p><a class="common_btn" href="/index2">go to home</a></div></div></div></div></section><footer class="tf__footer mt_100"><div class="text-center p-4" style="${ssrRenderStyle({ "background-color": "#191e24f5", "color": "white" })}"> Copyright ©2024 Tim Website OLINAS </div></footer><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Proses.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Proses = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Proses as default
};
