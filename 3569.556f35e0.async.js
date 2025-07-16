"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3569],{73569:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u672C\u7BC7\u6211\u4EEC\u4ECE\u96F6\u5F00\u59CB\uFF0C\u624B\u5199\u4E00\u4E2A React Server Component \u5B9E\u73B0\u3002\u4E3A\u4E86\u5E2E\u52A9\u5927\u5BB6\u7406\u89E3 React Server Component \u7684\u51FA\u73B0\u80CC\u666F\uFF0C\u6211\u4EEC\u4F1A\u4ECE\u6700\u539F\u59CB\u7684\u9875\u9762\u5B9E\u73B0\u65B9\u5F0F\u5F00\u59CB\u8BB2\u8D77\uFF0C\u8DDF\u968F\u7740 React \u7684\u53D1\u5C55\u5386\u53F2\u4E0D\u65AD\u5B8C\u5584\u4EE3\u7801\uFF0C\u6700\u7EC8\u5B9E\u73B0 React Server Component\u3002",paraId:0,tocIndex:0},{value:"\u73B0\u5728\u5C31\u8BA9\u6211\u4EEC\u5F00\u59CB\u5427\u3002",paraId:1,tocIndex:0},{value:"\u9996\u5148\u521B\u5EFA\u9879\u76EE\uFF0C\u8FD0\u884C\u4EE5\u4E0B\u547D\u4EE4\uFF0C\u5B8C\u6210\u9879\u76EE\u521D\u59CB\u5316\uFF1A",paraId:2,tocIndex:1},{value:`mkdir react-rsc && cd react-rsc

npm init

npm i tsx --save-dev

npm i express escape-html react react-dom --save
`,paraId:3,tocIndex:1},{value:"\u6CE8\uFF1A\u5728",paraId:4,tocIndex:1},{value:"\u300A\u6E90\u7801\u7BC7 | \u624B\u5199 React SSR\u300B",paraId:4,tocIndex:1},{value:"\uFF0C\u6211\u4EEC\u901A\u8FC7 webpack \u548C\u81EA\u5B9A\u4E49\u914D\u7F6E\u5B9E\u73B0\u4E86 JSX \u8BED\u6CD5\u7684\u7F16\u8BD1\u3002\u672C\u7BC7\u4E3A\u4E86\u66F4\u52A0\u65B9\u4FBF\uFF0C\u6211\u4EEC\u5C06\u76F4\u63A5\u4F7F\u7528 ",paraId:4,tocIndex:1},{value:"tsx",paraId:4,tocIndex:1},{value:" \u8FDB\u884C\u5904\u7406\uFF0C\u867D\u7136\u6587\u4EF6\u4F1A\u547D\u540D\u4E3A ",paraId:4,tocIndex:1},{value:".ts",paraId:4,tocIndex:1},{value:"\u6216 ",paraId:4,tocIndex:1},{value:".tsx",paraId:4,tocIndex:1},{value:"\uFF0C\u4F46\u6211\u4EEC\u5E76\u4E0D\u4F1A\u4F7F\u7528 TypeScript \u8BED\u6CD5\uFF0C\u53EA\u662F\u501F\u52A9\u5176\u5BF9 JSX \u8BED\u6CD5\u7684\u7F16\u8BD1\u529F\u80FD\u3002",paraId:4,tocIndex:1},{value:"\u65B0\u5EFA\u6587\u4EF6 ",paraId:5,tocIndex:1},{value:"index.ts",paraId:5,tocIndex:1},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:5,tocIndex:1},{value:`import express from 'express';
import { readFile } from 'fs/promises';
import escapeHtml from 'escape-html';

const app = express();

app.get('/:route(*)', async (req, res) => {
  const html = await htmlGenerator();
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

async function htmlGenerator() {
  const author = 'YaYu';
  const postContent = await readFile('./posts/hello.txt', 'utf8');

  return \`<html>
  <head>
    <title>My blog</title>
    <script src="https://cdn.tailwindcss.com"><\/script>
  </head>
  <body class="p-5">
    <nav class="flex items-center justify-center gap-10 text-blue-600">
      <a href="/">Home</a>
    </nav>
    <article class="h-40 mt-5 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center">
      \${escapeHtml(postContent)}
    </article>
    <footer class="h-20 mt-5 flex-1 rounded-xl bg-cyan-500 text-white flex items-center justify-center">
      (c) \${escapeHtml(author)}, \${new Date().getFullYear()}
    </footer>
  </body>
</html>\`;
}

app.listen(3000, (err) => {
  if (err) return console.error(err);
  return console.log(\`Server is listening on 3000\`);
});
`,paraId:6,tocIndex:1},{value:"\u535A\u5BA2\u7684\u5177\u4F53\u5185\u5BB9\u6211\u4EEC\u4F1A\u8BFB\u53D6 ",paraId:7,tocIndex:1},{value:"/posts/hello.txt",paraId:7,tocIndex:1},{value:"\u6587\u4EF6\uFF0C\u6240\u4EE5\u65B0\u5EFA ",paraId:7,tocIndex:1},{value:"/posts/hello.txt",paraId:7,tocIndex:1},{value:"\uFF0C\u968F\u4FBF\u5199\u5165\u4E00\u4E9B\u5185\u5BB9\uFF0C\u6BD4\u5982\uFF1A",paraId:7,tocIndex:1},{value:`<h1>Hello World!</h1>
`,paraId:8,tocIndex:1},{value:"\u4FEE\u6539 ",paraId:9,tocIndex:1},{value:"package.json",paraId:9,tocIndex:1},{value:"\u6587\u4EF6\u4E2D\u7684\u811A\u672C\u547D\u4EE4\uFF0C\u6DFB\u52A0\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:9,tocIndex:1},{value:`{
  "scripts": {
    "start": "tsx watch ./index.ts"
  }
}

`,paraId:10,tocIndex:1},{value:"\u8FD0\u884C ",paraId:11,tocIndex:1},{value:"npm start",paraId:11,tocIndex:1},{value:"\uFF0C\u6B64\u65F6\u6548\u679C\u5982\u4E0B\uFF1A",paraId:11,tocIndex:1},{value:"\u529F\u80FD\u5B9E\u73B0\uFF1AReact RSC \u5B9E\u73B0",paraId:12,tocIndex:1},{value:"\u6E90\u7801\u5730\u5740\uFF1A",paraId:12,tocIndex:1},{value:"https://github.com/mqyqingfeng/next-app-demo/tree/react-rsc-1",paraId:12,tocIndex:1},{value:"\u4E0B\u8F7D\u4EE3\u7801\uFF1A",paraId:12,tocIndex:1},{value:"git clone -b react-rsc-1 git@github.com:mqyqingfeng/next-app-demo.git",paraId:12,tocIndex:1},{value:"\u6548\u679C\u4E0A\uFF0C\u6211\u4EEC\u5B9E\u73B0\u7684\u662F\u4E00\u4E2A\u535A\u5BA2\u9875\u9762\u7684\u7B80\u5316\u7248\uFF0C\u9876\u90E8\u662F\u5BFC\u822A\u680F\uFF0C\u5E95\u90E8\u662F\u9875\u811A\uFF0C\u4E2D\u95F4\u662F\u5177\u4F53\u7684\u6587\u7AE0\u5185\u5BB9\u3002",paraId:13,tocIndex:1},{value:"\u6280\u672F\u5B9E\u73B0\u4E0A\uFF0C\u6211\u4EEC\u4F7F\u7528 express \u8D77\u4E86\u4E00\u4E2A\u670D\u52A1\u5668\uFF0C\u5728\u8BFB\u53D6\u4E86 txt \u6587\u4EF6\u7684\u5185\u5BB9\u540E\uFF0C\u901A\u8FC7\u6A21\u677F\u5B57\u7B26\u4E32\u7684\u5F62\u5F0F\uFF0C\u76F4\u63A5\u8FD4\u56DE\u4E86\u9875\u9762 HTML \u5185\u5BB9\u3002",paraId:14,tocIndex:1},{value:"\u503C\u5F97\u6CE8\u610F\u7684\u662F\uFF0C\u5F53\u6211\u4EEC\u8BFB\u53D6\u5B8C txt \u7684\u5185\u5BB9\u540E\uFF0C\u4F7F\u7528\u4E86 escape-html \u5BF9\u5185\u5BB9\u8FDB\u884C\u4E86\u8F6C\u4E49\u3002\u8FD9\u662F\u4E00\u79CD\u5E38\u89C1\u7684\u5185\u5BB9\u5B89\u5168\u5904\u7406\u3002\u9EBB\u70E6\u7684\u5730\u65B9\u5728\u4E8E\uFF0C\u6240\u6709\u5199\u5165\u5185\u5BB9\u7684\u5730\u65B9\uFF0C\u90FD\u9700\u8981\u81EA\u5DF1\u6DFB\u52A0\u903B\u8F91\u5904\u7406\uFF0C\u96BE\u9053\u5C31\u6CA1\u6709\u66F4\u52A0\u7B80\u5355\u3001\u4FBF\u6377\u3001\u5B89\u5168\u7684\u4F7F\u7528\u65B9\u5F0F\u5462\uFF1F",paraId:15,tocIndex:1},{value:"\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0CReact \u53D1\u660E\u4E86 JSX\u3002\u4F60\u53EF\u4EE5\u628A\u5B83\u7406\u89E3\u6210\u4E00\u79CD\u7279\u6B8A\u7684\u6A21\u677F\u8BED\u8A00\u3002\u4F7F\u7528 JSX\uFF0C\u4F60\u53EF\u4EE5\u5728 JavaScript \u4E2D\u76F4\u63A5\u4F7F\u7528 HTML \u6807\u7B7E\uFF0C\u6BD4\u5982\uFF1A",paraId:16,tocIndex:2},{value:`const res = (
  <html>
    <head>
      <title>My blog</title>
    </head>
    <body>
      <nav>
        <a href="/">Home</a>
        <hr />
      </nav>
      <article>{postContent}</article>
      <footer>
        <hr />
        <p>
          <i>
            (c) {author}, {new Date().getFullYear()}
          </i>
        </p>
      </footer>
    </body>
  </html>
);
`,paraId:17,tocIndex:2},{value:"\u5176\u4E2D\u53D8\u91CF\u4F7F\u7528 ",paraId:18,tocIndex:2},{value:"{}",paraId:18,tocIndex:2},{value:"\u8FDB\u884C\u5305\u88F9\u3002\u8FD9\u79CD\u8BED\u6CD5\uFF0C\u65E0\u8BBA\u662F JavaScript \u8FD8\u662F HTML \u5176\u5B9E\u90FD\u4E0D\u80FD\u76F4\u63A5\u8BC6\u522B\uFF0C\u6240\u4EE5\u4F7F\u7528 JSX \u8BED\u6CD5\u8FD8\u9700\u8981\u642D\u914D\u7F16\u8BD1\u5668\uFF08\u6BD4\u5982 Babel\uFF09\u4F7F\u7528\uFF0CBabel \u4F1A\u5C06\u4EE3\u7801\u7F16\u8BD1\u6210\u5982\u4E0B\u5F62\u5F0F\uFF1A",paraId:18,tocIndex:2},{value:`import { jsx } from "react/jsx-runtime";

const res = jsx("html", {
  children: [
    jsx("head", {
      children: jsx("title", {
        children: "My blog"
      })
    }),
  jsx("body", {
    children: [...]
  })]
});
`,paraId:19,tocIndex:2},{value:"\u4E4B\u6240\u4EE5\u7F16\u8BD1\u6210\u8FD9\u79CD\u51FD\u6570\u6267\u884C\u7684\u5F62\u5F0F\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u8FD8\u9700\u8981\u5728\u51FD\u6570\u8FD0\u884C\u7684\u65F6\u5019\u8BFB\u53D6\u5916\u8FB9\u7684\u53D8\u91CF\uFF08\u5C31\u6BD4\u5982\u4E0A\u56FE\u4E2D\u7684 postContent \u548C author\uFF09\u3002\u6700\u7EC8\u8BE5\u51FD\u6570\u4F1A\u8FD4\u56DE\u4E00\u4E2A\u63CF\u8FF0 HTML \u7684 JSON \u5BF9\u8C61\uFF08\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u6211\u4EEC\u5C31\u7B80\u79F0\u4E3A JSX \u5BF9\u8C61\u4E86\uFF09\uFF0C\u7C7B\u4F3C\u4E8E\u5982\u4E0B\u8FD9\u79CD\u5F62\u5F0F\uFF1A",paraId:20,tocIndex:2},{value:`// Slightly simplified
{
  $$typeof: Symbol.for("react.element"), // Tells React it's a JSX element (e.g. <html>)
  type: 'html',
  props: {
    children: [
      {
        $$typeof: Symbol.for("react.element"),
        type: 'head',
        props: {
          children: {
            $$typeof: Symbol.for("react.element"),
            type: 'title',
            props: { children: 'My blog' }
          }
        }
      },
      {
        $$typeof: Symbol.for("react.element"),
        type: 'body',
        props: {
          children: [
            {
              $$typeof: Symbol.for("react.element"),
              type: 'nav',
              props: {
                children: [{
                  $$typeof: Symbol.for("react.element"),
                  type: 'a',
                  props: { href: '/', children: 'Home' }
                }, {
                  $$typeof: Symbol.for("react.element"),
                  type: 'hr',
                  props: null
                }]
              }
            },
            {
              $$typeof: Symbol.for("react.element"),
              type: 'article',
              props: {
                children: postContent
              }
            },
            {
              $$typeof: Symbol.for("react.element"),
              type: 'footer',
              props: {
                /* ...And so on... */
              }
            }
          ]
        }
      }
    ]
  }
}
`,paraId:21,tocIndex:2},{value:"\u6240\u4EE5\u6211\u4EEC\u5199\u4EE3\u7801\u7684\u65F6\u5019\uFF0C\u5199\u7684\u662F\uFF1A",paraId:22,tocIndex:2},{value:`const res = <html>...</html>;
`,paraId:23,tocIndex:2},{value:"\u5230 JavaScript \u5177\u4F53\u6267\u884C\u7684\u65F6\u5019\uFF0C\u5176\u5B9E\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF1A",paraId:24,tocIndex:2},{value:`const res = {
  $$typeof: Symbol.for("react.element"),
  type: 'html',
  props: {
    children: [ ... ]
  }
}
`,paraId:25,tocIndex:2},{value:"\u4F46\u6709\u4E86\u63CF\u8FF0 HTML \u7684 JSX \u5BF9\u8C61\u8FD8\u4E0D\u591F\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u4E00\u4E2A render \u51FD\u6570\uFF0C\u5C06 JSX \u5BF9\u8C61\u6E32\u67D3\u4E3A\u5177\u4F53\u7684 HTML\uFF0C\u8FD4\u56DE\u7ED9\u5BA2\u6237\u7AEF\u7684\u5E94\u8BE5\u662F\u8FD9\u4E2A\u5177\u4F53\u7684 HTML\u3002",paraId:26,tocIndex:2},{value:"\u6211\u4EEC\u4FEE\u6539 ",paraId:27,tocIndex:2},{value:"index.ts",paraId:27,tocIndex:2},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:27,tocIndex:2},{value:`import express from 'express';
import { htmlGenerator } from './generator';
const app = express();

app.get('/:route(*)', async (req, res) => {
  const html = await htmlGenerator();
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

app.listen(3000, (err) => {
  if (err) return console.error(err);
  return console.log(\`Server is listening on 3000\`);
});
`,paraId:28,tocIndex:2},{value:"\u65B0\u5EFA ",paraId:29,tocIndex:2},{value:"generator.tsx",paraId:29,tocIndex:2},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:29,tocIndex:2},{value:`import { readFile } from 'fs/promises';
import React from 'react';
import { renderJSXToHTML } from './utils';

export async function htmlGenerator() {
  const author = 'YaYu';
  const postContent = await readFile('./posts/hello.txt', 'utf8');

  let jsx = (
    <html>
      <head>
        <title>My blog</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
      </head>
      <body className="p-5">
        <nav className="flex items-center justify-center gap-10 text-blue-600">
          <a href="/">Home</a>
        </nav>
        <article className="h-40 mt-5 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center">
          {postContent}
        </article>
        <footer className="h-20 mt-5 flex-1 rounded-xl bg-cyan-500 text-white flex items-center justify-center">
          (c) {author}, {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );

  return renderJSXToHTML(jsx);
}
`,paraId:30,tocIndex:2},{value:"\u8FD9\u91CC\u6211\u4EEC\u76F4\u63A5\u4F7F\u7528\u4E86 JSX \u8BED\u6CD5\uFF0Ctsx \u4F1A\u5E2E\u52A9\u6211\u4EEC\u8FDB\u884C\u7F16\u8BD1\uFF0C\u6211\u4EEC\u5C31\u4E0D\u9700\u8981\u5F15\u5165 Webpack \u548C Babel \u6765\u5904\u7406\u4E86\u3002",paraId:31,tocIndex:2},{value:"\u65B0\u5EFA ",paraId:32,tocIndex:2},{value:"utils.ts",paraId:32,tocIndex:2},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:32,tocIndex:2},{value:`import escapeHtml from 'escape-html';

export function renderJSXToHTML(jsx) {
  if (typeof jsx === 'string' || typeof jsx === 'number') {
    return escapeHtml(jsx);
  } else if (jsx == null || typeof jsx === 'boolean') {
    return '';
  } else if (Array.isArray(jsx)) {
    return jsx.map((child) => renderJSXToHTML(child)).join('');
  } else if (typeof jsx === 'object') {
    if (jsx.$$typeof === Symbol.for('react.element')) {
      let html = '<' + jsx.type;
      for (const propName in jsx.props) {
        if (jsx.props.hasOwnProperty(propName) && propName !== 'children') {
          html += ' ';
          html += propName;
          html += '=';
          html += \`"\${escapeHtml(jsx.props[propName])}"\`;
        }
      }
      html += '>';
      html += renderJSXToHTML(jsx.props.children);
      html += '</' + jsx.type + '>';
      html = html.replace(/className/g, 'class');
      return html;
    } else throw new Error('Cannot render an object.');
  } else throw new Error('Not implemented.');
}
`,paraId:33,tocIndex:2},{value:"renderJSXToHTML \u7684\u4EE3\u7801\u5E76\u4E0D\u590D\u6742\uFF0C\u7B80\u5355\u7684\u6765\u8BF4\uFF0C\u5C31\u662F\u4E0D\u65AD\u5224\u65AD jsx \u5BF9\u8C61\u8282\u70B9\u7684\u7C7B\u578B\uFF0C\u9012\u5F52\u5904\u7406\uFF0C\u6700\u7EC8\u62FC\u63A5\u5F97\u5230\u4E00\u4E2A HTML \u5B57\u7B26\u4E32\u3002",paraId:34,tocIndex:2},{value:"\u8FD0\u884C ",paraId:35,tocIndex:2},{value:"npm start",paraId:35,tocIndex:2},{value:"\uFF0C\u6B64\u65F6\u6548\u679C\u4E0D\u53D8\uFF1A",paraId:35,tocIndex:2},{value:"\u529F\u80FD\u5B9E\u73B0\uFF1AReact RSC \u5B9E\u73B0",paraId:36,tocIndex:2},{value:"\u6E90\u7801\u5730\u5740\uFF1A",paraId:36,tocIndex:2},{value:"https://github.com/mqyqingfeng/next-app-demo/tree/react-rsc-2",paraId:36,tocIndex:2},{value:"\u4E0B\u8F7D\u4EE3\u7801\uFF1A",paraId:36,tocIndex:2},{value:"git clone -b react-rsc-2 git@github.com:mqyqingfeng/next-app-demo.git",paraId:36,tocIndex:2},{value:"\u8FD9\u91CC\u6211\u4EEC\u5199\u7684\u662F\u4E00\u7BC7\u535A\u5BA2\u9875\u9762\uFF0C\u4F46\u5176\u5B9E\u6BCF\u4E2A\u535A\u5BA2\u9875\u9762\u5185\u5BB9\u90FD\u662F\u76F8\u4F3C\u7684\uFF0C\u6709\u7740\u76F8\u540C\u7684\u9876\u90E8\u5BFC\u822A\u548C\u9875\u811A\uFF0C\u4E3A\u4E86\u4EE3\u7801\u80FD\u591F\u590D\u7528\uFF0CReact \u5F15\u5165\u4E86\u7EC4\u4EF6\u7684\u6982\u5FF5\uFF0C\u5C06\u91CD\u590D\u7684\u5185\u5BB9\u62BD\u79BB\u6210\u4E00\u4E2A\u7EC4\u4EF6\uFF0C\u7528\u5230\u7684\u5730\u65B9\u76F4\u63A5\u5F15\u5165\u4F7F\u7528\u5373\u53EF\u3002",paraId:37,tocIndex:3},{value:"\u6211\u4EEC\u6765\u5B9E\u73B0\u4E00\u4E0B\uFF0C\u65B0\u5EFA ",paraId:38,tocIndex:3},{value:"components.tsx",paraId:38,tocIndex:3},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:38,tocIndex:3},{value:`import React from 'react';

export function BlogPostPage({ postContent, author }) {
  return (
    <html>
      <head>
        <title>My blog</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
      </head>
      <body className="p-5">
        <nav className="flex items-center justify-center gap-10 text-blue-600">
          <a href="/">Home</a>
        </nav>
        <article className="h-40 mt-5 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center">
          {postContent}
        </article>
        <Footer author={author} />
      </body>
    </html>
  );
}

export function Footer({ author }) {
  return (
    <footer className="h-20 mt-5 flex-1 rounded-xl bg-cyan-500 text-white flex items-center justify-center">
      (c) {author}, {new Date().getFullYear()}
    </footer>
  );
}
`,paraId:39,tocIndex:3},{value:"\u8FD9\u91CC\u6211\u4EEC\u5C06\u9875\u811A\u62BD\u79BB\u6210 Footer \u7EC4\u4EF6\uFF0C\u7136\u540E\u5728 BlogPostPage \u7EC4\u4EF6\u4E2D\u5F15\u5165\u4F7F\u7528\u3002",paraId:40,tocIndex:3},{value:"\u4FEE\u6539 ",paraId:41,tocIndex:3},{value:"generator.tsx",paraId:41,tocIndex:3},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:41,tocIndex:3},{value:`import { readFile } from 'fs/promises';
import React from 'react';
import { renderJSXToHTML } from './utils';
import { BlogPostPage } from './components';

export async function htmlGenerator() {
  const author = 'YaYu';
  const postContent = await readFile('./posts/hello.txt', 'utf8');
  return renderJSXToHTML(
    <BlogPostPage postContent={postContent} author={author} />,
  );
}
`,paraId:42,tocIndex:3},{value:"\u6B64\u65F6\u9875\u9762\u4F1A\u7A7A\u767D\uFF0C\u67E5\u770B\u5176 HTML \u5982\u4E0B\uFF1A",paraId:43,tocIndex:3},{value:"\u8FD9\u662F\u56E0\u4E3A\u6211\u4EEC\u7684 renderJSXToHTML \u51FD\u6570\u76EE\u524D\u8FD8\u53EA\u80FD\u8BC6\u522B\u666E\u901A\u7684 HTML \u6807\u7B7E\uFF0C\u5BF9\u4E8E\u50CF ",paraId:44,tocIndex:3},{value:"<BlogPostPage>",paraId:44,tocIndex:3},{value:" \u8FD9\u6837\u7684\u7EC4\u4EF6\u7C7B\u578B\u5E76\u4E0D\u80FD\u5904\u7406\u3002",paraId:44,tocIndex:3},{value:"\u6211\u4EEC\u5728\u5199\u7EC4\u4EF6\u7684\u65F6\u5019\uFF0C\u5199\u7684\u662F\u4E00\u4E2A\u51FD\u6570\uFF0C\u51FD\u6570\u6267\u884C\u540E\u624D\u8FD4\u56DE\u5177\u4F53\u7684 JSX \u5BF9\u8C61\u3002\u6240\u4EE5\u6211\u4EEC\u5728 render \u7684\u65F6\u5019\uFF0C\u9700\u8981\u5224\u65AD\u8282\u70B9\u662F\u5426\u662F\u51FD\u6570\uFF0C\u5982\u679C\u662F\u51FD\u6570\uFF0C\u5C31\u6267\u884C\u51FD\u6570\uFF0C\u6E32\u67D3\u51FD\u6570\u8FD4\u56DE\u7684 JSX \u5BF9\u8C61\u3002",paraId:45,tocIndex:3},{value:"\u4FEE\u6539 ",paraId:46,tocIndex:3},{value:"utils.js",paraId:46,tocIndex:3},{value:"\u4E2D\u7684 renderJSXToHTML \u51FD\u6570\uFF0C\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:46,tocIndex:3},{value:`import escapeHtml from 'escape-html';

export function renderJSXToHTML(jsx) {
  if (typeof jsx === 'string' || typeof jsx === 'number') {
    return escapeHtml(jsx);
  } else if (jsx == null || typeof jsx === 'boolean') {
    return '';
  } else if (Array.isArray(jsx)) {
    return jsx.map((child) => renderJSXToHTML(child)).join('');
  } else if (typeof jsx === 'object') {
    if (jsx.$$typeof === Symbol.for('react.element')) {
      // \u666E\u901A HTML \u6807\u7B7E
      if (typeof jsx.type === 'string') {
        let html = '<' + jsx.type;
        for (const propName in jsx.props) {
          if (jsx.props.hasOwnProperty(propName) && propName !== 'children') {
            html += ' ';
            html += propName;
            html += '=';
            html += \`"\${escapeHtml(jsx.props[propName])}"\`;
          }
        }
        html += '>';
        html += renderJSXToHTML(jsx.props.children);
        html += '</' + jsx.type + '>';
        html = html.replace(/className/g, 'class');
        return html;
      }
      // \u7EC4\u4EF6\u7C7B\u578B\u5982 <BlogPostPage>
      else if (typeof jsx.type === 'function') {
        const Component = jsx.type;
        const props = jsx.props;
        const returnedJsx = Component(props);
        return renderJSXToHTML(returnedJsx);
      } else throw new Error('Not implemented.');
    } else throw new Error('Cannot render an object.');
  } else throw new Error('Not implemented.');
}
`,paraId:47,tocIndex:3},{value:"\u8FD0\u884C ",paraId:48,tocIndex:3},{value:"npm start",paraId:48,tocIndex:3},{value:"\uFF0C\u6B64\u65F6\u6548\u679C\u4E0D\u53D8\uFF1A",paraId:48,tocIndex:3},{value:"JSX \u548C\u7EC4\u4EF6\u4E0D\u5C31\u662F React \u7684\u57FA\u7840\u5417\uFF1F\u4ECE\u67D0\u79CD\u89D2\u5EA6\u6765\u8BB2\uFF0C\u6211\u4EEC\u5DF2\u7ECF\u624B\u5199\u4E86\u4E00\u4E2A React \u96CF\u5F62\u3002",paraId:49,tocIndex:3},{value:"\u529F\u80FD\u5B9E\u73B0\uFF1AReact RSC \u5B9E\u73B0",paraId:50,tocIndex:3},{value:"\u6E90\u7801\u5730\u5740\uFF1A",paraId:50,tocIndex:3},{value:"https://github.com/mqyqingfeng/next-app-demo/tree/react-rsc-3",paraId:50,tocIndex:3},{value:"\u4E0B\u8F7D\u4EE3\u7801\uFF1A",paraId:50,tocIndex:3},{value:"git clone -b react-rsc-3 git@github.com:mqyqingfeng/next-app-demo.git",paraId:50,tocIndex:3},{value:"\u73B0\u5728\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u4E2A\u535A\u5BA2\u5185\u5BB9\u9875\u9762\uFF0C\u4F46\u6211\u60F3\u5B9E\u73B0\u7684\u6548\u679C\u662F\uFF0C\u5F53\u8BBF\u95EE ",paraId:51,tocIndex:4},{value:"/",paraId:51,tocIndex:4},{value:" \u7684\u65F6\u5019\uFF0C\u5C55\u793A\u535A\u5BA2\u6587\u7AE0\u5217\u8868\uFF0C\u8BBF\u95EE ",paraId:51,tocIndex:4},{value:"/hello",paraId:51,tocIndex:4},{value:" \u7684\u65F6\u5019\uFF0C\u624D\u5C55\u793A hello.txt \u8FD9\u7BC7\u6587\u7AE0\u7684\u5177\u4F53\u5185\u5BB9\u3002",paraId:51,tocIndex:4},{value:"\u6211\u4EEC\u518D\u6DFB\u52A0\u4E00\u7BC7\u6587\u7AE0\uFF0C\u65B0\u5EFA ",paraId:52,tocIndex:4},{value:"/posts/earth.txt",paraId:52,tocIndex:4},{value:"\uFF0C\u5185\u5BB9\u968F\u610F\uFF0C\u6BD4\u5982\uFF1A",paraId:52,tocIndex:4},{value:`<h1>Hello Earth!</h1>
`,paraId:53,tocIndex:4},{value:"\u4FEE\u6539 ",paraId:54,tocIndex:4},{value:"components.tsx",paraId:54,tocIndex:4},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:54,tocIndex:4},{value:`import React from 'react';

export function Layout({ children }) {
  const author = 'YaYu';
  return (
    <html>
      <head>
        <title>My blog</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
      </head>
      <body className="p-5">
        <nav className="flex items-center justify-center gap-10 text-blue-600">
          <a href="/">Home</a>
        </nav>
        <main>{children}</main>
        <Footer author={author} />
      </body>
    </html>
  );
}

export function IndexPage({ slugs, contents }) {
  return (
    <section>
      <h1>Blog List:</h1>
      <div>
        {slugs.map((slug, index) => (
          <section key={slug} className="mt-4">
            <a className="text-blue-600" href={'/' + slug}>
              {slug}
            </a>
            <article className="h-40 mt-5 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center">
              {contents[index]}
            </article>
          </section>
        ))}
      </div>
    </section>
  );
}

export function PostPage({ slug, content }) {
  return (
    <section>
      <a className="text-blue-600" href={'/' + slug}>
        {slug}
      </a>
      <article className="h-40 mt-5 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center">
        {content}
      </article>
    </section>
  );
}

export function Footer({ author }) {
  return (
    <footer className="h-20 mt-5 flex-1 rounded-xl bg-cyan-500 text-white flex items-center justify-center">
      (c) {author}, {new Date().getFullYear()}
    </footer>
  );
}
`,paraId:55,tocIndex:4},{value:"\u8FD9\u91CC\u6211\u4EEC\u65B0\u5EFA\u4E86 4 \u4E2A\u7EC4\u4EF6\uFF0C\u5176\u4E2D Layout \u8D1F\u8D23\u57FA\u7840\u7684 HTML \u6837\u5F0F\uFF0C\u5305\u542B\u9876\u90E8\u7684\u5BFC\u822A\u680F\u548C\u9875\u811A\uFF0CFooter \u8D1F\u8D23\u9875\u811A\u3002IndexPage \u8D1F\u8D23\u9996\u9875\u7684\u6587\u7AE0\u6837\u5F0F\uFF0CPostPage \u8D1F\u8D23\u5177\u4F53\u6587\u7AE0\u9875\u9762\u7684\u6837\u5F0F\u3002",paraId:56,tocIndex:4},{value:"\u5F53\u8BBF\u95EE ",paraId:57,tocIndex:4},{value:"/",paraId:57,tocIndex:4},{value:" \u7684\u65F6\u5019\uFF0C\u5E94\u8BE5\u5BFC\u822A\u81F3 ",paraId:57,tocIndex:4},{value:"IndexPage",paraId:57,tocIndex:4},{value:"\uFF0C\u5F53\u8BBF\u95EE ",paraId:57,tocIndex:4},{value:"/xxx",paraId:57,tocIndex:4},{value:" \u7684\u65F6\u5019\uFF0C\u5E94\u8BE5\u5BFC\u822A\u81F3 ",paraId:57,tocIndex:4},{value:"PostPage",paraId:57,tocIndex:4},{value:"\uFF0C\u8FD9\u4E2A\u529F\u80FD\u5C31\u53EB\u505A\u8DEF\u7531\uFF08Router\uFF09\uFF0C\u4E0D\u8FC7\u73B0\u5728\u6211\u4EEC\u5148\u7528\u4E00\u4E2A matchRouter \u51FD\u6570\u5B9E\u73B0\u3002",paraId:57,tocIndex:4},{value:"\u4FEE\u6539 ",paraId:58,tocIndex:4},{value:"index.ts",paraId:58,tocIndex:4},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:58,tocIndex:4},{value:`import express from 'express';
import { htmlGenerator } from './generator';
const app = express();

app.get('/:route(*)', async (req, res) => {
  const url = new URL(req.url, \`http://\${req.headers.host}\`);
  const html = await htmlGenerator(url);
  res.setHeader('Content-Type', 'text/html');
  res.end(html);
});

app.listen(3000, (err) => {
  if (err) return console.error(err);
  return console.log(\`Server is listening on 3000\`);
});
`,paraId:59,tocIndex:4},{value:"\u6211\u4EEC\u83B7\u53D6\u4E86\u5F53\u524D\u7684\u9875\u9762\u5730\u5740\uFF0C\u5E76\u5C06\u5176\u4F20\u5165 htmlGenerator \u51FD\u6570\u3002",paraId:60,tocIndex:4},{value:"\u4FEE\u6539 ",paraId:61,tocIndex:4},{value:"generator.tsx",paraId:61,tocIndex:4},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:61,tocIndex:4},{value:`import { readFile, readdir } from 'fs/promises';
import React from 'react';
import { renderJSXToHTML } from './utils';
import { Layout, IndexPage, PostPage } from './components';

export async function htmlGenerator(url) {
  const content = await readFile('./posts/hello.txt', 'utf8');
  const page = await matchRoute(url);
  return renderJSXToHTML(<Layout>{page}</Layout>);
}

async function matchRoute(url) {
  if (url.pathname === '/') {
    const files = await readdir('./posts');
    const slugs = files.map((file) => file.slice(0, file.lastIndexOf('.')));
    const contents = await Promise.all(
      slugs.map((slug) => readFile('./posts/' + slug + '.txt', 'utf8')),
    );
    return <IndexPage slugs={slugs} contents={contents} />;
  } else {
    const slug = url.pathname.slice(1);
    const content = await readFile('./posts/' + slug + '.txt', 'utf8');
    return <PostPage slug={slug} content={content} />;
  }
}
`,paraId:62,tocIndex:4},{value:"\u6211\u4EEC\u5199\u4E86\u4E00\u4E2A matchRoute \u51FD\u6570\uFF0C\u6839\u636E URL \u8FD4\u56DE\u4E0D\u540C\u7684\u7EC4\u4EF6\uFF08IndexPage \u6216 PostPage\uFF09\uFF0C\u7136\u540E\u5C06\u7EC4\u4EF6\u4F5C\u4E3A children \u4F20\u5165 Layout \u7EC4\u4EF6\u4E2D\uFF0C\u5F97\u5230\u6700\u7EC8\u7684 JSX \u5BF9\u8C61\u3002",paraId:63,tocIndex:4},{value:"\u6B64\u65F6\u4EA4\u4E92\u6548\u679C\u5982\u4E0B\uFF1A",paraId:64,tocIndex:4},{value:"\u529F\u80FD\u5B9E\u73B0\uFF1AReact RSC \u5B9E\u73B0",paraId:65,tocIndex:4},{value:"\u6E90\u7801\u5730\u5740\uFF1A",paraId:65,tocIndex:4},{value:"https://github.com/mqyqingfeng/next-app-demo/tree/react-rsc-4",paraId:65,tocIndex:4},{value:"\u4E0B\u8F7D\u4EE3\u7801\uFF1A",paraId:65,tocIndex:4},{value:"git clone -b react-rsc-4 git@github.com:mqyqingfeng/next-app-demo.git",paraId:65,tocIndex:4},{value:"\u5176\u5B9E\u76EE\u524D\u7684\u7EC4\u4EF6\u62BD\u8C61\u8FD8\u662F\u6709\u70B9\u95EE\u9898\u7684\uFF0CIndexPage \u548C PostPage \u7684\u6587\u7AE0\u6837\u5F0F\uFF08\u56FE\u4E2D\u7D2B\u8272\u90E8\u5206\uFF09\u5176\u5B9E\u662F\u91CD\u590D\u7684\uFF0C\u6211\u4EEC\u5E94\u8BE5\u62BD\u79BB\u4E00\u4E2A Post \u7EC4\u4EF6\uFF0C\u7136\u540E IndexPage \u548C PostPage \u5F15\u7528 Post \u7EC4\u4EF6\u3002",paraId:66,tocIndex:5},{value:"\u4E0D\u4EC5\u5982\u6B64\uFF0C\u73B0\u5728\u6211\u4EEC\u5728 matchRoute \u8FD9\u4E2A\u51FD\u6570\u4E2D\u5B9E\u73B0\u4E86\u8DEF\u7531\u5339\u914D\u548C\u83B7\u53D6\u6570\u636E\uFF08readdir\u3001readFile\uFF09\uFF0C\u4F46\u5176\u5B9E\u6CA1\u6709\u5FC5\u8981\uFF0C\u56E0\u4E3A\u53CD\u6B63\u90FD\u662F\u5728\u670D\u52A1\u7AEF\u8FD0\u884C\uFF0C\u83B7\u53D6\u6570\u636E\u5B8C\u5168\u53EF\u4EE5\u653E\u5728\u5177\u4F53\u7684 Post \u7EC4\u4EF6\u4E2D\u8FD0\u884C\uFF0C\u8FD9\u6837\u6211\u4EEC\u5C31\u53EF\u4EE5\u5C06\u83B7\u53D6\u6570\u636E\u7684\u4EE3\u7801\u4ECE matchRoute \u4E2D\u5206\u79BB\u51FA\u6765\uFF0C\u8BA9 matchRoute \u5982\u5B83\u7684\u51FD\u6570\u540D\u4E00\u6837\uFF0C\u4E13\u6CE8\u4E8E\u8DEF\u7531\u5339\u914D\uFF0C\u800C\u975E\u63BA\u6742\u6570\u636E\u83B7\u53D6\u7684\u4EE3\u7801\u3002",paraId:67,tocIndex:5},{value:"\u76F4\u63A5\u8BF4\u4F3C\u4E4E\u6709\u70B9\u62BD\u8C61\uFF0C\u8BA9\u6211\u4EEC\u5199\u4EE3\u7801\u5427\u3002",paraId:68,tocIndex:5},{value:"\u4FEE\u6539 ",paraId:69,tocIndex:5},{value:"components.tsx",paraId:69,tocIndex:5},{value:"\uFF0C\u5B8C\u6574\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:69,tocIndex:5},{value:`import React from 'react';
import { readFile, readdir } from 'fs/promises';

export function Layout({ children }) {
  const author = 'YaYu';
  return (
    <html>
      <head>
        <title>My blog</title>
        <script src="https://cdn.tailwindcss.com"><\/script>
      </head>
      <body className="p-5">
        <nav className="flex items-center justify-center gap-10 text-blue-600">
          <a href="/">Home</a>
        </nav>
        <main>{children}</main>
        <Footer author={author} />
      </body>
    </html>
  );
}

export async function IndexPage() {
  const files = await readdir('./posts');
  const slugs = files.map((file) => file.slice(0, file.lastIndexOf('.')));

  return (
    <section>
      <h1>Blog List:</h1>
      <div>
        {slugs.map((slug, index) => (
          <Post key={index} slug={slug} />
        ))}
      </div>
    </section>
  );
}

export function PostPage({ slug }) {
  return <Post slug={slug} />;
}

async function Post({ slug }) {
  let content = await readFile('./posts/' + slug + '.txt', 'utf8');
  return (
    <section>
      <a className="text-blue-600" href={'/' + slug}>
        {slug}
      </a>
      <article className="h-40 mt-5 flex-1 rounded-xl bg-indigo-500 text-white flex items-center justify-center">
        {content}
      </article>
    </section>
  );
}

export function Footer({ author }) {
  return (
    <footer className="h-20 mt-5 flex-1 rounded-xl bg-cyan-500 text-white flex items-center justify-center">
      (c) {author}, {new Date().getFullYear()}
    </footer>
  );
}
`,paraId:70,tocIndex:5},{value:"\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C\u6211\u4EEC\u62BD\u79BB\u4E86\u4E00\u4E2A Post \u7EC4\u4EF6\uFF0C\u5E76\u5C06\u6570\u636E\u8BFB\u53D6\u653E\u5728\u4E86 IndexPage \u548C Post \u7EC4\u4EF6\u4E2D\u5B9E\u73B0\u3002\u56E0\u6B64\u6211\u4EEC\u7684 matchRouter \u51FD\u6570\u5F97\u4EE5\u7B80\u5316\uFF0C\u6211\u4EEC\u5C06\u51FD\u6570\u66FF\u6362\u4E3A Router \u7EC4\u4EF6\uFF0C\u4FEE\u6539 ",paraId:71,tocIndex:5},{value:"generator.tsx",paraId:71,tocIndex:5},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:71,tocIndex:5},{value:`import { readFile, readdir } from 'fs/promises';
import React from 'react';
import { renderJSXToHTML } from './utils';
import { Layout, IndexPage, PostPage } from './components';

export async function htmlGenerator(url) {
  return renderJSXToHTML(<Router url={url} />);
}

function Router({ url }) {
  let page;
  if (url.pathname === '/') {
    page = <IndexPage />;
  } else {
    const slug = url.pathname.slice(1);
    page = <PostPage slug={slug} />;
  }
  return <Layout>{page}</Layout>;
}
`,paraId:72,tocIndex:5},{value:"\u6B64\u65F6\u9875\u9762\u6E32\u67D3\u5931\u8D25\uFF0C\u662F\u56E0\u4E3A\u6211\u4EEC\u7684\u7EC4\u4EF6\u51FD\u6570\u4F7F\u7528\u4E86 async\uFF0C\u6240\u4EE5\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u4E5F\u8981\u5BF9\u5E94\u8FDB\u884C\u5904\u7406\uFF0C\u4FEE\u6539 ",paraId:73,tocIndex:5},{value:"utils.ts",paraId:73,tocIndex:5},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:73,tocIndex:5},{value:`import escapeHtml from 'escape-html';

export async function renderJSXToHTML(jsx) {
  if (typeof jsx === 'string' || typeof jsx === 'number') {
    return escapeHtml(jsx);
  } else if (jsx == null || typeof jsx === 'boolean') {
    return '';
  } else if (Array.isArray(jsx)) {
    // \u8FD9\u91CC\u6DFB\u52A0\u4E86 await \u548C Promise.all
    const childHtmls = await Promise.all(
      jsx.map((child) => renderJSXToHTML(child)),
    );
    return childHtmls.join('');
  } else if (typeof jsx === 'object') {
    if (jsx.$$typeof === Symbol.for('react.element')) {
      if (typeof jsx.type === 'string') {
        let html = '<' + jsx.type;
        for (const propName in jsx.props) {
          if (jsx.props.hasOwnProperty(propName) && propName !== 'children') {
            html += ' ';
            html += propName;
            html += '=';
            html += \`"\${escapeHtml(jsx.props[propName])}"\`;
          }
        }
        html += '>';
        // \u8FD9\u91CC\u6DFB\u52A0\u4E86 await
        html += await renderJSXToHTML(jsx.props.children);
        html += '</' + jsx.type + '>';
        html = html.replace(/className/g, 'class');
        return html;
      } else if (typeof jsx.type === 'function') {
        const Component = jsx.type;
        const props = jsx.props;
        // \u8FD9\u91CC\u6DFB\u52A0\u4E86 await
        const returnedJsx = await Component(props);
        return renderJSXToHTML(returnedJsx);
      } else throw new Error('Not implemented.');
    } else throw new Error('Cannot render an object.');
  } else throw new Error('Not implemented.');
}
`,paraId:74,tocIndex:5},{value:"\u6B64\u65F6\u9875\u9762\u6B63\u5E38\u6E32\u67D3\uFF1A",paraId:75,tocIndex:5},{value:"\u529F\u80FD\u5B9E\u73B0\uFF1AReact RSC \u5B9E\u73B0",paraId:76,tocIndex:5},{value:"\u6E90\u7801\u5730\u5740\uFF1A",paraId:76,tocIndex:5},{value:"https://github.com/mqyqingfeng/next-app-demo/tree/react-rsc-5",paraId:76,tocIndex:5},{value:"\u4E0B\u8F7D\u4EE3\u7801\uFF1A",paraId:76,tocIndex:5},{value:"git clone -b react-rsc-5 git@github.com:mqyqingfeng/next-app-demo.git",paraId:76,tocIndex:5},{value:"\u56DE\u8FC7\u5934\u6765\u770B\u6211\u4EEC\u7684 Router \u7EC4\u4EF6\uFF1A",paraId:77,tocIndex:5},{value:`function Router({ url }) {
  let page;
  if (url.pathname === '/') {
    page = <IndexPage />;
  } else {
    const slug = url.pathname.slice(1);
    page = <PostPage slug={slug} />;
  }
  return <Layout>{page}</Layout>;
}
`,paraId:78,tocIndex:5},{value:"\u5B83\u63A5\u6536\u5F53\u524D URL\uFF0C\u7136\u540E\u8FD4\u56DE\u5BF9\u5E94\u7684\u7EC4\u4EF6\u3002\u7528\u8FC7 React-Router \u7684\u540C\u5B66\u53EF\u80FD\u77E5\u9053\uFF0CReact-Rouer \u6709\u4E00\u4E2A StaticRouter\uFF0C\u7528\u4E8E\u5904\u7406 node \u73AF\u5883\u4E0B\u7684\u8DEF\u7531\uFF0C\u57FA\u672C\u7528\u6CD5\u5982\u4E0B\uFF1A",paraId:79,tocIndex:5},{value:`import * as React from 'react';
import * as ReactDOMServer from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import http from 'http';

function requestHandler(req, res) {
  let html = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      {/* The rest of your app goes here */}
    </StaticRouter>,
  );

  res.write(html);
  res.end();
}

http.createServer(requestHandler).listen(3000);
`,paraId:80,tocIndex:5},{value:"\u4F60\u53EF\u4EE5\u53D1\u73B0\u975E\u5E38\u76F8\u4F3C\uFF0C\u4E5F\u662F\u63A5\u6536\u5F53\u524D URL\uFF0C\u8FD4\u56DE\u5BF9\u5E94\u7684\u7EC4\u4EF6\u3002\u4ECE\u67D0\u79CD\u89D2\u5EA6\u6765\u8BF4\uFF0C\u6211\u4EEC\u5B9E\u73B0\u4E86\u4E00\u4E2A React-Router \u7684\u96CF\u5F62\u3002",paraId:81,tocIndex:5},{value:"\u672C\u7BC7\u6211\u4EEC\u4ECE\u6700\u539F\u59CB\u7684\u9875\u9762\u5F00\u53D1\u65B9\u5F0F\u5F00\u59CB\uFF0C\u8BB2\u8FF0\u4E86 React \u548C React-Router \u7684\u8D77\u6E90\u80CC\u666F\uFF0C\u624B\u5199\u4E86 React \u548C React-Router \u6700\u57FA\u7840\u7684\u5B9E\u73B0\u65B9\u5F0F\u3002\u56E0\u4E3A\u8FD9\u4E2A\u4F8B\u5B50\u7684\u6240\u6709\u4EE3\u7801\u90FD\u8FD0\u884C\u5728\u670D\u52A1\u7AEF\uFF0C\u6240\u4EE5\u8FD9\u5176\u5B9E\u4E5F\u662F React SSR \u7684\u57FA\u7840\u5B9E\u73B0\uFF0C\u751A\u81F3\u6BD4 ",paraId:82,tocIndex:6},{value:"\u300A\u6E90\u7801\u7BC7 | \u624B\u5199 React SSR\u300B",paraId:82,tocIndex:6},{value:" \u5B9E\u73B0\u7684\u8FD8\u8981\u57FA\u7840\uFF0C\u5C31\u6BD4\u5982\u6211\u4EEC\u624B\u5199\u7684 renderJSXToHTML \u5BF9\u5E94\u7684\u5176\u5B9E\u5C31\u662F root.render \u51FD\u6570\u3002",paraId:82,tocIndex:6},{value:"\u4E0D\u8FC7\u81F3\u6B64\uFF0C\u5176\u5B9E\u8FD8\u6CA1\u6709\u6D89\u53CA\u5230\u4EFB\u4F55 RSC \u76F8\u5173\u7684\u5185\u5BB9\uFF0C\u56E0\u4E3A\u6211\u4EEC\u7684\u8FDB\u5EA6\u76F8\u5F53\u4E8E\u5728\u8FFD\u6EAF React \u7684\u53D1\u5C55\u5386\u53F2\uFF0C\u76EE\u524D\u624D\u521A\u53D1\u5C55\u5230 React SSR\uFF0C\u4E0B\u4E2A\u9636\u6BB5\u624D\u5F00\u59CB\u8FDB\u5165 React Server Components \u5462\uFF0C\u5FEB\u5F00\u59CB\u8FDB\u5165\u4E0B\u4E00\u7BC7\u5427\uFF01",paraId:83,tocIndex:6}]}}]);
