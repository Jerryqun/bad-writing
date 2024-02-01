---
toc: content
group:
  title: 常用属性
  order: 2
title: width:100%
---

# width:100%

属性 width:100%；使用情况主要有以下几种<br/>
1、子元素必须是块级元素才能实现宽度的继承<br/>
2、父级元素设置了宽度<br/>

当父级元素和子元素只是一般嵌套关系的时候，子元素继承父元素的宽。<br/>
当子元素浮动时，也可以完整的继承父元素的宽。<br/>

当子元素为 position: absolute;的时候，
这个时候子元素会逐级向上寻找是否有 position: relative;的元素。
如果有，则继承该元素；如果没有则宽度是相对于 body 而言。

<br/>
当子元素为 position: relative;时，width:100%是基于父级元素，而不是找 position: relative;的元素
<br/>

当元素被设置了 postion: fixed 的时候，是一直基于 body 的，其宽度就是 body 的宽度
补充一点：不论 box-sizing 设置为 border-box 还是 content-box,width 继承的都是‘父’级元素的内容区的宽度
<br/>

当 padding、margin 取值为百分比时，百分比的值是以父元素的 width 为参考
