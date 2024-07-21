---
nav: Html
group:
  title: 浏览器
  order: 1
toc: content
title: web 性能检测工具
mobile: false
---

## web 性能检测工具

<a target="_blank" href="https://juejin.cn/post/6965744691979485197">参考</a>

### Lighthouse

Lighthouse 是一个开源的自动化工具，由 Google 提供，用于提高网页的质量。它可以对网页进行评估，提供有关性能、可访问性、渐进式 Web 应用程序、SEO 和最佳实践的指标。Lighthouse 可以作为 Chrome 浏览器的开发者工具中的一个选项卡运行，也可以作为一个命令行工具或 Node 模块使用。以下是 Lighthouse 的一些使用方法：

1. Chrome 开发者工具中使用
2. 命令行工具使用

```bash
npm install -g lighthouse
lighthouse https://www.baidu.com/ --view

```

### Performance

浏览器获取网页时，会对网页中每一个对象（脚本文件、样式表、图片文件等等）发出一个 HTTP 请求。而通过 window.performance.getEntries 方法，

则可以以数组形式，返回这些请求的时间统计信息，每个数组成员均是一个 PerformanceResourceTiming 对象！

```js
(function () {
  // 浏览器不支持，就算了！
  if (!window.performance && !window.performance.getEntries) {
    return false;
  }

  var result = [];
  // 获取当前页面所有请求对应的PerformanceResourceTiming对象进行分析
  window.performance.getEntries().forEach(function (perf) {
    result.push({
      url: perf.name,
      entryType: perf.entryType,
      type: perf.initiatorType,
      'duration(ms)': perf.duration,
    });
  });

  // 控制台输出统计结果
  console.table(result);
})();
```

## 性能指标

- FirstPaint（FP）
- First Contentful Paint(FCP)  
  第一次有内容的渲染
- LCP  
  第一次有意义的渲染
- DomContentLoaded(DCL)
- Largest Contentful Paint(LCP)
- Load(L)
<!--

## 如何精准的测试 js 代码性能

使用 benchmark.js 的 https://jsperf.com -->
