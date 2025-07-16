"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9424],{81756:function(t,_,n){n.r(_);var o=n(72269),u=n(93359),c=n(61788),x=n(19977),m=n(91558),d=n(24268),h=n(96057),p=n(85939),r=n(53683),i=n(80936),l=n(67294),s=n(29210),e=n(85893);function a(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u57FA\u7840",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u57FA\u7840",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u57FA\u7840"]}),(0,e.jsxs)("p",{children:[s.texts[0].value,(0,e.jsx)("br",{}),s.texts[1].value]}),(0,e.jsx)("p",{children:s.texts[2].value}),(0,e.jsx)(d.Z,{lang:"ts",children:s.texts[3].value}),(0,e.jsxs)("h2",{id:"\u5E38\u89C1\u7684-nodejs-\u6846\u67B6",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5E38\u89C1\u7684-nodejs-\u6846\u67B6",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5E38\u89C1\u7684 nodejs \u6846\u67B6"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:s.texts[4].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:s.texts[5].value})})]}),(0,e.jsx)(d.Z,{lang:"ts",children:s.texts[6].value}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:s.texts[7].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:s.texts[8].value})})]})]})})})})}_.default=a},29210:function(t,_,n){n.r(_),n.d(_,{texts:function(){return o}});const o=[{value:"\u5B89\u88C5 ts-node \u5305\u76F4\u63A5\u6267\u884C ts \u5199\u7684 node \u4EE3\u7801",paraId:0,tocIndex:0},{value:`
ts-node ./test.ts`,paraId:0,tocIndex:0},{value:"\u5168\u5C40\u53D8\u91CF",paraId:1,tocIndex:0},{value:`__filename; // \u6B63\u5728\u6267\u884C\u811A\u672C\u6587\u4EF6\u7684\u7EDD\u5BF9\u8DEF\u5F84
__dirname; // \u8FD4\u56DE\u6B63\u5728\u6267\u884C\u811A\u672C\u6240\u5728\u7684\u76EE\u5F55
process; // \u63D0\u4F9B\u4E0E\u5F53\u524D\u8FDB\u7A0B\u4E92\u52A8\u7684\u63A5\u53E3(\u8FD0\u884C\u76EE\u5F55\uFF0Cnode\u73AF\u5883\u3001cpu\u67B6\u6784\u3001\u7528\u6237\u73AF\u5883\u3001\u7CFB\u7EDF\u5E73\u53F0)
require; // \u6A21\u5757\u7684\u52A0\u8F7D
module; // \u6A21\u5757\u5BFC\u51FA
exports; // \u6A21\u5757\u5BFC\u51FA
this; // \u7A7A\u5BF9\u8C61
(function () {
  console.log(this === global); // true
})();
console.log(process.memoryUsage()); //\u5185\u5B58
console.log(process.cpuUsage()); // cpu
console.log(process.version); // \u7248\u672C  v16.17.0
console.log(process.versions); // \u7248\u672C \u8BE6\u7EC6
console.log(process.arch); // arm64
console.log(process.argv); // \u542F\u52A8\u53C2\u6570
console.log(process.pid); // pid
console.log(process.uptime()); //\u6587\u4EF6\u8FD0\u884C\u6267\u884C\u603B\u65F6\u95F4

// \u4E8B\u4EF6
process.on('exit', (code) => {
  console.log('code: ', code); // \u4E0D\u80FD\u518D\u6267\u884C\u5F02\u6B65\u4EE3\u7801
});
process.on('beforeExit', (code) => {
  console.log('code: ', code); // \u4E0D\u80FD\u518D\u6267\u884C\u5F02\u6B65\u4EE3\u7801
});

process.exit(); // \u76F4\u63A5\u4E3B\u52A8\u9000\u51FA \u540E\u9762\u4EE3\u7801\u4E0D\u4F1A\u6267\u884C

// \u8F93\u5165\u8F93\u51FA
process.stdin.pipe(process.stdout);

// \u8BFB\u53D6\u6587\u4EF6\u5230\u63A7\u5236\u53F0
const fs = require('fs');
fs.createReadStream('test.txt').pipe(process.stdout);
`,paraId:2,tocIndex:0},{value:"Koa\uFF1A\u4E00\u4E2A\u8F7B\u91CF\u7684 Nodejs \u6846\u67B6\uFF0C\u4EE3\u7801\u975E\u5E38\u7B80\u6D01\u3002\u91C7\u7528\u6D0B\u8471\u5708\u6A21\u578B\u4E2D\u95F4\u4EF6\uFF0C\u975E\u5E38\u65B9\u4FBF\u6269\u5C55\u529F\u80FD\uFF0C\u4F46\u662F\u5F00\u53D1\u540E\u7AEF API \u9700\u8981\u8FDB\u884C\u518D\u5C01\u88C5\u3002",paraId:3,tocIndex:1},{value:"Express\uFF1AExpress \u4E5F\u662F\u4E00\u4E2A\u8F7B\u91CF\u6846\u67B6\uFF0CExpress \u548C Koa \u7684\u533A\u522B\u5728\u4E8E\u4E2D\u95F4\u4EF6\u673A\u5236\u3002\u4F46\u603B\u4F53\u5DEE\u522B\u4E0D\u662F\u5F88\u5927\uFF0C\u7EDD\u5927\u591A\u6570 Nodejs \u6846\u67B6\u90FD\u662F\u5728 Koa \u6216\u8005 Express \u57FA\u7840\u4E0A\u5C01\u88C5\u7684\u3002",paraId:4,tocIndex:1},{value:`import express from 'express';
const app = express();

app.get('/', (req, res) => {
  res.send('1122');
});

app.listen(8080, () => {
  console.log('\u670D\u52A1\u542F\u52A8\u4E86');
});
`,paraId:5,tocIndex:1},{value:"Eggjs\uFF1A\u57FA\u4E8E Koa \u5C01\u88C5\u7684\u6846\u67B6\uFF0C\u6574\u5408\u4E86\u6570\u636E\u5E93\u3001\u8DEF\u7531\u3001\u5B89\u5168\u9632\u62A4\u3001\u65E5\u5FD7\u8BB0\u5F55\u3001\u5F02\u5E38\u5904\u7406\u7B49\u4E2D\u95F4\u4EF6\uFF0C\u53EF\u4EE5\u7528\u6765\u5FEB\u901F\u5F00\u53D1 Rest \u6216\u8005 Restful API \u9879\u76EE\u3002",paraId:6,tocIndex:1},{value:"Nestjs\uFF1A\u57FA\u4E8E TS,\u4F7F\u7528\u4E86\u5927\u91CF\u7684\u88C5\u9970\u5668\u8BED\u6CD5\uFF0C\u5F00\u53D1\u4F53\u9A8C\u7C7B\u4F3C\u4E8E Java \u7684 Springboot\u3002\u9664\u6B64\u4E4B\u5916\uFF0CNestjs \u8FD8\u63D0\u4F9B\u4E86 GraphQL\u3001WebSocket\u3001\u5404\u79CD MQ \u548C\u5FAE\u670D\u52A1\u7684\u89E3\u51B3\u65B9\u6848\uFF0C\u6BD4\u8F83\u9002\u5408\u5927\u578B\u540E\u7AEF\u9879\u76EE\u7684\u5F00\u53D1\u3002",paraId:7,tocIndex:1}]}}]);
