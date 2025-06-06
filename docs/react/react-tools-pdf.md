---
nav: React
group: 常用包
toc: content
title: padfjs
---

## padfjs

引入： https://g.alicdn.com/code/lib/pdf.js/2.8.335/pdf.min.js

```js
import { useAsyncEffect, useBoolean } from 'ahooks';
import styles from './index.module.less';
import { Loading } from 'antd-mobile';

const W: any = window;

// 函数：渲染 PDF 页面
async function renderPage(page) {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');
  const viewport = page.getViewport({ scale: 2 });
  canvas.height = viewport.height;
  canvas.width = viewport.width;
  canvas.style.width = '100%';

  const renderContext = {
    canvasContext: ctx,
    viewport: viewport,
  };
  await page.render(renderContext);
  return canvas;
}

function PdfCompared({ url }) {
  const [loading, { setFalse }] = useBoolean(true);
  useAsyncEffect(async () => {
    const sourcePdf = await W.pdfjsLib.getDocument(url)?.promise;
    const sourcePdfList: any = [];
    for (let i = 1; i <= sourcePdf.numPages; i++) {
      sourcePdfList.push(await renderPage(await sourcePdf.getPage(i)));
    }
    sourcePdfList.forEach((canvas) => {
      document.querySelector('#original')?.appendChild(canvas);
    });
    setFalse();
  }, []);

  return (
    <>
      {loading && (
        <div className={styles['pdf-view-loading']}>
          <Loading color="primary" />
        </div>
      )}
      <div className={styles['pdf-view']}>
        <div id="original" className={styles['original']} />
      </div>
    </>
  );
}

export default PdfCompared;
```

index.module.less

```less
.pdf-view {
  min-height: 500px;

  .original {
    width: 100%;
    border-right: 1px solid #eee;
  }
}

.pdf-view-loading {
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: center;
}
```
