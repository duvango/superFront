(function(t){function e(e){for(var a,r,u=e[0],s=e[1],i=e[2],d=0,l=[];d<u.length;d++)r=u[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&l.push(o[r][0]),o[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);p&&p(e);while(l.length)l.shift()();return c.push.apply(c,i||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],a=!0,r=1;r<n.length;r++){var u=n[r];0!==o[u]&&(a=!1)}a&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var a={},r={app:0},o={app:0},c=[];function u(t){return s.p+"js/"+({about:"about"}[t]||t)+"."+{about:"75104b6d","chunk-92a14dc8":"8b4c70ed","chunk-77374b39":"6c3362a1","chunk-80d6feaa":"c802e06e","chunk-29617ac2":"ef810290","chunk-48189278":"44663e5c","chunk-c34d9910":"73c550a3"}[t]+".js"}function s(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-92a14dc8":1,"chunk-77374b39":1,"chunk-80d6feaa":1,"chunk-29617ac2":1,"chunk-48189278":1,"chunk-c34d9910":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise((function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"31d6cfe0","chunk-92a14dc8":"f0222215","chunk-77374b39":"9cc7aa5b","chunk-80d6feaa":"12961983","chunk-29617ac2":"33e96ca3","chunk-48189278":"67cd4180","chunk-c34d9910":"cc0e5dd2"}[t]+".css",o=s.p+a,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var i=c[u],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===a||d===o))return e()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){i=l[u],d=i.getAttribute("data-href");if(d===a||d===o)return e()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=e,p.onerror=function(e){var a=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete r[t],p.parentNode.removeChild(p),n(c)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){r[t]=0})));var a=o[t];if(0!==a)if(a)e.push(a[2]);else{var c=new Promise((function(e,n){a=o[t]=[e,n]}));e.push(a[2]=c);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=u(t);var l=new Error;i=function(e){d.onerror=d.onload=null,clearTimeout(p);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[t]=void 0}};var p=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(e)},s.m=t,s.c=a,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)s.d(n,a,function(e){return t[e]}.bind(null,a));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/",s.oe=function(t){throw console.error(t),t};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var p=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"2caf":function(t,e,n){t.exports=n.p+"img/logosuper.3cd924cb.png"},4360:function(t,e,n){"use strict";var a=n("2b0e"),r=n("2f62"),o=n("bc3a"),c=n.n(o);a["a"].use(r["a"]),e["a"]=new r["a"].Store({state:{products:{},productsB:{},productTemp:{}},mutations:{setProductos:function(t,e){t.products=e},setResultado:function(t,e){t.productsB=e},setDelete:function(t,e){t.productsB=e},setupdate:function(t,e){t.productTemp=e}},actions:{getProductos:function(t){var e=t.commit;c.a.get("http://192.168.0.14:3000/api/product").then((function(t){console.log(t.data.products),e("setProductos",t.data.products)}))},setCrear:function(t,e){var n=t.commit;c.a.post("http://192.168.0.14:3000/api/product/newProduct",e).then((function(t){console.log(t.data.products),n("setCrear",t.data.products)})),this.$router.push("/home")},setBuscar:function(t,e){var n=t.commit;console.log("buscar",e),c.a.post("http://192.168.0.14:3000/api/product/findProduct",e).then((function(t){console.log(t.data),n("setResultado",t.data)}))},setDelete:function(t,e){var n=t.commit;console.log("eliminar",e),c.a.post("http://192.168.0.14:3000/api/product/deleteProduct",e).then((function(t){console.log(t.data),n("setResultado",t.data.products)}))},setUpdate:function(t,e){var n=t.commit;console.log("actualizar",e),c.a.post("http://192.168.0.14:3000/api/product/updateProduct",e).then((function(t){console.log(t.data),n("setResultado",t.data)}))},setProductTemp:function(t,e){var n=t.commit;console.log("actualizar",e),n("setupdate",e)}},modules:{}})},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"#aed269",dark:""}},[a("div",{staticClass:"d-flex align-center"},[a("v-img",{staticClass:"shrink mr-2",attrs:{alt:"Vuetify Logo",contain:"",src:n("2caf"),transition:"scale-transition",width:"250"}})],1),a("v-spacer"),a("v-btn",{attrs:{href:"https://github.com/vuetifyjs/vuetify/releases/latest",target:"_blank",text:""}},[a("span",{staticClass:"mr-2"},[t._v("Latest Release")]),a("v-icon",[t._v("mdi-open-in-new")])],1)],1),a("v-main",[a("div",{staticClass:"contenedor"},[a("router-view")],1)]),a("div",{staticClass:"prueba"},[a("v-app-bar",{attrs:{color:"#aed269",dark:""}},[a("div",{attrs:{align:"center"}},[t._v(" © 2021 Copyright: "),a("a",{staticClass:"text-dark",attrs:{href:"https://mdbootstrap.com/"}},[t._v("CRUD asociados")])])])],1)],1)},o=[],c={name:"App",data:function(){return{}}},u=c,s=(n("ca94"),n("2877")),i=n("6544"),d=n.n(i),l=n("7496"),p=n("40dc"),f=n("8336"),h=n("132d"),m=n("adda"),v=n("f6c4"),b=n("2fa4"),g=Object(s["a"])(u,r,o,!1,null,"9b510b78",null),k=g.exports;d()(g,{VApp:l["a"],VAppBar:p["a"],VBtn:f["a"],VIcon:h["a"],VImg:m["a"],VMain:v["a"],VSpacer:b["a"]});n("d3b7"),n("3ca3"),n("ddb0");var y=n("8c4f"),w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"mx-auto",attrs:{id:"card-login","max-width":"344"}},[n("v-card-text",[n("p",{staticClass:"text-h4 text--primary"},[t._v("Login")]),n("v-form",[n("v-text-field",{attrs:{label:"Usuario",placeholder:"Usuario",outlined:""}}),n("v-text-field",{attrs:{label:"Contraseña",placeholder:"Contraseña",outlined:"",type:"password"}})],1)],1),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"grey"}},[t._v(" Registrar ")]),n("v-btn",{attrs:{text:"",color:"deep-purple accent-4"},on:{click:t.login}},[t._v(" Iniciar Sesión ")])],1)],1)},C=[],x={data:function(){return{}},methods:{login:function(){console.log("Verificando credenciales......."),this.$router.push("/home")}}},P=x,_=(n("d6db"),n("b0af")),V=n("99d9"),j=n("4bd4"),O=n("8654"),T=Object(s["a"])(P,w,C,!1,null,null,null),E=T.exports;d()(T,{VBtn:f["a"],VCard:_["a"],VCardActions:V["a"],VCardText:V["b"],VForm:j["a"],VTextField:O["a"]}),a["a"].use(y["a"]);var S=[{path:"/",name:"Login",component:E},{path:"/Home",name:"Home",component:function(){return Promise.all([n.e("chunk-92a14dc8"),n.e("chunk-77374b39")]).then(n.bind(null,"bb51"))}},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/crear",name:"Crear",component:function(){return Promise.all([n.e("chunk-92a14dc8"),n.e("chunk-80d6feaa"),n.e("chunk-c34d9910")]).then(n.bind(null,"d7dd"))}},{path:"/editar",name:"Editar",component:function(){return Promise.all([n.e("chunk-92a14dc8"),n.e("chunk-80d6feaa"),n.e("chunk-29617ac2")]).then(n.bind(null,"fa75"))}},{path:"/buscar",name:"Buscar",component:function(){return Promise.all([n.e("chunk-92a14dc8"),n.e("chunk-80d6feaa"),n.e("chunk-48189278")]).then(n.bind(null,"f4c5"))}}],A=new y["a"]({mode:"history",base:"/",routes:S}),B=A,L=n("4360"),R=n("f309");a["a"].use(R["a"]);var D=new R["a"]({});a["a"].config.productionTip=!1,new a["a"]({router:B,store:L["a"],vuetify:D,render:function(t){return t(k)}}).$mount("#app")},c7af:function(t,e,n){},ca94:function(t,e,n){"use strict";n("c7af")},d6db:function(t,e,n){"use strict";n("e67a")},e67a:function(t,e,n){}});
//# sourceMappingURL=app.66ed2400.js.map