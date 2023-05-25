<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <div class="container-fluid">
      <a class="navbar-bran" href="#">
        <img alt="Infinity Flowers logo" src="@/assets/images/logo.png" width="100">
      </a>
      <button class="navbar-toggler" type="button"
        data-bs-toggle="collapse"
        data-bs-target=".FontNavbarNav"
        aria-controls="FontNavbarNav" aria-expanded="false"
        aria-label="Toggle navigation" ref="navbarToggler">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse FontNavbarNav">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 justify-content-center text-center">
          <li class="nav-item">
            <router-link to="/products" class="nav-link homeNav-item"
              @click.prevent="closeNav"
              :class="pageNow === 'products' ? 'homeNav-active' : ''">
              產品
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/orderSearch" class="nav-link homeNav-item"
              @click.prevent="closeNav"
              @click="pageChange('orderSearch')"
              :class="pageNow === 'orderSearch' ? 'homeNav-active' : ''">
              訂單查詢
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/QA" class="nav-link homeNav-item"
              @click.prevent="closeNav"
              @click="pageChange('QA')"
              :class="pageNow === 'QA' ? 'homeNav-active' : ''">
              常見問題
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard/productmanage" class="nav-link homeNav-item"
              @click.prevent="closeNav">
              管理員登入
            </router-link>
          </li>
        </ul>
      </div>
      <div class="navbar align-middle member-function me-lg-3">
        <ul class="navbar-nav flex-row">
          <li class="nav-item">
            <span>
              <a href="#" title="收藏" @click.prevent="goToFavorites">
                <i class="bi bi-heart nav-icon text-deep-color"></i>{{ null }}
              </a>
            </span>
            <span class="notice"
              :class="favoriteLength !== 0 && favoriteLength !== 'undefined'?
              'notice-visible' : 'notice-hide'">
              {{ favoriteLength }}
            </span>
          </li>
          <li class="nav-item">
            <span>
              <a href="#" title="購物車" @click.prevent="openCart">
                <i class="bi bi-cart3 nav-icon text-deep-color"></i>{{ null }}
              </a>
            </span>
            <span class="notice" :class="cartLength !== 0 ? 'notice-visible' : 'notice-hide'">
              {{ cartLength }}
            </span>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <CartModal ref="cart"/>
</template>

<script>
import CartModal from '@/components/Front/CartModal.vue';
import cartMixin from '@/mixins/GetCarts';
import favoritesMixin from '@/mixins/GetFavorites';

export default {
  data() {
    return {
      cartLength: 0,
      favoriteLength: 0,
      pageNow: '',
      navOpen: false,
      navOpenStatus: false,
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
      this.$refs.navbarToggler.click();
    },
  },
  mixins: [cartMixin, favoritesMixin],
  created() {
    this.getCarts();
    this.getFavorite();
  },
  mounted() {
    this.pageChange('home');
    this.emitter.on('push-CartNotice', (data) => {
      this.cartLength = data.data;
    });
    this.emitter.on('push-FavNotice', (data) => {
      this.favoriteLength = data.data;
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
  line-height: 16px;
  font-size:0.1em;
  color:#2A1B18;
  background:#E79898;
  position: relative;
  top: -12px;
  right: 8px;
}
.homeNav-item{
  color: #4F332D;
  position: relative;
}
.homeNav-item::after{
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #4F332D;
  transition: all .3s linear;
}
.homeNav-item:hover::after{
  width: 100%;
}
.homeNav-active{
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
.notice-visible{
  visibility:visible;
}
.notice-hide{
  visibility:hidden;
}
@media only screen and (max-width: 991px) {
  .homeNav-item::after{
    left: 40%;
  }
  .homeNav-item:hover::after{
    width: 20%;
  }
  .member-function {
    position: absolute;
    right: 85px;
    top: 5px;
  }
}
@keyframes show{
  0% { length:0%; }
  100% { length:100%; }
}
</style>
