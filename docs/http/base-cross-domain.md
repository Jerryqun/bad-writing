---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: 跨域
mobile: false
---

# 跨域

## 一、简单请求

method 属于以下三种之一: GET | HEAD | POST<br/>
HTTP 的头信息不超出以下几种字段：<br/>

```bash
Accept
Accept-Language
Content-Language
Last-Event-ID
Content-Type：只限于三个值 application/x-www-form-urlencoded、multipart/form-data、text/plain
```

1、Access-Control-Allow-Origin
该字段是必须的。它的值要么是请求时 Origin 字段的值，要么是一个\*，表示接受任意域名的请求。

2、Access-Control-Allow-Credentials
该字段可选。它的值是一个布尔值，表示是否允许发送 Cookie。默认情况下，Cookie 不包括在 CORS 请求之中。设为 true，即表示服务器明确许可，Cookie 可以包含在请求中，一起发给服务器。这个值也只能设为 true，如果服务器不要浏览器发送 Cookie，删除该字段即可。

axios withCredentials 默认为 false
当前端开启 withCredentials 为 true 时 后端必须设置
this.header('Access-Control-Allow-Credentials', 'true');

如果要发送 Cookie，Access-Control-Allow-Origin 就不能设为星号，必须指定明确的、与请求网页一致的域名。同时，Cookie 依然遵循同源政策，只有用服务器域名设置的 Cookie 才会上传，其他域名的 Cookie 并不会上传，且（跨源）原网页代码中的 document.cookie 也无法读取服务器域名下的 Cookie。

## 二、复杂请求

"预检"请求的头信息包括两个特殊字段。
1、Access-Control-Request-Method
该字段是必须的，用来列出浏览器的 CORS 请求会用到哪些 HTTP 方法

2、Access-Control-Request-Headers
该字段是一个逗号分隔的字符串，指定浏览器 CORS 请求会额外发送的头信息字段
this.header("Access-Control-Allow-Headers", "appId, appKey");

预检成功后的返回头字段  
1、Access-Control-Allow-Methods
该字段必需，它的值是逗号分隔的一个字符串，表明服务器支持的所有跨域请求的方法。注意，返回的是所有支持的方法，而不单是浏览器请求的那个方法。这是为了避免多次"预检"请求。

2、Access-Control-Allow-Headers
如果浏览器请求包括 Access-Control-Request-Headers 字段，则 Access-Control-Allow-Headers 字段是必需的。它也是一个逗号分隔的字符串，表明服务器支持的所有头信息字段，不限于浏览器在"预检"中请求的字段

3、Access-Control-Max-Age
该字段可选，用来指定本次预检请求的有效期，单位为秒。上面结果中，有效期是 20 天（1728000 秒），即允许缓存该条回应 1728000 秒（即 20 天），在此期间，不用发出另一条预检请求。

## 三、写一个 JSONP 跨域

```js
//动态创建 script
const script = document.createElement('script');
// 设置回调函数
function getData(data) {
  console.log(data);
}
//设置 script 的 src 属性，并设置请求地址
script.src = 'http://localhost:3000/?callback=getData';

// 让 script 生效
document.body.appendChild(script);

// JSONP 的缺点: JSON 只支持 get，因为 script 标签只能使用 get 请求； JSONP 需要后端配合返回指定格式的数据。

function jsonp({ url, params, cb }) {
  let createUrl = () => {
    let dataStr = '';
    for (let k in params) {
      dataStr += `${k}=${params[k]}&`;
    }
    dataStr += `callback=${cb}`;
    return `${url}?${dataStr}`;
  };
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = createUrl();
    document.body.appendChild(script);
    // 添加回调
    window[cb] = (data) => {
      resolve(data);
      document.body.removeChild(script);
    };
  });
}
```

## 跨域请求携带 cookie

默认情况下是跨域是不会携带 cookie 的，例如：a.com 网站请求 b.com 的接口，这个时候不会把 a.com 这个域名下的 cookie 携带上。如果需要携带，则需要做一下配置

前端配置  
XMLHttpRequest 发请求需要设置 withCredentials=true  
fetch 发请求需要设置 credentials = include

服务端配置  
Access-Control-Allow-Credentials: true

Access-Control-Allow-Origin: [特定域名] // 不可以是\*

因为最新版本谷歌浏览器 samesite 属性默认是 lax，lax 模式在很多情况都是不允许跨域携带 cookie，所以必须要把 samesite 设置为 none， 但是设置为 none 有一个要求，就是必须 secure 属性为 true，也就是必须使用 https 。

设置 cookie 增加配置<br/>

```js
sameSite: 'none';
secure: true;
```
