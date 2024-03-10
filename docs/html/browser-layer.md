---
nav: Html
group:
  title: 浏览器
  order: 1
toc: content
title: 图层
mobile: false
---

## 图层

<a href="https://juejin.cn/post/7051926604666109988" target="_blank">图层</a>

一般来说，可以把普通文档流看成一个图层。特定的属性可以生成一个新的图层。不同的图层渲染互不影响，所以对于某些频繁需要渲染的建议单独生成一个新图层，提高性能。但也不能生成过多的图层，会引起反作用

1、根元素  
2、有 z-index 是负值的子元素  
3、有 3D 转换  
4、position：fixed  
5、与其他元素可能重叠  
6、will-change 样式的值为 opacity、transform、transform-style、perspective、filter、backdrop-filter 这 6 个之一  
7、video、iframe 标签
