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

- sSet<br/>
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
比如 promise、proxy、object 的 assign、is
