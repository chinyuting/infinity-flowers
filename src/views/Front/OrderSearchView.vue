<template>
  <LoadingOverlay :active="isLoading" />
  <div class="container">
    <h5 class="search-text">請輸入訂購人Email查詢訂單</h5>
    <VForm v-slot="{ errors }"  @submit="searchOrder">
      <div class="input-group mb-3">
        <VField type="text" class="form-control" placeholder="訂購人Email"
          aria-label="email" name="email" rules="email"
          :class="{ 'is-invalid' : errors['email'] }"
          aria-describedby="button-addon2" v-model="searchEmail"
          @keyup.enter="searchOrder"
        />
        <button class="btn btn-outline-secondary" type="submit" id="button-addon2">查詢</button>
        <ErrorMessage name="email" class="invalid-feedback"/>
      </div>
    </VForm>
    <div v-if="searchState && filterOrder.length === 0">
      <div class="position-absolute bottom-50 start-50 translate-middle text-center text-deep">
        <p>訂購人Email : {{ email }}</p>
        <h2>
          <i class="bi bi-flower3 text-danger"></i>查無資料
        </h2>
      </div>
    </div>
    <div v-else-if="searchState && filterOrder.length!==0" class="mb-5">
      <table class="table table-hover">
        <thead class="searchThead">
          <tr>
            <th scope="col">建立日期</th>
            <th scope="col">商品項目</th>
            <th scope="col">金額</th>
            <th scope="col">付款狀態</th>
            <th></th>
          </tr>
        </thead>
        <tbody v-for="item in filterOrder" :key="item.id" class="searchTbody">
          <tr class="align-middle">
            <td scope="row" data-th="建立日期" class="fw-bolder">
              {{ $filters.date(item.create_at) }}
            </td>
            <td data-th="商品項目">
              <ul>
                <li v-for="product in item.products" :key="product.id">
                  {{ product.product.title }}<br>數量：{{ product.qty }}
                  {{ product.product.unit }}
                </li>
              </ul>
            </td>
            <td data-th="金額">{{ item.total }}</td>
            <td data-th="付款狀態">
              <span v-if="item.is_paid" class="text-success">已付款</span>
              <span v-else class="text-danger">未付款</span>
            </td>
            <td>
              <button class="btn w-100 button-light-color" type="button"
                :disabled="item.is_paid"
                @click.prevent="payOrder(item.id)">前往付款</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      OrderList: [],
      pagination: {},
      searchEmail: '',
      filterOrder: {},
      searchState: false,
      isLoading: false,
      email: '',
    };
  },
  inject: ['emitter'],
  methods: {
    getOrder(page = 1) {
      this.isLoading = true;
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/orders?page=${page}`;
      this.$http.get(api)
        .then((res) => {
          if (res.data.success) {
            this.OrderList = res.data.orders;
            this.pagination = res.data.pagination;
            this.isLoading = false;
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
    payOrder(id) {
      this.$router.push(`/order/${id}`);
    },
    searchOrder() {
      this.isLoading = true;
      this.searchState = true;
      this.filterOrder = this.OrderList.filter((item) => item.user.email === this.searchEmail);
      this.isLoading = false;
      this.email = this.searchEmail;
    },
  },
  created() {
    this.getOrder();
  },
  mounted() {
    this.emitter.emit('page-change', {
      data: 'orderSearch',
    });
  },
};
</script>

<style>
@media only screen and (max-width: 768px){
  .searchThead {
    display: none;
  }
  .searchTbody tr{
    display: block;
    border: 1px solid rgba(231, 152, 152, 1);
    margin: 10px 0;
    border-radius: 5pt;
    background-color: #fff;
  }
  .searchTbody td {
    display: block;
    text-align: left;
    padding: 5px 1rem 5px 1rem;
    border: none;
    color: black;
  }
  .searchTbody td::before {
    border: none;
    color: rgba(231, 152, 152, 1);
    content: attr(data-th);
    font-weight: bold;
    display: block;
  }
}
</style>
