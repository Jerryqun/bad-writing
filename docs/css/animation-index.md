---
toc: content
group: 前端动画
order: 2
title: 前端动画
---

## 前端动画

主要分类为 css 动画和 js 动画，如下细分：

### css 动画 (最优)

- transition 过渡动画
- animation 直接动画（搭配@keyframes）

### js 动画

- setInterval 或 setTimeout 定时器（比如不停地更改 dom 元素的位置，使其运动起来）
- canvas 动画，搭配 js 中的定时器去运动起来（canvas 只是一个画笔，然后我们通过定时器会使用这个画笔去画画-动画）
- requestAnimationFrame 动画（js 动画中的较好方案）

另有 svg 动画标签，不过工作中这种方式是比较少的，这里不赘述
