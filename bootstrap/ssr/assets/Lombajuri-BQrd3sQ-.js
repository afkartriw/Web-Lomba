import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  __name: "Lombajuri",
  __ssrInlineRender: true,
  props: ["name", "username", "lombas", "picture", "sudah_dinilai", "totalteam", "settings", "logo1"],
  setup(__props) {
    if (!localStorage.getItem("reloaded")) {
      setTimeout(() => {
        localStorage.setItem("reloaded", "true");
        location.reload();
      }, 1e3);
    } else {
      localStorage.removeItem("reloaded");
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))} data-v-a7a04106><div class="sidebar-wrapper" data-simplebar="true" data-v-a7a04106><div class="sidebar-header" data-v-a7a04106><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div data-v-a7a04106><a href="/" data-v-a7a04106><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2" data-v-a7a04106></a></div>`);
      });
      _push(`<!--]--><div id="menu-toggle" class="toggle-icon ms-auto" data-v-a7a04106><i class="fadeIn animated bx bx-menu" data-v-a7a04106></i></div></div><ul class="metismenu" id="menu" data-v-a7a04106><li data-v-a7a04106><a href="/lombajuri" data-v-a7a04106><div class="parent-icon" data-v-a7a04106><i class="bx bx-award" data-v-a7a04106></i></div><div class="menu-title" data-v-a7a04106>Lomba</div></a></li><li data-v-a7a04106><a href="/rangkingjuri" data-v-a7a04106><div class="parent-icon" data-v-a7a04106><i class="fadeIn animated bx bx-trophy" data-v-a7a04106></i></div><div class="menu-title" data-v-a7a04106>Rangking</div></a></li><li data-v-a7a04106><a href="/" data-v-a7a04106><div class="parent-icon" data-v-a7a04106><i class="fadeIn animated bx bx-log-out" data-v-a7a04106></i></div><div class="menu-title" data-v-a7a04106>`);
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
      _push(`</div></a></li></ul></div><header data-v-a7a04106><div class="topbar d-flex align-items-center" data-v-a7a04106><nav class="navbar navbar-expand" data-v-a7a04106><div class="mobile-toggle-menu" data-v-a7a04106><i class="bx bx-menu" data-v-a7a04106></i></div><div class="search-bar flex-grow-1" data-v-a7a04106></div><div class="top-menu ms-auto" data-v-a7a04106><ul class="navbar-nav align-items-center" data-v-a7a04106><div class="user-info ps-3" data-v-a7a04106><p class="user-name mb-0" data-v-a7a04106>${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role" data-v-a7a04106>${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon" data-v-a7a04106><i class="bx bx-user-circle c-font48" data-v-a7a04106></i></div><li class="nav-item dropdown dropdown-large" data-v-a7a04106><div class="dropdown-menu dropdown-menu-end" data-v-a7a04106><div class="header-notifications-list" data-v-a7a04106></div></div></li><li class="nav-item dropdown dropdown-large" data-v-a7a04106><div class="dropdown-menu dropdown-menu-end" data-v-a7a04106><div class="header-message-list" data-v-a7a04106></div></div></li></ul></div></nav></div></header><div class="page-wrapper" data-v-a7a04106><div class="page-content" data-v-a7a04106><div class="tf__activities_slider_area" data-v-a7a04106><div class="container" data-v-a7a04106><div class="row row-cols-1 row-cols-lg-2 row-cols-xl-3" data-v-a7a04106><!--[-->`);
      ssrRenderList(__props.lombas, (lomba) => {
        _push(`<div class="col" data-v-a7a04106><div class="card radius-15 card-overview" data-v-a7a04106><span class="pcount" data-v-a7a04106>${ssrInterpolate(lomba.sudah_dinilai)}/${ssrInterpolate(lomba.totalteam)}</span><img${ssrRenderAttr("src", lomba.picture ? `/storage/${lomba.picture}` : "/bootstrap/images/default.jpg")} class="border-radius" data-v-a7a04106><label class="judul-overview" data-v-a7a04106>${ssrInterpolate(lomba.name_lomba)}</label><a class="btn btn-primary btn-landing-page2"${ssrRenderAttr("href", `/lombajuri/${lomba.id}`)} data-v-a7a04106>Lihat Karya</a></div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Panelis/Lombajuri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Lombajuri = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-a7a04106"]]);
export {
  Lombajuri as default
};
