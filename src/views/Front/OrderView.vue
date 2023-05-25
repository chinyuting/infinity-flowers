<template>
  <div class="container">
    <OrderNav :PageName="pageName" class="orderNav" />
    <h3 class="orderNavDetail">
      <i class="bi bi-flower3 text-light-color"></i>
      <span class="text-deep-color">建立訂單</span>
    </h3>
    <button class="btn btn-light" type="button"
      @click.prevent="goCart">
      <i class="bi bi-arrow-left"></i>返回購物車
    </button>
    <VForm class="row mb-5" @submit="createOrder" v-slot="{ errors }">
      <div class="col-lg-6 mt-4 mx-auto">
        <div class="card-body">
          <h4>
            <span class="enphasis">訂購人資料</span>
          </h4>
            <div class="ms-2">
              <div class="input-group mb-3">
                <span class="input-group-text input-required">訂購人姓名</span>
                <VField type="text" class="form-control" name="訂購人姓名"
                  placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"
                  v-model="form.user.name"
                  :class="{ 'is-invalid': errors['訂購人姓名'] }" rules="required"/>
                <ErrorMessage name="訂購人姓名" class="invalid-feedback"/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text input-required">訂購人信箱</span>
                <VField type="text" class="form-control" name="訂購人信箱"
                  placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"
                  v-model="form.user.email"
                  :class="{ 'is-invalid': errors['訂購人信箱'] }" rules="email|required"/>
                <ErrorMessage name="訂購人信箱" class="invalid-feedback"/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text input-required">訂購人電話</span>
                <VField type="text" class="form-control" name="訂購人電話"
                  placeholder="Tel" aria-label="Tel" aria-describedby="basic-addon1"
                  v-model="form.user.tel" @click="tel = '訂購人'"
                  :class="{ 'is-invalid': errors['訂購人電話'] }" :rules="isPhone"/>
                <ErrorMessage name="訂購人電話" class="invalid-feedback"/>
              </div>
            </div>
          <hr>
          <h4>
            <span class="enphasis">收件人資料</span>
          </h4>
          <div class="ms-2">
            <div class="form-check">
              <label class="form-check-label" for="flexSwitchCheckDefault">同訂購人資料
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault"
                v-model="sameData">
              </label>
            </div>
            <div>
              <div class="input-group mb-3">
                <span class="input-group-text input-required">收件人姓名</span>
                <VField type="text" class="form-control" name="收件人姓名"
                  placeholder="Name" aria-label="Name" aria-describedby="basic-addon1"
                  v-model="form.addressee.name" :disabled=" sameData"
                  :class="{ 'is-invalid': errors['收件人姓名'] }" rules="required"/>
                <ErrorMessage name="收件人姓名" class="invalid-feedback"/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text input-required">收件人信箱</span>
                <VField type="text" class="form-control" name="收件人信箱"
                  placeholder="Email" aria-label="Email" aria-describedby="basic-addon1"
                  v-model="form.addressee.email" :disabled=" sameData"
                  :class="{ 'is-invalid': errors['收件人信箱'] }" rules="email|required"/>
                <ErrorMessage name="收件人信箱" class="invalid-feedback"/>
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text input-required">收件人電話</span>
                <VField type="text" class="form-control" name="收件人電話"
                  placeholder="Tel" aria-label="Tel" aria-describedby="basic-addon1"
                  v-model="form.addressee.tel" :disabled=" sameData"
                  @click="tel = '收件人'"
                  :class="{ 'is-invalid': errors['收件人電話'] }" :rules="isPhone"/>
                <ErrorMessage name="收件人電話" class="invalid-feedback"/>
              </div>
            </div>
          </div>
          <hr>
          <h4>
            <span class="enphasis">送件資訊</span>
          </h4>
          <div class="ms-2">
          [僅提供宅配服務]
            <div class="input-group mb-3">
              <span class="input-group-text input-required">送件地址</span>
              <VField type="text" class="form-control" name="送件地址"
                placeholder="Address" aria-label="Address" aria-describedby="basic-addon1"
                v-model="form.user.address"
                :class="{ 'is-invalid': errors['送件地址'] }" rules="required"/>
              <ErrorMessage name="送件地址" class="invalid-feedback"/>
            </div>
          </div>
          <hr>
          <h4>
            <span class="enphasis">想對我們說的話</span>
          </h4>
          <div class="input-group ms-2">
            <span class="input-group-text">留言給我們</span>
            <textarea class="form-control" aria-label="With textarea"
              v-model="form.message"></textarea>
          </div>
        </div>
      </div>
      <div class="col-lg-5 mt-4 mx-auto">
        <h4>
          <span class="enphasis">訂單明細</span>
        </h4>
        <table class="table">
          <thead>
            <tr>
              <th scope="col">商品</th>
              <th scope="col">數量</th>
              <th scope="col">價格</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in CartList.carts" :key="item.product.id">
              <th scope="row">
                <div>{{ item.product.title }}</div>
                <div v-if="item.coupon" class="text-success">已使用優惠券</div>
              </th>
              <td class="align-middle">{{ item.qty }} /{{ item.product.unit }}</td>
              <td class="align-middle">{{ item.total }}</td>
            </tr>
          </tbody>
        </table>
        <h5 class="text-end">
          <span class="d-inline-block price-label">總價</span>
          <span class="w-25 d-inline-block">
            {{ CartList.total }}
          </span>
        </h5>
        <h5 v-if="CartList.final_total !== CartList.total"
          class="text-success text-end">
          <span class="d-inline-block price-label">優惠價</span>
          <span class="w-25 d-inline-block">
            {{ parseInt(CartList.final_total) }}
          </span>
        </h5>
        <div class="input-group my-3">
          <input type="text" class="form-control"
            placeholder="輸入優惠代碼" aria-label="Coupon" aria-describedby="basic-addon1"
            v-model="coupon.couponCode">
          <button class="btn btn-outline-secondary"
            type="button" id="button-addon2"
            @click.prevent="addCoupon">
            <i class="bi bi-flower3 text-warning"></i>
            <span>套用優惠券</span>
          </button>
        </div>
        <button type="submit" class="btn w-100 mt-2 button-light-color"
          :disabled="Object.keys(errors).length > 0 || loadingState">確認訂單</button>
      </div>
    </VForm>
  </div>
</template>

<script>
import OrderNav from '@/components/Front/OrderNav.vue';
import cartMixin from '@/mixins/GetCarts';

export default {
  data() {
    return {
      pageName: 'order',
      CartList: [],
      loadingState: false,
      coupon: {
        couponCode: '',
        couponState: false,
      },
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        addressee: {
          name: '',
          email: '',
          tel: '',
        },
        message: '',
      },
      sameData: false,
      tel: '',
    };
  },
  components: {
    OrderNav,
  },
  watch: {
    sameData() {
      if (this.sameData) {
        this.form.addressee = this.form.user;
      } else {
        this.form.addressee = {};
      }
    },
  },
  methods: {
    isPhone(value) {
      if (!value) {
        return `${this.tel}電話為必填`;
      }
      const phoneNumber = /^(09)[0-9]{8}$/;
      if (!phoneNumber.test(value)) {
        return '需要輸入正確電話格式 09xxxxxxxx';
      }
      return true;
    },
    createOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order`;
      this.$http.post(api, { data: this.form })
        .then((res) => {
          if (res.data.success) {
            this.$router.push(`/order/${res.data.orderId}`);
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
    addCoupon() {
      this.loadingState = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/coupon`;
      const coupon = {
        code: this.coupon.couponCode,
      };
      this.$http.post(api, { data: coupon })
        .then((res) => {
          if (res.data.success) {
            this.coupon.couponState = true;
            this.loadingState = false;
            this.getCarts();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
          } else {
            this.loadingState = false;
            this.coupon.couponState = false;
            this.emitter.emit('push-message', {
              style: 'danger',
              title: res.data.message,
            });
          }
        })
        .catch((err) => {
          this.coupon.couponState = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    goCart() {
      this.$router.push('/cart');
    },
  },
  mixins: [cartMixin],
  created() {
    this.getCarts();
  },
};
</script>

<style>
.input-required::before{
  content: "*";
  color: red;
}
.orderNavDetail{
  display: none;
}
.price-label{
  width: 65px;
}
button[disabled]{
  cursor: not-allowed;
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
