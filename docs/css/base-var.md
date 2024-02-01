---
toc: content
group:
  title: 基础概念
  order: 2
title: css变量
---

# css 变量

声明变量的时候，变量名前面要加两根连词线（--）。变量名大小写敏感，--header-color 和--Header-Color 是两个不同变量

```css
body {
  --foo: red;
  --bar: #336699;
}
```

上面代码中，body 选择器里面声明了两个变量：--foo 和--bar。使用变量用 var()函数。
栗子：

```css
p {
  color: var(--foo);
}
```

# 全局变量和局部变量

全局 css 变量:在任何选择器中，都可以去使用。

```css
:root {
  --main-bg: rgb(255, 255, 255);
  --logo-border-color: orange;
  --header-color: green;
  --Header-Color: pink;
  --header-height: 68px;
  --content-padding: 10px 20px;
  --base-line-heightt: 1.4;
  --margin-top: calc(100px - 80px);
}
```

局部 css 变量：定义某元素下的变量。只能在某元素身上，以及这个元素的内部的所有的标签去使用。

```css
.box2 {
  --border-color: green;
}
.box2 {
  width: 300px;
  height: 300px;
  border: 5px solid var(--border-color);
}
```

var()函数还可以使用第二个参数，表示变量的默认值。如果该变量不存在，就会使用这个默认值。

color: var(--bar,red);
