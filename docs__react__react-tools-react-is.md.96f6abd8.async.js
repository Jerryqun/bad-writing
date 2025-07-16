"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9927],{4562:function(r,t,e){e.r(t);var a=e(72269),m=e(93359),c=e(61788),u=e(19977),h=e(91558),i=e(24268),E=e(96057),x=e(85939),d=e(53683),l=e(80936),s=e(67294),_=e(59300),n=e(85893);function o(){return(0,n.jsx)(d.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(l.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"react-is",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#react-is",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"react-is"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{target:"_blank",href:"https://www.npmjs.com/package/react-is",children:_.texts[0].value})}),(0,n.jsx)(i.Z,{lang:"js",children:_.texts[1].value}),(0,n.jsxs)("h2",{id:"react-helmet",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#react-helmet",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"react-helmet"]}),(0,n.jsx)(i.Z,{lang:"js",children:_.texts[2].value})]})})})})}t.default=o},59300:function(r,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:`import React from 'react';
import ReactDOM from 'react-dom';
import * as ReactIs from 'react-is';

const div = document.createElement('div');
const portal = ReactDOM.createPortal(<div />, div);

ReactIs.isPortal(portal); // true
ReactIs.typeOf(portal) === ReactIs.Portal; // true
`,paraId:1,tocIndex:0},{value:`/**
 * React\u52A8\u6001\u4FEE\u6539\u9875\u9762title\u4E4B\u795E\u5668react-helmet
 * http://www.daimaku.net/post/view/12662
 * https://www.npmjs.com/package/react-helmet
 * npm install react-helmet --save
 */

import React from 'react';
import { Helmet } from 'react-helmet';

class Application extends React.Component {
  render() {
    return (
      <div className="application">
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link rel="canonical" href="http://example.com/" />
        </Helmet>
        ...
      </div>
    );
  }
}

/**
 * \u7279\u6027\uFF1A

\u652F\u6301\u6240\u6709\u6709\u6548\u7684\u5934\u6807\u7B7E\uFF0Ctitle base meta link script noscript style

\u652F\u6301body html title\u6807\u7B7E\u7684\u5C5E\u6027

\u652F\u6301\u670D\u52A1\u7AEF\u6E32\u67D3

\u5D4C\u5957\u7EC4\u4EF6\u6216\u540E\u9762\u7684\u7EC4\u4EF6\u4F1A\u8986\u76D6\u91CD\u590D\u7684head\u6807\u7B7E\u66F4\u6539

\u5982\u679C\u4F60\u7684 React \u5E94\u7528\u7A0B\u5E8F\u9700\u8981\u4FEE\u6539\u52A8\u6001\u7684\u5934\u90E8\u4FE1\u606F\uFF0C\u800C\u4E14\u9700\u8981\u8003\u8651\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u6027\u80FD\u95EE\u9898\uFF0C
\u90A3\u4E48\u5EFA\u8BAE\u4F7F\u7528 react-helmet-async\u3002\u5B83\u53EF\u4EE5\u5E2E\u52A9\u6211\u4EEC\u5F88\u597D\u5730\u5B8C\u6210\u8FD9\u9879\u4EFB\u52A1\u3002
\u6CE8\u610F\uFF1A\u5728\u4F7F\u7528 react-helmet-async \u65F6\uFF0C\u63A7\u5236\u53F0\u6709\u53EF\u80FD\u4F1A\u51FA\u73B0 act() \u8B66\u544A\u3002
\u8FD9\u662F\u56E0\u4E3A react-helmet-async \u5728\u7EC4\u4EF6\u52A0\u8F7D\u65F6\u4F1A\u5F02\u6B65\u6267\u884C\uFF0C\u6240\u4EE5\u9700\u8981\u5B8C\u5168\u52A0\u8F7D\u540E\u624D\u80FD\u4F7F\u7528\u3002
\u7248\u6743\u58F0\u660E\uFF1A\u672C\u6587\u4E3A\u539F\u521B\u6587\u7AE0\uFF0C\u7248\u6743\u7531\u672C\u7AD9\uFF08JavaScript\u4E2D\u6587\u7F51\uFF09\u62E5\u6709\uFF0C\u4E25\u7981\u672A\u7ECF\u5141\u8BB8\u590D\u5236\u3001\u8F6C\u8F7D\u3001\u4F20\u64AD\u3001\u7BE1\u6539\u7B49\u4EFB\u4F55\u884C\u4E3A\uFF0C\u5982\u9700\u8F6C\u8F7D\uFF0C\u8BF7\u8054\u7CFB\u672C\u7AD9\u7BA1\u7406\u5458\u83B7\u53D6\u4E66\u9762\u6388\u6743
 */
`,paraId:2,tocIndex:1}]}}]);
