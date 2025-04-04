---
nav: Js
group: 进阶
toc: content
title: JSBridge
---

## JSBridge

js 无法直接调用 native API、需要通过一些特定的格式来调用 例如微信的 JSSDK。页面 js 调用微信 app 的底层能力。

<a href="https://juejin.cn/post/6844903585268891662" target="_blank">JSBridge</a>

Native 端和 Web 端的双向通信，这就是 JSBridge，对 app 能力的封装

### 请描述 js-bridge 的实现原理

1. 注册全局 api(同步)
   window.getVersion = () => {return 1.0}
2. URL scheme(适合同步和异步场景)
   （chrome://dino/ ）

```js
const sdk = {
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
    iframe.scr = `app-name://${url}?data=${JSON.stringify(data)}`;
    document.querySelector('body').appendChild(iframe);
  },
  // 比如扫一扫
  scan: () => {},
  fn1: () => {},
  fn2: () => {},
};
```
