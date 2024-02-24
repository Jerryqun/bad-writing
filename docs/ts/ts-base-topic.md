---
nav: Ts
toc: content
group: 基础
mobile: false
title: 面试
---

## 如何将 unknown 类型指定为一个更具体的类型

```ts
function getString1(value: unknown): string {
  return value; // Error 不能将类型“unknown”分配给类型“string”。
}

/**
 * 通过typeof类型判断
 */
function getString(value: unknown): string {
  if (typeof value === 'string') {
    return value;
  }
  return String(value);
}

/**
 * 用as 断言
 */
const value1: unknown = 'Hello World';
const foo1: string = value1; // Error
const bar1: string = value1 as string; // OK

/**
 * 若断言错误  运行时会报错
 */

const value: unknown = 'Hello World';

const bar: number = value as number; // runtime Error
```

## 说说对 TypeScript 中命名空间与模块的理解？区别

### 模块

TypeScript 与 ECMAScript 2015 一样，任何包含顶级 import 或者 export 的文件都被当成一个模块
相反地，如果一个文件不带有顶级的 import 或者 export 声明，那么它的内容被视为全局可见的
例如我们在在一个 TypeScript 工程下建立一个文件 1.ts，声明一个变量 const a = 1，工程下建立另一个文件 2.ts，const a = 2
提示重复声明 a 变量

### 命名空间

命名空间一个最明确的目的就是解决重名问题

命名空间定义了标识符的可见范围，一个标识符可在多个名字空间中定义，它在不同名字空间中的含义是互不相干的
这样，在一个新的名字空间中可定义任何标识符，它们不会与任何已有的标识符发生冲突，因为已有的定义都处于其他名字空间中
TypeScript 中命名空间使用 namespace 来定义，语法格式如下：

```js
namespace SomeNameSpaceName {
  export interface ISomeInterfaceName {}
  export class SomeClassName {}
}

/**
 * 以上定义了一个命名空间 SomeNameSpaceName，如果我们需要在外部可以调用 SomeNameSpaceName 中的类和接口，则需要在类和接口添加 export 关键字
使用方式如下：
 */

SomeNameSpaceName.SomeClassName;

```

1、命名空间是位于全局命名空间下的一个普通的带有名字的 JavaScript 对象，使用起来十分容易。但就像其它的全局命名空间污染一样，它很难去识别组件之间的依赖关系，尤其是在大型的应用中<br/>
2、像命名空间一样，模块可以包含代码和声明。 不同的是模块可以声明它的依赖<br/>
3、在正常的 TS 项目开发过程中并不建议用命名空间，但通常在通过 d.ts 文件标记 js 库类型的时候使用命名空间，主要作用是给编译器编写代码的时候参考使用<br/>

## any 和 unknown 区别

```ts
/**
 * 1、any 和 unknown 都是顶级类型，但是 unknown 更加严格，不像 any 那样不做类型检查
 */

/**
 * 2、反而 unknown 因为未知性质，不允许访问属性，不允许赋值给其他有明确类型的变量 只能赋值给unknown和any类型
 */

let a1: unknown = { a: 1 };
a1.a; //   Error unknown无法提供属性访问

let b1: string = '1';
b1 = a1; // Error 不能将类型“unknown”分配给类型“string”。
```

## interface 和 type 的区别

```ts
//1、interface 能够声明合并 type 不行（interface 可以重复声明 会自动合并，type 定义后不能重复声明）
interface A {
  a: string;
}
interface A {
  b: string;
}

const a: A = { a: '23', b: '3434' };
//2、type 可以声明基本类型别名，联合类型，元组等类型 interface 不行 interface 只能声明对象形式

// 可以定义基本类型别名，如
type StringType = string;
// 可以声明联合类型，如
type paramType = number | string;
// 可以声明元组类型，如
type arrType = [string, string, number];

//3、继承方式不一样 extends 和 &
```

## never 和 void 的区别

1、void 表示没有任何类型（可以被赋值为 null 和 undefined）<br/>
2、never 表示一个不包含值的类型，即表示永远不存在的值<br/>
3、拥有 void 返回值类型的函数能正常运行。拥有 never 返回值类型的函数无法正常返回，无法终止，或会抛出异常。）<br/>
