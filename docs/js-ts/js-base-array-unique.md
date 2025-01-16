---
nav: Js
group: 基础概念
toc: content
title: 数组去重
---

## 数组去重

<a target="_blank" href="https://segmentfault.com/a/1190000016418021"></a>

```js
var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];

//使用es6 filter + hasOwnProperty
const unique = (arr) => {
  const container = {};
  return arr.filter((d) =>
    container.hasOwnProperty(d) ? false : (container[d] = true),
  );
};

// includes

const unique = (arr) => {
  return arr.filter((d) => (arr.includes(d) ? false : true));
};

// es6 Set 结构

const unique = (arr) => [...new Set(arr)];
console.log(unique(arr));

// es5 双层循环
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

// 利用 indexOf 去重 或者includes

const unique = (arr) => {
  if (!Array.isArray(arr)) {
    console.warn('不是数组');
    return [];
  }
  let res = [];
  for (let i = 0; i < arr.length; j++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};

// reduce
const unique = (arr) => {
  return arr.reduce((prev, cur) => {
    return prev.includes(cur) ? prev : [...prev, cur];
  }, []);
};
```
