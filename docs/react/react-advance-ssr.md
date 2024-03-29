---
nav: React
group: 进阶
toc: content
title: ssr
---

### 服务端渲染

React 的服务端渲染（Server-Side Rendering，简称 SSR）是一种技术，它在服务器上生成 HTML 字符串，将 React 组件渲染成静态的 HTML 内容，然后发送到客户端浏览器。客户端浏览器接收到这个 HTML 后即可立即显示页面内容，无需等待所有的 JavaScript 文件下载完毕并执行。服务端渲染的过程可以大致分为以下几个步骤：

1. **请求处理**：
   用户在浏览器中请求一个页面，请求被发送到服务器。

2. **服务器渲染**：
   服务器上的 React 代码接收到请求后，使用类似于 `import { renderToString } from "react-dom/server";` ，将 React 组件转换成 HTML 字符串。这个过程会递归地渲染组件树，直到所有组件都被转换成 HTML 元素。

3. **数据获取**：
   在实际的应用中，服务器渲染过程中通常需要获取外部数据（例如，来自数据库或 API 的数据）。服务器在渲染组件之前需要先获取这些数据，然后将数据传递给 React 组件。

4. **HTML 响应**：
   生成的 HTML 字符串会被嵌入到一个 HTML 页面模板中，通常这个模板还包括了应用程序的静态资源（如样式表和脚本文件）的引用。

5. **发送到客户端**：
   填充好的 HTML 页面会作为响应发送到客户端浏览器。

6. **客户端激活**：
   虽然用户可以立即看到页面内容，但页面上的交互功能此时还不可用，因为对应的 JavaScript 代码尚未执行。浏览器会下载 JavaScript 文件，并在本地执行 React 代码，这个过程被称为 "激活" 或 "同构"（Hydration）。在激活过程中，React 会将服务器渲染的静态 HTML 与客户端的 React 组件树进行关联，之后页面便成为了一个可交互的应用。

服务端渲染的优点包括：

- **改善首屏加载性能**：用户可以更快地看到页面的首屏内容，因为不需要等待所有的 JavaScript 加载完毕。
- **搜索引擎优化（SEO）**：由于 HTML 是在服务器生成的，搜索引擎爬虫可以更容易地抓取和索引页面内容，这对 SEO 是有益的。
- **提升用户体验**：用户感知到的加载速度更快，可以减少白屏时间。

然而，服务端渲染也存在一些潜在的挑战和缺点：

- **服务器负载**：服务器需要处理渲染工作，这可能增加服务器的负载和响应时间。
- **开发复杂性**：需要额外处理数据获取、路由、状态管理等在服务端渲染中的特殊情况。
- **配置繁琐**：需要配置服务器环境以支持 React 的服务端渲染，可能还需要处理缓存策略等问题。

## Next.js

<a href="https://nextjs.frontendx.cn/" target="_blank">中文文档</a>
