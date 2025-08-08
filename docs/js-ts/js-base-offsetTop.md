---
nav: Js
group: 基础概念
toc: content
title: js 自身高度以及偏移量
---

# offsetHeight、offsetWidth、offsetLeft、offsetTop

## offsetTop

el.offsetTop: 元素距离其 offsetParent 顶部的距离（像素）   

el.offsetParent: 返回元素最近的带有定位的祖先元素（或 body）元素距离顶部的距离 ，如果有父元素并且父元素有定位属性，则是相对于父元素，否则向上找直到 body

```js
/**
 * 元素的实际高度
 * document.getElementById("div").offsetHeight
 * 元素的实际宽度
 * document.getElementById("div").offsetWidth
 * 元素距离左边的距离
 * document.getElementById("div").offsetLeft
 * 元素距离上边的距离
 * document.getElementById("div").offsetTop
 */
```

```jsx
export default () => {
  return (
    <iframe
      height="500px"
      srcDoc={`<!DOCTYPE html>
<html>

<head>
    <title>offsetTop Demo</title>
    <style>
        #parent {
            position: relative;
            /* 父元素需要有定位 */
            width: 300px;
            height: 200px;
            border: 2px solid #000;
            padding: 20px;
            margin: 20px;
        }

        #box {
            position: absolute;
            top: 50px;
            /* 初始位置 */
            left: 50px;
            width: 100px;
            height: 100px;
            background-color: #ff6b6b;
            text-align: center;
            line-height: 100px;
            color: white;
            font-weight: bold;
        }

        #offset-display {
            margin: 20px;
            padding: 10px;
            background-color: #e0e0e0;
            border: 1px solid #888;
        }
    </style>
</head>

<body>
    <div id="parent">
        <div id="box">拖拽我！</div>
    </div>

    <div id="offset-display">
        offsetTop 的值为：0
    </div>

    <script>
        const box = document.getElementById('box');
        const display = document.getElementById('offset-display');

        // 监听鼠标拖拽事件，动态更新元素位置
        let isDragging = false;
        let offsetX, offsetY;

        box.addEventListener('mousedown', (e) => {
            isDragging = true;
            offsetX = e.clientX - box.offsetLeft;
            offsetY = e.clientY - box.offsetTop;
        });

        document.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const newX = e.clientX - offsetX;
            const newY = e.clientY - offsetY;

            // 限制在父容器内移动
            const parentRect = document.getElementById('parent').getBoundingClientRect();
            const maxX = parentRect.width - box.offsetWidth;
            const maxY = parentRect.height - box.offsetHeight;
            box.style.left = Math.min(Math.max(newX, 0), maxX) + 'px';
            box.style.top = Math.min(Math.max(newY, 0), maxY) + 'px';

            // 更新 offsetTop 的显示
            updateOffsetDisplay();
        });

        document.addEventListener('mouseup', () => {
            isDragging = false;
        });

        // 更新显示 offsetTop 的值
        function updateOffsetDisplay() {
            const currentOffsetTop = box.offsetTop;
            console.log('box', box.offsetParent)
            display.textContent = 'offsetTop 的值为：' + currentOffsetTop
        }

        // 初始化显示
        updateOffsetDisplay();
    </script>
</body>

</html>`}
    ></iframe>
  );
};
```
