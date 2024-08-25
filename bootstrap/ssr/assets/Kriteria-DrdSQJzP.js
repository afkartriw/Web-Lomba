import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Kriteria",
  __ssrInlineRender: true,
  props: ["name", "username", "kriterias", "settings", "logo1", "bobots"],
  setup(__props) {
    useForm({});
    $(document).ready(function() {
      $("#kriteriaTable").DataTable();
      $("#bobotTable").DataTable();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="sidebar-header"><div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div>`);
      });
      _push(`<!--]--><ul class="metismenu" id="menu"><li><a${ssrRenderAttr("href", _ctx.route("admin"))}><div class="parent-icon"><i class="bx bx-home-circle"></i></div><div class="menu-title">Dashboard</div></a></li><li><a href="javascript:;" class="has-arrow"><div class="parent-icon"><i class="fadeIn animated bx bx-plus-circle"></i></div><div class="menu-title">Event</div></a><ul><li class="jarak-dropdown"><a${ssrRenderAttr("href", _ctx.route("lomba.index"))}>Lomba</a></li><li class="jarak-dropdown"><a href="/administrator">Administrator</a></li><li class="jarak-dropdown"><a href="/sponsor">Sponsor</a></li><li class="jarak-dropdown"><a href="/berita">Berita</a></li><li class="jarak-dropdown"><a href="/setting">Setting</a></li></ul></li><li><a href="/tim"><div class="parent-icon"><i class="fadeIn animated lni lni-users"></i></div><div class="menu-title">Tim</div></a></li><li><a href="/partisipan"><div class="parent-icon"><i class="fadeIn animated bx bx-user-circle c-font25"></i></div><div class="menu-title">Partisipan</div></a></li><li><a href="/pesan"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Pesan <span class="alert-count">1</span></div></a></li><li><a href="/rangking"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a href="/"><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">Keluar</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL KRITERIA</h4><hr class="c-mt10"><a class="btn btn-success jarak-top-kurang7"${ssrRenderAttr("href", _ctx.route("lomba.index"))}>Lomba</a><a class="btn btn-info jarak-top-kurang7"${ssrRenderAttr("href", _ctx.route("kriteria.create"))}>Tambah Kriteria</a><hr class="c-mt10"><div class="table-responsive"><table id="kriteriaTable" class="table mt-3 table-bordered"><thead class="table-dark"><tr><th class="width-id2">No</th><th class="crud-width-290">Kriteria</th><th class="crud-width60">Aksi</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(__props.kriterias.data, (kriteria, index) => {
        _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td>${ssrInterpolate(kriteria.name_kriteria)}</td><td class="btn-crud"><a class="btn btn-primary"${ssrRenderAttr("href", _ctx.route("kriteria.edit", kriteria.id))}><i class="bi bi-pencil-square"></i></a><button class="btn btn-danger"><i class="bi bi-trash"></i></button></td></tr>`);
      });
      _push(`<!--]--></tbody></table><br></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Kriteria.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
