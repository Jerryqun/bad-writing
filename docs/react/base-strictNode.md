---
nav: React
group: 基础
toc: content
mobile: false
title: StrictMode 
---

## StrictMode

StrictMode 是 React 提供的开发者工具，用于检测潜在问题，帮助你在开发阶段发现，它不会影响生产环境，仅在开发模式下生效。

在 React 18 + StrictMode 下，组件的某些阶段会被故意执行两次


```jsx
import { StrictMode } from "react";
import { useState, useEffect } from "react";

function MyComponent() {
  console.log("Render"); // 开发模式下会打印 2 次

  useEffect(() => {
    console.log("Effect ran"); // 会执行 2 次（开发模式）
    return () => console.log("Cleanup"); // 也会执行 2 次
  }, []);

  return <div>Hello</div>;
}

// 使用 StrictMode 包裹
function App() {
  return (
    <StrictMode>
      <MyComponent />
    </StrictMode>
  );
}
export default App
```

Render  
Render  
Effect ran  
Cleanup  
Effect ran  
