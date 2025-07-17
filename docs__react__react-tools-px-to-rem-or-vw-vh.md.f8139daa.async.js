"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4245],{86739:function(_,i,n){n.r(i);var a=n(72269),u=n(93359),c=n(61788),h=n(19977),m=n(91558),s=n(24268),x=n(96057),p=n(85939),d=n(53683),r=n(80936),o=n(67294),t=n(968),e=n(85893);function l(){return(0,e.jsx)(d.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(r.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h1",{id:"postcss-plugin-px2rem",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#postcss-plugin-px2rem",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"postcss-plugin-px2rem"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://www.npmjs.com/package/postcss-plugin-px2rem",children:t.texts[0].value})}),(0,e.jsxs)("h2",{id:"usage",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,e.jsx)(s.Z,{lang:"css",children:t.texts[1].value}),(0,e.jsxs)("h2",{id:"configuration",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#configuration",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"Configuration"]}),(0,e.jsx)(s.Z,{lang:"json",children:t.texts[2].value}),(0,e.jsxs)("h2",{id:"em\u9002\u914D\u7528\u8FD9\u6BB5\u4EE3\u7801\u52A8\u6001\u8BA1\u7B97html\u7684font-size\u5927\u5C0F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#em\u9002\u914D\u7528\u8FD9\u6BB5\u4EE3\u7801\u52A8\u6001\u8BA1\u7B97html\u7684font-size\u5927\u5C0F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"em\u9002\u914D\u7528\u8FD9\u6BB5\u4EE3\u7801\u52A8\u6001\u8BA1\u7B97html\u7684font-size\u5927\u5C0F"]}),(0,e.jsx)("p",{children:t.texts[3].value}),(0,e.jsx)("p",{children:t.texts[4].value}),(0,e.jsx)(s.Z,{lang:"js",children:t.texts[5].value}),(0,e.jsxs)("p",{children:[t.texts[6].value,(0,e.jsx)("a",{href:"https://github.com/amfe/lib-flexible",children:t.texts[7].value})]}),(0,e.jsxs)("h1",{id:"postcss-px-to-viewport",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#postcss-px-to-viewport",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"postcss-px-to-viewport"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://www.npmjs.com/package/postcss-px-to-viewport",children:t.texts[8].value})}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin",children:t.texts[9].value})}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://fedev.cn/css/vw-for-layout.html",children:t.texts[10].value})})]})})})})}i.default=l},968:function(_,i,n){n.r(i),n.d(i,{texts:function(){return a}});const a=[{value:"https://www.npmjs.com/package/postcss-plugin-px2rem",paraId:0,tocIndex:0},{value:`// input
h1 {
  margin: 0 0 20px;
  font-size: 32px;
  line-height: 1.2;
  letter-spacing: 1px;
}

// output
h1 {
  margin: 0 0 0.2rem;
  font-size: 0.32rem;
  line-height: 1.2;
  letter-spacing: 0.01rem;
}
`,paraId:1,tocIndex:1},{value:`{
  rootValue: 100, 
  unitPrecision: 5,
  propWhiteList: [],
  propBlackList: [],
  exclude:false,
  selectorBlackList: [],
  ignoreIdentifier: false,
  replace: true,
  mediaQuery: false,
  minPixelValue: 0
}
`,paraId:2,tocIndex:2},{value:"\u4F7F\u7528postcss-plugin-px2rem\u8F6C\u6362\u7684\u60C5\u51B5\u4E0B  \u9ED8\u8BA4rootValue = 100 ,\u6BD4\u598220px => 0.2px",paraId:3,tocIndex:3},{value:"\u6BD4\u5982\u8BBE\u8BA1\u7A3F\u5C3A\u5BF8\u662F750px\uFF0C\u5728750\u5C4F\u5E55\u5BBD\u5EA6\u4E0B\uFF0C 1rem = 100px\uFF0C\u6240\u4EE5750\u5C4F\u5E55\u4E0Bhtml\u7684fontSize\u4E3A100px",paraId:4,tocIndex:3},{value:`(function(win) {
    var docEl = win.document.documentElement;
    var timer = '';

    function changeRem() {
      var width = docEl.getBoundingClientRect().width;
      if (width > 750) { // 750\u662F\u8BBE\u8BA1\u7A3F\u5927\u5C0F
          width = 750;
      }
      var fontS = width / 75; // 7.5\u662F\u5982\u4F55\u6765\u7684 \u8981\u4FDD\u8BC1\u5728750\u5C3A\u5BF8\u4E0B1rem = 100px
      docEl.style.fontSize = fontS + "px";
    }
    win.addEventListener("resize", function() {
      clearTimeout(timer);
      timer = setTimeout(changeRem, 30);
    }, false);
    win.addEventListener("pageshow", function(e) {
      if (e.persisted) { //\u6E05\u9664\u7F13\u5B58
        clearTimeout(timer);
        timer = setTimeout(changeRem, 30);
      }
    }, false);
    changeRem();
})(window)
`,paraId:5,tocIndex:3},{value:"\u6216\u8005\u4F7F\u7528\u6DD8\u5B9D\u63D0\u4F9B\u7684\u5E93 \uFF1A ",paraId:6,tocIndex:3},{value:"https://github.com/amfe/lib-flexible",paraId:6,tocIndex:3},{value:"https://www.npmjs.com/package/postcss-px-to-viewport",paraId:7,tocIndex:4},{value:"https://www.npmjs.com/package/postcss-px-to-viewport-8-plugin",paraId:8,tocIndex:4},{value:"https://fedev.cn/css/vw-for-layout.html",paraId:9,tocIndex:4}]}}]);
