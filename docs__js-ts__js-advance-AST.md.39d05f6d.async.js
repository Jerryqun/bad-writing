"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8424],{96049:function(s,r,t){t.r(r);var i=t(72269),u=t(93359),c=t(61788),x=t(19977),m=t(91558),a=t(24268),p=t(96057),I=t(85939),d=t(53683),l=t(80936),o=t(67294),n=t(45e3),e=t(85893);function _(){return(0,e.jsx)(d.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"ast-\u62BD\u8C61\u8BED\u6CD5\u6811",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ast-\u62BD\u8C61\u8BED\u6CD5\u6811",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"AST \u62BD\u8C61\u8BED\u6CD5\u6811"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("a",{href:"https://astexplorer.net/",target:"_blank",children:n.texts[0].value}),(0,e.jsx)("br",{}),(0,e.jsx)("a",{href:"https://ts-ast-viewer.com/#",target:"_blank",children:n.texts[1].value}),(0,e.jsx)("br",{})]}),(0,e.jsx)("p",{children:n.texts[2].value}),(0,e.jsx)("p",{children:n.texts[3].value}),(0,e.jsxs)("h3",{id:"ast-\u6709\u4EC0\u4E48\u7528",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#ast-\u6709\u4EC0\u4E48\u7528",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"AST \u6709\u4EC0\u4E48\u7528"]}),(0,e.jsx)("p",{children:n.texts[4].value}),(0,e.jsx)("p",{children:n.texts[5].value}),(0,e.jsx)("p",{children:n.texts[6].value}),(0,e.jsxs)("p",{children:[n.texts[7].value,(0,e.jsx)("br",{}),n.texts[8].value]}),(0,e.jsx)("p",{children:n.texts[9].value}),(0,e.jsx)("p",{children:n.texts[10].value}),(0,e.jsx)("p",{children:n.texts[11].value}),(0,e.jsxs)("h2",{id:"\u5E38\u89C1\u8282\u70B9\u7C7B\u578B",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5E38\u89C1\u8282\u70B9\u7C7B\u578B",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5E38\u89C1\u8282\u70B9\u7C7B\u578B"]}),(0,e.jsx)("p",{children:n.texts[12].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[13].value}),(0,e.jsx)("p",{children:n.texts[14].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[15].value}),(0,e.jsx)("p",{children:n.texts[16].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[17].value}),(0,e.jsx)("p",{children:n.texts[18].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[19].value}),(0,e.jsx)("p",{children:n.texts[20].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[21].value}),(0,e.jsx)("p",{children:n.texts[22].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[23].value}),(0,e.jsx)("p",{children:n.texts[24].value}),(0,e.jsx)(a.Z,{lang:"js",children:n.texts[25].value})]})})})})}r.default=_},45e3:function(s,r,t){t.r(r),t.d(r,{texts:function(){return i}});const i=[{value:"\u5728\u7EBF js \u4EE3\u7801\u8F6C AST",paraId:0,tocIndex:0},{value:"\u5728\u7EBF ts \u4EE3\u7801\u8F6C AST",paraId:0,tocIndex:0},{value:"\u62BD\u8C61\u8BED\u6CD5\u6811 (Abstract Syntax Tree)\uFF0C\u7B80\u79F0 AST\uFF0C\u5B83\u662F\u6E90\u4EE3\u7801\u8BED\u6CD5\u7ED3\u6784\u7684\u4E00\u79CD\u62BD\u8C61\u8868\u793A\u3002\u5B83\u4EE5\u6811\u72B6\u7684\u5F62\u5F0F\u8868\u73B0\u7F16\u7A0B\u8BED\u8A00\u7684\u8BED\u6CD5\u7ED3\u6784\uFF0C\u6811\u4E0A\u7684\u6BCF\u4E2A\u8282\u70B9\u90FD\u8868\u793A\u6E90\u4EE3\u7801\u4E2D\u7684\u4E00\u79CD\u7ED3\u6784\u3002",paraId:1,tocIndex:0},{value:"\u65E2\u7136\u4EE3\u7801\u7684\u542B\u4E49\u53EF\u4EE5\u901A\u8FC7 AST \u6765\u8868\u8FF0\uFF0C\u800C AST \u53C8\u53EF\u4EE5\u7406\u89E3\u4E3A\u4E00\u4E2A JS \u5BF9\u8C61\uFF0C\u90A3\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u7A0B\u5E8F\u4EE3\u7801\u5BF9\u5176\u8FDB\u884C\u5904\u7406",paraId:2,tocIndex:0},{value:`1\u3001\u4EE3\u7801\u7F16\u8BD1
Babel\uFF0C\u5C06 ES6 JavaScript \u8F6C\u5316\u4E3A ES5 JavaScript\u3002
TypeScript\uFF0C\u5C06 TypeScript \u8F6C\u5316\u4E3A JavaScript\u3002
Sass\uFF0C\u5C06 Sass \u8F6C\u5316\u4E3A CSS\u3002`,paraId:3,tocIndex:1},{value:`2\u3001\u4EE3\u7801\u52A0\u5DE5
Prettier\uFF0C\u4EE3\u7801\u7F8E\u5316\uFF0C\u98CE\u683C\u683C\u5F0F\u5316\u3002
ESLint, \u4FEE\u590D\u8BED\u6CD5\u9519\u8BEF\u3002
uglifyJS\uFF0C\u4EE3\u7801\u538B\u7F29\uFF0C\u6DF7\u6DC6\u3002
@vue/compiler-dom\uFF0C\u53EF\u4EE5\u5C06 Vue \u6587\u4EF6\u4EE3\u7801\u62C6\u5206\u6210 template\u3001script\u3001style \u4E09\u79CD\u4EE3\u7801\u7C7B\u578B\u7247\u6BB5\u3002`,paraId:4,tocIndex:1},{value:`3\u3001\u4EE3\u7801\u5206\u6790
ESLint\uFF0C\u4EE3\u7801\u8BED\u6CD5\u68C0\u67E5\u3002
Webpack\uFF0C\u4EE3\u7801\u6A21\u5757\u6253\u5305\u5206\u6790\u3002`,paraId:5,tocIndex:1},{value:"\u8FC7\u7A0B",paraId:6,tocIndex:1},{value:`
1\u3001Parsing\uFF08\u89E3\u6790\uFF09 \uFF1A\u8FD9\u4E2A\u8FC7\u7A0B\u7531\u7F16\u8BD1\u5668\u5B9E\u73B0\uFF0C\u4F1A\u7ECF\u8FC7\u8BCD\u6CD5\u5206\u6790\u548C\u8BED\u6CD5\u5206\u6790\u4E24\u4E2A\u8FC7\u7A0B\uFF0C\u751F\u6210 AST \u3002`,paraId:6,tocIndex:1},{value:"2\u3001Traversing\uFF08\u904D\u5386\uFF09\uFF1A \u6DF1\u5EA6\u4F18\u5148\u904D\u5386 AST \uFF0C\u8BBF\u95EE\u6811\u4E0A\u5404\u4E2A\u8282\u70B9\u7684\u4FE1\u606F\uFF08Node\uFF09\u3002",paraId:7,tocIndex:1},{value:"3\u3001Transforming\uFF08\u4FEE\u6539\uFF09\uFF1A \u5728\u904D\u5386\u7684\u8FC7\u7A0B\u4E2D\u53EF\u5BF9\u8282\u70B9\u4FE1\u606F\u8FDB\u884C\u4FEE\u6539/\u8F6C\u5316\uFF0C\u751F\u6210\u65B0\u7684 AST \u3002",paraId:8,tocIndex:1},{value:"4\u3001Printing\uFF08\u8F93\u51FA\uFF09\uFF1A \u5C06\u8F6C\u5316\u540E\u65B0\u7684 AST \u8F93\u51FA\u6210\u65B0\u7684\u4EE3\u7801\u5757\u3002",paraId:9,tocIndex:1},{value:"1\u3001literal(\u5B57\u9762\u91CF) : \u672C\u8EAB\u8BED\u4E49\u4EE3\u8868\u4E86\u4E00\u4E2A\u503C\u3002",paraId:10,tocIndex:2},{value:`let name = 'iceman'; // iceman ---> StringLiteral \u5B57\u7B26\u4E32\u5B57\u9762\u91CF
let age = 30; // 30 ---> NumberLiteral \u6570\u5B57\u5B57\u9762\u91CF
const isMan = true; // true ---> BooleanLiteral \u5E03\u6797\u5B57\u9762\u91CF
const reg = /\\d/; // /\\d/ ---> RegExpLiteral \u6B63\u5219\u5B57\u9762\u91CF
`,paraId:11,tocIndex:2},{value:"2\u3001Identifier(\u6807\u8BC6\u7B26) : \u53D8\u91CF\u540D\u3001\u5C5E\u6027\u540D\u3001\u53C2\u6570\u540D\u7B49\u7B49\u4E00\u7CFB\u5217\u58F0\u660E\u548C\u5F15\u7528\u7684\u540D\u5B57\u3002",paraId:12,tocIndex:2},{value:`
import { request } form 'framework'; // request ---> Identifier
let name = 'iceman'; // name ---> Identifier
const age = 30; // age ---> Identifier
function talk(name) { // talk, name ---> Identifier
console.log(name); // console, log, name ---> Identifier
}
const obj = { // obj ---> Identifier
name: 'guang' // name ---> Identifier
}
`,paraId:13,tocIndex:2},{value:"3\u3001Statement(\u8BED\u53E5) : \u4EE3\u7801\u6267\u884C\u7684\u6700\u5C0F\u5355\u4F4D\u3002",paraId:14,tocIndex:2},{value:`return 'iceman'; // ReturnStatement
if (age > 35) {
} // IfStatement
throw new Error('error'); // ThrowStatement
try {
} catch (e) {} // TryStatement
for (let i = 0; i < 5; i++) {} // ForStatement
`,paraId:15,tocIndex:2},{value:"4\u3001Declaration(\u58F0\u660E) : \u58F0\u660E\u8BED\u53E5\u662F\u4E00\u79CD\u7279\u6B8A\u7684 Statement\u3002",paraId:16,tocIndex:2},{value:`const listlen = 1; // VariableDeclaration
let listName = 'user'; // VariableDeclaration
function getInfo(info) {
  // FunctionDeclaration
  if (info.isRun) {
    return info.name;
  }
  return '';
}
class Car {
  // ClassDeclaration
  constructor() {}
  method() {}
}
`,paraId:17,tocIndex:2},{value:"5\u3001Expression(\u8868\u8FBE\u5F0F) : expression \u7684\u7279\u70B9\u662F\u6267\u884C\u5B8C\u6210\u540E\u4F1A\u6709\u8FD4\u56DE\u503C\uFF0C\u8FD9\u4E5F\u662F\u5B83\u548C\u8BED\u53E5\u7684\u533A\u522B",paraId:18,tocIndex:2},{value:`[1, 2, 3]; // ArrayExpression \u6570\u7EC4\u8868\u8FBE\u5F0F
age = 1; // AssignmentExpression \u8D4B\u503C\u8868\u8FBE\u5F0F
1 + 2; // BinaryExpression \u4E8C\u5143\u8868\u8FBE\u5F0F
var obj = {
  // ObjectExpression \u5BF9\u8C61\u8868\u8FBE\u5F0F
  foo: 'foo',
  bar: function () {},
};
let getName = function () {}; // FunctionExpression \u51FD\u6570\u8868\u8FBE\u5F0F
const getAge = (age) => {
  // ArrowFunctionExpression \u7BAD\u5934\u51FD\u6570\u8868\u8FBE\u5F0F
  return age;
};
`,paraId:19,tocIndex:2},{value:"6\u3001Import : \u5BFC\u5165\u6A21\u5757\uFF0C\u5C5E\u4E8E\u4E00\u79CD\u7279\u6B8A\u7684\u58F0\u660E\u8BED\u53E5\uFF0C\u6709\u4E09\u79CD\u7C7B\u578B ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier\u3002",paraId:20,tocIndex:2},{value:`
import { environment } from 'framework'; // named import
import { request as req } from 'framework'; // namespaced import
import api from 'framework'; // default import
import \\* as APP from 'framework'; // namespaced imort
`,paraId:21,tocIndex:2},{value:"7\u3001Export : \u5BFC\u51FA\u6A21\u5757\uFF0C\u4E5F\u5C5E\u4E8E\u4E00\u79CD\u7279\u6B8A\u7684\u58F0\u660E\uFF0C\u6709\u4E09\u79CD\u7C7B\u578B ExportAllDeclaration | ExportDefaultDeclaration | ExportNamedDeclaration\u3002",paraId:22,tocIndex:2},{value:`
export \\* from './iceman';
export default 'iceman';
export const ice = 'iceman';
`,paraId:23,tocIndex:2}]}}]);
