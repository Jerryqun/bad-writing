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

使用对象字面量实现

```js
const VehicleFactory = {
  createCar(make, model) {
    return {
      type: 'car',
      make: make,
      model: model,
    };
  },
  createBike(make, model) {
    return {
      type: 'bike',
      make: make,
      model: model,
    };
  },
};

// 使用工厂创建车辆对象
const car1 = VehicleFactory.createCar('Honda', 'Civic');
const bike1 = VehicleFactory.createBike('Ducati', 'Monster');

console.log(car1); // { type: 'car', make: 'Honda', model: 'Civic' }
console.log(bike1); // { type: 'bike', make: 'Ducati', model: 'Monster' }
```
