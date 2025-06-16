"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9763],{79763:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u662F\u6307\u4F7F\u7528 Web ",paraId:0,tocIndex:0},{value:"Request",paraId:0,tocIndex:0},{value:" \u548C ",paraId:0,tocIndex:0},{value:"Response",paraId:0,tocIndex:0},{value:" API \u5BF9\u4E8E\u7ED9\u5B9A\u7684\u8DEF\u7531\u81EA\u5B9A\u4E49\u5904\u7406\u903B\u8F91\u3002",paraId:0,tocIndex:0},{value:"\u7B80\u5355\u7684\u6765\u8BF4\uFF0C\u524D\u540E\u7AEF\u5206\u79BB\u67B6\u6784\u4E2D\uFF0C\u5BA2\u6237\u7AEF\u4E0E\u670D\u52A1\u7AEF\u4E4B\u95F4\u901A\u8FC7 API \u63A5\u53E3\u6765\u4EA4\u4E92\u3002\u8FD9\u4E2A\u201CAPI \u63A5\u53E3\u201D\u5728 Next.js \u4E2D\u6709\u4E2A\u66F4\u4E3A\u6B63\u5F0F\u7684\u79F0\u547C\uFF0C\u5C31\u662F\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u3002",paraId:1,tocIndex:0},{value:"\u672C\u7BC7\u6211\u4EEC\u4F1A\u8BB2\u89E3\u5982\u4F55\u5B9A\u4E49\u4E00\u4E2A\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4EE5\u53CA\u5199\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u65F6\u5E38\u9047\u5230\u7684\u4E00\u4E9B\u95EE\u9898\u3002",paraId:2,tocIndex:0},{value:"\u5199\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\uFF0C\u4F60\u9700\u8981\u5B9A\u4E49\u4E00\u4E2A\u540D\u4E3A ",paraId:3,tocIndex:1},{value:"route.js",paraId:3,tocIndex:1},{value:"\u7684\u7279\u6B8A\u6587\u4EF6\u3002\uFF08\u6CE8\u610F\u662F ",paraId:3,tocIndex:1},{value:"route",paraId:3,tocIndex:1},{value:" \u4E0D\u662F ",paraId:3,tocIndex:1},{value:"router",paraId:3,tocIndex:1},{value:"\uFF09",paraId:3,tocIndex:1},{value:"\u8BE5\u6587\u4EF6\u5FC5\u987B\u5728 ",paraId:4,tocIndex:1},{value:"app",paraId:4,tocIndex:1},{value:"\u76EE\u5F55\u4E0B\uFF0C\u53EF\u4EE5\u5728 ",paraId:4,tocIndex:1},{value:"app",paraId:4,tocIndex:1},{value:" \u5D4C\u5957\u7684\u6587\u4EF6\u5939\u4E0B\uFF0C\u4F46\u662F\u8981\u6CE8\u610F ",paraId:4,tocIndex:1},{value:"page.js",paraId:4,tocIndex:1},{value:"\u548C ",paraId:4,tocIndex:1},{value:"route.js",paraId:4,tocIndex:1},{value:"\u4E0D\u80FD\u5728\u540C\u4E00\u5C42\u7EA7\u540C\u65F6\u5B58\u5728\u3002",paraId:4,tocIndex:1},{value:"\u60F3\u60F3\u4E5F\u80FD\u7406\u89E3\uFF0C",paraId:5,tocIndex:1},{value:"page.js",paraId:5,tocIndex:1},{value:"\u548C ",paraId:5,tocIndex:1},{value:"route.js",paraId:5,tocIndex:1},{value:"\u672C\u8D28\u4E0A\u90FD\u662F\u5BF9\u8DEF\u7531\u7684\u54CD\u5E94\u3002",paraId:5,tocIndex:1},{value:"page.js",paraId:5,tocIndex:1},{value:"\u4E3B\u8981\u8D1F\u8D23\u6E32\u67D3 UI\uFF0C",paraId:5,tocIndex:1},{value:"route.js",paraId:5,tocIndex:1},{value:"\u4E3B\u8981\u8D1F\u8D23\u5904\u7406\u8BF7\u6C42\u3002\u5982\u679C\u540C\u65F6\u5B58\u5728\uFF0CNext.js \u5C31\u4E0D\u77E5\u9053\u7528\u8C01\u7684\u903B\u8F91\u4E86\u3002",paraId:5,tocIndex:1},{value:"\u8BA9\u6211\u4EEC\u4ECE\u5199 GET \u8BF7\u6C42\u5F00\u59CB\uFF0C\u6BD4\u5982\u5199\u4E00\u4E2A\u83B7\u53D6\u6587\u7AE0\u5217\u8868\u7684\u63A5\u53E3\u3002",paraId:6,tocIndex:2},{value:"\u65B0\u5EFA ",paraId:7,tocIndex:2},{value:"app/api/posts/route.js",paraId:7,tocIndex:2},{value:" \u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:7,tocIndex:2},{value:`import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return NextResponse.json({ data });
}
`,paraId:8,tocIndex:2},{value:"\u6D4F\u89C8\u5668\u8BBF\u95EE ",paraId:9,tocIndex:2},{value:"http://localhost:3000/api/posts",paraId:9,tocIndex:2},{value:" \u67E5\u770B\u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\uFF1A",paraId:9,tocIndex:2},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF1A",paraId:10,tocIndex:2},{value:"\u6211\u4EEC ",paraId:11,tocIndex:2},{value:"export",paraId:11,tocIndex:2},{value:" \u4E00\u4E2A\u540D\u4E3A ",paraId:11,tocIndex:2},{value:"GET",paraId:11,tocIndex:2},{value:" \u7684 ",paraId:11,tocIndex:2},{value:"async",paraId:11,tocIndex:2},{value:" \u51FD\u6570\u6765\u5B9A\u4E49 GET \u8BF7\u6C42\u5904\u7406\uFF0C\u6CE8\u610F\u662F export \u800C\u4E0D\u662F export default",paraId:11,tocIndex:2},{value:"\u6211\u4EEC\u4F7F\u7528 ",paraId:12,tocIndex:2},{value:"next/server",paraId:12,tocIndex:2},{value:" \u7684 NextResponse \u5BF9\u8C61\u7528\u4E8E\u8BBE\u7F6E\u54CD\u5E94\u5185\u5BB9\uFF0C\u4F46\u8FD9\u91CC\u4E0D\u4E00\u5B9A\u975E\u8981\u7528 ",paraId:12,tocIndex:2},{value:"NextResponse",paraId:12,tocIndex:2},{value:"\uFF0C\u76F4\u63A5\u4F7F\u7528 ",paraId:12,tocIndex:2},{value:"Response",paraId:12,tocIndex:2},{value:" \u4E5F\u662F\u53EF\u4EE5\u7684\uFF1A",paraId:12,tocIndex:2},{value:`export async function GET() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();

  return Response.json({ data });
}
`,paraId:13,tocIndex:2},{value:"\u4F46\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\uFF0C\u63A8\u8350\u4F7F\u7528 ",paraId:14,tocIndex:2},{value:"NextResponse",paraId:14,tocIndex:2},{value:"\uFF0C\u56E0\u4E3A\u5B83\u662F Next.js \u57FA\u4E8E ",paraId:14,tocIndex:2},{value:"Response",paraId:14,tocIndex:2},{value:" \u7684\u5C01\u88C5\uFF0C\u5B83\u5BF9 TypeScript \u66F4\u52A0\u53CB\u597D\uFF0C\u540C\u65F6\u63D0\u4F9B\u4E86\u66F4\u4E3A\u65B9\u4FBF\u7684\u7528\u6CD5\uFF0C\u6BD4\u5982\u83B7\u53D6 Cookie \u7B49\u3002",paraId:14,tocIndex:2},{value:"\u6211\u4EEC\u5C06\u63A5\u53E3\u5199\u5728\u4E86 ",paraId:15,tocIndex:2},{value:"app/api",paraId:15,tocIndex:2},{value:" \u6587\u4EF6\u5939\u4E0B\uFF0C\u5E76\u4E0D\u662F\u56E0\u4E3A\u63A5\u53E3\u4E00\u5B9A\u8981\u653E\u5728\u540D\u4E3A ",paraId:15,tocIndex:2},{value:"api",paraId:15,tocIndex:2},{value:" \u6587\u4EF6\u5939\u4E0B\uFF08\u4E0E Pages Router \u4E0D\u540C\uFF09\u3002\u5982\u679C\u4F60\u4EE3\u7801\u5199\u5728 ",paraId:15,tocIndex:2},{value:"app/posts/route.js",paraId:15,tocIndex:2},{value:"\uFF0C\u5BF9\u5E94\u7684\u63A5\u53E3\u5730\u5740\u5C31\u662F ",paraId:15,tocIndex:2},{value:"/posts",paraId:15,tocIndex:2},{value:"\u3002\u653E\u5728 ",paraId:15,tocIndex:2},{value:"api",paraId:15,tocIndex:2},{value:" \u6587\u4EF6\u5939\u4E0B\u53EA\u662F\u4E3A\u4E86\u65B9\u4FBF\u533A\u5206\u5730\u5740\u662F\u63A5\u53E3\u8FD8\u662F\u9875\u9762\u3002",paraId:15,tocIndex:2},{value:"Next.js \u652F\u6301 ",paraId:16,tocIndex:3},{value:"GET",paraId:16,tocIndex:3},{value:"\u3001",paraId:16,tocIndex:3},{value:"POST",paraId:16,tocIndex:3},{value:"\u3001",paraId:16,tocIndex:3},{value:"PUT",paraId:16,tocIndex:3},{value:"\u3001",paraId:16,tocIndex:3},{value:"PATCH",paraId:16,tocIndex:3},{value:"\u3001",paraId:16,tocIndex:3},{value:"DELETE",paraId:16,tocIndex:3},{value:"\u3001",paraId:16,tocIndex:3},{value:"HEAD",paraId:16,tocIndex:3},{value:" \u548C ",paraId:16,tocIndex:3},{value:"OPTIONS",paraId:16,tocIndex:3},{value:" \u8FD9\u4E9B HTTP \u8BF7\u6C42\u65B9\u6CD5\u3002\u5982\u679C\u4F20\u5165\u4E86\u4E0D\u652F\u6301\u7684\u8BF7\u6C42\u65B9\u6CD5\uFF0CNext.js \u4F1A\u8FD4\u56DE ",paraId:16,tocIndex:3},{value:"405 Method Not Allowed",paraId:16,tocIndex:3},{value:"\u3002",paraId:16,tocIndex:3},{value:`// route.js
export async function GET(request) {}

export async function HEAD(request) {}

export async function POST(request) {}

export async function PUT(request) {}

export async function DELETE(request) {}

export async function PATCH(request) {}

// \u5982\u679C \`OPTIONS\` \u6CA1\u6709\u5B9A\u4E49, Next.js \u4F1A\u81EA\u52A8\u5B9E\u73B0 \`OPTIONS\`
export async function OPTIONS(request) {}
`,paraId:17,tocIndex:3},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u518D\u5199\u4E00\u4E2A POST \u8BF7\u6C42\u7EC3\u7EC3\u624B\u3002",paraId:18,tocIndex:3},{value:"\u7EE7\u7EED\u4FEE\u6539 ",paraId:19,tocIndex:3},{value:"app/api/posts/route.js",paraId:19,tocIndex:3},{value:"\uFF0C\u6DFB\u52A0\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:19,tocIndex:3},{value:`export async function POST(request) {
  const article = await request.json();

  return NextResponse.json(
    {
      id: Math.random().toString(36).slice(-8),
      data: article,
    },
    { status: 201 },
  );
}
`,paraId:20,tocIndex:3},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u7528 Postman \u8C03\u7528\u4E00\u4E0B\uFF1A",paraId:21,tocIndex:3},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u5177\u4F53\u770B\u4E0B\u8BF7\u6C42\u65B9\u6CD5\u3002\u6BCF\u4E2A\u8BF7\u6C42\u65B9\u6CD5\u7684\u5904\u7406\u51FD\u6570\u4F1A\u88AB\u4F20\u5165\u4E24\u4E2A\u53C2\u6570\uFF0C\u4E00\u4E2A ",paraId:22,tocIndex:4},{value:"request",paraId:22,tocIndex:4},{value:"\uFF0C\u4E00\u4E2A ",paraId:22,tocIndex:4},{value:"context",paraId:22,tocIndex:4},{value:" \u3002\u4E24\u4E2A\u53C2\u6570\u90FD\u662F\u53EF\u9009\u7684\uFF1A",paraId:22,tocIndex:4},{value:`export async function GET(request, context) {}
`,paraId:23,tocIndex:4},{value:"request \u5BF9\u8C61\u662F\u4E00\u4E2A ",paraId:24,tocIndex:5},{value:"NextRequest",paraId:24,tocIndex:5},{value:" \u5BF9\u8C61\uFF0C\u5B83\u662F\u57FA\u4E8E ",paraId:24,tocIndex:5},{value:"Web Request API",paraId:24,tocIndex:5},{value:" \u7684\u6269\u5C55\u3002\u4F7F\u7528 request \uFF0C\u4F60\u53EF\u4EE5\u5FEB\u6377\u8BFB\u53D6 cookies \u548C\u5904\u7406 URL\u3002",paraId:24,tocIndex:5},{value:"\u6211\u4EEC\u8FD9\u91CC\u8BB2\u8BB2\u5982\u4F55\u83B7\u53D6 URL \u53C2\u6570\uFF1A",paraId:25,tocIndex:5},{value:`export async function GET(request, context) {
  //  \u8BBF\u95EE /home, pathname \u7684\u503C\u4E3A /home
  const pathname = request.nextUrl.pathname;
  // \u8BBF\u95EE /home?name=lee, searchParams \u7684\u503C\u4E3A { 'name': 'lee' }
  const searchParams = request.nextUrl.searchParams;
}
`,paraId:26,tocIndex:5},{value:"\u5176\u4E2D nextUrl \u662F\u57FA\u4E8E Web URL API \u7684\u6269\u5C55\uFF08\u5982\u679C\u4F60\u60F3\u83B7\u53D6\u5176\u4ED6\u503C\uFF0C\u53C2\u8003 ",paraId:27,tocIndex:5},{value:"URL API",paraId:27,tocIndex:5},{value:"\uFF09\uFF0C\u540C\u6837\u63D0\u4F9B\u4E86\u4E00\u4E9B\u65B9\u4FBF\u4F7F\u7528\u7684\u65B9\u6CD5\u3002",paraId:27,tocIndex:5},{value:"\u76EE\u524D",paraId:28,tocIndex:6},{value:"context",paraId:28,tocIndex:6},{value:" \u53EA\u6709\u4E00\u4E2A\u503C\u5C31\u662F ",paraId:28,tocIndex:6},{value:"params",paraId:28,tocIndex:6},{value:"\uFF0C\u5B83\u662F\u4E00\u4E2A\u5305\u542B\u5F53\u524D\u52A8\u6001\u8DEF\u7531\u53C2\u6570\u7684\u5BF9\u8C61\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:28,tocIndex:6},{value:`// app/dashboard/[team]/route.js
export async function GET(request, { params }) {
  const team = params.team;
}
`,paraId:29,tocIndex:6},{value:"\u5F53\u8BBF\u95EE ",paraId:30,tocIndex:6},{value:"/dashboard/1",paraId:30,tocIndex:6},{value:" \u65F6\uFF0Cparams \u7684\u503C\u4E3A ",paraId:30,tocIndex:6},{value:"{ team: '1' }",paraId:30,tocIndex:6},{value:"\u3002\u5176\u4ED6\u60C5\u51B5\u8FD8\u6709\uFF1A",paraId:30,tocIndex:6},{value:"Example",paraId:31,tocIndex:6},{value:"URL",paraId:31,tocIndex:6},{value:"params",paraId:31,tocIndex:6},{value:"app/dashboard/[team]/route.js",paraId:31,tocIndex:6},{value:"/dashboard/1",paraId:31,tocIndex:6},{value:"{ team: '1' }",paraId:31,tocIndex:6},{value:"app/shop/[tag]/[item]/route.js",paraId:31,tocIndex:6},{value:"/shop/1/2",paraId:31,tocIndex:6},{value:"{ tag: '1', item: '2' }",paraId:31,tocIndex:6},{value:"app/blog/[...slug]/route.js",paraId:31,tocIndex:6},{value:"/blog/1/2",paraId:31,tocIndex:6},{value:"{ slug: ['1', '2'] }",paraId:31,tocIndex:6},{value:"\u6CE8\u610F\u7B2C\u4E8C\u884C\uFF1A\u6B64\u65F6 params \u8FD4\u56DE\u4E86\u5F53\u524D\u94FE\u63A5\u6240\u6709\u7684\u52A8\u6001\u8DEF\u7531\u53C2\u6570\u3002",paraId:32,tocIndex:6},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u5199\u4E2A demo \u590D\u4E60\u4E0B\u8FD9\u4E9B\u77E5\u8BC6\u3002",paraId:33,tocIndex:7},{value:"\u9700\u6C42\uFF1A\u76EE\u524D GET \u8BF7\u6C42 ",paraId:34,tocIndex:7},{value:"/api/posts",paraId:34,tocIndex:7},{value:" \u65F6\u4F1A\u8FD4\u56DE\u6240\u6709\u6587\u7AE0\u6570\u636E\uFF0C\u73B0\u5728\u5E0C\u671B GET \u8BF7\u6C42 ",paraId:34,tocIndex:7},{value:"/api/posts/1?dataField=title",paraId:34,tocIndex:7},{value:" \u83B7\u53D6 post id \u4E3A 1 \u7684\u6587\u7AE0\u6570\u636E\uFF0CdataField \u7528\u4E8E\u6307\u5B9A\u8FD4\u56DE\u54EA\u4E9B\u5B57\u6BB5\u6570\u636E\u3002",paraId:34,tocIndex:7},{value:"\u8BA9\u6211\u4EEC\u5F00\u59CB\u5199\u5427\u3002\u65B0\u5EFA ",paraId:35,tocIndex:7},{value:"/api/posts/[id]/route.js",paraId:35,tocIndex:7},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:35,tocIndex:7},{value:`import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  const field = request.nextUrl.searchParams.get('dataField');
  const data = await (
    await fetch(\`https://jsonplaceholder.typicode.com/posts/\${params.id}\`)
  ).json();
  const result = field ? { [field]: data[field] } : data;
  return NextResponse.json(result);
}
`,paraId:36,tocIndex:7},{value:"\u7528 Postman \u6D4B\u8BD5\u4E00\u4E0B\uFF0C\u5982\u679C\u8BF7\u6C42\u5730\u5740\u662F ",paraId:37,tocIndex:7},{value:"http://localhost:3000/api/posts/1?dataField=title",paraId:37,tocIndex:7},{value:"\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A",paraId:37,tocIndex:7},{value:"\u5982\u679C\u8BF7\u6C42\u5730\u5740\u662F ",paraId:38,tocIndex:7},{value:"http://localhost:3000/api/posts/1",paraId:38,tocIndex:7},{value:"\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A",paraId:38,tocIndex:7},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u4F7F\u7528 ",paraId:39,tocIndex:9},{value:"Response",paraId:39,tocIndex:9},{value:" \u5BF9\u8C61\uFF08",paraId:39,tocIndex:9},{value:"NextResponse",paraId:39,tocIndex:9},{value:" \u4E5F\u662F\u4E00\u6837\u7684\uFF09\u7684 GET \u8BF7\u6C42\u4F1A\u88AB\u7F13\u5B58\u3002",paraId:39,tocIndex:9},{value:"\u8BA9\u6211\u4EEC\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u65B0\u5EFA ",paraId:40,tocIndex:9},{value:"app/api/time/route.js",paraId:40,tocIndex:9},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:40,tocIndex:9},{value:`export async function GET() {
  console.log('GET /api/time');
  return Response.json({ data: new Date().toLocaleTimeString() });
}
`,paraId:41,tocIndex:9},{value:"\u6CE8\u610F\uFF1A\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\uFF0C\u5E76\u4E0D\u4F1A\u88AB\u7F13\u5B58\uFF0C\u6BCF\u6B21\u5237\u65B0\u65F6\u95F4\u90FD\u4F1A\u6539\u53D8\uFF1A",paraId:42,tocIndex:9},{value:"\u73B0\u5728\u6211\u4EEC\u90E8\u7F72\u751F\u4EA7\u7248\u672C\uFF0C\u8FD0\u884C ",paraId:43,tocIndex:9},{value:"npm run build && npm run start",paraId:43,tocIndex:9},{value:"\uFF1A",paraId:43,tocIndex:9},{value:"\u4F60\u4F1A\u53D1\u73B0\uFF0C\u65E0\u8BBA\u600E\u4E48\u5237\u65B0\uFF0C\u65F6\u95F4\u90FD\u4E0D\u4F1A\u6539\u53D8\u3002\u8FD9\u5C31\u662F\u88AB\u7F13\u5B58\u4E86\u3002",paraId:44,tocIndex:9},{value:"\u53EF\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1FNext.js \u662F\u600E\u4E48\u5B9E\u73B0\u7684\u5462\uFF1F",paraId:45,tocIndex:9},{value:"\u8BA9\u6211\u4EEC\u770B\u4E0B\u6784\u5EFA\uFF08npm run build\uFF09\u65F6\u7684\u547D\u4EE4\u884C\u8F93\u51FA\uFF1A",paraId:46,tocIndex:9},{value:"\u6839\u636E\u8F93\u51FA\u7684\u7ED3\u679C\uFF0C\u4F60\u4F1A\u53D1\u73B0 ",paraId:47,tocIndex:9},{value:"/api/time",paraId:47,tocIndex:9},{value:" \u662F\u9759\u6001\u7684\uFF0C\u4E5F\u5C31\u662F\u88AB\u9884\u6E32\u67D3\u4E3A\u9759\u6001\u7684\u5185\u5BB9\uFF0C\u6362\u8A00\u4E4B\uFF0C",paraId:47,tocIndex:9},{value:"/api/time",paraId:47,tocIndex:9},{value:" \u7684\u8FD4\u56DE\u7ED3\u679C\u5176\u5B9E\u5728\u6784\u5EFA\u7684\u65F6\u5019\u5C31\u5DF2\u7ECF\u786E\u5B9A\u4E86\uFF0C\u800C\u4E0D\u662F\u5728\u7B2C\u4E00\u6B21\u8BF7\u6C42\u7684\u65F6\u5019\u624D\u786E\u5B9A\u3002",paraId:47,tocIndex:9},{value:"\u4F46\u5927\u5BB6\u4E5F\u4E0D\u7528\u62C5\u5FC3\u9ED8\u8BA4\u7F13\u5B58\u5E26\u6765\u7684\u5F71\u54CD\u3002\u5B9E\u9645\u4E0A\uFF0C\u9ED8\u8BA4\u7F13\u5B58\u7684\u6761\u4EF6\u662F\u975E\u5E38\u201C\u4E25\u82DB\u201D\u7684\uFF0C\u8FD9\u4E9B\u60C5\u51B5\u90FD\u4F1A\u5BFC\u81F4\u9000\u51FA\u7F13\u5B58\uFF1A",paraId:48,tocIndex:10},{value:"GET",paraId:49,tocIndex:10},{value:" \u8BF7\u6C42\u4F7F\u7528 ",paraId:49,tocIndex:10},{value:"Request",paraId:49,tocIndex:10},{value:" \u5BF9\u8C61",paraId:49,tocIndex:10},{value:"\u4FEE\u6539 ",paraId:50,tocIndex:10},{value:"app/api/time/route.js",paraId:50,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:50,tocIndex:10},{value:`export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  return Response.json({
    data: new Date().toLocaleTimeString(),
    params: searchParams.toString(),
  });
}
`,paraId:51,tocIndex:10},{value:"\u73B0\u5728\u6211\u4EEC\u90E8\u7F72\u751F\u4EA7\u7248\u672C\uFF0C\u8FD0\u884C ",paraId:52,tocIndex:10},{value:"npm run build && npm run start",paraId:52,tocIndex:10},{value:"\uFF1A",paraId:52,tocIndex:10},{value:"\u8FD0\u884C\u6548\u679C\u5982\u4E0B\uFF1A",paraId:53,tocIndex:10},{value:"\u6B64\u65F6\u4F1A\u52A8\u6001\u6E32\u67D3\uFF0C\u4E5F\u5C31\u662F\u5728\u8BF7\u6C42\u7684\u65F6\u5019\u518D\u8FDB\u884C\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u6240\u4EE5\u65F6\u95F4\u4F1A\u6539\u53D8\u3002",paraId:54,tocIndex:10},{value:"\u6DFB\u52A0\u5176\u4ED6 HTTP \u65B9\u6CD5\uFF0C\u6BD4\u5982 POST",paraId:55,tocIndex:10},{value:"\u4FEE\u6539 ",paraId:56,tocIndex:10},{value:"app/api/time/route.js",paraId:56,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:56,tocIndex:10},{value:`export async function GET() {
  console.log('GET /api/time');
  return Response.json({ data: new Date().toLocaleTimeString() });
}

export async function POST() {
  console.log('POST /api/time');
  return Response.json({ data: new Date().toLocaleTimeString() });
}
`,paraId:57,tocIndex:10},{value:"\u6B64\u65F6\u4F1A\u8F6C\u4E3A\u52A8\u6001\u6E32\u67D3\u3002\u8FD9\u662F\u56E0\u4E3A POST \u8BF7\u6C42\u5F80\u5F80\u7528\u4E8E\u6539\u53D8\u6570\u636E\uFF0CGET \u8BF7\u6C42\u7528\u4E8E\u83B7\u53D6\u6570\u636E\u3002\u5982\u679C\u5199\u4E86 POST \u8BF7\u6C42\uFF0C\u8868\u793A\u6570\u636E\u4F1A\u53D1\u751F\u53D8\u5316\uFF0C\u6B64\u65F6\u4E0D\u9002\u5408\u7F13\u5B58\u3002",paraId:58,tocIndex:10},{value:"\u4F7F\u7528\u50CF cookies\u3001headers \u8FD9\u6837\u7684",paraId:59,tocIndex:10},{value:"\u52A8\u6001\u51FD\u6570",paraId:59,tocIndex:10},{value:"\u4FEE\u6539 ",paraId:60,tocIndex:10},{value:"app/api/time/route.js",paraId:60,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:60,tocIndex:10},{value:`export async function GET(request) {
  const token = request.cookies.get('token');
  return Response.json({ data: new Date().toLocaleTimeString() });
}
`,paraId:61,tocIndex:10},{value:"\u6B64\u65F6\u4F1A\u8F6C\u4E3A\u52A8\u6001\u6E32\u67D3\u3002\u8FD9\u662F\u56E0\u4E3A cookies\u3001headers \u8FD9\u4E9B\u6570\u636E\u53EA\u6709\u5F53\u8BF7\u6C42\u7684\u65F6\u5019\u624D\u77E5\u9053\u5177\u4F53\u7684\u503C\u3002",paraId:62,tocIndex:10},{value:"\u8DEF\u7531\u6BB5\u914D\u7F6E\u9879",paraId:63,tocIndex:10},{value:"\u624B\u52A8\u58F0\u660E\u4E3A\u52A8\u6001\u6A21\u5F0F",paraId:63,tocIndex:10},{value:"\u4FEE\u6539 ",paraId:64,tocIndex:10},{value:"app/api/time/route.js",paraId:64,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:64,tocIndex:10},{value:`export const dynamic = 'force-dynamic';

export async function GET() {
  return Response.json({ data: new Date().toLocaleTimeString() });
}
`,paraId:65,tocIndex:10},{value:"\u6B64\u65F6\u4F1A\u8F6C\u4E3A\u52A8\u6001\u6E32\u67D3\u3002\u8FD9\u662F\u56E0\u4E3A\u4F60\u624B\u52A8\u8BBE\u7F6E\u4E3A\u4E86\u52A8\u6001\u6E32\u67D3\u6A21\u5F0F\u2026\u2026",paraId:66,tocIndex:10},{value:"\u9664\u4E86\u9000\u51FA\u7F13\u5B58\uFF0C\u4E5F\u53EF\u4EE5\u8BBE\u7F6E\u7F13\u5B58\u7684\u65F6\u6548\uFF0C\u9002\u7528\u4E8E\u4E00\u4E9B\u91CD\u8981\u6027\u4F4E\u3001\u65F6\u6548\u6027\u4F4E\u7684\u9875\u9762\u3002",paraId:67,tocIndex:11},{value:"\u6709\u4E24\u79CD\u5E38\u7528\u7684\u65B9\u6848\uFF0C\u4E00\u79CD\u662F\u4F7F\u7528",paraId:68,tocIndex:11},{value:"\u8DEF\u7531\u6BB5\u914D\u7F6E\u9879",paraId:68,tocIndex:11},{value:"\u3002",paraId:68,tocIndex:11},{value:"\u4FEE\u6539 ",paraId:69,tocIndex:11},{value:"app/api/time/route.js",paraId:69,tocIndex:11},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:69,tocIndex:11},{value:`export const revalidate = 10;

export async function GET() {
  return Response.json({ data: new Date().toLocaleTimeString() });
}
`,paraId:70,tocIndex:11},{value:"export const revalidate = 10",paraId:71,tocIndex:11},{value:" \u8868\u793A\u8BBE\u7F6E\u91CD\u65B0\u9A8C\u8BC1\u9891\u7387\u4E3A 10s\uFF0C\u4F46\u662F\u8981\u6CE8\u610F\uFF1A",paraId:71,tocIndex:11},{value:"\u8FD9\u53E5\u4EE3\u7801\u7684\u6548\u679C\u5E76\u4E0D\u662F\u8BBE\u7F6E\u670D\u52A1\u5668\u6BCF 10s \u4F1A\u81EA\u52A8\u66F4\u65B0\u4E00\u6B21 ",paraId:72,tocIndex:11},{value:"/api/time",paraId:72,tocIndex:11},{value:"\u3002\u800C\u662F\u6700\u5C11 10s \u540E\u624D\u91CD\u65B0\u9A8C\u8BC1\u3002",paraId:72,tocIndex:11},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5047\u8BBE\u4F60\u73B0\u5728\u8BBF\u95EE\u4E86 ",paraId:73,tocIndex:11},{value:"/api/time",paraId:73,tocIndex:11},{value:"\uFF0C\u6B64\u65F6\u65F6\u95F4\u8BBE\u4E3A 0s\uFF0C10s \u5185\u6301\u7EED\u8BBF\u95EE\uFF0C",paraId:73,tocIndex:11},{value:"/api/time",paraId:73,tocIndex:11},{value:"\u8FD4\u56DE\u7684\u90FD\u662F\u4E4B\u524D\u7F13\u5B58\u7684\u7ED3\u679C\u3002\u5F53 10s \u8FC7\u540E\uFF0C\u5047\u8BBE\u4F60\u7B2C 12s \u53C8\u8BBF\u95EE\u4E86\u4E00\u6B21 ",paraId:73,tocIndex:11},{value:"/api/time",paraId:73,tocIndex:11},{value:"\uFF0C\u6B64\u65F6\u867D\u7136\u8D85\u8FC7\u4E86 10s\uFF0C\u4F46\u4F9D\u7136\u4F1A\u8FD4\u56DE\u4E4B\u524D\u7F13\u5B58\u7684\u7ED3\u679C\uFF0C\u4F46\u540C\u65F6\u4F1A\u89E6\u53D1\u670D\u52A1\u5668\u66F4\u65B0\u7F13\u5B58\uFF0C\u5F53\u4F60\u7B2C 13s \u518D\u6B21\u8BBF\u95EE\u7684\u65F6\u5019\uFF0C\u5C31\u662F\u66F4\u65B0\u540E\u7684\u7ED3\u679C\u3002",paraId:73,tocIndex:11},{value:"\u7B80\u5355\u6765\u8BF4\uFF0C\u8D85\u8FC7 revalidate \u8BBE\u7F6E\u65F6\u95F4\u7684\u9996\u6B21\u8BBF\u95EE\u4F1A\u89E6\u53D1\u7F13\u5B58\u66F4\u65B0\uFF0C\u5982\u679C\u66F4\u65B0\u6210\u529F\uFF0C\u540E\u7EED\u7684\u8FD4\u56DE\u5C31\u90FD\u662F\u65B0\u7684\u5185\u5BB9\uFF0C\u76F4\u5230\u4E0B\u4E00\u6B21\u89E6\u53D1\u7F13\u5B58\u66F4\u65B0\u3002",paraId:74,tocIndex:11},{value:"\u8FD8\u6709\u4E00\u79CD\u662F\u4F7F\u7528 ",paraId:75,tocIndex:11},{value:"next.revalidate",paraId:75,tocIndex:11},{value:" \u9009\u9879\u3002",paraId:75,tocIndex:11},{value:"\u4E3A\u4E86\u6F14\u793A\u5B83\u7684\u6548\u679C\uFF0C\u6211\u4EEC\u9700\u8981\u51C6\u5907\u4E00\u4E2A\u80FD\u591F\u968F\u673A\u8FD4\u56DE\u6570\u636E\u7684\u63A5\u53E3\u3002",paraId:76,tocIndex:11},{value:"\u5982\u679C\u4F60\u559C\u6B22\u732B\u732B\uFF0C\u53EF\u4EE5\u8C03\u7528 ",paraId:77,tocIndex:11},{value:"https://api.thecatapi.com/v1/images/search",paraId:77,tocIndex:11},{value:"\uFF0C\u6BCF\u6B21\u8C03\u7528\u5B83\u90FD\u4F1A\u8FD4\u56DE\u4E00\u5F20\u968F\u673A\u7684\u732B\u732B\u56FE\u7247\u6570\u636E\u3002",paraId:77,tocIndex:11},{value:"\u5982\u679C\u4F60\u559C\u6B22\u72D7\u72D7\uFF0C\u53EF\u4EE5\u8C03\u7528 ",paraId:78,tocIndex:11},{value:"https://dog.ceo/api/breeds/image/random",paraId:78,tocIndex:11},{value:"\uFF0C\u6BCF\u6B21\u8C03\u7528\u5B83\u90FD\u4F1A\u8FD4\u56DE\u4E00\u5F20\u968F\u673A\u7684\u72D7\u72D7\u56FE\u7247\u6570\u636E\u3002",paraId:78,tocIndex:11},{value:"\u5982\u679C\u4F60\u559C\u6B22\u7F8E\u5973\u5E05\u54E5\uFF0C\u8BF7\u81EA\u5DF1\u89E3\u51B3\u3002",paraId:79,tocIndex:11},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u5F00\u59CB\u5427\uFF01\u65B0\u5EFA ",paraId:80,tocIndex:11},{value:"app/api/image/route.js",paraId:80,tocIndex:11},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:80,tocIndex:11},{value:`export async function GET() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const data = await res.json();
  console.log(data);
  return Response.json(data);
}
`,paraId:81,tocIndex:11},{value:"\u8BA9\u6211\u4EEC\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u6253\u5F00\u8FD9\u4E2A\u9875\u9762\uFF1A",paraId:82,tocIndex:11},{value:"\u4F60\u4F1A\u53D1\u73B0\u4E0E\u4E4B\u524D\u7684 ",paraId:83,tocIndex:11},{value:"/api/time",paraId:83,tocIndex:11},{value:" \u4E0D\u540C\uFF0C",paraId:83,tocIndex:11},{value:"/api/image",paraId:83,tocIndex:11},{value:" \u63A5\u53E3\u8FD4\u56DE\u7684\u6570\u636E\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u5237\u65B0\u5C31\u5DF2\u7ECF\u4E0D\u4F1A\u6539\u53D8\u4E86\uFF0C\u5373\u4F7F console.log \u6BCF\u6B21\u90FD\u4F1A\u6253\u5370\uFF0C\u8FD4\u56DE\u7684\u7ED3\u679C\u5374\u8FD8\u662F\u4E00\u6837\u3002",paraId:83,tocIndex:11},{value:"\u8FD9\u662F\u56E0\u4E3A Next.js \u62D3\u5C55\u4E86\u539F\u751F\u7684 fetch \u65B9\u6CD5\uFF0C\u4F1A\u81EA\u52A8\u7F13\u5B58 fetch \u7684\u7ED3\u679C\u3002\u73B0\u5728\u6211\u4EEC\u4F7F\u7528 ",paraId:84,tocIndex:11},{value:"next.revalidate",paraId:84,tocIndex:11},{value:" \u8BBE\u7F6E fetch \u8BF7\u6C42\u7684\u91CD\u65B0\u9A8C\u8BC1\u65F6\u95F4\uFF0C\u4FEE\u6539 ",paraId:84,tocIndex:11},{value:"app/api/image/route.js",paraId:84,tocIndex:11},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:84,tocIndex:11},{value:`export async function GET() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    next: { revalidate: 5 }, //  \u6BCF 5 \u79D2\u91CD\u65B0\u9A8C\u8BC1
  });
  const data = await res.json();
  console.log(data);
  return Response.json(data);
}
`,paraId:85,tocIndex:11},{value:"\u5728\u672C\u5730\u591A\u6B21\u5237\u65B0\u9875\u9762\uFF0C\u4F60\u4F1A\u53D1\u73B0\u6570\u636E\u53D1\u751F\u4E86\u66F4\u65B0\uFF1A",paraId:86,tocIndex:11},{value:"\u5982\u679C\u4F60\u4F7F\u7528\u751F\u4EA7\u7248\u672C\uFF0C\u867D\u7136\u5728\u6784\u5EFA\u7684\u65F6\u5019\uFF0C",paraId:87,tocIndex:11},{value:"/api/image",paraId:87,tocIndex:11},{value:" \u663E\u793A\u7684\u662F\u9759\u6001\u6E32\u67D3\uFF0C\u4F46\u662F\u6570\u636E\u4F1A\u66F4\u65B0\u3002\u5177\u4F53\u66F4\u65B0\u7684\u89C4\u5F8B\u548C\u7B2C\u4E00\u79CD\u65B9\u6848\u662F\u4E00\u6837\u7684\uFF0C\u8FD9\u91CC\u5C31\u4E0D\u591A\u8D58\u8FF0\u4E86\u3002",paraId:87,tocIndex:11},{value:"\u6CE8\uFF1ANext.js \u7684\u7F13\u5B58\u65B9\u6848\u6211\u4EEC\u8FD8\u4F1A\u5728 ",paraId:88,tocIndex:11},{value:"\u300A\u7F13\u5B58\u7BC7 | Caching\u300B",paraId:88,tocIndex:11},{value:"\u4E2D\u8BE6\u7EC6\u4ECB\u7ECD\u3002",paraId:88,tocIndex:11},{value:"\u63A5\u4E0B\u6765\u6211\u4EEC\u8BB2\u8BB2\u5199\u63A5\u53E3\u65F6\u5E38\u9047\u5230\u7684\u4E00\u4E9B\u95EE\u9898\uFF0C\u6BD4\u5982\u5982\u4F55\u83B7\u53D6\u7F51\u5740\u53C2\u6570\uFF0C\u5982\u4F55\u8BFB\u53D6 cookie\uFF0C\u5404\u79CD\u65B9\u6CD5\u4E86\u89E3\u5373\u53EF\u3002\u5B9E\u9645\u5F00\u53D1\u4E2D\u9047\u5230\u95EE\u9898\u7684\u65F6\u5019\u518D\u6765\u67E5\u5C31\u884C\u3002",paraId:89,tocIndex:12},{value:`// app/api/search/route.js
// \u8BBF\u95EE /api/search?query=hello
export function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query'); // query
}
`,paraId:90,tocIndex:13},{value:"\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u901A\u8FC7 ",paraId:91,tocIndex:14},{value:"NextRequest",paraId:91,tocIndex:14},{value:"\u5BF9\u8C61\uFF1A",paraId:91,tocIndex:14},{value:`// app/api/route.js
export async function GET(request) {
  const token = request.cookies.get('token');
  request.cookies.set(\`token2\`, 123);
}
`,paraId:92,tocIndex:14},{value:"\u5176\u4E2D\uFF0C",paraId:93,tocIndex:14},{value:"request",paraId:93,tocIndex:14},{value:" \u662F\u4E00\u4E2A ",paraId:93,tocIndex:14},{value:"NextRequest",paraId:93,tocIndex:14},{value:" \u5BF9\u8C61\u3002\u6B63\u5982\u4E0A\u8282\u6240\u8BF4\uFF0C",paraId:93,tocIndex:14},{value:"NextRequest",paraId:93,tocIndex:14},{value:" \u76F8\u6BD4 ",paraId:93,tocIndex:14},{value:"Request",paraId:93,tocIndex:14},{value:" \u63D0\u4F9B\u4E86\u66F4\u4E3A\u4FBF\u6377\u7684\u7528\u6CD5\uFF0C\u8FD9\u5C31\u662F\u4E00\u4E2A\u4F8B\u5B50\u3002",paraId:93,tocIndex:14},{value:"\u6B64\u5916\uFF0C\u867D\u7136\u6211\u4EEC\u4F7F\u7528 set \u8BBE\u7F6E\u4E86 cookie\uFF0C\u4F46\u8BBE\u7F6E\u7684\u662F\u8BF7\u6C42\u7684 cookie\uFF0C\u5E76\u6CA1\u6709\u8BBE\u7F6E\u54CD\u5E94\u7684 cookie\u3002",paraId:94,tocIndex:14},{value:"\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u662F\u901A\u8FC7",paraId:95,tocIndex:14},{value:"next/headers",paraId:95,tocIndex:14},{value:"\u5305\u63D0\u4F9B\u7684 ",paraId:95,tocIndex:14},{value:"cookies",paraId:95,tocIndex:14},{value:"\u65B9\u6CD5\u3002",paraId:95,tocIndex:14},{value:"\u56E0\u4E3A cookies \u5B9E\u4F8B\u53EA\u8BFB\uFF0C\u5982\u679C\u4F60\u8981\u8BBE\u7F6E Cookie\uFF0C\u4F60\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u4F7F\u7528 ",paraId:96,tocIndex:14},{value:"Set-Cookie",paraId:96,tocIndex:14},{value:" header \u7684 Response \u5B9E\u4F8B\u3002\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:96,tocIndex:14},{value:`// app/api/route.js
import { cookies } from 'next/headers';

export async function GET(request) {
  const cookieStore = cookies();
  const token = cookieStore.get('token');

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { 'Set-Cookie': \`token=\${token}\` },
  });
}
`,paraId:97,tocIndex:14},{value:"\u7B2C\u4E00\u79CD\u65B9\u6CD5\u662F\u901A\u8FC7 ",paraId:98,tocIndex:15},{value:"NextRequest",paraId:98,tocIndex:15},{value:"\u5BF9\u8C61\uFF1A",paraId:98,tocIndex:15},{value:`// app/api/route.js
export async function GET(request) {
  const headersList = new Headers(request.headers);
  const referer = headersList.get('referer');
}
`,paraId:99,tocIndex:15},{value:"\u7B2C\u4E8C\u79CD\u65B9\u6CD5\u662F",paraId:100,tocIndex:15},{value:"next/headers",paraId:100,tocIndex:15},{value:"\u5305\u63D0\u4F9B\u7684 ",paraId:100,tocIndex:15},{value:"headers",paraId:100,tocIndex:15},{value:" \u65B9\u6CD5\u3002",paraId:100,tocIndex:15},{value:"\u56E0\u4E3A headers \u5B9E\u4F8B\u53EA\u8BFB\uFF0C\u5982\u679C\u4F60\u8981\u8BBE\u7F6E headers\uFF0C\u4F60\u9700\u8981\u8FD4\u56DE\u4E00\u4E2A\u4F7F\u7528\u4E86\u65B0 header \u7684 Response \u5B9E\u4F8B\u3002\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:101,tocIndex:15},{value:`// app/api/route.js
import { headers } from 'next/headers';

export async function GET(request) {
  const headersList = headers();
  const referer = headersList.get('referer');

  return new Response('Hello, Next.js!', {
    status: 200,
    headers: { referer: referer },
  });
}
`,paraId:102,tocIndex:15},{value:"\u91CD\u5B9A\u5411\u4F7F\u7528 ",paraId:103,tocIndex:16},{value:"next/navigation",paraId:103,tocIndex:16},{value:" \u63D0\u4F9B\u7684 ",paraId:103,tocIndex:16},{value:"redirect",paraId:103,tocIndex:16},{value:" \u65B9\u6CD5\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:103,tocIndex:16},{value:`import { redirect } from 'next/navigation';

export async function GET(request) {
  redirect('https://nextjs.org/');
}
`,paraId:104,tocIndex:16},{value:`// app/items/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const res = await request.json();
  return NextResponse.json({ res });
}
`,paraId:105,tocIndex:17},{value:"\u5982\u679C\u8BF7\u6C42\u6B63\u6587\u662F FormData \u7C7B\u578B\uFF1A",paraId:106,tocIndex:17},{value:`// app/items/route.js
import { NextResponse } from 'next/server';

export async function POST(request) {
  const formData = await request.formData();
  const name = formData.get('name');
  const email = formData.get('email');
  return NextResponse.json({ name, email });
}
`,paraId:107,tocIndex:17},{value:`// app/api/route.ts
export async function GET(request) {
  return new Response('Hello, Next.js!', {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
}
`,paraId:108,tocIndex:18},{value:"\u4F60\u53EF\u4EE5\u8FD4\u56DE\u65E0 UI \u7684\u5185\u5BB9\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u8BBF\u95EE ",paraId:109,tocIndex:19},{value:"/rss.xml",paraId:109,tocIndex:19},{value:"\u7684\u65F6\u5019\uFF0C\u4F1A\u8FD4\u56DE XML \u7ED3\u6784\u7684\u5185\u5BB9\uFF1A",paraId:109,tocIndex:19},{value:`// app/rss.xml/route.ts
export async function GET() {
  return new Response(\`<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
 
<channel>
  <title>Next.js Documentation</title>
  <link>https://nextjs.org/docs</link>
  <description>The React Framework for the Web</description>
</channel>
 
</rss>\`);
}
`,paraId:110,tocIndex:19},{value:"\u6CE8\uFF1A",paraId:111,tocIndex:19},{value:"sitemap.xml",paraId:111,tocIndex:19},{value:"\u3001",paraId:111,tocIndex:19},{value:"robots.txt",paraId:111,tocIndex:19},{value:"\u3001",paraId:111,tocIndex:19},{value:"app icons",paraId:111,tocIndex:19},{value:" \u548C ",paraId:111,tocIndex:19},{value:"open graph images",paraId:111,tocIndex:19},{value:" \u8FD9\u4E9B\u7279\u6B8A\u7684\u6587\u4EF6\uFF0CNext.js \u90FD\u5DF2\u7ECF\u63D0\u4F9B\u4E86\u5185\u7F6E\u652F\u6301\uFF0C\u8FD9\u4E9B\u5185\u5BB9\u6211\u4EEC\u4F1A\u5728",paraId:111,tocIndex:19},{value:"\u300AMetadata \u7BC7 | \u57FA\u4E8E\u6587\u4EF6\u300B",paraId:111,tocIndex:19},{value:"\u8BE6\u7EC6\u8BB2\u5230\u3002",paraId:111,tocIndex:19},{value:"openai \u7684\u6253\u5B57\u6548\u679C\u80CC\u540E\u7528\u7684\u5C31\u662F\u6D41\uFF1A",paraId:112,tocIndex:20},{value:`// app/api/chat/route.js
import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge';

export async function POST(req) {
  const { messages } = await req.json();
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    messages,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
}
`,paraId:113,tocIndex:20},{value:"\u5F53\u7136\u4E5F\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u5E95\u5C42\u7684 Web API \u5B9E\u73B0 Streaming\uFF1A",paraId:114,tocIndex:20},{value:`// app/api/route.js
// https://developer.mozilla.org/docs/Web/API/ReadableStream#convert_async_iterator_to_stream
function iteratorToStream(iterator) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next();

      if (done) {
        controller.close();
      } else {
        controller.enqueue(value);
      }
    },
  });
}

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const encoder = new TextEncoder();

async function* makeIterator() {
  yield encoder.encode('<p>One</p>');
  await sleep(200);
  yield encoder.encode('<p>Two</p>');
  await sleep(200);
  yield encoder.encode('<p>Three</p>');
}

export async function GET() {
  const iterator = makeIterator();
  const stream = iteratorToStream(iterator);

  return new Response(stream);
}
`,paraId:115,tocIndex:20},{value:"\u6CE8\uFF1AStreaming \u66F4\u5B8C\u6574\u8BE6\u7EC6\u7684\u793A\u4F8B\u548C\u89E3\u91CA\u53EF\u4EE5\u53C2\u8003 ",paraId:116,tocIndex:20},{value:"\u300A\u5982\u4F55\u7528 Next.js v14 \u5B9E\u73B0\u4E00\u4E2A Streaming \u63A5\u53E3\uFF1F\u300B",paraId:116,tocIndex:20},{value:"\u606D\u559C\u4F60\uFF0C\u5B8C\u6210\u4E86\u672C\u8282\u5185\u5BB9\u7684\u5B66\u4E60\uFF01",paraId:117,tocIndex:21},{value:"\u8FD9\u4E00\u8282\u6211\u4EEC\u4ECB\u7ECD\u4E86\u5982\u4F55\u5B9A\u4E49\u4E00\u4E2A\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\uFF0C\u90A3\u5C31\u662F\u4F7F\u7528\u65B0\u7684\u7EA6\u5B9A\u6587\u4EF6 ",paraId:118,tocIndex:21},{value:"route.js",paraId:118,tocIndex:21},{value:"\uFF0C\u5207\u8BB0 ",paraId:118,tocIndex:21},{value:"route.js",paraId:118,tocIndex:21},{value:" \u4E0D\u80FD\u8DDF\u540C\u7EA7\u7684 ",paraId:118,tocIndex:21},{value:"page.js",paraId:118,tocIndex:21},{value:" \u4E00\u8D77\u4F7F\u7528\u3002",paraId:118,tocIndex:21},{value:"\u540C\u65F6\u6211\u4EEC\u4ECB\u7ECD\u4E86\u5199\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E2D\u53EF\u80FD\u4F1A\u9047\u5230\u7684\u95EE\u9898\u3002\u5728\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u5C3D\u53EF\u80FD\u4F7F\u7528 NextRequest \u548C NextResponse\uFF0C\u5B83\u4EEC\u662F\u57FA\u4E8E\u539F\u751F Request \u548C Response \u7684\u5C01\u88C5\uFF0C\u63D0\u4F9B\u4E86\u5FEB\u6377\u5904\u7406 url \u548C cookie \u7684\u65B9\u6CD5\u3002",paraId:119,tocIndex:21},{value:"Routing: Route Handlers",paraId:120,tocIndex:22},{value:"File Conventions: route.js",paraId:120,tocIndex:22},{value:"Functions: NextResponse",paraId:120,tocIndex:22}]}}]);
