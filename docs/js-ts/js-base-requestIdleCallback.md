---
nav: Js
toc: content
group: 基础概念
mobile: false
title: requestIdleCallback
---

## requestIdleCallback

<a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback" target="_blank">MDN</a>

requestIdleCallback 目前只有谷歌浏览器支持

window.requestIdleCallback() 方法插入一个函数，这个函数将在浏览器空闲时期被调用。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。函数一般会按先进先调用的顺序执行，然而，如果回调函数指定了执行超时时间 timeout，则有可能为了在超时前执行函数而打乱执行顺序
