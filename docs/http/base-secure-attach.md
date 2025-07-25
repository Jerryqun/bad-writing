---
nav: Http
group:
  title: 安全
  order: 1
toc: content
title: HTTPS 中间人攻击
mobile: false
---

# HTTPS 中间人攻击

<a target="_blank" href="https://juejin.cn/post/7160695518518050852">参考</a>

https 协议由 http + ssl 协议构成

中间人攻击服务器一方面伪装成服务端跟真正的客户端通信，另一方面又伪装成客户端跟真正的服务端通信

但本质上并不是因为 HTTPS 本身不安全，而是用户不顾浏览器的证书风险或操作系统中了病毒，植入了中间人的证书。

服务器向客户端发送公钥。 攻击者截获公钥，保留在自己手上。 然后攻击者自己生成一个【伪造的】公钥，发给客户端。 客户端收到伪造的公钥后，生成加密 hash 值发给服务器。 攻击者获得加密 hash 值，用自己的私钥解密获得真秘钥。 同时生成假的加密 hash 值，发给服务器。 服务器用私钥解密获得假秘钥。 服务器用加秘钥加密传输信息

防范方法：
服务端在发送浏览器的公钥中加入 CA 证书，浏览器可以验证 CA 证书的有效性

## 为什么需要 CA 机构对证书签名
如果不签名会存在中间人攻击的风险，签名之后保证了证书里的信息，比如公钥、服务器信息、企业信息等不被篡改，能够验证客户端和服务器端的“合法性”。
