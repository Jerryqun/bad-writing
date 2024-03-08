---
toc: content
group:
  title: 预编译和PostCss
  order: 3
title: 基于scss语法的99乘法表
---

```jsx
import './styles/999.scss';
export default () => {
  let arr = new Array(9).fill(1);
  return (
    <div>
      {arr.map((d, index) => {
        return (
          <div className="row">
            {new Array(index + 1).fill(1).map((i, g) => {
              return <div className={`item item-${index}-${g}`}></div>;
            })}
          </div>
        );
      })}
    </div>
  );
};
```
