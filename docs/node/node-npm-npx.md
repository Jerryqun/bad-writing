---
nav: Node
group: NPM
toc: content
mobile: false
title: npx与npm的区别
---

## npx 与 npm 的区别

https://juejin.cn/post/6844903945664462855

### 1、 一个永久存在，一个临时安装，用完后删除

例子：用创建一个 react 项目的对比

npm 创建  
npm install -g create-react-app  
create-react-app test-app

npx 创建  
npx create-react-app test-app

npm 他会在本地全局性的安装 create-react-app，这个包会存储在 node 目录下面去。以后创建 react 项目直接执行 create-react-app 命令就可以了。

npx 命令他会把 create-react-app 安装包临时安装上，等项目初始化完成以后，他就删除掉。

### 2、 npx 会帮你执行依赖包里的二进制文件。

例子：执行 webpack 里面的文件  
npm 执行  
npm i -D webpack ./node_modules/.bin/webpack -v  
结果是：6.9.0

或者执行
npm i -D webpack`npm bin`/webpack -v

npx 执行
npm i -D webpack
npx webpack -v
也就是说 npx 会自动查找当前依赖包中的可执行文件，如果找不到，就会去环境变量里面的 PATH 里找。如果依然找不到，就会帮你安装！

主要特点：<br/>
1、临时安装可执行依赖包，不用全局安装，不用担心长期的污染。<br/>
2、可以执行依赖包中的命令，安装完成自动运行。<br/>
3、自动加载 node_modules 中依赖包，不用指定$PATH。<br/>
4、可以指定 node 版本、命令的版本，解决了不同项目使用不同版本的命令的问题。<br/>
