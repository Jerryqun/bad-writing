"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8622],{69722:function(a,t,n){n.r(t);var r=n(72269),l=n(93359),c=n(61788),f=n(19977),x=n(91558),d=n(24268),h=n(96057),m=n(85939),u=n(53683),i=n(80936),s=n(67294),_=n(16481),e=n(85893);function o(){return(0,e.jsx)(u.dY,{children:(0,e.jsx)(s.Suspense,{fallback:(0,e.jsx)(i.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"buffer-nodejs-\u73AF\u5883",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#buffer-nodejs-\u73AF\u5883",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Buffer (Node.js \u73AF\u5883)"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsx)("p",{children:_.texts[1].value}),(0,e.jsxs)("p",{children:[_.texts[2].value,(0,e.jsx)("br",{}),_.texts[3].value]}),(0,e.jsx)(d.Z,{lang:"js",children:_.texts[4].value}),(0,e.jsx)("p",{children:_.texts[5].value}),(0,e.jsx)(d.Z,{lang:"js",children:_.texts[6].value}),(0,e.jsx)("p",{children:_.texts[7].value}),(0,e.jsx)(d.Z,{lang:"js",children:_.texts[8].value}),(0,e.jsx)("p",{children:_.texts[9].value}),(0,e.jsx)(d.Z,{lang:"js",children:_.texts[10].value}),(0,e.jsxs)("h3",{id:"\u65B0\u5EFA-buffer-\u4F1A\u5360\u7528-v8-\u5206\u914D\u7684\u5185\u5B58\u5417",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u65B0\u5EFA-buffer-\u4F1A\u5360\u7528-v8-\u5206\u914D\u7684\u5185\u5B58\u5417",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u65B0\u5EFA Buffer \u4F1A\u5360\u7528 V8 \u5206\u914D\u7684\u5185\u5B58\u5417"]}),(0,e.jsx)("p",{children:_.texts[11].value})]})})})})}t.default=o},16481:function(a,t,n){n.r(t),n.d(t,{texts:function(){return r}});const r=[{value:"Buffer \u5BF9\u8C61\u662F\u4E00\u4E2A\u7C7B\u4F3C\u4E8E\u6570\u7EC4\u7684\u5BF9\u8C61\uFF0C\u5B83\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u662F\u4E00\u4E2A\u8868\u793A 8 \u4F4D\u5B57\u8282\u7684\u6574\u6570\u3002",paraId:0,tocIndex:0},{value:"\u53EF\u4EE5\u5C06\u5176\u770B\u4F5C\u662F\u4E00\u4E2A\u5B57\u8282\u6570\u7EC4\uFF0C\u7528\u6765\u5B58\u50A8\u548C\u64CD\u4F5C\u4E8C\u8FDB\u5236\u6570\u636E\u3002",paraId:1,tocIndex:0},{value:"\u5E94\u7528\u573A\u666F",paraId:2,tocIndex:0},{value:`
1\u3001\u7F51\u7EDC\u901A\u4FE1\uFF1A\u53EF\u4EE5\u4F7F\u7528 Buffer.from()\u65B9\u6CD5\u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u636E\uFF0C\u7136\u540E\u4F7F\u7528 net \u6A21\u5757\u8FDB\u884C\u7F51\u7EDC\u901A\u4FE1\uFF1A`,paraId:2,tocIndex:0},{value:`const net = require('net');

const client = net.createConnection({ port: 8080 }, () => {
  // \u5C06\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u4E8C\u8FDB\u5236\u6570\u636E
  const data = Buffer.from('Hello, world!', 'utf8');

  // \u53D1\u9001\u6570\u636E
  client.write(data);
});
`,paraId:3,tocIndex:0},{value:"2\u3001\u6587\u4EF6\u64CD\u4F5C\uFF0C\u7528 Buffer \u6765\u5B58\u50A8\u6587\u4EF6\u6570\u636E\uFF1A",paraId:4,tocIndex:0},{value:`const fs = require('fs');

// \u8BFB\u53D6\u6587\u4EF6\uFF0C\u5E76\u5C06\u6570\u636E\u5B58\u50A8\u5230 Buffer \u5BF9\u8C61\u4E2D
const data = fs.readFileSync('/path/to/file');

// \u5904\u7406\u6570\u636E
// ...
`,paraId:5,tocIndex:0},{value:"3\u3001\u52A0\u5BC6\u89E3\u5BC6\uFF0C\u4F8B\u5982\uFF0C\u53EF\u4EE5\u4F7F\u7528 crypto \u6A21\u5757\u521B\u5EFA\u52A0\u5BC6\u89E3\u5BC6\u7B97\u6CD5\u9700\u8981\u7684\u4E8C\u8FDB\u5236\u6570\u636E\uFF1A",paraId:6,tocIndex:0},{value:`const crypto = require('crypto');

// \u521B\u5EFA\u52A0\u5BC6\u89E3\u5BC6\u7B97\u6CD5\u9700\u8981\u7684\u4E8C\u8FDB\u5236\u6570\u636E
const key = Buffer.from('mysecretkey', 'utf8');
const iv = Buffer.alloc(16);

// \u521B\u5EFA\u52A0\u5BC6\u89E3\u5BC6\u7B97\u6CD5\u5BF9\u8C61
const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);

// \u52A0\u5BC6\u6570\u636E
const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);
`,paraId:7,tocIndex:0},{value:"4\u3001\u56FE\u50CF\u5904\u7406\uFF1A",paraId:8,tocIndex:0},{value:`const fs = require('fs');
const sharp = require('sharp');

// \u8BFB\u53D6\u56FE\u7247\u6587\u4EF6\uFF0C\u5E76\u5C06\u6570\u636E\u5B58\u50A8\u5230 Buffer \u5BF9\u8C61\u4E2D
const data = fs.readFileSync('/path/to/image');

// \u5904\u7406\u56FE\u7247
sharp(data)
  .resize(200, 200)
  .toFile('/path/to/resized-image', (err, info) => {
    // ...
  });
`,paraId:9,tocIndex:0},{value:"\u4E0D\u4F1A\uFF0CBuffer \u5C5E\u4E8E\u5806\u5916\u5185\u5B58\uFF0C\u4E0D\u662F V8 \u5206\u914D\u7684\u3002\u5728\u5E95\u5C42\u5B83\u5206\u914D\u7684\u662F\u64CD\u4F5C\u7CFB\u7EDF\u7684\u5185\u5B58,V8 \u5806\u5185\u5B58\u9650\u5236\u53EA\u9488\u5BF9 JS \u5BF9\u8C61\u7B49\u5728 V8 \u5806\u4E0A\u7684\u5206\u914D",paraId:10,tocIndex:1}]}}]);
