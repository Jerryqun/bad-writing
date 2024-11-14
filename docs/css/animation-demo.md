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
