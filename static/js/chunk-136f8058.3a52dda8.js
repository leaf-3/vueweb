(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-136f8058"],{"05dd":function(t,s,e){t.exports=e.p+"static/img/bjd2.ab78d08b.jpg"},"18fe":function(t,s,e){},"4e9f":function(t,s,e){"use strict";var a=e("813f"),i=e.n(a);i.a},"57da":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"home"}},[a("div",{staticClass:"block"},[a("el-carousel",{attrs:{height:"15rem"}},t._l(t.carousel_item_img,function(t,s){return a("el-carousel-item",{key:s},[a("el-image",{style:{width:"100%",height:"100%"},attrs:{src:e("a8ec")("./"+t["src"])}})],1)}),1)],1),a("div",{staticClass:"block"},[a("div",{staticClass:"nav-top"},[a("ul",[a("li",[a("ul",[a("li",[a("span",{staticClass:"nav-top-up"},[a("i",{staticClass:"el-icon-goods",style:{color:"#ff5500"}})])]),t._m(0)])]),a("li",[a("ul",[a("li",[a("span",{staticClass:"nav-top-up"},[a("i",{staticClass:"el-icon-user",style:{color:"#00aaff"}})])]),t._m(1)])]),a("li",[a("ul",[a("li",[a("span",{staticClass:"nav-top-up"},[a("i",{staticClass:"el-icon-menu",style:{color:"#55ff00"}})])]),t._m(2)])]),a("li",[a("ul",[a("li",[a("span",{staticClass:"nav-top-up"},[a("i",{staticClass:"el-icon-s-order",style:{color:"#00aaff"}})])]),t._m(3)])]),a("li",[a("ul",[a("li",[a("span",{staticClass:"nav-top-up"},[a("i",{staticClass:"el-icon-document-checked",style:{color:"#0055ff"}})])]),t._m(4)])])])])]),t._m(5),a("div",{staticClass:"block"},[a("div",{staticClass:"goods-lists"},t._l(t.urls,function(s,i){return a("ul",{key:i},t._l(s,function(s,i){return a("li",{key:i},[a("a",{attrs:{href:"javascript:0;"},on:{click:function(e){return t.showdetail(s)}}},[a("el-image",{attrs:{src:e("a8ec")("./"+s.src),lazy:""}}),a("span",[a("strong",[t._v(t._s(s.name))])])],1)])}),0)}),0)]),a("div",{staticClass:"block"},[t.loading?a("a",{attrs:{href:"javascript:void(0);"},on:{click:t.addpage}},[t._v("加载更多")]):t._e()])])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",{staticClass:"nav-top-down"},[t._v("推荐")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",{staticClass:"nav-top-down"},[t._v("我的账户")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",{staticClass:"nav-top-down"},[t._v("商品分类")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",{staticClass:"nav-top-down"},[t._v("我的订单")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",{staticClass:"nav-top-down"},[t._v("隐私政策")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"block"},[e("div",{staticClass:"title-hot"},[e("span",[e("i",{staticClass:"el-icon-medal-1"}),t._v("热销榜单")])])])}],n=(e("7f7f"),{name:"home",data:function(){return{carousel_item_img:[{id:"101",name:"test",src:"assets/goods/bjd.jpg"},{id:"102",name:"test",src:"assets/goods/bjd4.jpg"},{id:"103",name:"test",src:"assets/goods/bjd2.jpg"},{id:"104",name:"test",src:"assets/goods/bjd3.jpg"}],count:0,loading:!0,urls:[[{id:101,name:"test",src:"assets/goods/bjd4.jpg"},{id:102,name:"test",src:"assets/goods/bjd2.jpg"},{id:103,name:"test",src:"assets/goods/bjd3.jpg"}],[{id:104,name:"test",src:"assets/goods/bjd4.jpg"},{id:105,name:"test",src:"assets/goods/bjd2.jpg"},{id:106,name:"test",src:"assets/goods/bjd3.jpg"}],[{id:107,name:"test",src:"assets/goods/bjd4.jpg"},{id:108,name:"test",src:"assets/goods/bjd2.jpg"},{id:109,name:"test",src:"assets/goods/bjd3.jpg"}],[{id:110,name:"test",src:"assets/goods/bjd4.jpg"},{id:111,name:"test",src:"assets/goods/bjd2.jpg"},{id:112,name:"test",src:"assets/goods/bjd3.jpg"}]]}},methods:{addpage:function(){this.urls.length<10?this.urls.push([{id:this.urls[this.urls.length-1][2]["id"]+1,name:"新加载",src:"assets/goods/bjd4.jpg"},{id:this.urls[this.urls.length-1][2]["id"]+2,name:"新加载",src:"assets/goods/bjd1.jpg"},{id:this.urls[this.urls.length-1][2]["id"]+3,name:"新加载",src:"assets/goods/bjd3.jpg"}]):this.loading=!1},showdetail:function(t){this.$router.push({name:"goodsinfo",params:{goodsId:t.id,goodsName:t.name,goodsSrc:t.src,oldPrice:15,newPrice:12}})}}}),r=n,o=(e("d7f2"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,"ecbfd58c",null);s["default"]=c.exports},"667f":function(t,s,e){t.exports=e.p+"static/img/bjd4.20eddb44.jpg"},"6b7a":function(t,s,e){t.exports=e.p+"static/img/bjd.fe2e6fa4.jpg"},"7f7f":function(t,s,e){var a=e("86cc").f,i=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in i||e("9e1e")&&a(i,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(t){return""}}})},"813f":function(t,s,e){},"87d2":function(t,s,e){},a8ec:function(t,s,e){var a={"./App":"3dfd","./App.vue":"3dfd","./assets/goods/bjd.jpg":"6b7a","./assets/goods/bjd1.jpg":"e83f","./assets/goods/bjd2.jpg":"05dd","./assets/goods/bjd3.jpg":"d14d","./assets/goods/bjd4.jpg":"667f","./assets/logo.png":"cf05","./assets/zdg.jpg":"7be1","./axios":"eeb9","./axios/":"eeb9","./axios/index":"eeb9","./axios/index.js":"eeb9","./components/AppHeader":"a4ce","./components/AppHeader.vue":"a4ce","./components/Cart":"b3b1","./components/Cart.vue":"b3b1","./components/GoodsInfo":"e181","./components/GoodsInfo.vue":"e181","./components/HelloWorld":"fdab","./components/HelloWorld.vue":"fdab","./components/Home":"57da","./components/Home.vue":"57da","./main":"56d7","./main.js":"56d7","./router":"a18c","./router/":"a18c","./router/index":"a18c","./router/index.js":"a18c","./vuex":"2846","./vuex/":"2846","./vuex/index":"2846","./vuex/index.js":"2846"};function i(t){var s=n(t);return e(s)}function n(t){var s=a[t];if(!(s+1)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return s}i.keys=function(){return Object.keys(a)},i.resolve=n,t.exports=i,i.id="a8ec"},ac43:function(t,s,e){"use strict";var a=e("cc6f"),i=e.n(a);i.a},b3b1:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"cart"}},[t._l(t.cart_list.goods_data,function(s,i){return a("div",{staticClass:"cart-box"},[a("ul",{staticClass:"cart-lists"},[a("li",{style:{width:"10%"}},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.checklist,expression:"checklist"}],attrs:{type:"checkbox"},domProps:{value:i,checked:Array.isArray(t.checklist)?t._i(t.checklist,i)>-1:t.checklist},on:{change:function(s){var e=t.checklist,a=s.target,n=!!a.checked;if(Array.isArray(e)){var r=i,o=t._i(e,r);a.checked?o<0&&(t.checklist=e.concat([r])):o>-1&&(t.checklist=e.slice(0,o).concat(e.slice(o+1)))}else t.checklist=n}}})]),a("li",{style:{width:"20%"}},[a("el-image",{style:{width:"5rem",height:"5rem",border:"1px solid white"},attrs:{src:e("a8ec")("./"+s.goodsSrc),lazy:""}})],1),a("li",{style:{width:"35%"}},[a("ul",{staticClass:"cart-goodinfo"},[a("li",[a("span",[t._v(t._s(s.goodsName))]),t._v(" "),a("span",[t._v(t._s(s.goodsId))])]),t._m(0,!0),a("li",[a("span",{style:{color:"#ff5500"}},[a("strong",[t._v("$"+t._s(s.newPrice))])]),t._v(" "),a("span",{style:{"text-decoration":"line-through"}},[t._v("$"+t._s(s.oldPrice))])])])]),a("li",{style:{width:"35%"}},[a("span",[a("a",{attrs:{href:"javascript:0;"},on:{click:function(s){return t.add_nums(i)}}},[a("i",{staticClass:"el-icon-plus"})]),a("a",{attrs:{href:"javascript:0;"}},[t._v(t._s(s.nums))]),a("a",{attrs:{href:"javascript:0;"},on:{click:function(s){return t.reduce_nums(i)}}},[a("i",{staticClass:"el-icon-minus"})]),a("a",{attrs:{href:"javascript:0;"},on:{click:function(s){return t.remove_goods(i)}}},[a("i",{staticClass:"el-icon-delete"})])])])])])}),a("div",{staticClass:"footer_cart"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("返回首页")])],1),a("li",[a("a",{attrs:{href:"javascript:0;"}},[t._v("共计:"+t._s(t.totalprice)+"元")])]),a("li",[a("a",{attrs:{href:"javascript:0;"},on:{click:function(s){return t.gopay()}}},[t._v("立即购买")])])])]),a("el-button",{style:{display:"none"},attrs:{plain:!0},on:{click:function(s){return t.gopay()}}})],2)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",[t._v("规格")]),t._v(" "),e("span",[t._v("中等")])])}],n={name:"goodslist",data:function(){return{checklist:[],cart_list:{goods_data:[]}}},methods:{add_nums:function(t){this.cart_list.goods_data[t].nums<100&&(this.checklist=[],this.$store.dispatch("commit_addgoodsnums_to_carlist",{index:t}),this.$forceUpdate())},reduce_nums:function(t){this.cart_list.goods_data[t].nums>1&&(this.checklist=[],this.$store.dispatch("commit_reducegoodsnums_to_carlist",{index:t}),this.$forceUpdate())},remove_goods:function(t){this.checklist=[],this.$store.dispatch("commit_removegoods_from_cartlist",{index:t})},gopay:function(){this.$message({message:"抱歉暂时还不能购买!",type:"warning"})}},computed:{totalprice:function(){var t=0;for(var s in this.checklist)t+=this.cart_list.goods_data[s].newPrice*this.cart_list.goods_data[s].nums;return t}},mounted:function(){this.cart_list.goods_data=this.$store.getters.get_cart_list}},r=n,o=(e("4e9f"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,"771e819b",null);s["default"]=c.exports},cc6f:function(t,s,e){},ccd1:function(t,s,e){"use strict";var a=e("18fe"),i=e.n(a);i.a},cf05:function(t,s,e){t.exports=e.p+"static/img/logo.82b9c7a5.png"},d14d:function(t,s,e){t.exports=e.p+"static/img/bjd3.b7011bda.jpg"},d7f2:function(t,s,e){"use strict";var a=e("87d2"),i=e.n(a);i.a},e181:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{attrs:{id:"goodsinfo"}},[a("div",{staticClass:"block"},[a("el-carousel",{attrs:{height:"15rem"}},t._l(t.carousel_item_img,function(t,s){return a("el-carousel-item",{key:s},[a("el-image",{style:{width:"100%",height:"100%"},attrs:{src:e("a8ec")("./"+t.src)}})],1)}),1)],1),t._m(0),a("div",{staticClass:"goodsinfo-main"},[a("ul",[a("li",[a("p",{style:{"font-size":"1.5rem"}},[t._v(t._s(t.goodsinfo.goodsName))])]),t._m(1),t._m(2),t._m(3),t._m(4),a("li",[a("p",{style:{"text-decoration":"line-through"}},[t._v("原价:"+t._s(t.goodsinfo.oldPrice)+"元")]),a("p",{style:{color:"#ff5500","font-size":"1.3rem"}},[t._v("现价:"+t._s(t.goodsinfo.newPrice)+"元")])]),t._m(5)])]),t._m(6),a("div",{staticClass:"evaluate-main"},[a("ul",[a("li",[a("ul",{staticClass:"evaluate-main-userinfo"},[a("li",[a("el-image",{class:"user-header-pic",attrs:{src:e("7be1"),lazy:""}}),t._m(7)],1),a("li"),t._m(8)])]),t._m(9)]),a("ul",[a("li",[a("ul",{staticClass:"evaluate-main-userinfo"},[a("li",[a("el-image",{class:"user-header-pic",attrs:{src:e("7be1"),lazy:""}}),t._m(10)],1),a("li"),t._m(11)])]),t._m(12)]),a("ul",[a("li",[a("ul",{staticClass:"evaluate-main-userinfo"},[a("li",[a("el-image",{class:"user-header-pic",attrs:{src:e("7be1"),lazy:""}}),t._m(13)],1),a("li"),t._m(14)])]),t._m(15)])]),a("div",{staticClass:"footer-cart"},[a("ul",[a("li",[a("router-link",{attrs:{to:"/"}},[t._v("返回首页")])],1),a("li",[a("router-link",{attrs:{to:"/cart"}},[a("el-badge",{staticClass:"item",attrs:{value:t.cartlistsnums}},[t._v("\n\t\t\t\t\t  购物车\n\t\t\t\t\t")])],1)],1),a("li",[a("a",{attrs:{href:"javascript:0;"},on:{click:function(s){return t.add_cart()}}},[t._v("加入购物车")])])])]),a("el-button",{style:{display:"none"},attrs:{plain:!0},on:{click:function(s){return t.add_cart()}}})],1)},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"goodsinfo-main-title"},[e("span",[e("i",{staticClass:"el-icon-view"}),t._v("详情")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("产品描述:这个是我的一个测试产品，该产品由leaf有限责任公司负责研发->生产->销售->售后!")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("生产厂商:leaf公司")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("版权:测试产品版权")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("地址:测试地址:112号")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("ul",{staticClass:"goodsinfo-main-peizhi"},[e("li",[e("ul",[e("li",[e("span",[t._v("尺寸")])]),e("li",[e("span",[t._v("15cm*20cm")])])])]),e("li",[e("ul",[e("li",[e("span",[t._v("厚度")])]),e("li",[e("span",[t._v("1cm")])])])]),e("li",[e("ul",[e("li",[e("span",[t._v("重量")])]),e("li",[e("span",[t._v("0.1kg")])])])]),e("li",[e("ul",[e("li",[e("span",[t._v("材质")])]),e("li",[e("span",[t._v("纸质")])])])])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"evaluate-title"},[e("span",[e("i",{staticClass:"el-icon-chat-dot-square"}),t._v("相关评价")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[t._v("xx用户"),e("i",{staticClass:"el-icon-user"}),t._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",[e("i",{staticClass:"el-icon-thumb"}),t._v("5")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("该用户觉得商品还不错!")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[t._v("xx用户"),e("i",{staticClass:"el-icon-user"}),t._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",[e("i",{staticClass:"el-icon-thumb"}),t._v("5")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("该用户觉得商品还不错!")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("span",[t._v("xx用户"),e("i",{staticClass:"el-icon-user"}),t._v(":")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("span",[e("i",{staticClass:"el-icon-thumb"}),t._v("5")])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("li",[e("p",[t._v("该用户觉得商品还不错!")])])}],n={name:"goodsinof",data:function(){return{carousel_item_img:[{id:"101",name:"test",src:"assets/goods/bjd.jpg"},{id:"102",name:"test",src:"assets/goods/bjd4.jpg"},{id:"103",name:"test",src:"assets/goods/bjd2.jpg"},{id:"104",name:"test",src:"assets/goods/bjd3.jpg"}],goodsinfo:{},cartlistsnums:0}},methods:{add_cart:function(){this.$message({message:"添加购物车成功!",type:"success"}),this.goodsinfo.nums=1,this.$store.dispatch("commit_addgoods_to_cartlist",this.goodsinfo),this.cartlistsnums=this.$store.getters.get_cart_list_goodsnums}},created:function(){this.goodsinfo=this.$route.params,this.carousel_item_img[0].src=this.goodsinfo.goodsSrc,this.cartlistsnums=this.$store.getters.get_cart_list_goodsnums}},r=n,o=(e("ac43"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,"9aa4c0c6",null);s["default"]=c.exports},e83f:function(t,s,e){t.exports=e.p+"static/img/bjd1.cf2dec41.jpg"},fdab:function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"hello"},[e("h1",[t._v(t._s(t.msg))]),t._m(0),e("h3",[t._v("Installed CLI Plugins")]),t._m(1),e("h3",[t._v("Essential Links")]),t._m(2),e("h3",[t._v("Ecosystem")]),t._m(3)])},i=[function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("p",[t._v("\n    For a guide and recipes on how to configure / customize this project,"),e("br"),t._v("\n    check out the\n    "),e("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(".\n  ")])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel",target:"_blank",rel:"noopener"}},[t._v("babel")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),e("li",[e("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),e("li",[e("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),e("li",[e("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),e("li",[e("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ul",[e("li",[e("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),e("li",[e("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),e("li",[e("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),e("li",[e("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],n={name:"HelloWorld",props:{msg:String}},r=n,o=(e("ccd1"),e("2877")),c=Object(o["a"])(r,a,i,!1,null,"379548a4",null);s["default"]=c.exports}}]);
//# sourceMappingURL=chunk-136f8058.3a52dda8.js.map