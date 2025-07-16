"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[5242],{92965:function(r,d,n){n.r(d);var t=n(72269),l=n(93359),m=n(61788),E=n(19977),x=n(91558),o=n(24268),c=n(96057),h=n(85939),s=n(53683),i=n(80936),a=n(67294),e=n(19696),_=n(85893);function u(){return(0,_.jsx)(s.dY,{children:(0,_.jsx)(a.Suspense,{fallback:(0,_.jsx)(i.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u7C7B\u7EC4\u4EF6\u7684\u7EE7\u627F",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7C7B\u7EC4\u4EF6\u7684\u7EE7\u627F",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u7C7B\u7EC4\u4EF6\u7684\u7EE7\u627F"]}),(0,_.jsx)(o.Z,{lang:"js",children:e.texts[0].value}),(0,_.jsx)("p",{children:e.texts[1].value}),(0,_.jsxs)("p",{children:[e.texts[2].value,(0,_.jsx)("br",{}),e.texts[3].value,(0,_.jsx)("br",{}),e.texts[4].value,(0,_.jsx)("br",{}),e.texts[5].value]})]})})})})}d.default=u},19696:function(r,d,n){n.r(d),n.d(d,{texts:function(){return t}});const t=[{value:`/* \u4EBA\u7C7B */
class Person extends React.Component {
  constructor(props) {
    super(props);
    console.log('hello , i am person');
  }
  componentDidMount() {
    console.log(1111);
  }
  eat() {
    /* \u5403\u996D */
  }
  sleep() {
    /* \u7761\u89C9 */
  }
  ddd() {
    console.log('\u6253\u8C46\u8C46'); /* \u6253\u8C46\u8C46 */
  }
  render() {
    return <div>\u5927\u5BB6\u597D\uFF0C\u6211\u662F\u4E00\u4E2Aperson</div>;
  }
}
/* \u7A0B\u5E8F\u5458 */
class Programmer extends Person {
  constructor(props) {
    super(props);
    console.log('hello , i am Programmer too');
  }
  componentDidMount() {
    super.eat();
  }
  code() {
    /* \u6572\u4EE3\u7801 */
  }
  render() {
    return (
      <div style={{ marginTop: '50px' }}>
        {super.render()} {/* \u8BA9 Person \u4E2D\u7684 render \u6267\u884C */}
        \u6211\u8FD8\u662F\u4E00\u4E2A\u7A0B\u5E8F\u5458\uFF01 {/* \u6DFB\u52A0\u81EA\u5DF1\u7684\u5185\u5BB9 */}
      </div>
    );
  }
}
`,paraId:0,tocIndex:0},{value:"\u6211\u4EEC\u4ECE\u4E0A\u9762\u4E0D\u96BE\u53D1\u73B0\u8FD9\u4E2A\u7EE7\u627F\u589E\u5F3A\u6548\u679C\u5F88\u4F18\u79C0\u3002\u5B83\u7684\u4F18\u52BF\u5982\u4E0B\uFF1A",paraId:1,tocIndex:0},{value:"\u53EF\u4EE5\u63A7\u5236\u7236\u7C7B render\uFF0C\u8FD8\u53EF\u4EE5\u6DFB\u52A0\u4E00\u4E9B\u5176\u4ED6\u7684\u6E32\u67D3\u5185\u5BB9\uFF1B",paraId:2,tocIndex:0},{value:`
\u53EF\u4EE5\u5171\u4EAB\u7236\u7C7B\u65B9\u6CD5\uFF0C\u8FD8\u53EF\u4EE5\u6DFB\u52A0\u989D\u5916\u7684\u65B9\u6CD5\u548C\u5C5E\u6027\u3002`,paraId:2,tocIndex:0},{value:`
\u4F46\u662F\u4E5F\u6709\u503C\u5F97\u6CE8\u610F\u7684\u5730\u65B9\uFF0C\u5C31\u662F state \u548C\u751F\u547D\u5468\u671F\u4F1A\u88AB\u7EE7\u627F\u540E\u7684\u7EC4\u4EF6\u4FEE\u6539\u3002`,paraId:2,tocIndex:0},{value:`
\u50CF\u4E0A\u8FF0 demo \u4E2D\uFF0CPerson \u7EC4\u4EF6\u4E2D\u7684 componentDidMount \u751F\u547D\u5468\u671F\u5C06\u4E0D\u4F1A\u88AB\u6267\u884C\u3002`,paraId:2,tocIndex:0}]}}]);
