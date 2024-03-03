---
nav: React
group: 基础
toc: content
title: 简易版本 redux
---

## 简易版本 redux

```jsx
/**手写一个简易版本。包含中间件原理*/
/*
 中间件就是一个函数，对 store.dispatch 方法进行改造，
 在发出 Action 和执行 Reducer 这两步之间，添加了其他功能。
*/

// 中间件logger, 接收getState、dispatch
const logger = ({ getState }) => {
  return (next) => (action) => {
    console.log('====================================');
    console.log(action.type + '执行了!');
    const prevState = getState();
    console.log('prev state', prevState);
    const returnValue = next(action);
    const nextState = getState();
    console.log('next state', nextState);
    console.log('====================================');
    return returnValue;
  };
};

/**
 * thunk
 */
const thunk = ({ dispatch, getState }) => {
  return (next) => (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };
};
/**
 * applyMiddleware
 */
const applyMiddleware = (...middlewares) => {
  return (createStore) => (reducer) => {
    const store = createStore(reducer);
    let dispatch = store.dispatch;
    const midApi = {
      getState: store.getState,
      dispatch: (action, ...args) => dispatch(action, ...args),
    };
    const middlewareChain = middlewares.map((middleware) => middleware(midApi));
    dispatch = compose(...middlewareChain)(store.dispatch);
    // 返回加强版的dispatch
    return {
      ...store,
      dispatch,
    };
  };
};
/**
 * compose
 */
const compose = (...funcs) => {
  if (funcs.length === 0) {
    return (arg) => arg;
  }
  if (funcs.length === 1) {
    return funcs[0];
  }
  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args)),
  );
};
const combineReducers = () => {};
/**
 * createStore
 */
const createStore = (reducer, applyMiddleware) => {
  if (applyMiddleware) {
    return applyMiddleware(createStore)(reducer);
  }
  let state = {}; // 数据
  let listens = []; // 执行的方法队列
  const getState = () => {
    return state;
  };
  const dispatch = (action) => {
    if (typeof action === 'function') {
      state = reducer(state, action());
    } else {
      state = reducer(state, action);
    }
    listens.forEach((listen) => {
      listen(); // 调用注册事件
    });
    return action;
  };
  const subscribe = (callback) => {
    if (typeof callback === 'function') {
      listens.push(callback);
    }
    return () => {
      // 注销自己
      listens = listens.filter((listen) => listen !== callback);
    };
  };
  dispatch({ type: Math.random() }); // 内部调用一下，获取state默认值
  return {
    getState,
    dispatch,
    subscribe,
  };
};
/**
 * reducer
 */
const countReducer = (state = { count: 1 }, action) => {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1 };
    case 'MINUS':
      return { count: state.count - 1 };
    default:
      return { count: 0 };
  }
};
const store = createStore(countReducer, applyMiddleware(thunk, logger));

export default class ReduxPage extends React.Component {
  componentDidMount() {
    store.subscribe(() => {
      this.forceUpdate();
    });
  }
  add = () => {
    store.dispatch({ type: 'ADD' });
  };
  minus = () => {
    store.dispatch({ type: 'MINUS' });
  };
  render() {
    return (
      <div>
        <h3>ReduxPage</h3>
        <p>{JSON.stringify(store.getState())}</p>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}
```

## redux 状态管理器和变量挂载到 window 中有什么区别

Redux 是一种 JavaScript 应用程序状态管理器，用于管理应用程序的状态。Redux 的核心概念是 store，它包含应用程序的状态，并提供了一组操作状态的方法。Redux 可以帮助我们轻松管理复杂的状态，并提供一种统一的方式来管理应用程序的状态。

将变量挂载到 window 对象中是一种传统的 JavaScript 开发方式。它的作用是将变量绑定到全局作用域，使其在整个应用程序中都可用。这种方式在某些情况下很有用，比如当我们需要在不同的脚本文件中共享变量时，或者需要在不同的页面之间传递数据时。

然而，将变量挂载到 window 对象中也存在一些问题。由于这些变量是全局的，因此它们的命名空间可能会与其他脚本文件或库发生冲突。此外，这种方式也不太适用于大型应用程序，因为它很难管理变量的状态，也很难追踪变量的变化。

与之相比，Redux 通过 store 管理应用程序的状态，并提供一组方法来更新状态。Redux 的状态是可预测的，因为它始终遵循相同的流程和规则。此外，Redux 还提供了一些工具来帮助我们调试和追踪应用程序的状态。这些工具可以让我们更好地理解应用程序中发生的事情，从而更轻松地进行开发和调试。

综上所述，Redux 和将变量挂载到 window 对象中都可以用于管理应用程序的状态和共享变量。但是，Redux 提供了更好的状态管理和调试工具，并且可以帮助我们避免命名空间冲突和变量管理问题。
