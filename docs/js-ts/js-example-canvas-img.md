---
nav: Js
group: 案例
toc: content
title: 动态生成海报
---

## js 动态生成海报

方案一：DOM->canvas->image  
将目标 DOM 节点绘制到 canvas 画布，然后利用 canvas 相关的 API 以图片形式导出。

可简单标记为绘制阶段和导出阶段两个步骤：

绘制阶段：选择希望绘制的 DOM 节点，根据 DOM 的 nodeType 属性调用 canvas 对象的对应 API，将目标 DOM 节点绘制到 canvas 画布（例如对于 img 标签的绘制使用 drawImage 方法)。  
导出阶段：通过 canvas 的 toDataURL 或 getImageData 等对外接口，最终实现画布内容的导出。

方案二：DOM->svg->canvas->image  
将 html 作为 svg 的外联元素，利用 svg 的 API 导出为图片

方案三：使用 NodeJS 调用浏览器方法  
在后端生成海报，比如可以使用 nodeJS，通过 puppter 等库，调用浏览器的 page 对象，基于 page.screenshots 截图并保存到磁盘。

## 方案一 demo

html2canvas https://html2canvas.hertzen.com/

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://html2canvas.hertzen.com/dist/html2canvas.js"></script>

    <title>Document</title>
</head>

<img>
<div id="capture" style="padding: 10px; background: #f5da55">
    <h4 style="color: #000; ">Hello world!</h4>
</div>

<img style="width: 100%;height: 100%;" id="canvasImage"></img>

</body>
<script>
    html2canvas(document.querySelector("#capture")).then(canvas => {
        document.body.appendChild(canvas)
        const imageURL = canvas.toDataURL('image/png');
        const img = document.getElementById('canvasImage');
        img.src = imageURL;


        // 创建一个下载链接
        const link = document.createElement('a');
        link.href = imageURL;
        link.download = 'canvas-image.png'; // 设置下载文件名
        // link.click(); // 自动触发下载

    });
</script>

</html>
```
