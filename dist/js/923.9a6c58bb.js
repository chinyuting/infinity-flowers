"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[923],{2771:function(e,t){t["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}}}},6876:function(e,t,a){a.d(t,{Z:function(){return y}});var o=a(6252),s=a(3577),l=a(9963);const n={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},i={class:"modal-dialog"},d={class:"modal-content"},p=(0,o._)("div",{class:"modal-header"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},"請確認"),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),c={class:"modal-body"},u={key:0},r={key:1},m={class:"modal-footer"},h=(0,o._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function g(e,t,a,g,_,b){return(0,o.wg)(),(0,o.iD)("div",n,[(0,o._)("div",i,[(0,o._)("div",d,[p,(0,o._)("div",c,[(0,o.Uk)(" 是否"),"logout"===a.dataStatus?((0,o.wg)(),(0,o.iD)("span",u,"登出")):((0,o.wg)(),(0,o.iD)("span",r,"刪除 "+(0,s.zw)(a.dataStatus.title),1)),(0,o.Uk)("? ")]),(0,o._)("div",m,[h,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:t[0]||(t[0]=(0,l.iM)(((...e)=>b.statusConfirmed&&b.statusConfirmed(...e)),["prevent"]))},"確認")])])])],512)}var _=a(7424),b=a.n(_),f=a(2771),v={data(){return{modal:{}}},props:["dataStatus","fromPage"],methods:{statusConfirmed(){"logout"===this.dataStatus&&this.$emit("logout-confirmed"),this.$emit("delete-confirmed",this.dataStatus)}},mixins:[f.Z],mounted(){this.modal=new(b())(this.$refs.modal)}},C=a(3744);const w=(0,C.Z)(v,[["render",g]]);var y=w},7250:function(e,t,a){a.d(t,{Z:function(){return g}});var o=a(6252),s=a(3577),l=a(9963);const n={"aria-label":"Page navigation example"},i={class:"pagination justify-content-center"},d={class:"page-item"},p=["onClick"],c={class:"page-item"};function u(e,t,a,u,r,m){return(0,o.wg)(),(0,o.iD)("nav",n,[(0,o._)("ul",i,[(0,o._)("li",d,[(0,o._)("a",{class:(0,s.C_)(["page-link",{disabled:!r.temppage.has_pre}]),href:"#",tabindex:"-1","aria-disabled":"true",onClick:t[0]||(t[0]=(0,l.iM)((e=>m.updatePage(r.temppage.current_page-1)),["prevent"]))},"上一頁",2)]),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(r.temppage.total_pages,((e,t)=>((0,o.wg)(),(0,o.iD)("li",{class:"page-item",key:t},[(0,o._)("a",{class:(0,s.C_)(["page-link",{active:e===r.temppage.current_page}]),href:"#",onClick:(0,l.iM)((t=>m.updatePage(e)),["prevent"])},(0,s.zw)(e),11,p)])))),128)),(0,o._)("li",c,[(0,o._)("a",{class:(0,s.C_)(["page-link",{disabled:!r.temppage.has_next}]),href:"#",onClick:t[1]||(t[1]=(0,l.iM)((e=>m.updatePage(r.temppage.current_page+1)),["prevent"]))},"下一頁",2)])])])}var r={data(){return{temppage:{}}},props:["pages"],watch:{pages(){this.temppage=this.pages}},methods:{updatePage(e){this.$emit("emit-page",e)}}},m=a(3744);const h=(0,m.Z)(r,[["render",u]]);var g=h},2923:function(e,t,a){a.r(t),a.d(t,{default:function(){return G}});var o=a(6252),s=a(9963),l=a(3577);const n={class:"table mt-3 table-hover"},i=(0,o._)("thead",null,[(0,o._)("tr",null,[(0,o._)("th",{scope:"col"},"名稱"),(0,o._)("th",{scope:"col"},"折扣百分比"),(0,o._)("th",{scope:"col"},"到期日"),(0,o._)("th",{scope:"col"},"折扣碼"),(0,o._)("th",{scope:"col"},"是否啟用"),(0,o._)("th",{scope:"col"})])],-1),d={scope:"row"},p={key:0,class:"text-success"},c={key:1,class:"text-muted"},u=["onClick"],r=["onClick"];function m(e,t,a,m,h,g){const _=(0,o.up)("LoadingOverlay"),b=(0,o.up)("CouponModal"),f=(0,o.up)("checkModal"),v=(0,o.up)("Pagination");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o.Wm)(_,{active:h.isLoading},null,8,["active"]),(0,o._)("div",null,[(0,o._)("button",{type:"button",class:"btn btn-secondary w-100",onClick:t[0]||(t[0]=(0,s.iM)((e=>g.openModal(!0)),["prevent"]))},"+新增優惠券")]),(0,o._)("div",null,[(0,o._)("table",n,[i,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(h.couponList,((t,a)=>((0,o.wg)(),(0,o.iD)("tr",{key:a,class:"align-middle"},[(0,o._)("th",d,(0,l.zw)(t.title),1),(0,o._)("td",null,(0,l.zw)(t.percent),1),(0,o._)("td",null,(0,l.zw)(e.$filters.date(t.due_date)),1),(0,o._)("td",null,(0,l.zw)(t.code),1),(0,o._)("td",null,[t.is_enabled?((0,o.wg)(),(0,o.iD)("span",p,"已啟用")):((0,o.wg)(),(0,o.iD)("span",c,"未啟用"))]),(0,o._)("td",null,[(0,o._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:(0,s.iM)((e=>g.openModal(!1,t)),["prevent"])},"編輯",8,u),(0,o._)("button",{type:"button",class:"btn btn-outline-danger ms-md-1",onClick:(0,s.iM)((e=>{g.openCheckModal(t)}),["prevent"])},"刪除",8,r)])])))),128))])])]),(0,o.Wm)(b,{ref:"couponModal",CouponItem:h.tempCoupon,onUpdateCoupon:g.updateCoupon},null,8,["CouponItem","onUpdateCoupon"]),(0,o.Wm)(f,{ref:"checkModal",dataStatus:h.tempCoupon,fromPage:"Coupon",onDeleteConfirmed:g.deleteCoupon},null,8,["dataStatus","onDeleteConfirmed"]),(0,o.Wm)(v,{pages:h.pagination,onEmitPage:g.getCoupon},null,8,["pages","onEmitPage"])],64)}const h={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},g={class:"modal-dialog modal-xl",role:"document"},_={class:"modal-content border-0"},b=(0,o._)("div",{class:"modal-header bg-dark text-white"},[(0,o._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,o._)("span",null,"新增優惠券")]),(0,o._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f={class:"modal-body"},v={class:"row"},C={class:"col-sm-12"},w={class:"mb-3"},y={for:"title",class:"form-label w-100"},k={class:"row gx-2"},M={class:"mb-3 col-md-6"},x={for:"category",class:"form-label w-100"},$={class:"mb-3 col-md-6"},L={for:"price",class:"form-label w-100"},D={class:"row gx-2"},U={class:"mb-3 col-md-6"},P={for:"origin_price",class:"form-label w-100"},Z=(0,o._)("hr",null,null,-1),S={class:"mb-3"},z={class:"form-check"},I={class:"form-check-label",for:"is_enabled"},V={class:"modal-footer"},j=(0,o._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal"},"取消 ",-1);function W(e,t,a,l,n,i){return(0,o.wg)(),(0,o.iD)("div",h,[(0,o._)("div",g,[(0,o._)("div",_,[b,(0,o._)("div",f,[(0,o._)("div",v,[(0,o._)("div",C,[(0,o._)("div",w,[(0,o._)("label",y,[(0,o.Uk)("優惠券名稱 "),(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入名稱","onUpdate:modelValue":t[0]||(t[0]=e=>n.temp.title=e)},null,512),[[s.nr,n.temp.title]])])]),(0,o._)("div",k,[(0,o._)("div",M,[(0,o._)("label",x,[(0,o.Uk)("優惠百分比 "),(0,o.wy)((0,o._)("input",{type:"number",class:"form-control",id:"category",placeholder:"請輸入百分比","onUpdate:modelValue":t[1]||(t[1]=e=>n.temp.percent=e)},null,512),[[s.nr,n.temp.percent]])])]),(0,o._)("div",$,[(0,o._)("label",L,[(0,o.Uk)("優惠截止日 "),(0,o.wy)((0,o._)("input",{type:"date",class:"form-control",id:"unit",placeholder:"請輸入截止日期","onUpdate:modelValue":t[2]||(t[2]=e=>n.temp.due_date=e)},null,512),[[s.nr,n.temp.due_date]])])])]),(0,o._)("div",D,[(0,o._)("div",U,[(0,o._)("label",P,[(0,o.Uk)("優惠券代碼 "),(0,o.wy)((0,o._)("input",{type:"text",class:"form-control",id:"origin_price",placeholder:"請輸入代碼","onUpdate:modelValue":t[3]||(t[3]=e=>n.temp.code=e)},null,512),[[s.nr,n.temp.code]])])])]),Z,(0,o._)("div",S,[(0,o._)("div",z,[(0,o._)("label",I,[(0,o.Uk)(" 是否啟用 "),(0,o.wy)((0,o._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":t[4]||(t[4]=e=>n.temp.is_enabled=e)},null,512),[[s.e8,n.temp.is_enabled]])])])])])])]),(0,o._)("div",V,[j,(0,o._)("button",{type:"button",class:"btn btn-primary",onClick:t[5]||(t[5]=(0,s.iM)((t=>e.$emit("update-coupon",n.temp)),["prevent"]))},"確認")])])])],512)}var H=a(7424),N=a.n(H),Y=a(2771),E={data(){return{modal:{},temp:{}}},props:{CouponItem:{type:Object,default(){return{}}}},watch:{CouponItem(){this.temp=this.CouponItem}},mixins:[Y.Z],mounted(){this.modal=new(N())(this.$refs.modal)}},K=a(3744);const O=(0,K.Z)(E,[["render",W]]);var T=O,q=a(6876),A=a(7250),B={data(){return{couponList:[],pagination:{},tempCoupon:{},isNew:!1,isLoading:!1}},components:{CouponModal:T,checkModal:q.Z,Pagination:A.Z},inject:["emitter"],methods:{getCoupon(e=1){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/flower-api/admin/coupons?page=${e}`;this.$http.get(t).then((e=>{this.couponList=e.data.coupons,this.pagination=e.data.pagination,this.isLoading=!1}))},openModal(e,t){e?this.tempCoupon={is_enabled:0}:(this.tempCoupon={...t},this.tempCoupon.due_date=this.$filters.date(this.tempCoupon.due_date)),this.isNew=e,this.$refs.couponModal.showModal()},openCheckModal(e){this.tempCoupon={...e},this.$refs.checkModal.showModal()},updateCoupon(e){this.isLoading=!0,this.tempCoupon=e,this.tempCoupon.due_date=Math.floor(new Date(e.due_date).getTime()/1e3);let t="https://vue3-course-api.hexschool.io/api/flower-api/admin/coupon",a="post";this.isNew||(t=`https://vue3-course-api.hexschool.io/api/flower-api/admin/coupon/${e.id}`,a="put"),this.$http[a](t,{data:e}).then((e=>{e.data.success?(this.isLoading=!1,this.tempCoupon={},this.getCoupon(),this.$refs.couponModal.hideModal(),this.emitter.emit("push-message",{style:"success",title:e.data.message})):this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:e.data.message.join("、")})}))},deleteCoupon(e){this.isLoading=!0;const t=`https://vue3-course-api.hexschool.io/api/flower-api/admin/coupon/${e.id}`;this.$http.delete(t).then((e=>{e.data.success&&(this.isLoading=!1,this.getCoupon(),this.$refs.checkModal.hideModal(),this.emitter.emit("push-message",{style:"success",title:e.data.message}))}))}},created(){this.getCoupon()},mounted(){this.emitter.emit("dash-change",{data:"couponmanage"})}};const F=(0,K.Z)(B,[["render",m]]);var G=F}}]);
//# sourceMappingURL=923.9a6c58bb.js.map