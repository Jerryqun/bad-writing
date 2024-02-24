---
nav: Ts
toc: content
group: 基础
mobile: false
title: 泛型
---

```js
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
