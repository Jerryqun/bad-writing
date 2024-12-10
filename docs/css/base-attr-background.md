---
toc: content
group:
  title: 属性片段
  order: 2
title: background
---

## background-origin

background-origin 决定了背景图片从盒子的什么位置开始渲染

1.background-origin: padding-box(默认值) 从盒子的 padding 位置开始

2.background-origin: content-box 从盒子的内容区域位置开始

3.background-origin: border-box 从盒子的边框区域位置开始

## background-clip

background-clip 决定了背景颜色从盒子的什么位置开始渲染

background-clip: border-box（从盒子边距开始）  
background-clip: content-box（从盒子内容开始）  
background-clip: padding-box（默认值，从盒子 padding 开始）

## background-attachment

scroll（默认值）：背景图像会随着网页内容的滚动而滚动。  
fixed：背景图像会固定在视口中，即使网页内容滚动，背景图像仍然保持在同一位置。  
local：背景图像将相对于包含它的元素的内容滚动。如果该元素的内容可滚动，背景图像将随之滚动。

## position:fixed

position:fixed;的元素会被移出正常文档流，并不为元素预留空间，而是通过指定元素相对于屏幕视口（viewport）的位置来指定元素位置，元素的位置在屏幕滚动时不会改变。fixed 属性会创建新的层叠上下文。

当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。
