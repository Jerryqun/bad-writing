---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: tcp三次握手四次挥手
mobile: false
---

# tcp 三次握手四次挥手

<a href="https://github.com/jawil/blog/issues/14" target="_blank">原文</a>

## 三次握手

1、客户端连接请求 喂喂喂 听得到吗？<br/>
2、服务端接收请求 我听得到 你听得到我讲话吗？<br/>
3、客户端收到请求 我听到了 可以开始沟通了<br/>

三次握手是保证 client 和 server 均让对方知道自己的接收和发送能力没问题而保证的最小次数。<br/>

## 四次挥手

1、客户端：我可以挂了吗？我这边没有输入要给你了<br/>
2、服务端：不行 还有东西在传输呢？<br/>
3、服务端: 可以了 你挂吧<br/>
4、客户端: 好 我挂了<br/>
服务端等待 2MSL 后关闭通道<br/>
