"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[621],{80621:function(t,n,e){e.r(n),e.d(n,{texts:function(){return a}});const a=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:"\u6709\u517C\u5BB9\u6027\u95EE\u9898",paraId:1,tocIndex:1},{value:`<img src="./example.jpg" loading="lazy" />
`,paraId:2,tocIndex:1},{value:"\u5B9E\u73B0\u539F\u7406",paraId:3,tocIndex:2},{value:"\u62FF\u5230\u6240\u6709\u7684\u56FE\u7247 dom \u3002",paraId:4,tocIndex:2},{value:`
\u904D\u5386\u6BCF\u4E2A\u56FE\u7247\u5224\u65AD\u5F53\u524D\u56FE\u7247\u662F\u5426\u5230\u4E86\u53EF\u89C6\u533A\u8303\u56F4\u5185\u3002`,paraId:4,tocIndex:2},{value:`
\u5982\u679C\u5230\u4E86\u5C31\u8BBE\u7F6E\u56FE\u7247\u7684 src \u5C5E\u6027\u3002`,paraId:4,tocIndex:2},{value:`
\u7ED1\u5B9A window \u7684 scroll \u4E8B\u4EF6\uFF0C\u5BF9\u5176\u8FDB\u884C\u4E8B\u4EF6\u76D1\u542C\u3002`,paraId:4,tocIndex:2},{value:`function lazyLoad() {
  let viewHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight; //\u83B7\u53D6\u53EF\u89C6\u533A\u9AD8\u5EA6\uFF0C\u517C\u5BB9\u4E0D\u540C\u6D4F\u89C8\u5668
  let imgs = document.querySelectorAll('img[data-src]');
  imgs.forEach((item, index) => {
    if (item.dataset.src === '') return;

    // \u7528\u4E8E\u83B7\u5F97\u9875\u9762\u4E2D\u67D0\u4E2A\u5143\u7D20\u7684\u5DE6\uFF0C\u4E0A\uFF0C\u53F3\u548C\u4E0B\u5206\u522B\u76F8\u5BF9\u6D4F\u89C8\u5668\u89C6\u7A97\u7684\u4F4D\u7F6E
    let rect = item.getBoundingClientRect();
    if (rect.bottom >= 0 && rect.top < viewHeight) {
      item.src = item.dataset.src;
      item.removeAttribute('data-src'); // \u4F18\u5316 \u4E0B\u6B21\u83B7\u53D6\u7684\u65F6\u5019\u6392\u9664\u6389
    }
  });
}
window.addEventListener('scroll', lazyLoad);
`,paraId:5,tocIndex:2},{value:"\u4F7F\u7528 throttle \u6539\u8FDB",paraId:6,tocIndex:2},{value:`const throttle = (fn, timer) => {
  let pre = 0,
    t = null;
  return function (...args) {
    if (Date.now() - pre > timer) {
      clearTimeout(t);
      t = null;
      pre = Date.now();
      fn.apply(this, args);
    } else if (!t) {
      t = setTimeout(() => {
        fn.apply(this, args);
      }, timer);
    }
  };
};
window.addEventListener('scroll', throttle(lazyLoad, 200));

// throttle \u57FA\u4E8Elodash(_.throttle)
`,paraId:7,tocIndex:2},{value:"getBoundingClientRect \u8FD4\u56DE\u7684 DOMRect \u5BF9\u8C61\u5305\u542B\u4EE5\u4E0B\u5C5E\u6027\uFF1A",paraId:8,tocIndex:3},{value:"left: \u5143\u7D20\u5DE6\u8FB9\u76F8\u5BF9\u4E8E\u89C6\u53E3\u5DE6\u4FA7\u7684\u8DDD\u79BB\u3002",paraId:9,tocIndex:3},{value:`
top: \u5143\u7D20\u4E0A\u8FB9\u76F8\u5BF9\u4E8E\u89C6\u53E3\u9876\u90E8\u7684\u8DDD\u79BB\u3002`,paraId:9,tocIndex:3},{value:`
right: \u5143\u7D20\u53F3\u8FB9\u76F8\u5BF9\u4E8E\u89C6\u53E3\u5DE6\u4FA7\u7684\u8DDD\u79BB\u3002`,paraId:9,tocIndex:3},{value:`
bottom: \u5143\u7D20\u4E0B\u8FB9\u76F8\u5BF9\u4E8E\u89C6\u53E3\u9876\u90E8\u7684\u8DDD\u79BB\u3002`,paraId:9,tocIndex:3},{value:`
width: \u5143\u7D20\u7684\u5BBD\u5EA6\uFF08right - left\uFF09\u3002`,paraId:9,tocIndex:3},{value:`
height: \u5143\u7D20\u7684\u9AD8\u5EA6\uFF08bottom - top\uFF09\u3002`,paraId:9,tocIndex:3},{value:"\u57FA\u672C\u7528\u6CD5",paraId:10,tocIndex:4},{value:`var io = new IntersectionObserver(callback, option);

// \u5F00\u59CB\u89C2\u5BDF
io.observe(document.getElementById('example'));

// \u505C\u6B62\u89C2\u5BDF
io.unobserve(element);

// \u5173\u95ED\u89C2\u5BDF\u5668
io.disconnect();
`,paraId:11,tocIndex:4},{value:"\u4F7F\u7528 IntersectionObserver \u5B9E\u73B0\u61D2\u52A0\u8F7D",paraId:12,tocIndex:4},{value:`const imgs = document.querySelectorAll('img[data-src]');
const config = {
  rootMargin: '0px',
  threshold: 0,
};
let observer = new IntersectionObserver((entries, self) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      let img = entry.target;
      let src = img.dataset.src;
      if (src) {
        img.src = src;
        img.removeAttribute('data-src');
      }
      // \u89E3\u9664\u89C2\u5BDF
      self.unobserve(entry.target);
    }
  });
}, config);

imgs.forEach((image) => {
  observer.observe(image);
});
`,paraId:13,tocIndex:4},{value:`/**
 * in \u4F1A\u904D\u5386\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027
 * hasOwnProperty \u4E0D\u4F1A\u904D\u5386\u539F\u578B\u5BF9\u8C61\u4E0A\u7684\u5C5E\u6027
 */

const person = { age: 18 };
person.hasOwnProperty('age'); // true
'age' in person; // true

'toString' in a; //  true
person.hasOwnProperty('toString'); // false
`,paraId:14,tocIndex:5},{value:`document.getElementById \u83B7\u53D6\u52A8\u6001 dom
document.querySelector \u83B7\u53D6\u9759\u6001 dom`,paraId:15,tocIndex:6},{value:"\u5728\u8F6F\u4EF6\u9879\u76EE\u4E2D\uFF0C\u62E6\u622A\u5668\uFF08Interceptor\uFF09\u662F\u4E00\u79CD\u5E38\u7528\u7684\u8BBE\u8BA1\u6A21\u5F0F\uFF0C\u7528\u6765\u62E6\u622A\u4E00\u7CFB\u5217\u7684\u64CD\u4F5C\uFF0C\u7136\u540E\u5728\u8FD9\u4E9B\u64CD\u4F5C\u4E4B\u524D\u6216\u4E4B\u540E\u6267\u884C\u7279\u5B9A\u7684\u529F\u80FD",paraId:16,tocIndex:7},{value:`1\u3001\u8BA4\u8BC1\u548C\u6388\u6743
2\u3001\u65E5\u5FD7\u8BB0\u5F55
3\u3001\u6570\u636E\u9A8C\u8BC1\u3001\u6570\u636E\u52A0\u5DE5
4\u3001\u9519\u8BEF\u5904\u7406
5\u3001\u6027\u80FD\u76D1\u63A7
6\u3001\u7F13\u5B58\u7BA1\u7406
7\u3001\u8BF7\u6C42\u548C\u54CD\u5E94\u7684\u4FEE\u6539
8\u3001\u8DE8\u57DF\u5904\u7406
9\u3001\u5B89\u5168\u589E\u5F3A
10\u3001\u9650\u6D41\u548C\u964D\u7EA7
`,paraId:17,tocIndex:7},{value:`\u5E76\u4E0D\u662F\u6240\u6709\u7684\u4E8B\u4EF6\u90FD\u6709\u5192\u6CE1\u7684\uFF0C\u4F8B\u5982\u4EE5\u4E0B\u4E8B\u4EF6\u5C31\u6CA1\u6709\uFF1A
onblur
onfocus
onmouseenter
onmouseleave
`,paraId:18,tocIndex:8},{value:`== \uFF1A\u7B49\u4E8E\uFF0C\u4E24\u8FB9\u503C\u7C7B\u578B\u4E0D\u540C\u7684\u65F6\u5019\uFF0C\u5148\u8FDB\u884C\u7C7B\u578B\u8F6C\u6362\uFF0C\u518D\u6BD4\u8F83(\u53EA\u8981\u503C\u76F8\u7B49\u4FBF\u4E24\u8005\u76F8\u7B49)\uFF1B
\u5224\u65AD\u7684\u7C7B\u578B\u662F\u5426\u662F String \u548C Number\uFF0C\u662F\u7684\u8BDD\uFF0C\u628A String \u7C7B\u578B\u8F6C\u6362\u6210 Number\uFF0C\u518D\u8FDB\u884C\u6BD4\u8F83
\u5224\u65AD\u5176\u4E2D\u4E00\u65B9\u662F\u5426\u662F Boolean\uFF0C\u662F\u7684\u8BDD\u5C31\u628A Boolean \u8F6C\u6362\u6210 Number\uFF0C\u518D\u8FDB\u884C\u6BD4\u8F83
\u5982\u679C\u5176\u4E2D\u4E00\u65B9\u4E3A Object\uFF0C\u4E14\u53E6\u4E00\u65B9\u4E3A String\u3001Number \u6216\u8005 Symbol\uFF0C\u4F1A\u5C06 Object \u8F6C\u6362\u6210\u5B57\u7B26\u4E32\uFF0C\u518D\u8FDB\u884C\u6BD4\u8F83`,paraId:19,tocIndex:9},{value:"=== \uFF1A\u4E25\u683C\u7B49\u4E8E\uFF0C\u53EA\u6709\u5F53\u7C7B\u578B\u548C\u503C\u90FD\u76F8\u7B49\u65F6\uFF0C\u624D\u76F8\u7B49\uFF1B",paraId:19,tocIndex:9},{value:"Object.is() \uFF1A\u4E0E === \u7684\u4F5C\u7528\u57FA\u672C\u4E00\u6837\uFF0C\u4F46\u6709\u4E9B\u8BB8\u4E0D\u540C\u3002",paraId:19,tocIndex:9},{value:`Object.is() \u7684\u884C\u4E3A\u4E0E === \u57FA\u672C\u4E00\u81F4\uFF0C\u4F46\u6709\u4E24\u5904\u4E0D\u540C\uFF1A
a\u3001+0 \u4E0D\u7B49\u4E8E -0\uFF1B
b\u3001NaN \u7B49\u4E8E\u81EA\u8EAB\u3002`,paraId:19,tocIndex:9},{value:`null == undefined; //true
`,paraId:20,tocIndex:9},{value:`var a = '"123"';
var b = "'123'";
console.log(a === b); // false;
`,paraId:21,tocIndex:10},{value:"\u5728 JavaScript \u4E2D\uFF0C\u5B57\u7B26\u4E32\u53EF\u4EE5\u7528\u5355\u5F15\u53F7 (')\u3001\u53CC\u5F15\u53F7 (\") \u6216\u53CD\u5F15\u53F7 ( `) \u6765\u5B9A\u4E49\u3002\u5355\u5F15\u53F7\u4E0E\u53CC\u5F15\u53F7\u662F\u7B49\u6548\u7684\uFF0C\u4E3B\u8981\u53D6\u51B3\u4E8E\u5F00\u53D1\u8005\u7684\u4E2A\u4EBA\u504F\u597D\u6216\u9879\u76EE\u7EA6\u5B9A\u3002\u53CD\u5F15\u53F7\u5219\u901A\u5E38\u7528\u4E8E\u5B9A\u4E49\u6A21\u677F\u5B57\u7B26\u4E32\uFF0C\u53EF\u4EE5\u5305\u542B\u591A\u884C\u6587\u672C\u548C\u63D2\u5165\u8868\u8FBE\u5F0F\u3002",paraId:22,tocIndex:10},{value:`\u53D8\u91CF a \u88AB\u8D4B\u4E88\u4E86\u4E00\u4E2A\u4F7F\u7528\u53CC\u5F15\u53F7\u5B9A\u4E49\u7684\u5B57\u7B26\u4E32'"123"'\u3002\u6CE8\u610F\u5916\u5C42\u662F\u5355\u5F15\u53F7\uFF0C\u91CC\u9762\u7684\u5B57\u7B26\u5305\u62EC\u4E86\u53CC\u5F15\u53F7\u548C\u6570\u5B57 123\u3002
\u53D8\u91CF b \u88AB\u8D4B\u4E88\u4E86\u4E00\u4E2A\u4F7F\u7528\u5355\u5F15\u53F7\u5B9A\u4E49\u7684\u5B57\u7B26\u4E32"'123'"\u3002\u8FD9\u91CC\u5916\u5C42\u662F\u53CC\u5F15\u53F7\uFF0C\u91CC\u9762\u7684\u5B57\u7B26\u5305\u62EC\u4E86\u5355\u5F15\u53F7\u548C\u6570\u5B57 123\u3002
\u56E0\u6B64\uFF0C\u53D8\u91CF a \u548C b \u5206\u522B\u4FDD\u5B58\u7684\u5B57\u7B26\u4E32\u662F\u4E0D\u540C\u7684\u3002\u53D8\u91CF a \u5305\u542B\u4E86\u53CC\u5F15\u53F7\u5B57\u7B26\uFF0C\u800C\u53D8\u91CF b \u5305\u542B\u4E86\u5355\u5F15\u53F7\u5B57\u7B26\uFF0C\u5B83\u4EEC\u7684\u503C\u4E0D\u76F8\u540C\u3002`,paraId:23,tocIndex:10},{value:"\u6267\u884C console.log(a === b); \u4F1A\u6BD4\u8F83\u8FD9\u4E24\u4E2A\u5B57\u7B26\u4E32\u662F\u5426\u76F8\u7B49\u3002\u7531\u4E8E\u8FD9\u4E24\u4E2A\u5B57\u7B26\u4E32\u7684\u5185\u5BB9\u4E0D\u540C\uFF0C\u5B83\u4EEC\u7684\u6BD4\u8F83\u7ED3\u679C\u4E3A false\u3002",paraId:24,tocIndex:10},{value:`== \u4E2D\uFF0C\u5DE6\u53F3\u4E24\u8FB9\u90FD\u9700\u8981\u8F6C\u6362\u4E3A\u6570\u5B57\u7136\u540E\u8FDB\u884C\u6BD4\u8F83
[]\u8F6C\u6362\u4E3A\u6570\u5B57\u4E3A 0
![] \u9996\u5148\u662F\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\uFF0C\u7531\u4E8E[]\u4F5C\u4E3A\u4E00\u4E2A\u5F15\u7528\u7C7B\u578B\u8F6C\u6362\u4E3A\u5E03\u5C14\u503C\u4E3A true
\u56E0\u6B64![]\u4E3A false\uFF0C\u8FDB\u800C\u5728\u8F6C\u6362\u6210\u6570\u5B57\uFF0C\u53D8\u4E3A 0
0 == 0 \uFF0C \u7ED3\u679C\u4E3A true`,paraId:25,tocIndex:11},{value:"Number([]) \u7B49\u4E8E 0",paraId:26,tocIndex:11},{value:`\u5728 JavaScript \u4E2D\uFF0Cthis \u5173\u952E\u5B57\u7684\u6307\u5411\u901A\u5E38\u662F\u52A8\u6001\u7684\uFF0C\u800C\u4E0D\u662F\u9759\u6001\u7684
\u8FD9\u610F\u5473\u7740 this \u53EF\u4EE5\u6839\u636E\u4E0A\u4E0B\u6587\u73AF\u5883\u7684\u53D8\u5316\u800C\u53D1\u751F\u6539\u53D8\uFF0C\u5BFC\u81F4\u5B83\u7684\u6307\u5411\u53D8\u5F97\u6DF7\u4E71\u6216\u96BE\u4EE5\u9884\u6D4B`,paraId:27,tocIndex:12},{value:"1\u3001\u51FD\u6570\u8C03\u7528\u65B9\u5F0F\u4E0D\u540C\uFF1A\u5F53\u4E00\u4E2A\u51FD\u6570\u88AB\u8C03\u7528\u65F6\uFF0C\u5B83\u7684 this \u503C\u53D6\u51B3\u4E8E\u8C03\u7528\u65B9\u5F0F\u3002\u5982\u679C\u4F7F\u7528\u666E\u901A\u51FD\u6570\u8C03\u7528\u65B9\u5F0F\uFF08\u5982 func()\uFF09\uFF0C\u5219 this \u4F1A\u6307\u5411\u5168\u5C40\u5BF9\u8C61 window\uFF1B\u5982\u679C\u4F7F\u7528\u65B9\u6CD5\u8C03\u7528\u65B9\u5F0F\uFF08\u5982 obj.func()\uFF09\uFF0C\u5219 this \u4F1A\u6307\u5411\u8C03\u7528\u8BE5\u65B9\u6CD5\u7684\u5BF9\u8C61\u3002",paraId:28,tocIndex:12},{value:"2\u3001\u7BAD\u5934\u51FD\u6570\u7684\u4F7F\u7528\uFF1A\u7BAD\u5934\u51FD\u6570\u4E0D\u5177\u6709\u81EA\u5DF1\u7684 this \u503C\uFF0C\u5B83\u4F1A\u6355\u83B7\u4E0A\u4E0B\u6587\u4E2D\u7684 this \u503C\u3002\u56E0\u6B64\uFF0C\u5982\u679C\u5728\u7BAD\u5934\u51FD\u6570\u4E2D\u8BBF\u95EE this\uFF0C\u5B83\u5C06\u5F15\u7528\u5916\u5C42\u4F5C\u7528\u57DF\u4E2D\u7684 this \u503C\u3002",paraId:29,tocIndex:12},{value:"3\u3001\u4F7F\u7528 apply\u3001call \u548C bind \u65B9\u6CD5\uFF1Aapply\u3001call \u548C bind \u65B9\u6CD5\u53EF\u4EE5\u6539\u53D8\u51FD\u6570\u6267\u884C\u65F6\u7684 this \u503C\u3002\u5176\u4E2D\uFF0Capply \u548C call \u65B9\u6CD5\u53EF\u4EE5\u7ACB\u5373\u6267\u884C\u51FD\u6570\u5E76\u4F20\u5165\u53C2\u6570\uFF0C\u800C bind \u65B9\u6CD5\u53EF\u4EE5\u8FD4\u56DE\u4E00\u4E2A\u65B0\u51FD\u6570\uFF0C\u8BE5\u51FD\u6570\u7684 this \u503C\u88AB\u7ED1\u5B9A\u5230\u6307\u5B9A\u7684\u5BF9\u8C61\u4E0A\u3002",paraId:30,tocIndex:12},{value:"4\u3001DOM \u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u7684\u4F7F\u7528\uFF1A\u5728\u5904\u7406 DOM \u4E8B\u4EF6\u65F6\uFF0C\u6D4F\u89C8\u5668\u4F1A\u5C06\u4E8B\u4EF6\u5904\u7406\u7A0B\u5E8F\u5185\u90E8\u7684 this \u6307\u5411\u89E6\u53D1\u4E8B\u4EF6\u7684\u5143\u7D20\u3002",paraId:31,tocIndex:12},{value:"5\u3001\u5BF9\u8C61\u7684\u5D4C\u5957\u548C\u7EE7\u627F\uFF1A\u5F53\u4E00\u4E2A\u5BF9\u8C61\u88AB\u5D4C\u5957\u5728\u53E6\u4E00\u4E2A\u5BF9\u8C61\u4E2D\u6216\u8005\u4F7F\u7528\u7EE7\u627F\u65F6\uFF0Cthis \u7684\u6307\u5411\u53EF\u80FD\u4F1A\u53D8\u5F97\u6DF7\u4E71\u3002\u8FD9\u662F\u56E0\u4E3A this \u7684\u6307\u5411\u53D6\u51B3\u4E8E\u51FD\u6570\u88AB\u8C03\u7528\u65F6\u7684\u4E0A\u4E0B\u6587\u73AF\u5883\uFF0C\u800C\u4E0D\u662F\u5BF9\u8C61\u672C\u8EAB\u3002\u56E0\u6B64\uFF0C\u5728\u5D4C\u5957\u5BF9\u8C61\u6216\u7EE7\u627F\u7C7B\u4E2D\u4F7F\u7528 this \u65F6\uFF0C\u9700\u8981\u7279\u522B\u6CE8\u610F\u5B83\u7684\u6307\u5411\u3002",paraId:32,tocIndex:12},{value:"onmouseenter -> onmousedown -> onfocus -> onclick",paraId:33,tocIndex:13},{value:"mousedown/mouseup -- \u9F20\u6807\u4EFB\u610F\u952E\u6309\u4E0B/\u677E\u8D77\u3002",paraId:34,tocIndex:13},{value:"mouseenter/mouseleave -- \u9F20\u6807\u8FDB\u5165/\u79BB\u5F00\u5143\u7D20\uFF0C\u4E0D\u4F1A\u5192\u6CE1\u3002",paraId:35,tocIndex:13},{value:"mouseover/mouseout -- \u9F20\u6807\u8FDB\u5165/\u79BB\u5F00\u5143\u7D20\uFF0C\u4F1A\u5192\u6CE1\uFF0C\u8FDB\u5165/\u79BB\u5F00\u5B50\u5143\u7D20\u65F6\u4E5F\u4F1A\u89E6\u53D1\u3002",paraId:36,tocIndex:13},{value:`const obj = {
  get a() {
    this.value = this.value || 0;
    return ++this.value;
  },
};

var a = {
  value: 0,
  valueOf: function () {
    this.value++;
    return this.value;
  },
};

if (obj.a === 1 && obj.a === 2 && obj.a === 3) {
  console.log('\u8FDB\u6765\u4E86');
}
`,paraId:37,tocIndex:14},{value:"\u7531\u4E8E JavaScript \u662F\u53EF\u64CD\u7EB5 DOM \u7684,\u5982\u679C\u5728\u4FEE\u6539\u8FD9\u4E9B\u5143\u7D20\u5C5E\u6027\u540C\u65F6\u6E32\u67D3\u754C\u9762\uFF08\u5373 JavaScript \u7EBF\u7A0B\u548C UI \u7EBF\u7A0B\u540C\u65F6\u8FD0\u884C\uFF09,\u90A3\u4E48\u6E32\u67D3\u7EBF\u7A0B\u524D\u540E\u83B7\u5F97\u7684\u5143\u7D20\u6570\u636E\u5C31\u53EF\u80FD\u4E0D\u4E00\u81F4\u4E86",paraId:38,tocIndex:15},{value:`
\u56E0\u6B64\u4E3A\u4E86\u9632\u6B62\u6E32\u67D3\u51FA\u73B0\u4E0D\u53EF\u9884\u671F\u7684\u7ED3\u679C,`,paraId:38,tocIndex:15},{value:"\u6D4F\u89C8\u5668\u8BBE\u7F6E GUI \u6E32\u67D3\u7EBF\u7A0B\u4E0E JavaScript \u5F15\u64CE\u4E3A\u4E92\u65A5\u7684\u5173\u7CFB",paraId:38,tocIndex:15},{value:`
\u5F53 JavaScript \u5F15\u64CE\u6267\u884C\u65F6 GUI \u7EBF\u7A0B\u4F1A\u88AB\u6302\u8D77,GUI \u66F4\u65B0\u4F1A\u88AB\u4FDD\u5B58\u5728\u4E00\u4E2A\u961F\u5217\u4E2D\u7B49\u5230\u5F15\u64CE\u7EBF\u7A0B\u7A7A\u95F2\u65F6\u7ACB\u5373\u88AB\u6267\u884C`,paraId:38,tocIndex:15},{value:`
\u4ECE\u4E0A\u9762\u6211\u4EEC\u53EF\u4EE5\u63A8\u7406\u51FA,\u7531\u4E8E GUI \u6E32\u67D3\u7EBF\u7A0B\u4E0E JavaScript \u6267\u884C\u7EBF\u7A0B\u662F\u4E92\u65A5\u7684\u5173\u7CFB,`,paraId:38,tocIndex:15},{value:`
\u5F53\u6D4F\u89C8\u5668\u5728\u6267\u884C JavaScript \u7A0B\u5E8F\u7684\u65F6\u5019,GUI \u6E32\u67D3\u7EBF\u7A0B\u4F1A\u88AB\u4FDD\u5B58\u5728\u4E00\u4E2A\u961F\u5217\u4E2D,\u76F4\u5230 JS \u7A0B\u5E8F\u6267\u884C\u5B8C\u6210,\u624D\u4F1A\u63A5\u7740\u6267\u884C`,paraId:38,tocIndex:15},{value:`
\u56E0\u6B64\u5982\u679C JS \u6267\u884C\u7684\u65F6\u95F4\u8FC7\u957F,\u8FD9\u6837\u5C31\u4F1A\u9020\u6210\u9875\u9762\u7684\u6E32\u67D3\u4E0D\u8FDE\u8D2F,\u5BFC\u81F4\u9875\u9762\u6E32\u67D3\u52A0\u8F7D\u963B\u585E\u7684\u611F\u89C9`,paraId:38,tocIndex:15},{value:"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u91C7\u7528\u4E86\u7C7B\u4F3C\u4E8E Web \u7684 WXML \u548C WXSS \u8BED\u8A00\u6765\u63CF\u8FF0\u9875\u9762\u7ED3\u6784\u548C\u6837\u5F0F\uFF0C\u4F46\u662F\u5374\u6CA1\u6709\u63D0\u4F9B\u76F4\u63A5\u64CD\u4F5C DOM \u7684 API\u3002",paraId:39,tocIndex:16},{value:"\u8FD9\u662F\u56E0\u4E3A\u5C0F\u7A0B\u5E8F\u672C\u8EAB\u662F\u5728\u4E00\u4E2A JavaScript \u73AF\u5883\u4E2D\u8FD0\u884C\u7684\uFF0C\u5176\u9009\u7528\u7684\u662F JavaScriptCore \u5F15\u64CE\uFF0C\u800C\u4E0D\u662F\u6D4F\u89C8\u5668\u4E2D\u5E38\u89C1\u7684 V8 \u5F15\u64CE\u3002JavaScriptCore \u4E0E V8 \u5F15\u64CE\u7684\u5B9E\u73B0\u65B9\u5F0F\u5B58\u5728\u8F83\u5927\u5DEE\u5F02\uFF0C\u5176\u4E2D\u4E00\u4E2A\u663E\u8457\u7684\u7279\u70B9\u662F JavaScriptCore \u7684\u6267\u884C\u901F\u5EA6\u8F83\u6162\u3002\u5BF9\u4E8E\u5C0F\u7A0B\u5E8F\u5F00\u53D1\u8005\u6765\u8BF4\uFF0C\u76F4\u63A5\u64CD\u4F5C DOM \u4F1A\u6BD4\u8F83\u8017\u65F6\uFF0C\u4F1A\u5BFC\u81F4\u6027\u80FD\u4E0B\u964D\u548C\u4F53\u9A8C\u5DEE\u3002",paraId:40,tocIndex:16},{value:"\u53E6\u5916\uFF0C\u5C0F\u7A0B\u5E8F\u7684\u8BBE\u8BA1\u521D\u8877\u4E5F\u662F\u4E3A\u4E86\u63D0\u4F9B\u4E00\u79CD\u66F4\u8F7B\u91CF\u7EA7\u3001\u66F4\u5FEB\u901F\u542F\u52A8\u7684\u5E94\u7528\u65B9\u5F0F\uFF0C\u5B83\u7684\u5B9A\u4F4D\u662F\u201C\u53BB\u4E2D\u5FC3\u5316\u3001\u4F4E\u95E8\u69DB\u3001\u9AD8\u7075\u6D3B\u6027\u201D\u7684\u3002\u5982\u679C\u5141\u8BB8\u5F00\u53D1\u8005\u76F4\u63A5\u64CD\u4F5C DOM\uFF0C\u90A3\u4E48\u5C31\u53EF\u80FD\u4F1A\u6253\u7834\u8FD9\u79CD\u8BBE\u8BA1\u7406\u5FF5\uFF0C\u589E\u52A0\u5C0F\u7A0B\u5E8F\u7684\u590D\u6742\u6027\u548C\u5F00\u53D1\u96BE\u5EA6\u3002",paraId:41,tocIndex:16},{value:"\u56E0\u6B64\uFF0C\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u6682\u65F6\u4E0D\u652F\u6301\u76F4\u63A5\u64CD\u4F5C DOM\u3002\u5F00\u53D1\u8005\u9700\u8981\u901A\u8FC7\u5176\u4ED6\u65B9\u5F0F\u6765\u5B9E\u73B0\u7C7B\u4F3C\u7684\u529F\u80FD\uFF0C\u4F8B\u5982\u4F7F\u7528\u7EC4\u4EF6\u6216\u81EA\u5B9A\u4E49\u7EC4\u4EF6\uFF0C\u5229\u7528\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F\u63D0\u4F9B\u7684 API \u8FDB\u884C\u9875\u9762\u6E32\u67D3\u548C\u4EA4\u4E92\u3002",paraId:42,tocIndex:16},{value:`console.log(Array(3)) // [empty x 3]
console.log(Array(3, 4)) // [3, 4]

// \u8BF7\u521B\u5EFA\u4E00\u4E2A\u957F\u5EA6\u4E3A100\uFF0C\u503C\u4E3A\u5BF9\u5E94\u4E0B\u6807\u7684\u6570\u7EC4
// cool\u7684\u5199\u6CD5\uFF1A
[...Array(100).keys()]

// \u5176\u4ED6\u65B9\u6CD5\uFF1A
Array(100).join(",").split(",").map((v, i) => i)
Array(100).fill().map((v, i) => i)
`,paraId:43,tocIndex:17},{value:"\u53EF\u4EE5",paraId:44,tocIndex:18},{value:`class Dog {
  constructor(name) {
    this.name = name;
  }
}

Dog.prototype.bark = function () {
  console.log(\`Woof I am \${this.name}\`);
};

const pet = new Dog('Mara');

pet.bark(); // "Woof I am Mara",

delete Dog.prototype.bark;

pet.bark(); //  TypeError
`,paraId:45,tocIndex:18},{value:"import \u547D\u4EE4\u662F\u7F16\u8BD1\u9636\u6BB5\u6267\u884C\u7684\uFF0C\u5728\u4EE3\u7801\u8FD0\u884C\u4E4B\u524D\u3002\u56E0\u6B64\u8FD9\u610F\u5473\u7740\u88AB\u5BFC\u5165\u7684\u6A21\u5757\u4F1A\u5148\u8FD0\u884C\uFF0C\u800C\u5BFC\u5165\u6A21\u5757\u7684\u6587\u4EF6\u4F1A\u540E\u6267\u884C\u3002",paraId:46,tocIndex:19},{value:`
\u8FD9\u662F CommonJS \u4E2D require\uFF08\uFF09\u548C import \u4E4B\u95F4\u7684\u533A\u522B\u3002\u4F7F\u7528 require()\uFF0C\u60A8\u53EF\u4EE5\u5728\u8FD0\u884C\u4EE3\u7801\u65F6\u6839\u636E\u9700\u8981\u52A0\u8F7D\u4F9D\u8D56\u9879\u3002`,paraId:46,tocIndex:19},{value:`
\u5982\u679C\u6211\u4EEC\u4F7F\u7528 require \u800C\u4E0D\u662F import\uFF0Crunning index.js\uFF0Crunning sum.js\uFF0C3 \u4F1A\u88AB\u4F9D\u6B21\u6253\u5370\u3002`,paraId:46,tocIndex:19},{value:`// index.js
console.log('running index.js');
import { sum } from './sum.js';
console.log(sum(1, 2));

// sum.js
console.log('running sum.js');
export const sum = (a, b) => a + b;

// running sum.js, running index.js, 3
`,paraId:47,tocIndex:19},{value:"JavaScript \u5B9E\u73B0\u5BF9\u4E0A\u4F20\u56FE\u7247\u7684\u538B\u7F29",paraId:48,tocIndex:20},{value:`
\u8BFB\u53D6\u7528\u6237\u4E0A\u4F20\u7684 File \u5BF9\u8C61\uFF0C\u8BFB\u5199\u5230\u753B\u5E03\uFF08canvas\uFF09\u4E0A\uFF0C\u5229\u7528 Canvas \u7684 API \u8FDB\u884C\u538B\u7F29\uFF0C\u5B8C\u6210\u538B\u7F29\u4E4B\u540E\u518D\u8F6C\u6210 File\uFF08Blob\uFF09 \u5BF9\u8C61\uFF0C`,paraId:48,tocIndex:20},{value:`
\u4E0A\u4F20\u5230\u8FDC\u7A0B\u56FE\u7247\u670D\u52A1\u5668\uFF1B`,paraId:48,tocIndex:20},{value:`
\u4E0D\u8FC7\u6709\u65F6\u5019\u6211\u4EEC\u4E5F\u9700\u8981\u5C06\u4E00\u4E2A base64 \u5B57\u7B26\u4E32\u538B\u7F29\u4E4B\u540E\u518D\u53D8\u4E3A base64 \u5B57\u7B26\u4E32\u4F20\u5165\u5230\u8FDC\u7A0B\u6570\u636E\u5E93\u6216\u8005\u518D\u8F6C\u6210 File\uFF08Blob\uFF09 \u5BF9\u8C61\u3002`,paraId:48,tocIndex:20},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Title</title>
  </head>

  <body>
    <input id="upload" type="file" />

    <script>
      const FILETYPES = ['image/png', 'image/jpg', 'image/jpeg']; // \u53D7\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B
      const MAX_FILESIZE = 1024 * 1024 * 3; // 1024 * 1024 \u4E3A1M
      const MAX_FILESIZESTRING = '3M'; // \u6587\u4EF6\u5927\u5C0F\u5B57\u7B26
      const COMPRESSRATIO = 0.5; // \u538B\u7F29\u6BD4\u4F8B 0 - 1
      const upload = document.querySelector('#upload');

      const imageToBase64 = (file, callback) => {
        const reader = new FileReader();
        reader.readAsDataURL(file); // \u6587\u4EF6\u8F6Cbase64
        reader.addEventListener('load', (e) => {
          callback && callback(e.target.result);
        });
      };

      const compress = (originalImage, compressRatio = 1, callback) => {
        const image = new Image();
        image.src = originalImage;
        // document.body.appendChild(image); // \u539F\u56FE\u9884\u89C8

        /* \u76D1\u542C\u56FE\u7247\u7684load\u4E8B\u4EF6 */
        image.addEventListener('load', function () {
          let [sizeRatio, maxWidth, maxHeight] = [0, 100, 100]; // \u56FE\u7247\u538B\u7F29\u5BBD\u9AD8\u6BD4\u4F8B\u548C\u6700\u5927\u5BBD\u9AD8
          let [imageWidth, imageHeight] = [
            this.naturalWidth,
            this.naturalHeight,
          ]; // \u56FE\u7247\u5B9E\u9645\u5BBD\u9AD8
          let compressFlag = false; // \u56FE\u7247\u662F\u5426\u9700\u8981\u538B\u7F29

          // \u5982\u679C\u56FE\u7247\u5BBD\u5EA6\u5927\u4E8E\u6700\u5927\u5BBD\u5EA6\u5C31\u7B49\u6BD4\u538B\u7F29\u56FE\u7247\u7684\u9AD8\u5EA6
          if (imageWidth > maxWidth) {
            compressFlag = true;
            sizeRatio = imageWidth / maxWidth;
            maxHeight = imageHeight / sizeRatio;
          }

          // \u5982\u679C\u56FE\u7247\u9AD8\u5EA6\u5927\u4E8E\u6700\u5927\u9AD8\u5EA6\u5C31\u7B49\u6BD4\u538B\u7F29\u56FE\u7247\u7684\u5BBD\u5EA6
          if (imageHeight > maxHeight) {
            compressFlag = true;
            sizeRatio = imageHeight / maxHeight;
            maxWidth = imageWidth / sizeRatio;
          }

          // \u5982\u679C\u4E0D\u9700\u8981\u538B\u7F29
          if (!compressFlag) {
            maxWidth = imageWidth;
            maxHeight = imageHeight;
          }

          // \u4F7F\u7528canvas\u538B\u7F29\u56FE\u7247
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          canvas.setAttribute('id', 'canvas');
          canvas.width = maxWidth;
          canvas.height = maxHeight;
          // document.body.appendChild(canvas); // canvas\u9884\u89C8
          ctx.clearRect(0, 0, maxWidth, maxHeight); // \u6E05\u9664\u753B\u5E03\u5185\u6240\u6709\u50CF\u7D20
          ctx.drawImage(image, 0, 0, maxWidth, maxHeight); // canvas\u7ED8\u5236\u5F53\u524D\u56FE\u7247
          const compressImage = canvas.toDataURL('image/jpeg', compressRatio); // \u8BBE\u7F6E\u538B\u7F29\u7C7B\u578B\u548C\u538B\u7F29\u6BD4\u4F8B\u83B7\u53D6\u538B\u7F29\u540E\u7684\u6587\u4EF6

          callback && callback(compressImage);
        });
      };

      upload.addEventListener('change', function (e) {
        const [file] = e.target.files;
        if (!file) this.value = ''; // file\u4E3A\u7A7A\u5C31\u963B\u6B62\u5411\u4E0B\u6267\u884C
        const { type: fileType, size: fileSize } = file; // \u83B7\u53D6\u6587\u4EF6\u7C7B\u578B\u548C\u5927\u5C0F
        // \u68C0\u67E5\u662F\u5426\u652F\u6301\u7684\u6587\u4EF6\u7C7B\u578B
        if (!FILETYPES.includes(fileType)) {
          this.value = '';
          alert(\`\u4E0D\u652F\u6301\${fileType}\u7C7B\u578B\u6587\u4EF6\`);
          return;
        }
        // \u68C0\u67E5\u6587\u4EF6\u5927\u5C0F
        if (fileSize > MAX_FILESIZE) {
          this.value = '';
          alert(\`\u6587\u4EF6\u4E0D\u80FD\u8D85\u8FC7\${MAX_FILESIZESTRING}\`);
          return;
        }

        imageToBase64(file, (originalImage) => {
          compress(originalImage, COMPRESSRATIO, (compressImage) => {
            const _img = new Image();
            _img.src = compressImage;
            const download = document.createElement('a');
            download.href = compressImage;
            download.innerText = '\u70B9\u51FB\u4FDD\u5B58';
            download.setAttribute('download', 'demo.jpg');
            document.body.appendChild(download);
            document.body.appendChild(_img); // \u538B\u7F29\u540E\u7684\u56FE\u7247\u9884\u89C8
          });
        });
      });
    <\/script>
  </body>
</html>
`,paraId:49,tocIndex:20},{value:"\u4F17\u6240\u5468\u77E5\uFF0CJavaScript \u5B9E\u73B0\u5F02\u6B65\u8BF7\u6C42\u5C31\u9760\u6D4F\u89C8\u5668\u63D0\u4F9B\u7684\u4E24\u4E2A API \u2014\u2014 XMLHttpRequest \u548C Fetch\u3002",paraId:50,tocIndex:21},{value:`
\u6211\u4EEC\u5E73\u5E38\u7528\u7684\u8F83\u591A\u7684\u662F Promise \u8BF7\u6C42\u5E93 axios\uFF0C\u5B83\u57FA\u4E8E XMLHttpRequest\u3002`,paraId:50,tocIndex:21},{value:`
\u672C\u7BC7\u5E26\u6765 XMLHttpRequest\u3001Fetch \u548C axios \u5206\u522B\u662F\u600E\u6837\u201C\u53D6\u6D88\u8BF7\u6C42\u201D\u7684\u3002`,paraId:50,tocIndex:21},{value:`const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://127.0.0.1:3000/api/get', true);
xhr.send();
setTimeout(() => {
  xhr.abort();
}, 500);

// \u53D6\u6D88\u8BF7\u6C42\uFF0CreadyState \u4F1A\u53D8\u6210 XMLHttpRequest.UNSENT(0)\uFF1B\u8BF7\u6C42\u7684 xhr.status \u4F1A\u88AB\u8BBE\u4E3A 0
`,paraId:51,tocIndex:22},{value:`const controller = new AbortController();
void (async function () {
  const response = await fetch('http://127.0.0.1:3000/api/get', {
    signal: controller.signal,
  });
  const data = await response.json();
})();

setTimeout(() => {
  controller.abort();
}, 1000);

// controller.abort() \u4F20\u5165\u201C\u53D6\u6D88\u8BF7\u6C42\u7684\u539F\u56E0\u201D\u53C2\u6570\uFF0C\u7136\u540E\u53EF\u4EE5\u8FDB\u884C try...catch \u6355\u83B7
`,paraId:52,tocIndex:23},{value:"\u6CE8\u610F\uFF1Aaxios \u4E4B\u524D\u7528\u4E8E\u53D6\u6D88\u8BF7\u6C42\u7684 CancelToken \u65B9\u6CD5\u5DF2\u7ECF\u88AB\u5F03\u7528",paraId:53,tocIndex:24},{value:`const controller = new AbortController();
const API_URL = 'http://127.0.0.1:3000/api/get';
void (async function () {
  const response = await axios.get(API_URL, {
    signal: controller.signal,
  });
  const { data } = response;
})();
setTimeout(() => {
  controller.abort();
}, 1000);
`,paraId:54,tocIndex:24},{value:"\u4E00\u3001\u8BED\u4E49\u4E0A",paraId:55,tocIndex:25},{value:`
null\uFF1A\u4EE3\u8868\u7A7A\u5BF9\u8C61`,paraId:55,tocIndex:25},{value:`
undefined\uFF1A\u4EE3\u8868\u672A\u5B9A\u4E49\u7684\u503C`,paraId:55,tocIndex:25},{value:"\u4E8C\u3001\u68C0\u6D4B\u4E0A",paraId:56,tocIndex:25},{value:`
typeof null === "object"`,paraId:56,tocIndex:25},{value:`
typeof undefined === "undefined"`,paraId:56,tocIndex:25},{value:"\u4E09\u3001\u9690\u5F0F\u7C7B\u578B\u8F6C\u6362\u4E0A",paraId:57,tocIndex:25},{value:`
Number(null) => 0`,paraId:57,tocIndex:25},{value:`
Number(undefined) => NaN`,paraId:57,tocIndex:25},{value:"\u56DB\u3001\u5176\u4ED6\u89D2\u5EA6",paraId:58,tocIndex:25},{value:`
\u51FD\u6570\u7684\u9ED8\u8BA4\u8FD4\u56DE\u503C\u662F undefined`,paraId:58,tocIndex:25},{value:`
\u539F\u578B\u94FE\u7684\u7EC8\u70B9\u662F null`,paraId:58,tocIndex:25},{value:`
JS \u5E95\u5C42\u4E2D\u7684\u5BF9\u8C61\u673A\u5668\u7801\u662F\u4EE5"000"\u5F00\u5934\uFF0C\u800C null \u7684\u673A\u5668\u7801\u5168\u90FD\u662F 0`,paraId:58,tocIndex:25},{value:"then \u65B9\u6CD5\u7684\u7B2C\u4E8C\u4E2A\u53C2\u6570\u548C catch \u65B9\u6CD5\u90FD\u662F\u7528\u4E8E\u5904\u7406 Promise \u7684 rejected \u72B6\u6001\u7684\u60C5\u51B5\uFF0C\u4F46\u524D\u8005\u9700\u8981\u5728\u6BCF\u6B21\u8C03\u7528 then \u65B9\u6CD5\u65F6\u90FD\u4F20\u9012\u7B2C\u4E8C\u4E2A\u53C2\u6570\uFF0C\u800C\u540E\u8005\u5219\u53EF\u4EE5\u94FE\u5F0F\u8C03\u7528\u3002",paraId:59,tocIndex:26},{value:"\u7ED9\u5B9A\u5B57\u7B26\u4E32 str\uFF0C\u68C0\u67E5\u5176\u662F\u5426\u7B26\u5408\u5982\u4E0B\u683C\u5F0F",paraId:60,tocIndex:27},{value:`
1\u3001XXX-XXX-XXXX`,paraId:60,tocIndex:27},{value:`
2\u3001\u5176\u4E2D X \u4E3A Number \u7C7B\u578B`,paraId:60,tocIndex:27},{value:`function matchesPattern(str) {
  return /^\\d{3}-\\d{3}-\\d{4}$/.test(str);
}
`,paraId:61,tocIndex:27},{value:`function rgbToHex(rgb) {
  // \u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D rgb \u683C\u5F0F
  const regex = /^rgb\\s*\\(\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*,\\s*(\\d{1,3})\\s*\\)$/;
  const match = rgb.match(regex);

  if (!match) {
    // \u5982\u679C\u4E0D\u5339\u914D\uFF0C\u8FD4\u56DE\u539F\u5B57\u7B26\u4E32
    return rgb;
  }

  // \u5C06 rgb \u503C\u8F6C\u6362\u4E3A\u5341\u516D\u8FDB\u5236\uFF0C\u5E76\u786E\u4FDD\u5B83\u4EEC\u662F\u4E24\u4F4D\u6570
  function toHex(component) {
    const hex = parseInt(component, 10).toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  }

  // \u4ECE\u6B63\u5219\u8868\u8FBE\u5F0F\u5339\u914D\u4E2D\u63D0\u53D6\u989C\u8272\u5206\u91CF
  const r = toHex(match[1]);
  const g = toHex(match[2]);
  const b = toHex(match[3]);

  // \u62FC\u63A5\u6210\u5341\u516D\u8FDB\u5236\u989C\u8272\u8868\u793A
  return \`#\${r}\${g}\${b}\`.toUpperCase();
}

// \u6D4B\u8BD5\u51FD\u6570
console.log(rgbToHex('rgb(255, 200, 100)')); // \u8F93\u51FA: #FFC864
console.log(rgbToHex('rgb(255,255,255)')); // \u8F93\u51FA: #FFFFFF
console.log(rgbToHex('rgb(0, 0, 0)')); // \u8F93\u51FA: #000000
console.log(rgbToHex('rgb(255, 200)')); // \u8F93\u51FA: rgb(255, 200)
`,paraId:62,tocIndex:28},{value:"1\u3001\u6DFB\u52A0\u5220\u9664",paraId:63,tocIndex:29},{value:`const arr = [1, 2, 3];
arr.push(4);
arr.unshift(323);

arr.pop();
arr.shift();

arr.splice(1, 1);
arr.slice();
arr.concat();
`,paraId:64,tocIndex:29},{value:"2\u3001\u67E5\u8BE2",paraId:65,tocIndex:29},{value:`const arr = [1, 2, 3];
arr.find;
arr.findIndex;
arr.includes;
arr.indexOf;
arr.lastIndexOf;
arr.filter;
`,paraId:66,tocIndex:29},{value:"3.\u8F6C\u6362",paraId:67,tocIndex:29},{value:`const arr = [1, 2, 3];
arr.map;
arr.reduce;
arr.reduceRight;
arr.sort;
arr.reverse;
arr.join;
`,paraId:68,tocIndex:29},{value:"Array.of() \u5C06\u4E00\u7EC4\u503C\u8F6C\u6362\u4E3A\u6570\u7EC4",paraId:69,tocIndex:29},{value:`Array.prototype.myUnshift = function () {
  const params = arguments;
  for (let i = params.length - 1; i >= 0; i--) {
    this.splice(0, 0, params[i]);
  }
  return this.length;
};
const a = [1, 2, 4];
a.myUnshift(4, 5);
// a.unshift(4, 5);
console.log('a', a);
`,paraId:70,tocIndex:30},{value:"1\u3001\u6DFB\u52A0",paraId:71,tocIndex:31},{value:`const str = '123';
str.concat('32');
`,paraId:72,tocIndex:31},{value:"concat \u4F20\u5165\u6570\u7EC4\u4F1A\u89E3\u6784\u7B2C\u4E00\u5C42;",paraId:73,tocIndex:31},{value:`let arr = [];
arr.concat([1, 2, 3, [4]]);
console.log('arr: ', arr); // [1, 2, 3, [4]]
`,paraId:74,tocIndex:31},{value:`2\u3001substring \u548C substr \u7684\u533A\u522B\u662F\u4EC0\u4E48
\u53C2\u6570\u4E0D\u540C\uFF1Asubstring() \u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u5206\u522B\u8868\u793A\u8D77\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E\uFF08\u4E0D\u5305\u62EC\u7ED3\u675F\u4F4D\u7F6E\u5BF9\u5E94\u7684\u5B57\u7B26\uFF09\uFF0C\u800C substr() \u65B9\u6CD5\u63A5\u53D7\u4E24\u4E2A\u53C2\u6570\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u8868\u793A\u8D77\u59CB\u4F4D\u7F6E\uFF0C\u7B2C\u4E8C\u4E2A\u53C2\u6570\u8868\u793A\u8981\u622A\u53D6\u7684\u5B57\u7B26\u4E2A\u6570\u3002`,paraId:75,tocIndex:31},{value:`var str = 'hello world';

console.log(str.substring(3, 7)); // \u8F93\u51FA "lo w"
console.log(str.substr(3, 4)); // \u8F93\u51FA "lo w"

console.log(str.substring(7, 3)); // \u8F93\u51FA "lo w"\uFF08\u8D77\u59CB\u4F4D\u7F6E\u548C\u7ED3\u675F\u4F4D\u7F6E\u4F1A\u81EA\u52A8\u8C03\u6574\uFF09
console.log(str.substr(7, -2)); // \u8F93\u51FA ""\uFF08\u8D1F\u6570\u53C2\u6570\u8F6C\u6362\u4E3A 0\uFF09

console.log(str.substring(-3, 8)); // \u8F93\u51FA "hello "\uFF08\u8D1F\u6570\u53C2\u6570\u8F6C\u6362\u4E3A 0\uFF09
console.log(str.substr(-3, 2)); // \u8F93\u51FA "rl"\uFF08-3 \u8868\u793A\u5012\u6570\u7B2C\u4E09\u4E2A\u5B57\u7B26\uFF0C2 \u8868\u793A\u622A\u53D6\u4E24\u4E2A\u5B57\u7B26\uFF09
`,paraId:76,tocIndex:31},{value:`3\u3001\u6539
replace() trimRight trimLeft trim padStart padEnd toUpperCase toLowerCase`,paraId:77,tocIndex:31},{value:`4\u3001\u67E5
indexOf includes lastIndexOf find endsWith startWith`,paraId:78,tocIndex:31},{value:"5\u3001\u8F6C\u6362 split",paraId:79,tocIndex:31},{value:"\u8BE5\u65B9\u6CD5\u6709\u4E24\u4E2A\u53C2\u6570\uFF1A",paraId:80,tocIndex:31},{value:`separator\uFF1A\u5FC5\u9700\u3002\u5B57\u7B26\u4E32\u6216\u6B63\u5219\u8868\u8FBE\u5F0F\uFF0C\u4ECE\u8BE5\u53C2\u6570\u6307\u5B9A\u7684\u5730\u65B9\u5206\u5272 string\u3002
limit\uFF1A\u53EF\u9009\u3002\u8BE5\u53C2\u6570\u53EF\u6307\u5B9A\u8FD4\u56DE\u7684\u6570\u7EC4\u7684\u6700\u5927\u957F\u5EA6\u3002\u5982\u679C\u8BBE\u7F6E\u4E86\u8BE5\u53C2\u6570\uFF0C\u8FD4\u56DE\u7684\u5B50\u4E32\u4E0D\u4F1A\u591A\u4E8E\u8FD9\u4E2A\u53C2\u6570\u6307\u5B9A\u7684\u6570\u7EC4\u3002\u5982\u679C\u6CA1\u6709\u8BBE\u7F6E\u8BE5\u53C2\u6570\uFF0C\u6574\u4E2A\u5B57\u7B26\u4E32\u90FD\u4F1A\u88AB\u5206\u5272\uFF0C\u4E0D\u8003\u8651\u5B83\u7684\u957F\u5EA6\u3002`,paraId:81,tocIndex:31},{value:"\u5176\u5B9E\u5728\u5C06\u5B57\u7B26\u4E32\u5206\u5272\u6210\u6570\u7EC4\u65F6\uFF0C\u53EF\u4EE5\u540C\u65F6\u62C6\u5206\u591A\u4E2A\u5206\u5272\u7B26\uFF0C\u4F7F\u7528\u6B63\u5219\u8868\u8FBE\u5F0F\u5373\u53EF\u5B9E\u73B0\uFF1A",paraId:82,tocIndex:31},{value:`let str = 'abcdef';
str.split('c'); // \u8F93\u51FA\u7ED3\u679C\uFF1A["ab", "def"]
str.split('', 4); // \u8F93\u51FA\u7ED3\u679C\uFF1A['a', 'b', 'c', 'd']

const list = 'apples,bananas;cherries';
const fruits = list.split(/[,;]/);
console.log(fruits); // \u8F93\u51FA\u7ED3\u679C\uFF1A["apples", "bananas", "cherries"]
`,paraId:83,tocIndex:31},{value:"1\u3001\u4F7F\u7528 instanceof",paraId:84,tocIndex:32},{value:`function Person(name) {
  if (!this instanceof Person) {
    throw new TypeError(
      'Function constructor A cannot be invoked without "new"',
    );
  }
  this.name = name;
}
`,paraId:85,tocIndex:32},{value:`2\u3001\u4F7F\u7528 new.target
JavaScript \u5B98\u65B9\u4E5F\u53D1\u73B0\u4E86\u8FD9\u4E2A\u8BA9\u4EBA\u68D8\u624B\u7684\u95EE\u9898\uFF0C\u56E0\u6B64 ES6 \u4E2D\u63D0\u4F9B\u4E86 new.target \u5C5E\u6027\u3002`,paraId:86,tocIndex:32},{value:"\u300AECMAScript 6 \u5165\u95E8\u300B\u4E2D\u8BB2\u5230: ES6 \u4E3A new \u547D\u4EE4\u5F15\u5165\u4E86\u4E00\u4E2A new.target \u5C5E\u6027\uFF0C\u8BE5\u5C5E\u6027\u4E00\u822C\u7528\u5728\u6784\u9020\u51FD\u6570\u4E4B\u4E2D\uFF0C\u8FD4\u56DE new \u547D\u4EE4\u4F5C\u7528\u4E8E\u7684\u90A3\u4E2A\u6784\u9020\u51FD\u6570\u3002\u5982\u679C\u6784\u9020\u51FD\u6570\u4E0D\u662F\u901A\u8FC7 new \u547D\u4EE4\u6216 Reflect.construct() \u8C03\u7528\u7684\uFF0Cnew.target \u4F1A\u8FD4\u56DE undefined \uFF0C\u56E0\u6B64\u8FD9\u4E2A\u5C5E\u6027\u53EF\u4EE5\u7528\u6765\u786E\u5B9A\u6784\u9020\u51FD\u6570\u662F\u600E\u4E48\u8C03\u7528\u7684\u3002",paraId:87,tocIndex:32},{value:"new.target \u5C31\u662F\u4E3A\u786E\u5B9A\u6784\u9020\u51FD\u6570\u7684\u8C03\u7528\u65B9\u5F0F\u800C\u751F\u7684\uFF0C\u592A\u7B26\u5408\u8FD9\u4E2A\u573A\u666F\u4E86\uFF0C\u6211\u4EEC\u6765\u8BD5\u4E00\u4E0B new.target \u7684\u7528\u6CD5\u3002",paraId:88,tocIndex:32},{value:`function Person() {
  console.log(new.target);
}
// new: Person {}
console.log('new: ', new Person());
// not new: undefined
console.log('not new:', Person());

function Person() {
  if (!new.target) {
    throw new TypeError(
      'Function constructor A cannot be invoked without "new"',
    );
  }
}
// Uncaught TypeError: Function constructor A cannot be invoked without "new"
console.log('not new:', Person());
`,paraId:89,tocIndex:32},{value:"3\u3001\u7C7B",paraId:90,tocIndex:32},{value:"[1, NaN, NaN]",paraId:91,tocIndex:33},{value:"parseInt(str,radix)\uFF0C radix \u9ED8\u8BA4\u7B49\u4E8E 10",paraId:92,tocIndex:33},{value:`
radix = > (2-36)\uFF0C 0 \u5F53\u4E0D\u5B58\u5728 10 \u5904\u7406`,paraId:92,tocIndex:33},{value:`parseInt('1', 0); // 1
parseInt('2', 1); // NaN
parseInt('3', 2); // NaN
`,paraId:93,tocIndex:33},{value:`\u6B63\u5219\u8868\u8FBE\u5F0F /[object\\s(.+)]/ \u89E3\u91CA
/.../ \u662F\u6B63\u5219\u8868\u8FBE\u5F0F\u7684\u5B9A\u754C\u7B26\u3002`,paraId:94,tocIndex:34},{value:`
[object\\s \u90E8\u5206\uFF1A`,paraId:94,tocIndex:34},{value:`
[object \u5339\u914D\u5B57\u7B26\u4E32 [object\u3002\u65B9\u62EC\u53F7\u662F\u4E00\u4E2A\u7279\u6B8A\u5B57\u7B26\uFF0C\u6240\u4EE5\u7528\u53CD\u659C\u6760\u8F6C\u4E49\u3002
\\s \u5339\u914D\u4E00\u4E2A\u7A7A\u683C\u5B57\u7B26\uFF08\u5305\u62EC\u7A7A\u683C\u3001\u5236\u8868\u7B26\u7B49\uFF09\u3002
(.+) \u90E8\u5206\uFF1A
() \u662F\u6355\u83B7\u7EC4\uFF0C\u8868\u793A\u6211\u4EEC\u8981\u6355\u83B7\u7684\u5185\u5BB9\u3002
.+ \u8868\u793A\u5339\u914D\u4E00\u4E2A\u6216\u591A\u4E2A\u4EFB\u610F\u5B57\u7B26\uFF08\u9664\u4E86\u6362\u884C\u7B26\uFF09\u3002
] \u5339\u914D\u5B57\u7B26\u4E32\u4E2D\u7684 ] \u5B57\u7B26\uFF0C\u540C\u6837\u9700\u8981\u8F6C\u4E49\u3002
"$1"`,paraId:94,tocIndex:34},{value:`
$1 \u8868\u793A\u7B2C\u4E00\u4E2A\u6355\u83B7\u7EC4\u7684\u5185\u5BB9\u3002\u5728\u8FD9\u4E2A\u6B63\u5219\u8868\u8FBE\u5F0F\u4E2D\uFF0C\u6355\u83B7\u7EC4\u5C31\u662F (.+)\uFF0C\u4E5F\u5C31\u662F [object \u548C ] \u4E4B\u95F4\u7684\u5185\u5BB9\u3002`,paraId:94,tocIndex:34},{value:`const myType = (params) => {
  const toString = Object.prototype.toString;
  let type = toString.call(params).replace(/\\[object\\s(.+)\\]/, '$1');
  if (type === 'Object') {
    type = params.constructor.name;
  }
  return params instanceof Element ? 'Element' : type;
};
`,paraId:95,tocIndex:34},{value:"\u5728 JavaScript \u4E2D\uFF0C\u5E8F\u5217\u5316\u662F\u5C06\u4E00\u4E2A JavaScript \u5BF9\u8C61\u6216\u503C\u8F6C\u6362\u4E3A\u5B57\u7B26\u4E32\u7684\u8FC7\u7A0B\u3002\u5E8F\u5217\u5316\u7684\u4E3B\u8981\u7528\u9014\u662F\u5728\u7F51\u7EDC\u4F20\u8F93\u4E2D\u53D1\u9001\u6570\u636E\uFF0C\u6216\u8005\u5C06\u6570\u636E\u4FDD\u5B58\u5230\u672C\u5730\u5B58\u50A8\u3001\u6587\u4EF6\u7B49\u5730\u65B9\u3002\u901A\u5E38\u4F7F\u7528 JSON.stringify() \u65B9\u6CD5\u6765\u5B8C\u6210\u5E8F\u5217\u5316\uFF0C\u53CD\u8FC7\u6765\u7684\u8FC7\u7A0B\u53EB\u505A\u53CD\u5E8F\u5217\u5316\uFF0C\u5373\u5C06 JSON \u5B57\u7B26\u4E32\u8F6C\u6362\u56DE JavaScript \u5BF9\u8C61\uFF0C\u8FD9\u901A\u5E38\u4F7F\u7528 JSON.parse() \u65B9\u6CD5\u5B9E\u73B0",paraId:96,tocIndex:35},{value:"\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\uFF1AJavaScript \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u4E8B\u4EF6\u5FAA\u73AF\u673A\u5236\u610F\u5473\u7740\u5982\u679C\u4E3B\u7EBF\u7A0B\u6B63\u5728\u5904\u7406\u5176\u4ED6\u4EFB\u52A1\uFF08\u5982\u5904\u7406 DOM\u3001\u7F51\u7EDC\u8BF7\u6C42\u3001\u5176\u4ED6\u5B9A\u65F6\u5668\u7B49\uFF09\uFF0CsetTimeout \u7684\u56DE\u8C03\u51FD\u6570\u53EF\u80FD\u4F1A\u88AB\u63A8\u8FDF\u6267\u884C\u3002",paraId:97,tocIndex:36},{value:"\u8BA1\u65F6\u5668\u7CBE\u5EA6\uFF1AsetTimeout \u7684\u5EF6\u8FDF\u65F6\u95F4\u4E0D\u662F\u7EDD\u5BF9\u7684\u3002\u6839\u636E HTML5 \u89C4\u8303\uFF0C\u5EF6\u8FDF\u65F6\u95F4\u4F1A\u88AB\u89C6\u4E3A\u4E00\u4E2A\u6700\u5C0F\u503C\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u51C6\u786E\u7684\u503C\u3002\u8FD9\u610F\u5473\u7740\u6D4F\u89C8\u5668\u53EF\u80FD\u4F1A\u5C06\u5B9E\u9645\u7684\u5EF6\u8FDF\u65F6\u95F4\u5EF6\u957F\u5230\u8FD9\u4E2A\u503C\u6216\u66F4\u957F\uFF0C\u800C\u4E0D\u662F\u4E25\u683C\u9075\u5FAA\u4F60\u4F20\u5165\u7684\u65F6\u95F4\u3002",paraId:98,tocIndex:36},{value:"\u7CFB\u7EDF\u6027\u80FD\uFF1A\u5728\u9AD8\u8D1F\u8F7D\u7684\u7CFB\u7EDF\u6216\u8005\u4F4E\u6027\u80FD\u7684\u8BBE\u5907\u4E0A\uFF0CJavaScript \u5F15\u64CE\u7684\u6267\u884C\u53EF\u80FD\u4F1A\u53D7\u5230\u5F71\u54CD\uFF0C\u4ECE\u800C\u5BFC\u81F4\u5EF6\u8FDF\u589E\u52A0\u3002",paraId:99,tocIndex:36},{value:"\u4F4E\u9891\u7387\u7684\u5B9A\u65F6\u5668\uFF1A\u5927\u591A\u6570\u6D4F\u89C8\u5668\u5728\u7A97\u53E3\u4E0D\u6D3B\u52A8\u65F6\u4F1A\u964D\u4F4E\u5B9A\u65F6\u5668\u7684\u9891\u7387\u3002\u4F8B\u5982\uFF0C\u5728\u4E00\u4E2A\u6807\u7B7E\u9875\u6CA1\u6709\u88AB\u6FC0\u6D3B\u7684\u60C5\u51B5\u4E0B\uFF0CsetTimeout \u7684\u7CBE\u5EA6\u53EF\u80FD\u4F1A\u53D7\u5230\u5F71\u54CD\u3002",paraId:100,tocIndex:36},{value:"\u4F7F\u7528 requestAnimationFrame\uFF1A",paraId:101,tocIndex:36},{value:`function step() {
  console.log('render---');
  // \u4F60\u7684\u903B\u8F91
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);
`,paraId:102,tocIndex:36},{value:`\u4FDD\u6301\u8BA1\u7B97\u65F6\u95F4\u95F4\u9694\u7684\u4E00\u81F4\u6027\uFF1A
\u5728 setTimeout \u6216 setInterval \u7684\u56DE\u8C03\u4E2D\u4F7F\u7528\u5B9E\u9645\u7684\u65F6\u95F4\u6233\u6765\u8BA1\u7B97\u4E0B\u4E00\u4E2A\u65F6\u95F4\u70B9\uFF0C\u800C\u4E0D\u662F\u4EC5\u4F9D\u8D56\u8BBE\u5B9A\u7684\u95F4\u9694\u3002`,paraId:103,tocIndex:36},{value:`const expectedInterval = 1000; // \u671F\u671B\u7684\u95F4\u9694\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2

let lastTimestamp = Date.now();

function accurateInterval() {
  const now = Date.now();
  const drift = now - lastTimestamp - expectedInterval;

  // \u66F4\u65B0 lastTimestamp \u4E3A\u73B0\u5728
  lastTimestamp = now;

  // \u5728\u8FD9\u91CC\u6267\u884C\u4EFB\u52A1
  console.log('Interval task is executed.');

  // \u6839\u636E\u8BEF\u5DEE\u8FDB\u884C\u8C03\u6574
  setTimeout(accurateInterval, expectedInterval - drift);
}

setTimeout(accurateInterval, expectedInterval);
`,paraId:104,tocIndex:36},{value:"\u4F7F\u7528 Web Workers\uFF1A",paraId:105,tocIndex:36},{value:`\u51CF\u5C11\u4EE3\u7801\u963B\u585E
\u5C3D\u53EF\u80FD\u4F18\u5316\u548C\u907F\u514D\u963B\u585E\u4E3B\u7EBF\u7A0B\u7684\u4EE3\u7801\uFF0C\u6BD4\u5982\u51CF\u5C11 DOM \u64CD\u4F5C\u548C\u590D\u6742\u8BA1\u7B97\uFF0C\u540C\u65F6\u8C28\u614E\u4F7F\u7528\u540C\u6B65 API\u3002`,paraId:106,tocIndex:36},{value:`\u76D1\u63A7\u548C\u8C03\u6574\u7CFB\u7EDF\u8D1F\u8F7D\uFF1A
\u89C2\u5BDF\u548C\u5206\u6790\u7CFB\u7EDF\u8D1F\u8F7D\u72B6\u51B5\uFF0C\u907F\u514D\u5728\u6D4F\u89C8\u5668\u4EFB\u52A1\u7E41\u5FD9\u7684\u65F6\u5019\u6267\u884C\u9AD8\u9891\u5B9A\u65F6\u5668\u4EFB\u52A1`,paraId:107,tocIndex:36},{value:`let time = 0;
let nowTime = +new Date();
let timer;
const poll = function () {
  timer = setTimeout(() => {
    const lastTime = nowTime;
    nowTime = +new Date();
    console.log('\u9012\u5F52setTimeout(fn,0)\u4EA7\u751F\u65F6\u95F4\u5DEE\uFF1A', nowTime - lastTime);
    poll();
  }, 0);
  time++;
  if (time === 20) clearTimeout(timer);
};
poll();
`,paraId:108,tocIndex:37},{value:`type CallbackFunction = () => void;

interface CorrectedSetTimeoutOptions {
  interval: number;
  callback: CallbackFunction;
}

class CorrectedSetTimeout {
  private start: number;
  private expected: number;
  private interval: number;
  private callback: CallbackFunction;
  private timerId: number | null = null;
  private rafId: number | null = null;

  constructor({ interval, callback }: CorrectedSetTimeoutOptions) {
    this.start = new Date().getTime();
    this.expected = this.start + interval;
    this.interval = interval;
    this.callback = callback;

    this.run = this.run.bind(this);
    this.correctedTimeout = this.correctedTimeout.bind(this);
    this.clear = this.clear.bind(this);

    this.rafId = requestAnimationFrame(this.run);
    this.timerId = setTimeout(
      this.correctedTimeout,
      interval,
    ) as unknown as number;
  }

  private run() {
    if (this.rafId !== null) {
      this.rafId = requestAnimationFrame(this.run);
    }
  }

  private correctedTimeout() {
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.callback();

    // Calculating the drift
    const drift = new Date().getTime() - this.expected;
    if (drift > 0) {
      // If there is a drift, recalculate the next expected time
      this.expected += this.interval;
      this.timerId = setTimeout(
        this.correctedTimeout,
        this.interval - drift,
      ) as unknown as number;
    }
  }

  public clear() {
    if (this.timerId !== null) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
  }
}

export default CorrectedSetTimeout;

// \u4F7F\u7528\u793A\u4F8B
// const correctedTimeout = new CorrectedSetTimeout({
//   interval: 1000, // 1\u79D2\u95F4\u9694
//   callback: () => {
//     console.log('1\u79D2\u540E\u6267\u884C\u4E86');
//   },
// });

// \u53D6\u6D88\u5B9A\u65F6\u5668\u7684\u793A\u4F8B
// correctedTimeout.clear();
`,paraId:109,tocIndex:38},{value:`let a = (b = 2);
// \u76F8\u5F53\u4E8E b =2 ; a= b \u4ECE\u5DE6\u5F80\u53F3 \uFF08\u5012\u5E8F\uFF09
// a.x \u5C5E\u6027\u8D4B\u503C\u6BD4\u76F4\u63A5\u8D4B\u503C\u4F18\u5148\u7EA7\u8981\u9AD8
a.x = 100;
// \u62C6\u89E3
// 1  a.x =undefined
// 2  a.x = 100
`,paraId:110,tocIndex:39},{value:`\u9898\u76EE
`,paraId:111,tocIndex:39},{value:"\u5C5E\u6027\u8D4B\u503C\u6BD4\u76F4\u63A5\u8D4B\u503C\u4F18\u5148\u7EA7\u8981\u9AD8",paraId:111,tocIndex:39},{value:`let a = { n: 1 };
let b = a;
a.x = a = { n: 2 };

console.log(a.x);
console.log(b.x);

//\u89E3\u6790
// let a = { n: 1 };
// let b = a;
// a.x  = undefined
// a = { n: 2 }
// \u7ED3\u679C   undefined  |  { n: 2 }
`,paraId:112,tocIndex:39},{value:'\u7B54\u6848 ["object", false]',paraId:113,tocIndex:40},{value:'typeof null \u7684\u7ED3\u679C\u662F "object"\uFF0C\u5B83\u662F ECMAScript \u7684 bug\uFF0C\u5176\u5B9E\u5E94\u8BE5\u662F "null"\u3002\u4F46\u8FD9\u4E2A bug \u7531\u6765\u5DF2\u4E45\uFF0C\u5728 JavaScript \u4E2D\u5DF2\u7ECF\u5B58\u5728\u4E86\u5C06\u8FD1\u4E8C\u5341\u5E74\uFF0C\u4E5F\u8BB8\u6C38\u8FDC\u4E0D\u4F1A\u4FEE\u590D\uFF0C\u56E0\u4E3A\u8FD9\u7275\u626F\u5230\u592A\u591A\u7684 Web \u7CFB\u7EDF\uFF0C\u4FEE\u590D\u5B83\u4F1A\u4EA7\u751F\u66F4\u591A\u7684 bug\uFF0C\u4EE4\u8BB8\u591A\u7CFB\u7EDF\u65E0\u6CD5\u6B63\u5E38\u5DE5\u4F5C\u3002\u800C instanceof \u8FD0\u7B97\u7B26\u662F\u7528\u6765\u6D4B\u8BD5\u4E00\u4E2A\u5BF9\u8C61\u5728\u5176\u539F\u578B\u94FE\u6784\u9020\u51FD\u6570\u4E0A\u662F\u5426\u5177\u6709 prototype \u5C5E\u6027\uFF0Cnull \u503C\u5E76\u4E0D\u662F\u4EE5 Object \u539F\u578B\u521B\u5EFA\u51FA\u6765\u7684\uFF0C\u6240\u4EE5 null instanceof Object \u8FD4\u56DE false\u3002',paraId:114,tocIndex:40},{value:"\u5982\u679C\u6570\u7EC4\u4E3A\u7A7A\u5E76\u4E14\u6CA1\u6709\u63D0\u4F9B initialValue\uFF0C \u4F1A\u629B\u51FA TypeError \u3002\u5982\u679C\u6570\u7EC4\u4EC5\u6709\u4E00\u4E2A\u5143\u7D20\uFF08\u65E0\u8BBA\u4F4D\u7F6E\u5982\u4F55\uFF09\u5E76\u4E14\u6CA1\u6709\u63D0\u4F9B initialValue\uFF0C \u6216\u8005\u6709\u63D0\u4F9B initialValue \u4F46\u662F\u6570\u7EC4\u4E3A\u7A7A\uFF0C\u90A3\u4E48\u6B64\u552F\u4E00\u503C\u5C06\u88AB\u8FD4\u56DE\u5E76\u4E14 callback \u4E0D\u4F1A\u88AB\u6267\u884C\u3002",paraId:115,tocIndex:41},{value:`[[3, 2, 1].reduce(Math.pow), [].reduce(Math.pow)];

// A. an error
// B. [9, 0]
// C. [9, NaN]
// D. [9, undefined]
`,paraId:116,tocIndex:41},{value:`var val = 'smtg';
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing');

// A. Value is Something
// B. Value is Nothing
// C. NaN
// D. other
`,paraId:117,tocIndex:42},{value:'\u7B54\u6848\u662F D\u3002\u5B9E\u9645\u4E0A\u8F93\u51FA "Something"\uFF0C\u56E0\u4E3A + \u7684\u4F18\u5148\u7EA7\u6BD4\u6761\u4EF6\u8FD0\u7B97\u7B26 condition ? val1 : val2 \u7684\u4F18\u5148\u7EA7\u9AD8\u3002',paraId:118,tocIndex:42},{value:`var END = Math.pow(2, 53);
var START = END - 100;
var count = 0;
for (var i = START; i <= END; i++) {
  count++;
}
console.log(count);

// A. 0
// B. 100
// C. 101
// D. other
`,paraId:119,tocIndex:43},{value:"\u7B54\u6848\u662F D\u3002\u5728 JavaScript \u4E2D\uFF0C2^53 \u662F\u6700\u5927\u7684\u503C\uFF0C\u6CA1\u6709\u6BD4\u8FD9\u66F4\u5927\u7684\u503C\u4E86\u3002\u6240\u4EE5 2^53 + 1 == 2^53\uFF0C\u6240\u4EE5\u8FD9\u4E2A\u5FAA\u73AF\u65E0\u6CD5\u7EC8\u6B62",paraId:120,tocIndex:43},{value:`function showCase(value) {
  switch (value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(new String('A'));

// A. Case A
// B. Case B
// C. Do not know!
// D. undefined
`,paraId:121,tocIndex:44},{value:'\u7B54\u6848\u662F C\u3002\u5728 switch \u5185\u90E8\u4F7F\u7528\u4E25\u683C\u76F8\u7B49 === \u8FDB\u884C\u5224\u65AD\uFF0C\u5E76\u4E14 new String("A") \u8FD4\u56DE\u7684\u662F\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u800C String("A") \u5219\u662F\u76F4\u63A5\u8FD4\u56DE\u5B57\u7B26\u4E32 "A"',paraId:122,tocIndex:44},{value:`function showCase(value) {
  switch (value) {
    case 'A':
      console.log('Case A');
      break;
    case 'B':
      console.log('Case B');
      break;
    case undefined:
      console.log('undefined');
      break;
    default:
      console.log('Do not know!');
  }
}
showCase(String('A'));

// A. Case A
// B. Case B
// C. Do not know!
// D. undefined
`,paraId:123,tocIndex:44},{value:'\u7B54\u6848\u663E\u7136\u662F A\u3002\u4E0E\u4E0A\u9762\u552F\u4E00\u4E0D\u540C\u7684\u662F\u6CA1\u6709\u4F7F\u7528 new \u5173\u952E\u5B57\uFF0C\u6240\u4EE5\u76F4\u63A5\u8FD4\u56DE\u5B57\u7B26\u4E32\uFF0C\u5B9E\u9645\u4E0A\uFF0Ctypeof string("A") === "string" \u7684\u7ED3\u679C\u662F true',paraId:124,tocIndex:44},{value:"Object.prototype.toString.call(Array.prototype) === '[object Array]' // true",paraId:125,tocIndex:45},{value:`var a = [0];
if ([0]) {
  console.log(a == true);
} else {
  console.log('wut');
}

// A. true
// B. false
// C. "wut"
// D. other
`,paraId:126,tocIndex:46},{value:"\u5F53 [0] \u9700\u8981\u88AB\u5F3A\u5236\u8F6C\u6210 Boolean \u7684\u65F6\u5019\u4F1A\u88AB\u8BA4\u4E3A\u662F true\u3002\u6240\u4EE5\u8FDB\u5165\u7B2C\u4E00\u4E2A if \u8BED\u53E5\uFF0C\u800C a == true \u7684\u8F6C\u6362\u89C4\u5219\u5728 ES5 \u89C4\u8303\u7684\u7B2C 11.9.3 \u8282\u4E2D\u5DF2\u7ECF\u5B9A\u4E49\u8FC7\uFF0C\u4F60\u53EF\u4EE5\u81EA\u5DF1\u8BE6\u7EC6\u63A2\u7D22\u4E0B\u3002",paraId:127,tocIndex:46},{value:'\u89C4\u8303\u6307\u51FA\uFF0C== \u76F8\u7B49\u4E2D\uFF0C\u5982\u679C\u6709\u4E00\u4E2A\u64CD\u4F5C\u6570\u662F\u5E03\u5C14\u7C7B\u578B\uFF0C\u4F1A\u5148\u628A\u4ED6\u8F6C\u6210\u6570\u5B57\uFF0C\u6240\u4EE5\u6BD4\u8F83\u53D8\u6210\u4E86 [0] == 1\uFF1B\u540C\u65F6\u89C4\u8303\u6307\u51FA\u5982\u679C\u5176\u4ED6\u7C7B\u578B\u548C\u6570\u5B57\u6BD4\u8F83\uFF0C\u4F1A\u5C1D\u8BD5\u628A\u8FD9\u4E2A\u7C7B\u578B\u8F6C\u6210\u6570\u5B57\u518D\u8FDB\u884C\u5BBD\u677E\u6BD4\u8F83\uFF0C\u800C\u5BF9\u8C61\uFF08\u6570\u7EC4\u4E5F\u662F\u5BF9\u8C61\uFF09\u4F1A\u5148\u8C03\u7528\u5B83\u7684 toString() \u65B9\u6CD5\uFF0C\u6B64\u65F6 [0] \u4F1A\u53D8\u6210 "0"\uFF0C\u7136\u540E\u5C06\u5B57\u7B26\u4E32 "0" \u8F6C\u6210\u6570\u5B57 0\uFF0C\u800C 0 == 1 \u7684\u7ED3\u679C\u663E\u7136\u662F false\u3002',paraId:128,tocIndex:46},{value:`var ary = [0, 1, 2];
ary[10] = 10;
ary.filter(function (x) {
  console.log('\u6267\u884C\u4E86'); // \u6267\u884C4\u6B21
  return x === undefined;
});

// A. [undefined x 7]
// B. [0, 1, 2, 10]
// C. []
// D. [undefined]
`,paraId:129,tocIndex:47},{value:"filter \u4E3A\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u8C03\u7528\u4E00\u6B21 callback \u51FD\u6570\uFF0C\u5E76\u5229\u7528\u6240\u6709\u4F7F\u5F97 callback \u8FD4\u56DE true \u6216 \u7B49\u4EF7\u4E8E true \u7684\u503C \u7684\u5143\u7D20\u521B\u5EFA\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002callback \u53EA\u4F1A\u5728\u5DF2\u7ECF\u8D4B\u503C\u7684\u7D22\u5F15\u4E0A\u88AB\u8C03\u7528\uFF0C\u5BF9\u4E8E\u90A3\u4E9B\u5DF2\u7ECF\u88AB\u5220\u9664\u6216\u8005\u4ECE\u672A\u88AB\u8D4B\u503C\u7684\u7D22\u5F15\u4E0D\u4F1A\u88AB\u8C03\u7528\u3002\u90A3\u4E9B\u6CA1\u6709\u901A\u8FC7 callback \u6D4B\u8BD5\u7684\u5143\u7D20\u4F1A\u88AB\u8DF3\u8FC7\uFF0C\u4E0D\u4F1A\u88AB\u5305\u542B\u5728\u65B0\u6570\u7EC4\u4E2D\u3002",paraId:130,tocIndex:47},{value:`var ary = Array(3);
ary[0] = 2;
ary.map(function (elem) {
  console.log('\u6267\u884C\u4E86'); // \u6267\u884C1\u6B21
  return '1';
});

// A. [2, 1, 1]
// B. ["1", "1", "1"]
// C. [2, "1", "1"]
// D. other
`,paraId:131,tocIndex:47},{value:`\u7B54\u6848\u662F D\u3002\u5B9E\u9645\u4E0A\u7ED3\u679C\u662F ["1", undefined x 2]\uFF0C\u56E0\u4E3A\u89C4\u8303\u5199\u5F97\u5F88\u6E05\u695A\uFF1A
map \u65B9\u6CD5\u4F1A\u7ED9\u539F\u6570\u7EC4\u4E2D\u7684\u6BCF\u4E2A\u5143\u7D20\u90FD\u6309\u987A\u5E8F\u8C03\u7528\u4E00\u6B21 callback \u51FD\u6570\u3002callback \u6BCF\u6B21\u6267\u884C\u540E\u7684\u8FD4\u56DE\u503C\u7EC4\u5408\u8D77\u6765\u5F62\u6210\u4E00\u4E2A\u65B0\u6570\u7EC4\u3002 callback \u51FD\u6570\u53EA\u4F1A\u5728\u6709\u503C\u7684\u7D22\u5F15\u4E0A\u88AB\u8C03\u7528\uFF1B\u90A3\u4E9B\u4ECE\u6765\u6CA1\u88AB\u8D4B\u8FC7\u503C\u6216\u8005\u4F7F\u7528 delete \u5220\u9664\u7684\u7D22\u5F15\u5219\u4E0D\u4F1A\u88AB\u8C03\u7528\u3002`,paraId:132,tocIndex:47},{value:`function sidEffecting(ary) {
  ary[0] = ary[2];
}

function bar(a, b, c) {
  c = 10;
  sidEffecting(arguments);
  return a + b + c;
}

bar(1, 1, 1);

// A. 3
// B. 12
// C. error
// D. other
`,paraId:133,tocIndex:48},{value:"\u7B54\u6848\u662F D\u3002\u5B9E\u9645\u4E0A\u7ED3\u679C\u662F 21\u3002\u5728 JavaScript \u4E2D\uFF0C\u53C2\u6570\u53D8\u91CF\u548C arguments \u662F\u53CC\u5411\u7ED1\u5B9A\u7684\u3002\u6539\u53D8\u53C2\u6570\u53D8\u91CF\uFF0Carguments \u4E2D\u7684\u503C\u4F1A\u7ACB\u5373\u6539\u53D8\uFF1B\u800C\u6539\u53D8 arguments \u4E2D\u7684\u503C\uFF0C\u53C2\u6570\u53D8\u91CF\u4E5F\u4F1A\u5BF9\u5E94\u6539\u53D8\u3002",paraId:134,tocIndex:48},{value:`Number.MIN_VALUE > 0;

// A. false
// B. true
// C. error
// D. other
`,paraId:135,tocIndex:49},{value:"\u7B54\u6848\u662F B\u3002\u770B\u89C4\u8303\u63CF\u8FF0\u5427 MIN_VALUE \u5C5E\u6027\u662F JavaScript \u91CC\u6700\u63A5\u8FD1 0 \u7684\u6B63\u503C\uFF0C\u800C\u4E0D\u662F\u6700\u5C0F\u7684\u8D1F\u503C\u3002",paraId:136,tocIndex:49},{value:`[1 < 2 < 3, 3 < 2 < 1];

// A. [true, true]
// B. [true, false]
// C. error
// D. other
`,paraId:137,tocIndex:50},{value:"\u7B54\u6848\u662F A\u3002<\u548C>\u7684\u4F18\u5148\u7EA7\u90FD\u662F\u4ECE\u5DE6\u5230\u53F3\uFF0C\u6240\u4EE5 1 < 2 < 3 \u4F1A\u5148\u6BD4\u8F83 1 < 2\uFF0C\u8FD9\u4F1A\u5F97\u5230 true\uFF0C\u4F46\u662F < \u8981\u6C42\u6BD4\u8F83\u7684\u4E24\u8FB9\u90FD\u662F\u6570\u5B57\uFF0C\u6240\u4EE5\u4F1A\u53D1\u751F\u9690\u5F0F\u5F3A\u5236\u8F6C\u6362\uFF0C\u5C06 true \u8F6C\u6362\u6210 1\uFF0C\u6240\u4EE5\u6700\u540E\u5C31\u53D8\u6210\u4E86\u6BD4\u8F83 1 < 3\uFF0C\u7ED3\u679C\u663E\u7136\u4E3A true\u3002\u540C\u7406\u53EF\u4EE5\u5206\u6790\u540E\u8005",paraId:138,tocIndex:50},{value:`const obj = { a: 1 };
const { a } = (obj = { a: 2 });
// \u89E3\u6784\u7684\u662F\u539F\u59CB obj\uFF0C\u8FD8\u662F\u65B0\u5BF9\u8C61\uFF1F
console.log(a); // 2\uFF08\u89E3\u6784\u7684\u662F\u8D4B\u503C\u540E\u7684\u503C\uFF09
`,paraId:139,tocIndex:51},{value:"\u6267\u884C\u987A\u5E8F\uFF1A",paraId:140,tocIndex:51},{value:"\u53F3\u4FA7 obj = {a:2} \u5148\u6267\u884C\u8D4B\u503C\uFF0C\u8FD4\u56DE\u65B0\u5BF9\u8C61",paraId:141,tocIndex:51},{value:`
\u5DE6\u4FA7\u5BF9\u65B0\u5BF9\u8C61\u8FDB\u884C\u89E3\u6784\uFF0C\u63D0\u53D6 a=2`,paraId:141,tocIndex:51},{value:`
\u539F\u7406\u603B\u7ED3\uFF1A\u89E3\u6784\u8D4B\u503C\u8868\u8FBE\u5F0F\u7684\u8FD4\u56DE\u503C\u662F\u7B49\u53F7\u53F3\u4FA7\u7684\u503C\uFF0C\u89E3\u6784\u64CD\u4F5C\u53D1\u751F\u5728\u8D4B\u503C\u4E4B\u540E\u3002`,paraId:141,tocIndex:51},{value:`function fn({ x = 0 } = {}) {
  // \u53C2\u6570\u9ED8\u8BA4\u503C\u4E0E\u89E3\u6784\u9ED8\u8BA4\u503C\u53E0\u52A0
  return x;
}

fn(undefined); // 0\uFF08\u6B63\u5E38\uFF09
fn({ x: undefined }); // 0\uFF08\u9884\u671F\u5E94\u4E3A undefined\uFF09
`,paraId:142,tocIndex:51},{value:"ts \u8B66\u544A Do not access Object.prototype method 'hasOwnProperty' from target object",paraId:143,tocIndex:52},{value:"\u56E0\u4E3A\u76EE\u6807\u5BF9\u8C61\u53EF\u80FD\u4F1A\u88AB\u4FEE\u6539\u6216\u662F\u4E00\u4E2A\u67D0\u79CD\u4E0D\u5177\u5907\u8BE5\u65B9\u6CD5\u7684\u5BF9\u8C61\u3002\u8FD9\u53EF\u80FD\u4F1A\u5BFC\u81F4\u4EE5\u4E0B\u51E0\u79CD\u95EE\u9898\uFF1A",paraId:144,tocIndex:52},{value:"\u5BF9\u8C61\u539F\u578B\u88AB\u7BE1\u6539\uFF1A\u5982\u679C\u6211\u4EEC\u7684\u76EE\u6807\u5BF9\u8C61\u662F\u4E00\u4E2A\u7528\u6237\u5B9A\u4E49\u7684\u5BF9\u8C61\uFF0C\u53EF\u80FD\u4F1A\u91CD\u5199 hasOwnProperty \u65B9\u6CD5\uFF0C\u5BFC\u81F4\u610F\u5916\u7684\u884C\u4E3A\u3002",paraId:145,tocIndex:52},{value:"\u7EE7\u627F\u81EA\u6807\u51C6\u5BF9\u8C61\u7684\u5B9E\u4F8B\uFF1A\u67D0\u4E9B\u5BF9\u8C61\u7684\u5B9E\u4F8B\u53EF\u80FD\u6CA1\u6709 hasOwnProperty \u65B9\u6CD5\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u4E0D\u662F\u4ECE Object \u7EE7\u627F\u7684\uFF0C\u6216\u88AB\u4EE3\u7406\u7B49\u3002",paraId:146,tocIndex:52},{value:"\u65E0\u6CD5\u8C03\u7528\u65B9\u6CD5\uFF1A\u5982\u679C\u4F7F\u7528\u4E86\u4E00\u4E9B\u5E93\u6216\u6846\u67B6\uFF0C\u5B83\u4EEC\u53EF\u80FD\u5728\u5BF9\u8C61\u4E0A\u521B\u5EFA\u4E86\u540C\u540D\u7684\u65B9\u6CD5\uFF0C\u76F4\u63A5\u8C03\u7528\u4F1A\u5BFC\u81F4\u4E0D\u53EF\u9884\u6D4B\u7684\u7ED3\u679C\u3002",paraId:147,tocIndex:52},{value:`const obj = {
  hasOwnProperty: function () {
    return false; // \u91CD\u65B0\u5B9A\u4E49hasOwnProperty\u65B9\u6CD5
  },
  a: 1,
};

// \u4F7F\u7528\u76F4\u63A5\u8C03\u7528\u53EF\u80FD\u5BFC\u81F4\u610F\u5916\u7ED3\u679C
console.log(obj.hasOwnProperty('a')); // \u8F93\u51FA: false

// \u5B89\u5168\u8C03\u7528
console.log(Object.prototype.hasOwnProperty.call(obj, 'a')); // \u8F93\u51FA: true

`,paraId:148,tocIndex:52},{value:"event.target\uFF1A\u8868\u793A\u4E8B\u4EF6\u89E6\u53D1\u7684\u5177\u4F53\u5143\u7D20\u3002",paraId:149,tocIndex:53},{value:"event.currentTarget\uFF1A\u8868\u793A\u5F53\u524D\u6B63\u5728\u5904\u7406\u4E8B\u4EF6\u7684\u5143\u7D20\uFF0C\u5373\u4E8B\u4EF6\u76D1\u542C\u5668\u7ED1\u5B9A\u7684\u5143\u7D20\u3002",paraId:149,tocIndex:53},{value:`
<div id="parent">
  Parent
  <button id="child">Click Me!</button>
</div>

const parent = document.getElementById('parent');

parent.addEventListener('click', function(event) {
  console.log('Current Target: ', event.currentTarget); // \u8FD9\u91CC\u4F1A\u8F93\u51FA\u7236\u5143\u7D20
  console.log('Target: ', event.target);               // \u8FD9\u91CC\u4F1A\u8F93\u51FA\u5177\u4F53\u88AB\u70B9\u51FB\u7684\u5143\u7D20\uFF0C\u6BD4\u5982\u6309\u94AE
});

`,paraId:150,tocIndex:53},{value:`const user = {
	email: "my@email.com",
	updateEmail: email => {
		this.email = email
	}
}

user.updateEmail("new@email.com")
console.log(user.email)
`,paraId:151,tocIndex:54},{value:"updateEmail \u51FD\u6570\u662F\u4E00\u4E2A\u7BAD\u5934\u51FD\u6570\uFF0C\u5B83\u6CA1\u6709\u548C user \u5BF9\u8C61\u7ED1\u5B9A\u3002\u8FD9\u5C31\u610F\u5473\u7740 this \u5173\u952E\u5B57\u4E0D\u4F1A\u5F15\u7528\u5230 user \u5BF9\u8C61\uFF0C\u4F46\u662F\u4F1A\u5F15\u7528\u5230\u5168\u5C40\u5BF9\u8C61\u3002 user \u5BF9\u8C61\u5185\u90E8\u7684 email \u7684\u503C\u4E0D\u4F1A\u66F4\u65B0\u3002\u5F53\u6253\u5370 user.email \u7684\u65F6\u5019\uFF0C \u539F\u59CB\u503C ",paraId:152,tocIndex:54},{value:"my@email.com",paraId:152,tocIndex:54},{value:" \u88AB\u8FD4\u56DE\u3002",paraId:152,tocIndex:54},{value:`const user = {
	email: "e@mail.com",
	password: "12345"
}

const updateUser = ({ email, password }) => {
	if (email) {
		Object.assign(user, { email })
	}

	if (password) {
		user.password = password
	}

	return user
}

const updatedUser = updateUser({ email: "new@email.com" })

console.log(updatedUser === user) // true
`,paraId:153,tocIndex:55},{value:"updateUser \u51FD\u6570\u66F4\u65B0user\u7684 email \u548C password \u5C5E\u6027\u7684\u503C\uFF0C \u5982\u679C\u5B83\u4EEC\u7684\u503C\u4F20\u5165\u51FD\u6570\uFF0C \u51FD\u6570\u8FD4\u56DE\u7684\u5C31\u662F user \u5BF9\u8C61\u3002 updateUser \u51FD\u6570\u7684\u8FD4\u56DE\u503C\u662F user \u5BF9\u8C61\uFF0C\u610F\u5473\u7740updatedUser\u7684\u503C\u4E0E user \u6307\u5411\u7684\u662F\u540C\u4E00\u4E2A user \u5BF9\u8C61\u3002updatedUser === user \u4E3A true.",paraId:154,tocIndex:55},{value:`const person = {
  name: "Lydia Hallie",
  age: 21
}

[...person] //  \u62A5\u9519 
{...person} // \u4E0D\u62A5\u9519
`,paraId:155,tocIndex:56},{value:"\u5F53\u4F60\u4F7F\u7528\u5C55\u5F00\u8FD0\u7B97\u7B26 ... \u6765\u8BD5\u56FE\u5C55\u5F00\u4E00\u4E2A\u5BF9\u8C61 person \u5230\u4E00\u4E2A\u6570\u7EC4\u65F6\uFF0CJavaScript \u4F1A\u629B\u51FA\u9519\u8BEF\uFF0C\u56E0\u4E3A person \u662F\u4E00\u4E2A\u666E\u901A\u5BF9\u8C61\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u53EF\u8FED\u4EE3\u7684\u5BF9\u8C61\uFF08iterable\uFF09\u3002",paraId:156,tocIndex:56},{value:"\u53EF\u8FED\u4EE3\u5BF9\u8C61\u662F\u5B9E\u73B0\u4E86 Symbol.iterator \u65B9\u6CD5\u7684\u5BF9\u8C61\uFF0C\u6BD4\u5982\u6570\u7EC4\u3001\u5B57\u7B26\u4E32\u3001Set \u548C Map \u7B49\u3002\u800C\u666E\u901A\u5BF9\u8C61\uFF08\u5982\u5B57\u9762\u91CF\u5BF9\u8C61\uFF09\u4E0D\u5177\u5907\u8FD9\u4E2A\u7279\u6027\u3002",paraId:157,tocIndex:56},{value:"\u4F7F\u7528 {...person} \u662F\u5229\u7528\u6269\u5C55\u8FD0\u7B97\u7B26\uFF08spread operator\uFF09\u6765\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u3002\u8FD9\u662F\u5408\u6CD5\u7684\uFF0C\u56E0\u4E3A\u5BF9\u8C61\u7684\u6269\u5C55\u8FD0\u7B97\u7B26\u7528\u4E8E\u5C55\u5F00\u5BF9\u8C61\u7684\u952E\u503C\u5BF9\u5230\u4E00\u4E2A\u65B0\u5BF9\u8C61\u4E2D\u3002",paraId:158,tocIndex:56},{value:"\u8FD9\u4E2A\u64CD\u4F5C\u4F1A\u590D\u5236 person \u5BF9\u8C61\u7684\u5C5E\u6027\u5230\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61\u4E2D\uFF0C\u800C\u4E0D\u662F\u5C1D\u8BD5\u5C06\u5176\u8F6C\u6362\u4E3A\u6570\u7EC4\u3002",paraId:159,tocIndex:56},{value:`class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)
`,paraId:160,tocIndex:57},{value:"\u5728 ES2020 \u4E2D\uFF0C\u901A\u8FC7 # \u6211\u4EEC\u53EF\u4EE5\u7ED9 class \u6DFB\u52A0\u79C1\u6709\u53D8\u91CF\u3002\u5728 class \u7684\u5916\u90E8\u6211\u4EEC\u65E0\u6CD5\u83B7\u53D6\u8BE5\u503C\u3002\u5F53\u6211\u4EEC\u5C1D\u8BD5\u8F93\u51FA counter.#number\uFF0C\u8BED\u6CD5\u9519\u8BEF\u88AB\u629B\u51FA\uFF1A\u6211\u4EEC\u65E0\u6CD5\u5728 class Counter \u5916\u90E8\u83B7\u53D6\u5B83!",paraId:161,tocIndex:57},{value:"\u6709\u540C\u5B66\u53CD\u9988\uFF0C\u4E0A\u9762\u7684\u4EE3\u7801\u5728 Chrome console\u91CC\uFF0C\u662F\u53EF\u4EE5\u6253\u5370\u51FA 11 \u8FD9\u4E2A\u503C\u7684\uFF0C\u6D4B\u8BD5\u4E4B\u540E\u786E\u5B9E\u80FD\u770B\u5230\uFF0C\u8FD9\u4E00\u70B9\u5728MDN\u4E0A\u4E5F\u6709\u660E\u786E\u8BF4\u660E\uFF08\u53EA\u5728Chrome\u7684console\u63A7\u5236\u53F0\u91CC\uFF0C\u624D\u80FD\u591F\u8BBF\u95EE\u5230\u79C1\u6709\u5C5E\u6027\uFF0C\u8FD9\u662F\u4E3A\u4E86\u5F00\u53D1\u8C03\u8BD5\u7684\u4FBF\u5229\uFF09",paraId:162,tocIndex:57},{value:`// sum.js
export default function sum(x) {
	return x + x;
}

// index.js
import * as sum from "./sum";
`,paraId:163,tocIndex:58},{value:"\u7B54\u6848\uFF1A sum.default(4)",paraId:164,tocIndex:58},{value:"\u4F7F\u7528\u7B26\u53F7 *\uFF0C\u6211\u4EEC\u5F15\u5165\u6587\u4EF6\u4E2D\u7684\u6240\u6709\u503C\uFF0C\u5305\u62EC\u9ED8\u8BA4\u548C\u5177\u540D\u3002\u5982\u679C\u6211\u4EEC\u6709\u4EE5\u4E0B\u6587\u4EF6\uFF1A",paraId:165,tocIndex:58},{value:`// info.js
export const name = "Lydia";
export const age = 21;
export default "I love JavaScript";
// index.js
import * as info from "./info";
console.log(info);
`,paraId:166,tocIndex:58},{value:"info--:",paraId:167,tocIndex:58},{value:`{
  default: "I love JavaScript",
  name: "Lydia",
  age: 21
}
`,paraId:168,tocIndex:58},{value:`const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();
`,paraId:169,tocIndex:59},{value:"// ReferenceError",paraId:170,tocIndex:59},{value:"\u901A\u8FC7 const \u5173\u952E\u5B57\u58F0\u660E\u7684\u53D8\u91CF\u5728\u88AB\u521D\u59CB\u5316\u4E4B\u524D\u4E0D\u53EF\u88AB\u5F15\u7528\uFF1A\u8FD9\u88AB\u79F0\u4E4B\u4E3A \u6682\u65F6\u6027\u6B7B\u533A\u3002\u5728\u51FD\u6570 getInfo \u4E2D, \u53D8\u91CF randomValue \u58F0\u660E\u5728getInfo \u7684\u4F5C\u7528\u57DF\u7684\u6B64\u6CD5\u73AF\u5883\u4E2D\u3002\u5728\u60F3\u8981\u5BF9 typeof randomValue \u8FDB\u884Clog\u4E4B\u524D\uFF0C\u53D8\u91CF randomValue \u4ECD\u672A\u88AB\u521D\u59CB\u5316\uFF1A \u9519\u8BEFReferenceError \u88AB\u629B\u51FA! JS\u5F15\u64CE\u5E76\u4E0D\u4F1A\u6839\u636E\u4F5C\u7528\u57DF\u94FE\u7F51\u4E0A\u5BFB\u627E\u8BE5\u53D8\u91CF\uFF0C\u56E0\u4E3A\u6211\u4EEC\u5DF2\u7ECF\u5728 getInfo \u51FD\u6570\u4E2D\u58F0\u660E\u4E86 randomValue \u53D8\u91CF",paraId:171,tocIndex:59},{value:`const spookyItems = ["\u{1F47B}", "\u{1F383}", "\u{1F578}"];
({ item: spookyItems[3] } = { item: "\u{1F480}" });

console.log(spookyItems);
`,paraId:172,tocIndex:60},{value:'\u6B63\u786E\uFF1A["\u{1F47B}", "\u{1F383}", "\u{1F578}", "\u{1F480}"]',paraId:173,tocIndex:60},{value:'\u901A\u8FC7\u89E3\u6784\u5BF9\u8C61\u4EEC\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4ECE\u53F3\u624B\u8FB9\u7684\u5BF9\u8C61\u4E2D\u62C6\u51FA\u503C\uFF0C\u5E76\u4E14\u5C06\u62C6\u51FA\u7684\u503C\u5206\u914D\u7ED9\u5DE6\u624B\u8FB9\u5BF9\u8C61\u540C\u540D\u7684\u5C5E\u6027\u3002\u5728\u8FD9\u79CD\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5C06\u503C "\u{1F480}" \u5206\u914D\u7ED9 spookyItems[3]\u3002\u76F8\u5F53\u4E8E\u6211\u4EEC\u6B63\u5728\u7BE1\u6539\u6570\u7EC4 spookyItems\uFF0C\u6211\u4EEC\u7ED9\u5B83\u6DFB\u52A0\u4E86\u503C "\u{1F480}"\u3002\u5F53\u8F93\u51FA spookyItems \u65F6\uFF0C\u7ED3\u679C\u4E3A ["\u{1F47B}", "\u{1F383}", "\u{1F578}", "\u{1F480}"]\u3002',paraId:174,tocIndex:60},{value:`const name = "Lydia Hallie";

console.log(!typeof name === "object");
console.log(!typeof name === "string");
`,paraId:175,tocIndex:61},{value:"false false",paraId:176,tocIndex:61},{value:'typeof name \u8FD4\u56DE "string"\u3002\u5B57\u7B26\u4E32 "string" \u662F\u4E00\u4E2A truthy \u7684\u503C\uFF0C\u56E0\u6B64 !typeof name \u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C false\u3002 false === "object" \u548C false === "string" \u90FD\u8FD4\u56DE false\u3002 \uFF08\u5982\u679C\u6211\u4EEC\u60F3\u68C0\u6D4B\u4E00\u4E2A\u503C\u7684\u7C7B\u578B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u7528 !== \u800C\u4E0D\u662F !typeof\uFF09',paraId:177,tocIndex:61},{value:`function nums(a, b) {
  if
  (a > b)
  console.log('a is bigger')
  else 
  console.log('b is bigger')
  return 
  a + b
}

console.log(nums(4, 2))
console.log(nums(1, 2))
`,paraId:178,tocIndex:62},{value:"// a is bigger, undefined and b is bigger, undefined",paraId:179,tocIndex:62},{value:"\u5728JavaScript\u4E2D\uFF0C\u6211\u4EEC\u4E0D\u5FC5\u663E\u5F0F\u5730\u7F16\u5199\u5206\u53F7(;)\uFF0C\u4F46\u662FJavaScript\u5F15\u64CE\u4ECD\u7136\u5728\u8BED\u53E5\u4E4B\u540E\u81EA\u52A8\u6DFB\u52A0\u5206\u53F7\u3002\u8FD9\u79F0\u4E3A\u81EA\u52A8\u5206\u53F7\u63D2\u5165\u3002\u4F8B\u5982\uFF0C\u4E00\u4E2A\u8BED\u53E5\u53EF\u4EE5\u662F\u53D8\u91CF\uFF0C\u6216\u8005\u50CFthrow\u3001return\u3001break\u8FD9\u6837\u7684\u5173\u952E\u5B57\u3002 \u5728\u8FD9\u91CC\uFF0C\u6211\u4EEC\u5728\u65B0\u7684\u4E00\u884C\u4E0A\u5199\u4E86\u4E00\u4E2Areturn\u8BED\u53E5\u548C\u53E6\u4E00\u4E2A\u503Ca + b \u3002\u7136\u800C\uFF0C\u7531\u4E8E\u5B83\u662F\u4E00\u4E2A\u65B0\u884C\uFF0C\u5F15\u64CE\u5E76\u4E0D\u77E5\u9053\u5B83\u5B9E\u9645\u4E0A\u662F\u6211\u4EEC\u60F3\u8981\u8FD4\u56DE\u7684\u503C\u3002\u76F8\u53CD\uFF0C\u5B83\u4F1A\u5728return\u540E\u9762\u81EA\u52A8\u6DFB\u52A0\u5206\u53F7\u3002\u4F60\u53EF\u4EE5\u8FD9\u6837\u770B:",paraId:180,tocIndex:62},{value:`  return;
  a + b
`,paraId:181,tocIndex:62},{value:"\u8FD9\u610F\u5473\u7740\u6C38\u8FDC\u4E0D\u4F1A\u5230\u8FBEa + b\uFF0C\u56E0\u4E3A\u51FD\u6570\u5728return\u5173\u952E\u5B57\u4E4B\u540E\u505C\u6B62\u8FD0\u884C\u3002\u5982\u679C\u6CA1\u6709\u8FD4\u56DE\u503C\uFF0C\u5C31\u50CF\u8FD9\u91CC\uFF0C\u51FD\u6570\u8FD4\u56DEundefined\u3002\u6CE8\u610F\uFF0C\u5728if/else\u8BED\u53E5\u4E4B\u540E\u6CA1\u6709\u81EA\u52A8\u63D2\u5165!",paraId:182,tocIndex:62},{value:"delete \u540C\u6837\u9002\u7528\u4E8E\u539F\u578B\u5BF9\u8C61",paraId:183,tocIndex:63},{value:"delete \u64CD\u4F5C\u7B26\u7528\u4E8E\u5220\u9664\u5BF9\u8C61\u7684\u67D0\u4E2A\u5C5E\u6027\uFF1B\u5982\u679C\u6CA1\u6709\u6307\u5411\u8FD9\u4E2A\u5C5E\u6027\u7684\u5F15\u7528\uFF0C\u90A3\u5B83\u6700\u7EC8\u4F1A\u88AB\u91CA\u653E\u3002",paraId:184,tocIndex:63},{value:"delete\u64CD\u4F5C\u7B26\u8FD4\u56DE\u4E00\u4E2A\u5E03\u5C14\u503C\uFF1A true\u6307\u5220\u9664\u6210\u529F\uFF0C\u5426\u5219\u8FD4\u56DEfalse\u3002\u4F46\u662F\u901A\u8FC7 var, const \u6216 let \u5173\u952E\u5B57\u58F0\u660E\u7684\u53D8\u91CF\u65E0\u6CD5\u7528 delete \u64CD\u4F5C\u7B26\u6765\u5220\u9664\u3002",paraId:185,tocIndex:63},{value:`const name = 'cq'
delete name
console.log('name-delete',delete name) // false

age  = 21
console.log('age-delete',delete age) // true

`,paraId:186,tocIndex:63},{value:"name\u53D8\u91CF\u7531const\u5173\u952E\u5B57\u58F0\u660E\uFF0C\u6240\u4EE5\u5220\u9664\u4E0D\u6210\u529F:\u8FD4\u56DE false\u3002",paraId:187,tocIndex:63},{value:"\u800C\u6211\u4EEC\u8BBE\u5B9Aage\u7B49\u4E8E21\u65F6,\u6211\u4EEC\u5B9E\u9645\u4E0A\u6DFB\u52A0\u4E86\u4E00\u4E2A\u540D\u4E3Aage\u7684\u5C5E\u6027\u7ED9\u5168\u5C40\u5BF9\u8C61\u3002\u5BF9\u8C61\u4E2D\u7684\u5C5E\u6027\u662F\u53EF\u4EE5\u5220\u9664\u7684\uFF0C\u5168\u5C40\u5BF9\u8C61\u4E5F\u662F\u5982\u6B64\uFF0C\u6240\u4EE5delete age\u8FD4\u56DEtrue.",paraId:188,tocIndex:63},{value:`// counter.js
let counter = 10;
export default counter;

// index.js
import myCounter from './counter';
myCounter += 1;
console.log(myCounter);
`,paraId:189,tocIndex:64},{value:"\u5F15\u5165\u7684\u6A21\u5757\u662F \u53EA\u8BFB \u7684: \u4F60\u4E0D\u80FD\u4FEE\u6539\u5F15\u5165\u7684\u6A21\u5757\u3002\u53EA\u6709\u5BFC\u51FA\u4ED6\u4EEC\u7684\u6A21\u5757\u624D\u80FD\u4FEE\u6539\u5176\u503C\u3002 \u5F53\u6211\u4EEC\u7ED9myCounter\u589E\u52A0\u4E00\u4E2A\u503C\u7684\u65F6\u5019\u4F1A\u629B\u51FA\u4E00\u4E2A\u5F02\u5E38\uFF1A myCounter\u662F\u53EA\u8BFB\u7684\uFF0C\u4E0D\u80FD\u88AB\u4FEE\u6539\u3002",paraId:190,tocIndex:64},{value:`const set = new Set([1, 1, 2, 3, 4]);

console.log(set);   // Set(4) {1, 2, 3, 4}

let x = y = 10;// \u662F\u4E0B\u9762\u8FD9\u4E2A\u8868\u8FBE\u5F0F\u7684\u7F29\u5199:
y = 10;
let x = y;


function Car() {
  this.make = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make); // Maserati

function Car() {
  this.make1 = "Lamborghini";
  return { make: "Maserati" };
}

const myCar = new Car();
console.log(myCar.make1); // undefind

`,paraId:191,tocIndex:65}]}}]);
