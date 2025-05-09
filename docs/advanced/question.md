---
nav: 高阶技术
group:
  title: 问题记录
  order: 2
toc: content
mobile: false
title: 积累
---

## 在工作中遇到什么问题

1. 描述问题 :背景+现象+造成的影响
2. 问题如何被解决
3. 学到了什么，以后如何规避

## 举例

### ai 对话列表，ai 回答的问题是 sse 流逝渲染

背景：开发一个 h5 智能体， 主要难点是双向的流逝渲染和打断逻辑

列表数据架构探索

第一次做的时候是维护一整个 list，为了避免聊天列表数据量庞大导致的性能问题，sse 流逝渲染的时候是采用的 ReactDOM.render 实施往列表最后一个节点上挂载数据。reactDom.render() 在 asp react 应用中多次使用会报警告，通常只需要在应用入口文件中使用一次，到是有些状态不统一。

第二次做的时候 是采用当前正在渲染的 item 与 list 隔离，写成单独的组件，每次流式输出的时候只更新这一个组件，等渲染完成后再去更新整个 list 数据

第二次做完后，我发现 deepseek 淘天的的 aiStudio 从 dom 机构来看并不是采用的这种方式。

总结：  
1、技术架构前参考优秀的别人的成熟案例。  
2、避免过度优化导致的业务逻辑复杂，渲染 item 与 list 的 item 隔离需要处理更多的逻辑。react 渲染列表的时候只要写了 key ，自身有优化， 没有重新创建 dom
