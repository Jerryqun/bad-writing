"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[6663],{48351:function(a,_,n){n.r(_);var r=n(72269),o=n(93359),m=n(61788),E=n(19977),x=n(91558),i=n(24268),g=n(96057),h=n(85939),d=n(53683),s=n(80936),l=n(67294),t=n(21598),e=n(85893);function u(){return(0,e.jsx)(d.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(s.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u4EE3\u7406\u6A21\u5F0F",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u4EE3\u7406\u6A21\u5F0F",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u4EE3\u7406\u6A21\u5F0F"]}),(0,e.jsxs)("p",{children:[t.texts[0].value,(0,e.jsx)("br",{}),t.texts[1].value,(0,e.jsx)("br",{}),t.texts[2].value]}),(0,e.jsx)(i.Z,{lang:"js",children:t.texts[3].value})]})})})})}_.default=u},21598:function(a,_,n){n.r(_),n.d(_,{texts:function(){return r}});const r=[{value:"\u4EE3\u7406\u6A21\u5F0F\uFF0C\u5F0F\u5982\u5176\u540D\u2014\u2014\u5728\u67D0\u4E9B\u60C5\u51B5\u4E0B\uFF0C\u51FA\u4E8E\u79CD\u79CD\u8003\u8651/\u9650\u5236\uFF0C",paraId:0,tocIndex:0},{value:`
\u4E00\u4E2A\u5BF9\u8C61\u4E0D\u80FD\u76F4\u63A5\u8BBF\u95EE\u53E6\u4E00\u4E2A\u5BF9\u8C61\uFF0C\u9700\u8981\u4E00\u4E2A\u7B2C\u4E09\u8005\uFF08\u4EE3\u7406\uFF09\u7275\u7EBF\u642D\u6865\u4ECE\u800C\u95F4\u63A5\u8FBE\u5230\u8BBF\u95EE\u76EE\u7684\uFF0C`,paraId:0,tocIndex:0},{value:`
\u8FD9\u6837\u7684\u6A21\u5F0F\u5C31\u662F\u4EE3\u7406\u6A21\u5F0F\u3002`,paraId:0,tocIndex:0},{value:`// \u89C4\u5B9A\u793C\u7269\u7684\u6570\u636E\u7ED3\u6784\u7531type\u548Cvalue\u7EC4\u6210
const present = {
  type: '\u5DE7\u514B\u529B',
  value: 60,
};

// \u4E3A\u7528\u6237\u589E\u5F00presents\u5B57\u6BB5\u5B58\u50A8\u793C\u7269
const girl = {
  // \u59D3\u540D
  name: '\u5C0F\u7F8E',
  // \u81EA\u6211\u4ECB\u7ECD
  //   aboutMe: '...'\uFF08\u5927\u5BB6\u81EA\u884C\u8111\u8865\u5427\uFF09
  // \u5E74\u9F84
  age: 24,
  // \u804C\u4E1A
  career: 'teacher',
  // \u5047\u5934\u50CF
  //   fakeAvatar: 'xxxx'(\u65B0\u57A3\u7ED3\u8863\u7684\u56FE\u7247\u5730\u5740\uFF09
  // \u771F\u5B9E\u5934\u50CF
  avatar: 'xxxx'(\u81EA\u5DF1\u7684\u7167\u7247\u5730\u5740),
  // \u624B\u673A\u53F7
  phone: 123456,
  // \u793C\u7269\u6570\u7EC4
  presents: [],
  // \u62D2\u653650\u5757\u4EE5\u4E0B\u7684\u793C\u7269
  bottomValue: 50,
  // \u8BB0\u5F55\u6700\u8FD1\u4E00\u6B21\u6536\u5230\u7684\u793C\u7269
  lastPresent: present,
};

// \u5A5A\u4ECB\u6240\u63A8\u51FA\u4E86\u5C0F\u793C\u7269\u529F\u80FD
const lovers = new Proxy(girl, {
  get: function (girl, key) {
    if (baseInfo.indexOf(key) !== -1 && !user.isValidated) {
      alert('\u60A8\u8FD8\u6CA1\u6709\u5B8C\u6210\u9A8C\u8BC1\u54E6');
      return;
    }

    //...(\u6B64\u5904\u7701\u7565\u5176\u5B83\u6709\u7684\u6CA1\u7684\u5404\u79CD\u6821\u9A8C\u903B\u8F91)

    // \u6B64\u5904\u6211\u4EEC\u8BA4\u4E3A\u53EA\u6709\u9A8C\u8BC1\u8FC7\u7684\u7528\u6237\u624D\u53EF\u4EE5\u8D2D\u4E70VIP
    if (user.isValidated && privateInfo.indexOf(key) && !user.isVIP) {
      alert('\u53EA\u6709VIP\u624D\u53EF\u4EE5\u67E5\u770B\u8BE5\u4FE1\u606F\u54E6');
      return;
    }
  },

  set: function (girl, key, val) {
    // \u6700\u8FD1\u4E00\u6B21\u9001\u6765\u7684\u793C\u7269\u4F1A\u5C1D\u8BD5\u8D4B\u503C\u7ED9lastPresent\u5B57\u6BB5
    if (key === 'lastPresent') {
      if (val.value < girl.bottomValue) {
        alert('sorry\uFF0C\u60A8\u7684\u793C\u7269\u88AB\u62D2\u6536\u4E86');
        return;
      }

      // \u5982\u679C\u6CA1\u6709\u62D2\u6536\uFF0C\u5219\u8D4B\u503C\u6210\u529F\uFF0C\u540C\u65F6\u5E76\u5165presents\u6570\u7EC4
      girl[lastPresent] = val;
      girl[presents] = [...presents, val];
    }
  },
});

// \u4E8B\u4EF6\u4EE3\u7406\u7684\u5B9E\u73B0

// \u7528\u4EE3\u7406\u6A21\u5F0F\u5B9E\u73B0\u591A\u4E2A\u5B50\u5143\u7D20\u7684\u4E8B\u4EF6\u76D1\u542C\uFF0C\u4EE3\u7801\u4F1A\u7B80\u5355\u5F88\u591A\uFF1A

// \u83B7\u53D6\u7236\u5143\u7D20
const father = document.getElementById('father');

// \u7ED9\u7236\u5143\u7D20\u5B89\u88C5\u4E00\u6B21\u76D1\u542C\u51FD\u6570
father.addEventListener('click', function (e) {
  // \u8BC6\u522B\u662F\u5426\u662F\u76EE\u6807\u5B50\u5143\u7D20
  if (e.target.tagName === 'A') {
    // \u4EE5\u4E0B\u662F\u76D1\u542C\u51FD\u6570\u7684\u51FD\u6570\u4F53
    e.preventDefault();
    alert(\`\u6211\u662F\${e.target.innerText}\`);
  }
});
`,paraId:1,tocIndex:0}]}}]);
