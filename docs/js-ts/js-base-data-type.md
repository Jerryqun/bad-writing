---
nav: Js
group: 基础概念
toc: content
title: JS中的数据类型检测方案
---

## JS 中的数据类型检测方案

总结最稳定的类型判断方法方法

```js
let class2type = {};
'Array Date RegExp Object Error'
  .split(' ')
  .forEach((e) => (class2type['[object ' + e + ']'] = e.toLowerCase()));

function type(obj) {
  if (obj == null) return String(obj);
  return typeof obj === 'object'
    ? class2type[Object.prototype.toString.call(obj)] || 'object'
    : typeof obj;
}
```

### typeOf

typeof 会把所有传进去的值都转成二进制，而当年 JS 制定的规则便是：原始类型的被转为二进制的前面三个值绝对不为零，而 typeof 会把前三位为零的类型全部认定为对象，null 这个类型又是 JS 语言后来引入的。遵循其他语言的原则，JS 语言将 null 的二进制值定为一长串的 0，因此 typeof 在判断时会将其认定为 object。

不能将 Object、Array 和 Null 区分，都返回 object

```js
typeof 1; // number
typeof true; // boolean
typeof 'mc'; // string
typeof Symbol; //function
typeof function () {}; //function
typeof console.log(); //function
typeof []; // object
typeof {}; //object
typeof null; //object
typeof undefined; // undefined
typeof NaN; // number
```

### instanceof

instanceof 后面的构造函数去前面的实例对象的原型链上找本身，找到了返回 true 没扎到返回 false<br/>
优点：能够区分 Array、Object 和 Function，适合用于判断自定义的类实例对象<br/>
缺点：Number，Boolean，String 基本数据类型不能判断<br/>

自定义 instanceof 行为的一种方式，这里将原有的 instanceof 方法重定义，换成了 typeof，因此能够判断基本数据类型。后可以判断

```js
// {a:1} instanceof Object
// instanceof 换一种写法可以表示： Object[Symbol.hasInstance]({a:1})
class PrimitiveNumber {
  static [Symbol.hasInstance](x) {
    return typeof x === 'number';
  }
}
console.log(111 instanceof PrimitiveNumber); // true
```

基本用法

```js
function a() {}
const obj = {};
const arr = [];
1 instanceof Number; // false
true instanceof Boolean; // false
'str' instanceof String; // false
a instanceof Function; // true
obj instanceof Object; // true
arr instanceof Array; // true
```

### Object.prototype.toString.call()

精准判断数据类型

```js
const toString = Object.prototype.toString;
toString.call(1); // [object Number]
toString.call(true); //[object Boolean]
toString.call('mc'); // [object String]
```

### js 混淆运算

```js
[] + [] === ''; // true
'' + '' === ''; // true
[].toString() === ''; // true
```

将左边的空数组 [] 转换成字符串，结果是 ''。  
将右边的空数组 [] 转换成字符串，结果也是 ''。  
然后将两个空字符串 ' ' 拼接在一起，并得到最终的结果 ''。

```js
[] + {} === '[object Object]';
{
}
+[] === 0; // {} 被解释为一个空的代码块而不是一个对象。
```

当你使用加号 (+) 将数字和字符串进行运算时，JavaScript 将数字转换为字符串  
当你使用减号 (-) 将数字和字符串进行运算时，JavaScript 会尝试将字符串转换成数字

```js
9 + '1' === '91'; //true
9 - '1' === 8; // true
```
