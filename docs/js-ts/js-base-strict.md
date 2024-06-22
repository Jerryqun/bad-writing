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

## 严格模式

- 全局变量必须先声明再使用
- 禁止使用 with

```js
// 非严格模式
const obj = { a: 1, b: 2 };
with (obj) {
  console.log(a, b); // 1 2
}

// 严格模式
('use strict');
const obj = { a: 1, b: 2 };
with (obj) {
  console.log(a, b); // Strict mode code may not include a with statement
}
```

- 创建 eval 作用域

```js
'use strict';
var a = 10;
eval("var a =20;console.log('in eval',a)");
console.log('a', a);

// in eval 20
// 10
```

- 禁止 this 指向 window

```js
'use strict';
function a() {
  console.log('this', this); // undefined
}
a();
```

- 函数参数不能重复
