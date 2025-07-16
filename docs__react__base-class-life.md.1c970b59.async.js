"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[613],{55288:function(s,o,t){t.r(o);var a=t(72269),p=t(93359),c=t(61788),_=t(19977),m=t(91558),r=t(24268),x=t(96057),v=t(85939),l=t(53683),d=t(80936),i=t(67294),e=t(90354),n=t(85893);function u(){return(0,n.jsx)(l.dY,{children:(0,n.jsx)(i.Suspense,{fallback:(0,n.jsx)(d.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u521D\u59CB\u5316\u9636\u6BB5",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u521D\u59CB\u5316\u9636\u6BB5",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u521D\u59CB\u5316\u9636\u6BB5"]}),(0,n.jsxs)("p",{children:[e.texts[0].value,(0,n.jsx)("br",{}),e.texts[1].value]}),(0,n.jsx)(r.Z,{lang:"js",children:e.texts[2].value}),(0,n.jsxs)("h2",{id:"\u66F4\u65B0\u9636\u6BB5",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u66F4\u65B0\u9636\u6BB5",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u66F4\u65B0\u9636\u6BB5"]}),(0,n.jsx)("p",{children:e.texts[3].value}),(0,n.jsx)("p",{children:e.texts[4].value}),(0,n.jsx)(r.Z,{lang:"js",children:e.texts[5].value}),(0,n.jsxs)("h2",{id:"\u9500\u6BC1\u9636\u6BB5",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u9500\u6BC1\u9636\u6BB5",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u9500\u6BC1\u9636\u6BB5"]}),(0,n.jsx)("p",{children:e.texts[6].value}),(0,n.jsx)(r.Z,{lang:"js",children:e.texts[7].value}),(0,n.jsxs)("h2",{id:"react-\u4E3A\u4EC0\u4E48\u8981\u5E9F\u5F03-componentwillmountcomponentwillreceivepropscomponentwillupdate-\u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u5B83\u4EEC\u6709\u54EA\u4E9B\u95EE\u9898\u5462react-\u53C8\u662F\u5982\u4F55\u89E3\u51B3\u7684\u5462",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#react-\u4E3A\u4EC0\u4E48\u8981\u5E9F\u5F03-componentwillmountcomponentwillreceivepropscomponentwillupdate-\u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u5B83\u4EEC\u6709\u54EA\u4E9B\u95EE\u9898\u5462react-\u53C8\u662F\u5982\u4F55\u89E3\u51B3\u7684\u5462",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"React \u4E3A\u4EC0\u4E48\u8981\u5E9F\u5F03 componentWillMount\u3001componentWillReceiveProps\u3001componentWillUpdate \u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF1F\u5B83\u4EEC\u6709\u54EA\u4E9B\u95EE\u9898\u5462\uFF1FReact \u53C8\u662F\u5982\u4F55\u89E3\u51B3\u7684\u5462\uFF1F"]}),(0,n.jsx)("p",{children:e.texts[8].value}),(0,n.jsx)("p",{children:e.texts[9].value}),(0,n.jsxs)("p",{children:[e.texts[10].value,(0,n.jsx)("br",{}),e.texts[11].value]}),(0,n.jsx)("p",{children:e.texts[12].value}),(0,n.jsx)("p",{children:e.texts[13].value}),(0,n.jsx)("p",{children:e.texts[14].value}),(0,n.jsx)("p",{children:e.texts[15].value}),(0,n.jsx)("p",{children:e.texts[16].value}),(0,n.jsx)("p",{children:e.texts[17].value}),(0,n.jsx)("p",{children:e.texts[18].value})]})})})})}o.default=u},90354:function(s,o,t){t.r(o),t.d(o,{texts:function(){return a}});const a=[{value:"\u6267\u884C\u987A\u5E8F\uFF1A",paraId:0,tocIndex:0},{value:`
constructor -> getDerivedStateFromProps / componentWillMount -> render -> componentDidMount`,paraId:0,tocIndex:0},{value:`class EEE extends React.Component {
  // 1
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      a: 1,
      name: '',
    };
  }
  // 2
  // \u4ECE\u66F4\u65B0\u540E\u7684props\u4E2D\u83B7\u53D6State\uFF0C\u5B83\u8BA9\u7EC4\u4EF6\u5728 props \u53D1\u751F\u6539\u53D8\u65F6\u66F4\u65B0\u5B83\u81EA\u8EAB\u7684\u5185\u90E8 state
  // \u5728\u6E32\u67D3 DOM \u5143\u7D20\u4E4B\u524D\u4F1A\u8C03\u7528\uFF0C\u5E76\u4E14\u5728\u521D\u59CB\u6302\u8F7D\u53CA\u540E\u7EED\u66F4\u65B0\u65F6\u90FD\u4F1A\u88AB\u8C03\u7528\u3002
  // \u8FD4\u56DE\u4FEE\u6539\u540E\u7684state
  // nextProps \u7236\u7EC4\u4EF6\u65B0\u4F20\u9012\u7684 props ;
  // prevState \u4F20\u5165 getDerivedStateFromProps \u5F85\u5408\u5E76\u7684 state \u3002
  // \u7C7B\u7684\u9759\u6001\u5C5E\u6027 \u8BBF\u95EE\u4E0D\u5230this
  // \u53EA\u8981\u7EC4\u4EF6\u66F4\u65B0\uFF0C\u5C31\u4F1A\u6267\u884C getDerivedStateFromProps\uFF0C\u4E0D\u7BA1\u662F props \u6539\u53D8\uFF0C\u8FD8\u662F setState \uFF0C\u6216\u662F forceUpdate \u3002

  static getDerivedStateFromProps(nextProps, preState) {
    console.log('nextProps', nextProps);
    console.log('preState', preState);
    console.log('getDerivedStateFromProps');
    return {
      name: nextProps.name,
    };
  }
  // 2
  // \u6709getDerivedStateFromProp\u6216getSnapshotBeforeUpdate\u65F6\u4E0D\u4F1A\u6267\u884C
  componentWillMount() {
    console.log('componentWillMount');
  }
  // 4
  // \u53EF\u4EE5\u505A\u4E00\u4E9B\u5173\u4E8E DOM \u64CD\u4F5C\uFF0C\u6BD4\u5982\u57FA\u4E8E DOM \u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u3002
  // \u5BF9\u4E8E\u521D\u59CB\u5316\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E\uFF0C\u6E32\u67D3\u89C6\u56FE\uFF0C\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u4E5F\u662F\u86EE\u5408\u9002\u7684\u3002
  componentDidMount() {
    console.log('componentDidMount');
  }

  //3
  render() {
    console.log('render');
    return (
      <div>
        {this.state.name}
        {this.state.a}
      </div>
    );
  }
}
export default () => {
  const ref1 = React.useRef(null);
  return (
    <EEE name="cq" ref={ref1}>
      hello
    </EEE>
  );
};
`,paraId:1,tocIndex:0},{value:"\u6267\u884C\u987A\u5E8F\uFF1A",paraId:2,tocIndex:1},{value:`componentWillReceiveProps( props \u6539\u53D8) / getDerivedStateFromProps -> shouldComponentUpdate ->
componentWillUpdate -> render -> getSnapshotBeforeUpdate -> componentDidUpdate`,paraId:3,tocIndex:1},{value:`class EEE extends React.Component {
  constructor() {
    console.log('constructor');
    super();
    this.state = {
      a: 1,
      name: '',
    };
  }
  // 1
  // \u4ECE\u66F4\u65B0\u540E\u7684props\u4E2D\u83B7\u53D6State\uFF0C\u5B83\u8BA9\u7EC4\u4EF6\u5728 props \u53D1\u751F\u6539\u53D8\u65F6\u66F4\u65B0\u5B83\u81EA\u8EAB\u7684\u5185\u90E8 state
  // \u5728\u6E32\u67D3 DOM \u5143\u7D20\u4E4B\u524D\u4F1A\u8C03\u7528\uFF0C\u5E76\u4E14\u5728\u521D\u59CB\u6302\u8F7D\u53CA\u540E\u7EED\u66F4\u65B0\u65F6\u90FD\u4F1A\u88AB\u8C03\u7528\u3002
  // \u8FD4\u56DE\u4FEE\u6539\u540E\u7684

  static getDerivedStateFromProps(nextProps, preState) {
    // console.log('nextProps', nextProps)
    // console.log('preState', preState)
    console.log('getDerivedStateFromProps');
    return {
      name: nextProps.name,
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }
  // 1
  // \u6CA1\u6709getDerivedStateFromProps\u65F6\u624D\u4F1A\u6267\u884C
  // componentWillReceiveProps \u53EF\u4EE5\u7528\u6765\u76D1\u542C\u7236\u7EC4\u4EF6\u662F\u5426\u6267\u884Crender,\u7236\u7EC4\u4EF6render\u6267\u884C\u5B50\u7EC4\u4EF6componentWillReceiveProps\u5C31\u4F1A\u6267\u884C
  // componentWillReceiveProps \u53EF\u4EE5\u7528\u6765\u63A5\u53D7 props \u6539\u53D8\uFF0C\u7EC4\u4EF6\u53EF\u4EE5\u6839\u636Eprops\u6539\u53D8\uFF0C\u6765\u51B3\u5B9A\u662F\u5426\u66F4\u65B0 state \uFF0C\u56E0\u4E3A\u53EF\u4EE5\u8BBF\u95EE\u5230 this \uFF0C
  // \u6240\u4EE5\u53EF\u4EE5\u5728\u5F02\u6B65\u6210\u529F\u56DE\u8C03(\u63A5\u53E3\u8BF7\u6C42\u6570\u636E)\u6539\u53D8 state \u3002
  // \u8FD9\u4E2A\u662F getDerivedStateFromProps \u4E0D\u80FD\u5B9E\u73B0\u7684\u3002

  componentWillReceiveProps() {
    console.log('componentWillReceiveProps');
  }

  // \u53EF\u4EE5\u505A\u4E00\u4E9B\u5173\u4E8E DOM \u64CD\u4F5C\uFF0C\u6BD4\u5982\u57FA\u4E8E DOM \u7684\u4E8B\u4EF6\u76D1\u542C\u5668\u3002
  // \u5BF9\u4E8E\u521D\u59CB\u5316\u5411\u670D\u52A1\u5668\u8BF7\u6C42\u6570\u636E\uFF0C\u6E32\u67D3\u89C6\u56FE\uFF0C\u8FD9\u4E2A\u751F\u547D\u5468\u671F\u4E5F\u662F\u86EE\u5408\u9002\u7684\u3002
  componentDidMount() {
    console.log('componentDidMount');
  }

  // 2
  // \u8FD4\u56DE\u503C\u51B3\u5B9A\u662F\u5426\u7EE7\u7EED\u6267\u884C render \u51FD\u6570
  // getDerivedStateFromProps \u7684\u8FD4\u56DE\u503C\u53EF\u4EE5\u4F5C\u4E3A\u65B0\u7684 state \uFF0C\u4F20\u9012\u7ED9 shouldComponentUpdate \u3002
  // shouldComponentUpdate \u4E0D\u5199return \u76F8\u5F53\u4E8E\u8FD4\u56DEfasle \u9ED8\u8BA4\u8FD4\u56DEfasle
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  // 3 \u672A\u6267\u884C \u4E0D\u77E5\u9053\u4E3A\u5565
  // \u53EF\u4EE5\u610F\u5473\u7740\u5728\u66F4\u65B0\u4E4B\u524D\uFF0C\u6B64\u65F6\u7684 DOM \u8FD8\u6CA1\u6709\u66F4\u65B0\u3002
  // \u5728\u8FD9\u91CC\u53EF\u4EE5\u505A\u4E00\u4E9B\u83B7\u53D6 DOM \u7684\u64CD\u4F5C\u3002\u5C31\u6BD4\u5982\u8BF4\u5728\u4E00\u6B21\u66F4\u65B0\u4E2D\uFF0C
  // \u4FDD\u5B58 DOM \u4E4B\u524D\u7684\u4FE1\u606F(\u8BB0\u5F55\u4E0A\u4E00\u6B21\u4F4D\u7F6E)\u3002\u4F46\u662F React \u5DF2\u7ECF\u51FA\u4E86\u65B0\u7684\u751F\u547D\u5468\u671F getSnapshotBeforeUpdate \u6765\u4EE3\u66FF
  //  UNSAFE_componentWillUpdate\u3002
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }

  // 5
  // \u83B7\u53D6\u66F4\u65B0\u524D\u7684\u5FEB\u7167\uFF0C\u53EF\u4EE5\u8FDB\u4E00\u6B65\u7406\u89E3\u4E3A \u83B7\u53D6\u66F4\u65B0\u524D DOM \u7684\u72B6\u6001
  // getSnapshotBeforeUpdate \u8FD9\u4E2A\u751F\u547D\u5468\u671F\u610F\u4E49\u5C31\u662F\u914D\u5408componentDidUpdate \u4E00\u8D77\u4F7F\u7528\uFF0C
  // \u8BA1\u7B97\u5F62\u6210\u4E00\u4E2A snapShot \u4F20\u9012\u7ED9 componentDidUpdate\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570 \u3002\u4FDD\u5B58\u4E00\u6B21\u66F4\u65B0\u524D\u7684\u4FE1\u606F\u3002
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
  }
  // 6
  // componentDidUpdate \u751F\u547D\u5468\u671F\u6267\u884C\uFF0C\u6B64\u65F6 DOM \u5DF2\u7ECF\u66F4\u65B0\uFF0C\u53EF\u4EE5\u76F4\u63A5\u83B7\u53D6 DOM \u6700\u65B0\u72B6\u6001\u3002
  // \u8FD9\u4E2A\u51FD\u6570\u91CC\u9762\u5982\u679C\u60F3\u8981\u4F7F\u7528 setState \uFF0C\u4E00\u5B9A\u8981\u52A0\u4EE5\u9650\u5236\uFF0C\u5426\u5219\u4F1A\u5F15\u8D77\u65E0\u9650\u5FAA\u73AF\u3002
  // \u63A5\u53D7 getSnapshotBeforeUpdate \u4FDD\u5B58\u7684\u5FEB\u7167\u4FE1\u606F\u3002 \u7B2C\u4E09\u4E2A\u53C2\u6570
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  // 4
  render() {
    console.log('render');
    return (
      <div>
        {this.state.name}
        {this.state.a}
      </div>
    );
  }
}
export default () => {
  const ref1 = React.useRef(null);
  const [name, setMame] = React.useState('cq');
  return (
    <div>
      <EEE name={name} ref={ref1}></EEE>
      <button
        onClick={() => {
          setMame('ww');
        }}
      >
        \u70B9\u51FB
      </button>
    </div>
  );
};

// \uFF5C--------\u95EE\u4E0E\u7B54---------\uFF5C
// \u95EE\uFF1A\u5F53 props \u4E0D\u53D8\u7684\u524D\u63D0\u4E0B\uFF0C PureComponent \u7EC4\u4EF6\u80FD\u5426\u963B\u6B62 componentWillReceiveProps \u6267\u884C\uFF1F

// \u7B54\u6848\u662F\u5426\u5B9A\u7684\uFF0CcomponentWillReceiveProps \u751F\u547D\u5468\u671F\u7684\u6267\u884C\uFF0C\u548C\u7EAF\u7EC4\u4EF6\u6CA1\u6709\u5173\u7CFB\uFF0C
// \u7EAF\u7EC4\u4EF6\u662F\u5728 componentWillReceiveProps \u6267\u884C\u4E4B\u540E\u6D45\u6BD4\u8F83 props \u662F\u5426\u53D1\u751F\u53D8\u5316\u3002
// \u6240\u4EE5 PureComponent \u4E0B\u4E0D\u4F1A\u963B\u6B62\u8BE5\u751F\u547D\u5468\u671F\u7684\u6267\u884C\u3002

// \uFF5C--------end---------\uFF5C
`,paraId:4,tocIndex:1},{value:"componentWillUnmount",paraId:5,tocIndex:2},{value:`class EEE extends React.Component {
  constructor() {
    super();
    this.state = {
      a: 1,
      name: '',
    };
  }

  // componentWillUnmount \u662F\u7EC4\u4EF6\u9500\u6BC1\u9636\u6BB5\u552F\u4E00\u6267\u884C\u7684\u751F\u547D\u5468\u671F\uFF0C\u4E3B\u8981\u505A\u4E00\u4E9B\u6536\u5C3E\u5DE5\u4F5C
  // \u6BD4\u5982\u6E05\u9664\u4E00\u4E9B\u53EF\u80FD\u9020\u6210\u5185\u5B58\u6CC4\u6F0F\u7684\u5B9A\u65F6\u5668\uFF0C\u5EF6\u65F6\u5668\uFF0C\u6216\u8005\u662F\u4E00\u4E9B\u4E8B\u4EF6\u76D1\u542C\u5668\u3002
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  render() {
    console.log('render');
    return (
      <div>
        {this.state.name}
        {this.state.a}
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
  }

  c = () => {
    this.setState({
      show: false,
    });
  };
  render() {
    return (
      <div>
        {this.state.show && <EEE />}
        <button onClick={this.c}>\u70B9\u51FB</button>
      </div>
    );
  }
}

export default App;
`,paraId:6,tocIndex:2},{value:"React \u5728 16.3 \u7248\u672C\u4E2D\uFF1A",paraId:7,tocIndex:3},{value:"\u5C06 componentWillMount\u3001componentWillReceiveProps\u3001componentWillUpdate \u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u52A0\u4E0A\u4E86 UNSAFE \u524D\u7F00\uFF0C\u53D8\u4E3A:",paraId:8,tocIndex:3},{value:`UNSAFE_componentWillMount\u3001UNSAFE_componentWillReceiveProps \u548C UNSAFE_componentWillUpdate\u3002
\u5E76\u5F15\u5165\u4E86\u4E00\u4E2A\u65B0\u7684\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF1AgetDerivedStateFromProps\u3002`,paraId:9,tocIndex:3},{value:`
\u5E76\u5728 17.0 \u4EE5\u53CA\u4E4B\u540E\u7684\u7248\u672C\u4E2D\uFF1A`,paraId:9,tocIndex:3},{value:`\u5220\u9664\u4E86 componentWillMount\u3001componentWillReceiveProps\u3001componentWillUpdate \u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u3002
\u4E0D\u8FC7 UNSAFE_componentWillMount\u3001UNSAFE_componentWillReceiveProps \u548C UNSAFE_componentWillUpdate \u8FD8\u662F\u53EF\u4EE5\u7528\u7684\u3002
\u6211\u4EEC\u77E5\u9053 React \u7684\u66F4\u65B0\u6D41\u7A0B\u5206\u4E3A\uFF1Arender \u9636\u6BB5\u548C commit \u9636\u6BB5\u3002`,paraId:10,tocIndex:3},{value:"componentWillMount\u3001componentWillReceiveProps\u3001componentWillUpdate \u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\u90FD\u662F\u5728 render \u9636\u6BB5\u6267\u884C\u7684\u3002",paraId:11,tocIndex:3},{value:"\u5728 fiber \u67B6\u6784\u88AB\u5E94\u7528\u4E4B\u524D\uFF0Crender \u9636\u6BB5\u662F\u4E0D\u80FD\u88AB\u6253\u65AD\u7684\u3002\u5F53\u9875\u9762\u9010\u6E10\u590D\u6742\u4E4B\u540E\uFF0C\u5C31\u6709\u53EF\u80FD\u4F1A\u963B\u585E\u9875\u9762\u7684\u6E32\u67D3\uFF0C\u4E8E\u662F React \u63A8\u51FA\u4E86 fiber \u67B6\u6784\u3002\u5728\u5E94\u7528 fiber \u67B6\u6784\u4E4B\u540E\uFF0C\u4F4E\u4F18\u5148\u7EA7\u4EFB\u52A1\u7684 render \u9636\u6BB5\u53EF\u4EE5\u88AB\u9AD8\u4F18\u5148\u7EA7\u4EFB\u52A1\u6253\u65AD\u3002",paraId:12,tocIndex:3},{value:"\u800C\u8FD9\u5BFC\u81F4\u7684\u95EE\u9898\u5C31\u662F\uFF1A\u5728 render \u9636\u6BB5\u6267\u884C\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\u53EF\u80FD\u88AB\u6267\u884C\u591A\u6B21\u3002",paraId:13,tocIndex:3},{value:"componentWillMount\u3001componentWillReceiveProps\u3001componentWillUpdate \u8FD9\u4E09\u4E2A\u751F\u547D\u5468\u671F\u94A9\u5B50\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u5176\u4E2D\u6267\u884C\u4E00\u4E9B\u5177\u6709\u526F\u4F5C\u7528\u7684\u64CD\u4F5C\uFF0C\u4F8B\u5982\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u5C31\u6709\u53EF\u80FD\u5BFC\u81F4\u4E00\u4E2A\u540C\u6837\u7684\u7F51\u7EDC\u8BF7\u6C42\u88AB\u6267\u884C\u591A\u6B21\uFF0C\u8FD9\u663E\u7136\u4E0D\u662F\u6211\u4EEC\u60F3\u770B\u5230\u7684\u3002",paraId:14,tocIndex:3},{value:"\u800C React \u53C8\u6CA1\u6CD5\u5F3A\u8FEB\u5F00\u53D1\u8005\u4E0D\u53BB\u8FD9\u6837\u505A\uFF0C\u56E0\u4E3A\u600E\u4E48\u6837\u4F7F\u7528 React \u662F\u5F00\u53D1\u8005\u7684\u81EA\u7531\uFF0C\u6240\u4EE5 React \u5C31\u65B0\u589E\u4E86\u4E00\u4E2A\u9759\u6001\u7684\u751F\u547D\u5468\u671F getDerivedStateFromProps\uFF0C\u6765\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\u3002",paraId:15,tocIndex:3},{value:"\u7528\u4E00\u4E2A\u9759\u6001\u51FD\u6570 getDerivedStateFromProps \u6765\u53D6\u4EE3\u88AB\u5E9F\u5F03\u7684\u51E0\u4E2A\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u8FD9\u6837\u5F00\u53D1\u8005\u5C31\u65E0\u6CD5\u901A\u8FC7 this \u83B7\u53D6\u5230\u7EC4\u4EF6\u7684\u5B9E\u4F8B\uFF0C\u4E5F\u4E0D\u80FD\u53D1\u9001\u7F51\u7EDC\u8BF7\u6C42\u4EE5\u53CA\u8C03\u7528 this.setState\u3002\u5B83\u5C31\u662F\u5F3A\u5236\u5F00\u53D1\u8005\u5728 render \u4E4B\u524D\u53EA\u505A\u65E0\u526F\u4F5C\u7528\u7684\u64CD\u4F5C\uFF0C\u95F4\u63A5\u5F3A\u5236\u6211\u4EEC\u65E0\u6CD5\u8FDB\u884C\u8FD9\u4E9B\u4E0D\u5408\u7406\u4E0D\u89C4\u8303\u7684\u64CD\u4F5C\uFF0C\u4ECE\u800C\u907F\u514D\u5BF9\u751F\u547D\u5468\u671F\u7684\u6EE5\u7528\u3002",paraId:16,tocIndex:3}]}}]);
