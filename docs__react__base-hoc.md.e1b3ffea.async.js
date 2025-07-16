"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3623],{92104:function(r,e,n){n.r(e);var d=n(72269),l=n(93359),m=n(61788),E=n(19977),f=n(91558),t=n(24268),h=n(96057),c=n(85939),o=n(53683),i=n(80936),u=n(67294),s=n(53739),_=n(85893);function a(){return(0,_.jsx)(o.dY,{children:(0,_.jsx)(u.Suspense,{fallback:(0,_.jsx)(i.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"hoc-\u4E2D\u89E3\u51B3-ref-\u4F20\u9012\u95EE\u9898",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#hoc-\u4E2D\u89E3\u51B3-ref-\u4F20\u9012\u95EE\u9898",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"HOC \u4E2D\u89E3\u51B3 ref \u4F20\u9012\u95EE\u9898"]}),(0,_.jsx)(t.Z,{lang:"js",children:s.texts[0].value})]})})})})}e.default=a},53739:function(r,e,n){n.r(e),n.d(e,{texts:function(){return d}});const d=[{value:`// \u7ECF\u8FC7 forwardRef \u5904\u7406\u540E\u7684 HOC \uFF0C\u5C31\u53EF\u4EE5\u6B63\u5E38\u8BBF\u95EE\u5230 Index \u7EC4\u4EF6\u5B9E\u4F8B

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
