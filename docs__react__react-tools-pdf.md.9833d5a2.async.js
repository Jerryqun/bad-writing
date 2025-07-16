"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4955],{94669:function(a,_,n){n.r(_);var d=n(72269),u=n(93359),c=n(61788),m=n(19977),h=n(91558),i=n(24268),f=n(96057),g=n(85939),s=n(53683),o=n(80936),r=n(67294),t=n(68440),e=n(85893);function l(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"padfjs",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#padfjs",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"padfjs"]}),(0,e.jsxs)("p",{children:[t.texts[0].value,(0,e.jsx)("a",{href:"https://g.alicdn.com/code/lib/pdf.js/2.8.335/pdf.min.js",children:t.texts[1].value})]}),(0,e.jsx)(i.Z,{lang:"js",children:t.texts[2].value}),(0,e.jsx)("p",{children:t.texts[3].value}),(0,e.jsx)(i.Z,{lang:"less",children:t.texts[4].value})]})})})})}_.default=l},68440:function(a,_,n){n.r(_),n.d(_,{texts:function(){return d}});const d=[{value:"\u5F15\u5165\uFF1A ",paraId:0,tocIndex:0},{value:"https://g.alicdn.com/code/lib/pdf.js/2.8.335/pdf.min.js",paraId:0,tocIndex:0},{value:`import { useAsyncEffect, useBoolean } from 'ahooks';
import styles from './index.module.less';
import { Loading } from 'antd-mobile';

const W: any = window;

// \u51FD\u6570\uFF1A\u6E32\u67D3 PDF \u9875\u9762
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
`,paraId:1,tocIndex:0},{value:"index.module.less",paraId:2,tocIndex:0},{value:`.pdf-view {
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
`,paraId:3,tocIndex:0}]}}]);
