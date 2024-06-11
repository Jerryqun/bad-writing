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

## 如何理解 HTML 语义化？

- 让人更容易读懂（增加代码可读性）。
- 让搜索引擎更容易读懂，有助于爬虫抓取更多的有效信息，爬虫依赖于标签来确定上下文和各个关键字的权重（SEO）。
- 在没有 CSS 样式下，页面也能呈现出很好地内容结构、代码结构。

## h5 如何进行首屏优化

- 路由懒加载  
  适用于 SPA
- 服务端渲染 ssr
  终极方案, react 的 next.js
- App 预取  
  h5 在 app webview 中
- 分页
- 图片懒加载  
  先展示文本 提前设置好图片的尺寸不然会触发重排
- hybrid （file 协议读取文件）

## 后端返回 10w 数据 如何处理

首先不合理

js 处理 10 万条数据没问题  
渲染 dom 会有问题 卡
解决方案

- 后端解决
- node 中间层
- 虚拟列表
  只渲染可视区域（react-virtualized） 兼容性问题

## 用一个 div 模拟 textarea 的实现

给 div 添加 contenteditable=true 即可

## 优雅降级和渐进增强

1、渐进增强（progressive enhancement）：主要是针对低版本的浏览器进行页面重构，保证基本的功能情况下，再针对高级浏览器进行效果、交互等方面的改进和追加功能，以达到更好的用户体验。

2、优雅降级 graceful degradation： 一开始就构建完整的功能，然后再针对低版本的浏览器进行兼容。

两者区别：  
1、优雅降级是从复杂的现状开始的，并试图减少用户体验的供给；  
而渐进增强是从一个非常基础的，能够起作用的版本开始的，并在此基础上不断扩充，以适应未来环境的需要；  
2、降级（功能衰竭）意味着往回看，而渐进增强则意味着往前看，同时保证其根基处于安全地带。“优雅降级”观点认为应该针对那些最高级、最完善的浏览器来设计网站。而将那些被认为“过时”或有功能缺失的浏览器下的测试工作安排在开发周期的最后阶段，并把测试对象限定为主流浏览器（如 IE、Mozilla 等）的前一个版本。 在这种设计范例下，旧版的浏览器被认为仅能提供“简陋却无妨 (poor, but passable)” 的浏览体验。可以做一些小的调整来适应某个特定的浏览器。但由于它们并非我们所关注的焦点，因此除了修复较大的错误之外，其它的差异将被直接忽略。“渐进增强”观点则认为应关注于内容本身。内容是建立网站的诱因，有的网站展示它，有的则收集它，有的寻求，有的操作，还有的网站甚至会包含以上的种种，但相同点是它们全都涉及到内容。这使得“渐进增强”成为一种更为合理的设计范例。这也是它立即被 Yahoo 所采纳并用以构建其“分级式浏览器支持 (Graded Browser Support)”策略的原因所在。

## label 标签有什么用

```html
label
标签来定义表单控制间的关系。当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

<label for="Name">Number:</label>
<input type="text" name="Name" id="Name" />

<label>Date:<input type="text" name="B" /></label>
```

## svg 和 canvas 的区别

### svg

1、使用 XML 描述的的 2d 图像  
2、支持事件处理器  
3、单位是元素  
4、矢量图（放大或缩小不会失真）  
5、svg 节点过多时渲染慢，canvas 性能更好一点，但是写起来更加复杂

### canvas

1、js 绘制的 2d 图像  
2、canvas 图像单位是像素  
3、不支持事件处理器，只能给最外层添加事件

## title 与 h1 的区别、b 与 strong 的区别、i 与 em 的区别

1、strong 标签有语义，是起到加重语气的效果，而 b 标签是没有的，b 标签只是一个简单加粗标签。b 标签之间的字符都设为粗体，strong 标签加强字符的语气都是通过粗体来实现的，而搜索引擎更侧重 strong 标签。

2、title 属性没有明确意义只表示是个标题，H1 则表示层次明确的标题，对页面信息的抓取有很大的影响

3、i 内容展示为斜体，em 表示强调的文本 两个表现样式是一样的

## Mac 系统解除谷歌浏览器的跨域限制

<a target='_blank' href='https://blog.csdn.net/qq_41541368/article/details/104035074'>参考</a>
