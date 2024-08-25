import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./InputError-fLcttu_2.js";
import { useForm } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "ResetPassword copy",
  __ssrInlineRender: true,
  props: {
    email: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      token: props.token,
      email: props.email,
      password: "",
      password_confirmation: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ style: { "background": "url(../assets/images/login-images/bg-forgot-password.jpg)" } }, _attrs))}><div class="wrapper"><div class="section-authentication-signin d-flex justify-content-center my-5 my-lg-1"><div class="container-fluid jarak-top-lebih10"><div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3"><div class="col mx-auto" style="${ssrRenderStyle({ "padding-top": "30px" })}"><div class="card"><div class="card-body"><div class="border p-4 rounded"><div class="text-center"><h3>Reset Password</h3></div><br><div class="form-body"><form class="row g-3"><div class="col-12 jarak-top-lebih6"><label for="email" value="Email" class="form-label">Email</label><input id="email" type="email" class="form-control"${ssrRenderAttr("value", unref(form).email)} required autofocus autocomplete="email" placeholder="Enter Email">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="col-12 jarak-top-lebih6"><label for="password" value="Password" class="form-label">Password</label><div class="input-group" id="show_hide_password"><input id="password"${ssrRenderAttr("value", unref(form).password)} required type="password" class="form-control border-end-0" placeholder="Enter Password" autofocus autocomplete="new-password"><a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.password
      }, null, _parent));
      _push(`</div></div><div class="col-12 jarak-top-lebih6"><label for="password_confirmation" value="Confirm Password" class="form-label">Confirm Password</label><div class="input-group" id="show_hide_password"><input id="password_confirmation"${ssrRenderAttr("value", unref(form).password_confirmation)} required type="password" class="form-control border-end-0" placeholder="Confirm Password" autofocus autocomplete="new-password"><a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.password_confirmation
      }, null, _parent));
      _push(`</div></div><div class="col-12 jarak-top-lebih12"><div class="d-grid"><button class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> Reset Password </button></div></div></form></div></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/ResetPassword copy.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
