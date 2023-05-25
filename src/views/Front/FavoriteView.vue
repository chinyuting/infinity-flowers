<template>
  <LoadingOverlay :active="isLoading"/>
  <div class="container">
    <div v-if="favoriteList.length === 0 "
      class="position-relative text-center my-5 py-5">
      <h2 class="text-nowrap">尚未收藏任何產品</h2>
      <button type="button" class="btn button-light-color mt-2"
        @click.prevent="$router.push('/products')">馬上逛逛</button>
    </div>
    <div v-else>
      <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4"
          v-for="item in favoriteList" :key="item.id">
          <div class="card mt-1 mb-2 mx-auto product-card" >
            <a class="product-card-content" href="#" @click.prevent="goForDetail(item)">
              <div class="overflow-hidden text-light position-relative product-card-pic">
                <div class="position-absolute bg-secondary px-2 bottom-0 end-0 rounded m-2">
                  <p class="card-text">{{ item.category }}</p>
                </div>
                <img :src="item.imageUrl" :alt="item.title"
                  class="card-img-top d-block mx-auto align-middle">
              </div>
              <div class="card-body text-dark">
                <h5 class="row overflow-hidden">
                  <div class="card-title col-10 overflow-hidden product-card-title"
                    :title="item.title">
                    {{ item.title }}
                  </div>
                  <div class="mw-25 text-end col-2 add-favorite">
                    <a href="#" @click.stop.prevent="removeFavorite(item)">
                      <i class="bi bi-heart text-danger"
                        v-if="idList.every((id) => item.id !== id)"></i>
                      <i class="bi bi-heart-fill text-danger"
                        v-else></i>{{ null }}
                    </a>
                  </div>
                </h5>
                <p class="card-text">
                  <span class="text-decoration-line-through fs-6"
                    v-if="item.origin_price !== item.price"> NT${{ item.origin_price }}</span>
                  <span class="fs-5"> NT${{ item.price }}</span>
                </p>
              </div>
            </a>
            <div class="card-footer">
              <button class="btn button-light-color w-100" type="button"
                @click.prevent="addCart(item)">加入購物車</button>
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
import detailMixin from '@/mixins/GoDetail';

export default {
  data() {
    return {
      favoriteList: [],
      pagination: {},
      page: 1,
      productCategory: [],
      idList: [],
      isLoading: false,
    };
  },
  inject: ['emitter'],
  methods: {
    getFavoriteProducts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
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
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    addCart(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: item.id,
        qty: 1,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getFavoriteProducts();
            this.getCarts();
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
    removeFavorite(item) {
      this.idList.indexOf(item.id);
      this.idList.splice(this.idList.indexOf(item.id), 1);
      localStorage.setItem('favoriteItem', JSON.stringify(this.idList));
      this.getFavoriteProducts();
      this.getFavorite();
      this.emitter.emit('push-message', {
        style: 'danger',
        title: '已取消收藏',
      });
    },
  },
  mixins: [cartMixin, favoritesMixin, detailMixin],
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
.product-card{
  max-width: 276px;
}
.product-card-content{
  text-decoration: none;
}
.product-card-pic img{
  transition: all 1s;
}
.product-card-content:hover .product-card-pic img{
  transform: scale(1.1);
}
.product-card-pic{
  height: 345px;
  border-radius: 0.375rem 0.375rem 0 0;
}
.product-card-content .card-title{
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
