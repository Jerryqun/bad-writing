---
nav: Js
group: 进阶
toc: content
title: Gzip
---

<a target="_blank" href="https://www.jianshu.com/p/fcfa1945db23">webpack 优化之 Gzip</a>

<a target="_blank" href="https://segmentfault.com/a/1190000012571492">服务端 Gzip</a>

## 原理

Gzip 压缩背后的原理，是在一个文本文件中找出一些重复出现的字符串、临时替换它们，从而使整个文件变小。根据这个原理，文件中代码的重复率越高，那么压缩的效率就越高，使用 Gzip 的收益也就越大。反之亦然。
