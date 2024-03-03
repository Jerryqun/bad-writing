---
nav: React
group: 基础
toc: content
title: 在 React 中使用TypeScript
---

## 在 React 中使用 TypeScript

<a href="https://juejin.cn/post/7021674818621669389" target="_blank">参考</a>

### 类组件

类组件的定义形式有两种：React.Component<P, S={}> 和 React.PureComponent<P, S={} SS={}>，它们都是泛型接口，接收两个参数，第一个是 props 类型的定义，第二个是 state 类型的定义，这两个参数都不是必须的，没有时可以省略：

```js
interface IProps {
  name: string;
}

interface IState {
  count: number;
}

class App extends React.Component<IProps, IState> {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        {this.state.count}
        {this.props.name}
      </div>
    );
  }
}

export default App;
```

泛型

```js
import React, { PureComponent, Component } from 'react';

class App extends PureComponent<IProps, IState> {}

class App extends Component<IProps, IState> {}

// 定义组件
class MyComponent<P> extends React.Component<P> {
  internalProp: P;
  constructor(props: P) {
    super(props);
    this.internalProp = props;
  }
  render() {
    return (
    	 <span>hello world</span>
    );
  }
}

// 使用组件
type IProps = { name: string; age: number; };

<MyComponent<IProps> name="React" age={18} />;          // Success
<MyComponent<IProps> name="TypeScript" age="hello" />;  // Error

```

### 函数组件

```js
interface IProps {
  name: string;
}

const App = (props: IProps) => {
  const { name } = props;

  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default App;

// FC

interface IProps {
  name: string
}

const App: React.FC<IProps> = (props) => {
  const {name} = props;
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default App;

// 定义组件
function MyComponent<P>(props: P) {
  return (
  	<span>
    	{props}
    </span>
  );
}

// 使用组件
type IProps = { name: string; age: number; };

<MyComponent<IProps> name="React" age={18} />;          // Success
<MyComponent<IProps> name="TypeScript" age="hello" />;  // Error


```

### 使用 React.FC 声明函数组件和普通声明的区别

- React.FC 显式地定义了返回类型，其他方式是隐式推导的
- React.FC 对静态属性：displayName、propTypes、defaultProps 提供了类型检查和自动补全
- React.FC 为 children 提供了隐式的类型（ReactElement | null）。

### ReactNode

ReactNode 是一个联合类型，它可以是 string、number、ReactElement、null、boolean、ReactNodeArray。由此可知。ReactElement 类型的变量可以直接赋值给 ReactNode 类型的变量，但反过来是不行的。
类组件通过 render() 返回 ReactNode 的值。

```js
/**
 * 两者等价
 */
const jsx = <div>hello</div>;
const ele = React.createElement('div', null, 'hello');
```
