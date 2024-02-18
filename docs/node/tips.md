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

## module.exports 与 exports 的区别

```js
// 无论使用 exports 暴露成员，或是 module.exports 暴露成员，最终暴露的结果，都是以 module.exports 所指向的对象为准。

//test.js
const object = { na: 'name', age: 18 };
exports = object;

// main.js
const ex = require('./test');
console.log('ex', ex); // {}

// module.exports 和 exports 同指一个对象，但是最终暴露结果以 module.exports 的为准，上面的代码中，exports 改变了指向，
// 而我们又没有为 module.exports 挂载任何的属性或方法，所以就拿到了空对象。 不能对 exports 直接赋值，不会有任何效果
```
