---
nav: Js
group: 基础概念
toc: content
title: 面试题
---

## 图片懒加载

<a href="https://fe.ecool.fun/topic/d3f21598-edfa-48f4-b2d3-d0c19d754b10?orderBy=updateTime&order=desc&tagId=0" target="_blank">参考</a>

### 图片懒加载最简单的方式

有兼容性问题

```js
<img src="./example.jpg" loading="lazy" />
```

### js 实现 基于 getBoundingClientRect 手动计算

实现原理

拿到所有的图片 dom 。<br/>
遍历每个图片判断当前图片是否到了可视区范围内。<br/>
如果到了就设置图片的 src 属性。<br/>
绑定 window 的 scroll 事件，对其进行事件监听。<br/>

```js
function lazyload() {
  let viewHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight; //获取可视区高度，兼容不同浏览器
  let imgs = document.querySelectorAll('img[data-src]');
  imgs.forEach((item, index) => {
    if (item.dataset.src === '') return;

    // 用于获得页面中某个元素的左，上，右和下分别相对浏览器视窗的位置
    let rect = item.getBoundingClientRect();
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      item.src = item.dataset.src;
      item.removeAttribute('data-src');
    }
  });
}
window.addEventListener('scroll', lazyload);
```

使用 throttle 改进

```js
const throttle = (fn, timer) => {
  let pre = 0,
    t = null;
  return function (...args) {
    if (Date.now() - pre > timer) {
      clearTimeout(t);
      t = null;
      pre = Date.now();
      fn.apply(this, args);
    } else if (!t) {
      t = setTimeout(() => {
        fn.apply(this, args);
      }, timer);
    }
  };
};
window.addEventListener('scroll', throttle(lazyload, 200));
```

### IntersectionObserver

基本用法

```js
var io = new IntersectionObserver(callback, option);

// 开始观察
io.observe(document.getElementById('example'));

// 停止观察
io.unobserve(element);

// 关闭观察器
io.disconnect();
```

使用 IntersectionObserver 实现懒加载

```js
const imgs = document.querySelectorAll('img[data-src]');
const config = {
  rootMargin: '0px',
  threshold: 0,
};
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target;
      let src = img.dataset.src;
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
      }
      // 解除观察
      self.unobserve(entry.target);
    }
  });
}, config);

imgs.forEach((image) => {
  observer.observe(image);
});
```

## in 和 hasOwnProperty 的区别

```js
/**
 * in 会遍历原型对象上的属性
 * hasOwnProperty 不会遍历原型对象上的属性
 */

const person = { age: 18 };
person.hasOwnProperty('age'); // true
'age' in person; // true

'toString' in a; //  true
person.hasOwnProperty('toString'); // false
```

## document.getElementById 和 document.querySelector 的区别

document.getElementById 获取动态 dom
document.querySelector 获取静态 dom

## 项目中拦截器做了什么事情

在软件项目中，拦截器（Interceptor）是一种常用的设计模式，用来拦截一系列的操作，然后在这些操作之前或之后执行特定的功能

```bash
1、认证和授权
2、日志记录
3、数据验证、数据加工
4、错误处理
5、性能监控
6、缓存管理
7、请求和响应的修改
8、跨域处理
9、安全增强
10、限流和降级
```

## 所有的事件都有冒泡吗？

```bash
并不是所有的事件都有冒泡的，例如以下事件就没有：
onblur
onfocus
onmouseenter
onmouseleave
```
