<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <!-- 麵包屑 -->
<div class="container">
  <nav style="--bs-breadcrumb-divider: '>';" aria-label="breadcrumb">
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
    <div class="col-md-7">
      <h1 class="col-10 overflow-hidden">{{ product.title }}</h1>
      <p>{{ product.description }}</p>
      <p style="white-space: pre-line">{{ product.content }}</p>
      <!-- 商品數量 -->
      <div class="input-group">
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
      <div>
        <h3 class="text-end">
          <span v-if="product.origin_price !== product.price"
          class="text-decoration-line-through fs-6">
            NT${{ $filters.currency(product.origin_price) }}
          </span>
          <span>NT${{ $filters.currency(product.price) }}</span>
          / {{ product.unit }}
        </h3>
      </div>
      <!-- 加入收藏 -->
      <div class="text-end">
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
      <hr>
      <!-- 產品說明與保養 -->
      <p>
        產品說明&保養<br>
        ＊保持乾燥避免潮濕、陽光直射，適合放置在冷氣房或於濕度20-65度之間的環境。<br>
        ＊永生花、不凋花是鮮花經特殊技術處理，能保有鮮花般色彩，可保持2-3年不等。<br>
        ＊乾燥花是鮮花自然風乾處理，可擺放約半年至1年，隨著時間會漸漸褪色為正常狀況。<br>
        ＊若有灰塵使用柔軟的刷子ｅｘ毛筆，輕輕刷拭。<br>
      </p>
    </div>
  </div>
</div>
</template>

<script>
import cartMixin from '@/mixins/GetCarts';
import favoriteMixin from '@/mixins/GetFavorites';

export default {
  data() {
    return {
      productId: '',
      product: {},
      product_qty: 1,
      idList: [],
      isLoading: false,
      loadingStatus: false,
    };
  },
  methods: {
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
        });
    },
    refreshqty(number) {
      this.product_qty += (number);
    },
  },
  mixins: [cartMixin, favoriteMixin],
  created() {
    this.getProductDetails();
    this.getFavorite();
  },
};
</script>

<style>
.breadcrumb-link{
  text-decoration: none;
  color: #6c757d;
}
.breadcrumb-link:hover{
  color:rgba(231, 152, 152, 1);
}
</style>
