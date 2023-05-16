<template>
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link page-deep" href="#" tabindex="-1" aria-disabled="true"
      :class="{ disabled: !tempPage.has_pre }"
      @click.prevent="updatePage(tempPage.current_page-1)">上一頁</a>
    </li>
    <li class="page-item"
    v-for="(item, key) in tempPage.total_pages"
    :key="key">
      <a class="page-link page-deep" href="#"
      :class=" { 'active': item===tempPage.current_page } "
      @click.prevent="updatePage(item)">{{ item }}</a>
    </li>
    <li class="page-item">
      <a class="page-link page-deep" href="#"
      :class="{ disabled: !tempPage.has_next }"
      @click.prevent="updatePage(tempPage.current_page+1)">下一頁</a>
    </li>
  </ul>
</nav>
</template>

<script>
export default {
  data() {
    return {
      tempPage: {},
    };
  },
  props: ['pages'],
  watch: {
    pages() {
      this.tempPage = this.pages;
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
.page-pastel {
  color:rgba(231, 152, 152, 1);
}
.page-deep {
  color:#2A1B18;
}
.page-link:hover{
  background-color:rgba(231, 152, 152, 0.25);
  color: #2A1B18;
  border-color:rgba(231, 152, 152, 1);
}
.page-link.active{
  background-color:rgba(231, 152, 152, .7);
  color: #2A1B18;
  border-color:rgba(231, 152, 152, 1);
}
.page-link:focus{
  color: #2A1B18;
  box-shadow: 0 0 0 0.25rem rgba(231, 152, 152, 0.25);
}
</style>
