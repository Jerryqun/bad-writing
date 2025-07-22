---
nav: Node
group: 基础
toc: content
mobile: false
title: 随笔
---

## 在 node 中使用 esm 书写

Node 要求使用 ESM 的文件采用.mjs 后缀，只要文件中存在 import/export 命令就必须使用.mjs 后缀。若不希望修改文件后缀，可在 package.json 中指定 type 为 module。基于此，若其他文件使用 CJS，就需将其文件后缀改成.cjs。若在 package.json 中未指定 type 或指定 type 为 commonjs，则以.js 为后缀的文件会被解析为 CJS。

Node v13.2.0 才支持 esm

Node v13.2.0 对应 Npm v6.13.1。

配置

```json
{
  "type": "module",
  "engines": {
    "node": ">=13.2.0",
    "npm": ">=6.13.1"
  }
}
```

## cross-env

cross-env 用于在不同操作系统上统一设置环境变量。

```js
npm install cross-env --save-dev

"scripts": {
  "start": "cross-env NODE_ENV=development webpack serve",
  "build": "cross-env NODE_ENV=production webpack"
}
```

## dotenv

为了更方便地管理环境变量，特别是在开发环境中，可以使用 dotenv 插件将 .env 文件中的变量加载到 process.env 中。

```js
npm install dotenv --save

const path = require('path');
const webpack = require('webpack');
require('dotenv').config();

module.exports = {
  // 其他配置
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.API_URL': JSON.stringify(process.env.API_URL),
    })
  ]
};
```

## fs 读写 json 文件

```js
const fs = require('fs');
// 读 readFileSync
const config = JSON.parse(fs.readFileSync('./public/config.json'));

config.publishTime = new Date().getTime();
// 写 writeFileSync
fs.writeFileSync('./public/config.json', JSON.stringify(config));
```

## package.json 执行多个命令

一、 &
两个命令同步执行

二、 &&先执行 1 再执行 2

```json
{
  "scripts": {
    "electron:builder": "electron-builder",
    "build:for:electron": "cross-env ELECTRON=true vite build",
    "app:build": "yarn build:for:electron && yarn electron:builder"
  }
}
```

## node 获取 ip

```js
import ip from 'ip';
const host = ip.address();
console.log('host: ', host);
```

## 终端动画

<a target="_blank" href="https://www.npmjs.com/package/ora">参考</a>

```js
import ora from 'ora';

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';
}, 1000);
```

## 描文件目录

<a target="_blank" href="https://www.npmjs.com/package/glob">参考</a>

```js
import { glob } from 'glob';
import path from 'path';

const tsFiles = glob.sync(path.join(process.cwd(), `src/**/*.ts`));
console.log('tsFiles: ', tsFiles);
// tsFiles:  [
//     '/Users/cq/Desktop/ts/src/test.ts',
//     '/Users/cq/Desktop/ts/src/fdfdfd.ts'
//   ]
```

## 常用 api

```js
const cwd = process.cwd(); //用于获取 node.js 流程的当前工作目录。 cwd /Users/cq/Desktop/node

// __dirname与process.cwd()的区别
// __dirname 表示当前被执行脚本文件所在的目录的绝对路径 ——脚本文件所在目录
// process.cwd() 返回运行当前脚本的工作目录的路径 —— 脚本文件执行目录
```

## live-server 静态资源服务器

<a href="https://www.npmjs.com/package/live-server">参考</a>

```js
npm install -g live-server
live-server
```

## immer

<a href="https://zhuanlan.zhihu.com/p/146773995">参考</a>

```js
/**
 * immer 基本使用;
 */
import produce from 'immer';

// 这是我的源数据
const baseState = [
  {
    name: '修言',
    age: 99,
  },
  {
    name: '秀妍',
    age: 100,
  },
];

// 定义数据的写逻辑
const recipe = (draft) => {
  draft.push({ name: 'xiuyan', age: 101 });
  draft[1].age = 102;
};

// 借助 produce，执行数据的写逻辑
const nextState = produce(baseState, recipe);

/**
 * 极简版本produce
 */

function produce(base, recipe) {
  // 预定义一个 copy 副本
  let copy;
  // 定义 base 对象的 proxy handler
  const baseHandler = {
    set(obj, key, value) {
      // 先检查 copy 是否存在，如果不存在，创建 copy
      if (!copy) {
        copy = { ...base };
      }
      // 如果 copy 存在，修改 copy，而不是 base
      copy[key] = value;
      return true;
    },
  };

  // 被 proxy 包装后的 base 记为 draft
  const draft = new Proxy(base, baseHandler);
  // 将 draft 作为入参传入 recipe
  recipe(draft);
  // 返回一个被“冻结”的 copy，如果 copy 不存在，表示没有执行写操作，返回 base 即可
  // “冻结”是为了避免意外的修改发生，进一步保证数据的纯度
  return Object.freeze(copy || base);
}
```

## Immutable.js 与 Immer.js 的区别

<a target="_blank" href="https://zhuanlan.zhihu.com/p/122187278">参考</a>

1、对于 Immutable.js 来说，它通过构建一套原生 JS 无法支持的 Trie(Trie，又称为前缀树或字典树，是一种树形数据结构) 数据结构，最终实现了树节点的按需创建 <br/>

immutable.js 不可变的状态，对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。鉴于这个功能，所以可以把需要对比的 props 或者 state 数据变成 Immutable 对象，通过对比 Immutable 是否相等，来证明状态是否改变，从而确定是否更新组件。

2、对于 Immer.js 来说，它借助 Proxy 的 getter 函数实现了按需代理，借助 Proxy 的 setter 函数实现了对象属性的按需拷贝 <br/>

## node 进程之间如何通讯

在 Node.js 环境中，进程之间有多种通信方式。以下是一些常见的进程间通信（IPC）方法：

### 1. Child Process

Node.js 的 `child_process` 模块允许你创建子进程并与之通信。通过 `fork` 方法，你可以创建一个新的 Node.js 进程并使用 IPC 进行通信：

```js
// parent.js
const { fork } = require('child_process');

const child = fork('child.js');

// 发送消息给子进程
child.send({ hello: 'world' });

// 接收子进程的消息
child.on('message', (message) => {
  console.log('来自子进程的消息:', message);
});
```

```js
// child.js
process.on('message', (message) => {
  console.log('来自父进程的消息:', message);
  // 发送消息回父进程
  process.send({ foo: 'bar' });
});
```

### 2. Cluster

Node.js 的 `cluster` 模块允许你创建共享同一服务器端口的子进程。这些子进程（称为工作进程）可以通过主进程进行通信：

```js
// cluster.js
const cluster = require('cluster');
const http = require('http');
const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {
  console.log(`主进程 ${process.pid} 正在运行`);

  // 衍生工作进程。
  for (let i = 0; i < numCPUs; i++) {
    const worker = cluster.fork();

    // 接收工作进程的消息
    worker.on('message', (message) => {
      console.log(`来自工作进程的消息：${message}`);
    });
  }

  // 如果工作进程断开连接，它应该退出
  cluster.on('exit', (worker, code, signal) => {
    console.log(`工作进程 ${worker.process.pid} 已退出`);
  });
} else {
  // 工作进程可以共享任何 TCP 连接
  // 在这种情况下，它是一个 HTTP 服务器
  http
    .createServer((req, res) => {
      res.writeHead(200);
      res.end('你好世界\n');
      // 向主进程发送消息
      process.send(`工作进程 ${process.pid} 回应`);
    })
    .listen(8000);

  console.log(`工作进程 ${process.pid} 已启动`);
}
```

### 3. 使用 TCP/UDP 套接字

你可以通过网络套接字来实现不同 Node.js 进程间的通信，进程可以是运行在同一台机器上的或者是运行在不同机器上的。这通常使用 `net`（TCP）或 `dgram`（UDP）模块来实现：

```js
// TCP 服务器
const net = require('net');
const server = net.createServer((socket) => {
  socket.write('Echo server\r\n');
  socket.pipe(socket);
});

server.listen(1337, '127.0.0.1');
```

### 4. 使用消息队列或 Broker

在更复杂的场景中，特别是在微服务架构中，可以使用消息队列或消息中间件（如 RabbitMQ, Kafka, Redis pub/sub）来进行不同服务或进程间的通信。

### 5. 使用共享资源

进程可以通过访问共享资源来进行通信，比如文件系统（通过读写文件来交换数据），或者数据库。

这些方法适用于不同的场景和需求。对于简单的父子进程通信，`child_process` 的 `fork` 和 IPC 是一个很好的选择。对于更大规模的分布式系统，可能需要使用到网络套接字或者消息队列。在选择适合的通信方式时，需要考虑到系统的复杂度、性能要求以及可维护性。

## /和./的区别

1、当文件夹中使用/和./时是有区别的<br/>
`/表示根目录，./表示当前目录`<br/>

2、当在文件中使用/和./时，如果此时文件在根目录 <br/>
/和./表示的文件路径一样<br/>

webpack 打包时 publicPath 指定的是所有静态资源的路径，而不是单指 index.html 里面静态资源的路径

## node 如何开启子进程

- 开启子进程：child_process.fork 和 cluster.fork
- 使用 send 和 on 进行通讯
