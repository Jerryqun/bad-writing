---
nav: Js
group: 基础概念
toc: content
title: js异常类型
---

## js 异常类型

```js

// 1、Error: 基本错误 其他的错误类型都继承自该类型
// Error 类型一般都是开发人员自己抛出的异常
try {
  throw new Error('ConardLi抛出的异常');
} catch (error) {
  console.log(error);
}


//  2、SyntaxError: 语法错误 (表示不符合编程语言的语法规范)
const = name

// 此类异常发生在 JavaScript 解析/编译时，此类异常一旦发生，导致整个js文件都无法执行，而其他异常发生在代码运行 时，这一类的错误会导致在错误出现的那一行之后的代码无法执行，但在那一行之前的代码不会受到影响。


// 3、TypeError: 类型错误
const str = 'cq'
str()

//4、ReferenceError: 引用错误
//引用一个不存在的变量时发生的错误

// 5、RangeError: 边界错误
//数组长度为负数或超长
// 数字类型的方法参数超出预定义范围
//函数堆栈调用超过最大值

var a = [1]
a.length = -1

// 6、URIError: 在调用 URI 相关的方法中 URL 无效时抛出的异常，主要包括 encodeURI、decodeURI()、encodeURIComponent()、decodeURIComponent()、escape()和unescape(）几个函数

decodeURIComponent('%%')

//7、自定义错误类型

class UnAuthError extends Error { }

class ParamError extends Error { }

function controller() {
  throw new UnAuthError();
}




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<script>
    function a() {
        console.log('kokok')
    }
    const b = ''
    b()
    console.log('kokok')
</script>
<script>
    console.log('cq')
</script>

<body>
    <button onclick="a()">button</button>
</body>


</html>


致命的错误会阻碍同一个<script>标签里面后面的代码运行，不同<script> 不影响运行

```

## 如何避免堆栈溢出

1、使用循环替代递归：在某些情况下，可以将递归转换为迭代，避免深层递归导致的堆栈溢出。
2、尾递归优化：某些 JavaScript 引擎支持尾递归优化，这样可以在编译阶段消除栈帧的增加。确保最后一步是递归调用，且没有后续操作。
