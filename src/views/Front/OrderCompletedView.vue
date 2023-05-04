<template>
<div class="container">
  <OrderNav :PageName="pageName" class="orderNav" />
  <div
  class="position-absolute bottom-50 start-50 translate-middle text-center w-100">
    <h3>
      <i class="bi bi-flower3 text-lightcolor"></i>
      <span class="text-deepcolor">已完成付款</span>
    </h3>
    <button type="button" class="btn m-2 w-25 button-deepcolor"
    @click.prevent="$router.push('/')">回到首頁</button>
    <button type="button" class="btn m-2 w-25 button-lightcolor"
    @click.prevent="$router.push('/products')">繼續逛逛</button>
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
