---
nav: Js
group: 设计模式
toc: content
title: 策略模式
---

## 策略模式

定义一系列的算法,把它们一个个封装起来, 并且使它们可相互替换。

```js
const strategy = {
  A: (salary) => {
    return salary * 2;
  },

  B: (salary) => {
    return salary * 3;
  },

  C: (salary) => {
    return salary * 4;
  },
};

const calculateBonus = (level, salary) => {
  return strategy[level](salary);
};

const A = calculateBonus('A', 10000);
console.log(A); // 20000

// 暴露方法
export default {
  calculateBonus,
};
```
