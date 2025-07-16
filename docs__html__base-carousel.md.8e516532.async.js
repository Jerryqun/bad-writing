"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[9691],{79457:function(r,t,n){n.r(t);var i=n(72269),_=n(93359),m=n(61788),c=n(19977),x=n(91558),d=n(24268),g=n(96057),h=n(85939),a=n(53683),s=n(80936),o=n(67294),l=n(3069),e=n(85893);function u(){return(0,e.jsx)(a.dY,{children:(0,e.jsx)(o.Suspense,{fallback:(0,e.jsx)(s.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"\u624B\u5199\u8F6E\u64AD",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#\u624B\u5199\u8F6E\u64AD",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"\u624B\u5199\u8F6E\u64AD"]}),(0,e.jsx)("p",{children:(0,e.jsx)("a",{href:"https://fe.ecool.fun/topic/983ff108-fded-4272-96b6-24a0a20af286?orderBy=updateTime&order=desc&tagId=12",target:"_blank",children:l.texts[0].value})}),(0,e.jsx)(d.Z,{lang:"html",children:l.texts[1].value})]})})})})}t.default=u},3069:function(r,t,n){n.r(t),n.d(t,{texts:function(){return i}});const i=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .container {
      position: relative;
      width: 600px;
      height: 400px;
      margin: 0 auto;
      background-color: gray;
      overflow: hidden;
    }

    .ul-img {
      position: absolute;
      display: flex;
      width: 4200px;
      height: 400px;
      left: 0;
      padding: 0;
      margin: 0;
    }

    .li-img {
      list-style: none;
      width: 600px;
      height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: aquamarine;
      font-size: 30px;
      font-weight: 800;
    }

    /* \u4E0A\u4E00\u5F20\u3001\u4E0B\u4E00\u5F20 */
    .prev,
    .next {
      position: absolute;
      height: 400px;
      width: 80px;
      display: flex;
      justify-content: center;
      align-items: center;
      top: 0;
    }

    .prev {
      left: 0;
    }

    .next {
      right: 0;
    }

    .prev span,
    .next span {
      display: block;
      color: #fff;
      width: 40px;
      height: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: rgba(0, 0, 0, 0.5);
      border-radius: 50%;
      cursor: pointer;
    }

    /* \u6570\u5B57\u5207\u6362\u6309\u94AE */
    .num-box {
      position: absolute;
      left: 50%;
      bottom: 20px;
      transform: translate(-50%, 0);
      z-index: 2;
    }

    .num-ul {
      list-style: none;
      margin: 0;
      padding: 0;
      display: flex;
    }

    .num-ul li {
      height: 20px;
      width: 20px;
      border-radius: 50%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 9px;
      color: #fff;
      margin: 0 4px;
      cursor: pointer;
      user-select: none;
    }
  </style>
  <body style="height: 2000px">
    <div class="container">
      <!--  \u56FE\u7247\u5217\u8868  -->
      <ul class="ul-img">
        <li class="li-img">1</li>
        <li class="li-img">2</li>
        <li class="li-img">3</li>
        <li class="li-img">4</li>
        <li class="li-img">5</li>
      </ul>

      <!--  \u4E0A\u4E00\u5F20\u3001\u4E0B\u4E00\u5F20\u6309\u94AE  -->
      <div class="prev">
        <span>&lt;</span>
      </div>
      <div class="next">
        <span>&gt;</span>
      </div>

      <!-- \u6570\u5B57\u5207\u6362\u6309\u94AE -->
      <div class="num-box">
        <ul class="num-ul">
          <li data-index="0">1</li>
          <li data-index="1">2</li>
          <li data-index="2">3</li>
          <li data-index="3">4</li>
          <li data-index="4">5</li>
        </ul>
      </div>
    </div>
  </body>
  <script>
    // \u83B7\u53D6\u5143\u7D20\u8282\u70B9
    var containerDom = document.getElementsByClassName('container')[0]; // \u5BB9\u5668
    var ulDom = document.getElementsByClassName('ul-img')[0]; // \u56FE\u7247\u76D2\u5B50
    var prevDom = document.getElementsByClassName('prev')[0].firstElementChild; // \u4E0A\u4E00\u5F20\u6309\u94AE
    var nextDom = document.getElementsByClassName('next')[0].firstElementChild; // \u4E0B\u4E00\u5F20\u6309\u94AE
    var numUlDom = document.getElementsByClassName('num-ul')[0]; // \u6570\u5B57\u6309\u94AE\u7236\u7EA7\u5BB9\u5668
    var numList = document
      .getElementsByClassName('num-ul')[0]
      .getElementsByTagName('li'); // \u6570\u5B57\u5207\u6362\u6309\u94AE\u5217\u8868

    // \u5B9A\u4E49\u5168\u5C40\u53D8\u91CF
    var currentIndex = 0; // \u5F53\u524D\u663E\u793A\u7684\u56FE\u7247\u7D22\u5F15
    var timer = null; // \u81EA\u52A8\u64AD\u653E\u5B9A\u65F6\u5668
    numList[currentIndex].style.backgroundColor = '#ccc'; // \u9ED8\u8BA4\u9009\u4E2D\u7B2C\u4E00\u4E2A\u6570\u5B57
    // \u4E0A\u4E00\u5F20
    prevDom.addEventListener('click', prevFun);
    // \u4E0B\u4E00\u5F20
    nextDom.addEventListener('click', nextFun);
    // \u9F20\u6807\u79FB\u5165\u5BB9\u5668\uFF0C\u505C\u6B62\u81EA\u52A8\u64AD\u653E
    containerDom.addEventListener('mouseenter', stopAutoPlay);
    // \u9F20\u6807\u79FB\u51FA\u5BB9\u5668\uFF0C\u5F00\u542F\u81EA\u52A8\u64AD\u653E
    containerDom.addEventListener('mouseleave', autoPlay);
    // \u6570\u5B57\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6
    numUlDom.addEventListener('click', numClick);

    // \u5F00\u542F\u81EA\u52A8\u64AD\u653E
    autoPlay();

    // \u5207\u6362\u4E0A\u4E00\u5F20
    function prevFun() {
      ulDom.style.transition = '0.5s';
      numList[currentIndex].style.backgroundColor = ''; // \u6E05\u7A7A\u4E0A\u4E00\u4E2A\u6309\u94AE\u7684\u6837\u5F0F
      if (currentIndex === 0) {
        ulDom.style.transition = '0s'; // \u4E3A\u4E86\u5B9E\u73B0\u65E0\u7F1D\u6EDA\u52A8\uFF0C\u6E05\u9664\u52A8\u753B
        currentIndex = 4;
      } else {
        --currentIndex;
      }
      ulDom.style.left = \`-\${currentIndex * 600}px\`;
      numList[currentIndex].style.backgroundColor = '#ccc';
    }
    // \u5207\u6362\u4E0B\u4E00\u5F20
    function nextFun() {
      ulDom.style.transition = '0.5s';
      numList[currentIndex].style.backgroundColor = ''; // \u6E05\u7A7A\u4E0A\u4E00\u4E2A\u6309\u94AE\u7684\u6837\u5F0F
      if (currentIndex === 4) {
        ulDom.style.transition = '0s'; // \u4E3A\u4E86\u5B9E\u73B0\u65E0\u7F1D\u6EDA\u52A8\uFF0C\u6E05\u9664\u52A8\u753B
        currentIndex = 0; // \u91CD\u65B0\u64AD\u653E\u7B2C\u4E00\u5F20
      } else {
        ++currentIndex;
      }
      ulDom.style.left = \`-\${currentIndex * 600}px\`;
      numList[currentIndex].style.backgroundColor = '#ccc'; // \u8BBE\u7F6E\u6309\u94AE\u9009\u4E2D\u6837\u5F0F
    }

    // \u6570\u5B57\u6309\u94AE\u70B9\u51FB\u4E8B\u4EF6
    function numClick(e) {
      ulDom.style.transition = '0.5s';
      let index = e.target.dataset.index;
      if (index == undefined) {
        return;
      }
      numList[currentIndex].style.backgroundColor = ''; // \u6E05\u7A7A\u4E0A\u4E00\u4E2A\u6309\u94AE\u7684\u6837\u5F0F
      currentIndex = Number(index);
      numList[currentIndex].style.backgroundColor = '#ccc';
      ulDom.style.left = \`-\${currentIndex * 600}px\`;
    }

    // \u5FAA\u73AF\u64AD\u653E
    function autoPlay() {
      timer = setInterval(nextFun, 2000);
    }

    // \u5173\u95ED\u81EA\u52A8\u64AD\u653E
    function stopAutoPlay() {
      // \u6E05\u9664\u5B9A\u65F6\u5668
      clearInterval(timer);
    }
  <\/script>
</html>
`,paraId:1,tocIndex:0}]}}]);
