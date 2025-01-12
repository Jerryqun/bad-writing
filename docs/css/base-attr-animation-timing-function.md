---
toc: content
group:
  title: 属性
  order: 2
title: animation
---

## animation

使用 animation 简写、顺序不是固定的

### animation-timing-function

指定动画将如何完成一个周期。

默认值: ease

linear 动画从头到尾的速度是相同的。<br/>
ease 默认。动画以低速开始，然后加快，在结束前变慢。<br/>
ease-in 动画以低速开始。<br/>
ease-out 动画以低速结束。<br/>
ease-in-out 动画以低速开始和结束。<br/>
cubic-bezier(n,n,n,n) 在 cubic-bezier 函数中自己的值。可能的值是从 0 到 1 的数值。<br/>

animation-timing-function 指定动画将如何完成一个周期。<br/>

### animation-fill-mode

animation-fill-mode 有以下可能的值：

none: 默认值。动画不会将任何样式应用于目标元素，动画前后都不保留。  
forwards: 动画完成后，目标元素将保持动画最后一帧的状态。  
backwards: 目标元素将在动画开始之前应用动画的第一帧的状态。  
both: 动画将遵循 forwards 和 backwards 的规则，即在动画开始之前和结束之后都套用相应的样式。  
除了上面的方法之外，如果动画是无限循环的话（animation-iteration-count: infinite;），那么动画的状态将会一直保持，因为动画始终没有结束。但如果你想要在一次动画执行完成后保留样式，forwards 是正确的选择。

### animation-duration

动画完成一个周期所需的时间。

### animation-delay

动画开始前的延迟时间
