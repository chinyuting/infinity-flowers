<template>
  <FontNavbar/>
  <router-view/>
  <FontFooter/>
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
body{
  height: 100%;
}
.container{
  margin-top:90px ;
  min-height: calc(100vh - 170px);
}
.emphasis{
  background-image: linear-gradient(
    rgba(0, 0, 0, 0)70%,
    rgba(231, 152, 152)70%
  );
}
.icon-size{
  font-size: 2rem;
}
.text-deep-color{
  color:#2A1B18;
}
.text-light-color{
  color:rgb(231, 152, 152);
}
.button-deep-color{
  background-color: rgb(42, 27, 24);
  color: rgb(231, 152, 152);
  font-weight: 500;
  transition: all .3s linear;
}
.button-deep-color:hover{
  background-color: rgba(42, 27, 24, .8);
  color: rgb(231, 152, 152);
}
.button-light-color{
  background-color: rgb(231, 152, 152);
  color: #2A1B18;
  font-weight: 500;
  transition: all .3s linear;
}
.button-light-color:hover{
  background-color: rgba(231, 152, 152, .8);
  color: #2A1B18;
}
</style>
