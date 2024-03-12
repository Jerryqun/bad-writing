---
nav: Js
group: 设计模式
toc: content
title: 观察者模式
---

## 观察者模式

```js
/**
 * 观察者模式定义了一种一对多的依赖关系，让多个观察者对象同时监听某一个目标对象，
 * 当这个目标对象的状态发生变化时，会通知所有观察者对象，使它们能够自动更新。
 * 观察者模式，解决的其实是模块间的耦合问题，有它在，即便是两个分离的、毫不相关的模块，也可以实现数据通信。
 * 但观察者模式仅仅是减少了耦合，并没有完全地解决耦合问题——被观察者必须去维护一套观察者的集合，
 * 这些观察者必须实现统一的方法供被观察者调用，两者之间还是有着说不清、道不明的关系。
 * 而发布-订阅模式，则是快刀斩乱麻了——发布者完全不用感知订阅者，不用关心它怎么实现回调方法，
 * 事件的注册和触发都发生在独立于双方的第三方平台（事件总线）上。发布-订阅模式下，实现了完全地解耦。
 * 但这并不意味着，发布-订阅模式就比观察者模式“高级”。在实际开发中，我们的模块解耦诉求并非总是需要它们完全解耦。如果两个模块之间本身存在关联，
 * 且这种关联是稳定的、必要的，那么我们使用观察者模式就足够了。
 * 而在模块与模块之间独立性较强、且没有必要单纯为了数据通信而强行为两者制造依赖的情况下，我们往往会倾向于使用发布-订阅模式。
 */

// 定义发布者类
class Publisher {
  constructor() {
    this.observers = [];
    console.log('Publisher created');
  }
  // 增加订阅者
  add(observer) {
    console.log('Publisher.add invoked');
    this.observers.push(observer);
  }
  // 移除订阅者
  remove(observer) {
    console.log('Publisher.remove invoked');
    this.observers.forEach((item, i) => {
      if (item === observer) {
        this.observers.splice(i, 1);
      }
    });
  }
  // 通知所有订阅者
  notify() {
    console.log('Publisher.notify invoked');
    this.observers.forEach((observer) => {
      observer.update(this);
    });
  }
}
// 定义订阅者类
class Observer {
  constructor() {
    console.log('Observer created');
  }
  update() {
    console.log('Observer.update invoked');
  }
}
```

在浏览器中会使用观察者模式来实现内置 API 的单向通信，例如 IntersectionObserver、MutationObserver、ResizeObserver 以及 PerformanceObserver 等，而发布 / 订阅模式则通常是框架提供的一种供外部开发者自定义通信的能力，例如浏览器中的 EventTarget、Node.js 中的 EventEmitter、Vue.js 中的 $emit 等。
