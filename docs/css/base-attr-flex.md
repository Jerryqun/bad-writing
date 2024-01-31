---
toc: content
group:
  title: 常用属性
  order: 2
title: flex 1
---

# flex 1

https://juejin.cn/post/6971010647492395044?searchId=2023120520375076560F4741B057041E52

首先 flex: 1; 等同于 flex: 1 1 0%;
flex-grow: 1; flex-shrink: 1; flex-basis: 0%;

相当于可扩大，可缩小 flex-basis 为 0%

flex-grow 定义项目的放大比例 默认为 0，即如果存在剩余空间，也不放大

flex-shrink 定义了项目的缩小比例，默认为 1，即如果空间不足，该项目将缩小

flex-basis 给上面两个属性分配多余空间之前, 计算项目是否有多余空间, 默认值为 auto, 即项目本身的大小

flex: auto
flex: auto, 对应的是 1 1 auto, 相当于可扩大，可缩小，flex-basis 为 auto

flex: 1 不管内容多少，一般都是平分空间，空间大小都一致
而 flex: auto 是根据内容的大小来分，不是均分的（除非内容都是一样，才均分）
