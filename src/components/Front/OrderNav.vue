<template>
<div class="mt-2">
  <ul class="nav justify-content-center">
    <li class="nav-item">
      <p class="nav-link ordernav text-dark">
        <i class="bi bi-flower3"
        :class="PageName ==='cart' ?'text-danger':'text-secondary'"></i>
        <span>購物車</span>
      </p>
    </li>
    <li class="nav-item">
      <p class="nav-link ordernav text-dark">
        <i class="bi bi-flower3"
        :class="PageName ==='order' ?'text-danger':'text-secondary'"></i>
        <span>建立訂單</span>
      </p>
    </li>
    <li class="nav-item">
      <p class="nav-link ordernav text-dark">
        <i class="bi bi-flower3"
        :class="PageName ==='orderchecked' ?'text-danger':'text-secondary'"></i>
        <span>訂單確認</span>
      </p>
    </li>
    <li class="nav-item">
      <p class="nav-link ordernav text-dark">
        <i class="bi bi-flower3"
        :class="PageName ==='orderCompleted' ?'text-danger':'text-secondary'"></i>
        <span>訂單完成</span>
      </p>
    </li>
  </ul>
</div>
</template>

<script>
export default {
  data() {
    return {
      isPage: '',
    };
  },
  props: ['PageName'],
};
</script>
