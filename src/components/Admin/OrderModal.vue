<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>修改訂單</span>
          </h5>
          <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-10">
              <div class="mb-3">
                <label for="title" class="form-label">建立時間
                  <input type="date" class="form-control" id="title"
                    placeholder="請輸入建立時間"
                    v-model="tempOrder.create_at">
                </label>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-12">
                  訂購產品
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">產品名稱</th>
                        <th scope="col">數量</th>
                        <th scope="col">價格</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr v-for="(product, key) in tempOrder.products" :key="key">
                        <td>{{ product.product.title }}</td>
                        <td>{{ product.qty }} / {{ product.product.unit }}</td>
                        <td>
                          <span v-if="!product.coupon">{{ product.total }}</span>
                          <span v-else class="text-success">[優惠價]{{ product.final_total }}</span>
                        </td>
                      </tr>
                    </tbody>
                    <tfoot>
                      <tr>
                        <td></td>
                        <td>總價</td>
                        <td>
                          <label for="total" class="form-label">{{ null }}
                            <input type="number" class="form-control" id="total"
                              placeholder="請輸入總價"
                              v-model="tempOrder.total">
                          </label>
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
              <hr>
              <h4>訂購人資料</h4>
              <div class="row">
                <div class="mb-3 col-6">
                  <label for="name" class="form-label w-100">姓名
                    <input type="text" class="form-control" id="name"
                      placeholder="請輸入訂購人姓名"
                      v-model="tempOrder.user.name">
                  </label>
                </div>
                <div class="mb-3 col-6">
                  <label for="email" class="form-label w-100">電子信箱
                    <input type="text" class="form-control" id="email"
                      placeholder="請輸入訂購人Email"
                      v-model="tempOrder.user.email">
                  </label>
                </div>
                <div class="mb-3 col-6">
                  <label for="tel" class="form-label w-100">電話
                    <input type="text" class="form-control" id="tel"
                      placeholder="請輸入訂購人電話"
                      v-model="tempOrder.user.tel">
                  </label>
                </div>
                <div class="mb-3 col-6">
                  <label for="address" class="form-label w-100">送件地址
                    <input type="text" class="form-control" id="address"
                      placeholder="請輸入送件地址"
                      v-model="tempOrder.user.address">
                  </label>
                </div>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_paid">
                    付款狀態
                    <input class="form-check-input" type="checkbox"
                      id="is_paid"
                      v-model="tempOrder.is_paid">
                      <span v-if="tempOrder.is_paid" class="text-success">已付款</span>
                      <span v-else class="text-danger">尚未完成付款</span>
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
            @click.prevent="$emit('update-order', tempOrder)">確認</button>
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
      tempOrder: {
        user: {},
      },
    };
  },
  props: {
    orderItem: {
      type: Object,
      default() { return {}; },
    },
  },
  watch: {
    orderItem() {
      this.tempOrder = this.orderItem;
    },
  },
  mixins: [modalMixin],
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
