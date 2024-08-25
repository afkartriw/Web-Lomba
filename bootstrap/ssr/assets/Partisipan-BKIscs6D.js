import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Partisipan",
  __ssrInlineRender: true,
  props: {
    partisipans: {
      type: Object
    },
    settings: {
      type: Object,
      // Menggunakan "type" untuk menentukan tipe data props
      default: () => ({})
      // Menggunakan "default" jika props tidak diberikan
    },
    logo1: {
      type: String
      // Menentukan tipe data logo sebagai String
    },
    unreadCount: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const filterStatus = ref("Semua");
    const props = __props;
    const filteredPartisipans = computed(() => {
      if (filterStatus.value === "Semua") {
        return props.partisipans.data;
      }
      return props.partisipans.data.filter((partisipan) => {
        const isVerified = partisipan.email_verification_status.toLowerCase() === "verified";
        return filterStatus.value === "Verified" ? isVerified : !isVerified;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="sidebar-header"><div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div>`);
      });
      _push(`<!--]--><ul class="metismenu" id="menu"><li><a${ssrRenderAttr("href", _ctx.route("admin"))}><div class="parent-icon"><i class="bx bx-home-circle"></i></div><div class="menu-title">Dashboard</div></a></li><li><a href="javascript:;" class="has-arrow"><div class="parent-icon"><i class="fadeIn animated bx bx-plus-circle"></i></div><div class="menu-title">Event</div></a><ul><li class="jarak-dropdown"><a href="/lomba">Lomba</a></li><li class="jarak-dropdown"><a href="/administrator">Administrator</a></li><li class="jarak-dropdown"><a href="/sponsor">Sponsor</a></li><li class="jarak-dropdown"><a href="/berita">Berita</a></li><li class="jarak-dropdown"><a href="/setting">Setting</a></li></ul></li><li><a href="/tim"><div class="parent-icon"><i class="fadeIn animated lni lni-users"></i></div><div class="menu-title">Tim</div></a></li><li><a href="/partisipan"><div class="parent-icon"><i class="fadeIn animated bx bx-user-circle c-font25"></i></div><div class="menu-title">Partisipan</div></a></li><li><a href="/pesan"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Pesan <span class="alert-count">${ssrInterpolate(__props.unreadCount)}</span></div></a></li><li><a href="/rangking"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL PARTISIPAN</h4><hr class="c-mt10"><a${ssrRenderAttr("href", _ctx.route("export.partisipan"))} class="btn btn-primary btn-float-right">Export Excel</a><label class="jarak-filterstatus">Filter by Status</label><select class="form-select2"><option selected>Semua</option><option${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, null) : ssrLooseEqual(filterStatus.value, null)) ? " selected" : ""}>Verified</option><option${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, null) : ssrLooseEqual(filterStatus.value, null)) ? " selected" : ""}>Unverified</option></select><br><br><div class="table-responsive"><table id="example" class="table table-bordered"><thead class="table-dark"><tr><th>ID</th><th>Nama</th><th>Username</th><th>Instansi</th><th>Email</th><th>Status</th><th class="crud-width100">Tanggal</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredPartisipans.value, (partisipan) => {
        _push(`<tr><td>${ssrInterpolate(partisipan.id)}</td><td>${ssrInterpolate(partisipan.name)}</td><td>${ssrInterpolate(partisipan.username)}</td><td>${ssrInterpolate(partisipan.instansi)}</td><td>${ssrInterpolate(partisipan.email)}</td><td>${ssrInterpolate(partisipan.email_verification_status)}</td><td>${ssrInterpolate(partisipan.created_at)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Partisipan.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
