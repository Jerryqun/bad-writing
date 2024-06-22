---
nav: Js
group: 设计模式
toc: content
title: 单例模式
---

## 单例模式

类只能 new 出一个对象  
对象可全局访问

```js
/**
 * 第一种普通版本
 */
let instance = null;
function getSingleInstance() {
  if (!instance) {
    instance = this;
    return instance;
  }
  return instance;
}

const ins1 = new getSingleInstance();
const ins2 = new getSingleInstance();

ins1 === ins2; // true

/**
 * 第二种惰性版本 （单例模式调用的时候才会生成实例）
 */

const CreateSingleV1 = function (fn) {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

/**
 * 弹框demo 使用惰性版本
 */

const createModal = function (message) {
  const box = document.createElement('div');
  box.innerHTML = message;
  box.className = 'box';
  document.body.appendChild(box);
  return box;
};

const createAlertMessaeg = CreateSingleV1(createModal);

modalAlert.onclick = function (params) {
  const alertMessaeg = createAlertMessaeg('yyds');
};

/**
 * 第三种闭包实现(单一职责)
 */

var Singleton = function (name) {
  this.name = name;
};

Singleton.prototype.getName = function () {
  alert(this.name);
};

Singleton.getInstance = (function (name) {
  var instance;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

var a = Singleton.getInstance('ConardLi');
var b = Singleton.getInstance('ConardLi2');

console.log(a === b); //true

// 类的单例模式
// 定义：保证一个类仅有一个实例，并提供一个访问它的全局访问点。
class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }

  getName() {
    console.log(this.name);
  }

  getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }

    return this.instance;
  }
}

const singleton = new Singleton();

const a = singleton.getInstance('a');
const b = singleton.getInstance('b');

console.log(a);
console.log(b);
console.log(a === b);
```

```js
class Single {
    static instance: any
    private constructor() { }
    public static getInstance() {
        if (Single.instance) {
            return Single.instance
        }
        Single.instance = new Single()
        return Single.instance
    }
    a() { }
    b() { }
}

const a = Single.getInstance()
const b = Single.getInstance()
console.log(a === b) // true
```
