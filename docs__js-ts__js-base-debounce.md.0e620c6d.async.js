"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3603],{83435:function(r,_,e){e.r(_);var i=e(72269),o=e(93359),m=e(61788),h=e(19977),x=e(91558),d=e(24268),c=e(96057),E=e(85939),a=e(53683),s=e(80936),u=e(67294),t=e(11415),n=e(85893);function l(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(s.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u8282\u6D41\u548C\u9632\u6296",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8282\u6D41\u548C\u9632\u6296",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u8282\u6D41\u548C\u9632\u6296"]}),(0,n.jsxs)("h3",{id:"\u9632\u6296-debounce",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9632\u6296-debounce",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u9632\u6296 debounce"]}),(0,n.jsxs)("p",{children:[t.texts[0].value,(0,n.jsx)("br",{}),t.texts[1].value,(0,n.jsx)("br",{}),t.texts[2].value,(0,n.jsx)("br",{})]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[3].value}),(0,n.jsxs)("h3",{id:"\u8282\u6D41-throttle",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8282\u6D41-throttle",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u8282\u6D41 throttle"]}),(0,n.jsxs)("p",{children:[t.texts[4].value,(0,n.jsx)("br",{}),t.texts[5].value,(0,n.jsx)("br",{}),t.texts[6].value,(0,n.jsx)("br",{})]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[7].value})]})})})})}_.default=l},11415:function(r,_,e){e.r(_),e.d(_,{texts:function(){return i}});const i=[{value:"\u5728\u4E8B\u4EF6\u88AB\u89E6\u53D1 n \u79D2\u540E\u518D\u6267\u884C\u56DE\u8C03\uFF0C\u5982\u679C\u5728\u8FD9 n \u79D2\u5185\u53C8\u88AB\u89E6\u53D1\uFF0C\u5219\u91CD\u65B0\u8BA1\u65F6\u3002",paraId:0,tocIndex:1},{value:`
search \u641C\u7D22\u8054\u60F3\uFF0C\u7528\u6237\u5728\u4E0D\u65AD\u8F93\u5165\u503C\u65F6\uFF0C\u7528\u9632\u6296\u6765\u8282\u7EA6\u8BF7\u6C42\u8D44\u6E90\u3002`,paraId:0,tocIndex:1},{value:`
window \u89E6\u53D1 resize \u7684\u65F6\u5019\uFF0C\u4E0D\u65AD\u7684\u8C03\u6574\u6D4F\u89C8\u5668\u7A97\u53E3\u5927\u5C0F\u4F1A\u4E0D\u65AD\u7684\u89E6\u53D1\u8FD9\u4E2A\u4E8B\u4EF6\uFF0C\u7528\u9632\u6296\u6765\u8BA9\u5176\u53EA\u89E6\u53D1\u4E00\u6B21\u3002`,paraId:0,tocIndex:1},{value:`const debounce = (fn, timer) => {
  return function (...args) {
    let that = this;
    clearTimeout(fn.id);
    fn.id = setTimeout(() => {
      fn.apply(that, args);
    }, timer);
  };
};
`,paraId:1,tocIndex:1},{value:"\u89C4\u5B9A\u5728\u4E00\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\uFF0C\u53EA\u80FD\u89E6\u53D1\u4E00\u6B21\u51FD\u6570\u3002\u5982\u679C\u8FD9\u4E2A\u5355\u4F4D\u65F6\u95F4\u5185\u89E6\u53D1\u591A\u6B21\u51FD\u6570\uFF0C\u53EA\u6709\u4E00\u6B21\u751F\u6548\u3002",paraId:2,tocIndex:2},{value:`
\u9F20\u6807\u4E0D\u65AD\u70B9\u51FB\u89E6\u53D1\uFF0Cmousedown(\u5355\u4F4D\u65F6\u95F4\u5185\u53EA\u89E6\u53D1\u4E00\u6B21)\u3002`,paraId:2,tocIndex:2},{value:`
\u76D1\u542C\u6EDA\u52A8\u4E8B\u4EF6\uFF0C\u6BD4\u5982\u662F\u5426\u6ED1\u5230\u5E95\u90E8\u81EA\u52A8\u52A0\u8F7D\u66F4\u591A\uFF0C\u7528 throttle \u6765\u5224\u65AD\u3002`,paraId:2,tocIndex:2},{value:`// \u7B2C\u4E00\u6B21\u4E8B\u4EF6\u80AF\u5B9A\u89E6\u53D1\uFF0C\u6700\u540E\u4E00\u6B21\u4E0D\u4F1A\u89E6\u53D1
const throttle = (fn, timer) => {
  let pre = 0;
  return function (...args) {
    if (Date.now() - pre > timer) {
      fn.apply(this, args);
      pre = Date.now();
    }
  };
};

// \u7B2C\u4E00\u6B21\u4E8B\u4EF6\u4E0D\u4F1A\u89E6\u53D1\uFF0C\u6700\u540E\u4E00\u6B21\u4E00\u5B9A\u89E6\u53D1
const throttle = (fn, timer) => {
  let t = null;
  return function (...args) {
    if (!t) {
      t = setTimeout(() => {
        fn.apply(this, args);
        t = null;
      }, timer);
    }
  };
};

// \u7B2C\u4E00\u6B21\u4E8B\u4EF6\u548C\u6700\u540E\u4E00\u6B21\u4E8B\u4EF6\u90FD\u89E6\u53D1
const throttle = (fn, timer) => {
  let pre = 0,
    t = null;
  return function (...args) {
    if (Date.now() - pre > timer) {
      clearTimeout(t);
      t = null;
      pre = Date.now();
      fn.apply(this, args);
    } else if (!t) {
      t = setTimeout(() => {
        fn.apply(this, args);
      }, timer);
    }
  };
};
`,paraId:3,tocIndex:2}]}}]);
