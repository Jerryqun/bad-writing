---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: http2.0 多路复用
mobile: false
---

# http2.0 多路复用

<a href="https://juejin.cn/post/6844903796225785870" target="_blank">参考</a>

超文本传输协议 HTTP 的 2.0 版本的协议在 2015 年的时候已经发布了。相比于前面的 HTTP 1.1 版本。它多出了下面三个主要的新特性。

1、在建立连接后，可以多路复用<br/>
2、在建立连接后，一次的请求与被响应，视为流<br/>
3、数据传输分为二进制帧片段<br/>

HTTP 2.0 的多路复用其实是 HTTP 1.1 中长链接的升级版本。
在 HTTP 1.1 中，一次链接成功后，只要该链接还没断开，那么 client 端可以在这么一个链接中有序地发起多个请求，并以此获得每个请求对应的响应数据。它的缺点是，一次请求与响应的交互必须要等待前面的请求交互完成，否则后面的只能等待，这个就是`线头阻塞`。下面举个例子：

请求 A 和 请求 B。A 先被发起，此时 server 端接收到了 A 请求，正在处理。同时 B 请求也发过来了。但是 A 请求还没被返回，此时 B 请求只能等待。

在 HTTP 2.0 中，一次链接成功后，只要链接还没断开，那么 client 端就可以在一个链接中`并发`地发起多个请求，每个请求及该请求的响应不需要等待其他的请求，某个请求任务耗时严重，不会影响到其它连接的正常执行。

为什么 HTTP1.1 不能实现多路复用  
多路复用归功于， HTTP/2 中的 帧（frame）和流（stream）。帧代表着最小的数据单位，每个帧会标识出该帧属于哪个流，流也就是多个帧组成的数据流。就是在一个 TCP 连接中可以存在多条流。

而 Http 1.x 并没有这个标识，是通过文本进行传输 每次请求都会建立一次 HTTP 连接，3 次握手 4 次挥手。
