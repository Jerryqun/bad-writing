---
nav: Js
toc: content
group: TS
mobile: false
title: 高阶api
---

## 高阶 api 用法

## Record

```ts
/**
 * Record
 * Record<Keys， Type>
 * 构造一个对象类型，Keys 表示对象的属性键 、Type 表示对象的属性值，用于将一种类型属性映射到另一种类型
 */

type studentScore = { [name: string]: number };

type studentScore1 = Record<string, number>;

/**
 * Record 类型使用场景
 * 限制属性名称
 */
type roles = 'tester' | 'developer' | 'manager';
const staffCount: Record<roles, number> = {
  tester: 10,
  developer: 20,
  manager: 1,
};

/**
 * Record类型 和 keyof 组合
 */

interface Staff {
  name: string;
  salary: number;
}

type StaffJson = Record<keyof Staff, string>;

const product: StaffJson = {
  name: 'John',
  salary: '3000',
};
```

## ReturnType

```ts
function test1(lzwme: string, idx: number) {
  return {
    lzwme,
    idx,
  };
}

type TestReturnType = ReturnType<typeof test1>;

// type ReturnType<T extends (...args: any) => any> = T extends (
//   ...args: any
// ) => infer R
//   ? R
//   : any;
```

## Parameters

```ts
type TestArgsType1 = Parameters<typeof test1>;
// TestArgsType => [lzwme: string, idx: number]

type TestArgsType2 = Parameters<typeof test1>[1];
// TestArgsType => idx: number

// type Parameters<T extends (...args: any) => any> = T extends (
//   ...args: infer P
// ) => any
//   ? P
//   : never;
```

## Exclude

在一个联合类型 T 中排除联合类型 U 中的项，源码如下：

```ts
/**
 * Exclude from T those types that are assignable to U
 */
// type Exclude<T, U> = T extends U ? never : T;

type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
//   ^ = type T0 = "b" | "c"

type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;
//   ^ = type T1 = "c"

type T2 = Exclude<string | number | (() => void), Function>;
//   ^ = type T2 = string | number
```

## Omit

在一个索引类型 T 内部排除索引满足 K 的项：

```ts
/**
 * Construct a type with the properties of T except for those in type K.
 */
// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;

interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Omit<Todo, 'description'>;

const todo: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

type TodoInfo = Omit<Todo, 'completed' | 'title'>;
```

## Partical

把索引类型的所有属性变成可选

```ts
/**
 * Make all properties in T optional
 */
type Partial<T> = {
  [P in keyof T]?: T[P];
};
```

## Pick

从 T 类型中挑选部分属性 K 来构造新的类型。它的声明形式如下

```ts
interface IPerson {
  name: string;
  age: number;
  height: number;
}

const person: Pick<IPerson, 'name' | 'age'> = {
  name: 'zhangsan',
  age: 18,
};
```

## ThisParameterType

提取一个函数类型显式定义的 this 参数，如果没有显式定义的 this 参数，则返回 unknown 。

this 参数只能叫 this，且必须在参数列表的第一个位置  
this 必须是显式定义的  
这个 this 参数在函数实际被调用的时候不存在，不需要显式作为参数传入，而是通过 call、apply 或者是 bind 等方法指定

```js
interface Foo {
  x: number;
}

function fn(this: Foo, param: any) {}

type Test = ThisParameterType<typeof fn>; // Foo
const obj = {
  x: 1,
  fn: fn,
};
obj.fn({ a: 1 });

fn.call({ x: 1 }, { a: 1 });
fn.bind({ x: 1 }, { a: 1 });
fn.apply({ x: 1 }, [{ a: 1 }]);
```
