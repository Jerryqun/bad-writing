"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7791],{78320:function(r,t,n){n.r(t);var d=n(72269),o=n(93359),x=n(61788),m=n(19977),E=n(91558),a=n(24268),v=n(96057),h=n(85939),i=n(53683),s=n(80936),u=n(67294),e=n(8721),_=n(85893);function l(){return(0,_.jsx)(i.dY,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(s.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u63D2\u5165\u6392\u5E8F",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u63D2\u5165\u6392\u5E8F",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u63D2\u5165\u6392\u5E8F"]}),(0,_.jsxs)("p",{children:[e.texts[0].value,(0,_.jsx)("br",{}),e.texts[1].value,(0,_.jsx)("br",{}),e.texts[2].value,(0,_.jsx)("br",{}),e.texts[3].value,(0,_.jsx)("br",{}),e.texts[4].value,(0,_.jsx)("br",{}),e.texts[5].value]}),(0,_.jsxs)("p",{children:[e.texts[6].value,(0,_.jsx)("br",{}),e.texts[7].value,(0,_.jsx)("br",{}),e.texts[8].value]}),(0,_.jsx)(a.Z,{lang:"js",children:e.texts[9].value})]})})})})}t.default=l},8721:function(r,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u4ECE\u7B2C\u4E00\u4E2A\u5143\u7D20\u5F00\u59CB\uFF0C\u8BE5\u5143\u7D20\u53EF\u4EE5\u8BA4\u4E3A\u5DF2\u7ECF\u88AB\u6392\u5E8F\uFF1B",paraId:0,tocIndex:0},{value:`
\u53D6\u51FA\u4E0B\u4E00\u4E2A\u5143\u7D20\uFF0C\u5728\u5DF2\u7ECF\u6392\u5E8F\u7684\u5143\u7D20\u5E8F\u5217\u4E2D\u4ECE\u540E\u5411\u524D\u626B\u63CF\uFF1B`,paraId:0,tocIndex:0},{value:`
\u5982\u679C\u8BE5\u5143\u7D20\uFF08\u5DF2\u6392\u5E8F\uFF09\u5927\u4E8E\u65B0\u5143\u7D20\uFF0C\u5C06\u8BE5\u5143\u7D20\u79FB\u5230\u4E0B\u4E00\u4F4D\u7F6E\uFF1B`,paraId:0,tocIndex:0},{value:`
\u91CD\u590D\u6B65\u9AA4 3\uFF0C\u76F4\u5230\u627E\u5230\u5DF2\u6392\u5E8F\u7684\u5143\u7D20\u5C0F\u4E8E\u6216\u8005\u7B49\u4E8E\u65B0\u5143\u7D20\u7684\u4F4D\u7F6E\uFF1B`,paraId:0,tocIndex:0},{value:`
\u5C06\u65B0\u5143\u7D20\u63D2\u5165\u5230\u8BE5\u4F4D\u7F6E\u540E\uFF1B`,paraId:0,tocIndex:0},{value:`
\u91CD\u590D\u6B65\u9AA4 2 ~ 5\u3002`,paraId:0,tocIndex:0},{value:"\u6700\u597D\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A\u5B83\u5BF9\u5E94\u7684\u6570\u7EC4\u672C\u8EAB\u5C31\u6709\u5E8F\u8FD9\u79CD\u60C5\u51B5\u3002\u6B64\u65F6\u5185\u5C42\u5FAA\u73AF\u53EA\u8D70\u4E00\u6B21\uFF0C\u6574\u4F53\u590D\u6742\u5EA6\u53D6\u51B3\u4E8E\u5916\u5C42\u5FAA\u73AF\uFF0C\u65F6\u95F4\u590D\u6742\u5EA6\u5C31\u662F\u4E00\u5C42\u5FAA\u73AF\u5BF9\u5E94\u7684 O(n)\u3002",paraId:1,tocIndex:0},{value:`
\u6700\u574F\u65F6\u95F4\u590D\u6742\u5EA6\uFF1A\u5B83\u5BF9\u5E94\u7684\u662F\u6570\u7EC4\u5B8C\u5168\u9006\u5E8F\u8FD9\u79CD\u60C5\u51B5\u3002\u6B64\u65F6\u5185\u5C42\u5FAA\u73AF\u6BCF\u6B21\u90FD\u8981\u79FB\u52A8\u6709\u5E8F\u5E8F\u5217\u91CC\u7684\u6240\u6709\u5143\u7D20\uFF0C\u56E0\u6B64\u65F6\u95F4\u590D\u6742\u5EA6\u5BF9\u5E94\u7684\u5C31\u662F\u4E24\u5C42\u5FAA\u73AF\u7684 O(n^2)`,paraId:1,tocIndex:0},{value:`
\u5E73\u5747\u65F6\u95F4\u590D\u6742\u5EA6\uFF1AO(n^2)`,paraId:1,tocIndex:0},{value:`var arr = [
  10, 44, 82, 50, 70, 74, 29, 1, 40, 36, 58, 21, 56, 44, 43, 61, 222, 48,
];

const insertSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let n = i;
    while (arr[n] > arr[n + 1] && n >= 0) {
      [arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
      n--;
    }
  }
  return arr;
};

const test = insertSort(arr);
console.log('test', test);
`,paraId:2,tocIndex:0}]}}]);
