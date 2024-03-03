---
nav: React
group: 基础
toc: content
mobile: false
title: props children
---

## props children

```js
/**
 
props + children 模式 在 React 中非常常用，尤其对一些优秀开源组件库。
比如 react-router 中的 Switch 和 Route ， antd 中的 Form 和 FormItem。
首先来看看 prop + children 的几个基本情况。

① props 插槽组件

<Container>
    <Children>
</Container>

上述可以在 Container 组件中，通过 props.children 属性访问到 Children 组件，为 React element 对象。

作用：

1 可以根据需要控制 Children 是否渲染。

2 像上一节所说的， Container 可以用 React.cloneElement 强化 props (混入新的 props )，或者修改 Children 的子元素。


② render props模式

<Container>
   { (ContainerProps)=> <Children {...ContainerProps}  /> }
</Container>
这种情况，在 Container 中， props.children 属性访问到是函数，并不是 React element 对象，针对这种情况，
像下面这种情况下 children 是不能直接渲染的，直接渲染会报错。

改成如下方式，就可以了。

function  Container(props) {
    const  ContainerProps = {
        name: 'alien',
        mes:'let us learn react'
    }
     return  props.children(ContainerProps)
}

这种方式作用是：

1 根据需要控制 Children 渲染与否。
2 可以将需要传给 Children 的 props 直接通过函数参数的方式传递给执行函数 children 。

 */

// 下面为混合模式的处理方式

const Children = (props) => (
  <div>
    <div>hello, my name is {props.name} </div>
    <div> {props.mes} </div>
  </div>
);

function Container(props) {
  const ContainerProps = {
    name: 'alien',
    mes: 'let us learn react',
  };
  return props.children.map((item) => {
    if (React.isValidElement(item)) {
      // 判断是 react elment  混入 props
      return React.cloneElement(
        item,
        { ...ContainerProps },
        item.props.children,
      );
    } else if (typeof item === 'function') {
      return item(ContainerProps);
    } else return null;
  });
}

const Index = () => {
  return (
    <Container>
      <Children />
      {(ContainerProps) => <Children {...ContainerProps} name={'haha'} />}
    </Container>
  );
};
```
