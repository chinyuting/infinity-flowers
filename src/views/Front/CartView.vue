<template>
  <LoadingOverlay :active="isLoading" />
  <div class="container">
    <OrderNav :PageName="pageName" class="orderNav" />
    <h3 class="orderNavDetail">
      <i class="bi bi-flower3 text-light-color"></i>
      <span class="text-deep-color">購物車</span>
    </h3>
    <div>
      <!-- 購物車 -->
      <div v-if="cartLength !== 0">
        <button @click="deleteAllCart" class="mb-1 btn btn-outline-danger" type="button">
          <i class="bi bi-trash3"></i>全部刪除
        </button>
        <div class="row">
          <!-- 商品 -->
          <div class="card col-md-8 col-lg-7 cart-card mb-md-5">
            <div class="card-body justify-content-around d-flex align-items-center"
            v-for="(item, key) in CartList.carts" :key="key">
              <div class="mb-0 row">
                <button type="button" @click.prevent="deleteCart(item.id)"
                  class="col-1 btn btn-light border-0 text-danger text-center p-0">
                  <i class="bi bi-x-lg"></i>
                </button>
                <img :src="item.product.imageUrl" :alt="item.product.title"
                  class="col-4 flex-grow-1">
                <div class="col-7 align-items-center p-0">
                  <div class="w-100 fs-5">
                    <p class="cartItem-name">{{ item.product.title }}</p>
                    <p>NT${{ item.product.price }}</p>
                    <div class="input-group">
                      <button class="btn btn-outline-secondary" type="button"
                        @click.prevent="refreshCart(item, item.qty-1)"
                        :disabled="item.qty === 1">-</button>
                      <input type="number" class="form-control qty-input" placeholder="請輸入數量"
                        aria-label="qty" v-model="item.qty"
                        @change.prevent="refreshCart(item, item.qty)">
                      <button class="btn btn-outline-secondary" type="button"
                        @click.prevent="refreshCart(item, item.qty+1)">+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- 明細 -->
          <div class="cart-info col-md-4 col-lg-5 col-12 mb-sm-5">
            <div class="ps-md-5 mt-4">
              <h4>品項 {{ cartLength }} 個</h4>
              <h4>數量 {{ cartqty }} 個</h4>
              <hr>
              <h3>總價 NT${{ CartList.total }}</h3>
              <button type="submit" class="btn w-100 mt-2 button-light-color btn-lg"
                @click="toOrder">確認購買</button>
            </div>
          </div>
        </div>
      </div>
      <div v-else
        class="position-relative text-center my-5 py-5">
        <h2>購物車沒有東西</h2>
        <button type="button" class="btn button-light-color mt-2"
          @click.prevent="$router.push('/products')">馬上逛逛</button>
      </div>
    </div>
  </div>
</template>

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
        })
        .catch((err) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
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
        })
        .catch((err) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
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
        })
        .catch((err) => {
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
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

<style>
.orderNavDetail{
  display: none;
}
.qty-input{
  width: 100px;
}
.cartItem-name{
  max-width: 212px;
  text-overflow: ellipsis;
  white-space: nowrap;
}
@media only screen and (max-width: 768px){
  .cart-card{
    max-width:540px;
  }
  .orderNav{
    display: none;
  }
  .orderNavDetail{
    display: block;
  }
}
</style>
