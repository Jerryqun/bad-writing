---
nav: Js
group: 基础概念
toc: content
title: Promise
---

## 判断是否是 promise 对象

```js
function isPromise(val) {
  return typeof val.then === 'function' && typeof val.catch === 'function';
}
```

## 并发请求按照顺序依次打印结果(并行)

```js
const sleep = (time, res) =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(res);
    }, time),
  );

async function test() {
  const res1 = sleep(1000, 1);
  const res2 = sleep(2000, 2);
  const res3 = sleep(3000, 3);

  const result1 = await res1;
  const result2 = await res2;
  const result3 = await res3;

  console.log('result1', result1);
  console.log('result2', result2);
  console.log('result3', result3);
}
test();

// 串行 (返回最后一个promise 状态为结束)

const result = [sleep(1000, 1), sleep(2000, 2), sleep(3000, 3)].reduce(
  (a, b) => a.then((res) => b),
  Promise.resolve(),
);
```

## Promise.race

```js
/**
 * Promise.race(iterable) 方法返回一个 promise，一旦迭代器中的某个 promise 解决或拒绝，返回的 promise 就会解决或拒绝。
 */

const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'two');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
  // Both resolve, but promise2 is faster
});
// expected output: "two"
```

## promise.allSettled

Promise.allSettled() 方法返回一个在所有给定的 promise 都已经 fulfilled 或 rejected 后的 promise，并带有一个对象数组，每个对象表示对应的 promise 结果。

Promise.allSettled(promises)可以并行地运行 promise，并将状态（fulfilled 或 reject）收集到一个聚合数组中。
Promise.allSettled(...)在你需要执行平行和独立的异步操作并收集所有结果时非常有效，即使某些异步操作可能失败。

## 手写 promise

```js
class MyPromise {
  constructor(fn) {
    try {
      fn(this.resove, this.reject);
    } catch (err) {
      this.reject(err);
    }
  }
  status = 'pendding';
  result = '';
  onFulfilledCallbacks = [];
  onRejectedCallbacks = [];
  resove = (res) => {
    if (this.status === 'pendding') {
      this.status = 'fulfilled';
      this.result = res;
      while (this.onFulfilledCallbacks.length) {
        this.onFulfilledCallbacks.shift()(this.result);
      }
    }
  };
  reject = (err) => {
    if (this.status === 'pendding') {
      this.status = 'rejected';
      this.result = err;
      while (this.onRejectedCallbacks.length) {
        this.onRejectedCallbacks.shift()(this.result);
      }
    }
  };
  then = (resFn, errFn) => {
    let thenPromise = new MyPromise((resove, reject) => {});
    resFn = typeof resFn === 'function' ? resFn : () => {};
    errFn =
      typeof errFn === 'function'
        ? errFn
        : (reason) => {
            throw reason;
          };
    if (this.status === 'pendding') {
      this.onFulfilledCallbacks.push(resFn);
      this.onRejectedCallbacks.push(errFn);
    } else if (this.status === 'fulfilled') {
      this.onFulfilledCallbacks.push(resFn);
    } else {
      this.onRejectedCallbacks.push(errFn);
    }
    return thenPromise;
  };
}
```

## 使用 Promise 实现每隔 1 秒输出 1,2,3

```js
/**
 * 这道题比较简单的一种做法是可以用Promise配合着reduce不停的在promise后面叠加.then
 */

const arr = [1, 2, 3];
arr.reduce((a, b) => {
  return a.then(() => {
    return new Promise((res, err) => {
      setTimeout(() => {
        res(console.log(b));
      }, 1000);
    });
  });
}, Promise.resolve());
```

## 交替问题使用 promise 的链式调用

```js
/**
 * 交替问题使用promise的链式调用
 * 使用Promise实现红绿灯交替重复亮
   红灯3秒亮一次，黄灯2秒亮一次，绿灯1秒亮一次；如何让三个灯不断交替重复亮灯？（用Promise实现）三个亮灯函数已经存在：
 */

function red() {
  console.log('red');
}
function green() {
  console.log('green');
}
function yellow() {
  console.log('yellow');
}
const light = function (timer, cb) {
  return new Promise((resolve) => {
    setTimeout(() => {
      cb();
      resolve();
    }, timer);
  });
};

const step = function () {
  Promise.resolve()
    .then(() => {
      return light(3000, red);
    })
    .then(() => {
      return light(2000, green);
    })
    .then(() => {
      return light(1000, yellow);
    })
    .then(() => {
      return step();
    });
};

step();
```

## 实现 mergePromise 函数

```js
const time = (timer) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timer);
  });
};

const ajax1 = () =>
  time(2000).then(() => {
    console.log(1);
    return 1;
  });
const ajax2 = () =>
  time(1000).then(() => {
    console.log(2);
    return 2;
  });
const ajax3 = () =>
  time(1000).then(() => {
    console.log(3);
    return 3;
  });

function mergePromise() {
  // 在这里写代码
}

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
});

// 要求分别输出
// 1
// 2
// 3
// done
// [1, 2, 3]

// 解法一 for 循环

async function mergePromise(promises) {
  let result = [];
  for (let i = 0; i < promises.length; i++) {
    const b = await promises[i]();
    result.push(b);
  }
  return Promise.resolve(result);
}

mergePromise([ajax1, ajax2, ajax3]).then((data) => {
  console.log('done');
  console.log(data); // data 为 [1, 2, 3]
});

// 解法二 forEach 循环

const mergePromise = (promises) => {
  const data = [];
  let promise = Promise.resolve();
  promises.forEach((item) => {
    promise = promise.then(item).then((res) => {
      data.push(res);
      return data;
    });
  });
  return promise;
};
```

## 封装一个异步加载图片的方法

```js
const loadImg = (src) => {
  return new Promise((resolve, reject) => {
    const img = document.createElement('img');
    img.src = src;
    img.onload = function () {
      resolve(img);
    };
    img.onerror = function (err) {
      reject(new Error('Could not load image at ' + url));
    };
  });
};

var urls = [
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png',
];
```

## 执行顺序题目

```js
const promise = new Promise((resolve, reject) => {
  console.log(1);
  console.log(2);
});
promise.then(() => {
  console.log(3);
});
console.log(4);

/**
 * 从上至下，先遇到new Promise，执行其中的同步代码1和2
   跳出promise，往下执行，碰到promise.then这个微任务，将其加入微任务队列
   执行同步代码4 
   本轮宏任务全部执行完毕，检查微任务队列，发现promise.then这个微任务且状态为为pengding  所以then不会执行。
 */

const promise1 = new Promise((resolve, reject) => {
  console.log('promise1');
  resolve('resolve1');
});
const promise2 = promise1.then((res) => {
  console.log(res);
});
console.log('1', promise1);
console.log('2', promise2);

/**
 * 从上至下，先遇到new Promise，执行该构造函数中的代码promise1
碰到resolve函数, 将promise1的状态改变为resolved, 并将结果保存下来
碰到promise1.then这个微任务，将它放入微任务队列
promise2是一个新的状态为pending的Promise`
执行同步代码1， 同时打印出promise1的状态是resolved
执行同步代码2，同时打印出promise2的状态是pending
宏任务执行完毕，查找微任务队列，发现promise1.then这个微任务且状态为resolved，执行它。


promise1
1 Promise {<fulfilled>: 'resolve1'}
2 Promise {<pending>}
resolve1
 */

const fn = () =>
  new Promise((resolve, reject) => {
    console.log(1);
    resolve('success');
  });
console.log('start');
fn().then((res) => {
  console.log(res);
});

/**
 * start
 * 1
 * success
 * 之前我们很容易就以为看到new Promise()就执行它的第一个参数函数了，其实这是不对的，
 * 就像这两道题中，我们得注意它是不是被包裹在函数当中，如果是的话，只有在函数调用的时候才会执行。
 */

console.log('start');
setTimeout(() => {
  console.log('time');
});
Promise.resolve().then(() => {
  console.log('resolve');
});
console.log('end');

/**
 * 刚开始整个脚本作为一个宏任务来执行，对于同步代码直接压入执行栈进行执行，因此先打印出start和end。
setTimout作为一个宏任务被放入宏任务队列(下一个)
Promise.then作为一个微任务被放入微任务队列
本次宏任务执行完，检查微任务，发现Promise.then，执行它
接下来进入下一个宏任务，发现setTimeout，执行。
 */

console.log('start');
setTimeout(() => {
  console.log('time');
});
Promise.resolve().then(() => {
  Promise.resolve().then(() => {
    console.log('resolve2');
  });
  console.log('resolve1');
});
console.log('end');

/**
 * start
   end
   resolve1
   resolve2
   如果微任务里面又有微任务 也会打入当前微任务队列  执行顺序遵循先进后出原则
 */

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log('timerStart');
    resolve('success');
    console.log('timerEnd');
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

/**
1
2
4
timerStart
timerEnd
success
 * 从上至下，先遇到new Promise，执行该构造函数中的代码1
然后碰到了定时器，将这个定时器中的函数放到下一个宏任务的延迟队列中等待执行 执行同步代码2
跳出promise函数，遇到promise.then，但其状态还是为pending，这里理解为先不执行 执行同步代码4
一轮循环过后，进入第二次宏任务，发现延迟队列中有setTimeout定时器，执行它
首先执行timerStart，然后遇到了resolve，将promise的状态改为resolved且保存结果并将之前的promise.then推入微任务队列
继续执行同步代码timerEnd
宏任务全部执行完毕，查找微任务队列，发现promise.then这个微任务，执行它
 */

setTimeout(() => {
  console.log('timer1');
  setTimeout(() => {
    console.log('timer3');
  }, 0);
}, 0);
setTimeout(() => {
  console.log('timer2');
}, 0);
console.log('start');

/**
"start"
"timer1"
"timer2"
"timer3"
 */

setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise');
  });
}, 0);
setTimeout(() => {
  console.log('timer2');
}, 0);
console.log('start');

/**
 * 这两个例子，看着好像只是把第一个定时器中的内容换了一下而已。
一个是为定时器timer3，一个是为Promise.then
但是如果是定时器timer3的话，它会在timer2后执行，而Promise.then却是在timer2之前执行。
你可以这样理解，Promise.then是微任务，它会被加入到本轮中的微任务列表，而定时器timer3是宏任务，它会被加入到下一轮的宏任务中。
理解完这两个案例，可以来看看下面一道比较难的题目了

'start'
'timer1'
'promise'
'timer2'
 */

Promise.resolve().then(() => {
  console.log('promise1');
  const timer2 = setTimeout(() => {
    console.log('timer2');
  }, 0);
});
const timer1 = setTimeout(() => {
  console.log('timer1');
  Promise.resolve().then(() => {
    console.log('promise2');
  });
}, 0);
console.log('start');

/**
 * 刚开始整个脚本作为第一次宏任务来执行，我们将它标记为宏1，从上至下执行
遇到Promise.resolve().then这个微任务，将then中的内容加入第一次的微任务队列标记为微1
遇到定时器timer1，将它加入下一次宏任务的延迟列表，标记为宏2，等待执行(先不管里面是什么内容)
执行宏1中的同步代码start
第一次宏任务(宏1)执行完毕，检查第一次的微任务队列(微1)，发现有一个promise.then这个微任务需要执行
执行打印出微1中同步代码promise1，然后发现定时器timer2，将它加入宏2的后面，标记为宏3
第一次微任务队列(微1)执行完毕，执行第二次宏任务(宏2)，首先执行同步代码timer1
然后遇到了promise2这个微任务，将它加入此次循环的微任务队列，标记为微2
宏2中没有同步代码可执行了，查找本次循环的微任务队列(微2)，发现了promise2，执行它
第二轮执行完毕，执行宏3，打印出timer2

'start'
'promise1'
'timer1'
'promise2'
'timer2'
 */
```
