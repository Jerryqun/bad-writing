"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7403],{92376:function(r,o,n){n.r(o);var u=n(72269),_=n(93359),c=n(61788),m=n(19977),x=n(91558),a=n(24268),h=n(96057),b=n(85939),s=n(53683),d=n(80936),i=n(67294),t=n(48941),e=n(85893);function l(){return(0,e.jsx)(s.dY,{children:(0,e.jsx)(i.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"usememo-\u4E0E-usecallback",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usememo-\u4E0E-usecallback",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"useMemo \u4E0E useCallback"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{target:"_blank",href:"https://juejin.cn/post/7165338403465068552",children:t.texts[0].value})}),(0,e.jsx)(a.Z,{lang:"js",children:t.texts[1].value}),(0,e.jsx)("p",{children:t.texts[2].value}),(0,e.jsxs)("h3",{id:"usememo-\u539F\u7406",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usememo-\u539F\u7406",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"useMemo \u539F\u7406\uFF1A"]}),(0,e.jsx)("p",{children:t.texts[3].value}),(0,e.jsx)("p",{children:t.texts[4].value}),(0,e.jsx)("p",{children:t.texts[5].value}),(0,e.jsxs)("h3",{id:"\u6848\u4F8B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6848\u4F8B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u6848\u4F8B"]}),(0,e.jsx)(a.Z,{lang:"js",children:t.texts[6].value}),(0,e.jsxs)("h3",{id:"\u81EA\u5B9A\u4E49-hooks",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u81EA\u5B9A\u4E49-hooks",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u81EA\u5B9A\u4E49 hooks"]}),(0,e.jsx)("p",{children:t.texts[7].value}),(0,e.jsx)(a.Z,{lang:"js",children:t.texts[8].value}),(0,e.jsxs)("h3",{id:"\u5185\u90E8-context-providers",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5185\u90E8-context-providers",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5185\u90E8 context providers"]}),(0,e.jsx)(a.Z,{lang:"js",children:t.texts[9].value}),(0,e.jsxs)("h2",{id:"reactmemo-\u7528\u6CD5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#reactmemo-\u7528\u6CD5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"React.memo \u7528\u6CD5"]}),(0,e.jsx)(a.Z,{lang:"js",children:t.texts[10].value}),(0,e.jsx)("p",{children:t.texts[11].value}),(0,e.jsx)(a.Z,{lang:"js",children:t.texts[12].value})]})})})})}o.default=l},48941:function(r,o,n){n.r(o),n.d(o,{texts:function(){return u}});const u=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:`React.useCallback(function helloWorld() {}, []);
// ...\u529F\u80FD\u76F8\u5F53\u4E8E:
React.useMemo(() => function helloWorld() {}, []);
`,paraId:1,tocIndex:0},{value:"useCallback \u7B2C\u4E00\u4E2A\u53C2\u6570\u5C31\u662F\u7F13\u5B58\u7684\u5185\u5BB9\uFF0CuseMemo \u9700\u8981\u6267\u884C\u7B2C\u4E00\u4E2A\u51FD\u6570\uFF0C\u8FD4\u56DE\u503C\u4E3A\u7F13\u5B58\u7684\u5185\u5BB9\uFF0C\u6BD4\u8D77 useCallback \uFF0C useMemo \u66F4\u50CF\u662F\u7F13\u5B58\u4E86\u4E00\u6BB5\u903B\u8F91\uFF0C\u6216\u8005\u8BF4\u6267\u884C\u8FD9\u6BB5\u903B\u8F91\u83B7\u53D6\u7684\u7ED3\u679C\u3002\u90A3\u4E48\u5BF9\u4E8E\u7F13\u5B58 element \u7528 useCallback \u53EF\u4EE5\u5417\uFF0C\u7B54\u6848\u662F\u5F53\u7136\u53EF\u4EE5\u4E86\u3002",paraId:2,tocIndex:0},{value:"useMemo \u4F1A\u8BB0\u5F55\u4E0A\u4E00\u6B21\u6267\u884C create \u7684\u8FD4\u56DE\u503C\uFF0C\u5E76\u628A\u5B83\u7ED1\u5B9A\u5728\u51FD\u6570\u7EC4\u4EF6\u5BF9\u5E94\u7684 fiber \u5BF9\u8C61\u4E0A\uFF0C\u53EA\u8981\u7EC4\u4EF6\u4E0D\u9500\u6BC1\uFF0C\u7F13\u5B58\u503C\u5C31\u4E00\u76F4\u5B58\u5728\uFF0C\u4F46\u662F deps \u4E2D\u5982\u679C\u6709\u4E00\u9879\u6539\u53D8\uFF0C\u5C31\u4F1A\u91CD\u65B0\u6267\u884C create \uFF0C\u8FD4\u56DE\u503C\u4F5C\u4E3A\u65B0\u7684\u503C\u8BB0\u5F55\u5230 fiber \u5BF9\u8C61\u4E0A\u3002",paraId:3,tocIndex:1},{value:"\u5982\u4E0A\u8BB2\u4E86\u5229\u7528 element \u7684\u7F13\u5B58\uFF0C\u5B9E\u73B0\u4E86\u63A7\u5236\u5B50\u7EC4\u4EF6\u4E0D\u5FC5\u8981\u7684\u6E32\u67D3\uFF0C\u7A76\u5176\u539F\u7406\u662F\u4EC0\u4E48\u5462\uFF1F",paraId:4,tocIndex:1},{value:"\u539F\u7406\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u4E0A\u8FF0\u6BCF\u6B21\u6267\u884C render \u672C\u8D28\u4E0A createElement \u4F1A\u4EA7\u751F\u4E00\u4E2A\u65B0\u7684 props\uFF0C\u8FD9\u4E2A props \u5C06\u4F5C\u4E3A\u5BF9\u5E94 fiber \u7684 pendingProps \uFF0C\u5728\u6B64 fiber \u66F4\u65B0\u8C03\u548C\u9636\u6BB5\uFF0CReact \u4F1A\u5BF9\u6BD4 fiber \u4E0A\u8001 oldProps \u548C\u65B0\u7684 newProp \uFF08 pendingProps \uFF09\u662F\u5426\u76F8\u7B49\uFF0C\u5982\u679C\u76F8\u7B49\u51FD\u6570\u7EC4\u4EF6\u5C31\u4F1A\u653E\u5F03\u5B50\u7EC4\u4EF6\u7684\u8C03\u548C\u66F4\u65B0\uFF0C\u4ECE\u800C\u5B50\u7EC4\u4EF6\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF1B\u5982\u679C\u4E0A\u8FF0\u628A element \u5BF9\u8C61\u7F13\u5B58\u8D77\u6765\uFF0C\u4E0A\u9762 props \u4E5F\u5C31\u548C fiber \u4E0A oldProps \u6307\u5411\u76F8\u540C\u7684\u5185\u5B58\u7A7A\u95F4\uFF0C\u4E5F\u5C31\u662F\u76F8\u7B49\uFF0C\u4ECE\u800C\u8DF3\u8FC7\u4E86\u672C\u6B21\u66F4\u65B0\u3002",paraId:5,tocIndex:1},{value:`const functionOne = function () {
  return 5;
};
const functionTwo = function () {
  return 5;
};

console.log(functionOne === functionTwo); // false

React.useCallback(function helloWorld() {}, []);

// ...\u529F\u80FD\u76F8\u5F53\u4E8E:
React.useMemo(() => function helloWorld() {}, []);
`,paraId:6,tocIndex:2},{value:"useToggle \u6E90\u7801",paraId:7,tocIndex:3},{value:`export const useToggle = (initialValue) => {
  const [value, setValue] = React.useState(initialValue);
  const toggle = React.useCallback(() => setValue((v) => !v), []);
  return [value, toggle];
};
`,paraId:8,tocIndex:3},{value:`const AuthContext = React.createContext({});

function AuthProvider({ user, status, forgotPwLink, children }) {
  const memoizedValue = React.useMemo(() => {
    return {
      user,
      status,
      forgotPwLink,
    };
  }, [user, status, forgotPwLink]);

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
}
`,paraId:9,tocIndex:4},{value:`// React.memo: \u7B2C\u4E8C\u4E2A\u53C2\u6570 \u8FD4\u56DE true \u7EC4\u4EF6\u4E0D\u6E32\u67D3 \uFF0C \u8FD4\u56DE false \u7EC4\u4EF6\u91CD\u65B0\u6E32\u67D3\u3002\u548C shouldComponentUpdate \u76F8\u53CD\uFF0CshouldComponentUpdate : \u8FD4\u56DE true \u7EC4\u4EF6\u6E32\u67D3 \uFF0C \u8FD4\u56DE false \u7EC4\u4EF6\u4E0D\u6E32\u67D3\u3002
// memo \u5F53\u4E8C\u4E2A\u53C2\u6570 compare \u4E0D\u5B58\u5728\u65F6\uFF0C\u4F1A\u7528\u6D45\u6BD4\u8F83\u539F\u5219\u5904\u7406 props \uFF0C\u76F8\u5F53\u4E8E\u4EC5\u6BD4\u8F83 props \u7248\u672C\u7684 pureComponent \u3002
// memo \u540C\u6837\u9002\u5408\u7C7B\u7EC4\u4EF6\u548C\u51FD\u6570\u7EC4\u4EF6\u3002
// memo \u53EF\u4EE5\u7406\u89E3\u4E3A\u5305\u4E86\u4E00\u5C42\u7684\u9AD8\u9636\u7EC4\u4EF6\uFF0C\u5B83\u7684\u963B\u65AD\u66F4\u65B0\u673A\u5236\uFF0C\u662F\u901A\u8FC7\u63A7\u5236\u4E0B\u4E00\u7EA7 children \uFF0C\u4E5F\u5C31\u662F memo \u5305\u88C5\u7684\u7EC4\u4EF6\uFF0C\u662F\u5426\u7EE7\u7EED\u8C03\u548C\u6E32\u67D3\uFF0C\u6765\u8FBE\u5230\u76EE\u7684\u7684\u3002

function TextMemo(props) {
  console.log('\u5B50\u7EC4\u4EF6\u6E32\u67D3');
  return <div>hello,world</div>;
}

const controlIsRender = (pre, next) => {
  return (
    pre.number === next.number ||
    (pre.number !== next.number && next.number > 5)
  ); // number\u4E0D\u6539\u53D8\u6216number \u6539\u53D8\u4F46\u503C\u5927\u4E8E5->\u4E0D\u6E32\u67D3\u7EC4\u4EF6 | \u5426\u5219\u6E32\u67D3\u7EC4\u4EF6
};

const NewTexMemo = React.memo(TextMemo, controlIsRender);

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      num: 1,
    };
  }
  render() {
    const { num, number } = this.state;
    return (
      <div>
        <div>
          \u6539\u53D8num\uFF1A\u5F53\u524D\u503C {num}
          <button onClick={() => this.setState({ num: num + 1 })}>num++</button>
          <button onClick={() => this.setState({ num: num - 1 })}>num--</button>
        </div>
        <div>
          \u6539\u53D8number\uFF1A \u5F53\u524D\u503C {number}
          <button onClick={() => this.setState({ number: number + 1 })}>
            number ++
          </button>
          <button onClick={() => this.setState({ number: number - 1 })}>
            number --{' '}
          </button>
        </div>
        <NewTexMemo num={num} number={number} />
      </div>
    );
  }
}

export default Index;
`,paraId:10,tocIndex:5},{value:"\u4EC5\u5F53 data.a \u53D8\u5316\u65F6\u624D\u66F4\u65B0\u5F15\u7528",paraId:11,tocIndex:5},{value:`const parent = () => {
  const [data, setData] = useState({});
  const memoizedData = useMemo(() => ({ ...data }), [data.a]); // \u4EC5\u5F53 data.a \u53D8\u5316\u65F6\u624D\u66F4\u65B0\u5F15\u7528
  return <Child data={memoizedData} />;
};
`,paraId:12,tocIndex:5}]}}]);
