import { ref, onMounted, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Reportpeserta",
  __ssrInlineRender: true,
  props: {
    userData: {
      type: Object,
      required: true
    },
    notifCount: {
      type: Number,
      default: null
    },
    reg_lombas: {
      type: Array,
      required: true
    },
    settings: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const getRegLombaTeamUrl = (regLombaId, teamId, lombaId) => {
      return route("detail.riport", { reg_lomba_id: regLombaId, team_id: teamId, lomba_id: lombaId });
    };
    const notifCount = ref(props.notifCount);
    const updateDots = (element) => {
      let dots = "";
      setInterval(() => {
        dots = dots.length < 3 ? dots + "." : "";
        element.textContent = `SEDANG DIPROSES${dots}`;
      }, 500);
    };
    onMounted(() => {
      const elements = document.querySelectorAll(".keterangan1");
      elements.forEach((el) => updateDots(el));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div>`);
      });
      _push(`<!--]--><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a href="/dashboard"><div class="parent-icon"><i class="bx bx-category"></i></div><div class="menu-title">Overview</div></a></li><li><a href="/profilpeserta/create"><div class="parent-icon"><i class="bx bx-user-circle"></i></div><div class="menu-title">Profil</div></a></li><li><a href="/notifikasipeserta"><div class="parent-icon"><i class="bx bx-user-circle"></i></div><div class="menu-title">Notifikasi `);
      if (notifCount.value) {
        _push(`<span class="alert-count">${ssrInterpolate(notifCount.value)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></a></li><li><a href="/reportpeserta"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Report <span></span></div></a></li><li><a><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><!--[-->`);
      ssrRenderList(__props.reg_lombas, (reg_lomba) => {
        var _a;
        _push(`<div class="card card-height200"><div class="card-body">`);
        if (reg_lomba.status_kelulusan === "menunggu") {
          _push(`<label class="keterangan1 jarak-bottom-kurang20">SEDANG DIPROSES</label>`);
        } else {
          _push(`<!---->`);
        }
        if (reg_lomba.status_kelulusan === "terverifikasi") {
          _push(`<label class="keterangan2 jarak-bottom-kurang20">TERVERIFIKASI</label>`);
        } else {
          _push(`<!---->`);
        }
        if (reg_lomba.status_kelulusan === "tidak_lolos") {
          _push(`<label class="keterangan3 jarak-bottom-kurang20">TIDAK LOLOS</label>`);
        } else {
          _push(`<!---->`);
        }
        if (reg_lomba.status_kelulusan === "lolos") {
          _push(`<label class="keterangan4 jarak-bottom-kurang20">LOLOS</label>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<br><br><div class="row"><div class="label-left"><h5 class="judul-report"><b>${ssrInterpolate((_a = reg_lomba == null ? void 0 : reg_lomba.submission) == null ? void 0 : _a.title)}</b></h5><!--[-->`);
        ssrRenderList(__props.settings, (setting) => {
          var _a2;
          _push(`<div><div class="judul-lomba-index"> Lomba ${ssrInterpolate((_a2 = reg_lomba == null ? void 0 : reg_lomba.lomba) == null ? void 0 : _a2.name_lomba)} <br> ${ssrInterpolate(setting.name)}</div></div>`);
        });
        _push(`<!--]--><div class="d-flex justify-content-end posisi-mb7 cnew">`);
        if (reg_lomba.status_kelulusan === "menunggu" && reg_lomba.team.status === "verified") {
          _push(`<button class="btn-silver crud-width150"><i class="bi bi-download icon-dow"></i>Download </button>`);
        } else if (reg_lomba.status_kelulusan !== "menunggu" && reg_lomba.team.status === "verified") {
          _push(`<a class="btn btn-success crud-width150"><i class="bi bi-download icon-dow"></i>Download </a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div><div class="d-flex justify-content-end"><a class="btn btn-primary crud-width-150"${ssrRenderAttr("href", getRegLombaTeamUrl(reg_lomba.id, reg_lomba.team.id, reg_lomba.lomba.id))}><i class="bi bi-eye icon-eye"></i>Detail </a></div></div></div></div></div>`);
      });
      _push(`<!--]--></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Reportpeserta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
