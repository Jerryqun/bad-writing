---
nav: Js
toc: content
group: 基础概念
mobile: false
title: js正则
---

## 常用正则

要提取字符串 a{a.b}aa{a.c}aa {a.d}aaaa 中大括号 {} 内的内容

```js
const dd = 'a{a.b}aa{a.c}aa {a.d}aaaa';
const reg = /\{.*?\}/gi;
const match = dd.match(reg);
console.log('mat1ch', match);

// \{ 和 \}：这是转义字符，用于匹配字面上的大括号 { 和 }。
// (.*?)：这是一个捕获组，.*? 匹配任意字符（除了换行符）0次或多次，? 表示非贪婪匹配，即尽可能少地匹配字符。
// g：这个修饰符表示全局匹配，允许循环查找所有的匹配。
```

/^[a-zA-Z]+$/ 匹配只包含大小写字母的字符串

`+` 表示“一个或多个”
`*` 表示“零个或多个”
两者区别

```js
const regexStar = /a*/; // 使用 *，可以匹配零个或多个 'a'
console.log(regexStar.test('')); // true（匹配空字符串）
console.log(regexStar.test('a')); // true（匹配一个 'a'）
console.log(regexStar.test('aa')); // true（匹配两个 'a'）

const regexPlus = /a+/; // 使用 +，可以匹配一个或多个 'a'
console.log(regexPlus.test('')); // false（不匹配空字符串）
console.log(regexPlus.test('a')); // true（匹配一个 'a'）
console.log(regexPlus.test('aa')); // true（匹配两个 'a'）
```

## js 中的反斜杠

```bash
/ 斜杠
\ 反斜杠
```

在 JavaScript 中，反斜杠（\）是一个特殊字符，它用作转义字符。转义字符允许你在字符串字面量中插入那些无法直接包含的字符，比如换行符、制表符、引号等，或者其他有特殊意义的字符。

下面是一些常见的转义序列：

```bash
\n：换行符
\t：制表符（Tab）
\\：字面量的反斜杠
\"：双引号
\'：单引号
\b：退格符
\r：回车符
\f：换页符
```

当你需要在字符串中包含一个字面量的反斜杠时，你必须使用两个反斜杠 (\\)，因为单独的一个反斜杠会被视为转义序列的开始。

例如：

```js
// 正确地在字符串中包含反斜杠
let path = 'C:\\Program Files\\MyApp';

// 如果你打印这个字符串，它将显示为:
// C:\Program Files\MyApp
console.log(path);
```

在正则表达式中，反斜杠也用来转义特殊字符，以及表示特殊的字符类和构造。由于在字符串中反斜杠已经用作转义，所以在字符串形式的正则表达式中，你需要使用两个反斜杠来表示正则表达式中的一个反斜杠。例如：

```js
// 使用字符串创建正则表达式时，需要双重转义
let regex = new RegExp('\\\\'); // 表示一个字面量的反斜杠
```

在这个例子中，\\\\ 实际上表示一个字面量的反斜杠，在正则表达式中，因为每个反斜杠都要被转义一次。

## String.raw

String.raw 是用来获取一个模板字符串的原始字符串的，比如说，占位符（例如 ${foo}）会被处理为它所代表的其他字符串，而转义字符（例如 \n）不会。

```js
const mobilePhoneReg = /^1[345789]\d{9}$/;

mobilePhoneReg.test(13546565643); // true

const reg = new RegExp('^1[345789]d{9}$');
reg.test(13546565643); //false

const reg = new RegExp('^1[345789]\\d{9}$');
reg.test(13546565643); //true

const regObj = new RegExp(String.raw`1[345789]\d{9}$`);
regObj.test(13546565643); // true

const path = `C:\Documents\Projects\table.html`;
console.log('path', path); //'C:DocumentsProjects\table.html'

String.raw`C:\Documents\Projects\table.html`; // C:\Documents\Projects\table.html
```
