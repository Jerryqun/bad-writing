"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2087],{39643:function(i,n,_){_.r(n);var t=_(72269),m=_(93359),o=_(61788),E=_(19977),h=_(91558),l=_(24268),g=_(96057),f=_(85939),a=_(53683),u=_(80936),s=_(67294),d=_(9245),e=_(85893);function r(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(s.Suspense,{fallback:(0,e.jsx)(u.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u7C7B\u4E2D-set-get-\u7528\u6CD5",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u7C7B\u4E2D-set-get-\u7528\u6CD5",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u7C7B\u4E2D set get \u7528\u6CD5"]}),(0,e.jsx)("p",{children:d.texts[0].value}),(0,e.jsx)(l.Z,{lang:"ts",children:d.texts[1].value})]})})})})}n.default=r},9245:function(i,n,_){_.r(n),_.d(n,{texts:function(){return t}});const t=[{value:`Getter \u548C setter \u662F\u7279\u6B8A\u7C7B\u578B\u7684\u65B9\u6CD5\uFF0C\u53EF\u5E2E\u52A9\u4F60\u6839\u636E\u7A0B\u5E8F\u7684\u9700\u8981\u59D4\u6D3E\u5BF9\u79C1\u6709\u53D8\u91CF\u7684\u4E0D\u540C\u7EA7\u522B\u7684\u8BBF\u95EE\u3002
Getters \u5141\u8BB8\u4F60\u5F15\u7528\u4E00\u4E2A\u503C\u4F46\u4E0D\u80FD\u7F16\u8F91\u5B83\u3002Setter \u5141\u8BB8\u4F60\u66F4\u6539\u53D8\u91CF\u7684\u503C\uFF0C\u4F46\u4E0D\u80FD\u67E5\u770B\u5176\u5F53\u524D\u503C\u3002\u8FD9\u4E9B\u5BF9\u4E8E\u5B9E\u73B0\u5C01\u88C5\u662F\u5FC5\u4E0D\u53EF\u5C11\u7684\u3002
\u4F8B\u5982\uFF0C\u65B0\u96C7\u4E3B\u53EF\u80FD\u80FD\u591F\u4E86\u89E3 get \u516C\u53F8\u7684\u5458\u5DE5\u4EBA\u6570\uFF0C\u4F46\u65E0\u6743 set \u4E86\u89E3\u5458\u5DE5\u4EBA\u6570\u3002`,paraId:0,tocIndex:0},{value:`const fullNameMaxLength = 10;
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
`,paraId:1,tocIndex:0}]}}]);
