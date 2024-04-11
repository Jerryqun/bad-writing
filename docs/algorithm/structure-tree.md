---
nav: 算法/工具
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 树
---

## 树

- 树的层次计算规则：根结点所在的那一层记为第一层，其子结点所在的就是第二层，以此类推。
- 结点和树的“高度”计算规则：叶子结点高度记为 1，每向上一层高度就加 1，逐层向上累加至目标结点时，所得到的的值就是目标结点的高度。树中结点的最大高度，称为“树的高度”。
- “度”的概念：一个结点开叉出去多少个子树，被记为结点的“度”。
- “叶子结点”：叶子结点就是度为 0 的结点。

## 二叉树

- 它可以没有根结点，作为一棵空树存在
- 如果它不是空树，那么必须由根结点、左子树和右子树组成，且左右子树都是二叉树

### 先序遍历、中序遍历和后序遍历

先序遍历 ： 根结点 -> 左子树 -> 右子树
中序遍历 ： 左子树 -> 根结点 -> 右子树
后序遍历 ： 左子树 -> 右子树 -> 根结点

### 先序遍历

```js
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};

const preOrder = (root) => {
  if (!root) return;
  console.log(root.val);
  preOrder(root.left);
  preOrder(root.right);
};
```

### 中序遍历

```js
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};

const preOrder = (root) => {
  if (!root) return;
  preOrder(root.left);
  console.log(root.val);
  preOrder(root.right);
};
```

### 后序遍历

```js
const root = {
  val: 'A',
  left: {
    val: 'B',
    left: {
      val: 'D',
    },
    right: {
      val: 'E',
    },
  },
  right: {
    val: 'C',
    right: {
      val: 'F',
    },
  },
};

const preOrder = (root) => {
  if (!root) return;
  preOrder(root.left);
  preOrder(root.right);
  console.log(root.val);
};
```
