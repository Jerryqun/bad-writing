---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: monaco
mobile: false
---

## cdn 使用 monaco

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Monaco editor</title>
    <link
      rel="stylesheet"
      data-name="vs/editor/editor.main"
      href="https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs/editor/editor.main.min.css"
    />
  </head>

  <body>
    <div id="container" style="height:100vh"></div>
    <script src="https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs/loader.min.js"></script>
    <script>
      require.config({
        paths: {
          vs: 'https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs',
        },
      });
      require(['vs/editor/editor.main'], () => {
        monaco.editor.create(document.getElementById('container'), {
          value: `function x() {
  console.log("Hello world!");
}`,
          language: 'javascript',
          theme: 'vs-dark',
        });
      });
    </script>
  </body>
</html>
```
