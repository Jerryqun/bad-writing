---
toc: content
group:
  title: 基础概念
  order: 2
title: css原子化
---

## 概念

CSS 原子化全称：Atomic CSS，是一种以单独的类名为单位，将样式属性拆解成独立、可复用的组件，通过组合这些类名来构建样式的方法。

## TailwindCSS

TailwindCSS 是一个基于类的 CSS 框架，旨在简化网页开发过程中的样式编写。它提供了一套广泛的可复用的样式类，通过为 HTML 元素添加这些类来定义样式，避免了手动编写和管理复杂的 CSS 样式表。

TailwindCSS 其本质就是一款 PostCSS 插件。

https://tailwind.nodejs.cn/docs/line-heightt

## UnoCSS

基本概述
从官网我们可以看出，Unocss 将自己定位是一款原子化引擎，而不是像 TailwindCSS 那样只是一款 PostCSS 的插件，这说明 UnoCSS 不会依靠别的工具或者平台去执行。自己就可以完成像 TailwindCSS 那样的功能。

相比 TailwindCSS 来说 UnoCSS 扩展性和灵活性也更加强大，我们几乎不需要任何的配置就是可以完成原子化样式的生成。
