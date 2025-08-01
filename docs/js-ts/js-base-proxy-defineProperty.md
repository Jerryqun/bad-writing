---
nav: Js
toc: content
group: 基础概念
mobile: false
title: Proxy 和Object.defineProperty()
---

<a href="https://juejin.cn/post/7069397770766909476" target="_blank">参考链接</a>

## Proxy

1. 非侵入的形式监听对象
2. 可以直接监听数组的读写，如果是 Object.defineProperty 需要重写数组的方法
3. Proxy 无法直接监听基本数据类型（如字符串、数字、布尔值等），因为它们是不可变的

Proxy 可以理解成，在目标对象之前架设一层“拦截”，外界对该对象的访问，都必须先通过这层拦截，因此提供了一种机制，可以对外界的访问进行过滤和改写 target 参数表示所要拦截的目标对象，handler 参数也是一个对象，用来定制拦截行为。

```js
const proxy = new Proxy(target, handler);

/**
 *  手写用 ES6proxy 如何实现 arr[-1] 的访问
 */

const arrProxy = (arr) =>
  new Proxy(arr, {
    get(target, key) {
      key = +key;
      while (key < 0) {
        key += target.length;
      }
      return target[key];
    },
  });

const a = arrProxy([0, 1, 2, 3]);
console.log(a);
```

## Reflect（静态类）

Reflect 的所有属性和方法都是静态的，统一提供一套用于操作对象的 api

```js
const obj = {
  name: 'zcq',
  age: 18,
};
// console.log('name' in obj); => Reflect.has(obj,'name')
// console.log(delete obj.name); => Reflect.deleteProperty(obj,'name')
// console.log(Object.keys(obj));=> Reflect.ownKeys(obj)
```

###  Reflect作用
- 所有方法都在 Reflect， 方便操作
- 因为Proxy可以改写默认的原生API，如果一旦原生API别改写可能就找不到了，所以Reflect也可以起到备份原生API的作用

ES6 中操作对象而提供的新 API，若需要在 Proxy 内部调用对象的默认行为，建议使用 Reflect  
1、只要 Proxy 对象具有的代理方法，Reflect 对象全部具有，以静态方法的形式存在  
2、修改某些 Object 方法的返回结果，让其变得更合理（定义不存在属性行为的时候不报错而是返回 false）  
3、让 Object 操作都变成函数行为

```js
const proxy = new Proxy(obj, {
  get(target, property) {
    // 如果没有定义 get 方法，那么默认返回的就是 Reflect 的 get 方法
    return Reflect.get(target, property);
  },
});
```

## Object.defineProperty()

obj：要添加属性的对象  
prop：要定义或修改的属性的名称或 [Symbol]  
descriptor：要定义或修改的属性描述符  

```js
Object.defineProperty(obj, prop, descriptor);

const object1 = {};

Object.defineProperty(object1, 'property1', {
  // value: 42 （value 和get 互斥）,
  get: function (val) {
    return 'property1Value';
  },
  // writable: false （ writable 和set 互斥）
  set: function (newVal) {},
});

object1.property1 = 77;
// throws an error in strict mode
console.log(object1.property1);
// expected output: 42

/**
  configurable 是否可以删除属性和属性描述
  enumerable 才能出现在对象枚举中
  value 初始值
  writable 是否能被赋值运算符改变
  get
  set
  */

const person = { name: 'Lydia' };

Object.defineProperty(person, 'age', { value: 21 });

console.log(person); // { name: "Lydia", age: 21 }
console.log(Object.keys(person)); // ['name'] 新增的属性默认不可枚举

person.age = 22;
console.log(person.age); // 21  没变

/**
 * 通过defineProperty方法，我们可以给对象添加一个新属性，或者修改已经存在的属性。
 * 而我们使用defineProperty方法给对象添加了一个属性之后，属性默认为 不可枚举(not enumerable). Object.keys方法仅返回对象中
 * 可枚举(enumerable) 的属性，因此只剩下了"name".
 * 用defineProperty方法添加的属性默认不可变。你可以通过writable, configurable 和 enumerable属性来改变这一行为。这样的话，
 * 相比于自己添加的属性，defineProperty方法添加的属性有了更多的控制权。
 */
```

##  defineProperty 缺点

  1、不能拦截新增属性  
  2、通过下标的方式修改数组数据无法监听  
  3、需要遍历所有属性 性能差  
  3、vue3 替代方案是proxy， proxy是es6语法，有兼容问题  
