<template>
  <div class="login w-100">
    <div class="container">
      <form class="row justify-content-center"
      @submit.prevent="logIn">
        <div class="col-md-6 bg-light p-5 rounded-3" style="margin-top:20%">
          <button class="btn btn-lg btn-light btn-block" type="button">
            <router-link class="nav-link active" aria-current="page" href="#"
            to="/"><i class="bi bi-arrow-left"></i>回到官網</router-link>
          </button>
          <div class="text-center">
            <h1 class="h3 mb-3 font-weight-normal ">登入</h1>
            <div class="input-group mb-2">
              <span class="input-group-text" id="basic-addon1">帳號</span>
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Email address"
                aria-label="Email"
                required
                v-model="user.username"
              />
            </div>
            <div class="input-group mb-2">
              <span class="input-group-text" id="basic-addon1">密碼</span>
              <input
                  type="password"
                  id="inputPassword"
                  class="form-control"
                  placeholder="Password"
                  aria-label="Password"
                  required
                  v-model="user.password"
                />
            </div>
          </div>
          <div class="text-end mt-4">
            <button class="btn btn-lg btn-light btn-block" type="submit">
              登入<i class="bi bi-arrow-right"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
<style>
.login {
  height: calc(100vh);
  margin-top:-90px ;
  background: url(@/assets/LoginBg.png)no-repeat center / cover;;
}
</style>
<script>
export default {
  data() {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    logIn() {
      const api = `${process.env.VUE_APP_API}admin/signin`;
      this.$http.post(api, this.user)
        .then((res) => {
          // 確認登入狀態
          if (res.data.success) {
            // 存取token
            const { token, expired } = res.data;
            document.cookie = `hexToken=${token}; expires=${new Date(expired)};
            SameSite=None; Secure`;
            this.$router.push('/dashboard/productmanage');
          }
        });
    },
  },
};
</script>
