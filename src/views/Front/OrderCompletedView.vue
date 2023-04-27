<template>
  <div class="container">
    <OrderNav :PageName="pageName" class="orderNav"></OrderNav>
    <div
    class="position-absolute bottom-50 start-50 translate-middle text-center w-100">
      <h3>
        <i class="bi bi-flower3 text-success"></i>
        <span>已完成付款</span>
      </h3>
      <button type="button" class="btn btn-secondary m-2 w-25"
      @click.prevent="this.$router.push('/')">回到首頁</button>
      <button type="button" class="btn btn-danger m-2 w-25"
      @click.prevent="this.$router.push('/products')">繼續逛逛</button>
    </div>
  </div>
</template>

<script>
import OrderNav from '@/components/Front/OrderNav.vue';

export default {
  data() {
    return {
      pageName: 'orderCompleted',
    };
  },
  components: {
    OrderNav,
  },
};
</script>

<style>
@media only screen and (max-width: 768px){
  .orderNav{
    display: none;
  }
}
</style>
