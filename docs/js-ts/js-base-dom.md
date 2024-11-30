---
nav: Js
group: 基础概念
toc: content
title: DOM
---

## DOM

DOM：(Document Object Model, 文档对象模型)是文档内容（HTML 或 XML）在编程语言上的抽象模型，它建模了文档的内容和结构，并提供给编程语言一套完整的操纵文档的 API。

## 节点导航

Node 的类规定了节点具有的许多属性，方便我们从某个节点中找到跟它相关的另外节点。

顶级节点一般直接获取：  
document -- 入口节点。  
document.documentElement -- HTML 节点。  
document.head -- head 节点。  
document.body -- body 节点。

对 node 节点，有以下属性：  
node.parentNode -- 获取节点的父节点。  
node.previousSibling -- 获取节点的上一个兄弟节点。  
node.nextSibling -- 获取节点的下一个兄弟节点。  
node.childNodes -- 获取节点的孩子节点列表。没有子节点返回空列表。  
node.firstChild 和 node.lastChild -- 获取第一个和最后一个孩子节点，同 node.childNodes[0]和 node.childNodes[node.childNodes.length-1]。

## 元素的类和样式

修改样式有两种方式，一是把样式写到某个类里，然后在代码中修改元素的类，一是直接修改 elem.style.\*。前者适用于随状态改变样式的情况，在代码可维护性上更加，用得较多。后者适用于频繁计算或切换的样式。

elem.classList: 一个包含 elem 所有类的可迭代的类数组对象。这个对象有几个方法，方便我们改变元素的类。  
elem.classList.contains(class) -- 检查是否有某个类。  
elem.classList.add(class) -- 添加某个类。  
elem.classList.remove(class) -- 移除某个类。  
elem.classList.toggle(class) -- 切换某个类，如果有就删除，没有就添加。  
elem.className: 一个读写属性，把元素的 class 特性当成一个整体看待。如 HTML 中某个元素 elem 存在特性 class="first red"，那么 elem.className 的值为 first red。

区分：通过 elem.classList 或 elem.className 都可以对元素的类进行改动，前者更加灵活，且具有相应的方法，后者是一个整体的字符串属性，适合删除所有的类重新设置。

这种方式实际上是通过元素上的 style 特性实现的，它的优先级高于一般的 CSS，所以都是有效的，除非你在其它地方用了!important。elem.style.\*也是可读取的，**但是它们只会读取元素中 style 特性存在的属性，**对其它 CSS 是无效的。但我们往往需要的是最终应用在元素的样式数值。这种时候，需要使用

`getComputedStyle(elem) `：获取元素最终应用的样式，它返回一个样式对象，比如，可通过 getComputedStyle(elem).backgroundColor 获取颜色值。  
注意：getComputedStyle 不支持简写属性，如 getComputedStyle(elem).padding 是无效的。

## 元素的特性和属性

特性（attribute）是指 html 中写在标签内的特性，而属性（property）是只元素节点作为编程对象具有的属性。

特性 -- 属性同步机制：对标准规定的特性，元素对象具有响应的读写属性, 如 a.href。这种机制极大的方便了在 JS 中获取或修改元素的特性。

提醒：对不同 HTML 元素，规定的特性不同，属性也就不同，如: 存在 a.href 但不存在 div.href。

通用的特性操作接口：

elem.hasAttribute(name) -- 检查是否存在某个特性。  
elem.getAttribute(name) -- 获取某一特性的值。  
elem.setAttribute(name, value) -- 设置某一特性。  
elem.removeAttribute(name) -- 删除某一特性。  
elem.attributes() -- 获取所有的特性对，每个特性对具有 name,value 属性。

特殊的 data-*：data-*特性是一种合法且安全的传递自定义数据的方式。可通过 elem.dataset.name 读取或修改 data 特性的值。属性名称采用驼峰写法，如 elem 上的 data-apple-price 对应 elem.dataset.applePrice。

## 元素的类和样式

elem.classList.contains(class) -- 检查是否有某个类。  
elem.classList.add(class) -- 添加某个类。  
elem.classList.remove(class) -- 移除某个类。  
elem.classList.toggle(class) -- 切换某个类，如果有就删除，没有就添加。
