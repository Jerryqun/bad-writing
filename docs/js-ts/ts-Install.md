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

编译成 JavaScript 后:

```js
var Direction;
(function (Direction) {
  Direction[(Direction['Up'] = 0)] = 'Up';
  Direction[(Direction['Down'] = 1)] = 'Down';
  Direction[(Direction['Left'] = 2)] = 'Left';
  Direction[(Direction['Right'] = 3)] = 'Right';
})(Direction || (Direction = {}));

var dir = Direction.Up;
```

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
