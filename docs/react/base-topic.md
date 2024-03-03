---
nav: React
group: 基础
toc: content
mobile: false
title: 面试
---

## react-router 里的 Link 标签和 a 标签有什么区别

1、如果 Link 上定义了 onClick 方法，则执行该 onclick 方法  
2、click 的时候阻止 a 标签默认事件（这样子点击<a href="/abc">123</a>就不会跳转和刷新页面）  
3、再取得跳转 href（即是 to），用 history（前端路由两种方式之一，history & hash）跳转，此时只是链接变了，并没有刷新页面

## 说说 React Router 有几种模式

- BrowserRouter 实现原理  
  BrowserRouter 是 react-router-dom 中实现的一个路由组件，它主要利用了 HTML5 历史 API 来同步 UI 与 URL。这些历史 API 包括 pushState、replaceState 和 popstate 事件。

- HashRouter 实现原理  
   路由描述了 URL 与 UI 之间的映射关系，这种映射是单向的，即 URL 变化引起 UI 更新（无需刷新页面）
  下面以 hash 模式为例子，改变 hash 值并不会导致浏览器向服务器发送请求，浏览器不发出请求，也就不会刷新页面
  hash 值改变，触发全局 window 对象上的 hashchange 事件。所以 hash 模式路由就是利用 hashchange 事件监听 URL 的变化，从而进行 DOM 操作来模拟页面跳转

## React 中 key 的作用是什么

1、Key 是 React 用于追踪哪些列表中元素被修改、被添加或者被移除的辅助标识  
2、给每一个 vnode 的唯一 id，可以依靠 key,更准确,更快的拿到 oldVnode 中对应的 vnode 节点

```html

  <!-- 更新前 -->
  <div>
    <p key="a">a</p>
    <h3 key="b">b</he>
  </div>

<!-- 更新后 -->
<div>
  <h3 key="b">b</h3>
  <p key="a">a</p>
</div>
```

如果没有 key，React 会认为 div 的第一个子节点由 p 变成 h3，第二个子节点由 h3 变成 p，则会销毁这两个节点并重新构造
但是当我们用 key 指明了节点前后对应关系后，React 知道 key === "a" 的 p 更新后还在，所以可以复用该节点，只需要交换顺序。
key 是 React 用来追踪哪些列表元素被修改、被添加或者被移除的辅助标志。
在开发过程中，我们需要保证某个元素的 key 在其同级元素中具有唯一性。在 React diff 算法中，React 会借助元素的 Key 值来判断该元素是新近创建的还是被移动而来的元素，从而减少不必要的元素重新渲染

## React 如何区分 Class 组件 和 Function 组件

1、 React 区分 Class 组件 和 Function 组件的方式很巧妙，由于所有的类组件都要继承 React.Component，
所以只要判断原型链上是否有 React.Component 就可以了：

1、AComponent.prototype instanceof React.Component
2、new AComponent() instanceof React.Component

2、传入 ref
class 组件传入 ref 拿到的是类的实例
function 组件如果不用 forwardRef 包裹 ref 是传递不下去的，拿到的是空

3、直接打印

4、new 后打印
函数式组件有$$typeof 属性
类组件没有

## hooks 为什么要通常放在顶部，hooks 不能写在 if 条件语句中

React Hooks 必须置于组件顶层的主要原因是确保 Hooks 在每次组件渲染时都以相同的顺序和数量被调用。这个规则被称为“Hooks 的调用顺序规则”。

## 为什么 React 元素有一个 $$typeof 属性

目的是为了防止 XSS 攻击。因为 Synbol 无法被序列化，所以 React 可以通过有没有 $$typeof 属性来断出当前的 element 对象是从数据库来的还是自己生成的。

如果没有 $$typeof 这个属性，react 会拒绝处理该元素。

## 函数组件和类组件本质的区别是什么

1、对于类组件来说，底层只需要实例化一次，实例中保存了组件的 state 等状态。对于每一次更新只需要调用 render 方法以及对应的生命周期就可以了。

2、在函数组件中，每一次更新都是一次新的函数执行，一次函数组件的更新，里面的变量会重新声明。

## 讲一下 react hooks 内部实现原理

<a target="_blank" href="https://juejin.cn/post/7203336895887114300">参考</a>

React 支持 class 和 function 两种形式的组件，class 支持 state 属性和生命周期方法，而 function 组件也通过 hooks api 实现了类似的功能。

fiber 架构是 React 在 16.8 引入的，之前是 jsx -> render function -> vdom 然后直接递归渲染 vdom，现在则是多了一步 vdom 转 fiber 的 reconcile，在 reconcile 的过程中创建 dom 和做 diff 并打上增删改的 effectTag，然后一次性 commit。这个 reconcile 是可被打断的，可以调度，也就是 fiber 的 schedule。

hooks 的实现就是基于 fiber 的，会在 fiber 节点上放一个链表，每个节点的 memorizedState 属性上存放了对应的数据，然后不同的 hooks api 使用对应的数据来完成不同的功能。

链表自然有个创建阶段，也就是 mountXxx，之后就不需要再 mount 了，只需要 update。所以每个 useXx 的实现其实都是分为了 mountXxx 和 updateXxx 两部分的。

我们看了几个简单的 hooks：useRef、useCallback、useMemo，它们只是对值做了缓存，逻辑比较纯粹，没有依赖 React 的调度。而 useState 会触发 fiber 的 schedule，useEffect 也有自己的调度逻辑。实现上相对复杂一些，我们没有继续深入。

其实给我们一个对象来存取数据，实现 useRef、useCallback、useMemo 等 hooks 还是很简单的。对于需要调度的，则复杂一些。

对于自定义的 hooks，那个就是个函数调用，没有任何区别。（lint 的规则不想遵守可以忽略）

所有 hooks api 都是基于 fiber 节点上的 memorizedState 链表来存取数据并完成各自的逻辑的。

## 如何判断是否是一个 react 对象

React.isValidElement();

## 类组件中的 setState 和函数组件中的 useState 有什么异同

一、相同点：

首先从原理角度出发，setState 和 useState 更新视图，底层都调用了 scheduleUpdateOnFiber 方法，
而且事件驱动情况下都有批量更新规则。

二、 不同点

1、在不是 pureComponent 组件模式下， setState 不会浅比较两次 state 的值，只要调用 setState，在没有其他优化手段的前提下，就会执行更新。  
但是 useState 中的 dispatchAction 会默认比较两次 state 是否相同，然后决定是否更新组件。

2、setState 有专门监听 state 变化的回调函数 callback，可以获取最新 state；但是在函数组件中，只能通过 useEffect 来执行 state 变化引起的副作用。

3、setState 在底层处理逻辑上主要是和老 state 进行合并处理，而 useState 更倾向于重新赋值。
