---
nav: Js
toc: content
group: 基础概念
mobile: false
title: requestAnimationFrame
---

## requestAnimationFrame

<a href="https://juejin.cn/post/7190728064458817591" target="_blank">参考</a>

window.requestAnimationFrame() 告诉浏览器——你希望执行一个动画，并且要求浏览器在下次重绘之前调用指定的回调函数更新动画。该方法需要传入一个回调函数作为参数，该回调函数会在浏览器下一次重绘之前执行

它不属于宏任务也不属于微任务，因为它是独立于主线程之外的任务，不归主线程管

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
