<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
  aria-labelledby="exampleModalLabel" aria-hidden="true"
  ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增優惠券</span>
          </h5>
          <button type="button" class="btn-close"
                  data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-12">
              <div class="mb-3">
                <label for="title" class="form-label w-100">優惠券名稱
                  <input type="text" class="form-control" id="title"
                          placeholder="請輸入名稱"
                          v-model="temp.title">
                </label>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label w-100">優惠百分比
                    <input type="number" class="form-control" id="category"
                            placeholder="請輸入百分比"
                            v-model="temp.percent">
                  </label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label w-100">優惠截止日
                    <input type="date" class="form-control" id="unit"
                            placeholder="請輸入截止日期"
                            v-model="temp.due_date">
                  </label>
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label w-100">優惠券代碼
                    <input type="text" class="form-control" id="origin_price"
                            placeholder="請輸入代碼"
                            v-model="temp.code">
                  </label>
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                    <input class="form-check-input" type="checkbox"
                      :true-value="1"
                      :false-value="0"
                      id="is_enabled"
                      v-model="temp.is_enabled">
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
                  data-bs-dismiss="modal">取消
          </button>
          <button type="button" class="btn btn-primary"
          @click.prevent="$emit('update-coupon', temp)">確認</button>
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
      temp: {},
    };
  },
  props: {
    CouponItem: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    CouponItem() {
      this.temp = this.CouponItem;
    },
  },
  mixins: [modalMixin],
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
