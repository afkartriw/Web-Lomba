import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Tabelrangking",
  __ssrInlineRender: true,
  props: {
    reg_lombas: {
      type: Array,
      required: true
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    logo1: {
      type: String
    },
    unreadCount: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const filterStatus = ref("Semua");
    const filteredRegLombas = computed(() => {
      return props.reg_lombas.filter((reg_lomba) => {
        if (filterStatus.value === "Semua") {
          return reg_lomba.status_kelulusan.toLowerCase() !== "menunggu";
        }
        const statusLower = reg_lomba.status_kelulusan.toLowerCase();
        if (filterStatus.value === "Lolos") {
          return statusLower === "lolos";
        } else if (filterStatus.value === "Tidak Lolos") {
          return statusLower === "tidak_lolos";
        }
        return false;
      });
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div>`);
      });
      _push(`<!--]--><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a${ssrRenderAttr("href", _ctx.route("admin"))}><div class="parent-icon"><i class="bx bx-home-circle"></i></div><div class="menu-title">Dashboard</div></a></li><li><a href="javascript:;" class="has-arrow"><div class="parent-icon"><i class="fadeIn animated bx bx-plus-circle"></i></div><div class="menu-title">Event</div></a><ul><li class="jarak-dropdown"><a href="/lomba">Lomba</a></li><li class="jarak-dropdown"><a href="/administrator">Administrator</a></li><li class="jarak-dropdown"><a href="/sponsor">Sponsor</a></li><li class="jarak-dropdown"><a href="/berita">Berita</a></li><li class="jarak-dropdown"><a href="/setting">Setting</a></li></ul></li><li><a href="/tim"><div class="parent-icon"><i class="fadeIn animated lni lni-users"></i></div><div class="menu-title">Tim</div></a></li><li><a href="/partisipan"><div class="parent-icon"><i class="fadeIn animated bx bx-user-circle c-font25"></i></div><div class="menu-title">Partisipan</div></a></li><li><a href="/pesan"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Pesan <span class="alert-count">${ssrInterpolate(__props.unreadCount)}</span></div></a></li><li><a href="/rangking"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL RANGKING ${ssrInterpolate(__props.reg_lombas.length > 0 ? __props.reg_lombas[0].lomba.name_lomba : "")}</h4><hr class="c-mt10"><label class="jarak-filterstatus">Filter by Status</label><select class="form-select2"><option value="Semua"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Semua") : ssrLooseEqual(filterStatus.value, "Semua")) ? " selected" : ""}>Semua</option><option value="Lolos"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Lolos") : ssrLooseEqual(filterStatus.value, "Lolos")) ? " selected" : ""}>Lolos</option><option value="Tidak Lolos"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Tidak Lolos") : ssrLooseEqual(filterStatus.value, "Tidak Lolos")) ? " selected" : ""}>Tidak Lolos</option></select><br><br><div class="table-responsive"><table id="example" class="table table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width-150">Nama Tim</th><th class="crud-width-180">Judul</th><th class="crud-width100">File</th><th class="crud-width100">Link</th><th class="crud-width-150">Instansi</th><th class="crud-width100">Total</th><th class="crud-width100">Status</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredRegLombas.value, (reg_lomba, index) => {
        var _a, _b, _c, _d, _e;
        _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td>${ssrInterpolate((_a = reg_lomba == null ? void 0 : reg_lomba.team) == null ? void 0 : _a.name_team)}</td><td>${ssrInterpolate((_b = reg_lomba == null ? void 0 : reg_lomba.submission) == null ? void 0 : _b.title)}</td><td><a${ssrRenderAttr("href", `/submissionshow/${(_c = reg_lomba == null ? void 0 : reg_lomba.submission) == null ? void 0 : _c.id}`)}>Lihat File</a></td><td><a${ssrRenderAttr("href", (_d = reg_lomba == null ? void 0 : reg_lomba.submission) == null ? void 0 : _d.link)} target="_blank">Buka Link</a></td><td>${ssrInterpolate((_e = reg_lomba == null ? void 0 : reg_lomba.team) == null ? void 0 : _e.instansi)}</td><td>${ssrInterpolate(reg_lomba.value_total)}</td><td>${ssrInterpolate(reg_lomba.status_kelulusan)}</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Rangking/Tabelrangking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
