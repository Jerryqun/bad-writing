---
nav: 算法
group:
  title: 栈与队列
  order: 2
toc: content
mobile: false
title: 基础概念
---

## 栈

栈是一种遵循后进先出（LIFO, Last In First Out）原则的数据结构

```js
let stack = [];
stack.push(1); // 栈中现在是 [1]
stack.push(2); // 栈中现在是 [1, 2]
let item = stack.pop(); // 移除 2，栈中现在是 [1]
```

## 队列

队列是一种遵循先进先出（FIFO, First In First Out）原则的数据结构

```js
let queue = [];
queue.push(1); // 队列中现在是 [1]
queue.push(2); // 队列中现在是 [1, 2]
let item = queue.shift(); // 移除 1，队列中现在是 [2]
```
