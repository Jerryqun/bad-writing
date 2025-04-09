---
nav: 高阶技术
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 算法题
---

## “有效括号”问题

题目描述：给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
有效字符串需满足： 左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

示例 1:
输入: "()"
输出: true

示例 2:
输入: "()[]{}"
输出: true

示例 3:
输入: "(]"
输出: false

示例 4:
输入: "([)]"
输出: false
示例 5:
输入: "{[]}"
输出: true

```js
const map = {
  '(': ')',
  '[': ']',
  '{': '}',
};

const isValid = (str) => {
  if (!str) {
    return true;
  }
  const stack = [];
  const arr = str.split('');
  for (const item of arr) {
    if (['(', '[', '{'].includes(item)) {
      stack.push(map[item]);
    } else if (!stack.length || stack.pop() !== item) {
      return false;
    }
  }
  return !stack.length;
};

const a = isValid('()[]{}');
console.log('a', a); // true
```

## 两数求和问题

真题描述： 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。

示例: 给定 nums = [2, 7, 11, 15], target = 9
因为 nums[0] + nums[1] = 2 + 7 = 9 所以返回 [0, 1]

```js
const nums = [2, 7, 11, 15],
  target = 9;
const twoSum = (nums, target) => {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map[target - nums[i]] !== undefined) {
      return [map[target - nums[i]], i];
    }
    map[nums[i]] = i;
  }
};

twoSum(nums, target);
```

## 强大的双指针法

双指针法用在涉及求和、比大小类的数组题目里时，大前提往往是：该数组必须有序。否则双指针根本无法帮助我们缩小定位的范围，压根没有意义

### 题 1

真题描述：给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
说明: 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。

示例: 输入:  
nums1 = [1,2,3,0,0,0], m = 3  
nums2 = [2,5,6], n = 3  
输出: [1,2,2,3,5,6]

```js
const sort = (num1, num2) => {
  const m = num1.length,
    n = num2.length;
  const k = n + m - 1;
  let i = m - 1,
    j = n - 1;
  while (i >= 0 && j >= 0) {
    if (num1[i] >= num2[j]) {
      num1[k] = num1[i];
      i--;
      k--;
    } else {
      num1[k] = num2[j];
      j--;
      k--;
    }
  }
  // nums2 留下的情况，特殊处理一下
  while (j >= 0) {
    nums1[k] = nums2[j];
    k--;
    j--;
  }

  return num1;
};
```

### 题 2 三数求和问题

真题描述：给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
注意：答案中不可以包含重复的三元组。

示例： 给定数组 nums = [-1, 0, 1, 2, -1, -4]， 满足要求的三元组集合为： [ [-1, 0, 1], [-1, -1, 2] ]

```js
const sumNum = (nums) => {
  const res = [];
  nums = nums.sort((a, b) => a - b);
  const len = nums.length;

  for (let i = 0; i < len - 2; i++) {
    let left = i + 1;
    let right = len - 1;
    // 如果遇到重复的数字，则跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
        // 处理左指针元素重复的情况
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      } else if (nums[i] + nums[left] + nums[right] > 0) {
        right--;
        // 处理左指针元素重复的情况
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
      } else {
        res.push([nums[i], nums[left], nums[right]]);
        left++;
        right--;
        // 处理左指针元素重复的情况
        while (left < right && nums[right] === nums[right + 1]) {
          right--;
        }
        // 处理左指针元素重复的情况
        while (left < right && nums[left] === nums[left - 1]) {
          left++;
        }
      }
    }
  }

  return res;
};
const test = sumNum([-1, 0, 1, 2, -1, -4]);
console.log('test: ', test);
```

## 0-1 背包问题

0-1 背包问题是一种组合优化问题，它的目标是选择一组物品放入背包中，使得背包中物品的总价值最大化，同时不超过背包的重量限制。在 0-1 背包问题中，每个物品要么整个被取走（即选中），要么留下（即不选），因此得名 0-1 背包问题。

该问题可以使用动态规划来解决。下面以 JavaScript 代码举例说明解题过程。

首先，我们定义 values 数组和 weights 数组，分别表示每个物品的价值和重量，以及背包的容量 W。然后我们创建一个二维数组 dp，其中 dp[i][w]代表当背包容量为 w 时，考虑前 i 个物品能够得到的最大价值。

```js
function knapsack(values, weights, W) {
  const n = values.length; // 物品的数量
  let dp = Array.from({ length: n + 1 }, () => Array(W + 1).fill(0)); // 生成 DP 表

  // 填充 DP 表
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w], // 不选择当前物品
          dp[i - 1][w - weights[i - 1]] + values[i - 1], // 选择当前物品
        );
      } else {
        dp[i][w] = dp[i - 1][w]; // 如果当前物品重量大于背包容量，不能选择
      }
    }
  }

  // dp[n][W] 包含最大价值
  return dp[n][W];
}

// 测试数据
const values = [60, 100, 120]; // 物品的价值
const weights = [10, 20, 30]; // 物品的重量
const W = 50; // 背包的容量

console.log(knapsack(values, weights, W)); // 应该输出最大价值
```

在这个 knapsack 函数中，我们遍历所有物品（外层循环）和所有可能的容量（内层循环）。对于每个物品和容量的组合，我们做出选择：如果该物品可以被放入背包（即它的重量不超过当前考虑的背包容量 w），我们将尝试放入此物品，更新当前的最大价值为 dp[i][w]。选择是基于不放入当前物品的最大价值（即 dp[i-1][w]，代表不考虑当前物品）和放入当前物品的最大价值（dp[i-1]w-weights[i-1]] + values[i-1]，即之前的最大价值加上当前物品的价值）中的较大值。

这个过程会一直进行，直到我们计算出所有物品和背包容量的组合。在 dp 表的最后一个元素 dp[n][W]中存储的将是最大的价值，这也是函数返回的结果。

## 不定长二维数组的全排列

比如 [['A','B'], ['a','b'], [1, 2]]，输出 ['Aa1','Aa2','Ab1','Ab2','Ba1','Ba2','Bb1','Bb2']

```js
/**
 * 动态规划，下一次的结果，依赖上一次的结果
 * @param {array} arr
 */
function permutate(arr) {
  // 第一次的结果就是二维数组的第0项
  let res = arr[0].slice();

  for (let i = 1; i < arr.length; i++) {
    const pre = res.slice();
    res = [];
    pre.forEach((item) => {
      arr[i].forEach((curr) => {
        res.push(item + curr);
      });
    });
  }
  console.log(res);
  return res;
}
```

## 写一个数组转树的 convert

方法一：递归

```js
const arr = [
  {
    id: 1,
    name: '部门A',
    parentId: null,
  },
  {
    id: 2,
    name: '部门B',
    parentId: 1,
  },
  {
    id: 3,
    name: '部门C',
    parentId: 1,
  },
  {
    id: 4,
    name: '部门D',
    parentId: 2,
  },
  {
    id: 5,
    name: '部门E',
    parentId: 2,
  },
  {
    id: 6,
    name: '部门F',
    parentId: 3,
  },
];

const convert = (arr, parentId = null) => {
  return arr
    .filter((item) => item.parentId === parentId)
    .map((d) => {
      return {
        ...d,
        children: convert(arr, d.id),
      };
    });
};

console.log('arr', convert(arr));
```

方法二：循环

```js
const arr = [
    {
        id: 1,
        name: '部门A',
        parentId: null,
    },
    {
        id: 2,
        name: '部门B',
        parentId: 1,
    },
    {
        id: 3,
        name: '部门C',
        parentId: 1,
    },
    {
        id: 4,
        name: '部门D',
        parentId: 2,
    },
    {
        id: 5,
        name: '部门E',
        parentId: 2,
    },
    {
        id: 6,
        name: '部门F',
        parentId: 3,
    },
];

interface ITreeNode {
    id: number,
    name: string,
    parentId: number | null,
    children?: ITreeNode[]
}

const convert = (arr: ITreeNode[]): ITreeNode | null => {
    let root = null
    let nodes = new Map<number,ITreeNode>()
    arr.forEach(item => {
        const { id, name, parentId } = item
        const itemNode = { id, name,parentId }
        nodes.set(id, itemNode)

        let parentNode = nodes.get(parentId  as number)
        console.log('parentNode', parentNode)
        if (parentNode) {
            if (!parentNode.children) {
                parentNode.children = []
                parentNode.children.push(itemNode)
            } else {
                parentNode.children.push(itemNode)
            }
        }
        if (parentId === null) root = itemNode

    })
    return root
};

console.log('arr', convert(arr));
```

## 写一个树转数组 convert

```js
const tree = {
    "id": 1,
    "name": "部门A",
    "parentId": null,
    "children": [
        {
            "id": 2,
            "name": "部门B",
            "parentId": 1,
            "children": [
                {
                    "id": 4,
                    "name": "部门D",
                    "parentId": 2
                },
                {
                    "id": 5,
                    "name": "部门E",
                    "parentId": 2
                }
            ]
        },
        {
            "id": 3,
            "name": "部门C",
            "parentId": 1,
            "children": [
                {
                    "id": 6,
                    "name": "部门F",
                    "parentId": 3
                }
            ]
        }
    ]
}

interface ITreeNode {
    id: number,
    name: string,
    parentId: number | null,
    children?: ITreeNode[]
}

const convert = (tree: ITreeNode): ITreeNode[] => {
    let arr: ITreeNode[] = [];
    // 存储父节点
    const mapT = new Map<ITreeNode, ITreeNode>()

    let queue = []
    queue.unshift(tree)
    while (queue.length > 0) {
        let curNode = queue.pop()
        if (curNode == null) break;

        const { id, name, children = [] } = curNode;
        const parentNode = mapT.get(curNode)
        const parentId = parentNode?.id || null
        arr.push({
            parentId, id, name
        })
        // 子节点入队
        children.forEach(child => {
            mapT.set(child, curNode)
            queue.unshift(child)
        })
    }
    return arr
};

console.log('arr', convert(tree));
```

## 两个字符串对比, 得出结论都做了什么操作, 比如插入或者删除

功能说明
初始化 DP 表:

创建一个二维数组 dp，用来记录从 str1 中的前缀变换到 str2 中的前缀所需的操作数。
边界初始化：dp[i][0] 表示从 str1 的前 i 个字符转化到空字符串（只需进行 i 次删除），dp[0][j] 表示从空字符串转化到 str2 的前 j 个字符（只需进行 j 次插入）。
动态规划填充表:

如果两个字符相同，则承袭上一个状态的值。
如果不同，则选择三种操作中的最小值：删除、插入或替换。
回溯查找操作:

从 DP 表的右下角开始回溯，逐步判断做出了哪些操作，并记录在 operations 数组中。
输出结果:

返回编辑距离和操作步骤。我们最终将操作顺序反转，以便按照从开始到结束的顺序输出。

```js
function computeEditDistance(str1, str2) {
  const m = str1.length;
  const n = str2.length;

  // 创建一个二维数组来记录编辑距离
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // 初始化边界条件
  for (let i = 0; i <= m; i++) {
    dp[i][0] = i; // 删除操作
  }
  for (let j = 0; j <= n; j++) {
    dp[0][j] = j; // 插入操作
  }

  // 填充 DP 表
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // 字符相同，不需要额外操作
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // 删除
          dp[i][j - 1] + 1, // 插入
          dp[i - 1][j - 1] + 1, // 替换
        );
      }
    }
  }

  // 回溯找到操作路径
  let i = m,
    j = n;
  const operations = [];

  while (i > 0 || j > 0) {
    if (i === 0) {
      operations.push(`插入 "${str2[j - 1]}"`);
      j--;
    } else if (j === 0) {
      operations.push(`删除 "${str1[i - 1]}"`);
      i--;
    } else if (str1[i - 1] === str2[j - 1]) {
      i--;
      j--;
    } else {
      const minOp = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      if (minOp === dp[i - 1][j]) {
        operations.push(`删除 "${str1[i - 1]}"`);
        i--;
      } else if (minOp === dp[i][j - 1]) {
        operations.push(`插入 "${str2[j - 1]}"`);
        j--;
      } else {
        operations.push(`替换 "${str1[i - 1]}" 为 "${str2[j - 1]}"`);
        i--;
        j--;
      }
    }
  }

  // 编辑距离
  const editDistance = dp[m][n];

  return {
    editDistance,
    operations: operations.reverse(), // 反转操作顺序
  };
}

// 示例
const str1 = 'kitten';
const str2 = 'sitting';
const result = computeEditDistance(str1, str2);

console.log('编辑距离:', result.editDistance);
console.log('操作:', result.operations);
```

给定两个单词 word1 和 word2 ，返回使得 word1 和 word2 相同所需的最小步数。  
每步 可以删除任意一个字符串中的一个字符。  
示例 1：

输入: word1 = "sea", word2 = "eat" 输出: 2 解释: 第一步将 "sea" 变为 "ea" ，第二步将 "eat "变为 "ea"

示例 2:

输入： word1 = "leetcode", word2 = "etco" 输出： 4

提示：

1 <= word1.length, word2.length <= 500
word1 和 word2 只包含小写英文字母

```js
/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  let len1 = word1.length,
    len2 = word2.length;

  let dp = Array(len1 + 1)
    .fill()
    .map(() => Array(len2 + 1).fill(Infinity));

  for (let i = 0; i <= len1; i++) {
    dp[i][0] = i;
  }

  for (let j = 0; j <= len2; j++) {
    dp[0][j] = j;
  }

  for (let i = 1; i <= len1; i++) {
    for (let j = 1; j <= len2; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1,
          dp[i][j - 1] + 1,
          dp[i - 1][j - 1] + 2,
        );
      }
    }
  }

  return dp[len1][len2];
};
```

## 写一个递归 找出数组的维度

```js
function getArrayDepth(arr) {
  if (!Array.isArray(arr)) return 0;
  let depth = 1;
  arr.forEach((item) => {
    let currentDept = getArrayDepth(item);
    depth = Math.max(depth, currentDept + 1);
  });
  return depth;
}
```
