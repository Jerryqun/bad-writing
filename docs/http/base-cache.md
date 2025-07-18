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

我们的缓存主要是针对 html,css,img 等静态资源（资源文件的缓存处理，html 文件一般进行协商缓存或者不缓存，而 js、css 文件一般使用强缓存或者协商缓存），常规情况下，我们不会去缓存一些动态资源，因为缓存动态资源的话，数据的实时性就不会不太好，所以我们一般都只会去缓存一些不太容易被改变的静态资源。

## 强制缓存

1、基于 Expires(取本地时间戳，并对先前拿到的资源文件中的 Expires 字段的时间做比较。来判断是否需要对服务器发起请求。这里有一个巨大的漏洞：如果我本地时间不准咋办)

2、基于 cache-control（Expires 的替代品）
`Cache-control 这个字段在 http1.1 中被增加，Cache-control 完美解决了 Expires 本地时间和服务器时间不同步的问题`。是当下的项目中实现强缓存的最常规方法。

Cache-control 的使用方法很简单，只要在资源的响应头上写上需要缓存多久就好了，单位是秒  
`no-cache 表示是强制进行协商缓存`  
no-store 是表示禁止任何缓存策略。  
public 表示资源即可以被浏览器缓存也可以被代理服务器缓存。  
private 表示资源只能被浏览器缓存。

max-age 决定客户端资源被缓存多久。  
s-maxage 决定代理服务器缓存的时长。

命中强缓存的表现形式：Firefox 浏览器表现为一个灰色的 200 状态码。Chrome 浏览器状态码表现为 200 (from disk cache)或是 200 OK (from memory cache)

## 协商缓存<br/>

last-modified 和 ETag 可以共存，ETag 优先级高

1、基于 last-modified
首先需要在服务器端读出文件修改时间，
将读出来的修改时间赋给响应头的 last-modified 字段。
最后设置 Cache-control:no-cache

当客户端读取到 last-modified 的时候，会在下次的请求标头中携带一个字段:If-Modified-Since 就是服务器给他的时间。

2、基础 ETag 的协商缓存  
ETag 就是将原先协商缓存的比较时间戳的形式修改成了比较`文件指纹`。

1.第一次请求某资源的时候，服务端读取文件并计算出文件指纹，将文件指纹放在响应头的 etag 字段中跟资源一起返回给客户端。

2.第二次请求某资源的时候，客户端自动从缓存中读取出上一次服务端返回的 ETag 也就是文件指纹。并赋给请求头的 if-None-Match 字段，让上一次的文件指纹跟随请求一起回到服务端。

3.服务端拿到请求头中的 is-None-Match 字段值（也就是上一次的文件指纹），并再次读取目标资源并生成文件指纹，两个指纹做对比。如果两个文件指纹完全吻合，说明文件没有被改变，则直接返回 304 状态码和一个空的响应体并 return。如果两个文件指纹不吻合，则说明文件被更改，那么将新的文件指纹重新存储到响应头的 ETag 中并返回给客户端

## 有些缓存是从磁盘读取，有些缓存是从内存读取，有什么区别？

从内存读取的缓存更快  
所有带 304 的资源都是协商缓存。

## 状态码 304（协商缓存）

服务器为了提高网站访问速度，对之前访问的部分页面指定缓存机制，当客户端在此对这些页面进行请求，服务器会根据缓存内容判断页面与之前是否相同，若相同便直接返回 304，此时客户端调用缓存内容，不必进行二次下载。状态码 304 不应该认为是一种错误，而是对客户端有缓存情况下服务端的一种响应。搜索引擎蜘蛛会更加青睐内容源更新频繁的网站。通过特定时间内对网站抓取返回的状态码来调节对该网站的抓取频次。若网站在一定时间内一直处于 304 的状态，那么蜘蛛可能会降低对网站的抓取次数。相反，若网站变化的频率非常之快，每次抓取都能获取新内容，那么日积月累，的回访率也会提高。
产生较多 304 状态码的原因：  
1、页面更新周期长或不更新  
2、纯静态页面或强制生成静态 html

## 浏览器缓存

https://juejin.cn/post/6898630134530752520

### Cookie

- `Cookie 的作用域仅仅由 domain 和 path 决定，与协议和端口无关`<br/>

  Domain 属性指定浏览器发出 HTTP 请求时，哪些域名要附带这个 Cookie。如果没有指定该属性，浏览器会默认将其设为当前 URL 的一级域名，比如 `http://www.example.com` 会设为 `http://example.com`，而且以后如果访问`http://example.com`的任何子域名，HTTP 请求也会带上这个 Cookie。如果服务器在 Set-Cookie 字段指定的域名，不属于当前域名，浏览器会拒绝这个 Cookie。

  Path 属性指定浏览器发出 HTTP 请求时，哪些路径要附带这个 Cookie。只要浏览器发现，Path 属性是 HTTP 请求路径的开头一部分，就会在头信息里面带上这个 Cookie。比如，PATH 属性是/，那么请求/docs 路径也会包含该 Cookie。当然，前提是域名必须一致。

- cookie 在不同端口号可以共享<br/>
- 设置 httpOnly 使得 js 不能访问 cookie <br/>
- 设置 Secure 使得只有 https 的请求才会带上 cookie<br/>
  secure 选项只是限定了在安全情况下才可以传输给服务端，但并不代表你不能看到这个 cookie
- SameSite 是 HTTP 响应头 Set-Cookie 的属性之一。<br/>
  它允许声明该 Cookie 是否仅限于第一方或者同一站点上下文。<br/>
  SameSite 可以有下面三种值：<br/>
  Lax：这是默认值。如果设置为 Lax，Cookie 在同站请求（例如，用户从同一网站上的一个页跳转到另一个页时）中会被发送。但在跨站请求（例如，用户点击从其他网站的链接）中，Cookie 将不会被发送，除了某些安全场景（如 GET 请求）。

  Strict：如果设置为 Strict，Cookie 只会在同一站点的请求中被发送。在任何跨站请求中（不论是链接、表单提交或 AJAX 请求），Cookie 都不会被发送。这提供了更高的安全性，但会影响用户体验，因为用户从外部链接进入时无法保持登录状态。

  None：如果设置为 None，Cookie 会在所有上下文中被发送，无论是同站请求还是跨站请求。但是，使用 None 时，必须同时将 Secure 属性设置为 true，这意味着该 Cookie 只能通过 HTTPS 连接传输。

- Expires 属性指定一个具体的到期时间，到了指定时间以后，浏览器就不再保留这个 Cookie。它的值是 UTC 格式（示例：Wed, 01 Jan 2025 00:00:00 GMT）。如果不设置该属性，或者设为 null，Cookie 只在当前会话（session）有效，浏览器窗口一旦关闭，当前 Session 结束，该 Cookie 就会被删除。另外，浏览器根据本地时间，决定 Cookie 是否过期，由于本地时间是不精确的，所以没有办法保证 Cookie 一定会在服务器指定的时间过期。

- Max-Age 属性指定从现在开始 Cookie 存在的秒数，比如 `60 *60 *24 * 365`（即一年）。过了这个时间以后，浏览器就不再保留这个 Cookie。如果同时指定了 Expires 和 Max-Age，那么 Max-Age 的值将优先生效。如果 Set-Cookie 字段没有指定 Expires 或 Max-Age 属性，那么这个 Cookie 就是 Session Cookie，即它只在本次对话存在，一旦用户关闭浏览器，浏览器就不会再保留这个 Cookie。

cookie 的有效时间设置为 0 会怎么样?  
`Cookie 过期时间设置为 0，表示跟随系统默认，其销毁与 Session 销毁时间相同，会在浏览器关闭后删除`

`会话 cookie 一般不存储在硬盘上而是保存在内存里 `
`如果设置了过期时间，浏览器就会把 cookie 保存到硬盘上`

### 什么是第三方Cookie
如果你访问 news.com，页面内嵌了一个来自 facebook.com 的“点赞”按钮，那么 facebook.com 设置的Cookie就是第三方Cookie。

第三方Cookie：由当前网页中嵌入的第三方资源（如广告脚本、社交媒体按钮、分析工具等）设置的Cookie，域名与当前网站不同（例如 ad-tracker.com）。


### 前端对 cookie 的读写

前端可以自己创建 cookie，如果服务端创建的 cookie 没加 HttpOnly，那恭喜你也可以修改他给的 cookie。

调用 document.cookie 可以创建、修改 cookie，和 HTTP 一样，一次 document.cookie 能且只能操作一个 cookie。

写

```js
document.cookie =
  'username=jimu; domain=jimu.com; path=/blog; Expires=Wed, 21 Oct 2015 07:28:00 GMT; Secure; HttpOnly';
```

读

```js
console.log(document.cookie);
// username=jimu; height=180; weight=80
```

### sessionStorage

`sessionStorage` 是 Web Storage API 的一部分，它提供了一种在浏览器会话期间存储键值对数据的机制。`sessionStorage` 对象存储的数据在页面会话期间一直存在，但只限于该页面的标签或窗口。当标签或窗口被关闭后，`sessionStorage` 中存储的数据就会被清除。

`sessionStorage 不通浏览器窗口不能共享`

在不确定是否存在 key 的情况下，可以使用 hasOwnProperty() 进行检查;

```js
localStorage.hasOwnProperty('userName'); // true
sessionStorage.hasOwnProperty('userName'); // false
```

#### sessionStorage 主要特性

- **会话级别生命周期**：`sessionStorage` 存储的数据仅在当前页面会话期间有效，关闭页面或浏览器会导致数据丢失。
- **同源隔离**：`sessionStorage` 遵循同源策略，不同的源无法共享存储的数据。
- **页面隔离**：不同的页面（即使是相同的源）拥有不同的 `sessionStorage`，除非它们在同一个浏览器窗口的同一个标签页中打开，例如通过 `<iframe>` 标签。
- **容量限制**：`sessionStorage` 相对于 `cookie` 有较大的存储容量限制（通常至少 5MB）。

#### sessionStorage 使用场景

- **表单数据的临时保存**：在填写长表单时，可将数据存储在 `sessionStorage` 中，避免因刷新或错误导致数据丢失。
- **页内状态管理**：存储页面的状态（如选项卡位置、滚动位置等），在用户回到页面时恢复这些状态。
- **会话期间的数据传递**：在同一浏览器标签的不同页面之间传递数据，例如在单页应用程序(SPA)中。
- **记住滚动条**：列表页的滚动条位置是保存在 `sessionStorage` 中的，当用户刷新页面时，滚动条会自动返回到上次的位置。

#### sessionStorage 如何使用

`sessionStorage` 可以通过简单的键值对 API 进行操作，包括 `setItem`、`getItem`、`removeItem` 和 `clear` 方法。

```js
// 存储数据
sessionStorage.setItem('key', 'value');

// 读取数据
const value = sessionStorage.getItem('key'); // 返回 'value'

// 移除单个数据项
sessionStorage.removeItem('key');

// 清除所有数据
sessionStorage.clear();
```

#### sessionStorage 注意事项

- sessionStorage 不能在多个窗口或标签页之间共享数据，但是当通过 window.open 或链接打开新页面时(不能是新窗口)，新页面会复制前一页的 sessionStorage。

- `sessionStorage` 仅能存储字符串类型的数据。如果你需要存储对象，可以使用 `JSON.stringify()` 在存储之前将对象转换为字符串，然后使用 `JSON.parse()` 在读取后将字符串转换回对象。
- `sessionStorage` 是不可跨标签页或窗口共享的，这与 `localStorage` 不同，后者在同一浏览器的所有标签页和窗口中共享，只要它们来自相同的源。
- 由于 `sessionStorage` 在浏览器端被存储和访问，不应该用它来存储敏感信息，以防止可能的 XSS 攻击。

综上所述，`sessionStorage` 是一种方便的前端存储方式，用于在浏览器会话期间存储和管理数据。

### Cookie、sessionStorage、localStorage 的区别

相同点
都存在客户端

不同点<br/>
1、cookie 数据存储不能大于 `4k`, sessionStorage 和 localStorage 最大可 `5M`(存储数据的大小) <br/>
2、cookie 可以设置过期时间 ,sessionStorage 是当前会话关闭时消失 ,localStorage 永远不会消失，除非手动删除(生命周期)<br/>
3、cookie 会自动带在请求头里面送往服务器<br/>

ajax 请求的接口 set-Cookies 的时候如果是跨站  
必须开启 withCredentials: true 请求才会带上 cookie，不开启 set-Cookies 也会不生效<br/>

在 Axios 中，withCredentials 的默认值是 false。这意味着在跨域请求时，默认情况下不会发送 cookies 或 HTTP 授权头等凭据

## sessionid

`sessionid` 或称会话标识（Session ID），是一个用于唯一标识用户会话（Session）的字符串。在 Web 应用程序中，由于 HTTP 协议本身是无状态的，服务器需要一种方式来区分和管理不同用户的交互状态。`sessionid` 就是用于这个目的的关键机制。

当用户首次访问一个网站时，服务器会生成一个唯一的 `sessionid` 并将其发送给用户的浏览器，通常是以 cookie 的形式。这个 `sessionid` 随后会被浏览器存储，并在之后的每次请求中发送回服务器，这样服务器就能识别出请求是来自同一个用户，并维护该用户的状态信息。

### 主要特性

- **唯一性**：每个用户会话都有一个独特的 `sessionid`，确保用户之间的数据不会相互干扰。
- **临时性**：`sessionid` 通常仅在用户的浏览器会话期间有效。用户关闭浏览器或长时间不活动后，服务器可以设置会话过期。
- **安全性**：`sessionid` 需要被安全地生成和管理，以防止会话劫持和固定会话攻击等安全问题。通常通过 HTTPS 传输来提高安全性。

### 使用场景

- **用户登录**：`sessionid` 用于跟踪用户的登录状态，允许用户在浏览多个页面时保持登录状态。
- **购物车功能**：在电子商务网站中，`sessionid` 可以用于跟踪用户添加到购物车的商品，直到结账或会话结束。
- **用户偏好**：存储用户在应用中的临时设置或偏好，例如语言选择或主题设置。

### 安全性注意事项

- **cookie 属性**：设置 `sessionid` cookie 时，应使用 `Secure` 和 `HttpOnly` 属性。`Secure` 属性确保它只能通过 HTTPS 传输，而 `HttpOnly` 属性防止 JavaScript 访问这个 cookie，减少 XSS 攻击的风险。
- **会话固定保护**：在用户登录后，应更新 `sessionid` 以防止会话固定攻击。
- **过期时间**：设置合理的会话超时，以减少会话劫持的风险。

`sessionid` 是一种服务器端的会话管理技术，对于构建交互式 Web 应用和维护用户状态非常重要，同时也需要妥善处理以保护用户的安全和隐私。

## 三种刷新对缓存的影响

- 正常操作：地址栏输入 url，跳转链接，前进后退  
  强制缓存生效、协商缓存生效

- 手动刷新：F5, 点击刷新按钮，点击右侧菜单  
  `强制缓存失效、协商缓存生效`

- 强制刷新：ctrl+f5/command+shift+f5 （mac 电脑：Command + Shift + R ）  
  强制缓存失效、协商缓存失效

## 如何实现可过期的 localStorage 数据

示例代码

```js
function setItemWithExpiry(key, value, ttl) {
  const now = new Date();
  const item = {
    value: value,
    expiry: now.getTime() + ttl, // ttl 是过期时间（以毫秒为单位）
  };
  localStorage.setItem(key, JSON.stringify(item));
}

function getItemWithExpiry(key) {
  const itemStr = localStorage.getItem(key);

  // 如果不存在数据，则直接返回 null
  if (!itemStr) {
    return null;
  }

  const item = JSON.parse(itemStr);
  const now = new Date();

  // 检查是否过期
  if (now.getTime() > item.expiry) {
    // 数据过期，删除数据
    localStorage.removeItem(key);
    return null;
  }

  return item.value;
}

// 存储数据，过期时间为 5 分钟（300000 毫秒）
setItemWithExpiry('myKey', 'myValue', 300000);

const value = getItemWithExpiry('myKey');
console.log(value); // 如果未过期则输出 'myValue'，否则输出 null
```

## 监听 Storage 变化

1. 监听同源非同一个页面

直接在其他页面添加监听事件即可。

eg：同域下的 A、B 两个页面，A 修改了 localStorage，B 页面可以监听到 storage 事件。

```js
window.addEventListener('storage', (e) => {
  // 监听 username 值变化
  if (e.key === 'username') {
    console.log('username 旧值：' + e.oldValue + '，新值：' + e.newValue);
  }
});
```

当两次 setItem 更新的值一样时，监听方法是不会触发的；  
`storage 事件只能监听到 localStorage 的变化`。

2. 监听同一个页面 (通过重写 setItem)

```js
(() => {
  const originalSetItem = localStorage.setItem;
  // 重写 setItem 函数
  localStorage.setItem = function (key, val) {
    let event = new Event('setItemEvent');
    event.key = key;
    event.newValue = val;
    window.dispatchEvent(event);
    originalSetItem.apply(this, arguments);
  };
})();

window.addEventListener('setItemEvent', function (e) {
  // 监听 username 值变化
  if (e.key === 'username') {
    const oldValue = localStorage.getItem(e.key);
    console.log('username 旧值：' + oldValue + '，新值：' + e.newValue);
  }
});
```

## 计算存储容量

```js
let str = '0123456789';
let temp = '';
// 先生成一个 10KB 的字符串
while (str.length !== 10240) {
  str = str + '0123456789';
}
// 清空
localStorage.clear();
// 计算总量
const computedTotal = () => {
  return new Promise((resolve) => {
    // 往 localStorage 中累积存储 10KB
    const timer = setInterval(() => {
      try {
        localStorage.setItem('temp', temp);
      } catch (e) {
        // 报错说明超出最大存储
        resolve(temp.length / 1024);
        clearInterval(timer);
        // 统计完记得清空
        localStorage.clear();
      }
      temp += str;
    }, 0);
  });
};
// 计算使用量
const computedUse = () => {
  let cache = 0;
  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
      cache += localStorage.getItem(key).length;
    }
  }
  return (cache / 1024).toFixed(2);
};

(async () => {
  const total = await computedTotal();
  let use = '0123456789';
  for (let i = 0; i < 1000; i++) {
    use += '0123456789';
  }
  localStorage.setItem('use', use);
  const useCache = computedUse();

  console.log(`最大容量${total}KB`);
  console.log(`已用${useCache}KB`);
  console.log(`剩余可用容量${total - useCache}KB`);
})();
```
