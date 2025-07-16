"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7984],{52254:function(o,e,n){n.r(e);var l=n(72269),r=n(93359),g=n(61788),c=n(19977),m=n(91558),d=n(24268),E=n(96057),f=n(85939),a=n(53683),s=n(80936),i=n(67294),u=n(11726),_=n(85893);function t(){return(0,_.jsx)(a.dY,{children:(0,_.jsx)(i.Suspense,{fallback:(0,_.jsx)(s.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"js-\u5B57\u7B26\u4E32\u6BD4\u8F83",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#js-\u5B57\u7B26\u4E32\u6BD4\u8F83",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"JS \u5B57\u7B26\u4E32\u6BD4\u8F83"]}),(0,_.jsx)(d.Z,{lang:"js",children:u.texts[0].value})]})})})})}e.default=t},11726:function(o,e,n){n.r(e),n.d(e,{texts:function(){return l}});const l=[{value:`/**
 * 1\u3001>\u3001<\u6BD4\u8F83
 * \u5B57\u7B26\u4E32\u8FDB\u884C\u5927\u4E8E(\u5C0F\u4E8E)\u6BD4\u8F83\u65F6\uFF0C\u4F1A\u6839\u636E\u7B2C\u4E00\u4E2A\u4E0D\u540C\u7684\u5B57\u7B26\u7684ASCII\u503C\u7801\u8FDB\u884C\u6BD4\u8F83
 * \u6570\u5B57\u5B57\u7B26\u4E32\u4E0E\u6570\u5B57\u6BD4\u8F83\u65F6\uFF0C\u6570\u5B57\u5B57\u7B26\u4E32\u4F1A\u8F6C\u6362\u6210\u6570\u5B57\u518D\u8FDB\u884C\u5927\u5C0F\u6BD4\u8F83
 * \u975E\u6570\u5B57\u5B57\u7B26\u4E32\u4E0E\u6570\u5B57\u6BD4\u8F83\u65F6\uFF0C\u975E\u6570\u5B57\u5B57\u7B26\u4E32\u4F1A\u8F6C\u6362\u6210NaN\uFF0CNaN\u4E0E\u4EFB\u4F55\u6BD4\u8F83\u90FD\u8FD4\u56DEfalse
 */

console.log('1.2.2a' > '1.2.2b'); // false
console.log('1.02.1' > '1.1'); // false
console.log('1.23' < '1.2b'); // true

console.log('1.23' < 1.24); // true
console.log(1.23 < '1.24a'); // false
console.log(1.23 > '1.24a'); // false

/**
 * 2\u3001\u76F8\u7B49\uFF08==\uFF09
 * \u76F8\u7B49\u6BD4\u8F83\u65F6\uFF0C\u4E0D\u8981\u6C42\u7C7B\u578B\u5B8C\u5168\u4E00\u81F4\u3002\u975E\u4E00\u81F4\u7684\uFF0C\u4F1A\u5C1D\u8BD5\u8F6C\u6362\u6210\u4E00\u81F4\u7C7B\u578B\u518D\u6BD4\u8F83\u6570\u503C\u5927\u5C0F\u6216\u8005\u5F15\u7528\u5730\u5740\u5927\u5C0F\u3002
\u5B57\u7B26\u4E32\u6BD4\u8F83\uFF0C\u4F9D\u6B21\u6BD4\u8F83\u6BCF\u4E2A\u5B57\u7B26\u662F\u5426\u4E00\u6837\uFF1B
\u6570\u5B57\u5B57\u7B26\u4E32\u4E0E\u6570\u5B57\u6BD4\u8F83\u65F6\uFF0C\u6570\u5B57\u5B57\u7B26\u4E32\u4F1A\u8F6C\u6362\u6210\u6570\u5B57\u518D\u8FDB\u884C\u76F8\u7B49\u6BD4\u8F83\uFF1B
\u975E\u6570\u5B57\u5B57\u7B26\u4E32\u4E0E\u6570\u5B57\u6BD4\u8F83\u65F6\uFF0C\u975E\u6570\u5B57\u5B57\u7B26\u4E32\u4F1A\u8F6C\u6362\u6210NaN\uFF0CNaN\u4E0E\u4EFB\u4F55\u6BD4\u8F83\u90FD\u8FD4\u56DEfalse\uFF1B
\u5B57\u7B26\u4E32\u4E0E\u5B57\u7B26\u5BF9\u8C61\u6BD4\u8F83\u65F6\uFF0C\u5B57\u7B26\u5BF9\u8C61\u4F1A\u8F6C\u6362\u6210\u5B57\u7B26\u4E32\u518D\u8FDB\u884C\u76F8\u7B49\u6BD4\u8F83\uFF1B
\u5B57\u7B26\u5BF9\u8C61\u6BD4\u8F83\u65F6\uFF0C\u6BD4\u8F83\u5B57\u7B26\u5BF9\u8C61\u7684\u5730\u5740\u5927\u5C0F\u3002

 */

console.log('abc' == 'abc'); // true
console.log('abc' == new String('abc')); // true
console.log('123' == 123); // true
console.log('123a' == 123); // false
console.log(new String('abc') == new String('abc')); // false

/**
 * 3\u3001\u4E25\u683C\u76F8\u7B49\uFF08===\uFF09
 */
console.log('abc' === 'abc'); // true
console.log('abc' === new String('abc')); // false
console.log(new String('abc') === new String('abc')); // false

/**
 * \u6BD4\u8F83\u4E2D\u7684\u51E0\u79CD\u7279\u6B8A\u60C5\u51B5
 * \u4E3B\u8981\u662Fnull\u3001undefined\u3001NaN\u7684\u6BD4\u8F83\u3002
null\u4E0Eundefined\u76F8\u7B49\uFF0C\u5B83\u4EEC\u81EA\u8EAB\u90FD\u76F8\u7B49\uFF1B
null\u4E0Eundefined\u4E25\u683C\u4E0D\u76F8\u7B49\uFF0C\u5B83\u4EEC\u4E0E\u81EA\u8EAB\u4E25\u683C\u76F8\u7B49\uFF1B
NaN\u4E0E\u4EFB\u4F55\u6BD4\u8F83\u90FD\u4E0D\u76F8\u7B49\u3002
 */

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(NaN == undefined); // false
console.log(NaN == null); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
`,paraId:0,tocIndex:0}]}}]);
