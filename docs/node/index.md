---
nav: Node
group: webpack
toc: content
mobile: false
title: 日常经验
---

# webpack 构建出现内存溢出

Webpack 的构建过程中可能会因为各种原因导致内存溢出（OutOfMemoryError），这通常发生在大型项目或者配置不当时。以下是一些解决内存溢出问题的思路：

1. 增加 Node.js 的内存限制
   Node.js 默认的内存限制可能不足以应对复杂的构建任务。可以通过设置 `NODE_OPTIONS` 环境变量来增加内存限制，例如：

   ```sh
   NODE_OPTIONS="--max-old-space-size=4096" webpack
   ```

   这里设置了最大老生代内存（用于存放长期存活对象）为 4GB。根据你的系统资源，你可以适当调整这个值。

   项目是用案例 亲测

   ```json
   "scripts":
   {
    "start": "icejs start --mode local",
    "build:daily": "NODE_OPTIONS='--max-old-space-size=8112' && icejs build --mode daily",
    "build": "NODE_OPTIONS='--max-old-space-size=8112' && icejs build --mode prod"
   }
   ```

2. 检查 Webpack 配置

- 使用 `splitChunks` 优化代码分割，减少每个 chunk 的体积。
- 尽量减少使用大量和复杂的 loader 和 plugin，它们会增加内存消耗。
- 避免使用大量的 inline-source-map，改用更轻量级的 source map 选项，如 `cheap-module-source-map`。

3. 升级或优化依赖

- 升级到最新的 Webpack 版本，因为新版本可能有更好的优化和修复内存泄漏的问题。
- 升级其他相关依赖（如 Babel、TypeScript 等）到最新版本，以便获得性能改进和内存管理优化。

4. 分析内存使用情况

- 使用 `webpack-bundle-analyzer` 插件来查看每个 bundle 的大小，看是否有优化空间。
- 利用 Node.js 的内存分析工具（如 `heapdump`）来分析内存使用情况，查找可能的内存泄漏。

5. 优化项目结构

- 检查代码中是否有大量的模块或循环依赖，这可能增加构建时的计算复杂度。
- 精简资源文件尺寸，例如压缩图片和其他静态资产。

6. 使用缓存

- 使用 `cache-loader` 或者 `HardSourceWebpackPlugin` 来为模块提供缓存，减少构建时的计算量。
- 使用 Webpack 的持久化缓存功能，对于 Webpack 5 来说是内建特性。

7. 分批构建

- 如果可能，将应用拆分成多个较小的项目，分别进行构建。
- 对于大型库或应用，考虑使用微前端架构，实现更细粒度的代码拆分和加载。

8. 按需加载

- 使用代码分割（Code Splitting）和动态 `import()`，按需加载模块，减少初始加载的代码量。

9. 优化 CI/CD 环境

- 如果你在 CI/CD 环境中遇到构建内存溢出，可能需要优化构建机器的配置或者调整并发的构建任务数量。

在排查问题时，需要耐心调试和优化，因为内存溢出往往是多种因素共同导致的。逐步尝试上述建议，并监控内存使用情况，直到找到并解决问题为止。

```

```
