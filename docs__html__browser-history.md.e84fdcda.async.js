"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[471],{1476:function(o,i,n){n.r(i);var a=n(72269),u=n(93359),c=n(61788),h=n(19977),x=n(91558),s=n(24268),w=n(96057),m=n(85939),_=n(53683),r=n(80936),d=n(67294),e=n(10621),t=n(85893);function l(){return(0,t.jsx)(_.dY,{children:(0,t.jsx)(d.Suspense,{fallback:(0,t.jsx)(r.Z,{}),children:(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:"markdown",children:[(0,t.jsxs)("h2",{id:"history-action-\u4FE1\u606F",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#history-action-\u4FE1\u606F",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"history action \u4FE1\u606F"]}),(0,t.jsx)("p",{children:e.texts[0].value}),(0,t.jsx)("p",{children:e.texts[1].value}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:e.texts[2].value})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:e.texts[3].value})}),(0,t.jsx)("li",{children:(0,t.jsx)("p",{children:e.texts[4].value})})]}),(0,t.jsx)("p",{children:e.texts[5].value}),(0,t.jsxs)("p",{children:[e.texts[6].value,(0,t.jsx)("br",{}),e.texts[7].value,(0,t.jsx)("br",{}),e.texts[8].value,(0,t.jsx)("br",{}),e.texts[9].value,(0,t.jsx)("br",{}),e.texts[10].value]}),(0,t.jsxs)("h2",{id:"\u624B\u5199-usehistory",children:[(0,t.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u624B\u5199-usehistory",children:(0,t.jsx)("span",{className:"icon icon-link"})}),"\u624B\u5199 useHistory"]}),(0,t.jsx)(s.Z,{lang:"js",children:e.texts[11].value})]})})})})}i.default=l},10621:function(o,i,n){n.r(i),n.d(i,{texts:function(){return a}});const a=[{value:"Web \u6D4F\u89C8\u5668\u7684 history \u5BF9\u8C61\u662F Window \u63A5\u53E3\u7684\u4E00\u90E8\u5206\uFF0C\u5B83\u63D0\u4F9B\u4E86\u5BF9\u6D4F\u89C8\u5668\u4F1A\u8BDD\u5386\u53F2\u7684\u8BBF\u95EE\uFF0C\u5141\u8BB8\u5F00\u53D1\u4EBA\u5458\u64CD\u7EB5\u6D4F\u89C8\u5668\u5386\u53F2\u8BB0\u5F55\uFF0C\u7528\u4E8E\u5728\u5355\u9875\u5E94\u7528\u4E2D\u521B\u5EFA\u524D\u8FDB\u548C\u540E\u9000\u5BFC\u822A\u7684\u4F53\u9A8C\u3002",paraId:0,tocIndex:0},{value:"\u5173\u4E8E history \u5BF9\u8C61\u4E2D\u7684 action \u4FE1\u606F\uFF0C\u8FD9\u4E2A\u672F\u8BED\u901A\u5E38\u4E0E React Router \u8FD9\u6837\u7684\u524D\u7AEF\u8DEF\u7531\u5E93\u76F8\u5173\u8054\uFF0C\u800C\u4E0D\u662F\u539F\u751F\u7684 Web API\u3002\u5728 React Router \u4E2D\uFF0Caction \u662F\u4E00\u4E2A\u5C5E\u6027\uFF0C\u7528\u4E8E\u63CF\u8FF0\u5982\u4F55\u89E6\u53D1\u5BFC\u822A\u5230\u5F53\u524D\u9875\u9762\u7684\u884C\u4E3A",paraId:1,tocIndex:0},{value:"PUSH : \u5F53\u65B0\u9875\u9762\u88AB\u538B\u5165\u5386\u53F2\u5806\u6808\u65F6\uFF0C\u4F8B\u5982\uFF0C\u5F53\u7528\u6237\u70B9\u51FB\u4E00\u4E2A\u94FE\u63A5\u5BFC\u81F4\u9875\u9762\u8DF3\u8F6C\uFF0C\u6216\u8005\u5F00\u53D1\u4EBA\u5458\u901A\u8FC7 history.push() \u65B9\u6CD5\u7A0B\u5E8F\u5316\u5730\u5BFC\u822A\u5230\u4E00\u4E2A\u65B0\u5730\u5740\u3002",paraId:2,tocIndex:0},{value:"REPLACE: \u5F53\u5F53\u524D\u9875\u9762\u5728\u5386\u53F2\u5806\u6808\u4E2D\u88AB\u4E00\u4E2A\u65B0\u7684\u9875\u9762\u66FF\u6362\u65F6\uFF0C\u4F8B\u5982\uFF0C\u5F53\u5F00\u53D1\u4EBA\u5458\u901A\u8FC7 history.replace() \u65B9\u6CD5\u66F4\u65B0\u5F53\u524D\u7684\u5386\u53F2\u6761\u76EE\uFF0C\u800C\u4E0D\u662F\u6DFB\u52A0\u4E00\u4E2A\u65B0\u7684\u3002",paraId:3,tocIndex:0},{value:"POP: \u5F53\u53D1\u751F\u5386\u53F2\u5806\u6808\u7684\u53D8\u5316\u5BFC\u81F4\u9875\u9762\u53D8\u5316\u65F6\uFF0C\u901A\u5E38\u662F\u7528\u6237\u70B9\u51FB\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u6216\u540E\u9000\u6309\u94AE",paraId:4,tocIndex:0},{value:"\u5728 React Router v5 \u6216\u66F4\u65E9\u7248\u672C\u4E2D\uFF0C\u53EF\u4EE5\u901A\u8FC7 history \u5BF9\u8C61\u7684 action \u5C5E\u6027\u6765\u8BBF\u95EE\u8FD9\u4E00\u4FE1\u606F\u3002\u800C\u5728 React Router v6 \u4E2D\uFF0C\u8DEF\u7531\u7684\u72B6\u6001\u548C\u903B\u8F91\u88AB\u5C01\u88C5\u5F97\u66F4\u4E3A\u4E25\u5BC6\uFF0C\u901A\u5E38\u4E0D\u76F4\u63A5\u64CD\u4F5C history \u5BF9\u8C61\uFF0C\u4F46\u53EF\u4EE5\u901A\u8FC7\u94A9\u5B50\uFF08hooks\uFF09\u548C\u7EC4\u4EF6\u6765\u8BBF\u95EE\u4E0E\u5BFC\u822A\u76F8\u5173\u7684\u4FE1\u606F\u3002",paraId:5,tocIndex:0},{value:"history.pushState()\uFF1A\u5411\u5386\u53F2\u5806\u6808\u4E2D\u6DFB\u52A0\u4E00\u4E2A\u72B6\u6001\u3002",paraId:6,tocIndex:0},{value:`
history.replaceState()\uFF1A\u66FF\u6362\u5F53\u524D\u7684\u5386\u53F2\u5806\u6808\u6761\u76EE\u3002`,paraId:6,tocIndex:0},{value:`
history.back()\uFF1A\u4E0E\u7528\u6237\u70B9\u51FB\u540E\u9000\u6309\u94AE\u76F8\u540C\u7684\u6548\u679C\u3002`,paraId:6,tocIndex:0},{value:`
history.forward()\uFF1A\u4E0E\u7528\u6237\u70B9\u51FB\u524D\u8FDB\u6309\u94AE\u76F8\u540C\u7684\u6548\u679C\u3002`,paraId:6,tocIndex:0},{value:`
history.go()\uFF1A\u52A0\u8F7D\u5386\u53F2\u5806\u6808\u4E2D\u7684\u67D0\u4E2A\u5177\u4F53\u9875\u9762\u3002
history.scrollRestoration\uFF1A \u662F\u7528\u6765\u4FDD\u7559\u6EDA\u52A8\u4F4D\u7F6E\u7684\uFF0C\u6709\u4E24\u4E2A\u503C auto\u3001manual\uFF0C\u9ED8\u8BA4\u662F auto\uFF0C\u4E5F\u5C31\u662F\u4F1A\u81EA\u52A8\u5B9A\u4F4D\u5230\u4E0A\u6B21\u6EDA\u52A8\u4F4D\u7F6E\uFF0C\u8BBE\u7F6E\u4E3A manual \u5C31\u4E0D\u4F1A\u4E86\u3002`,paraId:6,tocIndex:0},{value:`import { useState, useEffect } from 'react';
// \u7531\u4E8Eice\u7684history\u6CA1\u6709action\u7684\u4FE1\u606F\uFF0C\u6240\u4EE5\u81EA\u5B9A\u4E49\u91CD\u5199\u8DEF\u7531\u4E8B\u4EF6\u5B9E\u73B0action\u53D8\u5316\u7684\u76D1\u542C
function useHistory() {
  const [location, setLocation] = useState(window.location);
  const [action, setAction] = useState('PUSH');

  useEffect(() => {
    const originalPushState = window.history.pushState;
    const originalReplaceState = window.history.replaceState;

    window.history.pushState = function (state, title, url) {
      originalPushState.call(window.history, state, title, url);
      setAction('PUSH');
      setLocation(window.location);
    };

    window.history.replaceState = function (state, title, url) {
      originalReplaceState.call(window.history, state, title, url);
      setAction('REPLACE');
      setLocation(window.location);
    };

    const popstateListener = () => {
      setAction('POP');
      setLocation(window.location);
    };

    window.addEventListener('popstate', popstateListener);

    return () => {
      window.removeEventListener('popstate', popstateListener);
      window.history.pushState = originalPushState;
      window.history.replaceState = originalReplaceState;
    };
  }, []);

  function push(path, state) {
    window.history.pushState(state, '', path);
  }

  function replace(path, state) {
    window.history.replaceState(state, '', path);
  }

  function go(n) {
    window.history.go(n);
  }

  return {
    location,
    action,
    push,
    replace,
    go,
  };
}

export default useHistory;
`,paraId:7,tocIndex:1}]}}]);
