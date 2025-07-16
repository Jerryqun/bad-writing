"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8790],{88915:function(a,s,t){t.r(s);var o=t(72269),c=t(93359),u=t(61788),x=t(19977),m=t(91558),i=t(24268),I=t(96057),h=t(85939),_=t(53683),d=t(80936),l=t(67294),n=t(47906),e=t(85893);function r(){return(0,e.jsx)(_.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u751F\u547D\u5468\u671F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u751F\u547D\u5468\u671F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u751F\u547D\u5468\u671F"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://wisdomhammer.oss-cn-hangzhou.aliyuncs.com/paifu/20240221/46248a38e201af7e0cdd11cc3da18ae6.pdf?Expires=2393982671&OSSAccessKeyId=LTAI5t5fwTBbu4WT1PJCaeCS&Signature=YoH3VNLplgbC7n2yQgWFugNYIbI%3D",target:"_blank",rel:"noreferrer",children:n.texts[0].value})}),(0,e.jsxs)("p",{children:[n.texts[1].value,(0,e.jsx)("br",{}),n.texts[2].value,(0,e.jsx)("br",{}),n.texts[3].value,(0,e.jsx)("br",{}),n.texts[4].value,(0,e.jsx)("br",{}),n.texts[5].value,(0,e.jsx)("br",{}),n.texts[6].value,(0,e.jsx)("br",{})]}),(0,e.jsxs)("h3",{id:"setimmediate",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#setimmediate",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"setImmediate()"]}),(0,e.jsxs)("p",{children:[n.texts[7].value,(0,e.jsx)("br",{}),n.texts[8].value]}),(0,e.jsxs)("h3",{id:"processnexttick",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#processnexttick",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"process.nextTick()"]}),(0,e.jsxs)("p",{children:[n.texts[9].value,(0,e.jsx)("br",{}),n.texts[10].value,(0,e.jsx)("br",{}),n.texts[11].value,(0,e.jsx)("br",{}),n.texts[12].value]}),(0,e.jsxs)("h3",{id:"queuemicrotask",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#queuemicrotask",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"queueMicrotask()"]}),(0,e.jsxs)("p",{children:[n.texts[13].value,(0,e.jsx)("br",{}),n.texts[14].value,(0,e.jsx)("br",{}),n.texts[15].value,(0,e.jsx)("br",{}),n.texts[16].value]}),(0,e.jsx)(i.Z,{lang:"js",children:n.texts[17].value})]})})})})}s.default=r},47906:function(a,s,t){t.r(s),t.d(s,{texts:function(){return o}});const o=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"1\u3001timers \u9636\u6BB5\uFF08\u6267\u884C setTimeout \u548C setInterval\uFF09 ",paraId:1,tocIndex:0},{value:`
2\u3001pending callbacks \u5185\u90E8\u4F7F\u7528 \u4E0D\u66B4\u9732\u5230\u5916\u90E8\u94A9\u5B50 `,paraId:1,tocIndex:0},{value:`
3\u3001idle prepare \u5185\u90E8\u4F7F\u7528 \u4E0D\u66B4\u9732\u5230\u5916\u90E8\u94A9\u5B50 `,paraId:1,tocIndex:0},{value:`
4\u3001poll i/o \u64CD\u4F5C `,paraId:1,tocIndex:0},{value:`
5\u3001check \u6267\u884C setImmediate `,paraId:1,tocIndex:0},{value:`
6\u3001close callbacks \u6267\u884C\u4E00\u4E9B\u5173\u95ED\u7684\u56DE\u8C03\u51FD\u6570 `,paraId:1,tocIndex:0},{value:`\u2022 setImmediate \u2F64\u4E8E\u5728\u5F53\u524D\u4E8B\u4EF6\u5FAA\u73AF\u8FED\u4EE3\u7684\u672B\u5C3E\u5B89\u6392\u2F00\u4E2A\u56DE\u8C03\u51FD\u6570\u6267\u2F8F\u3002\u5B83\u4F1A\u5728\u4E8B\u4EF6\u5FAA\u73AF\u7684
"check" \u9636\u6BB5\u6267\u2F8F\u3002`,paraId:2,tocIndex:1},{value:`
\u2022 \u5F53\u4F60\u60F3\u8981\u5728 I/O \u64CD\u4F5C\u5B8C\u6210\u540E\u5C3D\u5FEB\u6267\u2F8F\u56DE\u8C03\u65F6\uFF0C setImmediate \u662F\u2F00\u4E2A\u5F88\u597D\u7684\u9009\u62E9\u3002`,paraId:2,tocIndex:1},{value:'\u2022 process.nextTick \u2F64\u4E8E\u5C06\u56DE\u8C03\u51FD\u6570\u63A8\u8FDF\u5230\u5F53\u524D\u4E8B\u4EF6\u5FAA\u73AF\u8FED\u4EE3\u7684\u672B\u5C3E\uFF0C\u5373\u4E0B\u2F00\u4E2A "tick" \u9636\u6BB5\u3002',paraId:3,tocIndex:2},{value:`
\u5B83\u7684\u4F18\u5148\u7EA7\u2FBC\u4E8E\u5176\u4ED6\u5F02\u6B65\u64CD\u4F5C\uFF0C\u56E0\u6B64\u4F1A\u5728\u5176\u4ED6\u5F02\u6B65\u64CD\u4F5C\u4E4B\u524D\u6267\u2F8F\u3002`,paraId:3,tocIndex:2},{value:`
\u2022 \u8FD9\u4E2A\u51FD\u6570\u901A\u5E38\u2F64\u4E8E\u5728\u5F02\u6B65\u64CD\u4F5C\u4E4B\u540E\u2F74\u5373\u6267\u2F8F\u2F00\u4E9B\u64CD\u4F5C\uFF0C\u4F8B\u5982\u6267\u2F8F\u2F00\u4E9B\u6E05\u7406\u64CD\u4F5C\u6216\u66F4\u65B0\u72B6\u6001\u3002`,paraId:3,tocIndex:2},{value:`
\u2022 process.nextTick \u56DE\u8C03\u4F1A\u5728\u4E8B\u4EF6\u5FAA\u73AF\u4E2D\u7684\u4EFB\u4F55\u5F02\u6B65 I/O \u64CD\u4F5C\u4E4B\u524D\u6267\u2F8F\u3002`,paraId:3,tocIndex:2},{value:"\u2022 queueMicrotask \u2F64\u4E8E\u5C06\u2F00\u4E2A\u5FAE\u4EFB\u52A1\uFF08microtask\uFF09\u6DFB\u52A0\u5230\u5FAE\u4EFB\u52A1\u961F\u5217\u4E2D\uFF0C\u5728\u5F53\u524D\u4E8B\u4EF6\u5FAA\u73AF\u8FED\u4EE3",paraId:4,tocIndex:3},{value:`
\u7684\u672B\u5C3E\u6267\u2F8F\u3002\u5FAE\u4EFB\u52A1\u5728 I/O \u4E4B\u540E\u3001\u4E8B\u4EF6\u5FAA\u73AF\u9636\u6BB5\u4E4B\u524D\u6267\u2F8F\u3002`,paraId:4,tocIndex:3},{value:`
\u2022 \u5FAE\u4EFB\u52A1\u901A\u5E38\u2F64\u4E8E\u9700\u8981\u5C3D\u5FEB\u6267\u2F8F\u7684\u3001\u4E0E I/O \u2F46\u5173\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982 promise \u7684\u56DE\u8C03\u51FD\u6570\u3002`,paraId:4,tocIndex:3},{value:`
\u2022 queueMicrotask \u7684\u4F18\u5148\u7EA7\u4ECB\u4E8E process.nextTick \u548C setImmediate \u4E4B\u95F4\u3002`,paraId:4,tocIndex:3},{value:`process.nextTick(function () {
  console.log('1');
});
process.nextTick(function () {
  console.log('2');
  setImmediate(function () {
    console.log('3');
  });
  process.nextTick(function () {
    console.log('4');
  });
});

setImmediate(function () {
  console.log('5');
  process.nextTick(function () {
    console.log('6');
  });
  setImmediate(function () {
    console.log('7');
  });
});

setTimeout((e) => {
  console.log(8);
  new Promise((resolve, reject) => {
    console.log(8 + 'promise');
    resolve();
  }).then((e) => {
    console.log(8 + 'promise+then');
  });
}, 0);

setTimeout((e) => {
  console.log(9);
}, 0);

setImmediate(function () {
  console.log('10');
  process.nextTick(function () {
    console.log('11');
  });
  process.nextTick(function () {
    console.log('12');
  });
  setImmediate(function () {
    console.log('13');
  });
});

console.log('14');

new Promise((resolve, reject) => {
  console.log(15);
  resolve();
}).then((e) => {
  console.log(16);
});

// 14
// 15
// 1
// 2
// 4
// 16
// 8
// 8promise
// 8promise+then
// 9
// 5
// 6
// 10
// 11
// 12
// 3
// 7
// 13
`,paraId:5,tocIndex:3}]}}]);
