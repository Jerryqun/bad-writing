---
toc: content
group:
  title: 常用属性
  order: 2
title: object-fit
---

# https://www.runoob.com/cssref/pr-object-fit.html

object-fit 属性指定元素的内容应该如何去适应指定容器的高度与宽度。
object-fit 一般用于 img 和 video 标签，一般可以对这些元素进行保留原始比例的剪切、缩放或者直接进行拉伸等

fill ： 默认，不保证保持原有的比例，内容拉伸填充整个内容容器(图片会变形)。

contain： 保持原有尺寸比例。内容被缩放。

cover： 保持原有尺寸比例。但部分内容可能被剪切。

scale-down： 保持原有尺寸比例。内容的尺寸与 none 或 contain 中的一个相同，取决于它们两个之间谁得到的对象尺寸会更小一些。
