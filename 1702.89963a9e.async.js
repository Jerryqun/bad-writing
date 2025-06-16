"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1702],{1702:function(n,a,e){e.r(a),e.d(a,{texts:function(){return t}});const t=[{value:"\u672C\u7BC7\u6211\u4EEC\u8BB2\u89E3\u8BF7\u6C42\u76F8\u5173\u7684\u5E38\u7528\u65B9\u6CD5\uFF0C\u6709\uFF1A",paraId:0,tocIndex:0},{value:"generateStaticParams",paraId:1,tocIndex:0},{value:"generateViewport",paraId:1,tocIndex:0},{value:"revalidatePath",paraId:1,tocIndex:0},{value:"revalidateTag",paraId:1,tocIndex:0},{value:"unstable_cache",paraId:1,tocIndex:0},{value:"unstable_noStore",paraId:1,tocIndex:0},{value:"useSelectedLayoutSegment",paraId:1,tocIndex:0},{value:"useSelectedLayoutSegments",paraId:1,tocIndex:0},{value:"\u7528\u5230\u7684\u65F6\u5019\u5230\u6B64\u7BC7\u67E5\u770B\u5177\u4F53\u7684\u8BED\u6CD5\u5373\u53EF\u3002",paraId:2,tocIndex:0},{value:"generateStaticParams",paraId:3,tocIndex:2},{value:"\u548C\u52A8\u6001\u8DEF\u7531\u4E00\u8D77\u4F7F\u7528\uFF0C\u7528\u4E8E\u5728\u6784\u5EFA\u65F6\u9759\u6001\u751F\u6210\u8DEF\u7531\uFF1A",paraId:3,tocIndex:2},{value:`// app/product/[id]/page.js
export function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

// \u5BF9\u5E94\u4F1A\u751F\u6210 3 \u4E2A\u9759\u6001\u8DEF\u7531\uFF1A
// - /product/1
// - /product/2
// - /product/3
export default function Page({ params }) {
  const { id } = params;
  // ...
}
`,paraId:4,tocIndex:2},{value:"\u53EF\u4EE5\u5728 ",paraId:5,tocIndex:2},{value:"generateStaticParams",paraId:5,tocIndex:2},{value:" \u4F7F\u7528 fetch \u8BF7\u6C42\uFF0C\u8FD9\u4E2A\u4F8B\u5B50\u66F4\u8D34\u8FD1\u5B9E\u9645\u7684\u5F00\u53D1\u573A\u666F\uFF1A",paraId:5,tocIndex:2},{value:`// app/blog/[slug]/page.js
export async function generateStaticParams() {
  const posts = await fetch('https://.../posts').then((res) => res.json());

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page({ params }) {
  const { slug } = params;
  // ...
}
`,paraId:6,tocIndex:2},{value:"\u5173\u4E8E ",paraId:7,tocIndex:2},{value:"generateStaticParams",paraId:7,tocIndex:2},{value:"\uFF1A",paraId:7,tocIndex:2},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:8,tocIndex:2},{value:"dynamicParams",paraId:8,tocIndex:2},{value:" \u8DEF\u7531\u6BB5\u914D\u7F6E\u63A7\u5236\u5F53\u8BBF\u95EE\u4E0D\u662F\u7531 ",paraId:8,tocIndex:2},{value:"generateStaticParams",paraId:8,tocIndex:2},{value:" \u751F\u6210\u7684\u52A8\u6001\u6BB5\u65F6\u53D1\u751F\u7684\u60C5\u51B5",paraId:8,tocIndex:2},{value:"\u5728 ",paraId:8,tocIndex:2},{value:"next dev",paraId:8,tocIndex:2},{value:"\u7684\u65F6\u5019\uFF0C\u5F53\u4F60\u5BFC\u822A\u5230\u8DEF\u7531\u65F6\uFF0C",paraId:8,tocIndex:2},{value:"generateStaticParams",paraId:8,tocIndex:2},{value:"\u624D\u4F1A\u88AB\u8C03\u7528",paraId:8,tocIndex:2},{value:"\u5728 ",paraId:8,tocIndex:2},{value:"next build",paraId:8,tocIndex:2},{value:"\u7684\u65F6\u5019\uFF0C",paraId:8,tocIndex:2},{value:"generateStaticParams",paraId:8,tocIndex:2},{value:" \u4F1A\u5728\u5BF9\u5E94\u7684\u5E03\u5C40\u6216\u9875\u9762\u751F\u6210\u4E4B\u524D\u8FD0\u884C",paraId:8,tocIndex:2},{value:"\u5728 \u91CD\u65B0\u9A8C\u8BC1\uFF08ISR\uFF09\u7684\u65F6\u5019\uFF0C",paraId:8,tocIndex:2},{value:"generateStaticParams",paraId:8,tocIndex:2},{value:" \u4E0D\u4F1A\u518D\u6B21\u88AB\u8C03\u7528",paraId:8,tocIndex:2},{value:"generateStaticParams",paraId:8,tocIndex:2},{value:" \u66FF\u4EE3\u4E86 Pages Router \u4E0B\u7684 ",paraId:8,tocIndex:2},{value:"getStaticPaths",paraId:8,tocIndex:2},{value:" \u51FD\u6570\u7684\u529F\u80FD",paraId:8,tocIndex:2},{value:"\u4E0A\u9762\u8FD9\u4E2A\u4F8B\u5B50\u662F\u5904\u7406\u5355\u4E2A\u52A8\u6001\u6BB5\uFF0C",paraId:9,tocIndex:2},{value:"generateStaticParams",paraId:9,tocIndex:2},{value:" \u4E5F\u53EF\u4EE5\u5904\u7406\u591A\u4E2A\u52A8\u6001\u6BB5\uFF1A",paraId:9,tocIndex:2},{value:`// app/products/[category]/[product]/page.js
export function generateStaticParams() {
  return [
    { category: 'a', product: '1' },
    { category: 'b', product: '2' },
    { category: 'c', product: '3' },
  ];
}

// \u5BF9\u5E94\u4F1A\u751F\u6210 3 \u4E2A\u9759\u6001\u8DEF\u7531\uFF1A
// - /products/a/1
// - /products/b/2
// - /products/c/3
export default function Page({ params }) {
  const { category, product } = params;
  // ...
}
`,paraId:10,tocIndex:2},{value:"\u4E5F\u53EF\u4EE5\u5904\u7406 Catch-all \u52A8\u6001\u6BB5\uFF1A",paraId:11,tocIndex:2},{value:`// app/product/[...slug]/page.js
export function generateStaticParams() {
  return [{ slug: ['a', '1'] }, { slug: ['b', '2'] }, { slug: ['c', '3'] }];
}

// \u5BF9\u5E94\u4F1A\u751F\u6210 3 \u4E2A\u9759\u6001\u8DEF\u7531\uFF1A
// - /product/a/1
// - /product/b/2
// - /product/c/3
export default function Page({ params }) {
  const { slug } = params;
  // ...
}
`,paraId:12,tocIndex:2},{value:"generateStaticParams",paraId:13,tocIndex:3},{value:" \u652F\u6301\u4F20\u5165\u4E00\u4E2A\u53EF\u9009 ",paraId:13,tocIndex:3},{value:"options.params",paraId:13,tocIndex:3},{value:" \u53C2\u6570\u3002\u5982\u679C\u4E00\u4E2A\u8DEF\u7531\u4E2D\u7684\u591A\u4E2A\u52A8\u6001\u6BB5\u90FD\u4F7F\u7528\u4E86 ",paraId:13,tocIndex:3},{value:"generateStaticParams",paraId:13,tocIndex:3},{value:"\uFF0C\u5B50 ",paraId:13,tocIndex:3},{value:"generateStaticParams",paraId:13,tocIndex:3},{value:" \u51FD\u6570\u4F1A\u4E3A\u6BCF\u4E00\u4E2A\u7236 ",paraId:13,tocIndex:3},{value:"generateStaticParams",paraId:13,tocIndex:3},{value:"\u751F\u6210\u7684 ",paraId:13,tocIndex:3},{value:"params",paraId:13,tocIndex:3},{value:" \u6267\u884C\u4E00\u6B21\u3002",paraId:13,tocIndex:3},{value:"\u8FD9\u53E5\u8BDD\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u73B0\u5728\u6211\u4EEC\u6709\u8FD9\u6837\u4E00\u4E2A ",paraId:14,tocIndex:3},{value:"/products/[category]/[product]",paraId:14,tocIndex:3},{value:"\u8DEF\u7531\u5730\u5740\uFF0C\u8FD9\u4E2A\u8DEF\u7531\u91CC\u6709\u4E24\u4E2A\u52A8\u6001\u6BB5 ",paraId:14,tocIndex:3},{value:"[category]",paraId:14,tocIndex:3},{value:"\u548C ",paraId:14,tocIndex:3},{value:"[product]",paraId:14,tocIndex:3},{value:"\uFF0C",paraId:14,tocIndex:3},{value:"[product]",paraId:14,tocIndex:3},{value:" \u4F9D\u8D56\u4E8E ",paraId:14,tocIndex:3},{value:"[category]",paraId:14,tocIndex:3},{value:"\uFF0C\u6BD5\u7ADF\u8981\u5148\u77E5\u9053\u7C7B\u76EE\u624D\u80FD\u8BE5\u7C7B\u76EE\u4E0B\u77E5\u9053\u6709\u54EA\u4E9B\u4EA7\u54C1\u3002\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF1A",paraId:14,tocIndex:3},{value:"\u9996\u5148\u751F\u6210\u7236\u6BB5\uFF1A",paraId:15,tocIndex:3},{value:`// app/products/[category]/layout.js
export async function generateStaticParams() {
  const products = await fetch('https://.../products').then((res) =>
    res.json(),
  );

  return products.map((product) => ({
    category: product.category.slug,
  }));
}

export default function Layout({ params }) {
  // ...
}
`,paraId:16,tocIndex:3},{value:"\u7136\u540E\u5B50 ",paraId:17,tocIndex:3},{value:"generateStaticParams",paraId:17,tocIndex:3},{value:"\u51FD\u6570\u5C31\u53EF\u4EE5\u4F7F\u7528\u7236 ",paraId:17,tocIndex:3},{value:"generateStaticParams",paraId:17,tocIndex:3},{value:"\u51FD\u6570\u8FD4\u56DE\u7684 ",paraId:17,tocIndex:3},{value:"params",paraId:17,tocIndex:3},{value:" \u53C2\u6570\u52A8\u6001\u751F\u6210\u81EA\u5DF1\u7684\u6BB5\uFF1A",paraId:17,tocIndex:3},{value:`// app/products/[category]/[product]/page.js
export async function generateStaticParams({ params: { category } }) {
  const products = await fetch(
    \`https://.../products?category=\${category}\`,
  ).then((res) => res.json());

  return products.map((product) => ({
    product: product.id,
  }));
}

export default function Page({ params }) {
  // ...
}
`,paraId:18,tocIndex:3},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",paraId:19,tocIndex:3},{value:"params",paraId:19,tocIndex:3},{value:" \u5BF9\u8C61\u5C31\u5305\u542B\u4E86\u4ECE\u7236 ",paraId:19,tocIndex:3},{value:"generateStaticParams",paraId:19,tocIndex:3},{value:"\u751F\u6210\u7684 ",paraId:19,tocIndex:3},{value:"params",paraId:19,tocIndex:3},{value:"\uFF0C\u53EF\u4EE5\u7528\u6B64\u751F\u6210\u5B50\u6BB5\u7684 ",paraId:19,tocIndex:3},{value:"params",paraId:19,tocIndex:3},{value:"\u3002",paraId:19,tocIndex:3},{value:"\u8FD9\u79CD\u586B\u5145\u52A8\u6001\u6BB5\u7684\u65B9\u5F0F\u88AB\u79F0\u4E3A\u201C",paraId:20,tocIndex:3},{value:"\u81EA\u4E0A\u800C\u4E0B\u751F\u6210\u53C2\u6570",paraId:20,tocIndex:3},{value:"\u201D\uFF0C\u5B50\u6BB5\u4F9D\u8D56\u4E8E\u7236\u6BB5\u7684\u6570\u636E\u3002\u4F46\u5982\u679C\u4E0D\u4F9D\u8D56\uFF0C\u5C31\u6BD4\u5982\u63D0\u4F9B\u4E00\u4E2A\u63A5\u53E3\uFF0C\u76F4\u63A5\u8FD4\u56DE\u6240\u6709\u7684\u4EA7\u54C1\u548C\u5BF9\u5E94\u7684\u76EE\u5F55\u4FE1\u606F\uFF0C\u5B8C\u5168\u53EF\u4EE5\u76F4\u63A5\u751F\u6210\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:20,tocIndex:3},{value:`// app/products/[category]/[product]/page.js
export async function generateStaticParams() {
  const products = await fetch('https://.../products').then((res) =>
    res.json(),
  );

  return products.map((product) => ({
    category: product.category.slug,
    product: product.id,
  }));
}

export default function Page({ params }) {
  // ...
}
`,paraId:21,tocIndex:3},{value:"\u4E0D\u9700\u8981\u518D\u5199\u7236 ",paraId:22,tocIndex:3},{value:"generateStaticParams",paraId:22,tocIndex:3},{value:" \u51FD\u6570\uFF0C\u76F4\u63A5\u4E00\u6B65\u5230\u4F4D\uFF0C\u8FD9\u79CD\u586B\u5145\u52A8\u6001\u6BB5\u7684\u65B9\u5F0F\u88AB\u79F0\u4E3A\u201C",paraId:22,tocIndex:3},{value:"\u81EA\u4E0B\u800C\u4E0A\u751F\u6210\u53C2\u6570",paraId:22,tocIndex:3},{value:"\u201D\u3002",paraId:22,tocIndex:3},{value:"generateStaticParams",paraId:23,tocIndex:4},{value:" \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5176\u4E2D\u6BCF\u4E2A\u5BF9\u8C61\u8868\u793A\u5355\u4E2A\u8DEF\u7531\u7684\u586B\u5145\u52A8\u6001\u6BB5\uFF1A",paraId:23,tocIndex:4},{value:"\u5BF9\u8C61\u7684\u6BCF\u4E2A\u5C5E\u6027\u90FD\u662F\u8DEF\u7531\u8981\u586B\u5145\u7684\u52A8\u6001\u6BB5",paraId:24,tocIndex:4},{value:"\u5C5E\u6027\u540D\u5C31\u662F\u6BB5\u540D\uFF0C\u5C5E\u6027\u503C\u5C31\u662F\u8BE5\u6BB5\u5E94\u8BE5\u586B\u5199\u7684\u5185\u5BB9",paraId:24,tocIndex:4},{value:"\u76F4\u63A5\u63CF\u8FF0\u53CD\u800C\u6709\u4E9B\u590D\u6742\uFF0C\u5176\u5B9E\u5F88\u7B80\u5355\uFF0C\u6BD4\u5982\uFF1A",paraId:25,tocIndex:4},{value:"/product/[id]",paraId:26,tocIndex:4},{value:"\u8FD9\u79CD\u52A8\u6001\u8DEF\u7531\uFF0C",paraId:26,tocIndex:4},{value:"generateStaticParams",paraId:26,tocIndex:4},{value:" \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u4E8E ",paraId:26,tocIndex:4},{value:"[{id: xxx}, {id: xxx}, ...]",paraId:26,tocIndex:4},{value:" \u7684\u5BF9\u8C61\u3002",paraId:26,tocIndex:4},{value:"\u5BF9\u4E8E ",paraId:27,tocIndex:4},{value:"/products/[category]/[product]",paraId:27,tocIndex:4},{value:"\u8FD9\u79CD\u52A8\u6001\u8DEF\u7531\uFF0C",paraId:27,tocIndex:4},{value:"generateStaticParams",paraId:27,tocIndex:4},{value:" \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u4E8E ",paraId:27,tocIndex:4},{value:"[{category: xxx, product: xxx}, {category: xxx, product: xxx}, ...]",paraId:27,tocIndex:4},{value:" \u7684\u5BF9\u8C61\u3002",paraId:27,tocIndex:4},{value:"\u5BF9\u4E8E ",paraId:28,tocIndex:4},{value:"/products/[...slug]",paraId:28,tocIndex:4},{value:"\u8FD9\u79CD\u52A8\u6001\u8DEF\u7531\uFF0C",paraId:28,tocIndex:4},{value:"generateStaticParams",paraId:28,tocIndex:4},{value:" \u5E94\u8BE5\u8FD4\u56DE\u4E00\u4E2A\u7C7B\u4F3C\u4E8E",paraId:28,tocIndex:4},{value:"[{slug: [xxx, xxx, ...]}, {slug: [xxx, xxx, ...]}, ...]",paraId:28,tocIndex:4},{value:" \u7684\u5BF9\u8C61\u3002",paraId:28,tocIndex:4},{value:"\u8FD4\u56DE\u7C7B\u578B\u63CF\u8FF0\u5982\u4E0B\uFF1A",paraId:29,tocIndex:4},{value:"\u793A\u4F8B\u8DEF\u7531",paraId:30,tocIndex:4},{value:"generateStaticParams \u8FD4\u56DE\u7C7B\u578B",paraId:30,tocIndex:4},{value:"/product/[id]",paraId:30,tocIndex:4},{value:"{ id: string }[]",paraId:30,tocIndex:4},{value:"/products/[category]/[product]",paraId:30,tocIndex:4},{value:"{ category: string, product: string }[]",paraId:30,tocIndex:4},{value:"/products/[...slug]",paraId:30,tocIndex:4},{value:"{ slug: string[] }[]",paraId:30,tocIndex:4},{value:"\u4F60\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9875\u9762\u7684\u521D\u59CB viewport\uFF0C\u6709\u4E24\u79CD\u65B9\u6CD5\uFF1A",paraId:31,tocIndex:5},{value:"\u4F7F\u7528\u9759\u6001\u7684 ",paraId:32,tocIndex:5},{value:"viewport",paraId:32,tocIndex:5},{value:" \u5BF9\u8C61",paraId:32,tocIndex:5},{value:"\u4F7F\u7528\u52A8\u6001\u7684 ",paraId:32,tocIndex:5},{value:"generateViewport",paraId:32,tocIndex:5},{value:" \u51FD\u6570",paraId:32,tocIndex:5},{value:"\u4F7F\u7528\u7684\u65F6\u5019\u8981\u6CE8\u610F\uFF1A",paraId:33,tocIndex:5},{value:"viewport",paraId:34,tocIndex:5},{value:" \u5BF9\u8C61\u548C ",paraId:34,tocIndex:5},{value:"generateViewport",paraId:34,tocIndex:5},{value:" \u51FD\u6570",paraId:34,tocIndex:5},{value:"\u4EC5\u652F\u6301\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u5BFC\u51FA",paraId:34,tocIndex:5},{value:"\u4E0D\u80FD\u5728\u540C\u4E00\u8DEF\u7531\u6BB5\u4E2D\u540C\u65F6\u5BFC\u51FA ",paraId:34,tocIndex:5},{value:"viewport",paraId:34,tocIndex:5},{value:" \u5BF9\u8C61\u548C ",paraId:34,tocIndex:5},{value:"generateViewport",paraId:34,tocIndex:5},{value:" \u51FD\u6570",paraId:34,tocIndex:5},{value:"\u5982\u679C\u89C6\u53E3\u4E0D\u4F9D\u8D56\u8FD0\u884C\u65F6\u7684\u4E00\u4E9B\u4FE1\u606F\uFF0C\u5C3D\u53EF\u80FD\u4F7F\u7528 ",paraId:34,tocIndex:5},{value:"viewport",paraId:34,tocIndex:5},{value:" \u5BF9\u8C61\u7684\u65B9\u5F0F\u8FDB\u884C\u5B9A\u4E49",paraId:34,tocIndex:5},{value:"\u4ECE ",paraId:35,tocIndex:6},{value:"layout.js",paraId:35,tocIndex:6},{value:" \u6216\u8005 ",paraId:35,tocIndex:6},{value:"page.js",paraId:35,tocIndex:6},{value:" \u4E2D\u5BFC\u51FA\u4E00\u4E2A\u540D\u4E3A ",paraId:35,tocIndex:6},{value:"viewport",paraId:35,tocIndex:6},{value:" \u7684\u5BF9\u8C61\uFF1A",paraId:35,tocIndex:6},{value:`// layout.js | page.js
export const viewport = {
  themeColor: 'black',
};

export default function Page() {}
`,paraId:36,tocIndex:6},{value:"\u4ECE ",paraId:37,tocIndex:7},{value:"layout.js",paraId:37,tocIndex:7},{value:" \u6216\u8005 ",paraId:37,tocIndex:7},{value:"page.js",paraId:37,tocIndex:7},{value:" \u4E2D\u5BFC\u51FA\u4E00\u4E2A\u540D\u4E3A ",paraId:37,tocIndex:7},{value:"generateViewport",paraId:37,tocIndex:7},{value:" \u7684\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u5305\u542B\u4E00\u4E2A\u6216\u8005\u591A\u4E2A viewport \u5B57\u6BB5\u7684 Viewport \u5BF9\u8C61\uFF1A",paraId:37,tocIndex:7},{value:`export function generateViewport({ params }) {
  return {
    themeColor: '...',
  };
}
`,paraId:38,tocIndex:7},{value:"theme-color",paraId:39,tocIndex:9},{value:"\uFF0C\u7528\u6237\u7684\u6D4F\u89C8\u5668\u5C06\u6839\u636E\u6240\u8BBE\u5B9A\u7684\u5EFA\u8BAE\u989C\u8272\u6765\u6539\u53D8\u7528\u6237\u754C\u9762\uFF0C\u6BD4\u5982\u5728 Android \u4E0A\u7684 Chrome \u8BBE\u5B9A\u989C\u8272\u540E\uFF1A",paraId:39,tocIndex:9},{value:"\u652F\u6301\u7B80\u5355\u7684\u4E3B\u9898\u989C\u8272\u8BBE\u7F6E\uFF1A",paraId:40,tocIndex:9},{value:`// layout.js | page.js
export const viewport = {
  themeColor: 'black',
};
`,paraId:41,tocIndex:9},{value:"\u5BF9\u5E94\u8F93\u51FA\u4E3A\uFF1A",paraId:42,tocIndex:9},{value:`<meta name="theme-color" content="black" />
`,paraId:43,tocIndex:9},{value:"\u4E5F\u652F\u6301\u5E26 media \u5C5E\u6027\u7684\u4E3B\u9898\u989C\u8272\u8BBE\u7F6E\uFF1A",paraId:44,tocIndex:9},{value:`export const viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'cyan' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};
`,paraId:45,tocIndex:9},{value:"\u5BF9\u5E94\u8F93\u51FA\u4E3A\uFF1A",paraId:46,tocIndex:9},{value:`<meta name="theme-color" media="(prefers-color-scheme: light)" content="cyan" />
<meta name="theme-color" media="(prefers-color-scheme: dark)" content="black" />
`,paraId:47,tocIndex:9},{value:"width",paraId:48},{value:"initialScale",paraId:48},{value:"maximumScale",paraId:48},{value:"\u8FD9\u5176\u5B9E\u662F ",paraId:49,tocIndex:10},{value:"viewport",paraId:49,tocIndex:10},{value:"\u5143\u6807\u7B7E\u7684\u9ED8\u8BA4\u8BBE\u7F6E\u503C\uFF0C\u901A\u5E38\u4E0D\u9700\u8981\u624B\u52A8\u8BBE\u7F6E\uFF1A",paraId:49,tocIndex:10},{value:`// layout.js | page.js
export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  // \u4E5F\u652F\u6301
  // interactiveWidget: 'resizes-visual',
};
`,paraId:50,tocIndex:10},{value:"\u5BF9\u5E94\u8F93\u51FA\u4E3A\uFF1A",paraId:51,tocIndex:10},{value:`<meta
  name="viewport"
  content="width=device-width, initial-scale=1, maximum-scale=1"
/>
`,paraId:52,tocIndex:10},{value:"colorScheme",paraId:53,tocIndex:11},{value:"\uFF0C\u6307\u5B9A\u4E0E\u5F53\u524D\u6587\u6863\u517C\u5BB9\u7684\u4E00\u79CD\u6216\u591A\u79CD\u914D\u8272\u65B9\u6848\u3002 \u6D4F\u89C8\u5668\u5C06\u4F18\u5148\u91C7\u7528\u6B64\u5143\u6570\u636E\u7684\u503C\uFF0C\u7136\u540E\u518D\u4F7F\u7528\u7528\u6237\u7684\u6D4F\u89C8\u5668\u6216\u8BBE\u5907\u8BBE\u7F6E\uFF0C\u6765\u786E\u5B9A\u9875\u9762\u4E0A\u7684\u5404\u79CD\u9ED8\u8BA4\u989C\u8272\u548C\u5143\u7D20\u5916\u89C2\uFF0C\u4F8B\u5982\u80CC\u666F\u8272\u3001\u524D\u666F\u8272\u3001\u7A97\u4F53\u63A7\u4EF6\u548C\u6EDA\u52A8\u6761\u3002",paraId:53,tocIndex:11},{value:" \u7684\u4E3B\u8981\u7528\u9014\u662F\u6307\u793A\u5F53\u524D\u9875\u9762\u4E0E\u6D45\u8272\u6A21\u5F0F\u548C\u6DF1\u8272\u6A21\u5F0F\u7684\u517C\u5BB9\u6027\uFF0C\u4EE5\u53CA\u9009\u7528\u8FD9\u4E24\u79CD\u6A21\u5F0F\u65F6\u7684\u4F18\u5148\u987A\u5E8F\u3002\u5B83\u7684\u503C\u6709 ",paraId:53,tocIndex:11},{value:"normal",paraId:53,tocIndex:11},{value:"\u3001",paraId:53,tocIndex:11},{value:"light",paraId:53,tocIndex:11},{value:"\u3001",paraId:53,tocIndex:11},{value:"dark",paraId:53,tocIndex:11},{value:"\u3001",paraId:53,tocIndex:11},{value:"only light",paraId:53,tocIndex:11},{value:"\u3002",paraId:53,tocIndex:11},{value:`// layout.js | page.js
export const viewport = {
  colorScheme: 'dark',
};
`,paraId:54,tocIndex:11},{value:`<meta name="color-scheme" content="dark" />
`,paraId:55,tocIndex:11},{value:"revalidatePath",paraId:56,tocIndex:13},{value:" \u7528\u4E8E\u6309\u9700\u6E05\u9664\u7279\u5B9A\u8DEF\u5F84\u4E0A\u7684\u7F13\u5B58\u6570\u636E\uFF0C\u53EF\u7528\u4E8E Node.js \u548C Edge Runtimes\u3002",paraId:56,tocIndex:13},{value:"\u4F7F\u7528 ",paraId:57,tocIndex:13},{value:"revalidatePath",paraId:57,tocIndex:13},{value:" \u7684\u65F6\u5019\u8981\u77E5\u9053\uFF0C\u5728 Next.js \u4E2D\uFF0C\u6E05\u9664\u6570\u636E\u7F13\u5B58\u5E76\u91CD\u65B0\u83B7\u53D6\u6700\u65B0\u6570\u636E\u7684\u8FC7\u7A0B\u5C31\u53EB\u505A\u91CD\u65B0\u9A8C\u8BC1\uFF08Revalidation\uFF09\uFF0C\u5373\u4FBF\u5728\u52A8\u6001\u8DEF\u7531\u6BB5\u4E2D\u8C03\u7528\u4E86\u591A\u6B21 ",paraId:57,tocIndex:13},{value:"revalidatePath",paraId:57,tocIndex:13},{value:"\uFF0C\u4E5F\u4E0D\u4F1A\u7ACB\u5373\u89E6\u53D1\u591A\u6B21\u91CD\u65B0\u9A8C\u8BC1\uFF0C\u53EA\u6709\u5F53\u4E0B\u6B21\u8BBF\u95EE\u7684\u65F6\u5019\u624D\u4F1A\u91CD\u65B0\u83B7\u53D6\u6570\u636E\u5E76\u66F4\u65B0\u7F13\u5B58\u3002",paraId:57,tocIndex:13},{value:`revalidatePath(path: string, type?: 'page' | 'layout'): void;
`,paraId:58,tocIndex:14},{value:"path",paraId:59,tocIndex:14},{value:" \u53EF\u4EE5\u662F\u8DEF\u7531\u5B57\u7B26\u4E32\uFF08\u5982 ",paraId:59,tocIndex:14},{value:"/product/123",paraId:59,tocIndex:14},{value:"\uFF09\uFF0C\u4E5F\u53EF\u4EE5\u662F\u6587\u4EF6\u7CFB\u7EDF\u5730\u5740\u5B57\u7B26\u4E32\uFF08\u5982 ",paraId:59,tocIndex:14},{value:"/product/[slug]/page",paraId:59,tocIndex:14},{value:"\uFF09\uFF0C\u5FC5\u987B\u5C11\u4E8E 1024 \u4E2A\u5B57\u7B26",paraId:59,tocIndex:14},{value:"type",paraId:59,tocIndex:14},{value:"\u53EF\u9009\u53C2\u6570\uFF0C\u8981\u91CD\u65B0\u9A8C\u8BC1\u7684\u5730\u5740\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:59,tocIndex:14},{value:"page",paraId:59,tocIndex:14},{value:"\u6216 ",paraId:59,tocIndex:14},{value:"layout",paraId:59,tocIndex:14},{value:"revalidatePath",paraId:60,tocIndex:15},{value:" \u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C",paraId:60,tocIndex:15},{value:`import { revalidatePath } from 'next/cache';
revalidatePath('/blog/post-1');
`,paraId:61,tocIndex:17},{value:`import { revalidatePath } from 'next/cache';
revalidatePath('/blog/[slug]', 'page');
// \u5E26\u8DEF\u7531\u7EC4\u4E5F\u53EF\u4EE5
revalidatePath('/(main)/post/[slug]', 'page');
`,paraId:62,tocIndex:18},{value:"\u6CE8\u610F\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u4EC5\u91CD\u65B0\u9A8C\u8BC1\u4E0E\u6240\u63D0\u4F9B\u7684 page \u6587\u4EF6\u5BF9\u5E94\u7684 URL\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4E0D\u4F1A\u91CD\u65B0\u9A8C\u8BC1\u5728\u8FD9\u4E4B\u4E0B\u7684\u9875\u9762\uFF0C\u6BD4\u5982 /",paraId:63,tocIndex:18},{value:"blog/[slug]",paraId:63,tocIndex:18},{value:" \u4E0D\u4F1A\u8BA9 ",paraId:63,tocIndex:18},{value:"/blog/[slug]/[author]",paraId:63,tocIndex:18},{value:" \u4E5F\u5931\u6548",paraId:63,tocIndex:18},{value:`import { revalidatePath } from 'next/cache';
revalidatePath('/blog/[slug]', 'layout');
// \u5E26\u8DEF\u7531\u7EC4\u4E5F\u53EF\u4EE5
revalidatePath('/(main)/post/[slug]', 'layout');
`,paraId:64,tocIndex:19},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u8FD9\u4F1A\u4F55\u91CD\u65B0\u9A8C\u8BC1\u4EFB\u4F55\u4F7F\u7528\u8FD9\u4E2A\u5E03\u5C40\u7684\u9875\u9762\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C /",paraId:65,tocIndex:19},{value:"blog/[slug]",paraId:65,tocIndex:19},{value:"\u4E5F\u4F1A\u8BA9 ",paraId:65,tocIndex:19},{value:"/blog/[slug]/[author]",paraId:65,tocIndex:19},{value:" \u5931\u6548",paraId:65,tocIndex:19},{value:`import { revalidatePath } from 'next/cache';

revalidatePath('/', 'layout');
`,paraId:66,tocIndex:20},{value:"\u8FD9\u4F1A\u6E05\u9664\u5BA2\u6237\u7AEF\u8DEF\u7531\u7F13\u5B58\uFF0C\u5E76\u5728\u4E0B\u6B21\u8BBF\u95EE\u65F6\u91CD\u65B0\u9A8C\u8BC1\u6570\u636E\u7F13\u5B58\u3002",paraId:67,tocIndex:20},{value:`'use server';
// app/actions.js
import { revalidatePath } from 'next/cache';

export default async function submit() {
  await submitForm();
  revalidatePath('/');
}
`,paraId:68,tocIndex:21},{value:`// app/api/revalidate/route.js
import { revalidatePath } from 'next/cache';

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
`,paraId:69,tocIndex:22},{value:"revalidateTag",paraId:70,tocIndex:24},{value:" \u7528\u4E8E\u6309\u9700\u6E05\u9664\u7279\u5B9A\u6807\u7B7E\u7684\u7F13\u5B58\u6570\u636E\uFF0C\u53EF\u7528\u4E8E Node.js \u548C Edge Runtimes\u3002",paraId:70,tocIndex:24},{value:"\u4F7F\u7528 ",paraId:71,tocIndex:24},{value:"revalidateTag",paraId:71,tocIndex:24},{value:" \u7684\u65F6\u5019\u8981\u77E5\u9053\uFF0C\u5728 Next.js \u4E2D\uFF0C\u6E05\u9664\u6570\u636E\u7F13\u5B58\u5E76\u91CD\u65B0\u83B7\u53D6\u6700\u65B0\u6570\u636E\u7684\u8FC7\u7A0B\u5C31\u53EB\u505A\u91CD\u65B0\u9A8C\u8BC1\uFF08Revalidation\uFF09\uFF0C\u5373\u4FBF\u5728\u52A8\u6001\u8DEF\u7531\u6BB5\u4E2D\u8C03\u7528\u4E86\u591A\u6B21 ",paraId:71,tocIndex:24},{value:"revalidateTag",paraId:71,tocIndex:24},{value:"\uFF0C\u4E5F\u4E0D\u4F1A\u7ACB\u5373\u89E6\u53D1\u591A\u6B21\u91CD\u65B0\u9A8C\u8BC1\uFF0C\u53EA\u6709\u5F53\u4E0B\u6B21\u8BBF\u95EE\u7684\u65F6\u5019\u624D\u4F1A\u91CD\u65B0\u83B7\u53D6\u6570\u636E\u5E76\u66F4\u65B0\u7F13\u5B58\u3002",paraId:71,tocIndex:24},{value:`revalidateTag(tag: string): void;
`,paraId:72,tocIndex:25},{value:"tag \u8868\u793A\u8981\u91CD\u65B0\u9A8C\u8BC1\u7684\u6807\u7B7E\uFF0C\u5FC5\u987B\u5C0F\u4E8E\u6216\u7B49\u4E8E 256 \u4E2A\u5B57\u7B26\u3002",paraId:73,tocIndex:25},{value:"\u6DFB\u52A0\u6807\u7B7E\u7684\u65B9\u5F0F\uFF1A",paraId:74,tocIndex:25},{value:`fetch(url, { next: { tags: [...] } });
`,paraId:75,tocIndex:25},{value:"revalidateTag",paraId:76,tocIndex:26},{value:" \u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C",paraId:76,tocIndex:26},{value:`// app/actions.js
import { revalidateTag } from 'next/cache';

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get('tag');
  revalidateTag(tag);
  return Response.json({ revalidated: true, now: Date.now() });
}
`,paraId:77,tocIndex:28},{value:`// app/api/revalidate/route.js
import { revalidateTag } from 'next/cache';

export async function GET(request) {
  const tag = request.nextUrl.searchParams.get('tag');
  revalidateTag(tag);
  return Response.json({ revalidated: true, now: Date.now() });
}
`,paraId:78,tocIndex:29},{value:"unstable_cache",paraId:79,tocIndex:31},{value:" \u7528\u4E8E\u7F13\u5B58\u6602\u8D35\u64CD\u4F5C\u7684\u7ED3\u679C\uFF08\u5982\u6570\u636E\u5E93\u67E5\u8BE2\uFF09\u5E76\u5728\u4E4B\u540E\u7684\u8BF7\u6C42\u4E2D\u590D\u7528\u7ED3\u679C\uFF0C\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:79,tocIndex:31},{value:`import { getUser } from './data';
import { unstable_cache } from 'next/cache';

const getCachedUser = unstable_cache(
  async (id) => getUser(id),
  ['my-app-user']
);

export default async function Component({ userID }) {
  const user = await getCachedUser(userID);
  ...
}
`,paraId:80,tocIndex:31},{value:`const data = unstable_cache(fetchData, keyParts, options)();
`,paraId:81,tocIndex:32},{value:"fetchData",paraId:82,tocIndex:32},{value:"\uFF1A\u83B7\u53D6\u8981\u7F13\u5B58\u6570\u636E\u7684\u5F02\u6B65\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A Promise",paraId:82,tocIndex:32},{value:"keyParts",paraId:82,tocIndex:32},{value:"\uFF1A\u7528\u4E8E\u6807\u8BC6\u7F13\u5B58\u952E\u540D\u7684\u6570\u7EC4\uFF0C\u5FC5\u987B\u5305\u542B\u5168\u5C40\u552F\u4E00\u7684\u503C",paraId:82,tocIndex:32},{value:"options",paraId:82,tocIndex:32},{value:`\uFF1A\u7528\u4E8E\u63A7\u5236\u7F13\u5B58\u884C\u4E3A\uFF0C\u5177\u4F53\u5305\u542B\uFF1A
`,paraId:82,tocIndex:32},{value:"tags",paraId:83,tocIndex:32},{value:": \u7528\u4E8E\u63A7\u5236\u7F13\u5B58\u5931\u6548\u7684\u6807\u7B7E\u6570\u7EC4",paraId:83,tocIndex:32},{value:"revalidate",paraId:83,tocIndex:32},{value:"\uFF1A\u7F13\u5B58\u9700\u8981\u91CD\u65B0\u9A8C\u8BC1\u7684\u79D2\u6570",paraId:83,tocIndex:32},{value:"unstable_cache",paraId:84,tocIndex:33},{value:" \u8FD4\u56DE\u4E00\u4E2A\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8C03\u7528\u65F6\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u89E3\u6790\u4E3A\u7F13\u5B58\u6570\u636E\u7684 Promise\u3002\u5982\u679C\u6570\u636E\u4E0D\u5728\u7F13\u5B58\u4E2D\uFF0C\u5219\u4F1A\u8C03\u7528\u63D0\u4F9B\u7684\u51FD\u6570\uFF0C\u5C06\u7ED3\u679C\u7F13\u5B58\u5E76\u8FD4\u56DE\u3002",paraId:84,tocIndex:33},{value:"unstable_noStore",paraId:85,tocIndex:35},{value:"\u7528\u4E8E\u58F0\u660E\u9000\u51FA\u9759\u6001\u6E32\u67D3\u548C\u8868\u660E\u8BE5\u7EC4\u4EF6\u4E0D\u5E94\u7F13\u5B58\uFF0C\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:85,tocIndex:35},{value:`import { unstable_noStore as noStore } from 'next/cache';

export default async function Component() {
  noStore();
  const result = await db.query(...);
  ...
}
`,paraId:86,tocIndex:35},{value:"unstable_noStore",paraId:87,tocIndex:35},{value:"\u76F8\u5F53\u4E8E\u5728 ",paraId:87,tocIndex:35},{value:"fetch",paraId:87,tocIndex:35},{value:" \u4E0A\u6DFB\u52A0\u4E86 ",paraId:87,tocIndex:35},{value:"cache: 'no-store'",paraId:87,tocIndex:35},{value:"\u3002",paraId:87,tocIndex:35},{value:"unstable_noStore",paraId:87,tocIndex:35},{value:" \u6BD4 ",paraId:87,tocIndex:35},{value:"export const dynamic = 'force-dynamic'",paraId:87,tocIndex:35},{value:"\u66F4\u597D\u7684\u4E00\u70B9\u662F\u5B83\u66F4\u7EC6\u7C92\u5EA6\uFF0C\u53EF\u4EE5\u5728\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u57FA\u7840\u4E0A\u4F7F\u7528\u3002",paraId:87,tocIndex:35},{value:"\u5982\u679C\u4F60\u4E0D\u60F3\u5411 ",paraId:88,tocIndex:36},{value:"fetch",paraId:88,tocIndex:36},{value:" \u4F20\u9012\u989D\u5916\u7684\u9009\u9879\u5982 ",paraId:88,tocIndex:36},{value:"cache: 'no-store'",paraId:88,tocIndex:36},{value:" \u6216 ",paraId:88,tocIndex:36},{value:"next: { revalidate: 0 }",paraId:88,tocIndex:36},{value:"\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:88,tocIndex:36},{value:"noStore()",paraId:88,tocIndex:36},{value:"\u4F5C\u4E3A\u66FF\u4EE3\u3002",paraId:88,tocIndex:36},{value:`import { unstable_noStore as noStore } from 'next/cache';

export default async function Component() {
  noStore();
  const result = await db.query(...);
  ...
}
`,paraId:89,tocIndex:36},{value:"useSelectedLayoutSegment",paraId:90,tocIndex:38},{value:"\u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6 hook\uFF0C\u7528\u4E8E\u8BFB\u53D6\u6BD4\u8C03\u7528\u8BE5\u65B9\u6CD5\u6240\u5728\u7684\u5E03\u5C40\u4F4E\u4E00\u7EA7\u7684\u6FC0\u6D3B\u8DEF\u7531\u6BB5\u3002\u8FD9\u4E2A\u529F\u80FD\u5BF9\u4E8E\u5BFC\u822A UI \u975E\u5E38\u6709\u7528\uFF0C\u6BD4\u5982\u7236\u5E03\u5C40\u4E2D\u7684\u9009\u9879\u5361\uFF0C\u9700\u8981\u6839\u636E\u5F53\u524D\u6240\u5904\u7684\u8DEF\u7531\u6BB5\u6765\u66F4\u6539\u6837\u5F0F\uFF0C\u57FA\u7840\u4F7F\u7528\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:90,tocIndex:38},{value:`'use client';
// app/example-client-component.js
import { useSelectedLayoutSegment } from 'next/navigation';

export default function ExampleClientComponent() {
  const segment = useSelectedLayoutSegment();

  return <p>Active segment: {segment}</p>;
}
`,paraId:91,tocIndex:38},{value:"\u4E3A\u4E86\u89E3\u91CA\u8FD9\u4E2A hook \u7684\u4F5C\u7528\u548C\u7528\u6CD5\uFF0C\u6211\u4EEC\u6765\u5199\u4E00\u4E2A demo\uFF0Cdemo \u6548\u679C\u5982\u4E0B\uFF1A",paraId:92,tocIndex:38},{value:"\u8FD9\u4E2A demo \u6A21\u62DF\u7684\u662F\u4FA7\u8FB9\u680F\u70B9\u51FB\u5207\u6362\u5F53\u524D\u6587\u7AE0\uFF0C\u4F60\u53EF\u4EE5\u770B\u5230\uFF0C\u968F\u7740\u8DEF\u7531\u7684\u5207\u6362\uFF0C\u5BF9\u5E94\u94FE\u63A5\u7684\u6837\u5F0F\u4E5F\u53D1\u751F\u4E86\u53D8\u5316\u3002\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:93,tocIndex:38},{value:`// app/blog/layout.js
import BlogNavLink from './blog-nav-link';
import getFeaturedPosts from './get-featured-posts';

export default async function Layout({ children }) {
  const featuredPosts = await getFeaturedPosts();
  return (
    <div>
      {featuredPosts.map((post) => (
        <div key={post.id}>
          <BlogNavLink slug={post.slug}>{post.title}</BlogNavLink>
        </div>
      ))}
      <div>{children}</div>
    </div>
  );
}
`,paraId:94,tocIndex:38},{value:`'use client';
// app/blog/blog-nav-link.js
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';

export default function BlogNavLink({ slug, children }) {
  const segment = useSelectedLayoutSegment();
  const isActive = slug === segment;

  return (
    <Link
      href={\`/blog/\${slug}\`}
      style={{ fontWeight: isActive ? 'bold' : 'normal' }}
    >
      {children}
    </Link>
  );
}
`,paraId:95,tocIndex:38},{value:`// app/blog/get-featured-posts.js
export default async function getFeaturedPosts() {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  return [
    { id: '1', slug: 'article1', title: '\u6587\u7AE0 1' },
    { id: '2', slug: 'article2', title: '\u6587\u7AE0 2' },
    { id: '3', slug: 'article3', title: '\u6587\u7AE0 3' },
  ];
}
`,paraId:96,tocIndex:38},{value:`// app/blog/[slug]/page.js
export default function Page({ params }) {
  return <div>\u5F53\u524D slug: {params.slug}</div>;
}
`,paraId:97,tocIndex:38},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C",paraId:98,tocIndex:38},{value:"useSelectedLayoutSegment",paraId:98,tocIndex:38},{value:" \u662F\u5728 ",paraId:98,tocIndex:38},{value:"app/blog/layout.js",paraId:98,tocIndex:38},{value:"\u8FD9\u4E2A\u5E03\u5C40\u4E2D\u8C03\u7528\u7684\uFF0C\u6240\u4EE5\u8BBF\u95EE ",paraId:98,tocIndex:38},{value:"/blog/article1",paraId:98,tocIndex:38},{value:" \u7684\u65F6\u5019\uFF0C\u8FD4\u56DE\u7684\u662F\u6BD4\u8FD9\u4E2A\u5E03\u5C40\u4F4E\u4E00\u7EA7\u7684\u8DEF\u7531\u6BB5\uFF0C\u4E5F\u5C31\u662F\u4F1A\u8FD4\u56DE ",paraId:98,tocIndex:38},{value:"article1",paraId:98,tocIndex:38},{value:"\uFF0C\u7136\u540E\u6211\u4EEC\u5728 ",paraId:98,tocIndex:38},{value:"blog-nav-link.js",paraId:98,tocIndex:38},{value:" \u4E2D\u6839\u636E\u8BE5\u8FD4\u56DE\u503C\u548C\u5F53\u524D slug \u8FDB\u884C\u5224\u65AD\uFF0C\u4ECE\u800C\u5B9E\u73B0\u4E86\u5F53\u524D\u6240\u5904\u94FE\u63A5\u52A0\u7C97\u529F\u80FD\u3002",paraId:98,tocIndex:38},{value:"useSelectedLayoutSegment",paraId:99,tocIndex:38},{value:"\u8FD4\u56DE\u6BD4\u8C03\u7528\u8BE5\u65B9\u6CD5\u6240\u5728\u7684\u5E03\u5C40\u4F4E\u4E00\u7EA7\u7684\u6FC0\u6D3B\u8DEF\u7531\u6BB5\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5373\u4F7F\u4F60\u8BBF\u95EE ",paraId:99,tocIndex:38},{value:"blog/article1/about",paraId:99,tocIndex:38},{value:"\uFF0C\u56E0\u4E3A\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u5E03\u5C40\u4F9D\u7136\u662F ",paraId:99,tocIndex:38},{value:"app/blog/layout.js",paraId:99,tocIndex:38},{value:"\uFF0C\u6240\u4EE5\u8FD4\u56DE\u7684\u503C\u4F9D\u7136\u662F ",paraId:99,tocIndex:38},{value:"article1",paraId:99,tocIndex:38},{value:"\u3002",paraId:99,tocIndex:38},{value:`const segment = useSelectedLayoutSegment(parallelRoutesKey?: string)
`,paraId:100,tocIndex:39},{value:"useSelectedLayoutSegment",paraId:101,tocIndex:39},{value:" \u63A5\u6536\u4E00\u4E2A\u53EF\u9009\u7684 parallelRoutesKey \u53C2\u6570\uFF0C\u7528\u4E8E\u8BFB\u53D6\u5E73\u884C\u8DEF\u7531\u4E2D\u7684\u6FC0\u6D3B\u8DEF\u7531\u6BB5\u3002",paraId:101,tocIndex:39},{value:"\u5982\u679C\u4E0D\u5B58\u5728\uFF0C\u4F1A\u8FD4\u56DE ",paraId:102,tocIndex:40},{value:"null",paraId:102,tocIndex:40},{value:"\uFF0C\u8BA9\u6211\u4EEC\u518D\u770B\u51E0\u4E2A\u4F8B\u5B50\uFF1A",paraId:102,tocIndex:40},{value:"Layout",paraId:103,tocIndex:40},{value:"\u8BBF\u95EE URL",paraId:103,tocIndex:40},{value:"\u8FD4\u56DE\u503C",paraId:103,tocIndex:40},{value:"app/layout.js",paraId:103,tocIndex:40},{value:"/",paraId:103,tocIndex:40},{value:"null",paraId:103,tocIndex:40},{value:"app/layout.js",paraId:103,tocIndex:40},{value:"/dashboard",paraId:103,tocIndex:40},{value:"'dashboard'",paraId:103,tocIndex:40},{value:"app/dashboard/layout.js",paraId:103,tocIndex:40},{value:"/dashboard",paraId:103,tocIndex:40},{value:"null",paraId:103,tocIndex:40},{value:"app/dashboard/layout.js",paraId:103,tocIndex:40},{value:"/dashboard/settings",paraId:103,tocIndex:40},{value:"'settings'",paraId:103,tocIndex:40},{value:"app/dashboard/layout.js",paraId:103,tocIndex:40},{value:"/dashboard/analytics",paraId:103,tocIndex:40},{value:"'analytics'",paraId:103,tocIndex:40},{value:"app/dashboard/layout.js",paraId:103,tocIndex:40},{value:"/dashboard/analytics/monthly",paraId:103,tocIndex:40},{value:"'analytics'",paraId:103,tocIndex:40},{value:"useSelectedLayoutSegments",paraId:104,tocIndex:42},{value:" \u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6 hook\uFF0C\u7528\u4E8E\u8BFB\u53D6\u8C03\u7528\u8BE5\u65B9\u6CD5\u6240\u5728\u7684\u5E03\u5C40\u4EE5\u4E0B\u6240\u6709\u7684\u6FC0\u6D3B\u8DEF\u7531\u6BB5\u3002",paraId:104,tocIndex:42},{value:"useSelectedLayoutSegments",paraId:105,tocIndex:42},{value:" \u4E0E ",paraId:105,tocIndex:42},{value:"useSelectedLayoutSegment",paraId:105,tocIndex:42},{value:" \u7684\u533A\u522B\u662F\uFF1A",paraId:105,tocIndex:42},{value:"useSelectedLayoutSegment",paraId:106,tocIndex:42},{value:" \u8FD4\u56DE\u7684\u662F\u5E03\u5C40\u4E0B\u4E00\u7EA7\u7684\u6FC0\u6D3B\u8DEF\u7531\u6BB5",paraId:106,tocIndex:42},{value:"useSelectedLayoutSegments",paraId:106,tocIndex:42},{value:" \u8FD4\u56DE\u7684\u662F\u5E03\u5C40\u4E0B\u6240\u6709\u7684\u6FC0\u6D3B\u8DEF\u7531\u6BB5",paraId:106,tocIndex:42},{value:"\u4EE5\u4E0A\u8282\u7684 demo \u4E3A\u4F8B\uFF0C\u5F53\u5728 ",paraId:107,tocIndex:42},{value:"app/blog/layout.js",paraId:107,tocIndex:42},{value:"\u5E03\u5C40\u4E2D\u8C03\u7528\u8FD9\u4E24\u4E2A\u65B9\u6CD5\uFF1A",paraId:107,tocIndex:42},{value:"\u8BBF\u95EE ",paraId:108,tocIndex:42},{value:"/blog/article1",paraId:108,tocIndex:42},{value:"\uFF0C",paraId:108,tocIndex:42},{value:"useSelectedLayoutSegment",paraId:108,tocIndex:42},{value:" \u8FD4\u56DE",paraId:108,tocIndex:42},{value:"'article1'",paraId:108,tocIndex:42},{value:"\uFF0C",paraId:108,tocIndex:42},{value:"useSelectedLayoutSegments",paraId:108,tocIndex:42},{value:"\u8FD4\u56DE",paraId:108,tocIndex:42},{value:" ",paraId:108,tocIndex:42},{value:"['article1']``\u3002",paraId:108,tocIndex:42},{value:"\u8BBF\u95EE ",paraId:109,tocIndex:42},{value:"/blog/article1/about",paraId:109,tocIndex:42},{value:"\uFF0C",paraId:109,tocIndex:42},{value:"useSelectedLayoutSegment",paraId:109,tocIndex:42},{value:"\u8FD4\u56DE ",paraId:109,tocIndex:42},{value:"'article1'",paraId:109,tocIndex:42},{value:"\uFF0C",paraId:109,tocIndex:42},{value:"useSelectedLayoutSegments",paraId:109,tocIndex:42},{value:"\u8FD4\u56DE ",paraId:109,tocIndex:42},{value:"['article1', 'about']",paraId:109,tocIndex:42},{value:"\u3002",paraId:109,tocIndex:42},{value:"useSelectedLayoutSegments",paraId:110,tocIndex:42},{value:"\u53EF\u4EE5\u7528\u4E8E\u5B9E\u73B0\u5982\u9762\u5305\u5C51\u529F\u80FD\uFF0C\u57FA\u7840\u4F7F\u7528\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:110,tocIndex:42},{value:`'use client';
// app/example-client-component.js
import { useSelectedLayoutSegments } from 'next/navigation';

export default function ExampleClientComponent() {
  const segments = useSelectedLayoutSegments();

  return (
    <ul>
      {segments.map((segment, index) => (
        <li key={index}>{segment}</li>
      ))}
    </ul>
  );
}
`,paraId:111,tocIndex:42},{value:`const segments = useSelectedLayoutSegments(parallelRoutesKey?: string)
`,paraId:112,tocIndex:43},{value:"\u4EE5\u6570\u7EC4\u5F62\u5F0F\u8FD4\u56DE\uFF0C\u5982\u679C\u6CA1\u6709\uFF0C\u8FD4\u56DE\u7A7A\u6570\u7EC4\u3002\u6CE8\u610F\u5982\u679C\u4F7F\u7528\u4E86\u8DEF\u7531\u7EC4\uFF0C\u4E5F\u4F1A\u8FD4\u56DE\uFF0C\u6240\u4EE5\u53EF\u4EE5\u518D\u7528\u4E00\u4E2A ",paraId:113,tocIndex:44},{value:"filter()",paraId:113,tocIndex:44},{value:" \u6392\u9664\u6389\u4EE5\u62EC\u53F7\u4E3A\u5F00\u5934\u7684\u6761\u76EE\u3002\u8BA9\u6211\u4EEC\u518D\u770B\u51E0\u4E2A\u4F8B\u5B50\uFF1A",paraId:113,tocIndex:44},{value:"Layout",paraId:114,tocIndex:44},{value:"\u8BBF\u95EE URL",paraId:114,tocIndex:44},{value:"\u8FD4\u56DE\u503C",paraId:114,tocIndex:44},{value:"app/layout.js",paraId:114,tocIndex:44},{value:"/",paraId:114,tocIndex:44},{value:"[]",paraId:114,tocIndex:44},{value:"app/layout.js",paraId:114,tocIndex:44},{value:"/dashboard",paraId:114,tocIndex:44},{value:"['dashboard']",paraId:114,tocIndex:44},{value:"app/layout.js",paraId:114,tocIndex:44},{value:"/dashboard/settings",paraId:114,tocIndex:44},{value:"['dashboard', 'settings']",paraId:114,tocIndex:44},{value:"app/dashboard/layout.js",paraId:114,tocIndex:44},{value:"/dashboard",paraId:114,tocIndex:44},{value:"[]",paraId:114,tocIndex:44},{value:"app/dashboard/layout.js",paraId:114,tocIndex:44},{value:"/dashboard/settings",paraId:114,tocIndex:44},{value:"['settings']",paraId:114,tocIndex:44},{value:"https://nextjs.org/docs/app/api-reference/functions",paraId:115,tocIndex:45}]}}]);
