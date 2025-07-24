---
nav: Js
group: 基础概念
toc: content
title: Object.assign
---

## Object.assign (浅拷贝)

- 浅拷贝就是拷贝第一层的基本类型值，以及第一层的引用类型地址
- concat 只是对数组的第一层进行深拷贝  
- slice 只是对数组的第一层进行深拷贝  
- ... 实现的是对象第一层的深拷贝。后面的只是拷贝的引用值  
- Object.assign() 拷贝的是属性值。假如源对象的属性值是一个指向对象的引用，它也只拷贝那个引用值
  
注意: assign合并的对象target只能合并source1、source2中的自身属性，并不会合并source1、source2中的继承属性，也不会合并不可枚举的属性，且无法正确复制get和set属性（会直接执行get/set函数，取return的值）

```js
// 第一步
let a = {
  name: 'advanced',
  age: 18,
};
let b = {
  name: 'muyiy',
  book: {
    title: "You Don't Know JS",
    price: '45',
  },
};
let c = Object.assign(a, b);
console.log(c);
// {
// 	name: "muyiy",
//  age: 18,
// 	book: {title: "You Don't Know JS", price: "45"}
// }
console.log(a === c);
// true

// 第二步
b.name = 'change';
b.book.price = '55';
console.log(b);
// {
// 	name: "change",
// 	book: {title: "You Don't Know JS", price: "55"}
// }

// 第三步
console.log(a);
// {
// 	name: "muyiy",
//  age: 18,
// 	book: {title: "You Don't Know JS", price: "55"}
// }

// String 类型和 Symbol 类型的属性都会被拷贝，而且不会跳过那些值为 null 或 undefined 的源对象。

const a = {
  name: 'cq',
};

const b = {
  age: undefined,
  hobby: null,
};

const c = Object.assign(a, b);
console.log('c', c); // {name: 'cq', age: undefined, hobby: null}
```
