"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[596],{5830:function(t,e){e["Z"]={inject:["emitter"],methods:{getCarts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/flower-api/cart";this.$http.get(t).then((t=>{t.data.success&&(this.cartqty=0,this.isLoading=!1,this.CartList=t.data.data,this.cartLength=t.data.data.carts.length,t.data.data.carts.forEach((t=>{this.cartqty+=t.qty})),this.emitter.emit("push-Cartnotice",{data:this.cartLength,category:"cart"}))}))}}}},2497:function(t,e){e["Z"]={methods:{getFavorite(){if(localStorage.getItem("favoriteItem")){const t=localStorage.getItem("favoriteItem");this.idList=JSON.parse(t),this.favoriteLength=this.idList.length}else this.idList=[],this.cartLength=0,console.log(this.favoriteLength);this.emitter.emit("push-Favnotice",{data:this.favoriteLength,category:"cart"})}}}},685:function(t,e,i){i(7658);e["Z"]={inject:["emitter"],methods:{goForDetail(t){if(localStorage.getItem("viewedItem")){const t=localStorage.getItem("viewedItem");this.viewedList=JSON.parse(t)}else this.viewedList=[];this.viewedList.every((e=>e!==t.id))&&(this.viewedList.push(t.id),localStorage.setItem("viewedItem",JSON.stringify(this.viewedList))),this.emitter.emit("push-ProductDetail",{data:t}),this.$router.push(`/products/${t.id}`)}}}},4596:function(t,e,i){i.r(e),i.d(e,{default:function(){return Lt}});var s=i(6252),a=i(3577),l=i(9963);const r={class:"container"},d={"aria-label":"breadcrumb"},o={class:"breadcrumb"},c=(0,s._)("li",{class:"breadcrumb-item"},[(0,s._)("a",{href:"#",class:"breadcrumb-link"},"首頁")],-1),n=(0,s._)("li",{class:"breadcrumb-item"},[(0,s._)("a",{href:"#/products",class:"breadcrumb-link"},"產品")],-1),u={class:"breadcrumb-item active","aria-current":"page"},h={class:"row"},p={id:"carouselExampleControls",class:"carousel slide col-12 col-md-5","data-bs-ride":"carousel"},m={class:"carousel-inner"},g={class:"carousel-item active"},v=["src","alt"],w={key:0},b=["src","alt"],_={key:0,class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"prev"},y=(0,s._)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1),f=(0,s._)("span",{class:"visually-hidden"},"Previous",-1),L=[y,f],k={key:1,class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleControls","data-bs-slide":"next"},x=(0,s._)("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1),I=(0,s._)("span",{class:"visually-hidden"},"Next",-1),C=[x,I],S={class:"col-md-7 product-detail carousel-dark"},D={class:"overflow-hidden mt-3"},P={class:"detail-content"},q={class:"row mt-3"},N={class:"input-group col-lg-7 col-md-6 w-auto detail-qty mt-auto"},U=["disabled"],$={class:"col-lg-5 col-md-6 mt-3 mt-lg-0 mx-25"},E={class:"text-lg-end"},O={key:0,class:"text-decoration-line-through fs-6"},z=(0,s._)("br",null,null,-1),F={key:0},Z=(0,s._)("i",{class:"bi bi-heart",title:"加入收藏"},null,-1),J={key:1},M=(0,s._)("i",{class:"bi bi-heart-fill",title:"加入收藏"},null,-1),W=["disabled"],j={key:0,class:"spinner-border spinner-border-sm text-light",role:"status"},B=(0,s._)("span",{class:"visually-hidden"},"Loading...",-1),H=[B],V={key:1,class:"bi bi-cart-plus-fill"},Y=(0,s._)("hr",null,null,-1),A=(0,s._)("div",{class:"text-center m-5 text-deepcolor"},[(0,s._)("h3",null,"產品說明及保養"),(0,s._)("p",{class:"mt-3"},[(0,s.Uk)(" ＊保持乾燥避免潮濕、陽光直射，適合放置在冷氣房或於濕度20-65度之間的環境。"),(0,s._)("br"),(0,s.Uk)(" ＊永生花、不凋花是鮮花經特殊技術處理，能保有鮮花般色彩，可保持2-3年不等。"),(0,s._)("br"),(0,s.Uk)(" ＊乾燥花是鮮花自然風乾處理，可擺放約半年至1年，隨著時間會漸漸褪色為正常狀況。"),(0,s._)("br"),(0,s.Uk)(" ＊若有灰塵使用柔軟的刷子ｅｘ毛筆，輕輕刷拭。"),(0,s._)("br")])],-1),K=(0,s._)("hr",null,null,-1),T={class:"text-center m-5 text-deepcolor"},R=(0,s._)("h3",null,"最近看過的產品",-1),G={class:"mt-4 overflow-hidden position-relative viewedItem mx-auto"},Q=["disabled"],X=(0,s._)("span",{class:"carousel-control-prev-icon","aria-hidden":"true"},null,-1),tt=(0,s._)("span",{class:"visually-hidden"},"Previous",-1),et=[X,tt],it=["disabled"],st=(0,s._)("span",{class:"carousel-control-next-icon","aria-hidden":"true"},null,-1),at=(0,s._)("span",{class:"visually-hidden"},"Next",-1),lt=[st,at],rt={class:"row flex-nowrap mx-auto justify-content-start"},dt=["data-slider"],ot=["onClick"],ct={class:"overflow-hidden text-light position-relative border-bottom viewedItem-pic"},nt=["src","alt"],ut={class:"card-body text-dark"},ht={class:"overflow-hidden"},pt=["title"],mt=(0,s._)("button",{class:"btn btn-secondary w-100"},"查看商品",-1);function gt(t,e,i,y,f,x){const I=(0,s.up)("LoadingOverlay");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(I,{active:f.isLoading},null,8,["active"]),(0,s._)("div",r,[(0,s._)("nav",d,[(0,s._)("ol",o,[c,n,(0,s._)("li",u,(0,a.zw)(f.product.title),1)])]),(0,s._)("div",h,[(0,s._)("div",p,[(0,s._)("div",m,[(0,s._)("div",g,[(0,s._)("img",{src:f.product.imageUrl,class:"d-block w-100",alt:f.product.title},null,8,v)]),f.product.imagesUrl?((0,s.wg)(),(0,s.iD)("div",w,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.product.imagesUrl,((t,e)=>((0,s.wg)(),(0,s.iD)("div",{class:"carousel-item",key:e},[(0,s._)("img",{src:t,alt:f.product.title,class:"d-block w-100"},null,8,b)])))),128))])):(0,s.kq)("",!0)]),f.product.imagesUrl?((0,s.wg)(),(0,s.iD)("button",_,L)):(0,s.kq)("",!0),f.product.imagesUrl?((0,s.wg)(),(0,s.iD)("button",k,C)):(0,s.kq)("",!0)]),(0,s._)("div",S,[(0,s._)("h1",D,(0,a.zw)(f.product.title),1),(0,s._)("p",null,(0,a.zw)(f.product.description),1),(0,s._)("p",P,(0,a.zw)(f.product.content),1),(0,s._)("div",q,[(0,s._)("div",N,[(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[0]||(e[0]=(0,l.iM)((t=>x.refreshqty(-1)),["prevent"])),disabled:1===f.product_qty},"- ",8,U),(0,s.wy)((0,s._)("input",{type:"number",class:"form-control",placeholder:"Recipient's username","aria-label":"qty","onUpdate:modelValue":e[1]||(e[1]=t=>f.product_qty=t)},null,512),[[l.nr,f.product_qty]]),(0,s._)("button",{class:"btn btn-outline-secondary",type:"button",onClick:e[2]||(e[2]=(0,l.iM)((t=>x.refreshqty(1)),["prevent"]))},"+ ")]),(0,s._)("div",$,[(0,s._)("h3",E,[f.product.origin_price!==f.product.price?((0,s.wg)(),(0,s.iD)("span",O,[(0,s.Uk)(" NT$"+(0,a.zw)(t.$filters.currency(f.product.origin_price)),1),z])):(0,s.kq)("",!0),(0,s._)("span",null,"NT$"+(0,a.zw)(t.$filters.currency(f.product.price)),1),(0,s.Uk)(" / "+(0,a.zw)(f.product.unit),1)])])]),(0,s._)("div",null,[(0,s._)("button",{type:"button",onClick:e[3]||(e[3]=(0,l.iM)((e=>x.updateFavorite(t.item)),["prevent"])),class:"btn btn-danger mt-2 me-2"},[f.idList.every((t=>f.productId!==t))?((0,s.wg)(),(0,s.iD)("span",F,[Z,(0,s.Uk)(" 加入收藏 ")])):((0,s.wg)(),(0,s.iD)("span",J,[M,(0,s.Uk)(" 取消收藏")]))]),(0,s._)("button",{type:"button",onClick:e[4]||(e[4]=(0,l.iM)(((...t)=>x.addCart&&x.addCart(...t)),["prevent"])),class:"btn btn-danger mt-2",disabled:f.loadingStatus},[f.loadingStatus?((0,s.wg)(),(0,s.iD)("div",j,H)):((0,s.wg)(),(0,s.iD)("i",V)),(0,s.Uk)(" 加入購物車 ")],8,W)])])]),Y,A,K,(0,s._)("div",T,[R,(0,s._)("div",G,[(0,s._)("button",{class:"carousel-control-prev",type:"button","data-bs-target":"#carouselExampleDark",onClick:e[5]||(e[5]=(...t)=>x.sliderPrevious&&x.sliderPrevious(...t)),disabled:0===f.viewedSliderCount,"data-bs-slide":"prev"},et,8,Q),(0,s._)("button",{class:"carousel-control-next",type:"button","data-bs-target":"#carouselExampleDark",onClick:e[6]||(e[6]=(...t)=>x.sliderNext&&x.sliderNext(...t)),disabled:f.viewedProducts.length===f.viewedSliderCount+f.viewedItemLength,"data-bs-slide":"next"},lt,8,it),(0,s._)("div",rt,[((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(f.viewedProducts,((e,i)=>((0,s.wg)(),(0,s.iD)("div",{class:"viewedItem-card ps-0","data-slider":i,key:i},[(0,s._)("a",{href:"#",class:"text-decoration-none card mt-1 mb-2 mx-auto mx-lg-0 viewedItem-item",onClick:(0,l.iM)((i=>t.goForDetail(e)),["prevent"])},[(0,s._)("div",ct,[(0,s._)("img",{src:e.imageUrl,alt:e.title,class:"card-img-top d-block align-middle h-100 w-auto mx-auto"},null,8,nt)]),(0,s._)("div",ut,[(0,s._)("h5",ht,[(0,s._)("div",{class:"card-title overflow-hidden viewedItem-name",title:e.title},(0,a.zw)(e.title),9,pt)]),mt])],8,ot)],8,dt)))),128))])])])])],64)}i(7658);var vt=i(5830),wt=i(2497),bt=i(685),_t={data(){return{allProductList:[],viewedProducts:[],viewedSliderCount:0,viewedItemLength:1,productId:"",product:{},product_qty:1,idList:[],isLoading:!1,loadingStatus:!1}},methods:{getAllProducts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/flower-api/products/all";this.$http.get(t).then((t=>{this.isLoading=!1,this.allProductList=t.data.products,this.allProductList.forEach((t=>{this.viewedList.some((e=>t.id===e))&&this.viewedProducts.push(t)}))})).catch((t=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:t.response.data})}))},getProductDetails(){this.isLoading=!0,this.productId=this.$route.params.productId;const t=`https://vue3-course-api.hexschool.io/api/flower-api/product/${this.productId}`;this.$http.get(t).then((t=>{t.data.success&&(this.product=t.data.product,this.isLoading=!1)})).catch((t=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:t.response.data})}))},updateFavorite(){this.loadingStatus=!0,this.idList.every((t=>this.productId!==t))?(this.idList.push(this.productId),localStorage.setItem("favoriteItem",JSON.stringify(this.idList)),this.emitter.emit("push-message",{style:"success",title:"已新增至收藏"})):(this.idList.indexOf(this.productId),this.idList.splice(this.idList.indexOf(this.productId),1),localStorage.setItem("favoriteItem",JSON.stringify(this.idList)),this.emitter.emit("push-message",{style:"danger",title:"已取消收藏"})),this.loadingStatus=!1,this.getFavorite()},addCart(){this.loadingStatus=!0;const t="https://vue3-course-api.hexschool.io/api/flower-api/cart",e={product_id:this.product.id,qty:this.product_qty};this.$http.post(t,{data:e}).then((t=>{t.data.success&&(this.getCarts(),this.loadingStatus=!1,this.emitter.emit("push-message",{style:"success",title:t.data.message}))})).catch((t=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:t.response.data})}))},refreshqty(t){this.product_qty+=t},getViewedList(){if(localStorage.getItem("viewedItem")){const t=localStorage.getItem("viewedItem");this.viewedList=JSON.parse(t)}else this.viewedList=[]},sliderPrevious(){if(this.viewedSliderCount<this.viewedList.length){this.viewedSliderCount-=1;const t=document.documentElement,e=document.getElementsByClassName("viewedItem-card")[0].clientWidth,i=-e*this.viewedSliderCount;t.style.setProperty("--slider",`${i}px`)}},sliderNext(){if(this.viewedSliderCount<this.viewedList.length-1){this.viewedSliderCount+=1;const t=document.documentElement,e=document.getElementsByClassName("viewedItem")[0].clientWidth;this.viewedItemLength=e>=824?3:e>=544?2:1;const i=document.getElementsByClassName("viewedItem-card")[0].clientWidth,s=-i*this.viewedSliderCount;t.style.setProperty("--slider",`${s}px`)}}},mixins:[vt.Z,wt.Z,bt.Z],created(){this.getProductDetails(),this.getFavorite(),this.getAllProducts(),this.getViewedList(),this.emitter.on("push-ProductDetail",(t=>{this.product=t.data}))}},yt=i(3744);const ft=(0,yt.Z)(_t,[["render",gt]]);var Lt=ft}}]);
//# sourceMappingURL=596.e4b5583f.js.map