import { ref, computed, watch, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { useForm, Link } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Daftarlomba",
  __ssrInlineRender: true,
  props: ["userData", "users", "team", "submissions", "lombas", "members", "settings", "logo1", "notifCount"],
  setup(__props) {
    const { userData, users, team, submissions, lombas, members, settings, logo1, notifCount } = __props;
    useForm({
      name: userData.name,
      username: userData.username,
      email: userData.email,
      instansi: userData.instansi,
      nik: userData.nik,
      photo: null
    });
    ref(false);
    const searchQuery = ref("");
    const searchResults = ref(users);
    computed(() => {
      if (!searchQuery.value) {
        return [];
      }
      return searchResults.value.filter(
        (user) => user.name.toLowerCase().includes(searchQuery.value.toLowerCase()) || user.email.toLowerCase().includes(searchQuery.value.toLowerCase())
      );
    });
    watch(searchQuery, () => {
    });
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
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
      _push(`</div></a></li><li><li><a href="/reportpeserta"><div class="parent-icon"><i class="fadeIn animated bx bx-comment-detail"></i></div><div class="menu-title">Report <span></span></div></a></li><a href="/"><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      if (__props.team) {
        _push(`<div class="card-body"><h4 class="mb-0 jarak-teks1">DAFTAR LOMBA </h4><div class="card"><h5 class="p-3">TIM LOMBA ${ssrInterpolate((_b = (_a = __props.team) == null ? void 0 : _a.lomba) == null ? void 0 : _b.name_lomba)}</h5><hr class="garis"><div class="row">`);
        if (__props.team) {
          _push(`<div class="col-md-2 jarak-daftar-lomba"><label class="c-mb5-black"><b>NAMA TIM</b></label><div class="data-tim">${ssrInterpolate(__props.team.name_team)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-2 jarak-daftar-lomba"><label class="c-mb5-black"><b>INSTANSI</b></label><div class="data-tim">${ssrInterpolate(__props.team.instansi)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-2 jarak-daftar-lomba"><label class="c-mb5-black"><b>EMAIL</b></label><div class="data-tim">${ssrInterpolate(__props.team.email)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-2 jarak-daftar-lomba"><label class="c-mb5-black"><b>NO WHATSAPP</b></label><div class="data-tim">${ssrInterpolate(__props.team.phone)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.team) {
          _push(`<div class="col-md-2 jarak-daftar-lomba"><label class="c-mb5-black"><b>PEMBAYARAN</b></label><div class="data-tim c-mb-70"><a${ssrRenderAttr("href", `/datatimshow/${__props.team.id}`)}>Lihat Bukti</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<a${ssrRenderAttr("href", `/datatim/${__props.team.id}`)} class="btn btn-primary radius-5 isi-data">Isi Data</a></div></div><div class="card"><h5 class="p-3">ANGGOTA TIM</h5><div class="row row-cards jarak-data-peserta"><!--[-->`);
        ssrRenderList(__props.members, (member) => {
          _push(`<div class="col-md-6 col-lg-3 crud-max-width260"><div class="card"><div class="card-header btn-crud"><h6><b>${ssrInterpolate(member.role)}</b></h6></div><div class="card-body p-4 text-center posisi-mb23"><div class="btn-crud"><img${ssrRenderAttr("src", member.photo ? `/storage/${member.photo}` : "/bootstrap/images/default2.png")} height="120" alt="..." class="img-fluidc rounded"></div><br><h6><b>${ssrInterpolate(member.name)}</b></h6><br><div class="posisi-mb7">${ssrInterpolate(member.nik)}</div><div class="text-muted">${ssrInterpolate(member.instansi)}</div></div></div></div>`);
        });
        _push(`<!--]--><br><br><a class="btn btn-primary radius-5 isi-data2"${ssrRenderAttr("href", `/tambahanggota/${__props.team.id}`)}>Isi Anggota</a></div><br><br> <br><br></div><div class="card"><h5 class="p-3">PENGUMPULAN KARYA</h5><div class="card-body p-4 text-center"><div class="row">`);
        if (__props.submissions) {
          _push(`<div class="col-md-4 text-left"><label class="jarak-teks05"><b>JUDUL</b></label><div class="data-tim">${ssrInterpolate(__props.submissions.title)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-3 text-left"><label class="jarak-teks05"><b>DOKUMEN</b></label><div class="data-tim"><a${ssrRenderAttr("href", `/submissionsurat/${__props.submissions.id}`)}>Lihat Dokumen</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-3 text-left"><label class="jarak-teks05"><b>FILE</b></label><div class="data-tim"><a${ssrRenderAttr("href", `/submissionshow/${__props.submissions.id}`)}>Lihat File</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (__props.submissions) {
          _push(`<div class="col-md-2 text-left"><label class="jarak-teks05"><b>LINK</b></label><div class="data-tim c-mb-70"><a${ssrRenderAttr("href", __props.submissions.link)} target="_blank">Buka Link</a></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><a${ssrRenderAttr("href", `/submission/${__props.team.id}`)} class="btn btn-primary radius-5 isi-data jarak-isi-data">Isi Data</a></div>`);
        if (__props.submissions) {
          _push(`<div class="text-left"><label class="jarak-teks05"><b>DESKRIPSI</b></label><div class="c-mb20 rata-tengah">${ssrInterpolate(__props.submissions.description)}</div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div></div><div class="btn-dl"><button class="btn btn-primary radius-5 lebar-btn">Submit</button></div></div>`);
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftarlomba.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
