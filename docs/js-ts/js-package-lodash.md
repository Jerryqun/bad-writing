---
nav: Js
group: 常用包
toc: content
title: lodash
---

## lodash

为了tree shaking ，推荐使用lodash-es

<a target="_blank" href="https://www.lodashjs.com/">官网</a>

```js
// 在线测试;
function addScript(url = 'https://code.jquery.com/jquery-3.5.1.min.js') {
  const script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
addScript('https://g.alicdn.com/code/lib/lodash.js/4.17.21/lodash.min.js');

// 一、_.chunk(array, [size=1])
// 将数组（array）拆分成多个 size 长度的区块，并将这些区块组成一个新数组。 如果array 无法被分割成全部等长的区块，那么最后剩余的元素将组成一个区块。
// 创建一个元素数组，该数组被分成大小长度的组。如果数组不能被平均分割，最后的块将是剩余的元素。

_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]

// 二、_.groupBy(collection, [iteratee=_.identity])
_.groupBy(
  [
    { name: 'cq', age: 18 },
    { name: 'cq', age: 19 },
    { name: 'cq', age: 20 },
    { name: 'lzy', age: 18 },
  ],
  'name',
);
// => {
//     cq: [{name: "cq", age: 18}, {name: "cq", age: 19}, {name: "cq", age: 20}]
//     lzy:[ {name: "lzy", age: 18}]
// }
```
