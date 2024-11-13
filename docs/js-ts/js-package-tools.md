---
nav: Node
group: 常用包
toc: content
mobile: false
title: tools
---

## tools

```js
// 判断是否是数字类型
function isNumber(params) {
  return typeof params === 'number' && !isNaN(params);
}

// 判断是否是数字类型
function isObject(params) {
  return Object(params) === params;
}
```
