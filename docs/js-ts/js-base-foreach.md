---
nav: Js
group: 基础概念
toc: content
title: js循环汇总
---

# js 循环汇总

js 效率执行检测网站 https://jsperf.com/

从执行效率看(快到慢)  
for-len > for > for-of > forEach > map > for-in

## forEach

没有返回值<br/>
不能改变 item 本身<br/>
如果是引用类型 可以改变其属性(item 通过引用类型，指向了原来 list 里面的每一项。)<br/>

```js
const list = [
  { name: 'a', count: 1 },
  2,
  function fn() {
    console.log(3);
  },
  Symbol(),
  'sss',
  [4, 4, 4, 4],
  new Date(),
];

list.forEach((item) => {
  item = 3;
});

console.log(list); //list没有任何变化;

list.forEach((item) => {
  item.count = 3;
});

console.log(list); // 引用类型如果有count属性则直接改变 ，没有则新加一个count属性

// forEach循环promise
const sleep = (ms) => new Promise((res) => setTimeout(() => res(ms), ms));

[sleep(1000), sleep(2000), sleep(3000)].forEach((item) => {
  item.then((res) => console.log(res));
});
```

forEach 的回调函数中的 return 语句并不会像 map、filter 或 reduce 中那样有用。当你在 forEach 的回调中使用 return 时，它只会退出当前正在执行的迭代，并不会停止整个 forEach 循环或返回一个值。

```js
const array = [1, 2, 3, 4, 5];

array.forEach((value, index) => {
  if (value > 3) {
    return; // 这里的 return 只会退出当前的迭代，不会停止 forEach
  }
  console.log(value); // 输出 1, 2, 3
});
```

## for 循环 和 for in 循环

1、for in 循环数组吐出的是 index 循环对象吐出的是 key<br/>
2、for 循环中 break 会跳出整个循环，continue 会跳出当前次循环（continue 后面的代码不会执行）<br/>
3、for in 循环会遍历原型链上的属性<br/>
4、for in 循环时数字属性优先<br/>
5、for in 无法遍历 symbol 属性 ，获取 symbol 用 Object.getOwnPropertySymbols(obj)<br/>
6、for 循环里可以改变每一项的值
7、for 循环 和 for of 循环中可以使用 await

```js
let obj = {
  name: 'poetry',
  age: 22,
  [Symbol('aa')]: 100,
  0: 200,
  1: 300,
};

for (let key in obj) {
  console.log('key', key); // 0、1、name、age
}

const list = [
  { name: 'a', count: 1 },
  2,
  function fn() {
    console.log(3);
  },
  Symbol(),
  'sss',
  [4, 4, 4, 4],
  new Date(),
];

for (let i = 0; i < list.length; i++) {
  list[i] = 4;
}

console.log(list); // [4,4,4,4,4,4,4]
```

## for of

返回每一项<br/>
只能循环 iterable 类型 不能循环普通的 object 对象<br/>
改变 item 与 forEach 一致<br/>
可以用 await<br/>

```js
const sleep = (time = 2000) =>
  new Promise((reslove) => {
    setTimeout(() => {
      reslove(time);
    }, time);
  });

for await (const item of [sleep(1000), sleep(2000), sleep(3000)]) {
  // Print out the results of the request
  console.log(item);
}
```

## for in 和 for of 的区别

1.for-in 只是获取数组的索引或者对象的 key；而 for-of 会获取数组的值<br/>

2.for-in 会遍历对象的整个原型链，性能差；而 for-of 只遍历当前对象，不会遍历原型链 <br/>

3.对于数组的遍历，for-in 会返回数组中所有可枚举的属性(包括原型链上可枚举的属性)；for-of 只返回数组的下标对应的属性值<br/>

4.for-of 适用遍历数组／字符串/map/set 等有迭代器 Iterator 对象的集合，但是不能遍历普通对象（obj is not iterable）<br/>

for、while、for in、for of、for await of 使用 await 都是生效的；<br/>
而几乎有回调的遍历方法：forEach、map、filter、reduce、some、every、find 等，使用 await 都是不生效的；

## 哪些循环方式能够直接终止整个循环

1、传统的 for 循环  
2、for of  
3、es6 的 some
