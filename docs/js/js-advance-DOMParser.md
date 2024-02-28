---
nav: Js
group: 进阶
toc: content
title: DOMParser
---

## DOMParser

<a  target="_blank" href="https://blog.csdn.net/wuyujin1997/article/details/127623424">参考</a><br/>
javascript 原生类, DOMParser 把字符串格式的 HTML 文档源码转换成 document DOM 对象

```js
var stringContainingXMLSource = `<!DOCTYPE html> <html lang="en"> <head> <title>wuyujin1997</title> </head> <body> <div id="wyj"> <h2><a href="https://wuyujin.blog.csdn.net/">wuyujin1997 DOMParser demo</a></h2> </div> </body> </html>`;

var parser = new DOMParser();
var doc = parser.parseFromString(stringContainingXMLSource, 'text/html');

// 这个 doc 对象就是整个HTML文档的 DOM对象
console.log('type: ', Object.prototype.toString.call(doc)); //   [object HTMLDocument]
console.log(doc);

// document 的 DOM对象 可以开始调用原生API通过选择器对子节点进行操作了。
console.log(doc.querySelector('div#wyj'));
console.log(doc.getElementById('wyj'));

/**
 * cheerio 在 node 项目中的使用
 */

var cheerio = require('cheerio');
var htmlSourceString = `<!DOCTYPE html> <html lang="en"> <head> <title>wuyujin1997</title> </head> <body> <div id="wyj"> <h2><a href="https://wuyujin.blog.csdn.net/">wuyujin1997 DOMParser demo</a></h2> </div> </body> </html>`;

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
// 用选择器获取的DOM节点对象 也可以调用 .html() .text()
```
