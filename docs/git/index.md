---
nav: Git
toc: content
mobile: false
title: 随笔
---

# “git pull”和“git fetch”之间有什么区别

git pull = git fetch + git merge

fetch 同 pull 的区别在于：
git fetch:是从远程获取最新版本到本地，不会自动 merge. 更新.git 里面 FETCH_HEAD 文件
而 git pull 是从远程获取最新版本并 merge 到本地仓库.
从安全角度出发，git fetch 比 git pull 更安全，因为我们可以先比较本地与远程的区别后，选择性的合并。
git push 默认推送到 master，如果有多个分支，则多个分支一起推送到远程.

合并 master 简洁版

git fetch
git merge origin/master

# 将 Git 存储库克隆到特定文件夹中

```bash

git clone <repository> <path>
```

# 通过 SSH 方式拉取代码

https://www.jianshu.com/p/1c3cadc68b4b

https://www.runoob.com/git/git-remote.html

```bash

cd ~/.ssh //进入指定路径文件夹
ls //查看文件夹下内容
如果没有则创建
ssh-keygen -t rsa -C "用户邮箱"
再 cd ~/.ssh 查找公钥
cat ~/.ssh/id_rsa.pub

然后再 github 添加公钥
然后拉取代码
git clone git@github.com:Jerryqun/react-antd-admin.git


显示所有远程仓库：
git remote -v

设置远程仓库地址
git remote set-url origin git@github.com:Jerryqun/react-antd-admin.git

git config --global user.name "用户名"
git config --global user.email "邮箱地址"

查看远程所有分支
git branch -r

重命名分支
git branch -m 旧名称 新名称

git branch -D 分支名 // 先切换到别的分支名下，删除本地分支

git push --delete 远程主机 远程分支名 // 删除远程分支
```

# git rebase 和 git merge 的区别

git rebase

将当前分支移植到指定分支或指定 commit 之上，用法如下：

```bash
git rebase -i <commit>
```

常见的参数有--continue，用于解决冲突之后，继续执行 rebase
git rebase --continue

git merge

通过 merge 合并分支会新增一个 merge commit，然后将两个分支的历史联系起来

其实是一种非破坏性的操作，对现有分支不会以任何方式被更改，但是会导致历史记录相对复杂

rebase
rebase 会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交

主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 git merge 所需的不必要的合并提交

# git stash

```bash

git stash 本地存储

# 默认按 stash 的顺序命名: stash@{n}

git stash

#添加备注
git stash save 'message'

# 查看存储列表

git stash list

# 应用最近一次的 stash

git stash apply

# 应用指定的那一条

git stash apply stash@{n}

# 应用最近一次的 stash，随后删除该记录

git stash pop

# 删除 stash 的所有记录

git stash clear

```

# git 查看和设置邮箱+密码

打开终端，运行以下配置命令：

```bash

git config --global user.name "your_username" # 配置用户名<br/>
git config --global user.email "your_email" # 配置邮箱<br/>
以上是全局配置“user.name”和“user.email”的命令
如果想要配置单个项目 git 的“user.name”和“user.email”，打开终端，进到该项目目录下，运行命令

git config user.name "your_username"
git config user.email "your_email"
配置完，查看 git 中配置的用户名和邮箱，看看是否配置成功<br/>

git config user.name
git config user.email

```

# git 中 reset 和 revert 的区别是什么

区别：<br/>
1、reset 是彻底回退到指定的 commit 版本，该 commit 后的所有 commit 都将被清除；而 revert 仅是撤销指定 commit 的修改，并不影响后续的 commit。<br/>

2、reset 执行后不会产生记录，revert 执行后会产生记录。<br/>

# git 回退到某个 commit 方法

https://www.jianshu.com/p/f860bf857456

```bash
git log
git reset --hard commit_id(即 commit 后面的字符 32 位的那一堆)
git push origin HEAD --force(强推到远程)
```

快捷键
wq 退出当前终端
