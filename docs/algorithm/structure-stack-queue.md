---
nav: 算法/工具
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 栈与队列
---

## 栈 ——只用 pop 和 push 完成增删的“数组”

栈是一种遵循后进先出（LIFO, Last In First Out）原则的数据结构

```js
// 初始状态，栈空
const stack = [];
// 入栈过程
stack.push('东北大板');
stack.push('可爱多');
stack.push('巧乐兹');
stack.push('冰工厂');
stack.push('光明奶砖');

// 出栈过程，栈不为空时才执行
while (stack.length) {
  // 单纯访问栈顶元素（不出栈）
  const top = stack[stack.length - 1];
  console.log('现在取出的冰淇淋是', top);
  // 将栈顶元素出栈
  stack.pop();
}

// 栈空
stack; // []
```

## 队列 ——只用 push 和 shift 完成增删的“数组”

队列是一种遵循先进先出（FIFO, First In First Out）原则的数据结构

```js
const queue = [];
queue.push('小册一姐');
queue.push('小册二姐');
queue.push('小册三姐');

while (queue.length) {
  // 单纯访问队头元素（不出队）
  const top = queue[0];
  console.log(top, '取餐');
  // 将队头元素出队
  queue.shift();
}

// 队空
queue; // []
```

## 数组

JS 数组未必是真正的数组

如果我们在一个数组中只定义了一种类型的元素，比如：

const arr = [1,2,3,4]  
它是一个纯数字数组，那么对应的确实是连续内存。  
但如果我们定义了不同类型的元素：

const arr = ['haha', 1, {a:1}]  
它对应的就是一段非连续的内存。此时，JS 数组不再具有数组的特征，其底层使用哈希映射分配内存空间，是由对象链表来实现的。
