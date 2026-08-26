"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[139],{98420:function(r,e,n){n.r(e);var d=n(55804),l=n(33405),m=n(72700),E=n(84359),f=n(88738),t=n(77658),h=n(75968),c=n(33044),o=n(41047),i=n(10577),u=n(96540),s=n(49743),_=n(74848);function a(){return(0,_.jsx)(o.LO,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(i.A,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"hoc-\u4E2D\u89E3\u51B3-ref-\u4F20\u9012\u95EE\u9898",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#hoc-\u4E2D\u89E3\u51B3-ref-\u4F20\u9012\u95EE\u9898",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"HOC \u4E2D\u89E3\u51B3 ref \u4F20\u9012\u95EE\u9898"]}),(0,_.jsx)(t.A,{lang:"js",children:s.texts[0].value})]})})})})}e.default=a},49743:function(r,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:`// \u7ECF\u8FC7 forwardRef \u5904\u7406\u540E\u7684 HOC \uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u5230 Index \u7EC4\u4EF6\u5B9E\u4F8B

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
`,paraId:0,tocIndex:0}]}}]);
