---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: 点击回到顶部
mobile: false
---

## 点击回到顶部

### 锚点

```html
<body style="height:2000px;">
  <div id="topAnchor"></div>
  <a href="#topAnchor" style="position:fixed;right:0;bottom:0">回到顶部</a>
</body>
```

### scrollTop

```html
<body style="height:2000px;">
  <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
  <script>
    test.onclick = function () {
      document.body.scrollTop = document.documentElement.scrollTop = 0;
    };
  </script>
</body>
```

### scrollTo

```html
<body style="height:2000px;">
  <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
  <script>
    test.onclick = function () {
      scrollTo(0, 0);
    };
  </script>
</body>
```

### scrollBy(x,y)

方法滚动当前 window 中显示的文档，x 和 y 指定滚动的相对量
只要把当前页面的滚动长度作为参数，逆向滚动，则可以实现回到顶部的效果

```html
<body style="height:2000px;">
  <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
  <script>
    test.onclick = function () {
      var top = document.body.scrollTop || document.documentElement.scrollTop;
      scrollBy(0, -top);
    };
  </script>
</body>
```

### scrollIntoView

Element.scrollIntoView 方法滚动当前元素，进入浏览器的可见区域

该方法可以接受一个布尔值作为参数。如果为 true，表示元素的顶部与当前区域的可见部分的顶部对齐（前提是当前区域可滚动）；如果为 false，表示元素的底部与当前区域的可见部分的尾部对齐（前提是当前区域可滚动）。如果没有提供该参数，默认为 true

使用该方法的原理与使用锚点的原理类似，在页面最上方设置目标元素，当页面滚动时，目标元素被滚动到页面区域以外，点击回到顶部按钮，使目标元素重新回到原来位置，则达到预期效果

element.scrollIntoView(options);

behavior:
类型：String
描述：定义滚动行为。可选值包括：  
"auto": 默认值，立即滚动到元素。  
"smooth": 平滑滚动到元素。

block:
类型：String  
描述：定义元素在垂直方向上的对齐。可选值包括：  
"start": 元素的顶部与视口的顶部对齐。  
"center": 元素的中心与视口的中心对齐。  
"end": 元素的底部与视口的底部对齐。  
"nearest": 将元素滚动到最接近的边界（顶部或底部），具体取决于元素当前的位置和视口的大小。

inline:
类型：String  
描述：定义元素在水平方向上的对齐。可选值和含义与 block 类似。

```html
<body style="height:2000px;">
  <div id="target"></div>
  <button id="test" style="position:fixed;right:0;bottom:0">回到顶部</button>
  <script>
    test.onclick = function () {
      target.scrollIntoView();
    };
  </script>
</body>
```
