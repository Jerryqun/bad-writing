---
nav: Node
group: NPM
toc: content
mobile: false
title: pnpm、yarn 的基本安装和使用、查看与修改镜像源
---

## pnpm、yarn 的基本安装和使用、查看与修改镜像源

### pnpm

```bash
# npm 安装 pnpm
npm install -g pnpm
# 查看是否安装成功
pnpm -v
# 创建一个 package.json 文件
pnpm init
# 安装软件包及其依赖的任何软件包(如果 workspace 有配置会优先从 workspace 安装)
pnpm add <pkg>
# 安装项目所有依赖
pnpm install
# 更新软件包的最新版本
pnpm update
# 移除项目依赖
pnpm remove
# 运行脚本
pnpm run
# 以一个树形结构输出所有的已安装 package 的版本及其依赖
pnpm list

# 查看当前镜像
pnpm config get registry

# 设为淘宝镜像
淘宝镜像源一（推荐）
pnpm config set registry https://registry.npmmirror.com/
淘宝镜像源二
pnpm config set registry http://registry.npm.taobao.org/
设为官方默认镜像
pnpm config set registry https://registry.npmjs.org
```

## yarn

```bash
npm 安装 yarn
npm install -g yarn

npm 卸载 yarn
npm uninstall -g yarn

# 查看是否安装/卸载成功
yarn -v

# 初始化项目

yarn init

# 装包

yarn add packagename
yarn add packagename --dev

# 更新包

yarn upgrade packagename

# 删除包

yarn remove packagename

# 安装所有包

yarn
yarn install

# 发布包

yarn publish

# 查看包的缓存列表

yarn cache list

# 全局安装包 == npm -g

yarn global

设置为淘宝镜像
淘宝镜像源一（推荐）

yarn config set registry https://registry.npmmirror.com/
淘宝镜像源二

yarn config set registry http://registry.npm.taobao.org/
设置为官方默认镜像
yarn config set registry https://registry.yarnpkg.com/
```

## pnpm 对比 npm/yarn 的优点

https://fe.ecool.fun/topic/b6d72acf-0360-4fc1-8835-6a6f8a3a4025?orderBy=updateTime&order=desc&tagId=0s

1、更快速的依赖下载（跨项目共用包，节省了下载时间）<br/>
2、更高效的利用磁盘空间（跨项目共用包，节省了空间）<br/>
3、更优秀的依赖管理<br/>

npm2 是通过嵌套的方式管理 node_modules 的，会有同样的依赖复制多次的问题。<br>
npm3+ 和 yarn 是通过铺平的扁平化的方式来管理 node_modules，解决了嵌套方式的部分问题，但是引入了幽灵依赖的问题，并且同名的包只会提升一个版本的，其余的版本依然会复制多次。<br>

pnpm 则是用了另一种方式，不再是复制了，而是都从全局 store 硬连接到 node_modules/.pnpm，然后之间通过软链接来组织依赖关系。

这样不但节省磁盘空间，也没有幽灵依赖问题，安装速度还快，从机制上来说完胜 npm 和 yarn。

pnpm 就是凭借这个对 npm 和 yarn 降维打击的。

## 什么是幽灵依赖

比如我装个 a 包，我居然就能用 b。为什么？因为 a 依赖 b，然后 b 被装在 node_modules 最外层，根据 nodejs 找包的机制，我们就能用这个 b 库。
如果 a 更新后不再依赖 b，b 就不会被安装，而我们的项目刚好用到它，那就找不到然后报错了。
