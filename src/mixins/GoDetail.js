export default {
  inject: ['emitter'],
  methods: {
    goForDetail(item) {
      if (localStorage.getItem('viewedItem')) {
        const tempList = localStorage.getItem('viewedItem');
        this.viewedList = JSON.parse(tempList);
      } else {
        this.viewedList = [];
      }
      if (this.viewedList.every((viewedid) => viewedid !== item.id)) {
        // if (this.viewedList.length >= 3) {
        //   this.viewedList.shift();
        // }
        this.viewedList.push(item.id);
        localStorage.setItem('viewedItem', JSON.stringify(this.viewedList));
      }
      this.emitter.emit('push-ProductDetail', {
        data: item,
      });
      this.$router.push(`/products/${item.id}`);
    },
  },
};
