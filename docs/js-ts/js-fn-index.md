---
nav: Js
group: 函数式编程
toc: content
title: 偏函数
---

## 偏函数

```js
/**
 柯里化说的是一个 n 元函数变成 n 个一元函数。
 偏函数说的是一个 n 元函数变成一个 m(m < n） 元函数。
 */

// 定义一个包装函数，专门用来处理偏函数逻辑
function wrapFunc(func, fixedValue) {
  // 包装函数的目标输出是一个新的函数
  function wrappedFunc(input) {
    // 这个函数会固定 fixedValue，然后把 input 作为动态参数读取
    const newFunc = func(input, fixedValue);
    return newFunc;
  }
  return wrappedFunc;
}

function multiply(a, b) {
  return a * b;
}

const multiply3 = wrapFunc(multiply, 3);

// 输出6
multiply3(2);
```

## momeize 函数 （纯函数）

```js
function momeize(fn) {
  const cache = {};
  return function () {
    const arg_str = JSON.stringify(arguments);
    cache[arg_str] = cache[arg_str] || fn.apply(fn, arguments);
    return cache[arg_str];
  };
}
```

纯函数不需要访问共享内存， 所以在并行环境下可以任意运行纯函数（web worker）
