"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4813],{49088:function(d,a,e){e.r(a);var s=e(72269),l=e(93359),c=e(61788),p=e(19977),m=e(91558),r=e(24268),h=e(96057),x=e(85939),_=e(53683),o=e(80936),i=e(67294),t=e(73816),n=e(85893);function u(){return(0,n.jsx)(_.dY,{children:(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(o.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u5728-react-\u4E2D\u4F7F\u7528-typescript",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5728-react-\u4E2D\u4F7F\u7528-typescript",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5728 React \u4E2D\u4F7F\u7528 TypeScript"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://juejin.cn/post/7021674818621669389",target:"_blank",children:t.texts[0].value})}),(0,n.jsxs)("h3",{id:"\u7C7B\u7EC4\u4EF6",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7C7B\u7EC4\u4EF6",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u7C7B\u7EC4\u4EF6"]}),(0,n.jsx)("p",{children:t.texts[1].value}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[2].value}),(0,n.jsx)("p",{children:t.texts[3].value}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[4].value}),(0,n.jsxs)("h3",{id:"\u51FD\u6570\u7EC4\u4EF6",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u51FD\u6570\u7EC4\u4EF6",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u51FD\u6570\u7EC4\u4EF6"]}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[5].value}),(0,n.jsxs)("h3",{id:"\u4F7F\u7528-reactfc-\u58F0\u660E\u51FD\u6570\u7EC4\u4EF6\u548C\u666E\u901A\u58F0\u660E\u7684\u533A\u522B",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528-reactfc-\u58F0\u660E\u51FD\u6570\u7EC4\u4EF6\u548C\u666E\u901A\u58F0\u660E\u7684\u533A\u522B",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528 React.FC \u58F0\u660E\u51FD\u6570\u7EC4\u4EF6\u548C\u666E\u901A\u58F0\u660E\u7684\u533A\u522B"]}),(0,n.jsxs)("ul",{children:[(0,n.jsx)("li",{children:t.texts[6].value}),(0,n.jsx)("li",{children:t.texts[7].value}),(0,n.jsx)("li",{children:t.texts[8].value})]}),(0,n.jsxs)("h3",{id:"reactnode",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#reactnode",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"ReactNode"]}),(0,n.jsx)("p",{children:t.texts[9].value}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[10].value})]})})})})}a.default=u},73816:function(d,a,e){e.r(a),e.d(a,{texts:function(){return s}});const s=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"\u7C7B\u7EC4\u4EF6\u7684\u5B9A\u4E49\u5F62\u5F0F\u6709\u4E24\u79CD\uFF1AReact.Component<P, S={}> \u548C React.PureComponent<P, S={} SS={}>\uFF0C\u5B83\u4EEC\u90FD\u662F\u6CDB\u578B\u63A5\u53E3\uFF0C\u63A5\u6536\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u662F props \u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u7B2C\u4E8C\u4E2A\u662F state \u7C7B\u578B\u7684\u5B9A\u4E49\uFF0C\u8FD9\u4E24\u4E2A\u53C2\u6570\u90FD\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u6CA1\u6709\u65F6\u53EF\u4EE5\u7701\u7565\uFF1A",paraId:1,tocIndex:1},{value:`interface IProps {
  name: string;
}

interface IState {
  count: number;
}

class App extends React.Component<IProps, IState> {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        {this.state.count}
        {this.props.name}
      </div>
    );
  }
}

export default App;
`,paraId:2,tocIndex:1},{value:"\u6CDB\u578B",paraId:3,tocIndex:1},{value:`import React, { PureComponent, Component } from 'react';

class App extends PureComponent<IProps, IState> {}

class App extends Component<IProps, IState> {}

// \u5B9A\u4E49\u7EC4\u4EF6
class MyComponent<P> extends React.Component<P> {
  internalProp: P;
  constructor(props: P) {
    super(props);
    this.internalProp = props;
  }
  render() {
    return (
    	 <span>hello world</span>
    );
  }
}

// \u4F7F\u7528\u7EC4\u4EF6
type IProps = { name: string; age: number; };

<MyComponent<IProps> name="React" age={18} />;          // Success
<MyComponent<IProps> name="TypeScript" age="hello" />;  // Error

`,paraId:4,tocIndex:1},{value:`interface IProps {
  name: string;
}

const App = (props: IProps) => {
  const { name } = props;

  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{name}</h2>
    </div>
  );
};

export default App;

// FC

interface IProps {
  name: string
}

const App: React.FC<IProps> = (props) => {
  const {name} = props;
  return (
    <div className="App">
      <h1>hello world</h1>
      <h2>{name}</h2>
    </div>
  );
}

export default App;

// \u5B9A\u4E49\u7EC4\u4EF6
function MyComponent<P>(props: P) {
  return (
  	<span>
    	{props}
    </span>
  );
}

// \u4F7F\u7528\u7EC4\u4EF6
type IProps = { name: string; age: number; };

<MyComponent<IProps> name="React" age={18} />;          // Success
<MyComponent<IProps> name="TypeScript" age="hello" />;  // Error


`,paraId:5,tocIndex:2},{value:"React.FC \u663E\u5F0F\u5730\u5B9A\u4E49\u4E86\u8FD4\u56DE\u7C7B\u578B\uFF0C\u5176\u4ED6\u65B9\u5F0F\u662F\u9690\u5F0F\u63A8\u5BFC\u7684",paraId:6,tocIndex:3},{value:"React.FC \u5BF9\u9759\u6001\u5C5E\u6027\uFF1AdisplayName\u3001propTypes\u3001defaultProps \u63D0\u4F9B\u4E86\u7C7B\u578B\u68C0\u67E5\u548C\u81EA\u52A8\u8865\u5168",paraId:6,tocIndex:3},{value:"React.FC \u4E3A children \u63D0\u4F9B\u4E86\u9690\u5F0F\u7684\u7C7B\u578B\uFF08ReactElement | null\uFF09\u3002",paraId:6,tocIndex:3},{value:`ReactNode \u662F\u4E00\u4E2A\u8054\u5408\u7C7B\u578B\uFF0C\u5B83\u53EF\u4EE5\u662F string\u3001number\u3001ReactElement\u3001null\u3001boolean\u3001ReactNodeArray\u3002\u7531\u6B64\u53EF\u77E5\u3002ReactElement \u7C7B\u578B\u7684\u53D8\u91CF\u53EF\u4EE5\u76F4\u63A5\u8D4B\u503C\u7ED9 ReactNode \u7C7B\u578B\u7684\u53D8\u91CF\uFF0C\u4F46\u53CD\u8FC7\u6765\u662F\u4E0D\u884C\u7684\u3002
\u7C7B\u7EC4\u4EF6\u901A\u8FC7 render() \u8FD4\u56DE ReactNode \u7684\u503C\u3002`,paraId:7,tocIndex:4},{value:`/**
 * \u4E24\u8005\u7B49\u4EF7
 */
const jsx = <div>hello</div>;
const ele = React.createElement('div', null, 'hello');
`,paraId:8,tocIndex:4}]}}]);
