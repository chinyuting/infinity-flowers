<template>
  <button @click.prevent="topFunction"
  style="width: 45px; height:45px; display: none;"
  :style="{display: isTop ? 'block' : 'none'}"
  class="btn btn-danger rounded-circle position-fixed bottom-0 end-0 m-3"
  title="Go to top">
    <i class="bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle"
    style="font-size: 2rem;"></i>
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
