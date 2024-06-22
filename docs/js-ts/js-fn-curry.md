---
nav: Js
group: 函数式编程
toc: content
title: 函数柯里化
---

## 函数柯里化

函数柯里化指的是将能够接收多个参数的函数转化为接收单一参数的函数，并且返回接收余下参数且返回结果的新函数的技术

如何 实现 sum(1)(2)(3).. 打印 6，sum(1,2,3)也打印 6

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
