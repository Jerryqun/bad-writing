---
nav: React
group: 基础
toc: content
mobile: false
title: createPortal
---

## ReactDOM.createPortal

在以前， react 中所有的组件都会位于 #app 下，组件默认会按照既定层级嵌套渲染，而使用 Portals 提供了一种脱离 #app 的组件.因此 Portals 适合脱离文档流(out of flow) 的组件（让组件渲染到父组件以外）

React 的 Portal 通过 React 的 context 和事件冒泡的机制工作。

React Context：React 使用 context 来存储组件树的一些信息，比如事件处理程序。当组件使用 Portal 时，Portal 在 React 内部仍然保持在父组件树中，即使在 DOM 上渲染到其他地方。也就是说，Portal 的 context 依然从其父组件继承而来。

DOM 事件冒泡：DOM 中的事件（例如点击事件）通常会从触发事件的元素开始，然后逐步向上冒泡到父元素，直到 document 元素。在这个过程中，事件会按照 DOM 树的层级一层层地向上传递。

React 的事件代理：React 使用事件代理模式将所有事件都代理到顶层（document 或者 root DOM 节点）进行处理。这意味着当在子组件中触发一个事件时，无论子组件是否使用了 Portal，React 都会将事件传递到其父组件，然后逐级往上冒泡，直到到达代理事件的顶层。

在 React 中，当一个子组件使用 Portal 将其内容渲染到其他 DOM 节点时，尽管在 DOM 结构上子组件不再是父组件的直接子节点，但在 React 的组件树中，子组件仍然是父组件的子节点。这意味着 React 在监听和处理事件时，会沿着组件树的路径（而不是 DOM 树的路径）冒泡事件。因此，子组件中触发的事件仍然会冒泡到父组件。

总结：Portal 在 DOM 结构上将子组件渲染到其他位置，但在 React 的组件树中，它仍然是父组件的子组件。这使得事件可以从子组件沿着组件树冒泡到父组件。

```jsx
const container = document.body;
const htmlString =
  '<div><div id="root"></div><div id="another-root"></div><div id="another-container"></div></div>';
container.insertAdjacentHTML('beforeend', htmlString);

import ReactDOM from 'react-dom';
class HelloFromPortal extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          alert('我爸应该知道我被点击了');
        }}
      >
        我是传送门里出来的Portal
      </div>
    );
  }
}

class AmISameAsPortal extends React.Component {
  render() {
    return (
      <div
        onClick={() => {
          alert('是不是从传送门里出来呢？ 我妈应该知道我被点击了');
        }}
      >
        是不是从传送门里出来呢？ not Portal
      </div>
    );
  }
}

export default () => {
  return (
    <div>
      <h1>父组件</h1>
      <div
        onClick={() => {
          alert('YES  Dispaly');
        }}
      >
        {/* {ReactDOM.createPortal(
          <HelloFromPortal />,
          document.getElementById('another-root'),
        )} */}
      </div>
      XXXX XXXX
      <div
        onClick={() => {
          alert('No display');
        }}
      >
        <AmISameAsPortal />
      </div>
    </div>
  );
};
```

## 空渲染

这是 React 官方文档上对 Portal 特性的介绍，值得注意的是，这里只是说“父组件以外的 DOM 节点”，但没有要求这个 DOM 节点是真的在页面上，
还是只是存在于内存中。 因此，我们可以先通过 document.createElement 在内存中创建一个元素，然后再通过 React.createPortal
把 React 子节点渲染到这个元素上，这样就实现了“空渲染”。

```js
const targetElement = document.createElement('div');
ReactDOM.createPortal(child, targetElement);
```

## 基于 createPortal 实现最简单的 keep-alive

<a href="https://zhuanlan.zhihu.com/p/214166951" target="_blank">参考</a>

```jsx
import { useState, useRef, useLayoutEffect } from 'react';
import ReactDOM from 'react-dom';
const App = (props) => {
  const [targetElement] = useState(() => document.createElement('div'));
  const containerRef = useRef();
  // 增加一个 ref 记录组件是否“被激活过”
  const activatedRef = useRef(false);
  activatedRef.current = activatedRef.current || props.active;
  useLayoutEffect(() => {
    if (props.active) {
      containerRef.current.appendChild(targetElement);
    } else {
      try {
        containerRef.current.removeChild(targetElement);
      } catch (e) {}
    }
  }, [props.active]);
  return (
    <>
      <div id="232" ref={containerRef} />
      {activatedRef.current && // 如果“被激活过”，才渲染 children
        ReactDOM.createPortal(props.children, targetElement)}
    </>
  );
};

const Children = () => {
  console.log('render');
  return (
    <div>
      <input />
    </div>
  );
};

export default () => {
  const [active, setActive] = useState(false);
  return (
    <div className="wrap-01">
      <App active={active}>
        <Children />
      </App>
      <button onClick={() => setActive(!active)}>点击</button>
    </div>
  );
};
```

## 子组件是一个 Portal，发生点击事件能冒泡到父组件吗？

React 的 Portal 通过 React 的 context 和事件冒泡的机制工作。

在理解这个问题之前，首先要了解一些基本知识：

React Context：React 使用 context 来存储组件树的一些信息，比如事件处理程序。当组件使用 Portal 时，Portal 在 React 内部仍然保持在父组件树中，即使在 DOM 上渲染到其他地方。也就是说，Portal 的 context 依然从其父组件继承而来。

DOM 事件冒泡：DOM 中的事件（例如点击事件）通常会从触发事件的元素开始，然后逐步向上冒泡到父元素，直到 document 元素。在这个过程中，事件会按照 DOM 树的层级一层层地向上传递。

React 的事件代理：React 使用事件代理模式将所有事件都代理到顶层（document 或者 root DOM 节点）进行处理。这意味着当在子组件中触发一个事件时，无论子组件是否使用了 Portal，React 都会将事件传递到其父组件，然后逐级往上冒泡，直到到达代理事件的顶层。

在 React 中，当一个子组件使用 Portal 将其内容渲染到其他 DOM 节点时，尽管在 DOM 结构上子组件不再是父组件的直接子节点，但在 React 的组件树中，子组件仍然是父组件的子节点。这意味着 React 在监听和处理事件时，会沿着组件树的路径（而不是 DOM 树的路径）冒泡事件。因此，子组件中触发的事件仍然会冒泡到父组件。

总结：Portal 在 DOM 结构上将子组件渲染到其他位置，但在 React 的组件树中，它仍然是父组件的子组件。这使得事件可以从子组件沿着组件树冒泡到父组件。
