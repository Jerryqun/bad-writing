---
nav: Js
group: 基础概念
toc: content
title: Iterator原理
---

## Iterator 原理

我们常用的 for of 循环，都是通过调用被循环对象的一个特殊函数 Iterator 来实现的，
但是以前这个函数是隐藏的我们无法访问， 从 Symbol 引入之后，我们就可以通过 Symbol.iterator 来直接读写这个特殊函数。
对于循环语句来说，他并不关心被循环的对象到底是什么，他只负责调用 data[Symbol.iterator] 函数，然后根据返回值来进行循环。
所以任何对象只要提供了标准的 Iterator 接口即可被循环，比如我们现在来创造一个自定义的数据
ES6 给 Set、Map、Array、String 都加上了[Symbol.iterator]方法

```js
const obj = { name: 'cq' };
for (let i of obj) {
  console.log('i', i);
} //  error: obj is not iterator

obj[Symbol.iterator] = function () {
  let index = 1;
  return {
    next: function () {
      return {
        done: index > 5,
        value: index++,
      };
    },
  };
};

for (let i of obj) {
  console.log('i', i);
} //  1 2 3 4 5

const arr = [1, 2, 3];
// 通过调用iterator，拿到迭代器对象
const iterator = arr[Symbol.iterator]();

// 对迭代器对象执行next，就能逐个访问集合的成员
iterator.next();
iterator.next();
iterator.next();

// 通过调用iterator，拿到迭代器对象
const iterator = arr[Symbol.iterator]();

// 初始化一个迭代结果
let now = { done: false };

// 循环往外迭代成员
while (!now.done) {
  now = iterator.next();
  if (!now.done) {
    console.log(`现在遍历到了${now.value}`);
  }
}
```

## 如何让 var [a, b] = {a: 1, b: 2} 解构赋值成功

```js
const obj = {
  a: '1',
  b: '2',
};
// const [a,b] = obj
// VM326:6 Uncaught TypeError: obj is not iterable
//     at <anonymous>:6:15
```

```js
const obj = {
  a: '1',
  b: '2',
};
obj[Symbol.iterator] = function () {
  let keys = Object.keys(this);
  let index = 0;
  return {
    next: function () {
      return {
        done: index >= keys.length,
        value: obj[keys[index++]],
      };
    },
  };
};
const [a, b] = obj;
```
