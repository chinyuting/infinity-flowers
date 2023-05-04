<template>
<div class="modal fade" id="exampleModal" tabindex="-1"
aria-labelledby="exampleModalLabel" aria-hidden="true"
ref="modal">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">請確認</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal"
        aria-label="Close"></button>
      </div>
      <div class="modal-body">
        是否
        <span v-if="dataStatus === 'logout'">登出</span>
        <span v-else>刪除 {{ dataStatus.title }}</span>
        ?
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
        <button type="button" class="btn btn-primary"
        @click.prevent="statusConfirmed">確認</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import Modal from 'bootstrap/js/dist/modal';
import modalMixin from '@/mixins/ModalMixins';

export default {
  data() {
    return {
      modal: {},
    };
  },
  props: ['dataStatus', 'fromPage'],
  methods: {
    statusConfirmed() {
      if (this.dataStatus === 'logout') {
        this.$emit('logout-confirmed');
      }
      this.$emit('delete-confirmed', this.dataStatus);
    },
  },
  mixins: [modalMixin],
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
