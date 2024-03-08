---
nav: Js
group: 基础概念
toc: content
title: performance
---

## performance

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
