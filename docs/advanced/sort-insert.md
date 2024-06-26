---
nav: 高阶技术
group:
  title: 排序
  order: 2
toc: content
mobile: false
title: 插入排序
---

## 插入排序

从第一个元素开始，该元素可以认为已经被排序；  
取出下一个元素，在已经排序的元素序列中从后向前扫描；  
如果该元素（已排序）大于新元素，将该元素移到下一位置；  
重复步骤 3，直到找到已排序的元素小于或者等于新元素的位置；  
将新元素插入到该位置后；  
重复步骤 2 ~ 5。

最好时间复杂度：它对应的数组本身就有序这种情况。此时内层循环只走一次，整体复杂度取决于外层循环，时间复杂度就是一层循环对应的 O(n)。  
最坏时间复杂度：它对应的是数组完全逆序这种情况。此时内层循环每次都要移动有序序列里的所有元素，因此时间复杂度对应的就是两层循环的 O(n^2)  
平均时间复杂度：O(n^2)

```js
var arr = [
  10, 44, 82, 50, 70, 74, 29, 1, 40, 36, 58, 21, 56, 44, 43, 61, 222, 48,
];

const insertSort = (arr) => {
  for (var i = 0; i < arr.length; i++) {
    let n = i;
    while (arr[n] > arr[n + 1] && n >= 0) {
      [arr[n], arr[n + 1]] = [arr[n + 1], arr[n]];
      n--;
    }
  }
  return arr;
};

const test = insertSort(arr);
console.log('test', test);
```
