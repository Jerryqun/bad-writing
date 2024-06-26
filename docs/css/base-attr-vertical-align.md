---
toc: content
group:
  title: 属性片段
  order: 2
title: vertical-align
---

# vertical-align

https://juejin.cn/post/6844903561780789255

vertical-align 属性只能作用在 display 计算值为 inline、inline-block，inline-table 或 table-cell 的元素上
baseline:使元素的基线与父元素的基线对齐<br />
middle：使元素的中部与父元素的基线加上父元素字母 x 的一半对齐<br />
top：使元素的顶部与其所在行的顶部对齐<br />
bottom：使元素底部与所在行的底部对齐<br />

（1）关键字： 如 top, middle, baseline(默认值), bottom, super, sub, text-bottom, text-top<br />
（2）长度值： 如 10px，-10px(均为相对于 baseline 偏移)<br />
（3）百分比值： 如 10%，根据 line-heightt 作为基数进行计算(重要)后的值。<br />

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      .parent {
        display: inline-block;
      }

      .children {
        vertical-align: middle;
      }
    </style>
  </head>

  <body>
    <div class="parent">
      <img class="children" width="40px" height="40px" />
      <span class="children">
        我是父亲我是父亲我是父亲我是父亲我是父亲我是父亲我是父亲</span
      >
    </div>
  </body>
</html>
```
