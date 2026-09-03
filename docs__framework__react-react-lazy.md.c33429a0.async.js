"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[5369],{12142:(function(d,_,e){e.r(_);var i=e(55804),l=e(33405),m=e(67700),c=e(84359),h=e(88738),a=e(5412),E=e(75968),x=e(33044),o=e(54314),r=e(10577),s=e(96540),t=e(93553),n=e(74848);function u(){return(0,n.jsx)(o.LO,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(r.A,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"reactlazy",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#reactlazy",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"React.lazy()"]}),(0,n.jsx)("p",{children:t.texts[0].value}),(0,n.jsx)(a.A,{lang:"js",children:t.texts[1].value}),(0,n.jsxs)("h2",{id:"\u8DEF\u7531\u7EA7\u522B\u7684\u61D2\u52A0\u8F7D",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8DEF\u7531\u7EA7\u522B\u7684\u61D2\u52A0\u8F7D",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u8DEF\u7531\u7EA7\u522B\u7684\u61D2\u52A0\u8F7D"]}),(0,n.jsx)(a.A,{lang:"js",children:t.texts[2].value}),(0,n.jsxs)("h2",{id:"suspense",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#suspense",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Suspense"]}),(0,n.jsx)(a.A,{lang:"js",children:t.texts[3].value})]})})})})}_.default=u}),93553:(function(d,_,e){e.r(_);const i=[{value:"React.lazy()\u662F React \u5185\u7F6E\u7684\u4E00\u4E2A\u51FD\u6570\uFF0C\u5B83\u5141\u8BB8\u4F60\u5B9A\u4E49\u4E00\u4E2A\u52A8\u6001\u5BFC\u5165\u7684\u7EC4\u4EF6\u3002\u8FD9\u4E2A\u52A8\u6001\u5BFC\u5165\u7684\u7EC4\u4EF6\u4F1A\u5728\u5B83\u88AB\u6E32\u67D3\u65F6\u624D\u52A0\u8F7D",paraId:0,tocIndex:0},{value:`import React, { Suspense } from 'react';

const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
`,paraId:1,tocIndex:0},{value:`import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = React.lazy(() => import('./HomePage'));
const AboutPage = React.lazy(() => import('./AboutPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}
`,paraId:2,tocIndex:1},{value:`import { Suspense } from 'react';

let data, promise;
function fetchData() {
  if (data) return data;
  promise = new Promise((resolve) => {
    setTimeout(() => {
      data = '\u53D6\u5230\u7684\u6570\u636E';
      resolve(true);
    }, 2000);
  });
  throw promise;
}

function Content() {
  const data = fetchData();
  return <p>{data}</p>;
}

export default function App() {
  return (
    <Suspense fallback={'loading data'}>
      <Content />
    </Suspense>
  );
}
`,paraId:3,tocIndex:2}];e.d(_,["texts",0,i])})}]);
