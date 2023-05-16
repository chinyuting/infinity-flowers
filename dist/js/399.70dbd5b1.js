"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[399],{5830:function(t,a){a["Z"]={inject:["emitter"],methods:{getCarts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/flower-api/cart";this.$http.get(t).then((t=>{t.data.success&&(this.cartqty=0,this.isLoading=!1,this.CartList=t.data.data,this.cartLength=t.data.data.carts.length,t.data.data.carts.forEach((t=>{this.cartqty+=t.qty})),this.emitter.emit("push-Cartnotice",{data:this.cartLength,category:"cart"}))}))}}}},2497:function(t,a){a["Z"]={methods:{getFavorite(){if(localStorage.getItem("favoriteItem")){const t=localStorage.getItem("favoriteItem");this.idList=JSON.parse(t),this.favoriteLength=this.idList.length}else this.idList=[],this.cartLength=0,console.log(this.favoriteLength);this.emitter.emit("push-Favnotice",{data:this.favoriteLength,category:"cart"})}}}},2399:function(t,a,e){e.r(a),e.d(a,{default:function(){return Ft}});var i=e(6252);function s(t,a,e,s,o,n){const l=(0,i.up)("FontNavbar"),r=(0,i.up)("router-view"),c=(0,i.up)("FontFooter");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(l),(0,i.Wm)(r),(0,i.Wm)(c)],64)}var o=e(3577),n=e(9963),l=e(4427);const r={class:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},c={class:"container-fluid"},d=(0,i._)("a",{class:"navbar-bran",href:"#"},[(0,i._)("img",{alt:"Infinity Flowers logo",src:l,width:"100"})],-1),h={class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":".FontNavbarNav","aria-controls":"FontNavbarNav","aria-expanded":"false","aria-label":"Toggle navigation",ref:"navbarToggler"},u=(0,i._)("span",{class:"navbar-toggler-icon"},null,-1),g=[u],p={class:"collapse navbar-collapse FontNavbarNav"},v={class:"navbar-nav me-auto mb-2 mb-lg-0 justify-content-center text-center"},m={class:"nav-item"},b={class:"nav-item"},_={class:"nav-item"},C={class:"nav-item"},f={class:"nav-item"},w={class:"navbar align-middle member-function me-lg-3"},k={class:"navbar-nav flex-row"},y={class:"nav-item"},L=(0,i._)("i",{class:"bi bi-heart nav-icon"},null,-1),N={class:"nav-item"},M=(0,i._)("i",{class:"bi bi-cart3 nav-icon"},null,-1);function x(t,a,e,s,l,u){const x=(0,i.up)("router-link"),F=(0,i.up)("CartModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i._)("nav",r,[(0,i._)("div",c,[d,(0,i._)("button",h,g,512),(0,i._)("div",p,[(0,i._)("ul",v,[(0,i._)("li",m,[(0,i.Wm)(x,{to:"/",class:(0,o.C_)(["nav-link homeNav-item","home"===l.pageNow?"homeNav-active":""]),onClick:(0,n.iM)(u.closeNav,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Uk)(" 首頁 ")])),_:1},8,["onClick","class"])]),(0,i._)("li",b,[(0,i.Wm)(x,{to:"/products",class:(0,o.C_)(["nav-link homeNav-item","products"===l.pageNow?"homeNav-active":""]),onClick:(0,n.iM)(u.closeNav,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Uk)(" 產品 ")])),_:1},8,["onClick","class"])]),(0,i._)("li",_,[(0,i.Wm)(x,{to:"/orderSearch",class:(0,o.C_)(["nav-link homeNav-item","orderSearch"===l.pageNow?"homeNav-active":""]),onClick:[(0,n.iM)(u.closeNav,["prevent"]),a[0]||(a[0]=t=>u.pageChange("orderSearch"))]},{default:(0,i.w5)((()=>[(0,i.Uk)(" 訂單查詢 ")])),_:1},8,["onClick","class"])]),(0,i._)("li",C,[(0,i.Wm)(x,{to:"/QA",class:(0,o.C_)(["nav-link homeNav-item","QA"===l.pageNow?"homeNav-active":""]),onClick:[(0,n.iM)(u.closeNav,["prevent"]),a[1]||(a[1]=t=>u.pageChange("QA"))]},{default:(0,i.w5)((()=>[(0,i.Uk)(" 常見問題 ")])),_:1},8,["onClick","class"])]),(0,i._)("li",f,[(0,i.Wm)(x,{to:"/dashboard/productmanage",class:"nav-link homeNav-item",onClick:(0,n.iM)(u.closeNav,["prevent"])},{default:(0,i.w5)((()=>[(0,i.Uk)(" 管理員登入 ")])),_:1},8,["onClick"])])])]),(0,i._)("div",w,[(0,i._)("ul",k,[(0,i._)("li",y,[(0,i._)("span",null,[(0,i._)("a",{href:"#",title:"收藏",onClick:a[2]||(a[2]=(0,n.iM)(((...t)=>u.goToFavorites&&u.goToFavorites(...t)),["prevent"]))},[L,(0,i.Uk)((0,o.zw)(null))])]),(0,i._)("span",{class:(0,o.C_)(["notice",0!==l.favoriteLength?"notice-visible":"notice-hide"])},(0,o.zw)(l.favoriteLength),3)]),(0,i._)("li",N,[(0,i._)("span",null,[(0,i._)("a",{href:"#",title:"購物車",onClick:a[3]||(a[3]=(0,n.iM)(((...t)=>u.openCart&&u.openCart(...t)),["prevent"]))},[M,(0,i.Uk)((0,o.zw)(null))])]),(0,i._)("span",{class:(0,o.C_)(["notice",0!==l.cartLength?"notice-visible":"notice-hide"])},(0,o.zw)(l.cartLength),3)])])])])]),(0,i.Wm)(F,{ref:"cart"},null,512)],64)}e(7658);const F={class:"modal fade cartModal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},S={class:"modal-dialog modal-dialog-scrollable cartModal-dialog"},D={class:"modal-content cartModal-content"},U=(0,i._)("div",{class:"modal-header"},[(0,i._)("h5",{class:"modal-title",id:"exampleModalLabel"},"購物車"),(0,i._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={key:0,class:"modal-body p-5 text-center"},I=(0,i._)("h3",null,"購物車目前沒有東西",-1),$=(0,i._)("br",null,null,-1),W={key:1,class:"modal-body"},Z={class:"d-flex"},V={class:"cartCard-img me-1 ps-0"},T=["src","alt"],z={class:"col-6 m-auto"},j={class:"card-title"},H={class:"input-group"},O=["onClick","disabled"],Y={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},A=(0,i._)("span",{class:"visually-hidden"},"Loading...",-1),P=[A],Q={key:1},E=(0,i._)("i",{class:"bi bi-dash"},null,-1),J=[E],K=["onUpdate:modelValue","onChange"],B=["onClick","disabled"],G={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},R=(0,i._)("span",{class:"visually-hidden"},"Loading...",-1),X=[R],tt={key:1},at=(0,i._)("i",{class:"bi bi-plus"},null,-1),et=[at],it=["onClick"],st=(0,i._)("i",{class:"bi bi-trash3-fill"},null,-1),ot=[st],nt={key:2,class:"modal-footer p-0 b-0"};function lt(t,a,e,s,l,r){const c=(0,i.up)("LoadingOverlay");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(c,{active:l.isLoading},null,8,["active"]),(0,i._)("div",F,[(0,i._)("div",S,[(0,i._)("div",D,[U,0==l.cartLength?((0,i.wg)(),(0,i.iD)("div",q,[I,(0,i.Uk)(),$,(0,i._)("button",{type:"button",class:"btn button-light-color mt-3",onClick:a[0]||(a[0]=(0,n.iM)(((...t)=>r.toProductView&&r.toProductView(...t)),["prevent"]))},"馬上逛逛")])):((0,i.wg)(),(0,i.iD)("div",W,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(l.CartList.carts,((t,a)=>((0,i.wg)(),(0,i.iD)("div",{class:"card mb-1",key:"cart"+a},[(0,i._)("div",Z,[(0,i._)("div",V,[(0,i._)("img",{src:t.product.imageUrl,class:"card-img-top",alt:t.product.title},null,8,T)]),(0,i._)("div",z,[(0,i._)("h5",j,(0,o.zw)(t.product.title),1),(0,i._)("div",H,[(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:(0,n.iM)((a=>r.refreshCart(t,t.qty-1)),["prevent"]),disabled:1===t.qty||l.loadingStatus&&t.product_id===l.updateCartId},[l.loadingStatus&&t.product_id===l.updateCartId?((0,i.wg)(),(0,i.iD)("div",Y,P)):((0,i.wg)(),(0,i.iD)("span",Q,J))],8,O),(0,i.wy)((0,i._)("input",{type:"text",class:"form-control",placeholder:"請輸入數量","aria-label":"qty","onUpdate:modelValue":a=>t.qty=a,onChange:(0,n.iM)((a=>r.refreshCart(t,t.qty)),["prevent"])},null,40,K),[[n.nr,t.qty]]),(0,i._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:(0,n.iM)((a=>r.refreshCart(t,t.qty+1)),["prevent"]),disabled:l.loadingStatus&&t.product_id===l.updateCartId},[l.loadingStatus&&t.product_id===l.updateCartId?((0,i.wg)(),(0,i.iD)("div",G,X)):((0,i.wg)(),(0,i.iD)("span",tt,et))],8,B)]),(0,i._)("button",{class:"btn btn-outline-danger w-50 mt-2 text-center",title:"刪除此項商品",onClick:(0,n.iM)((a=>r.deleteCart(t.id)),["prevent"])},ot,8,it)])])])))),128))])),0!==l.cartLength?((0,i.wg)(),(0,i.iD)("div",nt,[(0,i._)("a",{class:"btn text-center cart-btn w-100 m-0 b-0",href:"#",onClick:a[1]||(a[1]=(0,n.iM)(((...t)=>r.toCartView&&r.toCartView(...t)),["prevent"]))}," 前往購物車 ")])):(0,i.kq)("",!0)])])],512)],64)}var rt=e(7424),ct=e.n(rt),dt=e(5830),ht={data(){return{modal:{},CartList:{},cartLength:0,updateCartId:"",isLoading:!1,loadingStatus:!1}},inject:["emitter"],watch:{cartData(){this.CartList=this.cartData,this.cartLength=this.cartData.carts.length}},methods:{refreshCart(t,a){this.loadingStatus=!0,this.updateCartId=t.product_id;const e=`https://vue3-course-api.hexschool.io/api/flower-api/cart/${t.id}`,i={product_id:t.product_id,qty:a};this.$http.put(e,{data:i}).then((t=>{t.data.success&&(this.getCarts(),this.loadingStatus=!1)})).catch((t=>{this.loadingStatus=!1,this.emitter.emit("push-message",{style:"danger",title:t.response.data})}))},deleteCart(t){this.loadingStatus=!1;const a=`https://vue3-course-api.hexschool.io/api/flower-api/cart/${t}`;this.$http.delete(a).then((t=>{this.getCarts(),this.loadingStatus=!0,this.emitter.emit("push-message",{style:"danger",title:t.data.message})})).catch((t=>{this.loadingStatus=!1,this.emitter.emit("push-message",{style:"danger",title:t.response.data})}))},toCartView(){this.$router.push("/cart"),this.hideModal()},toProductView(){this.$router.push("/products"),this.hideModal()},showModal(){this.modal.show(),this.getCarts()},hideModal(){this.modal.hide()}},mixins:[dt.Z],mounted(){this.modal=new(ct())(this.$refs.modal)}},ut=e(3744);const gt=(0,ut.Z)(ht,[["render",lt]]);var pt=gt,vt=e(2497),mt={data(){return{cartLength:0,favoriteLength:0,pageNow:"",navOpen:!1,navOpenStatus:!1}},components:{CartModal:pt},inject:["emitter"],methods:{openCart(){this.$refs.cart.showModal()},goToFavorites(){this.$router.push("/favorite")},pageChange(t){this.pageNow=t},closeNav(){this.$refs.navbarToggler.click()}},mixins:[dt.Z,vt.Z],created(){this.getCarts(),this.getFavorite()},mounted(){this.pageChange("home"),this.emitter.on("push-Cartnotice",(t=>{this.cartLength=t.data})),this.emitter.on("push-Favnotice",(t=>{this.favoriteLength=t.data})),this.emitter.on("page-change",(t=>{this.pageNow=t.data}))}};const bt=(0,ut.Z)(mt,[["render",x]]);var _t=bt;const Ct={class:"bg-dark text-center text-white font-footer"},ft=(0,i._)("div",{class:"text-center p-3"},[(0,i.Uk)(" © 2023 Copyright - Infinity Flower"),(0,i._)("br"),(0,i.Uk)(" 本網站為個人練習作品，非商業用途 ")],-1),wt=[ft];function kt(t,a){return(0,i.wg)(),(0,i.iD)("footer",Ct,wt)}const yt={},Lt=(0,ut.Z)(yt,[["render",kt]]);var Nt=Lt,Mt={components:{FontNavbar:_t,FontFooter:Nt}};const xt=(0,ut.Z)(Mt,[["render",s]]);var Ft=xt},4427:function(t,a,e){t.exports=e.p+"img/logo.d3ab22df.png"}}]);
//# sourceMappingURL=399.70dbd5b1.js.map