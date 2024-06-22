---
nav: Js
toc: content
group: TS
mobile: false
title: 泛型
---

## 泛型

泛型是一种在定义函数、接口、类型时使用的类型变量的方式，它可以让我们在不确定具体类型的情况下编写代码，从而提高代码的可复用性和可读性。

使用泛型的好处如下：在不确定传入类型的情况下编写代码，在使用时才传入类型，传入的类型可以是多样的。从这个角度看待的话，泛型可以让我们编写更加通用的代码，从而提高代码的可复用性和可读性。

```js
/**
 * 源码
 */

 type Record<K extends keyof any, T> = {
    [P in K]: T;
 };


/**
 * 泛型方法
 */
function A<T>(params: T): T {}

/**
 * 泛型接口
 */

interface A<T, C> {
  name: string;
  age: T;
  lover: C;
}

const a: A<number, Object> = {
  name: '12',
  age: 18,
  lover: {},
};
console.log('a: ', a);

/**
 * 泛型类型
 */

type A<T> = {
  a: T,
};

const b: A<string> = { a: '12' };
console.log('b: ', b);
```
