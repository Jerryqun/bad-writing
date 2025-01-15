---
nav: Js
group: 函数式编程
toc: content
title: 函数柯里化
---

## 函数柯里化

函数柯里化是指这样一个函数，它接收函数 A，并且能返回一个新的函数，这个新的函数能够处理函数 A 的剩余参数
再具体一点，就是说柯里化是一个把 fn(a, b, c)转化为 fn(a)(b)(c)的过程。

```js
function curry(func, arity = func.length) {
  // 定义一个递归式 generateCurried
  function generateCurried(prevArgs) {
    // generateCurried 函数必定返回一层嵌套
    return function curried(nextArg) {
      // 统计目前“已记忆”+“未记忆”的参数
      const args = [...prevArgs, nextArg];
      // 若 “已记忆”+“未记忆”的参数数量 >= 回调函数元数，则认为已经记忆了所有的参数
      if (args.length >= arity) {
        // 触碰递归边界，传入所有参数，调用回调函数
        return func(...args);
      } else {
        // 未触碰递归边界，则递归调用 generateCurried 自身，创造新一层的嵌套
        return generateCurried(args);
      }
    };
  }
  // 调用 generateCurried，起始传参为空数组，表示“目前还没有记住任何参数”
  return generateCurried([]);
}
```

## 组合与管道

```js
// 组合
const compose =
  (...fns) =>
  (val) =>
    fns.reverse().reduce((acc, fn) => fn(acc), val);

// 管道
const pipe =
  (...fns) =>
  (val) =>
    fns.reduce((acc, fn) => fn(acc), val);
```

## 高阶函数

高阶函数，就是以函数作为输入或者输出的函数被称为高阶函数

## 具名函数表达式

具名函数表达式是函数表达式的一种形式，其中函数有一个名字。

`函数有一个名字（namedFunction），该名称仅在函数内部可用，用于递归调用或调试`

```js
const myFunction = function namedFunction() {
  console.log('Named Function Expression');
};
```

## 匿名函数

```js
var func = () => {
  // 函数的代码块
};

var sum = function (a, b) {
  return a + b;
};
```
