<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click.prevent="goToFirstPage">
        <img alt="Infinity Flowers logo" src="@/assets/images/logo.png" width="100">{{ null }}
      </a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target=".DashNav"
        aria-controls="DashNav" aria-expanded="false"
        aria-label="Toggle navigation" ref="navbarToggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse DashNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center text-center">
          <li class="nav-item">
            <router-link to="/dashboard/productmanage" class="nav-link dashNav-item"
              :class="pageNow === 'productmanage' ? 'dashNav-active' : ''"
              @click.prevent="closeDashNav">
              產品管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/ordermanage" class="nav-link dashNav-item"
              :class="pageNow === 'ordermanage' ? 'dashNav-active' : ''"
              @click.prevent="closeDashNav">
              訂單管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/couponmanage" class="nav-link dashNav-item"
              :class="pageNow === 'couponmanage' ? 'dashNav-active' : ''"
              @click.prevent="closeDashNav">
              優惠券管理
            </router-link>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse DashNav dash-function">
        <ul class="navbar-nav me-lg-3 me-auto mb-2 mb-lg-0 text-center">
          <li class="nav-item">
            <router-link to="/" class="nav-link dashNav-item">
              回到官網
            </router-link>
          </li>
          <li class="nav-item">
            <a @click.prevent="openModal"
              class="nav-link dashNav-item" href="#">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <DoubleCheckModal ref="checkModal" :dataStatus="'logout'" @logout-confirmed="logout"/>
</template>

<script>
import DoubleCheckModal from './DoubleCheckModal.vue';

export default {
  data() {
    return {
      pageNow: '',
    };
  },
  components: {
    DoubleCheckModal,
  },
  inject: ['emitter'],
  methods: {
    logout() {
      const api = `${process.env.VUE_APP_API}logout`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.$router.push('/login');
            this.$refs.checkModal.hideModal();
          }
        })
        .catch((err) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    openModal() {
      this.$refs.checkModal.showModal();
    },
    goToFirstPage() {
      this.$router.push('/dashboard/productmanage');
    },
    pageChange(page) {
      this.pageNow = page;
    },
    closeDashNav() {
      this.$refs.navbarToggler.click();
    },
  },
  mounted() {
    this.pageChange('productmanage');
    this.emitter.on('dash-change', (data) => {
      this.pageNow = data.data;
    });
  },
};
</script>

<style>
.dashNav-active{
  color: rgba(231, 152, 152, 1) !important;
  font-weight: 700;
}
.nav-link:focus{
  color: rgba(231, 152, 152, 1);
}
.dashNav-item{
  color: #4F332D;
  position: relative;
}
.dashNav-item::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #4F332D;
  transition: all .3s linear;
}
.dashNav-item:hover::after{
  width: 100%;
}
.dash-function{
  flex-grow:0;
}
@media only screen and (max-width: 991px) {
  .dashNav-item::after{
    left: 40%;
  }
  .dashNav-item:hover::after{
    width: 20%;
  }
}
</style>
