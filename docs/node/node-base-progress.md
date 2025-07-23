---
nav: Node
group: 基础
toc: content
mobile: false
title: 模块化
---

## 模块化发展历程

### 1 立即执行函数（IIFE）
```js
(function(globalVariable){
   globalVariable.test = function() {}
   // ... 声明各种变量、函数都不会污染全局作用域
})(globalVariable)
```
### 2 CommonJS（Node.js引入）
CommonJS 模块由 JS 运行时实现。<br/>
CommonJs 是单个值导出，本质上导出的就是 exports 属性。<br/>
CommonJS 是可以动态加载的，对每一个加载都存在缓存，可以有效的解决循环引用问题。<br/>
CommonJS 模块`同步`加载并执行模块文件。<br/>
CommonJS 通过 require 导入模块，module.exports 或 exports 导出。

浏览器本身不直接支持 CommonJS 规范。CommonJS 主要是为服务器端（如 Node.js）设计的模块规范，通常用于服务器环境中处理模块的加载和管理。浏览器中使用 Commonjs 可以借助 browserify

```bash
全局: npm install browserify -g
局部: npm install browserify --save-dev

根目录下运行browserify js/src/app.js -o js/dist/bundle.js
在index.html文件中引入<script type="text/javascript" src="js/dist/bundle.js"></script>

```


###  Browserify	与 Babel 的区别  
Browserify 负责解决模块加载和打包问题，支持 CommonJS 在浏览器使用，仅负责模块兼容，不转译语法    
Babel 负责代码的语法转换，让你能用最新 JS 语法，兼容老旧环境， 转译语法，不负责模块系统兼容


### 3 AMD  
AMD 是 CommonJs 的浏览器端实现

浏览器端异步加载模块的需求，避免同步加载导致页面阻塞。

先有 RequireJS，后有 AMD 规范，随着 RequireJS 的推广和普及，AMD 规范才被创建出来。  
AMD 和 require.js，AMD 是运行时加载

require 官网: https://requirejs.org/  
require github : https://github.com/requirejs/requirejs

AMD 规范采用异步方式加载模块<br/>

- @param {string} id 模块名称
- @param {string[]} dependencies 模块所依赖模块的数组
- @param {function} factory 模块初始化要执行的函数或对象
- @return {any} 模块导出的接口  
  function define(id?, dependencies?, factory): any

AMD 栗子（monaco）  
https://g.alicdn.com/code/lib/monaco-editor/0.36.1/min/vs/editor/editor.main.nls.js
### 4 CMD  
CMD 根据 CommonJs 和 AMD 实现，优化了加载方式  
CMD 和 sea.js CMD 是另一种 js 模块化方案，它与 AMD 很类似，不同点在于：AMD 推崇依赖前置、提前执行，CMD 推崇依赖就近、延迟执行。此规范其实是在 sea.js 推广过程中产生的,AMD 专门用于浏览器端<br/>

```js
// AMD
// 依赖必须一开始就写好
define(['./utils'], function (utils) {
  utils.request();
});

// CMD
define(function (require) {
  // 依赖可以就近书写
  var utils = require('./utils');
  utils.request();
});
```

官网: https://seajs.org/  
github : https://github.com/seajs/seajs  
### 5 UMD  
UMD 兼容 CJS、 AMD， 使用 IIFI 规范， 在前端和后端都适用，
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
`打包成umd格式时peerDependencies里面的包不会打进去，需单独引用`
### 6 ESM
ES6 Module 静态的，不能放在块级作用域内，代码发生在编译时,并且不会缓存值。<br/>
ES6 Module 的值是动态绑定的，可以通过导出方法修改，可以直接访问修改结果。<br/>
ES6 Module 可以导出多个属性和方法，可以单个导入导出，混合导入导出。<br/>
ES6 模块提前加载并执行模块文件。<br/>
ES6 Module 导入模块在严格模式下。<br/>
ES6 Module 的特性可以很容易实现 Tree Shaking 和 Code Splitting。<br/>

## CI/CD 概念

CI: 持续集成（Continuous Integration）， 即在源代码变更后可以自动触发检测、单元测试、构建等任务的自动化过程，
目标是快速确保开发人员新提交的代码是好的（少 Bug）。

CD: 持续交付、持续部署
