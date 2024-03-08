---
nav: Js
group: 基础概念
toc: content
title: 错误捕获
---

## 错误捕获

```js

// 异常类型	              同步方法	        异步方法	        资源加载	        Promise	      async/await
// try/catch			          √                                                                 √
// window.onerror			      √               √
// error	                  √               √                   √
// unhandledrejection		                                                      √               √


/**
 * try-catch 只能捕获到同步的运行时错误，对异步错误和语法却无能为力，捕获不到。
 */

try {
  let name = "jartto";
  console.log(nam);
} catch (e) {
  console.log("捕获到异常：", e);
}

// 输出 捕获到异常：ReferenceError: nam is not defined    at :x:xx

async function a() {
  try {
      await Promise.reject('err')
      console.log('这里不执行了');
  } catch (e) {
      console.log("捕获到异常：", e);
  }
}
a() // 输出 捕获到异常： err

function a() {
  try {
      new Promise((resolve) => {
          setTimeout(() => {
              const a = '';
              a()
          }, 2000)
      })
      console.log('这里执行哦');
  } catch (e) {
      console.log("捕获到异常：", e);
  }
}
a() // 捕获不到异常 两秒后控制台出现 Uncaught TypeError: a is not a function


function getUserInfo() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject('请求异常')
      }, 1000)
  })
}

async function logined() {
  let userInfo = await getUserInfo().catch(e => console.log(e))
  // 执行没有中断，userInfo 为 undefined
  console.log('这里执行哦')
  if (!userInfo) return // 需要做非空校验
}

logined()  //输出 请求异常   这里执行哦


function getUserInfo() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          reject('请求异常')
      }, 1000)
  })
}

async function logined() {
  let userInfo = await getUserInfo().catch(e => {
      console.log(e)
      return Promise.reject(e) // 会导致控制台出现 uncaught (in promise) 报错信息
  })
  // 执行中断
  console.log('这行代码不执行了')
}

logined() //输出 请求异常



/**
 * 删掉一个引号
 */
try {
    let name = "jartto;
    console.log(nam);
  } catch (e) {
    console.log("捕获到异常：", e);
  }

  // 无法捕获语法错误 直接输出 Uncaught SyntaxError: Invalid or unexpected token

  /**
   * 无法捕获异步错误
   * 下面例子均无法捕获
   */

  try { setTimeout(() => { undefined.map(v => v); }, 1000) } catch (e) { console.log('捕获到异常：', e); }
    // 无法捕获到异常：直接控制台报错 error.html:17 Uncaught TypeError: Cannot read properties of undefined (reading 'map')

  try { Promise.reject(11) } catch (e) { console.log('捕获到异常：', e); }


  try {
    new Promise((resolve, reject) => {
        setTimeout(() => {
            reject('11')
        }, 100);

    })
} catch (e) { console.log('捕获到异常：', e); }





```
