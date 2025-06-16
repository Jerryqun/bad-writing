"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1834],{56662:function(u,a,e){e.r(a);var o=e(72269),_=e(93359),c=e(61788),v=e(19977),x=e(91558),r=e(24268),h=e(96057),m=e(85939),l=e(53683),i=e(80936),d=e(67294),t=e(45463),n=e(85893);function s(){return(0,n.jsx)(l.dY,{children:(0,n.jsx)(d.Suspense,{fallback:(0,n.jsx)(i.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"eval\u548C-new-function",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#eval\u548C-new-function",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"eval()\u548C new Function()"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{target:"_blank",href:"https://www.jianshu.com/p/db7ec7b51933",children:t.texts[0].value})}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[1].value}),(0,n.jsxs)("h2",{id:"\u533A\u522B",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u533A\u522B",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u533A\u522B"]}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[2].value}),(0,n.jsxs)("h2",{id:"eval5",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#eval5",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"eval5"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://developers.weixin.qq.com/community/develop/article/doc/0008e04edb0a782baad9f463251813",children:t.texts[3].value})}),(0,n.jsx)("p",{children:t.texts[4].value}),(0,n.jsx)("p",{children:t.texts[5].value}),(0,n.jsx)("p",{children:t.texts[6].value}),(0,n.jsx)("p",{children:t.texts[7].value}),(0,n.jsx)("p",{children:t.texts[8].value}),(0,n.jsx)("p",{children:t.texts[9].value}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[10].value}),(0,n.jsxs)("h2",{id:"\u600E\u4E48\u5728-react-\u6280\u672F\u6808\u7684\u4F4E\u4EE3\u7801\u5E73\u53F0\u4E2D\u5B9E\u73B0\u7EC4\u4EF6\u7684\u811A\u672C\u6CE8\u5165-\u4F7F\u7528-new-function",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u600E\u4E48\u5728-react-\u6280\u672F\u6808\u7684\u4F4E\u4EE3\u7801\u5E73\u53F0\u4E2D\u5B9E\u73B0\u7EC4\u4EF6\u7684\u811A\u672C\u6CE8\u5165-\u4F7F\u7528-new-function",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u600E\u4E48\u5728 react \u6280\u672F\u6808\u7684\u4F4E\u4EE3\u7801\u5E73\u53F0\u4E2D\uFF0C\u5B9E\u73B0\u7EC4\u4EF6\u7684\u811A\u672C\u6CE8\u5165\uFF1F \u4F7F\u7528 new Function"]}),(0,n.jsx)(r.Z,{lang:"js",children:t.texts[11].value})]})})})})}a.default=s},45463:function(u,a,e){e.r(a),e.d(a,{texts:function(){return o}});const o=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:`const a = eval('{ foo: 123 }'); // 123
const b = eval('({ foo: 123 })'); // {foo:123}

const sum = eval('30*10+5');
console.log('sum', sum); // 305

// \u5728\u677E\u6563\u6A21\u5F0F\u4E0B\u8FD0\u884C\u4EE3\u7801\u4F1A\u5728\u5F53\u524D\u7684\u4F5C\u7528\u57DF\u4E2D\u521B\u5EFA\u5C40\u90E8\u53D8\u91CF
function f() {
  eval('var foo = 1');
  console.log(foo); // 1
}

function f() {
  'use strict';
  eval('var foo =1');
  console.log(foo); // ReferenceError: foo is not defined
}

var f = new Function('x', 'y', 'return x+y');
f(3, 4); // 7
`,paraId:1,tocIndex:0},{value:`var hello = 10;
function createFunction1() {
  var hello = 20;
  return new Function('return hello;'); // \u8FD9\u91CC\u7684 hello \u6307\u5411\u5168\u5C40\u4F5C\u7528\u57DF\u5185\u7684 hello
}
var f1 = createFunction1();
console.log(f1()); // 10

var world = 10;
function createFunction2() {
  var world = 20;
  return eval('world;'); // \u8FD9\u91CC\u7684 world \u6307\u5411\u51FD\u6570\u4F5C\u7528\u57DF\u5185\u7684 world
}
console.log(createFunction2()); // 20

var world = 10;
function createFunction2() {
  var world = 20;
  // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/eval
  // \u4F7F\u7528\u95F4\u63A5\u8C03\u7528 (0,eval) \u6216\u8005 var geval = eval; \u53EF\u4EE5\u8FBE\u5230\u76F8\u540C\u7684\u6548\u679C
  return window.eval('world;'); // \u8FD9\u91CC\u7684 world \u6307\u5411\u5168\u5C40\u4F5C\u7528\u57DF\u5185\u7684 world
}
console.log(createFunction2()); // 10
`,paraId:2,tocIndex:1},{value:"https://developers.weixin.qq.com/community/develop/article/doc/0008e04edb0a782baad9f463251813",paraId:3,tocIndex:2},{value:"eval5 \u662F\u4E00\u4E2A JavaScript \u5E93\uFF0C\u5B83\u63D0\u4F9B\u4E86\u4E00\u4E2A\u72EC\u7ACB\u7684 JavaScript \u89E3\u91CA\u5668\u3002\u8FD9\u4E2A\u5E93\u53EF\u4EE5\u5728\u4E0D\u652F\u6301\u6807\u51C6 eval \u51FD\u6570\u6216\u8005 new Function() \u7684 JavaScript \u73AF\u5883\u4E2D\u6267\u884C JavaScript \u4EE3\u7801\uFF0C\u4F8B\u5982\u5728\u67D0\u4E9B\u9650\u5236\u4E86 eval \u4F7F\u7528\u7684\u5B89\u5168\u73AF\u5883\u6216\u8005 Web Workers \u4E2D\u3002",paraId:4,tocIndex:2},{value:"eval5 \u7684\u4E00\u4E9B\u7279\u70B9\u548C\u7528\u9014\u5305\u62EC\uFF1A",paraId:5,tocIndex:2},{value:"1\u3001\u6C99\u7BB1\u6267\u884C\uFF1A\u5B83\u5141\u8BB8\u5728\u4E00\u4E2A\u9694\u79BB\u7684\u73AF\u5883\u4E2D\u6267\u884C\u4EE3\u7801\uFF0C\u4E0D\u5F71\u54CD\u5168\u5C40\u4F5C\u7528\u57DF\uFF0C\u8FD9\u5BF9\u4E8E\u5B89\u5168\u6267\u884C\u4E0D\u53D7\u4FE1\u4EFB\u7684\u4EE3\u7801\u975E\u5E38\u6709\u7528\u3002",paraId:6,tocIndex:2},{value:"2\u3001\u8DE8\u5E73\u53F0\uFF1A\u5B83\u53EF\u4EE5\u5728\u4E0D\u540C\u7684 JavaScript \u73AF\u5883\u4E2D\u4F7F\u7528\uFF0C\u5305\u62EC\u6D4F\u89C8\u5668\u548C Node.js\u3002",paraId:7,tocIndex:2},{value:"3\u3001\u6267\u884C\u5B57\u7B26\u4E32\u4E2D\u7684\u4EE3\u7801\uFF1A\u5C31\u50CF\u5185\u7F6E\u7684 eval \u51FD\u6570\u4E00\u6837\uFF0C\u5B83\u53EF\u4EE5\u6267\u884C\u5B57\u7B26\u4E32\u5F62\u5F0F\u7684\u4EE3\u7801\u3002",paraId:8,tocIndex:2},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u4F60\u5728\u4E00\u4E2A\u9650\u5236\u4E86 eval \u7684\u73AF\u5883\u4E2D\uFF0C\u53EF\u4EE5\u4F7F\u7528 eval5 \u6765\u95F4\u63A5\u5B9E\u73B0\u7C7B\u4F3C eval \u7684\u529F\u80FD\uFF1A",paraId:9,tocIndex:2},{value:`import { Interpreter } from 'eval5';

const interpreter = new Interpreter(window); // \u4F20\u5165\u5168\u5C40\u5BF9\u8C61\uFF0C\u4F8B\u5982\u5728\u6D4F\u89C8\u5668\u4E2D\u53EF\u4EE5\u662F window
const result = interpreter.evaluate('1 + 1'); // \u89E3\u91CA\u5E76\u6267\u884C\u5B57\u7B26\u4E32\u4E2D\u7684 JS \u4EE3\u7801
console.log(result); // \u8F93\u51FA 2
`,paraId:10,tocIndex:2},{value:`import React, { useState, useEffect } from 'react';

function CustomComponent() {
  const [value, setValue] = useState(0);
  const [customScript, setCustomScript] = useState('');

  // \u7528\u4E8E\u6267\u884C\u7528\u6237\u811A\u672C\u7684\u51FD\u6570
  const executeUserScript = (script, props, state) => {
    try {
      const scriptFn = new Function('props', 'state', script);
      return scriptFn(props, state);
    } catch (error) {
      console.error('Script execution error:', error);
    }
  };

  // \u5728\u7EC4\u4EF6\u521D\u59CB\u5316\u6216\u66F4\u65B0\u65F6\u6267\u884C
  useEffect(() => {
    if (customScript) {
      executeUserScript(
        customScript,
        { shouldIncrease: true },
        { value, setValue },
      );
    }
  }, [customScript, value]);

  // \u8F93\u5165\u6846\u8BA9\u7528\u6237\u8F93\u5165\u81EA\u5B9A\u4E49\u811A\u672C
  return (
    <div>
      <textarea
        value={customScript}
        onChange={(e) => setCustomScript(e.target.value)}
        placeholder="Enter your JavaScript code here"
      />
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increase Value</button>
    </div>
  );
}

export default CustomComponent;
`,paraId:11,tocIndex:3}]}}]);
