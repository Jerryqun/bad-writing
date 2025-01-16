---
nav: Js
toc: content
group: 基础概念
mobile: false
title: 强引用与弱引用
---

## 强引用与弱引用

### 一、强引用

在讲弱引用之前，我们先来说下强引用。强引用就是将对象保留在内存中的引用。例如：

```js
let cat = { name: 'Kitty' };
const pets = [cat];

cat = null;
console.log(pets); // [{ name: "Kitty" }]
```

通过将变量 cat 创建为对象，并把这个对象放入一个数组 pets 中，然后通过将它的值设置为 null 来删除其对原始对象的引用。

尽管我们再也无法访问 cat 变量，但由于在 pets 数组和这个对象之间存在强引用关系，因此这个对象其实仍保留在内存中，并且可以通过 pets[0] 访问到它。 换句话说，强引用可以防止垃圾回收从内存中删除对象。

### 二、弱引用

简单地说，弱引用是对对象的引用，如果它还是对内存中对象的唯一引用，就能顺利地进行垃圾回收。相反，一般强引用都会防止垃圾回收。可能还有些不太理解，让我们先来看个例子，我们将试着把刚才的代码中的强引用转换为弱引用。我们暂时先不展开讲 WeakMap ，这将在后面详细讨论，先就这个例子我们来观察下弱引用的行为。

```js
let pets = new WeakMap();
let cat = { name: 'Kitty' };
pets.set(cat, 'Kitty');
console.log(pets); // WeakMap {{…} => 'Kitty'}
cat = null;
```

// 等待垃圾回收后
console.log(pets); // WeakMap{}
通过利用 WeakMap 及其附带的弱引用，我们可以看到两种类型的引用之间的差异。虽然对原始 cat 对象的强引用仍然存在，但 cat 对象仍然存在于 WeakMap 中，我们可以毫无问题地访问它。

但是，当我们通过将 cat 变量重新赋值 null 来覆盖对原始 cat 对象的引用时，由于内存中对原始对象的唯一引用是来自我们创建的 WeakMap 的弱引用，所以它不会阻止垃圾回收的发生。这意味着当 JavaScript 引擎再次运行垃圾回收过程时，cat 对象将从内存和我们分配给它的 WeakMap 中删除。

因此这里的关键区就别在于，`强引用可以防止对象进行垃圾回收，而弱引用则不会`。

默认情况下，JavaScript 对其所有引用使用强引用，`使用弱引用的唯一方法是使用 WeakMap 或 WeakSet`。
