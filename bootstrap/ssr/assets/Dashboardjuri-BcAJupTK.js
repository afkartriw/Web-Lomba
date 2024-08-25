import { ref, onMounted, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Link } from "@inertiajs/vue3";
const _sfc_main = {
  __name: "Dashboardjuri",
  __ssrInlineRender: true,
  setup(__props) {
    const unreadCount = ref(0);
    const allCount = ref(0);
    const allParticipants = ref(0);
    ref(0);
    onMounted(async () => {
      try {
        const response = await axios.get("/api/unread-messages");
        unreadCount.value = response.data.unreadCount;
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await axios.get("/api/all-participants");
        allParticipants.value = response.data.allParticipants;
      } catch (error) {
        console.error(error);
      }
      try {
        const response = await axios.get("/api/all-messages");
        allCount.value = response.data.allCount;
      } catch (error) {
        console.error(error);
      }
    });
    document.addEventListener("DOMContentLoaded", function() {
      window.ApexCharts && new ApexCharts(document.getElementById("bi-weekly-visit"), {
        chart: {
          type: "bar",
          fontFamily: "inherit",
          height: 240,
          parentHeightOffset: 0,
          toolbar: {
            show: false
          },
          animations: {
            enabled: false
          },
          stacked: true
        },
        plotOptions: {
          bar: {
            columnWidth: "60%"
          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 1
        },
        series: [{
          name: "Jumlah Kunjungan",
          data: [500, 200, 820, 500, 1e3, 400, 500, 223, 125, 89, 260, 140]
        }],
        tooltip: {
          theme: "dark"
        },
        grid: {
          padding: {
            top: -20,
            right: 0,
            left: -4,
            bottom: -4
          },
          strokeDashArray: 4
        },
        xaxis: {
          labels: {
            padding: 0
          },
          tooltip: {
            enabled: false
          },
          axisBorder: {
            show: false
          },
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        },
        yaxis: {
          labels: {
            padding: 4
          }
        }
      }).render();
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "wrapper" }, _attrs))}><div class="sidebar-wrapper" data-simplebar="true"><div class="sidebar-header"><div><a href="/"><img id="logo-img" src="/bootstrap/images/lg.png" class="lg2"></a></div><div id="menu-toggle" class="toggle-icon ms-auto"><i class="fadeIn animated bx bx-menu"></i></div></div><ul class="metismenu" id="menu"><li><a href="/lombajuri"><div class="parent-icon"><i class="bx bx-award"></i></div><div class="menu-title">Lomba</div></a></li><!--[-->`);
      ssrRenderList(_ctx.lombas, (lomba) => {
        _push(`<li><a${ssrRenderAttr("href", `/rangkingjuri/${lomba.id}`)}><div class="parent-icon"><i class="fadeIn animated bx bx-trophy"></i></div><div class="menu-title">Rangking</div></a></li>`);
      });
      _push(`<!--]--><li><a href="/"><div class="parent-icon"><i class="fadeIn animated bx bx-log-out"></i></div><div class="menu-title">`);
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
      _push(`</div></a></li></ul></div><header><div class="topbar d-flex align-items-center"><nav class="navbar navbar-expand"><div class="mobile-toggle-menu"><i class="bx bx-menu"></i></div><div class="search-bar flex-grow-1"></div><div class="top-menu ms-auto"><ul class="navbar-nav align-items-center"><div class="user-info ps-3"><p class="user-name mb-0">${ssrInterpolate(_ctx.$page.props.userData.name)}</p><p class="user-role">${ssrInterpolate(_ctx.$page.props.userData.username)}</p></div><div class="parent-icon posisi-icon"><i class="bx bx-user-circle c-font48"></i></div><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-notifications-list"></div></div></li><li class="nav-item dropdown dropdown-large"><div class="dropdown-menu dropdown-menu-end"><div class="header-message-list"></div></div></li></ul></div></nav></div></header><div class="page-wrapper"><div class="page-content"><div class="row row-cols-1 row-cols-md-2 row-cols-xl-4"><div class="col"><div class="card radius-10 border-start border-0 border-3 border-info"><div class="card-body"><div class="d-flex align-items-center"><div><h5 class="mb-0"><b>${ssrInterpolate(allParticipants.value)} Partisipan</b></h5><br><p class="mb-0 font-13">1250 Verified</p></div></div></div></div></div><div class="col"><div class="card radius-10 border-start border-0 border-3 border-success"><div class="card-body"><div class="d-flex align-items-center"><div><h5 class="mb-0"><b>987 Tim</b></h5><br><p class="mb-0 font-13">Semua Lomba</p></div></div></div></div></div><div class="col"><div class="card radius-10 border-start border-0 border-3 border-danger"><div class="card-body"><div class="d-flex align-items-center"><div><h5 class="mb-0"><b>${ssrInterpolate(allCount.value)} Pesan</b></h5><br><p class="mb-0 font-13">${ssrInterpolate(unreadCount.value)} Pesan Belum di Buka</p></div></div></div></div></div><div class="col"><div class="card radius-10 border-start border-0 border-3 border-warning"><div class="card-body"><div class="d-flex align-items-center"><div><h5 class="mb-0"><b>30 Akun Adminis</b></h5><br><p class="mb-0 font-13">1 Akun Admin</p></div></div></div></div></div></div><div class="card"><div class="card-body"><h3 class="card-title btn-crud"><b>Jumlah Pengunjung Setiap Bulan</b></h3><br><br><div id="bi-weekly-visit" class="chart-lg"></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Roles/Panelis/Dashboardjuri.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
