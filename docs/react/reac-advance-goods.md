---
nav: React
group: 进阶
toc: content
title: React 性能优化
---

## React 性能优化

1. 卸载组件前进行清理操作 如定时任务 监听事件等
2. PureComponent 和 memo （纯组件，进行浅比较，比较引用类型中引用地址是否一致或者基本类型的值是否一致）
3. shouldComponentUpdate
4. 组件、页面懒加载 （根据条件进行组件懒加载）
5. 使用 Fragment 避免额外的标签（<></>）
6. 不要使用内联函数定义（对于类组件，对于函数组件是把函数定义在组件之外）
7. 在构造函数中绑定 this 指向 不要在行内进行绑定（类组件中使用箭头函数 this 不会出问题，此时 函数会被定义为类的实例对象上的属性，如果这个类组件被多次调用也是影响性能）
8. 减少内联样式的使用，内联样式会被编译为 js 代码，通过 js 执行去把样式规则映射到元素上
9. 优化条件渲染，减少挂载和卸载组件的频率
10. 避免重复的无限渲染（比如在 render 方法中调用 setState）
11. ErrorBoundary 为应用程序创建错误边界
12. 优化依赖项大小

### 使用 shouldComponentUpdate、PureComponent 优化

shouldComponentUpdate(简称 SCU) 允许我们手动地判断是否要进行组件更新，根据组件的应用场景设置函数的合理返回值能够帮我们避免不必要的更新

React 默认：父组件有更新，子组件则无条件也更新！！！
shouldComponentUpdate 默认返回 true，即 react 默认重新渲染所有子组件

```js
shouldComponentUpdate(newProp,newState,newContext){
    if(newProp.propsNumA !== this.props.propsNumA || newState.stateNumA !== this.state.stateNumA ){
        return true /* 只有当 props 中 propsNumA 和 state 中 stateNumA 变化时，更新组件  */
    }
    return false
}
//  从源码中看出 shouldComponentUpdate 的权重，会大于 PureComponent。

function checkShouldComponentUpdate() {
  if (typeof instance.shouldComponentUpdate === 'function') {
    return instance.shouldComponentUpdate(
      newProps,
      newState,
      nextContext,
    ); /* shouldComponentUpdate 逻辑 */
  }
  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
    return (
      !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
    );
  }
}

```

- PureComponent(实现 props 和 state 的浅比较)和 React.memo(PureComponent 的函数组件形式)

- 不可变值 immutable.js

- 使用 key 来帮助 React 识别列表中所有子组件的最小变化

- useMemo 和 useCallBack

- 必要时通过改变 CSS 样式隐藏显示组件，而不是通过条件判断显示隐藏组件。

- 使用 Suspense 和 lazy 进行懒加载
- 避免内联函数和对象
  避免在渲染方法中直接定义内联函数和对象，因为这样会在每次渲染时创建新的函数和对象实例，触发子组件的不必要渲染。
- 虚拟列表
  对于长列表和大量数据的渲染，使用虚拟列表库（如 react-window 或 react-virtualized）来只渲染可见部分，提高滚动效率。双重虚拟滚动

  单向虚拟滚动指的是仅在一个方向（垂直或水平）上实现虚拟滚动，即在任何给定时刻只渲染视口内的元素，这大大减少了 DOM 元素的数量，提升了性能。

  双重虚拟滚动则同时在两个方向（垂直和水平）上实现了虚拟滚动。这意味着无论用户是向下滚动浏览更多的行，还是向右滚动查看更多的列，渲染在屏幕上的仅仅是用户能看到的那部分内容。同时，非视口内的行和列不会被渲染在 DOM 中。

- 使用 useLayoutEffect 替代 useEffect 用于 DOM 操作
- 持久化状态管理
  使用工具如 redux-persist 来缓存应用状态，减少初始化时的数据加载时间。

- 网络请求优化
  缓存请求结果，避免不必要的网络请求，使用懒加载和预加载策略。
- 服务端渲染（SSR）或静态生成
  使用服务端渲染或静态生成来提高首次加载性能，尤其对于 SEO 很有帮助。
- Web Workers
  对于复杂的计算任务，可以将它们移到 Web Worker 中执行，避免阻塞主线程

### shallowEqual

第一步，首先会直接比较新老 props 或者新老 state 是否相等。如果相等那么不更新组件。  
第二步，判断新老 state 或者 props ，有不是对象或者为 null 的，那么直接返回 false ，更新组件。  
第三步，通过 Object.keys 将新老 props 或者新老 state 的属性名 key 变成数组，判断数组的长度是否相等，如果不相等，证明有属性增加或者减少，那么更新组件。  
第四步，遍历老 props 或者老 state ，判断对应的新 props 或新 state ，有没有与之对应并且相等的（这个相等是浅比较），如果有一个不对应或者不相等，那么直接返回 false ，更新组件。 到此为止，浅比较流程结束， PureComponent 就是这么做渲染节流优化的。

### PureComponent 注意事项

PureComponent 可以让组件自发的做一层性能上的调优，但是，父组件给是 PureComponent 的子组件绑定事件要格外小心，避免两种情况发生：

1 避免使用箭头函数。不要给是 PureComponent 子组件绑定箭头函数，因为父组件每一次 render ，如果是箭头函数绑定的话，都会重新生成一个新的箭头函数， PureComponent 对比新老 props 时候，因为是新的函数，所以会判断不相等，而让组件直接渲染，PureComponent 作用终会失效。

```js
class Index extends React.PureComponent {}

export default class Father extends React.Component {
  render = () => <Index callback={() => {}} />;
}
```

2 PureComponent 的父组件是函数组件的情况，绑定函数要用 useCallback 或者 useMemo 处理。这种情况还是很容易发生的，就是在用 class + function 组件开发项目的时候，如果父组件是函数，子组件是 PureComponent ，那么绑定函数要小心，因为函数组件每一次执行，如果不处理，还会声明一个新的函数，所以 PureComponent 对比同样会失效，如下情况：

```js
class Index extends React.PureComponent {}
export default function () {
  const callback =
    function handerCallback() {}; /* 每一次函数组件执行重新声明一个新的callback，PureComponent浅比较会认为不相等，促使组件更新  */
  return <Index callback={callback} />;
}
```

改进

```js
export default function () {
  const callback = React.useCallback(function handerCallback() {}, []);
  return <Index callback={callback} />;
}
```

渲染 demo

```jsx
/* 纯组件本身 */
class Children extends React.PureComponent {
  state = {
    name: 'alien',
    age: 18,
    obj: {
      number: 1,
    },
  };
  changeObjNumber = () => {
    const { obj } = this.state;
    obj.number++;
    this.setState({ obj });
  };
  render() {
    console.log('组件渲染');
    return (
      <div>
        <div> 组件本身改变state </div>
        <button onClick={() => this.setState({ name: 'alien' })}>
          state相同情况
        </button>
        <button onClick={() => this.setState({ age: this.state.age + 1 })}>
          state不同情况
        </button>
        <button onClick={this.changeObjNumber}>state为引用数据类型时候</button>
        <div>hello,my name is alien,let us learn React!</div>
      </div>
    );
  }
}
/* 父组件 */
export default function Home() {
  const [numberA, setNumberA] = React.useState(0);
  const [numberB, setNumberB] = React.useState(0);
  return (
    <div>
      <div> 父组件改变props </div>
      <button onClick={() => setNumberA(numberA + 1)}>改变numberA</button>
      <button onClick={() => setNumberB(numberB + 1)}>改变numberB</button>
      <Children number={numberA} />
    </div>
  );
}
```
