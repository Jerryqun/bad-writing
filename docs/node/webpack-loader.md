---
nav: Node
group: webpack
toc: content
mobile: false
title: plugin和loader的区别
---

## plugin 和 loader 的区别

loader 是文件加载器，能够加载资源文件，并对这些文件进行一些处理，诸如编译、压缩等，最终一起打包到指定的文件中，webpack 本身只能识别 js 和 json 文件。

plugin 赋予了 webpack 各种灵活的功能，例如打包优化、资源管理、环境变量注入等，目的是解决 loader 无法实现的其他事。

两者在运行时机上的区别：

loader 运行在打包文件之前
plugins 在整个编译周期都起作用

在 Webpack 运行的生命周期中会广播出许多事件，Plugin 可以监听这些事件，在合适的时机通过 Webpack 提供的 API 改变输出结果。

对于 loader，实质是一个转换器，将 A 文件进行编译形成 B 文件，操作的是文件，比如将 A.scss 或 A.less 转变为 B.css，单纯的文件转换过程。

## 手写一个 webpack 的自定义 loader

1、创建一个 JavaScript 文件： my-loader.js<br/>
2、编写 loader 函数：你的 loader 模块需要导出一个函数，这个函数接收源文件的内容作为参数。然后，你可以在这个函数内部对内容进行处理，并返回最终的字符串或 Buffer。<br/>

```js
module.exports = function (source) {
  // 处理source内容
  const result = someTransformation(source);

  // 如果有必要，可以使用this.callback()返回多个值，或者返回一个Error对象
  return result;
};
```

3、配置 Webpack 使用你的 Loader：
在 Webpack 配置文件中，使用 module.rules 来指定哪些文件需要经过你的 loader 处理。

```js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.ext$/, // 匹配需要处理的文件扩展名
        use: [
          {
            loader: path.resolve('./path/to/my-loader.js'),
            options: {
              /* ... */
            }, // 如果需要的话，可以传递选项
          },
        ],
      },
      // 其他rules...
    ],
  },
  // ...
};
```
