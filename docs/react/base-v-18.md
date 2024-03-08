---
nav: React
group: 基础
toc: content
title: React18 新特性
---

## React18 新特性

1、组件返回 undefined 不再报错

2、在 React 18 中，不论是在合成事件中，还是在宏任务中，都是会合并更新
如果想破坏合并更新请使用 flushSync
注意：flushSync 函数内部的多个 setState 仍然为批量更新

```jsx
import { flushSync } from 'react-dom';
const App: React.FC = () => {
  const [count, setCount] = React.useState(0);
  console.log('count: ', count);
  return (
    <div
      onClick={() => {
        // flushSync 函数内部的多个 setState 仍然为批量更新
        // 多个flushSync不是批量更新
        flushSync(() => {
          setCount((count) => count + 1);
          setCount((count) => count + 1);
        });
        flushSync(() => {
          setCount((count) => count + 2);
        });
      }}
    >
      <button>count： {count}</button>
    </div>
  );
};

export default App;
```

3、React 18 已经放弃了对 ie11 的支持，将于 2022 年 6 月 15 日 停止支持 ie，如需兼容，需要回退到 React 17 版本

4、useId 的作用非常简单，生成一个唯一且稳定的 id，可以在应用的服务端或客户端使用。useId 生成的 Id 无论是在服务器端还是客户端都是稳定的。
主要服务于 ssr

5、ReactDOM.render 已被弃用。使用它会警告：在 React 17 模式下运行您的应用程序

```js

import App from './App';

const root = document.getElementById('root')!;

ReactDOM.createRoot(root).render(<App />);
```

6、新增一些 hook  
useDeferredValue  
useInsertionEffect

## useInsertionEffect

useInsertionEffect 是在 React v18 新添加的 hooks ，它的用法和 useEffect 和 useLayoutEffect 一样。那么这个 hooks 用于什么呢?

在介绍 useInsertionEffect 用途之前，先看一下 useInsertionEffect 的执行时机。

```js
React.useEffect(() => {
  console.log('useEffect 执行');
}, []);

React.useLayoutEffect(() => {
  console.log('useLayoutEffect 执行');
}, []);

React.useInsertionEffect(() => {
  console.log('useInsertionEffect 执行');
}, []);
```

打印： useInsertionEffect 执行 useLayoutEffect 执行 useEffect 执行

可以看到 useInsertionEffect 的执行时机要比 useLayoutEffect 提前，useLayoutEffect 执行的时候 DOM 已经更新了，但是在 useInsertionEffect 的执行的时候，DOM 还没有更新。

本质上 useInsertionEffect 主要是解决 CSS-in-JS 在渲染中注入样式的性能问题。这个 hooks 主要是应用于这个场景，在其他场景下 React 不期望用这个 hooks 。

CSS-in-JS 的注入会引发哪些问题呢？ 首先看部分 CSS-in-JS 的实现原理，拿 Styled-components 为例子，通过 styled-components，你可以使用 ES6 的标签模板字符串语法（Tagged Templates）为需要 styled 的 Component 定义一系列 CSS 属性，当该组件的 JS 代码被解析执行的时候，styled-components 会动态生成一个 CSS 选择器，并把对应的 CSS 样式通过 style 标签的形式插入到 head 标签里面。动态生成的 CSS 选择器会有一小段哈希值来保证全局唯一性来避免样式发生冲突。这种模式下本质上是动态生成 style 标签。

明白了 Styled-components 原理之后，再来看一下，如果在 useLayoutEffect 使用 CSS-in-JS 会造成哪里问题呢？

首先 useLayoutEffect 执行的时机 DOM 已经更新完成，布局也已经确定了，剩下的就是交给浏览器绘制就行了。
如果在 useLayoutEffect 动态生成 style 标签，那么会再次影响布局，导致浏览器再次重回和重排。
这个是时候 useInsertionEffect 的作用就出现了，useInsertionEffect 的执行在 DOM 更新前，所以此时使用 CSS-in-JS 避免了浏览器出现再次重回和重排的可能，解决了性能上的问题。

接下来我们模拟一下在 useInsertionEffect 使用 CSS-in-JS 流程：

```js
export default function Index() {
  React.useInsertionEffect(() => {
    /* 动态创建 style 标签插入到 head 中 */
    const style = document.createElement('style');
    style.innerHTML = `
       .css-in-js{
         color: red;
         font-size: 20px;
       }
     `;
    document.head.appendChild(style);
  }, []);

  return <div className="css-in-js"> hello , useInsertionEffect </div>;
}
```

此时 div 的字体颜色和字体大小已经更改。

## React 里程碑

v16.0： 为了解决之前大型 React 应用一次更新遍历大量虚拟 DOM 带来个卡顿问题，React 重写了核心模块 Reconciler ，启用了 Fiber 架构；为了在让节点渲染到指定容器内，更好的实现弹窗功能，推出 createPortal API；为了捕获渲染中的异常，引入 componentDidCatch 钩子，划分了错误边界。

v16.2：推出 Fragment ，解决数组元素问题。

v16.3：增加 React.createRef() API，可以通过 React.createRef 取得 Ref 对象。增加 React.forwardRef() API，解决高阶组件 ref 传递问题；推出新版本 context api，迎接 Provider / Consumer 时代；增加 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 生命周期 。

v16.6：增加 React.memo() API，用于控制子组件渲染；增加 React.lazy() API 实现代码分割；增加 contextType 让类组件更便捷的使用 context；增加生命周期 getDerivedStateFromError 代替 componentDidCatch 。

v16.8：全新 React-Hooks 支持，使函数组件也能做类组件的一切事情。

v17： 事件绑定由 document 变成 container ，移除事件池等。
