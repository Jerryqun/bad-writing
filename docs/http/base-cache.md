---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: 缓存
mobile: false
---

# 缓存

<a href="https://mp.weixin.qq.com/s/O4C3hlO6tYV6qiIwgQXhEA" target="_blank">参考</a>

web 缓存主要指的是两部分<br/>
1、浏览器缓存<br/>
2、http 缓存<br/>

## http 缓存分为强制缓存和协商缓存<br/>

我们的缓存主要是针对 html,css,img 等静态资源，常规情况下，我们不会去缓存一些动态资源，因为缓存动态资源的话，数据的实时性就不会不太好，所以我们一般都只会去缓存一些不太容易被改变的静态资源。

## 强制缓存

1、基于 Expires(取本地时间戳，并对先前拿到的资源文件中的 Expires 字段的时间做比较。来判断是否需要对服务器发起请求。这里有一个巨大的漏洞：如果我本地时间不准咋办)

2、基于 cache-control（Expires 的替代品）
Cache-control 这个字段在 http1.1 中被增加，Cache-control 完美解决了 Expires 本地时间和服务器时间不同步的问题。是当下的项目中实现强缓存的最常规方法。

Cache-control 的使用方法很简单，只要在资源的响应头上写上需要缓存多久就好了，单位是秒  
max-age 决定客户端资源被缓存多久。  
s-maxage 决定代理服务器缓存的时长。  
**no-cache 表示是强制进行协商缓存**。  
no-store 是表示禁止任何缓存策略。  
public 表示资源即可以被浏览器缓存也可以被代理服务器缓存。  
private 表示资源只能被浏览器缓存。

命中强缓存的表现形式：Firefox 浏览器表现为一个灰色的 200 状态码。Chrome 浏览器状态码表现为 200 (from disk cache)或是 200 OK (from memory cache)

## 协商缓存<br/>

1、基于 last-modified
首先需要在服务器端读出文件修改时间，
将读出来的修改时间赋给响应头的 last-modified 字段。
最后设置 Cache-control:no-cache

当客户端读取到 last-modified 的时候，会在下次的请求标头中携带一个字段:If-Modified-Since 就是服务器给他的时间。

2、基础 ETag 的协商缓存
ETag 就是将原先协商缓存的比较时间戳的形式修改成了比较文件指纹。

1.第一次请求某资源的时候，服务端读取文件并计算出文件指纹，将文件指纹放在响应头的 etag 字段中跟资源一起返回给客户端。

2.第二次请求某资源的时候，客户端自动从缓存中读取出上一次服务端返回的 ETag 也就是文件指纹。并赋给请求头的 if-None-Match 字段，让上一次的文件指纹跟随请求一起回到服务端。

3.服务端拿到请求头中的 is-None-Match 字段值（也就是上一次的文件指纹），并再次读取目标资源并生成文件指纹，两个指纹做对比。如果两个文件指纹完全吻合，说明文件没有被改变，则直接返回 304 状态码和一个空的响应体并 return。如果两个文件指纹不吻合，则说明文件被更改，那么将新的文件指纹重新存储到响应头的 ETag 中并返回给客户端

有些缓存是从磁盘读取，有些缓存是从内存读取，有什么区别？答：从内存读取的缓存更快
所有带 304 的资源都是协商缓存，所有标注（从内存中读取/从磁盘中读取）的资源都是强缓存。

## 状态码 304（协商缓存）

服务器为了提高网站访问速度，对之前访问的部分页面指定缓存机制，当客户端在此对这些页面进行请求，服务器会根据缓存内容判断页面与之前是否相同，若相同便直接返回 304，此时客户端调用缓存内容，不必进行二次下载。状态码 304 不应该认为是一种错误，而是对客户端有缓存情况下服务端的一种响应。搜索引擎蜘蛛会更加青睐内容源更新频繁的网站。通过特定时间内对网站抓取返回的状态码来调节对该网站的抓取频次。若网站在一定时间内一直处于 304 的状态，那么蜘蛛可能会降低对网站的抓取次数。相反，若网站变化的频率非常之快，每次抓取都能获取新内容，那么日积月累，的回访率也会提高。
产生较多 304 状态码的原因：
1、页面更新周期长或不更新
2、纯静态页面或强制生成静态 html

## 浏览器缓存

https://juejin.cn/post/6898630134530752520

### Cookie

1、Cookie 的作用域仅仅由 domain 和 path 决定，与协议和端口无关<br/>
2、cookie 在不同端口号可以共享<br/>
3、设置 httpOnly 使得 js 不能访问 cookie <br/>
4、设置 Secure 使得只有 https 的请求才会带上 cookie<br/>
5、SameSite 属性<br/>
SameSite 是 HTTP 响应头 Set-Cookie 的属性之一。<br/>
它允许声明该 Cookie 是否仅限于第一方或者同一站点上下文。<br/>
SameSite 可以有下面三种值：<br/>

Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。
Lax 允许部分第三方请求携带 Cookie。
None 无论是否跨站都会发送 Cookie。

当 sameSite 为 Lax 时，post、iframe、ajax、image 的跨站请求都不会发送 cookie。

### Cookie、sessionStorage、localStorage 的区别

相同点
都存在客户端

不同点<br/>
1、cookie 数据存储不能大于 4k sessionStorage 和 localStorage 最大可 5M(存储数据的大小) <br/>
2、cookie 可以设置过期时间 sessionStorage 是当前会话关闭时消失 localStorage 永远不会消失，除非手动删除(生命周期)<br/>
3、cookie 会自动带在请求头里面送往服务器<br/>

ajax 请求的接口 set-Cookies 的时候如果是跨站
必须开启 withCredentials: true 请求才会带上 cookie，不开启 set-Cookies 也会不生效<br/>