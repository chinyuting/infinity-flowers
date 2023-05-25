<template>
  <div class="container">
    <OrderNav :PageName="pageName" class="orderNav"/>
    <div class="position-relative text-center w-100 my-5 py-5">
      <h3>
        <i class="bi bi-flower3 text-light-color"></i>
        <span class="text-deep-color">已完成付款</span>
      </h3>
      <div class="row justify-content-center ms-0 me-0 mb-5">
        <button class="btn mt-3 col-5 me-1 button-deep-color" type="button"
          @click.prevent="$router.push('/')">回到首頁</button>
        <button class="btn mt-3 col-5 ms-1 button-light-color" type="button"
          @click.prevent="$router.push('/products')">繼續逛逛</button>
      </div>
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
