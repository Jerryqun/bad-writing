---
nav: Node
group: webpack
toc: content
mobile: false
title: 减少打包体积
---

## 减少打包体积

Webpack 是一个非常强大的前端打包工具，但随着项目的增长，打包后的体积可能会变得相当大。以下是一些减少 Webpack 打包体积的常用方法：

1. **Tree Shaking**：Tree Shaking 是一种通过移除未使用的代码来减少打包体积的技术。确保在`package.json`文件中设定`"sideEffects": false`，或者明确指出有副作用的文件，以便 Webpack 可以更好地优化你的代码。

2. **压缩代码**：使用插件例如`TerserPlugin`来压缩你的 JavaScript 代码。这个插件通常在生产环境中默认启用。
   Terser 是当下 最为流行 的 ES6 代码压缩工具之一，支持 Dead-Code Eliminate、删除注释、删除空格、代码合并、变量名简化等等一系列代码压缩功能

   使用 mode = 'production' 启动生产模式构建时，默认也会开启 Terser 压缩。
   Webpack5.0 后默认使用 Terser 作为 JavaScript 代码压缩器，简单用法只需通过 optimization.minimize 配置项开启压缩功能即可

   ```js
   optimization: {
     minimize: true,
   },
   ```

3. **使用 Externals**：将一些大型的第三方库（如`lodash`、`react`等）设为 externals，这样它们就不会被包含在打包文件中。这要求这些库通过其他方式（如 CDN）引入。

4. **按需加载**：使用`import()`语法来实现代码分割，引入组件、库或者其他资源，只有当需要的时候才加载它们。

5. **优化图片和字体文件**：使用`image-webpack-loader`、`url-loader`等 loader 来压缩和优化这些文件。

6. **减少使用大型库**：如果可能，避免使用体积大的第三方库，或者寻找更轻量级的替代品。

7. **配置 optimization.splitChunks**：利用 Webpack 的`splitChunks`来提取公共模块，这样用户在加载新页面时不需要重新下载公共代码。

8. **移除未使用的 CSS**：使用`purgecss-webpack-plugin`来自动移除未使用的 CSS，减少 CSS 体积。

9. **设置 production 模式**：在生产模式下，Webpack 会自动进行很多优化，包括压缩代码、模块合并等。

10. **使用更小的 npm 模块**：有时候一个大型模块只是使用了其中的一小部分功能，可以寻找提供同样功能但体积更小的模块。

11. **分析和监测包大小**：使用如`webpack-bundle-analyzer`这样的工具来可视化和优化你的代码包。了解哪些模块或库在增加体积能帮助你进行更针对性的优化。

12. **移除调试代码和注释**：确保在生产环境构建中移除源码中的所有调试代码、console 语句和注释。

13. **使用 ES6 模块**：使用 ES6 模块而不是 CommonJS 模块，因为前者更容易进行 Tree Shaking。

这些方法可以单独使用，也可以结合使用，以达到显著减小 Webpack 打包体积的效果。重要的是要持续评估你的打包过程，并在开发过程中就积极采取措施来控制和优化代码体积。

## sideEffects 案例

sideEffects 是用于标识我们的 ES 模块是否有副作用，从而提供更大的压缩空间。目前大部分的打包工具（比如 Webpack）都识别某个模块的 package.json 中的 sideEffects 字段来确定是否需要把有副作用的代码打包进去。sideEffects 默认值是 true。

你可以在 sideEffects 中指定对应的文件

```json
{
  "sideEffects": ["./esm/Input/index.js", "*.css", "*.less"]
}
```

如果你的项目中有一些模块实际上是有副作用的，比如 CSS 或者其他资产文件（assets）（通常使用诸如 import './styles.css' 这样的语句来引入），设置 "sideEffects": false 可能会导致这些模块在打包过程中被错误地剔除，因为打包工具认为它们没有被使用。这就可能导致在打包后的应用程序中出现样式丢失或错乱。

## Tree shaking

Tree shaking 的作用：消除无用的 JS 代码，减少代码体积

项目中只使用了 targetType 方法，但未使用 deepClone 方法，项目打包后，deepClone 方法不会被打包到项目里

依赖于 ES6 的模块特性，ES6 模块依赖关系是确定的，和运行时的状态无关，可以进行可靠的静态分析，这就是 tree-shaking 的基础
静态分析就是不需要执行代码，就可以从字面量上对代码进行分析。ES6 之前的模块化，比如 CommonJS 是动态加载，只有执行后才知道引用的什么模块，
就不能通过静态分析去做优化，正是基于这个基础上，才使得 tree-shaking 成为可能

## tree-shaking 只对使用 export 导出的变量生效

同样的，项目中只使用了 targetType 方法，未使用 deepClone 方法，项目打包后，deepClone 方法还是被打包到项目里

```js
// util.js
export function targetType(target) {
  return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
}
export function deepClone(target) {
  return JSON.parse(JSON.stringify(target));
}

// Tree shaking 并不是万能的

// util.js
export default {
  targetType(target) {
    return Object.prototype.toString.call(target).slice(8, -1).toLowerCase();
  },
  deepClone(target) {
    return JSON.parse(JSON.stringify(target));
  },
};

// 引入并使用
import util from '../util';
util.targetType(null);
```
