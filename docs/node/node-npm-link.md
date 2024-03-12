---
nav: Node
group: NPM
toc: content
mobile: false
title: npm link
---

## npm link

`npm link` 是一个非常有用的 npm 命令，允许开发者在本地开发和测试 Node.js 模块时，将模块链接到本地的其他项目中，而不需要将模块发布到 npm 仓库。这样可以在模块开发过程中即时反映出任何变更，从而提高开发效率。

### 基本用法

假设你有两个项目：`library`（你正在开发的库）和 `app`（你想使用该库的应用）。

1. 首先，导航到你的库（`library`）的根目录，然后运行以下命令：

```bash
cd path/to/library
npm link
```

这会在全局 `npm` 链接目录中创建一个符号链接（一个指向 `library` 项目的路径）。

2. 接下来，导航到你的应用（`app`）的根目录，并运行：

```bash
cd path/to/app
npm link library-name
```

这里的 `library-name` 是你的库在 `package.json` 中定义的名字。这个命令会在你的应用的 `node_modules` 目录中创建一个符号链接，该符号链接指向全局 `npm` 链接目录中的 `library` 符号链接。

### 取消链接

如果你想要取消链接，你需要执行反向操作：

1. 首先，在你的应用（`app`）目录中运行以下命令，以删除对库的链接：

```bash
cd path/to/app
npm unlink library-name
```

2. 然后，在你的库（`library`）目录中运行以下命令，以从全局 `npm` 目录中删除链接：

```bash
cd path/to/library
npm unlink
```

这将删除全局 `npm` 链接目录中的符号链接。

### 注意事项

- 使用 `npm link` 时，需要记住链接是在全局目录中的，因此在不同项目之间使用相同的依赖时可能会导致冲突。
- 因为符号链接指向源代码，所以在源代码更改时，应用中的代码也会立即反映这些更改。
- 链接的模块在全局 `node_modules` 目录下，所以如果全局环境中的 Node.js 版本不同，可能会有潜在的版本兼容问题。
- 一定要记得在发布应用之前取消所有的 `npm link` 链接，以确保应用依赖于真正的 npm 包，而非链接。

`npm link` 是一个强大的工具，可以在本地开发期间大幅简化模块间的依赖管理。不过，它更适合开发和测试阶段，而非生产阶段。在开发完成后，依赖最好通过 npm 发布和正常的 `npm install` 进程来管理。
