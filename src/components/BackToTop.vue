<template>
<button @click.prevent="topFunction"
class="btn btn-danger rounded-circle position-fixed bottom-0 end-0 m-3 totop-btn"
:class="isTop ? 'totop-display-block' : 'totop-display-none'"
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
.totop-btn{
  width: 45px;
  height:45px;
}
.totop-display-block{
  display: block !important;
}
.totop-display-none{
  display: none !important;
}
</style>
