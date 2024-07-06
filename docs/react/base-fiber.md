---
nav: React
group: 基础
toc: content
mobile: false
title: Fiber
---

## Fiber 的概念

<a target="_blank" href="https://juejin.cn/post/7063321486135656479">参考</a>

- 1、React16 启用了全新的架构，叫做 Fiber 不直接渲染 vdom，而是先转成 fiber , 也就是 vdom 树结构 => fiber 链表结构
- 2、链表结构可打断
- 3、16.8 后基于 fiber 推出 hooks
- 4、React 16 之前通过 React.creatElement 生成虚拟 dom 然后递归虚拟 dom 树生成真实的 dom(React.render)
- jsx -> render function（React.createElement） -> vdom （React 16 之前的架构）
- jsx -> render function（React.createElement） -> vdom -> fiber（React 16 之后的架构）

## fiber 的三大过程

schedule、reconcile、commit

- reconcile： vdom => fiberl （并且还会准备好要用的 dom 节点、确定好是增、删、还是改，通过 schdule 的调度，最终把整个 vdom 树转成了 fiber 链表）

- schedule： 空闲调度 (调度这 fiber 节点执行 reconcile,react 实现了类似 requestIdleCallback 的调度机制)

  对于大部分浏览器来说，每 1s 会有 60 帧，所以每一帧差不多是 16.6 ms，如果 Reconciliation 的 Render 阶段的更新时间过长，挤占了主线程其它任务的执行时间，就会导致页面卡顿。

  将 re-render 时的 JS 计算拆分成更小粒度的任务，可以随时暂停、继续和丢弃执行的任务。

  当 JS 计算的时间达到 16 毫秒之后使其暂停，把主线程让给 UI 绘制，防止出现渲染掉帧的问题。

  在浏览器空闲的时候继续执行之前没执行完的小任务。

  让我们回看一下回看上面的解决思路，React 给出的解决方案是将整次 Render 阶段的长任务拆分成多个小任务：
  每个任务执行的时间控制在 5ms。
  把每一帧 5ms 内未执行的任务分配到后面的帧中。
  给任务划分优先级，同时进行时优先执行高优任务。

- commit: 把 reconcile 产生的 fiber 链表一次性添加到 dom 中，因为 fiber 对应的节点提前创建好了、是增是删还是改也都知道了，所以，这一个阶段很快

整个 Fiber 的遍历是基于循环而非递归，可以随时中断

## 双缓冲的原理

React 应用中最多同时存在两棵 Fiber 树。当前屏幕上显示内容对应的 Fiber 树叫做 Current Fiber，正在内存中构建的 Fiber 树叫做 workInProgress Fiber，他们通过 alternate 属性相互连接。当 workInProgress Fiber 树构建好了以后，只需要切换一下 current 指针的指向，这两棵树的身份就会完成互换。

## Diff 的瓶颈以及 React 的应对

由于 diff 操作本身会带来性能上的损耗，在 React 文档中提到过，即使最先进的算法中，将前后两棵树完全比对的算法复杂度为 O(n3)，
其中 n 为树中元素的数量。

如果 React 使用了该算法，那么仅仅一千个元素的页面所需要执行的计算量就是十亿的量级，这无疑是无法接受的。

为了降低算法的复杂度，React 的 diff 会预设三个限制：

1、只对同级元素进行 diff 比对。如果一个元素节点在前后两次更新中跨越了层级，那么 React 不会尝试复用它  
2、两个不同类型的元素会产生出不同的树。如果元素由 div 变成 p，React 会销毁 div 及其子孙节点，并新建 p 及其子孙节点  
3、开发者可以通过 key 来暗示哪些子元素在不同的渲染下能保持稳定

## 每一个 fiber 如何建立起关联的

每一个 element 都会对应一个 fiber ，每一个 fiber 是通过 return ， child ，sibling 三个属性建立起联系的。

return： 指向父级 Fiber 节点。  
child： 指向子 Fiber 节点。  
sibling：指向兄弟 fiber 节点。

## fiber 属性

React Fiber 架构中的 Fiber 节点构成了一个链表结构，这些节点代表了渲染树中的不同部分（如组件、DOM 节点等）。每个 Fiber 节点都有一系列的属性，它们用于追踪组件的状态、构建虚拟 DOM 以及管理渲染过程。以下是 Fiber 节点上一些重要的属性及其用途：

### 核心属性

- **type**: 指定该 Fiber 节点所对应的组件类型（例如，函数组件、类组件或 DOM 元素类型如 `'div'` 或 `'span'`）。

- **key**: 唯一标志一个兄弟 Fiber 节点，用于在重渲染过程中识别节点。

- **child**: 指向该节点的第一个子 Fiber 节点。

- **sibling**: 指向该节点的下一个兄弟 Fiber 节点。

- **return**: 指向该节点的父 Fiber 节点，有时也称作 `parent`。

- **index**: 子 Fiber 在其同级兄弟中的位置索引。

- **ref**: 用于引用实际 DOM 节点或类组件实例。

- **pendingProps**: 即将被应用的新 props。

- **memoizedProps**: 上一次渲染中使用的 props。

- **stateNode**: 用于保存与该 Fiber 相关联的本地状态。对于类组件，它是组件实例本身。对于 DOM 元素，它是 DOM 节点。如果是函数组件 stateNode 为空 因为函数组件没有实例

- **updateQueue**: 更新队列，用于存储该 Fiber 节点的状态更新和回调。

- **tag**: 标记不同的组件类型 只详情请查看源码的 WorkTag

- **alternate**: 双缓冲

### 更新相关属性 （最新版本的 react18 中 已经删除下面所有属性）

- **effectTag**: 指示 Fiber 节点在提交阶段需要进行的操作（如插入、更新、删除等）。

- **nextEffect**: 在提交阶段，Fiber 节点按照 `effectTag` 形成的单链表中的下一个节点。

- **firstEffect**: 指向子树中第一个有副作用的子节点。

- **lastEffect**: 指向子树中最后一个有副作用的子节点。

### 调度优先级相关属性

- **lanes**: 表示 Fiber 节点的优先级，React 使用它来确定何时处理更新。

### 双缓冲相关属性

- **alternate**: 指向备用的 Fiber 节点，React 使用双缓冲技术，交替使用两个 Fiber 树来进行更新。

### 调试和性能追踪相关属性

- **\_debugID**: 开发模式下用于调试的 ID。

- **\_debugSource**: 包含了该 Fiber 节点对应源代码的位置信息。

- **\_debugOwner**: 指向创建该 Fiber 节点的父组件 Fiber。

这些属性的具体内容可能会随着 React 的版本更新而发生变化，这里提供的是一个大致的概览，用于理解 Fiber 节点如何在 React 的渲染和更新过程中进行工作。由于 React 团队会不断优化内部实现，最精准的信息应当直接参照 React 的源代码或官方发布的文档。
