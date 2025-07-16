"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[5965],{75965:function(d,a,e){e.r(a),e.d(a,{texts:function(){return n}});const n=[{value:"Next.js \u53EF\u4EE5\u901A\u8FC7\u6839\u76EE\u5F55\u7684 ",paraId:0,tocIndex:0},{value:"next.config.js",paraId:0,tocIndex:0},{value:" \u8FDB\u884C\u914D\u7F6E\uFF1A",paraId:0,tocIndex:0},{value:`/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
};

module.exports = nextConfig;
`,paraId:1,tocIndex:0},{value:"\u6B63\u5982\u6587\u4EF6\u7684\u6269\u5C55\u540D\u662F ",paraId:2,tocIndex:0},{value:".js",paraId:2,tocIndex:0},{value:"\uFF0C",paraId:2,tocIndex:0},{value:"next.config.js",paraId:2,tocIndex:0},{value:" \u662F\u4E00\u4E2A\u5E38\u89C4\u7684 Node.js \u6A21\u5757\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A JSON \u6587\u4EF6\u3002\u5B83\u4F1A\u5728 Next.js server \u548C\u6784\u5EFA\u9636\u6BB5\u88AB\u7528\u5230\uFF0C\u5E76\u4E14\u4E0D\u5305\u542B\u5728\u6D4F\u89C8\u5668\u6784\u5EFA\u4E2D\uFF08\u4EE3\u7801\u4E0D\u4F1A\u6253\u5305\u5230\u5BA2\u6237\u7AEF\uFF09\u3002",paraId:2,tocIndex:0},{value:"\u5982\u679C\u4F60\u9700\u8981 ECMAScript \u6A21\u5757\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:3,tocIndex:0},{value:"next.config.mjs",paraId:3,tocIndex:0},{value:"\uFF1A",paraId:3,tocIndex:0},{value:`/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  /* config options here */
};

export default nextConfig;
`,paraId:4,tocIndex:0},{value:"\u4F60\u4E5F\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u51FD\u6570\uFF1A",paraId:5,tocIndex:0},{value:`export default (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  };
  return nextConfig;
};
`,paraId:6,tocIndex:0},{value:"\u4ECE Next.js 12.1.0 \u8D77\uFF0C\u4F60\u8FD8\u53EF\u4EE5\u4F7F\u7528\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF1A",paraId:7,tocIndex:0},{value:`module.exports = async (phase, { defaultConfig }) => {
  /**
   * @type {import('next').NextConfig}
   */
  const nextConfig = {
    /* config options here */
  };
  return nextConfig;
};
`,paraId:8,tocIndex:0},{value:"\u5176\u4E2D ",paraId:9,tocIndex:0},{value:"phase",paraId:9,tocIndex:0},{value:" \u8868\u793A\u914D\u7F6E\u52A0\u8F7D\u7684\u5F53\u524D\u4E0A\u4E0B\u6587\u3002\u901A\u8FC7",paraId:9,tocIndex:0},{value:"\u67E5\u770B\u6E90\u7801",paraId:9,tocIndex:0},{value:"\uFF0C\u53EF\u4EE5\u77E5\u9053 ",paraId:9,tocIndex:0},{value:"phase",paraId:9,tocIndex:0},{value:" \u7684\u503C\u4E00\u5171\u6709 5 \u4E2A\uFF1A",paraId:9,tocIndex:0},{value:`export const PHASE_EXPORT = 'phase-export';
export const PHASE_PRODUCTION_BUILD = 'phase-production-build';
export const PHASE_PRODUCTION_SERVER = 'phase-production-server';
export const PHASE_DEVELOPMENT_SERVER = 'phase-development-server';
export const PHASE_TEST = 'phase-test';
`,paraId:10,tocIndex:0},{value:"\u53EF\u4EE5\u901A\u8FC7 ",paraId:11,tocIndex:0},{value:"next/constants",paraId:11,tocIndex:0},{value:" \u5BFC\u5165\uFF0C\u6839\u636E\u4E0D\u540C\u7684\u9636\u6BB5\u8FDB\u884C\u81EA\u5B9A\u4E49\u914D\u7F6E\uFF1A",paraId:11,tocIndex:0},{value:`const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      /* \u8FD9\u91CC\u653E development \u914D\u7F6E\u9009\u9879 */
    };
  }

  return {
    /* \u9664\u4E86 development \u9636\u6BB5\u7684\u5176\u4ED6\u9636\u6BB5\u7684\u914D\u7F6E */
  };
};
`,paraId:12,tocIndex:0},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6CE8\u91CA\u884C\u7684\u5730\u65B9\u5C31\u662F\u4F60\u53EF\u4EE5\u653E\u914D\u7F6E\u7684\u5730\u65B9\uFF0C\u5B9E\u9645\u4E0A\uFF0CNext.js \u5B9A\u4E49\u7684\u914D\u7F6E\u975E\u5E38\u591A\uFF0C\u53EF\u4EE5\u67E5\u770B",paraId:13,tocIndex:0},{value:"\u6E90\u7801\u914D\u7F6E\u6587\u4EF6",paraId:13,tocIndex:0},{value:"\u3002",paraId:13,tocIndex:0},{value:"\u7136\u800C\uFF0C\u8FD9\u4E9B\u914D\u7F6E\u53C8\u90FD\u4E0D\u662F\u5FC5\u987B\u7684\uFF0C\u4E5F\u6CA1\u6709\u5FC5\u8981\u6E05\u695A\u7684\u4E86\u89E3\u6BCF\u4E2A\u914D\u7F6E\u7684\u4F5C\u7528\uFF0C\u5927\u81F4\u770B\u4E00\u4E0B\uFF0C\u6709\u4E2A\u5370\u8C61\u5373\u53EF\uFF0C\u9700\u8981\u7528\u5230\u7684\u65F6\u5019\u518D\u53BB\u7EC6\u67E5\u3002",paraId:14,tocIndex:0},{value:"\u56E0\u4E3A\u8981\u8BB2\u89E3\u7684\u914D\u7F6E\u6709 36 \u4E2A\uFF0C\u5185\u5BB9\u7E41\u7410\u7EC6\u8282\u4E14\u5E9E\u5927\uFF0C\u6240\u4EE5 ",paraId:15,tocIndex:0},{value:"next.config.js",paraId:15,tocIndex:0},{value:" \u7684\u914D\u7F6E\u90E8\u5206\u62C6\u5206\u4E3A\u4E0A\u4E0B\u4E24\u7BC7\u3002\u4E0A\u7BC7\u8BB2\u89E3\u8BF7\u6C42\u76F8\u5173\u7684 headers\u3001redirects\u3001rewrites\uFF0C\u8FD9\u662F Next.js \u4E2D\u5E38\u7528\u7684\u914D\u7F6E\uFF0C\u4E14\u5185\u5BB9\u6709\u5F88\u591A\u76F8\u4F3C\u4E4B\u5904\uFF0C\u653E\u5728\u4E00\u8D77\u65B9\u4FBF\u89E6\u7C7B\u65C1\u901A\u3002\u4E0B\u7BC7\u8BB2\u89E3\u5269\u4F59\u7684 33 \u4E2A\u914D\u7F6E\uFF0C\u6BCF\u4E2A\u914D\u7F6E\u5185\u5BB9\u90FD\u4E0D\u591A\uFF0C\u4E86\u89E3\u5373\u53EF\u3002",paraId:15,tocIndex:0},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u5F00\u59CB\u5B66\u4E60\u5427\uFF01",paraId:16,tocIndex:0},{value:"Headers \u7528\u4E8E\u8BBE\u7F6E\u81EA\u5B9A\u4E49 HTTP \u6807\u5934\uFF0C\u4F7F\u7528 ",paraId:17,tocIndex:2},{value:"next.config.js",paraId:17,tocIndex:2},{value:" \u7684 ",paraId:17,tocIndex:2},{value:"headers",paraId:17,tocIndex:2},{value:"\u5B57\u6BB5\uFF1A",paraId:17,tocIndex:2},{value:`module.exports = {
  async headers() {
    return [
      {
        source: '/about',
        headers: [
          {
            key: 'x-custom-header',
            value: 'my custom header value',
          },
          {
            key: 'x-another-custom-header',
            value: 'my other custom header value',
          },
        ],
      },
    ];
  },
};
`,paraId:18,tocIndex:2},{value:"\u6B64\u65F6\u8BBF\u95EE ",paraId:19,tocIndex:2},{value:"/about",paraId:19,tocIndex:2},{value:"\uFF0C\u53EF\u4EE5\u770B\u5230\uFF1A",paraId:19,tocIndex:2},{value:"headers",paraId:20,tocIndex:2},{value:"\u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B ",paraId:20,tocIndex:2},{value:"soruce",paraId:20,tocIndex:2},{value:" \u548C ",paraId:20,tocIndex:2},{value:"headers",paraId:20,tocIndex:2},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5176\u4E2D\uFF1A",paraId:20,tocIndex:2},{value:"source",paraId:21,tocIndex:2},{value:" \u8868\u793A\u4F20\u5165\u7684\u8BF7\u6C42\u8DEF\u5F84",paraId:21,tocIndex:2},{value:"headers",paraId:21,tocIndex:2},{value:" \u662F\u4E00\u4E2A\u5305\u542B key \u548C value \u5C5E\u6027\u7684\u54CD\u5E94\u6807\u5934\u5BF9\u8C61\u6570\u7EC4",paraId:21,tocIndex:2},{value:"\u9664\u4E86\u8FD9\u4E24\u4E2A\u503C\u5916\uFF0C\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\uFF1A",paraId:22,tocIndex:2},{value:"basePath",paraId:23,tocIndex:2},{value:"\uFF1A",paraId:23,tocIndex:2},{value:"false",paraId:23,tocIndex:2},{value:" \u6216\u8005 ",paraId:23,tocIndex:2},{value:"undefined",paraId:23,tocIndex:2},{value:"\u3002\u5F53\u503C\u4E3A ",paraId:23,tocIndex:2},{value:"false",paraId:23,tocIndex:2},{value:" \uFF0C\u5339\u914D\u65F6\u4E0D\u4F1A\u5305\u542B ",paraId:23,tocIndex:2},{value:"basePath",paraId:23,tocIndex:2},{value:"\uFF0C\u53EA\u80FD\u7528\u4E8E\u5916\u90E8\u91CD\u5199",paraId:23,tocIndex:2},{value:"locale",paraId:23,tocIndex:2},{value:"\uFF1A",paraId:23,tocIndex:2},{value:"false",paraId:23,tocIndex:2},{value:" \u6216\u8005 ",paraId:23,tocIndex:2},{value:"undefined",paraId:23,tocIndex:2},{value:"\uFF0C\u5339\u914D\u65F6\u662F\u5426\u5E94\u8BE5\u5305\u542B locale",paraId:23,tocIndex:2},{value:"has",paraId:23,tocIndex:2},{value:"\uFF1A\u4E00\u4E2A\u6709 ",paraId:23,tocIndex:2},{value:"type",paraId:23,tocIndex:2},{value:"\u3001",paraId:23,tocIndex:2},{value:"key",paraId:23,tocIndex:2},{value:"\u3001",paraId:23,tocIndex:2},{value:"value",paraId:23,tocIndex:2},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4",paraId:23,tocIndex:2},{value:"missing",paraId:23,tocIndex:2},{value:"\uFF1A\u4E00\u4E2A\u6709 ",paraId:23,tocIndex:2},{value:"type",paraId:23,tocIndex:2},{value:"\u3001",paraId:23,tocIndex:2},{value:"key",paraId:23,tocIndex:2},{value:"\u3001",paraId:23,tocIndex:2},{value:"value",paraId:23,tocIndex:2},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4",paraId:23,tocIndex:2},{value:"headers \u4F1A\u5728\u6587\u4EF6\u7CFB\u7EDF\uFF08\u5305\u62EC\u9875\u9762\u548C ",paraId:24,tocIndex:2},{value:"/public",paraId:24,tocIndex:2},{value:" \u6587\u4EF6\uFF09\u4E4B\u524D\u88AB\u89E6\u53D1\u3002",paraId:24,tocIndex:2},{value:"\u8FD9\u4E9B\u5B57\u6BB5\u6211\u4EEC\u6765\u4E00\u4E00\u4E3E\u4F8B\u4ECB\u7ECD\u3002",paraId:25,tocIndex:2},{value:"source \u8868\u793A\u4F20\u5165\u7684\u8BF7\u6C42\u8DEF\u5F84\uFF0C\u9664\u4E86\u53EF\u4EE5\u5339\u914D\u5177\u4F53\u7684\u503C\uFF0C\u8FD8\u652F\u6301\u4E09\u79CD\u5339\u914D\u6A21\u5F0F\uFF1A",paraId:26,tocIndex:3},{value:"\u666E\u901A\u7684\u8DEF\u5F84\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C",paraId:27,tocIndex:4},{value:"/blog:slug",paraId:27,tocIndex:4},{value:" \u4F1A\u5339\u914D ",paraId:27,tocIndex:4},{value:"/blog/hello-world",paraId:27,tocIndex:4},{value:"\uFF08\u65E0\u5D4C\u5957\u8DEF\u5F84\uFF0C\u4E5F\u5C31\u662F\u8BF4 ",paraId:27,tocIndex:4},{value:"/blog/hello-world/about",paraId:27,tocIndex:4},{value:"\u4E0D\u4F1A\u5339\u914D\uFF09",paraId:27,tocIndex:4},{value:`// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/blog/:slug',
        headers: [
          {
            key: 'x-slug',
            value: ':slug', // \u5339\u914D\u53C2\u6570\u53EF\u4EE5\u5728 value \u4E2D\u4F7F\u7528
          },
          {
            key: 'x-slug-:slug', // \u5339\u914D\u53C2\u6570\u53EF\u4EE5\u5728 key \u4E2D\u4F7F\u7528
            value: 'my other custom header value',
          },
        ],
      },
    ];
  },
};
`,paraId:28,tocIndex:4},{value:"\u8BBF\u95EE ",paraId:29,tocIndex:4},{value:"/blog/hello-world",paraId:29,tocIndex:4},{value:"\uFF0C\u53EF\u4EE5\u770B\u5230\uFF1A",paraId:29,tocIndex:4},{value:"\u4F46\u8BBF\u95EE ",paraId:30,tocIndex:4},{value:"/blog/hello-world/about",paraId:30,tocIndex:4},{value:"\u5C31\u4E0D\u4F1A\u6709\u81EA\u5B9A\u4E49\u6807\u5934\u3002",paraId:30,tocIndex:4},{value:"\u5728\u53C2\u6570\u540E\u4F7F\u7528 ",paraId:31,tocIndex:5},{value:"*",paraId:31,tocIndex:5},{value:" \u5B9E\u73B0\u901A\u914D\u7B26\u8DEF\u5F84\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:31,tocIndex:5},{value:"/blog/:slug*",paraId:31,tocIndex:5},{value:" \u4F1A\u5339\u914D ",paraId:31,tocIndex:5},{value:"/blog/a/b/c/d/hello-world",paraId:31,tocIndex:5},{value:"\uFF1A",paraId:31,tocIndex:5},{value:`// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/blog/:slug*',
        headers: [
          {
            key: 'x-slug',
            value: ':slug*',
          },
          {
            key: 'x-slug-:slug*',
            value: 'my other custom header value',
          },
        ],
      },
    ];
  },
};
`,paraId:32,tocIndex:5},{value:"\u8BBF\u95EE ",paraId:33,tocIndex:5},{value:"/blog/hello-world/about",paraId:33,tocIndex:5},{value:"\uFF0C\u53EF\u4EE5\u770B\u5230\uFF1A",paraId:33,tocIndex:5},{value:"\u8BBF\u95EE ",paraId:34,tocIndex:5},{value:"/blog/hello-world",paraId:34,tocIndex:5},{value:" \u4E5F\u662F\u6709\u7684\uFF1A",paraId:34,tocIndex:5},{value:"\u5728\u53C2\u6570\u540E\u7528\u62EC\u53F7\u5C06\u6B63\u5219\u8868\u8FBE\u5F0F\u62EC\u4F4F\u5B9E\u73B0\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:35,tocIndex:6},{value:"blog/:slug(\\\\d{1,})",paraId:35,tocIndex:6},{value:" \u5339\u914D ",paraId:35,tocIndex:6},{value:"/blog/123",paraId:35,tocIndex:6},{value:" \u800C\u4E0D\u5339\u914D ",paraId:35,tocIndex:6},{value:"/blog/abc",paraId:35,tocIndex:6},{value:`// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/blog/:post(\\\\d{1,})',
        headers: [
          {
            key: 'x-post',
            value: ':post',
          },
        ],
      },
    ];
  },
};
`,paraId:36,tocIndex:6},{value:"\u8BBF\u95EE ",paraId:37,tocIndex:6},{value:"/blog/123",paraId:37,tocIndex:6},{value:"\uFF0C\u53EF\u4EE5\u770B\u5230\uFF1A",paraId:37,tocIndex:6},{value:"\u6CE8\u610F\uFF1A\u8FD9 8 \u4E2A\u5B57\u7B26 ",paraId:38,tocIndex:6},{value:"(",paraId:38,tocIndex:6},{value:"\u3001",paraId:38,tocIndex:6},{value:")",paraId:38,tocIndex:6},{value:"\u3001 ",paraId:38,tocIndex:6},{value:"{",paraId:38,tocIndex:6},{value:"\u3001 ",paraId:38,tocIndex:6},{value:"}",paraId:38,tocIndex:6},{value:"\u3001 ",paraId:38,tocIndex:6},{value:":",paraId:38,tocIndex:6},{value:"\u3001 ",paraId:38,tocIndex:6},{value:"*",paraId:38,tocIndex:6},{value:"\u3001 ",paraId:38,tocIndex:6},{value:"+",paraId:38,tocIndex:6},{value:"\u3001 ",paraId:38,tocIndex:6},{value:"?",paraId:38,tocIndex:6},{value:" \u90FD\u4F1A\u7528\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u6240\u4EE5\u9700\u8981\u7528\u5230\u8FD9\u4E9B\u5B57\u7B26\u672C\u8EAB\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 ",paraId:38,tocIndex:6},{value:"\\\\",paraId:38,tocIndex:6},{value:"\u8F6C\u4E49",paraId:38,tocIndex:6},{value:`// next.config.js
module.exports = {
  async headers() {
    return [
      {
        // \u5339\u914D \`/english(default)/something\`
        source: '/english\\\\(default\\\\)/:slug',
        headers: [
          {
            key: 'x-header',
            value: 'value',
          },
        ],
      },
    ];
  },
};
`,paraId:39,tocIndex:6},{value:"headers \u65E0\u987B\u591A\u8BF4\uFF0C\u6211\u4EEC\u804A\u804A headers \u7684\u8986\u76D6\u884C\u4E3A\u3002",paraId:40,tocIndex:7},{value:"\u5982\u679C\u4E24\u4E2A headers \u5339\u914D\u76F8\u540C\u7684\u8DEF\u5F84\u4EE5\u53CA\u8BBE\u7F6E\u4E86\u76F8\u540C\u7684 header key\uFF0C\u6700\u540E\u4E00\u4E2A header \u7684 key \u4F1A\u8986\u76D6\u524D\u4E00\u4E2A\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:41,tocIndex:7},{value:`// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'x-hello',
            value: 'there',
          },
        ],
      },
      {
        source: '/hello',
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
      },
    ];
  },
};
`,paraId:42,tocIndex:7},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5F53\u8BBF\u95EE ",paraId:43,tocIndex:7},{value:"/hello",paraId:43,tocIndex:7},{value:" \u65F6\uFF0C\u65E2\u5339\u914D ",paraId:43,tocIndex:7},{value:"/:path*",paraId:43,tocIndex:7},{value:"\uFF0C\u53C8\u5339\u914D ",paraId:43,tocIndex:7},{value:"/hello",paraId:43,tocIndex:7},{value:"\uFF0C\u800C\u4E24\u4E2A source \u5BF9\u5E94\u8BBE\u7F6E\u7684 ",paraId:43,tocIndex:7},{value:"x-hello",paraId:43,tocIndex:7},{value:" \u7684 key \u503C\u4E0D\u540C\uFF0C\u56E0\u4E3A",paraId:43,tocIndex:7},{value:"/hello",paraId:43,tocIndex:7},{value:" \u662F\u6700\u540E\u4E00\u4E2A header\uFF0C\u6240\u4EE5\u6700\u7EC8\u7684\u503C\u662F ",paraId:43,tocIndex:7},{value:"world",paraId:43,tocIndex:7},{value:"\u3002",paraId:43,tocIndex:7},{value:"\u90A3\u5982\u679C\u5339\u914D\u4E86\u76F8\u540C\u7684\u8DEF\u5F84\uFF0C\u4F46\u8BBE\u7F6E\u7684 header key \u4E0D\u51B2\u7A81\u5462\uFF1F\u90A3\u5C31\u90FD\u4F1A\u6DFB\u52A0\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:44,tocIndex:7},{value:`module.exports = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'hello',
            value: 'hello',
          },
          {
            key: 'hello2',
            value: 'hello2',
          },
        ],
      },
      {
        source: '/hello',
        headers: [
          {
            key: 'hello',
            value: 'world',
          },
          {
            key: 'hello3',
            value: 'hello3',
          },
        ],
      },
    ];
  },
};
`,paraId:45,tocIndex:7},{value:"\u6700\u7EC8\u7684\u7ED3\u679C\u4E3A\uFF1A",paraId:46,tocIndex:7},{value:"basePath",paraId:47,tocIndex:8},{value:"\u7684\u503C\u4E3A ",paraId:47,tocIndex:8},{value:"false",paraId:47,tocIndex:8},{value:" \u6216\u8005 ",paraId:47,tocIndex:8},{value:"undefined",paraId:47,tocIndex:8},{value:"\u3002\u5F53\u503C\u4E3A ",paraId:47,tocIndex:8},{value:"false",paraId:47,tocIndex:8},{value:" \uFF0C\u5339\u914D\u65F6\u4E0D\u4F1A\u5305\u542B ",paraId:47,tocIndex:8},{value:"basePath",paraId:47,tocIndex:8},{value:"\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:47,tocIndex:8},{value:`// next.config.js
module.exports = {
  basePath: '/docs',

  async headers() {
    return [
      {
        source: '/with-basePath', // \u5339\u914D /docs/with-basePath
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
      },
      {
        source: '/without-basePath', // \u5339\u914D /without-basePath
        headers: [
          {
            key: 'x-hello',
            value: 'world',
          },
        ],
        basePath: false, // \u56E0\u4E3A\u8BBE\u7F6E\u4E86 false
      },
    ];
  },
};
`,paraId:48,tocIndex:8},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u8BBE\u7F6E\u4E86 ",paraId:49,tocIndex:8},{value:"basePath",paraId:49,tocIndex:8},{value:" \u4E3A ",paraId:49,tocIndex:8},{value:"/docs",paraId:49,tocIndex:8},{value:"\uFF0C\u6B63\u5E38 headers \u4E2D\u7684 source \u4F1A\u5339\u914D basePath + source \u6784\u6210\u7684\u94FE\u63A5\uFF0C\u9664\u975E\u4F60\u8BBE\u7F6E\u4E86 ",paraId:49,tocIndex:8},{value:"basePath",paraId:49,tocIndex:8},{value:" \u4E3A ",paraId:49,tocIndex:8},{value:"false",paraId:49,tocIndex:8},{value:"\u3002",paraId:49,tocIndex:8},{value:"locale",paraId:50,tocIndex:9},{value:" \u7684\u503C\u4E3A ",paraId:50,tocIndex:9},{value:"false",paraId:50,tocIndex:9},{value:" \u6216\u8005 ",paraId:50,tocIndex:9},{value:"undefined",paraId:50,tocIndex:9},{value:"\uFF0C\u51B3\u5B9A\u5339\u914D\u65F6\u662F\u5426\u5E94\u8BE5\u5305\u542B locale\uFF0C\u5176\u5B9E\u6548\u679C\u8DDF basePath \u7C7B\u4F3C.",paraId:50,tocIndex:9},{value:"\u8003\u8651\u5230\u90E8\u5206\u540C\u5B66\u5BF9 ",paraId:51,tocIndex:9},{value:"locale",paraId:51,tocIndex:9},{value:" \u4E0D\u592A\u719F\u6089\uFF0C\u6211\u4EEC\u5148\u7B80\u5355\u7684\u8BB2\u4E0B ",paraId:51,tocIndex:9},{value:"locale",paraId:51,tocIndex:9},{value:"\u914D\u7F6E\u9879\uFF0Clocale \u7684\u4F5C\u7528\u5C31\u662F\u56FD\u9645\u5316\uFF08i18n\uFF09\uFF0C",paraId:51,tocIndex:9},{value:"next.config.js",paraId:51,tocIndex:9},{value:" \u9488\u5BF9 Pages Router \u63D0\u4F9B\u4E86 i18n \u914D\u7F6E\u9879\uFF0C\u6CE8\u610F\u662F\u5728 Pages Router \u4E0B\uFF0C\u5728 App Router \u4E0B Next.js \u5DF2\u7ECF\u4E0D\u518D\u63D0\u4F9B\u76F4\u63A5\u7684\u652F\u6301\uFF0C\u5177\u4F53\u5185\u5BB9\u67E5\u770B\u5C0F\u518C\u56FD\u9645\u5316\u7AE0\u8282\u3002",paraId:51,tocIndex:9},{value:"\u6BD4\u5982\u6211\u4EEC\u5728 ",paraId:52,tocIndex:9},{value:"pages",paraId:52,tocIndex:9},{value:" \u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A ",paraId:52,tocIndex:9},{value:"article.js",paraId:52,tocIndex:9},{value:" \u6587\u4EF6\uFF1A",paraId:52,tocIndex:9},{value:`// pages/article.js
export default function Home() {
  return <h1>Hello Article!</h1>;
}
`,paraId:53,tocIndex:9},{value:"\u7136\u540E ",paraId:54,tocIndex:9},{value:"next.config.js",paraId:54,tocIndex:9},{value:" \u4FEE\u6539\u914D\u7F6E\u9879\uFF1A",paraId:54,tocIndex:9},{value:`// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de', 'zh'],
    defaultLocale: 'zh',
  },
};
`,paraId:55,tocIndex:9},{value:"\u6B64\u65F6\uFF0C\u8BBF\u95EE ",paraId:56,tocIndex:9},{value:"/en/article",paraId:56,tocIndex:9},{value:"\u3001",paraId:56,tocIndex:9},{value:"/fr/article",paraId:56,tocIndex:9},{value:"\u3001",paraId:56,tocIndex:9},{value:"/de/article",paraId:56,tocIndex:9},{value:" \u90FD\u4F1A\u91CD\u5199\u4E3A ",paraId:56,tocIndex:9},{value:"/article",paraId:56,tocIndex:9},{value:"\uFF0C\u6CE8\u610F\u662F\u91CD\u5199\uFF0C\u5C31\u662F\u8DEF\u7531\u5730\u5740\u4E0D\u53D8\uFF0C\u4F46\u5185\u5BB9\u662F ",paraId:56,tocIndex:9},{value:"/article",paraId:56,tocIndex:9},{value:"\u7684\u5185\u5BB9\u3002\u8BBF\u95EE ",paraId:56,tocIndex:9},{value:"/zh/article",paraId:56,tocIndex:9},{value:" \u4F1A\u91CD\u5B9A\u5411\u5230 ",paraId:56,tocIndex:9},{value:"/article",paraId:56,tocIndex:9},{value:"\u3002",paraId:56,tocIndex:9},{value:"\u800C\u5982\u679C\u4F60\u5728 ",paraId:57,tocIndex:9},{value:"app/article",paraId:57,tocIndex:9},{value:"\u76EE\u5F55\u4E0B\u65B0\u5EFA\u4E00\u4E2A ",paraId:57,tocIndex:9},{value:"article.js",paraId:57,tocIndex:9},{value:" \u6587\u4EF6\uFF0C\u6587\u4EF6\u5185\u5BB9\u540C\u4E0A\u3002",paraId:57,tocIndex:9},{value:"\u6B64\u65F6\uFF0C\u8BBF\u95EE ",paraId:58,tocIndex:9},{value:"/en/article",paraId:58,tocIndex:9},{value:"\u3001",paraId:58,tocIndex:9},{value:"/fr/article",paraId:58,tocIndex:9},{value:"\u3001",paraId:58,tocIndex:9},{value:"/de/article",paraId:58,tocIndex:9},{value:" \u90FD\u4F1A 404 \u9519\u8BEF\u3002\u8BBF\u95EE ",paraId:58,tocIndex:9},{value:"/zh/article",paraId:58,tocIndex:9},{value:" \u4F1A\u91CD\u5199\u4E3A ",paraId:58,tocIndex:9},{value:"/article",paraId:58,tocIndex:9},{value:"\u3002\u8BF4\u660E\u5728 App Router \u4E0B\u53EA\u6709 ",paraId:58,tocIndex:9},{value:"i18n.defaultLocale",paraId:58,tocIndex:9},{value:" \u662F\u751F\u6548\u7684\u3002",paraId:58,tocIndex:9},{value:"\u597D\u4E86\uFF0C\u57FA\u672C\u4ECB\u7ECD\u5B8C\u6BD5\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u8BA9\u5927\u5BB6\u4E86\u89E3\u914D\u7F6E\u9879\u4E2D\u7684 i18n \u7684\u4F5C\u7528\u3002\u6211\u4EEC\u518D\u770B headers \u4E2D\u7684 locales \u8BBE\u7F6E\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:59,tocIndex:9},{value:`module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },

  async headers() {
    return [
      {
        // \u81EA\u52A8\u5904\u7406\u6240\u6709\u7684 locales
        // \u4E5F\u5C31\u662F \`/en/with-locale\`\u3001\`/fr/with-locale\`\u3001\`/de/with-locale\`\u3001\`/with-locale\` \u90FD\u4F1A\u5339\u914D
        source: '/with-locale',
        headers: [
          {
            key: 'x-hello',
            value: 'world1',
          },
        ],
      },
      {
        // \u56E0\u4E3A locale \u8BBE\u7F6E\u4E3A false\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u81EA\u52A8\u5904\u7406 locales
        // \u4E5F\u5C31\u662F\u53EA\u5339\u914D \`/nl/with-locale-manual\`
        source: '/nl/with-locale-manual',
        locale: false,
        headers: [
          {
            key: 'x-hello',
            value: 'world2',
          },
        ],
      },
      {
        // \u5339\u914D '/' \u56E0\u4E3A \`en\` \u662F defaultLocale
        // \u4E5F\u5C31\u662F\u53EA\u5339\u914D \`/\`\u3001\`/en\`
        source: '/en',
        locale: false,
        headers: [
          {
            key: 'x-hello',
            value: 'world3',
          },
        ],
      },
      {
        // \u4F1A\u8F6C\u6362\u4E3A /(en|fr|de)/(.*) \u6240\u4EE5\u4E0D\u4F1A\u5339\u914D\u9876\u5C42
        // \u4E5F\u5C31\u662F \`/\` \u548C \`/fr\` \u90FD\u4E0D\u4F1A\u5339\u914D\u5230
        // \u5982\u679C\u8981\u5339\u914D\u5230\u8FD9\u4E24\u4E2A\uFF0C\u53EF\u4EE5\u7528 \`/:path*\`
        source: '/(.*)',
        headers: [
          {
            key: 'x-hello',
            value: 'world4',
          },
        ],
      },
    ];
  },
};
`,paraId:60,tocIndex:9},{value:"\u6CE8\u610F\uFF0C\u867D\u7136 i18n.locales \u914D\u7F6E\u5728 App Router \u4E0B\u4E0D\u751F\u6548\uFF0C\u4F46\u8FD9\u4E5F\u53EA\u662F\u5BFC\u81F4\u9875\u9762\u51FA\u73B0 404 \u9519\u8BEF\u800C\u5DF2\uFF0C\u5E76\u4E0D\u4F1A\u5F71\u54CD\u5904\u7406\u6807\u5934\uFF0C\u5373\u4FBF\u9875\u9762 404\uFF0C\u4F60\u53EF\u4EE5\u6B63\u5E38\u7684\u67E5\u770B\u6807\u5934\u3002",paraId:61,tocIndex:9},{value:"has",paraId:62,tocIndex:10},{value:" \u548C ",paraId:62,tocIndex:10},{value:"missing",paraId:62,tocIndex:10},{value:" \u662F\u7528\u6765\u5904\u7406\u8BF7\u6C42\u4E2D\u7684 header\u3001cookie \u548C\u8BF7\u6C42\u53C2\u6570\u662F\u5426\u5339\u914D\u67D0\u4E9B\u5B57\u6BB5\uFF0C\u6216\u8005\u4E0D\u5339\u914D\u67D0\u4E9B\u5B57\u6BB5\u7684\u65F6\u5019\uFF0C\u624D\u5E94\u7528 header\u3002",paraId:62,tocIndex:10},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BD4\u5982\u8BF7\u6C42 ",paraId:63,tocIndex:10},{value:"/article?id=1&author=yayu",paraId:63,tocIndex:10},{value:"\uFF0C",paraId:63,tocIndex:10},{value:"has",paraId:63,tocIndex:10},{value:" \u53EF\u4EE5\u8981\u6C42\u8BF7\u6C42\u4E2D\u5FC5\u987B\u6709 id \u53C2\u6570\uFF0C\u6216\u8005 id \u53C2\u6570\u7B49\u4E8E xxx \u7684\u65F6\u5019\u624D\u8FD4\u56DE\u67D0\u4E2A\u6807\u5934\u3002",paraId:63,tocIndex:10},{value:"missing",paraId:63,tocIndex:10},{value:" \u53EF\u4EE5\u8981\u6C42\u8BF7\u6C42\u4E2D\u5FC5\u987B\u6CA1\u6709 id \u53C2\u6570\uFF0C\u6216\u8005 id \u53C2\u6570\u4E0D\u7B49\u4E8E xxx \u7684\u65F6\u5019\u624D\u8FD4\u56DE\u67D0\u4E2A\u6807\u5934\u3002",paraId:63,tocIndex:10},{value:"has",paraId:64,tocIndex:10},{value:" \u548C ",paraId:64,tocIndex:10},{value:"missing",paraId:64,tocIndex:10},{value:" \u5BF9\u8C61\u6709\u4E0B\u9762\u8FD9\u4E9B\u5B57\u6BB5\uFF1A",paraId:64,tocIndex:10},{value:"type",paraId:65,tocIndex:10},{value:": ",paraId:65,tocIndex:10},{value:"String",paraId:65,tocIndex:10},{value:"\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:65,tocIndex:10},{value:"header",paraId:65,tocIndex:10},{value:"\u3001",paraId:65,tocIndex:10},{value:"cookie",paraId:65,tocIndex:10},{value:"\u3001",paraId:65,tocIndex:10},{value:"host",paraId:65,tocIndex:10},{value:"\u3001",paraId:65,tocIndex:10},{value:"query",paraId:65,tocIndex:10},{value:" \u4E4B\u4E00",paraId:65,tocIndex:10},{value:"key",paraId:65,tocIndex:10},{value:": ",paraId:65,tocIndex:10},{value:"String",paraId:65,tocIndex:10},{value:"\u7C7B\u578B\uFF0C\u6240\u9009\u7C7B\u578B\uFF08\u4E5F\u5C31\u662F\u4E0A\u9762\u7684\u56DB\u79CD\u503C\uFF09\u4E2D\u8981\u5339\u914D\u7684 key",paraId:65,tocIndex:10},{value:"value",paraId:65,tocIndex:10},{value:"\uFF1A ",paraId:65,tocIndex:10},{value:"String",paraId:65,tocIndex:10},{value:" \u6216\u8005 ",paraId:65,tocIndex:10},{value:"undefined",paraId:65,tocIndex:10},{value:"\uFF0C\u8981\u68C0\u67E5\u7684\u503C\u3002\u5982\u679C\u503C\u4E3A ",paraId:65,tocIndex:10},{value:"undefiend",paraId:65,tocIndex:10},{value:"\uFF0C\u4EFB\u4F55\u503C\u90FD\u4E0D\u4F1A\u5339\u914D\u3002\u652F\u6301\u4F7F\u7528\u4E00\u4E2A\u7C7B\u4F3C\u6B63\u5219\u7684\u5B57\u7B26\u4E32\u6355\u83B7\u503C\u7684\u7279\u6B8A\u90E8\u5206\u3002\u6BD4\u5982 ",paraId:65,tocIndex:10},{value:"first-(?<paramName>.*)",paraId:65,tocIndex:10},{value:"\u7528\u4E8E\u5339\u914D ",paraId:65,tocIndex:10},{value:"first-second",paraId:65,tocIndex:10},{value:"\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u7528 ",paraId:65,tocIndex:10},{value:":paramName",paraId:65,tocIndex:10},{value:"\u83B7\u53D6 ",paraId:65,tocIndex:10},{value:"second",paraId:65,tocIndex:10},{value:" \u8FD9\u4E2A\u503C",paraId:65,tocIndex:10},{value:"\u542C\u8D77\u6765\u6709\u4E9B\u590D\u6742\uFF0C\u770B\u4E2A\u4F8B\u5B50\u5176\u5B9E\u5C31\u61C2\u4E86\uFF1A",paraId:66,tocIndex:10},{value:`// next.config.js
module.exports = {
  async headers() {
    return [
      // \u5982\u679C header \u4E2D \`x-add-header\` \u5B57\u6BB5\u5B58\u5728
      // \u90A3\u5C31\u8FD4\u56DE \`x-another-header\` \u6807\u5934
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-add-header',
          },
        ],
        headers: [
          {
            key: 'x-another-header',
            value: 'hello',
          },
        ],
      },
      // \u5982\u679C header \u4E2D \`x-no-header\` \u5B57\u6BB5\u4E0D\u5B58\u5728
      // \u5C31\u8FD4\u56DE \`x-another-header\` \u6807\u5934
      {
        source: '/:path*',
        missing: [
          {
            type: 'header',
            key: 'x-no-header',
          },
        ],
        headers: [
          {
            key: 'x-another-header',
            value: 'hello',
          },
        ],
      },
      // \u5982\u679C source\u3001query\u3001cookie \u90FD\u5339\u914D
      // \u5C31\u8FD4\u56DE \`x-authorized\` \u6807\u5934
      {
        source: '/specific/:path*',
        has: [
          {
            type: 'query',
            key: 'page',
            value: 'home',
          },
          {
            type: 'cookie',
            key: 'authorized',
            value: 'true',
          },
        ],
        headers: [
          {
            key: 'x-authorized',
            value: 'hello',
          },
        ],
      },
      //\u5982\u679C header \u4E2D \`x-authorized\` \u5B58\u5728\u4E14\u7B49\u4E8E yes \u6216 true
      // \u5C31\u8FD4\u56DE \`x-another-header\` \u6807\u5934
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-authorized',
            value: '(?<authorized>yes|true)',
          },
        ],
        headers: [
          {
            key: 'x-another-header',
            value: ':authorized',
          },
        ],
      },
      // \u5982\u679C host \u662F \`example.com\`,
      // \u5E94\u7528 header
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'example.com',
          },
        ],
        headers: [
          {
            key: 'x-another-header',
            value: 'hello',
          },
        ],
      },
    ];
  },
};
`,paraId:67,tocIndex:10},{value:"\u6CE8\u610F\uFF0Chas \u548C missing \u5224\u65AD\u7684\u90FD\u662F\u8BF7\u6C42\u5934\u4E2D\u7684\u503C\u3002 type \u7684\u56DB\u79CD\u7C7B\u578B\u4E3A header\u3001cookie\u3001host\u3001query\uFF0C\u5176\u4E2D\u4E0B\u56FE\u4E2D\u7684\u503C\u90FD\u662F header\uFF1A",paraId:68,tocIndex:10},{value:"cookie \u6307\u7684\u662F\u5176\u4E2D\u7684 Cookie \u6807\u5934\uFF0CNext.js \u5DF2\u7ECF\u81EA\u52A8\u505A\u4E86\u89E3\u6790\uFF0C\u6240\u4EE5\u53EF\u4EE5\u76F4\u63A5\u5224\u65AD Cookie \u4E2D\u7684\u5B57\u6BB5\u503C\uFF1A",paraId:69,tocIndex:10},{value:"host \u5C31\u662F\u4E3B\u673A\u540D + \u7AEF\u53E3\uFF0Cquery \u8868\u793A\u53C2\u6570\u3002\u4EE5 ",paraId:70,tocIndex:10},{value:"'http://user:pass@host.com:8080/p/a/t/h?query=string#hash'",paraId:70,tocIndex:10},{value:"\u4E3A\u4F8B\u7684\u8BDD\uFF0C",paraId:70,tocIndex:10},{value:"host",paraId:70,tocIndex:10},{value:" \u7684\u503C\u4E3A ",paraId:70,tocIndex:10},{value:"host.com:8080",paraId:70,tocIndex:10},{value:"\u3002",paraId:70,tocIndex:10},{value:"query",paraId:70,tocIndex:10},{value:" \u4E3A ",paraId:70,tocIndex:10},{value:"query=string",paraId:70,tocIndex:10},{value:"\u3002",paraId:70,tocIndex:10},{value:"\u4F60\u4E0D\u80FD\u5728 ",paraId:71,tocIndex:11},{value:"next.config.js",paraId:71,tocIndex:11},{value:" \u4E2D\u4E3A\u9875\u9762\u6216\u9759\u6001\u8D44\u6E90\u8BBE\u7F6E ",paraId:71,tocIndex:11},{value:"Cache-Control",paraId:71,tocIndex:11},{value:"\u6807\u5934\uFF0C\u56E0\u4E3A\u8BE5\u6807\u5934\u4F1A\u5728\u751F\u4EA7\u4E2D\u88AB\u8986\u76D6\uFF0C\u4EE5\u786E\u4FDD\u6709\u6548\u7F13\u5B58\u54CD\u5E94\u548C\u9759\u6001\u8D44\u6E90\u3002",paraId:71,tocIndex:11},{value:"X-DNS-Prefetch-Control",paraId:72,tocIndex:13},{value:" \u5934\u63A7\u5236\u7740\u6D4F\u89C8\u5668\u7684 DNS \u9884\u8BFB\u53D6\u529F\u80FD\u3002DNS \u9884\u8BFB\u53D6\u662F\u4E00\u9879\u4F7F\u6D4F\u89C8\u5668\u4E3B\u52A8\u53BB\u6267\u884C\u57DF\u540D\u89E3\u6790\u7684\u529F\u80FD\uFF0C\u5176\u8303\u56F4\u5305\u62EC\u6587\u6863\u7684\u6240\u6709\u94FE\u63A5\uFF0C\u65E0\u8BBA\u662F\u56FE\u7247\u7684\uFF0CCSS \u7684\uFF0C\u8FD8\u662F JavaScript \u7B49\u5176\u4ED6\u7528\u6237\u80FD\u591F\u70B9\u51FB\u7684 URL\u3002",paraId:72,tocIndex:13},{value:"\u56E0\u4E3A\u9884\u8BFB\u53D6\u4F1A\u5728\u540E\u53F0\u6267\u884C\uFF0C\u6240\u4EE5 DNS \u5F88\u53EF\u80FD\u5728\u94FE\u63A5\u5BF9\u5E94\u7684\u4E1C\u897F\u51FA\u73B0\u4E4B\u524D\u5C31\u5DF2\u7ECF\u89E3\u6790\u5B8C\u6BD5\u3002\u8FD9\u80FD\u591F\u51CF\u5C11\u7528\u6237\u70B9\u51FB\u94FE\u63A5\u65F6\u7684\u5EF6\u8FDF\u3002",paraId:73,tocIndex:13},{value:`{
  "key": "X-DNS-Prefetch-Control",
  "value": "on"
}
`,paraId:74,tocIndex:13},{value:"Strict-Transport-Security",paraId:75,tocIndex:14},{value:"\uFF08\u901A\u5E38\u7B80\u79F0\u4E3A HSTS\uFF09\u54CD\u5E94\u6807\u5934\u7528\u6765\u901A\u77E5\u6D4F\u89C8\u5668\u5E94\u8BE5\u53EA\u901A\u8FC7 HTTPS \u8BBF\u95EE\u8BE5\u7AD9\u70B9\uFF0C\u5E76\u4E14\u4EE5\u540E\u4F7F\u7528 HTTP \u8BBF\u95EE\u8BE5\u7AD9\u70B9\u7684\u6240\u6709\u5C1D\u8BD5\u90FD\u5E94\u81EA\u52A8\u91CD\u5B9A\u5411\u5230 HTTPS\u3002",paraId:75,tocIndex:14},{value:"\u4F7F\u7528\u4E0B\u9762\u7684\u914D\u7F6E\uFF0C\u6240\u6709\u5F53\u524D\u548C\u672A\u6765\u7684\u5B50\u57DF\u90FD\u5C06\u4F7F\u7528 ",paraId:76,tocIndex:14},{value:"max-age",paraId:76,tocIndex:14},{value:" \u4E3A 2 \u5E74\u7684 HTTPS\uFF1A",paraId:76,tocIndex:14},{value:`{
  key: 'Strict-Transport-Security',
  value: 'max-age=63072000; includeSubDomains; preload'
}
`,paraId:77,tocIndex:14},{value:"X-Frame-Options",paraId:78,tocIndex:15},{value:" HTTP \u54CD\u5E94\u5934\u662F\u7528\u6765\u7ED9\u6D4F\u89C8\u5668\u6307\u793A\u5141\u8BB8\u4E00\u4E2A\u9875\u9762\u53EF\u5426\u5728 ",paraId:78,tocIndex:15},{value:"<frame>",paraId:78,tocIndex:15},{value:"\u3001",paraId:78,tocIndex:15},{value:"<iframe>",paraId:78,tocIndex:15},{value:"\u3001",paraId:78,tocIndex:15},{value:"<embed>",paraId:78,tocIndex:15},{value:" \u6216\u8005 ",paraId:78,tocIndex:15},{value:"<object>",paraId:78,tocIndex:15},{value:" \u4E2D\u5C55\u73B0\u7684\u6807\u8BB0\u3002\u7AD9\u70B9\u53EF\u4EE5\u901A\u8FC7\u786E\u4FDD\u7F51\u7AD9\u6CA1\u6709\u88AB\u5D4C\u5165\u5230\u522B\u4EBA\u7684\u7AD9\u70B9\u91CC\u9762\uFF0C\u4ECE\u800C\u907F\u514D\u70B9\u51FB\u52AB\u6301 (en-US)\u653B\u51FB\u3002",paraId:78,tocIndex:15},{value:"\u6B64\u6807\u5934\u5DF2\u7ECF\u88AB ",paraId:79,tocIndex:15},{value:"frame-ancestors",paraId:79,tocIndex:15},{value:" \u66FF\u4EE3\uFF0C\u5B83\u5728\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E2D\u6709\u66F4\u597D\u7684\u652F\u6301\u3002",paraId:79,tocIndex:15},{value:"Permissions-Policy",paraId:80,tocIndex:16},{value:" \u54CD\u5E94\u6807\u5934\u63D0\u4F9B\u4E86\u4E00\u79CD\u53EF\u4EE5\u5728\u672C\u9875\u9762\u6216\u5305\u542B\u7684 iframe \u4E0A\u542F\u7528\u6216\u7981\u6B62\u6D4F\u89C8\u5668\u7279\u6027\u7684\u673A\u5236\uFF0C\u4E4B\u524D\u53EB\u505A ",paraId:80,tocIndex:16},{value:"Feature-Policy",paraId:80,tocIndex:16},{value:"\u3002",paraId:80,tocIndex:16},{value:`{
  "key": "Permissions-Policy",
  "value": "camera=(), microphone=(), geolocation=(), browsing-topics=()"
}
`,paraId:81,tocIndex:16},{value:"\u5982\u679C ",paraId:82,tocIndex:17},{value:"Content-Type",paraId:82,tocIndex:17},{value:" \u6807\u5934\u6CA1\u6709\u88AB\u663E\u793A\u8BBE\u7F6E\uFF0C",paraId:82,tocIndex:17},{value:"X-Content-Type-Options",paraId:82,tocIndex:17},{value:" \u4F1A\u963B\u6B62\u6D4F\u89C8\u5668\u5C1D\u8BD5\u731C\u6D4B\u5185\u5BB9\u7C7B\u578B\u3002\u8FD9\u53EF\u4EE5\u9632\u6B62\u5141\u8BB8\u7528\u6237\u4E0A\u4F20\u548C\u5171\u4EAB\u6587\u4EF6\u7684\u7F51\u7AD9\u53D7\u5230 XSS \u653B\u51FB\u3002",paraId:82,tocIndex:17},{value:"\u8FD9\u4E2A\u6807\u5934\u53EA\u6709\u4E00\u4E2A\u6709\u6548\u503C\u662F ",paraId:83,tocIndex:17},{value:"nosniff",paraId:83,tocIndex:17},{value:"\u3002",paraId:83,tocIndex:17},{value:`{
  "key": "X-Content-Type-Options",
  "value": "nosniff"
}
`,paraId:84,tocIndex:17},{value:"Referrer-Policy",paraId:85,tocIndex:18},{value:" \u63A7\u5236\u5F53\u4ECE\u5F53\u524D\u7F51\u9875\u5BFC\u822A\u5230\u53E6\u4E00\u4E2A\u7F51\u9875\u65F6\u643A\u5E26\u7684\u4FE1\u606F\u5185\u5BB9\uFF1A",paraId:85,tocIndex:18},{value:`{
  "key": "Referrer-Policy",
  "value": "origin-when-cross-origin"
}
`,paraId:86,tocIndex:18},{value:"\u91CD\u5B9A\u5411\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u5C06\u8BF7\u6C42\u8DEF\u5F84\u91CD\u5B9A\u5411\u5230\u5176\u4ED6\u76EE\u6807\u8DEF\u5F84\u3002\u914D\u7F6E\u91CD\u5B9A\u5411\uFF0C\u4F7F\u7528 ",paraId:87,tocIndex:20},{value:"next.config.js",paraId:87,tocIndex:20},{value:" \u7684 ",paraId:87,tocIndex:20},{value:"redirects",paraId:87,tocIndex:20},{value:"\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:87,tocIndex:20},{value:`module.exports = {
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/',
        permanent: true,
      },
    ];
  },
};
`,paraId:88,tocIndex:20},{value:"redirects",paraId:89,tocIndex:20},{value:" \u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B ",paraId:89,tocIndex:20},{value:"source",paraId:89,tocIndex:20},{value:"\u3001",paraId:89,tocIndex:20},{value:"destination",paraId:89,tocIndex:20},{value:" \u548C ",paraId:89,tocIndex:20},{value:"permanent",paraId:89,tocIndex:20},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5176\u4E2D\uFF1A",paraId:89,tocIndex:20},{value:"source",paraId:90,tocIndex:20},{value:" \u8868\u793A\u4F20\u5165\u7684\u8BF7\u6C42\u8DEF\u5F84",paraId:90,tocIndex:20},{value:"destination",paraId:90,tocIndex:20},{value:" \u8868\u793A\u4F60\u91CD\u5B9A\u5411\u7684\u7684\u76EE\u6807\u8DEF\u5F84",paraId:90,tocIndex:20},{value:"permanent",paraId:90,tocIndex:20},{value:" \u503C\u4E3A true \u6216\u8005 false\u3002\u5982\u679C\u4E3A true\uFF0C\u4F7F\u7528 308 \u72B6\u6001\u7801\uFF0C\u8868\u793A\u5BA2\u6237\u7AEF\u6216\u641C\u7D22\u5F15\u64CE\u6C38\u4E45\u7F13\u5B58\u91CD\u5B9A\u5411\u3002\u5982\u679C\u662F false\uFF0C\u4F7F\u7528 307 \u72B6\u6001\u7801\u8868\u793A\u4E34\u65F6\u672A\u7F13\u5B58\u3002",paraId:90,tocIndex:20},{value:"\u4E3A\u4EC0\u4E48 Next.js \u4F7F\u7528 307 \u548C 308 \u5462\uFF1F\u4F20\u7EDF\u90FD\u662F\u4F7F\u7528 302 \u8868\u793A\u4E34\u65F6\u91CD\u5B9A\u5411\uFF0C301 \u8868\u793A\u6C38\u4E45\u91CD\u5B9A\u5411\uFF0C\u4F46\u662F\u5F88\u591A\u6D4F\u89C8\u5668\u4F1A\u5C06\u91CD\u5B9A\u5411\u7684\u8BF7\u6C42\u65B9\u6CD5\u4FEE\u6539\u4E3A GET\uFF0C\u800C\u4E0D\u7BA1\u539F\u672C\u7684\u65B9\u6CD5\u662F\u4EC0\u4E48\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5982\u679C\u6D4F\u89C8\u5668\u53D1\u9001\u4E86\u4E00\u4E2A POST \u8BF7\u6C42\uFF0C",paraId:91,tocIndex:20},{value:"/v1/users",paraId:91,tocIndex:20},{value:" \uFF0C\u7136\u540E\u8FD4\u56DE\u4E86 302 \u72B6\u6001\u7801\uFF0C\u65B0\u5730\u5740\u662F ",paraId:91,tocIndex:20},{value:"/v2/users",paraId:91,tocIndex:20},{value:"\uFF0C\u5219\u540E\u7EED\u7684\u8BF7\u6C42\u4F1A\u662F GET ",paraId:91,tocIndex:20},{value:"/V2/users",paraId:91,tocIndex:20},{value:" \u800C\u4E0D\u662F POST ",paraId:91,tocIndex:20},{value:"/v2/users",paraId:91,tocIndex:20},{value:"\uFF0CNext.js \u7528 307 \u4E34\u65F6\u91CD\u5B9A\u5411\u548C 308 \u6C38\u4E45\u91CD\u5B9A\u5411\u72B6\u6001\u7801\u5C31\u662F\u4E3A\u4E86\u663E\u793A\u4FDD\u7559\u4E4B\u524D\u4F7F\u7528\u7684\u8BF7\u6C42\u65B9\u6CD5\u3002",paraId:91,tocIndex:20},{value:"\u9664\u4E86\u8FD9\u4E09\u4E2A\u503C\u5916\uFF0C\u8FD8\u53EF\u4EE5\u8BBE\u7F6E\uFF1A",paraId:92,tocIndex:20},{value:"basePath",paraId:93,tocIndex:20},{value:"\uFF1A",paraId:93,tocIndex:20},{value:"false",paraId:93,tocIndex:20},{value:" \u6216\u8005 ",paraId:93,tocIndex:20},{value:"undefined",paraId:93,tocIndex:20},{value:"\u3002\u5F53\u503C\u4E3A ",paraId:93,tocIndex:20},{value:"false",paraId:93,tocIndex:20},{value:" \uFF0C\u5339\u914D\u65F6\u4E0D\u4F1A\u5305\u542B ",paraId:93,tocIndex:20},{value:"basePath",paraId:93,tocIndex:20},{value:"\uFF0C\u53EA\u80FD\u7528\u4E8E\u5916\u90E8\u91CD\u5199",paraId:93,tocIndex:20},{value:"locale",paraId:93,tocIndex:20},{value:"\uFF1A",paraId:93,tocIndex:20},{value:"false",paraId:93,tocIndex:20},{value:" \u6216\u8005 ",paraId:93,tocIndex:20},{value:"undefined",paraId:93,tocIndex:20},{value:"\uFF0C\u5339\u914D\u65F6\u662F\u5426\u5E94\u8BE5\u5305\u542B locale",paraId:93,tocIndex:20},{value:"has",paraId:93,tocIndex:20},{value:"\uFF1A\u4E00\u4E2A\u6709 ",paraId:93,tocIndex:20},{value:"type",paraId:93,tocIndex:20},{value:"\u3001",paraId:93,tocIndex:20},{value:"key",paraId:93,tocIndex:20},{value:"\u3001",paraId:93,tocIndex:20},{value:"value",paraId:93,tocIndex:20},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4",paraId:93,tocIndex:20},{value:"missing",paraId:93,tocIndex:20},{value:"\uFF1A\u4E00\u4E2A\u6709 ",paraId:93,tocIndex:20},{value:"type",paraId:93,tocIndex:20},{value:"\u3001",paraId:93,tocIndex:20},{value:"key",paraId:93,tocIndex:20},{value:"\u3001",paraId:93,tocIndex:20},{value:"value",paraId:93,tocIndex:20},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4",paraId:93,tocIndex:20},{value:"\u91CD\u5B9A\u5411\u4F1A\u5728\u6587\u4EF6\u7CFB\u7EDF\uFF08\u5305\u62EC\u9875\u9762\u548C ",paraId:94,tocIndex:20},{value:"/public",paraId:94,tocIndex:20},{value:" \u6587\u4EF6\uFF09\u4E4B\u524D\u88AB\u89E6\u53D1\u3002",paraId:94,tocIndex:20},{value:"\u91CD\u5B9A\u5411\u4E0D\u4F1A\u5E94\u7528\u4E8E\u5BA2\u6237\u7AEF\u8DEF\u7531\uFF08",paraId:95,tocIndex:20},{value:"Link",paraId:95,tocIndex:20},{value:"\u3001",paraId:95,tocIndex:20},{value:"router.push",paraId:95,tocIndex:20},{value:"\uFF09\uFF0C\u9664\u975E\u4F7F\u7528\u4E86\u4E2D\u95F4\u4EF6\uFF0C\u4E14\u6709\u5339\u914D\u7684\u8DEF\u5F84\u3002",paraId:95,tocIndex:20},{value:"\u5F53\u5E94\u7528\u91CD\u5B9A\u5411\u7684\u65F6\u5019\uFF0C\u8BF7\u6C42\u8DEF\u5F84\u7684\u53C2\u6570\u4E5F\u4F1A\u4F20\u9012\u7ED9\u91CD\u5B9A\u5411\u76EE\u6807\u8DEF\u5F84\u3002\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:96,tocIndex:20},{value:`{
  source: '/old-blog/:path*',
  destination: '/blog/:path*',
  permanent: false
}
`,paraId:97,tocIndex:20},{value:"\u5F53\u8BF7\u6C42",paraId:98,tocIndex:20},{value:"/old-blog/post-1?hello=world",paraId:98,tocIndex:20},{value:"\u65F6\uFF0C\u5BA2\u6237\u7AEF\u4F1A\u91CD\u5B9A\u5411\u5230 ",paraId:98,tocIndex:20},{value:"/blog/post-1?hello=world",paraId:98,tocIndex:20},{value:"\u3002",paraId:98,tocIndex:20},{value:"\u666E\u901A\u7684\u8DEF\u5F84\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BD4\u5982 ",paraId:99,tocIndex:22},{value:"/old-blog/:slug",paraId:99,tocIndex:22},{value:"\u4F1A\u5339\u914D ",paraId:99,tocIndex:22},{value:"/old-blog/hello-world",paraId:99,tocIndex:22},{value:"\uFF08\u65E0\u5D4C\u5957\u8DEF\u5F84\uFF0C\u4E5F\u5C31\u662F\u8BF4 ",paraId:99,tocIndex:22},{value:"/old-blog/hello-world/about",paraId:99,tocIndex:22},{value:"\u4E0D\u4F1A\u5339\u914D\uFF09",paraId:99,tocIndex:22},{value:`// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/old-blog/:slug',
        destination: '/news/:slug',
        permanent: true,
      },
    ];
  },
};
`,paraId:100,tocIndex:22},{value:"\u5728\u53C2\u6570\u540E\u4F7F\u7528 ",paraId:101,tocIndex:23},{value:"*",paraId:101,tocIndex:23},{value:" \u5B9E\u73B0\u901A\u914D\u7B26\u8DEF\u5F84\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:101,tocIndex:23},{value:"/blog/:slug*",paraId:101,tocIndex:23},{value:" \u4F1A\u5339\u914D ",paraId:101,tocIndex:23},{value:"/blog/a/b/c/d/hello-world",paraId:101,tocIndex:23},{value:"\uFF1A",paraId:101,tocIndex:23},{value:`// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/blog/:slug*',
        destination: '/news/:slug*',
        permanent: true,
      },
    ];
  },
};
`,paraId:102,tocIndex:23},{value:"\u5728\u53C2\u6570\u540E\u7528\u62EC\u53F7\u5C06\u6B63\u5219\u8868\u8FBE\u5F0F\u62EC\u4F4F\u5B9E\u73B0\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:103,tocIndex:24},{value:"/post/:slug(\\\\d{1,})",paraId:103,tocIndex:24},{value:" \u5339\u914D ",paraId:103,tocIndex:24},{value:"/post/123",paraId:103,tocIndex:24},{value:" \u800C\u4E0D\u5339\u914D ",paraId:103,tocIndex:24},{value:"/post/abc",paraId:103,tocIndex:24},{value:`// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        source: '/post/:slug(\\\\d{1,})',
        destination: '/news/:slug',
        permanent: false,
      },
    ];
  },
};
`,paraId:104,tocIndex:24},{value:"\u6CE8\u610F\uFF1A\u8FD9 8 \u4E2A\u5B57\u7B26 ",paraId:105,tocIndex:24},{value:"(",paraId:105,tocIndex:24},{value:"\u3001",paraId:105,tocIndex:24},{value:")",paraId:105,tocIndex:24},{value:"\u3001 ",paraId:105,tocIndex:24},{value:"{",paraId:105,tocIndex:24},{value:"\u3001 ",paraId:105,tocIndex:24},{value:"}",paraId:105,tocIndex:24},{value:"\u3001 ",paraId:105,tocIndex:24},{value:":",paraId:105,tocIndex:24},{value:"\u3001 ",paraId:105,tocIndex:24},{value:"*",paraId:105,tocIndex:24},{value:"\u3001 ",paraId:105,tocIndex:24},{value:"+",paraId:105,tocIndex:24},{value:"\u3001 ",paraId:105,tocIndex:24},{value:"?",paraId:105,tocIndex:24},{value:" \u90FD\u4F1A\u7528\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u6240\u4EE5\u9700\u8981\u7528\u5230\u8FD9\u4E9B\u5B57\u7B26\u672C\u8EAB\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 ",paraId:105,tocIndex:24},{value:"\\\\",paraId:105,tocIndex:24},{value:"\u8F6C\u4E49",paraId:105,tocIndex:24},{value:`// next.config.js
module.exports = {
  async redirects() {
    return [
      {
        // \u5339\u914D \`/english(default)/something\`
        source: '/english\\\\(default\\\\)/:slug',
        destination: '/en-us/:slug',
        permanent: false,
      },
    ];
  },
};
`,paraId:106,tocIndex:24},{value:"\u5F53\u4F7F\u7528 ",paraId:107,tocIndex:25},{value:"basePath",paraId:107,tocIndex:25},{value:" \u7684\u65F6\u5019\uFF0C\u6BCF\u4E00\u4E2A ",paraId:107,tocIndex:25},{value:"source",paraId:107,tocIndex:25},{value:" \u548C ",paraId:107,tocIndex:25},{value:"destination",paraId:107,tocIndex:25},{value:" \u90FD\u4F1A\u81EA\u52A8\u6DFB\u52A0 ",paraId:107,tocIndex:25},{value:"basePath",paraId:107,tocIndex:25},{value:" \u4F5C\u4E3A\u524D\u7F00\uFF0C\u9664\u975E\u4F60\u4E3A\u91CD\u5B9A\u5411\u8BBE\u7F6E ",paraId:107,tocIndex:25},{value:"basePath: false",paraId:107,tocIndex:25},{value:"\uFF1A",paraId:107,tocIndex:25},{value:`// next.config.js
module.exports = {
  basePath: '/docs',

  async redirects() {
    return [
      {
        source: '/with-basePath', // \u81EA\u52A8\u53D8\u6210 /docs/with-basePath
        destination: '/another', // \u81EA\u52A8\u53D8\u6210 /docs/another
        permanent: false,
      },
      {
        // does not add /docs since basePath: false is set
        source: '/without-basePath',
        destination: 'https://example.com',
        basePath: false,
        permanent: false,
      },
    ];
  },
};
`,paraId:108,tocIndex:25},{value:"\u5F53\u4F7F\u7528 ",paraId:109,tocIndex:26},{value:"i18n",paraId:109,tocIndex:26},{value:"\u7684\u65F6\u5019\uFF0C\u6BCF\u4E00\u4E2A ",paraId:109,tocIndex:26},{value:"source",paraId:109,tocIndex:26},{value:" \u548C ",paraId:109,tocIndex:26},{value:"destination",paraId:109,tocIndex:26},{value:" \u90FD\u4F1A\u81EA\u52A8\u6839\u636E ",paraId:109,tocIndex:26},{value:"locales",paraId:109,tocIndex:26},{value:"\u6DFB\u52A0\u524D\u7F00\u8FDB\u884C\u5904\u7406\uFF0C\u9664\u975E\u4F60\u4E3A\u91CD\u5B9A\u5411\u8BBE\u7F6E ",paraId:109,tocIndex:26},{value:"locale: false",paraId:109,tocIndex:26},{value:"\u3002\u5982\u679C\u8BBE\u7F6E ",paraId:109,tocIndex:26},{value:"locale: false",paraId:109,tocIndex:26},{value:"\uFF0C\u4F60\u5FC5\u987B\u4F7F\u7528\u4E00\u4E2A ",paraId:109,tocIndex:26},{value:"locale",paraId:109,tocIndex:26},{value:" \u4F5C\u4E3A ",paraId:109,tocIndex:26},{value:"source",paraId:109,tocIndex:26},{value:" \u548C ",paraId:109,tocIndex:26},{value:"destination",paraId:109,tocIndex:26},{value:" \u7684\u524D\u7F00\u624D\u80FD\u591F\u6B63\u786E\u5339\u914D\uFF0C\u8BA9\u6211\u4EEC\u770B\u4E2A\u4F8B\u5B50\uFF1A",paraId:109,tocIndex:26},{value:`// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },

  async redirects() {
    return [
      {
        // /with-locale -> /another
        // /en/with-locale -> /en/another
        // /fr/with-locale -> /fr/another
        // /de/with-locale -> /de/another
        source: '/with-locale',
        destination: '/another',
        permanent: false,
      },
      {
        // \u56E0\u4E3A locale \u8BBE\u7F6E\u4E3A false\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u81EA\u52A8\u5904\u7406
        // /nl/with-locale-manual -> /nl/another
        source: '/nl/with-locale-manual',
        destination: '/nl/another',
        locale: false,
        permanent: false,
      },
      {
        // \u56E0\u4E3A \`en\` \u662F defaultLocale\uFF0C\u6240\u4EE5\u5339\u914D '/'
        // /en -> /en/another
        // / -> /en/another
        source: '/en',
        destination: '/en/another',
        locale: false,
        permanent: false,
      },
      // \u5C3D\u7BA1 locale \u8BBE\u7F6E\u4E3A false\uFF0C\u4F46\u5339\u914D\u6240\u6709 locale
      // /page -> /en/newpage
      // /en/page -> /en/newpage
      // /fr/page -> /fr/newpage
      // /de/page -> /de/newpage
      {
        source: '/:locale/page',
        destination: '/en/newpage',
        permanent: false,
        locale: false,
      },
      {
        // \u8F6C\u6362\u4E3A /(en|fr|de)/(.*) \u6240\u4EE5\u4E0D\u4F1A\u5339\u914D \`/\`
        // /page -> /another2
        // /fr/page -> /fr/another2
        // \u5339\u914D \`\\\` \u6216 \`/fr\` \u4F7F\u7528 /:path*
        source: '/(.*)',
        destination: '/another2',
        permanent: false,
      },
    ];
  },
};
`,paraId:110,tocIndex:26},{value:"has",paraId:111,tocIndex:27},{value:" \u548C ",paraId:111,tocIndex:27},{value:"missing",paraId:111,tocIndex:27},{value:" \u662F\u7528\u6765\u5904\u7406\u8BF7\u6C42\u4E2D\u7684 header\u3001cookie \u548C\u8BF7\u6C42\u53C2\u6570\u662F\u5426\u5339\u914D\u67D0\u4E9B\u5B57\u6BB5\uFF0C\u6216\u8005\u4E0D\u5339\u914D\u67D0\u4E9B\u5B57\u6BB5\u7684\u65F6\u5019\uFF0C\u624D\u53D1\u751F\u91CD\u5B9A\u5411\u3002",paraId:111,tocIndex:27},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BD4\u5982\u8BF7\u6C42 ",paraId:112,tocIndex:27},{value:"/article?id=1&author=yayu",paraId:112,tocIndex:27},{value:"\uFF0C",paraId:112,tocIndex:27},{value:"has",paraId:112,tocIndex:27},{value:" \u53EF\u4EE5\u8981\u6C42\u8BF7\u6C42\u4E2D\u5FC5\u987B\u6709 id \u53C2\u6570\uFF0C\u6216\u8005 id \u53C2\u6570\u7B49\u4E8E xxx \u7684\u65F6\u5019\u624D\u91CD\u5B9A\u5411\u3002",paraId:112,tocIndex:27},{value:"missing",paraId:112,tocIndex:27},{value:" \u53EF\u4EE5\u8981\u6C42\u8BF7\u6C42\u4E2D\u5FC5\u987B\u6CA1\u6709 id \u53C2\u6570\uFF0C\u6216\u8005 id \u53C2\u6570\u4E0D\u7B49\u4E8E xxx \u7684\u65F6\u5019\u624D\u91CD\u5B9A\u5411\u3002",paraId:112,tocIndex:27},{value:"has",paraId:113,tocIndex:27},{value:" \u548C ",paraId:113,tocIndex:27},{value:"missing",paraId:113,tocIndex:27},{value:" \u5BF9\u8C61\u6709\u4E0B\u9762\u8FD9\u4E9B\u5B57\u6BB5\uFF1A",paraId:113,tocIndex:27},{value:"type",paraId:114,tocIndex:27},{value:": ",paraId:114,tocIndex:27},{value:"String",paraId:114,tocIndex:27},{value:"\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:114,tocIndex:27},{value:"header",paraId:114,tocIndex:27},{value:"\u3001",paraId:114,tocIndex:27},{value:"cookie",paraId:114,tocIndex:27},{value:"\u3001",paraId:114,tocIndex:27},{value:"host",paraId:114,tocIndex:27},{value:"\u3001",paraId:114,tocIndex:27},{value:"query",paraId:114,tocIndex:27},{value:" \u4E4B\u4E00",paraId:114,tocIndex:27},{value:"key",paraId:114,tocIndex:27},{value:": ",paraId:114,tocIndex:27},{value:"String",paraId:114,tocIndex:27},{value:"\u7C7B\u578B\uFF0C\u6240\u9009\u7C7B\u578B\uFF08\u4E5F\u5C31\u662F\u4E0A\u9762\u7684\u56DB\u79CD\u503C\uFF09\u4E2D\u8981\u5339\u914D\u7684 key",paraId:114,tocIndex:27},{value:"value",paraId:114,tocIndex:27},{value:"\uFF1A ",paraId:114,tocIndex:27},{value:"String",paraId:114,tocIndex:27},{value:" \u6216\u8005 ",paraId:114,tocIndex:27},{value:"undefined",paraId:114,tocIndex:27},{value:"\uFF0C\u8981\u68C0\u67E5\u7684\u503C\u3002\u5982\u679C\u503C\u4E3A ",paraId:114,tocIndex:27},{value:"undefiend",paraId:114,tocIndex:27},{value:"\uFF0C\u4EFB\u4F55\u503C\u90FD\u4E0D\u4F1A\u5339\u914D\u3002\u652F\u6301\u4F7F\u7528\u4E00\u4E2A\u7C7B\u4F3C\u6B63\u5219\u7684\u5B57\u7B26\u4E32\u6355\u83B7\u503C\u7684\u7279\u6B8A\u90E8\u5206\u3002\u6BD4\u5982 ",paraId:114,tocIndex:27},{value:"first-(?<paramName>.*)",paraId:114,tocIndex:27},{value:"\u7528\u4E8E\u5339\u914D ",paraId:114,tocIndex:27},{value:"first-second",paraId:114,tocIndex:27},{value:"\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u7528 ",paraId:114,tocIndex:27},{value:":paramName",paraId:114,tocIndex:27},{value:"\u83B7\u53D6 ",paraId:114,tocIndex:27},{value:"second",paraId:114,tocIndex:27},{value:" \u8FD9\u4E2A\u503C",paraId:114,tocIndex:27},{value:"\u5176\u5B9E\u8DDF headers \u662F\u4E00\u6837\u7684\uFF0C\u53EA\u4E0D\u662F\u8FC7\u4E00\u4E2A\u662F\u8FD4\u56DE\u6807\u5934\uFF0C\u4E00\u4E2A\u662F\u53D1\u751F\u91CD\u5B9A\u5411\u3002",paraId:115,tocIndex:27},{value:`// next.config.js
module.exports = {
  async redirects() {
    return [
      // \u5982\u679C header \`x-redirect-me\` \u5B58\u5728,
      // \u624D\u5E94\u7528\u91CD\u5B9A\u5411
      {
        source: '/:path((?!another-page$).*)',
        has: [
          {
            type: 'header',
            key: 'x-redirect-me',
          },
        ],
        permanent: false,
        destination: '/another-page',
      },
      // \u5982\u679C \`x-dont-redirect\` \u5B58\u5728,
      // \u4E0D\u4F1A\u5E94\u7528\u91CD\u5B9A\u5411
      {
        source: '/:path((?!another-page$).*)',
        missing: [
          {
            type: 'header',
            key: 'x-do-not-redirect',
          },
        ],
        permanent: false,
        destination: '/another-page',
      },
      // \u5982\u679C source, query, \u548C cookie \u5339\u914D,
      // \u4F1A\u5E94\u7528\u91CD\u5B9A\u5411
      {
        source: '/specific/:path*',
        has: [
          {
            type: 'query',
            key: 'page',
            value: 'home',
          },
          {
            type: 'cookie',
            key: 'authorized',
            value: 'true',
          },
        ],
        permanent: false,
        destination: '/another/:path*',
      },
      // \u5982\u679C header \`x-authorized\` \u5B58\u5728\uFF0C\u5E76\u4E14\u662F yes huozhe true,
      // \u4F1A\u5E94\u7528\u91CD\u5B9A\u5411
      {
        source: '/',
        has: [
          {
            type: 'header',
            key: 'x-authorized',
            value: '(?<authorized>yes|true)',
          },
        ],
        permanent: false,
        destination: '/home?authorized=:authorized',
      },
      // \u5982\u679C host \u662F \`example.com\`,
      // \u4F1A\u5E94\u7528\u91CD\u5B9A\u5411
      {
        source: '/:path((?!another-page$).*)',
        has: [
          {
            type: 'host',
            value: 'example.com',
          },
        ],
        permanent: false,
        destination: '/another-page',
      },
    ];
  },
};
`,paraId:116,tocIndex:27},{value:"\u91CD\u5199\u5141\u8BB8\u4F60\u5C06\u4F20\u5165\u7684\u8BF7\u6C42\u8DEF\u5F84\u6620\u5C04\u5230\u5176\u4ED6\u76EE\u6807\u8DEF\u5F84\u3002\u5B83\u4E0E\u91CD\u5B9A\u5411\u7684\u4E0D\u540C\u4E4B\u5904\u5728\u4E8E\uFF0C\u91CD\u5199\u76F8\u5F53\u4E8E\u626E\u6F14\u4E86 URL \u4EE3\u7406\u7684\u89D2\u8272\uFF0C\u4F1A\u5C4F\u853D\u76EE\u6807\u8DEF\u5F84\uFF0C\u5730\u5740\u8FD8\u662F\u8FD9\u4E2A\u5730\u5740\uFF0C\u4F46\u8DEF\u7531\u903B\u8F91\u53D1\u751F\u4E86\u53D8\u5316\u3002\u800C\u91CD\u5B9A\u5411\u5219\u662F\u5BFC\u822A\u81F3\u65B0\u7684\u9875\u9762\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684 URL \u4E5F\u4F1A\u53D1\u751F\u66F4\u6539\u3002\u914D\u7F6E\u91CD\u5B9A\u5411\uFF0C\u4F7F\u7528 ",paraId:117,tocIndex:29},{value:"next.config.js",paraId:117,tocIndex:29},{value:" \u7684 ",paraId:117,tocIndex:29},{value:"rewrites",paraId:117,tocIndex:29},{value:"\uFF0C\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:117,tocIndex:29},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/about',
        destination: '/',
      },
    ];
  },
};
`,paraId:118,tocIndex:29},{value:"\u91CD\u5199\u4F1A\u5E94\u7528\u4E8E\u5BA2\u6237\u7AEF\u8DEF\u7531\uFF0C\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u5982\u679C\u4F7F\u7528",paraId:119,tocIndex:29},{value:'<Link href="/about">',paraId:119,tocIndex:29},{value:" \u4F1A\u5E94\u7528\u91CD\u5199\u3002",paraId:119,tocIndex:29},{value:"rewrites",paraId:120,tocIndex:29},{value:" \u662F\u4E00\u4E2A\u5F02\u6B65\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5305\u542B ",paraId:120,tocIndex:29},{value:"source",paraId:120,tocIndex:29},{value:"\u3001",paraId:120,tocIndex:29},{value:"destination",paraId:120,tocIndex:29},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4\uFF0C\u5176\u4E2D\uFF1A",paraId:120,tocIndex:29},{value:"source",paraId:121,tocIndex:29},{value:" \u8868\u793A\u4F20\u5165\u7684\u8BF7\u6C42\u8DEF\u5F84",paraId:121,tocIndex:29},{value:"destination",paraId:121,tocIndex:29},{value:" \u8868\u793A\u4F60\u91CD\u5199\u7684\u7684\u76EE\u6807\u8DEF\u5F84",paraId:121,tocIndex:29},{value:"basePath",paraId:121,tocIndex:29},{value:"\uFF1A",paraId:121,tocIndex:29},{value:"false",paraId:121,tocIndex:29},{value:" \u6216\u8005 ",paraId:121,tocIndex:29},{value:"undefined",paraId:121,tocIndex:29},{value:"\u3002\u5F53\u503C\u4E3A ",paraId:121,tocIndex:29},{value:"false",paraId:121,tocIndex:29},{value:" \uFF0C\u5339\u914D\u65F6\u4E0D\u4F1A\u5305\u542B ",paraId:121,tocIndex:29},{value:"basePath",paraId:121,tocIndex:29},{value:"\uFF0C\u53EA\u80FD\u7528\u4E8E\u5916\u90E8\u91CD\u5199",paraId:121,tocIndex:29},{value:"locale",paraId:121,tocIndex:29},{value:"\uFF1A",paraId:121,tocIndex:29},{value:"false",paraId:121,tocIndex:29},{value:" \u6216\u8005 ",paraId:121,tocIndex:29},{value:"undefined",paraId:121,tocIndex:29},{value:"\uFF0C\u5339\u914D\u65F6\u662F\u5426\u5E94\u8BE5\u5305\u542B locale",paraId:121,tocIndex:29},{value:"has",paraId:121,tocIndex:29},{value:"\uFF1A\u4E00\u4E2A\u6709 ",paraId:121,tocIndex:29},{value:"type",paraId:121,tocIndex:29},{value:"\u3001",paraId:121,tocIndex:29},{value:"key",paraId:121,tocIndex:29},{value:"\u3001",paraId:121,tocIndex:29},{value:"value",paraId:121,tocIndex:29},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4",paraId:121,tocIndex:29},{value:"missing",paraId:121,tocIndex:29},{value:"\uFF1A\u4E00\u4E2A\u6709 ",paraId:121,tocIndex:29},{value:"type",paraId:121,tocIndex:29},{value:"\u3001",paraId:121,tocIndex:29},{value:"key",paraId:121,tocIndex:29},{value:"\u3001",paraId:121,tocIndex:29},{value:"value",paraId:121,tocIndex:29},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u6570\u7EC4",paraId:121,tocIndex:29},{value:"\u5982\u679C\u8FD4\u56DE\u7684\u662F\u8FD9\u79CD\u6570\u7EC4\uFF0C\u91CD\u5199\u4F1A\u5728\u68C0\u67E5\u6587\u4EF6\u7CFB\u7EDF\uFF08\u9875\u9762\u548C /public \u6587\u4EF6\uFF09\u4E4B\u540E\u548C\u52A8\u6001\u8DEF\u7531\u4E4B\u524D\u5E94\u7528\u3002",paraId:122,tocIndex:29},{value:"\u4E5F\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u5177\u6709\u7279\u5B9A\u5C5E\u6027\u7684\u5BF9\u8C61\uFF0C\u8FD9\u662F\u4E3A\u4E86\u5B9E\u73B0\u66F4\u7CBE\u7EC6\u7684\u63A7\u5236\uFF0C\u793A\u4F8B\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:123,tocIndex:29},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return {
      beforeFiles: [
        // \u5728 headers/redirects \u4E4B\u540E
        // \u5728 _next/public files \u6587\u4EF6\u4E4B\u524D\u89E6\u53D1
        {
          source: '/some-page',
          destination: '/somewhere-else',
          has: [{ type: 'query', key: 'overrideMe' }],
        },
      ],
      afterFiles: [
        // \u5728 pages/public \u4E4B\u540E\uFF0C\u5728\u52A8\u6001\u8DEF\u7531\u4E4B\u524D\u89E6\u53D1
        {
          source: '/non-existent',
          destination: '/somewhere-else',
        },
      ],
      fallback: [
        // \u5728 pages/public files \u548C\u52A8\u6001\u8DEF\u7531\u4E4B\u540E\u89E6\u53D1
        {
          source: '/:path*',
          destination: \`https://my-old-site.com/:path*\`,
        },
      ],
    };
  },
};
`,paraId:124,tocIndex:29},{value:"\u8FD9\u4E2A\u65F6\u5019\u5C31\u8981\u8BF4\u5230 Next.js \u7684\u8DEF\u7531\u7684\u68C0\u67E5\u987A\u5E8F\u662F\uFF1A",paraId:125,tocIndex:29},{value:"headers",paraId:126,tocIndex:29},{value:"redirects",paraId:126,tocIndex:29},{value:"beforeFiles \u91CD\u5199",paraId:126,tocIndex:29},{value:"public",paraId:126,tocIndex:29},{value:" \u76EE\u5F55\u4E0B\u7684\u9759\u6001\u6587\u4EF6\u3001",paraId:126,tocIndex:29},{value:"_next/static",paraId:126,tocIndex:29},{value:" \u6587\u4EF6\u3001\u975E\u52A8\u6001\u7684\u9875\u9762",paraId:126,tocIndex:29},{value:"afterFiles \u91CD\u5199\uFF0C\u5982\u679C\u6BCF\u6B21\u5339\u914D\uFF0C",paraId:126,tocIndex:29},{value:"fallback \u91CD\u5199\uFF0C\u4F1A\u5728\u6E32\u67D3 404 \u9875\u9762\u4E4B\u524D\u548C\u52A8\u6001\u8DEF\u7531\u3001\u6240\u6709\u9759\u6001\u8D44\u6E90\u68C0\u67E5\u524D\u88AB\u5F15\u7528",paraId:126,tocIndex:29},{value:"\u5982\u679C ",paraId:127,tocIndex:30},{value:"destination",paraId:127,tocIndex:30},{value:"\u6CA1\u6709\u4F7F\u7528\u53C2\u6570\uFF08\u4F8B\u5B50\u4E2D\u7684",paraId:127,tocIndex:30},{value:":path*",paraId:127,tocIndex:30},{value:"\uFF09\uFF0C\u90A3\u4E48 ",paraId:127,tocIndex:30},{value:"source",paraId:127,tocIndex:30},{value:" \u7684\u4E2D\u7684\u53C2\u6570\u4F1A\u4EE5\u67E5\u8BE2\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\uFF08query\uFF09\u9ED8\u8BA4\u4F20\u9012\u7ED9 ",paraId:127,tocIndex:30},{value:"destination",paraId:127,tocIndex:30},{value:"\uFF1A",paraId:127,tocIndex:30},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/old-about/:path*',
        destination: '/about',
      },
    ];
  },
};
`,paraId:128,tocIndex:30},{value:"\u5047\u8BBE ",paraId:129,tocIndex:30},{value:"app/about/page.js",paraId:129,tocIndex:30},{value:"\u7684\u4EE3\u7801\u4E3A\uFF1A",paraId:129,tocIndex:30},{value:`// app/about/page.js
export default function Page(props) {
  console.dir(props);
  return <h1>Hello About!</h1>;
}
`,paraId:130,tocIndex:30},{value:"\u8BBF\u95EE ",paraId:131,tocIndex:30},{value:"/old-about/article?id=1",paraId:131,tocIndex:30},{value:"\uFF0C\u6253\u5370\u7684\u503C\u4E3A\uFF1A",paraId:131,tocIndex:30},{value:"source",paraId:132,tocIndex:30},{value:" \u4E2D\u7684\u53C2\u6570 article \u53EF\u4EE5\u5728 searchParams \u4E2D\u67E5\u5230\u3002",paraId:132,tocIndex:30},{value:"\u5982\u679C ",paraId:133,tocIndex:30},{value:"destination",paraId:133,tocIndex:30},{value:"\u4F7F\u7528\u4E86\u53C2\u6570\uFF0C\u5219\u4E0D\u4F1A\u81EA\u52A8\u4F20\u9012\u4EFB\u4F55\u53C2\u6570\uFF1A",paraId:133,tocIndex:30},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/docs/:path*',
        destination: '/:path*',
      },
    ];
  },
};
`,paraId:134,tocIndex:30},{value:"\u8BBF\u95EE ",paraId:135,tocIndex:30},{value:"/docs/about?id=1",paraId:135,tocIndex:30},{value:"\uFF0C\u6253\u5370\u7684\u503C\u4E3A\uFF1A",paraId:135,tocIndex:30},{value:"\u5982\u679C ",paraId:136,tocIndex:30},{value:"destination",paraId:136,tocIndex:30},{value:"\u4F7F\u7528\u4E86\u53C2\u6570\uFF0C\u4F60\u4F9D\u7136\u53EF\u4EE5\u624B\u52A8\u4F20\u9012\u53C2\u6570\uFF1A",paraId:136,tocIndex:30},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/:first/:second',
        destination: '/:first?second=:second',
      },
    ];
  },
};
`,paraId:137,tocIndex:30},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u56E0\u4E3A ",paraId:138,tocIndex:30},{value:"destination",paraId:138,tocIndex:30},{value:" \u4F7F\u7528\u4E86 ",paraId:138,tocIndex:30},{value:":first",paraId:138,tocIndex:30},{value:" \u53C2\u6570\uFF0C\u6240\u4EE5 ",paraId:138,tocIndex:30},{value:":second",paraId:138,tocIndex:30},{value:" \u53C2\u6570\u4E0D\u4F1A\u81EA\u52A8\u88AB\u6DFB\u52A0\u5230 query \u4E2D\uFF0C\u4F46\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u4F8B\u5B50\u4E2D\u7684\u65B9\u5F0F\u624B\u52A8\u6DFB\u52A0\uFF0C\u4F7F\u5F97\u80FD\u591F\u5728 query \u4E2D\u83B7\u53D6\u3002",paraId:138,tocIndex:30},{value:"\u8BBF\u95EE ",paraId:139,tocIndex:30},{value:"/about/article?id=1",paraId:139,tocIndex:30},{value:"\uFF0C\u6253\u5370\u7684\u503C\u4E3A\uFF1A",paraId:139,tocIndex:30},{value:"\u666E\u901A\u7684\u8DEF\u5F84\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BD4\u5982 ",paraId:140,tocIndex:32},{value:"/blog/:slug",paraId:140,tocIndex:32},{value:"\u4F1A\u5339\u914D ",paraId:140,tocIndex:32},{value:"/blog/hello-world",paraId:140,tocIndex:32},{value:"\uFF08\u65E0\u5D4C\u5957\u8DEF\u5F84\uFF0C\u4E5F\u5C31\u662F\u8BF4 ",paraId:140,tocIndex:32},{value:"/blog/hello-world/about",paraId:140,tocIndex:32},{value:"\u4E0D\u4F1A\u5339\u914D\uFF09",paraId:140,tocIndex:32},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog/:slug',
        destination: '/news/:slug',
      },
    ];
  },
};
`,paraId:141,tocIndex:32},{value:"\u5728\u53C2\u6570\u540E\u4F7F\u7528 ",paraId:142,tocIndex:33},{value:"*",paraId:142,tocIndex:33},{value:" \u5B9E\u73B0\u901A\u914D\u7B26\u8DEF\u5F84\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:142,tocIndex:33},{value:"/blog/:slug*",paraId:142,tocIndex:33},{value:" \u4F1A\u5339\u914D ",paraId:142,tocIndex:33},{value:"/blog/a/b/c/d/hello-world",paraId:142,tocIndex:33},{value:"\uFF1A",paraId:142,tocIndex:33},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog/:slug*',
        destination: '/news/:slug*', // Matched parameters can be used in the destination
      },
    ];
  },
};
`,paraId:143,tocIndex:33},{value:"\u5728\u53C2\u6570\u540E\u7528\u62EC\u53F7\u5C06\u6B63\u5219\u8868\u8FBE\u5F0F\u62EC\u4F4F\u5B9E\u73B0\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:144,tocIndex:34},{value:"/post/:slug(\\\\d{1,})",paraId:144,tocIndex:34},{value:" \u5339\u914D ",paraId:144,tocIndex:34},{value:"/post/123",paraId:144,tocIndex:34},{value:" \u800C\u4E0D\u5339\u914D ",paraId:144,tocIndex:34},{value:"/post/abc",paraId:144,tocIndex:34},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/old-blog/:post(\\\\d{1,})',
        destination: '/blog/:post',
      },
    ];
  },
};
`,paraId:145,tocIndex:34},{value:"\u6CE8\u610F\uFF1A\u8FD9 8 \u4E2A\u5B57\u7B26 ",paraId:146,tocIndex:34},{value:"(",paraId:146,tocIndex:34},{value:"\u3001",paraId:146,tocIndex:34},{value:")",paraId:146,tocIndex:34},{value:"\u3001 ",paraId:146,tocIndex:34},{value:"{",paraId:146,tocIndex:34},{value:"\u3001 ",paraId:146,tocIndex:34},{value:"}",paraId:146,tocIndex:34},{value:"\u3001 ",paraId:146,tocIndex:34},{value:":",paraId:146,tocIndex:34},{value:"\u3001 ",paraId:146,tocIndex:34},{value:"*",paraId:146,tocIndex:34},{value:"\u3001 ",paraId:146,tocIndex:34},{value:"+",paraId:146,tocIndex:34},{value:"\u3001 ",paraId:146,tocIndex:34},{value:"?",paraId:146,tocIndex:34},{value:" \u90FD\u4F1A\u7528\u4E8E\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\uFF0C\u6240\u4EE5\u9700\u8981\u7528\u5230\u8FD9\u4E9B\u5B57\u7B26\u672C\u8EAB\u7684\u65F6\u5019\uFF0C\u4F7F\u7528 ",paraId:146,tocIndex:34},{value:"\\\\",paraId:146,tocIndex:34},{value:"\u8F6C\u4E49",paraId:146,tocIndex:34},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        // this will match \`/english(default)/something\` being requested
        source: '/english\\\\(default\\\\)/:slug',
        destination: '/en-us/:slug',
      },
    ];
  },
};
`,paraId:147,tocIndex:34},{value:"\u5F53\u4F7F\u7528 ",paraId:148,tocIndex:35},{value:"basePath",paraId:148,tocIndex:35},{value:" \u7684\u65F6\u5019\uFF0C\u6BCF\u4E00\u4E2A ",paraId:148,tocIndex:35},{value:"source",paraId:148,tocIndex:35},{value:" \u548C ",paraId:148,tocIndex:35},{value:"destination",paraId:148,tocIndex:35},{value:" \u90FD\u4F1A\u81EA\u52A8\u6DFB\u52A0 ",paraId:148,tocIndex:35},{value:"basePath",paraId:148,tocIndex:35},{value:" \u4F5C\u4E3A\u524D\u7F00\uFF0C\u9664\u975E\u4F60\u4E3A\u91CD\u5199\u8BBE\u7F6E ",paraId:148,tocIndex:35},{value:"basePath: false",paraId:148,tocIndex:35},{value:"\uFF1A",paraId:148,tocIndex:35},{value:`// next.config.js
module.exports = {
  basePath: '/docs',

  async rewrites() {
    return [
      {
        source: '/with-basePath', // \u81EA\u52A8\u53D8\u6210 /docs/with-basePath
        destination: '/another', // \u81EA\u52A8\u53D8\u6210 /docs/another
      },
      {
        // \u4E0D\u4F1A\u6DFB\u52A0 /docs \u5230 /without-basePath \u56E0\u4E3A basePath \u8BBE\u7F6E\u4E3A false
        source: '/without-basePath',
        destination: 'https://example.com',
        basePath: false,
      },
    ];
  },
};
`,paraId:149,tocIndex:35},{value:"\u5F53\u4F7F\u7528 ",paraId:150,tocIndex:36},{value:"i18n",paraId:150,tocIndex:36},{value:"\u7684\u65F6\u5019\uFF0C\u6BCF\u4E00\u4E2A ",paraId:150,tocIndex:36},{value:"source",paraId:150,tocIndex:36},{value:" \u548C ",paraId:150,tocIndex:36},{value:"destination",paraId:150,tocIndex:36},{value:" \u90FD\u4F1A\u81EA\u52A8\u6839\u636E ",paraId:150,tocIndex:36},{value:"locales",paraId:150,tocIndex:36},{value:"\u6DFB\u52A0\u524D\u7F00\u8FDB\u884C\u5904\u7406\uFF0C\u9664\u975E\u4F60\u4E3A\u91CD\u5199\u8BBE\u7F6E ",paraId:150,tocIndex:36},{value:"locale: false",paraId:150,tocIndex:36},{value:"\u3002\u5982\u679C\u8BBE\u7F6E ",paraId:150,tocIndex:36},{value:"locale: false",paraId:150,tocIndex:36},{value:"\uFF0C\u4F60\u5FC5\u987B\u4F7F\u7528\u4E00\u4E2A ",paraId:150,tocIndex:36},{value:"locale",paraId:150,tocIndex:36},{value:" \u4F5C\u4E3A ",paraId:150,tocIndex:36},{value:"source",paraId:150,tocIndex:36},{value:" \u548C ",paraId:150,tocIndex:36},{value:"destination",paraId:150,tocIndex:36},{value:" \u7684\u524D\u7F00\u624D\u80FD\u591F\u6B63\u786E\u5339\u914D\uFF0C\u8BA9\u6211\u4EEC\u770B\u4E2A\u4F8B\u5B50\uFF1A",paraId:150,tocIndex:36},{value:`// next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'en',
  },

  async rewrites() {
    return [
      {
        // /with-locale -> /another
        // /en/with-locale -> /en/another
        // /fr/with-locale -> /fr/another
        // /de/with-locale -> /de/another
        source: '/with-locale',
        destination: '/another',
      },
      {
        // \u56E0\u4E3A locale \u8BBE\u7F6E\u4E3A false\uFF0C\u6240\u4EE5\u4E0D\u4F1A\u81EA\u52A8\u5904\u7406
        // /nl/with-locale-manual -> /nl/another
        source: '/nl/with-locale-manual',
        destination: '/nl/another',
        locale: false,
      },
      {
        // \u56E0\u4E3A \`en\` \u662F defaultLocale\uFF0C\u6240\u4EE5\u5339\u914D '/'
        // /en -> /en/another
        // / -> /en/another
        source: '/en',
        destination: '/en/another',
        locale: false,
      },
      // \u5C3D\u7BA1 locale \u8BBE\u7F6E\u4E3A false\uFF0C\u4F46\u5339\u914D\u6240\u6709 locale
      {
        source: '/:locale/api-alias/:path*',
        destination: '/api/:path*',
        locale: false,
      },
      {
        // \u8F6C\u6362\u4E3A /(en|fr|de)/(.*) \u6240\u4EE5\u4E0D\u4F1A\u5339\u914D \`/\`
        // /page -> /another
        // /fr/page -> /fr/another
        // \u5339\u914D \`\\\` \u6216 \`/fr\` \u4F7F\u7528 /:path*
        source: '/(.*)',
        destination: '/another',
      },
    ];
  },
};
`,paraId:151,tocIndex:36},{value:"has",paraId:152,tocIndex:37},{value:" \u548C ",paraId:152,tocIndex:37},{value:"missing",paraId:152,tocIndex:37},{value:" \u662F\u7528\u6765\u5904\u7406\u8BF7\u6C42\u4E2D\u7684 header\u3001cookie \u548C\u8BF7\u6C42\u53C2\u6570\u662F\u5426\u5339\u914D\u67D0\u4E9B\u5B57\u6BB5\uFF0C\u6216\u8005\u4E0D\u5339\u914D\u67D0\u4E9B\u5B57\u6BB5\u7684\u65F6\u5019\uFF0C\u624D\u53D1\u751F\u91CD\u5199\u3002",paraId:152,tocIndex:37},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u6BD4\u5982\u8BF7\u6C42 ",paraId:153,tocIndex:37},{value:"/article?id=1&author=yayu",paraId:153,tocIndex:37},{value:"\uFF0C",paraId:153,tocIndex:37},{value:"has",paraId:153,tocIndex:37},{value:" \u53EF\u4EE5\u8981\u6C42\u8BF7\u6C42\u4E2D\u5FC5\u987B\u6709 id \u53C2\u6570\uFF0C\u6216\u8005 id \u53C2\u6570\u7B49\u4E8E xxx \u7684\u65F6\u5019\u624D\u91CD\u5199\u3002",paraId:153,tocIndex:37},{value:"missing",paraId:153,tocIndex:37},{value:" \u53EF\u4EE5\u8981\u6C42\u8BF7\u6C42\u4E2D\u5FC5\u987B\u6CA1\u6709 id \u53C2\u6570\uFF0C\u6216\u8005 id \u53C2\u6570\u4E0D\u7B49\u4E8E xxx \u7684\u65F6\u5019\u624D\u91CD\u5199\u3002",paraId:153,tocIndex:37},{value:"has",paraId:154,tocIndex:37},{value:" \u548C ",paraId:154,tocIndex:37},{value:"missing",paraId:154,tocIndex:37},{value:" \u5BF9\u8C61\u6709\u4E0B\u9762\u8FD9\u4E9B\u5B57\u6BB5\uFF1A",paraId:154,tocIndex:37},{value:"type",paraId:155,tocIndex:37},{value:": ",paraId:155,tocIndex:37},{value:"String",paraId:155,tocIndex:37},{value:"\u7C7B\u578B\uFF0C\u503C\u4E3A ",paraId:155,tocIndex:37},{value:"header",paraId:155,tocIndex:37},{value:"\u3001",paraId:155,tocIndex:37},{value:"cookie",paraId:155,tocIndex:37},{value:"\u3001",paraId:155,tocIndex:37},{value:"host",paraId:155,tocIndex:37},{value:"\u3001",paraId:155,tocIndex:37},{value:"query",paraId:155,tocIndex:37},{value:" \u4E4B\u4E00",paraId:155,tocIndex:37},{value:"key",paraId:155,tocIndex:37},{value:": ",paraId:155,tocIndex:37},{value:"String",paraId:155,tocIndex:37},{value:"\u7C7B\u578B\uFF0C\u6240\u9009\u7C7B\u578B\uFF08\u4E5F\u5C31\u662F\u4E0A\u9762\u7684\u56DB\u79CD\u503C\uFF09\u4E2D\u8981\u5339\u914D\u7684 key",paraId:155,tocIndex:37},{value:"value",paraId:155,tocIndex:37},{value:"\uFF1A ",paraId:155,tocIndex:37},{value:"String",paraId:155,tocIndex:37},{value:" \u6216\u8005 ",paraId:155,tocIndex:37},{value:"undefined",paraId:155,tocIndex:37},{value:"\uFF0C\u8981\u68C0\u67E5\u7684\u503C\u3002\u5982\u679C\u503C\u4E3A ",paraId:155,tocIndex:37},{value:"undefiend",paraId:155,tocIndex:37},{value:"\uFF0C\u4EFB\u4F55\u503C\u90FD\u4E0D\u4F1A\u5339\u914D\u3002\u652F\u6301\u4F7F\u7528\u4E00\u4E2A\u7C7B\u4F3C\u6B63\u5219\u7684\u5B57\u7B26\u4E32\u6355\u83B7\u503C\u7684\u7279\u6B8A\u90E8\u5206\u3002\u6BD4\u5982 ",paraId:155,tocIndex:37},{value:"first-(?<paramName>.*)",paraId:155,tocIndex:37},{value:"\u7528\u4E8E\u5339\u914D ",paraId:155,tocIndex:37},{value:"first-second",paraId:155,tocIndex:37},{value:"\uFF0C\u7136\u540E\u5C31\u53EF\u4EE5\u7528 ",paraId:155,tocIndex:37},{value:":paramName",paraId:155,tocIndex:37},{value:"\u83B7\u53D6 ",paraId:155,tocIndex:37},{value:"second",paraId:155,tocIndex:37},{value:" \u8FD9\u4E2A\u503C",paraId:155,tocIndex:37},{value:"\u5176\u5B9E\u8DDF redirects \u662F\u4E00\u6837\u7684\uFF0C\u53EA\u4E0D\u662F\u8FC7\u4E00\u4E2A\u662F\u91CD\u5B9A\u5411\uFF0C\u4E00\u4E2A\u662F\u91CD\u5199\u3002",paraId:156,tocIndex:37},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      // \u5982\u679C header \`x-rewrite-me\` \u5B58\u5728,
      // \u4F1A\u5E94\u7528\u91CD\u5199
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-rewrite-me',
          },
        ],
        destination: '/another-page',
      },
      // \u5982\u679C \`x-rewrite-me\` \u4E0D\u5B58\u5728
      // \u4F1A\u5E94\u7528\u91CD\u5199
      {
        source: '/:path*',
        missing: [
          {
            type: 'header',
            key: 'x-rewrite-me',
          },
        ],
        destination: '/another-page',
      },
      // \u5982\u679C source, query, \u548C cookie \u5339\u914D,
      // \u4F1A\u5E94\u7528\u91CD\u5199
      {
        source: '/specific/:path*',
        has: [
          {
            type: 'query',
            key: 'page',
            value: 'home',
          },
          {
            type: 'cookie',
            key: 'authorized',
            value: 'true',
          },
        ],
        destination: '/:path*/home',
      },
      // \u5982\u679C header \`x-authorized\` \u5B58\u5728\u4E14\u4E3A yes \u6216 true
      // \u4F1A\u5E94\u7528\u91CD\u5199
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-authorized',
            value: '(?<authorized>yes|true)',
          },
        ],
        destination: '/home?authorized=:authorized',
      },
      // \u5982\u679C host \u662F \`example.com\`,
      // \u4F1A\u5E94\u7528\u91CD\u5199
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'example.com',
          },
        ],
        destination: '/another-page',
      },
    ];
  },
};
`,paraId:157,tocIndex:37},{value:"rewrites \u53EF\u4EE5\u91CD\u5199\u5230\u5916\u90E8 url\uFF0C\u8FD9\u5728\u589E\u91CF\u91C7\u7528 Next.js \u7684\u9879\u76EE\u4E2D\u7279\u522B\u6709\u7528\uFF0C\u6BD4\u5982\u8FD9\u4E2A\u4F8B\u5B50\u5C31\u662F\u5C06\u5E94\u7528\u4E2D\u7684 ",paraId:158,tocIndex:38},{value:"/blog",paraId:158,tocIndex:38},{value:" \u8DEF\u7531\u5168\u90E8\u91CD\u5199\u5230\u5916\u90E8\u7F51\u5740\uFF1A",paraId:158,tocIndex:38},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return [
      {
        source: '/blog',
        destination: 'https://example.com/blog',
      },
      {
        source: '/blog/:slug',
        destination: 'https://example.com/blog/:slug',
      },
    ];
  },
};
`,paraId:159,tocIndex:38},{value:"\u5982\u679C\u8BBE\u7F6E\u4E86 ",paraId:160,tocIndex:38},{value:"trailingSlash:true",paraId:160,tocIndex:38},{value:"\uFF0C\u4F60\u4E5F\u9700\u8981\u5728 ",paraId:160,tocIndex:38},{value:"source",paraId:160,tocIndex:38},{value:" \u4E2D\u63D2\u5165\u4E00\u4E2A\u5C3E\u90E8\u659C\u6760\u3002\u5982\u679C\u76EE\u6807\u5730\u5740\u4E5F\u9700\u8981\u5C3E\u90E8\u659C\u6760\uFF0C\u4E5F\u5E94\u8BE5\u5305\u542B\u5728 ",paraId:160,tocIndex:38},{value:"destination",paraId:160,tocIndex:38},{value:" \u53C2\u6570\u4E2D\u3002",paraId:160,tocIndex:38},{value:`// next.config.js
module.exports = {
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/blog/',
        destination: 'https://example.com/blog/',
      },
      {
        source: '/blog/:path*/',
        destination: 'https://example.com/blog/:path*/',
      },
    ];
  },
};
`,paraId:161,tocIndex:38},{value:"\u53EF\u4EE5\u8BA9 Next.js \u5728\u68C0\u67E5\u6240\u6709 Next.js \u8DEF\u7531\u540E\uFF0C\u5982\u679C\u6CA1\u6709\u5BF9\u5E94\u7684\u8DEF\u7531\uFF0C\u90A3\u5C31\u4EE3\u7406\u73B0\u6709\u7684\u7F51\u7AD9\u3002\u8FD9\u6837\u4F60\u5C06\u66F4\u591A\u9875\u9762\u8FC1\u79FB\u6210 Next.js \u65F6\uFF0C\u5C31\u65E0\u9700\u91CD\u5199\u914D\u7F6E\uFF1A",paraId:162,tocIndex:39},{value:`// next.config.js
module.exports = {
  async rewrites() {
    return {
      fallback: [
        {
          source: '/:path*',
          destination: \`https://custom-routes-proxying-endpoint.vercel.app/:path*\`,
        },
      ],
    };
  },
};
`,paraId:163,tocIndex:39},{value:"https://nextjs.org/docs/app/api-reference/next-config-js",paraId:164,tocIndex:40},{value:"https://nextjs.org/docs/app/api-reference/next-config-js/headers",paraId:164,tocIndex:40},{value:"https://nextjs.org/docs/app/api-reference/next-config-js/redirects",paraId:164,tocIndex:40},{value:"https://nextjs.org/docs/app/api-reference/next-config-js/rewrites",paraId:164,tocIndex:40}]}}]);
