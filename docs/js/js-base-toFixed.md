---
nav: Js
group: 基础概念
toc: content
title: Math.toFixed()
---

## toFixed

toFixed 它是一个四舍六入五成双的诡异的方法(也叫银行家算法)，
"四舍六入五成双"含义：对于位数很多的近似数，当有效位数确定后，
其后面多余的数字应该舍去，只保留有效数字最末一位，这种修约（舍入）
规则是“四舍六入五成双”，也即“4 舍 6 入 5 凑偶”这里“四”是指 ≤4 时舍去，"六"是指 ≥6 时进上，
"五"指的是根据 5 后面的数字来定，当 5 后有数时，舍 5 入 1；当 5 后无有效数字时，
需要分两种情况来讲：①5 前为奇数，舍 5 入 1；②5 前为偶数，舍 5 不进。（0 是偶数）

### 标准四舍五入

```js
const myFixed = (num, digit = 2) => {
  if (Object.is(parseFloat(num), NaN)) {
    return console.warn(`传入的值：${num}不是一个数字`);
  }
  num = parseFloat(num);
  const numPow = Math.pow(10, digit);
  return (Math.round((num + Number.EPSILON) * numPow) / numPow).toFixed(digit);
};
```
