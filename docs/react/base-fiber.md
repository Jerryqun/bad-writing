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

schedule： 空闲调度 (调度这 fiber 节点执行 reconcile,requestIdleCallback)

reconcile： vdom => fiberl （并且还会准备好要用的 dom 节点、确定好是增、删、还是改，通过 schdule 的调度，最终把整个 vdom 树转成了 fiber 链表）

commit: 把 reconcile 产生的 fiber 链表一次性添加到 dom 中，因为 fiber 对应的节点提前创建好了、是增是删还是改也都知道了，所以，这一个阶段很快

整个 Fiber 的遍历是基于循环而非递归，可以随时中断

## 双缓冲的原理

WIP 树就是一个缓冲，它在 Reconciliation 完毕后一次性提交给浏览器进行渲染。它可以减少内存分配和垃圾回收，WIP 的节点不完全是新的，比如某颗子树不需要变动，React 会克隆复用旧树中的子树。
双缓存技术还有另外一个重要的场景就是异常的处理，比如当一个节点抛出异常，仍然可以继续沿用旧树的节点，避免整棵树挂掉。

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
