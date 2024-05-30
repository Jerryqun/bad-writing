---
nav: Css
group:
  title: 基础概念
  order: 2
toc: content
mobile: false
---

# 盒模型

```css
box-sizing: content-box（标准盒模型 默认）
width = 内容的宽度
height = 内容的高度

box-sizing: border-box（IE 盒模型）
width = border + padding + 内容的宽度
height = border + padding + 内容的高度

offsetHeight offsetWidth :  border + padding + content
clientHeight clientWidth :  padding + content
scrollHeight scrollWidth :  padding + 实际内容尺寸

```
