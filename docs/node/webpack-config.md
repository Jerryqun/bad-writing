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

## `externals` 和 `IgnorePlugin`的区别

`externals` 和 `IgnorePlugin` 在 Webpack 中都是用来排除特定模块的，但它们的工作方式和应用场景有所不同。了解这两个概念的区别对于合理配置 Webpack 是非常重要的。

### externals

`externals` 配置是告诉 Webpack 不要去打包一些特定的模块，而是在运行时通过外部方式提供这些模块。这个配置通常用于库作者不想将某些包打包进自己的库里，而是希望最终用户从外部环境中获取。例如，如果你在开发一个库，里面用到了 lodash，你可能会希望用户从他们自己的应用中提供 lodash，而不是打包进你的库文件中。

当你将某个模块设为 `externals`，Webpack 会在打包的模块中保留 `require()` 或 `import` 语句，但是不会将它们打包进输出文件中，而是期望这些外部依赖在运行环境中已经存在。

```javascript
// webpack.config.js
module.exports = {
  // ...
  externals: {
    lodash: '_', // 表明 lodash 模块对应一个全局变量 '_'
  },
};
```

### IgnorePlugin

`IgnorePlugin` 用于完全忽略某些模块，使得 Webpack 在构建过程中不会去解析或打包这些模块，即使代码中含有对它们的引用。相比于 `externals`，`IgnorePlugin` 更像是让 Webpack 装作这些模块不存在。这种配置适用于你确定不会在打包文件中需要某个模块（或模块的某个部分）的场景。

一个典型的用例是在使用 moment.js 时忽略其所有本地化文件，因为它们会占用很大的空间，而大多数应用可能只需要少数或根本不需要这些本地化文件。

```javascript
// webpack.config.js
const webpack = require('webpack');

module.exports = {
  // ...
  plugins: [
    new webpack.IgnorePlugin({
      resourceRegExp: /^\.\/locale$/,
      contextRegExp: /moment$/,
    }),
  ],
};
```

### 区别

1. **使用场景**: `externals` 用于声明一些模块由外部环境提供，这对于开发库和组件非常常见，而 `IgnorePlugin` 通常用于排除一些不必要的模块，以减小最终包的体积。

2. **打包结果**: 使用 `externals` 时，Webpack 会保留模块引用，只是不会把这些模块的代码包含在内。而 `IgnorePlugin` 则会让 Webpack 完全忽略这些模块，实际代码中的相关模块引用将不起作用。

3. **模块解析**: 当 `IgnorePlugin` 用于某个模块或文件时，Webpack 将不对其进行解析。而 `externals` 只影响模块打包，不影响模块解析。

4. **运行时依赖**: 使用 `externals` 时，模块依旧需要在运行时可用，否则会导致运行时错误。使用 `IgnorePlugin` 则意味着这些被忽略的模块在打包文件中就像完全不存在一样，不会有任何运行时引用。

选择使用 `externals` 还是 `IgnorePlugin` 取决于你的特定需求。需要外部提供模块时使用 `externals`，而希望减小打包体积并确定不需要某模块时，使用 `IgnorePlugin`。
