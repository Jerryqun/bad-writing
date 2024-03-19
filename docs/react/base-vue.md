---
nav: React
group: 基础
toc: content
title: React与Vue的不同
---

## React 与 Vue 的不同

不同点  
1、React 既不属于 MVC 也不属于 MVVM 架构； Vue 是一个灵活易用的渐进式双向绑定的 MVVM 框架  
核心思想  
vue：渐进式双向绑定的 MVVM 框架  
react： 声明式渲染和组件化、单向数据流

2、响应原理  
React：主要是通过手动调用 setState()方法来更新状态，状态更新之后，组件也会重新渲染  
Vue：遍历 data 数据对象，使用 Object.definedProperty 将每个属性都转换为 getter 和 setter，每个 Vue 实例都有一个对应的 watcher 实例，在组件初次渲染的时候会记录组件用到了哪些数据，当数据发生改变的时候触发 setter 方法，并通知所有依赖在这个数据的 watcher 实例调用 update 方法触发组件的 compile 渲染方法，进行渲染数据

3、diff 算法不同  
1、Vue 对比节点，如果节点元素类型相同但 className 不同，认为是不同类型的元素，会进行删除重建；但是 React 则会认为是同类型的节点，只会修改节点属性。  
2、Vue 的列表比对采用的是首尾指针法，React 采用的是从左到右依次比对的方式；当一个集合仅需要把最后一个节点移动到了第一个，React 会把前面的节点依次移动，而 Vue 只会把最后一个节点移动到最后一个，从这点上来说 Vue 的对比方式更加高效。

4、书写  
react 基于 jsx 面向 js  
vue 基于 templete 面向 html
