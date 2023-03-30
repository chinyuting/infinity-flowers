<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<div class="container">
  <OrderNav :PageName="pageName" class="orderNav"></OrderNav>
  <h3 class="orderNavDetail">
    <i class="bi bi-flower3 text-success"></i>
    <span>購物車</span>
  </h3>
  <div>
    <!-- 購物車 -->
    <div v-if="cartLength !== 0">
      <button @click="deleteAllCart" style="width: 125px;" class="mb-1 btn btn-outline-danger">
        <i class="bi bi-trash3"></i>全部刪除
      </button>
      <div class="row">
        <div class="card col-md-7" style="max-width:540px ;">
          <div class="card-body" v-for="(item, key) in CartList.carts" :key="key">
            <blockquote class="blockquote mb-0 row">
              <button type="button" @click.prevent="deleteCart(item.id)"
                class="col-1 btn btn-light border-0 text-danger">
                <i class="bi bi-x-lg"></i>
              </button>
              <img :src="item.product.imageUrl" alt="" class="col-4">
              <div class="col-7 align-items-center">
                <div class="">
                  <p>{{ item.product.title }}</p>
                  <p>NT${{ item.product.price }}</p>
                  <div class="input-group">
                    <button class="btn btn-outline-secondary" type="button"
                    @click.prevent="refreshCart(item, item.qty-1)"
                    :disabled="item.qty === 1">-</button>
                    <input type="number" class="form-control" placeholder="qty"
                    aria-label="qty" v-model="item.qty"
                    @change.prevent="refreshCart(item, item.qty)">
                    <button class="btn btn-outline-secondary" type="button"
                    @click.prevent="refreshCart(item, item.qty+1)">+</button>
                  </div>
                </div>
              </div>
            </blockquote>
          </div>
        </div>
        <!-- 明細 -->
        <div class="cart-info col-md-5 col-12">
          <div class="ps-md-5 mt-4">
            <h4>品項 {{ cartLength }} 個</h4>
            <h4>數量 {{ cartqty }} 個</h4>
            <hr>
            <h3>總價 NT${{ CartList.total }}</h3>
            <button type="submit" class="btn btn-success w-100 mt-2"
              @click="toOrder">確認購買</button>
          </div>
        </div>
      </div>
    </div>
    <div v-else
      class="position-absolute bottom-50 start-50 translate-middle text-center">
      <h2>購物車沒有東西</h2>
      <button type="button" class="btn btn-danger mt-2"
        @click.prevent="this.$router.push('/products')">馬上逛逛</button>
    </div>
  </div>
</div>
</template>
<style>
.orderNavDetail{
  display: none;
}
@media only screen and (max-width: 768px){
  .orderNav{
    display: none;
  }
  .orderNavDetail{
    display: block;
  }
}
</style>
<script>
import OrderNav from '@/components/Front/OrderNav.vue';
import cartMixin from '@/mixins/GetCarts';

export default {
  data() {
    return {
      pageName: 'cart',
      isLoading: false,
      CartList: [],
      cartqty: 0,
      cartLength: 0,
    };
  },
  components: {
    OrderNav,
  },
  inject: ['emitter'],
  methods: {
    toOrder() {
      this.$router.push('/order');
    },
    refreshCart(item, itemqty) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: itemqty,
      };
      this.$http.put(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.getCarts();
          }
        });
    },
    deleteCart(id) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getCarts();
            this.emitter.emit('push-message', {
              style: 'danger',
              title: res.data.message,
            });
          }
        });
    },
    deleteAllCart() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/carts`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.getCarts();
            this.emitter.emit('push-message', {
              style: 'danger',
              title: res.data.message,
            });
          }
        });
    },
  },
  mixins: [cartMixin],
  created() {
    this.getCarts();
  },
  mounted() {
    this.emitter.emit('page-change', {
      data: 'cart',
    });
  },
};
</script>
