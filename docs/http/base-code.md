---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: 响应状态码
mobile: false
---

# 响应状态码

1、100-199 信息响应 （服务器收到请求）

2、200-299 成功响应<br/>
206：浏览器先不下载要下载的文件，而是弹窗告诉用户，该文件是什么，有多大。由用户自行决定是否下载。
在 html 中，加一个 a 标签，a 标签的地址是一个文件，就可实现该效果

3、300-399（重定向，接口重新给一个地址）<br/>
301： 永久重定向（配合 location，浏览器自动处理，下次访问的时候直接使用重定向地址，不再发起请求，比如更换域名）<br/>
302： 临时重定向（配合 location，浏览器自动处理，每次都重新请求）<br/>
304： Not Modified（协商缓存命中的返回结果）  
如果是重定向,请求的返回头里面 Location 字段的值就是重新向的地址

应用场景 :短网址生成

4、400-499 客户端错误<br/>
400：由于语法格式有误，服务器无法理解此请求。不作修改，客户程序就无法重复此请求 Unauthorized<br/>
401：没有带认证信息或者带了错误的认证信息, 这时客户端可以修改认证信息进行重试<br/>
403：客户端带了正确的认证信息, 但服务器认为这个认证信息对应的用户是没有对应资源的访问权限的, 因此, 在向管理员获取相关权限之前, 是没有重试的必要的  
404：客户端请求了一个不存在的接口地址

5、500-599 服务端错误  
504: 网关超时
