"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[573],{685:function(t,e,s){s(7658);e["Z"]={inject:["emitter"],methods:{goForDetail(t){if(localStorage.getItem("viewedItem")){const t=localStorage.getItem("viewedItem");this.viewedList=JSON.parse(t)}else this.viewedList=[];this.viewedList.every((e=>e!==t.id))&&(this.viewedList.push(t.id),localStorage.setItem("viewedItem",JSON.stringify(this.viewedList))),this.emitter.emit("push-ProductDetail",{data:t,qty:1}),this.$router.push(`/products/${t.id}`)}}}},2771:function(t,e){e["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}}}},9666:function(t,e,s){s.r(e),s.d(e,{default:function(){return J}});s(7658);var i=s(6252),o=s(9963),l=s(3577),a=s.p+"img/bouquet.a29f36ce.jpg",d=s.p+"img/AboutUs.4d375fa4.jpg";const n={class:"home"},c=(0,i._)("div",{class:"background-clip display-1 text-center row align-items-center"},[(0,i._)("span",null,"Infinity Flowers"),(0,i._)("span",{class:"fs-3 position-absolute banner-slogan"}," Beauty that lasts a lifetime "),(0,i._)("div",{class:"fs-6 position-absolute bottom-0 scroll-notice"},[(0,i._)("div",{class:"pb-2"},"scroll")])],-1),r={class:"mt-5 container-fluid"},m={class:"on-sale w-100 text-center p-5 rounded-3"},u=(0,i._)("h2",null,[(0,i.Uk)(" 限時優惠 "),(0,i._)("span",{class:"text-danger fw-bolder"},"８折")],-1),h=(0,i.uE)('<div class="w-100 text-center my-5"><h3 class="p-5 fst-italic fw-lighter">花藝對很多人而言，只是曇花一現的東西，只是一時的歡愉體驗</h3></div><div class="slogan-bg row my-5"><div class="col-md-6 p-0 order-1"><img src="'+a+'" alt="bouquet" class="rounded-3"></div><div class="col-md-6 order-2"><h4 class="fst-italic slogan-title"> 不再只是曇花一現... </h4><h3 class="fst-italic text-center w-100 slogan-content"> 用永生花表達愛意，<br> 讓永恆的感動一直在心中盛開。 </h3></div></div><div class="slogan-bg row my-5"><div class="col-md-6 p-0 order-md-2"><img src="'+d+'" alt="making-bouquet" class="rounded-3"></div><div class="col-md-6 align-middle order-md-1"><h4 class="fst-italic slogan-title ms-lg-3"> 不再只是一時的歡愉體驗... </h4><h3 class="fst-italic text-center w-100 slogan-content"> 用永生花，<br> 為每個特別的時刻留下永恆的回憶 </h3></div></div>',3),p={class:"w-100 text-center my-5 p-2"},g=(0,i._)("h3",{class:"p-3 fst-italic fw-lighter my-5"},"讓永生花，成為你心中永恆的美麗。",-1),v={class:"mt-4 row newItem-bg py-5"},b=(0,i._)("div",{class:"col-lg-3 newItem mt-md-0 py-md-2"},[(0,i._)("h1",{class:"text-center mt-lg-0 mt-4"},[(0,i._)("i",{class:"bi bi-flower3 text-danger"}),(0,i.Uk)("新品上市 ")])],-1),w={class:"row col-lg-9 px-0 mx-auto justify-content-evenly"},f=["onClick"],y={class:"overflow-hidden text-light position-relative border-bottom newItem-pic"},_=["src","alt"],x={class:"card-body text-dark"},M={class:"overflow-hidden"},k=["title"],I=(0,i._)("button",{class:"btn w-100 button-light-color",type:"button"},"查看商品",-1);function L(t,e,s,a,d,L){const C=(0,i.up)("LoadingOverlay"),P=(0,i.up)("OnsaleModal");return(0,i.wg)(),(0,i.iD)(i.HY,null,[(0,i.Wm)(C,{active:t.isLoading},null,8,["active"]),(0,i._)("div",n,[c,(0,i._)("div",r,[(0,i._)("div",m,[u,(0,i._)("button",{class:"btn btn-danger btn-lg",type:"button",onClick:e[0]||(e[0]=(0,o.iM)(((...t)=>L.openModel&&L.openModel(...t)),["prevent"]))},"點擊領取優惠券")]),h,(0,i._)("div",p,[g,(0,i._)("button",{type:"button",class:"btn button-light-color mb-5 btn-lg",onClick:e[1]||(e[1]=(0,o.iM)((e=>t.$router.push("/products")),["prevent"]))},"馬上逛逛")]),(0,i._)("div",v,[b,(0,i._)("div",w,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(d.newProductList,(e=>((0,i.wg)(),(0,i.iD)("div",{class:"col-sm-12 col-md-4 ps-0",key:e.id},[(0,i._)("a",{href:"#",class:"text-decoration-none card mt-1 mb-2 newItem-item mx-auto mx-lg-0",onClick:(0,o.iM)((s=>t.goForDetail(e)),["prevent"])},[(0,i._)("div",y,[(0,i._)("img",{src:e.imageUrl,alt:e.title,class:"card-img-top d-block align-middle h-100 w-auto mx-auto"},null,8,_)]),(0,i._)("div",x,[(0,i._)("h5",M,[(0,i._)("div",{class:"card-title overflow-hidden newItem-name",title:e.title},(0,l.zw)(e.title),9,k)]),I])],8,f)])))),128))])])])]),(0,i.Wm)(P,{ref:"sale"},null,512)],64)}const C={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},P={class:"modal-dialog"},$={class:"modal-content"},D=(0,i.uE)('<div class="modal-header"><h5 class="modal-title" id="exampleModalLabel"></h5><button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button></div><div class="modal-body text-center"><span class="p-2 onsale-icon"><i class="bi bi-flower3 icon-size"></i></span><h4>Infinity Flower限時優惠</h4><h3>優惠券代碼 Infiity8</h3></div>',2),j={class:"modal-footer mx-auto"};function Z(t,e,s,l,a,d){return(0,i.wg)(),(0,i.iD)("div",C,[(0,i._)("div",P,[(0,i._)("div",$,[D,(0,i._)("div",j,[(0,i._)("button",{type:"button",class:"btn button-light-color",onClick:e[0]||(e[0]=(0,o.iM)(((...t)=>d.goToProduct&&d.goToProduct(...t)),["prevent"]))},"馬上逛逛")])])])],512)}var O=s(7424),S=s.n(O),q=s(2771),F={data(){return{modal:{}}},methods:{goToProduct(){this.hideModal(),this.$router.push("/products")}},inject:["emitter"],mixins:[q.Z],mounted(){this.modal=new(S())(this.$refs.modal)}},N=s(3744);const T=(0,N.Z)(F,[["render",Z]]);var U=T,z=s(685),E={data(){return{newProductList:[]}},components:{OnsaleModal:U},inject:["emitter"],methods:{getNewProducts(){this.isLoading=!0;const t="https://vue3-course-api.hexschool.io/api/flower-api/products/all";this.$http.get(t).then((t=>{this.newProductList=t.data.products.slice(-3),this.isLoading=!1})).catch((t=>{this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:t.response.data})}))},openModel(){this.copyCode(),this.$refs.sale.showModal()},goMart(){this.$router.push("/products")},copyCode(){navigator.clipboard.writeText("Infinity8"),this.emitter.emit("push-message",{style:"success",title:"已複製優惠代碼"})}},mixins:[z.Z],created(){this.getNewProducts()},mounted(){this.emitter.emit("page-change",{data:"home"})}};const H=(0,N.Z)(E,[["render",L]]);var J=H}}]);
//# sourceMappingURL=573.578d824b.js.map