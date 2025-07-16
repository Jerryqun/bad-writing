---
toc: content
group:
  title: 基础概念
  order: 2
title: css选择器
---

## 选择器与权重

### >(大于号) 子元素选择器

大于号的意思是选择某元素后面的第一代子元素

```html
<style type="text/css">
  h1 > strong {
    color: red;
  }
</style>
<body>
  <h1>
    <strong>一代子元素</strong>
  </h1>
  <h1>
    <span>
      <strong>二代子元素</strong>
    </span>
  </h1>
</body>
```

### ~（波浪号）同级

`~波浪号的意思是选取某个元素之后的所有相同同级元素`  
.box~h2 这句就是选取 .box 后面同级所有的 h2

这个选择器两种元素必须处于同一个父元素内，被选取的元素不必直接紧随。

```html
<style type="text/css">
  .box ~ h2 {
    background: aqua;
  }
</style>

<body>
  <h2>1</h2>
  <div class="box"></div>
  <em>2</em>
  <h2>3</h2>
  <h2>4</h2>
  <div class="box3">
    <h2>5</h2>
  </div>
</body>
```

上面例子 34 背景色生效

### （空格） 派生选择器

选择某元素后面的所有子元素  
派生选择器允许你根据文档的上下文关系来确定某个标签的样式

```html
<style type="text/css">
  h1 strong {
    color: red;
  }
</style>

<body>
  <h1>
    <strong>一代子元素</strong>
  </h1>
  <h1>
    <span>
      <strong>二代子元素</strong>
    </span>
  </h1>
</body>
```

一代和二代子元素都会被赋予 color: red;

### ,（逗号）群组选择器

可以对选择器进行分组，被分组的选择器就可以分享相同的声明

```html
<style type="text/css">
  h1,
  h2,
  h3 {
    color: blue;
  }
  h4,
  h5,
  h6 {
    color: red;
  }
</style>

<body>
  <h1>案例1</h1>
  <h2>案例1</h2>
  <h3>案例1</h3>

  <h4>案例2</h4>
  <h5>案例2</h5>
  <h6>案例2</h6>
</body>
```

### +（加号）相邻兄弟选择器

可选择紧接在另一元素后的元素，且二者有相同父元素

```html
<style type="text/css">
  span + em {
    color: red;
  }
</style>

<body>
  <h1>
    <span>案例1</span>
    <em>案例2</em>
    <em>案例3</em>
  </h1>
</body>
```

only 案例 2 add color: red;

### 属性选择器

a[src^='https'] 选择 src 属性值以 https 开头的所有元素  
a[src$='https'] 选择 src 属性值以 https 结尾的所有元素  
a[src*='https'] 选择 src 属性值包含 https 的所有元素

### 使用否定选择器

```css
li:not(.active) {
  text-decoration: underline;
}
```

### 复杂 demo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      /* 使用伪类选择器 */
      ul li:first-child {
        color: green;
      }

      .container > p:last-child {
        border: 1px solid black;
      }

      li.active {
        font-weight: bold;
      }

      /* 使用通用选择器 */
      .container * {
        margin: 0;
      }

      /* 使用相邻兄弟选择器 */
      h1 + p {
        font-style: italic;
      }

      /* 使用子选择器 */
      .container > div {
        background-color: yellow;
      }

      /* 使用后代选择器 */
      .container p {
        color: purple;
      }

      /* 使用否定选择器 */
      li:not(.active) {
        text-decoration: underline;
      }

      /* 使用属性选择器 */
      li[id^='item'] {
        font-size: 20px;
      }
    </style>
  </head>

  <body>
    <div class="container">
      <h1 id="title">Hello, CSS!</h1>
      <p class="content">This is a content.</p>
      <p class="content">This is another content.</p>
      <ul id="list">
        <li id="item">Item 1</li>
        <li class="active">Item 2</li>
        <li>Item 3</li>
      </ul>
      <div class="container">
        <p>Inside container</p>
      </div>
    </div>
  </body>
</html>

<!-- 伪类选择器：使用 :first-child 选中第一个 li 元素，使用 :last-child 选中 .container 内最后一个 p 元素。

类选择器：使用 .active 选中具有 active 类的 li 元素。

通用选择器：使用 * 选中 .container 内的所有元素。

相邻兄弟选择器：使用 + 选中紧邻在 h1 元素后的 p 元素。

子选择器：使用 > 选中 .container 内的直接子元素 div。

后代选择器：使用空格选中 .container 内所有的 p 元素。

否定选择器：使用 :not() 排除具有 active 类的 li 元素以外的所有 li 元素。

属性选择器：使用 ^= 选中具有 id 属性值以 “item” 开头的 li 元素。 -->
```

### css权重


1. !important  
2. 内联样式（1000）  
3. ID 选择器（0100）  
4. 类选择器/伪类选择器/属性选择器(div[class="foo"])（0010）  
5. 元素选择器/伪元素选择器（0001）  
6. 关系选择器(继承)/通配符选择器（0000）

同一级别：后写的会覆盖先写的

css选择器的解析原则：选择器定位DOM元素是从右往左的方向，这样可以尽早的过滤掉一些不必要的样式规则和元素

浏览器没有使用 !important 的情况：  
创作人员（开发者）> 用户（使用网页的人员）> 用户代理（浏览器）

使用!important 的情况：  
用户代理（浏览器）> 用户（使用网页的人员）> 创作人员（开发者）

栗子：  
`<input type="hidden">`  
无法修改 display 属性让其显示

```css
input[type='hidden' i] {
  appearance: none;
  background-color: initial;
  cursor: default;
  display: none !important;
  padding: initial;
  border: initial;
}
```

### 用户代理样式表

用户代理样式表（User Agent Stylesheet）是浏览器提供的默认样式表。这些样式是由浏览器供应商（如 Google Chrome、Mozilla Firefox、Apple Safari 等）定义的，用于为没有显式样式（由开发者提供）的 HTML 元素提供基础样式。这就意味着，如果您创建一个没有任何 CSS 的 HTML 网页，显示给用户的页面样式将由用户代理样式表决定。

用户代理样式表的目的是确保网页有一个统一的基本外观，即使它们没有特别的样式定义。这些默认样式可能包括但不限于元素的字体大小、颜色、外边距、内边距等属性。

开发者通常使用 CSS 重置（如 Normalize.css）或 CSS 框架（如 Bootstrap、Foundation 等）来覆盖用户代理样式表的默认值，确保不同浏览器中的一致性，并根据项目需求提供自定义样式。

要查看浏览器为特定元素应用的用户代理样式，可以使用浏览器的开发者工具。在元素的“Computed”样式选项卡中，通常可以看到来源为“user agent stylesheet”的样式。这些就是浏览器默认应用的样式。

## 假设下面样式都作用于同一个节点元素 span，判断下面哪个样式会生效

```css
body#god div.dad span.son {
  width: 200px;
}
body#god span#test {
  width: 250px;
}
```

两个类名之间的点（.）表示选择器的组合，具体来说，它用于选择同时具有这两个类的元素

比较规则说明：

先比较高权重位，即第一个样式的高权重为 #god = 100  
第二个样式的高权重为 #god + #text = 200  
100 < 200  
所以最终计算结果是取 width: 250px;  
若两个样式的高权重数量一样的话，则需要比较下一较高权重！
