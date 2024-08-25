import { ref, reactive, onMounted, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderDynamicModel, ssrRenderClass, ssrIncludeBooleanAttr } from "vue/server-renderer";
import { _ as _imports_0 } from "./search-Ds61sVPy.js";
import "./GuestLayout-J8_xxBDr.js";
import { _ as _sfc_main$1 } from "./InputError-fLcttu_2.js";
import "./TextInput-pYc-Ntiv.js";
import "./PrimaryButton-CZbnR4E4.js";
import { useForm } from "@inertiajs/vue3";
import "sweetalert2";
import axios from "axios";
import "./ApplicationLogo-3H3I4iid.js";
import "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Register",
  __ssrInlineRender: true,
  setup(__props) {
    const form = useForm({
      name: "",
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      captcha: ""
    });
    const showPassword = ref(false);
    const showPasswordConfirmation = ref(false);
    const usernameError = ref("");
    const emailError = ref("");
    const captcha = reactive({
      image: "",
      key: ""
    });
    const captchaInput = ref("");
    async function generateCaptcha() {
      try {
        const response = await axios.get("/captcha-image");
        captcha.image = response.data.captcha + "&" + Date.now();
      } catch (error) {
        console.error("Error fetching CAPTCHA:", error);
      }
    }
    onMounted(() => {
      generateCaptcha();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<body${ssrRenderAttrs(mergeProps({ class: "body-login" }, _attrs))}><div class="card3 jarakm"><div class="card2"><div class="card-body"><div class="border p-4 rounded"><div class="text-center"><h3>Buat Akun</h3></div><br><form class="row g-3"><div class="col-12"><label for="inputEmailAddress" class="form-label warna-hitam jb-k5">Full Name</label><input${ssrRenderAttr("value", unref(form).name)} type="text" class="form-control jb-k5" id="inputNamaLengkap" placeholder="Enter Full Name"></div><div class="col-12"><label for="inputUsername" class="form-label warna-hitam jb-k5">Username</label><input${ssrRenderAttr("value", unref(form).username)} type="text" class="form-control jb-k5" id="inputUsername" placeholder="Enter Username"><div class="mt-2 text-danger">${ssrInterpolate(usernameError.value)}</div></div><div class="col-12"><label for="inputEmailAddress" class="form-label warna-hitam jb-k5">Email</label><input${ssrRenderAttr("value", unref(form).email)} type="email" class="form-control" placeholder="Enter Email"><div class="mt-2 text-danger">${ssrInterpolate(emailError.value)}</div>`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.email
      }, null, _parent));
      _push(`</div><div class="col-12 jarak-top-lebih10"><label for="password" value="Password" class="form-label warna-hitam jb-k5">Password</label><div class="input-group" id="show_hide_password"><input id="password"${ssrRenderDynamicModel(showPassword.value ? "text" : "password", unref(form).password, null)} required${ssrRenderAttr("type", showPassword.value ? "text" : "password")} class="form-control border-end-0" placeholder="Enter Password" autofocus autocomplete="new-password"><a href="javascript:;" class="input-group-text bg-transparent"><i class="${ssrRenderClass(showPassword.value ? "bx bx-show" : "bx bx-hide")}"></i></a></div></div><div class="col-12 jarak-top-lebih10"><label for="password_confirmation" value="Password" class="form-label warna-hitam jb-k5">Confirm Password</label><div class="input-group" id="show_hide_password_confirmation"><input id="password_confirmation"${ssrRenderDynamicModel(showPasswordConfirmation.value ? "text" : "password", unref(form).password_confirmation, null)} required${ssrRenderAttr("type", showPasswordConfirmation.value ? "text" : "password")} class="form-control border-end-0" placeholder="Enter Password Again" autofocus autocomplete="new-password"><a href="javascript:;" class="input-group-text bg-transparent"><i class="${ssrRenderClass(showPasswordConfirmation.value ? "bx bx-show" : "bx bx-hide")}"></i></a></div></div><div class="col-12 jarak-top-lebih10"><label class="c-mr-5">CAPTCHA</label><div><img${ssrRenderAttr("src", captcha.image)} alt="CAPTCHA"><button type="button">Refresh</button></div><input${ssrRenderAttr("value", captchaInput.value)} type="text" class="form-control" id="captcha" required placeholder="Enter CAPTCHA">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        class: "mt-2",
        message: unref(form).errors.captcha
      }, null, _parent));
      _push(`</div><div class="col-12 jarak-top-lebih12"><div class="d-grid"><button class="btn btn-primary w-100"${ssrIncludeBooleanAttr(unref(form).processing) ? " disabled" : ""}><i class="bx bx-user"></i>Register </button></div><div class="login-separater text-center mb-4 jarak-top-kurang18"><span>OR LOGIN WITH EMAIL</span><hr></div><div class="d-grid jarak-top-kurang10"><a class="btn shadow-sm btn-white" href="javascript:;"><span class="d-flex justify-content-center align-items-center"><img class="me-2"${ssrRenderAttr("src", _imports_0)} width="16" alt="Image Description"><span>Login with Google</span></span></a></div><div class="text-center jarak-top-kurang12"><br><p> Already have an account? <a${ssrRenderAttr("href", _ctx.route("login"))}>Login disini</a></p></div></div></form></div></div></div></div></body>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Register.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
