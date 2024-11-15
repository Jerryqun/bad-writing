---
nav: Js
group: 进阶
toc: content
title: GC
---

## GC 垃圾回收

GC 工作时应用是停止的  
频繁的过长的 GC 会导致应用假死  
用户使用过程中干到卡顿

<a target="_blank" href="https://juejin.cn/post/7280787122016059426">参考</a>

在说垃圾回收之前，我们首先需要了解的是，什么是垃圾？为什么要进行垃圾回收？

垃圾：  JS 中的函数，变量，对象等都需要占用一定的内存，当这些东西不再被使用的时候，就变成了垃圾

1、已经调用完毕的函数作用域及其内部的值<br/>
2、值为 null 值<br/>
3、无法被访问到的值<br/>

注意：全局变量一般不会回收（关闭页面时回收）；一般情况下局部变量的值，不用了，会被自动回收掉。<br/>

垃圾回收策略：<br/>

### 引用计数

它把对象是否不再需要简化定义为对象有没有其他对象引用到它。如果没有引用指向该对象（引用计数为 0），对象将被垃圾回收机制回收

缺点：<br/>
a、需要一个计数器，所占内存空间大，因为我们也不知道被引用数量的上限。<br/>
b、解决不了循环引用导致的无法回收问题<br/>
在 2012 年以后所有现代浏览器都取消这种算法了，取而代之的是标记清除法。<br/>

```js
let obj1 = { name: 'test' }; // 创建一个对象，被 obj1 所引用，计数为 1
let obj2 = obj1; // obj2 变量是第二个对该对象的引用，计数为 2
obj1 = null; // 该对象的原始引用 obj1 已经没有了，计数为 1
obj2 = null; // 此时对象所有引用都没有了，计数为 0，垃圾回收机制回收该对象
```

```js
function func() {
  let obj1 = {};
  let obj2 = {};
  obj1.a = obj2;
  obj2.a = obj1;
  return 1;
}
```

### 标记清除 （JavaScript 最常用的垃圾收回机制）

2012 年起，所有现代浏览器都使用了标记清除法

标记阶段即为所有活动对象做上标记，清除阶段则把没有标记（也就是非活动对象）销毁。<br/>
缺点<br/>
a、内存碎片化，空闲内存块是不连续的，容易出现很多空闲内存块，还可能会出现分配所需内存过大的对象时找不到合适的块。<br/>
b、分配速度慢，因为即便是使用 First-fit 策略，其操作仍是一个 O(n) 的操作，最坏情况是每次都要遍历到最后，同时因为碎片化，大对象的分配效率会更慢。<br/>

V8 的垃圾回收机制也是基于标记清除算法，不过对其做了一些优化。<br/>

针对新生区采用并行回收。<br/>
针对老生区采用增量标记与惰性回收<br/>

### 分代回收 （v8 所采用的的垃圾回收机制）

分代回收是一种结合了标记清除和引用计数的垃圾回收机制，它会根据对象的生命周期将内存分为不同的代。  
老生代实际上就是上面说到的标记清除算法，这套算法适用于存活时间较长的对象

新生代堆（存活时间比较短）被分为两个相等大小的区域：From 空间和 To 空间

新对象分配到 From 空间  
当 From 空间满时，触发垃圾回收  
从根对象开始，标记所有存活的对象  
将存活的对象复制到 To 空间中  
清除已经死亡的对象  
将 To 空间作为新的 From 空间，并将 From 空间作为新的 To 空间，完成垃圾回收

## v8

64 位操作系统  
内存限制为 1.5 个 g

32 位操作系统  
800 兆

## 什么是内存泄漏

不再用到的内存，没有及时释放，就叫做内存泄漏（memory leak）。  
有些语言（比如 C 语言）必须手动释放内存，程序员负责内存管理。

## 常见内存泄露情况

1. 意外的全局变量

```js
function foo(arg) {
  bar = 'this is a hidden global variable';
}
```

2. 另一种意外的全局变量可能由 this 创建：

```js
function foo() {
  this.variable = 'potential accidental global';
}
// foo 调用自己，this 指向了全局对象（window）
foo();
```

上述使用严格模式，可以避免意外的全局变量

3. 定时器也常会造成内存泄露

   如果 id 为 Node 的元素从 DOM 中移除，该定时器仍会存在，同时，因为回调函数中包含对 someResource 的引用，定时器外面的 someResource 也不会被释放

```js
var someResource = getData();
setInterval(function() {
    var node = document.getElementById('Node');
    if(node) {
        // 处理 node 和 someResource
        node.innerHTML = JSON.stringify(someResource));
    }
}, 1000);
```

4. 包括我们之前所说的闭包，维持函数内局部变量，使其得不到释放

```js
function bindEvent() {
  var obj = document.createElement('XXX');
  var unused = function () {
    console.log(obj, '闭包内引用obj obj不会被释放');
  };
  obj = null; // 解决方法
}
```

5. 没有清理对 DOM 元素的引用同样造成内存泄露

```js
const refA = document.getElementById('refA');
document.body.removeChild(refA); // dom删除了
console.log(refA, 'refA'); // 但是还存在引用能console出整个div 没有被回收
refA = null;
console.log(refA, 'refA'); // 解除引用
```

6. 括使用事件监听 addEventListener 监听的时候，在不监听的情况下使用 removeEventListener 取消对事件监听
