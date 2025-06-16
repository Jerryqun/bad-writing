"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7328],{60314:function(i,_,n){n.r(_);var r=n(72269),m=n(93359),u=n(61788),h=n(19977),C=n(91558),t=n(24268),c=n(96057),p=n(85939),d=n(53683),o=n(80936),a=n(67294),s=n(52650),e=n(85893);function l(){return(0,e.jsx)(d.dY,{children:(0,e.jsx)(a.Suspense,{fallback:(0,e.jsx)(o.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"props-children",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#props-children",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"props children"]}),(0,e.jsx)(t.Z,{lang:"js",children:s.texts[0].value})]})})})})}_.default=l},52650:function(i,_,n){n.r(_),n.d(_,{texts:function(){return r}});const r=[{value:`/**
 
props + children \u6A21\u5F0F \u5728 React \u4E2D\u975E\u5E38\u5E38\u7528\uFF0C\u5C24\u5176\u5BF9\u4E00\u4E9B\u4F18\u79C0\u5F00\u6E90\u7EC4\u4EF6\u5E93\u3002
\u6BD4\u5982 react-router \u4E2D\u7684 Switch \u548C Route \uFF0C antd \u4E2D\u7684 Form \u548C FormItem\u3002
\u9996\u5148\u6765\u770B\u770B prop + children \u7684\u51E0\u4E2A\u57FA\u672C\u60C5\u51B5\u3002

\u2460 props \u63D2\u69FD\u7EC4\u4EF6

<Container>
    <Children>
</Container>

\u4E0A\u8FF0\u53EF\u4EE5\u5728 Container \u7EC4\u4EF6\u4E2D\uFF0C\u901A\u8FC7 props.children \u5C5E\u6027\u8BBF\u95EE\u5230 Children \u7EC4\u4EF6\uFF0C\u4E3A React element \u5BF9\u8C61\u3002

\u4F5C\u7528\uFF1A

1 \u53EF\u4EE5\u6839\u636E\u9700\u8981\u63A7\u5236 Children \u662F\u5426\u6E32\u67D3\u3002

2 \u50CF\u4E0A\u4E00\u8282\u6240\u8BF4\u7684\uFF0C Container \u53EF\u4EE5\u7528 React.cloneElement \u5F3A\u5316 props (\u6DF7\u5165\u65B0\u7684 props )\uFF0C\u6216\u8005\u4FEE\u6539 Children \u7684\u5B50\u5143\u7D20\u3002


\u2461 render props\u6A21\u5F0F

<Container>
   { (ContainerProps)=> <Children {...ContainerProps}  /> }
</Container>
\u8FD9\u79CD\u60C5\u51B5\uFF0C\u5728 Container \u4E2D\uFF0C props.children \u5C5E\u6027\u8BBF\u95EE\u5230\u662F\u51FD\u6570\uFF0C\u5E76\u4E0D\u662F React element \u5BF9\u8C61\uFF0C\u9488\u5BF9\u8FD9\u79CD\u60C5\u51B5\uFF0C
\u50CF\u4E0B\u9762\u8FD9\u79CD\u60C5\u51B5\u4E0B children \u662F\u4E0D\u80FD\u76F4\u63A5\u6E32\u67D3\u7684\uFF0C\u76F4\u63A5\u6E32\u67D3\u4F1A\u62A5\u9519\u3002

\u6539\u6210\u5982\u4E0B\u65B9\u5F0F\uFF0C\u5C31\u53EF\u4EE5\u4E86\u3002

function  Container(props) {
    const  ContainerProps = {
        name: 'alien',
        mes:'let us learn react'
    }
     return  props.children(ContainerProps)
}

\u8FD9\u79CD\u65B9\u5F0F\u4F5C\u7528\u662F\uFF1A

1 \u6839\u636E\u9700\u8981\u63A7\u5236 Children \u6E32\u67D3\u4E0E\u5426\u3002
2 \u53EF\u4EE5\u5C06\u9700\u8981\u4F20\u7ED9 Children \u7684 props \u76F4\u63A5\u901A\u8FC7\u51FD\u6570\u53C2\u6570\u7684\u65B9\u5F0F\u4F20\u9012\u7ED9\u6267\u884C\u51FD\u6570 children \u3002

 */

// \u4E0B\u9762\u4E3A\u6DF7\u5408\u6A21\u5F0F\u7684\u5904\u7406\u65B9\u5F0F

const Children = (props) => (
  <div>
    <div>hello, my name is {props.name} </div>
    <div> {props.mes} </div>
  </div>
);

function Container(props) {
  const ContainerProps = {
    name: 'alien',
    mes: 'let us learn react',
  };
  return props.children.map((item) => {
    if (React.isValidElement(item)) {
      // \u5224\u65AD\u662F react elment  \u6DF7\u5165 props
      return React.cloneElement(
        item,
        { ...ContainerProps },
        item.props.children,
      );
    } else if (typeof item === 'function') {
      return item(ContainerProps);
    } else return null;
  });
}

const Index = () => {
  return (
    <Container>
      <Children />
      {(ContainerProps) => <Children {...ContainerProps} name={'haha'} />}
    </Container>
  );
};
`,paraId:0,tocIndex:0}]}}]);
