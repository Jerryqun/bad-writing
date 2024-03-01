---
nav: Js
group: 进阶
toc: content
title: 计算精度问题
---

## 计算精度问题

<a target="_blank" href="https://juejin.cn/post/6844903572979597319">参考</a>

- 原因

那么 JavaScript 在计算 0.1+0.2 时到底发生了什么呢？

首先，十进制的 0.1 和 0.2 会被转换成二进制的，但是由于浮点数用二进制表示时是无穷的：

```bash
0.1 -> 0.0001 1001 1001 1001...(1100循环)
0.2 -> 0.0011 0011 0011 0011...(0011循环)
```

IEEE 754 标准的 64 位双精度浮点数的小数部分最多支持 53 位二进制位，所以两者相加之后得到二进制为：

```bash
0.0100110011001100110011001100110011001100110011001100

```

因浮点数小数位的限制而截断的二进制数字，再转换为十进制，就成了 0.30000000000000004。所以在进行算术计算时会产生误差。

## 解决办法

```js
/**
 * 使用bignumber.js解决 （mathjs相对要大）
 * https://www.npmjs.com/package/bignumber.js
 */

/**
 * 加法 =====================
0.1 + 0.2 = 0.30000000000000004
0.7 + 0.1 = 0.7999999999999999
0.2 + 0.4 = 0.6000000000000001
 */

/**
 * 减法 =====================
1.5 - 1.2 = 0.30000000000000004
0.3 - 0.2 = 0.09999999999999998
 */

/**
 * 乘法 =====================
19.9 * 100 = 1989.9999999999998
0.8 * 3 = 2.4000000000000004
35.41 * 100 = 3540.9999999999995
 */

/**
 * 除法 =====================
0.3 / 0.1 = 2.9999999999999996
0.69 / 10 = 0.06899999999999999
 */

// 加法解决(plus)
import BigNumber from 'bignumber.js';
const x = new BigNumber(0.1);
const y = new BigNumber(0.2);
const sum = x.plus(y);
console.log('sum: ', sub.toString());

// 减法解决(minus)
import BigNumber from 'bignumber.js';
const x = new BigNumber(1.5);
const y = new BigNumber(1.2);
const reduce = x.minus(y);
console.log('reduce: ', reduce.toString());

// 乘法解决(multipliedBy)
import BigNumber from 'bignumber.js';
const x = new BigNumber(19.9);
const y = new BigNumber(100);
const multipliedBy = x.multipliedBy(y);
console.log('multipliedBy: ', multipliedBy.toString()); // 1990

// 除法解决(dividedBy)
import BigNumber from 'bignumber.js';
const x = new BigNumber(0.3);
const y = new BigNumber(0.1);
const dividedBy = x.dividedBy(y);
console.log('mod: ', dividedBy.toString()); // 3
```
