---
toc: content
group:
  title: 属性
  order: 2
title: content-visibility
---

# 利用 content-visibility: hidden 优化展示切换性能

<a target='_blank' href='https://zhuanlan.zhihu.com/p/528538686s'>参考</a>

1、content-visibility: visible：默认值，没有任何效果，相当于没有添加 content-visibility，元素的渲染与往常一致。<br/>
2、content-visibility: hidden：与 display: none 类似，用户代理将跳过其内容的渲染。（这里需要注意的是，跳过的是内容的渲染）<br/>
3、content-visibility: auto：如果该元素不在屏幕上，并且与用户无关，则不会渲染其后代元素(实现虚拟列表)。<br/>

`设置 content-visibility: hidden 之后，消失的只是添加了该元素的 div 的子元素消失不见，而父元素本身及其样式，还是存在页面上的。
其元素的子元素将被隐藏，但是，它的渲染状态将会被缓存。所以，当 content-visibility: hidden 被移除时，用户代理无需重头开始渲染它和它的子元素。`

因此，如果我们将这个属性应用在一些一开始需要被隐藏，但是其后在页面的某一时刻需要被渲染，或者是一些需要被频繁切换显示、隐藏状态的元素上，其渲染效率将会有一个非常大的提升。
