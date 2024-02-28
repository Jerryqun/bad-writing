---
nav: Js
group: 基础概念
toc: content
title: eval()和 Function()
---

## eval()和 Function()

<a target="_blank" href="https://www.jianshu.com/p/db7ec7b51933">参考</a>

```js
const a = eval('{ foo: 123 }'); // 123
const b = eval('({ foo: 123 })'); // {foo:123}

const sum = eval('30*10+5');
console.log('sum', sum); // 305

// 在松散模式下运行代码会在当前的作用域中创建局部变量
function f() {
  eval('var foo = 1');
  console.log(foo); // 1
}

function f() {
  'use strict';
  eval('var foo =1');
  console.log(foo); // ReferenceError: foo is not defined
}

var f = new Function('x', 'y', 'return x+y');
f(3, 4); // 7
```

## eval5

https://developers.weixin.qq.com/community/develop/article/doc/0008e04edb0a782baad9f463251813

eval5 是一个 JavaScript 库，它提供了一个独立的 JavaScript 解释器。这个库可以在不支持标准 eval 函数或者 new Function() 的 JavaScript 环境中执行 JavaScript 代码，例如在某些限制了 eval 使用的安全环境或者 Web Workers 中。

eval5 的一些特点和用途包括：

1、沙箱执行：它允许在一个隔离的环境中执行代码，不影响全局作用域，这对于安全执行不受信任的代码非常有用。

2、跨平台：它可以在不同的 JavaScript 环境中使用，包括浏览器和 Node.js。

3、执行字符串中的代码：就像内置的 eval 函数一样，它可以执行字符串形式的代码。

举个例子，如果你在一个限制了 eval 的环境中，可以使用 eval5 来间接实现类似 eval 的功能：

```js
import { Interpreter } from 'eval5';

const interpreter = new Interpreter(window); // 传入全局对象，例如在浏览器中可以是 window
const result = interpreter.evaluate('1 + 1'); // 解释并执行字符串中的 JS 代码
console.log(result); // 输出 2
```
