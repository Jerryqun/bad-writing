---
nav: Js
group: 基础概念
toc: content
title: Generator 和 Async、Await
---

## Generator

<a target="_blank" href=" https://fe.ecool.fun/topic/82b536ee-2a79-4e64-b238-061656ca8ca9?orderBy=updateTime&order=desc&tagId=0">参考</a>

Generator 是 ES6 引入的新语法，Generator 是一个可以暂停和继续执行的函数。简单的用法，
可以当做一个 Iterator 来用，进行一些遍历操作。复杂一些的用法，他可以在内部保存一些状态，成为一个状态机。
Generator 基本语法包含两部分：<br/>
1、函数名前要加一个星号<br/>
2、函数内部用 yield 关键字返回值<br/>

```js
function* g() {
  yield 1;
  yield 2;
  yield 3;
  return 4;
}

const c = g();

c.next(); // {value: 1, done: false}
c.next(); // {value: 2, done: false}
c.next(); // {value: 3, done: false}
c.next(); // {value: 4, done: true}
c.next(); // {value: undefined, done: true}

// 由于Generator也存在 Symbol.iterator 接口，所以他也可以被 for of 循环调用：
for (let i of c) {
  console.log('i', i); // 1 2 3
}
// 不过这里要注意一个不同点，调用 next 的时候能得到 3 ，但是用 for 则会忽略最后的 return 语句。 也就是 for 循环会忽略 generator 中的 return 语句.
```

## Async、Await

我最开始接触到 Async/Await 的时候把它当成了一个 promise 的语法糖，但是经过我们对 Generator 的理解后，明白了其实他就是 Generator 的一个语法糖：
async 对应的是 \*，await 对应的是 yield，
他只是自动帮我们进行了 Generator 的流程控制而已。

所以我们可以大约这么认为： async/await == generator + promise

```js
var a = 0;
var b = async () => {
  a = a + (await 10);
  console.log('2', a); // -> '2' 10
  a = (await 10) + a;
  console.log('3', a); // -> '3' 20
};
b();
a++;
console.log('1', a); // -> '1' 1

/**
 * 首先函数b 先执行，在执行到 await 10 之前变量 a 还是 0，因为在 await 内部实现了 generators ，generators 会保留堆栈中东西，所以这时候 a = 0 被保存了下来
因为 await 是异步操作，遇到await就会立即返回一个pending状态的Promise对象，暂时返回执行代码的控制权，使得函数外的代码得以继续执行，所以会先执行 console.log('1', a)
这时候同步代码执行完毕，开始执行异步代码，将保存下来的值拿出来使用，这时候 a = 10
然后后面就是常规执行代码了
 */
```
