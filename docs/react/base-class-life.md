---
nav: React
group: 基础
toc: content
mobile: false
title: 类组件生命周期
---

## 初始化阶段

执行顺序：  
constructor -> getDerivedStateFromProps / componentWillMount -> render -> componentDidMount

```js
class EEE extends React.Component {
  // 1
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      a: 1,
      name: '',
    };
  }
  // 2
  // 从更新后的props中获取State，它让组件在 props 发生改变时更新它自身的内部 state
  // 在渲染 DOM 元素之前会调用，并且在初始挂载及后续更新时都会被调用。
  // 返回修改后的state
  // nextProps 父组件新传递的 props ;
  // prevState 传入 getDerivedStateFromProps 待合并的 state 。
  // 类的静态属性 访问不到this
  // 只要组件更新，就会执行 getDerivedStateFromProps，不管是 props 改变，还是 setState ，或是 forceUpdate 。

  static getDerivedStateFromProps(nextProps, preState) {
    console.log('nextProps', nextProps);
    console.log('preState', preState);
    console.log('getDerivedStateFromProps');
    return {
      name: nextProps.name,
    };
  }
  // 2
  // 有getDerivedStateFromProp或getSnapshotBeforeUpdate时不会执行
  componentWillMount() {
    console.log('componentWillMount');
  }
  // 4
  // 可以做一些关于 DOM 操作，比如基于 DOM 的事件监听器。
  // 对于初始化向服务器请求数据，渲染视图，这个生命周期也是蛮合适的。
  componentDidMount() {
    console.log('componentDidMount');
  }

  //3
  render() {
    console.log('render');
    return (
      <div>
        {this.state.name}
        {this.state.a}
      </div>
    );
  }
}
export default () => {
  const ref1 = React.useRef(null);
  return (
    <EEE name="cq" ref={ref1}>
      hello
    </EEE>
  );
};
```

## 更新阶段

执行顺序：

componentWillReceiveProps( props 改变) / getDerivedStateFromProps -> shouldComponentUpdate ->
componentWillUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate

```js
class EEE extends React.Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      a: 1,
      name: '',
    };
  }
  // 1
  // 从更新后的props中获取State，它让组件在 props 发生改变时更新它自身的内部 state
  // 在渲染 DOM 元素之前会调用，并且在初始挂载及后续更新时都会被调用。
  // 返回修改后的

  static getDerivedStateFromProps(nextProps, preState) {
    // console.log('nextProps', nextProps)
    // console.log('preState', preState)
    console.log('getDerivedStateFromProps');
    return {
      name: nextProps.name,
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  // 1
  // 没有getDerivedStateFromProps时才会执行
  // componentWillReceiveProps 可以用来监听父组件是否执行render,父组件render执行子组件componentWillReceiveProps就会执行
  // componentWillReceiveProps 可以用来接受 props 改变，组件可以根据props改变，来决定是否更新 state ，因为可以访问到 this ，
  // 所以可以在异步成功回调(接口请求数据)改变 state 。
  // 这个是 getDerivedStateFromProps 不能实现的。

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  // 可以做一些关于 DOM 操作，比如基于 DOM 的事件监听器。
  // 对于初始化向服务器请求数据，渲染视图，这个生命周期也是蛮合适的。
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 2
  // 返回值决定是否继续执行 render 函数
  // getDerivedStateFromProps 的返回值可以作为新的 state ，传递给 shouldComponentUpdate 。
  // shouldComponentUpdate 不写return 相当于返回fasle 默认返回fasle
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  // 3 未执行 不知道为啥
  // 可以意味着在更新之前，此时的 DOM 还没有更新。
  // 在这里可以做一些获取 DOM 的操作。就比如说在一次更新中，
  // 保存 DOM 之前的信息(记录上一次位置)。但是 React 已经出了新的生命周期 getSnapshotBeforeUpdate 来代替
  //  UNSAFE_componentWillUpdate。
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 5
  // 获取更新前的快照，可以进一步理解为 获取更新前 DOM 的状态
  // getSnapshotBeforeUpdate 这个生命周期意义就是配合componentDidUpdate 一起使用，
  // 计算形成一个 snapShot 传递给 componentDidUpdate 。保存一次更新前的信息。
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }
  // 6
  // componentDidUpdate 生命周期执行，此时 DOM 已经更新，可以直接获取 DOM 最新状态。
  // 这个函数里面如果想要使用 setState ，一定要加以限制，否则会引起无限循环。
  // 接受 getSnapshotBeforeUpdate 保存的快照信息。 第三个参数
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 4
  render() {
    console.log('render');
    return (
      <div>
        {this.state.name}
        {this.state.a}
      </div>
    );
  }
}
export default () => {
  const ref1 = React.useRef(null);
  const [name, setMame] = React.useState('cq');
  return (
    <div>
      <EEE name={name} ref={ref1}></EEE>
      <button
        onClick={() => {
          setMame('ww');
        }}
      >
        点击
      </button>
    </div>
  );
};

// ｜--------问与答---------｜
// 问：当 props 不变的前提下， PureComponent 组件能否阻止 componentWillReceiveProps 执行？

// 答案是否定的，componentWillReceiveProps 生命周期的执行，和纯组件没有关系，
// 纯组件是在 componentWillReceiveProps 执行之后浅比较 props 是否发生变化。
// 所以 PureComponent 下不会阻止该生命周期的执行。

// ｜--------end---------｜
```

## 销毁阶段

componentWillUnmount

```js
class EEE extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      name: '',
    };
  }

  // componentWillUnmount 是组件销毁阶段唯一执行的生命周期，主要做一些收尾工作
  // 比如清除一些可能造成内存泄漏的定时器，延时器，或者是一些事件监听器。
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        {this.state.name}
        {this.state.a}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  c = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div>
        {this.state.show && <EEE />}
        <button onClick={this.c}>点击</button>
      </div>
    );
  }
}

export default App;
```

## React v16.0 之后为什么要删除 Will 相关生命周期

一、被删除的生命周期:  
componentWillReceiveProps  
componentWillMount  
componentWillUpdate

删除原因:

二、这些生命周期方法经常被误解和巧妙地误用
它们的潜在误用可能会在异步渲染中带来更多问题, 所以如果现有项目中使用了这几个生命周期, 将会在控制台输出如下警告! 大致意思就是这几个生命周期将在 18.x 彻底下线, 如果一定要使用可以带上 UNSAFE 前缀

补充: 现在, React 推荐将原本在 componentWillMount 中的网络请求移到 componentDidMount 中, 至于这样会不会导致请求被延迟发出影响用户体验, React 团队是这么解释的: componentWillMount、render 和 componentDidMount 方法虽然存在调用先后顺序, 但在大多数情况下, 几乎都是在很短的时间内先后执行完毕, 几乎不会对用户体验产生影响。
