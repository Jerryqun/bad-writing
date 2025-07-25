"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8624],{51972:function(i,_,e){e.r(_);var u=e(72269),r=e(93359),c=e(61788),x=e(19977),h=e(91558),d=e(24268),v=e(96057),j=e(85939),l=e(53683),t=e(80936),s=e(67294),a=e(28304),n=e(85893);function o(){return(0,n.jsx)(l.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(t.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h3",{id:"\u4F5C\u7528\u57DF\u6982\u5FF5",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F5C\u7528\u57DF\u6982\u5FF5",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F5C\u7528\u57DF\u6982\u5FF5"]}),(0,n.jsx)("p",{children:a.texts[0].value}),(0,n.jsxs)("h3",{id:"\u9759\u6001\u4F5C\u7528\u57DF",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9759\u6001\u4F5C\u7528\u57DF",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u9759\u6001\u4F5C\u7528\u57DF"]}),(0,n.jsx)("p",{children:a.texts[1].value}),(0,n.jsx)(d.Z,{lang:"js",children:a.texts[2].value}),(0,n.jsxs)("h3",{id:"\u52A8\u6001\u4F5C\u7528\u57DF",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u52A8\u6001\u4F5C\u7528\u57DF",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u52A8\u6001\u4F5C\u7528\u57DF"]}),(0,n.jsx)("p",{children:a.texts[3].value}),(0,n.jsxs)("h3",{id:"\u4F5C\u7528\u57DF\u94FE",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F5C\u7528\u57DF\u94FE",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F5C\u7528\u57DF\u94FE"]}),(0,n.jsxs)("p",{children:[a.texts[4].value,(0,n.jsx)("br",{})]}),(0,n.jsx)("p",{children:a.texts[5].value}),(0,n.jsx)("p",{children:a.texts[6].value}),(0,n.jsx)("p",{children:a.texts[7].value}),(0,n.jsx)("p",{children:a.texts[8].value}),(0,n.jsx)("p",{children:a.texts[9].value}),(0,n.jsxs)("h3",{id:"\u81EA\u6267\u884C\u51FD\u6570",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u81EA\u6267\u884C\u51FD\u6570",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u81EA\u6267\u884C\u51FD\u6570"]}),(0,n.jsx)(d.Z,{lang:"js",children:a.texts[10].value}),(0,n.jsxs)("h3",{id:"\u53D8\u91CF\u63D0\u5347",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53D8\u91CF\u63D0\u5347",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u53D8\u91CF\u63D0\u5347"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:a.texts[11].value}),(0,n.jsx)("li",{children:a.texts[12].value}),(0,n.jsx)("li",{children:a.texts[13].value})]}),(0,n.jsx)(d.Z,{lang:"js",children:a.texts[14].value})]})})})})}_.default=o},28304:function(i,_,e){e.r(_),e.d(_,{texts:function(){return u}});const u=[{value:"\u5B9A\u4E49\u53D8\u91CF\u7684\u533A\u57DF\uFF0C\u4F5C\u7528\u57DF\u51B3\u5B9A\u4E86\u5982\u4F55\u67E5\u627E\u53D8\u91CF\uFF0C\u4E5F\u5C31\u662F\u53D8\u91CF\u7684\u8BBF\u95EE\u6743\u9650, \u5206\u4E3A\u9759\u6001\u4F5C\u7528\u57DF\u4E0E\u52A8\u6001\u4F5C\u7528\u57DF\u3002",paraId:0,tocIndex:0},{value:"js \u91C7\u7528\u7684\u662F\u8BCD\u6CD5\u4F5C\u7528\u57DF\u4E5F\u5C31\u662F\u9759\u6001\u4F5C\u7528\u57DF(\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u5728\u51FD\u6570\u5B9A\u4E49\u7684\u65F6\u5019\u5C31\u51B3\u5B9A)",paraId:1,tocIndex:1},{value:`// \u4F8B\u4E00
var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar(); // 1

// \u4F8B\u4E8C
var global = 'global';

function a() {
  var global = 'local';
  function b() {
    console.log(global);
  }
  return b();
}

a(); //local
`,paraId:2,tocIndex:1},{value:"\u51FD\u6570\u8C03\u7528\u65F6\u786E\u5B9A\uFF0C\u4E0A\u9762\u5217\u5B50\u5C06\u8FD4\u56DE 2\uFF0C bash \u662F\u52A8\u6001\u4F5C\u7528\u57DF",paraId:3,tocIndex:2},{value:`\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u53D8\u91CF\u5230\u521B\u5EFA\u8BE5\u53D8\u91CF\u7684\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u4E2D\u53D6\u503C\u3002\u4F46\u662F\u5982\u679C\u5728\u5F53\u524D\u4F5C\u7528\u57DF\u4E2D\u6CA1\u6709\u67E5\u5230\uFF0C
\u5C31\u4F1A\u5411\u4E0A\u7EA7\u4F5C\u7528\u57DF\u53BB\u67E5\uFF0C\u76F4\u5230\u67E5\u5230\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u8FD9\u4E48\u4E00\u4E2A\u67E5\u627E\u8FC7\u7A0B\u5F62\u6210\u7684\u94FE\u6761\u5C31\u53EB\u505A\u4F5C\u7528\u57DF\u94FE\u3002`,paraId:4,tocIndex:3},{value:"\u53D8\u91CF\u548C\u51FD\u6570\u7684\u58F0\u660E\uFF1A\u5982\u679C\u53D8\u91CF\u540D\u548C\u51FD\u6570\u540D\u58F0\u660E\u65F6\u76F8\u540C\uFF0C\u51FD\u6570\u4F18\u5148\u58F0\u660E",paraId:5,tocIndex:3},{value:"\u4F5C\u7528\u57DF\u94FE\uFF08Scope Chain\uFF09\u662F JavaScript \u4E2D\u7528\u4E8E\u67E5\u627E\u53D8\u91CF\u548C\u51FD\u6570\u7684\u4E00\u79CD\u673A\u5236\u3002\u6BCF\u4E2A JavaScript \u51FD\u6570\u90FD\u4F1A\u521B\u5EFA\u4E00\u4E2A\u4F5C\u7528\u57DF\u94FE\u3002",paraId:6,tocIndex:3},{value:"\u4F5C\u7528\u57DF\u94FE\u662F\u7531\u5F53\u524D\u6267\u884C\u73AF\u5883\uFF08Execution Context\uFF09\u4E2D\u7684\u53D8\u91CF\u5BF9\u8C61\uFF08Variable Object\uFF09\u4EE5\u53CA\u5176\u7236\u7EA7\u6267\u884C\u73AF\u5883\u7684\u53D8\u91CF\u5BF9\u8C61\u7EC4\u6210\u7684\u3002\u5F53\u4EE3\u7801\u5728\u4E00\u4E2A\u6267\u884C\u73AF\u5883\u4E2D\u6267\u884C\u65F6\uFF0C\u5982\u679C\u9700\u8981\u8BBF\u95EE\u4E00\u4E2A\u53D8\u91CF\u6216\u8005\u51FD\u6570\uFF0CJavaScript \u5F15\u64CE\u4F1A\u9996\u5148\u5728\u5F53\u524D\u6267\u884C\u73AF\u5883\u7684\u53D8\u91CF\u5BF9\u8C61\u4E2D\u67E5\u627E\uFF0C\u5982\u679C\u627E\u4E0D\u5230\uFF0C\u5B83\u4F1A\u6CBF\u7740\u4F5C\u7528\u57DF\u94FE\u5411\u4E0A\u4E00\u7EA7\u7684\u6267\u884C\u73AF\u5883\u4E2D\u67E5\u627E\uFF0C\u76F4\u5230\u627E\u5230\u5BF9\u5E94\u7684\u53D8\u91CF\u6216\u8005\u51FD\u6570\uFF0C\u6216\u8005\u8FBE\u5230\u5168\u5C40\u6267\u884C\u73AF\u5883\u4E3A\u6B62\u3002",paraId:7,tocIndex:3},{value:"\u4F5C\u7528\u57DF\u94FE\u7684\u5F62\u6210\u662F\u7531\u51FD\u6570\u5B9A\u4E49\u65F6\u7684\u4F4D\u7F6E\u6765\u51B3\u5B9A\u7684\uFF0C\u800C\u4E0D\u662F\u51FD\u6570\u8C03\u7528\u65F6\u7684\u4F4D\u7F6E\u3002\u8FD9\u610F\u5473\u7740\u51FD\u6570\u7684\u4F5C\u7528\u57DF\u94FE\u662F\u5728\u51FD\u6570\u5B9A\u4E49\u65F6\u786E\u5B9A\u7684\uFF0C\u800C\u4E0D\u662F\u5728\u51FD\u6570\u8C03\u7528\u65F6\u786E\u5B9A\u7684\u3002",paraId:8,tocIndex:3},{value:"\u4F5C\u7528\u57DF\u94FE\u7684\u91CD\u8981\u6027\u5728\u4E8E\u5B83\u51B3\u5B9A\u4E86\u53D8\u91CF\u548C\u51FD\u6570\u7684\u8BBF\u95EE\u6743\u9650\u3002\u4E00\u4E2A\u53D8\u91CF\u6216\u8005\u51FD\u6570\u80FD\u5426\u5728\u5F53\u524D\u6267\u884C\u73AF\u5883\u4E2D\u88AB\u8BBF\u95EE\u5230\uFF0C\u53D6\u51B3\u4E8E\u5B83\u662F\u5426\u5728\u5F53\u524D\u6267\u884C\u73AF\u5883\u7684\u4F5C\u7528\u57DF\u94FE\u4E0A\u3002",paraId:9,tocIndex:3},{value:`// \u65B9\u5F0F\u4E00 \u533F\u540D\u51FD\u6570
(() => {
  console.log('\u6267\u884C\u4E86');
})();

(function () {
  console.log('\u6267\u884C\u4E86');
})();

// \u65B9\u5F0F\u4E8C \u975E\u533F\u540D\u51FD\u6570
(function fun() {
  const a = 1;
  console.log('\u6267\u884C\u4E86');
})();

/**
 * \u7279\u70B9  \u5B57\u6267\u884C\u51FD\u6570\u91CC\u9762\u7684\u53D8\u91CF\u7684\u4F5C\u7528\u57DF\u662F\u72EC\u7ACB\u7684
 * \u4E5F\u5C31\u662F\u8BF4 \u65B9\u5F0F2\u4E2D\u5916\u90E8\u65E0\u6CD5\u8BBF\u95EE\u5230fun\u548Ca\u3001\u4F46\u662F\u6267\u884C\u51FD\u6570\u5185\u90E8\u53EF\u4EE5\u653E\u5230\u5230\u5916\u90E8\u53D8\u91CF
 */

var a = 1;
(function a() {
  a = 2;
  console.log(a); //fn a
})();
console.log(a); // 1

/**
 \u4F1A\u6253\u5370\u51FA\u51FD\u6570a\u7684\u5185\u5BB9 \u548C 1 
 \u8FD9\u662F\u4E2A\u51FD\u6570\u8868\u8FBE\u5F0F\uFF0C\u8FD9\u4E2A a \u5C31\u662F\u51FD\u6570\u540D\u79F0\uFF0C\u5B83\u7684\u7279\u70B9\u662F\u4F5C\u4E3A\u51FD\u6570\u4F53\uFF08\u4F5C\u7528\u57DF\u5185\uFF09\u7684\u672C\u5730\u53D8\u91CF\uFF0C\u4E0D\u80FD\u88AB\u4FEE\u6539\uFF0C\u4E5F\u4E0D\u80FD\u88AB\u5916\u90E8\u8BBF\u95EE\u3002
 */
`,paraId:10,tocIndex:4},{value:"\u53D8\u91CF\u63D0\u5347\u8FC7\u7A0B\u4E2D \u53EA\u4F1A\u63D0\u5347\u58F0\u660E \u4E0D\u4F1A\u63D0\u5347\u53D8\u91CF\u7684\u8D4B\u503C",paraId:11,tocIndex:5},{value:"\u51FD\u6570\u63D0\u5347\u65F6\u4F1A\u63D0\u5347\u6574\u4E2A\u51FD\u6570\u4F53",paraId:11,tocIndex:5},{value:"\u51FD\u6570\u7684\u63D0\u5347\u4F18\u5148\u7EA7\u5927\u4E8E\u53D8\u91CF",paraId:11,tocIndex:5},{value:`console.log('a', a); // function a
function a() {}

console.log('b', b); //  b is not a function
var b = function name() {};
`,paraId:12,tocIndex:5}]}}]);
