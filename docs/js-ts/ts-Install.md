---
nav: Js
toc: content
group: TS
mobile: false
title: 安装
---

## 安装 TypeScript

<a target="_blank" href="https://www.typescriptlang.org/zh/play?#code/PTAEiJrQ5+MU3NAYlUAqBPADgUwMoGMBOBLFAF1EBR7QYb9AudUBh-gKBFEE34wejNAAOUCo5QTb9ADeUAXjQbPlAaP6BMxSqAwJUDVcoBiVQGbagAzlEqTLgLFAIW6BFf0CbXoCAGGnTCAKg0D3yoFO5E4CDNQNBygSDlAs56BO00Dw+oH95QBSugYO1AWP-79oUAFpQdkBYOUAseUAWD0B5dUBvuUBVeUAcOUB-SNU5BXRsfCJQVUAGdXtdegCgtkBleUAYrLSlTOJAW+jAVZtANz1AODlAaojALrkJXPzfIvZXQDi5QGlbQFXo4MAYFUqMlVABQEXowHxzQHylQF+A1UBMm0BG710aLAB7ADsAZ2IAQ32AUQAPE4BbFAAbNAA1E-wTgCNH0ABeUAAiAASaHu912oAA6rscPcACZ-HYHQ67R4AOlBAHMABRnK63B7PV54D6PACUenopkAnQ6Ab8VAFBy9lUoEAOASALk9ANHygFwCUCANCNmYAG00A36kcqgmQBhcoBjyMAL2aALE1AM6K-RqgAAo1SAQ-lAPYG2nh9G5gFAAwAESoATNIYgGy5QAXNoApxIagBQ5QAA+oBpzTcVEALqZscgUVSANDlADKugF+EwB6Ov0uLo-EA">在线写 ts</a>

```bash

sudo npm i typescript -g
tsc -v //Version 5.2.2

tsc --init 生成 tsconfig.json 文件

```

## TypeScript 中的类型有哪些

1、内置：包括数字(number)，字符串(string)，布尔值(boolean)，无效(void)，空值(null)和未定义(undefined)。<br/>
2、用户定义的：它包括枚举(enums)，类(classes)，接口(interfaces)，数组(arrays)和元组(tuple)。

元组类型：使用[]将多个不同类型的值组合在一起，表示一个值可以是这些类型的任意一个  
never 类型：表示永远不会发生的情况，通常用于函数返回类型。  
联合类型：使用|符号将多个类型组合在一起，表示一个值可以是这些类型的任意一个

## 枚举

```js
/**
 * 枚举是TypeScipt数据类型，它允许我们定义一组命名常量。 使用枚举使记录意图或创建一组不同的案例变得更加容易。 它是相关值的集合，可以是数字值或字符串值。
 */
enum Gender {
  Male,
  Female,
  Other,
}
console.log(Gender.Male); // Output: 0

//We can also access an enum value by it's number value.
console.log(Gender[1]); // Output: Female

```

ts 获取枚举的值作为一个新的类型

```js
// 定义一个枚举
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}

// 提取枚举的值作为新的类型
type ColorValues = typeof Color[keyof typeof Color];

// 使用这个类型
const myColor: ColorValues = Color.Red; // 正确
// const myInvalidColor: ColorValues = "YELLOW"; // 错误，因为 "YELLOW" 不是枚举 Color 的值

```

使用 typeof Color 获取枚举的类型，然后用 keyof 获取该类型的所有键（即 Red、Green 和 Blue）。

## 常量枚举

```js
const enum Direction {
  Up,
  Down,
  Left,
  Right
}

let dir: Direction = Direction.Up;

```

编译成 JavaScript 后:

```js
var dir = 0; /* Up */
```

## 元组

元组在 TypeScript 中提供了一种灵活的方式来处理具有不同类型的固定长度的数据结构。

```js
type Point = [number, number];
let point: Point = [10, 20]; // 正确
let anotherPoint: Point = [10]; // 错误：缺少一个元素

let mixedTuple: [number, ...string[]] = [1, "hello", "world"];

```

## 联合类型

```js
let id: number | string;
id = 123; // 正确
id = 'abc'; // 正确
```

## 类型断言

```js
let someValue: any = "Hello World";
let strLength1: number = (<string>someValue).length; // 尖括号形式
let strLength2: number = (someValue as string).length; // as形式
```

## 泛型

在 TypeScript 中，泛型（Generics）是指在定义函数、接口或类的时候，不预先指定具体类型，而是在使用的时候再指定类型的一种特性。泛型中的 T 就像一个占位符或者说一个变量，在使用的时候可以把定义的类型像参数一样传入，它可以原封不动地输出。泛型在成员之间提供有意义的约束，这些成员可以是函数参数、函数返回值、类的实例成员、类的方法等。

## TypeScript 中的交叉类型

```js
// 定义一个泛型函数，接受一个数组和一个值，然后返回值在数组中的索引
function findIndex<T>(array: T[], value: T): number {
  return array.indexOf(value);
}
```

需要注意的是，如果合并的接口类型中具有同名属性，且类型不同，则合并后类型为 never。

```js
interface ClassA {
  name: string;
  age: number;
}

interface ClassB {
  name: string;
  phone: number;
}

type Class = ClassA & ClassB;

let info: Class = {
  name: 'zhangsan',
  age: 18,
  phone: 15738755555,
};
```

## TypeScript 中的映射类型

```js
type Keys = 'a' | 'b' | 'c';
type MappedType = { [P in Keys]: boolean };
```

## TypeScript 中的条件类型

```js
type Message<T> = T extends string ? string : number;

let msg1: Message<string> = "Hello"; // 正确，类型为string
let msg2: Message<number> = 123; // 正确，类型为number
```

## TypeScript 中的类型保护

```js
function isString(value: any): value is string {
    return typeof value === 'string';
}

function processValue(value: any) {
    if (isString(value)) {
        // 在这里，TypeScript知道value是string类型
        console.log(value.toUpperCase());
    } else {
        // 处理其他类型
        console.log(value);
    }
}
```
