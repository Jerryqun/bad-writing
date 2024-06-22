---
nav: Js
group: 基础概念
toc: content
title: Object.create()
---

## Object.create()

```js
Object.create()
//创建一个新对象，使用现有的对象来提供新创建的对象的__proto__

var a = {num:2};
var b = Object.create(a);
undefined
b.__proto__ === a  // true


var a = {num:2};
var b = Object.create(a);
//问题,以下顺序执行,值是？
console.log('b.num ', b.num ) // 2
b.num++
console.log('a.num', a.num)  // 2
console.log('b.num', b.num)  b.num  // 3


new Object()
//继承内置对象Object，而Object.create()则是继承指定对象
//可以通过Object.create(null) 创建一个干净的对象，也就是没有原型，而 new Object()创建的对象是 Object的实例，原型永远指向Object.prototype
```
