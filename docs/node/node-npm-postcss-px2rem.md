---
nav: Node
group: NPM
toc: content
mobile: false
title: postcss-px2rem
---

## postcss-px2rem

```bash
postcss-px2rem 不能转换 js 设置的 px 和内联样式

解决办法：
 1.对于已知的样式，写成动态 class 形式
 2.未知的样式，可以采用 px/htmlSize 的形式换算成 rem

```

```js
const htmlSize = document.documentElement.style.fontSize.replace('px', '');
dom.style.width = `${px / Number(htmlSize)}rem`;
```
