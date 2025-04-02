---
nav: Js
group: 进阶
toc: content
title: Event-loop
---

## Event-loop-浏览器 （基于 queue、先进先出）

微任务执行早于宏任务

微任务是在下一轮 dom 渲染之前执行，宏任务是下一轮 dom 渲染之后执行

宏任务 =》 微任务=》dom 渲染 =》宏任务

setTimeout(fn,1000) fn 函数打入宏任务队列的时机是 1s 后而不是 setTimeout(fn,1000) 的执行时机

### 宏任务

script （主代码块）、setTimeout、 setInterval 、setImmediate、 I/O 、UI rendering

### 微任务

process.nextTick（Nodejs） 、promise then 里面的 js 代码 、async await (await 后面的 js 代码) 、 Object.observe 、MutationObserver

宏任务 => 微任务的 Event Queue => 宏任务的 Event Queue

### 宏任务是在下次事件循环中执行，不会阻塞浏览器更新<br/>

栗子

```js
setTimeout(() => {
  document.querySelector('body').style.backgroundColor = 'green';
}, 2000);
document.querySelector('body').style.backgroundColor = 'red';
// 表现为先变红 两秒后变绿
```

### MutationObserver

`MutationObserver` 是一个 Web API，用于监视 DOM 树的变化，如元素的添加或删除、属性的变更等。当这些变化发生时，`MutationObserver` 可以异步地通知开发者，允许他们据此执行相关的回调函数。这种机制可以用于执行各种任务，比如跟踪 DOM 的变化来同步更新 UI 组件或者执行某些特定的逻辑。

`MutationObserver` 的使用步骤如下：

1. **创建一个观察者实例**：
   使用 `MutationObserver` 构造函数创建一个新的观察者实例，传递一个回调函数给它，该函数将在每次 DOM 变化时被调用。

2. **配置观察者**：
   通过调用 `observer.observe(targetNode, config)` 方法来配置观察者，指定你想要监视的 DOM 节点 (`targetNode`) 以及你感兴趣的特定类型的 DOM 变动 (`config`)。

3. **响应 DOM 变化**：
   一旦有匹配的 DOM 变动发生，传递给 `MutationObserver` 的回调函数就会被执行。回调函数会收到一个描述所有变动的 `MutationRecord` 对象数组，以及观察者本身的引用。

4. **断开观察者**：
   当你不再需要监视 DOM 变化时，可以调用 `observer.disconnect()` 来停止观察者，释放资源。

下面是一个简单的 `MutationObserver` 示例：

```javascript
// 创建一个回调函数
const callback = function (mutationsList, observer) {
  for (const mutation of mutationsList) {
    if (mutation.type === 'childList') {
      console.log('A child node has been added or removed.');
    } else if (mutation.type === 'attributes') {
      console.log(`The ${mutation.attributeName} attribute was modified.`);
    }
  }
};

// 创建一个观察者实例，并传入回调函数
const observer = new MutationObserver(callback);

// 选择一个目标节点
const targetNode = document.getElementById('myElement');

// 配置观察选项
const config = { attributes: true, childList: true, subtree: true };

// 开始观察目标节点
observer.observe(targetNode, config);

// 后续，你可以通过调用 observer.disconnect() 来停止观察
```

`MutationObserver` 是一个强大的工具，但由于其对性能的影响，建议仅在必要时使用，并尽量减少监视的范围和频率。如果观察范围很广或变动频繁，会增加浏览器的工作负载，可能导致性能问题。因此，在使用时需要权衡功能和性能，确保以最优化的方式使用 `MutationObserver`。

### MutationObserver 可用于禁止别人移除水印

```js
// 目标节点
const targetNode = document.body;

// 创建 MutationObserver 实例
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    // 检查是否有子节点被删除
    if (mutation.removedNodes.length > 0) {
      // 检查被删除的节点是否为水印
      // 如果是，则重新插入水印元素
      // targetNode.appendChild(watermarkElement);
    }
  });
});

// 配置 MutationObserver
const config = { childList: true, subtree: true };

// 开始观察目标节点
observer.observe(targetNode, config);
```

### MutationObserver 防止 DOM 被隐藏

```js
// 目标节点（假设水印元素是一个特定的节点）
const watermarkElement = document.querySelector('.watermark');

// 创建 MutationObserver 实例
const observer = new MutationObserver((mutationsList) => {
  mutationsList.forEach((mutation) => {
    if (mutation.type === 'attributes' && mutation.attributeName === 'style') {
      // 检查水印的 display 属性是否被设置为 none
      if (getComputedStyle(watermarkElement).display === 'none') {
        // 如果水印被隐藏，重新显示水印
        watermarkElement.style.display = 'block';
      }
    }
  });
});

// 配置 MutationObserver
const config = { attributes: true, subtree: true, attributeFilter: ['style'] };

// 开始观察目标节点
observer.observe(document.body, config);
```
