"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[280],{1557:function(e,t,s){s.d(t,{Z:function(){return L}});var r=s(6252),a=s(3577);const l={class:"mt-2"},n={class:"nav justify-content-center"},o={class:"nav-item"},i={class:"nav-link ordernav text-dark"},d=(0,r._)("span",null,"購物車",-1),c={class:"nav-item"},u={class:"nav-link ordernav text-dark"},_=(0,r._)("span",null,"建立訂單",-1),p={class:"nav-item"},h={class:"nav-link ordernav text-dark"},m=(0,r._)("span",null,"訂單確認",-1),v={class:"nav-item"},w={class:"nav-link ordernav text-dark"},g=(0,r._)("span",null,"訂單完成",-1);function b(e,t,s,b,f,k){return(0,r.wg)(),(0,r.iD)("div",l,[(0,r._)("ul",n,[(0,r._)("li",o,[(0,r._)("p",i,[(0,r._)("i",{class:(0,a.C_)(["bi bi-flower3","cart"===s.PageName?"ordernav-icon":"text-secondary"])},null,2),d])]),(0,r._)("li",c,[(0,r._)("p",u,[(0,r._)("i",{class:(0,a.C_)(["bi bi-flower3","order"===s.PageName?"ordernav-icon":"text-secondary"])},null,2),_])]),(0,r._)("li",p,[(0,r._)("p",h,[(0,r._)("i",{class:(0,a.C_)(["bi bi-flower3","orderchecked"===s.PageName?"ordernav-icon":"text-secondary"])},null,2),m])]),(0,r._)("li",v,[(0,r._)("p",w,[(0,r._)("i",{class:(0,a.C_)(["bi bi-flower3","orderCompleted"===s.PageName?"ordernav-icon":"text-secondary"])},null,2),g])])])])}var f={data(){return{isPage:""}},props:["PageName"]},k=s(3744);const y=(0,k.Z)(f,[["render",b]]);var L=y},2280:function(e,t,s){s.r(t),s.d(t,{default:function(){return j}});s(7658);var r=s(6252),a=s(3577),l=s(9963);const n={class:"container"},o=(0,r._)("h3",null,[(0,r._)("i",{class:"bi bi-flower3 text-success"}),(0,r._)("span",null,"訂單已建立")],-1),i={class:"row mb-3"},d={class:"col-md-7 mt-2"},c=(0,r._)("h4",null,[(0,r._)("span",{class:"enphasis"},"訂單明細")],-1),u={class:"table table-striped"},_=(0,r._)("thead",null,[(0,r._)("tr",null,[(0,r._)("th",{scope:"col"},"品名"),(0,r._)("th",{scope:"col"},"數量"),(0,r._)("th",{scope:"col"},"價格")])],-1),p={scope:"row"},h=(0,r._)("td",{colspan:"1"},null,-1),m=(0,r._)("td",{colspan:"1"},"總價",-1),v={class:"col-md-5 mt-2"},w=(0,r._)("h4",null,[(0,r._)("span",{class:"enphasis"},"訂購人資料")],-1),g={class:"table"},b=(0,r._)("th",{scope:"row"},"姓名",-1),f={scope:"col"},k=(0,r._)("th",{scope:"row"},"Email",-1),y=(0,r._)("th",{scope:"row"},"電話",-1),L=(0,r._)("th",{scope:"row"},"地址",-1),x=(0,r._)("th",{scope:"row"},"付款狀態",-1),N={key:0,class:"text-danger"},C={key:1,class:"text-success"},O={class:"row justify-content-center ms-0 me-0"};function z(e,t,s,z,P,$){const D=(0,r.up)("LoadingOverlay"),I=(0,r.up)("OrderNav");return(0,r.wg)(),(0,r.iD)(r.HY,null,[(0,r.Wm)(D,{active:P.isLoading},null,8,["active"]),(0,r._)("div",n,[(0,r.Wm)(I,{PageName:P.pageName,class:"orderNav"},null,8,["PageName"]),o,(0,r._)("div",i,[(0,r._)("div",d,[c,(0,r._)("table",u,[_,(0,r._)("tbody",null,[((0,r.wg)(!0),(0,r.iD)(r.HY,null,(0,r.Ko)(P.orderList.products,((e,t)=>((0,r.wg)(),(0,r.iD)("tr",{key:t},[(0,r._)("th",p,(0,a.zw)(e.product.title),1),(0,r._)("td",null,(0,a.zw)(e.qty),1),(0,r._)("td",null,(0,a.zw)(e.total),1)])))),128))]),(0,r._)("tfoot",null,[h,m,(0,r._)("td",null,(0,a.zw)(P.orderList.total),1)])])]),(0,r._)("div",v,[w,(0,r._)("table",g,[(0,r._)("tbody",null,[(0,r._)("tr",null,[b,(0,r._)("td",f,(0,a.zw)(P.orderList.user.name),1)]),(0,r._)("tr",null,[k,(0,r._)("td",null,(0,a.zw)(P.orderList.user.email),1)]),(0,r._)("tr",null,[y,(0,r._)("td",null,(0,a.zw)(P.orderList.user.tel),1)]),(0,r._)("tr",null,[L,(0,r._)("td",null,(0,a.zw)(P.orderList.user.address),1)]),(0,r._)("tr",null,[x,P.orderList.is_paid?((0,r.wg)(),(0,r.iD)("td",C,"已付款")):((0,r.wg)(),(0,r.iD)("td",N," 未付款 "))])])])]),(0,r._)("div",O,[(0,r._)("button",{class:"btn btn-secondary mt-3 col-5 me-1",onClick:t[0]||(t[0]=(0,l.iM)((t=>e.$router.push("/")),["prevent"]))},"稍後進行付款"),(0,r._)("button",{class:"btn btn-danger mt-3 col-5 ms-1",onClick:t[1]||(t[1]=(0,l.iM)(((...e)=>$.payOrder&&$.payOrder(...e)),["prevent"]))},"確認付款")])])])],64)}var P=s(1557),$={data(){return{pageName:"orderchecked",isLoading:!1,orderId:"",orderList:{user:{name:"",email:"",tel:"",address:""}}}},components:{OrderNav:P.Z},inject:["emitter"],methods:{getOrder(){this.isLoading=!0,this.orderId=this.$route.params.orderid;const e=`https://vue3-course-api.hexschool.io/api/flower-api/order/${this.orderId}`;this.$http.get(e).then((e=>{e.data.success&&(this.orderList={...e.data.order},this.isLoading=!1)}))},payOrder(){const e=`https://vue3-course-api.hexschool.io/api/flower-api/pay/${this.orderId}`;this.$http.post(e).then((e=>{e.data.success&&(this.getOrder(),this.$router.push(`/order/${this.orderId}/paid`))}))}},created(){this.getOrder(),this.emitter.emit("judge-page","orderchecked")}},D=s(3744);const I=(0,D.Z)($,[["render",z]]);var j=I}}]);
//# sourceMappingURL=280.babe2a00.js.map