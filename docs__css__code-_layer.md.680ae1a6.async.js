"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4692],{65077:function(d,l,t){t.r(l);var r=t(72269),u=t(93359),c=t(61788),m=t(19977),x=t(91558),a=t(24268),h=t(96057),v=t(85939),i=t(53683),_=t(80936),s=t(67294),n=t(79314),e=t(85893);function o(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(s.Suspense,{fallback:(0,e.jsx)(_.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"layer",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#layer",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"@layer"]}),(0,e.jsxs)("p",{children:[n.texts[0].value,(0,e.jsx)("br",{}),n.texts[1].value,(0,e.jsx)("br",{}),n.texts[2].value,(0,e.jsx)("br",{}),n.texts[3].value,(0,e.jsx)("br",{}),n.texts[4].value,(0,e.jsx)("br",{})]}),(0,e.jsxs)("p",{children:[n.texts[5].value,(0,e.jsx)("br",{})]}),(0,e.jsx)(a.Z,{lang:"css",children:n.texts[6].value}),(0,e.jsx)("p",{children:n.texts[7].value}),(0,e.jsx)(a.Z,{lang:"css",children:n.texts[8].value}),(0,e.jsx)("p",{children:n.texts[9].value}),(0,e.jsx)(a.Z,{lang:"css",children:n.texts[10].value}),(0,e.jsxs)("p",{children:[n.texts[11].value,(0,e.jsx)("br",{})]}),(0,e.jsx)("p",{children:(0,e.jsx)("code",{children:n.texts[12].value})}),(0,e.jsx)(a.Z,{lang:"html",children:n.texts[13].value}),(0,e.jsx)("p",{children:n.texts[14].value}),(0,e.jsx)("p",{children:n.texts[15].value}),(0,e.jsx)(a.Z,{lang:"css",children:n.texts[16].value}),(0,e.jsx)("p",{children:n.texts[17].value}),(0,e.jsx)("p",{children:n.texts[18].value}),(0,e.jsx)("p",{children:n.texts[19].value}),(0,e.jsx)("p",{children:n.texts[20].value}),(0,e.jsx)(a.Z,{lang:"html",children:n.texts[21].value}),(0,e.jsx)("p",{children:n.texts[22].value}),(0,e.jsx)("p",{children:n.texts[23].value}),(0,e.jsx)("p",{children:n.texts[24].value}),(0,e.jsx)("p",{children:n.texts[25].value})]})})})})}l.default=o},79314:function(d,l,t){t.r(l),t.d(l,{texts:function(){return r}});const r=[{value:"@layer \u7684\u8BED\u6CD5\u89C4\u5219",paraId:0,tocIndex:0},{value:`
@layer layer-name {rules}`,paraId:0,tocIndex:0},{value:`
@layer layer-name;`,paraId:0,tocIndex:0},{value:`
@layer layer-name, layer-name, layer-name;`,paraId:0,tocIndex:0},{value:`
@layer {rules}`,paraId:0,tocIndex:0},{value:"@layer \u7684\u521B\u5EFA",paraId:1,tocIndex:0},{value:`@layer base {
  .test {
    background-color: #f5f5f5;
    color: #333333;
  }
}
@layer components {
  font-size: 14px;
}
`,paraId:2,tocIndex:0},{value:"\u53EA\u5B9A\u4E49\u5177\u540D\u7EA7\u8054\u5C42\uFF0C\u5982\uFF1A",paraId:3,tocIndex:0},{value:`@layer base;
@layer components;
// \u4E5F\u53EF\u4EE5\u5408\u5E76\u5728\u4E00\u8D77
@layer base, components;

\u533F\u540D\u7EA7\u8054\u5C42\uFF0C\u5982\uFF1A @layer {
  background-color: #f5f5f5;
  color: #333;
}
`,paraId:4,tocIndex:0},{value:"\u4E0E @import \u4E00\u8D77\u4F7F\u7528\uFF0C\u5982\uFF1A",paraId:5,tocIndex:0},{value:`@import url(./base.css) layer(base);
// \u4E5F\u53EF\u4EE5\u662F\u533F\u540D\u7684\uFF0C\u5982
@import url(./base.css) layer;
`,paraId:6,tocIndex:0},{value:"\u6CA1\u6709\u8BBE\u7F6E !important \u7684\u60C5\u51B5\uFF1A",paraId:7,tocIndex:0},{value:"\u6CA1\u6709\u5206\u5C42\u7684\u6837\u5F0F\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u5176\u4ED6\u7684\u6309\u7167\u5B83\u4EEC\u58F0\u660E\u7684\u987A\u5E8F\u6392\u5E8F\u3002\u7B2C\u4E00\u5C42\u4F18\u5148\u7EA7\u6700\u4F4E\uFF0C\u6700\u540E\u4E00\u5C42\u4F18\u5148\u7EA7\u6700\u9AD8",paraId:8,tocIndex:0},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style type="text/css">
      /* \u672A\u5206\u5C42\u6837\u5F0F */
      .item {
        color: black;
      }
      @layer third {
        .item {
          color: red;
        }
      }
      @layer base {
        .item {
          color: blue;
        }
      }
      @layer components {
        .item {
          color: green;
        }
      }
      @layer utility {
        .item {
          color: white;
        }
      }
    </style>
  </head>
  <body>
    <div class="item">Hello, CSS Layer~</div>
  </body>
</html>
`,paraId:9,tocIndex:0},{value:"\u672A\u5206\u5C42\u6837\u5F0F > utility \u5C42 > components \u5C42 > base \u5C42 > third \u5C42",paraId:10,tocIndex:0},{value:"\u9700\u8981\u6CE8\u610F\u7684\u4E00\u4E2A\u5730\u65B9\u5C31\u662F\uFF0C\u4F18\u5148\u7EA7\u662F\u6309\u7167\u58F0\u660E\u7684\u5148\u540E\u987A\u5E8F\u6765\u51B3\u5B9A\u7684\u3002\u518D\u770B\u4E00\u4E0B\u4EE3\u7801\uFF1A",paraId:11,tocIndex:0},{value:`@layer third, base, components, utility;
@layer base {
  .item {
    color: white;
  }
}
@layer components {
  .item {
    color: white;
  }
}
@layer utility {
  .item {
    color: white;
  }
}
@layer third {
  .item {
    color: white;
  }
}
`,paraId:12,tocIndex:0},{value:"\u4E0A\u9762\u4EE3\u7801\u7684\u4F18\u5148\u7EA7\u4E3A\uFF1A",paraId:13,tocIndex:0},{value:"third < base < components < utility",paraId:14,tocIndex:0},{value:"\u5728\u8BBE\u7F6E !important \u7684\u60C5\u51B5\uFF1A",paraId:15,tocIndex:0},{value:"\u6CA1\u6709\u5206\u5C42\u7684\u6837\u5F0F\u4F18\u5148\u7EA7\u6700\u4F4E\uFF0C\u5176\u4ED6\u7684\u6309\u7167\u5B83\u4EEC\u58F0\u660E\u7684\u987A\u5E8F\u6392\u5E8F\u3002\u7B2C\u4E00\u5C42\u4F18\u5148\u7EA7\u6700\u9AD8\uFF0C\u6700\u540E\u4E00\u5C42\u4F18\u5148\u7EA7\u6700\u4F4E\u3002",paraId:16,tocIndex:0},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style type="text/css">
      /* \u672A\u5206\u5C42\u6837\u5F0F */
      .item {
        color: black !important;
      }
      @layer third {
        .item {
          color: red !important;
        }
      }
      @layer base {
        .item {
          color: blue !important;
        }
      }
      @layer components {
        .item {
          color: green !important;
        }
      }
      @layer utility {
        .item {
          color: white !important;
        }
      }
    </style>
  </head>
  <body>
    <div class="item">Hello, CSS Layer~</div>
  </body>
</html>
`,paraId:17,tocIndex:0},{value:"\u53EF\u4EE5\u770B\u51FA\u6700\u7EC8\u662F @layer third \u5C42\u8D77\u4F5C\u7528\u4E86\uFF0C\u4E0E\u6CA1\u6709\u4F7F\u7528 !important \u7684\u65F6\u5019\u4F18\u5148\u7EA7\u5B8C\u5168\u76F8\u53CD\u3002",paraId:18,tocIndex:0},{value:"\u4E0A\u8FF0\u4EE3\u7801\u7684\u6837\u5F0F\u4F18\u5148\u7EA7\u5982\u4E0B\uFF1A",paraId:19,tocIndex:0},{value:"third \u5C42 > base \u5C42 > components \u5C42 > utility \u5C42 > \u672A\u5206\u5C42\u6837\u5F0F",paraId:20,tocIndex:0},{value:"\u6700\u540E\u603B\u7ED3\u4E00\u4E0B layer\uFF1A\u867D\u7136 layer \u7684\u51FA\u73B0\u5E26\u6765\u4E86\u989D\u5916\u7684\u5B66\u4E60\u6210\u672C\uFF0C\u4F46\u76F8\u6BD4\u4E4B\u524D\u6EE5\u7528 !important \u7684\u65F6\u5019\u8FD8\u662F\u7ED9\u6211\u4EEC\u5E26\u6765\u4E86\u975E\u5E38\u5927\u7684\u4FBF\u5229\uFF0C\u6211\u4EEC\u5E94\u8BE5\u79EF\u6781\u53BB\u5B66\u4E60\u5B83\u3002",paraId:21,tocIndex:0}]}}]);
