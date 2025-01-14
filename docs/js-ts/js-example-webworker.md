---
nav: Js
group: 案例
toc: content
title: WebWorker实践案例
---

## WebWorker

Web Worker 是 HTML5 标准的一部分，这一规范定义了一套 API，允许我们在 js 主线程之外开辟新的 Worker 线程，并将一段 js 脚本运行其中，它赋予了开发者利用 js 操作多线程的能力。

## 监听错误信息

web worker 提供两个事件监听错误，error 和 messageerror。这两个事件的区别是:  
error： 当 worker 内部出现错误时触发  
messageerror： 当 message 事件接收到无法被反序列化的参数时触发

## 关闭 worker 线程

worker 线程的关闭在主线程和 worker 线程都能进行操作，但对 worker 线程的影响略有不同。

无论是在主线程关闭 worker，还是在 worker 线程内部关闭 worker，worker 线程当前的 Event Loop 中的任务会继续执行。至于 worker 线程下一个 Event Loop 中的任务，则会被直接忽略，不会继续执行。

区别是，在主线程手动关闭 worker，主线程与 worker 线程之间的连接都会被立刻停止，即使 worker 线程当前的 Event Loop 中仍有待执行的任务继续调用 postMessage() 方法，但主线程不会再接收到消息。

在 worker 线程内部关闭 worker，不会直接断开与主线程的连接，而是等 worker 线程当前的 Event Loop 所有任务执行完，再关闭。也就是说，在当前 Event Loop 中继续调用 postMessage() 方法，主线程还是能通过监听 message 事件收到消息的。

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
  var worker = new Worker(url, { type: 'module' }); // // 指定 worker.js 的类型

  return worker;
}

const worker = createWorker(function () {
  // 加载pako
  importScripts('https://g.alicdn.com/code/lib/pako/1.0.11/pako.min.js'); // 通过此方法加载的js文件不受同源策略约束
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

## SharedWorker

SharedWorker 实现多页面数据共享

index 页面的 add 按钮，每点击一次，向 sharedWorker 发送一次 add 数据，页面 count 增加 1

```js
<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <title>index page</title>
    </head>
    <body>
        <p>index page: </p>
        count: <span id="container">0</span>
        <button id="add">add</button>
        <br>
        <iframe src="./iframe.html"></iframe>
    </body>
    <script type="text/javascript">
        if (!!window.SharedWorker) {
            const container = document.getElementById('container');
            const add = document.getElementById('add');

            const myWorker = new SharedWorker('./sharedWorker.js');

            myWorker.port.start();

            myWorker.port.addEventListener('message', msg => {
                container.innerText = msg.data;
            });

            add.addEventListener('click', () => {
                myWorker.port.postMessage('add');
            });
        }
    </script>
</html>
```

iframe 页面的 reduce 按钮，每点击一次，向 sharedWorker 发送一次 reduce 数据，页面 count 减少 1

```js
// iframe.html

<!DOCTYPE html>
<html lang="zh-CN">
    <head>
        <meta charset="utf-8">
        <title>iframe page</title>
    </head>
    <body>
        <p>iframe page: </p>
        count: <span id="container">0</span>
        <button id="reduce">reduce</button>
    </body>
    <script type="text/javascript">
        if (!!window.SharedWorker) {
            const container = document.getElementById('container');
            const reduce = document.getElementById('reduce');

            const myWorker = new SharedWorker('./sharedWorker.js');

            myWorker.port.start();

            myWorker.port.addEventListener('message', msg => {
                container.innerText = msg.data;
            })

            reduce.addEventListener('click', () => {
                myWorker.port.postMessage('reduce');
            });
        }
    </script>
</html>
```

sharedWorker 在接收到数据后，根据数据类型处理 num 计数，然后返回给每个已连接的主线程。

```js
// sharedWorker.js

let num = 0;
const workerList = [];

self.addEventListener('connect', (e) => {
  const port = e.ports[0];
  port.addEventListener('message', (e) => {
    num += e.data === 'add' ? 1 : -1;
    workerList.forEach((port) => {
      // 遍历所有已连接的part，发送消息
      port.postMessage(num);
    });
  });
  port.start();
  workerList.push(port); // 存储已连接的part
  port.postMessage(num); // 初始化
});
```

## sharedWorker 调试

在 sharedWorker 线程里使用 console 打印信息，不会出现在主线程的的控制台中。如果你想调试 sharedWorker，需要在 Chrome 浏览器输入 `chrome://inspect/ `，这里能看到所有正在运行的 sharedWorker，然后开启一个独立的 dev-tool 面板。
