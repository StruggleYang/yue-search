(function(e){function t(t){for(var a,r,o=t[0],l=t[1],c=t[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&h.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);d&&d(t);while(h.length)h.shift()();return n.push.apply(n,c||[]),i()}function i(){for(var e,t=0;t<n.length;t++){for(var i=n[t],a=!0,o=1;o<i.length;o++){var l=i[o];0!==s[l]&&(a=!1)}a&&(n.splice(t--,1),e=r(r.s=i[0]))}return e}var a={},s={app:0},n=[];function r(t){if(a[t])return a[t].exports;var i=a[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=e,r.c=a,r.d=function(e,t,i){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(i,a,function(t){return e[t]}.bind(null,a));return i},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var d=l;n.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},"034f":function(e,t,i){"use strict";i("85ec")},"12c3":function(e,t,i){},4678:function(e,t,i){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function s(e){var t=n(e);return i(t)}function n(e){if(!i.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}s.keys=function(){return Object.keys(a)},s.resolve=n,e.exports=s,s.id="4678"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var a=i("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{class:e.getDarkMode()?"darkmode":"",attrs:{id:"app"}},[i("YueSearch",{ref:"yueSearch",attrs:{title:"越哥说电影解说合集"}}),i("a",{staticClass:"go-top",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.goTop()}}},[i("i",{staticClass:"el-icon-top",attrs:{"aria-hidden":"true"}})]),i("a",{staticClass:"toggleDarkMode",attrs:{href:"javascript:void(0)"},on:{click:function(t){return e.toggleDarkMode()}}},["moon"===e.darkModeSetting?i("i",{staticClass:"el-icon-sunny",attrs:{"aria-hidden":"true"}}):"sunny"===e.darkModeSetting?i("i",{staticClass:"el-icon-moon",attrs:{"aria-hidden":"true"}}):"auto"===e.darkModeSetting?i("i",{staticClass:"el-icon-moon-night",attrs:{"aria-hidden":"true"}}):e._e()])],1)},n=[],r=(i("159b"),function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"yue-search",attrs:{"element-loading-text":"拼命加载中","element-loading-background":"rgba(0, 0, 0, 0.8)","element-loading-spinner":"el-icon-loading",fullscreen:!0,body:!0}},[i("h1",{style:e.isMobile?"margin-top: 60px;":""},[e._v(e._s(e.title))]),i("p",[e._v("越哥说电影，专注好电影！")]),i("p",[e._v(" (来源:微信公众号) ")]),i("p",[i("a",{attrs:{title:"试试手气",href:"javascript:void(0)"},on:{click:e.randomOpen}},[i("i",{staticClass:"el-icon-present"},[e._v("影")])]),i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{title:"来首音乐",href:"javascript:void(0)"},on:{click:e.music}},[i("i",{staticClass:"el-icon-headset"},[e._v("音")])]),i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{title:"来张海报",href:"javascript:void(0)"},on:{click:e.placard}},[i("i",{staticClass:"el-icon-picture-outline-round"},[e._v("图")])]),i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{title:"来首宋词",href:"javascript:void(0)"},on:{click:e.songCi}},[i("i",{staticClass:"el-icon-reading"},[e._v("词")])]),i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{title:"关于",href:"javascript:void(0)"},on:{click:e.about}},[i("i",{staticClass:"el-icon-warning-outline"},[e._v("友")])])],1),e.isMobile?i("el-divider"):e._e(),i("div",{class:e.isMobile?"search-input-mobile":"search-input"},[i("el-autocomplete",{ref:"keywordInput",staticClass:"input-with-select",attrs:{"fetch-suggestions":e.keywordInputSearch,placeholder:"输入电影名"},on:{select:e.searchDoms},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.item;return[i("div",{staticClass:"autocomplete-title"},[i("span",[e._v(e._s(a.value))]),i("span",{staticClass:"autocomplete-time"},[e._v("- "+e._s(a.createTime))])]),i("span",{staticClass:"autocomplete-time"},[e._v(" "+e._s(a.pageTitle))])]}}]),model:{value:e.searchKeyword,callback:function(t){e.searchKeyword=t},expression:"searchKeyword"}},[e.isMobile?e._e():i("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",disabled:"",placeholder:"请选择"},slot:"prepend",model:{value:e.select,callback:function(t){e.select=t},expression:"select"}},[i("el-option",{attrs:{label:"公众号",value:1}}),i("el-option",{attrs:{disabled:"",label:"B站",value:2}}),i("el-option",{attrs:{disabled:"",label:"Youtube",value:3}}),i("el-option",{attrs:{disabled:"",label:"西瓜视频",value:4}})],1),i("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.searchDoms},slot:"append"})],1)],1),e.datalen===e.htmls.length?i("el-row",e._l(e.htmls,(function(t,a){return i("el-col",{key:a,attrs:{xs:24,sm:6,md:6,lg:6,xl:6}},[i("p",[e._v(e._s(t.title)+"年解说合集"),i("i",{staticClass:"el-icon-bottom"})]),i("div",{staticClass:"grid-content bg-purple-dark"},e._l(e.allMovies.filter((function(e){return e.year===t.title})),(function(t){return i("p",{key:t.title},[i("a",{staticStyle:{cursor:"pointer"},attrs:{target:"_blank",title:t.title.replace(/\d{1,3}、/,"")+"-"+t.createTime,textvalue:t.title.replace(/\d{1,3}、/,"")},on:{click:function(i){return e.openMovieDetail(-1,t)}}},[e._v(e._s(t.title.replace(/\d{1,3}、/,"")))])])})),0)])})),1):e._e(),i("el-dialog",{attrs:{top:"20px",visible:e.dialogVisible,"destroy-on-close":!0,width:e.isMobile?"90%":"50%"},on:{close:e.handleClose,closed:e.handleClosed}},[i("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.dialogTitle)+" "),null!==e.randomMovie&&null===e.currentCi?i("span",[i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{title:"img",href:"javascript:void(0)"},on:{click:function(t){return e.shareImg("#movie-body",e.randomMovie.href)}}},[i("i",{staticClass:"el-icon-share"}),i("span",{staticStyle:{"font-size":"14px"}},[e._v("分享")])])],1):e._e(),null===e.randomMovie&&null!==e.currentCi?i("span",[i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{title:"img",href:"javascript:void(0)"},on:{click:function(t){return e.shareImg("#songci-body")}}},[i("i",{staticClass:"el-icon-share"})])],1):e._e()]),i("span",[e._v(e._s(e.dialogMsg))]),null===e.randomMovie&&null===e.currentCi&&e.dialogVisible&&e.searchKeyword&&!e.isMuics&&!e.isPlacard?i("div",[i("p",[i("span",[e._v("扫码去微信公众号查看")])]),i("p",[i("img",{attrs:{alt:"Yue QR",src:"qrcode.bmp"}})]),i("p",[i("a",{attrs:{target:"_blank",href:e.bLink}},[e._v("前往B站查看")])]),i("p",[i("a",{attrs:{target:"_blank",href:e.xLink}},[e._v("前往西瓜视频查看")])]),i("p",[i("a",{attrs:{target:"_blank",href:e.yLink}},[e._v("前往Youtube查看")])])]):null!==e.randomMovie&&null===e.currentCi?i("div",[i("p",[e._v("🎉找到一个超棒的解说，去看看吧"),i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{title:"换一个",href:"javascript:void(0)"},on:{click:e.randomOpen}},[i("i",{staticClass:"el-icon-refresh"}),e._v("换一个")])],1),i("p",{staticClass:"describe"},[e._v("点链接观看，如资源失效点击B站/西瓜/Yb查看")]),i("div",{attrs:{id:"movie-body"}},[e.innerVisible?i("br"):e._e(),i("p",[i("a",{attrs:{href:e.randomMovie.href}},[e._v(e._s(e.randomMovie.title.replace(/\d{1,3}、/,"")))])]),e.innerVisible?e._e():i("p",[i("a",{attrs:{target:"_blank",href:e.bLink}},[e._v("B站")]),i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{target:"_blank",href:e.xLink}},[e._v("西瓜")]),i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{target:"_blank",href:e.yLink}},[e._v("Youtube")])],1),i("p",{staticClass:"describe"},[e._v("发布时间："+e._s(e.randomMovie.createTime))]),i("el-divider"),i("p",{staticStyle:{padding:"0 5px 0 5px"}},[i("span",[e._v(e._s(e.randomMovie.pageTitle))])]),i("blockquote",[e._v(e._s(e.randomMovie.desc))]),i("el-image",{attrs:{src:e.genImgUrl(e.randomMovie),fit:"cover"}}),i("el-divider"),i("div",{domProps:{innerHTML:e._s(e.handerContentNoencode(e.randomMovie.contentNoencode))}}),i("br"),e.innerVisible?i("div",[i("el-divider"),i("p",[e._v("扫码观看当前解说(直达)")]),i("p",{attrs:{id:"qrcode"}}),i("el-footer",{class:"describe share-footer"+(e.isDarkMode?" darkmode":"")},[i("div",[i("span",[e._v("via 越哥说电影合集")]),i("el-divider",{attrs:{direction:"vertical"}}),i("span",[e._v(e._s(e.window.location.hostname))])],1),i("div",[i("span",[e._v(e._s(e.nowTime()))])])])],1):e._e()],1)]):null===e.randomMovie&&null!==e.currentCi?i("div",{attrs:{id:"songci-body"}},[e.innerVisible?i("p",{staticStyle:{"text-align":"center"}},[i("br"),e._v(" "+e._s("《"+e.currentCi.rhythmic+"》")+" ")]):e._e(),i("p",[i("span",[e._v("作者："+e._s(e.currentCi.author))]),i("el-divider",{attrs:{direction:"vertical"}}),e._l(e.currentCi.tags,(function(t){return i("el-tag",{key:t,attrs:{size:"mini"}},[e._v(e._s(t))])})),e.innerVisible?e._e():i("span",[i("el-divider",{attrs:{direction:"vertical"}}),i("a",{attrs:{title:"换一个",href:"javascript:void(0)"},on:{click:e.songCi}},[i("i",{staticClass:"el-icon-refresh"})])],1)],2),i("el-divider"),e._l(e.currentCi.paragraphs,(function(t){return i("p",{key:t},[e._v(e._s(t))])})),e.innerVisible?i("div",[i("el-footer",{class:"describe share-footer"+(e.isDarkMode?" darkmode":"")},[i("div",[i("span",[e._v("via 越哥说电影合集")]),i("el-divider",{attrs:{direction:"vertical"}}),i("span",[e._v(e._s(e.window.location.hostname))])],1),i("div",[i("span",[e._v(e._s(e.nowTime()))])])])],1):e._e()],2):e._e(),e.isMuics?i("div",[i("p",[i("span",[e._v("每天开心，睡个好觉😊")]),i("el-divider")],1),i("p",{staticClass:"describe"},[e._v("(由于网易外链播放器限制，部分音乐会替换为非原版，且播放器只展示10首，可点击链接查看完整歌单)")]),i("p",{staticClass:"describe"},[i("a",{attrs:{href:"https://y.music.163.com/m/playlist?app_version=8.5.31&id=6985955562&userid=74374168&creatorId=74374168"}},[e._v("点击查看详细歌单")])]),i("iframe",{attrs:{frameborder:"no",border:"0",marginwidth:"0",marginheight:"0",width:"280",height:"500",src:"//music.163.com/outchain/player?type=0&id=7017013032&auto=1&height=430"}})]):e._e(),e.isPlacard?i("div",[i("p",[i("span",[e._v(e._s(e.nowTimeDay()))]),i("el-divider")],1),e.todayPlacard?i("div",{attrs:{id:"placard"}},[i("el-image",{attrs:{"preview-src-list":[e.todayPlacard],src:e.todayPlacard,fit:"cover"}}),i("p",{staticClass:"describe"},[e._v("(点击查看大图/长按保存)")])],1):e._e()]):e._e(),i("el-dialog",{attrs:{top:"15px","destroy-on-close":!0,width:e.isMobile?"90%":"50%",visible:e.innerVisible,"append-to-body":""},on:{close:e.handleCloseInner}},[i("p",{staticStyle:{"text-align":"center"}},[e._v(e._s(e.innerVisibleMsg))]),i("div",{staticStyle:{"box-shadow":"0 2px 12px 0 rgba(0, 0, 0, 0.1)"},attrs:{id:"inner-body-img-box"}})])],1),i("el-dialog",{staticStyle:{"text-align":"center"},attrs:{top:"15px",visible:e.dialogVisibleAbout,"destroy-on-close":!0,title:"关于本项目",width:e.isMobile?"90%":"50%"},on:{close:e.handleCloseAbout,closed:e.handleClosedAbout}},[i("div",{staticStyle:{"text-align":"left"}},[i("p",[e._v("作者："),i("a",{attrs:{target:"_blank",href:"https://github.com/StruggleYang"}},[e._v("StruggleYang")])]),i("p",[e._v("邮箱： "),i("a",{attrs:{type:"email",target:"_blank",href:"mailto:yq1724555319@gmail.com"}},[e._v("yq1724555319@gmail.com")])]),i("p",[e._v("关于：项目源于作者兴趣进行开发和维护，托管于GitHub，数据来源于“越哥说电影”微信公众号>解说合集，本站不做数据存储，只做数据索引(链接到越哥各平台主页/解说页，不直接展示视频)")]),i("el-collapse",[i("el-collapse-item",{attrs:{title:"功能描述📒",name:"1"}},[i("ol",{staticStyle:{"padding-inline-start":"20px"}},[i("li",[i("i",{staticClass:"el-icon-search like-link"}),e._v("搜索解说全集，自动获取合集更新，不获取越哥实时单个更新")]),i("li",[e._v("无法找到解说时可以跳转到其他平台查看，B站、西瓜、Youtube")]),i("li",[e._v("搜索到的解说会携带公众号的文案/封面/观看链接可直接前往越哥公众号查看对应解说")]),i("li",[i("i",{staticClass:"el-icon-present like-link"}),e._v("试试手气，随机获得一个解说，用于漫无目的时发现以往的解说宝藏")]),i("li",[i("i",{staticClass:"el-icon-reading like-link"}),e._v("来首宋词，随机获得一首宋词进行展示")]),i("li",[i("i",{staticClass:"el-icon-headset like-link"}),e._v("来首音乐，播放在网易云音乐上收藏的越哥解说常用背景音乐")]),i("li",[e._v("电影解说预览，"),i("i",{staticClass:"el-icon-present like-link"}),e._v("试试手气，"),i("i",{staticClass:"el-icon-reading like-link"}),e._v("来首宋词可在顶部"),i("i",{staticClass:"el-icon-share like-link"}),e._v("分享为图片海报，电影解说海报中携带目标解说地址二维码")])])]),i("el-collapse-item",{attrs:{title:"交个朋友👬",name:"2"}},[i("div",{staticStyle:{"text-align":"center"}},[i("p",[e._v("我的个人微信，欢迎来撩，请备注: 越哥解说合集")]),i("el-image",{staticStyle:{width:"180px",height:"180px"},attrs:{src:"/qrcode/Wechat.jpeg",fit:"cover"}})],1)]),i("el-collapse-item",{attrs:{title:"喜欢本站💖",name:"3"}},[i("div",{staticStyle:{"text-align":"center"}},[i("p",[e._v("不会真有人会赞赏我吧😂")]),i("el-image",{staticStyle:{width:"180px",height:"180px"},attrs:{src:"/qrcode/wechat-admire.jpeg",fit:"cover"}}),i("el-image",{staticStyle:{width:"180px",height:"180px"},attrs:{src:"/qrcode/alipay.jpeg",fit:"cover"}})],1)])],1)],1)]),i("el-divider"),i("el-footer",{style:e.isMobile?"margin-bottom: 40px;":""},[e._v("© "+e._s((new Date).getFullYear())+" "),i("a",{attrs:{target:"_blank",href:"http://git66.com/soul"}},[e._v("struy")]),e._v("｜"),i("a",{attrs:{target:"_blank",href:"https://github.com/StruggleYang/yue-search"}},[e._v("源代码")]),e._v("｜本项目仅供学习使用，请勿用于商业用途！")])],1)}),o=[],l=(i("a9e3"),i("caad"),i("ac1f"),i("5319"),i("4e82"),i("d81d"),i("99af"),i("4de4"),i("2532"),i("466d"),i("bc3a")),c=i.n(l),d=i("c0e9"),u=i.n(d),h=i("d044"),f=i.n(h),v=i("c1df"),b=i.n(v),p={name:"YueSearch",components:{},props:{title:String},data:function(){return{htmls:[{title:"未知"}],datalen:1,select:1,searchKeyword:"",dialogMsg:"",dialogVisible:!1,dialogTitle:"提示",bLink:"",xLink:"",yLink:"",isMobile:!1,randomMovie:null,songci:[],isMuics:!1,currentCi:null,allMovies:[],loading:!0,innerVisible:!1,innerVisibleMsg:"",dialogVisibleAbout:!1,isPlacard:!1,todayPlacard:null,isDarkMode:!1}},mounted:function(){var e=this,t=[200];console.log("mounted");var i=localStorage.getItem("accessNum"),a=!1;if(null===i||isNaN(i))localStorage.setItem("accessNum",1);else{var s=Number(i)+1;a=t.includes(s),a&&this.$nextTick((function(){e.about()})),localStorage.setItem("accessNum",s)}this.$nextTick((function(){a||e.$refs.keywordInput.focus()}))},created:function(){var e=this;console.log("created"),c.a.get("/db/data.json").then((function(t){t.data.length>0&&(e.htmls=[],e.datalen=t.data.length);for(var i=function(i){var a=t.data[i];e.htmls.push({title:a.replace(".html","")}),e.datalen===e.htmls.length&&(e.htmls=e.htmls.sort((function(e,t){return t.title-e.title}))),console.log(e.htmls),c.a.get("/db/"+a.replace(".html",".json")).then((function(t){var i=t.data.map((function(e){return e.year=a.replace(".html",""),e.title!==e.text&&(e.title=e.text),e})).sort((function(e,t){return t.oriCreateTime-e.oriCreateTime}));setTimeout((function(){e.loading=!1}),100),e.allMovies=e.allMovies.concat(i)}))},a=0;a<t.data.length;a++)i(a)})),this.isMobile=this._isMobile(),c.a.get("/db/songci300.json").then((function(t){e.songci=t.data})),this.preLoadPlacrd()},methods:{darkModeChange:function(e){this.isDarkMode=e,console.log(this.isDarkMode)},removeDefTitle:function(){var e=document.getElementsByClassName("grid-content");e.forEach((function(e){e.removeChild(e.firstChild)}))},nowTime:function(){return b()().format("YYYY-MM-DD HH:mm:ss")},nowTimeDay:function(){return b()().format("YYYY-MM-DD")},showMsg:function(e){this.dialogVisible=!0,this.dialogMsg=e},handleClose:function(){this.dialogVisible=!1},handleCloseInner:function(){this.innerVisible=!1},handleClosed:function(){this.randomMovie=null,this.currentCi=null,this.dialogMsg="",this.dialogTitle="提示",this.isMuics=!1,this.isPlacard=!1},handleCloseAbout:function(){this.dialogVisibleAbout=!1},handleClosedAbout:function(){},about:function(){this.dialogVisibleAbout=!0},placard:function(){this.isPlacard=!0,this.dialogVisible=!0,this.dialogTitle="今日属于您的海报",null===this.todayPlacard&&this.preLoadPlacrd()},genImgUrl:function(e){return"/cover/"+e.coverLink},keywordInputSearch:function(e,t){var i=e?this.allMovies.filter((function(t){return t.title.includes(e)|t.text.includes(e)|t.pageTitle.includes(e)})).map((function(e){return{value:e.title.replace(/\d{1,3}、/,""),createTime:e.createTime,pageTitle:e.pageTitle}})):this.allMovies.map((function(e){return{value:e.title.replace(/\d{1,3}、/,""),createTime:e.createTime,pageTitle:e.pageTitle}}));t(i)},handerContentNoencode:function(e){return e.replace(/<section.*?section>/g,"").replace(/<iframe.*?iframe>/g,"").replace(/<img.*?>/g,"").replace(/<p.*?>.*?[高|备].*[清|用].*播.*放.*[地|视].*[址|频].*?<\/p>/,"").replace(/<p.*?票圈vlog.*?>.*?<\/p>/,"")},_isMobile:function(){var e=navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);return e},openMovieDetail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:-1,t=arguments.length>1?arguments[1]:void 0;this.randomMovie=e>=0?this.allMovies[e]:t,this.genOtherLink(this.randomMovie.title.replace(/\d{1,3}、/,"")),this.dialogVisible=!0},preLoadPlacrd:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){};c.a.get("/db/placard.json").then((function(i){var a=localStorage.getItem("todayPlacardNum-"+e.nowTimeDay());if(null===a){var s=Number(Math.floor(Math.random()*i.data.length));a=i.data[s],localStorage.setItem("todayPlacardNum-"+e.nowTimeDay(),a)}var n=document.createElement("img");n.src=a,e.todayPlacard=a,t()}))},randomOpen:function(){var e=Number(Math.floor(Math.random()*this.allMovies.length));this.dialogTitle="手气不错",this.openMovieDetail(e)},songCi:function(){var e=Math.floor(Math.random()*this.songci.length);this.currentCi=this.songci[e],this.dialogTitle="《"+this.currentCi.rhythmic+"》",this.dialogVisible=!0},music:function(){this.isMuics=!0,this.dialogTitle="来首音乐",this.dialogVisible=!0},qrcode:function(e,t){new f.a(e,{width:124,height:124,text:t})},shareImg:function(e,t){this.innerVisibleMsg="图片生成中...",this.innerVisible=!0,this.isDarkMode?document.querySelector(e).classList.add("darkmode"):document.querySelector(e).classList.remove("darkmode");var i=this;i.$nextTick((function(){void 0!==t&&""!==t&&i.qrcode("qrcode",t),i.$nextTick((function(){u()(document.querySelector(e),{cale:6}).then((function(e){i.innerVisibleMsg="图片生成成功！可长按或右键保存图片";var t=document.createElement("img");t.src=e.toDataURL("image/jpeg"),t.classList.add("el-image__inner"),t.style="object-fit: cover;",document.querySelector("#inner-body-img-box").appendChild(t)}))}))}))},genOtherLink:function(e){this.bLink="https://space.bilibili.com/149558293/search/video?keyword="+e,this.xLink="https://www.ixigua.com/search/越哥说电影"+e,this.yLink="https://www.youtube.com/channel/UChgCVolsF6L7DWmOpWKSkMA/search?query="+e},searchDoms:function(){var e=this,t=document.querySelectorAll('a[textvalue*="'+this.searchKeyword+'"]'),i=this.allMovies.filter((function(t){return t.title.includes(e.searchKeyword)}));this.genOtherLink(this.searchKeyword),0===i.length?this.showMsg("没有找到《"+this.searchKeyword+"》的解说，赶紧让越哥解说😂,或者去下面找找"):1===i.length&&(this.dialogTitle="找到了一个解说",this.openMovieDetail(-1,i[0])),t.forEach((function(e){e.classList.add("search"),e.scrollIntoView({block:"center"})}))}}},g=p,m=(i("6ff6"),i("2877")),j=Object(m["a"])(g,r,o,!1,null,null,null),k=j.exports,y={name:"App",components:{YueSearch:k},data:function(){return{systemDarkMode:!1,darkModeSetting:"auto"}},mounted:function(){this.getSystemDarkMode(),this.getDarkModeSetting(),this.checkDarkMode()},methods:{goTop:function(){var e=document.getElementsByTagName("body","html");e.forEach((function(e){e.scrollIntoView({behavior:"smooth"})}))},getSystemDarkMode:function(){var e=this,t=window.matchMedia("(prefers-color-scheme: dark)");this.systemDarkMode=t.matches;var i=function(t){var i=t.matches;e.systemDarkMode=i,e.checkDarkMode()};"function"===typeof t.addEventListener?t.addEventListener("change",i):"function"===typeof t.addEventListener&&t.addEventListener(i)},getDarkMode:function(){var e=!1;switch(this.getDarkModeSetting()){case"auto":e=this.systemDarkMode;break;case"moon":e=!0;break;case"sunny":e=!1;break;default:e=this.systemDarkMode}return e},toggleDarkMode:function(){switch(this.getDarkModeSetting()){case"auto":this.darkModeSetting="moon";break;case"moon":this.darkModeSetting="sunny";break;case"sunny":this.darkModeSetting="auto";break}localStorage.setItem("darkModeSetting",this.darkModeSetting),this.checkDarkMode()},getDarkModeSetting:function(){var e=localStorage.getItem("darkModeSetting");return null===e&&(e=this.darkModeSetting),this.darkModeSetting=e,e},checkDarkMode:function(){this.getDarkMode()?document.body.classList.add("darkmode"):document.body.classList.remove("darkmode"),void 0!==this.$refs.yueSearch&&this.$refs.yueSearch.darkModeChange(this.getDarkMode())}}},_=y,M=(i("034f"),Object(m["a"])(_,s,n,!1,null,null,null)),w=M.exports,C=i("5c96"),S=i.n(C);i("0fae");a["default"].config.productionTip=!1,a["default"].use(S.a),new a["default"]({render:function(e){return e(w)}}).$mount("#app")},"6ff6":function(e,t,i){"use strict";i("12c3")},"85ec":function(e,t,i){}});
//# sourceMappingURL=app.4b7ea841.js.map