---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: SSE
mobile: false
---

# SSE 流式传输

SSE 全称为 Server-sent events , 是一种基于 HTTP 协议的通信技术，允许服务器主动向客户端（通常是 Web 浏览器）发送更新。

<a target="_blank" href="https://juejin.cn/post/7355666189475954725">参考</a>

## SSE 技术原理

前文说到，SSE 本质是一个基于 http 协议的通信技术。
因此想要使用  SSE  技术构建需要服务器实时推送信息到客户端的连接，只需要将传统的  http 响应头的 `contentType 设置为 text/event-stream `。
并且为了保证客户端展示的是最新数据，需要将  Cache-Control 设置为 no-cache 。
在此基础上，SSE  本质是一个 TCP 连接，因此为了保证 SSE 的持续开启，需要将  Connection 设置为 keep-alive 。

```bash
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
```

## SSE DEMO

### 后端

```js
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public'));

app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');

  let startTime = Date.now();

  const sendEvent = () => {
    // 检查是否已经发送了10秒
    if (Date.now() - startTime >= 10000) {
      res.write('event: close\ndata: {}\n\n'); // 发送一个特殊事件通知客户端关闭
      res.end(); // 关闭连接
      return;
    }

    const data = { message: 'Hello World', timestamp: new Date() };
    res.write(`data: ${JSON.stringify(data)}\n\n`); // 每隔2秒发送一次消息

    setTimeout(sendEvent, 2000);
  };

  sendEvent();
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
```

### 前端

```html
<!DOCTYPE html>
<html lang="en">
  <head>
        
    <meta charset="UTF-8" />
        
    <title>SSE Example</title>
  </head>

  <body>
        
    <h1>Server-Sent Events Example</h1>
        
    <div id="messages"></div>

        
    <script>
      const evtSource = new EventSource('/events');
      const messages = document.getElementById('messages');

      evtSource.onmessage = function (event) {
        const newElement = document.createElement('p');
        const eventObject = JSON.parse(event.data);
        newElement.textContent =
          'Message: ' + eventObject.message + ' at ' + eventObject.timestamp;
        messages.appendChild(newElement);
      };
    </script>
  </body>
</html>
```
