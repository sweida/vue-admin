webpackJsonp([19],{jahY:function(e,t){},lMDW:function(e,t,l){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i={data:function(){return{form:{id:"",name:"",region:""},dialogImageUrl:"https://avatars2.githubusercontent.com/u/23181508?s=460&v=4",dialogVisible:!1}},methods:{onSubmit:function(){""==this.id||""==this.$store.state.form.name?this.$message.error("信息不能为空"):(this.form.id,this.$store.state.form.id,console.log(this.$store.state.form.name),this.$store.state.user.name,this.$store.state.form.name,this.$message.success("账号信息修改成功"))},handleRemove:function(e,t){console.log(e,t)},handlePictureCardPreview:function(e){this.dialogImageUrl=e.url,this.dialogVisible=!0}}},o={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",[l("h2",[e._v("账号信息")]),e._v(" "),l("el-form",{ref:"form",attrs:{"label-width":"100px"}},[l("el-form-item",{attrs:{label:"管理员账号"}},[l("el-input",{model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"管理员昵称"}},[l("el-input",{model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),l("el-form-item",{attrs:{label:"管理员级别"}},[l("el-select",{attrs:{placeholder:"请选择级别"},model:{value:e.form.region,callback:function(t){e.$set(e.form,"region",t)},expression:"form.region"}},[l("el-option",{attrs:{label:"超级管理员",value:"level1"}}),e._v(" "),l("el-option",{attrs:{label:"普通管理员",value:"level2"}}),e._v(" "),l("el-option",{attrs:{label:"临时管理员",value:"level3"}})],1)],1),e._v(" "),l("el-form-item",{attrs:{label:"更改头像"}},[l("div",{staticClass:"adminimg"}),e._v(" "),l("el-upload",{attrs:{action:"https://jsonplaceholder.typicode.com/posts/","list-type":"picture-card","on-preview":e.handlePictureCardPreview,"on-remove":e.handleRemove,limit:1}},[l("i",{staticClass:"el-icon-plus"})]),e._v(" "),l("el-dialog",{attrs:{visible:e.dialogVisible,size:"tiny"},on:{"update:visible":function(t){e.dialogVisible=t}}},[l("img",{attrs:{width:"100%",src:e.dialogImageUrl,alt:""}})])],1),e._v(" "),l("el-form-item",[l("el-button",{attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("保存")])],1)],1)],1)},staticRenderFns:[]};var a=l("VU/8")(i,o,!1,function(e){l("jahY")},null,null);t.default=a.exports}});
//# sourceMappingURL=19.9f877a15f84ef5f325cd.js.map