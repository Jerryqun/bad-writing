---
nav: Js
group: 进阶
toc: content
title: Event-loop
---

## Event-loop

### 宏任务

script （主代码块）、setTimeout、 setInterval 、setImmediate、 I/O 、UI rendering

### 微任务

process.nextTick（Nodejs） 、promise then 里面的 js 代码 、async await (await 后面的 js 代码) 、 Object.observe 、MutationObserver

宏任务 => 微任务的 Event Queue => 宏任务的 Event Queue

### 宏任务是在下次事件循环中执行，不会阻塞浏览器更新<br/>

栗子

```js
setTimeout(() => {
  document.querySelector('body').style.backgroundColor = 'green';
}, 2000);
document.querySelector('body').style.backgroundColor = 'red';
// 表现为先变红 两秒后变绿
```
