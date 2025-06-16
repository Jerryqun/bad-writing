"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[6239],{14460:function(i,d,e){e.r(d);var t=e(72269),s=e(93359),x=e(61788),c=e(19977),h=e(91558),a=e(24268),m=e(96057),E=e(85939),u=e(53683),l=e(80936),o=e(67294),_=e(20870),n=e(85893);function r(){return(0,n.jsx)(u.dY,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(l.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"koa-\u6D0B\u8471\u6A21\u578B",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#koa-\u6D0B\u8471\u6A21\u578B",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"koa \u6D0B\u8471\u6A21\u578B"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://zhuanlan.zhihu.com/p/279391637",target:"_blank",rel:"noreferrer",children:_.texts[0].value})}),(0,n.jsx)("p",{children:_.texts[1].value}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:_.texts[2].value}),(0,n.jsx)("li",{children:_.texts[3].value}),(0,n.jsx)("li",{children:_.texts[4].value}),(0,n.jsx)("li",{children:_.texts[5].value})]}),(0,n.jsx)(a.Z,{lang:"js",children:_.texts[6].value}),(0,n.jsxs)("h2",{id:"bind-\u4F1A\u4FDD\u7559\u4E0A\u6B21\u4E00\u6B21\u4F20\u5165\u7684\u53C2\u6570",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#bind-\u4F1A\u4FDD\u7559\u4E0A\u6B21\u4E00\u6B21\u4F20\u5165\u7684\u53C2\u6570",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"bind \u4F1A\u4FDD\u7559\u4E0A\u6B21\u4E00\u6B21\u4F20\u5165\u7684\u53C2\u6570"]}),(0,n.jsx)("p",{children:_.texts[7].value}),(0,n.jsx)(a.Z,{lang:"js",children:_.texts[8].value})]})})})})}d.default=r},20870:function(i,d,e){e.r(d),e.d(d,{texts:function(){return t}});const t=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"\u4E2D\u95F4\u4EF6\u7684\u6267\u884C\u6D41\u5FC5\u5B9A\u662F\u5982\u4E0B\u7684\u4E00\u4E2A\u6D41\u7A0B\uFF1A",paraId:1,tocIndex:0},{value:"\u5916\u5C42\u4E2D\u95F4\u4EF6\u8FDB\u884C\u524D\u671F\u5904\u7406\uFF08next \u524D\u7684\u903B\u8F91\uFF09",paraId:2,tocIndex:0},{value:"\u8C03\u7528 next\uFF0C\u5C06\u63A7\u5236\u6D41\u4EA4\u7ED9\u4E0B\u4E2A\u4E2D\u95F4\u4EF6\uFF0C\u5E76 await \u5176\u5B8C\u6210\uFF0C\u76F4\u5230\u540E\u9762\u6CA1\u6709\u4E2D\u95F4\u4EF6\u6216\u8005\u6CA1\u6709 next \u51FD\u6570\u6267\u884C\u4E3A\u6B62",paraId:2,tocIndex:0},{value:"\u5B8C\u6210\u540E\u4E00\u5C42\u5C42\u56DE\u6EAF\u6267\u884C\u5404\u4E2A\u4E2D\u95F4\u4EF6\u7684\u540E\u671F\u5904\u7406\uFF08next \u540E\u7684\u903B\u8F91\uFF09",paraId:2,tocIndex:0},{value:"\u8FD9\u5C31\u662F\u6D0B\u8471\u6A21\u578B",paraId:2,tocIndex:0},{value:`const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
  console.log('---1--->');
  await next();
  console.log('===6===>');
});
app.use(async (ctx, next) => {
  console.log('---2--->');
  await next();
  console.log('===5===>');
});
app.use(async (ctx, next) => {
  console.log('---3--->');
  await next();
  console.log('===4===>');
});

app.listen(8899, () => {
  console.log('\u5E94\u7528\u542F\u52A8\u4E86');
});

// \u6267\u884C\u7ED3\u6784\u7ED3\u679C\u5C31\u662F 1 2 3 4 5 6

let fn = function (ctx) {
  return dispatch(0);

  function dispatch(i) {
    let currentMW = middleware[i];
    if (!currentMW) {
      return;
    }
    return currentMW(ctx, dispatch.bind(null, i + 1));
  }
};

fn();
`,paraId:3,tocIndex:0},{value:"\u6D0B\u8471\u6A21\u578B\u5C31\u662F\u5229\u7528\u4E86 bind \u4F20\u5165\u4E0A\u4E00\u4E2A\u51FD\u6570\u7684 next",paraId:4,tocIndex:1},{value:`function add(a, b) {
  return a + b;
}

// \u4F7F\u7528 bind() \u9884\u7F6E\u7B2C\u4E00\u4E2A\u53C2\u6570 a = 2
const addTwo = add.bind(null, 2);

// \u5F53\u6211\u4EEC\u8C03\u7528 addTwo() \u65F6\uFF0C\u53EA\u9700\u8981\u4F20\u5165\u7B2C\u4E8C\u4E2A\u53C2\u6570
console.log(addTwo(3)); // \u8F93\u51FA 5\uFF0C\u76F8\u5F53\u4E8E\u6267\u884C add(2, 3)
`,paraId:5,tocIndex:1}]}}]);
