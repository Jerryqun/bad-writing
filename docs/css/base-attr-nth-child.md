---
toc: content
group:
  title: 属性
  order: 2
title: nth-child
---

# nth-child

p:nth-child(2) :选择属于其（p 的父元素）父元素的第二个子元素  
`element:first-child :选择属于父元素 element 的第一个子元素。 等同 :nth-child(1)`

nth-child(an+b) n 从 0 开始 b 从 1 开始<br />
nth-of-type(n) n 从 1 开始 正序<br />
nth-last-of-type(n) n 从 1 开始 倒序<br />

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
    <style>
      p:nth-of-type(1) {
        background: #ff0000;
      }
      p:nth-last-of-type(1) {
        background: red;
      }
    </style>
  </head>
  <body>
    <!-- #ff0000 -->
    <h1>This is a heading</h1>
    <p>The first paragraph.</p>
    <p>The second paragraph.</p>
    <p>The third paragraph.</p>
    <!-- red -->
    <p>The fourth paragraph.</p>
  </body>
</html>
```

![Alt text](../css/img/image-1.png)
