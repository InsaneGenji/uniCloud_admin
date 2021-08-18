(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-system-app-list"],{"082f":function(e,t,n){"use strict";var a=n("4ea4");n("4d63"),n("ac1f"),n("25f0"),Object.defineProperty(t,"__esModule",{value:!0}),t.filterToWhere=l,t.enumConverter=t.validator=void 0;var i=a(n("3835")),r=a(n("b85c")),s={appid:{rules:[{required:!0},{format:"string"}],label:"AppID"},name:{rules:[{required:!0},{format:"string"}],label:"应用名称"},description:{rules:[{required:!0},{format:"string"}],label:"应用描述"},create_date:{rules:[{format:"timestamp"}],label:"创建时间"}};t.validator=s;var o={};function l(e,t){var n={};for(var a in e){var s=e[a],o=s.type,l=s.value;switch(o){case"search":"string"===typeof l&&l.length&&(n[a]=new RegExp(l));break;case"select":if(l.length){var d,c=[],u=(0,r.default)(l);try{for(u.s();!(d=u.n()).done;){var f=d.value;c.push(t.eq(f))}}catch(x){u.e(x)}finally{u.f()}n[a]=t.or(c)}break;case"range":if(l.length){var p=l[0],h=l[1];n[a]=t.and([t.gte(p),t.lte(h)])}break;case"date":if(l.length){var v=(0,i.default)(l,2),g=v[0],b=v[1],m=new Date(g),y=new Date(b);n[a]=t.and([t.gte(m),t.lte(y)])}break;case"timestamp":if(l.length){var C=(0,i.default)(l,2),_=C[0],w=C[1];n[a]=t.and([t.gte(_),t.lte(w)])}break}}return n}t.enumConverter=o},"2daa":function(e,t,n){"use strict";n.d(t,"b",(function(){return i})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return a}));var a={downloadExcel:n("93a2").default,unicloudDb:n("960d").default,uniTable:n("a25f").default,uniTr:n("e697").default,uniTh:n("ce49").default,uniTd:n("d667").default,uniDateformat:n("33c1").default,uniPagination:n("3cb3").default},i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"fix-top-window"},[n("v-uni-view",{staticClass:"uni-header"},[n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-view",{staticClass:"uni-title"}),n("v-uni-view",{staticClass:"uni-sub-title"},[e._v("管理用户可登录的应用")])],1),n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-input",{staticClass:"uni-search",attrs:{type:"text",placeholder:"请输入搜索内容"},on:{confirm:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}}),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}},[e._v("搜索")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.navigateTo("./add")}}},[e._v("新增")]),n("v-uni-button",{staticClass:"uni-button",attrs:{type:"default",size:"mini",disabled:!e.selectedIndexs.length},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.delTable.apply(void 0,arguments)}}},[e._v("批量删除")]),n("download-excel",{staticClass:"hide-on-phone",attrs:{fields:e.exportExcel.fields,data:e.exportExcelData,type:e.exportExcel.type,name:e.exportExcel.filename}},[n("v-uni-button",{staticClass:"uni-button",attrs:{type:"primary",size:"mini"}},[e._v("导出 Excel")])],1)],1)],1),n("v-uni-view",{staticClass:"uni-container"},[n("unicloud-db",{ref:"udb",attrs:{collection:"opendb-app-list",field:"appid,name,description,create_date",where:e.where,"page-data":"replace",orderby:e.orderby,getcount:!0,"page-size":e.options.pageSize,"page-current":e.options.pageCurrent,options:e.options,loadtime:"manual"},on:{load:function(t){arguments[0]=t=e.$handleEvent(t),e.onqueryload.apply(void 0,arguments)}},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.data,i=t.pagination,r=t.loading,s=t.error;t.options;return[n("uni-table",{ref:"table",staticClass:"table-pc",attrs:{loading:r||e.addAppidLoading,emptyText:s.message||"没有更多数据",border:!0,stripe:!0,type:"selection"},on:{"selection-change":function(t){arguments[0]=t=e.$handleEvent(t),e.selectionChange.apply(void 0,arguments)}}},[n("uni-tr",[n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"appid")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"appid")}}},[e._v("AppID")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"name")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"name")}}},[e._v("应用名称")]),n("uni-th",{attrs:{align:"center","filter-type":"search",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"description")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"description")}}},[e._v("应用描述")]),n("uni-th",{attrs:{align:"center","filter-type":"timestamp",sortable:!0},on:{"filter-change":function(t){arguments[0]=t=e.$handleEvent(t),e.filterChange(t,"create_date")},"sort-change":function(t){arguments[0]=t=e.$handleEvent(t),e.sortChange(t,"create_date")}}},[e._v("创建时间")]),n("uni-th",{attrs:{align:"center"}},[e._v("操作")])],1),e._l(a,(function(t,a){return n("uni-tr",{key:a},[n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.appid))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.name))]),n("uni-td",{attrs:{align:"center"}},[e._v(e._s(t.description))]),n("uni-td",{attrs:{align:"center"}},[n("uni-dateformat",{attrs:{threshold:[0,0],date:t.create_date}})],1),n("uni-td",{attrs:{align:"center"}},[t.appid===e.appid?n("v-uni-view",[e._v("-")]):n("v-uni-view",{staticClass:"uni-group"},[n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"primary"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.navigateTo("./edit?id="+t._id,!1)}}},[e._v("修改")]),n("v-uni-button",{staticClass:"uni-button",attrs:{size:"mini",type:"warn"},on:{click:function(n){arguments[0]=n=e.$handleEvent(n),e.confirmDelete(t._id)}}},[e._v("删除")])],1)],1)],1)}))],2),n("v-uni-view",{staticClass:"uni-pagination-box"},[n("uni-pagination",{attrs:{"show-icon":!0,"page-size":i.size,total:i.count},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onPageChanged.apply(void 0,arguments)}},model:{value:i.current,callback:function(t){e.$set(i,"current",t)},expression:"pagination.current"}})],1)]}}])})],1)],1)},r=[]},"376c":function(e,t,n){"use strict";(function(e){var a=n("4ea4");n("4de4"),n("7db0"),n("a15b"),n("d81d"),n("b64b"),n("d3b7"),n("4d63"),n("ac1f"),n("25f0"),n("498a"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=a(n("5530")),r=n("082f"),s=n("2f62"),o=e.database(),l="",d=[],c=20,u=1,f={ascending:"asc",descending:"desc"},p={data:function(){return{query:"",where:"",orderby:l,orderByFieldName:"",selectedIndexs:[],options:(0,i.default)({pageSize:c,pageCurrent:u,filterData:{}},r.enumConverter),imageStyles:{width:64,height:64},exportExcel:{filename:"opendb-app-list.xls",type:"xls",fields:{AppID:"appid","应用名称":"name","应用描述":"description","创建时间":"create_date"}},exportExcelData:[],addAppidLoading:!0}},onLoad:function(){this._filter={}},onReady:function(){this.$refs.udb.loadData()},computed:(0,i.default)({},(0,s.mapState)("app",["appName","appid"])),methods:{onqueryload:function(e){var t=this;e.find((function(e){return e.appid===t.appid}))?this.addAppidLoading=!1:this.addCurrentAppid({appid:this.appid,name:this.appName,description:"admin 管理后台",create_date:Date.now()}),this.exportExcelData=e},addCurrentAppid:function(e){var t=this;o.collection("opendb-app-list").add(e).then((function(e){t.loadData(),setTimeout((function(){uni.showModal({content:"检测到数据库中无当前应用, 已自动添加应用: ".concat(t.appName),showCancel:!1})}),500)})).catch((function(e){})).finally((function(){t.addAppidLoading=!1}))},getWhere:function(){var e=this.query.trim();if(!e)return"";var t=new RegExp(e,"i");return d.map((function(e){return t+".test("+e+")"})).join(" || ")},search:function(){var e=this.getWhere();this.where=e,this.loadData()},loadData:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.$refs.udb.loadData({clear:e})},onPageChanged:function(e){this.selectedIndexs.length=0,this.$refs.table.clearSelection(),this.$refs.udb.loadData({current:e.current})},navigateTo:function(e,t){var n=this;uni.navigateTo({url:e,events:{refreshData:function(){n.loadData(t)}}})},selectedItems:function(){var e=this.$refs.udb.dataList;return this.selectedIndexs.map((function(t){return e[t]._id}))},delTable:function(){var e=this;this.$refs.udb.remove(this.selectedItems(),{success:function(t){e.$refs.table.clearSelection()}})},selectionChange:function(e){this.selectedIndexs=e.detail.index},confirmDelete:function(e){var t=this;this.$refs.udb.remove(e,{success:function(e){t.$refs.table.clearSelection()}})},sortChange:function(e,t){var n=this;this.orderByFieldName=t,e.order?this.orderby=t+" "+f[e.order]:this.orderby="",this.$refs.table.clearSelection(),this.$nextTick((function(){n.$refs.udb.loadData()}))},filterChange:function(e,t){var n=this;this._filter[t]={type:e.filterType,value:e.filter};var a=(0,r.filterToWhere)(this._filter,o.command);Object.keys(a).length?this.where=a:this.where="",this.$nextTick((function(){n.$refs.udb.loadData()}))}}};t.default=p}).call(this,n("a9ff")["default"])},7108:function(e,t,n){"use strict";n.r(t);var a=n("376c"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,(function(){return a[e]}))}(r);t["default"]=i.a},d6c3:function(e,t,n){"use strict";n.r(t);var a=n("2daa"),i=n("7108");for(var r in i)"default"!==r&&function(e){n.d(t,e,(function(){return i[e]}))}(r);var s,o=n("f0c5"),l=Object(o["a"])(i["default"],a["b"],a["c"],!1,null,"243f4b2e",null,!1,a["a"],s);t["default"]=l.exports}}]);