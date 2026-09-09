"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7534],{64569:(function(i,n,_){_.r(n);var t=_(55804),m=_(33405),o=_(72700),E=_(84359),h=_(88738),l=_(77658),g=_(75968),f=_(33044),a=_(41047),s=_(10577),u=_(96540),d=_(84570),e=_(74848);function r(){return(0,e.jsx)(a.LO,{children:(0,e.jsx)(u.Suspense,{fallback:(0,e.jsx)(s.A,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u7C7B\u4E2D-set-get-\u7528\u6CD5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7C7B\u4E2D-set-get-\u7528\u6CD5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7C7B\u4E2D set get \u7528\u6CD5"]}),(0,e.jsx)("p",{children:d.texts[0].value}),(0,e.jsx)(l.A,{lang:"ts",children:d.texts[1].value})]})})})})}n.default=r}),84570:(function(i,n,_){_.r(n);const t=[{value:`Getter \u548C setter \u662F\u7279\u6B8A\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u53EF\u5E2E\u52A9\u4F60\u6839\u636E\u7A0B\u5E8F\u7684\u9700\u8981\u59D4\u6D3E\u5BF9\u79C1\u6709\u53D8\u91CF\u7684\u4E0D\u540C\u7EA7\u522B\u7684\u8BBF\u95EE\u3002
Getters \u5141\u8BB8\u4F60\u5F15\u7528\u4E00\u4E2A\u503C\u4F46\u4E0D\u80FD\u7F16\u8F91\u5B83\u3002Setter \u5141\u8BB8\u4F60\u66F4\u6539\u53D8\u91CF\u7684\u503C\uFF0C\u4F46\u4E0D\u80FD\u67E5\u770B\u5176\u5F53\u524D\u503C\u3002\u8FD9\u4E9B\u5BF9\u4E8E\u5B9E\u73B0\u5C01\u88C5\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002
\u4F8B\u5982\uFF0C\u65B0\u96C7\u4E3B\u53EF\u80FD\u80FD\u591F\u901A\u8FC7 get \u83B7\u53D6\u516C\u53F8\u7684\u5458\u5DE5\u4EBA\u6570\uFF0C\u4F46\u65E0\u6743\u901A\u8FC7 set \u4FEE\u6539\u5458\u5DE5\u4EBA\u6570\u3002`,paraId:0,tocIndex:0},{value:`const fullNameMaxLength = 10;
class Employee {
  private _fullName = '';
  get fullName() {
    return this._fullName;
  }
  set fullName(newName) {
    if (newName && newName.length > fullNameMaxLength) {
      throw new Error('fullName has a max length of ' + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}

let employee = new Employee();
employee.fullName = 'Bob Smith';

if (employee.fullName) {
  console.log(employee.fullName);
}
`,paraId:1,tocIndex:0}];_.d(n,["texts",0,t])})}]);
