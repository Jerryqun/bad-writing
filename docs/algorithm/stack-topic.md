---
nav: 算法/工具
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 题目
---

## “效括号”问题

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
