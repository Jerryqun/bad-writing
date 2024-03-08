---
nav: Js
group: 基础概念
toc: content
title: 闭包
---

## 闭包概念

<a href="https://juejin.cn/post/6844903769646317576" target="_blank">参考</a>

可以访问外部作用域的内部函数，即使这个外部作用域已经执行结束（闭包就是那些引用了外部作用域中变量的函数）

- 保护：划分一个独立的代码执行区域，在这个区域中有自己私有变量存储的空间，保护自己的私有变量不受外界干扰（操作自己的私有变量和外界没有关系）；
- 保存：如果当前上下文不被释放【只要上下文中的某个东西被外部占用即可】，则存储的这些私有变量也不会被释放，可以供其下级上下文中调取使用，相当于把一些值保存起来了；

在编译过程中，如果 JavaScript 引擎判断到一个闭包，也会在堆空间创建换一个“closure(fn)”的对象（这是一个内部对象，JavaScript 是无法访问的），
用来保存闭包中的变量。所以闭包中的变量是存储在“堆空间”中的。

```js
(function autorun() {
  let x = 1;
  function log() {
    console.log(x);
  }
  log();
})();

// 闭包只存储外部变量的引用，而不会拷贝这些外部变量的值。
function initEvents() {
  for (var i = 1; i <= 3; i++) {
    $('#btn' + i).click(function showNumber() {
      alert(i); //4
    });
  }
}
initEvents();

function initEvents() {
  for (let i = 1; i <= 3; i++) {
    $('#btn' + i).click(function showNumber() {
      alert(i); //1 2 3
    });
  }
}

initEvents();

/**
 * 闭包经典题
 * 下面写法是保护obj对象 不让外部修改
 */

var o = (function () {
  var obj = {
    a: 1,
    b: 2,
  };
  return {
    get: (key) => {
      // if (obj.hasOwnProperty(key)) {
      //   return obj[key];
      // }
      // return undefined;

      return obj[key];
    },
  };
})();

/**
 * 如何破解
 * valueOf  会存在this指向问题
 */

// console.log(o.get('valueOf')()); // TypeError: Cannot convert undefined or null to object

Object.defineProperty(Object.prototype, 'abc', {
  get() {
    return this;
  },
});

console.log(o.get('abc')); // 这样就拿到了 obj对象

o.get('abc').c == '修改你';

console.log(o.get('abc')); // 破坏obj对象成功

/**
 * 防止攻破
 * get只返回对象自己的属性
 */

/**
 * 在定时器、事件监听、Ajax请求、跨窗口通信、Web Workers或者任何异步中，只要使用了回调函数，实际上就是在使用闭包
   以上的闭包保存的仅仅是window和当前作用域。
 */
```

## 闭包应用

1、数据封装和私有变量

```js
function createCounter() {
  let count = 0;
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}

const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // 输出 1
counter.decrement();
console.log(counter.getCount()); // 输出 0
```

2、回调函数

```js
function delayedGreeting(name) {
  setTimeout(function () {
    console.log('Hello, ' + name);
  }, 1000);
}

delayedGreeting('John'); // 约1000ms后输出: Hello, John
```

3、函数工厂

```js
function makeMultiplier(multiplier) {
  return function (x) {
    return x * multiplier;
  };
}

const double = makeMultiplier(2);
console.log(double(5)); // 输出 10

const triple = makeMultiplier(3);
console.log(triple(5)); // 输出 15
```

4、柯里化  
闭包允许你柯里化一个函数，即创建一个接受较少参数的新函数。

```js
function curry(fn) {
  return function (a) {
    return function (b) {
      return fn(a, b);
    };
  };
}

const add = function (a, b) {
  return a + b;
};

const curriedAdd = curry(add);
const addFive = curriedAdd(5);
console.log(addFive(3)); // 输出 8
```
