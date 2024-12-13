---
toc: content
group: 前端动画
order: 2
title: 动画分类
---

## 动画分类

主要分类为 css 动画和 js 动画，如下细分：

### css 动画 (最优)

- transition 过渡动画
- animation 直接动画（搭配@keyframes）

### js 动画

- setInterval 或 setTimeout 定时器（比如不停地更改 dom 元素的位置，使其运动起来）
- canvas 动画，搭配 js 中的定时器去运动起来（canvas 只是一个画笔，然后我们通过定时器会使用这个画笔去画画-动画）
- requestAnimationFrame 动画（js 动画中的较好方案）

另有 svg 动画标签，不过工作中这种方式是比较少的

## css 中的 animation、transition、transform 有什么区别

### animation：

animation 属性允许创建一个在指定时间内播放的动画效果，可以包括多个关键帧。
通过指定关键帧动画的名称、持续时间、动画方式（timing function）、延迟时间、播放次数等来控制动画的效果。
animation 属性可以实现更复杂的动画效果，例如循环动画、无限次播放等。

### transition（过渡）

属性用于指定在元素状态改变时，要以何种方式过渡到新状态。  
通过指定过渡的属性、持续时间、动画方式（timing function）、延迟时间等来控制过渡效果。  
transition 属性适用于元素从一种状态平滑过渡到另一种状态，例如颜色、大小、位置等属性的变化。

语法：transition: property duration timing-function delay;

不足：

1. 需要事件触发，所以没法在网页加载时自动发生
2. 是一次性的，不能重复发生，除非一再触发
3. 只能定义开始状态和结束状态，不能定义中间状态，也就是说只有两个状态

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  transition: width 2s ease;
  -webkit-transition: width 2s ease; /* Safari */
}

div:hover {
  width: 300px;
}
```

### transform（转换）

属性用于对元素进行变形，例如平移、旋转、缩放、倾斜等。
通过 transform 属性，可以改变元素的变形属性来创建动画效果。
transform 属性通常与 transition 或 animation 结合使用，使得变形动画更加平滑。

### 总结：

- animation 属性用于创建复杂的动画序列
- transition 属性用于在状态变化时平滑过渡
- transform 属性用于对元素进行变形
- 这三种属性通常结合使用，以实现丰富的动画效果。

### 如果需要手动写动画，你认为最小时间间隔是多久，为什么

多数显示器默认频率是 60Hz，即 1 秒刷新 60 次，所以理论上最小间隔为 1/60＊1000ms ＝ 16.7ms。
