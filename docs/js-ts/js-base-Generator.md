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
// 不过这里要注意一个不同点，调用 next 的时候能得到 4 ，但是用 for 则会忽略最后的 return 语句。 也就是 for 循环会忽略 generator 中的 return 语句.
```

Generator 可嵌套

```js
function* gen1() {
  yield 1;
  yield* gen2();
  yield 4;
}
function* gen2() {
  yield 2;
  yield 3;
}
var g = gen1();
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
// 结果
// { value: 1, done: false }
// { value: 2, done: false }
// { value: 3, done: false }
// { value: 4, done: false }
// {value: undefined, done: true}
```

## generator 生成器原理

其实，在生成器内部，如果遇到 yield 关键字，那么 V8 引擎将返回关键字后面的内容给外部，并暂停该生成器函数的执行。生成器暂停执行后，外部的代码便开始执行，外部代码如果想要恢复生成器的执行，可以使用 result.next 方法。

那 V8 是怎么实现生成器函数的暂停执行和恢复执行的呢？

它用到的就是协程，协程是—种比线程更加轻量级的存在。我们可以把协程看成是跑在线程上的任务，一个线程上可以存在多个协程，但是在线程上同时只能执行一个协程。比如，当前执行的是 A 协程，要启动 B 协程，那么 A 协程就需要将主线程的控制权交给 B 协程，这就体现在 A 协程暂停执行，B 协程恢复执行; 同样，也可以从 B 协程中启动 A 协程。通常，如果从 A 协程启动 B 协程，我们就把 A 协程称为 B 协程的父协程。

正如一个进程可以拥有多个线程一样，一个线程也可以拥有多个协程。每一时刻，该线程只能执行其中某一个协程。最重要的是，协程不是被操作系统内核所管理，而完全是由程序所控制（也就是在用户态执行）。这样带来的好处就是性能得到了很大的提升，不会像线程切换那样消耗资源。

## Async、Await

async、await 是 co 库的官方实现。也可以看作自带启动器的 generator 函数的语法糖。不同的是，async、await 只支持 Promise 和原始类型的值，不支持 thunk 函数。

co 函数库是一个 generator 函数的自启动执行器，使用条件是 generator 函数的 yield 命令后面，只能是 thunk 函数或 Promise 对象

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

## Generator 应用

```js
//发号器

function* createIdMaker() {
  let id = 1;
  while (true) {
    yield id++;
  }
}

const idMaker = createIdMaker();
idMaker.next().value;
idMaker.next().value;
idMaker.next().value;
idMaker.next().value;

// 使用generator 实现iterator方法

const todo = {
  life: ['吃饭', '睡觉'],
  learn: ['语文', '数学'],
  [Symbol.iterator]: function* () {
    const all = [...this.learn, ...this.life];
    for (const item of all) {
      yield item;
    }
  },
};
```

## 手写 Async、Await 的实现

```js
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function* generator() {
  console.log('start');
  yield delay(1000);
  console.log('after 1 second');
  yield delay(2000);
  console.log('after 2 more seconds');
}

function async(generatorFunc) {
  const iterator = generatorFunc();

  function handle(iteratorResult) {
    if (iteratorResult.done) {
      return Promise.resolve(iteratorResult.value);
    }

    return Promise.resolve(iteratorResult.value).then((res) => {
      return handle(iterator.next(res));
    });
  }

  return handle(iterator.next());
}

async(function () {
  return generator();
}).then(() => {
  console.log('all done');
});
```


## yield 和yield* js中有什么区别
- yield:  
从当前生成器函数中返回一个值并暂停执行。
每次调用 next() 时，可以返回一个值。
- yield*:  
委托执行到另一个生成器或可迭代对象。
将目标生成器的所有 yield 值都逐一返回，直至目标生成器完结。
在遇到 done: true 后，控制权会返回到外部生成器。

