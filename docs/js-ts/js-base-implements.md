---
nav: Js
group: 基础概念
toc: content
title: implements用法
---

## implements 用法

```js
// 1、类和接口之间：
// 用接口去标准class， 要求AddStrategy的属性和方法等要依照CalculatorStrategy接口中定义的来
interface CalculatorStrategy {
  calculate: (a: number, b: number) => number;
}

class AddStrategy implements CalculatorStrategy {
  calculate(a: number, b: number) {
    return a + b;
  }
}

// 2、用于类与类之间，此时没有继承的成果，而是要求Son上要有定义Father类的属性和方法

class CalculatorStrategy {
  calculate(a: number, b: number) {
    return a + b;
  }
}

class AddStrategy implements CalculatorStrategy {
  calculate(a: number, b: number) {
    return a + b;
  }
}
```

demo

```js
interface Person {
  name: string;
  age?: number; // 可选属性
  greet(): void; // 方法签名
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log('Hello, my name is ' + this.name);
  }
}
```
