(function(t){function e(e){for(var o,r,s=e[0],u=e[1],c=e[2],l=0,d=[];l<s.length;l++)r=s[l],i[r]&&d.push(i[r][0]),i[r]=0;for(o in u)Object.prototype.hasOwnProperty.call(u,o)&&(t[o]=u[o]);f&&f(e);while(d.length)d.shift()();return a.push.apply(a,c||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==i[s]&&(o=!1)}o&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var o={},r={index:0},i={index:0},a=[];function s(t){return u.p+"static/js/"+({}[t]||t)+"."+{"chunk-3ef2e715":"a4c5a3da"}[t]+".js"}function u(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(t){var e=[],n={"chunk-3ef2e715":1};r[t]?e.push(r[t]):0!==r[t]&&n[t]&&e.push(r[t]=new Promise(function(e,n){for(var o="static/css/"+({}[t]||t)+"."+{"chunk-3ef2e715":"fd36e727"}[t]+".css",i=u.p+o,a=document.getElementsByTagName("link"),s=0;s<a.length;s++){var c=a[s],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===o||l===i))return e()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){c=d[s],l=c.getAttribute("data-href");if(l===o||l===i)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var o=e&&e.target&&e.target.src||i,a=new Error("Loading CSS chunk "+t+" failed.\n("+o+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=o,delete r[t],f.parentNode.removeChild(f),n(a)},f.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(f)}).then(function(){r[t]=0}));var o=i[t];if(0!==o)if(o)e.push(o[2]);else{var a=new Promise(function(e,n){o=i[t]=[e,n]});e.push(o[2]=a);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,u.nc&&l.setAttribute("nonce",u.nc),l.src=s(t),c=function(e){l.onerror=l.onload=null,clearTimeout(d);var n=i[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src,a=new Error("Loading chunk "+t+" failed.\n("+o+": "+r+")");a.type=o,a.request=r,n[1](a)}i[t]=void 0}};var d=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(e)},u.m=t,u.c=o,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)u.d(n,o,function(e){return t[e]}.bind(null,o));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="",u.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var d=0;d<c.length;d++)e(c[d]);var f=l;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0725":function(t,e,n){},"27a3":function(t,e,n){"use strict";var o=n("0725"),r=n.n(o);r.a},2846:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=n("2f62");o["default"].use(r["a"]);var i=new r["a"].Store({state:{user_count:0,user_info:{name:"huangenai",age:22,sex:"女"},user_cart:[]},getters:{get_cart_list:function(t){return t.user_cart}},mutations:{add_goods:function(t,e){t.user_cart.push(e)},add_goods_num:function(t,e){t.user_cart[e.index].nums++},reduce_goods_num:function(t,e){t.user_cart[e.index].nums--},remove_goods:function(t,e){t.user_cart.splice(e.index,1)}},actions:{commit_addgoods_to_cartlist:function(t,e){var n=t.commit;n("add_goods",e)},commit_addgoodsnums_to_carlist:function(t,e){var n=t.commit;n("add_goods_num",e)},commit_reducegoodsnums_to_carlist:function(t,e){var n=t.commit;n("reduce_goods_num",e)},commit_removegoods_from_cartlist:function(t,e){var n=t.commit;n("remove_goods",e)}}});e["default"]=i},"3dfd":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("el-container",[o("el-header",[o("div",{staticClass:"isShowFold"},[o("i",{class:{"el-icon-s-fold":t.isShowSide,"el-icon-s-unfold":0==t.isShowSide},on:{click:function(e){return t.isShow()}}}),o("div",{staticClass:"isShowMun",class:{"isShowMun-off":0==t.isShowSide}},[o("ul",[o("li",[o("el-input",{attrs:{placeholder:"请输入内容","prefix-icon":"el-icon-search"},model:{value:t.input_search,callback:function(e){t.input_search=e},expression:"input_search"}})],1),o("li",[o("router-link",{attrs:{to:"/"}},[t._v("首页")])],1),o("li",[o("router-link",{attrs:{to:"/"}},[t._v("推荐")])],1),o("li",[o("router-link",{attrs:{to:"/"}},[t._v("科技")])],1),o("li",[o("router-link",{attrs:{to:"/"}},[t._v("理科")])],1),o("li",[o("router-link",{attrs:{to:"/"}},[t._v("文科")])],1),o("li",[o("router-link",{attrs:{to:"/"}},[t._v("试题")])],1),o("li",[o("router-link",{attrs:{to:"/"}},[t._v("关于")])],1)])])]),o("div",{staticClass:"header-box-img"},[o("img",{staticClass:"header-img",attrs:{src:n("7be1"),alt:"test"}})]),o("div",{staticClass:"info-drapdown"},[o("el-dropdown",{attrs:{trigger:"click"}},[o("span",{staticClass:"el-dropdown-link"},[t._v("\n\t\t\t\t\t\t我的"),o("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),o("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[o("el-dropdown-item",{attrs:{icon:"el-icon-plus"}},[t._v("我的头像")]),o("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus"}},[t._v("我的昵称")]),o("el-dropdown-item",{attrs:{icon:"el-icon-circle-plus-outline"}},[t._v("我的购物车")]),o("el-dropdown-item",{attrs:{icon:"el-icon-check"}},[t._v("我的订单")]),o("el-dropdown-item",{attrs:{icon:"el-icon-circle-check"}},[t._v("我的地址")])],1)],1)],1)]),o("el-main",[o("router-view")],1)],1)],1)},r=[],i={name:"app",data:function(){return{isShowSide:!1,input_search:null,nums1:12,info:"leaf"}},methods:{isShow:function(){1==this.isShowSide?this.isShowSide=!1:this.isShowSide=!0,console.log(this.isShowSide)},getdata:function(){this.$axios.post("/index/test",this.$qs.stringify({age:21})).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},computed:{countnums:function(){return this.$store.getters.getcount}},watch:{nums1:function(t){console.log(t),this.$store.dispatch("setcount",{count:t})}},components:{}},a=i,s=(n("27a3"),n("2877")),u=Object(s["a"])(a,o,r,!1,null,"1962f464",null);e["default"]=u.exports},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),r=n("3dfd"),i=n("4328"),a=n.n(i),s=n("eeb9"),u=n("a18c"),c=n("2846"),l=n("5c96"),d=n.n(l);n("0fae");o["default"].prototype.$axios=s["default"],o["default"].prototype.$qs=a.a,o["default"].use(d.a),o["default"].config.productionTip=!1,new o["default"]({router:u["default"],store:c["default"],render:function(t){return t(r["default"])}}).$mount("#app")},"7be1":function(t,e,n){t.exports=n.p+"static/img/zdg.5ba5fb33.jpg"},a18c:function(t,e,n){"use strict";n.r(e);var o=n("2b0e"),r=n("8c4f");o["default"].use(r["a"]);var i=new r["a"]({mode:"hash",routes:[{path:"/cart",name:"cart",component:function(){return n.e("chunk-3ef2e715").then(n.bind(null,"b3b1"))}},{path:"/goodsinfo",name:"goodsinfo",component:function(){return n.e("chunk-3ef2e715").then(n.bind(null,"e181"))}},{path:"/",name:"home",component:function(){return n.e("chunk-3ef2e715").then(n.bind(null,"57da"))}}]});e["default"]=i},eeb9:function(t,e,n){"use strict";n.r(e);var o=n("bc3a"),r=n.n(o),i=r.a.create({baseURL:"/api",timeout:1e3,headers:{"Content-Type":"application/x-www-form-urlencoded"},transformRequest:function(t,e){return t},transformResponse:function(t){return t}});e["default"]=i}});
//# sourceMappingURL=index.49119187.js.map