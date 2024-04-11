---
nav: Node
group: webpack
toc: content
mobile: false
title: 联邦模块
---

## 联邦模块

Webpack 5 的模块联邦（Module Federation）是一种新的技术，可以实现多个独立 Webpack 构建之间的共享模块和代码。它通过让每个构建的应用程序能够使用其他应用程序中的模块来提高代码共享和复用的效率。

Module Federation 基于 webpack 的远程容器特性。它允许将一个应用程序的某些模块打包为一个独立的、可远程加载的 bundle，并在运行时动态地加载这些模块。这样，在另一个应用程序中就可以通过远程容器加载这些模块，并直接使用它们。这种方式可以避免重复打包和加载相同的模块或库，提高了应用程序的性能和效率。

Module Federation 的主要优势包括：

- 多个应用程序之间可以共享代码和模块，从而减少重复代码量。<br/>
- 应用程序可以更加灵活地划分为更小的子应用程序，从而降低应用程序的复杂度。<br/>
- 可以避免在应用程序之间传递大量数据，从而提高应用程序的性能和效率。<br/>
- 可以支持应用程序的动态加载和升级，从而实现更好的版本管理和迭代。<br/>

## 使用实例

### 导出

```js
// ice.config.mts  ice3  作为导出webcomponent 配置的盒子
import webpack from 'webpack';

export default defineConfig({
  webpack: (webpackConfig: any, ctx) => {
    if (webpackConfig.mode === 'development') {
      webpackConfig.devServer.client.overlay = false;
      webpackConfig.output.publicPath = 'http://localhost:3000/'; //导出的http路径
    }
    webpackConfig.plugins = [
      ...webpackConfig.plugins,
      new webpack.container.ModuleFederationPlugin({
        name: 'app1', // 远程应用的唯一名称
        filename: 'remoteEntry.js', // 指定远程应用的入口文件名
        library: { type: 'var', name: 'app1' },
        // 指定当前应用暴露哪些模块给远程应用使用。键是别名，值是相对于当前项目的文件路径
        exposes: {
          './Header': './src/components/hello-word', // 导出共享模块
        },
        // 定义如何在全局变量中暴露输出的模块。这对于加载远程模块时非常重要，因为它决定了如何在宿主环境中访问它们
        library: { type: 'var', name: 'app_name' },
        // 当时跨技术栈的时候一定要设置成这样 ，不然无法工作，比如vue里面用react 的webComponent 组件
        // library: { type: 'umd', name: 'app1', umdNamedDefine: true },
        // 指定哪些依赖（libraries）会被当前应用和远程共享。这可以防止重复加载同一个依赖库。你可以提供一个数组或一个对象来具体指定共享的模块和版本。
        shared: ['react', 'react-dom'],
        // 指定当前应用可以从哪些远程应用加载模块。键是远程应用的名称，值是加载远程模块的路径（通常包括URL）。
        remotes: {
          app2: 'app2@https://someurl.com/remoteEntry.js',
        },
      }),
    ];
    return webpackConfig;
  },
});
```

### react 应用 把组件转为 webcomponent

```js
// 对应上面导出的hello-word组件
import React from 'react';
import ReactDOM from 'react-dom';
import ReactToWebComponent from 'react-to-webcomponent';

const HelloWord = () => {
  return <div>Hello Word</div>;
};

const WebComponent = ReactToWebComponent(HelloWord, React, ReactDOM);

export default WebComponent;
```

### 使用

```js
const path = require('path');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const { DefinePlugin } = require('webpack');

module.exports = {
  plugins: [
    new VueLoaderPlugin(), // vue-loader插件
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
      inject: true, // 自动注入静态资源
    }),
    new ModuleFederationPlugin({
      name: 'app2',
      remotes: {
        app1: 'app1@http://localhost:3000/remoteEntry.js',
      },
    }),
    new DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
```

## 隔离

使用 Module Federation 时，引入的模块通常不会导致全局对象污染。这是因为 Webpack 提供了隔离机制来确保模块的代码在自己的作用域内执行。具体来说，每个从远端加载的模块都会被包裹在一个模块作用域内，类似于如何处理标准的 ES6 模块。这就意味着，只要开发人员没有显式地向全局作用域添加变量或函数，就不会有全局污染的风险。

然而，仍然有潜在的全局污染风险，比如：

1. **显式全局变量**：如果远程模块中的代码显式地向 `window` 或其他全局对象添加了属性，就有可能造成全局污染。

2. **样式冲突**：CSS 样式不具有模块化的作用域，因此，如果远程模块加载了全局样式，可能会与宿主应用中的样式发生冲突。

3. **第三方库的全局污染**：如果远程模块依赖于会污染全局命名空间的第三方库（如某些旧的 jQuery 插件），也可能导致全局污染。

为了防止这些问题，开发人员需要采取一些最佳实践，例如：

- 避免在模块代码中直接使用全局变量。
- 使用 CSS-in-JS 等技术来实现样式的模块化，或者确保样式选择器足够特定以防止冲突。
- 对于会造成全局污染的第三方库，尝试寻找或创建现代、模块化的替代品。

总而言之，Module Federation 本身提供了一定程度上的隔离，但是否会造成全局污染还取决于开发人员如何编写和管理他们的代码。通过遵循良好的编码实践和设计模式，可以显著地降低这种风险。
