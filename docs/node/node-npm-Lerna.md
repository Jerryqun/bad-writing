---
nav: Node
group: NPM
toc: content
mobile: false
title: Lerna
---

## Lerna 多包管理工具

Lerna 是一个工具，它优化了在单个仓库中维护多个 package 的工作流（这种仓库称为 monorepo）。在使用 Lerna 的 monorepo 中，你可以将一个大型项目分割成多个小的、可以独立版本管理和发布的 package。Lerna 管理这些 package 之间的依赖关系，并且能够执行如安装依赖、链接互相依赖的 package、版本控制和发布等任务。

### 固定/锁定模式

在固定模式下，Lerna 会将 monorepo 中所有的 package 版本号统一管理。这意味着，无论是哪个 package 发生变更，Lerna 在发布时都会更新所有 package 的版本号，使它们保持一致。

当你运行发布命令时，Lerna 会提示你为所有变更的 package 选择一个新版本号。
这种模式适合于紧密耦合的 package 集合，其中任何单一的变化可能都需要其他 package 知晓。

### 独立模式

在独立模式下，每个 package 都可以独立地版本化和发布。当你发布时，Lerna 会询问你需要更新哪些 package 以及它们的新版本号。

这种模式更加灵活，因为它允许每个 package 根据其自身的变更频率进行更新。
对于那些由多个相对独立的 package 组成的 monorepo，独立模式可能更加合适。

无论哪种模式，Lerna 都会处理 package 之间的依赖链接。例如，如果你的 monorepo 中有两个相互依赖的 package，当你在本地进行开发时，Lerna 可以确保它们链接到彼此的本地版本，而不是链接到 npm 上的远程版本。这使得开发和测试变得更加容易。
