(function(){"use strict";var e={2684:function(e,t,n){var o=n(9963),r=n(6154),i=n(2954),a=n(2387),s=n(6391),c=n(2389),u=n(2369),d=n.n(u),l=n(2346),f=n(6252);function p(e,t,n,o,r,i){const a=(0,f.up)("router-view"),s=(0,f.up)("Toast"),c=(0,f.up)("toTop");return(0,f.wg)(),(0,f.iD)(f.HY,null,[(0,f.Wm)(a),(0,f.Wm)(s),(0,f.Wm)(c)],64)}var m=n(9391);const h=(0,m.Z)();var b=h;const g={class:"toast-container pe-3 position-fixed top-0 end-0"};function v(e,t,n,o,r,i){const a=(0,f.up)("ToastMessage");return(0,f.wg)(),(0,f.iD)("div",g,[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(r.messages,((e,t)=>((0,f.wg)(),(0,f.j4)(a,{key:t,msg:e},null,8,["msg"])))),128))])}n(7658);var y=n(3577);const w={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},T={class:"toast-header"},k=(0,f._)("i",{class:"bi bi-flower3",style:{"font-size":"2rem"}},null,-1),O=[k],C={class:"me-auto"},_=(0,f._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),j={key:0,class:"toast-body"};function x(e,t,n,o,r,i){return(0,f.wg)(),(0,f.iD)("div",w,[(0,f._)("div",T,[(0,f._)("span",{class:(0,y.C_)([`text-${n.msg.style}`,"p-2"])},O,2),(0,f._)("strong",C,(0,y.zw)(n.msg.title),1),_]),n.msg.content?((0,f.wg)(),(0,f.iD)("div",j,(0,y.zw)(n.msg.content),1)):(0,f.kq)("",!0)],512)}var E=n(2776),P=n.n(E),S={name:"ToastComponent",props:["msg"],mounted(){const e=this.$refs.toast,t=new(P())(e,{delay:6e3});t.show()}},A=n(3744);const N=(0,A.Z)(S,[["render",x]]);var D=N,F={data(){return{messages:[]}},components:{ToastMessage:D},inject:["emitter"],mounted(){this.emitter.on("push-message",(e=>{const{style:t="success",title:n,content:o}=e;this.messages.push({style:t,title:n,content:o})}))}};const M=(0,A.Z)(F,[["render",v]]);var L=M;n(5577);const Z=(0,f._)("i",{class:"bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle",style:{"font-size":"2rem"}},null,-1),z=[Z];function B(e,t,n,r,i,a){return(0,f.wg)(),(0,f.iD)("button",{onClick:t[0]||(t[0]=(0,o.iM)(((...e)=>a.topFunction&&a.topFunction(...e)),["prevent"])),style:(0,y.j5)([{width:"45px",height:"45px",display:"none"},{display:i.isTop?"block":"none"}]),class:"btn btn-danger rounded-circle position-fixed bottom-0 end-0 m-3",title:"Go to top"},z,4)}var H={data(){return{isTop:!1}},methods:{topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},created(){const e=this;window.addEventListener("scroll",(()=>{const t=window.scrollY;e.isTop=t>=100}))}};const I=(0,A.Z)(H,[["render",B]]);var W=I,$={provide(){return{emitter:b}},components:{Toast:L,toTop:W}};const q=(0,A.Z)($,[["render",p]]);var V=q,Q=n(2201);const Y=[{path:"/",component:()=>Promise.all([n.e(424),n.e(497)]).then(n.bind(n,1497)),children:[{path:"/",name:"home",component:()=>Promise.all([n.e(424),n.e(593)]).then(n.bind(n,5348))},{path:"products",name:"products",component:()=>n.e(361).then(n.bind(n,2361))},{path:"products/:productId",name:"productdetail",component:()=>n.e(666).then(n.bind(n,666))},{path:"cart",name:"cart",component:()=>n.e(251).then(n.bind(n,7251))},{path:"favorite",name:"favorite",component:()=>n.e(106).then(n.bind(n,2106))},{path:"order",name:"order",component:()=>n.e(182).then(n.bind(n,7182))},{path:"order/:orderid",name:"ordercheck",component:()=>n.e(766).then(n.bind(n,766))},{path:"order/:orderid/paid",name:"orderPaid",component:()=>n.e(252).then(n.bind(n,5252))},{path:"orderSearch",name:"orderSearch",component:()=>n.e(382).then(n.bind(n,3382))},{path:"QA",name:"QA",component:()=>n.e(660).then(n.bind(n,9660))}]},{path:"/login",name:"login",component:()=>n.e(186).then(n.bind(n,3186))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([n.e(424),n.e(260)]).then(n.bind(n,6260)),children:[{path:"productmanage",name:"productmanage",component:()=>Promise.all([n.e(424),n.e(869)]).then(n.bind(n,9869))},{path:"ordermanage",name:"ordermanage",component:()=>Promise.all([n.e(424),n.e(431)]).then(n.bind(n,9431))},{path:"couponmanage",name:"couponmanage",component:()=>Promise.all([n.e(424),n.e(923)]).then(n.bind(n,2923))}]}],K=(0,Q.p7)({history:(0,Q.r5)(),routes:Y,scrollBehavior(){return{top:0}}});var U=K;function G(e){const t=parseInt(e,10);return`${t.toFixed(0).replace(/./g,((e,t,n)=>t&&"."!==e&&(n.length-t)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function J(e){return new Date(1e3*e).toISOString().split("T")[0]}(0,i.aH)("required",a.C1),(0,i.aH)("email",a.Do),(0,i.aH)("min",a.VV),(0,i.jQ)({generateMessage:(0,s.NC)({zh_TW:c}),validateOnInput:!0}),(0,s.i_)("zh_TW");const R=(0,o.ri)(V);R.config.globalProperties.$filters={currency:G,date:J},R.component("VForm",i.l0),R.component("VField",i.gN),R.component("ErrorMessage",i.Bc),R.component("LoadingOverlay",d()),R.use(l.Z,r.Z),R.use(U),R.mount("#app")}},t={};function n(o){var r=t[o];if(void 0!==r)return r.exports;var i=t[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var u=r();void 0!==u&&(t=u)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,o){return n.f[o](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{106:"bf9e490a",182:"169b43a1",186:"698207fd",251:"35190b60",252:"5f7e2492",260:"2665594f",361:"a20fe07f",382:"63041531",424:"b2df105d",431:"7daa5bb7",497:"f7e2bc73",593:"8e660e59",660:"ac06afc1",666:"87513a4c",766:"f6109df8",869:"9dbdeabb",923:"9a6c58bb"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+"."+{106:"5e0bba8b",182:"a59fc969",186:"64e97abc",251:"18735747",252:"501f61b2",260:"efbd9093",361:"d68f5627",382:"c14a0693",497:"2411e45b",593:"252a7baf",666:"a05d5c6e",766:"501f61b2"}[e]+".css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="infinity-flowers:";n.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==t+i){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=o),e[o]=[r];var f=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/infinity-flowers/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,n,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(n){if(i.onerror=i.onload=null,"load"===n.type)o();else{var a=n&&("load"===n.type?"missing":n.type),s=n&&n.target&&n.target.href||t,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=t,n?n.parentNode.insertBefore(i,n.nextSibling):document.head.appendChild(i),i},t=function(e,t){for(var n=document.getElementsByTagName("link"),o=0;o<n.length;o++){var r=n[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===t))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===t)return r}},o=function(o){return new Promise((function(r,i){var a=n.miniCssF(o),s=n.p+a;if(t(a,s))return r();e(o,s,null,r,i)}))},r={143:0};n.f.miniCss=function(e,t){var n={106:1,182:1,186:1,251:1,252:1,260:1,361:1,382:1,497:1,593:1,666:1,766:1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=o(e).then((function(){r[e]=0}),(function(t){throw delete r[e],t})))}}}(),function(){var e={143:0};n.f.j=function(t,o){var r=n.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(n,o){r=e[t]=[n,o]}));o.push(r[2]=i);var a=n.p+n.u(t),s=new Error,c=function(o){if(n.o(e,t)&&(r=e[t],0!==r&&(e[t]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};n.l(a,c,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(t){return 0!==e[t]}))){for(r in s)n.o(s,r)&&(n.m[r]=s[r]);if(c)var d=c(n)}for(t&&t(o);u<a.length;u++)i=a[u],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[998],(function(){return n(2684)}));o=n.O(o)})();
//# sourceMappingURL=app.30cb4b0e.js.map