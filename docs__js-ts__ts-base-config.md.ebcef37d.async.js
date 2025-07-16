"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8268],{48457:function(t,_,n){n.r(_);var s=n(72269),E=n(93359),u=n(61788),m=n(19977),f=n(91558),l=n(24268),S=n(96057),c=n(85939),i=n(53683),a=n(80936),o=n(67294),d=n(88783),e=n(85893);function r(){return(0,e.jsx)(i.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(a.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"tsconfigjson",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#tsconfigjson",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"tsconfig.json"]}),(0,e.jsx)(l.Z,{lang:"json",children:d.texts[0].value})]})})})})}_.default=r},88783:function(t,_,n){n.r(_),n.d(_,{texts:function(){return s}});const s=[{value:`// \u5E38\u7528\u914D\u7F6E
{
  /*
      tsconfig.json\u662Fts\u7F16\u8BD1\u5668\u7684\u914D\u7F6E\u6587\u4EF6\uFF0Cts\u53EF\u4EE5\u6839\u636E\u5B83\u7684\u4FE1\u606F\u6765\u5BF9\u4EE3\u7801\u8FDB\u884C\u7F16\u8BD1 \u53EF\u4EE5\u5728tsconfig\u4E2D\u5199\u6CE8\u91CA
      include : \u7528\u6765\u6307\u5B9A\u54EA\u4E9B\u6587\u4EF6\u9700\u8981\u88AB\u7F16\u8BD1
      exclude : \u7528\u6765\u6307\u5B9A\u54EA\u4E9B\u6587\u4EF6\u4E0D\u9700\u8981\u88AB\u7F16\u8BD1 \uFF1A\u9ED8\u8BA4node_module
      extends : \u7528\u6765\u6307\u5B9A\u7EE7\u627F\u7684\u914D\u7F6E\u6587\u4EF6
      files   : \u7528\u6765\u6307\u5B9A\u88AB\u7F16\u8BD1\u7684\u6587\u4EF6\u5217\u8868\uFF0C\u53EA\u6709\u7F16\u8BD1\u5C11\u91CF\u6587\u4EF6\u624D\u4F7F\u7528
      compilerOptions : \u7F16\u8BD1\u5668\u7684\u9009\u9879\u662F\u914D\u7F6E\u6587\u4EF6\u4E2D\u975E\u5E38\u91CD\u8981\u4E5F\u662F\u975E\u5E38\u590D\u6742\u7684\u914D\u7F6E\u9009\u9879
  */
  "include": [
    // ** : \u4EFB\u610F\u76EE\u5F55 \uFF0C * : \u4EFB\u610F\u6587\u4EF6
    "./src/**/*"
  ],
  "exclude": ["./src/hello/**/*"],
  // "extends": "./configs/base",
  "files": [
    "1.ts"
    // "2.ts"
  ],
  "compilerOptions": {
    // \u7528\u6765\u6307\u5B9A ES \u7248\u672C ESNext : \u6700\u65B0\u7248\u3002 'ES3', 'ES5', 'ES6'/'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', 'ESNext'
    "target": "ES2020",
    // \u6307\u5B9A\u8981\u4F7F\u7528\u6A21\u5757\u5316\u7684\u89C4\u8303 : 'None', 'CommonJS', 'AMD', 'System', 'UMD', 'ES6'/'ES2015', 'ES2020' or 'ESNext'
    "module": "ESNext",
    // \u7528\u6765\u6307\u5B9A\u9879\u76EE\u4E2D\u8981\u4F7F\u7528\u7684\u5E93 'ES5', 'ES6', 'ES2015', 'ES7', 'ES2016', 'ES2017', 'ES2018', 'ESNext', 'DOM', 'DOM.Iterable',
    //                          'WebWorker', 'ScriptHost', 'ES2015.Core', 'ES2015.Collection', 'ES2015.Generator', 'ES2015.Iterable',
    //                          'ES2015.Promise', 'ES2015.Proxy', 'ES2015.Reflect', 'ES2015.Symbol', 'ES2015.Symbol.WellKnown',
    //                          'ES2016.Array.Include', 'ES2017.object', 'ES2017.Intl', 'ES2017.SharedMemory', 'ES2017.String',
    //                          'ES2017.TypedArrays', 'ES2018.Intl', 'ES2018.Promise', 'ES2018.RegExp', 'ESNext.AsyncIterable',
    //                          'ESNext.Array', 'ESNext.Intl', 'ESNext.Symbol'
    // \u8FD0\u884C\u5728\u6D4F\u89C8\u5668\u4E2D\u4E0D\u7528\u8BBE\u7F6E\uFF0C\u8FD0\u884C\u5728node\u6216\u5176\u4ED6\u4E2D\u624D\u9700\u8981\u8BBE\u7F6E
    // "lib":[]\uFF0C
    // \u7528\u6765\u6307\u5B9A\u7F16\u8BD1\u540E\u6587\u4EF6\u7684\u5B58\u653E\u4F4D\u7F6E
    "outDir": "./dist",
    // \u5C06\u4EE3\u7801\u5408\u5E76\u4E3A\u4E00\u4E2A\u6587\u4EF6,\u8BBE\u7F6E\u4E4B\u540E\u6240\u6709\u7684\u5168\u5C40\u4F5C\u7528\u57DF\u4E2D\u7684\u4EE3\u7801\u4F1A\u5408\u5E76\u5230\u540C\u4E00\u4E2A\u6587\u4EF6\u4E2D \u4F46\u662F\u53EA\u80FD\u5728  'amd' and 'system' \u4E2D\u624D\u80FD\u4F7F\u7528
    // "outFile": "./dist/app.js",
    // \u662F\u5426\u5BF9js\u6587\u4EF6\u8FDB\u884C\u7F16\u8BD1\uFF0C\u9ED8\u8BA4false
    "allowJs": false,
    // \u662F\u5426\u68C0\u67E5js\u4EE3\u7801\u662F\u5426\u7B26\u5408\u8BED\u6CD5\u89C4\u8303\uFF0C\u9ED8\u8BA4false
    "checkJs": false,
    // \u662F\u5426\u79FB\u9664\u6CE8\u91CA\uFF0C\u9ED8\u8BA4false
    "removeComments": false,
    // \u662F\u5426\u4E0D\u751F\u6210\u7F16\u8BD1\u540E\u6587\u4EF6\uFF0C\u9ED8\u8BA4false
    "noEmit": false,
    // \u5F53\u6709\u9519\u8BEF\u65F6\u662F\u5426\u751F\u6210\u6587\u4EF6\uFF0C\u9ED8\u8BA4false
    "noEmitOnError": false,
    // \u662F\u5426\u751F\u6210sourceMap\uFF0C\u9ED8\u8BA4false  \u8FD9\u4E2A\u6587\u4EF6\u91CC\u4FDD\u5B58\u7684\uFF0C\u662F\u8F6C\u6362\u540E\u4EE3\u7801\u7684\u4F4D\u7F6E\uFF0C\u548C\u5BF9\u5E94\u7684\u8F6C\u6362\u524D\u7684\u4F4D\u7F6E\u3002\u6709\u4E86\u5B83\uFF0C\u51FA\u9519\u7684\u65F6\u5019\uFF0C\u901A\u8FC7\u65AD\u70B9\u5DE5\u5177\u53EF\u4EE5\u76F4\u63A5\u663E\u793A\u539F\u59CB\u4EE3\u7801\uFF0C\u800C\u4E0D\u662F\u8F6C\u6362\u540E\u7684\u4EE3\u7801\u3002
    "sourceMap": false,

    // \u6240\u6709\u7684\u4E25\u683C\u68C0\u67E5\u7684\u603B\u5F00\u5173\uFF0C\u9ED8\u8BA4false
    "strict": false,
    // \u7F16\u8BD1\u540E\u7684\u6587\u4EF6\u662F\u5426\u5F00\u542F\u4E25\u683C\u6A21\u5F0F\uFF0C\u9ED8\u8BA4false
    "alwaysStrict": false,
    // \u4E0D\u5141\u8BB8\u9690\u5F0F\u7684any\uFF0C\u9ED8\u8BA4false(\u5141\u8BB8)
    "noImplicitAny": false,
    // \u4E0D\u5141\u8BB8\u9690\u5F0F\u7684this\uFF0C\u9ED8\u8BA4false(\u5141\u8BB8)
    "noImplicitThis": false,
    // \u662F\u5426\u4E25\u683C\u7684\u68C0\u67E5\u7A7A\u503C\uFF0C\u9ED8\u8BA4false \u68C0\u67E5\u6709\u53EF\u80FD\u4E3Anull\u7684\u5730\u65B9
    "strictNullChecks": true,
    // \u662F\u5426\u4E25\u683C\u68C0\u67E5bind\u3001call\u548Capply\u7684\u53C2\u6570\u5217\u8868\uFF0C\u9ED8\u8BA4false  \u68C0\u67E5\u662F\u5426\u6709\u591A\u4F59\u53C2\u6570
    "strictBindCallApply": false,
    // \u662F\u5426\u4E25\u683C\u68C0\u67E5\u51FD\u6570\u7684\u7C7B\u578B\uFF0C
    "strictFunctionTypes": false,
    // \u662F\u5426\u4E25\u683C\u68C0\u67E5\u5C5E\u6027\u662F\u5426\u521D\u59CB\u5316\uFF0C\u9ED8\u8BA4false
    "strictPropertyInitialization": false,

    // \u662F\u5426\u68C0\u67E5switch\u8BED\u53E5\u5305\u542B\u6B63\u786E\u7684break\uFF0C\u9ED8\u8BA4false
    "noFallthroughCasesInSwitch": false,
    // \u68C0\u67E5\u51FD\u6570\u6CA1\u6709\u9690\u5F0F\u7684\u8FD4\u56DE\u503C\uFF0C\u9ED8\u8BA4false
    "noImplicitReturns": false,
    // \u662F\u5426\u68C0\u67E5\u68C0\u67E5\u672A\u4F7F\u7528\u7684\u5C40\u90E8\u53D8\u91CF\uFF0C\u9ED8\u8BA4false
    "noUnusedLocals": false,
    // \u662F\u5426\u68C0\u67E5\u672A\u4F7F\u7528\u7684\u53C2\u6570\uFF0C\u9ED8\u8BA4false
    "noUnusedParameters": false,

    // \u662F\u5426\u68C0\u67E5\u4E0D\u53EF\u8FBE\u4EE3\u7801\u62A5\u9519\uFF0C\u9ED8\u8BA4false   true\uFF0C\u5FFD\u7565\u4E0D\u53EF\u8FBE\u4EE3\u7801 false\uFF0C\u4E0D\u53EF\u8FBE\u4EE3\u7801\u5C06\u5F15\u8D77\u9519\u8BEF
    "allowUnreachableCode": false
  }
}
`,paraId:0,tocIndex:0}]}}]);
