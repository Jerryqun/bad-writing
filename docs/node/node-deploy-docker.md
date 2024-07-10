---
nav: Node
group: 部署
toc: content
mobile: false
title: Docker
---

## Docker

Docker 是一个开源的容器化平台，它允许开发者将应用程序及其依赖项打包成容器。容器是一种轻量级、可移植的、自给自足的软件包，它提供了代码运行的一致环境，无论它在开发、测试还是生产环境中运行。

## Docker 安装

通过链接 https://smartide.cn/zh/docs/install/docker/osx/

选择对应芯片的版本，安装桌面程序。
安装完毕后，可以在终端通过以下命令，去判断是否安装成功:

```bash
docker -v

// Docker version 20.10.8, build 3967b7d
```

## 设置 docker 代理

启动桌面 docker 应用后，修改 docker engine 设置，方便加快拉取镜像的速度  
类似于我们的 npm registry 配置

```json
{
  "experimental": false,
  "features": {
    "buildkit": true
  },
  "builder": {
    "gc": {
      "enabled": true,
      "defaultKeepStorage": "20GB"
    }
  },
  "debug": true,
  "registry-mirrors": [
    "https://hub.uuuadc.top/",
    "https://docker.anyhub.us.kg/",
    "https://dockerhub.jobcher.com/",
    "https://dockerhub.icu/",
    "https://docker.ckyl.me/",
    "https://docker.awsl9527.cn/"
  ]
}
```

测试 docker 代理设置是否成功

```bash
docker start hello-world // 启动hello-world服务，本地没有所以会拉取远程库去启动

Unable to find image 'hello-world:latest' locally
latest: Pulling from library/hello-world
478afc919002: Pull complete
Digest: sha256:94323f3e5e09a8b9515d74337010375a456c909543e1ff1538f5116d38ab3989
Status: Downloaded newer image for hello-world:latest

Hello from Docker!
This message shows that your installation appears to be working correctly.

// 启动成功了
```
