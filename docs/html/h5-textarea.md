---
nav: Html
group:
  title: H5
  order: 1
toc: content
title: textarea 向上顶demo
mobile: false
---

## textarea 向上顶 demo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      body {
        margin: 0;
      }

      .wrapper {
        height: 100vh;
        display: flex;
        flex-direction: column;
        color: white;
      }

      nav {
        height: 60px;
        background-color: blue;
        position: fixed;
        width: 100%;
      }

      main {
        margin-top: 60px;
        background-color: pink;
        height: 100%;
        flex: 1;
        overflow-y: scroll;
      }

      footer {
        background-color: red;
        width: 100%;
        display: flex;
      }

      textarea {
        min-height: 50px;
        max-height: 300px;
        padding: 0;
        width: 100%;
      }
    </style>
  </head>

  <body>
    <div class="wrapper">
      <nav>nav</nav>
      <main>main</main>
      <footer>
        <textarea></textarea>
      </footer>
    </div>
    <script>
      var textarea = document.querySelector('textarea');

      textarea.addEventListener('input', (e) => {
        textarea.style.height = 50 + 'px'; // 删除文本内容，调整高度
        textarea.style.height = e.target.scrollHeight + 'px';
      });
    </script>
  </body>
</html>
```
