webpackJsonp([5],{AHFi:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n,s=a("Gu7T"),i=a.n(s),r=a("bOdI"),c=a.n(r),o=(a("9++/"),a("QhyB")),d=(a("yffH"),a("sdMh")),m=a("DasX"),l=a("cxn4"),f={components:(n={},c()(n,d.a.name,d.a),c()(n,o.a.name,o.a),c()(n,"CommentItem",l.a),c()(n,"HeaderBar",m.a),n),data:function(){return{refresh:!1,loading:!1,finished:!1,page:1,commentList:[],argCon:this.$route.query.argCon,comicdata:this.$route.query.comicdata}},created:function(){this.getData()},methods:{onRefresh:function(){this.refresh=!0,this.page=1,this.getData()},onLoad:function(){this.loading=!0,this.page++,this.getData()},getData:function(){var t=this;this.get("v3/appV3_3/ios/phone/comment/list",{object_id:this.comicdata.comic_id+"",thread_id:this.comicdata.thread_id+"",page:this.page,argCon:this.argCon}).then(function(e){var a;(t.refresh=!1,t.loading=!1,null!=e.returnData&&0!=e.returnData.commentList.length)?t.refresh?t.commentList=e.returnData.commentList:(a=t.commentList).splice.apply(a,[t.commentList.length,0].concat(i()(e.returnData.commentList))):t.finished=!0})}}},h={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"bg"},[a("header-bar",{attrs:{text:"评论"}}),t._v(" "),a("van-pull-refresh",{staticClass:"refresh",on:{refresh:t.onRefresh},model:{value:t.refresh,callback:function(e){t.refresh=e},expression:"refresh"}},[a("van-list",{attrs:{finished:t.finished},on:{load:t.onLoad},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.commentList,function(t,e){return a("comment-item",{key:e,staticClass:"comment",attrs:{data:t}})}))],1)],1)},staticRenderFns:[]};var u=a("VU/8")(f,h,!1,function(t){a("QrBv")},"data-v-38daf7e3",null);e.default=u.exports},"Q+OJ":function(t,e){},QrBv:function(t,e){},cxn4:function(t,e,a){"use strict";var n={props:{data:{type:Object}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comment"},[a("div",{staticClass:"top"},[a("img",{attrs:{src:t.data.face}}),t._v(" "),a("div",{staticClass:"name"},[t._v(t._s(t.data.nickname))]),t._v(" "),a("div",{staticClass:"time"},[t._v("2016-1-12")])]),t._v(" "),a("div",{staticClass:"comment-content"},[t._v(t._s(t.data.content_filter))])])},staticRenderFns:[]};var i=a("VU/8")(n,s,!1,function(t){a("Q+OJ")},"data-v-2c0a29f0",null);e.a=i.exports}});
//# sourceMappingURL=5.c7ff51d3e292b4d3034e.js.map