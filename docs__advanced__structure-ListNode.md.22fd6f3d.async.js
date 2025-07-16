"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[3663],{70755:function(a,r,e){e.r(r);var i=e(72269),l=e(93359),x=e(61788),c=e(19977),v=e(91558),d=e(24268),h=e(96057),m=e(85939),u=e(53683),_=e(80936),s=e(67294),t=e(90974),n=e(85893);function o(){return(0,n.jsx)(u.dY,{children:(0,n.jsx)(s.Suspense,{fallback:(0,n.jsx)(_.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsxs)("h2",{id:"\u94FE\u8868",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u94FE\u8868",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u94FE\u8868"]}),(0,n.jsxs)("p",{children:[t.texts[0].value,(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:t.texts[1].value}),(0,n.jsx)("br",{}),(0,n.jsx)("code",{children:t.texts[2].value}),(0,n.jsx)("br",{}),t.texts[3].value,(0,n.jsx)("br",{}),t.texts[4].value]}),(0,n.jsx)("p",{children:t.texts[5].value}),(0,n.jsx)(d.Z,{lang:"json",children:t.texts[6].value}),(0,n.jsx)("p",{children:t.texts[7].value}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[8].value}),(0,n.jsx)("p",{children:t.texts[9].value}),(0,n.jsxs)("p",{children:[t.texts[10].value,(0,n.jsx)("br",{}),t.texts[11].value]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[12].value}),(0,n.jsx)("p",{children:t.texts[13].value}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[14].value}),(0,n.jsxs)("h2",{id:"\u4F9D\u636E\u6570\u7EC4\u521B\u5EFA\u5355\u9879\u5217\u8868",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4F9D\u636E\u6570\u7EC4\u521B\u5EFA\u5355\u9879\u5217\u8868",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4F9D\u636E\u6570\u7EC4\u521B\u5EFA\u5355\u9879\u5217\u8868"]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[15].value}),(0,n.jsxs)("h2",{id:"\u53CD\u8F6C\u94FE\u8868",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u53CD\u8F6C\u94FE\u8868",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u53CD\u8F6C\u94FE\u8868"]}),(0,n.jsx)(d.Z,{lang:"js",children:t.texts[16].value})]})})})})}r.default=o},90974:function(a,r,e){e.r(r),e.d(r,{texts:function(){return i}});const i=[{value:"\u6570\u7EC4\u9700\u8981\u4E00\u6BB5\u8FDE\u7EED\u7684\u5185\u5B58\u7A7A\u95F4 \uFF0C\u800C\u94FE\u8868\u662F\u96F6\u6563\u7684",paraId:0,tocIndex:0},{value:"\u94FE\u8868\u3001\u6570\u7EC4\u3001map\u662F\u6709\u5E8F\u7ED3\u6784",paraId:0,tocIndex:0},{value:"\u5BF9\u8C61\u3001set\u662F\u65E0\u5E8F\u7ED3\u6784",paraId:0,tocIndex:0},{value:`
\u5BF9\u8C61\u548C map \u7684\u6838\u5FC3\u533A\u522B\u662F\u662F\u5426\u6709\u5E8F`,paraId:0,tocIndex:0},{value:`
\u6570\u7EC4\u548C set \u7684\u6838\u5FC3\u533A\u522B\u662F\u662F\u5426\u6709\u5E8F`,paraId:0,tocIndex:0},{value:"\u94FE\u8868\u7ED3\u6784",paraId:1,tocIndex:0},{value:`{
    // \u6570\u636E\u57DF
    val: 1,
    // \u6307\u9488\u57DF\uFF0C\u6307\u5411\u4E0B\u4E00\u4E2A\u7ED3\u70B9
    next: {
        val:2,
        next: ...
    }
}
`,paraId:2,tocIndex:0},{value:"\u94FE\u8868\u7ED3\u70B9\u7684\u521B\u5EFA",paraId:3,tocIndex:0},{value:`function ListNode(val) {
  this.val = val;
  this.next = null;
}

const node = new ListNode(1);
node.next = new ListNode(2);
`,paraId:4,tocIndex:0},{value:"\u94FE\u8868\u7ED3\u70B9\u4E2D\u95F4\u63D2\u5165\u8282\u70B9",paraId:5,tocIndex:0},{value:"\u73B0\u6709 \u8282\u70B9 1 \u548C\u8282\u70B9 2",paraId:6,tocIndex:0},{value:`
\u9700\u8981\u5728\u8282\u70B9 1 \u548C 2 \u4E4B\u524D\u63D2\u5165\u8282\u70B9 3`,paraId:6,tocIndex:0},{value:`function ListNode(val) {
  this.val = val;
  this.next = null;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;

// \u5982\u679C\u76EE\u6807\u7ED3\u70B9\u672C\u6765\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u8BB0\u5F97\u624B\u52A8\u521B\u5EFA
const node3 = new ListNode(3);
// \u628Anode3\u7684 next \u6307\u9488\u6307\u5411 node2\uFF08\u5373 node1.next\uFF09
node3.next = node1.next;
// \u628Anode1\u7684 next \u6307\u9488\u6307\u5411 node3
node1.next = node3;
`,paraId:7,tocIndex:0},{value:"\u5220\u9664\u8282\u70B9",paraId:8,tocIndex:0},{value:`function ListNode(val) {
  this.val = val;
  this.next = null;
}
const node1 = new ListNode(1);
const node2 = new ListNode(2);
node1.next = node2;

// \u5982\u679C\u76EE\u6807\u7ED3\u70B9\u672C\u6765\u4E0D\u5B58\u5728\uFF0C\u90A3\u4E48\u8BB0\u5F97\u624B\u52A8\u521B\u5EFA
const node3 = new ListNode(3);
// \u628Anode3\u7684 next \u6307\u9488\u6307\u5411 node2\uFF08\u5373 node1.next\uFF09
node3.next = node1.next;
// \u628Anode1\u7684 next \u6307\u9488\u6307\u5411 node3
node1.next = node3;

// \u5220\u9664\u903B\u8F91\u5F00\u59CB
node1.next = node3.next;
`,paraId:9,tocIndex:0},{value:`type ListNode = {
  value: number,
  next?: ListNode,
};

const createLinkList = (arr: number[]): ListNode | null => {
  if (arr.length === 0) {
    return null;
  }
  let cur: ListNode = {
    value: arr[arr.length - 1],
  };
  if (arr.length === 1) {
    return cur;
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    cur = {
      value: arr[i],
      next: cur,
    };
  }
  return cur;
};

console.log('---', createLinkList([1, 2, 3, 4]));
`,paraId:10,tocIndex:1},{value:`// \u53CD\u8F6C\u94FE\u8868\u7684\u51FD\u6570
type LinkListNode = {
  value: number,
  next?: LinkListNode,
};

const createLinkList = (arr: number[]): LinkListNode | undefined => {
  if (arr.length === 0) {
    return undefined;
  }
  let cur: LinkListNode = {
    value: arr[arr.length - 1],
  };
  if (arr.length === 1) {
    return cur;
  }
  for (let i = arr.length - 2; i >= 0; i--) {
    cur = {
      value: arr[i],
      next: cur,
    };
  }
  return cur;
};
const tree = createLinkList([1, 2, 3, 4]);
function reverseLinkedList(head: LinkListNode | undefined) {
  let previous = undefined; // \u4E0A\u4E00\u4E2A\u8282\u70B9
  let current = head; //\u5F53\u524D\u8282\u70B9

  while (current) {
    let next = current.next; // \u4FDD\u5B58\u4E0B\u4E00\u4E2A\u8282\u70B9
    current.next = previous; // \u53CD\u8F6C\u5F53\u524D\u8282\u70B9\u7684\u6307\u9488
    previous = current; // \u79FB\u52A8\u524D\u9A71\u6307\u9488
    current = next; // \u79FB\u52A8\u5230\u4E0B\u4E00\u4E2A\u8282\u70B9
  }
  return previous; // \u8FD4\u56DE\u65B0\u7684\u5934\u8282\u70B9
}
console.log('reverseLinkedList', reverseLinkedList(tree));
`,paraId:11,tocIndex:2}]}}]);
