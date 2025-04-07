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

## 数组 length 属性

1. 设置数组的 length 值为小于当前值的非负整数 n，则任何索引大于或等于 n 的数组元素都会从数组中被删除
2. 如果给一个索引为 i​ 的数组元素赋值，而 i 大于或等于数组当前的 length，则数组的 length 属性会被设 置为 i+1​
3. 对数组元素使用 delete 操作符不会修改 length 属性，使用 splice()​ 会
4. 如果省略数组字面量中的一个值，被省略的元素是不存在的，但它的索引是存在的
