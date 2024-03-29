---
nav: React
group: 基础
toc: content
mobile: false
title: createPortal
---

## ReactDOM.createPortal

在以前， react 中所有的组件都会位于 #app 下，组件默认会按照既定层级嵌套渲染，而使用 Portals 提供了一种脱离 #app 的组件.因此 Portals 适合脱离文档流(out of flow) 的组件（让组件渲染到父组件以外），
特别是 position: absolute 与 position: fixed 的组件。比如模态框，通知，警告，goTop 等

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
