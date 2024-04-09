---
nav: 算法/工具
group:
  title: 排序
  order: 2
toc: content
mobile: false
title: 冒泡排序
---

## 冒泡排序

比较相邻的元素。如果第一个比第二个大，就交换他们两个。  
对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。这步做完后，最后的元素会是最大的数。  
针对所有的元素重复以上的步骤，除了最后一个。  
持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。

```js
function bsort(arr) {
  const l = arr.length;
  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const test = [1, 2, 4, 3, 4, 5];

const a = bsort(test);
console.log('a', a);
```

## 基本冒泡思路的改进

在上面的示例中，我们已经初步分析出了这样一个结论：在冒泡排序的过程中，有一些”动作“是不太必要的。比如数组在已经有序的情况下，为什么还要强行再从头到尾再对数组做一次遍历？

这背后的根本原因是，我们忽略了这样一个事实：随着外层循环的进行，数组尾部的元素会渐渐变得有序——当我们走完第 1 轮循环的时候，最大的元素被排到了数组末尾；走完第 2 轮循环的时候，第 2 大的元素被排到了数组倒数第 2 位；走完第 3 轮循环的时候，第 3 大的元素被排到了数组倒数第 3 位......以此类推，走完第 n 轮循环的时候，数组的后 n 个元素就已经是有序的。

楼上基本冒泡思路的问题在于，没有区别处理这一部分已经有序的元素，而是把它和未排序的部分做了无差别的处理，进而造成了许多不必要的比较。

为了避免这些冗余的比较动作，我们需要规避掉数组中的后 n 个元素，对应的代码可以这样写：

```js
function betterBSort(arr) {
  const l = arr.length;
  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

const test = [1, 2, 4, 3, 4, 5];

const a = betterBSort(test);
console.log('a', a);
```

针对有序条件优化

```js
function betterBSort(arr) {
  const l = arr.length;
  let flag = false;
  for (let i = 0; i < l - 1; i++) {
    for (let j = 0; j < l - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        flag = true;
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
      if (!flag) return arr;
    }
  }
  return arr;
}

const test = [1, 2, 3, 4, 5, 6];

const a = betterBSort(test);
console.log('a', a);
```
