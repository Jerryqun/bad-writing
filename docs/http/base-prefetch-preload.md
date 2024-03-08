---
nav: Http
group:
  title: 网络知识
  order: 1
toc: content
title: prefetch 和 preload
mobile: false
---

## prefetch 和 preload

<a href="https://juejin.cn/post/6893681741240909832" target="_blank">prefetch 和 preload</a>

### prefetch

prefetch 将首屏不需要的资源预先加载 prefetch 的配置与 preload 类似，但无需对 as 属性进行设置。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="prefetch"
      href="https://g.alicdn.com/wisdomhammer/wisdomhammerpc/0.0.182/assets/0e40128fa20ad26c0fbcb46cf02d10f4.png"
    />
  </head>

  <body></body>
  <script>
    setTimeout(() => {
      const img = document.createElement('img');
      img.src =
        'https://g.alicdn.com/wisdomhammer/wisdomhammerpc/0.0.182/assets/0e40128fa20ad26c0fbcb46cf02d10f4.png';
      document.querySelector('body').appendChild(img);
    }, 5000);
  </script>
</html>
```

### preload

将首屏需要的资源提高加载优先级。 link 必须设置 as 属性来声明资源的类型（font/image/style/script 等)，
否则浏览器可能无法正确加载资源。 下面实例中浏览器会优先发送 img 请求再请求 script。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link
      rel="preload"
      as="image"
      href="https://g.alicdn.com/wisdomhammer/wisdomhammerpc/0.0.182/assets/0e40128fa20ad26c0fbcb46cf02d10f4.png"
    />
    <script src="
https://g.alicdn.com/code/lib/babel-standalone/7.21.2/babel.min.js"></script>
  </head>

  <body>
    <img
      src="https://g.alicdn.com/wisdomhammer/wisdomhammerpc/0.0.182/assets/0e40128fa20ad26c0fbcb46cf02d10f4.png"
    />
  </body>
</html>
```

两者的兼容性目前都还不是太好。好在不支持 preload 和 prefetch 的浏览器会自动忽略它，因此可以将它们作为一种渐进增强功能，优化我们页面的资源加载，提升性能和用户体验。
