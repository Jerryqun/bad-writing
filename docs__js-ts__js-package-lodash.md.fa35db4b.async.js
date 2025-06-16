"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3625],{91059:function(t,e,_){_.r(e);var a=_(72269),u=_(93359),m=_(61788),c=_(19977),h=_(91558),i=_(24268),E=_(96057),g=_(85939),s=_(53683),r=_(80936),o=_(67294),d=_(37905),n=_(85893);function l(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(r.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"lodash",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#lodash",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"lodash"]}),(0,n.jsx)("p",{children:d.texts[0].value}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{target:"_blank",href:"https://www.lodashjs.com/",children:d.texts[1].value})}),(0,n.jsx)(i.Z,{lang:"js",children:d.texts[2].value})]})})})})}e.default=l},37905:function(t,e,_){_.r(e),_.d(e,{texts:function(){return a}});const a=[{value:"\u4E3A\u4E86tree shaking \uFF0C\u63A8\u8350\u4F7F\u7528lodash-es",paraId:0,tocIndex:0},{value:"\u5B98\u7F51",paraId:1,tocIndex:0},{value:`// \u5728\u7EBF\u6D4B\u8BD5;
function addScript(url = 'https://code.jquery.com/jquery-3.5.1.min.js') {
  const script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
addScript('https://g.alicdn.com/code/lib/lodash.js/4.17.21/lodash.min.js');

// \u4E00\u3001_.chunk(array, [size=1])
// \u5C06\u6570\u7EC4\uFF08array\uFF09\u62C6\u5206\u6210\u591A\u4E2A size \u957F\u5EA6\u7684\u533A\u5757\uFF0C\u5E76\u5C06\u8FD9\u4E9B\u533A\u5757\u7EC4\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002 \u5982\u679Carray \u65E0\u6CD5\u88AB\u5206\u5272\u6210\u5168\u90E8\u7B49\u957F\u7684\u533A\u5757\uFF0C\u90A3\u4E48\u6700\u540E\u5269\u4F59\u7684\u5143\u7D20\u5C06\u7EC4\u6210\u4E00\u4E2A\u533A\u5757\u3002
// \u521B\u5EFA\u4E00\u4E2A\u5143\u7D20\u6570\u7EC4\uFF0C\u8BE5\u6570\u7EC4\u88AB\u5206\u6210\u5927\u5C0F\u957F\u5EA6\u7684\u7EC4\u3002\u5982\u679C\u6570\u7EC4\u4E0D\u80FD\u88AB\u5E73\u5747\u5206\u5272\uFF0C\u6700\u540E\u7684\u5757\u5C06\u662F\u5269\u4F59\u7684\u5143\u7D20\u3002

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

// \u4E8C\u3001_.groupBy(collection, [iteratee=_.identity])
_.groupBy(
  [
    { name: 'cq', age: 18 },
    { name: 'cq', age: 19 },
    { name: 'cq', age: 20 },
    { name: 'lzy', age: 18 },
  ],
  'name',
);
// => {
//     cq: [{name: "cq", age: 18}, {name: "cq", age: 19}, {name: "cq", age: 20}]
//     lzy:[ {name: "lzy", age: 18}]
// }
`,paraId:2,tocIndex:0}]}}]);
