---
nav: Js
toc: content
group: 基础概念
mobile: false
title: 自定义事件
---

## 自定义事件

```js
//js 自定义事件 Event
// 用法：第一个参数是事件名称，第二个参数是修饰符，通过dispatchEvent派发，addEventListener调用

import { Button } from 'antd';
export default () => {
  let event = new Event('XX', { cancelable: false, bubbles: true });
  addEventListener('XX', function () {
    console.log(1212);
  });
  return (
    <Button
      onClick={() => {
        document.dispatchEvent(event);
      }}
    >
      hello
    </Button>
  );
};

/**
 * <!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>菜鸟教程(runoob.com)</title>
</head>

<body>
    <button>按钮</button>
</body>

<script>
    let myEvent = document.createEvent('CustomEvent');
    myEvent.initEvent('myEvent', true, true)
    let btn = document.querySelector('button')
    btn.addEventListener('myEvent', function (e) {
        console.log(e)
        console.log(e.detail)
    })
    setTimeout(() => {
        btn.dispatchEvent(myEvent)
    }, 2000)
</script>
</html>
 */
```
