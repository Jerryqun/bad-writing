"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7539],{49991:function(r,i,e){e.r(i);var o=e(72269),c=e(93359),d=e(61788),h=e(19977),m=e(91558),s=e(24268),g=e(96057),p=e(85939),l=e(53683),a=e(80936),u=e(67294),t=e(46312),n=e(85893);function _(){return(0,n.jsx)(l.dY,{children:(0,n.jsx)(u.Suspense,{fallback:(0,n.jsx)(a.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"asyncpool",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#asyncpool",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"asyncPool"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://www.npmjs.com/package/tiny-async-pool",target:"_blank",children:t.texts[0].value})}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{href:"https://www.cnblogs.com/yf-html/p/14957529.html",target:"_blank",children:t.texts[1].value})}),(0,n.jsxs)("h2",{id:"\u4F7F\u7528\u5B9E\u4F8B",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F7F\u7528\u5B9E\u4F8B",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F7F\u7528\u5B9E\u4F8B"]}),(0,n.jsx)(s.Z,{lang:"js",children:t.texts[2].value}),(0,n.jsxs)("h2",{id:"demo",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#demo",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"demo"]}),(0,n.jsx)(s.Z,{lang:"js",children:t.texts[3].value}),(0,n.jsxs)("h2",{id:"\u6E90\u7801",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6E90\u7801",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6E90\u7801"]}),(0,n.jsx)(s.Z,{lang:"js",children:t.texts[4].value}),(0,n.jsxs)("h2",{id:"\u53E6\u4E00\u79CD\u89E3\u6CD5",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53E6\u4E00\u79CD\u89E3\u6CD5",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u53E6\u4E00\u79CD\u89E3\u6CD5"]}),(0,n.jsx)(s.Z,{lang:"js",children:t.texts[5].value})]})})})})}i.default=_},46312:function(r,i,e){e.r(i),e.d(i,{texts:function(){return o}});const o=[{value:"github \u53C2\u8003",paraId:0,tocIndex:0},{value:"\u5B9E\u73B0\u89E3\u6790",paraId:1,tocIndex:0},{value:`// \u6267\u884C\u987A\u5E8F \u4E00\u5F00\u59CB 1000, 5000 \u538B\u5165\u6267\u884C\u961F\u5217\uFF0C \u4E00\u79D2\u540E1000\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\uFF0C \u538B\u51653000  \u7136\u540E\u4E09\u79D2\u540E 3000\u4EFB\u52A1\u6267\u884C\u5B8C\u6BD5\u538B\u51652000  \u4E00\u79D2\u540E5000\u6267\u884C\u5B8C\u6BD5 \u6700\u540E\u518D\u4E00\u79D2\u540E2000 \u6267\u884C\u5B8C\u6BD5

// results \u6309\u987A\u5E8F\u8F93\u51FA\u7ED3\u679C
// asyncPool \u7B2C\u4E00\u4E2A\u53C2\u6570\uFF1A\u5E76\u53D1\u6267\u884C\u7684\u4E2A\u6570
// asyncPool \u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF1A\u4F20\u5165\u7B2C\u4E09\u4E2A\u53C2\u6570\u51FD\u6570\u7684\u53C2\u6570, \u5176\u957F\u5EA6\u5C31\u662F\u4EFB\u52A1\u6570
// asyncPool \u7B2C\u4E09\u4E2A\u53C2\u6570\uFF1A\u4E00\u4E2A\u51FD\u6570 \u8FD4\u56DE\u4E00\u4E2Apromise \u5BF9\u8C61

const timeout = (ms) =>
  new Promise((resolve) => setTimeout(() => resolve(ms), ms));

async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // \u5B58\u50A8\u6240\u6709\u7684\u5F02\u6B65\u4EFB\u52A1
  const executing = []; // \u5B58\u50A8\u6B63\u5728\u6267\u884C\u7684\u5F02\u6B65\u4EFB\u52A1
  for (const item of array) {
    // \u8C03\u7528iteratorFn\u51FD\u6570\u521B\u5EFA\u5F02\u6B65\u4EFB\u52A1
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p); // \u4FDD\u5B58\u65B0\u7684\u5F02\u6B65\u4EFB\u52A1

    // \u5F53poolLimit\u503C\u5C0F\u4E8E\u6216\u7B49\u4E8E\u603B\u4EFB\u52A1\u4E2A\u6570\u65F6\uFF0C\u8FDB\u884C\u5E76\u53D1\u63A7\u5236
    if (poolLimit <= array.length) {
      // \u5F53\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u4ECE\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\u6570\u7EC4\u4E2D\u79FB\u9664\u5DF2\u5B8C\u6210\u7684\u4EFB\u52A1
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // \u4FDD\u5B58\u6B63\u5728\u6267\u884C\u7684\u5F02\u6B65\u4EFB\u52A1
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // \u7B49\u5F85\u8F83\u5FEB\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6210
      }
    }
  }
  return Promise.all(ret);
}

async function a() {
  return asyncPool(2, [1000, 5000, 3000, 2000], timeout).then((results) => {
    console.log('results: ', results);
  });
}
a();
`,paraId:2,tocIndex:1},{value:`async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // \u5B58\u50A8\u6240\u6709\u7684\u5F02\u6B65\u4EFB\u52A1
  const executing = []; // \u5B58\u50A8\u6B63\u5728\u6267\u884C\u7684\u5F02\u6B65\u4EFB\u52A1
  for (const item of array) {
    // \u8C03\u7528iteratorFn\u51FD\u6570\u521B\u5EFA\u5F02\u6B65\u4EFB\u52A1
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p); // \u4FDD\u5B58\u65B0\u7684\u5F02\u6B65\u4EFB\u52A1

    // \u5F53poolLimit\u503C\u5C0F\u4E8E\u6216\u7B49\u4E8E\u603B\u4EFB\u52A1\u4E2A\u6570\u65F6\uFF0C\u8FDB\u884C\u5E76\u53D1\u63A7\u5236
    if (poolLimit <= array.length) {
      // \u5F53\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u4ECE\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\u6570\u7EC4\u4E2D\u79FB\u9664\u5DF2\u5B8C\u6210\u7684\u4EFB\u52A1
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // \u4FDD\u5B58\u6B63\u5728\u6267\u884C\u7684\u5F02\u6B65\u4EFB\u52A1
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // \u7B49\u5F85\u8F83\u5FEB\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6210
      }
    }
  }
  return Promise.all(ret);
}

var urls = [
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting1.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting2.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting3.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting4.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/AboutMe-painting5.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn6.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn7.png',
  'https://hexo-blog-1256114407.cos.ap-shenzhen-fsi.myqcloud.com/bpmn8.png',
];
function loadImg(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = function () {
      console.log('\u4E00\u5F20\u56FE\u7247\u52A0\u8F7D\u5B8C\u6210');
      resolve(img);
    };
    img.onerror = function () {
      reject(new Error('Could not load image at' + url));
    };
    img.src = url;
  });
}

asyncPool(3, urls, loadImg);
`,paraId:3,tocIndex:2},{value:`async function asyncPool(poolLimit, array, iteratorFn) {
  const ret = []; // \u5B58\u50A8\u6240\u6709\u7684\u5F02\u6B65\u4EFB\u52A1
  const executing = []; // \u5B58\u50A8\u6B63\u5728\u6267\u884C\u7684\u5F02\u6B65\u4EFB\u52A1
  for (const item of array) {
    // \u8C03\u7528iteratorFn\u51FD\u6570\u521B\u5EFA\u5F02\u6B65\u4EFB\u52A1
    const p = Promise.resolve().then(() => iteratorFn(item, array));
    ret.push(p); // \u4FDD\u5B58\u65B0\u7684\u5F02\u6B65\u4EFB\u52A1

    // \u5F53poolLimit\u503C\u5C0F\u4E8E\u6216\u7B49\u4E8E\u603B\u4EFB\u52A1\u4E2A\u6570\u65F6\uFF0C\u8FDB\u884C\u5E76\u53D1\u63A7\u5236
    if (poolLimit <= array.length) {
      // \u5F53\u4EFB\u52A1\u5B8C\u6210\u540E\uFF0C\u4ECE\u6B63\u5728\u6267\u884C\u7684\u4EFB\u52A1\u6570\u7EC4\u4E2D\u79FB\u9664\u5DF2\u5B8C\u6210\u7684\u4EFB\u52A1
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e); // \u4FDD\u5B58\u6B63\u5728\u6267\u884C\u7684\u5F02\u6B65\u4EFB\u52A1
      if (executing.length >= poolLimit) {
        await Promise.race(executing); // \u7B49\u5F85\u8F83\u5FEB\u7684\u4EFB\u52A1\u6267\u884C\u5B8C\u6210
      }
    }
  }
  return Promise.all(ret);
}
`,paraId:4,tocIndex:3},{value:`/**

\u8BBE\u8BA1\u4E00\u4E2A\u5F02\u6B65\u5E76\u53D1\u9650\u5236

\u5F02\u6B65\u5E76\u53D1\u6570\u9650\u5236\u95EE\u9898\u8FD8\u662F\u6BD4\u8F83\u5BB9\u6613\u7406\u89E3\uFF0C\u5047\u8BBE\u6211\u4EEC\u67D0\u4E2A\u9875\u9762\u670910\u4E2A\u63A5\u53E3\u6570\u636E\u9700\u8981\u8BF7\u6C42\uFF0C\u73B0\u5728\u8003\u8651\u5230\u7F51\u7EDC\u5E76\u53D1\u901A\u9053\u963B\u585E\u95EE\u9898\uFF0C\u73B0\u5728\u9700\u8981\u9650\u5236\u8FD910\u4E2A\u63A5\u53E3\u8BF7\u6C42\u65F6\u6700\u591A\u4E00\u6B21\u60273\u4E2A\u5728\u5904\u7406\uFF0C\u5F53\u6700\u5927\u8BF7\u6C42\u6B21\u6570\u8D85\u8FC73\u4E2A\u65F6\uFF0C\u672A\u5904\u7406\u7684\u63A5\u53E3\u53EA\u80FD\u7B49\u5F85\u3002\u5F53\u6709\u63A5\u53E3\u6570\u636E\u8BF7\u6C42\u5B8C\u6210\u540E\uFF0C\u7ACB\u5373\u5C06\u8BF7\u6C42\u8D44\u6E90\u7ED9\u5176\u4F59\u63A5\u53E3\u4F7F\u7528\u3002\u8FD9\u4E2A\u5904\u7406\u662F\u4E0D\u662F\u5F88\u50CF\u64CD\u4F5C\u7CFB\u7EDF\u7684\u7EBF\u7A0B\u4EFB\u52A1\u961F\u5217\u3002
\u7EFC\u5408\u4E0A\u9762\u7684\u7B80\u5355\u4F8B\u5B50\uFF0C\u6211\u4EEC\u53EF\u4EE5\u77E5\u9053\u8FD9\u4E2A\u5F02\u6B65\u5E76\u53D1\u9650\u5236\u7684\u5DE5\u5177

\u961F\u5217\uFF0C\u5B58\u50A8\u6240\u6709\u4EFB\u52A1
limit,\u4FDD\u5B58\u5F53\u524D\u6700\u5927\u5F02\u6B65\u8BF7\u6C42\u63A5\u53E3\u7684\u6570\u91CF\u3002
 */

class limitRequest {
  constructor(limit, promises) {
    this.limit = limit;
    this.count = 0;
    this.queue = promises;
    this.result = [];
    this.length = promises.length;
  }
  run() {
    if (this.queue.length > 0 && this.count < this.limit) {
      const top = this.queue.shift();
      this.count++;
      top.then((res) => {
        this.count--;
        this.result.push(res);
        this.run();
        return new Promise((resolve) => {
          if (this.queue.length === 0) {
            resolve(this.result);
          }
        });
      });
    }
  }
  start() {
    this.run();
    return new Promise((resolve) => {
      const i = setInterval(() => {
        if (this.result.length === this.length) {
          resolve(this.result);
          clearInterval(i);
        }
      }, 500);
    });
  }
}

const sleep = (timer, res) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      console.log(\`\${timer}\u5F00\u59CB\u4E86\`);
      resolve(res);
    }, timer),
  );

const limitRequestObj = new limitRequest(2, [
  sleep(1000, { a: 1 }),
  sleep(2000, { a: 2 }),
  sleep(3000, { a: 3 }),
  sleep(5000, { a: 5 }),
]);
const result = limitRequestObj.start();
console.log(
  result.then((res) => {
    console.log('res', res);
  }),
);
`,paraId:5,tocIndex:4}]}}]);
