<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link" href="#" tabindex="-1" aria-disabled="true"
        :class="{ disabled: !temppage.has_pre }"
        @click.prevent="updatePage(temppage.current_page-1)">上一頁</a>
      </li>
      <li class="page-item"
      v-for="(item, key) in temppage.total_pages"
      :key="key">
        <a class="page-link" href="#"
        :class=" { 'active': item===temppage.current_page } "
        @click.prevent="updatePage(item)">{{ item }}</a>
      </li>
      <li class="page-item">
        <a class="page-link" href="#"
        :class="{ disabled: !temppage.has_next }"
        @click.prevent="updatePage(temppage.current_page+1)">下一頁</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      temppage: {},
    };
  },
  props: ['pages'],
  watch: {
    pages() {
      this.temppage = this.pages;
    },
  },
  methods: {
    updatePage(item) {
      this.$emit('emit-page', item);
    },
  },
};
</script>
