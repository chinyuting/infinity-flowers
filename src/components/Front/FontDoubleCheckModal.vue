<template>
  <div class="modal fade" id="exampleModal"
    tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" ref="modal">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ null }}</h5>
          <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body text-center">
          <div class="p-2 doubleCheck-icon">
            <i class="bi bi-flower3 icon-size"></i>
          </div>
          確認移除商品嗎？<br>
          <span class="fw-lighter">(刪除後將無法恢復)</span>
        </div>
        <div class="modal-footer mx-auto">
          <button type="button" class="btn button-deep-color"
            @click.prevent="hideModal()">取消</button>
          <button type="button" class="btn button-light-color"
            @click.prevent="deleteConfirmed()">刪除</button>
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
  methods: {
    deleteConfirmed() {
      this.$emit('cartDelete-confirmed');
    },
  },
  inject: ['emitter'],
  mixins: [modalMixin],
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>

<style>
.doubleCheck-icon{
  color: rgb(231, 152, 152);
}
</style>
