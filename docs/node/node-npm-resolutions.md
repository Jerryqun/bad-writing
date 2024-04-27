---
nav: Node
group: NPM
toc: content
mobile: false
title: resolutions
---

## resolutions

<a target="_blank" href="https://github.com/yarnpkg/rfcs/blob/master/implemented/0000-selective-versions-resolutions.md
">参考</a><br/>
通过 package.json 文件的 resolutions 字段选择嵌套的依赖版本 只对 dependencies 里面的包生效

## resolutions 和 overrides 的区别

`resolutions` 和 `overrides` 都是现代 JavaScript 项目管理中用于解决依赖冲突、强制使用特定版本的依赖项或修复安全漏洞而不需要等待上游依赖更新的字段。它们在不同的包管理工具中被实现，并有细微的区别：

### `resolutions`

`resolutions` 最早由 Yarn 包管理器引入。该字段允许开发者指定依赖树中特定包的版本，通常用来快速解决依赖的安全问题或版本冲突。通过在项目的 `package.json` 文件中添加 `resolutions` 字段，可以强制所有依赖项直接或间接使用被指定的包版本。

```json
{
  "resolutions": {
    "some-package": "1.2.3",
    "another-package/sub-package": "2.3.4"
  }
}
```

在这个例子中，无论项目依赖树的哪一层需要 `some-package`，都将使用版本 `1.2.3`。`another-package/sub-package` 指定了一个嵌套依赖的版本。

### `overrides`

`overrides` 由 npm 在版本 8.3.0 中引入，功能上类似于 Yarn 的 `resolutions`，但设计得更为通用和灵活。该字段允许开发者覆盖依赖包的特定版本、添加或删除依赖、或者修改依赖的子依赖。通过在 `package.json` 文件中添加 `overrides` 字段，开发者可以精细地控制项目的依赖版本和结构。

```json
{
  "overrides": {
    "some-package": "1.2.3",
    "another-package > sub-package": "2.3.4",
    "yet-another-package": {
      "an-additional-dependency": "^5.6.7"
    }
  }
}
```

在这个例子中，`some-package` 的行为类似于 `resolutions`，强制使用 `1.2.3` 版本。`another-package > sub-package` 指定了一种更精确的依赖重写方式，只修改 `another-package` 的 `sub-package` 依赖。同时，`yet-another-package` 示范了如何添加或修改子依赖项。

### 区别总结：

- **兼容性**：`resolutions` 主要由 Yarn 支持，虽然一些 npm 的版本也尝试实现了这一功能。而 `overrides` 是 npm 官方支持的特性。
- **灵活性**：`overrides` 提供了更灵活的语法，允许更精确地控制依赖及其子依赖，甚至允许添加或删除特定依赖。
- **目的**：两者都旨在允许开发者对依赖项版本进行更细粒度的控制，尽管具体实现和支持的工具存在差异。
