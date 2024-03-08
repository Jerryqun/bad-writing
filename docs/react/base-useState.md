---
nav: React
group: 基础
toc: content
mobile: false
title: useState和setState
---

## useState 缓存计算结果

```jsx
import { Button } from 'antd';
export default () => {
  const [s, setS] = React.useState(Math.random());
  console.log('s', s);
  // 这样初始值就只会被计算一次了
  const [state, useState] = React.useState(() => {
    console.log('开始执行'); // 点击刷新按钮后此处不会执行
    return '只要执行一次的初始值';
  });
  return (
    <div>
      <Button
        onClick={() => {
          setS(Math.random());
        }}
      >
        刷新
      </Button>
      <Button>{state}</Button>
    </div>
  );
};
```

## 类组件中的 setState 和函数组件中的 useState 有什么异同

一、相同点：

首先从原理角度出发，setState 和 useState 更新视图，底层都调用了 scheduleUpdateOnFiber 方法，
而且事件驱动情况下都有批量更新规则。

二、 不同点

1、在不是 pureComponent 组件模式下， setState 不会浅比较两次 state 的值，只要调用 setState，在没有其他优化手段的前提下，就会执行更新。  
但是 useState 中的 dispatchAction 会默认比较两次 state 是否相同，然后决定是否更新组件。

2、setState 有专门监听 state 变化的回调函数 callback，可以获取最新 state；但是在函数组件中，只能通过 useEffect 来执行 state 变化引起的副作用。

3、setState 在底层处理逻辑上主要是和老 state 进行合并处理，而 useState 更倾向于重新赋值。
