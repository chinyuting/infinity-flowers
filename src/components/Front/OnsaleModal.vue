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
          <span class="p-2 onsale-icon">
            <i class="bi bi-flower3 icon-size"></i>
          </span>
          <h4>Infinity Flower限時優惠</h4>
          <h3>優惠券代碼 Infiity8</h3>
        </div>
        <div class="modal-footer mx-auto">
          <button type="button" class="btn btn-danger"
            @click.prevent="goToProduct">馬上逛逛</button>
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
    goToProduct() {
      this.hideModal();
      this.$router.push('/products');
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
.onsale-icon{
  color: rgb(231, 152, 152);
}
</style>
