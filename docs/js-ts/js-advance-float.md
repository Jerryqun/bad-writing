---
nav: Js
group: 进阶
toc: content
title: 计算精度问题
---

## 计算精度问题

<a target="_blank" href="https://juejin.cn/post/6844903572979597319">参考</a>

- 原因  
  JavaScript 中的浮点数运算不正确问题，比如 0.1 + 0.2 !== 0.3 的现象，是由于计算机内部采用二进制来表示和计算数字造成的。这个问题并非特定于 JavaScript，而是几乎所有使用 `IEEE 754` 标准浮点数表示法的编程语言所共有的(JAVA, Python)。

  在二进制中，像 0.1 或 0.2 这样的分数并不能精确表示，就像在十进制中我们不能精确表示 1/3（它等于 0.3333…）。当我们在 JavaScript 中执行 0.1 + 0.2 时，由于二进制下的这种近似表示，其结果变成了一个与期待的 0.3 略有不同的浮点数，大约是 0.30000000000000004。

那么 JavaScript 在计算 0.1+0.2 时到底发生了什么呢？

首先，十进制的 0.1 和 0.2 会被转换成二进制的，但是由于`0.1和0.2用二进制表示时是无穷的`：

能精确表示的数
如：  
0.5 = 1/2  
0.25 = 1/4  
0.125 = 1/8  

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

1. 使用第三方库

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

2. 将浮点数转换为整数计算

```js
let result = (0.1 * 100 + 0.2 * 100) / 100; // 0.3
```
