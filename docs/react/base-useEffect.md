---
nav: React
group: 基础
toc: content
mobile: false
title: useLayoutEffect 与 useEffect
---

## useLayoutEffect 与 useEffect

useLayoutEffect 与 useEffect Hooks 类似，都是执行副作用操作。但是它是在所有 DOM 更新完成后触发。
可以用来执行一些与布局相关的副作用，比如获取 DOM 元素宽高，窗口滚动距离等等。

一般不建议使用 useLayoutEffect

- 因为同步逻辑会阻塞渲染。
- useEffect 是异步渲染

首先 useLayoutEffect 是在 DOM 更新之后，浏览器绘制之前，这样可以方便修改 DOM，获取 DOM 信息，这样浏览器只会绘制一次，如果修改 DOM 布局放在 useEffect ，那 useEffect 执行是在浏览器绘制视图之后，接下来又改 DOM ，就可能会导致浏览器再次回流和重绘。而且由于两次绘制，视图上可能会造成闪现突兀的效果。

一句话概括如何选择 useEffect 和 useLayoutEffect ：修改 DOM ，改变布局就用 useLayoutEffect ，其他情况就用 useEffect 。

```js
React.useEffect(() => {
  console.log('组件更新完成：componentDidUpdate ');
}); /* 没有 dep 依赖项 */
```

注意此时 useEffect 没有第二个参数。

没有第二个参数，那么每一次执行函数组件，都会执行该 effect。

## 执行顺序 （先子后父）

```jsx
function Son() {
  React.useEffect(() => {
    console.log('--------Son useEffect-------');
  });
  React.useLayoutEffect(() => {
    console.log('--------Son useLayoutEffect-------');
  });

  return <div>子组件</div>;
}

function Father() {
  React.useEffect(() => {
    console.log('--------Father useEffect-------');
  });
  React.useLayoutEffect(() => {
    console.log('--------Father useLayoutEffect-------');
  });

  return (
    <div>
      <div>父组件</div>
      <Son />
    </div>
  );
}

export default Father;

// --------Son useLayoutEffect-------
// --------Father useLayoutEffect-------
// --------Son useEffect-------
// --------Father useEffect-------
```

## useEffect 替代类组件生命周期

```jsx
function FunctionLifecycle(props) {
  const [num, setNum] = React.useState(0);
  React.useEffect(() => {
    /* 请求数据 ， 事件监听 ， 操纵dom  ， 增加定时器 ， 延时器 */
    console.log('组件挂载完成：componentDidMount');
    return function componentWillUnmount() {
      /* 解除事件监听器 ，清除 */
      console.log('组件销毁：componentWillUnmount');
    };
  }, []); /* 切记 dep = [] */
  React.useEffect(() => {
    console.log('props变化：componentWillReceiveProps');
  }, [props]);
  React.useEffect(() => {
    /*  */
    console.log(' 组件更新完成：componentDidUpdate ');
  });
  return (
    <div>
      <div> props : {props.number} </div>
      <div> states : {num} </div>
      <button onClick={() => setNum((state) => state + 1)}>改变state</button>
    </div>
  );
}

export default () => {
  const [number, setNumber] = React.useState(0);
  const [isRender, setRender] = React.useState(true);
  return (
    <div>
      {isRender && <FunctionLifecycle number={number} />}
      <button onClick={() => setNumber((state) => state + 1)}>
        改变props
      </button> <br />
      <button onClick={() => setRender(false)}>卸载组件</button>
    </div>
  );
};
```
