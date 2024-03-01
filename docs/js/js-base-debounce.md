---
nav: Js
group: 基础概念
toc: content
title: 节流和防抖
---

## 节流和防抖

### 防抖 debounce

在事件被触发 n 秒后再执行回调，如果在这 n 秒内又被触发，则重新计时。<br/>
search 搜索联想，用户在不断输入值时，用防抖来节约请求资源。<br/>
window 触发 resize 的时候，不断的调整浏览器窗口大小会不断的触发这个事件，用防抖来让其只触发一次。<br/>

```js
const debounce = (fn, timer) => {
  return function (...args) {
    let that = this;
    clearTimeout(fn.id);
    fn.id = setTimeout(() => {
      fn.apply(that, args);
    }, timer);
  };
};
```

### 节流 throttle

规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。<br/>
鼠标不断点击触发，mousedown(单位时间内只触发一次)。<br/>
监听滚动事件，比如是否滑到底部自动加载更多，用 throttle 来判断。<br/>

```js
// 第一次事件肯定触发，最后一次不会触发
const throttle = (fn, timer) => {
  let pre = 0;
  return function (...args) {
    if (Date.now() - pre > timer) {
      fn.apply(this, args);
      pre = Date.now();
    }
  };
};

// 第一次事件不会触发，最后一次一定触发
const throttle = (fn, timer) => {
  let t = null;
  return function (...args) {
    if (!t) {
      t = setTimeout(() => {
        fn.apply(this, args);
        t = null;
      }, timer);
    }
  };
};

// 第一次事件和最后一次事件都触发
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
```
