---
nav: React
group: 基础
toc: content
mobile: false
title: react合成事件
---

## React 合成事件

解决跨平台，兼容性问题

1、React16 事件绑定到 document 上  
2、React17 事件绑定到 root 组件上，有利于多个 react 版本共存，例如微前端  
3、所以原生事件的监听器响应总是比合成事件的监听器早  
4、阻止原生事件的冒泡后，会阻止合成事件的监听器执行  
5、Promise，setTimeout，native event handlers（原生事件）中，react18 之前不会进行合并更新，react18 之后一样也会进行合并更新  
6、合成事件与原生事件不是一一映射的关系。比如 onMouseEnter 合成事件映射原生 mouseout、mouseover 事件。  
onChange 事件，会绑定 [blur，change ，focus ，keydown，keyup] 多个事件，React  
通过 registrationNameDependencies 来记录合成事件和原生事件的映射关系：

```js
export const registrationNameDependencies = {
  onClick: ['click'],
  onMouseEnter: ['mouseout', 'mouseover'],
  onChange: [
    'change',
    'click',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'selectionchange',
  ],
  // ...
};

/**一次渲染 */

function App() {
  const [count, setCount] = React.useState(0);

  const [flag, setFlag] = React.useState(false);

  function handleClick() {
    setCount((c) => c + 1); // Does not re-render yet

    setFlag((f) => !f); // Does not re-render yet

    // React will only re-render once at the end (that's batching!)
  }
  console.log('render');

  return (
    <div>
      <div>
        {count}|{flag.toString()}
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

/** react18之前两次宣传，react18之后一次次宣传 */
function App() {
  const [count, setCount] = React.useState(0);

  const [flag, setFlag] = React.useState(false);

  function handleClick() {
    setTimeout(() => {
      setCount((c) => c + 1);
      setFlag((f) => !f);
    }, 1000);
  }
  console.log('render');

  return (
    <div>
      <div>
        {count}|{flag.toString()}
      </div>
      <button onClick={handleClick}>Next</button>
    </div>
  );
}

export default App;
```

## 问什么 react 会自己实现一套事件机制

1、将事件都代理到了根节点上，减少了事件监听器的创建，节省了内存，提高性能  
2、磨平浏览器差异，开发者无需兼容多种浏览器写法。如想阻止事件传播时需要编写 event.stopPropagation() 或 event.cancelBubble = true，在 React 中只需编写 event.stopPropagation()即可  
3、对开发者友好。只需在对应的节点上编写如 onClick、onClickCapture 等代码即可完成 click 事件在该节点上冒泡节点、捕获阶段的监听，统一了写法。

React 事件的命名采用小驼峰式（camelCase），而不是纯小写。以 click 事件为例，冒泡阶段用 onClick，捕获阶段用 onClickCapture。

## React17 与 React16 事件系统的差别

1、事件委托的节点从 React16 的 document 更改为 React17 的 React 树的根 DOM 容器。
这一改动的出发点是如果页面中存在多个 React 应用，由于他们都会在顶层 document 注册事件处理器，
如果你在一个 React 子应用的 React 事件中调用了 e.stopPropagation()，
无法阻止事件冒泡到外部树，因为真实的事件早已传播到 document。
而将事件委托在 React 应用的根 DOM 容器则可以避免这样的问题，减少了多个 React 应用并存可能产生的问题，
并且事件系统的运行也更贴近现在浏览器的表现。

2、scroll 事件不再冒泡
在原生 scroll 里，scroll 是不存在冒泡阶段的，但是 React16 中模拟了 scroll 的冒泡阶段，React17 中将此特性去除，避免了当一个嵌套且可滚动的元素在其父元素触发事件时造成混乱。

3、去除事件池

## setState 和 useState 同步异步问题

1、在正常的 react 的事件流里（合成事件、生命周期函数）
setState 和 useState 是异步执行的（不会立即更新 state 的结果）
多次执行 setState 和 useState，只会调用一次重新渲染 render,
不同的是，setState 会进行 state 的合并，而 useState 则不会。
(有时合并（对象形式 setState({}) => 通过 Object.assign 形式合并对象），有时不合并、而是覆盖（函数形式 setState((prevState,nextState)=>{})）)

2、setTimeout 、原生事件中 setState 和 useState 是同步执行的 react18 之前 之后也是异步的

3、setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，
导致在合成事件和钩子函数中没法立马拿到更新后的值，形式了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的 callback 拿到更新后的结果。

4、setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和 setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次 setState ， setState 的批量更新策略会对其进行覆盖，取最后一次的执行，
如果是同时 setState 多个不同的值，在更新时会对其进行合并批量更新。

## react 捕获事件案例

先捕获再冒泡

```jsx
export default function Index() {
  const handleClick = () => {
    console.log('模拟冒泡阶段执行');
  };
  const handleClickCapture = () => {
    console.log('模拟捕获阶段执行');
  };
  return (
    <div>
      <button onClick={handleClick} onClickCapture={handleClickCapture}>
        点击
      </button>
    </div>
  );
}

// 阻止冒泡
```

阻止事件冒泡后，handleFatherClick 事件也不在触发

```jsx
export default function Index() {
  const handleClick = (e) => {
    e.stopPropagation();
  };
  const handleFatherClick = () => console.log('冒泡到父级');
  return (
    <div onClick={handleFatherClick}>
      <button onClick={handleClick}>点击</button>
    </div>
  );
}
```

## React 阻止默认行为和原生的事件也有一些区别

### 原生事件

e.preventDefault() 和 return false 可以用来阻止事件默认行为，
由于在 React 中给元素的事件并不是真正的事件处理函数。所以导致 return false 方法在 React 应用中完全失去了作用。

### React 事件

在 React 应用中，可以用 e.preventDefault() 阻止事件默认行为，
这个方法并非是原生事件的 preventDefault ，由于 React 事件源 e 也是独立组建的，所以 preventDefault 也是单独处理的

## 事件执行队列(冒泡捕获的执行顺序)

在第一步通过原生 DOM 获取到对应的 fiber ，接着会从这个 fiber 向上遍历，遇到元素类型 fiber ，就会收集事件，用一个数组收集事件：
如果遇到捕获阶段事件 onClickCapture ，就会 unshift 放在数组前面。以此模拟事件捕获阶段。
如果遇到冒泡阶段事件 onClick ，就会 push 到数组后面，模拟事件冒泡阶段。
一直收集到最顶端 app ，形成执行队列，在接下来阶段，依次执行队列里面的函数。

那么如上点击一次按钮，4 个事件执行顺序是这样的：

[handleClick2、handleClick1]
首先第一次收集是在 button 上，handleClick1 冒泡事件 push 处理，handleClick2 捕获事件 unshift 处理。形成结构
然后接着向上收集，遇到父级，收集父级 div 上的事件，handleClick3 冒泡事件 push 处理，handleClick4 捕获事件 unshift 处理。
[handleClick4, handleClick2 , handleClick1,handleClick3 ]
依次执行数组里面的事件，所以打印 4 2 1 3。

```jsx
export default function Index() {
  const handleClick1 = () => console.log(1);
  const handleClick2 = () => console.log(2);
  const handleClick3 = () => console.log(3);
  const handleClick4 = () => console.log(4);
  return (
    <div onClick={handleClick3} onClickCapture={handleClick4}>
      <button onClick={handleClick1} onClickCapture={handleClick2}>
        点击
      </button>
    </div>
  );
}
```
