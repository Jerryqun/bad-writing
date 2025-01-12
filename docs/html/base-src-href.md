---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: src和href的区别
mobile: false
---

## src 和 href 的区别

<a target="_blank" href="https://juejin.cn/post/7026525458619432973">
   参考
</a>  <br />
1、src 会阻碍其他资源的加载 、href 不会    
(当浏览器解析到使用 src 的元素时，会暂停其他资源资源的下载，直到 src 引用资源加载、编译、执行完毕。这也是为什么 script 元素推荐放在 html 结构的底部, 而 href 不会,这是建议使用 link 标签加载样式而不是@import 的原因)

2、src 会替换元素本身的内容 href 不会

```js
// test.js
// console.log(2)

// <script src="./test.js">
//     console.log(1)
// </script>
// 打印的是 2

// <a href="www.baidu.com">
//   <img src="xxx" />
// </a>

// img 标签不会被替换
```

原因就是 test.js 的代码嵌入到了当前 script 元素中，导致原本的内容被替换。

3、场景  
href ：a link；<br/>
src：script img iframe video

4、src 代表的是网站的一部分，没有会对网站的使用造成影响
href 代表网站的附属资源，没有不会对网站的核心逻辑和结构造成影响
