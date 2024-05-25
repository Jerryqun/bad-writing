---
nav: Node
group: webpack
toc: content
mobile: false
title: 基本配置
---

## webpack 基本配置

```js
// webpack.config.js 单个配置
const path = require('path');

module.exports = {
  // 用于定义项目入口文件，Webpack 会从这些入口文件开始按图索骥找出所有项目文件
  entry: './src/index',
  // 配置产物输出路径、名称等
  output: {
    filename: '[name].js',
    path: path.join(__dirname, './dist'),
  },
  // 用于配置模块加载规则，例如针对什么类型的资源需要使用哪些 Loader 进行处理
  module: {
    rules: [
      {
        test: /\.js$/, // 用于声明该规则的过滤条件，只有路径名命中该正则的文件才会应用这条规则，示例中的 /\.js$/ 表示对所有 .js 后缀的文件生效
        use: ['babel-loader'],
        // 配置 Babel 功能逻辑 在此处指的是babel-loader的配置
        options: {
          presets: ['@babel/preset-env'],
        },
      },
    ],
  },
  // 使用 resolve.extensions 声明自动解析 .ts 后缀文件，这意味着代码如 import "./a.ts" 可以忽略后缀声明，简化为 import "./a" 文件
  resolve: {
    extensions: ['.ts', '.js'],
  },
};

// webpack.config.js 对象数组配置
// 配置对象数组：每个数组项都是一个完整的配置对象，每个对象都会触发一次单独的构建，通常用于需要为同一份代码构建多种产物的场景，如 Library；
module.exports = [
  {
    entry: './src/index.js',
    // 其它配置...
  },
  {
    entry: './src/index.js',
    // 其它配置...
  },
];

/**
 * 使用数组方式时，Webpack 会在启动后创建多个 Compilation 实例，并行执行构建工作，但需要注意，Compilation 实例间基本上不作通讯，
 * 这意味着这种并行构建对运行性能并没有任何正向收益，
 * 例如某个 Module 在 Compilation 实例 A 中完成解析、构建后，在其它 Compilation 中依然需要完整经历构建流程，无法直接复用结果。
 */
```

## 前端为什么要进行打包和构建

- 打包后代码体积小（tree-shaking，压缩，合并），加载更快
- 编译高级语法（ts，es6，模块化，scss）
- 兼容性和错误检查（polyfill，postcss，eslint）
- 高效的开发环境
- 统一的构建流程和产出标准
- 前端工程化
