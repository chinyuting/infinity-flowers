<template>
  <FontNavbar />
  <router-view/>
  <FontFooter />
</template>

<script>
import FontNavbar from '@/components/Front/FontNavbar.vue';
import FontFooter from '@/components/Front/FontFooter.vue';

export default {
  components: {
    FontNavbar,
    FontFooter,
  },
};
</script>

<style>
body {
  height: 100%;
}
.container{
  margin-top:90px ;
  min-height: calc(100vh - 170px);
}
.enphasis {
    background-image: linear-gradient(
      rgba(0, 0, 0, 0)70%,
      rgba(234, 166, 166)70%
    );
  }
</style>
