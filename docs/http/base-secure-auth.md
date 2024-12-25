---
nav: Http
group:
  title: 安全
  order: 1
toc: content
title: 鉴权
mobile: false
---

## 鉴权

<a target="_blank" href="https://fe.ecool.fun/articles/technology/455">参考</a>

## 典型的 session 登陆/验证流程

- 浏览器登录发送账号密码，服务端查用户库，校验用户
- 服务端把用户登录状态存为 Session，生成一个 sessionId
- 通过登录接口返回，把 sessionId set 到 cookie 上
- 此后浏览器再请求业务接口，sessionId 随 cookie 带上
- 服务端查 sessionId 校验 session
- 成功后正常做业务处理，返回结果

session 的维护给服务端造成很大困扰，我们必须找地方存放它，又要考虑分布式的问题，甚至要单独为了它启用一套 Redis 集群。

## JWT （成熟的编码方案）

JSON Web Token (JWT) 是一个开放标准，定义了一种传递 JSON 信息的方式。这些信息通过数字签名确保可信
它是一种成熟的 token 字符串生成方案，包含了我们前面提到的数据、签名

## 单点登录

「一次登录，全线通用」的能力，叫做「单点登录」。

### “虚假”的单点登录（主域名相同）

简单的，如果业务系统都在同一主域名下，比如 wenku.baidu.com、tieba.baidu.com，就好办了。可以直接把 cookie domain 设置为主域名 baidu.com，百度也就是这么干的。

### “真实”的单点登录（主域名不同）

比如滴滴这么潮的公司，同时拥有 didichuxing.com 、xiaojukeji.com 、didiglobal.com 等域名，种 cookie 是完全绕不开的。

这要能实现「一次登录，全线通用」，才是真正的单点登录。

这种场景下，我们需要独立的认证服务，通常被称为 SSO。

一次「从 A 系统引发登录，到 B 系统不用登录」的完整流程

- 用户进入 A 系统，没有登录凭证（ticket），A 系统给他跳到 SSO
- SSO 没登录过，也就没有 sso 系统下没有凭证（注意这个和前面 A ticket 是两回事），输入账号密码登录
- SSO 账号密码验证成功，通过接口返回做两件事：一是种下 sso 系统下凭证（记录用户在 SSO 登录状态）；二是下发一 ticket
- 客户端拿到 ticket，保存起来，带着请求系统 A 接口
- 系统 A 校验 ticket，成功后正常处理业务请求
- 此时用户第一次进入系统 B，没有登录凭证（ticket），B 系统给他跳到 SSO
- SSO 登录过，系统下有凭证，不用再次登录，只需要下发 ticket
- 客户端拿到 ticket，保存起来，带着请求系统 B 接口

浏览器跨域解决思路

- 在 SSO 域下，SSO 不是通过接口把 ticket 直接返回，而是通过一个带 code 的 URL 重定向到系统 A 的接口上，这个接口通常在 A 向 SSO 注册时约定
- 浏览器被重定向到 A 域下，带着 code 访问了 A 的 callback 接口，callback 接口通过 code 换取 ticket
- 这个 code 不同于 ticket，code 是一次性的，暴露在 URL 中，只为了传一下换 ticket，换完就失效
  callback 接口拿到 ticket 后，在自己的域下 set cookie 成功
  在后续请求中，只需要把 cookie 中的 ticket 解析出来，去 SSO 验证就好
  访问 B 系统也是一样
