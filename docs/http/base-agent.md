---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: 反向代理与正向代理
mobile: false
---

# 反向代理与正向代理

<a target="_blank" href="https://juejin.cn/post/6844904064266960903?searchId=20230712200442E5A62CE23F42D1F4763D">参考</a>

## 正向代理

是一个位于客户端和目标服务器之间的代理服务器(`中间服务器`)。为了从原始服务器取得内容，客户端向代理服务器发送一个请求，并且指定目标服务器，之后代理向目标服务器转交并且将获得的内容返回给客户端。正向代理的情况下客户端必须要进行一些特别的设置才能使用。

## 反向代理

正好相反。对于客户端来说，反向代理就好像目标服务器。并且客户端不需要进行任何设置。客户端向反向代理发送请求，`接着反向代理判断请求走向何处，并将请求转交给客户端`，使得这些内容就好似他自己一样，一次客户端并不会感知到反向代理后面的服务，也因此不需要客户端做任何设置，只需要把反向代理服务器当成真正的服务器就好了。

## nginx 反向代理接口跨域

```bash
#proxy服务器
server {
    listen       81;
    server_name  www.domain1.com;

    location / {
        proxy_pass   http://www.domain2.com:8080;  #反向代理
        proxy_cookie_domain www.domain2.com www.domain1.com; #修改cookie里域名
        index  index.html index.htm;

        # 当用webpack-dev-server等中间件代理接口访问nignx时，此时无浏览器参与，故没有同源限制，下面的跨域配置可不启用
        add_header Access-Control-Allow-Origin http://www.domain1.com;  #当前端只跨域不带cookie时，可为*
        add_header Access-Control-Allow-Credentials true;
    }
}
```

## nodejs 中间件代理跨域

前端代码

```js
var xhr = new XMLHttpRequest();

// 前端开关：浏览器是否读写cookie
xhr.withCredentials = true;

// 访问http-proxy-middleware代理服务器
xhr.open('get', 'http://www.domain1.com:3000/login?user=admin', true);
xhr.send();
```

中间件服务器代码

```js
var express = require('express');
var proxy = require('http-proxy-middleware');
var app = express();

app.use(
  '/',
  proxy({
    // 代理跨域目标接口
    target: 'http://www.domain2.com:8080',
    changeOrigin: true,

    // 修改响应头信息，实现跨域并允许带cookie
    onProxyRes: function (proxyRes, req, res) {
      res.header('Access-Control-Allow-Origin', 'http://www.domain1.com');
      res.header('Access-Control-Allow-Credentials', 'true');
    },

    // 修改响应信息中的cookie域名
    cookieDomainRewrite: 'www.domain1.com', // 可以为false，表示不修改
  }),
);

app.listen(3000);
console.log('Proxy server is listen at port 3000...');
```
