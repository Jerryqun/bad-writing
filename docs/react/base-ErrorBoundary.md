c

## ErrorBoundary

<a target="_blank" href="https://fe.ecool.fun/topic/d27c3517-ab5a-49f5-91e9-fd973eb1cd11?orderBy=updateTime&order=desc&tagId=13">react 中怎么捕获异常？</a>

EerrorBoundary 是 16 版本出来的，之前的 15 版本有 unstable_handleError。

```js
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  componentDidCatch(error, info) {
    // Display fallback UI
    this.setState({ hasError: true });
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>;
```

## 考虑直接使用开源库

可以考虑直接使用开源库：react-error-boundary，对开发者来说，只需要关心出现错误后的处理。

```js
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const ui = (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <ComponentThatMayError />
  </ErrorBoundary>
);
```

遗憾的是，error boundaries 并不会捕捉这些错误：

- 事件处理程序
- 异步代码 (e.g. setTimeout or requestAnimationFrame callbacks)
- 服务端的渲染代码
- error boundaries 自己抛出的错误
