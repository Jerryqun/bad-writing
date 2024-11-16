---
nav: Js
group: 基础概念
toc: content
mobile: false
title: 类型转换
---

## 类型转换

数据类型之间的转换可以分为下面三种：

1. 原始数据类型之间的转换
2. 原始数据类型转换为对象。
3. 对象转换为原始数据类型。

强制类型转换方式包括 Number()、parseInt()、parseFloat()、toString()、String()、Boolean()，这几种方法都比较类似

### 强制转换规则

#### Number

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

typeof NaN; // 'number'

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

#### Boolean()

调用 Boolean()函数进行转换。在将非布尔值类型转换为布尔值类型时，有一个总结：

false：布尔值 false  
undefined：未定义的值  
null：空值  
0：数字 0  
-0：负零  
NaN：非数字值  
''：空字符串  
除了以上七个值外，其他值（包括对象、数组、函数等）在转换为布尔值时都会返回 true。这种规则使得 JS 中的大多数值被视为真值（truthy）

```js
console.log(Boolean()); // false
console.log(Boolean('Ywis')); // tru
console.log(Boolean(123)); // true
console.log(Boolean(NaN)); // false
console.log(Boolean(undefined)); // false
console.log(Boolean(null)); // false
console.log(Boolean(true)); // true
```

### 对象转原始类型(ToPrimitive)

对象转原始类型，会调用内置的[ToPrimitive]函数，对于该函数而言，其逻辑如下：

- 如果有 Symbol.toPrimitive()方法，优先调用再返回
- 调用 valueOf()，如果转换为原始类型，则返回,如果不是原始类型，进行下一步
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

## [] == ! [] 为什么返回 true

<a  target="_blank" href='https://fe.ecool.fun/articles/technology/429'>参考</a>

```js

[] == ![]

[] == !true // 将空数组这个对象类型转换成布尔值

[] == false // ! 运算符对 true 进行取反

'' == false // 对 [] 进行 ToPrimitive 操作，返回一个空对象

0 == 0 // 将等号两边都转换成数字类型 Number('') === Number(false)
```

ToPrimitive 是 JavaScript 中用于将值转换为其对应的原始类型的抽象操作。

ToPrimitive 的转换规则如下：

如果值已经是原始类型（如数字、字符串、布尔值），则不进行任何转换，直接返回该值。  
如果值是对象类型，则调用它的 valueOf() 方法。如果返回结果是原始类型的值，则返回该值。  
如果 valueOf() 方法返回的不是原始类型的值，则调用对象的 toString() 方法。如果返回结果是原始类型的值，则返回该值。  
如果 toString() 方法返回的不是原始类型的值，则抛出一个 TypeError 的错误。

## == 的隐式类型转换规则

- 如果类型相同，无须进行类型转换；<br/>
- 如果其中一个操作值是 null 或者 undefined，那么另一个操作符必须为 null 或者 undefined，才会返回 true，否则都返回 false；
- 如果其中一个是 Symbol 类型，那么返回 false；
- 两个操作值如果为 string 和 number 类型，那么就会将字符串转换为 number；
- 如果一个操作值是 boolean，那么转换成 number；
- 如果一个操作值为 object 且另一方为 string、number 或者 symbol，
  就会把 object 转为原始类型再进行判断（调用 object 的 valueOf/toString 方法进行转换）。

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

## 自动转换成数值

除了+有可能把运算子转为字符串，其他运算符都会把运算子自动转成数值

```js
'5' - '2'; // 3
'5' * '2'; // 10
true - 1; // 0
false - 1; // -1
'1' - 1; // 0
'5' * []; // 0
false / '5'; // 0
'abc' - 1; // NaN
null + 1; // 1
undefined + 1; // NaN
```
