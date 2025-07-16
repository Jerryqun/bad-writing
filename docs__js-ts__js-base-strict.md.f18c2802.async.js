"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8594],{647:function(i,_,e){e.r(_);var a=e(72269),r=e(93359),c=e(61788),x=e(19977),h=e(91558),d=e(24268),g=e(96057),m=e(85939),s=e(53683),u=e(80936),l=e(67294),t=e(90941),n=e(85893);function o(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(u.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u4E25\u683C\u6A21\u5F0F\u548C\u975E\u4E25\u683C\u6A21\u5F0F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E25\u683C\u6A21\u5F0F\u548C\u975E\u4E25\u683C\u6A21\u5F0F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4E25\u683C\u6A21\u5F0F\u548C\u975E\u4E25\u683C\u6A21\u5F0F"]}),(0,n.jsxs)("p",{children:[t.texts[0].value,(0,n.jsx)("br",{}),t.texts[1].value,(0,n.jsx)("br",{}),t.texts[2].value,(0,n.jsx)("br",{})]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[3].value}),(0,n.jsxs)("h2",{id:"\u4E25\u683C\u6A21\u5F0F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E25\u683C\u6A21\u5F0F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4E25\u683C\u6A21\u5F0F"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:t.texts[4].value}),(0,n.jsx)("li",{children:t.texts[5].value})]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[6].value}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:t.texts[7].value})}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[8].value}),(0,n.jsx)("ul",{children:(0,n.jsx)("li",{children:t.texts[9].value})}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[10].value}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:(0,n.jsx)("p",{children:t.texts[11].value})}),(0,n.jsx)("li",{children:(0,n.jsx)("p",{children:t.texts[12].value})})]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[13].value})]})})})})}_.default=o},90941:function(i,_,e){e.r(_),e.d(_,{texts:function(){return a}});const a=[{value:"1\u3001export import \u4E2D\u9ED8\u8BA4\u4E3A\u4E25\u683C\u6A21\u5F0F",paraId:0,tocIndex:0},{value:`
2\u3001\u8C37\u6B4C\u63A7\u5236\u53F0\u4E3A\u975E\u4E25\u683C\u6A21\u5F0F`,paraId:0,tocIndex:0},{value:`
3\u3001\u4E25\u683C\u6A21\u5F0F\u7533\u660E 'use strict'`,paraId:0,tocIndex:0},{value:`/**
 * \u4F7F\u7528 "use strict"\uFF0C\u4F60\u53EF\u4EE5\u786E\u4FDD\u4E0D\u4F1A\u610F\u5916\u5730\u58F0\u660E\u5168\u5C40\u53D8\u91CF\u3002\u6211\u4EEC\u4ECE\u6765\u6CA1\u6709\u58F0\u660E\u53D8\u91CF age\uFF0C\u56E0\u4E3A\u6211\u4EEC\u4F7F\u7528 "use strict"\uFF0C\u5B83\u5C06\u629B\u51FA\u4E00\u4E2A\u5F15\u7528\u9519\u8BEF\u3002
 * \u5982\u679C\u6211\u4EEC\u4E0D\u4F7F\u7528 "use strict"\uFF0C\u5B83\u5C31\u4F1A\u5DE5\u4F5C\uFF0C\u56E0\u4E3A\u5C5E\u6027 age \u4F1A\u88AB\u6DFB\u52A0\u5230\u5168\u5C40\u5BF9\u8C61\u4E2D\u4E86\u3002
 */

function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge(); // ReferenceError

function getAge() {
  age = 21;
  console.log(age);
}

getAge(); // 21
window.age; // 21
`,paraId:1,tocIndex:0},{value:"\u5168\u5C40\u53D8\u91CF\u5FC5\u987B\u5148\u58F0\u660E\u518D\u4F7F\u7528",paraId:2,tocIndex:1},{value:"\u7981\u6B62\u4F7F\u7528 with",paraId:2,tocIndex:1},{value:`// \u975E\u4E25\u683C\u6A21\u5F0F
const obj = { a: 1, b: 2 };
with (obj) {
  console.log(a, b); // 1 2
}

// \u4E25\u683C\u6A21\u5F0F
('use strict');
const obj = { a: 1, b: 2 };
with (obj) {
  console.log(a, b); // Strict mode code may not include a with statement
}
`,paraId:3,tocIndex:1},{value:"\u521B\u5EFA eval \u4F5C\u7528\u57DF",paraId:4,tocIndex:1},{value:`'use strict';
var a = 10;
eval("var a =20;console.log('in eval',a)");
console.log('a', a);

// in eval 20
// 10
`,paraId:5,tocIndex:1},{value:"\u7981\u6B62 this \u6307\u5411 window",paraId:6,tocIndex:1},{value:`'use strict';
function a() {
  console.log('this', this); // undefined
}
a();
`,paraId:7,tocIndex:1},{value:"\u51FD\u6570\u53C2\u6570\u4E0D\u80FD\u91CD\u590D",paraId:8,tocIndex:1},{value:"\u53EA\u8981\u51FD\u6570\u53C2\u6570\u4F7F\u7528\u4E86\u9ED8\u8BA4\u503C\u3001\u89E3\u6784\u8D4B\u503C\u3001\u6216\u8005\u6269\u5C55\u8FD0\u7B97\u7B26\uFF0C\u90A3\u4E48\u51FD\u6570\u5185\u90E8\u5C31\u4E0D\u80FD\u663E\u5F0F\u8BBE\u5B9A\u4E3A\u4E25\u683C\u6A21\u5F0F\uFF0C\u5426\u5219\u4F1A\u62A5\u9519",paraId:9,tocIndex:1},{value:`// \u62A5\u9519
function doSomething(a, b = a) {
  'use strict';
  // code
}

// \u62A5\u9519
const doSomething = function ({a, b}) {
  'use strict';
  // code
};

// \u62A5\u9519
const doSomething = (...a) => {
  'use strict';
  // code
};

const obj = {
  // \u62A5\u9519
  doSomething({a, b}) {
    'use strict';
    // code
  }
};
`,paraId:10,tocIndex:1}]}}]);
