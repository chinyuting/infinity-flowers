<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div class="modal fade cartModal" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-dialog-scrollable cartModal-dialog">
      <div class="modal-content cartModal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">購物車</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"
            aria-label="Close"></button>
        </div>
        <div class="modal-body p-5 text-center" v-if="cartLength == 0 ">
          <h3>購物車目前沒有東西</h3> <br>
          <button type="button" class="btn button-light-color mt-3"
            @click.prevent="toProductView">馬上逛逛</button>
        </div>
        <div class="modal-body" v-else>
          <div class="card mb-1" v-for="item in CartList.carts" :key="item.id">
            <div class="d-flex">
              <div class="cartCard-img me-1 ps-0">
                <img :src="item.product.imageUrl" class="card-img-top"
                  :alt="item.product.title">
              </div>
              <div class="col-6 m-auto">
                <h5 class="card-title">{{ item.product.title }}</h5>
                <!-- 數輛調整 -->
                <div class="input-group">
                  <button class="btn btn-outline-secondary" type="button"
                    @click.prevent="refreshCart(item, item.qty-1)"
                    :disabled="item.qty === 1 ||
                    (loadingStatus && item.product_id === updateCartId)">
                    <div class="spinner-border spinner-border-sm text-light" role="status"
                      v-if="loadingStatus && item.product_id === updateCartId">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <span v-else><i class="bi bi-dash"></i></span>
                  </button>
                  <input type="text" class="form-control" placeholder="請輸入數量"
                    aria-label="qty" v-model="item.qty"
                    @change.prevent="refreshCart(item, item.qty)">
                    <button class="btn btn-outline-secondary" type="button"
                      @click.prevent="refreshCart(item, item.qty+1)"
                      :disabled="loadingStatus && item.product_id === updateCartId">
                    <div class="spinner-border spinner-border-sm text-light" role="status"
                      v-if="loadingStatus && item.product_id === updateCartId">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                    <span v-else><i class="bi bi-plus"></i></span>
                  </button>
                </div>
                <!-- 刪除按鈕 -->
                <button class="btn btn-outline-danger w-100 mt-2 text-center" type="button"
                  title="刪除此項商品"
                  @click.prevent="deleteCart(item.id)">
                  <i class="bi bi-trash3-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer p-0 b-0" v-if="cartLength !== 0 ">
          <a class="btn text-center cart-btn w-100 m-0 b-0"
            href="#" @click.prevent="toCartView">
            前往購物車
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import cartMixin from '@/mixins/GetCarts';

export default {
  data() {
    return {
      modal: {},
      CartList: {},
      cartLength: 0,
      updateCartId: '',
      isLoading: false,
      loadingStatus: false,
    };
  },
  inject: ['emitter'],
  watch: {
    cartData() {
      this.CartList = this.cartData;
      this.cartLength = this.cartData.carts.length;
    },
  },
  methods: {
    refreshCart(item, itemQty) {
      this.loadingStatus = true;
      this.updateCartId = item.product_id;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${item.id}`;
      const cart = {
        product_id: item.product_id,
        qty: itemQty,
      };
      this.$http.put(api, { data: cart })
        .then((res) => {
          if (res.data.success) {
            this.getCarts();
            this.loadingStatus = false;
          }
        })
        .catch((err) => {
          this.loadingStatus = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    deleteCart(id) {
      this.loadingStatus = false;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart/${id}`;
      this.$http.delete(api)
        .then((res) => {
          this.getCarts();
          this.loadingStatus = true;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: res.data.message,
          });
        })
        .catch((err) => {
          this.loadingStatus = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    toCartView() {
      this.$router.push('/cart');
      this.hideModal();
    },
    toProductView() {
      this.$router.push('/products');
      this.hideModal();
    },
    showModal() {
      this.modal.show();
      this.getCarts();
    },
    hideModal() {
      this.modal.hide();
    },
  },
  mixins: [cartMixin],
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<style>
.cartModal{
  --bs-modal-width:435px;
}
.cartModal-dialog {
  margin: 0%;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0;
  z-index: 10040;
  overflow: auto;
  overflow-y: auto;
  height: 100%;
}
.cartModal-content{
  height: 100%;
  border: 0;
  border-radius: 0;
}
.cartCard-img{
  width: 40%;
}
.cart-btn{
  border-radius: 0%;
  color: #2A1B18;
  font-size: large;
  font-weight: 700;
  background-color: rgb(231, 152, 152);
  height: 60px;
  padding: 16px;
}
.cart-btn:hover{
  color: rgb(231, 152, 152);
  background-color: #2A1B18;
}
</style>
