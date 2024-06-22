---
nav: Js
toc: content
group: TS
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

## 说说对 TypeScript 中命名空间与模块的理解？

### 模块

TypeScript 与 ECMAScript 2015 一样，任何包含顶级 import 或者 export 的文件都被当成一个模块，
相反地，如果一个文件不带有顶级的 import 或者 export 声明，
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

- 在定义公共 API 时(比如编辑一个库）使用 interface，这样可以方便使用者继承接口，这样允许使用最通过声明合并来扩展它们；
- 在定义组件属性（Props）和状态（State）时，建议使用 type，因为 type 的约束性更强。

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

## 什么是类型守卫，你如何在 TypeScript 中创建一个类型守卫

类型守卫（Type Guards）是 TypeScript 中的一种表达式，它在运行时检查以确保一个变量属于特定的类型。类型守卫可以帮助 TypeScript 编译器在代码块内窄化（narrow）变量的类型，保证代码块内的变量可以安全地按照特定类型进行操作。

以下是一些常见的类型守卫及其用法：

### 使用 `typeof`

`typeof` 是最基础的类型守卫，它用来检查一个变量的基础数据类型。

```typescript
function padLeft(value: string, padding: string | number) {
  if (typeof padding === 'number') {
    return Array(padding + 1).join(' ') + value;
  }
  if (typeof padding === 'string') {
    return padding + value;
  }
  throw new Error(`Expected string or number, got '${padding}'.`);
}
```

### 使用 `instanceof`

`instanceof` 类型守卫用于检查一个变量是否为某个类的实例。

```typescript
class Bird {
  fly() {
    console.log('Flying');
  }
}

class Fish {
  swim() {
    console.log('Swimming');
  }
}

function move(pet: Fish | Bird) {
  if (pet instanceof Fish) {
    return pet.swim();
  }
  if (pet instanceof Bird) {
    return pet.fly();
  }
}
```

### 用户自定义类型守卫

用户自定义的类型守卫通常通过定义一个函数来实现，该函数的返回类型是一个类型谓词（type predicate）。类型谓词的形式为 `parameterName is Type`，其中 `parameterName` 必须是当前函数参数的名称。

```typescript
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

// 在调用的地方
function move(pet: Fish | Bird) {
  if (isFish(pet)) {
    return pet.swim();
  } else {
    return pet.fly();
  }
}
```

### 使用 `in` 关键字

`in` 关键字可以用来检查一个对象是否拥有某个属性，也可以作为类型守卫。

```typescript
function move(pet: Fish | Bird) {
  if ('swim' in pet) {
    return pet.swim();
  } else {
    return pet.fly();
  }
}
```

类型守卫不仅可以帮助避免运行时错误，还可以提供更好的代码提示和更严格的类型检查。当处理联合类型或者不确定类型的值时，类型守卫是一个非常有用的工具。

在 TypeScript 中，你可以通过在属性前添加 readonly 关键字来定义一个只读属性。这表示一旦一个属性被赋值后，在类的外部就不能再修改它的值。

在接口中定义只读属性

```js
class Animal {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  changeName(newName: string) {
    this.name = newName; // Error: Cannot assign to 'name' because it is a read-only property.
  }
}

const cat = new Animal("Whiskers");
cat.name = "Fluffy"; // Error: Cannot assign to 'name' because it is a read-only property.


interface Point {
  readonly x: number;
  readonly y: number;
}

const p1: Point = { x: 10, y: 20 };
p1.x = 5; // Error: Cannot assign to 'x' because it is a read-only property.

// 声明函数
interface MyFunc {
(x:number,y:number):number
}
let myAdd: MyFunc = function(x, y) {
  return x + y;
};

//  Interface 声明数组

interface StringArray {
  [index: number]: string;
}

let myArray: StringArray;
myArray = ["Bob", "Alice"];
```

## 如何为 TypeScript 的泛型添加约束

在 TypeScript 中，泛型（Generics）允许你创建可重用的组件，同时保留类型的完整性。有时候，你可能需要对泛型类型的使用进行限制，确保它具有某些特定的属性或方法。这就是所谓的泛型约束（Generic Constraints）。

### 泛型约束的基本用法

要为泛型添加约束，你需要定义一个接口来描述约束条件，并使用 `extends` 关键字来应用这个接口作为泛型参数的约束。

#### 示例：约束泛型类型必须含有特定的属性

```typescript
interface Lengthwise {
  length: number;
}

// T 受到了 Lengthwise 约束，必须含有 length 属性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}

loggingIdentity(3); // Error: Argument of type 'number' doesn't satisfy the constraint 'Lengthwise'.
loggingIdentity({ length: 10, value: 3 }); // Works fine
```

在这个例子中，`Lengthwise` 接口包含一个属性 `length`。`loggingIdentity` 函数的泛型参数 `T` 现在被约束为必须符合 `Lengthwise` 接口，即 `T` 必须有一个 `length` 属性。

### 使用多个约束

如果你想为泛型参数添加多个约束，你可以使用交叉类型。

#### 示例：使用多个约束

```typescript
interface Lengthwise {
  length: number;
}

interface Printable {
  print(): void;
}

// T 必须同时符合 Lengthwise 和 Printable 约束
function printAndReturn<T extends Lengthwise & Printable>(arg: T): T {
  arg.print();
  console.log(arg.length);
  return arg;
}

// 对象必须同时具有 length 属性和 print 方法
printAndReturn({
  length: 10,
  print: () => {
    console.log('Printing!');
  },
});
```

在 `printAndReturn` 函数中，泛型参数 `T` 被约束为必须同时具有 `Lengthwise` 接口定义的 `length` 属性和 `Printable` 接口定义的 `print` 方法。

### 在泛型约束中使用类型参数

有时你可能还需要在一个泛型约束中引用另一个泛型参数。

#### 示例：在约束中使用类型参数

```typescript
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, 'a'); // Works fine
getProperty(x, 'm'); // Error: Argument of type '"m"' isn't assignable to '"a" | "b" | "c" | "d"'.
```

在这个例子中，`getProperty` 函数接受两个参数：对象 `obj` 和键 `key`。`K` 泛型参数被约束为必须是 `T`（`obj` 参数的类型）的键的集合中的成员。使用 `keyof T` 表达式，我们可以确保 `key` 参数只能是 `obj` 中存在的键。

泛型约束增加了泛型的灵活性，允许函数和类与各种类型进行交互，同时保证这些类型具有必要的属性和方法。这样可以保证代码的安全性和正确性。

## const 和 readonly 的区别

### const

- const 用于声明常量值。一旦被赋值后，其值将不能被重新赋值或修改。
- 常量必须在声明时就被赋值，并且该值不可改变。
- 常量通常用于存储不会发生变化的值，例如数学常数或固定的配置值。

### readonly

- readonly 关键字用于标记类的属性，表明该属性只能在类的构造函数或声明时被赋值，并且不能再次被修改。
- readonly 属性可以在声明时或构造函数中被赋值，但之后不能再被修改。
- readonly 属性通常用于表示对象的某些属性是只读的，防止外部代码修改这些属性的值。
