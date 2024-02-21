---
nav: Node
group: 基础
toc: content
mobile: false
title: NodeJS-EventLoop和浏览器EventLoop区别
---

## NodeJS-EventLoop 和浏览器 EventLoop 区别

1、任务队列个数不同
node 中有 6 个队列
浏览器中只有两个 一个宏任务队列 一个微任务队列

2、微任务队列不同
浏览器中有专门存储微任务的队列 而 node 中没有

3、微任务执行时机不同
浏览器事件环中每执行完一个宏任务都会去清空微任务队列
NodeJS 事件环中只有同步代码执行完毕和其它队列之间切换的时候会去清空微任务队列

4、微任务优先级不同
浏览器中微任务的执行顺序是队列的执行顺序 先进先出
NodeJS 事件环中如果多个微任务同时满足执行条件，会按照优先级执行

5、在 NodeJS 中 ​​process.nextTick​​ 微任务的优先级高于 ​​Promise.resolve​​ 微任务，验证代码如下：

```js
Promise.resolve().then(function () {
  console.log('Promise');
});
process.nextTick(function () {
  console.log('process.nextTick1');
});
process.nextTick(function () {
  console.log('process.nextTick2');
});
process.nextTick(function () {
  console.log('process.nextTick3');
});

// 打印：
// process.nextTick1
// process.nextTick2
// process.nextTick3
// Promise
```
