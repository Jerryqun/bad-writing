"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3644],{6411:(function(d,e,_){_.r(e);var i=_(55804),m=_(33405),u=_(72700),c=_(84359),h=_(88738),t=_(77658),E=_(75968),g=_(33044),o=_(41047),a=_(10577),r=_(96540),s=_(96384),n=_(74848);function l(){return(0,n.jsx)(o.LO,{children:(0,n.jsx)(r.Suspense,{fallback:(0,n.jsx)(a.A,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"cdn-\u4F7F\u7528-monaco",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#cdn-\u4F7F\u7528-monaco",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"cdn \u4F7F\u7528 monaco"]}),(0,n.jsx)(t.A,{lang:"html",children:s.texts[0].value})]})})})})}e.default=l}),96384:(function(d,e,_){_.r(e);const i=[{value:`<!DOCTYPE html>
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
`,paraId:0,tocIndex:0}];_.d(e,["texts",0,i])})}]);
