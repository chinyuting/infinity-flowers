<template>
  <NavBar></NavBar>
  <div class="container">
    <routerView></routerView>
  </div>
</template>
<style>
.container{
  margin-top:90px ;
}
</style>
<script>
import NavBar from '@/components/Admin/DashNavbar.vue';

export default {
  components: {
    NavBar,
  },
  inject: ['emitter'],
  created() {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/, '$1');
    if (!token) {
      this.$router.push('/login');
    } else {
      this.$http.defaults.headers.common.Authorization = token;
      const api = `${process.env.VUE_APP_API}api/user/check`;
      this.$http.post(api)
        .then((res) => {
          if (!res.data.success) {
            this.$router.push('/login');
          } else {
            this.emitter.emit('push-message', {
              style: 'success',
              title: '登入成功',
            });
          }
        });
    }
  },
};
</script>
