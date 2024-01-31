---
toc: content
group:
  title: 常用属性
  order: 2
title: content-visibility
---

https://zhuanlan.zhihu.com/p/528538686

# 利用 content-visibility: hidden 优化展示切换性能

1、content-visibility: visible：默认值，没有任何效果，相当于没有添加 content-visibility，元素的渲染与往常一致。<br/>
2、content-visibility: hidden：与 display: none 类似，用户代理将跳过其内容的渲染。（这里需要注意的是，跳过的是内容的渲染）<br/>
3、content-visibility: auto：如果该元素不在屏幕上，并且与用户无关，则不会渲染其后代元素。<br/>
