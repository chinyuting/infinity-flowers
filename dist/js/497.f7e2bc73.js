"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[497],{5830:function(t,a){a["Z"]={inject:["emitter"],methods:{getCarts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/flower-api/cart";this.$http.get(t).then((t=>{t.data.success&&(this.cartqty=0,this.isLoading=!1,this.CartList=t.data.data,this.cartLength=t.data.data.carts.length,t.data.data.carts.forEach((t=>{this.cartqty+=t.qty})),this.emitter.emit("push-notice",{data:this.cartLength,category:"cart"}))}))}}}},1497:function(t,a,e){e.r(a),e.d(a,{default:function(){return Dt}});var s=e(6252);function i(t,a,e,i,l,n){const r=(0,s.up)("NavBar"),o=(0,s.up)("routerView"),c=(0,s.up)("Footer");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(r),(0,s.Wm)(o),(0,s.Wm)(c)],64)}var l=e(3577),n=e(9963),r=e(6949);const o={class:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},c={class:"container-fluid"},d=(0,s._)("a",{class:"navbar-brand",href:"#"},[(0,s._)("img",{alt:"Infinity Flowers logo",src:r,width:"100"}),(0,s.Uk)((0,l.zw)(null))],-1),h=(0,s._)("span",{class:"navbar-toggler-icon"},null,-1),u=[h],p={class:"collapse navbar-collapse FontnavbarNav"},g={class:"navbar-nav me-auto mb-2 mb-lg-0 justify-content-center"},m={class:"nav-item"},v={class:"nav-item"},b={class:"nav-item"},_={class:"nav-item"},f={class:"nav-item"},w={class:"collapse navbar-collapse FontnavbarNav",style:{"flex-grow":"0"}},C={class:"navbar-nav me-3 mb-2 mb-lg-0 flex-row"},y=(0,s._)("li",{class:"nav-item",style:{"margin-right":"16px"}},[(0,s._)("span",null,[(0,s._)("a",{href:"#/favorite",title:"收藏"},[(0,s._)("i",{class:"bi bi-heart",style:{"font-size":"1.5rem"}}),(0,s.Uk)((0,l.zw)(null))])])],-1),k={class:"nav-item"},x=(0,s._)("i",{class:"bi bi-cart3",style:{"font-size":"1.5rem"}},null,-1);function L(t,a,e,i,r,h){const L=(0,s.up)("router-link"),D=(0,s.up)("Cart");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",o,[(0,s._)("div",c,[d,(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":".FontnavbarNav","aria-controls":"FontnavbarNav","aria-expanded":"false","aria-label":"Toggle navigation",ref:"navbarToggler",onBlur:a[0]||(a[0]=t=>h.closeNav())},u,544),(0,s._)("div",p,[(0,s._)("ul",g,[(0,s._)("li",m,[(0,s.Wm)(L,{to:"/",class:(0,l.C_)(["nav-link homenav-item","home"===r.pageNow?"homenav-active":""])},{default:(0,s.w5)((()=>[(0,s.Uk)(" 首頁 ")])),_:1},8,["class"])]),(0,s._)("li",v,[(0,s.Wm)(L,{to:"/products",class:(0,l.C_)(["nav-link homenav-item","products"===r.pageNow?"homenav-active":""])},{default:(0,s.w5)((()=>[(0,s.Uk)(" 產品 ")])),_:1},8,["class"])]),(0,s._)("li",b,[(0,s.Wm)(L,{to:"/orderSearch",class:(0,l.C_)(["nav-link homenav-item","orderSearch"===r.pageNow?"homenav-active":""]),onClick:a[1]||(a[1]=t=>h.pageChange("orderSearch"))},{default:(0,s.w5)((()=>[(0,s.Uk)(" 訂單查詢 ")])),_:1},8,["class"])]),(0,s._)("li",_,[(0,s.Wm)(L,{to:"/QA",class:(0,l.C_)(["nav-link homenav-item","QA"===r.pageNow?"homenav-active":""]),onClick:a[2]||(a[2]=t=>h.pageChange("QA"))},{default:(0,s.w5)((()=>[(0,s.Uk)(" 常見問題 ")])),_:1},8,["class"])]),(0,s._)("li",f,[(0,s.Wm)(L,{to:"/dashboard/productmanage",class:"nav-link"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 管理員登入 ")])),_:1})])])]),(0,s._)("div",w,[(0,s._)("ul",C,[y,(0,s._)("li",k,[(0,s._)("span",null,[(0,s._)("a",{onClick:a[3]||(a[3]=(0,n.iM)(((...t)=>h.openCart&&h.openCart(...t)),["prevent"])),href:"#",title:"購物車"},[x,(0,s.Uk)((0,l.zw)(null))])]),(0,s._)("span",{class:"notice",style:(0,l.j5)({visibility:0!==r.cartLength?"visible":"hidden"})},(0,l.zw)(r.cartLength),5)])])])])]),(0,s.Wm)(D,{ref:"cart"},null,512)],64)}const D={class:"modal fade cartmodal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},M={class:"modal-dialog modal-dialog-scrollable cartmodal-dialog"},N={class:"modal-content cartmodal-content"},U=(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},"購物車"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={key:0,class:"modal-body p-5 text-center"},S=(0,s._)("h3",null,"購物車目前沒有東西",-1),W=(0,s._)("br",null,null,-1),$={class:"btn btn-danger mt-3"},F={key:1,class:"modal-body"},I={class:"d-flex"},z={class:"cartcard-img me-1 ps-0"},Z=["src","alt"],V={class:"col-6 m-auto"},j={class:"card-title"},H={class:"input-group"},Y=["onClick","disabled"],A={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},B=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),Q=[B],T={key:1},E=(0,s._)("i",{class:"bi bi-dash"},null,-1),K=[E],O=["onUpdate:modelValue","onChange"],G=["onClick","disabled"],J={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},P=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),R=[P],X={key:1},tt=(0,s._)("i",{class:"bi bi-plus"},null,-1),at=[tt],et=["onClick"],st=(0,s._)("i",{class:"bi bi-trash3-fill"},null,-1),it=[st],lt={key:2,class:"modal-footer"};function nt(t,a,e,i,r,o){const c=(0,s.up)("LoadingOverlay"),d=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c,{active:r.isLoading},null,8,["active"]),(0,s._)("div",D,[(0,s._)("div",M,[(0,s._)("div",N,[U,0==r.cartLength?((0,s.wg)(),(0,s.iD)("div",q,[S,(0,s.Uk)(),W,(0,s._)("button",$,[(0,s.Wm)(d,{to:"/products",onClick:(0,n.iM)(o.hideModal,["prevent"]),class:"text-light text-decoration-none"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 馬上逛逛 ")])),_:1},8,["onClick"])])])):((0,s.wg)(),(0,s.iD)("div",F,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(r.CartList.carts,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"card mb-1",key:"cart"+a},[(0,s._)("div",I,[(0,s._)("div",z,[(0,s._)("img",{src:t.product.imageUrl,class:"card-img-top",alt:t.product.title},null,8,Z)]),(0,s._)("div",V,[(0,s._)("h5",j,(0,l.zw)(t.product.title),1),(0,s._)("div",H,[(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:(0,n.iM)((a=>o.refreshCart(t,t.qty-1)),["prevent"]),disabled:1===t.qty||r.loadingStatus&&t.product_id===r.updateCartId},[r.loadingStatus&&t.product_id===r.updateCartId?((0,s.wg)(),(0,s.iD)("div",A,Q)):((0,s.wg)(),(0,s.iD)("span",T,K))],8,Y),(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"請輸入數量","aria-label":"qty","onUpdate:modelValue":a=>t.qty=a,onChange:(0,n.iM)((a=>o.refreshCart(t,t.qty)),["prevent"])},null,40,O),[[n.nr,t.qty]]),(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:(0,n.iM)((a=>o.refreshCart(t,t.qty+1)),["prevent"]),disabled:r.loadingStatus&&t.product_id===r.updateCartId},[r.loadingStatus&&t.product_id===r.updateCartId?((0,s.wg)(),(0,s.iD)("div",J,R)):((0,s.wg)(),(0,s.iD)("span",X,at))],8,G)]),(0,s._)("button",{class:"btn btn-outline-danger w-50 mt-2 text-center",title:"刪除此項商品",onClick:(0,n.iM)((a=>o.deleteCart(t.id)),["prevent"])},it,8,et)])])])))),128))])),0!==r.cartLength?((0,s.wg)(),(0,s.iD)("div",lt,[(0,s._)("a",{class:"btn w-100 text-center",href:"#",onClick:a[0]||(a[0]=(0,n.iM)(((...t)=>o.toCartView&&o.toCartView(...t)),["prevent"]))},"前往購物車")])):(0,s.kq)("",!0)])])],512)],64)}e(7658);var rt=e(7424),ot=e.n(rt),ct=e(5830),dt={data(){return{modal:{},CartList:{},cartLength:0,updateCartId:"",isLoading:!1,loadingStatus:!1}},inject:["emitter"],watch:{cartData(){this.CartList=this.cartData,this.cartLength=this.cartData.carts.length}},methods:{refreshCart(t,a){this.loadingStatus=!0,this.updateCartId=t.product_id;const e=`https://vue3-course-api.hexschool.io/api/flower-api/cart/${t.id}`,s={product_id:t.product_id,qty:a};this.$http.put(e,{data:s}).then((t=>{t.data.success&&(this.getCarts(),this.loadingStatus=!1)}))},deleteCart(t){this.loadingStatus=!1;const a=`https://vue3-course-api.hexschool.io/api/flower-api/cart/${t}`;this.$http.delete(a).then((t=>{this.getCarts(),this.loadingStatus=!0,this.emitter.emit("push-message",{style:"danger",title:t.data.message})}))},toCartView(){this.$router.push("/cart"),this.hideModal()},showModal(){this.modal.show(),this.getCarts()},hideModal(){this.modal.hide()}},mixins:[ct.Z],mounted(){this.modal=new(ot())(this.$refs.modal)}},ht=e(3744);const ut=(0,ht.Z)(dt,[["render",nt]]);var pt=ut,gt={data(){return{cartLength:0,favoriteLength:0,pageNow:""}},components:{Cart:pt},inject:["emitter"],methods:{openCart(){this.$refs.cart.showModal()},pageChange(t){this.pageNow=t},closeNav(){this.$refs.navbarToggler.click()}},mixins:[ct.Z],created(){this.getCarts()},mounted(){this.pageChange("home"),this.emitter.on("push-notice",(t=>{this.cartLength=t.data})),this.emitter.on("page-change",(t=>{this.pageNow=t.data}))}};const mt=(0,ht.Z)(gt,[["render",L]]);var vt=mt;const bt={class:"bg-dark text-center text-white font-footer"},_t=(0,s._)("div",{class:"text-center p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"}},[(0,s.Uk)(" © 2023 Copyright - Infinity Flower"),(0,s._)("br"),(0,s.Uk)(" 本網站為個人練習作品，非商業用途 ")],-1),ft=[_t];function wt(t,a){return(0,s.wg)(),(0,s.iD)("footer",bt,ft)}const Ct={},yt=(0,ht.Z)(Ct,[["render",wt]]);var kt=yt,xt={components:{NavBar:vt,Footer:kt}};const Lt=(0,ht.Z)(xt,[["render",i]]);var Dt=Lt},6949:function(t,a,e){t.exports=e.p+"img/logo.d3ab22df.png"}}]);
//# sourceMappingURL=497.f7e2bc73.js.map