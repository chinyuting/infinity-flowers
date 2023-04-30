<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <!-- logo -->
    <a class="navbar-brand" href="#">
      <img alt="Infinity Flowers logo" src="@/assets/images/logo.png" width="100">{{ null }}
    </a>
     <!-- toggle -->
    <button class="navbar-toggler" type="button"
      data-bs-toggle="collapse" data-bs-target=".FontnavbarNav"
      aria-controls="FontnavbarNav" aria-expanded="false"
      aria-label="Toggle navigation" ref="navbarToggler"
      @blur="closeNav" @click.prevent="openNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <!-- nav list -->
    <div class="collapse navbar-collapse FontnavbarNav">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center">
        <li class="nav-item">
          <router-link to="/" class="nav-link homenav-item"
          :class="pageNow === 'home' ? 'homenav-active' : ''">
            首頁
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/products" class="nav-link homenav-item"
          :class="pageNow === 'products' ? 'homenav-active' : ''">
            產品
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/orderSearch" class="nav-link homenav-item"
          @click="pageChange('orderSearch')"
          :class="pageNow === 'orderSearch' ? 'homenav-active' : ''">
            訂單查詢
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/QA" class="nav-link homenav-item"
          @click="pageChange('QA')"
          :class="pageNow === 'QA' ? 'homenav-active' : ''">
            常見問題
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/dashboard/productmanage" class="nav-link">
            管理員登入
          </router-link>
        </li>
      </ul>
    </div>
    <div class="collapse navbar-collapse FontnavbarNav" style="flex-grow:0;">
      <ul class="navbar-nav me-3 mb-2 mb-lg-0 flex-row">
        <li class="nav-item" style="margin-right:16px;">
          <span>
            <a href="#" title="收藏" @click.prevent="goToFavorites">
              <i class="bi bi-heart" style="font-size: 1.5rem"></i>{{ null }}
            </a>
          </span>
        </li>
        <li class="nav-item">
          <span>
            <a href="#" title="購物車" @click.prevent="openCart">
              <i class="bi bi-cart3" style="font-size: 1.5rem"></i>{{ null }}
            </a>
          </span>
          <span class="notice" :style="{visibility: cartLength !== 0 ? 'visible' : 'hidden'}">
            {{ cartLength }}</span>
        </li>
      </ul>
    </div>
  </div>
</nav>
  <CartModal ref="cart" />
</template>

<script>
import CartModal from '@/components/Front/CartModal.vue';
import cartMixin from '@/mixins/GetCarts';

export default {
  data() {
    return {
      cartLength: 0,
      favoriteLength: 0,
      pageNow: '',
      navOpen: true,
    };
  },
  components: {
    CartModal,
  },
  inject: ['emitter'],
  methods: {
    openCart() {
      this.$refs.cart.showModal();
    },
    goToFavorites() {
      this.$router.push('/favorite');
    },
    pageChange(page) {
      this.pageNow = page;
    },
    closeNav() {
      if (this.navOpen === true) {
        this.$refs.navbarToggler.click();
        this.navOpens = false;
      }
    },
    openNav() {
      this.navOpen = true;
    },
  },
  mixins: [cartMixin],
  created() {
    this.getCarts();
  },
  mounted() {
    this.pageChange('home');
    this.emitter.on('push-notice', (data) => {
      this.cartLength = data.data;
    });
    this.emitter.on('page-change', (data) => {
      this.pageNow = data.data;
    });
  },
};
</script>

<style>
.notice{
  height:16px;
  width:16px;
  border-radius:16px;
  display:inline-block;
  text-align:center;
  font-size:0.1em;
  color:#fff;
  background:red;
  position: relative;
  top: -8px;
  right: 8px;
}
.homenav-active{
  color: rgba(231, 152, 152, 1);
  font-weight: 700;
}
.nav-link:focus{
  color: rgba(231, 152, 152, 1);
}
</style>
