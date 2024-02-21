---
nav: Node
group: 基础
toc: content
mobile: false
title: ESModule与CommonJS
---

<a href="https://juejin.cn/post/6994224541312483336?searchId=202402211345021A43ED69CB7D6C1BFED9" target="_blank" rel="noreferrer">参考</a>

## Commonjs 总结

CommonJS 模块由 JS 运行时实现。<br/>
CommonJs 是单个值导出，本质上导出的就是 exports 属性。<br/>
CommonJS 是可以动态加载的，对每一个加载都存在缓存，可以有效的解决循环引用问题。<br/>
CommonJS 模块同步加载并执行模块文件。<br/>

## es module 总结

ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时。<br/>
ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直接访问修改结果。<br/>
ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。<br/>
ES6 模块提前加载并执行模块文件。<br/>
ES6 Module 导入模块在严格模式下。<br/>
ES6 Module 的特性可以很容易实现 Tree Shaking 和 Code Splitting。<br/>

## ES6 模块与 CommonJS 模块的差异

一、 CommonJS 导出的是值的拷贝,ES 模块导出的是值的引用

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

二、 CommonJS 是运行时加载，ES 模块是编译时加载

CommonJS 加载的是一个对象（即 module.exports 属性），该对象只有在脚本运行完才会生成，而 ES6 模块不是对象，它的对外接口只是一种静态定义，在代码静态解析阶段就会生成

三、CommonJS 的 require 是同步加载，ES 模块的 import 是异步加载

在服务端，模块文件都存在本地磁盘，读取非常快，所以这样做不会有问题。但是在浏览器端，限于网络原因，更合理的方案是使用异步加载。

四、CommonJS 中 this 指向当前模块 ES Module this 是 undefined

### AMD 和 CMD

AMD 和 require.js AMD 规范采用异步方式加载模块<br/>
CMD 和 sea.js CMD 是另一种 js 模块化方案，它与 AMD 很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD 推崇依赖就近、延迟执行。此规范其实是在 sea.js 推广过程中产生的。<br/>
AMD 栗子（monaco）

```bashs
g.alicdn.com/code/lib/monaco-editor/0.36.1/min/vs/editor/editor.main.nls.js
```

### UMD

UMD 兼容 CJS AMD 使用 IIFI 规范 在前端和后端都适用
整体是一个自执行函数，先判断 module 和 export 是否可用，这是为了兼容 CommonJS 模块规范；
之后判断 define 是否可用，这是为了兼容 AMD 模块规范；如果都不可用，就直接暴露在 global 下

React UMD 栗子

```js
'use strict';
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

## module.exports 与 exports 的区别

```js
// 无论使用 exports 暴露成员，或是 module.exports 暴露成员，最终暴露的结果，都是以 module.exports 所指向的对象为准。

//test.js
const object = { na: 'name', age: 18 };
exports = object;

// main.js
const ex = require('./test');
console.log('ex', ex); // {}

// module.exports 和 exports 同指一个对象，但是最终暴露结果以 module.exports 的为准，上面的代码中，exports 改变了指向，
// 而我们又没有为 module.exports 挂载任何的属性或方法，所以就拿到了空对象。 不能对 exports 直接赋值，不会有任何效果
```

## 既然有了 exports，为何又出了 module.exports ?

答：如果我们不想在 commonjs 中导出对象，而是只导出一个类或者一个函数再或者其他属性的情况，那么 module.exports 就更方便了，如上我们知道 exports 会被初始化成一个对象，也就是我们只能在对象上绑定属性，但是我们可以通过 module.exports 自定义导出出对象外的其他类型元素。

## 借助 Es Module 的静态导入导出的优势，实现了 tree shaking。

Tree Shaking 在 Webpack 中的实现，是用来尽可能的删除没有被使用过的代码，一些被 import 了但其实没有被使用的代码。比如以下场景：<br/>

a.js：

```js
export let num = 1;
export const addNumber = () => {
  num++;
};
export const delNumber = () => {
  num--;
};
```

main.js：

```js
import { addNumber } from './a';
addNumber();
```

如上 a.js 中暴露两个方法，addNumber 和 delNumber，但是整个应用中，只用到了 addNumber，那么构建打包的时候，delNumber 将作为没有引用的方法，不被打包进来。

## 手写一个 Require 简版

```js
const path = require('path'); // 路径操作
const fs = require('fs'); // 文件读取
const vm = require('vm'); // 文件执行

// node模块化的实现
// node中是自带模块化机制的，每个文件就是一个单独的模块，并且它遵循的是CommonJS规范，也就是使用require的方式导入模块，通过module.export的方式导出模块。
// node模块的运行机制也很简单，其实就是在每一个模块外层包裹了一层函数，有了函数的包裹就可以实现代码间的作用域隔离

// require加载模块
// require依赖node中的fs模块来加载模块文件，fs.readFile读取到的是一个字符串。
// 在javascrpt中我们可以通过eval或者new Function的方式来将一个字符串转换成js代码来运行。

// eval
// const name = 'poetry';
// const str = 'const a = 123; console.log(name)';
// eval(str); // poetry;

// new Function
// new Function接收的是一个要执行的字符串，返回的是一个新的函数，调用这个新的函数字符串就会执行了。如果这个函数需要传递参数，可以在new Function的时候依次传入参数，最后传入的是要执行的字符串。比如这里传入参数b，要执行的字符串str
// const b = 3;
// const str = 'let a = 1; return a + b';
// const fun = new Function('b', str);
// console.log(fun(b, str)); // 4

// 可以看到eval和Function实例化都可以用来执行javascript字符串，似乎他们都可以来实现require模块加载。不过在node中并没有选用他们来实现模块化，原因也很简单因为他们都有一个致命的问题，就是都容易被不属于他们的变量所影响。
// 如下str字符串中并没有定义a，但是确可以使用上面定义的a变量，这显然是不对的，在模块化机制中，str字符串应该具有自身独立的运行空间，自身不存在的变量是不可以直接使用的
// const a = 1;
// const str = 'console.log(a)';
// eval(str);
// const func = new Function(str);
// func();

// node存在一个vm虚拟环境的概念，用来运行额外的js文件，他可以保证javascript执行的独立性，不会被外部所影响
// vm 内置模块
// 虽然我们在外部定义了hello，但是str是一个独立的模块，并不在村hello变量，所以会直接报错。
// 引入vm模块， 不需要安装，node 自建模块
// const vm = require('vm');
// const hello = 'poetry';
// const str = 'console.log(hello)';
// wm.runInThisContext(str); // 报错
// 所以node执行javascript模块时可以采用vm来实现。就可以保证模块的独立性了

// 分析实现步骤
// 1.导入相关模块，创建一个Require方法。
// 2.抽离通过Module._load方法，用于加载模块。
// 3.Module.resolveFilename 根据相对路径，转换成绝对路径。
// 4.缓存模块 Module._cache，同一个模块不要重复加载，提升性能。
// 5.创建模块 id: 保存的内容是 exports = {}相当于this。
// 6.利用tryModuleLoad(module, filename) 尝试加载模块。
// 7.Module._extensions使用读取文件。
// 8.Module.wrap: 把读取到的js包裹一个函数。
// 9.将拿到的字符串使用runInThisContext运行字符串。
// 10.让字符串执行并将this改编成exports

function Module(id) {
  this.id = id;
  // 读取到的文件内容会放在exports中
  this.exports = {};
}

Module._cache = {};

// 我们给Module挂载静态属性wrapper，里面定义一下这个函数的字符串，wrapper是一个数组，数组的第一个元素就是函数的参数部分，其中有exports，module. Require，__dirname, __filename, 都是我们模块中常用的全局变量。注意这里传入的Require参数是我们自己定义的Require
// 第二个参数就是函数的结束部分。两部分都是字符串，使用的时候我们将他们包裹在模块的字符串外部就可以了
Module.wrapper = [
  '(function(exports, module, Require, __dirname, __filename) {',
  '})',
];

// _extensions用于针对不同的模块扩展名使用不同的加载方式，比如JSON和javascript加载方式肯定是不同的。JSON使用JSON.parse来运行。
// javascript使用vm.runInThisContext来运行，可以看到fs.readFileSync传入的是module.id也就是我们Module定义时候id存储的是模块的绝对路径，读取到的content是一个字符串，我们使用Module.wrapper来包裹一下就相当于在这个模块外部又包裹了一个函数，也就实现了私有作用域。
// 使用call来执行fn函数，第一个参数改变运行的this我们传入module.exports，后面的参数就是函数外面包裹参数exports, module, Require, __dirname, __filename
Module._extensions = {
  '.js'(module) {
    const content = fs.readFileSync(module.id, 'utf8');
    const fnStr = Module.wrapper[0] + content + Module.wrapper[1];
    const fn = vm.runInThisContext(fnStr);
    fn.call(
      module.exports,
      module.exports,
      module,
      Require,
      __filename,
      __dirname,
    );
  },
  '.json'(module) {
    const json = fs.readFileSync(module.id, 'utf8');
    module.exports = JSON.parse(json); // 把文件的结果放在exports属性上
  },
};

// tryModuleLoad函数接收的是模块对象，通过path.extname来获取模块的后缀名，然后使用Module._extensions来加载模块
// 定义模块加载方法
function tryModuleLoad(module) {
  // 获取扩展名
  const extension = path.extname(module.id);
  // 通过后缀加载当前模块
  Module._extensions[extension](module);
}

// 至此Require加载机制我们基本就写完了，我们来重新看一下。Require加载模块的时候传入模块名称，在Require方法中使用path.resolve(__dirname, modulePath)获取到文件的绝对路径。然后通过new Module实例化的方式创建module对象，将模块的绝对路径存储在module的id属性中，在module中创建exports属性为一个json对象
// 使用tryModuleLoad方法去加载模块，tryModuleLoad中使用path.extname获取到文件的扩展名，然后根据扩展名来执行对应的模块加载机制
// 最终将加载到的模块挂载module.exports中。tryModuleLoad执行完毕之后module.exports已经存在了，直接返回就可以了

function Require(modulePath) {
  // 获取当前要加载的绝对路径
  let absPathname = path.resolve(__dirname, modulePath);
  console.log('absPathnamestart: ', absPathname);
  // 获取当前目录所有文件后缀
  const extNames = Object.keys(Module._extensions);

  let index = 0;
  // 存储原始文件路径
  const oldPath = absPathname;
  function findExt(absPath) {
    try {
      fs.accessSync(absPath);
      console.log('absPath: ', absPath);
      absPathname = absPath;
    } catch (e) {
      const ext = extNames[index++];
      findExt(oldPath + ext);
    }
  }
  // 递归追加后缀名，判断文件是否存在
  findExt(absPathname);

  // 从缓存中读取，如果存在，直接返回结果
  if (Module._cache[absPathname]) {
    return Module._cache[absPathname].exports;
  }

  // 创建模块，新建Module实例
  const module = new Module(absPathname);

  // 给模块添加缓存
  // 添加缓存也比较简单，就是文件加载的时候将文件放入缓存中，再去加载模块时先看缓存中是否存在，如果存在直接使用，如果不存在再去重新，加载之后再放入缓存
  Module._cache[absPathname] = module;

  // 加载当前模块
  tryModuleLoad(module);

  // 返回exports对象
  return module.exports;
}

console.log(Require('./test'));
```
