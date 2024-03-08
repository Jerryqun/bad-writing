---
nav: Js
group: 基础概念
toc: content
title: 冒泡和捕获的具体过程
---

## 冒泡和捕获的具体过程

dom 事件流：
事件发生时会在元素节点之间按照特定的顺序传播，这个传播过程就叫做 DOM 事件流。
注意 ⚠️：JS 代码只能执行捕获或者冒泡其中一个阶段，要么是捕获要么是冒泡

冒泡：target => body => html => document
捕获：document => html => body => target
事件委托就是利用了冒泡，页面中的事件流也分为三个阶段：事件捕获 => target => 事件冒泡

首先，事件流处于捕获阶段，从外到内触发 dom 绑定的捕获事件，对同一个 DOM，通过 addEventListener 绑定的捕获函数会按绑定的顺序触发。
然后，事件进入到目标阶段，这个阶段不区分捕获和冒泡事件，所有事件按照绑定的顺序触发。
最后，事件进入到冒泡阶段，这个阶段按照绑定的顺序触发绑定的冒泡事件，各个 DOM 的事件是从内到外触发的

## 触摸事件的响应顺序

ontouchstart -> ontouchmove -> ontouchend -> onclick

## e.target 和 e.currentTarget 有什么区别？

e.target：触发事件的元素  
e.currentTarget：绑定事件的元素
