---
nav: 面试
group:
  title: 面试
  order: 1
toc: content
title: 面试题
mobile: false
---

## 短轮询、长轮询和 WebSocket 间的区别？

### 短轮询

短轮询的基本思路:

浏览器每隔一段时间向浏览器发送 http 请求，服务器端在收到请求后，不论是否有数据更新，都直接进行 响应。
这种方式实现的即时通信，本质上还是浏览器发送请求，服务器接受请求的一个过程，通过让客户端不断的进行请求，使得客户端能够模拟实时地收到服务器端的数据的变化。

优缺点  
优点是比较简单，易于理解。
缺点是这种方式由于需要不断的建立 http 连接，严重浪费了服务器端和客户端的资源。当用户增加时，服务器端的压力就会变大，这是很不合理的。

### 短轮询实例

```js
function pollServer() {
  fetch('/long-polling-endpoint')
    .then((response) => response.json())
    .then((data) => {
      console.log('Received data:', data);
      pollServer(); // 继续轮询
    });
}

pollServer();
// node
const express = require('express');
const app = express();

app.get('/long-polling-endpoint', (req, res) => {
  // 模拟延迟
  setTimeout(() => {
    res.json({ message: 'Hello Client' });
  }, 1000);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
```

### 长轮询

基本思路:  
首先由客户端向服务器发起请求，当服务器收到客户端发来的请求后，服务器端不会直接进行响应，而是先将 这个请求挂起，然后判断服务器端数据是否有更新。
如果有更新，则进行响应，如果一直没有数据，则到达一定的时间限制才返回。客户端 JavaScript 响应处理函数会在处理完服务器返回的信息后，再次发出请求，重新建立连接。

优缺点  
长轮询和短轮询比起来，它的优点是明显减少了很多不必要的 http 请求次数，相比之下节约了资源。
长轮询的缺点在于，连接挂起也会导致资源的浪费

### WebSocket

WebSocket 是 Html5 定义的一个新协议，与传统的 http 协议不同，该协议允许由服务器主动的向客户端推送信息。
使用 WebSocket 协议的缺点是在服务器端的配置比较复杂。WebSocket 是一个全双工的协议，也就是通信双方是平等的，可以相互发送消息。默认端口为 443

`没有同源限制，客户端可以与任意服务器通信`。

协议标识符是 ws（如果加密，则为 wss），服务器网址就是 URL。

心跳就是客户端定时的给服务端发送消息，证明客户端是在线的， 如果超过一定的时间没有发送则就是离线了  
为了定时发送消息，使连接不超时自动断线，避免后端设了超时时间自动断线。所以需要定时发送消息给后端，让后端服务器知道连接还在通消息不能断。

如何判断在线离线

当客户端第一次发送请求至服务端时会携带唯一标识、以及时间戳，服务端到 db 或者缓存去查询改请求的唯一标识，如果不存在就存入 db 或者缓存中，

第二次客户端定时再次发送请求依旧携带唯一标识、以及时间戳，服务端到 db 或者缓存去查询改请求的唯一标识，如果存在就把上次的时间戳拿取出来，使用当前时间戳减去上次的时间，

得出的毫秒秒数判断是否大于指定的时间，若小于的话就是在线，否则就是离线；

### SSE vs WebSocket

SSE（Server-Sent Events）是一种允许服务器向客户端单向发送数据推送的技术，其中客户端初始化连接，并保持打开状态以接收来自服务器的更新。这种方法特别适用于实现一些像股票价格更新、新闻订阅、实时通知等需要服务器实时推送信息的应用场景。

`SSE 只支持文本数据，而 WebSocket 支持文本和二进制数据`。SSE 在一些浏览器需要一个 polyfill 来工作，而 WebSocket 则基本上在所有现代浏览器上都有原生支持。SSE 仅适用于服务器到客户端的单项数据流，对于需要全双工通信的场景，WebSocket 是更好的选择。

### SSE 实例

```js
const eventSource = new EventSource('http://yourserver.com/sse');

eventSource.onmessage = (event) => {
  console.log('Message from server:', event.data);
};

eventSource.onerror = (error) => {
  console.error('Error:', error);
};

// node
const express = require('express');
const app = express();

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  setInterval(() => {
    res.write(`data: ${JSON.stringify({ message: 'Hello Client' })}\n\n`);
  }, 1000);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
```

## TCP 如何保证数据包的顺序、可靠传输

1、对字节流分段并进行编号然后通过<br/>
2、ACK 回复和超时重发这两个机制来保证<br/>

（1）为了保证数据包的可靠传递，发送方必须把已发送的数据包保留在缓冲区；  
（2）并为每个已发送的数据包启动一个超时定时器；  
（3）如在定时器超时之前收到了对方发来的应答信息（可能是对本包的应答，也可以是对本包后续包的应答），则释放该数据包占用的缓冲区;<br/> （4）否则，重传该数据包，直到收到应答或重传次数超过规定的最大次数为止。<br/>
（5）接收方收到数据包后，先进行 CRC 校验，如果正确则把数据交给上层协议，然后给发送方发送一个累计应答包，表明该数据已收到，如果接收方正好也有数据要发给发送方，应答包也可方在数据包中捎带过去。

## TCP 和 UDP 的区别

1、TCP 面向连接 UDP 面向非连接<br/>
2、TCP 单项传播 UDP 提供了单播，多播，广播的功能<br/>
3、TCP 面向连接 三次握手和四次挥手 保证数据的可靠顺序传播, UDP 是一种不可靠的无连接传输协议<br/>
4、UDP 的头部开销比 TCP 的更小，数据传输速率更高，实时性更好<br/>

UDP 多用于直播、游戏<br/>

## HTTP 和 TCP 的不同

`HTTP 是应用层协议`，是对两台计算机之间传输图片、文字、媒体信息等超文本数据定义了规范和约束，也就是怎么传输数据<br/>
`TCP 是传输层协议`，规定了怎么才能把数据完整无误的传输到另外一台计算机<br/>

## HTTP1.0，HTTP1.1 的区别

1. 缓存处理：多了 Entity tag，If-Unmodified-Since, If-Match, If-None-Match Cache-Control 等缓存信息（HTTTP1.0 If-Modified-Since,Expires,Exprires 的值为服务端返回的数据到期时间。当再次请求时的请求时间小于返回的此时间，则直接使用缓存数据。但由于服务端时间和客户端时间可能有误差，这也将导致缓存命中的误差）  
   Cache-Control 值:  
   private：客户端可以缓存  
   public：客户端和代理服务器都可以缓存  
   max-age=t：缓存内容将在 t 秒后失效  
   no-cache：需要使用协商缓存来验证缓存数据  
   no-store：所有内容都不会缓存
2. 带宽优化及网络连接的使用
3. 错误通知的管理
4. Host 头处理
5. 长连接： `HTTP1.1 中默认开启 Connection： keep-alive`，一定程度上弥补了 HTTP1.0 每次请求都要创建连接的缺点。
6. 断点续传 状态码 206
7. 支持新的方法 PUT DELETE 、可用于 restful api

## 相对于 HTTP1.1，HTTP2 的优化

1. HTTP2 支持二进制传送（实现方便且健壮），HTTP1.x 是字符串传送<br/>
2. HTTP2 支持`多路复用`<br/>
3. HTTP2 采用 HPACK 压缩算法压缩 header，减小了传输的体积<br/>
4. HTTP2 支持服务端推送 WebSocket<br/>

## 说下 websocket 的连接原理

WebSocket 是一种基于 TCP 协议的双向通信协议，它可以在客户端和服务器之间建立持久性的连接，实现实时的数据传输和交互。其主要原理如下：

利用 HTTP 建立连接：WebSocket 的连接需要通过 HTTP 请求首先建立握手（Handshaking）过程，该过程类似于普通的 HTTP 请求，但包含了一些特殊的头部字段，例如 Upgrade 和 Connection 等。

建立 TCP 连接：建立 HTTP 连接之后，客户端和服务器之间会建立一个 TCP 连接，并交换协商的加密和压缩参数等。

双向通信：建立好 TCP 连接之后，就可以进行双向通信了。客户端和服务器都可以在任意时刻发送消息，并且不需要发送 HTTP 请求或响应，而是直接通过已经建立好的连接进行数据的传递和处理。

断开连接：当双方其中一方决定关闭连接时，会发送一个特殊的控制帧（Close Frame），告知对方关闭连接。

需要注意的是，在 WebSocket 的连接过程中，由于需要进行 Handshaking 过程，因此第一次连接较慢。同时，在建立连接之后，需要保持长时间的连接状态，因此需要考虑网络稳定性、负载均衡和错误重试等问题，以保证连接的可靠性和稳定性。

WebSocket 是一种基于 TCP 的双向通信协议，通过建立长时间的持久连接来实现客户端和服务器之间的实时数据传输和交互。它在实时性、效率和安全性等方面都有很大的优势，适用于在线游戏、即时聊天、实时监控等领域。

## 如何应对网络不稳定（波动）的情况

失败了重发，指数补偿

```js
const request = (url) => {
  let resolved = false;
  let t = 1;
  return new Promise((resolve, reject) => {
    // Promise.race([
    //     fetch(url),
    //     wait(100, () => fetch(url)),
    //     wait(200, () => fetch(url)),
    //     wait(400, () => fetch(url)),
    //     wait(800, () => fetch(url)),
    //     wait(1600, () => fetch(url)),
    // ])
    function doFetch() {
      if (resolved || t > 16) return;
      fetch(url)
        .then((resp) => resp.text())
        .then((data) => {
          if (!resolved) {
            resolved = true;
            resolve(data);
          }
        });

      setTimeout(() => {
        doFetch();
        t *= 2;
      }, t * 100);
    }
    doFetch();
  });
};
```

## HTTP 中 GET 与 POST 的区别

GET 和 POST 是 HTTP 协议中两种最基本的请求方法，它们在许多方面有所区别：

### 用途

- **GET**：主要用于请求服务器发送某个资源。
- **POST**：主要用于向服务器提交需要被处理的数据。

### 数据传输

- **GET**：将请求参数编码后附加在 URL 上，形成查询字符串。例如：`http://example.com/api?param1=value1&param2=value2`。
- **POST**：将数据放在 HTTP 请求的消息主体（body）中发送。

### 参数长度限制

- **GET**：由于 URL 长度的限制（不同浏览器和服务器有不同限制），GET 请求能发送的数据量有限。
- **POST**：理论上没有数据大小限制，适用于发送大量数据。

### 可见性和安全性

- **GET**：参数直接暴露在 URL 中，容易被人看到，例如在浏览器的地址栏、历史记录或日志文件中，因此不适合发送敏感信息。
- **POST**：数据不会显示在 URL 中，相对更隐蔽，适合发送敏感或大量信息。

### 幂等性

- **GET**：应该是幂等的，意思是多次执行相同的 GET 请求，服务器上的数据状态不会改变。
- **POST**：通常不是幂等的，它可能会每次请求都产生副作用，如创建或修改资源。

### 缓存和历史记录

- **GET**：`请求可以被浏览器缓存`，也可以被保存在浏览器的历史记录中。
- **POST**：一般不会被缓存，也不会出现在浏览器历史记录中。

### 数据类型

- **GET**：只允许 ASCII 字符。
- **POST**：没有限制，可以包括二进制数据。

### 应用场景

- **GET**：适用于查询或获取信息，如搜索、读取文章或查看产品。
- **POST**：适用于更新或发送信息，如用户注册、上传文件或提交表单数据。

### 其他

- **GET**：可以被书签保存，可以在浏览器回退时无害地刷新，且有助于 SEO。
- **POST**：不能被书签保存，且在浏览器回退或刷新时可能会提示重新提交表单数据。

虽然 GET 和 POST 在不同情况下的行为差异明显，但它们并不是 HTTP 协议中唯一的请求方法。还有其他请求方法如 PUT、DELETE、HEAD、OPTIONS、PATCH 等，它们用于更特定的场景。

## 前端监控应该采集哪些点

前端监控是一项关键的实践，有助于理解用户体验、发现潜在问题、优化性能并确保应用的健康稳定运行。以下是前端监控应当采集的一些关键数据点：

### 1. 用户体验指标

- **首次绘制（FP first paint）**：从导航开始到浏览器首次将像素渲染到屏幕上的时间
- **页面加载时间**：用户等待页面可用的时间。
- **首次内容绘制 (FCP)**：页面上首个文本或图像绘制的时间。
- **最大内容绘制 (LCP)**：页面上最大文本块或图像绘制的时间，与用户体验密切相关。
- **首次有效绘制 (FID)**：用户首次与页面交互（点击链接、按钮等）到浏览器响应交互的时间。
- **累积布局偏移 (CLS)**：页面布局变动的总分数，用于衡量视觉稳定性。

### 2. JavaScript 错误

- **错误类型**：捕获到的错误类型（例如 ReferenceError、SyntaxError 等）。
- **错误消息**：描述错误的字符串消息。
- **堆栈跟踪**：错误发生时代码调用堆栈的快照。
- **发生错误的文件和行号**：引发错误的脚本文件的 URL 和具体的行号/列号。

### 3. 网络性能

- **资源加载时间**：各种资源（JS、CSS、图片等）的下载时间。
- **API 请求响应时间**：后端 API 或服务请求的响应时间。
- **HTTP 状态码**：HTTP 请求的响应状态码，特别是错误代码（如 404、500 等）。

### 4. 用户行为

- **页面访问路径**：用户在网站上的导航路径。
- **点击事件**：用户在页面上的点击行为。
- **页面停留时间**：用户在单个页面或整个网站上的停留时间。

### 5. 设备和环境信息

- **浏览器类型和版本**：用户使用的浏览器。
- **操作系统和版本**：用户设备的操作系统。
- **设备类型**：用户使用的设备类型，如手机、平板或桌面电脑。
- **屏幕分辨率**：用户屏幕的分辨率大小。
- **网络类型和速度**：用户的网络连接类型（WiFi、4G 等）和速度。

### 6. 性能瓶颈

- **CPU 使用率**：网页执行期间的 CPU 占用情况。
- **内存使用**：网站运行时的内存使用情况。
- **渲染性能**：如浏览器的重绘和重排次数。

### 7. 业务指标

- **转化率**：关键业务流程（如购买、注册等）的完成率。
- **页面浏览量 (PV)**：页面被查看的次数。
- **用户访问量 (UV)**：访问网站的独立用户数。

### 8. 异常行为

- **长任务**：执行时间超过 50 毫秒的任务，可能会造成 UI 延迟。
- **崩溃和冻结**：页面或应用崩溃和无响应的情况。

### 9. 安全问题

- **跨站脚本攻击 (XSS)**：非法注入的脚本尝试。
- **内容安全策略 (CSP) 违规报告**：CSP 违规事件的报告。

监控这些数据点可以帮助前端开发者和网站运营者追踪用户体验的质量，快速响应问题，并做出数据驱动的决策来改善性能和稳定性。应用性能管理(APM)工具、错误追踪工具和分析平台通常用于采集和分析这些数据。

## ajax 、fetch、axios 区别

1. ajax: 异步请求统称
2. fetch: 一个浏览器自带的 api
3. axios: 第三方 npm 包， 基于 XMLHttpRequest 的封装

## 一个 tcp 连接能发几个 http 请求
如果是 HTTP 1.0，默认不支持长连接，所以 一个 TCP 发送 一个 HTTP 请求；  
如果是 HTTP 1.1，支持了长连接，只要 TCP 连接不断开，便可以一直发送 HTTP 请求，HTTP 2.0 同理
