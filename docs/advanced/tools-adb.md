---
nav: 高阶技术
group:
  title: 前端工具
  order: 2
toc: content
mobile: false
title: ADB
---

## ADB 安卓开发工具

在 macOS 上配置 ADB（Android Debug Bridge）的环境变量，可以按照以下步骤进行：

### 1. 安装 ADB

#### 通过 Homebrew 安装（推荐）

如果您已经安装了 Homebrew，可以很方便地通过它来安装 ADB：

1. **打开终端**（Terminal）。
2. **安装 Android SDK Platform Tools**：

   ```bash
   brew install --cask android-platform-tools
   ```

#### 手动下载

如果你不想使用 Homebrew，可以手动下载 Android SDK Platform Tools：

1. 访问 [Android 开发者官方网站](https://developer.android.com/studio/releases/platform-tools) 下载 ZIP 文件。
2. 解压缩 ZIP 文件，将其放置在您希望的位置，例如 `~/Library/Android/sdk/platform-tools`。

### 2. 配置环境变量

无论是通过 Homebrew 还是手动下载，您都需要确保 ADB 的路径在您的环境变量中。以下是配置步骤：

1. **打开终端**（Terminal）。

2. **确定 ADB 的路径**：
   - 如果使用 Homebrew，ADB 通常在 `/usr/local/bin/adb` 路径下。
   - 如果手动下载，ADB 通常在 `~/Library/Android/sdk/platform-tools`，请根据具体位置调整。

3. **编辑 Shell 配置文件**：
   根据您使用的 Shell 类型编辑相应的配置文件。macOS Catalina 及更新版本默认使用 zsh；如果您使用的是 bash，您需要编辑 `.bash_profile` 或 `.bashrc`。

   - 对于 zsh：

   ```bash
   nano ~/.zshrc
   ```

   - 对于 bash：

   ```bash
   nano ~/.bash_profile
   ```

4. **添加 ADB 路径到 PATH 变量**：
   在配置文件中加入以下行（根据路径调整）：

   如果使用 Homebrew：

   ```bash
   export PATH="$PATH:/usr/local/bin"
   ```

   如果手动下载（根据您放置的路径）：

   ```bash
   export PATH="$PATH:$HOME/Library/Android/sdk/platform-tools"
   ```

5. **保存并退出**：
   在 nano 中，使用 `Ctrl + X`，然后按 `Y` 确认保存，最后按 `Enter` 退出。

6. **使更改生效**：
   运行以下命令以应用您的更改：

   - 对于 zsh：

   ```bash
   source ~/.zshrc
   ```

   - 对于 bash：

   ```bash
   source ~/.bash_profile
   ```

### 3. 验证 ADB 安装

在终端中输入以下命令，检查是否能正常识别 ADB：

```bash
adb version
```

如果您看到 ADB 的版本信息，那么您的环境变量配置成功，您就可以开始使用 ADB 与 Android 设备进行交互了！

### 4. 基本使用命令

ADB（Android Debug Bridge）是 Android 软件开发工具包（SDK）中的一个命令行工具，它允许开发者与 Android 设备进行通信和管理。ADB 主要用于开发、调试和测试 Android 应用程序，具有多种功能，具体如下：

1. **应用程序管理**：
   - 安装、卸载应用程序。
   - 访问和管理应用程序的文件和数据。

2. **设备管理**：
   - 列出连接的 Android 设备及其状态。
   - 远程控制和管理设备。

3. **调试**：
   - 输出设备日志（Logcat），帮助开发者调试应用。
   - 通过 shell 命令直接与设备交互，进行实时调试和执行命令。

4. **文件传输**：
   - 在计算机和 Android 设备间传输文件，使用 `adb push` 和 `adb pull` 命令。

5. **启动特定活动**：
   - 通过 ADB 启动特定的应用程序组件，比如 Activity 或 Service。

6. **监控设备状态**：
   - 检查设备的状态信息，如电池状态、存储使用情况等。

### 使用 ADB 的前提条件：

- **开发者选项**：`确保 Android 设备已启用开发者选项和 USB 调试功能`。
- **连接方式**：`将 Android 设备通过 USB 数据线连接到计算机，或者通过 Wi-Fi 进行无线调试（必须首先通过 USB 进行授权）`。

### 常见命令示例：

- 列出连接的设备：
  ```bash
  adb devices
  ```

- 安装应用：
  ```bash
  adb install path/to/your/app.apk
  ```

- 卸载应用：
  ```bash
  adb uninstall package.name
  ```

- 拉取文件到计算机：
  ```bash
  adb pull /sdcard/path/to/file /local/path
  ```

- 推送文件到设备：
  ```bash
  adb push /local/path /sdcard/path/to/file
  ```

- 查看设备日志：
  ```bash
  adb logcat
  ```


