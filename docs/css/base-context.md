---
toc: content
group:
  title: 基础概念
  order: 3
title: 层叠上下文
---

> https://juejin.cn/post/6844903667175260174

“层叠上下文”和“层叠等级”是一种概念，“层叠顺序”是一种规则。

# 什么是“层叠上下文”

层叠上下文(stacking context)，是 HTML 中一个三维的概念。在 CSS2.1 规范中，每个盒模型的位置是三维的，分别是平面画布上的 X 轴，Y 轴以及表示层叠的 Z 轴。一般情况下，元素在页面上沿 X 轴 Y 轴平铺，我们察觉不到它们在 Z 轴上的层叠关系。而一旦元素发生堆叠，这时就能发现某个元素可能覆盖了另一个元素或者被另一个元素覆盖。
如果一个元素含有层叠上下文，(也就是说它是层叠上下文元素)，我们可以理解为这个元素在 Z 轴上就“高人一等”，最终表现就是它离屏幕观察者更近。

作者：长安曹公子
链接：https://juejin.cn/post/6844903667175260174
来源：稀土掘金
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

# 层叠顺序

<code>
background-color/border -> zindex<0 -> 块元素 -> float 元素 -> inline/inline-block 元素 -> zindex=0/auto -> zindex>0

z-index: auto 并没有产生层叠上下文
z-index: 0 会产生层叠上下文
</code>

# CSS3 中的属性对层叠上下文的影响

CSS3 中出现了很多新属性，其中一些属性对层叠上下文也产生了很大的影响。如下：

父元素的 display 属性值为 flex|inline-flex，子元素 z-index 属性值不为 auto 的时候，子元素为层叠上下文元素；
元素的 opacity 属性值不是 1；
元素的 transform 属性值不是 none；
元素 mix-blend-mode 属性值不是 normal`；
元素的 filter 属性值不是 none；
元素的 isolation 属性值是 isolate；
will-change 指定的属性值为上面任意一个；
元素的-webkit-overflow-scrolling 属性值设置为 touch。

CSS 绝对定位（absolute）、相对定位（relative）

# z-index 生效条件

position: relative/absolute/fixed
