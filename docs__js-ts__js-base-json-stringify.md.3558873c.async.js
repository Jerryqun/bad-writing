"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2155],{32948:function(t,e,_){_.r(e);var i=_(72269),o=_(93359),m=_(61788),c=_(19977),E=_(91558),a=_(24268),f=_(96057),g=_(85939),d=_(53683),s=_(80936),l=_(67294),r=_(66250),n=_(85893);function u(){return(0,n.jsx)(d.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(s.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"jsonstringify",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#jsonstringify",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"JSON.stringify"]}),(0,n.jsx)("p",{children:r.texts[0].value}),(0,n.jsx)(a.Z,{lang:"js",children:r.texts[1].value})]})})})})}e.default=u},66250:function(t,e,_){_.r(e),_.d(e,{texts:function(){return i}});const i=[{value:"\u4F7F\u7528 JSON.stringify/parse \u7684\u65B9\u6CD5\u8FDB\u884C\u6DF1\u62F7\u8D1D\u9047\u5230 undefined\u3001function\u3001symbol \u4F1A\u5728\u8F6C\u6362\u8FC7\u7A0B\u4E2D\u88AB\u5FFD\u7565",paraId:0,tocIndex:0},{value:`/**
 * JSON\u53EA\u652F\u6301object,array,string,number,true,false,null\u8FD9\u51E0\u79CD\u6570\u636E\u6216\u8005\u503C\uFF0C
 * \u5176\u4ED6\u7684\u6BD4\u5982\u51FD\u6570\uFF0Cundefined\uFF0CDate\uFF0CRegExp\u7B49\u6570\u636E\u7C7B\u578B\u90FD\u4E0D\u652F\u6301\uFF0C\u5BF9\u4E8E\u5B83\u4E0D\u652F\u6301\u7684\u6570\u636E\u90FD\u4F1A\u76F4\u63A5\u5FFD\u7565\u8BE5\u5C5E\u6027\u3002
 * \u4F1A\u629B\u5F03\u5BF9\u8C61\u7684constructor, \u6240\u6709\u7684\u6784\u9020\u51FD\u6570\u4F1A\u6307\u5411Object
 * \u5BF9\u8C61\u6709\u5FAA\u73AF\u5F15\u7528,\u4F1A\u62A5\u9519
 */

/**
 * @param obj
 * @param space  \u5904\u7406\u540E\u7684\u683C\u5F0F
 * @param replacer
 * @param cycleReplacer
 * @returns
 */

function safeStringify(obj, space, replacer, cycleReplacer) {
  const wekMap = new WeakMap();
  return JSON.stringify(
    obj,
    (key, value) => {
      if (value !== null && typeof value === 'object') {
        if (wekMap.has(key)) {
          return cycleReplacer ? cycleReplacer(key, value) : '[Circular]';
        } else {
          wekMap.set(value, true);
        }
      }
      return replacer ? replacer(key, value) : value;
    },
    space,
  );
}
`,paraId:1,tocIndex:0}]}}]);
