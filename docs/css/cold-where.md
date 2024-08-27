---
toc: content
group:
  title: 进阶
  order: 3
title: :where
---

# 基础知识

https://blog.csdn.net/p1967914901/article/details/129000514

1. 简介
   :where() 是一个 CSS 伪类函数选择器，它接受一个选择器列表作为参数，并将给定的样式应用于该列表中的任何元素，因此:where() 对于缩短一个较长的选择器列表非常有用。
   在 CSS 中，当多个元素同时应用相同的样式规则时，我们通常会编写一长串以逗号分隔的选择器。
   下面是一个例子，我们将相同的样式应用到 header、main 元素和 footer 元素中的所有 a 标签:

```css
header a:hover,
main a:hover,
footer a:hover {
  color: green;
  text-decoration: underline;
}
```

在上面的代码片段中，我们只选择了三个元素，但是如果有大量的元素和选择器，代码将开始看起来不整洁，并且可能变得难以阅读和理解。这就是 :where() 伪类函数发挥作用的地方。

下面是上面的例子使用 :where() 函数的样子：

```css
:where(header, main, footer) a:hover {
  color: red;
  text-decoration: underline;
}
```

2. 组合、分割和叠加 :where() 函数
   使用 :where() 函数，我们可以以多种方式和组合对元素进行分组。我们可以将 :where() 函数放在选择器的开头、中间或结尾。下面是一个有多个选择器和样式的例子：

/_* first list *_/
header a:hover,
main a:hover,
footer a:hover {
color: green;
text-decoration: underline;
}

/_* second list *_/
article header > p,
article footer > p{
color: gray;
}

/_* third list *_/
.dark-theme button,
.dark-theme a,
.dim-theme button,
.dim-theme a{
color: purple;
}

下面是相同的代码，用 :where() 函数重写：

/_* first list *_/
/_* at the beginning *_/
:where(header, main, footer) a:hover {
color: red;
text-decoration: underline;
}

/_* second list *_/
/_* in the middle *_/
article :where(header, footer) > p {
color: gray;
}

/_* third list *_/
/_* at the end *_/
.dark-theme :where(button, a) {
color: purple;
}
.dim-theme :where(button, a) {
color: purple;
}

在第一个列表中，我们指定红色和下划线样式应应用于悬停时的 header、main 元素和 footer 元素。在第二个列表中，我们指定 article、header 和 footer 元素应该使用灰色样式。

为了更清晰，我们将第三个列表分为两个 :where() 函数。在这个列表中，我们指定 .dark-theme、.dim-theme 里的 button 和 a 元素的样式应该是紫色。

现在，我们将进一步减少第三个列表函数，将它们变成一个 :where() 函数：

/_* stacked *_/
:where(.dark-theme, .dim-theme) :where(button, a) {
color: purple;
}

这种减少复杂选择器列表的策略称为叠加。

# 栗子

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* header a:hover,
       main a:hover,
       footer a:hover {
           color: green;
           text-decoration: underline;
       } */

      :where(header, main, footer) a:hover {
        color: green;
        text-decoration: underline;
      }
    </style>
  </head>

  <body>
    <header>
      <a>header</a>
    </header>
    <main><a>main</a></main>
    <footer>
      <a>footer</a>
    </footer>
  </body>
</html>
```
