---
nav: Html
group:
  title: 浏览器
  order: 1
toc: content
title: 前端页面怎么限制用户打开浏览器控制台
mobile: false
---

## 前端页面怎么限制用户打开浏览器控制台

1. 在页面上点击鼠标右键我们可以看到有个 检查 选项，通过这个菜单可以直接打开控制台，我们可以直接在这个页面上禁用右键菜单。

```js
document.addEventListener('contextmenu', (e) => e.preventDefault());
```

2. 除了右键菜单栏，还有最经典的 F12 ，通过 F12 快捷键也可以快速打开控制台，所以我们也可以将这个快捷键给拦截掉

```js
document.addEventListener('keydown', (e) => {
  if (e.keyCode === 123) {
    e.preventDefault();
  }
});
document.addEventListener('contextmenu', (e) => e.preventDefault());
```

3. Ctrl+Shift+C
   Ctrl+Shift+I

上面这两个快捷键也可以打开控制台，还有一个快捷键 Ctrl+U 可以打开源码页面，这里我们也可以一起把它给拦截掉。

```js
document.addEventListener('keydown', (e) => {
  if (
    e.keyCode === 123 || // F12
    (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
    (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
    (e.ctrlKey && e.keyCode === 85)
  ) {
    // Ctrl+U
    e.preventDefault();
  }
});
```

4. 检测窗口变化

加上前面的拦截之后，其实我们还是有办法打开控制台，可以通过浏览器设置来打开控制台，这里的入口我们并无法监听拦截到

```js
let lastWidth = window.innerWidth;
let lastHeight = window.innerHeight;

window.addEventListener('resize', () => {
  const widthDiff = Math.abs(window.innerWidth - lastWidth);
  const heightDiff = Math.abs(window.innerHeight - lastHeight);

  // 如果窗口尺寸变化但不是全屏切换，可能是控制台打开
  if ((widthDiff > 50 || heightDiff > 50) && !isFullScreen()) {
    //跳转到空白页面
    window.location.href = 'about:blank';
    alert('检测到异常窗口变化，请关闭开发者工具');
  }
  lastWidth = window.innerWidth;
  lastHeight = window.innerHeight;
});

function isFullScreen() {
  return (
    document.fullscreenElement ||
    document.webkitFullscreenElement ||
    document.msFullscreenElement
  );
}
```

汇总

```js
(() => {
  document.addEventListener('contextmenu', (e) => e.preventDefault());

  document.addEventListener('keydown', (e) => {
    if (
      e.keyCode === 123 || // F12
      (e.ctrlKey && e.shiftKey && e.keyCode === 67) || // Ctrl+Shift+C
      (e.ctrlKey && e.shiftKey && e.keyCode === 73) || // Ctrl+Shift+I
      (e.ctrlKey && e.keyCode === 85)
    ) {
      // Ctrl+U
      e.preventDefault();
    }
  });

  let lastWidth = window.innerWidth;
  let lastHeight = window.innerHeight;

  window.addEventListener('resize', () => {
    const widthDiff = Math.abs(window.innerWidth - lastWidth);
    const heightDiff = Math.abs(window.innerHeight - lastHeight);

    // 如果窗口尺寸变化但不是全屏切换，可能是控制台打开
    if ((widthDiff > 50 || heightDiff > 50) && !isFullScreen()) {
      //跳转到空白页面
      alert('检测到异常窗口变化，请关闭开发者工具');
      window.location.href = 'about:blank';
    }
    lastWidth = window.innerWidth;
    lastHeight = window.innerHeight;
  });

  function isFullScreen() {
    return (
      document.fullscreenElement ||
      document.webkitFullscreenElement ||
      document.msFullscreenElement
    );
  }
})();
```
