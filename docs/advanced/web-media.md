---
nav: 高阶技术
group:
  title: 前端工具
  order: 2
toc: content
mobile: false
title: web 媒体技术
---

## webRTC

网页即时通信（英语：Web Real-Time Communication），它允许网络应用或者站点，在不借助中间媒介的情况下，建立浏览器之间点对点（Peer-to-Peer）的连接，实现视频流和（或）音频流或者其他任意数据的快速传输。

WebRTC 广泛应用于视频会议、在线教育、实时聊天应用等领域，使得网络通信更加便捷、高效。由于其开源的特性，许多平台和服务都在其基础上进行了功能扩展和集成。

阿里云 npm 包 ： https://www.npmjs.com/package/aliyun-rts-sdk

## WebGL

WebGL（全写 Web Graphics Library）是一种 3D 绘图标准，并允许用户与之交互。这种绘图技术标准允许把 JavaScript 和 OpenGL ES 2.0 结合在一起，通过增加 OpenGL ES 2.0 的一个 JavaScript 绑定，WebGL 可以为 HTML5 Canvas 提供硬件 3D 加速渲染，这样 Web 开发人员就可以借助系统显卡来在浏览器里更流畅地展示 3D 场景和模型了，还能创建复杂的导航和数据视觉化。

## WebAssembly

WebAssembly 或者 wasm 是一个可移植、体积小、加载快并且兼容 Web 的全新格式，是由主流浏览器厂商组成的 W3C 社区团体制定的一个新的规范。

## 如何优化音频和视频的加载性能

1. 使用合适的编码格式
2. 采用流媒体技术
3. 压缩和优化文件
4. 使用懒加载
5. 提前加载
6. 使用内容分发网络 (CDN)

## canvas 和 webgl 有什么区别？

Canvas 和 WebGL 都是用于在 Web 浏览器中绘制图形和动画的技术，但它们在实现和功能上有一些区别：

渲染方式：

Canvas：Canvas 使用 2D 渲染上下文（2D context）来绘制图形和图像。它基于像素的绘图系统，通过 JavaScript 脚本控制渲染过程。  
WebGL：WebGL（Web Graphics Library）是基于 OpenGL ES 标准的 JavaScript API，它可以利用 GPU 进行硬件加速的 3D 图形渲染。WebGL 使用着色器（shaders）编程，允许更复杂和高性能的图形渲染。
功能和复杂性：

Canvas：Canvas 提供了简单的 2D 图形绘制功能，包括绘制基本形状、路径、文本和图像等。它适用于绘制简单的图形和动画。  
WebGL：WebGL 提供了强大的 3D 图形渲染功能，包括高级的着色器编程、纹理映射、深度缓冲、光照效果等。它适用于创建复杂的 3D 图形、游戏和交互式可视化。
编程难度：

Canvas：使用 Canvas 进行 2D 图形绘制相对简单，仅需基本的 JavaScript 知识和绘图 API 的了解即可开始绘制。
WebGL：WebGL 的编程相对复杂，需要了解着色器编程和 3D 图形渲染的概念。使用 WebGL 需要掌握 OpenGL ES 或类似的图形编程知识。
选择 Canvas 还是 WebGL 取决于具体的需求。如果只需要简单的 2D 图形和动画，Canvas 是一个不错的选择。但如果需要更高级的 3D 图形渲染和性能，或者开发复杂的游戏或可视化应用程序，那么 WebGL 可能更适合。
