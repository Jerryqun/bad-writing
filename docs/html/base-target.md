---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: target="_blank"有哪些问题
mobile: false
---

## target="\_blank"有哪些问题

1、安全隐患：新打开的窗口可以通过 window.opener 获取到来源页面的 window 对象即使跨域也可以。
某些属性的访问被拦截，是因为跨域安全策略的限制。 但是，比如修改 window.opener.location 的值，指向另外一个地址，
这样新窗口有可能会把原来的网页地址改了并进行页面伪装来欺骗用户。

2、新打开的窗口与原页面窗口共用一个进程，若是新页面有性能不好的代码也会影响原页面

3、window.opener 测试 demo

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>菜鸟教程(runoob.com)</title>
    <script>
      function openWin() {
        myWindow = window.open('', '', 'width=200,height=100');
        myWindow.document.write('<p>这是我的窗口</p>');
        myWindow.focus();
        myWindow.opener.document.write('<p>这个是源窗口!</p>');
      }
    </script>
  </head>

  <body>
    <input type="button" value="打开我的窗口" onclick="openWin()" />
  </body>
</html>
```
