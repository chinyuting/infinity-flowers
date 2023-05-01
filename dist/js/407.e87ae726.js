"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[407],{5830:function(t,a){a["Z"]={inject:["emitter"],methods:{getCarts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/flower-api/cart";this.$http.get(t).then((t=>{t.data.success&&(this.cartqty=0,this.isLoading=!1,this.CartList=t.data.data,this.cartLength=t.data.data.carts.length,t.data.data.carts.forEach((t=>{this.cartqty+=t.qty})),this.emitter.emit("push-notice",{data:this.cartLength,category:"cart"}))}))}}}},1407:function(t,a,e){e.r(a),e.d(a,{default:function(){return Nt}});var s=e(6252);function i(t,a,e,i,n,l){const o=(0,s.up)("FontNavbar"),r=(0,s.up)("router-view"),c=(0,s.up)("FontFooter");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(o),(0,s.Wm)(r),(0,s.Wm)(c)],64)}var n=e(3577),l=e(9963),o=e(4427);const r={class:"navbar navbar-expand-lg navbar-light bg-light fixed-top"},c={class:"container-fluid"},d=(0,s._)("a",{class:"navbar-brand",href:"#"},[(0,s._)("img",{alt:"Infinity Flowers logo",src:o,width:"100"}),(0,s.Uk)((0,n.zw)(null))],-1),h=(0,s._)("span",{class:"navbar-toggler-icon"},null,-1),u=[h],p={class:"collapse navbar-collapse FontnavbarNav"},g={class:"navbar-nav me-auto mb-2 mb-lg-0 justify-content-center"},v={class:"nav-item"},m={class:"nav-item"},b={class:"nav-item"},_={class:"nav-item"},f={class:"nav-item"},C={class:"collapse navbar-collapse FontnavbarNav",style:{"flex-grow":"0"}},w={class:"navbar-nav me-3 mb-2 mb-lg-0 flex-row"},k={class:"nav-item",style:{"margin-right":"16px"}},y=(0,s._)("i",{class:"bi bi-heart",style:{"font-size":"1.5rem"}},null,-1),x={class:"nav-item"},L=(0,s._)("i",{class:"bi bi-cart3",style:{"font-size":"1.5rem"}},null,-1);function M(t,a,e,i,o,h){const M=(0,s.up)("router-link"),N=(0,s.up)("CartModal");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("nav",r,[(0,s._)("div",c,[d,(0,s._)("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":".FontnavbarNav","aria-controls":"FontnavbarNav","aria-expanded":"false","aria-label":"Toggle navigation",ref:"navbarToggler",onBlur:a[0]||(a[0]=(...t)=>h.closeNav&&h.closeNav(...t)),onClick:a[1]||(a[1]=(0,l.iM)(((...t)=>h.openNav&&h.openNav(...t)),["prevent"]))},u,544),(0,s._)("div",p,[(0,s._)("ul",g,[(0,s._)("li",v,[(0,s.Wm)(M,{to:"/",class:(0,n.C_)(["nav-link homenav-item","home"===o.pageNow?"homenav-active":""])},{default:(0,s.w5)((()=>[(0,s.Uk)(" 首頁 ")])),_:1},8,["class"])]),(0,s._)("li",m,[(0,s.Wm)(M,{to:"/products",class:(0,n.C_)(["nav-link homenav-item","products"===o.pageNow?"homenav-active":""])},{default:(0,s.w5)((()=>[(0,s.Uk)(" 產品 ")])),_:1},8,["class"])]),(0,s._)("li",b,[(0,s.Wm)(M,{to:"/orderSearch",class:(0,n.C_)(["nav-link homenav-item","orderSearch"===o.pageNow?"homenav-active":""]),onClick:a[2]||(a[2]=t=>h.pageChange("orderSearch"))},{default:(0,s.w5)((()=>[(0,s.Uk)(" 訂單查詢 ")])),_:1},8,["class"])]),(0,s._)("li",_,[(0,s.Wm)(M,{to:"/QA",class:(0,n.C_)(["nav-link homenav-item","QA"===o.pageNow?"homenav-active":""]),onClick:a[3]||(a[3]=t=>h.pageChange("QA"))},{default:(0,s.w5)((()=>[(0,s.Uk)(" 常見問題 ")])),_:1},8,["class"])]),(0,s._)("li",f,[(0,s.Wm)(M,{to:"/dashboard/productmanage",class:"nav-link"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 管理員登入 ")])),_:1})])])]),(0,s._)("div",C,[(0,s._)("ul",w,[(0,s._)("li",k,[(0,s._)("span",null,[(0,s._)("a",{href:"#",title:"收藏",onClick:a[4]||(a[4]=(0,l.iM)(((...t)=>h.goToFavorites&&h.goToFavorites(...t)),["prevent"]))},[y,(0,s.Uk)((0,n.zw)(null))])])]),(0,s._)("li",x,[(0,s._)("span",null,[(0,s._)("a",{href:"#",title:"購物車",onClick:a[5]||(a[5]=(0,l.iM)(((...t)=>h.openCart&&h.openCart(...t)),["prevent"]))},[L,(0,s.Uk)((0,n.zw)(null))])]),(0,s._)("span",{class:"notice",style:(0,n.j5)({visibility:0!==o.cartLength?"visible":"hidden"})},(0,n.zw)(o.cartLength),5)])])])])]),(0,s.Wm)(N,{ref:"cart"},null,512)],64)}e(7658);const N={class:"modal fade cartmodal",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},D={class:"modal-dialog modal-dialog-scrollable cartmodal-dialog"},F={class:"modal-content cartmodal-content"},U=(0,s._)("div",{class:"modal-header"},[(0,s._)("h5",{class:"modal-title",id:"exampleModalLabel"},"購物車"),(0,s._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),q={key:0,class:"modal-body p-5 text-center"},S=(0,s._)("h3",null,"購物車目前沒有東西",-1),W=(0,s._)("br",null,null,-1),$={class:"btn btn-danger mt-3"},I={key:1,class:"modal-body"},z={class:"d-flex"},Z={class:"cartcard-img me-1 ps-0"},T=["src","alt"],j={class:"col-6 m-auto"},O={class:"card-title"},V={class:"input-group"},H=["onClick","disabled"],Y={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},A=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),Q=[A],B={key:1},E=(0,s._)("i",{class:"bi bi-dash"},null,-1),K=[E],G=["onUpdate:modelValue","onChange"],J=["onClick","disabled"],P={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},R=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),X=[R],tt={key:1},at=(0,s._)("i",{class:"bi bi-plus"},null,-1),et=[at],st=["onClick"],it=(0,s._)("i",{class:"bi bi-trash3-fill"},null,-1),nt=[it],lt={key:2,class:"modal-footer"};function ot(t,a,e,i,o,r){const c=(0,s.up)("LoadingOverlay"),d=(0,s.up)("router-link");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(c,{active:o.isLoading},null,8,["active"]),(0,s._)("div",N,[(0,s._)("div",D,[(0,s._)("div",F,[U,0==o.cartLength?((0,s.wg)(),(0,s.iD)("div",q,[S,(0,s.Uk)(),W,(0,s._)("button",$,[(0,s.Wm)(d,{to:"/products",onClick:(0,l.iM)(r.hideModal,["prevent"]),class:"text-light text-decoration-none"},{default:(0,s.w5)((()=>[(0,s.Uk)(" 馬上逛逛 ")])),_:1},8,["onClick"])])])):((0,s.wg)(),(0,s.iD)("div",I,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(o.CartList.carts,((t,a)=>((0,s.wg)(),(0,s.iD)("div",{class:"card mb-1",key:"cart"+a},[(0,s._)("div",z,[(0,s._)("div",Z,[(0,s._)("img",{src:t.product.imageUrl,class:"card-img-top",alt:t.product.title},null,8,T)]),(0,s._)("div",j,[(0,s._)("h5",O,(0,n.zw)(t.product.title),1),(0,s._)("div",V,[(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:(0,l.iM)((a=>r.refreshCart(t,t.qty-1)),["prevent"]),disabled:1===t.qty||o.loadingStatus&&t.product_id===o.updateCartId},[o.loadingStatus&&t.product_id===o.updateCartId?((0,s.wg)(),(0,s.iD)("div",Y,Q)):((0,s.wg)(),(0,s.iD)("span",B,K))],8,H),(0,s.wy)((0,s._)("input",{type:"text",class:"form-control",placeholder:"請輸入數量","aria-label":"qty","onUpdate:modelValue":a=>t.qty=a,onChange:(0,l.iM)((a=>r.refreshCart(t,t.qty)),["prevent"])},null,40,G),[[l.nr,t.qty]]),(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:(0,l.iM)((a=>r.refreshCart(t,t.qty+1)),["prevent"]),disabled:o.loadingStatus&&t.product_id===o.updateCartId},[o.loadingStatus&&t.product_id===o.updateCartId?((0,s.wg)(),(0,s.iD)("div",P,X)):((0,s.wg)(),(0,s.iD)("span",tt,et))],8,J)]),(0,s._)("button",{class:"btn btn-outline-danger w-50 mt-2 text-center",title:"刪除此項商品",onClick:(0,l.iM)((a=>r.deleteCart(t.id)),["prevent"])},nt,8,st)])])])))),128))])),0!==o.cartLength?((0,s.wg)(),(0,s.iD)("div",lt,[(0,s._)("a",{class:"btn w-100 text-center",href:"#",onClick:a[0]||(a[0]=(0,l.iM)(((...t)=>r.toCartView&&r.toCartView(...t)),["prevent"]))},"前往購物車")])):(0,s.kq)("",!0)])])],512)],64)}var rt=e(7424),ct=e.n(rt),dt=e(5830),ht={data(){return{modal:{},CartList:{},cartLength:0,updateCartId:"",isLoading:!1,loadingStatus:!1}},inject:["emitter"],watch:{cartData(){this.CartList=this.cartData,this.cartLength=this.cartData.carts.length}},methods:{refreshCart(t,a){this.loadingStatus=!0,this.updateCartId=t.product_id;const e=`https://vue3-course-api.hexschool.io/api/flower-api/cart/${t.id}`,s={product_id:t.product_id,qty:a};this.$http.put(e,{data:s}).then((t=>{t.data.success&&(this.getCarts(),this.loadingStatus=!1)}))},deleteCart(t){this.loadingStatus=!1;const a=`https://vue3-course-api.hexschool.io/api/flower-api/cart/${t}`;this.$http.delete(a).then((t=>{this.getCarts(),this.loadingStatus=!0,this.emitter.emit("push-message",{style:"danger",title:t.data.message})}))},toCartView(){this.$router.push("/cart"),this.hideModal()},showModal(){this.modal.show(),this.getCarts()},hideModal(){this.modal.hide()}},mixins:[dt.Z],mounted(){this.modal=new(ct())(this.$refs.modal)}},ut=e(3744);const pt=(0,ut.Z)(ht,[["render",ot]]);var gt=pt,vt={data(){return{cartLength:0,favoriteLength:0,pageNow:"",navOpen:!0}},components:{CartModal:gt},inject:["emitter"],methods:{openCart(){this.$refs.cart.showModal()},goToFavorites(){this.$router.push("/favorite")},pageChange(t){this.pageNow=t},closeNav(){!0===this.navOpen&&(this.$refs.navbarToggler.click(),this.navOpens=!1)},openNav(){this.navOpen=!0}},mixins:[dt.Z],created(){this.getCarts()},mounted(){this.pageChange("home"),this.emitter.on("push-notice",(t=>{this.cartLength=t.data})),this.emitter.on("page-change",(t=>{this.pageNow=t.data}))}};const mt=(0,ut.Z)(vt,[["render",M]]);var bt=mt;const _t={class:"bg-dark text-center text-white font-footer"},ft=(0,s._)("div",{class:"text-center p-3",style:{"background-color":"rgba(0, 0, 0, 0.2)"}},[(0,s.Uk)(" © 2023 Copyright - Infinity Flower"),(0,s._)("br"),(0,s.Uk)(" 本網站為個人練習作品，非商業用途 ")],-1),Ct=[ft];function wt(t,a){return(0,s.wg)(),(0,s.iD)("footer",_t,Ct)}const kt={},yt=(0,ut.Z)(kt,[["render",wt]]);var xt=yt,Lt={components:{FontNavbar:bt,FontFooter:xt}};const Mt=(0,ut.Z)(Lt,[["render",i]]);var Nt=Mt},4427:function(t,a,e){t.exports=e.p+"img/logo.d3ab22df.png"}}]);
//# sourceMappingURL=407.e87ae726.js.map