---
nav: Js
toc: content
group: 基础概念
mobile: false
title: 作用域
---

### 作用域概念

定义变量的区域，作用域决定了如何查找变量，也就是变量的访问权限 分为静态作用域与动态作用域。

### 静态作用域

js 采用的是词法作用域也就是静态作用域(函数的作用域在函数定义的时候就决定)

```js
// 例一
var value = 1;

function foo() {
  console.log(value);
}

function bar() {
  var value = 2;
  foo();
}

bar(); // 1

// 例二
var global = 'global';

function a() {
  var global = 'local';
  function b() {
    console.log(global);
  }
  return b();
}

a(); //local
```

### 动态作用域

函数调用时确定，上面列子将返回 2， bash 是动态作用域

### 作用域链

一般情况下，变量到创建该变量的函数的作用域中取值。但是如果在当前作用域中没有查到，
就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。<br/>

变量和函数的声明：如果变量名和函数名声明时相同，函数优先声明

### 自执行函数

```js
// 方式一 匿名函数
(() => {
  console.log('执行了');
})();

(function () {
  console.log('执行了');
})();

// 方式二 非匿名函数
(function fun() {
  const a = 1;
  console.log('执行了');
})();

/**
 * 特点  字执行函数里面的变量的作用域是独立的
 * 也就是说 方式2中外部无法访问到fun和a、但是执行函数内部可以放到到外部变量
 */

var a = 1;
(function a() {
  a = 2;
  console.log(a); //fn a
})();
console.log(a); // 1

/**
 会打印出函数a的内容 和 1 
 这是个函数表达式，这个 a 就是函数名称，它的特点是作为函数体（作用域内）的本地变量，不能被修改，也不能被外部访问。
 */
```

### 变量提升

- 变量提升过程中 只会提升声明 不会提升变量的赋值
- 函数提升时会提升整个函数体
- 函数的提升优先级大于变量

```js
console.log('a', a); // function a
function a() {}

console.log('b', b); //  b is not a function
var b = function name() {};
```
