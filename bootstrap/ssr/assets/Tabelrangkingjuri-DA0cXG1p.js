import { mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Tabelrangkingjuri",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><div><a href="/"><img id="logo-img" src="/bootstrap/images/lg.png" class="lg2"></a></div><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a href="/lombajuri"><div class="parent-icon"><i class="bx bx-award"></i></div><div class="menu-title">Lomba</div></a></li><li><a href="/rangkingjuri"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a href="/"><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL PESERTA</h4><hr class="c-mt10"><label class="jarak-filterstatus">Filter by Status</label><select class="form-select2"><option selected>Semua</option><option>Tidak Lolos</option><option>Lolos</option></select><br><br><div class="table-responsive"><table id="example" class="table table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width-150">Nama Tim</th><th class="crud-width-180">Judul</th><th class="crud-width100">File</th><th class="crud-width100">Link</th><th class="crud-width-150">Instansi</th><th class="crud-width-80">Nilai</th><th class="crud-width100">Status</th></tr></thead><tbody><tr><td>1</td><td>Tim Design</td><td>Platform Pendidikan Interaktif</td><td></td><td></td><td>Universitas</td><td></td><td>Tidak Lolos</td></tr></tbody></table></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Panelis/Rangking/Tabelrangkingjuri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
