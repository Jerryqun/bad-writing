"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3973],{60087:function(_,a,t){t.r(a);var d=t(72269),x=t(93359),o=t(61788),c=t(19977),v=t(91558),s=t(24268),h=t(96057),I=t(85939),l=t(53683),r=t(80936),u=t(67294),n=t(15974),e=t(85893);function i(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"es6-\u6709\u54EA\u4E9B\u65B0\u7279\u6027",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#es6-\u6709\u54EA\u4E9B\u65B0\u7279\u6027",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"ES6 \u6709\u54EA\u4E9B\u65B0\u7279\u6027"]}),(0,e.jsxs)("p",{children:[n.texts[0].value,(0,e.jsx)("br",{})]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:n.texts[1].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:n.texts[2].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:n.texts[3].value})}),(0,e.jsx)("li",{children:(0,e.jsx)("p",{children:n.texts[4].value})})]}),(0,e.jsx)(s.Z,{lang:"js",children:n.texts[5].value}),(0,e.jsx)("ul",{children:(0,e.jsx)("li",{children:n.texts[6].value})}),(0,e.jsx)(s.Z,{lang:"js",children:n.texts[7].value}),(0,e.jsxs)("p",{children:[n.texts[8].value,(0,e.jsx)("br",{}),n.texts[9].value]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:(0,e.jsxs)("p",{children:[n.texts[10].value,(0,e.jsx)("br",{}),n.texts[11].value,(0,e.jsx)("br",{}),n.texts[12].value,(0,e.jsx)("br",{}),n.texts[13].value,(0,e.jsx)("br",{})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("p",{children:[n.texts[14].value,(0,e.jsx)("br",{}),n.texts[15].value,(0,e.jsx)("br",{}),n.texts[16].value,(0,e.jsx)("br",{}),n.texts[17].value,(0,e.jsx)("br",{})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("p",{children:[n.texts[18].value,(0,e.jsx)("br",{}),n.texts[19].value,(0,e.jsx)("br",{}),n.texts[20].value,(0,e.jsx)("br",{})]})}),(0,e.jsx)("li",{children:(0,e.jsxs)("p",{children:[n.texts[21].value,(0,e.jsx)("br",{}),n.texts[22].value,(0,e.jsx)("br",{}),n.texts[23].value,(0,e.jsx)("br",{}),n.texts[24].value,(0,e.jsx)("br",{})]})})]}),(0,e.jsx)("p",{children:n.texts[25].value})]})})})})}a.default=i},15974:function(_,a,t){t.r(a),t.d(a,{texts:function(){return d}});const d=[{value:"\u4E00\u3001\u8BED\u6CD5",paraId:0,tocIndex:0},{value:`let \u548C const \u7684\u5757\u7EA7\u4F5C\u7528\u57DF
let\u3001const \u58F0\u660E\u7684\u53D8\u91CF\uFF0C\u5728 for\uFF0Cif \u8BED\u53E5\u4E2D\uFF0C\u4F1A\u5F62\u6210\u5757\u7EA7\u4F5C\u7528\u57DF\uFF0C\u5757\u7EA7\u4F5C\u7528\u57DF\u5185\u7684\u53D8\u91CF\uFF0C\u4E0D\u80FD\u88AB\u4F5C\u7528\u57DF\u5916\u90E8\u4F7F\u7528
let\u3001const \u58F0\u660E\u53D8\u91CF\u4E0D\u518D\u4F1A\u6709\u58F0\u660E\u63D0\u5347\uFF0C\u5728\u53D8\u91CF\u58F0\u660E\u4E4B\u524D\u4F7F\u7528\u8FD0\u884C\u65F6\u4F1A\u62A5\u9519`,paraId:1,tocIndex:0},{value:`\u89E3\u6784\u8D4B\u503C\u3001\u5C55\u5F00\u3001\u53C2\u6570\u9ED8\u8BA4\u503C\u3001\u6A21\u677F\u5B57\u7B26\u4E32
\u89E3\u6784\u8D4B\u503C\u65F6\u6CE8\u610F null \u548C undefined`,paraId:2,tocIndex:0},{value:"\u540C\u540D\u5C5E\u6027\u53EF\u4EE5\u7701\u7565 key:value \u5F62\u5F0F\uFF0C\u76F4\u63A5 key",paraId:3,tocIndex:0},{value:"\u51FD\u6570\u53EF\u4EE5\u7701\u7565 key\uFF1Avalue \u5F62\u5F0F \u76F4\u63A5 func()",paraId:4,tocIndex:0},{value:`const obj = {
  fn_name() {
    console.log('work');
  },
};
obj.fn_name(); // work
`,paraId:5,tocIndex:0},{value:"\u8BA1\u7B97\u5C5E\u6027",paraId:6,tocIndex:0},{value:`const methodPrefix = 'fetch';

class MyService {
  [methodPrefix + 'Data']() {
    console.log('Data fetched');
  }
  [Math.random()]: 11122;

  get [methodPrefix + 'Status']() {
    return 'Fetching status...';
  }

  set [methodPrefix + 'Status'](value) {
    console.log(\`Status set to \${value}\`);
  }
}

const service = new MyService();

service.fetchData(); // \u8F93\u51FA: Data fetched
console.log(service.fetchStatus); // \u8F93\u51FA: Fetching status...
service.fetchStatus = 'Complete'; // \u8F93\u51FA: Status set to Complete
`,paraId:7,tocIndex:0},{value:"\u4E8C\u3001\u5168\u65B0\u7684\u6570\u636E\u7C7B\u578B\u548C\u6570\u636E\u7ED3\u6784",paraId:8,tocIndex:0},{value:`
Symbol Set Map WeakSet WeakMap`,paraId:8,tocIndex:0},{value:"Set",paraId:9,tocIndex:0},{value:`
\u6210\u5458\u4E0D\u80FD\u91CD\u590D`,paraId:9,tocIndex:0},{value:`
\u53EA\u6709\u5065\u503C\uFF0C\u6CA1\u6709\u5065\u540D\uFF0C\u6709\u70B9\u7C7B\u4F3C\u6570\u7EC4`,paraId:9,tocIndex:0},{value:`
\u53EF\u4EE5\u904D\u5386\uFF0C\u65B9\u6CD5\u6709 add, delete,has`,paraId:9,tocIndex:0},{value:"weakSet",paraId:10,tocIndex:0},{value:`
\u6210\u5458\u90FD\u662F\u5BF9\u8C61`,paraId:10,tocIndex:0},{value:`
\u6210\u5458\u90FD\u662F\u5F31\u5F15\u7528\uFF0C\u968F\u65F6\u53EF\u4EE5\u6D88\u5931\u3002 \u53EF\u4EE5\u7528\u6765\u4FDD\u5B58 DOM \u8282\u70B9\uFF0C\u4E0D\u5BB9\u6613\u9020\u6210\u5185\u5B58\u6CC4\u6F0F`,paraId:10,tocIndex:0},{value:`
\u4E0D\u80FD\u904D\u5386\uFF0C\u65B9\u6CD5\u6709 add, delete,has`,paraId:10,tocIndex:0},{value:"Map",paraId:11,tocIndex:0},{value:`
\u672C\u8D28\u4E0A\u662F\u5065\u503C\u5BF9\u7684\u96C6\u5408\uFF0C\u7C7B\u4F3C\u96C6\u5408`,paraId:11,tocIndex:0},{value:`
\u53EF\u4EE5\u904D\u5386\uFF0C\u65B9\u6CD5\u5F88\u591A\uFF0C\u53EF\u4EE5\u5E72\u8DDF\u5404\u79CD\u6570\u636E\u683C\u5F0F\u8F6C\u6362`,paraId:11,tocIndex:0},{value:"weakMap",paraId:12,tocIndex:0},{value:`
\u76F4\u63A5\u53D7\u5BF9\u8C61\u4F5C\u4E3A\u5065\u540D\uFF08null \u9664\u5916\uFF09\uFF0C\u4E0D\u63A5\u53D7\u5176\u4ED6\u7C7B\u578B\u7684\u503C\u4F5C\u4E3A\u5065\u540D`,paraId:12,tocIndex:0},{value:`
\u5065\u540D\u6240\u6307\u5411\u7684\u5BF9\u8C61\uFF0C\u4E0D\u8BA1\u5165\u5783\u573E\u56DE\u6536\u673A\u5236`,paraId:12,tocIndex:0},{value:`
\u4E0D\u80FD\u904D\u5386\uFF0C\u65B9\u6CD5\u540C get,set,has,delete`,paraId:12,tocIndex:0},{value:`\u4E09\u3001\u5168\u65B0\u7684\u5BF9\u8C61\u3001\u5168\u65B0\u7684\u65B9\u6CD5\u3001\u5168\u65B0\u7684\u529F\u80FD
\u6BD4\u5982 promise\u3001proxy\u3001object \u7684 assign\u3001is`,paraId:13,tocIndex:0}]}}]);
