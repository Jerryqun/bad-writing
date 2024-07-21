---
nav: Js
group: 进阶
toc: content
title: js执行性能
---

## js 执行性能

### 1、慎用全局变量

```js
console.time();
let str = '';
for (let i = 0; i < 100000; i++) {
  str += i;
}
console.timeEnd();

// default: 18.740966796875 ms
console.time();
let i, str;
for (i = 0; i < 100000; i++) {
  str += i;
}
console.timeEnd();
// default: 3.822021484375 ms

const arr = [];
// for 循环优化
for (let i = 0, len = arr.length; i < len; i++) {
  console.log('i');
}
```

### 2、缓存全局变量

```js
function a() {
  const dom = document;
  const btn1 = dom.querySelector('#id1');
  const btn2 = dom.querySelector('#id2');
  const btn3 = dom.querySelector('#id3');
  const btn4 = dom.querySelector('#id4');
  const btn5 = dom.querySelector('#id5');
  const btn6 = dom.querySelector('#id6');
}

function b() {
  const btn1 = document.querySelector('#id1');
  const btn2 = document.querySelector('#id2');
  const btn3 = document.querySelector('#id3');
  const btn4 = document.querySelector('#id4');
  const btn5 = document.querySelector('#id5');
  const btn6 = document.querySelector('#id6');
}

// a的js执行效率比b高
```

### 3、在原型对象上新增实例对象所需的方法

```js
var fn1 = function () {
  this.foo = function () {
    console.log(111);
  };
};

let f1 = new fn1();

var fn2 = function () {
  fn2.prototype.foo = function () {
    console.log(111);
  };
};

let f2 = new fn2();

// fn2的js执行效率比fn1高
```

### 3、避开闭包陷阱

```js
function foo() {
  const el = document.getElementById('btn');
  el.onclick = function () {
    console.log('ok');
  };
}
foo();

// 改进
function foo() {
  let el = document.getElementById('btn');
  el.onclick = function () {
    console.log('ok');
  };
  el = null;
}
foo();
```

### 4、直接使用属性而不是通过方法返回属性值
