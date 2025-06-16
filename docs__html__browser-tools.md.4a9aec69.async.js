"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4051],{36762:function(_,i,n){n.r(i);var l=n(72269),o=n(93359),h=n(61788),c=n(19977),m=n(91558),d=n(24268),x=n(96057),f=n(85939),r=n(53683),a=n(80936),u=n(67294),t=n(74754),e=n(85893);function s(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(a.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u524D\u7AEF\u9875\u9762\u600E\u4E48\u9650\u5236\u7528\u6237\u6253\u5F00\u6D4F\u89C8\u5668\u63A7\u5236\u53F0",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u524D\u7AEF\u9875\u9762\u600E\u4E48\u9650\u5236\u7528\u6237\u6253\u5F00\u6D4F\u89C8\u5668\u63A7\u5236\u53F0",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u524D\u7AEF\u9875\u9762\u600E\u4E48\u9650\u5236\u7528\u6237\u6253\u5F00\u6D4F\u89C8\u5668\u63A7\u5236\u53F0"]}),(0,e.jsx)("ol",{children:(0,e.jsx)("li",{children:t.texts[0].value})}),(0,e.jsx)(d.Z,{lang:"js",children:t.texts[1].value}),(0,e.jsx)("ol",{start:"2",children:(0,e.jsx)("li",{children:t.texts[2].value})}),(0,e.jsx)(d.Z,{lang:"js",children:t.texts[3].value}),(0,e.jsx)("ol",{start:"3",children:(0,e.jsxs)("li",{children:[(0,e.jsx)("p",{children:t.texts[4].value}),(0,e.jsx)("p",{children:t.texts[5].value})]})}),(0,e.jsx)("p",{children:t.texts[6].value}),(0,e.jsx)(d.Z,{lang:"js",children:t.texts[7].value}),(0,e.jsx)("ol",{start:"4",children:(0,e.jsx)("li",{children:t.texts[8].value})}),(0,e.jsx)("p",{children:t.texts[9].value}),(0,e.jsx)(d.Z,{lang:"js",children:t.texts[10].value}),(0,e.jsx)("p",{children:t.texts[11].value}),(0,e.jsx)(d.Z,{lang:"js",children:t.texts[12].value})]})})})})}i.default=s},74754:function(_,i,n){n.r(i),n.d(i,{texts:function(){return l}});const l=[{value:"\u5728\u9875\u9762\u4E0A\u70B9\u51FB\u9F20\u6807\u53F3\u952E\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6709\u4E2A \u68C0\u67E5 \u9009\u9879\uFF0C\u901A\u8FC7\u8FD9\u4E2A\u83DC\u5355\u53EF\u4EE5\u76F4\u63A5\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u6211\u4EEC\u53EF\u4EE5\u76F4\u63A5\u5728\u8FD9\u4E2A\u9875\u9762\u4E0A\u7981\u7528\u53F3\u952E\u83DC\u5355\u3002",paraId:0,tocIndex:0},{value:`document.addEventListener('contextmenu', (e) => e.preventDefault());
`,paraId:1,tocIndex:0},{value:"\u9664\u4E86\u53F3\u952E\u83DC\u5355\u680F\uFF0C\u8FD8\u6709\u6700\u7ECF\u5178\u7684 F12 \uFF0C\u901A\u8FC7 F12 \u5FEB\u6377\u952E\u4E5F\u53EF\u4EE5\u5FEB\u901F\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E5F\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u5FEB\u6377\u952E\u7ED9\u62E6\u622A\u6389",paraId:2,tocIndex:0},{value:`document.addEventListener('keydown', (e) => {
  if (e.keyCode === 123) {
    e.preventDefault();
  }
});
document.addEventListener('contextmenu', (e) => e.preventDefault());
`,paraId:3,tocIndex:0},{value:`Ctrl+Shift+C
Ctrl+Shift+I`,paraId:4,tocIndex:0},{value:"mac \u7535\u8111 \uFF1A option + command +I/J",paraId:5,tocIndex:0},{value:"\u4E0A\u9762\u8FD9\u4E24\u4E2A\u5FEB\u6377\u952E\u4E5F\u53EF\u4EE5\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u8FD8\u6709\u4E00\u4E2A\u5FEB\u6377\u952E Ctrl+U \u53EF\u4EE5\u6253\u5F00\u6E90\u7801\u9875\u9762\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4E5F\u53EF\u4EE5\u4E00\u8D77\u628A\u5B83\u7ED9\u62E6\u622A\u6389\u3002",paraId:6,tocIndex:0},{value:`document.addEventListener('keydown', (e) => {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
    (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
    (e.ctrlKey && e.keyCode === 85)
  ) {
    // Ctrl+U
    e.preventDefault();
  }
});
`,paraId:7,tocIndex:0},{value:"\u68C0\u6D4B\u7A97\u53E3\u53D8\u5316",paraId:8,tocIndex:0},{value:"\u52A0\u4E0A\u524D\u9762\u7684\u62E6\u622A\u4E4B\u540E\uFF0C\u5176\u5B9E\u6211\u4EEC\u8FD8\u662F\u6709\u529E\u6CD5\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u8BBE\u7F6E\u6765\u6253\u5F00\u63A7\u5236\u53F0\uFF0C\u8FD9\u91CC\u7684\u5165\u53E3\u6211\u4EEC\u5E76\u65E0\u6CD5\u76D1\u542C\u62E6\u622A\u5230",paraId:9,tocIndex:0},{value:`let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;

window.addEventListener('resize', () => {
  const widthDiff = Math.abs(window.innerWidth - lastWidth);
  const heightDiff = Math.abs(window.innerHeight - lastHeight);

  // \u5982\u679C\u7A97\u53E3\u5C3A\u5BF8\u53D8\u5316\u4F46\u4E0D\u662F\u5168\u5C4F\u5207\u6362\uFF0C\u53EF\u80FD\u662F\u63A7\u5236\u53F0\u6253\u5F00
  if ((widthDiff > 50 || heightDiff > 50) && !isFullScreen()) {
    //\u8DF3\u8F6C\u5230\u7A7A\u767D\u9875\u9762
    window.location.href = 'about:blank';
    alert('\u68C0\u6D4B\u5230\u5F02\u5E38\u7A97\u53E3\u53D8\u5316\uFF0C\u8BF7\u5173\u95ED\u5F00\u53D1\u8005\u5DE5\u5177');
  }
  lastWidth = window.innerWidth;
  lastHeight = window.innerHeight;
});

function isFullScreen() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
}
`,paraId:10,tocIndex:0},{value:"\u6C47\u603B",paraId:11,tocIndex:0},{value:`(() => {
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  document.addEventListener('keydown', (e) => {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.keyCode === 85)
    ) {
      // Ctrl+U
      e.preventDefault();
    }
  });

  let lastWidth = window.innerWidth;
  let lastHeight = window.innerHeight;

  window.addEventListener('resize', () => {
    const widthDiff = Math.abs(window.innerWidth - lastWidth);
    const heightDiff = Math.abs(window.innerHeight - lastHeight);

    // \u5982\u679C\u7A97\u53E3\u5C3A\u5BF8\u53D8\u5316\u4F46\u4E0D\u662F\u5168\u5C4F\u5207\u6362\uFF0C\u53EF\u80FD\u662F\u63A7\u5236\u53F0\u6253\u5F00
    if ((widthDiff > 50 || heightDiff > 50) && !isFullScreen()) {
      //\u8DF3\u8F6C\u5230\u7A7A\u767D\u9875\u9762
      alert('\u68C0\u6D4B\u5230\u5F02\u5E38\u7A97\u53E3\u53D8\u5316\uFF0C\u8BF7\u5173\u95ED\u5F00\u53D1\u8005\u5DE5\u5177');
      window.location.href = 'about:blank';
    }
    lastWidth = window.innerWidth;
    lastHeight = window.innerHeight;
  });

  function isFullScreen() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    );
  }
})();
`,paraId:12,tocIndex:0}]}}]);
