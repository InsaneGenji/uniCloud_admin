(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["uni_modules-uni-upgrade-center-pages-version-add"],{"0bec":function(t,e,a){var n=a("b22b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("8c83c2a2",n,!0,{sourceMap:!1,shadowMode:!1})},"0ea6":function(t,e,a){"use strict";var n=a("0bec"),i=a.n(n);i.a},"355b":function(t,e,a){"use strict";a.r(e);var n=a("cb86"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"56a5":function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var n={uniForms:a("e4ab").default,uniFormsItem:a("7f31").default,uniEasyinput:a("22a8").default,uniDataCheckbox:a("d94d").default,uniFilePicker:a("e6ce").default},i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"uni-container"},[a("v-uni-view",{staticClass:"uni-header"},[a("v-uni-view",{staticClass:"uni-group"},[a("v-uni-view",{staticClass:"uni-title"},[t._v("包类型")]),a("v-uni-view",{staticClass:"uni-sub-title"},[t._v(t._s(t.type_valuetotext[t.formData.type]))])],1)],1),a("uni-forms",{ref:"form",attrs:{value:t.formData,validateTrigger:"bind"}},[a("uni-forms-item",{attrs:{name:"appid",label:"AppID",required:!0}},[a("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:t.formData.appid,callback:function(e){t.$set(t.formData,"appid",e)},expression:"formData.appid"}})],1),a("uni-forms-item",{attrs:{name:"name",label:"应用名称"}},[a("uni-easyinput",{attrs:{disabled:!0,trim:"both"},model:{value:t.formData.name,callback:function(e){t.$set(t.formData,"name",e)},expression:"formData.name"}})],1),a("uni-forms-item",{attrs:{name:"title",label:"更新标题"}},[a("uni-easyinput",{attrs:{placeholder:"更新标题"},model:{value:t.formData.title,callback:function(e){t.$set(t.formData,"title",e)},expression:"formData.title"}})],1),a("uni-forms-item",{attrs:{name:"contents",label:"更新内容",required:!0}},[a("v-uni-textarea",{staticClass:"uni-textarea-border",staticStyle:{"box-sizing":"content-box"},attrs:{"auto-height":!0,value:t.formData.contents},on:{input:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("contents",e.detail.value)},"update:value":function(e){arguments[0]=e=t.$handleEvent(e),function(e){return t.formData.contents=e}.apply(void 0,arguments)}}})],1),a("uni-forms-item",{attrs:{name:"platform",label:"平台",required:!0}},[a("uni-data-checkbox",{attrs:{multiple:t.isWGT,localdata:t.platformLocaldata},model:{value:t.formData.platform,callback:function(e){t.$set(t.formData,"platform",e)},expression:"formData.platform"}})],1),a("uni-forms-item",{attrs:{name:"version",label:"版本号",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"当前包版本号，必须大于当前线上发行版本号"},model:{value:t.formData.version,callback:function(e){t.$set(t.formData,"version",e)},expression:"formData.version"}})],1),t.isWGT?a("uni-forms-item",{attrs:{name:"min_uni_version",label:"原生App最低版本",required:t.isWGT}},[a("uni-easyinput",{attrs:{placeholder:"原生App最低版本"},model:{value:t.formData.min_uni_version,callback:function(e){t.$set(t.formData,"min_uni_version",e)},expression:"formData.min_uni_version"}}),a("show-info",{attrs:{content:t.minUniVersionContent}})],1):t._e(),t.isiOS?t._e():a("uni-forms-item",{attrs:{label:"上传包"}},[a("uni-file-picker",{attrs:{"file-extname":t.fileExtname,disabled:t.hasPackage,returnType:"object","file-mediatype":"all",limit:"1"},on:{success:function(e){arguments[0]=e=t.$handleEvent(e),t.packageUploadSuccess.apply(void 0,arguments)},delete:function(e){arguments[0]=e=t.$handleEvent(e),t.packageDelete.apply(void 0,arguments)}},model:{value:t.appFileList,callback:function(e){t.appFileList=e},expression:"appFileList"}},[a("v-uni-button",{attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.selectFile.apply(void 0,arguments)}}},[t._v("选择文件")])],1),t.hasPackage?a("v-uni-text",{staticStyle:{"padding-left":"20px",color:"#a8a8a8"}},[t._v(t._s(Number(t.appFileList.size/1024/1024).toFixed(2))+"M")]):t._e()],1),a("uni-forms-item",{attrs:{name:"url",label:t.isiOS?"AppStore":"包地址",required:!0}},[a("uni-easyinput",{attrs:{placeholder:"可下载安装包地址",maxlength:-1},model:{value:t.formData.url,callback:function(e){t.$set(t.formData,"url",e)},expression:"formData.url"}}),a("show-info",{attrs:{top:-80,content:t.uploadFileContent}})],1),t.isWGT?a("uni-forms-item",{attrs:{name:"is_silently",label:"静默更新"}},[a("v-uni-switch",{attrs:{checked:t.formData.is_silently},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("is_silently",e.detail.value)}}}),a("show-info",{attrs:{top:-80,content:t.silentlyContent}})],1):t._e(),t.isiOS?t._e():a("uni-forms-item",{attrs:{name:"is_mandatory",label:"强制更新"}},[a("v-uni-switch",{attrs:{checked:t.formData.is_mandatory},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("is_mandatory",e.detail.value)}}}),a("show-info",{attrs:{content:t.mandatoryContent}})],1),a("uni-forms-item",{attrs:{name:"stable_publish",label:"上线发行"}},[a("v-uni-switch",{attrs:{checked:t.formData.stable_publish},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.binddata("stable_publish",e.detail.value)}}}),a("show-info",{attrs:{top:-40,content:t.stablePublishContent2}})],1),a("uni-forms-item",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{name:"type",label:"安装包类型"}},[a("uni-data-checkbox",{attrs:{localdata:t.formOptions.type_localdata},model:{value:t.formData.type,callback:function(e){t.$set(t.formData,"type",e)},expression:"formData.type"}})],1),a("v-uni-view",{staticClass:"uni-button-group"},[a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.submit.apply(void 0,arguments)}}},[t._v("发布")]),a("v-uni-button",{staticClass:"uni-button",staticStyle:{width:"100px","margin-left":"15px"},attrs:{type:"warn"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("取消")])],1)],1)],1)},r=[]},b22b:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */[data-v-ceb0f23a] .uni-forms-item__content{display:flex;align-items:center}',""]),t.exports=e},cb86:function(t,e,a){"use strict";(function(t){var n=a("dbce"),i=a("4ea4");a("4de4"),a("caad"),a("a9e3"),a("d3b7"),a("ac1f"),a("25f0"),a("2532"),a("1276"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(a("5530"));a("96cf");var s=i(a("1da1")),o=(a("b407"),i(a("368d"))),l=n(a("0872")),u=a("1ce6"),c=t.database(),f=(c.command,u.appVersionListDbName),m="iOS",d="Android";function p(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"0",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"0";t=String(t).split("."),e=String(e).split(".");for(var a=Math.min(t.length,e.length),n=0,i=0;i<a;i++){var r=Number(t[i]),s=Number(e[i]);if(r>s){n=1;break}if(r<s){n=-1;break}}if(0===n&&t.length!==e.length)for(var o=t.length>e.length,l=o?t:e,u=a;u<l.length;u++){var c=Number(l[u]);if(c>0){n=o?1:-1;break}}return n}var h={components:{showInfo:o.default},mixins:[l.default],data:function(){return{latestVersion:"0.0.0",lastVersionId:""}},onLoad:function(t){var e=this;return(0,s.default)(regeneratorRuntime.mark((function a(){var n,i,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=t.appid,i=t.name,s=t.type,!(n&&s&&i)){a.next=8;break}return e.formData=(0,r.default)((0,r.default)({},e.formData),{appid:n,name:i,type:s}),a.next=5,e.getDetail(n,s);case 5:e.latestStableData=a.sent,!e.isWGT&&e.latestStableData.length&&e.setFormData(d),e.isWGT&&e.rules.min_uni_version.rules.push({required:!0});case 8:case"end":return a.stop()}}),a)})))()},watch:{isiOS:function(t){t?this.setFormData(m):this.hasPackage?this.formData.url=this.appFileList.url:this.formData.url=""},"formData.platform":function(t){this.isWGT&&this.setFormData(t)}},methods:{setFormData:function(t){uni.showLoading({mask:!0}),this.latestVersion="0.0.0",this.lastVersionId="";var e=this.getData(this.latestStableData,t)[0];if(e){var a=e._id,n=e.version,i=e.name,r=e.platform,s=e.min_uni_version,o=e.url;this.lastVersionId=a,this.latestVersion=n,this.formData.name=i,this.isWGT?this.formData.min_uni_version=s:(delete this.formData.min_uni_version,this.formData.platform=r[0],this.isiOS&&(this.formData.url=o))}else this.isWGT&&(this.formData.min_uni_version="");uni.hideLoading()},submit:function(){var t=this;uni.showLoading({mask:!0}),this.$refs.form.validate().then((function(e){if(p(t.latestVersion,e.version)>=0)throw uni.showModal({content:"版本号必须大于当前已上线版本（".concat(t.latestVersion,"）"),showCancel:!1}),new Error("版本号必须大于已上线版本（${this.latestVersion}）");t.isWGT||(e.platform=[e.platform]),t.submitForm(e)})).catch((function(t){uni.hideLoading()}))},submitForm:function(t){var e=this;return(0,s.default)(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=c.collection(f),n.add(t).then(function(){var a=(0,s.default)(regeneratorRuntime.mark((function a(i){return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(!t.stable_publish||!e.lastVersionId){a.next=3;break}return a.next=3,n.doc(e.lastVersionId).update({stable_publish:!1});case 3:uni.showToast({title:"新增成功"}),e.getOpenerEventChannel().emit("refreshData"),setTimeout((function(){return uni.navigateBack()}),500);case 6:case"end":return a.stop()}}),a)})));return function(t){return a.apply(this,arguments)}}()).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}));case 2:case"end":return a.stop()}}),a)})))()},getDetail:function(t,e){return uni.showLoading({mask:!0}),c.collection(f).where({appid:t,type:e,stable_publish:!0}).field(l.fields).get().then((function(t){return t.result.data})).catch((function(t){uni.showModal({content:t.message||"请求服务失败",showCancel:!1})})).finally((function(){uni.hideLoading()}))},getData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;return"string"===typeof e?t.filter((function(t){return t.platform.includes(e)})):t.filter((function(t){return t.platform.toString()===e.toString()}))},back:function(){var t=this;uni.showModal({title:"取消发布",content:this.hasPackage?"将会删除已上传的包":"",success:function(e){if(e.confirm){if(t.hasPackage){var a=[];a.push(t.appFileList.url),t.$request("deleteFile",{fileList:a},{functionName:"upgrade-center"})}uni.navigateBack()}}})}}};e.default=h}).call(this,a("a9ff")["default"])},fb5b:function(t,e,a){"use strict";a.r(e);var n=a("56a5"),i=a("355b");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("0ea6");var s,o=a("f0c5"),l=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"ceb0f23a",null,!1,n["a"],s);e["default"]=l.exports}}]);