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

<!-- <style>
.ordernav {
  position: relative;
}
.ordernav::after{
  content: '';
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 80px;
  height: 80px;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid rgb(234, 166, 166);
  border-radius: 40% 60% 60% 40% / 40% 40% 60% 60%;
}
</style> -->
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
