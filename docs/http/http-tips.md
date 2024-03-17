---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: 随笔
mobile: false
---

## 如何解决资源代理时 https 域名不能访问 http 资源

https://github.dev/Jerryqun/golden-house

错误提示：
Mixed Content: The page at https://xxx was loaded over HTTPS

解决方法：

1、治标不治本法：适用于个人调试时使用

解决思路：对浏览器进行设置，允许浏览器加载“不安全内容”，以谷歌浏览器版本 102.0.5005.115（正式版本） （64 位）为例

        进入设置页面-----点击网站设置----更多内容设置---不安全内容---允许显示不安全内容---添加，将你访问的网站（例如www.testcase.com）添加进去即可，之后打开f12查看，虽然还是会出现灰色的mixed conten提示，但是已经不是红色的保存，而且我们的http地址的资源已经成功引入。适用于个人调试，因为生产环境不可能让用户去进行浏览器设置。

2.方法二：nginx 代理法

解决思路：将我们所需要的 http 服务或者资源使用 nginx 反向代理成 https 服务，我们项目中则使用 https 引入，nginx 接收到请求后再转发到实际的 http 地址。

## XMLHttpRequest 实例

```js
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://pmsaas-console.taobao.net');
xhr.onreadystatechange = function () {
  if (xhr.readyState == 4 && xhr.status == 200) {
    console.log(xhr.getResponseHeader('server'));
    console.log(xhr.responseText);
  } else {
    console.log(xhr.statusText);
  }
};

xhr.send();
```

## fetch 用法

```js
// JSON 数据 get

fetch('https://api.github.com/users/ruanyf')
  .then((response) => response.json())

  .then((json) => console.log(json))

  .catch((err) => console.log('Request Failed', err));

// JSON 数据 post
fetch('https://...', {
  method: 'post',
  body: JSON.stringify({ a: 1 }),
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((res) => res.json())
  .then((res) => console.log(res));
```

## 域名、二级域名、同站、同域概念

同源：协议（protocol）、主机名（host）和端口（port）相同，则为同源； <br/>
同站：有效顶级域名（Effective Top-Level-Domain，eTLD）和二级域名相同，则为同站。<br/>

例如 github.io 是一个有效顶级域名，如果将 .io 视为有效顶级域名，那么 https://ziyi2.github.io 和 https://xxholly32.github.io 将被浏览器视为同站

## 默认端口

http 使用 80，https 使用 443

## 加速 github 访问速度

方案一：修改本地 host 文件
修改本地 host 文件，增加配置内容，绕过域名解析，达到加速的目的。

获取 github ip 方法
访问 https://www.ipaddress.com/ 然后搜索 github.com 域名

增加 host 配置
140.82.113.4 github.com
