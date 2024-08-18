---
nav: Node
group: 基础
toc: content
mobile: false
title: Git
---

## “git pull”和“git fetch”之间有什么区别

git pull = git fetch + git merge

fetch 同 pull 的区别在于：
git fetch:是从远程获取最新版本到本地，不会自动 merge. 更新.git 里面 FETCH_HEAD 文件
而 git pull 是从远程获取最新版本并 merge 到本地仓库.
从安全角度出发，git fetch 比 git pull 更安全，因为我们可以先比较本地与远程的区别后，选择性的合并。
git push 默认推送到 master，如果有多个分支，则多个分支一起推送到远程.

```bash
git fetch
git merge origin/master
```

## 将 Git 存储库克隆到特定文件夹中

```bash

git clone <repository> <path>
```

## 通过 SSH 方式拉取代码

<a href="https://www.jianshu.com/p/1c3cadc68b4b" target="_blank">参考</a>

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

```

## git-remote

<a href="https://www.runoob.com/git/git-remote.html" target="_blank">参考</a>

```bash
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

## git rebase 和 git merge 的区别

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

rebase 会将整个分支移动到另一个分支上，有效地整合了所有分支上的提交

主要的好处是历史记录更加清晰，是在原有提交的基础上将差异内容反映进去，消除了 git merge 所需的不必要的合并提交

## git stash

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

## git 查看和设置邮箱+密码

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

## git 中 reset 和 revert 的区别是什么

区别：<br/>
1、reset 是彻底回退到指定的 commit 版本，该 commit 后的所有 commit 都将被清除；而 revert 仅是撤销指定 commit 的修改，并不影响后续的 commit。<br/>

2、reset 执行后不会产生记录，revert 执行后会产生记录。<br/>

## git 回退到某个 commit 方法

<a target="_blank" href="https://www.jianshu.com/p/f860bf857456">参考</a>  
注意: 如果多人开发 另一人电脑上已经 pull 了 他拉取后再推会把 reset 的提交记录带上来

```bash
git log
git reset --hard commit_id(即 commit 后面的字符 32 位的那一堆)
git push origin HEAD --force(强推到远程)
```

## Git Flow

Git Flow 是一种基于 Git 的工作流程，它为在团队环境中进行项目版本控制和软件开发提供了一组规范化的操作指南。这个工作流由 Vincent Driessen 在 2010 年提出，并迅速流行起来，被许多开发团队采用。

Git Flow 的核心思想是定义一个围绕项目发布的严格分支模型。这种工作流涉及到以下几个主要分支以及遵循一定规则的辅助分支：

### 主要分支

1. **master 分支**：始终反映一个生产就绪的状态（production-ready state），是当前在生产环境中运行的代码的直接反映。

2. **develop 分支**：用作开发的主要分支，包含下一个发布版本的所有最新代码。所有开发工作最终都会合并回这个分支。

### 辅助分支

1. **feature 分支**：从 develop 分支中分支出来，用于开发新功能。完成后，它们会合并回 develop 分支。通常遵循命名模式：`feature/*`。

2. **release 分支**：当 develop 分支几乎达到一个新版本的发布点时，会从 develop 分支中分支出来一个新的 release 分支。这个分支允许最后的测试和小修正，一旦确定无误，它会被合并到 master 和 develop 分支。通常遵循命名模式：`release/*`。

3. **hotfix 分支**：当 master 分支上的生产版本发现了紧急问题需要快速修复时，会从 master 分支中分支出来一个 hotfix 分支。修复完成后，它会合并回 master 和 develop 分支，同时生产版本会迅速更新。通常遵循命名模式：`hotfix/*`。

4. **support 分支**（不是 Git Flow 的标准部分，但有时会用到）：用来提供对旧版本软件的长期支持，比如某些客户不愿意升级到最新版本。通常遵循命名模式：`support/*`。

### Git Flow 的工作流程

- 当开发新功能时，从 develop 分支创建新的 feature 分支。
- 功能开发完成后，将 feature 分支合并回 develop 分支。
- 准备发布新版本时，创建一个 release 分支，并进行最终测试和修正。
- 发布时，将 release 分支合并到 master 和 develop 分支，并在 master 分支上打上版本标签。
- 如果在生产中发现紧急问题，从 master 分支创建 hotfix 分支进行修复，然后合并回 master 和 develop 分支，并更新生产版本。

Git Flow 提供了一种高度结构化的模式来管理软件开发的不同阶段，有助于团队协作和并行开发，同时保持版本历史的清晰。不过，值得注意的是，这种工作流程相对复杂，对于小型或者灵活性要求更高的团队，可能会感到过于繁琐。因此，根据团队的具体需要，可能会选择其他更简化的工作流程，例如 GitHub Flow 或 GitLab Flow。
常用命令
wq 退出当前终端

### git 把一个提交了的 commit 复制到另一个分支

1、找出你想复制的 commit 的哈希值  
2、运行以下命令

```bash
git log
git cherry-pick commit_hash
```

## .gitignore 文件不生效

已缓存的文件：.gitignore 仅影响尚未跟踪的文件。如果一些文件已经被 Git 跟踪（即已经提交到了仓库），那么即使你后来在 .gitignore 文件中忽略它们，也不会有任何效果。要解决这个问题，你需要先从 Git 的跟踪列表中移除这些文件（但保留在本地），然后再提交更改。使用命令：

```bash
git rm --cached FILENAME（文件的名称）

栗子
git rm --cached abc.json

```

对于目录，请使用递归选项：

```bash
git rm --cached -r DIRECTORYNAME（文件夹的名称）

栗子
git rm --cached -r .dumi


```

## git 如何弃掉当前的改动

如果你还没有暂存改动（即改动在工作目录中）：

```bash
放弃单个文件
   git checkout -- <文件名>
放弃工作目录中所有文件的改动：
   git checkout -- .
```

如果你已经暂存了改动（使用 git add 之后）

```bash
首先，需要解压暂存区：
   git reset HEAD <文件名>
然后放弃工作目录中的改动：
   git checkout -- <文件名>

如果你想同时取消所有暂存的改动并放弃工作目录中的改动：
   git reset HEAD .
   git checkout -- .

```
