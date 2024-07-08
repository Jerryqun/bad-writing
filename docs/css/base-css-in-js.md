---
toc: content
group:
  title: 基础概念
  order: 2
title: css in js
---

# css in js

## 优点

1、让 css 代码拥有独立的作用域，防止样式冲突  
2、让组件可移植性变强，减少文件数量  
3、让样式具有动态功能  
4、让组件更具可重用性

## 缺点

1、增加项目复杂性  
2、可阅读性变弱
3、配合 postcss-px-to-viewport 坐移动端适配的时候，styled 中的 px 不能转换为 vw

## 库

Emotion  
styled-components
