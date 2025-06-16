"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2195],{86533:function(t,d,n){n.r(d);var r=n(72269),o=n(93359),f=n(61788),m=n(19977),c=n(91558),a=n(24268),h=n(96057),x=n(85939),i=n(53683),u=n(80936),s=n(67294),_=n(11454),e=n(85893);function l(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(s.Suspense,{fallback:(0,e.jsx)(u.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"hooks-ref",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#hooks-ref",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Hooks Ref"]}),(0,e.jsx)("p",{children:_.texts[0].value}),(0,e.jsxs)("p",{children:[_.texts[1].value,(0,e.jsx)("br",{}),_.texts[2].value,(0,e.jsx)("br",{}),_.texts[3].value]}),(0,e.jsxs)("h3",{id:"\u6817\u5B50",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6817\u5B50",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6817\u5B50"]}),(0,e.jsx)(a.Z,{lang:"js",children:_.texts[4].value}),(0,e.jsxs)("h3",{id:"useimperativehandle-\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#useimperativehandle-\u63A5\u53D7\u4E09\u4E2A\u53C2\u6570",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"useImperativeHandle \u63A5\u53D7\u4E09\u4E2A\u53C2\u6570\uFF1A"]}),(0,e.jsxs)("ul",{children:[(0,e.jsx)("li",{children:_.texts[5].value}),(0,e.jsx)("li",{children:_.texts[6].value}),(0,e.jsx)("li",{children:_.texts[7].value})]})]})})})})}d.default=l},11454:function(t,d,n){n.r(d),n.d(d,{texts:function(){return r}});const r=[{value:"\u6211\u4EEC\u4E0D\u80FD\u5728\u51FD\u6570\u7EC4\u4EF6\u4E0A\u4F7F\u7528 ref \u5C5E\u6027\uFF0C\u56E0\u4E3A\u51FD\u6570\u7EC4\u4EF6\u6CA1\u6709\u5B9E\u4F8B",paraId:0,tocIndex:0},{value:`\u4F7F\u7528 useImperativeHandle \u81EA\u5B9A\u4E49\u4F20\u7ED9\u7236\u5143\u7D20\u7684 ref
\u4E3A\u4E86\u9632\u6B62\u9519\u7528/\u6EE5\u7528\u5BFC\u81F4 ref \u5931\u63A7\uFF0CReact \u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4E0D\u80FD\u8DE8\u7EC4\u4EF6\u4F20\u9012 ref`,paraId:1,tocIndex:0},{value:`
\u4E3A\u4E86\u7834\u9664\u8FD9\u79CD\u9650\u5236\uFF0C\u53EF\u4EE5\u4F7F\u7528 forwardRef\u3002`,paraId:1,tocIndex:0},{value:`
\u4E3A\u4E86\u51CF\u5C11 ref \u5BF9 DOM \u7684\u6EE5\u7528\uFF0C\u53EF\u4EE5\u4F7F\u7528 useImperativeHandle \u9650\u5236 ref \u4F20\u9012\u7684\u6570\u636E\u7ED3\u6784\u3002`,paraId:1,tocIndex:0},{value:`const MyInput = forwardRef((props, ref) => {
  const realInputRef = useRef(null);
  // \u51FD\u6570\u7EC4\u4EF6\u81EA\u5B9A\u4E49\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6ref\u5BF9\u8C61\uFF0C\u8FD9\u6837\u66F4\u5B89\u5168\u907F\u514D\u5916\u90E8\u4FEE\u6539\u5220\u9664dom
  useImperativeHandle(ref, () => ({
    funcFocus() {
      realInputRef.current.focus();
    },
  }));
  return <input {...props} ref={realInputRef} />;
});

const App = () => {
  const inputRef = React.useRef();
  React.useEffect(() => {
    inputRef.current.funcFocus();
  }, []);
  return <MyInput ref={inputRef} />;
};
`,paraId:2,tocIndex:1},{value:"\u7B2C\u4E00\u4E2A\u53C2\u6570 ref : \u63A5\u53D7 forWardRef \u4F20\u9012\u8FC7\u6765\u7684 ref \u3002",paraId:3,tocIndex:2},{value:"\u7B2C\u4E8C\u4E2A\u53C2\u6570 createHandle \uFF1A\u5904\u7406\u51FD\u6570\uFF0C\u8FD4\u56DE\u503C\u4F5C\u4E3A\u66B4\u9732\u7ED9\u7236\u7EC4\u4EF6\u7684 ref \u5BF9\u8C61\u3002",paraId:3,tocIndex:2},{value:"\u7B2C\u4E09\u4E2A\u53C2\u6570 deps :\u4F9D\u8D56\u9879 deps\uFF0C\u4F9D\u8D56\u9879\u66F4\u6539\u5F62\u6210\u65B0\u7684 ref \u5BF9\u8C61\u3002",paraId:3,tocIndex:2}]}}]);
