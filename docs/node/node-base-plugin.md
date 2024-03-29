---
nav: Node
group: 基础
toc: content
mobile: false
title: 框架
---

## 常见的 nodejs 框架

- Koa：一个轻量的 Nodejs 框架，代码非常简洁。采用洋葱圈模型中间件，非常方便扩展功能，但是开发后端 API 需要进行再封装。

- Express：Express 也是一个轻量框架，Express 和 Koa 的区别在于中间件机制。但总体差别不是很大，绝大多数 Nodejs 框架都是在 Koa 或者 Express 基础上封装的。

- Eggjs：基于 Koa 封装的框架，整合了数据库、路由、安全防护、日志记录、异常处理等中间件，可以用来快速开发 Rest 或者 Restful API 项目。

- Nestjs：基于 TS,使用了大量的装饰器语法，开发体验类似于 Java 的 Springboot。除此之外，Nestjs 还提供了 GraphQL、WebSocket、各种 MQ 和微服务的解决方案，比较适合大型后端项目的开发。
