---
nav: Node
group: 基础
toc: content
mobile: false
title: node生命周期
---

## 生命周期

<a href="https://wisdomhammer.oss-cn-hangzhou.aliyuncs.com/paifu/20240221/46248a38e201af7e0cdd11cc3da18ae6.pdf?Expires=2393982671&OSSAccessKeyId=LTAI5t5fwTBbu4WT1PJCaeCS&Signature=YoH3VNLplgbC7n2yQgWFugNYIbI%3D" target="_blank" rel="noreferrer">参考</a>

1、timers 阶段（执行 setTimeout 和 setInterval） <br/>
2、pending callbacks 内部使用 不暴露到外部钩子 <br/>
3、idle prepare 内部使用 不暴露到外部钩子 <br/>
4、poll i/o 操作 <br/>
5、check 执行 setImmediate <br/>
6、close callbacks 执行一些关闭的回调函数 <br/>

### setImmediate()

• setImmediate ⽤于在当前事件循环迭代的末尾安排⼀个回调函数执⾏。它会在事件循环的
"check" 阶段执⾏。  
• 当你想要在 I/O 操作完成后尽快执⾏回调时， setImmediate 是⼀个很好的选择。

### process.nextTick()

• process.nextTick ⽤于将回调函数推迟到当前事件循环迭代的末尾，即下⼀个 "tick" 阶段。  
它的优先级⾼于其他异步操作，因此会在其他异步操作之前执⾏。  
• 这个函数通常⽤于在异步操作之后⽴即执⾏⼀些操作，例如执⾏⼀些清理操作或更新状态。  
• process.nextTick 回调会在事件循环中的任何异步 I/O 操作之前执⾏。

### queueMicrotask()

• queueMicrotask ⽤于将⼀个微任务（microtask）添加到微任务队列中，在当前事件循环迭代  
的末尾执⾏。微任务在 I/O 之后、事件循环阶段之前执⾏。  
• 微任务通常⽤于需要尽快执⾏的、与 I/O ⽆关的操作，例如 promise 的回调函数。  
• queueMicrotask 的优先级介于 process.nextTick 和 setImmediate 之间。

```js
process.nextTick(function () {
  console.log('1');
});
process.nextTick(function () {
  console.log('2');
  setImmediate(function () {
    console.log('3');
  });
  process.nextTick(function () {
    console.log('4');
  });
});

setImmediate(function () {
  console.log('5');
  process.nextTick(function () {
    console.log('6');
  });
  setImmediate(function () {
    console.log('7');
  });
});

setTimeout((e) => {
  console.log(8);
  new Promise((resolve, reject) => {
    console.log(8 + 'promise');
    resolve();
  }).then((e) => {
    console.log(8 + 'promise+then');
  });
}, 0);

setTimeout((e) => {
  console.log(9);
}, 0);

setImmediate(function () {
  console.log('10');
  process.nextTick(function () {
    console.log('11');
  });
  process.nextTick(function () {
    console.log('12');
  });
  setImmediate(function () {
    console.log('13');
  });
});

console.log('14');

new Promise((resolve, reject) => {
  console.log(15);
  resolve();
}).then((e) => {
  console.log(16);
});

// 14
// 15
// 1
// 2
// 4
// 16
// 8
// 8promise
// 8promise+then
// 9
// 5
// 6
// 10
// 11
// 12
// 3
// 7
// 13
```
