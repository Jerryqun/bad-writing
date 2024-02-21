---
nav: Node
group: NPM
toc: content
mobile: false
title: 检查package.json中包的更新
---

## 检查 package.json 中包的更新

https://www.npmjs.com/package/npm-check-updates

### 安装

```bash
sudo npm install -g npm-check-updates
```

### 使用

检查当前目录下 package.json 文件包更新情况（不包含 peerDependencies 中的依赖）<br/>

```bash
ncu
```
