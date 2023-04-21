<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <!-- banner -->
  <div class="home">
    <div class="backgroundclip display-1 image-cover text-center row align-items-center">
      <span>Infinity Flowers</span>
      <span class="fs-3 position-absolute"
      style="bottom:30%; font-weight:400; opacity:.8"
      >Beauty that lasts a lifetime</span>
      <div class="fs-6 position-absolute bottom-0 scroll-notice">
        <div class="pb-2" style="text-shadow: rgb(226, 213, 196) 2px 0 10px;">scroll</div>
      </div>
    </div>
    <!-- 限時優惠 -->
    <div class="mt-5 container-fluid">
      <div class="on-sale w-100 text-center p-5 rounded-3">
        <h2>限時優惠 <span class="text-danger fw-bolder">８折</span></h2>
        <button class="btn btn-light" @click.prevent="openModel">點擊領取優惠券</button>
      </div>
    <!-- 標語 -->
      <div class="w-100 text-center">
        <h3 class="p-5 fst-italic fw-lighter">花藝對很多人而言，只是曇花一現的東西，只是一時的歡愉體驗</h3>
      </div>
      <div class="slogan-bg row">
          <div class="col-md-6 p-0 order-1">
            <img src="@/assets/bouquet.jpg" alt="" style="width:85%; display:block; margin:auto;"
            class="rounded-3">
          </div>
          <div class="col-md-6 text-light order-2">
            <h4 class="fst-italic text-danger slogan-title">
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
            <img src="@/assets/AboutUs.jpg" alt="" style="width:85%; display:block; margin:auto;"
            class="rounded-3">
          </div>
          <div class="col-md-6 align-middle text-light order-md-1">
            <h4 class="fst-italic text-danger slogan-title">
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
        <button class="btn btn-danger mt-3">
          <router-link to="/products"
            class="text-light text-decoration-none">
            馬上逛逛
          </router-link>
        </button>
      </div>
      <!-- 新品上市 -->
      <div class="mt-4 row newItem-bg py-2">
        <div class="col-lg-3 newItem mt-md-0 py-md-2">
          <h1 class="text-center"><i class="bi bi-flower3 text-danger"></i>新品上市</h1>
        </div>
        <div class="row col-lg-9 px-0 mx-auto">
          <div class="col-sm-12 col-md-4"
            v-for="(item, key) in newProductList" :key="key">
            <div class="card mt-1 mb-2 mx-auto" style="max-width: 280px;">
              <a href="#" class="text-decoration-none"
              @click.prevent="goForDetail(item.id)">
               <!-- 商品圖片 -->
                <div class="overflow-hidden text-light position-relative border-bottom"
                  style="height: 345px;">
                  <img :src="item.imageUrl" alt=""
                    class="card-img-top d-block align-middle h-100 w-auto mx-auto">
                </div>
                <div class="card-body text-dark">
                  <!-- 商品名稱 -->
                  <h5 class="overflow-hidden">
                    <div class="card-title overflow-hidden"
                      style="max-width: 225px; text-overflow: ellipsis; white-space: nowrap;"
                      :title="item.title">
                      {{ item.title }}
                    </div>
                  </h5>
                  <a href="#" class="btn btn-secondary w-100">查看商品</a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Onsalemodal ref="sale"></Onsalemodal>
</template>
<style>
.home{
  margin-top: 70px;
  padding: 0;
}
.backgroundclip{
  margin: 0;
  width: 100%;
  background-position:center;
  height: calc(100vh - 70px);
  background-clip: border-box;
  background-image: url(@/assets/banner.png);
  background-repeat: no-repeat;
  background-size: cover;
  color: rgb(247, 248, 249);
  font-weight: 700;
  text-transform: uppercase;
}
.scroll-notice {
  animation:move 3s infinite both;
}
.scroll-notice::after{
  display: inline-block;
  content: "";
  width: 3px;
  height: 70px;
  background-color: rgb(247, 248, 249);
  text-shadow: rgb(226, 213, 196) 2px 0 10px;
}
.on-sale{
  background: url(@/assets/LoginBg.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position:center;
}
.slogan-title{
  position: absolute;
  padding-top: 1%;
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
@media only screen and (max-width: 768px){
  .homepic{
    width: 100%;
    border-radius: 0px;
    padding: 0;
    position: relative;
  }
  .slogan-title{
    z-index: 5;
  }
  .slogan-content{
    color: rgba(231, 152, 152, 1);
    margin-top: 20px;
    z-index: 5;
  }
}
@keyframes move{
  0% { transform:translateY(0px);}
  50% {transform:translateY(-15px);}
  100% {transform:translateY(0px);}
}
.newItem-bg {
  background:linear-gradient(135deg,rgba(231, 152, 152, 0.7) 30%,#e9ecef );
}
.newItem{
  color: rgb(247, 248, 249);
  line-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script>
import Onsalemodal from '@/components/Front/OnsaleModal.vue';

export default {
  data() {
    return {
      newProductList: [],
    };
  },
  components: {
    Onsalemodal,
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
