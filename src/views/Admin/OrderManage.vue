<template>
  <LoadingOverlay :active="isLoading"></LoadingOverlay>
  <div>
    <table class="table mt-3 table-hover">
      <thead>
        <tr>
          <th scope="col">訂單建立時間</th>
          <th scope="col">購買產品</th>
          <th scope="col">總價</th>
          <th scope="col">訂購人姓名</th>
          <th scope="col">送件地址</th>
          <th scope="col">付款狀態</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, key) in orderList" :key="key" class="align-middle">
          <th scope="row">{{ this.$filters.date(item.create_at) }}</th>
          <td>
            <ul class="mb-0">
              <li v-for="(product, i) in item.products" :key="i">
                {{ product.product.title }}<br>{{ product.qty }}
                {{ product.product.unit }}
              </li>
            </ul>
          </td>
          <td>{{ item.total }}</td>
          <td>{{ item.user.name }}</td>
          <td>{{ item.user.address }}</td>
          <td>
            <span v-if="!item.is_paid" class="text-danger">未付款</span>
            <span v-else class="text-success">完成付款</span>
          </td>
          <td>
            <button type="button" class="btn btn-outline-secondary"
              @click.prevent="openModal(item)">編輯</button>
            <button type="button" class="btn btn-outline-danger ms-md-1"
            @click.prevent="openCheckModal(item);">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <OrderModal
    ref="orderModal" :orderItem="tempOrder"
    @update-order="updateOrder">
  </OrderModal>
  <checkModal ref="checkModal" :dataStatus="tempOrder" :fromPage="'Order'"
  @delete-confirmed="deleteOrder"></checkModal>
  <Pagination :pages="pagination" @emit-page="getOrder"></Pagination>
</template>

<script>
import OrderModal from '@/components/Admin/OrderModal.vue';
import checkModal from '@/components/Admin/DoubleCheckModal.vue';
import Pagination from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      orderList: [],
      tempOrder: {},
      pagination: {},
      isLoading: false,
    };
  },
  components: {
    OrderModal,
    checkModal,
    Pagination,
  },
  inject: ['emitter'],
  methods: {
    getOrder(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/orders?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          this.orderList = res.data.orders;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        });
    },
    deleteOrder(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getOrder();
            this.$refs.checkModal.hideModal();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
          }
        });
    },
    updateOrder(item) {
      this.isLoading = true;
      this.tempOrder = item;
      this.tempOrder.create_at = Math.floor(new Date(item.create_at).getTime() / 1000);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/order/${item.id}`;
      this.$http.put(api, { data: item })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.$refs.orderModal.hideModal();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
            this.getOrder();
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: res.data.message,
            });
          }
        });
    },
    openModal(item) {
      this.tempOrder = { ...item };
      this.tempOrder.create_at = this.$filters.date(this.tempOrder.create_at);
      this.$refs.orderModal.showModal();
    },
    openCheckModal(item) {
      this.tempOrder = { ...item };
      this.$refs.checkModal.showModal();
    },
  },
  created() {
    this.getOrder();
  },
  mounted() {
    this.emitter.emit('dash-change', {
      data: 'ordermanage',
    });
  },
};
</script>
