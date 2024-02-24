---
nav: Node
group: webpack
toc: content
mobile: false
title: Webpack实现原理和工作流程
---

## Webpack 的实现原理工作流程

<a target="_blank" href="https://zhuanlan.zhihu.com/p/363928061">参考</a>

### 作用

将各种类型的资源，包括图片、css、js 等，转译、组合、拼接、生成 JS 格式的 bundler 文件

Webpack 默认情况下只能解析 JavaScript 文件，对于其他类型的文件我们只能使用 Loader 或者 Plugins 去加载解析。

### 三个阶段

1、初始化阶段<br/>
初始化参数：从配置文件、 配置对象、Shell 参数中读取，与默认配置结合得出最终的参数
创建编译器对象：用上一步得到的参数创建 Compiler 对象
初始化编译环境：包括注入内置插件、注册各种模块工厂、初始化 RuleSet 集合、加载配置的插件等
开始编译：执行 compiler 对象的 run 方法
确定入口：根据配置中的 entry 找出所有的入口文件，调用 compilition.addEntry 将入口文件转换为 dependence 对象

2、构建阶段<br/>
编译模块(make)：根据 entry 对应的 dependence 创建 module 对象，调用 loader 将模块转译为标准 JS 内容，调用 JS 解释器将内容转换为 AST 对象，从中找出该模块依赖的模块，再 递归 本步骤直到所有入口依赖的文件都经过了本步骤的处理
完成模块编译：上一步递归处理所有能触达到的模块后，得到了每个模块被翻译后的内容以及它们之间的 依赖关系图

3、生成阶段<br/>
输出资源(seal)：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会

写入文件系统(emitAssets)：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统

## webpack 中 module chunk bundle 区别

1、moudle 各个源码文件，webpack 中一切皆模块<br/>
2、chunk 多模块合并成的，如 entry 中定义的、import()动态导入的、splitChunks 拆分的<br/>
3、bundle 最终输出的文件<br/>
