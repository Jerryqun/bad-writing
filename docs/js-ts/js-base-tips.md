---
nav: Js
toc: content
group: 基础概念
mobile: false
title: 随笔
---

## 随笔记录

<a href="https://juejin.cn/post/7229515080487370812">js 小众且好用的技巧</a>

```js
/**随机获取bool值 */

const getRandomBoolean = () => Math.random() >= 0.5;

/**获取是否是不是周末 */

const isWeekDay = (date) => [0, 6].includes(date.getDay());

/**方法用来判断当前字符串是否以另外一个给定的子字符串开头 第二个参数为从下标几开始 */
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// expected output: true
console.log(str1.startsWith('Sat', 3));
// expected output: false

/**手机号中间变成* */
const telFormat = (tel) => {
  const telStr = `${tel}`;
  return `${telStr.slice(0, 3)}****${telStr.slice(7)}`;
};

/**把多个空格替换成一个 */
const repspace = (str) => str.replace(/\s+/g, ' ');

/**字符串转数组 */
'123abc'.split('');
const s = [...'123abc'];
const [...chars] = '123abc';

/**
 * 依次打印
 fn1
 i am ok
 i am ok
 fn2
 */

const myPromise = new Promise((resolve) => resolve('i am ok'));

function fn1() {
  myPromise.then((res) => console.log(res));
  console.log('fn1');
}

async function fn2() {
  console.log(await myPromise);
  console.log('fn2');
}
fn1();
fn2();

/**
 * 数组的赋值是引用指针拷贝
 */

let a = { a: 1 };
let b = [a];
a = null;
console.log(b); // { a: 1 }

/**
 * 引入的模块只读
 */

// counter.js
let counter = 10;
export default counter;

//index.js

import myCounter from './counter.js';
myCounter += 1;
console.log(myCounter); // Error

/**
 * js bug
 */

parseInt(0.0000006); // 6

/**
 * js 获取用户选中的文本
 */

const getSelectedText = () => window.getSelection()?.toString();

/**
 * 字符串反转
 */

const reverseStr = (str) => str.split('').reverse().join('');

/**
 * 不会改变原来的值
 * padStart(16,'0') 不足16位在前面补齐0 到16位
 * padEnd(16,'0')  不足16位在后面补齐0 到16位
 */
'1'.padEnd(16, 0); //1000000000000000
'1'.padStart(16, 0); //0000000000000001

/**
 * 拷贝
 * ...相当于new了一个新对象 不会对原来对象产生影响
 */
const person = { name: 'cq' };
const cq = person;
cq.name = 'yl';
console.log(person); //'yl'
const dd = { ...person };
dd.name = 'dd';
console.log(person); // 'cq'

/**
 * 一元加号会尝试讲boolean类型转换为数字
 */

+true; //1
+false; //0
+'1'; // 1 typeof +'1'  = 'number'

/**
 * genterator 函数
 * 在遇到yield关键字时会暂停其执行
 * next方法可以携带一个参数， 该参数会被当做上一个yield表达式的返回值
 */

/**
 * 字符串代码执行
 */

const str = 'console.log(520)';
const fn = Function(str);
fn(); // 520

const safeEval = (code: string) => {
  try {
    return Function(code)();
  } catch (error) {
    console.log('safeEval error info', error);
  }
};

/**
 * 给一个数组增加属性
 */

const a = [1, 3, 4, 4];
a.count = 1;
console.log(a); //[1, 3, 4, 4,count:1];

/**
 * 缩写
 */
let x = (y = 2);
// 相当于  y = 2 ;let x = y
//  y = 2相当于给window上挂了一个全局属性 y

/** 结构对象 */

const a = { name: '1112' };
const b = { ...a };
console.log('b', b); //  { name: "1112" };
a.age = 12;
console.log('b', b); //  { name: "1112" };

const c = a;
console.log(c); //  { name: "1112", age: 12 };

/**
 * 暂时性死区
 */

let name = 'cq';
function getName() {
  console.log(name);
  let name = 'yl';
}
getName(); // ReferenceError

/**
 * parseInt
 *  第一个参数遇到不是number类型的值时会立即中断 并且返回已解析的值
 *  第一个参数是0x开头的 按照16进制
 */

const num = parseInt('7*6', 10); // 7
const num = parseInt('3', 2); // NaN 0 1 中没有3
const num = parseInt('2', 3); // 0 1 2  命中2
const num = parseInt('12', 3); // 1*3+2 = 5

['1', '2', '3'].map(parseInt); //  [1, NaN, NaN]

/**
 * Math.ceil()
 * Math.ceil() 函数总是返回大于等于给定数字的最小整数。
 */
console.log(Math.ceil(0.95));
// expected output: 1

console.log(Math.ceil(4));
// expected output: 4

console.log(Math.ceil(7.004));
// expected output: 8

console.log(Math.ceil(-7.004));
// expected output: -7

/**
 * Math.sqrt()
 * Math.sqrt() 函数返回一个数的平方根
 */
Math.sqrt(9); // 3

/**
 * ?? 只过滤 null 和undefined
 */

false ?? 1; // false
'' ?? 1; // ''
undefined ?? 1; // 1
null ?? 1; // 1

/**
 * lastIndexOf
 * 返回最后一个匹配的索引
 */

'www.baidu.com'.lastIndexOf('.'); //9

/**
 * new Date().getTime()获取的时间戳是以毫秒为单位
 * 1秒 = 1000毫秒
 */

/**
 * 解构
 */

const arr = [1, 2, 3, 4];
const [, a, b, c] = arr;
console.log(a, b, c); // 2 3 4

/**
 * 修改video的播放速度
 */

videoDom.playbackRate = 16; // 最快

/**
 * 数组扁平
 * flat方法不支持IE浏览器。
 */

const deps = {
  采购部: [1, 2, 3],
  人事部: [5, 8, 12],
  行政部: [5, 14, 79],
  运输部: [3, 64, 105],
};
let member = Object.values(deps).flat(Infinity);

function test(a, b, c, d) {}

// 与flat一样的效果
Array.prototype.flat = function () {
  this.toString()
    .split(',')
    .map((item) => +item);
};

// 输出 4
console.log(test.length);

/**
 * 无穷大
 * Infinity
 */

/**
 * 无穷小
 * -Infinity
 */

/**
 * Math.pow() 函数返回基数（base）的指数（exponent）次幂，即 base^exponent。
 * +-Math.pow(2, 53) ，超过会发生截断，等于 JS 能支持的最大数字。
 * 可以使用BigInt
 */

(Math.pow(2, 10) === 1024) === 2 ** 10;

/**
 * repeat
 */

var str = 'Runoob';
str.repeat(2); // RunoobRunoob

/**
 * Number.isFinite()
 * JavaScript中的Number.isFinite()方法用于检查传递的值是否为有限数
 */

Number.isFinite(Infinity); // false
Number.isFinite(NaN); // false
Number.isFinite(-Infinity); // false

Number.isFinite(0); // true
Number.isFinite(2e64); // true

Number.isFinite('0'); // false, would've been true with
// global isFinite('0')
Number.isFinite(null); // false, would've been true with
// global isFinite(null)

/**
 * es6 定义函数简写
 *  */

let es6Fun = {
  method() {},
};

void (function iife() {
  console.log('Invoked!');
})();

const ast = { a: 1 };
let newAst = {
  type: 'Program',
  body: [],
};
ast._context = newAst.body;
ast._context.push({ a: 1 });

console.log(newAst);

// newAst的body也会收到影响
// {
//   type: 'Program',
//   body: [{a:1}]
// }

// 字符串反转
const reverseStr = (str) => str.split('').reverse().join('');

//  使用扩展运算符将字符串拆分为字符数组
const str = 'JavaScript';
const characters = [...str];
console.log(characters); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// 多重分隔符拆分字符串
// 使用正则表达式和split方法在多个分隔符上拆分字符串
const str = 'java,css;javascript';
const data = str.split(/[,;]/);
console.log(data); // ["java", "css", "javascript"]

// 使用replace方法结合全局标志的正则表达式来替换所有出现的字符串
const str = 'I love JavaScript, JavaScript is amazing!';
console.log(str.replace(/JavaScript/g, 'Node.js')); // "I love Node.js, Node.js is amazing!"

//  fn() 里的函数声明虽然会提前，但不会提前到最外层，只会到 fn() 的顶层
//  里面的 foo = 3 修改的其实是里面函数的那个声明，不会影响到外部，所以最终的结果应该是 1
var foo = 1;
function fn() {
  foo = 3;
  return;
  function foo() {
    // todo
  }
}
fn();
console.log(foo); // 1

// Arrary.prototype.indexOf() 是使用的严格相等算法 => NaN值永远不相等

// Array.prototype.includes() 是使用的零值相等算法 => NaN值视作相等

['apple', 'banana', NaN]
  .includes(NaN) // true
  [('apple', 'banana', NaN)].indexOf(NaN); // -1

/**
 * 页面打印
 */
window.print();

/**
 * 打印内容样式更改
 *
/* 使用@media print可以调整你需要的打印样式 */
// <style>
// @media print {
//     .noprint {
//         display: none;
//     }
// }
// </style>
// <div class="print">print</div>
// <div class="noprint">noprint</div>

/**
 * 阻止关闭事件
当你需要防止用户刷新或者关闭浏览器，你可以选择触发beforeunload事件，部分浏览器不能自定义文本内容
 */

window.onbeforeunload = function () {
  return '您确定要离开haorooms博客吗？';
};
```

## 执行一次

```js
const once = (func) => {
  const flag = false;
  let result;
  return function () {
    if (flag) return result;
    result = func.apply(this, arguments);
    flag = true;
    return result;
  };
};

// Define the function that sends the request
function requestSomeData() {
  // Send the request...
}

// Create a version of the function that can only be called once
const sendRequestOnce = once(sendRequest);

// Listen for clicks on a button and call the "once" function
const button = document.querySelector('button');
button.addEventListener('click', sendRequestOnce);
```

## memoize 函数

memoize 是 一个 JavaScript 函数，用于缓存给定函数的结果，以防止多次使用相同参数调用计算代价高昂的例程

```js
const memoize = (func) => {
  const cache = new Map();
  return function () {
    const paramsKey = JSON.stringify(arguments);
    if (cache.get(paramsKey)) {
      return cache.get(paramsKey);
    }
    const result = func.apply(this, arguments);
    cache.set(paramsKey, result);
    return result;
  };
};

function fibonacci(n) {
  if (n < 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Create a memoized version of the function
const memoizedFibonacci = memoize(fibonacci);

// Call the memoized function with multiple input values
console.time('total');
console.time('sub1');
const result1 = memoizedFibonacci(30);
console.timeEnd('sub1');
console.time('sub2');
const result2 = memoizedFibonacci(29);
console.timeEnd('sub2');
console.time('sub3');
const result3 = memoizedFibonacci(30);
console.timeEnd('sub3');
console.timeEnd('total');
```

## 递归函数名解耦

```js
//当你需要写一个递归函数的时候，你声明了一个函数名，但是每次修改函数名的时候总会忘记修改内部的函数名。argument为函数内部对象，包含传入函数的所有参数，arguments.callee代表函数名。
// 这是一个最基础的斐波那契数列
function fibonacci(n) {
  const fn = arguments.callee;
  if (n <= 1) return 1;
  return fn(n - 1) + fn(n - 2);
}
```

## 判断横竖屏

```js
function hengshuping() {
  if (window.orientation == 180 || window.orientation == 0) {
    alert('竖屏状态！');
  }
  if (window.orientation == 90 || window.orientation == -90) {
    alert('横屏状态！');
  }
}
window.addEventListener(
  'onorientationchange' in window ? 'orientationchange' : 'resize',
  hengshuping,
  false,
);
```

横竖屏样式变更

```css
@media screen and (orientation: portrait) {
  body {
    background-color: red;
  }
}
@media screen and (orientation: landscape) {
  body {
    background-color: blue;
  }
}
```

## 标签页显隐

```js
const { hidden, visibilityChange } = (() => {
  let hidden, visibilityChange;
  if (typeof document.hidden !== 'undefined') {
    // Opera 12.10 and Firefox 18 and later support
    hidden = 'hidden';
    visibilityChange = 'visibilitychange';
  } else if (typeof document.msHidden !== 'undefined') {
    hidden = 'msHidden';
    visibilityChange = 'msvisibilitychange';
  } else if (typeof document.webkitHidden !== 'undefined') {
    hidden = 'webkitHidden';
    visibilityChange = 'webkitvisibilitychange';
  }
  return {
    hidden,
    visibilityChange,
  };
})();

const handleVisibilityChange = () => {
  console.log('当前被隐藏', document[hidden]);
};

document.addEventListener(visibilityChange, handleVisibilityChange, false);
```

## 实现全屏

```js
/**
 * 实现全屏
 */
function fullScreen() {
  const el = document.documentElement;
  const rfs =
    el.requestFullScreen ||
    el.webkitRequestFullScreen ||
    el.mozRequestFullScreen ||
    el.msRequestFullscreen;
  if (typeof rfs != 'undefined' && rfs) {
    rfs.call(el);
  }
}
fullScreen();

/**
 * 退出全屏
 */

function exitScreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) {
    document.mozCancelFullScreen();
  } else if (document.webkitCancelFullScreen) {
    document.webkitCancelFullScreen();
  } else if (document.msExitFullscreen) {
    document.msExitFullscreen();
  }
  if (typeof cfs != 'undefined' && cfs) {
    cfs.call(el);
  }
}
exitScreen();
```

## 屏幕录制

```js
const streamPromise = navigator.mediaDevices.getDisplayMedia();
streamPromise.then((stream) => {
  var recordedChunks = []; // 录制的视频数据

  var options = { mimeType: 'video/webm; codecs=vp9' }; // 设置编码格式
  var mediaRecorder = new MediaRecorder(stream, options); // 初始化MediaRecorder实例

  mediaRecorder.ondataavailable = handleDataAvailable; // 设置数据可用（录屏结束）时的回调
  mediaRecorder.start();

  // 视频碎片合并
  function handleDataAvailable(event) {
    if (event.data.size > 0) {
      recordedChunks.push(event.data); // 添加数据，event.data是一个BLOB对象
      download(); // 封装成BLOB对象并下载
    }
  }

  // 文件下载
  function download() {
    var blob = new Blob(recordedChunks, {
      type: 'video/webm',
    });
    // 此处可将视频上传到后端
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'test.webm';
    a.click();
    window.URL.revokeObjectURL(url);
  }
});
```

## JS 对象数组根据属性值或属性名分组方法

```js
/**
 * 属性值进行分组
 * @param array g
 * @param f
 * @returns
 */

const list = [
  { name: 'John', Average: 15, High: 10, DtmStamp: 1358226000000 },
  { name: 'Jane', Average: 16, High: 92, DtmStamp: 1358226000000 },
  { name: 'Jane', Average: 17, High: 45, DtmStamp: 1358226000000 },
  { name: 'John', Average: 18, High: 87, DtmStamp: 1358226000000 },
  { name: 'Jane', Average: 15, High: 10, DtmStamp: 1358226060000 },
  { name: 'John', Average: 16, High: 87, DtmStamp: 1358226060000 },
  { name: 'John', Average: 17, High: 45, DtmStamp: 1358226060000 },
  { name: 'Jane', Average: 18, High: 92, DtmStamp: 1358226060000 },
];

const groupBy = (array, f) => {
  const groups = {};
  array.forEach(function (o) {
    const group = JSON.stringify(f(o));
    groups[group] = groups[group] || [];
    groups[group].push(o);
  });
  return Object.keys(groups).map(function (group) {
    return groups[group];
  });
};

function test() {
  return groupBy(list, function (item) {
    return [item.name + item.High];
  });
}
var d = test();
console.log(d);

// 打印结果

const consoleList = [
  [
    {
      name: 'John',
      Average: 15,
      High: 10,
      DtmStamp: 1358226000000,
    },
  ],
  [
    {
      name: 'Jane',
      Average: 16,
      High: 92,
      DtmStamp: 1358226000000,
    },
    {
      name: 'Jane',
      Average: 18,
      High: 92,
      DtmStamp: 1358226060000,
    },
  ],
  [
    {
      name: 'Jane',
      Average: 17,
      High: 45,
      DtmStamp: 1358226000000,
    },
  ],
  [
    {
      name: 'John',
      Average: 18,
      High: 87,
      DtmStamp: 1358226000000,
    },
    {
      name: 'John',
      Average: 16,
      High: 87,
      DtmStamp: 1358226060000,
    },
  ],
  [
    {
      name: 'Jane',
      Average: 15,
      High: 10,
      DtmStamp: 1358226060000,
    },
  ],
  [
    {
      name: 'John',
      Average: 17,
      High: 45,
      DtmStamp: 1358226060000,
    },
  ],
];

/**
 * 属性名称进行分组
 */

const list = [
  { name: 'John' },
  { average: '15' },
  { high: '10' },
  { dtmStamp: '1358226000000' },

  { name: 'cq' },
  { average: '15' },
  { high: '10' },
  { dtmStamp: '1358226000000' },

  { name: 'zy' },
  { average: '15' },
  { high: '10' },
  { dtmStamp: '1358226000000' },

  { name: 'zy' },
  { average: '15' },
];

const groupByKey = (arr, key) => {
  const result = [];
  // 获取属性值为key的item的索引
  const index = arr
    .map((d, i) => (d.hasOwnProperty(key) ? i : 'no'))
    .filter((d) => d !== 'no');

  // 增加最后一项
  index.push(arr.length);
  index.reduce((a, b) => {
    result.push(arr.slice(a, b));
    return b;
  });
  return result;
};

const test = groupByKey(list, 'name');
console.log(test);

/**
 * 预计输出
 */

const outList = [
  [
    { name: 'John' },
    { average: '15' },
    { high: '10' },
    { dtmStamp: '1358226000000' },
  ],
  [
    { name: 'cq' },
    { average: '15' },
    { high: '10' },
    { dtmStamp: '1358226000000' },
  ],
  [
    { name: 'zy' },
    { average: '15' },
    { high: '10' },
    { dtmStamp: '1358226000000' },
  ],
  [{ name: 'zy' }, { average: '15' }],
];
```

```js
/**
 * 元素的实际高度
 * document.getElementById("div").offsetHeight
 * 元素的实际宽度
 * document.getElementById("div").offsetWidth
 * 元素距离左边的距离
 * document.getElementById("div").offsetLeft
 * 元素距离上边的距离
 * document.getElementById("div").offsetTop
 */
```

## createDocumentFragment

Document.createDocumentFragment()

创建一个新的空白的文档片段
let fragment = document.createDocumentFragment();

DocumentFragments (en-US) 是 DOM 节点。它们不是主 DOM 树的一部分。通常的用例是创建文档片段，将元素附加到文档片段，然后将文档片段附加到 DOM 树。在 DOM 树中，文档片段被其所有的子元素所代替。

因为文档片段存在于内存中，并不在 DOM 树中，所以将子元素插入到文档片段时不会引起页面回流（对元素位置和几何上的计算）。因此，使用文档片段通常会带来更好的性能。

```js
/**
 * 创建一个文档片段
 */

var element = document.getElementById('ul'); // assuming ul exists
var fragment = document.createDocumentFragment();
var browsers = ['Firefox', 'Chrome', 'Opera', 'Safari', 'Internet Explorer'];

browsers.forEach(function (browser) {
  var li = document.createElement('li');
  li.textContent = browser;
  fragment.appendChild(li);
});

element.appendChild(fragment);
```

## console.time

```js
console.time('times');
for (i = 0; i < 100000; i++) {
  // 代码部分
}
console.timeEnd('times'); //  times: 2.551025390625 ms

// 注意 time和timeEnd的两个参数必须保持一致
```

## Array.prototype.slice.call

<a href="https://juejin.cn/post/6844903550342938637" target="_blank">Array.prototype.slice</a>

Array.prototype.slice.call 是把类数组转成数组

```js
function test(a, b, c, d) {
  var arg = Array.prototype.slice.call(arguments, 0);
  console.log(arg);
}
test('a', 'b', 'c', 'd'); // ['a', 'b', 'c', 'd']

function test1(a, b, c, d) {
  var arg = [...arguments]; // Array.from(arguments)
  console.log('arg', arg);
}
test1('a', 'b', 'c', 'd'); // ['a', 'b', 'c', 'd']
```

## 暂时性死区

暂时性死区是浏览器的 bug：<br/>
检测一个未被声明的变量类型时，不会报错，会返回 undefined 如：console.log(typeof a) //undefined <br/>
而直接使用一个未定义的变量时会报错： ReferenceError: a is not defined<br/>

## 验证 setTimeout 递归产生的时差

```js
let time = 0;
let nowTime = +new Date();
let timer;
const poll = function () {
  timer = setTimeout(() => {
    const lastTime = nowTime;
    nowTime = +new Date();
    console.log('递归setTimeout(fn,0)产生时间差：', nowTime - lastTime);
    poll();
  }, 0);
  time++;
  if (time === 20) clearTimeout(timer);
};
poll();
```

## 数组置空

```js
const arr = [1, 3, 4, 5];
const arr1 = arr;
arr.length = 0;
console.log('arr', arr, 'arr1', arr1); // arr [] arr1 []

let arr = [1, 3, 4, 5];
const arr1 = arr;
arr = [];
console.log('arr', arr, 'arr1', arr1); // arr [] arr1 (4) [1, 3, 4, 5]
```

## 能否使用自闭合 script 标签引入脚本文件

不能。自闭合标签来自于 XML 语法，而不是 HTML 语法。

根据现在的 HTML 语法，只有不需要结束标签的 void element（如 img 之类的），或者是外部元素（如 svg）可以使用自闭合。script 标签显然不在此列。

```js

// 正确写法

<script src="..."></script>

// 错误写法

<script src="..." />
```

## 谷歌控制台 ƒ () { [native code] }

在谷歌控制台中看到 ƒ () { [native code] } 这种表示通常意味着你正在查看一个浏览器内置的原生函数或方法。这是控制台的一种展示方式，用来告诉你这个函数是由浏览器底层实现的，而不是由 JavaScript 编写的。

例如，当你在控制台输入 console.log 或者 document.getElementById 然后回车时，你可能会看到如下输出：

```js
ƒ log() { [native code] }
ƒ getElementById() { [native code] }
```

## window 和 Window 的区别

`window 是 Window 的实例对象`

```js
window.__proto__.constructor === Window;
```

## window.location.href 和 window.location.reload 的区别

1、当 window.location.href = 'xxxx' orgin 相同时不会刷新页面，只会切换路由，相当于 history.push

2、特别注意 history.push 不会全局刷新页面，如果用到了全局的 store，store 里面的数据不会清空，而 window.location.relad()会重置页面

## window.isNaN 和 Number.isNaN 的区别

### NaN 比较

NaN 与任何值比较都返回 false，包括 NaN 自己。

### Number.isNaN

判断传入值是否为 NaN 内部不会做任何转换

```js
Number.isNaN(Number('avc')); // true
Number.isNaN('avc'); // false

Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true
```

### window.isNaN

判断传入值是否是数字 内部会进行 Number 转换 转换不是 NaN 会返回 false 转换是 NaN 返回 true

```js
window.isNaN('abc'); // true
window.isNaN(1); // false
window.isNaN('1212'); // false
```

## slice 和 splice 区别

slice：ArrayObject.slice(start,end) start-开始截取的下标 ，end-结束截取的下标(截取出来后不包含 end)，不修改原数组

splice：通过删除或替换现有元素或者原地添加新的元素来修改数组，并以数组形式返回被修改的内容。此方法会改变原数组。

```js
/**
slice
 */
var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

console.log(citrus); //["Orange", "Lemon"]

var citrus = fruits.slice(["Orange"]);

console.log(citrus); //["Lemon"]

[1, 2, 3].slice(); //   [1, 2, 3]

/**
 * splice
 */

const months = ["Jan", "March", "April", "June"];
months.splice(1, 0, "Feb");
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, "May");
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

/**
 * substring
 * substring() 方法返回一个字符串在开始索引到结束索引之间的一个子集，或从开始索引直到字符串的末尾的一个子集。
 * 不会改变原字符串
 *

const a = "zcq001";
const b = a.substring(0, 3);
console.log(b); // "zcq"
console.log(a); //  "zcq001";

```

## setTimeout 实现 setInterval

```js
/**
 * 1
 */

let n = setTimeout(function () {
  console.log('start');
  //something
  n = setTimeout(arguments.callee, 2000);
}, 2000);

/**
 * 2
 */

function say() {
  //something
  setTimeout(say, 200);
}
setTimeout(say, 200);
```

## arguments.callee

arguments.callee 是一个在旧版的 JavaScript 中使用的属性，它引用当前执行的函数。在严格模式（'use strict'）下，使用 arguments.callee 会引发一个错误，因为它在 ECMAScript 5 严格模式中被禁用了。

在非严格模式下，arguments.callee 可以用于递归地调用匿名函数，例如：

```js
var factorial = function (n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
};

console.log(factorial(5)); // 输出: 120
```

## setTimeout 的第三个参数

setTimeout 的第三个参数。 第三个参数会作为回掉函数的入参

```js
for (var i = 0; i < 5; i++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    1000,
    i,
  );
}
// 0 1 2 3 4

// 运用闭包解决上述问题
const fu = (i) => {
  let j = i;
  return () => {
    console.log('j', j);
  };
};
for (var i = 0; i < 5; i++) {
  fu(i)();
}

for (var i = 0; i < 5; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j);
    }, j * 1000);
  })(i);
}

// 迭代器

const arr = [1, 2, 3, 4];
function test() {
  let i = 0;
  return function () {
    return arr[i++] || '结束咯';
  };
}
```

## replace

str.replace(regexp|substr, newSubStr|function)

<a target="_blank" href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace#%E8%AF%AD%E6%B3%95">参考</a>

```js
// 全局替换
let str = 'Mr Blue has a blue house and a blue car';
str.replace(/blue/gi, 'red'); // 输出结果：'Mr red has a red house and a red car'

// function:  一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果
//   function(target,index){
//    return ...
//   }

'a124'.replace('a', function (c) {
  return 0;
}); // '0124'

/**
 * HTML标签转义（< -> &lt;）
 * @param sHtml
 * @returns
 */
function html2Escape(sHtml) {
  return sHtml.replace(/[<>&"]/g, function (c) {
    console.log('c', c);
    return { '<': '&lt;', '>': '&gt;', '&': '&amp;', '"': '&quot;' }[c];
  });
}

/**
 *  HTML标签反转义（&lt; -> <）
 * @param str
 * @returns
 */
function escape2Html(str) {
  var arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
    return arrEntities[t];
  });
}
```

## reduce

```js
[1, 2, 3, 4].reduce((a, b) => {
  console.log(a, b);
});

// 1 2 undefined 3 undefined 4 a为上一轮的返回值  第一次默认为数组第一项

[1, 2, 3, 4].reduce((a, b) => {
  console.log(a, b);
}, 0);

// 0 1 undefined 2 undefined 3  undefined 4
```

## pushState、replaceState、popstate

pushState(state, title, url)

state: 可以通过 history.state 读取  
title: 可选参数，暂时没有用，建议传个短标题  
url: 改变过后的 url 地址

浏览器不会向服务端请求数据，直接改变 url 地址，可以类似的理解为变相版的 hash；但不像 hash 一样，浏览器会记录 pushState 的历史记录，可以使用浏览器的前进、后退功能作用

replaceState 用法与 pushState 一样 区别是不会增加浏览器历史记录，只是修改浏览器当前记录。

当用户在浏览器点击进行后退、前进，或者在 js 中调用 histroy.back()，history.go()，history.forward()等，会触发 popstate 事件；但 pushState、replaceState 不会触发这个事件。

当界面跳转到 pushState 或者 replaceState 的时候 就会打印出来 pushState 或者 replaceState 之前设置的 state 值

```js
window.onpopstate = function (e) {
  console.log(JSON.stringify(e.state));
};
```

## ||运算符

使用|| 运算符 我们可以返回第一个真值 如果所有的值都是假值 则返回最后一个值

```js
const one = false || {} || null; // {}
const two = null || false || ''; // ''
const three = [] || 0 || true; // []
```

## ++i 与 i++的区别

看被加的数 ，如果在前面返回被加前的数 如果在后面就反悔被加后的数

```js
let i = 1;
let a = ++i; // a = 2  i = 2

let g = 1;
let b = g++; // b = 1  i = 2
```

## window.setImmediate

谷歌不兼容的 window.setImmediate()

在 MDN 上看 window.setImmediate() 描述

该方法可能不会被批准成为标准，目前只有最新版本的 Internet Explorer 和 Node.js 0.10+实现了该方法。

它遇到了 Gecko(Firefox) 和 Webkit (Google/Apple) 的阻力.

该特性是非标准的，所以说、请尽量不要在生产环境中使用它！

语法：  
var immediateID = setImmediate(func, [param1, param2, ...]);  
var immediateID = setImmediate(func);  
window.clearImmediate 方法可以用来取消通过 setImmediate 设置的将要执行的语句, 就像 window.clearTimeout 对应于 window.setTimeout 一样.

因为其兼容性不好，所以会用 setTimeout(fn, 0) 来代替，常用来： 处理 繁重任务（数组操作等等）以避免 js 执行阻塞 ui 的更新

## console 控制台中加入 cdn 资源

```js
function addScript(url = 'https://code.jquery.com/jquery-3.5.1.min.js') {
  const script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
```

## 阻止事件传播兼容写法

```js
/**
 * 阻止冒泡事件
 */

function stopPropagation(e) {
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
  } else {
    // 兼容ie
    e.cancelBubble = true;
  }
}

/**
 * 阻止默认事件
 */

function preventDefault(e) {
  if (typeof e.preventDefault === 'function') {
    e.preventDefault();
  } else {
    // 兼容ie
    e.returnValue = false;
  }
}
```

## Function.length

在 JavaScript 中，Function.length 属性表示函数在定义时期望接收的参数个数。这个属性并不考虑函数在运行时可能接收的额外参数，也不考虑默认参数、剩余参数和解构赋值参数。

```js
function myFunction(a, b, c) {
  // 函数体
}

console.log(myFunction.length); // 输出：3
```

## 加速访问全局对象 window

```js
window.a = 1;

// 访问局部变量 window, 不需要向上遍历作用域链, 缩短查找时间, 同时在压缩代码时局部变量 window 可被压缩
(function (window) {
  alert(a);
})(window);

// 向上遍历到顶层作用域, 访问速度变慢, 全局变量 window 不能被压缩
(function () {
  alert(a);
})();
```

## b 转 KB，MB，GB,TB,PB 等形式

```js
function convertBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let unitIndex = 0;

  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024;
    unitIndex++;
  }

  return `${parseFloat(bytes.toFixed(decimals))} ${units[unitIndex]}`;
}

// 示例
console.log(convertBytes(1024)); // 1.00 KB
console.log(convertBytes(1234)); // 1.21 KB
console.log(convertBytes(12345)); // 12.06 KB
console.log(convertBytes(1234567)); // 1.18 MB
console.log(convertBytes(123456789)); // 117.74 MB
console.log(convertBytes(12345678901)); // 11.50 GB
```

## 如何判断一个 js 对象是否存在循环引用

使用 WeakSet 或者 Set

```js
// 使用set
function existCircular(obj) {
  let cache = new Set();
  function helper(obj) {
    let values = Object.values(obj);
    for (let i = 0; i < values.length; i++) {
      if (cache.has(values[i])) {
        return true;
      }

      // 不是引用数据类型，直接跳过
      if (typeof values[i] !== 'object' || values[i] === null) continue;
      cache.add(values[i]);

      let flag = helper(values[i]);
      // 如果 flag 是 false, 那么继续遍历，如果是 true,说明已经存在环了， 直接 return true
      if (flag) {
        return true;
      }
    }
    return false;
  }

  return helper(obj);
}

// 测试
const person = { name: 'kalory', age: 18 };
person.onwer = person;

existCircular(person); // true
// 使用WeakSet
const exitCircular = (obj, cache = new WeakSet()) => {
  const values = Object.values(obj);
  for (let i = 0; i < values.length; i++) {
    if (cache.has(values[i])) {
      return true;
    }
    if (typeof values[i] !== 'object' || values[i] === null) {
      continue;
    }
    cache.add(values[i]);
    return exitCircular(values[i], cache);
  }
  return false;
};
```

使用 JSON 序列化

```js
function isCircular(obj) {
  try {
    JSON.stringify(obj);
    return false;
  } catch (e) {
    return true;
  }
}

// 测试循环引用
const a = {};
const b = { a };
a.b = b;

console.log(isCircular(a)); // 输出：true
```

## JavaScript 和 BOM、DOM 、ECMAScript、Nodejs 之间是什么关系

JavaScript 是一种编程语言，实现了 ECMAScript 标准。BOM 和 DOM 是浏览器提供的 API，用于与浏览器交互并操作文档。Node.js 是一个独立的运行时环境，使 JavaScript 可以在服务器端运行，并提供了一组用于构建网络应用程序的 API。

## fill

如果这个入参的类型是引用类型，那么 fill 在填充坑位时填充的其实就是入参的引用  
其实这 7 个数组对应了同一个引用、指向的是同一块内存空间，它们本质上是同一个数组。因此当你修改第 0 行第 0 个元素的值时，第 1-6 行的第 0 个元素的值也都会跟着发生改变。

```js
const arr = new Array(7).fill([]);

arr[0][0] = 1;
console.log('arr', arr.toString()); //1,1,1,1,1,1,1
```
