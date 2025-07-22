---
nav: Node
group: NPM
toc: content
mobile: false
title: package.json 与 package-lock.json 的关系
---

## package.json 与 package-lock.json 的关系

package-lock.json 是在 `npm(^5.x.x.x)后才有的`

package-lock.json 它会在 npm 更改 node_modules 目录树 或者 package.json 时自动生成的 ，它准确的描述了当前项目 npm 包的依赖树，并且在随后的安装中会根据 package-lock.json 来安装，保证是相同的一个依赖树，不考虑这个过程中是否有某个依赖有小版本的更新

package-lock.json 会锁定整个依赖树的所有层级。

它的产生就是来对整个依赖树进行版本固定的（锁死）

当我们在一个项目中 npm install 时候，会自动生成一个 package-lock.json 文件，和 package.json 在同一级目录下。
package-lock.json 记录了项目的一些信息和所依赖的模块。这样在每次安装都会出现相同的结果. 不管你在什么机器上面或什么时候安装
当我们下次再 npm install 时候，npm 发现如果项目中有 package-lock.json 文件，会根据 package-lock.json 里的内容来处理和安装依赖而不再根据 package.json

### 注意  
使用 cnpm install 时候，并不会生成 package-lock.json 文件，也不会根据 package-lock.json 来安装依赖包，还是会使用 package.json 来安装。<br/>
### package-lock.json 可能被意外更改的原因<br/>
1、package.json 文件修改了<br/>
2、挪动了包的位置：将部分包的位置从 dependencies 移动到 devDependencies 这种操作，虽然包未变，但是也会影响 package-lock.json<br/>

 ### packjson 中依赖包版本的前缀作用

`* ^ ~`的区别

```bash
~ 会匹配最近的小版本依赖包，比如~1.2.3会匹配所有1.2.x版本，但是不包括1.3.0
^ 会匹配最新的大版本依赖包，比如^1.2.3会匹配所有1.x.x的包，包括1.3.0，但是不包括2.0.0
* 安装最新版本的依赖包，比如 *1.2.3 会匹配 x.x.x


 1.0.0 是⼤于 1.0.0-<xxx>

  ^0.0.3-beta.2 代表 >= 0.0.3-beta.2 < 0.0.4-0
```

限制模块只能在某种架构的 cpu 下运行
"cpu" : [ "x64", "ia32" ]

可以指定你的模块只能在哪个操作系统上运行
"os" : [ "darwin", "linux", "win32" ]

engines 字段指明了该模块运行的平台，比如 Node 或者 npm 的某个版本或者浏览器。
{ "engines" : { "node" : ">=0.10.3 <0.12", "npm" : "~1.0.20" } }

需要注意，engines 只是起一个说明的作用，即使用户安装的版本不符合要求，也不影响依赖包的安装。

### package.json版本号规则

major.minor.patch  

主版本号.次版本号.修补版本号(major.minor.patch)  

major：新的架构调整，不兼容老版本  
minor：新增功能，兼容老版本  
patch：修复bug，兼容老版本  

