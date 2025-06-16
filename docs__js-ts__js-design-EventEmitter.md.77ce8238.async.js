"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1068],{55228:function(t,e,_){_.r(e);var i=_(72269),o=_(93359),m=_(61788),E=_(19977),h=_(91558),d=_(24268),D=_(96057),P=_(85939),s=_(53683),r=_(80936),u=_(67294),a=_(99897),n=_(85893);function l(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(r.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u53D1\u5E03\u8BA2\u9605",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53D1\u5E03\u8BA2\u9605",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u53D1\u5E03\u8BA2\u9605"]}),(0,n.jsx)(d.Z,{lang:"js",children:a.texts[0].value})]})})})})}e.default=l},99897:function(t,e,_){_.r(e),_.d(e,{texts:function(){return i}});const i=[{value:`class EventEmitter {
  // \u5B58\u50A8
  listerners = [];
  // \u53D1\u5E03
  publish = (params) => this.listerners.map((fn) => fn(params));

  // \u8BA2\u9605
  subscribe = (fn) => {
    this.listerners.push(fn);
    return (fn) => {
      this.listerners = this.listerners.filter((f) => f !== fn);
    };
  };
}

const E = new EventEmitter();
const cancel = E.subscribe(() => console.log(111));
setTimeout(() => {
  E.publish();
  cancel();
}, 2000);
`,paraId:0,tocIndex:0}]}}]);
