<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" @click.prevent="goToFirstPage">
        <img alt="Infinity Flowers logo" src="@/assets/images/logo.png" width="100">{{ null }}
      </a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse" data-bs-target=".DashnavbarNav"
        aria-controls="DashnavbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse DashnavbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
          <li class="nav-item">
            <router-link to="/dashboard/productmanage" class="nav-link dashnav-item"
            :class="pageNow === 'productmanage' ? 'dashnav-active' : ''">
              產品管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/ordermanage" class="nav-link dashnav-item"
            :class="pageNow === 'ordermanage' ? 'dashnav-active' : ''">
              訂單管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/couponmanage" class="nav-link dashnav-item"
            :class="pageNow === 'couponmanage' ? 'dashnav-active' : ''">
              優惠券管理
            </router-link>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse DashnavbarNav dash-function">
        <ul class="navbar-nav me-3 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link dashnav-item">
              回到官網
            </router-link>
          </li>
          <li class="nav-item">
            <a @click.prevent="openModal"
            class="nav-link dashnav-item" href="#">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <DoubleCheckModal ref="checkModal" :dataStatus="'logout'" @logout-confirmed="logout" />
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
.dashnav-active{
  color: rgba(231, 152, 152, 1) !important;
  font-weight: 700;
}
.nav-link:focus{
  color: rgba(231, 152, 152, 1);
}
.dashnav-item{
  color: #4F332D;
  position: relative;
}
.dashnav-item::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #4F332D;
  transition: all .3s linear;
}
.dashnav-item:hover::after{
  width: 100%;
  /* border-bottom: #4F332D 1px solid;
  animation:show 2s; */
}
.dash-function{
  flex-grow:0;
}
</style>
