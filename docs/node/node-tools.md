---
nav: Node
group: 基础
toc: content
mobile: false
title: tools
---

## node 获取 ip

```js
import ip from 'ip';
const host = ip.address();
console.log('host: ', host);
```

## 终端动画

https://www.npmjs.com/package/ora

```js
import ora from 'ora';

const spinner = ora('Loading unicorns').start();

setTimeout(() => {
  spinner.color = 'yellow';
  spinner.text = 'Loading rainbows';
}, 1000);
```

## 描文件目录

https://www.npmjs.com/package/glob

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
