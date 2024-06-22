---
nav: Js
group: 基础概念
toc: content
title: 类中set get用法
---

## 类中 set get 用法

Getter 和 setter 是特殊类型的方法，可帮助你根据程序的需要委派对私有变量的不同级别的访问。
Getters 允许你引用一个值但不能编辑它。Setter 允许你更改变量的值，但不能查看其当前值。这些对于实现封装是必不可少的。
例如，新雇主可能能够了解 get 公司的员工人数，但无权 set 了解员工人数。

```ts
const fullNameMaxLength = 10;
class Employee {
  private _fullName = '';
  get fullName() {
    return this._fullName;
  }
  set fullName(newName) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error('fullName has a max length of ' + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = 'Bob Smith';

if (employee.fullName) {
  console.log(employee.fullName);
}
```
