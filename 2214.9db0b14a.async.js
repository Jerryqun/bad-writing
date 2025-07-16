"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2214],{92214:function(a,n,e){e.r(n),e.d(n,{texts:function(){return t}});const t=[{value:"\u4F7F\u7528 React \u5C31\u4E00\u5B9A\u4F1A\u5199 JSX\uFF0CJSX \u5230\u5E95\u662F\u4EC0\u4E48\u5462\uFF1F\u5B83\u662F\u4E00\u79CD JavaScript \u8BED\u6CD5\u7684\u6269\u5C55\uFF0CReact \u4F7F\u7528\u5B83\u6765\u63CF\u8FF0\u7528\u6237\u754C\u9762\u957F\u6210\u4EC0\u4E48\u6837\u5B50\u3002\u867D\u7136\u5B83\u770B\u8D77\u6765\u975E\u5E38\u50CF HTML\uFF0C\u4F46\u5B83\u786E\u5B9E\u662F JavaScript \u3002\u5728 React \u4EE3\u7801\u6267\u884C\u4E4B\u524D\uFF0CBabel \u4F1A\u5BF9\u5C06 JSX \u7F16\u8BD1\u4E3A React API.",paraId:0,tocIndex:1},{value:`<div className="container">
  <h3>Hello React</h3>
  <p>React is great </p>
</div>
`,paraId:1,tocIndex:1},{value:`React.createElement(
  "div",
  {
    className: "container"
  },
  React.createElement("h3", null, "Hello React"),
  React.createElement("p", null, "React is great")
);
`,paraId:2,tocIndex:1},{value:"\u4ECE\u4E24\u79CD\u8BED\u6CD5\u5BF9\u6BD4\u6765\u770B\uFF0CJSX \u8BED\u6CD5\u7684\u51FA\u73B0\u662F\u4E3A\u4E86\u8BA9 React \u5F00\u53D1\u4EBA\u5458\u7F16\u5199\u7528\u6237\u754C\u9762\u4EE3\u7801\u66F4\u52A0\u8F7B\u677E\u3002",paraId:3,tocIndex:1},{value:"Babel REPL",paraId:4,tocIndex:1},{value:"\u5728\u73B0\u4EE3 web \u5E94\u7528\u7A0B\u5E8F\u4E2D\u4F7F\u7528 JavaScript \u64CD\u4F5C DOM \u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\uFF0C\u4F46\u9057\u61BE\u7684\u662F\u5B83\u6BD4\u5176\u4ED6\u5927\u591A\u6570 JavaScript \u64CD\u4F5C\u8981\u6162\u7684\u591A\u3002",paraId:5,tocIndex:2},{value:"\u5927\u591A\u6570 JavaScript \u6846\u67B6\u5BF9\u4E8E DOM \u7684\u66F4\u65B0\u8FDC\u8FDC\u8D85\u8FC7\u5176\u5FC5\u987B\u8FDB\u884C\u7684\u66F4\u65B0\uFF0C\u4ECE\u800C\u4F7F\u5F97\u8FD9\u79CD\u7F13\u6162\u64CD\u4F5C\u53D8\u5F97\u66F4\u7CDF\u3002",paraId:6,tocIndex:2},{value:"\u4F8B\u5982\u5047\u8BBE\u4F60\u6709\u5305\u542B\u5341\u4E2A\u9879\u76EE\u7684\u5217\u8868\uFF0C\u4F60\u4EC5\u4EC5\u66F4\u6539\u4E86\u5217\u8868\u4E2D\u7684\u7B2C\u4E00\u9879\uFF0C\u5927\u591A\u6570 JavaScript \u6846\u67B6\u4F1A\u91CD\u5EFA\u6574\u4E2A\u5217\u8868\uFF0C\u8FD9\u6BD4\u5FC5\u8981\u7684\u5DE5\u4F5C\u8981\u591A\u5341\u500D\u3002",paraId:7,tocIndex:2},{value:"\u66F4\u65B0\u6548\u7387\u4F4E\u4E0B\u5DF2\u7ECF\u6210\u4E3A\u4E25\u91CD\u95EE\u9898\uFF0C\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CReact \u666E\u53CA\u4E86\u4E00\u79CD\u53EB\u505A Virtual DOM \u7684\u4E1C\u897F\uFF0CVirtual DOM \u51FA\u73B0\u7684\u76EE\u7684\u5C31\u662F\u4E3A\u4E86\u63D0\u9AD8 JavaScript \u64CD\u4F5C DOM \u5BF9\u8C61\u7684\u6548\u7387\u3002",paraId:8,tocIndex:2},{value:"\u5728 React \u4E2D\uFF0C\u6BCF\u4E2A DOM \u5BF9\u8C61\u90FD\u6709\u4E00\u4E2A\u5BF9\u5E94\u7684 Virtual DOM \u5BF9\u8C61\uFF0C\u5B83\u662F DOM \u5BF9\u8C61\u7684 JavaScript \u5BF9\u8C61\u8868\u73B0\u5F62\u5F0F\uFF0C\u5176\u5B9E\u5C31\u662F\u4F7F\u7528 JavaScript \u5BF9\u8C61\u6765\u63CF\u8FF0 DOM \u5BF9\u8C61\u4FE1\u606F\uFF0C\u6BD4\u5982 DOM \u5BF9\u8C61\u7684\u7C7B\u578B\u662F\u4EC0\u4E48\uFF0C\u5B83\u8EAB\u4E0A\u6709\u54EA\u4E9B\u5C5E\u6027\uFF0C\u5B83\u62E5\u6709\u54EA\u4E9B\u5B50\u5143\u7D20\u3002",paraId:9,tocIndex:3},{value:"\u53EF\u4EE5\u628A Virtual DOM \u5BF9\u8C61\u7406\u89E3\u4E3A DOM \u5BF9\u8C61\u7684\u526F\u672C\uFF0C\u4F46\u662F\u5B83\u4E0D\u80FD\u76F4\u63A5\u663E\u793A\u5728\u5C4F\u5E55\u4E0A\u3002",paraId:10,tocIndex:3},{value:`<div className="container">
  <h3>Hello React</h3>
  <p>React is great </p>
</div>
`,paraId:11,tocIndex:3},{value:`{
  type: "div",
  props: { className: "container" },
  children: [
    {
      type: "h3",
      props: null,
      children: [
        {
          type: "text",
          props: {
            textContent: "Hello React"
          }
        }
      ]
    },
    {
      type: "p",
      props: null,
      children: [
        {
          type: "text",
          props: {
            textContent: "React is great"
          }
        }
      ]
    }
  ]
}
`,paraId:12,tocIndex:3},{value:"\u7CBE\u51C6\u627E\u51FA\u53D1\u751F\u53D8\u5316\u7684 DOM \u5BF9\u8C61\uFF0C\u53EA\u66F4\u65B0\u53D1\u751F\u53D8\u5316\u7684\u90E8\u5206\u3002",paraId:13,tocIndex:4},{value:"\u5728 React \u7B2C\u4E00\u6B21\u521B\u5EFA DOM \u5BF9\u8C61\u540E\uFF0C\u4F1A\u4E3A\u6BCF\u4E2A DOM \u5BF9\u8C61\u521B\u5EFA\u5176\u5BF9\u5E94\u7684 Virtual DOM \u5BF9\u8C61\uFF0C\u5728 DOM \u5BF9\u8C61\u53D1\u751F\u66F4\u65B0\u4E4B\u524D\uFF0CReact \u4F1A\u5148\u66F4\u65B0\u6240\u6709\u7684 Virtual DOM \u5BF9\u8C61\uFF0C\u7136\u540E React \u4F1A\u5C06\u66F4\u65B0\u540E\u7684 Virtual DOM \u548C \u66F4\u65B0\u524D\u7684 Virtual DOM \u8FDB\u884C\u6BD4\u8F83\uFF0C\u4ECE\u800C\u627E\u51FA\u53D1\u751F\u53D8\u5316\u7684\u90E8\u5206\uFF0CReact \u4F1A\u5C06\u53D1\u751F\u53D8\u5316\u7684\u90E8\u5206\u66F4\u65B0\u5230\u771F\u5B9E\u7684 DOM \u5BF9\u8C61\u4E2D\uFF0CReact \u4EC5\u66F4\u65B0\u5FC5\u8981\u66F4\u65B0\u7684\u90E8\u5206\u3002",paraId:14,tocIndex:4},{value:"Virtual DOM \u5BF9\u8C61\u7684\u66F4\u65B0\u548C\u6BD4\u8F83\u4EC5\u53D1\u751F\u5728\u5185\u5B58\u4E2D\uFF0C\u4E0D\u4F1A\u5728\u89C6\u56FE\u4E2D\u6E32\u67D3\u4EFB\u4F55\u5185\u5BB9\uFF0C\u6240\u4EE5\u8FD9\u4E00\u90E8\u5206\u7684\u6027\u80FD\u635F\u8017\u6210\u672C\u662F\u5FAE\u4E0D\u8DB3\u9053\u7684\u3002",paraId:15,tocIndex:4},{value:`<div id="container">
	<p>Hello React</p>
</div>
`,paraId:16,tocIndex:4},{value:`<div id="container">
	<p>Hello Angular</p>
</div>
`,paraId:17,tocIndex:4},{value:`const before = {
  type: "div",
  props: { id: "container" },
  children: [
    {
      type: "p",
      props: null,
      children: [
        { type: "text", props: { textContent: "Hello React" } }
      ]
    }
  ]
}
`,paraId:18,tocIndex:4},{value:`const after = {
  type: "div",
  props: { id: "container" },
  children: [
    {
      type: "p",
      props: null,
      children: [
        { type: "text", props: { textContent: "Hello Angular" } }
      ]
    }
  ]
}
`,paraId:19,tocIndex:4},{value:"\u5728 React \u4EE3\u7801\u6267\u884C\u524D\uFF0CJSX \u4F1A\u88AB Babel \u8F6C\u6362\u4E3A React.createElement \u65B9\u6CD5\u7684\u8C03\u7528\uFF0C\u5728\u8C03\u7528 createElement \u65B9\u6CD5\u65F6\u4F1A\u4F20\u5165\u5143\u7D20\u7684\u7C7B\u578B\uFF0C\u5143\u7D20\u7684\u5C5E\u6027\uFF0C\u4EE5\u53CA\u5143\u7D20\u7684\u5B50\u5143\u7D20\uFF0CcreateElement \u65B9\u6CD5\u7684\u8FD4\u56DE\u503C\u4E3A\u6784\u5EFA\u597D\u7684 Virtual DOM \u5BF9\u8C61\u3002",paraId:20,tocIndex:5},{value:`{
  type: "div",
  props: null,
  children: [{type: "text", props: {textContent: "Hello"}}]
}
`,paraId:21,tocIndex:5},{value:`/**
 * \u521B\u5EFA Virtual DOM
 * @param {string} type \u7C7B\u578B
 * @param {object | null} props \u5C5E\u6027
 * @param  {createElement[]} children \u5B50\u5143\u7D20
 * @return {object} Virtual DOM
 */
function createElement (type, props, ...children) {
	return {
    type,
    props,
    children
  }
}
`,paraId:22,tocIndex:5},{value:"\u4ECE createElement \u65B9\u6CD5\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u5F00\u59CB\u5C31\u90FD\u662F\u5B50\u5143\u7D20\u4E86\uFF0C\u5728\u5B9A\u4E49 createElement \u65B9\u6CD5\u65F6\uFF0C\u901A\u8FC7 ",paraId:23,tocIndex:5},{value:"...children",paraId:23,tocIndex:5},{value:" \u5C06\u6240\u6709\u7684\u5B50\u5143\u7D20\u653E\u7F6E\u5230 children \u6570\u7EC4\u4E2D\u3002",paraId:23,tocIndex:5},{value:`const virtualDOM = (
  <div className="container">
    <h1>\u4F60\u597D Tiny React</h1>
    <h2>(\u7F16\u7801\u5FC5\u6740\u6280)</h2>
    <div>
      \u5D4C\u59571 <div>\u5D4C\u5957 1.1</div>
    </div>
    <h3>(\u89C2\u5BDF: \u8FD9\u4E2A\u5C06\u4F1A\u88AB\u6539\u53D8)</h3>
    {2 == 1 && <div>\u5982\u679C2\u548C1\u76F8\u7B49\u6E32\u67D3\u5F53\u524D\u5185\u5BB9</div>}
    {2 == 2 && <div>2</div>}
    <span>\u8FD9\u662F\u4E00\u6BB5\u5185\u5BB9</span>
    <button onClick={() => alert("\u4F60\u597D")}>\u70B9\u51FB\u6211</button>
    <h3>\u8FD9\u4E2A\u5C06\u4F1A\u88AB\u5220\u9664</h3>
    2, 3
  </div>
)
console.log(virtualDOM)
`,paraId:24,tocIndex:5},{value:"\u901A\u8FC7\u4EE5\u4E0A\u4EE3\u7801\u6D4B\u8BD5\uFF0C\u53D1\u73B0\u8FD4\u56DE\u7684 Virtual DOM \u5B58\u5728\u4E00\u4E9B\u95EE\u9898\uFF0C\u7B2C\u4E00\u4E2A\u95EE\u9898\u662F\u6587\u672C\u8282\u70B9\u88AB\u76F4\u63A5\u653E\u5165\u5230\u4E86\u6570\u7EC4\u4E2D",paraId:25,tocIndex:5},{value:"\u800C\u6211\u4EEC\u671F\u671B\u662F\u6587\u672C\u8282\u70B9\u5E94\u8BE5\u662F\u8FD9\u6837\u7684",paraId:26,tocIndex:5},{value:`children: [
  {
    type: "text",
    props: {
      textContent: "React is great"
    }
  }
]
`,paraId:27,tocIndex:5},{value:"\u901A\u8FC7\u4EE5\u4E0B\u4EE3\u7801\u5BF9 Virtual DOM \u8FDB\u884C\u6539\u9020\uFF0C\u91CD\u65B0\u6784\u5EFA Virtual DOM\u3002",paraId:28,tocIndex:5},{value:`// \u5C06\u539F\u6709 children \u62F7\u8D1D\u4E00\u4EFD \u4E0D\u8981\u5728\u539F\u6709\u6570\u7EC4\u4E0A\u8FDB\u884C\u64CD\u4F5C
const childElements = [].concat(...children).map((child) => {
  // \u5224\u65AD child \u662F\u5426\u662F\u5BF9\u8C61\u7C7B\u578B
  if (child instanceof Object) {
    // \u5982\u679C\u662F \u4EC0\u4E48\u90FD\u4E0D\u9700\u8981\u505A \u76F4\u63A5\u8FD4\u56DE\u5373\u53EF
    return child;
  } else {
    // \u5982\u679C\u4E0D\u662F\u5BF9\u8C61\u5C31\u662F\u6587\u672C \u624B\u52A8\u8C03\u7528 createElement \u65B9\u6CD5\u5C06\u6587\u672C\u8F6C\u6362\u4E3A Virtual DOM
    return createElement('text', { textContent: child });
  }
});
return {
  type,
  props,
  children: childElements,
};
`,paraId:29,tocIndex:5},{value:"\u901A\u8FC7\u89C2\u5BDF\u8FD4\u56DE\u7684 Virtual DOM\uFF0C\u6587\u672C\u8282\u70B9\u5DF2\u7ECF\u88AB\u8F6C\u5316\u6210\u4E86\u5BF9\u8C61\u7C7B\u578B\u7684 Virtual DOM\uFF0C\u4F46\u662F\u5E03\u5C14\u503C\u4E5F\u88AB\u5F53\u505A\u6587\u672C\u8282\u70B9\u88AB\u8F6C\u5316\u4E86\uFF0C\u5728 JSX \u4E2D\uFF0C\u5982\u679C Virtual DOM \u88AB\u8F6C\u5316\u4E3A\u4E86\u5E03\u5C14\u503C\u6216\u8005 null\uFF0C\u662F\u4E0D\u5E94\u8BE5\u88AB\u66F4\u65B0\u5230\u771F\u5B9E DOM \u4E2D\u7684\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u8981\u505A\u7684\u4E8B\u60C5\u5C31\u662F\u6E05\u9664 Virtual DOM \u4E2D\u7684\u5E03\u5C14\u503C\u548C null\u3002",paraId:30,tocIndex:5},{value:`// \u7531\u4E8E map \u65B9\u6CD5\u65E0\u6CD5\u4ECE\u6570\u636E\u4E2D\u5228\u9664\u5143\u7D20, \u6240\u4EE5\u6B64\u5904\u5C06 map \u65B9\u6CD5\u66F4\u6539\u4E3A reduce \u65B9\u6CD5
const childElements = [].concat(...children).reduce((result, child) => {
  // \u5224\u65AD\u5B50\u5143\u7D20\u7C7B\u578B \u5228\u9664 null true false
  if (child != null && child != false && child != true) {
    if (child instanceof Object) {
      result.push(child)
    } else {
      result.push(createElement("text", { textContent: child }))
    }
  }
  // \u5C06\u9700\u8981\u4FDD\u7559\u7684 Virtual DOM \u653E\u5165 result \u6570\u7EC4
  return result
}, [])
`,paraId:31,tocIndex:5},{value:"\u5728 React \u7EC4\u4EF6\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 props.children \u83B7\u53D6\u5B50\u5143\u7D20\uFF0C\u6240\u4EE5\u8FD8\u9700\u8981\u5C06\u5B50\u5143\u7D20\u5B58\u50A8\u5728 props \u5BF9\u8C61\u4E2D\u3002",paraId:32,tocIndex:5},{value:`return {
  type,
  props: Object.assign({ children: childElements }, props),
  children: childElements,
};
`,paraId:33,tocIndex:5},{value:"\u901A\u8FC7\u8C03\u7528 render \u65B9\u6CD5\u53EF\u4EE5\u5C06 Virtual DOM \u5BF9\u8C61\u66F4\u65B0\u4E3A\u771F\u5B9E DOM \u5BF9\u8C61\u3002",paraId:34,tocIndex:6},{value:"\u5728\u66F4\u65B0\u4E4B\u524D\u9700\u8981\u786E\u5B9A\u662F\u5426\u5B58\u5728\u65E7\u7684 Virtual DOM\uFF0C\u5982\u679C\u5B58\u5728\u9700\u8981\u6BD4\u5BF9\u5DEE\u5F02\uFF0C\u5982\u679C\u4E0D\u5B58\u5728\u53EF\u4EE5\u76F4\u63A5\u5C06 Virtual DOM \u8F6C\u6362\u4E3A DOM \u5BF9\u8C61\u3002",paraId:35,tocIndex:6},{value:"\u76EE\u524D\u5148\u53EA\u8003\u8651\u4E0D\u5B58\u5728\u65E7\u7684 Virtual DOM \u7684\u60C5\u51B5\uFF0C\u5C31\u662F\u8BF4\u5148\u76F4\u63A5\u5C06 Virtual DOM \u5BF9\u8C61\u66F4\u65B0\u4E3A\u771F\u5B9E DOM \u5BF9\u8C61\u3002",paraId:36,tocIndex:6},{value:`// render.js
export default function render(virtualDOM, container, oldDOM = container.firstChild) {
  // \u5728 diff \u65B9\u6CD5\u5185\u90E8\u5224\u65AD\u662F\u5426\u9700\u8981\u5BF9\u6BD4 \u5BF9\u6BD4\u4E5F\u597D \u4E0D\u5BF9\u6BD4\u4E5F\u597D \u90FD\u5728 diff \u65B9\u6CD5\u4E2D\u8FDB\u884C\u64CD\u4F5C
  diff(virtualDOM, container, oldDOM)
}
`,paraId:37,tocIndex:6},{value:`// diff.js
import mountElement from "./mountElement"

export default function diff(virtualDOM, container, oldDOM) {
  // \u5224\u65AD oldDOM \u662F\u5426\u5B58\u5728
  if (!oldDOM) {
    // \u5982\u679C\u4E0D\u5B58\u5728 \u4E0D\u9700\u8981\u5BF9\u6BD4 \u76F4\u63A5\u5C06 Virtual DOM \u8F6C\u6362\u4E3A\u771F\u5B9E DOM
    mountElement(virtualDOM, container)
  }
}
`,paraId:38,tocIndex:6},{value:"\u5728\u8FDB\u884C virtual DOM \u8F6C\u6362\u4E4B\u524D\u8FD8\u9700\u8981\u786E\u5B9A Virtual DOM \u7684\u7C7B Component VS Native Element\u3002",paraId:39,tocIndex:6},{value:"\u7C7B\u578B\u4E0D\u540C\u9700\u8981\u505A\u4E0D\u540C\u7684\u5904\u7406 \u5982\u679C\u662F Native Element \u76F4\u63A5\u8F6C\u6362\u3002",paraId:40,tocIndex:6},{value:"\u5982\u679C\u662F\u7EC4\u4EF6 \u8FD8\u9700\u8981\u5F97\u5230\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61 \u901A\u8FC7\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u83B7\u53D6\u7EC4\u4EF6\u8FD4\u56DE\u7684 virtual DOM \u7136\u540E\u518D\u8FDB\u884C\u8F6C\u6362\u3002",paraId:41,tocIndex:6},{value:"\u76EE\u524D\u5148\u53EA\u8003\u8651 Native Element \u7684\u60C5\u51B5\u3002",paraId:42,tocIndex:6},{value:`// mountElement.js
import mountNativeElement from "./mountNativeElement"

export default function mountElement(virtualDOM, container) {
  // \u901A\u8FC7\u8C03\u7528 mountNativeElement \u65B9\u6CD5\u8F6C\u6362 Native Element
  mountNativeElement(virtualDOM, container)
}
`,paraId:43,tocIndex:6},{value:`// mountNativeElement.js
import createDOMElement from "./createDOMElement"

export default function mountNativeElement(virtualDOM, container) {
  const newElement = createDOMElement(virtualDOM)
  container.appendChild(newElement)
}
`,paraId:44,tocIndex:6},{value:`// createDOMElement.js
import mountElement from "./mountElement"
import updateElementNode from "./updateElementNode"

export default function createDOMElement(virtualDOM) {
  let newElement = null
  if (virtualDOM.type === "text") {
    // \u521B\u5EFA\u6587\u672C\u8282\u70B9
    newElement = document.createTextNode(virtualDOM.props.textContent)
  } else {
    // \u521B\u5EFA\u5143\u7D20\u8282\u70B9
    newElement = document.createElement(virtualDOM.type)
    // \u66F4\u65B0\u5143\u7D20\u5C5E\u6027
    updateElementNode(newElement, virtualDOM)
  }
  // \u9012\u5F52\u6E32\u67D3\u5B50\u8282\u70B9
  virtualDOM.children.forEach(child => {
    // \u56E0\u4E3A\u4E0D\u786E\u5B9A\u5B50\u5143\u7D20\u662F NativeElement \u8FD8\u662F Component \u6240\u4EE5\u8C03\u7528 mountElement \u65B9\u6CD5\u8FDB\u884C\u786E\u5B9A
    mountElement(child, newElement)
  })
  return newElement
}

`,paraId:45,tocIndex:6},{value:`// createDOMElement.js
// \u770B\u770B\u8282\u70B9\u7C7B\u578B\u662F\u6587\u672C\u7C7B\u578B\u8FD8\u662F\u5143\u7D20\u7C7B\u578B
if (virtualDOM.type === "text") {
  // \u521B\u5EFA\u6587\u672C\u8282\u70B9 \u8BBE\u7F6E\u8282\u70B9\u5185\u5BB9
  newElement = document.createTextNode(virtualDOM.props.textContent)
} else {
  // \u6839\u636E Virtual DOM type \u5C5E\u6027\u503C\u521B\u5EFA DOM \u5143\u7D20
  newElement = document.createElement(virtualDOM.type)
  // \u4E3A\u5143\u7D20\u8BBE\u7F6E\u5C5E\u6027
  updateElementNode(newElement, virtualDOM)
}
`,paraId:46,tocIndex:7},{value:`export default function updateElementNode(element, virtualDOM) {
  // \u83B7\u53D6\u8981\u89E3\u6790\u7684 VirtualDOM \u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u5BF9\u8C61
  const newProps = virtualDOM.props
  // \u5C06\u5C5E\u6027\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u540D\u79F0\u653E\u5230\u4E00\u4E2A\u6570\u7EC4\u4E2D\u5E76\u5FAA\u73AF\u6570\u7EC4
  Object.keys(newProps).forEach(propName => {
    const newPropsValue = newProps[propName]
    // \u8003\u8651\u5C5E\u6027\u540D\u79F0\u662F\u5426\u4EE5 on \u5F00\u5934 \u5982\u679C\u662F\u5C31\u8868\u793A\u662F\u4E2A\u4E8B\u4EF6\u5C5E\u6027 onClick -> click
    if (propName.slice(0, 2) === "on") {
      const eventName = propName.toLowerCase().slice(2)
      element.addEventListener(eventName, newPropsValue)
      // \u5982\u679C\u5C5E\u6027\u540D\u79F0\u662F value \u6216\u8005 checked \u9700\u8981\u901A\u8FC7 [] \u7684\u5F62\u5F0F\u6DFB\u52A0
    } else if (propName === "value" || propName === "checked") {
      element[propName] = newPropsValue
      // \u5228\u9664 children \u56E0\u4E3A\u5B83\u662F\u5B50\u5143\u7D20 \u4E0D\u662F\u5C5E\u6027
    } else if (propName !== "children") {
      // className \u5C5E\u6027\u5355\u72EC\u5904\u7406 \u4E0D\u76F4\u63A5\u5728\u5143\u7D20\u4E0A\u6DFB\u52A0 class \u5C5E\u6027\u662F\u56E0\u4E3A class \u662F JavaScript \u4E2D\u7684\u5173\u952E\u5B57
      if (propName === "className") {
        element.setAttribute("class", newPropsValue)
      } else {
        // \u666E\u901A\u5C5E\u6027
        element.setAttribute(propName, newPropsValue)
      }
    }
  })
}
`,paraId:47,tocIndex:7},{value:"\u5728\u6E32\u67D3\u7EC4\u4EF6\u4E4B\u524D\u9996\u5148\u8981\u660E\u786E\u7684\u662F\uFF0C\u7EC4\u4EF6\u7684 Virtual DOM \u7C7B\u578B\u503C\u4E3A\u51FD\u6570\uFF0C\u51FD\u6570\u7EC4\u4EF6\u548C\u7C7B\u7EC4\u4EF6\u90FD\u662F\u8FD9\u6837\u7684\u3002",paraId:48,tocIndex:9},{value:`// \u539F\u59CB\u7EC4\u4EF6
const Heart = () => <span>&hearts;</span>
`,paraId:49,tocIndex:9},{value:`<Heart />
`,paraId:50,tocIndex:9},{value:`// \u7EC4\u4EF6\u7684 Virtual DOM
{
  type: f function() {},
  props: {}
  children: []
}
`,paraId:51,tocIndex:9},{value:"\u5728\u6E32\u67D3\u7EC4\u4EF6\u65F6\uFF0C\u8981\u5148\u5C06 Component \u4E0E Native Element \u533A\u5206\u5F00\uFF0C\u5982\u679C\u662F Native Element \u53EF\u4EE5\u76F4\u63A5\u5F00\u59CB\u6E32\u67D3\uFF0C\u5982\u679C\u662F\u7EC4\u4EF6\uFF0C\u7279\u522B\u5904\u7406\u3002",paraId:52,tocIndex:9},{value:`// mountElement.js
export default function mountElement(virtualDOM, container) {
  // \u65E0\u8BBA\u662F\u7C7B\u7EC4\u4EF6\u8FD8\u662F\u51FD\u6570\u7EC4\u4EF6 \u5176\u5B9E\u672C\u8D28\u4E0A\u90FD\u662F\u51FD\u6570
  // \u5982\u679C Virtual DOM \u7684 type \u5C5E\u6027\u503C\u4E3A\u51FD\u6570 \u5C31\u8BF4\u660E\u5F53\u524D\u8FD9\u4E2A Virtual DOM \u4E3A\u7EC4\u4EF6
  if (isFunction(virtualDOM)) {
    // \u5982\u679C\u662F\u7EC4\u4EF6 \u8C03\u7528 mountComponent \u65B9\u6CD5\u8FDB\u884C\u7EC4\u4EF6\u6E32\u67D3
    mountComponent(virtualDOM, container)
  } else {
    mountNativeElement(virtualDOM, container)
  }
}

// Virtual DOM \u662F\u5426\u4E3A\u51FD\u6570\u7C7B\u578B
export function isFunction(virtualDOM) {
  return virtualDOM && typeof virtualDOM.type === "function"
}
`,paraId:53,tocIndex:9},{value:"\u5728 mountComponent \u65B9\u6CD5\u4E2D\u518D\u8FDB\u884C\u51FD\u6570\u7EC4\u4EF6\u548C\u7C7B\u578B\u7684\u533A\u5206\uFF0C\u7136\u540E\u518D\u5206\u522B\u8FDB\u884C\u5904\u7406\u3002",paraId:54,tocIndex:9},{value:`// mountComponent.js
import mountNativeElement from "./mountNativeElement"

export default function mountComponent(virtualDOM, container) {
  // \u5B58\u653E\u7EC4\u4EF6\u8C03\u7528\u540E\u8FD4\u56DE\u7684 Virtual DOM \u7684\u5BB9\u5668
  let nextVirtualDOM = null
  // \u533A\u5206\u51FD\u6570\u578B\u7EC4\u4EF6\u548C\u7C7B\u7EC4\u4EF6
  if (isFunctionalComponent(virtualDOM)) {
    // \u51FD\u6570\u7EC4\u4EF6 \u8C03\u7528 buildFunctionalComponent \u65B9\u6CD5\u5904\u7406\u51FD\u6570\u7EC4\u4EF6
    nextVirtualDOM = buildFunctionalComponent(virtualDOM)
  } else {
    // \u7C7B\u7EC4\u4EF6
  }
  // \u5224\u65AD\u5F97\u5230\u7684 Virtual Dom \u662F\u5426\u662F\u7EC4\u4EF6
  if (isFunction(nextVirtualDOM)) {
    // \u5982\u679C\u662F\u7EC4\u4EF6 \u7EE7\u7EED\u8C03\u7528 mountComponent \u89E3\u5256\u7EC4\u4EF6
    mountComponent(nextVirtualDOM, container)
  } else {
    // \u5982\u679C\u662F Navtive Element \u5C31\u53BB\u6E32\u67D3
    mountNativeElement(nextVirtualDOM, container)
  }
}

// Virtual DOM \u662F\u5426\u4E3A\u51FD\u6570\u578B\u7EC4\u4EF6
// \u6761\u4EF6\u6709\u4E24\u4E2A: 1. Virtual DOM \u7684 type \u5C5E\u6027\u503C\u4E3A\u51FD\u6570 2. \u51FD\u6570\u7684\u539F\u578B\u5BF9\u8C61\u4E2D\u4E0D\u80FD\u6709render\u65B9\u6CD5
// \u53EA\u6709\u7C7B\u7EC4\u4EF6\u7684\u539F\u578B\u5BF9\u8C61\u4E2D\u6709render\u65B9\u6CD5
export function isFunctionalComponent(virtualDOM) {
  const type = virtualDOM && virtualDOM.type
  return (
    type && isFunction(virtualDOM) && !(type.prototype && type.prototype.render)
  )
}

// \u51FD\u6570\u7EC4\u4EF6\u5904\u7406
function buildFunctionalComponent(virtualDOM) {
  // \u901A\u8FC7 Virtual DOM \u4E2D\u7684 type \u5C5E\u6027\u83B7\u53D6\u5230\u7EC4\u4EF6\u51FD\u6570\u5E76\u8C03\u7528
  // \u8C03\u7528\u7EC4\u4EF6\u51FD\u6570\u65F6\u5C06 Virtual DOM \u5BF9\u8C61\u4E2D\u7684 props \u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6\u51FD\u6570 \u8FD9\u6837\u5728\u7EC4\u4EF6\u4E2D\u5C31\u53EF\u4EE5\u901A\u8FC7 props \u5C5E\u6027\u83B7\u53D6\u6570\u636E\u4E86
  // \u7EC4\u4EF6\u8FD4\u56DE\u8981\u6E32\u67D3\u7684 Virtual DOM
  return virtualDOM && virtualDOM.type(virtualDOM.props || {})
}
`,paraId:55,tocIndex:9},{value:"\u7C7B\u7EC4\u4EF6\u672C\u8EAB\u4E5F\u662F Virtual DOM\uFF0C\u53EF\u4EE5\u901A\u8FC7 Virtual DOM \u4E2D\u7684 type \u5C5E\u6027\u503C\u786E\u5B9A\u5F53\u524D\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6\u662F\u7C7B\u7EC4\u4EF6\u8FD8\u662F\u51FD\u6570\u7EC4\u4EF6\u3002",paraId:56,tocIndex:10},{value:"\u5728\u786E\u5B9A\u5F53\u524D\u8981\u6E32\u67D3\u7684\u7EC4\u4EF6\u4E3A\u7C7B\u7EC4\u4EF6\u4EE5\u540E\uFF0C\u9700\u8981\u5B9E\u4F8B\u5316\u7C7B\u7EC4\u4EF6\u5F97\u5230\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u901A\u8FC7\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u8C03\u7528\u7C7B\u7EC4\u4EF6\u4E2D\u7684 render \u65B9\u6CD5\uFF0C\u83B7\u53D6\u7EC4\u4EF6\u8981\u6E32\u67D3\u7684 Virtual DOM\u3002",paraId:57,tocIndex:10},{value:"\u7C7B\u7EC4\u4EF6\u9700\u8981\u7EE7\u627F Component \u7236\u7C7B\uFF0C\u5B50\u7C7B\u9700\u8981\u901A\u8FC7 super \u65B9\u6CD5\u5C06\u81EA\u8EAB\u7684 props \u5C5E\u6027\u4F20\u9012\u7ED9 Component \u7236\u7C7B\uFF0C\u7236\u7C7B\u4F1A\u5C06 props \u5C5E\u6027\u6302\u8F7D\u4E3A\u7236\u7C7B\u5C5E\u6027\uFF0C\u5B50\u7C7B\u7EE7\u627F\u4E86\u7236\u7C7B\uFF0C\u81EA\u5DF1\u672C\u8EAB\u4E5F\u5C31\u81EA\u7136\u62E5\u6709 props \u5C5E\u6027\u4E86\u3002\u8FD9\u6837\u505A\u7684\u597D\u5904\u662F\u5F53 props \u53D1\u751F\u66F4\u65B0\u540E\uFF0C\u7236\u7C7B\u53EF\u4EE5\u6839\u636E\u66F4\u65B0\u540E\u7684 props \u5E2E\u52A9\u5B50\u7C7B\u66F4\u65B0\u89C6\u56FE\u3002",paraId:58,tocIndex:10},{value:"\u5047\u8BBE\u4EE5\u4E0B\u4EE3\u7801\u5C31\u662F\u6211\u4EEC\u8981\u6E32\u67D3\u7684\u7C7B\u7EC4\u4EF6\uFF1A",paraId:59,tocIndex:10},{value:`class Alert extends TinyReact.Component {
  constructor(props) {
    // \u5C06 props \u4F20\u9012\u7ED9\u7236\u7C7B \u5B50\u7C7B\u7EE7\u627F\u7236\u7C7B\u7684 props \u5B50\u7C7B\u81EA\u7136\u5C31\u6709 props \u6570\u636E\u4E86
    // \u5426\u5219 props \u4EC5\u4EC5\u662F constructor \u51FD\u6570\u7684\u53C2\u6570\u800C\u5DF2
    // \u5C06 props \u4F20\u9012\u7ED9\u7236\u7C7B\u7684\u597D\u5904\u662F \u5F53 props \u53D1\u751F\u66F4\u6539\u65F6 \u7236\u7C7B\u53EF\u4EE5\u5E2E\u52A9\u66F4\u65B0 props \u66F4\u65B0\u7EC4\u4EF6\u89C6\u56FE
    super(props)
    this.state = {
      title: "default title"
    }
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.props.message}</p>
      </div>
    )
  }
}

TinyReact.render(<Alert message="Hello React" />, root)
`,paraId:60,tocIndex:10},{value:`// Component.js \u7236\u7C7B Component \u5B9E\u73B0
export default class Component {
  constructor(props) {
    this.props = props
  }
}
`,paraId:61,tocIndex:10},{value:"\u5728 mountComponent \u65B9\u6CD5\u4E2D\u901A\u8FC7\u8C03\u7528 buildStatefulComponent \u65B9\u6CD5\u5F97\u5230\u7C7B\u7EC4\u4EF6\u8981\u6E32\u67D3\u7684 Virtual DOM",paraId:62,tocIndex:10},{value:`// mountComponent.js
export default function mountComponent(virtualDOM, container) {
  let nextVirtualDOM = null
  // \u533A\u5206\u51FD\u6570\u578B\u7EC4\u4EF6\u548C\u7C7B\u7EC4\u4EF6
  if (isFunctionalComponent(virtualDOM)) {
    // \u51FD\u6570\u7EC4\u4EF6
    nextVirtualDOM = buildFunctionalComponent(virtualDOM)
  } else {
    // \u7C7B\u7EC4\u4EF6
    nextVirtualDOM = buildStatefulComponent(virtualDOM)
  }
  // \u5224\u65AD\u5F97\u5230\u7684 Virtual Dom \u662F\u5426\u662F\u7EC4\u4EF6
  if (isFunction(nextVirtualDOM)) {
    mountComponent(nextVirtualDOM, container)
  } else {
    mountNativeElement(nextVirtualDOM, container)
  }
}

// \u5904\u7406\u7C7B\u7EC4\u4EF6
function buildStatefulComponent(virtualDOM) {
  // \u5B9E\u4F8B\u5316\u7C7B\u7EC4\u4EF6 \u5F97\u5230\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61 \u5E76\u5C06 props \u5C5E\u6027\u4F20\u9012\u8FDB\u7C7B\u7EC4\u4EF6
  const component = new virtualDOM.type(virtualDOM.props)
  // \u8C03\u7528\u7C7B\u7EC4\u4EF6\u4E2D\u7684render\u65B9\u6CD5\u5F97\u5230\u8981\u6E32\u67D3\u7684 Virtual DOM
  const nextVirtualDOM = component.render()
  // \u8FD4\u56DE\u8981\u6E32\u67D3\u7684 Virtual DOM
  return nextVirtualDOM
}
`,paraId:63,tocIndex:10},{value:"\u5728\u8FDB\u884C Virtual DOM \u6BD4\u5BF9\u65F6\uFF0C\u9700\u8981\u7528\u5230\u66F4\u65B0\u540E\u7684 Virtual DOM \u548C\u66F4\u65B0\u524D\u7684 Virtual DOM\uFF0C\u66F4\u65B0\u540E\u7684 Virtual DOM \u76EE\u524D\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7 render \u65B9\u6CD5\u8FDB\u884C\u4F20\u9012\uFF0C\u73B0\u5728\u7684\u95EE\u9898\u662F\u66F4\u65B0\u524D\u7684 Virtual DOM \u8981\u5982\u4F55\u83B7\u53D6\u5462\uFF1F",paraId:64,tocIndex:11},{value:"\u5BF9\u4E8E\u66F4\u65B0\u524D\u7684 Virtual DOM\uFF0C\u5BF9\u5E94\u7684\u5176\u5B9E\u5C31\u662F\u5DF2\u7ECF\u5728\u9875\u9762\u4E2D\u663E\u793A\u7684\u771F\u5B9E DOM \u5BF9\u8C61\u3002\u65E2\u7136\u662F\u8FD9\u6837\uFF0C\u90A3\u4E48\u6211\u4EEC\u5728\u521B\u5EFA\u771F\u5B9E DOM \u5BF9\u8C61\u65F6\uFF0C\u5C31\u53EF\u4EE5\u5C06 Virtual DOM \u6DFB\u52A0\u5230\u771F\u5B9E DOM \u5BF9\u8C61\u7684\u5C5E\u6027\u4E2D\u3002\u5728\u8FDB\u884C Virtual DOM \u5BF9\u6BD4\u4E4B\u524D\uFF0C\u5C31\u53EF\u4EE5\u901A\u8FC7\u771F\u5B9E DOM \u5BF9\u8C61\u83B7\u53D6\u5176\u5BF9\u5E94\u7684 Virtual DOM \u5BF9\u8C61\u4E86\uFF0C\u5176\u5B9E\u5C31\u662F\u901A\u8FC7 render \u65B9\u6CD5\u7684\u7B2C\u4E09\u4E2A\u53C2\u6570\u83B7\u53D6\u7684\uFF0Ccontainer.firstChild\u3002",paraId:65,tocIndex:11},{value:"\u5728\u521B\u5EFA\u771F\u5B9E DOM \u5BF9\u8C61\u65F6\u4E3A\u5176\u6DFB\u52A0\u5BF9\u5E94\u7684 Virtual DOM \u5BF9\u8C61",paraId:66,tocIndex:11},{value:`// mountElement.js
import mountElement from "./mountElement"

export default function mountNativeElement(virtualDOM, container) {
 // \u5C06 Virtual DOM \u6302\u8F7D\u5230\u771F\u5B9E DOM \u5BF9\u8C61\u7684\u5C5E\u6027\u4E2D \u65B9\u4FBF\u5728\u5BF9\u6BD4\u65F6\u83B7\u53D6\u5176 Virtual DOM
 newElement._virtualDOM = virtualDOM
}
`,paraId:67,tocIndex:11},{value:"Virtual DOM \u7C7B\u578B\u76F8\u540C\uFF0C\u5982\u679C\u662F\u5143\u7D20\u8282\u70B9\uFF0C\u5C31\u5BF9\u6BD4\u5143\u7D20\u8282\u70B9\u5C5E\u6027\u662F\u5426\u53D1\u751F\u53D8\u5316\uFF0C\u5982\u679C\u662F\u6587\u672C\u8282\u70B9\u5C31\u5BF9\u6BD4\u6587\u672C\u8282\u70B9\u5185\u5BB9\u662F\u5426\u53D1\u751F\u53D8\u5316",paraId:68,tocIndex:12},{value:"\u8981\u5B9E\u73B0\u5BF9\u6BD4\uFF0C\u9700\u8981\u5148\u4ECE\u5DF2\u5B58\u5728 DOM \u5BF9\u8C61\u4E2D\u83B7\u53D6\u5176\u5BF9\u5E94\u7684 Virtual DOM \u5BF9\u8C61\u3002",paraId:69,tocIndex:12},{value:`// diff.js
// \u83B7\u53D6\u672A\u66F4\u65B0\u524D\u7684 Virtual DOM
const oldVirtualDOM = oldDOM && oldDOM._virtualDOM
`,paraId:70,tocIndex:12},{value:"\u5224\u65AD oldVirtualDOM \u662F\u5426\u5B58\u5728\uFF0C \u5982\u679C\u5B58\u5728\u5219\u7EE7\u7EED\u5224\u65AD\u8981\u5BF9\u6BD4\u7684 Virtual DOM \u7C7B\u578B\u662F\u5426\u76F8\u540C\uFF0C\u5982\u679C\u7C7B\u578B\u76F8\u540C\u5224\u65AD\u8282\u70B9\u7C7B\u578B\u662F\u5426\u662F\u6587\u672C\uFF0C\u5982\u679C\u662F\u6587\u672C\u8282\u70B9\u5BF9\u6BD4\uFF0C\u5C31\u8C03\u7528 updateTextNode \u65B9\u6CD5\uFF0C\u5982\u679C\u662F\u5143\u7D20\u8282\u70B9\u5BF9\u6BD4\u5C31\u8C03\u7528 setAttributeForElement \u65B9\u6CD5",paraId:71,tocIndex:12},{value:`// diff.js
else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
  if (virtualDOM.type === "text") {
    // \u6587\u672C\u8282\u70B9 \u5BF9\u6BD4\u6587\u672C\u5185\u5BB9\u662F\u5426\u53D1\u751F\u53D8\u5316
    updateTextNode(virtualDOM, oldVirtualDOM, oldDOM)
  } else {
    // \u5143\u7D20\u8282\u70B9 \u5BF9\u6BD4\u5143\u7D20\u5C5E\u6027\u662F\u5426\u53D1\u751F\u53D8\u5316
    setAttributeForElement(oldDOM, virtualDOM, oldVirtualDOM)
  }
`,paraId:72,tocIndex:12},{value:"updateTextNode \u65B9\u6CD5\u7528\u4E8E\u5BF9\u6BD4\u6587\u672C\u8282\u70B9\u5185\u5BB9\u662F\u5426\u53D1\u751F\u53D8\u5316\uFF0C\u5982\u679C\u53D1\u751F\u53D8\u5316\u5219\u66F4\u65B0\u771F\u5B9E DOM \u5BF9\u8C61\u4E2D\u7684\u5185\u5BB9\uFF0C\u65E2\u7136\u771F\u5B9E DOM \u5BF9\u8C61\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u8FD8\u8981\u5C06\u6700\u65B0\u7684 Virtual DOM \u540C\u6B65\u7ED9\u771F\u5B9E DOM \u5BF9\u8C61\u3002",paraId:73,tocIndex:12},{value:`function updateTextNode(virtualDOM, oldVirtualDOM, oldDOM) {
  // \u5982\u679C\u6587\u672C\u8282\u70B9\u5185\u5BB9\u4E0D\u540C
  if (virtualDOM.props.textContent !== oldVirtualDOM.props.textContent) {
    // \u66F4\u65B0\u771F\u5B9E DOM \u5BF9\u8C61\u4E2D\u7684\u5185\u5BB9
    oldDOM.textContent = virtualDOM.props.textContent
  }
  // \u540C\u6B65\u771F\u5B9E DOM \u5BF9\u5E94\u7684 Virtual DOM
  oldDOM._virtualDOM = virtualDOM
}
`,paraId:74,tocIndex:12},{value:"setAttributeForElement \u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E/\u66F4\u65B0\u5143\u7D20\u8282\u70B9\u5C5E\u6027",paraId:75,tocIndex:12},{value:"\u601D\u8DEF\u662F\u5148\u5206\u522B\u83B7\u53D6\u66F4\u65B0\u540E\u7684\u548C\u66F4\u65B0\u524D\u7684 Virtual DOM \u4E2D\u7684 props \u5C5E\u6027\uFF0C\u5FAA\u73AF\u65B0 Virtual DOM \u4E2D\u7684 props \u5C5E\u6027\uFF0C\u901A\u8FC7\u5BF9\u6BD4\u770B\u4E00\u4E0B\u65B0 Virtual DOM \u4E2D\u7684\u5C5E\u6027\u503C\u662F\u5426\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u5982\u679C\u53D1\u751F\u53D8\u5316 \u9700\u8981\u5C06\u53D8\u5316\u7684\u503C\u66F4\u65B0\u5230\u771F\u5B9E DOM \u5BF9\u8C61\u4E2D",paraId:76,tocIndex:12},{value:"\u518D\u5FAA\u73AF\u672A\u66F4\u65B0\u524D\u7684 Virtual DOM \u5BF9\u8C61\uFF0C\u901A\u8FC7\u5BF9\u6BD4\u770B\u770B\u65B0\u7684 Virtual DOM \u4E2D\u662F\u5426\u6709\u88AB\u5220\u9664\u7684\u5C5E\u6027\uFF0C\u5982\u679C\u5B58\u5728\u5220\u9664\u7684\u5C5E\u6027 \u9700\u8981\u5C06 DOM \u5BF9\u8C61\u4E2D\u5BF9\u5E94\u7684\u5C5E\u6027\u4E5F\u5220\u9664\u6389",paraId:77,tocIndex:12},{value:`// updateNodeElement.js
export default function updateNodeElement(
  newElement,
  virtualDOM,
  oldVirtualDOM = {}
) {
  // \u83B7\u53D6\u8282\u70B9\u5BF9\u5E94\u7684\u5C5E\u6027\u5BF9\u8C61
  const newProps = virtualDOM.props || {}
  const oldProps = oldVirtualDOM.props || {}
  Object.keys(newProps).forEach(propName => {
    // \u83B7\u53D6\u5C5E\u6027\u503C
    const newPropsValue = newProps[propName]
    const oldPropsValue = oldProps[propName]
    if (newPropsValue !== oldPropsValue) {
      // \u5224\u65AD\u5C5E\u6027\u662F\u5426\u662F\u5426\u4E8B\u4EF6\u5C5E\u6027 onClick -> click
      if (propName.slice(0, 2) === "on") {
        // \u4E8B\u4EF6\u540D\u79F0
        const eventName = propName.toLowerCase().slice(2)
        // \u4E3A\u5143\u7D20\u6DFB\u52A0\u4E8B\u4EF6
        newElement.addEventListener(eventName, newPropsValue)
        // \u5220\u9664\u539F\u6709\u7684\u4E8B\u4EF6\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570
        if (oldPropsValue) {
          newElement.removeEventListener(eventName, oldPropsValue)
        }
      } else if (propName === "value" || propName === "checked") {
        newElement[propName] = newPropsValue
      } else if (propName !== "children") {
        if (propName === "className") {
          newElement.setAttribute("class", newPropsValue)
        } else {
          newElement.setAttribute(propName, newPropsValue)
        }
      }
    }
  })
  // \u5224\u65AD\u5C5E\u6027\u88AB\u5220\u9664\u7684\u60C5\u51B5
  Object.keys(oldProps).forEach(propName => {
    const newPropsValue = newProps[propName]
    const oldPropsValue = oldProps[propName]
    if (!newPropsValue) {
      // \u5C5E\u6027\u88AB\u5220\u9664\u4E86
      if (propName.slice(0, 2) === "on") {
        const eventName = propName.toLowerCase().slice(2)
        newElement.removeEventListener(eventName, oldPropsValue)
      } else if (propName !== "children") {
        newElement.removeAttribute(propName)
      }
    }
  })
}
`,paraId:78,tocIndex:12},{value:"\u4EE5\u4E0A\u5BF9\u6BD4\u7684\u4EC5\u4EC5\u662F\u6700\u4E0A\u5C42\u5143\u7D20\uFF0C\u4E0A\u5C42\u5143\u7D20\u5BF9\u6BD4\u5B8C\u6210\u4EE5\u540E\u8FD8\u9700\u8981\u9012\u5F52\u5BF9\u6BD4\u5B50\u5143\u7D20",paraId:79,tocIndex:12},{value:`else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
    // \u9012\u5F52\u5BF9\u6BD4 Virtual DOM \u7684\u5B50\u5143\u7D20
    virtualDOM.children.forEach((child, i) => {
      diff(child, oldDOM, oldDOM.childNodes[i])
    })
  }
`,paraId:80,tocIndex:12},{value:"\u5F53\u5BF9\u6BD4\u7684\u5143\u7D20\u8282\u70B9\u7C7B\u578B\u4E0D\u540C\u65F6\uFF0C\u5C31\u4E0D\u9700\u8981\u7EE7\u7EED\u5BF9\u6BD4\u4E86\uFF0C\u76F4\u63A5\u4F7F\u7528\u65B0\u7684 Virtual DOM \u521B\u5EFA DOM \u5BF9\u8C61\uFF0C\u7528\u65B0\u7684 DOM \u5BF9\u8C61\u76F4\u63A5\u66FF\u6362\u65E7\u7684 DOM \u5BF9\u8C61\u3002\u5F53\u524D\u8FD9\u79CD\u60C5\u51B5\u8981\u5C06\u7EC4\u4EF6\u5228\u9664\uFF0C\u7EC4\u4EF6\u8981\u88AB\u5355\u72EC\u5904\u7406\u3002",paraId:81,tocIndex:13},{value:`// diff.js
else if (
  // \u5982\u679C Virtual DOM \u7C7B\u578B\u4E0D\u4E00\u6837
  virtualDOM.type !== oldVirtualDOM.type &&
  // \u5E76\u4E14 Virtual DOM \u4E0D\u662F\u7EC4\u4EF6 \u56E0\u4E3A\u7EC4\u4EF6\u8981\u5355\u72EC\u8FDB\u884C\u5904\u7406
  typeof virtualDOM.type !== "function"
) {
  // \u6839\u636E Virtual DOM \u521B\u5EFA\u771F\u5B9E DOM \u5143\u7D20
  const newDOMElement = createDOMElement(virtualDOM)
  // \u7528\u521B\u5EFA\u51FA\u6765\u7684\u771F\u5B9E DOM \u5143\u7D20 \u66FF\u6362\u65E7\u7684 DOM \u5143\u7D20
  oldDOM.parentNode.replaceChild(newDOMElement, oldDOM)
}
`,paraId:82,tocIndex:13},{value:"\u5220\u9664\u8282\u70B9\u53D1\u751F\u5728\u8282\u70B9\u66F4\u65B0\u4EE5\u540E\u5E76\u4E14\u53D1\u751F\u5728\u540C\u4E00\u4E2A\u7236\u8282\u70B9\u4E0B\u7684\u6240\u6709\u5B50\u8282\u70B9\u8EAB\u4E0A\u3002",paraId:83,tocIndex:14},{value:"\u5728\u8282\u70B9\u66F4\u65B0\u5B8C\u6210\u4EE5\u540E\uFF0C\u5982\u679C\u65E7\u8282\u70B9\u5BF9\u8C61\u7684\u6570\u91CF\u591A\u4E8E\u65B0 VirtualDOM \u8282\u70B9\u7684\u6570\u91CF\uFF0C\u5C31\u8BF4\u660E\u6709\u8282\u70B9\u9700\u8981\u88AB\u5220\u9664\u3002",paraId:84,tocIndex:14},{value:`// \u83B7\u53D6\u5C31\u8282\u70B9\u7684\u6570\u91CF
let oldChildNodes = oldDOM.childNodes
// \u5982\u679C\u65E7\u8282\u70B9\u7684\u6570\u91CF\u591A\u4E8E\u8981\u6E32\u67D3\u7684\u65B0\u8282\u70B9\u7684\u957F\u5EA6
if (oldChildNodes.length > virtualDOM.children.length) {
  for (
    let i = oldChildNodes.length - 1;
    i > virtualDOM.children.length - 1;
    i--
  ) {
    oldDOM.removeChild(oldChildNodes[i])
  }
}
`,paraId:85,tocIndex:14},{value:"\u4EE5\u4E0B\u4EE3\u7801\u662F\u8981\u66F4\u65B0\u72B6\u6001\u7684\u7C7B\u7EC4\u4EF6\uFF0C\u5728\u7C7B\u7EC4\u4EF6\u7684 state \u5BF9\u8C61\u4E2D\u6709\u9ED8\u8BA4\u7684 title \u72B6\u6001\uFF0C\u70B9\u51FB change title \u6309\u94AE\u8C03\u7528 handleChange \u65B9\u6CD5\uFF0C\u5728 handleChange \u65B9\u6CD5\u4E2D\u8C03\u7528 this.setState \u65B9\u6CD5\u66F4\u6539 title \u7684\u72B6\u6001\u503C\u3002",paraId:86,tocIndex:15},{value:`class Alert extends TinyReact.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "default title"
    }
    // \u66F4\u6539 handleChange \u65B9\u6CD5\u4E2D\u7684 this \u6307\u5411 \u8BA9 this \u6307\u5411\u7C7B\u5B9E\u4F8B\u5BF9\u8C61
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange() {
    // \u8C03\u7528\u7236\u7C7B\u4E2D\u7684 setState \u65B9\u6CD5\u66F4\u6539\u72B6\u6001
    this.setState({
      title: "changed title"
    })
  }
  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>
        <p>{this.props.message}</p>
        <button onClick={this.handleChange}>change title</button>
      </div>
    )
  }
}
`,paraId:87,tocIndex:15},{value:"setState \u65B9\u6CD5\u662F\u5B9A\u4E49\u5728\u7236\u7C7B Component \u4E2D\u7684\uFF0C\u8BE5\u65B9\u6CD5\u7684\u4F5C\u7528\u662F\u66F4\u6539\u5B50\u7C7B\u7684 state\uFF0C\u4EA7\u751F\u4E00\u4E2A\u5168\u65B0\u7684 state \u5BF9\u8C61\u3002",paraId:88,tocIndex:15},{value:`// Component.js
export default class Component {
  constructor(props) {
    this.props = props
  }
  setState (state) {
    // setState \u65B9\u6CD5\u88AB\u5B50\u7C7B\u8C03\u7528 \u6B64\u5904this\u6307\u5411\u5B50\u7C7B\u5B9E\u4F8B\u5BF9\u8C61
    // \u6240\u4EE5\u6539\u53D8\u7684\u662F\u5B50\u7C7B\u7684 state \u5BF9\u8C61
    this.state = Object.assign({}, this.state, state)
  }
}
`,paraId:89,tocIndex:15},{value:"\u73B0\u5728\u5B50\u7C7B\u5DF2\u7ECF\u53EF\u4EE5\u8C03\u7528\u7236\u7C7B\u7684 setState \u65B9\u6CD5\u66F4\u6539\u72B6\u6001\u503C\u4E86\uFF0C\u5F53\u7EC4\u4EF6\u7684 state \u5BF9\u8C61\u53D1\u751F\u66F4\u6539\u65F6\uFF0C\u8981\u8C03\u7528 render \u65B9\u6CD5\u66F4\u65B0\u7EC4\u4EF6\u89C6\u56FE\u3002",paraId:90,tocIndex:15},{value:"\u5728\u66F4\u65B0\u7EC4\u4EF6\u4E4B\u524D\uFF0C\u8981\u4F7F\u7528\u66F4\u65B0\u7684 Virtual DOM \u5BF9\u8C61\u548C\u672A\u66F4\u65B0\u7684 Virtual DOM \u8FDB\u884C\u5BF9\u6BD4\u627E\u51FA\u66F4\u65B0\u7684\u90E8\u5206\uFF0C\u8FBE\u5230 DOM \u6700\u5C0F\u5316\u64CD\u4F5C\u7684\u76EE\u7684\u3002",paraId:91,tocIndex:15},{value:"\u5728 setState \u65B9\u6CD5\u4E2D\u53EF\u4EE5\u901A\u8FC7\u8C03\u7528 this.render \u65B9\u6CD5\u83B7\u53D6\u66F4\u65B0\u540E\u7684 Virtual DOM\uFF0C\u7531\u4E8E setState \u65B9\u6CD5\u88AB\u5B50\u7C7B\u8C03\u7528\uFF0Cthis \u6307\u5411\u5B50\u7C7B\uFF0C\u6240\u4EE5\u6B64\u5904\u8C03\u7528\u7684\u662F\u5B50\u7C7B\u7684 render \u65B9\u6CD5\u3002",paraId:92,tocIndex:15},{value:`// Component.js
setState(state) {
  // setState \u65B9\u6CD5\u88AB\u5B50\u7C7B\u8C03\u7528 \u6B64\u5904this\u6307\u5411\u5B50\u7C7B
  // \u6240\u4EE5\u6539\u53D8\u7684\u662F\u5B50\u7C7B\u7684 state
  this.state = Object.assign({}, this.state, state)
  // \u901A\u8FC7\u8C03\u7528 render \u65B9\u6CD5\u83B7\u53D6\u6700\u65B0\u7684 Virtual DOM
  let virtualDOM = this.render()
}
`,paraId:93,tocIndex:15},{value:"\u8981\u5B9E\u73B0\u5BF9\u6BD4\uFF0C\u8FD8\u9700\u8981\u83B7\u53D6\u672A\u66F4\u65B0\u524D\u7684 Virtual DOM\uFF0C\u6309\u7167\u4E4B\u524D\u7684\u7ECF\u9A8C\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE DOM \u5BF9\u8C61\u4E2D\u83B7\u53D6\u5176\u5BF9\u5E94\u7684 Virtual DOM \u5BF9\u8C61\uFF0C\u672A\u66F4\u65B0\u524D\u7684 DOM \u5BF9\u8C61\u5B9E\u9645\u4E0A\u5C31\u662F\u73B0\u5728\u5728\u9875\u9762\u4E2D\u663E\u793A\u7684 DOM \u5BF9\u8C61\uFF0C\u6211\u4EEC\u53EA\u8981\u80FD\u83B7\u53D6\u5230\u8FD9\u4E2A DOM \u5BF9\u8C61\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u5176\u5BF9\u5E94\u7684 Virtual DOM \u5BF9\u8C61\u4E86\u3002",paraId:94,tocIndex:15},{value:"\u9875\u9762\u4E2D\u7684 DOM \u5BF9\u8C61\u8981\u600E\u6837\u83B7\u53D6\u5462\uFF1F\u9875\u9762\u4E2D\u7684 DOM \u5BF9\u8C61\u662F\u901A\u8FC7 mountNativeElement \u65B9\u6CD5\u6302\u8F7D\u5230\u9875\u9762\u4E2D\u7684\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EA\u9700\u8981\u5728\u8FD9\u4E2A\u65B9\u6CD5\u4E2D\u8C03\u7528 Component \u7C7B\u4E2D\u7684\u65B9\u6CD5\u5C31\u53EF\u4EE5\u5C06 DOM \u5BF9\u8C61\u4FDD\u5B58\u5728 Component \u7C7B\u4E2D\u4E86\u3002\u5728\u5B50\u7C7B\u8C03\u7528 setState \u65B9\u6CD5\u7684\u65F6\u5019\uFF0C\u5728 setState \u65B9\u6CD5\u4E2D\u518D\u8C03\u7528\u53E6\u4E00\u4E2A\u83B7\u53D6 DOM \u5BF9\u8C61\u7684\u65B9\u6CD5\u5C31\u53EF\u4EE5\u83B7\u53D6\u5230\u4E4B\u524D\u4FDD\u5B58\u7684 DOM \u5BF9\u8C61\u4E86\u3002",paraId:95,tocIndex:15},{value:`// Component.js
// \u4FDD\u5B58 DOM \u5BF9\u8C61\u7684\u65B9\u6CD5
setDOM(dom) {
  this._dom = dom
}
// \u83B7\u53D6 DOM \u5BF9\u8C61\u7684\u65B9\u6CD5
getDOM() {
  return this._dom
}
`,paraId:96,tocIndex:15},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u8981\u7814\u7A76\u4E00\u4E0B\u5728 mountNativeElement \u65B9\u6CD5\u4E2D\u5982\u4F55\u624D\u80FD\u8C03\u7528\u5230 setDOM \u65B9\u6CD5\uFF0C\u8981\u8C03\u7528 setDOM \u65B9\u6CD5\uFF0C\u5FC5\u987B\u8981\u5F97\u5230\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u6240\u4EE5\u76EE\u524D\u7684\u95EE\u9898\u5C31\u662F\u5982\u4F55\u5728 mountNativeElement \u65B9\u6CD5\u4E2D\u5F97\u5230\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u8FD9\u4E2A\u7C7B\u6307\u7684\u4E0D\u662F Component \u7C7B\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5728\u4EE3\u7801\u4E2D\u5E76\u4E0D\u662F\u76F4\u63A5\u5B9E\u4F8B\u5316\u7684 Component \u7C7B\uFF0C\u800C\u662F\u5B9E\u4F8B\u5316\u7684\u5B83\u7684\u5B50\u7C7B\uFF0C\u7531\u4E8E\u5B50\u7C7B\u7EE7\u627F\u4E86\u7236\u7C7B\uFF0C\u6240\u4EE5\u5728\u5B50\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u4E5F\u662F\u53EF\u4EE5\u8C03\u7528\u5230 setDOM \u65B9\u6CD5\u7684\u3002",paraId:97,tocIndex:15},{value:"mountNativeElement \u65B9\u6CD5\u63A5\u6536\u6700\u65B0\u7684 Virtual DOM \u5BF9\u8C61\uFF0C\u5982\u679C\u8FD9\u4E2A Virtual DOM \u5BF9\u8C61\u662F\u7C7B\u7EC4\u4EF6\u4EA7\u751F\u7684\uFF0C\u5728\u4EA7\u751F\u8FD9\u4E2A Virtual DOM \u5BF9\u8C61\u65F6\u4E00\u5B9A\u4F1A\u5148\u5F97\u5230\u8FD9\u4E2A\u7C7B\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u7136\u540E\u518D\u8C03\u7528\u5B9E\u4F8B\u5BF9\u8C61\u4E0B\u9762\u7684 render \u65B9\u6CD5\u8FDB\u884C\u83B7\u53D6\u3002\u6211\u4EEC\u53EF\u4EE5\u5728\u90A3\u4E2A\u65F6\u5019\u5C06\u7C7B\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u6DFB\u52A0\u5230 Virtual DOM \u5BF9\u8C61\u7684\u5C5E\u6027\u4E2D\uFF0C\u800C\u8FD9\u4E2A Virtual DOM \u5BF9\u8C61\u6700\u7EC8\u4F1A\u4F20\u9012\u7ED9 mountNativeElement \u65B9\u6CD5\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728 mountNativeElement \u65B9\u6CD5\u4E2D\u83B7\u53D6\u5230\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61\u4E86\uFF0C\u65E2\u7136\u7C7B\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61\u83B7\u53D6\u5230\u4E86\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u8C03\u7528 setDOM \u65B9\u6CD5\u4E86\u3002",paraId:98,tocIndex:15},{value:"\u5728 buildClassComponent \u65B9\u6CD5\u4E2D\u4E3A Virtual DOM \u5BF9\u8C61\u6DFB\u52A0 component \u5C5E\u6027\uFF0C \u503C\u4E3A\u7C7B\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61\u3002",paraId:99,tocIndex:15},{value:`function buildClassComponent(virtualDOM) {
  const component = new virtualDOM.type(virtualDOM.props)
  const nextVirtualDOM = component.render()
  nextVirtualDOM.component = component
  return nextVirtualDOM
}
`,paraId:100,tocIndex:15},{value:"\u5728 mountNativeElement \u65B9\u6CD5\u4E2D\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u901A\u8FC7\u5B9E\u4F8B\u8C03\u7528\u8C03\u7528 setDOM \u65B9\u6CD5\u4FDD\u5B58 DOM \u5BF9\u8C61\uFF0C\u65B9\u4FBF\u5728\u5BF9\u6BD4\u65F6\u901A\u8FC7\u5B83\u83B7\u53D6\u5B83\u7684 Virtual DOM \u5BF9\u8C61",paraId:101,tocIndex:15},{value:`export default function mountNativeElement(virtualDOM, container) {
  // \u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61
  const component = virtualDOM.component
  // \u5982\u679C\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u5B58\u5728
  if (component) {
    // \u4FDD\u5B58 DOM \u5BF9\u8C61
    component.setDOM(newElement)
  }
}
`,paraId:102,tocIndex:15},{value:"\u63A5\u4E0B\u6765\u5728 setState \u65B9\u6CD5\u4E2D\u5C31\u53EF\u4EE5\u8C03\u7528 getDOM \u65B9\u6CD5\u83B7\u53D6 DOM \u5BF9\u8C61\u4E86",paraId:103,tocIndex:15},{value:`setState(state) {
  this.state = Object.assign({}, this.state, state)
  let virtualDOM = this.render()
  // \u83B7\u53D6\u9875\u9762\u4E2D\u6B63\u5728\u663E\u793A\u7684 DOM \u5BF9\u8C61 \u901A\u8FC7\u5B83\u53EF\u4EE5\u83B7\u53D6\u5176\u5BF9\u8C61\u7684 Virtual DOM \u5BF9\u8C61
  let oldDOM = this.getDOM()
}
`,paraId:104,tocIndex:15},{value:"\u73B0\u5728\u66F4\u65B0\u524D\u7684 Virtual DOM \u5BF9\u8C61\u548C\u66F4\u65B0\u540E\u7684 Virtual DOM \u5BF9\u8C61\u5C31\u90FD\u5DF2\u7ECF\u83B7\u53D6\u5230\u4E86\uFF0C\u63A5\u4E0B\u6765\u8FD8\u8981\u83B7\u53D6\u5230\u771F\u5B9E DOM \u5BF9\u8C61\u7236\u7EA7\u5BB9\u5668\u5BF9\u8C61\uFF0C\u56E0\u4E3A\u5728\u8C03\u7528 diff \u65B9\u6CD5\u8FDB\u884C\u5BF9\u6BD4\u7684\u65F6\u5019\u9700\u8981\u7528\u5230",paraId:105,tocIndex:15},{value:`setState(state) {
  this.state = Object.assign({}, this.state, state)
  let virtualDOM = this.render()
  let oldDOM = this.getDOM()
  // \u83B7\u53D6\u771F\u5B9E DOM \u5BF9\u8C61\u7236\u7EA7\u5BB9\u5668\u5BF9\u8C61
  let container = oldDOM.parentNode
}
`,paraId:106,tocIndex:15},{value:"\u63A5\u4E0B\u6765\u5C31\u53EF\u4EE5\u8C03\u7528 diff \u65B9\u6CD5\u8FDB\u884C\u6BD4\u5BF9\u4E86\uFF0C\u6BD4\u5BF9\u540E\u4F1A\u6309\u7167\u6211\u4EEC\u4E4B\u524D\u5199\u597D\u7684\u903B\u8F91\u8FDB\u884C DOM \u5BF9\u8C61\u66F4\u65B0\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u9875\u9762\u4E2D\u770B\u5230\u6548\u679C\u4E86",paraId:107,tocIndex:15},{value:`setState(state) {
    this.state = Object.assign({}, this.state, state)
    let virtualDOM = this.render()
    let oldDOM = this.getDOM()
    let container = oldDOM.parentNode
    // \u6BD4\u5BF9
    diff(virtualDOM, container, oldDOM)
  }
`,paraId:108,tocIndex:15},{value:"\u5728 diff \u65B9\u6CD5\u4E2D\u5224\u65AD\u8981\u66F4\u65B0\u7684 Virtual DOM \u662F\u5426\u662F\u7EC4\u4EF6\u3002",paraId:109,tocIndex:16},{value:"\u5982\u679C\u662F\u7EC4\u4EF6\u518D\u5224\u65AD\u8981\u66F4\u65B0\u7684\u7EC4\u4EF6\u548C\u672A\u66F4\u65B0\u524D\u7684\u7EC4\u4EF6\u662F\u5426\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5982\u679C\u4E0D\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6\u5C31\u4E0D\u9700\u8981\u505A\u7EC4\u4EF6\u66F4\u65B0\u64CD\u4F5C\uFF0C\u76F4\u63A5\u8C03\u7528 mountElement \u65B9\u6CD5\u5C06\u7EC4\u4EF6\u8FD4\u56DE\u7684 Virtual DOM \u6DFB\u52A0\u5230\u9875\u9762\u4E2D\u3002",paraId:110,tocIndex:16},{value:"\u5982\u679C\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u5C31\u6267\u884C\u66F4\u65B0\u7EC4\u4EF6\u64CD\u4F5C\uFF0C\u5176\u5B9E\u5C31\u662F\u5C06\u6700\u65B0\u7684 props \u4F20\u9012\u5230\u7EC4\u4EF6\u4E2D\uFF0C\u518D\u8C03\u7528\u7EC4\u4EF6\u7684 render \u65B9\u6CD5\u83B7\u53D6\u7EC4\u4EF6\u8FD4\u56DE\u7684\u6700\u65B0\u7684 Virtual DOM \u5BF9\u8C61\uFF0C\u518D\u5C06 Virtual DOM \u5BF9\u8C61\u4F20\u9012\u7ED9 diff \u65B9\u6CD5\uFF0C\u8BA9 diff \u65B9\u6CD5\u627E\u51FA\u5DEE\u5F02\uFF0C\u4ECE\u800C\u5C06\u5DEE\u5F02\u66F4\u65B0\u5230\u771F\u5B9E DOM \u5BF9\u8C61\u4E2D\u3002",paraId:111,tocIndex:16},{value:"\u5728\u66F4\u65B0\u7EC4\u4EF6\u7684\u8FC7\u7A0B\u4E2D\u8FD8\u8981\u5728\u4E0D\u540C\u9636\u6BB5\u8C03\u7528\u5176\u4E0D\u540C\u7684\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u51FD\u6570\u3002",paraId:112,tocIndex:16},{value:"\u5728 diff \u65B9\u6CD5\u4E2D\u5224\u65AD\u8981\u66F4\u65B0\u7684 Virtual DOM \u662F\u5426\u662F\u7EC4\u4EF6\uFF0C\u5982\u679C\u662F\u7EC4\u4EF6\u53C8\u5206\u4E3A\u591A\u79CD\u60C5\u51B5\uFF0C\u65B0\u589E diffComponent \u65B9\u6CD5\u8FDB\u884C\u5904\u7406",paraId:113,tocIndex:16},{value:`else if (typeof virtualDOM.type === "function") {
  // \u8981\u66F4\u65B0\u7684\u662F\u7EC4\u4EF6
  // 1) \u7EC4\u4EF6\u672C\u8EAB\u7684 virtualDOM \u5BF9\u8C61 \u901A\u8FC7\u5B83\u53EF\u4EE5\u83B7\u53D6\u5230\u7EC4\u4EF6\u6700\u65B0\u7684 props
  // 2) \u8981\u66F4\u65B0\u7684\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61 \u901A\u8FC7\u5B83\u53EF\u4EE5\u8C03\u7528\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u51FD\u6570 \u53EF\u4EE5\u66F4\u65B0\u7EC4\u4EF6\u7684 props \u5C5E\u6027 \u53EF\u4EE5\u83B7\u53D6\u5230\u7EC4\u4EF6\u8FD4\u56DE\u7684\u6700\u65B0\u7684 Virtual DOM
  // 3) \u8981\u66F4\u65B0\u7684 DOM \u8C61 \u5728\u66F4\u65B0\u7EC4\u4EF6\u65F6 \u9700\u8981\u5728\u5DF2\u6709DOM\u5BF9\u8C61\u7684\u8EAB\u4E0A\u8FDB\u884C\u4FEE\u6539 \u5B9E\u73B0DOM\u6700\u5C0F\u5316\u64CD\u4F5C \u83B7\u53D6\u65E7\u7684 Virtual DOM \u5BF9\u8C61
  // 4) \u5982\u679C\u8981\u66F4\u65B0\u7684\u7EC4\u4EF6\u548C\u65E7\u7EC4\u4EF6\u4E0D\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6 \u8981\u76F4\u63A5\u5C06\u7EC4\u4EF6\u8FD4\u56DE\u7684 Virtual DOM \u663E\u793A\u5728\u9875\u9762\u4E2D \u6B64\u65F6\u9700\u8981 container \u505A\u4E3A\u7236\u7EA7\u5BB9\u5668
  diffComponent(virtualDOM, oldComponent, oldDOM, container)
}
`,paraId:114,tocIndex:16},{value:"\u5728 diffComponent \u65B9\u6CD5\u4E2D\u5224\u65AD\u8981\u66F4\u65B0\u7684\u7EC4\u4EF6\u662F\u672A\u66F4\u65B0\u524D\u7684\u7EC4\u4EF6\u662F\u5426\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6",paraId:115,tocIndex:16},{value:`// diffComponent.js
export default function diffComponent(virtualDOM, oldComponent, oldDOM, container) {
  // \u5224\u65AD\u8981\u66F4\u65B0\u7684\u7EC4\u4EF6\u548C\u672A\u66F4\u65B0\u7684\u7EC4\u4EF6\u662F\u5426\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6 \u53EA\u9700\u8981\u786E\u5B9A\u4E24\u8005\u4F7F\u7528\u7684\u662F\u5426\u662F\u540C\u4E00\u4E2A\u6784\u9020\u51FD\u6570\u5C31\u53EF\u4EE5\u4E86
  if (isSameComponent(virtualDOM, oldComponent)) {
    // \u5C5E\u540C\u4E00\u4E2A\u7EC4\u4EF6 \u505A\u7EC4\u4EF6\u66F4\u65B0
  } else {
    // \u4E0D\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6 \u76F4\u63A5\u5C06\u7EC4\u4EF6\u5185\u5BB9\u663E\u793A\u5728\u9875\u9762\u4E2D
  }
}
// virtualDOM.type \u66F4\u65B0\u540E\u7684\u7EC4\u4EF6\u6784\u9020\u51FD\u6570
// oldComponent.constructor \u672A\u66F4\u65B0\u524D\u7684\u7EC4\u4EF6\u6784\u9020\u51FD\u6570
// \u4E24\u8005\u7B49\u4EF7\u5C31\u8868\u793A\u662F\u540C\u4E00\u7EC4\u4EF6
function isSameComponent(virtualDOM, oldComponent) {
  return oldComponent && virtualDOM.type === oldComponent.constructor
}
`,paraId:116,tocIndex:16},{value:"\u5982\u679C\u4E0D\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6\u7684\u8BDD\uFF0C\u5C31\u4E0D\u9700\u8981\u6267\u884C\u66F4\u65B0\u7EC4\u4EF6\u7684\u64CD\u4F5C\uFF0C\u76F4\u63A5\u5C06\u7EC4\u4EF6\u5185\u5BB9\u663E\u793A\u5728\u9875\u9762\u4E2D\uFF0C\u66FF\u6362\u539F\u6709\u5185\u5BB9",paraId:117,tocIndex:16},{value:`// diffComponent.js
else {
  // \u4E0D\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6 \u76F4\u63A5\u5C06\u7EC4\u4EF6\u5185\u5BB9\u663E\u793A\u5728\u9875\u9762\u4E2D
  // \u8FD9\u91CC\u4E3A mountElement \u65B9\u6CD5\u65B0\u589E\u4E86\u4E00\u4E2A\u53C2\u6570 oldDOM
  // \u4F5C\u7528\u662F\u5728\u5C06 DOM \u5BF9\u8C61\u63D2\u5165\u5230\u9875\u9762\u524D \u5C06\u9875\u9762\u4E2D\u5DF2\u5B58\u5728\u7684 DOM \u5BF9\u8C61\u5220\u9664 \u5426\u5219\u65E0\u8BBA\u662F\u65E7DOM\u5BF9\u8C61\u8FD8\u662F\u65B0DOM\u5BF9\u8C61\u90FD\u4F1A\u663E\u793A\u5728\u9875\u9762\u4E2D
  mountElement(virtualDOM, container, oldDOM)
}
`,paraId:118,tocIndex:16},{value:"\u5728 mountNativeElement \u65B9\u6CD5\u4E2D\u5220\u9664\u539F\u6709\u7684\u65E7 DOM \u5BF9\u8C61",paraId:119,tocIndex:16},{value:`// mountNavtiveElement.js
export default function mountNativeElement(virtualDOM, container, oldDOM) {
  // \u5982\u679C\u65E7\u7684DOM\u5BF9\u8C61\u5B58\u5728 \u5220\u9664
  if (oldDOM) {
    unmount(oldDOM);
  }
}
`,paraId:120,tocIndex:16},{value:`// unmount.js
export default function unmount(node) {
  node.remove()
}
`,paraId:121,tocIndex:16},{value:"\u5982\u679C\u662F\u540C\u4E00\u4E2A\u7EC4\u4EF6\u7684\u8BDD\uFF0C\u9700\u8981\u6267\u884C\u7EC4\u4EF6\u66F4\u65B0\u64CD\u4F5C\uFF0C\u9700\u8981\u8C03\u7528\u7EC4\u4EF6\u751F\u547D\u5468\u671F\u51FD\u6570",paraId:122,tocIndex:16},{value:"\u5148\u5728 Component \u7C7B\u4E2D\u6DFB\u52A0\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u5B50\u7C7B\u8981\u4F7F\u7528\u7684\u8BDD\u76F4\u63A5\u8986\u76D6\u5C31\u53EF\u4EE5",paraId:123,tocIndex:16},{value:`// Component.js
export default class Component {
  // \u751F\u547D\u5468\u671F\u51FD\u6570
  componentWillMount() {}
  componentDidMount() {}
  componentWillReceiveProps(nextProps) {}
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps != this.props || nextState != this.state
  }
  componentWillUpdate(nextProps, nextState) {}
  componentDidUpdate(prevProps, preState) {}
  componentWillUnmount() {}
}
`,paraId:124,tocIndex:16},{value:"\u65B0\u5EFA updateComponent \u65B9\u6CD5\u7528\u4E8E\u66F4\u65B0\u7EC4\u4EF6\u64CD\u4F5C\uFF0C\u5E76\u5728 if \u6210\u7ACB\u540E\u8C03\u7528",paraId:125,tocIndex:16},{value:`// diffComponent.js
if (isSameComponent(virtualDOM, oldComponent)) {
  // \u5C5E\u540C\u4E00\u4E2A\u7EC4\u4EF6 \u505A\u7EC4\u4EF6\u66F4\u65B0
  updateComponent(virtualDOM, oldComponent, oldDOM, container)
}
`,paraId:126,tocIndex:16},{value:"\u5728 updateComponent \u65B9\u6CD5\u4E2D\u8C03\u7528\u7EC4\u4EF6\u7684\u751F\u547D\u5468\u671F\u51FD\u6570\uFF0C\u66F4\u65B0\u7EC4\u4EF6\u83B7\u53D6\u6700\u65B0 Virtual DOM\uFF0C\u6700\u7EC8\u8C03\u7528 diff \u65B9\u6CD5\u8FDB\u884C\u66F4\u65B0",paraId:127,tocIndex:16},{value:`import diff from "./diff"

export default function updateComponent(
  virtualDOM,
  oldComponent,
  oldDOM,
  container
) {
  // \u751F\u547D\u5468\u671F\u51FD\u6570
  oldComponent.componentWillReceiveProps(virtualDOM.props)
  if (
    // \u8C03\u7528 shouldComponentUpdate \u751F\u547D\u5468\u671F\u51FD\u6570\u5224\u65AD\u662F\u5426\u8981\u6267\u884C\u66F4\u65B0\u64CD\u4F5C
    oldComponent.shouldComponentUpdate(virtualDOM.props)
  ) {
    // \u5C06\u672A\u66F4\u65B0\u7684 props \u4FDD\u5B58\u4E00\u4EFD
    let prevProps = oldComponent.props
    // \u751F\u547D\u5468\u671F\u51FD\u6570
    oldComponent.componentWillUpdate(virtualDOM.props)
    // \u66F4\u65B0\u7EC4\u4EF6\u7684 props \u5C5E\u6027 updateProps \u65B9\u6CD5\u5B9A\u4E49\u5728 Component \u7C7B\u578B
    oldComponent.updateProps(virtualDOM.props)
    // \u56E0\u4E3A\u7EC4\u4EF6\u7684 props \u5DF2\u7ECF\u66F4\u65B0 \u6240\u4EE5\u8C03\u7528 render \u65B9\u6CD5\u83B7\u53D6\u6700\u65B0\u7684 Virtual DOM
    const nextVirtualDOM = oldComponent.render()
    // \u5C06\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u6302\u8F7D\u5230 Virtual DOM \u8EAB\u4E0A
    nextVirtualDOM.component = oldComponent
    // \u8C03\u7528diff\u65B9\u6CD5\u66F4\u65B0\u89C6\u56FE
    diff(nextVirtualDOM, container, oldDOM)
    // \u751F\u547D\u5468\u671F\u51FD\u6570
    oldComponent.componentDidUpdate(prevProps)
  }
}
`,paraId:128,tocIndex:16},{value:`// Component.js
export default class Component {
  updateProps(props) {
    this.props = props
  }
}
`,paraId:129,tocIndex:16},{value:"\u4E3A\u8282\u70B9\u6DFB\u52A0 ref \u5C5E\u6027\u53EF\u4EE5\u83B7\u53D6\u5230\u8FD9\u4E2A\u8282\u70B9\u7684 DOM \u5BF9\u8C61\uFF0C\u6BD4\u5982\u5728 DemoRef \u7C7B\u4E2D\uFF0C\u4E3A input \u5143\u7D20\u6DFB\u52A0\u4E86 ref \u5C5E\u6027\uFF0C\u76EE\u7684\u662F\u83B7\u53D6 input DOM \u5143\u7D20\u5BF9\u8C61\uFF0C\u5728\u70B9\u51FB\u6309\u94AE\u65F6\u83B7\u53D6\u7528\u6237\u5728\u6587\u672C\u6846\u4E2D\u8F93\u5165\u7684\u5185\u5BB9",paraId:130,tocIndex:17},{value:`class DemoRef extends TinyReact.Component {
  handle() {
    let value = this.input.value
    console.log(value)
  }
  render() {
    return (
      <div>
        <input type="text" ref={input => (this.input = input)} />
        <button onClick={this.handle.bind(this)}>\u6309\u94AE</button>
      </div>
    )
  }
}
`,paraId:131,tocIndex:17},{value:"\u5B9E\u73B0\u601D\u8DEF\u662F\u5728\u521B\u5EFA\u8282\u70B9\u65F6\u5224\u65AD\u5176 Virtual DOM \u5BF9\u8C61\u4E2D\u662F\u5426\u6709 ref \u5C5E\u6027\uFF0C\u5982\u679C\u6709\u5C31\u8C03\u7528 ref \u5C5E\u6027\u4E2D\u6240\u5B58\u50A8\u7684\u65B9\u6CD5\u5E76\u4E14\u5C06\u521B\u5EFA\u51FA\u6765\u7684 DOM \u5BF9\u8C61\u4F5C\u4E3A\u53C2\u6570\u4F20\u9012\u7ED9 ref \u65B9\u6CD5\uFF0C\u8FD9\u6837\u5728\u6E32\u67D3\u7EC4\u4EF6\u8282\u70B9\u7684\u65F6\u5019\u5C31\u53EF\u4EE5\u62FF\u5230\u5143\u7D20\u5BF9\u8C61\u5E76\u5C06\u5143\u7D20\u5BF9\u8C61\u5B58\u50A8\u4E3A\u7EC4\u4EF6\u5C5E\u6027\u4E86\u3002",paraId:132,tocIndex:17},{value:`// createDOMElement.js
if (virtualDOM.props && virtualDOM.props.ref) {
  virtualDOM.props.ref(newElement)
}
`,paraId:133,tocIndex:17},{value:"\u5728\u7C7B\u7EC4\u4EF6\u7684\u8EAB\u4E0A\u4E5F\u53EF\u4EE5\u6DFB\u52A0 ref \u5C5E\u6027\uFF0C\u76EE\u7684\u662F\u83B7\u53D6\u7EC4\u4EF6\u7684\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u6BD4\u5982\u4E0B\u5217\u4EE3\u7801\u4E2D\uFF0C\u5728 DemoRef \u7EC4\u4EF6\u4E2D\u6E32\u67D3\u4E86 Alert \u7EC4\u4EF6\uFF0C\u5728 Alert \u7EC4\u4EF6\u4E2D\u6DFB\u52A0\u4E86 ref \u5C5E\u6027\uFF0C\u76EE\u7684\u662F\u5728 DemoRef \u7EC4\u4EF6\u4E2D\u83B7\u53D6 Alert \u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u3002",paraId:134,tocIndex:17},{value:`class DemoRef extends TinyReact.Component {
  handle() {
    let value = this.input.value
    console.log(value)
    console.log(this.alert)
  }
  componentDidMount() {
    console.log("componentDidMount")
  }
  render() {
    return (
      <div>
        <input type="text" ref={input => (this.input = input)} />
        <button onClick={this.handle.bind(this)}>\u6309\u94AE</button>
        <Alert ref={alert => (this.alert = alert)} />
      </div>
    )
  }
}
`,paraId:135,tocIndex:17},{value:"\u5B9E\u73B0\u601D\u8DEF\u662F\u5728 mountComponent \u65B9\u6CD5\u4E2D\uFF0C\u5982\u679C\u5224\u65AD\u4E86\u5F53\u524D\u5904\u7406\u7684\u662F\u7C7B\u7EC4\u4EF6\uFF0C\u5C31\u901A\u8FC7\u7C7B\u7EC4\u4EF6\u8FD4\u56DE\u7684 Virtual DOM \u5BF9\u8C61\u4E2D\u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\uFF0C\u5224\u65AD\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u4E2D\u7684 props \u5C5E\u6027\u4E2D\u662F\u5426\u5B58\u5728 ref \u5C5E\u6027\uFF0C\u5982\u679C\u5B58\u5728\u5C31\u8C03\u7528 ref \u65B9\u6CD5\u5E76\u4E14\u5C06\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u4F20\u9012\u7ED9 ref \u65B9\u6CD5\u3002",paraId:136,tocIndex:17},{value:`// mountComponent.js
let component = null
  if (isFunctionalComponent(virtualDOM)) {}
	else {
    // \u7C7B\u7EC4\u4EF6
    nextVirtualDOM = buildStatefulComponent(virtualDOM)
    // \u83B7\u53D6\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61
    component = nextVirtualDOM.component
  }
	// \u5982\u679C\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u5B58\u5728\u7684\u8BDD
	if (component) {
   	// \u5224\u65AD\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u8EAB\u4E0A\u662F\u5426\u6709 props \u5C5E\u6027 props \u5C5E\u6027\u4E2D\u662F\u5426\u6709 ref \u5C5E\u6027
    if (component.props && component.props.ref) {
      // \u8C03\u7528 ref \u65B9\u6CD5\u5E76\u4F20\u9012\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61
      component.props.ref(component)
    }
  }

`,paraId:137,tocIndex:17},{value:"\u4EE3\u7801\u8D70\u5230\u8FD9\uFF0C\u987A\u4FBF\u5904\u7406\u4E00\u4E0B\u7EC4\u4EF6\u6302\u8F7D\u5B8C\u6210\u7684\u751F\u547D\u5468\u671F\u51FD\u6570",paraId:138,tocIndex:17},{value:`// \u5982\u679C\u7EC4\u4EF6\u5B9E\u4F8B\u5BF9\u8C61\u5B58\u5728\u7684\u8BDD
if (component) {
  component.componentDidMount()
}
`,paraId:139,tocIndex:17},{value:"\u5728 React \u4E2D\uFF0C\u6E32\u67D3\u5217\u8868\u6570\u636E\u65F6\u901A\u5E38\u4F1A\u5728\u88AB\u6E32\u67D3\u7684\u5217\u8868\u5143\u7D20\u4E0A\u6DFB\u52A0 key \u5C5E\u6027\uFF0Ckey \u5C5E\u6027\u5C31\u662F\u6570\u636E\u7684\u552F\u4E00\u6807\u8BC6\uFF0C\u5E2E\u52A9 React \u8BC6\u522B\u54EA\u4E9B\u6570\u636E\u88AB\u4FEE\u6539\u6216\u8005\u5220\u9664\u4E86\uFF0C\u4ECE\u800C\u8FBE\u5230 DOM \u6700\u5C0F\u5316\u64CD\u4F5C\u7684\u76EE\u7684\u3002",paraId:140,tocIndex:18},{value:"key \u5C5E\u6027\u4E0D\u9700\u8981\u5168\u5C40\u552F\u4E00\uFF0C\u4F46\u662F\u5728\u540C\u4E00\u4E2A\u7236\u8282\u70B9\u4E0B\u7684\u5144\u5F1F\u8282\u70B9\u4E4B\u95F4\u5FC5\u987B\u662F\u552F\u4E00\u7684\u3002",paraId:141,tocIndex:18},{value:"\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5728\u6BD4\u5BF9\u540C\u4E00\u4E2A\u7236\u8282\u70B9\u4E0B\u7C7B\u578B\u76F8\u540C\u7684\u5B50\u8282\u70B9\u65F6\u9700\u8981\u7528\u5230 key \u5C5E\u6027\u3002",paraId:142,tocIndex:18},{value:"\u5B9E\u73B0\u601D\u8DEF\u662F\u5728\u4E24\u4E2A\u5143\u7D20\u8FDB\u884C\u6BD4\u5BF9\u65F6\uFF0C\u5982\u679C\u7C7B\u578B\u76F8\u540C\uFF0C\u5C31\u5FAA\u73AF\u65E7\u7684 DOM \u5BF9\u8C61\u7684\u5B50\u5143\u7D20\uFF0C\u67E5\u770B\u5176\u8EAB\u4E0A\u662F\u5426\u6709 key \u5C5E\u6027\uFF0C\u5982\u679C\u6709\u5C31\u5C06\u8FD9\u4E2A\u5B50\u5143\u7D20\u7684 DOM \u5BF9\u8C61\u5B58\u50A8\u5728\u4E00\u4E2A JavaScript \u5BF9\u8C61\u4E2D\uFF0C\u63A5\u7740\u5FAA\u73AF\u8981\u6E32\u67D3\u7684 Virtual DOM \u5BF9\u8C61\u7684\u5B50\u5143\u7D20\uFF0C\u5728\u5FAA\u73AF\u8FC7\u7A0B\u4E2D\u83B7\u53D6\u5230\u8FD9\u4E2A\u5B50\u5143\u7D20\u7684 key \u5C5E\u6027\uFF0C\u7136\u540E\u4F7F\u7528\u8FD9\u4E2A key \u5C5E\u6027\u5230 JavaScript \u5BF9\u8C61\u4E2D\u67E5\u627E DOM \u5BF9\u8C61\uFF0C\u5982\u679C\u80FD\u591F\u627E\u5230\u5C31\u8BF4\u660E\u8FD9\u4E2A\u5143\u7D20\u662F\u5DF2\u7ECF\u5B58\u5728\u7684\uFF0C\u662F\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3\u7684\u3002\u5982\u679C\u901A\u8FC7 key \u5C5E\u6027\u627E\u4E0D\u5230\u8FD9\u4E2A\u5143\u7D20\uFF0C\u5C31\u8BF4\u660E\u8FD9\u4E2A\u5143\u7D20\u662F\u65B0\u589E\u7684\u662F\u9700\u8981\u6E32\u67D3\u7684\u3002",paraId:143,tocIndex:19},{value:`// diff.js
else if (oldVirtualDOM && virtualDOM.type === oldVirtualDOM.type) {
  // \u5C06\u62E5\u6709key\u5C5E\u6027\u7684\u5143\u7D20\u653E\u5165 keyedElements \u5BF9\u8C61\u4E2D
  let keyedElements = {}
  for (let i = 0, len = oldDOM.childNodes.length; i < len; i++) {
    let domElement = oldDOM.childNodes[i]
    if (domElement.nodeType === 1) {
      let key = domElement.getAttribute("key")
      if (key) {
        keyedElements[key] = domElement
      }
    }
  }
}
`,paraId:144,tocIndex:19},{value:`// diff.js
// \u770B\u4E00\u770B\u662F\u5426\u6709\u627E\u5230\u4E86\u62E5\u6709 key \u5C5E\u6027\u7684\u5143\u7D20
let hasNoKey = Object.keys(keyedElements).length === 0

// \u5982\u679C\u6CA1\u6709\u627E\u5230\u62E5\u6709 key \u5C5E\u6027\u7684\u5143\u7D20 \u5C31\u6309\u7167\u7D22\u5F15\u8FDB\u884C\u6BD4\u8F83
if (hasNoKey) {
  // \u9012\u5F52\u5BF9\u6BD4 Virtual DOM \u7684\u5B50\u5143\u7D20
  virtualDOM.children.forEach((child, i) => {
    diff(child, oldDOM, oldDOM.childNodes[i])
  })
} else {
  // \u4F7F\u7528key\u5C5E\u6027\u8FDB\u884C\u5143\u7D20\u6BD4\u8F83
  virtualDOM.children.forEach((child, i) => {
    // \u83B7\u53D6\u8981\u8FDB\u884C\u6BD4\u5BF9\u7684\u5143\u7D20\u7684 key \u5C5E\u6027
    let key = child.props.key
    // \u5982\u679C key \u5C5E\u6027\u5B58\u5728
    if (key) {
      // \u5230\u5DF2\u5B58\u5728\u7684 DOM \u5143\u7D20\u5BF9\u8C61\u4E2D\u67E5\u627E\u5BF9\u5E94\u7684 DOM \u5143\u7D20
      let domElement = keyedElements[key]
      // \u5982\u679C\u627E\u5230\u5143\u7D20\u5C31\u8BF4\u660E\u8BE5\u5143\u7D20\u5DF2\u7ECF\u5B58\u5728 \u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3
      if (domElement) {
        // \u867D\u7136 DOM \u5143\u7D20\u4E0D\u9700\u8981\u91CD\u65B0\u6E32\u67D3 \u4F46\u662F\u4E0D\u80FD\u786E\u5B9A\u5143\u7D20\u7684\u4F4D\u7F6E\u5C31\u4E00\u5B9A\u6CA1\u6709\u53D1\u751F\u53D8\u5316
        // \u6240\u4EE5\u8FD8\u8981\u67E5\u770B\u4E00\u4E0B\u5143\u7D20\u7684\u4F4D\u7F6E
        // \u770B\u4E00\u4E0B oldDOM \u5BF9\u5E94\u7684(i)\u5B50\u5143\u7D20\u548C domElement \u662F\u5426\u662F\u540C\u4E00\u4E2A\u5143\u7D20 \u5982\u679C\u4E0D\u662F\u5C31\u8BF4\u660E\u5143\u7D20\u4F4D\u7F6E\u53D1\u751F\u4E86\u53D8\u5316
        if (oldDOM.childNodes[i] && oldDOM.childNodes[i] !== domElement) {
          // \u5143\u7D20\u4F4D\u7F6E\u53D1\u751F\u4E86\u53D8\u5316
          // \u5C06 domElement \u63D2\u5165\u5230\u5F53\u524D\u5143\u7D20\u4F4D\u7F6E\u7684\u524D\u9762 oldDOM.childNodes[i] \u5C31\u662F\u5F53\u524D\u4F4D\u7F6E
          // domElement \u5C31\u88AB\u653E\u5165\u4E86\u5F53\u524D\u4F4D\u7F6E
          oldDOM.insertBefore(domElement, oldDOM.childNodes[i])
        }
      } else {
        mountElement(child, oldDOM, oldDOM.childNodes[i])
      }
    }
  })
}
`,paraId:145,tocIndex:19},{value:`// mountNativeElement.js
if (oldDOM) {
  container.insertBefore(newElement, oldDOM)
} else {
  // \u5C06\u8F6C\u6362\u4E4B\u540E\u7684DOM\u5BF9\u8C61\u653E\u7F6E\u5728\u9875\u9762\u4E2D
  container.appendChild(newElement)
}
`,paraId:146,tocIndex:19},{value:"\u5728\u6BD4\u5BF9\u8282\u70B9\u7684\u8FC7\u7A0B\u4E2D\uFF0C\u5982\u679C\u65E7\u8282\u70B9\u7684\u6570\u91CF\u591A\u4E8E\u8981\u6E32\u67D3\u7684\u65B0\u8282\u70B9\u7684\u6570\u91CF\u5C31\u8BF4\u660E\u6709\u8282\u70B9\u88AB\u5220\u9664\u4E86\uFF0C\u7EE7\u7EED\u5224\u65AD keyedElements \u5BF9\u8C61\u4E2D\u662F\u5426\u6709\u5143\u7D20\uFF0C\u5982\u679C\u6CA1\u6709\u5C31\u4F7F\u7528\u7D22\u5F15\u65B9\u5F0F\u5220\u9664\uFF0C\u5982\u679C\u6709\u5C31\u8981\u4F7F\u7528 key \u5C5E\u6027\u6BD4\u5BF9\u7684\u65B9\u5F0F\u8FDB\u884C\u5220\u9664\u3002",paraId:147,tocIndex:20},{value:"\u5B9E\u73B0\u601D\u8DEF\u662F\u5FAA\u73AF\u65E7\u8282\u70B9\uFF0C\u5728\u5FAA\u73AF\u65E7\u8282\u70B9\u7684\u8FC7\u7A0B\u4E2D\u83B7\u53D6\u65E7\u8282\u70B9\u5BF9\u5E94\u7684 key \u5C5E\u6027\uFF0C\u7136\u540E\u6839\u636E key \u5C5E\u6027\u5728\u65B0\u8282\u70B9\u4E2D\u67E5\u627E\u8FD9\u4E2A\u65E7\u8282\u70B9\uFF0C\u5982\u679C\u627E\u5230\u5C31\u8BF4\u660E\u8FD9\u4E2A\u8282\u70B9\u6CA1\u6709\u88AB\u5220\u9664\uFF0C\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u5C31\u8BF4\u660E\u8282\u70B9\u88AB\u5220\u9664\u4E86\uFF0C\u8C03\u7528\u5378\u8F7D\u8282\u70B9\u7684\u65B9\u6CD5\u5378\u8F7D\u8282\u70B9\u5373\u53EF\u3002",paraId:148,tocIndex:20},{value:`// \u83B7\u53D6\u5C31\u8282\u70B9\u7684\u6570\u91CF
let oldChildNodes = oldDOM.childNodes
// \u5982\u679C\u65E7\u8282\u70B9\u7684\u6570\u91CF\u591A\u4E8E\u8981\u6E32\u67D3\u7684\u65B0\u8282\u70B9\u7684\u957F\u5EA6
if (oldChildNodes.length > virtualDOM.children.length) {
  if (hasNoKey) {
    for (
      let i = oldChildNodes.length - 1;
      i >= virtualDOM.children.length;
      i--
    ) {
      oldDOM.removeChild(oldChildNodes[i])
    }
  } else {
    for (let i = 0; i < oldChildNodes.length; i++) {
      let oldChild = oldChildNodes[i]
      let oldChildKey = oldChild._virtualDOM.props.key
      let found = false
      for (let n = 0; n < virtualDOM.children.length; n++) {
        if (oldChildKey === virtualDOM.children[n].props.key) {
          found = true
          break
        }
      }
      if (!found) {
        unmount(oldChild)
        i--
      }
    }
  }
}
`,paraId:149,tocIndex:20},{value:"\u5378\u8F7D\u8282\u70B9\u5E76\u4E0D\u662F\u8BF4\u5C06\u8282\u70B9\u76F4\u63A5\u5220\u9664\u5C31\u53EF\u4EE5\u4E86\uFF0C\u8FD8\u9700\u8981\u8003\u8651\u4EE5\u4E0B\u51E0\u79CD\u60C5\u51B5",paraId:150,tocIndex:20},{value:"\u5982\u679C\u8981\u5220\u9664\u7684\u8282\u70B9\u662F\u6587\u672C\u8282\u70B9\u7684\u8BDD\u53EF\u4EE5\u76F4\u63A5\u5220\u9664",paraId:151,tocIndex:20},{value:"\u5982\u679C\u8981\u5220\u9664\u7684\u8282\u70B9\u7531\u7EC4\u4EF6\u751F\u6210\uFF0C\u9700\u8981\u8C03\u7528\u7EC4\u4EF6\u5378\u8F7D\u751F\u547D\u5468\u671F\u51FD\u6570",paraId:151,tocIndex:20},{value:"\u5982\u679C\u8981\u5220\u9664\u7684\u8282\u70B9\u4E2D\u5305\u542B\u4E86\u5176\u4ED6\u7EC4\u4EF6\u751F\u6210\u7684\u8282\u70B9\uFF0C\u9700\u8981\u8C03\u7528\u5176\u4ED6\u7EC4\u4EF6\u7684\u5378\u8F7D\u751F\u547D\u5468\u671F\u51FD\u6570",paraId:151,tocIndex:20},{value:"\u5982\u679C\u8981\u5220\u9664\u7684\u8282\u70B9\u8EAB\u4E0A\u6709 ref \u5C5E\u6027\uFF0C\u8FD8\u9700\u8981\u5220\u9664\u901A\u8FC7 ref \u5C5E\u6027\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684 DOM \u8282\u70B9\u5BF9\u8C61",paraId:151,tocIndex:20},{value:"\u5982\u679C\u8981\u5220\u9664\u7684\u8282\u70B9\u8EAB\u4E0A\u6709\u4E8B\u4EF6\uFF0C\u9700\u8981\u5220\u9664\u4E8B\u4EF6\u5BF9\u5E94\u7684\u4E8B\u4EF6\u5904\u7406\u51FD\u6570",paraId:151,tocIndex:20},{value:`export default function unmount(dom) {
  // \u83B7\u53D6\u8282\u70B9\u5BF9\u5E94\u7684 virtualDOM \u5BF9\u8C61
  const virtualDOM = dom._virtualDOM
  // \u5982\u679C\u8981\u5220\u9664\u7684\u8282\u70B9\u65F6\u6587\u672C
  if (virtualDOM.type === "text") {
    // \u76F4\u63A5\u5220\u9664\u8282\u70B9
    dom.remove()
    // \u963B\u6B62\u7A0B\u5E8F\u5411\u4E0B\u8FD0\u884C
    return
  }
  // \u67E5\u770B\u8282\u70B9\u662F\u5426\u7531\u7EC4\u4EF6\u751F\u6210
  let component = virtualDOM.component
  // \u5982\u679C\u7531\u7EC4\u4EF6\u751F\u6210
  if (component) {
    // \u8C03\u7528\u7EC4\u4EF6\u5378\u8F7D\u751F\u547D\u5468\u671F\u51FD\u6570
    component.componentWillUnmount()
  }

  // \u5982\u679C\u8282\u70B9\u5177\u6709 ref \u5C5E\u6027 \u901A\u8FC7\u518D\u6B21\u8C03\u7528 ref \u65B9\u6CD5 \u5C06\u4F20\u9012\u7ED9\u7EC4\u4EF6\u7684DOM\u5BF9\u8C61\u5220\u9664
  if (virtualDOM.props && virtualDOM.props.ref) {
    virtualDOM.props.ref(null)
  }

  // \u4E8B\u4EF6\u5904\u7406
  Object.keys(virtualDOM.props).forEach(propName => {
    if (propName.slice(0, 2) === "on") {
      const eventName = propName.toLowerCase().slice(2)
      const eventHandler = virtualDOM.props[propName]
      dom.removeEventListener(eventName, eventHandler)
    }
  })

  // \u9012\u5F52\u5220\u9664\u5B50\u8282\u70B9
  if (dom.childNodes.length > 0) {
    for (let i = 0; i < dom.childNodes.length; i++) {
      unmount(dom.childNodes[i])
      i--
    }
  }

  dom.remove()
}

`,paraId:152,tocIndex:20}]}}]);
