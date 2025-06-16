"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[463],{10463:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u662F Next.js \u4E2D\u975E\u5E38\u91CD\u8981\u7684\u6982\u5FF5\u3002\u5982\u679C\u6CA1\u6709\u7EC6\u81F4\u7684\u4E86\u89E3\u8FC7\uFF0C\u4F60\u53EF\u80FD\u4F1A\u7B80\u5355\u7684\u4EE5\u4E3A\u6240\u8C13\u670D\u52A1\u7AEF\u7EC4\u4EF6\u5C31\u662F SSR\uFF0C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5C31\u662F CSR\uFF0C\u670D\u52A1\u7AEF\u7EC4\u4EF6\u5728\u670D\u52A1\u7AEF\u8FDB\u884C\u6E32\u67D3\uFF0C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5728\u5BA2\u6237\u7AEF\u8FDB\u884C\u6E32\u67D3\u7B49\u7B49\uFF0C\u5B9E\u9645\u4E0A\u5E76\u975E\u5982\u6B64\u3002\u672C\u7BC7\u5C31\u8BA9\u6211\u4EEC\u6DF1\u5165\u5B66\u4E60\u548C\u63A2\u7A76 Next.js \u7684\u53CC\u7EC4\u4EF6\u6A21\u578B\u5427\uFF01",paraId:0,tocIndex:0},{value:"\u5728 Next.js \u4E2D\uFF0C\u7EC4\u4EF6\u9ED8\u8BA4\u5C31\u662F\u670D\u52A1\u7AEF\u7EC4\u4EF6\u3002",paraId:1,tocIndex:2},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u65B0\u5EFA ",paraId:2,tocIndex:2},{value:"app/todo/page.js",paraId:2,tocIndex:2},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:2,tocIndex:2},{value:`export default async function Page() {
  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = (await res.json()).slice(0, 10);
  console.log(data);
  return (
    <ul>
      {data.map(({ title, id }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}
`,paraId:3,tocIndex:2},{value:"\u8BF7\u6C42\u4F1A\u5728\u670D\u52A1\u7AEF\u6267\u884C\uFF0C\u5E76\u5C06\u6E32\u67D3\u540E\u7684 HTML \u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\uFF1A",paraId:4,tocIndex:2},{value:"\u56E0\u4E3A\u5728\u670D\u52A1\u7AEF\u6267\u884C\uFF0C",paraId:5,tocIndex:2},{value:"console",paraId:5,tocIndex:2},{value:" \u6253\u5370\u7684\u7ED3\u679C\u4E5F\u53EA\u53EF\u80FD\u4F1A\u51FA\u73B0\u5728\u547D\u4EE4\u884C\u4E2D\uFF0C\u800C\u975E\u5BA2\u6237\u7AEF\u6D4F\u89C8\u5668\u4E2D\u3002",paraId:5,tocIndex:2},{value:"\u4F7F\u7528\u670D\u52A1\u7AEF\u6E32\u67D3\u6709\u5F88\u591A\u597D\u5904\uFF1A",paraId:6,tocIndex:3},{value:"\u6570\u636E\u83B7\u53D6\uFF1A\u901A\u5E38\u670D\u52A1\u7AEF\u73AF\u5883\uFF08\u7F51\u7EDC\u3001\u6027\u80FD\u7B49\uFF09\u66F4\u597D\uFF0C\u79BB\u6570\u636E\u6E90\u66F4\u8FD1\uFF0C\u5728\u670D\u52A1\u7AEF\u83B7\u53D6\u6570\u636E\u4F1A\u66F4\u5FEB\u3002\u901A\u8FC7\u51CF\u5C11\u6570\u636E\u52A0\u8F7D\u65F6\u95F4\u4EE5\u53CA\u5BA2\u6237\u7AEF\u53D1\u51FA\u7684\u8BF7\u6C42\u6570\u91CF\u6765\u63D0\u9AD8\u6027\u80FD",paraId:7,tocIndex:3},{value:"\u5B89\u5168\uFF1A\u5728\u670D\u52A1\u7AEF\u4FDD\u7559\u654F\u611F\u6570\u636E\u548C\u903B\u8F91\uFF0C\u4E0D\u7528\u62C5\u5FC3\u66B4\u9732\u7ED9\u5BA2\u6237\u7AEF",paraId:7,tocIndex:3},{value:"\u7F13\u5B58\uFF1A\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u7ED3\u679C\u53EF\u4EE5\u5728\u540E\u7EED\u7684\u8BF7\u6C42\u4E2D\u590D\u7528\uFF0C\u63D0\u9AD8\u6027\u80FD",paraId:7,tocIndex:3},{value:"bundle \u5927\u5C0F\uFF1A\u670D\u52A1\u7AEF\u7EC4\u4EF6\u7684\u4EE3\u7801\u4E0D\u4F1A\u6253\u5305\u5230 bundle \u4E2D\uFF0C\u51CF\u5C11\u4E86 bundle \u5305\u7684\u5927\u5C0F",paraId:7,tocIndex:3},{value:"\u521D\u59CB\u9875\u9762\u52A0\u8F7D\u548C FCP\uFF1A\u670D\u52A1\u7AEF\u6E32\u67D3\u751F\u6210 HTML\uFF0C\u5FEB\u901F\u5C55\u793A UI",paraId:7,tocIndex:3},{value:"Streaming\uFF1A\u670D\u52A1\u7AEF\u7EC4\u4EF6\u53EF\u4EE5\u5C06\u6E32\u67D3\u5DE5\u4F5C\u62C6\u5206\u4E3A chunks\uFF0C\u5E76\u5728\u51C6\u5907\u5C31\u7EEA\u65F6\u5C06\u5B83\u4EEC\u6D41\u5F0F\u4F20\u8F93\u5230\u5BA2\u6237\u7AEF\u3002\u7528\u6237\u53EF\u4EE5\u66F4\u65E9\u770B\u5230\u9875\u9762\u7684\u90E8\u5206\u5185\u5BB9\uFF0C\u800C\u4E0D\u5FC5\u7B49\u5F85\u6574\u4E2A\u9875\u9762\u6E32\u67D3\u5B8C\u6BD5",paraId:7,tocIndex:3},{value:"\u56E0\u4E3A\u670D\u52A1\u7AEF\u7EC4\u4EF6\u7684\u8BF8\u591A\u597D\u5904\uFF0C",paraId:8,tocIndex:3},{value:"\u5728\u5B9E\u9645\u9879\u76EE\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u80FD\u4F7F\u7528\u670D\u52A1\u7AEF\u7EC4\u4EF6\u5C31\u5C3D\u53EF\u80FD\u4F7F\u7528\u670D\u52A1\u7AEF\u7EC4\u4EF6",paraId:8,tocIndex:3},{value:"\u3002",paraId:8,tocIndex:3},{value:"\u867D\u7136\u4F7F\u7528\u670D\u52A1\u7AEF\u7EC4\u4EF6\u6709\u5F88\u591A\u597D\u5904\uFF0C\u4F46\u4F7F\u7528\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E5F\u6709\u4E00\u4E9B\u9650\u5236\uFF0C\u6BD4\u5982\u4E0D\u80FD\u4F7F\u7528 useState \u7BA1\u7406\u72B6\u6001\uFF0C\u4E0D\u80FD\u4F7F\u7528\u6D4F\u89C8\u5668\u7684 API \u7B49\u7B49\u3002\u5982\u679C\u6211\u4EEC\u4F7F\u7528\u4E86 Next.js \u4F1A\u62A5\u9519\uFF0C\u6BD4\u5982\u6211\u4EEC\u5C06\u4EE3\u7801\u4FEE\u6539\u4E3A\uFF1A",paraId:9,tocIndex:4},{value:`import { useState } from 'react';

export default async function Page() {
  const [title, setTitle] = useState('');

  const res = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = (await res.json()).slice(0, 10);
  console.log(data);
  return (
    <ul>
      {data.map(({ title, id }) => {
        return <li key={id}>{title}</li>;
      })}
    </ul>
  );
}
`,paraId:10,tocIndex:4},{value:"\u6B64\u65F6\u6D4F\u89C8\u5668\u4F1A\u62A5\u9519\uFF1A",paraId:11,tocIndex:4},{value:"\u62A5\u9519\u63D0\u793A\u6211\u4EEC\u6B64\u65F6\u9700\u8981\u4F7F\u7528\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u3002\u90A3\u4E48\u53C8\u8BE5\u5982\u4F55\u4F7F\u7528\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5462\uFF1F",paraId:12,tocIndex:4},{value:"\u4F7F\u7528\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u4F60\u9700\u8981\u5728\u6587\u4EF6\u9876\u90E8\u6DFB\u52A0\u4E00\u4E2A ",paraId:13,tocIndex:6},{value:'"use client"',paraId:13,tocIndex:6},{value:" \u58F0\u660E\uFF0C\u4FEE\u6539 ",paraId:13,tocIndex:6},{value:"app/todo/page.js",paraId:13,tocIndex:6},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:13,tocIndex:6},{value:`'use client';

import { useEffect, useState } from 'react';

function getRandomInt(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}

export default function Page() {
  const [list, setList] = useState([]);

  const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const data = (await res.json()).slice(0, getRandomInt(1, 10));
    setList(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ul>
        {list.map(({ title, id }) => {
          return <li key={id}>{title}</li>;
        })}
      </ul>
      <button
        onClick={() => {
          location.reload();
        }}
      >
        \u6362\u4E00\u6279
      </button>
    </>
  );
}
`,paraId:14,tocIndex:6},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u4F7F\u7528\u4E86 useEffect\u3001useState \u7B49 React API\uFF0C\u4E5F\u7ED9\u6309\u94AE\u6DFB\u52A0\u4E86\u70B9\u51FB\u4E8B\u4EF6\u3001\u4F7F\u7528\u4E86\u6D4F\u89C8\u5668\u7684 API\u3002\u65E0\u8BBA\u4F7F\u7528\u54EA\u4E2A\u90FD\u9700\u8981\u5148\u58F0\u660E\u4E3A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u3002",paraId:15,tocIndex:6},{value:"\u6CE8\u610F\uFF1A",paraId:16,tocIndex:6},{value:'"use client"',paraId:16,tocIndex:6},{value:"\u7528\u4E8E\u58F0\u660E\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u6A21\u5757\u4E4B\u95F4\u7684\u8FB9\u754C\u3002\u5F53\u4F60\u5728\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A ",paraId:16,tocIndex:6},{value:'"use client"',paraId:16,tocIndex:6},{value:"\uFF0C\u5BFC\u5165\u7684\u5176\u4ED6\u6A21\u5757\u5305\u62EC\u5B50\u7EC4\u4EF6\uFF0C\u90FD\u4F1A\u88AB\u89C6\u4E3A\u5BA2\u6237\u7AEF bundle \u7684\u4E00\u90E8\u5206\u3002",paraId:16,tocIndex:6},{value:"\u4EA4\u4E92\u6027\uFF1A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528 state\u3001effects \u548C\u4E8B\u4EF6\u76D1\u542C\u5668\uFF0C\u610F\u5473\u7740\u7528\u6237\u53EF\u4EE5\u4E0E\u4E4B\u4EA4\u4E92",paraId:17,tocIndex:7},{value:"\u6D4F\u89C8\u5668 API\uFF1A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u53EF\u4EE5\u4F7F\u7528\u6D4F\u89C8\u5668 API \u5982\u5730\u7406\u4F4D\u7F6E\u3001localStorage \u7B49",paraId:17,tocIndex:7},{value:"\u5982\u679C\u4F60\u9700\u8981\u2026\u2026",paraId:18,tocIndex:9},{value:"\u670D\u52A1\u7AEF\u7EC4\u4EF6",paraId:18,tocIndex:9},{value:"\u5BA2\u6237\u7AEF\u7EC4\u4EF6",paraId:18,tocIndex:9},{value:"\u83B7\u53D6\u6570\u636E",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u8BBF\u95EE\u540E\u7AEF\u8D44\u6E90\uFF08\u76F4\u63A5\uFF09",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u5728\u670D\u52A1\u7AEF\u4E0A\u4FDD\u7559\u654F\u611F\u4FE1\u606F\uFF08\u8BBF\u95EE\u4EE4\u724C\u3001API \u5BC6\u94A5\u7B49\uFF09",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u5728\u670D\u52A1\u7AEF\u4F7F\u7528\u4F9D\u8D56\u5305\uFF0C\u4ECE\u800C\u51CF\u5C11\u5BA2\u6237\u7AEF JavaScript \u5927\u5C0F",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u6DFB\u52A0\u4EA4\u4E92\u548C\u4E8B\u4EF6\u4FA6\u542C\u5668\uFF08onClick(), onChange() \u7B49\uFF09",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u4F7F\u7528\u72B6\u6001\u548C\u751F\u547D\u5468\u671F\uFF08useState(), useReducer(), useEffect()\u7B49\uFF09",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u4F7F\u7528\u4EC5\u9650\u6D4F\u89C8\u5668\u7684 API",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u4F7F\u7528\u4F9D\u8D56\u4E8E\u72B6\u6001\u3001\u6548\u679C\u6216\u4EC5\u9650\u6D4F\u89C8\u5668\u7684 API \u7684\u81EA\u5B9A\u4E49 hook",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u4F7F\u7528 React \u7C7B\u7EC4\u4EF6",paraId:18,tocIndex:9},{value:"\u274C",paraId:18,tocIndex:9},{value:"\u2705",paraId:18,tocIndex:9},{value:"\u670D\u52A1\u7AEF\u7EC4\u4EF6\u53EA\u4F1A\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\uFF0C\u4F46\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4F1A\u5728\u670D\u52A1\u7AEF\u6E32\u67D3\u4E00\u6B21\uFF0C\u7136\u540E\u5728\u5BA2\u6237\u7AEF\u6E32\u67D3\u3002",paraId:19,tocIndex:10},{value:"\u8FD9\u662F\u4EC0\u4E48\u610F\u601D\u5462\uFF1F\u8BA9\u6211\u4EEC\u5199\u4E2A\u4F8B\u5B50\uFF0C\u65B0\u5EFA ",paraId:20,tocIndex:10},{value:"app/client/page.js",paraId:20,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:20,tocIndex:10},{value:`'use client';

import { useState } from 'react';

console.log('client');

export default function Page() {
  console.log('client Page');

  const [text, setText] = useState('init text');

  return (
    <button
      onClick={() => {
        setText('change text');
      }}
    >
      {text}
    </button>
  );
}
`,paraId:21,tocIndex:10},{value:"\u65B0\u5EFA ",paraId:22,tocIndex:10},{value:"app/server/page.js",paraId:22,tocIndex:10},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:22,tocIndex:10},{value:`console.log('server');

export default function Page() {
  console.log('server Page');

  return <button>button</button>;
}
`,paraId:23,tocIndex:10},{value:"\u73B0\u5728\u8FD0\u884C ",paraId:24,tocIndex:10},{value:"npm run build",paraId:24,tocIndex:10},{value:"\uFF0C\u4F1A\u6253\u5370\u54EA\u4E9B\u6570\u636E\u5462\uFF1F",paraId:24,tocIndex:10},{value:"\u7B54\u6848\u662F\u65E0\u8BBA\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u8FD8\u662F\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u90FD\u4F1A\u6253\u5370\uFF1A",paraId:25,tocIndex:10},{value:"\u800C\u4E14\u6839\u636E\u8F93\u51FA\u7684\u7ED3\u679C\uFF0C\u65E0\u8BBA\u662F ",paraId:26,tocIndex:10},{value:"/client",paraId:26,tocIndex:10},{value:"\u8FD8\u662F ",paraId:26,tocIndex:10},{value:"/server",paraId:26,tocIndex:10},{value:"\u8D70\u7684\u90FD\u662F\u9759\u6001\u6E32\u67D3\u3002",paraId:26,tocIndex:10},{value:"\u5F53\u8FD0\u884C ",paraId:27,tocIndex:10},{value:"npm run start",paraId:27,tocIndex:10},{value:"\u7684\u65F6\u5019\uFF0C\u53C8\u4F1A\u6253\u5370\u54EA\u4E9B\u6570\u636E\u5462\uFF1F",paraId:27,tocIndex:10},{value:"\u7B54\u6848\u662F\u547D\u4EE4\u884C\u4E2D\u5E76\u4E0D\u4F1A\u6709\u8F93\u51FA\uFF0C\u8BBF\u95EE ",paraId:28,tocIndex:10},{value:"/client",paraId:28,tocIndex:10},{value:"\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u4F1A\u6709\u6253\u5370\uFF1A",paraId:28,tocIndex:10},{value:"\u8BBF\u95EE ",paraId:29,tocIndex:10},{value:"/server",paraId:29,tocIndex:10},{value:"\u7684\u65F6\u5019\uFF0C\u6D4F\u89C8\u5668\u4E0D\u4F1A\u6709\u4EFB\u4F55\u6253\u5370\uFF1A",paraId:29,tocIndex:10},{value:"\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5370\uFF0C\u8FD9\u53EF\u4EE5\u7406\u89E3\uFF0C\u6BD5\u7ADF\u5B83\u662F\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u5F53\u7136\u8981\u5728\u5BA2\u6237\u7AEF\u8FD0\u884C\u3002\u53EF\u662F\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E3A\u4EC0\u4E48\u5728\u7F16\u8BD1\u7684\u65F6\u5019\u4F1A\u8FD0\u884C\u4E00\u6B21\u5462\uFF1F\u8BA9\u6211\u4EEC\u770B\u4E0B ",paraId:30,tocIndex:10},{value:"/client",paraId:30,tocIndex:10},{value:" \u7684\u8FD4\u56DE\uFF1A",paraId:30,tocIndex:10},{value:"\u4F60\u4F1A\u53D1\u73B0 ",paraId:31,tocIndex:10},{value:"init text",paraId:31,tocIndex:10},{value:"\u5176\u5B9E\u662F\u6765\u81EA\u4E8E useState \u4E2D\u7684\u503C\uFF0C\u4F46\u662F\u5374\u4F9D\u7136\u8F93\u51FA\u5728 HTML \u4E2D\u3002\u8FD9\u5C31\u662F\u7F16\u8BD1\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\u4F5C\u7528\uFF0C\u4E3A\u4E86\u7B2C\u4E00\u6B21\u52A0\u8F7D\u7684\u65F6\u5019\u80FD\u66F4\u5FEB\u7684\u5C55\u793A\u51FA\u5185\u5BB9\u3002",paraId:31,tocIndex:10},{value:"\u6240\u4EE5\u5176\u5B9E\u6240\u8C13\u670D\u52A1\u7AEF\u7EC4\u4EF6\u3001\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5E76\u4E0D\u76F4\u63A5\u5BF9\u5E94\u4E8E\u7269\u7406\u4E0A\u7684\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u3002\u670D\u52A1\u7AEF\u7EC4\u4EF6\u8FD0\u884C\u5728\u6784\u5EFA\u65F6\u548C\u670D\u52A1\u7AEF\uFF0C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u8FD0\u884C\u5728\u6784\u5EFA\u65F6\u3001\u670D\u52A1\u7AEF\uFF08\u751F\u6210\u521D\u59CB HTML\uFF09\u548C\u5BA2\u6237\u7AEF\uFF08\u7BA1\u7406 DOM\uFF09\u3002",paraId:32,tocIndex:10},{value:"\u5B9E\u9645\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u4E0D\u53EF\u80FD\u7EAF\u7528\u670D\u52A1\u7AEF\u7EC4\u4EF6\u6216\u8005\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u5F53\u4EA4\u66FF\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u6CE8\u610F\u4E00\u70B9\uFF0C\u90A3\u5C31\u662F\uFF1A",paraId:33,tocIndex:11},{value:"\u670D\u52A1\u7AEF\u7EC4\u4EF6\u53EF\u4EE5\u76F4\u63A5\u5BFC\u5165\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u4F46\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5E76\u4E0D\u80FD\u5BFC\u5165\u670D\u52A1\u7AEF\u7EC4\u4EF6",paraId:34,tocIndex:11},{value:`'use client';

// \u8FD9\u662F\u4E0D\u53EF\u4EE5\u7684
import ServerComponent from './Server-Component';

export default function ClientComponent({ children }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>

      <ServerComponent />
    </>
  );
}
`,paraId:35,tocIndex:11},{value:"\u4F46\u540C\u65F6\u6B63\u5982\u4ECB\u7ECD\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u65F6\u6240\u8BF4\uFF1A",paraId:36,tocIndex:11},{value:'"use client"\u7528\u4E8E\u58F0\u660E\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u6A21\u5757\u4E4B\u95F4\u7684\u8FB9\u754C\u3002\u5F53\u4F60\u5728\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A "use client"\uFF0C\u5BFC\u5165\u7684\u5176\u4ED6\u6A21\u5757\u5305\u62EC\u5B50\u7EC4\u4EF6\uFF0C\u90FD\u4F1A\u88AB\u89C6\u4E3A\u5BA2\u6237\u7AEF bundle \u7684\u4E00\u90E8\u5206\u3002',paraId:37,tocIndex:11},{value:"\u7EC4\u4EF6\u9ED8\u8BA4\u662F\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u4F46\u5F53\u7EC4\u4EF6\u5BFC\u5165\u5230\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u4F1A\u88AB\u8BA4\u4E3A\u662F\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u3002\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E0D\u80FD\u5BFC\u5165\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u5176\u5B9E\u662F\u5728\u544A\u8BC9\u4F60\uFF0C\u5982\u679C\u4F60\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u4E86\u8BF8\u5982 Node API \u7B49\uFF0C\u8BE5\u7EC4\u4EF6\u53EF\u5343\u4E07\u4E0D\u8981\u5BFC\u5165\u5230\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u3002",paraId:38,tocIndex:11},{value:"\u4F46\u4F60\u53EF\u4EE5\u5C06\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4EE5 props \u7684\u5F62\u5F0F\u4F20\u7ED9\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF1A",paraId:39,tocIndex:11},{value:`'use client';

import { useState } from 'react';

export default function ClientComponent({ children }) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>{count}</button>
      {children}
    </>
  );
}
`,paraId:40,tocIndex:11},{value:`import ClientComponent from './client-component';
import ServerComponent from './server-component';

export default function Page() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  );
}
`,paraId:41,tocIndex:11},{value:"\u4F7F\u7528\u8FD9\u79CD\u65B9\u5F0F\uFF0C",paraId:42,tocIndex:11},{value:"<ClientComponent>",paraId:42,tocIndex:11},{value:" \u548C ",paraId:42,tocIndex:11},{value:"<ServerComponent>",paraId:42,tocIndex:11},{value:" \u4EE3\u7801\u89E3\u8026\u4E14\u72EC\u7ACB\u6E32\u67D3\u3002",paraId:42,tocIndex:11},{value:"\u6CE8\uFF1A\u4F60\u53EF\u80FD\u4F1A\u60F3\u4E3A\u4EC0\u4E48\u8981\u8FD9\u4E48\u9EBB\u70E6\u7684\u975E\u8981\u4F7F\u7528 ServerComponent \u5462\uFF1F\u8FD9\u662F\u56E0\u4E3A ServerComponent \u6709\u5F88\u591A\u597D\u5904\u6BD4\u5982\u4EE3\u7801\u4E0D\u4F1A\u6253\u5305\u5230 bundle \u4E2D\u3002\u800C\u4E3A\u4EC0\u4E48\u4EE5 props \u7684\u5F62\u5F0F\u5C31\u53EF\u4EE5\u4F20\u9012\u5462\uFF1F\u5728 ",paraId:43,tocIndex:11},{value:"\u300A\u5B9E\u6218\u7BC7 | React Notes | \u7B14\u8BB0\u641C\u7D22\u300B",paraId:43,tocIndex:11},{value:"\u4E2D\uFF0C\u6211\u4EEC\u4F1A\u7ED3\u5408\u5B9E\u6218\u9879\u76EE\u66F4\u5177\u4F53\u7684\u8BB2\u89E3\u3002",paraId:43,tocIndex:11},{value:"\u5728\u670D\u52A1\u7AEF\uFF1A",paraId:44,tocIndex:12},{value:"Next.js \u4F7F\u7528 React API \u7F16\u6392\u6E32\u67D3\uFF0C\u6E32\u67D3\u5DE5\u4F5C\u4F1A\u6839\u636E\u8DEF\u7531\u548C Suspense \u62C6\u5206\u6210\u591A\u4E2A\u5757\uFF08chunks\uFF09\uFF0C\u6BCF\u4E2A\u5757\u5206\u4E24\u6B65\u8FDB\u884C\u6E32\u67D3\uFF1A",paraId:45,tocIndex:12},{value:"React \u5C06\u670D\u52A1\u7AEF\u7EC4\u4EF6\u6E32\u67D3\u6210\u4E00\u4E2A\u7279\u6B8A\u7684\u6570\u636E\u683C\u5F0F\u79F0\u4E3A ",paraId:46,tocIndex:12},{value:"React Server Component Payload (RSC Payload)",paraId:46,tocIndex:12},{value:"Next.js \u4F7F\u7528 RSC Payload \u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4EE3\u7801\u5728\u670D\u52A1\u7AEF\u6E32\u67D3 HTML",paraId:46,tocIndex:12},{value:"RSC payload \u4E2D\u5305\u542B\u5982\u4E0B\u8FD9\u4E9B\u4FE1\u606F\uFF1A",paraId:47,tocIndex:12},{value:"\u670D\u52A1\u7AEF\u7EC4\u4EF6\u7684\u6E32\u67D3\u7ED3\u679C",paraId:48,tocIndex:12},{value:"\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5360\u4F4D\u7B26\u548C\u5F15\u7528\u6587\u4EF6",paraId:48,tocIndex:12},{value:"\u4ECE\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4F20\u7ED9\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\u6570\u636E",paraId:48,tocIndex:12},{value:"\u5728\u5BA2\u6237\u7AEF\uFF1A",paraId:49,tocIndex:12},{value:"\u52A0\u8F7D\u6E32\u67D3\u7684 HTML \u5FEB\u901F\u5C55\u793A\u4E00\u4E2A\u975E\u4EA4\u4E92\u754C\u9762\uFF08Non-interactive UI\uFF09",paraId:50,tocIndex:12},{value:"RSC Payload \u4F1A\u88AB\u7528\u4E8E\u534F\u8C03\uFF08reconcile\uFF09\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7EC4\u4EF6\u6811\uFF0C\u5E76\u66F4\u65B0 DOM",paraId:50,tocIndex:12},{value:"JavaScript \u4EE3\u7801\u88AB\u7528\u4E8E\u6C34\u5408\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u4F7F\u5E94\u7528\u7A0B\u5E8F\u5177\u6709\u4EA4\u4E92\u6027\uFF08Interactive UI\uFF09",paraId:50,tocIndex:12},{value:"\u6CE8\u610F\uFF1A\u4E0A\u56FE\u63CF\u8FF0\u7684\u662F\u9875\u9762\u521D\u59CB\u52A0\u8F7D\u7684\u8FC7\u7A0B\u3002\u5176\u4E2D SC \u8868\u793A Server Components \u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0CCC \u8868\u793A Client Components \u5BA2\u6237\u7AEF\u7EC4\u4EF6\u3002",paraId:51,tocIndex:12},{value:"\u6211\u4EEC\u5728\u4E0A\u8282",paraId:52,tocIndex:12},{value:"\u300A\u6E32\u67D3\u7BC7 | Suspense \u4E0E Streaming\u300B",paraId:52,tocIndex:12},{value:"\u8BB2\u5230 Suspense \u548C Streaming \u4E5F\u6709\u4E00\u4E9B\u95EE\u9898\u6CA1\u6709\u89E3\u51B3\uFF0C\u6BD4\u5982\u8BE5\u52A0\u8F7D\u7684 JavaScript \u4EE3\u7801\u6CA1\u6709\u5C11\u3001\u6240\u6709\u7EC4\u4EF6\u90FD\u5FC5\u987B\u6C34\u5408\uFF0C\u5373\u4F7F\u7EC4\u4EF6\u4E0D\u9700\u8981\u6C34\u5408\u3002",paraId:52,tocIndex:12},{value:"\u4F7F\u7528\u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u670D\u52A1\u7AEF\u7EC4\u4EF6\u7684\u4EE3\u7801\u4E0D\u4F1A\u6253\u5305\u5230\u5BA2\u6237\u7AEF bundle \u4E2D\u3002\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u53EA\u6709\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u9700\u8981\u8FDB\u884C\u6C34\u5408\uFF0C\u670D\u52A1\u7AEF\u7EC4\u4EF6\u65E0\u987B\u6C34\u5408\u3002",paraId:53,tocIndex:12},{value:"\u800C\u5728\u540E\u7EED\u5BFC\u822A\u7684\u65F6\u5019\uFF1A",paraId:54,tocIndex:12},{value:"\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5B8C\u5168\u5728\u5BA2\u6237\u7AEF\u8FDB\u884C\u6E32\u67D3",paraId:55,tocIndex:12},{value:"React \u4F7F\u7528 RSC Payload \u6765\u534F\u8C03\u5BA2\u6237\u7AEF\u548C\u670D\u52A1\u7AEF\u7EC4\u4EF6\u6811\uFF0C\u5E76\u66F4\u65B0 DOM",paraId:55,tocIndex:12},{value:"\u7EBF\u4E0A\u67E5\u770B\u4EE3\u7801\u548C\u6548\u679C\uFF1A",paraId:56,tocIndex:12},{value:"CodeSandbox Server Components And Client Components",paraId:56,tocIndex:12},{value:"\u5F53\u5728\u670D\u52A1\u7AEF\u83B7\u53D6\u6570\u636E\u7684\u65F6\u5019\uFF0C\u6709\u53EF\u80FD\u51FA\u73B0\u591A\u4E2A\u7EC4\u4EF6\u5171\u7528\u4E00\u4E2A\u6570\u636E\u7684\u60C5\u51B5\u3002",paraId:57,tocIndex:14},{value:"\u9762\u5BF9\u8FD9\u79CD\u60C5\u51B5\uFF0C\u4F60\u4E0D\u9700\u8981\u4F7F\u7528 React Context\uFF08\u5F53\u7136\u670D\u52A1\u7AEF\u4E5F\u7528\u4E0D\u4E86\uFF09\uFF0C\u4E5F\u4E0D\u9700\u8981\u901A\u8FC7 props \u4F20\u9012\u6570\u636E\uFF0C\u76F4\u63A5\u5728\u9700\u8981\u7684\u7EC4\u4EF6\u4E2D\u8BF7\u6C42\u6570\u636E\u5373\u53EF\u3002\u8FD9\u662F\u56E0\u4E3A React \u62D3\u5C55\u4E86 fetch \u7684\u529F\u80FD\uFF0C\u6DFB\u52A0\u4E86\u8BB0\u5FC6\u7F13\u5B58\u529F\u80FD\uFF0C\u76F8\u540C\u7684\u8BF7\u6C42\u548C\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u6570\u636E\u4F1A\u505A\u7F13\u5B58\u3002",paraId:58,tocIndex:14},{value:`async function getItem() {
  const res = await fetch('https://.../item/1');
  return res.json();
}

// \u51FD\u6570\u88AB\u8C03\u7528\u4E86\u4E24\u6B21\uFF0C\u4F46\u53EA\u6709\u7B2C\u4E00\u6B21\u624D\u6267\u884C
const item = await getItem(); // cache MISS

// \u7B2C\u4E8C\u6B21\u4F7F\u7528\u4E86\u7F13\u5B58
const item = await getItem(); // cache HIT
`,paraId:59,tocIndex:14},{value:"\u5F53\u7136\u8FD9\u4E2A\u7F13\u5B58\u4E5F\u662F\u6709\u4E00\u5B9A\u6761\u4EF6\u9650\u5236\u7684\uFF0C\u6BD4\u5982\u53EA\u80FD\u5728 GET \u8BF7\u6C42\u4E2D\uFF0C\u5177\u4F53\u7684\u9650\u5236\u548C\u539F\u7406\u6211\u4EEC\u4F1A\u5728\u7F13\u5B58\u7BC7\u4E2D\u5177\u4F53\u8BB2\u89E3\u3002",paraId:60,tocIndex:14},{value:"\u7531\u4E8E JavaScript \u6A21\u5757\u53EF\u4EE5\u5728\u670D\u52A1\u5668\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u6A21\u5757\u4E4B\u95F4\u5171\u4EAB\uFF0C\u6240\u4EE5\u5982\u679C\u4F60\u5E0C\u671B\u4E00\u4E2A\u6A21\u5757\u53EA\u7528\u4E8E\u670D\u52A1\u7AEF\uFF0C\u5C31\u6BD4\u5982\u8FD9\u6BB5\u4EE3\u7801\uFF1A",paraId:61,tocIndex:15},{value:`export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  });

  return res.json();
}
`,paraId:62,tocIndex:15},{value:"\u8FD9\u4E2A\u51FD\u6570\u4F7F\u7528\u4E86 API_KEY\uFF0C\u6240\u4EE5\u5B83\u5E94\u8BE5\u662F\u53EA\u7528\u5728\u670D\u52A1\u7AEF\u7684\u3002\u5982\u679C\u7528\u5728\u5BA2\u6237\u7AEF\uFF0C\u4E3A\u4E86\u9632\u6B62\u6CC4\u9732\uFF0CNext.js \u4F1A\u5C06\u79C1\u6709\u73AF\u5883\u53D8\u91CF\u66FF\u6362\u4E3A\u7A7A\u5B57\u7B26\u4E32\uFF0C\u6240\u4EE5\u8FD9\u6BB5\u4EE3\u7801\u53EF\u4EE5\u5728\u5BA2\u6237\u7AEF\u5BFC\u5165\u5E76\u6267\u884C\uFF0C\u4F46\u5E76\u4E0D\u4F1A\u5982\u671F\u8FD0\u884C\u3002",paraId:63,tocIndex:15},{value:"\u4E3A\u4E86\u9632\u6B62\u5BA2\u6237\u7AEF\u610F\u5916\u4F7F\u7528\u670D\u52A1\u5668\u4EE3\u7801\uFF0C\u6211\u4EEC\u53EF\u4EE5\u501F\u52A9 ",paraId:64,tocIndex:15},{value:"server-only",paraId:64,tocIndex:15},{value:"\u5305\uFF0C\u8FD9\u6837\u5728\u5BA2\u6237\u7AEF\u610F\u5916\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u4F1A\u629B\u51FA\u6784\u5EFA\u9519\u8BEF\u3002",paraId:64,tocIndex:15},{value:"\u4F7F\u7528 ",paraId:65,tocIndex:15},{value:"server-only",paraId:65,tocIndex:15},{value:"\uFF0C\u9996\u5148\u5B89\u88C5\u8BE5\u5305\uFF1A",paraId:65,tocIndex:15},{value:`npm install server-only
`,paraId:66,tocIndex:15},{value:"\u5176\u6B21\u5C06\u8BE5\u5305\u5BFC\u5165\u53EA\u7528\u5728\u670D\u52A1\u7AEF\u7684\u7EC4\u4EF6\u4EE3\u7801\u4E2D\uFF1A",paraId:67,tocIndex:15},{value:`import 'server-only';

export async function getData() {
  const res = await fetch('https://external-service.com/data', {
    headers: {
      authorization: process.env.API_KEY,
    },
  });

  return res.json();
}
`,paraId:68,tocIndex:15},{value:"\u73B0\u5728\uFF0C\u4EFB\u4F55\u5BFC\u5165 ",paraId:69,tocIndex:15},{value:"getData",paraId:69,tocIndex:15},{value:"\u7684\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u90FD\u4F1A\u5728\u6784\u5EFA\u7684\u65F6\u5019\u629B\u51FA\u9519\u8BEF\uFF0C\u4EE5\u4FDD\u8BC1\u8BE5\u6A21\u5757\u53EA\u80FD\u5728\u670D\u52A1\u7AEF\u4F7F\u7528\u3002",paraId:69,tocIndex:15},{value:"\u6BD5\u7ADF React Server Component \u662F\u4E00\u4E2A\u65B0\u7279\u6027\uFF0C React \u751F\u6001\u91CC\u7684\u5F88\u591A\u5305\u53EF\u80FD\u8FD8\u6CA1\u6709\u8DDF\u4E0A\uFF0C\u8FD9\u6837\u5C31\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4E00\u4E9B\u95EE\u9898\u3002",paraId:70,tocIndex:16},{value:"\u6BD4\u5982\u4F60\u4F7F\u7528\u4E86\u4E00\u4E2A\u5BFC\u51FA ",paraId:71,tocIndex:16},{value:"<Carousel />",paraId:71,tocIndex:16},{value:"\u7EC4\u4EF6\u7684 ",paraId:71,tocIndex:16},{value:"acme-carousel",paraId:71,tocIndex:16},{value:"\u5305\u3002\u8FD9\u4E2A\u7EC4\u4EF6\u4F7F\u7528\u4E86 useState\uFF0C\u4F46\u662F\u5B83\u5E76\u6CA1\u6709 ",paraId:71,tocIndex:16},{value:'"use client"',paraId:71,tocIndex:16},{value:" \u58F0\u660E\u3002",paraId:71,tocIndex:16},{value:"\u5F53\u4F60\u5728\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684\u65F6\u5019\uFF0C\u5B83\u80FD\u6B63\u5E38\u5DE5\u4F5C\uFF1A",paraId:72,tocIndex:16},{value:`'use client';

import { useState } from 'react';
import { Carousel } from 'acme-carousel';

export default function Gallery() {
  let [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>View pictures</button>

      {/* Works, since Carousel is used within a Client Component */}
      {isOpen && <Carousel />}
    </div>
  );
}
`,paraId:73,tocIndex:16},{value:"\u7136\u800C\u5982\u679C\u4F60\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528\uFF0C\u5B83\u4F1A\u62A5\u9519\uFF1A",paraId:74,tocIndex:16},{value:`import { Carousel } from 'acme-carousel';

export default function Page() {
  return (
    <div>
      <p>View pictures</p>

      {/* Error: \`useState\` can not be used within Server Components */}
      <Carousel />
    </div>
  );
}
`,paraId:75,tocIndex:16},{value:"\u8FD9\u662F\u56E0\u4E3A Next.js \u5E76\u4E0D\u77E5\u9053 ",paraId:76,tocIndex:16},{value:"<Carousel />",paraId:76,tocIndex:16},{value:"\u662F\u4E00\u4E2A\u53EA\u80FD\u7528\u5728\u5BA2\u6237\u7AEF\u7684\u7EC4\u4EF6\uFF0C\u6BD5\u7ADF\u5B83\u662F\u4E09\u65B9\u7684\uFF0C\u4F60\u4E5F\u65E0\u6CD5\u4FEE\u6539\u5B83\u7684\u4EE3\u7801\uFF0C\u4E3A\u5B83\u6DFB\u52A0 ",paraId:76,tocIndex:16},{value:'"use client"',paraId:76,tocIndex:16},{value:" \u58F0\u660E\uFF0CNext.js \u4E8E\u662F\u5C31\u6309\u7167\u670D\u52A1\u7AEF\u7EC4\u4EF6\u8FDB\u884C\u5904\u7406\uFF0C\u7ED3\u679C\u5B83\u4F7F\u7528\u4E86\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\u7279\u6027 ",paraId:76,tocIndex:16},{value:"useState",paraId:76,tocIndex:16},{value:"\uFF0C\u4E8E\u662F\u4FBF\u6709\u4E86\u62A5\u9519\u3002",paraId:76,tocIndex:16},{value:"\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u5305\u4E00\u5C42\uFF0C\u5C06\u8BE5\u4E09\u65B9\u7EC4\u4EF6\u5305\u5728\u81EA\u5DF1\u7684\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\uFF0C\u6BD4\u5982\uFF1A",paraId:77,tocIndex:16},{value:`'use client';

import { Carousel } from 'acme-carousel';

export default Carousel;
`,paraId:78,tocIndex:16},{value:"\u73B0\u5728\uFF0C\u4F60\u5C31\u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",paraId:79,tocIndex:16},{value:"<Carousel />",paraId:79,tocIndex:16},{value:"\u4E86\uFF1A",paraId:79,tocIndex:16},{value:`import Carousel from './carousel';

export default function Page() {
  return (
    <div>
      <p>View pictures</p>
      <Carousel />
    </div>
  );
}
`,paraId:80,tocIndex:16},{value:"\u6CE8\uFF1A\u6709\u7684\u65F6\u5019\u6539\u4E3A\u4F7F\u7528\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E5F\u4E0D\u80FD\u89E3\u51B3\u95EE\u9898\uFF0C\u5982\u679C\u9047\u5230 document is not defined\u3001window is not defined \u8FD9\u79CD\u62A5\u9519\uFF0C\u53EF\u4EE5\u53C2\u8003 ",paraId:81,tocIndex:16},{value:"\u300ANext.js v14 \u62A5 document is not defined \u8FD9\u79CD\u9519\u600E\u4E48\u529E\uFF1F\u300B",paraId:81,tocIndex:16},{value:" \u89E3\u51B3",paraId:81,tocIndex:16},{value:"\u4E0A\u4E0B\u6587\u662F\u4E00\u4E2A\u5178\u578B\u7684\u7528\u4E8E\u8282\u70B9\u7684\u7279\u6027\uFF0C\u4E3B\u8981\u662F\u4E3A\u4E86\u5171\u4EAB\u4E00\u4E9B\u5168\u5C40\u72B6\u6001\uFF0C\u5C31\u6BD4\u5982\u5F53\u524D\u7684\u4E3B\u9898\uFF08\u5B9E\u73B0\u6362\u80A4\u529F\u80FD\uFF09\u3002\u4F46\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E0D\u652F\u6301 React context\uFF0C\u5982\u679C\u4F60\u76F4\u63A5\u521B\u5EFA\u4F1A\u62A5\u9519\uFF1A",paraId:82,tocIndex:17},{value:`import { createContext } from 'react';

//  \u670D\u52A1\u7AEF\u7EC4\u4EF6\u5E76\u4E0D\u652F\u6301 createContext
export const ThemeContext = createContext({});

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>
      </body>
    </html>
  );
}
`,paraId:83,tocIndex:17},{value:"\u4E3A\u4E86\u89E3\u51B3\u8FD9\u4E2A\u95EE\u9898\uFF0C\u4F60\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u8FDB\u884C\u521B\u5EFA\u548C\u6E32\u67D3\uFF1A",paraId:84,tocIndex:17},{value:`'use client';

import { createContext } from 'react';

export const ThemeContext = createContext({});

export default function ThemeProvider({ children }) {
  return <ThemeContext.Provider value="dark">{children}</ThemeContext.Provider>;
}
`,paraId:85,tocIndex:17},{value:"\u7136\u540E\u518D\u5728\u6839\u8282\u70B9\u4F7F\u7528\uFF1A",paraId:86,tocIndex:17},{value:`import ThemeProvider from './theme-provider';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
`,paraId:87,tocIndex:17},{value:"\u8FD9\u6837\u5E94\u7528\u91CC\u7684\u5176\u4ED6\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5C31\u53EF\u4EE5\u4F7F\u7528\u8FD9\u4E2A\u4E0A\u4E0B\u6587\u3002",paraId:88,tocIndex:17},{value:"\u4E3A\u4E86\u5C3D\u53EF\u80FD\u51CF\u5C11\u5BA2\u6237\u7AEF JavaScript \u5305\u7684\u5927\u5C0F\uFF0C\u5C3D\u53EF\u80FD\u5C06\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5728\u7EC4\u4EF6\u6811\u4E2D\u4E0B\u79FB\u3002",paraId:89,tocIndex:19},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u5F53\u4F60\u6709\u4E00\u4E2A\u5305\u542B\u4E00\u4E9B\u9759\u6001\u5143\u7D20\u548C\u4E00\u4E2A\u4EA4\u4E92\u5F0F\u7684\u4F7F\u7528\u72B6\u6001\u7684\u641C\u7D22\u680F\u7684\u5E03\u5C40\uFF0C\u6CA1\u6709\u5FC5\u8981\u8BA9\u6574\u4E2A\u5E03\u5C40\u90FD\u6210\u4E3A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u5C06\u4EA4\u4E92\u7684\u903B\u8F91\u90E8\u5206\u62BD\u79BB\u6210\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF08\u6BD4\u5982",paraId:90,tocIndex:19},{value:"<SearchBar />",paraId:90,tocIndex:19},{value:"\uFF09\uFF0C\u8BA9\u5E03\u5C40\u6210\u4E3A\u4E00\u4E2A\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF1A",paraId:90,tocIndex:19},{value:`// SearchBar \u5BA2\u6237\u7AEF\u7EC4\u4EF6
import SearchBar from './searchbar';
// Logo \u670D\u52A1\u7AEF\u7EC4\u4EF6
import Logo from './logo';

// Layout \u4F9D\u7136\u4F5C\u4E3A\u670D\u52A1\u7AEF\u7EC4\u4EF6
export default function Layout({ children }) {
  return (
    <>
      <nav>
        <Logo />
        <SearchBar />
      </nav>
      <main>{children}</main>
    </>
  );
}
`,paraId:91,tocIndex:19},{value:"\u6CE8\uFF1A\u8FD9\u70B9\u6211\u4EEC\u8FD8\u4F1A\u5728\u5B9E\u6218\u7BC7\u7684\u7B2C\u4E00\u4E2A\u9879\u76EE",paraId:92,tocIndex:19},{value:"\u300A\u5B9E\u6218\u7BC7 | React Notes | \u4FA7\u8FB9\u680F\u7B14\u8BB0\u5217\u8868\u300B",paraId:92,tocIndex:19},{value:"\u8BB2\u89E3\u6F14\u793A\u3002",paraId:92,tocIndex:19},{value:"\u5F53\u4F60\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u83B7\u53D6\u7684\u6570\u636E\uFF0C\u9700\u8981\u4EE5 props \u7684\u5F62\u5F0F\u5411\u4E0B\u4F20\u7ED9\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u8FD9\u4E2A\u6570\u636E\u9700\u8981\u505A\u5E8F\u5217\u5316\u3002",paraId:93,tocIndex:20},{value:"\u8FD9\u662F\u56E0\u4E3A React \u9700\u8981\u5148\u5728\u670D\u52A1\u7AEF\u5C06\u7EC4\u4EF6\u6811\u5148\u5E8F\u5217\u5316\u4F20\u7ED9\u5BA2\u6237\u7AEF\uFF0C\u518D\u5728\u5BA2\u6237\u7AEF\u53CD\u5E8F\u5217\u5316\u6784\u5EFA\u51FA\u7EC4\u4EF6\u6811\u3002\u5982\u679C\u4F60\u4F20\u9012\u4E86\u4E0D\u80FD\u5E8F\u5217\u5316\u7684\u6570\u636E\uFF0C\u8FD9\u5C31\u4F1A\u5BFC\u81F4\u9519\u8BEF\u3002",paraId:94,tocIndex:20},{value:"\u5982\u679C\u4F60\u4E0D\u80FD\u5E8F\u5217\u5316\uFF0C\u90A3\u5C31\u6539\u4E3A\u5728\u5BA2\u6237\u7AEF\u4F7F\u7528\u4E09\u65B9\u5305\u83B7\u53D6\u6570\u636E\u5427\u3002",paraId:95,tocIndex:20},{value:"\u6CE8\uFF1A\u8FD9\u70B9\u6211\u4EEC\u8FD8\u4F1A\u5728\u5B9E\u6218\u7BC7\u7684\u7B2C\u4E00\u4E2A\u9879\u76EE",paraId:96,tocIndex:20},{value:"\u300A\u5B9E\u6218\u7BC7 | React Notes | \u4FA7\u8FB9\u680F\u7B14\u8BB0\u5217\u8868\u300B",paraId:96,tocIndex:20},{value:"\u8BB2\u89E3\u6F14\u793A\u3002",paraId:96,tocIndex:20},{value:"Introducing Zero-Bundle-Size React Server Components \u2013 React Blog",paraId:97,tocIndex:21},{value:"How React server components work: an in-depth guide",paraId:97,tocIndex:21},{value:"Rendering: Server Components",paraId:97,tocIndex:21},{value:"Rendering: Client Components",paraId:97,tocIndex:21},{value:"Rendering: Composition Patterns",paraId:97,tocIndex:21},{value:"https://github.com/reactwg/server-components/discussions/4",paraId:97,tocIndex:21},{value:"https://news.ycombinator.com/item?id=25499171",paraId:97,tocIndex:21},{value:"https://betterprogramming.pub/the-future-of-react-server-components-90f6e3e97c8a",paraId:97,tocIndex:21},{value:"https://twitter.com/dan_abramov/status/1342264337478660096",paraId:97,tocIndex:21},{value:"https://www.builder.io/blog/why-react-server-components#suspense-for-server-side-rendering",paraId:97,tocIndex:21}]}}]);
