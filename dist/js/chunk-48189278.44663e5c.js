(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-48189278"],{"2caa":function(t,a,e){"use strict";e("3f4f")},"3f4f":function(t,a,e){},"40a0":function(t,a,e){},"546d":function(t,a,e){"use strict";e("40a0")},f4c5:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",[e("div",{attrs:{id:"filtroBuscar"}},[e("div",{attrs:{id:"ContFiltro"}},[e("v-row",{staticClass:"d-flex justify-start mb-6",attrs:{width:"80"}},[e("v-col",[e("v-text-field",{attrs:{id:"Codigo",label:"Código",rules:t.codeRules,counter:5,outlined:"",dense:"",type:"number"},model:{value:t.Codigo,callback:function(a){t.Codigo=a},expression:"Codigo"}})],1),e("v-col",[e("v-select",{attrs:{items:t.itemsTip,label:"Tipo","data-vv-name":"Tipo",outlined:"",dense:""},model:{value:t.Tipo,callback:function(a){t.Tipo=a},expression:"Tipo"}})],1),e("v-col",[e("v-select",{attrs:{items:t.itemsMarc,label:"Marca","data-vv-name":"Marca",outlined:"",dense:""},model:{value:t.Marca,callback:function(a){t.Marca=a},expression:"Marca"}})],1)],1)],1),e("div",{attrs:{id:"ContBot"}},[e("v-btn",{staticClass:"btnFondo",attrs:{depressed:"",color:"white",text:""},on:{click:t.getBusqueda}},[t._v(" Buscar Producto ")])],1)]),e("div",[e("div",{attrs:{id:"ResultBusqueda"}},t._l(t.productsB,(function(t){return e("div",{key:t.llave},[e("FormBuscarDatosV",{attrs:{productB:t}})],1)})),0)])])},o=[],s=e("4360"),c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"contImag"}},[e("h1",[t._v(t._s(t.productB.name))]),e("v-card",{staticClass:"mx-auto",attrs:{id:"contCard","max-width":"400"}},[e("v-img",{staticClass:"white--text align-end",attrs:{id:"contImgn",height:"200px",contain:"",src:t.productB.img}},[e("v-card-title",[t._v("Producto")])],1),e("v-card-text",{staticClass:"text--primary"},[e("div",[t._v(" Descripcion: "+t._s(t.productB.description)+" ")]),e("div",[t._v(" Precio: "+t._s(t.productB.price)+" ")]),e("div",[t._v(" Marca: "+t._s(t.productB.brand)+" ")]),e("div",[t._v(" Tipo: "+t._s(t.productB.type)+" ")])]),e("v-card-actions",[e("div",{staticClass:"botonesb"},[e("div",{staticClass:"btnEditb"},[e("v-btn",{staticClass:"btnFondo botonesFooter",attrs:{color:"white",text:""},on:{click:t.DirEdit}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-pencil")]),t._v("Editar ")],1)],1),e("div",{staticClass:"btnDeleteb"},[e("v-btn",{staticClass:"btnFondo botonesFooter",attrs:{color:"white",text:""},on:{click:function(a){return t.DirDelete(t.productB)}}},[e("v-icon",{attrs:{left:""}},[t._v("mdi-delete")]),t._v("Eliminar ")],1)],1)])])],1)],1)},r=[],n={props:["productB"],data:function(){return{}},methods:{DirDelete:function(t){s["a"].dispatch("setDelete",t)}}},d=n,l=(e("546d"),e("2877")),u=e("6544"),v=e.n(u),p=e("8336"),m=e("b0af"),b=e("99d9"),f=e("132d"),C=e("adda"),h=Object(l["a"])(d,c,r,!1,null,null,null),B=h.exports;v()(h,{VBtn:p["a"],VCard:m["a"],VCardActions:b["a"],VCardText:b["b"],VCardTitle:b["c"],VIcon:f["a"],VImg:C["a"]});var g={components:{FormBuscarDatosV:B},data:function(){return{Codigo:"",Tipo:"",itemsTip:["","Lácteo","Gaseosa","Galleta","Ponque"],Marca:"",itemsMarc:["","Alpina","Alquería","Coca-cola","Bimbo"],codeRules:[function(t){return t.length<=5||"Código debe tener máximo 5 dígitos"}]}},computed:{productsB:function(){return s["a"].state.productsB}},methods:{getBusqueda:function(){var t={};""!=this.Tipo||""!==this.Marca||""!==this.Codigo?(""!=this.Tipo&&(t.type=this.Tipo),this.Codigo&&(t.id=this.Codigo),this.Marca&&(t.brand=this.Marca),s["a"].dispatch("setBuscar",t)):alert("Debe diligenciar seleccionar un campo para la busqueda")}}},_=g,x=(e("2caa"),e("62ad")),T=e("0fd9"),w=e("b974"),V=e("8654"),M=Object(l["a"])(_,i,o,!1,null,null,null);a["default"]=M.exports;v()(M,{VBtn:p["a"],VCol:x["a"],VRow:T["a"],VSelect:w["a"],VTextField:V["a"]})}}]);
//# sourceMappingURL=chunk-48189278.44663e5c.js.map