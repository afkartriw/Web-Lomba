import { ref, computed, watch, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderStyle, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import { useForm } from "@inertiajs/vue3";
import "sweetalert2";
const _sfc_main = {
  __name: "Showmember",
  __ssrInlineRender: true,
  props: ["userData", "users", "team", "settings", "logo1"],
  setup(__props) {
    const { userData, users, team, settings, logo1 } = __props;
    useForm({
      name: userData.name,
      username: userData.username,
      email: userData.email,
      instansi: userData.instansi,
      nik: userData.nik,
      photo: null
    });
    const isPopupVisible = ref(false);
    const searchQuery = ref("");
    const searchResults = ref(users);
    const teamMembers = ref([
      {
        id: userData.id,
        // Pastikan field `id` termasuk
        role: "Ketua",
        name: userData.name,
        nik: userData.nik,
        instansi: userData.instansi,
        photo: userData.photo
      }
    ]);
    const filteredUsers = computed(() => {
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><header><div class="c-topbar"><nav class="navbar navbar-expand"><div class="navbar-tambah"><!--[-->`);
      ssrRenderList(__props.settings, (setting) => {
        _push(`<div class="navbar-left"><a href="/"><img${ssrRenderAttr("src", setting.logo1 ? `/storage/${setting.logo1}` : "/bootstrap/images/logo1default.jpg")} style="${ssrRenderStyle({ "width": "100px", "margin-left": "-15px" })}"></a></div>`);
      });
      _push(`<!--]--></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div></ul></div></nav></div></header><div class="page-wrapper-new"><div class="page-content"><div class="card"><h5 class="p-3">ANGGOTA TIM</h5><div class="row row-cards jarak-data-peserta"><!--[-->`);
      ssrRenderList(teamMembers.value, (member) => {
        _push(`<div class="col-md-6 col-lg-3 crud-max-width260"><div class="card"><div class="card-header btn-crud"><h6><b>${ssrInterpolate(member.role)}</b></h6></div><div class="card-body p-4 text-center posisi-mb23"><div class="btn-crud"><img${ssrRenderAttr("src", member.photo ? `/storage/${member.photo}` : "/bootstrap/images/default2.png")} height="120" alt="..." class="img-fluidc rounded"></div><br><h6><b>${ssrInterpolate(member.name)}</b></h6><br><div class="posisi-mb7">${ssrInterpolate(member.nik)}</div><div class="text-muted">${ssrInterpolate(member.instansi)}</div></div></div></div>`);
      });
      _push(`<!--]--><div class="col-md-6 col-lg-3 crud-max-width260"><div class="card"><div class="card-header btn-crud"><br><h6><b></b></h6></div><div class="card-body p-4 text-center posisi-mb23"><button class="btn-close posisi-close" aria-label="Close"> × </button><div class="btn-crud"><button class="btn btn-white btn-putih"> + </button></div></div></div></div></div><div class="btn-posisi"><button class="btn btn-danger button-left margin-afkar">Batal</button><button class="btn btn-primary button-right">Simpan</button></div></div>`);
      if (isPopupVisible.value) {
        _push(`<div class="popup"><div class="popup-content"><span class="close">×</span><h5>Input Anggota Tim</h5><hr><div class="position-relative"><input type="text" class="form-control ps-5" placeholder="Search by name"${ssrRenderAttr("value", searchQuery.value)}><span class="position-absolute top-50 product-show-edit translate-middle-y"><i class="bx bx-search"></i></span></div><div class="overflow-auto"><ul class="search-results"><!--[-->`);
        ssrRenderList(filteredUsers.value, (user) => {
          _push(`<li class="${ssrRenderClass([{ "selected": user.selected }, "user-item"])}"><div class="user-info csearch">${ssrInterpolate(user.name)} <br> (${ssrInterpolate(user.email)}) </div></li>`);
        });
        _push(`<!--]--></ul></div><div class="border-top btn-crud pt-3"><button class="btn-success btn btn-block"> Tambah anggota </button></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/User/Daftar/Showmember.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
