---
nav: Http
group:
  title: 安全
  order: 1
toc: content
title: XSS 漏洞
mobile: false
---

# XSS 漏洞

不严谨的 content-type 导致的 XSS 漏洞，想象一下 JSONP 就是你请求 http://youdomain.com?callback=douniwan, 然后返回 douniwan({ data })，那假如请求 http://youdomain.com?callback=<script>alert(1)</script> 不就返回 <script>alert(1)</script>({ data })了吗，如果没有严格定义好 Content-Type（ Content-Type: application/json ），再加上没有过滤 callback 参数，直接当 html 解析了，就是一个赤裸裸的 XSS 了。

解决方法：严格定义 `Content-Type: application/json`，然后严格过滤 callback 后的参数并且限制长度（进行字符转义，例如<换成&lt，>换成&gt）等，这样返回的脚本内容会变成文本格式，脚本将不会执行。

## 1、反射型 xss

反射型 XSS 只是简单地把用户输入的数据 “反射” 给浏览器，这种攻击方式往往需要攻击者诱使用户点击一个恶意链接（攻击者可以将恶意链接直接发送给受信任用户，发送的方式有很多种，比如 email, 网站的私信、评论等，攻击者可以购买存在漏洞网站的广告，将恶意链接插入在广告的链接中），或者提交一个表单，或者进入一个恶意网站时，注入脚本进入被攻击者的网站。最简单的示例是访问一个链接，服务端返回一个可执行脚本：

```js
const http = require('http');
function handleReequest(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
  res.write('<script>alert("反射型 XSS 攻击")</script>');
  res.end();
}
```

## 2、存储型：

存储型 XSS 会把用户输入的数据 "存储" 在服务器端，当浏览器请求数据时，脚本从服务器上传回并执行。这种 XSS 攻击具有很强的稳定性。比较常见的一个场景是攻击者在社区或论坛上写下一篇包含恶意 JavaScript 代码的文章或评论，文章或评论发表后，所有访问该文章或评论的用户，都会在他们的浏览器中执行这段恶意的 JavaScript 代码

// 例如在评论中输入以下留言
// 如果请求这段留言的时候服务端不做转义处理，请求之后页面会执行这段恶意代码

<script>alert('xss 攻击')</script>

## 3、基于 DOM

XSS 攻击防范  
1、HttpOnly 防止劫取 Cookie：HttpOnly 最早由微软提出，至今已经成为一个标准。浏览器将禁止页面的 Javascript 访问带有 HttpOnly 属性的 Cookie。上文有说到，攻击者可以通过注入恶意脚本获取用户的 Cookie 信息。通常 Cookie 中都包含了用户的登录凭证信息，攻击者在获取到 Cookie 之后，则可以发起 Cookie 劫持攻击。所以，严格来说，HttpOnly 并非阻止 XSS 攻击，而是能阻止 XSS 攻击后的 Cookie 劫持攻击。

2、输入检查：不要相信用户的任何输入。 对于用户的任何输入要进行检查、过滤和转义。建立可信任的字符和 HTML 标签白名单，对于不在白名单之列的字符或者标签进行过滤或编码。在 XSS 防御中，输入检查一般是检查用户输入的数据中是否包含 <，> 等特殊字符，如果存在，则对特殊字符进行过滤或编码，这种方式也称为 XSS Filter。而在一些前端框架中，都会有一份 decodingMap， 用于对用户输入所包含的特殊字符或标签进行编码或过滤，如 <，>，script，防止 XSS 攻击

## 4、 使用 DOMPurify.sanitize 避免 xss 攻击

```js
const sanitizedInput = DOMPurify.sanitize(userInput);
document.body.innerHTML = sanitizedInput; // 安全使用

// DOMPurify 还提供了许多选项来控制清理过程，比如允许的标签、属性等。例如：
const clean = DOMPurify.sanitize(dirty, {
  ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a'], // 允许的标签
  ALLOWED_ATTR: ['href'], // 允许的属性
});

// npm install dompurif
// 使用import DOMPurify from 'dompurify';
const dirty =
  '<div onclick="alert(\'XSS\')">Hello <strong>World</strong>!</div>';
const clean = DOMPurify.sanitize(dirty);
console.log(clean); // 输出: <div>Hello <strong>World</strong>!</div>
```
