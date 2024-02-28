---
nav: Js
group: 进阶
toc: content
title: AST抽象语法树
---

## AST 抽象语法树

<a href="https://astexplorer.net/" target="_blank">在线 js 代码转 AST</a><br/>
<a href="https://ts-ast-viewer.com/#" target="_blank">在线 ts 代码转 AST</a><br/>

抽象语法树 (Abstract Syntax Tree)，简称 AST，它是源代码语法结构的一种抽象表示。它以树状的形式表现编程语言的语法结构，树上的每个节点都表示源代码中的一种结构。

既然代码的含义可以通过 AST 来表述，而 AST 又可以理解为一个 JS 对象，那我们可以通过程序代码对其进行处理

### AST 有什么用

1、代码编译
Babel，将 ES6 JavaScript 转化为 ES5 JavaScript。
TypeScript，将 TypeScript 转化为 JavaScript。
Sass，将 Sass 转化为 CSS。

2、代码加工
Prettier，代码美化，风格格式化。
ESLint, 修复语法错误。
uglifyJS，代码压缩，混淆。
@vue/compiler-dom，可以将 Vue 文件代码拆分成 template、script、style 三种代码类型片段。

3、代码分析
ESLint，代码语法检查。
Webpack，代码模块打包分析。

过程
1、Parsing（解析） ：这个过程由编译器实现，会经过词法分析和语法分析两个过程，生成 AST 。

2、Traversing（遍历）： 深度优先遍历 AST ，访问树上各个节点的信息（Node）。

3、Transforming（修改）： 在遍历的过程中可对节点信息进行修改/转化，生成新的 AST 。

4、Printing（输出）： 将转化后新的 AST 输出成新的代码块。

## 常见节点类型

1、literal(字面量) : 本身语义代表了一个值。

```js
let name = 'iceman'; // iceman ---> StringLiteral 字符串字面量
let age = 30; // 30 ---> NumberLiteral 数字字面量
const isMan = true; // true ---> BooleanLiteral 布林字面量
const reg = /\d/; // /\d/ ---> RegExpLiteral 正则字面量
```

2、Identifier(标识符) : 变量名、属性名、参数名等等一系列声明和引用的名字。

```js

import { request } form 'framework'; // request ---> Identifier
let name = 'iceman'; // name ---> Identifier
const age = 30; // age ---> Identifier
function talk(name) { // talk, name ---> Identifier
console.log(name); // console, log, name ---> Identifier
}
const obj = { // obj ---> Identifier
name: 'guang' // name ---> Identifier
}
```

3、Statement(语句) : 代码执行的最小单位。

```js
return 'iceman'; // ReturnStatement
if (age > 35) {
} // IfStatement
throw new Error('error'); // ThrowStatement
try {
} catch (e) {} // TryStatement
for (let i = 0; i < 5; i++) {} // ForStatement
```

4、Declaration(声明) : 声明语句是一种特殊的 Statement。

```js
const listlen = 1; // VariableDeclaration
let listName = 'user'; // VariableDeclaration
function getInfo(info) {
  // FunctionDeclaration
  if (info.isRun) {
    return info.name;
  }
  return '';
}
class Car {
  // ClassDeclaration
  constructor() {}
  method() {}
}
```

5、Expression(表达式) : expression 的特点是执行完成后会有返回值，这也是它和语句的区别

```js
[1, 2, 3]; // ArrayExpression 数组表达式
age = 1; // AssignmentExpression 赋值表达式
1 + 2; // BinaryExpression 二元表达式
var obj = {
  // ObjectExpression 对象表达式
  foo: 'foo',
  bar: function () {},
};
let getName = function () {}; // FunctionExpression 函数表达式
const getAge = (age) => {
  // ArrowFunctionExpression 箭头函数表达式
  return age;
};
```

6、Import : 导入模块，属于一种特殊的声明语句，有三种类型 ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier。

```js

import { environment } from 'framework'; // named import
import { request as req } from 'framework'; // namespaced import
import api from 'framework'; // default import
import \* as APP from 'framework'; // namespaced imort
```

7、Export : 导出模块，也属于一种特殊的声明，有三种类型 ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration。

```js

export \* from './iceman';
export default 'iceman';
export const ice = 'iceman';
```
