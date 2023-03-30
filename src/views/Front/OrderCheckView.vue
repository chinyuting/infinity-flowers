<template>
<LoadingOverlay :active="isLoading"></LoadingOverlay>
<div class="container">
  <OrderNav :PageName="pageName" class="orderNav"></OrderNav>
  <h3>
    <i class="bi bi-flower3 text-success"></i>
    <span>訂單已建立</span>
  </h3>
  <div class="row mb-3 ">
    <div class="col-md-7 mt-2">
      <h4>
        <span class="enphasis">訂單明細</span>
      </h4>
      <table class="table table-striped">
        <thead>
          <tr>
            <th scope="col">品名</th>
            <th scope="col">數量</th>
            <th scope="col">價格</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, key) in orderList.products" :key="key">
            <th scope="row">{{ item.product.title }}</th>
            <td>{{ item.qty }}</td>
            <td>{{ item.total }}</td>
          </tr>
        </tbody>
        <tfoot>
          <td colspan="1"></td>
          <td colspan="1">總價</td>
          <td>{{ orderList.total }}</td>
        </tfoot>
      </table>
    </div>
    <div class="col-md-5 mt-2">
      <h4>
        <span class="enphasis">訂購人資料</span>
      </h4>
      <table class="table">
        <tbody>
          <tr>
            <th scope="row">姓名</th>
            <td scope="col">{{ orderList.user.name }}</td>
          </tr>
          <tr>
            <th scope="row">Email</th>
            <td>{{ orderList.user.email }}</td>
          </tr>
          <tr>
            <th scope="row">電話</th>
            <td>{{ orderList.user.tel }}</td>
          </tr>
          <tr>
            <th scope="row">地址</th>
            <td>{{ orderList.user.address }}</td>
          </tr>
          <tr>
            <th scope="row">付款狀態</th>
            <td v-if="!orderList.is_paid" class="text-danger"> 未付款 </td>
            <td v-else class="text-success">已付款</td>
          </tr>
        </tbody>
      </table>
        <!-- <button class="btn btn-danger w-100 mt-2" @click.prevent="payOrder">確認付款</button> -->
    </div>
    <div class="row justify-content-center ms-0 me-0">
      <button class="btn btn-secondary mt-3 col-5 me-1"
        @click.prevent="this.$router.push('/')">稍後進行付款</button>
      <button class="btn btn-danger mt-3 col-5 ms-1" @click.prevent="payOrder">確認付款</button>
    </div>
  </div>
</div>
</template>
<style>
@media only screen and (max-width: 768px){
  .orderNav{
    display: none;
  }
}
</style>
<script>
import OrderNav from '@/components/Front/OrderNav.vue';

export default {
  data() {
    return {
      pageName: 'orderchecked',
      isLoading: false,
      orderId: '',
      orderList: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
      },
    };
  },
  components: {
    OrderNav,
  },
  inject: ['emitter'],
  methods: {
    getOrder() {
      this.isLoading = true;
      this.orderId = this.$route.params.orderid;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/order/${this.orderId}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.orderList = { ...res.data.order };
            this.isLoading = false;
          }
        });
    },
    payOrder() {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/pay/${this.orderId}`;
      this.$http.post(api)
        .then((res) => {
          if (res.data.success) {
            this.getOrder();
            this.$router.push(`/order/${this.orderId}/paid`);
          }
        });
    },
  },
  created() {
    this.getOrder();
    this.emitter.emit('judge-page', 'orderchecked');
  },
};
</script>
