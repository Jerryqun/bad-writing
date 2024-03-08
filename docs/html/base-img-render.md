---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: 图片的加载规则
mobile: false
---

## html 和 css 中的图片加载与渲染规则是什么样的

<a href="https://fe.ecool.fun/topic/5b612b6a-3828-4cd9-9de4-b05bb36a4e3d?orderBy=updateTime&order=desc&tagId=12" target="_blank">参考</a>

Web 浏览器先会把获取到的 HTML 代码解析成一个 DOM 树，HTML 中的每个标签都是 DOM 树中的一个节点，包括 display: none 隐藏的标签，还有 JavaScript 动态添加的元素等。

浏览器会获取到所有样式，并会把所有样式解析成样式规则，在解析的过程中会去掉浏览器不能识别的样式。

浏览器将会把 DOM 树和样式规则组合在一起（DOM 元素和样式规则匹配）后将会合建一个渲染树（Render Tree），渲染树类似于 DOM 树，但两者别还是很大的：

渲染树能识别样式，渲染树中每个节点（NODE）都有自己的样式，而且渲染树不包含隐藏的节点（比如 display:none 的节点，还有`</head>`内的一些节点），因为这些节点不会用于渲染，也不会影响节点的渲染，因此不会包含到渲染树中。一旦渲染树构建完毕后，浏览器就可以根据渲染树来绘制页面了。

简单的归纳就是浏览器渲染 Web 页面大约会经过六个过程：

- 解析 HTML，构成 DOM 树
- 解析加载的样式，构建样式规则树
- 加载 JavaScript，执行 JavaScript 代码
- DOM 树和样式规则树进行匹配，构成渲染树
- 计算元素位置进行页面布局
- 绘制页面，最终在浏览器中呈现

是不是会感觉这个和我们图像加载渲染没啥关系一样，事实并非如此，因为 img、picture 或者 background-image 都是 DOM 树或样式规则中的一部分，那么咱们套用进来，图片加载和渲染的时机有可能是下面这样：

解析 HTML 时，如果遇到 img 或 picture 标签，将会加载图片
解析加载的样式，遇到 background-image 时，并不会加载图片，而会构建样式规则树
加载 JavaScript，执行 JavaScript 代码，如果代码中有创建 img 元素之类，会添加到 DOM 树中；如查有添加 background-image 规则，将会添加到样式规则树中
DOM 树和样式规则匹配时构建渲染树，如果 DOM 树节点匹配到样式规则中的 background-image，则会加载背景图片
计算元素（图片）位置进行布局
开始渲染图片，浏览器将呈现渲染出来的图片
上面套用浏览器渲染页面的机制，但图片加载与渲染还是有一定的规则。因为，页面中不是所有的<img>（或 picture）元素引入的图片和 background-image 引入的背景图片都会加载的。那么就引发出新问题了，什么时候会真正的加载，加载规则又是什么？

先概括一点：

Web 页面中不是所有的图片都会加载和渲染！

我们可以归纳为：

- `<img>、<picture>`和设置 background-image 的元素遇到 display:none 时，图片会加载，但不会渲染。
- `<img>、<picture>`和设置 background-image 的元素祖先元素设置 display:none 时，background-image 不会渲染也不会加载，而 img 和 picture 引入的图片不会渲染但会加载
- `<img>、<picture>`和 background-image 引入相同路径相同图片文件名时，图片只会加载一次
- 样式文件中 background-image 引入的图片，如果匹配不到 DOM 元素，图片不会加载
- 伪类引入的 background-image，比如:hover，只有当伪类被触发时，图片才会加载
