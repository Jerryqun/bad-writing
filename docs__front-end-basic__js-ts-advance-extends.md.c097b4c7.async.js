"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8987],{32238:(function(a,e,_){_.r(e);var d=_(55804),l=_(33405),m=_(72700),E=_(84359),h=_(88738),t=_(77658),x=_(75968),D=_(33044),u=_(41047),s=_(10577),r=_(96540),i=_(45233),n=_(74848);function o(){return(0,n.jsx)(u.LO,{children:(0,n.jsx)(r.Suspense,{fallback:(0,n.jsx)(s.A,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"ts-\u8FDB\u9636\u4E4B-extends",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ts-\u8FDB\u9636\u4E4B-extends",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"TS \u8FDB\u9636\u4E4B extends"]}),(0,n.jsx)(t.A,{lang:"ts",children:i.texts[0].value}),(0,n.jsxs)("h2",{id:"\u52A8\u6001\u6269\u5C55\u5BF9\u8C61",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u52A8\u6001\u6269\u5C55\u5BF9\u8C61",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u52A8\u6001\u6269\u5C55\u5BF9\u8C61"]}),(0,n.jsx)(t.A,{lang:"ts",children:i.texts[1].value})]})})})})}e.default=o}),45233:(function(a,e,_){_.r(e);const d=[{value:`namespace Extends {
  type T = {
    a: number;
    b: number;
    c: number;
  };

  type U = {
    b: number;
    a: number;
  };

  type A = U extends T ? any : unknown[]; // a   unknown[]
}
`,paraId:0,tocIndex:0},{value:`interface DynamicObject {
  [key: string]: number | string; // \u5141\u8BB8\u4EFB\u610F\u5C5E\u6027\u540D\uFF0C\u4F46\u5C5E\u6027\u503C\u5FC5\u987B\u4E3A number \u6216 string \u7C7B\u578B
}
function processDynamicData(data: DynamicObject): void {
  for (let key in data) {
    console.log(key + ': ' + data[key]); // \u5BF9\u4EFB\u610F\u5C5E\u6027\u8FDB\u884C\u5904\u7406
  }
}
`,paraId:1,tocIndex:1}];_.d(e,["texts",0,d])})}]);
