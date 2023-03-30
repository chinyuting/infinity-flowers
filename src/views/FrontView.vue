<template>
  <NavBar></NavBar>
  <routerView></routerView>
  <Footer></Footer>
</template>
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
<script>
import NavBar from '@/components/Front/FontNavbar.vue';
import Footer from '@/components/Front/FontFooter.vue';

export default {
  components: {
    NavBar,
    Footer,
  },
};
</script>
