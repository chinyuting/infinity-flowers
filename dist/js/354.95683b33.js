"use strict";(self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[]).push([[354],{2771:function(t,e){e["Z"]={methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()}}}},6876:function(t,e,a){a.d(e,{Z:function(){return P}});var l=a(6252),o=a(3577),s=a(9963);const i={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},d={class:"modal-dialog"},n={class:"modal-content"},r=(0,l._)("div",{class:"modal-header"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},"請確認"),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),c={class:"modal-body"},u={key:0},p={key:1},m={class:"modal-footer"},h=(0,l._)("button",{type:"button",class:"btn btn-secondary","data-bs-dismiss":"modal"},"取消",-1);function g(t,e,a,g,b,_){return(0,l.wg)(),(0,l.iD)("div",i,[(0,l._)("div",d,[(0,l._)("div",n,[r,(0,l._)("div",c,[(0,l.Uk)(" 是否"),"logout"===a.dataStatus?((0,l.wg)(),(0,l.iD)("span",u,"登出")):((0,l.wg)(),(0,l.iD)("span",p,"刪除 "+(0,o.zw)(a.dataStatus.title),1)),(0,l.Uk)("? ")]),(0,l._)("div",m,[h,(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[0]||(e[0]=(0,s.iM)(((...t)=>_.statusConfirmed&&_.statusConfirmed(...t)),["prevent"]))},"確認")])])])],512)}var b=a(7424),_=a.n(b),f=a(2771),w={data(){return{modal:{}}},props:["dataStatus","fromPage"],methods:{statusConfirmed(){"logout"===this.dataStatus&&this.$emit("logout-confirmed"),this.$emit("delete-confirmed",this.dataStatus)}},mixins:[f.Z],mounted(){this.modal=new(_())(this.$refs.modal)}},y=a(3744);const v=(0,y.Z)(w,[["render",g]]);var P=v},7250:function(t,e,a){a.d(e,{Z:function(){return g}});var l=a(6252),o=a(3577),s=a(9963);const i={"aria-label":"Page navigation example"},d={class:"pagination justify-content-center"},n={class:"page-item"},r=["onClick"],c={class:"page-item"};function u(t,e,a,u,p,m){return(0,l.wg)(),(0,l.iD)("nav",i,[(0,l._)("ul",d,[(0,l._)("li",n,[(0,l._)("a",{class:(0,o.C_)(["page-link",{disabled:!p.temppage.has_pre}]),href:"#",tabindex:"-1","aria-disabled":"true",onClick:e[0]||(e[0]=(0,s.iM)((t=>m.updatePage(p.temppage.current_page-1)),["prevent"]))},"上一頁",2)]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(p.temppage.total_pages,((t,e)=>((0,l.wg)(),(0,l.iD)("li",{class:"page-item",key:e},[(0,l._)("a",{class:(0,o.C_)(["page-link",{active:t===p.temppage.current_page}]),href:"#",onClick:(0,s.iM)((e=>m.updatePage(t)),["prevent"])},(0,o.zw)(t),11,r)])))),128)),(0,l._)("li",c,[(0,l._)("a",{class:(0,o.C_)(["page-link",{disabled:!p.temppage.has_next}]),href:"#",onClick:e[1]||(e[1]=(0,s.iM)((t=>m.updatePage(p.temppage.current_page+1)),["prevent"]))},"下一頁",2)])])])}var p={data(){return{temppage:{}}},props:["pages"],watch:{pages(){this.temppage=this.pages}},methods:{updatePage(t){this.$emit("emit-page",t)}}},m=a(3744);const h=(0,m.Z)(p,[["render",u]]);var g=h},5354:function(t,e,a){a.r(e),a.d(e,{default:function(){return _t}});var l=a(6252),o=a(3577),s=a(9963);const i={class:"table mt-3 table-hover"},d=(0,l._)("thead",null,[(0,l._)("tr",null,[(0,l._)("th",{scope:"col"},"分類"),(0,l._)("th",{scope:"col"},"名稱"),(0,l._)("th",{scope:"col"},"價格"),(0,l._)("th",{scope:"col"},"售價"),(0,l._)("th",{scope:"col"},"是否啟用"),(0,l._)("th",{scope:"col"})])],-1),n={scope:"row"},r={key:0,class:"text-success"},c={key:1,class:"text-muted"},u=["onClick"],p=["onClick"];function m(t,e,a,m,h,g){const b=(0,l.up)("LoadingOverlay"),_=(0,l.up)("ProductModal"),f=(0,l.up)("DoubleCheckModal"),w=(0,l.up)("Pagination");return(0,l.wg)(),(0,l.iD)(l.HY,null,[(0,l.Wm)(b,{active:h.isLoading},null,8,["active"]),(0,l._)("div",null,[(0,l._)("button",{type:"button",class:"btn btn-secondary w-100",onClick:e[0]||(e[0]=t=>g.openModal(!0))},"+新增商品")]),(0,l._)("div",null,[(0,l._)("table",i,[d,(0,l._)("tbody",null,[((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(h.productList,(e=>((0,l.wg)(),(0,l.iD)("tr",{key:e.id,class:"align-middle"},[(0,l._)("th",n,(0,o.zw)(e.category),1),(0,l._)("td",null,(0,o.zw)(e.title),1),(0,l._)("td",null,(0,o.zw)(t.$filters.currency(e.origin_price)),1),(0,l._)("td",null,(0,o.zw)(t.$filters.currency(e.price)),1),e.is_enabled?((0,l.wg)(),(0,l.iD)("td",r,"已啟用")):((0,l.wg)(),(0,l.iD)("td",c,"未啟用")),(0,l._)("td",null,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary",onClick:(0,s.iM)((t=>g.openModal(!1,e)),["prevent"])},"編輯",8,u),(0,l._)("button",{type:"button",class:"btn btn-outline-danger ms-md-1",onClick:(0,s.iM)((t=>{g.openCheckModal(e)}),["prevent"])},"刪除",8,p)])])))),128))])])]),(0,l.Wm)(_,{ref:"productModal",ProductItem:h.tempProduct,onUpdateProduct:g.updateProduct,onCancelUpdate:e[1]||(e[1]=t=>g.getProducts(h.pagination.current_page))},null,8,["ProductItem","onUpdateProduct"]),(0,l.Wm)(f,{ref:"checkModal",dataStatus:h.tempProduct,fromPage:"Product",onDeleteConfirmed:g.deleteProduct},null,8,["dataStatus","onDeleteConfirmed"]),(0,l.Wm)(w,{pages:h.pagination,onEmitPage:g.getProducts},null,8,["pages","onEmitPage"])],64)}const h={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},g={class:"modal-dialog modal-xl",role:"document"},b={class:"modal-content border-0"},_=(0,l._)("div",{class:"modal-header bg-dark text-white"},[(0,l._)("h5",{class:"modal-title",id:"exampleModalLabel"},[(0,l._)("span",null,"新增產品")]),(0,l._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),f={class:"modal-body"},w={class:"row"},y={class:"col-sm-4"},v={class:"mb-3"},P={for:"image",class:"form-label"},k={class:"mb-3"},M={for:"customFile",class:"form-label"},C=(0,l._)("i",{class:"fas fa-spinner fa-spin"},null,-1),U=["alt","src"],x={class:"mt-5"},D={class:"mb-3 input-group"},I={style:{"max-width":"225px","text-overflow":"ellipsis","white-space":"nowrap"},class:"overflow-hidden"},$=["onClick"],L=(0,l._)("span",null,"隱藏",-1),S=[L],V=["onClick"],Z=(0,l._)("span",null,"顯示",-1),z=[Z],F=["onClick"],N=["src","alt"],j={class:"col-sm-8"},H={class:"mb-3"},W={for:"title",class:"form-label w-100"},Y={class:"row gx-2"},K={class:"mb-3 col-md-6"},O={for:"category",class:"form-label w-100"},E={class:"mb-3 col-md-6"},q={for:"price",class:"form-label w-100"},B={class:"row gx-2"},A={class:"mb-3 col-md-6"},G={for:"origin_price",class:"form-label w-100"},J={class:"mb-3 col-md-6"},Q={for:"price",class:"form-label w-100"},R=(0,l._)("hr",null,null,-1),T={class:"mb-3"},X={for:"description",class:"form-label w-100"},tt={class:"mb-3"},et={for:"content",class:"form-label w-100"},at={class:"mb-3"},lt={class:"form-check"},ot={class:"form-check-label",for:"is_enabled"},st={class:"modal-footer"};function it(t,e,a,i,d,n){return(0,l.wg)(),(0,l.iD)("div",h,[(0,l._)("div",g,[(0,l._)("div",b,[_,(0,l._)("div",f,[(0,l._)("div",w,[(0,l._)("div",y,[(0,l._)("div",v,[(0,l._)("label",P,[(0,l.Uk)("輸入圖片網址 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"image",placeholder:"請輸入圖片連結","onUpdate:modelValue":e[0]||(e[0]=t=>d.tempProduct.imageUrl=t)},null,512),[[s.nr,d.tempProduct.imageUrl]])])]),(0,l._)("div",k,[(0,l._)("label",M,[(0,l.Uk)("或 上傳圖片(圖片大小:2MB以下) "),C,(0,l._)("input",{type:"file",id:"customFile",class:"form-control",onChange:e[1]||(e[1]=(...t)=>n.uploadFile&&n.uploadFile(...t)),ref:"fileInput"},null,544)])]),(0,l._)("img",{class:"img-fluid",alt:d.tempProduct.title,src:d.tempProduct.imageUrl},null,8,U),(0,l._)("div",x,[(0,l._)("div",D,[(0,l.wy)((0,l._)("input",{type:"url",class:"form-control form-control",placeholder:"請輸入連結","onUpdate:modelValue":e[2]||(e[2]=t=>d.tempImg=t)},null,512),[[s.nr,d.tempImg]]),(0,l._)("button",{type:"button",class:"btn btn-outline-danger",onClick:e[3]||(e[3]=(0,s.iM)((t=>d.tempImg=""),["prevent"]))}," 清除 ")]),(0,l._)("div",null,[(0,l._)("button",{class:"btn btn-outline-primary btn-sm d-block w-100",onClick:e[4]||(e[4]=(...t)=>n.addNewImgs&&n.addNewImgs(...t))}," 新增圖片 ")]),((0,l.wg)(!0),(0,l.iD)(l.HY,null,(0,l.Ko)(d.tempProduct.imagesUrl,((t,e)=>((0,l.wg)(),(0,l.iD)("div",{key:e},[(0,l._)("div",I,(0,o.zw)(t),1),(0,l._)("div",null,[t===d.isShowurl&&!0===d.isShow?((0,l.wg)(),(0,l.iD)("button",{key:0,class:"btn btn-outline-primary",onClick:a=>n.showImages(t,e)},S,8,$)):((0,l.wg)(),(0,l.iD)("button",{key:1,class:"btn btn-outline-primary",onClick:a=>n.showImages(t,e)},z,8,V)),(0,l._)("button",{class:"btn btn-outline-danger me-2",onClick:e=>n.deleteImages(t)}," 刪除",8,F)]),(0,l._)("div",null,[t===d.isShowurl&&d.isShow?((0,l.wg)(),(0,l.iD)("img",{key:0,src:t,alt:d.tempProduct.title+e,class:"img-fluid"},null,8,N)):(0,l.kq)("",!0)])])))),128))])]),(0,l._)("div",j,[(0,l._)("div",H,[(0,l._)("label",W,[(0,l.Uk)("標題 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[5]||(e[5]=t=>d.tempProduct.title=t)},null,512),[[s.nr,d.tempProduct.title]])])]),(0,l._)("div",Y,[(0,l._)("div",K,[(0,l._)("label",O,[(0,l.Uk)("分類 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[6]||(e[6]=t=>d.tempProduct.category=t)},null,512),[[s.nr,d.tempProduct.category]])])]),(0,l._)("div",E,[(0,l._)("label",q,[(0,l.Uk)("單位 "),(0,l.wy)((0,l._)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[7]||(e[7]=t=>d.tempProduct.unit=t)},null,512),[[s.nr,d.tempProduct.unit]])])])]),(0,l._)("div",B,[(0,l._)("div",A,[(0,l._)("label",G,[(0,l.Uk)("原價 "),(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[8]||(e[8]=t=>d.tempProduct.origin_price=t)},null,512),[[s.nr,d.tempProduct.origin_price]])])]),(0,l._)("div",J,[(0,l._)("label",Q,[(0,l.Uk)("售價 "),(0,l.wy)((0,l._)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[9]||(e[9]=t=>d.tempProduct.price=t)},null,512),[[s.nr,d.tempProduct.price]])])])]),R,(0,l._)("div",T,[(0,l._)("label",X,[(0,l.Uk)("產品描述 "),(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[10]||(e[10]=t=>d.tempProduct.description=t)},null,512),[[s.nr,d.tempProduct.description]])])]),(0,l._)("div",tt,[(0,l._)("label",et,[(0,l.Uk)("說明內容 "),(0,l.wy)((0,l._)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[11]||(e[11]=t=>d.tempProduct.content=t)},null,512),[[s.nr,d.tempProduct.content]])])]),(0,l._)("div",at,[(0,l._)("div",lt,[(0,l._)("label",ot,[(0,l.Uk)(" 是否啟用 "),(0,l.wy)((0,l._)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[12]||(e[12]=t=>d.tempProduct.is_enabled=t)},null,512),[[s.e8,d.tempProduct.is_enabled]])])])])])])]),(0,l._)("div",st,[(0,l._)("button",{type:"button",class:"btn btn-outline-secondary","data-bs-dismiss":"modal",onClick:e[13]||(e[13]=(0,s.iM)((e=>t.$emit("cancel-update")),["prevent"]))},"取消 "),(0,l._)("button",{type:"button",class:"btn btn-primary",onClick:e[14]||(e[14]=(0,s.iM)((e=>t.$emit("update-product",d.tempProduct)),["prevent"]))},"確認")])])])],512)}a(7658);var dt=a(7424),nt=a.n(dt),rt={data(){return{modal:{},tempImg:"",isShowurl:"",isShow:!1,tempProduct:{imagesUrl:[]}}},props:{ProductItem:{type:Object,default(){return{}}}},inject:["emitter"],watch:{ProductItem(){this.tempProduct=this.ProductItem,this.tempProduct.imagesUrl||(this.tempProduct.imagesUrl=[])}},methods:{showModal(){this.modal.show()},hideModal(){this.modal.hide()},uploadFile(){const t=this.$refs.fileInput.files[0],e=new FormData;e.append("file-to-upload",t);const a="https://vue3-course-api.hexschool.io/api/flower-api/admin/upload";this.$http.post(a,e).then((t=>{t.data.success&&(this.tempProduct.imageUrl=t.data.imageUrl,this.emitter.emit("push-message",{style:"success",title:"上傳成功"}))})).catch((()=>{this.emitter.emit("push-message",{style:"danger",title:"上傳失敗"})}))},addNewImgs(){this.tempImg&&(this.tempProduct.imagesUrl.push(this.tempImg),this.tempImg="")},deleteImages(t){const e=this.tempProduct.imagesUrl.indexOf(t);this.tempProduct.imagesUrl.splice(e,1)},showImages(t){this.isShowurl=t,this.isShow=!this.isShow}},mounted(){this.modal=new(nt())(this.$refs.modal)}},ct=a(3744);const ut=(0,ct.Z)(rt,[["render",it]]);var pt=ut,mt=a(6876),ht=a(7250),gt={data(){return{productList:[],pagination:{},isNew:!1,tempProduct:{},isLoading:!1}},components:{ProductModal:pt,DoubleCheckModal:mt.Z,Pagination:ht.Z},inject:["emitter"],methods:{getProducts(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/flower-api/admin/products?page=${t}`;this.$http.get(e).then((t=>{this.productList=t.data.products,this.pagination=t.data.pagination,this.isLoading=!1}))},deleteProduct(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/flower-api/admin/product/${t.id}`;this.$http.delete(e).then((t=>{t.data.success&&(this.isLoading=!1,this.getProducts(this.pagination.current_page),this.$refs.checkModal.hideModal(),this.emitter.emit("push-message",{style:"success",title:t.data.message}))}))},openModal(t,e){this.tempProduct=t?{}:{...e},this.isNew=t,this.$refs.productModal.showModal()},openCheckModal(t){this.tempProduct={...t},this.$refs.checkModal.showModal()},updateProduct(t){this.isLoading=!0,this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/flower-api/admin/product",a="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/flower-api/admin/product/${t.id}`,a="put"),this.$http[a](e,{data:t}).then((t=>{t.data.success?(this.isLoading=!1,this.tempProduct={},this.getProducts(this.pagination.current_page),this.$refs.productModal.hideModal(),this.emitter.emit("push-message",{style:"success",title:t.data.message})):(this.isLoading=!1,this.emitter.emit("push-message",{style:"danger",title:"更新失敗",content:t.data.message.join("、")}))}))}},created(){this.getProducts()},mounted(){this.emitter.emit("dash-change",{data:"productmanage"})}};const bt=(0,ct.Z)(gt,[["render",m]]);var _t=bt}}]);
//# sourceMappingURL=354.95683b33.js.map