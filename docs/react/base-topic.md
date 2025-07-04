---
nav: React
group: 基础
toc: content
mobile: false
title: 面试
---

## react-router 里的 Link 标签和 a 标签有什么区别

React Router 的 `Link` 组件与传统的 HTML `<a>`（锚）标签有一些关键性的不同之处，尤其是在构建单页应用程序（SPA）时这些差异变得尤为重要。

### HTML `<a>` 标签：

- 当用户点击 `<a>` 标签时，浏览器会发起一个新的 HTTP 请求到指定的`href` URL，导致页面的重新加载。
- `<a>` 标签的这个行为不适用于单页应用，因为你希望应用无需重新加载即可响应 URL 的变化。

```html
<a href="/about">About</a>
```

### React Router 的 `Link` 组件：

- `Link` 组件是 React Router 的一部分，它在内部使用 `history` 对象来改变 URL，但不会引起页面刷新，从而实现无缝页面切换。
- 当点击 `Link` 组件时，页面的 URL 会更新，并触发相应路由的渲染，但不会发生传统意义上的页面重载。
- `Link` 组件是实现 SPA 中导航的首选方法，因为它保持了应用状态并使页面过渡看起来更流畅。

```jsx
import { Link } from 'react-router-dom';

export default () => (
  <div>
    <Link to="/react">简易版本 redux</Link>
  </div>
);
```

使用 `Link`，React Router 可以处理路由的变化，并在不重新加载整个页面的情况下，仅更新 DOM 中需要变化的部分。这是通过 JavaScript 进行实现的，允许应用保持单页应用的性能优势和用户体验。

总结一下，这就是为什么在 React 中使用 React Router 时应该使用 `Link` 而不是 `<a>`：

- `Link` 组件避免不必要的页面刷新和 HTTP 请求，节省资源和时间。
- `Link` 组件维护了应用的状态，用户不会在导航时丢失当前的应用状态。
- `Link` 组件使 URL 的变化成为了一个流畅的过程，用户体验更佳。

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

## react 为什么不用 index 做 key

在 React 中，使用数组索引（index）作为列表项的 `key` 可能会导致一系列的问题和性能不佳，尤其是当列表可以更改（添加、删除、重新排序项）时。以下是不推荐使用索引作为 `key` 的原因：

1. **性能问题**：
   当列表的项目顺序改变时，React 会根据 `key` 来决定哪些元素需要更新。如果你使用索引作为 `key`，即使数据项的内容发生了变化，索引也仍然相同。这会使 React 无法正确识别哪些元素实际上是新的或者发生了变化，导致不必要的 DOM 操作，从而降低性能。

2. **重新渲染问题**：
   如果列表项的顺序改变了（例如，通过排序操作），使用索引作为 `key` 将导致 React 无法正确地识别元素的顺序变化，因为元素的 `key`（即索引）没有改变。这可能导致 React 错误地重新创建和销毁组件，而不是简单地移动它们。

3. **组件状态问题**：
   如果列表中的组件有自己的内部状态或是连接到外部状态（例如，通过 Redux 管理的状态），使用索引作为 `key` 可能会导致状态被错误地关联到新的组件实例。例如，如果你删除了列表中的一个项目，后面所有项目的索引都会发生变化，这会导致状态被传递到错误的组件实例。

4. **动画和过渡问题**：
   在实现动画和过渡效果时，正确的 `key` 是非常重要的，因为它帮助 React 管理元素的生命周期。如果你使用索引作为 `key`，React 可能会错误地处理元素的进入和退出，导致动画效果出现问题。

出于上述原因，建议使用一个稳定且独特的 `key` 值，如每个项目的唯一标识符（ID），来帮助 React 正确地识别和管理列表中的元素。这样不仅能提高性能，还能避免意外的行为，尤其是在复杂的列表操作和动画中。

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

目的是为了防止 XSS 攻击。因为 Symbol 无法被序列化，所以 React 可以通过有没有 $$typeof 属性来断出当前的 element 对象是从数据库来的还是自己生成的。

如果没有 $$typeof 这个属性，react 会拒绝处理该元素。

用途： 
- 区分 React 元素与其他对象
- 优化性能 
  这在 React 的调和（Reconciliation）算法中非常重要。在比较节点时，React 使用 $$typeof 属性，以快速确定两个对象是否为 React 元素，而无需进行其他耗时的检查。

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

## 为什么说 React 中的 props 是只读的

保证 react 的单向数据流的设计模式，使状态更可预测。如果允许自组件修改，那么一个父组件将状态传递给好几个子组件，这几个子组件随意修改，就完全不可预测，不知道在什么地方修改了状态，所以我们必须像纯函数一样保护 props 不被修改

## 怎么防止 HTML 被转义

1、在前端 JavaScript 中直接插入 HTML：
使用 innerHTML 属性可以将字符串作为 HTML 插入元素中，而不是作为文本。例如：

```js
document.getElementById('myDiv').innerHTML = '<strong>这是加粗的文字</strong>';
```

2、在 React 中防止转义

```js
function MyComponent() {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: '<strong>这是加粗的文字</strong>' }}
    />
  );
}
```

## 在 React 中如何实现代码分割？有哪些常见方式？

1. React.lazy + Suspense（官方推荐）

```js
const LazyComponent = React.lazy(() => import('./LazyComponent'));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

2. import() 动态导入（适用于路由懒加载）

```js
import { lazy } from 'react';
const LazyPage = lazy(() => import('./pages/LazyPage'));
```

3. React Loadable（第三方库，适用于更复杂的场景）

```js
import Loadable from 'react-loadable';
const LoadableComponent = Loadable({
  loader: () => import('./MyComponent'),
  loading: () => <div>Loading...</div>,
});
```

4. Webpack import() + optimization.splitChunks（适用于手动分割多个模块）

```js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
```
