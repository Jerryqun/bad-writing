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

3、 [diff 算法不同](/vue#vue2-vue3-react-三者-diff-算法有何区别)

4、书写  
react 基于 jsx 面向 js  
vue 基于 templete 面向 html

## MVVM （Modal、View、ViewModal）

Modal: 数据模型层，负责业务数据和状态，通常是纯数据结构或逻辑处理  
View: 视图层，负责 UI 展示，用户界面元素和交互  
ViewModal: 视图模型层，连接 Model 和 View，负责数据绑定和处理用户交互逻辑

## MVC (Model、View、Controller)

Model：数据模型层，负责管理应用的数据、业务逻辑和状态  
View：视图层，负责数据显示和用户界面呈现  
Controller：控制器层，负责接收用户输入并调用 Model 与 View 进行交互和更新

## 简易的 mvvm 实现 基于 proxy

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>简易MVVM框架Demo（Proxy版，修正）</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      input {
        padding: 5px;
        font-size: 16px;
      }
    </style>
  </head>
  <body>
    <script>
      class MVVM {
        constructor(options) {
          this.$el =
            typeof options.el === 'string'
              ? document.querySelector(options.el)
              : options.el;
          // this.$data = options.data;

          this._bindings = {}; // 存放绑定信息

          this.$data = this._proxyData(options.data || {});

          this._compile(this.$el);
        }

        _proxyData(data) {
          const self = this;
          return new Proxy(data, {
            get(target, prop) {
              return target[prop];
            },
            set(target, prop, value) {
              target[prop] = value;
              self._update(prop, value);
              return true;
            },
          });
        }

        _compile(el) {
          const nodes = el.querySelectorAll('*');

          nodes.forEach((node) => {
            // 处理文本节点的 {{}} 绑定
            node.childNodes.forEach((child) => {
              if (child.nodeType === 3) {
                const reg = /\{\{\s*([^\s\{\}]+)\s*\}\}/g;
                const text = child.textContent;
                if (reg.test(text)) {
                  // 记录模板原文
                  const prop = RegExp.$1;
                  this._addBinding(prop, child, 'text', text);

                  this._update(prop, this.$data[prop]);
                }
              }
            });

            // 处理 v-model 指令
            if (node.hasAttribute && node.hasAttribute('v-model')) {
              const prop = node.getAttribute('v-model');
              this._addBinding(prop, node, 'input');

              node.value = this.$data[prop];

              node.addEventListener('input', (e) => {
                this.$data[prop] = e.target.value;
              });
            }
          });
        }

        _addBinding(prop, node, type, template = null) {
          if (!this._bindings[prop]) this._bindings[prop] = [];
          this._bindings[prop].push({ node, type, template });
        }

        _update(prop, value) {
          if (!this._bindings[prop]) return;
          this._bindings[prop].forEach((binding) => {
            if (binding.type === 'text') {
              const originalText = binding.template; // 这里用保存的模板文本
              if (!originalText) return;
              const reg = new RegExp(`\\{\\{\\s*${prop}\\s*\\}\\}`, 'g');
              binding.node.textContent = originalText.replace(reg, value);
            } else if (
              binding.type === 'input' &&
              binding.node.value !== value
            ) {
              binding.node.value = value;
            }
          });
        }
      }

      // 使用示例
      const vm = new MVVM({
        el: '#app',
        data: {
          message: '欢迎使用简易MVVM框架',
        },
      });
    </script>
  </body>
</html>
```
