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

## packjson 中依赖包版本的前缀作用

```bash
*^~的区别
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

1、对于 Immutable.js 来说，它通过构建一套原生 JS 无法支持的 Trie(Trie，又称为前缀树或字典树，是一种树形数据结构) 数据结构，最终实现了树节点的按需创建 <br/>
2、对于 Immer.js 来说，它借助 Proxy 的 getter 函数实现了按需代理，借助 Proxy 的 setter 函数实现了对象属性的按需拷贝 <br/>

## eval5

https://developers.weixin.qq.com/community/develop/article/doc/0008e04edb0a782baad9f463251813

eval5 是一个 JavaScript 库，它提供了一个独立的 JavaScript 解释器。这个库可以在不支持标准 eval 函数或者 new Function() 的 JavaScript 环境中执行 JavaScript 代码，例如在某些限制了 eval 使用的安全环境或者 Web Workers 中。

eval5 的一些特点和用途包括：

1、沙箱执行：它允许在一个隔离的环境中执行代码，不影响全局作用域，这对于安全执行不受信任的代码非常有用。

2、跨平台：它可以在不同的 JavaScript 环境中使用，包括浏览器和 Node.js。

3、执行字符串中的代码：就像内置的 eval 函数一样，它可以执行字符串形式的代码。

举个例子，如果你在一个限制了 eval 的环境中，可以使用 eval5 来间接实现类似 eval 的功能：

```js
import { Interpreter } from 'eval5';

const interpreter = new Interpreter(window); // 传入全局对象，例如在浏览器中可以是 window
const result = interpreter.evaluate('1 + 1'); // 解释并执行字符串中的 JS 代码
console.log(result); // 输出 2
```
