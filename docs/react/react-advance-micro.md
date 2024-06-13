---
nav: React
group: 进阶
toc: content
title: 微前端
---

## 微前端

微前端架构具备以下几个核心价值：

- 技术栈无关
  主框架不限制接入应用的技术栈，微应用具备完全自主权
- 独立开发、独立部署  
  微应用仓库独立，前后端可独立开发，部署完成后主框架自动完成同步更新
- 增量升级  
  在面对各种复杂场景时，我们通常很难对一个已经存在的系统做全量的技术栈升级或重构，而微前端是一种非常好的实施渐进式重构的手段和策略
- 独立运行时  
   每个微应用之间状态隔离，运行时状态不共享

## 方案

- 基于 NPM 包的微前端：将微应用打包成独立的 NPM 包，然后在主应用中安装和使用；
- 基于代码分割的微前端：在主应用中使用懒加载技术，在运行时动态加载不同的微应用；
- 基于 Web Components 的微前端：将微应用封装成自定义组件，在主应用中注册使用；
- 基于 Module Federation 的微前端：借助 Webpack 5 的 Module Federation 实现微前端；
- 基于动态 Script 的微前端：在主应用中动态切换微应用的 Script 脚本来实现微前端；
- 基于 iframe 的微前端：在主应用中使用 iframe 标签来加载不同的微应用；
- 基于框架（JavaScript SDK）的微前端：使用 single-spa、qiankun 等通用框架。

## qiankun

<a href="https://qiankun.umijs.org/zh" target="_blank">官网</a>

温馨提示： qiankun 框架底层默认使用了 fetch 进行微应用静态资源的请求，如果是开发态启动的应用，需要额外配置跨域能力。

获取到微应用 JS 的文本字符串后，需要具备手动执行 JS 文本的能力。在 Web 应用中执行 JS 文本字符串的方式有如下几种：

- 通过 Script 标签加载内嵌的 JS 文本
- 通过 eval 执行 JS 文本
- 通过 Function 执行 JS 文本

在 iframe 隔离中，我们使用了 Script 标签请求获取 JS 文本进行运行，实现的方式如下所示：

```js
// 在 document 中创建一个 script 元素
const scriptElement = document.createElement('script');
// 指定 Script 元素的文本内容
// scriptText 是通过请求获取的 JS 文本字符串，可以对该内容进行立即执行的匿名函数封装处理
scriptElement.textContent = scriptText;
// 将元素添加到 document 的 head 标签下（添加成功后代码会自动解析执行）
document.head.appendChild(scriptElement);
```

温馨提示：感兴趣的同学还可以了解一下 Function 和 eval 的执行性能差异。在 qiankun 框架中使用了 (0,eval) 来执行微应用的 JS 文本，在 icestark 中优先使用 Function 执行 JS 文本。

### qiankun 的 JS 沙箱机制

在 V8 隔离中我们知道如果想要真正做到 JS 运行时环境的隔离，本质上需要在底层利用 V8 创建不同的 Isolate 或者 Context 进行隔离，例如 iframe 和 Worker 线程都可以做到这一点

`qiankun` 是一个基于 `single-spa` 的微前端解决方案，它实现了 JS 沙箱机制，以确保不同的微前端应用之间的全局变量或者执行环境不会相互冲突。`qiankun` 的 JS 沙箱机制主要包括以下两种方式：

### 1. Proxy 沙箱

`qiankun` 使用 JavaScript 的 `Proxy` 对象来创建一个全局变量的代理，这个代理可以捕获对全局变量的任何操作（如读取、写入）。当一个微前端应用被加载时，`qiankun` 会为它创建一个新的 `Proxy` 沙箱环境。

这个沙箱环境会拦截对全局对象（通常是 `window`）的访问，并在内部维护一份属性的快照。当应用尝试修改全局对象上的属性时，这些更改会被保留在沙箱内部的状态中，而不会影响到真实的全局对象。当应用卸载时，`qiankun` 可以将这些更改还原或者丢弃，从而实现了应用之间的隔离。

### 2. 快照沙箱

对于不支持 `Proxy` 的环境，`qiankun` 提供了一个降级的方案，称为快照沙箱。这种沙箱在应用启动时会对全局对象进行快照，保存当前全局变量的状态。然后，应用在运行过程中可以自由改变全局变量，但这些更改只会存在于内存中。

当应用卸载时，快照沙箱会利用保存的初始快照恢复全局变量的状态，以此来避免应用之间的干扰。

快照隔离是是一种相对简单的隔离方案，如果微应用在运行时仅仅需要隔离 window 对象的属性冲突，那么快照隔离是一个非常不错的隔离方案。当然，快照隔离无法解决主子应用同时运行时的 window 对象属性冲突问题，也无法解决多个微应用同时运行的问题。

### 综合使用

在实际使用中，`qiankun` 根据浏览器环境的支持情况选择最合适的沙箱机制。如果浏览器支持 `Proxy`，则优先使用 `Proxy` 沙箱，因为它提供更为准确和安全的隔离能力。如果不支持，就降级到快照沙箱。

沙箱机制的主要目的是确保微前端应用之间的代码运行在一个相对隔离的环境中，防止全局状态污染，从而维持应用之间的独立性和稳定性。这对于微前端架构的可维护性和扩展性至关重要。

`qiankun` 的沙箱机制是它的一个核心特性，它让微前端应用像在一个独立的 iframe 中运行一样，但实际上没有 iframe 的性能和样式隔离问题。它使得多个团队能够独立开发和部署自己的应用，而不用担心全局作用域的冲突。

## css 隔离

如果要彻底实现 CSS 的隔离，最好的方式是实现 Renderer 进程中浏览上下文的隔离，例如之前讲解的 iframe 隔离，它可以天然实现 CSS 隔离。但是如果微应用和主应用在同一个 DOM 环境中，那么仍然有几种思路可以避免 CSS 样式污染：

- 对微应用的每一个 CSS 样式和对应的元素进行特殊处理，从而保证样式唯一性，例如 Vue 的 Scoped CSS
- 对微应用的所有 CSS 样式添加一个特殊的选择器规则，从而限定其影响范围
  qiankun 还可以利用微前端应用构建过程中的 CSS 处理工具（如 CSS Modules、PostCSS 等）来自动为样式类名添加特定的前缀或后缀。这样，即使多个应用使用了相同的类名，它们也不会产生冲突，因为经过处理后的类名是唯一的。
- 使用 Shadow DOM 实现 CSS 样式隔离
- 动态样式标签隔离
  qiankun 在加载和卸载微前端应用时，会动态地添加和移除 `<link>` 或 `<style>` 标签。当一个微前端应用被激活时，qiankun 将该应用的样式文件插入到主应用的 DOM 中；当该微前端应用卸载时，同样会移除这些样式标签。这样可以确保只有当前活动的微前端应用的样式会被应用，从而实现了隔离。

## 微前端通信

微前端架构中，不同的前端应用间的通信是核心问题之一，因为它们通常独立部署且以某种方式协同工作。以下列出了几种在微前端架构中实现通信的主要方法：

### 1. Custom Events（自定义事件）

浏览器原生支持自定义事件，你可以在一个微前端应用中派发事件，并在另一个应用中监听这些事件。这种方式简单且不需要额外的库或框架。

```javascript
// 应用 A 发送事件
const event = new CustomEvent('myEvent', { detail: { some: 'data' } });
window.dispatchEvent(event);

// 应用 B 监听事件
window.addEventListener('myEvent', (event) => {
  console.log('Received data:', event.detail);
});
```

### 2. Pub/Sub（发布/订阅）模式

在这种模式中，微前端应用可以订阅特定的消息主题，并发布消息到这些主题。其他订阅了相同主题的应用则可以收到这些消息。你可以使用浏览器的 `window` 对象或引入第三方库（如 RxJS、EventEmitter）来实现。

### 3. Global State Management（全局状态管理）

使用像 Redux 或 MobX 这样的状态管理库，可以在微前端应用间共享状态。创建一个全局状态存储，各个微前端应用可以读取和更新这个状态。这种方式适合于共享和同步数据。

### 4. Props and Callbacks（属性和回调）

当一个微前端应用被另一个应用作为子组件使用时，可以通过属性（props）传递数据，并提供回调函数来允许子应用向父应用通信。

### 5. Local Storage / Session Storage

使用 Web Storage API，如 localStorage 或 sessionStorage，可以实现简单的跨应用数据存储。不过这种方式只适合于非敏感数据，并且在同一浏览器标签页中工作得最好。

### 6. URL and Query Parameters

通过 URL 和查询参数，可以在微前端应用之间共享数据。这种方式适合于在用户跳转页面时传递信息，但并不适用于运行时的动态通信。

### 7. Shared Libraries

共享库或服务可以暴露出一些通用的函数或者接口，微前端应用可以通过这些接口进行通信。

### 8. Backend Services

有时候微前端应用间的通信需要持久化或者需要处理复杂业务逻辑，这时可以通过后端服务来中转数据。比如，各个前端应用可以通过 API 调用来读写数据库中的数据，或者通过 WebSocket 服务器进行即时通讯。

### 9. Browser APIs

还可以利用浏览器提供的其他 API，如 Broadcast Channel API、Shared Web Workers 等，来实现跨应用或跨标签页的通信。

选择哪种通信方式取决于微前端架构的特定需求、应用的规模和复杂度、还有你愿意引入的额外依赖。通常最好的实践是保持通信尽可能简单，避免不同应用间产生太多的直接依赖，这样可以确保微前端架构的核心优势——独立部署和开发。

## 如何实现 JS 的沙箱环境的

1. . 使用 iframe 创建沙箱环境

```js
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
</head>

<body>
    <iframe src="http://127.0.0.1:8080/1.html" id="sandbox"></iframe>

    <script src="./index.js"></script>
</body>

</html>

// index.js
console.log("index");
function createSandbox(callback) {
  const iframe = document.getElementById("sandbox");
  if (!iframe) {
    return console.error("沙箱iframe未找到");
  }

  // 确保iframe完全加载后再执行代码
  iframe.onload = function () {
    const iframeWindow = iframe.contentWindow;
    console.log("iframeWindow: ", iframeWindow);

    // 在沙箱环境中定义一些安全的全局变量或函数，如果需要的话
    // iframeWindow.safeGlobalVar = {
    //   /* 安全的数据或方法 */
    //   a: 1,
    // };

    // 执行回调函数，传入沙箱的window对象，以便在其中执行代码
    callback(iframeWindow);
  };

  // 重新加载iframe以确保环境清洁
  //   iframe.src = "about:blank";
}

// 使用沙箱
createSandbox(function (sandboxWindow) {
  // 在沙箱环境中执行代码
  sandboxWindow.eval('console.log("Hello from the sandbox!");');
});

```

2. Web Workers 实现沙箱

3. with + new Function 实现沙箱

```js
function createSandbox(code) {
  // 创建一个空对象，用作沙箱环境中的全局对象
  const sandbox = {};
  // 使用with语句将代码的作用域设置为这个空对象
  // 使用new Function创建一个新的函数，限制代码访问外部作用域，只能访问sandbox内的变量和函数
  const script = new Function('sandbox', `with(sandbox) { ${code} }`);
  // 执行这个函数，并传入sandbox作为参数
  return function () {
    script(sandbox);
  };
}

// 使用沙箱环境
const sandboxedScript = createSandbox(
  'console.log("Hello from the sandbox!"); var x = 10;',
);
sandboxedScript(); // 输出: Hello from the sandbox!
console.log(typeof x); // 输出: undefined，因为x是在沙箱内部定义的，外部访问不到
```
