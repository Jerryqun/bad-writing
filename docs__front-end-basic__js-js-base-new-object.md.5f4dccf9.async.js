"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1233],{53060:function(o,_,n){n.r(_);var a=n(55804),m=n(33405),l=n(72700),P=n(84359),h=n(88738),s=n(77658),E=n(75968),g=n(33044),r=n(41047),d=n(10577),t=n(96540),i=n(41707),e=n(74848);function u(){return(0,e.jsx)(r.LO,{children:(0,e.jsx)(t.Suspense,{fallback:(0,e.jsx)(d.A,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F"]}),(0,e.jsx)(s.A,{lang:"js",children:i.texts[0].value})]})})})})}_.default=u},41707:function(o,_,n){n.r(_),n.d(_,{texts:function(){return a}});const a=[{value:`// 1\u3001\u5DE5\u5382\u6A21\u5F0F

function createPerson(name, age) {
  const o = new Object();
  o.name = name;
  o.age = age;
  o.sayName = function () {
    alert(this.name);
  };
  return o;
}

const person = createPerson('cq', 18);

//2\u3001\u6784\u9020\u51FD\u6570
function Person(name, age, ob) {
  this.name = name;
  this.age = age;
  this.job = job;
  this.sayName = function () {
    alert(this.name);
  };
  var person1 = new Person('dada', 1, 'web');
  var person2 = new Person('dada', 2, 'web');
}

//3\u3001\u4F7F\u7528\u539F\u578B\u6A21\u5F0F
function Person() {}
Person.prototype.name = 'da';
Person.prototype.age = 1;
Person.prototype.job = 'web';
Person.prototype.sayName = function () {
  alert(this.name);
};

var person1 = new Person();
person1.sayName(); //"dada"

var person2 = new Person();
person2.sayName(); //"dada"

alert(person1.sayName == person2.sayName); //true

// 4\u3001\u7EC4\u5408
function Person(name, age) {
  this.name = name;
  this.age = age;
  this.friends = ['da', 'dada'];
}
Person.prototype = {
  constructor: Person,
  sayName: function () {
    alert(this.name);
  },
};
var person1 = new Person('da1', 1);
var person2 = new Person('da2', 2);
person1.friends.push('dadada');
console.log(person1.friends); //["da","dada","dadada"]
console.log(person2.friends); //["da","dada"]
console.log(person1.friends === person2.friends); //false
console.log(person1.sayName === person2.sayName); //true
`,paraId:0,tocIndex:0}]}}]);
