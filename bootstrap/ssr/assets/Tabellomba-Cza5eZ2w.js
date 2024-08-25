import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Tabellomba",
  __ssrInlineRender: true,
  props: {
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    },
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
    }
  },
  setup(__props) {
    const props = __props;
    const filterStatus = ref("Semua");
    const filteredRegLombas = computed(() => {
      return props.reg_lombas.filter((reg_lomba) => {
        const isStatusValid = reg_lomba.status_kelulusan !== "menunggu" && reg_lomba.status_kelulusan !== "tidak_lolos";
        const isTeamVerified = reg_lomba.team.status !== "unverified";
        if (!isStatusValid || !isTeamVerified) {
          return false;
        }
        if (filterStatus.value === "Semua") {
          return true;
        }
        const isRated = reg_lomba.status.toLowerCase() === "sudah_dinilai";
        return filterStatus.value === "Sudah Dinilai" ? isRated : !isRated;
      });
    });
    const getRegEditTeamUrl = (regLombaId, lombaId) => {
      return route("value.edit", { reg_lomba_id: regLombaId, lomba_id: lombaId });
    };
    const getRegLombaTeamUrl = (regLombaId, teamId) => {
      return route("value.show", { reg_lomba_id: regLombaId, team_id: teamId });
    };
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL KARYA</h4><hr class="c-mt10"><label class="jarak-filterstatus">Filter by Status</label><select class="form-select2"><option value="Semua"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Semua") : ssrLooseEqual(filterStatus.value, "Semua")) ? " selected" : ""}>Semua</option><option value="Sudah Dinilai"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Sudah Dinilai") : ssrLooseEqual(filterStatus.value, "Sudah Dinilai")) ? " selected" : ""}>Sudah Dinilai</option><option value="Belum Dinilai"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Belum Dinilai") : ssrLooseEqual(filterStatus.value, "Belum Dinilai")) ? " selected" : ""}>Belum Dinilai</option></select><br><br><div class="table-responsive"><table id="example" class="table table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width120">Nama Tim</th><th class="crud-width-150">Judul</th><th class="crud-width-50">Status</th><th class="crud-width-90">Aksi</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredRegLombas.value, (reg_lomba, index) => {
        var _a, _b;
        _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td>${ssrInterpolate((_a = reg_lomba == null ? void 0 : reg_lomba.team) == null ? void 0 : _a.name_team)}</td><td>${ssrInterpolate((_b = reg_lomba == null ? void 0 : reg_lomba.submission) == null ? void 0 : _b.title)}</td><td>${ssrInterpolate(reg_lomba == null ? void 0 : reg_lomba.status)}</td><td class="btn-crud"><a class="btn btn-secondary"${ssrRenderAttr("href", getRegLombaTeamUrl(reg_lomba.id, reg_lomba.team.id))}><i class="bi bi-eye"></i></a>`);
        if (reg_lomba.status.toLowerCase() === "sudah_dinilai") {
          _push(`<a class="btn btn-primary"${ssrRenderAttr("href", getRegEditTeamUrl(reg_lomba.id, reg_lomba.lomba.id))}><i class="bi bi-pencil-square"></i></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Panelis/Lomba/Tabellomba.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
