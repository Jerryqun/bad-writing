---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: less转css
mobile: false
---

## less 转 css

<a href="https://less.bootcss.com/usage/#browser-usage" target="_blank">less.js</a>

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      less = { env: 'development', relativeUrls: true };
    </script>
    <script
      src="https://g.alicdn.com/code/lib/less.js/4.1.3/less.js"
      type="text/javascript"
    ></script>
  </head>

  <body>
    <div class="wrap">
      <div class="header">header</div>
      <div id="style-wrap"></div>
    </div>
    <script>
      async function getCss() {
        const { css } = await window.less.render(".wrap{.header{color:'red'}}");
        console.log('css', css);
        return css;
      }
      getCss();
    </script>
  </body>
</html>
```
