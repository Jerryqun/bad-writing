---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: meta标签自动刷新
mobile: false
---

## meta 标签自动刷新

假设要实现一个类似 PPT 自动播放的效果，
你很可能会想到使用 JavaScript 定时器控制页面跳转来实现。但其实有更加简洁的实现方法，
比如通过 meta 标签来实现：

```html
<meta http-equiv="Refresh" content="5; URL=page2.html" />
```
