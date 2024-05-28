---
nav: Node
group: webpack
toc: content
mobile: false
title: 性能优化
---

# webpack 性能优化 （产出代码）

- 小图片 base64
- bundle 加 hash
- 懒加载
- 提取公共代码
- IngorePlugin
- CDN
- production  
  1.自动压缩  
  2.vue react 会自动删除调试代码（本身体积小，执行更快）  
  3.启动 Tree-Shaking（删除没有用到的代码）  
  4.默认开启 Scope Hoisting <a src='https://zhuanlan.zhihu.com/p/162066537'>参考</a>
