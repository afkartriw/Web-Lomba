import { resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from "vue/server-renderer";
import "sweetalert2";
import { _ as _sfc_main$1 } from "./InputError-fLcttu_2.js";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "ForgotPassword",
  __ssrInlineRender: true,
  props: {
    status: {
      type: String,
      default: null
    }
  },
  setup(__props) {
    const form = useForm({
      email: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = resolveComponent("Button");
      _push(`<body${ssrRenderAttrs(mergeProps({ class: "body-login" }, _attrs))}><div class="card3 jarakm"><div class="card2"><div class="card-body"><div class="border p-4 rounded"><div class="text-center"><div class="text-center"><img src="assets/images/icons/forgot-2.png" width="120"></div><h5 class="mt-5 rata-kiri">Tidak ingat kata sandi?</h5><p class="text-lupa-pw rata-kiri">Masukan ID email Anda yang terdaftar untuk mengatur kata ulang sandi</p><form><div class="col-12 c-mb-13 c-mt10 rata-kiri"><label class="form-label warna-hitam jb-k5">Email</label><input type="email" class="form-control jb-k5" id="inputEmailAddress"${ssrRenderAttr("value", unref(form).email)} required placeholder="Masukan Email">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="d-grid">`);
      _push(ssrRenderComponent(_component_Button, {
        class: "btn btn-primary w-100 c-mb-8",
        disabled: unref(form).processing
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kirim `);
          } else {
            return [
              createTextVNode(" Kirim ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="/login" class="btn btn-light w-100" onclick="window.location.href=&#39;/login&#39;"><i class="bx bx-arrow-back me-1"></i>Kembali ke halaman login</a></div></form></div></div></div></div></div></body>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ForgotPassword.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
