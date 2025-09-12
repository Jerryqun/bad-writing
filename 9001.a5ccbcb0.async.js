"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9001],{39001:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"js \u5C0F\u4F17\u4E14\u597D\u7528\u7684\u6280\u5DE7",paraId:0,tocIndex:0},{value:`/**\u968F\u673A\u83B7\u53D6bool\u503C */

const getRandomBoolean = () => Math.random() >= 0.5;

/**\u83B7\u53D6\u662F\u5426\u662F\u4E0D\u662F\u5468\u672B */

const isWeekDay = (date) => [0, 6].includes(date.getDay());

/**\u65B9\u6CD5\u7528\u6765\u5224\u65AD\u5F53\u524D\u5B57\u7B26\u4E32\u662F\u5426\u4EE5\u53E6\u5916\u4E00\u4E2A\u7ED9\u5B9A\u7684\u5B50\u5B57\u7B26\u4E32\u5F00\u5934 \u7B2C\u4E8C\u4E2A\u53C2\u6570\u4E3A\u4ECE\u4E0B\u6807\u51E0\u5F00\u59CB */
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// expected output: true
console.log(str1.startsWith('Sat', 3));
// expected output: false

/**\u624B\u673A\u53F7\u4E2D\u95F4\u53D8\u6210* */
const telFormat = (tel) => {
  const telStr = \`\${tel}\`;
  return \`\${telStr.slice(0, 3)}****\${telStr.slice(7)}\`;
};

/**\u628A\u591A\u4E2A\u7A7A\u683C\u66FF\u6362\u6210\u4E00\u4E2A */
const repspace = (str) => str.replace(/\\s+/g, ' ');

/**\u5B57\u7B26\u4E32\u8F6C\u6570\u7EC4 */
'123abc'.split('');
const s = [...'123abc'];
const [...chars] = '123abc';

/**
 * \u4F9D\u6B21\u6253\u5370
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
 * \u6570\u7EC4\u7684\u8D4B\u503C\u662F\u5F15\u7528\u6307\u9488\u62F7\u8D1D
 */

let a = { a: 1 };
let b = [a];
a = null;
console.log(b); // { a: 1 }

/**
 * \u5F15\u5165\u7684\u6A21\u5757\u53EA\u8BFB
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
 * js \u83B7\u53D6\u7528\u6237\u9009\u4E2D\u7684\u6587\u672C
 */

const getSelectedText = () => window.getSelection()?.toString();

/**
 * \u5B57\u7B26\u4E32\u53CD\u8F6C
 */

const reverseStr = (str) => str.split('').reverse().join('');

/**
 * \u4E0D\u4F1A\u6539\u53D8\u539F\u6765\u7684\u503C
 * padStart(16,'0') \u4E0D\u8DB316\u4F4D\u5728\u524D\u9762\u8865\u9F500 \u523016\u4F4D
 * padEnd(16,'0')  \u4E0D\u8DB316\u4F4D\u5728\u540E\u9762\u8865\u9F500 \u523016\u4F4D
 */
'1'.padEnd(16, 0); //1000000000000000
'1'.padStart(16, 0); //0000000000000001

/**
 * \u62F7\u8D1D
 * ...\u76F8\u5F53\u4E8Enew\u4E86\u4E00\u4E2A\u65B0\u5BF9\u8C61 \u4E0D\u4F1A\u5BF9\u539F\u6765\u5BF9\u8C61\u4EA7\u751F\u5F71\u54CD
 */
const person = { name: 'cq' };
const cq = person;
cq.name = 'yl';
console.log(person); //'yl'
const dd = { ...person };
dd.name = 'dd';
console.log(person); // 'cq'

/**
 * \u4E00\u5143\u52A0\u53F7\u4F1A\u5C1D\u8BD5\u8BB2boolean\u7C7B\u578B\u8F6C\u6362\u4E3A\u6570\u5B57
 */

+true; //1
+false; //0
+'1'; // 1 typeof +'1'  = 'number'

/**
 * genterator \u51FD\u6570
 * \u5728\u9047\u5230yield\u5173\u952E\u5B57\u65F6\u4F1A\u6682\u505C\u5176\u6267\u884C
 * next\u65B9\u6CD5\u53EF\u4EE5\u643A\u5E26\u4E00\u4E2A\u53C2\u6570\uFF0C \u8BE5\u53C2\u6570\u4F1A\u88AB\u5F53\u505A\u4E0A\u4E00\u4E2Ayield\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C
 */

/**
 * \u5B57\u7B26\u4E32\u4EE3\u7801\u6267\u884C
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
 * \u7ED9\u4E00\u4E2A\u6570\u7EC4\u589E\u52A0\u5C5E\u6027
 */

const a = [1, 3, 4, 4];
a.count = 1;
console.log(a); //[1, 3, 4, 4,count:1];

/**
 * \u7F29\u5199
 */
let x = (y = 2);
// \u76F8\u5F53\u4E8E  y = 2 ;let x = y
//  y = 2\u76F8\u5F53\u4E8E\u7ED9window\u4E0A\u6302\u4E86\u4E00\u4E2A\u5168\u5C40\u5C5E\u6027 y

/** \u7ED3\u6784\u5BF9\u8C61 */

const a = { name: '1112' };
const b = { ...a };
console.log('b', b); //  { name: "1112" };
a.age = 12;
console.log('b', b); //  { name: "1112" };

const c = a;
console.log(c); //  { name: "1112", age: 12 };

/**
 * \u6682\u65F6\u6027\u6B7B\u533A
 */

let name = 'cq';
function getName() {
  console.log(name);
  let name = 'yl';
}
getName(); // ReferenceError

/**
 * parseInt
 *  \u7B2C\u4E00\u4E2A\u53C2\u6570\u9047\u5230\u4E0D\u662Fnumber\u7C7B\u578B\u7684\u503C\u65F6\u4F1A\u7ACB\u5373\u4E2D\u65AD \u5E76\u4E14\u8FD4\u56DE\u5DF2\u89E3\u6790\u7684\u503C
 *  \u7B2C\u4E00\u4E2A\u53C2\u6570\u662F0x\u5F00\u5934\u7684 \u6309\u716716\u8FDB\u5236
 */

const num = parseInt('7*6', 10); // 7
const num = parseInt('3', 2); // NaN 0 1 \u4E2D\u6CA1\u67093
const num = parseInt('2', 3); // 0 1 2  \u547D\u4E2D2
const num = parseInt('12', 3); // 1*3+2 = 5

['1', '2', '3'].map(parseInt); //  [1, NaN, NaN]

/**
 * Math.ceil()
 * Math.ceil() \u51FD\u6570\u603B\u662F\u8FD4\u56DE\u5927\u4E8E\u7B49\u4E8E\u7ED9\u5B9A\u6570\u5B57\u7684\u6700\u5C0F\u6574\u6570\u3002
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
 * Math.sqrt() \u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u6570\u7684\u5E73\u65B9\u6839
 */
Math.sqrt(9); // 3

/**
 * ?? \u53EA\u8FC7\u6EE4 null \u548Cundefined
 */

false ?? 1; // false
'' ?? 1; // ''
undefined ?? 1; // 1
null ?? 1; // 1

/**
 * lastIndexOf
 * \u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u5339\u914D\u7684\u7D22\u5F15
 */

'www.baidu.com'.lastIndexOf('.'); //9

/**
 * new Date().getTime()\u83B7\u53D6\u7684\u65F6\u95F4\u6233\u662F\u4EE5\u6BEB\u79D2\u4E3A\u5355\u4F4D
 * 1\u79D2 = 1000\u6BEB\u79D2
 */

/**
 * \u89E3\u6784
 */

const arr = [1, 2, 3, 4];
const [, a, b, c] = arr;
console.log(a, b, c); // 2 3 4

/**
 * \u4FEE\u6539video\u7684\u64AD\u653E\u901F\u5EA6
 */

videoDom.playbackRate = 16; // \u6700\u5FEB

/**
 * \u6570\u7EC4\u6241\u5E73
 * flat\u65B9\u6CD5\u4E0D\u652F\u6301IE\u6D4F\u89C8\u5668\u3002
 */

const deps = {
  \u91C7\u8D2D\u90E8: [1, 2, 3],
  \u4EBA\u4E8B\u90E8: [5, 8, 12],
  \u884C\u653F\u90E8: [5, 14, 79],
  \u8FD0\u8F93\u90E8: [3, 64, 105],
};
let member = Object.values(deps).flat(Infinity);

function test(a, b, c, d) {}

// \u4E0Eflat\u4E00\u6837\u7684\u6548\u679C
Array.prototype.flat = function () {
  this.toString()
    .split(',')
    .map((item) => +item);
};

// \u8F93\u51FA 4
console.log(test.length);

/**
 * \u65E0\u7A77\u5927
 * Infinity
 */

/**
 * \u65E0\u7A77\u5C0F
 * -Infinity
 */

/**
 * Math.pow() \u51FD\u6570\u8FD4\u56DE\u57FA\u6570\uFF08base\uFF09\u7684\u6307\u6570\uFF08exponent\uFF09\u6B21\u5E42\uFF0C\u5373 base^exponent\u3002
 * +-Math.pow(2, 53) \uFF0C\u8D85\u8FC7\u4F1A\u53D1\u751F\u622A\u65AD\uFF0C\u7B49\u4E8E JS \u80FD\u652F\u6301\u7684\u6700\u5927\u6570\u5B57\u3002
 * \u53EF\u4EE5\u4F7F\u7528BigInt
 */

(Math.pow(2, 10) === 1024) === 2 ** 10;

/**
 * repeat
 */

var str = 'Runoob';
str.repeat(2); // RunoobRunoob

/**
 * Number.isFinite()
 * JavaScript\u4E2D\u7684Number.isFinite()\u65B9\u6CD5\u7528\u4E8E\u68C0\u67E5\u4F20\u9012\u7684\u503C\u662F\u5426\u4E3A\u6709\u9650\u6570
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
 * es6 \u5B9A\u4E49\u51FD\u6570\u7B80\u5199
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

// newAst\u7684body\u4E5F\u4F1A\u6536\u5230\u5F71\u54CD
// {
//   type: 'Program',
//   body: [{a:1}]
// }

// \u5B57\u7B26\u4E32\u53CD\u8F6C
const reverseStr = (str) => str.split('').reverse().join('');

//  \u4F7F\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\u5C06\u5B57\u7B26\u4E32\u62C6\u5206\u4E3A\u5B57\u7B26\u6570\u7EC4
const str = 'JavaScript';
const characters = [...str];
console.log(characters); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

// \u591A\u91CD\u5206\u9694\u7B26\u62C6\u5206\u5B57\u7B26\u4E32
// \u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u548Csplit\u65B9\u6CD5\u5728\u591A\u4E2A\u5206\u9694\u7B26\u4E0A\u62C6\u5206\u5B57\u7B26\u4E32
const str = 'java,css;javascript';
const data = str.split(/[,;]/);
console.log(data); // ["java", "css", "javascript"]

// \u4F7F\u7528replace\u65B9\u6CD5\u7ED3\u5408\u5168\u5C40\u6807\u5FD7\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\u6765\u66FF\u6362\u6240\u6709\u51FA\u73B0\u7684\u5B57\u7B26\u4E32
const str = 'I love JavaScript, JavaScript is amazing!';
console.log(str.replace(/JavaScript/g, 'Node.js')); // "I love Node.js, Node.js is amazing!"

//  fn() \u91CC\u7684\u51FD\u6570\u58F0\u660E\u867D\u7136\u4F1A\u63D0\u524D\uFF0C\u4F46\u4E0D\u4F1A\u63D0\u524D\u5230\u6700\u5916\u5C42\uFF0C\u53EA\u4F1A\u5230 fn() \u7684\u9876\u5C42
//  \u91CC\u9762\u7684 foo = 3 \u4FEE\u6539\u7684\u5176\u5B9E\u662F\u91CC\u9762\u51FD\u6570\u7684\u90A3\u4E2A\u58F0\u660E\uFF0C\u4E0D\u4F1A\u5F71\u54CD\u5230\u5916\u90E8\uFF0C\u6240\u4EE5\u6700\u7EC8\u7684\u7ED3\u679C\u5E94\u8BE5\u662F 1
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

// Arrary.prototype.indexOf() \u662F\u4F7F\u7528\u7684\u4E25\u683C\u76F8\u7B49\u7B97\u6CD5 => NaN\u503C\u6C38\u8FDC\u4E0D\u76F8\u7B49

// Array.prototype.includes() \u662F\u4F7F\u7528\u7684\u96F6\u503C\u76F8\u7B49\u7B97\u6CD5 => NaN\u503C\u89C6\u4F5C\u76F8\u7B49

['apple', 'banana', NaN]
  .includes(NaN) // true
  [('apple', 'banana', NaN)].indexOf(NaN); // -1

/**
 * \u9875\u9762\u6253\u5370
 */
window.print();

/**
 * \u6253\u5370\u5185\u5BB9\u6837\u5F0F\u66F4\u6539
 *
/* \u4F7F\u7528@media print\u53EF\u4EE5\u8C03\u6574\u4F60\u9700\u8981\u7684\u6253\u5370\u6837\u5F0F */
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
 * \u963B\u6B62\u5173\u95ED\u4E8B\u4EF6
\u5F53\u4F60\u9700\u8981\u9632\u6B62\u7528\u6237\u5237\u65B0\u6216\u8005\u5173\u95ED\u6D4F\u89C8\u5668\uFF0C\u4F60\u53EF\u4EE5\u9009\u62E9\u89E6\u53D1beforeunload\u4E8B\u4EF6\uFF0C\u90E8\u5206\u6D4F\u89C8\u5668\u4E0D\u80FD\u81EA\u5B9A\u4E49\u6587\u672C\u5185\u5BB9
 */

window.onbeforeunload = function () {
  return '\u60A8\u786E\u5B9A\u8981\u79BB\u5F00haorooms\u535A\u5BA2\u5417\uFF1F';
};
`,paraId:1,tocIndex:0},{value:`const once = (func) => {
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
`,paraId:2,tocIndex:1},{value:"memoize \u662F \u4E00\u4E2A JavaScript \u51FD\u6570\uFF0C\u7528\u4E8E\u7F13\u5B58\u7ED9\u5B9A\u51FD\u6570\u7684\u7ED3\u679C\uFF0C\u4EE5\u9632\u6B62\u591A\u6B21\u4F7F\u7528\u76F8\u540C\u53C2\u6570\u8C03\u7528\u8BA1\u7B97\u4EE3\u4EF7\u9AD8\u6602\u7684\u4F8B\u7A0B",paraId:3,tocIndex:2},{value:`const memoize = (func) => {
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
`,paraId:4,tocIndex:2},{value:`//\u5F53\u4F60\u9700\u8981\u5199\u4E00\u4E2A\u9012\u5F52\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u4F60\u58F0\u660E\u4E86\u4E00\u4E2A\u51FD\u6570\u540D\uFF0C\u4F46\u662F\u6BCF\u6B21\u4FEE\u6539\u51FD\u6570\u540D\u7684\u65F6\u5019\u603B\u4F1A\u5FD8\u8BB0\u4FEE\u6539\u5185\u90E8\u7684\u51FD\u6570\u540D\u3002argument\u4E3A\u51FD\u6570\u5185\u90E8\u5BF9\u8C61\uFF0C\u5305\u542B\u4F20\u5165\u51FD\u6570\u7684\u6240\u6709\u53C2\u6570\uFF0Carguments.callee\u4EE3\u8868\u51FD\u6570\u540D\u3002
// \u8FD9\u662F\u4E00\u4E2A\u6700\u57FA\u7840\u7684\u6590\u6CE2\u90A3\u5951\u6570\u5217
function fibonacci(n) {
  const fn = arguments.callee;
  if (n <= 1) return 1;
  return fn(n - 1) + fn(n - 2);
}
`,paraId:5,tocIndex:3},{value:`function hengshuping() {
  if (window.orientation == 180 || window.orientation == 0) {
    alert('\u7AD6\u5C4F\u72B6\u6001\uFF01');
  }
  if (window.orientation == 90 || window.orientation == -90) {
    alert('\u6A2A\u5C4F\u72B6\u6001\uFF01');
  }
}
window.addEventListener(
  'onorientationchange' in window ? 'orientationchange' : 'resize',
  hengshuping,
  false,
);
`,paraId:6,tocIndex:4},{value:"\u6A2A\u7AD6\u5C4F\u6837\u5F0F\u53D8\u66F4",paraId:7,tocIndex:4},{value:`@media screen and (orientation: portrait) {
  body {
    background-color: red;
  }
}
@media screen and (orientation: landscape) {
  body {
    background-color: blue;
  }
}
`,paraId:8,tocIndex:4},{value:`const { hidden, visibilityChange } = (() => {
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
  console.log('\u5F53\u524D\u88AB\u9690\u85CF', document[hidden]);
};

document.addEventListener(visibilityChange, handleVisibilityChange, false);
`,paraId:9,tocIndex:5},{value:`/**
 * \u5B9E\u73B0\u5168\u5C4F
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
 * \u9000\u51FA\u5168\u5C4F
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
`,paraId:10,tocIndex:6},{value:`const streamPromise = navigator.mediaDevices.getDisplayMedia();
streamPromise.then((stream) => {
  var recordedChunks = []; // \u5F55\u5236\u7684\u89C6\u9891\u6570\u636E

  var options = { mimeType: 'video/webm; codecs=vp9' }; // \u8BBE\u7F6E\u7F16\u7801\u683C\u5F0F
  var mediaRecorder = new MediaRecorder(stream, options); // \u521D\u59CB\u5316MediaRecorder\u5B9E\u4F8B

  mediaRecorder.ondataavailable = handleDataAvailable; // \u8BBE\u7F6E\u6570\u636E\u53EF\u7528\uFF08\u5F55\u5C4F\u7ED3\u675F\uFF09\u65F6\u7684\u56DE\u8C03
  mediaRecorder.start();

  // \u89C6\u9891\u788E\u7247\u5408\u5E76
  function handleDataAvailable(event) {
    if (event.data.size > 0) {
      recordedChunks.push(event.data); // \u6DFB\u52A0\u6570\u636E\uFF0Cevent.data\u662F\u4E00\u4E2ABLOB\u5BF9\u8C61
      download(); // \u5C01\u88C5\u6210BLOB\u5BF9\u8C61\u5E76\u4E0B\u8F7D
    }
  }

  // \u6587\u4EF6\u4E0B\u8F7D
  function download() {
    var blob = new Blob(recordedChunks, {
      type: 'video/webm',
    });
    // \u6B64\u5904\u53EF\u5C06\u89C6\u9891\u4E0A\u4F20\u5230\u540E\u7AEF
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    document.body.appendChild(a);
    a.style = 'display: none';
    a.href = url;
    a.download = 'test.webm';
    a.click();
    window.URL.revokeObjectURL(url); // \u4F7F\u7528\u5B8C URL.createObjectURL \u540E\u8981\u8BB0\u5F97\u8C03\u7528 URL.revokeObjectURL()\uFF0C\u5426\u5219\u4F1A\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u3002
  }
});
`,paraId:11,tocIndex:7},{value:`/**
 * \u5C5E\u6027\u503C\u8FDB\u884C\u5206\u7EC4
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

// \u6253\u5370\u7ED3\u679C

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
 * \u5C5E\u6027\u540D\u79F0\u8FDB\u884C\u5206\u7EC4
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
  // \u83B7\u53D6\u5C5E\u6027\u503C\u4E3Akey\u7684item\u7684\u7D22\u5F15
  const index = arr
    .map((d, i) => (d.hasOwnProperty(key) ? i : 'no'))
    .filter((d) => d !== 'no');

  // \u589E\u52A0\u6700\u540E\u4E00\u9879
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
 * \u9884\u8BA1\u8F93\u51FA
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
`,paraId:12,tocIndex:8},{value:"Document.createDocumentFragment()",paraId:13,tocIndex:9},{value:`\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u7A7A\u767D\u7684\u6587\u6863\u7247\u6BB5
let fragment = document.createDocumentFragment();`,paraId:14,tocIndex:9},{value:"DocumentFragments (en-US) \u662F DOM \u8282\u70B9\u3002\u5B83\u4EEC\u4E0D\u662F\u4E3B DOM \u6811\u7684\u4E00\u90E8\u5206\u3002\u901A\u5E38\u7684\u7528\u4F8B\u662F\u521B\u5EFA\u6587\u6863\u7247\u6BB5\uFF0C\u5C06\u5143\u7D20\u9644\u52A0\u5230\u6587\u6863\u7247\u6BB5\uFF0C\u7136\u540E\u5C06\u6587\u6863\u7247\u6BB5\u9644\u52A0\u5230 DOM \u6811\u3002\u5728 DOM \u6811\u4E2D\uFF0C\u6587\u6863\u7247\u6BB5\u88AB\u5176\u6240\u6709\u7684\u5B50\u5143\u7D20\u6240\u4EE3\u66FF\u3002",paraId:15,tocIndex:9},{value:"\u56E0\u4E3A\u6587\u6863\u7247\u6BB5\u5B58\u5728\u4E8E\u5185\u5B58\u4E2D\uFF0C\u5E76\u4E0D\u5728 DOM \u6811\u4E2D\uFF0C\u6240\u4EE5\u5C06\u5B50\u5143\u7D20\u63D2\u5165\u5230\u6587\u6863\u7247\u6BB5\u65F6\u4E0D\u4F1A\u5F15\u8D77\u9875\u9762\u56DE\u6D41\uFF08\u5BF9\u5143\u7D20\u4F4D\u7F6E\u548C\u51E0\u4F55\u4E0A\u7684\u8BA1\u7B97\uFF09\u3002\u56E0\u6B64\uFF0C\u4F7F\u7528\u6587\u6863\u7247\u6BB5\u901A\u5E38\u4F1A\u5E26\u6765\u66F4\u597D\u7684\u6027\u80FD\u3002",paraId:16,tocIndex:9},{value:`/**
 * \u521B\u5EFA\u4E00\u4E2A\u6587\u6863\u7247\u6BB5
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
`,paraId:17,tocIndex:9},{value:`console.time('times');
for (i = 0; i < 100000; i++) {
  // \u4EE3\u7801\u90E8\u5206
}
console.timeEnd('times'); //  times: 2.551025390625 ms

// \u6CE8\u610F time\u548CtimeEnd\u7684\u4E24\u4E2A\u53C2\u6570\u5FC5\u987B\u4FDD\u6301\u4E00\u81F4
`,paraId:18,tocIndex:10},{value:"Array.prototype.slice",paraId:19,tocIndex:11},{value:"Array.prototype.slice.call \u662F\u628A\u7C7B\u6570\u7EC4\u8F6C\u6210\u6570\u7EC4",paraId:20,tocIndex:11},{value:`function test(a, b, c, d) {
  var arg = Array.prototype.slice.call(arguments, 0);
  console.log(arg);
}
test('a', 'b', 'c', 'd'); //\xA0['a', 'b', 'c', 'd']

function test1(a, b, c, d) {
  var arg = [...arguments]; // Array.from(arguments)
  console.log('arg', arg);
}
test1('a', 'b', 'c', 'd'); //\xA0['a', 'b', 'c', 'd']
`,paraId:21,tocIndex:11},{value:"\u6682\u65F6\u6027\u6B7B\u533A\u662F\u6D4F\u89C8\u5668\u7684 bug\uFF1A",paraId:22,tocIndex:12},{value:`
\u68C0\u6D4B\u4E00\u4E2A\u672A\u88AB\u58F0\u660E\u7684\u53D8\u91CF\u7C7B\u578B\u65F6\uFF0C\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F1A\u8FD4\u56DE undefined \u5982\uFF1Aconsole.log(typeof a) //undefined `,paraId:22,tocIndex:12},{value:`
\u800C\u76F4\u63A5\u4F7F\u7528\u4E00\u4E2A\u672A\u5B9A\u4E49\u7684\u53D8\u91CF\u65F6\u4F1A\u62A5\u9519\uFF1A ReferenceError: a is not defined`,paraId:22,tocIndex:12},{value:`const arr = [1, 3, 4, 5];
const arr1 = arr;
arr.length = 0;
console.log('arr', arr, 'arr1', arr1); // arr [] arr1 []

let arr = [1, 3, 4, 5];
const arr1 = arr;
arr = [];
console.log('arr', arr, 'arr1', arr1); // arr [] arr1 (4)\xA0[1, 3, 4, 5]
`,paraId:23,tocIndex:13},{value:"\u4E0D\u80FD\u3002\u81EA\u95ED\u5408\u6807\u7B7E\u6765\u81EA\u4E8E XML \u8BED\u6CD5\uFF0C\u800C\u4E0D\u662F HTML \u8BED\u6CD5\u3002",paraId:24,tocIndex:14},{value:"\u6839\u636E\u73B0\u5728\u7684 HTML \u8BED\u6CD5\uFF0C\u53EA\u6709\u4E0D\u9700\u8981\u7ED3\u675F\u6807\u7B7E\u7684 void element\uFF08\u5982 img \u4E4B\u7C7B\u7684\uFF09\uFF0C\u6216\u8005\u662F\u5916\u90E8\u5143\u7D20\uFF08\u5982 svg\uFF09\u53EF\u4EE5\u4F7F\u7528\u81EA\u95ED\u5408\u3002script \u6807\u7B7E\u663E\u7136\u4E0D\u5728\u6B64\u5217\u3002",paraId:25,tocIndex:14},{value:`
// \u6B63\u786E\u5199\u6CD5

<script src="..."><\/script>

// \u9519\u8BEF\u5199\u6CD5

<script src="..." />
`,paraId:26,tocIndex:14},{value:"\u5728\u8C37\u6B4C\u63A7\u5236\u53F0\u4E2D\u770B\u5230 \u0192 () { [native code] } \u8FD9\u79CD\u8868\u793A\u901A\u5E38\u610F\u5473\u7740\u4F60\u6B63\u5728\u67E5\u770B\u4E00\u4E2A\u6D4F\u89C8\u5668\u5185\u7F6E\u7684\u539F\u751F\u51FD\u6570\u6216\u65B9\u6CD5\u3002\u8FD9\u662F\u63A7\u5236\u53F0\u7684\u4E00\u79CD\u5C55\u793A\u65B9\u5F0F\uFF0C\u7528\u6765\u544A\u8BC9\u4F60\u8FD9\u4E2A\u51FD\u6570\u662F\u7531\u6D4F\u89C8\u5668\u5E95\u5C42\u5B9E\u73B0\u7684\uFF0C\u800C\u4E0D\u662F\u7531 JavaScript \u7F16\u5199\u7684\u3002",paraId:27,tocIndex:15},{value:"\u4F8B\u5982\uFF0C\u5F53\u4F60\u5728\u63A7\u5236\u53F0\u8F93\u5165 console.log \u6216\u8005 document.getElementById \u7136\u540E\u56DE\u8F66\u65F6\uFF0C\u4F60\u53EF\u80FD\u4F1A\u770B\u5230\u5982\u4E0B\u8F93\u51FA\uFF1A",paraId:28,tocIndex:15},{value:`\u0192 log() { [native code] }
\u0192 getElementById() { [native code] }
`,paraId:29,tocIndex:15},{value:"window \u662F Window \u7684\u5B9E\u4F8B\u5BF9\u8C61",paraId:30,tocIndex:16},{value:`window.__proto__.constructor === Window;
`,paraId:31,tocIndex:16},{value:"1\u3001\u5F53 window.location.href = 'xxxx' orgin \u76F8\u540C\u65F6\u4E0D\u4F1A\u5237\u65B0\u9875\u9762\uFF0C\u53EA\u4F1A\u5207\u6362\u8DEF\u7531\uFF0C\u76F8\u5F53\u4E8E history.push \uFF0C\u5982\u679C\u662Fhash\u8DEF\u7531\uFF0C\u4F1A\u89E6\u53D1onhashchange\u94A9\u5B50\uFF0C\u5982\u679Corgin\u4E0D\u540C\u4F1A\u91CD\u8F7D\u9875\u9762",paraId:32,tocIndex:17},{value:"2\u3001\u7279\u522B\u6CE8\u610F history.push \u4E0D\u4F1A\u5168\u5C40\u5237\u65B0\u9875\u9762\uFF0C\u5982\u679C\u7528\u5230\u4E86\u5168\u5C40\u7684 store\uFF0Cstore \u91CC\u9762\u7684\u6570\u636E\u4E0D\u4F1A\u6E05\u7A7A\uFF0C\u800C window.location.relad()\u4F1A\u91CD\u7F6E\u9875\u9762",paraId:33,tocIndex:17},{value:"NaN \u4E0E\u4EFB\u4F55\u503C\u6BD4\u8F83\u90FD\u8FD4\u56DE false\uFF0C\u5305\u62EC NaN \u81EA\u5DF1\u3002",paraId:34,tocIndex:19},{value:"[NaN].indexOf(NaN) === -1  bug",paraId:35,tocIndex:19},{value:"\u5224\u65AD\u4F20\u5165\u503C\u662F\u5426\u4E3A NaN \u5185\u90E8\u4E0D\u4F1A\u505A\u4EFB\u4F55\u8F6C\u6362",paraId:36,tocIndex:20},{value:`Number.isNaN(Number('avc')); // true
Number.isNaN('avc'); // false

Number.isNaN(1 + null); // false
Number.isNaN(1 + undefined); // true
`,paraId:37,tocIndex:20},{value:"\u5224\u65AD\u4F20\u5165\u503C\u662F\u5426\u662F\u6570\u5B57 \u5185\u90E8\u4F1A\u8FDB\u884C Number \u8F6C\u6362 \u8F6C\u6362\u4E0D\u662F NaN \u4F1A\u8FD4\u56DE false \u8F6C\u6362\u662F NaN \u8FD4\u56DE true",paraId:38,tocIndex:21},{value:`window.isNaN('abc'); // true
window.isNaN(1); // false
window.isNaN('1212'); // false
`,paraId:39,tocIndex:21},{value:"Number.isFinite() \u662F JavaScript \u4E2D\u7528\u4E8E\u5224\u65AD\u4E00\u4E2A\u503C\u662F\u5426\u4E3A\u6709\u9650\u6570\uFF08finite number\uFF09\u7684\u5185\u7F6E\u65B9\u6CD5\u3002",paraId:40,tocIndex:22},{value:"Number.isFinite() \u53EA\u5BF9 \u6570\u503C\u7C7B\u578B\u6709\u6548\uFF0C\u975E\u6570\u503C\u7C7B\u578B\u76F4\u63A5\u8FD4\u56DE false\u3002",paraId:41,tocIndex:22},{value:`Number.isFinite(15);         // true
Number.isFinite(0);          // true
Number.isFinite(-10.5);      // true

Number.isFinite(Infinity);   // false
Number.isFinite(-Infinity);  // false
Number.isFinite(NaN);        // false

Number.isFinite("15");       // false (\u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u4E0D\u662F\u6570\u5B57)
Number.isFinite(true);       // false (\u5E03\u5C14\u7C7B\u578B)
Number.isFinite(null);       // false

// \u5168\u5C40 isFinite \u4F1A\u505A\u9690\u5F0F\u8F6C\u6362
isFinite("15");              // true\uFF0C"15" -> 15\uFF0C\u6709\u9650\u6570
isFinite("abc");             // false\uFF0C"abc" -> NaN
`,paraId:42,tocIndex:22},{value:"slice\uFF1AArrayObject.slice(start,end) start-\u5F00\u59CB\u622A\u53D6\u7684\u4E0B\u6807 \uFF0Cend-\u7ED3\u675F\u622A\u53D6\u7684\u4E0B\u6807(\u622A\u53D6\u51FA\u6765\u540E\u4E0D\u5305\u542B end)\uFF0C\u4E0D\u4FEE\u6539\u539F\u6570\u7EC4",paraId:43,tocIndex:23},{value:"splice\uFF1A\u901A\u8FC7\u5220\u9664\u6216\u66FF\u6362\u73B0\u6709\u5143\u7D20\u6216\u8005\u539F\u5730\u6DFB\u52A0\u65B0\u7684\u5143\u7D20\u6765\u4FEE\u6539\u6570\u7EC4\uFF0C\u5E76\u4EE5\u6570\u7EC4\u5F62\u5F0F\u8FD4\u56DE\u88AB\u4FEE\u6539\u7684\u5185\u5BB9\u3002\u6B64\u65B9\u6CD5\u4F1A\u6539\u53D8\u539F\u6570\u7EC4\u3002",paraId:44,tocIndex:23},{value:`/**
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
 * substring() \u65B9\u6CD5\u8FD4\u56DE\u4E00\u4E2A\u5B57\u7B26\u4E32\u5728\u5F00\u59CB\u7D22\u5F15\u5230\u7ED3\u675F\u7D22\u5F15\u4E4B\u95F4\u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C\u6216\u4ECE\u5F00\u59CB\u7D22\u5F15\u76F4\u5230\u5B57\u7B26\u4E32\u7684\u672B\u5C3E\u7684\u4E00\u4E2A\u5B50\u96C6\u3002
 * \u4E0D\u4F1A\u6539\u53D8\u539F\u5B57\u7B26\u4E32
 *

const a = "zcq001";
const b = a.substring(0, 3);
console.log(b); // "zcq"
console.log(a); //  "zcq001";

`,paraId:45,tocIndex:23},{value:`/**
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
`,paraId:46,tocIndex:24},{value:"arguments.callee \u662F\u4E00\u4E2A\u5728\u65E7\u7248\u7684 JavaScript \u4E2D\u4F7F\u7528\u7684\u5C5E\u6027\uFF0C\u5B83\u5F15\u7528\u5F53\u524D\u6267\u884C\u7684\u51FD\u6570\u3002\u5728\u4E25\u683C\u6A21\u5F0F\uFF08'use strict'\uFF09\u4E0B\uFF0C\u4F7F\u7528 arguments.callee \u4F1A\u5F15\u53D1\u4E00\u4E2A\u9519\u8BEF\uFF0C\u56E0\u4E3A\u5B83\u5728 ECMAScript 5 \u4E25\u683C\u6A21\u5F0F\u4E2D\u88AB\u7981\u7528\u4E86\u3002",paraId:47,tocIndex:25},{value:"\u5728\u975E\u4E25\u683C\u6A21\u5F0F\u4E0B\uFF0Carguments.callee \u53EF\u4EE5\u7528\u4E8E\u9012\u5F52\u5730\u8C03\u7528\u533F\u540D\u51FD\u6570\uFF0C\u4F8B\u5982\uFF1A",paraId:48,tocIndex:25},{value:`var factorial = function (n) {
  if (n <= 1) return 1;
  return n * arguments.callee(n - 1);
};

console.log(factorial(5)); // \u8F93\u51FA: 120
`,paraId:49,tocIndex:25},{value:"setTimeout \u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u3002 \u7B2C\u4E09\u4E2A\u53C2\u6570\u4F1A\u4F5C\u4E3A\u56DE\u6389\u51FD\u6570\u7684\u5165\u53C2",paraId:50,tocIndex:26},{value:`for (var i = 0; i < 5; i++) {
  setTimeout(
    (j) => {
      console.log(j);
    },
    1000,
    i,
  );
}
// 0 1 2 3 4

// \u8FD0\u7528\u95ED\u5305\u89E3\u51B3\u4E0A\u8FF0\u95EE\u9898
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

// \u8FED\u4EE3\u5668

const arr = [1, 2, 3, 4];
function test() {
  let i = 0;
  return function () {
    return arr[i++] || '\u7ED3\u675F\u54AF';
  };
}
`,paraId:51,tocIndex:26},{value:"str.replace(regexp|substr, newSubStr|function)",paraId:52,tocIndex:27},{value:"\u53C2\u8003",paraId:53,tocIndex:27},{value:`// \u5168\u5C40\u66FF\u6362
let str = 'Mr Blue has a blue house and a blue car';
str.replace(/blue/gi, 'red'); // \u8F93\u51FA\u7ED3\u679C\uFF1A'Mr red has a red house and a red car'

// function:  \u4E00\u4E2A\u7528\u6765\u521B\u5EFA\u65B0\u5B50\u5B57\u7B26\u4E32\u7684\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684\u8FD4\u56DE\u503C\u5C06\u66FF\u6362\u6389\u7B2C\u4E00\u4E2A\u53C2\u6570\u5339\u914D\u5230\u7684\u7ED3\u679C
//   function(target,index){
//    return ...
//   }

'a124'.replace('a', function (c) {
  return 0;
}); // '0124'

/**
 * HTML\u6807\u7B7E\u8F6C\u4E49\uFF08< -> &lt;\uFF09
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
 *  HTML\u6807\u7B7E\u53CD\u8F6C\u4E49\uFF08&lt; -> <\uFF09
 * @param str
 * @returns
 */
function escape2Html(str) {
  var arrEntities = { lt: '<', gt: '>', nbsp: ' ', amp: '&', quot: '"' };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
    return arrEntities[t];
  });
}
`,paraId:54,tocIndex:27},{value:`[1, 2, 3, 4].reduce((a, b) => {
  console.log(a, b);
});

// 1 2 undefined 3 undefined 4 a\u4E3A\u4E0A\u4E00\u8F6E\u7684\u8FD4\u56DE\u503C  \u7B2C\u4E00\u6B21\u9ED8\u8BA4\u4E3A\u6570\u7EC4\u7B2C\u4E00\u9879

[1, 2, 3, 4].reduce((a, b) => {
  console.log(a, b);
}, 0);

// 0 1 undefined 2 undefined 3  undefined 4
`,paraId:55,tocIndex:28},{value:"pushState(state, title, url)",paraId:56,tocIndex:29},{value:"state: \u53EF\u4EE5\u901A\u8FC7 history.state \u8BFB\u53D6",paraId:57,tocIndex:29},{value:`
title: \u53EF\u9009\u53C2\u6570\uFF0C\u6682\u65F6\u6CA1\u6709\u7528\uFF0C\u5EFA\u8BAE\u4F20\u4E2A\u77ED\u6807\u9898`,paraId:57,tocIndex:29},{value:`
url: \u6539\u53D8\u8FC7\u540E\u7684 url \u5730\u5740`,paraId:57,tocIndex:29},{value:"\u6D4F\u89C8\u5668\u4E0D\u4F1A\u5411\u670D\u52A1\u7AEF\u8BF7\u6C42\u6570\u636E\uFF0C\u76F4\u63A5\u6539\u53D8 url \u5730\u5740\uFF0C\u53EF\u4EE5\u7C7B\u4F3C\u7684\u7406\u89E3\u4E3A\u53D8\u76F8\u7248\u7684 hash\uFF1B\u4F46\u4E0D\u50CF hash \u4E00\u6837\uFF0C\u6D4F\u89C8\u5668\u4F1A\u8BB0\u5F55 pushState \u7684\u5386\u53F2\u8BB0\u5F55\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u3001\u540E\u9000\u529F\u80FD\u4F5C\u7528",paraId:58,tocIndex:29},{value:"replaceState \u7528\u6CD5\u4E0E pushState \u4E00\u6837 \u533A\u522B\u662F\u4E0D\u4F1A\u589E\u52A0\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\uFF0C\u53EA\u662F\u4FEE\u6539\u6D4F\u89C8\u5668\u5F53\u524D\u8BB0\u5F55\u3002",paraId:59,tocIndex:29},{value:"\u5F53\u7528\u6237\u5728\u6D4F\u89C8\u5668\u70B9\u51FB\u8FDB\u884C\u540E\u9000\u3001\u524D\u8FDB\uFF0C\u6216\u8005\u5728 js \u4E2D\u8C03\u7528 histroy.back()\uFF0Chistory.go()\uFF0Chistory.forward()\u7B49\uFF0C\u4F1A\u89E6\u53D1 popstate \u4E8B\u4EF6\uFF1B\u4F46 pushState\u3001replaceState \u4E0D\u4F1A\u89E6\u53D1\u8FD9\u4E2A\u4E8B\u4EF6\u3002",paraId:60,tocIndex:29},{value:"\u5F53\u754C\u9762\u8DF3\u8F6C\u5230 pushState \u6216\u8005 replaceState \u7684\u65F6\u5019 \u5C31\u4F1A\u6253\u5370\u51FA\u6765 pushState \u6216\u8005 replaceState \u4E4B\u524D\u8BBE\u7F6E\u7684 state \u503C",paraId:61,tocIndex:29},{value:`window.onpopstate = function (e) {
  console.log(JSON.stringify(e.state));
};
`,paraId:62,tocIndex:29},{value:"\u4F7F\u7528|| \u8FD0\u7B97\u7B26 \u6211\u4EEC\u53EF\u4EE5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u771F\u503C \u5982\u679C\u6240\u6709\u7684\u503C\u90FD\u662F\u5047\u503C \u5219\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u503C",paraId:63,tocIndex:30},{value:`const one = false || {} || null; // {}
const two = null || false || ''; // ''
const three = [] || 0 || true; // []
`,paraId:64,tocIndex:30},{value:"\u770B\u88AB\u52A0\u7684\u6570 \uFF0C\u5982\u679C\u5728\u524D\u9762\u8FD4\u56DE\u88AB\u52A0\u524D\u7684\u6570 \u5982\u679C\u5728\u540E\u9762\u5C31\u53CD\u6094\u88AB\u52A0\u540E\u7684\u6570",paraId:65,tocIndex:31},{value:`let i = 1;
let a = ++i; // a = 2  i = 2

let g = 1;
let b = g++; // b = 1  i = 2
`,paraId:66,tocIndex:31},{value:"\u8C37\u6B4C\u4E0D\u517C\u5BB9\u7684 window.setImmediate()",paraId:67,tocIndex:32},{value:"\u5728 MDN \u4E0A\u770B window.setImmediate() \u63CF\u8FF0",paraId:68,tocIndex:32},{value:"\u8BE5\u65B9\u6CD5\u53EF\u80FD\u4E0D\u4F1A\u88AB\u6279\u51C6\u6210\u4E3A\u6807\u51C6\uFF0C\u76EE\u524D\u53EA\u6709\u6700\u65B0\u7248\u672C\u7684 Internet Explorer \u548C Node.js 0.10+\u5B9E\u73B0\u4E86\u8BE5\u65B9\u6CD5\u3002",paraId:69,tocIndex:32},{value:"\u5B83\u9047\u5230\u4E86 Gecko(Firefox) \u548C Webkit (Google/Apple) \u7684\u963B\u529B.",paraId:70,tocIndex:32},{value:"\u8BE5\u7279\u6027\u662F\u975E\u6807\u51C6\u7684\uFF0C\u6240\u4EE5\u8BF4\u3001\u8BF7\u5C3D\u91CF\u4E0D\u8981\u5728\u751F\u4EA7\u73AF\u5883\u4E2D\u4F7F\u7528\u5B83\uFF01",paraId:71,tocIndex:32},{value:"\u8BED\u6CD5\uFF1A",paraId:72,tocIndex:32},{value:`
var immediateID = setImmediate(func, [param1, param2, ...]);`,paraId:72,tocIndex:32},{value:`
var immediateID = setImmediate(func);`,paraId:72,tocIndex:32},{value:`
window.clearImmediate \u65B9\u6CD5\u53EF\u4EE5\u7528\u6765\u53D6\u6D88\u901A\u8FC7 setImmediate \u8BBE\u7F6E\u7684\u5C06\u8981\u6267\u884C\u7684\u8BED\u53E5, \u5C31\u50CF window.clearTimeout \u5BF9\u5E94\u4E8E window.setTimeout \u4E00\u6837.`,paraId:72,tocIndex:32},{value:"\u56E0\u4E3A\u5176\u517C\u5BB9\u6027\u4E0D\u597D\uFF0C\u6240\u4EE5\u4F1A\u7528 setTimeout(fn, 0) \u6765\u4EE3\u66FF\uFF0C\u5E38\u7528\u6765\uFF1A \u5904\u7406 \u7E41\u91CD\u4EFB\u52A1\uFF08\u6570\u7EC4\u64CD\u4F5C\u7B49\u7B49\uFF09\u4EE5\u907F\u514D js \u6267\u884C\u963B\u585E ui \u7684\u66F4\u65B0",paraId:73,tocIndex:32},{value:`function addScript(url = 'https://code.jquery.com/jquery-3.5.1.min.js') {
  const script = document.createElement('script');
  script.src = url;
  document.getElementsByTagName('head')[0].appendChild(script);
}
`,paraId:74,tocIndex:33},{value:`/**
 * \u963B\u6B62\u5192\u6CE1\u4E8B\u4EF6
 */

function stopPropagation(e) {
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
  } else {
    // \u517C\u5BB9ie
    e.cancelBubble = true;
  }
}

/**
 * \u963B\u6B62\u9ED8\u8BA4\u4E8B\u4EF6
 */

function preventDefault(e) {
  if (typeof e.preventDefault === 'function') {
    e.preventDefault();
  } else {
    // \u517C\u5BB9ie
    e.returnValue = false;
  }
}
`,paraId:75,tocIndex:34},{value:"\u5728 JavaScript \u4E2D\uFF0CFunction.length \u5C5E\u6027\u8868\u793A\u51FD\u6570\u5728\u5B9A\u4E49\u65F6\u671F\u671B\u63A5\u6536\u7684\u53C2\u6570\u4E2A\u6570\u3002\u8FD9\u4E2A\u5C5E\u6027\u5E76\u4E0D\u8003\u8651\u51FD\u6570\u5728\u8FD0\u884C\u65F6\u53EF\u80FD\u63A5\u6536\u7684\u989D\u5916\u53C2\u6570\uFF0C\u4E5F\u4E0D\u8003\u8651\u9ED8\u8BA4\u53C2\u6570\u3001\u5269\u4F59\u53C2\u6570\u548C\u89E3\u6784\u8D4B\u503C\u53C2\u6570\u3002",paraId:76,tocIndex:35},{value:`function myFunction(a, b, c) {
  // \u51FD\u6570\u4F53
}

console.log(myFunction.length); // \u8F93\u51FA\uFF1A3
`,paraId:77,tocIndex:35},{value:`window.a = 1;

// \u8BBF\u95EE\u5C40\u90E8\u53D8\u91CF window, \u4E0D\u9700\u8981\u5411\u4E0A\u904D\u5386\u4F5C\u7528\u57DF\u94FE, \u7F29\u77ED\u67E5\u627E\u65F6\u95F4, \u540C\u65F6\u5728\u538B\u7F29\u4EE3\u7801\u65F6\u5C40\u90E8\u53D8\u91CF window \u53EF\u88AB\u538B\u7F29
(function (window) {
  alert(a);
})(window);

// \u5411\u4E0A\u904D\u5386\u5230\u9876\u5C42\u4F5C\u7528\u57DF, \u8BBF\u95EE\u901F\u5EA6\u53D8\u6162, \u5168\u5C40\u53D8\u91CF window \u4E0D\u80FD\u88AB\u538B\u7F29
(function () {
  alert(a);
})();
`,paraId:78,tocIndex:36},{value:`function convertBytes(bytes, decimals = 2) {
  if (bytes === 0) return '0 Bytes';

  const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let unitIndex = 0;

  while (bytes >= 1024 && unitIndex < units.length - 1) {
    bytes /= 1024;
    unitIndex++;
  }

  return \`\${parseFloat(bytes.toFixed(decimals))} \${units[unitIndex]}\`;
}

// \u793A\u4F8B
console.log(convertBytes(1024)); // 1.00 KB
console.log(convertBytes(1234)); // 1.21 KB
console.log(convertBytes(12345)); // 12.06 KB
console.log(convertBytes(1234567)); // 1.18 MB
console.log(convertBytes(123456789)); // 117.74 MB
console.log(convertBytes(12345678901)); // 11.50 GB
`,paraId:79,tocIndex:37},{value:"\u4F7F\u7528 WeakSet \u6216\u8005 Set",paraId:80,tocIndex:38},{value:`// \u4F7F\u7528set
function existCircular(obj) {
  let cache = new Set();
  function helper(obj) {
    let values = Object.values(obj);
    for (let i = 0; i < values.length; i++) {
      if (cache.has(values[i])) {
        return true;
      }

      // \u4E0D\u662F\u5F15\u7528\u6570\u636E\u7C7B\u578B\uFF0C\u76F4\u63A5\u8DF3\u8FC7
      if (typeof values[i] !== 'object' || values[i] === null) continue;
      cache.add(values[i]);

      let flag = helper(values[i]);
      // \u5982\u679C flag \u662F false, \u90A3\u4E48\u7EE7\u7EED\u904D\u5386\uFF0C\u5982\u679C\u662F true,\u8BF4\u660E\u5DF2\u7ECF\u5B58\u5728\u73AF\u4E86\uFF0C \u76F4\u63A5 return true
      if (flag) {
        return true;
      }
    }
    return false;
  }

  return helper(obj);
}

// \u6D4B\u8BD5
const person = { name: 'kalory', age: 18 };
person.onwer = person;

existCircular(person); // true
// \u4F7F\u7528WeakSet
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
`,paraId:81,tocIndex:38},{value:"\u4F7F\u7528 JSON \u5E8F\u5217\u5316",paraId:82,tocIndex:38},{value:`function isCircular(obj) {
  try {
    JSON.stringify(obj);
    return false;
  } catch (e) {
    return true;
  }
}

// \u6D4B\u8BD5\u5FAA\u73AF\u5F15\u7528
const a = {};
const b = { a };
a.b = b;

console.log(isCircular(a)); // \u8F93\u51FA\uFF1Atrue
`,paraId:83,tocIndex:38},{value:"JavaScript \u662F\u4E00\u79CD\u7F16\u7A0B\u8BED\u8A00\uFF0C\u5B9E\u73B0\u4E86 ECMAScript \u6807\u51C6\u3002BOM \u548C DOM \u662F\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684 API\uFF0C\u7528\u4E8E\u4E0E\u6D4F\u89C8\u5668\u4EA4\u4E92\u5E76\u64CD\u4F5C\u6587\u6863\u3002Node.js \u662F\u4E00\u4E2A\u72EC\u7ACB\u7684\u8FD0\u884C\u65F6\u73AF\u5883\uFF0C\u4F7F JavaScript \u53EF\u4EE5\u5728\u670D\u52A1\u5668\u7AEF\u8FD0\u884C\uFF0C\u5E76\u63D0\u4F9B\u4E86\u4E00\u7EC4\u7528\u4E8E\u6784\u5EFA\u7F51\u7EDC\u5E94\u7528\u7A0B\u5E8F\u7684 API\u3002",paraId:84,tocIndex:39},{value:"\u5982\u679C\u8FD9\u4E2A\u5165\u53C2\u7684\u7C7B\u578B\u662F\u5F15\u7528\u7C7B\u578B\uFF0C\u90A3\u4E48 fill \u5728\u586B\u5145\u5751\u4F4D\u65F6\u586B\u5145\u7684\u5176\u5B9E\u5C31\u662F\u5165\u53C2\u7684\u5F15\u7528",paraId:85,tocIndex:40},{value:`
\u5176\u5B9E\u8FD9 7 \u4E2A\u6570\u7EC4\u5BF9\u5E94\u4E86\u540C\u4E00\u4E2A\u5F15\u7528\u3001\u6307\u5411\u7684\u662F\u540C\u4E00\u5757\u5185\u5B58\u7A7A\u95F4\uFF0C\u5B83\u4EEC\u672C\u8D28\u4E0A\u662F\u540C\u4E00\u4E2A\u6570\u7EC4\u3002\u56E0\u6B64\u5F53\u4F60\u4FEE\u6539\u7B2C 0 \u884C\u7B2C 0 \u4E2A\u5143\u7D20\u7684\u503C\u65F6\uFF0C\u7B2C 1-6 \u884C\u7684\u7B2C 0 \u4E2A\u5143\u7D20\u7684\u503C\u4E5F\u90FD\u4F1A\u8DDF\u7740\u53D1\u751F\u6539\u53D8\u3002`,paraId:85,tocIndex:40},{value:`// \u5047\u8BBE\u540E\u7AEF\u8FD4\u56DE\u7684\u7528\u6237\u4FE1\u606F\u662F\u952E\u503C\u5BF9\u6570\u7EC4
const userArray = [
  ['name', 'Tom'],
  ['age', 28],
  ['email', 'tom@example.com'],
];
// \u4F7F\u7528Object.fromEntries()\u5C06\u952E\u503C\u5BF9\u6570\u7EC4\u8F6C\u4E3A\u5BF9\u8C61
const userObject = Object.fromEntries(userArray);
console.log(userObject);
// {name: 'Tom', age: 28, email: 'tom@example.com'}
`,paraId:86,tocIndex:40},{value:"Object.fromEntries \u7528\u4E8E\u5C06\u4E8C\u7EF4\u6570\u7EC4\u8F6C\u6362\u4E3A\u5BF9\u8C61",paraId:87,tocIndex:41},{value:"\u4F7F\u7528||\u8FD0\u7B97\u7B26\uFF0C\u6211\u4EEC\u53EF\u4EE5\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u771F\u503C\u3002 \u5982\u679C\u6240\u6709\u503C\u90FD\u662F\u5047\u503C\uFF0C\u5219\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u503C\u3002",paraId:88,tocIndex:42},{value:"\u5E03\u5C14\u8FD0\u7B97\uFF08\u53EA\u6709\u5F53\u4E24\u4E2A\u64CD\u4F5C\u6570\u90FD\u4E3A true \u65F6\uFF0C\u7ED3\u679C\u624D\u4E3A true\uFF09",paraId:89,tocIndex:43},{value:`const a = true;
const b = false;

console.log(a && b); // false
console.log(a && true); // true
console.log(b && false); // false
`,paraId:90,tocIndex:43},{value:`\u77ED\u8DEF\u6C42\u503C
&& \u5177\u6709\u201C\u77ED\u8DEF\u6C42\u503C\u201D\u7684\u7279\u6027\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u6570\u4E3A false\uFF0CJavaScript \u4E0D\u4F1A\u8BC4\u4F30\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u6570\uFF0C\u56E0\u4E3A\u7ED3\u679C\u4E00\u5B9A\u662F false\u3002\u8FD9\u79CD\u7279\u6027\u53EF\u4EE5\u7528\u4E8E\u6761\u4EF6\u5224\u65AD\u3002`,paraId:91,tocIndex:43},{value:`const x = 0;
const result = x && (x > 5); // x \u662F falsy\uFF0C\u7B2C\u4E8C\u4E2A\u8868\u8FBE\u5F0F\u4E0D\u4F1A\u88AB\u6267\u884C
console.log(result); // 0
`,paraId:92,tocIndex:43},{value:`\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u771F\u503C
&& \u64CD\u4F5C\u7B26\u4E0D\u4EC5\u8FD4\u56DE\u5E03\u5C14\u503C\uFF0C\u8FD8\u4F1A\u8FD4\u56DE\u6700\u540E\u4E00\u4E2A\u6C42\u503C\u7684\u64CD\u4F5C\u6570\u3002\u8FD9\u610F\u5473\u7740\u5982\u679C\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u6570\u4E3A\u771F\u503C\uFF0C\u5C06\u8FD4\u56DE\u7B2C\u4E8C\u4E2A\u64CD\u4F5C\u6570\uFF1B\u5982\u679C\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u6570\u4E3A\u5047\u503C\uFF0C\u5219\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u64CD\u4F5C\u6570\u3002`,paraId:93,tocIndex:43},{value:`const name = "Alice";
const age = 25;

const output = name && age; // name \u4E3A truthy\uFF0C\u8FD4\u56DE age
console.log(output); // 25

const value = null;
const result = value && "This won't execute"; // value \u4E3A falsy\uFF0C\u76F4\u63A5\u8FD4\u56DE null
console.log(result); // null

`,paraId:94,tocIndex:43},{value:`\u7528\u4E8E\u6761\u4EF6\u6267\u884C
\u901A\u8FC7\u77ED\u8DEF\u7279\u6027\uFF0C&& \u5E38\u7528\u4E8E\u6761\u4EF6\u6267\u884C\u67D0\u4E2A\u8868\u8FBE\u5F0F\u3002\u53EA\u6709\u5F53\u5DE6\u4FA7\u7684\u8868\u8FBE\u5F0F\u4E3A\u771F\u65F6\uFF0C\u53F3\u4FA7\u7684\u4EE3\u7801\u624D\u4F1A\u6267\u884C`,paraId:95,tocIndex:43},{value:`let isLoggedIn = true;

isLoggedIn && console.log("Welcome!"); // "Welcome!" \u4F1A\u88AB\u6253\u5370

isLoggedIn = false;
isLoggedIn && console.log("You won't see this."); // \u4E0D\u4F1A\u6253\u5370\u4EFB\u4F55\u5185\u5BB9

`,paraId:96,tocIndex:43}]}}]);
