"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4221],{86106:function(i,e,n){n.r(e);var d=n(72269),m=n(93359),l=n(61788),E=n(19977),h=n(91558),r=n(24268),x=n(96057),c=n(85939),s=n(53683),u=n(80936),a=n(67294),t=n(46401),_=n(85893);function o(){return(0,_.jsx)(s.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(u.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"useimmer",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useimmer",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"useImmer"]}),(0,_.jsx)("p",{children:t.texts[0].value}),(0,_.jsx)("p",{children:t.texts[1].value}),(0,_.jsx)(r.Z,{lang:"js",children:t.texts[2].value}),(0,_.jsx)("p",{children:t.texts[3].value}),(0,_.jsx)(r.Z,{lang:"js",children:t.texts[4].value})]})})})})}e.default=o},46401:function(i,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:"useImmer \u89E3\u51B3\u5F15\u7528\u7C7B\u578B\u5C5E\u6027\u53D8\u52A8 view \u4E0D\u66F4\u65B0\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u4E0D\u4F7F\u7528useImmer \u4E0B\u9762\u6817\u5B50\u6570\u636E\u4E0D\u4F1A\u5237\u65B0",paraId:1,tocIndex:0},{value:`import { useState } from 'react';

export default () => {
  const [state, setState] = useState({
    a: 1,
    b: {
      c: [1, 2],
      d: 2,
    },
  });

  return (
    <>
      <button
        onClick={() => {
          setState((prev) => {
            prev.b.c.push(3);
            return prev
          });
        }}
      >
        test
      </button>
      <button>{JSON.stringify(state)}</button>
    </>
  );
};

`,paraId:2,tocIndex:0},{value:"\u4F7F\u7528useImmer \u6570\u636E\u5237\u65B0",paraId:3,tocIndex:0},{value:`import { useState } from 'react';
import { useImmer } from 'use-immer';

export default () => {
  const [state, setState] = useImmer({
    a: 1,
    b: {
      c: [1, 2],
      d: 2,
    },
  });

  return (
    <>
      <button
        onClick={() => {
          setState((prev) => {
            prev.b.c.push(3);
            return prev
          });
        }}
      >
        test
      </button>
      <button>{JSON.stringify(state)}</button>
    </>
  );
};
`,paraId:4,tocIndex:0}]}}]);
