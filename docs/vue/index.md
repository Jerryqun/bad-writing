---
nav: Vue
group: 面试
toc: content
title: vue 错误捕获
---

## vue 错误捕获

1. errorCaptured 监听下级组件错误，返回 false 组织向上传播
2. errorHandler 监听全局 vue 组件错误
3. window.onerror 监听其他 js 错误，如异步

## Vue3 每个生命周期都做了什么

1. beforeCreate
   创建一个空白的 vue 实例 ，data、method 尚未被初始化，不可使用
2. created
   vue 实例初始化完成，完成响应式绑定。，data、method 已被初始化，可使用，但是尚未开始渲染模板
3. beforeMount
   编辑模板，调用 render 生成 vdom，但是还是没开始渲染 dom
4. mounted
   完成 dom 渲染，组件创建完成，开始由创建阶段进入运行阶段
