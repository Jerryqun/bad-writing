---
nav: Js
toc: content
group: 基础概念
mobile: false
title: 标记模板字符串
---

## 标记模板字符串

```js
/**
处理方法：
1、函数的第一个参数是一个数组，该数组的成员是模板字符串中那些没有变量替换的部分。如果变量作为模板字符串开头or结尾，则这个数组里会有空字符串“”出现。
2、函数的其他参数，都是模板字符串各个变量被替换后的值。
*/

// 栗子1

function a(x, ...arr) {
  console.log('x', x); // ["", "12", "22", "22"];
  console.log('arr', arr); // [1, 2, 3]
}

a`${1}12${2}22${3}22`;

// 栗子2

function getPersonInfo(one, two, three) {
  console.log(one);
  console.log(two);
  console.log(three);
}

const person = 'Lydia';
const age = 21;

getPersonInfo`${person} is ${age} years old`;

// ["", " is ", " years old"] "Lydia" 21
```
