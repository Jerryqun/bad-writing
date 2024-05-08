---
nav: Js
toc: content
group: 基础概念
mobile: false
title: this
---

## 一张图搞懂 this

<a href='https://juejin.cn/post/6844903496253177863' target='_blank'>THIS</a>
<img src='../../img/this.png'/>

```js
window.a = 'window';

let target = {
  a: 'target',
};

let test = {
  a: 'objTest',
  fn: function (params) {
    console.log('a', this.a);
    return { a };
  },
};

test.fn(target); //objTest
```

## 手写 call

```js
Function.prototype.my_call = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined; // 用于防止 Function.prototype.my_call() 直接调用
  }
  const fn = Symbol;
  context[fn] = this;
  const res = context.fn(...args);
  delete context[fn];
  return res;
};

test.fn.my_call(target, 1, 2, 3);
```

## 手写 apply

```js
Function.prototype.my_apply = function (context = window, args) {
  if (this === Function.prototype) {
    return undefined;
  }
  let fn = Symbol;
  let res;
  context[fn] = this;
  if (Array.isArray(args)) {
    res = context[fn](...args);
  } else {
    res = context[fn]();
  }
  delete context[fn];
  return res;
};

test.fn.my_apply(target, [1, 2, 3]);
// apply 参数妙用 可以使push unshift传数组
let a = [1, 2, 3];
let b = [4, 5, 6];
Array.prototype.unshift.my_apply(a, b);
```

## 手写 bind

```js
Function.prototype.my_bind = function (context = window, ...args) {
  if (this === Function.prototype) {
    return undefined;
  }
  const fn = Symbol;
  context[fn] = this;
  const res = (...innerArgs) => {
    // 变相实现了函数curry
    context[fn](...args, ...innerArgs);
  };
  delete context[fn];
  return res;
};
test.fn.my_bind(target, 1, 2, 3);

// 类数组借用方法
var arrayLike = {
  0: 'java',
  1: 'script',
  length: 2,
};

Array.prototype.push.call(arrayLike, 'jack', 'lily');
console.log(typeof arrayLike); // 'object'
console.log(arrayLike);
// {0: "java", 1: "script", 2: "jack", 3: "lily", length: 4}
```

## ES6 中箭头函数和普通函数的区别

- 箭头函数是匿名函数，不能作为构造函数去使用 new 关键字 , 没有 prototype
- 箭头函数没有伪类 argument,可以使用 ...args 代替
- 箭头函数没有自己的 this，会将所在的上下文作为自己的 this
- call()、apply()、bind()方法不能改变箭头函数中的 this 指向
- 箭头函数不能做 generator 函数，不能使用 yeild 关键字

```js
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius,
};

shape.diameter(); // 20
shape.perimeter(); // NaN

function a() {
  return () => {
    return () => {
      console.log(this);
    };
  };
}
console.log(a()()());

// 首先箭头函数其实是没有 this 的，箭头函数中的 this 只取决包裹箭头函数的第一个普通函数的 this。
// 在这个例子中，因为包裹箭头函数的第一个普通函数是 a，所以此时的 this 是 window。另外对箭头函数使用 bind这类函数是无效的。

let a = {};
let fn = function () {
  console.log(this);
};
fn.bind().bind(a)(); // => ?

// fn.bind().bind(a) 等于
// 嵌套函数的调用顺序是从外到里
let fn2 = function fn1() {
  return function () {
    return fn.apply();
  }.apply(a);
};
fn2();

// 可以从上述代码中发现，不管我们给函数 bind 几次，fn 中的 this 永远由第一次 bind 决定，所以结果永远是 window
```

## this 优先级

首先，new 的方式优先级最高，接下来是 bind 这些函数，然后是 obj.foo() 这种调用方式，
最后是 foo 这种调用方式，同时，箭头函数的 this 一旦被绑定，就不会再被任何方式所改变。

## self、this 和 window 的区别

window 是浏览器环境中的全局对象，this 的值取决于函数的调用方式，而 self 通常用于指代当前的全局作用域，尤其是在 Web Workers 中。在主线程的浏览器环境中，self 和 window 可以互换使用，但在 Web Workers 环境中，self 会指向 Worker 的全局环境，而 window 对象在 Worker 中是不可用的。
