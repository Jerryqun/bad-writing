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

### 答案

1. vue2 - 双端比较
2. vue3 - 最长递增子序列
3. react - 仅右移

Vue2、Vue3 和 React 在虚拟 DOM 的 Diff 算法实现上有一些关键区别，主要体现在策略、性能优化和架构设计上。以下是它们的核心差异及对比：

### **1. Vue2 的 Diff 算法**

#### **核心策略**

- **同级比较（Sibling Comparison）**：Vue2 的 Diff 算法仅在**同一层级的子节点之间**进行比较，不会跨层级移动节点。这意味着当节点结构变化较大时（如列表项位置大幅变动），Vue2 可能无法复用节点，导致大量 DOM 重渲染。
- **单向树形对比**：Vue2 的 Diff 算法仅比较父节点的子节点列表，不会递归比较子树的嵌套结构（除非子节点是组件）。

#### **性能瓶颈**

- **无法复用跨层级节点**：例如，当列表项的位置发生跨层级移动时，Vue2 会直接销毁旧节点并创建新节点，而非移动节点。
- **响应式系统**：Vue2 使用 `Object.defineProperty` 实现响应式，性能较低，且 Diff 过程与渲染流程绑定，无法中断。

#### **优化手段**

- **`key` 属性**：通过为列表项指定唯一 `key`，Vue2 可以优化同级节点的比较效率，但无法解决跨层级移动问题。

### **2. Vue3 的 Diff 算法**

#### **核心策略**

- **跨层级比较（Cross-Level Comparison）**：Vue3 的 Diff 算法支持**跨层级移动节点**，能够复用节点到正确的位置，减少 DOM 操作。
- **更智能的启发式策略**：
  - **静态节点标记**：提前标记不会变化的节点，跳过 Diff 过程。
  - **优先比较关键路径**：优先处理对用户体验影响较大的节点（如文本节点）。
  - **树形对比**：递归比较子树的嵌套结构，提升复杂组件的 Diff 效率。

#### **性能优化**

- **Fiber 架构**：Vue3 的 Diff 算法基于轻量级的协程（类似 React 的 Fiber 架构），支持渲染任务的分片执行，避免阻塞主线程。
- **Proxy 响应式**：使用 `Proxy` 替代 `Object.defineProperty`，性能更高，且 Diff 过程与响应式系统解耦。

#### **优化手段**

- **`key` 属性**：Vue3 的 `key` 仍用于优化 Diff，但结合跨层级比较，效果更显著。
- **`v-once` 指令**：标记静态内容，避免重复渲染。

### **3. React 的 Diff 算法**

#### **核心策略**

- **同级比较（Sibling Comparison）**：React 的 Diff 算法也基于同级比较，但通过 `key` 可以优化跨层级节点的复用。
- **深度优先（DFS）与优先级调度**：
  - React 16 之前的 Diff 是深度优先遍历，直接操作 DOM。
  - React 16 引入 **Fiber 架构**，将 Diff 分解为可中断的任务，优先处理用户交互相关的渲染，提升流畅度。
- **组件层级对比**：React 对组件树进行 Diff，子组件的更新独立于父组件。

#### **性能优化**

- **Fiber 架构**：通过优先级调度（如用户输入优先于非交互任务），将渲染任务拆分为小块，避免阻塞主线程。
- **`key` 属性**：React 的 `key` 是 Diff 的核心，用于标识列表项的唯一性，帮助 React 识别需移动或复用的节点。

#### **优化手段**

- **PureComponent / memo**：通过 `React.memo` 或 `shouldComponentUpdate` 避免不必要的渲染。
- **Flatten Trees**：减少组件嵌套层级，提升 Diff 效率。

### **对比总结**

| **特性**         | **Vue2**                   | **Vue3**                      | **React**                           |
| ---------------- | -------------------------- | ----------------------------- | ----------------------------------- |
| **Diff 策略**    | 同级比较，不跨层级移动节点 | 同级+跨层级比较，支持节点移动 | 同级比较，依赖 `key` 优化跨层级复用 |
| **Fiber 架构**   | 无                         | 有（轻量级，类似 React）      | 有（React 16+）                     |
| **响应式系统**   | `Object.defineProperty`    | `Proxy`                       | 无（状态管理独立于 Diff）           |
| **静态节点优化** | 无                         | 静态节点标记（`v-once`）      | 需手动优化（如 `React.memo`）       |
| **性能瓶颈**     | 跨层级移动性能差，渲染阻塞 | 更高效，支持中断渲染          | 需依赖 Fiber 调度避免阻塞           |
| **`key` 的作用** | 优化同级节点比较           | 优化同级+跨层级复用           | 标识节点唯一性，强制 Diff 逻辑      |

### **关键差异分析**

1. **跨层级移动支持**：
   - Vue3 支持跨层级 Diff，而 Vue2 和 React 默认仅支持同级比较，但 React 通过 `key` 可间接实现类似效果。
2. **Fiber 架构**：
   - Vue3 和 React 均采用 Fiber 架构，但 Vue3 的实现更轻量，而 React 的优先级调度更复杂。
3. **响应式与 Diff 耦合**：

   - Vue 的响应式系统与 Diff 深度耦合（Vue2 的 `Object.defineProperty`，Vue3 的 `Proxy`），而 React 的状态管理独立于 Diff。

4. **静态节点优化**：
   - Vue3 通过静态节点标记直接跳过 Diff，而 React 需依赖开发者手动优化（如 `React.memo`）。

### **选择建议**

- **Vue2**：适合对性能要求不高的项目，或已有 Vue2 代码库需维护。
- **Vue3**：推荐新项目使用，因其 Diff 算法更高效，且响应式系统性能更优。
- **React**：适合需要复杂交互和高优先级调度的场景（如动画或高频更新），但需手动优化 Diff 流程。

了解这些差异有助于根据项目需求选择框架，并针对性地优化 Diff 性能。
