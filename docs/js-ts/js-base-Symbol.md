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

## Symbol 方法

1、Symbol.for()
我们知道 Symbo()创建的两个变量永远不会是相同的。那么如果我们需要重新使用同一个 Symbol 怎么办，总不能需要挨个去进行比较吧。还好，es6 为我们提供了 Symbol.for()方法。

参数是 symbol 类型的描述信息，不同于 Symbol()，这个而参数只能是字符串或者是 undefined，若已经创建了则返回这个 symbol，否则就进行创建并将这个新的 symbol 返回，代码如下

```js
let name = Symbol.for('末晨曦');
let name1 = Symbol.for('末晨曦');
console.log(name === name1); // true
```

请注意，我们在使用创建描述信息为"末晨曦"的变量的时候，使用的是 for，而不是 Symbol()，倘若使用 Symbol()进行首次创建，for 会再次创建一次，二者不会相等，代码如下：

```js
let name = Symbol('末晨曦');
let name1 = Symbol.for('末晨曦');
console.log(name === name1); // false
```

原因在于 Symbol.for()会有一个登记机制，使用 for 只会对通过 for 创建的 symbol 进行检查，不会对 Symbol()创建的进行检查。

2、Symbol.keyFor()
这个方法参数是一个通过 Symbol.for()创建的 symbol 类型变量，返回这个 symbol 变量的描述信息。

```js
let name = Symbol.for('末晨曦');
console.log(Symbol.keyFor(name)); // "末晨曦"
let name1 = Symbol('末晨曦');
console.log(Symbol.keyFor(name1)); // undefined 　不能查找 Symbol()创建的变量
```
