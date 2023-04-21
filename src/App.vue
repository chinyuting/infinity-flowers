<template>
  <router-view/>
  <Toast></Toast>
  <toTop></toTop>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>

<script>
import emitter from '@/methods/emiter';
import Toast from '@/components/ToastList.vue';
import 'bootstrap/dist/js/bootstrap.bundle';
import toTop from '@/components/BackToTop.vue';

export default {
  provide() {
    return {
      emitter,
    };
  },
  components: {
    Toast,
    toTop,
  },
};
</script>
