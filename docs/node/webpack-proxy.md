---
nav: Node
group: webpack
toc: content
mobile: false
title: Webpack5Prox配置详解
---

# Webpack5Prox 配置详解

```json
{
  "proxy": {
    "/api": {
      "target": "http://localhost:3000", // 目标服务器，所有匹配到的请求将会被代理到这个地址
      "pathRewrite": { "^/api": "" }, // pathRewrite：重写请求路径的规则。 前面是匹配规则，后面是替换内容，将/api替换为空，即移除请求前缀
      "changeOrigin": true, // 是否改变请求头中的host值，如果设置为true，那么请求头中的host将被设置为target
      "secure": false, // 如果代理的目标是 HTTPS 服务，将此选项设置为 false 将允许代理服务器接受无效的证书。
      "logLevel": "debug", // 日志级别，可选项有'silent' | 'error' | 'warn' | 'info' | 'log' | 'debug'。
      "context": ["/auth", "/api"], // 只有/auth和/api开头的请求才会被代理，可以是一个单独的字符串或字符串数组
      "headers": {
        "Connection": "keep-alive" // 为每一个代理请求添加自定义请求头
      },
      "cookiePathRewrite": "/", // 重写cookie路径
      "cookieDomainRewrite": "localhost" ,// 重写cookie域名
      "onProxyReq": function(proxyReq, req, res) { // 代理的请求事件处理，可以在这里添加请求头等
        proxyReq.setHeader('X-Added', 'foobar');
      },
      "onProxyRes": function(proxyRes, req, res) { // 代理的响应事件处理，可以在这里修改响应头信息等
        proxyRes.headers['X-Added'] = 'foobar';  // 添加新的响应头字段
      },
      "bypass": function(req, res, proxyOptions) { // 提供一个函数来绕过代理服务器发送请求，返回false则继续代理，返回其他路径则不代理
        if (req.headers.accept.indexOf("html") !== -1) {
          console.log("Skipping proxy for browser request.");
          return "/index.html";
        }
      },
    }
  }
}
```

## changeOrigin 详解

当启用 changeOrigin 选项时，代理服务器会修改 HTTP 请求头中的 Origin 字段。Origin 字段用于指示请求来源于哪个域。这在跨域请求中是非常关键的，因为服务器通常会检查 Origin 字段，并在基于此字段的验证后决定是否接受请求。

场景分析<br/>
假设你正在开发一个前端应用，该应用运行在 http://localhost:8080，而你要请求的 API 位于不同的域名下，比如 http://api.example.com。按照同源策略，浏览器会在发起跨域请求时，添加一个Origin字段，值为请求发起的源（即http://localhost:8080）。在后端服务处，如果配置了跨域资源共享（CORS），服务端会检查 Origin 字段，验证请求是否被允许。

Proxy 行为
当不使用代理时，Origin 字段由浏览器自动设置，反映了请求实际来自的源地址。但如果你使用 Webpack 代理，情况会有所不同，尤其是在开发环境下，通常需要一个前端开发服务器向 API 服务器发起请求，模拟生产环境下的情况。

使用 changeOrigin
如果配置了：

```json
{
  "proxy": {
    "/api": {
      "target": "http://api.example.com",
      "changeOrigin": true
    }
  }
}
```

当你从 http://localhost:8080 发起到 /api 的请求时，代理会接管请求，并将其转发到 http://api.example.com。如果设置 changeOrigin: true，代理会将 HTTP 请求头中的 Origin 字段修改为目标地址的域（即 http://api.example.com）。这样，API服务器就会认为请求是从 http://api.example.com 发起的，从而通过 CORS 验证。

注意： 在实际的生产环境中，Origin 字段的修改可能会违反 CORS 政策，或被视为潜在的安全风险。因此，这种配置主要用于开发环境中，以便开发人员能够模拟不同的部署环境，并进行无干扰的 API 测试。

## WebSocket 代理

```json
{
  "proxy": {
    "/socket": {
      "target": "ws://localhost:3000",
      "ws": true
    }
  }
}
```
