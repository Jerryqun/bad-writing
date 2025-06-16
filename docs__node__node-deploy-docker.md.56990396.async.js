"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4837],{70889:function(a,_,n){n.r(_);var r=n(72269),u=n(93359),c=n(61788),h=n(19977),m=n(91558),t=n(24268),x=n(96057),E=n(85939),l=n(53683),o=n(80936),i=n(67294),d=n(52323),e=n(85893);function s(){return(0,e.jsx)(l.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"docker",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#docker",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Docker"]}),(0,e.jsx)("p",{children:d.texts[0].value}),(0,e.jsxs)("h2",{id:"docker-\u5B89\u88C5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#docker-\u5B89\u88C5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Docker \u5B89\u88C5"]}),(0,e.jsxs)("p",{children:[d.texts[1].value,(0,e.jsx)("a",{href:"https://smartide.cn/zh/docs/install/docker/osx/",children:d.texts[2].value})]}),(0,e.jsx)("p",{children:d.texts[3].value}),(0,e.jsx)(t.Z,{lang:"bash",children:d.texts[4].value}),(0,e.jsxs)("h2",{id:"\u8BBE\u7F6E-docker-\u4EE3\u7406",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8BBE\u7F6E-docker-\u4EE3\u7406",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u8BBE\u7F6E docker \u4EE3\u7406"]}),(0,e.jsxs)("p",{children:[d.texts[5].value,(0,e.jsx)("br",{}),d.texts[6].value]}),(0,e.jsx)(t.Z,{lang:"json",children:d.texts[7].value}),(0,e.jsx)("p",{children:d.texts[8].value}),(0,e.jsx)(t.Z,{lang:"bash",children:d.texts[9].value})]})})})})}_.default=s},52323:function(a,_,n){n.r(_),n.d(_,{texts:function(){return r}});const r=[{value:"Docker \u662F\u4E00\u4E2A\u5F00\u6E90\u7684\u5BB9\u5668\u5316\u5E73\u53F0\uFF0C\u5B83\u5141\u8BB8\u5F00\u53D1\u8005\u5C06\u5E94\u7528\u7A0B\u5E8F\u53CA\u5176\u4F9D\u8D56\u9879\u6253\u5305\u6210\u5BB9\u5668\u3002\u5BB9\u5668\u662F\u4E00\u79CD\u8F7B\u91CF\u7EA7\u3001\u53EF\u79FB\u690D\u7684\u3001\u81EA\u7ED9\u81EA\u8DB3\u7684\u8F6F\u4EF6\u5305\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4EE3\u7801\u8FD0\u884C\u7684\u4E00\u81F4\u73AF\u5883\uFF0C\u65E0\u8BBA\u5B83\u5728\u5F00\u53D1\u3001\u6D4B\u8BD5\u8FD8\u662F\u751F\u4EA7\u73AF\u5883\u4E2D\u8FD0\u884C\u3002",paraId:0,tocIndex:0},{value:"\u901A\u8FC7\u94FE\u63A5 ",paraId:1,tocIndex:1},{value:"https://smartide.cn/zh/docs/install/docker/osx/",paraId:1,tocIndex:1},{value:`\u9009\u62E9\u5BF9\u5E94\u82AF\u7247\u7684\u7248\u672C\uFF0C\u5B89\u88C5\u684C\u9762\u7A0B\u5E8F\u3002
\u5B89\u88C5\u5B8C\u6BD5\u540E\uFF0C\u53EF\u4EE5\u5728\u7EC8\u7AEF\u901A\u8FC7\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u53BB\u5224\u65AD\u662F\u5426\u5B89\u88C5\u6210\u529F:`,paraId:2,tocIndex:1},{value:`docker -v

// Docker version 20.10.8, build 3967b7d
`,paraId:3,tocIndex:1},{value:"\u542F\u52A8\u684C\u9762 docker \u5E94\u7528\u540E\uFF0C\u4FEE\u6539 docker engine \u8BBE\u7F6E\uFF0C\u65B9\u4FBF\u52A0\u5FEB\u62C9\u53D6\u955C\u50CF\u7684\u901F\u5EA6",paraId:4,tocIndex:2},{value:`
\u7C7B\u4F3C\u4E8E\u6211\u4EEC\u7684 npm registry \u914D\u7F6E`,paraId:4,tocIndex:2},{value:`{
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "builder": {
    "gc": {
      "enabled": true,
      "defaultKeepStorage": "20GB"
    }
  },
  "debug": true,
  "registry-mirrors": [
    "https://hub.uuuadc.top/",
    "https://docker.anyhub.us.kg/",
    "https://dockerhub.jobcher.com/",
    "https://dockerhub.icu/",
    "https://docker.ckyl.me/",
    "https://docker.awsl9527.cn/"
  ]
}
`,paraId:5,tocIndex:2},{value:"\u6D4B\u8BD5 docker \u4EE3\u7406\u8BBE\u7F6E\u662F\u5426\u6210\u529F",paraId:6,tocIndex:2},{value:`docker start hello-world // \u542F\u52A8hello-world\u670D\u52A1\uFF0C\u672C\u5730\u6CA1\u6709\u6240\u4EE5\u4F1A\u62C9\u53D6\u8FDC\u7A0B\u5E93\u53BB\u542F\u52A8

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
478afc919002: Pull complete
Digest: sha256:94323f3e5e09a8b9515d74337010375a456c909543e1ff1538f5116d38ab3989
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

// \u542F\u52A8\u6210\u529F\u4E86
`,paraId:7,tocIndex:2}]}}]);
