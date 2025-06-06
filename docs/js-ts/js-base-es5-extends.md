---
nav: Js
group: 基础概念
toc: content
title: ES5继承
---

## ES5 继承

<a target="_blank" href="https://juejin.cn/post/6844903889553063949">参考</a>

### 原型链继承

缺点<br/>
1、每个实例对引用类型属性的修改都会被其他的实例共享，非引用类型不会 <br/>
2、在创建 Child 实例的时候，无法向 Parent 传参。这样就会使 Child 实例没法自定义自己的属性（名字） <br/>

```js
function parent() {
  this.name = 'cq';
  this.names = ['cw', 'ww'];
}

function children() {}

children.prototype = new parent();
children.prototype.constructor = children;

var child1 = new children();
console.log('child1.name', child1.name); // cq
child1.name = 'zcq';
child1.names.push('xq');
console.log('child1.name', child1.name); // zcq

var child2 = new children();
console.log('child2.name', child2.name); // cq
console.log('child2.names', child2.names); // ["cw", "ww", "xq"];
```

### 借用构造函数(经典继承)

优点： <br/>
1、解决了每个实例对引用类型属性的修改都会被其他的实例共享的问题 <br/>
2、子类可以向父类传参 <br/>
缺点 <br/>
1、 每次都要执行父构造函数 <br/>
2、无法复用父类的公共函数(父类原型对象上的属性和方法无法继承) <br/>

```js
function Parent(params) {
  console.log('params', params); // {a: 1}
  this.name = ['23aaa', 'xv'];
}

Parent.prototype.getName = function () {
  console.log('ok');
};

function Child(params) {
  Parent.call(this, params);
}

var child = new Child({ a: 1 });
child.getName(); //  TypeError: child.getName is not a function
console.log('child.name', child.name); // ['23aaa', 'xv']
```

### 组合式继承(原型链继承和借用构造函数合并)

优点<br/>
1、 解决了每个实例对引用类型属性的修改都会被其他的实例共享的问题<br/>
2、子类可以向父类传参<br/>
3、 可实现父类方法复用<br/>
缺点<br/>
1、 需执行两次父类构造函数，第一次是 Child.prototype = new Parent(),第二次是 Parent.call(this, name)造成不必要的浪费<br/>

```js
function Parent(name) {
  this.name = name;
  this.body = ['foot', 'hand'];
}

function Child(name, age) {
  Parent.call(this, name);
  this.age = age;
}

Child.prototype = new Parent();
Child.prototype.constructor = Child;

var arzhChild1 = new Child('arzh1', '18');
arzhChild1.body.push('head1');
console.log(arzhChild1.name, arzhChild1.age); //arzh1 18
console.log(arzhChild1.body); //[ 'foot', 'hand', 'head1' ]

var arzhChild2 = new Child('arzh2', '20');
arzhChild2.body.push('head2');
console.log(arzhChild2.name, arzhChild2.age); //arzh2 20
console.log(arzhChild2.body); //[ 'foot', 'hand', 'head2' ]
```

### 原型式继承

缺点: 同原型链继承一样，每个实例对引用类型属性的修改都会被其他的实例共享

```js
function createObj(obj) {
  function f() {}
  f.prototype = obj;
  return new f();
}
```

### 寄生式继承

缺点: 同借用构造函数一样，无法复用父类函数，每次创建对象都会创建一遍方法

```js
function createEnhanceObj(obj) {
  const clone = Object.create(obj);
  clone.a = 1;
  clone.func = () => {};
  return clone;
}
```

### 寄生组合式继承

`es6 里面 extends 源码使用的就是这种方式`

```js
function inheritPrototype(Parent, Child) {
  Child.prototype = Object.create(Parent.prototype); //创建父类原型的一个副本,把副本赋值给子类原型
  Child.prototype.constructor = Child;
}

function Parent(name) {
  this.name = name;
}

Parent.prototype.getName = function () {
  console.log(this.name);
};

function Child(color) {
  Parent.call(this, 'arzh');
  this.color = color;
}

inheritPrototype(Parent, Child);

var arzhChild = new Child('red');
console.log(arzhChild.name); // 'arzh'

// es6 extends源码
function _possibleConstructorReturn(self, call) {
  // ...
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self;
}

function _inherits(subClass, superClass) {
  // ...
  //看到没有
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true,
    },
  });
  if (superClass)
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass);
}

var Parent = function Parent() {
  // 验证是否是 Parent 构造出来的 this
  _classCallCheck(this, Parent);
};

var Child = (function (_Parent) {
  _inherits(Child, _Parent);

  function Child() {
    _classCallCheck(this, Child);

    return _possibleConstructorReturn(
      this,
      (Child.__proto__ || Object.getPrototypeOf(Child)).apply(this, arguments),
    );
  }

  return Child;
})(Parent);
```

### es6 继承

```js
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toString() {
    return this.x + '' + this.y;
  }
}

class ColorPoint extends Point {
  constructor(x, y, color) {
    super(x, y); //调用父类的constructor(x, y)
    this.color = color;
  }

  toString() {
    return this.color + ' ' + super.toString(); // 调用父类的toString()
  }
}

var colorPoint = new ColorPoint('1', '2', 'red');

console.log(colorPoint.toString()); // red 12

ColorPoint.__proto__ === Point; // true
Object.getPrototypeOf(B) === Point;
```

## es5 中的的构造函数和 es6 中的 class 有什么区别

ES5 和 ES6 中的类有几个关键的区别。下面是它们之间的一些主要差异：

class 语法实际上是构造函数的语法糖

### 1. 语法

- **ES5** 使用构造函数和原型链来创建类：

  ```js
  function Person(name) {
    this.name = name;
  }

  Person.prototype.sayHello = function () {
    console.log('Hello, ' + this.name);
  };
  ```

- **ES6** 引入了 `class` 关键字，让类的定义更简洁和直观：

  ```js
  class Person {
    constructor(name) {
      this.name = name;
    }

    sayHello() {
      console.log('Hello, ' + this.name);
    }
  }
  ```

### 2. 继承

- **ES5** 通过构造函数和原型链实现继承：

  ```js
  function Employee(name, job) {
    Person.call(this, name);
    this.job = job;
  }

  Employee.prototype = Object.create(Person.prototype);
  Employee.prototype.constructor = Employee;
  ```

- **ES6** 使用 `extends` 关键字来简化继承：
  ```js
  class Employee extends Person {
    constructor(name, job) {
      super(name); // 调用父类构造函数
      this.job = job;
    }
  }
  ```

### 3. 静态方法

- **ES5** 需要直接将方法添加到构造函数上：

  ```js
  Person.saySomething = function () {
    console.log('I am a person.');
  };
  ```

- **ES6** 使用 `static` 关键字定义静态方法：
  ```js
  class Person {
    static saySomething() {
      console.log('I am a person.');
    }
  }
  ```

### 4. Getter 和 Setter

- **ES5** 使用原型创建 getter 和 setter：

  ```js
  function Person(name) {
    this._name = name;
  }

  Object.defineProperty(Person.prototype, 'name', {
    get: function () {
      return this._name;
    },
    set: function (value) {
      this._name = value;
    },
  });
  ```

- **ES6** 直接在类中使用：

  ```js
  class Person {
    constructor(name) {
      this._name = name;
    }

    get name() {
      return this._name;
    }

    set name(value) {
      this._name = value;
    }
  }
  ```

### 5. 作用域

- **ES5** 中，`this` 的值取决于函数的调用方式，可能会导致混淆。
- **ES6** 中的箭头函数可以避免 `this` 的问题，适合用作类方法，保持 `this` 的上下文。

总的来说，ES6 引入的类语法更清晰、更易于理解，同时也引入了许多便捷的特性，使得面向对象编程更加直观和高效。
