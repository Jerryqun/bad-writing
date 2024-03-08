---
nav: React
group: 基础
toc: content
mobile: false
title: cloneElement
---

## React.cloneElement

该方法接收三个参数，注意参数的数据类型：  
第一个参数为必选参数：要克隆的 React 元素。这是一个有效的 React 元素，通常是通过 JSX 或 React.createElement 创建的。

第二个参数为可选参数：一个对象，包含想要在克隆的元素上设置或覆盖的新 props。传递给此参数的 props 会合并到克隆元素的原始 props 中，如果有相同的键，则新的 props 会优先。

第三个参数为可选参数：新的子元素来替换克隆元素的子元素。如果提供了这个参数，它会覆盖原始元素的子元素。你可以传递多个子元素作为额外的参数

```jsx
const MyComponent = () => {
  const original = <div className="original">Original Text</div>;

  // 克隆元素，并添加新的 props 和 children
  const cloned = React.cloneElement(
    original,
    { className: 'cloned', style: { color: 'red' } },
    'Cloned Text',
  );

  return (
    <div>
      {original}
      {cloned}
    </div>
  );
};

export default MyComponent;
```
