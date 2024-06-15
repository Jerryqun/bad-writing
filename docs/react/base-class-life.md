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
  // 计算形成一个 snapShot 传递给 componentDidUpdate的第三个参数 。保存一次更新前的信息。
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

## React 为什么要废弃 componentWillMount、componentWillReceiveProps、componentWillUpdate 这三个生命周期钩子？它们有哪些问题呢？React 又是如何解决的呢？

React 在 16.3 版本中：

将 componentWillMount、componentWillReceiveProps、componentWillUpdate 三个生命周期钩子加上了 UNSAFE 前缀，变为:

UNSAFE_componentWillMount、UNSAFE_componentWillReceiveProps 和 UNSAFE_componentWillUpdate。
并引入了一个新的生命周期钩子：getDerivedStateFromProps。  
并在 17.0 以及之后的版本中：

删除了 componentWillMount、componentWillReceiveProps、componentWillUpdate 这三个生命周期钩子。
不过 UNSAFE_componentWillMount、UNSAFE_componentWillReceiveProps 和 UNSAFE_componentWillUpdate 还是可以用的。
我们知道 React 的更新流程分为：render 阶段和 commit 阶段。

componentWillMount、componentWillReceiveProps、componentWillUpdate 这三个生命周期钩子都是在 render 阶段执行的。

在 fiber 架构被应用之前，render 阶段是不能被打断的。当页面逐渐复杂之后，就有可能会阻塞页面的渲染，于是 React 推出了 fiber 架构。在应用 fiber 架构之后，低优先级任务的 render 阶段可以被高优先级任务打断。

而这导致的问题就是：在 render 阶段执行的生命周期函数可能被执行多次。

componentWillMount、componentWillReceiveProps、componentWillUpdate 这三个生命周期钩子，如果我们在其中执行一些具有副作用的操作，例如发送网络请求，就有可能导致一个同样的网络请求被执行多次，这显然不是我们想看到的。

而 React 又没法强迫开发者不去这样做，因为怎么样使用 React 是开发者的自由，所以 React 就新增了一个静态的生命周期 getDerivedStateFromProps，来解决这个问题。

用一个静态函数 getDerivedStateFromProps 来取代被废弃的几个生命周期函数，这样开发者就无法通过 this 获取到组件的实例，也不能发送网络请求以及调用 this.setState。它就是强制开发者在 render 之前只做无副作用的操作，间接强制我们无法进行这些不合理不规范的操作，从而避免对生命周期的滥用。
