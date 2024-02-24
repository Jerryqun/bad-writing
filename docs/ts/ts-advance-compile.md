---
nav: Ts
toc: content
group: 进阶
mobile: false
title: 编译原理
---

## TypeScript 编译原理

1、Program : 在编译开始时创建为一个名为 Program 编译上下文对象，通过 编译选项 和 输入文件（1 个或多个，我们进行单文件分析时通常只传 1 个）这两部分配置，加载所有输入文件以及输入文件中 imports 导入的文件（ps : 加载很多文件是因为在编译过程中会进行类型检查，而类型信息可能需要结合多个文件得出）。

2、Tsconfig : TypeScript 编译配置信息，其实就是 TS 项目中的 tsconfig.json 配置文件。

3、Tokens : Scanner 扫描源代码进行词法分析后生成的 Token 流（词法分析）。

4、AST : Parser 将 Token 流进行语法分析，生成 AST 对象。

5、Symbol : Binder 会创建一个用来存储每个 AST 节点和对应符号 Symbol 的映射表，当初次定义或者从 import 导入一个变量、函数或类时，会为其创建一个符号（唯一标识符），当在其他地方使用相同名称时，就查表找出这个名称所代表的符号, 通过 symbol 可以判定 AST 节点的语义上下文。

6、Checker : Checker 用来检查代码中变量的类型信息，提供了一些 API 获取节点类型及关联信息。

7、Emitter : 处理 Node 节点，将 AST 转化为 js、d.ts、map 等编译产物，代码分析不会涉及此阶段，可暂时忽略它。
