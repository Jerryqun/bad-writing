"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1991],{91457:function(d,t,e){e.r(t);var a=e(72269),o=e(93359),m=e(61788),c=e(19977),h=e(91558),_=e(24268),x=e(96057),g=e(85939),s=e(53683),r=e(80936),u=e(67294),i=e(77188),n=e(85893);function l(){return(0,n.jsx)(s.dY,{children:(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(r.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h1",{id:"postcss-plugin-px2rem",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#postcss-plugin-px2rem",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"postcss-plugin-px2rem"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://www.npmjs.com/package/postcss-plugin-px2rem",children:i.texts[0].value})}),(0,n.jsxs)("h2",{id:"usage",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#usage",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Usage"]}),(0,n.jsx)(_.Z,{lang:"css",children:i.texts[1].value}),(0,n.jsxs)("h2",{id:"configuration",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#configuration",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"Configuration"]}),(0,n.jsx)(_.Z,{lang:"json",children:i.texts[2].value}),(0,n.jsxs)("h2",{id:"em\u9002\u914D\u7528\u8FD9\u6BB5\u4EE3\u7801\u52A8\u6001\u8BA1\u7B97html\u7684font-size\u5927\u5C0F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#em\u9002\u914D\u7528\u8FD9\u6BB5\u4EE3\u7801\u52A8\u6001\u8BA1\u7B97html\u7684font-size\u5927\u5C0F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"em\u9002\u914D\u7528\u8FD9\u6BB5\u4EE3\u7801\u52A8\u6001\u8BA1\u7B97html\u7684font-size\u5927\u5C0F"]}),(0,n.jsx)("p",{children:i.texts[3].value}),(0,n.jsx)("p",{children:i.texts[4].value}),(0,n.jsx)(_.Z,{lang:"js",children:i.texts[5].value}),(0,n.jsxs)("p",{children:[i.texts[6].value,(0,n.jsx)("a",{href:"https://github.com/amfe/lib-flexible",children:i.texts[7].value})]})]})})})})}t.default=l},77188:function(d,t,e){e.r(t),e.d(t,{texts:function(){return a}});const a=[{value:"https://www.npmjs.com/package/postcss-plugin-px2rem",paraId:0,tocIndex:0},{value:`// input
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
`,paraId:5,tocIndex:3},{value:"\u6216\u8005\u4F7F\u7528\u6DD8\u5B9D\u63D0\u4F9B\u7684\u5E93 \uFF1A ",paraId:6,tocIndex:3},{value:"https://github.com/amfe/lib-flexible",paraId:6,tocIndex:3}]}}]);
