<template>
  <div class="modal fade" id="exampleModal" tabindex="-1"
    aria-labelledby="exampleModalLabel" aria-hidden="true"
    ref="modal">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content border-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button type="button" class="btn-close"
            data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="mb-3">
                <label for="image" class="form-label">輸入圖片網址
                  <input type="text" class="form-control" id="image"
                          placeholder="請輸入圖片連結" v-model="tempProduct.imageUrl">
                </label>
              </div>
              <div class="mb-3">
                <label for="customFile" class="form-label">或 上傳圖片(圖片大小:2MB以下)
                  <i class="fas fa-spinner fa-spin"></i>
                  <input type="file" id="customFile" class="form-control"
                  @change="uploadFile" ref="fileInput">
                </label>
              </div>
              <img class="img-fluid" alt="" :src="tempProduct.imageUrl">
              <!-- 延伸技巧，多圖 -->
              <div class="mt-5">
                <div class="mb-3 input-group">
                  <input type="url" class="form-control form-control"
                          placeholder="請輸入連結" v-model="tempImg">
                  <button type="button" class="btn btn-outline-danger" @click.prevent="tempImg=''">
                    清除
                  </button>
                </div>
                <div>
                  <button class="btn btn-outline-primary btn-sm d-block w-100"
                    @click="addNewImgs">
                    新增圖片
                  </button>
                </div>
                <div v-for="(url, key) in tempProduct.imagesUrl" :key="key">
                  <div style="max-width: 225px; text-overflow: ellipsis; white-space: nowrap;"
                    class="overflow-hidden">
                    {{ url }}
                  </div>
                  <div>
                    <button class="btn btn-outline-primary" @click="showImages(url)">
                      <span v-if="url === isShowurl && isShow">隱藏</span>
                      <span v-else>顯示</span>
                    </button>
                    <button class="btn btn-outline-danger me-2" @click="deleteImages(url)">
                      刪除</button>
                  </div>
                  <div>
                    <img :src="url" alt="" class="img-fluid" v-if="url === isShowurl && isShow"
                    onerror="this.onerror=null;this.src='http://example.com/existent-image.jpg';">
                    <!-- <span>圖片連結錯誤無法顯示</span> -->
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-8">
              <div class="mb-3">
                <label for="title" class="form-label w-100">標題
                  <input type="text" class="form-control" id="title"
                    placeholder="請輸入標題"
                    v-model="tempProduct.title">
                </label>
              </div>
              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="category" class="form-label w-100">分類
                    <input type="text" class="form-control" id="category"
                            placeholder="請輸入分類"
                            v-model="tempProduct.category">
                  </label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label w-100">單位
                    <input type="text" class="form-control" id="unit"
                            placeholder="請輸入單位"
                            v-model="tempProduct.unit">
                  </label>
                </div>
              </div>

              <div class="row gx-2">
                <div class="mb-3 col-md-6">
                  <label for="origin_price" class="form-label w-100">原價
                    <input type="number" class="form-control" id="origin_price"
                            placeholder="請輸入原價"
                            v-model="tempProduct.origin_price">
                  </label>
                </div>
                <div class="mb-3 col-md-6">
                  <label for="price" class="form-label w-100">售價
                    <input type="number" class="form-control" id="price"
                            placeholder="請輸入售價"
                            v-model="tempProduct.price">
                  </label>
                </div>
              </div>
              <hr>
              <div class="mb-3">
                <label for="description" class="form-label w-100">產品描述
                  <textarea type="text" class="form-control" id="description"
                            placeholder="請輸入產品描述"
                            v-model="tempProduct.description"></textarea>
                </label>
              </div>
              <div class="mb-3">
                <label for="content" class="form-label w-100">說明內容
                  <textarea type="text" class="form-control" id="content"
                            placeholder="請輸入產品說明內容"
                            v-model="tempProduct.content"></textarea>
                </label>
              </div>
              <div class="mb-3">
                <div class="form-check">
                  <label class="form-check-label" for="is_enabled">
                    是否啟用
                    <input class="form-check-input" type="checkbox"
                          :true-value="1"
                          :false-value="0"
                          id="is_enabled"
                          v-model="tempProduct.is_enabled">
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-secondary"
            data-bs-dismiss="modal"
            @click.prevent="$emit('cancel-update')">取消
          </button>
          <button type="button" class="btn btn-primary"
            @click.prevent="$emit('update-product', tempProduct)">確認</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Modal from 'bootstrap/js/dist/modal';

export default {
  data() {
    return {
      modal: {},
      tempImg: '',
      isShowurl: '',
      isShow: false,
      tempProduct: {
        imagesUrl: [],
      },
    };
  },
  props: {
    ProductItem: {
      type: Object,
      default() { return {}; },
    },
  },
  inject: ['emitter'],
  watch: {
    ProductItem() {
      this.tempProduct = this.ProductItem;
      if (!this.tempProduct.imagesUrl) {
        this.tempProduct.imagesUrl = [];
      }
    },
  },
  methods: {
    showModal() {
      this.modal.show();
    },
    hideModal() {
      this.modal.hide();
    },
    uploadFile() {
      const uploadFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append('file-to-upload', uploadFile);
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(api, formData)
        .then((res) => {
          if (res.data.success) {
            this.tempProduct.imageUrl = res.data.imageUrl;
            this.emitter.emit('push-message', {
              style: 'success',
              title: '上傳成功',
            });
          } else {
            this.emitter.emit('push-message', {
              style: 'danger',
              title: '上傳失敗',
            });
          }
        });
    },
    addNewImgs() {
      if (this.tempImg) {
        this.tempProduct.imagesUrl.push(this.tempImg);
        this.tempImg = '';
      }
    },
    deleteImages(url) {
      const ImgIndex = this.tempProduct.imagesUrl.indexOf(url);
      this.tempProduct.imagesUrl.splice(ImgIndex, 1);
    },
    showImages(url) {
      this.isShowurl = url;
      this.isShow = !this.isShow;
    },
  },
  mounted() {
    this.modal = new Modal(this.$refs.modal);
  },
};
</script>
