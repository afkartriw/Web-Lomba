import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Tabeltim",
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
    unreadCount: {
      type: Object,
      required: true
    },
    settings: {
      type: Object,
      default: () => ({})
    },
    logo1: {
      type: String
    },
    teams: {
      type: Array,
      required: true
    },
    lomba: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const filterStatus = ref("Semua");
    const filteredTeams = computed(() => {
      return props.teams.filter((team) => {
        if (filterStatus.value === "Semua") {
          return true;
        }
        const isVerified = team.status.toLowerCase() === "verified";
        return filterStatus.value === "Verified" ? isVerified : !isVerified;
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="card">`);
      if (__props.lomba) {
        _push(`<div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL LOMBA ${ssrInterpolate(__props.lomba.name_lomba)}</h4><hr class="c-mt10"><button class="btn btn-primary btn-export">Export Excel</button><label class="dropdown-crud">Filter by Status</label><select class="form-select2"><option value="Semua"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Semua") : ssrLooseEqual(filterStatus.value, "Semua")) ? " selected" : ""}>Semua</option><option value="Verified"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Verified") : ssrLooseEqual(filterStatus.value, "Verified")) ? " selected" : ""}>Verified</option><option value="Unverified"${ssrIncludeBooleanAttr(Array.isArray(filterStatus.value) ? ssrLooseContain(filterStatus.value, "Unverified") : ssrLooseEqual(filterStatus.value, "Unverified")) ? " selected" : ""}>Unverified</option></select><br><br><div class="table-responsive"><table id="example" class="table table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width-90">Nama Tim</th><th class="crud-width-100">No WhatsApp</th><th class="crud-width-120">Email</th><th class="crud-width-90">Instansi</th><th class="crud-width-60">Status</th><th class="crud-width-60">Aksi</th></tr></thead><tbody><!--[-->`);
        ssrRenderList(filteredTeams.value, (team, index) => {
          _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td>${ssrInterpolate(team.name_team)}</td><td>${ssrInterpolate(team.phone)}</td><td>${ssrInterpolate(team.email)}</td><td>${ssrInterpolate(team.instansi)}</td><td>${ssrInterpolate(team.status)}</td><td class="btn-crud"><a class="btn btn-secondary"${ssrRenderAttr("href", `/detailtim/${team.id}`)}><i class="bi bi-eye"></i></a></td></tr>`);
        });
        _push(`<!--]--></tbody></table></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Tim/Tabeltim.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
