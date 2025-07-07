---
nav: React
group: 常用包
toc: content
title: useImmer
---

## useImmer

useImmer 解决引用类型属性变动 view 不更新情况



不使用useImmer 下面栗子数据不会刷新
```js
import { useState } from 'react';

export default () => {
  const [state, setState] = useState({
    a: 1,
    b: {
      c: [1, 2],
      d: 2,
    },
  });

  return (
    <>
      <button
        onClick={() => {
          setState((prev) => {
            prev.b.c.push(3);
            return prev
          });
        }}
      >
        test
      </button>
      <button>{JSON.stringify(state)}</button>
    </>
  );
};

```

使用useImmer 数据刷新
```js
import { useState } from 'react';
import { useImmer } from 'use-immer';

export default () => {
  const [state, setState] = useImmer({
    a: 1,
    b: {
      c: [1, 2],
      d: 2,
    },
  });

  return (
    <>
      <button
        onClick={() => {
          setState((prev) => {
            prev.b.c.push(3);
            return prev
          });
        }}
      >
        test
      </button>
      <button>{JSON.stringify(state)}</button>
    </>
  );
};
```


