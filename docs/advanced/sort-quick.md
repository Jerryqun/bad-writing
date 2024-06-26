---
nav: 高阶技术
group:
  title: 排序
  order: 2
toc: content
mobile: false
title: 快速排序
---

## 快速排序

<a target="_blank" href="https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html">参考</a>  
在数据集之中，选择一个元素作为"基准"（pivot）  
所有小于"基准"的元素，都移到"基准"的左边；所有大于"基准"的元素，都移到"基准"的右边  
对"基准"左边和右边的两个子集，不断重复第一步和第二步，直到所有子集只剩下一个元素为止

```js
const quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const axisIndex = Math.floor(arr.length / 2);
  const axis = arr.splice(axisIndex, 1)[0];
  const left = [];
  const right = [];
  arr.forEach((item) => {
    if (item > axis) {
      right.push(item);
    } else {
      left.push(item);
    }
  });

  return quicksort(left).concat([axis], quicksort(right));
};

const result = quicksort([85, 24, 63, 45, 17, 31, 96, 50]);
console.log('result', result);
```
