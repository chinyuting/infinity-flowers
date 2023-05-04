(function(){"use strict";var e={7782:function(e,t,n){var o=n(9963),r=n(6154),a=n(2954),i=n(2387),c=n(6391),s=n(2389),u=n(2369),d=n.n(u),l=n(2346),p=n(6252);function f(e,t,n,o,r,a){const i=(0,p.up)("router-view"),c=(0,p.up)("ToastList"),s=(0,p.up)("BackToTop");return(0,p.wg)(),(0,p.iD)(p.HY,null,[(0,p.Wm)(i),(0,p.Wm)(c),(0,p.Wm)(s)],64)}var m=n(9391);const h=(0,m.Z)();var b=h;const g={class:"toast-container pe-3 position-fixed top-0 end-0"};function v(e,t,n,o,r,a){const i=(0,p.up)("ToastMessage");return(0,p.wg)(),(0,p.iD)("div",g,[((0,p.wg)(!0),(0,p.iD)(p.HY,null,(0,p.Ko)(r.messages,((e,t)=>((0,p.wg)(),(0,p.j4)(i,{key:t,msg:e},null,8,["msg"])))),128))])}n(7658);var y=n(3577);const w={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},T={class:"toast-header rounded"},k=(0,p._)("i",{class:"bi bi-flower3 icon-size"},null,-1),O=[k],C={class:"me-auto"},_=(0,p._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),j={key:0,class:"toast-body"};function E(e,t,n,o,r,a){return(0,p.wg)(),(0,p.iD)("div",w,[(0,p._)("div",T,[(0,p._)("span",{class:(0,y.C_)([`text-${n.msg.style}`,"p-2"])},O,2),(0,p._)("strong",C,(0,y.zw)(n.msg.title),1),_]),n.msg.content?((0,p.wg)(),(0,p.iD)("div",j,(0,y.zw)(n.msg.content),1)):(0,p.kq)("",!0)],512)}var x=n(2776),P=n.n(x),S={name:"ToastComponent",props:["msg"],mounted(){const e=this.$refs.toast,t=new(P())(e,{delay:6e3});t.show()}},N=n(3744);const A=(0,N.Z)(S,[["render",E]]);var F=A,M={data(){return{messages:[]}},components:{ToastMessage:F},inject:["emitter"],mounted(){this.emitter.on("push-message",(e=>{const{style:t="success",title:n,content:o}=e;this.messages.push({style:t,title:n,content:o})}))}};const D=(0,N.Z)(M,[["render",v]]);var L=D;n(5577);const B=(0,p._)("i",{class:"bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle icon-size"},null,-1),Z=[B];function z(e,t,n,r,a,i){return(0,p.wg)(),(0,p.iD)("button",{onClick:t[0]||(t[0]=(0,o.iM)(((...e)=>i.topFunction&&i.topFunction(...e)),["prevent"])),class:(0,y.C_)(["btn btn-danger rounded-circle position-fixed bottom-0 end-0 m-3 totop-btn",a.isTop?"totop-display-block":"totop-display-none"]),title:"Go to top"},Z,2)}var H={data(){return{isTop:!1}},methods:{topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},created(){const e=this;window.addEventListener("scroll",(()=>{const t=window.scrollY;e.isTop=t>=100}))}};const I=(0,N.Z)(H,[["render",z]]);var W=I,$={provide(){return{emitter:b}},components:{ToastList:L,BackToTop:W}};const q=(0,N.Z)($,[["render",f]]);var V=q,Q=n(2201);const Y=[{path:"/",component:()=>Promise.all([n.e(424),n.e(982)]).then(n.bind(n,7982)),children:[{path:"/",name:"home",component:()=>Promise.all([n.e(424),n.e(408)]).then(n.bind(n,9821))},{path:"products",name:"products",component:()=>n.e(207).then(n.bind(n,5207))},{path:"products/:productId",name:"productdetail",component:()=>n.e(332).then(n.bind(n,1332))},{path:"cart",name:"cart",component:()=>n.e(668).then(n.bind(n,9668))},{path:"favorite",name:"favorite",component:()=>n.e(147).then(n.bind(n,6147))},{path:"order",name:"order",component:()=>n.e(735).then(n.bind(n,8735))},{path:"order/:orderid",name:"ordercheck",component:()=>n.e(847).then(n.bind(n,4847))},{path:"order/:orderid/paid",name:"orderPaid",component:()=>n.e(962).then(n.bind(n,5962))},{path:"orderSearch",name:"orderSearch",component:()=>n.e(52).then(n.bind(n,7052))},{path:"QA",name:"QA",component:()=>n.e(617).then(n.bind(n,4617))}]},{path:"/login",name:"login",component:()=>n.e(692).then(n.bind(n,2692))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([n.e(424),n.e(449)]).then(n.bind(n,4449)),children:[{path:"productmanage",name:"productmanage",component:()=>Promise.all([n.e(424),n.e(644)]).then(n.bind(n,4644))},{path:"ordermanage",name:"ordermanage",component:()=>Promise.all([n.e(424),n.e(53)]).then(n.bind(n,4053))},{path:"couponmanage",name:"couponmanage",component:()=>Promise.all([n.e(424),n.e(233)]).then(n.bind(n,1233))}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>n.e(739).then(n.bind(n,3739))}],K=(0,Q.p7)({history:(0,Q.r5)(),routes:Y,scrollBehavior(){return{top:0}}});var U=K;function G(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function J(e){return new Date(1e3*e).toISOString().split("T")[0]}(0,a.aH)("required",i.C1),(0,a.aH)("email",i.Do),(0,a.aH)("min",i.VV),(0,a.jQ)({generateMessage:(0,c.NC)({zh_TW:s}),validateOnInput:!0}),(0,c.i_)("zh_TW");const R=(0,o.ri)(V);R.config.globalProperties.$filters={currency:G,date:J},R.component("VForm",a.l0),R.component("VField",a.gN),R.component("ErrorMessage",a.Bc),R.component("LoadingOverlay",d()),R.use(l.Z,r.Z),R.use(U),R.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,a){if(!o){var i=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],a=e[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,a<i&&(i=a));if(c){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}a=a||0;for(var d=e.length;d>0&&e[d-1][2]>a;d--)e[d]=e[d-1];e[d]=[o,r,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{52:"dc928974",53:"bd60008b",147:"e8184f47",207:"f131a4b8",233:"cb015547",332:"a69119c6",408:"f4e21c7b",424:"b2df105d",449:"7d7356cb",617:"630c55af",644:"b9fe9d4a",668:"25070b61",692:"07a2b166",735:"a4fdf0ac",739:"010cd67e",847:"84349766",962:"b2b6ef23",982:"c46d4a28"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{52:"47798bea",53:"34c6d639",147:"b89e7ada",207:"2bc07cc1",233:"34c6d639",332:"5780c065",408:"2968d6ff",449:"c098c3e5",617:"e7fe30d7",644:"87aab558",668:"0877c22d",692:"1cf5b40e",735:"eb68ef74",739:"61dbc548",847:"36a2ace7",962:"36a2ace7",982:"035bacad"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="infinity-flowers:";n.l=function(o,r,a,i){if(e[o])e[o].push(r);else{var c,s;if(void 0!==a)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+a){c=l;break}}c||(s=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,n.nc&&c.setAttribute("nonce",n.nc),c.setAttribute("data-webpack",t+a),c.src=o),e[o]=[r];var p=function(t,n){c.onerror=c.onload=null,clearTimeout(f);var r=e[o];if(delete e[o],c.parentNode&&c.parentNode.removeChild(c),r&&r.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=p.bind(null,c.onerror),c.onload=p.bind(null,c.onload),s&&document.head.appendChild(c)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/infinity-flowers/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css";var i=function(n){if(a.onerror=a.onload=null,"load"===n.type)o();else{var i=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.href||t,s=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");s.code="CSS_CHUNK_LOAD_FAILED",s.type=i,s.request=c,a.parentNode&&a.parentNode.removeChild(a),r(s)}};return a.onerror=a.onload=i,a.href=t,n?n.parentNode.insertBefore(a,n.nextSibling):document.head.appendChild(a),a},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],a=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(a===e||a===t))return r}var i=document.getElementsByTagName("style");for(o=0;o<i.length;o++){r=i[o],a=r.getAttribute("data-href");if(a===e||a===t)return r}},o=function(o){return new Promise((function(r,a){var i=n.miniCssF(o),c=n.p+i;if(t(i,c))return r();e(o,c,null,r,a)}))},r={143:0};n.f.miniCss=function(e,t){var n={52:1,53:1,147:1,207:1,233:1,332:1,408:1,449:1,617:1,644:1,668:1,692:1,735:1,739:1,847:1,962:1,982:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=a);var i=n.p+n.u(t),c=new Error,s=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",c.name="ChunkLoadError",c.type=a,c.request=i,r[1](c)}};n.l(i,s,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,a,i=o[0],c=o[1],s=o[2],u=0;if(i.some((function(t){return 0!==e[t]}))){for(r in c)n.o(c,r)&&(n.m[r]=c[r]);if(s)var d=s(n)}for(t&&t(o);u<i.length;u++)a=i[u],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(d)},o=self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(7782)}));o=n.O(o)})();
//# sourceMappingURL=app.2981a958.js.map