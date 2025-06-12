---
nav: Node
group: NPM
toc: content
mobile: false
title: npmignore
---

## npmignore

`.npmignore` 文件的作用是告诉 npm 在发布一个包到 npm 注册中心时，哪些文件和目录应该被排除。它的作用类似于 `.gitignore` 文件，但用途不同，因为 `.npmignore` 用于控制 npm 包的内容，而不是 Git。

### 何时使用 `.npmignore`

当你准备发布一个 npm 包，但不希望将某些文件（例如测试文件、文档、工具、配置文件等）包含在包中时，可以使用 `.npmignore` 文件来排除这些文件。这是至关重要的，因为包括不必要的文件会增加包的大小，并且可能泄露敏感信息或不相关的内容。

### 工作机制

当你在项目中创建一个 `.npmignore` 文件并将其添加到项目根目录时，npm 在发布包时会查找该文件，并根据其内容排除相应的文件和目录。

#### 举例说明

假设你的项目结构如下：

```
my-package/
├── src/
│   └── index.js
├── test/
│   └── test.js
├── README.md
├── package.json
└── .npmignore
```

你可以在 `.npmignore` 文件中指定要排除的文件和文件夹：

```plaintext
test/
*.log
.gitignore
```

在这个例子中，`test/` 目录和任何以 `.log` 结尾的文件，包括 `.gitignore`，都将被排除在发布包之外。

### 替代方案：使用 `files` 字段

如果你更愿意显式地指定要包含的文件，而不是通过排除来控制发布的内容，你可以在你的 `package.json` 文件中使用 `files` 字段。例如：

```json
{
  "name": "my-package",
  "version": "1.0.0",
  "files": [
    "src/",
    "README.md"
  ]
}
```

在这个例子中，只有 `src/` 目录和 `README.md` 文件会被包含在发布包中。

### 注意事项

- 如果同时存在 `.npmignore` 文件和 `files` 字段，npm 将优先使用 `.npmignore` 文件中的配置。
- 如果没有 `.npmignore` 文件，npm 将包含所有文件，除了那些在 `.gitignore` 中指定的文件。

### 总结

`.npmignore` 文件是一个非常有用的工具，可以帮助开发人员控制发布到 npm 注册中心的包内容。通过适当配置 `.npmignore` 文件，你可以确保你的包不会包含不必要的文件，从而减小包的大小和提高安全性。当想要明确控制要包含或排除的文件时，可以与 `files` 字段结合使用。


