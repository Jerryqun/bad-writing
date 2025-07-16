"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[98],{50451:function(o,e,_){_.r(e);var d=_(72269),l=_(93359),m=_(61788),c=_(19977),h=_(91558),a=_(24268),E=_(96057),x=_(85939),i=_(53683),r=_(80936),s=_(67294),t=_(36141),n=_(85893);function u(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(r.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"forceupdate",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#forceupdate",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"forceUpdate"]}),(0,n.jsx)("p",{children:t.texts[0].value}),(0,n.jsx)("p",{children:t.texts[1].value}),(0,n.jsx)(a.Z,{lang:"js",children:t.texts[2].value}),(0,n.jsx)("p",{children:t.texts[3].value}),(0,n.jsx)(a.Z,{lang:"js",children:t.texts[4].value})]})})})})}e.default=u},36141:function(o,e,_){_.r(e),_.d(e,{texts:function(){return d}});const d=[{value:"\u5728 React \u4E2D\uFF0CforceUpdate \u662F\u4E00\u4E2A\u7EC4\u4EF6\u5B9E\u4F8B\u4E0A\u7684\u65B9\u6CD5\uFF0C\u5B83\u4F1A\u4F7F\u7EC4\u4EF6\u8DF3\u8FC7 shouldComponentUpdate \u7684\u68C0\u67E5\uFF0C\u5F3A\u5236\u8BA9\u7EC4\u4EF6\u8FDB\u884C\u91CD\u65B0\u6E32\u67D3\u3002\u901A\u5E38\u6765\u8BF4\uFF0CReact \u7684\u6570\u636E\u6D41\u662F\u5355\u5411\u548C\u58F0\u660E\u5F0F\u7684\uFF0C\u56E0\u6B64\u4F60\u5E94\u8BE5\u901A\u8FC7\u6539\u53D8\u7EC4\u4EF6\u7684 state \u6216 props \u6765\u89E6\u53D1\u91CD\u65B0\u6E32\u67D3\uFF0C\u800C\u907F\u514D\u4F7F\u7528 forceUpdate\uFF0C\u56E0\u4E3A\u5B83\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E0D\u53EF\u9884\u6D4B\u7684\u884C\u4E3A\u548C\u6027\u80FD\u95EE\u9898\u3002",paraId:0,tocIndex:0},{value:"\u7136\u800C\uFF0C\u5728\u4E00\u4E9B\u6781\u5C11\u6570\u7684\u60C5\u51B5\u4E0B\uFF0C\u5982\u679C\u4F60\u7684\u7EC4\u4EF6\u4F9D\u8D56\u4E8E\u975E React \u7684\u72B6\u6001\u6216\u8005\u4F60\u9700\u8981\u4ECE\u67D0\u4E9B\u56DE\u8C03\u4E2D\u89E6\u53D1\u91CD\u65B0\u6E32\u67D3\u65F6\uFF0C\u53EF\u80FD\u4F1A\u7528\u5230 forceUpdate\u3002\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4F8B\u5B50\uFF1A",paraId:1,tocIndex:0},{value:`class MyComponent extends React.Component {
  // ...

  someMethod() {
    // \u5F53\u4F60\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\u9700\u8981\u5F3A\u5236\u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u65F6\u8C03\u7528
    this.forceUpdate();
  }

  render() {
    // ...
  }
}
`,paraId:2,tocIndex:0},{value:"\u5728\u51FD\u6570\u5F0F\u7EC4\u4EF6\u4E2D\uFF0C\u6CA1\u6709\u76F8\u5E94\u7684 forceUpdate \u65B9\u6CD5\uFF0C\u56E0\u4E3A\u51FD\u6570\u5F0F\u7EC4\u4EF6\u6CA1\u6709\u5B9E\u4F8B\u3002\u4F46\u662F\uFF0C\u4F60\u53EF\u4EE5\u901A\u8FC7\u4F7F\u7528 useState \u94A9\u5B50\uFF08hook\uFF09\u6765\u6A21\u62DF\u8FD9\u4E2A\u884C\u4E3A\uFF1A",paraId:3,tocIndex:0},{value:`
import React, { useState } from 'react';

function MyFunctionalComponent() {
  const [_, forceUpdate] = useState(0);

  const updateComponent = () => {
    forceUpdate(n => n + 1); // \u6539\u53D8state\u7684\u503C\u6765\u5F3A\u5236\u91CD\u65B0\u6E32\u67D3
  };

  return (
    // ...
  );
}


`,paraId:4,tocIndex:0}]}}]);
