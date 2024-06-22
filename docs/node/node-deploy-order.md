---
nav: Node
group: 部署
toc: content
mobile: false
title: 常用命令
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

echo
显示文本：
echo "Hello, world!"  此命令将输出字符串 "Hello, world!" 到终端。

显示变量的值：
USERNAME="Alice"
echo "Welcome, $USERNAME!"


输出命令的结果到文件中（重定向）：
echo "Some text" > file.txt
这会创建或覆盖 file.txt 文件，使其包含文本 "Some text"。

curl 用于传输数据，它支持多种协议，包括 HTTP、HTTPS、FTP 和 SFTP 等

获取URL的内容
curl https://www.baidu.com/

将输出保存到文件中
curl -o filename.html https://www.baidu.com/






```

### vim 创建文件修改文件

在 Vim 中创建并修改文件后保存的步骤如下：

1. **启动 Vim 并创建文件**：
   打开终端（Terminal），输入`vim filename`（其中`filename`是你想创建的文件名称），然后按`Enter`键。如果文件已存在，Vim 将打开它；如果文件不存在，Vim 将在退出时创建它。

2. **进入插入模式编辑文件**：
   启动 Vim 后，默认处于普通模式（Normal Mode）。按`i`键进入插入模式（Insert Mode），这样你就可以开始编辑文件了。

3. **编辑文件内容**：
   在插入模式下，你可以输入文本，进行编辑。

4. **退出插入模式**：
   完成编辑后，按`Esc`键退出插入模式，回到普通模式。

5. **保存文件**：
   在普通模式下，输入`:w`（注意是英文状态下的冒号，然后是字母 w），按`Enter`键，Vim 会保存你的更改。这个命令的意思是“write”，即写入更改到文件。

6. **退出 Vim**：
   如果你想保存文件并退出 Vim，可以在普通模式输入`:wq`（这是“write and quit”的缩写）或`:x`，然后按`Enter`键。如果你只想退出不保存，可以输入`:q!`，这将放弃所有未保存的更改，并退出 Vim。

这是简单的 Vim 使用流程。Vim 是一个功能强大但需要一定学习的文本编辑器，具有多种模式、命令和常用命令，熟悉这些可以帮助你更高效地使用 Vim。

### Centos7 下安装 MySQL 详细步骤

<a href="https://blog.csdn.net/lyouhuan/article/details/124868523" target="_blank">点击查看</a>

### rm -rf

在 Unix 和类 Unix 系统（比如 Linux 和 macOS）中，`rm` 是 remove（删除）的简写，用于删除文件或目录。标志 `-rf` 是两个不同标志的结合：

- `-r` 或 `-R` 表示递归处理，即递归删除指定目录下的所有子目录和文件。
- `-f` 表示强制执行，不提示任何确认信息即使是只读文件也会删除。

结合起来使用，`rm -rf` 命令可以用来强制删除指定路径下的所有文件和目录，不管这些文件和目录的权限和属性设置如何。具体来说，`rm -rf` 命令将：

1. 删除所有匹配路径的文件和目录。
2. 不会对删除操作进行任何确认提示，即使是通常需要确认的只读文件。
3. 会递归删除所有子目录和里面的内容。

因为 `rm -rf` 命令非常强大，并且执行后的删除操作是不可回复的，所以你在使用它时需要特别小心。确保你已经明确了要删除哪些内容，并且这些内容是可以安全删除的。永远不要在系统的根目录或其他关键目录下运行 `rm -rf` 命令，这可能导致整个系统变得不稳定甚至无法使用。

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

## mac 常用常用命令

```bash
command + shift + . mac显示隐藏文件 （https://www.zhihu.com/question/40870712）
control + c vscode cmd杀死进程
ifconfig  mac查看ip地址 在 en0  inet后面
mkdir xxx 创建文件夹
option + command + i  Mac打开safari、chrome开发者工具常用命令
command + 空格  打开应用快捷搜索
command + shift + 3   截图全屏
command + shift + 4   截图所选区域
Command + Option + c  复制选中文件的路径
control + c 杀死当前终端命令
command + shift + r 强制刷新浏览器

```

## sketch 常用命令

吸色
control + c

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
    "start": "npx nodemon --watch src server_build/bundle.js",（nodemon 监听文件的变化自动执行）
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

## npm 全局安装包的安装路径

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

查看某个包的安装路径

```bash
which package-size
```

让 js 文件变成 cli 在文件前面添加 ，添加后可直接按路径执行

```bash
#!/usr/bin/env node
```

给这个文件添加快捷执行命令

```bash
ln -s /path/to/script.js zcq
```

软链接可以嵌套使用

```bash
sudo ln -s ./zcq zcq1
```
