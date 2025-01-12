---
toc: content
group:
  title: 基础概念
  order: 2
title: 隐藏元素
---

## 隐藏元素的方法

1、opacity:0 和 filter: opacity(0)、rgba(x,x,x,0) 、clip-path: circle(0)：本质上是将元素的透明度将为 0，就看起来隐藏了，但是依然占据空间且可以交互

2、visibility:hidden: 与上一个方法类似的效果，占据空间，但是不可以交互了

3、overflow:hidden: 这个只隐藏元素溢出的部分，但是占据空间且不可交互

4、display:none: 这个是彻底隐藏了元素，元素从文档流中消失，既不占据空间也不交互，也不影响布局

5、z-index:-9999: 原理是将层级放到底部，这样就被覆盖了，看起来隐藏了

6、transform: scale(0,0): 平面变换，将元素缩放为 0，但是依然占据空间，但不可交互

7、color: transparent; color: 文本颜色透明，文本内容不会被看到

## 隐藏元素方法对事件的影响

1、设置元素 opacity:0 之后，也可以触发点击事件<br/>
2、visibility:hidden 的元素无法触发其点击事件<br/>
3、dispaly:none 元素不占据空间<br/>
