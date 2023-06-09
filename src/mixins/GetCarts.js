export default {
  inject: ['emitter'],
  methods: {
    getCarts() {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.cartQty = 0;
            this.isLoading = false;
            this.CartList = res.data.data;
            this.cartLength = res.data.data.carts.length;
            res.data.data.carts.forEach((element) => {
              this.cartQty += element.qty;
            });
            this.emitter.emit('push-CartNotice', {
              data: this.cartLength,
              category: 'cart',
            });
          }
        });
    },
  },
};
