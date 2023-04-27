<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
<div class="container">
  <div class="row">
    <!-- 側邊分類 -->
    <div class="side-bar col-lg-2">
      <ul class="nav d-flex flex-lg-column flex-row ">
        <li class="nav-item">
          <a class="nav-link  text-secondary rounded-pill" href="#"
          aria-current="page"
          @click.prevent="category = ''">
            <i class="bi bi-flower3 text-danger"
            :style="{visibility: category === '' ? 'visible' : 'hidden'}"></i> 全部商品
          </a>
        </li>
        <li class="nav-item" v-for="(item, key) in productCategory" :key="key">
          <a class="nav-link text-secondary rounded-pill" href="#"
          @click.prevent="category = item">
            <i class="bi bi-flower3 text-danger"
            :style="{visibility: category === item ? 'visible' : 'hidden'}"></i>
            {{ item }}
          </a>
        </li>
      </ul>
    </div>
    <!-- 商品列表 -->
    <div class="col-lg-10 row ms-0">
      <div class="col-sm-12 col-md-6 col-lg-4"
        v-for="(item, key) in filterProduct[pagination.current_page-1]" :key="key">
        <div class="card mt-1 mb-2 mx-auto" style="max-width: 280px;">
          <a class="productcard" href="#" @click.prevent="goForDetail(item.id)">
            <!-- 商品類別標示 -->
            <div class="overflow-hidden text-light position-relative border-bottom"
            style="height: 345px;">
              <div class="position-absolute bg-secondary px-2 bottom-0 end-0 rounded">
                <p class="card-text">{{ item.category }}</p>
              </div>
              <!-- 商品圖片 -->
              <img :src="item.imageUrl" :alt="item.title"
              class="card-img-top d-block align-middle w-100 h-100 w-auto mx-auto">
            </div>
            <div class="card-body text-dark">
              <div>
                <h5 class="row overflow-hidden">
                  <!-- 商品名稱 -->
                  <div class="card-title col-10 overflow-hidden"
                  style="max-width: 225px; text-overflow: ellipsis; white-space: nowrap;"
                  :title="item.title">
                    {{ item.title }}
                  </div>
                  <!-- 加入收藏 -->
                  <div class="mw-25 text-end col-2">
                    <a href="#" @click.stop.prevent="updateFavorite(item)">
                      <i class="bi bi-heart text-danger" title="加入收藏"
                      v-if="idList.every((id) => item.id !== id)"></i>
                      <i class="bi bi-heart-fill text-danger" title="移除收藏"
                      v-else></i>{{ null }}
                    </a>
                  </div>
                </h5>
              </div>
              <!-- 商品資訊 -->
              <p class="card-text">
                <span class="text-decoration-line-through fs-6"
                v-if="item.origin_price !== item.price">
                NT${{ $filters.currency(item.origin_price) }}
              </span>
                <span class="fs-5"> NT${{ $filters.currency(item.price) }}</span>
              </p>
            </div>
          </a>
          <div class="card-footer">
            <a href="#" class="btn btn-danger w-100" @click.prevent="addCart(item)"
            style="z-index: 5">
              <div class="spinner-border spinner-border-sm text-light" role="status"
                v-if="loadingStatus && item.id === tempCartId">
                <span class="visually-hidden">Loading...</span>
              </div>
              <i class="bi bi-cart-plus" v-else></i>加入購物車
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  <Pagination :pages="pagination" @emit-page="getProducts" class="mt-2"></Pagination>
</template>

<script>
import Pagination from '@/components/PaginationComponent.vue';
import cartMixin from '@/mixins/GetCarts';
import favoriteMixin from '@/mixins/GetFavorites';

export default {
  data() {
    return {
      idList: [],
      tempCartId: '',
      productList: [],
      allProductList: [],
      pagination: {},
      page: 1,
      productCategory: [],
      category: '',
      isLoading: false,
      loadingStatus: false,
    };
  },
  components: {
    Pagination,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.productList = res.data.products;
            this.pagination = res.data.pagination;
            this.isLoading = false;
          }
        });
    },
    getCategory() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.allProductList = res.data.products;
            const category = [];
            this.allProductList.forEach((item) => {
              category.push(item.category);
            });
            this.productCategory = category.filter((element, index, arr) => arr.indexOf(element)
            === index);
          }
        });
    },
    addCart(item) {
      this.loadingStatus = true;
      this.tempCartId = item.id;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: item.id,
        qty: 1,
      };
      this.$http.post(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
            this.getProducts();
            this.getCarts();
            this.loadingStatus = false;
          }
        });
    },
    updateFavorite(item) {
      if (this.idList.every((id) => item.id !== id)) {
        this.idList.push(item.id);
        localStorage.setItem('favoriteItem', JSON.stringify(this.idList));
        this.emitter.emit('push-message', {
          style: 'success',
          title: '已新增至收藏',
        });
      } else {
        this.idList.indexOf(item.id);
        this.idList.splice(this.idList.indexOf(item.id), 1);
        localStorage.setItem('favoriteItem', JSON.stringify(this.idList));
        this.emitter.emit('push-message', {
          style: 'danger',
          title: '已取消收藏',
        });
      }
      this.getFavorite();
    },
    goForDetail(id) {
      this.$router.push(`/products/${id}`);
    },
  },
  computed: {
    filterProduct() {
      const tempData = this.allProductList.filter((item) => item.category.match(this.category));
      const resultData = [];
      // eslint-disable-next-line
      this.pagination.total_pages = tempData.length % 10 === 0? parseInt(tempData.length / 10, 10) : parseInt(tempData.length / 10, 10)+1;
      if (this.pagination.current_page > this.pagination.total_pages) {
        // eslint-disable-next-line
        this.pagination.current_page = 1;
      }
      tempData.forEach((item, i) => {
        if (i % 9 === 0) {
          resultData.push([]);
        }
        const pagenum = parseInt(i / 9, 9);
        resultData[pagenum].push(item);
      });
      return resultData;
    },
  },
  mixins: [cartMixin, favoriteMixin],
  created() {
    this.getProducts();
    this.getFavorite();
    this.getCategory();
  },
  mounted() {
    this.emitter.emit('page-change', {
      data: 'products',
    });
  },
};
</script>

<style>
.productcard{
  text-decoration: none;
}
.product-card:nth-child(3n-1){
  margin: 0 auto;
}
</style>
