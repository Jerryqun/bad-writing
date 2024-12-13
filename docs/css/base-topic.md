---
toc: content
group:
  title: 面试
  order: 2
title: 面试题
---

## css 加载会造成页面渲染阻塞吗?

DOM 和 CSSOM 通常是并行构建的,所以 CSS 加载不会阻塞 DOM 的解析。

然而,由于 Render Tree 是依赖于 DOM Tree 和 CSSOM Tree 的,
所以他必须等待到 CSSOM Tree 构建完成,也就是 CSS 资源加载完成(或者 CSS 资源加载失败)后,才能开始渲染。

因此,CSS 加载会阻塞 Dom 的渲染。

由于 JavaScript 是可操纵 DOM 和 css 样式的,如果在修改这些元素属性同时渲染界面（即 JavaScript 线程和 UI 线程同时运行）,那么渲染线程前后获得的元素数据就可能不一致了。
因此为了防止渲染出现不可预期的结果,浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系。因此,样式表会在后面的 js 执行前先加载执行完毕,所以 css 会阻塞后面 js 的执行

CSS 会阻塞 JS 执行，但不会阻塞 JS 文件的下载

## 为什么 CSS 选择器是从右向左匹配的

CSS 中更多的选择器是不会匹配的，所以在考虑性能问题时，需要考虑的是如何在选择器不匹配时提升效率。从右向左匹配就是为了达成这一目的的，通过这一策略能够使得 CSS 选择器在不匹配的时候效率更高。这样想来，在匹配时多耗费一些性能也能够想的通了。

## css 的哪些属性可以继承

1. 字体系列（font-family）
2. 字体大小（font-size）
3. 字体样式（font-style）
4. 字体粗细（font-weight）
5. 行高（line-heightt）
6. 颜色（color）
7. 文本对齐（text-align）
8. 字符间距（letter-spacing）
9. 单词间距（word-spacing）
10. 文本装饰（text-decoration）
11. 水平对齐（text-align）
12. 垂直对齐（vertical-align）
13. 列表样式（list-style）
14. 表格布局（table-layout）
15. 边框折叠（border-collapse）
16. 内容区域的背景色（background-color）

## 移动端 1px 解决方案

https://juejin.cn/post/7084220221505929230

设备尺寸: 设备的对角线长度  
像素: 组成图像的最小单元  
分辨率：屏幕分辨率是指纵横向上的像素点数 (单位 px)  
逻辑像素：css 像素  
pc 端 1css 像素 = 1 物理像素  
设备像素比 DPR(devicePixelRatio) ：物理像素/逻辑像素(CSS 像素)

我们可以采用伪元素+transform 的方式解决该问题

```css
.scale-1px {
  position: relative;
  border: none;
}
.scale-1px:after {
  content: '';
  position: absolute;
  bottom: 0;
  background: #000;
  width: 100%;
  height: 1px;
  -webkit-transform-origin: 0 0;
  transform-origin: 0 0;
}

@media only screen and (-webkit-min-device-pixel-ratio: 2) {
  .border_1px:after {
    transform: scaleY(0.5);
  }
}
@media only screen and (-webkit-min-device-pixel-ratio: 3) {
  .border_1px:after {
    transform: scaleY(0.33);
  }
}
```

## 页面导入样式时，使用 link 和@import 有什么区别

1、link 属于 HTML 标签，而@import 是 css 提供的；<br/>
2、页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面被加载完再加载；<br/>
3、@import 只在 IE5 以上才能识别，而 link 是 XHTML 标签，无兼容问题；<br/>
4、link 方式的样式的权重高于@import 的权重。

## 为什么有时候⽤ translate 来改变位置⽽不是定位？

translate 是 transform 的一个值。改变 transform 或者 opacity 不会触发浏览器重新布局，或者重绘，只会触发复合。
而改变绝对定位会触发回流，进而触发重绘，所以说在使用绝对定位时会触发重绘和回流操作。

并且 transform 使浏览器为元素创建一个 GPU 图层，但是改变绝对定位会使用到 CPU，因此 translate 更加高效，可以缩短平滑动画的绘制时间。
而 translate 改变元素时，元素依然会占据原始位置，但是绝对定位不会发生这样的情况

transform 使浏览器为元素创建⼀个 GPU 图层，这使得动画元素在一个独立的层中进行渲染。当元素的内容没有发生改变，就没有必要进行重绘。

什么是 GPU 加速

图层的渲染会交给 GPU 来做，而 CSS 中的 transform filter opacity 等属性会交给合成线程来做，不会经历重绘和回流

## 移动端中不同手机 html 默认的字体大小都是一样的吗

如果没有人为取改变根元素字体大小的话，默认是 1rem = 16px；根元素默认的字体大小是 16px

em： 如果自身元素是没有设置字体大小的，那么就会根据其父元素的字体大小作为参照去计算，如果元素本身已经设置了字体，那么就会基于自身的字体大小进行计算 ，1em = font-size 的值

## iconfont 是什么？有什么优缺点

顾名思义，IconFont 就是字体图标。严格地说，就是一种字体，但是，它们不包含字母或数字，而是包含符号和字形。您可以使用 CSS 设置样式，就像设置常规文本一样，这使得 IconFont 成为 Web 开发时图标的热门选择。

### 优点

可以方便地将任何 CSS 效果应用于它们。
因为它们是矢量图形，所以它们是可伸缩的。这意味着我们可以在不降低质量的情况下伸缩它们。
我们只需要发送一个或少量 HTTP 请求来加载它们，而不是像图片，可能需要多个 HTTP 请求。
由于尺寸小，它们加载速度快。
它们在所有浏览器中都得到支持（甚至支持到 IE6）。

### 不足

不能用来显示复杂图像
通常只限于一种颜色，除非应用一些 CSS 技巧
字体图标通常是根据特定的网格设计的，例如 16x16, 32×32, 48×48 等。如果由于某种原因将网格系统改为 25×25，可能不会得到清晰的结果

# position: fixed 一定是相对于浏览器窗口进行定位吗

当元素祖先的 transform, perspective 或 filter 属性非 none 时，容器由视口改为该祖先。

filter
CSS3 filter(滤镜) 属性

将图片转为黑白

```css
img {
-webkit-filter: grayscale(100%); /_ Chrome, Safari, Opera _/
filter: grayscale(100%);
}
```

perspective
perspective 属性定义 3D 元素距视图的距离，以像素计。该属性允许您改变 3D 元素查看 3D 元素的视图。
当为元素定义 perspective 属性时，其子元素会获得透视效果，而不是元素本身。

```html
<!DOCTYPE html>
<html lang="en">
  <body>
    <style>
      div {
        transform: scale(1);
        height: 200px;
        width: 500px;
      }

      p {
        position: fixed;
        bottom: 0;
        right: 0;
      }
    </style>
    <body>
      <div>
        <p class="aside">
          再辅导费再辅导费再辅导费再辅导费再辅导费再辅导费再辅导费再辅导费再辅导
          费再辅导费再辅导费再
        </p>
      </div>
    </body>
  </body>
</html>
```

## z-index 属性在什么情况下会失效

通常 z-index 的使用是在有两个重叠的标签，在一定的情况下控制其中一个在另一个的上方或者下方出现。z-index 值越大就越是在上层。z-index 元素的 position 属性需要是 relative，absolute 或是 fixed。

z-index 属性在下列情况下会失效：

1、父元素 position 为 relative 时，子元素的 z-index 失效。
解决：父元素 position 改为 absolute 或 static；

2、元素没有设置 position 属性，或是 static 属性。解决：设置该元素的 position 属性为 relative，absolute 或是 fixed 中的一种；

3、素在设置 z-index 的同时还设置了 float 浮动。解决：float 去除，改为 display：inline-block；

## 如何解决＜ a ＞标签点击后 hover 事件失效的问题

改变 a 标签 css 属性的排列顺序，只需要记住 LoVe HAte 原则就可以了：

link→visited→hover→active

a:link
未访问时的样式，一般省略成 a

a:visited
已经访问过的样式

a:hover
鼠标放上去的样式

a:active
点击后的样式
