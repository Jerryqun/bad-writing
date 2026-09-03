"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[6e3],{70669:(function(t,e,_){_.r(e);var i=_(55804),o=_(33405),m=_(67700),E=_(84359),h=_(88738),d=_(5412),D=_(75968),P=_(33044),s=_(54314),r=_(10577),u=_(96540),a=_(42786),n=_(74848);function l(){return(0,n.jsx)(s.LO,{children:(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(r.A,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u53D1\u5E03\u8BA2\u9605",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53D1\u5E03\u8BA2\u9605",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u53D1\u5E03\u8BA2\u9605"]}),(0,n.jsx)(d.A,{lang:"js",children:a.texts[0].value})]})})})})}e.default=l}),42786:(function(t,e,_){_.r(e);const i=[{value:`class EventEmitter {
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
`,paraId:0,tocIndex:0}];_.d(e,["texts",0,i])})}]);
