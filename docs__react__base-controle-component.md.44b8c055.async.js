"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1178],{56173:function(u,_,n){n.r(_);var t=n(72269),l=n(93359),m=n(61788),h=n(19977),E=n(91558),i=n(24268),v=n(96057),D=n(85939),r=n(53683),d=n(80936),s=n(67294),a=n(50178),e=n(85893);function o(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(s.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u53D7\u63A7\u7EC4\u4EF6\u548C\u975E\u53D7\u63A7\u7EC4\u4EF6"]}),(0,e.jsx)(i.Z,{lang:"js",children:a.texts[0].value})]})})})})}_.default=o},50178:function(u,_,n){n.r(_),n.d(_,{texts:function(){return t}});const t=[{value:`/**
 * https://segmentfault.com/a/1190000040308582
 * \u503C\u7531 React \u63A7\u5236\u7684\u8F93\u5165\u8868\u5355\u5143\u7D20\u79F0\u4E3A\u201C\u53D7\u63A7\u7EC4\u4EF6\u201D\u3002
 */

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
    };
  }

  render() {
    const { username } = this.state;

    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="username">
            \u7528\u6237\u540D:
            <input
              type="text"
              id="username"
              onChange={(e) => this.handleUsernameChange(e)}
              value={username}
            />
          </label>
          <input type="submit" value="\u63D0\u4EA4" />
        </form>
      </div>
    );
  }

  handleUsernameChange(event) {
    this.setState({
      username: event.target.value,
    });
  }

  handleSubmit(event) {
    console.log(this.state.username);
    event.preventDefault();
  }
}

/**
 * \u975E\u201C\u53D7\u63A7\u7EC4\u4EF6\u201D\u3002
 */

class App extends PureComponent {
  constructor(props) {
    super(props);

    this.usernameRef = createRef();
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <label htmlFor="">
            \u7528\u6237:
            <input
              defaultValue="username"
              type="text"
              name="username"
              ref={this.usernameRef}
            />
          </label>
          <input type="submit" value="\u63D0\u4EA4" />
        </form>
      </div>
    );
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log(this.usernameRef.current.value);
  }
}
`,paraId:0,tocIndex:0}]}}]);
