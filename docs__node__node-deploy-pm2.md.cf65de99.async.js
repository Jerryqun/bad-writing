"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9354],{37505:function(u,d,e){e.r(d);var t=e(72269),o=e(93359),h=e(61788),x=e(19977),c=e(91558),a=e(24268),m=e(96057),E=e(85939),i=e(53683),s=e(80936),l=e(67294),_=e(70682),n=e(85893);function r(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(s.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"pm2-\u90E8\u7F72-node-\u670D\u52A1",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#pm2-\u90E8\u7F72-node-\u670D\u52A1",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"pm2 \u90E8\u7F72 node \u670D\u52A1"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://blog.csdn.net/qq_32445707/article/details/120898799",target:"_blank",rel:"noreferrer",children:_.texts[0].value})}),(0,n.jsx)("p",{children:_.texts[1].value}),(0,n.jsx)(a.Z,{lang:"bash",children:_.texts[2].value}),(0,n.jsxs)("h2",{id:"\u4E00\u822C\u7684node-\u5E94\u7528\u90E8\u7F72\u7684\u65F6\u5019\u9700\u8981\u6784\u5EFA\u5417",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E00\u822C\u7684node-\u5E94\u7528\u90E8\u7F72\u7684\u65F6\u5019\u9700\u8981\u6784\u5EFA\u5417",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4E00\u822C\u7684node \u5E94\u7528\u90E8\u7F72\u7684\u65F6\u5019\u9700\u8981\u6784\u5EFA\u5417"]}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:_.texts[3].value}),(0,n.jsx)("li",{children:_.texts[4].value}),(0,n.jsx)("li",{children:_.texts[5].value})]}),(0,n.jsxs)("h2",{id:"gitpage\u90E8\u7F72\u81EA\u52A8\u90E8\u7F72",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#gitpage\u90E8\u7F72\u81EA\u52A8\u90E8\u7F72",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"gitpage\u90E8\u7F72\uFF08\u81EA\u52A8\u90E8\u7F72\uFF09"]}),(0,n.jsx)("ol",{children:(0,n.jsx)("li",{children:_.texts[6].value})}),(0,n.jsx)(a.Z,{lang:"bash",children:_.texts[7].value}),(0,n.jsxs)("ol",{start:"2",children:[(0,n.jsxs)("li",{children:[_.texts[8].value,(0,n.jsx)("code",{children:_.texts[9].value}),_.texts[10].value]}),(0,n.jsx)("li",{children:_.texts[11].value})]})]})})})})}d.default=r},70682:function(u,d,e){e.r(d),e.d(d,{texts:function(){return t}});const t=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"PM2 \u662F\u5E38\u7528\u7684 node \u8FDB\u7A0B\u7BA1\u7406\u5DE5\u5177\uFF0C\u5B83\u53EF\u4EE5\u63D0\u4F9B node.js \u5E94\u7528\u7BA1\u7406\uFF0C\u5982\u81EA\u52A8\u91CD\u8F7D\u3001\u6027\u80FD\u76D1\u63A7\u3001\u8D1F\u8F7D\u5747\u8861\u7B49\u3002\u540C\u7C7B\u5DE5\u5177\u6709 Supervisor\u3001Forever \u7B49\u3002",paraId:1,tocIndex:0},{value:`pm2 stop xxx \uFF1A\u7ED3\u675F\u67D0\u9879\u8FDB\u7A0B

pm2 stop all \uFF1A\u7ED3\u675F\u6240\u6709\u8FDB\u7A0B

pm2 restart xxx \uFF1A\u91CD\u542F\u67D0\u9879\u8FDB\u7A0B

pm2 delete xxx \uFF1A\u5220\u9664\u67D0\u9879\u8FDB\u7A0B
`,paraId:2,tocIndex:0},{value:"\u5BF9\u4E8E\u4F20\u7EDF\u7684 Node.js \u540E\u7AEF\u5E94\u7528\uFF1A\u901A\u5E38\u4E0D\u9700\u8981\u6784\u5EFA\uFF0C\u76F4\u63A5\u590D\u5236\u4EE3\u7801\u5E76\u8FD0\u884C\u5373\u53EF\u3002",paraId:3,tocIndex:1},{value:"\u5BF9\u4E8E\u4F7F\u7528 TypeScript \u7684\u5E94\u7528\uFF1A\u9700\u8981\u5148\u8FDB\u884C\u7F16\u8BD1\u3002",paraId:3,tocIndex:1},{value:"\u5BF9\u4E8E\u5168\u6808\u5E94\u7528\u6216\u9700\u8981\u6784\u5EFA\u7684\u524D\u7AEF\u6846\u67B6\uFF1A\u9700\u8981\u8FD0\u884C\u6784\u5EFA\u547D\u4EE4\u3002",paraId:3,tocIndex:1},{value:"\u65B0\u5EFA .github/workflows/gh-pages.yml \u6587\u4EF6",paraId:4,tocIndex:2},{value:`
name: github pages

on:
  push:
    branches:
      - main # default branch

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          # \u5982\u679C\u914D\u7F6E themeConfig.lastUpdated \u4E3A false\uFF0C\u5219\u4E0D\u9700\u8981\u6DFB\u52A0\u8BE5\u53C2\u6570\u4EE5\u52A0\u5FEB\u68C0\u51FA\u901F\u5EA6
          fetch-depth: 0
      - name: Install dependencies
        run: npm install
      - name: Build with dumi
        # \u6587\u6863\u7F16\u8BD1\u547D\u4EE4\uFF0C\u5982\u679C\u662F react \u6A21\u677F\u9700\u8981\u4FEE\u6539\u4E3A npm run docs:build
        run: npm run build
      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          # \u6587\u6863\u76EE\u5F55\uFF0C\u5982\u679C\u662F react \u6A21\u677F\u9700\u8981\u4FEE\u6539\u4E3A docs-dist
          publish_dir: ./dist
`,paraId:5,tocIndex:2},{value:"\u6784\u5EFA\u8F93\u51FAbase\u76EE\u5F55\u4E3A ",paraId:6,tocIndex:2},{value:"/\u4ED3\u5E93\u540D\u79F0/",paraId:6,tocIndex:2},{value:" \u5982 '/my-github-project/'",paraId:6,tocIndex:2},{value:`git\u5B98\u7F51
Setting => Pages => Branch\u9009\u62E9gh-pages`,paraId:6,tocIndex:2}]}}]);
