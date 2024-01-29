---
toc: content
group:
  title: 面试
  order: 2
title: 题目
---

# css 加载会造成页面渲染阻塞吗?

DOM 和 CSSOM 通常是并行构建的,所以 CSS 加载不会阻塞 DOM 的解析。

然而,由于 Render Tree 是依赖于 DOM Tree 和 CSSOM Tree 的,
所以他必须等待到 CSSOM Tree 构建完成,也就是 CSS 资源加载完成(或者 CSS 资源加载失败)后,才能开始渲染。

因此,CSS 加载会阻塞 Dom 的渲染。

由于 JavaScript 是可操纵 DOM 和 css 样式的,如果在修改这些元素属性同时渲染界面（即 JavaScript 线程和 UI 线程同时运行）,那么渲染线程前后获得的元素数据就可能不一致了。
因此为了防止渲染出现不可预期的结果,浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系。因此,样式表会在后面的 js 执行前先加载执行完毕,所以 css 会阻塞后面 js 的执行
