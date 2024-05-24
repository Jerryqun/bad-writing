---
nav: Js
group: 设计模式
toc: content
title: 工厂模式
---

## 工厂模式

```js
function createPerson(name, age) {
  const o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function () {
    alert(this.name);
  };
  return o;
}

const person = createPerson('cq', 18);
```
