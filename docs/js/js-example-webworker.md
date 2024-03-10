---
nav: Js
group: 案例
toc: content
title: WebWorker实践案例
---

## WebWorker 实践案例

Web Worker 并不意味着 JavaScript 语言本身就支持了多线程，对于 JavaScript 语言本身它仍是运行在单线程上的， Web Worker 只是浏览器（宿主环境）提供的一个能力／API。

在 Worker 线程的运行环境中没有 window 全局对象，也无法访问 DOM 对象，所以一般来说他只能来执行纯 JavaScript 的计算操作。

但是，他还是可以获取到部分浏览器提供的 API 的：

1、`setTimeout()， clearTimeout()， setInterval()， clearInterval()`：有了设计个函数，就可以在 Worker 线程中执行定时操作了；  
2、`XMLHttpRequest` 对象：意味着我们可以在 Worker 线程中执行 **ajax** 请求；  
3、`navigator` 对象：可以获取到 ppName，appVersion，platform，userAgent 等信息；  
4、`location` 对象（只读）：可以获取到有关当前 URL 的信息；

其主要应用有几个场景：  
1、对于图像、视频、音频的解析处理；  
2、canvas 中的图像计算处理；  
3、大量的 ajax 请求或者网络服务轮询；  
4、大量数据的计算处理（排序、检索、过滤、分析...）

```js
/**
 * webworker实践案例
 * 压缩
 */

function createWorker(f) {
  var blob = new Blob(['(' + f.toString() + ')()']);
  var url = window.URL.createObjectURL(blob);
  var worker = new Worker(url);
  return worker;
}

const worker = createWorker(function () {
  // 加载pako
  importScripts('https://g.alicdn.com/code/lib/pako/1.0.11/pako.min.js');
  onmessage = function (e) {
    const { text } = e.data;
    function gzip(str) {
      return this.self.pako.gzip(str, {
        to: 'string',
      });
    }
    const gzipText = gzip(text);
    postMessage(gzipText);
  };
});

worker.onmessage = (e) => {
  // 拿到压缩后的字符串
  const gzipText = e.data;
  console.log(e);
};

worker.postMessage({ text });
```
