"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3806],{31925:function(t,r,e){e.r(r);var i=e(72269),o=e(93359),h=e(61788),c=e(19977),m=e(91558),a=e(24268),E=e(96057),x=e(85939),d=e(53683),u=e(80936),s=e(67294),_=e(12123),n=e(85893);function l(){return(0,n.jsx)(d.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(u.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u6570\u7EC4\u53BB\u91CD",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6570\u7EC4\u53BB\u91CD",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6570\u7EC4\u53BB\u91CD"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{target:"_blank",href:"https://segmentfault.com/a/1190000016418021"})}),(0,n.jsx)(a.Z,{lang:"js",children:_.texts[0].value}),(0,n.jsxs)("h2",{id:"\u6570\u7EC4-length-\u5C5E\u6027",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6570\u7EC4-length-\u5C5E\u6027",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6570\u7EC4 length \u5C5E\u6027"]}),(0,n.jsxs)("ol",{children:[(0,n.jsx)("li",{children:_.texts[1].value}),(0,n.jsx)("li",{children:_.texts[2].value}),(0,n.jsx)("li",{children:_.texts[3].value}),(0,n.jsx)("li",{children:_.texts[4].value})]})]})})})})}r.default=l},12123:function(t,r,e){e.r(r),e.d(r,{texts:function(){return i}});const i=[{value:`var arr = [
  1,
  1,
  'true',
  'true',
  true,
  true,
  15,
  15,
  false,
  false,
  undefined,
  undefined,
  null,
  null,
  NaN,
  NaN,
  'NaN',
  0,
  0,
  'a',
  'a',
  {},
  {},
];

//\u4F7F\u7528es6 filter + hasOwnProperty
const unique = (arr) => {
  const container = {};
  return arr.filter((d) =>
    container.hasOwnProperty(d) ? false : (container[d] = true),
  );
};

// includes

const unique = (arr) => {
  return arr.filter((d) => (arr.includes(d) ? false : true));
};

// es6 Set \u7ED3\u6784

const unique = (arr) => [...new Set(arr)];
console.log(unique(arr));

// es5 \u53CC\u5C42\u5FAA\u73AF
function unique(arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }
  return arr;
}

// \u5229\u7528 indexOf \u53BB\u91CD \u6216\u8005includes

const unique = (arr) => {
  if (!Array.isArray(arr)) {
    console.warn('\u4E0D\u662F\u6570\u7EC4');
    return [];
  }
  let res = [];
  for (let i = 0; i < arr.length; j++) {
    if (!res.includes(arr[i])) {
      res.push(arr[i]);
    }
  }
  return res;
};

// reduce
const unique = (arr) => {
  return arr.reduce((prev, cur) => {
    return prev.includes(cur) ? prev : [...prev, cur];
  }, []);
};
`,paraId:0,tocIndex:0},{value:"\u8BBE\u7F6E\u6570\u7EC4\u7684 length \u503C\u4E3A\u5C0F\u4E8E\u5F53\u524D\u503C\u7684\u975E\u8D1F\u6574\u6570 n\uFF0C\u5219\u4EFB\u4F55\u7D22\u5F15\u5927\u4E8E\u6216\u7B49\u4E8E n \u7684\u6570\u7EC4\u5143\u7D20\u90FD\u4F1A\u4ECE\u6570\u7EC4\u4E2D\u88AB\u5220\u9664",paraId:1,tocIndex:1},{value:"\u5982\u679C\u7ED9\u4E00\u4E2A\u7D22\u5F15\u4E3A i\u200B \u7684\u6570\u7EC4\u5143\u7D20\u8D4B\u503C\uFF0C\u800C i \u5927\u4E8E\u6216\u7B49\u4E8E\u6570\u7EC4\u5F53\u524D\u7684 length\uFF0C\u5219\u6570\u7EC4\u7684 length \u5C5E\u6027\u4F1A\u88AB\u8BBE \u7F6E\u4E3A i+1\u200B",paraId:1,tocIndex:1},{value:"\u5BF9\u6570\u7EC4\u5143\u7D20\u4F7F\u7528 delete \u64CD\u4F5C\u7B26\u4E0D\u4F1A\u4FEE\u6539 length \u5C5E\u6027\uFF0C\u4F7F\u7528 splice()\u200B \u4F1A",paraId:1,tocIndex:1},{value:"\u5982\u679C\u7701\u7565\u6570\u7EC4\u5B57\u9762\u91CF\u4E2D\u7684\u4E00\u4E2A\u503C\uFF0C\u88AB\u7701\u7565\u7684\u5143\u7D20\u662F\u4E0D\u5B58\u5728\u7684\uFF0C\u4F46\u5B83\u7684\u7D22\u5F15\u662F\u5B58\u5728\u7684",paraId:1,tocIndex:1}]}}]);
