"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9665],{19969:function(i,r,e){e.r(r);var _=e(72269),l=e(93359),c=e(61788),h=e(19977),x=e(91558),s=e(24268),g=e(96057),f=e(85939),u=e(53683),o=e(80936),a=e(67294),t=e(37135),n=e(85893);function d(){return(0,n.jsx)(u.dY,{children:(0,n.jsx)(a.Suspense,{fallback:(0,n.jsx)(o.Z,{}),children:(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)("div",{className:"markdown",children:[(0,n.jsx)("p",{children:(0,n.jsx)("a",{target:"_blank",href:"https://www.jianshu.com/p/707a304d7752",children:t.texts[0].value})}),(0,n.jsx)("p",{children:t.texts[1].value}),(0,n.jsxs)("p",{children:[t.texts[2].value,(0,n.jsx)("br",{}),t.texts[3].value,(0,n.jsx)("br",{})]}),(0,n.jsxs)("h3",{id:"\u6848\u4F8B",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u6848\u4F8B",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u6848\u4F8B"]}),(0,n.jsx)(s.Z,{lang:"ts",children:t.texts[4].value}),(0,n.jsxs)("h3",{id:"\u4E00\u9053-3-\u5C42\u7684-typescript-\u9762\u8BD5\u9898",children:[(0,n.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4E00\u9053-3-\u5C42\u7684-typescript-\u9762\u8BD5\u9898",children:(0,n.jsx)("span",{className:"icon icon-link"})}),"\u4E00\u9053 3 \u5C42\u7684 TypeScript \u9762\u8BD5\u9898"]}),(0,n.jsx)("p",{children:(0,n.jsx)("a",{target:"_blank",href:"https://juejin.cn/post/7182574672687398968",children:t.texts[5].value})}),(0,n.jsx)(s.Z,{lang:"js",children:t.texts[6].value}),(0,n.jsx)(s.Z,{lang:"ts",children:t.texts[7].value}),(0,n.jsx)(s.Z,{lang:"ts",children:t.texts[8].value})]})})})})}r.default=d},37135:function(i,r,e){e.r(r),e.d(r,{texts:function(){return _}});const _=[{value:"\u53C2\u8003",paraId:0},{value:"infer \u8BED\u6CD5\u7684\u9650\u5236\u5982\u4E0B\uFF1A",paraId:1},{value:"infer \u53EA\u80FD\u5728\u6761\u4EF6\u7C7B\u578B\u7684 extends \u5B50\u53E5\u4E2D\u4F7F\u7528",paraId:2},{value:`
infer \u5F97\u5230\u7684\u7C7B\u578B\u53EA\u80FD\u5728 true \u8BED\u53E5\u4E2D\u4F7F\u7528, \u5373 X \u4E2D\u4F7F\u7528`,paraId:2},{value:`//\u57FA\u672C\u4F7F\u7528
type InferArray<T> = T extends (infer U)[] ? U : never;
type I0 = InferArray<[number, string]>; // string | number
type I1 = InferArray<string[]>; // string
type I2 = InferArray<number[]>; // number

// \u63A8\u65AD\u6570\u7EC4(\u6216\u8005\u5143\u7EC4)\u7B2C\u4E00\u4E2A\u5143\u7D20\u7684\u7C7B\u578B
type InferFirst<T extends unknown[]> = T extends [infer P, ...infer _]
  ? P
  : never;
`,paraId:3,tocIndex:0},{value:"\u53C2\u8003",paraId:4,tocIndex:1},{value:`/**
 * \u7B2C\u4E00\u5C42\u7684\u8981\u6C42\u662F\u8FD9\u6837\u7684
 * \u5B9E\u73B0\u4E00\u4E2A zip \u51FD\u6570\uFF0C\u5BF9\u4E24\u4E2A\u6570\u7EC4\u7684\u5143\u7D20\u6309\u987A\u5E8F\u4E24\u4E24\u5408\u5E76\uFF0C\u6BD4\u5982\u8F93\u5165 [1,2,3], [4,5,6] \u65F6\uFF0C\u8FD4\u56DE [[1,4], [2,5],[3,6]]
 */

function zip(target, source) {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip(rest1, rest2)];
}
`,paraId:5,tocIndex:1},{value:`/**
 * \u7B2C\u4E8C\u5C42\u8981\u6C42
 * \u7ED9\u8FD9\u4E2A zip \u51FD\u6570\u5B9A\u4E49 ts \u7C7B\u578B\uFF08\u4E24\u79CD\u5199\u6CD5\uFF09
 */

//\u7B2C\u4E00\u79CD
function zip1(target: unknown[], source: unknown[]): unknown[] {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip1(rest1, rest2)];
}

type Zip1 = (target: unknown[], source: unknown[]) => unknown[];

interface Zip3 {
  (target: unknown[], source: unknown[]): unknown[];
}

const zip2: Zip3 = (target, source) => {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip(rest1, rest2)];
};

const result1 = zip1([1, 2, 3], [4, 5, 6]);
`,paraId:6,tocIndex:1},{value:`/**
 * \u7B2C\u4E09\u5C42\u8981\u6C42
 * \u7528\u7C7B\u578B\u7F16\u7A0B\u5B9E\u73B0\u7CBE\u786E\u7684\u7C7B\u578B\u63D0\u793A\uFF0C\u6BD4\u5982\u53C2\u6570\u4F20\u5165 [1,2,3], [4,5,6]\uFF0C\u90A3\u8FD4\u56DE\u503C\u7684\u7C7B\u578B\u8981\u63D0\u793A\u51FA [[1,4], [2,5],[3,6]]
 */

// infer \u4F7F\u7528

type one = [1, 2, 3] extends [infer One, ...infer Rest] ? One : never;
type rest = [1, 2, 3] extends [infer One, ...infer Rest] ? Rest : never;

// infer \u63A8\u5BFCZip\u7C7B\u578B

type Zip2<One extends unknown[], Other extends unknown[]> = One extends [
  infer OneFirst,
  ...infer Rest1,
]
  ? Other extends [infer OtherFirst, ...infer Rest2]
    ? [[OneFirst, OtherFirst], ...Zip2<Rest1, Rest2>]
    : []
  : [];

// \u53BB\u6389 readonly \u4FEE\u9970
type Mutable<Obj> = {
  -readonly [Key in keyof Obj]: Obj[Key];
};

// \u51FD\u6570\u91CD\u8F7D
function zip(target: unknown[], source: unknown[]): unknown[];

function zip<
  Target extends readonly unknown[],
  Source extends readonly unknown[],
>(target: Target, source: Source): Zip2<Mutable<Target>, Mutable<Source>>;

function zip(target: unknown[], source: unknown[]) {
  if (!target.length || !source.length) return [];

  const [one, ...rest1] = target;
  const [other, ...rest2] = source;

  return [[one, other], ...zip(rest1, rest2)];
}

const result4 = zip([1, 2, 3] as const, [4, 5, 6] as const);

const arr1 = [1, 2, 3];
const arr2 = [4, '5', 6];

const result3 = zip(arr1, arr2);
`,paraId:7,tocIndex:1}]}}]);
