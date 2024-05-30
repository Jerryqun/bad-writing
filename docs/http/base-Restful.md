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
- Restful 设计：把每一个 url 当做一个唯一的资源

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
