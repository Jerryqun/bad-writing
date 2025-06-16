"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[5049],{85049:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u672C\u7BC7\u6211\u4EEC\u6765\u5B9E\u73B0\u53F3\u4FA7\u7B14\u8BB0\u7F16\u8F91\u90E8\u5206\u3002",paraId:0,tocIndex:0},{value:"\u5F53\u70B9\u51FB ",paraId:1,tocIndex:1},{value:"New",paraId:1,tocIndex:1},{value:" \u6309\u94AE\u7684\u65F6\u5019\u8FDB\u5165\u7F16\u8F91\u754C\u9762\uFF1A",paraId:1,tocIndex:1},{value:"\u5F53\u70B9\u51FB\u5177\u4F53\u7B14\u8BB0\u7684 ",paraId:2,tocIndex:1},{value:"Edit",paraId:2,tocIndex:1},{value:" \u6309\u94AE\u7684\u65F6\u5019\u8FDB\u5165\u8BE5\u7B14\u8BB0\u7684\u7F16\u8F91\u9875\u9762\uFF1A",paraId:2,tocIndex:1},{value:"\u56DE\u5FC6\u4E0B\u4E4B\u524D\u7684\u8DEF\u7531\u8BBE\u8BA1\uFF0C\u5F53\u70B9\u51FB ",paraId:3,tocIndex:1},{value:"New",paraId:3,tocIndex:1},{value:" \u7684\u65F6\u5019\uFF0C\u5BFC\u822A\u81F3 ",paraId:3,tocIndex:1},{value:"/note/edit",paraId:3,tocIndex:1},{value:"\u8DEF\u7531\uFF0C\u5F53\u70B9\u51FB ",paraId:3,tocIndex:1},{value:"Edit",paraId:3,tocIndex:1},{value:" \u7684\u65F6\u5019\uFF0C\u5BFC\u822A\u81F3 ",paraId:3,tocIndex:1},{value:"/note/edit/xxxx",paraId:3,tocIndex:1},{value:" \u8DEF\u7531\u3002",paraId:3,tocIndex:1},{value:"\u90A3\u4E48\u6211\u4EEC\u5F00\u59CB\u52A8\u624B\u5427\uFF01",paraId:4,tocIndex:1},{value:"/app/note/edit/page.js",paraId:5,tocIndex:1},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:5,tocIndex:1},{value:`import NoteEditor from '@/components/NoteEditor';

export default async function EditPage() {
  return <NoteEditor note={null} initialTitle="Untitled" initialBody="" />;
}
`,paraId:6,tocIndex:1},{value:"/app/note/edit/loading.js",paraId:7,tocIndex:1},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:7,tocIndex:1},{value:`export default function EditSkeleton() {
  return (
    <div
      className="note-editor skeleton-container"
      role="progressbar"
      aria-busy="true"
    >
      <div className="note-editor-form">
        <div className="skeleton v-stack" style={{ height: '3rem' }} />
        <div className="skeleton v-stack" style={{ height: '100%' }} />
      </div>
      <div className="note-editor-preview">
        <div className="note-editor-menu">
          <div
            className="skeleton skeleton--button"
            style={{ width: '8em', height: '2.5em' }}
          />
          <div
            className="skeleton skeleton--button"
            style={{ width: '8em', height: '2.5em', marginInline: '12px 0' }}
          />
        </div>
        <div
          className="note-title skeleton"
          style={{ height: '3rem', width: '65%', marginInline: '12px 1em' }}
        />
        <div className="note-preview">
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
          <div className="skeleton v-stack" style={{ height: '1.5em' }} />
        </div>
      </div>
    </div>
  );
}
`,paraId:8,tocIndex:1},{value:"\u4F60\u53EF\u80FD\u4F1A\u95EE\uFF0C\u540C\u7EA7\u7684 ",paraId:9,tocIndex:1},{value:"page.js",paraId:9,tocIndex:1},{value:" \u53C8\u6CA1\u6709\u6570\u636E\u8BF7\u6C42\uFF0C\u6DFB\u52A0 ",paraId:9,tocIndex:1},{value:"loading.js",paraId:9,tocIndex:1},{value:" \u6709\u4EC0\u4E48\u7528\uFF1F",paraId:9,tocIndex:1},{value:"\u540C\u7EA7\u7684",paraId:10,tocIndex:1},{value:"page.js",paraId:10,tocIndex:1},{value:"\u786E\u5B9E\u6CA1\u6709\u8BF7\u6C42\uFF0C\u4F46 ",paraId:10,tocIndex:1},{value:"loading.js",paraId:10,tocIndex:1},{value:"\u4F1A\u5C06 ",paraId:10,tocIndex:1},{value:"page.js",paraId:10,tocIndex:1},{value:" \u548C\u5176 ",paraId:10,tocIndex:1},{value:"children",paraId:10,tocIndex:1},{value:" \u90FD\u5305\u88F9\u5728 ",paraId:10,tocIndex:1},{value:"<Suspense>",paraId:10,tocIndex:1},{value:" \u4E2D\uFF0C\u6240\u4EE5 ",paraId:10,tocIndex:1},{value:"/app/note/edit/[id]/page.js",paraId:10,tocIndex:1},{value:"\u4E2D\u7684\u8BF7\u6C42\u4E5F\u4F1A\u89E6\u53D1\u8BE5 ",paraId:10,tocIndex:1},{value:"loading.js",paraId:10,tocIndex:1},{value:"\u3002",paraId:10,tocIndex:1},{value:"/app/note/edit/[id]/page.js",paraId:11,tocIndex:1},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:11,tocIndex:1},{value:`import NoteEditor from '@/components/NoteEditor';
import { getNote } from '@/lib/redis';

export default async function EditPage({ params }) {
  const noteId = params.id;
  const note = await getNote(noteId);

  // \u8BA9\u6548\u679C\u66F4\u660E\u663E
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(5000);

  if (note === null) {
    return (
      <div className="note--empty-state">
        <span className="note-text--empty-state">
          Click a note on the left to view something! \u{1F97A}
        </span>
      </div>
    );
  }

  return (
    <NoteEditor
      noteId={noteId}
      initialTitle={note.title}
      initialBody={note.content}
    />
  );
}
`,paraId:12,tocIndex:1},{value:"\u6211\u4EEC\u62BD\u79BB\u4E86\u4E00\u4E2A ",paraId:13,tocIndex:1},{value:"<NoteEditor>",paraId:13,tocIndex:1},{value:" \u7EC4\u4EF6\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u529F\u80FD\uFF0C",paraId:13,tocIndex:1},{value:"/components/NoteEditor.js",paraId:13,tocIndex:1},{value:" \u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:13,tocIndex:1},{value:`'use client';

import { useState } from 'react';
import NotePreview from '@/components/NotePreview';
import { useFormStatus } from 'react-dom';

export default function NoteEditor({ noteId, initialTitle, initialBody }) {
  const { pending } = useFormStatus();
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const isDraft = !noteId;

  return (
    <div className="note-editor">
      <form className="note-editor-form" autoComplete="off">
        <label className="offscreen" htmlFor="note-title-input">
          Enter a title for your note
        </label>
        <input
          id="note-title-input"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          Enter the body for your note
        </label>
        <textarea
          value={body}
          id="note-body-input"
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <div className="note-editor-preview">
        <form className="note-editor-menu" role="menubar">
          <button
            className="note-editor-done"
            disabled={pending}
            type="submit"
            role="menuitem"
          >
            <img
              src="/checkmark.svg"
              width="14px"
              height="10px"
              alt=""
              role="presentation"
            />
            Done
          </button>
          {!isDraft && (
            <button
              className="note-editor-delete"
              disabled={pending}
              role="menuitem"
            >
              <img
                src="/cross.svg"
                width="10px"
                height="10px"
                alt=""
                role="presentation"
              />
              Delete
            </button>
          )}
        </form>
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  );
}
`,paraId:14,tocIndex:1},{value:"\u56E0\u4E3A\u9700\u8981\u63A7\u5236\u8F93\u5165\u6846\u7684\u72B6\u6001\uFF0C\u6240\u4EE5 ",paraId:15,tocIndex:1},{value:"<NoteEditor>",paraId:15,tocIndex:1},{value:" \u4F7F\u7528\u4E86\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u6211\u4EEC\u5728 ",paraId:15,tocIndex:1},{value:"<NotePreview>",paraId:15,tocIndex:1},{value:" \u4E2D\u5F15\u7528\u4E86 ",paraId:15,tocIndex:1},{value:"<NotePreview>",paraId:15,tocIndex:1},{value:"\u7EC4\u4EF6\uFF0C\u7528\u4E8E\u5B9E\u73B0\u7F16\u8F91\u65F6\u7684\u5B9E\u65F6\u9884\u89C8\u529F\u80FD\u3002",paraId:15,tocIndex:1},{value:"\u6B64\u65F6\u7F16\u8F91\u9875\u9762\u5E94\u8BE5\u5DF2\u7ECF\u53EF\u4EE5\u6B63\u5E38\u663E\u793A\uFF1A",paraId:16,tocIndex:1},{value:"\u6B64\u65F6 ",paraId:17,tocIndex:1},{value:"Done",paraId:17,tocIndex:1},{value:" \u548C ",paraId:17,tocIndex:1},{value:"Delete",paraId:17,tocIndex:1},{value:" \u6309\u94AE\u8FD8\u4E0D\u80FD\u4F7F\u7528\uFF0C\u8FD9\u91CC\u6211\u4EEC\u4F7F\u7528 Server Actions \u6765\u5B9E\u73B0\u3002\u4F46\u5B9E\u73B0\u4E4B\u524D\uFF0C\u6211\u4EEC\u5148\u770B\u4E0B\u76EE\u524D\u7684\u5B9E\u73B0\u4E2D\u4E00\u4E9B\u8981\u6CE8\u610F\u7684\u70B9\u3002",paraId:17,tocIndex:1},{value:"\u524D\u9762\u6211\u4EEC\u8BB2\u5230\u5173\u4E8E\u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\u4F7F\u7528\u6307\u5357\uFF0C\u5176\u4E2D\u6709\u4E00\u6761\uFF1A",paraId:18,tocIndex:2},{value:"\u670D\u52A1\u7AEF\u7EC4\u4EF6\u53EF\u4EE5\u5BFC\u5165\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u4F46\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E0D\u80FD\u5BFC\u5165\u670D\u52A1\u7AEF\u7EC4\u4EF6",paraId:19,tocIndex:2},{value:"\u4F46\u662F\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C31\u5F88\u5947\u602A\u4E86\u3002",paraId:20,tocIndex:2},{value:"<NoteEditor>",paraId:20,tocIndex:2},{value:" \u662F\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C",paraId:20,tocIndex:2},{value:"<NotePreview>",paraId:20,tocIndex:2},{value:"\u662F\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u4F46\u6211\u4EEC\u5374\u5728 ",paraId:20,tocIndex:2},{value:"<NoteEditor>",paraId:20,tocIndex:2},{value:" \u4E2D\u5F15\u7528\u4E86 ",paraId:20,tocIndex:2},{value:"<NotePreview>",paraId:20,tocIndex:2},{value:"\u7EC4\u4EF6\uFF0C\u4E0D\u662F\u8BF4\u4E0D\u53EF\u4EE5\u5417\uFF1F\u600E\u4E48\u8FD8\u6210\u529F\u6E32\u67D3\u4E86\uFF01",paraId:20,tocIndex:2},{value:"\u8FD9\u662F\u4E00\u4E2A\u521D\u5B66\u8005\u7ECF\u5E38\u4F1A\u9047\u5230\u7684\u8BEF\u533A\u3002\u8BA9\u6211\u4EEC\u56DE\u5FC6\u4E0B",paraId:21,tocIndex:2},{value:"\u300A\u6E32\u67D3\u7BC7 | \u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u300B",paraId:21,tocIndex:2},{value:"\u4E2D\u662F\u5982\u4F55\u5B9A\u4E49\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\uFF1A",paraId:21,tocIndex:2},{value:"\u6211\u4EEC\u4F1A\u5728\u6587\u4EF6\u9876\u90E8\u6DFB\u52A0\u4E00\u4E2A ",paraId:22,tocIndex:2},{value:"'use client'",paraId:22,tocIndex:2},{value:" \u58F0\u660E\u3002\u4F46\u51C6\u786E\u7684\u8BF4\uFF0C",paraId:22,tocIndex:2},{value:"'use client'",paraId:22,tocIndex:2},{value:" \u58F0\u660E\u7684\u662F\u670D\u52A1\u7AEF\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E4B\u95F4\u7684\u8FB9\u754C\uFF0C\u8FD9\u610F\u5473\u7740\uFF0C\u5F53\u4F60\u5728\u6587\u4EF6\u4E2D\u5B9A\u4E49\u4E86\u4E00\u4E2A ",paraId:22,tocIndex:2},{value:"'use client'",paraId:22,tocIndex:2},{value:"\uFF0C\u5BFC\u5165\u7684\u5176\u4ED6\u6A21\u5757\u5305\u62EC\u5B50\u7EC4\u4EF6\uFF0C\u90FD\u4F1A\u88AB\u89C6\u4E3A\u5BA2\u6237\u7AEF bundle \u7684\u4E00\u90E8\u5206\u3002",paraId:22,tocIndex:2},{value:"\u6362\u53E5\u8BDD\u8BF4\uFF0C\u6240\u6709\u7EC4\u4EF6\u90FD\u662F\u670D\u52A1\u5668\u7EC4\u4EF6\uFF0C\u9664\u975E\u5B83\u4F7F\u7528\u4E86 ",paraId:23,tocIndex:2},{value:"'use client'",paraId:23,tocIndex:2},{value:" \u6307\u4EE4\uFF0C\u6216\u8005\u88AB\u5BFC\u5165\u5230 ",paraId:23,tocIndex:2},{value:"'use client'",paraId:23,tocIndex:2},{value:" \u6A21\u5757\u4E2D\u3002\u6B64\u65F6\u5B83\u4EEC\u4F1A\u88AB\u89C6\u4E3A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u3002\u89C6\u4E3A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u5C31\u610F\u5473\u7740\u5B83\u7684\u4EE3\u7801\u8981\u88AB\u6253\u5305\u5230\u5BA2\u6237\u7AEF bundle \u4E2D\u3002",paraId:23,tocIndex:2},{value:"\u6BD4\u5982\u8FD9\u91CC\u7684 ",paraId:24,tocIndex:2},{value:"<NotePreview>",paraId:24,tocIndex:2},{value:"\uFF0C\u5B83\u88AB\u5BFC\u5165\u5230 ",paraId:24,tocIndex:2},{value:"<NoteEditor>",paraId:24,tocIndex:2},{value:"\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\uFF0C\u5B83\u5C31\u53D8\u6210\u4E86\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u3002\u53D8\u6210\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u610F\u5473\u7740 ",paraId:24,tocIndex:2},{value:"<NotePreview>",paraId:24,tocIndex:2},{value:"\u4E2D\u7684\u4EE3\u7801\uFF0C\u5305\u62EC\u7528\u5230\u7684 ",paraId:24,tocIndex:2},{value:"marked",paraId:24,tocIndex:2},{value:" \u548C ",paraId:24,tocIndex:2},{value:"sanitize-html",paraId:24,tocIndex:2},{value:"\u5E93\u4E5F\u8981\u88AB\u6253\u5305\u5230\u5BA2\u6237\u7AEF\u4E2D\uFF0C\u8981\u77E5\u9053\uFF0C\u8FD9\u4E24\u4E2A\u5E93\u6CA1\u538B\u7F29\u524D\u53EF\u662F\u6709\u51E0\u767E kB \u7684\u3002",paraId:24,tocIndex:2},{value:"\u6240\u4EE5\u6211\u4EEC\u624D\u8981\u5C06\u670D\u52A1\u7AEF\u7EC4\u4EF6\u901A\u8FC7 props \u7684\u5F62\u5F0F\u4F20\u7ED9\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u5F53\u901A\u8FC7\u8FD9\u79CD\u5F62\u5F0F\u7684\u65F6\u5019\uFF0C\u7EC4\u4EF6\u8FD8\u662F\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u4F1A\u5728\u670D\u52A1\u7AEF\u6267\u884C\u6E32\u67D3\uFF0C\u4EE3\u7801\u4E5F\u4E0D\u4F1A\u6253\u5305\u5230\u5BA2\u6237\u7AEF\u4E2D\u3002\u5F53\u7136\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u6211\u4EEC\u5C31\u662F\u9700\u8981\u5728\u5BA2\u6237\u7AEF\u6E32\u67D3 markdown \u6587\u4EF6\uFF0C\u6240\u4EE5\u4EE3\u7801\u5C31\u662F\u8981\u6253\u5305\u5230\u5BA2\u6237\u7AEF\u4E2D\u7684\uFF0C\u6CA1\u6709\u529E\u6CD5\u907F\u514D\u3002",paraId:25,tocIndex:2},{value:"\u8BA9\u6211\u4EEC\u67E5\u770B\u4E0B ",paraId:26,tocIndex:2},{value:"http://localhost:3000/note/1702459188837",paraId:26,tocIndex:2},{value:"\u6B64\u65F6\u7684\u6E90\u4EE3\u7801\uFF1A",paraId:26,tocIndex:2},{value:"\u9884\u89C8\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u867D\u7136\u7528\u4E86 ",paraId:27,tocIndex:2},{value:"<NotePreview>",paraId:27,tocIndex:2},{value:" \u8FD9\u4E2A\u7EC4\u4EF6\uFF0C\u4F46\u662F\u4EE3\u7801\u6CA1\u6709\u6253\u5305\u5230\u5BA2\u6237\u7AEF\u4E2D\u3002\u4F46\u662F\u5F53\u6211\u4EEC\u6253\u5F00 ",paraId:27,tocIndex:2},{value:"http://localhost:3000/note/edit/1702459188837",paraId:27,tocIndex:2},{value:"\uFF1A",paraId:27,tocIndex:2},{value:"\u4F60\u4F1A\u53D1\u73B0\uFF0C\u4E0B\u8F7D\u4E86\u5BA2\u6237\u7AEF\u7EC4\u4EF6 ",paraId:28,tocIndex:2},{value:"<NoteEditor>",paraId:28,tocIndex:2},{value:" \u548C ",paraId:28,tocIndex:2},{value:"<NotePreview>",paraId:28,tocIndex:2},{value:"\uFF0C\u5BF9\u5E94\u4E5F\u4F7F\u7528\u4E86\u5F88\u591A\u5E93\u3002",paraId:28,tocIndex:2},{value:"page.js",paraId:28,tocIndex:2},{value:" \u4E5F\u53D8\u5927\u4E86\u5F88\u591A\uFF08424 kB\uFF09\uFF1A",paraId:28,tocIndex:2},{value:"\u6700\u540E\u518D\u8BF4\u8BF4\u4F7F\u7528\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u65F6\u7684\u4E00\u4E2A\u6CE8\u610F\u4E8B\u9879\uFF0C\u90A3\u5C31\u662F\u4E0D\u8981\u4F7F\u7528 ",paraId:29,tocIndex:2},{value:"async/await",paraId:29,tocIndex:2},{value:"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u62A5\u9519\uFF1A",paraId:29,tocIndex:2},{value:"\u5F53\u70B9\u51FB ",paraId:30,tocIndex:3},{value:"Done",paraId:30,tocIndex:3},{value:" \u7684\u65F6\u5019\uFF0C\u5BFC\u822A\u81F3\u5BF9\u5E94\u7684\u7B14\u8BB0\u9884\u89C8\u9875\u9762 ",paraId:30,tocIndex:3},{value:"/note/xxxx",paraId:30,tocIndex:3},{value:"\u3002\u5F53\u70B9\u51FB ",paraId:30,tocIndex:3},{value:"Delete",paraId:30,tocIndex:3},{value:" \u7684\u65F6\u5019\uFF0C\u5BFC\u822A\u81F3\u9996\u9875\u3002",paraId:30,tocIndex:3},{value:"\u6B63\u5E38\u5F00\u53D1\u7B14\u8BB0\u7684\u589E\u52A0\u3001\u66F4\u65B0\u548C\u5220\u9664\u529F\u80FD\uFF0C\u4E3A\u4E86\u5B9E\u73B0\u524D\u540E\u7AEF\u4EA4\u4E92\uFF0C\u53EF\u80FD\u8981\u5199\u591A\u4E2A\u63A5\u53E3\u6765\u5B9E\u73B0\uFF0C\u6BD4\u5982\u5F53\u70B9\u51FB\u5220\u9664\u7684\u65F6\u5019\uFF0C\u8C03\u7528\u5220\u9664\u63A5\u53E3\uFF0C\u63A5\u53E3\u8FD4\u56DE\u6210\u529F\uFF0C\u524D\u7AEF\u8DF3\u8F6C\u81F3\u9996\u9875\u3002\u4F46\u65E2\u7136\u6211\u4EEC\u90FD\u7528\u4E86 Next.js 14 \u4E86\uFF0C\u6CA1\u5FC5\u8981\u8FD9\u4E48\u9EBB\u70E6\uFF0CServer Actions \u76F4\u63A5\u641E\u5B9A\uFF0C\u7701\u7684\u4E00\u4E2A\u4E2A\u5199\u63A5\u53E3\u4E86\u3002",paraId:31,tocIndex:3},{value:"\u4FEE\u6539 ",paraId:32,tocIndex:3},{value:"/components/NoteEditor.js",paraId:32,tocIndex:3},{value:" \u4EE3\u7801\uFF1A",paraId:32,tocIndex:3},{value:`'use client';

// ...
import { deleteNote, saveNote } from '../app/actions';

export default function NoteEditor({ noteId, initialTitle, initialBody }) {
  //...
  return (
    <div className="note-editor">
      // ...
      <div className="note-editor-preview">
        <form className="note-editor-menu" role="menubar">
          <button
            className="note-editor-done"
            disabled={pending}
            type="submit"
            formAction={() => saveNote(noteId, title, body)}
            role="menuitem"
          >
            // ... Done
          </button>
          {!isDraft && (
            <button
              className="note-editor-delete"
              disabled={pending}
              formAction={() => deleteNote(noteId)}
              role="menuitem"
            >
              // ... Delete
            </button>
          )}
        </form>
        // ...
      </div>
    </div>
  );
}
`,paraId:33,tocIndex:3},{value:"\u5176\u4E2D\u6700\u4E3A\u6838\u5FC3\u7684\u4EE3\u7801\u5C31\u662F\uFF1A",paraId:34,tocIndex:3},{value:`<form className="note-editor-menu" role="menubar">
  <button formAction={() => saveNote(noteId, title, body)}>
    Done
  </button>
  <button formAction={() => deleteNote(noteId)} >
    Delete
  </button>
</form>
`,paraId:35,tocIndex:3},{value:"app/actions.js",paraId:36,tocIndex:3},{value:"\u7684\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:36,tocIndex:3},{value:`'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';

export async function saveNote(noteId, title, body) {
  const data = JSON.stringify({
    title,
    content: body,
    updateTime: new Date(),
  });

  if (noteId) {
    updateNote(noteId, data);
    redirect(\`/note/\${noteId}\`);
  } else {
    const res = await addNote(data);
    redirect(\`/note/\${res}\`);
  }
}

export async function deleteNote(noteId) {
  delNote(noteId);
  redirect('/');
}
`,paraId:37,tocIndex:3},{value:"\u6B64\u65F6\u65B0\u589E\u548C\u5220\u9664\u770B\u4F3C\u53EF\u4EE5\u201C\u6B63\u5E38\u8FD0\u884C\u201D\u4E86\uFF1A",paraId:38,tocIndex:3},{value:"\u6CE8\uFF1A\u5199\u8FD9\u4E2A demo \u7684\u65F6\u5019\u53EF\u80FD\u4F1A\u9047\u5230\u70B9\u4E86\u6309\u94AE\u6CA1\u6709\u53CD\u5E94\uFF0C\u5361\u987F 5s \u7684\u60C5\u51B5\uFF0C\u8FD9\u662F\u56E0\u4E3A\u4E4B\u524D\u7684 demo \u91CC\u6211\u4EEC\u6709\u5728\u591A\u4E2A\u7EC4\u4EF6\u91CC\u5199 sleep 5s\uFF0C\u5220\u9664\u76F8\u5E94\u7684\u4EE3\u7801\u5373\u53EF\u3002",paraId:39,tocIndex:3},{value:"\u501F\u52A9 Server Actions\uFF0C\u6211\u4EEC\u5F88\u7B80\u5355\u7684\u5C31\u5B9E\u73B0\u4E86\u7B14\u8BB0\u7684\u65B0\u589E\u548C\u5220\u9664\u6548\u679C\uFF0C\u4F46\u5176\u5B9E\u76EE\u524D\u7684\u4EE3\u7801\u4E2D\u8FD8\u6709\u5F88\u591A\u95EE\u9898\u3002",paraId:40,tocIndex:4},{value:"\u6BD4\u5982\u5F53\u6211\u4EEC\u8FDE\u7EED 2 \u6B21\u65B0\u589E\u7B14\u8BB0\u65F6\uFF0C\u89C2\u5BDF\u5DE6\u4FA7\u7684\u7B14\u8BB0\u5217\u8868\u53D8\u5316\uFF1A",paraId:41,tocIndex:5},{value:"\u7B14\u8BB0\u5217\u8868\u521D\u59CB\u6709 3 \u6761\uFF0C\u65B0\u589E\u7B2C 1 \u6761\u7B14\u8BB0\u540E\uFF0C\u5DE6\u4FA7\u7684\u7B14\u8BB0\u5217\u8868\u663E\u793A 4 \u6761\uFF0C\u4F46\u5F53\u6211\u4EEC\u65B0\u589E\u7B2C 2 \u6761\u7B14\u8BB0\u7684\u65F6\u5019\uFF0C\u5DE6\u4FA7\u7684\u7B14\u8BB0\u5217\u8868\u53C8\u53D8\u6210\u4E86 3 \u6761\uFF0C\u65B0\u589E\u7B2C 2 \u6761\u7B14\u8BB0\u540E\uFF0C\u5DE6\u4FA7\u7684\u7B14\u8BB0\u5217\u8868\u663E\u793A 5 \u6761\u3002",paraId:42,tocIndex:5},{value:"\u5982\u679C\u4F60\u5BFC\u822A\u81F3\u9996\u9875 ",paraId:43,tocIndex:5},{value:"/",paraId:43,tocIndex:5},{value:"\uFF0C\u4F60\u4F1A\u53D1\u73B0\u8FD8\u662F 3 \u6761\uFF0C\u800C\u4E14\u54EA\u6015\u4F60\u6E05\u7A7A\u7F13\u5B58\u5E76\u786C\u6027\u91CD\u65B0\u52A0\u8F7D\uFF0C\u8FD8\u662F 3 \u6761\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F",paraId:43,tocIndex:5},{value:"\u8FD9\u5C31\u662F",paraId:44,tocIndex:5},{value:"\u5B8C\u6574\u8DEF\u7531\u7F13\u5B58",paraId:44,tocIndex:5},{value:"\u3002\u4EE5 ",paraId:44,tocIndex:5},{value:"/note/edit",paraId:44,tocIndex:5},{value:"\u4E3A\u4F8B\uFF0C\u8DEF\u7531\u9ED8\u8BA4\u662F\u9759\u6001\u6E32\u67D3\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u4F1A\u5728\u6784\u5EFA\u7684\u65F6\u5019\uFF0C\u8BFB\u53D6\u6570\u636E\uFF0C\u7136\u540E\u5C06\u7F16\u8BD1\u540E\u7684 HTML \u548C RSC Payload \u7F13\u5B58\uFF0C\u6784\u5EFA\u7684\u65F6\u5019\uFF0C\u6570\u636E\u5E93\u91CC\u6709 3 \u6761\u6570\u636E\uFF0C\u6240\u4EE5 HTML \u4E2D\u4E5F\u53EA\u6709 3 \u6761\u6570\u636E\uFF0C\u6240\u4EE5\u540E\u7EED\u6253\u5F00 ",paraId:44,tocIndex:5},{value:"/note/edit",paraId:44,tocIndex:5},{value:"\u4E5F\u90FD\u662F 3 \u6761\u6570\u636E\u3002",paraId:44,tocIndex:5},{value:"\u8FD8\u8BB0\u5F97\u5982\u4F55\u8BA9\u5B8C\u6574\u8DEF\u7531\u7F13\u5B58\u5931\u6548\u5417\uFF1F",paraId:45,tocIndex:5},{value:"\u6709\u4E24\u79CD\u65B9\u5F0F\u53EF\u4EE5\u4F7F\u5B8C\u6574\u8DEF\u7531\u7F13\u5B58\u5931\u6548\uFF1A",paraId:46,tocIndex:5},{value:"\u91CD\u65B0\u9A8C\u8BC1\u6570\u636E\uFF1A\u91CD\u65B0\u9A8C\u8BC1\u6570\u636E\u7F13\u5B58\u5C06\u4F7F\u5B8C\u6574\u8DEF\u7531\u7F13\u5B58\u5931\u6548\uFF0C\u6BD5\u7ADF\u6E32\u67D3\u8F93\u51FA\u4F9D\u8D56\u4E8E\u6570\u636E",paraId:47,tocIndex:5},{value:"\u91CD\u65B0\u90E8\u7F72\uFF1A\u6570\u636E\u7F13\u5B58\u662F\u53EF\u4EE5\u8DE8\u90E8\u7F72\u7684\uFF0C\u4F46\u5B8C\u6574\u8DEF\u7531\u7F13\u5B58\u4F1A\u5728\u91CD\u65B0\u90E8\u7F72\u4E2D\u88AB\u6E05\u9664",paraId:47,tocIndex:5},{value:"\u6B64\u5916\uFF0C\u5BA2\u6237\u7AEF\u8DEF\u7531\u7F13\u5B58\u7684\u5931\u6548\u4E5F\u9700\u8981\u501F\u52A9 revalidate\uFF1A",paraId:48,tocIndex:5},{value:"\u6709\u4E24\u79CD\u65B9\u6CD5\u53EF\u4EE5\u8BA9\u8DEF\u7531\u7F13\u5B58\u5931\u6548\uFF1A",paraId:49,tocIndex:5},{value:`\u5728 Server Action \u4E2D\uFF1A
`,paraId:50,tocIndex:5},{value:"\u901A\u8FC7 ",paraId:51,tocIndex:5},{value:"revalidatePath",paraId:51,tocIndex:5},{value:" \u6216 ",paraId:51,tocIndex:5},{value:"revalidateTag",paraId:51,tocIndex:5},{value:" \u91CD\u65B0\u9A8C\u8BC1\u6570\u636E",paraId:51,tocIndex:5},{value:"\u4F7F\u7528 ",paraId:51,tocIndex:5},{value:"cookies.set",paraId:51,tocIndex:5},{value:" \u6216\u8005 ",paraId:51,tocIndex:5},{value:"cookies.delete",paraId:51,tocIndex:5},{value:" \u4F1A\u4F7F\u8DEF\u7531\u7F13\u5B58\u5931\u6548",paraId:51,tocIndex:5},{value:"\u8C03\u7528 ",paraId:50,tocIndex:5},{value:"router.refresh",paraId:50,tocIndex:5},{value:" \u4F1A\u4F7F\u8DEF\u7531\u7F13\u5B58\u5931\u6548\u5E76\u53D1\u8D77\u4E00\u4E2A\u91CD\u65B0\u83B7\u53D6\u5F53\u524D\u8DEF\u7531\u7684\u8BF7\u6C42",paraId:50,tocIndex:5},{value:"\u6240\u4EE5\u5728\u8FDB\u884C\u6570\u636E\u5904\u7406\u7684\u65F6\u5019\uFF0C\u4E00\u5B9A\u8981\u8BB0\u5F97\u91CD\u65B0\u9A8C\u8BC1\u6570\u636E\uFF0C\u4E5F\u5C31\u662F ",paraId:52,tocIndex:5},{value:"revalidatePath",paraId:52,tocIndex:5},{value:" \u548C ",paraId:52,tocIndex:5},{value:"revalidateTag",paraId:52,tocIndex:5},{value:"\u3002\u73B0\u5728\u6211\u4EEC\u4FEE\u6539\u4E0B ",paraId:52,tocIndex:5},{value:"app/actions.js",paraId:52,tocIndex:5},{value:"\uFF1A",paraId:52,tocIndex:5},{value:`'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';
import { revalidatePath } from 'next/cache';

export async function saveNote(noteId, title, body) {
  const data = JSON.stringify({
    title,
    content: body,
    updateTime: new Date(),
  });

  if (noteId) {
    updateNote(noteId, data);
    revalidatePath('/', 'layout');
    redirect(\`/note/\${noteId}\`);
  } else {
    const res = await addNote(data);
    revalidatePath('/', 'layout');
    redirect(\`/note/\${res}\`);
  }
}

export async function deleteNote(noteId) {
  delNote(noteId);
  revalidatePath('/', 'layout');
  redirect('/');
}
`,paraId:53,tocIndex:5},{value:"\u8FD9\u91CC\u6211\u4EEC\u7B80\u5355\u7C97\u66B4\u4E86\u6E05\u9664\u4E86\u6240\u6709\u7F13\u5B58\uFF0C\u6B64\u65F6\u65B0\u589E\u3001\u7F16\u8F91\u3001\u5220\u9664\u5E94\u8BE5\u90FD\u8FD0\u884C\u6B63\u5E38\u4E86\u3002",paraId:54,tocIndex:5},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u6765\u770B\u770B\u5F53\u6211\u4EEC\u70B9\u51FB ",paraId:55,tocIndex:6},{value:"Done",paraId:55,tocIndex:6},{value:" \u6309\u94AE\u7684\u65F6\u5019\u505A\u4E86\u4EC0\u4E48\uFF1F",paraId:55,tocIndex:6},{value:"\u6211\u4EEC\u5148\u6CE8\u91CA\u6389 ",paraId:56,tocIndex:6},{value:"actions.js",paraId:56,tocIndex:6},{value:" \u4E2D\u7684 ",paraId:56,tocIndex:6},{value:"redirect",paraId:56,tocIndex:6},{value:"\uFF0C\u8FD9\u6837\u5F53\u66F4\u65B0\u7B14\u8BB0\u7684\u65F6\u5019\uFF0C\u4E0D\u4F1A\u53D1\u751F\u91CD\u5B9A\u5411\u3002\u7136\u540E\u6211\u4EEC\u7F16\u8F91\u4E00\u6761\u7B14\u8BB0\uFF0C\u7136\u540E\u70B9\u51FB ",paraId:56,tocIndex:6},{value:"Done",paraId:56,tocIndex:6},{value:"\uFF0C\u53EF\u4EE5\u770B\u5230\u9875\u9762\u53D1\u9001\u4E86\u4E00\u6761 POST \u8BF7\u6C42\uFF1A",paraId:56,tocIndex:6},{value:"\u8BF7\u6C42\u5730\u5740\u662F\u5F53\u524D\u9875\u9762\uFF0C\u8BF7\u6C42\u65B9\u6CD5\u4E3A POST\u3002\u8BF7\u6C42\u5185\u5BB9\u6B63\u662F\u6211\u4EEC\u4F20\u5165\u7684\u5185\u5BB9\uFF1A",paraId:57,tocIndex:6},{value:"\u54CD\u5E94\u5185\u5BB9\u4E3A\uFF1A",paraId:58,tocIndex:6},{value:"\u5982\u679C\u6211\u4EEC\u4E0D\u6CE8\u91CA\u6389 ",paraId:59,tocIndex:6},{value:"actions.js",paraId:59,tocIndex:6},{value:" \u4E2D\u7684 ",paraId:59,tocIndex:6},{value:"redirect",paraId:59,tocIndex:6},{value:"\uFF0C\u7136\u540E\u6211\u4EEC\u7F16\u8F91\u4E00\u6761\u7B14\u8BB0\uFF0C\u7136\u540E\u70B9\u51FB ",paraId:59,tocIndex:6},{value:"Done",paraId:59,tocIndex:6},{value:"\uFF0C\u53EF\u4EE5\u770B\u5230\u9875\u9762\u53D1\u9001\u4E86\u4E00\u6761 POST \u8BF7\u6C42\uFF1A",paraId:59,tocIndex:6},{value:"\u56E0\u4E3A\u6709\u91CD\u5B9A\u5411\uFF0C\u6240\u4EE5\u8BF7\u6C42\u72B6\u6001\u53D8\u6210\u4E86 303\u3002\u54CD\u5E94\u5185\u5BB9\u4E3A\uFF1A",paraId:60,tocIndex:6},{value:`3:I[5613,[],""]
5:I[1778,[],""]
4:["id","1702459182837","d"]
0:["SN0qCiPbAaKKSAlQfIuYC",[[["",{"children":["note",{"children":[["id","1702459182837","d"],{"children":["__PAGE__",{}]}]}]},"$undefined","$undefined",true],["",{"children":["note",{"children":[["id","1702459182837","d"],{"children":["__PAGE__",{},["$L1","$L2",null]]},["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children","note","children","$4","children"],"loading":["$","div",null,{"className":"note skeleton-container","role":"progressbar","aria-busy":"true","children":[["$","div",null,{"className":"note-header","children":[["$","div",null,{"className":"note-title skeleton","style":{"height":"3rem","width":"65%","marginInline":"12px 1em"}}],["$","div",null,{"className":"skeleton skeleton--button","style":{"width":"8em","height":"2.5em"}}]]}],["$","div",null,{"className":"note-preview","children":[["$","div",null,{"className":"skeleton v-stack","style":{"height":"1.5em"}}],["$","div",null,{"className":"skeleton v-stack","style":{"height":"1.5em"}}],["$","div",null,{"className":"skeleton v-stack","style":{"height":"1.5em"}}],["$","div",null,{"className":"skeleton v-stack","style":{"height":"1.5em"}}],["$","div",null,{"className":"skeleton v-stack","style":{"height":"1.5em"}}]]}]]}],"loadingStyles":[],"loadingScripts":[],"hasLoading":true,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children","note","children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":"$undefined","notFoundStyles":"$undefined","styles":null}]]},[null,"$L6",null]],[[["$","link","0",{"rel":"stylesheet","href":"/_next/static/css/10169c963ccea784.css","precedence":"next","crossOrigin":"$undefined"}]],"$L7"]]]]
9:I[5250,["250","static/chunks/250-3c648b94097e3c7b.js","156","static/chunks/app/note/%5Bid%5D/page-5070a024863ac55b.js"],""]
6:["$","html",null,{"lang":"en","children":["$","body",null,{"children":["$","div",null,{"className":"container","children":["$","div",null,{"className":"main","children":["$L8",["$","section",null,{"className":"col note-viewer","children":["$","$L3",null,{"parallelRouterKey":"children","segmentPath":["children"],"loading":"$undefined","loadingStyles":"$undefined","loadingScripts":"$undefined","hasLoading":false,"error":"$undefined","errorStyles":"$undefined","errorScripts":"$undefined","template":["$","$L5",null,{}],"templateStyles":"$undefined","templateScripts":"$undefined","notFound":[["$","title",null,{"children":"404: This page could not be found."}],["$","div",null,{"style":{"fontFamily":"system-ui,\\"Segoe UI\\",Roboto,Helvetica,Arial,sans-serif,\\"Apple Color Emoji\\",\\"Segoe UI Emoji\\"","height":"100vh","textAlign":"center","display":"flex","flexDirection":"column","alignItems":"center","justifyContent":"center"},"children":["$","div",null,{"children":[["$","style",null,{"dangerouslySetInnerHTML":{"__html":"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}"}}],["$","h1",null,{"className":"next-error-h1","style":{"display":"inline-block","margin":"0 20px 0 0","padding":"0 23px 0 0","fontSize":24,"fontWeight":500,"verticalAlign":"top","lineHeight":"49px"},"children":"404"}],["$","div",null,{"style":{"display":"inline-block"},"children":["$","h2",null,{"style":{"fontSize":14,"fontWeight":400,"lineHeight":"49px","margin":0},"children":"This page could not be found."}]}]]}]}]],"notFoundStyles":[],"styles":null}]}]]}]}]}]}]
7:[["$","meta","0",{"name":"viewport","content":"width=device-width, initial-scale=1"}],["$","meta","1",{"charSet":"utf-8"}],["$","link","2",{"rel":"icon","href":"/favicon.ico","type":"image/x-icon","sizes":"16x16"}]]
1:null
2:["$","div",null,{"className":"note","children":[["$","div",null,{"className":"note-header","children":[["$","h1",null,{"className":"note-title","children":"3qui est"}],["$","div",null,{"className":"note-menu","role":"menubar","children":[["$","small",null,{"className":"note-updated-at","role":"status","children":["Last updated on ","2023-12-19 05:33:09"]}],["$","$L9",null,{"href":"/note/edit/1702459182837","className":"link--unstyled","children":["$","button",null,{"className":"edit-button edit-button--outline","role":"menuitem","children":"Edit"}]}]]}]]}],["$","div",null,{"className":"note-preview","children":["$","div",null,{"className":"text-with-markdown","dangerouslySetInnerHTML":{"__html":"<p>est rerum tempore vitae sequi sint</p>\\n"}}]}]]}]
a:"$Sreact.suspense"
8:["$","section",null,{"className":"col sidebar","children":[["$","$L9",null,{"href":"/","className":"link--unstyled","children":["$","section",null,{"className":"sidebar-header","children":[["$","img",null,{"className":"logo","src":"/logo.svg","width":"22px","height":"20px","alt":"","role":"presentation"}],["$","strong",null,{"children":"React Notes"}]]}]}],["$","section",null,{"className":"sidebar-menu","role":"menubar","children":["$","$L9",null,{"href":"/note/edit/","className":"link--unstyled","children":["$","button",null,{"className":"edit-button edit-button--solid","role":"menuitem","children":"New"}]}]}],["$","nav",null,{"children":["$","$a",null,{"fallback":["$","div",null,{"children":["$","ul",null,{"className":"notes-list skeleton-container","children":[["$","li",null,{"className":"v-stack","children":["$","div",null,{"className":"sidebar-note-list-item skeleton","style":{"height":"5em"}}]}],["$","li",null,{"className":"v-stack","children":["$","div",null,{"className":"sidebar-note-list-item skeleton","style":{"height":"5em"}}]}],["$","li",null,{"className":"v-stack","children":["$","div",null,{"className":"sidebar-note-list-item skeleton","style":{"height":"5em"}}]}]]}]}],"children":"$Lb"}]}]]}]
c:I[610,["250","static/chunks/250-3c648b94097e3c7b.js","185","static/chunks/app/layout-7bae744084688543.js"],""]
b:["$","ul",null,{"className":"notes-list","children":[["$","li","1702459182837",{"children":["$","$Lc",null,{"id":"1702459182837","title":"3qui est","expandedChildren":["$","p",null,{"className":"sidebar-note-excerpt","children":"est rerum tempore vi"}],"children":["$","header",null,{"className":"sidebar-note-header","children":[["$","strong",null,{"children":"3qui est"}],["$","small",null,{"children":"2023-12-19 05:33:09"}]]}]}]}],["$","li","1702459181837",{"children":["$","$Lc",null,{"id":"1702459181837","title":"sunt aut","expandedChildren":["$","p",null,{"className":"sidebar-note-excerpt","children":"quia et suscipit sus"}],"children":["$","header",null,{"className":"sidebar-note-header","children":[["$","strong",null,{"children":"sunt aut"}],["$","small",null,{"children":"2023-12-13 05:19:48"}]]}]}]}],["$","li","1702459188837",{"children":["$","$Lc",null,{"id":"1702459188837","title":"ea molestias","expandedChildren":["$","p",null,{"className":"sidebar-note-excerpt","children":"et iusto sed quo iur"}],"children":["$","header",null,{"className":"sidebar-note-header","children":[["$","strong",null,{"children":"ea molestias"}],["$","small",null,{"children":"2023-12-13 05:19:48"}]]}]}]}]]}]

`,paraId:61,tocIndex:6},{value:"\u6B64\u65F6\u91CD\u5B9A\u5411\u5730\u5740\u4E3A ",paraId:62,tocIndex:6},{value:"/note/1702459182837",paraId:62,tocIndex:6},{value:"\uFF0C\u4ECE\u54CD\u5E94\u7684\u5185\u5BB9\u4E2D\u53EF\u4EE5\u770B\u51FA\uFF0C\u5176\u4E2D\u5305\u542B\u4E86\u6E32\u67D3\u540E\u7684\u7B14\u8BB0\u5217\u8868\u548C\u6B64\u6761\u7B14\u8BB0\u7684\u5177\u4F53\u5185\u5BB9\u3002\u8BE5\u5185\u5BB9\u4E5F\u662F\u6D41\u5F0F\u52A0\u8F7D\u7684\uFF0C\u6240\u4EE5\u5185\u5BB9\u4F1A\u9010\u6B65\u6E32\u67D3\u51FA\u6765\u3002\u6BD4\u5982\u6211\u4EEC\u628A ",paraId:62,tocIndex:6},{value:"/note/[id]/page.js",paraId:62,tocIndex:6},{value:"\u7684 ",paraId:62,tocIndex:6},{value:"sleep",paraId:62,tocIndex:6},{value:" \u8BBE\u7F6E\u4E3A 10s\uFF0C",paraId:62,tocIndex:6},{value:"/components/SidebarNoteList.js",paraId:62,tocIndex:6},{value:"\u7684 sleep \u8BBE\u7F6E\u4E3A 3s\uFF0C\u6548\u679C\u5982\u4E0B\uFF1A",paraId:62,tocIndex:6},{value:"\u70B9\u51FB\u540E\uFF0C\u5DE6\u4FA7\u7B14\u8BB0\u5217\u8868 3s \u540E\u53D1\u751F\u4E86\u53D8\u5316\uFF0C\u53F3\u4FA7\u7B14\u8BB0\u9884\u89C8 10s \u540E\u53D1\u751F\u4E86\u53D8\u5316\u3002",paraId:63,tocIndex:6},{value:"\u6240\u4EE5\u5F53\u63D0\u4EA4\u8868\u5355\u7684\u65F6\u5019\u53D1\u751F\u4E86\u4EC0\u4E48\u5462\uFF1F\u5176\u5B9E\u5C31\u662F\u5C06\u6570\u636E\u4EE5 POST \u8BF7\u6C42\u63D0\u4EA4\u7ED9\u5F53\u524D\u9875\u9762\uFF0C\u670D\u52A1\u7AEF\u6839\u636E Server Actions \u4E2D\u7684\u5B9A\u4E49\u8FDB\u884C\u5904\u7406\u3002Next.js \u600E\u4E48\u5B9E\u73B0\u7684\u5462\uFF1F\u5176\u5B9E\u5C31\u76F8\u5F53\u4E8E\u66FF\u4F60\u5199\u4E86\u539F\u672C\u7528\u4E8E\u4EA4\u4E92\u7684\u63A5\u53E3\u3002",paraId:64,tocIndex:6},{value:"\u4F7F\u7528 Server Actions \u7684\u4E00\u5927\u597D\u5904\u5C31\u662F\u6E10\u8FDB\u5F0F\u589E\u5F3A\uFF0C\u4E5F\u5C31\u662F\u8BF4\uFF0C\u5373\u4FBF\u4F60\u7981\u7528\u4E86 JavaScript\uFF0C\u7167\u6837\u53EF\u4EE5\u751F\u6548\u3002\u73B0\u5728\u8BA9\u6211\u4EEC\u67E5\u770B ",paraId:65,tocIndex:7},{value:"Done",paraId:65,tocIndex:7},{value:"\u548C ",paraId:65,tocIndex:7},{value:"Delete",paraId:65,tocIndex:7},{value:"\u6309\u94AE\u7684\u6E90\u7801\uFF1A",paraId:65,tocIndex:7},{value:"\u6309\u94AE\u7684 ",paraId:66,tocIndex:7},{value:"formaction",paraId:66,tocIndex:7},{value:" \u5C5E\u6027\u53D8\u6210\u4E86\uFF1A",paraId:66,tocIndex:7},{value:`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you're trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"`,paraId:67,tocIndex:7},{value:"\u8FD9\u8BF4\u660E\u2026\u2026\u4EE3\u7801\u5199\u7684\u6709\u95EE\u9898\u2026\u2026",paraId:68,tocIndex:7},{value:"\u73B0\u5728\u6211\u4EEC\u63D0\u4EA4\u8868\u5355\u7684\u4EE3\u7801\u4E3A\uFF1A",paraId:69,tocIndex:7},{value:`<form className="note-editor-menu" role="menubar">
  <button formAction={() => saveNote(noteId, title, body)}>
    Done
  </button>
</form>
`,paraId:70,tocIndex:7},{value:"\u867D\u7136\u8FD9\u79CD\u5199\u6CD5\u4E5F\u53EF\u4EE5\u751F\u6548\uFF0C\u4F46\u5728\u7981\u7528 JavaScript \u7684\u65F6\u5019\u4F1A\u5931\u6548\uFF0C\u4E3A\u4E86\u907F\u514D\u8FD9\u4E2A\u9519\u8BEF\uFF0C\u6700\u597D\u662F\u50CF\u4E0B\u9762\u8FD9\u6837\u5199\uFF1A",paraId:71,tocIndex:7},{value:`<form className="note-editor-menu" role="menubar">
  <button formaction="{saveNote}">Done</button>
</form>
`,paraId:72,tocIndex:7},{value:"\u90A3\u4E48 noteId \u8BE5\u5982\u4F55\u4F20\u5165\u5462\uFF1F\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4F20\u7EDF\u7684\u9690\u85CF input\uFF1A",paraId:73,tocIndex:7},{value:`<input type="hidden" name="noteId" value="{noteId}" />
`,paraId:74,tocIndex:7},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u91CD\u65B0\u5199\u4E0B ",paraId:75,tocIndex:7},{value:"components/NoteEditor.js",paraId:75,tocIndex:7},{value:" \u7684\u4EE3\u7801\uFF1A",paraId:75,tocIndex:7},{value:`'use client';

import { useState } from 'react';
import NotePreview from '@/components/NotePreview';
import { useFormStatus } from 'react-dom';
import { deleteNote, saveNote } from '../app/actions';

export default function NoteEditor({ noteId, initialTitle, initialBody }) {
  const { pending } = useFormStatus();
  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);
  const isDraft = !noteId;

  return (
    <div className="note-editor">
      <form className="note-editor-form" autoComplete="off">
        <div className="note-editor-menu" role="menubar">
          <input type="hidden" name="noteId" value={noteId} />
          <button
            className="note-editor-done"
            disabled={pending}
            type="submit"
            formAction={saveNote}
            role="menuitem"
          >
            <img
              src="/checkmark.svg"
              width="14px"
              height="10px"
              alt=""
              role="presentation"
            />
            Done
          </button>
          {!isDraft && (
            <button
              className="note-editor-delete"
              disabled={pending}
              formAction={deleteNote}
              role="menuitem"
            >
              <img
                src="/cross.svg"
                width="10px"
                height="10px"
                alt=""
                role="presentation"
              />
              Delete
            </button>
          )}
        </div>
        <label className="offscreen" htmlFor="note-title-input">
          Enter a title for your note
        </label>
        <input
          id="note-title-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          Enter the body for your note
        </label>
        <textarea
          name="body"
          value={body}
          id="note-body-input"
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <div className="note-editor-preview">
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  );
}
`,paraId:76,tocIndex:7},{value:"app/actions.js",paraId:77,tocIndex:7},{value:"\u7684\u4EE3\u7801\u4E3A\uFF1A",paraId:77,tocIndex:7},{value:`'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';
import { revalidatePath } from 'next/cache';

export async function saveNote(formData) {
  const noteId = formData.get('noteId');

  const data = JSON.stringify({
    title: formData.get('title'),
    content: formData.get('body'),
    updateTime: new Date(),
  });

  if (noteId) {
    updateNote(noteId, data);
    revalidatePath('/', 'layout');
    redirect(\`/note/\${noteId}\`);
  } else {
    const res = await addNote(data);
    revalidatePath('/', 'layout');
    redirect(\`/note/\${res}\`);
  }
}

export async function deleteNote(formData) {
  const noteId = formData.get('noteId');

  delNote(noteId);
  revalidatePath('/', 'layout');
  redirect('/');
}
`,paraId:78,tocIndex:7},{value:"\u6B64\u65F6\u518D\u67E5\u770B ",paraId:79,tocIndex:7},{value:"Done",paraId:79,tocIndex:7},{value:" \u548C ",paraId:79,tocIndex:7},{value:"Delete",paraId:79,tocIndex:7},{value:" \u6309\u94AE\u5143\u7D20\uFF1A",paraId:79,tocIndex:7},{value:"\u6B64\u65F6\u5C31\u6CA1\u6709\u521A\u624D\u7684\u9519\u8BEF\u4FE1\u606F\u4E86\u3002\u73B0\u5728\u8BA9\u6211\u4EEC\u5728\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u7981\u7528 JavaScript\uFF0C\u4F60\u4F1A\u53D1\u73B0\u8868\u5355\u4F9D\u7136\u80FD\u7528\uFF1A",paraId:80,tocIndex:7},{value:"\u5F53\u7136\u5728\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\uFF0C\u56E0\u4E3A\u7981\u7528\u4E86 JavaScript\uFF0C\u6240\u4EE5\u5DE6\u4FA7\u7684\u7B14\u8BB0\u5217\u8868\u52A0\u8F7D\u4E0D\u51FA\u6765\uFF0C\u66F4\u6539\u5185\u5BB9\u7684\u65F6\u5019\u53F3\u8FB9\u4E5F\u4E0D\u4F1A\u5B9E\u65F6\u6E32\u67D3\uFF0C\u4F46\u81F3\u5C11\u8868\u5355\u63D0\u4EA4\u6210\u529F\u4E86\u3002",paraId:81,tocIndex:7},{value:"React \u7684 ",paraId:82,tocIndex:8},{value:"useFormState",paraId:82,tocIndex:8},{value:" \u548C ",paraId:82,tocIndex:8},{value:"useFormStatus",paraId:83,tocIndex:8},{value:" \u975E\u5E38\u9002\u5408\u642D\u914D Server Actions \u4F7F\u7528\u3002",paraId:82,tocIndex:8},{value:"useFormState",paraId:82,tocIndex:8},{value:" \u7528\u4E8E\u6839\u636E form action \u7684\u7ED3\u679C\u66F4\u65B0\u8868\u5355\u72B6\u6001\uFF0C",paraId:82,tocIndex:8},{value:"useFormStatus",paraId:82,tocIndex:8},{value:" \u7528\u4E8E\u5728\u63D0\u4EA4\u8868\u5355\u65F6\u663E\u793A\u5F85\u5904\u7406\u72B6\u6001\u3002",paraId:82,tocIndex:8},{value:"\u6BD4\u5982\u4F7F\u7528 ",paraId:84,tocIndex:8},{value:"useFormStatus",paraId:84,tocIndex:8},{value:" \u5B9E\u73B0\u8868\u5355\u63D0\u4EA4\u65F6\u6309\u94AE\u7684\u7981\u7528\u6548\u679C\uFF1A",paraId:84,tocIndex:8},{value:`export default function NoteEditor() {
  const { pending } = useFormStatus();

  return <button disabled={pending}> Done </button>;
}
`,paraId:85,tocIndex:8},{value:"\u53C8\u6216\u8005\u5728\u63D0\u4EA4\u7684\u65F6\u5019\u6309\u94AE\u7684\u6587\u5B57\u53D8\u6210 ",paraId:86,tocIndex:8},{value:"Saving",paraId:86,tocIndex:8},{value:"\uFF1A",paraId:86,tocIndex:8},{value:`export default function NoteEditor() {
  const { pending } = useFormStatus();

  return <button> {pending ? 'Saving' : 'Done'} </button>;
}
`,paraId:87,tocIndex:8},{value:"\u6CE8\u610F\u4F7F\u7528 ",paraId:88,tocIndex:8},{value:"useFormStatus",paraId:88,tocIndex:8},{value:" \u7684\u65F6\u5019\uFF0C\u5EFA\u8BAE\u5C06\u6309\u94AE\u62BD\u79BB\u6210\u5355\u72EC\u7684\u7EC4\u4EF6\uFF0C\u5728\u7EC4\u4EF6\u4E2D\u4F7F\u7528 ",paraId:88,tocIndex:8},{value:"useFormStatus",paraId:88,tocIndex:8},{value:"\u3002",paraId:88,tocIndex:8},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u4FEE\u6539\u4E0B\u9879\u76EE\u7684\u6548\u679C\uFF0C\u5F53\u70B9\u51FB ",paraId:89,tocIndex:8},{value:"Done",paraId:89,tocIndex:8},{value:" \u7684\u65F6\u5019\uFF0C\u4E0D\u518D\u91CD\u5B9A\u5411\uFF0C\u800C\u662F\u51FA\u73B0 ",paraId:89,tocIndex:8},{value:"Add Success!",paraId:89,tocIndex:8},{value:"\u63D0\u793A\uFF0C\u6211\u4EEC\u518D\u52A0\u5165 ",paraId:89,tocIndex:8},{value:"useFormState",paraId:89,tocIndex:8},{value:"\u91CD\u5199\u4E0B ",paraId:89,tocIndex:8},{value:"components/NoteEditor.js",paraId:89,tocIndex:8},{value:" \u7684\u4EE3\u7801\uFF1A",paraId:89,tocIndex:8},{value:`'use client';

import { useState } from 'react';
import NotePreview from '@/components/NotePreview';
import { useFormState } from 'react-dom';
import { deleteNote, saveNote } from '../app/actions';
import SaveButton from '@/components/SaveButton';
import DeleteButton from '@/components/DeleteButton';

const initialState = {
  message: null,
};

export default function NoteEditor({ noteId, initialTitle, initialBody }) {
  const [saveState, saveFormAction] = useFormState(saveNote, initialState);
  const [delState, delFormAction] = useFormState(deleteNote, initialState);

  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  const isDraft = !noteId;

  return (
    <div className="note-editor">
      <form className="note-editor-form" autoComplete="off">
        <div className="note-editor-menu" role="menubar">
          <input type="hidden" name="noteId" value={noteId} />
          <SaveButton formAction={saveFormAction} />
          <DeleteButton isDraft={isDraft} formAction={delFormAction} />
        </div>
        <div className="note-editor-menu">{saveState?.message}</div>
        <label className="offscreen" htmlFor="note-title-input">
          Enter a title for your note
        </label>
        <input
          id="note-title-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          Enter the body for your note
        </label>
        <textarea
          name="body"
          value={body}
          id="note-body-input"
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <div className="note-editor-preview">
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  );
}
`,paraId:90,tocIndex:8},{value:"\u6211\u4EEC\u5C06 Done \u548C Delete \u6309\u94AE\u62BD\u79BB\u6210\u4E86\u4E24\u4E2A\u7EC4\u4EF6\u3002",paraId:91,tocIndex:8},{value:"components/SaveButton.js",paraId:92,tocIndex:8},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:92,tocIndex:8},{value:`import { useFormStatus } from 'react-dom';

export default function EditButton({ formAction }) {
  const { pending } = useFormStatus();
  return (
    <button
      className="note-editor-done"
      type="submit"
      formAction={formAction}
      disabled={pending}
      role="menuitem"
    >
      <img
        src="/checkmark.svg"
        width="14px"
        height="10px"
        alt=""
        role="presentation"
      />
      {pending ? 'Saving' : 'Done'}
    </button>
  );
}
`,paraId:93,tocIndex:8},{value:"components/DeleteButton.js",paraId:94,tocIndex:8},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:94,tocIndex:8},{value:`import { useFormStatus } from 'react-dom';

export default function DeleteButton({ isDraft, formAction }) {
  const { pending } = useFormStatus();
  return (
    !isDraft && (
      <button
        className="note-editor-delete"
        disabled={pending}
        formAction={formAction}
        role="menuitem"
      >
        <img
          src="/cross.svg"
          width="10px"
          height="10px"
          alt=""
          role="presentation"
        />
        Delete
      </button>
    )
  );
}
`,paraId:95,tocIndex:8},{value:"app/actions.js",paraId:96,tocIndex:8},{value:"\u7684\u4EE3\u7801\u4E3A\uFF1A",paraId:96,tocIndex:8},{value:`'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';
import { revalidatePath } from 'next/cache';
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function saveNote(prevState, formData) {
  const noteId = formData.get('noteId');

  const data = JSON.stringify({
    title: formData.get('title'),
    content: formData.get('body'),
    updateTime: new Date(),
  });

  // \u4E3A\u4E86\u8BA9\u6548\u679C\u66F4\u660E\u663E
  await sleep(2000);

  if (noteId) {
    updateNote(noteId, data);
    revalidatePath('/', 'layout');
  } else {
    const res = await addNote(data);
    revalidatePath('/', 'layout');
  }
  return { message: \`Add Success!\` };
}

export async function deleteNote(prevState, formData) {
  const noteId = formData.get('noteId');
  delNote(noteId);
  revalidatePath('/', 'layout');
  redirect('/');
}
`,paraId:97,tocIndex:8},{value:"\u6B64\u65F6\u518D\u70B9\u51FB ",paraId:98,tocIndex:8},{value:"Done",paraId:98,tocIndex:8},{value:" \u6309\u94AE\uFF1A",paraId:98,tocIndex:8},{value:"\u5F53\u70B9\u51FB ",paraId:99,tocIndex:8},{value:"Done",paraId:99,tocIndex:8},{value:" \u6309\u94AE\u7684\u65F6\u5019\uFF0C",paraId:99,tocIndex:8},{value:"Done",paraId:99,tocIndex:8},{value:" \u548C ",paraId:99,tocIndex:8},{value:"Delete",paraId:99,tocIndex:8},{value:" \u6309\u94AE\u90FD\u51FA\u73B0\u4E86 disabled \u6837\u5F0F\uFF08\u6BD5\u7ADF\u8FD9\u4E24\u4E2A\u6309\u94AE\u5728\u4E00\u4E2A\u8868\u5355\u5185\uFF09\uFF0C2s \u540E\uFF0C\u51FA\u73B0 Add Success! \u63D0\u793A\u3002",paraId:99,tocIndex:8},{value:"\u5982\u679C\u9700\u8981\u5BF9\u6570\u636E\u8FDB\u884C\u6821\u9A8C\uFF0CNext.js \u63A8\u8350\u4F7F\u7528 ",paraId:100,tocIndex:9},{value:"zod",paraId:100,tocIndex:9},{value:"\uFF0C\u6211\u4EEC\u4F7F\u7528 zod \u4FEE\u6539\u4E0B ",paraId:100,tocIndex:9},{value:"/app/actions.js",paraId:100,tocIndex:9},{value:"\uFF1A",paraId:100,tocIndex:9},{value:`'use server';

import { redirect } from 'next/navigation';
import { addNote, updateNote, delNote } from '@/lib/redis';
import { revalidatePath } from 'next/cache';
import { z } from 'zod';

const schema = z.object({
  title: z.string(),
  content: z.string().min(1, '\u8BF7\u586B\u5199\u5185\u5BB9').max(100, '\u5B57\u6570\u6700\u591A 100'),
});

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function saveNote(prevState, formData) {
  // \u83B7\u53D6 noteId
  const noteId = formData.get('noteId');
  const data = {
    title: formData.get('title'),
    content: formData.get('body'),
    updateTime: new Date(),
  };

  // \u6821\u9A8C\u6570\u636E
  const validated = schema.safeParse(data);
  if (!validated.success) {
    return {
      errors: validated.error.issues,
    };
  }

  // \u6A21\u62DF\u8BF7\u6C42\u65F6\u95F4
  await sleep(2000);

  // \u66F4\u65B0\u6570\u636E\u5E93
  if (noteId) {
    await updateNote(noteId, JSON.stringify(data));
    revalidatePath('/', 'layout');
  } else {
    await addNote(JSON.stringify(data));
    revalidatePath('/', 'layout');
  }

  return { message: \`Add Success!\` };
}

export async function deleteNote(prevState, formData) {
  const noteId = formData.get('noteId');
  delNote(noteId);
  revalidatePath('/', 'layout');
  redirect('/');
}
`,paraId:101,tocIndex:9},{value:"components/NoteEditor.js",paraId:102,tocIndex:9},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:102,tocIndex:9},{value:`'use client';

import { useEffect, useRef, useState } from 'react';
import NotePreview from '@/components/NotePreview';
import { useFormState } from 'react-dom';
import { deleteNote, saveNote } from '../app/actions';
import SaveButton from '@/components/SaveButton';
import DeleteButton from '@/components/DeleteButton';

const initialState = {
  message: null,
};

export default function NoteEditor({ noteId, initialTitle, initialBody }) {
  const [saveState, saveFormAction] = useFormState(saveNote, initialState);
  const [delState, delFormAction] = useFormState(deleteNote, initialState);

  const [title, setTitle] = useState(initialTitle);
  const [body, setBody] = useState(initialBody);

  const isDraft = !noteId;

  useEffect(() => {
    if (saveState.errors) {
      // \u5904\u7406\u9519\u8BEF
      console.log(saveState.errors);
    }
  }, [saveState]);

  return (
    <div className="note-editor">
      <form className="note-editor-form" autoComplete="off">
        <input type="hidden" name="noteId" value={noteId || ''} />
        <div className="note-editor-menu" role="menubar">
          <SaveButton formAction={saveFormAction} />
          <DeleteButton isDraft={isDraft} formAction={delFormAction} />
        </div>
        <div className="note-editor-menu">
          {saveState?.message}
          {saveState.errors && saveState.errors[0].message}
        </div>
        <label className="offscreen" htmlFor="note-title-input">
          Enter a title for your note
        </label>
        <input
          id="note-title-input"
          type="text"
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <label className="offscreen" htmlFor="note-body-input">
          Enter the body for your note
        </label>
        <textarea
          name="body"
          value={body}
          id="note-body-input"
          onChange={(e) => setBody(e.target.value)}
        />
      </form>
      <div className="note-editor-preview">
        <div className="label label--preview" role="status">
          Preview
        </div>
        <h1 className="note-title">{title}</h1>
        <NotePreview>{body}</NotePreview>
      </div>
    </div>
  );
}
`,paraId:103,tocIndex:9},{value:"\u5199 Server Actions \u57FA\u672C\u8981\u6CE8\u610F\u7684\u70B9\u5C31\u8FD9\u4E9B\u4E86\uFF0C\u5B9A\u4E49\u5728 actions \u7684\u4EE3\u7801\u8981\u6CE8\u610F\uFF1A",paraId:104,tocIndex:10},{value:"\u4ECE ",paraId:105,tocIndex:10},{value:"formData",paraId:105,tocIndex:10},{value:" \u4E2D\u83B7\u53D6\u63D0\u4EA4\u7684\u6570\u636E",paraId:105,tocIndex:10},{value:"\u4F7F\u7528 ",paraId:105,tocIndex:10},{value:"zod",paraId:105,tocIndex:10},{value:" \u8FDB\u884C\u6570\u636E\u6821\u9A8C",paraId:105,tocIndex:10},{value:"\u4F7F\u7528 ",paraId:105,tocIndex:10},{value:"revalidate",paraId:105,tocIndex:10},{value:" \u66F4\u65B0\u6570\u636E\u7F13\u5B58",paraId:105,tocIndex:10},{value:"\u8FD4\u56DE\u5408\u9002\u7684\u4FE1\u606F",paraId:105,tocIndex:10},{value:"\u5B9A\u4E49\u8868\u5355\u7684\u4EE3\u7801\u8981\u6CE8\u610F\uFF1A",paraId:106,tocIndex:10},{value:"\u642D\u914D\u4F7F\u7528 ",paraId:107,tocIndex:10},{value:"useFormState",paraId:107,tocIndex:10},{value:" \u548C ",paraId:107,tocIndex:10},{value:"useFormStatus",paraId:108,tocIndex:10},{value:"\u7279\u6B8A\u6570\u636E\u4F7F\u7528\u9690\u85CF input \u63D0\u4EA4",paraId:107,tocIndex:10},{value:"\u90A3\u4E48\u4ECA\u5929\u7684\u5185\u5BB9\u5C31\u7ED3\u675F\u4E86\uFF0C\u672C\u7BC7\u6211\u4EEC\u5B8C\u5584\u4E86\u7B14\u8BB0\u7684\u7F16\u8F91\u6548\u679C\uFF0C\u4E86\u89E3\u4E86\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E0E\u670D\u52A1\u7AEF\u7EC4\u4EF6\u7684\u5212\u5206\u4EE5\u53CA\u5728\u5B9E\u6218\u4E2D\u4F7F\u7528 Server Actions\uFF0C\u5B66\u4E60\u4E66\u5199 Server Actions \u65F6\u7684\u6CE8\u610F\u4E8B\u9879\u548C\u6700\u4F73\u5B9E\u8DF5\u3002",paraId:109,tocIndex:11},{value:"\u672C\u7BC7\u7684\u4EE3\u7801\u6211\u5DF2\u7ECF\u4E0A\u4F20\u5230",paraId:110,tocIndex:11},{value:"\u4EE3\u7801\u4ED3\u5E93",paraId:110,tocIndex:11},{value:"\u7684 Day 4 \u5206\u652F\uFF1A",paraId:110,tocIndex:11},{value:"https://github.com/mqyqingfeng/next-react-notes-demo/tree/day4",paraId:110,tocIndex:11},{value:"\uFF0C\u672C\u7BC7\u7684\u4E0D\u540C\u7248\u672C\u4EE5\u4E0D\u540C\u7684 commit \u8FDB\u884C\u4E86\u63D0\u4EA4\uFF0C\u6B64\u5916\u76F4\u63A5\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u8981\u5FD8\u8BB0\u5728\u672C\u5730\u5F00\u542F Redis\u3002",paraId:110,tocIndex:11}]}}]);
