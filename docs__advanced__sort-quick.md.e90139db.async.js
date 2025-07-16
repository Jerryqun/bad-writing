"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[6e3],{60143:function(_,r,e){e.r(r);var a=e(72269),o=e(93359),x=e(61788),c=e(19977),m=e(91558),d=e(24268),I=e(96057),h=e(85939),i=e(53683),s=e(80936),l=e(67294),t=e(41787),n=e(85893);function u(){return(0,n.jsx)(i.dY,{children:(0,n.jsx)(l.Suspense,{fallback:(0,n.jsx)(s.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u5FEB\u901F\u6392\u5E8F",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5FEB\u901F\u6392\u5E8F",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u5FEB\u901F\u6392\u5E8F"]}),(0,n.jsxs)("p",{children:[(0,n.jsx)("a",{target:"_blank",href:"https://www.ruanyifeng.com/blog/2011/04/quicksort_in_javascript.html",children:t.texts[0].value}),(0,n.jsx)("br",{}),t.texts[1].value,(0,n.jsx)("br",{}),t.texts[2].value,(0,n.jsx)("br",{}),t.texts[3].value]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[4].value}),(0,n.jsxs)("h2",{id:"\u4E8C\u5206\u67E5\u627E",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E8C\u5206\u67E5\u627E",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4E8C\u5206\u67E5\u627E"]}),(0,n.jsx)("p",{children:(0,n.jsx)("code",{children:t.texts[5].value})}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:t.texts[6].value}),(0,n.jsx)("li",{children:t.texts[7].value}),(0,n.jsx)("li",{children:t.texts[8].value})]}),(0,n.jsx)("p",{children:t.texts[9].value}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[10].value}),(0,n.jsx)("p",{children:t.texts[11].value}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[12].value})]})})})})}r.default=u},41787:function(_,r,e){e.r(r),e.d(r,{texts:function(){return a}});const a=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:`
\u5728\u6570\u636E\u96C6\u4E4B\u4E2D\uFF0C\u9009\u62E9\u4E00\u4E2A\u5143\u7D20\u4F5C\u4E3A"\u57FA\u51C6"\uFF08pivot\uFF09`,paraId:0,tocIndex:0},{value:`
\u6240\u6709\u5C0F\u4E8E"\u57FA\u51C6"\u7684\u5143\u7D20\uFF0C\u90FD\u79FB\u5230"\u57FA\u51C6"\u7684\u5DE6\u8FB9\uFF1B\u6240\u6709\u5927\u4E8E"\u57FA\u51C6"\u7684\u5143\u7D20\uFF0C\u90FD\u79FB\u5230"\u57FA\u51C6"\u7684\u53F3\u8FB9`,paraId:0,tocIndex:0},{value:`
\u5BF9"\u57FA\u51C6"\u5DE6\u8FB9\u548C\u53F3\u8FB9\u7684\u4E24\u4E2A\u5B50\u96C6\uFF0C\u4E0D\u65AD\u91CD\u590D\u7B2C\u4E00\u6B65\u548C\u7B2C\u4E8C\u6B65\uFF0C\u76F4\u5230\u6240\u6709\u5B50\u96C6\u53EA\u5269\u4E0B\u4E00\u4E2A\u5143\u7D20\u4E3A\u6B62`,paraId:0,tocIndex:0},{value:`const quicksort = (arr) => {
  if (arr.length <= 1) {
    return arr;
  }
  const axisIndex = Math.floor(arr.length / 2);
  const axis = arr.splice(axisIndex, 1)[0];
  const left = [];
  const right = [];
  arr.forEach((item) => {
    if (item > axis) {
      right.push(item);
    } else {
      left.push(item);
    }
  });

  return quicksort(left).concat([axis], quicksort(right));
};

const result = quicksort([85, 24, 63, 45, 17, 31, 96, 50]);
console.log('result', result);
`,paraId:1,tocIndex:0},{value:"\u9488\u5BF9\u6709\u5E8F\u6570\u7EC4",paraId:2,tocIndex:1},{value:"\u51E1\u6709\u5E8F\u5FC5\u4E8C\u5206",paraId:3,tocIndex:1},{value:"\u51E1\u4E8C\u5206\u3001\u65F6\u95F4\u590D\u6742\u5EA6\u5FC5\u5305\u542B O(log(n))",paraId:3,tocIndex:1},{value:"\u4F18\u5316\u5D4C\u5957\u5FAA\u73AF \u53EF\u4EE5\u8003\u8651\u7528\u53CC\u6307\u9488",paraId:3,tocIndex:1},{value:"\u5FAA\u73AF\u65B9\u6CD5",paraId:4,tocIndex:1},{value:`function binarySearch(arr: number[], target: number) {
  let l = arr.length;
  if (l === 0) {
    return -1;
  }
  let startIndex = 0;
  let endIndex = l - 1;
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const mid = arr[midIndex];
    if (target < mid) {
      endIndex = midIndex - 1;
    }
    if (target > mid) {
      startIndex = midIndex + 1;
    }
    if (target === mid) {
      return midIndex;
    }
  }
  return -1;
}

const a = binarySearch([1, 2, 3, 4], 4);
console.log('a', a);
`,paraId:5,tocIndex:1},{value:"\u9012\u5F52\u65B9\u6CD5",paraId:6,tocIndex:1},{value:`function binarySearch(
  arr: number[],
  target: number,
  startIndex?: number,
  endIndex?: number,
) {
  let l = arr.length;
  if (l === 0) {
    return -1;
  }
  if (startIndex === null) {
    startIndex = 0;
  }
  if (endIndex === null) {
    endIndex = arr.length;
  }
  if (endIndex > startIndex) {
    return -1;
  }
  const midIndex = Math.floor((startIndex + endIndex) / 2);
  const mid = arr[midIndex];
  if (target < mid) {
    return binarySearch(arr, target, startIndex, midIndex - 1);
  }
  if (target > mid) {
    return binarySearch(arr, target, midIndex + 1, endIndex);
  }
  if (target === mid) {
    return midIndex;
  }
  return -1;
}

const a = binarySearch([1, 2, 3, 4], 4);
console.log('a', a);
`,paraId:7,tocIndex:1}]}}]);
