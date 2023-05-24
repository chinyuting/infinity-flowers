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
      if (this.viewedList.every((viewedId) => viewedId !== item.id)) {
        this.viewedList.push(item.id);
        localStorage.setItem('viewedItem', JSON.stringify(this.viewedList));
      }
      this.emitter.emit('push-ProductDetail', {
        data: item,
        qty: 1,
      });
      this.$router.push(`/products/${item.id}`);
    },
  },
};
