---
toc: content
group:
  title: 预编译和PostCss
  order: 3
title: 三大预编译语言
---

# sass、less 、stylus

https://fe.ecool.fun/topic/9764b6d2-511b-40e3-9430-34b62711396c?orderBy=updateTime&order=desc&tagId=0

预处理语言
扩充了 Css 语言，增加了诸如<br/>
1、变量、函数 （less）

```less
@red: #c00;
strong {
  color: @red;
}
```

2、混合（mixin）

```less
.alert {
  font-weight: 700;
}

.highlight(@color: red) {
  font-size: 1.2em;
  color: @color;
}

.heads-up {
  .alert;
  .highlight(red);
}
```

3、嵌套<br/>
4、作用域（没有全局作用域一说）<br/>
5、代码模块化<br/>

```less
@import './common';
@import './github-markdown';
```

本质上，预处理是 Css 的超集 包含一套自定义的语法及一个解析器，根据这些语法定义自己的样式规则，这些规则最终会通过解析器，编译生成对应的 Css 文件

Sass：<br/>

```sass

$bgColor: red;

.container-sass{
background-color: $bgColor;
}
```

Less：

```less
@bgColor: green;

.container-less {
  background-color: @bgColor;
}
```

Stylus：

```stylus

bgColor=blue;

.container-stylus{
background-color: bgColor;
}

```

# Css Module
CSS Modules 是一种用于模块化和局部作用域 CSS 的流行技术，它可以解决传统 CSS 的全局作用域问题。

CSS Modules 不是官方标准，而是一种构建步骤中的转换技术（通常在 webpack、vite 等打包工具中实现

.module.less/saas/css

## Css Module 高级用法
- composes 组合功能
```css
.base {
  padding: 10px;
}

.primary {
  composes: base;
  background-color: blue;
}
```

-  ：global全局作用域

```css
:global(.global-class) {
  /* 全局样式 */
}
```


