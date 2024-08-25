import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Pesanpetugas",
  __ssrInlineRender: true,
  props: {
    messages: {
      type: Array,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    username: {
      type: String,
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
    const selectedStatus = ref("Semua");
    const filteredMessages = computed(() => {
      if (selectedStatus.value === "Semua") {
        return props.messages;
      }
      return props.messages.filter((message) => message.status === selectedStatus.value.toLowerCase());
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div>`);
      });
      _push(`<!--]--><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a href="/eventadmin"><div class="parent-icon"><i class="bx bx-home-circle"></i></div><div class="menu-title">Dashboard</div></a></li><li><a href="/partisipanpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-user-circle c-font25"></i></div><div class="menu-title">Partisipan</div></a></li><li><a href="/timpetugas"><div class="parent-icon"><i class="fadeIn animated lni lni-users"></i></div><div class="menu-title">Tim</div></a></li><li><a href="/pesanpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Pesan <span class="alert-count">${ssrInterpolate(__props.unreadCount)}</span></div></a></li><li><a href="/rangkingpetugas"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL PESAN</h4><hr class="c-mt10"><label class="jarak-filterstatus">Filter by Status</label><select class="form-select2"><option value="Semua" selected>Semua</option><option value="sudah_dibaca"${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "sudah_dibaca") : ssrLooseEqual(selectedStatus.value, "sudah_dibaca")) ? " selected" : ""}>Sudah Dibaca</option><option value="belum_dibaca"${ssrIncludeBooleanAttr(Array.isArray(selectedStatus.value) ? ssrLooseContain(selectedStatus.value, "belum_dibaca") : ssrLooseEqual(selectedStatus.value, "belum_dibaca")) ? " selected" : ""}>Belum Dibaca</option></select><br><br><div class="table-responsive"><table id="example" class="table table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width-250">Nama</th><th class="crud-width-50">Email</th><th class="crud-width-150">No WhatsApp</th><th class="crud-width-350">Pesan</th><th class="crud-width-80">Status</th><th class="width-id"></th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredMessages.value, (message) => {
        _push(`<tr><td>${ssrInterpolate(message.id)}</td><td>${ssrInterpolate(message.name)}</td><td>${ssrInterpolate(message.email)}</td><td>${ssrInterpolate(message.phone)}</td><td>${ssrInterpolate(message.value)}</td><td>${ssrInterpolate(message.status)}</td><td><input type="checkbox"${ssrIncludeBooleanAttr(message.status === "sudah_dibaca") ? " checked" : ""}${ssrIncludeBooleanAttr(message.status === "sudah_dibaca") ? " disabled" : ""}></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/EventAdmin/Pesanpetugas.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
