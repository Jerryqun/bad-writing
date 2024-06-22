---
nav: Js
toc: content
group: 基础概念
mobile: false
title: Symbol
---

## Symbol

每个 Symbol 都是完全唯一的。传递给 Symbol 的参数只是给 Symbol 的一个描述。  
Symbol 的值不依赖于传递的参数。 当我们测试相等时，我们创建了两个全新的符号：第一个 Symbol（'foo'），  
第二个 Symbol（'foo'）, 这两个值是唯一的，彼此不相等，因此返回 false。

```js
console.log(Number(2) === Number(2)); // true
console.log(Boolean(false) === Boolean(false)); // true
console.log(Symbol('foo') === Symbol('foo')); // false
```

symbol 有什么用处

- 1、用来表示一个独一无二的变量防止命名冲突
- 2、模拟私有变量 （只有 Object.getOwnPropertySymbols 可以遍历到）
