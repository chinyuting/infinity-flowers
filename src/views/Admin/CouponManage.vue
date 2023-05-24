<template>
  <LoadingOverlay :active="isLoading" />
  <div>
    <button type="button" class="btn btn-secondary w-100"
      @click.prevent="openModal(true)">+新增優惠券</button>
  </div>
  <div>
    <table class="table mt-3 table-hover">
      <thead>
        <tr>
          <th scope="col">名稱</th>
          <th scope="col">折扣百分比</th>
          <th scope="col">到期日</th>
          <th scope="col">折扣碼</th>
          <th scope="col">是否啟用</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in couponList" :key="item.id" class="align-middle">
          <th scope="row">{{ item.title }}</th>
          <td>{{ item.percent }}</td>
          <td>{{ $filters.date(item.due_date) }}</td>
          <td>{{ item.code }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">已啟用</span>
            <span v-else class="text-muted">未啟用</span>
          </td>
          <td>
            <button type="button" class="btn btn-outline-secondary"
              @click.prevent="openModal(false, item)">編輯</button>
            <button type="button" class="btn btn-outline-danger ms-md-1"
              @click.prevent="openCheckModal(item);">刪除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <CouponModal
    ref="couponModal" :CouponItem="tempCoupon"
    @update-coupon="updateCoupon"/>
  <DoubleCheckModal ref="checkModal" :dataStatus="tempCoupon" :fromPage="'Coupon'"
    @delete-confirmed="deleteCoupon"/>
  <Pagination :pages="pagination" @emit-page="getCoupon"/>
</template>

<script>
import CouponModal from '@/components/Admin/CouponModal.vue';
import DoubleCheckModal from '@/components/Admin/DoubleCheckModal.vue';
import Pagination from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      couponList: [],
      pagination: {},
      tempCoupon: {},
      isNew: false,
      isLoading: false,
    };
  },
  components: {
    CouponModal,
    DoubleCheckModal,
    Pagination,
  },
  inject: ['emitter'],
  methods: {
    getCoupon(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupons?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          this.couponList = res.data.coupons;
          this.pagination = res.data.pagination;
          this.isLoading = false;
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempCoupon = { is_enabled: 0 };
      } else {
        this.tempCoupon = { ...item };
        this.tempCoupon.due_date = this.$filters.date(this.tempCoupon.due_date);
      }
      this.isNew = isNew;
      this.$refs.couponModal.showModal();
    },
    openCheckModal(item) {
      this.tempCoupon = { ...item };
      this.$refs.checkModal.showModal();
    },
    updateCoupon(item) {
      this.isLoading = true;
      this.tempCoupon = item;
      this.tempCoupon.due_date = Math.floor(new Date(item.due_date).getTime() / 1000);
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, { data: item })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.tempCoupon = {};
            this.getCoupon();
            this.$refs.couponModal.hideModal();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '更新失敗',
              content: res.data.message.join('、'),
            });
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
    deleteCoupon(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/coupon/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getCoupon();
            this.$refs.checkModal.hideModal();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
          }
        })
        .catch((err) => {
          this.isLoading = false;
          this.emitter.emit('push-message', {
            style: 'danger',
            title: err.response.data,
          });
        });
    },
  },
  created() {
    this.getCoupon();
  },
  mounted() {
    this.emitter.emit('dash-change', {
      data: 'couponmanage',
    });
  },
};
</script>
