import { computed, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Profilpeserta",
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
    settings: {
      type: Object,
      // Menggunakan "type" untuk menentukan tipe data props
      default: () => ({})
      // Menggunakan "default" jika props tidak diberikan
    },
    logo1: {
      type: String
      // Menentukan tipe data logo sebagai String
    }
  },
  setup(__props) {
    const props = __props;
    const form = useForm({
      name: props.userData.name,
      username: props.userData.username,
      email: props.userData.email,
      instansi: props.userData.instansi,
      nik: props.userData.nik,
      phone: props.userData.phone,
      photo: null
    });
    computed(() => form.nik.length === 16);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div><a href="/"><img id="logo-img"${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} class="lg2"></a></div>`);
      });
      _push(`<!--]--><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a href="/dashboard"><div class="parent-icon"><i class="bx bx-category"></i></div><div class="menu-title">Overview</div></a></li><li><a href="/profilpeserta/create"><div class="parent-icon"><i class="bx bx-user-circle"></i></div><div class="menu-title">Profil</div></a></li><li><a href="/notifikasipeserta"><div class="parent-icon"><i class="bx bx-user-circle"></i></div><div class="menu-title">Notifikasi `);
      if (__props.notifCount) {
        _push(`<span class="alert-count">${ssrInterpolate(__props.notifCount)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></a></li><li><a href="/reportpeserta"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Report <span></span></div></a></li><li><a href="/"><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(props.userData.name)}</p><p class="user-role">${ssrInterpolate(props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="container"><div class="main-body"><form><div class="row"><div class="col-lg-4"><div class="card"><div class="card-body"><div class="d-flex flex-column align-items-center text-center"><div class="ukuran-foto"><img${ssrRenderAttr("src", props.userData.photo ? `/storage/${props.userData.photo}` : "/bootstrap/images/default.jpg")} alt="Profile" class="rounded-circle p-1 bg-primary" width="190" height="150"></div><input type="file" class="form-control form-control-sm btn-profil2 img-profil"></div><div class="c-mtk"><p class="keterangan-foto f-italic">Max file size: 2MB</p><p class="keterangan-foto f-italic">Format: .jpg, .png, .jpeg</p></div></div></div></div><div class="col-lg-8"><div class="card"><div class="card-body label-bawah"><div class="row mb-3"><div class="col-sm-3"><h6 class="mb-0 profil-font15">Nama Lengkap</h6></div><div class="col-sm-9 text-secondary"><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).name)}></div></div><div class="row mb-3"><div class="col-sm-3"><h6 class="mb-0">Username</h6></div><div class="col-sm-9 text-secondary"><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).username)} readonly></div></div><div class="row mb-3"><div class="col-sm-3"><h6 class="mb-0">Email</h6></div><div class="col-sm-9 text-secondary"><input type="email" class="form-control"${ssrRenderAttr("value", unref(form).email)} readonly></div></div><div class="row mb-3"><div class="col-sm-3"><h6 class="mb-0">NIK</h6></div><div class="col-sm-9 text-secondary"><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).nik)}></div></div><div class="row mb-3"><div class="col-sm-3"><h6 class="mb-0">Instansi</h6></div><div class="col-sm-9 text-secondary"><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).instansi)}></div></div><div class="row mb-3"><div class="col-sm-3"><h6 class="mb-0">Kontak</h6></div><div class="col-sm-9 text-secondary"><input type="text" class="form-control"${ssrRenderAttr("value", unref(form).phone)}></div></div><div class="row mb-3"><div class="col-sm-3"></div><div class="col-sm-9 text-secondary"><button type="submit" class="btn btn-primary w-100">Perbarui</button></div></div></div></div></div></div></form></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Profilpeserta.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
