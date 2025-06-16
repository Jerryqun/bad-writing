"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4990],{24990:function(d,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u672C\u7BC7\u6211\u4EEC\u8BB2\u89E3 ",paraId:0,tocIndex:0},{value:"next.config.js",paraId:0,tocIndex:0},{value:" \u5269\u4E0B\u7684 31 \u4E2A\u914D\u7F6E\u9879\u3002",paraId:0,tocIndex:0},{value:"assetPrefix \u7528\u4E8E\u8BBE\u7F6E\u8D44\u6E90\u524D\u7F00\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:1,tocIndex:1},{value:`// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  // Use the CDN in production and localhost for development.
  assetPrefix: isProd ? 'https://cdn.mydomain.com' : undefined,
};
`,paraId:2,tocIndex:1},{value:"Next.js \u4F1A\u81EA\u52A8\u4E3A\u4ECE ",paraId:3,tocIndex:1},{value:"/_next",paraId:3,tocIndex:1},{value:"\u8DEF\u5F84\uFF08",paraId:3,tocIndex:1},{value:".next/static/",paraId:3,tocIndex:1},{value:"\u6587\u4EF6\u5939\uFF09\u52A0\u8F7D\u7684 JavaScript \u548C CSS \u6587\u4EF6\u6DFB\u52A0\u8D44\u6E90\u524D\u7F00\u3002\u4EE5\u8FD9\u4E2A\u4F8B\u5B50\u4E3A\u4F8B\uFF0C\u5F53\u8BF7\u6C42 JS \u4EE3\u7801\u7247\u6BB5\u7684\u65F6\u5019\uFF0C\u539F\u672C\u5730\u5740\u662F\uFF1A",paraId:3,tocIndex:1},{value:`/_next/static/chunks/4b9b41aaa062cbbfeff4add70f256968c51ece5d.4d708494b3aed70c04f0.js
`,paraId:4,tocIndex:1},{value:"\u4F1A\u53D8\u6210\uFF1A",paraId:5,tocIndex:1},{value:`https://cdn.mydomain.com/_next/static/chunks/4b9b41aaa062cbbfeff4add70f256968c51ece5d.4d708494b3aed70c04f0.js
`,paraId:6,tocIndex:1},{value:"\u6CE8\u610F\uFF1A\u867D\u7136\u8FD9\u91CC\u8BF7\u6C42\u7684\u8DEF\u5F84\u662F\u5728 ",paraId:7,tocIndex:1},{value:"/_next",paraId:7,tocIndex:1},{value:"\u4E0B\uFF0C\u4F46\u5B9E\u9645\u6587\u4EF6\u5728 ",paraId:7,tocIndex:1},{value:".next/",paraId:7,tocIndex:1},{value:" \u4E0B\uFF1A",paraId:7,tocIndex:1},{value:"\u8BA9\u6211\u4EEC\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u6D4B\u8BD5\u4E00\u4E0B\u8FD9\u4E2A\u914D\u7F6E\uFF0C\u539F\u672C\u8BF7\u6C42\u7684\u5730\u5740\u662F\uFF1A",paraId:8,tocIndex:1},{value:"\u914D\u7F6E\u540E\u4F1A\u53D8\u6210\uFF1A",paraId:9,tocIndex:1},{value:"\u6CE8\u610F\uFF1A",paraId:10,tocIndex:1},{value:"\u4F60\u5E94\u8BE5\u4E0A\u4F20\u5230 CDN \u7684\u53EA\u6709 ",paraId:11,tocIndex:1},{value:".next/static/",paraId:11,tocIndex:1},{value:"\u7684\u5185\u5BB9\uFF0C\u4E0D\u8981\u4E0A\u4F20 ",paraId:11,tocIndex:1},{value:".next/",paraId:11,tocIndex:1},{value:" \u5269\u4F59\u7684\u90E8\u5206\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u4F60\u66B4\u9732\u670D\u52A1\u7AEF\u4EE3\u7801\u548C\u5176\u4ED6\u914D\u7F6E\u3002",paraId:11,tocIndex:1},{value:"assetPrefix",paraId:11,tocIndex:1},{value:"\u4E0D\u4F1A\u5F71\u54CD ",paraId:11,tocIndex:1},{value:"public",paraId:11,tocIndex:1},{value:" \u6587\u4EF6\u5939\u4E0B\u7684\u6587\u4EF6\u3002\u5BF9\u4E8E ",paraId:11,tocIndex:1},{value:"public",paraId:11,tocIndex:1},{value:" \u4E0B\u7684\u8D44\u6E90\uFF0C\u4F60\u9700\u8981\u81EA\u5DF1\u5904\u7406\u524D\u7F00\u3002",paraId:11,tocIndex:1},{value:"basePath",paraId:12,tocIndex:2},{value:" \u7528\u4E8E\u8BBE\u7F6E\u5E94\u7528\u7684\u8DEF\u5F84\u524D\u7F00\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:12,tocIndex:2},{value:`// next.config.js
module.exports = {
  basePath: '/docs',
};
`,paraId:13,tocIndex:2},{value:"\u4FEE\u6539 ",paraId:14,tocIndex:2},{value:"app/page.js",paraId:14,tocIndex:2},{value:"\u7684\u4EE3\u7801\u4E3A\uFF1A",paraId:14,tocIndex:2},{value:`import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Link href="/about">About Page</Link>
    </>
  );
}
`,paraId:15,tocIndex:2},{value:"\u4F7F\u7528 ",paraId:16,tocIndex:2},{value:"basePath",paraId:16,tocIndex:2},{value:" \u540E\uFF0C\u76F4\u63A5\u8BBF\u95EE ",paraId:16,tocIndex:2},{value:"/",paraId:16,tocIndex:2},{value:"\u4F1A\u5BFC\u81F4 404 \u9519\u8BEF\uFF1A",paraId:16,tocIndex:2},{value:"\u4F60\u5E94\u8BE5\u8BBF\u95EE ",paraId:17,tocIndex:2},{value:"/docs",paraId:17,tocIndex:2},{value:"\uFF1A",paraId:17,tocIndex:2},{value:`
\u5982\u679C\u4F60\u4E0D\u5E0C\u671B\u8BBF\u95EE `,paraId:17,tocIndex:2},{value:"/",paraId:17,tocIndex:2},{value:" \u5BFC\u81F4 404 \u9519\u8BEF\uFF0C\u90A3\u4F60\u53EF\u4EE5\u6765\u4E2A\u91CD\u5199\u6216\u8005\u91CD\u5B9A\u5411\uFF1A",paraId:17,tocIndex:2},{value:`// next.config.js
module.exports = {
  basePath: '/docs',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs',
        basePath: false,
        permanent: false,
      },
    ];
  },
};
`,paraId:18,tocIndex:2},{value:"\u5F53\u4F60\u4F7F\u7528 ",paraId:19,tocIndex:2},{value:"next/link",paraId:19,tocIndex:2},{value:" \u548C ",paraId:19,tocIndex:2},{value:"next/router",paraId:19,tocIndex:2},{value:" \uFF08App Router \u4E0B\u4F7F\u7528 ",paraId:19,tocIndex:2},{value:"next/navigation",paraId:19,tocIndex:2},{value:"\uFF09\u94FE\u63A5\u5230\u5176\u4ED6\u9875\u9762\u65F6\uFF0C",paraId:19,tocIndex:2},{value:"basePath",paraId:19,tocIndex:2},{value:" \u5C31\u4F1A\u81EA\u52A8\u5E94\u7528\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C",paraId:19,tocIndex:2},{value:"/about",paraId:19,tocIndex:2},{value:" \u4F1A\u81EA\u52A8\u53D8\u6210 ",paraId:19,tocIndex:2},{value:"/docs/about",paraId:19,tocIndex:2},{value:"\uFF1A",paraId:19,tocIndex:2},{value:`export default function HomePage() {
  return (
    <>
      <Link href="/about">About Page</Link>
    </>
  );
}
`,paraId:20,tocIndex:2},{value:"\u8F93\u51FA\u7684 HTML \u4E3A\uFF1A",paraId:21,tocIndex:2},{value:`<a href="/docs/about">About Page</a>
`,paraId:22,tocIndex:2},{value:"\u5F53\u4F60\u4F7F\u7528 ",paraId:23,tocIndex:2},{value:"next/image",paraId:23,tocIndex:2},{value:"\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u4F60\u5E94\u8BE5\u5728 ",paraId:23,tocIndex:2},{value:"src",paraId:23,tocIndex:2},{value:" \u524D\u6DFB\u52A0 ",paraId:23,tocIndex:2},{value:"basePath",paraId:23,tocIndex:2},{value:"\uFF08\u5982\u679C\u4F60\u4F7F\u7528\u9759\u6001\u5BFC\u5165\u5C31\u6B63\u5E38\u5904\u7406\u5373\u53EF\uFF09\uFF1A",paraId:23,tocIndex:2},{value:`import Image from 'next/image';

function Home() {
  return (
    <>
      <h1>My Homepage</h1>
      <Image
        src="/docs/me.png"
        alt="Picture of the author"
        width={500}
        height={500}
      />
      <p>Welcome to my homepage!</p>
    </>
  );
}

export default Home;
`,paraId:24,tocIndex:2},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u56FE\u7247\u653E\u5728 ",paraId:25,tocIndex:2},{value:"/public",paraId:25,tocIndex:2},{value:"\u76EE\u5F55\u4E0B\uFF0C\u6B63\u5E38\u4F7F\u7528 ",paraId:25,tocIndex:2},{value:"/me.png",paraId:25,tocIndex:2},{value:" \u5373\u53EF\u8BBF\u95EE\uFF0C\u8BBE\u7F6E ",paraId:25,tocIndex:2},{value:"basePath",paraId:25,tocIndex:2},{value:" \u4E3A ",paraId:25,tocIndex:2},{value:"/docs",paraId:25,tocIndex:2},{value:" \u540E\uFF0C\u5E94\u8BE5\u6539\u4E3A\u4F7F\u7528 ",paraId:25,tocIndex:2},{value:"/docs/me.png",paraId:25,tocIndex:2},{value:"\u3002",paraId:25,tocIndex:2},{value:"Next.js \u63D0\u4F9B gzip \u538B\u7F29\u6765\u538B\u7F29\u6E32\u67D3\u7684\u5185\u5BB9\u548C\u9759\u6001\u6587\u4EF6\u3002\u5982\u679C\u4F60\u60F3\u7981\u7528\u538B\u7F29\u529F\u80FD\uFF1A",paraId:26,tocIndex:3},{value:`// next.config.js
module.exports = {
  compress: false,
};
`,paraId:27,tocIndex:3},{value:"\u5F53\u4F60\u7F16\u8F91\u4EE3\u7801\uFF0CNext.js \u6B63\u5728\u7F16\u8BD1\u5E94\u7528\u7684\u65F6\u5019\uFF0C\u9875\u9762\u53F3\u4E0B\u89D2\u4F1A\u6709\u4E00\u4E2A\u7F16\u8BD1\u6307\u793A\u5668\u3002",paraId:28,tocIndex:4},{value:"\u8FD9\u4E2A\u6307\u793A\u5668\u53EA\u4F1A\u5728\u5F00\u53D1\u6A21\u5F0F\u4E0B\u5C55\u793A\uFF0C\u751F\u4EA7\u73AF\u5883\u4E2D\u4E0D\u4F1A\u5C55\u793A\u3002\u5982\u679C\u4F60\u60F3\u66F4\u6539\u5B83\u7684\u4F4D\u7F6E\uFF0C\u5C31\u6BD4\u5982\u5B83\u8DDF\u9875\u9762\u7684\u5176\u4ED6\u5143\u7D20\u4F4D\u7F6E\u53D1\u751F\u51B2\u7A81\u4E86\uFF1A",paraId:29,tocIndex:4},{value:`module.exports = {
  devIndicators: {
    buildActivityPosition: 'bottom-right',
  },
};
`,paraId:30,tocIndex:4},{value:"\u9ED8\u8BA4\u503C\u662F ",paraId:31,tocIndex:4},{value:"bottom-right",paraId:31,tocIndex:4},{value:"\uFF0C\u5176\u4ED6\u503C\u8FD8\u6709",paraId:31,tocIndex:4},{value:" bottom-left",paraId:31,tocIndex:4},{value:"\u3001",paraId:31,tocIndex:4},{value:"top-right",paraId:31,tocIndex:4},{value:"\u3001",paraId:31,tocIndex:4},{value:"top-left",paraId:31,tocIndex:4},{value:"\u3002",paraId:31,tocIndex:4},{value:"\u5982\u679C\u4F60\u60F3\u7981\u7528\u5B83\uFF1A",paraId:32,tocIndex:4},{value:`module.exports = {
  devIndicators: {
    buildActivity: false,
  },
};
`,paraId:33,tocIndex:4},{value:"distDir",paraId:34,tocIndex:5},{value:" \u7528\u4E8E\u81EA\u5B9A\u4E49\u6784\u5EFA\u76EE\u5F55\uFF0C\u9ED8\u8BA4\u662F ",paraId:34,tocIndex:5},{value:".next",paraId:34,tocIndex:5},{value:"\uFF1A",paraId:34,tocIndex:5},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:35,tocIndex:5},{value:`module.exports = {
  distDir: 'build',
};
`,paraId:36,tocIndex:5},{value:"\u73B0\u5728\u5982\u679C\u4F60\u8FD0\u884C ",paraId:37,tocIndex:5},{value:"next build",paraId:37,tocIndex:5},{value:"\uFF0CNext.js \u4F1A\u4F7F\u7528 ",paraId:37,tocIndex:5},{value:"build",paraId:37,tocIndex:5},{value:" \u6587\u4EF6\u5939\u800C\u4E0D\u662F ",paraId:37,tocIndex:5},{value:".next",paraId:37,tocIndex:5},{value:"\u6587\u4EF6\u5939\u3002\u6CE8\u610F\uFF1A",paraId:37,tocIndex:5},{value:"distDir",paraId:37,tocIndex:5},{value:" \u4E0D\u80FD\u79BB\u5F00\u4F60\u7684\u9879\u76EE\u76EE\u5F55\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C",paraId:37,tocIndex:5},{value:"../build",paraId:37,tocIndex:5},{value:"\u5C31\u662F\u4E00\u4E2A\u65E0\u6548\u76EE\u5F55\u3002",paraId:37,tocIndex:5},{value:"Next.js 9.4 \u540E\u4F7F\u7528\u65B0\u7684\u65B9\u5F0F\u6DFB\u52A0\u73AF\u5883\u53D8\u91CF\uFF0C\u65B0\u7684\u65B9\u5F0F\u66F4\u52A0\u76F4\u89C2\u65B9\u4FBF\u3001\u529F\u80FD\u5F3A\u5927\uFF0C\u5177\u4F53\u5185\u5BB9\u53C2\u8003",paraId:38,tocIndex:6},{value:`\u300A
\u914D\u7F6E\u7BC7 | \u73AF\u5883\u53D8\u91CF\u3001\u8DEF\u5F84\u522B\u540D\u4E0E src \u76EE\u5F55\u300B`,paraId:38,tocIndex:6},{value:"\u3002",paraId:38,tocIndex:6},{value:"\u6DFB\u52A0\u4E00\u4E2A\u73AF\u5883\u53D8\u91CF\u5230 JavaScript bundle \u4E2D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:39,tocIndex:6},{value:`module.exports = {
  env: {
    customKey: 'my-value',
  },
};
`,paraId:40,tocIndex:6},{value:"\u73B0\u5728\u4F60\u53EF\u4EE5\u5728\u4EE3\u7801\u4E2D\u901A\u8FC7 ",paraId:41,tocIndex:6},{value:"process.env.customKey",paraId:41,tocIndex:6},{value:" \u83B7\u53D6\uFF1A",paraId:41,tocIndex:6},{value:`function Page() {
  return <h1>The value of customKey is: {process.env.customKey}</h1>;
}

export default Page;
`,paraId:42,tocIndex:6},{value:"Next.js \u4F1A\u5728\u6784\u5EFA\u7684\u65F6\u5019\uFF0C\u5C06 ",paraId:43,tocIndex:6},{value:"process.env.customKey",paraId:43,tocIndex:6},{value:"\u66FF\u6362\u4E3A ",paraId:43,tocIndex:6},{value:"my-value",paraId:43,tocIndex:6},{value:"\uFF08\u56E0\u4E3A webpack ",paraId:43,tocIndex:6},{value:"DefinePlugin",paraId:43,tocIndex:6},{value:" \u7684\u7279\u6027\uFF0C\u4E0D\u652F\u6301\u901A\u8FC7\u89E3\u6784\u8D4B\u503C\uFF09\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:43,tocIndex:6},{value:`return <h1>The value of customKey is: {process.env.customKey}</h1>;
`,paraId:44,tocIndex:6},{value:"\u76F8\u5F53\u4E8E\uFF1A",paraId:45,tocIndex:6},{value:`return <h1>The value of customKey is: {'my-value'}</h1>;
`,paraId:46,tocIndex:6},{value:"\u5982\u679C\u9879\u76EE\u4E2D\u68C0\u6D4B\u5230 ESLint\uFF0CNext.js \u4F1A\u5728\u51FA\u73B0\u9519\u8BEF\u7684\u65F6\u5019\uFF0C\u8BA9\u751F\u4EA7\u6784\u5EFA\uFF08",paraId:47,tocIndex:7},{value:"next build",paraId:47,tocIndex:7},{value:"\uFF09\u5931\u8D25\u3002",paraId:47,tocIndex:7},{value:"\u5982\u679C\u4F60\u5E0C\u671B\u5373\u4F7F\u6709\u9519\u8BEF\uFF0C\u4E5F\u8981\u6784\u5EFA\u751F\u4EA7\u4EE3\u7801\uFF0C\u53EF\u4EE5\u7981\u6B62\u5185\u7F6E\u7684 ESLint\uFF1A",paraId:48,tocIndex:7},{value:`module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
};
`,paraId:49,tocIndex:7},{value:"Next.js \u4F1A\u5728 ",paraId:50,tocIndex:8},{value:"next build",paraId:50,tocIndex:8},{value:" \u7684\u65F6\u5019\u751F\u6210\u4E00\u4E2A ID\uFF0C\u7528\u4E8E\u6807\u793A\u5E94\u7528\u6B63\u5728\u4F7F\u7528\u7684\u7248\u672C\u3002\u5E94\u8BE5\u4F7F\u7528\u76F8\u540C\u7684\u6784\u5EFA\u5E76\u542F\u52A8\u591A\u4E2A\u5BB9\u5668\uFF08Docker\uFF09\u3002",paraId:50,tocIndex:8},{value:"\u5982\u679C\u4F60\u8981\u4E3A\u73AF\u5883\u7684\u6BCF\u4E2A\u9636\u6BB5\u8FDB\u884C\u91CD\u5EFA\uFF0C\u4F60\u9700\u8981\u5728\u4E0D\u540C\u7684\u5BB9\u5668\u95F4\u751F\u6210\u4E00\u81F4\u7684\u6784\u5EFA ID\uFF08\u6BD4\u5982\u6D4B\u8BD5\u3001\u5F00\u53D1\u3001\u9884\u751F\u4EA7\u3001\u751F\u4EA7\u7B49\u4E0D\u540C\u7684\u9636\u6BB5\u5BF9\u5E94\u4E0D\u540C\u7684\u5BB9\u5668\uFF0C\u4F46\u6700\u597D\u4F7F\u7528\u76F8\u540C\u7684\u6784\u5EFA ID\uFF09\uFF0C\u4F7F\u7528 ",paraId:51,tocIndex:8},{value:"next.config.js",paraId:51,tocIndex:8},{value:" \u7684 ",paraId:51,tocIndex:8},{value:"generateBuildId",paraId:51,tocIndex:8},{value:"\uFF1A",paraId:51,tocIndex:8},{value:`module.exports = {
  generateBuildId: async () => {
    // This could be anything, using the latest git hash
    return process.env.GIT_HASH;
  },
};
`,paraId:52,tocIndex:8},{value:"Next.js \u9ED8\u8BA4\u4F1A\u4E3A\u6BCF\u4E2A\u9875\u9762\u751F\u6210 ",paraId:53,tocIndex:9},{value:"etags",paraId:53,tocIndex:9},{value:"\uFF0C\u5982\u679C\u4F60\u5E0C\u671B\u7981\u7528 HTML \u9875\u9762\u751F\u6210 etags\uFF0C\u4F7F\u7528 ",paraId:53,tocIndex:9},{value:"next.config.js",paraId:53,tocIndex:9},{value:" \u7684 ",paraId:53,tocIndex:9},{value:"generateEtags",paraId:53,tocIndex:9},{value:"\uFF1A",paraId:53,tocIndex:9},{value:`module.exports = {
  generateEtags: false,
};
`,paraId:54,tocIndex:9},{value:"\u5728 Nodejs 18 \u4E4B\u524D\uFF0CNext.js \u4F1A\u81EA\u52A8\u4F7F\u7528 ",paraId:55,tocIndex:10},{value:"undici",paraId:55,tocIndex:10},{value:" \u4F5C\u4E3A ",paraId:55,tocIndex:10},{value:"fetch()",paraId:55,tocIndex:10},{value:" \u7684 polyfill\uFF0C\u5E76\u4E14\u9ED8\u8BA4\u5F00\u542F HTTP ",paraId:55,tocIndex:10},{value:"Keep-Alive",paraId:55,tocIndex:10},{value:"\u3002",paraId:55,tocIndex:10},{value:"\u5982\u679C\u7981\u7528\u670D\u52A1\u7AEF\u6240\u6709 fetch() \u8BF7\u6C42\u7684 HTTP Keep-Alive \uFF0C\u4F7F\u7528 ",paraId:56,tocIndex:10},{value:"next.config.js",paraId:56,tocIndex:10},{value:" \u7684 ",paraId:56,tocIndex:10},{value:"httpAgentOptions",paraId:56,tocIndex:10},{value:" \u914D\u7F6E\uFF1A",paraId:56,tocIndex:10},{value:`module.exports = {
  httpAgentOptions: {
    keepAlive: false,
  },
};
`,paraId:57,tocIndex:10},{value:"\u5982\u679C\u4F60\u60F3\u8981\u4F7F\u7528\u4E91\u63D0\u4F9B\u5546\u4F18\u5316\u56FE\u7247\u800C\u4E0D\u4F7F\u7528 Next.js \u5185\u7F6E\u7684\u56FE\u50CF\u4F18\u5316 API\uFF0C\u90A3\u53EF\u4EE5\u5728 ",paraId:58,tocIndex:11},{value:"next.config.js",paraId:58,tocIndex:11},{value:" \u4E2D\u8FDB\u884C\u5982\u4E0B\u914D\u7F6E\uFF1A",paraId:58,tocIndex:11},{value:`module.exports = {
  images: {
    loader: 'custom',
    loaderFile: './my/image/loader.js',
  },
};
`,paraId:59,tocIndex:11},{value:"loaderFile",paraId:60,tocIndex:11},{value:" \u5FC5\u987B\u6307\u5411\u4E00\u4E2A\u76F8\u5BF9\u4E8E\u5E94\u7528\u6839\u76EE\u5F55\u7684\u5730\u5740\uFF0C\u8FD9\u4E2A\u6587\u4EF6\u5FC5\u987B\u5BFC\u51FA\u4E00\u4E2A\u8FD4\u56DE\u5B57\u7B26\u4E32\u7684\u9ED8\u8BA4\u51FD\u6570\uFF0C\u4F8B\u5982\uFF1A",paraId:60,tocIndex:11},{value:"export default function myImageLoader({ src, width, quality }) {\n  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;\n}\n",paraId:61,tocIndex:11},{value:"\u5C31\u6BD4\u5982\u4F60\u60F3\u8981\u4F7F\u7528 Cloudflare\uFF0C\u53C2\u8003 Cloudflare \u7684 ",paraId:62,tocIndex:11},{value:"url-format",paraId:62,tocIndex:11},{value:" \u6587\u6863\uFF1A",paraId:62,tocIndex:11},{value:"// Docs: https://developers.cloudflare.com/images/url-format\nexport default function cloudflareLoader({ src, width, quality }) {\n  const params = [`width=${width}`, `quality=${quality || 75}`, 'format=auto'];\n  return `https://example.com/cdn-cgi/image/${params.join(',')}/${src}`;\n}\n",paraId:63,tocIndex:11},{value:"\u6B64\u4E3A\u5168\u5C40\u4FEE\u6539\uFF0C\u5982\u679C\u4F60\u53EA\u60F3\u66F4\u6539\u90E8\u5206\u56FE\u7247\uFF0C\u90A3\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:64,tocIndex:11},{value:"loader",paraId:64,tocIndex:11},{value:" prop\uFF1A",paraId:64,tocIndex:11},{value:`'use client';

import Image from 'next/image';

const imageLoader = ({ src, width, quality }) => {
  return \`https://example.com/\${src}?w=\${width}&q=\${quality || 75}\`;
};

export default function Page() {
  return (
    <Image
      loader={imageLoader}
      src="me.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
}
`,paraId:65,tocIndex:11},{value:"\u7528\u4E8E\u81EA\u5B9A\u4E49 Next.js \u7684\u7F13\u5B58\u5904\u7406\u7A0B\u5E8F\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:66,tocIndex:12},{value:`module.exports = {
  experimental: {
    incrementalCacheHandlerPath: require.resolve('./cache-handler.js'),
  },
};
`,paraId:67,tocIndex:12},{value:"\u81EA\u5B9A\u4E49\u7684\u7F13\u5B58\u793A\u4F8B\u4EE3\u7801\u4E3A\uFF1A",paraId:68,tocIndex:12},{value:`// cache-handler.js
const cache = new Map();

module.exports = class CacheHandler {
  constructor(options) {
    this.options = options;
    this.cache = {};
  }

  async get(key) {
    return cache.get(key);
  }

  async set(key, data) {
    cache.set(key, {
      value: data,
      lastModified: Date.now(),
    });
  }
};
`,paraId:69,tocIndex:12},{value:"\u5B8C\u6574\u7684 API \u53C2\u8003 ",paraId:70,tocIndex:12},{value:"https://nextjs.org/docs/app/api-reference/next-config-js/incrementalCacheHandlerPath",paraId:70,tocIndex:12},{value:"\u5F53\u5728\u5F00\u53D1\u6A21\u5F0F\u8FD0\u884C Next.js \uFF0C\u4F60\u53EF\u4EE5\u914D\u7F6E\u65E5\u5FD7\u7B49\u7EA7\u4EE5\u53CA\u63A7\u5236\u53F0\u662F\u5426\u8BB0\u5F55\u5B8C\u6574 URL\u3002\u76EE\u524D\uFF0Clogging \u53EA\u5E94\u7528\u4E8E\u4F7F\u7528 fetch API \u7684\u6570\u636E\u83B7\u53D6\uFF0C\u8FD8\u4E0D\u80FD\u7528\u4E8E Next.js \u5176\u4ED6\u65E5\u5FD7\u3002",paraId:71,tocIndex:13},{value:`module.exports = {
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
`,paraId:72,tocIndex:13},{value:"\u4F7F\u7528\u65B0\u7684 Rust \u7F16\u8BD1\u5668\u7F16\u8BD1 MDX \u6587\u4EF6\uFF0C\u548C ",paraId:73,tocIndex:14},{value:"@next/mdx",paraId:73,tocIndex:14},{value:" \u4E00\u8D77\u4F7F\u7528\uFF1A",paraId:73,tocIndex:14},{value:`const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
`,paraId:74,tocIndex:14},{value:"onDemandEntries \u7528\u4E8E\u63A7\u5236\u5F00\u53D1\u6A21\u5F0F\u4E0B\u670D\u52A1\u7AEF\u5982\u4F55\u5904\u7406\u5185\u5B58\u4E2D\u6784\u5EFA\u7684\u9875\u9762\uFF1A",paraId:75,tocIndex:15},{value:`module.exports = {
  onDemandEntries: {
    // period (in ms) where the server will keep pages in the buffer
    maxInactiveAge: 25 * 1000,
    // number of pages that should be kept simultaneously without being disposed
    pagesBufferLength: 2,
  },
};
`,paraId:76,tocIndex:15},{value:"\u6709\u4E9B\u5305\u53EF\u4EE5\u5BFC\u51FA\u6210\u767E\u4E0A\u5343\u4E2A\u6A21\u5757\uFF0C\u8FD9\u4F1A\u5BFC\u81F4\u5F00\u53D1\u548C\u751F\u4EA7\u4E2D\u7684\u6027\u80FD\u95EE\u9898\u3002",paraId:77,tocIndex:16},{value:"\u6DFB\u52A0\u4E00\u4E2A\u5305\u5230 ",paraId:78,tocIndex:16},{value:"experimental.optimizePackageImports",paraId:78,tocIndex:16},{value:" \u540E\uFF0CNext.js \u53EA\u4F1A\u52A0\u8F7D\u5B9E\u9645\u7528\u5230\u7684\u6A21\u5757\uFF1A",paraId:78,tocIndex:16},{value:`module.exports = {
  experimental: {
    optimizePackageImports: ['package-name'],
  },
};
`,paraId:79,tocIndex:16},{value:"@mui/icons-material",paraId:80,tocIndex:16},{value:", ",paraId:80,tocIndex:16},{value:"@mui/material",paraId:80,tocIndex:16},{value:", ",paraId:80,tocIndex:16},{value:"date-fns",paraId:80,tocIndex:16},{value:", ",paraId:80,tocIndex:16},{value:"lodash",paraId:80,tocIndex:16},{value:", ",paraId:80,tocIndex:16},{value:"lodash-es",paraId:80,tocIndex:16},{value:", ",paraId:80,tocIndex:16},{value:"react-bootstrap",paraId:80,tocIndex:16},{value:", ",paraId:80,tocIndex:16},{value:"@headlessui/react",paraId:80,tocIndex:16},{value:", ",paraId:80,tocIndex:16},{value:"@heroicons/react",paraId:80,tocIndex:16},{value:"\u4EE5\u53CA ",paraId:80,tocIndex:16},{value:"lucide-react",paraId:80,tocIndex:16},{value:" \uFF0C\u8FD9\u4E9B\u5E93\u9ED8\u8BA4\u5DF2\u7ECF\u4F18\u5316\u3002",paraId:80,tocIndex:16},{value:"\u5728\u6784\u5EFA\u7684\u65F6\u5019\uFF0CNext.js \u4F1A\u81EA\u52A8\u8FFD\u8E2A\u6BCF\u4E2A\u9875\u9762\u548C\u5B83\u7684\u4F9D\u8D56\u9879\uFF0C\u4EE5\u786E\u5B9A\u90E8\u7F72\u4E00\u4E2A\u751F\u4EA7\u7248\u672C\u6240\u9700\u8981\u7684\u6240\u6709\u6587\u4EF6\u3002",paraId:81,tocIndex:17},{value:"\u8FD9\u4E2A\u529F\u80FD\u4F1A\u5E2E\u4F60\u5927\u5E45\u51CF\u5C11\u90E8\u7F72\u7684\u5927\u5C0F\u3002\u4E4B\u524D\u4F7F\u7528 Docker \u90E8\u7F72\u7684\u65F6\u5019\uFF0C\u4F60\u9700\u8981\u5B89\u88C5 ",paraId:82,tocIndex:17},{value:"dependencies",paraId:82,tocIndex:17},{value:" \u4E2D\u7684\u6240\u6709\u6587\u4EF6\u624D\u80FD\u8FD0\u884C ",paraId:82,tocIndex:17},{value:"run start",paraId:82,tocIndex:17},{value:"\u3002\u4ECE Next.js 12 \u8D77\uFF0C\u4F60\u53EF\u4EE5\u8FFD\u8E2A ",paraId:82,tocIndex:17},{value:".next/",paraId:82,tocIndex:17},{value:" \u76EE\u5F55\u4E2D\u7684\u8F93\u51FA\u6587\u4EF6\u4EE5\u5B9E\u73B0\u53EA\u5305\u542B\u5FC5\u8981\u7684\u6587\u4EF6\u3002",paraId:82,tocIndex:17},{value:"\u4E4B\u6240\u4EE5\u80FD\u591F\u5B9E\u73B0\uFF0C\u662F\u56E0\u4E3A\u5728 ",paraId:83,tocIndex:17},{value:"next build",paraId:83,tocIndex:17},{value:" \u7684\u65F6\u5019\uFF0CNext.js \u4F1A\u4F7F\u7528 ",paraId:83,tocIndex:17},{value:"@vercel/nft",paraId:83,tocIndex:17},{value:" \u9759\u6001\u5206\u6790 ",paraId:83,tocIndex:17},{value:"import",paraId:83,tocIndex:17},{value:"\u3001",paraId:83,tocIndex:17},{value:"require",paraId:83,tocIndex:17},{value:" \u548C",paraId:83,tocIndex:17},{value:" fs",paraId:83,tocIndex:17},{value:" \u4F7F\u7528\u60C5\u51B5\u6765\u786E\u5B9A\u9875\u9762\u52A0\u8F7D\u7684\u6240\u6709\u6587\u4EF6\u3002",paraId:83,tocIndex:17},{value:"Next.js \u7684\u751F\u4EA7\u670D\u52A1\u5668\u4E5F\u4F1A\u5728 ",paraId:84,tocIndex:17},{value:".next/next-server.js.nft.json",paraId:84,tocIndex:17},{value:"\u4E2D\u8FFD\u8E2A\u6240\u6709\u5B83\u6240\u9700\u8981\u7684\u6587\u4EF6\u548C\u8F93\u51FA\u3002\u8FD9\u4E2A\u6587\u4EF6\u5C31\u53EF\u4EE5\u88AB\u7528\u6765\u5728\u6BCF\u6B21\u8FFD\u8E2A\u7684\u65F6\u5019\uFF0C\u8BFB\u53D6\u6587\u4EF6\u5217\u8868\uFF0C\u7136\u540E\u5C06\u6587\u4EF6\u62F7\u8D1D\u5230\u90E8\u7F72\u4F4D\u7F6E\u4E0A\u3002",paraId:84,tocIndex:17},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u5728 ",paraId:85,tocIndex:17},{value:"next.config.js",paraId:85,tocIndex:17},{value:" \u4E2D\u5F00\u542F\uFF1A",paraId:85,tocIndex:17},{value:`module.exports = {
  output: 'standalone',
};
`,paraId:86,tocIndex:17},{value:"Next.js \u4F1A\u81EA\u52A8\u5728 ",paraId:87,tocIndex:17},{value:".next",paraId:87,tocIndex:17},{value:"\u4E2D\u521B\u5EFA\u4E00\u4E2A ",paraId:87,tocIndex:17},{value:"standalone",paraId:87,tocIndex:17},{value:" \u6587\u4EF6\u5939\uFF0C\u7136\u540E\u62F7\u8D1D ",paraId:87,tocIndex:17},{value:"node_modules",paraId:87,tocIndex:17},{value:" \u4E2D\u751F\u4EA7\u90E8\u7F72\u4F1A\u7528\u5230\u7684\u6240\u6709\u5FC5\u9700\u6587\u4EF6\u3002\u9760\u7740\u8FD9\u4E2A\u6587\u4EF6\u5939\uFF0C\u90FD\u4E0D\u9700\u8981\u518D\u6B21\u5B89\u88C5 ",paraId:87,tocIndex:17},{value:"node_modules",paraId:87,tocIndex:17},{value:" \u5373\u53EF\u5B9E\u73B0\u90E8\u7F72\u3002",paraId:87,tocIndex:17},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNext.js \u63A5\u53D7 ",paraId:88,tocIndex:18},{value:".tsx",paraId:88,tocIndex:18},{value:"\u3001",paraId:88,tocIndex:18},{value:".ts",paraId:88,tocIndex:18},{value:"\u3001",paraId:88,tocIndex:18},{value:".js",paraId:88,tocIndex:18},{value:"\u3001",paraId:88,tocIndex:18},{value:".jsx",paraId:88,tocIndex:18},{value:"\u4F5C\u4E3A\u62D3\u5C55\u540D\u7684\u6587\u4EF6\u3002 pageExtension \u7528\u4E8E\u63A5\u53D7\u5176\u4ED6\u7684\u6269\u5C55\u540D\u6BD4\u5982 markdown \uFF08",paraId:88,tocIndex:18},{value:".md",paraId:88,tocIndex:18},{value:"\u3001",paraId:88,tocIndex:18},{value:".mdx",paraId:88,tocIndex:18},{value:"\uFF09",paraId:88,tocIndex:18},{value:`const withMDX = require('@next/mdx')();

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  experimental: {
    mdxRs: true,
  },
};

module.exports = withMDX(nextConfig);
`,paraId:89,tocIndex:18},{value:"\u5C40\u90E8\u6E32\u67D3\u662F\u4E00\u4E2A\u5B9E\u9A8C\u6027\u7684\u529F\u80FD\uFF0C\u76EE\u524D\u5728 ",paraId:90,tocIndex:19},{value:"next@canary",paraId:90,tocIndex:19},{value:" \u4E2D\u53EF\u7528\uFF1A",paraId:90,tocIndex:19},{value:`npm install next@canary
`,paraId:91,tocIndex:19},{value:"\u5F00\u542F\u5C40\u90E8\u6E32\u67D3\uFF1A",paraId:92,tocIndex:19},{value:`/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    ppr: true,
  },
};

module.exports = nextConfig;
`,paraId:93,tocIndex:19},{value:"\u6CE8\u610F\uFF1A\u5C40\u90E8\u6E32\u67D3\u76EE\u524D\u4E0D\u80FD\u7528\u4E8E\u5BA2\u6237\u7AEF\u5BFC\u822A\u3002",paraId:94,tocIndex:19},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNext.js \u4F1A\u6DFB\u52A0 ",paraId:95,tocIndex:20},{value:"x-powered-by",paraId:95,tocIndex:20},{value:"\u6807\u5934\uFF0C\u5982\u679C\u8981\u7981\u7528\u6B64\u529F\u80FD\uFF1A",paraId:95,tocIndex:20},{value:`module.exports = {
  poweredByHeader: false,
};
`,paraId:96,tocIndex:20},{value:"SourceMap \u9ED8\u8BA4\u5728\u5F00\u53D1\u73AF\u5883\u4E2D\u5F00\u542F\uFF0C\u5728\u751F\u4EA7\u6784\u5EFA\u7684\u65F6\u5019\u4F1A\u7981\u7528\u4EE5\u9632\u6B62\u6E90\u7801\u6CC4\u6F0F\uFF0C\u4F46\u5982\u679C\u4F60\u975E\u8981\u5F00\u542F\uFF1A",paraId:97,tocIndex:21},{value:`module.exports = {
  productionBrowserSourceMaps: true,
};
`,paraId:98,tocIndex:21},{value:"\u4ECE Next.js 13.4 \u8D77\uFF0C\u4E25\u683C\u6A21\u5F0F\u5728 App Router \u4E0B\u9ED8\u8BA4\u4E3A ",paraId:99,tocIndex:22},{value:"true",paraId:99,tocIndex:22},{value:"\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u914D\u7F6E\u4EC5\u7528\u4E8E Pages Router\u3002\u4E0D\u8FC7\u4F60\u4F9D\u7136\u53EF\u4EE5\u8BBE\u7F6E ",paraId:99,tocIndex:22},{value:"reactStrictMode: false",paraId:99,tocIndex:22},{value:" \u6765\u7981\u7528\u4E25\u683C\u6A21\u5F0F\u3002",paraId:99,tocIndex:22},{value:"React \u7684\u4E25\u683C\u6A21\u5F0F\u662F\u4E00\u4E2A\u4E3A\u4E86\u7A81\u51FA\u5E94\u7528\u4E2D\u6F5C\u5728\u95EE\u9898\u7684\u529F\u80FD\uFF0C\u5728\u5F00\u53D1\u6A21\u5F0F\u4E2D\u4F7F\u7528\u4F1A\u6709\u52A9\u4E8E\u8BC6\u522B\u4E0D\u5B89\u5168\u7684\u751F\u547D\u5468\u671F\u3001\u8FC7\u671F\u7684 API \u7528\u6CD5\u4EE5\u53CA\u5176\u4ED6\u529F\u80FD\u3002\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u5728 ",paraId:100,tocIndex:22},{value:"next.config.js",paraId:100,tocIndex:22},{value:" \u4E2D\u914D\u7F6E\uFF1A",paraId:100,tocIndex:22},{value:`module.exports = {
  reactStrictMode: true,
};
`,paraId:101,tocIndex:22},{value:"\u5982\u679C\u4E0D\u5E0C\u671B\u6574\u4E2A\u5E94\u7528\u90FD\u4F7F\u7528\u4E25\u683C\u6A21\u5F0F\uFF0C\u53EA\u9488\u5BF9\u67D0\u4E9B\u9875\u9762\u4F7F\u7528\u7684\u8BDD\uFF0C\u90A3\u53EF\u4EE5\u7528 ",paraId:102,tocIndex:22},{value:"<React.StrictMode>",paraId:102,tocIndex:22},{value:"\u3002",paraId:102,tocIndex:22},{value:"Next.js \u4F1A\u81EA\u52A8\u6253\u5305\u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E2D\u7684\u4F9D\u8D56\u9879\u3002\u5982\u679C\u67D0\u4E00\u4E2A\u4F9D\u8D56\u9879\u4F7F\u7528\u4E86 Nodejs \u7279\u5B9A\u7684\u529F\u80FD\uFF0C\u90A3\u4F60\u53EF\u4EE5\u9009\u62E9\u4ECE Bundle \u4E2D\u53BB\u9664\u8BE5\u4F9D\u8D56\u9879\uFF0C\u7136\u540E\u4F7F\u7528\u539F\u751F\u7684 Nodejs ",paraId:103,tocIndex:23},{value:"require",paraId:103,tocIndex:23},{value:"\u3002",paraId:103,tocIndex:23},{value:`/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@acme/ui'],
  },
};

module.exports = nextConfig;
`,paraId:104,tocIndex:23},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CNext.js \u4F1A\u5C06\u5E26\u5C3E\u90E8\u659C\u6760\u7684 URL \u91CD\u5B9A\u5411\u5230\u6CA1\u6709\u5C3E\u90E8\u659C\u6760\u7684\u5730\u5740.\u4E3E\u4E2A\u4F8B\u5B50\uFF0C",paraId:105,tocIndex:24},{value:"/about/",paraId:105,tocIndex:24},{value:"\u4F1A\u91CD\u5B9A\u5411\u5230 ",paraId:105,tocIndex:24},{value:"/about",paraId:105,tocIndex:24},{value:"\u3002\u4F60\u4E5F\u53EF\u4EE5\u8FDB\u884C\u76F8\u53CD\u7684\u914D\u7F6E\uFF0C\u5C06\u6CA1\u6709\u5C3E\u90E8\u659C\u6760\u7684\u5730\u5740\u91CD\u5B9A\u5411\u5230\u5E26\u5C3E\u90E8\u659C\u6760\u7684\u5730\u5740\uFF1A",paraId:105,tocIndex:24},{value:`module.exports = {
  trailingSlash: true,
};
`,paraId:106,tocIndex:24},{value:"\u73B0\u5728\uFF0C",paraId:107,tocIndex:24},{value:"/about",paraId:107,tocIndex:24},{value:"\u91CD\u5B9A\u5230 ",paraId:107,tocIndex:24},{value:"/about/",paraId:107,tocIndex:24},{value:"\u3002",paraId:107,tocIndex:24},{value:"Next.js \u53EF\u4EE5\u81EA\u52A8\u7F16\u8BD1\u548C\u6253\u5305\u6765\u81EA\u672C\u5730\u7684\u5305\uFF08\u5982 monorepos\uFF09\u6216\u8005\u5916\u90E8\u4F9D\u8D56\uFF08node_modules\uFF09\u3002\u4EE5\u524D\u662F\u901A\u8FC7\u4F7F\u7528 ",paraId:108,tocIndex:25},{value:"next-transpile-modules",paraId:108,tocIndex:25},{value:" \u8FD9\u4E2A\u5305\uFF0C\u6709\u4E86\u8FD9\u4E2A\u9009\u9879\u5C31\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E86\uFF1A",paraId:108,tocIndex:25},{value:`/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@acme/ui', 'lodash-es'],
};

module.exports = nextConfig;
`,paraId:109,tocIndex:25},{value:"\u8FD9\u4E9B\u529F\u80FD\u662F\u5B9E\u9A8C\u6027\u7684\uFF0C\u53EA\u6709\u5F53\u4F7F\u7528 ",paraId:110,tocIndex:26},{value:"next --turbo",paraId:110,tocIndex:26},{value:" \u7684\u65F6\u5019\u624D\u4F1A\u5F00\u542F\u3002",paraId:110,tocIndex:26},{value:"\u76EE\u524D\uFF0CTurbopack \u652F\u6301 webpack loader API \u7684\u5B50\u96C6\uFF0C\u5141\u8BB8\u4F60\u5728 Turbopack \u4E2D\u4F7F\u7528\u4E00\u4E9B webpack loader \u8F6C\u6362\u4EE3\u7801\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:111,tocIndex:26},{value:`module.exports = {
  experimental: {
    turbo: {
      rules: {
        // Option format
        '*.md': [
          {
            loader: '@mdx-js/loader',
            options: {
              format: 'md',
            },
          },
        ],
        // Option-less format
        '*.mdx': ['@mdx-js/loader'],
      },
    },
  },
};
`,paraId:112,tocIndex:26},{value:"\u73B0\u5728\uFF0C\u4F60\u53EF\u4EE5\u5728\u5E94\u7528\u4E2D\u4F7F\u7528\uFF1A",paraId:113,tocIndex:26},{value:`import MyDoc from './my-doc.mdx';

export default function Home() {
  return <MyDoc />;
}
`,paraId:114,tocIndex:26},{value:"\u7C7B\u4F3C\u4E8E webpack \u7684 resolve.alias\uFF0CTurbopack \u4E5F\u53EF\u4EE5\u914D\u7F6E\u522B\u540D\uFF1A",paraId:115,tocIndex:26},{value:`module.exports = {
  experimental: {
    turbo: {
      resolveAlias: {
        underscore: 'lodash',
        mocha: { browser: 'mocha/browser-entry.js' },
      },
    },
  },
};
`,paraId:116,tocIndex:26},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u4F7F\u7528 ",paraId:117,tocIndex:26},{value:"import underscore from 'underscore'",paraId:117,tocIndex:26},{value:"\u5176\u5B9E\u4F1A\u5BFC\u5165 lodash\u3002",paraId:117,tocIndex:26},{value:"Turbopack \u4E5F\u652F\u6301\u6761\u4EF6\u522B\u540D\uFF0C\u76EE\u524D\u53EA\u652F\u6301 browser \u8FD9\u4E2A\u6761\u4EF6\u3002\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5F53 Turbopack \u4EE5\u6D4F\u89C8\u5668\u73AF\u5883\u4E3A\u76EE\u6807\u7684\u65F6\u5019\uFF0C\u5BFC\u5165 mocha \u6A21\u5757\u76F8\u5F53\u4E8E\u5BFC\u5165 mocha/browser-entry.js\u3002",paraId:118,tocIndex:26},{value:"\u5BF9\u9759\u6001\u7C7B\u578B\u94FE\u63A5\u7684\u5B9E\u9A8C\u6027\u652F\u6301\uFF0C\u6B64\u529F\u80FD\u9700\u8981\u5728 App Router \u4E0B\u4EE5\u53CA\u5F00\u542F\u4F7F\u7528 TypeScript\uFF1A",paraId:119,tocIndex:27},{value:`/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    typedRoutes: true,
  },
};

module.exports = nextConfig;
`,paraId:120,tocIndex:27},{value:"\u5982\u679C\u51FA\u73B0 TypeScript \u9519\u8BEF\uFF0C\u751F\u4EA7\u6784\u5EFA\uFF08",paraId:121,tocIndex:28},{value:"next build",paraId:121,tocIndex:28},{value:"\uFF09\u4F1A\u5931\u8D25\u3002\u5982\u679C\u4F60\u5E0C\u671B\u5373\u4FBF\u6709\u9519\u8BEF\uFF0C\u4E5F\u8981\u6784\u5EFA\u751F\u4EA7\u4EE3\u7801\uFF1A",paraId:121,tocIndex:28},{value:`module.exports = {
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};
`,paraId:122,tocIndex:28},{value:"URL \u5BFC\u5165\u662F\u4E00\u9879\u5B9E\u9A8C\u6027\u529F\u80FD\uFF0C\u5141\u8BB8\u4F60\u4ECE\u5916\u90E8\u670D\u52A1\u5668\u5BFC\u5165\u6A21\u5757\u3002",paraId:123,tocIndex:29},{value:"\u5982\u679C\u4F60\u8981\u4F7F\u7528\u8BE5\u529F\u80FD\uFF0C\u4F7F\u7528\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:124,tocIndex:29},{value:`module.exports = {
  experimental: {
    urlImports: ['https://example.com/assets/', 'https://cdn.skypack.dev'],
  },
};
`,paraId:125,tocIndex:29},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6DFB\u52A0\u4E86\u5141\u8BB8\u7684\u8D44\u6E90\u524D\u7F00\uFF08\u6BD5\u7ADF\u8981\u4FDD\u8BC1\u5B89\u5168\uFF09\u3002",paraId:126,tocIndex:29},{value:"\u7136\u540E\u4F60\u5C31\u53EF\u4EE5\u76F4\u63A5\u901A\u8FC7 URL \u5BFC\u5165\u6A21\u5757\uFF1A",paraId:127,tocIndex:29},{value:`import { a, b, c } from 'https://example.com/assets/some/module.js';
`,paraId:128,tocIndex:29},{value:"\u5F53\u4F7F\u7528 URL \u5BFC\u5165\u7684\u65F6\u5019\uFF0CNext.js \u4F1A\u521B\u5EFA\u4E00\u4E2A ",paraId:129,tocIndex:29},{value:"next.lock",paraId:129,tocIndex:29},{value:"\u76EE\u5F55\u5305\u542B\u4E00\u4E2A lockfile \u548C\u83B7\u53D6\u7684\u8D44\u6E90\u3002\u8FD9\u4E2A\u76EE\u5F55\u5FC5\u987B\u8981\u63D0\u4EA4\u5230 Git\uFF0C\u4E0D\u80FD\u901A\u8FC7 ",paraId:129,tocIndex:29},{value:".gitignore",paraId:129,tocIndex:29},{value:"\u5FFD\u7565\u3002",paraId:129,tocIndex:29},{value:"\u5F53\u8FD0\u884C ",paraId:130,tocIndex:29},{value:"next dev",paraId:130,tocIndex:29},{value:"\u7684\u65F6\u5019\uFF0CNext.js \u4F1A\u4E0B\u8F7D\u5E76\u6DFB\u52A0\u6240\u6709\u65B0\u53D1\u73B0\u7684\u5BFC\u5165 URL \u5230 lockfile \u4E2D\u3002\u5F53\u8FD0\u884C ",paraId:130,tocIndex:29},{value:"next build",paraId:130,tocIndex:29},{value:"\u7684\u65F6\u5019\uFF0CNext.js \u4F1A\u53EA\u4F7F\u7528 lockfile \u6784\u5EFA\u7528\u4E8E\u751F\u4EA7\u7248\u672C\u7684\u5E94\u7528\u3002",paraId:130,tocIndex:29},{value:"\u4F7F\u7528 URL \u5BFC\u5165\u7684\u4E00\u4E9B\u4F8B\u5B50\uFF1A",paraId:131,tocIndex:29},{value:"\u4F7F\u7528 skypack\uFF1A",paraId:132,tocIndex:29},{value:`import confetti from 'https://cdn.skypack.dev/canvas-confetti';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    confetti();
  });
  return <p>Hello</p>;
};
`,paraId:133,tocIndex:29},{value:"\u9759\u6001\u56FE\u7247\u5BFC\u5165\uFF1A",paraId:134,tocIndex:29},{value:`import Image from 'next/image';
import logo from 'https://example.com/assets/logo.png';

export default () => (
  <div>
    <Image src={logo} placeholder="blur" />
  </div>
);
`,paraId:135,tocIndex:29},{value:"CSS \u4E2D\u7684 URLs\uFF1A",paraId:136,tocIndex:29},{value:`.className {
  background: url('https://example.com/assets/hero.jpg');
}
`,paraId:137,tocIndex:29},{value:"\u5BFC\u5165\u8D44\u6E90\uFF1A",paraId:138,tocIndex:29},{value:`const logo = new URL('https://example.com/assets/file.txt', import.meta.url);

console.log(logo.pathname);

// prints "/_next/static/media/file.a9727b5d.txt"
`,paraId:139,tocIndex:29},{value:"\u4E3A\u4E86\u6269\u5C55 webpack \u7684\u7528\u6CD5\uFF0C\u4F60\u9700\u8981\u5728 next.config.js \u4E2D\u5B9A\u4E49\u4E00\u4E2A\u51FD\u6570\u7528\u4E8E\u6269\u5C55\u5B83\u7684\u914D\u7F6E\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:140,tocIndex:30},{value:`module.exports = {
  webpack: (
    config,
    { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack },
  ) => {
    // Important: return the modified config
    return config;
  },
};
`,paraId:141,tocIndex:30},{value:"webpack \u51FD\u6570\u4F1A\u88AB\u6267\u884C\u4E24\u6B21\uFF0C\u4E00\u6B21\u5728\u670D\u52A1\u7AEF\uFF0C\u4E00\u6B21\u5728\u5BA2\u6237\u7AEF\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 isServer \u5C5E\u6027\u6765\u533A\u5206\u662F\u5BA2\u6237\u7AEF\u914D\u7F6E\u8FD8\u662F\u670D\u52A1\u7AEF\u914D\u7F6E\u3002",paraId:142,tocIndex:30},{value:"webpack \u51FD\u6570\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u662F\u4E00\u4E2A\u5177\u6709\u4EE5\u4E0B\u5C5E\u6027\u7684\u5BF9\u8C61\uFF1A",paraId:143,tocIndex:30},{value:"buildId",paraId:144,tocIndex:30},{value:"\uFF1A",paraId:144,tocIndex:30},{value:"String",paraId:144,tocIndex:30},{value:"\uFF0C\u6784\u5EFA ID\uFF0C\u6784\u5EFA\u7684\u552F\u4E00\u6807\u8BC6",paraId:144,tocIndex:30},{value:"dev",paraId:144,tocIndex:30},{value:"\uFF1A",paraId:144,tocIndex:30},{value:"Boolean",paraId:144,tocIndex:30},{value:" \u7F16\u8BD1\u662F\u5426\u4F1A\u5728\u5F00\u53D1\u4E2D\u5B8C\u6210",paraId:144,tocIndex:30},{value:"isServer",paraId:144,tocIndex:30},{value:"\uFF1A",paraId:144,tocIndex:30},{value:"Boolean",paraId:144,tocIndex:30},{value:"\uFF0C\u5982\u679C true \u8868\u793A\u670D\u52A1\u7AEF\u7F16\u8BD1\uFF0C\u5982\u679C false \u8868\u793A\u5BA2\u6237\u7AEF\u7F16\u8BD1",paraId:144,tocIndex:30},{value:"nextRuntime",paraId:144,tocIndex:30},{value:"\uFF1A",paraId:144,tocIndex:30},{value:"String | undefined",paraId:144,tocIndex:30},{value:"\uFF0C\u670D\u52A1\u7AEF\u7F16\u8BD1\u7684\u76EE\u6807\u8FD0\u884C\u65F6\uFF0C\u8981\u4E48\u662F ",paraId:144,tocIndex:30},{value:'"edge"',paraId:144,tocIndex:30},{value:" \uFF0C\u8981\u4E48\u662F ",paraId:144,tocIndex:30},{value:'"nodejs"',paraId:144,tocIndex:30},{value:"\uFF0C",paraId:144,tocIndex:30},{value:"undefined",paraId:144,tocIndex:30},{value:"\u7528\u4E8E\u5BA2\u6237\u7AEF\u7F16\u8BD1",paraId:144,tocIndex:30},{value:"defaultLoaders",paraId:144,tocIndex:30},{value:"\uFF1A",paraId:144,tocIndex:30},{value:"Object",paraId:144,tocIndex:30},{value:` Next.js \u5185\u90E8\u4F7F\u7528\u7684\u9ED8\u8BA4\u52A0\u8F7D\u5668
`,paraId:144,tocIndex:30},{value:"babel",paraId:145,tocIndex:30},{value:"\uFF1A",paraId:145,tocIndex:30},{value:"Object",paraId:145,tocIndex:30},{value:" \u9ED8\u8BA4\u7684 ",paraId:145,tocIndex:30},{value:"babel-loader",paraId:145,tocIndex:30},{value:" \u914D\u7F6E",paraId:145,tocIndex:30},{value:"defaultLoaders.babel",paraId:146,tocIndex:30},{value:" \u793A\u4F8B\u7528\u6CD5\uFF1A",paraId:146,tocIndex:30},{value:`// \u8FD9\u6BB5\u6765\u81EA\u4E8E @next/mdx \u63D2\u4EF6\u6E90\u7801:
// https://github.com/vercel/next.js/tree/canary/packages/next-mdx
module.exports = {
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\\.mdx/,
      use: [
        options.defaultLoaders.babel,
        {
          loader: '@mdx-js/loader',
          options: pluginOptions.options,
        },
      ],
    });

    return config;
  },
};
`,paraId:147,tocIndex:30},{value:"\u5728\u8C03\u8BD5 Web Vitals \u76F8\u5173\u7684\u95EE\u9898\u65F6\uFF0C\u5982\u679C\u80FD\u67E5\u660E\u6839\u6E90\u901A\u5E38\u4F1A\u5F88\u6709\u5E2E\u52A9\u3002\u6BD4\u5982\u5728 CLS \u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u60F3\u77E5\u9053\u6700\u5927\u7684\u5E03\u5C40\u504F\u79FB\u53D1\u751F\u65F6\u504F\u79FB\u7684\u7B2C\u4E00\u4E2A\u5143\u7D20\uFF0C\u6216\u8005 LCP \u4E2D\uFF0C\u6211\u4EEC\u53EF\u80FD\u60F3\u8981\u77E5\u9053 LCP \u5BF9\u5E94\u7684\u5143\u7D20\u3002\u5982\u679C\u8BE5\u5143\u7D20\u662F\u56FE\u7247\uFF0C\u77E5\u9053\u5B83\u7684 URL \u6709\u52A9\u4E8E\u6211\u4EEC\u8FDB\u884C\u4F18\u5316\u3002",paraId:148,tocIndex:31},{value:"\u8FD9\u5C31\u9700\u8981\u7528\u5230 webVitalsAttribution \u914D\u7F6E\u9879\uFF0C\u5B83\u4F1A\u5E2E\u52A9\u6211\u4EEC\u83B7\u53D6\u66F4\u6DF1\u5C42\u7684\u4FE1\u606F\u5982 ",paraId:149,tocIndex:31},{value:"PerformanceEventTiming",paraId:149,tocIndex:31},{value:"\u3001",paraId:149,tocIndex:31},{value:"PerformanceNavigationTiming",paraId:149,tocIndex:31},{value:"\u3001",paraId:149,tocIndex:31},{value:"PerformanceResourceTiming",paraId:149,tocIndex:31},{value:"\u3002",paraId:149,tocIndex:31},{value:`experimental: {
  webVitalsAttribution: ['CLS', 'LCP'];
}
`,paraId:150,tocIndex:31},{value:"\u6709\u6548\u7684\u5F52\u56E0\u503C\u90FD\u662F web-vitals \u4E2D\u7684\u7279\u5B9A\u6307\u6807\uFF0C\u5728 ",paraId:151,tocIndex:31},{value:"NextWebVitalsMetric",paraId:151,tocIndex:31},{value:" \u4E2D\u53EF\u4EE5\u67E5\u770B\uFF1A",paraId:151,tocIndex:31},{value:`export type NextWebVitalsMetric = {
  id: string
  startTime: number
  value: number
} & (
  | {
      label: 'web-vital'
      name: 'FCP' | 'LCP' | 'CLS' | 'FID' | 'TTFB' | 'INP'
    }
  | {
      label: 'custom'
      name:
        | 'Next.js-hydration'
        | 'Next.js-route-change-to-render'
        | 'Next.js-render'
    }
)
`,paraId:152,tocIndex:31},{value:"https://nextjs.org/docs/app/api-reference/next-config-js",paraId:153,tocIndex:32}]}}]);
