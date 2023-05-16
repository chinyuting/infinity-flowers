<template>
<div class="container">
  <OrderNav :PageName="pageName" class="orderNav" />
  <div
  class="position-relative text-center w-100 my-5 py-5">
    <h3>
      <i class="bi bi-flower3 text-light-color"></i>
      <span class="text-deep-color">已完成付款</span>
    </h3>
    <button type="button" class="btn m-2 w-25 button-deep-color"
    @click.prevent="$router.push('/')">回到首頁</button>
    <button type="button" class="btn m-2 w-25 button-light-color"
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
