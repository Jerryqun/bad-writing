---
nav: Js
group: 面试
toc: content
title: 手写
---

## 手写 Object.is

```js
// +0 === 0
// true
// -0 ===0
// true
// NaN !== NaN
// true
// NaN === NaN
// false

Object.is = function (x, y) {
  // 如果x和y都是NaN
  if (x !== x && y !== y) {
    return true;
  }
  // 检查-0和+0
  if (x === 0 && y === 0) {
    return 1 / x === 1 / y;
  }
  // 其他情况使用严格比较
  return x === y;
};
```

## 实现 ES6 的 const

```js
const _const = (key, value) => {
  window[key] = value;
  Object.defineProperty(window, key, {
    enumerable: false,
    configurable: false,
    get: function () {
      return value;
    },
    set: function (v) {
      if (v !== value) {
        throw new TypeError('Assignment to constant variable.');
      } else {
        return value;
      }
    },
  });
};
```

## 手写深拷贝

```js
/**
 * @param target
 * @param result
 * @returns
 * 重复增删改属性用WeakMap
 */

const handleFunc = (func) => {
  // 箭头函数直接返回自身
  if (!func.prototype) return func;
  const bodyReg = /(?<={)(.|\n)+(?=})/m;
  const paramReg = /(?<=\().+(?=\)\s+{)/;
  const funcString = func.toString();
  // 分别匹配 函数参数 和 函数体
  const param = paramReg.exec(funcString);
  const body = bodyReg.exec(funcString);
  if (!body) return null;
  if (param) {
    const paramArr = param[0].split(',');
    return new Function(...paramArr, body[0]);
  } else {
    return new Function(body[0]);
  }
};

function deepClone(target, map = new WeakMap()) {
  // 克隆原始类型 直接返回
  if (
    Object.prototype.toString.call(target) !== '[object Object]' ||
    target === null
  ) {
    return target;
  }
  // 防止循环引用
  if (map.get(target)) {
    return target;
  }
  // 解决拷贝对应原型问题 value为对象时返回{}, value为数组时为[]
  const result = new target.constructor(); // [] {} Map WeakMap Set WeakSet

  // 设置缓存 解决循环引用
  map.set(target, result);

  Object.keys(target).map((key) => {
    if (target[key] instanceof Date) {
      // Date
      result[key] = new Date(target[key]);
    } else if (target[key] instanceof RegExp) {
      // RegExp
      result[key] = new RegExp(target[key]);
    } else if (target[key] instanceof Function) {
      // Function
      result[key] = handleFunc(target[key]);
    } else if (target[key] instanceof Map || target[key] instanceof WeakMap) {
      // Map || WeakMap
      target[key].forEach((item, key) => {
        result.set(deepClone(key, map), deepClone(item, map));
      });
    } else if (target[key] instanceof Set || target[key] instanceof WeakSet) {
      // Set || WeakSet
      target.forEach((item) => {
        cloneTarget.add(deepClone(item, map));
      });
    } else {
      result[key] = target[key];
    }
    if (Object.keys(target[key]).length) {
      deepClone(result[key], map);
    }
  });
  return result;
}

console.log(deepClone({ a: { c: 1, ds: 2, arr: [] } }));
/**
 * 循环引用
 */
function a() {
  let obj1 = {};
  let obj2 = { c: obj1 };
  obj1.a = obj2;
  return obj2;
}
a();

/**
 * 浅拷贝
 * 1、结构赋值
 * 2、slice
 * 3、concat()
 * 4、Object.assign;
 */

let arr = [1, 2, 3, 4];
let arrClone = arr.slice();
let arrClone1 = [...arr];

// 手写浅拷贝
const shallowClone = (source) => {
  const result = {};
  for (let key in source) {
    if (source.hasOwnProperty(key)) {
      result[key] = source[key];
    }
  }
  return result;
};
```

## 手写 filter

```js
Array.prototype.myFilter = function (callback, context = window) {
  const res = [];
  for (let i = 0; i < this.length; i++) {
    if (callback.call(context, this[i], i, this)) {
      res.push(this[i]);
    }
  }
  return res;
};
```

## 手写 forEach

```js
Array.prototype.myForEach = (callback, self) => {
  const m = [...this];
  for (let i = 0; i < m.length; i++) {
    callback.call(self, m[i], i, m);
  }
};

/**
 * 跳出循环
 */

let arr = [...new Array(10).keys()];
try {
  arr.forEach((item) => {
    console.log(`item:${item}`);
    if (item > 5) throw new Error('break');
  });
} catch (err) {
  if (err.message === 'break') console.log('break success!');
  else console.error(err);
}
```

## 手写 instanceof

```js
/**
 * a instanceof Object
 * instanceof 运算符用于检测构造函数的 prototype 属性是否出现在某个实例对象的原型链上。
 * 左边对象右边构造函数
 * Number，Boolean，String基本数据类型不能判断
 */

Number(1) instanceof Number;
// false
1 instanceof Number;
// false

// 判断a的prototype是否在c的原型链上。
class a {}
const c = new a();
c instanceof a; // true

/**
 * 手写instanceof
 */

function myInstanceOf(target, constructor) {
  // 由于instance要检测的是某对象，需要有一个前置判断条件
  // 基本数据类型直接返回false
  // if(typeof left !== 'object' || left === null) return false;
  if (!target.__proto__) return false;

  if (constructor.prototype === target.__proto__) {
    return true;
  } else {
    return myInstanceOf(target.__proto__, constructor);
  }
}

const myInstanceOf = (l, r) => {
  while (l !== null) {
    if (l.__proto__ === r.prototype) {
      return true;
    } else {
      l = l.__proto__;
    }
  }
  return false;
};
```

## 手写 JSON.parse

```js
/**
 * 1 用 eval
 */

const obj = { a: 1 };
const objStr = JSON.stringify(obj);
const objParse = eval(`(${objStr})`);
console.log(objParse); // {a: 1}

/**
 * 2 用Function
 */

const obj = { a: 1 };
const objStr = JSON.stringify(obj);
const objParse = new Function(`return ${objStr}`)();
console.log(objParse); // {a: 1}
```

## 手写 JSON.stringify

```js
/**
 * JSON.stringify({a:null})   '{"a":null}'
 * JSON.stringify({a:undefined}) '{}'
 * JSON.stringify({a:Symbol(1212)}) '{}'
 * JSON.stringify({a:function(){}})  '{}'
 * JSON.stringify([undefined,null,function(){},Symbol(212)]) '[null,null,null,null]'
 */

function myStringify(obj) {
  //忽略undefind和function 先置为undefined 组合的时候忽略
  if (obj === undefined || typeof obj === 'function') {
    return undefined;
  }

  //null或者NaN Infinity置为null
  if (obj === null) {
    return null;
  }

  // 时间对象转为字符串
  if (obj instanceof Date) {
    return `"${obj.toJSON()}"`;
  }

  //regExp输出{}
  if (obj instanceof RegExp) {
    return `{}`;
  }

  //字符串 置为“spring” 布尔 数字原样输出
  if (typeof obj !== 'object') {
    return typeof obj === 'string' ? `"${obj}"` : obj;
  }

  //数组
  if (Array.isArray(obj)) {
    let arrStr = obj.map((item) => `${myStringify(item)}`);
    return `[${arrStr.join(',')}]`;
  }

  //采用Object.getOwnPropertyNames直接过滤掉symbol
  let keyNames = Object.getOwnPropertyNames(obj);
  const arrObj = keyNames.map((item) => {
    return `${
      myStringify(obj[item]) !== undefined &&
      `"${item}":${myStringify(obj[item])}`
    }`;
  });
  return `{${arrObj.join(',')}}`;
}

/**
 * JSON.stringify的第二个参数是 替代者(replacer). 替代者(replacer)可以是个函数或数组，用以控制哪些值如何被转换为字符串。
如果替代者(replacer)是个 数组 ，那么就只有包含在数组中的属性将会被转化为字符串。在本例中，只有名为"level" 和 "health" 的属性被包括进来， "username"则被排除在外。 data 就等于 "{"level":19, "health":90}".
而如果替代者(replacer)是个 函数，这个函数将被对象的每个属性都调用一遍。 函数返回的值会成为这个属性的值，最终体现在转化后的JSON字符串中（译者注：Chrome下，经过实验，如果所有属性均返回同一个值的时候有异常，
会直接将返回值作为结果输出而不会输出JSON字符串），而如果返回值为undefined，则该属性会被排除在外。
 */

const settings = {
  username: 'lydiahallie',
  level: 19,
  health: 90,
};

const data = JSON.stringify(settings, ['level', 'health']);
console.log(data); // "{"level":19, "health":90}"
```

## 手写 lodash.isEqual

执行深比较来确定两者的值是否相等

这个方法支持比较 arrays, array buffers, booleans, date objects, error objects, maps,
numbers, Object objects, regexes, sets, strings, symbols,
以及 typed arrays. Object 对象值比较自身的属性，不包括继承的和可枚举的属性。 不支持函数和 DOM 节点比较

```js
const myIsEqual = (obj1, obj2) => {
  // 不为对象或数组时直接比较
  if (typeof obj1 !== 'object' && typeof obj2 !== 'object') {
    return obj1 === obj2;
  }

  // 当至少一个为null时直接比较
  if (!obj1 || !obj2) {
    return obj1 === obj2;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  // 属性长度不一样直接返回
  if (keys1.length !== keys2.length) {
    return false;
  }
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (obj2.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object') {
        return myIsEqual(obj1[key], obj2[key]);
      } else {
        if (i === keys1.length - 1) {
          return obj1[key] === obj2[key];
        }
      }
    } else {
      return false;
    }
  }
  return false;
};
```

## 手写 new

<a target="_blank" href="https://juejin.cn/post/6968856664560648199">参考</a>  
1、创建一个空对象  
2、使空对象的隐式原型指向其构造函数的显示原型  
3、使用 call 改变 this 指向  
4、如果无返回值或者返回一个非对象值(返回基础类型会被忽略)，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。

```js
function myNew(Con, ...args) {
  // 创建一个新的空对象
  let obj = {};
  // 将这个空对象的__proto__指向构造函数的原型
  // obj.__proto__ = Con.prototype;
  Object.setPrototypeOf(obj, Con.prototype);
  // 将this指向创建的对象
  let res = Con.apply(obj, args);
  // 对构造函数返回值做判断，然后返回对应的值
  return res instanceof Object ? res : obj;
}

/**
 * Object.create创建对象
 */
let obj = Object.create(Object.prototype);
// 等价于
let obj = {};
```

## 手写 promise 静态方法

```js
Promise.myResolve = function(value) => {
  if(value instanceof Promise|| !value) {
    return value
  }
  return new Promise((resolve) => {
    resolve(value)
  })
}

Promise.myReject = function (value) {
  return new Promise((_, reject) => reject(value));
};

Promise.myAll = function (value) {
  if (!value)
    throw "TypeError: undefined is not iterable (cannot read property Symbol(Symbol.iterator))";
  return new Promise((re, rj) => {
    let count = 0;
    let result = [];
    for (let i = 0; i < value.length; i++) {
      Promise.resolve(value[i])
        .then((res) => {
          count++;
          result[i] = res;
          if (count === value.length) {
            re(result);
          }
        })
        .catch((error) => rj(error));
    }
  });
};

let p1 = new Promise((r) => r(2));

let p2 = new Promise((r) => r(3));

Promise.myAll([p1, p2]).then(console.log);

Promise.prototype.finally = function (callback) {
  return this.then(
    (value) => {
      this.constructor.resolve(callback()).then(() => value);
    },
    (err) => {
      this.constructor.reject(callback()).then(() => {
        throw err;
      });
    }
  );
};

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("1");
  }, 2000);
});
promise
  .then((res) => {
    console.log(res);
  })
  .finally(() => {
    console.log("执行了");
  });



```

## 手写 Object.create

```js
function myCreate(proto) {
  function F() {}
  F.prototype = proto;
  F.prototype.constructor = F;
  return new F();
}
```

## 手写 promise

<a target="_blank" href="https://juejin.cn/post/6844903625769091079">参考</a>

## 手写 map

```js
Array.prototype.myMap = function (fn, context) {
  const arr = [...this];
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result[i] = fn.call(context, arr[i], i, this);
  }
  return arr;
};
```

## 手写手写 lodash 的 set 和 get 方法

```js
function get(obj, keysString) {
  const keys = keysString.split('.');
  let current = obj;
  for (let index = 0; index < keys.length; index++) {
    const element = keys[index];
    if (typeof current !== 'object' && !(element in obj)) {
      return undefined;
    }
    current = current[element];
  }
  return current;
}
let c = { name: { age: 3 } };
let g = get(c, 'name.age');
console.log('g', g);

function set(obj, keysString, value) {
  const keys = keysString.split('.');
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    obj[key] = i === keys.length - 1 ? value : obj[key] || {};
    obj = obj[key];
  }
  return obj;
}

let a = {};
set(a, 'params.name.age', '18');

console.log('a', a);
```

## 编程题：实现一个对象的 flatten 方法，如下：

```js
// flatten(obj){} 结果返回如下

// {
//   'a.b': 1,
//   'a.c': 2,
//   'a.d.e': 5,
//   'b[0]': 1,
//   'b[1]': 3,
//   'b[2].a': 2,
//   'b[2].b': 3
//    c: 3
// }
function isNumber(value) {
  return typeof value === 'number' && !isNaN(value);
}
function flatten(params) {
  const result = {};
  function convert(value, prop) {
    if (Object(value) !== value) {
      result[prop] = value;
    } else if (Array.isArray(value)) {
      value.forEach((item, index) => {
        convert(item, `${prop}[${index}]`);
      });
    } else {
      for (key in value) {
        if (value.hasOwnProperty(key)) {
          convert(value[key], prop ? `${prop}.${key}` : key);
        }
      }
    }
  }
  convert(params, '');
  return result;
}

const obj = {
  a: {
    b: 1,
    c: 2,
    d: {
      e: 5,
    },
  },
  b: [1, 3, { a: 2, b: 3 }],
  c: 3,
};

var a = flatten(obj);
console.log('a', a);
```
