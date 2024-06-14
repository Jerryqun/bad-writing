---
nav: React
group: 基础
toc: content
mobile: false
title: 随笔
---

## react 中渲染 svg 以及改变 svg 的颜色

<a target="_blank" href="https://github.com/tanem/react-svg">参考</a>

## react 中为什么要有更新优先级(举例)

比如我们通过一个输入框，来进行搜索数据并展示列表，那么本质上是产生了两个更新任务，一个是表单内容的变化，另外一个列表的展示，表单变化是急迫的任务，但是列表的展示相比表单内容显得不是那么重要。这个时候如果两个更新任务继续合并，那么最终会导致因为表单输入是频繁的，但是需要列表更新才能返回更新的内容，列表的更新会影响到表单的输入，反映到用户眼中的就是，输入内容的延时。这个时候就需要把表单内容更新和列表的更新当成两个任务去处理。

## 编码细节

```js
/**
1、React动画
React 写动画也是一个比较棘手的问题。高频率的 setState 会给应用性能带来挑战，
这种情况在 M 端更加明显，因为 M 端的渲染能力受到手机性能的影响较大。
所以对 React 动画的处理要格外注意。我这里总结了三种 React 使用动画的方式，以及它们的权重。
 */

// ① 首选：动态添加类名

// .current{
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     background: #fff;
//     border: 1px solid #ccc;
// }
// .animation{
//     animation: 1s changeColor;
//     background:yellowgreen;
// }
// @keyframes changeColor {
//     0%{background:#c00;}
//     50%{background:orange;}
//     100%{background:yellowgreen;}
// }

export default function Index() {
    const [isAnimation, setAnimation] = useState(false)
    return <div>
        <button onClick={() => setAnimation(true)} >改变颜色</button>
        <div className={isAnimation ? 'current animation' : 'current'} ></div>
    </div>
}

// ② 其次：操纵原生 DOM
/**
 * 如果第一种方式不能满足要求的话，或者必须做一些 js 实现复杂的动画效果，那么可以获取原生 DOM
 * ，然后单独操作 DOM 实现动画功能，这样就避免了 setState 改变带来 React Fiber 深度调和渲染的影响。
 */

export default function Index() {
    const dom = useRef(null)
    const changeColor = () => {
        const target = dom.current
        target.style.background = '#c00'
        setTimeout(() => {
            target.style.background = 'orange'
            setTimeout(() => {
                target.style.background = 'yellowgreen'
            }, 500)
        }, 500)
    }
    return <div>
        <button onClick={changeColor} >改变颜色</button>
        <div className='current' ref={dom}  ></div>
    </div>
}

// ③ 再者：setState + css3
/**
如果 ① 和 ② 都不能满足要求，一定要使用 setState 实时改变DOM元素状态的话，那么尽量采用 css3 ，
css3 开启硬件加速，使 GPU (Graphics Processing Unit) 发挥功能，从而提升性能。
比如想要改变元素位置 left ，top 值，可以换一种思路通过改变 transform: translate，transform 是由 GPU 直接控制渲染的，
所以不会造成浏览器的重排。
 */


export default function Index() {
    const [position, setPosition] = useState({ left: 0, top: 0 })
    const changePosition = () => {
        let time = 0
        let timer = setInterval(() => {
            if (time === 30) clearInterval(timer)
            setPosition({ left: time * 10, top: time * 10 })
            time++
        }, 30)
    }
    const { left, top } = position
    return <div>
        <button onClick={changePosition} >改变位置</button>
        <div className='current' style={{ transform: `translate(${left}px,${top}px )` }}  ></div>
    </div>
}

// 2、及时清除定时器/延时器/监听器

export default class Index extends React.Component {
    current = null
    poll = () => { } /* 轮训 */
    handleScroll = () => { } /* 处理滚动事件 */
    componentDidMount() {
        this.timer = setInterval(() => {
            this.poll() /* 2 秒进行一次轮训事件 */
        }, 2000)
        this.current.addEventListener('scroll', this.handleScroll)
    }
    componentWillUnmount() {
        clearInterval(this.timer) /* 清除定时器 */
        this.current.removeEventListener('scroll', this.handleScroll)
    }
    render() {
        return <div ref={(node) => this.current = node}  >hello,let us learn React!</div>
    }
}

// 3 建议不要在 hooks 的参数中执行函数或者 new 实例

/**
 * 有一种场景是平时比较容易忽略的，就是在 hooks 的参数中执行函数或者 new 实例，比如如下这样：

const hook1 = useRef(fn())
const hook2 = useRef(new Fn())
不建议这么写。为什么呢？

首先函数每次 rerender 都会执行 hooks ，那么在执行 hooks 函数的同时，也会执行函数的参数，比如上面的代码片段中的 fn() 和 new Fn()，也就是每一次 rerender 都会执行 fn 或者是 new 一个实例。
这可能不是开发者期望的，而执行函数，或创建实例也成了一种性能浪费，在一些极端情况下，可能会造成内存泄漏，比如在创建新的 dom 元素，但是没有进行有效的回收。

在 hooks 原理章节讲到过，函数组件在初始化和更新流程中，会使用不同的 hooks 对象，还是以 useRef 为例子，在初始化阶段用的是 mountRef函数，
在更新阶段用的是 updateRef函数，开发者眼睛看见的是 useRef，在 React 底层却悄悄的替换成了不同的函数。 更重要的是大部分的 hooks 参数都作为初始化的参数，在更新阶段压根没有用到，
那么传入的参数也就没有了意义，回到上述代码片段，fn() 和 new Fn()在更新阶段根本就没有被 useRef接收， 无辜的成了流浪者。

还是以 useRef 为例子，看一下它在不同阶段的真正面目。

初始化

function mountRef(initialValue) {
  const hook = mountWorkInProgressHook();
  const ref = {current: initialValue};
  hook.memoizedState = ref;
  return ref;
}
初始化的时候用到了 initialValue ，也就是第一个参数。
更新阶段

function updateRef(initialValue) {
  const hook = updateWorkInProgressHook();
  return hook.memoizedState;
}
在更新阶段根本没有用到 initialValue。
那么回到最初的目的上来，如果开发者真的想在 hooks 中，以函数组件执行结果或者是实例对象作为参数的话，那么应该怎么处理呢。这个很简单。比如：

const hook = useRef(null)
if(!hook.current){
  hook.current = new Fn()
}
 */
```
