import { ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Notifikasipeserta",
  __ssrInlineRender: true,
  props: {
    notifikasis: {
      type: Array,
      default: () => []
    },
    isVerified: {
      type: Boolean,
      default: false
    },
    notifCount: {
      type: Number,
      default: 0
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
    const notifCount = ref(props.notifCount);
    function getFormattedDate() {
      const date = /* @__PURE__ */ new Date();
      const monthNames = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"];
      return `${date.getDate()} ${monthNames[date.getMonth()]}`;
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-11ab1a11><div class="sidebar-wrapper" data-simplebar="true" data-v-11ab1a11><div class="sidebar-header" data-v-11ab1a11><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div data-v-11ab1a11><a href="/" data-v-11ab1a11><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2" data-v-11ab1a11></a></div>`);
      });
      _push(`<!--]--><div id="menu-toggle" class="toggle-icon ms-auto" data-v-11ab1a11><i class="fadeIn animated bx bx-menu" data-v-11ab1a11></i></div></div><ul class="metismenu" id="menu" data-v-11ab1a11><li data-v-11ab1a11><a href="/dashboard" data-v-11ab1a11><div class="parent-icon" data-v-11ab1a11><i class="bx bx-category" data-v-11ab1a11></i></div><div class="menu-title" data-v-11ab1a11>Overview</div></a></li><li data-v-11ab1a11><a href="/profilpeserta/create" data-v-11ab1a11><div class="parent-icon" data-v-11ab1a11><i class="bx bx-user-circle" data-v-11ab1a11></i></div><div class="menu-title" data-v-11ab1a11>Profil</div></a></li><li data-v-11ab1a11><a href="/notifikasipeserta" data-v-11ab1a11><div class="parent-icon" data-v-11ab1a11><i class="bx bx-user-circle" data-v-11ab1a11></i></div><div class="menu-title" data-v-11ab1a11>Notifikasi `);
      if (notifCount.value) {
        _push(`<span class="alert-count" data-v-11ab1a11>${ssrInterpolate(notifCount.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></a></li><li data-v-11ab1a11><a href="/reportpeserta" data-v-11ab1a11><div class="parent-icon" data-v-11ab1a11><i class="fadeIn animated bx bx-comment-detail" data-v-11ab1a11></i></div><div class="menu-title" data-v-11ab1a11>Report <span data-v-11ab1a11></span></div></a></li><li data-v-11ab1a11><a data-v-11ab1a11><div class="parent-icon" data-v-11ab1a11><i class="fadeIn animated bx bx-log-out" data-v-11ab1a11></i></div><div class="menu-title" data-v-11ab1a11>`);
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
      _push(`</div></a></li></ul></div><header data-v-11ab1a11><div class="topbar d-flex align-items-center" data-v-11ab1a11><nav class="navbar navbar-expand" data-v-11ab1a11><div class="mobile-toggle-menu" data-v-11ab1a11><i class="bx bx-menu" data-v-11ab1a11></i></div><div class="search-bar flex-grow-1" data-v-11ab1a11></div><div class="top-menu ms-auto" data-v-11ab1a11><ul class="navbar-nav align-items-center" data-v-11ab1a11><div class="user-info ps-3" data-v-11ab1a11><p class="user-name mb-0" data-v-11ab1a11>${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role" data-v-11ab1a11>${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon" data-v-11ab1a11><i class="bx bx-user-circle c-font48" data-v-11ab1a11></i></div><li class="nav-item dropdown dropdown-large" data-v-11ab1a11><div class="dropdown-menu dropdown-menu-end" data-v-11ab1a11><div class="header-notifications-list" data-v-11ab1a11></div></div></li><li class="nav-item dropdown dropdown-large" data-v-11ab1a11><div class="dropdown-menu dropdown-menu-end" data-v-11ab1a11><div class="header-message-list" data-v-11ab1a11></div></div></li></ul></div></nav></div></header><div class="page-wrapper" data-v-11ab1a11><div class="page-content" data-v-11ab1a11><div class="card-body btn-crud" data-v-11ab1a11><!--[-->`);
      ssrRenderList(__props.notifikasis, (notifikasi) => {
        _push(`<div class="keterangan-notif jarak-bottom-kurang20 c-mb30 bg-cred" data-v-11ab1a11><label data-v-11ab1a11>${ssrInterpolate(getFormattedDate())}</label><label data-v-11ab1a11>${ssrInterpolate(notifikasi.description)}</label></div>`);
      });
      _push(`<!--]--></div>`);
      if (__props.isVerified) {
        _push(`<div class="keterangan-notif jarak-bottom-kurang20 bg-cgreen" data-v-11ab1a11><label data-v-11ab1a11>${ssrInterpolate(getFormattedDate())}</label><label data-v-11ab1a11>Selamat TIM anda telah terverifikasi</label></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Notifikasipeserta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Notifikasipeserta = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-11ab1a11"]]);
export {
  Notifikasipeserta as default
};
