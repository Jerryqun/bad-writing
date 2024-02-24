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
    a: 1;
    //   c: 2;
  };

  type U = {
    b: 2;
    a: 1;
  };

  type A = U extends T ? any : unknown[];
}
```
