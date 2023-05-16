"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[729],{5830:function(e,a){a["Z"]={inject:["emitter"],methods:{getCarts(){this.isLoading=!0;const e="https://vue3-course-api.hexschool.io/api/flower-api/cart";this.$http.get(e).then((e=>{e.data.success&&(this.cartqty=0,this.isLoading=!1,this.CartList=e.data.data,this.cartLength=e.data.data.carts.length,e.data.data.carts.forEach((e=>{this.cartqty+=e.qty})),this.emitter.emit("push-Cartnotice",{data:this.cartLength,category:"cart"}))}))}}}},9939:function(e,a,s){s.d(a,{Z:function(){return k}});var t=s(6252),l=s(3577);const i={class:"mt-2"},r={class:"nav justify-content-center"},o={class:"nav-item"},n={class:"nav-link orderNav text-dark"},d=(0,t._)("span",null,"購物車",-1),c={class:"nav-item"},u={class:"nav-link orderNav text-dark"},m=(0,t._)("span",null,"建立訂單",-1),p={class:"nav-item"},h={class:"nav-link orderNav text-dark"},b=(0,t._)("span",null,"訂單確認",-1),_={class:"nav-item"},f={class:"nav-link orderNav text-dark"},g=(0,t._)("span",null,"訂單完成",-1);function v(e,a,s,v,x,y){return(0,t.wg)(),(0,t.iD)("div",i,[(0,t._)("ul",r,[(0,t._)("li",o,[(0,t._)("p",n,[(0,t._)("i",{class:(0,l.C_)(["bi bi-flower3","cart"===s.PageName?"orderNav-icon":"text-secondary"])},null,2),d])]),(0,t._)("li",c,[(0,t._)("p",u,[(0,t._)("i",{class:(0,l.C_)(["bi bi-flower3","order"===s.PageName?"orderNav-icon":"text-secondary"])},null,2),m])]),(0,t._)("li",p,[(0,t._)("p",h,[(0,t._)("i",{class:(0,l.C_)(["bi bi-flower3","orderChecked"===s.PageName?"orderNav-icon":"text-secondary"])},null,2),b])]),(0,t._)("li",_,[(0,t._)("p",f,[(0,t._)("i",{class:(0,l.C_)(["bi bi-flower3","orderCompleted"===s.PageName?"orderNav-icon":"text-secondary"])},null,2),g])])])])}var x={data(){return{isPage:""}},props:["PageName"]},y=s(3744);const C=(0,y.Z)(x,[["render",v]]);var k=C},8729:function(e,a,s){s.r(a),s.d(a,{default:function(){return ce}});var t=s(6252),l=s(9963),i=s(3577);const r={class:"container"},o=(0,t._)("h3",{class:"orderNavDetail"},[(0,t._)("i",{class:"bi bi-flower3 text-light-color"}),(0,t._)("span",{class:"text-deep-color"},"建立訂單")],-1),n=(0,t._)("i",{class:"bi bi-arrow-left"},null,-1),d={class:"col-lg-6 mt-4 mx-auto"},c={class:"card-body"},u=(0,t._)("h4",null,[(0,t._)("span",{class:"enphasis"},"訂購人資料")],-1),m={class:"ms-2"},p={class:"input-group mb-3"},h=(0,t._)("span",{class:"input-group-text input-required"},"訂購人姓名",-1),b={class:"input-group mb-3"},_=(0,t._)("span",{class:"input-group-text input-required"},"訂購人信箱",-1),f={class:"input-group mb-3"},g=(0,t._)("span",{class:"input-group-text input-required"},"訂購人電話",-1),v=(0,t._)("hr",null,null,-1),x=(0,t._)("h4",null,[(0,t._)("span",{class:"enphasis"},"收件人資料")],-1),y={class:"ms-2"},C={class:"form-check"},k={class:"form-check-label",for:"flexSwitchCheckDefault"},w={class:"input-group mb-3"},N=(0,t._)("span",{class:"input-group-text input-required"},"收件人姓名",-1),V={class:"input-group mb-3"},q=(0,t._)("span",{class:"input-group-text input-required"},"收件人信箱",-1),D={class:"input-group mb-3"},W=(0,t._)("span",{class:"input-group-text input-required"},"收件人電話",-1),U=(0,t._)("hr",null,null,-1),S=(0,t._)("h4",null,[(0,t._)("span",{class:"enphasis"},"送件資訊")],-1),L={class:"ms-2"},P={class:"input-group mb-3"},$=(0,t._)("span",{class:"input-group-text input-required"},"送件地址",-1),z=(0,t._)("hr",null,null,-1),Z=(0,t._)("h4",null,[(0,t._)("span",{class:"enphasis"},"想對我們說的話")],-1),E={class:"input-group ms-2"},O=(0,t._)("span",{class:"input-group-text"},"留言給我們",-1),T={class:"col-lg-5 mt-4 mx-auto"},j=(0,t._)("h4",null,[(0,t._)("span",{class:"enphasis"},"訂單明細")],-1),A={class:"table"},I=(0,t._)("thead",null,[(0,t._)("tr",null,[(0,t._)("th",{scope:"col"},"商品"),(0,t._)("th",{scope:"col"},"數量"),(0,t._)("th",{scope:"col"},"價格")])],-1),M={scope:"row"},H={key:0,class:"text-success"},K={class:"align-middle"},Y={class:"align-middle"},B={class:"text-end"},F=(0,t._)("span",{class:"d-inline-block price-label"},"總價",-1),G={class:"w-25 d-inline-block"},J={key:0,class:"text-success text-end"},Q=(0,t._)("span",{class:"d-inline-block price-label"},"優惠價",-1),R={class:"w-25 d-inline-block"},X={class:"input-group my-3"},ee=(0,t._)("i",{class:"bi bi-flower3 text-warning"},null,-1),ae=(0,t._)("span",null,"套用優惠券",-1),se=[ee,ae],te=["disabled"];function le(e,a,s,ee,ae,le){const ie=(0,t.up)("OrderNav"),re=(0,t.up)("v-field"),oe=(0,t.up)("error-message"),ne=(0,t.up)("v-form");return(0,t.wg)(),(0,t.iD)("div",r,[(0,t.Wm)(ie,{PageName:ae.pageName,class:"orderNav"},null,8,["PageName"]),o,(0,t._)("button",{class:"btn btn-light",type:"button",onClick:a[0]||(a[0]=(0,l.iM)(((...e)=>le.goCart&&le.goCart(...e)),["prevent"]))},[n,(0,t.Uk)("返回購物車 ")]),(0,t.Wm)(ne,{class:"row mb-5",onSubmit:le.creatOrder},{default:(0,t.w5)((({errors:e})=>[(0,t._)("div",d,[(0,t._)("div",c,[u,(0,t._)("div",m,[(0,t._)("div",p,[h,(0,t.Wm)(re,{type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["訂購人姓名"]}]),name:"訂購人姓名",placeholder:"Name","aria-label":"Name","aria-describedby":"basic-addon1",modelValue:ae.form.user.name,"onUpdate:modelValue":a[1]||(a[1]=e=>ae.form.user.name=e),rules:"required"},null,8,["modelValue","class"]),(0,t.Wm)(oe,{name:"訂購人姓名",class:"invalid-feedback"})]),(0,t._)("div",b,[_,(0,t.Wm)(re,{type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["訂購人信箱"]}]),name:"訂購人信箱",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",modelValue:ae.form.user.email,"onUpdate:modelValue":a[2]||(a[2]=e=>ae.form.user.email=e),rules:"email|required"},null,8,["modelValue","class"]),(0,t.Wm)(oe,{name:"訂購人信箱",class:"invalid-feedback"})]),(0,t._)("div",f,[g,(0,t.Wm)(re,{type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["訂購人電話"]}]),name:"訂購人電話",placeholder:"Tel","aria-label":"Tel","aria-describedby":"basic-addon1",modelValue:ae.form.user.tel,"onUpdate:modelValue":a[3]||(a[3]=e=>ae.form.user.tel=e),onClick:a[4]||(a[4]=e=>ae.tel="訂購人"),rules:le.isPhone},null,8,["modelValue","class","rules"]),(0,t.Wm)(oe,{name:"訂購人電話",class:"invalid-feedback"})])]),v,x,(0,t._)("div",y,[(0,t._)("div",C,[(0,t._)("label",k,[(0,t.Uk)("同訂購人資料 "),(0,t.wy)((0,t._)("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault","onUpdate:modelValue":a[5]||(a[5]=e=>ae.sameData=e)},null,512),[[l.e8,ae.sameData]])])]),(0,t._)("div",null,[(0,t._)("div",w,[N,(0,t.Wm)(re,{type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["收件人姓名"]}]),name:"收件人姓名",placeholder:"Name","aria-label":"Name","aria-describedby":"basic-addon1",modelValue:ae.form.addressee.name,"onUpdate:modelValue":a[6]||(a[6]=e=>ae.form.addressee.name=e),disabled:ae.sameData,rules:"required"},null,8,["modelValue","disabled","class"]),(0,t.Wm)(oe,{name:"收件人姓名",class:"invalid-feedback"})]),(0,t._)("div",V,[q,(0,t.Wm)(re,{type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["收件人信箱"]}]),name:"收件人信箱",placeholder:"Email","aria-label":"Email","aria-describedby":"basic-addon1",modelValue:ae.form.addressee.email,"onUpdate:modelValue":a[7]||(a[7]=e=>ae.form.addressee.email=e),disabled:ae.sameData,rules:"email|required"},null,8,["modelValue","disabled","class"]),(0,t.Wm)(oe,{name:"收件人信箱",class:"invalid-feedback"})]),(0,t._)("div",D,[W,(0,t.Wm)(re,{type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["收件人電話"]}]),name:"收件人電話",placeholder:"Tel","aria-label":"Tel","aria-describedby":"basic-addon1",modelValue:ae.form.addressee.tel,"onUpdate:modelValue":a[8]||(a[8]=e=>ae.form.addressee.tel=e),disabled:ae.sameData,onClick:a[9]||(a[9]=e=>ae.tel="收件人"),rules:le.isPhone},null,8,["modelValue","disabled","class","rules"]),(0,t.Wm)(oe,{name:"收件人電話",class:"invalid-feedback"})])])]),U,S,(0,t._)("div",L,[(0,t.Uk)(" [僅提供宅配服務] "),(0,t._)("div",P,[$,(0,t.Wm)(re,{type:"text",class:(0,i.C_)(["form-control",{"is-invalid":e["送件地址"]}]),name:"送件地址",placeholder:"Address","aria-label":"Address","aria-describedby":"basic-addon1",modelValue:ae.form.user.address,"onUpdate:modelValue":a[10]||(a[10]=e=>ae.form.user.address=e),rules:"required"},null,8,["modelValue","class"]),(0,t.Wm)(oe,{name:"送件地址",class:"invalid-feedback"})])]),z,Z,(0,t._)("div",E,[O,(0,t.wy)((0,t._)("textarea",{class:"form-control","aria-label":"With textarea","onUpdate:modelValue":a[11]||(a[11]=e=>ae.form.message=e)},null,512),[[l.nr,ae.form.message]])])])]),(0,t._)("div",T,[j,(0,t._)("table",A,[I,(0,t._)("tbody",null,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(ae.CartList.carts,((e,a)=>((0,t.wg)(),(0,t.iD)("tr",{key:a},[(0,t._)("th",M,[(0,t._)("div",null,(0,i.zw)(e.product.title),1),e.coupon?((0,t.wg)(),(0,t.iD)("div",H,"已使用優惠券")):(0,t.kq)("",!0)]),(0,t._)("td",K,(0,i.zw)(e.qty)+" /"+(0,i.zw)(e.product.unit),1),(0,t._)("td",Y,(0,i.zw)(e.total),1)])))),128))])]),(0,t._)("h5",B,[F,(0,t._)("span",G,(0,i.zw)(ae.CartList.total),1)]),ae.CartList.final_total!==ae.CartList.total?((0,t.wg)(),(0,t.iD)("h5",J,[Q,(0,t._)("span",R,(0,i.zw)(parseInt(ae.CartList.final_total)),1)])):(0,t.kq)("",!0),(0,t._)("div",X,[(0,t.wy)((0,t._)("input",{type:"text",class:"form-control",placeholder:"輸入優惠代碼","aria-label":"Coupon","aria-describedby":"basic-addon1","onUpdate:modelValue":a[12]||(a[12]=e=>ae.coupon.couponCode=e)},null,512),[[l.nr,ae.coupon.couponCode]]),(0,t._)("button",{class:"btn btn-outline-secondary",type:"button",id:"button-addon2",onClick:a[13]||(a[13]=(0,l.iM)(((...e)=>le.addCoupon&&le.addCoupon(...e)),["prevent"]))},se)]),(0,t._)("button",{type:"submit",class:"btn w-100 mt-2 button-light-color",disabled:Object.keys(e).length>0||ae.loadingState},"確認訂單",8,te)])])),_:1},8,["onSubmit"])])}s(7658);var ie=s(9939),re=s(5830),oe={data(){return{pageName:"order",CartList:[],loadingState:!1,coupon:{couponCode:"",couponState:!1},form:{user:{name:"",email:"",tel:"",address:""},addressee:{name:"",email:"",tel:""},message:""},sameData:!1,tel:""}},components:{OrderNav:ie.Z},watch:{sameData(){this.sameData?this.form.addressee=this.form.user:this.form.addressee={}}},methods:{isPhone(e){if(!e)return`${this.tel}電話為必填`;const a=/^(09)[0-9]{8}$/;return!!a.test(e)||"需要輸入正確電話格式 09xxxxxxxx"},creatOrder(){const e="https://vue3-course-api.hexschool.io/api/flower-api/order";this.$http.post(e,{data:this.form}).then((e=>{e.data.success&&(this.$router.push(`/order/${e.data.orderId}`),this.getCarts())})).catch((e=>{this.emitter.emit("push-message",{style:"danger",title:e.response.data})}))},addCoupon(){this.loadingState=!0;const e="https://vue3-course-api.hexschool.io/api/flower-api/coupon",a={code:this.coupon.couponCode};this.$http.post(e,{data:a}).then((e=>{e.data.success?(this.coupon.couponState=!0,this.loadingState=!1,this.getCarts(),this.emitter.emit("push-message",{style:"success",title:e.data.message})):(this.coupon.couponState=!1,this.emitter.emit("push-message",{style:"danger",title:e.data.message}))})).catch((e=>{this.coupon.couponState=!1,this.emitter.emit("push-message",{style:"danger",title:e.response.data})}))},goCart(){this.$router.push("/cart")}},mixins:[re.Z],created(){this.getCarts()}},ne=s(3744);const de=(0,ne.Z)(oe,[["render",le]]);var ce=de}}]);
//# sourceMappingURL=729.20e81c42.js.map