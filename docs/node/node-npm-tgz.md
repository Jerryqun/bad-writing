---
nav: Node
group: NPM
toc: content
mobile: false
title: tgz
---

## 通过 tgz 私有化部署

### 生成

```sh
npm pack
```

### 使用

安装`.tgz`文件，它通常是一个通过`npm pack`打包的 Node.js 模块，可以直接使用 npm 安装。下面是安装 tgz 包的步骤：

1. **通过本地路径安装：**
   如果你的`.tgz`文件在本地，可以直接使用 npm 命令指向该文件进行安装：

```sh
npm install /path/to/your-package.tgz
```

替换`/path/to/your-package.tgz`为你的`.tgz`文件的真实路径。

2. **通过 URL 安装：**
   如果`.tgz`文件托管在服务器上，你同样可以通过其 URL 安装包：

   ```sh
   npm install http://example.com/path/to/your-package.tgz
   ```

   替换`http://example.com/path/to/your-package.tgz`为你的文件真实的 URL。

3. **在`package.json`中指定依赖：**
   你还可以在项目的`package.json`文件中直接添加 tgz 文件作为依赖项：

   ```json
   "dependencies": {
     "your-package-name": "file:/path/to/your-package.tgz"
   }
   ```

   `/ 是绝对路径`  
   `./ 是相对路径`  
    如项目中，根目录有lib文件夹，文件夹下面有tgz文件，package.json中引用为    
    "your-package-name": "file:./lib/your-package.tgz"

   或者使用 URL：

   ```json
   "dependencies": {
     "your-package-name": "http://example.com/path/to/your-package.tgz"
   }
   ```

   然后运行`npm install`安装所有的依赖项，包括你的`.tgz`包。

注意，如果你在使用私有或内部网络上的 URL，确保机器拥有适当的网络权限去访问这个 URL。

在安装完成后，包中所有的文件和依赖都会被展开到`node_modules`目录下，与从 npm 仓库直接安装包的结果一样，并且它会在`package-lock.json`文件中留下记录。
