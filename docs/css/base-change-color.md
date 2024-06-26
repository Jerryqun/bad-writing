---
toc: content
group:
  title: 基础概念
  order: 2
title: 换肤方案
---

## 原始方式 js 方式

```jsx
export default () => {
  return (
    <iframe
      srcdoc={`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    .container {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
    }

    /**
light 模式下的 css
 */
    .light {
      background-color: #fff;
    }

    .light .header-wrapper {
      height: 48px;
      border-bottom: 1px solid #f5f5f5;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .light .header-wrapper .title {
      width: 100px;
      height: 20px;
      background-color: #f5f5f5;
      border-radius: 2px;
      margin-left: 55px;
    }

    .light .header-wrapper .action-wrapper {
      margin-right: 40px;
      display: flex;
      align-items: center;
    }

    .light .header-wrapper .action-wrapper .btn {
      display: inline-block;
      background-color: #f5f5f5;
      padding: 5px 10px;
      font-size: 14px;
      cursor: pointer;
    }

    .light .header-wrapper .action-wrapper .btn:hover {
      background-color: #d2d2d2;
    }

    .light .header-wrapper .action-wrapper .avatar {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #f5f5f5;
      margin-left: 30px;
    }

    .btn+.btn {
      margin-left: 10px;
    }

    .main-wrapper {
      position: absolute;
      left: 0;
      top: 48px;
      right: 0;
      bottom: 0;
      display: flex;
    }

    .light .side-wrapper {
      width: 210px;
      border-right: 1px solid #f5f5f5;
    }

    .side-wrapper .menu-wrapper {
      padding: 20px;
      list-style: none;
    }

    .light .side-wrapper .menu-wrapper .menu-item-wrapper {
      height: 20px;
      width: 100%;
      background-color: #f5f5f5;
    }

    .menu-item-wrapper+.menu-item-wrapper {
      margin-top: 10px;
    }

    .content-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .light .content-wrapper .content-tip {
      font-size: 16px;
      font-weight: bold;
      color: #333;
    }

    /**
dark 模式下的css
 */

    .dark {
      background-color: #1e1e20;
    }

    .dark .header-wrapper {
      height: 48px;
      border-bottom: 1px solid #8e8e93;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .dark .header-wrapper .title {
      width: 100px;
      height: 20px;
      background-color: #8e8e93;
      border-radius: 2px;
      margin-left: 55px;
    }

    .dark .header-wrapper .action-wrapper {
      margin-right: 40px;
      display: flex;
      align-items: center;
    }

    .dark .header-wrapper .action-wrapper .btn {
      display: inline-block;
      background-color: #8e8e93;
      padding: 5px 10px;
      font-size: 14px;
      cursor: pointer;
      color: #f0f0f0;
    }

    .dark .header-wrapper .action-wrapper .btn:hover {
      background-color: #999999;
    }

    .dark .header-wrapper .action-wrapper .avatar {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: #8e8e93;
      margin-left: 30px;
    }

    .dark .side-wrapper {
      width: 210px;
      border-right: 1px solid #8e8e93;
    }

    .dark .side-wrapper .menu-wrapper .menu-item-wrapper {
      height: 20px;
      width: 100%;
      background-color: #8e8e93;
    }

    .dark .content-wrapper .content-tip {
      font-size: 16px;
      font-weight: bold;
      color: #f0f0f0;
    }
  </style>
</head>

<body>
  <div id="container" class="container light">
    <section class="header-wrapper">
      <div class="title"></div>
      <div class="action-wrapper">
        <span id="lightBtn" class="btn">明亮模式</span>
        <span id="darkBtn" class="btn">暗黑模式</span>
        <span class="avatar"></span>
      </div>
    </section>
    <div class="main-wrapper">
      <section class="side-wrapper">
        <ul class="menu-wrapper">
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
        </ul>
      </section>
      <section class="content-wrapper">
        <div class="content-tip">主布局 content</div>
      </section>
    </div>
  </div>
</body>
<script>
  const lightBtn = document.getElementById('lightBtn');
  const darkBtn = document.getElementById('darkBtn');
  const containerEl = document.getElementById('container');
  lightBtn.addEventListener('click', function () {
    containerEl.classList.remove('dark');
    containerEl.classList.add('light');
  });
  darkBtn.addEventListener('click', function () {
    containerEl.classList.remove('light');
    containerEl.classList.add('dark');
  });
</script>

</html>`}
    />
  );
};
```

```html

```

## css 变量方式

```jsx
export default () => {
  return (
    <iframe
      srcdoc={`<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Document</title>
  <style>
    :root {
      --background-color: #fff;
      --border-color: #f5f5f5;
      --text-color: #333;
    }

    .container {
      position: relative;
      width: 100%;
      height: 100vh;
      overflow: hidden;
      background-color: var(--background-color);
    }

    .header-wrapper {
      height: 48px;
      border-bottom: 1px solid var(--border-color);
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .header-wrapper .title {
      width: 100px;
      height: 20px;
      background-color: var(--border-color);
      border-radius: 2px;
      margin-left: 55px;
    }

    .header-wrapper .action-wrapper {
      margin-right: 40px;
      display: flex;
      align-items: center;
    }

    .header-wrapper .action-wrapper .btn {
      display: inline-block;
      background-color: var(--border-color);
      padding: 5px 10px;
      font-size: 14px;
      cursor: pointer;
    }

    .header-wrapper .action-wrapper .btn:hover {
      background-color: #d2d2d2;
    }

    .header-wrapper .action-wrapper .avatar {
      display: inline-block;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background-color: var(--border-color);
      margin-left: 30px;
    }

    .btn+.btn {
      margin-left: 10px;
    }

    .main-wrapper {
      position: absolute;
      left: 0;
      top: 48px;
      right: 0;
      bottom: 0;
      display: flex;
    }

    .side-wrapper {
      width: 210px;
      border-right: 1px solid var(--border-color);
    }

    .side-wrapper .menu-wrapper {
      padding: 20px;
      list-style: none;
    }

    .side-wrapper .menu-wrapper .menu-item-wrapper {
      height: 20px;
      width: 100%;
      background-color: var(--border-color);
    }

    .menu-item-wrapper+.menu-item-wrapper {
      margin-top: 10px;
    }

    .content-wrapper {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .content-wrapper .content-tip {
      font-size: 16px;
      font-weight: bold;
      color: var(--text-color);
    }
  </style>
</head>

<body>
  <div id="container" class="container">
    <section class="header-wrapper">
      <div class="title"></div>
      <div class="action-wrapper">
        <span id="lightBtn" class="btn">明亮模式</span>
        <span id="darkBtn" class="btn">暗黑模式</span>
        <span class="avatar"></span>
      </div>
    </section>
    <div class="main-wrapper">
      <section class="side-wrapper">
        <ul class="menu-wrapper">
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
          <li class="menu-item-wrapper"></li>
        </ul>
      </section>
      <section class="content-wrapper">
        <div class="content-tip">主布局 content</div>
      </section>
    </div>
  </div>
</body>
<script>
  const lightBtn = document.getElementById('lightBtn');
  const darkBtn = document.getElementById('darkBtn');
  lightBtn.addEventListener('click', function () {
    document.documentElement.style.setProperty('--background-color', '#fff');
    document.documentElement.style.setProperty('--border-color', '#f5f5f5');
    document.documentElement.style.setProperty('--text-color', '#333');
  });
  darkBtn.addEventListener('click', function () {
    document.documentElement.style.setProperty(
      '--background-color',
      '#1e1e20',
    );
    document.documentElement.style.setProperty('--border-color', '#8e8e93');
    document.documentElement.style.setProperty('--text-color', '#f0f0f0');
  });
</script>

</html>`}
    />
  );
};
```
