---
nav: Node
group: 基础
toc: content
mobile: false
title: koa洋葱模型
---

## koa 洋葱模型

<a href="https://zhuanlan.zhihu.com/p/279391637" target="_blank" rel="noreferrer">参考</a>

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
