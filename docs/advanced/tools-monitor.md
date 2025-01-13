---
nav: 高阶技术
group:
  title: 前端工具
  order: 2
toc: content
mobile: false
title: 埋点监控
---

## 埋点监控

常见的埋点上报方式有 ajax，img，navigator.sendBeacon 下面介绍下这三种埋点上报方式

### 基于 ajax 的埋点上报

```js
function buryingPointAjax(data) {
  return new Promise((resolve, reject) => {
    // 创建ajax请求
    const xhr = new XMLHttpRequest();
    // 定义请求接口
    xhr.open('post', '/buryingPoint', true);
    // 发送数据
    xhr.send(data);
  });
}
```

缺点: 一般而言，埋点域名并不是当前域名，因此请求会存在跨域风险，且如果 ajax 配置不正确可能会浏览器拦截。因此使用 ajax 这类请求并不是万全之策。

### 基于 img 的埋点上报

基于 script，link，img 就是我们上报的数据的最好对象

推荐使用 img 标签去实现。

因为埋点涉及到请求，因此我们需要保证 script 和 link 标签的 src 可以正常请求。
如果需要请求 script 和 link，我们需要将标签挂载到页面上。

验证 创建一个 script 标签，未挂载中页面上，并不会发起请求

```js
let a = document.createElement('script');
a.src =
  'https://lf-headquarters-speed.yhgfb-cn-static.com/obj/rc-client-security/web/stable/1.0.0.28/bdms.js';
```

当我们使用 script 和 link 进行埋点上报时，需要挂载到页面上，而反复操作 dom 会造成页面性能受影响，而且载入 js/css 资源还会阻塞页面渲染，影响用户体验，因此对于需要频繁上报的埋点而言，script 和 link 并不合适。

`通常使用 img 标签去做埋点上报，img 标签加载并不需要挂载到页面上，基于 js 去 new image()，设置其 src 之后就可以直接请求图片。`

```js
var img = new Image();
img.src =
  'https://lf3-cdn-tos.bytescm.com/obj/static/xitu_juejin_web/img/MaskGroup.13dfc4f1.png';
```

结论  
因此当我们做埋点上报时，使用 img 是一个不错的选择。

- img 兼容性好
- 无需挂载到页面上，反复操作 dom
- img 的加载不会阻塞 html 的解析，但 img 加载后并不渲染，它需要等待 Render Tree 生成完后才和 Render Tree 一起渲染出来

注：通常埋点上报会使用 gif 图，合法的 GIF  只需要 43 个字节

### 基于 Navigator.sendBeacon 的埋点上报

sendBeacon 是异步的，不会影响当前页到下一个页面的跳转速度，且不受同域限制。这个方法还是异步发出请求，但是请求与当前页面脱离关联，作为浏览器的任务，因此可以保证会把数据发出去，不拖延卸载流程。

## 常见埋点行为

### 点击触发埋点

绑定点击事件，当点击目标元素时，触发埋点上报。

```js
function clickButton(url, data) {
  navigator.sendBeacon(url, data);
}
```

### 页面停留时间上报埋点

路由文件中，初始化一个 startTime，当页面离开时通过路由守卫计算停留时间。

```js
let url = ''; // 上报地址
let startTime = Date.now();
let currentTime = '';
router.beforeEach((to, from, next) => {
  if (to) {
    currentTime = Date.now();
    stayTime = parseInt(currentTime - startTime);
    navigator.sendBeacon(url, { time: stayTime });
    startTime = Date.now();
  }
});
```

### JS 异常与静态资源加载异常

```js
window.addEventListener(
  'error',
  (error) => {
    if (error.message) {
      navigator.sendBeacon(url, { error: error.message, text: 'js执行异常' });
    } else {
      navigator.sendBeacon(url, {
        error: error.filename,
        text: '资源加载异常',
      });
    }
  },
  true,
);

axios.interceptors.response.use(
  (response) => {
    if (response.code == 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  (error) => {
    // 返回错误逻辑
    navigator.sendBeacon(url, { error: error, text: '请求错误异常' });
  },
);
```

### 内容可见埋点

```js
// 可见性发生变化后的回调
function callback(data) {
  navigator.sendBeacon(url, { target: data[0].target, text: '内容可见' });
}
// 交叉观察器配置项
let options = {};
// 生成交叉观察器
const observer = new IntersectionObserver(callback);
// 获取目标节点
let target = document.getElementById('target');
// 监听目标元素
observer.observe(target);
```
