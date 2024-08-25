import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Petugasrangking",
  __ssrInlineRender: true,
  props: ["name", "username", "reg_lombas", "unreadCount", "settings", "logo1"],
  setup(__props) {
    const { name, username, reg_lombas, settings, logo1, unreadCount } = __props;
    const selectedLombas = ref([]);
    const selectAll = ref(false);
    const filteredLombas = computed(() => {
      return reg_lombas.filter((lomba) => ["terverifikasi", "lolos", "tidak_lolos"].includes(lomba.status_kelulusan)).sort((a, b) => b.value_total - a.value_total);
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div>`);
      });
      _push(`<!--]--><div class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a href="/eventadmin"><div class="parent-icon"><i class="bx bx-home-circle"></i></div><div class="menu-title">Dashboard</div></a></li><li><a href="/partisipanpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-user-circle c-font25"></i></div><div class="menu-title">Partisipan</div></a></li><li><a href="/timpetugas"><div class="parent-icon"><i class="fadeIn animated lni lni-users"></i></div><div class="menu-title">Tim</div></a></li><li><a href="/pesanpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Pesan <span class="alert-count">${ssrInterpolate(__props.unreadCount)}</span></div></a></li><li><a href="/rangkingpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
      _push(ssrRenderComponent(unref(Link), {
        class: "menu-title",
        href: _ctx.route("logout"),
        method: "post",
        as: "button"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Keluar`);
          } else {
            return [
              createTextVNode("Keluar")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL RANKING LOMBA ${ssrInterpolate(__props.reg_lombas.length > 0 ? __props.reg_lombas[0].lomba.name_lomba : "")}</h4><hr class="c-mt10"><a class="btn btn-danger">Tidak lolos</a><a class="btn btn-primary crud-width120">Lolos</a><br><br><div class="table-responsive"><table class="table table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width-150">Nama Tim</th><th class="crud-width-180">Judul</th><th class="crud-width100">Instansi</th><th class="crud-width100">Hasil</th><th class="crud-width-70">Status</th><th class="crud-width-70">Aksi</th><td class="crud-width-40"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectAll.value) ? ssrLooseContain(selectAll.value, null) : selectAll.value) ? " checked" : ""}></td></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredLombas.value, (reg_lomba, index) => {
        var _a, _b, _c;
        _push(`<tr><td>${ssrInterpolate(index + 1)}</td><td>${ssrInterpolate((_a = reg_lomba == null ? void 0 : reg_lomba.team) == null ? void 0 : _a.name_team)}</td><td>${ssrInterpolate((_b = reg_lomba == null ? void 0 : reg_lomba.submission) == null ? void 0 : _b.title)}</td><td>${ssrInterpolate((_c = reg_lomba == null ? void 0 : reg_lomba.team) == null ? void 0 : _c.instansi)}</td><td>${ssrInterpolate(reg_lomba.value_total)}</td><td>${ssrInterpolate(reg_lomba.status_kelulusan)}</td><td class="btn-crud"><a class="btn btn-secondary"${ssrRenderAttr("href", `/detailtimpetugas/${reg_lomba.id}`)}><i class="bi bi-eye"></i></a></td><td><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(selectedLombas.value) ? ssrLooseContain(selectedLombas.value, reg_lomba.id) : selectedLombas.value) ? " checked" : ""}${ssrRenderAttr("value", reg_lomba.id)}></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/EventAdmin/Rangking/Petugasrangking.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
