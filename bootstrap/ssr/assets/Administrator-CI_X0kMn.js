import { ref, computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
import "sweetalert2";
$(document).ready(function() {
  $("#example").DataTable();
});
const _sfc_main = {
  __name: "Administrator",
  __ssrInlineRender: true,
  props: ["name", "username", "users", "settings", "logo1", "unreadCount"],
  setup(__props) {
    const { name, username, users, settings, logo1, unreadCount } = __props;
    const selectedRole = ref("all");
    const filteredUsers = computed(() => {
      if (selectedRole.value === "all") {
        return users;
      } else {
        return users.filter((user) => user.role === parseInt(selectedRole.value));
      }
    });
    const roleNames = {
      1: "Admin",
      2: "Petugas",
      3: "User",
      4: "Juri"
    };
    const getRoleName = (role) => {
      return roleNames[role] || "Unknown";
    };
    computed(() => {
      return filteredUsers.value.every((user) => user.status === "aktif");
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="sidebar-header"><div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div>`);
      });
      _push(`<!--]--><ul class="metismenu" id="menu"><li><a href="/superadmin"><div class="parent-icon"><i class="bx bx-home-circle"></i></div><div class="menu-title">Dashboard</div></a></li><li><a href="javascript:;" class="has-arrow"><div class="parent-icon"><i class="fadeIn animated bx bx-plus-circle"></i></div><div class="menu-title">Event</div></a><ul><li class="jarak-dropdown"><a href="/lomba">Lomba</a></li><li class="jarak-dropdown"><a href="/administrator">Administrator</a></li><li class="jarak-dropdown"><a href="/sponsor">Sponsor</a></li><li class="jarak-dropdown"><a href="/berita">Berita</a></li><li class="jarak-dropdown"><a href="/setting">Setting</a></li></ul></li><li><a href="/tim"><div class="parent-icon"><i class="fadeIn animated lni lni-users"></i></div><div class="menu-title">Tim</div></a></li><li><a href="/partisipan"><div class="parent-icon"><i class="fadeIn animated bx bx-street-view"></i></div><div class="menu-title">Partisipan</div></a></li><li><a href="/pesan"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Pesan <span class="alert-count">${ssrInterpolate(__props.unreadCount)}</span></div></a></li><li><a href="/rangking"><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li><li><a><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="ps-3"><nav aria-label="breadcrumb"><ol class="breadcrumb mb-0 p-0"><li class="breadcrumb-item"></li></ol></nav></div><div class="card"><div class="card-body"><h4 class="mb-0 jarak-top-kurang5">TABEL ADMINISTRATOR</h4><hr class="c-mt10"><a class="btn btn-success jarak-top-kurang7"${ssrRenderAttr("href", _ctx.route("administrator.create"))}> Tambah Administrator </a><hr class="c-mt10"><div class="table-responsive"><label class="dropdown-crud">Tampilkan Role</label><select class="form-select2"><option value="all" selected>Semua</option><option value="1"${ssrIncludeBooleanAttr(Array.isArray(selectedRole.value) ? ssrLooseContain(selectedRole.value, "1") : ssrLooseEqual(selectedRole.value, "1")) ? " selected" : ""}>Admin</option><option value="4"${ssrIncludeBooleanAttr(Array.isArray(selectedRole.value) ? ssrLooseContain(selectedRole.value, "4") : ssrLooseEqual(selectedRole.value, "4")) ? " selected" : ""}>Juri</option><option value="2"${ssrIncludeBooleanAttr(Array.isArray(selectedRole.value) ? ssrLooseContain(selectedRole.value, "2") : ssrLooseEqual(selectedRole.value, "2")) ? " selected" : ""}>Petugas</option></select><br><br><table id="example" class="table table-bordered"><thead class="table-dark"><tr><th class="width-id">ID</th><th class="crud-width-90">Nama</th><th class="crud-width-70">Username</th><th class="crud-width-110">Email</th><th class="crud-width-50">Role</th><th class="crud-width-50">Aksi</th><th class="crud-width-20">Status</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(filteredUsers.value, (user) => {
        _push(`<tr><td>${ssrInterpolate(user.id)}</td><td>${ssrInterpolate(user.name)}</td><td>${ssrInterpolate(user.username)}</td><td>${ssrInterpolate(user.email)}</td><td>${ssrInterpolate(getRoleName(user.role))}</td><td class="btn-crud"><a class="btn btn-secondary"${ssrRenderAttr("href", _ctx.route("administrator.show", user.id))}><i class="bi bi-eye"></i></a></td><td><input type="checkbox"${ssrIncludeBooleanAttr(user.status === "aktif") ? " checked" : ""}></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Admin/Administrator.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
