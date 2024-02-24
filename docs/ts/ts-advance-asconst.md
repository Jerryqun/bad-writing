---
nav: Ts
toc: content
group: 进阶
mobile: false
title: as const
---

## TypeScript 中 as const

as const 是 TypeScript 中的一个用于修饰符，它可以被用来修改类型推断的行为。
当 as const 修饰符用在变量声明或表达式的类型上时，它会强制 TypeScript 将变量或表达式的类型视为不可变的（immutable）。这意味着，如果你尝试对变量或表达式进行修改，TypeScript 会报错。
例如：
const foo = ['a', 'b'] as const;
foo.push('c'); // TypeScript 会报错，因为 foo 类型被声明为不可变的

const bar = { x: 1, y: 2 } as const;
bar.x = 3; // TypeScript 会报错，因为 bar 类型被声明为不可变的

as const 修饰符还可以用来修改对象字面量和数组字面量的类型推断。在这种情况下，as const 会强制 TypeScript 将对象字面量或数组字面量的类型推断为不可变的，即使没有显式地指定类型。
例如：
const foo = ['a', 'b'] as const; // 等价于 const foo: ['a', 'b'] = ['a', 'b']

const bar = { x: 1, y: 2 } as const; // 等价于 const bar: { x: 1, y: 2 } = { x: 1, y: 2 }

在这两个例子中，TypeScript 会将 foo 和 bar 的类型推断为不可变的数组和对象，即使没有显式地指定类型。
总的来说，as const 修饰符是一种有用的工具，可以帮助我们提高代码的类型安全性，避免在不应该修改的地方进行修改。
