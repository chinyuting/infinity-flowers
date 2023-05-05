"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[343],{1557:function(e,t,s){s.d(t,{Z:function(){return x}});var r=s(6252),a=s(3577);const l={class:"mt-2"},n={class:"nav justify-content-center"},o={class:"nav-item"},i={class:"nav-link ordernav text-dark"},c=(0,r._)("span",null,"購物車",-1),d={class:"nav-item"},u={class:"nav-link ordernav text-dark"},p=(0,r._)("span",null,"建立訂單",-1),_={class:"nav-item"},h={class:"nav-link ordernav text-dark"},m=(0,r._)("span",null,"訂單確認",-1),v={class:"nav-item"},w={class:"nav-link ordernav text-dark"},g=(0,r._)("span",null,"訂單完成",-1);function b(e,t,s,b,f,k){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("ul",n,[(0,r._)("li",o,[(0,r._)("p",i,[(0,r._)("i",{class:(0,a.C_)(["bi bi-flower3","cart"===s.PageName?"ordernav-icon":"text-secondary"])},null,2),c])]),(0,r._)("li",d,[(0,r._)("p",u,[(0,r._)("i",{class:(0,a.C_)(["bi bi-flower3","order"===s.PageName?"ordernav-icon":"text-secondary"])},null,2),p])]),(0,r._)("li",_,[(0,r._)("p",h,[(0,r._)("i",{class:(0,a.C_)(["bi bi-flower3","orderchecked"===s.PageName?"ordernav-icon":"text-secondary"])},null,2),m])]),(0,r._)("li",v,[(0,r._)("p",w,[(0,r._)("i",{class:(0,a.C_)(["bi bi-flower3","orderCompleted"===s.PageName?"ordernav-icon":"text-secondary"])},null,2),g])])])])}var f={data(){return{isPage:""}},props:["PageName"]},k=s(3744);const y=(0,k.Z)(f,[["render",b]]);var x=y},6343:function(e,t,s){s.r(t),s.d(t,{default:function(){return M}});s(7658);var r=s(6252),a=s(3577),l=s(9963);const n={class:"container"},o=(0,r._)("h3",null,[(0,r._)("i",{class:"bi bi-flower3 text-lightcolor"}),(0,r._)("span",{class:"text-deepcolor"},"訂單已建立")],-1),i={class:"row mb-3"},c={class:"col-md-7 mt-2"},d=(0,r._)("h4",null,[(0,r._)("span",{class:"enphasis"},"訂單明細")],-1),u={class:"table table-striped"},p=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"品名"),(0,r._)("th",{scope:"col"},"數量"),(0,r._)("th",{scope:"col"},"價格")])],-1),_={scope:"row"},h={key:0,class:"text-success"},m={key:1},v=(0,r._)("td",{colspan:"1"},null,-1),w=(0,r._)("td",{colspan:"1",class:"fs-5"},"總價",-1),g={class:"fs-5"},b={class:"col-md-5 mt-2"},f=(0,r._)("h4",null,[(0,r._)("span",{class:"enphasis"},"訂購人資料")],-1),k={class:"table"},y=(0,r._)("th",{scope:"row"},"姓名",-1),x={scope:"col"},L=(0,r._)("th",{scope:"row"},"Email",-1),N=(0,r._)("th",{scope:"row"},"電話",-1),z=(0,r._)("th",{scope:"row"},"地址",-1),C=(0,r._)("th",{scope:"row"},"付款狀態",-1),O={key:0,class:"text-danger"},D={key:1,class:"text-success"},P={class:"row justify-content-center ms-0 me-0 mb-5"};function $(e,t,s,$,I,j){const Z=(0,r.up)("LoadingOverlay"),H=(0,r.up)("OrderNav");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(Z,{active:I.isLoading},null,8,["active"]),(0,r._)("div",n,[(0,r.Wm)(H,{PageName:I.pageName,class:"orderNav"},null,8,["PageName"]),o,(0,r._)("div",i,[(0,r._)("div",c,[d,(0,r._)("table",u,[p,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(I.orderList.products,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("th",_,(0,a.zw)(e.product.title),1),(0,r._)("td",null,(0,a.zw)(e.qty),1),(0,r._)("td",null,[e.coupon?((0,r.wg)(),(0,r.iD)("span",h,(0,a.zw)(parseInt(e.final_total)),1)):((0,r.wg)(),(0,r.iD)("span",m,(0,a.zw)(e.total),1))])])))),128))]),(0,r._)("tfoot",null,[v,w,(0,r._)("td",g,(0,a.zw)(parseInt(I.orderList.total)),1)])])]),(0,r._)("div",b,[f,(0,r._)("table",k,[(0,r._)("tbody",null,[(0,r._)("tr",null,[y,(0,r._)("td",x,(0,a.zw)(I.orderList.user.name),1)]),(0,r._)("tr",null,[L,(0,r._)("td",null,(0,a.zw)(I.orderList.user.email),1)]),(0,r._)("tr",null,[N,(0,r._)("td",null,(0,a.zw)(I.orderList.user.tel),1)]),(0,r._)("tr",null,[z,(0,r._)("td",null,(0,a.zw)(I.orderList.user.address),1)]),(0,r._)("tr",null,[C,I.orderList.is_paid?((0,r.wg)(),(0,r.iD)("td",D,"已付款")):((0,r.wg)(),(0,r.iD)("td",O," 未付款 "))])])])]),(0,r._)("div",P,[(0,r._)("button",{class:"btn mt-3 col-5 me-1 button-deepcolor",onClick:t[0]||(t[0]=(0,l.iM)((t=>e.$router.push("/")),["prevent"]))},"稍後進行付款"),(0,r._)("button",{class:"btn mt-3 col-5 ms-1 button-lightcolor",onClick:t[1]||(t[1]=(0,l.iM)(((...e)=>j.payOrder&&j.payOrder(...e)),["prevent"]))},"確認付款")])])])],64)}var I=s(1557),j={data(){return{pageName:"orderchecked",isLoading:!1,orderId:"",orderList:{user:{name:"",email:"",tel:"",address:""}}}},components:{OrderNav:I.Z},inject:["emitter"],methods:{getOrder(){this.isLoading=!0,this.orderId=this.$route.params.orderid;const e=`https://vue3-course-api.hexschool.io/api/flower-api/order/${this.orderId}`;this.$http.get(e).then((e=>{e.data.success&&(this.orderList={...e.data.order},this.isLoading=!1)}))},payOrder(){const e=`https://vue3-course-api.hexschool.io/api/flower-api/pay/${this.orderId}`;this.$http.post(e).then((e=>{e.data.success&&(this.getOrder(),this.$router.push(`/order/${this.orderId}/paid`))})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data})}))}},created(){this.getOrder(),this.emitter.emit("judge-page","orderchecked")}},Z=s(3744);const H=(0,Z.Z)(j,[["render",$]]);var M=H}}]);
//# sourceMappingURL=343.7ed8f2da.js.map