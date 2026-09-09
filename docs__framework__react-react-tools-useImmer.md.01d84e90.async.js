"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[250],{92017:(function(i,e,n){n.r(e);var d=n(55804),m=n(33405),l=n(72700),E=n(84359),h=n(88738),r=n(77658),x=n(75968),c=n(33044),s=n(41047),a=n(10577),u=n(96540),t=n(39798),_=n(74848);function o(){return(0,_.jsx)(s.LO,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(a.A,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"useimmer",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useimmer",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"useImmer"]}),(0,_.jsx)("p",{children:t.texts[0].value}),(0,_.jsx)("p",{children:t.texts[1].value}),(0,_.jsx)(r.A,{lang:"js",children:t.texts[2].value}),(0,_.jsx)("p",{children:t.texts[3].value}),(0,_.jsx)(r.A,{lang:"js",children:t.texts[4].value})]})})})})}e.default=o}),39798:(function(i,e,n){n.r(e);const d=[{value:"useImmer \u89E3\u51B3\u5F15\u7528\u7C7B\u578B\u5C5E\u6027\u53D8\u52A8 view \u4E0D\u66F4\u65B0\u60C5\u51B5",paraId:0,tocIndex:0},{value:"\u4E0D\u4F7F\u7528useImmer \u4E0B\u9762\u6817\u5B50\u6570\u636E\u4E0D\u4F1A\u5237\u65B0",paraId:1,tocIndex:0},{value:`import { useState } from 'react';

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
`,paraId:4,tocIndex:0}];n.d(e,["texts",0,d])})}]);
