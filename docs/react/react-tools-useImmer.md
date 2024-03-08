---
nav: React
group: 常用包
toc: content
title: useImmer
---

## useImmer

useImmer 解决引用类型属性变动 view 不更新情况

```js
import { useImmer } from 'use-immer';

export default () => {
  const [state, setState] = useImmer({
    a: 1,
    b: {
      c: [1, 2],
      d: 2,
    },
  });

  setState((prev) => {
    prev.b.c.push(3);
  });
  return <div>111</div>;
};
```
