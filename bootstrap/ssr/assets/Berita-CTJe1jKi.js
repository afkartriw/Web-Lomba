import { Link, router } from "@inertiajs/vue3";
import { onMounted, resolveComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import Swal from "sweetalert2";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "./_plugin-vue_export-helper-1tPrXgE0.js";
const _sfc_main = {
  components: {
    Link
  },
  props: {
    beritas: Array,
    settings: {
      type: Array,
      // Ubah ke array untuk v-for loop
      default: () => []
    },
    logo1: {
      type: String,
      default: ""
    },
    unreadCount: {
      type: Number,
      required: true
    }
  },
  methods: {
    editberita(id) {
      router.get("/berita/" + id + "/edit-berita");
    },
    detailberita(id) {
      router.get("/berita/" + id + "/detail-berita");
    },
    confirmDelete(id) {
      Swal.fire({
        title: "Apakah anda yakin ingin menghapus?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, hapus!",
        cancelButtonText: "Batal"
      }).then((result) => {
        if (result.isConfirmed) {
          this.destroy(id);
        }
      });
    },
    destroy(id) {
      router.delete("/berita/" + id);
    }
  },
  mounted() {
    onMounted(() => {
      $(document).ready(function() {
        $("#example").DataTable();
      });
    });
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Link = resolveComponent("Link");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><!--[-->`);
  ssrRenderList($props.settings, (setting) => {
    _push(`<div class="sidebar-header"><div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div>`);
  });
  _push(`<!--]--><ul class="metismenu" id="menu"><li><a href="/superadmin"><div class="parent-icon"><i class="bx bx-home-circle"></i></div><div class="menu-title">Dashboard</div></a></li><li><a href="javascript:;" class="has-arrow"><div class="parent-icon"><i class="fadeIn animated bx bx-plus-circle"></i></div><div class="menu-title">Event</div></a><ul><li class="jarak-dropdown"><a href="/lomba">Lomba</a></li><li class="jarak-dropdown"><a href="/administrator">Administrator</a></li><li class="jarak-dropdown"><a href="/sponsor">Sponsor</a></li><li class="jarak-dropdown"><a href="/berita">Berita</a></li><li class="jarak-dropdown"><a href="/setting">Setting</a></li></ul></li><li><a href="/tim"><div class="parent-icon"><i class="fadeIn animated lni lni-users"></i></div><div class="menu-title">Tim</div></a></li><li><a href="/partisipan"><div class="parent-icon"><i class="fadeIn animated bx bx-street-view"></i></div><div class="menu-title">Partisipan</div></a></li><li><a href="/pesan"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Pesan <span class="alert-count">${ssrInterpolate($props.unreadCount)}</span></div></a></li><li><a href="/rangking"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
  _push(ssrRenderComponent(_component_Link, {
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
  _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL BERITA</h4><hr class="c-mt10"><button class="btn btn-success jarak-top-kurang7" onclick="window.location.href=&#39;/berita/tambah-berita&#39;">Tambah Berita</button><hr class="c-mt10"><div class="table-responsive"><table id="example" class="table mt-3 table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width100">Judul</th><th class="crud-width-150">Deskripsi Awal</th><th class="crud-width-40">Penerbit</th><th class="crud-custom">Tanggal Upload</th><th class="crud-width130">Aksi</th></tr></thead><tbody><!--[-->`);
  ssrRenderList($props.beritas, (berita) => {
    _push(`<tr><td>${ssrInterpolate(berita.id)}</td><td>${ssrInterpolate(berita.judul)}</td><td>${ssrInterpolate(berita.deskripsi_awal)}</td><td>${ssrInterpolate(berita.penerbit)}</td><td>${ssrInterpolate(berita.tanggal_upload)}</td><td class="btn-crud"><button class="btn btn-secondary"><i class="bi bi-eye"></i></button><button class="btn btn-primary"><i class="bi bi-pencil-square"></i></button><button class="btn btn-danger"><i class="bi bi-trash"></i></button></td></tr>`);
  });
  _push(`<!--]--></tbody></table></div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Berita.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Berita = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  Berita as default
};
