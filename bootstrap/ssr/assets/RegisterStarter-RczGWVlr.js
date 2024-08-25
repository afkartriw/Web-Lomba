import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrRenderComponent, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./search-Ds61sVPy.js";
import "./GuestLayout-J8_xxBDr.js";
import { _ as _sfc_main$1 } from "./InputError-fLcttu_2.js";
import "./TextInput-pYc-Ntiv.js";
import "./PrimaryButton-CZbnR4E4.js";
import { useForm } from "@inertiajs/vue3";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "RegisterStarter",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      // username: '',
      email: "",
      password: "",
      password_confirmation: ""
    });
    $(document).ready(function() {
      $("#show_hide_password a").on("click", function(event) {
        event.preventDefault();
        if ($("#show_hide_password input").attr("type") == "text") {
          $("#show_hide_password input").attr("type", "password");
          $("#show_hide_password i").addClass("bx-hide");
          $("#show_hide_password i").removeClass("bx-show");
        } else if ($("#show_hide_password input").attr("type") == "password") {
          $("#show_hide_password input").attr("type", "text");
          $("#show_hide_password i").removeClass("bx-hide");
          $("#show_hide_password i").addClass("bx-show");
        }
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ style: { "background": "url(../assets/images/login-images/bg-forgot-password.jpg)" } }, _attrs))}><div class="wrapper"><div class="section-authentication-signin d-flex justify-content-center my-5 my-lg-1"><div class="container-fluid jarak-top-lebih10"><div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3"><div class="col mx-auto" style="${ssrRenderStyle({ "padding-top": "65px" })}"><div class="card"><div class="card-body"><div class="border p-4 rounded"><div class="text-center"><h3>Buat Akun</h3></div><br><div class="form-body"><form class="row g-3"><div class="col-12"><label for="name" value="Name" class="form-label">Nama Lengkap</label><input id="name" type="text" class="form-control"${ssrRenderAttr("value", unref(form).name)} required autofocus autocomplete="name" placeholder="Enter Name">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.name
      }, null, _parent));
      _push(`</div><div class="col-12 jarak-top-lebih6"><label for="email" value="Email" class="form-label">Email</label><input id="email" type="email" class="form-control"${ssrRenderAttr("value", unref(form).email)} required autofocus autocomplete="email" placeholder="Enter Email">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="col-12 jarak-top-lebih6"><label for="password" value="Password" class="form-label">Password</label><div class="input-group" id="show_hide_password"><input id="password"${ssrRenderAttr("value", unref(form).password)} required type="password" class="form-control border-end-0" placeholder="Enter Password" autofocus autocomplete="new-password"><a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a></div></div><div class="col-12 jarak-top-lebih6"><label for="password" value="Password" class="form-label">Password</label><div class="input-group" id="show_hide_password"><input id="password_confirmation"${ssrRenderAttr("value", unref(form).password_confirmation)} required type="password" class="form-control border-end-0" placeholder="Confirm Password" autofocus autocomplete="new-password"><a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a></div></div><div class="col-12 jarak-top-lebih12"><div class="d-grid"><button class="btn btn-primary"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}> Register </button></div><div class="login-separater text-center mb-4 jarak-top-kurang18"><span>ATAU MASUK DENGAN EMAIL</span><hr></div><div class="d-grid jarak-top-kurang10"><a class="btn shadow-sm btn-white" href="javascript:;"><span class="d-flex justify-content-center align-items-center"><img class="me-2"${ssrRenderAttr("src", _imports_0)} width="16" alt="Image Description"><span>Masuk dengan Google</span></span></a></div><div class="text-center jarak-top-kurang12"><br><p> Sudah punya akun? <a${ssrRenderAttr("href", _ctx.route("login"))}>Login</a></p></div></div></form></div></div></div></div></div></div></div></div></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/RegisterStarter.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
