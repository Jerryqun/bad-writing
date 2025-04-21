---
nav: Js
group: 进阶
toc: content
title: Shadow DOM
---

## Shadow DOM

Shadow DOM 是 Web 组件规范的一部分，它允许开发者将一个隐藏的、独立的 DOM 附加到一个元素上。这个独立的 DOM 称为 "阴影 DOM"（Shadow DOM），它可以包含元素、样式和脚本，但这些内容不会影响主文档（Light DOM）的内容，同时也不会受到主文档的影响。

Shadow DOM 的关键特性包括：

### 封装（Encapsulation）

Shadow DOM 提供了强大的封装能力，使得开发者可以构建独立的组件，而不用担心组件内部的样式和脚本会干扰到页面上的其他元素。组件内的样式是局部的，不会泄露到外部，外部的样式也不会渗透到组件内部。

### DOM 隔离

与主文档的 DOM 分离，Shadow DOM 允许开发者创建一个单独的 DOM 树。这个 DOM 树与主文档的其他部分相隔离，可以包含自己的元素和事件处理逻辑。

### 样式隔离

在 Shadow DOM 中定义的 CSS 样式是独立的，不会与外部的样式发生冲突。同样，外部的样式也不能直接影响 Shadow DOM 中的元素，除非使用特定的 CSS 选择器（如 `::slotted`）。

### JavaScript 隔离

JavaScript 代码可以针对 Shadow DOM 中的元素进行操作，而不会影响到主文档的元素。事件冒泡到 Shadow DOM 的边界时也会有所不同，事件不会泄露到外部，尽管它们可以被特别配置来穿透 Shadow DOM 边界。

### 使用 Shadow DOM

要创建 Shadow DOM，你可以使用主 DOM 中元素的 `attachShadow` 方法，并传入一个配置对象，通常包含 `{ mode: 'open' }` 或 `{ mode: 'closed' }`。`'open'` 模式允许外部 JavaScript 通过 `element.shadowRoot` 属性访问 Shadow DOM，而 `'closed'` 模式则不允许。

```js
let hostElement = document.querySelector('#host');
let shadowRoot = hostElement.attachShadow({ mode: 'open' });

shadowRoot.innerHTML = `<style>
  p { color: red; }
</style>
<p>Hello from Shadow DOM!</p>`;
```

在实践中，Shadow DOM 让你可以构建真正的封装组件，这对于大型应用和微前端架构尤其重要。Shadow DOM 使得每个组件都可以“安全”地拥有自己的标记，样式和行为，而不必担心全局污染或样式冲突。
