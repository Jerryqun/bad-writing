---
nav: Js
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 栈与队列
---

## 栈 ——只用 pop 和 push 完成增删的“数组”

栈是一种遵循后进先出（LIFO, Last In First Out）原则的数据结构

栈和数组不是一个东西 ，没有可比性  
栈是逻辑结构，是理论模型，不管如何实现，不受任何语言的控制  
数组是物理结构，是真实的功能实现，与编程语言有关系，操作数组的 api 会因为编程语言的不同而不同

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

class Stack {
  constructor() {
    // 存储栈的数据
    this.data = {};
    // 记录栈的数据个数（相当于数组的 length）
    this.count = 0;
  }
  // push() 入栈方法
  push(item) {
    // 方式1：数组方法 push 添加
    // this.data.push(item)
    // 方式2：利用数组长度
    // this.data[this.data.length] = item
    // 方式3：计数方式
    this.data[this.count] = item;
    // 入栈后，count 自增
    this.count++;
  }
  // pop() 出栈方法
  pop() {
    // 出栈的前提是栈中存在元素，应先行检测
    if (this.isEmpty()) {
      console.log('栈为空！');
      return;
    }
    // 移除栈顶数据
    // 方式1：数组方法 pop 移除
    // return this.data.pop()
    // 方式2：计数方式
    const temp = this.data[this.count - 1];
    delete this.data[--this.count];
    return temp;
  }
  // isEmpty() 检测栈是否为空
  isEmpty() {
    return this.count === 0;
  }
  // top() 用于获取栈顶值
  top() {
    if (this.isEmpty()) {
      console.log('栈为空！');
      return;
    }
    return this.data[this.count - 1];
  }
  // size() 获取元素个数
  size() {
    return this.count;
  }
  // clear() 清空栈
  clear() {
    this.data = [];
    this.count = 0;
  }
}

const s = new Stack();
s.push('a');
s.push('b');
s.push('c');
```

### leetCode 真题 包含 min 函数的栈 要求时间复杂度为 O(1)

```js
class minStack {
  constructor() {
    this.stackA = [];
    this.stackACount = 0;
    this.stackB = [];
    this.stackBCount = 0;
  }
  push(item) {
    if (this.stackBCount === 0 || item <= this.min()) {
      this.stackB[this.stackBCount++] = item;
    }
    this.stackA[this.stackACount++] = item;
  }
  min() {
    return this.stackB[this.stackBCount - 1];
  }
  top() {
    if (this.isEmpty()) {
      return;
    }
    return this.stackA[this.stackACount - 1];
  }
  pop() {
    if (this.isEmpty()) {
      return;
    }
    const temp = this.stackA[this.stackACount - 1];
    if (temp === this.min()) {
      delete this.stackB[--this.stackBCount];
    }
    delete this.stackA[--this.stackACount];
    return temp;
  }
  isEmpty() {
    return this.stackACount === 0;
  }
}

const stack = new minStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(0);

const a = stack.min();
console.log('a: ', a);
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

### 用两个栈实现一个队列

```ts
class Queue {
  private stack1: number[] = [];
  private stack2: number[] = [];

  add(params: number): void {
    this.stack1.push(params);
  }

  delete(): number | null {
    while (this.stack1.length) {
      let pop = this.stack1.pop();
      if (pop != null) {
        this.stack2.push(pop);
      }
    }

    let res = this.stack2.pop();

    while (this.stack2.length) {
      let pop = this.stack2.pop();
      if (pop != null) {
        this.stack1.push(pop);
      }
    }

    return res || null;
  }

  get length(): number {
    return this.stack1.length;
  }
}
```

### 用链表实现一个队列

链表实现的队列比数组实现的队列性能要好  
数组和链表实现 add 方法:都是时间复杂度是 O(1),空间复杂度为 O(N)  
数组和链表实现 delete 方法: 链表时间复杂度是 O(1)、空间复杂度为 O(N)，数组的空间复杂度为 O(N)、`时间复杂度为 O(N)`

```js
type LinkNodeList = {
  value: number;
  next: LinkNodeList | null;
};

class MyQueue {
  private head: LinkNodeList | null = null;
  private tail: LinkNodeList | null = null;
  private len: number = 0;
  add(n: number) {
    const newNode: LinkNodeList = {
      value: n,
      next: null,
    };
    if (this.head === null) {
      this.head = newNode;
    }
    const tail = this.tail;
    if (tail) {
      tail.next = newNode;
    }
    this.tail = newNode;
    this.len++;
  }

  delete(): number | null {
    const head = this.head;
    if (head === null) {
      return null;
    }
    if (this.len <= 0) {
      return null;
    }
    this.head = head.next;
    this.len--;
    return head.value;
  }
  get length(): number {
    return this.len;
  }
}

const q = new MyQueue()
q.add(100)
q.add(200)
q.delete()
q.delete()

console.log('len',q.length)
// 性能测试
console.time('queue')
for(var i = 0;i<100000;i++){
  q.add(i)
}
for(var i = 0;i<100000;i++){
  q.delete()
}
console.timeEnd('queue')

console.time('arr')
let arr = []
for(var i = 0;i<100000;i++){
  arr.push(i)
}
for(var i = 0;i<100000;i++){
  arr.unshift()
}
console.timeEnd('arr')
```

## 数组

JS 数组未必是真正的数组

如果我们在一个数组中只定义了一种类型的元素，比如：

const arr = [1,2,3,4]  
它是一个纯数字数组，那么对应的确实是连续内存。  
但如果我们定义了不同类型的元素：

const arr = ['haha', 1, {a:1}]  
它对应的就是一段非连续的内存。此时，JS 数组不再具有数组的特征，其底层使用哈希映射分配内存空间，是由对象链表来实现的。

数组实现队列可能有性能问题
