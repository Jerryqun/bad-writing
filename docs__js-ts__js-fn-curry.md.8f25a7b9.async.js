"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[118],{16061:function(a,u,e){e.r(u);var r=e(72269),o=e(93359),c=e(61788),x=e(19977),h=e(91558),d=e(24268),m=e(96057),E=e(85939),i=e(53683),t=e(80936),s=e(67294),_=e(57342),n=e(85893);function l(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(t.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u51FD\u6570\u67EF\u91CC\u5316",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u51FD\u6570\u67EF\u91CC\u5316",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u51FD\u6570\u67EF\u91CC\u5316"]}),(0,n.jsx)("p",{children:_.texts[0].value}),(0,n.jsx)(d.Z,{lang:"js",children:_.texts[1].value}),(0,n.jsxs)("h2",{id:"\u7EC4\u5408\u4E0E\u7BA1\u9053",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7EC4\u5408\u4E0E\u7BA1\u9053",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u7EC4\u5408\u4E0E\u7BA1\u9053"]}),(0,n.jsx)(d.Z,{lang:"js",children:_.texts[2].value}),(0,n.jsxs)("h2",{id:"\u9AD8\u9636\u51FD\u6570",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9AD8\u9636\u51FD\u6570",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u9AD8\u9636\u51FD\u6570"]}),(0,n.jsx)("p",{children:_.texts[3].value}),(0,n.jsxs)("h2",{id:"\u5177\u540D\u51FD\u6570\u8868\u8FBE\u5F0F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5177\u540D\u51FD\u6570\u8868\u8FBE\u5F0F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5177\u540D\u51FD\u6570\u8868\u8FBE\u5F0F"]}),(0,n.jsx)("p",{children:_.texts[4].value}),(0,n.jsx)("p",{children:(0,n.jsx)("code",{children:_.texts[5].value})}),(0,n.jsx)(d.Z,{lang:"js",children:_.texts[6].value}),(0,n.jsxs)("h2",{id:"\u533F\u540D\u51FD\u6570",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u533F\u540D\u51FD\u6570",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u533F\u540D\u51FD\u6570"]}),(0,n.jsx)(d.Z,{lang:"js",children:_.texts[7].value})]})})})})}u.default=l},57342:function(a,u,e){e.r(u),e.d(u,{texts:function(){return r}});const r=[{value:`\u51FD\u6570\u67EF\u91CC\u5316\u662F\u6307\u8FD9\u6837\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u63A5\u6536\u51FD\u6570 A\uFF0C\u5E76\u4E14\u80FD\u8FD4\u56DE\u4E00\u4E2A\u65B0\u7684\u51FD\u6570\uFF0C\u8FD9\u4E2A\u65B0\u7684\u51FD\u6570\u80FD\u591F\u5904\u7406\u51FD\u6570 A \u7684\u5269\u4F59\u53C2\u6570
\u518D\u5177\u4F53\u4E00\u70B9\uFF0C\u5C31\u662F\u8BF4\u67EF\u91CC\u5316\u662F\u4E00\u4E2A\u628A fn(a, b, c)\u8F6C\u5316\u4E3A fn(a)(b)(c)\u7684\u8FC7\u7A0B\u3002`,paraId:0,tocIndex:0},{value:`function curry(func, arity = func.length) {
  // \u5B9A\u4E49\u4E00\u4E2A\u9012\u5F52\u5F0F generateCurried
  function generateCurried(prevArgs) {
    // generateCurried \u51FD\u6570\u5FC5\u5B9A\u8FD4\u56DE\u4E00\u5C42\u5D4C\u5957
    return function curried(nextArg) {
      // \u7EDF\u8BA1\u76EE\u524D\u201C\u5DF2\u8BB0\u5FC6\u201D+\u201C\u672A\u8BB0\u5FC6\u201D\u7684\u53C2\u6570
      const args = [...prevArgs, nextArg];
      // \u82E5 \u201C\u5DF2\u8BB0\u5FC6\u201D+\u201C\u672A\u8BB0\u5FC6\u201D\u7684\u53C2\u6570\u6570\u91CF >= \u56DE\u8C03\u51FD\u6570\u5143\u6570\uFF0C\u5219\u8BA4\u4E3A\u5DF2\u7ECF\u8BB0\u5FC6\u4E86\u6240\u6709\u7684\u53C2\u6570
      if (args.length >= arity) {
        // \u89E6\u78B0\u9012\u5F52\u8FB9\u754C\uFF0C\u4F20\u5165\u6240\u6709\u53C2\u6570\uFF0C\u8C03\u7528\u56DE\u8C03\u51FD\u6570
        return func(...args);
      } else {
        // \u672A\u89E6\u78B0\u9012\u5F52\u8FB9\u754C\uFF0C\u5219\u9012\u5F52\u8C03\u7528 generateCurried \u81EA\u8EAB\uFF0C\u521B\u9020\u65B0\u4E00\u5C42\u7684\u5D4C\u5957
        return generateCurried(args);
      }
    };
  }
  // \u8C03\u7528 generateCurried\uFF0C\u8D77\u59CB\u4F20\u53C2\u4E3A\u7A7A\u6570\u7EC4\uFF0C\u8868\u793A\u201C\u76EE\u524D\u8FD8\u6CA1\u6709\u8BB0\u4F4F\u4EFB\u4F55\u53C2\u6570\u201D
  return generateCurried([]);
}
`,paraId:1,tocIndex:0},{value:`// \u7EC4\u5408
const compose =
  (...fns) =>
  (val) =>
    fns.reverse().reduce((acc, fn) => fn(acc), val);

// \u7BA1\u9053
const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((acc, fn) => fn(acc), val);
`,paraId:2,tocIndex:1},{value:"\u9AD8\u9636\u51FD\u6570\uFF0C\u5C31\u662F\u4EE5\u51FD\u6570\u4F5C\u4E3A\u8F93\u5165\u6216\u8005\u8F93\u51FA\u7684\u51FD\u6570\u88AB\u79F0\u4E3A\u9AD8\u9636\u51FD\u6570",paraId:3,tocIndex:2},{value:"\u5177\u540D\u51FD\u6570\u8868\u8FBE\u5F0F\u662F\u51FD\u6570\u8868\u8FBE\u5F0F\u7684\u4E00\u79CD\u5F62\u5F0F\uFF0C\u5176\u4E2D\u51FD\u6570\u6709\u4E00\u4E2A\u540D\u5B57\u3002",paraId:4,tocIndex:3},{value:"\u51FD\u6570\u6709\u4E00\u4E2A\u540D\u5B57\uFF08namedFunction\uFF09\uFF0C\u8BE5\u540D\u79F0\u4EC5\u5728\u51FD\u6570\u5185\u90E8\u53EF\u7528\uFF0C\u7528\u4E8E\u9012\u5F52\u8C03\u7528\u6216\u8C03\u8BD5",paraId:5,tocIndex:3},{value:`const myFunction = function namedFunction() {
  console.log('Named Function Expression');
};
`,paraId:6,tocIndex:3},{value:`var func = () => {
  // \u51FD\u6570\u7684\u4EE3\u7801\u5757
};

var sum = function (a, b) {
  return a + b;
};
`,paraId:7,tocIndex:4}]}}]);
