---
nav: Js
group: 基础概念
toc: content
title: eval()和 Function()
---

## eval()和 new Function()

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

## 区别

```js
var hello = 10;
function createFunction1() {
  var hello = 20;
  return new Function('return hello;'); // 这里的 hello 指向全局作用域内的 hello
}
var f1 = createFunction1();
console.log(f1()); // 10

var world = 10;
function createFunction2() {
  var world = 20;
  return eval('world;'); // 这里的 world 指向函数作用域内的 world
}
console.log(createFunction2()); // 20

var world = 10;
function createFunction2() {
  var world = 20;
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
  // 使用间接调用 (0,eval) 或者 var geval = eval; 可以达到相同的效果
  return window.eval('world;'); // 这里的 world 指向全局作用域内的 world
}
console.log(createFunction2()); // 10
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

## 怎么在 react 技术栈的低代码平台中，实现组件的脚本注入？ 使用 new Function

```js
import React, { useState, useEffect } from 'react';

function CustomComponent() {
  const [value, setValue] = useState(0);
  const [customScript, setCustomScript] = useState('');

  // 用于执行用户脚本的函数
  const executeUserScript = (script, props, state) => {
    try {
      const scriptFn = new Function('props', 'state', script);
      return scriptFn(props, state);
    } catch (error) {
      console.error('Script execution error:', error);
    }
  };

  // 在组件初始化或更新时执行
  useEffect(() => {
    if (customScript) {
      executeUserScript(
        customScript,
        { shouldIncrease: true },
        { value, setValue },
      );
    }
  }, [customScript, value]);

  // 输入框让用户输入自定义脚本
  return (
    <div>
      <textarea
        value={customScript}
        onChange={(e) => setCustomScript(e.target.value)}
        placeholder="Enter your JavaScript code here"
      />
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increase Value</button>
    </div>
  );
}

export default CustomComponent;
```
