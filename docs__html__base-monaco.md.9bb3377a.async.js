"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8415],{3640:function(d,e,n){n.r(e);var i=n(72269),m=n(93359),u=n(61788),c=n(19977),h=n(91558),t=n(24268),E=n(96057),g=n(85939),o=n(53683),a=n(80936),r=n(67294),s=n(64463),_=n(85893);function l(){return(0,_.jsx)(o.dY,{children:(0,_.jsx)(r.Suspense,{fallback:(0,_.jsx)(a.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"cdn-\u4F7F\u7528-monaco",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#cdn-\u4F7F\u7528-monaco",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"cdn \u4F7F\u7528 monaco"]}),(0,_.jsx)(t.Z,{lang:"html",children:s.texts[0].value})]})})})})}e.default=l},64463:function(d,e,n){n.r(e),n.d(e,{texts:function(){return i}});const i=[{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Monaco editor</title>
    <link
      rel="stylesheet"
      data-name="vs/editor/editor.main"
      href="https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs/editor/editor.main.min.css"
    />
  </head>

  <body>
    <div id="container" style="height:100vh"></div>
    <script src="https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs/loader.min.js"><\/script>
    <script>
      require.config({
        paths: {
          vs: 'https://g.alicdn.com/code/lib/monaco-editor/0.36.0/min/vs',
        },
      });
      require(['vs/editor/editor.main'], () => {
        monaco.editor.create(document.getElementById('container'), {
          value: \`function x() {
  console.log("Hello world!");
}\`,
          language: 'javascript',
          theme: 'vs-dark',
        });
      });
    <\/script>
  </body>
</html>
`,paraId:0,tocIndex:0}]}}]);
