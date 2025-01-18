---
nav: Js
group: 基础概念
toc: content
title: 原型原型链
---

## 原型原型链

JavaScript 中一切引用类型都是对象，对象就是属性的集合  
Array 类型、Function 类型、Object 类型、Date 类型、RegExp 类型等都是引用类型

### 原型

每一个对象从被创建开始就和另一个对象关联，从另一个对象上继承其属性，这个另一个对象就是原型<br/>

隐式原型（`__proto__`） 对象上的属性<br/>
显示原型（prototype） 构造函数上的属性<br/>
显示式原型上的 constructor 等于构造函数<br/>

`__proto__` 是非标准属性，如果要访问一个对象的原型，建议使用 ES6 新增的 Reflect.getPrototypeOf 或者 Object.getPrototypeOf() 方法，而不是直接 `obj.__proto__`，因为非标准属性意味着未来可能直接会修改或者移除该属性。同理，当改变一个对象的原型时，最好也使用 ES6 提供的 Reflect.setPrototypeOf 或 Object.setPrototypeOf。

```js
const obj = {};
const arr = [];
const fn = function () {};

console.log('obj.__proto__', obj.__proto__ === Object.prototype); // true;
console.log('arr.__proto__', arr.__proto__ === Array.prototype); // true;
console.log('fn.__proto__', fn.__proto__ === Function.prototype); //true;

const P = new fn();

(Object.getPrototypeOf(P) === P.__proto__) === fn.prototype;

fn.prototype.constructor === fn; // true

// 函数（包括原生构造函数）的原型对象为Function.prototype
fn.__proto__ === Function.prototype; // true
Array.__proto__ === Function.prototype; // true
Object.__proto__ === Function.prototype; // true

//Function.prototype也是一个普通对象，所以Function.prototype.__proto__ === Object.prototype

function getProperty(obj, propName) {
  // 在对象本身查找
  if (obj.hasOwnProperty(propName)) {
    return obj[propName];
  } else if (obj.__proto__ !== null) {
    // 如果对象有原型，则在原型上递归查找
    return getProperty(obj.__proto__, propName);
  } else {
    // 直到找到Object.prototype，Object.prototype.__proto__为null，返回undefined
    return undefined;
  }
}

//Function.__proto__ === Function.prototype
//因为Function本身也是一个Function对象
//也就是var Function = new Function()，这看起来有点鸡和蛋的意思，不过如果先给你一个蛋，那必然就是先有蛋后有鸡了
```

### 原型污染

原型污染是指：攻击者通过某种手段修改 JavaScript 对象的原型。
如果我们把 Object.prototype.toString 改成这样：

```js
Object.prototype.toString = function () {
  alert('原型污染');
};
let obj = {};
obj.toString();
```

### 原型污染解决方法

1. 使用 Object.create(null)

```js
const obj = Object.create(null);
obj.__proto__ = { hack: '污染原型的属性' };
console.log(obj); // => {}
console.log(obj.hack); // => undefined
```

2. 使用 Object.freeze(obj) 冻结指定对象，使之不能被修改属性，成为不可扩展对象：

```js
Object.freeze(Object.prototype);
Object.prototype.toString = 'evil';
console.log(Object.prototype.toString);
// => ƒ toString() { [native code] }
```

### 原型链

当访问一个对象的属性时，先在对象的本身找，找不到就去对象的原型上找，如果还是找不到，就去对象的原型（原型也是对象，也有它自己的原型）的原型上找，如此继续，直到找到为止，或者查找到最顶层的原型对象中也没有找到，就结束查找，返回 undefined。
这条由对象及其原型组成的链就叫做原型链

原型存在的意义就是组成原型链<br/>
原型链存在的意义就是继承<br/>
继承存在的意义就是属性共享<br/>
