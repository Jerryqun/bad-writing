---
nav: Ts
toc: content
group: 进阶
mobile: false
title: extends
---

## TS 进阶之 extends

```ts
namespace Extends {
  type T = {
    a: number;
    b: number;
    c: number;
  };

  type U = {
    b: number;
    a: number;
  };

  type A = U extends T ? any : unknown[]; // a   unknown[]
}
```

## 动态扩展对象

```ts
interface DynamicObject {
  [key: string]: number | string; // 允许任意属性名，但属性值必须为 number 或 string 类型
}
function processDynamicData(data: DynamicObject): void {
  for (let key in data) {
    console.log(key + ': ' + data[key]); // 对任意属性进行处理
  }
}
```
