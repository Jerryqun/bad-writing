---
toc: content
group:
  title: 基础概念
  order: 2
title: 隐藏元素
---

## 隐藏元素的方法

- opacity:0 和 filter: opacity(0)、rgba(x,x,x,0) 、clip-path: circle(0)：本质上是将元素的透明度将为 0，就看起来隐藏了，但是依然占据空间且可以交互

- visibility:hidden: 与上一个方法类似的效果，占据空间，但是不可以交互了

- overflow:hidden: 这个只隐藏元素溢出的部分，但是占据空间且不可交互

- display:none: 这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局

- z-index:-9999: 原理是将层级放到底部，这样就被覆盖了，看起来隐藏了

- transform: scale(0,0): 平面变换，将元素缩放为 0，但是依然占据空间，但不可交互

- color: transparent; color: 文本颜色透明，文本内容不会被看到

## 隐藏元素方法对事件的影响

- 设置元素 opacity:0 之后，也可以触发点击事件<br/>
- visibility:hidden 的元素无法触发其点击事件<br/>
- dispaly:none 元素不占据空间<br/>

## display: none 与 visibility: hidden 的区别

- 修改常规流中元素的display通常会造成文档重排。修改visibility属性只会造成本元素的重绘
- 读屏器不会读取display:none;元素内容；会读取visibility:hidden;元素内容
- display:none;会让元素完全从渲染树中消失，渲染的时候不占据任何空间；visibility:hidden;不会让元素从渲染树消失，渲染时元素继续占据空间，只是内容不可见
- display:none;是非继承属性，子孙节点消失由于元素从渲染树消失造成，通过修改子孙节点属性无法显示；visibility:hidden;是继承属性，子孙节点消失由于继承了hidden，通过设置visibility:visible;可以让子孙节点显式
#
