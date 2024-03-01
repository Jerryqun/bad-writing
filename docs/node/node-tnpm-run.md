---
nav: Node
group: NPM
toc: content
mobile: false
title: npm run xxx
---

## npm run xxx

<a target="_blank" href="https://juejin.cn/post/7078924628525056007">参考</a><br/>
1、去 package.json 的 script 中找到对应的命令并执行<br/>
2、直接执行 xxx 会报错，因为操作系统中没有存在 xxx 这一条指令<br/>
3、运行 npm run xxx 的时候，npm 会先在当前目录的 node_modules/.bin 查找要执行的程序，如果找到则运行；
没有找到则从全局的 node_modules/.bin 中查找，<br/>
npm i -g xxx 就是安装到到全局目录；<br/>
如果全局目录还是没找到，那么就从 path 环境变量中查找有没有其他同名的可执行程序。<br/>
