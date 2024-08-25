import { reactive, ref, resolveComponent, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderDynamicModel, ssrRenderClass } from "vue/server-renderer";
import { _ as _imports_0 } from "./search-Ds61sVPy.js";
import { useForm, Link } from "@inertiajs/vue3";
import "sweetalert2";
import axios from "axios";
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  props: {
    canResetPassword: {
      type: Boolean
    },
    status: {
      type: String
    },
    errors: Object
  },
  setup(__props) {
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
    const form = useForm({
      login: "",
      password: "",
      remember: false,
      captcha: ""
    });
    const showPassword = ref(false);
    generateCaptcha();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_InputError = resolveComponent("InputError");
      _push(`<body${ssrRenderAttrs(mergeProps({ class: "body-login" }, _attrs))}><div class="card3 jarakm"><div class="card2"><div class="card-body"><div class="border p-4 rounded"><div class="text-center"><h4 class="ch4">Login</h4><br><br></div><form class="row g-3"><div class="col-12"><label for="login" class="form-label warna-hitam">Email atau Username</label><input class="form-control" id="login" type="text"${ssrRenderAttr("value", unref(form).login)} required placeholder="Email atau Username">`);
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: __props.errors.login
      }, null, _parent));
      _push(`</div><div class="col-12 c-mlk10"><label for="password" class="form-label warna-hitam">Password</label><div class="input-group" id="show_hide_password"><input class="form-control border-end-0" id="password"${ssrRenderAttr("type", showPassword.value ? "text" : "password")}${ssrRenderDynamicModel(showPassword.value ? "text" : "password", unref(form).password, null)} required placeholder="Masukan Password">`);
      _push(ssrRenderComponent(_component_InputError, {
        class: "mt-2",
        message: __props.errors.password
      }, null, _parent));
      _push(`<a href="javascript:;" class="input-group-text bg-transparent"><i class="${ssrRenderClass(showPassword.value ? "bx bx-show" : "bx bx-hide")}"></i></a></div></div><div class="d-grid jarak-top-lebih10"><label class="c-mr-5">CAPTCHA</label><div><img${ssrRenderAttr("src", captcha.image)} alt="CAPTCHA"><button type="button">Refresh</button></div><input${ssrRenderAttr("value", captchaInput.value)} type="text" class="form-control" id="captcha" required placeholder="Enter CAPTCHA"></div>`);
      if (__props.canResetPassword) {
        _push(ssrRenderComponent(unref(Link), {
          href: _ctx.route("password.request"),
          class: "ml240"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`Lupa Password?`);
            } else {
              return [
                createTextVNode("Lupa Password?")
              ];
            }
          }),
          _: 1
        }, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="col-12"><div class="d-grid jarak-top-kurang5"><button type="submit" class="btn btn-primary w-100"><i class="bx bx-lock-open"></i>Masuk</button></div><div class="login-separater text-center mb-4 jarak-top-kurang15"><span>ATAU MASUK DENGAN EMAIL</span><hr></div><div class="d-grid jarak-top-kurang4"><a class="btn shadow-sm btn-white" href="#"><span class="d-flex justify-content-center align-items-center"><img class="me-2"${ssrRenderAttr("src", _imports_0)} width="16" alt="Image Description"><span>Masuk dengan Google</span></span></a></div><div class="text-center jarak-top-kurang10"><br><p> Belum punya akun? <a${ssrRenderAttr("href", _ctx.route("register"))}>Daftar disini</a></p></div></div></form></div></div></div></div></body>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Auth/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
