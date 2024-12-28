---
toc: content
group:
  title: 前端动画
  order: 2
title: 三角形
---

## 形状

```jsx
import './styles/three.css';
export default () => {
  return (
    <>
      <div class="sjx-1"></div>
      <div class="sjx-2"></div>
      <div class="box1 div"></div>
      <div class="box2 div"></div>
      <div class="box3 div"></div>
    </>
  );
};
```

## 使用 clip-path 实现图片切割成三角形

```jsx
import './styles/three.css';
export default () => {
  return (
    <>
      <div class="three-img" />
    </>
  );
};
```

## 文字颜色渐变

background: linear-gradient(...): 定义从左到右的渐变色。  
-webkit-background-clip: text: 让背景裁剪成文字的形状。  
color: transparent: 使文本颜色透明，从而显示背景的渐变效果。

```jsx
import './styles/fontsize.css';
export default () => {
  return (
    <div>
      <h1 class="gradient-text">渐变文字效果</h1>
    </div>
  );
};
```

## gap 和 order

gap 属性用于设置在网格布局（grid）或弹性布局（flex）中，子元素（项目）之间的间距。它可以同时设置行间距和列间距，或者分别通过 row-gap 和 column-gap 单独设置。

适用于：grid 和 flex 布局

使用 order 属性
order 属性接受一个整数值，默认值为 0。值越小的项目会优先显示，值相等的项目则按照它们在文档中的顺序排列。

order 属性只对在同一个 Flex 容器中的子元素有效。
使用 order 属性可能导致元素在视觉上的顺序与文档流中的顺序不一致，这可能影响辅助技术（如屏幕阅读器）的行为。
order 属性对 Grid 布局不起作用；在 Grid 布局中，使用的是 grid-area 属性来控制项目位置。
通过合理地使用 order 属性，你可以灵活地控制页面布局，提升用户体验和视觉效果。
