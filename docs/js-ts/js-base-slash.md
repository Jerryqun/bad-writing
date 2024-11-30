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

## 直接量字符

记忆： d ==> digit（数字） s ==> space（空白） w ==> word（单词）

| 字符 | 匹配                                                      |
| ---- | --------------------------------------------------------- |
| \d   | 匹配一个数字字符（0-9）                                   |
| \D   | 匹配一个非数字字符                                        |
| \w   | 匹配一个字母、数字或下划线（Word character）              |
| \W   | 匹配一个非字母数字下划线字符                              |
| \s   | 匹配一个空白字符（空格、制表符等）                        |
| \S   | 匹配一个非空白字符                                        |
| .    | 匹配除换行符\n 和回车符之外的任何单个字符，等效于 [^\n\r] |

## 字符集合

^写在[]里面是反义字符组

```js
var reg = /[abc]/; //匹配括号中任意一个字母
console.log(reg.test('aaa hello world1')); //true

var reg = /[0-9]/; //匹配任意一个数字
console.log(reg.test('aaa hello world1')); //true

var reg = /[^xyz]/; //包含xyz返回false 匹配除xyz之外的任何字符(xyx看做一个整体)
console.log(reg.test('xyz')); //false
```

## 边界符

^ 匹配输入开始。表示匹配行首的文本（以谁开始)。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符后的开始处。

$ 匹配输入结尾。表示匹配行尾的文本（以谁结束）。如果多行（multiline）标志被设为 true，该字符也会匹配一个断行（line break）符的前的结尾处。

如果 ^和 $ 在一起，表示必须是精确匹配。

```js
var rg = /abc/;
// /abc/ 只要包含有abc这个字符串返回的都是true
console.log(rg.test('abc')); //true
console.log(rg.test('abcd')); //true
console.log(rg.test('aabcd')); //true
console.log('---------------------------');
// 必须是以abc开头的字符串才会满足
var reg = /^abc/;
console.log(reg.test('abc')); // true
console.log(reg.test('abcd')); // true
console.log(reg.test('aabcd')); // false
console.log('---------------------------');
// 必须是以abc结尾的字符串才会满足
var reg = /abc$/;
console.log(reg.test('abc')); // true
console.log(reg.test('qweabc')); // true
console.log(reg.test('aabcd')); // false
console.log('---------------------------');
var reg1 = /^abc$/; // 精确匹配 要求必须是 abc字符串才符合规范
console.log(reg1.test('abc')); // true
console.log(reg1.test('abcd')); // false
console.log(reg1.test('aabcd')); // false
console.log(reg1.test('abcabc')); // false
```

## 字符集与边界符一起使用

```js
//// 三选一 只有是a 或者是 b  或者是c 这三个字母才返回 true
var reg = /^[abc]$/;
console.log(reg.test('a')); //true
console.log(reg.test('b')); //true
console.log(reg.test('c')); //true
console.log(reg.test('aa')); //false

// 26个英文字母(大写和小写都可以)任何一个字母返回 true
var reg = /^[0-9A-Za-z]$/;
console.log(reg.test('a')); //true
console.log(reg.test('A')); //true
console.log(reg.test('2')); //true
console.log(reg.test('!')); //false

var reg = /^[^0-9A-Za-z]$/; //^反义字符 只要包含方括号内的字符，都返回 false
console.log(reg.test('a')); //false
console.log(reg.test('A')); //false
console.log(reg.test('2')); //false
console.log(reg.test('!')); //true
```

## 零宽单词和非零宽单词的边界

`\b`
如果你想匹配单词 "cat" 在字符串中的出现，而不想匹配 "caterpillar" 中的 "cat"，可以使用 \b：

```js
const regex = /\bcat\b/;
const str1 = 'The cat is on the mat.';
const str2 = 'The caterpillar is cute.';

console.log(regex.test(str1)); // 输出: true
console.log(regex.test(str2)); // 输出: false
```

## 数量词

| 字符  | 含义      |
| ----- | --------- |
| `\*`  | >=0 次    |
| +     | ≥1 次     |
| ？    | 0 或 1 次 |
| {n}   | n 次      |
| {n,}  | ≥n 次     |
| {n,m} | n 到 m 次 |

## 贪婪模式和非贪婪模式

贪婪模式：尽可能多的匹配（首先取最多可匹配的数量为一组进行匹配），当匹配剩余的字符串，还会继续尝试新的匹配，直到匹配不到为止，为默认模式。

非贪婪模式：尽可能少的匹配（每次取最少匹配的数量为一组进行匹配），直到匹配不到为止 (使用方法：在量词后加上?)

```js
//贪婪模式
var reg = /\d{3,6}/g;
var str = '12345678';
console.log(reg.exec(str)); //[ '123456', index: 0, input: '12345678', groups: undefined ]
console.log(reg.exec(str)); //null

//非贪婪模式
var reg = /\d{3,6}?/g;
var str = '123456789';
console.log(reg.exec(str)); //[ '123', index: 0, input: '123456789', groups: undefined ]
console.log(reg.exec(str)); //[ '456', index: 3, input: '123456789', groups: undefined ]
console.log(reg.exec(str)); //[ '789', index: 6, input: '123456789', groups: undefined ]
console.log(reg.exec(str)); //null
console.log(reg.exec(str)); //[ '123', index: 0, input: '123456789', groups: undefined ]
```

## 选择

```js
var reg = /html|css|js/g;
var str = 'helloworldcsshtml';
console.log(reg.exec(str)); //[ 'css', index: 10, input: 'helloworldcsshtml', groups: undefined ]
console.log(reg.exec(str)); //[ 'html', index: 13, input: 'helloworldcsshtml', groups: undefined ]
```

分组

```js
var reg = /briupbriupbriup/;
console.log(reg.test('briup')); //false
console.log(reg.test('briupbriup')); //false
console.log(reg.test('briupbriupbriup'));
console.log(reg.test('briupbriupbriupbriup'));

var reg = /^(briup){3}$/;
console.log(reg.test('briup')); //false
console.log(reg.test('briupbriup')); //false
console.log(reg.test('briupbriupbriup')); //true
console.log(reg.test('briupbriupbriupbriup')); //false
```

## 捕获和引用

```js
// 被正则表达式匹配（捕获）到的字符串会被暂存起来。其中，由分组捕获的串会从1开始编号，于是我们可以引用这些串
var reg = /(\d{4})-(\d{2})-(\d{2})/;
var str = '2023-06-28';
reg.exec(str);
console.log(RegExp.$1); //2023
console.log(RegExp.$2); //06
console.log(RegExp.$3); //28

// 嵌套分组的捕获 : 规则是以左括号出现的顺序进行捕获
var reg = /((apple) is (a (fruit)))/;
reg.exec('apple is a fruit');
console.log(RegExp.$1); //apple is a fruit
console.log(RegExp.$2); //apple
console.log(RegExp.$3); //a fruit
console.log(RegExp.$4); //fruit

// 引用： 正则表达式里也能进行引用，这称为反向引用
var reg = /(\w{3}) is \1/;
console.log(reg.test('kid is kid')); // true
console.log(reg.test('dik is dik')); // true
console.log(reg.test('kid is dik')); // false
console.log(reg.test('dik is kid')); // false
//\1引用了第一个被分组所捕获的串，换言之，表达式是动态决定的。

//注意，如果编号越界了，则会被当成普通的表达式：
var reg = /(\w{3}) is \6/;
reg.test('kid is kid'); // false
reg.test('kid is \6'); // true
```
