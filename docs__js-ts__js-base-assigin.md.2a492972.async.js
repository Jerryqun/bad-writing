"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7018],{3045:function(d,t,n){n.r(t);var i=n(72269),r=n(93359),c=n(61788),m=n(19977),g=n(91558),a=n(24268),b=n(96057),h=n(85939),o=n(53683),s=n(80936),l=n(67294),e=n(39337),_=n(85893);function u(){return(0,_.jsx)(o.dY,{children:(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(s.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"objectassign-\u6D45\u62F7\u8D1D",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#objectassign-\u6D45\u62F7\u8D1D",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"Object.assign (\u6D45\u62F7\u8D1D)"]}),(0,_.jsxs)("ul",{children:[(0,_.jsx)("li",{children:e.texts[0].value}),(0,_.jsx)("li",{children:e.texts[1].value}),(0,_.jsx)("li",{children:e.texts[2].value}),(0,_.jsx)("li",{children:e.texts[3].value}),(0,_.jsx)("li",{children:e.texts[4].value})]}),(0,_.jsx)("p",{children:e.texts[5].value}),(0,_.jsx)(a.Z,{lang:"js",children:e.texts[6].value})]})})})})}t.default=u},39337:function(d,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"\u6D45\u62F7\u8D1D\u5C31\u662F\u62F7\u8D1D\u7B2C\u4E00\u5C42\u7684\u57FA\u672C\u7C7B\u578B\u503C\uFF0C\u4EE5\u53CA\u7B2C\u4E00\u5C42\u7684\u5F15\u7528\u7C7B\u578B\u5730\u5740",paraId:0,tocIndex:0},{value:"concat \u53EA\u662F\u5BF9\u6570\u7EC4\u7684\u7B2C\u4E00\u5C42\u8FDB\u884C\u6DF1\u62F7\u8D1D",paraId:0,tocIndex:0},{value:"slice \u53EA\u662F\u5BF9\u6570\u7EC4\u7684\u7B2C\u4E00\u5C42\u8FDB\u884C\u6DF1\u62F7\u8D1D",paraId:0,tocIndex:0},{value:"... \u5B9E\u73B0\u7684\u662F\u5BF9\u8C61\u7B2C\u4E00\u5C42\u7684\u6DF1\u62F7\u8D1D\u3002\u540E\u9762\u7684\u53EA\u662F\u62F7\u8D1D\u7684\u5F15\u7528\u503C",paraId:0,tocIndex:0},{value:"Object.assign() \u62F7\u8D1D\u7684\u662F\u5C5E\u6027\u503C\u3002\u5047\u5982\u6E90\u5BF9\u8C61\u7684\u5C5E\u6027\u503C\u662F\u4E00\u4E2A\u6307\u5411\u5BF9\u8C61\u7684\u5F15\u7528\uFF0C\u5B83\u4E5F\u53EA\u62F7\u8D1D\u90A3\u4E2A\u5F15\u7528\u503C",paraId:0,tocIndex:0},{value:"\u6CE8\u610F: assign\u5408\u5E76\u7684\u5BF9\u8C61target\u53EA\u80FD\u5408\u5E76source1\u3001source2\u4E2D\u7684\u81EA\u8EAB\u5C5E\u6027\uFF0C\u5E76\u4E0D\u4F1A\u5408\u5E76source1\u3001source2\u4E2D\u7684\u7EE7\u627F\u5C5E\u6027\uFF0C\u4E5F\u4E0D\u4F1A\u5408\u5E76\u4E0D\u53EF\u679A\u4E3E\u7684\u5C5E\u6027\uFF0C\u4E14\u65E0\u6CD5\u6B63\u786E\u590D\u5236get\u548Cset\u5C5E\u6027\uFF08\u4F1A\u76F4\u63A5\u6267\u884Cget/set\u51FD\u6570\uFF0C\u53D6return\u7684\u503C\uFF09",paraId:1,tocIndex:0},{value:`// \u7B2C\u4E00\u6B65
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
