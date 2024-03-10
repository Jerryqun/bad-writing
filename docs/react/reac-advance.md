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
(flushSync 会提高优先级所以 4 先打印，2 和 4 会合并更新 所以只打印一次 4，最后打印 1)
