---
nav: Node
group: webpack
toc: content
mobile: false
title: DllPlugin
---

## DllPlugin

在 Webpack 中，`DllPlugin` 和其配套的 `DllReferencePlugin` 是一对插件，用于提高大型复杂应用的构建性能。DLL 是 "Dynamically Linked Library"（动态链接库）的缩写，在这个上下文中，它允许将特定的库提前打包成一个单独的 bundle，而不是在每次构建时都重复打包这些库。

### DllPlugin

`DllPlugin` 用于创建一个只包含有特定依赖库的 bundle，这个 bundle 将会生成一个映射这些库模块 ID 的 manifest 文件。这意味着可以预先打包那些在项目中不会经常更改的第三方依赖，例如 React、Vue、Lodash 等库。

### DllReferencePlugin

`DllReferencePlugin` 用于在主应用的构建中引用 `DllPlugin` 创建出的 DLL bundle，并使用 manifest 文件中的信息来告诉 Webpack 需要加载的第三方库模块可以在 DLL bundle 中找到。这样就不需要在主应用构建时再次打包这些库，可以显著提升构建速度。

### 如何配置 DllPlugin 和 DllReferencePlugin

首先，创建一个 webpack 配置文件专门用于构建 DLL：

```javascript
// webpack.dll.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    vendor: ['react', 'react-dom'], // 这里是你的第三方库数组
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].dll.js',
    library: '[name]_library', // vendor.dll.js 中暴露出的全局变量名
  },
  plugins: [
    new webpack.DllPlugin({
      name: '[name]_library',
      path: path.join(__dirname, 'dist', '[name]-manifest.json'),
    }),
  ],
};
```

接着，将这些预先打包好的 DLL 文件包含到主应用的 webpack 配置中：

```javascript
// webpack.config.js
const path = require('path');
const webpack = require('webpack');

module.exports = {
  // ……其他配置
  plugins: [
    // ...其他插件
    new webpack.DllReferencePlugin({
      manifest: require('./dist/vendor-manifest.json'),
    }),
  ],
};
```

通过上述配置，可以启用 DLL 机制来优化构建性能。

### 注意事项

尽管使用 `DllPlugin` 可以在某些情况下大幅度提升构建性能，但请注意，随着 Webpack 5 引入了许多内置优化功能，DLL 的优势可能不如前。Webpack 5 的持久化缓存（Persistent Caching）和更好的算法使得 DLL 在某些情况下不再那么必要。

实际上，Webpack 5 官方并没有推荐继续使用 `DllPlugin`，而是建议利用其他内置的优化方式。所以在考虑使用 `DllPlugin` 之前，请评估你当前的 Webpack 版本以及是否存在其他更适合的性能优化方案。
