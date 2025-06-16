"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2651],{56060:function(o,e,n){n.r(e);var r=n(72269),l=n(93359),c=n(61788),m=n(19977),E=n(91558),d=n(24268),h=n(96057),x=n(85939),i=n(53683),a=n(80936),s=n(67294),t=n(96979),_=n(85893);function u(){return(0,_.jsx)(i.dY,{children:(0,_.jsx)(s.Suspense,{fallback:(0,_.jsx)(a.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"js-\u5F02\u5E38\u7C7B\u578B",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#js-\u5F02\u5E38\u7C7B\u578B",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"js \u5F02\u5E38\u7C7B\u578B"]}),(0,_.jsx)(d.Z,{lang:"js",children:t.texts[0].value}),(0,_.jsxs)("h2",{id:"\u5982\u4F55\u907F\u514D\u5806\u6808\u6EA2\u51FA",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5982\u4F55\u907F\u514D\u5806\u6808\u6EA2\u51FA",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u5982\u4F55\u907F\u514D\u5806\u6808\u6EA2\u51FA"]}),(0,_.jsxs)("p",{children:[t.texts[1].value,(0,_.jsx)("br",{}),t.texts[2].value]})]})})})})}e.default=u},96979:function(o,e,n){n.r(e),n.d(e,{texts:function(){return r}});const r=[{value:`
// 1\u3001Error: \u57FA\u672C\u9519\u8BEF \u5176\u4ED6\u7684\u9519\u8BEF\u7C7B\u578B\u90FD\u7EE7\u627F\u81EA\u8BE5\u7C7B\u578B
// Error \u7C7B\u578B\u4E00\u822C\u90FD\u662F\u5F00\u53D1\u4EBA\u5458\u81EA\u5DF1\u629B\u51FA\u7684\u5F02\u5E38
try {
  throw new Error('ConardLi\u629B\u51FA\u7684\u5F02\u5E38');
} catch (error) {
  console.log(error);
}


//  2\u3001SyntaxError: \u8BED\u6CD5\u9519\u8BEF (\u8868\u793A\u4E0D\u7B26\u5408\u7F16\u7A0B\u8BED\u8A00\u7684\u8BED\u6CD5\u89C4\u8303)
const = name

// \u6B64\u7C7B\u5F02\u5E38\u53D1\u751F\u5728 JavaScript \u89E3\u6790/\u7F16\u8BD1\u65F6\uFF0C\u6B64\u7C7B\u5F02\u5E38\u4E00\u65E6\u53D1\u751F\uFF0C\u5BFC\u81F4\u6574\u4E2Ajs\u6587\u4EF6\u90FD\u65E0\u6CD5\u6267\u884C\uFF0C\u800C\u5176\u4ED6\u5F02\u5E38\u53D1\u751F\u5728\u4EE3\u7801\u8FD0\u884C \u65F6\uFF0C\u8FD9\u4E00\u7C7B\u7684\u9519\u8BEF\u4F1A\u5BFC\u81F4\u5728\u9519\u8BEF\u51FA\u73B0\u7684\u90A3\u4E00\u884C\u4E4B\u540E\u7684\u4EE3\u7801\u65E0\u6CD5\u6267\u884C\uFF0C\u4F46\u5728\u90A3\u4E00\u884C\u4E4B\u524D\u7684\u4EE3\u7801\u4E0D\u4F1A\u53D7\u5230\u5F71\u54CD\u3002


// 3\u3001TypeError: \u7C7B\u578B\u9519\u8BEF
const str = 'cq'
str()

//4\u3001ReferenceError: \u5F15\u7528\u9519\u8BEF
//\u5F15\u7528\u4E00\u4E2A\u4E0D\u5B58\u5728\u7684\u53D8\u91CF\u65F6\u53D1\u751F\u7684\u9519\u8BEF

// 5\u3001RangeError: \u8FB9\u754C\u9519\u8BEF
//\u6570\u7EC4\u957F\u5EA6\u4E3A\u8D1F\u6570\u6216\u8D85\u957F
// \u6570\u5B57\u7C7B\u578B\u7684\u65B9\u6CD5\u53C2\u6570\u8D85\u51FA\u9884\u5B9A\u4E49\u8303\u56F4
//\u51FD\u6570\u5806\u6808\u8C03\u7528\u8D85\u8FC7\u6700\u5927\u503C

var a = [1]
a.length = -1

// 6\u3001URIError: \u5728\u8C03\u7528 URI \u76F8\u5173\u7684\u65B9\u6CD5\u4E2D URL \u65E0\u6548\u65F6\u629B\u51FA\u7684\u5F02\u5E38\uFF0C\u4E3B\u8981\u5305\u62EC encodeURI\u3001decodeURI()\u3001encodeURIComponent()\u3001decodeURIComponent()\u3001escape()\u548Cunescape(\uFF09\u51E0\u4E2A\u51FD\u6570

decodeURIComponent('%%')

//7\u3001\u81EA\u5B9A\u4E49\u9519\u8BEF\u7C7B\u578B

class UnAuthError extends Error { }

class ParamError extends Error { }

function controller() {
  throw new UnAuthError();
}




<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<script>
    function a() {
        console.log('kokok')
    }
    const b = ''
    b()
    console.log('kokok')
<\/script>
<script>
    console.log('cq')
<\/script>

<body>
    <button onclick="a()">button</button>
</body>


</html>


\u81F4\u547D\u7684\u9519\u8BEF\u4F1A\u963B\u788D\u540C\u4E00\u4E2A<script>\u6807\u7B7E\u91CC\u9762\u540E\u9762\u7684\u4EE3\u7801\u8FD0\u884C\uFF0C\u4E0D\u540C<script> \u4E0D\u5F71\u54CD\u8FD0\u884C

`,paraId:0,tocIndex:0},{value:"1\u3001\u4F7F\u7528\u5FAA\u73AF\u66FF\u4EE3\u9012\u5F52\uFF1A\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u53EF\u4EE5\u5C06\u9012\u5F52\u8F6C\u6362\u4E3A\u8FED\u4EE3\uFF0C\u907F\u514D\u6DF1\u5C42\u9012\u5F52\u5BFC\u81F4\u7684\u5806\u6808\u6EA2\u51FA\u3002",paraId:1,tocIndex:1},{value:`
2\u3001\u5C3E\u9012\u5F52\u4F18\u5316\uFF1A\u67D0\u4E9B JavaScript \u5F15\u64CE\u652F\u6301\u5C3E\u9012\u5F52\u4F18\u5316\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u7F16\u8BD1\u9636\u6BB5\u6D88\u9664\u6808\u5E27\u7684\u589E\u52A0\u3002\u786E\u4FDD\u6700\u540E\u4E00\u6B65\u662F\u9012\u5F52\u8C03\u7528\uFF0C\u4E14\u6CA1\u6709\u540E\u7EED\u64CD\u4F5C\u3002`,paraId:1,tocIndex:1}]}}]);
