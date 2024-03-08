---
nav: React
group: 自定义hook
toc: content
title: useTimeout
---

<a href="https://fe.ecool.fun/topic/0295b261-f56a-41fd-847b-7f6947284279?orderBy=updateTime&order=desc&tagId=0" target="_blank">参考</a>

## useTimeout 解决了什么问题

我们原本的目的是在页面渲染完 3s 后修改一下 state，但是你会发现当 state+1 后，触发了页面的重新渲染，就会重新有一个 3s 的定时器出现来给 state+1，既而变成了每 3 秒+1。

```jsx
function useTimeout(callback, delay) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay !== null) {
      setTimeout(() => {
        ref.current();
      }, delay);
    }
  }, [delay]);
}
function App() {
  const [state, setState] = React.useState(1);
  const fn = () => setState(state + 1);
  // useTimeout(fn, 3000);
  setTimeout(() => {
    setState(state + 1);
  }, 3000);
  return <div> {state} </div>;
}

export default App;
```

### hooks 的闭包缺陷

count 发生了变化，但是 3s 后 setTimout 的 count 却还是 0

使用 useTimeout 可解决

```jsx
function useTimeout(callback, delay) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay !== null) {
      setTimeout(() => {
        ref.current();
      }, delay);
    }
  }, [delay]);
}

function App() {
  const [count, setCount] = React.useState(0);
  const [countTimeout, setCountTimeout] = React.useState(0);
  // useTimeout(() => {
  //   setCountTimeout(count);
  // }, 3000);
  React.useEffect(() => {
    setTimeout(() => {
      setCountTimeout((currentCount) => {
        return currentCount + 1;
      });
    }, 3000);
    setCount(5);
  }, []);
  return (
    <div>
      Count: {count}
      <br />
      setTimeout Count: {countTimeout}
    </div>
  );
}
export default App;
```

### useState 函数式更新解决闭包问题

```js
import { Button } from 'antd';
const Demo = () => {
  const [state, setState] = React.useState(0);
  React.useEffect(() => {
    //计算时state 的值为0
    // setTimeout(() => setState(state + 2), 5000);
    //计算时state 的值为最新值
    setTimeout(() => setState((state) => state + 2), 5000);
  }, []);
  return <Button onClick={() => setState(state + 1)}>{state}</Button>;
};

export default Demo;
```

## useTimeout 函数

```js
function useTimeout(callback, delay) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = callback;
  }, [callback]);

  React.useEffect(() => {
    if (delay !== null) {
      setTimeout(() => {
        ref.current();
      }, delay);
    }
  }, [delay]);
}
```
