---
nav: React
group: 基础
toc: content
mobile: false
title: forceUpdate
---

## forceUpdate

在 React 中，forceUpdate 是一个组件实例上的方法，它会使组件跳过 shouldComponentUpdate 的检查，强制让组件进行重新渲染。通常来说，React 的数据流是单向和声明式的，因此你应该通过改变组件的 state 或 props 来触发重新渲染，而避免使用 forceUpdate，因为它可能会导致不可预测的行为和性能问题。

然而，在一些极少数的情况下，如果你的组件依赖于非 React 的状态或者你需要从某些回调中触发重新渲染时，可能会用到 forceUpdate。下面是一个简单的例子：

```js
class MyComponent extends React.Component {
  // ...

  someMethod() {
    // 当你在某些情况下需要强制组件重新渲染时调用
    this.forceUpdate();
  }

  render() {
    // ...
  }
}
```

在函数式组件中，没有相应的 forceUpdate 方法，因为函数式组件没有实例。但是，你可以通过使用 useState 钩子（hook）来模拟这个行为：

```js

import React, { useState } from 'react';

function MyFunctionalComponent() {
  const [_, forceUpdate] = useState(0);

  const updateComponent = () => {
    forceUpdate(n => n + 1); // 改变state的值来强制重新渲染
  };

  return (
    // ...
  );
}


```
