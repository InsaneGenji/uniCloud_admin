(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-permission-add"],{"1a11":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniForms:a("e4ab").default,uniFormsItem:a("7f31").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"permission_id",label:"权限ID",required:!0}},[a("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"权限唯一标识，不可修改，不允许重复",trim:"both"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("permission_id",e.detail.value)}},model:{value:t.formData.permission_id,callback:function(e){t.$set(t.formData,"permission_id",e)},expression:"formData.permission_id"}})],1),a("uni-forms-item",{attrs:{name:"permission_name",label:"权限名称",required:!0}},[a("v-uni-input",{staticClass:"uni-input-border",attrs:{placeholder:"权限名称",trim:"both"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("permission_name",e.detail.value)}},model:{value:t.formData.permission_name,callback:function(e){t.$set(t.formData,"permission_name",e)},expression:"formData.permission_name"}})],1),a("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[a("v-uni-textarea",{staticClass:"uni-textarea-border",attrs:{placeholder:"备注",trim:"both"},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("comment",e.detail.value)}},model:{value:t.formData.comment,callback:function(e){t.$set(t.formData,"comment",e)},expression:"formData.comment"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[t._v("返回")])],1)],1)],1)],1)},r=[]},"2a38":function(t,e,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(e,"__esModule",{value:!0}),e.filterToWhere=u,e.enumConverter=e.validator=void 0;var i=n(a("3835")),r=n(a("b85c")),o={permission_id:{rules:[{required:!0},{format:"string"}],label:"权限标识"},permission_name:{rules:[{required:!0},{format:"string"}],label:"权限名称"},comment:{rules:[{format:"string"}],label:"备注"}};e.validator=o;var s={};function u(t,e){var a={};for(var n in t){var o=t[n],s=o.type,u=o.value;switch(s){case"search":"string"===typeof u&&u.length&&(a[n]=new RegExp(u));break;case"select":if(u.length){var l,c=[],f=(0,r.default)(u);try{for(f.s();!(l=f.n()).done;){var d=l.value;c.push(e.eq(d))}}catch(D){f.e(D)}finally{f.f()}a[n]=e.or(c)}break;case"range":if(u.length){var m=u[0],v=u[1];a[n]=e.and([e.gte(m),e.lte(v)])}break;case"date":if(u.length){var b=(0,i.default)(u,2),p=b[0],h=b[1],g=new Date(p),_=new Date(h);a[n]=e.and([e.gte(g),e.lte(_)])}break;case"timestamp":if(u.length){var w=(0,i.default)(u,2),y=w[0],k=w[1];a[n]=e.and([e.gte(y),e.lte(k)])}break}}return a}e.enumConverter=s},bb0e:function(t,e,a){"use strict";a.r(e);var n=a("bb1c"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},bb1c:function(t,e,a){"use strict";(function(t){var n=a("4ea4");a("caad"),a("b64b"),a("d3b7"),a("2532"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("5530")),r=a("2a38"),o=t.database(),s=(o.command,"uni-id-permissions");function u(t){var e={};for(var a in r.validator)t.includes(a)&&(e[a]=r.validator[a]);return e}var l={data:function(){var t={permission_id:"",permission_name:"",comment:""};return{formData:t,formOptions:{},rules:(0,i.default)({},u(Object.keys(t)))}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){t.submitForm(e)})).catch((function(){uni.hideLoading()}))},submitForm:function(t){var e=this;o.collection(s).add(t).then((function(t){uni.showToast({title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};e.default=l}).call(this,a("a9ff")["default"])},c534:function(t,e,a){"use strict";a.r(e);var n=a("1a11"),i=a("bb0e");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);var o,s=a("f0c5"),u=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,null,null,!1,n["a"],o);e["default"]=u.exports}}]);