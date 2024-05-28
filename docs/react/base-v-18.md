---
nav: React
group: 基础
toc: content
title: React18 新特性
---

## React18 新特性

<a target="_blank" href="https://fe.ecool.fun/topic/6f40b143-3941-44c6-ac90-9bf87795ee2c?orderBy=updateTime&order=desc&titleKey=react18">参考</a>

1、组件返回 undefined 不再报错

2、在 React 18 中，不论是在合成事件中，还是在宏任务中，都是会合并更新
如果想破坏合并更新请使用 flushSync
注意：flushSync 函数内部的多个 setState 仍然为批量更新

```jsx
import { flushSync } from 'react-dom';
const App = () => {
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

const root = document.getElementById('root');

ReactDOM.createRoot(root).render(<App />);
```

6、新增一些 hook  
useDeferredValue  
useInsertionEffect
useTransition

7、renderToPipeableStream

8、TS 类型定义上的变化
如果有用到 children，需要在组件 props 的定义中写明它的类型，这在以往是可以忽略不写的

```js
interface MyButtonProps {
  color: string;

  children?: React.ReactNode;
}
```

9、Transition  
Transition 是 react18 引入的新概念，用来区分紧急和非紧急的更新。  
紧急的更新，指的是一些直接的用户交互，如输入、点击等；  
非紧急的更新，指的是 UI 界面从一个样子过渡到另一个样子；

```js
const { useCallback, useState, useTransition, Suspense } = React;

let currentValue = '';
function App() {
  const [value, setValue] = useState('');
  const [isPending, startTransition] = useTransition();

  const handleChange = (e) => {
    const newVal = e.target.value;
    startTransition(() => setValue(newVal));
    // setValue(newVal);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <div className={isPending ? 'loading' : ''}>
        {Array(50000)
          .fill('a')
          .map((item, index) => {
            return <div key={index}>{value}</div>;
          })}
      </div>
    </div>
  );
}

const rootElement = document.getElementById('root');

ReactDOM.createRoot(rootElement).render(<App />);
```

## renderToPipeableStream

`renderToPipeableStream` 是 React 18 新引入的服务器端渲染（SSR）API，它允许你将 React 组件渲染成 Node.js 流（stream）。这种方式可以提高服务端渲染的性能，并提供一些新的功能来改善用户体验。

以下是 `renderToPipeableStream` 的一些关键特性和优势：

### 1. 流式渲染

`renderToPipeableStream` 通过流的形式输出 HTML 字符串，这意味着服务器可以立即发送第一部分的 HTML 至客户端，而无需等待整个页面渲染完成。这可以显著减少首次内容绘制（First Contentful Paint，FCP）的时间，改善用户感知的加载速度。

### 2. 选择性的流式传输

此 API 使得你可以决定哪些部分的组件是以流的形式发送，哪些是等待所有内容都准备好后再发送。你可以选择性地实现流式传输，以优化关键内容的加载时间并提升用户体验。

### 3. 提升并发性

由于基于流式传输，即使在渲染大型组件树时，服务器也能保持更高的并发性，因为它可以处理多个请求而无需等待每个请求的完整输出。

### 4. 构建中的渲染

`renderToPipeableStream` 支持 Suspense，允许你在组件渲染前“暂停”渲染，并等待数据获取。这样，你可以先发送页面框架，然后在数据到达时填充内容。

### 5. 错误和超时处理

新 API 提供了错误处理和超时回调。例如，如果在渲染过程中发生错误，或者页面在给定的超时时间内未完成渲染，你可以发送一个备用页面或者其他错误处理逻辑。

示例代码：

```javascript
import { renderToPipeableStream } from 'react-dom/server';
import App from './App';

// Incoming request handler
const serverHandler = (req, res) => {
  const stream = renderToPipeableStream(<App />, {
    onAllReady() {
      // 当所有组件都准备好时调用
      res.statusCode = 200; // 设置HTTP状态码
      stream.pipe(res); // 将渲染的组件流式传输到响应中
    },
    onError(error) {
      // 渲染过程中发生错误时调用
      console.error(error);
      res.statusCode = 500;
      res.send('Internal Server Error');
    },
  });
};

// ...
```

上面的代码示例展示了如何使用 `renderToPipeableStream` 来渲染 React 组件并流式传输响应。你可以通过 `onAllReady` 和 `onError` 回调来处理正常的流式传输和错误情况。

需要注意的是，这个 API 可能需要相应的 Node.js 服务器设置和客户端逻辑来充分利用流式渲染和 Suspense 的优势。使用 `renderToPipeableStream` 是 React 服务器端渲染的未来方向，它为高性能和改善用户体验提供了更多可能性。

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

## useDeferredValue

`useDeferredValue` 是 React 18 中引入的一个新的钩子（Hook），它允许你推迟某些不那么紧急的值的更新。这样做可以让你在保持应用响应性的同时执行可能导致性能问题的重计算或渲染任务。它通常用于优化长列表、图表或其他复杂渲染的场景。

### 使用场景

想象你有一个输入框，用户的输入会立即显示在界面上，同时基于输入的内容，实时地对一组数据进行筛选并渲染。如果筛选操作很昂贵，它可能会导致输入的响应变慢。`useDeferredValue` 可以帮助你保留输入的即时响应性，同时对数据的渲染进行推迟。

### 示例

```js
import React, { useState, useDeferredValue } from 'react';

function MyComponent({ items }) {
  // searchText 是一个用户输入的值
  const [searchText, setSearchText] = useState('');

  // 使用 useDeferredValue 来获取一个推迟更新的值
  // deferredSearchText 将会在不阻塞渲染的情况下延迟更新
  const deferredSearchText = useDeferredValue(searchText, { timeoutMs: 2000 });

  // 根据 deferredSearchText 来筛选列表项
  const filteredItems = items.filter((item) =>
    item.includes(deferredSearchText),
  );

  return (
    <>
      <input
        type="text"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      {filteredItems.map((item) => (
        <div key={item}>{item}</div>
      ))}
    </>
  );
}
```

在这个例子中，尽管 `searchText` 随着用户的输入立即改变，但 `deferredSearchText` 可能会稍后更新。这意味着，筛选操作（可能很耗时）将会基于一个稍微“落后”的值来执行，这样就不会拖慢输入的即时反馈。`timeoutMs` 选项允许你指定一个时间（毫秒），控制 React 将在多长时间内尝试延迟更新`deferredSearchText`。

### 工作原理

内部上，`useDeferredValue` 使用 React 的并发特性来实现。React 会跟踪渲染的优先级，并基于当前的工作负载和浏览器的帧速率来智能地调整哪些更新应该被推迟。通过这种方式，即便有一些操作被延迟，用户界面依然能够保持流畅和响应性。

使用 `useDeferredValue` 需要确保你的应用使用了 React 18 及其并发特性。同时，你应该配合使用 `React.startTransition`，它允许你告诉 React 哪些更新可以被推迟而不会影响用户体验。这对于管理用户触发的更新（如点击、输入等）非常有用。

### 注意

`useDeferredValue` 和并发特性一样，最好用于那些不需要立即更新的场景。对于需要立即反馈的交互或状态更新，你应该继续像往常一样直接设置状态。
