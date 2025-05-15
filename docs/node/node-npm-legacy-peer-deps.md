---
nav: Node
group: NPM
toc: content
mobile: false
title: legacy-peer-deps
---

# legacy-peer-deps

`legacy-peer-deps` 是 `npm` 7 及更高版本中的一个配置选项，主要用于如何处理 `peerDependencies`（同伴依赖）的问题。在 npm 7 中，处理 `peerDependencies` 的方式与 npm 6 有显著不同。

### 背景

- **npm 7 的行为**:

  - 在 npm 7 中，`peerDependencies` 会被默认安装。如果 `peerDependencies` 的版本冲突，这会导致安装失败。
  - 这种行为旨在确保包的依赖关系能够一致，而不会因为缺少同伴依赖或版本不符合而导致潜在问题。

- **legacy-peer-deps**:
  - 设置 `legacy-peer-deps` 为 `true` 时，npm 将恢复 npm 6 的行为，不会因为 `peerDependencies` 的冲突导致安装失败。
  - 具体来说，当在 `package.json` 中某个 `peerDependencies` 因不满足版本限制而造成冲突时，安装过程继续进行而不会抛出错误。

### 使用方法

你可以通过命令行选项或者配置文件设置 `legacy-peer-deps`。

1. **在命令行中使用**:
   在安装包时临时使用 `--legacy-peer-deps` 选项。

   ```bash
   npm install <package-name> --legacy-peer-deps
   ```

2. **在 `.npmrc` 文件中设置**:
   如果希望在项目中始终使用该选项，可以在项目根目录中的 `.npmrc` 配置文件中设置。

   ```plaintext
   legacy-peer-deps=true
   ```

### 注意事项

- **兼容性**:
  - 使用 `legacy-peer-deps` 可能会导致同伴依赖不符合某些包的预期，这可能带来潜在的兼容性问题。
- **建议**:
  - 仅在必要时使用该选项，即在详细确认无兼容问题的情况下使用。确保定期检查并解决潜在的依赖冲突，以便在将来摆脱此设置。
- **诊断**:
  - 如果安装过程中因为 `peerDependencies` 出现了问题，可以尝试用 `--legacy-peer-deps` 确保安装成功，但之后应该检查并调整依赖关系，以确保项目的稳定性。

借助 `legacy-peer-deps`，管理员可以在过渡到更严格的 `peerDependencies` 处理期间保持开发工作流程的流畅性。
