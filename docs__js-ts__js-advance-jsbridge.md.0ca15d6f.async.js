"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9256],{69655:function(t,d,_){_.r(d);var i=_(72269),l=_(93359),m=_(61788),c=_(19977),h=_(91558),r=_(24268),E=_(96057),x=_(85939),a=_(53683),s=_(80936),o=_(67294),e=_(48743),n=_(85893);function u(){return(0,n.jsx)(a.dY,{children:(0,n.jsx)(o.Suspense,{fallback:(0,n.jsx)(s.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"jsbridge",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#jsbridge",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"JSBridge"]}),(0,n.jsx)("p",{children:e.texts[0].value}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://juejin.cn/post/6844903585268891662",target:"_blank",children:e.texts[1].value})}),(0,n.jsx)("p",{children:e.texts[2].value}),(0,n.jsxs)("h3",{id:"\u8BF7\u63CF\u8FF0-js-bridge-\u7684\u5B9E\u73B0\u539F\u7406",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8BF7\u63CF\u8FF0-js-bridge-\u7684\u5B9E\u73B0\u539F\u7406",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u8BF7\u63CF\u8FF0 js-bridge \u7684\u5B9E\u73B0\u539F\u7406"]}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:e.texts[3].value}),(0,n.jsx)("li",{children:e.texts[4].value})]}),(0,n.jsx)(r.Z,{lang:"js",children:e.texts[5].value})]})})})})}d.default=u},48743:function(t,d,_){_.r(d),_.d(d,{texts:function(){return i}});const i=[{value:"js \u65E0\u6CD5\u76F4\u63A5\u8C03\u7528 native API\u3001\u9700\u8981\u901A\u8FC7\u4E00\u4E9B\u7279\u5B9A\u7684\u683C\u5F0F\u6765\u8C03\u7528 \u4F8B\u5982\u5FAE\u4FE1\u7684 JSSDK\u3002\u9875\u9762 js \u8C03\u7528\u5FAE\u4FE1 app \u7684\u5E95\u5C42\u80FD\u529B\u3002",paraId:0,tocIndex:0},{value:"JSBridge",paraId:1,tocIndex:0},{value:"Native \u7AEF\u548C Web \u7AEF\u7684\u53CC\u5411\u901A\u4FE1\uFF0C\u8FD9\u5C31\u662F JSBridge\uFF0C\u5BF9 app \u80FD\u529B\u7684\u5C01\u88C5",paraId:2,tocIndex:0},{value:`\u6CE8\u518C\u5168\u5C40 api(\u540C\u6B65)
window.getVersion = () => {return 1.0}`,paraId:3,tocIndex:1},{value:`URL scheme(\u9002\u5408\u540C\u6B65\u548C\u5F02\u6B65\u573A\u666F)
\uFF08chrome://dino/ \uFF09`,paraId:3,tocIndex:1},{value:`const sdk = {
  invoke: (url, data, onSuccess, onError) => {
    const iframe = document.createElement('iframe');
    iframe.style.visibility = hidden;
    iframe.onload = () => {
      const content = iframe.contentWindow.document.body.innerHTML;
      onSuccess(JSON.stringify(content));
      iframe.remove();
    };
    iframe.onerror = () => {
      onError();
    };
    iframe.scr = \`app-name://\${url}?data=\${JSON.stringify(data)}\`;
    document.querySelector('body').appendChild(iframe);
  },
  // \u6BD4\u5982\u626B\u4E00\u626B
  scan: () => {},
  fn1: () => {},
  fn2: () => {},
};
`,paraId:4,tocIndex:1}]}}]);
