---
nav: React
group: 基础
toc: content
mobile: false
title: Hooks Ref
---

## Hooks Ref

我们不能在函数组件上使用 ref 属性，因为函数组件没有实例

使用 useImperativeHandle 自定义传给父元素的 ref
为了防止错用/滥用导致 ref 失控，React 默认情况下，不能跨组件传递 ref  
为了破除这种限制，可以使用 forwardRef。  
为了减少 ref 对 DOM 的滥用，可以使用 useImperativeHandle 限制 ref 传递的数据结构。

### 栗子

```js
const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  // 函数组件自定义暴露给父组件ref对象，这样更安全避免外部修改删除dom
  useImperativeHandle(ref, () => ({
    funcFocus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

const App = () => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.funcFocus();
  }, []);
  return <MyInput ref={inputRef} />;
};
```

### useImperativeHandle 接受三个参数：

- 第一个参数 ref : 接受 forWardRef 传递过来的 ref 。
- 第二个参数 createHandle ：处理函数，返回值作为暴露给父组件的 ref 对象。
- 第三个参数 deps :依赖项 deps，依赖项更改形成新的 ref 对象。
