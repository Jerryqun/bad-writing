---
nav: Js
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

## 二叉树（查询快、增删快）

- 它可以没有根结点，作为一棵空树存在
- `如果它不是空树，那么必须由根结点、左子树和右子树组成，且左右子树都是二叉树`

### 二叉树先序遍历、中序遍历和后序遍历

先序遍历 ： 根结点 -> 左子树 -> 右子树
中序遍历 ： 左子树 -> 根结点 -> 右子树
后序遍历 ： 左子树 -> 右子树 -> 根结点

### 二叉树先序遍历

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

### 二叉树中序遍历

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

const centerOrder = (root) => {
  if (!root) return;
  centerOrder(root.left);
  console.log(root.val);
  centerOrder(root.right);
};
```

### 二叉树后序遍历

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

## 二叉搜索树（BST）

如果 BST 不平衡 ，那又变成链表了  
如果是 BBST(平衡儿茶搜索树)， 时间复杂度中 O(logn) 就是等于树的高度

1. 是二叉树
2. 左边的节点比根节点小或等于
3. 右边的节点比根节点大或等于
4. 可以用二分查找
5. BST 中中序遍历从小到大排列

寻找 BST 中的第 k 小值 (利用第 5 点)

```js
function getKthValue(root, k) {
  const centerOrder = (root, res = []) => {
    if (!root) return;
    centerOrder(root.left, res);
    res.push(root.val);
    centerOrder(root.right, res);
    return res;
  };
  return centerOrder(root)[k - 1] || null;
}

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
const a = getKthValue(root, 2);
console.log('a---', a);
```

## BFS 广度优先搜索

```js
// 与队列相关  先进先出
function BFS(入口坐标) {
    const queue = [] // 初始化队列queue
    // 入口坐标首先入队
    queue.push(入口坐标)
    // 队列不为空，说明没有遍历完全
    while(queue.length) {
        const top = queue[0] // 取出队头元素

        访问 top // 此处是一些和 top 相关的逻辑，比如记录它对应的信息、检查它的属性等等

        // 注意这里也可以不用 for 循环，视题意而定
        for(检查 top 元素出发能够遍历到的所有元素)  {
            queue.push(top能够直接抵达的元素)
        }

        queue.shift() // 访问完毕。将队头元素出队
    }
}


const tree = {
  value: "A",
  children: [
    {
      value: "B",
      children: [
        { value: "D", children: [] },
        { value: "E", children: [] },
      ]
    },
    {
      value: "C",
      children: [
        { value: "F", children: [] },
        { value: "G", children: [] },
      ]
    }
  ]
};

function bfs(tree) {
  const queue = [tree]; // BFS使用队列数据结构，初始时包含树的根节点

  while (queue.length > 0) {
    const currentNode = queue.shift(); // 从队列中移除并返回第一个节点
    console.log(currentNode.value); // 访问当前节点的值

    // 将当前节点的所有子节点加入队列末尾
    for (const child of currentNode.children) {
      queue.push(child);
    }
  }
}

// 执行广度优先搜索
bfs(tree);


```
