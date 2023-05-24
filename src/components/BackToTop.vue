<template>
  <button @click.prevent="topFunction" type="button"
    class="btn button-light-color rounded-circle position-fixed bottom-0 end-0 m-3 toTop-btn"
    :class="isTop ? 'toTop-display-block' : 'toTop-display-none'"
    title="Go to top">
    <i class="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle
      icon-size"></i>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isTop: false,
    };
  },
  methods: {
    topFunction() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  created() {
    const that = this;
    window.addEventListener('scroll', () => {
      const scrollPos = window.scrollY;
      if (scrollPos >= 100) {
        that.isTop = true;
      } else {
        that.isTop = false;
      }
    });
  },
};
</script>

<style>
.toTop-btn{
  width: 45px;
  height: 45px;
}
.toTop-display-block{
  display: block !important;
}
.toTop-display-none{
  display: none !important;
}
</style>
