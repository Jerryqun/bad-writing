"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1153],{34404:function(i,e,n){n.r(e);var t=n(72269),u=n(93359),m=n(61788),E=n(19977),c=n(91558),d=n(24268),h=n(96057),b=n(85939),a=n(53683),l=n(80936),o=n(67294),s=n(44903),_=n(85893);function r(){return(0,_.jsx)(a.dY,{children:(0,_.jsx)(o.Suspense,{fallback:(0,_.jsx)(l.Z,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"\u524D\u7AEF\u64CD\u4F5C\u6587\u4EF6",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u524D\u7AEF\u64CD\u4F5C\u6587\u4EF6",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"\u524D\u7AEF\u64CD\u4F5C\u6587\u4EF6"]}),(0,_.jsx)(d.Z,{lang:"html",children:s.texts[0].value})]})})})})}e.default=r},44903:function(i,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>

  <body>
    <div>
      \xA0 \xA0<button id="a" type="primary">\u7F16\u8F91\u6587\u4EF6</button> \xA0 \xA0<button
        id="b"
        type="primary"
      >
        \u4FDD\u5B58\u6587\u4EF6
      </button>
      \xA0 \xA0<input id="input" placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" /> \xA0 \xA0
    </div>

    \u200B
    <script>
      document.getElementById('a').addEventListener('click', () => {
        editFile();
      });

      document.getElementById('b').addEventListener('click', () => {
        saveFile();
      });

      const editFile = async function () {
        // \u9009\u62E9\u6587\u4EF6
        let [fileHandle] = await window.showOpenFilePicker();
        // \u590D\u663E\u6587\u4EF6\u5185\u5BB9
        fileHandle.getFile().then((blob) => {
          blob.text().then((val) => {
            console.log('val', val);
          });
        });
      };
      const saveFile = async function () {
        // \u65B0\u5EFA\u4E00\u4E2A\u6587\u4EF6
        const fileHandle = await window.showSaveFilePicker({
          types: [
            {
              description: 'hello',
              accept: {
                'text/plain': ['.txt'],
                // \u5BF9\u4E8E\u4E00\u4E9B\u975E\u5E38\u7528\u7684\u540E\u7F00\uFF0C\u5747\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\u8FDB\u884C\u5B9A\u4E49
                // \u53C2\u8003\uFF1Ahttps://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types
                // 'application/octet-stream': ['.a','.b']
              },
            },
          ],
        });
        // \u5728\u6587\u4EF6\u5185\u5199\u5165\u5185\u5BB9\uFF0C\u5199\u5165\u5185\u5BB9\u7528\u7684\u662FStream Api\uFF0C\u6D41\u5F0F\u5199\u5165
        const writable = await fileHandle.createWritable();
        await writable.write('\u4F60\u597D\u6D4B\u8BD5\u6587\u4EF6');
        await writable.close();
      };
    <\/script>
  </body>
</html>
`,paraId:0,tocIndex:0}]}}]);
