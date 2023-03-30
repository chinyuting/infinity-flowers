<template>
  <router-view/>
  <Toast></Toast>
</template>

<style lang="scss">
@import "~bootstrap/scss/bootstrap";
</style>

<script>
import emitter from '@/methods/emiter';
import Toast from '@/components/ToastList.vue';
import 'bootstrap/dist/js/bootstrap.bundle';

export default {
  provide() {
    return {
      emitter,
    };
  },
  components: {
    Toast,
  },
};
</script>
