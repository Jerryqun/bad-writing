---
nav: Node
group: webpack
toc: content
mobile: false
title: 安装
---

## 安装

在 webpack 3 中，webpack 本身和它的 CLI 以前都是在同一个包中，但在第 4 版中，他们已经将两者分开来更好地管理它们

```bash
sudo npm install webapck webpack-cli -g
```

## 包管理器解析共同依赖的一般规则

当在使用 webpack（或任何 Node.js 应用程序）安装依赖包时，包管理器（如 npm、yarn）会根据项目的 `package.json` 文件和包的 `package-lock.json`（对于 npm）或 `yarn.lock`（对于 yarn）文件来解析依赖关系和共同依赖（也称为嵌套依赖）。

以下是包管理器解析共同依赖的一般规则：

1. **版本兼容性：** 如果宿主环境的依赖包和另一个依赖包都依赖于第三个包，但要求的版本范围是兼容的（例如，都兼容 `^1.0.0`），包管理器通常会尝试安装满足所有相关依赖的单个版本，以避免重复，并将其放置在 `node_modules` 的顶层目录。

2. **版本冲突：** 如果宿主环境和一个依赖包要求不同版本的同一个共同依赖包，且这些版本不兼容（例如，宿主需要 `^1.0.0`，而依赖包需要 `^2.0.0`），包管理器通常会为它们安装各自兼容的版本。宿主环境的版本将位于 `node_modules` 的顶层，而依赖包的版本将位于其自己的 `node_modules` 子目录下。

3. **锁定文件（`package-lock.json` 或 `yarn.lock`）：** 当存在锁定文件时，包管理器会优先使用这些文件中指定的确切版本，以确保在不同安装之间获得一致的依赖树。

4. **`peerDependencies`：** 有些包可能声明 `peerDependencies`，这意味着它们期望宿主环境提供兼容的依赖版本。这类依赖不会自动安装，而是由宿主项目的开发者显式管理。

5. **`resolutions` 字段（对于 yarn）：** 在某些情况下，你可能想要覆盖指定依赖的版本，即使它是一个共同依赖。Yarn 支持在 `package.json` 中使用 `resolutions` 字段来实现这一点。
