---
nav: Html
group:
  title: 基础
  order: 1
toc: content
title: iframe
mobile: false
---

## iframe

<a href="https://juejin.cn/post/7185070739064619068" target="_blank">iframe 微前端</a>

## iframe 缺点

1、iframe 会阻塞主页面的 onload 事件  
2、不利于 seo  
3、不容易管理  
4、会影响主站点的 history 历史记录  
5、不是所有的页面都可以用 iframe 来包裹嵌入其他网站

## 如何防止 iframe 影响浏览器历史记录

动态创建 iframe 而不是去改变 iframe 里面的 url
