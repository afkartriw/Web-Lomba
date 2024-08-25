import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import "@inertiajs/vue3";
const _sfc_main = {
  __name: "Detailadministrator",
  __ssrInlineRender: true,
  props: ["name", "username", "users", "settings", "logo1"],
  setup(__props) {
    const roleNames = {
      1: "Admin",
      2: "Petugas",
      3: "User",
      4: "Juri"
    };
    const getRoleName = (role) => {
      return roleNames[role] || "Unknown";
    };
    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        hour12: false
        // Use 24-hour format
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} alt="Logo" style="${ssrRenderStyle({ "width": "135px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0">DETAIL ADMINISTRATOR</h4><hr><div class="row"><div class="col-md-6 c-mb10"><label class="c-mb5-black"><b>NAMA LENGKAP</b></label><div class="data-tim">${ssrInterpolate(__props.users.name)}</div></div><div class="col-md-6"><label class="c-mb5-black"><b>USERNAME</b></label><div class="data-tim">${ssrInterpolate(__props.users.username)}</div></div><div class="col-md-6"><label class="c-mb5-black"><b>PASSWORD</b></label><div class="data-tim">*********</div></div><div class="col-md-6"><label class="c-mb5-black"><b>EMAIL</b></label><div class="data-tim">${ssrInterpolate(__props.users.email)}</div></div><div class="col-md-6"><label class="c-mb5-black"><b>ROLE</b></label><div class="data-tim">${ssrInterpolate(getRoleName(__props.users.role))}</div></div><div class="col-md-6"><label class="c-mb5-black"><b>TANGGAL</b></label><div class="data-tim">${ssrInterpolate(formatDate(__props.users.created_at))}</div></div></div><label class="c-mb5-black"><b>LOMBA</b></label><ul><!--[-->`);
      ssrRenderList(__props.users.lomba, (lomba) => {
        _push(`<li>${ssrInterpolate(lomba.name_lomba)}</li>`);
      });
      _push(`<!--]--></ul><div class="btn-posisi"><button class="btn btn-danger btn-kembali" onclick="window.location.href=&#39;/administrator&#39;">Kembali</button></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Administrator/Detailadministrator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
