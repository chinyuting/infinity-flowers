<template>
  <LoadingOverlay :active="isLoading" />
  <div>
    <button type="button" class="btn btn-secondary w-100"
    @click="openModal(true)">+新增商品</button>
  </div>
  <div>
    <table class="table mt-3 table-hover">
      <thead>
        <tr>
          <th scope="col">分類</th>
          <th scope="col">名稱</th>
          <th scope="col">價格</th>
          <th scope="col">售價</th>
          <th scope="col">是否啟用</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in productList" :key="item.id" class="align-middle">
          <th scope="row">{{ item.category }}</th>
          <td>{{ item.title }}</td>
          <td>{{ $filters.currency(item.origin_price) }}</td>
          <td>{{ $filters.currency(item.price) }}</td>
          <td v-if="item.is_enabled" class="text-success">已啟用</td>
          <td v-else class="text-muted">未啟用</td>
          <td>
            <button type="button" class="btn btn-outline-secondary"
            @click.prevent="openModal(false, item)">編輯</button>
            <button type="button" class="btn btn-outline-danger ms-md-1"
            @click.prevent="openCheckModal(item);">刪除</button>
            <!-- deleteProduct(item.id) -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <ProductModal
  ref="productModal" :ProductItem="tempProduct"
  @update-product="updateProduct"
  @cancel-update="getProducts(pagination.current_page)" />
  <DoubleCheckModal ref="checkModal" :dataStatus="tempProduct" :fromPage="'Product'"
    @delete-confirmed="deleteProduct" />
  <Pagination :pages="pagination" @emit-page="getProducts" />
</template>

<script>
import ProductModal from '@/components/Admin/ProductModal.vue';
import DoubleCheckModal from '@/components/Admin/DoubleCheckModal.vue';
import Pagination from '@/components/PaginationComponent.vue';

export default {
  data() {
    return {
      productList: [],
      pagination: {},
      isNew: false,
      tempProduct: {},
      isLoading: false,
    };
  },
  components: {
    ProductModal,
    DoubleCheckModal,
    Pagination,
  },
  inject: ['emitter'],
  methods: {
    getProducts(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          this.productList = res.data.products;
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
    deleteProduct(item) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
      this.$http.delete(api)
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.getProducts(this.pagination.current_page);
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
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
      } else {
        this.tempProduct = { ...item };
      }
      this.isNew = isNew;
      this.$refs.productModal.showModal();
    },
    openCheckModal(item) {
      this.tempProduct = { ...item };
      this.$refs.checkModal.showModal();
    },
    updateProduct(item) {
      this.isLoading = true;
      this.tempProduct = item;
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = 'post';
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = 'put';
      }
      this.$http[httpMethod](api, { data: item })
        .then((res) => {
          if (res.data.success) {
            this.isLoading = false;
            this.tempProduct = {};
            this.getProducts(this.pagination.current_page);
            this.$refs.productModal.hideModal();
            this.emitter.emit('push-message', {
              style: 'success',
              title: res.data.message,
            });
          } else {
            this.isLoading = false;
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
  },
  created() {
    this.getProducts();
  },
  mounted() {
    this.emitter.emit('dash-change', {
      data: 'productmanage',
    });
  },
};
</script>
