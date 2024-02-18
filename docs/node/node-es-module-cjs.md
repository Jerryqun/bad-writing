---
nav: Node
group: 基础
toc: content
mobile: false
title: ES6 模块与 CommonJS 模块的差异
---

## ES6 模块与 CommonJS 模块的差异

### 一、 CommonJS 导出的是值的拷贝,ES 模块导出的是值的引用

```js
// CommonJS 不能在浏览器中工作，它必须经过转换和打包。
// lib.js(CommonJS)
var counter = 3;
function incCounter() {
  counter++;
}
module.exports = {
  counter: counter,
  incCounter: incCounter,
};

// main.js
var mod = require('./lib');

console.log(mod.counter); // 3
mod.incCounter();
console.log(mod.counter); // 3

// ES Module
// m1.js(ES Module)
export var foo = 'bar';
setTimeout(() => (foo = 'baz'), 500);

// m2.js(ES Module)
import { foo } from './m1.js';
console.log(foo); // bar
setTimeout(() => console.log(foo), 500); //baz

// 由于 ES6 输入的模块变量，只是一个“符号连接”，所以这个变量是只读的，对它进行重新赋值会报错。
// lib.js
export let obj = {};

// main.js
import { obj } from './lib';

obj.prop = 123; // OK
obj = {}; // TypeError
```

### 二、 CommonJS 是运行时加载，ES 模块是编译时加载

CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成，而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成

### 三、CommonJS 的 require 是同步加载，ES 模块的 import 是异步加载

在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

### 四、CommonJS 中 this 指向当前模块 ES Module this 是 undefined

### 五、AMD 和 CMD

```js
/**
 * AMD和require.js  AMD规范采用异步方式加载模块
 * CMD和sea.js  CMD是另一种js模块化方案，它与AMD很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD推崇依赖就近、延迟执行。此规范其实是在sea.js推广过程中产生的。
 */

// AMD 栗子（monaco）
//g.alicdn.com/code/lib/monaco-editor/0.36.1/min/vs/editor/editor.main.nls.js

/**
 * UMD  兼容CJS AMD 使用IIFI规范 在前端和后端都适用
 * 整体是一个自执行函数，先判断 module 和 export 是否可用，这是为了兼容 CommonJS 模块规范；
 * 之后判断 define 是否可用，这是为了兼容 AMD 模块规范；如果都不可用，就直接暴露在 global 下
 */

// React UMD 栗子
https: 'use strict';
(function (d, r) {
  'object' === typeof exports && 'undefined' !== typeof module
    ? r(exports)
    : 'function' === typeof define && define.amd
    ? define(['exports'], r)
    : ((d = d || self), r((d.React = {})));
})(this, function (d) {
  // 业务代码...
});
```
