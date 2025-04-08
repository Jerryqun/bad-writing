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
5. beforeUpdate  
   data 发生了变化，准备更新 dom（但是尚未更新 dom）
6. updated  
   data 发生变化，而且 dom 更新完成 （不要在 updated 中修改 data，可能会导致死循环）
7. beforeUnmount  
   组件进入销毁阶段（尚未销毁，可正常使用），可移除、解绑一些全局事件、自定义事件。
8. unmounted  
   组件被销毁了，所有的子组件也被销毁了

## keep-alive

被 keep-alive 包裹 的组件 created 生命周期只会执行一次。

```html
<keep-alive >
  <A>
</keep-alive >
```

## VUE 什么时候操作 dom 比较合适

1. mounted 和 updated 的时候不能保证子组件全部挂载完成
2. 适用$nextTick 渲染（操作） dom

## ajax 放哪里

1. created
2. mounted（推荐）
   created 和 mounted 间隔时间很小

## vue3 composition api 生命周期有何区别

1. 用 setupo 代替了 beforeCreate 和 created
2. 适用 hooks 函数的形式，如 mounted 改为 onMounted()
3.

```js
import { onUpdated, onMounted } from 'vue';
export default {
  setup() {
    onMounted(() => {}),
    onUpdated(() => {}),
  },
};
```

## vue2 vue3 react 三者 diff 算法有何区别

### diff 算法介绍

1. diff 算法很早就有
2. diff 算法 应用广泛、如 github 的 pull request 中的代码 diff
3. 如果要严格 diff 两颗树，时间复杂度是 O(n^3),不可用

### diff 优化 （O(n)）

1. 只比较同一层，不跨级比较
2. tag 不同则删除重建（不再去比较内部的细节变化）
3. 子节点通过 key 区分
