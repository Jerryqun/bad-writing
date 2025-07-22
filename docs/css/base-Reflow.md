---
toc: content
group:
  title: 基础概念
  order: 2
title: 回流重绘
---

## 回流 (Reflow)

<a href="https://juejin.cn/post/6844903569087266823">参考</a>

回流必将引起重绘，重绘不一定会引起回流。

当 Render Tree 中部分或全部元素的尺寸、结构、或某些属性发生改变时，浏览器重新渲染部分或全部文档的过程称为回流。

回流场景  
1、页面首次渲染  
2、浏览器窗口大小发生改变  
3、元素尺寸或位置发生改变  
4、元素内容变化（文字数量或图片大小等等）  
5、元素字体大小变化  
6、添加或者删除可见的 DOM 元素  
7、激活 CSS 伪类（例如：:hover）  
8、查询某些属性或调用某些方法

一些常用且会导致回流的属性和方法：

```js
clientWidth、clientHeight、clientTop、clientLeft、offsetWidth、offsetHeight、offsetTop、
offsetLeft、scrollWidth、scrollHeight、scrollTop、scrollLeft

scrollIntoView()  
scrollIntoViewIfNeeded()  
getComputedStyle()  
getBoundingClientRect()  
scrollTo()  
```

有时即使仅仅回流一个单一的元素，它的父元素以及任何跟随它的元素也会产生回流。现代浏览器会对频繁的回流或重绘操作进行优化，浏览器会维护一个队列，把所有引起回流和重绘的操作放入队列中，如果队列中的任务数量或者时间间隔达到一个阈值的，浏览器就会将队列清空，进行一次批处理，这样可以把多次回流和重绘变成一次。你访问以下属性或方法时，浏览器会立刻清空队列：

以上属性和方法都需要返回最新的布局信息，因此浏览器不得不清空队列，触发回流重绘来返回正确的值。因此，我们在修改样式的时候，最好避免使用上面列出的属性，他们都会刷新渲染队列 如果要使用它们，最好将值缓存起来。

## 重绘 (Repaint)

当页面中元素样式的改变并不影响它在文档流中的位置时（例如：color、background-color、visibility 等），浏览器会将新样式赋予给元素并重新绘制它，这个过程称为重绘。

visibility:hidden 即使不可见的元素也会占据页面上的空间 与 display:none 相反

## 优化

CSS

避免使用 table 布局。  
尽可能在 DOM 树的最末端改变 class。  
避免设置多层内联样式。  
将动画效果应用到 position 属性为 absolute 或 fixed 的元素上。  
避免使用 CSS 表达式（例如：calc()）。

JavaScript

避免频繁操作样式，最好一次性重写 style 属性，或者将样式列表定义为 class 并一次性更改 class 属性。  
避免频繁操作 DOM，创建一个 documentFragment，在它上面应用所有 DOM 操作，最后再把它添加到文档中。  
也可以先为元素设置 display: none，操作结束后再把它显示出来。因为在 display 属性为 none 的元素上进行的 DOM 操作不会引发回流和重绘。  
避免频繁读取会引发回流/重绘的属性，如果确实需要多次使用，就用一个变量缓存起来。  
对具有复杂动画的元素使用绝对定位，使它脱离文档流，否则会引起父元素及后续元素频繁回流。
