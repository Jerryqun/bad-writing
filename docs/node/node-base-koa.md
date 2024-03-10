---
nav: Node
group: 基础
toc: content
mobile: false
title: koa洋葱模型
---

## koa 洋葱模型

<a href="https://zhuanlan.zhihu.com/p/279391637" target="_blank" rel="noreferrer">参考</a>

中间件的执行流必定是如下的一个流程：

- 外层中间件进行前期处理（next 前的逻辑）
- 调用 next，将控制流交给下个中间件，并 await 其完成，直到后面没有中间件或者没有 next 函数执行为止
- 完成后一层层回溯执行各个中间件的后期处理（next 后的逻辑）
- 这就是洋葱模型

```js
const Koa = require('koa');
const app = new Koa();
app.use(async (ctx, next) => {
  console.log('---1--->');
  await next();
  console.log('===6===>');
});
app.use(async (ctx, next) => {
  console.log('---2--->');
  await next();
  console.log('===5===>');
});
app.use(async (ctx, next) => {
  console.log('---3--->');
  await next();
  console.log('===4===>');
});

app.listen(8899, () => {
  console.log('应用启动了');
});

// 执行结构结果就是 1 2 3 4 5 6

let fn = function (ctx) {
  return dispatch(0);

  function dispatch(i) {
    let currentMW = middleware[i];
    if (!currentMW) {
      return;
    }
    return currentMW(ctx, dispatch.bind(null, i + 1));
  }
};

fn();
```

## bind 会保留上次一次传入的参数

洋葱模型就是利用了 bind 传入上一个函数的 next

```js
function add(a, b) {
  return a + b;
}

// 使用 bind() 预置第一个参数 a = 2
const addTwo = add.bind(null, 2);

// 当我们调用 addTwo() 时，只需要传入第二个参数
console.log(addTwo(3)); // 输出 5，相当于执行 add(2, 3)
```
