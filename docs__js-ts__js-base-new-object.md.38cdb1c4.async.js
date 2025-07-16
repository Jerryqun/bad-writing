"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[1420],{7465:function(o,_,n){n.r(_);var a=n(72269),m=n(93359),l=n(61788),P=n(19977),h=n(91558),s=n(24268),E=n(96057),g=n(85939),r=n(53683),d=n(80936),t=n(67294),i=n(60195),e=n(85893);function u(){return(0,e.jsx)(r.dY,{children:(0,e.jsx)(t.Suspense,{fallback:(0,e.jsx)(d.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u5BF9\u8C61\u7684\u51E0\u79CD\u521B\u5EFA\u65B9\u5F0F"]}),(0,e.jsx)(s.Z,{lang:"js",children:i.texts[0].value})]})})})})}_.default=u},60195:function(o,_,n){n.r(_),n.d(_,{texts:function(){return a}});const a=[{value:`// 1\u3001\u5DE5\u5382\u6A21\u5F0F

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
