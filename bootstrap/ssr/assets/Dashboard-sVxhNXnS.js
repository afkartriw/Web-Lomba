import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Dashboard",
  __ssrInlineRender: true,
  props: {
    lombas: {
      type: Array,
      required: true
    },
    initialUserStatus: {
      type: String,
      required: true
    },
    notifCount: {
      type: [Number, null],
      default: null
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    logo1: {
      type: String
    }
  },
  setup(__props) {
    const props = __props;
    ref(props.initialUserStatus);
    const notifCount = ref(props.notifCount);
    if (!localStorage.getItem("reloaded")) {
      setTimeout(() => {
        localStorage.setItem("reloaded", "true");
        location.reload();
      }, 1e3);
    } else {
      localStorage.removeItem("reloaded");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div>`);
      });
      _push(`<!--]--><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a href="/dashboard"><div class="parent-icon"><i class="bx bx-category"></i></div><div class="menu-title">Overview</div></a></li><li><a${ssrRenderAttr("href", _ctx.route("profilpeserta.create"))}><div class="parent-icon"><i class="bx bx-user-circle"></i></div><div class="menu-title">Profil</div></a></li><li><a href="/notifikasipeserta"><div class="parent-icon"><i class="bx bx-user-circle"></i></div><div class="menu-title">Notifikasi `);
      if (notifCount.value) {
        _push(`<span class="alert-count">${ssrInterpolate(notifCount.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></a></li><li><a href="/reportpeserta"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Report <span></span></div></a></li><li><a href="/"><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "menu-title",
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Keluar `);
          } else {
            return [
              createTextVNode(" Keluar ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="tf__activities_slider_area"><div class="container"><div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3"><!--[-->`);
      ssrRenderList(__props.lombas, (lomba) => {
        _push(`<div class="col"><div class="card radius-15 card-overview"><img${ssrRenderAttr("src", lomba.picture ? `/storage/${lomba.picture}` : "/bootstrap/images/default.jpg")} class="border-radius"><div class="judul-overview">${ssrInterpolate(lomba.name_lomba)}</div><div class="btn-posisi"><a class="btn btn-primary btn-lomba"${ssrRenderAttr("href", `/detailpeserta/${lomba.id}`)}>Detail</a>`);
        if (!lomba.is_registered) {
          _push(`<a class="btn btn-success button-lomba">Daftar</a>`);
        } else {
          _push(`<!---->`);
        }
        if (lomba.is_registered && lomba.status_ketua_team === "sudah_submit") {
          _push(`<button class="btn btn-secondary button-lomba">Terdaftar</button>`);
        } else {
          _push(`<!---->`);
        }
        if (lomba.is_registered && lomba.status_ketua_team === "terdaftar") {
          _push(`<a class="btn-ungu button-lomba">Lanjutkan</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
