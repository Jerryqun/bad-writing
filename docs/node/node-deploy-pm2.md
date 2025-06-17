---
nav: Node
group: 部署
toc: content
mobile: false
title: pm2部署node服务
---

## pm2 部署 node 服务

<a href="https://blog.csdn.net/qq_32445707/article/details/120898799" target="_blank" rel="noreferrer">参考</a>

PM2 是常用的 node 进程管理工具，它可以提供 node.js 应用管理，如自动重载、性能监控、负载均衡等。同类工具有 Supervisor、Forever 等。

```bash
pm2 stop xxx ：结束某项进程

pm2 stop all ：结束所有进程

pm2 restart xxx ：重启某项进程

pm2 delete xxx ：删除某项进程
```

## 一般的node 应用部署的时候需要构建吗

1. 对于传统的 Node.js 后端应用：通常不需要构建，直接复制代码并运行即可。
2. 对于使用 TypeScript 的应用：需要先进行编译。
3. 对于全栈应用或需要构建的前端框架：需要运行构建命令。
