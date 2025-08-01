---
nav: Js
group: 基础概念
toc: content
title: 事件冒泡和捕获
---

## 事件冒泡和捕获

dom 事件流：
事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程就叫做 DOM 事件流。
注意 ⚠️：JS 代码只能执行捕获或者冒泡其中一个阶段，要么是捕获要么是冒泡

冒泡：target => body => html => document  
捕获：document => html => body => target  
事件委托就是利用了冒泡，页面中的事件流也分为三个阶段：`事件捕获 => target => 事件冒泡`

首先，事件流处于捕获阶段，从外到内触发 dom 绑定的捕获事件，对同一个 DOM，通过 addEventListener 绑定的捕获函数会按绑定的顺序触发。
然后，事件进入到目标阶段，这个阶段不区分捕获和冒泡事件，所有事件按照绑定的顺序触发。
最后，事件进入到冒泡阶段，这个阶段按照绑定的顺序触发绑定的冒泡事件，各个 DOM 的事件是从内到外触发的

执行顺序： outer capture => inner capture => button capture => button bubble => inner bubble => outer bubble

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <div id="outer" style="padding: 30px; background: #fee">
      Outer
      <div id="inner" style="padding: 30px; background: #cfc">
        Inner
        <button id="btn">Click me</button>
      </div>
    </div>
  </body>
  <script>
    const outer = document.getElementById('outer');
    const inner = document.getElementById('inner');
    const btn = document.getElementById('btn');

    // 冒泡阶段监听
    outer.addEventListener('click', () => console.log('outer bubble'));
    inner.addEventListener('click', () => console.log('inner bubble'));
    btn.addEventListener('click', () => console.log('button bubble'));

    // 捕获阶段监听
    outer.addEventListener('click', () => console.log('outer capture'), true);
    inner.addEventListener('click', () => console.log('inner capture'), true);
    btn.addEventListener('click', () => console.log('button capture'), true);

 
  </script>
</html>

```

## 触摸事件的响应顺序

ontouchstart -> ontouchmove -> ontouchend -> onclick

## e.target 和 e.currentTarget 有什么区别？

`e.target：触发事件的元素 `
`e.currentTarget：绑定事件的元素`

## 不会冒泡的事件有哪些

在 JavaScript 和浏览器中，绝大多数事件都会按照 DOM 事件流模型冒泡，即事件会从目标元素开始向上冒泡到它的父元素，并最终到达 document 元素。然而，也有一些事件是不会冒泡的。这些事件通常直接在目标元素上触发，并不会向上传播。

以下是一些不会冒泡的事件的示例：

focus：当元素获得焦点时触发，例如通过键盘或鼠标点击。这是一个不会冒泡的事件。

blur：当元素失去焦点时触发。这也是一个不会冒泡的事件。

focusin：与 focus 类似，但会在元素或其父元素上触发（冒泡），因此这个事件是特例。

focusout：与 blur 类似，但会在元素或其父元素上触发（冒泡），因此这个事件是特例。

load：当图像、音频、视频或其他资源加载完成时触发。例如，在 img 元素上触发的 load 事件不会冒泡。

unload：当页面即将被导航离开时触发。这通常用于执行清理工作，也不会冒泡。

stop：通常与 media 元素相关，例如 audio 或 video 元素。这是在媒体播放停止时触发的事件。

readystatechange：当 document 的 readyState 改变时触发。这通常在页面加载时使用。

scroll：当元素滚动时触发。这个事件在某些浏览器中可能会冒泡，但在其他浏览器中通常不会冒泡。

这些事件通常直接在目标元素上触发，并且不会传播到父元素上。

## focus 与 focusin 和 focusout 的区别

### 1. `focus`

- **不冒泡**：`focus`事件不会在 DOM 树中冒泡。这意味着，如果你将一个`focus`事件监听器附加到一个父元素上，当子元素获得焦点时，这个事件不会触发。`focus`事件只能在获得焦点的元素上直接触发。
- 用于**监听元素获得焦点**的情况。

### 2. `focusin`

- **冒泡**：与`focus`不同，`focusin`事件在 DOM 树中冒泡。这使你可以在父元素上设置事件监听来捕捉其任何子元素获得焦点的情况，这对于处理具有许多输入字段的表单等场景非常便利。
- 否则具有与`focus`相同的用途，主要用于捕捉元素获得焦点的事件，但具有冒泡的特性。

### 3. `focusout`

- **冒泡**：`focusout`事件也会在 DOM 树中冒泡。这意味着，你可以在父元素上监听其任何子元素失去焦点的事件。
- 主要用于监听元素失去焦点的情况。

### 使用场景比较

- 当你需要在具体的元素上监听获得或失去焦点的事件时，使用`focus`和`blur`（`focus`的失去焦点对应事件）是合适的，因为你关注的是具体某个元素的焦点状态，不需要事件冒泡。
- 当你需要在一个父元素上处理多个子元素的焦点变化事件时（例如，整个表单中任何一个输入字段获得或失去焦点），`focusin`和`focusout`事件更加适合，因为它们能够利用冒泡特性来简化事件监听的设置。

简而言之，`focusin`和`focusout`提供了`focus`和`blur`事件的所有功能，并添加了事件冒泡的特性，这在处理复杂的 DOM 结构时非常有用。

## JS 中怎么阻止事件冒泡和默认事件

event.stopPropagation()方法  
这是阻止事件的冒泡方法，不让事件向 document 上蔓延，但是默认事件任然会执行，当你掉用这个方法的时候，如果点击一个连接，这个连接仍然会被打开

event.preventDefault()方法  
这是阻止默认事件的方法，比如在 a 标签的绑定事件上调用此方法，链接则不会被打开，但是会发生冒泡，冒泡会传递到上一层的父元素；

return false  
这个方法比较暴力，他会同事阻止事件冒泡也会阻止默认事件；写上此代码，连接不会被打开，事件也不会传递到上一层的父元素；可以理解为 `return false 就等于同时调用了 event.stopPropagation()和 event.preventDefault()`


## stopImmediatePropagation

stopImmediatePropagation 同样也能实现阻止事件，但是还能阻止该事件目标执行别的注册事件。

注意 addEventListener的第三个参数相同才能阻止生效

```js
node.addEventListener(
  'click',
  event => {
    event.stopImmediatePropagation()
    console.log('冒泡')
  },
  false
)
// 点击 node 只会执行上面的函数，该函数不会执行
node.addEventListener(
  'click',
  event => {
    console.log('冒泡1 ')
  },
  false
)
 
```


