"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[139],{98420:(function(r,e,_){_.r(e);var d=_(55804),l=_(33405),m=_(67700),E=_(84359),f=_(88738),t=_(5412),h=_(75968),c=_(33044),o=_(54314),i=_(10577),s=_(96540),u=_(49743),n=_(74848);function a(){return(0,n.jsx)(o.LO,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(i.A,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"hoc-\u4E2D\u89E3\u51B3-ref-\u4F20\u9012\u95EE\u9898",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#hoc-\u4E2D\u89E3\u51B3-ref-\u4F20\u9012\u95EE\u9898",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"HOC \u4E2D\u89E3\u51B3 ref \u4F20\u9012\u95EE\u9898"]}),(0,n.jsx)(t.A,{lang:"js",children:u.texts[0].value})]})})})})}e.default=a}),49743:(function(r,e,_){_.r(e);const d=[{value:`// \u7ECF\u8FC7 forwardRef \u5904\u7406\u540E\u7684 HOC \uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u5230 Index \u7EC4\u4EF6\u5B9E\u4F8B

import { useRef, useEffect } from 'react';

function HOC(Component) {
  class Wrap extends React.Component {
    render() {
      const { forwardedRef, ...otherprops } = this.props;
      return <Component ref={forwardedRef} {...otherprops} />;
    }
  }
  return React.forwardRef((props, ref) => (
    <Wrap forwardedRef={ref} {...props} />
  ));
}
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 1 };
  }
  render() {
    return <div>hello,world</div>;
  }
}
const HocIndex = HOC(Index);
export default () => {
  const node = useRef(null);
  useEffect(() => {
    console.log(node.current); /* Index \u7EC4\u4EF6\u5B9E\u4F8B  */
  }, []);
  return (
    <div>
      <HocIndex ref={node} />
    </div>
  );
};
`,paraId:0,tocIndex:0}];_.d(e,["texts",0,d])})}]);
