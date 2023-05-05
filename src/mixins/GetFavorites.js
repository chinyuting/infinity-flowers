export default {
  // inject: ['emitter'],
  methods: {
    getFavorite() {
      if (localStorage.getItem('favoriteItem')) {
        const tempList = localStorage.getItem('favoriteItem');
        this.idList = JSON.parse(tempList);
        this.favoriteLength = this.idList.length;
      } else {
        this.idList = [];
        this.cartLength = 0;
        console.log(this.favoriteLength);
      }
      this.emitter.emit('push-Favnotice', {
        data: this.favoriteLength,
        category: 'cart',
      });
    },
  },
};
