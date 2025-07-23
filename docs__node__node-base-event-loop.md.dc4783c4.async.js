"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3962],{81371:function(i,d,n){n.r(d);var o=n(72269),u=n(93359),x=n(61788),c=n(19977),h=n(91558),s=n(24268),m=n(96057),v=n(85939),t=n(53683),l=n(80936),r=n(67294),_=n(65430),e=n(85893);function a(){return(0,e.jsx)(t.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"nodejs-eventloop-\u548C\u6D4F\u89C8\u5668-eventloop-\u533A\u522B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#nodejs-eventloop-\u548C\u6D4F\u89C8\u5668-eventloop-\u533A\u522B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"NodeJS-EventLoop \u548C\u6D4F\u89C8\u5668 EventLoop \u533A\u522B"]}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:_.texts[0].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:_.texts[1].value})}),(0,e.jsx)("li",{children:(0,e.jsxs)("p",{children:[_.texts[2].value,(0,e.jsx)("br",{}),_.texts[3].value]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("p",{children:[_.texts[4].value,(0,e.jsx)("br",{}),_.texts[5].value]})}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:_.texts[6].value})})]}),(0,e.jsx)(s.Z,{lang:"js",children:_.texts[7].value}),(0,e.jsxs)("h2",{id:"nodejs-eventloop-\u6267\u884C\u8FC7\u7A0B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#nodejs-eventloop-\u6267\u884C\u8FC7\u7A0B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"NodeJS-EventLoop \u6267\u884C\u8FC7\u7A0B"]}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:_.texts[8].value}),(0,e.jsx)("li",{children:_.texts[9].value}),(0,e.jsx)("li",{children:_.texts[10].value})]})]})})})})}d.default=a},65430:function(i,d,n){n.r(d),n.d(d,{texts:function(){return o}});const o=[{value:"\u4EFB\u52A1\u961F\u5217\u4E2A\u6570\u4E0D\u540C,node \u4E2D\u6709 6 \u4E2A\u961F\u5217,\u6D4F\u89C8\u5668\u4E2D\u53EA\u6709\u4E24\u4E2A \u4E00\u4E2A\u5B8F\u4EFB\u52A1\u961F\u5217 \u4E00\u4E2A\u5FAE\u4EFB\u52A1\u961F\u5217",paraId:0,tocIndex:0},{value:"\u5FAE\u4EFB\u52A1\u961F\u5217\u4E0D\u540C, \u6D4F\u89C8\u5668\u4E2D\u6709\u4E13\u95E8\u5B58\u50A8\u5FAE\u4EFB\u52A1\u7684\u961F\u5217, \u800C node \u4E2D\u6CA1\u6709",paraId:1,tocIndex:0},{value:"\u5FAE\u4EFB\u52A1\u6267\u884C\u65F6\u673A\u4E0D\u540C",paraId:2,tocIndex:0},{value:`
\u6D4F\u89C8\u5668\u4E8B\u4EF6\u73AF\u4E2D\u6BCF\u6267\u884C\u5B8C\u4E00\u4E2A\u5B8F\u4EFB\u52A1\u90FD\u4F1A\u53BB\u6E05\u7A7A\u5FAE\u4EFB\u52A1\u961F\u5217
NodeJS \u4E8B\u4EF6\u73AF\u4E2D\u53EA\u6709\u540C\u6B65\u4EE3\u7801\u6267\u884C\u5B8C\u6BD5\u548C\u5176\u5B83\u961F\u5217\u4E4B\u95F4\u5207\u6362\u7684\u65F6\u5019\u4F1A\u53BB\u6E05\u7A7A\u5FAE\u4EFB\u52A1\u961F\u5217`,paraId:2,tocIndex:0},{value:"\u5FAE\u4EFB\u52A1\u4F18\u5148\u7EA7\u4E0D\u540C",paraId:3,tocIndex:0},{value:`
\u6D4F\u89C8\u5668\u4E2D\u5FAE\u4EFB\u52A1\u7684\u6267\u884C\u987A\u5E8F\u662F\u961F\u5217\u7684\u6267\u884C\u987A\u5E8F \u5148\u8FDB\u5148\u51FA
NodeJS \u4E8B\u4EF6\u73AF\u4E2D\u5982\u679C\u591A\u4E2A\u5FAE\u4EFB\u52A1\u540C\u65F6\u6EE1\u8DB3\u6267\u884C\u6761\u4EF6\uFF0C\u4F1A\u6309\u7167\u4F18\u5148\u7EA7\u6267\u884C`,paraId:3,tocIndex:0},{value:"\u5728 NodeJS \u4E2D \u200B\u200Bprocess.nextTick\u200B\u200B \u5FAE\u4EFB\u52A1\u7684\u4F18\u5148\u7EA7\u9AD8\u4E8E \u200B\u200BPromise.resolve\u200B\u200B \u5FAE\u4EFB\u52A1\uFF0C\u9A8C\u8BC1\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:4,tocIndex:0},{value:`Promise.resolve().then(function () {
  console.log('Promise');
});
process.nextTick(function () {
  console.log('process.nextTick1');
});
process.nextTick(function () {
  console.log('process.nextTick2');
});
process.nextTick(function () {
  console.log('process.nextTick3');
});

// \u6253\u5370\uFF1A
// process.nextTick1
// process.nextTick2
// process.nextTick3
// Promise
`,paraId:5,tocIndex:0},{value:"\u6267\u884C\u540C\u6B65\u4EE3\u7801",paraId:6,tocIndex:1},{value:"\u6267\u884C\u5FAE\u4EFB\u52A1\uFF08process.nextTick\u4F18\u5148\u7EA7\u6700\u9AD8\uFF09",paraId:6,tocIndex:1},{value:"\u6309\u987A\u5E8F\u6267\u884C6\u4E2A\u7C7B\u578B\u7684\u5B8F\u4EFB\u52A1\uFF08\u6BCF\u4E2A\u5F00\u59CB\u4E4B\u524D\u90FD\u6267\u884C\u5F53\u524D\u7684\u5FAE\u4EFB\u52A1\uFF09",paraId:6,tocIndex:1}]}}]);
