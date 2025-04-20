---
nav: Js
group: 基础概念
toc: content
title: adoptNode
---

## document.adoptNode

`document.adoptNode()` 方法在浏览器的 Document Object Model (DOM) 中是一个非常有用的方法，它用于将一个节点及其子节点从一个文档（或文档片段）移动到另一个文档中。这个方法会返回被 "领养" 的节点。

使用 `adoptNode()` 方法可以保证你将节点从一个文档移动到另一个文档时不会出现问题，比方说，当你尝试将一个节点从一个 iframe 或一个由 `document.implementation.createDocument()` 创建的独立的 document 对象移动到主文档中时，这个方法特别有用。

这是 `document.adoptNode()` 方法的基本语法：

```js
var adoptedNode = document.adoptNode(externalNode);
```

其中，`externalNode` 是另一个文档中的节点，`adoptedNode` 是采用后在当前文档中的节点。

下面是一段示例代码，演示了如何使用 `document.adoptNode()`：

```js
// 假设我们有两个文档：doc1 和 doc2
var doc1 = document;
var doc2 = document.implementation.createHTMLDocument('New Document');

// 在 doc2 中创建一个新的 <div> 元素
var newDiv = doc2.createElement('div');
newDiv.textContent = 'Hello, World!';

// 本来 newDiv 属于 doc2，现在我们将其领养到 doc1
var adoptedDiv = doc1.adoptNode(newDiv);

// 现在 adoptedDiv 已经成为 doc1 的一部分，我们可以把它加入到主文档的 body 中
document.body.appendChild(adoptedDiv);
```

在使用 `adoptNode()` 方法后，原始节点（`externalNode`）从它所属的文桥中移除，而且不再有任何父节点。而采用后的节点（`adoptedNode`）可以被视为当前文档的一部分并且可以被插入到当前文档的 DOM 树中。

`adoptNode()` 方法通常与 `importNode()` 方法一起使用，但两者之间有一些区别：

- `importNode()` 不会从原始文档中移除节点，它创建节点的一个副本，并可以选择是否复制子节点。
- `adoptNode()` 直接转移节点，不会留下任何副本，并且总是连同子节点一起移动。
