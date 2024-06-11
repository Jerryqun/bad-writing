---
nav: Html
group:
  title: 浏览器
  order: 1
toc: content
title: script
mobile: false
---

## 浏览器加载资源之 script

<a href="https://es6.ruanyifeng.com/#docs/module-loader" target="_blank">参考</a>

默认情况下，浏览器是同步加载 JavaScript 脚本，即渲染引擎遇到`<script>`标签就会停下来，等到执行完脚本，再继续向下渲染。如果是外部脚本，还必须加入脚本下载的时间。

如果脚本体积很大，下载和执行的时间就会很长，因此造成浏览器堵塞，用户会感觉到浏览器“卡死”了，没有任何响应。这显然是很不好的体验，所以浏览器允许脚本异步加载，下面就是两种异步加载的语法。

1、defer

`<script src="path/to/myModule.js" defer></script> ` defer 是“渲染完再执行”,多个会按照它们在页面出现的顺序加载

2、async  
`<script src="path/to/myModule.js" async></script>` async 是“下载完就执行”,而多个 async 脚本是不能保证加载顺序的

浏览器加载 ES6 模块，也使用`<script>`标签，但是要加入 type="module"属性。
`<script type="module" src="./foo.js"></script>`

```js

<script type="module" src="./foo.js"></script>
<!-- 等同于 -->
<script type="module" src="./foo.js" defer></script>

<script type="module">
  import utils from "./utils.js";

  // other code
</script>
```
