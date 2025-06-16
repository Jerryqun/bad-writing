"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9097],{67400:function(s,o,t){t.r(o);var r=t(72269),u=t(93359),c=t(61788),x=t(19977),j=t(91558),a=t(24268),b=t(96057),f=t(85939),i=t(53683),d=t(80936),l=t(67294),n=t(36182),e=t(85893);function _(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"js-\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u65B9\u6848",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#js-\u4E2D\u7684\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u65B9\u6848",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"JS \u4E2D\u7684\u6570\u636E\u7C7B\u578B\u68C0\u6D4B\u65B9\u6848"]}),(0,e.jsx)("p",{children:n.texts[0].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[1].value}),(0,e.jsxs)("h3",{id:"typeof",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#typeof",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"typeOf"]}),(0,e.jsx)("p",{children:n.texts[2].value}),(0,e.jsx)("p",{children:n.texts[3].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[4].value}),(0,e.jsxs)("h3",{id:"instanceof",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#instanceof",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"instanceof"]}),(0,e.jsxs)("p",{children:[n.texts[5].value,(0,e.jsx)("br",{}),n.texts[6].value,(0,e.jsx)("br",{}),n.texts[7].value,(0,e.jsx)("br",{})]}),(0,e.jsx)("p",{children:n.texts[8].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[9].value}),(0,e.jsx)("p",{children:n.texts[10].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[11].value}),(0,e.jsxs)("h3",{id:"objectprototypetostringcall",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#objectprototypetostringcall",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Object.prototype.toString.call()"]}),(0,e.jsx)("p",{children:n.texts[12].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[13].value}),(0,e.jsxs)("h3",{id:"js-\u6DF7\u6DC6\u8FD0\u7B97",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#js-\u6DF7\u6DC6\u8FD0\u7B97",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"js \u6DF7\u6DC6\u8FD0\u7B97"]}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[14].value}),(0,e.jsxs)("p",{children:[n.texts[15].value,(0,e.jsx)("br",{}),n.texts[16].value,(0,e.jsx)("br",{}),n.texts[17].value]}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[18].value}),(0,e.jsxs)("p",{children:[n.texts[19].value,(0,e.jsx)("br",{}),n.texts[20].value]}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[21].value})]})})})})}o.default=_},36182:function(s,o,t){t.r(o),t.d(o,{texts:function(){return r}});const r=[{value:"\u603B\u7ED3\u6700\u7A33\u5B9A\u7684\u7C7B\u578B\u5224\u65AD\u65B9\u6CD5\u65B9\u6CD5",paraId:0,tocIndex:0},{value:`let class2type = {};
'Array Date RegExp Object Error'
  .split(' ')
  .forEach((e) => (class2type['[object ' + e + ']'] = e.toLowerCase()));

function type(obj) {
  if (obj == null) return String(obj);
  return typeof obj === 'object'
    ? class2type[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj;
}
`,paraId:1,tocIndex:0},{value:"typeof \u4F1A\u628A\u6240\u6709\u4F20\u8FDB\u53BB\u7684\u503C\u90FD\u8F6C\u6210\u4E8C\u8FDB\u5236\uFF0C\u800C\u5F53\u5E74 JS \u5236\u5B9A\u7684\u89C4\u5219\u4FBF\u662F\uFF1A\u539F\u59CB\u7C7B\u578B\u7684\u88AB\u8F6C\u4E3A\u4E8C\u8FDB\u5236\u7684\u524D\u9762\u4E09\u4E2A\u503C\u7EDD\u5BF9\u4E0D\u4E3A\u96F6\uFF0C\u800C typeof \u4F1A\u628A\u524D\u4E09\u4F4D\u4E3A\u96F6\u7684\u7C7B\u578B\u5168\u90E8\u8BA4\u5B9A\u4E3A\u5BF9\u8C61\uFF0Cnull \u8FD9\u4E2A\u7C7B\u578B\u53C8\u662F JS \u8BED\u8A00\u540E\u6765\u5F15\u5165\u7684\u3002\u9075\u5FAA\u5176\u4ED6\u8BED\u8A00\u7684\u539F\u5219\uFF0CJS \u8BED\u8A00\u5C06 null \u7684\u4E8C\u8FDB\u5236\u503C\u5B9A\u4E3A\u4E00\u957F\u4E32\u7684 0\uFF0C\u56E0\u6B64 typeof \u5728\u5224\u65AD\u65F6\u4F1A\u5C06\u5176\u8BA4\u5B9A\u4E3A object\u3002",paraId:2,tocIndex:1},{value:"\u4E0D\u80FD\u5C06 Object\u3001Array \u548C Null \u533A\u5206\uFF0C\u90FD\u8FD4\u56DE object",paraId:3,tocIndex:1},{value:`typeof 1; // number
typeof true; // boolean
typeof 'mc'; // string
typeof Symbol; //function
typeof function () {}; //function
typeof console.log(); //function
typeof []; // object
typeof {}; //object
typeof null; //object
typeof undefined; // undefined
typeof NaN; // number
`,paraId:4,tocIndex:1},{value:"instanceof \u540E\u9762\u7684\u6784\u9020\u51FD\u6570\u53BB\u524D\u9762\u7684\u5B9E\u4F8B\u5BF9\u8C61\u7684\u539F\u578B\u94FE\u4E0A\u627E\u672C\u8EAB\uFF0C\u627E\u5230\u4E86\u8FD4\u56DE true \u6CA1\u624E\u5230\u8FD4\u56DE false",paraId:5,tocIndex:2},{value:`
\u4F18\u70B9\uFF1A\u80FD\u591F\u533A\u5206 Array\u3001Object \u548C Function\uFF0C\u9002\u5408\u7528\u4E8E\u5224\u65AD\u81EA\u5B9A\u4E49\u7684\u7C7B\u5B9E\u4F8B\u5BF9\u8C61`,paraId:5,tocIndex:2},{value:`
\u7F3A\u70B9\uFF1ANumber\uFF0CBoolean\uFF0CString \u57FA\u672C\u6570\u636E\u7C7B\u578B\u4E0D\u80FD\u5224\u65AD`,paraId:5,tocIndex:2},{value:"\u81EA\u5B9A\u4E49 instanceof \u884C\u4E3A\u7684\u4E00\u79CD\u65B9\u5F0F\uFF0C\u8FD9\u91CC\u5C06\u539F\u6709\u7684 instanceof \u65B9\u6CD5\u91CD\u5B9A\u4E49\uFF0C\u6362\u6210\u4E86 typeof\uFF0C\u56E0\u6B64\u80FD\u591F\u5224\u65AD\u57FA\u672C\u6570\u636E\u7C7B\u578B\u3002\u540E\u53EF\u4EE5\u5224\u65AD",paraId:6,tocIndex:2},{value:`// {a:1} instanceof Object
// instanceof \u6362\u4E00\u79CD\u5199\u6CD5\u53EF\u4EE5\u8868\u793A\uFF1A Object[Symbol.hasInstance]({a:1})
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === 'number';
  }
}
console.log(111 instanceof PrimitiveNumber); // true
`,paraId:7,tocIndex:2},{value:"\u57FA\u672C\u7528\u6CD5",paraId:8,tocIndex:2},{value:`function a() {}
const obj = {};
const arr = [];
1 instanceof Number; // false
true instanceof Boolean; // false
'str' instanceof String; // false
a instanceof Function; // true
obj instanceof Object; // true
arr instanceof Array; // true
`,paraId:9,tocIndex:2},{value:"\u7CBE\u51C6\u5224\u65AD\u6570\u636E\u7C7B\u578B",paraId:10,tocIndex:3},{value:`const toString = Object.prototype.toString;
toString.call(1); // [object Number]
toString.call(true); //[object Boolean]
toString.call('mc'); // [object String]
`,paraId:11,tocIndex:3},{value:`[] + [] === ''; // true
'' + '' === ''; // true
[].toString() === ''; // true
`,paraId:12,tocIndex:4},{value:"\u5C06\u5DE6\u8FB9\u7684\u7A7A\u6570\u7EC4 [] \u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u7ED3\u679C\u662F ''\u3002",paraId:13,tocIndex:4},{value:`
\u5C06\u53F3\u8FB9\u7684\u7A7A\u6570\u7EC4 [] \u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u7ED3\u679C\u4E5F\u662F ''\u3002`,paraId:13,tocIndex:4},{value:`
\u7136\u540E\u5C06\u4E24\u4E2A\u7A7A\u5B57\u7B26\u4E32 ' ' \u62FC\u63A5\u5728\u4E00\u8D77\uFF0C\u5E76\u5F97\u5230\u6700\u7EC8\u7684\u7ED3\u679C ''\u3002`,paraId:13,tocIndex:4},{value:`[] + {} === '[object Object]';
{
}
+[] === 0; // {} \u88AB\u89E3\u91CA\u4E3A\u4E00\u4E2A\u7A7A\u7684\u4EE3\u7801\u5757\u800C\u4E0D\u662F\u4E00\u4E2A\u5BF9\u8C61\u3002
`,paraId:14,tocIndex:4},{value:"\u5F53\u4F60\u4F7F\u7528\u52A0\u53F7 (+) \u5C06\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u8FDB\u884C\u8FD0\u7B97\u65F6\uFF0CJavaScript \u5C06\u6570\u5B57\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32",paraId:15,tocIndex:4},{value:`
\u5F53\u4F60\u4F7F\u7528\u51CF\u53F7 (-) \u5C06\u6570\u5B57\u548C\u5B57\u7B26\u4E32\u8FDB\u884C\u8FD0\u7B97\u65F6\uFF0CJavaScript \u4F1A\u5C1D\u8BD5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u6210\u6570\u5B57`,paraId:15,tocIndex:4},{value:`9 + '1' === '91'; //true
9 - '1' === 8; // true
`,paraId:16,tocIndex:4}]}}]);
