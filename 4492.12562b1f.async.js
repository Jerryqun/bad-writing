"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4492],{64492:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"\u5728 Next.js \u4E2D\u5982\u4F55\u83B7\u53D6\u6570\u636E\u5462\uFF1F",paraId:0,tocIndex:0},{value:"Next.js \u4F18\u5148\u63A8\u8350\u4F7F\u7528\u539F\u751F\u7684 fetch \u65B9\u6CD5\uFF0C\u56E0\u4E3A Next.js \u62D3\u5C55\u4E86\u539F\u751F\u7684 fetch \u65B9\u6CD5\uFF0C\u4E3A\u5176\u6DFB\u52A0\u4E86\u7F13\u5B58\u548C\u66F4\u65B0\u7F13\u5B58(\u91CD\u65B0\u9A8C\u8BC1)\u7684\u673A\u5236\u3002",paraId:1,tocIndex:0},{value:"\u8FD9\u6837\u505A\u7684\u597D\u5904\u5728\u4E8E\u53EF\u4EE5\u81EA\u52A8\u590D\u7528\u8BF7\u6C42\u6570\u636E\uFF0C\u63D0\u9AD8\u6027\u80FD\u3002\u574F\u5904\u5728\u4E8E\u5982\u679C\u4F60\u4E0D\u719F\u6089\uFF0C\u7ECF\u5E38\u4F1A\u6709\u4E00\u4E9B\u201C\u83AB\u540D\u5947\u5999\u201D\u7684\u72B6\u51B5\u51FA\u73B0\u2026\u2026",paraId:2,tocIndex:0},{value:"\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u5177\u4F53\u5982\u4F55\u4F7F\u7528\u5427\u3002",paraId:3,tocIndex:0},{value:"Next.js \u62D3\u5C55\u4E86\u539F\u751F\u7684 ",paraId:4,tocIndex:2},{value:"fetch Web API",paraId:4,tocIndex:2},{value:"\uFF0C\u53EF\u4EE5\u4E3A",paraId:4,tocIndex:2},{value:"\u670D\u52A1\u7AEF\u7684\u6BCF\u4E2A\u8BF7\u6C42",paraId:4,tocIndex:2},{value:"\u914D\u7F6E\u7F13\u5B58\uFF08caching\uFF09\u548C\u91CD\u65B0\u9A8C\u8BC1\uFF08 revalidating\uFF09\u884C\u4E3A\u3002",paraId:4,tocIndex:2},{value:"\u4F60\u53EF\u4EE5\u5728",paraId:5,tocIndex:2},{value:"\u670D\u52A1\u7AEF\u7EC4\u4EF6\u3001\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u3001Server Actions",paraId:5,tocIndex:2},{value:" \u4E2D\u642D\u914D ",paraId:5,tocIndex:2},{value:"async",paraId:5,tocIndex:2},{value:"/",paraId:5,tocIndex:2},{value:"await",paraId:5,tocIndex:2},{value:" \u8BED\u6CD5\u4F7F\u7528 fetch\u3002",paraId:5,tocIndex:2},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:6,tocIndex:2},{value:`// app/page.js
async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  if (!res.ok) {
    // \u7531\u6700\u8FD1\u7684 error.js \u5904\u7406
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export default async function Page() {
  const data = await getData();
  return <main>{JSON.stringify(data)}</main>;
}
`,paraId:7,tocIndex:2},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNext.js \u4F1A\u81EA\u52A8\u7F13\u5B58\u670D\u52A1\u7AEF ",paraId:8,tocIndex:3},{value:"fetch",paraId:8,tocIndex:3},{value:" \u8BF7\u6C42\u7684\u8FD4\u56DE\u503C\uFF08\u80CC\u540E\u7528\u7684\u662F",paraId:8,tocIndex:3},{value:"\u6570\u636E\u7F13\u5B58\uFF08Data Cache\uFF09",paraId:8,tocIndex:3},{value:"\uFF09\u3002",paraId:8,tocIndex:3},{value:`// fetch \u7684 cache \u9009\u9879\u7528\u4E8E\u63A7\u5236\u8BE5\u8BF7\u6C42\u7684\u7F13\u5B58\u884C\u4E3A
// \u9ED8\u8BA4\u5C31\u662F 'force-cache', \u5E73\u65F6\u5199\u7684\u65F6\u5019\u53EF\u4EE5\u7701\u7565
fetch('https://...', { cache: 'force-cache' });
`,paraId:9,tocIndex:3},{value:"\u4F46\u8FD9\u4E9B\u60C5\u51B5\u9ED8\u8BA4\u4E0D\u4F1A\u81EA\u52A8\u7F13\u5B58\uFF1A",paraId:10,tocIndex:3},{value:"\u5728 Server Action \u4E2D\u4F7F\u7528\u7684\u65F6\u5019",paraId:11,tocIndex:3},{value:"\u5728\u5B9A\u4E49\u4E86\u975E GET \u65B9\u6CD5\u7684\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E2D\u4F7F\u7528\u7684\u65F6\u5019",paraId:11,tocIndex:3},{value:"\u7B80\u5355\u7684\u6765\u8BF4\uFF0C\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u53EA\u6709 GET \u65B9\u6CD5\u7684\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E2D\u4F7F\u7528 fetch\uFF0C\u8FD4\u56DE\u7ED3\u679C\u4F1A\u81EA\u52A8\u7F13\u5B58\u3002",paraId:12,tocIndex:3},{value:"\u8BA9\u6211\u4EEC\u5206\u522B\u4E3E\u4E2A\u4F8B\u5B50\u6F14\u793A\u4E0B\u3002\u4F46\u5728\u5199\u4EE3\u7801\u4E4B\u524D\uFF0C\u5148\u8BA9\u6211\u4EEC\u4FEE\u6539\u4E0B ",paraId:13,tocIndex:4},{value:"next.config.mjs",paraId:13,tocIndex:4},{value:" \u7684\u914D\u7F6E\uFF1A",paraId:13,tocIndex:4},{value:`const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
`,paraId:14,tocIndex:4},{value:"\u76EE\u524D logging \u53EA\u6709\u8FD9\u4E00\u4E2A\u914D\u7F6E\uFF0C\u7528\u4E8E",paraId:15,tocIndex:4},{value:"\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B",paraId:15,tocIndex:4},{value:"\u663E\u793A fetch \u8BF7\u6C42\u548C\u7F13\u5B58\u65E5\u5FD7\uFF1A",paraId:15,tocIndex:4},{value:"\u8BBF\u95EE ",paraId:16,tocIndex:4},{value:"/api/cache",paraId:16,tocIndex:4},{value:" \u8DEF\u7531\uFF0C\u5176\u4E2D GET \u8BF7\u6C42\u4E86 ",paraId:16,tocIndex:4},{value:"https://dog.ceo/api/breeds/image/random",paraId:16,tocIndex:4},{value:" \u8FD9\u4E2A\u63A5\u53E3\uFF0C\u63A5\u53E3 20ms \u8FD4\u56DE\uFF0C\u72B6\u6001\u7801 200\uFF0C\u6B64\u6B21\u8BF7\u6C42\u547D\u4E2D\u4E86\u7F13\u5B58\uFF08HIT\uFF09\u3002",paraId:16,tocIndex:4},{value:"\u8FD9\u4E2A\u65E5\u5FD7\u4F1A\u5E2E\u52A9\u6211\u4EEC\u67E5\u770B\u7F13\u5B58\u60C5\u51B5\uFF08\u5B9E\u9645\u7528\u7684\u65F6\u5019\u6709\u7684\u65E5\u5FD7\u7ED3\u679C\u4E0D\u662F\u5F88\u51C6\uFF0C\u8FD8\u6709\u5F85\u6539\u8FDB\uFF09\u3002",paraId:17,tocIndex:4},{value:"\u7B2C\u4E00\u79CD\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u4FEE\u6539 ",paraId:18,tocIndex:5},{value:"app/page.js",paraId:18,tocIndex:5},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:18,tocIndex:5},{value:`async function getData() {
  // \u63A5\u53E3\u6BCF\u6B21\u8C03\u7528\u90FD\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u968F\u673A\u7684\u732B\u732B\u56FE\u7247\u6570\u636E
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <img src={data[0].url} width="300" />;
}
`,paraId:19,tocIndex:5},{value:"\u8FD0\u884C ",paraId:20,tocIndex:5},{value:"npm run dev",paraId:20,tocIndex:5},{value:"\uFF0C\u5F00\u542F\u5F00\u53D1\u6A21\u5F0F\uFF1A",paraId:20,tocIndex:5},{value:"\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\uFF0C\u4E3A\u4E86\u65B9\u4FBF\u8C03\u8BD5\uFF0C\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668\u7684\u786C\u5237\u65B0\uFF08Command + Shift + R\uFF09\u6E05\u9664\u7F13\u5B58\uFF0C\u6B64\u65F6\u6570\u636E\u4F1A\u53D1\u751F\u66F4\u6539\uFF08cache: SKIP\uFF09\u3002\u666E\u901A\u5237\u65B0\u65F6\u56E0\u4E3A\u4F1A\u547D\u4E2D\u7F13\u5B58\uFF08cache: HIT\uFF09\uFF0C\u6570\u636E\u4F1A\u4FDD\u6301\u4E0D\u53D8\u3002",paraId:21,tocIndex:5},{value:"\u8FD0\u884C ",paraId:22,tocIndex:5},{value:"npm run build && npm run start",paraId:22,tocIndex:5},{value:" \u5F00\u542F\u751F\u4EA7\u7248\u672C\uFF1A",paraId:22,tocIndex:5},{value:"\u56E0\u4E3A fetch \u8BF7\u6C42\u7684\u8FD4\u56DE\u7ED3\u679C\u88AB\u7F13\u5B58\u4E86\uFF0C\u65E0\u8BBA\u662F\u5426\u786C\u5237\u65B0\uFF0C\u56FE\u7247\u6570\u636E\u90FD\u4F1A\u4FDD\u6301\u4E0D\u53D8\u3002",paraId:23,tocIndex:5},{value:"\u7B2C\u4E8C\u79CD\u5728\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E2D\u4F7F\u7528\uFF0C\u65B0\u5EFA ",paraId:24,tocIndex:6},{value:"app/api/cache/route.js",paraId:24,tocIndex:6},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:24,tocIndex:6},{value:`export async function GET() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');

  const data = await res.json();
  return Response.json({ data });
}
`,paraId:25,tocIndex:6},{value:"\u8FD0\u884C ",paraId:26,tocIndex:6},{value:"npm run dev",paraId:26,tocIndex:6},{value:"\uFF0C\u5F00\u542F\u5F00\u53D1\u6A21\u5F0F\uFF1A",paraId:26,tocIndex:6},{value:"\u5F00\u53D1\u6A21\u5F0F\u4E0B\uFF0C\u6D4F\u89C8\u5668\u786C\u5237\u65B0\u7684\u65F6\u5019\u4F1A\u8DF3\u8FC7\u7F13\u5B58\uFF0C\u666E\u901A\u5237\u65B0\u7684\u65F6\u5019\u5219\u4F1A\u547D\u4E2D\u7F13\u5B58\u3002\u53EF\u4EE5\u770B\u5230\u7B2C\u4E00\u6B21\u786C\u5237\u65B0\u7684\u65F6\u5019\uFF0C\u8BF7\u6C42\u63A5\u53E3\u65F6\u95F4\u4E3A 912ms\uFF0C\u540E\u9762\u666E\u901A\u5237\u65B0\u7684\u65F6\u5019\uFF0C\u56E0\u4E3A\u4F7F\u7528\u7F13\u5B58\u4E2D\u7684\u6570\u636E\uFF0C\u6570\u636E\u8FD4\u56DE\u65F6\u95F4\u90FD\u662F 1ms \u5DE6\u53F3\u3002",paraId:27,tocIndex:6},{value:"\u8FD0\u884C ",paraId:28,tocIndex:6},{value:"npm run build && npm run start",paraId:28,tocIndex:6},{value:" \u5F00\u542F\u751F\u4EA7\u7248\u672C\uFF1A",paraId:28,tocIndex:6},{value:"\u56E0\u4E3A fetch \u8BF7\u6C42\u7684\u8FD4\u56DE\u7ED3\u679C\u88AB\u7F13\u5B58\u4E86\uFF0C\u65E0\u8BBA\u662F\u5426\u786C\u5237\u65B0\uFF0C\u63A5\u53E3\u6570\u636E\u90FD\u4F1A\u4FDD\u6301\u4E0D\u53D8\u3002",paraId:29,tocIndex:6},{value:"\u5728 Next.js \u4E2D\uFF0C\u6E05\u9664\u6570\u636E\u7F13\u5B58\u5E76\u91CD\u65B0\u83B7\u53D6\u6700\u65B0\u6570\u636E\u7684\u8FC7\u7A0B\u5C31\u53EB\u505A\u91CD\u65B0\u9A8C\u8BC1\uFF08Revalidation\uFF09\u3002",paraId:30,tocIndex:7},{value:"Next.js \u63D0\u4F9B\u4E86\u4E24\u79CD\u65B9\u5F0F\u91CD\u65B0\u9A8C\u8BC1\uFF1A",paraId:31,tocIndex:7},{value:"\u4E00\u79CD\u662F",paraId:32,tocIndex:7},{value:"\u57FA\u4E8E\u65F6\u95F4\u7684\u91CD\u65B0\u9A8C\u8BC1\uFF08Time-based revalidation\uFF09",paraId:32,tocIndex:7},{value:"\uFF0C\u5373\u7ECF\u8FC7\u4E00\u5B9A\u65F6\u95F4\u5E76\u6709\u65B0\u8BF7\u6C42\u4EA7\u751F\u540E\u91CD\u65B0\u9A8C\u8BC1\u6570\u636E\uFF0C\u9002\u7528\u4E8E\u4E0D\u7ECF\u5E38\u66F4\u6539\u4E14\u65B0\u9C9C\u5EA6\u4E0D\u90A3\u4E48\u91CD\u8981\u7684\u6570\u636E\u3002",paraId:32,tocIndex:7},{value:"\u4E00\u79CD\u662F",paraId:33,tocIndex:7},{value:"\u6309\u9700\u91CD\u65B0\u9A8C\u8BC1\uFF08On-demand revalidation\uFF09",paraId:33,tocIndex:7},{value:"\uFF0C\u6839\u636E\u4E8B\u4EF6\u624B\u52A8\u91CD\u65B0\u9A8C\u8BC1\u6570\u636E\u3002\u6309\u9700\u91CD\u65B0\u9A8C\u8BC1\u53C8\u53EF\u4EE5\u4F7F\u7528\u57FA\u4E8E\u6807\u7B7E\uFF08tag-based\uFF09\u548C\u57FA\u4E8E\u8DEF\u5F84\uFF08path-based\uFF09\u4E24\u79CD\u65B9\u6CD5\u91CD\u65B0\u9A8C\u8BC1\u6570\u636E\u3002\u9002\u7528\u4E8E\u9700\u8981\u5C3D\u5FEB\u5C55\u793A\u6700\u65B0\u6570\u636E\u7684\u573A\u666F\u3002",paraId:33,tocIndex:7},{value:"\u4F7F\u7528\u57FA\u4E8E\u65F6\u95F4\u7684\u91CD\u65B0\u9A8C\u8BC1\uFF0C\u4F60\u9700\u8981\u5728\u4F7F\u7528 fetch \u7684\u65F6\u5019\u8BBE\u7F6E ",paraId:34,tocIndex:8},{value:"next.revalidate",paraId:34,tocIndex:8},{value:" \u9009\u9879\uFF08\u4EE5\u79D2\u4E3A\u5355\u4F4D\uFF09\uFF1A",paraId:34,tocIndex:8},{value:`fetch('https://...', { next: { revalidate: 3600 } });
`,paraId:35,tocIndex:8},{value:"\u6216\u8005\u901A\u8FC7",paraId:36,tocIndex:8},{value:"\u8DEF\u7531\u6BB5\u914D\u7F6E\u9879",paraId:36,tocIndex:8},{value:"\u8FDB\u884C\u914D\u7F6E\uFF0C\u4F7F\u7528\u8FD9\u79CD\u65B9\u6CD5\uFF0C\u5B83\u4F1A\u91CD\u65B0\u9A8C\u8BC1\u8BE5\u8DEF\u7531\u6BB5\u6240\u6709\u7684 ",paraId:36,tocIndex:8},{value:"fetch",paraId:36,tocIndex:8},{value:" \u8BF7\u6C42\u3002",paraId:36,tocIndex:8},{value:`// layout.jsx | page.jsx | route.js
export const revalidate = 3600;
`,paraId:37,tocIndex:8},{value:"\u6CE8\uFF1A\u5728\u4E00\u4E2A\u9759\u6001\u6E32\u67D3\u7684\u8DEF\u7531\u4E2D\uFF0C\u5982\u679C\u4F60\u6709\u591A\u4E2A\u8BF7\u6C42\uFF0C\u6BCF\u4E2A\u8BF7\u6C42\u8BBE\u7F6E\u4E86\u4E0D\u540C\u7684\u91CD\u65B0\u9A8C\u8BC1\u65F6\u95F4\uFF0C\u5C06\u4F1A\u4F7F\u7528\u6700\u77ED\u7684\u65F6\u95F4\u7528\u4E8E\u6240\u6709\u7684\u8BF7\u6C42\u3002\u800C\u5BF9\u4E8E\u52A8\u6001\u6E32\u67D3\u7684\u8DEF\u7531\uFF0C\u6BCF\u4E00\u4E2A ",paraId:38,tocIndex:8},{value:"fetch",paraId:38,tocIndex:8},{value:"\u8BF7\u6C42\u90FD\u5C06\u72EC\u7ACB\u91CD\u65B0\u9A8C\u8BC1\u3002",paraId:38,tocIndex:8},{value:"\u4F7F\u7528\u6309\u9700\u91CD\u65B0\u9A8C\u8BC1\uFF0C\u5728",paraId:39,tocIndex:9},{value:"\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u6216\u8005 Server Action",paraId:39,tocIndex:9},{value:" \u4E2D\u901A\u8FC7\u8DEF\u5F84\uFF08 ",paraId:39,tocIndex:9},{value:"revalidatePath",paraId:39,tocIndex:9},{value:"\uFF09 \u6216\u7F13\u5B58\u6807\u7B7E ",paraId:39,tocIndex:9},{value:"revalidateTag",paraId:39,tocIndex:9},{value:" \u5B9E\u73B0\u3002",paraId:39,tocIndex:9},{value:"\u65B0\u5EFA ",paraId:40,tocIndex:10},{value:"app/api/revalidatePath/route.js",paraId:40,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:40,tocIndex:10},{value:`import { revalidatePath } from 'next/cache';

export async function GET(request) {
  const path = request.nextUrl.searchParams.get('path');

  if (path) {
    revalidatePath(path);
    return Response.json({ revalidated: true, now: Date.now() });
  }

  return Response.json({
    revalidated: false,
    now: Date.now(),
    message: 'Missing path to revalidate',
  });
}
`,paraId:41,tocIndex:10},{value:"\u6B64\u65F6\u8BBF\u95EE ",paraId:42,tocIndex:10},{value:"/api/revalidatePath?path=/",paraId:42,tocIndex:10},{value:" \u5C31\u4F1A\u66F4\u65B0 ",paraId:42,tocIndex:10},{value:"/",paraId:42,tocIndex:10},{value:" \u7684 fetch \u8BF7\u6C42\u8FD4\u56DE\u6570\u636E\uFF0C\u4EA4\u4E92\u6548\u679C\u5982\u4E0B\uFF1A",paraId:42,tocIndex:10},{value:"\u6B64\u65F6\u8BBF\u95EE ",paraId:43,tocIndex:10},{value:"/api/revalidatePath?path=/api/cache",paraId:43,tocIndex:10},{value:" \u5C31\u4F1A\u66F4\u65B0 ",paraId:43,tocIndex:10},{value:"/api/cache",paraId:43,tocIndex:10},{value:" \u7684 fetch \u8BF7\u6C42\u8FD4\u56DE\u6570\u636E\uFF0C\u4EA4\u4E92\u6548\u679C\u5982\u4E0B\uFF1A",paraId:43,tocIndex:10},{value:"\u6CE8\u610F\uFF1A\u8FD9\u4E24\u5F20\u56FE\u6F14\u793A\u7684\u662F\u5F00\u53D1\u6A21\u5F0F\u4E0B\u7684\u60C5\u51B5\uFF0C\u7528 revalidatePath \u786E\u5B9E\u66F4\u65B0\u4E86\u5BF9\u5E94\u8DEF\u5F84\u4E0A\u7684 fetch \u7F13\u5B58\u7ED3\u679C\u3002\u4F46\u5982\u679C\u5927\u5BB6\u90E8\u7F72\u5230\u751F\u4EA7\u7248\u672C\uFF0C\u4F60\u662F\u53D1\u73B0 revalidatePath \u53EA\u5BF9\u9875\u9762\u751F\u6548\uFF0C\u5BF9\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u5E76\u4E0D\u751F\u6548\u3002",paraId:44,tocIndex:10},{value:"\u8FD9\u662F\u56E0\u4E3A ",paraId:45,tocIndex:10},{value:"/api/cache",paraId:45,tocIndex:10},{value:" \u88AB\u9759\u6001\u6E32\u67D3\u4E86\uFF0C\u9996\u5148\u4F60\u8981\u5C06 ",paraId:45,tocIndex:10},{value:"/api/cache",paraId:45,tocIndex:10},{value:" \u8F6C\u4E3A\u52A8\u6001\u6E32\u67D3\uFF0C\u7136\u540E\u624D\u80FD\u6D4B\u8BD5 revalidatePath \u7684\u6548\u679C\u3002\u4F46\u662F\u8F6C\u4E3A\u52A8\u6001\u6E32\u67D3\uFF0C\u6BD4\u5982\u4F7F\u7528 cookies \u7B49\u51FD\u6570\uFF0C\u53C8\u4F1A\u89E6\u53D1 Next.js \u7684\u81EA\u52A8\u903B\u8F91\uFF0C\u8BA9 fetch \u8BF7\u6C42\u9000\u51FA\u7F13\u5B58\u3002",paraId:45,tocIndex:10},{value:"\u7B80\u800C\u8A00\u4E4B\uFF0C\u5982\u679C\u4F60\u60F3\u5728\u751F\u4EA7\u73AF\u5883\u6D4B\u8BD5 revalidatePath \u5BF9\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u7684\u5F71\u54CD\uFF0C\u4F60\u9700\u8981\u591A\u505A\u4E00\u4E9B\u914D\u7F6E\uFF1A",paraId:46,tocIndex:10},{value:`// \u8DEF\u7531\u52A8\u6001\u6E32\u67D3
export const revalidate = 0;
// fetch \u5F3A\u5236\u7F13\u5B58
export const fetchCache = 'force-cache';
export async function GET() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random');

  const data = await res.json();
  return Response.json({ data, now: Date.now() });
}
`,paraId:47,tocIndex:10},{value:"\u8FD9\u6837\u7684\u4EE3\u7801\u5728\u751F\u4EA7\u73AF\u5883\u4E0B\uFF0C\u662F\u53EF\u4EE5\u88AB revalidatePath \u91CD\u65B0\u9A8C\u8BC1\u7684\u3002\u6548\u679C\u540C\u5F00\u53D1\u6A21\u5F0F\u4E0B\u7684\u622A\u56FE\u3002",paraId:48,tocIndex:10},{value:"Next.js \u6709\u4E00\u4E2A\u8DEF\u7531\u6807\u7B7E\u7CFB\u7EDF\uFF0C\u53EF\u4EE5\u8DE8\u8DEF\u7531\u5B9E\u73B0\u591A\u4E2A fetch \u8BF7\u6C42\u91CD\u65B0\u9A8C\u8BC1\u3002\u5177\u4F53\u8FD9\u4E2A\u8FC7\u7A0B\u4E3A\uFF1A",paraId:49,tocIndex:11},{value:"\u4F7F\u7528 fetch \u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u4E00\u4E2A\u6216\u8005\u591A\u4E2A\u6807\u7B7E\u6807\u8BB0\u8BF7\u6C42",paraId:50,tocIndex:11},{value:"\u8C03\u7528 revalidateTag \u65B9\u6CD5\u91CD\u65B0\u9A8C\u8BC1\u8BE5\u6807\u7B7E\u5BF9\u5E94\u7684\u6240\u6709\u8BF7\u6C42",paraId:50,tocIndex:11},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:51,tocIndex:11},{value:`// app/page.js
export default async function Page() {
  const res = await fetch('https://...', { next: { tags: ['collection'] } });
  const data = await res.json();
  // ...
}
`,paraId:52,tocIndex:11},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u4E3A ",paraId:53,tocIndex:11},{value:"fetch",paraId:53,tocIndex:11},{value:" \u8BF7\u6C42\u6DFB\u52A0\u4E86\u4E00\u4E2A ",paraId:53,tocIndex:11},{value:"collection",paraId:53,tocIndex:11},{value:"\u6807\u7B7E\u3002\u5728 Server Action \u4E2D\u8C03\u7528 ",paraId:53,tocIndex:11},{value:"revalidateTag",paraId:53,tocIndex:11},{value:"\uFF0C\u5C31\u53EF\u4EE5\u8BA9\u6240\u6709\u5E26 ",paraId:53,tocIndex:11},{value:"collection",paraId:53,tocIndex:11},{value:" \u6807\u7B7E\u7684 fetch \u8BF7\u6C42\u91CD\u65B0\u9A8C\u8BC1\u3002",paraId:53,tocIndex:11},{value:`// app/actions.js
'use server';

import { revalidateTag } from 'next/cache';

export default async function action() {
  revalidateTag('collection');
}
`,paraId:54,tocIndex:11},{value:"\u8BA9\u6211\u4EEC\u771F\u7684\u5199\u4E2A\u4F8B\u5B50\u3002\u4FEE\u6539 ",paraId:55,tocIndex:11},{value:"app/page.js",paraId:55,tocIndex:11},{value:" \u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:55,tocIndex:11},{value:`async function getData() {
  const res = await fetch('https://api.thecatapi.com/v1/images/search', {
    next: { tags: ['collection'] },
  });
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return <img src={data[0].url} width="300" />;
}
`,paraId:56,tocIndex:11},{value:"\u4FEE\u6539 ",paraId:57,tocIndex:11},{value:"app/api/cache/route.js",paraId:57,tocIndex:11},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:57,tocIndex:11},{value:`export const revalidate = 0;
export const fetchCache = 'force-cache';

export async function GET() {
  const res = await fetch('https://dog.ceo/api/breeds/image/random', {
    next: { tags: ['collection'] },
  });

  const data = await res.json();
  return Response.json({ data, now: Date.now() });
}
`,paraId:58,tocIndex:11},{value:"\u65B0\u5EFA ",paraId:59,tocIndex:11},{value:"app/api/revalidateTag/route.js",paraId:59,tocIndex:11},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:59,tocIndex:11},{value:`import { revalidateTag } from 'next/cache';

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get('tag');
  revalidateTag(tag);
  return Response.json({ revalidated: true, now: Date.now() });
}
`,paraId:60,tocIndex:11},{value:"\u6B64\u65F6\u8BBF\u95EE ",paraId:61,tocIndex:11},{value:"/api/revalidateTag?tag=collection",paraId:61,tocIndex:11},{value:" \u5C31\u4F1A\u8BA9 ",paraId:61,tocIndex:11},{value:"/",paraId:61,tocIndex:11},{value:" \u9875\u9762\u548C ",paraId:61,tocIndex:11},{value:"/api/cache",paraId:61,tocIndex:11},{value:" \u63A5\u53E3\u7684\u6570\u636E\u90FD\u91CD\u65B0\u9A8C\u8BC1\uFF1A",paraId:61,tocIndex:11},{value:"\u5982\u679C\u5728\u5C1D\u8BD5\u91CD\u65B0\u9A8C\u8BC1\u7684\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u9519\u8BEF\uFF0C\u7F13\u5B58\u4F1A\u7EE7\u7EED\u63D0\u4F9B\u4E0A\u4E00\u4E2A\u91CD\u65B0\u751F\u6210\u7684\u6570\u636E\uFF0C\u800C\u5728\u4E0B\u4E00\u4E2A\u540E\u7EED\u8BF7\u6C42\u4E2D\uFF0CNext.js \u4F1A\u5C1D\u8BD5\u518D\u6B21\u91CD\u65B0\u9A8C\u8BC1\u6570\u636E\u3002",paraId:62,tocIndex:12},{value:"\u5F53 ",paraId:63,tocIndex:13},{value:"fetch",paraId:63,tocIndex:13},{value:" \u8BF7\u6C42\u6EE1\u8DB3\u8FD9\u4E9B\u6761\u4EF6\u65F6\u90FD\u4F1A\u9000\u51FA\u6570\u636E\u7F13\u5B58\uFF1A",paraId:63,tocIndex:13},{value:"fetch",paraId:64,tocIndex:13},{value:" \u8BF7\u6C42\u6DFB\u52A0\u4E86 ",paraId:64,tocIndex:13},{value:"cache: 'no-store'",paraId:64,tocIndex:13},{value:" \u9009\u9879",paraId:64,tocIndex:13},{value:"fetch",paraId:64,tocIndex:13},{value:" \u8BF7\u6C42\u6DFB\u52A0\u4E86 ",paraId:64,tocIndex:13},{value:"revalidate: 0",paraId:64,tocIndex:13},{value:" \u9009\u9879",paraId:64,tocIndex:13},{value:"fetch",paraId:64,tocIndex:13},{value:" \u8BF7\u6C42\u5728\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E2D\u5E76\u4F7F\u7528\u4E86 ",paraId:64,tocIndex:13},{value:"POST",paraId:64,tocIndex:13},{value:" \u65B9\u6CD5",paraId:64,tocIndex:13},{value:"\u4F7F\u7528",paraId:64,tocIndex:13},{value:"headers",paraId:64,tocIndex:13},{value:" \u6216 ",paraId:64,tocIndex:13},{value:"cookies",paraId:64,tocIndex:13},{value:" \u7684\u65B9\u6CD5\u4E4B\u540E\u4F7F\u7528 ",paraId:64,tocIndex:13},{value:"fetch",paraId:64,tocIndex:13},{value:"\u8BF7\u6C42",paraId:64,tocIndex:13},{value:"\u914D\u7F6E\u4E86\u8DEF\u7531\u6BB5\u9009\u9879 ",paraId:64,tocIndex:13},{value:"const dynamic = 'force-dynamic'",paraId:64,tocIndex:13},{value:"\u914D\u7F6E\u4E86\u8DEF\u7531\u6BB5\u9009\u9879 ",paraId:64,tocIndex:13},{value:"fetchCache",paraId:64,tocIndex:13},{value:" \uFF0C\u9ED8\u8BA4\u4F1A\u8DF3\u8FC7\u7F13\u5B58",paraId:64,tocIndex:13},{value:"fetch",paraId:64,tocIndex:13},{value:" \u8BF7\u6C42\u4F7F\u7528\u4E86 ",paraId:64,tocIndex:13},{value:"Authorization",paraId:64,tocIndex:13},{value:"\u6216\u8005 ",paraId:64,tocIndex:13},{value:"Cookie",paraId:64,tocIndex:13},{value:"\u8BF7\u6C42\u5934\uFF0C\u5E76\u4E14\u5728\u7EC4\u4EF6\u6811\u4E2D\u5176\u4E0A\u65B9\u8FD8\u6709\u4E00\u4E2A\u672A\u7F13\u5B58\u7684\u8BF7\u6C42",paraId:64,tocIndex:13},{value:"\u5728\u5177\u4F53\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u5982\u679C\u4F60\u4E0D\u60F3\u7F13\u5B58\u67D0\u4E2A\u5355\u72EC\u8BF7\u6C42\uFF1A",paraId:65,tocIndex:13},{value:`// layout.js | page.js
fetch('https://...', { cache: 'no-store' });
`,paraId:66,tocIndex:13},{value:"\u4E0D\u7F13\u5B58\u591A\u4E2A\u8BF7\u6C42\uFF0C\u53EF\u4EE5\u501F\u52A9",paraId:67,tocIndex:13},{value:"\u8DEF\u7531\u6BB5\u914D\u7F6E\u9879",paraId:67,tocIndex:13},{value:"\uFF1A",paraId:67,tocIndex:13},{value:`// layout.js | page.js
export const dynamic = 'force-dynamic';
`,paraId:68,tocIndex:13},{value:"Next.js \u63A8\u8350\u5355\u72EC\u914D\u7F6E\u6BCF\u4E2A\u8BF7\u6C42\u7684\u7F13\u5B58\u884C\u4E3A\uFF0C\u8FD9\u53EF\u4EE5\u8BA9\u4F60\u66F4\u7CBE\u7EC6\u5316\u7684\u63A7\u5236\u7F13\u5B58\u884C\u4E3A\u3002",paraId:69,tocIndex:13},{value:"\u4E5F\u4E0D\u662F\u6240\u6709\u65F6\u5019\u90FD\u80FD\u4F7F\u7528 fetch \u8BF7\u6C42\uFF0C\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u4E0D\u652F\u6301\u6216\u8005\u66B4\u9732 fetch \u65B9\u6CD5\u7684\u4E09\u65B9\u5E93\uFF08\u5982\u6570\u636E\u5E93\u3001CMS \u6216 ORM \u5BA2\u6237\u7AEF\uFF09\uFF0C\u4F46\u53C8\u60F3\u5B9E\u73B0\u6570\u636E\u7F13\u5B58\u673A\u5236\uFF0C\u90A3\u4F60\u53EF\u4EE5\u4F7F\u7528 React \u7684 ",paraId:70,tocIndex:14},{value:"cache",paraId:70,tocIndex:14},{value:" \u51FD\u6570\u548C\u8DEF\u7531\u6BB5\u914D\u7F6E\u9879\u6765\u5B9E\u73B0\u8BF7\u6C42\u7684\u7F13\u5B58\u548C\u91CD\u65B0\u9A8C\u8BC1\u3002",paraId:70,tocIndex:14},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:71,tocIndex:14},{value:`// app/utils.js
import { cache } from 'react';

export const getItem = cache(async (id) => {
  const item = await db.item.findUnique({ id });
  return item;
});
`,paraId:72,tocIndex:14},{value:"\u73B0\u5728\u6211\u4EEC\u8C03\u7528\u4E24\u6B21 ",paraId:73,tocIndex:14},{value:"getItem",paraId:73,tocIndex:14},{value:" \uFF1A",paraId:73,tocIndex:14},{value:`// app/item/[id]/layout.js
import { getItem } from '@/utils/get-item';

export const revalidate = 3600;

export default async function Layout({ params: { id } }) {
  const item = await getItem(id);
  // ...
}
`,paraId:74,tocIndex:14},{value:`// app/item/[id]/page.js
import { getItem } from '@/utils/get-item';

export const revalidate = 3600;

export default async function Page({ params: { id } }) {
  const item = await getItem(id);
  // ...
}
`,paraId:75,tocIndex:14},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5C3D\u7BA1 ",paraId:76,tocIndex:14},{value:"getItem",paraId:76,tocIndex:14},{value:" \u88AB\u8C03\u7528\u4E24\u6B21\uFF0C\u4F46\u53EA\u4F1A\u4EA7\u751F\u4E00\u6B21\u6570\u636E\u5E93\u67E5\u8BE2\u3002",paraId:76,tocIndex:14},{value:"\u6CE8\uFF1A\u8FD9\u91CC\u7684\u4EE3\u7801\u5E76\u4E0D\u662F\u5B8C\u6574\u53EF\u8FD0\u884C\u7684\uFF0C\u5982\u679C\u60F3\u8981\u7EC6\u81F4\u4E86\u89E3 React Cache \u51FD\u6570\u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u67E5\u770B\uFF1A ",paraId:77,tocIndex:14},{value:"\uFF08\u6280\u5DE7\uFF09\u5F53 Next.js \u9047\u5230\u9891\u7E41\u91CD\u590D\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u65F6\uFF0C\u8BB0\u4F4F\u4F7F\u7528 React \u7684 cache \u51FD\u6570",paraId:77,tocIndex:14},{value:"\u5982\u679C\u4F60\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u6570\u636E\uFF0C\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u8C03\u7528\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u3002\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4F1A\u5728\u670D\u52A1\u7AEF\u88AB\u6267\u884C\uFF0C\u7136\u540E\u5C06\u6570\u636E\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u9002\u7528\u4E8E\u4E0D\u60F3\u66B4\u9732\u654F\u611F\u4FE1\u606F\u7ED9\u5BA2\u6237\u7AEF\uFF08\u6BD4\u5982 API tokens\uFF09\u7684\u573A\u666F\u3002",paraId:78,tocIndex:15},{value:"\u5982\u679C\u4F60\u4F7F\u7528\u7684\u662F\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u65E0\u987B\u501F\u52A9\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\uFF0C\u76F4\u63A5\u83B7\u53D6\u6570\u636E\u5373\u53EF\u3002",paraId:79,tocIndex:15},{value:"\u4F60\u4E5F\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\u4E09\u65B9\u7684\u5E93\u5982 ",paraId:80,tocIndex:16},{value:"SWR",paraId:80,tocIndex:16},{value:" \u6216 ",paraId:80,tocIndex:16},{value:"React Query",paraId:80,tocIndex:16},{value:" \u6765\u83B7\u53D6\u6570\u636E\u3002\u8FD9\u4E9B\u5E93\u90FD\u6709\u63D0\u4F9B\u81EA\u5DF1\u7684 API \u5B9E\u73B0\u8BB0\u5FC6\u8BF7\u6C42\u3001\u7F13\u5B58\u3001\u91CD\u65B0\u9A8C\u8BC1\u548C\u66F4\u6539\u6570\u636E\u3002",paraId:80,tocIndex:16},{value:"\u6709\u4E00\u4E9B\u5728 React \u548C Next.js \u4E2D\u83B7\u53D6\u6570\u636E\u7684\u5EFA\u8BAE\u548C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u672C\u8282\u6765\u4ECB\u7ECD\u4E00\u4E0B\uFF1A",paraId:81,tocIndex:17},{value:"\u5C3D\u53EF\u80FD\u5728\u670D\u52A1\u7AEF\u83B7\u53D6\u6570\u636E\uFF0C\u8FD9\u6837\u505A\u6709\u5F88\u591A\u597D\u5904\uFF0C\u6BD4\u5982\uFF1A",paraId:82,tocIndex:18},{value:"\u53EF\u4EE5\u76F4\u63A5\u8BBF\u95EE\u540E\u7AEF\u8D44\u6E90\uFF08\u5982\u6570\u636E\u5E93\uFF09",paraId:83,tocIndex:18},{value:"\u9632\u6B62\u654F\u611F\u4FE1\u606F\u6CC4\u6F0F",paraId:83,tocIndex:18},{value:"\u51CF\u5C11\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u4E4B\u95F4\u7684\u6765\u56DE\u901A\u4FE1\uFF0C\u52A0\u5FEB\u54CD\u5E94\u65F6\u95F4",paraId:83,tocIndex:18},{value:"...",paraId:83,tocIndex:18},{value:"\u5982\u679C\u7EC4\u4EF6\u6811\u4E2D\u7684\u591A\u4E2A\u7EC4\u4EF6\u4F7F\u7528\u76F8\u540C\u7684\u6570\u636E\uFF0C\u65E0\u987B\u5148\u5168\u5C40\u83B7\u53D6\uFF0C\u518D\u901A\u8FC7 props \u4F20\u9012\uFF0C\u4F60\u53EF\u4EE5\u76F4\u63A5\u5728\u9700\u8981\u7684\u5730\u65B9\u4F7F\u7528 ",paraId:84,tocIndex:19},{value:"fetch",paraId:84,tocIndex:19},{value:" \u6216\u8005 React ",paraId:84,tocIndex:19},{value:"cache",paraId:84,tocIndex:19},{value:" \u83B7\u53D6\u6570\u636E\uFF0C\u4E0D\u7528\u62C5\u5FC3\u591A\u6B21\u8BF7\u6C42\u9020\u6210\u7684\u6027\u80FD\u95EE\u9898\uFF0C\u56E0\u4E3A ",paraId:84,tocIndex:19},{value:"fetch",paraId:84,tocIndex:19},{value:" \u8BF7\u6C42\u4F1A\u81EA\u52A8\u88AB\u8BB0\u5FC6\u5316\u3002\u8FD9\u4E5F\u540C\u6837\u9002\u7528\u4E8E\u5E03\u5C40\uFF0C\u6BD5\u7ADF\u672C\u6765\u7236\u5B50\u5E03\u5C40\u4E4B\u95F4\u4E5F\u4E0D\u80FD\u4F20\u9012\u6570\u636E\u3002",paraId:84,tocIndex:19},{value:"Streaming \u548C ",paraId:85,tocIndex:20},{value:"Suspense",paraId:85,tocIndex:20},{value:"\u90FD\u662F React \u7684\u529F\u80FD\uFF0C\u5141\u8BB8\u4F60\u589E\u91CF\u4F20\u8F93\u5185\u5BB9\u4EE5\u53CA\u6E10\u8FDB\u5F0F\u6E32\u67D3 UI \u5355\u5143\u3002\u9875\u9762\u53EF\u4EE5\u76F4\u63A5\u6E32\u67D3\u90E8\u5206\u5185\u5BB9\uFF0C\u5269\u4F59\u83B7\u53D6\u6570\u636E\u7684\u90E8\u5206\u4F1A\u5C55\u793A\u52A0\u8F7D\u6001\uFF0C\u8FD9\u4E5F\u610F\u5473\u7740\u7528\u6237\u4E0D\u9700\u8981\u7B49\u5230\u9875\u9762\u5B8C\u5168\u52A0\u8F7D\u5B8C\u624D\u80FD\u4E0E\u5176\u4EA4\u4E92\u3002",paraId:85,tocIndex:20},{value:"\u6CE8\uFF1A\u5173\u4E8E Suspense \u548C Streaming\uFF0C\u6211\u4EEC\u4F1A\u5728 ",paraId:86,tocIndex:20},{value:"\u300A\u6E32\u67D3\u7BC7 | Suspense \u4E0E Streaming\u300B",paraId:86,tocIndex:20},{value:" \u4E2D\u8BE6\u7EC6\u8BB2\u89E3\u3002",paraId:86,tocIndex:20},{value:"\u5728 React \u7EC4\u4EF6\u5185\u83B7\u53D6\u6570\u636E\u65F6\uFF0C\u6709\u4E24\u79CD\u6570\u636E\u83B7\u53D6\u6A21\u5F0F\uFF0C\u5E76\u884C\u548C\u4E32\u884C\u3002",paraId:87,tocIndex:21},{value:"\u6240\u8C13\u4E32\u884C\u6570\u636E\u83B7\u53D6\uFF0C\u6570\u636E\u8BF7\u6C42\u76F8\u4E92\u4F9D\u8D56\uFF0C\u5F62\u6210\u7011\u5E03\u7ED3\u6784\uFF0C\u8FD9\u79CD\u884C\u4E3A\u6709\u7684\u65F6\u5019\u662F\u5FC5\u8981\u7684\uFF0C\u4F46\u4E5F\u4F1A\u5BFC\u81F4\u52A0\u8F7D\u65F6\u95F4\u66F4\u957F\u3002",paraId:88,tocIndex:21},{value:"\u6240\u8C13\u5E76\u884C\u6570\u636E\u83B7\u53D6\uFF0C\u8BF7\u6C42\u540C\u65F6\u53D1\u751F\u5E76\u52A0\u8F7D\u6570\u636E\uFF0C\u8FD9\u4F1A\u51CF\u5C11\u52A0\u8F7D\u6570\u636E\u6240\u9700\u7684\u603B\u65F6\u95F4\u3002",paraId:89,tocIndex:21},{value:"\u6211\u4EEC\u5148\u8BF4\u8BF4\u4E32\u884C\u6570\u636E\u83B7\u53D6\uFF0C\u76F4\u63A5\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:90,tocIndex:21},{value:`// app/artist/page.js
// ...

async function Playlists({ artistID }) {
  // \u7B49\u5F85 playlists \u6570\u636E
  const playlists = await getArtistPlaylists(artistID);

  return (
    <ul>
      {playlists.map((playlist) => (
        <li key={playlist.id}>{playlist.name}</li>
      ))}
    </ul>
  );
}

export default async function Page({ params: { username } }) {
  // \u7B49\u5F85 artist \u6570\u636E
  const artist = await getArtist(username);

  return (
    <>
      <h1>{artist.name}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Playlists artistID={artist.id} />
      </Suspense>
    </>
  );
}
`,paraId:91,tocIndex:21},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",paraId:92,tocIndex:21},{value:"Playlists",paraId:92,tocIndex:21},{value:" \u7EC4\u4EF6\u53EA\u6709\u5F53 ",paraId:92,tocIndex:21},{value:"Artist",paraId:92,tocIndex:21},{value:" \u7EC4\u4EF6\u83B7\u5F97\u6570\u636E\u624D\u4F1A\u5F00\u59CB\u83B7\u53D6\u6570\u636E\uFF0C\u56E0\u4E3A ",paraId:92,tocIndex:21},{value:"Playlists",paraId:92,tocIndex:21},{value:" \u7EC4\u4EF6\u4F9D\u8D56 ",paraId:92,tocIndex:21},{value:"artistId",paraId:92,tocIndex:21},{value:" \u8FD9\u4E2A prop\u3002\u8FD9\u4E5F\u5F88\u5BB9\u6613\u7406\u89E3\uFF0C\u6BD5\u7ADF\u53EA\u6709\u5148\u77E5\u9053\u4E86\u662F\u54EA\u4F4D\u827A\u672F\u5BB6\uFF0C\u624D\u80FD\u83B7\u53D6\u8FD9\u4F4D\u827A\u672F\u5BB6\u5BF9\u5E94\u7684\u66F2\u76EE\u3002",paraId:92,tocIndex:21},{value:"\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:93,tocIndex:21},{value:"loading.js",paraId:93,tocIndex:21},{value:" \u6216\u8005 React \u7684 ",paraId:93,tocIndex:21},{value:"<Suspense>",paraId:93,tocIndex:21},{value:" \u7EC4\u4EF6\uFF0C\u5C55\u793A\u4E00\u4E2A\u5373\u65F6\u52A0\u8F7D\u72B6\u6001\uFF0C\u9632\u6B62\u6574\u4E2A\u8DEF\u7531\u88AB\u6570\u636E\u8BF7\u6C42\u963B\u585E\uFF0C\u800C\u4E14\u7528\u6237\u8FD8\u53EF\u4EE5\u4E0E\u672A\u88AB\u963B\u585E\u7684\u90E8\u5206\u8FDB\u884C\u4EA4\u4E92\u3002",paraId:93,tocIndex:21},{value:"\u5173\u4E8E\u963B\u585E\u6570\u636E\u8BF7\u6C42\uFF1A",paraId:94,tocIndex:21},{value:"\u4E00\u79CD\u9632\u6B62\u51FA\u73B0\u4E32\u884C\u6570\u636E\u8BF7\u6C42\u7684\u65B9\u6CD5\u662F\u5728\u5E94\u7528\u7A0B\u5E8F\u6839\u90E8\u5168\u5C40\u83B7\u53D6\u6570\u636E\uFF0C\u4F46\u8FD9\u4F1A\u963B\u585E\u5176\u4E0B\u6240\u6709\u8DEF\u7531\u6BB5\u7684\u6E32\u67D3\uFF0C\u76F4\u5230\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\u3002",paraId:95,tocIndex:21},{value:"\u4EFB\u4F55\u4F7F\u7528 ",paraId:95,tocIndex:21},{value:"await",paraId:95,tocIndex:21},{value:" \u7684 ",paraId:95,tocIndex:21},{value:"fetch",paraId:95,tocIndex:21},{value:" \u8BF7\u6C42\u90FD\u4F1A\u963B\u585E\u6E32\u67D3\u548C\u4E0B\u65B9\u6240\u6709\u7EC4\u4EF6\u7684\u6570\u636E\u8BF7\u6C42\uFF0C\u9664\u975E\u5B83\u4EEC\u4F7F\u7528\u4E86 ",paraId:95,tocIndex:21},{value:"<Suspense>",paraId:95,tocIndex:21},{value:" \u6216\u8005 ",paraId:95,tocIndex:21},{value:"loading.js",paraId:95,tocIndex:21},{value:"\u3002\u53E6\u4E00\u79CD\u66FF\u4EE3\u65B9\u5F0F\u5C31\u662F\u4F7F\u7528\u5E76\u884C\u6570\u636E\u8BF7\u6C42\u6216\u8005\u9884\u52A0\u8F7D\u6A21\u5F0F\u3002",paraId:95,tocIndex:21},{value:"\u8981\u5B9E\u73B0\u5E76\u884C\u8BF7\u6C42\u6570\u636E\uFF0C\u4F60\u53EF\u4EE5\u5728\u4F7F\u7528\u6570\u636E\u7684\u7EC4\u4EF6\u5916\u5B9A\u4E49\u8BF7\u6C42\uFF0C\u7136\u540E\u5728\u7EC4\u4EF6\u5185\u90E8\u8C03\u7528\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:96,tocIndex:22},{value:`import Albums from './albums';

// \u7EC4\u4EF6\u5916\u5B9A\u4E49
async function getArtist(username) {
  const res = await fetch(\`https://api.example.com/artist/\${username}\`);
  return res.json();
}

async function getArtistAlbums(username) {
  const res = await fetch(\`https://api.example.com/artist/\${username}/albums\`);
  return res.json();
}

export default async function Page({ params: { username } }) {
  // \u7EC4\u4EF6\u5185\u8C03\u7528\uFF0C\u8FD9\u91CC\u662F\u5E76\u884C\u7684
  const artistData = getArtist(username);
  const albumsData = getArtistAlbums(username);

  // \u7B49\u5F85 promise resolve
  const [artist, albums] = await Promise.all([artistData, albumsData]);

  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums}></Albums>
    </>
  );
}
`,paraId:97,tocIndex:22},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",paraId:98,tocIndex:22},{value:"getArtist",paraId:98,tocIndex:22},{value:" \u548C ",paraId:98,tocIndex:22},{value:"getArtistAlbums",paraId:98,tocIndex:22},{value:" \u51FD\u6570\u90FD\u662F\u5728 ",paraId:98,tocIndex:22},{value:"Page",paraId:98,tocIndex:22},{value:" \u7EC4\u4EF6\u5916\u5B9A\u4E49\uFF0C\u7136\u540E\u5728 ",paraId:98,tocIndex:22},{value:"Page",paraId:98,tocIndex:22},{value:" \u7EC4\u4EF6\u5185\u90E8\u8C03\u7528\u3002\u7528\u6237\u9700\u8981\u7B49\u5F85\u4E24\u4E2A promise \u90FD resolve \u540E\u624D\u80FD\u770B\u5230\u7ED3\u679C\u3002",paraId:98,tocIndex:22},{value:"\u4E3A\u4E86\u63D0\u5347\u7528\u6237\u4F53\u9A8C\uFF0C\u53EF\u4EE5\u4F7F\u7528 Suspense \u7EC4\u4EF6\u6765\u5206\u89E3\u6E32\u67D3\u5DE5\u4F5C\uFF0C\u5C3D\u5FEB\u5C55\u793A\u51FA\u90E8\u5206\u7ED3\u679C\u3002",paraId:99,tocIndex:22},{value:"\u9632\u6B62\u51FA\u73B0\u4E32\u884C\u8BF7\u6C42\u7684\u53E6\u5916\u4E00\u79CD\u65B9\u5F0F\u662F\u4F7F\u7528\u9884\u52A0\u8F7D\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:100,tocIndex:23},{value:`// app/article/[id]/page.js
import Article, { preload, checkIsAvailable } from './components/Article';

export default async function Page({ params: { id } }) {
  // \u83B7\u53D6\u6587\u7AE0\u6570\u636E
  preload(id);
  // \u6267\u884C\u53E6\u4E00\u4E2A\u5F02\u6B65\u4EFB\u52A1\uFF0C\u8FD9\u91CC\u662F\u4F2A\u4EE3\u7801\uFF0C\u6BD4\u5982\u5224\u65AD\u6587\u7AE0\u662F\u5426\u6709\u6743\u9650\u8BBF\u95EE
  const isAvailable = await checkIsAvailable();

  return isAvailable ? <Article id={id} /> : null;
}
`,paraId:101,tocIndex:23},{value:"\u800C\u5728\u5177\u4F53\u7684 preload \u51FD\u6570\u4E2D\uFF0C\u5219\u8981\u642D\u914D React \u7684 cache \u51FD\u6570\u4E00\u8D77\u4F7F\u7528\uFF1A",paraId:102,tocIndex:23},{value:`// components/Article.js
import { getArticle } from '@/utils/get-article';
import { cache } from 'react';

export const getArticle = cache(async (id) => {
  // ...
});

export const preload = (id) => {
  void getArticle(id);
};

export const checkIsAvailable = (id) => {
  // ...
};

export default async function Article({ id }) {
  const result = await getArticle(id);
  // ...
}
`,paraId:103,tocIndex:23},{value:"cache",paraId:104},{value:"server-only",paraId:104},{value:"\u4F60\u53EF\u4EE5\u5C06 ",paraId:105,tocIndex:24},{value:"cache",paraId:105,tocIndex:24},{value:" \u51FD\u6570\uFF0C",paraId:105,tocIndex:24},{value:"preload",paraId:105,tocIndex:24},{value:" \u6A21\u5F0F\u548C ",paraId:105,tocIndex:24},{value:"server-only",paraId:105,tocIndex:24},{value:" \u5305\u4E00\u8D77\u4F7F\u7528\uFF0C\u521B\u5EFA\u4E00\u4E2A\u53EF\u5728\u6574\u4E2A\u5E94\u7528\u4F7F\u7528\u7684\u6570\u636E\u8BF7\u6C42\u5DE5\u5177\u51FD\u6570\u3002",paraId:105,tocIndex:24},{value:`// utils/get-article.js
import { cache } from 'react';
import 'server-only';

export const preloadArticle = (id) => {
  void getArticle(id);
};

export const getArticle = cache(async (id) => {
  // ...
});
`,paraId:106,tocIndex:24},{value:"\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u63D0\u524D\u83B7\u53D6\u6570\u636E\u3001\u7F13\u5B58\u8FD4\u56DE\u7ED3\u679C\uFF0C\u5E76\u4FDD\u8BC1\u6570\u636E\u83B7\u53D6\u53EA\u53D1\u751F\u5728\u670D\u52A1\u7AEF\u3002\u6B64\u5916\uFF0C\u5E03\u5C40\u3001\u9875\u9762\u3001\u7EC4\u4EF6\u90FD\u53EF\u4EE5\u4F7F\u7528 ",paraId:107,tocIndex:24},{value:"utils/get-article.js",paraId:107,tocIndex:24},{value:"\u6CE8\uFF1A\u5982\u679C\u60F3\u8981\u7EC6\u81F4\u4E86\u89E3 preload \u51FD\u6570\u548C server-only \u4EE5\u53CA cache \u7684\u7279\u6027\uFF0C\u53EF\u4EE5\u67E5\u770B\uFF1A ",paraId:108,tocIndex:24},{value:"\uFF08\u6280\u5DE7\uFF09\u5F53 Next.js \u9047\u5230\u9891\u7E41\u91CD\u590D\u7684\u6570\u636E\u5E93\u64CD\u4F5C\u65F6\uFF0C\u8BB0\u4F4F\u4F7F\u7528 React \u7684 cache \u51FD\u6570",paraId:108,tocIndex:24},{value:"\u606D\u559C\u4F60\uFF0C\u5B8C\u6210\u4E86\u672C\u7BC7\u5185\u5BB9\u7684\u5B66\u4E60\uFF01",paraId:109,tocIndex:25},{value:"\u8FD9\u4E00\u8282\u6211\u4EEC\u4ECB\u7ECD\u4E86\u8BF7\u6C42\u6570\u636E\u7684\u56DB\u79CD\u65B9\u5F0F\uFF0C\u91CD\u70B9\u4ECB\u7ECD\u4E86\u670D\u52A1\u7AEF\u4F7F\u7528 fetch \u7684\u65B9\u5F0F\uFF0C\u8FD9\u662F\u56E0\u4E3A Next.js \u62D3\u5C55\u4E86\u539F\u751F\u7684 fetch\uFF0C\u589E\u52A0\u4E86\u6570\u636E\u7F13\u5B58\u548C\u91CD\u65B0\u9A8C\u8BC1\u7684\u903B\u8F91\u3002\u5728 Next.js \u4E2D\uFF0C\u4E3A\u4E86\u63D0\u9AD8\u6027\u80FD\uFF0C\u5E94\u8BE5\u5C3D\u53EF\u80FD\u7684\u4F7F\u7528\u7F13\u5B58\uFF0C\u4F46\u4E3A\u4E86\u4FDD\u8BC1\u6570\u636E\u7684\u65F6\u6548\u6027\uFF0C\u4E5F\u5E94\u8BE5\u8BBE\u7F6E\u5408\u7406\u7684\u91CD\u65B0\u9A8C\u8BC1\u903B\u8F91\u3002Next.js \u63A8\u8350\u5355\u72EC\u914D\u7F6E\u6BCF\u4E2A\u8BF7\u6C42\u7684\u7F13\u5B58\u884C\u4E3A\uFF0C\u8FD9\u53EF\u4EE5\u8BA9\u4F60\u66F4\u7CBE\u7EC6\u5316\u7684\u63A7\u5236\u7F13\u5B58\u884C\u4E3A\u3002",paraId:110,tocIndex:25},{value:"\u4ECB\u7ECD\u5B8C\u56DB\u79CD\u6570\u636E\u8BF7\u6C42\u65B9\u5F0F\u540E\uFF0CNext.js \u63D0\u4F9B\u4E86\u4E00\u4E9B\u83B7\u53D6\u6570\u636E\u7684\u5EFA\u8BAE\u548C\u6700\u4F73\u5B9E\u8DF5\uFF0C\u6B63\u662F\u56E0\u4E3A\u6709\u4E86\u5F3A\u5927\u7684\u7F13\u5B58\u529F\u80FD\uFF0C\u6240\u4EE5\u5728\u4E66\u5199\u4EE3\u7801\u7684\u65F6\u5019\u53EF\u4EE5\u5C31\u5730\u83B7\u53D6\u6570\u636E\uFF0C\u800C\u4E0D\u7528\u62C5\u5FC3\u76F8\u540C\u8BF7\u6C42\u591A\u6B21\u53D1\u9001\u9020\u6210\u7684\u6027\u80FD\u5F71\u54CD\u3002",paraId:111,tocIndex:25},{value:"Data Fetching: Fetching, Caching, and Revalidating | Next.js",paraId:112,tocIndex:26},{value:"Data Fetching: Data Fetching Patterns | Next.js",paraId:112,tocIndex:26}]}}]);
