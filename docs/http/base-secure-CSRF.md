---
nav: Http
group:
  title: 安全
  order: 1
toc: content
title: CSRF 漏洞
mobile: false
---

## CSRF

<a href="https://juejin.cn/post/6844903689702866952?searchId=2024120117510094F0813CB66F3368638E" target="_blank">参考</a>

CSRF（Cross-site request forgery）跨站请求伪造：攻击者诱导受害者进入第三方网站，在第三方网站中，向被攻击网站发送跨站请求。利用受害者在被攻击网站已经获取的注册凭证，绕过后台的用户验证，达到冒充用户对被攻击的网站执行某项操作的目的。

一个典型的 CSRF 攻击有着如下的流程：

- 受害者登录 a.com，并保留了登录凭证（Cookie）。
- 攻击者引诱受害者访问了 b.com。
- b.com 向 a.com 发送了一个请求：a.com/act=xx。浏览器会…
- a.com 接收到请求后，对请求进行验证，并确认是受害者的凭证，误以为是受害者自己发送的请求。
- a.com 以受害者的名义执行了 act=xx。
- 攻击完成，攻击者在受害者不知情的情况下，冒充受害者，让 a.com 执行了自己定义的操作。

## 制定防护策略

- 阻止不明外域的访问  
  同源检测  
  Samesite Cookie
- 提交时要求附加本域才能获取的信息  
  CSRF Token  
  双重 Cookie 验证
