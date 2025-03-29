---
nav: React
group: 基础
toc: content
mobile: false
title: useMemo与useCallback
---

## useMemo 与 useCallback

<a target="_blank" href="https://juejin.cn/post/7165338403465068552">参考</a>

```js
React.useCallback(function helloWorld() {}, []);
// ...功能相当于:
React.useMemo(() => function helloWorld() {}, []);
```

useCallback 第一个参数就是缓存的内容，useMemo 需要执行第一个函数，返回值为缓存的内容，比起 useCallback ， useMemo 更像是缓存了一段逻辑，或者说执行这段逻辑获取的结果。那么对于缓存 element 用 useCallback 可以吗，答案是当然可以了。

### useMemo 原理：

useMemo 会记录上一次执行 create 的返回值，并把它绑定在函数组件对应的 fiber 对象上，只要组件不销毁，缓存值就一直存在，但是 deps 中如果有一项改变，就会重新执行 create ，返回值作为新的值记录到 fiber 对象上。

如上讲了利用 element 的缓存，实现了控制子组件不必要的渲染，究其原理是什么呢？

原理其实很简单，上述每次执行 render 本质上 createElement 会产生一个新的 props，这个 props 将作为对应 fiber 的 pendingProps ，在此 fiber 更新调和阶段，React 会对比 fiber 上老 oldProps 和新的 newProp （ pendingProps ）是否相等，如果相等函数组件就会放弃子组件的调和更新，从而子组件不会重新渲染；如果上述把 element 对象缓存起来，上面 props 也就和 fiber 上 oldProps 指向相同的内存空间，也就是相等，从而跳过了本次更新。

### 案例

```js
const functionOne = function () {
  return 5;
};
const functionTwo = function () {
  return 5;
};

console.log(functionOne === functionTwo); // false

React.useCallback(function helloWorld() {}, []);

// ...功能相当于:
React.useMemo(() => function helloWorld() {}, []);
```

### 自定义 hooks

useToggle 源码

```js
export const useToggle = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => setValue((v) => !v), []);
  return [value, toggle];
};
```

### 内部 context providers

```js
const AuthContext = React.createContext({});

function AuthProvider({ user, status, forgotPwLink, children }) {
  const memoizedValue = React.useMemo(() => {
    return {
      user,
      status,
      forgotPwLink,
    };
  }, [user, status, forgotPwLink]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
```

## React.memo 用法

```js
// React.memo: 第二个参数 返回 true 组件不渲染 ， 返回 false 组件重新渲染。和 shouldComponentUpdate 相反，shouldComponentUpdate : 返回 true 组件渲染 ， 返回 false 组件不渲染。
// memo 当二个参数 compare 不存在时，会用浅比较原则处理 props ，相当于仅比较 props 版本的 pureComponent 。
// memo 同样适合类组件和函数组件。
// memo 可以理解为包了一层的高阶组件，它的阻断更新机制，是通过控制下一级 children ，也就是 memo 包装的组件，是否继续调和渲染，来达到目的的。

function TextMemo(props) {
  console.log('子组件渲染');
  return <div>hello,world</div>;
}

const controlIsRender = (pre, next) => {
  return (
    pre.number === next.number ||
    (pre.number !== next.number && next.number > 5)
  ); // number不改变或number 改变但值大于5->不渲染组件 | 否则渲染组件
};

const NewTexMemo = React.memo(TextMemo, controlIsRender);

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      num: 1,
    };
  }
  render() {
    const { num, number } = this.state;
    return (
      <div>
        <div>
          改变num：当前值 {num}
          <button onClick={() => this.setState({ num: num + 1 })}>num++</button>
          <button onClick={() => this.setState({ num: num - 1 })}>num--</button>
        </div>
        <div>
          改变number： 当前值 {number}
          <button onClick={() => this.setState({ number: number + 1 })}>
            number ++
          </button>
          <button onClick={() => this.setState({ number: number - 1 })}>
            number --{' '}
          </button>
        </div>
        <NewTexMemo num={num} number={number} />
      </div>
    );
  }
}

export default Index;
```

仅当 data.a 变化时才更新引用

```js
const parent = () => {
  const [data, setData] = useState({});
  const memoizedData = useMemo(() => ({ ...data }), [data.a]); // 仅当 data.a 变化时才更新引用
  return <Child data={memoizedData} />;
};
```
