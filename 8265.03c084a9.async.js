"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[8265],{78265:function(t,e,a){a.r(e),a.d(e,{texts:function(){return n}});const n=[{value:"\u672C\u7BC7\u6211\u4EEC\u8BB2\u89E3\u8BF7\u6C42\u76F8\u5173\u7684\u5E38\u7528\u65B9\u6CD5\uFF0C\u6709\uFF1A",paraId:0,tocIndex:0},{value:"fetch",paraId:1,tocIndex:0},{value:"cookies",paraId:1,tocIndex:0},{value:"headers",paraId:1,tocIndex:0},{value:"NextRequest",paraId:1,tocIndex:0},{value:"NextResponse",paraId:1,tocIndex:0},{value:"redirect",paraId:1,tocIndex:0},{value:"permanentRedirect",paraId:1,tocIndex:0},{value:"notFound",paraId:1,tocIndex:0},{value:"useParams",paraId:1,tocIndex:0},{value:"usePathname",paraId:1,tocIndex:0},{value:"useRouter",paraId:1,tocIndex:0},{value:"useSearchParams",paraId:1,tocIndex:0},{value:"\u7528\u5230\u7684\u65F6\u5019\u5230\u6B64\u7BC7\u67E5\u770B\u5177\u4F53\u7684\u8BED\u6CD5\u5373\u53EF\u3002",paraId:2,tocIndex:0},{value:"Next.js \u6269\u5C55\u4E86\u539F\u751F\u7684 Web ",paraId:3,tocIndex:2},{value:"fetch API",paraId:3,tocIndex:2},{value:"\uFF0C\u53EF\u4EE5\u4E3A\u6BCF\u4E2A\u8BF7\u6C42\u8BBE\u7F6E\u81EA\u5DF1\u7684\u7F13\u5B58\u6A21\u5F0F\uFF0C\u4F60\u53EF\u4EE5\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u642D\u914D ",paraId:3,tocIndex:2},{value:"async",paraId:3,tocIndex:2},{value:" \u548C ",paraId:3,tocIndex:2},{value:"await",paraId:3,tocIndex:2},{value:" \u76F4\u63A5\u8C03\u7528\uFF1A",paraId:3,tocIndex:2},{value:`// app/page.js
export default async function Page() {
  // \u8BF7\u6C42\u4F1A\u88AB\u7F13\u5B58
  // \u7C7B\u4F3C\u4E8E Pages Router \u4E0B\u7684 \`getStaticProps\`.
  // \`force-cache\` \u662F\u9ED8\u8BA4\u9009\u9879\uFF0C\u4E0D\u5199\u4E5F\u884C
  const staticData = await fetch(\`https://...\`, { cache: 'force-cache' });

  // \u6BCF\u6B21\u8BF7\u6C42\u7684\u65F6\u5019\u90FD\u4F1A\u91CD\u65B0\u83B7\u53D6
  // \u7C7B\u4F3C\u4E8E Pages Router \u4E0B\u7684 \`getServerSideProps\`.
  const dynamicData = await fetch(\`https://...\`, { cache: 'no-store' });

  // \u8BF7\u6C42\u4F1A\u88AB\u7F13\u5B58\uFF0C\u6700\u591A\u7F13\u5B58 10s
  // \u7C7B\u4F3C\u4E8E Pages Router \u4E0B\u7684 \`getStaticProps\` \u4F7F\u7528 \`revalidate\` \u9009\u9879.
  const revalidatedData = await fetch(\`https://...\`, {
    next: { revalidate: 10 },
  });

  return <div>...</div>;
}
`,paraId:4,tocIndex:2},{value:"\u8FD9\u91CC\u8981\u6CE8\u610F\u7684\u662F\uFF0C\u6D4F\u89C8\u5668\u4E2D\u7684 fetch \u5176\u5B9E\u4E5F\u662F\u6709 cache \u9009\u9879\u7684\uFF1A",paraId:5,tocIndex:2},{value:`async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    body: JSON.stringify(data),
  });
  return response.json();
}
`,paraId:6,tocIndex:2},{value:"\u6D4F\u89C8\u5668\u4E2D\u7684 fetch cache \u9009\u9879\u63A7\u5236\u7684\u662F\u4E0E\u6D4F\u89C8\u5668\u4EA4\u4E92\u7684 HTTP \u7F13\u5B58\uFF0C\u800C\u6211\u4EEC\u5728\u670D\u52A1\u7AEF\u4E2D\u7528\u7684 fetch cache \u9009\u9879\u63A7\u5236\u7684\u5176\u5B9E\u662F Next.js \u81EA\u5DF1\u7684\u7F13\u5B58\u903B\u8F91\uFF0C\u5B83\u4F1A\u5C06\u8FD9\u4E9B\u8BF7\u6C42\u7F13\u5B58\u8D77\u6765\uFF0C\u65B9\u4FBF\u4EE5\u540E\u91CD\u590D\u8BF7\u6C42\u7684\u65F6\u5019\u7528\u5230\u3002\u5B83\u4EEC\u5177\u4F53\u7684 cache \u9009\u9879\u5185\u5BB9\u4E5F\u4F1A\u6709\u6240\u4E0D\u540C\uFF0C\u63A5\u4E0B\u6765\u4F1A\u8BB2\u5230\u3002",paraId:7,tocIndex:2},{value:"\u7528\u4E8E\u914D\u7F6E Next.js \u6570\u636E\u7F13\u5B58\uFF08",paraId:8,tocIndex:4},{value:"Data Cache",paraId:8,tocIndex:4},{value:"\uFF09",paraId:8,tocIndex:4},{value:"fetch(`https://...`, { cache: 'force-cache' | 'no-store' });\n",paraId:9,tocIndex:4},{value:"force-cache",paraId:10,tocIndex:4},{value:"\u662F\u9ED8\u8BA4\u503C\uFF0C\u8868\u793A\u4F18\u5148\u4ECE\u7F13\u5B58\u4E2D\u67E5\u627E\u5339\u914D\u8BF7\u6C42\uFF0C\u5F53\u6CA1\u6709\u5339\u914D\u9879\u6216\u8005\u5339\u914D\u9879\u8FC7\u65F6\u65F6\uFF0C\u624D\u4ECE\u670D\u52A1\u5668\u4E0A\u83B7\u53D6\u8D44\u6E90\u5E76\u66F4\u65B0\u7F13\u5B58\u3002",paraId:10,tocIndex:4},{value:"no-store",paraId:10,tocIndex:4},{value:"\u8868\u793A\u6BCF\u6B21\u8BF7\u6C42\u90FD\u4ECE\u670D\u52A1\u5668\u4E0A\u83B7\u53D6\u8D44\u6E90\uFF0C\u4E0D\u4ECE\u7F13\u5B58\u4E2D\u67E5\uFF0C\u4E5F\u4E0D\u66F4\u65B0\u7F13\u5B58\u3002",paraId:10,tocIndex:4},{value:"\u5982\u679C\u6CA1\u6709\u63D0\u4F9B cache \u9009\u9879\uFF0C\u9ED8\u8BA4\u4E3A ",paraId:11,tocIndex:4},{value:"force-cache",paraId:11,tocIndex:4},{value:"\uFF0C\u4F46\u5982\u679C\u4F60\u4F7F\u7528\u4E86\u52A8\u6001\u51FD\u6570\uFF08\u5982 cookies()\uFF09\uFF0C\u5B83\u7684\u9ED8\u8BA4\u503C\u5C31\u4F1A\u662F ",paraId:11,tocIndex:4},{value:"no-store",paraId:11,tocIndex:4},{value:"\u3002",paraId:11,tocIndex:4},{value:"fetch(`https://...`, { next: { revalidate: false | 0 | number } });\n",paraId:12,tocIndex:5},{value:"\u8BBE\u7F6E\u8D44\u6E90\u7684\u7F13\u5B58\u65F6\u95F4\uFF1A",paraId:13,tocIndex:5},{value:"false",paraId:14,tocIndex:5},{value:"\uFF08\u9ED8\u8BA4\uFF09\uFF1A\u8BED\u4E49\u4E0A\u76F8\u5F53\u4E8E ",paraId:14,tocIndex:5},{value:"revalidate: Infinity",paraId:14,tocIndex:5},{value:"\uFF0C\u8D44\u6E90\u65E0\u9650\u671F\u7F13\u5B58",paraId:14,tocIndex:5},{value:"0",paraId:14,tocIndex:5},{value:"\uFF1A\u9632\u6B62\u8D44\u6E90\u88AB\u7F13\u5B58",paraId:14,tocIndex:5},{value:"number",paraId:14,tocIndex:5},{value:" \uFF1A\u6307\u5B9A\u8D44\u6E90\u7684\u7F13\u5B58\u65F6\u95F4\uFF0C\u6700\u591A ",paraId:14,tocIndex:5},{value:"n",paraId:14,tocIndex:5},{value:"\u79D2",paraId:14,tocIndex:5},{value:"\u5982\u679C\u4E00\u4E2A\u5355\u72EC\u7684 ",paraId:15,tocIndex:5},{value:"fetch()",paraId:15,tocIndex:5},{value:" \u8BF7\u6C42\u7684 ",paraId:15,tocIndex:5},{value:"revalidate",paraId:15,tocIndex:5},{value:" \u503C\u6BD4\u8DEF\u7531\u6BB5\u914D\u7F6E\u4E2D\u7684 ",paraId:15,tocIndex:5},{value:"revalidate",paraId:15,tocIndex:5},{value:" \u8FD8\u4F4E\uFF0C\u6574\u4E2A\u8DEF\u7531\u7684 revalidate \u65F6\u95F4\u90FD\u4F1A\u51CF\u5C11\u3002\u5982\u679C\u540C\u4E00\u8DEF\u7531\u4E0B\u6709\u4E24\u4E2A\u4F7F\u7528\u76F8\u540C URL \u7684\u8BF7\u6C42\uFF0C\u4F46\u8BBE\u7F6E\u4E86\u4E0D\u540C\u7684 ",paraId:15,tocIndex:5},{value:"revalidate",paraId:15,tocIndex:5},{value:"\u503C\uFF0C\u7528\u8F83\u4F4E\u7684\u90A3\u4E2A\u503C\u3002",paraId:15,tocIndex:5},{value:"\u4E3A\u4E86\u65B9\u4FBF\uFF0C\u5982\u679C ",paraId:16,tocIndex:5},{value:"revalidate",paraId:16,tocIndex:5},{value:" \u8BBE\u7F6E\u4E86\u6570\u5B57\uFF0C\u65E0\u987B\u518D\u8BBE\u7F6E ",paraId:16,tocIndex:5},{value:"cache",paraId:16,tocIndex:5},{value:" \u9009\u9879\uFF0C\u8BBE\u7F6E\u4E3A",paraId:16,tocIndex:5},{value:"0",paraId:16,tocIndex:5},{value:" \u4F1A\u5E94\u7528 ",paraId:16,tocIndex:5},{value:"cache: 'no-store'",paraId:16,tocIndex:5},{value:"\uFF0C\u8BBE\u7F6E\u4E3A\u6B63\u503C\u4F1A\u5E94\u7528 ",paraId:16,tocIndex:5},{value:"cache: 'force-cache'",paraId:16,tocIndex:5},{value:"\u3002\u51B2\u7A81\u7684\u914D\u7F6E\u5982 ",paraId:16,tocIndex:5},{value:"{ revalidate: 0, cache: 'force-cache' }",paraId:16,tocIndex:5},{value:"\u548C ",paraId:16,tocIndex:5},{value:"{ revalidate: 10, cache: 'no-store' }",paraId:16,tocIndex:5},{value:"\u4F1A\u5BFC\u81F4\u62A5\u9519\u3002",paraId:16,tocIndex:5},{value:"fetch(`https://...`, { next: { tags: ['collection'] } });\n",paraId:17,tocIndex:6},{value:"\u8BBE\u7F6E\u8D44\u6E90\u7684\u7F13\u5B58\u6807\u7B7E\uFF0C\u6570\u636E\u53EF\u4EE5\u4F7F\u7528 ",paraId:18,tocIndex:6},{value:"revalidateTag",paraId:18,tocIndex:6},{value:" \u6309\u9700\u91CD\u65B0\u9A8C\u8BC1\u3002\u81EA\u5B9A\u4E49\u6807\u7B7E\u7684\u6700\u5927\u957F\u5EA6\u662F 256 \u4E2A\u5B57\u7B26\u3002",paraId:18,tocIndex:6},{value:"cookies",paraId:19,tocIndex:8},{value:" \u51FD\u6570\u7528\u4E8E\uFF1A",paraId:19,tocIndex:8},{value:"\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u8BFB\u53D6\u4F20\u5165\u8BF7\u6C42\u7684 cookie",paraId:20,tocIndex:8},{value:"\u5728 Server Action \u6216\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u4E2D\u5199\u5165\u8FD4\u56DE\u8BF7\u6C42\u7684 cookie",paraId:20,tocIndex:8},{value:"\u6CE8\u610F\uFF1A\u4E4B\u524D\u7684\u6587\u7AE0\u91CC\u4E5F\u591A\u6B21\u63D0\u5230\uFF0C",paraId:21,tocIndex:8},{value:"cookies()",paraId:21,tocIndex:8},{value:" \u662F\u4E00\u4E2A\u52A8\u6001\u51FD\u6570\uFF0C\u56E0\u4E3A\u5176\u8FD4\u56DE\u503C\u65E0\u6CD5\u63D0\u524D\u77E5\u9053\u3002\u6240\u4EE5\u5728\u9875\u9762\u6216\u8005\u5E03\u5C40\u4E2D\u4F7F\u7528\u8BE5\u51FD\u6570\u4F1A\u5BFC\u81F4\u8DEF\u7531\u8F6C\u53D8\u4E3A\u52A8\u6001\u6E32\u67D3\u3002",paraId:21,tocIndex:8},{value:"\u8BE5\u65B9\u6CD5\u4F20\u5165\u4E00\u4E2A cookie \u540D\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5177\u6709 ",paraId:22,tocIndex:10},{value:"name",paraId:22,tocIndex:10},{value:" \u548C ",paraId:22,tocIndex:10},{value:"value",paraId:22,tocIndex:10},{value:" \u5C5E\u6027\u7684\u5BF9\u8C61\u3002\u5982\u679C\u6CA1\u6709\u627E\u5230\uFF0C\u8FD4\u56DE ",paraId:22,tocIndex:10},{value:"undefined",paraId:22,tocIndex:10},{value:"\uFF0C\u5982\u679C\u5339\u914D\u5230\u591A\u4E2A cookie\uFF0C\u5219\u8FD4\u56DE\u7B2C\u4E00\u4E2A\u5339\u914D\u5230\u7684\u3002",paraId:22,tocIndex:10},{value:`// app/page.js
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  // \u5982\u679C\u5339\u914D\u5230\uFF0Ctheme \u7684\u503C\u4E3A { name: 'theme', value: 'xxxx' }
  // \u5982\u679C\u6CA1\u6709\u5339\u914D\u5230\uFF0Ctheme \u7684\u503C\u4E3A undefined
  const theme = cookieStore.get('theme');
  return '...';
}
`,paraId:23,tocIndex:10},{value:"\u8BE5\u65B9\u6CD5\u7C7B\u4F3C\u4E8E ",paraId:24,tocIndex:11},{value:"get",paraId:24,tocIndex:11},{value:"\uFF0C\u4F46\u4F1A\u4EE5\u6570\u7EC4\u5F62\u5F0F\u8FD4\u56DE\u6240\u6709\u5339\u914D\u5230\u7684 ",paraId:24,tocIndex:11},{value:"cookies",paraId:24,tocIndex:11},{value:" \uFF0C\u5339\u914D\u4E0D\u5230\u5219\u8FD4\u56DE\u7A7A\u6570\u7EC4\u3002\u5982\u679C\u6CA1\u6709\u6307\u5B9A ",paraId:24,tocIndex:11},{value:"name",paraId:24,tocIndex:11},{value:"\uFF0C\u5219\u8FD4\u56DE\u6240\u6709\u53EF\u7528\u7684 cookie\u3002",paraId:24,tocIndex:11},{value:`// app/page.js
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  // \u5982\u679C\u5339\u914D\u5230\uFF0Ctheme \u7684\u503C\u4E3A [{ name: 'theme', value: 'xxxx' }]
  // \u5982\u679C\u6CA1\u6709\u5339\u914D\u5230\uFF0Ctheme \u7684\u503C\u4E3A []
  const theme = cookieStore.get('theme');
  return '...';
}
`,paraId:25,tocIndex:11},{value:"\u53E6\u4E00\u4E2A\u793A\u4F8B\u5982\u4E0B\uFF1A",paraId:26,tocIndex:11},{value:`// app/page.js
import { cookies } from 'next/headers';

export default function Page() {
  const cookieStore = cookies();
  return cookieStore.getAll().map((cookie) => (
    <div key={cookie.name}>
      <p>Name: {cookie.name}</p>
      <p>Value: {cookie.value}</p>
    </div>
  ));
}
`,paraId:27,tocIndex:11},{value:"\u8BE5\u65B9\u6CD5\u4F20\u5165\u4E00\u4E2A cookie \u540D\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u5224\u65AD\u8BE5 cookie \u662F\u5426\u5B58\u5728\u7684\u5E03\u5C14\u503C\u3002",paraId:28,tocIndex:12},{value:`// app/page.js
import { cookies } from 'next/headers';

export default function Page() {
  const cookiesList = cookies();
  // true | false
  const hasCookie = cookiesList.has('theme');
  return '...';
}
`,paraId:29,tocIndex:12},{value:"\u8BE5\u65B9\u6CD5\u7528\u4E8E\u8BBE\u7F6E cookie\u3002",paraId:30,tocIndex:13},{value:`'use server';
// app/actions.js
import { cookies } from 'next/headers';

async function create(data) {
  cookies().set('name', 'lee');
  // or
  cookies().set('name', 'lee', { secure: true });
  // or
  cookies().set({
    name: 'name',
    value: 'lee',
    httpOnly: true,
    path: '/',
  });
}
`,paraId:31,tocIndex:13},{value:"\u5177\u4F53 options \u9664\u4E86 name\u3001value \u901A\u8FC7",paraId:32,tocIndex:13},{value:"\u67E5\u770B\u6E90\u7801",paraId:32,tocIndex:13},{value:"\u53EF\u4EE5\u5F97\u77E5\uFF0C\u8FD8\u6709 domain\u3001expires\u3001httponly\u3001maxage\u3001path\u3001samesite\u3001secure\u3001priority\u3002",paraId:32,tocIndex:13},{value:"\u5220\u9664 cookie \u7684\u65B9\u5F0F\u6709\u591A\u79CD\uFF1A",paraId:33,tocIndex:14},{value:"\u5220\u9664\u6307\u5B9A\u540D\u79F0\u7684 cookie",paraId:34,tocIndex:15},{value:`'use server';
// app/actions.js
import { cookies } from 'next/headers';

export async function create(data) {
  cookies().delete('name');
}
`,paraId:35,tocIndex:15},{value:"\u5C06\u6307\u5B9A\u540D\u79F0\u7684 cookie \u8BBE\u7F6E\u4E3A\u7A7A\u503C",paraId:36,tocIndex:16},{value:`'use server';
// app/actions.js
import { cookies } from 'next/headers';

export async function create(data) {
  cookies().set('name', '');
}
`,paraId:37,tocIndex:16},{value:"\u8BBE\u7F6E maxAge \u4E3A 0\uFF0C\u7ACB\u5373\u4F7F cookie \u8FC7\u671F",paraId:38,tocIndex:17},{value:`'use server';
// app/actions.js
import { cookies } from 'next/headers';

export async function create(data) {
  cookies().set('name', 'value', { maxAge: 0 });
}
`,paraId:39,tocIndex:17},{value:"\u8BBE\u7F6E expires \u4E3A\u8FC7\u53BB\u7684\u503C\u90FD\u4F1A\u4F7F cookie \u8FC7\u671F",paraId:40,tocIndex:18},{value:`'use server';
// app/actions.js
import { cookies } from 'next/headers';

export async function create(data) {
  const oneDay = 24 * 60 * 60 * 1000;
  cookies().set('name', 'value', { expires: Date.now() - oneDay });
}
`,paraId:41,tocIndex:18},{value:"\u5982\u679C\u4F60\u60F3\u8981\u6D4B\u8BD5\u8FD9\u4E9B\u5220\u9664\u6548\u679C\uFF1A",paraId:42,tocIndex:19},{value:`'use client';
// app/page.js
import { create } from './action';

export default function Page({ params }) {
  return (
    <form action={create}>
      <input type="text" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}
`,paraId:43,tocIndex:19},{value:"headers()",paraId:44,tocIndex:21},{value:" \u51FD\u6570\u7528\u4E8E\u4ECE\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u8BFB\u53D6\u4F20\u5165\u7684 HTTP \u8BF7\u6C42\u5934\u3002\u5B83\u62D3\u5C55\u4E86 ",paraId:44,tocIndex:21},{value:"Web Headers API",paraId:44,tocIndex:21},{value:"\u3002\u5B83\u662F\u53EA\u8BFB\u7684\uFF0C\u8FD9\u610F\u5473\u7740\u4F60\u4E0D\u80FD ",paraId:44,tocIndex:21},{value:"set",paraId:44,tocIndex:21},{value:"/",paraId:44,tocIndex:21},{value:"delete",paraId:44,tocIndex:21},{value:" \u8FD4\u56DE\u7684\u8BF7\u6C42\u5934\u3002headers() \u548C cookies() \u4E00\u6837\u90FD\u662F\u52A8\u6001\u51FD\u6570\uFF0C\u5176\u8FD4\u56DE\u503C\u65E0\u6CD5\u63D0\u524D\u77E5\u9053\uFF0C\u4E00\u65E6\u4F7F\u7528\u4F1A\u5BFC\u81F4\u8DEF\u7531\u5207\u6362\u5230\u52A8\u6001\u6E32\u67D3\u3002",paraId:44,tocIndex:21},{value:`// app/page.js
import { headers } from 'next/headers';

export default function Page() {
  const headersList = headers();
  const referer = headersList.get('referer');

  return <div>Referer: {referer}</div>;
}
`,paraId:45,tocIndex:21},{value:`const headersList = headers();
`,paraId:46,tocIndex:22},{value:"headers() \u4E0D\u63A5\u6536\u4EFB\u4F55\u53C2\u6570\uFF0C\u8FD4\u56DE\u4E00\u4E2A\u53EA\u8BFB\u7684 ",paraId:47,tocIndex:22},{value:"Web Headers",paraId:47,tocIndex:22},{value:" \u5BF9\u8C61\uFF0C\u6240\u4EE5\u6CA1\u6709 set\u3001append\u3001delete \u8FD9\u4E9B\u65B9\u6CD5\uFF1A",paraId:47,tocIndex:22},{value:"Headers.entries()",paraId:48,tocIndex:22},{value:"\uFF1A\u4EE5 ",paraId:48,tocIndex:22},{value:"\u8FED\u4EE3\u5668",paraId:48,tocIndex:22},{value:" \u7684\u5F62\u5F0F\u8FD4\u56DE Headers \u5BF9\u8C61\u4E2D\u6240\u6709\u7684\u952E\u503C\u5BF9",paraId:48,tocIndex:22},{value:"Headers.get()",paraId:48,tocIndex:22},{value:"\uFF1A\u4EE5 ",paraId:48,tocIndex:22},{value:"String",paraId:48,tocIndex:22},{value:" \u7684\u5F62\u5F0F\u4ECE Headers \u5BF9\u8C61\u4E2D\u8FD4\u56DE\u6307\u5B9A header \u7684\u5168\u90E8\u503C",paraId:48,tocIndex:22},{value:"Headers.has()",paraId:48,tocIndex:22},{value:"\uFF1A\u4EE5\u5E03\u5C14\u503C\u7684\u5F62\u5F0F\u4ECE Headers \u5BF9\u8C61\u4E2D\u8FD4\u56DE\u662F\u5426\u5B58\u5728\u6307\u5B9A\u7684 header",paraId:48,tocIndex:22},{value:"Headers.keys()",paraId:48,tocIndex:22},{value:"\uFF1A\u4EE5",paraId:48,tocIndex:22},{value:"\u8FED\u4EE3\u5668",paraId:48,tocIndex:22},{value:"\u7684\u5F62\u5F0F\u8FD4\u56DE Headers \u5BF9\u8C61\u4E2D\u6240\u6709\u5B58\u5728\u7684 header \u540D",paraId:48,tocIndex:22},{value:"Headers.values()",paraId:48,tocIndex:22},{value:"\uFF1A\u4EE5",paraId:48,tocIndex:22},{value:"\u8FED\u4EE3\u5668",paraId:48,tocIndex:22},{value:"\u7684\u5F62\u5F0F\u8FD4\u56DE Headers \u5BF9\u8C61\u4E2D\u6240\u6709\u5B58\u5728\u7684 header \u7684\u503C",paraId:48,tocIndex:22},{value:"Headers.forEach()",paraId:48,tocIndex:22},{value:"\uFF1A\u5BF9\u5BF9\u8C61\u4E2D\u7684\u6BCF\u4E2A\u952E/\u503C\u5BF9\u6267\u884C\u4E00\u6B21\u56DE\u8C03\u51FD\u6570",paraId:48,tocIndex:22},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:49,tocIndex:22},{value:`// app/page.js
import { headers } from 'next/headers';

async function getUser() {
  const headersInstance = headers();
  const authorization = headersInstance.get('authorization');
  // \u8F6C\u53D1 authorization header
  const res = await fetch('...', {
    headers: { authorization },
  });
  return res.json();
}

export default async function UserPage() {
  const user = await getUser();
  return <h1>{user.name}</h1>;
}
`,paraId:50,tocIndex:22},{value:"NextRequest \u62D3\u5C55\u4E86 ",paraId:51,tocIndex:24},{value:"Web Resquest API",paraId:51,tocIndex:24},{value:"\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E9B\u4FBF\u6377\u7684\u65B9\u6CD5\u3002",paraId:51,tocIndex:24},{value:"\u7528\u4E8E\u8BFB\u53D6\u548C\u66F4\u6539\u8BF7\u6C42\u7684 ",paraId:52,tocIndex:25},{value:"Set-Cookie",paraId:52,tocIndex:25},{value:"\u6807\u5934\u3002",paraId:52,tocIndex:25},{value:"\u8BBE\u7F6E cookie\uFF1A",paraId:53,tocIndex:26},{value:"// \u8BF7\u6C42\u4F1A\u6709\u4E00\u4E2A `Set-Cookie:show-banner=false;path=/home` \u6807\u5934\nrequest.cookies.set('show-banner', 'false');\n",paraId:54,tocIndex:26},{value:"\u8FD4\u56DE\u6307\u5B9A\u540D\u79F0\u7684 cookie \u503C\uFF0C\u627E\u4E0D\u5230\u5C31\u8FD4\u56DE undefined\uFF0C\u591A\u4E2A\u5C31\u8FD4\u56DE\u7B2C\u4E00\u4E2A\uFF1A",paraId:55,tocIndex:27},{value:`// { name: 'show-banner', value: 'false', Path: '/home' }
request.cookies.get('show-banner');
`,paraId:56,tocIndex:27},{value:"\u8FD4\u56DE\u6307\u5B9A\u540D\u79F0\u7684 cookie \u503C\uFF0C\u672A\u6307\u5B9A\u5219\u8FD4\u56DE\u6240\u6709\uFF0C\u6570\u7EC4\u5F62\u5F0F\uFF1A",paraId:57,tocIndex:28},{value:`// [
//   { name: 'experiments', value: 'new-pricing-page', Path: '/home' },
//   { name: 'experiments', value: 'winter-launch', Path: '/home' },
// ]
request.cookies.getAll('experiments');
// \u8FD4\u56DE\u6240\u6709 cookie \u503C
request.cookies.getAll();
`,paraId:58,tocIndex:28},{value:"\u7528\u4E8E\u5220\u9664 cookie\uFF1A",paraId:59,tocIndex:29},{value:`// \u8FD4\u56DE true \u8868\u793A\u5220\u9664\u6210\u529F, false \u8868\u793A\u6CA1\u6709\u5220\u6389\u4EFB\u4F55\u4E1C\u897F
request.cookies.delete('experiments');
`,paraId:60,tocIndex:29},{value:"\u5224\u65AD\u662F\u5426\u6709\u8BE5 cookie \u503C\uFF0C\u6709\u5219\u8FD4\u56DE true\uFF0C\u65E0\u5219\u8FD4\u56DE false",paraId:61,tocIndex:30},{value:`request.cookies.has('experiments');
`,paraId:62,tocIndex:30},{value:"\u5220\u9664\u8BF7\u6C42\u7684 ",paraId:63,tocIndex:31},{value:"Set-Cookie",paraId:63,tocIndex:31},{value:" \u6807\u5934",paraId:63,tocIndex:31},{value:`request.cookies.clear();
`,paraId:64,tocIndex:31},{value:"\u62D3\u5C55\u4E86\u539F\u751F\u7684 ",paraId:65,tocIndex:32},{value:"URL API",paraId:65,tocIndex:32},{value:"\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E9B\u4FBF\u6377\u7684\u65B9\u6CD5\uFF1A",paraId:65,tocIndex:32},{value:`// \u5047\u8BBE\u8BF7\u6C42\u662F /home, pathname \u662F /home
request.nextUrl.pathname;
// \u8BF7\u6C42\u662F /home?name=lee, searchParams \u662F { 'name': 'lee' }
request.nextUrl.searchParams;
`,paraId:66,tocIndex:32},{value:"NextResponse \u62D3\u5C55\u4E86 ",paraId:67,tocIndex:34},{value:"Web Response API",paraId:67,tocIndex:34},{value:"\uFF0C\u63D0\u4F9B\u4E86\u4E00\u4E9B\u4FBF\u6377\u7684\u65B9\u6CD5\u3002",paraId:67,tocIndex:34},{value:"\u7528\u4E8E\u8BFB\u53D6\u548C\u66F4\u6539\u54CD\u5E94\u7684 Set-Cookie \u6807\u5934\u3002",paraId:68,tocIndex:35},{value:`// \u8BF7\u6C42\u672A /home
let response = NextResponse.next();
// \u8BBE\u7F6E cookie
response.cookies.set('show-banner', 'false');
// Response \u7684 Set-Cookie \u6807\u5934\u4E3A \`Set-Cookie:show-banner=false;path=/home\`
return response;
`,paraId:69,tocIndex:36},{value:`// \u5047\u8BBE\u8BF7\u6C42\u4E3A /home
let response = NextResponse.next();
// { name: 'show-banner', value: 'false', Path: '/home' }
response.cookies.get('show-banner');
`,paraId:70,tocIndex:37},{value:`// \u5047\u8BBE\u8BF7\u6C42\u4E3A /home
let response = NextResponse.next();
// [
//   { name: 'experiments', value: 'new-pricing-page', Path: '/home' },
//   { name: 'experiments', value: 'winter-launch', Path: '/home' },
// ]
response.cookies.getAll('experiments');
// \u8FD4\u56DE\u6240\u6709 cookie \u503C
response.cookies.getAll();
`,paraId:71,tocIndex:38},{value:`// \u5047\u8BBE\u8BF7\u6C42\u4E3A /home
let response = NextResponse.next();
// \u8FD4\u56DE true \u8868\u793A\u5220\u9664\u6210\u529F, false \u8868\u793A\u6CA1\u6709\u5220\u6389\u4EFB\u4F55\u4E1C\u897F
response.cookies.delete('experiments');
`,paraId:72,tocIndex:39},{value:"\u4F7F\u7528\u7ED9\u5B9A\u7684 JSON \u6B63\u6587\u751F\u6210\u54CD\u5E94\uFF1A",paraId:73,tocIndex:40},{value:`// app/api/route.js
import { NextResponse } from 'next/server';

export async function GET(request) {
  return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
}
`,paraId:74,tocIndex:40},{value:"\u751F\u6210\u91CD\u5B9A\u5411\u5230\u65B0 URL \u7684\u54CD\u5E94\uFF1A",paraId:75,tocIndex:41},{value:`import { NextResponse } from 'next/server';

return NextResponse.redirect(new URL('/new', request.url));
`,paraId:76,tocIndex:41},{value:"\u5728 ",paraId:77,tocIndex:41},{value:"NextResponse.redirect()",paraId:77,tocIndex:41},{value:"\u65B9\u6CD5\u4F7F\u7528\u524D\u53EF\u4EE5\u521B\u5EFA\u548C\u66F4\u6539 ",paraId:77,tocIndex:41},{value:"URL",paraId:77,tocIndex:41},{value:"\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF0C\u4F60\u53EF\u4EE5\u4F7F\u7528 ",paraId:77,tocIndex:41},{value:"request.nextUrl",paraId:77,tocIndex:41},{value:" \u83B7\u53D6\u5F53\u524D\u7684 URL\uFF0C\u7136\u540E\u636E\u6B64\u66F4\u6539\u6210\u91CD\u5B9A\u5411\u7684 URL\uFF1A",paraId:77,tocIndex:41},{value:`import { NextResponse } from 'next/server';

const loginUrl = new URL('/login', request.url);
// \u6DFB\u52A0 ?from=/incoming-url \u53C2\u6570\u5230 /login URL
loginUrl.searchParams.set('from', request.nextUrl.pathname);
// \u91CD\u5B9A\u5411\u5230\u65B0 URL
return NextResponse.redirect(loginUrl);
`,paraId:78,tocIndex:41},{value:"\u4FDD\u7559\u539F\u59CB URL \u7684\u540C\u65F6\u751F\u6210\u4E00\u4E2A\u91CD\u5199\u5230\u6307\u5B9A URL \u7684\u54CD\u5E94\uFF1A",paraId:79,tocIndex:42},{value:`import { NextResponse } from 'next/server';

// \u4F20\u5165\u8BF7\u6C42: /about, \u6D4F\u89C8\u5668\u663E\u793A /about
// \u91CD\u5199\u8BF7\u6C42: /proxy, \u6D4F\u89C8\u5668\u663E\u793A /about
return NextResponse.rewrite(new URL('/proxy', request.url));
`,paraId:80,tocIndex:42},{value:"\u5E38\u7528\u5728\u4E2D\u95F4\u4EF6\uFF0C\u7528\u4E8E\u63D0\u524D\u8FD4\u56DE\u5E76\u7EE7\u7EED\u8DEF\u7531\uFF1A",paraId:81,tocIndex:43},{value:`import { NextResponse } from 'next/server';

return NextResponse.next();
`,paraId:82,tocIndex:43},{value:"\u4E5F\u53EF\u4EE5\u5728\u751F\u6210\u54CD\u5E94\u7684\u65F6\u5019\u8F6C\u53D1 ",paraId:83,tocIndex:43},{value:"headers",paraId:83,tocIndex:43},{value:"\u3002",paraId:83,tocIndex:43},{value:`import { NextResponse } from 'next/server';

const newHeaders = new Headers(request.headers);
// \u6DFB\u52A0\u65B0 header
newHeaders.set('x-version', '123');
// \u8FD4\u56DE\u65B0\u7684 headers
return NextResponse.next({
  request: {
    headers: newHeaders,
  },
});
`,paraId:84,tocIndex:43},{value:"redirect",paraId:85,tocIndex:45},{value:"\u51FD\u6570\uFF0C\u987E\u540D\u601D\u4E49\uFF0C\u91CD\u5B9A\u5411\u5730\u5740\uFF0C\u53EF\u7528\u4E8E\u670D\u52A1\u7AEF\u7EC4\u4EF6\u3001\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u3001Server Actions\u3002\u5728 Streaming \u4E2D\uFF0C\u4F7F\u7528\u91CD\u5B9A\u5411\u5C06\u63D2\u5165\u4E00\u4E2A meta \u6807\u7B7E\u4EE5\u5728\u5BA2\u6237\u7AEF\u53D1\u8D77\u91CD\u5B9A\u5411\uFF0C\u5176\u4ED6\u60C5\u51B5\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E00\u4E2A 307 HTTP \u91CD\u5B9A\u5411\u54CD\u5E94\u3002\u5982\u679C\u8D44\u6E90\u4E0D\u5B58\u5728\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 notFound \u51FD\u6570\uFF0C\u5E76\u4E0D\u4E00\u5B9A\u9700\u8981 redirect \u6765\u5904\u7406\u3002",paraId:85,tocIndex:45},{value:"redirect",paraId:86,tocIndex:45},{value:" \u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A",paraId:86,tocIndex:45},{value:`redirect(path, type);
`,paraId:87,tocIndex:45},{value:"\u5176\u4E2D\uFF1A",paraId:88,tocIndex:45},{value:"path",paraId:89,tocIndex:45},{value:" \u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u8868\u793A\u91CD\u5B9A\u5411\u7684 URL\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84",paraId:89,tocIndex:45},{value:"type",paraId:89,tocIndex:45},{value:" \u503C\u4E3A ",paraId:89,tocIndex:45},{value:"replace",paraId:89,tocIndex:45},{value:" \uFF08\u9ED8\u8BA4\uFF09\u6216\u8005 ",paraId:89,tocIndex:45},{value:"push",paraId:89,tocIndex:45},{value:"\uFF08Server Actions \u4E2D\u9ED8\u8BA4\uFF09\uFF0C\u8868\u793A\u91CD\u5B9A\u5411\u7684\u7C7B\u578B",paraId:89,tocIndex:45},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C",paraId:90,tocIndex:45},{value:"redirect",paraId:90,tocIndex:45},{value:" \u5728 Sever Actions \u4E2D\u4F1A\u7528 ",paraId:90,tocIndex:45},{value:"push",paraId:90,tocIndex:45},{value:"\uFF08\u6DFB\u52A0\u5230\u6D4F\u89C8\u5668\u5386\u53F2\u6808\uFF09\uFF0C\u5728\u5176\u4ED6\u5730\u65B9\u7528 ",paraId:90,tocIndex:45},{value:"replace",paraId:90,tocIndex:45},{value:"\uFF08\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u6808\u4E2D\u66FF\u6362\u5F53\u524D\u7684 URL\uFF09\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A ",paraId:90,tocIndex:45},{value:"type",paraId:90,tocIndex:45},{value:"\u53C2\u6570\u8986\u76D6\u6B64\u884C\u4E3A\u3002",paraId:90,tocIndex:45},{value:"\u6CE8\u610F\uFF1A\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",paraId:91,tocIndex:45},{value:"type",paraId:91,tocIndex:45},{value:"\u53C2\u6570\u6CA1\u6709\u6548\u679C\u3002",paraId:91,tocIndex:45},{value:"redirect",paraId:92,tocIndex:45},{value:" \u51FD\u6570\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C",paraId:92,tocIndex:45},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:93,tocIndex:45},{value:`// app/team/[id]/page.js
import { redirect } from 'next/navigation';

async function fetchTeam(id) {
  const res = await fetch('https://...');
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Profile({ params }) {
  const team = await fetchTeam(params.id);
  if (!team) {
    redirect('/login');
  }

  // ...
}
`,paraId:94,tocIndex:45},{value:"permanentRedirect",paraId:95,tocIndex:47},{value:"\uFF0C\u4F5C\u7528\u4E5F\u662F\u91CD\u5B9A\u5411\uFF0C\u53EF\u7528\u4E8E\u670D\u52A1\u7AEF\u7EC4\u4EF6\u3001\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u3001\u8DEF\u7531\u5904\u7406\u7A0B\u5E8F\u3001Server Actions\u3002\u5728 Streaming \u4E2D\uFF0C\u4F7F\u7528\u91CD\u5B9A\u5411\u5C06\u63D2\u5165\u4E00\u4E2A meta \u6807\u7B7E\u4EE5\u5728\u5BA2\u6237\u7AEF\u53D1\u8D77\u91CD\u5B9A\u5411\uFF0C\u5176\u4ED6\u60C5\u51B5\uFF0C\u5B83\u4F1A\u8FD4\u56DE\u4E00\u4E2A 308 HTTP \u91CD\u5B9A\u5411\u54CD\u5E94\u3002\u3002\u5982\u679C\u8D44\u6E90\u4E0D\u5B58\u5728\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528 notFound \u51FD\u6570\u3002",paraId:95,tocIndex:47},{value:"permanentRedirect \u51FD\u6570\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF1A",paraId:96,tocIndex:47},{value:`permanentRedirect(path, type);
`,paraId:97,tocIndex:47},{value:"\u5176\u4E2D\uFF1A",paraId:98,tocIndex:47},{value:"path",paraId:99,tocIndex:47},{value:" \u5B57\u7B26\u4E32\u7C7B\u578B\uFF0C\u8868\u793A\u91CD\u5B9A\u5411\u7684 URL\uFF0C\u53EF\u4EE5\u662F\u76F8\u5BF9\u8DEF\u5F84\uFF0C\u4E5F\u53EF\u4EE5\u662F\u7EDD\u5BF9\u8DEF\u5F84",paraId:99,tocIndex:47},{value:"type",paraId:99,tocIndex:47},{value:" \u503C\u4E3A ",paraId:99,tocIndex:47},{value:"replace",paraId:99,tocIndex:47},{value:" \uFF08\u9ED8\u8BA4\uFF09\u6216\u8005 ",paraId:99,tocIndex:47},{value:"push",paraId:99,tocIndex:47},{value:"\uFF08Server Actions \u4E2D\u9ED8\u8BA4\uFF09\uFF0C\u8868\u793A\u91CD\u5B9A\u5411\u7684\u7C7B\u578B",paraId:99,tocIndex:47},{value:"\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0CpermanentRedirect \u5728 Sever Actions \u4E2D\u4F1A\u7528 ",paraId:100,tocIndex:47},{value:"push",paraId:100,tocIndex:47},{value:"\uFF08\u6DFB\u52A0\u5230\u6D4F\u89C8\u5668\u5386\u53F2\u6808\uFF09\uFF0C\u5728\u5176\u4ED6\u5730\u65B9\u7528 ",paraId:100,tocIndex:47},{value:"replace",paraId:100,tocIndex:47},{value:"\uFF08\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u6808\u4E2D\u66FF\u6362\u5F53\u524D\u7684 URL\uFF09\u3002\u4F60\u53EF\u4EE5\u901A\u8FC7\u6307\u5B9A ",paraId:100,tocIndex:47},{value:"type",paraId:100,tocIndex:47},{value:"\u53C2\u6570\u8986\u76D6\u6B64\u884C\u4E3A\u3002",paraId:100,tocIndex:47},{value:"\u6CE8\u610F\uFF1A\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",paraId:101,tocIndex:47},{value:"type",paraId:101,tocIndex:47},{value:"\u53C2\u6570\u6CA1\u6709\u6548\u679C\u3002",paraId:101,tocIndex:47},{value:"permanentRedirect \u51FD\u6570\u4E0D\u8FD4\u56DE\u4EFB\u4F55\u503C",paraId:102,tocIndex:47},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:103,tocIndex:47},{value:`// app/team/[id]/page.js
import { permanentRedirect } from 'next/navigation';

async function fetchTeam(id) {
  const res = await fetch('https://...');
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Profile({ params }) {
  const team = await fetchTeam(params.id);
  if (!team) {
    permanentRedirect('/login');
  }

  // ...
}
`,paraId:104,tocIndex:47},{value:"\u8C03\u7528 ",paraId:105,tocIndex:49},{value:"notFound()",paraId:105,tocIndex:49},{value:"\u51FD\u6570\u4F1A\u629B\u51FA\u4E00\u4E2A ",paraId:105,tocIndex:49},{value:"NEXT_NOT_FOUND",paraId:105,tocIndex:49},{value:"\u9519\u8BEF\uFF0C\u5E76\u4E14\u4E2D\u6B62\u8BE5\u8DEF\u7531\u6BB5\u7684\u6E32\u67D3\u3002\u901A\u8FC7\u58F0\u660E\u4E00\u4E2A ",paraId:105,tocIndex:49},{value:"not-found.js",paraId:105,tocIndex:49},{value:"\u6587\u4EF6\u53EF\u4EE5\u4E3A\u6B64\u8DEF\u7531\u6BB5\u6E32\u67D3\u4E00\u4E2A Not Found UI \u6765\u4F18\u96C5\u7684\u5904\u7406\u8FD9\u4E2A\u9519\u8BEF\u3002",paraId:105,tocIndex:49},{value:`// app/user/[id]/page.js
import { notFound } from 'next/navigation';

async function fetchUser(id) {
  const res = await fetch('https://...');
  if (!res.ok) return undefined;
  return res.json();
}

export default async function Profile({ params }) {
  const user = await fetchUser(params.id);

  if (!user) {
    notFound();
  }

  // ...
}
`,paraId:106,tocIndex:49},{value:"useParams",paraId:107,tocIndex:51},{value:"\u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6 hook\uFF0C\u7528\u4E8E\u8BFB\u53D6\u5F53\u524D URL \u7684\u52A8\u6001\u53C2\u6570\uFF1A",paraId:107,tocIndex:51},{value:`'use client';
// app/example-client-component.js
import { useParams } from 'next/navigation';

export default function ExampleClientComponent() {
  const params = useParams();

  // \u8DEF\u7531 -> /shop/[tag]/[item]
  // URL -> /shop/shoes/nike-air-max-97
  // \`params\` -> { tag: 'shoes', item: 'nike-air-max-97' }
  console.log(params);

  return <></>;
}
`,paraId:108,tocIndex:51},{value:"useParams",paraId:109,tocIndex:52},{value:"\u4E0D\u63A5\u6536\u4EFB\u4F55\u53C2\u6570\u3002",paraId:109,tocIndex:52},{value:`const params = useParams();
`,paraId:110,tocIndex:52},{value:"useParams",paraId:111,tocIndex:53},{value:" \u8FD4\u56DE\u4E00\u4E2A\u5305\u542B\u5F53\u524D\u8DEF\u7531\u52A8\u6001\u53C2\u6570\u7684\u5BF9\u8C61\uFF0C\u8BA9\u6211\u4EEC\u76F4\u63A5\u770B\u4E2A\u4F8B\u5B50\u5C31\u660E\u767D\u4E86\uFF1A",paraId:111,tocIndex:53},{value:"Route \u8DEF\u7EBF",paraId:112,tocIndex:53},{value:"URL \u7F51\u5740",paraId:112,tocIndex:53},{value:"useParams()",paraId:112,tocIndex:53},{value:"app/shop/page.js",paraId:112,tocIndex:53},{value:"/shop",paraId:112,tocIndex:53},{value:"null",paraId:112,tocIndex:53},{value:"app/shop/[slug]/page.js",paraId:112,tocIndex:53},{value:"/shop/1",paraId:112,tocIndex:53},{value:"{ slug: '1' }",paraId:112,tocIndex:53},{value:"app/shop/[tag]/[item]/page.js",paraId:112,tocIndex:53},{value:"/shop/1/2",paraId:112,tocIndex:53},{value:"{ tag: '1', item: '2' }",paraId:112,tocIndex:53},{value:"app/shop/[...slug]/page.js",paraId:112,tocIndex:53},{value:"/shop/1/2",paraId:112,tocIndex:53},{value:"{ slug: ['1', '2'] }",paraId:112,tocIndex:53},{value:"usePathname",paraId:113,tocIndex:55},{value:" \u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6 hook\uFF0C\u7528\u4E8E\u8BFB\u53D6\u5F53\u524D URL \u7684 pathname\u3002",paraId:113,tocIndex:55},{value:`'use client';
// app/example-client-component.js
import { usePathname } from 'next/navigation';

export default function ExampleClientComponent() {
  const pathname = usePathname();
  return <p>Current pathname: {pathname}</p>;
}
`,paraId:114,tocIndex:55},{value:"usePathname",paraId:115,tocIndex:55},{value:" \u9700\u8981\u7528\u5728\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u3002",paraId:115,tocIndex:55},{value:"usePathname",paraId:116,tocIndex:56},{value:"\u4E0D\u63A5\u6536\u4EFB\u4F55\u53C2\u6570\u3002",paraId:116,tocIndex:56},{value:`const pathname = usePathname();
`,paraId:117,tocIndex:56},{value:"usePathname \u8FD4\u56DE\u5F53\u524D URL pathname \u7684\u5B57\u7B26\u4E32\uFF0C\u8BA9\u6211\u4EEC\u76F4\u63A5\u770B\u4E2A\u4F8B\u5B50\u5C31\u660E\u767D\u4E86\uFF1A",paraId:118,tocIndex:57},{value:"URL",paraId:119,tocIndex:57},{value:"\u8FD4\u56DE\u503C",paraId:119,tocIndex:57},{value:"/",paraId:119,tocIndex:57},{value:"'/'",paraId:119,tocIndex:57},{value:"/dashboard",paraId:119,tocIndex:57},{value:"'/dashboard'",paraId:119,tocIndex:57},{value:"/dashboard?v=2",paraId:119,tocIndex:57},{value:"'/dashboard'",paraId:119,tocIndex:57},{value:"/blog/hello-world",paraId:119,tocIndex:57},{value:"'/blog/hello-world'",paraId:119,tocIndex:57},{value:"\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:120,tocIndex:57},{value:`'use client';
// app/example-client-component.js
import { usePathname, useSearchParams } from 'next/navigation';

function ExampleClientComponent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  useEffect(() => {
    // \u76D1\u542C\u8DEF\u7531\u53D8\u5316
  }, [pathname, searchParams]);
}
`,paraId:121,tocIndex:57},{value:"useRouter",paraId:122,tocIndex:59},{value:" hook \u7528\u4E8E\u5728\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u66F4\u6539\u8DEF\u7531\uFF1A",paraId:122,tocIndex:59},{value:`'use client';
// app/example-client-component.js
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push('/dashboard')}>
      Dashboard
    </button>
  );
}
`,paraId:123,tocIndex:59},{value:"\u5728 Next.js \u4E2D\uFF0C\u4F18\u5148\u63A8\u8350\u4F7F\u7528 ",paraId:124,tocIndex:59},{value:"<Link>",paraId:124,tocIndex:59},{value:" \u7EC4\u4EF6\u6765\u5BFC\u822A\uFF0C\u5176\u6B21\u518D\u9488\u5BF9\u4E00\u4E9B\u7279\u6B8A\u7684\u9700\u6C42\u4F7F\u7528 ",paraId:124,tocIndex:59},{value:"useRouter",paraId:124,tocIndex:59},{value:"\u3002",paraId:124,tocIndex:59},{value:"router.push(href: string, { scroll: boolean })",paraId:125,tocIndex:61},{value:"\u6267\u884C\u4E00\u4E2A\u5BA2\u6237\u7AEF\u5BFC\u822A\uFF0C\u4F1A\u5C06\u65B0\u5730\u5740\u6DFB\u52A0\u5230\u6D4F\u89C8\u5668\u5386\u53F2\u6808\u4E2D",paraId:125,tocIndex:61},{value:"router.replace(href: string, { scroll: boolean })",paraId:126,tocIndex:62},{value:"\u6267\u884C\u4E00\u4E2A\u5BA2\u6237\u7AEF\u5BFC\u822A\uFF0C\u4F46\u4E0D\u4F1A\u5728\u6D4F\u89C8\u5668\u5386\u53F2\u6808\u4E2D\u6DFB\u52A0\u65B0\u7684\u6761\u76EE\u3002",paraId:126,tocIndex:62},{value:"router.refresh()",paraId:127,tocIndex:63},{value:" \u5237\u65B0\u5F53\u524D\u8DEF\u7531",paraId:127,tocIndex:63},{value:"router.prefetch(href: string)",paraId:128,tocIndex:64},{value:"\u9884\u83B7\u53D6\u63D0\u4F9B\u7684\u8DEF\u7531\uFF0C\u52A0\u5FEB\u5BA2\u6237\u7AEF\u5BFC\u822A\u901F\u5EA6",paraId:128,tocIndex:64},{value:"router.back()",paraId:129,tocIndex:65},{value:" \u5411\u540E\u5BFC\u822A\u5230\u6D4F\u89C8\u5668\u5386\u53F2\u6808\u4E2D\u7684\u4E0A\u4E00\u9875",paraId:129,tocIndex:65},{value:"router.forward()",paraId:130,tocIndex:66},{value:"\u5411\u524D\u5BFC\u822A\u5230\u6D4F\u89C8\u5668\u5386\u53F2\u6808\u4E2D\u7684\u4E0B\u4E00\u9875",paraId:130,tocIndex:66},{value:"\u8BA9\u6211\u4EEC\u770B\u4E2A\u4F8B\u5B50\uFF1A",paraId:131,tocIndex:67},{value:`'use client';
// app/components/navigation-events.js
import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationEvents() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const url = \`\${pathname}?\${searchParams}\`;
    console.log(url);
    // ...
  }, [pathname, searchParams]);

  return null;
}
`,paraId:132,tocIndex:67},{value:"\u6CE8\u610F\uFF1A\u5F53\u4F7F\u7528 App Router \u7684\u65F6\u5019\uFF0C\u4ECE",paraId:133,tocIndex:67},{value:"next/navigation",paraId:133,tocIndex:67},{value:"\u4E2D\u5BFC\u5165 ",paraId:133,tocIndex:67},{value:"useRouter",paraId:133,tocIndex:67},{value:" \uFF0C\u800C\u975E ",paraId:133,tocIndex:67},{value:"next/router",paraId:133,tocIndex:67},{value:"\u3002Pages Router \u4E0B\u7684 pathname \u6539\u4E3A\u4F7F\u7528 ",paraId:133,tocIndex:67},{value:"usePathname()",paraId:133,tocIndex:67},{value:"\uFF0CPages Router \u4E0B\u7684 query \u6539\u4E3A\u4F7F\u7528 ",paraId:133,tocIndex:67},{value:"useSearchParams()",paraId:133,tocIndex:67},{value:"\u3002",paraId:133,tocIndex:67},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u901A\u8FC7\u7EC4\u5408 ",paraId:134,tocIndex:67},{value:"usePathname",paraId:134,tocIndex:67},{value:" \u548C ",paraId:134,tocIndex:67},{value:"useSearchParams",paraId:134,tocIndex:67},{value:" \u6765\u76D1\u542C\u9875\u9762\u66F4\u6539\u3002\u6211\u4EEC\u53EF\u4EE5\u5C06\u8FD9\u4E2A\u51FD\u6570\u5BFC\u5165\u5230\u5E03\u5C40\u4E2D\uFF1A",paraId:134,tocIndex:67},{value:`// app/layout.js
import { Suspense } from 'react';
import { NavigationEvents } from './components/navigation-events';

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Suspense fallback={null}>
          <NavigationEvents />
        </Suspense>
      </body>
    </html>
  );
}
`,paraId:135,tocIndex:67},{value:"\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u4E4B\u6240\u4EE5\u80FD\u591F\u751F\u6548\uFF0C\u662F\u56E0\u4E3A\u5728\u9759\u6001\u6E32\u67D3\u7684\u65F6\u5019\uFF0C ",paraId:136,tocIndex:67},{value:"useSearchParams()",paraId:136,tocIndex:67},{value:"\u4F1A\u5BFC\u81F4\u5BA2\u6237\u7AEF\u6E32\u67D3\u5230\u6700\u8FD1\u7684 Suspense \u8FB9\u754C\u3002",paraId:136,tocIndex:67},{value:"\u518D\u6362\u4E00\u4E2A\u4F8B\u5B50\uFF0C\u5F53\u5BFC\u822A\u5230\u65B0\u8DEF\u7531\u65F6\uFF0CNext.js \u4F1A\u9ED8\u8BA4\u6EDA\u52A8\u5230\u9875\u9762\u7684\u9876\u90E8\u3002\u4F60\u53EF\u4EE5\u5728 ",paraId:137,tocIndex:67},{value:"router.push()",paraId:137,tocIndex:67},{value:" \u6216 ",paraId:137,tocIndex:67},{value:"router.replace()",paraId:137,tocIndex:67},{value:"\u4E2D\u4F20\u9012 ",paraId:137,tocIndex:67},{value:"scroll: false",paraId:137,tocIndex:67},{value:"\u6765\u7981\u7528\u8BE5\u884C\u4E3A\u3002",paraId:137,tocIndex:67},{value:`'use client';
// app/example-client-component.jsx
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();

  return (
    <button
      type="button"
      onClick={() => router.push('/dashboard', { scroll: false })}
    >
      Dashboard
    </button>
  );
}
`,paraId:138,tocIndex:67},{value:"useSearchParams",paraId:139,tocIndex:69},{value:"\u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6 hook\uFF0C\u7528\u4E8E\u8BFB\u53D6\u5F53\u524D URL \u7684\u67E5\u8BE2\u5B57\u7B26\u4E32\u3002",paraId:139,tocIndex:69},{value:"useSearchParams",paraId:139,tocIndex:69},{value:" \u8FD4\u56DE\u4E00\u4E2A\u53EA\u8BFB\u7248\u672C\u7684 ",paraId:139,tocIndex:69},{value:"URLSearchParams",paraId:139,tocIndex:69},{value:"\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:139,tocIndex:69},{value:`'use client';
// app/dashboard/search-bar.js
import { useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  // URL -> \`/dashboard?search=my-project\`
  // \`search\` -> 'my-project'
  return <>Search: {search}</>;
}
`,paraId:140,tocIndex:69},{value:"useSearchParams",paraId:141,tocIndex:70},{value:" \u4E0D\u63A5\u6536\u4EFB\u4F55\u53C2\u6570\u3002",paraId:141,tocIndex:70},{value:`const searchParams = useSearchParams();
`,paraId:142,tocIndex:70},{value:"useSearchParams",paraId:143,tocIndex:71},{value:" \u8FD4\u56DE\u4E00\u4E2A\u53EA\u8BFB\u7248\u672C\u7684 ",paraId:143,tocIndex:71},{value:"URLSearchParams",paraId:143,tocIndex:71},{value:"\uFF0C\u5B83\u5305\u542B\u4E00\u4E9B\u8BFB\u53D6 URL \u67E5\u8BE2\u53C2\u6570\u7684\u5DE5\u5177\u65B9\u6CD5\uFF0C\u6BD4\u5982\uFF1A",paraId:143,tocIndex:71},{value:"URLSearchParams.get()",paraId:144,tocIndex:71},{value:" \u8FD4\u56DE\u67E5\u8BE2\u53C2\u6570\u7684\u7B2C\u4E00\u4E2A\u627E\u5230\u7684\u503C\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:144,tocIndex:71},{value:"URL",paraId:145,tocIndex:71},{value:'searchParams.get("a")',paraId:145,tocIndex:71},{value:"/dashboard?a=1",paraId:145,tocIndex:71},{value:"'1'",paraId:145,tocIndex:71},{value:"/dashboard?a=",paraId:145,tocIndex:71},{value:"''",paraId:145,tocIndex:71},{value:"/dashboard?b=3",paraId:145,tocIndex:71},{value:"null",paraId:145,tocIndex:71},{value:"/dashboard?a=1&a=2",paraId:145,tocIndex:71},{value:"'1' \uFF08\u8FD4\u56DE\u7B2C\u4E00\u4E2A\uFF0C\u8981\u83B7\u53D6\u6240\u6709\uFF0C\u4F7F\u7528 getAll()\uFF09",paraId:145,tocIndex:71},{value:"URLSearchParams.has()",paraId:146,tocIndex:71},{value:" \u8FD4\u56DE\u6307\u5B9A\u7684\u67E5\u8BE2\u53C2\u6570\u662F\u5426\u5B58\u5728\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:146,tocIndex:71},{value:"URL",paraId:147,tocIndex:71},{value:'searchParams.has("a")',paraId:147,tocIndex:71},{value:"/dashboard?a=1",paraId:147,tocIndex:71},{value:"true",paraId:147,tocIndex:71},{value:"/dashboard?b=3",paraId:147,tocIndex:71},{value:"false",paraId:147,tocIndex:71},{value:"\u5176\u4ED6\u65B9\u6CD5\u8FD8\u6709 ",paraId:148,tocIndex:71},{value:"getAll()",paraId:148,tocIndex:71},{value:"\u3001 ",paraId:148,tocIndex:71},{value:"keys()",paraId:148,tocIndex:71},{value:"\u3001 ",paraId:148,tocIndex:71},{value:"values()",paraId:148,tocIndex:71},{value:"\u3001 ",paraId:148,tocIndex:71},{value:"entries()",paraId:148,tocIndex:71},{value:"\u3001 ",paraId:148,tocIndex:71},{value:"forEach()",paraId:148,tocIndex:71},{value:" \u548C ",paraId:148,tocIndex:71},{value:"toString()",paraId:148,tocIndex:71},{value:"\uFF0C\u90FD\u662F\u57FA\u4E8E ",paraId:148,tocIndex:71},{value:"URLSearchParams",paraId:148,tocIndex:71},{value:"\u3002",paraId:148,tocIndex:71},{value:"\u5982\u679C\u8DEF\u7531\u662F\u9759\u6001\u6E32\u67D3\uFF0C\u8C03\u7528 ",paraId:149,tocIndex:73},{value:"useSearchParams()",paraId:149,tocIndex:73},{value:" \u4F1A\u5BFC\u81F4\u6811\u5230\u6700\u8FD1\u7684 ",paraId:149,tocIndex:73},{value:"Suspense",paraId:149,tocIndex:73},{value:"\u8FB9\u754C\u53D1\u751F\u5BA2\u6237\u7AEF\u6E32\u67D3\u3002\u5E94\u8BE5\u5C3D\u53EF\u80FD\u5C06\u4F7F\u7528 ",paraId:149,tocIndex:73},{value:"useSearchParams",paraId:149,tocIndex:73},{value:" \u7684\u7EC4\u4EF6\u653E\u5728 ",paraId:149,tocIndex:73},{value:"Suspense",paraId:149,tocIndex:73},{value:" \u8FB9\u754C\u4E2D\u4EE5\u51CF\u5C11\u5BA2\u6237\u7AEF\u6E32\u67D3\u7684\u5185\u5BB9\uFF0C\u4E3E\u4E2A\u4F8B\u5B50\uFF1A",paraId:149,tocIndex:73},{value:`'use client';
// app/dashboard/search-bar.js
import { useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  // \u5F53\u4F7F\u7528\u9759\u6001\u6E32\u67D3\u7684\u65F6\u5019\uFF0C\u4E0D\u4F1A\u5728\u670D\u52A1\u7AEF\u6253\u5370
  console.log(search);

  return <>Search: {search}</>;
}
`,paraId:150,tocIndex:73},{value:`// app/dashboard/page.js
import { Suspense } from 'react';
import SearchBar from './search-bar';

function SearchBarFallback() {
  return <>placeholder</>;
}

export default function Page() {
  return (
    <>
      <nav>
        <Suspense fallback={<SearchBarFallback />}>
          <SearchBar />
        </Suspense>
      </nav>
      <h1>Dashboard</h1>
    </>
  );
}
`,paraId:151,tocIndex:73},{value:"\u5982\u679C\u8DEF\u7531\u662F\u52A8\u6001\u6E32\u67D3\u7684\uFF0C\u5728\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\u521D\u59CB\u670D\u52A1\u7AEF\u6E32\u67D3\u7684\u65F6\u5019\uFF0C",paraId:152,tocIndex:74},{value:"useSearchParams",paraId:152,tocIndex:74},{value:" \u5728\u670D\u52A1\u7AEF\u662F\u53EF\u7528\u7684\u3002",paraId:152,tocIndex:74},{value:`'use client';
// app/dashboard/search-bar.js
import { useSearchParams } from 'next/navigation';

export default function SearchBar() {
  const searchParams = useSearchParams();

  const search = searchParams.get('search');

  // \u521D\u59CB\u6E32\u67D3\u7684\u65F6\u5019\u4F1A\u5728\u670D\u52A1\u7AEF\u6253\u5370\uFF0C\u540E\u7EED\u5BFC\u822A\u4E2D\u5BA2\u6237\u7AEF\u4E5F\u4F1A\u6253\u5370
  console.log(search);

  return <>Search: {search}</>;
}
`,paraId:153,tocIndex:74},{value:`// app/dashboard/page.js
import SearchBar from './search-bar';

export const dynamic = 'force-dynamic';

export default function Page() {
  return (
    <>
      <nav>
        <SearchBar />
      </nav>
      <h1>Dashboard</h1>
    </>
  );
}
`,paraId:154,tocIndex:74},{value:"\u5728 Page\uFF08\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF09\u4E2D\u83B7\u53D6\u53C2\u6570\uFF0C\u4F7F\u7528 ",paraId:155,tocIndex:75},{value:"searchParams",paraId:155,tocIndex:75},{value:` prop\u3002
Layout \u4E2D\uFF08\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF09\u5E76\u4E0D\u4F1A\u6709 `,paraId:155,tocIndex:75},{value:"searchParams",paraId:155,tocIndex:75},{value:" prop\uFF0C\u8FD9\u662F\u56E0\u4E3A\u5728\u5171\u4EAB\u4E00\u4E2A\u5E03\u5C40\u7684\u591A\u4E2A\u9875\u9762\u4E4B\u95F4\u5BFC\u822A\u7684\u65F6\u5019\u5E76\u4E0D\u4F1A\u91CD\u65B0\u6E32\u67D3\uFF0C\u8FD9\u4E5F\u5C31\u5BFC\u81F4 searchParams \u4E0D\u4F1A\u53D1\u751F\u53D8\u5316\u3002\u6240\u4EE5\u8981\u60F3\u83B7\u5F97\u51C6\u786E\u7684\u67E5\u8BE2\u53C2\u6570\uFF0C\u4F7F\u7528 Page \u7684 ",paraId:155,tocIndex:75},{value:"searchParams",paraId:155,tocIndex:75},{value:" prop \u6216\u662F\u5728\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",paraId:155,tocIndex:75},{value:"useSearchParams",paraId:155,tocIndex:75},{value:" hook \u5B83\u4EEC\u4F1A\u5728\u5BA2\u6237\u7AEF\u91CD\u65B0\u6E32\u67D3\u7684\u65F6\u5019\u5E26\u4E0A\u6700\u65B0\u7684 searchParams\u3002",paraId:155,tocIndex:75},{value:"\u4F60\u53EF\u4EE5\u4F7F\u7528 useRouter \u6216\u8005 Link \u8BBE\u7F6E\u65B0\u7684 ",paraId:156,tocIndex:76},{value:"searchParams",paraId:156,tocIndex:76},{value:"\u3002\u5F53\u8DEF\u7531\u53D8\u5316\u540E\uFF0C\u5F53\u524D\u7684 page.js \u4F1A\u6536\u5230\u4E00\u4E2A\u66F4\u65B0\u7684 ",paraId:156,tocIndex:76},{value:"searchParams",paraId:156,tocIndex:76},{value:" prop\uFF1A",paraId:156,tocIndex:76},{value:`// app/example-client-component.js
export default function ExampleClientComponent() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createQueryString = useCallback(
    (name, value) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams],
  );

  return (
    <>
      <p>Sort By</p>

      {/* \u4F7F\u7528 useRouter */}
      <button
        onClick={() => {
          // <pathname>?sort=asc
          router.push(pathname + '?' + createQueryString('sort', 'asc'));
        }}
      >
        ASC
      </button>

      {/* \u4F7F\u7528 <Link> */}
      <Link
        href={
          // <pathname>?sort=desc
          pathname + '?' + createQueryString('sort', 'desc')
        }
      >
        DESC
      </Link>
    </>
  );
}
`,paraId:157,tocIndex:76},{value:"https://nextjs.org/docs/app/api-reference/functions",paraId:158,tocIndex:77}]}}]);
