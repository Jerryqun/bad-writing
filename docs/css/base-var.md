---
toc: content
group:
  title: 基础概念
  order: 2
title: css变量
---

## css 变量

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

## 全局变量和局部变量

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

## 动态修改 CSS 变量

```js
document.documentElement.style.setProperty('--primary-color', '#e74c3c');

// 设置变量
document.body.style.setProperty('--primary', '#7F583F');

// 读取变量
document.body.style.getPropertyValue('--primary').trim();
// '#7F583F'

// 删除变量
document.body.style.removeProperty('--primary');
```

## css 中子元素的百分比到底是相对谁的百分比

子元素的 height 或 width 中使用百分比，是相对于子元素的直接父元素，width 相对于父元素的 width，height 相对于父元素的 height；

子元素的 top 和 bottom 如果设置百分比，则相对于直接非 static 定位(默认定位)的父元素的高度，同样子元素的 left 和 right 如果设置百分比，则相对于直接非 static 定位(默认定位的)父元素的宽度；

子元素的 padding/margin 如果设置百分比，不论是垂直方向或者是水平方向，都相对于直接父亲元素的 width，而与父元素的 height 无关
