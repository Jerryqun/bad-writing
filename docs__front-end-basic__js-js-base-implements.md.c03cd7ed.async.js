"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[4521],{80787:(function(r,e,n){n.r(e);var a=n(55804),m=n(33405),o=n(72700),g=n(84359),b=n(88738),d=n(77658),c=n(75968),E=n(33044),i=n(41047),s=n(10577),l=n(96540),t=n(76135),_=n(74848);function u(){return(0,_.jsx)(i.LO,{children:(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)(s.A,{}),children:(0,_.jsx)(_.Fragment,{children:(0,_.jsxs)("div",{className:"markdown",children:[(0,_.jsxs)("h2",{id:"implements-\u7528\u6CD5",children:[(0,_.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#implements-\u7528\u6CD5",children:(0,_.jsx)("span",{className:"icon icon-link"})}),"implements \u7528\u6CD5"]}),(0,_.jsx)(d.A,{lang:"js",children:t.texts[0].value}),(0,_.jsx)("p",{children:t.texts[1].value}),(0,_.jsx)(d.A,{lang:"js",children:t.texts[2].value})]})})})})}e.default=u}),76135:(function(r,e,n){n.r(e);const a=[{value:`// 1\u3001\u7C7B\u548C\u63A5\u53E3\u4E4B\u95F4\uFF1A
// \u7528\u63A5\u53E3\u53BB\u6807\u51C6class\uFF0C \u8981\u6C42AddStrategy\u7684\u5C5E\u6027\u548C\u65B9\u6CD5\u7B49\u8981\u4F9D\u7167CalculatorStrategy\u63A5\u53E3\u4E2D\u5B9A\u4E49\u7684\u6765
interface CalculatorStrategy {
  calculate: (a: number, b: number) => number;
}

class AddStrategy implements CalculatorStrategy {
  calculate(a: number, b: number) {
    return a + b;
  }
}

// 2\u3001\u7528\u4E8E\u7C7B\u4E0E\u7C7B\u4E4B\u95F4\uFF0C\u6B64\u65F6\u6CA1\u6709\u7EE7\u627F\u7684\u6210\u679C\uFF0C\u800C\u662F\u8981\u6C42Son\u4E0A\u8981\u6709\u5B9A\u4E49Father\u7C7B\u7684\u5C5E\u6027\u548C\u65B9\u6CD5

class CalculatorStrategy {
  calculate(a: number, b: number) {
    return a + b;
  }
}

class AddStrategy implements CalculatorStrategy {
  calculate(a: number, b: number) {
    return a + b;
  }
}
`,paraId:0,tocIndex:0},{value:"demo",paraId:1,tocIndex:0},{value:`interface Person {
  name: string;
  age?: number; // \u53EF\u9009\u5C5E\u6027
  greet(): void; // \u65B9\u6CD5\u7B7E\u540D
}

class Student implements Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log('Hello, my name is ' + this.name);
  }
}
`,paraId:2,tocIndex:0}];n.d(e,["texts",0,a])})}]);
