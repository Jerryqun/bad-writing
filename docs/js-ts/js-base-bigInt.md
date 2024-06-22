---
nav: Js
group: 基础概念
toc: content
title: BigInt
---

在 JavaScript 中，`BigInt` 是一种内置的对象，它提供了一种方法来表示大于 `2^53 - 1` 的整数。在 ES2020（也称为 ES11）之前，JavaScript 中数字的精度是有限的，因为 `Number` 类型只能安全地表示 `-2^53 + 1` 到 `2^53 - 1` （即 `Number.MAX_SAFE_INTEGER`）之间的整数。

使用 `BigInt`，你可以安全地存储和操作任意大小的整数，甚至是非常大的整数，而不会丢失精度。

创建 `BigInt` 的方法有两种：

1. 通过在整数后面加上 `n` 后缀来直接创建：

```javascript
const bigInt1 = 1234567890123456789012345678901234567890n;
```

2. 使用 `BigInt()` 构造函数：

```javascript
const bigInt2 = BigInt('1234567890123456789012345678901234567890');
```

`BigInt` 类型的数值可以进行基本的算术运算，如加法、减法、乘法和除法。然而，由于 `BigInt` 是一种不同的数据类型，你不能将其与 `Number` 类型的值直接混合使用；你必须将 `Number` 值转换为 `BigInt`，或者相反。

```javascript
const bigInt1 = 10n;
const bigInt2 = 20n;

const sum = bigInt1 + bigInt2; // 正确：结果是 30n
console.log(sum);

const num = 5;
// const mixedSum = bigInt1 + num; // 错误：不能将 BigInt 与 Number 直接相加
const mixedSum = bigInt1 + BigInt(num); // 正确：转换 num 为 BigInt
console.log(mixedSum);
```

`BigInt` 类型也支持比较运算符和位运算符。但是需要注意的是，不支持 `BigInt` 类型的数值和 `Number` 类型的数值进行比较时，首先需要做类型转换。另外，使用 `BigInt` 时无法使用 `Math` 对象中的方法，因为 `Math` 对象的方法只能用于 `Number` 类型的数值。

总之，`BigInt` 提供了处理大整数的能力，这在处理大型数据集、高精度时间戳、大数字计算等方面非常有用。在使用 `BigInt` 时，需要注意它和 `Number` 类型的交互限制。
