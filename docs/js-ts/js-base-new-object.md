---
nav: Js
group: 基础概念
toc: content
title: 对象的几种创建方式
---

## 对象的几种创建方式

```js
// 1、工厂模式

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

//2、构造函数
function Person(name, age, ob) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    alert(this.name);
  };
  var person1 = new Person('dada', 1, 'web');
  var person2 = new Person('dada', 2, 'web');
}

//3、使用原型模式
function Person() {}
Person.prototype.name = 'da';
Person.prototype.age = 1;
Person.prototype.job = 'web';
Person.prototype.sayName = function () {
  alert(this.name);
};

var person1 = new Person();
person1.sayName(); //"dada"

var person2 = new Person();
person2.sayName(); //"dada"

alert(person1.sayName == person2.sayName); //true

// 4、组合
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ['da', 'dada'];
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    alert(this.name);
  },
};
var person1 = new Person('da1', 1);
var person2 = new Person('da2', 2);
person1.friends.push('dadada');
console.log(person1.friends); //["da","dada","dadada"]
console.log(person2.friends); //["da","dada"]
console.log(person1.friends === person2.friends); //false
console.log(person1.sayName === person2.sayName); //true
```
