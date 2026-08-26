"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3644],{6411:function(d,e,n){n.r(e);var i=n(55804),m=n(33405),u=n(72700),c=n(84359),h=n(88738),t=n(77658),E=n(75968),g=n(33044),o=n(41047),a=n(10577),r=n(96540),s=n(96384),_=n(74848);function l(){return(0,_.jsx)(o.LO,{children:(0,_.jsx)(r.Suspense,{fallback:(0,_.jsx)(a.A,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"cdn-\u4F7F\u7528-monaco",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#cdn-\u4F7F\u7528-monaco",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"cdn \u4F7F\u7528 monaco"]}),(0,_.jsx)(t.A,{lang:"html",children:s.texts[0].value})]})})})})}e.default=l},96384:function(d,e,n){n.r(e),n.d(e,{texts:function(){return i}});const i=[{value:`<!DOCTYPE html>
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
