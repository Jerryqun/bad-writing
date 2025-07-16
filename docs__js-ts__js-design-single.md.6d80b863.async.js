"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[2700],{70264:function(a,t,n){n.r(t);var i=n(72269),u=n(93359),c=n(61788),g=n(19977),m=n(91558),s=n(24268),h=n(96057),E=n(85939),o=n(53683),l=n(80936),r=n(67294),_=n(86034),e=n(85893);function d(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(r.Suspense,{fallback:(0,e.jsx)(l.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u5355\u4F8B\u6A21\u5F0F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5355\u4F8B\u6A21\u5F0F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5355\u4F8B\u6A21\u5F0F"]}),(0,e.jsxs)("p",{children:[_.texts[0].value,(0,e.jsx)("br",{}),_.texts[1].value]}),(0,e.jsx)(s.Z,{lang:"js",children:_.texts[2].value}),(0,e.jsx)(s.Z,{lang:"js",children:_.texts[3].value})]})})})})}t.default=d},86034:function(a,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"\u7C7B\u53EA\u80FD new \u51FA\u4E00\u4E2A\u5BF9\u8C61",paraId:0,tocIndex:0},{value:`
\u5BF9\u8C61\u53EF\u5168\u5C40\u8BBF\u95EE`,paraId:0,tocIndex:0},{value:`/**
 * \u7B2C\u4E00\u79CD\u666E\u901A\u7248\u672C
 */
let instance = null;
function getSingleInstance() {
  if (!instance) {
    instance = this;
    return instance;
  }
  return instance;
}

const ins1 = new getSingleInstance();
const ins2 = new getSingleInstance();

ins1 === ins2; // true

/**
 * \u7B2C\u4E8C\u79CD\u60F0\u6027\u7248\u672C \uFF08\u5355\u4F8B\u6A21\u5F0F\u8C03\u7528\u7684\u65F6\u5019\u624D\u4F1A\u751F\u6210\u5B9E\u4F8B\uFF09
 */

const CreateSingleV1 = function (fn) {
  let result;
  return function () {
    return result || (result = fn.apply(this, arguments));
  };
};

/**
 * \u5F39\u6846demo \u4F7F\u7528\u60F0\u6027\u7248\u672C
 */

const createModal = function (message) {
  const box = document.createElement('div');
  box.innerHTML = message;
  box.className = 'box';
  document.body.appendChild(box);
  return box;
};

const createAlertMessaeg = CreateSingleV1(createModal);

modalAlert.onclick = function (params) {
  const alertMessaeg = createAlertMessaeg('yyds');
};

/**
 * \u7B2C\u4E09\u79CD\u95ED\u5305\u5B9E\u73B0(\u5355\u4E00\u804C\u8D23)
 */

var Singleton = function (name) {
  this.name = name;
};

Singleton.prototype.getName = function () {
  alert(this.name);
};

Singleton.getInstance = (function (name) {
  var instance;
  return function (name) {
    if (!instance) {
      instance = new Singleton(name);
    }
    return instance;
  };
})();

var a = Singleton.getInstance('ConardLi');
var b = Singleton.getInstance('ConardLi2');

console.log(a === b); //true

// \u7C7B\u7684\u5355\u4F8B\u6A21\u5F0F
// \u5B9A\u4E49\uFF1A\u4FDD\u8BC1\u4E00\u4E2A\u7C7B\u4EC5\u6709\u4E00\u4E2A\u5B9E\u4F8B\uFF0C\u5E76\u63D0\u4F9B\u4E00\u4E2A\u8BBF\u95EE\u5B83\u7684\u5168\u5C40\u8BBF\u95EE\u70B9\u3002
class Singleton {
  constructor(name) {
    this.name = name;
    this.instance = null;
  }

  getName() {
    console.log(this.name);
  }

  getInstance(name) {
    if (!this.instance) {
      this.instance = new Singleton(name);
    }

    return this.instance;
  }
}

const singleton = new Singleton();

const a = singleton.getInstance('a');
const b = singleton.getInstance('b');

console.log(a);
console.log(b);
console.log(a === b);
`,paraId:1,tocIndex:0},{value:`class Single {
    static instance: any
    private constructor() { }
    public static getInstance() {
        if (Single.instance) {
            return Single.instance
        }
        Single.instance = new Single()
        return Single.instance
    }
    a() { }
    b() { }
}

const a = Single.getInstance()
const b = Single.getInstance()
console.log(a === b) // true
`,paraId:2,tocIndex:0}]}}]);
