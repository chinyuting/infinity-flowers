<template>
<div class="container">
  <div class="accordion" id="accordionExample">
    <h2>付款問題</h2>
    <div class="accordion-item">
      <p class="accordion-header" id="headingOne">
        <button class="accordion-button fs-5" type="button" @click="changeCollapse('One')"
        data-bs-toggle="collapse" data-bs-target="#collapseOne"
        aria-expanded="true" aria-controls="collapseOne"
        :class="{ collapsed: id!=='One' }">
        Q1: 請問付款方式有哪些？
        </button>
      </p>
      <div id="collapseOne" class="accordion-collapse collapse"
      :class="{show: id==='One'}"
      aria-labelledby="headingOne" data-bs-parent="#accordionExample">
        <div class="accordion-body">
          目前有以下付款方式：
          <ul>
            <li>信用卡(VISA、Mastercard、JCB)</li>
            <li>ATM 虛擬代碼繳費（需持代碼至實體ATM或網路銀行繳費）</li>
            <li>超商代碼（有金額上限、需持代碼至超商印出帳單繳費）</li>
            <li>網路 ATM（須外接讀卡機）</li>
          </ul>
        </div>
      </div>
    </div>

    <div class="accordion-item">
      <p class="accordion-header" id="headingTwo">
        <button class="accordion-button fs-5" type="button"  @click="changeCollapse('Two')"
        data-bs-toggle="collapse" data-bs-target="#collapseTwo"
        aria-expanded="false" aria-controls="collapseTwo"
        :class="{ collapsed: id!=='Two' }">
          Q2: 為什麼我的付款失敗了呢？
        </button>
      </p>
      <div id="collapseTwo" class="accordion-collapse collapse"
      aria-labelledby="headingTwo" data-bs-parent="#accordionExample"
      :class="{show: id==='Two'}">
        <div class="accordion-body">
          有可能是匯款金額錯誤或是超過付款時間，付款時間說明如下：<br>
          信用卡(VISA、Mastercard、JCB)<br>
          付款時效：立即
        </div>
      </div>
    </div>
  </div>
  <div class="accordion mt-4" id="accordionExample">
    <h2>配送問題</h2>
    <div class="accordion-item">
      <p class="accordion-header" id="headingThree">
        <button class="accordion-button fs-5" type="button"  @click="changeCollapse('Three')"
        data-bs-toggle="collapse" data-bs-target="#collapseThree"
        aria-expanded="true" aria-controls="collapseThree"
        :class="{ collapsed: id!=='Three' }">
          Q1: 請問有送到外島嗎？
        </button>
      </p>
      <div id="collapseThree" class="accordion-collapse collapse"
      aria-labelledby="headingThree" data-bs-parent="#accordionExample"
      :class="{show: id==='Three'}">
        <div class="accordion-body">
          目前不開放外島配送的服務，若有需要請聯繫客服人員，評估後才有辦法給予答覆。
        </div>
      </div>
    </div>
  </div>
  <div class="accordion mt-4" id="accordionExample">
    <h2>商品問題</h2>
    <div class="accordion-item">
      <p class="accordion-header" id="headingFour">
        <button class="accordion-button fs-5" type="button"  @click="changeCollapse('Four')"
        data-bs-toggle="collapse" data-bs-target="#collapseFour"
        aria-expanded="false" aria-controls="collapseFour"
        :class="{ collapsed: id!=='Four' }">
          Q1: 請問有辦法客製花禮嗎？
        </button>
      </p>
      <div id="collapseFour" class="accordion-collapse collapse"
      aria-labelledby="headingFour" data-bs-parent="#accordionExample"
      :class="{show: id==='Four'}">
        <div class="accordion-body">
          目前沒有提供客製服務。
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      id: 'One',
    };
  },
  inject: ['emitter'],
  methods: {
    changeCollapse(id) {
      this.id = id;
    },
  },
  mounted() {
    this.emitter.emit('page-change', {
      data: 'QA',
    });
  },
};
</script>

<style>
.accordion {
  color:#4F332D;
}
.accordion-button:focus{
  border-color:rgb(231, 152, 152);
}
.accordion-button:not(.collapsed){
  background-color:rgba(231, 152, 152, .7);
  color:#2A1B18;
  box-shadow: 0 0 0 0.25rem rgba(231, 152, 152, 0.25);
}
.accordion-button:not(.collapsed)::after {
  background-image:var(--bs-accordion-btn-icon);
}
</style>
