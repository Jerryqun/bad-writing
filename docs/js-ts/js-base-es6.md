---
nav: Js
group: 基础概念
toc: content
title: ES6
---

## ES6 有哪些新特性

一、语法<br/>

- let 和 const 的块级作用域
  let、const 声明的变量，在 for，if 语句中，会形成块级作用域，块级作用域内的变量，不能被作用域外部使用
  let、const 声明变量不再会有声明提升，在变量声明之前使用运行时会报错

- 解构赋值、展开、参数默认值、模板字符串
  解构赋值时注意 null 和 undefined

- 同名属性可以省略 key:value 形式，直接 key

- 函数可以省略 key：value 形式 直接 func()

- 箭头函数

```js
const obj = {
  fn_name() {
    console.log('work');
  },
};
obj.fn_name(); // work
```

- 计算属性

```js
const methodPrefix = 'fetch';

class MyService {
  [methodPrefix + 'Data']() {
    console.log('Data fetched');
  }
  [Math.random()]: 11122;

  get [methodPrefix + 'Status']() {
    return 'Fetching status...';
  }

  set [methodPrefix + 'Status'](value) {
    console.log(`Status set to ${value}`);
  }
}

const service = new MyService();

service.fetchData(); // 输出: Data fetched
console.log(service.fetchStatus); // 输出: Fetching status...
service.fetchStatus = 'Complete'; // 输出: Status set to Complete
```

二、全新的数据类型和数据结构<br/>
Symbol Set Map WeakSet WeakMap

- Set<br/>
  成员不能重复<br/>
  只有健值，没有健名，有点类似数组<br/>
  可以遍历，方法有 add, delete,has<br/>

- weakSet<br/>
  成员都是对象<br/>
  成员都是弱引用，随时可以消失。 可以用来保存 DOM 节点，不容易造成内存泄漏<br/>
  不能遍历，方法有 add, delete,has<br/>

- Map<br/>
  本质上是健值对的集合，类似集合<br/>
  可以遍历，方法很多，可以干跟各种数据格式转换<br/>

- weakMap<br/>
  直接受对象作为健名（null 除外），不接受其他类型的值作为健名<br/>
  健名所指向的对象，不计入垃圾回收机制<br/>
  不能遍历，方法同 get,set,has,delete<br/>

三、全新的对象、全新的方法、全新的功能
比如 promise、proxy、object 的 Object.assign、Object.is

##  getPrototypeOf
ES6在Object原型上新增了getPrototypeOf()和setPrototypeOf()方法，用来获取或设置当前对象的prototype对象。这个方法存在的意义在于，ES5中获取设置prototype对像是通过__proto__属性来实现的，然而__proto__属性并不是ES规范中的明文规定的属性，只是浏览器各大产商“私自”加上去的属性，只不过因为适用范围广而被默认使用了，再非浏览器环境中并不一定就可以使用，所以为了稳妥起见，获取或设置当前对象的prototype对象时，都应该采用ES6新增的标准用法

## ES2017  和es6 的区别

ES2017（也称为 ES8）和 ES6（ECMAScript 2015）是两个不同的 ECMAScript 版本，各自引入了一些新的特性和改进。下面是它们之间的主要区别：

### 1. 发布年份
- **ES6**: 也称为 ECMAScript 2015，是在 2015 年发布的，这是一个重大的版本更新，引入了许多新的语法和特性。
- **ES2017**: 在 2017 年发布，是 ECMAScript 的第八个版本。

### 2. 主要特性

#### ES2017 的主要特性
- **`async`和`await`**: 提供了更简便的方式来处理异步操作，可以使异步代码看起来更像同步代码。
  
    ```javascript
    const fetchData = async () => {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        console.log(data);
    };
    ```

- **新增的对象方法**:
  - `Object.entries()`: 返回一个给定对象自身可枚举属性的键值对数组。
  - `Object.values()`: 返回一个给定对象自身可枚举属性的值数组。

- **字符串的 `padStart` 和 `padEnd` 方法**: 使得可以轻松地进行字符串的填充。
  
    ```javascript
    '5'.padStart(2, '0'); // '05'
    '5'.padEnd(2, '0');   // '50'
    ```

- **Shared Memory 和 Atomics**: 为 JavaScript 提供了共享内存和原子操作的能力，通常用于 Web Worker。

### 3. 兼容性
- **ES6**: 是一个比较大的更新，在 JavaScript 的生态中产生了广泛的影响，而为了支持许多新特性，很多遗留代码需要使用 Babel 等工具进行转译。
- **ES2017**: 相对来说是一组增量的更新，大部分现代浏览器已经支持 ES6 的特性，因此 ES2017 在大多数环境中也得到了很好的支持。

### 总结
- ES6 是一个重大版本，引入了许多新的语言特性，改变了 JavaScript 编程的方式。
- ES2017 是对 ES6 的增量更新，主要引入了一些新的特性和改进，特别是在异步编程方面。

这两个版本之间的主要区别在于引入的特性和语法，理解这些变化有助于更有效地利用 JavaScript 语言的最新功能。
