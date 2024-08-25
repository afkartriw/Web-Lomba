import { computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Rangkingjuri",
  __ssrInlineRender: true,
  props: {
    userData: Object,
    reg_lombas: Array,
    lomba: Object,
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
    const groupedLombas = computed(() => {
      return props.reg_lombas.filter((reg_lomba) => reg_lomba.status_kelulusan !== "menunggu").reduce((acc, reg_lomba) => {
        var _a;
        const name_lomba = (_a = reg_lomba == null ? void 0 : reg_lomba.lomba) == null ? void 0 : _a.name_lomba;
        if (!acc[name_lomba]) {
          acc[name_lomba] = [];
        }
        acc[name_lomba].push(reg_lomba);
        acc[name_lomba].sort((a, b) => b.value_total - a.value_total);
        return acc;
      }, {});
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div>`);
      });
      _push(`<!--]--><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a href="/lombajuri"><div class="parent-icon"><i class="bx bx-award"></i></div><div class="menu-title">Lomba</div></a></li><li><a href="/rangkingjuri"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a href="/"><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(__props.userData.name)}</p><p class="user-role">${ssrInterpolate(__props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><!--[-->`);
      ssrRenderList(groupedLombas.value, (lombaGroup, name_lomba) => {
        _push(`<div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL RANGKING LOMBA ${ssrInterpolate(name_lomba)}</h4><hr class="c-mt10"><div class="table-responsive"><table class="table table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width-150">Nama Tim</th><th class="crud-width-180">Judul</th><th class="crud-width-150">Instansi</th><th class="crud-width-80">Nilai</th><th class="crud-width100">Status</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(lombaGroup, (reg_lomba, index) => {
          var _a, _b, _c;
          _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td>${ssrInterpolate((_a = reg_lomba == null ? void 0 : reg_lomba.team) == null ? void 0 : _a.name_team)}</td><td>${ssrInterpolate((_b = reg_lomba == null ? void 0 : reg_lomba.submission) == null ? void 0 : _b.title)}</td><td>${ssrInterpolate((_c = reg_lomba == null ? void 0 : reg_lomba.team) == null ? void 0 : _c.instansi)}</td><td>${ssrInterpolate(reg_lomba.value_total)}</td><td>${ssrInterpolate(reg_lomba.status_kelulusan)}</td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Panelis/Rangkingjuri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
