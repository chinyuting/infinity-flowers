<template>
<LoadingOverlay :active="isLoading" />
<!-- banner -->
<div class="home">
  <div class="backgroundclip display-1 text-center row align-items-center">
    <span>Infinity Flowers</span>
    <span class="fs-3 position-absolute banner-slogan">
      Beauty that lasts a lifetime
    </span>
    <div class="fs-6 position-absolute bottom-0 scroll-notice">
      <div class="pb-2">scroll</div>
    </div>
  </div>
  <!-- 限時優惠 -->
  <div class="mt-5 container-fluid">
    <div class="on-sale w-100 text-center p-5 rounded-3">
      <h2>
        限時優惠
        <span class="text-danger fw-bolder">８折</span>
      </h2>
      <button class="btn btn-danger btn-lg" @click.prevent="openModel">點擊領取優惠券</button>
    </div>
  <!-- 標語 -->
    <div class="w-100 text-center">
      <h3 class="p-5 fst-italic fw-lighter">花藝對很多人而言，只是曇花一現的東西，只是一時的歡愉體驗</h3>
    </div>
    <div class="slogan-bg row">
        <div class="col-md-6 p-0 order-1">
          <img src="@/assets/images/bouquet.jpg" alt="bouquet"
          class="rounded-3">
        </div>
        <div class="col-md-6 order-2">
          <h4 class="fst-italic slogan-title">
            不再只是曇花一現...
          </h4>
          <h3 class="fst-italic text-center w-100 slogan-content">
            用永生花表達愛意，<br>
            讓永恆的感動一直在心中盛開。
          </h3>
        </div>
    </div>
    <div class="slogan-bg row mt-5">
      <div class="col-md-6 p-0 order-md-2">
        <img src="@/assets/images/AboutUs.jpg" alt="making-bouquet"
        class="rounded-3">
      </div>
      <div class="col-md-6 align-middle order-md-1">
        <h4 class="fst-italic slogan-title ms-lg-3">
          不再只是一時的歡愉體驗...
        </h4>
        <h3 class="fst-italic text-center w-100 slogan-content">
          用永生花，<br>
          為每個特別的時刻留下永恆的回憶
        </h3>
      </div>
    </div>
    <div class="w-100 text-center my-5 p-2">
      <h3 class="p-3 fst-italic fw-lighter">讓永生花，成為你心中永恆的美麗。</h3>
      <button class="btn mt-3 btn-lg button-lightcolor">
        <router-link to="/products"
        class="text-decoration-none text-deepcolor">
          馬上逛逛
        </router-link>
      </button>
    </div>
    <!-- 新品上市 -->
    <div class="mt-4 row newItem-bg py-2">
      <div class="col-lg-3 newItem mt-md-0 py-md-2">
        <h1 class="text-center">
          <i class="bi bi-flower3 text-danger"></i>新品上市
        </h1>
      </div>
      <div class="row col-lg-9 px-0 mx-auto justify-content-evenly">
        <div class="col-sm-12 col-md-4"
        v-for="(item, key) in newProductList" :key="key">
          <div class="card mt-1 mb-2 mx-auto newItem-card">
            <a href="#" class="text-decoration-none"
            @click.prevent="goForDetail(item.id)">
              <!-- 商品圖片 -->
              <div
              class="overflow-hidden text-light position-relative border-bottom newItemt-pic">
                <img :src="item.imageUrl" :alt="item.title"
                class="card-img-top d-block align-middle h-100 w-auto mx-auto">
              </div>
              <div class="card-body text-dark">
                <!-- 商品名稱 -->
                <h5 class="overflow-hidden">
                  <div class="card-title overflow-hidden newItem-name"
                  :title="item.title">
                    {{ item.title }}
                  </div>
                </h5>
                <button class="btn btn-secondary w-100">查看商品</button>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<OnsaleModal ref="sale" />
</template>

<script>
import OnsaleModal from '@/components/Front/OnsaleModal.vue';

export default {
  data() {
    return {
      newProductList: [],
    };
  },
  components: {
    OnsaleModal,
  },
  inject: ['emitter'],
  methods: {
    getNewProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          this.newProductList = res.data.products.slice(-3);
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    goForDetail(id) {
      this.$router.push(`/products/${id}`);
    },
    openModel() {
      this.copyCode();
      this.$refs.sale.showModal();
    },
    goMart() {
      this.$router.push('/products');
    },
    copyCode() {
      navigator.clipboard.writeText('Infinity8');
      this.emitter.emit('push-message', {
        style: 'success',
        title: '已複製優惠代碼',
      });
    },
  },
  created() {
    this.getNewProducts();
  },
  mounted() {
    this.emitter.emit('page-change', {
      data: 'home',
    });
  },
};
</script>

<style>
.home{
  margin-top: 60px;
  padding: 0;
  color:#4F332D;
  font-weight: bold;
}
/* banner */
.backgroundclip{
  margin: 0;
  width: 100%;
  background-position:center;
  height: calc(100vh - 60px);
  background-clip: border-box;
  background-image: url(@/assets/images/banner.png);
  background-repeat: no-repeat;
  background-size: cover;
  text-shadow: 0 0 6px white, 0 0 6px white, 0 0 6px white, 0 0 6px white;
  font-weight: 700;
  text-transform: uppercase;
}
.banner-slogan{
  bottom:30%;
  font-weight:550;
}
.scroll-notice {
  animation:move 3s infinite both;
}
.scroll-notice::after{
  display: inline-block;
  content: "";
  width: 2.5px;
  height: 70px;
  background-color: rgb(247, 248, 249);
}
/* 優惠訊息 */
.on-sale{
  background: url(@/assets/images/LoginBg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
}
/* slogan */
.slogan-title{
  position: absolute;
  width: 30%;
  padding-top: 1%;
  color:rgb(231, 152, 152);
}
.slogan-content {
  position: relative;
  top: 50%;
  transform: translate(0, -50%);
}
.slogan-bg {
  background:
  linear-gradient(transparent 20%,rgba(231, 152, 152, .7) 20%,
  rgba(231, 152, 152, .7) 80%, transparent 80%);
}
.slogan-bg img{
  width:85%;
  display:block;
  margin:auto;
}
/* 新品上市 */
.newItem{
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.newItem h1{
  color:#2A1B18;
}
.newItem-bg {
  background:linear-gradient(135deg,rgba(231, 152, 152, 0.7) 30%,#e9ecef );
}
.newItem-card {
  max-width: 276px;
}
.newItemt-pic {
  height: 345px;
  border-radius: 0.375rem 0.375rem 0 0;
}
.newItem-name{
  max-width: 225px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media only screen and (max-width: 768px){
  .homepic{
    width: 100%;
    border-radius: 0px;
    padding: 0;
    position: relative;
  }
  .slogan-bg {
    background:
    linear-gradient(transparent 15%,rgba(231, 152, 152, 1) 15%,
  rgba(231, 152, 152, 1) 85%, transparent 85%);
  }
  .slogan-title{
    background:rgba(231, 152, 152, 1);
    width: 100%;
    color: white;
    left:0;
    padding:10px;
  }
  .slogan-content{
    color: #4F332D;
    margin-top: 30px;
    z-index: 5;
  }
}
@keyframes move{
  0% { transform:translateY(0px);}
  50% {transform:translateY(-15px);}
  100% {transform:translateY(0px);}
}
</style>
