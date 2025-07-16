"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1025],{71025:function(a,e,n){n.r(e),n.d(e,{texts:function(){return t}});const t=[{value:"\u672C\u7BC7\u6211\u4EEC\u6765\u5B9E\u73B0 React Notes \u7684\u5DE6\u4FA7\u4FA7\u8FB9\u680F\u90E8\u5206\u3002",paraId:0,tocIndex:0},{value:"\u73B0\u5728\u6211\u4EEC\u63A5\u7740\u5B8C\u5584\u7B14\u8BB0\u5217\u8868\uFF0C\u6BD5\u7ADF\u7B14\u8BB0\u5217\u8868\u8FD9\u91CC\u8FD8\u8981\u5B9E\u73B0\u5C55\u5F00\u548C\u6536\u56DE\u529F\u80FD\uFF1A",paraId:1,tocIndex:1},{value:"\u4FEE\u6539 ",paraId:2,tocIndex:1},{value:"components/SidebarNoteList.js",paraId:2,tocIndex:1},{value:"\u4EE3\u7801\uFF1A",paraId:2,tocIndex:1},{value:`import SidebarNoteItem from '@/components/SidebarNoteItem';

export default async function NoteList({ notes }) {
  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className="notes-empty">{'No notes created yet!'}</div>;
  }

  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        return (
          <li key={noteId}>
            <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
          </li>
        );
      })}
    </ul>
  );
}
`,paraId:3,tocIndex:1},{value:"\u8FD9\u91CC\u6211\u4EEC\u5C06\u5177\u4F53\u7684\u6BCF\u6761\u7B14\u8BB0\u62BD\u79BB\u6210\u5355\u72EC\u7684 ",paraId:4,tocIndex:1},{value:"SidebarNoteItem",paraId:4,tocIndex:1},{value:" \u7EC4\u4EF6\uFF0C",paraId:4,tocIndex:1},{value:"components/SidebarNoteItem.js",paraId:4,tocIndex:1},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:4,tocIndex:1},{value:`import dayjs from 'dayjs';
import SidebarNoteItemContent from '@/components/SidebarNoteItemContent';

export default function SidebarNoteItem({ noteId, note }) {
  const { title, content = '', updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <header className="sidebar-note-header">
        <strong>{title}</strong>
        <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
      </header>
    </SidebarNoteItemContent>
  );
}
`,paraId:5,tocIndex:1},{value:"\u8FD9\u91CC\u6211\u4EEC\u53C8\u62BD\u79BB\u4E86\u4E00\u4E2A ",paraId:6,tocIndex:1},{value:"SidebarNoteItemContent",paraId:6,tocIndex:1},{value:" \u7EC4\u4EF6\uFF0C\u7528\u6765\u5B9E\u73B0\u5C55\u5F00\u548C\u6536\u56DE\u529F\u80FD\uFF0C\u6211\u4EEC\u5C06\u7B14\u8BB0\u7684\u6807\u9898\u548C\u65F6\u95F4\u7684 JSX \u4F5C\u4E3A children \u4F20\u9012\u7ED9\u4E86 ",paraId:6,tocIndex:1},{value:"SidebarNoteItemContent",paraId:6,tocIndex:1},{value:"\uFF0C",paraId:6,tocIndex:1},{value:"components/SidebarNoteItemContent.js",paraId:6,tocIndex:1},{value:"\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:6,tocIndex:1},{value:`'use client';

import { useState, useRef, useEffect, useTransition } from 'react';
import { useRouter, usePathname } from 'next/navigation';

export default function SidebarNoteContent({
  id,
  title,
  children,
  expandedChildren,
}) {
  const router = useRouter();
  const pathname = usePathname();
  const selectedId = pathname?.split('/')[1] || null;

  const [isPending] = useTransition();
  const [isExpanded, setIsExpanded] = useState(false);
  const isActive = id === selectedId;

  // Animate after title is edited.
  const itemRef = useRef(null);
  const prevTitleRef = useRef(title);

  useEffect(() => {
    if (title !== prevTitleRef.current) {
      prevTitleRef.current = title;
      itemRef.current.classList.add('flash');
    }
  }, [title]);

  return (
    <div
      ref={itemRef}
      onAnimationEnd={() => {
        itemRef.current.classList.remove('flash');
      }}
      className={[
        'sidebar-note-list-item',
        isExpanded ? 'note-expanded' : '',
      ].join(' ')}
    >
      {children}
      <button
        className="sidebar-note-open"
        style={{
          backgroundColor: isPending
            ? 'var(--gray-80)'
            : isActive
            ? 'var(--tertiary-blue)'
            : '',
          border: isActive
            ? '1px solid var(--primary-border)'
            : '1px solid transparent',
        }}
        onClick={() => {
          const sidebarToggle = document.getElementById('sidebar-toggle');
          if (sidebarToggle) {
            sidebarToggle.checked = true;
          }
          router.push(\`/note/\${id}\`);
        }}
      >
        Open note for preview
      </button>
      <button
        className="sidebar-note-toggle-expand"
        onClick={(e) => {
          e.stopPropagation();
          setIsExpanded(!isExpanded);
        }}
      >
        {isExpanded ? (
          <img
            src="/chevron-down.svg"
            width="10px"
            height="10px"
            alt="Collapse"
          />
        ) : (
          <img src="/chevron-up.svg" width="10px" height="10px" alt="Expand" />
        )}
      </button>
      {isExpanded && expandedChildren}
    </div>
  );
}
`,paraId:7,tocIndex:1},{value:"\u8FD9\u91CC ",paraId:8,tocIndex:1},{value:"SidebarNoteItemContent",paraId:8,tocIndex:1},{value:" \u5177\u4F53\u7684\u5B9E\u73B0\u5176\u5B9E\u5E76\u4E0D\u91CD\u8981\uFF0C\u4F60\u53EA\u8981\u77E5\u9053\u8FD9\u662F\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5C31\u884C\u4E86\u3002\u5728\u8FD9\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u91CC\u6211\u4EEC\u7528\u4E86 ",paraId:8,tocIndex:1},{value:"useState",paraId:8,tocIndex:1},{value:" \u6765\u63A7\u5236\u5C55\u5F00\u548C\u6536\u56DE\u7684\u72B6\u6001\uFF0C\u7136\u540E\u6DFB\u52A0\u4E86\u4E00\u4E9B\u52A8\u753B\u6548\u679C\uFF0C\u4EC5\u6B64\u800C\u5DF2\u3002\u5982\u679C\u6B65\u9AA4\u6B63\u786E\u7684\u8BDD\uFF0C\u6B64\u65F6\u7684\u9875\u9762\u6548\u679C\u4E3A\uFF1A",paraId:8,tocIndex:1},{value:"\u6211\u4EEC\u6210\u529F\u7684\u5B9E\u73B0\u4E86\u7EC4\u4EF6\u7684\u5C55\u5F00\u548C\u6536\u56DE\u529F\u80FD\uFF01",paraId:9,tocIndex:1},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u56DE\u987E\u4E0B\u6B64\u65F6\u7684\u4FA7\u8FB9\u680F\u7EC4\u4EF6\u7ED3\u6784\u60C5\u51B5\uFF1A",paraId:10,tocIndex:2},{value:"\u6211\u4EEC\u58F0\u660E\u4E86\u4E00\u4E2A ",paraId:11,tocIndex:2},{value:"Sidebar",paraId:11,tocIndex:2},{value:" \u7EC4\u4EF6\u7528\u4E8E\u5B9E\u73B0\u4FA7\u8FB9\u680F\uFF0C\u5176\u4E2D\u6709\u4E00\u4E2A\u5B50\u7EC4\u4EF6 ",paraId:11,tocIndex:2},{value:"SidebarNoteList",paraId:11,tocIndex:2},{value:" \u7528\u4E8E\u5B9E\u73B0\u4FA7\u8FB9\u680F\u7684\u7B14\u8BB0\u5217\u8868\u90E8\u5206\uFF0C\u9488\u5BF9\u6BCF\u4E00\u6761\u7B14\u8BB0\uFF0C\u6211\u4EEC\u62BD\u79BB\u4E86\u4E00\u4E2A ",paraId:11,tocIndex:2},{value:"SidebarNoteItem",paraId:11,tocIndex:2},{value:" \u7EC4\u4EF6\u6765\u5B9E\u73B0\uFF0C\u5728 ",paraId:11,tocIndex:2},{value:"SidebarNoteItem",paraId:11,tocIndex:2},{value:" \u4E2D\uFF0C\u6211\u4EEC\u53C8\u62BD\u79BB\u4E86\u4E00\u4E2A\u540D\u4E3A ",paraId:11,tocIndex:2},{value:"SidebarNoteItemContent",paraId:11,tocIndex:2},{value:" \u7684\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7528\u4E8E\u5B9E\u73B0\u5C55\u5F00\u548C\u6536\u56DE\u529F\u80FD\uFF0C\u7136\u540E\u6211\u4EEC\u5728 ",paraId:11,tocIndex:2},{value:"SidebarNoteItem",paraId:11,tocIndex:2},{value:" \u8FD9\u4E2A\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u5C06\u7B14\u8BB0\u7684\u6807\u9898\u548C\u65F6\u95F4\u8FD9\u6BB5 JSX \u4F5C\u4E3A ",paraId:11,tocIndex:2},{value:"children",paraId:11,tocIndex:2},{value:" \u4F20\u9012\u7ED9 ",paraId:11,tocIndex:2},{value:"SidebarNoteItemContent",paraId:11,tocIndex:2},{value:"\u3002",paraId:11,tocIndex:2},{value:"\u8FD9\u4E2A\u65F6\u5019\u4F60\u53EF\u80FD\u4F1A\u6709\u4E2A\u7591\u95EE\uFF1A\u4E3A\u4EC0\u4E48\u8981\u8FD9\u6837\u505A\u5462\uFF1F\u4E3A\u4EC0\u4E48\u4E0D\u76F4\u63A5\u628A ",paraId:12,tocIndex:2},{value:"SidebarNoteItem",paraId:12,tocIndex:2},{value:" \u58F0\u660E\u4E3A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u7136\u540E\u76F4\u63A5\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u91CC\u5168\u90E8\u5B9E\u73B0\u5462\uFF1F\u8FD8\u8981\u7528\u4F20\u9012 ",paraId:12,tocIndex:2},{value:"children",paraId:12,tocIndex:2},{value:" \u8FD9\u4E48\u590D\u6742\u7684\u65B9\u5F0F\uFF1F",paraId:12,tocIndex:2},{value:"\u5012\u4E0D\u7740\u6025\u56DE\u7B54\u8FD9\u4E2A\u95EE\u9898\u3002\u56E0\u4E3A\u8FD9\u6BB5\u529F\u80FD\u7684\u5B9E\u73B0\u6D89\u53CA\u5230\u6211\u4EEC\u5F00\u53D1 Next.js \u9879\u76EE\u5E38\u7528\u7684\u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5BFC\u5165\uFF0C\u6240\u4EE5\u5148\u8BA9\u6211\u4EEC\u56DE\u987E\u4E0B",paraId:13,tocIndex:3},{value:"\u76F8\u5173\u7684\u4F7F\u7528\u77E5\u8BC6",paraId:13,tocIndex:3},{value:"\uFF08\u8FD9\u5F88\u91CD\u8981\uFF0C\u5F00\u53D1\u7684\u65F6\u5019\u8981\u8C28\u8BB0\uFF09\uFF1A",paraId:13,tocIndex:3},{value:"\u670D\u52A1\u7AEF\u7EC4\u4EF6\u53EF\u4EE5\u5BFC\u5165\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u4F46\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5E76\u4E0D\u80FD\u5BFC\u5165\u670D\u52A1\u7AEF\u7EC4\u4EF6",paraId:14,tocIndex:3},{value:"\u4ECE\u670D\u52A1\u7AEF\u7EC4\u4EF6\u5230\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4F20\u9012\u7684\u6570\u636E\u9700\u8981\u53EF\u5E8F\u5217\u5316",paraId:14,tocIndex:3},{value:"\uFF0C\u4EE5\u521A\u624D\u7684\u4F8B\u5B50\u4E3A\u4F8B\uFF1A",paraId:14,tocIndex:3},{value:`// components/SidebarNoteItem.js

export default function SidebarNoteItem({ noteId, note }) {
  // ...
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      fun={() => {}}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <header className="sidebar-note-header">
        <strong>{title}</strong>
        <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
      </header>
    </SidebarNoteItemContent>
  );
}
`,paraId:15,tocIndex:3},{value:"\u6240\u8C13\u53EF\u5E8F\u5217\u5316\uFF0C\u7B80\u5355\u7684\u7406\u89E3\u5C31\u662F JSON.stringify() \u8FD9\u6BB5\u6570\u636E\u4E0D\u4F1A\u51FA\u73B0\u9519\u8BEF\uFF0C\u5982\u679C\u6211\u4EEC\u5728\u8FD9\u91CC\u4F20\u9012\u4E00\u4E2A\u51FD\u6570 ",paraId:16,tocIndex:3},{value:"fun={() => {}}",paraId:16,tocIndex:3},{value:"\uFF0C\u5C31\u4F1A\u51FA\u73B0\u9519\u8BEF\u63D0\u793A\uFF1A",paraId:16,tocIndex:3},{value:"\u4F46 JSX \u5BF9\u8C61\u662F\u53EF\u4EE5\u6B63\u5E38\u4F20\u9012\u7684\uFF0C\u6B63\u5982\u8FD9\u4E2A\u4F8B\u5B50\u4E2D\u5C55\u793A\u7684\u90A3\u6837\u3002",paraId:17,tocIndex:3},{value:"\u4F46\u4F60\u53EF\u4EE5\u5C06\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4EE5 props \u7684\u5F62\u5F0F\u4F20\u7ED9\u5BA2\u6237\u7AEF\u7EC4\u4EF6",paraId:18,tocIndex:3},{value:"\uFF0C\u5176\u5B9E\u521A\u624D\u7684\u5B9E\u73B0\u91CC\u5C31\u5C55\u73B0\u4E86\u4E24\u79CD\u4F20\u9012\u670D\u52A1\u7AEF\u7EC4\u4EF6\u7684\u5F62\u5F0F\uFF1A",paraId:18,tocIndex:3},{value:`// components/SidebarNoteItem.js

export default function SidebarNoteItem({ noteId, note }) {
  const { title, content = '', updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      // \u7B2C\u4E00\u79CD\u65B9\u5F0F
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      // \u7B2C\u4E8C\u79CD\u65B9\u5F0F
      <header className="sidebar-note-header">
        <strong>{title}</strong>
        <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
      </header>
    </SidebarNoteItemContent>
  );
}
`,paraId:19,tocIndex:3},{value:"\u73B0\u5728\u8BA9\u6211\u4EEC\u91CD\u65B0\u5BA1\u89C6\u4E00\u4E0B SidebarNoteItem \u7684\u4EE3\u7801\uFF1A",paraId:20,tocIndex:4},{value:`// components/SidebarNoteItem.js
import dayjs from 'dayjs';

import SidebarNoteItemContent from '@/components/SidebarNoteItemContent';

export default function SidebarNoteItem({ noteId, note }) {
  const { title, content = '', updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <header className="sidebar-note-header">
        <strong>{title}</strong>
        <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
      </header>
    </SidebarNoteItemContent>
  );
}
`,paraId:21,tocIndex:4},{value:"\u8003\u9A8C\u4F60\u662F\u5426\u8BA4\u771F\u5B66\u4E60\u4E86\u4E4B\u524D\u7684\u77E5\u8BC6\u5230\u4E86\uFF01",paraId:22,tocIndex:4},{value:"\u5728\u8FD9\u6BB5\u4EE3\u7801\u4E2D\uFF0C",paraId:23,tocIndex:4},{value:"SidebarNoteItem",paraId:23,tocIndex:4},{value:" \u662F\u4E00\u4E2A\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u4E2D\u6211\u4EEC\u5F15\u5165\u4E86 dayjs \u8FD9\u4E2A\u5E93\uFF0C\u7136\u800C\u6211\u4EEC\u5374\u662F\u5728 ",paraId:23,tocIndex:4},{value:"SidebarNoteItemContent",paraId:23,tocIndex:4},{value:" \u8FD9\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528\u7684 dayjs\u3002\u8BF7\u95EE\u6700\u7EC8\u5BA2\u6237\u7AEF\u7684 bundle \u4E2D\u662F\u5426\u4F1A\u6253\u5305 dayjs \u8FD9\u4E2A\u5E93\uFF1F",paraId:23,tocIndex:4},{value:"\u5173\u4E8E\u8FD9\u4E2A\u7ED3\u679C\uFF0C\u53CD\u6B63\u6548\u679C\u6211\u4EEC\u90FD\u5B9E\u73B0\u4E86\uFF0C\u76F4\u63A5\u53BB\u67E5\u770B\u4E00\u4E0B\u5C31\u77E5\u9053\u4E86\uFF1A",paraId:24,tocIndex:4},{value:"\u6240\u4EE5\u7B54\u6848\u662F\u4E0D\u4F1A\u3002",paraId:25,tocIndex:4},{value:"\u5728\u670D\u52A1\u7AEF\u7EC4\u4EF6\u4E2D\u4F7F\u7528 JSX \u4F5C\u4E3A\u4F20\u9012\u7ED9\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684 prop\uFF0CJSX \u4F1A\u5148\u8FDB\u884C\u670D\u52A1\u7AEF\u7EC4\u4EF6\u6E32\u67D3\uFF0C\u518D\u53D1\u9001\u5230\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E2D",paraId:25,tocIndex:4},{value:"\u3002\u4E5F\u5C31\u662F\u8BF4\uFF0C\u53D1\u9001\u7ED9\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\u5E76\u4E0D\u662F\uFF1A",paraId:25,tocIndex:4},{value:`<header className="sidebar-note-header">
  <strong>{title}</strong>
  <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
</header>
`,paraId:26,tocIndex:4},{value:"\u800C\u662F\u7F16\u8BD1\u540E\u7684\u5982\uFF1A",paraId:27,tocIndex:4},{value:`<header class="sidebar-note-header">
  <strong>ea molestias</strong>
  <small>2023-12-13 05:19:48</small>
</header>
`,paraId:28,tocIndex:4},{value:"\u5176\u5B9E\u8FD9\u91CC\u6211\u4EEC\u4E5F\u5B8C\u5168\u53EF\u4EE5\u628A header \u62BD\u79BB\u6210\u4E00\u4E2A ",paraId:29,tocIndex:4},{value:"SidebarNoteItemHeader",paraId:29,tocIndex:4},{value:" \u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u8FD9\u6837\u6548\u679C\u4F1A\u66F4\u660E\u663E\uFF1A",paraId:29,tocIndex:4},{value:"\u65B0\u5EFA ",paraId:30,tocIndex:4},{value:"/components/SidebarNoteItemHeader.js",paraId:30,tocIndex:4},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:30,tocIndex:4},{value:`import dayjs from 'dayjs';

export default function SidebarNoteItemHeader({ title, updateTime }) {
  return (
    <header className="sidebar-note-header">
      <strong>{title}</strong>
      <small>{dayjs(updateTime).format('YYYY-MM-DD hh:mm:ss')}</small>
    </header>
  );
}
`,paraId:31,tocIndex:4},{value:"\u4FEE\u6539 ",paraId:32,tocIndex:4},{value:"SidebarNoteItem.js",paraId:32,tocIndex:4},{value:"\u6587\u4EF6\u4EE3\u7801\u4E3A\uFF1A",paraId:32,tocIndex:4},{value:`import SidebarNoteItemContent from '@/components/SidebarNoteItemContent';
import SidebarNoteItemHeader from '@/components/SidebarNoteItemHeader';

export default function SidebarNoteItem({ noteId, note }) {
  const { title, content = '', updateTime } = note;
  return (
    <SidebarNoteItemContent
      id={noteId}
      title={note.title}
      expandedChildren={
        <p className="sidebar-note-excerpt">
          {content.substring(0, 20) || <i>(No content)</i>}
        </p>
      }
    >
      <SidebarNoteItemHeader title={title} updateTime={updateTime} />
    </SidebarNoteItemContent>
  );
}
`,paraId:33,tocIndex:4},{value:"\u73B0\u5728\u6211\u4EEC\u67E5\u770B\u4E0B\u5F00\u53D1\u8005\u5DE5\u5177\u4E2D\u7684\u7684 Source \u9009\u9879\uFF1A",paraId:34,tocIndex:4},{value:"\u4F60\u4F1A\u53D1\u73B0 ",paraId:35,tocIndex:4},{value:"components",paraId:35,tocIndex:4},{value:" \u4E0B\u5E76\u6CA1\u6709\u6211\u4EEC\u521A\u5EFA\u7ACB\u7684 ",paraId:35,tocIndex:4},{value:"SidebarNoteItemHeader",paraId:35,tocIndex:4},{value:" \u7EC4\u4EF6\uFF0C\u53EA\u6709\u4E00\u4E2A\u5BA2\u6237\u7AEF\u7EC4\u4EF6 ",paraId:35,tocIndex:4},{value:"SidebarNoteItemContent",paraId:35,tocIndex:4},{value:"\uFF0Cnode_modules \u4E0B\u4E5F\u6CA1\u6709 dayjs\uFF08\u5982\u679C\u4F60\u628A ",paraId:35,tocIndex:4},{value:"SidebarNoteItemHeader",paraId:35,tocIndex:4},{value:" \u58F0\u660E\u4E3A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5C31\u6709\u4E86\uFF09\u3002",paraId:35,tocIndex:4},{value:"\u6700\u540E\u8BA9\u6211\u4EEC\u67E5\u770B\u4E0B localhost \u8FD9\u4E2A\u6587\u4EF6\u7684 HTML\uFF1A",paraId:36,tocIndex:4},{value:"\u4F20\u7ED9\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684 JSX \u8FD9\u4E9B\u5185\u5BB9\u4E5F\u4F1A\u76F4\u63A5\u6E32\u67D3\u5230 HTML \u4E2D\uFF0C\u5F53\u7136\u8FD9\u91CC\u8DDF\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u8FD8\u662F\u670D\u52A1\u7AEF\u7EC4\u4EF6\u65E0\u5173\uFF0C\u662F\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E5F\u4F1A\u9884\u6E32\u67D3\uFF0C\u53EA\u662F\u63D0\u4E00\u4E0B\u800C\u5DF2\u3002",paraId:37,tocIndex:4},{value:"\u6211\u4EEC\u5728 ",paraId:38,tocIndex:5},{value:"\u300A\u6E32\u67D3\u7BC7 | \u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u300B",paraId:38,tocIndex:5},{value:"\u4E2D\u8BB2\u5230 ",paraId:38,tocIndex:5},{value:"\u201C\u5C3D\u53EF\u80FD\u5C06\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u5728\u7EC4\u4EF6\u6811\u4E2D\u4E0B\u79FB\u201D",paraId:38,tocIndex:5},{value:"\uFF0C\u8FD9\u91CC\u5C31\u662F\u4E00\u4E2A\u5F88\u597D\u7684\u4F8B\u5B50\u3002\u6211\u4EEC\u672C\u53EF\u4EE5\u76F4\u63A5\u628A ",paraId:38,tocIndex:5},{value:"SidebarNoteItem",paraId:38,tocIndex:5},{value:" \u58F0\u660E\u4E3A\u5BA2\u6237\u7AEF\u7EC4\u4EF6\uFF0C\u7136\u540E\u76F4\u63A5\u5728\u8FD9\u4E2A\u7EC4\u4EF6\u91CC\u5168\u90E8\u5B9E\u73B0\uFF0C\u4F46\u662F\u5374\u62BD\u79BB\u4E86\u4E00\u4E2A\u540D\u4E3A ",paraId:38,tocIndex:5},{value:"SidebarNoteItemContent",paraId:38,tocIndex:5},{value:" \u7684\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7528\u4E8E\u5B9E\u73B0\u5C55\u5F00\u548C\u6536\u56DE\u529F\u80FD\u3002",paraId:38,tocIndex:5},{value:"SidebarNoteItemContent",paraId:39,tocIndex:5},{value:" \u7684\u5185\u5BB9\u539F\u672C\u662F ",paraId:39,tocIndex:5},{value:"SidebarNoteList",paraId:39,tocIndex:5},{value:" \u7684\u5B50\u7EC4\u4EF6\uFF0C\u73B0\u5728\u5374\u662F ",paraId:39,tocIndex:5},{value:"SidebarNoteItem",paraId:39,tocIndex:5},{value:" \u7684\u5B50\u7EC4\u4EF6\u3002\u867D\u7136\u5728\u7EC4\u4EF6\u6811\u4E2D\u7684\u4F4D\u7F6E\u4E0B\u79FB\u4E86\uFF0C\u4F46\u6211\u4EEC\u5374\u56E0\u6B64\u907F\u514D\u4E86 dayjs \u8FD9\u4E2A\u5E93\u88AB\u6253\u5305\u5230\u5BA2\u6237\u7AEF bundle \u4E2D\u3002\u5728\u5F00\u53D1\u7684\u65F6\u5019\uFF0C\u5E94\u8BE5\u5C3D\u53EF\u80FD\u7F29\u51CF\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\u8303\u56F4\u3002",paraId:39,tocIndex:5},{value:"New",paraId:40,tocIndex:6},{value:" \u548C ",paraId:40,tocIndex:6},{value:"Edit",paraId:40,tocIndex:6},{value:" \u6309\u94AE\u8003\u8651\u5230\u590D\u7528\uFF0C\u6211\u4EEC\u5355\u72EC\u62BD\u79BB\u6210\u4E00\u4E2A ",paraId:40,tocIndex:6},{value:"EditButton",paraId:40,tocIndex:6},{value:"\u7EC4\u4EF6\uFF1A",paraId:40,tocIndex:6},{value:`// components/EditButton.js
import Link from 'next/link';

export default function EditButton({ noteId, children }) {
  const isDraft = noteId == null;
  return (
    <Link href={\`/note/edit/\${noteId || ''}\`} className="link--unstyled">
      <button
        className={[
          'edit-button',
          isDraft ? 'edit-button--solid' : 'edit-button--outline',
        ].join(' ')}
        role="menuitem"
      >
        {children}
      </button>
    </Link>
  );
}
`,paraId:41,tocIndex:6},{value:"Sidebar \u7EC4\u4EF6\u5F15\u5165\u4E00\u4E0B\uFF1A",paraId:42,tocIndex:6},{value:`// ...
import EditButton from '@/components/EditButton';

export default async function Sidebar() {
  const notes = await getAllNotes()
  return (
    <>
      	// ...
        <section className="sidebar-menu" role="menubar">
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <SidebarNoteList notes={notes} />
        </nav>
      </section>
    </>
  )
}

`,paraId:43,tocIndex:6},{value:"\u539F Demo \u4E2D\u5F53\u7B14\u8BB0\u5217\u8868\u52A0\u8F7D\u7684\u65F6\u5019\u662F\u6709\u9AA8\u67B6\u56FE\u7684\u6548\u679C\u7684\uFF1A",paraId:44,tocIndex:7},{value:"\u8FD9\u8BF4\u660E\u80AF\u5B9A\u7528\u4E86 ",paraId:45,tocIndex:7},{value:"Suspense",paraId:45,tocIndex:7},{value:"\u3002\u56E0\u4E3A\u6211\u4EEC\u73B0\u5728\u5C06\u7B14\u8BB0\u5217\u8868\u6570\u636E\u7684\u83B7\u53D6\u653E\u5728\u4E86\u9876\u5C42\uFF0C\u6240\u4EE5\u76F4\u63A5\u4E3A ",paraId:45,tocIndex:7},{value:"SidebarNoteList",paraId:45,tocIndex:7},{value:" \u6DFB\u52A0 ",paraId:45,tocIndex:7},{value:"Suspense",paraId:45,tocIndex:7},{value:" \u662F\u6CA1\u6709\u6548\u679C\u7684\uFF0C\u6211\u4EEC\u9700\u8981\u5C06\u6570\u636E\u83B7\u53D6\u6539\u4E3A\u5728 ",paraId:45,tocIndex:7},{value:"SidebarNoteList",paraId:45,tocIndex:7},{value:" \u7EC4\u4EF6\u5185\u90E8\u3002",paraId:45,tocIndex:7},{value:"\u4FEE\u6539",paraId:46,tocIndex:7},{value:"Sidebar.js",paraId:46,tocIndex:7},{value:" \u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:46,tocIndex:7},{value:`import React, { Suspense } from 'react';
import Link from 'next/link';

import SidebarNoteList from '@/components/SidebarNoteList';
import EditButton from '@/components/EditButton';
import NoteListSkeleton from '@/components/NoteListSkeleton';

// // \u79FB\u9664\u6570\u636E\u8BF7\u6C42\u90E8\u5206\uFF0C\u4E3A SidebarNoteList \u6DFB\u52A0 Suspense \u4EE5\u53CA fallback UI NoteListSkeleton
export default async function Sidebar() {
  return (
    <>
      <section className="col sidebar">
        <Link href={'/'} className="link--unstyled">
          <section className="sidebar-header">
            <img
              className="logo"
              src="/logo.svg"
              width="22px"
              height="20px"
              alt=""
              role="presentation"
            />
            <strong>React Notes</strong>
          </section>
        </Link>
        <section className="sidebar-menu" role="menubar">
          <EditButton noteId={null}>New</EditButton>
        </section>
        <nav>
          <Suspense fallback={<NoteListSkeleton />}>
            <SidebarNoteList />
          </Suspense>
        </nav>
      </section>
    </>
  );
}
`,paraId:47,tocIndex:7},{value:"\u6DFB\u52A0 ",paraId:48,tocIndex:7},{value:"/components/NoteListSkeleton.js",paraId:48,tocIndex:7},{value:"\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A",paraId:48,tocIndex:7},{value:`export default function NoteListSkeleton() {
  return (
    <div>
      <ul className="notes-list skeleton-container">
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
        <li className="v-stack">
          <div
            className="sidebar-note-list-item skeleton"
            style={{ height: '5em' }}
          />
        </li>
      </ul>
    </div>
  );
}
`,paraId:49,tocIndex:7},{value:"/components/SidebarNoteList.js",paraId:50,tocIndex:7},{value:"\u4EE3\u7801\u5982\u4E0B\uFF0C\u4E3A\u4E86\u8BA9\u6548\u679C\u66F4\u52A0\u660E\u663E\uFF0C\u6211\u4EEC\u6DFB\u52A0\u4E86\u4E00\u4E2A sleep \u51FD\u6570\uFF1A",paraId:50,tocIndex:7},{value:`import SidebarNoteItem from '@/components/SidebarNoteItem';
import { getAllNotes } from '@/lib/redis';

export default async function NoteList() {
  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  await sleep(10000);
  const notes = await getAllNotes();

  const arr = Object.entries(notes);

  if (arr.length == 0) {
    return <div className="notes-empty">{'No notes created yet!'}</div>;
  }

  return (
    <ul className="notes-list">
      {arr.map(([noteId, note]) => {
        return (
          <li key={noteId}>
            <SidebarNoteItem noteId={noteId} note={JSON.parse(note)} />
          </li>
        );
      })}
    </ul>
  );
}
`,paraId:51,tocIndex:7},{value:"\u6B64\u65F6\u9875\u9762\u6548\u679C\u5982\u4E0B\uFF1A",paraId:52,tocIndex:7},{value:"\u6211\u4EEC\u6210\u529F\u5B9E\u73B0\u4E86\u9AA8\u67B6\u56FE\u6548\u679C\uFF01",paraId:53,tocIndex:7},{value:"\u90A3\u4E48\u95EE\u9898\u6765\u4E86\uFF0C",paraId:54,tocIndex:7},{value:"SidebarNoteList",paraId:54,tocIndex:7},{value:" \u7528 ",paraId:54,tocIndex:7},{value:"Suspense",paraId:54,tocIndex:7},{value:" \u548C\u4E0D\u7528 ",paraId:54,tocIndex:7},{value:"Suspense",paraId:54,tocIndex:7},{value:"\uFF0C\u5177\u4F53\u6709\u4EC0\u4E48\u6539\u53D8\u5462\uFF1F\u6BD4\u5982\uFF0C\u4F7F\u7528 ",paraId:54,tocIndex:7},{value:"Suspense",paraId:54,tocIndex:7},{value:" \u4F1A\u5E26\u6765\u65B0\u7684\u8BF7\u6C42\u5417\uFF1F",paraId:54,tocIndex:7},{value:"\u6211\u4EEC\u53EF\u4EE5\u81EA\u5DF1\u6D4B\u8BD5\u4E00\u4E0B\uFF0C",paraId:55,tocIndex:7},{value:"\u7B54\u6848\u662F\u4E0D\u4F1A\u3002",paraId:55,tocIndex:7},{value:" \u4E4B\u524D\u662F\u90A3 10 \u4E2A\u8BF7\u6C42\uFF0C\u4F7F\u7528\u540E\u8FD8\u662F\u90A3 10 \u4E2A\u8BF7\u6C42\u3002",paraId:55,tocIndex:7},{value:"\u90A3\u4E48\u4F7F\u7528 ",paraId:56,tocIndex:7},{value:"Suspense",paraId:56,tocIndex:7},{value:" \u548C\u4E0D\u4F7F\u7528 ",paraId:56,tocIndex:7},{value:"Suspense",paraId:56,tocIndex:7},{value:"\uFF0C\u5230\u5E95\u6709\u4EC0\u4E48\u5DEE\u522B\u5462\uFF1F\u5176\u5B9E\u6211\u4EEC\u770B\u4E0B\u7528\u548C\u4E0D\u7528\u7684\u6548\u679C\u5C31\u77E5\u9053\u4E86\u3002",paraId:56,tocIndex:7},{value:"\u6211\u4EEC\u628A sleep \u7684\u65F6\u95F4\u8BBE\u7F6E\u4E3A 5s\u3002\u8FD9\u662F\u4E0D\u4F7F\u7528 Suspense \u7684\u6548\u679C\uFF0C\u6211\u4EEC\u4ECE\u6398\u91D1\u9875\u9762\u8F93\u5165\u5730\u5740 ",paraId:57,tocIndex:7},{value:"http://localhost:3000/",paraId:57,tocIndex:7},{value:"\uFF1A",paraId:57,tocIndex:7},{value:"\u8F93\u5165\u5730\u5740\u540E\uFF0C\u6211\u4EEC\u7B49\u5F85\u4E86\u5927\u6982 5s \u540E\uFF0C\u9875\u9762\u7A81\u7136\u5B8C\u5168\u5C55\u73B0\u3002",paraId:58,tocIndex:7},{value:"\u8FD9\u662F\u4F7F\u7528 Suspense \u7684\u6548\u679C\uFF0C\u6211\u4EEC\u8FD8\u662F\u4ECE\u6398\u91D1\u9875\u9762\u8F93\u5165\u5730\u5740 ",paraId:59,tocIndex:7},{value:"http://localhost:3000/",paraId:59,tocIndex:7},{value:"\uFF1A",paraId:59,tocIndex:7},{value:"\u8F93\u5165\u5730\u5740\u540E\uFF0C\u6211\u4EEC\u7ACB\u523B\u5C31\u8DF3\u8F6C\u5230\u4E86\u9875\u9762\uFF0C\u7B14\u8BB0\u5217\u8868\u90E8\u5206\u7B49\u5F85\u4E86 5s \u540E\uFF0C\u5F00\u59CB\u5C55\u73B0\u3002\u9664\u6B64\u4E4B\u5916\uFF0C\u4F7F\u7528 Suspense\uFF0C\u6570\u636E\u52A0\u8F7D\u4E0D\u4F1A\u963B\u585E\u9875\u9762\uFF0C\u4E5F\u5C31\u662F\u8BF4\u5728\u7B14\u8BB0\u5217\u8868\u8FD8\u5728\u52A0\u8F7D\u7684\u65F6\u5019\uFF0C\u7528\u6237\u4F9D\u7136\u53EF\u4EE5\u4E0E\u9875\u9762\u5176\u4ED6\u90E8\u5206\u8FDB\u884C\u4EA4\u4E92\uFF0C\u6BD4\u5982\u70B9\u51FB New \u6309\u94AE\u65B0\u5EFA\u7B14\u8BB0\u3002",paraId:60,tocIndex:7},{value:"\u90A3\u4E48\u95EE\u9898\u53C8\u6765\u4E86\uFF0C\u9875\u9762\u8BF7\u6C42\u6570\u6CA1\u6709\u53D8\u5316\uFF0C\u4E5F\u6CA1\u6709\u65B0\u7684\u8BF7\u6C42\uFF0C\u8FD9\u4E9B\u53C8\u90FD\u662F\u670D\u52A1\u7AEF\u7EC4\u4EF6\uFF0C\u6570\u636E\u8BF7\u6C42\u90FD\u5728\u670D\u52A1\u7AEF\uFF0C\u5230\u5E95\u8C01\u7B49\u5F85\u4E86\u90A3 5s \u5462\uFF0C\u7136\u540E\u628A\u6570\u636E\u8FD4\u56DE\u7684\u5462\uFF1F",paraId:61,tocIndex:7},{value:"\u7B54\u6848\u5728\u4E8E ",paraId:62,tocIndex:7},{value:"localhost",paraId:62,tocIndex:7},{value:" \u8FD9\u4E2A HTML \u9875\u9762\uFF0C\u67E5\u770B\u7F51\u7EDC\u8BF7\u6C42\uFF0C\u521A\u5F00\u59CB\u9875\u9762\u52A0\u8F7D\u7684\u65F6\u5019\uFF0Clocalhost \u7684 Time \u4E3A 126ms\uFF1A",paraId:62,tocIndex:7},{value:"\u52A0\u8F7D\u5B8C\u6210\u540E\uFF0Clocalhost \u7684 Time \u53D8\u6210\u4E86 5s\uFF1A",paraId:63,tocIndex:7},{value:"\u4E4B\u6240\u4EE5\u8FD9\u6837\uFF0C\u6B63\u5982",paraId:64,tocIndex:7},{value:"\u300A\u6E32\u67D3\u7BC7 | Streaming \u548C Edge Runtime\u300B",paraId:64,tocIndex:7},{value:"\u4E2D\u4ECB\u7ECD\u7684\u90A3\u6837\uFF0C\u7B54\u6848\u5728\u4E8E HTML \u662F\u901A\u8FC7 stream \u683C\u5F0F\u8FDB\u884C\u4F20\u8F93\u7684\uFF0C\u67E5\u770B HTML \u6587\u4EF6\u7684\u54CD\u5E94\u5934\uFF1A",paraId:64,tocIndex:7},{value:"\u5176 ",paraId:65,tocIndex:7},{value:"Transfer-Encoding",paraId:65,tocIndex:7},{value:" \u6807\u5934\u7684\u503C\u4E3A ",paraId:65,tocIndex:7},{value:"chunked",paraId:65,tocIndex:7},{value:"\uFF0C\u8868\u793A\u6570\u636E\u5C06\u4EE5\u4E00\u7CFB\u5217\u5206\u5757\u7684\u5F62\u5F0F\u8FDB\u884C\u53D1\u9001\u3002HTML \u9996\u5148\u6536\u5230\u9AA8\u67B6\u56FE\u7684 HTML \u8FDB\u884C\u6E32\u67D3\uFF0C\u518D\u6536\u5230\u6E32\u67D3\u5B8C\u6210\u7684\u7B14\u8BB0\u5217\u8868 HTML \u8FDB\u884C\u6E32\u67D3\uFF0C\u67E5\u770B\u4E00\u4E0B localhost HTML \u6587\u4EF6\u7684\u8FD4\u56DE\uFF1A",paraId:65,tocIndex:7},{value:`<!DOCTYPE html>
<html lang="en">
  <head> </head>
  <body>
    <div class="container">
      <div class="main">
        // ...
        <nav>
          <!--$?-->
          <template id="B:0"></template>
          <!--\u8FD9\u91CC\u662F\u9AA8\u67B6\u56FE NoteListSkeleton \u7684 HTML-->
          <div>
            <ul class="notes-list skeleton-container">
              <li class="v-stack">
                <div
                  class="sidebar-note-list-item skeleton"
                  style="height:5em"
                ></div>
              </li>
              <li class="v-stack">
                <div
                  class="sidebar-note-list-item skeleton"
                  style="height:5em"
                ></div>
              </li>
              <li class="v-stack">
                <div
                  class="sidebar-note-list-item skeleton"
                  style="height:5em"
                ></div>
              </li>
            </ul>
          </div>
          <!--/$-->
        </nav>
      </div>
    </div>
    // ...
    <div hidden id="S:0">
      <!--\u8FD9\u91CC\u662F\u7B14\u8BB0\u5217\u8868 SidebarNoteList \u7684 HTML-->
      <ul class="notes-list">
        <li>
          <div class="sidebar-note-list-item ">
            <header class="sidebar-note-header">
              <strong>ea molestias</strong>
              <small>2023-12-13 05:19:48</small>
            </header>
            <button
              class="sidebar-note-open"
              style="border:1px solid transparent"
            >
              Open note for preview
            </button>
            <button class="sidebar-note-toggle-expand">
              <img
                src="/chevron-up.svg"
                width="10px"
                height="10px"
                alt="Expand"
              />
            </button>
          </div>
        </li>
        <li>
          <div class="sidebar-note-list-item ">
            <header class="sidebar-note-header">
              <strong>qui est</strong>
              <small>2023-12-13 05:19:48</small>
            </header>
            <button
              class="sidebar-note-open"
              style="border:1px solid transparent"
            >
              Open note for preview
            </button>
            <button class="sidebar-note-toggle-expand">
              <img
                src="/chevron-up.svg"
                width="10px"
                height="10px"
                alt="Expand"
              />
            </button>
          </div>
        </li>
        <li>
          <div class="sidebar-note-list-item ">
            <header class="sidebar-note-header">
              <strong>sunt aut</strong>
              <small>2023-12-13 05:19:48</small>
            </header>
            <button
              class="sidebar-note-open"
              style="border:1px solid transparent"
            >
              Open note for preview
            </button>
            <button class="sidebar-note-toggle-expand">
              <img
                src="/chevron-up.svg"
                width="10px"
                height="10px"
                alt="Expand"
              />
            </button>
          </div>
        </li>
      </ul>
    </div>
    <script>
      $RC = function (b, c, e) {
        // ...
      };
      $RC('B:0', 'S:0');
    <\/script>
  </body>
</html>
`,paraId:66,tocIndex:7},{value:"\u56E0\u4E3A\u4EE3\u7801\u6BD4\u8F83\u591A\uFF0C\u6240\u4EE5\u505A\u4E86\u4E00\u70B9\u7CBE\u7B80\uFF0C\u4F60\u4F1A\u53D1\u73B0\u5728\u8FD9\u4E2A HTML \u91CC\uFF0C\u9AA8\u67B6\u56FE\u7684 HTML \u548C\u7B14\u8BB0\u5217\u8868\u7684 HTML \u90FD\u8FD4\u56DE\u4E86\uFF0C\u6240\u4EE5\u4F7F\u7528 Suspense \u548C Streaming \u4E0D\u7528\u62C5\u5FC3\u4F1A\u5BF9 SEO \u9020\u6210\u5F71\u54CD\u3002",paraId:67,tocIndex:7},{value:"Suspense \u7684\u6548\u679C\u5C31\u662F\u5141\u8BB8\u4F60\u63A8\u8FDF\u6E32\u67D3\u67D0\u4E9B\u5185\u5BB9\uFF0C\u76F4\u5230\u6EE1\u8DB3\u67D0\u4E9B\u6761\u4EF6\uFF08\u4F8B\u5982\u6570\u636E\u52A0\u8F7D\u5B8C\u6BD5\uFF09\u3002\u5728\u5F00\u53D1 Next.js \u9879\u76EE\u7684\u65F6\u5019\uFF0C\u6709\u6570\u636E\u52A0\u8F7D\u7684\u5730\u65B9\u591A\u8003\u8651\u662F\u5426\u53EF\u4EE5\u4F7F\u7528 ",paraId:68,tocIndex:8},{value:"Suspense",paraId:68,tocIndex:8},{value:" \u6216\u8005 ",paraId:68,tocIndex:8},{value:"loading.js",paraId:68,tocIndex:8},{value:"\u5E26\u6765\u66F4\u597D\u7684\u4F53\u9A8C\u3002",paraId:68,tocIndex:8},{value:"\u90A3\u4E48\u4ECA\u5929\u7684\u5185\u5BB9\u5C31\u7ED3\u675F\u4E86\uFF0C\u672C\u7BC7\u6211\u4EEC\u5B8C\u5584\u4E86\u4FA7\u8FB9\u680F\u7B14\u8BB0\u5217\u8868\u7684\u6548\u679C\uFF0C\u4E86\u89E3\u4E86\u5728 Next.js \u4E2D\u4F7F\u7528\u670D\u52A1\u7AEF\u7EC4\u4EF6\u548C\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u7684\u6CE8\u610F\u4E8B\u9879\uFF0C\u5B66\u4E60\u5230\u4E86\u4E24\u4E2A\u6700\u4F73\u5B9E\u8DF5\uFF1A",paraId:69,tocIndex:9},{value:"\u5BA2\u6237\u7AEF\u7EC4\u4EF6\u4E0B\u79FB",paraId:70,tocIndex:9},{value:"\u4F7F\u7528 Suspense",paraId:70,tocIndex:9},{value:"\u672C\u7BC7\u7684\u4EE3\u7801\u6211\u5DF2\u7ECF\u4E0A\u4F20\u5230",paraId:71,tocIndex:9},{value:"\u4EE3\u7801\u4ED3\u5E93",paraId:71,tocIndex:9},{value:"\u7684 Day2 \u5206\u652F\uFF1A",paraId:71,tocIndex:9},{value:"https://github.com/mqyqingfeng/next-react-notes-demo/tree/day2",paraId:71,tocIndex:9},{value:"\uFF0C\u76F4\u63A5\u4F7F\u7528\u7684\u65F6\u5019\u4E0D\u8981\u5FD8\u8BB0\u5728\u672C\u5730\u5F00\u542F Redis\u3002",paraId:71,tocIndex:9}]}}]);
