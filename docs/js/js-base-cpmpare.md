---
nav: Js
group: 基础概念
toc: content
title: JS字符串比较
---

## JS 字符串比较

```js
/**
 * 1、>、<比较
 * 字符串进行大于(小于)比较时，会根据第一个不同的字符的ASCII值码进行比较
 * 数字字符串与数字比较时，数字字符串会转换成数字再进行大小比较
 * 非数字字符串与数字比较时，非数字字符串会转换成NaN，NaN与任何比较都返回false
 */

console.log('1.2.2a' > '1.2.2b'); // false
console.log('1.02.1' > '1.1'); // false
console.log('1.23' < '1.2b'); // true

console.log('1.23' < 1.24); // true
console.log(1.23 < '1.24a'); // false
console.log(1.23 > '1.24a'); // false

/**
 * 2、相等（==）
 * 相等比较时，不要求类型完全一致。非一致的，会尝试转换成一致类型再比较数值大小或者引用地址大小。
字符串比较，依次比较每个字符是否一样；
数字字符串与数字比较时，数字字符串会转换成数字再进行相等比较；
非数字字符串与数字比较时，非数字字符串会转换成NaN，NaN与任何比较都返回false；
字符串与字符对象比较时，字符对象会转换成字符串再进行相等比较；
字符对象比较时，比较字符对象的地址大小。

 */

console.log('abc' == 'abc'); // true
console.log('abc' == new String('abc')); // true
console.log('123' == 123); // true
console.log('123a' == 123); // false
console.log(new String('abc') == new String('abc')); // false

/**
 * 3、严格相等（===）
 */
console.log('abc' === 'abc'); // true
console.log('abc' === new String('abc')); // false
console.log(new String('abc') === new String('abc')); // false

/**
 * 比较中的几种特殊情况
 * 主要是null、undefined、NaN的比较。
null与undefined相等，它们自身都相等；
null与undefined严格不相等，它们与自身严格相等；
NaN与任何比较都不相等。
 */

console.log(null == undefined); // true
console.log(null === undefined); // false
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(NaN == undefined); // false
console.log(NaN == null); // false
console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
```
