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
 *  遇到不是number类型的值时会立即中断 并且返回已解析的值
 */

const num = parseInt('7*6', 10); // 7

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
```

## 转 Boolean

在条件判断时，除了 undefined，null， false， NaN， ''， 0， -0，其他所有值都转为 true，包括所有对象

## 暂时性死区

暂时性死区是浏览器的 bug：<br/>
检测一个未被声明的变量类型时，不会报错，会返回 undefined 如：console.log(typeof a) //undefined <br/>
而直接使用一个未定义的变量时会报错： ReferenceError: a is not defined<br/>
