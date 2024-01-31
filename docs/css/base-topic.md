---
toc: content
group:
  title: 面试
  order: 2
title: 题目
---

# css 加载会造成页面渲染阻塞吗?

DOM 和 CSSOM 通常是并行构建的,所以 CSS 加载不会阻塞 DOM 的解析。

然而,由于 Render Tree 是依赖于 DOM Tree 和 CSSOM Tree 的,
所以他必须等待到 CSSOM Tree 构建完成,也就是 CSS 资源加载完成(或者 CSS 资源加载失败)后,才能开始渲染。

因此,CSS 加载会阻塞 Dom 的渲染。

由于 JavaScript 是可操纵 DOM 和 css 样式的,如果在修改这些元素属性同时渲染界面（即 JavaScript 线程和 UI 线程同时运行）,那么渲染线程前后获得的元素数据就可能不一致了。
因此为了防止渲染出现不可预期的结果,浏览器设置 GUI 渲染线程与 JavaScript 引擎为互斥的关系。因此,样式表会在后面的 js 执行前先加载执行完毕,所以 css 会阻塞后面 js 的执行

# css 的哪些属性可以继承

1. 字体系列（font-family）
2. 字体大小（font-size）
3. 字体样式（font-style）
4. 字体粗细（font-weight）
5. 行高（line-height）
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

# 移动端 1px 解决方案

https://juejin.cn/post/7084220221505929230

设备尺寸: 设备的对角线长度
像素: 组成图像的最小单元
分辨率： 屏幕分辨率是指纵横向上的像素点数 (单位 px)
逻辑像素： css 像素
pc 端 1css 像素 = 1 物理像素
设备像素比 DPR(devicePixelRatio) ：物理像素/逻辑像素(CSS 像素)

我们可以采用伪元素+transform 的方式解决该问题

```css
.scale-1px{
position: relative;
border:none;
}
.scale-1px:after{
content: '';
position: absolute;
bottom: 0;
background: #000;
width: 100%;
height: 1px;
/*_核心是利用 transform 缩放边框_*/
-webkit-transform: scaleY(0.5);
transform: scaleY(0.5);
-webkit-transform-origin: 0 0;
transform-origin: 0 0;
}

if(window.devicePixelRatio && devicePixelRatio >= 2){
document.querySelector('ul').className = 'scale-1px';
}
```

# 页面导入样式时，使用 link 和@import 有什么区别

1、link 属于 HTML 标签，而@import 是 css 提供的；
2、页面被加载时，link 会同时被加载，而@import 引用的 css 会等到页面被加载完再加载；
3、@import 只在 IE5 以上才能识别，而 link 是 XHTML 标签，无兼容问题；
4、link 方式的样式的权重高于@import 的权重。

# 用户代理样式表

用户代理样式表（User Agent Stylesheet）是浏览器提供的默认样式表。这些样式是由浏览器供应商（如 Google Chrome、Mozilla Firefox、Apple Safari 等）定义的，用于为没有显式样式（由开发者提供）的 HTML 元素提供基础样式。这就意味着，如果您创建一个没有任何 CSS 的 HTML 网页，显示给用户的页面样式将由用户代理样式表决定。

用户代理样式表的目的是确保网页有一个统一的基本外观，即使它们没有特别的样式定义。这些默认样式可能包括但不限于元素的字体大小、颜色、外边距、内边距等属性。

开发者通常使用 CSS 重置（如 Normalize.css）或 CSS 框架（如 Bootstrap、Foundation 等）来覆盖用户代理样式表的默认值，确保不同浏览器中的一致性，并根据项目需求提供自定义样式。

要查看浏览器为特定元素应用的用户代理样式，可以使用浏览器的开发者工具。在元素的“Computed”样式选项卡中，通常可以看到来源为“user agent stylesheet”的样式。这些就是浏览器默认应用的样式。
