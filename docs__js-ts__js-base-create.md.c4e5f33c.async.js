"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3988],{89183:function(d,e,_){_.r(e);var t=_(72269),l=_(93359),m=_(61788),b=_(19977),E=_(91558),i=_(24268),c=_(96057),O=_(85939),r=_(53683),a=_(80936),o=_(67294),u=_(64515),n=_(85893);function s(){return(0,n.jsx)(r.dY,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(a.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"objectcreate",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#objectcreate",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Object.create()"]}),(0,n.jsx)(i.Z,{lang:"js",children:u.texts[0].value})]})})})})}e.default=s},64515:function(d,e,_){_.r(e),_.d(e,{texts:function(){return t}});const t=[{value:`Object.create()
//\u521B\u5EFA\u4E00\u4E2A\u65B0\u5BF9\u8C61\uFF0C\u4F7F\u7528\u73B0\u6709\u7684\u5BF9\u8C61\u6765\u63D0\u4F9B\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u7684__proto__

var a = {num:2};
var b = Object.create(a); // b => undefined

b.__proto__ === a  // true


var a = {num:2};
var b = Object.create(a);
//\u95EE\u9898,\u4EE5\u4E0B\u987A\u5E8F\u6267\u884C,\u503C\u662F\uFF1F
console.log('b.num ', b.num ) // 2
b.num++
console.log('a.num', a.num)  // 2
console.log('b.num', b.num)  b.num  // 3


new Object()
//\u7EE7\u627F\u5185\u7F6E\u5BF9\u8C61Object\uFF0C\u800CObject.create()\u5219\u662F\u7EE7\u627F\u6307\u5B9A\u5BF9\u8C61
//\u53EF\u4EE5\u901A\u8FC7Object.create(null) \u521B\u5EFA\u4E00\u4E2A\u5E72\u51C0\u7684\u5BF9\u8C61\uFF0C\u4E5F\u5C31\u662F\u6CA1\u6709\u539F\u578B\uFF0C\u800C new Object()\u521B\u5EFA\u7684\u5BF9\u8C61\u662F Object\u7684\u5B9E\u4F8B\uFF0C\u539F\u578B\u6C38\u8FDC\u6307\u5411Object.prototype
`,paraId:0,tocIndex:0}]}}]);
