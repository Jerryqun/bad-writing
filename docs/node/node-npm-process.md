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

## devDependencies 和 dependencies 的区别

项目打包跟 devDependencies 这个字段并没什么关系。只要是项目中用到的依赖（且安装到 node_modules 中），不管这个依赖是放在 devDependencies 还是放在 dependencies ，都会被打包工具解析、构建，最后都打进 dist 产物中。

devDependencies 和 dependencies 的区别核心体现在 npm 包 中。只要开发的项目是发 npm 包提供给外部、其他业务项目使用的，需要非常注意依赖的安装地方，因为搞不好很容易在业务使用中会出现 bug。而如果只是自己项目用，不需要发 npm 包的话，把依赖安装到 devDependencies 或者 dependencies 中，实质上是没有任何区别的。

为什么在开发 npm 包 的时候 不严格区分 devDependencies 、 dependencies 进行装包可能会导致业务项目的使用中出现 bug 呢？笔者举一个例子来加深理解：

假设 npm 包开发者不小心把 vue3 的依赖写到了 dependencies 中（用于开发调试的），版本是 3.0.36。

业务项目自身用了 vue@3.0.0 的情况下，安装了这个 npm 包 ，由于 npm 包 中的 dependencies 有 vue@3.0.36 这个依赖，此时会在装 npm 包 的同时安装 36 版本的 vue。

由于 npm 包中会用到 vue，代码是这样引入的：import { onMount } from 'vue'，此时，npm 包会在自己内部的 node_modules 中找到 vue@3.0.36 的包并使用，此时就会产生 2 个 vue3 实例，就很容易出现一些奇怪的 bug。（业务项目的vue@3.0.0 和 npm 包的vue@3.0.36）

这里还要注意一点就是 externals 。有同学可能会说，npm 包打包的时候会 externals 掉第三方的库，比如上述中的 vue3 ，externals 只是保证 vue3 的代码不打包进 npm 包 的代码中而已

当你安装一个 npm 包时，通常只会安装其列在 dependencies 中的包，这些是该包运行时所必须的依赖。而 devDependencies 列出的依赖项仅用于该包的开发过程，比如写代码时的测试、构建或者文档生成等，因此在安装时不会自动安装 devDependencies 中的包。

换句话说，当你执行 npm install <package-name> 或者在你的项目中通过 package.json 添加一个包并运行 npm install 时，只会安装该包的 dependencies，不会安装其 devDependencies。
