---
nav: Node
group: 部署
toc: content
mobile: false
title: 快捷键
---

## CentOS 常用命令

```bash


vim  + 文件名称 修改此文件
修改后 esc
输入:号
再输入 wq
最后回车保存

cat + 文件名称 查看单个文件
ls 列出当前目录的所有文件

ll 查看文件具体信息 比如权限信息等

netstat -ntlp 查看 所有已启动的服务

如何查看centos系统版本以及配置信息
lsb_release -a

sb_release命令需要“ redhat-lsb-core”软件包才能执行。
如果提示未找到命令
yum install -y redhat-lsb即可




```

## Centos7 下安装 MySQL 详细步骤

<a href="https://blog.csdn.net/lyouhuan/article/details/124868523" target="_blank">点击查看</a>

## 防火墙相关

```bash

systemctl start firewalld 开启防火墙
systemctl stop firewalld 停止防火墙
systemctl status firewalld 查看防火墙状态
systemctl disable firewalld 开机禁用防火墙
systemctl enable firewalld 开机启用防火墙

查看防火墙版本，确保防火墙已安装：firewall-cmd --version
查看防火墙状态，确保防火墙已开启：firewall-cmd --state
查看所有打开的端口，若端口已开放则无需继续执行命令：firewall-cmd --zone=public --list-ports
开放指定端口：firewall-cmd --zone=public --add-port=9999/tcp --permanent
重载防火墙配置：firewall-cmd --reload
查看指定端口是否已开放：firewall-cmd --zone=public --query-port=9999/tcp
删除指定端口：firewall-cmd --zone=public --remove-port=9999/tcp --permanent
```

## mac 常用快捷键

```bash
command + shift + . mac显示隐藏文件 （https://www.zhihu.com/question/40870712）
control + c vscode cmd杀死进程
ifconfig  mac查看ip地址 在 en0  inet后面
mkdir xxx 创建文件夹
option + command + i  Mac打开safari、chrome开发者工具快捷键
command + 空格  打开应用快捷搜索
command + shift + 3   截图全屏
command + shift + 4   截图所选区域
Command + Option + c  复制选中文件的路径

```

## sketch 快捷键

吸色
control + c
