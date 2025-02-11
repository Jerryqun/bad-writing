---
nav: Js
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 链表
---

## 链表

数组需要一段连续的内存空间 ，而链表是零散的  
`链表、数组、map是有序结构`  
`对象、set是无序结构`  
对象和 map 的核心区别是是否有序  
数组和 set 的核心区别是是否有序

链表结构

```json
{
    // 数据域
    val: 1,
    // 指针域，指向下一个结点
    next: {
        val:2,
        next: ...
    }
}
```

链表结点的创建

```js
function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(1);
node.next = new ListNode(2);
```

链表结点中间插入节点

现有 节点 1 和节点 2  
需要在节点 1 和 2 之前插入节点 3

```js
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;

// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3);
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next;
// 把node1的 next 指针指向 node3
node1.next = node3;
```

删除节点

```js
function ListNode(val) {
  this.val = val;
  this.next = null;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;

// 如果目标结点本来不存在，那么记得手动创建
const node3 = new ListNode(3);
// 把node3的 next 指针指向 node2（即 node1.next）
node3.next = node1.next;
// 把node1的 next 指针指向 node3
node1.next = node3;

// 删除逻辑开始
node1.next = node3.next;
```

## 依据数组创建单项列表

```js
type ListNode = {
  value: number,
  next?: ListNode,
};

const createLinkList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) {
    return null;
  }
  let cur: ListNode = {
    value: arr[arr.length - 1],
  };
  if (arr.length === 1) {
    return cur;
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    cur = {
      value: arr[i],
      next: cur,
    };
  }
  return cur;
};

console.log('---', createLinkList([1, 2, 3, 4]));
```

## 反转链表

```js
// 反转链表的函数
type LinkListNode = {
  value: number,
  next?: LinkListNode,
};

const createLinkList = (arr: number[]): LinkListNode | undefined => {
  if (arr.length === 0) {
    return undefined;
  }
  let cur: LinkListNode = {
    value: arr[arr.length - 1],
  };
  if (arr.length === 1) {
    return cur;
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    cur = {
      value: arr[i],
      next: cur,
    };
  }
  return cur;
};
const tree = createLinkList([1, 2, 3, 4]);
function reverseLinkedList(head: LinkListNode | undefined) {
  let previous = undefined; // 上一个节点
  let current = head; //当前节点

  while (current) {
    let next = current.next; // 保存下一个节点
    current.next = previous; // 反转当前节点的指针
    previous = current; // 移动前驱指针
    current = next; // 移动到下一个节点
  }
  return previous; // 返回新的头节点
}
console.log('reverseLinkedList', reverseLinkedList(tree));
```
