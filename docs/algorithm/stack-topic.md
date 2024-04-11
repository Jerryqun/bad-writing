---
nav: 算法/工具
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 题目
---

## 题目

### “效括号”问题

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
