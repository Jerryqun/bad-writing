"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1622],{51622:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u4E2D\u95F4\u4EF6\uFF08Middleware\uFF09\uFF0C\u4E00\u4E2A\u542C\u8D77\u6765\u5C31\u5F88\u9AD8\u7EA7\u3001\u5F88\u5F3A\u5927\u7684\u529F\u80FD\u3002\u5B9E\u9645\u4E0A\u4E5F\u786E\u5B9E\u5982\u6B64\u3002\u4F7F\u7528\u4E2D\u95F4\u4EF6\uFF0C\u4F60\u53EF\u4EE5\u62E6\u622A\u5E76\u63A7\u5236\u5E94\u7528\u91CC\u7684\u6240\u6709\u8BF7\u6C42\u548C\u54CD\u5E94\u3002",paraId:0,tocIndex:0},{value:"\u6BD4\u5982\u4F60\u53EF\u4EE5\u57FA\u4E8E\u4F20\u5165\u7684\u8BF7\u6C42\uFF0C\u91CD\u5199\u3001\u91CD\u5B9A\u5411\u3001\u4FEE\u6539\u8BF7\u6C42\u6216\u54CD\u5E94\u5934\u3001\u751A\u81F3\u76F4\u63A5\u54CD\u5E94\u5185\u5BB9\u3002\u4E00\u4E2A\u6BD4\u8F83\u5E38\u89C1\u7684\u5E94\u7528\u5C31\u662F\u9274\u6743\uFF0C\u5728\u6253\u5F00\u9875\u9762\u6E32\u67D3\u5177\u4F53\u7684\u5185\u5BB9\u524D\uFF0C\u5148\u5224\u65AD\u7528\u6237\u662F\u5426\u767B\u5F55\uFF0C\u5982\u679C\u672A\u767B\u5F55\uFF0C\u5219\u8DF3\u8F6C\u5230\u767B\u5F55\u9875\u9762\u3002",paraId:1,tocIndex:0},{value:"\u5199\u4E2D\u95F4\u4EF6\uFF0C\u4F60\u9700\u8981\u5728\u9879\u76EE\u7684\u6839\u76EE\u5F55\u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A ",paraId:2,tocIndex:1},{value:"middleware.js",paraId:2,tocIndex:1},{value:"\u7684\u6587\u4EF6\uFF1A",paraId:2,tocIndex:1},{value:`// middleware.js
import { NextResponse } from 'next/server';

// \u4E2D\u95F4\u4EF6\u53EF\u4EE5\u662F async \u51FD\u6570\uFF0C\u5982\u679C\u4F7F\u7528\u4E86 await
export function middleware(request) {
  return NextResponse.redirect(new URL('/home', request.url));
}

// \u8BBE\u7F6E\u5339\u914D\u8DEF\u5F84
export const config = {
  matcher: '/about/:path*',
};
`,paraId:3,tocIndex:1},{value:"\u6CE8\u610F\uFF1A\u8FD9\u91CC\u8BF4\u7684\u9879\u76EE\u6839\u76EE\u5F55\u6307\u7684\u662F\u548C ",paraId:4,tocIndex:1},{value:"pages",paraId:4,tocIndex:1},{value:" \u6216 ",paraId:4,tocIndex:1},{value:"app",paraId:4,tocIndex:1},{value:" \u540C\u7EA7\u3002\u4F46\u5982\u679C\u9879\u76EE\u7528\u4E86 ",paraId:4,tocIndex:1},{value:"src",paraId:4,tocIndex:1},{value:"\u76EE\u5F55\uFF0C\u5219\u653E\u5728 ",paraId:4,tocIndex:1},{value:"src",paraId:4,tocIndex:1},{value:"\u4E0B\u3002",paraId:4,tocIndex:1},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7 ",paraId:5,tocIndex:1},{value:"config.matcher",paraId:5,tocIndex:1},{value:"\u8BBE\u7F6E\u4E2D\u95F4\u4EF6\u751F\u6548\u7684\u8DEF\u5F84\uFF0C\u5728 ",paraId:5,tocIndex:1},{value:"middleware",paraId:5,tocIndex:1},{value:"\u51FD\u6570\u4E2D\u8BBE\u7F6E\u4E2D\u95F4\u4EF6\u7684\u903B\u8F91\uFF0C\u4F5C\u7528\u662F\u5C06 ",paraId:5,tocIndex:1},{value:"/about",paraId:5,tocIndex:1},{value:"\u3001",paraId:5,tocIndex:1},{value:"/about/xxx",paraId:5,tocIndex:1},{value:"\u3001",paraId:5,tocIndex:1},{value:"/about/xxx/xxx",paraId:5,tocIndex:1},{value:" \u8FD9\u6837\u7684\u7684\u5730\u5740\u7EDF\u4E00\u91CD\u5B9A\u5411\u5230 ",paraId:5,tocIndex:1},{value:"/home",paraId:5,tocIndex:1},{value:"\u4E86\u89E3\u4E86\u5927\u81F4\u7528\u9014\uFF0C\u73B0\u5728\u8BA9\u6211\u4EEC\u770B\u4E0B\u5177\u4F53\u7528\u6CD5\u3002",paraId:6,tocIndex:2},{value:"\u5148\u8BF4\u8BF4\u5982\u4F55\u8BBE\u7F6E\u5339\u914D\u8DEF\u5F84\u3002\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u6307\u5B9A\u4E2D\u95F4\u4EF6\u5339\u914D\u7684\u8DEF\u5F84\u3002",paraId:7,tocIndex:2},{value:"\u7B2C\u4E00\u79CD\u662F\u4F7F\u7528 ",paraId:8,tocIndex:3},{value:"matcher",paraId:8,tocIndex:3},{value:"\u914D\u7F6E\u9879\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:8,tocIndex:3},{value:`export const config = {
  matcher: '/about/:path*',
};
`,paraId:9,tocIndex:3},{value:"matcher",paraId:10,tocIndex:3},{value:" \u4E0D\u4EC5\u652F\u6301\u5B57\u7B26\u4E32\u5F62\u5F0F\uFF0C\u4E5F\u652F\u6301\u6570\u7EC4\u5F62\u5F0F\uFF0C\u7528\u4E8E\u5339\u914D\u591A\u4E2A\u8DEF\u5F84\uFF1A",paraId:10,tocIndex:3},{value:`export const config = {
  matcher: ['/about/:path*', '/dashboard/:path*'],
};
`,paraId:11,tocIndex:3},{value:"\u521D\u6B21\u63A5\u89E6\u7684\u540C\u5B66\u53EF\u80FD\u4F1A\u5BF9 ",paraId:12,tocIndex:3},{value:":path*",paraId:12,tocIndex:3},{value:" \u8FD9\u6837\u7684\u7528\u6CD5\u611F\u5230\u5947\u602A\uFF0C\u8FD9\u4E2A\u7528\u6CD5\u6765\u81EA\u4E8E ",paraId:12,tocIndex:3},{value:"path-to-regexp",paraId:12,tocIndex:3},{value:" \u8FD9\u4E2A\u5E93\uFF0C\u5B83\u7684\u4F5C\u7528\u5C31\u662F\u5C06 ",paraId:12,tocIndex:3},{value:"/user/:name",paraId:12,tocIndex:3},{value:"\u8FD9\u6837\u7684\u8DEF\u5F84\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u6B63\u5219\u8868\u8FBE\u5F0F\u3002Next.js \u80CC\u540E\u7528\u7684\u6B63\u662F path-to-regexp \u89E3\u6790\u5730\u5740\u3002\u4F5C\u4E3A\u4E00\u4E2A\u6709\u7740\u5341\u5E74\u5386\u53F2\u7684\u5F00\u6E90\u5E93\uFF0Cpath-to-regexp \u8FD8\u88AB express\u3001react-router\u3001vue-router \u7B49\u591A\u4E2A\u77E5\u540D\u5E93\u5F15\u7528\u3002\u6240\u4EE5\u4E0D\u59A8\u8BA9\u6211\u4EEC\u591A\u591A\u4E86\u89E3\u4E00\u4E0B\u3002",paraId:12,tocIndex:3},{value:"path-to-regexp \u901A\u8FC7\u5728\u53C2\u6570\u540D\u524D\u52A0\u4E00\u4E2A\u5192\u53F7\u6765\u5B9A\u4E49",paraId:13,tocIndex:3},{value:"\u547D\u540D\u53C2\u6570",paraId:13,tocIndex:3},{value:"\uFF08Named Parameters\uFF09\uFF0Cmatcher \u652F\u6301\u547D\u540D\u53C2\u6570\uFF0C\u6BD4\u5982 ",paraId:13,tocIndex:3},{value:"/about/:path",paraId:13,tocIndex:3},{value:"\u5339\u914D ",paraId:13,tocIndex:3},{value:"/about/a",paraId:13,tocIndex:3},{value:"\u548C ",paraId:13,tocIndex:3},{value:"/about/b",paraId:13,tocIndex:3},{value:"\uFF0C\u4F46\u662F\u4E0D\u5339\u914D ",paraId:13,tocIndex:3},{value:"/about/a/c",paraId:13,tocIndex:3},{value:"\u6CE8\uFF1A\u5B9E\u9645\u6D4B\u8BD5\u7684\u65F6\u5019\uFF0C",paraId:14,tocIndex:3},{value:"/about/:path",paraId:14,tocIndex:3},{value:" \u5E76\u4E0D\u80FD\u5339\u914D ",paraId:14,tocIndex:3},{value:"/about/xxx",paraId:14,tocIndex:3},{value:"\uFF0C\u53EA\u80FD\u5339\u914D ",paraId:14,tocIndex:3},{value:"/about",paraId:14,tocIndex:3},{value:"\uFF0C\u5982\u679C\u8981\u5339\u914D ",paraId:14,tocIndex:3},{value:"/about/xxx",paraId:14,tocIndex:3},{value:"\uFF0C\u9700\u8981\u5199\u6210 ",paraId:14,tocIndex:3},{value:"/about/:path/",paraId:14,tocIndex:3},{value:"\u547D\u540D\u53C2\u6570\u7684\u9ED8\u8BA4\u5339\u914D\u903B\u8F91\u662F ",paraId:15,tocIndex:3},{value:"[^/]+",paraId:15,tocIndex:3},{value:"\uFF0C\u4F46\u4F60\u4E5F\u53EF\u4EE5\u5728\u547D\u540D\u53C2\u6570\u540E\u52A0\u4E00\u4E2A\u62EC\u53F7\uFF0C\u5728\u5176\u4E2D\u81EA\u5B9A\u4E49\u547D\u540D\u53C2\u6570\u7684\u5339\u914D\u903B\u8F91\uFF0C\u6BD4\u5982 ",paraId:15,tocIndex:3},{value:"/about/icon-:foo(\\\\d+).png",paraId:15,tocIndex:3},{value:" \u5339\u914D ",paraId:15,tocIndex:3},{value:"/about/icon-1.png",paraId:15,tocIndex:3},{value:"\uFF0C\u4F46\u4E0D\u5339\u914D ",paraId:15,tocIndex:3},{value:"/about/icon-a.png",paraId:15,tocIndex:3},{value:"\u3002",paraId:15,tocIndex:3},{value:"\u547D\u540D\u53C2\u6570\u53EF\u4EE5\u4F7F\u7528\u4FEE\u9970\u7B26\uFF0C\u5176\u4E2D ",paraId:16,tocIndex:3},{value:"*",paraId:16,tocIndex:3},{value:" \u8868\u793A 0 \u4E2A\u6216 1 \u4E2A\u6216\u591A\u4E2A\uFF0C",paraId:16,tocIndex:3},{value:"?",paraId:16,tocIndex:3},{value:"\u8868\u793A 0 \u4E2A\u6216 1 \u4E2A\uFF0C",paraId:16,tocIndex:3},{value:"+",paraId:16,tocIndex:3},{value:"\u8868\u793A 1 \u4E2A\u6216\u591A\u4E2A\uFF0C\u6BD4\u5982",paraId:16,tocIndex:3},{value:"/about/:path*",paraId:17,tocIndex:3},{value:" \u5339\u914D ",paraId:17,tocIndex:3},{value:"/about",paraId:17,tocIndex:3},{value:"\u3001",paraId:17,tocIndex:3},{value:"/about/xxx",paraId:17,tocIndex:3},{value:"\u3001",paraId:17,tocIndex:3},{value:"/about/xxx/xxx",paraId:17,tocIndex:3},{value:"/about/:path?",paraId:17,tocIndex:3},{value:" \u5339\u914D ",paraId:17,tocIndex:3},{value:"/about",paraId:17,tocIndex:3},{value:"\u3001",paraId:17,tocIndex:3},{value:"/about/xxx",paraId:17,tocIndex:3},{value:"/about/:path+",paraId:17,tocIndex:3},{value:" \u5339\u914D ",paraId:17,tocIndex:3},{value:"/about/xxx",paraId:17,tocIndex:3},{value:"\u3001",paraId:17,tocIndex:3},{value:"/about/xxx/xxx",paraId:17,tocIndex:3},{value:"\u4E5F\u53EF\u4EE5\u5728\u5706\u62EC\u53F7\u4E2D\u4F7F\u7528\u6807\u51C6\u7684\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u6BD4\u5982",paraId:18,tocIndex:3},{value:"/about/(.*)",paraId:18,tocIndex:3},{value:" \u7B49\u540C\u4E8E ",paraId:18,tocIndex:3},{value:"/about/:path*",paraId:18,tocIndex:3},{value:"\uFF0C\u6BD4\u5982 ",paraId:18,tocIndex:3},{value:"/(about|settings)",paraId:18,tocIndex:3},{value:" \u5339\u914D ",paraId:18,tocIndex:3},{value:"/about",paraId:18,tocIndex:3},{value:" \u548C ",paraId:18,tocIndex:3},{value:"/settings",paraId:18,tocIndex:3},{value:"\uFF0C\u4E0D\u5339\u914D\u5176\u4ED6\u7684\u5730\u5740\u3002",paraId:18,tocIndex:3},{value:"/user-(ya|yu)",paraId:18,tocIndex:3},{value:"\u5339\u914D ",paraId:18,tocIndex:3},{value:"/user-ya",paraId:18,tocIndex:3},{value:"\u548C ",paraId:18,tocIndex:3},{value:"/user-yu",paraId:18,tocIndex:3},{value:"\u3002",paraId:18,tocIndex:3},{value:"\u4E00\u4E2A\u8F83\u4E3A\u590D\u6742\u548C\u5E38\u7528\u7684\u4F8B\u5B50\u662F\uFF1A",paraId:19,tocIndex:3},{value:`export const config = {
  matcher: [
    /*
     * \u5339\u914D\u6240\u6709\u7684\u8DEF\u5F84\u9664\u4E86\u4EE5\u8FD9\u4E9B\u4F5C\u4E3A\u5F00\u5934\u7684\uFF1A
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
`,paraId:20,tocIndex:3},{value:"\u9664\u6B64\u4E4B\u5916\uFF0C\u8FD8\u8981\u6CE8\u610F\uFF0C\u8DEF\u5F84\u5FC5\u987B\u4EE5 ",paraId:21,tocIndex:3},{value:"/",paraId:21,tocIndex:3},{value:"\u5F00\u5934\u3002",paraId:21,tocIndex:3},{value:"matcher",paraId:21,tocIndex:3},{value:" \u7684\u503C\u5FC5\u987B\u662F\u5E38\u91CF\uFF0C\u8FD9\u6837\u53EF\u4EE5\u5728\u6784\u5EFA\u7684\u65F6\u5019\u88AB\u9759\u6001\u5206\u6790\u3002\u4F7F\u7528\u53D8\u91CF\u4E4B\u7C7B\u7684\u52A8\u6001\u503C\u4F1A\u88AB\u5FFD\u7565\u3002",paraId:21,tocIndex:3},{value:"matcher \u7684\u5F3A\u5927\u53EF\u8FDC\u4E0D\u6B62\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0Cmatcher \u8FD8\u53EF\u4EE5\u5224\u65AD\u67E5\u8BE2\u53C2\u6570\u3001cookies\u3001headers\uFF1A",paraId:22,tocIndex:3},{value:`export const config = {
  matcher: [
    {
      source: '/api/*',
      has: [
        { type: 'header', key: 'Authorization', value: 'Bearer Token' },
        { type: 'query', key: 'userId', value: '123' },
      ],
      missing: [{ type: 'cookie', key: 'session', value: 'active' }],
    },
  ],
};
`,paraId:23,tocIndex:3},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u4E0D\u4EC5\u5339\u914D\u4E86\u8DEF\u7531\u5730\u5740\uFF0C\u8FD8\u8981\u6C42 header \u7684 Authorization \u5FC5\u987B\u662F Bearer Token\uFF0C\u67E5\u8BE2\u53C2\u6570\u7684 userId \u4E3A 123\uFF0C\u4E14 cookie \u91CC\u7684 session \u503C\u4E0D\u662F active\u3002",paraId:24,tocIndex:3},{value:"\u6CE8\uFF1A\u5173\u4E8E has \u548C missing\uFF0C\u53EF\u4EE5\u53C2\u8003 ",paraId:25,tocIndex:3},{value:" API \u7BC7 | next.config.js\uFF08\u4E0A\uFF09",paraId:25,tocIndex:3},{value:"\u3002",paraId:25,tocIndex:3},{value:"\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u662F\u4F7F\u7528\u6761\u4EF6\u8BED\u53E5\uFF1A",paraId:26,tocIndex:4},{value:`import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/about')) {
    return NextResponse.rewrite(new URL('/about-2', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.rewrite(new URL('/dashboard/user', request.url));
  }
}
`,paraId:27,tocIndex:4},{value:"matcher \u5F88\u5F3A\u5927\uFF0C\u53EF\u6709\u7684\u65F6\u5019\u4E0D\u4F1A\u5199\u771F\u7684\u8BA9\u4EBA\u5934\u75BC\uFF0C\u90A3\u5C31\u5728\u5177\u4F53\u7684\u903B\u8F91\u91CC\u5199\uFF01",paraId:28,tocIndex:4},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u770B\u770B\u4E2D\u95F4\u4EF6\u5177\u4F53\u8BE5\u600E\u4E48\u5199\uFF1A",paraId:29,tocIndex:5},{value:`export function middleware(request) {
  // \u5982\u4F55\u8BFB\u53D6\u548C\u8BBE\u7F6E cookies \uFF1F
  // \u5982\u4F55\u8BFB\u53D6 headers \uFF1F
  // \u5982\u4F55\u76F4\u63A5\u54CD\u5E94?
}
`,paraId:30,tocIndex:5},{value:"\u7528\u6CD5\u8DDF\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E00\u81F4\uFF0C\u4F7F\u7528 NextRequest \u548C NextResponse \u5FEB\u6377\u8BFB\u53D6\u548C\u8BBE\u7F6E cookies\u3002",paraId:31,tocIndex:6},{value:"\u5BF9\u4E8E\u4F20\u5165\u7684\u8BF7\u6C42\uFF0CNextRequest \u63D0\u4F9B\u4E86 ",paraId:32,tocIndex:6},{value:"get",paraId:32,tocIndex:6},{value:"\u3001",paraId:32,tocIndex:6},{value:"getAll",paraId:32,tocIndex:6},{value:"\u3001",paraId:32,tocIndex:6},{value:"set",paraId:32,tocIndex:6},{value:"\u548C ",paraId:32,tocIndex:6},{value:"delete",paraId:32,tocIndex:6},{value:"\u65B9\u6CD5\u5904\u7406 cookies\uFF0C\u4F60\u4E5F\u53EF\u4EE5\u7528 ",paraId:32,tocIndex:6},{value:"has",paraId:32,tocIndex:6},{value:"\u68C0\u67E5 cookie \u6216\u8005 ",paraId:32,tocIndex:6},{value:"clear",paraId:32,tocIndex:6},{value:"\u5220\u9664\u6240\u6709\u7684 cookies\u3002",paraId:32,tocIndex:6},{value:"\u5BF9\u4E8E\u8FD4\u56DE\u7684\u54CD\u5E94\uFF0CNextResponse \u540C\u6837\u63D0\u4F9B\u4E86 ",paraId:33,tocIndex:6},{value:"get",paraId:33,tocIndex:6},{value:"\u3001",paraId:33,tocIndex:6},{value:"getAll",paraId:33,tocIndex:6},{value:"\u3001",paraId:33,tocIndex:6},{value:"set",paraId:33,tocIndex:6},{value:"\u548C ",paraId:33,tocIndex:6},{value:"delete",paraId:33,tocIndex:6},{value:"\u65B9\u6CD5\u5904\u7406 cookies\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:33,tocIndex:6},{value:`import { NextResponse } from 'next/server';

export function middleware(request) {
  // \u5047\u8BBE\u4F20\u5165\u7684\u8BF7\u6C42 header \u91CC "Cookie:nextjs=fast"
  let cookie = request.cookies.get('nextjs');
  console.log(cookie); // => { name: 'nextjs', value: 'fast', Path: '/' }
  const allCookies = request.cookies.getAll();
  console.log(allCookies); // => [{ name: 'nextjs', value: 'fast' }]

  request.cookies.has('nextjs'); // => true
  request.cookies.delete('nextjs');
  request.cookies.has('nextjs'); // => false

  // \u8BBE\u7F6E cookies
  const response = NextResponse.next();
  response.cookies.set('vercel', 'fast');
  response.cookies.set({
    name: 'vercel',
    value: 'fast',
    path: '/',
  });
  cookie = response.cookies.get('vercel');
  console.log(cookie); // => { name: 'vercel', value: 'fast', Path: '/' }

  // \u54CD\u5E94 header \u4E3A \`Set-Cookie:vercel=fast;path=/test\`
  return response;
}
`,paraId:34,tocIndex:6},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u8C03\u7528\u4E86 ",paraId:35,tocIndex:6},{value:"NextResponse.next()",paraId:35,tocIndex:6},{value:" \u8FD9\u4E2A\u65B9\u6CD5\uFF0C\u8FD9\u4E2A\u65B9\u6CD5\u4E13\u95E8\u7528\u5728 middleware \u4E2D\uFF0C\u6BD5\u7ADF\u6211\u4EEC\u5199\u7684\u662F\u4E2D\u95F4\u4EF6\uFF0C\u4E2D\u95F4\u4EF6\u8FDB\u884C\u4E00\u5C42\u5904\u7406\u540E\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u8FD8\u8981\u5728\u4E0B\u4E00\u4E2A\u903B\u8F91\u4E2D\u7EE7\u7EED\u4F7F\u7528\uFF0C\u6B64\u65F6\u5C31\u9700\u8981\u8FD4\u56DE ",paraId:35,tocIndex:6},{value:"NextResponse.next()",paraId:35,tocIndex:6},{value:"\u3002\u5F53\u7136\u5982\u679C\u4E0D\u9700\u8981\u518D\u8D70\u4E0B\u4E00\u4E2A\u903B\u8F91\u4E86\uFF0C\u53EF\u4EE5\u76F4\u63A5\u8FD4\u56DE\u4E00\u4E2A Response \u5B9E\u4F8B\uFF0C\u63A5\u4E0B\u6765\u7684\u4F8B\u5B50\u4E2D\u4F1A\u6F14\u793A\u5176\u5199\u6CD5\u3002",paraId:35,tocIndex:6},{value:"\u7528\u6CD5\u8DDF\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E00\u81F4\uFF0C\u4F7F\u7528 NextRequest \u548C NextResponse \u5FEB\u6377\u8BFB\u53D6\u548C\u8BBE\u7F6E headers\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:36,tocIndex:7},{value:`// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  //  clone \u8BF7\u6C42\u6807\u5934
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-hello-from-middleware1', 'hello');

  // \u4F60\u4E5F\u53EF\u4EE5\u5728 NextResponse.rewrite \u4E2D\u8BBE\u7F6E\u8BF7\u6C42\u6807\u5934
  const response = NextResponse.next({
    request: {
      // \u8BBE\u7F6E\u65B0\u8BF7\u6C42\u6807\u5934
      headers: requestHeaders,
    },
  });

  // \u8BBE\u7F6E\u65B0\u54CD\u5E94\u6807\u5934 \`x-hello-from-middleware2\`
  response.headers.set('x-hello-from-middleware2', 'hello');
  return response;
}
`,paraId:37,tocIndex:7},{value:"\u8FD9\u4E2A\u4F8B\u5B50\u6BD4\u8F83\u7279\u6B8A\u7684\u5730\u65B9\u5728\u4E8E\u8C03\u7528 NextResponse.next \u7684\u65F6\u5019\u4F20\u5165\u4E86\u4E00\u4E2A\u5BF9\u8C61\u7528\u4E8E\u8F6C\u53D1 headers\uFF0C\u6839\u636E ",paraId:38,tocIndex:7},{value:"NextResponse",paraId:38,tocIndex:7},{value:" \u7684\u5B98\u65B9\u6587\u6863\uFF0C\u76EE\u524D\u4E5F\u5C31\u8FD9\u4E00\u79CD\u7528\u6CD5\u3002",paraId:38,tocIndex:7},{value:"\u8FD9\u662F\u4E00\u4E2A\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u4F1A\u7528\u5230\u7684\u8BBE\u7F6E CORS \u7684\u4F8B\u5B50\uFF1A",paraId:39,tocIndex:8},{value:`import { NextResponse } from 'next/server';

const allowedOrigins = ['https://acme.com', 'https://my-app.org'];

const corsOptions = {
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
};

export function middleware(request) {
  // Check the origin from the request
  const origin = request.headers.get('origin') ?? '';
  const isAllowedOrigin = allowedOrigins.includes(origin);

  // Handle preflighted requests
  const isPreflight = request.method === 'OPTIONS';

  if (isPreflight) {
    const preflightHeaders = {
      ...(isAllowedOrigin && { 'Access-Control-Allow-Origin': origin }),
      ...corsOptions,
    };
    return NextResponse.json({}, { headers: preflightHeaders });
  }

  // Handle simple requests
  const response = NextResponse.next();

  if (isAllowedOrigin) {
    response.headers.set('Access-Control-Allow-Origin', origin);
  }

  Object.entries(corsOptions).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: '/api/:path*',
};
`,paraId:40,tocIndex:8},{value:"\u7528\u6CD5\u8DDF\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E00\u81F4\uFF0C\u4F7F\u7528 NextResponse \u8BBE\u7F6E\u8FD4\u56DE\u7684 Response\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:41,tocIndex:9},{value:`import { NextResponse } from 'next/server';
import { isAuthenticated } from '@lib/auth';

export const config = {
  matcher: '/api/:function*',
};

export function middleware(request) {
  // \u9274\u6743\u5224\u65AD
  if (!isAuthenticated(request)) {
    // \u8FD4\u56DE\u9519\u8BEF\u4FE1\u606F
    return new NextResponse(
      JSON.stringify({ success: false, message: 'authentication failed' }),
      { status: 401, headers: { 'content-type': 'application/json' } },
    );
  }
}
`,paraId:42,tocIndex:9},{value:"\u5728 Next.js \u4E2D\uFF0C\u6709\u5F88\u591A\u5730\u65B9\u90FD\u53EF\u4EE5\u8BBE\u7F6E\u8DEF\u7531\u7684\u54CD\u5E94\uFF0C\u6BD4\u5982 next.config.js \u4E2D\u53EF\u4EE5\u8BBE\u7F6E\uFF0C\u4E2D\u95F4\u4EF6\u4E2D\u53EF\u4EE5\u8BBE\u7F6E\uFF0C\u5177\u4F53\u7684\u8DEF\u7531\u4E2D\u53EF\u4EE5\u8BBE\u7F6E\uFF0C\u6240\u4EE5\u8981\u6CE8\u610F\u5B83\u4EEC\u7684\u6267\u884C\u987A\u5E8F\uFF1A",paraId:43,tocIndex:10},{value:"headers",paraId:44,tocIndex:10},{value:"\uFF08",paraId:44,tocIndex:10},{value:"next.config.js",paraId:44,tocIndex:10},{value:"\uFF09",paraId:44,tocIndex:10},{value:"redirects",paraId:44,tocIndex:10},{value:"\uFF08",paraId:44,tocIndex:10},{value:"next.config.js",paraId:44,tocIndex:10},{value:"\uFF09",paraId:44,tocIndex:10},{value:"\u4E2D\u95F4\u4EF6 (",paraId:44,tocIndex:10},{value:"rewrites",paraId:44,tocIndex:10},{value:", ",paraId:44,tocIndex:10},{value:"redirects",paraId:44,tocIndex:10},{value:" \u7B49)",paraId:44,tocIndex:10},{value:"beforeFiles",paraId:44,tocIndex:10},{value:" (",paraId:44,tocIndex:10},{value:"next.config.js",paraId:44,tocIndex:10},{value:"\u4E2D\u7684",paraId:44,tocIndex:10},{value:"rewrites",paraId:44,tocIndex:10},{value:")",paraId:44,tocIndex:10},{value:"\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531 (",paraId:44,tocIndex:10},{value:"public/",paraId:44,tocIndex:10},{value:", ",paraId:44,tocIndex:10},{value:"_next/static/",paraId:44,tocIndex:10},{value:", ",paraId:44,tocIndex:10},{value:"pages/",paraId:44,tocIndex:10},{value:", ",paraId:44,tocIndex:10},{value:"app/",paraId:44,tocIndex:10},{value:" \u7B49)",paraId:44,tocIndex:10},{value:"afterFiles",paraId:44,tocIndex:10},{value:" (",paraId:44,tocIndex:10},{value:"next.config.js",paraId:44,tocIndex:10},{value:"\u4E2D\u7684",paraId:44,tocIndex:10},{value:"rewrites",paraId:44,tocIndex:10},{value:")",paraId:44,tocIndex:10},{value:"\u52A8\u6001\u8DEF\u7531 (",paraId:44,tocIndex:10},{value:"/blog/[slug]",paraId:44,tocIndex:10},{value:")",paraId:44,tocIndex:10},{value:"fallback",paraId:44,tocIndex:10},{value:"\u4E2D\u7684 (",paraId:44,tocIndex:10},{value:"next.config.js",paraId:44,tocIndex:10},{value:"\u4E2D\u7684",paraId:44,tocIndex:10},{value:"rewrites",paraId:44,tocIndex:10},{value:")",paraId:44,tocIndex:10},{value:"\u6CE8\uFF1A ",paraId:45,tocIndex:10},{value:"beforeFiles",paraId:45,tocIndex:10},{value:" \u987E\u540D\u601D\u4E49\uFF0C\u5728\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531\u4E4B\u524D\uFF0C",paraId:45,tocIndex:10},{value:"afterFiles",paraId:45,tocIndex:10},{value:"\u987E\u540D\u601D\u4E49\uFF0C\u5728\u57FA\u4E8E\u6587\u4EF6\u7CFB\u7EDF\u7684\u8DEF\u7531\u4E4B\u540E\uFF0C",paraId:45,tocIndex:10},{value:"fallback",paraId:45,tocIndex:10},{value:"\u987E\u540D\u601D\u4E49\uFF0C\u57AB\u5E95\u6267\u884C\u3002",paraId:45,tocIndex:10},{value:"\u6267\u884C\u987A\u5E8F\u5177\u4F53\u662F\u4EC0\u4E48\u4F5C\u7528\u5462\uFF1F\u5176\u5B9E\u6211\u4EEC\u5199\u4E2A demo \u6D4B\u8BD5\u4E00\u4E0B\u5C31\u77E5\u9053\u4E86\uFF0C\u6587\u4EF6\u76EE\u5F55\u5982\u4E0B\uFF1A",paraId:46,tocIndex:10},{value:`next-app  
\u251C\u2500 app  
\u2502 \u251C\u2500 blog  
\u2502 \u2502 \u251C\u2500 [id]  
\u2502 \u2502 \u2502 \u2514\u2500 page.js  
\u2502 \u2502 \u251C\u2500 yayu  
\u2502 \u2502 \u2502 \u2514\u2500 page.js  
\u2502 \u2502 \u2514\u2500 page.js  
\u251C\u2500 middleware.js  
\u2514\u2500 next.config.js
`,paraId:47,tocIndex:10},{value:"next.config.js",paraId:48,tocIndex:10},{value:" \u4E2D\u58F0\u660E ",paraId:48,tocIndex:10},{value:"redirects",paraId:48,tocIndex:10},{value:"\u3001",paraId:48,tocIndex:10},{value:"rewrites",paraId:48,tocIndex:10},{value:"\uFF1A",paraId:48,tocIndex:10},{value:`module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/yayu',
        destination: '/blog/yayu_redirects',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: '/blog/yayu',
          destination: '/blog/yayu_beforeFiles',
        },
      ],
      afterFiles: [
        {
          source: '/blog/yayu',
          destination: '/blog/yayu_afterFiles',
        },
      ],
      fallback: [
        {
          source: '/blog/yayu',
          destination: \`/blog/yayu_fallback\`,
        },
      ],
    };
  },
};
`,paraId:49,tocIndex:10},{value:"middleware.js",paraId:50,tocIndex:10},{value:" \u7684\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:50,tocIndex:10},{value:`import { NextResponse } from 'next/server';

export function middleware(request) {
  return NextResponse.redirect(new URL('/blog/yayu_middleware', request.url));
}

export const config = {
  matcher: '/blog/yayu',
};
`,paraId:51,tocIndex:10},{value:"app/blog/page.js",paraId:52,tocIndex:10},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:52,tocIndex:10},{value:`import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/blog/yayu_page');
}
`,paraId:53,tocIndex:10},{value:"app/blog/[id]/page.js",paraId:54,tocIndex:10},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:54,tocIndex:10},{value:`import { redirect } from 'next/navigation';

export default function Page() {
  redirect('/blog/yayu_slug');
}
`,paraId:55,tocIndex:10},{value:"\u73B0\u5728\u6211\u4EEC\u5728\u591A\u4E2A\u5730\u65B9\u90FD\u914D\u7F6E\u4E86\u91CD\u5B9A\u5411\u548C\u91CD\u5199\uFF0C\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C\u73B0\u5728\u8BBF\u95EE ",paraId:56,tocIndex:10},{value:"/blog/yayu",paraId:56,tocIndex:10},{value:"\uFF0C\u6700\u7EC8\u6D4F\u89C8\u5668\u5730\u5740\u680F\u91CC\u5448\u73B0\u7684 URL \u662F\u4EC0\u4E48\uFF1F",paraId:56,tocIndex:10},{value:"\u7B54\u6848\u662F ",paraId:57,tocIndex:10},{value:"/blog/yayu_slug",paraId:57,tocIndex:10},{value:"\u3002\u6309\u7167\u6267\u884C\u987A\u5E8F\uFF0C\u8BBF\u95EE ",paraId:57,tocIndex:10},{value:"/blog/yayu",paraId:57,tocIndex:10},{value:"\uFF0C\u5148\u6839\u636E ",paraId:57,tocIndex:10},{value:"next.config.js",paraId:57,tocIndex:10},{value:" \u7684 ",paraId:57,tocIndex:10},{value:"redirects",paraId:57,tocIndex:10},{value:"\u91CD\u5B9A\u5411\u5230 ",paraId:57,tocIndex:10},{value:"/blog/yayu_redirects",paraId:57,tocIndex:10},{value:"\uFF0C\u4E8E\u662F\u8D70\u5230\u52A8\u6001\u8DEF\u7531\u7684\u903B\u8F91\uFF0C\u91CD\u5B9A\u5411\u5230 ",paraId:57,tocIndex:10},{value:"/blog/yayu_slug",paraId:57,tocIndex:10},{value:"\u3002",paraId:57,tocIndex:10},{value:"Next.js v13.1 \u4E3A\u4E2D\u95F4\u4EF6\u589E\u52A0\u4E86\u4E24\u4E2A\u65B0\u7684\u914D\u7F6E\u9879\uFF0C",paraId:58,tocIndex:11},{value:"skipMiddlewareUrlNormalize",paraId:58,tocIndex:11},{value:"\u548C",paraId:58,tocIndex:11},{value:"skipTrailingSlashRedirect",paraId:58,tocIndex:11},{value:"\uFF0C\u7528\u6765\u5904\u7406\u4E00\u4E9B\u7279\u6B8A\u7684\u60C5\u51B5\u3002",paraId:58,tocIndex:11},{value:"\u9996\u5148\u89E3\u91CA\u4E00\u4E0B \xA0",paraId:59,tocIndex:12},{value:"Trailing Slashes",paraId:59,tocIndex:12},{value:"\uFF0C\u4E2D\u6587\u7FFB\u8BD1\u4E3A\u201C\u5C3E\u90E8\u659C\u6760\u201D\uFF0C\u5B83\u6307\u7684\u662F\u653E\u5728 URL \u672B\u5C3E\u7684\u6B63\u659C\u6760\uFF0C\u4E3E\u4E2A\u4F8B\u5B50: ",paraId:59,tocIndex:12},{value:"www.yauyjs.com/users/",paraId:59,tocIndex:12},{value:"\u5730\u5740\u4E2D\u6700\u540E\u4E00\u4E2A\u659C\u6760\u5C31\u662F\u5C3E\u90E8\u659C\u6760\u3002",paraId:59,tocIndex:12},{value:"\u4E00\u822C\u6765\u8BF4\uFF0C\u5C3E\u90E8\u659C\u6760\u7528\u4E8E\u533A\u5206\u76EE\u5F55\u8FD8\u662F\u6587\u4EF6\uFF0C\u6709\u5C3E\u90E8\u659C\u6760\uFF0C\u8868\u793A\u76EE\u5F55\uFF0C\u6CA1\u6709\u5C3E\u90E8\u659C\u6760\uFF0C\u8868\u793A\u6587\u4EF6\u3002\u5F53\u7136\u8FD9\u53EA\u662F\u4E00\u4E2A\u5EFA\u8BAE\uFF0C\u5177\u4F53\u4F60\u60F3\u600E\u4E48\u5904\u7406\u90FD\u884C\u3002",paraId:60,tocIndex:12},{value:"\u4ECE URL \u7684\u89D2\u5EA6\u6765\u770B\uFF0C",paraId:61,tocIndex:12},{value:"www.yauyjs.com/users/",paraId:61,tocIndex:12},{value:"\u548C ",paraId:61,tocIndex:12},{value:"www.yayujs.com/users",paraId:61,tocIndex:12},{value:"\u662F\u4E24\u4E2A\u5730\u5740\uFF0C\u4E0D\u8FC7\u901A\u5E38\u6211\u4EEC\u90FD\u4F1A\u505A\u91CD\u5B9A\u5411\u3002\u6BD4\u5982\u4F60\u5728 Next.js \u4E2D\u8BBF\u95EE ",paraId:61,tocIndex:12},{value:"/about/",paraId:61,tocIndex:12},{value:"\u5B83\u4F1A\u81EA\u52A8\u91CD\u5B9A\u5411\u5230 ",paraId:61,tocIndex:12},{value:"/about",paraId:61,tocIndex:12},{value:"\uFF0CURL \u4E5F\u4F1A\u53D8\u4E3A ",paraId:61,tocIndex:12},{value:"/about",paraId:61,tocIndex:12},{value:"\u3002",paraId:61,tocIndex:12},{value:"skipTrailingSlashRedirect",paraId:62,tocIndex:12},{value:" \u987E\u540D\u601D\u4E49\uFF0C\u8DF3\u8FC7\u5C3E\u90E8\u659C\u6760\u91CD\u5B9A\u5411\uFF0C\u5F53\u4F60\u8BBE\u7F6E ",paraId:62,tocIndex:12},{value:"skipTrailingSlashRedirect",paraId:62,tocIndex:12},{value:"\u4E3A true \u540E\uFF0C\u5047\u8BBE\u518D\u6B21\u8BBF\u95EE ",paraId:62,tocIndex:12},{value:"/about/",paraId:62,tocIndex:12},{value:"\uFF0CURL \u4F9D\u7136\u4F1A\u662F ",paraId:62,tocIndex:12},{value:"/about/",paraId:62,tocIndex:12},{value:"\u3002",paraId:62,tocIndex:12},{value:"\u4F7F\u7528 ",paraId:63,tocIndex:12},{value:"skipTrailingSlashRedirect",paraId:63,tocIndex:12},{value:"\u7684\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:63,tocIndex:12},{value:`// next.config.js
module.exports = {
  skipTrailingSlashRedirect: true,
};
`,paraId:64,tocIndex:12},{value:`// middleware.js
const legacyPrefixes = ['/docs', '/blog'];

export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  if (legacyPrefixes.some((prefix) => pathname.startsWith(prefix))) {
    return NextResponse.next();
  }

  // \u5E94\u7528\u5C3E\u90E8\u659C\u6760
  if (
    !pathname.endsWith('/') &&
    !pathname.match(/((?!\\.well-known(?:\\/.*)?)(?:[^/]+\\/)*[^/]+\\.\\w+)/)
  ) {
    req.nextUrl.pathname += '/';
    return NextResponse.redirect(req.nextUrl);
  }
}
`,paraId:65,tocIndex:12},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u8FD9\u91CC\u6211\u4EEC\u5B9E\u73B0\u4E86\u9664 ",paraId:66,tocIndex:12},{value:"/docs",paraId:66,tocIndex:12},{value:" \u548C ",paraId:66,tocIndex:12},{value:"/blog",paraId:66,tocIndex:12},{value:" \u4F5C\u4E3A\u524D\u7F00\u7684\u8DEF\u7531\u4E4B\u5916\uFF0C\u5176\u4ED6\u8DEF\u7531\u90FD\u81EA\u52A8\u6DFB\u52A0\u4E0A\u5C3E\u90E8\u659C\u6760\u3002",paraId:66,tocIndex:12},{value:"\u5173\u4E8E ",paraId:67,tocIndex:13},{value:"skipMiddlewareUrlNormalize",paraId:67,tocIndex:13},{value:"\uFF0C\u8BA9\u6211\u4EEC\u76F4\u63A5\u770B\u4E00\u4E2A\u4F8B\u5B50\uFF1A",paraId:67,tocIndex:13},{value:`// next.config.js
module.exports = {
  skipMiddlewareUrlNormalize: true,
};
`,paraId:68,tocIndex:13},{value:`// middleware.js
export default async function middleware(req) {
  const { pathname } = req.nextUrl;

  // GET /_next/data/build-id/hello.json

  console.log(pathname);
  // \u5982\u679C\u8BBE\u7F6E\u4E3A true\uFF0C\u503C\u4E3A\uFF1A/_next/data/build-id/hello.json
  // \u5982\u679C\u6CA1\u6709\u914D\u7F6E\uFF0C\u503C\u4E3A\uFF1A /hello
}
`,paraId:69,tocIndex:13},{value:"\u8BBE\u7F6E ",paraId:70,tocIndex:13},{value:"skipMiddlewareUrlNormalize",paraId:70,tocIndex:13},{value:" \u4E3A true \u540E\uFF0C\u53EF\u4EE5\u83B7\u53D6\u8DEF\u7531\u539F\u59CB\u7684\u5730\u5740\uFF0C\u5E38\u7528\u4E8E\u56FD\u9645\u5316\u573A\u666F\u4E2D\u3002",paraId:70,tocIndex:13},{value:"\u4F7F\u7528 Middleware \u7684\u65F6\u5019\u8FD8\u8981\u6CE8\u610F\u4E00\u70B9\uFF0C\u90A3\u5C31\u662F\u76EE\u524D Middleware \u53EA\u652F\u6301 Edge runtime\uFF0C\u5E76\u4E0D\u652F\u6301 Node.js runtime\u3002\u8FD9\u610F\u5473\u7740\u5199 Middleware \u7684\u65F6\u5019\uFF0C\u5C3D\u53EF\u80FD\u4F7F\u7528 Web API\uFF0C\u907F\u514D\u4F7F\u7528 Node.js API",paraId:71,tocIndex:14},{value:"\u9700\u6C42\uFF1A\u5982\u679C\u5927\u5BB6\u8C03\u7528\u8FC7 openai \u7684\u63A5\u53E3\uFF0C\u5E38\u7528\u7684 ChatGPT v3.5 \u63A5\u53E3\u4F1A\u6709\u6BCF\u5206\u949F\u6700\u591A 3 \u6B21\u7684\u8C03\u7528\u9650\u5236\u3002\u73B0\u5728\u4F60\u4E5F\u5F00\u53D1\u4E86\u4E00\u4E2A ",paraId:72,tocIndex:15},{value:"/api/chat",paraId:72,tocIndex:15},{value:" \u7684\u63A5\u53E3\uFF0C\u4E3A\u4E86\u9632\u6B62\u88AB\u6076\u610F\u8C03\u7528\uFF0C\u9650\u5236\u6BCF\u5206\u949F\u6700\u591A\u8C03\u7528 3 \u6B21\u3002\u4F7F\u7528 Next.js \u8BE5\u600E\u4E48\u5B9E\u73B0\u5462\uFF1F",paraId:72,tocIndex:15},{value:"\u8BA9\u6211\u4EEC\u6765\u5B9E\u73B0\u5427\uFF01\u4E3A\u6B64\u6211\u4EEC\u9700\u8981\u5B89\u88C5\u4E00\u4E2A\u4F9D\u8D56\u5305 ",paraId:73,tocIndex:15},{value:"limiter",paraId:73,tocIndex:15},{value:"\uFF1A",paraId:73,tocIndex:15},{value:`npm install limiter
`,paraId:74,tocIndex:15},{value:"\u65B0\u5EFA ",paraId:75,tocIndex:15},{value:"app/api/chat/route.js",paraId:75,tocIndex:15},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:75,tocIndex:15},{value:`import { NextResponse } from 'next/server';
import { RateLimiter } from 'limiter';
const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'min',
  fireImmediately: true,
});

export async function GET() {
  const remainingRequests = await limiter.removeTokens(1);
  if (remainingRequests < 0) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Too Many Requests' }),
      { status: 429, headers: { 'content-type': 'application/json' } },
    );
  }

  return NextResponse.json({ data: '\u4F60\u597D\uFF01' });
}
`,paraId:76,tocIndex:15},{value:"\u6B64\u65F6\u6210\u529F\u8FD0\u884C\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A",paraId:77,tocIndex:15},{value:"\u6211\u4EEC\u5C06\u63A7\u5236\u6B21\u6570\u7684\u903B\u8F91\u5199\u5728\u4E86\u5177\u4F53\u7684\u8DEF\u7531\u91CC\uFF0C\u73B0\u5728\u8BA9\u6211\u4EEC\u5C1D\u8BD5\u5199\u5728\u4E2D\u95F4\u4EF6\u91CC\uFF1A",paraId:78,tocIndex:15},{value:`import { NextResponse } from 'next/server';
import { RateLimiter } from 'limiter';
const limiter = new RateLimiter({
  tokensPerInterval: 3,
  interval: 'min',
  fireImmediately: true,
});

export async function middleware(request) {
  const remainingRequests = await limiter.removeTokens(1);
  if (remainingRequests < 0) {
    return new NextResponse(
      JSON.stringify({ success: false, message: 'Too Many Requests' }),
      { status: 429, headers: { 'content-type': 'application/json' } },
    );
  }

  return NextResponse.next();
}

// \u8BBE\u7F6E\u5339\u914D\u8DEF\u5F84
export const config = {
  matcher: '/api/chat',
};
`,paraId:79,tocIndex:15},{value:"\u7136\u800C\u6B64\u65F6\u4F60\u4F1A\u53D1\u73B0\uFF1A",paraId:80,tocIndex:15},{value:"\u4EE3\u7801\u662F\u62A5\u9519\u7684\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F",paraId:81,tocIndex:15},{value:"\u8FD9\u5C31\u662F\u521D\u5B66\u8005\u5199\u4E2D\u95F4\u4EF6\u5E38\u72AF\u7684\u4E00\u4E2A\u9519\u8BEF\u3002\u4E4B\u6240\u4EE5\u51FA\u9519\uFF0C\u662F\u56E0\u4E3A limiter \u5176\u5B9E\u662F\u4E00\u4E2A\u7528\u5728 node.js \u73AF\u5883\u7684\u5E93\uFF0C\u7136\u800C\u76EE\u524D Middleware \u53EA\u652F\u6301 Edge runtime\uFF0C\u5E76\u4E0D\u652F\u6301 Node.js runtime\uFF0C\u6240\u4EE5\u624D\u4F1A\u62A5\u9519\u3002\u4E3E\u8FD9\u4E2A\u9879\u76EE\u4F5C\u4E3A\u4F8B\u5B50\uFF0C\u53EA\u662F\u4E3A\u4E86\u63D0\u9192\u5927\u5BB6\u6CE8\u610F\u8FD0\u884C\u65F6\u95EE\u9898\u3002",paraId:82,tocIndex:15},{value:"\u5982\u679C\u9879\u76EE\u6BD4\u8F83\u7B80\u5355\uFF0C\u4E2D\u95F4\u4EF6\u7684\u4EE3\u7801\u901A\u5E38\u4E0D\u4F1A\u5199\u5F88\u591A\uFF0C\u5C06\u6240\u6709\u4EE3\u7801\u5199\u5728\u4E00\u8D77\u5012\u4E5F\u4E0D\u662F\u4EC0\u4E48\u592A\u5927\u95EE\u9898\u3002\u53EF\u5F53\u9879\u76EE\u590D\u6742\u4E86\uFF0C\u6BD4\u5982\u5728\u4E2D\u95F4\u4EF6\u91CC\u53C8\u8981\u9274\u6743\u3001\u53C8\u8981\u63A7\u5236\u8BF7\u6C42\u3001\u53C8\u8981\u56FD\u9645\u5316\u7B49\u7B49\uFF0C\u5404\u79CD\u903B\u8F91\u5199\u5728\u4E00\u8D77\uFF0C\u4E2D\u95F4\u4EF6\u5F88\u5FEB\u5C31\u53D8\u5F97\u96BE\u4EE5\u7EF4\u62A4\u3002\u5982\u679C\u6211\u4EEC\u8981\u5728\u4E2D\u95F4\u4EF6\u91CC\u5B9E\u73B0\u591A\u4E2A\u9700\u6C42\uFF0C\u8BE5\u600E\u4E48\u5408\u7406\u7684\u62C6\u5206\u4EE3\u7801\u5462\uFF1F",paraId:83,tocIndex:16},{value:"\u4E00\u79CD\u7B80\u5355\u7684\u65B9\u5F0F\u662F\uFF1A",paraId:84,tocIndex:16},{value:`import { NextResponse } from 'next/server';

async function middleware1(request) {
  console.log(request.url);
  return NextResponse.next();
}

async function middleware2(request) {
  console.log(request.url);
  return NextResponse.next();
}

export async function middleware(request) {
  await middleware1(request);
  await middleware2(request);
}

export const config = {
  matcher: '/api/:path*',
};
`,paraId:85,tocIndex:16},{value:"\u4E00\u79CD\u66F4\u4E3A\u4F18\u96C5\u7684\u65B9\u5F0F\u662F\u501F\u52A9\u9AD8\u9636\u51FD\u6570\uFF1A",paraId:86,tocIndex:16},{value:`import { NextResponse } from 'next/server';

function withMiddleware1(middleware) {
  return async (request) => {
    console.log('middleware1 ' + request.url);
    return middleware(request);
  };
}

function withMiddleware2(middleware) {
  return async (request) => {
    console.log('middleware2 ' + request.url);
    return middleware(request);
  };
}

async function middleware(request) {
  console.log('middleware ' + request.url);
  return NextResponse.next();
}

export default withMiddleware2(withMiddleware1(middleware));

export const config = {
  matcher: '/api/:path*',
};
`,paraId:87,tocIndex:16},{value:"\u8BF7\u95EE\u6B64\u65F6\u7684\u6267\u884C\u987A\u5E8F\u662F\u4EC0\u4E48\uFF1F\u8BD5\u7740\u6253\u5370\u4E00\u4E0B\u5427\u3002\u662F\u4E0D\u662F\u611F\u89C9\u56DE\u5230\u4E86\u5B66 redux \u7684\u65F6\u5019\uFF1F",paraId:88,tocIndex:16},{value:"\u4F46\u8FD9\u6837\u5199\u8D77\u6765\u8FD8\u662F\u6709\u70B9\u9EBB\u70E6\uFF0C\u8BA9\u6211\u4EEC\u5199\u4E00\u4E2A\u5DE5\u5177\u51FD\u6570\u5E2E\u52A9\u6211\u4EEC\uFF1A",paraId:89,tocIndex:16},{value:`import { NextResponse } from 'next/server';

function chain(functions, index = 0) {
  const current = functions[index];
  if (current) {
    const next = chain(functions, index + 1);
    return current(next);
  }
  return () => NextResponse.next();
}

function withMiddleware1(middleware) {
  return async (request) => {
    console.log('middleware1 ' + request.url);
    return middleware(request);
  };
}

function withMiddleware2(middleware) {
  return async (request) => {
    console.log('middleware2 ' + request.url);
    return middleware(request);
  };
}

export default chain([withMiddleware1, withMiddleware2]);

export const config = {
  matcher: '/api/:path*',
};
`,paraId:90,tocIndex:16},{value:"\u8BF7\u95EE\u6B64\u65F6\u7684\u6267\u884C\u987A\u5E8F\u662F\u4EC0\u4E48\uFF1F\u7B54\u6848\u662F\u6309\u6570\u7EC4\u7684\u987A\u5E8F\uFF0Cmiddleware1\u3001middleware2\u3002",paraId:91,tocIndex:16},{value:"\u5982\u679C\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C\u5B9E\u9645\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u4EE3\u7801\u7C7B\u4F3C\u4E8E\uFF1A",paraId:92,tocIndex:16},{value:`import { chain } from '@/lib/utils';
import { withHeaders } from '@/middlewares/withHeaders';
import { withLogging } from '@/middlewares/withLogging';

export default chain([withLogging, withHeaders]);

export const config = {
  matcher: '/api/:path*',
};
`,paraId:93,tocIndex:16},{value:"\u5177\u4F53\u5199\u4E2D\u95F4\u4EF6\u65F6\uFF1A",paraId:94,tocIndex:16},{value:`export const withHeaders = (next) => {
  return async (request) => {
    // ...
    return next(request);
  };
};
`,paraId:95,tocIndex:16},{value:"https://nextjs.org/docs/app/building-your-application/routing/middleware",paraId:96,tocIndex:17},{value:"https://github.com/pillarjs/path-to-regexp",paraId:96,tocIndex:17},{value:"https://nextjs.org/docs/messages/invalid-route-source",paraId:96,tocIndex:17},{value:"https://www.youtube.com/watch?v=fmFYH_Xu3d0&ab_channel=HamedBahram",paraId:96,tocIndex:17}]}}]);
