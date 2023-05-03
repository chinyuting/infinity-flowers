<template>
  <div class="toast" role="alert" aria-live="assertive" aria-atomic="true" ref="toast">
    <div class="toast-header rounded">
      <span :class="`text-${msg.style}`" class="p-2">
        <i class="bi bi-flower3" style="font-size: 2rem;"></i>
      </span>
      <strong class="me-auto">{{ msg.title }}</strong>
      <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    </div>
    <div class="toast-body" v-if="msg.content">
      {{ msg.content }}
    </div>
  </div>
</template>

<script>
import Toast from 'bootstrap/js/dist/toast';

export default {
  name: 'ToastComponent',
  props: [
    'msg',
  ],
  mounted() {
    const toastEl = this.$refs.toast;
    const toast = new Toast(toastEl, {
      delay: 6000,
    });
    toast.show();
  },
};
</script>
