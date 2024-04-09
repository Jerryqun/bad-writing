---
nav: Node
group: NPM
toc: content
mobile: false
title: npm ci
---

## npm ci

`npm ci` 是 npm 的一个命令，`ci` 代表 "clean install"。这个命令提供了一个快速、可靠、不涉及用户交互且更严格的方式来安装 npm 项目的依赖项。主要功能和特性包括：

1. **根据 `package-lock.json` 或 `npm-shrinkwrap.json` 确切安装依赖**：`npm ci` 会忽略 `package.json` 中定义的依赖项版本，而是完全根据 lock 文件中的信息来安装依赖。这意味着它会安装 lock 文件锁定的确切版本，从而保证所有依赖项的版本在所有环境中都是一致的。

2. **更快的安装速度**：由于 `npm ci` 不需要依赖解析或 lock 文件的生成，所以通常比 `npm install` 快。它更适合自动化的环境，比如持续集成/持续部署 (CI/CD) 管道。

3. **清理 `node_modules` 目录**：在安装之前，`npm ci` 会自动删除现有的 `node_modules` 目录，确保没有现存、可能会干扰依赖项解析的偶然残余文件。

4. **锁定文件的一致性检查**：如果项目中的 `package-lock.json` 或 `npm-shrinkwrap.json` 与 `package.json` 的依赖项描述不匹配，`npm ci` 会失败，以此保证锁定文件的准确性。

5. **不会修改锁定文件**：执行 `npm ci` 不会更改 `package-lock.json` 或 `npm-shrinkwrap.json`。如果有必要更新依赖或 lock 文件，需要运行 `npm install`。

6. **确定性的依赖树**：它保证了不管在何地多次运行 `npm ci`，安装生成的依赖树结构都是相同的（如果 lock 文件没有变化的话）。

作用：

- 在 CI/CD 环境中快速、一致地安装项目依赖。
- 在要求精确复现你的应用或依赖树的情况下，例如在生产或测试环境中。
- 在确认或排除由依赖项引起的问题时提供一个干净的基线。

`npm ci` 是构建和部署流程中可靠的工具，它提高了构建的一致性和可重复性，也节省了时间和减少了因版本不一致带来的问题。
