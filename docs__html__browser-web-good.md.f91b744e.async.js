"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[191],{14337:function(i,_,n){n.r(_);var d=n(72269),o=n(93359),h=n(61788),x=n(19977),c=n(91558),a=n(24268),m=n(96057),I=n(85939),r=n(53683),s=n(80936),l=n(67294),t=n(4588),e=n(85893);function u(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(s.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"web-\u6027\u80FD\u68C0\u6D4B\u5DE5\u5177",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#web-\u6027\u80FD\u68C0\u6D4B\u5DE5\u5177",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"web \u6027\u80FD\u68C0\u6D4B\u5DE5\u5177"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{target:"_blank",href:"https://juejin.cn/post/6965744691979485197",children:t.texts[0].value})}),(0,e.jsxs)("h3",{id:"lighthouse",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#lighthouse",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Lighthouse"]}),(0,e.jsx)("p",{children:t.texts[1].value}),(0,e.jsxs)("ol",{children:[(0,e.jsx)("li",{children:t.texts[2].value}),(0,e.jsx)("li",{children:t.texts[3].value})]}),(0,e.jsx)(a.Z,{lang:"bash",children:t.texts[4].value}),(0,e.jsxs)("h3",{id:"performance",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#performance",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Performance"]}),(0,e.jsx)("p",{children:t.texts[5].value}),(0,e.jsx)("p",{children:t.texts[6].value}),(0,e.jsx)(a.Z,{lang:"js",children:t.texts[7].value}),(0,e.jsxs)("h2",{id:"\u6027\u80FD\u6307\u6807",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6027\u80FD\u6307\u6807",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6027\u80FD\u6307\u6807"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:t.texts[8].value}),(0,e.jsxs)("li",{children:[t.texts[9].value,(0,e.jsx)("br",{}),t.texts[10].value]}),(0,e.jsxs)("li",{children:[t.texts[11].value,(0,e.jsx)("br",{}),t.texts[12].value]}),(0,e.jsx)("li",{children:t.texts[13].value}),(0,e.jsx)("li",{children:t.texts[14].value}),(0,e.jsx)("li",{children:t.texts[15].value})]})]})})})})}_.default=u},4588:function(i,_,n){n.r(_),n.d(_,{texts:function(){return d}});const d=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"Lighthouse \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u81EA\u52A8\u5316\u5DE5\u5177\uFF0C\u7531 Google \u63D0\u4F9B\uFF0C\u7528\u4E8E\u63D0\u9AD8\u7F51\u9875\u7684\u8D28\u91CF\u3002\u5B83\u53EF\u4EE5\u5BF9\u7F51\u9875\u8FDB\u884C\u8BC4\u4F30\uFF0C\u63D0\u4F9B\u6709\u5173\u6027\u80FD\u3001\u53EF\u8BBF\u95EE\u6027\u3001\u6E10\u8FDB\u5F0F Web \u5E94\u7528\u7A0B\u5E8F\u3001SEO \u548C\u6700\u4F73\u5B9E\u8DF5\u7684\u6307\u6807\u3002Lighthouse \u53EF\u4EE5\u4F5C\u4E3A Chrome \u6D4F\u89C8\u5668\u7684\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u7684\u4E00\u4E2A\u9009\u9879\u5361\u8FD0\u884C\uFF0C\u4E5F\u53EF\u4EE5\u4F5C\u4E3A\u4E00\u4E2A\u547D\u4EE4\u884C\u5DE5\u5177\u6216 Node \u6A21\u5757\u4F7F\u7528\u3002\u4EE5\u4E0B\u662F Lighthouse \u7684\u4E00\u4E9B\u4F7F\u7528\u65B9\u6CD5\uFF1A",paraId:1,tocIndex:1},{value:"Chrome \u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u4F7F\u7528",paraId:2,tocIndex:1},{value:"\u547D\u4EE4\u884C\u5DE5\u5177\u4F7F\u7528",paraId:2,tocIndex:1},{value:`npm install -g lighthouse
lighthouse https://www.baidu.com/ --view

`,paraId:3,tocIndex:1},{value:"\u6D4F\u89C8\u5668\u83B7\u53D6\u7F51\u9875\u65F6\uFF0C\u4F1A\u5BF9\u7F51\u9875\u4E2D\u6BCF\u4E00\u4E2A\u5BF9\u8C61\uFF08\u811A\u672C\u6587\u4EF6\u3001\u6837\u5F0F\u8868\u3001\u56FE\u7247\u6587\u4EF6\u7B49\u7B49\uFF09\u53D1\u51FA\u4E00\u4E2A HTTP \u8BF7\u6C42\u3002\u800C\u901A\u8FC7 window.performance.getEntries \u65B9\u6CD5\uFF0C",paraId:4,tocIndex:2},{value:"\u5219\u53EF\u4EE5\u4EE5\u6570\u7EC4\u5F62\u5F0F\uFF0C\u8FD4\u56DE\u8FD9\u4E9B\u8BF7\u6C42\u7684\u65F6\u95F4\u7EDF\u8BA1\u4FE1\u606F\uFF0C\u6BCF\u4E2A\u6570\u7EC4\u6210\u5458\u5747\u662F\u4E00\u4E2A PerformanceResourceTiming \u5BF9\u8C61\uFF01",paraId:5,tocIndex:2},{value:`(function () {
  // \u6D4F\u89C8\u5668\u4E0D\u652F\u6301\uFF0C\u5C31\u7B97\u4E86\uFF01
  if (!window.performance && !window.performance.getEntries) {
    return false;
  }

  var result = [];
  // \u83B7\u53D6\u5F53\u524D\u9875\u9762\u6240\u6709\u8BF7\u6C42\u5BF9\u5E94\u7684PerformanceResourceTiming\u5BF9\u8C61\u8FDB\u884C\u5206\u6790
  window.performance.getEntries().forEach(function (perf) {
    result.push({
      url: perf.name,
      entryType: perf.entryType,
      type: perf.initiatorType,
      'duration(ms)': perf.duration,
    });
  });

  // \u63A7\u5236\u53F0\u8F93\u51FA\u7EDF\u8BA1\u7ED3\u679C
  console.table(result);
})();
`,paraId:6,tocIndex:2},{value:"FirstPaint\uFF08FP\uFF09",paraId:7,tocIndex:3},{value:"First Contentful Paint(FCP)",paraId:7,tocIndex:3},{value:`
\u7B2C\u4E00\u6B21\u6709\u5185\u5BB9\u7684\u6E32\u67D3`,paraId:7,tocIndex:3},{value:"LCP",paraId:7,tocIndex:3},{value:`
\u7B2C\u4E00\u6B21\u6709\u610F\u4E49\u7684\u6E32\u67D3`,paraId:7,tocIndex:3},{value:"DomContentLoaded(DCL)",paraId:7,tocIndex:3},{value:"Largest Contentful Paint(LCP)",paraId:7,tocIndex:3},{value:"Load(L)",paraId:7,tocIndex:3}]}}]);
