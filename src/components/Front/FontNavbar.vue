<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
  <div class="container-fluid">
    <!-- logo -->
    <a class="navbar-bran" href="#">
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
          <router-link to="/dashboard/productmanage" class="nav-link homenav-item">
            管理員登入
          </router-link>
        </li>
      </ul>
    </div>
    <div class="navbar align-middle member-function me-lg-3">
      <ul class="navbar-nav flex-row">
        <li class="nav-item member-item">
          <span>
            <a href="#" title="收藏" @click.prevent="goToFavorites">
              <i class="bi bi-heart nav-icon"></i>{{ null }}
            </a>
          </span>
        </li>
        <li class="nav-item">
          <span>
            <a href="#" title="購物車" @click.prevent="openCart">
              <i class="bi bi-cart3 nav-icon"></i>{{ null }}
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
.homenav-item{
  color: #4F332D;
  position: relative;
}
.homenav-item::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #4F332D;
  transition: all .3s linear;
}
.homenav-item:hover::after{
  width: 100%;
  /* border-bottom: #4F332D 1px solid;
  animation:show 2s; */
}
.homenav-active{
  color: rgba(231, 152, 152, 1);
  font-weight: 700;
}
.nav-link:focus{
  color: rgba(231, 152, 152, 1);
}
.nav-icon {
  font-size: 1.5rem;
}
.member-function {
  flex-grow:0;
}
.member-function .nav-item{
  margin-right:16px;
}
@media only screen and (max-width: 991px) {
  .member-function {
    position: absolute;
    right: 85px;
    top: 5px;
  }
}
@keyframes show{
  0% { length:0%;}
  100% {length:100%;}
}
</style>
