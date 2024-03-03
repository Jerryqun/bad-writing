---
toc: content
group:
  title: 基础概念
  order: 2
title: BFC
---

## 概念

块级格式化上下文，是一个独立的渲染区域，让处于 BFC 内部的元素与外部的元素相互隔离，使内外元素的定位不会相互影响。
一个 BFC 包含创建该上下文元素的所有子元素，但不包括创建了新 BFC 的子元素的内部元素
一个元素不能同时存在于两个 BFC 中。

块盒（block box）
当元素的 CSS 属性 display 为 block，list-item 或 table 时，它是块级元素 block-level；

行内盒（inline box）
当元素的 CSS 属性 display 的计算值为 inline，inline-block 或 inline-table 时，称它为行内级元素；

## 三个定位方案

- 常规流（当 position 为 static 或 relative，并且 float 为 none 时会触发常规流）
- 浮动（它位于当前行的开头或末尾；这导致常规流环绕在它的周边，除非设置 clear 属性；）
- 绝对定位（如果元素的属性 position 为 absolute 或 fixed，它是绝对定位元素，对于 position: absolute，元素定位将相对于最近的一个 relative、fixed 或 absolute 的父元素，如果没有则相对于 body

## BFC 的创建方法

- 浮动
- 绝对定位元素 absolute 或 fixed
- display: inline-block
- 表格单元格 display: table-cell
- overflow 的值不为 visible 的元素 display: table-caption
- 元素的 display: flex 或 inline-flex

## BFC 的效果

- 内部的盒会在垂直方向一个接一个排列（可以看作 BFC 中有一个的常规流）；
- 处于同一个 BFC 中的元素相互影响，可能会发生 margin collapse；
- BFC 就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然；
- 计算 BFC 的高度时，考虑 BFC 所包含的所有元素，连浮动元素也参与计算；
- 每个元素的 margin box 的左边，与容器块 border box 的左边相接触(对于从左往右的格式化，否则相反)。即使存在浮动也是如此；
- 浮动盒区域不叠加到 BFC 上（浮动元素一样占据空间）；
- 属于同一个 BFC 的两个相邻 Box 的 margin 会发生重叠

这么多性质有点难以理解，但可以作如下推理来帮助理解：html 的根元素就是<html>，而根元素会创建一个 BFC，创建一个新的 BFC 时就相当于在这个元素内部创建一个新的<html>，子元素的定位就如同在一个新<html>页面中那样，而这个新旧 html 页面之间时不会相互影响的。
上述这个理解并不是最准确的理解，甚至是将因果倒置了（因为 html 是根元素，因此才会有 BFC 的特性，而不是 BFC 有 html 的特性），但这样的推理可以帮助理解 BFC 这个概念。

## 使用场景

- 防止 margin 重叠（塌陷）
- 清除内部浮动
- 自适应多栏布局

## 外边距重叠

- 相邻兄弟元素之间
- 相邻父子元素之间

外边距重叠如何计算

- 两个正数取最大的数
- 两个负数取绝对值最大的数
- 一正一负取两者之和
