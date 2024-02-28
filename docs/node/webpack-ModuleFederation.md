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

多个应用程序之间可以共享代码和模块，从而减少重复代码量。<br/>
应用程序可以更加灵活地划分为更小的子应用程序，从而降低应用程序的复杂度。<br/>
可以避免在应用程序之间传递大量数据，从而提高应用程序的性能和效率。<br/>
可以支持应用程序的动态加载和升级，从而实现更好的版本管理和迭代。<br/>

总之，Webpack 5 的模块联邦是一项重要的技术创新，可以帮助开发者更好地共享和复用代码、降低应用程序的复杂度，并提高应用程序的性能和效率。

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
        name: 'app1',
        filename: 'remoteEntry.js',
        library: { type: 'var', name: 'app1' },
        exposes: {
          './Header': './src/components/hello-word', // 导出共享模块
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
