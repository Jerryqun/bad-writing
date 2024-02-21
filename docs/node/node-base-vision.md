---
nav: Node
group: 基础
toc: content
mobile: false
title: node版本管理
---

## node 版本管理

安装 cnpm

```bash
npm install -g cnpm -registry=https://registry.npm.taobao.org
```

### 方式一：n

node 有一个模块 n，是专门用来管理 node.js 的版本的。

1、全局安装 n 模块
npm install -g n

2、升级 node.js 到最新稳定版
sudo n stable

3、安装指定版本
sudo n vxx.xx.xx

4、安装最新版本
sudo n lastest

5、选取已安装的版本
sudo n
然后上下键盘选择并回车确认。

6、删除某个版本
sudo n rm xx.xx.x

7、指定版本来运行脚本
n use xx.xx.xx a.js

### 方式一：nvm

https://github.com/nvm-sh/nvm

安装

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash
