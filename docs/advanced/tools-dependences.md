---
nav: 高阶技术
group:
  title: 前端工具
  order: 2
toc: content
mobile: false
title: 依赖治理
---

## 依赖治理

基础架构团队不敢轻易修改，下线已有 API，因为不清楚哪些项目对它有依赖会受到影响，开发新 feature 时必须向后兼容，导致框架越发臃肿（物业缺乏经营门店对于基础设施使用情况的了解）。

## 解决方案：前端代码分析工具

最有效的做法是对全部子应用进行代码静态分析，对项目代码中的 API 调用进行定位 & 检测 & 统计，生成代码分析报告。