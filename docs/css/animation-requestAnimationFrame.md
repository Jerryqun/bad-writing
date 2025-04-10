---
toc: content
group: 前端动画
order: 2
title: requestAnimationFrame
---

## requestAnimationFrame

<a href="https://juejin.cn/post/7190728064458817591" target="_blank">参考</a>  
window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

它不属于宏任务也不属于微任务，因为它是独立于主线程之外的任务，不归主线程管

一言以蔽之：requestAnimationFrame 和 js 中的 setTimeout 定时器函数基本一致，不过 setTimeout 可以自由设置间隔时间，而 requestAnimationFrame 的间隔时间是由浏览器自身决定的，大约是 17 毫秒左右

`若你想在浏览器下次重绘之前继续更新下一帧动画，回调函数里面必须再次调用window.requestAnimationFrame`

```js
// 给 window 下挂载一个兼容版本的 requestAniFrame
window.requestAniFrame = (function () {
  return (
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback) {
      window.setTimeout(callback, 1000 / 60);
    }
  );
})();
```

## demo

```html

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>requestAnimationFrame_yyds</title>
    <style>
        body {
            box-sizing: border-box;
            background-color: #ccc;
        }

        .box1,
        .box2 {
            position: absolute;
            width: 160px;
            height: 160px;
            line-height: 160px;
            text-align: center;
            color: #fff;
            font-size: 13px;
        }

        .box1 {
            top: 40px;
            background: red;
        }

        .box2 {
            top: 210px;
            background: green;
        }
    </style>
    </style>
</head>

<body>
    <button class="btn">👉 let's go!</button>
    <div class="box1">定时器动画</div>
    <div class="box2">请求动画帧</div>
    <script>
        // 动画思路：不断修改dom元素的left值，使其运动起来（动画）
        let box1 = document.querySelector('.box1')
        let box2 = document.querySelector('.box2')

        // setInterval定时器方式
        function setIntervalFn() {
            let timer = null
            box1.style.left = '0px'
            timer = setInterval(() => {
                let leftVal = parseInt(box1.style.left)
                if (leftVal >= 720) {
                    clearInterval(timer)
                } else {
                    box1.style.left = leftVal + 1 + 'px'
                }
            }, 17)
        }

        // requestAnimationFrame请求动画帧方式
        function requestAnimationFrameFn() {
            let timer = null // 可注掉
            box2.style.left = '0px'
            function callbackFn() {
                let leftVal = parseInt(box2.style.left)
                if (leftVal >= 720) {
                    // 不再继续递归调用即可，就不会继续执行了，下面这个加不加都无所谓，因为影响不到
                    // cancelAnimationFrame取消请求动画帧，用的极少，看下，下文中的回到顶部组件
                    // 大家会发现并没有使用到这个api（这样写只是和clearInterval做一个对比）
                    // 毕竟，正常情况下，requestAnimationFrame会自动停下来
                    cancelAnimationFrame(timer) // 可注掉（很少用到）
                } else {
                    box2.style.left = leftVal + 1 + 'px'
                    window.requestAnimationFrame(callbackFn)
                }
            }
            window.requestAnimationFrame(callbackFn)
        }

        // 动画绑定
        let btn = document.querySelector('.btn')
        btn.addEventListener('click', () => {
            setIntervalFn()
            requestAnimationFrameFn()
        })
    </script>
</body>

</html>
```

### 为什么定时器会卡

我们在手机或者电脑显示屏上看东西时，显示屏会默默的不停地干活（刷新画面）  
这个刷新值得是每秒钟刷新次数，普通显示器的刷新率约为 60Hz（每秒刷新 60 次），高档的有 75Hz、90Hz、120Hz、144Hz 等等  
刷新率次数越高，显示器显示的图像越清晰、越流畅、越丝滑  
不刷新就是静态的画面，刷新比较低就是卡了，PPT 的感觉  
动画想要丝滑流畅，需要卡住时间点进行代码操作（代码语句赋值、浏览器重绘）  
所以只需要每隔 1000 毫秒的 60 分之一（60HZ）即约为 17 毫秒，进行一次动画操作即可  
只要卡住这个 17 毫秒，每隔 17 毫秒进行操作，就能确保动画丝滑  
但是定时器的回调函数，会受到 js 的事件队列宏任务、微任务影响，可能设定的是 17 毫秒执行一次，但是实际上这次是 17 毫秒、下次 21 毫秒、再下次 13 毫秒执行，所以并不是严格的卡住了这个 60HZ 的时间  
没有在合适的时间点操作，就会出现：类似这样的情况：变、不变、不变、变、不变...  
于是就出现了，绘制不及时的情况，就会有抖动的出现（以上述案例，位置和时间没有线性对应更新变化导致看起来抖动）

### 为何 requestAnimationFrame 不会卡

requestAnimationFrame 能够做到，精准严格的卡住显示器刷新的时间，比如普通显示器 60HZ 它会自动对应 17ms 执行一次，比如高级显示器 120HZ，它会自动对应 9ms 执行一次。
当然 requestAnimationFrame 只会执行一次，想要使其多次执行，要写成递归的形式。上述案例也给出了递归写法

至于为何 requestAnimationFrame 能够卡住时间，其底层原理又是啥？本文暂且按下不表。

所以，这就是 requestAnimationFrame 的好处。
所以，上述内容验证了：一项新技术新的技术方案的提出，一定是为了解决相关的问题的。
所以，window.requestAnimationFrame 这个 api 就是解决了定时器不精准的问题的。
这就是其产生的原因

### requestAnimationFrame 执行顺序

```js
console.log('Script start');

setTimeout(() => {
  console.log('setTimeout');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise');
});

requestAnimationFrame(() => {
  console.log('requestAnimationFrame');
});

console.log('Script end');
```

输出  
Script start  
Script end  
Promise  
requestAnimationFrame  
setTimeout

说明  
初始同步代码被最先运行，结果是 Script start 和 Script end。  
Promise 是一个微任务，它在当前宏任务完成后立即执行。  
requestAnimationFrame 在内存中的下一轮渲染周期中执行。（微任务之后）  
setTimeout 是一个宏任务，它排在事件队列并在下一轮事件循环时执行。

### requestAnimationFrame 清除

使用 requestAnimationFrame 时和 setTimeout 一样需要清除

```js
const rafId = requestAnimationFrame(() => {
  console.log('requestAnimationFrame');
});
cancelAnimationFrame(rafId);
```
