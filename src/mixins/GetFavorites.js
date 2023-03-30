export default {
  // inject: ['emitter'],
  methods: {
    getFavorite() {
      if (localStorage.getItem('favoriteItem')) {
        const tempList = localStorage.getItem('favoriteItem');
        this.idList = JSON.parse(tempList);
      } else {
        this.idList = [];
      }
      // this.emitter.emit('push-notice', {
      //   data: this.idList.length,
      //   category: 'favorite',
      // });
    },
  },
};
