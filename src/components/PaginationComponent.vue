<template>
  <nav aria-label="Page navigation example">
    <ul class="pagination justify-content-center">
      <li class="page-item">
        <a class="page-link text-deep" href="#" tabindex="-1" aria-disabled="true"
        :class="{ disabled: !temppage.has_pre }"
        @click.prevent="updatePage(temppage.current_page-1)">上一頁</a>
      </li>
      <li class="page-item"
      v-for="(item, key) in temppage.total_pages"
      :key="key">
        <a class="page-link text-deep" href="#"
        :class=" { 'active': item===temppage.current_page } "
        @click.prevent="updatePage(item)">{{ item }}</a>
      </li>
      <li class="page-item">
        <a class="page-link text-deep" href="#"
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

<style>
.text-pastel{
  color:rgba(231, 152, 152, 1);
}
.text-deep {
  color:#2A1B18;
}
.page-link.active{
  background-color:rgba(231, 152, 152, .7);
  color: #2A1B18;
  border-color:rgba(231, 152, 152, 1);
}
</style>
