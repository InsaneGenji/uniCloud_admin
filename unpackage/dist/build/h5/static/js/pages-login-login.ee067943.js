(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"0075":function(a,i,t){"use strict";t.r(i);var n=t("5556"),e=t("6217");for(var o in e)"default"!==o&&function(a){t.d(i,a,(function(){return e[a]}))}(o);t("a621");var s,r=t("f0c5"),c=Object(r["a"])(e["default"],n["b"],n["c"],!1,null,"ab3483d2",null,!1,n["a"],s);i["default"]=c.exports},"4a73":function(a,i,t){var n=t("24fb");i=n(!1),i.push([a.i,'uni-page-body[data-v-ab3483d2]{width:100%;height:100%;display:flex;justify-content:center;background-color:#fff}.login-box[data-v-ab3483d2]{position:relative;max-width:350px;flex:1;padding:140px 35px 0;margin:0 auto;overflow:hidden\n\t/* background-color: #F5F5F5; */}.underline[data-v-ab3483d2]:hover{text-decoration:underline}.uni-tips[data-v-ab3483d2]{display:flex;justify-content:flex-end;margin-top:15px}.uni-tips-text[data-v-ab3483d2]{cursor:pointer;text-decoration:underline;font-size:13px;color:#007aff;opacity:.8}.no-padding[data-v-ab3483d2]{padding:0}.admin-logo[data-v-ab3483d2]{display:flex;justify-content:center;margin-bottom:30px}.admin-logo uni-image[data-v-ab3483d2]{height:40px}.admin-captcha-img[data-v-ab3483d2]{position:absolute;top:1px;right:0;display:flex;justify-content:center;align-items:center;background-color:#fff;width:100px;height:33px;border:1px #e5e5e5 solid;border-radius:0 5px 5px 0;background-color:#f9f9f9}.admin-captcha-img img[data-v-ab3483d2]{border-radius:5px}.uni-loading[data-v-ab3483d2]:before{background:transparent url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjAiIGhlaWdodD0iMTIwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+PHBhdGggZmlsbD0ibm9uZSIgZD0iTTAgMGgxMDB2MTAwSDB6Ii8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTlFOUU5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgLTMwKSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iIzk4OTY5NyIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgzMCAxMDUuOTggNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjOUI5OTlBIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDYwIDc1Ljk4IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0EzQTFBMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSg5MCA2NSA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNBQkE5QUEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoMTIwIDU4LjY2IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0IyQjJCMiIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgxNTAgNTQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjQkFCOEI5IiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDMkMwQzEiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTE1MCA0NS45OCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNDQkNCQ0IiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTEyMCA0MS4zNCA2NSkiLz48cmVjdCB3aWR0aD0iNyIgaGVpZ2h0PSIyMCIgeD0iNDYuNSIgeT0iNDAiIGZpbGw9IiNEMkQyRDIiIHJ4PSI1IiByeT0iNSIgdHJhbnNmb3JtPSJyb3RhdGUoLTkwIDM1IDY1KSIvPjxyZWN0IHdpZHRoPSI3IiBoZWlnaHQ9IjIwIiB4PSI0Ni41IiB5PSI0MCIgZmlsbD0iI0RBREFEQSIgcng9IjUiIHJ5PSI1IiB0cmFuc2Zvcm09InJvdGF0ZSgtNjAgMjQuMDIgNjUpIi8+PHJlY3Qgd2lkdGg9IjciIGhlaWdodD0iMjAiIHg9IjQ2LjUiIHk9IjQwIiBmaWxsPSIjRTJFMkUyIiByeD0iNSIgcnk9IjUiIHRyYW5zZm9ybT0icm90YXRlKC0zMCAtNS45OCA2NSkiLz48L3N2Zz4=") no-repeat}.uni-loading[data-v-ab3483d2]{margin:0 auto;width:20px;height:20px;display:inline-block;vertical-align:middle;-webkit-animation:uni-loading-data-v-ab3483d2 1s steps(12) infinite;animation:uni-loading-data-v-ab3483d2 1s steps(12) infinite;background-size:100%}@-webkit-keyframes uni-loading-data-v-ab3483d2{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes uni-loading-data-v-ab3483d2{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}body.?%PAGE?%[data-v-ab3483d2]{background-color:#fff}',""]),a.exports=i},5556:function(a,i,t){"use strict";t.d(i,"b",(function(){return e})),t.d(i,"c",(function(){return o})),t.d(i,"a",(function(){return n}));var n={uniForms:t("e4ab").default,uniFormsItem:t("7f31").default},e=function(){var a=this,i=a.$createElement,t=a._self._c||i;return t("v-uni-view",{staticClass:"login-box"},[t("v-uni-view",{staticClass:"admin-logo"},[t("v-uni-image",{attrs:{src:a.logo,mode:"heightFix"}})],1),t("v-uni-view",{staticClass:"uni-header no-padding"},[t("v-uni-view",{staticClass:"uni-title"},[a._v("系统登录")])],1),t("v-uni-view",{staticClass:"uni-container"},[t("uni-forms",{ref:"form",attrs:{rules:a.rules},on:{submit:function(i){arguments[0]=i=a.$handleEvent(i),a.submit.apply(void 0,arguments)}},model:{value:a.formData,callback:function(i){a.formData=i},expression:"formData"}},[t("uni-forms-item",{attrs:{"left-icon":"person-filled",name:"username",labelWidth:"35"}},[t("v-uni-input",{ref:"usernameInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:"账户"},on:{confirm:function(i){arguments[0]=i=a.$handleEvent(i),a.submitForm.apply(void 0,arguments)}},model:{value:a.formData.username,callback:function(i){a.$set(a.formData,"username",i)},expression:"formData.username"}})],1),t("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"locked-filled",name:"password",labelWidth:"35"}},[t("v-uni-input",{ref:"passwordInput",staticClass:"uni-input-border",attrs:{password:a.showPassword,placeholder:"密码"},on:{confirm:function(i){arguments[0]=i=a.$handleEvent(i),a.submitForm.apply(void 0,arguments)}},model:{value:a.formData.password,callback:function(i){a.$set(a.formData,"password",i)},expression:"formData.password"}}),t("v-uni-text",{staticClass:"uni-icon-password-eye pointer",class:[a.showPassword?"":"uni-eye-active"],on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.changePassword.apply(void 0,arguments)}}},[a._v("")])],1),a.needCaptcha?t("uni-forms-item",{staticClass:"icon-container",attrs:{"left-icon":"image",name:"captcha",labelWidth:"35"}},[t("v-uni-input",{ref:"captchaInput",staticClass:"uni-input-border",attrs:{type:"text",placeholder:"验证码"},on:{confirm:function(i){arguments[0]=i=a.$handleEvent(i),a.submitForm.apply(void 0,arguments)}},model:{value:a.formData.captcha,callback:function(i){a.$set(a.formData,"captcha",i)},expression:"formData.captcha"}}),t("v-uni-view",{staticClass:"admin-captcha-img pointer",on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.createCaptcha.apply(void 0,arguments)}}},[a.captchaLoading?t("i",{staticClass:"uni-loading"}):t("img",{attrs:{src:a.captchaBase64,width:"100%",height:"100%"}})])],1):a._e(),t("v-uni-view",{staticClass:"uni-button-group"},[t("v-uni-button",{staticClass:"uni-button uni-button-full",attrs:{type:"primary",loading:a.loading,disabled:a.loading},on:{click:function(i){arguments[0]=i=a.$handleEvent(i),a.submitForm.apply(void 0,arguments)}}},[a._v("登录")])],1)],1),t("v-uni-view",{staticClass:"uni-tips"})],1)],1)},o=[]},6217:function(a,i,t){"use strict";t.r(i);var n=t("73a7"),e=t.n(n);for(var o in n)"default"!==o&&function(a){t.d(i,a,(function(){return n[a]}))}(o);i["default"]=e.a},"73a7":function(a,i,t){"use strict";var n=t("4ea4");t("d3b7"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var e=n(t("5530")),o=t("2f62"),s=n(t("5827")),r=t("f4c7"),c={deviceId:(0,r.getDeviceUUID)(),scene:"login"},d={data:function(){return(0,e.default)((0,e.default)({},s.default.navBar),{},{indexPage:s.default.index.url,showPassword:!0,loading:!1,formData:{username:"",password:"",captcha:""},captchaLoading:!1,needCaptcha:!1,captchaBase64:"",rules:{username:{rules:[{required:!0,errorMessage:"请输入账户"},{minLength:1,maxLength:30,errorMessage:"账户长度在{minLength}到{maxLength}个字符"}]},password:{rules:[{required:!0,errorMessage:"请输入正确的密码"},{minLength:6,errorMessage:"密码长度大于{minLength}个字符"}]},captcha:{rules:[{required:!0,errorMessage:"请输入验证码"}]}}})},mounted:function(){this.focus();var a=this;uni.getStorage({key:"lastUsername",success:function(i){a.formData.username=i.data}})},methods:(0,e.default)((0,e.default)((0,e.default)({},(0,o.mapActions)({init:"app/init"})),(0,o.mapMutations)({setToken:function(a,i){a("user/SET_TOKEN",i)}})),{},{submit:function(a){var i=this;if(!this.loading){var t=a.detail,n=t.errors,o=t.value;n||(this.$refs.usernameInput.$refs.input.blur(),this.$refs.passwordInput.$refs.input.blur(),this.$refs.captchaInput&&this.$refs.captchaInput.$refs.input.blur(),this.loading=!0,this.$request("login",(0,e.default)((0,e.default)({},o),{},{captchaOptions:c}),{functionName:"uni-id-cf",showModal:!1}).then((function(a){return i.setToken({token:a.token,tokenExpired:a.tokenExpired}),i.init().then((function(){uni.showToast({title:"登录成功",icon:"none"}),uni.setStorage({key:"lastUsername",data:o.username}),uni.redirectTo({url:i.indexPage})}))})).catch((function(a){a.needCaptcha&&(i.formData.captcha="",i.createCaptcha(),i.needCaptcha=!0);var t=i;uni.showModal({content:a.message||"请求服务失败",showCancel:!1,success:function(){10101===a.code&&t.$refs.usernameInput&&t.$refs.usernameInput.$refs.input.focus(),10102===a.code&&t.$refs.passwordInput&&t.$refs.passwordInput.$refs.input.focus(),10002===a.code&&t.$refs.captchaInput&&t.$refs.captchaInput.$refs.input.focus()}})})).finally((function(a){i.loading=!1})))}},createCaptcha:function(){var a=this;this.captchaLoading=!0,this.$request("createCaptcha",c,{functionName:"uni-id-cf"}).then((function(i){0===i.code&&(a.captchaBase64=i.captchaBase64)})).catch((function(a){})).finally((function(i){a.captchaLoading=!1}))},confirmForm:function(a,i){this.submitForm()},submitForm:function(){this.$refs.form.submit()},initAdmin:function(){uni.redirectTo({url:"/pages/demo/init/init"})},changePassword:function(){this.showPassword=!this.showPassword},focus:function(){this.$refs.usernameInput.$refs.input.focus()}})};i.default=d},a621:function(a,i,t){"use strict";var n=t("b729"),e=t.n(n);e.a},b729:function(a,i,t){var n=t("4a73");"string"===typeof n&&(n=[[a.i,n,""]]),n.locals&&(a.exports=n.locals);var e=t("4f06").default;e("b547c1c4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);