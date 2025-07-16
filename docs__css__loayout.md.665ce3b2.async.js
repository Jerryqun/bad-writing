"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4427],{60705:function(a,i,e){e.r(i);var d=e(72269),s=e(93359),h=e(61788),g=e(19977),x=e(91558),_=e(24268),c=e(96057),m=e(85939),l=e(53683),r=e(80936),u=e(67294),t=e(24297),n=e(85893);function o(){return(0,n.jsx)(l.dY,{children:(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(r.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"\u5DE6\u4FA7\u56FA\u5B9A--\u53F3\u4FA7\u81EA\u9002\u5E94\u5E03\u5C40",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5DE6\u4FA7\u56FA\u5B9A--\u53F3\u4FA7\u81EA\u9002\u5E94\u5E03\u5C40",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5DE6\u4FA7\u56FA\u5B9A + \u53F3\u4FA7\u81EA\u9002\u5E94\u5E03\u5C40"]}),(0,n.jsx)("p",{children:t.texts[0].value}),(0,n.jsx)(_.Z,{lang:"html",children:t.texts[1].value}),(0,n.jsx)("p",{children:t.texts[2].value}),(0,n.jsx)(_.Z,{lang:"css",children:t.texts[3].value}),(0,n.jsx)("p",{children:t.texts[4].value}),(0,n.jsx)(_.Z,{lang:"css",children:t.texts[5].value}),(0,n.jsx)("p",{children:t.texts[6].value}),(0,n.jsx)(_.Z,{lang:"css",children:t.texts[7].value}),(0,n.jsx)("p",{children:t.texts[8].value}),(0,n.jsx)(_.Z,{lang:"css",children:t.texts[9].value}),(0,n.jsx)("p",{children:t.texts[10].value}),(0,n.jsx)(_.Z,{lang:"css",children:t.texts[11].value})]})})})})}i.default=o},24297:function(a,i,e){e.r(i),e.d(i,{texts:function(){return d}});const d=[{value:"\u73B0\u5728\u6709\u4EE5\u4E0B DOM \u7ED3\u6784\uFF1A",paraId:0,tocIndex:0},{value:`<div class="outer">
  <div class="left">\u5DE6\u4FA7</div>
  <div class="right">\u53F3\u4FA7</div>
</div>
`,paraId:1,tocIndex:0},{value:"1\u3001\u5229\u7528\u6D6E\u52A8\uFF0C\u5DE6\u8FB9\u5143\u7D20\u5BBD\u5EA6\u56FA\u5B9A \uFF0C\u8BBE\u7F6E\u5411\u5DE6\u6D6E\u52A8\u3002\u5C06\u53F3\u8FB9\u5143\u7D20\u7684 margin-left \u8BBE\u4E3A\u56FA\u5B9A\u5BBD\u5EA6 \u3002\u6CE8\u610F\uFF0C\u56E0\u4E3A\u53F3\u8FB9\u5143\u7D20\u7684 width \u9ED8\u8BA4\u4E3A auto \uFF0C\u6240\u4EE5\u4F1A\u81EA\u52A8\u6491\u6EE1\u7236\u5143\u7D20\u3002",paraId:2,tocIndex:0},{value:`.outer {
  height: 100px;
}
.left {
  float: left;
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  margin-left: 200px;
  height: 100%;
  background: lightseagreen;
}
`,paraId:3,tocIndex:0},{value:"2\u3001\u540C\u6837\u5229\u7528\u6D6E\u52A8\uFF0C\u5DE6\u8FB9\u5143\u7D20\u5BBD\u5EA6\u56FA\u5B9A \uFF0C\u8BBE\u7F6E\u5411\u5DE6\u6D6E\u52A8\u3002\u53F3\u4FA7\u5143\u7D20\u8BBE\u7F6E overflow: hidden; \u8FD9\u6837\u53F3\u8FB9\u5C31\u89E6\u53D1\u4E86 BFC \uFF0CBFC \u7684\u533A\u57DF\u4E0D\u4F1A\u4E0E\u6D6E\u52A8\u5143\u7D20\u53D1\u751F\u91CD\u53E0\uFF0C\u6240\u4EE5\u4E24\u4FA7\u5C31\u4E0D\u4F1A\u53D1\u751F\u91CD\u53E0\u3002",paraId:4,tocIndex:0},{value:`.outer {
  height: 100px;
}
.left {
  float: left;
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  overflow: auto;
  height: 100%;
  background: lightseagreen;
}
`,paraId:5,tocIndex:0},{value:"3\u3001\u5229\u7528 flex \u5E03\u5C40\uFF0C\u5DE6\u8FB9\u5143\u7D20\u56FA\u5B9A\u5BBD\u5EA6\uFF0C\u53F3\u8FB9\u7684\u5143\u7D20\u8BBE\u7F6E flex: 1 \u3002",paraId:6,tocIndex:0},{value:`.outer {
  display: flex;
  height: 100px;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  flex: 1;
  height: 100%;
  background: lightseagreen;
}
`,paraId:7,tocIndex:0},{value:"4\u3001\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u7236\u7EA7\u5143\u7D20\u8BBE\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\u3002\u5DE6\u8FB9\u5143\u7D20 absolute\xA0 \u5B9A\u4F4D\uFF0C\u5BBD\u5EA6\u56FA\u5B9A\u3002\u53F3\u8FB9\u5143\u7D20\u7684 margin-left\xA0 \u7684\u503C\u8BBE\u4E3A\u5DE6\u8FB9\u5143\u7D20\u7684\u5BBD\u5EA6\u503C\u3002",paraId:8,tocIndex:0},{value:`.outer {
  position: relative;
  height: 100px;
}
.left {
  position: absolute;
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  margin-left: 200px;
  height: 100%;
  background: lightseagreen;
}
`,paraId:9,tocIndex:0},{value:"5\u3001\u5229\u7528\u7EDD\u5BF9\u5B9A\u4F4D\uFF0C\u7236\u7EA7\u5143\u7D20\u8BBE\u4E3A\u76F8\u5BF9\u5B9A\u4F4D\u3002\u5DE6\u8FB9\u5143\u7D20\u5BBD\u5EA6\u56FA\u5B9A\uFF0C\u53F3\u8FB9\u5143\u7D20 absolute \u5B9A\u4F4D\uFF0C left \u4E3A\u5BBD\u5EA6\u5927\u5C0F\uFF0C\u5176\u4F59\u65B9\u5411\u5B9A\u4F4D\u4E3A 0 \u3002",paraId:10,tocIndex:0},{value:`.outer {
  position: relative;
  height: 100px;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: lightseagreen;
}
`,paraId:11,tocIndex:0}]}}]);
