"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4221],{86106:function(i,e,_){_.r(e);var d=_(72269),o=_(93359),l=_(61788),E=_(19977),h=_(91558),r=_(24268),P=_(96057),D=_(85939),s=_(53683),u=_(80936),a=_(67294),t=_(46401),n=_(85893);function m(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(u.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"useimmer",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useimmer",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"useImmer"]}),(0,n.jsx)("p",{children:t.texts[0].value}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[1].value})]})})})})}e.default=m},46401:function(i,e,_){_.r(e),_.d(e,{texts:function(){return d}});const d=[{value:"useImmer \u89E3\u51B3\u5F15\u7528\u7C7B\u578B\u5C5E\u6027\u53D8\u52A8 view \u4E0D\u66F4\u65B0\u60C5\u51B5",paraId:0,tocIndex:0},{value:`import { useImmer } from 'use-immer';

export default () => {
  const [state, setState] = useImmer({
    a: 1,
    b: {
      c: [1, 2],
      d: 2,
    },
  });

  setState((prev) => {
    prev.b.c.push(3);
  });
  return <div>111</div>;
};
`,paraId:1,tocIndex:0}]}}]);
