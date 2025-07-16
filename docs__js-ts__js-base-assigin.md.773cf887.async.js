"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7018],{3045:function(i,t,n){n.r(t);var d=n(72269),r=n(93359),m=n(61788),c=n(19977),b=n(91558),a=n(24268),g=n(96057),E=n(85939),o=n(53683),s=n(80936),l=n(67294),e=n(39337),_=n(85893);function u(){return(0,_.jsx)(o.dY,{children:(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(s.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"objectassign",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#objectassign",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Object.assign"]}),(0,_.jsx)("ul",{children:(0,_.jsx)("li",{children:e.texts[0].value})}),(0,_.jsxs)("p",{children:[e.texts[1].value,(0,_.jsx)("br",{}),e.texts[2].value,(0,_.jsx)("br",{}),e.texts[3].value,(0,_.jsx)("br",{}),e.texts[4].value]}),(0,_.jsx)(a.Z,{lang:"js",children:e.texts[5].value})]})})})})}t.default=u},39337:function(i,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u6D45\u62F7\u8D1D\u5C31\u662F\u62F7\u8D1D\u7B2C\u4E00\u5C42\u7684\u57FA\u672C\u7C7B\u578B\u503C\uFF0C\u4EE5\u53CA\u7B2C\u4E00\u5C42\u7684\u5F15\u7528\u7C7B\u578B\u5730\u5740",paraId:0,tocIndex:0},{value:"concat \u53EA\u662F\u5BF9\u6570\u7EC4\u7684\u7B2C\u4E00\u5C42\u8FDB\u884C\u6DF1\u62F7\u8D1D",paraId:1,tocIndex:0},{value:`
slice \u53EA\u662F\u5BF9\u6570\u7EC4\u7684\u7B2C\u4E00\u5C42\u8FDB\u884C\u6DF1\u62F7\u8D1D`,paraId:1,tocIndex:0},{value:`
... \u5B9E\u73B0\u7684\u662F\u5BF9\u8C61\u7B2C\u4E00\u5C42\u7684\u6DF1\u62F7\u8D1D\u3002\u540E\u9762\u7684\u53EA\u662F\u62F7\u8D1D\u7684\u5F15\u7528\u503C`,paraId:1,tocIndex:0},{value:`
Object.assign() \u62F7\u8D1D\u7684\u662F\u5C5E\u6027\u503C\u3002\u5047\u5982\u6E90\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u662F\u4E00\u4E2A\u6307\u5411\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5B83\u4E5F\u53EA\u62F7\u8D1D\u90A3\u4E2A\u5F15\u7528\u503C`,paraId:1,tocIndex:0},{value:`// \u7B2C\u4E00\u6B65
let a = {
  name: 'advanced',
  age: 18,
};
let b = {
  name: 'muyiy',
  book: {
    title: "You Don't Know JS",
    price: '45',
  },
};
let c = Object.assign(a, b);
console.log(c);
// {
// 	name: "muyiy",
//  age: 18,
// 	book: {title: "You Don't Know JS", price: "45"}
// }
console.log(a === c);
// true

// \u7B2C\u4E8C\u6B65
b.name = 'change';
b.book.price = '55';
console.log(b);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// }

// \u7B2C\u4E09\u6B65
console.log(a);
// {
// 	name: "muyiy",
//  age: 18,
// 	book: {title: "You Don't Know JS", price: "55"}
// }

// String \u7C7B\u578B\u548C Symbol \u7C7B\u578B\u7684\u5C5E\u6027\u90FD\u4F1A\u88AB\u62F7\u8D1D\uFF0C\u800C\u4E14\u4E0D\u4F1A\u8DF3\u8FC7\u90A3\u4E9B\u503C\u4E3A null \u6216 undefined \u7684\u6E90\u5BF9\u8C61\u3002

const a = {
  name: 'cq',
};

const b = {
  age: undefined,
  hobby: null,
};

const c = Object.assign(a, b);
console.log('c', c); // {name: 'cq', age: undefined, hobby: null}
`,paraId:2,tocIndex:0}]}}]);
