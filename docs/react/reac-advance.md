---
nav: React
group: 进阶
toc: content
title: flushSync
---

## flushSync

React-dom 提供了 flushSync ，flushSync 可以将回调函数中的更新任务，
放在一个较高的优先级中。React 设定了很多不同优先级的更新任务。
如果一次更新任务在 flushSync 回调函数内部，那么将获得一个较高优先级的更新。

```jsx
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  handleClick = () => {
    this.setState({
      number: 2,
    });
    setTimeout(() => {
      this.setState({ number: 1 });
    });
    this.setState({ number: 2 });
    ReactDOM.flushSync(() => {
      this.setState({ number: 3 });
    });
    this.setState({ number: 4 });
  };
  render() {
    console.log(this.state.number);
    return <button onClick={this.handleClick}>点击 控制台查看结果</button>;
  }
}

export default App;
```

上面 demo 打印 341  
(flushSync 会提高优先级所以 3 先打印，2 和 4 会合并更新 所以只打印一次 4，最后打印 1)

## flushSync里面是合并更新的

```jsx
import ReactDOM from 'react-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  handleClick = () => {
    ReactDOM.flushSync(() => {
      this.setState({ number: 3 });
      this.setState({ number: 4 });
    });
  };
  render() {
    console.log(this.state.number); // render 一次 直接打印4
    return <button onClick={this.handleClick}>点击 控制台查看结果</button>;
  }
}

export default App;
```

## 什么是react的合并更新的

点击按钮render只会打印一次

```jsx
import React,{ useState } from 'react';

export default () => {
  const [state1, setState1] = useState(1);
  const [state2, setState2] = useState(2);
  console.log('render.......');

  return (
    <div
      onClick={() => {
        setState1(pre => pre + 1);
        setState2(pre => pre + 1);
      }}
    >
      {state1}-{state2}
    </div>
  );
};


```

