"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7717],{84893:function(o,t,n){n.r(t);var a=n(72269),l=n(93359),c=n(61788),h=n(19977),E=n(91558),_=n(24268),m=n(96057),x=n(85939),d=n(53683),i=n(80936),u=n(67294),e=n(16933),r=n(85893);function s(){return(0,r.jsx)(d.dY,{children:(0,r.jsx)(u.Suspense,{fallback:(0,r.jsx)(i.Z,{}),children:(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)("div",{className:"markdown",children:[(0,r.jsxs)("h2",{id:"errorboundary",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#errorboundary",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"ErrorBoundary"]}),(0,r.jsx)("p",{children:(0,r.jsx)("a",{target:"_blank",href:"https://fe.ecool.fun/topic/d27c3517-ab5a-49f5-91e9-fd973eb1cd11?orderBy=updateTime&order=desc&tagId=13",children:e.texts[0].value})}),(0,r.jsx)("p",{children:e.texts[1].value}),(0,r.jsx)(_.Z,{lang:"js",children:e.texts[2].value}),(0,r.jsxs)("h2",{id:"\u8003\u8651\u76F4\u63A5\u4F7F\u7528\u5F00\u6E90\u5E93",children:[(0,r.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u8003\u8651\u76F4\u63A5\u4F7F\u7528\u5F00\u6E90\u5E93",children:(0,r.jsx)("span",{className:"icon icon-link"})}),"\u8003\u8651\u76F4\u63A5\u4F7F\u7528\u5F00\u6E90\u5E93"]}),(0,r.jsx)("p",{children:e.texts[3].value}),(0,r.jsx)(_.Z,{lang:"js",children:e.texts[4].value}),(0,r.jsx)("p",{children:e.texts[5].value}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:e.texts[6].value}),(0,r.jsx)("li",{children:e.texts[7].value}),(0,r.jsx)("li",{children:e.texts[8].value}),(0,r.jsx)("li",{children:e.texts[9].value}),(0,r.jsx)("li",{children:e.texts[10].value})]})]})})})})}t.default=s},16933:function(o,t,n){n.r(t),n.d(t,{texts:function(){return a}});const a=[{value:"react \u4E2D\u600E\u4E48\u6355\u83B7\u5F02\u5E38\uFF1F",paraId:0,tocIndex:0},{value:"EerrorBoundary \u662F 16 \u7248\u672C\u51FA\u6765\u7684\uFF0C\u4E4B\u524D\u7684 15 \u7248\u672C\u6709 unstable_handleError\u3002",paraId:1,tocIndex:0},{value:`class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // \u66F4\u65B0 state \u4F7F\u4E0B\u4E00\u6B21\u6E32\u67D3\u80FD\u591F\u663E\u793A\u964D\u7EA7\u540E\u7684 UI
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // You can also log the error to an error reporting service
    logErrorToMyService(error, info);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}

<ErrorBoundary>
  <MyWidget />
</ErrorBoundary>;
`,paraId:2,tocIndex:0},{value:"\u53EF\u4EE5\u8003\u8651\u76F4\u63A5\u4F7F\u7528\u5F00\u6E90\u5E93\uFF1Areact-error-boundary\uFF0C\u5BF9\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u53EA\u9700\u8981\u5173\u5FC3\u51FA\u73B0\u9519\u8BEF\u540E\u7684\u5904\u7406\u3002",paraId:3,tocIndex:1},{value:`import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

const ui = (
  <ErrorBoundary
    FallbackComponent={ErrorFallback}
    onReset={() => {
      // reset the state of your app so the error doesn't happen again
    }}
  >
    <ComponentThatMayError />
  </ErrorBoundary>
);
`,paraId:4,tocIndex:1},{value:"\u9057\u61BE\u7684\u662F\uFF0Cerror boundaries \u5E76\u4E0D\u4F1A\u6355\u6349\u8FD9\u4E9B\u9519\u8BEF\uFF1A",paraId:5,tocIndex:1},{value:"\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\uFF08dom \u4E8B\u4EF6\uFF09",paraId:6,tocIndex:1},{value:"\u5F02\u6B65\u4EE3\u7801 (e.g. setTimeout or requestAnimationFrame callbacks)",paraId:6,tocIndex:1},{value:"\u670D\u52A1\u7AEF\u7684\u6E32\u67D3\u4EE3\u7801",paraId:6,tocIndex:1},{value:"error boundaries \u81EA\u5DF1\u629B\u51FA\u7684\u9519\u8BEF",paraId:6,tocIndex:1},{value:"\u5F00\u53D1\u73AF\u5883\u76F4\u63A5\u629B\u51FA\u9519\u8BEF\uFF0C\u751F\u6210\u73AF\u5883\u751F\u6548",paraId:6,tocIndex:1}]}}]);
