---
toc: content
group:
  title: 布局
  order: 3
title: 三分栏布局之圣杯布局
---

# 圣杯布局 两边固定 中间自适应

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      #container {
        padding-left: 200px;
        padding-right: 150px;
        overflow: auto;
      }
      #container p {
        float: left;
      }
      .center {
        width: 100%;
        background-color: lightcoral;
      }
      .left {
        width: 200px;
        position: relative;
        left: -200px;
        margin-left: -100%;
        background-color: lightcyan;
      }
      .right {
        width: 150px;
        margin-right: -150px;
        background-color: lightgreen;
      }
      .clearfix:after {
        content: '';
        display: table;
        clear: both;
      }
    </style>
  </head>
  <body>
    <div id="container" class="clearfix">
      <p class="center">我是中间</p>
      <p class="left">我是左边</p>
      <p class="right">我是右边</p>
    </div>
  </body>
</html>
```

# 双飞翼布局 两边固定 中间自适应

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .float {
        float: left;
      }

      #main {
        width: 100%;
        height: 200px;
        background-color: lightpink;
      }

      #main-wrap {
        margin: 0 190px 0 190px;
      }

      #left {
        width: 190px;
        height: 200px;
        background-color: lightsalmon;
        /* 对的是父元素的 content  宽度，即不包含 paddig 、 border  的宽度*/
        margin-left: -100%;
      }

      #right {
        width: 190px;
        height: 200px;
        background-color: lightskyblue;
        margin-left: -190px;
      }
    </style>
  </head>

  <body>
    <div id="main" class="float">
      <div id="main-wrap">main</div>
    </div>
    <div id="left" class="float">left</div>
    <div id="right" class="float">right</div>
  </body>
</html>
```
