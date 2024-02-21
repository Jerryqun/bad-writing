---
nav: Node
group: NPM
toc: content
mobile: false
title: npm模块安装机制
---

## npm 模块安装机制

1、发出 npm install 命令后查询 node_modules 目录之中是否已经存在指定模块,若存在，不再重新安装,若不存在 npm 向 registry 查询模块压缩包的网址<br/>
2、下载压缩包，存放在根目录下的.npm 目录里<br/>
3、解压压缩包到当前项目的 node_modules 目录<br/>
