---
toc: content
group:
  title: 属性
  order: 2
title: position-sticky
---

# sticky

position 属性中最有意思的就是 sticky 了，设置了 sticky 的元素，在屏幕范围（viewport）时该元素的位置并不受到定位影响（设置是 top、left 等属性无效），当该元素的位置将要移出偏移范围时，定位又会变成 fixed，根据设置的 left、top 等属性成固定位置的效果。

特点<br />
1、该元素并不脱离文档流，仍然保留元素原本在文档流中的位置。<br />
2、当元素在容器中被滚动超过指定的偏移值时，元素在容器内固定在指定位置。亦即如果你设置了 top: 50px，那么在 sticky 元素到达距离相对定位的元素顶部 50px 的位置时固定，不再向上移动。<br />
3、元素固定的相对偏移是相对于离它最近的具有滚动框的祖先元素，如果祖先元素都不可以滚动，那么是相对于 viewport 来计算元素的偏移量<br />

position: absolute; 绝对定位 是相对于父元素的 content 而言，与 padding border 和 margin 无关
