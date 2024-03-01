---
nav: Node
group: 常用包
toc: content
mobile: false
title: asyncPool
---

## asyncPool

<a href="https://www.npmjs.com/package/tiny-async-pool" target="_blank">github 参考</a>

<a href="https://www.cnblogs.com/yf-html/p/14957529.html" target="_blank">实现解析</a>

## 使用实例

```js
// 执行顺序 一开始 1000, 5000 压入执行队列， 一秒后1000任务执行完毕， 压入3000  然后三秒后 3000任务执行完毕压入2000  一秒后5000执行完毕 最后再一秒后2000 执行完毕

// results 按顺序输出结果
// asyncPool 第一个参数：并发执行的个数
// asyncPool 第二个参数：传入第三个参数函数的参数, 其长度就是任务数
// asyncPool 第三个参数：一个函数 返回一个promise 对象

const timeout = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));

async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务
  for (const item of array) {
    // 调用iteratorFn函数创建异步任务
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p); // 保存新的异步任务

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // 保存正在执行的异步任务
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(ret);
}

async function a() {
  return asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
    console.log('results: ', results);
  });
}
a();
```

## 源码

```js
async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // 存储所有的异步任务
  const executing = []; // 存储正在执行的异步任务
  for (const item of array) {
    // 调用iteratorFn函数创建异步任务
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p); // 保存新的异步任务

    // 当poolLimit值小于或等于总任务个数时，进行并发控制
    if (poolLimit <= array.length) {
      // 当任务完成后，从正在执行的任务数组中移除已完成的任务
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // 保存正在执行的异步任务
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // 等待较快的任务执行完成
      }
    }
  }
  return Promise.all(ret);
}
```
