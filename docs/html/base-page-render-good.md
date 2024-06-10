---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: 页面渲染优化
mobile: false
---

## Webkit 渲染引擎流程

1、处理 HTML 并构建 DOM 树  
2、处理 CSS 构建 CSS 规则树(CSSOM)  
3、DOM Tree 和 CSSOM Tree 合成一棵渲染树 Render Tree。  
4、根据渲染树来布局，计算每个节点的位置  
5、调用 GPU 绘制，合成图层，显示在屏幕上

## 页面渲染优化

1、避免 css 阻塞  
css 影响 renderTree 的构建，会阻塞页面的渲染，因此应该尽早（将 CSS 放在 head 标签里）和尽快（启用 CDN 实现静态资源加载速度的优化)的将 css 资源加载

2、避免使用 CSS 表达式  
css 表达式（动态属性）会被频繁地计算。

3、避免 js 阻塞  
js 可以修改 CSSOM 和 DOM，因此 js 会阻塞页面的解析和渲染，并且会等待 css 资源的加载。也就是说 js 会抢走渲染引擎的控制权。所以我们需要给 js 资源添加 defer 或者 async，延迟 js 脚本的执行。

4、使用外链式的 js 和 css  
在现实环境中使用外部文件通常会产生较快的页面，因为 JavaScript 和 CSS 有机会被浏览器缓存起来。对于内联的情况，由于 HTML 文档通常不会被配置为可以进行缓存的，所以每次请求 HTML 文档都要下载 JavaScript 和 CSS。所以，如果 JavaScript 和 CSS 在外部文件中，浏览器可以缓存它们，HTML 文档的大小会被减少而不必增加 HTTP 请求数量。

5、使用字体图标 iconfont 代替图片图标  
图片会增加网络请求次数，从而拖慢页面加载时间
iconfont 可以很好的缩放并且不会添加额外的请求

6、首屏加载优化
使用骨架屏或者动画优化用户体验  
资源按需加载，首页不需要的资源延迟加载  
骨架屏(SPA 单页应用，无论 vue 还是 react，最初的 html 都是空白的，需要通过加载 JS 将内容挂载到根节点上，这套机制的副作用：会造成长时间的白屏  
常见的骨架屏插件就是基于这种原理，在项目打包时将骨架屏的内容直接放到 html 文件的根节点中)

7、降低 css 选择器的复杂度  
浏览器读取选择器，遵循的原则是从选择器的右边到左边读取。  
减少嵌套：最多不要超过三层，并且后代选择器的开销较高，慎重使用  
避免使用通配符，对用到的元素进行匹配即可  
利用继承，避免重复匹配和定义  
正确使用类选择器和 id 选择器

8、减少重绘和回流

- 增加多个节点使用 documentFragment：不是真实 dom 的部分，不会引起重绘和回流
- 用 translate  代替 top ，因为 top 会触发回流，但是 translate 不会。所以 translate 会比 top 节省了一个 layout 的时间
- 使用 visibility 替换 display: none ，因为前者只会引起重绘，后者会引发回流（改变了布局）；opacity  代替 visiability，visiability 会触发重绘（paint），但 opacity 不会。
- 把 DOM 离线后修改，比如：先把 DOM 给 display:none (有一次 Reflow)，然后你修改 100 次，然后再把它显示出来
  不要把 DOM 结点的属性值放在一个循环里当成循环里的变量
- 尽量少用 table 布局，table 布局的话，每次有单元格布局改变，都会进行整个 tabel 回流重绘
- 最好别频繁去操作 DOM 节点，最好把需要操作的样式，提前写成 class，之后需要修改。只需要修改一次，需要修改的时候，直接修改 className，做成一次性更新多条 css DOM 属性，一次回流重绘总比多次回流重绘要付出的成本低得多
- 动画实现的速度的选择，动画速度越快，回流次数越多，也可以选择使用 requestAnimationFrame
- 每次访问 DOM 的偏移量属性的时候，例如获取一个元素的 scrollTop、scrollLeft、scrollWidth、offsetTop、offsetLeft、offsetWidth、offsetHeight 之类的属性，浏览器为了保证值的正确也会回流取得最新的值，所以如果你要多次操作，最取完做个缓存。更加不要 for 循环中访问 DOM 偏移量属性，而且使用的时候，最好定义一个变量，把要需要的值赋值进去，进行值缓存，把回流重绘的次数减少；
- 将频繁运行的动画变为图层，图层能够阻止该节点回流影响别的元素。比如对于 video 标签，浏览器会自动将该节点变为图层。
