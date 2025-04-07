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

method 属于以下三种之一: `GET | HEAD | POST`<br/>
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

3、`Access-Control-Max-Age`
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

## 同源政策主要限制了三个方面：

- 当前域下的 js 脚本不能够访问其他域下的 cookie、localStorage 和 indexDB。
- 当前域下的 js 脚本不能够操作访问操作其他域下的 DOM。
- 当前域下 ajax 无法发送跨域请求。

## document.domain + iframe 跨域

此方案仅限主域相同，子域不同的跨域应用场景。实现原理：两个页面都通过 js 强制设置 document.domain 为基础主域，就实现了同域。

1）父窗口：(www.domain.com/a.html)

```html
<iframe id="iframe" src="http://child.domain.com/b.html"></iframe>
<script>
  document.domain = 'domain.com';
  var user = 'admin';
</script>
```

2）子窗口：(child.domain.com/a.html)

```js
document.domain = 'domain.com'; // 获取父窗口中变量
console.log('get js data from parent ---> ' + window.parent.user);
```

## 为什么表单提交不会出现跨域

表单提交不会出现跨域（CORS）问题的原因与浏览器的安全策略（Same-Origin Policy）以及表单的**底层行为特性**有关。以下是详细解释：

### 1. **浏览器对表单提交的特殊处理**

- **Same-Origin Policy 的例外情况**：

  - 浏览器的 Same-Origin Policy 主要限制 **JavaScript 驱动的同源策略**（如 AJAX 请求），防止脚本跨域操作资源。
  - 但表单的提交行为 **完全由浏览器原生支持**，不涉及 JavaScript 的异步操作或动态数据获取，因此不受此策略限制。

- **原始 HTTP 请求**：
  - 表单的提交本质是一个 **原始的、用户发起的 HTTP 请求**，直接由浏览器处理（如点击提交按钮或通过 `<form>` 的 `onsubmit` 触发）。
  - 浏览器不会对表单提交请求附加额外的跨域验证（如预检请求），也不会阻止此类请求的目标域。

### 2. **HTTP 方法的差异**

- **简单方法与复杂方法**：
  - 根据 Cross-Origin Resource Sharing (CORS) 规范：
    - **GET**、**POST**、和 **HEAD** 方法被视为 **简单请求（simple request）**，允许跨域提交（但需服务器响应 `Access-Control-Allow-Origin` 头）。
    - 其他方法（如 PUT、DELETE）或自定义请求头会被视为 **复杂请求（non-simple request）**，需要先发送预检请求（OPTIONS）确认。
  - 表单提交通常只使用 **POST 或 GET**，因此即使跨域，浏览器不会触发预检，但依然需要服务器端的 CORS 配置允许该来源。
  - 不过，**表单提交本身不受浏览器限制**，这是因为其底层行为与 AJAX 的异步请求不同。

### 3. **用户主动行为的豁免**

- **用户交互优先**：
  - 浏览器将表单提交视为 **用户主动操作的直接结果**（如点击“提交”按钮），而非程序自动发起的请求。
  - 浏览器的安全策略更关注防御脚本的跨域劫持（如窃取数据），而用户自主提交的表单被视为合法行为。

### 4. **服务器端的限制与漏洞防护**

- **CORS 是客户端与服务器的协作机制**：
  - 即使表单可以跨域提交，服务器仍可通过 **CORS 头**（如 `Access-Control-Allow-Origin`）或 **CSRF 令牌** 防御攻击。
  - 例如，目标服务器（如 `b.com`）若未配置允许跨域请求，可能拒绝响应（比如设置响应头 `Access-Control-Allow-Origin: *` 或指定来源）。
  - **但表单提交本身的跨域触发行为是被浏览器允许的**，只是服务器可以选择拒绝或接受请求。

### 5. **典型场景对比**

| **行为类型**         | **是否跨域** | **是否触发 CORS 限制** | **为何**                                                                    |
| -------------------- | ------------ | ---------------------- | --------------------------------------------------------------------------- |
| 表单提交（POST/GET） | 是           | 否（除服务器限制外）   | 浏览器原生支持，视为用户行为，不阻止单纯的 HTTP 请求。                      |
| AJAX 请求 (POST)     | 是           | 是（需预检或 CORS 头） | JavaScript 发起的异步请求，受 Same-Origin Policy 制约，需服务器 CORS 允许。 |
| 跨域图片加载         | 是           | 否                     | 浏览器允许非敏感资源加载。                                                  |

### 6. **例外情况**

- **带附加 HTTP 头的表单提交**：
  - 如果通过 JavaScript 修改表单提交的自定义头（如 `XMLHttpRequest` 中的行为），则可能触发复杂请求的预检（OPTIONS），但 **原生表单提交不支持自定义头**，因此还是绕过了预检。
- **非默认方法（如 PUT）**：
  - 表单的 `method` 属性默认是 `GET` 或 `POST`，但也可以指定其他方法（如 `PUT`）。此时跨域提交可能触发预检，但浏览器仍允许请求发出，最终是否成功取决于服务器处理。

### 7. **总结**

表单提交不会出现跨域错误的核心原因在于：

1. **不涉及 XSS 脚本攻击风险**：表单提交是用户的直接操作，而非脚本自动触发。
2. **仅依赖简单 HTTP 请求方法**：POST/GET 作为简单请求，无需预检。
3. **Same-Origin Policy 的豁免**：浏览器核心设计允许表单跨域提交，将此视为合法的用户行为。

尽管如此，**服务器应始终验证请求来源**，例如通过 `Referer` 或 X-CSRF-Token，以防范 CSRF（跨站请求伪造）攻击，这是表单提交跨域时需额外注意的安全措施。
