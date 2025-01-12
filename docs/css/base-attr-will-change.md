---
toc: content
group:
  title: 属性
  order: 2
title: will-change
---

## will-change

CSS 的 will-change 属性是一种告知浏览器某个元素将要进行动画处理的方式。它用于提前告知浏览器该元素的某些特定属性可能会发生变化。通过这种方式，浏览器可以做出一些优化措施，比如提前分配缓冲区，以避免动画发生时的重绘（repaint）和重排（reflow），从而提高页面性能。

这个属性的目的是提高那些进行动画处理的元素的性能，但它不应该滥用。不必要或过度使用 will-change 可能会导致浏览器消耗更多资源，反而影响性能。

will-change 属性可以接受多个值，代表预期将要改变的属性。例如：

auto：默认值，浏览器不对元素做任何预优化。  
scroll-position：表示元素的滚动位置有可能改变。  
contents：表示元素的内容有可能改变。  
opacity：表示元素的不透明度有可能改变。  
transform：表示元素的变换有可能改变。  
你可以指定任何 CSS 属性作为 will-change 的值，但最常见的是 opacity 和 transform，因为这两个属性的变化可以由硬件加速处理，从而获得更流畅的动画体验。

```css
.box {
  will-change: transform;
}
```
