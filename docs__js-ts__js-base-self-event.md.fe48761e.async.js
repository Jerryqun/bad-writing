"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1149],{85583:function(d,t,n){n.r(t);var e=n(72269),a=n(93359),E=n(61788),m=n(19977),h=n(91558),i=n(24268),v=n(96057),b=n(85939),o=n(53683),u=n(80936),r=n(67294),s=n(62658),_=n(85893);function l(){return(0,_.jsx)(o.dY,{children:(0,_.jsx)(r.Suspense,{fallback:(0,_.jsx)(u.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u81EA\u5B9A\u4E49\u4E8B\u4EF6",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u81EA\u5B9A\u4E49\u4E8B\u4EF6",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u81EA\u5B9A\u4E49\u4E8B\u4EF6"]}),(0,_.jsx)(i.Z,{lang:"js",children:s.texts[0].value})]})})})})}t.default=l},62658:function(d,t,n){n.r(t),n.d(t,{texts:function(){return e}});const e=[{value:`//js \u81EA\u5B9A\u4E49\u4E8B\u4EF6 Event
// \u7528\u6CD5\uFF1A\u7B2C\u4E00\u4E2A\u53C2\u6570\u662F\u4E8B\u4EF6\u540D\u79F0\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4FEE\u9970\u7B26\uFF0C\u901A\u8FC7dispatchEvent\u6D3E\u53D1\uFF0CaddEventListener\u8C03\u7528

import { Button } from 'antd';
export default () => {
  let event = new Event('XX', { cancelable: false, bubbles: true });
  addEventListener('XX', function () {
    console.log(1212);
  });
  return (
    <Button
      onClick={() => {
        document.dispatchEvent(event);
      }}
    >
      hello
    </Button>
  );
};

/**
 * <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>\u83DC\u9E1F\u6559\u7A0B(runoob.com)</title>
</head>

<body>
    <button>\u6309\u94AE</button>
</body>

<script>
    let myEvent = document.createEvent('CustomEvent');
    myEvent.initEvent('myEvent', true, true)
    let btn = document.querySelector('button')
    btn.addEventListener('myEvent', function (e) {
        console.log(e)
        console.log(e.detail)
    })
    setTimeout(() => {
        btn.dispatchEvent(myEvent)
    }, 2000)
<\/script>
</html>
 */
`,paraId:0,tocIndex:0}]}}]);
