import { ref, watch, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Tambahadministrator",
  __ssrInlineRender: true,
  props: ["name", "username", "users", "settings", "logo1", "lombas"],
  setup(__props) {
    const form = useForm({
      name: null,
      username: null,
      email: null,
      password: null,
      role: "Pilih Role",
      selectedLomba: []
    });
    const emailError = ref("");
    const usernameError = ref("");
    watch(() => form.role, (newRole) => {
      if (newRole !== 4) {
        form.selectedLomba = [];
      }
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">TAMBAH ADMINISTRATOR</h4><hr><form><div class="row"><div class="col-md-6 margin-top10-crud"><label class="c-mb5-black"><b>Nama Lengkap</b></label><input id="name" type="name" class="form-control"${ssrRenderAttr("value", unref(form).name)} placeholder="Masukan nama lengkap" required></div><div class="col-md-6 margin-top10-crud"><label class="c-mb5-black"><b>Username</b></label><input id="username" type="username" class="form-control" placeholder="Masukan username"${ssrRenderAttr("value", unref(form).username)} required>`);
      if (usernameError.value) {
        _push(`<div class="text-danger">${ssrInterpolate(usernameError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="col-md-12 margin-top10-crud"><label class="c-mb5-black"><b>Email</b></label><input id="email" type="email" class="form-control"${ssrRenderAttr("value", unref(form).email)} placeholder="Masukan email" required>`);
      if (emailError.value) {
        _push(`<div class="text-danger">${ssrInterpolate(emailError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div><label for="inputChoosePassword" class="form-label warna-hitam"><b>Password</b></label><div class="input-group" id="show_hide_password"><input type="password"${ssrRenderAttr("value", unref(form).password)} class="form-control border-end-0" id="inputChoosePassword" placeholder="Masukan password" required> <a href="javascript:;" class="input-group-text bg-transparent"><i class="bx bx-hide"></i></a></div></div><div><label class="role-add"><b class="warna-hitam">Role</b></label><select class="form-select" id="role"><option selected disabled>Pilih Role</option><option${ssrRenderAttr("value", 1)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, 1) : ssrLooseEqual(unref(form).role, 1)) ? " selected" : ""}>Admin</option><option${ssrRenderAttr("value", 4)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, 4) : ssrLooseEqual(unref(form).role, 4)) ? " selected" : ""}>Juri</option><option${ssrRenderAttr("value", 2)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).role) ? ssrLooseContain(unref(form).role, 2) : ssrLooseEqual(unref(form).role, 2)) ? " selected" : ""}>Petugas</option></select></div>`);
      if (unref(form).role == 4) {
        _push(`<div><label class="role-add"><b class="warna-hitam">Lomba</b></label><div><!--[-->`);
        ssrRenderList(__props.lombas.data, (lomba) => {
          _push(`<div class="form-check"><input class="form-check-input" type="checkbox"${ssrRenderAttr("id", "lomba" + lomba.id)}${ssrIncludeBooleanAttr(Array.isArray(unref(form).selectedLomba) ? ssrLooseContain(unref(form).selectedLomba, lomba.id) : unref(form).selectedLomba) ? " checked" : ""}${ssrRenderAttr("value", lomba.id)}><label class="form-check-label"${ssrRenderAttr("for", "lomba" + lomba.id)}>${ssrInterpolate(lomba.name_lomba)}</label></div>`);
        });
        _push(`<!--]--></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="btn-posisi"><a class="btn btn-danger button-left"${ssrRenderAttr("href", _ctx.route("administrator.index"))}>Batal</a><button class="btn btn-primary button-right" type="submit">Tambah</button></div></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Administrator/Tambahadministrator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
