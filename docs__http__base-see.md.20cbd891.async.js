"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2320],{56121:function(d,s,n){n.r(s);var _=n(72269),u=n(93359),c=n(61788),h=n(19977),m=n(91558),a=n(24268),x=n(96057),E=n(85939),i=n(53683),r=n(80936),o=n(67294),t=n(22508),e=n(85893);function l(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"sse-\u6D41\u5F0F\u4F20\u8F93",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sse-\u6D41\u5F0F\u4F20\u8F93",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SSE \u6D41\u5F0F\u4F20\u8F93"]}),(0,e.jsx)("p",{children:t.texts[0].value}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{target:"_blank",href:"https://juejin.cn/post/7355666189475954725",children:t.texts[1].value})}),(0,e.jsxs)("h2",{id:"sse-\u6280\u672F\u539F\u7406",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sse-\u6280\u672F\u539F\u7406",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SSE \u6280\u672F\u539F\u7406"]}),(0,e.jsxs)("p",{children:[t.texts[2].value,(0,e.jsx)("code",{children:t.texts[3].value}),t.texts[4].value]}),(0,e.jsx)(a.Z,{lang:"bash",children:t.texts[5].value}),(0,e.jsxs)("h2",{id:"sse-demo",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#sse-demo",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"SSE DEMO"]}),(0,e.jsxs)("h3",{id:"\u540E\u7AEF",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u540E\u7AEF",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u540E\u7AEF"]}),(0,e.jsx)(a.Z,{lang:"js",children:t.texts[6].value}),(0,e.jsxs)("h3",{id:"\u524D\u7AEF",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u524D\u7AEF",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u524D\u7AEF"]}),(0,e.jsx)(a.Z,{lang:"html",children:t.texts[7].value})]})})})})}s.default=l},22508:function(d,s,n){n.r(s),n.d(s,{texts:function(){return _}});const _=[{value:"SSE \u5168\u79F0\u4E3A Server-sent events , \u662F\u4E00\u79CD\u57FA\u4E8E HTTP \u534F\u8BAE\u7684\u901A\u4FE1\u6280\u672F\uFF0C\u5141\u8BB8\u670D\u52A1\u5668\u4E3B\u52A8\u5411\u5BA2\u6237\u7AEF\uFF08\u901A\u5E38\u662F Web \u6D4F\u89C8\u5668\uFF09\u53D1\u9001\u66F4\u65B0\u3002",paraId:0,tocIndex:0},{value:"\u53C2\u8003",paraId:1,tocIndex:0},{value:`\u524D\u6587\u8BF4\u5230\uFF0CSSE \u672C\u8D28\u662F\u4E00\u4E2A\u57FA\u4E8E http \u534F\u8BAE\u7684\u901A\u4FE1\u6280\u672F\u3002
\u56E0\u6B64\u60F3\u8981\u4F7F\u7528 \xA0SSE\xA0 \u6280\u672F\u6784\u5EFA\u9700\u8981\u670D\u52A1\u5668\u5B9E\u65F6\u63A8\u9001\u4FE1\u606F\u5230\u5BA2\u6237\u7AEF\u7684\u8FDE\u63A5\uFF0C\u53EA\u9700\u8981\u5C06\u4F20\u7EDF\u7684 \xA0http \u54CD\u5E94\u5934\u7684 `,paraId:2,tocIndex:1},{value:"contentType \u8BBE\u7F6E\u4E3A text/event-stream\xA0",paraId:2,tocIndex:1},{value:`\u3002
\u5E76\u4E14\u4E3A\u4E86\u4FDD\u8BC1\u5BA2\u6237\u7AEF\u5C55\u793A\u7684\u662F\u6700\u65B0\u6570\u636E\uFF0C\u9700\u8981\u5C06 \xA0Cache-Control \u8BBE\u7F6E\u4E3A no-cache\xA0\u3002
\u5728\u6B64\u57FA\u7840\u4E0A\uFF0CSSE\xA0 \u672C\u8D28\u662F\u4E00\u4E2A TCP \u8FDE\u63A5\uFF0C\u56E0\u6B64\u4E3A\u4E86\u4FDD\u8BC1 SSE \u7684\u6301\u7EED\u5F00\u542F\uFF0C\u9700\u8981\u5C06 \xA0Connection \u8BBE\u7F6E\u4E3A keep-alive\xA0\u3002`,paraId:2,tocIndex:1},{value:`Content-Type:\xA0text/event-stream
Cache-Control:\xA0no-cache
Connection:\xA0keep-alive
`,paraId:3,tocIndex:1},{value:`const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  let startTime = Date.now();

  const sendEvent = () => {
    //\xA0\u68C0\u67E5\u662F\u5426\u5DF2\u7ECF\u53D1\u9001\u4E8610\u79D2
    if (Date.now() - startTime >= 10000) {
      res.write('event:\xA0close\\ndata:\xA0{}\\n\\n'); //\xA0\u53D1\u9001\u4E00\u4E2A\u7279\u6B8A\u4E8B\u4EF6\u901A\u77E5\u5BA2\u6237\u7AEF\u5173\u95ED
      res.end(); //\xA0\u5173\u95ED\u8FDE\u63A5
      return;
    }

    const data = { message: 'Hello\xA0World', timestamp: new Date() };
    res.write(\`data:\xA0\${JSON.stringify(data)}\\n\\n\`); //\xA0\u6BCF\u96942\u79D2\u53D1\u9001\u4E00\u6B21\u6D88\u606F

    setTimeout(sendEvent, 2000);
  };

  sendEvent();
});

app.listen(PORT, () => {
  console.log(\`Server\xA0running\xA0on\xA0http://localhost:\${PORT}\`);
});
`,paraId:4,tocIndex:3},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    \xA0\xA0\xA0\xA0
    <meta charset="UTF-8" />
    \xA0\xA0\xA0\xA0
    <title>SSE\xA0Example</title>
  </head>

  <body>
    \xA0\xA0\xA0\xA0
    <h1>Server-Sent\xA0Events\xA0Example</h1>
    \xA0\xA0\xA0\xA0
    <div id="messages"></div>

    \xA0\xA0\xA0\xA0
    <script>
      const evtSource = new EventSource('/events');
      const messages = document.getElementById('messages');

      evtSource.onmessage = function (event) {
        const newElement = document.createElement('p');
        const eventObject = JSON.parse(event.data);
        newElement.textContent =
          'Message:\xA0' + eventObject.message + '\xA0at\xA0' + eventObject.timestamp;
        messages.appendChild(newElement);
      };
    <\/script>
  </body>
</html>
`,paraId:5,tocIndex:4}]}}]);
