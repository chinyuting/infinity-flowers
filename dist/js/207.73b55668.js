"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[207],{2771:function(e,t){t["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}}}},9864:function(e,t,a){a.d(t,{Z:function(){return v}});var l=a(6252),s=a(3577),d=a(9963);const o={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},r={class:"modal-dialog"},i={class:"modal-content"},n=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"請確認"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),c={class:"modal-body"},p={key:0},m={key:1},u={class:"modal-footer"},h=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function _(e,t,a,_,g,b){return(0,l.wg)(),(0,l.iD)("div",o,[(0,l._)("div",r,[(0,l._)("div",i,[n,(0,l._)("div",c,[(0,l.Uk)(" 是否 "),"logout"===a.dataStatus?((0,l.wg)(),(0,l.iD)("span",p,"登出")):((0,l.wg)(),(0,l.iD)("span",m,"刪除 "+(0,s.zw)(a.dataStatus.title),1)),(0,l.Uk)(" ? ")]),(0,l._)("div",u,[h,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=(0,d.iM)(((...e)=>b.statusConfirmed&&b.statusConfirmed(...e)),["prevent"]))},"確認")])])])],512)}var g=a(7424),b=a.n(g),f=a(2771),w={data(){return{modal:{}}},props:["dataStatus","fromPage"],methods:{statusConfirmed(){"logout"===this.dataStatus&&this.$emit("logout-confirmed"),this.$emit("delete-confirmed",this.dataStatus)}},mixins:[f.Z],mounted(){this.modal=new(b())(this.$refs.modal)}},y=a(3744);const k=(0,y.Z)(w,[["render",_]]);var v=k},2256:function(e,t,a){a.d(t,{Z:function(){return _}});var l=a(6252),s=a(3577),d=a(9963);const o={"aria-label":"Page navigation example"},r={class:"pagination justify-content-center"},i={class:"page-item"},n=["onClick"],c={class:"page-item"};function p(e,t,a,p,m,u){return(0,l.wg)(),(0,l.iD)("nav",o,[(0,l._)("ul",r,[(0,l._)("li",i,[(0,l._)("a",{class:(0,s.C_)(["page-link page-deep",{disabled:!m.tempPage.has_pre}]),href:"#",tabindex:"-1","aria-disabled":"true",onClick:t[0]||(t[0]=(0,d.iM)((e=>u.updatePage(m.tempPage.current_page-1)),["prevent"]))},"上一頁",2)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(m.tempPage.total_pages,(e=>((0,l.wg)(),(0,l.iD)("li",{class:"page-item",key:"page"+e},[(0,l._)("a",{class:(0,s.C_)(["page-link page-deep",{active:e===m.tempPage.current_page}]),href:"#",onClick:(0,d.iM)((t=>u.updatePage(e)),["prevent"])},(0,s.zw)(e),11,n)])))),128)),(0,l._)("li",c,[(0,l._)("a",{class:(0,s.C_)(["page-link page-deep",{disabled:!m.tempPage.has_next}]),href:"#",onClick:t[1]||(t[1]=(0,d.iM)((e=>u.updatePage(m.tempPage.current_page+1)),["prevent"]))},"下一頁",2)])])])}var m={data(){return{tempPage:{}}},props:["pages"],watch:{pages(){this.tempPage=this.pages}},methods:{updatePage(e){this.$emit("emit-page",e)}}},u=a(3744);const h=(0,u.Z)(m,[["render",p]]);var _=h},5207:function(e,t,a){a.r(t),a.d(t,{default:function(){return ce}});var l=a(6252),s=a(3577),d=a(9963);const o={class:"table mt-3 table-hover"},r=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"訂單建立時間"),(0,l._)("th",{scope:"col"},"購買產品"),(0,l._)("th",{scope:"col"},"總價"),(0,l._)("th",{scope:"col"},"訂購人姓名"),(0,l._)("th",{scope:"col"},"送件地址"),(0,l._)("th",{scope:"col"},"付款狀態"),(0,l._)("th",{scope:"col"})])],-1),i={scope:"row"},n={class:"mb-0"},c=(0,l._)("br",null,null,-1),p={key:0,class:"text-danger"},m={key:1,class:"text-success"},u=["onClick"],h=["onClick"];function _(e,t,a,_,g,b){const f=(0,l.up)("LoadingOverlay"),w=(0,l.up)("OrderModal"),y=(0,l.up)("DoubleCheckModal"),k=(0,l.up)("Pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(f,{active:g.isLoading},null,8,["active"]),(0,l._)("div",null,[(0,l._)("table",o,[r,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(g.orderList,(t=>((0,l.wg)(),(0,l.iD)("tr",{key:t.id,class:"align-middle"},[(0,l._)("th",i,(0,s.zw)(e.$filters.date(t.create_at)),1),(0,l._)("td",null,[(0,l._)("ul",n,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(t.products,(e=>((0,l.wg)(),(0,l.iD)("li",{key:e.product.id},[(0,l.Uk)((0,s.zw)(e.product.title),1),c,(0,l.Uk)((0,s.zw)(e.qty)+" "+(0,s.zw)(e.product.unit),1)])))),128))])]),(0,l._)("td",null,(0,s.zw)(t.total),1),(0,l._)("td",null,(0,s.zw)(t.user.name),1),(0,l._)("td",null,(0,s.zw)(t.user.address),1),(0,l._)("td",null,[t.is_paid?((0,l.wg)(),(0,l.iD)("span",m,"完成付款")):((0,l.wg)(),(0,l.iD)("span",p,"未付款"))]),(0,l._)("td",null,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:(0,d.iM)((e=>b.openModal(t)),["prevent"])},"編輯",8,u),(0,l._)("button",{type:"button",class:"btn btn-outline-danger ms-md-1",onClick:(0,d.iM)((e=>{b.openCheckModal(t)}),["prevent"])},"刪除",8,h)])])))),128))])])]),(0,l.Wm)(w,{ref:"orderModal",orderItem:g.tempOrder,onUpdateOrder:b.updateOrder},null,8,["orderItem","onUpdateOrder"]),(0,l.Wm)(y,{ref:"checkModal",dataStatus:g.tempOrder,fromPage:"Order",onDeleteConfirmed:b.deleteOrder},null,8,["dataStatus","onDeleteConfirmed"]),(0,l.Wm)(k,{pages:g.pagination,onEmitPage:b.getOrder},null,8,["pages","onEmitPage"])],64)}const g={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},b={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},w=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"修改訂單")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),y={class:"modal-body"},k={class:"row"},v={class:"col-sm-10"},O={class:"mb-3"},M={for:"title",class:"form-label"},x={class:"row gx-2"},C={class:"mb-3 col-md-12"},D={class:"table"},U=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"產品名稱"),(0,l._)("th",{scope:"col"},"數量"),(0,l._)("th",{scope:"col"},"價格")])],-1),L={key:0},P={key:1,class:"text-success"},$=(0,l._)("td",null,null,-1),z=(0,l._)("td",null,"總價",-1),Z={for:"total",class:"form-label"},S=(0,l._)("hr",null,null,-1),V=(0,l._)("h4",null,"訂購人資料",-1),H={class:"row"},I={class:"mb-3 col-6"},Y={for:"name",class:"form-label w-100"},K={class:"mb-3 col-6"},W={for:"email",class:"form-label w-100"},j={class:"mb-3 col-6"},E={for:"tel",class:"form-label w-100"},q={class:"mb-3 col-6"},T={for:"address",class:"form-label w-100"},A={class:"mb-3"},B={class:"form-check"},F={class:"form-check-label",for:"is_paid"},G={key:0,class:"text-success"},J={key:1,class:"text-danger"},N={class:"modal-footer"},Q=(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function R(e,t,a,o,r,i){return(0,l.wg)(),(0,l.iD)("div",g,[(0,l._)("div",b,[(0,l._)("div",f,[w,(0,l._)("div",y,[(0,l._)("div",k,[(0,l._)("div",v,[(0,l._)("div",O,[(0,l._)("label",M,[(0,l.Uk)("建立時間 "),(0,l.wy)((0,l._)("input",{type:"date",class:"form-control",id:"title",placeholder:"請輸入建立時間","onUpdate:modelValue":t[0]||(t[0]=e=>r.tempOrder.create_at=e)},null,512),[[d.nr,r.tempOrder.create_at]])])]),(0,l._)("div",x,[(0,l._)("div",C,[(0,l.Uk)(" 訂購產品 "),(0,l._)("table",D,[U,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(r.tempOrder.products,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id},[(0,l._)("td",null,(0,s.zw)(e.product.title),1),(0,l._)("td",null,(0,s.zw)(e.qty)+" / "+(0,s.zw)(e.product.unit),1),(0,l._)("td",null,[e.coupon?((0,l.wg)(),(0,l.iD)("span",P,"[優惠價]"+(0,s.zw)(e.final_total),1)):((0,l.wg)(),(0,l.iD)("span",L,(0,s.zw)(e.total),1))])])))),128))]),(0,l._)("tfoot",null,[(0,l._)("tr",null,[$,z,(0,l._)("td",null,[(0,l._)("label",Z,[(0,l.Uk)((0,s.zw)(null)+" "),(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"total",placeholder:"請輸入總價","onUpdate:modelValue":t[1]||(t[1]=e=>r.tempOrder.total=e)},null,512),[[d.nr,r.tempOrder.total]])])])])])])])]),S,V,(0,l._)("div",H,[(0,l._)("div",I,[(0,l._)("label",Y,[(0,l.Uk)("姓名 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"name",placeholder:"請輸入訂購人姓名","onUpdate:modelValue":t[2]||(t[2]=e=>r.tempOrder.user.name=e)},null,512),[[d.nr,r.tempOrder.user.name]])])]),(0,l._)("div",K,[(0,l._)("label",W,[(0,l.Uk)("電子信箱 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"email",placeholder:"請輸入訂購人Email","onUpdate:modelValue":t[3]||(t[3]=e=>r.tempOrder.user.email=e)},null,512),[[d.nr,r.tempOrder.user.email]])])]),(0,l._)("div",j,[(0,l._)("label",E,[(0,l.Uk)("電話 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"tel",placeholder:"請輸入訂購人電話","onUpdate:modelValue":t[4]||(t[4]=e=>r.tempOrder.user.tel=e)},null,512),[[d.nr,r.tempOrder.user.tel]])])]),(0,l._)("div",q,[(0,l._)("label",T,[(0,l.Uk)("送件地址 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"address",placeholder:"請輸入送件地址","onUpdate:modelValue":t[5]||(t[5]=e=>r.tempOrder.user.address=e)},null,512),[[d.nr,r.tempOrder.user.address]])])])]),(0,l._)("div",A,[(0,l._)("div",B,[(0,l._)("label",F,[(0,l.Uk)(" 付款狀態 "),(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox",id:"is_paid","onUpdate:modelValue":t[6]||(t[6]=e=>r.tempOrder.is_paid=e)},null,512),[[d.e8,r.tempOrder.is_paid]]),r.tempOrder.is_paid?((0,l.wg)(),(0,l.iD)("span",G,"已付款")):((0,l.wg)(),(0,l.iD)("span",J,"尚未完成付款"))])])])])])]),(0,l._)("div",N,[Q,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:t[7]||(t[7]=(0,d.iM)((t=>e.$emit("update-order",r.tempOrder)),["prevent"]))},"確認")])])])],512)}var X=a(7424),ee=a.n(X),te=a(2771),ae={data(){return{modal:{},tempOrder:{user:{}}}},props:{orderItem:{type:Object,default(){return{}}}},watch:{orderItem(){this.tempOrder=this.orderItem}},mixins:[te.Z],mounted(){this.modal=new(ee())(this.$refs.modal)}},le=a(3744);const se=(0,le.Z)(ae,[["render",R]]);var de=se,oe=a(9864),re=a(2256),ie={data(){return{orderList:[],tempOrder:{},pagination:{},isLoading:!1}},components:{OrderModal:de,DoubleCheckModal:oe.Z,Pagination:re.Z},inject:["emitter"],methods:{getOrder(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/flower-api/admin/orders?page=${e}`;this.$http.get(t).then((e=>{this.orderList=e.data.orders,this.pagination=e.data.pagination,this.isLoading=!1})).catch((e=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:e.response.data})}))},deleteOrder(e){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/flower-api/admin/order/${e.id}`;this.$http.delete(t).then((e=>{e.data.success&&(this.isLoading=!1,this.getOrder(),this.$refs.checkModal.hideModal(),this.emitter.emit("push-message",{style:"success",title:e.data.message}))})).catch((e=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:e.response.data})}))},updateOrder(e){this.isLoading=!0,this.tempOrder=e,this.tempOrder.create_at=Math.floor(new Date(e.create_at).getTime()/1e3);const t=`https://vue3-course-api.hexschool.io/api/flower-api/admin/order/${e.id}`;this.$http.put(t,{data:e}).then((e=>{e.data.success?(this.isLoading=!1,this.$refs.orderModal.hideModal(),this.emitter.emit("push-message",{style:"success",title:e.data.message}),this.getOrder()):this.emitter.emit("push-message",{style:"danger",title:e.data.message})})).catch((e=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:e.response.data})}))},openModal(e){this.tempOrder={...e},this.tempOrder.create_at=this.$filters.date(this.tempOrder.create_at),this.$refs.orderModal.showModal()},openCheckModal(e){this.tempOrder={...e},this.$refs.checkModal.showModal()}},created(){this.getOrder()},mounted(){this.emitter.emit("dash-change",{data:"ordermanage"})}};const ne=(0,le.Z)(ie,[["render",_]]);var ce=ne}}]);
//# sourceMappingURL=207.73b55668.js.map