---
nav: Js
group: 基础概念
toc: content
mobile: false
title: 类型转换
---

## 装箱拆箱

```js
//装箱：把原始类型值转为对应的包装对象
let num = 1234.236;
//数值包装成 Number 对象
new Number(num);

let str = 'Hello';
//字符串包装成 String 对象
new String(str);

//拆箱：包装对象转为对应的原始类型值表现形式
//将 new Number 拆箱成 1234.236
new Number(num).valueOf(); // 1234.236

//将 new String 拆箱成 Hello
new String(num).valueOf();
```

## 强制类型转换

强制类型转换方式包括 Number()、parseInt()、parseFloat()、toString()、String()、Boolean()，这几种方法都比较类似

## Number() 方法的强制转换规则

- 如果是布尔值，true 和 false 分别被转换为 1 和 0；
- 如果是数字，返回自身；
- 如果是 null，返回 0；
- 如果是 undefined，返回 NaN；
- 如果是字符串，遵循以下规则：如果字符串中只包含数字（或者是 0X / 0x 开头的十六进制数字字符串，允许包含正负号），则将其转换为十进制；
- 如果字符串中包含有效的浮点格式，将其转换为浮点数值；如果是空字符串，将其转换为 0；如果不是以上格式的字符串，均返回 NaN；
- 如果是 Symbol，抛出错误；
- 如果是对象，并且部署了 [Symbol.toPrimitive] ，那么调用此方法，否则调用对象的 valueOf() 方法，如果 valueOf（）返回的还不是原始类型的值则调用 toSting()，然后依据前面的规则转换返回的值；
- 如果转换的结果是 NaN ，则调用对象的 toString() 方法，再次依照前面的顺序转换返回对应的值。

```js
Number(true); // 1
Number(false); // 0
Number('0111'); //111
Number(null); //0
Number(''); //0
Number('1a'); //NaN
Number(-0x11); //-17
Number('0X11'); //17

var obj = {
  value: 1,
  valueOf() {
    return 2;
  },
  toString() {
    return '3';
  },
  [Symbol.toPrimitive]() {
    return 4;
  },
};
console.log(obj + 1); // 输出5
// 因为有Symbol.toPrimitive，就优先执行这个；如果Symbol.toPrimitive这段代码删掉，
// 则执行valueOf打印结果为3；如果valueOf也去掉，则调用toString返回'31'(字符串拼接)
```

```js
10 + {}; //'10[object Object]'
/**
 * 过程
 * {}.valueOf() = {}
 * {}不是原始类型,继续调用toSting()
 * 得到[object Object]
 */
```

```js
[1, 2, undefined, 4, 5] + 10; //1,2,undefined,4,510
/**
 * 过程
 * [1,2,undefined,4,5].valueOf() =   [1,2,undefined,4,5]
 * [1,2,undefined,4,5]不是原始类型,继续调用toSting()
 * 得到1,2,undefined,4,5
 */
```

## == 的隐式类型转换规则

- 如果类型相同，无须进行类型转换；<br/>
- 如果其中一个操作值是 null 或者 undefined，那么另一个操作符必须为 null 或者 undefined，才会返回 true，否则都返回 false；
- 如果其中一个是 Symbol 类型，那么返回 false；
- 两个操作值如果为 string 和 number 类型，那么就会将字符串转换为 number；
- 如果一个操作值是 boolean，那么转换成 number；
- 如果一个操作值为 object 且另一方为 string、number 或者 symbol，
  就会把 object 转为原始类型再进行判断（调用 object 的 valueOf/toString 方法进行转换）。

## 对象转原始类型是根据什么流程运行的

对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：

- 如果有 Symbol.toPrimitive()方法，优先调用再返回
- 调用 valueOf()，如果转换为原始类型，则返回
- 调用 toString()，如果转换为原始类型，则返回
- 如果都没有返回原始类型，会报错

```js
var obj = {
  value: 3,
  valueOf() {
    return 4;
  },
  toString() {
    return '5';
  },
  [Symbol.toPrimitive]() {
    return 6;
  },
};
console.log(obj + 1); // 输出7

1 + '1'; // '11'
true + true; // 2
4 + [1, 2, 3]; // "41,2,3"

'a' + +'b'; // -> "aNaN" = 'a' + (+'b');

4 * '3'; // 12
4 * []; // 0 = > 4 * ([]).valueOf();  => ([]).valueOf() = []  => ([]).valueOf().toString() = ''
4 * [1, 2]; // NaN

let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return '1';
  },
};
a > -1; // true

Number([]) === 0; // true

// 在以上代码中，因为 a 是对象，所以会通过 valueOf 转换为原始类型再比较值。

let a = {
  valueOf() {
    return 0;
  },
  toString() {
    return '1';
  },
  // toPrimitive优先
  [Symbol.toPrimitive]() {
    return 2;
  },
};

a + 1 === 3; // true
```
