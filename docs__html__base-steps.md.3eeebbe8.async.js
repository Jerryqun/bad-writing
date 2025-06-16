"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7447],{84767:function(l,t,n){n.r(t);var d=n(72269),u=n(93359),c=n(61788),m=n(19977),p=n(91558),o=n(24268),g=n(96057),h=n(85939),_=n(53683),s=n(80936),a=n(67294),i=n(87544),e=n(85893);function r(){return(0,e.jsx)(_.dY,{children:(0,e.jsx)(a.Suspense,{fallback:(0,e.jsx)(s.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u624B\u5199\u65B0\u624B\u6307\u5F15",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u624B\u5199\u65B0\u624B\u6307\u5F15",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u624B\u5199\u65B0\u624B\u6307\u5F15"]}),(0,e.jsxs)("p",{children:[i.texts[0].value,(0,e.jsx)("a",{href:"https://driverjs.com/",target:"_blank",children:i.texts[1].value})]}),(0,e.jsx)(o.Z,{lang:"html",children:i.texts[2].value})]})})})})}t.default=r},87544:function(l,t,n){n.r(t),n.d(t,{texts:function(){return d}});const d=[{value:"\u4F7F\u7528\u73B0\u6210\u7684\u5E93 ",paraId:0,tocIndex:0},{value:"driverjs",paraId:0,tocIndex:0},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>\u65B0\u624B\u6307\u5F15\u529F\u80FD</title>
    <style>
      * {
        margin: 0;
        padding: 0;
      }

      body {
        box-sizing: border-box;
      }

      .stepBlock {
        background-color: burlywood;
        margin-right: 20px;
      }

      .positionStyle {
        position: absolute;
        z-index: 200;
      }

      /* \u8499\u5C42\u6837\u5F0F */
      .overlay {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
      }
    </style>
  </head>

  <body>
    <section id="mask">
      <section class="positionStyle" id="tip"></section>
      <section class="positionStyle" id="curStepMask"></section>
    </section>

    <section style="margin:200px;">
      <span id="first" class="stepBlock"> \u7B2C\u4E00\u6B65 </span>
      <span id="second" class="stepBlock"> \u7B2C\u4E8C\u6B65 </span>
      <span id="third" class="stepBlock"> \u7B2C\u4E09\u6B65 </span>
    </section>

    <section style="margin-top:30px">
      <button onclick="setMask()">\u5F00\u59CB\u6307\u5F15</button>
    </section>

    <script>
      const tipDict = [
        { id: 'first', content: '\u8FD9\u91CC\u662F\u7B2C1\u6B65\u54E6' },
        { id: 'second', content: '\u8FD9\u91CC\u662F\u7B2C2\u6B65\u54E6' },
        { id: 'third', content: '\u8FD9\u91CC\u662F\u6700\u540E\u4E00\u6B65\u54E6\uFF0C\u70B9\u51FB\u5B8C\u6210\u6309\u94AE\u7ED3\u675F\u65B0\u624B\u6307\u5F15' },
      ];
      let flag = 0;

      function setMask() {
        // \u6DFB\u52A0\u8499\u5C42
        let mask = document.getElementById('mask');
        mask.setAttribute('class', 'overlay');
        setTip();
      }

      function removeMask() {
        // \u79FB\u9664\u8499\u5C42
        let mask = document.getElementById('mask');
        mask.setAttribute('class', '');

        // \u79FB\u9664tip\u63D0\u793A\u7684\u5B50\u5143\u7D20
        removeTip();
        removeStepMask();
      }

      function setTip() {
        if (flag < tipDict.length) {
          // \u83B7\u53D6\u5F53\u524D\u6B65\u9AA4\u7684\u5143\u7D20\uFF0C\u4EE5\u53CA\u5143\u7D20\u7684\u4F4D\u7F6E\u4FE1\u606F\uFF0C\u4F9B\u540E\u7EED\u5B9A\u4F4D\u63D0\u793A\u4FE1\u606F\u548C\u8986\u76D6\u4FE1\u606F\u4F7F\u7528
          const curStepEle = document.getElementById(tipDict[flag].id);
          const bound = curStepEle.getBoundingClientRect();
          console.log('bound: ', bound);

          // \u627E\u5230id\u4E3Atip\u7684\u5143\u7D20
          let ele = document.getElementById('tip');

          // \u5982\u679C\u5B58\u5728\u5B50\u5143\u7D20\uFF0C\u5148\u79FB\u9664
          removeTip();
          removeStepMask();

          // \u521B\u5EFA\u63D0\u793A\u4FE1\u606F\u548C\u4E0B\u4E00\u6B65\u7684\u7EDF\u4E00\u7236\u5143\u7D20\uFF0C\u65B9\u4FBF\u540E\u7EED\u79FB\u9664\u5143\u7D20
          let node = document.createElement('div');
          // \u521B\u5EFA\u63D0\u793A\u4FE1\u606F
          let tipText = document.createTextNode(tipDict[flag].content);
          // \u5C06\u63D0\u793A\u4FE1\u606F\u63D2\u5165\u5230\u7236\u5143\u7D20
          node.appendChild(tipText);
          // \u521B\u5EFA\u201C\u4E0B\u4E00\u6B65\u201D\u6309\u94AE
          let nextBtn = document.createElement('button');
          nextBtn.innerHTML = flag === tipDict.length - 1 ? '\u5B8C\u6210' : '\u4E0B\u4E00\u6B65';
          nextBtn.onclick = setTip;
          // \u5C06\u6309\u94AE\u63D2\u5165\u5230\u7236\u5143\u7D20
          node.appendChild(nextBtn);
          // \u8BBE\u7F6E\u7EDF\u4E00\u7236\u5143\u7D20\u7684\u4F4D\u7F6E

          ele.style.left = bound.x + 'px';
          ele.style.top = bound.y + 20 + 'px';
          // \u5C06\u7EDF\u4E00\u7684\u7236\u5143\u7D20\u63D2\u5165\u5230id\u4E3Atip\u7684\u5143\u7D20
          ele.appendChild(node);

          // \u5C06\u5F53\u524D\u6B65\u9AA4\u9AD8\u4EAE\u663E\u793A
          let tag = flag - 1;
          if (tag >= 0) {
            document.getElementById(tipDict[tag].id).style = '';
          }
          // const curStepEle = document.getElementById(tipDict[flag].id)
          // const bound = curStepEle.getBoundingClientRect()

          const curStepMask = document.getElementById('curStepMask');
          curStepMask.style.left = bound.x + 'px';
          curStepMask.style.top = bound.y + 'px';

          const curStepEleClone = curStepEle.cloneNode(true);
          curStepMask.appendChild(curStepEleClone);

          flag++;
        } else {
          flag = 0;
          removeMask();
        }
      }
      function removeStepMask() {
        let ele = document.getElementById('curStepMask');
        let child = ele.lastElementChild;
        if (child) {
          ele.removeChild(child);
        }
      }
      function removeTip() {
        let ele = document.getElementById('tip');
        let child = ele.lastElementChild;
        if (child) {
          ele.removeChild(child);
        }
      }
    <\/script>
  </body>
</html>
`,paraId:1,tocIndex:0}]}}]);
