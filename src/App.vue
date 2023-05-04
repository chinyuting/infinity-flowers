<template>
  <router-view/>
  <ToastList/>
  <BackToTop/>
</template>

<script>
import emitter from '@/methods/emiter';
import ToastList from '@/components/ToastList.vue';
import 'bootstrap/dist/js/bootstrap.bundle';
import BackToTop from '@/components/BackToTop.vue';

export default {
  provide() {
    return {
      emitter,
    };
  },
  components: {
    ToastList,
    BackToTop,
  },
};
</script>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>
