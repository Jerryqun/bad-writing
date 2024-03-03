---
nav: React
group: 基础
toc: content
mobile: false
title: cloneElement
---

## React.cloneElement

该方法接收三个参数，注意参数的数据类型：  
第一个参数为必选参数：TYPE（ReactElement）  
第二个参数为可选参数：[PROPS（object）]，  
第三个参数为可选参数：[CHILDREN（ReactElement）]

第一个参数：用于克隆的母体 React 元素。  
第二个参数：为克隆后生成的 React 元素添加新的 props 或覆盖从母体中克隆而来的部分或全部 props。  
第三个参数：为新生成的 React 元素添加新的 children，取代从母体中克隆而来的 children。

```jsx
function Son(props) {
  console.log(props); // {name: "alien", age: "28", mes: "let us learn React !"}
  return <div> hello,world </div>;
}
function Father(prop) {
  return React.cloneElement(
    prop.children,
    { mes: 'let us learn React !' },
    <div>212</div>,
  );
}
function Index() {
  return (
    <Father>
      <Son name="alien" age="28" />
    </Father>
  );
}

export default Index;
```
