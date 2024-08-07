---
nav: Node
group: webpack
toc: content
mobile: false
title: Webpack|Vite|Rollup
---

## vite

是一个基于浏览器原生 ES 模块导入的开发服务器，在开发环境下，利用浏览器去解析 import，在服务器端按需编译返回，完全跳过了打包这个概念，服务器随启随用。同时不仅对 Vue 文件提供了支持，还支持热更新，而且热更新的速度不会随着模块增多而变慢。在生产环境下使用 Rollup 打包

Dev Server 无需等待，即时启动；<br/>
1、几乎实时的模块热更新；<br/>
2、所需文件按需编译，避免编译用不到的文件；<br/>
3、开箱即用，避免各种 Loader 和 Plugin 的配置；<br/>

### 开箱即用

TypeScript - 内置支持<br/>
less/sass/stylus/postcss - 内置支持（需要单独安装所对应的编译器）<br/>

### Vite 为什么启动非常快<br/>

开发环境使用 Es6 Module，无需打包，非常快<br/>
生产环境使用 rollup，并不会快很多<br/>

### Vite 的热更新原理是什么？

Vite 本地启动时会创建一个 WebSocket 连接，同时去监听本地的文件变化
当用户修改了本地的文件时，WebSocket 的服务端会拿到变化的文件的 ID 或者其他标识，并推送给客户端
客户端获取到变化的文件信息之后，便去请求最新的文件并刷新页面

### Rollup 和 Webpack 的区别

Rollup 和 Webpack 是两种常用的前端构建工具，它们有以下区别：

Rollup 不支持 HMR（Hot Module Replacement 热更新）

构建目标：Rollup 主要用于构建 JavaScript 库或模块，它将代码打包成更小、更高效的输出。而 Webpack 更适用于构建复杂的应用程序，它可以处理各种资源（如 JavaScript、CSS、图片等）并将它们打包成一个或多个输出文件。

打包方式：Rollup 采用模块的静态分析和 Tree Shaking 技术，可以将未使用的代码从输出中删除，从而生成更小的包。而 Webpack 采用模块的动态分析和代码拆分技术，可以按需加载模块，提供更好的运行时性能。

模块化支持：Rollup 原生支持 ES 模块，可以直接导入和导出 ES 模块。而 Webpack 可以处理各种模块类型，包括 CommonJS、AMD、ES 模块等。

插件生态系统：Rollup 的插件生态系统相对较小，但它提供了一些常用的插件，如 Babel、PostCSS 等。而 Webpack 的插件生态系统非常丰富，提供了大量的插件来处理各种任务，如压缩代码、优化资源等。

配置方式：Rollup 的配置文件相对简单，可以通过 JavaScript 或 JSON 格式进行配置。而 Webpack 的配置文件更为复杂，采用 JavaScript 格式，可以编写更灵活和复杂的配置。

总而言之，Rollup 更适合构建 JavaScript 库或模块，并且可以生成更小、更高效的输出文件。而 Webpack 更适合构建复杂的应用程序，并且具有更强大的功能和插件生态系统。选择使用哪个工具取决于您的项目需求和偏好。

### esbuild

esbuild 是一个非常快速的 JavaScript 打包器和压缩器，由 Evan Wallace 创建。其主要特点是使用 Go 语言编写，目的是通过利用 Go 的高性能特点来提高打包和构建过程的速度。esbuild 能够实现极快的代码转换和打包速度，相较于大多数使用 JavaScript 编写的打包器（如 webpack、Rollup、Parcel 基于 node）有着显著的性能优势。

1、Vite 使用 esbuild 作为预打包工具（dependency pre-bundling），用于快速处理项目依赖的 ESM 模块。当你在项目中运行 vite 命令时，Vite 会检测你的 import 语句，并预先使用 esbuild 打包所有的第三方依赖到一起。这样做可以显著提升页面的加载速度，因为它避免了浏览器需要发送大量的 HTTP 请求来获取每个模块文件。

2、 转换 TypeScript 和 JSX
esbuild 也用于将 TypeScript 和 JSX 转换成纯 JavaScript。由于 esbuild 的转换速度非常快，它能够加快整个开发过程中的代码编译时间，提供更流畅的开发体验。
