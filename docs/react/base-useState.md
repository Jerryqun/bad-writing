---
nav: React
group: 基础
toc: content
mobile: false
title: useState和setState
---

## setState 和 useState 同步异步问题

1、在正常的 react 的事件流里（合成事件、生命周期函数）
setState 和 useState 是异步执行的（不会立即更新 state 的结果）
多次执行 setState 和 useState，只会调用一次重新渲染 render,
不同的是，setState 会进行 state 的合并，而 useState 则不会。
(有时合并（对象形式 setState({}) => 通过 Object.assign 形式合并对象），有时不合并、而是覆盖（函数形式 setState((prevState,nextState)=>{})）)

2、setTimeout 、原生事件中 setState 和 useState 是同步执行的 react18 之前 之后也是异步的

3、setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，
导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的 callback 拿到更新后的结果。

看是否命中 batchUpdate 机制（判断 isBatchUpdate = true 走异步，没命中走同步）

```js
//开始 处于isBatchUpdate = true
this.setState({});
//结束
isBatchUpdate = false;

//开始 处于isBatchUpdate = true
setTimeout(() => {
  // 此时isBatchUpdate已经等于false，没有被命中
  this.setState({});
}, 200);
//结束
isBatchUpdate = false;
```

4、setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和 setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState 的批量更新策略会对其进行覆盖，取最后一次的执行，
如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。

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

## setState 函数做了哪些事情

1. 合并状态更新（State Merging）  
   当你调用 setState 时，你只需传入需要更新的状态部分而不是整个状态对象。React 会将你传递的状态更新合并到当前的状态中。这意味着你的状态对象中不受影响的部分将保持不变

2. 调度更新（Scheduling Updates）  
   在 setState 被调用后，React 将新的状态更新排入队列，并不是立即更新状态。React 可以决定何时执行实际更新，使得多个 setState 调用可以被批量处理，提高性能。

3. 异步更新（Asynchronous Updates）  
   由于 setState 是异步执行的，React 可以延迟状态更新，等到合适的时机将多个更新一次性进行。因此，你不能依赖于 setState 调用后立即反映在 this.state 上的更改。

4. 触发渲染流程（Triggering Re-renders）  
   更新状态后，React 会在适当的时间重新计算组件输出。这包括在 render 方法中调用表达式，并对比新旧虚拟 DOM（Virtual DOM）来确定是否需要对真实 DOM（Real DOM）进行实际的更改。

5. 可选的回调函数  
   setState 方法可以接受一个回调函数作为第二个参数。这个回调函数会在状态更新和组件重绘之后被执行。因为 setState 是异步的，所以如果你需要在状态更新完成后执行代码，你可以使用这个回调函数。
