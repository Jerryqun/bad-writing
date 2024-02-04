---
toc: content
group:
  title: 布局
  order: 3
title: 常用布局
---

# 结合 antd 常用宫格格布局

```tsx
import React from 'react';
import { Row, Col, Empty } from 'antd';
import styles from './styles/layout.module.less';

function Test() {
  const item = new Array(20).fill(
    '测试超出测试超出测试超出测试超出测试超出测试超出测试超出测试超出测试超出测试超出',
  );
  return (
    <div>
      <Row gutter={[16, 16]}>
        {item.map((d: any) => {
          return (
            <Col className={styles['col']} span={4}>
              <div className={styles['col-1']}>{d}</div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default Test;
```
