---
nav: Html
group:
  title: 面试
  order: 1
toc: content
title: 题目
mobile: false
---

## 从输入 URL 到页面加载发生了什么

1、CDN 解析（网址到 IP 地址的转换）  
浏览器缓存 =》 本机系统缓存 =》 路由器缓存 =》 本地域名服务器
2、TCP 连接（三次握手）  
3、发送 http 请求  
4、服务器处理 http 请求并且返回报文  
5、浏览器渲染页面  
6、断开连接（四次挥手）

## 浏览器乱码的原因是什么？如何解决？

产生乱码的原因：

网页源代码是 gbk 的编码，而内容中的中文字是 utf-8 编码的，这样浏览器打开即会出现 html 乱码，反之也会出现乱码；
html 网页编码是 gbk，而程序从数据库中调出呈现是 utf-8 编码的内容也会造成编码乱码；
浏览器不能自动检测网页编码，造成网页乱码。

使用软件编辑 HTML 网页内容；
如果网页设置编码是 gbk，而数据库储存数据编码格式是 UTF-8，此时需要程序查询数据库数据显示数据前进程序转码；
如果浏览器浏览时候出现网页乱码，在浏览器中找到转换编码的菜单进行转换。

## DOCTYPE 标签有什么用

DOCTYPE 声明于文档最前面，告诉浏览器以何种方式来渲染页面

## HTML5 有哪些 drag 相关的 API

可以通过给标签设置 draggable 属性来实现元素的拖拽  
img 和 a 标签默认是可以拖拽的  
拖拽者身上的三个事件：ondragstart、ondrag、ondragend  
拖拽要放到的元素：ondragenter、ondragover、ondragleave、ondrap

## 如何实现浏览器内多个标签页之间的通信

实现多个标签页之间的通信，本质上都是通过中介者模式来实现的。因为标签页之间没有办法直接通信，因此我们可以找一个中介者，让标签页和中介者进行通信，然后让这个中介者来进行消息的转发。

通信方法如下：  
1、使用 websocket 协议，因为 websocket 协议可以实现服务器推送，所以服务器就可以用来当做这个中介者。标签页通过向服务器发送数据，然后由服务器向其他标签页推送转发。

2、使用 sharedWorker 的方式，sharedWorker 会在页面存在的生命周期内创建一个唯一的线程，并且开启多个页面也只会使用同一个线程。这个时候共享线程就可以充当中介者的角色。标签页间通过共享一个线程，然后通过这个共享的线程来实现数据的交换。
（https://www.cnblogs.com/imgss/p/14634577.html）

```js
// page.js
let myWorker = new SharedWorker('worker.js');
// page通过worker port发送消息
myWorker.port.postMessage('哼哼');
// page通过worker port接收消息
myWorker.port.onmessage = (e) => console.log(e.data);

// worker.js
onconnect = function (e) {
  const port = e.ports[0];
  port.postMessage('哈嘿');
  port.onmessage = (e) => {
    console.log(e.data);
  };
};
```

3、使用 localStorage 的方式（必须是两个同源页面），我们可以在一个标签页对 localStorage 的变化事件进行监听，然后当另一个标签页修改数据的时候，我们就可以通过这个监听事件来获取到数据。这个时候 localStorage 对象就是充当的中介者的角色。

```js
window.addEventListener('storage', function (e) {
  alert(e.newValue);
});
```

4、使用 postMessage 方法，如果我们能够获得对应标签页的引用，就可以使用 postMessage 方法，进行通信。

postMessage 是一种安全地实现跨源通信的方法。在浏览器中，不同的窗口、iframe、worker 等可以利用 postMessage 方法来相互发送消息，即使它们来自不同的域（也就是跨域）。这使得在例如父窗口和子 iframe 之间或者主线程和 Web Worker 之间的数据交换成为可能。

以下是 postMessage 使用的基础步骤：

```js
// 发送消息
windowA.postMessage(message, targetOrigin);
// 接收消息
window.addEventListener('message', (event) => {
  // Do something with event.data
  console.log('Received message:', event.data);

  // 可以检查event.origin来验证消息发送者的源
  if (event.origin === 'https://trusted-source.com') {
    // 如果源是可信的，处理消息
    processMessage(event.data);
  } else {
    // 如果源不是预期的，则忽略消息
    console.warn('Untrusted message source:', event.origin);
  }
});
```

message 是你想要发送的数据。这个消息可以是 JavaScript 中任何可序列化的对象（例如：字符串、数字、对象等）。
targetOrigin 指定哪些窗口可以接收消息，作为安全措施。它是一个字符串，表示消息的目标源（如 "https://example.com"）。如果你不在乎目标窗口的源，可以使用 "\*" 作为通配符。但是，出于安全原因，推荐指定确切的目标源。

5、同站点用 cookie + setInterval
