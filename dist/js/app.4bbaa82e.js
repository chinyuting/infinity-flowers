(function(){"use strict";var e={6189:function(e,n,t){var o=t(9963),r=t(6154),i=t(2954),a=t(2387),s=t(6391),c=t(2389),u=t(2369),d=t.n(u),l=t(2346),f=t(6252);function p(e,n,t,o,r,i){const a=(0,f.up)("router-view"),s=(0,f.up)("ToastList"),c=(0,f.up)("BackToTop");return(0,f.wg)(),(0,f.iD)(f.HY,null,[(0,f.Wm)(a),(0,f.Wm)(s),(0,f.Wm)(c)],64)}var m=t(9391);const h=(0,m.Z)();var b=h;const g={class:"toast-container pe-3 position-fixed top-0 end-0"};function v(e,n,t,o,r,i){const a=(0,f.up)("ToastMessage");return(0,f.wg)(),(0,f.iD)("div",g,[((0,f.wg)(!0),(0,f.iD)(f.HY,null,(0,f.Ko)(r.messages,((e,n)=>((0,f.wg)(),(0,f.j4)(a,{key:n,msg:e},null,8,["msg"])))),128))])}t(7658);var y=t(3577);const w={class:"toast",role:"alert","aria-live":"assertive","aria-atomic":"true",ref:"toast"},T={class:"toast-header rounded"},k=(0,f._)("i",{class:"bi bi-flower3",style:{"font-size":"2rem"}},null,-1),O=[k],C={class:"me-auto"},_=(0,f._)("button",{type:"button",class:"btn-close","data-bs-dismiss":"toast","aria-label":"Close"},null,-1),j={key:0,class:"toast-body"};function x(e,n,t,o,r,i){return(0,f.wg)(),(0,f.iD)("div",w,[(0,f._)("div",T,[(0,f._)("span",{class:(0,y.C_)([`text-${t.msg.style}`,"p-2"])},O,2),(0,f._)("strong",C,(0,y.zw)(t.msg.title),1),_]),t.msg.content?((0,f.wg)(),(0,f.iD)("div",j,(0,y.zw)(t.msg.content),1)):(0,f.kq)("",!0)],512)}var E=t(2776),P=t.n(E),S={name:"ToastComponent",props:["msg"],mounted(){const e=this.$refs.toast,n=new(P())(e,{delay:6e3});n.show()}},N=t(3744);const A=(0,N.Z)(S,[["render",x]]);var F=A,M={data(){return{messages:[]}},components:{ToastMessage:F},inject:["emitter"],mounted(){this.emitter.on("push-message",(e=>{const{style:n="success",title:t,content:o}=e;this.messages.push({style:n,title:t,content:o})}))}};const D=(0,N.Z)(M,[["render",v]]);var L=D;t(5577);const B=(0,f._)("i",{class:"bi bi-arrow-up-short position-absolute top-50 start-50 translate-middle",style:{"font-size":"2rem"}},null,-1),Z=[B];function z(e,n,t,r,i,a){return(0,f.wg)(),(0,f.iD)("button",{onClick:n[0]||(n[0]=(0,o.iM)(((...e)=>a.topFunction&&a.topFunction(...e)),["prevent"])),style:(0,y.j5)([{width:"45px",height:"45px",display:"none"},{display:i.isTop?"block":"none"}]),class:"btn btn-danger rounded-circle position-fixed bottom-0 end-0 m-3",title:"Go to top"},Z,4)}var H={data(){return{isTop:!1}},methods:{topFunction(){document.body.scrollTop=0,document.documentElement.scrollTop=0}},created(){const e=this;window.addEventListener("scroll",(()=>{const n=window.scrollY;e.isTop=n>=100}))}};const I=(0,N.Z)(H,[["render",z]]);var W=I,$={provide(){return{emitter:b}},components:{ToastList:L,BackToTop:W}};const q=(0,N.Z)($,[["render",p]]);var V=q,Q=t(2201);const Y=[{path:"/",component:()=>Promise.all([t.e(424),t.e(786)]).then(t.bind(t,1786)),children:[{path:"/",name:"home",component:()=>Promise.all([t.e(424),t.e(330)]).then(t.bind(t,6984))},{path:"products",name:"products",component:()=>t.e(533).then(t.bind(t,533))},{path:"products/:productId",name:"productdetail",component:()=>t.e(668).then(t.bind(t,6668))},{path:"cart",name:"cart",component:()=>t.e(623).then(t.bind(t,623))},{path:"favorite",name:"favorite",component:()=>t.e(475).then(t.bind(t,4475))},{path:"order",name:"order",component:()=>t.e(676).then(t.bind(t,3676))},{path:"order/:orderid",name:"ordercheck",component:()=>t.e(280).then(t.bind(t,2280))},{path:"order/:orderid/paid",name:"orderPaid",component:()=>t.e(543).then(t.bind(t,3543))},{path:"orderSearch",name:"orderSearch",component:()=>t.e(401).then(t.bind(t,401))},{path:"QA",name:"QA",component:()=>t.e(413).then(t.bind(t,3413))}]},{path:"/login",name:"login",component:()=>t.e(979).then(t.bind(t,7979))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([t.e(424),t.e(188)]).then(t.bind(t,8188)),children:[{path:"productmanage",name:"productmanage",component:()=>Promise.all([t.e(424),t.e(354)]).then(t.bind(t,5354))},{path:"ordermanage",name:"ordermanage",component:()=>Promise.all([t.e(424),t.e(412)]).then(t.bind(t,5412))},{path:"couponmanage",name:"couponmanage",component:()=>Promise.all([t.e(424),t.e(90)]).then(t.bind(t,1090))}]},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>t.e(551).then(t.bind(t,6551))}],K=(0,Q.p7)({history:(0,Q.r5)(),routes:Y,scrollBehavior(){return{top:0}}});var U=K;function G(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function J(e){return new Date(1e3*e).toISOString().split("T")[0]}(0,i.aH)("required",a.C1),(0,i.aH)("email",a.Do),(0,i.aH)("min",a.VV),(0,i.jQ)({generateMessage:(0,s.NC)({zh_TW:c}),validateOnInput:!0}),(0,s.i_)("zh_TW");const R=(0,o.ri)(V);R.config.globalProperties.$filters={currency:G,date:J},R.component("VForm",i.l0),R.component("VField",i.gN),R.component("ErrorMessage",i.Bc),R.component("LoadingOverlay",d()),R.use(l.Z,r.Z),R.use(U),R.mount("#app")}},n={};function t(o){var r=n[o];if(void 0!==r)return r.exports;var i=n[o]={id:o,loaded:!1,exports:{}};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,o,r,i){if(!o){var a=1/0;for(d=0;d<e.length;d++){o=e[d][0],r=e[d][1],i=e[d][2];for(var s=!0,c=0;c<o.length;c++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](o[c])}))?o.splice(c--,1):(s=!1,i<a&&(a=i));if(s){e.splice(d--,1);var u=r();void 0!==u&&(n=u)}}return n}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,r,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var o in n)t.o(n,o)&&!t.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:n[o]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,o){return t.f[o](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{90:"be7f2112",188:"d09993cb",280:"8d9e0443",330:"9da30f57",354:"d4faab87",401:"b390ebef",412:"adf6fa4b",413:"2ac45b64",424:"b2df105d",475:"3f4c7378",533:"4fdfad5a",543:"4eb589d2",551:"f1531200",623:"5cd115eb",668:"ad2f3505",676:"85ea7047",786:"cd69e2b1",979:"129474f5"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{90:"76b0c724",188:"efbd9093",280:"501f61b2",330:"0db81ce8",354:"76b0c724",401:"47798bea",412:"76b0c724",413:"e7fe30d7",475:"5e0bba8b",533:"1f8d20be",543:"501f61b2",551:"61dbc548",623:"18735747",668:"a05d5c6e",676:"a59fc969",786:"01c6c8bd",979:"1cf5b40e"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="infinity-flowers:";t.l=function(o,r,i,a){if(e[o])e[o].push(r);else{var s,c;if(void 0!==i)for(var u=document.getElementsByTagName("script"),d=0;d<u.length;d++){var l=u[d];if(l.getAttribute("src")==o||l.getAttribute("data-webpack")==n+i){s=l;break}}s||(c=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,t.nc&&s.setAttribute("nonce",t.nc),s.setAttribute("data-webpack",n+i),s.src=o),e[o]=[r];var f=function(n,t){s.onerror=s.onload=null,clearTimeout(p);var r=e[o];if(delete e[o],s.parentNode&&s.parentNode.removeChild(s),r&&r.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=f.bind(null,s.onerror),s.onload=f.bind(null,s.onload),c&&document.head.appendChild(s)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/infinity-flowers/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,t,o,r){var i=document.createElement("link");i.rel="stylesheet",i.type="text/css";var a=function(t){if(i.onerror=i.onload=null,"load"===t.type)o();else{var a=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.href||n,c=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=a,c.request=s,i.parentNode&&i.parentNode.removeChild(i),r(c)}};return i.onerror=i.onload=a,i.href=n,t?t.parentNode.insertBefore(i,t.nextSibling):document.head.appendChild(i),i},n=function(e,n){for(var t=document.getElementsByTagName("link"),o=0;o<t.length;o++){var r=t[o],i=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(i===e||i===n))return r}var a=document.getElementsByTagName("style");for(o=0;o<a.length;o++){r=a[o],i=r.getAttribute("data-href");if(i===e||i===n)return r}},o=function(o){return new Promise((function(r,i){var a=t.miniCssF(o),s=t.p+a;if(n(a,s))return r();e(o,s,null,r,i)}))},r={143:0};t.f.miniCss=function(e,n){var t={90:1,188:1,280:1,330:1,354:1,401:1,412:1,413:1,475:1,533:1,543:1,551:1,623:1,668:1,676:1,786:1,979:1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=o(e).then((function(){r[e]=0}),(function(n){throw delete r[e],n})))}}}(),function(){var e={143:0};t.f.j=function(n,o){var r=t.o(e,n)?e[n]:void 0;if(0!==r)if(r)o.push(r[2]);else{var i=new Promise((function(t,o){r=e[n]=[t,o]}));o.push(r[2]=i);var a=t.p+t.u(n),s=new Error,c=function(o){if(t.o(e,n)&&(r=e[n],0!==r&&(e[n]=void 0),r)){var i=o&&("load"===o.type?"missing":o.type),a=o&&o.target&&o.target.src;s.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,r[1](s)}};t.l(a,c,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,o){var r,i,a=o[0],s=o[1],c=o[2],u=0;if(a.some((function(n){return 0!==e[n]}))){for(r in s)t.o(s,r)&&(t.m[r]=s[r]);if(c)var d=c(t)}for(n&&n(o);u<a.length;u++)i=a[u],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(d)},o=self["webpackChunkinfinity_flowers"]=self["webpackChunkinfinity_flowers"]||[];o.forEach(n.bind(null,0)),o.push=n.bind(null,o.push.bind(o))}();var o=t.O(void 0,[998],(function(){return t(6189)}));o=t.O(o)})();
//# sourceMappingURL=app.4bbaa82e.js.map