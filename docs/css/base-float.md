---
toc: content
group:
  title: 基础概念
  order: 2
title: 浮动
---

# 清除浮动

1、给父元素添加 overflow:hidden 或者 auto 样式，触发 BFC

```html
<style>
  .container {
    width: 300px;
    background-color: #aaa;
    overflow: hidden;
    zoom: 1; /*IE6*/
  }
</style>

<div class="container">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

2、在浮动元素后面添加 clear:both 的空 div 元素

```html
<div class="container">
  <div class="left"></div>
  <div class="right"></div>
  <div style="clear:both"></div>
</div>
```

3、使用伪元素，也是在元素末尾添加一个点并带有 clear: both 属性的元素实现的。

```html
<style>
  .clearfix {
    zoom: 1;
  }
  .clearfix:after {
    content: '.';
    height: 0;
    clear: both;
    display: block;
    visibility: hidden;
  }
</style>
<div class="container clearfix">
  <div class="left"></div>
  <div class="right"></div>
</div>
```

浮动元素可以使用 margin，但是不能使用 margin: 0 auto;
