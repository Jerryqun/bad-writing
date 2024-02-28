---
nav: Js
toc: content
group: 基础概念
mobile: false
title: 严格模式和非严格模式
---

## 严格模式和非严格模式

1、export import 中默认为严格模式<br/>
2、谷歌控制台为非严格模式<br/>
3、严格模式申明 'use strict'<br/>

```js
/**
 * 使用 "use strict"，你可以确保不会意外地声明全局变量。我们从来没有声明变量 age，因为我们使用 "use strict"，它将抛出一个引用错误。
 * 如果我们不使用 "use strict"，它就会工作，因为属性 age 会被添加到全局对象中了。
 */

function getAge() {
  'use strict';
  age = 21;
  console.log(age);
}

getAge(); // ReferenceError

function getAge() {
  age = 21;
  console.log(age);
}

getAge(); // 21
window.age; // 21
```
