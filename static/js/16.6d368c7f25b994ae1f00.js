webpackJsonp([16],{"5taO":function(e,a,l){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var t={render:function(){var e=this,a=e.$createElement,l=e._self._c||a;return l("main",[l("header",{staticClass:"main-title"},[e._v(e._s(e.$route.name))]),e._v(" "),l("section",{staticClass:"main-content scroll"},[l("div",{staticClass:"topmain"},[l("el-form",{ref:"form",attrs:{model:e.form,"label-width":"70px","label-position":"left"}},[l("el-form-item",{attrs:{label:"系统采购单号","label-width":"100px"}},[l("el-input",{attrs:{size:"medium",placeholder:"系统采购单号"},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"入库仓库"}},[l("el-select",{attrs:{placeholder:"选择入库仓",size:"medium"},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}},e._l(e.organ,function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"订单状态"}},[l("el-select",{attrs:{placeholder:"选择订单状态",size:"medium"},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}},e._l(e.organ,function(e){return l("el-option",{key:e.id,attrs:{label:e.name,value:e.id}})}))],1),e._v(" "),l("el-form-item",{attrs:{label:"物料名称"}},[l("el-input",{attrs:{size:"medium"},model:{value:e.form.name,callback:function(a){e.$set(e.form,"name",a)},expression:"form.name"}})],1),e._v(" "),l("el-button",{staticClass:"searchBtn",attrs:{type:"primary",size:"small"}},[e._v("查　询")])],1)],1),e._v(" "),l("div",{staticClass:"main-table"},[l("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,stripe:"",border:""}},[l("el-table-column",{attrs:{type:"index",label:"序号",width:"50"}}),e._v(" "),l("el-table-column",{attrs:{prop:"date",label:"系统采购单号",width:"180"}}),e._v(" "),l("el-table-column",{attrs:{prop:"name",label:"手工采购单号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"物料名称"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"物料规格"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"调拨单位"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"进货数量"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"单价"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"仓库"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"状态"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"预计到货日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"制表日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"快递公司"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"物料批次号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"物料系统编号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"物料手工编号"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"消耗单位"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"生产日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"有效日期"}}),e._v(" "),l("el-table-column",{attrs:{prop:"address",label:"备注"}})],1)],1)])])},staticRenderFns:[]};var r=l("VU/8")({name:"app",data:function(){return{storeDialog:!1,dialogTitle:"进货订单明细",tableData:[{date:"2016-05-02",name:"王小虎",address:"上海市普陀"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀"},{date:"2016-05-02",name:"王小虎",address:"上海市普陀"}],form:{name:"",actDesc:""},organ:[{id:1,name:"阿萨德"},{id:2,name:"发广告"}]}},methods:{editBtn:function(){this.storeDialog=!0},addstoreBtn:function(){}}},t,!1,function(e){l("7M1h")},"data-v-3f5c3269",null);a.default=r.exports},"7M1h":function(e,a){}});
//# sourceMappingURL=16.6d368c7f25b994ae1f00.js.map