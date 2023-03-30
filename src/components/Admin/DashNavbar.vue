<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#/dashboard/productmanage">
        <img alt="" src="@/assets/logo.png" width="100">{{ null }}
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
            <router-link to="/dashboard/productmanage" class="nav-link"
            :class="pageNow === 'productmanage' ? 'homenav-active' : ''">
              產品管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/ordermanage" class="nav-link"
            :class="pageNow === 'ordermanage' ? 'homenav-active' : ''">
              訂單管理
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/couponmanage" class="nav-link"
            :class="pageNow === 'couponmanage' ? 'homenav-active' : ''">
              優惠券管理
            </router-link>
          </li>
        </ul>
      </div>
      <div class="collapse navbar-collapse DashnavbarNav" style="flex-grow:0;">
        <ul class="navbar-nav me-3 mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link to="/" class="nav-link">
              回到官網
            </router-link>
          </li>
          <li class="nav-item">
            <a @click.prevent="openModal"
            class="nav-link" href="#">登出</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <checkModal ref="checkModal" :dataStatus="'logout'" @logout-confirmed="logout"></checkModal>
</template>
<style>
.homenav-active{
  color: rgba(231, 152, 152, 1);
  font-weight: 700;
}
.nav-link:focus{
  color: rgba(231, 152, 152, 1);
}
</style>
<script>
import checkModal from './DoubleCheckModal.vue';

export default {
  data() {
    return {
      pageNow: '',
    };
  },
  components: {
    checkModal,
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
  },
  mounted() {
    this.emitter.on('dash-change', (data) => {
      this.pageNow = data.data;
    });
  },
};
</script>
