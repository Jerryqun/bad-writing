---
nav: 算法/工具
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 题目
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

## 写一个数组转树的 convert

```js
const arr = [
  {
    id: 1,
    name: '部门A',
    parentId: 0,
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

function Con
```
