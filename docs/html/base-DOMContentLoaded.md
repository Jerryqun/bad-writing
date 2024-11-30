---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: DOMContentLoaded
mobile: false
---

## DOMContentLoaded

如果你的 JavaScript 代码在所有的 DOM 元素之后运行，那你可能不需要监听 DOMContentLoaded 事件，因为在脚本执行的时候 DOM 已经是可用的。但是，如果你的脚本在头部或者标记为 async，监听 DOMContentLoaded 事件就很有必要了。

1、DOMContentLoaded:  
浏览器已完全加载 HTML，并构建了 DOM 树，但像 `<img>` 和样式表之类的外部资源可能尚未加载完成。 可以拿到 dom 节点,因此处理程序可以查找 DOM 节点，并初始化接口

2、load:  
浏览器不仅加载完成了 HTML，还加载完成了所有外部资源：图片，样式等。
外部资源已加载完成，样式已被应用，图片大小也已知了。

3、beforeunload/unload —— 当用户正在离开页面时。

- beforeunload 事件 —— 用户正在离开：我们可以检查用户是否保存了更改，并询问他是否真的要离开。
- unload 事件 —— 用户几乎已经离开了，但是我们仍然可以启动一些操作，例如发送统计数据。

```js
document.addEventListener('DOMContentLoaded', function () {
  // 你的初始化代码放在这里，它会在 DOM 完全加载后执行
  console.log('文档已被解析，DOM 完全就绪');
});
```
