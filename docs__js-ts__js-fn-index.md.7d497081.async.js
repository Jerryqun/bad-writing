"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[242],{31288:function(u,e,n){n.r(e);var d=n(72269),l=n(93359),m=n(61788),c=n(19977),h=n(91558),t=n(24268),E=n(96057),x=n(85939),r=n(53683),a=n(80936),s=n(67294),i=n(14177),_=n(85893);function o(){return(0,_.jsx)(r.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(a.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u504F\u51FD\u6570",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u504F\u51FD\u6570",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u504F\u51FD\u6570"]}),(0,_.jsx)(t.Z,{lang:"js",children:i.texts[0].value}),(0,_.jsxs)("h2",{id:"momeize-\u51FD\u6570-\u7EAF\u51FD\u6570",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#momeize-\u51FD\u6570-\u7EAF\u51FD\u6570",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"momeize \u51FD\u6570 \uFF08\u7EAF\u51FD\u6570\uFF09"]}),(0,_.jsx)(t.Z,{lang:"js",children:i.texts[1].value}),(0,_.jsx)("p",{children:i.texts[2].value})]})})})})}e.default=o},14177:function(u,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:`/**
 \u67EF\u91CC\u5316\u8BF4\u7684\u662F\u4E00\u4E2A n \u5143\u51FD\u6570\u53D8\u6210 n \u4E2A\u4E00\u5143\u51FD\u6570\u3002
 \u504F\u51FD\u6570\u8BF4\u7684\u662F\u4E00\u4E2A n \u5143\u51FD\u6570\u53D8\u6210\u4E00\u4E2A m(m < n\uFF09 \u5143\u51FD\u6570\u3002
 */

// \u5B9A\u4E49\u4E00\u4E2A\u5305\u88C5\u51FD\u6570\uFF0C\u4E13\u95E8\u7528\u6765\u5904\u7406\u504F\u51FD\u6570\u903B\u8F91
function wrapFunc(func, fixedValue) {
  // \u5305\u88C5\u51FD\u6570\u7684\u76EE\u6807\u8F93\u51FA\u662F\u4E00\u4E2A\u65B0\u7684\u51FD\u6570
  function wrappedFunc(input) {
    // \u8FD9\u4E2A\u51FD\u6570\u4F1A\u56FA\u5B9A fixedValue\uFF0C\u7136\u540E\u628A input \u4F5C\u4E3A\u52A8\u6001\u53C2\u6570\u8BFB\u53D6
    const newFunc = func(input, fixedValue);
    return newFunc;
  }
  return wrappedFunc;
}

function multiply(a, b) {
  return a * b;
}

const multiply3 = wrapFunc(multiply, 3);

// \u8F93\u51FA6
multiply3(2);
`,paraId:0,tocIndex:0},{value:`function momeize(fn) {
  const cache = {};
  return function () {
    const arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || fn.apply(fn, arguments);
    return cache[arg_str];
  };
}
`,paraId:1,tocIndex:1},{value:"\u7EAF\u51FD\u6570\u4E0D\u9700\u8981\u8BBF\u95EE\u5171\u4EAB\u5185\u5B58\uFF0C \u6240\u4EE5\u5728\u5E76\u884C\u73AF\u5883\u4E0B\u53EF\u4EE5\u4EFB\u610F\u8FD0\u884C\u7EAF\u51FD\u6570\uFF08web worker\uFF09",paraId:2,tocIndex:1}]}}]);
