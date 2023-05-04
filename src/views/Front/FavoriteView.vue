<template>
<div class="container">
  <div v-if="favoriteList.length === 0 "
  class="position-absolute bottom-50 start-50 translate-middle text-center">
    <h2 class="text-nowrap">尚未收藏任何產品</h2>
    <button type="button" class="btn btn-danger mt-2"
    @click.prevent="$router.push('/products')">馬上逛逛</button>
  </div>
  <div v-else>
    <div class="row">
    <!-- 商品列表 -->
      <div class="col-sm-12 col-md-6 col-lg-4"
        v-for="(item, key) in favoriteList" :key="key">
        <div class="card mt-1 mb-2 mx-auto productcard" >
          <a class="productcard-content" href="#" @click.prevent="goForDetail(item.id)">
            <div class="overflow-hidden text-light position-relative productcard-pic">
              <!-- 商品類別標示 -->
              <div class="position-absolute bg-secondary px-2 bottom-0 end-0 rounded m-1">
                <p class="card-text">{{ item.category }}</p>
              </div>
              <!-- 商品圖片 -->
              <img :src="item.imageUrl" :alt="item.title"
              class="card-img-top d-block mx-auto align-middle">
            </div>
            <div class="card-body text-dark">
              <!-- 商品名稱 -->
              <h5 class="row overflow-hidden">
                <div class="card-title col-10 overflow-hidden productcard-title"
                  :title="item.title">
                    {{ item.title }}
                  </div>
                <!-- 加入收藏 -->
                <div class="mw-25 text-end col-2 add-favorite">
                  <a href="#" @click.stop.prevent="removefavorite(item)">
                    <i class="bi bi-heart text-danger"
                    v-if="idList.every((id) => item.id !== id)"></i>
                    <i class="bi bi-heart-fill text-danger"
                    v-else></i>{{ null }}
                  </a>
                </div>
              </h5>
              <!-- 商品資訊 -->
              <p class="card-text">
                <span class="text-decoration-line-through fs-6"
                v-if="item.origin_price !== item.price"> NT${{ item.origin_price }}</span>
                <span class="fs-5"> NT${{ item.price }}</span>
              </p>
            </div>
          </a>
          <div class="card-footer">
            <a href="#" class="btn btn-danger w-100"
            @click.prevent="addCart(item)">加入購物車</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import cartMixin from '@/mixins/GetCarts';
import favoritesMixin from '@/mixins/GetFavorites';

export default {
  data() {
    return {
      favoriteList: [],
      pagination: {},
      page: 1,
      productCategory: [],
      idList: [],
    };
  },
  inject: ['emitter'],
  methods: {
    getFavoriteProducts() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            const productList = res.data.products;
            this.pagination = res.data.pagination;
            const category = [];
            this.favoriteList = [];
            productList.forEach((item) => {
              category.push(item.category);
              if (this.idList.some((id) => item.id === id)) {
                this.favoriteList.push(item);
              }
            });
            this.productCategory = category.filter((element, index, arr) => arr.indexOf(element)
            === index);
          }
        });
    },
    addCart(item) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: item.id,
        qty: 1,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.getFavoriteProducts();
            this.getCarts();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
          }
        });
    },
    removefavorite(item) {
      this.idList.indexOf(item.id);
      this.idList.splice(this.idList.indexOf(item.id), 1);
      localStorage.setItem('favoriteItem', JSON.stringify(this.idList));
      this.getFavoriteProducts();
      this.emitter.emit('push-message', {
        style: 'danger',
        title: '已取消收藏',
      });
    },
    goForDetail(id) {
      this.$router.push(`/products/${id}`);
    },
  },
  mixins: [cartMixin, favoritesMixin],
  created() {
    this.getFavoriteProducts();
    this.getFavorite();
  },
  mounted() {
    this.emitter.emit('page-change', {
      data: 'favorite',
    });
  },
};
</script>

<style>
.productcard{
  max-width: 276px;
}
.productcard-content{
  text-decoration: none;
}
.productcard-pic img{
  transition: all 1s;
}
.productcard-content:hover .productcard-pic img{
  transform: scale(1.1);
}
.productcard-pic{
  height: 345px;
}
.productcard-content .card-title{
  max-width: 225px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.product-card-content:nth-child(3n-1){
  margin: 0 auto;
}
.add-favorite{
  font-size: 20px;
  transition: font-size .5s;
}
.add-favorite:hover{
  font-size: 23px;
}
</style>
