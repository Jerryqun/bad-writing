---
toc: content
group:
  title: 布局
  order: 3
title: 常用布局
---

## 结合 antd 常用宫格格布局

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

## 最简单的子元素垂直居中布局
1. 
```css
.center {
  display: grid;
  place-items: center;
}
```
2. 
```css
.father {
  position: relative;
}
.son {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0px;
  margin: auto;
  height: 100px;
  width: 100px;
}
```
3. 

```html
<style>
    .father {
        display: table-cell;
        width: 200px;
        height: 200px;
        background: skyblue;
        vertical-align: middle;
        text-align: center;
    }
    .son {
        display: inline-block;
        width: 100px;
        height: 100px;
        background: red;
    }
</style>
<div class="father">
    <div class="son"></div>
</div>
```
