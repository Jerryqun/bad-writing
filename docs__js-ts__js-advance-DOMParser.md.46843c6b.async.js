"use strict";(self.webpackChunkblog_cq=self.webpackChunkblog_cq||[]).push([[7399],{30125:function(i,_,n){n.r(_);var d=n(72269),u=n(93359),m=n(61788),h=n(19977),c=n(91558),r=n(24268),g=n(96057),E=n(85939),o=n(53683),a=n(80936),l=n(67294),t=n(67674),e=n(85893);function s(){return(0,e.jsx)(o.dY,{children:(0,e.jsx)(l.Suspense,{fallback:(0,e.jsx)(a.Z,{}),children:(0,e.jsx)(e.Fragment,{children:(0,e.jsxs)("div",{className:"markdown",children:[(0,e.jsxs)("h2",{id:"domparser",children:[(0,e.jsx)("a",{"aria-hidden":"true",tabIndex:"-1",href:"#domparser",children:(0,e.jsx)("span",{className:"icon icon-link"})}),"DOMParser"]}),(0,e.jsxs)("p",{children:[(0,e.jsx)("a",{target:"_blank",href:"https://blog.csdn.net/wuyujin1997/article/details/127623424",children:t.texts[0].value}),(0,e.jsx)("br",{}),t.texts[1].value]}),(0,e.jsx)(r.Z,{lang:"js",children:t.texts[2].value})]})})})})}_.default=s},67674:function(i,_,n){n.r(_),n.d(_,{texts:function(){return d}});const d=[{value:"\u53C2\u8003",paraId:0,tocIndex:0},{value:`
javascript \u539F\u751F\u7C7B, DOMParser \u628A\u5B57\u7B26\u4E32\u683C\u5F0F\u7684 HTML \u6587\u6863\u6E90\u7801\u8F6C\u6362\u6210 document DOM \u5BF9\u8C61`,paraId:0,tocIndex:0},{value:`var stringContainingXMLSource = \`<!DOCTYPE html> <html lang="en"> <head> <title>wuyujin1997</title> </head> <body> <div id="wyj"> <h2><a href="https://wuyujin.blog.csdn.net/">wuyujin1997 DOMParser demo</a></h2> </div> </body> </html>\`;

var parser = new DOMParser();
var doc = parser.parseFromString(stringContainingXMLSource, 'text/html');

// \u8FD9\u4E2A doc \u5BF9\u8C61\u5C31\u662F\u6574\u4E2AHTML\u6587\u6863\u7684 DOM\u5BF9\u8C61
console.log('type: ', Object.prototype.toString.call(doc)); //   [object HTMLDocument]
console.log(doc);

// document \u7684 DOM\u5BF9\u8C61 \u53EF\u4EE5\u5F00\u59CB\u8C03\u7528\u539F\u751FAPI\u901A\u8FC7\u9009\u62E9\u5668\u5BF9\u5B50\u8282\u70B9\u8FDB\u884C\u64CD\u4F5C\u4E86\u3002
console.log(doc.querySelector('div#wyj'));
console.log(doc.getElementById('wyj'));

/**
 * cheerio \u5728 node \u9879\u76EE\u4E2D\u7684\u4F7F\u7528
 */

var cheerio = require('cheerio');
var htmlSourceString = \`<!DOCTYPE html> <html lang="en"> <head> <title>wuyujin1997</title> </head> <body> <div id="wyj"> <h2><a href="https://wuyujin.blog.csdn.net/">wuyujin1997 DOMParser demo</a></h2> </div> </body> </html>\`;

var cheerioOptions = {
  xml: {
    withDomLvl1: true,
    normalizeWhitespace: false,
    xmlMode: true,
    decodeEntities: true,
  },
};

const $ = cheerio.load(htmlSourceString, cheerioOptions);
console.log($.html());
console.log($.text());

var myDiv = $('div#wyj');
// \u7528\u9009\u62E9\u5668\u83B7\u53D6\u7684DOM\u8282\u70B9\u5BF9\u8C61 \u4E5F\u53EF\u4EE5\u8C03\u7528 .html() .text()
`,paraId:1,tocIndex:0}]}}]);
