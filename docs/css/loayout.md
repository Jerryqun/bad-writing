---
toc: content
group:
  title: 布局
  order: 3
title: 两栏布局
---

# 左侧固定 + 右侧自适应布局

现在有以下 DOM 结构：

```html
<div class="outer">
  <div class="left">左侧</div>
  <div class="right">右侧</div>
</div>
```

1、利用浮动，左边元素宽度固定 ，设置向左浮动。将右边元素的 margin-left 设为固定宽度 。注意，因为右边元素的 width 默认为 auto ，所以会自动撑满父元素。

```css
.outer {
  height: 100px;
}
.left {
  float: left;
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  margin-left: 200px;
  height: 100%;
  background: lightseagreen;
}
```

2、同样利用浮动，左边元素宽度固定 ，设置向左浮动。右侧元素设置 overflow: hidden; 这样右边就触发了 BFC ，BFC 的区域不会与浮动元素发生重叠，所以两侧就不会发生重叠。

```css
.outer {
  height: 100px;
}
.left {
  float: left;
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  overflow: auto;
  height: 100%;
  background: lightseagreen;
}
```

3、利用 flex 布局，左边元素固定宽度，右边的元素设置 flex: 1 。

```css
.outer {
  display: flex;
  height: 100px;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  flex: 1;
  height: 100%;
  background: lightseagreen;
}
```

4、利用绝对定位，父级元素设为相对定位。左边元素 absolute  定位，宽度固定。右边元素的 margin-left  的值设为左边元素的宽度值。

```css
.outer {
  position: relative;
  height: 100px;
}
.left {
  position: absolute;
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  margin-left: 200px;
  height: 100%;
  background: lightseagreen;
}
```

5、利用绝对定位，父级元素设为相对定位。左边元素宽度固定，右边元素 absolute 定位， left 为宽度大小，其余方向定位为 0 。

```css
.outer {
  position: relative;
  height: 100px;
}
.left {
  width: 200px;
  height: 100%;
  background: lightcoral;
}
.right {
  position: absolute;
  left: 200px;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100%;
  background: lightseagreen;
}
```
