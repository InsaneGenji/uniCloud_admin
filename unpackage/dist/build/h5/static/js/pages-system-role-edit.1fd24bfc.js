(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-role-edit"],{4963:function(e,t,a){"use strict";a.r(t);var n=a("59d6"),i=a("816e");for(var r in i)"default"!==r&&function(e){a.d(t,e,(function(){return i[e]}))}(r);var o,s=a("f0c5"),l=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"4703ae86",null,!1,n["a"],o);t["default"]=l.exports},"59d6":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return r})),a.d(t,"a",(function(){return n}));var n={uniForms:a("e4ab").default,uniFormsItem:a("7f31").default,uniEasyinput:a("22a8").default,uniDataCheckbox:a("d94d").default},i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"uni-container"},[a("uni-forms",{ref:"form",attrs:{value:e.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"role_id",label:"唯一ID",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"角色唯一标识，不可修改，不允许重复",trim:"both",disabled:!0},model:{value:e.formData.role_id,callback:function(t){e.$set(e.formData,"role_id",t)},expression:"formData.role_id"}})],1),a("uni-forms-item",{attrs:{name:"role_name",label:"名称",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"角色名称",trim:"both"},model:{value:e.formData.role_name,callback:function(t){e.$set(e.formData,"role_name",t)},expression:"formData.role_name"}})],1),a("uni-forms-item",{staticClass:"flex-center-x",attrs:{name:"permission",label:"权限"}},[a("uni-data-checkbox",{attrs:{multiple:!0,collection:"uni-id-permissions",field:"permission_name as text, permission_id as value"},model:{value:e.formData.permission,callback:function(t){e.$set(e.formData,"permission",t)},expression:"formData.permission"}})],1),a("uni-forms-item",{attrs:{name:"comment",label:"备注"}},[a("uni-easyinput",{attrs:{type:"textarea",placeholder:"备注",trim:"both"},model:{value:e.formData.comment,callback:function(t){e.$set(e.formData,"comment",t)},expression:"formData.comment"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.submit.apply(void 0,arguments)}}},[e._v("提交")]),a("v-uni-navigator",{staticStyle:{"margin-left":"15px"},attrs:{"open-type":"navigateBack"}},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"}},[e._v("返回")])],1)],1)],1)],1)},r=[]},"816e":function(e,t,a){"use strict";a.r(t);var n=a("ceb0"),i=a.n(n);for(var r in n)"default"!==r&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},ceb0:function(e,t,a){"use strict";(function(e){var n=a("4ea4");a("caad"),a("b64b"),a("d3b7"),a("2532"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("5530")),r=a("f487"),o=e.database(),s=(o.command,"uni-id-roles");function l(e){var t={};for(var a in r.validator)e.includes(a)&&(t[a]=r.validator[a]);return t}var u={data:function(){var e={role_id:"",role_name:"",permission:[],comment:"",create_date:null};return{formData:e,formOptions:{},rules:(0,i.default)({},l(Object.keys(e)))}},onLoad:function(e){if(e.id){var t=e.id;this.formDataId=t,this.getDetail(t)}},onReady:function(){this.$refs.form.setRules(this.rules)},methods:{submit:function(){var e=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(t){e.submitForm(t)})).catch((function(){uni.hideLoading()}))},submitForm:function(e){var t=this;o.collection(s).doc(this.formDataId).update(e).then((function(e){uni.showToast({title:"修改成功"}),t.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getDetail:function(e){var t=this;uni.showLoading({mask:!0}),o.collection(s).doc(e).field("role_id,role_name,permission,comment,create_date").get().then((function(e){var a=e.result.data[0];a&&(t.formData=a)})).catch((function(e){uni.showModal({content:e.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))}}};t.default=u}).call(this,a("a9ff")["default"])},f487:function(e,t,a){"use strict";var n=a("4ea4");a("4d63"),a("ac1f"),a("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=l,t.enumConverter=t.validator=void 0;var i=n(a("3835")),r=n(a("b85c")),o={role_id:{rules:[{required:!0},{format:"string"}],label:"唯一ID"},role_name:{rules:[{required:!0},{format:"string"}],label:"名称"},permission:{rules:[{format:"array"}],label:"权限"},comment:{rules:[{format:"string"}],label:"备注"},create_date:{rules:[{format:"timestamp"}]}};t.validator=o;var s={};function l(e,t){var a={};for(var n in e){var o=e[n],s=o.type,l=o.value;switch(s){case"search":"string"===typeof l&&l.length&&(a[n]=new RegExp(l));break;case"select":if(l.length){var u,c=[],f=(0,r.default)(l);try{for(f.s();!(u=f.n()).done;){var d=u.value;c.push(t.eq(d))}}catch(k){f.e(k)}finally{f.f()}a[n]=t.or(c)}break;case"range":if(l.length){var m=l[0],v=l[1];a[n]=t.and([t.gte(m),t.lte(v)])}break;case"date":if(l.length){var h=(0,i.default)(l,2),p=h[0],b=h[1],g=new Date(p),_=new Date(b);a[n]=t.and([t.gte(g),t.lte(_)])}break;case"timestamp":if(l.length){var D=(0,i.default)(l,2),y=D[0],w=D[1];a[n]=t.and([t.gte(y),t.lte(w)])}break}}return a}t.enumConverter=s}}]);