---
nav: Ts
toc: content
group: 进阶
mobile: false
title: infer
---

<a target="_blank" href="https://www.jianshu.com/p/707a304d7752">参考</a>

infer 语法的限制如下：

infer 只能在条件类型的 extends 子句中使用<br/>
infer 得到的类型只能在 true 语句中使用, 即 X 中使用<br/>

### 案例

```ts
//基本使用
type InferArray<T> = T extends (infer U)[] ? U : never;
type I0 = InferArray<[number, string]>; // string | number
type I1 = InferArray<string[]>; // string
type I2 = InferArray<number[]>; // number

// 推断数组(或者元组)第一个元素的类型
type InferFirst<T extends unknown[]> = T extends [infer P, ...infer _]
  ? P
  : never;
```

### 一道 3 层的 TypeScript 面试题

<a target="_blank" href="https://juejin.cn/post/7182574672687398968">参考</a>

```js
/**
 * 第一层的要求是这样的
 * 实现一个 zip 函数，对两个数组的元素按顺序两两合并，比如输入 [1,2,3], [4,5,6] 时，返回 [[1,4], [2,5],[3,6]]
 */

function zip(target, source) {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip(rest1, rest2)];
}
```

```ts
/**
 * 第二层要求
 * 给这个 zip 函数定义 ts 类型（两种写法）
 */

//第一种
function zip1(target: unknown[], source: unknown[]): unknown[] {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip1(rest1, rest2)];
}

type Zip1 = (target: unknown[], source: unknown[]) => unknown[];

interface Zip3 {
  (target: unknown[], source: unknown[]): unknown[];
}

const zip2: Zip3 = (target, source) => {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip(rest1, rest2)];
};

const result1 = zip1([1, 2, 3], [4, 5, 6]);
```

```ts
/**
 * 第三层要求
 * 用类型编程实现精确的类型提示，比如参数传入 [1,2,3], [4,5,6]，那返回值的类型要提示出 [[1,4], [2,5],[3,6]]
 */

// infer 使用

type one = [1, 2, 3] extends [infer One, ...infer Rest] ? One : never;
type rest = [1, 2, 3] extends [infer One, ...infer Rest] ? Rest : never;

// infer 推导Zip类型

type Zip2<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  ...infer Rest1,
]
  ? Other extends [infer OtherFirst, ...infer Rest2]
    ? [[OneFirst, OtherFirst], ...Zip2<Rest1, Rest2>]
    : []
  : [];

// 去掉 readonly 修饰
type Mutable<Obj> = {
  -readonly [Key in keyof Obj]: Obj[Key];
};

// 函数重载
function zip(target: unknown[], source: unknown[]): unknown[];

function zip<
  Target extends readonly unknown[],
  Source extends readonly unknown[],
>(target: Target, source: Source): Zip2<Mutable<Target>, Mutable<Source>>;

function zip(target: unknown[], source: unknown[]) {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip(rest1, rest2)];
}

const result4 = zip([1, 2, 3] as const, [4, 5, 6] as const);

const arr1 = [1, 2, 3];
const arr2 = [4, '5', 6];

const result3 = zip(arr1, arr2);
```
