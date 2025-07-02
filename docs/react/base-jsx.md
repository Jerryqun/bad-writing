---
nav: React
group: 基础
toc: content
mobile: false
title: jsx
---

## jsx

什么是 jsx

jsx 是一种 JavaScript 的语法扩展，用来描述用户界面，  
在 react 代码执行之前，babel 会将 jsx 编译为 react 的 api

## Babel 解析 JSX 流程

1、解析（Parsing）：
输入的 JSX 代码首先被解析器（如 @babel/parser）处理，它读取代码字符串并将其转换成一个抽象语法树（AST）。这个 AST 是一个深度嵌套的对象，代表了代码的结构和内容。

2、转换（Transforming）：
接下来，Babel 将遍历 AST 并应用各种转换插件，这些插件可以操作和改变 AST 的结构。对于 JSX 代码，Babel 使用名为 @babel/plugin-transform-react-jsx 的插件，将 JSX 元素转换成 React 创建元素的调用表达式，通常是 React.createElement。

例如， JSX 代码：

```js
const element = <h1>Hello, world!</h1>;
```

经过转换后的代码会变成：

```js
const element = React.createElement('h1', null, 'Hello, world!');
```

3、生成（Code Generation）：
转换后的 AST 需要再次被转换回可执行的 JavaScript 代码。这一步骤由代码生成器（如 @babel/generator）完成，它遍历转换后的 AST 并生成新的代码字符串。

4、输出：
最后，生成的 JavaScript 代码字符串输出，替换原有的 JSX 代码。这段代码现在可以被浏览器解析或进一步被打包工具（如 Webpack）处理。

## React.createElement

`React.createElement()` 是 React 中用于创建元素的方法。在使用 JSX 的情况下，你很少需要直接调用这个方法，因为 JSX 为你做了这些工作。然而，了解它是如何工作的对于理解 React 可能是有帮助的。

`React.createElement()`返回的就是 vdom 对象

### `React.createElement()` 参数

`React.createElement()` 接受至少三个参数，和额外的参数如果有的话。这些参数分别是：

1. **type**：

   - 这是一个字符串（对于 DOM 元素）或一个 React 组件（可以是类组件或函数组件）。
   - 对于字符串，它表示 HTML 或 SVG 的标签名，例如 `'div'`、`'span'`、`'svg'`。
   - 对于组件，它可以是组件类本身或是函数组件的引用。

2. **props**：

   - 这是一个对象，包含了传递给元素的属性（或“props”）。如果没有属性要传递，通常使用 `null` 或 `{}`。
   - 对于 DOM 元素，属性名称应为 DOM API 定义的属性，如 `className`、`style` 等。
   - 对于自定义组件，属性可以是任意你希望传递给组件的值。

3. **children**：
   - 自第三个参数开始，所有的参数都被视为子元素。
   - 你可以提供任意数量的子元素，它们可以是更多的 React 元素，也可以是字符串或数字（作为文本节点），甚至是布尔值或 `null`（这些会被忽略）。

### 示例

将 JSX 写法转换为 `React.createElement()` 调用的例子：

```js
// JSX 写法
const element = <div className="greeting">Hello, world!</div>;

// 等价的 React.createElement() 调用
const element = React.createElement(
  'div',
  { className: 'greeting' },
  'Hello, world!',
);
```

对于嵌套元素的情况：

```js
// JSX 写法
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>World</h2>
  </div>
);

// 等价的 React.createElement() 调用
const element = React.createElement(
  'div',
  null,
  React.createElement('h1', null, 'Hello!'),
  React.createElement('h2', null, 'World'),
);

// vdom 对象
// console.log('element', element)  =>
// {
//   "type": "div",
//   "key": "1",
//   "ref": null,
//   "props": {
//       "className": "12",
//       "children": "12s"
//   },
//   "_owner": null,
//   "_store": {}
// }
```

### 注意事项

- 当在 JSX 中使用 JavaScript 表达式时，例如 `{props.name}`，在 `React.createElement` 中，你直接传递值，不需要使用 `{}`。
- 忽略的值（`null`、`undefined`、`true`、`false`）允许你基于条件轻松包含或排除子元素，而不必使用三元运算符或逻辑与操作符。

`React.createElement()` 是构建 React 元素的基础，在使用 JSX 时，它被隐式调用，作为 JSX 语法糖的一部分。理解这个方法的工作原理有助于更深刻地理解 React，并帮助你在没有 JSX 的环境中工作。

## React.cloneElement

该方法接收三个参数，注意参数的数据类型：  
第一个参数为必选参数：要克隆的 React 元素。这是一个有效的 React 元素，通常是通过 JSX 或 React.createElement 创建的。

第二个参数为可选参数：一个对象，包含想要在克隆的元素上设置或覆盖的新 props。传递给此参数的 props 会合并到克隆元素的原始 props 中，如果有相同的键，则新的 props 会优先。

第三个参数为可选参数：新的子元素来替换克隆元素的子元素。如果提供了这个参数，它会覆盖原始元素的子元素。你可以传递多个子元素作为额外的参数

```jsx
const MyComponent = () => {
  const original = <div className="original">Original Text</div>;

  // 克隆元素，并添加新的 props 和 children
  const cloned = React.cloneElement(
    original,
    { className: 'cloned', style: { color: 'red' } },
    'Cloned Text',
  );

  return (
    <div>
      {original}
      {cloned}
    </div>
  );
};

export default MyComponent;
```
