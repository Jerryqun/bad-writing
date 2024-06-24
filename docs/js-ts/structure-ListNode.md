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
