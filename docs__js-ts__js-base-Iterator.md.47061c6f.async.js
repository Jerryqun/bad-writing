"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2314],{23971:function(o,r,e){e.r(r);var a=e(72269),l=e(93359),x=e(61788),b=e(19977),m=e(91558),_=e(24268),c=e(96057),j=e(85939),i=e(53683),d=e(80936),s=e(67294),t=e(81343),n=e(85893);function u(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(d.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"iterator-\u539F\u7406",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#iterator-\u539F\u7406",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Iterator \u539F\u7406"]}),(0,n.jsxs)("p",{children:[t.texts[0].value,(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:t.texts[1].value})]}),(0,n.jsx)(_.Z,{lang:"js",children:t.texts[2].value}),(0,n.jsxs)("h2",{id:"\u5982\u4F55\u8BA9-var-a-b--a-1-b-2-\u89E3\u6784\u8D4B\u503C\u6210\u529F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u8BA9-var-a-b--a-1-b-2-\u89E3\u6784\u8D4B\u503C\u6210\u529F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u8BA9 var [a, b] = {a: 1, b: 2} \u89E3\u6784\u8D4B\u503C\u6210\u529F"]}),(0,n.jsx)(_.Z,{lang:"js",children:t.texts[3].value}),(0,n.jsx)(_.Z,{lang:"js",children:t.texts[4].value}),(0,n.jsxs)("h2",{id:"iterator-\u7C7B\u578B",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#iterator-\u7C7B\u578B",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Iterator \u7C7B\u578B"]}),(0,n.jsxs)("p",{children:[t.texts[5].value,(0,n.jsx)("br",{}),t.texts[6].value,(0,n.jsx)("br",{}),t.texts[7].value,(0,n.jsx)("br",{}),t.texts[8].value]})]})})})})}r.default=u},81343:function(o,r,e){e.r(r),e.d(r,{texts:function(){return a}});const a=[{value:`\u6211\u4EEC\u5E38\u7528\u7684 for of \u5FAA\u73AF\uFF0C\u90FD\u662F\u901A\u8FC7\u8C03\u7528\u88AB\u5FAA\u73AF\u5BF9\u8C61\u7684\u4E00\u4E2A\u7279\u6B8A\u51FD\u6570 Iterator \u6765\u5B9E\u73B0\u7684\uFF0C
\u4F46\u662F\u4EE5\u524D\u8FD9\u4E2A\u51FD\u6570\u662F\u9690\u85CF\u7684\u6211\u4EEC\u65E0\u6CD5\u8BBF\u95EE\uFF0C \u4ECE Symbol \u5F15\u5165\u4E4B\u540E\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u901A\u8FC7 Symbol.iterator \u6765\u76F4\u63A5\u8BFB\u5199\u8FD9\u4E2A\u7279\u6B8A\u51FD\u6570\u3002
\u5BF9\u4E8E\u5FAA\u73AF\u8BED\u53E5\u6765\u8BF4\uFF0C\u4ED6\u5E76\u4E0D\u5173\u5FC3\u88AB\u5FAA\u73AF\u7684\u5BF9\u8C61\u5230\u5E95\u662F\u4EC0\u4E48\uFF0C\u4ED6\u53EA\u8D1F\u8D23\u8C03\u7528 data[Symbol.iterator] \u51FD\u6570\uFF0C\u7136\u540E\u6839\u636E\u8FD4\u56DE\u503C\u6765\u8FDB\u884C\u5FAA\u73AF\u3002
\u6240\u4EE5\u4EFB\u4F55\u5BF9\u8C61\u53EA\u8981\u63D0\u4F9B\u4E86\u6807\u51C6\u7684 Iterator \u63A5\u53E3\u5373\u53EF\u88AB\u5FAA\u73AF\uFF0C\u6BD4\u5982\u6211\u4EEC\u73B0\u5728\u6765\u521B\u9020\u4E00\u4E2A\u81EA\u5B9A\u4E49\u7684\u6570\u636E`,paraId:0,tocIndex:0},{value:"ES6 \u7ED9 Set\u3001Map\u3001Array\u3001String \u90FD\u52A0\u4E0A\u4E86[Symbol.iterator]\u65B9\u6CD5",paraId:0,tocIndex:0},{value:`const obj = { name: 'cq' };
for (let i of obj) {
  console.log('i', i);
} //  error: obj is not iterator

obj[Symbol.iterator] = function () {
  let index = 1;
  return {
    next: function () {
      return {
        done: index > 5,
        value: index++,
      };
    },
  };
};

for (let i of obj) {
  console.log('i', i);
} //  1 2 3 4 5

const arr = [1, 2, 3];
// \u901A\u8FC7\u8C03\u7528iterator\uFF0C\u62FF\u5230\u8FED\u4EE3\u5668\u5BF9\u8C61
const iterator = arr[Symbol.iterator]();

// \u5BF9\u8FED\u4EE3\u5668\u5BF9\u8C61\u6267\u884Cnext\uFF0C\u5C31\u80FD\u9010\u4E2A\u8BBF\u95EE\u96C6\u5408\u7684\u6210\u5458
iterator.next();
iterator.next();
iterator.next();

// \u901A\u8FC7\u8C03\u7528iterator\uFF0C\u62FF\u5230\u8FED\u4EE3\u5668\u5BF9\u8C61
const iterator = arr[Symbol.iterator]();

// \u521D\u59CB\u5316\u4E00\u4E2A\u8FED\u4EE3\u7ED3\u679C
let now = { done: false };

// \u5FAA\u73AF\u5F80\u5916\u8FED\u4EE3\u6210\u5458
while (!now.done) {
  now = iterator.next();
  if (!now.done) {
    console.log(\`\u73B0\u5728\u904D\u5386\u5230\u4E86\${now.value}\`);
  }
}
`,paraId:1,tocIndex:0},{value:`const obj = {
  a: '1',
  b: '2',
};
// const [a,b] = obj
// VM326:6 Uncaught TypeError: obj is not iterable
//     at <anonymous>:6:15
`,paraId:2,tocIndex:1},{value:`const obj = {
  a: '1',
  b: '2',
};
obj[Symbol.iterator] = function () {
  let keys = Object.keys(this);
  let index = 0;
  return {
    next: function () {
      return {
        done: index >= keys.length,
        value: obj[keys[index++]],
      };
    },
  };
};
const [a, b] = obj;
`,paraId:3,tocIndex:1},{value:"Array Iterator\uFF08\u6570\u7EC4\u8FED\u4EE3\u5668\uFF09",paraId:4,tocIndex:2},{value:`
String Iterator\uFF08\u5B57\u7B26\u4E32\u8FED\u4EE3\u5668\uFF09`,paraId:4,tocIndex:2},{value:`
Map Iterator\uFF08\u6620\u5C04\u8FED\u4EE3\u5668\uFF09`,paraId:4,tocIndex:2},{value:`
Set Iterator\uFF08\u96C6\u5408\u8FED\u4EE3\u5668\uFF09`,paraId:4,tocIndex:2}]}}]);
