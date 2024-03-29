---
nav: Node
group: NPM
toc: content
mobile: false
title: 常用命令
---

## 常用命令

```bash
npm init 初始化项目

npm install -D = npm install --save-dev

npm install -S = npm install --save

npm info xxx 查看包的详细信息


# npm-run-all

--parallel: 并行运行多个命令，例如：npm-run-all --parallel lint build
--serial: 多个命令按排列顺序执行，例如：npm-run-all --serial clean lint build:**
--continue-on-error: 是否忽略错误，添加此参数 npm-run-all 会自动退出出错的命令，继续运行正常的
--race: 添加此参数之后，只要有一个命令运行出错，那么 npm-run-all 就会结束掉全部的命令

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "npx nodemon --watch src server_build/bundle.js",
    "build:server": "npx webpack build --config ./webpack.server.js --watch",
    "build:client": "npx webpack build --config ./webpack.client.js --watch",
    "dev": "npx npm-run-all --parallel build:server build:client start"
  },

上述dev 并行运行前三个命令 start build:server build:client

```

## eslint 初始化

```bash
npm install eslint eslint-plugin-react @typescript-eslint/eslint-plugin @typescript-eslint/parser  --save-dev
```

然后我们用执行 npx eslint --init

依据提示选择

## npm 全局安装

在 macOS 系统上，使用 npm 全局安装的包通常位于以下目录

```bash
/usr/local/lib/node_modules
```

要检查你的系统中 npm 全局包的确切位置，你可以在命令行中运行以下命令

输出后拼接上 /lib/node_modules

```bash
npm config get prefix

```

或

```bash
npm list -g --depth 0
```
