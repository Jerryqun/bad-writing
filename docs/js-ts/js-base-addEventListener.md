---
nav: Js
group: 基础概念
toc: content
title: addEventListener的第三个参数
---

## addEventListener 的第三个参数

主要关注下第三个参数，可以设置为 bool 类型（useCapture）或者 object 类型(options)

1、options 包括三个布尔值选项：

capture: 默认值为 false（即使用事件冒泡），是否使用事件捕获；  
once: 默认值为 false. 是否只调用一次，if true，会在调用后自动销毁 listener  
passive: if true, 意味着 listener 永远不远调用 preventDefault 方法，如果又确实调用了的话，浏览器只会 console 一个 warning，而不会真的去执行 preventDefault 方法。根据规范，默认值为 false. 但是 chrome, Firefox 等浏览器为了保证滚动时的性能，在 document-level nodes(Window, Document, Document.body)上针对 touchstart 和 touchmove 事件将 passive 默认值改为了 true， 保证了在页面滚动时不会因为自定义事件中调用了 preventDefault 而阻塞页面渲染。

2、useCapture: 默认值为 false（即 使用事件冒泡） 设置为 true 会使用事件捕获

removeEventlister 清除监听事件的时候三个参数必须一致  

addEventListener 和 attachEvent 的区别
1、前者是标准浏览器中的用法，后者 IE8 以下  
2、addEventListener 可有冒泡，可有捕获；attachEvent 只有冒泡，没有捕获。  
3、前者事件名不带 on，后者带 on  
4、前者回调函数中的 this 指向当前元素，后者指向 window  

```js
document.querySelector('#button').addEventListener('click', () => {
  console.log('this', this); // window
});

document.querySelector('#button').addEventListener('click', function () {
  console.log('this', this); // 点击的 button dom 元素
});
```
