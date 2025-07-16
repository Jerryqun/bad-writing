"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4234],{80666:function(i,e,_){_.r(e);var d=_(72269),l=_(93359),m=_(61788),j=_(19977),b=_(91558),t=_(24268),E=_(96057),O=_(85939),r=_(53683),s=_(80936),a=_(67294),o=_(18139),n=_(85893);function u(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(s.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u51BB\u7ED3\u5BF9\u8C61",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u51BB\u7ED3\u5BF9\u8C61",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u51BB\u7ED3\u5BF9\u8C61"]}),(0,n.jsx)(t.Z,{lang:"js",children:o.texts[0].value})]})})})})}e.default=u},18139:function(i,e,_){_.r(e),_.d(e,{texts:function(){return d}});const d=[{value:`/**
 * Object.freeze()
 * \u53EA\u80FD\u51BB\u7ED3\u4E00\u5C42\uFF0C\u5BF9\u4E8E\u5D4C\u5957\u7C7B\u578B\u65E0\u6CD5\u51BB\u7ED3
 */

var obj = {
  a: 1,
  b: 2,
  c: {
    d: 3,
  },
};

var freezeObj = Object.freeze(obj);
freezeObj.a = 2; //\u65E0\u6CD5\u4FEE\u6539
freezeObj.c.d = 4; //\u53EF\u4EE5\u4FEE\u6539
Object.isFrozen(freezeObj); //true

/**
 * Object.seal
 * \u51BB\u7ED3\u7684\u5BF9\u8C61\u5C5E\u6027\u53EF\u4EE5\u88AB\u4FEE\u6539\u4F46\u662F\u4E0D\u80FD\u88AB\u5220\u9664
 */

var obj = {
  name: 'cxy',
  age: '18',
};
const iceObj = Object.seal(obj);
iceObj.name = 'juejin';
delete iceObj.age; // false

/**
 * Object.preventExtensions
 * Object.preventExtensions\u662F\u51BB\u7ED3\u5BF9\u8C61\u589E\u52A0\u5C5E\u6027\u7684\u80FD\u529B
 */

var obj = {
  name: 'cxy',
  age: '18',
};
const iceObj = Object.preventExtensions(obj);
iceObj.weight = '180';
console.log(iceObj);
`,paraId:0,tocIndex:0}]}}]);
