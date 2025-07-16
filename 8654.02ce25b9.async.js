"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8654],{48654:function(t,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Next.js \u5185\u7F6E\u4E86 ",paraId:0,tocIndex:0},{value:"next/font",paraId:0,tocIndex:0},{value:" \u7EC4\u4EF6\uFF0C\u76F8\u6BD4\u4E8E\u4F20\u7EDF\u4F7F\u7528\u5B57\u4F53\u7684\u65B9\u5F0F\uFF0C\u4F7F\u7528 font \u7EC4\u4EF6\u4F1A\u66F4\u52A0\u7075\u6D3B\u4FBF\u6377\u3002font \u7EC4\u4EF6\u7684\u4F7F\u7528\u4E3B\u8981\u5206\u4E3A\u4E24\u5757\uFF0C\u4E00\u5757\u662F Google \u5B57\u4F53\uFF0C\u4E00\u5757\u662F\u672C\u5730\u5B57\u4F53\uFF0C\u90FD\u662F\u901A\u8FC7 font \u7EC4\u4EF6\u5B9E\u73B0\uFF0C\u4F46\u5177\u4F53\u914D\u7F6E\u4E0A\u4F1A\u7565\u6709\u4E0D\u540C\u3002",paraId:0,tocIndex:0},{value:"\u672C\u7BC7\u6211\u4EEC\u4F1A\u5148\u4ECE\u4F20\u7EDF\u4F7F\u7528\u5B57\u4F53\u7684\u65B9\u5F0F\u5F00\u59CB\u8BB2\u8D77\uFF0C\u7136\u540E\u8BB2\u89E3 font \u7EC4\u4EF6\u5E26\u6765\u7684\u4FBF\u5229\u548C\u4F18\u5316\uFF0C\u6700\u540E\u6DF1\u5165\u7EC6\u8282\uFF0C\u8BB2\u89E3 font \u51FD\u6570\u7684\u5177\u4F53\u53C2\u6570\uFF0C\u8FD9\u4E9B\u7EC6\u8282\u5728\u5B66\u4E60\u7684\u65F6\u5019\u53EA\u7528\u5927\u81F4\u4E86\u89E3\u5373\u53EF\uFF0C\u5728\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u7684\u65F6\u5019\u53EF\u518D\u5177\u4F53\u4E86\u89E3\u3002",paraId:1,tocIndex:0},{value:"\u6211\u4EEC\u5148\u8BB2\u8BB2\u4F20\u7EDF\u4F7F\u7528\u5B57\u4F53\u7684\u65B9\u5F0F\u3002",paraId:2,tocIndex:1},{value:"\u6700\u57FA\u672C\u7684\u65B9\u6CD5\u662F\u901A\u8FC7 ",paraId:3,tocIndex:1},{value:"@font-face",paraId:3,tocIndex:1},{value:"\u6307\u5B9A\u4E00\u4E2A\u81EA\u5B9A\u4E49\u5B57\u4F53\uFF0C\u5B57\u4F53\u6587\u4EF6\u53EF\u4EE5\u6765\u81EA\u8FDC\u7A0B\u6587\u4EF6\uFF0C\u4E5F\u53EF\u4EE5\u6765\u81EA\u672C\u5730\u6587\u4EF6\u3002\u7136\u540E\u5728 ",paraId:3,tocIndex:1},{value:"font-family",paraId:3,tocIndex:1},{value:" \u4E2D\u4F7F\u7528\u8BE5\u5B57\u4F53\u3002",paraId:3,tocIndex:1},{value:`// global.css
@font-face {
  font-family: 'Bitstream Vera Serif Bold';
  src: url('https://mdn.github.io/css-examples/web-fonts/VeraSeBd.ttf');
}

body {
  font-family: 'Bitstream Vera Serif Bold', serif;
}
`,paraId:4,tocIndex:1},{value:"\u501F\u52A9 ",paraId:5,tocIndex:1},{value:"Google Fonts",paraId:5,tocIndex:1},{value:" \u8FD9\u6837\u7684\u5B57\u4F53\u7F51\u7AD9\uFF0C\u6211\u4EEC\u53EF\u4EE5\u5FEB\u901F\u751F\u6210\u6837\u5F0F\u6587\u4EF6\uFF0C\u518D\u901A\u8FC7 ",paraId:5,tocIndex:1},{value:"link",paraId:5,tocIndex:1},{value:" \u6807\u7B7E\u6216\u8005 ",paraId:5,tocIndex:1},{value:"@import",paraId:5,tocIndex:1},{value:" \u7684\u65B9\u5F0F\u76F4\u63A5\u4F7F\u7528\u3002",paraId:5,tocIndex:1},{value:"\u4F7F\u7528 ",paraId:6,tocIndex:1},{value:"link",paraId:6,tocIndex:1},{value:" \u6807\u7B7E\uFF1A",paraId:6,tocIndex:1},{value:`// layout.js
export default function Layout({ children }) {
  return (
    <html>
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
`,paraId:7,tocIndex:1},{value:`// globals.css
body {
  font-family: 'Ma Shan Zheng', serif;
}
`,paraId:8,tocIndex:1},{value:"\u4F7F\u7528 ",paraId:9,tocIndex:1},{value:"@import",paraId:9,tocIndex:1},{value:"\uFF1A",paraId:9,tocIndex:1},{value:`// globals.css
@import url('https://fonts.googleapis.com/css2?family=Ma+Shan+Zheng&display=swap');

body {
  font-family: 'Ma Shan Zheng', serif;
}
`,paraId:10,tocIndex:1},{value:"Next.js \u5185\u7F6E\u4E86 ",paraId:11,tocIndex:2},{value:"next/font",paraId:11,tocIndex:2},{value:" \u7EC4\u4EF6\uFF0C\u5E2E\u52A9\u4F60\u66F4\u597D\u7684\u7BA1\u7406\u548C\u4F7F\u7528\u5B57\u4F53\u3002",paraId:11,tocIndex:2},{value:"next/font",paraId:11,tocIndex:2},{value:"\u4F1A\u81EA\u52A8\u4F18\u5316\u5B57\u4F53\uFF08\u5305\u62EC\u81EA\u5B9A\u4E49\u5B57\u4F53\uFF09\uFF0C\u5C31\u6BD4\u5982\u501F\u52A9 CSS \u7684 ",paraId:11,tocIndex:2},{value:"size-adjust",paraId:11,tocIndex:2},{value:" \u5C5E\u6027\u5B9E\u73B0\u96F6\u5E03\u5C40\u504F\u79FB\u3002",paraId:11,tocIndex:2},{value:"\u5E03\u5C40\u504F\u79FB\u6211\u4EEC\u5728 Image \u7EC4\u4EF6\u7BC7\u8BB2\u8FC7\uFF0C\u9664\u4E86\u56FE\u7247\u4E0D\u8BBE\u7F6E\u5BBD\u9AD8\u5BFC\u81F4\u5E03\u5C40\u504F\u79FB\uFF0C\u7F51\u9875\u5B57\u4F53\u52A0\u8F7D\u7684\u65F6\u5019\u4E5F\u5BB9\u6613\u51FA\u73B0\u5E03\u5C40\u504F\u79FB\uFF0C\u5C31\u6BD4\u5982\uFF1A",paraId:12,tocIndex:2},{value:"\u4E09\u884C\u6587\u5B57\u7684 ",paraId:13,tocIndex:2},{value:"font-size",paraId:13,tocIndex:2},{value:"\u90FD\u662F 64px\uFF0C\u552F\u4E00\u533A\u522B\u5C31\u662F\u5B57\u4F53\u4E0D\u540C\uFF0C\u4F46\u89C2\u5BDF\u56FE\u7247\u5DE6\u4FA7\u4E09\u884C\u6587\u5B57\u7684\u9AD8\u5EA6\uFF0C\u4F60\u4F1A\u53D1\u73B0\u867D\u7136 font-size \u8BBE\u7F6E\u7684\u90FD\u662F 64px\uFF0C\u4F46\u5B9E\u9645\u5BF9\u5E94\u7684\u9AD8\u5EA6\u5E76\u4E0D\u4E00\u5B9A\u662F 64px\u3002\u8FD9\u79CD\u65F6\u5019\uFF0C\u5C31\u53EF\u4EE5\u501F\u52A9 CSS \u7684 ",paraId:13,tocIndex:2},{value:"size-adjust",paraId:13,tocIndex:2},{value:" \u8C03\u6574\u5927\u5C0F\uFF0C\u4FDD\u8BC1\u6700\u7EC8\u90FD\u662F 64px \u5927\u5C0F\u3002Next.js \u81EA\u52A8\u505A\u4E86\u8FD9\u4E2A\u4F18\u5316\u3002",paraId:13,tocIndex:2},{value:"\u9664\u4E86\u9632\u6B62\u5E03\u5C40\u504F\u79FB\uFF0C",paraId:14,tocIndex:2},{value:"next/font",paraId:14,tocIndex:2},{value:" \u8FD8\u53EF\u4EE5\u5E2E\u52A9\u4F60\u5FEB\u6377\u4F7F\u7528 Google \u5B57\u4F53\uFF0C\u800C\u4E14 CSS \u548C\u5B57\u4F53\u6587\u4EF6\u4F1A\u5728\u6784\u5EFA\u7684\u65F6\u5019\u4E0B\u8F7D\uFF0C\u548C\u5176\u4ED6\u9759\u6001\u8D44\u6E90\u4E00\u6837\u88AB\u4FDD\u5B58\uFF0C\u6D4F\u89C8\u5668\u4E5F\u4E0D\u4F1A\u5411 Google \u53D1\u9001\u4EFB\u4F55\u8BF7\u6C42\uFF0C\u4FDD\u8BC1\u4E86\u6027\u80FD\u548C\u9690\u79C1\u6027\u3002\u66F4\u591A\u529F\u80FD\u6211\u4EEC\u4F1A\u5728\u672C\u7BC7\u8BE6\u7EC6\u8BB2\u89E3\u3002",paraId:14,tocIndex:2},{value:"next/font",paraId:15,tocIndex:2},{value:" \u5177\u4F53\u53C8\u5206\u4E3A ",paraId:15,tocIndex:2},{value:"next/font/google",paraId:15,tocIndex:2},{value:" \u548C ",paraId:15,tocIndex:2},{value:"next/font/local",paraId:15,tocIndex:2},{value:"\uFF0C\u5206\u522B\u5BF9\u5E94\u4F7F\u7528 Google \u5B57\u4F53\u548C\u4F7F\u7528\u672C\u5730\u5B57\u4F53\u3002\u6211\u4EEC\u9010\u4E00\u8BB2\u89E3\u3002",paraId:15,tocIndex:2},{value:"\u501F\u52A9 ",paraId:16,tocIndex:4},{value:"next/font/google",paraId:16,tocIndex:4},{value:"\uFF0C\u6211\u4EEC\u4E0D\u9700\u8981\u50CF\u4EE5\u524D\u4E00\u6837\u5230 Google Fonts \u590D\u5236\u6837\u5F0F\u6587\u4EF6\u7684\u94FE\u63A5\uFF0C\u5E76\u901A\u8FC7 link \u6216\u8005 import \u5BFC\u5165\uFF0C\u800C\u662F\u53EF\u4EE5\u76F4\u63A5\u5BFC\u5165\u60F3\u8981\u4F7F\u7528\u7684\u5B57\u4F53\u3002\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:16,tocIndex:4},{value:`// app/layout.js
// 1. \u5BFC\u5165\u60F3\u8981\u4F7F\u7528\u7684\u5B57\u4F53
import { Inter } from 'next/font/google';

// 2. \u5B9E\u4F8B\u5316\u5B57\u4F53\u5BF9\u8C61\uFF0C\u8BBE\u7F6E\u4F7F\u7528\u5B50\u96C6\u7B49
const inter = Inter({
  subsets: ['latin'],
});

//  3. \u5E94\u7528\uFF0Cinter.className \u4F1A\u8FD4\u56DE\u4E00\u4E2A\u53EA\u8BFB\u7684 CSS \u7C7B\u540D\u7528\u4E8E\u52A0\u8F7D\u5B57\u4F53
export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
`,paraId:17,tocIndex:4},{value:"\u6700\u7EC8\u5B9E\u73B0\u7684\u4EE3\u7801\u4E3A\uFF1A",paraId:18,tocIndex:4},{value:"Next.js \u63A8\u8350\u4F7F\u7528",paraId:19,tocIndex:4},{value:"\u53EF\u53D8\u5B57\u4F53",paraId:19,tocIndex:4},{value:"\u6765\u83B7\u5F97\u6700\u4F73\u7684\u6027\u80FD\u548C\u7075\u6D3B\u6027\u3002\u5982\u679C\u4E0D\u80FD\u4F7F\u7528\u53EF\u53D8\u5B57\u4F53\uFF0C\u4F60\u9700\u8981\u58F0\u660E weight\uFF08\u5B57\u91CD\uFF0C\u662F\u6307\u5B57\u4F53\u7684\u7C97\u7EC6\u7A0B\u5EA6\uFF09:",paraId:19,tocIndex:4},{value:`// app/layout.js
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.className}>
      <body>{children}</body>
    </html>
  );
}
`,paraId:20,tocIndex:4},{value:"\u90A3\u4EC0\u4E48\u662F\u53EF\u53D8\u5B57\u4F53\u5462\uFF1F\u6240\u8C13\u53EF\u53D8\u5B57\u4F53\uFF0C\u5F15\u7528\u7EF4\u57FA\u767E\u79D1\u7684\u4ECB\u7ECD\uFF1A",paraId:21,tocIndex:5},{value:"OpenType \u53EF\u53D8\u5B57\u4F53\uFF08\u82F1\u8BED\uFF1AOpenType variable fonts\uFF09\u662F\u5B57\u4F53\u683C\u5F0F OpenType \u5728 1.8 \u7248\u89C4\u8303\u4E2D\u5F15\u5165\u7684\u6269\u5C55\u89C4\u8303\uFF0C\u7531\u82F9\u679C\u3001\u5FAE\u8F6F\u3001\u8C37\u6B4C\u548C Adobe \u8054\u5408\u5F00\u53D1\uFF0C\u4E8E 2016 \u5E74 9 \u6708 14 \u65E5 \u6B63\u5F0F\u53D1\u5E03\u3002\u652F\u6301\u8FD9\u4E00\u89C4\u8303\u7684\u8BA1\u7B97\u673A\u5B57\u4F53\u53EF\u4EE5\u50A8\u5B58\u8F6E\u5ED3\u53D8\u5316\u6570\u636E\uFF0C\u5728\u521D\u59CB\u5B57\u5F62\u8F6E\u5ED3\u7684\u57FA\u7840\u4E0A\u81EA\u52A8\u751F\u6210\u4E30\u5BCC\u7684\u53D8\u5316\u9020\u578B\uFF0C\u4F7F\u7528\u6237\u53EF\u4EE5\u81EA\u7531\u8C03\u6574\u6587\u5B57\u7684\u5916\u89C2\u3002",paraId:22,tocIndex:5},{value:"\u7B80\u5355\u7684\u6765\u8BF4\uFF0C\u53EF\u53D8\u5B57\u4F53\u53EF\u4EE5\u81EA\u7531\u8C03\u6574\u5B57\u5BBD\u3001\u5B57\u91CD\u3001\u503E\u659C\u7B49\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E00\u6B3E\u5B57\u4F53\u5C55\u793A\u51FA\u591A\u6B3E\u5B57\u4F53\u7684\u6548\u679C\u3002Next.js \u63A8\u8350\u4F7F\u7528\u53EF\u53D8\u5B57\u4F53\u3002",paraId:23,tocIndex:5},{value:"\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u6570\u7EC4\u6307\u5B9A\u591A\u4E2A weight\u3001\u6837\u5F0F\uFF1A",paraId:24,tocIndex:5},{value:`// app/layout.js
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
});
`,paraId:25,tocIndex:5},{value:"\u5982\u679C\u5B57\u4F53\u662F\u591A\u5355\u8BCD\uFF0C\u4F7F\u7528\u4E0B\u5212\u7EBF\uFF08",paraId:26,tocIndex:5},{value:"_",paraId:26,tocIndex:5},{value:"\uFF09\u8FDE\u63A5\uFF0C\u6BD4\u5982 Roboto Mono\uFF0C\u5BFC\u5165\u7684\u65F6\u5019\u5199\u6210 ",paraId:26,tocIndex:5},{value:"Roboto_Mono",paraId:26,tocIndex:5},{value:"\uFF1A",paraId:26,tocIndex:5},{value:`// app/layout.js
import { Ma_Shan_Zheng } from 'next/font/google';

const font = Ma_Shan_Zheng({
  subsets: ['latin'],
  weight: '400',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={font.className}>
      <body>{children}</body>
    </html>
  );
}
`,paraId:27,tocIndex:5},{value:"\u8C37\u6B4C\u7684\u5B57\u4F53\u662F\u53EF\u4EE5\u6307\u5B9A\u5B50\u96C6\uFF08",paraId:28,tocIndex:6},{value:"subset",paraId:28,tocIndex:6},{value:"\uFF09\u7684\uFF0C\u5C31\u6BD4\u5982 ",paraId:28,tocIndex:6},{value:"Roboto Mono",paraId:28,tocIndex:6},{value:" \u652F\u6301\u62C9\u4E01\u6587\u3001\u897F\u91CC\u5C14\u6587\u548C\u5E0C\u814A\u6587\u7B49\uFF0C\u6211\u4EEC\u6CA1\u6709\u5FC5\u8981\u90FD\u7528\u5230\uFF0C\u5C31\u53EF\u4EE5\u4F7F\u7528 ",paraId:28,tocIndex:6},{value:"subsets",paraId:28,tocIndex:6},{value:" \u5C5E\u6027\u6307\u5B9A\u67D0\u4E2A\u5B50\u96C6\uFF0C\u8FD8\u53EF\u4EE5\u51CF\u5C11\u5B57\u4F53\u6587\u4EF6\u7684\u5927\u5C0F\u5E76\u6539\u5584\u6027\u80FD\u3002",paraId:28,tocIndex:6},{value:"\u8FD9\u4E9B\u5B50\u96C6\u9ED8\u8BA4\u4F1A\u88AB\u9884\u52A0\u8F7D\uFF08\u901A\u8FC7 ",paraId:29,tocIndex:6},{value:"preload",paraId:29,tocIndex:6},{value:" \u5C5E\u6027\u63A7\u5236\uFF0C\u672C\u7BC7\u540E\u7EED\u4F1A\u8BB2\u5230\uFF09\uFF0C\u5982\u679C ",paraId:29,tocIndex:6},{value:"preload",paraId:29,tocIndex:6},{value:" \u4E3A ",paraId:29,tocIndex:6},{value:"true",paraId:29,tocIndex:6},{value:"\uFF0C\u4F46\u4E0D\u6307\u5B9A\u5B50\u96C6\u4F1A\u6709\u8B66\u544A\u3002\u6709\u4E9B\u5B57\u4F53\u53EA\u6709\u4E00\u4E2A\u9ED8\u8BA4\u5B50\u96C6\uFF0C\u6BD4\u5982 ",paraId:29,tocIndex:6},{value:"latin",paraId:29,tocIndex:6},{value:"\uFF0C\u4E5F\u9700\u8981\u624B\u52A8\u5236\u5B9A\u3002",paraId:29,tocIndex:6},{value:"\u62C9\u4E01\u5B57\u6BCD\uFF0C\u53C8\u79F0\u7F57\u9A6C\u5B57\u6BCD\uFF0C\u6307\u7684\u662F\u4E00\u5957\u4EE5\u53E4\u7F57\u9A6C\u5B57\u6BCD\u4E3A\u57FA\u7840\u6539\u9020\u800C\u6765\u7684\u6210\u719F\u5B57\u6BCD\u4F53\u7CFB\uFF0C\u6700\u521D\u5728\u610F\u5927\u5229\u534A\u5C9B\u548C\u897F\u6B27\u6D41\u901A\uFF0C\u5728 19 \u4E16\u7EAA\u65F6\u6269\u6563\u4E3A\u5168\u4E16\u754C\u6700\u901A\u884C\u7684\u5B57\u6BCD\uFF0C\u4EA6\u662F\u4E16\u754C\u4F7F\u7528\u4EBA\u6570\u6700\u591A\u7684\u5B57\u6BCD\uFF0C\u662F\u73B0\u4EE3\u7EDD\u5927\u591A\u6570\u6B27\u7F8E\u56FD\u5BB6\u7684\u552F\u4E00\u6807\u51C6\u5B57\u4F53\u3002\u62C9\u4E01\u5B57\u6BCD\u5C31\u662F\u6211\u4EEC\u5199\u7684 26 \u4E2A\u5B57\u6BCD\u3002\u6240\u4EE5\u5F88\u591A\u5B57\u4F53\u7684\u5B50\u96C6\u90FD\u6709 latin\u3002",paraId:30,tocIndex:6},{value:`// app/layout.js
const inter = Inter({ subsets: ['latin'] });
`,paraId:31,tocIndex:6},{value:"\u90A3\u600E\u4E48\u77E5\u9053\u4E00\u4E2A\u5B57\u4F53\u6709\u54EA\u4E9B\u5B50\u96C6\u5462\uFF1F\u4F60\u968F\u4FBF\u6307\u5B9A\u4E00\u4E2A\u5B50\u96C6\uFF0C\u5982\u679C\u4E0D\u662F\u6709\u6548\u7684\uFF0CNext.js \u4F1A\u63D0\u793A\u4F60\u6709\u54EA\u4E9B\u53EF\u7528\u5B50\u96C6\uFF1A",paraId:32,tocIndex:6},{value:"\u4F7F\u7528\u672C\u5730\u5B57\u4F53\uFF0C\u901A\u8FC7 ",paraId:33,tocIndex:7},{value:"next/font/local",paraId:33,tocIndex:7},{value:"\u5E76\u4F7F\u7528 ",paraId:33,tocIndex:7},{value:"src",paraId:33,tocIndex:7},{value:"\u58F0\u660E\u672C\u5730\u6587\u4EF6\u7684\u5730\u5740\u3002Next.js \u4F9D\u7136\u63A8\u8350\u4F7F\u7528\u53EF\u53D8\u5B57\u4F53\u3002\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:33,tocIndex:7},{value:`// app/layout.js
import localFont from 'next/font/local';

const myFont = localFont({
  src: './my-font.woff2',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={myFont.className}>
      <body>{children}</body>
    </html>
  );
}
`,paraId:34,tocIndex:7},{value:"src",paraId:35,tocIndex:7},{value:" \u4E5F\u53EF\u4EE5\u662F\u6570\u7EC4\u5F62\u5F0F\uFF0C\u6BD4\u5982\u4E00\u4E2A\u5B57\u4F53\u4F7F\u7528\u591A\u4E2A\u672C\u5730\u6587\u4EF6\uFF1A",paraId:35,tocIndex:7},{value:`onst roboto = localFont({
  src: [
    {
      path: './Roboto-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './Roboto-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: './Roboto-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: './Roboto-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
  ],
})
`,paraId:36,tocIndex:7},{value:"\u4E86\u89E3\u4E86 ",paraId:37,tocIndex:8},{value:"next/font",paraId:37,tocIndex:8},{value:" \u7684\u4E24\u79CD\u4E3B\u8981\u7528\u6CD5\u540E\uFF0C\u6211\u4EEC\u6765\u8BE6\u7EC6\u7684\u4ECB\u7ECD\u4E0B Font \u51FD\u6570\u53C2\u6570\uFF1A",paraId:37,tocIndex:8},{value:`import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  // \u5230\u5E95\u8FD8\u6709\u54EA\u4E9B\u53C2\u6570\u5462\uFF1F
});
`,paraId:38,tocIndex:8},{value:"next/font/google",paraId:39,tocIndex:8},{value:" \u548C ",paraId:39,tocIndex:8},{value:"next/font/local",paraId:39,tocIndex:8},{value:"\u7565\u6709\u4E0D\u540C\uFF0C\u8FD9\u662F\u6BD4\u8F83\u8868\uFF1A",paraId:39,tocIndex:8},{value:"Key",paraId:40,tocIndex:8},{value:"font/google",paraId:40,tocIndex:8},{value:"font/local",paraId:40,tocIndex:8},{value:"\u7C7B\u578B",paraId:40,tocIndex:8},{value:"\u5FC5\u4F20",paraId:40,tocIndex:8},{value:"src",paraId:40,tocIndex:8},{value:"\u274C",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"String or Array of Objects",paraId:40,tocIndex:8},{value:"\u662F",paraId:40,tocIndex:8},{value:"weight",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"String or Array",paraId:40,tocIndex:8},{value:"\u770B\u60C5\u51B5",paraId:40,tocIndex:8},{value:"style",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"String or Array",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"subsets",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u274C",paraId:40,tocIndex:8},{value:"Array of Strings",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"axes",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u274C",paraId:40,tocIndex:8},{value:"Array of Strings",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"display",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"String",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"preload",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"Boolean",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"fallback",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"Array of Strings",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"adjustFontFallback",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"Boolean or String",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"variable",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"String",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"declarations",paraId:40,tocIndex:8},{value:"\u274C",paraId:40,tocIndex:8},{value:"\u2705",paraId:40,tocIndex:8},{value:"Array of Objects",paraId:40,tocIndex:8},{value:"-",paraId:40,tocIndex:8},{value:"\u5728 ",paraId:41,tocIndex:9},{value:"next/font/local",paraId:41,tocIndex:9},{value:"\u4E2D\u5FC5\u4F20\uFF0C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5BF9\u8C61\u6570\u7EC4\uFF08\u7C7B\u578B\u4E3A\uFF1A",paraId:41,tocIndex:9},{value:"Array<{path: string, weight?: string, style?: string}>",paraId:41,tocIndex:9},{value:"\uFF09\uFF0C\u8DEF\u5F84\u5730\u5740\u76F8\u5F53\u4E8E\u5B57\u4F53\u52A0\u8F7D\u51FD\u6570\u8C03\u7528\u7684\u4F4D\u7F6E\u3002",paraId:41,tocIndex:9},{value:"\u6BD4\u5982 ",paraId:42,tocIndex:9},{value:"app/page.js",paraId:42,tocIndex:9},{value:"\u4E2D\u4F7F\u7528 ",paraId:42,tocIndex:9},{value:"src:'./fonts/my-font.woff2'",paraId:42,tocIndex:9},{value:"\u8C03\u7528\u5B57\u4F53\u52A0\u8F7D\u51FD\u6570\uFF0C",paraId:42,tocIndex:9},{value:"my-font.woff2",paraId:42,tocIndex:9},{value:"\u5C31\u653E\u7F6E\u5728 ",paraId:42,tocIndex:9},{value:"app/fonts/",paraId:42,tocIndex:9},{value:"\u4E0B\u3002",paraId:42,tocIndex:9},{value:"\u5B57\u91CD\uFF0C\u6982\u5FF5\u53C2\u8003 ",paraId:43,tocIndex:10},{value:"font-weight",paraId:43,tocIndex:10},{value:"\u3002\u5982\u679C\u662F\u53EF\u53D8\u5B57\u4F53\uFF0C\u5219\u975E\u5FC5\u4F20\uFF0C\u5982\u679C\u4E0D\u662F\u53EF\u53D8\u5B57\u4F53\uFF0C\u5219\u5FC5\u4F20\u3002",paraId:43,tocIndex:10},{value:"\u503C\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u5982 ",paraId:44,tocIndex:10},{value:"weight: '400'",paraId:44,tocIndex:10},{value:"\u3001",paraId:44,tocIndex:10},{value:"weight: '100 900'",paraId:44,tocIndex:10},{value:"\uFF08\u53EF\u53D8\u5B57\u4F53\uFF0C\u4ECE 100 \u5230 900 \u4E4B\u95F4\u7684\u8303\u56F4\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\u6570\u7EC4\uFF0C\u5982 ",paraId:44,tocIndex:10},{value:"weight: ['100','400','900']",paraId:44,tocIndex:10},{value:"(\u4E0D\u53EF\u53D8\u5B57\u4F53\u7684 3 \u4E2A\u53EF\u80FD\u503C)\u3002",paraId:44,tocIndex:10},{value:"\u6982\u5FF5\u53C2\u8003 ",paraId:45,tocIndex:11},{value:"font-style",paraId:45,tocIndex:11},{value:"\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:45,tocIndex:11},{value:"normal",paraId:45,tocIndex:11},{value:"\uFF0C\u5176\u4ED6\u503C\u8FD8\u6709 ",paraId:45,tocIndex:11},{value:"italic",paraId:45,tocIndex:11},{value:"\u3001",paraId:45,tocIndex:11},{value:"oblique",paraId:45,tocIndex:11},{value:"\u7B49\uFF0C\u53C2\u8003 ",paraId:45,tocIndex:11},{value:"font-style",paraId:45,tocIndex:11},{value:"\u3002\u5982\u679C\u4F7F\u7528 ",paraId:45,tocIndex:11},{value:"next/font/google",paraId:45,tocIndex:11},{value:" \u7684\u975E\u53EF\u53D8\u5B57\u4F53\uFF0C\u4E5F\u53EF\u4EE5\u4F20\u5165\u4E00\u7EC4\u6837\u5F0F\u503C\uFF0C\u5982 ",paraId:45,tocIndex:11},{value:"style: ['italic','normal']",paraId:45,tocIndex:11},{value:"\u3002",paraId:45,tocIndex:11},{value:"\u5B50\u96C6\u7684\u6982\u5FF5\u4E0A\u8282\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\uFF0C\u5C31\u4E0D\u591A\u8BF4\u4E86\u3002",paraId:46,tocIndex:12},{value:"axes\uFF08axis \u7684\u590D\u6570\u5F62\u5F0F\uFF0C\u4E2D\u6587\u7FFB\u8BD1\uFF1A\u8F74\uFF09\uFF0C\u4E0E ",paraId:47,tocIndex:13},{value:"subsets",paraId:47,tocIndex:13},{value:"\u4E00\u6837\uFF0C\u53EA\u7528\u4E8E ",paraId:47,tocIndex:13},{value:"next/font/google",paraId:47,tocIndex:13},{value:'\u4E2D\u3002\u524D\u9762\u6211\u4EEC\u8BB2\u5230\u53EF\u53D8\u5B57\u4F53\u53EF\u4EE5\u81EA\u7531\u8C03\u6574\u5B57\u5BBD\u3001\u5B57\u91CD\u3001\u503E\u659C\u7B49\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E00\u6B3E\u5B57\u4F53\u5C55\u793A\u51FA\u591A\u6B3E\u5B57\u4F53\u7684\u6548\u679C\u3002\u5B57\u5BBD\u3001\u5B57\u91CD\u3001\u503E\u659C\u7B49\u5C31\u662F\u4E00\u79CD\u201C\u53D8\u5F62\u8F74"\uFF0C\u6211\u4EEC\u4EE5 ',paraId:47,tocIndex:13},{value:"Inter \u5B57\u4F53",paraId:47,tocIndex:13},{value:"\u4E3A\u4F8B\uFF0C\u53EF\u4EE5\u770B\u5230\u5230 Inter \u5B57\u4F53\u91CC\u4E0D\u6B62\u4E00\u4E2A\u53D8\u578B\u8F74\uFF1A",paraId:47,tocIndex:13},{value:"Axes \u4E00\u5171\u6709\u4E24\u4E2A\uFF0C",paraId:48,tocIndex:13},{value:"slnt",paraId:48,tocIndex:13},{value:" \u548C ",paraId:48,tocIndex:13},{value:"wght",paraId:48,tocIndex:13},{value:" \u3002",paraId:48,tocIndex:13},{value:"slnt",paraId:48,tocIndex:13},{value:" \u662F ",paraId:48,tocIndex:13},{value:"slant",paraId:48,tocIndex:13},{value:" \u7684\u610F\u601D\uFF0C",paraId:48,tocIndex:13},{value:"wght",paraId:48,tocIndex:13},{value:" \u662F ",paraId:48,tocIndex:13},{value:"weight",paraId:48,tocIndex:13},{value:" \u7684\u610F\u601D\u3002\u5982\u679C\u6211\u4EEC\u5C06\u8FD9\u4E2A\u5B57\u4F53\u4E0B\u8F7D\u4E0B\u6765\u7136\u540E\u4E0A\u4F20\u5230 ",paraId:48,tocIndex:13},{value:"https://wakamaifondue.com/",paraId:48,tocIndex:13},{value:" \u8FD9\u4E2A\u7F51\u7AD9\u89E3\u6790\uFF0C\u6211\u4EEC\u5C31\u53EF\u4EE5\u5728\u7EBF\u770B\u5230\u4E0D\u540C\u8F74\u6570\u503C\u7684\u8C03\u6574\u5E26\u6765\u7684\u4E0D\u540C\u6548\u679C\uFF1A",paraId:48,tocIndex:13},{value:"\u201C",paraId:49,tocIndex:13},{value:"wght",paraId:49,tocIndex:13},{value:" \u6211\u61C2\u4E86\uFF0C\u662F\u5B57\u91CD\uFF0C\u5BF9\u5E94\u7684 CSS \u5C5E\u6027\u662F ",paraId:49,tocIndex:13},{value:"font-weight",paraId:49,tocIndex:13},{value:"\uFF0C\u90A3 ",paraId:49,tocIndex:13},{value:"slnt",paraId:49,tocIndex:13},{value:" \u5462\uFF1F\u201D",paraId:49,tocIndex:13},{value:"\u6211\u4EEC\u901A\u5E38\u5199 ",paraId:50,tocIndex:13},{value:"font-style",paraId:50,tocIndex:13},{value:" CSS \u5C5E\u6027\u7684\u65F6\u5019\uFF0C\u5B83\u7684\u503C\u9ED8\u8BA4\u662F ",paraId:50,tocIndex:13},{value:"normal",paraId:50,tocIndex:13},{value:"\uFF0C\u9664\u4E86 ",paraId:50,tocIndex:13},{value:"normal",paraId:50,tocIndex:13},{value:"\uFF0C\u5E38\u7528\u7684\u5C31\u662F ",paraId:50,tocIndex:13},{value:"italic",paraId:50,tocIndex:13},{value:" \u548C ",paraId:50,tocIndex:13},{value:"oblique",paraId:50,tocIndex:13},{value:"\u4E86\uFF0C",paraId:50,tocIndex:13},{value:"italic",paraId:50,tocIndex:13},{value:" \u8868\u793A\u659C\u4F53\uFF0C",paraId:50,tocIndex:13},{value:"oblique",paraId:50,tocIndex:13},{value:" \u8868\u793A\u503E\u659C\u4F53\u3002\u67E5\u770B ",paraId:50,tocIndex:13},{value:"CSS3 font-style \u89C4\u8303",paraId:50,tocIndex:13},{value:"\uFF0C\u53EF\u4EE5\u5F97\u77E5 italic \u548C oblique \u90FD\u662F\u5B57\u4F53\u7684\u4E0D\u540C\u6837\u5F0F\uFF0Citalic \u7684\u8BBE\u8BA1\u521D\u8877\u662F\u659C\u4F53\u6837\u5F0F\uFF0Coblique \u662F\u4FDD\u6301\u539F\u672C\u76F4\u7ACB\u7ED3\u6784\u7684\u659C\u4F53\uFF0C\u6211\u4EEC\u770B\u4E2A\u4F8B\u5B50\uFF1A",paraId:50,tocIndex:13},{value:"\u6211\u4EEC\u4EE5\u5B57\u4F53 ",paraId:51,tocIndex:13},{value:"f",paraId:51,tocIndex:13},{value:" \u4E3A\u4F8B\u7684\u8BDD\uFF0Citalic \u7684\u659C\u4F53\u66F4\u4E3A\u201C\u82B1\u54E8\u201D\u4E00\u70B9\uFF0C\u8FD9\u4E0D\u662F\u8BA1\u7B97\u673A\u80FD\u591F\u6A21\u62DF\u51FA\u6765\u7684\uFF0C\u662F\u9700\u8981\u4F5C\u8005\u5355\u72EC\u8BBE\u8BA1\u7684\uFF0C\u800C ",paraId:51,tocIndex:13},{value:"oblique",paraId:51,tocIndex:13},{value:" \u5219\u662F\u5728\u539F\u672C\u76F4\u7ACB\u7ED3\u6784\u4E0A\u8BA9\u5176\u503E\u659C\uFF0C\u8FD9\u4E2A\u8BA1\u7B97\u673A\u53EF\u4EE5\u6A21\u62DF\u51FA\u6765\u3002",paraId:51,tocIndex:13},{value:"\u800C\u5728\u5177\u4F53 font-style \u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u5982\u679C\u9009\u62E9 italic\uFF0C\u6CA1\u6709\u5BF9\u5E94\u7684\u53EF\u7528\u659C\u4F53\u7248\u672C\uFF0C\u4F1A\u9009\u7528\u503E\u659C\u4F53\uFF08oblique\uFF09\u66FF\u4EE3\u3002\u5982\u679C\u9009\u62E9 ",paraId:52,tocIndex:13},{value:"oblique",paraId:52,tocIndex:13},{value:"\uFF0C\u5982\u679C\u6CA1\u6709\u5BF9\u5E94\u7684\u53EF\u7528\u503E\u659C\u4F53\u7248\u672C\uFF0C\u4F1A\u9009\u7528\u659C\u4F53\uFF08italic\uFF09\u66FF\u4EE3\u3002\u5982\u679C\u90FD\u6CA1\u6709\uFF0C\u8BA1\u7B97\u673A\u4F1A\u6A21\u62DF\u51FA\u4E00\u4E2A\u503E\u659C\u4F53\uFF0C\u4F60\u53EF\u4EE5\u79F0\u4E4B\u4E3A\u4EFF oblique\u3002",paraId:52,tocIndex:13},{value:"\u56DE\u5230 ",paraId:53,tocIndex:13},{value:"oblique",paraId:53,tocIndex:13},{value:"\uFF0C",paraId:53,tocIndex:13},{value:"slnt",paraId:53,tocIndex:13},{value:" \u5C31\u662F\u5728 ",paraId:53,tocIndex:13},{value:"oblique",paraId:53,tocIndex:13},{value:" \u6837\u5F0F\u4E2D\u63A7\u5236\u503E\u659C\u7A0B\u5EA6\u7684\u8F74\uFF0C\u6240\u4EE5\u4F60\u62D6\u52A8 ",paraId:53,tocIndex:13},{value:"slnt",paraId:53,tocIndex:13},{value:" \u8FD9\u4E2A\u8F74\uFF0C\u5B57\u4F53\u4F1A\u5728\u4E0D\u65AD\u7684\u503E\u659C\u7A0B\u5EA6\u4E2D\u53D8\u5316\u3002\u4EE5\u540E\u53EF\u80FD\u8FD8\u4F1A\u9047\u5230\u5176\u4ED6\u8F74\uFF0C\u8FD9\u662F\u4E00\u4E2A\u5BF9\u5E94\u8868\uFF1A",paraId:53,tocIndex:13},{value:"\u8F74",paraId:54,tocIndex:13},{value:"\u540D\u79F0",paraId:54,tocIndex:13},{value:"\u5BF9\u5E94 CSS",paraId:54,tocIndex:13},{value:"wght",paraId:54,tocIndex:13},{value:"Weight",paraId:54,tocIndex:13},{value:"font-weight",paraId:54,tocIndex:13},{value:"wdth",paraId:54,tocIndex:13},{value:"Width",paraId:54,tocIndex:13},{value:"font-stretch",paraId:54,tocIndex:13},{value:"ital, slnt",paraId:54,tocIndex:13},{value:"Italic, Slant",paraId:54,tocIndex:13},{value:"font-style",paraId:54,tocIndex:13},{value:"opsz",paraId:54,tocIndex:13},{value:"Optical Size",paraId:54,tocIndex:13},{value:"font-optical-sizing",paraId:54,tocIndex:13},{value:"axes \u662F\u4E00\u4E2A\u5B57\u7B26\u4E32\u6570\u7EC4\u5F62\u5F0F\uFF0C\u6BD4\u5982 ",paraId:55,tocIndex:13},{value:"axes: ['slnt']",paraId:55,tocIndex:13},{value:"\uFF0C\u4F60\u53EF\u4EE5\u5728",paraId:55,tocIndex:13},{value:"Google \u53EF\u53D8\u5B57\u4F53\u9875\u9762",paraId:55,tocIndex:13},{value:"\u67E5\u8BE2\u5B57\u4F53\u7684 Axes \u6709\u54EA\u4E9B\u3002\u4E4B\u6240\u4EE5\u9700\u8981\u58F0\u660E\uFF0C\u662F\u56E0\u4E3A\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u53EA\u6709 weight \u8F74\u4F1A\u88AB\u7559\u4E0B\u4EE5\u51CF\u5C11\u5B57\u4F53\u6587\u4EF6\u5927\u5C0F\uFF0C\u5982\u679C\u9700\u8981\u5176\u4ED6\u7684\u8F74\u5C31\u9700\u8981\u5355\u72EC\u58F0\u660E\u3002",paraId:55,tocIndex:13},{value:"\u6982\u5FF5\u53C2\u8003 ",paraId:56,tocIndex:14},{value:"font-display",paraId:56,tocIndex:14},{value:"\u3002\u9ED8\u8BA4\u6211\u4EEC\u52A0\u8F7D\u5B57\u4F53\u7684\u65F6\u5019\uFF0C\u4F7F\u7528\u8BE5\u5B57\u4F53\u7684\u5730\u65B9\u4F1A\u5148\u663E\u793A\u7A7A\u767D\uFF0C\u7136\u540E\u76F4\u5230\u5B57\u4F53\u4E0B\u8F7D\u5B8C\u6210\u4E4B\u540E\u624D\u4F1A\u663E\u793A\u3002CSS font-display \u63A7\u5236\u7684\u5C31\u662F\u8FD9\u4E2A\u8FC7\u7A0B\u3002CSS font-display \u7684\u503C\u6709 ",paraId:56,tocIndex:14},{value:"'auto'",paraId:56,tocIndex:14},{value:"\u3001",paraId:56,tocIndex:14},{value:"'block'",paraId:56,tocIndex:14},{value:", ",paraId:56,tocIndex:14},{value:"'swap'",paraId:56,tocIndex:14},{value:"\u3001",paraId:56,tocIndex:14},{value:"'fallback'",paraId:56,tocIndex:14},{value:"\u3001 ",paraId:56,tocIndex:14},{value:"'optional'",paraId:56,tocIndex:14},{value:"\uFF0C\u4E0E ",paraId:56,tocIndex:14},{value:"next/font",paraId:56,tocIndex:14},{value:" \u7EC4\u4EF6\u7684 display \u7684\u503C\u4E00\u6837\u3002\u4ECB\u7ECD\u4E0B\u8FD9\u4E9B\u503C\u52A0\u8F7D\u6548\u679C\u7684\u4E0D\u540C\uFF1A",paraId:56,tocIndex:14},{value:"auto",paraId:57,tocIndex:14},{value:"\uFF1A\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u9884\u8BBE\u503C\uFF0C\u4E00\u822C\u662F block",paraId:57,tocIndex:14},{value:"block",paraId:57,tocIndex:14},{value:"\uFF1A\u5148\u663E\u793A\u7A7A\u767D\uFF083s\uFF09\uFF0C\u7136\u540E\u5207\u6362\u4E3A\u5907\u7528\u5B57\u4F53\uFF0C\u7B49\u5B57\u4F53\u52A0\u8F7D\u5B8C\u6BD5\u540E\u5207\u6362",paraId:57,tocIndex:14},{value:"swap",paraId:57,tocIndex:14},{value:"\uFF1A\u5148\u663E\u793A\u5907\u7528\u5B57\u4F53\uFF0C\u7B49\u5B57\u4F53\u52A0\u8F7D\u5B8C\u6210\u540E\u5207\u6362",paraId:57,tocIndex:14},{value:"fallback",paraId:57,tocIndex:14},{value:"\uFF1A\u5148\u663E\u793A\u7A7A\u767D\uFF08\u5927\u7EA6 100ms\uFF09\uFF0C\u7136\u540E\u5207\u6362\u4E3A\u5907\u7528\u5B57\u4F53\uFF0C\u65F6\u95F4\u5927\u6982\u662F 3s\uFF0C3s \u5185\u80FD\u52A0\u8F7D\u5B8C\u5B57\u4F53\uFF0C\u5C31\u4F7F\u7528\u5B57\u4F53\uFF0C3s \u5185\u52A0\u8F7D\u4E0D\u5B8C\uFF0C\u540E\u7EED\u63A5\u7740\u4F7F\u7528\u5907\u7528\u5B57\u4F53",paraId:57,tocIndex:14},{value:"optional",paraId:57,tocIndex:14},{value:"\uFF1A\u5148\u663E\u793A\u7A7A\u767D\uFF08\u5927\u7EA6 100ms\uFF09\uFF0C100ms \u5185\u80FD\u52A0\u8F7D\u5B8C\u5C31\u7528\uFF0C\u52A0\u8F7D\u4E0D\u5B8C\u5C31\u76F4\u63A5\u4F7F\u7528\u5907\u7528\u5B57\u4F53",paraId:57,tocIndex:14},{value:"CSS ",paraId:58,tocIndex:14},{value:"font-display",paraId:58,tocIndex:14},{value:" \u7684\u9ED8\u8BA4\u503C\u4E3A ",paraId:58,tocIndex:14},{value:"auto",paraId:58,tocIndex:14},{value:"\uFF0C",paraId:58,tocIndex:14},{value:"next/font",paraId:58,tocIndex:14},{value:" \u7EC4\u4EF6\u7684\u9ED8\u8BA4\u503C\u4E3A ",paraId:58,tocIndex:14},{value:"swap",paraId:58,tocIndex:14},{value:"\u3002",paraId:58,tocIndex:14},{value:"\u5E03\u5C14\u503C\uFF0C\u5236\u5B9A\u5B57\u4F53\u662F\u5426\u5E94\u8BE5\u88AB\u9884\u52A0\u8F7D\uFF0C\u9ED8\u8BA4\u503C\u4E3A ",paraId:59,tocIndex:15},{value:"true",paraId:59,tocIndex:15},{value:"\u3002",paraId:59,tocIndex:15},{value:"\u5B57\u4F53\u65E0\u6CD5\u88AB\u52A0\u8F7D\u65F6\u7684\u5907\u7528\u5B57\u4F53\uFF0C\u6CA1\u6709\u9ED8\u8BA4\u503C\uFF0C\u5B57\u7B26\u4E32\u6570\u7EC4\u5F62\u5F0F\uFF0C\u5982 ",paraId:60,tocIndex:16},{value:"fallback: ['system-ui', 'arial']",paraId:60,tocIndex:16},{value:"\u3002",paraId:60,tocIndex:16},{value:"\u5BF9\u4E8E ",paraId:61,tocIndex:17},{value:"next/font/google",paraId:61,tocIndex:17},{value:"\uFF0C",paraId:61,tocIndex:17},{value:"adjustFontFallback",paraId:61,tocIndex:17},{value:" \u662F\u4E00\u4E2A\u5E03\u5C14\u503C\uFF0C\u8BBE\u7F6E\u662F\u5426\u5E94\u8BE5\u4F7F\u7528\u81EA\u52A8\u5907\u7528\u5B57\u4F53\u4EE5\u51CF\u5C11\u7D2F\u79EF\u5E03\u5C40\u504F\u79FB\u3002\u9ED8\u8BA4\u503C\u4E3A ",paraId:61,tocIndex:17},{value:"true",paraId:61,tocIndex:17},{value:"\u3002",paraId:61,tocIndex:17},{value:"\u5BF9\u4E8E ",paraId:62,tocIndex:17},{value:"next/font/local",paraId:62,tocIndex:17},{value:"\uFF0C",paraId:62,tocIndex:17},{value:"adjustFontFallback",paraId:62,tocIndex:17},{value:" \u53EF\u4EE5\u662F\u5B57\u7B26\u4E32\uFF0C\u4E5F\u53EF\u4EE5\u662F ",paraId:62,tocIndex:17},{value:"false",paraId:62,tocIndex:17},{value:"\u3002\u53EF\u80FD\u7684\u503C\u6709 ",paraId:62,tocIndex:17},{value:"Arial",paraId:62,tocIndex:17},{value:"\u3001",paraId:62,tocIndex:17},{value:"Times New Roman",paraId:62,tocIndex:17},{value:"\u3001",paraId:62,tocIndex:17},{value:"false",paraId:62,tocIndex:17},{value:"\u3002\u9ED8\u8BA4\u503C\u662F ",paraId:62,tocIndex:17},{value:"Arial",paraId:62,tocIndex:17},{value:"\u3002",paraId:62,tocIndex:17},{value:"Arail",paraId:63,tocIndex:17},{value:"\u662F\u7ECF\u5178\u7684\u65E0\u886C\u7EBF\u5B57\u4F53\uFF0C",paraId:63,tocIndex:17},{value:"Times New Roman",paraId:63,tocIndex:17},{value:"\u662F\u7ECF\u5178\u7684\u886C\u7EBF\u5B57\u4F53\uFF0C\u5176\u5B9E\u5C31\u662F\u8BA9\u4F60\u9009\u7528\u886C\u7EBF\u8FD8\u662F\u65E0\u886C\u7EBF\u5B57\u4F53\u4F5C\u4E3A\u5907\u7528\u5B57\u4F53\u8FDB\u884C\u8C03\u6574\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u4E0D\u8C03\u6574\uFF0C\u90A3\u5C31\u662F ",paraId:63,tocIndex:17},{value:"false",paraId:63,tocIndex:17},{value:"\u3002\u8C37\u6B4C\u5B57\u4F53\u4E4B\u6240\u4EE5\u4E0D\u7528\u9009\uFF0C\u662F\u56E0\u4E3A Next.js \u81EA\u52A8\u5E2E\u4F60\u5224\u65AD\u4E86\u3002",paraId:63,tocIndex:17},{value:"\u8FD9\u4E2A\u5C5E\u6027\u4E0E CSS \u53D8\u91CF\u6709\u5173\uFF0C\u6211\u4EEC\u5148\u7B80\u5355\u590D\u4E60\u4E00\u4E0B CSS \u53D8\u91CF\u7684\u6982\u5FF5\u3002",paraId:64,tocIndex:18},{value:"CSS \u53D8\u91CF\u7531\u5F00\u53D1\u8005\u81EA\u5DF1\u5B9A\u4E49\uFF0C\u5148\u901A\u8FC7\u81EA\u5B9A\u4E49\u5C5E\u6027\u6807\u8BB0\u8BBE\u5B9A\u503C\uFF08\u6BD4\u5982\uFF1A ",paraId:65,tocIndex:18},{value:"--main-color: black;",paraId:65,tocIndex:18},{value:"\uFF09\uFF0C\u7136\u540E\u7531 ",paraId:65,tocIndex:18},{value:"var()",paraId:65,tocIndex:18},{value:" \u51FD\u6570\u6765\u83B7\u53D6\u503C\uFF08\u6BD4\u5982\uFF1A ",paraId:65,tocIndex:18},{value:"color: var(--main-color);",paraId:65,tocIndex:18},{value:"\uFF09\u3002",paraId:65,tocIndex:18},{value:"\u597D\u5904\u6709\u4E24\u4E2A\uFF0C\u4E00\u662F\u65B9\u4FBF\u91CD\u590D\u4F7F\u7528\uFF0C\u6BD4\u5982\u4E00\u4E2A\u8272\u503C\u53EF\u80FD\u5728\u591A\u4E2A\u5730\u65B9\u7528\u5230\uFF0C\u5982\u679C\u53D1\u751F\u53D8\u5316\uFF0C\u5C31\u9700\u8981\u5168\u5C40\u641C\u7D22\u66FF\u6362\uFF0C\u4F7F\u7528 CSS \u53D8\u91CF\uFF0C\u53EA\u7528\u66F4\u6539\u53D8\u91CF\u7684\u503C\u5373\u53EF\u3002\u4E8C\u662F\u8BED\u4E49\u5316\uFF0C\u6BD4\u5982\uFF0C",paraId:66,tocIndex:18},{value:"--main-text-color",paraId:66,tocIndex:18},{value:" \u4F1A\u6BD4 ",paraId:66,tocIndex:18},{value:"#00ff00",paraId:66,tocIndex:18},{value:" \u66F4\u6613\u7406\u89E3\u3002\u81EA\u5B9A\u4E49\u5C5E\u6027\u53D7\u7EA7\u8054\u7684\u7EA6\u675F\uFF0C\u5E76\u4ECE\u5176\u7236\u7EA7\u7EE7\u627F\u5176\u503C\u3002",paraId:66,tocIndex:18},{value:"\u6BD4\u5982\u4F60\u5728 html \u5143\u7D20\u4E0A\u58F0\u660E\u4E00\u4E2A CSS \u53D8\u91CF\uFF1A",paraId:67,tocIndex:18},{value:`html {
  --main-bg-color: brown;
}
`,paraId:68,tocIndex:18},{value:"\u9700\u8981\u7528\u5230\u8BE5\u8272\u503C\u7684\u5143\u7D20\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\uFF1A",paraId:69,tocIndex:18},{value:`p {
  background-color: var(--main-bg-color);
}
`,paraId:70,tocIndex:18},{value:"\u4F7F\u7528 ",paraId:71,tocIndex:18},{value:"next/font",paraId:71,tocIndex:18},{value:" \u5982\u4F55\u58F0\u660E\u4E00\u4E2A CSS \u53D8\u91CF\u5462\uFF1F\u4FBF\u662F\u501F\u52A9 ",paraId:71,tocIndex:18},{value:"variable",paraId:71,tocIndex:18},{value:" \u5C5E\u6027\uFF1A",paraId:71,tocIndex:18},{value:`// app/page.js
import { Inter } from 'next/font/google';
import styles from '../styles/component.module.css';

const inter = Inter({
  variable: '--font-inter',
});
`,paraId:72,tocIndex:18},{value:"\u6B64\u65F6\u6211\u4EEC\u5C31\u5EFA\u7ACB\u4E86\u4E00\u4E2A CSS \u53D8\u91CF ",paraId:73,tocIndex:18},{value:"--font-inter",paraId:73,tocIndex:18},{value:"\uFF0C\u5B83\u7684\u5177\u4F53\u503C\u5728\u6DFB\u52A0\u5230 HTML \u4E0A\u540E\u53EF\u4EE5\u67E5\u770B\u5230\uFF1A",paraId:73,tocIndex:18},{value:"\u5176\u4E2D ",paraId:74,tocIndex:18},{value:"__Inter_a64ecd",paraId:74,tocIndex:18},{value:" \u548C ",paraId:74,tocIndex:18},{value:"__Inter_Fallback_a64ecd",paraId:74,tocIndex:18},{value:" \u5BF9\u5E94\u7684\u662F Next.js \u81EA\u52A8\u751F\u6210\u7684\u81EA\u5B9A\u4E49\u5B57\u4F53\u540D\u5B57\uFF1A",paraId:74,tocIndex:18},{value:`/* latin */
@font-face {
  font-family: '__Inter_a64ecd';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2) format('woff2');
  //...
}

@font-face {
  font-family: '__Inter_Fallback_a64ecd';
  src: local("Arial");
  ascent-override: 90.20%;
  descent-override: 22.48%;
  line-gap-override: 0.00%;
  size-adjust: 107.40%
}
`,paraId:75,tocIndex:18},{value:"\u6240\u4EE5 ",paraId:76,tocIndex:18},{value:"--font-inter: '__Inter_a64ecd', '__Inter_Fallback_a64ecd';",paraId:76,tocIndex:18},{value:" \u7684\u610F\u601D\u5C31\u662F\u58F0\u660E\u4E86\u4E24\u4E2A\u81EA\u5B9A\u4E49\u5B57\u4F53\u3002",paraId:76,tocIndex:18},{value:"PS\uFF1A\u5982\u679C\u4F60\u4E0D\u60F3\u8981\u6709 ",paraId:77,tocIndex:18},{value:"__Inter_Fallback_a64ecd",paraId:77,tocIndex:18},{value:"\uFF0C\u53EA\u6709 ",paraId:77,tocIndex:18},{value:"__Inter_a64ecd",paraId:77,tocIndex:18},{value:"\uFF0C\u8BBE\u7F6E ",paraId:77,tocIndex:18},{value:"adjustFontFallback",paraId:77,tocIndex:18},{value:"\u4E3A false\u3002",paraId:77,tocIndex:18},{value:"\u73B0\u5728\u53EA\u662F\u58F0\u660E\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u901A\u8FC7 ",paraId:78,tocIndex:18},{value:"var()",paraId:78,tocIndex:18},{value:" \u51FD\u6570\u4F7F\u7528\uFF0C\u5C06\u4E24\u4E2A\u5B57\u4F53\u653E\u5230 ",paraId:78,tocIndex:18},{value:"font-family",paraId:78,tocIndex:18},{value:" \u5C5E\u6027\u4E2D\uFF1A",paraId:78,tocIndex:18},{value:`// styles/component.module.css
.text {
  font-family: var(--font-inter);
  font-weight: 200;
  font-style: italic;
}
`,paraId:79,tocIndex:18},{value:"\u6700\u540E\u4E00\u6B65\uFF0C\u5C06\u58F0\u660E\u6DFB\u52A0\u5230\u7236\u5143\u7D20\uFF0C\u5C06\u81EA\u5B9A\u4E49\u7684 text \u6837\u5F0F\u6DFB\u52A0\u5230\u5B50\u5143\u7D20\uFF0C\u8FD9\u6837\u5B50\u5143\u7D20\u624D\u53EF\u4EE5\u83B7\u53D6\u5230\u7236\u5143\u7D20\u4E2D\u58F0\u660E\u7684\u53D8\u91CF\uFF1A",paraId:80,tocIndex:18},{value:`// app/page.js
<main className={inter.variable}>
  <p className={styles.text}>Hello World</p>
</main>
`,paraId:81,tocIndex:18},{value:"\u6709\u7684\u65F6\u5019\uFF0C\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u4F1A\u76F4\u63A5\u5C06\u58F0\u660E\u6DFB\u52A0\u5230 HTML \u5143\u7D20\u4E0A\uFF0C\u8FD9\u6837\u6240\u6709\u7684\u5143\u7D20\u90FD\u53EF\u4EE5\u4F7F\u7528\u8BE5\u58F0\u660E\uFF1A",paraId:82,tocIndex:18},{value:`// layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export default function RootLayout({ children }) {
  return (
    <html className={\`\${inter.variable}\`}>
      <body>{children}</body>
    </html>
  );
}
`,paraId:83,tocIndex:18},{value:"\u4E0A\u4E00\u8282\u6211\u4EEC\u770B\u5230 Next.js \u81EA\u52A8\u751F\u6210\u7684 ",paraId:84,tocIndex:19},{value:"@font-face",paraId:84,tocIndex:19},{value:" \u7684\u5185\u5BB9\uFF1A",paraId:84,tocIndex:19},{value:`@font-face {
  font-family: '__Inter_a64ecd';
  font-style: normal;
  font-weight: 100 900;
  font-display: swap;
  src: url(/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2) format('woff2');
  //...
}
`,paraId:85,tocIndex:19},{value:"\u4F46\u5176\u5B9E",paraId:86,tocIndex:19},{value:"@font-face",paraId:86,tocIndex:19},{value:"\u4E0B\u7684\u5C5E\u6027\u8FD8\u6709\u5F88\u591A\uFF0C\u6709\u5F88\u591A\u6211\u4EEC\u5E76\u4E0D\u719F\u6089\u7684\u5982 ",paraId:86,tocIndex:19},{value:"ascent-override",paraId:86,tocIndex:19},{value:"\u3001",paraId:86,tocIndex:19},{value:"descent-override",paraId:86,tocIndex:19},{value:"\u3001",paraId:86,tocIndex:19},{value:"font-feature-settings",paraId:86,tocIndex:19},{value:"\u3001",paraId:86,tocIndex:19},{value:"font-variation-settings",paraId:86,tocIndex:19},{value:"\u3001",paraId:86,tocIndex:19},{value:"line-gap-override",paraId:86,tocIndex:19},{value:"\u3001",paraId:86,tocIndex:19},{value:"unicode-range",paraId:86,tocIndex:19},{value:"\u7B49\uFF0C\u5177\u4F53\u67E5\u770B ",paraId:86,tocIndex:19},{value:"MDN @font-face",paraId:86,tocIndex:19},{value:"\u3002",paraId:86,tocIndex:19},{value:"declarations",paraId:86,tocIndex:19},{value:" \u5C31\u662F\u4E3A\u4E86\u8BA9\u4F60\u8FDB\u4E00\u6B65\u81EA\u5B9A\u4E49 ",paraId:86,tocIndex:19},{value:"@font-face",paraId:86,tocIndex:19},{value:" \u7684\u751F\u6210\uFF0C\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:86,tocIndex:19},{value:`declarations: [{ prop: 'ascent-override', value: '90%' }];
`,paraId:87,tocIndex:19},{value:"\u6CE8\u610F\u8BE5\u5C5E\u6027\u53EA\u7528\u4E8E ",paraId:88,tocIndex:19},{value:"next/font/local",paraId:88,tocIndex:19},{value:"\u3002",paraId:88,tocIndex:19},{value:"\u76EE\u524D\uFF0C\u6211\u4EEC\u8BB2\u5230\u7684\u6DFB\u52A0\u6837\u5F0F\u7684\u65B9\u6CD5\u90FD\u662F\u901A\u8FC7 ",paraId:89,tocIndex:21},{value:"className",paraId:89,tocIndex:21},{value:"\u5C5E\u6027\uFF1A",paraId:89,tocIndex:21},{value:`import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${inter.className}\`}>
      <body>{children}</body>
    </html>
  );
}
`,paraId:90,tocIndex:21},{value:"\u5F53\u4F60\u8BFB\u53D6\u5B57\u4F53\u5BF9\u8C61\u7684 className \u5C5E\u6027\u65F6\uFF0C\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u53EA\u8BFB\u7684 CSS ",paraId:91,tocIndex:21},{value:"className",paraId:91,tocIndex:21},{value:"\uFF1A",paraId:91,tocIndex:21},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",paraId:92,tocIndex:21},{value:"inter.className",paraId:92,tocIndex:21},{value:" \u8FD4\u56DE\u7684\u503C\u4E3A ",paraId:92,tocIndex:21},{value:"__className_a64ecd",paraId:92,tocIndex:21},{value:"\uFF0CNext.js \u5BF9\u5E94\u5728\u81EA\u52A8\u751F\u6210\u7684 ",paraId:92,tocIndex:21},{value:"layout.css",paraId:92,tocIndex:21},{value:" \u4E2D\u8BBE\u7F6E\u7684\u6837\u5F0F\u4E3A\uFF1A",paraId:92,tocIndex:21},{value:`.__className_a64ecd {
  font-family: '__Inter_a64ecd', '__Inter_Fallback_a64ecd';
  font-style: normal;
}

@font-face {
  font-family: '__Inter_a64ecd';
  //...
}

@font-face {
  font-family: '__Inter_Fallback_a64ecd';
  //...
}
`,paraId:93,tocIndex:21},{value:"\u9664\u4E86 ",paraId:94,tocIndex:22},{value:"className",paraId:94,tocIndex:22},{value:"\uFF0C\u8FD8\u53EF\u4EE5\u4F7F\u7528 ",paraId:94,tocIndex:22},{value:"style",paraId:94,tocIndex:22},{value:"\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u53EA\u8BFB\u7684 ",paraId:94,tocIndex:22},{value:"style",paraId:94,tocIndex:22},{value:" \u5BF9\u8C61\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:94,tocIndex:22},{value:`// layout.js
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html style={inter.style}>
      <body>{children}</body>
    </html>
  );
}
`,paraId:95,tocIndex:22},{value:"\u751F\u6210\u7684 HTML \u4EE3\u7801\u4E3A\uFF1A",paraId:96,tocIndex:22},{value:"CSS \u53D8\u91CF\u5DF2\u7ECF\u4ECB\u7ECD\u8FC7\uFF0C\u5C31\u4E0D\u591A\u8BF4\u4E86\u3002",paraId:97,tocIndex:23},{value:"\u4F60\u53EF\u4EE5\u5BFC\u5165\u5E76\u4F7F\u7528\u591A\u79CD\u5B57\u4F53\uFF0C\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A",paraId:98,tocIndex:25},{value:"\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u521B\u5EFA\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\u7528\u4E8E\u5BFC\u51FA\u5B57\u4F53\uFF0C\u7136\u540E\u5728\u9700\u8981\u7684\u65F6\u5019\u5BFC\u5165\u5B57\u4F53\uFF0C\u5E94\u7528 ",paraId:99,tocIndex:25},{value:"className",paraId:99,tocIndex:25},{value:"\u3002\u8FD9\u53EF\u4EE5\u4FDD\u8BC1\u53EA\u6709\u5728\u4F7F\u7528\u5B83\u65F6\u5019\u624D\u9884\u52A0\u8F7D\u5B57\u4F53\u3002",paraId:99,tocIndex:25},{value:"\u5BFC\u51FA\u4E24\u4E2A\u5B57\u4F53\u5BF9\u8C61\uFF1A",paraId:100,tocIndex:25},{value:`// app/fonts.js
import { Inter, Roboto_Mono } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
});
`,paraId:101,tocIndex:25},{value:"\u5728\u9700\u8981\u7684\u65F6\u5019\u5BFC\u5165\u5E76\u4F7F\u7528\uFF1A",paraId:102,tocIndex:25},{value:`// app/layout.js
import { inter } from './fonts';

export default function Layout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div>{children}</div>
      </body>
    </html>
  );
}
`,paraId:103,tocIndex:25},{value:`// app/page.js
import { roboto_mono } from './fonts';

export default function Page() {
  return (
    <>
      <h1 className={roboto_mono.className}>My page</h1>
    </>
  );
}
`,paraId:104,tocIndex:25},{value:"\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u662F\uFF0C\u521B\u5EFA\u4E00\u4E2A CSS \u53D8\u91CF\uFF0C\u53EF\u4EE5\u8DDF\u4F60\u559C\u6B22\u7684 CSS \u65B9\u6848\u4E00\u8D77\u4F7F\u7528\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:105,tocIndex:25},{value:`// app/layout.js
import { Inter, Roboto_Mono } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  variable: '--font-roboto-mono',
  display: 'swap',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={\`\${inter.variable} \${roboto_mono.variable}\`}>
      <body>
        <h1>My App</h1>
        <div>{children}</div>
      </body>
    </html>
  );
}
`,paraId:106,tocIndex:25},{value:"\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u58F0\u660E\u4E86\u4E24\u4E2A CSS \u53D8\u91CF\uFF0C",paraId:107,tocIndex:25},{value:"--font-roboto-mono",paraId:107,tocIndex:25},{value:" \u548C ",paraId:107,tocIndex:25},{value:"--font-inter",paraId:107,tocIndex:25},{value:"\uFF0C\u5F53\u4F60\u9700\u8981\u4E3A\u5B57\u4F53\u6DFB\u52A0\u6837\u5F0F\u7684\u65F6\u5019\uFF0C\u76F4\u63A5\u4F7F\u7528\u8BE5\u53D8\u91CF\u5373\u53EF\uFF1A",paraId:107,tocIndex:25},{value:`// app/global.css
html {
  font-family: var(--font-inter);
}

h1 {
  font-family: var(--font-roboto-mono);
}
`,paraId:108,tocIndex:25},{value:"next/font",paraId:109,tocIndex:26},{value:" \u53EF\u4EE5\u901A\u8FC7 CSS \u53D8\u91CF\u7684\u5F62\u5F0F\u4E0E Tailwind CSS \u642D\u914D\u4F7F\u7528\u3002",paraId:109,tocIndex:26},{value:"\u9996\u5148\u901A\u8FC7 ",paraId:110,tocIndex:26},{value:"variable",paraId:110,tocIndex:26},{value:"\u58F0\u660E CSS \u53D8\u91CF\uFF1A",paraId:110,tocIndex:26},{value:`// app/layout.js
import './globals.css';
import { Ma_Shan_Zheng, Roboto_Mono } from 'next/font/google';

const ma_shan_zheng = Ma_Shan_Zheng({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
  variable: '--font-ma-shan-zheng',
});

const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={\`\${ma_shan_zheng.variable} \${roboto_mono.variable}\`}
    >
      <body>{children}</body>
    </html>
  );
}
`,paraId:111,tocIndex:26},{value:`// globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
`,paraId:112,tocIndex:26},{value:"\u7136\u540E\uFF0C\u5C06 CSS \u53D8\u91CF\u6DFB\u52A0\u5230 Tailwind CSS \u914D\u7F6E\u4E2D\uFF1A",paraId:113,tocIndex:26},{value:`// tailwind.config.js
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        ma: ['var(--font-ma-shan-zheng)'],
        mono: ['var(--font-roboto-mono)'],
      },
    },
  },
  plugins: [],
};
`,paraId:114,tocIndex:26},{value:"\u6700\u540E\uFF0C\u4EE5 ",paraId:115,tocIndex:26},{value:"font-",paraId:115,tocIndex:26},{value:" \u4F5C\u4E3A\u524D\u7F00\u5982\uFF08",paraId:115,tocIndex:26},{value:"font-ma",paraId:115,tocIndex:26},{value:"\u3001",paraId:115,tocIndex:26},{value:"font-mono",paraId:115,tocIndex:26},{value:"\uFF09\u4E3A\u5143\u7D20\u6DFB\u52A0\u6837\u5F0F\uFF1A",paraId:115,tocIndex:26},{value:`// page.js
export default function Page() {
  return <h1 className="font-ma underline">\u4F60\u597D\uFF0C\u4E16\u754C\uFF01Hello World!</h1>;
}
`,paraId:116,tocIndex:26},{value:"\u6BCF\u6B21\u8C03\u7528\u5B57\u4F53\u51FD\u6570\u7684\u65F6\u5019\uFF0C\u8BE5\u5B57\u4F53\u90FD\u4F1A\u4F5C\u4E3A\u4E00\u4E2A\u5B9E\u4F8B\u88AB\u6258\u7BA1\uFF0C\u6240\u4EE5\u5982\u679C\u591A\u4E2A\u5730\u65B9\u4F7F\u7528\u540C\u4E00\u4E2A\u5B57\u4F53\uFF0C\u8FD8\u662F\u5E94\u8BE5\u5728\u4E00\u4E2A\u5730\u65B9\u52A0\u8F7D\uFF0C\u7136\u540E\u6309\u9700\u5BFC\u5165\u3002\u8FD9\u5C31\u662F\u5B57\u4F53\u5B9A\u4E49\u6587\u4EF6\u7684\u4F5C\u7528\u3002",paraId:117,tocIndex:27},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5728\u6839\u76EE\u5F55\u4E0B\u7684 ",paraId:118,tocIndex:27},{value:"styles",paraId:118,tocIndex:27},{value:" \u6587\u4EF6\u5939\u4E0B\u521B\u5EFA\u4E00\u4E2A ",paraId:118,tocIndex:27},{value:"fonts.ts",paraId:118,tocIndex:27},{value:"\u6587\u4EF6\uFF0C\u7136\u540E\u58F0\u660E\u5B57\u4F53\u5B9A\u4E49\uFF1A",paraId:118,tocIndex:27},{value:`// styles/fonts.js
import { Inter, Lora, Source_Sans_3 } from 'next/font/google';
import localFont from 'next/font/local';

const inter = Inter();
const lora = Lora();

const sourceCodePro400 = Source_Sans_3({ weight: '400' });
const sourceCodePro700 = Source_Sans_3({ weight: '700' });

const greatVibes = localFont({ src: './GreatVibes-Regular.ttf' });

export { inter, lora, sourceCodePro400, sourceCodePro700, greatVibes };
`,paraId:119,tocIndex:27},{value:"\u73B0\u5728\u4F60\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u4F7F\u7528\u8FD9\u4E9B\u5B9A\u4E49\uFF1A",paraId:120,tocIndex:27},{value:`// app/page.js
import { inter, lora, sourceCodePro700, greatVibes } from '../styles/fonts';

export default function Page() {
  return (
    <div>
      <p className={inter.className}>Hello world using Inter font</p>
      <p style={lora.style}>Hello world using Lora font</p>
      <p className={sourceCodePro700.className}>
        Hello world using Source_Sans_3 font with weight 700
      </p>
      <p className={greatVibes.className}>My title in Great Vibes font</p>
    </div>
  );
}
`,paraId:121,tocIndex:27},{value:"\u4E3A\u4E86\u66F4\u8F7B\u677E\u7684\u8BBF\u95EE\u5B57\u4F53\u5B9A\u4E49\u6587\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u5728 ",paraId:122,tocIndex:27},{value:"tsconfig.json",paraId:122,tocIndex:27},{value:" \u6216 ",paraId:122,tocIndex:27},{value:"jsconfig.json",paraId:122,tocIndex:27},{value:" \u4E2D\u5B9A\u4E49\u8DEF\u5F84\u522B\u540D\uFF1A",paraId:122,tocIndex:27},{value:`// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/fonts": ["./styles/fonts"]
    }
  }
}
`,paraId:123,tocIndex:27},{value:"\u73B0\u5728\u4F60\u53EF\u4EE5\u8FD9\u6837\u4F7F\u7528\uFF1A",paraId:124,tocIndex:27},{value:`// app/about/page.js
import { greatVibes, sourceCodePro400 } from '@/fonts';
`,paraId:125,tocIndex:27},{value:"Components: Font",paraId:126,tocIndex:28},{value:"Optimizing: Fonts",paraId:126,tocIndex:28},{value:"https://web.dev/articles/css-size-adjust?hl=zh-cn",paraId:126,tocIndex:28},{value:"https://developers.google.com/fonts/docs/getting_started?hl=zh-cn#specifying_script_subsets",paraId:126,tocIndex:28},{value:"https://learn.microsoft.com/en-us/typography/opentype/spec/dvaraxisreg",paraId:126,tocIndex:28},{value:"\u53EF\u53D8\u5B57\u4F53\uFF08Variable Fonts\uFF09\u5C1D\u9C9C",paraId:126,tocIndex:28},{value:"https://fonts.google.com/knowledge/glossary/oblique",paraId:126,tocIndex:28}]}}]);
