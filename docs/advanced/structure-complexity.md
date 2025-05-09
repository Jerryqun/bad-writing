---
nav: Js
group:
  title: 数据结构
  order: 2
toc: content
mobile: false
title: 复杂度
---

## 算法的时间和空间复杂度

前端复杂度方面重时间复杂度轻空间复杂度

<a target="_blank" href='https://juejin.cn/post/7156405905901387806'>参考</a>

### 时间复杂度

下面 1-5 是从好到坏排序

`unshift、shift 非常慢，因为数组是有序的内存空间`

一个算法所花费的时间与其中语句的执行次数成正比例，算法中的基本操作的`执行次数`，为算法的时间复杂度

1、常数阶 O(1)  
无论代码执行了多少行，只要是没有循环等复杂结构，那这个代码的时间复杂度就都是 O(1)

2、线性阶 O(n)  
for 循环里面的代码会执行 n 遍，因此它消耗的时间是随着 n 的变化而变化的，因此这类代码都可以用 O(n)来表示它的时间复杂度。

```js
for (i = 1; i <= n; ++i) {
  j = i;
  j++;
}
```

3、对数阶 O(logN) `二分思想`

```js

int i = 1;
while(i<n)
{
    i = i * 2;
}
```

从上面代码可以看到，在 while 循环里面，每次都将 i 乘以 2，乘完之后，i 距离 n 就越来越近了。我们试着求解一下，假设循环 x 次之后，i 就大于 2 了，此时这个循环就退出了，也就是说 2 的 x 次方等于 n，那么 x = log2^n
也就是说当循环 log2^n 次以后，这个代码就结束了。因此这个代码的时间复杂度为：O(logn)

4、线性对数阶 O(nlogN) `n * logN 数据量乘以数据量的对数（for循环里面掐套二分）`

线性对数阶 O(nlogN) 其实非常容易理解，将时间复杂度为 O(logn)的代码循环 N 遍的话，那么它的时间复杂度就是 O(logN)，也就是了 O(nlogN)

5、平方阶 O(n²) `嵌套循环`

```js
for (x = 1; i <= n; x++) {
  for (i = 1; i <= n; i++) {
    j = i;
    j++;
  }
}
```

```js
for (m = 1; m < n; m++) {
  i = 1;
  while (i < n) {
    i = i * 2;
  }
}
```

### 空间复杂度

1、空间复杂度 O(1)  
如果算法执行所需要的临时空间不随着某个变量 n 的大小而变化，即此算法空间复杂度为一个常量，可表示为 O(1)

```js

int i = 1;
int j = 2;
++i;
j++;
int m = i + j;
```

代码中的 i、j、m 所分配的空间都不随着处理数据量变化，因此它的空间复杂度 S(n) = O(1)

2、空间复杂度 O(n)

```js
int[] m = new int[n]
for(i=1; i<=n; ++i) {
  j = i;
  j++;
}
```

这段代码中，第一行 new 了一个数组出来，这个数据占用的大小为 n，这段代码的 2-6 行，虽然有循环，但没有再分配新的空间，因此，这段代码的空间复杂度主要看第一行即可，即 S(n) = O(n)

我们假设数组的长度是 n，那么因增加/删除操作导致需要移动的元素数量，就会随着数组长度 n 的增大而增大，呈一个线性关系。所以说数组增加/删除操作对应的复杂度就是 O(n)。
