---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: Restful Api
mobile: false
---

## Restful Api

### methods

- get 获取数据
- post 新建数据
- patch/put 更新数据
- delete 删除数据

### Restful 功能

Restful 是一种新的 api 设计方法

- 传统的 api 设计：把每一个 url 当做一个功能
- Restful 设计：`把每一个 url 当做一个唯一的资源`

```base
1、尽量不要用url参数

传统设计：/api/list?pageIndex=2
restful设计：/api/list/2

2、用method表示操作类型

传统
post:/api/create-blog
post:/api/update?id=1
get:/api/get-blog?id=1

restful
post:/api/blog
patch:/api/blog/1
get:/api/blog/1
```

## 请求头和返回头

### 请求头

Accept：浏览器可接收的数据格式  
Accept-Encoding：浏览器可接收的压缩算法 如 gzip  
Accept-Language：浏览器可接收的语言  
cookie：  
Host：域名  
Connection：keep-alive 一次 tcp 连接重复使用  
User-Agent：浏览器信息  
Content-type：发送数据的格式 如 application/json

### 返回头

Content-type：返回数据的格式 如 application/json  
Content-length：返回数据的大小，多少字节  
Content-Encoding:返回数据的压缩算法  
Connection：keep-alive 一次 tcp 连接重复使用  
Set-Cookie：

### 返回头缓存相关

Cache-Control:  
max-age=31536000 缓存时间  
no-cache 表示是强制进行协商缓存  
no-store 是表示禁止任何缓存策略

## Cache-Control: no-cache存在于请求头还是返回头？

Cache-Control: no-cache 可以既出现在请求头中，也可以出现在响应头中，但它们的作用有所不同。

请求头中的 Cache-Control: no-cache
当客户端（如浏览器）发送请求并在请求头中包含 Cache-Control: no-cache 时，它指示服务器或任何中间缓存（如代理服务器）必须重新验证这个请求的数据是否有更新，不要直接从缓存中获取内容。因此，即使客户端有缓存的副本，也要求服务器确认数据的有效性。

响应头中的 Cache-Control: no-cache
当服务器在响应头中包含 Cache-Control: no-cache 时，它指示客户端必须通过检查（通常是通过 ETag 或 Last-Modified 等验证机制）验证响应的有效性，而不能直接使用缓存的副本。这意味着如果客户端对资源进行了缓存，下次访问时必须向服务器发送请求以确保获取的资源是最新的。

