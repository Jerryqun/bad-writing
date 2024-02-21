---
toc: content
group:
  title: 预编译和PostCss
  order: 3
title: PostCss
---

# PostCss 与 CSS 预处理器的区别

https://www.PostCss.com.cn/

## 预处理器

Less/Sass/Stylus
[ 点击查看](/css/sass-less-stylus)

## PostCss

在原生 CSS 基础上增加更多表达力、可维护性、可读性更强的语言特性

PostCss 并没有定义一门新的语言，而是与 @babel/core 类似，只是实现了一套将 CSS 源码解析为 AST 结构，并传入 PostCss 插件做处理的流程框架，具体功能都由插件实现。

预处理器之于 CSS，就像 TypeScript 与 JavaScript 的关系；而 PostCss 之于 CSS，则更像 Babel 与 JavaScript。

PostCss 与预处理器并非互斥关系，我们完全可以在同一个项目中同时使用两者
