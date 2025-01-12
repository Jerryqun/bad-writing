---
toc: content
group:
  title: 预编译和PostCss
  order: 3
title: PostCss
---

## PostCss 与 CSS 预处理器的区别

https://www.PostCss.com.cn/

## 预处理器

Less/Sass/Stylus
[ 点击查看](/css/sass-less-stylus)

## PostCss

在原生 CSS 基础上增加更多表达力、可维护性、可读性更强的语言特性

PostCss 并没有定义一门新的语言，而是与 @babel/core 类似，只是实现了一套将 CSS 源码解析为 AST 结构，并传入 PostCss 插件做处理的流程框架，具体功能都由插件实现。

预处理器之于 CSS，就像 TypeScript 与 JavaScript 的关系；而 PostCss 之于 CSS，则更像 Babel 与 JavaScript。

PostCss 与预处理器并非互斥关系，我们完全可以在同一个项目中同时使用两者

## Webpack 能处理 CSS 吗？如何实现？

Webpack 在裸奔的状态下，是不能处理 CSS 的，Webpack 本身是一个面向 JavaScript 且只能处理 JavaScript 代码的模块化打包工具；  
Webpack 在 loader 的辅助下，是可以处理 CSS 的。

如何用 Webpack 实现对 CSS 的处理：  
Webpack 中操作 CSS 需要使用的两个关键的 loader：css-loader 和 style-loader

css-loader：导入 CSS 模块，对 CSS 代码进行编译处理；  
style-loader：创建 style 标签，把 CSS 内容写入标签。

在实际使用中，css-loader 的执行顺序一定要安排在 style-loader 的前面。因为只有完成了编译过程，才可以对 css 代码进行插入；若提前插入了未编译的代码，那么 webpack 是无法理解这坨东西的，它会无情报错。
