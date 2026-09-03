"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[6467],{91482:(function(a,_,n){n.r(_);var t=n(55804),u=n(33405),c=n(67700),m=n(84359),h=n(88738),i=n(5412),f=n(75968),g=n(33044),s=n(54314),o=n(10577),r=n(96540),d=n(57677),e=n(74848);function l(){return(0,e.jsx)(s.LO,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(o.A,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"padfjs",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#padfjs",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"padfjs"]}),(0,e.jsxs)("p",{children:[d.texts[0].value,(0,e.jsx)("a",{href:"https://g.alicdn.com/code/lib/pdf.js/2.8.335/pdf.min.js",children:d.texts[1].value})]}),(0,e.jsx)(i.A,{lang:"js",children:d.texts[2].value}),(0,e.jsx)("p",{children:d.texts[3].value}),(0,e.jsx)(i.A,{lang:"less",children:d.texts[4].value})]})})})})}_.default=l}),57677:(function(a,_,n){n.r(_);const t=[{value:"\u5F15\u5165\uFF1A ",paraId:0,tocIndex:0},{value:"https://g.alicdn.com/code/lib/pdf.js/2.8.335/pdf.min.js",paraId:0,tocIndex:0},{value:`import { useAsyncEffect, useBoolean } from 'ahooks';
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
`,paraId:3,tocIndex:0}];n.d(_,["texts",0,t])})}]);
