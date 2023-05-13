<template>
<LoadingOverlay :active="isLoading" />
  <!-- 麵包屑 -->
<div class="container">
  <nav aria-label="breadcrumb">
    <ol class="breadcrumb">
      <li class="breadcrumb-item"><a href="#" class="breadcrumb-link">首頁</a></li>
      <li class="breadcrumb-item"><a href="#/products" class="breadcrumb-link">產品</a></li>
      <li class="breadcrumb-item active" aria-current="page">{{ product.title }}</li>
    </ol>
  </nav>
  <div class="row">
    <!-- 商品圖 -->
    <div id="carouselExampleControls" class="carousel slide col-12 col-md-5"
    data-bs-ride="carousel">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img :src="product.imageUrl" class="d-block w-100" :alt="product.title">
        </div>
        <div v-if="product.imagesUrl">
          <div class="carousel-item" v-for="(imgUrl, key) in product.imagesUrl" :key="key">
            <img :src="imgUrl" :alt="product.title" class="d-block w-100">
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" v-if="product.imagesUrl"
      data-bs-target="#carouselExampleControls" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" v-if="product.imagesUrl"
      data-bs-target="#carouselExampleControls" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- 商品介紹 -->
    <div class="col-md-7 product-detail carousel-dark">
      <h1 class="overflow-hidden mt-3">{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p class="detail-content">{{ product.content }}</p>
      <!-- 商品數量 -->
      <div class="row mt-3">
        <div class="input-group col-lg-7 col-md-6 w-auto detail-qty mt-auto">
          <button class="btn btn-outline-secondary" type="button"
          @click.prevent="refreshqty(-1)"
          :disabled="product_qty === 1">-
          </button>
          <input type="number" class="form-control" placeholder="Recipient's username"
          aria-label="qty" v-model="product_qty">
          <button class="btn btn-outline-secondary" type="button"
          @click.prevent="refreshqty(1)">+
          </button>
        </div>
        <div class="col-lg-5 col-md-6 mt-3 mt-lg-0 mx-25">
          <h3 class="text-lg-end">
            <span v-if="product.origin_price !== product.price"
            class="text-decoration-line-through fs-6">
              NT${{ $filters.currency(product.origin_price) }}<br>
            </span>
            <span>NT${{ $filters.currency(product.price) }}</span>
              / {{ product.unit }}
          </h3>
        </div>
      </div>
      <!-- 加入收藏 -->
      <div>
        <button type="button" @click.prevent="updateFavorite(item)"
          class="btn btn-danger mt-2 me-2">
          <span v-if="idList.every((id) => productId !== id)">
            <i class="bi bi-heart" title="加入收藏"></i> 加入收藏
          </span>
          <span v-else><i class="bi bi-heart-fill" title="加入收藏"></i> 取消收藏</span>
        </button>
        <button type="button" @click.prevent="addCart"
          class="btn btn-danger mt-2" :disabled="loadingStatus">
          <div class="spinner-border spinner-border-sm text-light" role="status"
          v-if="loadingStatus">
            <span class="visually-hidden">Loading...</span>
          </div>
          <i class="bi bi-cart-plus-fill" v-else></i> 加入購物車
        </button>
      </div>
    </div>
  </div>
  <hr>
    <!-- 產品說明與保養 -->
  <div class="text-center m-5 text-deepcolor">
    <h3>產品說明及保養</h3>
    <p class="mt-3">
      ＊保持乾燥避免潮濕、陽光直射，適合放置在冷氣房或於濕度20-65度之間的環境。<br>
      ＊永生花、不凋花是鮮花經特殊技術處理，能保有鮮花般色彩，可保持2-3年不等。<br>
      ＊乾燥花是鮮花自然風乾處理，可擺放約半年至1年，隨著時間會漸漸褪色為正常狀況。<br>
      ＊若有灰塵使用柔軟的刷子ｅｘ毛筆，輕輕刷拭。<br>
    </p>
  </div>
  <hr>
  <!-- 最近看過的產品 -->
  <div class="text-center m-5 text-deepcolor">
    <h3>最近看過的產品</h3>
    <div class="mt-4 overflow-hidden position-relative viewedItem mx-auto">
      <!-- 左右按紐 -->
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
      @click="sliderPrevious" :disabled="viewedSliderCount === 0"
      data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
      @click="sliderNext" :disabled="viewedProducts.length === (viewedSliderCount+viewedItemLength)"
      data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
      <div class="row flex-nowrap mx-auto justify-content-start">
        <!-- 商品列表 -->
        <div class="viewedItem-card ps-0" :data-slider="key"
        v-for="(item, key) in viewedProducts" :key="key">
          <!-- <div class="card mt-1 mb-2 mx-auto mx-lg-0 viewedItem-item" data-slider="key"> -->
            <a href="#" class="text-decoration-none card mt-1 mb-2 mx-auto mx-lg-0 viewedItem-item"
            @click.prevent="goForDetail(item)">
              <div
              class="overflow-hidden text-light position-relative border-bottom viewedItem-pic">
                <!-- 商品圖片 -->
                <img :src="item.imageUrl" :alt="item.title"
                class="card-img-top d-block align-middle h-100 w-auto mx-auto">
              </div>
              <div class="card-body text-dark">
                <!-- 商品名稱 -->
                <h5 class="overflow-hidden">
                  <div class="card-title overflow-hidden viewedItem-name"
                  :title="item.title">
                    {{ item.title }}
                  </div>
                </h5>
                <button class="btn btn-secondary w-100">查看商品</button>
              </div>
            </a>
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import cartMixin from '@/mixins/GetCarts';
import favoriteMixin from '@/mixins/GetFavorites';
import detailMixin from '@/mixins/GoDetail';

export default {
  data() {
    return {
      allProductList: [],
      viewedProducts: [],
      viewedSliderCount: 0,
      viewedItemLength: 1,
      productId: '',
      product: {},
      product_qty: 1,
      idList: [],
      isLoading: false,
      loadingStatus: false,
    };
  },
  methods: {
    getAllProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          this.isLoading = false;
          this.allProductList = res.data.products;
          this.allProductList.forEach((item) => {
            if (this.viewedList.some((id) => item.id === id)) {
              this.viewedProducts.push(item);
            }
          });
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    getProductDetails() {
      this.isLoading = true;
      this.productId = this.$route.params.productId;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.productId}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.product = res.data.product;
            this.isLoading = false;
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    updateFavorite() {
      this.loadingStatus = true;
      if (this.idList.every((id) => this.productId !== id)) {
        this.idList.push(this.productId);
        localStorage.setItem('favoriteItem', JSON.stringify(this.idList));
        this.emitter.emit('push-message', {
          style: 'success',
          title: '已新增至收藏',
        });
      } else {
        this.idList.indexOf(this.productId);
        this.idList.splice(this.idList.indexOf(this.productId), 1);
        localStorage.setItem('favoriteItem', JSON.stringify(this.idList));
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '已取消收藏',
        });
      }
      this.loadingStatus = false;
      this.getFavorite();
    },
    addCart() {
      this.loadingStatus = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: this.product.id,
        qty: this.product_qty,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.getCarts();
            this.loadingStatus = false;
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    refreshqty(number) {
      this.product_qty += (number);
    },
    getViewedList() {
      if (localStorage.getItem('viewedItem')) {
        const tempList = localStorage.getItem('viewedItem');
        this.viewedList = JSON.parse(tempList);
      } else {
        this.viewedList = [];
      }
    },
    sliderPrevious() {
      if (this.viewedSliderCount < this.viewedList.length) {
        this.viewedSliderCount -= 1;
        const root = document.documentElement;
        const cartWidth = document.getElementsByClassName('viewedItem-card')[0].clientWidth;
        const sliderDistance = -(cartWidth * this.viewedSliderCount);
        root.style.setProperty('--slider', `${sliderDistance}px`);
      }
    },
    sliderNext() {
      if (this.viewedSliderCount < this.viewedList.length - 1) {
        this.viewedSliderCount += 1;
        const root = document.documentElement;
        const viewedItemWidth = document.getElementsByClassName('viewedItem')[0].clientWidth;
        if (viewedItemWidth >= 824) {
          this.viewedItemLength = 3;
        } else if (viewedItemWidth >= 544) {
          this.viewedItemLength = 2;
        } else {
          this.viewedItemLength = 1;
        }
        const cartWidth = document.getElementsByClassName('viewedItem-card')[0].clientWidth;
        const sliderDistance = -(cartWidth * this.viewedSliderCount);
        root.style.setProperty('--slider', `${sliderDistance}px`);
      }
    },
  },
  mixins: [cartMixin, favoriteMixin, detailMixin],
  created() {
    this.getProductDetails();
    this.getFavorite();
    this.getAllProducts();
    this.getViewedList();
    this.emitter.on('push-ProductDetail', (data) => {
      this.product = data.data;
    });
  },
};
</script>

<style>
:root {
  --slider: 0px;
}
.breadcrumb-link{
  text-decoration: none;
  color: #6c757d;
}
.breadcrumb-link:hover{
  color:rgba(231, 152, 152, 1);
}
.breadcrumb-item + .breadcrumb-item::before{
  content:var(--bs-breadcrumb-divider, '>');
}
.detail-content{
  white-space: pre-line;
}
.detail-qty{
max-height: 41.6px;
}
.carousel-control-prev, .carousel-control-next{
  width: 50px;
}
.carousel-control-prev-icon, .carousel-control-next-icon {
  width: 50px;
  height: 50px;
}
.viewedItem{
  width: 824px;
}
.viewedItem-card {
  width: 280px;
}
.viewedItem-item{
  width: 262px;
  transition:all .3s ease-in-out;
  transform:translateX(var(--slider));
}
.viewedItem-pic {
  height: 345px;
  border-radius: 0.375rem 0.375rem 0 0;
}
.viewedItem-name{
  max-width: 225px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media only screen and (max-width: 1024px){
  .viewedItem{
    width: 544px;
  }
  .viewedItem-card {
    width: 280px;
  }
}
@media only screen and (max-width: 768px){
  .viewedItem{
    width: 264px;
  }
  .viewedItem-card {
    width: 264px;
  }
}
</style>
